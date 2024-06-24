/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE
 * WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Supercharged by SuiteCRM" logo. If the display of the logos is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Supercharged by SuiteCRM".
 */

import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {combineLatestWith, Observable, of, Subscription} from 'rxjs';
import {map, shareReplay, take} from 'rxjs/operators';
import {SingleValueStatisticsStoreFactory} from '../../store/single-value-statistics/single-value-statistics.store.factory';
import {LanguageStore} from '../../store/language/language.store';
import {
    ContentAlign,
    ContentJustify,
    FieldMap,
    isTrue,
    SingleValueStatisticsState,
    SingleValueStatisticsStoreInterface,
    StatisticMetadata,
    StatisticsQuery,
    StatisticWidgetLayoutCol,
    StatisticWidgetLayoutRow,
    StatisticWidgetOptions,
    StringMap,
    TextColor,
    TextSizes,
    ViewContext,
    WidgetMetadata,
} from 'common';

interface StatisticsEntry {
    labelKey?: string;
    type: string;
    store: SingleValueStatisticsStoreInterface;
}

interface StatisticsEntryMap {
    [key: string]: StatisticsEntry;
}

interface StatisticsMap {
    [key: string]: SingleValueStatisticsState;
}

interface GridWidgetState {
    layout: StatisticWidgetLayoutRow[];
    statistics: StatisticsMap;
    tooltipTitleText?: string;
    description?: string;
}

export interface GridWidgetConfig {
    rowClass?: string;
    columnClass?: string;
    layout: StatisticWidgetOptions;
    widgetConfig?: WidgetMetadata;
    queryArgs?: StatisticsQueryArgs;
}

export interface StatisticsQueryArgs {
    module: string;
    context: ViewContext;
    params: { [key: string]: string };
}

@Component({
    selector: 'scrm-grid-widget',
    templateUrl: './grid-widget.component.html',
    styles: []
})

export class GridWidgetComponent implements OnInit, OnDestroy {
    @Input() config: GridWidgetConfig;
    vm$: Observable<GridWidgetState>;
    loading = true;
    messageLabelKey: string;
    private subs: Subscription[] = [];
    private statistics: StatisticsEntryMap = {};
    private loading$: Observable<boolean>;
    private gridWidgetInput: GridWidgetConfig;

    constructor(
        protected language: LanguageStore,
        protected factory: SingleValueStatisticsStoreFactory
    ) {
    }

    ngOnInit(): void {

        const isValid = this.validateConfig();
        if (!isValid) {
            return;
        }
        this.gridWidgetInput = this.config;
        this.buildStatistics();
        this.setupLoading$();
        this.setupVM();
        this.setupReload();
    }

    ngOnDestroy(): void {
        this.subs.forEach(sub => sub.unsubscribe());
    }

    public validateConfig(): boolean {

        if (!this.config || !this.config.layout) {
            this.messageLabelKey = 'LBL_CONFIG_NO_CONFIG';
            return false;
        }

        if (!this.config.queryArgs.context || !this.config.queryArgs.module) {
            this.messageLabelKey = 'LBL_CONFIG_BAD_CONTEXT';
            return false;
        }

        if (!this.config.widgetConfig) {
            this.messageLabelKey = 'LBL_CONFIG_NO_CONFIG';
            return false;
        }

        if (!this.config.layout || !this.config.layout.rows) {
            this.messageLabelKey = 'LBL_CONFIG_NO_STATISTICS_KEY';
            return false;
        }

        return true;
    }

    public getRowClass(): string {
        return this.gridWidgetInput.rowClass;
    }

    public getColClass(): string {
        return this.gridWidgetInput.columnClass;
    }

    public getContextModule(): string {
        return this.gridWidgetInput.queryArgs.context.module;
    }

    public getMessageContext(): StringMap {
        const module = this.getContextModule();

        if (!module) {
            return {};
        }

        return {
            module
        };
    }

    public getMessageFields(statistics: StatisticsMap): FieldMap {

        if (!statistics || !Object.keys(statistics).length) {
            return {};
        }

        const fields = {};

        Object.keys(statistics).forEach(key => {
            const statistic = statistics[key];
            fields[key] = statistic.field;
        });

        return fields;
    }

    getSizeClass(size: TextSizes): string {
        const sizeMap = {
            regular: 'text-regular',
            medium: 'text-medium',
            large: 'text-large',
            'x-large': 'text-x-large',
            'xx-large': 'text-xx-large',
            huge: 'text-huge'
        };

        return sizeMap[size] || 'text-regular';
    }

    getFontWeight(bold: string | boolean): string {
        let fontWeight = 'font-weight-normal';

        if (bold && isTrue(bold)) {
            fontWeight = 'font-weight-bolder';
        }

        return fontWeight;
    }

    getColor(color: TextColor): string {
        const sizeMap = {
            yellow: 'text-yellow',
            blue: 'text-blue',
            green: 'text-green',
            red: 'text-red',
            purple: 'text-purple',
            dark: 'text-dark',
            grey: 'text-grey'
        };

        return sizeMap[color] || '';
    }

    getJustify(justify: ContentJustify): string {
        const justifyMap = {
            start: 'justify-content-start',
            end: 'justify-content-end',
            center: 'justify-content-center',
            between: 'justify-content-between',
            around: 'justify-content-around'
        };

        return justifyMap[justify] || 'justify-content-center';
    }

    getAlign(align: ContentAlign): string {
        const alignMap = {
            start: 'align-items-start',
            end: 'align-items-end',
            center: 'align-items-center',
            baseline: 'align-items-baseline',
            stretch: 'align-items-stretch'
        };

        return alignMap[align] || 'align-items-center';
    }

