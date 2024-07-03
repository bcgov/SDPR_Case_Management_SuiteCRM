/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE
 * WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Supercharged by SuiteCRM" logo. If the display of the logos is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Supercharged by SuiteCRM".
 */

import { isEmpty } from 'lodash-es';
import { BehaviorSubject, combineLatest, combineLatestWith, Observable, of, Subscription } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, take, tap } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import { Params } from '@angular/router';
import {
    BooleanMap,
    deepClone,
    Field,
    FieldDefinitionMap,
    FieldLogicMap,
    FieldMetadata,
    isVoid,
    Record,
    StatisticsMap,
    StatisticsQueryMap,
    SubPanelMeta,
    ViewContext,
    ViewFieldDefinition,
    ViewFieldDefinitionMap,
    ViewMode,
    Panel,
    PanelRow,
} from 'common';
import { RecordViewData, RecordViewModel, RecordViewState } from './record-view.store.model';
import {NavigationStore} from '../../../../store/navigation/navigation.store';
import {StateStore} from '../../../../store/state';
import {RecordSaveGQL} from '../../../../store/record/graphql/api.record.save';
import {LanguageStore} from '../../../../store/language/language.store';
import {ModuleNavigation} from '../../../../services/navigation/module-navigation/module-navigation.service';
import {
    Metadata,
    MetadataStore,
    RecordViewMetadata,
    SummaryTemplates
} from '../../../../store/metadata/metadata.store.service';
import {MessageService} from '../../../../services/message/message.service';
import {SubpanelStoreMap} from '../../../../containers/subpanel/store/subpanel/subpanel.store';
import {AppStateStore} from '../../../../store/app-state/app-state.store';
import {RecordManager} from '../../../../services/record/record.manager';
import {RecordStore} from '../../../../store/record/record.store';
import {LocalStorageService} from '../../../../services/local-storage/local-storage.service';
import {SubpanelStoreFactory} from '../../../../containers/subpanel/store/subpanel/subpanel.store.factory';
import {ViewStore} from '../../../../store/view/view.store';
import {RecordFetchGQL} from '../../../../store/record/graphql/api.record.get';
import {StatisticsBatch} from '../../../../store/statistics/statistics-batch.service';
import {RecordStoreFactory} from '../../../../store/record/record.store.factory';
import {UserPreferenceStore} from '../../../../store/user-preference/user-preference.store';
import {PanelLogicManager} from '../../../../components/panel-logic/panel-logic.manager';

const initialState: RecordViewState = {
    module: '',
    recordID: '',
    loading: false,
    widgets: false,
    showSidebarWidgets: false,
    showTopWidget: false,
    showSubpanels: false,
    mode: 'detail',
    params: {
        returnModule: '',
        returnId: '',
        returnAction: ''
    }
};

@Injectable()
export class RecordViewStore extends ViewStore implements StateStore {

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
    panels: Panel[] = [];
    panels$: Observable<Panel[]>;


    /**
     * View-model that resolves once all the data is ready (or updated).
     */
    vm$: Observable<RecordViewModel>;
    vm: RecordViewModel;
    data: RecordViewData;
    recordStore: RecordStore;

    /** Internal Properties */
    protected cache$: Observable<any> = null;
    protected internalState: RecordViewState = deepClone(initialState);
    protected store = new BehaviorSubject<RecordViewState>(this.internalState);
    protected state$ = this.store.asObservable();
    protected subpanels: SubpanelStoreMap;
    protected subpanelsState: BehaviorSubject<SubpanelStoreMap>;
    protected subpanelReloadSubject = new BehaviorSubject<BooleanMap>({} as BooleanMap);
    protected subpanelReloadSub: Subscription[] = [];
    protected subs: Subscription[] = [];
    protected fieldSubs: Subscription[] = [];
    protected panelsSubject: BehaviorSubject<Panel[]> = new BehaviorSubject(this.panels);

