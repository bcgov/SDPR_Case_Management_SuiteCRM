import { StatisticsFetchGQL } from './graphql/api.statistics.get';
import { StatisticsStore } from './statistics.store';
import * as i0 from "@angular/core";
export declare class StatisticsStoreFactory {
    protected fetchGQL: StatisticsFetchGQL;
    constructor(fetchGQL: StatisticsFetchGQL);
    create(): StatisticsStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<StatisticsStoreFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StatisticsStoreFactory>;
}
