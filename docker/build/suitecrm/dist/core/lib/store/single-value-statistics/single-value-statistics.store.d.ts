import { BehaviorSubject, Observable } from 'rxjs';
import { Statistic } from 'common';
import { StatisticsFetchGQL } from '../statistics/graphql/api.statistics.get';
import { StatisticsStore } from '../statistics/statistics.store';
import { FieldManager } from '../../services/record/field/field.manager';
import { SingleValueStatisticsState, SingleValueStatisticsStoreInterface } from 'common';
import * as i0 from "@angular/core";
export declare class SingleValueStatisticsStore extends StatisticsStore implements SingleValueStatisticsStoreInterface {
    protected fetchGQL: StatisticsFetchGQL;
    protected fieldManager: FieldManager;
    state$: Observable<SingleValueStatisticsState>;
    statistic$: Observable<Statistic>;
    loading$: Observable<boolean>;
    protected cache$: Observable<any>;
    protected internalState: SingleValueStatisticsState;
    protected store: BehaviorSubject<SingleValueStatisticsState>;
    constructor(fetchGQL: StatisticsFetchGQL, fieldManager: FieldManager);
    protected addNewState(statistic: Statistic): void;
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: SingleValueStatisticsState): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SingleValueStatisticsStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SingleValueStatisticsStore>;
}
