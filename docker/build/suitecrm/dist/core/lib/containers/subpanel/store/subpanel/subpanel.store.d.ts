import { StateStore } from '../../../../store/state';
import { RecordList, RecordListStore } from '../../../../store/record-list/record-list.store';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { LanguageStore } from '../../../../store/language/language.store';
import { ColumnDefinition, Record, RecordListMeta, SearchCriteria, SearchCriteriaFilter, SearchMeta, Statistic, StatisticsQuery, StatisticsQueryMap, StatisticWidgetOptions, SubPanelDefinition } from 'common';
import { SingleValueStatisticsStore } from '../../../../store/single-value-statistics/single-value-statistics.store';
import { SingleValueStatisticsStoreFactory } from '../../../../store/single-value-statistics/single-value-statistics.store.factory';
import { FilterListStore } from "../../../../store/saved-filters/filter-list.store";
import { FilterListStoreFactory } from "../../../../store/saved-filters/filter-list.store.factory";
import { MetadataStore } from "../../../../store/metadata/metadata.store.service";
import { SavedFilter, SavedFilterMap } from "../../../../store/saved-filters/saved-filter.model";
import { UserPreferenceStore } from "../../../../store/user-preference/user-preference.store";
import * as i0 from "@angular/core";
export interface SubpanelStoreMap {
    [key: string]: SubpanelStore;
}
export interface SingleValueStatisticsStoreMap {
    [key: string]: SingleValueStatisticsStore;
}
export declare class SubpanelStore implements StateStore {
    protected listStoreFactory: RecordListStoreFactory;
    protected languageStore: LanguageStore;
    protected statisticsStoreFactory: SingleValueStatisticsStoreFactory;
    protected filterListStoreFactory: FilterListStoreFactory;
    protected meta: MetadataStore;
    protected preferences: UserPreferenceStore;
    show: boolean;
    parentModule: string;
    parentId: string;
    parentRecord$: Observable<Record>;
    parentRecord: Record;
    recordList: RecordListStore;
    statistics: SingleValueStatisticsStoreMap;
    metadata$: Observable<SubPanelDefinition>;
    listMetadata$: Observable<RecordListMeta>;
    searchMetadata$: Observable<SearchMeta>;
    columns$: Observable<ColumnDefinition[]>;
    metadata: SubPanelDefinition;
    loading$: Observable<boolean>;
    filterList: FilterListStore;
    criteria$: Observable<SearchCriteria>;
    showFilter: boolean;
    filterApplied: boolean;
    preferenceKey: any;
    protected metadataState: BehaviorSubject<SubPanelDefinition>;
    protected subs: Subscription[];
    constructor(listStoreFactory: RecordListStoreFactory, languageStore: LanguageStore, statisticsStoreFactory: SingleValueStatisticsStoreFactory, filterListStoreFactory: FilterListStoreFactory, meta: MetadataStore, preferences: UserPreferenceStore);
    getTitle(): string;
    getIcon(): string;
    clear(): void;
    clearAuthBased(): void;
    searchFilter(): void;
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} parentModule name
     * @param {string} parentId id
     * @param {object} meta to use
     * @param {object} parentRecord$ to use
     */
    init(parentModule: string, parentId: string, meta: SubPanelDefinition, parentRecord$?: Observable<Record>): void;
    setFilters(filters: SavedFilterMap, reload?: boolean): void;
    isAnyFilterApplied(): boolean;
    hasActiveFilter(): boolean;
    areAllCurrentCriteriaFilterEmpty(): boolean;
    getFilters(): SearchCriteriaFilter;
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordList>
     */
    load(useCache?: boolean): Observable<RecordList>;
    /**
     * Get statistic store
     *
     * @param {string} key key of statistic
     * @returns {object} SingleValueStatisticsStore
     */
    getStatistic(key: string): SingleValueStatisticsStore;
    resetFilters(reload?: boolean): void;
    clearFilter(): void;
    /**
     * add search criteria
     *
     * @param {string} parentModule name
     * @param {string} parentId id
     * @param {string} subpanel name
     */
    initSearchCriteria(parentModule: string, parentId: string, meta: SubPanelDefinition): SavedFilter;
    /**
     * Load / reload statistics
     *
     * @param {string} key of statistic
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<Statistic>
     */
    loadStatistics(key: string, useCache?: boolean): Observable<Statistic>;
    /**
     * Load / reload all statistics
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<Statistic>
     */
    loadAllStatistics(useCache?: boolean): Observable<Statistic[]>;
    /**
     * Should batch statistic
     *
     * @returns {boolean} shouldBatch
     */
    shouldBatchStatistic(): boolean;
    /**
     * Set loading
     *
     * @param {string} key of statistic
     * @param {boolean} loading bool
     */
    setStatisticsLoading(key: string, loading: boolean): void;
    /**
     * Set all statistics loading
     *
     * @param {boolean} loading bool
     */
    setAllStatisticsLoading(loading: boolean): void;
    /**
     * Set Statistic value
     *
     * @param {string} key of statistic
     * @param {object} statistic Statistic
     * @param {boolean} cache bool
     */
    setStatistics(key: string, statistic: Statistic, cache?: boolean): void;
    /**
     * Get statistic query
     *
     * @param {string} key of statistic
     * @returns {object} StatisticsQuery
     */
    getStatisticQuery(key: string): StatisticsQuery;
    /**
     * Get all statistics queries
     *
     * @returns {object} StatisticsQuery
     */
    getAllStatisticQuery(): StatisticsQueryMap;
    /**
     * Get widget layout
     *
     * @returns {any} any
     */
    getWidgetLayout(): StatisticWidgetOptions;
    toggleFilter(): boolean;
    /**
     * Init statistics store
     *
     * @param {object} meta for subpanel
     * @param {string} parentModule name
     * @param {string} parentId {id}
     */
    protected initStatistics(meta: SubPanelDefinition, parentModule: string, parentId: string): void;
    /**
     * Init a single value statistic
     *
     * @param {string} statisticKey to use
     * @param {object} meta SubPanelDefinition
     * @param {string} parentModule to use
     * @param {string} parentId to use
     */
    protected initStatistic(statisticKey: string, meta: SubPanelDefinition, parentModule: string, parentId: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SubpanelStore>;
}
