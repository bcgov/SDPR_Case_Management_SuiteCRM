import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ColumnDefinition, Record, SearchCriteria, SearchMetaFieldMap, ViewContext, ViewFieldDefinition, ViewMode } from 'common';
import { StateStore } from '../../../../store/state';
import { MetadataStore, RecordViewMetadata } from '../../../../store/metadata/metadata.store.service';
import { MessageService } from '../../../../services/message/message.service';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { FilterContainerData, FilterContainerState } from './saved-filter.store.model';
import { SavedFilter } from '../../../../store/saved-filters/saved-filter.model';
import { FieldManager } from '../../../../services/record/field/field.manager';
import { LanguageStore } from '../../../../store/language/language.store';
import { SavedFilterRecordStore } from './saved-filter-record.store';
import { SavedFilterRecordStoreFactory } from './saved-filter-record.store.factory';
import * as i0 from "@angular/core";
export declare class SavedFilterStore implements StateStore {
    protected appStateStore: AppStateStore;
    protected meta: MetadataStore;
    protected message: MessageService;
    protected fieldManager: FieldManager;
    protected language: LanguageStore;
    protected savedFilterStoreFactory: SavedFilterRecordStoreFactory;
    /**
     * Public long-lived observable streams
     */
    record$: Observable<SavedFilter>;
    stagingRecord$: Observable<SavedFilter>;
    loading$: Observable<boolean>;
    mode$: Observable<ViewMode>;
    meta$: Observable<RecordViewMetadata>;
    metadataLoading$: Observable<boolean>;
    /**
     * View-model that resolves once all the data is ready (or updated).
     */
    vm$: Observable<FilterContainerData>;
    vm: FilterContainerData;
    recordStore: SavedFilterRecordStore;
    searchCriteria: SearchCriteria;
    filter: SavedFilter;
    /** Internal Properties */
    protected cache$: Observable<any>;
    protected internalState: FilterContainerState;
    protected store: BehaviorSubject<FilterContainerState>;
    protected state$: Observable<FilterContainerState>;
    protected subs: Subscription[];
    protected metadataLoadingState: BehaviorSubject<boolean>;
    constructor(appStateStore: AppStateStore, meta: MetadataStore, message: MessageService, fieldManager: FieldManager, language: LanguageStore, savedFilterStoreFactory: SavedFilterRecordStoreFactory);
    getModuleName(): string;
    getRecordId(): string;
    getViewContext(): ViewContext;
    /**
     * Clean destroy
     */
    destroy(): void;
    /**
     * Initial record load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} recordID to use
     * @param {string} mode to use
     * @returns {object} Observable<any>
     */
    init(recordID: string, mode?: ViewMode): Observable<Record>;
    /**
     * Init record
     *
     * @param {string} searchModule name
     * @param {object} filter to use
     * @param {object} searchFields to use
     * @param {object} listColumns ColumnDefinition[]
     * @param {string} mode to use
     * @returns {object} Observable<any>
     */
    initRecord(searchModule: string, filter: SavedFilter, searchFields: SearchMetaFieldMap, listColumns: ColumnDefinition[], mode?: ViewMode): void;
    initValidators(record: Record): void;
    resetValidators(field: any): void;
    initStaging(searchModule: string, filter: SavedFilter, searchFields: SearchMetaFieldMap, listColumns: ColumnDefinition[]): void;
    /**
     * Clear observable cache
     */
    clear(): void;
    /**
     * Clear observable cache
     */
    clearAuthBased(): void;
    /**
     * Get staging record
     *
     * @returns {string} ViewMode
     */
    getBaseRecord(): SavedFilter;
    /**
     * Get current view mode
     *
     * @returns {string} ViewMode
     */
    getMode(): ViewMode;
    /**
     * Set new mode
     *
     * @param {string} mode ViewMode
     */
    setMode(mode: ViewMode): void;
    /**
     * Save record
     */
    save(): Observable<Record>;
    /**
     * Validate search filter fields
     *
     * @returns {object} Observable<boolean>
     */
    validate(): Observable<boolean>;
    /**
     * Validate search current input
     *
     * @returns {object} Observable<boolean>
     */
    validateCriteria(): Observable<boolean>;
    /**
     * Load / reload record using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordViewState>
     */
    load(useCache?: boolean): Observable<Record>;
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<string[]>
     */
    getViewFieldsKeys$(): Observable<string[]>;
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    getViewFields$(): Observable<ViewFieldDefinition[]>;
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: FilterContainerState): void;
    /**
     * Get record view metadata
     *
     * @returns {object} metadata RecordViewMetadata
     */
    protected getMetadata(): RecordViewMetadata;
    static ɵfac: i0.ɵɵFactoryDeclaration<SavedFilterStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SavedFilterStore>;
}
