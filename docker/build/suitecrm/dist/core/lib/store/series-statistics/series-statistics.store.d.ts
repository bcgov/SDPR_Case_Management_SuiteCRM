import { BehaviorSubject, Observable } from 'rxjs';
import { SeriesStatistic } from 'common';
import { StatisticsFetchGQL } from '../statistics/graphql/api.statistics.get';
import { StatisticsStore } from '../statistics/statistics.store';
import { StatisticsState } from 'common';
import * as i0 from "@angular/core";
export interface SeriesStatisticsState extends StatisticsState {
    statistic: SeriesStatistic;
}
export declare class SeriesStatisticsStore extends StatisticsStore {
    protected fetchGQL: StatisticsFetchGQL;
    state$: Observable<SeriesStatisticsState>;
    statistic$: Observable<SeriesStatistic>;
    protected cache$: Observable<any>;
    protected internalState: SeriesStatisticsState;
    protected store: BehaviorSubject<SeriesStatisticsState>;
    constructor(fetchGQL: StatisticsFetchGQL);
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: SeriesStatisticsState): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SeriesStatisticsStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SeriesStatisticsStore>;
}
