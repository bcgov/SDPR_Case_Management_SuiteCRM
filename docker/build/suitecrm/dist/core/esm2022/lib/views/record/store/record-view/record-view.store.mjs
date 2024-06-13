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
import { BehaviorSubject, combineLatest, combineLatestWith, of } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, take, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { deepClone, isVoid, } from 'common';
import { NavigationStore } from '../../../../store/navigation/navigation.store';
import { RecordSaveGQL } from '../../../../store/record/graphql/api.record.save';
import { LanguageStore } from '../../../../store/language/language.store';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { MessageService } from '../../../../services/message/message.service';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { RecordManager } from '../../../../services/record/record.manager';
import { LocalStorageService } from '../../../../services/local-storage/local-storage.service';
import { SubpanelStoreFactory } from '../../../../containers/subpanel/store/subpanel/subpanel.store.factory';
import { ViewStore } from '../../../../store/view/view.store';
import { RecordFetchGQL } from '../../../../store/record/graphql/api.record.get';
import { StatisticsBatch } from '../../../../store/statistics/statistics-batch.service';
import { RecordStoreFactory } from '../../../../store/record/record.store.factory';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { PanelLogicManager } from '../../../../components/panel-logic/panel-logic.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record/graphql/api.record.get";
import * as i2 from "../../../../store/record/graphql/api.record.save";
import * as i3 from "../../../../store/app-state/app-state.store";
import * as i4 from "../../../../store/language/language.store";
import * as i5 from "../../../../store/navigation/navigation.store";
import * as i6 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i7 from "../../../../store/metadata/metadata.store.service";
import * as i8 from "../../../../services/local-storage/local-storage.service";
import * as i9 from "../../../../services/message/message.service";
import * as i10 from "../../../../containers/subpanel/store/subpanel/subpanel.store.factory";
import * as i11 from "../../../../services/record/record.manager";
import * as i12 from "../../../../store/statistics/statistics-batch.service";
import * as i13 from "../../../../store/record/record.store.factory";
import * as i14 from "../../../../store/user-preference/user-preference.store";
import * as i15 from "../../../../components/panel-logic/panel-logic.manager";
const initialState = {
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
class RecordViewStore extends ViewStore {
    constructor(recordFetchGQL, recordSaveGQL, appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore, localStorage, message, subpanelFactory, recordManager, statisticsBatch, recordStoreFactory, preferences, panelLogicManager) {
        super(appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore);
        this.recordFetchGQL = recordFetchGQL;
        this.recordSaveGQL = recordSaveGQL;
        this.appStateStore = appStateStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.moduleNavigation = moduleNavigation;
        this.metadataStore = metadataStore;
        this.localStorage = localStorage;
        this.message = message;
        this.subpanelFactory = subpanelFactory;
        this.recordManager = recordManager;
        this.statisticsBatch = statisticsBatch;
        this.recordStoreFactory = recordStoreFactory;
        this.preferences = preferences;
        this.panelLogicManager = panelLogicManager;
        this.panels = [];
        /** Internal Properties */
        this.cache$ = null;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.subpanelReloadSubject = new BehaviorSubject({});
        this.subpanelReloadSub = [];
        this.subs = [];
        this.fieldSubs = [];
        this.panelsSubject = new BehaviorSubject(this.panels);
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
        const data$ = this.record$.pipe(combineLatestWith(this.loading$), map(([record, loading]) => {
            this.data = { record, loading };
            return this.data;
        }));
        this.vm$ = data$.pipe(combineLatestWith(this.appData$, this.metadata$), map(([data, appData, metadata]) => {
            this.vm = { data, appData, metadata };
            return this.vm;
        }));
        this.subpanelsState = new BehaviorSubject({});
        this.subpanels$ = this.subpanelsState.asObservable();
        this.viewContext$ = this.record$.pipe(map(() => this.getViewContext()));
        this.initPanels();
    }
    get widgets() {
        return this.internalState.widgets;
    }
    set widgets(show) {
        this.updateState({
            ...this.internalState,
            widgets: show
        });
    }
    get showSidebarWidgets() {
        return this.internalState.showSidebarWidgets;
    }
    set showSidebarWidgets(show) {
        this.savePreference(this.getModuleName(), 'show-sidebar-widgets', show);
        this.updateState({
            ...this.internalState,
            showSidebarWidgets: show
        });
    }
    get showTopWidget() {
        return this.internalState.showTopWidget;
    }
    set showTopWidget(show) {
        this.updateState({
            ...this.internalState,
            showTopWidget: show
        });
    }
    get showSubpanels() {
        return this.internalState.showTopWidget;
    }
    set showSubpanels(show) {
        this.updateState({
            ...this.internalState,
            showSubpanels: show
        });
    }
    get params() {
        return this.internalState.params || {};
    }
    set params(params) {
        this.updateState({
            ...this.internalState,
            params
        });
    }
    getModuleName() {
        return this.internalState.module;
    }
    getRecordId() {
        return this.internalState.recordID;
    }
    getViewContext() {
        return {
            module: this.getModuleName(),
            id: this.getRecordId(),
            record: this.getBaseRecord()
        };
    }
    getSubpanels() {
        return this.subpanels;
    }
    /**
     * Clean destroy
     */
    destroy() {
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
    init(module, recordID, mode = 'detail', params = {}) {
        this.internalState.module = module;
        this.internalState.recordID = recordID;
        this.setMode(mode);
        this.initSubpanels(module, recordID);
        this.calculateShowWidgets();
        return this.load().pipe(tap(() => {
            this.showTopWidget = true;
            this.loadSubpanelStatistics(module);
            this.parseParams(params);
        }));
    }
    /**
     * Clear observable cache
     */
    clear() {
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
    getBaseRecord() {
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
    getMode() {
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
    setMode(mode) {
        this.updateState({ ...this.internalState, mode });
    }
    save() {
        this.appStateStore.updateLoading(`${this.internalState.module}-record-save`, true);
        this.updateState({
            ...this.internalState,
            loading: true
        });
        return this.recordStore.save().pipe(catchError(() => {
            this.message.addDangerMessageByKey('LBL_ERROR_SAVING');
            return of({});
        }), finalize(() => {
            this.setMode('detail');
            this.appStateStore.updateLoading(`${this.internalState.module}-record-save`, false);
            this.updateState({
                ...this.internalState,
                loading: false
            });
        }));
    }
    /**
     * Load / reload record using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordViewState>
     */
    load(useCache = true) {
        this.updateState({
            ...this.internalState,
            loading: true
        });
        return this.recordStore.retrieveRecord(this.internalState.module, this.internalState.recordID, useCache).pipe(tap((data) => {
            this.updateState({
                ...this.internalState,
                recordID: data.id,
                module: data.module,
                loading: false
            });
        }));
    }
    /**
     * Get summary template
     *
     * @returns {string} summary template label
     */
    getSummaryTemplate() {
        const metadata = this.metadata || {};
        const recordMeta = metadata.recordView || {};
        const templates = recordMeta.summaryTemplates || {};
        return templates[this.getMode()] || '';
    }
    initValidators(record) {
        if (!record || !Object.keys(record?.fields).length) {
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
    resetValidators(field) {
        if (!field?.formControl) {
            return;
        }
        field.formControl.clearValidators();
        field.formControl.clearAsyncValidators();
    }
    resetValidatorsForAllFields(record) {
        if (!record || !record?.fields?.length) {
            return;
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
    parseParams(params = {}) {
        if (!params) {
            return;
        }
        const currentParams = { ...this.internalState.params };
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
    loadSubpanelStatistics(module) {
        const subpanels = this.subpanelsState.value;
        if (!subpanels) {
            return;
        }
        const queries = {};
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
            .subscribe((stats) => {
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
    buildStatKey(subpanelKey, subpanelQueryKey) {
        subpanelKey = subpanelKey.replace(/_/g, '-');
        subpanelQueryKey = subpanelQueryKey.replace(/_/g, '-');
        return subpanelKey + '-' + subpanelQueryKey;
    }
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(this.internalState = state);
    }
    /**
     * Init subpanels
     *
     * @param {string} module parent module
     * @param {string} recordId id
     */
    initSubpanels(module, recordId) {
        this.showSubpanels = true;
        this.metadataStore.subPanelMetadata$.subscribe((meta) => {
            this.clearSubpanels();
            Object.keys(meta).forEach((key) => {
                this.subpanels[key] = this.subpanelFactory.create();
                this.subpanels[key].init(module, recordId, meta[key], this.record$);
            });
            this.subpanelsState.next(this.subpanels);
            Object.keys(this.subpanels).forEach(subpanelKey => {
                const subpanel = this.subpanels[subpanelKey];
                this.subpanelReloadSub.push(subpanel.recordList.records$.pipe(tap(() => {
                    const update = {};
                    update[subpanelKey] = true;
                    this.subpanelReloadSubject.next(update);
                })).subscribe());
            });
        });
    }
    initPanels() {
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
                const panel = { label, key: panelDefinition.key, rows: [] };
                const tabDef = meta.templateMeta.tabDefs[panelDefinition.key.toUpperCase()] ?? null;
                if (tabDef) {
                    panel.meta = tabDef;
                }
                panelDefinition.rows.forEach(rowDefinition => {
                    const row = { cols: [] };
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
                        this.fieldSubs.push(field.valueChanges$.subscribe(() => {
                            this.panelLogicManager.runLogic(logicDef.key, field, panel, record, this.getMode());
                        }));
                    });
                });
            });
            this.panelsSubject.next(this.panels = panels);
            return panels;
        });
        this.subs.push(panelSub);
    }
    clearSubpanels() {
        if (this.subpanels) {
            Object.keys(this.subpanels).forEach((key) => {
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
    calculateShowWidgets() {
        let show = false;
        const recordViewMeta = this.getRecordViewMetadata();
        const sidebarWidgetsConfig = recordViewMeta.sidebarWidgets || [];
        if (sidebarWidgetsConfig && sidebarWidgetsConfig.length > 0) {
            show = true;
        }
        const showSidebarWidgets = this.loadPreference(this.getModuleName(), 'show-sidebar-widgets') ?? null;
        if (showSidebarWidgets !== null) {
            this.showSidebarWidgets = showSidebarWidgets;
        }
        else {
            this.showSidebarWidgets = show;
        }
        this.widgets = show;
    }
    /**
     * Get record view metadata
     *
     * @returns {object} metadata RecordViewMetadata
     */
    getRecordViewMetadata() {
        const meta = this.metadataStore.get() || {};
        return meta.recordView || {};
    }
    /**
     * Get vardefs
     *
     * @returns {object} vardefs FieldDefinitionMap
     */
    getVardefs() {
        const meta = this.getRecordViewMetadata();
        return meta.vardefs || {};
    }
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    getViewFieldsObservable() {
        return this.metadataStore.recordViewMetadata$.pipe(map((recordMetadata) => {
            const fieldsMap = {};
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
                if (vardef.type == 'relate') {
                    return;
                }
                fieldsMap[fieldKey] = {
                    name: fieldKey,
                    vardefBased: true,
                    label: vardef.vname ?? '',
                    type: vardef.type ?? '',
                    display: vardef.display ?? '',
                    fieldDefinition: vardef,
                    metadata: vardef.metadata ?? {},
                    logic: vardef.logic ?? {}
                };
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
    getPreferenceKey(storageKey) {
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
    savePreference(module, storageKey, value) {
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
    loadPreference(module, storageKey) {
        return this.preferences.getUi(module, this.getPreferenceKey(storageKey));
    }
    safeUnsubscription(subscriptionArray) {
        subscriptionArray.forEach(sub => {
            if (sub.closed) {
                return;
            }
            sub.unsubscribe();
        });
        subscriptionArray = [];
        return subscriptionArray;
    }
    static { this.ɵfac = function RecordViewStore_Factory(t) { return new (t || RecordViewStore)(i0.ɵɵinject(i1.RecordFetchGQL), i0.ɵɵinject(i2.RecordSaveGQL), i0.ɵɵinject(i3.AppStateStore), i0.ɵɵinject(i4.LanguageStore), i0.ɵɵinject(i5.NavigationStore), i0.ɵɵinject(i6.ModuleNavigation), i0.ɵɵinject(i7.MetadataStore), i0.ɵɵinject(i8.LocalStorageService), i0.ɵɵinject(i9.MessageService), i0.ɵɵinject(i10.SubpanelStoreFactory), i0.ɵɵinject(i11.RecordManager), i0.ɵɵinject(i12.StatisticsBatch), i0.ɵɵinject(i13.RecordStoreFactory), i0.ɵɵinject(i14.UserPreferenceStore), i0.ɵɵinject(i15.PanelLogicManager)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordViewStore, factory: RecordViewStore.ɵfac }); }
}
export { RecordViewStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordViewStore, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordFetchGQL }, { type: i2.RecordSaveGQL }, { type: i3.AppStateStore }, { type: i4.LanguageStore }, { type: i5.NavigationStore }, { type: i6.ModuleNavigation }, { type: i7.MetadataStore }, { type: i8.LocalStorageService }, { type: i9.MessageService }, { type: i10.SubpanelStoreFactory }, { type: i11.RecordManager }, { type: i12.StatisticsBatch }, { type: i13.RecordStoreFactory }, { type: i14.UserPreferenceStore }, { type: i15.PanelLogicManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXZpZXcuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFjLEVBQUUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDdkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFFSCxTQUFTLEVBS1QsTUFBTSxHQVdULE1BQU0sUUFBUSxDQUFDO0FBRWhCLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUU5RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDL0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZFQUE2RSxDQUFDO0FBQzdHLE9BQU8sRUFFSCxhQUFhLEVBR2hCLE1BQU0sbURBQW1ELENBQUM7QUFDM0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBRTVFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFFekUsT0FBTyxFQUFDLG1CQUFtQixF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QUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNPLGNBQWMsQ0FBQyxNQUFjLEVBQUUsVUFBa0IsRUFBRSxLQUFVO1FBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyxjQUFjLENBQUMsTUFBYyxFQUFFLFVBQWtCO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxpQkFBaUM7UUFDeEQsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDWixPQUFPO2FBQ1Y7WUFFRCxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFFdkIsT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO2dGQTVzQlEsZUFBZTt1RUFBZixlQUFlLFdBQWYsZUFBZTs7U0FBZixlQUFlO3VGQUFmLGVBQWU7Y0FEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIGNvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmluYWxpemUsIG1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICAgIEJvb2xlYW5NYXAsXG4gICAgZGVlcENsb25lLFxuICAgIEZpZWxkLFxuICAgIEZpZWxkRGVmaW5pdGlvbk1hcCxcbiAgICBGaWVsZExvZ2ljTWFwLFxuICAgIEZpZWxkTWV0YWRhdGEsXG4gICAgaXNWb2lkLFxuICAgIFJlY29yZCxcbiAgICBTdGF0aXN0aWNzTWFwLFxuICAgIFN0YXRpc3RpY3NRdWVyeU1hcCxcbiAgICBTdWJQYW5lbE1ldGEsXG4gICAgVmlld0NvbnRleHQsXG4gICAgVmlld0ZpZWxkRGVmaW5pdGlvbixcbiAgICBWaWV3RmllbGREZWZpbml0aW9uTWFwLFxuICAgIFZpZXdNb2RlLFxuICAgIFBhbmVsLFxuICAgIFBhbmVsUm93LFxufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgUmVjb3JkVmlld0RhdGEsIFJlY29yZFZpZXdNb2RlbCwgUmVjb3JkVmlld1N0YXRlIH0gZnJvbSAnLi9yZWNvcmQtdmlldy5zdG9yZS5tb2RlbCc7XG5pbXBvcnQge05hdmlnYXRpb25TdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlJztcbmltcG9ydCB7U3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc3RhdGUnO1xuaW1wb3J0IHtSZWNvcmRTYXZlR1FMfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQvZ3JhcGhxbC9hcGkucmVjb3JkLnNhdmUnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQge1xuICAgIE1ldGFkYXRhLFxuICAgIE1ldGFkYXRhU3RvcmUsXG4gICAgUmVjb3JkVmlld01ldGFkYXRhLFxuICAgIFN1bW1hcnlUZW1wbGF0ZXNcbn0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1N1YnBhbmVsU3RvcmVNYXB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvc3VicGFuZWwvc3RvcmUvc3VicGFuZWwvc3VicGFuZWwuc3RvcmUnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7UmVjb3JkTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlY29yZC5tYW5hZ2VyJztcbmltcG9ydCB7UmVjb3JkU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC9yZWNvcmQuc3RvcmUnO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9sb2NhbC1zdG9yYWdlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1N1YnBhbmVsU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL3N1YnBhbmVsL3N0b3JlL3N1YnBhbmVsL3N1YnBhbmVsLnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtWaWV3U3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3ZpZXcvdmlldy5zdG9yZSc7XG5pbXBvcnQge1JlY29yZEZldGNoR1FMfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQvZ3JhcGhxbC9hcGkucmVjb3JkLmdldCc7XG5pbXBvcnQge1N0YXRpc3RpY3NCYXRjaH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc3RhdGlzdGljcy9zdGF0aXN0aWNzLWJhdGNoLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC9yZWNvcmQuc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtQYW5lbExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wYW5lbC1sb2dpYy9wYW5lbC1sb2dpYy5tYW5hZ2VyJztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBSZWNvcmRWaWV3U3RhdGUgPSB7XG4gICAgbW9kdWxlOiAnJyxcbiAgICByZWNvcmRJRDogJycsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgd2lkZ2V0czogZmFsc2UsXG4gICAgc2hvd1NpZGViYXJXaWRnZXRzOiBmYWxzZSxcbiAgICBzaG93VG9wV2lkZ2V0OiBmYWxzZSxcbiAgICBzaG93U3VicGFuZWxzOiBmYWxzZSxcbiAgICBtb2RlOiAnZGV0YWlsJyxcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgcmV0dXJuTW9kdWxlOiAnJyxcbiAgICAgICAgcmV0dXJuSWQ6ICcnLFxuICAgICAgICByZXR1cm5BY3Rpb246ICcnXG4gICAgfVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlY29yZFZpZXdTdG9yZSBleHRlbmRzIFZpZXdTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIGxvbmctbGl2ZWQgb2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgICovXG4gICAgcmVjb3JkJDogT2JzZXJ2YWJsZTxSZWNvcmQ+O1xuICAgIHN0YWdpbmdSZWNvcmQkOiBPYnNlcnZhYmxlPFJlY29yZD47XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgd2lkZ2V0cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgc2hvd1NpZGViYXJXaWRnZXRzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBzaG93VG9wV2lkZ2V0JDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBzaG93U3VicGFuZWxzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBtb2RlJDogT2JzZXJ2YWJsZTxWaWV3TW9kZT47XG4gICAgc3VicGFuZWxzJDogT2JzZXJ2YWJsZTxTdWJwYW5lbFN0b3JlTWFwPjtcbiAgICB2aWV3Q29udGV4dCQ6IE9ic2VydmFibGU8Vmlld0NvbnRleHQ+O1xuICAgIHN1YnBhbmVsUmVsb2FkJDogT2JzZXJ2YWJsZTxCb29sZWFuTWFwPjtcbiAgICBwYW5lbHM6IFBhbmVsW10gPSBbXTtcbiAgICBwYW5lbHMkOiBPYnNlcnZhYmxlPFBhbmVsW10+O1xuXG5cbiAgICAvKipcbiAgICAgKiBWaWV3LW1vZGVsIHRoYXQgcmVzb2x2ZXMgb25jZSBhbGwgdGhlIGRhdGEgaXMgcmVhZHkgKG9yIHVwZGF0ZWQpLlxuICAgICAqL1xuICAgIHZtJDogT2JzZXJ2YWJsZTxSZWNvcmRWaWV3TW9kZWw+O1xuICAgIHZtOiBSZWNvcmRWaWV3TW9kZWw7XG4gICAgZGF0YTogUmVjb3JkVmlld0RhdGE7XG4gICAgcmVjb3JkU3RvcmU6IFJlY29yZFN0b3JlO1xuXG4gICAgLyoqIEludGVybmFsIFByb3BlcnRpZXMgKi9cbiAgICBwcm90ZWN0ZWQgY2FjaGUkOiBPYnNlcnZhYmxlPGFueT4gPSBudWxsO1xuICAgIHByb3RlY3RlZCBpbnRlcm5hbFN0YXRlOiBSZWNvcmRWaWV3U3RhdGUgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFJlY29yZFZpZXdTdGF0ZT4odGhpcy5pbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgc3VicGFuZWxzOiBTdWJwYW5lbFN0b3JlTWFwO1xuICAgIHByb3RlY3RlZCBzdWJwYW5lbHNTdGF0ZTogQmVoYXZpb3JTdWJqZWN0PFN1YnBhbmVsU3RvcmVNYXA+O1xuICAgIHByb3RlY3RlZCBzdWJwYW5lbFJlbG9hZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEJvb2xlYW5NYXA+KHt9IGFzIEJvb2xlYW5NYXApO1xuICAgIHByb3RlY3RlZCBzdWJwYW5lbFJlbG9hZFN1YjogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgZmllbGRTdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBwYW5lbHNTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8UGFuZWxbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMucGFuZWxzKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkRmV0Y2hHUUw6IFJlY29yZEZldGNoR1FMLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkU2F2ZUdRTDogUmVjb3JkU2F2ZUdRTCxcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvblN0b3JlOiBOYXZpZ2F0aW9uU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGFTdG9yZTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc3VicGFuZWxGYWN0b3J5OiBTdWJwYW5lbFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZE1hbmFnZXI6IFJlY29yZE1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBzdGF0aXN0aWNzQmF0Y2g6IFN0YXRpc3RpY3NCYXRjaCxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZFN0b3JlRmFjdG9yeTogUmVjb3JkU3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBwYW5lbExvZ2ljTWFuYWdlcjogUGFuZWxMb2dpY01hbmFnZXIsXG4gICAgKSB7XG5cbiAgICAgICAgc3VwZXIoYXBwU3RhdGVTdG9yZSwgbGFuZ3VhZ2VTdG9yZSwgbmF2aWdhdGlvblN0b3JlLCBtb2R1bGVOYXZpZ2F0aW9uLCBtZXRhZGF0YVN0b3JlKTtcblxuICAgICAgICB0aGlzLnBhbmVscyQgPSB0aGlzLnBhbmVsc1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRTdG9yZSA9IHJlY29yZFN0b3JlRmFjdG9yeS5jcmVhdGUodGhpcy5nZXRWaWV3RmllbGRzT2JzZXJ2YWJsZSgpKTtcblxuICAgICAgICB0aGlzLnJlY29yZCQgPSB0aGlzLnJlY29yZFN0b3JlLnN0YXRlJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLnN0YWdpbmdSZWNvcmQkID0gdGhpcy5yZWNvcmRTdG9yZS5zdGFnaW5nJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubG9hZGluZykpO1xuICAgICAgICB0aGlzLndpZGdldHMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUud2lkZ2V0cykpO1xuICAgICAgICB0aGlzLnNob3dTaWRlYmFyV2lkZ2V0cyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5zaG93U2lkZWJhcldpZGdldHMpKTtcbiAgICAgICAgdGhpcy5zaG93VG9wV2lkZ2V0JCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnNob3dUb3BXaWRnZXQpKTtcbiAgICAgICAgdGhpcy5zaG93U3VicGFuZWxzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnNob3dTdWJwYW5lbHMpKTtcbiAgICAgICAgdGhpcy5tb2RlJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLm1vZGUpKTtcbiAgICAgICAgdGhpcy5zdWJwYW5lbFJlbG9hZCQgPSB0aGlzLnN1YnBhbmVsUmVsb2FkU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICAgICAgICBjb25zdCBkYXRhJCA9IHRoaXMucmVjb3JkJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5sb2FkaW5nJCksXG4gICAgICAgICAgICBtYXAoKFtyZWNvcmQsIGxvYWRpbmddOiBbUmVjb3JkLCBib29sZWFuXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHtyZWNvcmQsIGxvYWRpbmd9IGFzIFJlY29yZFZpZXdEYXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudm0kID0gZGF0YSQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMuYXBwRGF0YSQsIHRoaXMubWV0YWRhdGEkKSxcbiAgICAgICAgICAgIG1hcCgoW2RhdGEsIGFwcERhdGEsIG1ldGFkYXRhXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudm0gPSB7ZGF0YSwgYXBwRGF0YSwgbWV0YWRhdGF9IGFzIFJlY29yZFZpZXdNb2RlbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52bTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnN1YnBhbmVsc1N0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTdWJwYW5lbFN0b3JlTWFwPih7fSBhcyBTdWJwYW5lbFN0b3JlTWFwKTtcbiAgICAgICAgdGhpcy5zdWJwYW5lbHMkID0gdGhpcy5zdWJwYW5lbHNTdGF0ZS5hc09ic2VydmFibGUoKTtcblxuXG4gICAgICAgIHRoaXMudmlld0NvbnRleHQkID0gdGhpcy5yZWNvcmQkLnBpcGUobWFwKCgpID0+IHRoaXMuZ2V0Vmlld0NvbnRleHQoKSkpO1xuICAgICAgICB0aGlzLmluaXRQYW5lbHMoKTtcbiAgICB9XG5cbiAgICBnZXQgd2lkZ2V0cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS53aWRnZXRzO1xuICAgIH1cblxuICAgIHNldCB3aWRnZXRzKHNob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICB3aWRnZXRzOiBzaG93XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBzaG93U2lkZWJhcldpZGdldHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUuc2hvd1NpZGViYXJXaWRnZXRzO1xuICAgIH1cblxuICAgIHNldCBzaG93U2lkZWJhcldpZGdldHMoc2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnNhdmVQcmVmZXJlbmNlKHRoaXMuZ2V0TW9kdWxlTmFtZSgpLCAnc2hvdy1zaWRlYmFyLXdpZGdldHMnLCBzaG93KTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBzaG93U2lkZWJhcldpZGdldHM6IHNob3dcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dUb3BXaWRnZXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUuc2hvd1RvcFdpZGdldDtcbiAgICB9XG5cbiAgICBzZXQgc2hvd1RvcFdpZGdldChzaG93OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgc2hvd1RvcFdpZGdldDogc2hvd1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgc2hvd1N1YnBhbmVscygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5zaG93VG9wV2lkZ2V0O1xuICAgIH1cblxuICAgIHNldCBzaG93U3VicGFuZWxzKHNob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBzaG93U3VicGFuZWxzOiBzaG93XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBwYXJhbXMoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUucGFyYW1zIHx8IHt9O1xuICAgIH1cblxuICAgIHNldCBwYXJhbXMocGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgcGFyYW1zXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldE1vZHVsZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGU7XG4gICAgfVxuXG4gICAgZ2V0UmVjb3JkSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5yZWNvcmRJRDtcbiAgICB9XG5cbiAgICBnZXRWaWV3Q29udGV4dCgpOiBWaWV3Q29udGV4dCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMuZ2V0TW9kdWxlTmFtZSgpLFxuICAgICAgICAgICAgaWQ6IHRoaXMuZ2V0UmVjb3JkSWQoKSxcbiAgICAgICAgICAgIHJlY29yZDogdGhpcy5nZXRCYXNlUmVjb3JkKClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRTdWJwYW5lbHMoKTogU3VicGFuZWxTdG9yZU1hcCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnBhbmVscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhbiBkZXN0cm95XG4gICAgICovXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIHJlY29yZCBsb2FkIGlmIG5vdCBjYWNoZWQgYW5kIHVwZGF0ZSBzdGF0ZS5cbiAgICAgKiBSZXR1cm5zIG9ic2VydmFibGUgdG8gYmUgdXNlZCBpbiByZXNvbHZlciBpZiBuZWVkZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlY29yZElEIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgdG8gc2V0XG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHVibGljIGluaXQobW9kdWxlOiBzdHJpbmcsIHJlY29yZElEOiBzdHJpbmcsIG1vZGUgPSAnZGV0YWlsJyBhcyBWaWV3TW9kZSwgcGFyYW1zOiBQYXJhbXMgPSB7fSk6IE9ic2VydmFibGU8UmVjb3JkPiB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5yZWNvcmRJRCA9IHJlY29yZElEO1xuICAgICAgICB0aGlzLnNldE1vZGUobW9kZSk7XG4gICAgICAgIHRoaXMuaW5pdFN1YnBhbmVscyhtb2R1bGUsIHJlY29yZElEKTtcblxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNob3dXaWRnZXRzKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZCgpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvcFdpZGdldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3VicGFuZWxTdGF0aXN0aWNzKG1vZHVsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJzZVBhcmFtcyhwYXJhbXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBvYnNlcnZhYmxlIGNhY2hlXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhY2hlJCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2xlYXJTdWJwYW5lbHMoKTtcbiAgICAgICAgdGhpcy5zdWJwYW5lbHNTdGF0ZS51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRlZXBDbG9uZShpbml0aWFsU3RhdGUpKTtcbiAgICAgICAgdGhpcy5zdWJzID0gdGhpcy5zYWZlVW5zdWJzY3JpcHRpb24odGhpcy5zdWJzKTtcbiAgICAgICAgdGhpcy5maWVsZFN1YnMgPSB0aGlzLnNhZmVVbnN1YnNjcmlwdGlvbih0aGlzLmZpZWxkU3Vicyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHN0YWdpbmcgcmVjb3JkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBWaWV3TW9kZVxuICAgICAqL1xuICAgIGdldEJhc2VSZWNvcmQoKTogUmVjb3JkIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVybmFsU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZFN0b3JlLmdldEJhc2VSZWNvcmQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCB2aWV3IG1vZGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFZpZXdNb2RlXG4gICAgICovXG4gICAgZ2V0TW9kZSgpOiBWaWV3TW9kZSB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcm5hbFN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IG5ldyBtb2RlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSBWaWV3TW9kZVxuICAgICAqL1xuICAgIHNldE1vZGUobW9kZTogVmlld01vZGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4udGhpcy5pbnRlcm5hbFN0YXRlLCBtb2RlfSk7XG4gICAgfVxuXG4gICAgc2F2ZSgpOiBPYnNlcnZhYmxlPFJlY29yZD4ge1xuICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZyhgJHt0aGlzLmludGVybmFsU3RhdGUubW9kdWxlfS1yZWNvcmQtc2F2ZWAsIHRydWUpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRTdG9yZS5zYXZlKCkucGlwZShcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlQnlLZXkoJ0xCTF9FUlJPUl9TQVZJTkcnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2Yoe30gYXMgUmVjb3JkKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9kZSgnZGV0YWlsJyBhcyBWaWV3TW9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoYCR7dGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZX0tcmVjb3JkLXNhdmVgLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCAvIHJlbG9hZCByZWNvcmQgdXNpbmcgY3VycmVudCBwYWdpbmF0aW9uIGFuZCBjcml0ZXJpYVxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1c2VDYWNoZSBpZiB0byB1c2UgY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPFJlY29yZFZpZXdTdGF0ZT5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZCh1c2VDYWNoZSA9IHRydWUpOiBPYnNlcnZhYmxlPFJlY29yZD4ge1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRTdG9yZS5yZXRyaWV2ZVJlY29yZChcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGUsXG4gICAgICAgICAgICB0aGlzLmludGVybmFsU3RhdGUucmVjb3JkSUQsXG4gICAgICAgICAgICB1c2VDYWNoZVxuICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICB0YXAoKGRhdGE6IFJlY29yZCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkSUQ6IGRhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZTogZGF0YS5tb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBzdW1tYXJ5IHRlbXBsYXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBzdW1tYXJ5IHRlbXBsYXRlIGxhYmVsXG4gICAgICovXG4gICAgZ2V0U3VtbWFyeVRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gdGhpcy5tZXRhZGF0YSB8fCB7fSBhcyBNZXRhZGF0YTtcbiAgICAgICAgY29uc3QgcmVjb3JkTWV0YSA9IG1ldGFkYXRhLnJlY29yZFZpZXcgfHwge30gYXMgUmVjb3JkVmlld01ldGFkYXRhO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZXMgPSByZWNvcmRNZXRhLnN1bW1hcnlUZW1wbGF0ZXMgfHwge30gYXMgU3VtbWFyeVRlbXBsYXRlcztcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlc1t0aGlzLmdldE1vZGUoKV0gfHwgJyc7XG4gICAgfVxuXG4gICAgaW5pdFZhbGlkYXRvcnMocmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgaWYoIXJlY29yZCB8fCAhT2JqZWN0LmtleXMocmVjb3JkPy5maWVsZHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXMocmVjb3JkLmZpZWxkcykuZm9yRWFjaChmaWVsZE5hbWUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSByZWNvcmQuZmllbGRzW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICBjb25zdCBmb3JtQ29udHJvbCA9IGZpZWxkPy5mb3JtQ29udHJvbCA/PyBudWxsO1xuICAgICAgICAgICAgaWYgKCFmb3JtQ29udHJvbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZXNldFZhbGlkYXRvcnMoZmllbGQpO1xuXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0b3JzID0gZmllbGQ/LnZhbGlkYXRvcnMgPz8gW107XG4gICAgICAgICAgICBjb25zdCBhc3luY1ZhbGlkYXRvcnMgPSBmaWVsZD8uYXN5bmNWYWxpZGF0b3JzID8/IFtdO1xuXG4gICAgICAgICAgICBpZiAoZmllbGQ/LmZvcm1Db250cm9sICYmIHZhbGlkYXRvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWVsZD8uZm9ybUNvbnRyb2wgJiYgYXN5bmNWYWxpZGF0b3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZpZWxkLmZvcm1Db250cm9sLnNldEFzeW5jVmFsaWRhdG9ycyhhc3luY1ZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHJlc2V0VmFsaWRhdG9ycyhmaWVsZDogRmllbGQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFmaWVsZD8uZm9ybUNvbnRyb2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkLmZvcm1Db250cm9sLmNsZWFyVmFsaWRhdG9ycygpO1xuICAgICAgICBmaWVsZC5mb3JtQ29udHJvbC5jbGVhckFzeW5jVmFsaWRhdG9ycygpO1xuICAgIH1cblxuICAgIHJlc2V0VmFsaWRhdG9yc0ZvckFsbEZpZWxkcyhyZWNvcmQ6IFJlY29yZCk6IHZvaWQge1xuICAgICAgICBpZighcmVjb3JkIHx8ICFyZWNvcmQ/LmZpZWxkcz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5rZXlzKHJlY29yZC5maWVsZHMpLmZvckVhY2goZmllbGROYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gcmVjb3JkLmZpZWxkc1tmaWVsZE5hbWVdO1xuICAgICAgICAgICAgY29uc3QgZm9ybUNvbnRyb2wgPSBmaWVsZD8uZm9ybUNvbnRyb2wgPz8gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCFmb3JtQ29udHJvbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZXNldFZhbGlkYXRvcnMoZmllbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBxdWVyeSBwYXJhbXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHBhcnNlUGFyYW1zKHBhcmFtczogUGFyYW1zID0ge30pOiB2b2lkIHtcbiAgICAgICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXJhbXMgPSB7Li4udGhpcy5pbnRlcm5hbFN0YXRlLnBhcmFtc307XG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChwYXJhbUtleSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzVm9pZChjdXJyZW50UGFyYW1zW3BhcmFtS2V5XSkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFyYW1zW3BhcmFtS2V5XSA9IHBhcmFtc1twYXJhbUtleV07XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIExvYWQgYWxsIHN0YXRpc3RpY3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGxvYWRTdWJwYW5lbFN0YXRpc3RpY3MobW9kdWxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3VicGFuZWxzID0gdGhpcy5zdWJwYW5lbHNTdGF0ZS52YWx1ZTtcblxuICAgICAgICBpZiAoIXN1YnBhbmVscykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcXVlcmllczogU3RhdGlzdGljc1F1ZXJ5TWFwID0ge307XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3VicGFuZWxzKS5mb3JFYWNoKHN1YnBhbmVsS2V5ID0+IHtcblxuICAgICAgICAgICAgY29uc3Qgc3VicGFuZWwgPSBzdWJwYW5lbHNbc3VicGFuZWxLZXldO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHNNYXAgPSBzdWJwYW5lbC5zdGF0aXN0aWNzO1xuXG4gICAgICAgICAgICBpZiAoIXN0YXRzTWFwIHx8ICFPYmplY3Qua2V5cyhzdGF0c01hcCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3VicGFuZWwuc2hvdWxkQmF0Y2hTdGF0aXN0aWMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzdWJwYW5lbC5sb2FkQWxsU3RhdGlzdGljcygpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzdWJwYW5lbFF1ZXJpZXMgPSBzdWJwYW5lbC5nZXRBbGxTdGF0aXN0aWNRdWVyeSgpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdWJwYW5lbFF1ZXJpZXMpLmZvckVhY2goc3VicGFuZWxRdWVyeUtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlLZXkgPSB0aGlzLmJ1aWxkU3RhdEtleShzdWJwYW5lbEtleSwgc3VicGFuZWxRdWVyeUtleSk7XG4gICAgICAgICAgICAgICAgcXVlcmllc1txdWVyeUtleV0gPSBzdWJwYW5lbFF1ZXJpZXNbc3VicGFuZWxRdWVyeUtleV07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc3VicGFuZWwuc2V0QWxsU3RhdGlzdGljc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGlzdGljc0JhdGNoLmZldGNoKG1vZHVsZSwgcXVlcmllcylcbiAgICAgICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChzdGF0czogU3RhdGlzdGljc01hcCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc3VicGFuZWxzKS5mb3JFYWNoKHN1YnBhbmVsS2V5ID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJwYW5lbCA9IHN1YnBhbmVsc1tzdWJwYW5lbEtleV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YnBhbmVsUXVlcmllcyA9IHN1YnBhbmVsLmdldEFsbFN0YXRpc3RpY1F1ZXJ5KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc3VicGFuZWxRdWVyaWVzKS5mb3JFYWNoKHN1YnBhbmVsUXVlcnlLZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnlLZXkgPSB0aGlzLmJ1aWxkU3RhdEtleShzdWJwYW5lbEtleSwgc3VicGFuZWxRdWVyeUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ID0gc3RhdHNbcXVlcnlLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGF0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3VicGFuZWwuc2V0U3RhdGlzdGljcyhzdWJwYW5lbFF1ZXJ5S2V5LCBzdGF0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3VicGFuZWwuc2V0QWxsU3RhdGlzdGljc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkU3RhdEtleShzdWJwYW5lbEtleTogc3RyaW5nLCBzdWJwYW5lbFF1ZXJ5S2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBzdWJwYW5lbEtleSA9IHN1YnBhbmVsS2V5LnJlcGxhY2UoL18vZywgJy0nKTtcbiAgICAgICAgc3VicGFuZWxRdWVyeUtleSA9IHN1YnBhbmVsUXVlcnlLZXkucmVwbGFjZSgvXy9nLCAnLScpO1xuXG4gICAgICAgIHJldHVybiBzdWJwYW5lbEtleSArICctJyArIHN1YnBhbmVsUXVlcnlLZXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZTogUmVjb3JkVmlld1N0YXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dCh0aGlzLmludGVybmFsU3RhdGUgPSBzdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBzdWJwYW5lbHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgcGFyZW50IG1vZHVsZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWNvcmRJZCBpZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0U3VicGFuZWxzKG1vZHVsZTogc3RyaW5nLCByZWNvcmRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2hvd1N1YnBhbmVscyA9IHRydWU7XG4gICAgICAgIHRoaXMubWV0YWRhdGFTdG9yZS5zdWJQYW5lbE1ldGFkYXRhJC5zdWJzY3JpYmUoKG1ldGE6IFN1YlBhbmVsTWV0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhclN1YnBhbmVscygpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtZXRhKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VicGFuZWxzW2tleV0gPSB0aGlzLnN1YnBhbmVsRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnBhbmVsc1trZXldLmluaXQobW9kdWxlLCByZWNvcmRJZCwgbWV0YVtrZXldLCB0aGlzLnJlY29yZCQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc3VicGFuZWxzU3RhdGUubmV4dCh0aGlzLnN1YnBhbmVscyk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3VicGFuZWxzKS5mb3JFYWNoKHN1YnBhbmVsS2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJwYW5lbCA9IHRoaXMuc3VicGFuZWxzW3N1YnBhbmVsS2V5XTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnBhbmVsUmVsb2FkU3ViLnB1c2goc3VicGFuZWwucmVjb3JkTGlzdC5yZWNvcmRzJC5waXBlKHRhcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IHt9IGFzIEJvb2xlYW5NYXA7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVtzdWJwYW5lbEtleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YnBhbmVsUmVsb2FkU3ViamVjdC5uZXh0KHVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSkpLnN1YnNjcmliZSgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdFBhbmVscygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcGFuZWxTdWIgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICAgIHRoaXMubWV0YWRhdGFTdG9yZS5yZWNvcmRWaWV3TWV0YWRhdGEkLFxuICAgICAgICAgICAgdGhpcy5zdGFnaW5nUmVjb3JkJCxcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VTdG9yZS52bSQsXG4gICAgICAgIF0pLnN1YnNjcmliZSgoW21ldGEsIHJlY29yZCwgbGFuZ3VhZ2VzXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFuZWxzID0gW107XG4gICAgICAgICAgICBjb25zdCBtb2R1bGUgPSAocmVjb3JkICYmIHJlY29yZC5tb2R1bGUpIHx8ICcnO1xuXG4gICAgICAgICAgICB0aGlzLnNhZmVVbnN1YnNjcmlwdGlvbih0aGlzLmZpZWxkU3Vicyk7XG4gICAgICAgICAgICBtZXRhLnBhbmVscy5mb3JFYWNoKHBhbmVsRGVmaW5pdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSAocGFuZWxEZWZpbml0aW9uLmxhYmVsKVxuICAgICAgICAgICAgICAgICAgICA/IHBhbmVsRGVmaW5pdGlvbi5sYWJlbC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5sYW5ndWFnZVN0b3JlLmdldEZpZWxkTGFiZWwocGFuZWxEZWZpbml0aW9uLmtleS50b1VwcGVyQ2FzZSgpLCBtb2R1bGUsIGxhbmd1YWdlcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFuZWwgPSB7IGxhYmVsLCBrZXk6IHBhbmVsRGVmaW5pdGlvbi5rZXksIHJvd3M6IFtdIH0gYXMgUGFuZWw7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YWJEZWYgPSBtZXRhLnRlbXBsYXRlTWV0YS50YWJEZWZzW3BhbmVsRGVmaW5pdGlvbi5rZXkudG9VcHBlckNhc2UoKV0gPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAodGFiRGVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhbmVsLm1ldGEgPSB0YWJEZWY7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFuZWxEZWZpbml0aW9uLnJvd3MuZm9yRWFjaChyb3dEZWZpbml0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0geyBjb2xzOiBbXSB9IGFzIFBhbmVsUm93O1xuICAgICAgICAgICAgICAgICAgICByb3dEZWZpbml0aW9uLmNvbHMuZm9yRWFjaChjZWxsRGVmaW5pdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cuY29scy5wdXNoKHsgLi4uY2VsbERlZmluaXRpb24gfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBwYW5lbC5yb3dzLnB1c2gocm93KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHBhbmVsLmRpc3BsYXlTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3QodGFiRGVmPy5kaXNwbGF5ID8/IHRydWUpO1xuICAgICAgICAgICAgICAgIHBhbmVsLmRpc3BsYXkkID0gcGFuZWwuZGlzcGxheVN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgICAgICAgICAgICAgcGFuZWxzLnB1c2gocGFuZWwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzRW1wdHkocmVjb3JkPy5maWVsZHMpIHx8IGlzRW1wdHkodGFiRGVmPy5kaXNwbGF5TG9naWMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHRhYkRlZi5kaXNwbGF5TG9naWMpLmZvckVhY2goKGxvZ2ljRGVmKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5KGxvZ2ljRGVmPy5wYXJhbXM/LmZpZWxkRGVwZW5kZW5jaWVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbG9naWNEZWYucGFyYW1zLmZpZWxkRGVwZW5kZW5jaWVzLmZvckVhY2goZmllbGRLZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSByZWNvcmQuZmllbGRzW2ZpZWxkS2V5XSB8fCBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRW1wdHkoZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkU3Vicy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnZhbHVlQ2hhbmdlcyQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbExvZ2ljTWFuYWdlci5ydW5Mb2dpYyhsb2dpY0RlZi5rZXksIGZpZWxkLCBwYW5lbCwgcmVjb3JkLCB0aGlzLmdldE1vZGUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wYW5lbHNTdWJqZWN0Lm5leHQodGhpcy5wYW5lbHMgPSBwYW5lbHMpO1xuICAgICAgICAgICAgcmV0dXJuIHBhbmVscztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2gocGFuZWxTdWIpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbGVhclN1YnBhbmVscygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3VicGFuZWxzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN1YnBhbmVscykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnBhbmVsc1trZXldLmNsZWFyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN1YnBhbmVsUmVsb2FkU3ViLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdWJwYW5lbFJlbG9hZFN1Yi5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgICAgICB0aGlzLnN1YnBhbmVsUmVsb2FkU3ViID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1YnBhbmVscyA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBpZiB3aWRnZXRzIGFyZSB0byBkaXNwbGF5XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNhbGN1bGF0ZVNob3dXaWRnZXRzKCk6IHZvaWQge1xuICAgICAgICBsZXQgc2hvdyA9IGZhbHNlO1xuICAgICAgICBjb25zdCByZWNvcmRWaWV3TWV0YSA9IHRoaXMuZ2V0UmVjb3JkVmlld01ldGFkYXRhKCk7XG4gICAgICAgIGNvbnN0IHNpZGViYXJXaWRnZXRzQ29uZmlnID0gcmVjb3JkVmlld01ldGEuc2lkZWJhcldpZGdldHMgfHwgW107XG5cbiAgICAgICAgaWYgKHNpZGViYXJXaWRnZXRzQ29uZmlnICYmIHNpZGViYXJXaWRnZXRzQ29uZmlnLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hvd1NpZGViYXJXaWRnZXRzID0gdGhpcy5sb2FkUHJlZmVyZW5jZSh0aGlzLmdldE1vZHVsZU5hbWUoKSwgJ3Nob3ctc2lkZWJhci13aWRnZXRzJykgPz8gbnVsbDtcblxuICAgICAgICBpZiAoc2hvd1NpZGViYXJXaWRnZXRzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTaWRlYmFyV2lkZ2V0cyA9IHNob3dTaWRlYmFyV2lkZ2V0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NpZGViYXJXaWRnZXRzID0gc2hvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IHNob3c7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHJlY29yZCB2aWV3IG1ldGFkYXRhXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBtZXRhZGF0YSBSZWNvcmRWaWV3TWV0YWRhdGFcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UmVjb3JkVmlld01ldGFkYXRhKCk6IFJlY29yZFZpZXdNZXRhZGF0YSB7XG4gICAgICAgIGNvbnN0IG1ldGEgPSB0aGlzLm1ldGFkYXRhU3RvcmUuZ2V0KCkgfHwge307XG4gICAgICAgIHJldHVybiBtZXRhLnJlY29yZFZpZXcgfHwge30gYXMgUmVjb3JkVmlld01ldGFkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB2YXJkZWZzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSB2YXJkZWZzIEZpZWxkRGVmaW5pdGlvbk1hcFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRWYXJkZWZzKCk6IEZpZWxkRGVmaW5pdGlvbk1hcCB7XG4gICAgICAgIGNvbnN0IG1ldGEgPSB0aGlzLmdldFJlY29yZFZpZXdNZXRhZGF0YSgpO1xuICAgICAgICByZXR1cm4gbWV0YS52YXJkZWZzIHx8IHt9IGFzIEZpZWxkRGVmaW5pdGlvbk1hcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdmlldyBmaWVsZHMgb2JzZXJ2YWJsZVxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxWaWV3RmllbGREZWZpbml0aW9uW10+XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFZpZXdGaWVsZHNPYnNlcnZhYmxlKCk6IE9ic2VydmFibGU8Vmlld0ZpZWxkRGVmaW5pdGlvbltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ldGFkYXRhU3RvcmUucmVjb3JkVmlld01ldGFkYXRhJC5waXBlKG1hcCgocmVjb3JkTWV0YWRhdGE6IFJlY29yZFZpZXdNZXRhZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGRzTWFwOiBWaWV3RmllbGREZWZpbml0aW9uTWFwID0ge307XG5cbiAgICAgICAgICAgIHJlY29yZE1ldGFkYXRhLnBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHtcbiAgICAgICAgICAgICAgICBwYW5lbC5yb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm93LmNvbHMuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGROYW1lID0gY29sLm5hbWUgPz8gY29sLmZpZWxkRGVmaW5pdGlvbi5uYW1lID8/ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzTWFwW2ZpZWxkTmFtZV0gPSBjb2w7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlY29yZE1ldGFkYXRhLnZhcmRlZnMpLmZvckVhY2goZmllbGRLZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmRlZiA9IHJlY29yZE1ldGFkYXRhLnZhcmRlZnNbZmllbGRLZXldID8/IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCF2YXJkZWYgfHwgaXNFbXB0eSh2YXJkZWYpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IGRlZmluZWQuIHNraXBcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRzTWFwW2ZpZWxkS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHZhcmRlZi50eXBlID09ICdyZWxhdGUnKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpZWxkc01hcFtmaWVsZEtleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpZWxkS2V5LFxuICAgICAgICAgICAgICAgICAgICB2YXJkZWZCYXNlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHZhcmRlZi52bmFtZSA/PyAnJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdmFyZGVmLnR5cGUgPz8gJycsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHZhcmRlZi5kaXNwbGF5ID8/ICcnLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZERlZmluaXRpb246IHZhcmRlZixcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IHZhcmRlZi5tZXRhZGF0YSA/PyB7fSBhcyBGaWVsZE1ldGFkYXRhLFxuICAgICAgICAgICAgICAgICAgICBsb2dpYzogdmFyZGVmLmxvZ2ljID8/IHt9IGFzIEZpZWxkTG9naWNNYXBcbiAgICAgICAgICAgICAgICB9IGFzIFZpZXdGaWVsZERlZmluaXRpb247XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZmllbGRzTWFwKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHVpIHVzZXIgcHJlZmVyZW5jZSBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yYWdlS2V5IFN0b3JhZ2UgS2V5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFByZWZlcmVuY2UgS2V5XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFByZWZlcmVuY2VLZXkoc3RvcmFnZUtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdyZWNvcmR2aWV3LScgKyBzdG9yYWdlS2V5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgdWkgdXNlciBwcmVmZXJlbmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIE1vZHVsZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yYWdlS2V5IFN0b3JhZ2UgS2V5XG4gICAgICogQHBhcmFtIHthbnl9IHZhbHVlIFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzYXZlUHJlZmVyZW5jZShtb2R1bGU6IHN0cmluZywgc3RvcmFnZUtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJlZmVyZW5jZXMuc2V0VWkobW9kdWxlLCB0aGlzLmdldFByZWZlcmVuY2VLZXkoc3RvcmFnZUtleSksIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHVpIHVzZXIgcHJlZmVyZW5jZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBNb2R1bGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RvcmFnZUtleSBTdG9yYWdlIEtleVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7YW55fSBVc2VyIFByZWZlcmVuY2VcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZFByZWZlcmVuY2UobW9kdWxlOiBzdHJpbmcsIHN0b3JhZ2VLZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZlcmVuY2VzLmdldFVpKG1vZHVsZSwgdGhpcy5nZXRQcmVmZXJlbmNlS2V5KHN0b3JhZ2VLZXkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNhZmVVbnN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb25BcnJheTogU3Vic2NyaXB0aW9uW10pOiBTdWJzY3JpcHRpb25bXSB7XG4gICAgICAgIHN1YnNjcmlwdGlvbkFycmF5LmZvckVhY2goc3ViID0+IHtcbiAgICAgICAgICAgIGlmIChzdWIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN1YnNjcmlwdGlvbkFycmF5ID0gW107XG5cbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbkFycmF5O1xuICAgIH1cbn1cbiJdfQ==