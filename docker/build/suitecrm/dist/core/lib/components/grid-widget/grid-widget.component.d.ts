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
import { OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleValueStatisticsStoreFactory } from '../../store/single-value-statistics/single-value-statistics.store.factory';
import { LanguageStore } from '../../store/language/language.store';
import { ContentAlign, ContentJustify, FieldMap, SingleValueStatisticsState, StatisticMetadata, StatisticWidgetLayoutCol, StatisticWidgetLayoutRow, StatisticWidgetOptions, StringMap, TextColor, TextSizes, ViewContext, WidgetMetadata } from 'common';
import * as i0 from "@angular/core";
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
    params: {
        [key: string]: string;
    };
}
export declare class GridWidgetComponent implements OnInit, OnDestroy {
    protected language: LanguageStore;
    protected factory: SingleValueStatisticsStoreFactory;
    config: GridWidgetConfig;
    vm$: Observable<GridWidgetState>;
    loading: boolean;
    messageLabelKey: string;
    private subs;
    private statistics;
    private loading$;
    private gridWidgetInput;
    constructor(language: LanguageStore, factory: SingleValueStatisticsStoreFactory);
    ngOnInit(): void;
    ngOnDestroy(): void;
    validateConfig(): boolean;
    getRowClass(): string;
    getColClass(): string;
    getContextModule(): string;
    getMessageContext(): StringMap;
    getMessageFields(statistics: StatisticsMap): FieldMap;
    getSizeClass(size: TextSizes): string;
    getFontWeight(bold: string | boolean): string;
    getColor(color: TextColor): string;
    getJustify(justify: ContentJustify): string;
    getAlign(align: ContentAlign): string;
    getLayoutRowClass(row: StatisticWidgetLayoutRow): string;
    getClass(layoutCol: StatisticWidgetLayoutCol): string;
    isEmptyFieldValue(fieldValue: any): boolean;
    getLabel(statisticMetadata: StatisticMetadata, attribute: string): string;
    getLayout(): StatisticWidgetLayoutRow[];
    protected buildStatistics(): void;
    protected setupLoading$(): void;
    protected setupReload(): void;
    protected setupVM(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridWidgetComponent, "scrm-grid-widget", never, { "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
