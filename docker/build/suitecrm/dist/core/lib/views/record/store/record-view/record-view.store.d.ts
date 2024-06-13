import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Params } from '@angular/router';
import { BooleanMap, Field, FieldDefinitionMap, Record, ViewContext, ViewFieldDefinition, ViewMode, Panel } from 'common';
import { RecordViewData, RecordViewModel, RecordViewState } from './record-view.store.model';
import { NavigationStore } from '../../../../store/navigation/navigation.store';
import { StateStore } from '../../../../store/state';
import { RecordSaveGQL } from '../../../../store/record/graphql/api.record.save';
import { LanguageStore } from '../../../../store/language/language.store';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { MetadataStore, RecordViewMetadata } from '../../../../store/metadata/metadata.store.service';
import { MessageService } from '../../../../services/message/message.service';
import { SubpanelStoreMap } from '../../../../containers/subpanel/store/subpanel/subpanel.store';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { RecordManager } from '../../../../services/record/record.manager';
import { RecordStore } from '../../../../store/record/record.store';
import { LocalStorageService } from '../../../../services/local-storage/local-storage.service';
import { SubpanelStoreFactory } from '../../../../containers/subpanel/store/subpanel/subpanel.store.factory';
import { ViewStore } from '../../../../store/view/view.store';
import { RecordFetchGQL } from '../../../../store/record/graphql/api.record.get';
import { StatisticsBatch } from '../../../../store/statistics/statistics-batch.service';
import { RecordStoreFactory } from '../../../../store/record/record.store.factory';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { PanelLogicManager } from '../../../../components/panel-logic/panel-logic.manager';
import * as i0 from "@angular/core";
export declare class RecordViewStore extends ViewStore implements StateStore {
    protected recordFetchGQL: RecordFetchGQL;
    protected recordSaveGQL: RecordSaveGQL;
    protected appStateStore: AppStateStore;
    protected languageStore: LanguageStore;
    protected navigationStore: NavigationStore;
    protected moduleNavigation: ModuleNavigation;
    protected metadataStore: MetadataStore;
    protected localStorage: LocalStorageService;
    protected message: MessageService;
    protected subpanelFactory: SubpanelStoreFactory;
    protected recordManager: RecordManager;
    protected statisticsBatch: StatisticsBatch;
    protected recordStoreFactory: RecordStoreFactory;
    protected preferences: UserPreferenceStore;
    protected panelLogicManager: PanelLogicManager;
    /**
     * Public long-lived observable streams
     */
    record$: Observable<Record>;
    stagingRecord$: Observable<Record>;
    loading$: Observable<boolean>;
    widgets$: Observable<boolean>;
    showSidebarWidgets$: Observable<boolean>;
    showTopWidget$: Observable<boolean>;
    showSubpanels$: Observable<boolean>;
    mode$: Observable<ViewMode>;
    subpanels$: Observable<SubpanelStoreMap>;
    viewContext$: Observable<ViewContext>;
    subpanelReload$: Observable<BooleanMap>;
    panels: Panel[];
    panels$: Observable<Panel[]>;
    /**
     * View-model that resolves once all the data is ready (or updated).
     */
    vm$: Observable<RecordViewModel>;
    vm: RecordViewModel;
    data: RecordViewData;
    recordStore: RecordStore;
    /** Internal Properties */
    protected cache$: Observable<any>;
    protected internalState: RecordViewState;
    protected store: BehaviorSubject<RecordViewState>;
    protected state$: Observable<RecordViewState>;
    protected subpanels: SubpanelStoreMap;
    protected subpanelsState: BehaviorSubject<SubpanelStoreMap>;
    protected subpanelReloadSubject: BehaviorSubject<BooleanMap>;
    protected subpanelReloadSub: Subscription[];
    protected subs: Subscription[];
    protected fieldSubs: Subscription[];
    protected panelsSubject: BehaviorSubject<Panel[]>;
    constructor(recordFetchGQL: RecordFetchGQL, recordSaveGQL: RecordSaveGQL, appStateStore: AppStateStore, languageStore: LanguageStore, navigationStore: NavigationStore, moduleNavigation: ModuleNavigation, metadataStore: MetadataStore, localStorage: LocalStorageService, message: MessageService, subpanelFactory: SubpanelStoreFactory, recordManager: RecordManager, statisticsBatch: StatisticsBatch, recordStoreFactory: RecordStoreFactory, preferences: UserPreferenceStore, panelLogicManager: PanelLogicManager);
    get widgets(): boolean;
    set widgets(show: boolean);
    get showSidebarWidgets(): boolean;
    set showSidebarWidgets(show: boolean);
    get showTopWidget(): boolean;
    set showTopWidget(show: boolean);
    get showSubpanels(): boolean;
    set showSubpanels(show: boolean);
    get params(): {
        [key: string]: string;
    };
    set params(params: {
        [key: string]: string;
    });
    getModuleName(): string;
    getRecordId(): string;
    getViewContext(): ViewContext;
    getSubpanels(): SubpanelStoreMap;
    /**
     * Clean destroy
     */
    destroy(): void;
    /**
     * Initial record load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @param {string} recordID to use
     * @param {string} mode to use
     * @param {object} params to set
     * @returns {object} Observable<any>
     */
    init(module: string, recordID: string, mode?: ViewMode, params?: Params): Observable<Record>;
    /**
     * Clear observable cache
     */
    clear(): void;
    /**
     * Get staging record
     *
     * @returns {string} ViewMode
     */
    getBaseRecord(): Record;
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
    save(): Observable<Record>;
    /**
     * Load / reload record using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordViewState>
     */
    load(useCache?: boolean): Observable<Record>;
    /**
     * Get summary template
     *
     * @returns {string} summary template label
     */
    getSummaryTemplate(): string;
    initValidators(record: Record): void;
    resetValidators(field: Field): void;
    resetValidatorsForAllFields(record: Record): void;
    /**
     * Parse query params
     *
     * @param {object} params to set
     */
    protected parseParams(params?: Params): void;
    /**
     * Load all statistics
     *
     * @param {string} module if to use cache
     */
    protected loadSubpanelStatistics(module: string): void;
    protected buildStatKey(subpanelKey: string, subpanelQueryKey: string): string;
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: RecordViewState): void;
    /**
     * Init subpanels
     *
     * @param {string} module parent module
     * @param {string} recordId id
     */
    protected initSubpanels(module: string, recordId: string): void;
    protected initPanels(): void;
    protected clearSubpanels(): void;
    /**
     * Calculate if widgets are to display
     */
    protected calculateShowWidgets(): void;
    /**
     * Get record view metadata
     *
     * @returns {object} metadata RecordViewMetadata
     */
    protected getRecordViewMetadata(): RecordViewMetadata;
    /**
     * Get vardefs
     *
     * @returns {object} vardefs FieldDefinitionMap
     */
    protected getVardefs(): FieldDefinitionMap;
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    protected getViewFieldsObservable(): Observable<ViewFieldDefinition[]>;
    /**
     * Build ui user preference key
     *
     * @param {string} storageKey Storage Key
     * @protected
     * @returns {string} Preference Key
     */
    protected getPreferenceKey(storageKey: string): string;
    /**
     * Save ui user preference
     *
     * @param {string} module Module
     * @param {string} storageKey Storage Key
     * @param {any} value Value
     * @protected
     */
    protected savePreference(module: string, storageKey: string, value: any): void;
    /**
     * Load ui user preference
     *
     * @param {string} module Module
     * @param {string} storageKey Storage Key
     * @protected
     * @returns {any} User Preference
     */
    protected loadPreference(module: string, storageKey: string): any;
    private safeUnsubscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordViewStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordViewStore>;
}
