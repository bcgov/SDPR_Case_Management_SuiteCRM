import { StatisticsFetchGQL } from '../statistics/graphql/api.statistics.get';
import { SingleValueStatisticsStore } from './single-value-statistics.store';
import { FieldManager } from '../../services/record/field/field.manager';
import * as i0 from "@angular/core";
export declare class SingleValueStatisticsStoreFactory {
    protected fetchGQL: StatisticsFetchGQL;
    protected fieldManager: FieldManager;
    constructor(fetchGQL: StatisticsFetchGQL, fieldManager: FieldManager);
    create(): SingleValueStatisticsStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<SingleValueStatisticsStoreFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SingleValueStatisticsStoreFactory>;
}
