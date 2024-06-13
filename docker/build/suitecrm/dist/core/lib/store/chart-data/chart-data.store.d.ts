import { BehaviorSubject, Observable } from 'rxjs';
import { ChartDataSource, ChartOptions, SeriesResult, SeriesStatistic, Statistic } from 'common';
import { SeriesStatisticsState, SeriesStatisticsStore } from '../series-statistics/series-statistics.store';
import { StatisticsFetchGQL } from '../statistics/graphql/api.statistics.get';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { SeriesMapper } from '../../services/statistics/series/mapper/series-mapper.service';
import * as i0 from "@angular/core";
export interface ChartDataState extends SeriesStatisticsState {
    dataSource?: ChartDataSource;
}
export declare class ChartDataStore extends SeriesStatisticsStore {
    protected fetchGQL: StatisticsFetchGQL;
    protected formatter: DataTypeFormatter;
    protected seriesMapper: SeriesMapper;
    state$: Observable<ChartDataState>;
    statistic$: Observable<SeriesStatistic>;
    loading$: Observable<boolean>;
    protected internalState: ChartDataState;
    protected store: BehaviorSubject<ChartDataState>;
    protected defaultOptions: ChartOptions;
    constructor(fetchGQL: StatisticsFetchGQL, formatter: DataTypeFormatter, seriesMapper: SeriesMapper);
    setDefaultOptions(chartOptions: ChartOptions): void;
    getDataSource(): ChartDataSource;
    protected addNewState(statistic: Statistic): void;
    protected injectDefaultValues(statistic: Statistic): void;
    protected buildCharDataSource(statistic: Statistic): ChartDataSource;
    protected buildSeriesResult(statistic: Statistic): SeriesResult;
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: ChartDataState): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartDataStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ChartDataStore>;
}
