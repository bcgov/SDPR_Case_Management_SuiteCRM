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
import { OnInit } from '@angular/core';
import { ChartDataSource, ChartMetadata, ChartsWidgetOptions } from 'common';
import { Observable, Subscription } from 'rxjs';
import { ChartDataStoreFactory } from '../../../../store/chart-data/chart-data.store.factory';
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { LanguageStore, LanguageStringMap } from '../../../../store/language/language.store';
import { ChartDataState, ChartDataStore } from '../../../../store/chart-data/chart-data.store';
import * as i0 from "@angular/core";
interface ChartStatistic {
    key: string;
    chartType: string;
    statisticsType: string;
    labelKey: string;
    store: ChartDataStore;
    reload: boolean;
}
interface CharDataMap {
    [key: string]: ChartDataState;
}
interface ChartStatisticMap {
    [key: string]: ChartStatistic;
}
interface ChartSidebarWidgetState {
    statistics: {
        [key: string]: ChartDataState;
    };
    appStrings: LanguageStringMap;
}
export declare class ChartSidebarWidgetComponent extends BaseWidgetComponent implements OnInit {
    language: LanguageStore;
    protected factory: ChartDataStoreFactory;
    charts: ChartStatisticMap;
    titleLabelKey: string;
    title: string;
    messageLabelKey: string;
    selectedChart: string;
    chartType: string;
    dataSource: ChartDataSource;
    vm$: Observable<ChartSidebarWidgetState>;
    loading$: Observable<boolean>;
    appStrings$: Observable<LanguageStringMap>;
    loading: boolean;
    protected subs: Subscription[];
    constructor(language: LanguageStore, factory: ChartDataStoreFactory);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get configuredCharts(): ChartMetadata[];
    get chartOptions(): ChartsWidgetOptions;
    isConfigured(): boolean;
    getLabelKey(stat: ChartDataState): string;
    getKey(chart: ChartMetadata): string;
    protected validateConfig(): boolean;
    protected setupCharts(charts: ChartMetadata[]): void;
    protected buildChartInfo(key: string, chart: ChartMetadata): void;
    protected initChartStore(key: string, chart: ChartMetadata): void;
    protected setHeaderTitle(options: ChartsWidgetOptions): void;
    onChartSelect(): void;
    protected setupVM(): void;
    protected mapChartData(statistics: ChartDataState[]): CharDataMap;
    protected setupReload(): void;
    protected setupLoading(): void;
    protected reloadSelectedChart(useCache?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartSidebarWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChartSidebarWidgetComponent, "chart-sidebar-widget", never, {}, {}, never, never, false, never>;
}
export {};
