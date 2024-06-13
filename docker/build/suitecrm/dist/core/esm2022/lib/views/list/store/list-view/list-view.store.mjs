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
import { isArray, isEmpty, union } from 'lodash-es';
import { deepClone, emptyObject, isTrue } from 'common';
import { BehaviorSubject, combineLatestWith } from 'rxjs';
import { distinctUntilChanged, map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationStore } from '../../../../store/navigation/navigation.store';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { LanguageStore } from '../../../../store/language/language.store';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { MessageService } from '../../../../services/message/message.service';
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { ViewStore } from '../../../../store/view/view.store';
import { LocalStorageService } from '../../../../services/local-storage/local-storage.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ColumnChooserComponent } from "../../../../components/columnchooser/columnchooser.component";
import { FilterListStoreFactory } from '../../../../store/saved-filters/filter-list.store.factory';
import { ConfirmationModalService } from '../../../../services/modals/confirmation-modal.service';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { ListViewUrlQueryService } from '../../services/list-view-url-query.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/app-state/app-state.store";
import * as i2 from "../../../../store/language/language.store";
import * as i3 from "../../../../store/navigation/navigation.store";
import * as i4 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i5 from "../../../../store/metadata/metadata.store.service";
import * as i6 from "../../../../services/local-storage/local-storage.service";
import * as i7 from "../../../../services/message/message.service";
import * as i8 from "../../../../store/record-list/record-list.store.factory";
import * as i9 from "@ng-bootstrap/ng-bootstrap";
import * as i10 from "../../../../store/saved-filters/filter-list.store.factory";
import * as i11 from "../../../../services/modals/confirmation-modal.service";
import * as i12 from "../../../../store/user-preference/user-preference.store";
import * as i13 from "@angular/router";
import * as i14 from "../../services/list-view-url-query.service";
const initialFilter = {
    key: 'default',
    module: 'saved-search',
    attributes: {
        contents: ''
    },
    criteria: {
        name: 'default',
        filters: {}
    }
};
const initialFilters = {
    'default': deepClone(initialFilter)
};
const initialState = {
    module: '',
    widgets: true,
    actionPanel: '',
    showSidebarWidgets: false,
    recordPanelConfig: {},
    activeFilters: deepClone(initialFilters),
    openFilter: deepClone(initialFilter)
};
class ListViewStore extends ViewStore {
    constructor(appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore, localStorage, message, listStoreFactory, modalService, filterListStoreFactory, confirmation, preferences, route, listViewUrlQueryService, localStorageService) {
        super(appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore);
        this.appStateStore = appStateStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.moduleNavigation = moduleNavigation;
        this.metadataStore = metadataStore;
        this.localStorage = localStorage;
        this.message = message;
        this.listStoreFactory = listStoreFactory;
        this.modalService = modalService;
        this.filterListStoreFactory = filterListStoreFactory;
        this.confirmation = confirmation;
        this.preferences = preferences;
        this.route = route;
        this.listViewUrlQueryService = listViewUrlQueryService;
        this.localStorageService = localStorageService;
        this.pageKey = 'listview';
        /** Internal Properties */
        this.cache$ = null;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.subs = [];
        this.recordList = this.listStoreFactory.create();
        this.columns$ = metadataStore.listViewColumns$;
        this.lineActions$ = metadataStore.listViewLineActions$;
        this.tableActions$ = metadataStore.listViewTableActions$;
        this.records$ = this.recordList.records$;
        this.criteria$ = this.recordList.criteria$;
        this.context$ = this.recordList.criteria$.pipe(map(() => this.getViewContext()));
        this.sort$ = this.recordList.sort$;
        this.pagination$ = this.recordList.pagination$;
        this.selection$ = this.recordList.selection$;
        this.selectedCount$ = this.recordList.selectedCount$;
        this.selectedStatus$ = this.recordList.selectedStatus$;
        this.loading$ = this.recordList.loading$;
        this.moduleName$ = this.state$.pipe(map(state => state.module), distinctUntilChanged());
        this.widgets$ = this.state$.pipe(map(state => state.widgets), distinctUntilChanged());
        this.showSidebarWidgets$ = this.state$.pipe(map(state => state.showSidebarWidgets));
        this.displayFilters$ = this.state$.pipe(map(state => state.actionPanel === 'filters'), distinctUntilChanged());
        this.actionPanel$ = this.state$.pipe(map(state => state.actionPanel), distinctUntilChanged());
        this.activeFilters$ = this.state$.pipe(map(state => state.activeFilters), distinctUntilChanged());
        this.openFilter$ = this.state$.pipe(map(state => state.openFilter), distinctUntilChanged());
        const data$ = this.records$.pipe(combineLatestWith(this.criteria$, this.pagination$, this.selection$, this.loading$), map(([records, criteria, pagination, selection, loading]) => {
            this.data = { records, criteria, pagination, selection, loading };
            return this.data;
        }));
        this.vm$ = data$.pipe(combineLatestWith(this.appData$, this.metadata$), map(([data, appData, metadata]) => {
            this.vm = { data, appData, metadata };
            return this.vm;
        }));
        this.columns = new BehaviorSubject([]);
        this.columns$ = this.columns.asObservable();
        this.initDataUpdateState();
        this.initDataSetUpdatedState();
        this.filterList = this.filterListStoreFactory.create();
        this.recordList.pageKey = this.pageKey;
    }
    get actionPanel() {
        return this.internalState.actionPanel;
    }
    get showFilters() {
        return this.internalState.actionPanel === 'filters';
    }
    set showFilters(show) {
        this.updateState({
            ...this.internalState,
            actionPanel: show ? 'filters' : ''
        });
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
    get recordPanelConfig() {
        return this.internalState.recordPanelConfig;
    }
    isRecordPanelOpen() {
        return this.internalState.actionPanel === 'recordPanel';
    }
    openRecordPanel(config) {
        this.updateState({
            ...this.internalState,
            actionPanel: 'recordPanel',
            recordPanelConfig: config
        });
    }
    closeRecordPanel() {
        this.updateState({
            ...this.internalState,
            actionPanel: '',
            recordPanelConfig: {}
        });
    }
    getModuleName() {
        return this.internalState.module;
    }
    getViewContext() {
        const context = {
            module: this.getModuleName(),
        };
        context.criteria = this.recordList.criteria;
        context.sort = this.recordList.sort;
        return context;
    }
    /**
     * Clean destroy
     */
    destroy() {
        this.clear();
        this.subs.forEach(sub => sub.unsubscribe());
    }
    /**
     * get active filters
     *
     * @returns {object} active filters
     */
    get activeFilters() {
        return deepClone(this.internalState.activeFilters);
    }
    /**
     * Clear observable cache
     */
    clear() {
        this.cache$ = null;
        this.updateState(deepClone(initialState));
        this.recordList.clear();
    }
    clearAuthBased() {
        this.clear();
        this.recordList.clearAuthBased();
    }
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @returns {object} Observable<any>
     */
    init(module) {
        this.internalState.module = module;
        this.recordList.init(module, false);
        this.filterList.init(module);
        this.filterList.load(false).pipe(take(1)).subscribe();
        this.calculateShowWidgets();
        this.recordList.sort = {
            orderBy: this?.metadata?.listView?.orderBy ?? '',
            sortOrder: this?.metadata?.listView?.sortOrder ?? 'NONE'
        };
        const queryParams = this.route?.snapshot?.queryParams ?? {};
        let filterType = '';
        if (isTrue(queryParams['query'])) {
            filterType = 'query';
        }
        switch (filterType) {
            case 'query':
                this.loadQueryFilter(module, queryParams);
                break;
            default:
                this.loadCurrentFilter(module);
                this.loadCurrentSort(module);
        }
        this.loadCurrentDisplayedColumns();
        this.loadCurrentPagination(module);
        return this.load();
    }
    /**
     * Set open filters
     *
     * @param {object} filter to set
     */
    setOpenFilter(filter) {
        this.updateState({ ...this.internalState, openFilter: deepClone(filter) });
    }
    /**
     * Toggle Quick filter
     *
     * @param filter
     * @param {boolean} reload flag
     */
    toggleQuickFilter(filter, reload = true) {
        let activeFilters = this.getActiveQuickFilters();
        const isActive = Object.keys(activeFilters).some(key => key === filter.key);
        if (isActive) {
            let { [filter.key]: removedFilters, ...newFilters } = activeFilters;
            activeFilters = newFilters;
        }
        else {
            activeFilters = {};
            activeFilters[filter.key] = filter;
        }
        if (emptyObject(activeFilters)) {
            this.resetFilters(reload);
            return;
        }
        if (Object.keys(activeFilters).length === 1) {
            this.setFilters(activeFilters);
            return;
        }
        this.updateState({
            ...this.internalState,
            activeFilters: deepClone(activeFilters),
        });
        this.updateSearchCriteria(reload);
    }
    /**
     * Set active filters
     *
     * @param {object} filters to set
     * @param {boolean} reload flag
     * @param sort
     */
    setFilters(filters, reload = true, sort = null) {
        const filterKey = Object.keys(filters).shift();
        const filter = filters[filterKey];
        this.updateState({ ...this.internalState, activeFilters: deepClone(filters), openFilter: deepClone(filter) });
        if (filter.criteria) {
            let orderBy = filter.criteria.orderBy ?? '';
            const sortOrder = filter.criteria.sortOrder ?? '';
            let direction = this.recordList.mapSortOrder(sortOrder);
            if (sort !== null) {
                orderBy = sort.orderBy;
                direction = sort.sortOrder;
            }
            this.recordList.updateSorting(orderBy, direction, false);
            this.updateSortLocalStorage();
        }
        this.updateSearchCriteria(reload);
    }
    /**
     * Update filters
     *
     * @param {object} filter to set
     */
    addSavedFilter(filter) {
        const newState = { ...this.internalState };
        const activeFilters = this.activeFilters;
        if (filter.key && activeFilters[filter.key]) {
            activeFilters[filter.key] = filter;
            newState.activeFilters = activeFilters;
        }
        newState.openFilter = filter;
        this.filterList.addFilter(filter);
        this.updateState(newState);
    }
    /**
     * Update filters
     *
     * @param {object} filter to set
     */
    removeSavedFilter(filter) {
        if (!filter || !filter.key) {
            return;
        }
        this.filterList.removeFilter(filter);
        const newState = { ...this.internalState };
        if (newState.openFilter && newState.openFilter.key === filter.key) {
            this.resetFilters(true);
        }
    }
    /**
     * Reset active filters
     *
     * @param {boolean} reload flag
     */
    resetFilters(reload = true) {
        this.updateState({
            ...this.internalState,
            activeFilters: deepClone(initialFilters),
            openFilter: deepClone(initialFilter),
        });
        this.recordList.clearSort();
        this.updateSortLocalStorage();
        this.updateSearchCriteria(reload);
    }
    /**
     * Update the search criteria
     *
     * @param {boolean} reload flag
     */
    updateSearchCriteria(reload = true) {
        const filters = { ...this.internalState.activeFilters };
        let criteria = this.mergeCriteria(filters);
        this.recordList.updateSearchCriteria(criteria, reload);
        this.updateFilterLocalStorage();
    }
    updateFilterLocalStorage() {
        const module = this.internalState.module;
        this.savePreference(module, 'current-filters', this.internalState.activeFilters);
    }
    updateSortLocalStorage() {
        const module = this.internalState.module;
        this.savePreference(module, 'current-sort', this.recordList.sort);
    }
    updatePaginationLocalStorage() {
        const module = this.internalState.module;
        const key = module + '-' + this.getPreferenceKey('current-pagination');
        this.localStorageService.set(key, this.recordList.pagination);
    }
    /**
     * Updated displayed columns' ui user preference
     * @param display
     */
    updateDisplayedColumnsPreference(display) {
        const module = this.internalState.module;
        this.savePreference(module, 'displayed-columns', display);
    }
    /**
     * Get displayed columns' ui user preference
     */
    getDisplayedColumnsPreference() {
        const module = this.internalState.module;
        const displayedColumns = this.loadPreference(module, 'displayed-columns');
        if (!isArray(displayedColumns) || !displayedColumns || !displayedColumns.length) {
            return null;
        }
        return displayedColumns;
    }
    triggerDataUpdate() {
        this.dataUpdateState.next(true);
    }
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<ListViewState>
     */
    load(useCache = true) {
        const module = this.internalState.module;
        this.savePreference(module, 'current-filters', this.internalState.activeFilters);
        this.savePreference(module, 'current-sort', this.recordList.sort);
        this.updatePaginationLocalStorage();
        return this.recordList.load(useCache);
    }
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(this.internalState = state);
    }
    /**
     * Get Active quick filters
     * @protected
     */
    getActiveQuickFilters() {
        let { 'default': defaultFilter, ...currentQuickFilters } = this.activeFilters;
        let activeFilters = {};
        Object.keys(currentQuickFilters).forEach(key => {
            const activeFilter = currentQuickFilters[key] ?? null;
            if (!key) {
                return;
            }
            const isQuickFilter = activeFilter?.attributes?.quick_filter ?? false;
            if (isQuickFilter) {
                activeFilters[key] = activeFilter;
            }
        });
        return activeFilters;
    }
    /**
     * Merge Criteria
     * @protected
     */
    mergeCriteria(filters) {
        let criteria = {};
        const keys = Object.keys(filters ?? {}) ?? [];
        keys.forEach(key => {
            const filter = filters[key] ?? null;
            const filterCriteria = filter?.criteria ?? null;
            const filterCriteriaKeys = Object.keys(filterCriteria?.filters ?? {});
            if (filterCriteria === null || (filterCriteriaKeys && !filterCriteriaKeys.length)) {
                return;
            }
            if (emptyObject(criteria)) {
                criteria = deepClone(filterCriteria);
                return;
            }
            filterCriteriaKeys.forEach(criteriaKey => {
                const filterCriteriaContent = filterCriteria?.filters[criteriaKey] ?? null;
                const criteriaContent = criteria?.filters[criteriaKey] ?? null;
                if (!filterCriteriaContent) {
                    return;
                }
                const criteriaOperator = criteriaContent?.operator ?? null;
                if (!criteriaContent || !criteriaOperator) {
                    criteria.filters[criteriaKey] = deepClone(filterCriteriaContent);
                    return;
                }
                const filterCriteriaOperator = filterCriteriaContent?.operator ?? null;
                if (filterCriteriaOperator !== criteriaOperator || filterCriteriaOperator !== '=') {
                    delete criteria.filters[criteriaKey];
                    return;
                }
                criteriaContent.values = union(criteriaContent.values ?? [], filterCriteriaContent.values ?? []);
            });
        });
        return criteria;
    }
    /**
     * Open columns chooser modal
     */
    openColumnChooserDialog() {
        const modalRef = this.modalService.open(ColumnChooserComponent, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'lg',
            windowClass: 'column-chooser-modal'
        });
        const displayedColumns = this.columns.getValue().filter(function (col) {
            return !col.hasOwnProperty('default')
                || (col.hasOwnProperty('default') && col.default === true);
        });
        const hiddenColumns = this.columns.getValue().filter(function (col) {
            return col.hasOwnProperty('default') && col.default === false;
        });
        modalRef.componentInstance.displayed = displayedColumns;
        modalRef.componentInstance.hidden = hiddenColumns;
        modalRef.result.then((result) => {
            if (!result.displayed || !result.hidden) {
                return;
            }
            let allColumns = [];
            const selectedDisplayColumns = result.displayed;
            const selectedHideColumns = result.hidden;
            selectedDisplayColumns.forEach(function (column) {
                column.default = true;
            });
            selectedHideColumns.forEach(function (column) {
                column.default = false;
            });
            allColumns.push(...selectedDisplayColumns, ...selectedHideColumns);
            this.columns.next(allColumns);
            const displayedCols = selectedDisplayColumns.map(col => col.name);
            this.updateDisplayedColumnsPreference(displayedCols);
        });
    }
    /**
     * Calculate if widgets are to display
     */
    calculateShowWidgets() {
        let show = false;
        const meta = this.metadataStore.get() || {};
        const listViewMeta = meta.listView || {};
        const sidebarWidgetsConfig = listViewMeta.sidebarWidgets || [];
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
     * Build ui user preference key
     * @param storageKey
     * @protected
     */
    getPreferenceKey(storageKey) {
        return this.pageKey + '-' + storageKey;
    }
    /**
     * Save ui user preference
     * @param module
     * @param storageKey
     * @param value
     * @protected
     */
    savePreference(module, storageKey, value) {
        this.preferences.setUi(module, this.getPreferenceKey(storageKey), value);
    }
    /**
     * Load ui user preference
     * @param module
     * @param storageKey
     * @protected
     */
    loadPreference(module, storageKey) {
        return this.preferences.getUi(module, this.getPreferenceKey(storageKey));
    }
    /**
     * Load current filter
     * @param module
     * @protected
     */
    loadCurrentFilter(module) {
        const activeFiltersPref = this.loadPreference(module, 'current-filters') ?? {};
        if (!activeFiltersPref || emptyObject(activeFiltersPref)) {
            return;
        }
        let currentSort = this.loadPreference(module, 'current-sort');
        if (!currentSort && emptyObject(currentSort)) {
            currentSort = null;
        }
        this.setFilters(activeFiltersPref, false, currentSort);
    }
    /**
     * Load current filter
     * @param module
     * @param queryParams
     * @protected
     */
    loadQueryFilter(module, queryParams) {
        const orderBy = queryParams['orderBy'] ?? '';
        const sortOrder = queryParams['sortOrder'] ?? '';
        const direction = this.recordList.mapSortOrder(sortOrder);
        const filter = this.listViewUrlQueryService.buildUrlQueryBasedFilter(module, this.internalState.activeFilters.default, queryParams);
        if (isEmpty(filter)) {
            return;
        }
        const filters = { 'default': filter };
        this.updateState({
            ...this.internalState,
            activeFilters: deepClone(filters),
            openFilter: deepClone(filter)
        });
        this.recordList.updateSorting(orderBy, direction, false);
        this.recordList.updateSearchCriteria(filter.criteria, false);
    }
    /**
     * Load current sorting
     * @param module
     * @protected
     */
    loadCurrentSort(module) {
        const currentSort = this.loadPreference(module, 'current-sort');
        if (!currentSort || emptyObject(currentSort)) {
            return;
        }
        this.recordList.sort = currentSort;
    }
    /**
     * Load current pagination
     * @param module
     * @protected
     */
    loadCurrentPagination(module) {
        const key = module + '-' + this.getPreferenceKey('current-pagination');
        const currentPagination = this.localStorageService.get(key);
        if (!currentPagination || emptyObject(currentPagination)) {
            return;
        }
        this.recordList.pagination = currentPagination;
    }
    /**
     * Load current displayed columns
     * @protected
     */
    loadCurrentDisplayedColumns() {
        this.metadataStore.listViewColumns$.pipe(take(1)).subscribe(cols => {
            const displayedColumns = this.getDisplayedColumnsPreference();
            if (!displayedColumns || !cols) {
                this.columns.next(cols);
                return;
            }
            const colMap = {};
            displayedColumns.forEach(displayedColumn => {
                colMap[displayedColumn] = true;
            });
            const displayedMap = {};
            const hidden = [];
            cols.forEach(col => {
                col.default = colMap[col.name] ?? false;
                if (col.default) {
                    displayedMap[col.name] = col;
                }
                else {
                    hidden.push(col);
                }
            });
            const displayed = displayedColumns.filter(col => !!displayedMap[col]).map(col => displayedMap[col]);
            this.columns.next([...displayed, ...hidden]);
        });
    }
    /**
     * Initialize data update state.
     * It should be emitted on any change in values on the record list.
     * Reload/Pagination is not considered as a data update
     */
    initDataUpdateState() {
        this.dataUpdateState = new BehaviorSubject(true);
        this.dataUpdate$ = this.dataUpdateState.asObservable();
    }
    /**
     *  Initialize the dataSet update state.
     *  It should be emitted on any change in dataSet e.g. due to data filter, due to data delete,
     *  due to data edit or any event which causes change in the resulting dataSet.
     */
    initDataSetUpdatedState() {
        this.dataSetUpdate$ = this.criteria$.pipe(combineLatestWith(this.dataUpdate$), map(() => true));
    }
    static { this.ɵfac = function ListViewStore_Factory(t) { return new (t || ListViewStore)(i0.ɵɵinject(i1.AppStateStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.NavigationStore), i0.ɵɵinject(i4.ModuleNavigation), i0.ɵɵinject(i5.MetadataStore), i0.ɵɵinject(i6.LocalStorageService), i0.ɵɵinject(i7.MessageService), i0.ɵɵinject(i8.RecordListStoreFactory), i0.ɵɵinject(i9.NgbModal), i0.ɵɵinject(i10.FilterListStoreFactory), i0.ɵɵinject(i11.ConfirmationModalService), i0.ɵɵinject(i12.UserPreferenceStore), i0.ɵɵinject(i13.ActivatedRoute), i0.ɵɵinject(i14.ListViewUrlQueryService), i0.ɵɵinject(i6.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewStore, factory: ListViewStore.ɵfac }); }
}
export { ListViewStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewStore, [{
        type: Injectable
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.LanguageStore }, { type: i3.NavigationStore }, { type: i4.ModuleNavigation }, { type: i5.MetadataStore }, { type: i6.LocalStorageService }, { type: i7.MessageService }, { type: i8.RecordListStoreFactory }, { type: i9.NgbModal }, { type: i10.FilterListStoreFactory }, { type: i11.ConfirmationModalService }, { type: i12.UserPreferenceStore }, { type: i13.ActivatedRoute }, { type: i14.ListViewUrlQueryService }, { type: i6.LocalStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3Qvc3RvcmUvbGlzdC12aWV3L2xpc3Qtdmlldy5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BELE9BQU8sRUFHSCxTQUFTLEVBQ1QsV0FBVyxFQVVYLE1BQU0sRUFDVCxNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUMsZUFBZSxFQUFFLGlCQUFpQixFQUEyQixNQUFNLE1BQU0sQ0FBQztBQUNsRixPQUFPLEVBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBTSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUU5RSxPQUFPLEVBQVcsYUFBYSxFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFFMUYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZFQUE2RSxDQUFDO0FBQzdHLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUM1RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUMvRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDMUUsT0FBTyxFQUFVLFNBQVMsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9B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QUM7WUFFcEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBR0Q7Ozs7T0FJRztJQUNPLG1CQUFtQjtRQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLHVCQUF1QjtRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNyQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQ25DLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDbEIsQ0FBQztJQUNOLENBQUM7OEVBenlCUSxhQUFhO3VFQUFiLGFBQWEsV0FBYixhQUFhOztTQUFiLGFBQWE7dUZBQWIsYUFBYTtjQUR6QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQgeyBpc0FycmF5LCBpc0VtcHR5LCB1bmlvbiB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQge1xuICAgIEFjdGlvbixcbiAgICBDb2x1bW5EZWZpbml0aW9uLFxuICAgIGRlZXBDbG9uZSxcbiAgICBlbXB0eU9iamVjdCxcbiAgICBMaXN0Vmlld01ldGEsXG4gICAgUGFnaW5hdGlvbixcbiAgICBSZWNvcmQsXG4gICAgUmVjb3JkU2VsZWN0aW9uLFxuICAgIFNlYXJjaENyaXRlcmlhLFxuICAgIFNlbGVjdGlvblN0YXR1cyxcbiAgICBTb3J0RGlyZWN0aW9uLFxuICAgIFNvcnRpbmdTZWxlY3Rpb24sXG4gICAgVmlld0NvbnRleHQsXG4gICAgaXNUcnVlXG59IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHRha2UsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtOYXZpZ2F0aW9uU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL25hdmlnYXRpb24vbmF2aWdhdGlvbi5zdG9yZSc7XG5pbXBvcnQge1JlY29yZExpc3QsIFJlY29yZExpc3RTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3Quc3RvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YSwgTWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge1N0YXRlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRMaXN0U3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQtbGlzdC9yZWNvcmQtbGlzdC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge0FwcERhdGEsIFZpZXdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvdmlldy92aWV3LnN0b3JlJztcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtOZ2JNb2RhbH0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXCI7XG5pbXBvcnQge0NvbHVtbkNob29zZXJDb21wb25lbnR9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvbHVtbmNob29zZXIvY29sdW1uY2hvb3Nlci5jb21wb25lbnRcIjtcbmltcG9ydCB7U2F2ZWRGaWx0ZXIsIFNhdmVkRmlsdGVyTWFwfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQge0ZpbHRlckxpc3RTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9maWx0ZXItbGlzdC5zdG9yZSc7XG5pbXBvcnQge0ZpbHRlckxpc3RTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3NhdmVkLWZpbHRlcnMvZmlsdGVyLWxpc3Quc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge0NvbmZpcm1hdGlvbk1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkUGFuZWxNZXRhZGF0YX0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9yZWNvcmQtcGFuZWwvc3RvcmUvcmVjb3JkLXBhbmVsL3JlY29yZC1wYW5lbC5zdG9yZS5tb2RlbCc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtMaXN0Vmlld1VybFF1ZXJ5U2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGlzdC12aWV3LXVybC1xdWVyeS5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBMaXN0Vmlld0RhdGEge1xuICAgIHJlY29yZHM6IFJlY29yZFtdO1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uO1xuICAgIGNyaXRlcmlhPzogU2VhcmNoQ3JpdGVyaWE7XG4gICAgc29ydD86IFNvcnRpbmdTZWxlY3Rpb247XG4gICAgc2VsZWN0aW9uPzogUmVjb3JkU2VsZWN0aW9uO1xuICAgIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdFZpZXdNb2RlbCB7XG4gICAgZGF0YTogTGlzdFZpZXdEYXRhO1xuICAgIGFwcERhdGE6IEFwcERhdGE7XG4gICAgbWV0YWRhdGE6IE1ldGFkYXRhO1xufVxuXG5jb25zdCBpbml0aWFsRmlsdGVyOiBTYXZlZEZpbHRlciA9IHtcbiAgICBrZXk6ICdkZWZhdWx0JyxcbiAgICBtb2R1bGU6ICdzYXZlZC1zZWFyY2gnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY29udGVudHM6ICcnXG4gICAgfSxcbiAgICBjcml0ZXJpYToge1xuICAgICAgICBuYW1lOiAnZGVmYXVsdCcsXG4gICAgICAgIGZpbHRlcnM6IHt9XG4gICAgfVxufTtcblxuY29uc3QgaW5pdGlhbEZpbHRlcnM6IFNhdmVkRmlsdGVyTWFwID0ge1xuICAgICdkZWZhdWx0JzogZGVlcENsb25lKGluaXRpYWxGaWx0ZXIpXG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IExpc3RWaWV3U3RhdGUgPSB7XG4gICAgbW9kdWxlOiAnJyxcbiAgICB3aWRnZXRzOiB0cnVlLFxuICAgIGFjdGlvblBhbmVsOiAnJyxcbiAgICBzaG93U2lkZWJhcldpZGdldHM6IGZhbHNlLFxuICAgIHJlY29yZFBhbmVsQ29uZmlnOiB7fSBhcyBSZWNvcmRQYW5lbE1ldGFkYXRhLFxuICAgIGFjdGl2ZUZpbHRlcnM6IGRlZXBDbG9uZShpbml0aWFsRmlsdGVycyksXG4gICAgb3BlbkZpbHRlcjogZGVlcENsb25lKGluaXRpYWxGaWx0ZXIpXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RWaWV3U3RhdGUge1xuICAgIG1vZHVsZTogc3RyaW5nO1xuICAgIHdpZGdldHM6IGJvb2xlYW47XG4gICAgYWN0aW9uUGFuZWw6IHN0cmluZztcbiAgICBzaG93U2lkZWJhcldpZGdldHM6IGJvb2xlYW47XG4gICAgcmVjb3JkUGFuZWxDb25maWc6IFJlY29yZFBhbmVsTWV0YWRhdGE7XG4gICAgYWN0aXZlRmlsdGVyczogU2F2ZWRGaWx0ZXJNYXA7XG4gICAgb3BlbkZpbHRlcjogU2F2ZWRGaWx0ZXI7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1N0b3JlIGV4dGVuZHMgVmlld1N0b3JlIGltcGxlbWVudHMgU3RhdGVTdG9yZSB7XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbG9uZy1saXZlZCBvYnNlcnZhYmxlIHN0cmVhbXNcbiAgICAgKi9cbiAgICBtb2R1bGVOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIGNvbHVtbnM6IEJlaGF2aW9yU3ViamVjdDxDb2x1bW5EZWZpbml0aW9uW10+O1xuICAgIGNvbHVtbnMkOiBPYnNlcnZhYmxlPENvbHVtbkRlZmluaXRpb25bXT47XG4gICAgbGluZUFjdGlvbnMkOiBPYnNlcnZhYmxlPEFjdGlvbltdPjtcbiAgICB0YWJsZUFjdGlvbnMkOiBPYnNlcnZhYmxlPEFjdGlvbltdPlxuICAgIHJlY29yZHMkOiBPYnNlcnZhYmxlPFJlY29yZFtdPjtcbiAgICBjcml0ZXJpYSQ6IE9ic2VydmFibGU8U2VhcmNoQ3JpdGVyaWE+O1xuICAgIGNvbnRleHQkOiBPYnNlcnZhYmxlPFZpZXdDb250ZXh0PjtcbiAgICBzb3J0JDogT2JzZXJ2YWJsZTxTb3J0aW5nU2VsZWN0aW9uPjtcbiAgICBwYWdpbmF0aW9uJDogT2JzZXJ2YWJsZTxQYWdpbmF0aW9uPjtcbiAgICBzZWxlY3Rpb24kOiBPYnNlcnZhYmxlPFJlY29yZFNlbGVjdGlvbj47XG4gICAgc2VsZWN0ZWRDb3VudCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBzZWxlY3RlZFN0YXR1cyQ6IE9ic2VydmFibGU8U2VsZWN0aW9uU3RhdHVzPjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICB3aWRnZXRzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBzaG93U2lkZWJhcldpZGdldHMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGRpc3BsYXlGaWx0ZXJzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBhY3Rpb25QYW5lbCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICByZWNvcmRMaXN0OiBSZWNvcmRMaXN0U3RvcmU7XG4gICAgZGF0YVVwZGF0ZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgZGF0YVNldFVwZGF0ZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgYWN0aXZlRmlsdGVycyQ6IE9ic2VydmFibGU8U2F2ZWRGaWx0ZXJNYXA+O1xuICAgIG9wZW5GaWx0ZXIkOiBPYnNlcnZhYmxlPFNhdmVkRmlsdGVyPjtcbiAgICBmaWx0ZXJMaXN0OiBGaWx0ZXJMaXN0U3RvcmU7XG4gICAgcGFnZUtleTogc3RyaW5nID0gJ2xpc3R2aWV3JztcblxuICAgIC8qKlxuICAgICAqIFZpZXctbW9kZWwgdGhhdCByZXNvbHZlcyBvbmNlIGFsbCB0aGUgZGF0YSBpcyByZWFkeSAob3IgdXBkYXRlZCkuXG4gICAgICovXG4gICAgdm0kOiBPYnNlcnZhYmxlPExpc3RWaWV3TW9kZWw+O1xuICAgIHZtOiBMaXN0Vmlld01vZGVsO1xuICAgIGRhdGE6IExpc3RWaWV3RGF0YTtcblxuICAgIC8qKiBJbnRlcm5hbCBQcm9wZXJ0aWVzICovXG4gICAgcHJvdGVjdGVkIGNhY2hlJDogT2JzZXJ2YWJsZTxhbnk+ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgaW50ZXJuYWxTdGF0ZTogTGlzdFZpZXdTdGF0ZSA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TGlzdFZpZXdTdGF0ZT4odGhpcy5pbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgZGF0YVVwZGF0ZVN0YXRlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvblN0b3JlOiBOYXZpZ2F0aW9uU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGFTdG9yZTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdFN0b3JlRmFjdG9yeTogUmVjb3JkTGlzdFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByb3RlY3RlZCBmaWx0ZXJMaXN0U3RvcmVGYWN0b3J5OiBGaWx0ZXJMaXN0U3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb25Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJvdGVjdGVkIGxpc3RWaWV3VXJsUXVlcnlTZXJ2aWNlOiBMaXN0Vmlld1VybFF1ZXJ5U2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2VcbiAgICApIHtcblxuICAgICAgICBzdXBlcihhcHBTdGF0ZVN0b3JlLCBsYW5ndWFnZVN0b3JlLCBuYXZpZ2F0aW9uU3RvcmUsIG1vZHVsZU5hdmlnYXRpb24sIG1ldGFkYXRhU3RvcmUpO1xuXG4gICAgICAgIHRoaXMucmVjb3JkTGlzdCA9IHRoaXMubGlzdFN0b3JlRmFjdG9yeS5jcmVhdGUoKTtcblxuICAgICAgICB0aGlzLmNvbHVtbnMkID0gbWV0YWRhdGFTdG9yZS5saXN0Vmlld0NvbHVtbnMkO1xuICAgICAgICB0aGlzLmxpbmVBY3Rpb25zJCA9IG1ldGFkYXRhU3RvcmUubGlzdFZpZXdMaW5lQWN0aW9ucyQ7XG4gICAgICAgIHRoaXMudGFibGVBY3Rpb25zJCA9IG1ldGFkYXRhU3RvcmUubGlzdFZpZXdUYWJsZUFjdGlvbnMkO1xuICAgICAgICB0aGlzLnJlY29yZHMkID0gdGhpcy5yZWNvcmRMaXN0LnJlY29yZHMkO1xuICAgICAgICB0aGlzLmNyaXRlcmlhJCA9IHRoaXMucmVjb3JkTGlzdC5jcml0ZXJpYSQ7XG4gICAgICAgIHRoaXMuY29udGV4dCQgPSB0aGlzLnJlY29yZExpc3QuY3JpdGVyaWEkLnBpcGUobWFwKCgpID0+IHRoaXMuZ2V0Vmlld0NvbnRleHQoKSkpO1xuICAgICAgICB0aGlzLnNvcnQkID0gdGhpcy5yZWNvcmRMaXN0LnNvcnQkO1xuICAgICAgICB0aGlzLnBhZ2luYXRpb24kID0gdGhpcy5yZWNvcmRMaXN0LnBhZ2luYXRpb24kO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbiQgPSB0aGlzLnJlY29yZExpc3Quc2VsZWN0aW9uJDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvdW50JCA9IHRoaXMucmVjb3JkTGlzdC5zZWxlY3RlZENvdW50JDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXR1cyQgPSB0aGlzLnJlY29yZExpc3Quc2VsZWN0ZWRTdGF0dXMkO1xuICAgICAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5yZWNvcmRMaXN0LmxvYWRpbmckO1xuICAgICAgICB0aGlzLm1vZHVsZU5hbWUkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubW9kdWxlKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMud2lkZ2V0cyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS53aWRnZXRzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuc2hvd1NpZGViYXJXaWRnZXRzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnNob3dTaWRlYmFyV2lkZ2V0cykpO1xuICAgICAgICB0aGlzLmRpc3BsYXlGaWx0ZXJzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmFjdGlvblBhbmVsID09PSAnZmlsdGVycycpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5hY3Rpb25QYW5lbCQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5hY3Rpb25QYW5lbCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmFjdGl2ZUZpbHRlcnMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuYWN0aXZlRmlsdGVycyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLm9wZW5GaWx0ZXIkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUub3BlbkZpbHRlciksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuXG4gICAgICAgIGNvbnN0IGRhdGEkID0gdGhpcy5yZWNvcmRzJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5jcml0ZXJpYSQsIHRoaXMucGFnaW5hdGlvbiQsIHRoaXMuc2VsZWN0aW9uJCwgdGhpcy5sb2FkaW5nJCksXG4gICAgICAgICAgICBtYXAoKFtyZWNvcmRzLCBjcml0ZXJpYSwgcGFnaW5hdGlvbiwgc2VsZWN0aW9uLCBsb2FkaW5nXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHtyZWNvcmRzLCBjcml0ZXJpYSwgcGFnaW5hdGlvbiwgc2VsZWN0aW9uLCBsb2FkaW5nfSBhcyBMaXN0Vmlld0RhdGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy52bSQgPSBkYXRhJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5hcHBEYXRhJCwgdGhpcy5tZXRhZGF0YSQpLFxuICAgICAgICAgICAgbWFwKChbZGF0YSwgYXBwRGF0YSwgbWV0YWRhdGFdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52bSA9IHtkYXRhLCBhcHBEYXRhLCBtZXRhZGF0YX0gYXMgTGlzdFZpZXdNb2RlbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52bTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5jb2x1bW5zID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDb2x1bW5EZWZpbml0aW9uW10+KFtdKTtcbiAgICAgICAgdGhpcy5jb2x1bW5zJCA9IHRoaXMuY29sdW1ucy5hc09ic2VydmFibGUoKTtcblxuICAgICAgICB0aGlzLmluaXREYXRhVXBkYXRlU3RhdGUoKTtcbiAgICAgICAgdGhpcy5pbml0RGF0YVNldFVwZGF0ZWRTdGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IHRoaXMuZmlsdGVyTGlzdFN0b3JlRmFjdG9yeS5jcmVhdGUoKTtcblxuICAgICAgICB0aGlzLnJlY29yZExpc3QucGFnZUtleSA9IHRoaXMucGFnZUtleTtcbiAgICB9XG5cbiAgICBnZXQgYWN0aW9uUGFuZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5hY3Rpb25QYW5lbDtcbiAgICB9XG5cbiAgICBnZXQgc2hvd0ZpbHRlcnMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUuYWN0aW9uUGFuZWwgPT09ICdmaWx0ZXJzJztcbiAgICB9XG5cbiAgICBzZXQgc2hvd0ZpbHRlcnMoc2hvdzogYm9vbGVhbikge1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgYWN0aW9uUGFuZWw6IHNob3cgPyAnZmlsdGVycycgOiAnJ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgd2lkZ2V0cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS53aWRnZXRzO1xuICAgIH1cblxuICAgIHNldCB3aWRnZXRzKHNob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICB3aWRnZXRzOiBzaG93XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBzaG93U2lkZWJhcldpZGdldHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUuc2hvd1NpZGViYXJXaWRnZXRzO1xuICAgIH1cblxuICAgIHNldCBzaG93U2lkZWJhcldpZGdldHMoc2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnNhdmVQcmVmZXJlbmNlKHRoaXMuZ2V0TW9kdWxlTmFtZSgpLCAnc2hvdy1zaWRlYmFyLXdpZGdldHMnLCBzaG93KTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBzaG93U2lkZWJhcldpZGdldHM6IHNob3dcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHJlY29yZFBhbmVsQ29uZmlnKCk6IFJlY29yZFBhbmVsTWV0YWRhdGEge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLnJlY29yZFBhbmVsQ29uZmlnO1xuICAgIH1cblxuICAgIGlzUmVjb3JkUGFuZWxPcGVuKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLmFjdGlvblBhbmVsID09PSAncmVjb3JkUGFuZWwnO1xuICAgIH1cblxuICAgIG9wZW5SZWNvcmRQYW5lbChjb25maWc6IFJlY29yZFBhbmVsTWV0YWRhdGEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBhY3Rpb25QYW5lbDogJ3JlY29yZFBhbmVsJyxcbiAgICAgICAgICAgIHJlY29yZFBhbmVsQ29uZmlnOiBjb25maWdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2VSZWNvcmRQYW5lbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBhY3Rpb25QYW5lbDogJycsXG4gICAgICAgICAgICByZWNvcmRQYW5lbENvbmZpZzoge30gYXMgUmVjb3JkUGFuZWxNZXRhZGF0YVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGdldE1vZHVsZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGU7XG4gICAgfVxuXG4gICAgZ2V0Vmlld0NvbnRleHQoKTogVmlld0NvbnRleHQge1xuXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMuZ2V0TW9kdWxlTmFtZSgpLFxuICAgICAgICB9IGFzIFZpZXdDb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQuY3JpdGVyaWEgPSB0aGlzLnJlY29yZExpc3QuY3JpdGVyaWE7XG4gICAgICAgIGNvbnRleHQuc29ydCA9IHRoaXMucmVjb3JkTGlzdC5zb3J0O1xuXG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFuIGRlc3Ryb3lcbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCBhY3RpdmUgZmlsdGVyc1xuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gYWN0aXZlIGZpbHRlcnNcbiAgICAgKi9cbiAgICBnZXQgYWN0aXZlRmlsdGVycygpOiBTYXZlZEZpbHRlck1hcCB7XG4gICAgICAgIHJldHVybiBkZWVwQ2xvbmUodGhpcy5pbnRlcm5hbFN0YXRlLmFjdGl2ZUZpbHRlcnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIG9ic2VydmFibGUgY2FjaGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FjaGUkID0gbnVsbDtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKSk7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5jbGVhcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnJlY29yZExpc3QuY2xlYXJBdXRoQmFzZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIGxpc3QgcmVjb3JkcyBsb2FkIGlmIG5vdCBjYWNoZWQgYW5kIHVwZGF0ZSBzdGF0ZS5cbiAgICAgKiBSZXR1cm5zIG9ic2VydmFibGUgdG8gYmUgdXNlZCBpbiByZXNvbHZlciBpZiBuZWVkZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgdG8gdXNlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHVibGljIGluaXQobW9kdWxlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlY29yZExpc3Q+IHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LmluaXQobW9kdWxlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdC5pbml0KG1vZHVsZSk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0LmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTaG93V2lkZ2V0cygpO1xuXG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5zb3J0ID0ge1xuICAgICAgICAgICAgb3JkZXJCeTogdGhpcz8ubWV0YWRhdGE/Lmxpc3RWaWV3Py5vcmRlckJ5ID8/ICcnLFxuICAgICAgICAgICAgc29ydE9yZGVyOiB0aGlzPy5tZXRhZGF0YT8ubGlzdFZpZXc/LnNvcnRPcmRlciA/PyAnTk9ORScgYXMgU29ydERpcmVjdGlvblxuICAgICAgICB9IGFzIFNvcnRpbmdTZWxlY3Rpb247XG5cbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB0aGlzLnJvdXRlPy5zbmFwc2hvdD8ucXVlcnlQYXJhbXMgPz8ge307XG4gICAgICAgIGxldCBmaWx0ZXJUeXBlID0gJyc7XG4gICAgICAgIGlmIChpc1RydWUocXVlcnlQYXJhbXNbJ3F1ZXJ5J10pKSB7XG4gICAgICAgICAgICBmaWx0ZXJUeXBlID0gJ3F1ZXJ5JztcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGZpbHRlclR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3F1ZXJ5JzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRRdWVyeUZpbHRlcihtb2R1bGUsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRDdXJyZW50RmlsdGVyKG1vZHVsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ3VycmVudFNvcnQobW9kdWxlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRDdXJyZW50RGlzcGxheWVkQ29sdW1ucygpO1xuICAgICAgICB0aGlzLmxvYWRDdXJyZW50UGFnaW5hdGlvbihtb2R1bGUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgb3BlbiBmaWx0ZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmlsdGVyIHRvIHNldFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRPcGVuRmlsdGVyKGZpbHRlcjogU2F2ZWRGaWx0ZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4udGhpcy5pbnRlcm5hbFN0YXRlLCBvcGVuRmlsdGVyOiBkZWVwQ2xvbmUoZmlsdGVyKX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBRdWljayBmaWx0ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmaWx0ZXJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCBmbGFnXG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZVF1aWNrRmlsdGVyKGZpbHRlcjogU2F2ZWRGaWx0ZXIsIHJlbG9hZCA9IHRydWUpOiB2b2lkIHtcbiAgICAgICAgbGV0IGFjdGl2ZUZpbHRlcnMgPSB0aGlzLmdldEFjdGl2ZVF1aWNrRmlsdGVycygpO1xuXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gT2JqZWN0LmtleXMoYWN0aXZlRmlsdGVycykuc29tZShrZXkgPT4ga2V5ID09PSBmaWx0ZXIua2V5KTtcblxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGxldCB7W2ZpbHRlci5rZXldOiByZW1vdmVkRmlsdGVycywgLi4ubmV3RmlsdGVyc30gPSBhY3RpdmVGaWx0ZXJzO1xuICAgICAgICAgICAgYWN0aXZlRmlsdGVycyA9IG5ld0ZpbHRlcnM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXJzID0ge307XG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXJzW2ZpbHRlci5rZXldID0gZmlsdGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVtcHR5T2JqZWN0KGFjdGl2ZUZpbHRlcnMpKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0RmlsdGVycyhyZWxvYWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGFjdGl2ZUZpbHRlcnMpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zZXRGaWx0ZXJzKGFjdGl2ZUZpbHRlcnMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXJzOiBkZWVwQ2xvbmUoYWN0aXZlRmlsdGVycyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU2VhcmNoQ3JpdGVyaWEocmVsb2FkKVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2V0IGFjdGl2ZSBmaWx0ZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmlsdGVycyB0byBzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCBmbGFnXG4gICAgICogQHBhcmFtIHNvcnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0RmlsdGVycyhmaWx0ZXJzOiBTYXZlZEZpbHRlck1hcCwgcmVsb2FkID0gdHJ1ZSwgc29ydDogU29ydGluZ1NlbGVjdGlvbiA9IG51bGwpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBmaWx0ZXJLZXkgPSBPYmplY3Qua2V5cyhmaWx0ZXJzKS5zaGlmdCgpO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBmaWx0ZXJzW2ZpbHRlcktleV07XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4udGhpcy5pbnRlcm5hbFN0YXRlLCBhY3RpdmVGaWx0ZXJzOiBkZWVwQ2xvbmUoZmlsdGVycyksIG9wZW5GaWx0ZXI6IGRlZXBDbG9uZShmaWx0ZXIpfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlci5jcml0ZXJpYSkge1xuICAgICAgICAgICAgbGV0IG9yZGVyQnkgPSBmaWx0ZXIuY3JpdGVyaWEub3JkZXJCeSA/PyAnJztcbiAgICAgICAgICAgIGNvbnN0IHNvcnRPcmRlciA9IGZpbHRlci5jcml0ZXJpYS5zb3J0T3JkZXIgPz8gJyc7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5yZWNvcmRMaXN0Lm1hcFNvcnRPcmRlcihzb3J0T3JkZXIpO1xuXG4gICAgICAgICAgICBpZiAoc29ydCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9yZGVyQnkgPSBzb3J0Lm9yZGVyQnk7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gc29ydC5zb3J0T3JkZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVjb3JkTGlzdC51cGRhdGVTb3J0aW5nKG9yZGVyQnksIGRpcmVjdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0TG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVNlYXJjaENyaXRlcmlhKHJlbG9hZClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgZmlsdGVyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpbHRlciB0byBzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkU2F2ZWRGaWx0ZXIoZmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gey4uLnRoaXMuaW50ZXJuYWxTdGF0ZX07XG4gICAgICAgIGNvbnN0IGFjdGl2ZUZpbHRlcnMgPSB0aGlzLmFjdGl2ZUZpbHRlcnM7XG5cbiAgICAgICAgaWYgKGZpbHRlci5rZXkgJiYgYWN0aXZlRmlsdGVyc1tmaWx0ZXIua2V5XSkge1xuICAgICAgICAgICAgYWN0aXZlRmlsdGVyc1tmaWx0ZXIua2V5XSA9IGZpbHRlcjtcbiAgICAgICAgICAgIG5ld1N0YXRlLmFjdGl2ZUZpbHRlcnMgPSBhY3RpdmVGaWx0ZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3U3RhdGUub3BlbkZpbHRlciA9IGZpbHRlcjtcblxuICAgICAgICB0aGlzLmZpbHRlckxpc3QuYWRkRmlsdGVyKGZpbHRlcik7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGZpbHRlcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWx0ZXIgdG8gc2V0XG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZVNhdmVkRmlsdGVyKGZpbHRlcjogU2F2ZWRGaWx0ZXIpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIWZpbHRlciB8fCAhZmlsdGVyLmtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0LnJlbW92ZUZpbHRlcihmaWx0ZXIpO1xuXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gey4uLnRoaXMuaW50ZXJuYWxTdGF0ZX07XG5cbiAgICAgICAgaWYgKG5ld1N0YXRlLm9wZW5GaWx0ZXIgJiYgbmV3U3RhdGUub3BlbkZpbHRlci5rZXkgPT09IGZpbHRlci5rZXkpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGaWx0ZXJzKHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBhY3RpdmUgZmlsdGVyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZWxvYWQgZmxhZ1xuICAgICAqL1xuICAgIHB1YmxpYyByZXNldEZpbHRlcnMocmVsb2FkID0gdHJ1ZSk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgYWN0aXZlRmlsdGVyczogZGVlcENsb25lKGluaXRpYWxGaWx0ZXJzKSxcbiAgICAgICAgICAgIG9wZW5GaWx0ZXI6IGRlZXBDbG9uZShpbml0aWFsRmlsdGVyKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LmNsZWFyU29ydCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNvcnRMb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVNlYXJjaENyaXRlcmlhKHJlbG9hZClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHNlYXJjaCBjcml0ZXJpYVxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZWxvYWQgZmxhZ1xuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVTZWFyY2hDcml0ZXJpYShyZWxvYWQgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB7Li4udGhpcy5pbnRlcm5hbFN0YXRlLmFjdGl2ZUZpbHRlcnN9O1xuICAgICAgICBsZXQgY3JpdGVyaWEgPSB0aGlzLm1lcmdlQ3JpdGVyaWEoZmlsdGVycyk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LnVwZGF0ZVNlYXJjaENyaXRlcmlhKGNyaXRlcmlhLCByZWxvYWQpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlckxvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVGaWx0ZXJMb2NhbFN0b3JhZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGU7XG5cbiAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LWZpbHRlcnMnLCB0aGlzLmludGVybmFsU3RhdGUuYWN0aXZlRmlsdGVycyk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVNvcnRMb2NhbFN0b3JhZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGU7XG5cbiAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LXNvcnQnLCB0aGlzLnJlY29yZExpc3Quc29ydCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVBhZ2luYXRpb25Mb2NhbFN0b3JhZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGU7XG4gICAgICAgIGNvbnN0IGtleSA9IG1vZHVsZSArICctJyArIHRoaXMuZ2V0UHJlZmVyZW5jZUtleSgnY3VycmVudC1wYWdpbmF0aW9uJyk7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoa2V5LCB0aGlzLnJlY29yZExpc3QucGFnaW5hdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlZCBkaXNwbGF5ZWQgY29sdW1ucycgdWkgdXNlciBwcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIGRpc3BsYXlcbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlRGlzcGxheWVkQ29sdW1uc1ByZWZlcmVuY2UoZGlzcGxheTogc3RyaW5nW10pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZTtcbiAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZShtb2R1bGUsICdkaXNwbGF5ZWQtY29sdW1ucycsIGRpc3BsYXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBkaXNwbGF5ZWQgY29sdW1ucycgdWkgdXNlciBwcmVmZXJlbmNlXG4gICAgICovXG4gICAgcHVibGljIGdldERpc3BsYXllZENvbHVtbnNQcmVmZXJlbmNlKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZTtcbiAgICAgICAgY29uc3QgZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMubG9hZFByZWZlcmVuY2UobW9kdWxlLCAnZGlzcGxheWVkLWNvbHVtbnMnKTtcblxuICAgICAgICBpZiAoIWlzQXJyYXkoZGlzcGxheWVkQ29sdW1ucykgfHwgIWRpc3BsYXllZENvbHVtbnMgfHwgIWRpc3BsYXllZENvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoZGlzcGxheWVkQ29sdW1ucyBhcyBzdHJpbmdbXSk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgdHJpZ2dlckRhdGFVcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YVVwZGF0ZVN0YXRlLm5leHQodHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCAvIHJlbG9hZCByZWNvcmRzIHVzaW5nIGN1cnJlbnQgcGFnaW5hdGlvbiBhbmQgY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxMaXN0Vmlld1N0YXRlPlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8UmVjb3JkTGlzdD4ge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlO1xuXG4gICAgICAgIHRoaXMuc2F2ZVByZWZlcmVuY2UobW9kdWxlLCAnY3VycmVudC1maWx0ZXJzJywgdGhpcy5pbnRlcm5hbFN0YXRlLmFjdGl2ZUZpbHRlcnMpO1xuICAgICAgICB0aGlzLnNhdmVQcmVmZXJlbmNlKG1vZHVsZSwgJ2N1cnJlbnQtc29ydCcsIHRoaXMucmVjb3JkTGlzdC5zb3J0KTtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uTG9jYWxTdG9yYWdlKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkTGlzdC5sb2FkKHVzZUNhY2hlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IExpc3RWaWV3U3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5uZXh0KHRoaXMuaW50ZXJuYWxTdGF0ZSA9IHN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgQWN0aXZlIHF1aWNrIGZpbHRlcnNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEFjdGl2ZVF1aWNrRmlsdGVycygpOiBTYXZlZEZpbHRlck1hcCB7XG4gICAgICAgIGxldCB7J2RlZmF1bHQnOiBkZWZhdWx0RmlsdGVyLCAuLi5jdXJyZW50UXVpY2tGaWx0ZXJzfSA9IHRoaXMuYWN0aXZlRmlsdGVycztcbiAgICAgICAgbGV0IGFjdGl2ZUZpbHRlcnMgPSB7fSBhcyBTYXZlZEZpbHRlck1hcDtcblxuICAgICAgICBPYmplY3Qua2V5cyhjdXJyZW50UXVpY2tGaWx0ZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVGaWx0ZXIgPSBjdXJyZW50UXVpY2tGaWx0ZXJzW2tleV0gPz8gbnVsbDtcbiAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpc1F1aWNrRmlsdGVyID0gYWN0aXZlRmlsdGVyPy5hdHRyaWJ1dGVzPy5xdWlja19maWx0ZXIgPz8gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChpc1F1aWNrRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlRmlsdGVyc1trZXldID0gYWN0aXZlRmlsdGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUZpbHRlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVyZ2UgQ3JpdGVyaWFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1lcmdlQ3JpdGVyaWEoZmlsdGVyczogU2F2ZWRGaWx0ZXJNYXApOiBTZWFyY2hDcml0ZXJpYSB7XG5cbiAgICAgICAgbGV0IGNyaXRlcmlhID0ge30gYXMgU2VhcmNoQ3JpdGVyaWE7XG5cbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZpbHRlcnMgPz8ge30pID8/IFtdO1xuXG4gICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyc1trZXldID8/IG51bGw7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJDcml0ZXJpYSA9IGZpbHRlcj8uY3JpdGVyaWEgPz8gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlckNyaXRlcmlhS2V5cyA9IE9iamVjdC5rZXlzKGZpbHRlckNyaXRlcmlhPy5maWx0ZXJzID8/IHt9KTtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJDcml0ZXJpYSA9PT0gbnVsbCB8fCAoZmlsdGVyQ3JpdGVyaWFLZXlzICYmICFmaWx0ZXJDcml0ZXJpYUtleXMubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVtcHR5T2JqZWN0KGNyaXRlcmlhKSkge1xuICAgICAgICAgICAgICAgIGNyaXRlcmlhID0gZGVlcENsb25lKGZpbHRlckNyaXRlcmlhKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpbHRlckNyaXRlcmlhS2V5cy5mb3JFYWNoKGNyaXRlcmlhS2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJDcml0ZXJpYUNvbnRlbnQgPSBmaWx0ZXJDcml0ZXJpYT8uZmlsdGVyc1tjcml0ZXJpYUtleV0gPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zdCBjcml0ZXJpYUNvbnRlbnQgPSBjcml0ZXJpYT8uZmlsdGVyc1tjcml0ZXJpYUtleV0gPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWZpbHRlckNyaXRlcmlhQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY3JpdGVyaWFPcGVyYXRvciA9IGNyaXRlcmlhQ29udGVudD8ub3BlcmF0b3IgPz8gbnVsbFxuXG4gICAgICAgICAgICAgICAgaWYgKCFjcml0ZXJpYUNvbnRlbnQgfHwgIWNyaXRlcmlhT3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JpdGVyaWEuZmlsdGVyc1tjcml0ZXJpYUtleV0gPSBkZWVwQ2xvbmUoZmlsdGVyQ3JpdGVyaWFDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlckNyaXRlcmlhT3BlcmF0b3IgPSBmaWx0ZXJDcml0ZXJpYUNvbnRlbnQ/Lm9wZXJhdG9yID8/IG51bGxcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyQ3JpdGVyaWFPcGVyYXRvciAhPT0gY3JpdGVyaWFPcGVyYXRvciB8fCBmaWx0ZXJDcml0ZXJpYU9wZXJhdG9yICE9PSAnPScpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNyaXRlcmlhLmZpbHRlcnNbY3JpdGVyaWFLZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3JpdGVyaWFDb250ZW50LnZhbHVlcyA9IHVuaW9uKGNyaXRlcmlhQ29udGVudC52YWx1ZXMgPz8gW10sIGZpbHRlckNyaXRlcmlhQ29udGVudC52YWx1ZXMgPz8gW10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjcml0ZXJpYTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVuIGNvbHVtbnMgY2hvb3NlciBtb2RhbFxuICAgICAqL1xuICAgIG9wZW5Db2x1bW5DaG9vc2VyRGlhbG9nKCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb2x1bW5DaG9vc2VyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBhcmlhTGFiZWxsZWRCeTogJ21vZGFsLWJhc2ljLXRpdGxlJyxcbiAgICAgICAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnY29sdW1uLWNob29zZXItbW9kYWwnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXllZENvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZ2V0VmFsdWUoKS5maWx0ZXIoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgICAgcmV0dXJuICFjb2wuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKVxuICAgICAgICAgICAgICAgIHx8IChjb2wuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSAmJiBjb2wuZGVmYXVsdCA9PT0gdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGhpZGRlbkNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZ2V0VmFsdWUoKS5maWx0ZXIoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpICYmIGNvbC5kZWZhdWx0ID09PSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UuZGlzcGxheWVkID0gZGlzcGxheWVkQ29sdW1ucztcbiAgICAgICAgbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UuaGlkZGVuID0gaGlkZGVuQ29sdW1ucztcblxuICAgICAgICBtb2RhbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5kaXNwbGF5ZWQgfHwgIXJlc3VsdC5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBhbGxDb2x1bW5zOiBDb2x1bW5EZWZpbml0aW9uW10gPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGlzcGxheUNvbHVtbnM6IENvbHVtbkRlZmluaXRpb25bXSA9IHJlc3VsdC5kaXNwbGF5ZWQ7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZEhpZGVDb2x1bW5zOiBDb2x1bW5EZWZpbml0aW9uW10gPSByZXN1bHQuaGlkZGVuO1xuXG4gICAgICAgICAgICBzZWxlY3RlZERpc3BsYXlDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5kZWZhdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZWN0ZWRIaWRlQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uZGVmYXVsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhbGxDb2x1bW5zLnB1c2goLi4uc2VsZWN0ZWREaXNwbGF5Q29sdW1ucywgLi4uc2VsZWN0ZWRIaWRlQ29sdW1ucyk7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMubmV4dChhbGxDb2x1bW5zKTtcblxuICAgICAgICAgICAgY29uc3QgZGlzcGxheWVkQ29scyA9IHNlbGVjdGVkRGlzcGxheUNvbHVtbnMubWFwKGNvbCA9PiBjb2wubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXllZENvbHVtbnNQcmVmZXJlbmNlKGRpc3BsYXllZENvbHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgaWYgd2lkZ2V0cyBhcmUgdG8gZGlzcGxheVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjYWxjdWxhdGVTaG93V2lkZ2V0cygpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNob3cgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhID0gdGhpcy5tZXRhZGF0YVN0b3JlLmdldCgpIHx8IHt9O1xuICAgICAgICBjb25zdCBsaXN0Vmlld01ldGEgPSBtZXRhLmxpc3RWaWV3IHx8IHt9IGFzIExpc3RWaWV3TWV0YTtcbiAgICAgICAgY29uc3Qgc2lkZWJhcldpZGdldHNDb25maWcgPSBsaXN0Vmlld01ldGEuc2lkZWJhcldpZGdldHMgfHwgW107XG5cbiAgICAgICAgaWYgKHNpZGViYXJXaWRnZXRzQ29uZmlnICYmIHNpZGViYXJXaWRnZXRzQ29uZmlnLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNob3cgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hvd1NpZGViYXJXaWRnZXRzID0gdGhpcy5sb2FkUHJlZmVyZW5jZSh0aGlzLmdldE1vZHVsZU5hbWUoKSwgJ3Nob3ctc2lkZWJhci13aWRnZXRzJykgPz8gbnVsbDtcblxuICAgICAgICBpZiAoc2hvd1NpZGViYXJXaWRnZXRzICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTaWRlYmFyV2lkZ2V0cyA9IHNob3dTaWRlYmFyV2lkZ2V0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NpZGViYXJXaWRnZXRzID0gc2hvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IHNob3c7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgdWkgdXNlciBwcmVmZXJlbmNlIGtleVxuICAgICAqIEBwYXJhbSBzdG9yYWdlS2V5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRQcmVmZXJlbmNlS2V5KHN0b3JhZ2VLZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VLZXkgKyAnLScgKyBzdG9yYWdlS2V5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgdWkgdXNlciBwcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSBzdG9yYWdlS2V5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzYXZlUHJlZmVyZW5jZShtb2R1bGU6IHN0cmluZywgc3RvcmFnZUtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJlZmVyZW5jZXMuc2V0VWkobW9kdWxlLCB0aGlzLmdldFByZWZlcmVuY2VLZXkoc3RvcmFnZUtleSksIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHVpIHVzZXIgcHJlZmVyZW5jZVxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKiBAcGFyYW0gc3RvcmFnZUtleVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZFByZWZlcmVuY2UobW9kdWxlOiBzdHJpbmcsIHN0b3JhZ2VLZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZlcmVuY2VzLmdldFVpKG1vZHVsZSwgdGhpcy5nZXRQcmVmZXJlbmNlS2V5KHN0b3JhZ2VLZXkpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGN1cnJlbnQgZmlsdGVyXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZEN1cnJlbnRGaWx0ZXIobW9kdWxlOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBhY3RpdmVGaWx0ZXJzUHJlZiA9IHRoaXMubG9hZFByZWZlcmVuY2UobW9kdWxlLCAnY3VycmVudC1maWx0ZXJzJykgPz8ge30gYXMgU2F2ZWRGaWx0ZXJNYXA7XG4gICAgICAgIGlmICghYWN0aXZlRmlsdGVyc1ByZWYgfHwgZW1wdHlPYmplY3QoYWN0aXZlRmlsdGVyc1ByZWYpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3VycmVudFNvcnQgPSB0aGlzLmxvYWRQcmVmZXJlbmNlKG1vZHVsZSwgJ2N1cnJlbnQtc29ydCcpIGFzIFNvcnRpbmdTZWxlY3Rpb247XG4gICAgICAgIGlmICghY3VycmVudFNvcnQgJiYgZW1wdHlPYmplY3QoY3VycmVudFNvcnQpKSB7XG4gICAgICAgICAgICBjdXJyZW50U29ydCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldEZpbHRlcnMoYWN0aXZlRmlsdGVyc1ByZWYsIGZhbHNlLCBjdXJyZW50U29ydCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBjdXJyZW50IGZpbHRlclxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKiBAcGFyYW0gcXVlcnlQYXJhbXNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGxvYWRRdWVyeUZpbHRlciAoXG4gICAgICAgIG1vZHVsZTpzdHJpbmcsXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiBQYXJhbXNcbiAgICApOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb3JkZXJCeTogc3RyaW5nID0gcXVlcnlQYXJhbXNbJ29yZGVyQnknXSA/PyAnJztcbiAgICAgICAgY29uc3Qgc29ydE9yZGVyOiBzdHJpbmcgPSBxdWVyeVBhcmFtc1snc29ydE9yZGVyJ10gPz8gJyc7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMucmVjb3JkTGlzdC5tYXBTb3J0T3JkZXIoc29ydE9yZGVyKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmxpc3RWaWV3VXJsUXVlcnlTZXJ2aWNlLmJ1aWxkVXJsUXVlcnlCYXNlZEZpbHRlcihcbiAgICAgICAgICAgIG1vZHVsZSxcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5hY3RpdmVGaWx0ZXJzLmRlZmF1bHQsXG4gICAgICAgICAgICBxdWVyeVBhcmFtc1xuICAgICAgICApO1xuICAgICAgICBpZiAoaXNFbXB0eShmaWx0ZXIpKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB7ICdkZWZhdWx0JzogZmlsdGVyIH07XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXJzOiBkZWVwQ2xvbmUoZmlsdGVycyksXG4gICAgICAgICAgICBvcGVuRmlsdGVyOiBkZWVwQ2xvbmUoZmlsdGVyKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlY29yZExpc3QudXBkYXRlU29ydGluZyhvcmRlckJ5LCBkaXJlY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LnVwZGF0ZVNlYXJjaENyaXRlcmlhKGZpbHRlci5jcml0ZXJpYSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgY3VycmVudCBzb3J0aW5nXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZEN1cnJlbnRTb3J0KG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTb3J0ID0gdGhpcy5sb2FkUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LXNvcnQnKTtcbiAgICAgICAgaWYgKCFjdXJyZW50U29ydCB8fCBlbXB0eU9iamVjdChjdXJyZW50U29ydCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5zb3J0ID0gY3VycmVudFNvcnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBjdXJyZW50IHBhZ2luYXRpb25cbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBsb2FkQ3VycmVudFBhZ2luYXRpb24obW9kdWxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5ID0gbW9kdWxlICsgJy0nICsgdGhpcy5nZXRQcmVmZXJlbmNlS2V5KCdjdXJyZW50LXBhZ2luYXRpb24nKTtcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2luYXRpb24gPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KGtleSkgYXMgUGFnaW5hdGlvbjtcbiAgICAgICAgaWYgKCFjdXJyZW50UGFnaW5hdGlvbiB8fCBlbXB0eU9iamVjdChjdXJyZW50UGFnaW5hdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5wYWdpbmF0aW9uID0gY3VycmVudFBhZ2luYXRpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBjdXJyZW50IGRpc3BsYXllZCBjb2x1bW5zXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBsb2FkQ3VycmVudERpc3BsYXllZENvbHVtbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWV0YWRhdGFTdG9yZS5saXN0Vmlld0NvbHVtbnMkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGNvbHMgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMuZ2V0RGlzcGxheWVkQ29sdW1uc1ByZWZlcmVuY2UoKTtcblxuICAgICAgICAgICAgaWYgKCFkaXNwbGF5ZWRDb2x1bW5zIHx8ICFjb2xzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zLm5leHQoY29scyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjb2xNYXAgPSB7fSBhcyB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcbiAgICAgICAgICAgIGRpc3BsYXllZENvbHVtbnMuZm9yRWFjaChkaXNwbGF5ZWRDb2x1bW4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbE1hcFtkaXNwbGF5ZWRDb2x1bW5dID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXllZE1hcCA9IHt9IGFzIHsgW2tleTogc3RyaW5nXTogQ29sdW1uRGVmaW5pdGlvbiB9O1xuXG4gICAgICAgICAgICBjb25zdCBoaWRkZW4gPSBbXSBhcyBDb2x1bW5EZWZpbml0aW9uW107XG4gICAgICAgICAgICBjb2xzLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgICAgICAgICBjb2wuZGVmYXVsdCA9IGNvbE1hcFtjb2wubmFtZV0gPz8gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNvbC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZE1hcFtjb2wubmFtZV0gPSBjb2w7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuLnB1c2goY29sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGlzcGxheWVkID0gZGlzcGxheWVkQ29sdW1ucy5maWx0ZXIoY29sID0+ICEhZGlzcGxheWVkTWFwW2NvbF0pLm1hcChjb2wgPT4gZGlzcGxheWVkTWFwW2NvbF0pO1xuXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMubmV4dChbLi4uZGlzcGxheWVkLCAuLi5oaWRkZW5dKTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgZGF0YSB1cGRhdGUgc3RhdGUuXG4gICAgICogSXQgc2hvdWxkIGJlIGVtaXR0ZWQgb24gYW55IGNoYW5nZSBpbiB2YWx1ZXMgb24gdGhlIHJlY29yZCBsaXN0LlxuICAgICAqIFJlbG9hZC9QYWdpbmF0aW9uIGlzIG5vdCBjb25zaWRlcmVkIGFzIGEgZGF0YSB1cGRhdGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdERhdGFVcGRhdGVTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhVXBkYXRlU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuICAgICAgICB0aGlzLmRhdGFVcGRhdGUkID0gdGhpcy5kYXRhVXBkYXRlU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIEluaXRpYWxpemUgdGhlIGRhdGFTZXQgdXBkYXRlIHN0YXRlLlxuICAgICAqICBJdCBzaG91bGQgYmUgZW1pdHRlZCBvbiBhbnkgY2hhbmdlIGluIGRhdGFTZXQgZS5nLiBkdWUgdG8gZGF0YSBmaWx0ZXIsIGR1ZSB0byBkYXRhIGRlbGV0ZSxcbiAgICAgKiAgZHVlIHRvIGRhdGEgZWRpdCBvciBhbnkgZXZlbnQgd2hpY2ggY2F1c2VzIGNoYW5nZSBpbiB0aGUgcmVzdWx0aW5nIGRhdGFTZXQuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXREYXRhU2V0VXBkYXRlZFN0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRhdGFTZXRVcGRhdGUkID0gdGhpcy5jcml0ZXJpYSQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMuZGF0YVVwZGF0ZSQpLFxuICAgICAgICAgICAgbWFwKCgpID0+IHRydWUpXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19