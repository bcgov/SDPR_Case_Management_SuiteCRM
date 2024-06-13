import { StatisticsFetchGQL } from '../statistics/graphql/api.statistics.get';
import { SeriesStatisticsStore } from './series-statistics.store';
import * as i0 from "@angular/core";
export declare class SeriesStatisticsStoreFactory {
    protected fetchGQL: StatisticsFetchGQL;
    constructor(fetchGQL: StatisticsFetchGQL);
    create(): SeriesStatisticsStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<SeriesStatisticsStoreFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SeriesStatisticsStoreFactory>;
}
