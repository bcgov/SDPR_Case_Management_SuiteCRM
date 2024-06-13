import { StateStore } from '../state';
import { BehaviorSubject, Observable } from 'rxjs';
import { Statistic, StatisticsMap, StatisticsQuery, StatisticsState, ViewContext } from 'common';
import { StatisticsFetchGQL } from './graphql/api.statistics.get';
import * as i0 from "@angular/core";
export declare class StatisticsStore implements StateStore {
    protected fetchGQL: StatisticsFetchGQL;
    state$: Observable<StatisticsState>;
    statistic$: Observable<Statistic>;
    loading$: Observable<boolean>;
    protected cache$: Observable<any>;
    protected internalState: StatisticsState;
    protected store: BehaviorSubject<StatisticsState>;
    constructor(fetchGQL: StatisticsFetchGQL);
    clear(): void;
    clearAuthBased(): void;
    /**
     * Get Statistic query
     *
     * @returns {object} StatisticsQuery
     */
    getQuery(): StatisticsQuery;
    get context(): ViewContext;
    set context(context: ViewContext);
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @param {object} query to use
     * @param {boolean} load if to load
     * @returns {object} Observable<any>
     */
    init(module: string, query: StatisticsQuery, load?: boolean): Observable<Statistic>;
    /**
     * Load / reload statistics
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<ListViewState>
     */
    load(useCache?: boolean): Observable<Statistic>;
    /**
     * Set loading
     *
     * @param {boolean} loading bool
     */
    setLoading(loading: boolean): void;
    /**
     * Set Statistic value
     *
     * @param {string} key string
     * @param {object} statistic Statistic
     * @param {boolean} cache bool
     */
    setStatistic(key: string, statistic: Statistic, cache?: boolean): void;
    protected addNewState(statistic: Statistic): void;
    protected mapStatistics(data: StatisticsMap): Statistic;
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: StatisticsState): void;
    /**
     * Get records cached Observable or call the backend
     *
     * @param {string} module to use
     * @param {object} query to use
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<any>
     */
    protected fetchStatistics(module: string, query: StatisticsQuery, useCache?: boolean): Observable<StatisticsMap>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StatisticsStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StatisticsStore>;
}