    constructor(
        protected recordFetchGQL: RecordFetchGQL,
        protected recordSaveGQL: RecordSaveGQL,
        protected appStateStore: AppStateStore,
        protected languageStore: LanguageStore,
        protected navigationStore: NavigationStore,
        protected moduleNavigation: ModuleNavigation,
        protected metadataStore: MetadataStore,
        protected localStorage: LocalStorageService,
        protected message: MessageService,
        protected subpanelFactory: SubpanelStoreFactory,
        protected recordManager: RecordManager,
        protected statisticsBatch: StatisticsBatch,
        protected recordStoreFactory: RecordStoreFactory,
        protected preferences: UserPreferenceStore,
        protected panelLogicManager: PanelLogicManager,
    ) {

        super(appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore);

        this.panels$ = this.panelsSubject.asObservable();

        this.recordStore = recordStoreFactory.create(this.getViewFieldsObservable());

        this.record$ = this.recordStore.state$.pipe(distinctUntilChanged());
        this.stagingRecord$ = this.recordStore.staging$.pipe(distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading));
        this.widgets$ = this.state$.pipe(map(state => state.widgets));
        this.showSidebarWidgets$ = this.state$.pipe(map(state => state.showSidebarWidgets));
        this.showTopWidget$ = this.state$.pipe(map(state => state.showTopWidget));
        this.showSubpanels$ = this.state$.pipe(map(state => state.showSubpanels));
        this.mode$ = this.state$.pipe(map(state => state.mode));
        this.subpanelReload$ = this.subpanelReloadSubject.asObservable();

        const data$ = this.record$.pipe(
            combineLatestWith(this.loading$),
            map(([record, loading]: [Record, boolean]) => {
                this.data = {record, loading} as RecordViewData;
                return this.data;
            })
        );

        this.vm$ = data$.pipe(
            combineLatestWith(this.appData$, this.metadata$),
            map(([data, appData, metadata]) => {
                this.vm = {data, appData, metadata} as RecordViewModel;
                return this.vm;
            }));

        this.subpanelsState = new BehaviorSubject<SubpanelStoreMap>({} as SubpanelStoreMap);
        this.subpanels$ = this.subpanelsState.asObservable();


