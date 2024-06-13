import { Action, ColumnDefinition, Pagination, Record, RecordSelection, SearchCriteria, SelectionStatus, SortingSelection, ViewContext } from 'common';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { NavigationStore } from '../../../../store/navigation/navigation.store';
import { RecordList, RecordListStore } from '../../../../store/record-list/record-list.store';
import { Metadata, MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { StateStore } from '../../../../store/state';
import { LanguageStore } from '../../../../store/language/language.store';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { MessageService } from '../../../../services/message/message.service';
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { AppData, ViewStore } from '../../../../store/view/view.store';
import { LocalStorageService } from '../../../../services/local-storage/local-storage.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SavedFilter, SavedFilterMap } from '../../../../store/saved-filters/saved-filter.model';
import { FilterListStore } from '../../../../store/saved-filters/filter-list.store';
import { FilterListStoreFactory } from '../../../../store/saved-filters/filter-list.store.factory';
import { ConfirmationModalService } from '../../../../services/modals/confirmation-modal.service';
import { RecordPanelMetadata } from '../../../../containers/record-panel/store/record-panel/record-panel.store.model';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { ListViewUrlQueryService } from '../../services/list-view-url-query.service';
import * as i0 from "@angular/core";
export interface ListViewData {
    records: Record[];
    pagination?: Pagination;
    criteria?: SearchCriteria;
    sort?: SortingSelection;
    selection?: RecordSelection;
    loading: boolean;
}
export interface ListViewModel {
    data: ListViewData;
    appData: AppData;
    metadata: Metadata;
}
export interface ListViewState {
    module: string;
    widgets: boolean;
    actionPanel: string;
    showSidebarWidgets: boolean;
    recordPanelConfig: RecordPanelMetadata;
    activeFilters: SavedFilterMap;
    openFilter: SavedFilter;
}
export declare class ListViewStore extends ViewStore implements StateStore {
    protected appStateStore: AppStateStore;
    protected languageStore: LanguageStore;
    protected navigationStore: NavigationStore;
    protected moduleNavigation: ModuleNavigation;
    protected metadataStore: MetadataStore;
    protected localStorage: LocalStorageService;
    protected message: MessageService;
    protected listStoreFactory: RecordListStoreFactory;
    protected modalService: NgbModal;
    protected filterListStoreFactory: FilterListStoreFactory;
    protected confirmation: ConfirmationModalService;
    protected preferences: UserPreferenceStore;
    protected route: ActivatedRoute;
    protected listViewUrlQueryService: ListViewUrlQueryService;
    protected localStorageService: LocalStorageService;
    /**
     * Public long-lived observable streams
     */
    moduleName$: Observable<string>;
    columns: BehaviorSubject<ColumnDefinition[]>;
    columns$: Observable<ColumnDefinition[]>;
    lineActions$: Observable<Action[]>;
    tableActions$: Observable<Action[]>;
    records$: Observable<Record[]>;
    criteria$: Observable<SearchCriteria>;
    context$: Observable<ViewContext>;
    sort$: Observable<SortingSelection>;
    pagination$: Observable<Pagination>;
    selection$: Observable<RecordSelection>;
    selectedCount$: Observable<number>;
    selectedStatus$: Observable<SelectionStatus>;
    loading$: Observable<boolean>;
    widgets$: Observable<boolean>;
    showSidebarWidgets$: Observable<boolean>;
    displayFilters$: Observable<boolean>;
    actionPanel$: Observable<string>;
    recordList: RecordListStore;
    dataUpdate$: Observable<boolean>;
    dataSetUpdate$: Observable<boolean>;
    activeFilters$: Observable<SavedFilterMap>;
    openFilter$: Observable<SavedFilter>;
    filterList: FilterListStore;
    pageKey: string;
    /**
     * View-model that resolves once all the data is ready (or updated).
     */
    vm$: Observable<ListViewModel>;
    vm: ListViewModel;
    data: ListViewData;
    /** Internal Properties */
    protected cache$: Observable<any>;
    protected internalState: ListViewState;
    protected store: BehaviorSubject<ListViewState>;
    protected state$: Observable<ListViewState>;
    protected dataUpdateState: BehaviorSubject<boolean>;
    protected subs: Subscription[];
    constructor(appStateStore: AppStateStore, languageStore: LanguageStore, navigationStore: NavigationStore, moduleNavigation: ModuleNavigation, metadataStore: MetadataStore, localStorage: LocalStorageService, message: MessageService, listStoreFactory: RecordListStoreFactory, modalService: NgbModal, filterListStoreFactory: FilterListStoreFactory, confirmation: ConfirmationModalService, preferences: UserPreferenceStore, route: ActivatedRoute, listViewUrlQueryService: ListViewUrlQueryService, localStorageService: LocalStorageService);
    get actionPanel(): string;
    get showFilters(): boolean;
    set showFilters(show: boolean);
    get widgets(): boolean;
    set widgets(show: boolean);
    get showSidebarWidgets(): boolean;
    set showSidebarWidgets(show: boolean);
    get recordPanelConfig(): RecordPanelMetadata;
    isRecordPanelOpen(): boolean;
    openRecordPanel(config: RecordPanelMetadata): void;
    closeRecordPanel(): void;
    getModuleName(): string;
    getViewContext(): ViewContext;
    /**
     * Clean destroy
     */
    destroy(): void;
    /**
     * get active filters
     *
     * @returns {object} active filters
     */
    get activeFilters(): SavedFilterMap;
    /**
     * Clear observable cache
     */
    clear(): void;
    clearAuthBased(): void;
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @returns {object} Observable<any>
     */
    init(module: string): Observable<RecordList>;
    /**
     * Set open filters
     *
     * @param {object} filter to set
     */
    setOpenFilter(filter: SavedFilter): void;
    /**
     * Toggle Quick filter
     *
     * @param filter
     * @param {boolean} reload flag
     */
    toggleQuickFilter(filter: SavedFilter, reload?: boolean): void;
    /**
     * Set active filters
     *
     * @param {object} filters to set
     * @param {boolean} reload flag
     * @param sort
     */
    setFilters(filters: SavedFilterMap, reload?: boolean, sort?: SortingSelection): void;
    /**
     * Update filters
     *
     * @param {object} filter to set
     */
    addSavedFilter(filter: SavedFilter): void;
    /**
     * Update filters
     *
     * @param {object} filter to set
     */
    removeSavedFilter(filter: SavedFilter): void;
    /**
     * Reset active filters
     *
     * @param {boolean} reload flag
     */
    resetFilters(reload?: boolean): void;
    /**
     * Update the search criteria
     *
     * @param {boolean} reload flag
     */
    updateSearchCriteria(reload?: boolean): void;
    updateFilterLocalStorage(): void;
    updateSortLocalStorage(): void;
    updatePaginationLocalStorage(): void;
    /**
     * Updated displayed columns' ui user preference
     * @param display
     */
    updateDisplayedColumnsPreference(display: string[]): void;
    /**
     * Get displayed columns' ui user preference
     */
    getDisplayedColumnsPreference(): string[];
    triggerDataUpdate(): void;
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<ListViewState>
     */
    load(useCache?: boolean): Observable<RecordList>;
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: ListViewState): void;
    /**
     * Get Active quick filters
     * @protected
     */
    protected getActiveQuickFilters(): SavedFilterMap;
    /**
     * Merge Criteria
     * @protected
     */
    protected mergeCriteria(filters: SavedFilterMap): SearchCriteria;
    /**
     * Open columns chooser modal
     */
    openColumnChooserDialog(): void;
    /**
     * Calculate if widgets are to display
     */
    protected calculateShowWidgets(): void;
    /**
     * Build ui user preference key
     * @param storageKey
     * @protected
     */
    protected getPreferenceKey(storageKey: string): string;
    /**
     * Save ui user preference
     * @param module
     * @param storageKey
     * @param value
     * @protected
     */
    protected savePreference(module: string, storageKey: string, value: any): void;
    /**
     * Load ui user preference
     * @param module
     * @param storageKey
     * @protected
     */
    protected loadPreference(module: string, storageKey: string): any;
    /**
     * Load current filter
     * @param module
     * @protected
     */
    protected loadCurrentFilter(module: string): void;
    /**
     * Load current filter
     * @param module
     * @param queryParams
     * @protected
     */
    protected loadQueryFilter(module: string, queryParams: Params): void;
    /**
     * Load current sorting
     * @param module
     * @protected
     */
    protected loadCurrentSort(module: string): void;
    /**
     * Load current pagination
     * @param module
     * @protected
     */
    protected loadCurrentPagination(module: string): void;
    /**
     * Load current displayed columns
     * @protected
     */
    protected loadCurrentDisplayedColumns(): void;
    /**
     * Initialize data update state.
     * It should be emitted on any change in values on the record list.
     * Reload/Pagination is not considered as a data update
     */
    protected initDataUpdateState(): void;
    /**
     *  Initialize the dataSet update state.
     *  It should be emitted on any change in dataSet e.g. due to data filter, due to data delete,
     *  due to data edit or any event which causes change in the resulting dataSet.
     */
    protected initDataSetUpdatedState(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListViewStore>;
}