    getLayoutRowClass(row: StatisticWidgetLayoutRow): string {
        let className = '';
        if (row && row.class) {
            className = row.class;
        }
        return className;
    }

    getClass(layoutCol: StatisticWidgetLayoutCol): string {
        let className = '';
        if (layoutCol) {
            className = layoutCol.class;
        }

        className = className + ' '
            + this.getSizeClass(layoutCol.size) + ' '
            + this.getFontWeight(layoutCol.bold) + ' '
            + this.getColor(layoutCol.color);

        return className;
    }

    isEmptyFieldValue(fieldValue: any): boolean {
        // Handle the cases, when input value is an string, array, objects or any other type
        if (typeof fieldValue === 'string') {
            fieldValue = fieldValue.trim();
        }

        return fieldValue == null
            || typeof fieldValue === 'undefined'
            || fieldValue === ''
            || fieldValue.length === 0;
    }

    getLabel(statisticMetadata: StatisticMetadata, attribute: string): string {

        let label = '';
        if (statisticMetadata && statisticMetadata[attribute]) {
            label = this.language.getFieldLabel(statisticMetadata[attribute]);
        }

        return label;
    }

    getLayout(): StatisticWidgetLayoutRow[] {
        return this.gridWidgetInput.layout.rows;
    }

    protected buildStatistics(): void {

        this.gridWidgetInput.layout.rows.forEach(row => {

            if (!row.cols || !row.cols.length) {
                return;
            }

            row.cols.forEach(col => {

                if (!col.statistic) {
                    return;
                }

                if (col.store) {
                    this.statistics[col.statistic] = {
                        type: col.statistic,
                        store: col.store
                    };
                    return;
                }

                this.statistics[col.statistic] = {
                    type: col.statistic,
                    store: this.factory.create()
                };

                this.statistics[col.statistic].store.init(
                    this.gridWidgetInput.queryArgs.module,
                    {
                        key: col.statistic,
                        context: {...this.gridWidgetInput.queryArgs.context},
                        params: {...this.gridWidgetInput.queryArgs.params}
                    } as StatisticsQuery,
                ).pipe(take(1)).subscribe();
            });
        });

    }

    protected setupLoading$(): void {

        const loadings$: Observable<boolean>[] = [];
        Object.keys(this.statistics).forEach(type => loadings$.push(this.statistics[type].store.loading$));

        let statisticObs: Observable<boolean[]> = of([]);

        if(loadings$.length < 1) {
            statisticObs = of([]);
        } else if(loadings$.length === 1){
            statisticObs = loadings$[0].pipe(
                map(value => [value])
            );
        } else {
            let firsObs = null;
            let others;
            [firsObs, ...others] = loadings$;
            statisticObs = firsObs.pipe(
                combineLatestWith(others)
            );
        }

        this.loading$ = statisticObs.pipe(
            map((loadings) => {

                if (!loadings || loadings.length < 1) {
                    this.loading = false;
                    return false;
                }
                let loading = true;

                loadings.forEach(value => {
                    loading = loading && value;
                });
                this.loading = loading;

                return loading;
            }));
        this.subs.push(this.loading$.subscribe());
    }

    protected setupReload(): void {

        if (this.gridWidgetInput.widgetConfig.reload$) {
            this.subs.push(this.gridWidgetInput.widgetConfig.reload$.subscribe(() => {
                if (this.loading === false) {

                    this.loading = true;
                    Object.keys(this.statistics).forEach(statisticKey => {
                        const statistic = this.statistics[statisticKey];

                        if (!statistic.store) {
                            return;
                        }

                        statistic.store.load(false).pipe(take(1)).subscribe();
                    });
                }
            }));
        }
    }

    protected setupVM(): void {

        let allStatistics$: Observable<SingleValueStatisticsState[]> = of([]).pipe(shareReplay());
        const layout$ = of(this.getLayout()).pipe(shareReplay());

        if (this.statistics && Object.keys(this.statistics).length > 0) {
            const statistics$: Observable<SingleValueStatisticsState>[] = [];
            Object.keys(this.statistics).forEach(type => statistics$.push(this.statistics[type].store.state$));

            if(statistics$.length < 1) {
                allStatistics$ = of([]);
            } else if(statistics$.length === 1){
                allStatistics$ = statistics$[0].pipe(
                    map(value => [value])
                );
            } else {
                let firsObs = null;
                let others;
                [firsObs, ...others] = statistics$;
                allStatistics$ = firsObs.pipe(
                    combineLatestWith(others)
                );
            }
        }

        this.vm$ = allStatistics$.pipe(
            combineLatestWith(layout$),
            map(([statistics, layout]: [SingleValueStatisticsState[], StatisticWidgetLayoutRow[]]) => {

                const statsMap: { [key: string]: SingleValueStatisticsState } = {};
                const tooltipTitles = [];
                const descriptions = [];

                statistics.forEach(value => {

                    statsMap[value.query.key] = value;

                    const tooltip = this.getLabel(value.statistic.metadata, 'tooltip_title_key');
                    if (tooltip) {
                        tooltipTitles.push(tooltip);
                    }

                    const description = this.getLabel(value.statistic.metadata, 'descriptionKey');
                    if (description) {
                        descriptions.push(description);
                    }


                });

                return {
                    layout,
                    statistics: statsMap,
                    tooltipTitleText: tooltipTitles.join(' | '),
                    description: descriptions.join(' | '),
                } as GridWidgetState;
            }));
    }

}