        this.viewContext$ = this.record$.pipe(map(() => this.getViewContext()));
        this.initPanels();
    }

    get widgets(): boolean {
        return this.internalState.widgets;
    }

    set widgets(show: boolean) {
        this.updateState({
            ...this.internalState,
            widgets: show
        });
    }

    get showSidebarWidgets(): boolean {
        return this.internalState.showSidebarWidgets;
    }

    set showSidebarWidgets(show: boolean) {
        this.savePreference(this.getModuleName(), 'show-sidebar-widgets', show);
        this.updateState({
            ...this.internalState,
            showSidebarWidgets: show
        });
    }

    get showTopWidget(): boolean {
        return this.internalState.showTopWidget;
    }

    set showTopWidget(show: boolean) {
        this.updateState({
            ...this.internalState,
            showTopWidget: show
        });
    }

    get showSubpanels(): boolean {
        return this.internalState.showTopWidget;
    }

    set showSubpanels(show: boolean) {
        this.updateState({
            ...this.internalState,
            showSubpanels: show
        });
    }

    get params(): { [key: string]: string } {
        return this.internalState.params || {};
    }

    set params(params: { [key: string]: string }) {
        this.updateState({
            ...this.internalState,
            params
        });
    }

    getModuleName(): string {
        return this.internalState.module;
    }

    getRecordId(): string {
        return this.internalState.recordID;
    }

    getViewContext(): ViewContext {
        return {
            module: this.getModuleName(),
            id: this.getRecordId(),
            record: this.getBaseRecord()
        };
    }

    getSubpanels(): SubpanelStoreMap {
        return this.subpanels;
    }

    /**
     * Clean destroy
     */
    public destroy(): void {
        this.clear();
    }

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
    public init(module: string, recordID: string, mode = 'detail' as ViewMode, params: Params = {}): Observable<Record> {
        this.internalState.module = module;
        this.internalState.recordID = recordID;
        this.setMode(mode);
        this.initSubpanels(module, recordID);

        this.calculateShowWidgets();

        return this.load().pipe(
            tap(() => {
                this.showTopWidget = true;
                this.loadSubpanelStatistics(module);
                this.parseParams(params);
            })
        );
    }

    /**
     * Clear observable cache
     */
    public clear(): void {
        this.cache$ = null;
        this.clearSubpanels();
        this.subpanelsState.unsubscribe();
        this.updateState(deepClone(initialState));
        this.subs = this.safeUnsubscription(this.subs);
        this.fieldSubs = this.safeUnsubscription(this.fieldSubs);
    }

    /**
     * Get staging record
     *
     * @returns {string} ViewMode
     */
    getBaseRecord(): Record {
        if (!this.internalState) {
            return null;
        }
        return this.recordStore.getBaseRecord();
    }

    /**
     * Get current view mode
     *
     * @returns {string} ViewMode
     */
    getMode(): ViewMode {
        if (!this.internalState) {
            return null;
        }
        return this.internalState.mode;
    }

    /**
     * Set new mode
     *
     * @param {string} mode ViewMode
     */
    setMode(mode: ViewMode): void {
        this.updateState({...this.internalState, mode});
    }

    save(): Observable<Record> {
        this.appStateStore.updateLoading(`${this.internalState.module}-record-save`, true);

        this.updateState({
            ...this.internalState,
            loading: true
        });

        return this.recordStore.save().pipe(
            catchError(() => {
                this.message.addDangerMessageByKey('LBL_ERROR_SAVING');
                return of({} as Record);
            }),
            finalize(() => {
                this.setMode('detail' as ViewMode);
                this.appStateStore.updateLoading(`${this.internalState.module}-record-save`, false);
                this.updateState({
                    ...this.internalState,
                    loading: false
                });
            })
        );
    }

    /**
     * Load / reload record using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordViewState>
     */
    public load(useCache = true): Observable<Record> {

        this.updateState({
            ...this.internalState,
            loading: true
        });

        return this.recordStore.retrieveRecord(
            this.internalState.module,
            this.internalState.recordID,
            useCache
        ).pipe(
            tap((data: Record) => {

                this.updateState({
                    ...this.internalState,
                    recordID: data.id,
                    module: data.module,
                    loading: false
                });
            })
        );
    }

    /**
     * Get summary template
     *
     * @returns {string} summary template label
     */
    getSummaryTemplate(): string {
        const metadata = this.metadata || {} as Metadata;
        const recordMeta = metadata.recordView || {} as RecordViewMetadata;
        const templates = recordMeta.summaryTemplates || {} as SummaryTemplates;
        return templates[this.getMode()] || '';
    }

    initValidators(record: Record): void {
        if(!record || !Object.keys(record?.fields).length) {
            return;
        }

        Object.keys(record.fields).forEach(fieldName => {
            const field = record.fields[fieldName];
            const formControl = field?.formControl ?? null;
            if (!formControl) {
                return;
            }

            this.resetValidators(field);

            const validators = field?.validators ?? [];
            const asyncValidators = field?.asyncValidators ?? [];

            if (field?.formControl && validators.length) {
                field.formControl.setValidators(validators);
            }
            if (field?.formControl && asyncValidators.length) {
                field.formControl.setAsyncValidators(asyncValidators);
            }
        });

    }

    resetValidators(field: Field): void {
        if (!field?.formControl) {
            return;
        }

        field.formControl.clearValidators();
        field.formControl.clearAsyncValidators();
    }

    resetValidatorsForAllFields(record: Record): void {
        if(!record || !record?.fields?.length) {
            return ;
        }
        Object.keys(record.fields).forEach(fieldName => {
            const field = record.fields[fieldName];
            const formControl = field?.formControl ?? null;

            if (!formControl) {
                return;
            }

            this.resetValidators(field);
        });
    }

    /**
     * Parse query params
     *
     * @param {object} params to set
     */
    protected parseParams(params: Params = {}): void {
        if (!params) {
            return;
        }

        const currentParams = {...this.internalState.params};
        Object.keys(params).forEach(paramKey => {
            if (!isVoid(currentParams[paramKey])) {
                currentParams[paramKey] = params[paramKey];
                return;
            }
        });

        this.params = params;
    }


    /**
     * Load all statistics
     *
     * @param {string} module if to use cache
     */
    protected loadSubpanelStatistics(module: string): void {
        const subpanels = this.subpanelsState.value;

        if (!subpanels) {
            return;
        }

        const queries: StatisticsQueryMap = {};

        Object.keys(subpanels).forEach(subpanelKey => {

            const subpanel = subpanels[subpanelKey];
            const statsMap = subpanel.statistics;

            if (!statsMap || !Object.keys(statsMap).length) {
                return;
            }

            if (subpanel.shouldBatchStatistic() === false) {
                subpanel.loadAllStatistics().pipe(take(1)).subscribe();
                return;
            }

            const subpanelQueries = subpanel.getAllStatisticQuery();

            Object.keys(subpanelQueries).forEach(subpanelQueryKey => {
                const queryKey = this.buildStatKey(subpanelKey, subpanelQueryKey);
                queries[queryKey] = subpanelQueries[subpanelQueryKey];
            });

            subpanel.setAllStatisticsLoading(true);
        });

        this.statisticsBatch.fetch(module, queries)
            .pipe(take(1))
            .subscribe((stats: StatisticsMap) => {

                Object.keys(subpanels).forEach(subpanelKey => {

                    const subpanel = subpanels[subpanelKey];
                    const subpanelQueries = subpanel.getAllStatisticQuery();

                    Object.keys(subpanelQueries).forEach(subpanelQueryKey => {
                        const queryKey = this.buildStatKey(subpanelKey, subpanelQueryKey);
                        const stat = stats[queryKey];
                        if (!stat) {
                            return;
                        }
                        subpanel.setStatistics(subpanelQueryKey, stat, true);
                    });

                    subpanel.setAllStatisticsLoading(false);
                });
            });
    }

    protected buildStatKey(subpanelKey: string, subpanelQueryKey: string): string {
        subpanelKey = subpanelKey.replace(/_/g, '-');
        subpanelQueryKey = subpanelQueryKey.replace(/_/g, '-');

        return subpanelKey + '-' + subpanelQueryKey;
    }

    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: RecordViewState): void {
        this.store.next(this.internalState = state);
    }

    /**
     * Init subpanels
     *
     * @param {string} module parent module
     * @param {string} recordId id
     */
    protected initSubpanels(module: string, recordId: string): void {
        this.showSubpanels = true;
        this.metadataStore.subPanelMetadata$.subscribe((meta: SubPanelMeta) => {
            this.clearSubpanels();

            Object.keys(meta).forEach((key: string) => {
                this.subpanels[key] = this.subpanelFactory.create();
                this.subpanels[key].init(module, recordId, meta[key], this.record$);
            });

            this.subpanelsState.next(this.subpanels);

            Object.keys(this.subpanels).forEach(subpanelKey => {
                const subpanel = this.subpanels[subpanelKey];
                this.subpanelReloadSub.push(subpanel.recordList.records$.pipe(tap(() => {
                    const update = {} as BooleanMap;
                    update[subpanelKey] = true;
                    this.subpanelReloadSubject.next(update);
                })).subscribe());
            });
        });
    }

    protected initPanels(): void {
        const panelSub = combineLatest([
            this.metadataStore.recordViewMetadata$,
            this.stagingRecord$,
            this.languageStore.vm$,
        ]).subscribe(([meta, record, languages]) => {
            const panels = [];
            const module = (record && record.module) || '';

            this.safeUnsubscription(this.fieldSubs);
            meta.panels.forEach(panelDefinition => {
                const label = (panelDefinition.label)
                    ? panelDefinition.label.toUpperCase()
                    : this.languageStore.getFieldLabel(panelDefinition.key.toUpperCase(), module, languages);
                const panel = { label, key: panelDefinition.key, rows: [] } as Panel;

                const tabDef = meta.templateMeta.tabDefs[panelDefinition.key.toUpperCase()] ?? null;
                if (tabDef) {
                    panel.meta = tabDef;
                }

                panelDefinition.rows.forEach(rowDefinition => {
                    const row = { cols: [] } as PanelRow;
                    rowDefinition.cols.forEach(cellDefinition => {
                        row.cols.push({ ...cellDefinition });
                    });
                    panel.rows.push(row);
                });

                panel.displayState = new BehaviorSubject(tabDef?.display ?? true);
                panel.display$ = panel.displayState.asObservable();

                panels.push(panel);

                if (isEmpty(record?.fields) || isEmpty(tabDef?.displayLogic)) {
                    return;
                }

                Object.values(tabDef.displayLogic).forEach((logicDef) => {
                    if (isEmpty(logicDef?.params?.fieldDependencies)) {
                        return;
                    }

                    logicDef.params.fieldDependencies.forEach(fieldKey => {
                        const field = record.fields[fieldKey] || null;
                        if (isEmpty(field)) {
                            return;
                        }

                        this.fieldSubs.push(
                            field.valueChanges$.subscribe(() => {
                                this.panelLogicManager.runLogic(logicDef.key, field, panel, record, this.getMode());
                            }),
                        );
                    });
                });
            });
            this.panelsSubject.next(this.panels = panels);
            return panels;
        });

        this.subs.push(panelSub);
    }

    protected clearSubpanels(): void {
        if (this.subpanels) {
            Object.keys(this.subpanels).forEach((key: string) => {
                this.subpanels[key].clear();
            });
        }

        if (this.subpanelReloadSub.length) {
            this.subpanelReloadSub.forEach(sub => sub.unsubscribe());
            this.subpanelReloadSub = [];
        }

        this.subpanels = {};
    }

    /**
     * Calculate if widgets are to display
     */
    protected calculateShowWidgets(): void {
        let show = false;
        const recordViewMeta = this.getRecordViewMetadata();
        const sidebarWidgetsConfig = recordViewMeta.sidebarWidgets || [];

        if (sidebarWidgetsConfig && sidebarWidgetsConfig.length > 0) {
            show = true;
        }

        const showSidebarWidgets = this.loadPreference(this.getModuleName(), 'show-sidebar-widgets') ?? null;

        if (showSidebarWidgets !== null) {
            this.showSidebarWidgets = showSidebarWidgets;
        } else {
            this.showSidebarWidgets = show;
        }

        this.widgets = show;
    }

    /**
     * Get record view metadata
     *
     * @returns {object} metadata RecordViewMetadata
     */
    protected getRecordViewMetadata(): RecordViewMetadata {
        const meta = this.metadataStore.get() || {};
        return meta.recordView || {} as RecordViewMetadata;
    }

    /**
     * Get vardefs
     *
     * @returns {object} vardefs FieldDefinitionMap
     */
    protected getVardefs(): FieldDefinitionMap {
        const meta = this.getRecordViewMetadata();
        return meta.vardefs || {} as FieldDefinitionMap;
    }

    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    protected getViewFieldsObservable(): Observable<ViewFieldDefinition[]> {
        return this.metadataStore.recordViewMetadata$.pipe(map((recordMetadata: RecordViewMetadata) => {
            const fieldsMap: ViewFieldDefinitionMap = {};

            recordMetadata.panels.forEach(panel => {
                panel.rows.forEach(row => {
                    row.cols.forEach(col => {
                        const fieldName = col.name ?? col.fieldDefinition.name ?? '';
                        fieldsMap[fieldName] = col;
                    });
                });
            });

            Object.keys(recordMetadata.vardefs).forEach(fieldKey => {
                const vardef = recordMetadata.vardefs[fieldKey] ?? null;
                if (!vardef || isEmpty(vardef)) {
                    return;
                }

                // already defined. skip
                if (fieldsMap[fieldKey]) {
                    return;
                }

                if (vardef.type == 'relate'){
                    return;
                }

                fieldsMap[fieldKey] = {
                    name: fieldKey,
                    vardefBased: true,
                    label: vardef.vname ?? '',
                    type: vardef.type ?? '',
                    display: vardef.display ?? '',
                    fieldDefinition: vardef,
                    metadata: vardef.metadata ?? {} as FieldMetadata,
                    logic: vardef.logic ?? {} as FieldLogicMap
                } as ViewFieldDefinition;
            });

            return Object.values(fieldsMap);
        }));
    }

    /**
     * Build ui user preference key
     *
     * @param {string} storageKey Storage Key
     * @protected
     * @returns {string} Preference Key
     */
    protected getPreferenceKey(storageKey: string): string {
        return 'recordview-' + storageKey;
    }

    /**
     * Save ui user preference
     *
     * @param {string} module Module
     * @param {string} storageKey Storage Key
     * @param {any} value Value
     * @protected
     */
    protected savePreference(module: string, storageKey: string, value: any): void {
        this.preferences.setUi(module, this.getPreferenceKey(storageKey), value);
    }

    /**
     * Load ui user preference
     *
     * @param {string} module Module
     * @param {string} storageKey Storage Key
     * @protected
     * @returns {any} User Preference
     */
    protected loadPreference(module: string, storageKey: string): any {
        return this.preferences.getUi(module, this.getPreferenceKey(storageKey));
    }

    private safeUnsubscription(subscriptionArray: Subscription[]): Subscription[] {
        subscriptionArray.forEach(sub => {
            if (sub.closed) {
                return;
            }

            sub.unsubscribe();
        });
        subscriptionArray = [];

        return subscriptionArray;
    }
}
