import { StatisticsFetchGQL } from '../statistics/graphql/api.statistics.get';
import { ChartDataStore } from './chart-data.store';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { SeriesMapper } from '../../services/statistics/series/mapper/series-mapper.service';
import * as i0 from "@angular/core";
export declare class ChartDataStoreFactory {
    protected fetchGQL: StatisticsFetchGQL;
    protected formatter: DataTypeFormatter;
    protected seriesMapper: SeriesMapper;
    constructor(fetchGQL: StatisticsFetchGQL, formatter: DataTypeFormatter, seriesMapper: SeriesMapper);
    create(): ChartDataStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartDataStoreFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ChartDataStoreFactory>;
}
