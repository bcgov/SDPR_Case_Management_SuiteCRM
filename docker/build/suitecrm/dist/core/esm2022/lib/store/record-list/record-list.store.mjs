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
import { deepClone, emptyObject, PageSelection, SelectionStatus, SortDirection } from 'common';
import { BehaviorSubject, combineLatestWith, of } from 'rxjs';
import { catchError, distinctUntilChanged, map, shareReplay, take, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ListGQL } from './graphql/api.list.get';
import { SystemConfigStore } from '../system-config/system-config.store';
import { UserPreferenceStore } from '../user-preference/user-preference.store';
import { LanguageStore } from '../language/language.store';
import { MessageService } from '../../services/message/message.service';
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import * as i0 from "@angular/core";
import * as i1 from "./graphql/api.list.get";
import * as i2 from "../system-config/system-config.store";
import * as i3 from "../user-preference/user-preference.store";
import * as i4 from "../language/language.store";
import * as i5 from "../../services/message/message.service";
import * as i6 from "../../services/local-storage/local-storage.service";
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
const initialSearchCriteria = {
    filters: {}
};
const initialListSort = {
    orderBy: '',
    sortOrder: SortDirection.DESC
};
const initialListPagination = {
    pageSize: 5,
    current: 0,
    previous: 0,
    next: 5,
    last: 0,
    total: 0,
    pageFirst: 0,
    pageLast: 0
};
const initialSelection = {
    all: false,
    status: SelectionStatus.NONE,
    selected: {},
    count: 0
};
const initialState = {
    module: '',
    records: [],
    criteria: deepClone(initialSearchCriteria),
    activeFilters: deepClone(initialFilters),
    sort: deepClone(initialListSort),
    pagination: deepClone(initialListPagination),
    selection: deepClone(initialSelection),
    openFilter: deepClone(initialFilter),
    loading: false,
    meta: {}
};
class RecordListStore {
    constructor(listGQL, configStore, preferencesStore, languageStore, message, localStorageService) {
        this.listGQL = listGQL;
        this.configStore = configStore;
        this.preferencesStore = preferencesStore;
        this.languageStore = languageStore;
        this.message = message;
        this.localStorageService = localStorageService;
        /** Internal Properties */
        this.cache$ = null;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.pageKey = null;
        this.records$ = this.state$.pipe(map(state => state.records), distinctUntilChanged());
        this.criteria$ = this.state$.pipe(map(state => state.criteria), distinctUntilChanged());
        this.sort$ = this.state$.pipe(map(state => state.sort), distinctUntilChanged());
        this.pagination$ = this.state$.pipe(map(state => state.pagination), distinctUntilChanged());
        this.selection$ = this.state$.pipe(map(state => state.selection), distinctUntilChanged());
        this.selectedCount$ = this.state$.pipe(map(state => state.selection.count), distinctUntilChanged());
        this.selectedStatus$ = this.state$.pipe(map(state => state.selection.status), distinctUntilChanged());
        this.activeFilters$ = this.state$.pipe(map(state => state.activeFilters), distinctUntilChanged());
        this.openFilter$ = this.state$.pipe(map(state => state.openFilter), distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading));
    }
    connect() {
        return this.records$;
    }
    disconnect() {
    }
    get criteria() {
        if (!this.internalState.criteria) {
            return deepClone(initialSearchCriteria);
        }
        return deepClone(this.internalState.criteria);
    }
    set criteria(criteria) {
        this.updateState({
            ...this.internalState,
            criteria
        });
    }
    get activeFilters() {
        return deepClone(this.internalState.activeFilters);
    }
    get sort() {
        if (!this.internalState.sort) {
            return deepClone(initialListSort);
        }
        return deepClone(this.internalState.sort);
    }
    set sort(sort) {
        this.updateState({
            ...this.internalState,
            sort
        });
    }
    get pagination() {
        if (!this.internalState.pagination) {
            return deepClone(initialListPagination);
        }
        return deepClone(this.internalState.pagination);
    }
    set pagination(pagination) {
        this.updateState({
            ...this.internalState,
            pagination
        });
    }
    get selection() {
        if (!this.internalState.selection) {
            return deepClone(initialSelection);
        }
        return deepClone(this.internalState.selection);
    }
    get records() {
        if (!this.internalState.records) {
            return [];
        }
        return this.internalState.records;
    }
    getModule() {
        return this.internalState.module;
    }
    getRecord(id) {
        let record = null;
        this.records.some(item => {
            if (item.id === id) {
                record = item;
                return true;
            }
        });
        return record;
    }
    /**
     * Clean destroy
     */
    destroy() {
        this.clear();
    }
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @param {boolean} load if to load
     * @param {string} pageSizeConfigKey string
     * @param filter
     * @param preferenceKey
     * @returns {object} Observable<any>
     */
    init(module, load = true, pageSizeConfigKey = 'list_max_entries_per_page', filter = deepClone(initialFilter), preferenceKey = '') {
        this.internalState.module = module;
        this.preferenceKey = preferenceKey;
        if (pageSizeConfigKey) {
            this.watchPageSize(pageSizeConfigKey);
        }
        this.setBaseFilter(filter);
        this.loadCurrentFilter(module);
        if (load === false) {
            return null;
        }
        return this.load();
    }
    setBaseFilter(filter) {
        this.baseFilterMap = { 'default': deepClone(filter) };
        this.baseFilter = deepClone(filter);
        this.updateState({ ...this.internalState, activeFilters: deepClone(this.baseFilterMap), openFilter: deepClone(this.baseFilter) });
    }
    /**
     * Load current filter
     * @param module
     * @protected
     */
    loadCurrentFilter(module) {
        const activeFiltersPref = this.loadPreference(module, 'current-filters') ?? this.baseFilterMap;
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
            const sortOrder = filter.criteria.sortOrder ?? 'desc';
            let direction = this.mapSortOrder(sortOrder);
            if (sort !== null) {
                orderBy = sort.orderBy;
                direction = sort.sortOrder;
            }
            this.updateSorting(orderBy, direction, false);
            this.updateSortLocalStorage();
            this.updateSearchCriteria(filter.criteria, reload);
        }
        this.updateFilterLocalStorage();
    }
    updateFilterLocalStorage() {
        const module = this.internalState.module;
        this.savePreference(module, 'current-filters', this.internalState.activeFilters);
    }
    updateSortLocalStorage() {
        const module = this.internalState.module;
        this.savePreference(module, 'current-sort', this.sort);
    }
    updatePaginationLocalStorage() {
        if (this.pageKey === null) {
            return;
        }
        const module = this.internalState.module;
        const key = module + '-' + this.pageKey + '-' + 'current-pagination';
        this.localStorageService.set(key, this.pagination);
    }
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<ListViewState>
     */
    load(useCache = true) {
        this.updateState({
            ...this.internalState,
            loading: true
        });
        return this.getRecords(this.internalState.module, this.internalState.criteria, this.internalState.sort, this.internalState.pagination, useCache).pipe(catchError(() => {
            this.message.addDangerMessageByKey('LBL_GET_RECORD_LIST_ERROR');
            return of({
                records: [],
                criteria: deepClone(initialSearchCriteria),
                sort: deepClone(initialListSort),
                pagination: deepClone(initialListPagination),
                openFilter: deepClone(this.baseFilter),
                activeFilters: deepClone(this.baseFilterMap),
                selection: deepClone(initialSelection),
                meta: {}
            });
        }), tap((data) => {
            this.calculatePageCount(data.records, data.pagination);
            this.updateState({
                ...this.internalState,
                records: data.records,
                pagination: data.pagination,
                loading: false,
                meta: data.meta ?? {}
            });
        }));
    }
    /**
     * Update the search criteria
     *
     * @param {object} criteria to set
     * @param {boolean} reload flag
     */
    updateSearchCriteria(criteria, reload = true) {
        this.updateState({ ...this.internalState, criteria });
        if (reload) {
            this.updateSelection(SelectionStatus.NONE);
            // Reset pagination to default first page
            this.resetPagination();
        }
    }
    /**
     * Reset search criteria
     * @param {boolean} reload flag
     */
    resetSearchCriteria(reload = true) {
        this.updateSearchCriteria(deepClone(initialSearchCriteria), reload);
    }
    /**
     * Update current list view sorting
     *
     * @param {string} orderBy to set
     * @param {string} sortOrder to set
     * @param {boolean} reload flag
     */
    updateSorting(orderBy, sortOrder, reload = true) {
        if (sortOrder === SortDirection.NONE) {
            orderBy = '';
            sortOrder = SortDirection.DESC;
        }
        const sort = { orderBy, sortOrder };
        this.updateState({ ...this.internalState, sort });
        if (reload) {
            this.load(false).pipe(take(1)).subscribe();
        }
    }
    /**
     * Map sort order to SortDirection enum
     * @param {string} sortOrder to map
     * @returns {string} SortDirection
     */
    mapSortOrder(sortOrder) {
        let direction = SortDirection.NONE;
        const sort = sortOrder.toLowerCase();
        if (sort === 'asc') {
            direction = SortDirection.ASC;
        }
        else if (sort === 'desc') {
            direction = SortDirection.DESC;
        }
        return direction;
    }
    /**
     * Update the pagination
     *
     * @param {number} current to set
     */
    updatePagination(current) {
        const pagination = { ...this.internalState.pagination, current };
        this.updateState({ ...this.internalState, pagination });
        this.updatePaginationLocalStorage();
        this.load(false).pipe(take(1)).subscribe();
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
     * Reset active filters
     *
     * @param {boolean} reload flag
     */
    resetFilters(reload = true) {
        this.updateState({
            ...this.internalState,
            activeFilters: deepClone(this.baseFilterMap),
            openFilter: deepClone(this.baseFilter),
        });
        this.clearSort();
        this.updateSortLocalStorage();
        this.updateFilterLocalStorage();
        this.updateSearchCriteria(this.baseFilter.criteria, reload);
    }
    /**
     * Save ui user preference
     * @param module
     * @param storageKey
     * @param value
     * @protected
     */
    savePreference(module, storageKey, value) {
        const preferenceKey = this.preferenceKey ?? null;
        if (!preferenceKey) {
            return null;
        }
        const key = `${preferenceKey}${storageKey}`;
        this.preferencesStore.setUi(module, key, value);
    }
    /**
     * Load ui user preference
     * @param module
     * @param storageKey
     * @protected
     */
    loadPreference(module, storageKey) {
        const preferenceKey = this.preferenceKey ?? null;
        if (!preferenceKey) {
            return null;
        }
        const key = `${preferenceKey}${storageKey}`;
        return this.preferencesStore.getUi(module, key);
    }
    /**
     * Reset/Clear the pagination
     */
    resetPagination() {
        this.updatePagination(0);
    }
    /**
     * Clear observable cache
     */
    clear() {
        this.cache$ = null;
        this.store.unsubscribe();
        this.preferencesSub.unsubscribe();
    }
    clearAuthBased() {
        this.clear();
    }
    /**
     * Selection public api
     */
    getSelectionStatus() {
        return this.selectedStatus$;
    }
    getSelectedCount() {
        return this.selectedCount$;
    }
    updateSelection(state) {
        if (state === SelectionStatus.NONE) {
            this.clearSelection();
            return;
        }
        if (state === SelectionStatus.ALL) {
            this.selectAll();
            return;
        }
        if (state === SelectionStatus.PAGE) {
            this.selectPage();
            return;
        }
    }
    clearSelection() {
        this.updateState({
            ...this.internalState,
            selection: deepClone(initialSelection)
        });
    }
    clearSort() {
        this.updateState({
            ...this.internalState,
            sort: deepClone(initialListSort)
        });
    }
    selectAll() {
        const total = this.internalState.pagination.total;
        this.updateState({
            ...this.internalState,
            selection: {
                all: true,
                status: SelectionStatus.ALL,
                selected: {},
                count: total
            }
        });
    }
    selectPage() {
        const selected = { ...this.internalState.selection.selected };
        if (this.internalState.records && this.internalState.records.length) {
            this.internalState.records.forEach(value => {
                if (value && value.id) {
                    selected[value.id] = value.id;
                }
            });
        }
        this.updateState({
            ...this.internalState,
            selection: {
                all: false,
                status: SelectionStatus.SOME,
                selected,
                count: Object.keys(selected).length
            }
        });
    }
    toggleSelection(id) {
        const selection = deepClone(this.internalState.selection);
        if (selection.selected[id]) {
            delete selection.selected[id];
        }
        else {
            selection.selected[id] = id;
        }
        selection.count = Object.keys(selection.selected).length;
        if (selection.count === 0) {
            selection.status = SelectionStatus.NONE;
        }
        else {
            selection.status = SelectionStatus.SOME;
        }
        this.updateState({
            ...this.internalState,
            selection
        });
    }
    /**
     * Pagination Public API
     */
    getPaginationCount() {
        return this.pagination$.pipe(map(pagination => ({
            pageFirst: pagination.pageFirst,
            pageLast: pagination.pageLast,
            total: pagination.total
        })), distinctUntilChanged());
    }
    getPagination() {
        return this.store.value.pagination;
    }
    getMeta() {
        return this.store.value.meta;
    }
    changePage(page) {
        let pageToLoad = 0;
        const pageMap = {};
        pageMap[PageSelection.FIRST] = 0;
        pageMap[PageSelection.PREVIOUS] = this.internalState.pagination.previous;
        pageMap[PageSelection.NEXT] = this.internalState.pagination.next;
        pageMap[PageSelection.LAST] = this.internalState.pagination.last;
        if (page in pageMap && pageMap[page] >= 0) {
            pageToLoad = pageMap[page];
            if (Number(pageToLoad) > this.internalState.pagination.last) {
                return;
            }
            if (pageToLoad < 0) {
                return;
            }
            this.updatePagination(pageToLoad);
        }
    }
    /**
     * Set Pagination page size
     *
     * @param {number} pageSize to set
     */
    setPageSize(pageSize) {
        const pagination = { ...this.internalState.pagination, pageSize };
        this.updateState({ ...this.internalState, pagination });
    }
    /**
     * Get Pagination page size
     */
    getPageSize() {
        return this?.internalState?.pagination?.pageSize ?? 10;
    }
    /**
     * Internal API
     */
    /**
     * Subscribe to page size changes
     *
     * @param {string} pageSizeConfigKey key
     */
    watchPageSize(pageSizeConfigKey) {
        const pageSizePreference = this.preferencesStore.getUserPreference(pageSizeConfigKey);
        const pageSizeConfig = this.configStore.getConfigValue(pageSizeConfigKey);
        this.determinePageSize(pageSizePreference, pageSizeConfig);
        this.preferencesSub = this.configStore.configs$.pipe(combineLatestWith(this.preferencesStore.userPreferences$), tap(([configs, preferences]) => {
            const key = pageSizeConfigKey;
            const sizePreference = (preferences && preferences[key]) || null;
            const sizeConfig = (configs && configs[key] && configs[key].value) || null;
            this.determinePageSize(sizePreference, sizeConfig);
        })).subscribe();
    }
    /**
     * Determine page size to use
     *
     * @param {} pageSizePreference to use
     * @param {string} pageSizeConfig to use
     */
    determinePageSize(pageSizePreference, pageSizeConfig) {
        let size = 20;
        if (pageSizePreference) {
            size = pageSizePreference;
        }
        else if (pageSizeConfig) {
            size = parseInt(pageSizeConfig, 10);
        }
        this.setPageSize(size);
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
     * Calculate page count
     *
     * @param {object} records list
     * @param {object} pagination info
     */
    calculatePageCount(records, pagination) {
        const recordCount = (records && records.length) || 0;
        let pageFirst = 0;
        let pageLast = 0;
        if (recordCount > 0) {
            pageFirst = pagination.current + 1;
            pageLast = pagination.current + recordCount;
        }
        pagination.pageFirst = pageFirst;
        pagination.pageLast = pageLast;
    }
    /**
     * Get records cached Observable or call the backend
     *
     * @param {string} module to use
     * @param {object} criteria to use
     * @param {object} sort to use
     * @param {object} pagination to use
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<any>
     */
    getRecords(module, criteria, sort, pagination, useCache = true) {
        if (this.cache$ == null || useCache === false) {
            this.cache$ = this.listGQL.get(module, criteria, sort, pagination).pipe(shareReplay(1));
        }
        return this.cache$;
    }
    static { this.ɵfac = function RecordListStore_Factory(t) { return new (t || RecordListStore)(i0.ɵɵinject(i1.ListGQL), i0.ɵɵinject(i2.SystemConfigStore), i0.ɵɵinject(i3.UserPreferenceStore), i0.ɵɵinject(i4.LanguageStore), i0.ɵɵinject(i5.MessageService), i0.ɵɵinject(i6.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordListStore, factory: RecordListStore.ɵfac }); }
}
export { RecordListStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordListStore, [{
        type: Injectable
    }], function () { return [{ type: i1.ListGQL }, { type: i2.SystemConfigStore }, { type: i3.UserPreferenceStore }, { type: i4.LanguageStore }, { type: i5.MessageService }, { type: i6.LocalStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWxpc3Quc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3Quc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFDSCxTQUFTLEVBQ1QsV0FBVyxFQUVYLGFBQWEsRUFRYixlQUFlLEVBQ2YsYUFBYSxFQUVoQixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUMsZUFBZSxFQUFpQixpQkFBaUIsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDckcsT0FBTyxFQUFDLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3RixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQWtCLGlCQUFpQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDeEYsT0FBTyxFQUFrQixtQkFBbUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzlGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFFdEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7O0FBR3ZGLE1BQU0sYUFBYSxHQUFnQjtJQUMvQixHQUFHLEVBQUUsU0FBUztJQUNkLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLFVBQVUsRUFBRTtRQUNSLFFBQVEsRUFBRSxFQUFFO0tBQ2Y7SUFDRCxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsU0FB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QlEsZUFBZTt1RUFBZixlQUFlLFdBQWYsZUFBZTs7U0FBZixlQUFlO3VGQUFmLGVBQWU7Y0FEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtcbiAgICBkZWVwQ2xvbmUsXG4gICAgZW1wdHlPYmplY3QsXG4gICAgT2JqZWN0TWFwLFxuICAgIFBhZ2VTZWxlY3Rpb24sXG4gICAgUGFnaW5hdGlvbixcbiAgICBQYWdpbmF0aW9uQ291bnQsXG4gICAgUGFnaW5hdGlvbkRhdGFTb3VyY2UsXG4gICAgUmVjb3JkLFxuICAgIFJlY29yZFNlbGVjdGlvbixcbiAgICBTZWFyY2hDcml0ZXJpYSxcbiAgICBTZWxlY3Rpb25EYXRhU291cmNlLFxuICAgIFNlbGVjdGlvblN0YXR1cyxcbiAgICBTb3J0RGlyZWN0aW9uLFxuICAgIFNvcnRpbmdTZWxlY3Rpb25cbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHNoYXJlUmVwbGF5LCB0YWtlLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U3RhdGVTdG9yZX0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TGlzdEdRTH0gZnJvbSAnLi9ncmFwaHFsL2FwaS5saXN0LmdldCc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ01hcCwgU3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlcywgVXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXIsIFNhdmVkRmlsdGVyTWFwfSBmcm9tIFwiLi4vc2F2ZWQtZmlsdGVycy9zYXZlZC1maWx0ZXIubW9kZWxcIjtcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlXCI7XG5cblxuY29uc3QgaW5pdGlhbEZpbHRlcjogU2F2ZWRGaWx0ZXIgPSB7XG4gICAga2V5OiAnZGVmYXVsdCcsXG4gICAgbW9kdWxlOiAnc2F2ZWQtc2VhcmNoJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNvbnRlbnRzOiAnJ1xuICAgIH0sXG4gICAgY3JpdGVyaWE6IHtcbiAgICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgICBmaWx0ZXJzOiB7fVxuICAgIH1cbn07XG5cbmNvbnN0IGluaXRpYWxGaWx0ZXJzOiBTYXZlZEZpbHRlck1hcCA9IHtcbiAgICAnZGVmYXVsdCc6IGRlZXBDbG9uZShpbml0aWFsRmlsdGVyKVxufTtcblxuY29uc3QgaW5pdGlhbFNlYXJjaENyaXRlcmlhID0ge1xuICAgIGZpbHRlcnM6IHt9XG59O1xuXG5jb25zdCBpbml0aWFsTGlzdFNvcnQgPSB7XG4gICAgb3JkZXJCeTogJycsXG4gICAgc29ydE9yZGVyOiBTb3J0RGlyZWN0aW9uLkRFU0Ncbn07XG5cbmNvbnN0IGluaXRpYWxMaXN0UGFnaW5hdGlvbiA9IHtcbiAgICBwYWdlU2l6ZTogNSxcbiAgICBjdXJyZW50OiAwLFxuICAgIHByZXZpb3VzOiAwLFxuICAgIG5leHQ6IDUsXG4gICAgbGFzdDogMCxcbiAgICB0b3RhbDogMCxcbiAgICBwYWdlRmlyc3Q6IDAsXG4gICAgcGFnZUxhc3Q6IDBcbn07XG5cbmNvbnN0IGluaXRpYWxTZWxlY3Rpb246IFJlY29yZFNlbGVjdGlvbiA9IHtcbiAgICBhbGw6IGZhbHNlLFxuICAgIHN0YXR1czogU2VsZWN0aW9uU3RhdHVzLk5PTkUsXG4gICAgc2VsZWN0ZWQ6IHt9LFxuICAgIGNvdW50OiAwXG59O1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb3JkTGlzdCB7XG4gICAgcmVjb3JkczogUmVjb3JkW107XG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb247XG4gICAgY3JpdGVyaWE/OiBTZWFyY2hDcml0ZXJpYTtcbiAgICBhY3RpdmVGaWx0ZXJzPzogU2F2ZWRGaWx0ZXJNYXAsXG4gICAgb3BlbkZpbHRlcj86IFNhdmVkRmlsdGVyO1xuICAgIHNvcnQ/OiBTb3J0aW5nU2VsZWN0aW9uO1xuICAgIG1ldGE/OiBPYmplY3RNYXA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb3JkTGlzdFN0YXRlIHtcbiAgICBtb2R1bGU6IHN0cmluZztcbiAgICByZWNvcmRzOiBSZWNvcmRbXTtcbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbjtcbiAgICBjcml0ZXJpYT86IFNlYXJjaENyaXRlcmlhO1xuICAgIHNvcnQ/OiBTb3J0aW5nU2VsZWN0aW9uO1xuICAgIHNlbGVjdGlvbjogUmVjb3JkU2VsZWN0aW9uO1xuICAgIGFjdGl2ZUZpbHRlcnM/OiBTYXZlZEZpbHRlck1hcCxcbiAgICBvcGVuRmlsdGVyPzogU2F2ZWRGaWx0ZXI7XG4gICAgbG9hZGluZzogYm9vbGVhbjtcbiAgICBtZXRhPzogT2JqZWN0TWFwO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IFJlY29yZExpc3RTdGF0ZSA9IHtcbiAgICBtb2R1bGU6ICcnLFxuICAgIHJlY29yZHM6IFtdLFxuICAgIGNyaXRlcmlhOiBkZWVwQ2xvbmUoaW5pdGlhbFNlYXJjaENyaXRlcmlhKSxcbiAgICBhY3RpdmVGaWx0ZXJzOiBkZWVwQ2xvbmUoaW5pdGlhbEZpbHRlcnMpLFxuICAgIHNvcnQ6IGRlZXBDbG9uZShpbml0aWFsTGlzdFNvcnQpLFxuICAgIHBhZ2luYXRpb246IGRlZXBDbG9uZShpbml0aWFsTGlzdFBhZ2luYXRpb24pLFxuICAgIHNlbGVjdGlvbjogZGVlcENsb25lKGluaXRpYWxTZWxlY3Rpb24pLFxuICAgIG9wZW5GaWx0ZXI6IGRlZXBDbG9uZShpbml0aWFsRmlsdGVyKSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBtZXRhOiB7fVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlY29yZExpc3RTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUsIERhdGFTb3VyY2U8UmVjb3JkPiwgU2VsZWN0aW9uRGF0YVNvdXJjZSwgUGFnaW5hdGlvbkRhdGFTb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIGxvbmctbGl2ZWQgb2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgICovXG4gICAgcmVjb3JkcyQ6IE9ic2VydmFibGU8UmVjb3JkW10+O1xuICAgIGNyaXRlcmlhJDogT2JzZXJ2YWJsZTxTZWFyY2hDcml0ZXJpYT47XG4gICAgc29ydCQ6IE9ic2VydmFibGU8U29ydGluZ1NlbGVjdGlvbj47XG4gICAgcGFnaW5hdGlvbiQ6IE9ic2VydmFibGU8UGFnaW5hdGlvbj47XG4gICAgc2VsZWN0aW9uJDogT2JzZXJ2YWJsZTxSZWNvcmRTZWxlY3Rpb24+O1xuICAgIHNlbGVjdGVkQ291bnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgc2VsZWN0ZWRTdGF0dXMkOiBPYnNlcnZhYmxlPFNlbGVjdGlvblN0YXR1cz47XG4gICAgYWN0aXZlRmlsdGVycyQ6IE9ic2VydmFibGU8U2F2ZWRGaWx0ZXJNYXA+O1xuICAgIG9wZW5GaWx0ZXIkOiBPYnNlcnZhYmxlPFNhdmVkRmlsdGVyPjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAgIC8qKiBJbnRlcm5hbCBQcm9wZXJ0aWVzICovXG4gICAgcHJvdGVjdGVkIGNhY2hlJDogT2JzZXJ2YWJsZTxhbnk+ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgaW50ZXJuYWxTdGF0ZTogUmVjb3JkTGlzdFN0YXRlID0gZGVlcENsb25lKGluaXRpYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIHN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxSZWNvcmRMaXN0U3RhdGU+KHRoaXMuaW50ZXJuYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIHN0YXRlJCA9IHRoaXMuc3RvcmUuYXNPYnNlcnZhYmxlKCk7XG4gICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgICBwcmVmZXJlbmNlS2V5OiBzdHJpbmc7XG4gICAgYmFzZUZpbHRlcjogU2F2ZWRGaWx0ZXI7XG4gICAgYmFzZUZpbHRlck1hcDogU2F2ZWRGaWx0ZXJNYXA7XG5cbiAgICBwYWdlS2V5OiBzdHJpbmcgPSBudWxsO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxpc3RHUUw6IExpc3RHUUwsXG4gICAgICAgIHByb3RlY3RlZCBjb25maWdTdG9yZTogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlc1N0b3JlOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLnJlY29yZHMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUucmVjb3JkcyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmNyaXRlcmlhJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmNyaXRlcmlhKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuc29ydCQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5zb3J0KSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbiQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5wYWdpbmF0aW9uKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnNlbGVjdGlvbiksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ291bnQkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuc2VsZWN0aW9uLmNvdW50KSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdGF0dXMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuc2VsZWN0aW9uLnN0YXR1cyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmFjdGl2ZUZpbHRlcnMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuYWN0aXZlRmlsdGVycyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLm9wZW5GaWx0ZXIkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUub3BlbkZpbHRlciksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubG9hZGluZykpO1xuICAgIH1cblxuICAgIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkcyQ7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBnZXQgY3JpdGVyaWEoKTogU2VhcmNoQ3JpdGVyaWEge1xuICAgICAgICBpZiAoIXRoaXMuaW50ZXJuYWxTdGF0ZS5jcml0ZXJpYSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZXBDbG9uZShpbml0aWFsU2VhcmNoQ3JpdGVyaWEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZXBDbG9uZSh0aGlzLmludGVybmFsU3RhdGUuY3JpdGVyaWEpO1xuICAgIH1cblxuICAgIHNldCBjcml0ZXJpYShjcml0ZXJpYTogU2VhcmNoQ3JpdGVyaWEpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBjcml0ZXJpYVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgYWN0aXZlRmlsdGVycygpOiBTYXZlZEZpbHRlck1hcCB7XG4gICAgICAgIHJldHVybiBkZWVwQ2xvbmUodGhpcy5pbnRlcm5hbFN0YXRlLmFjdGl2ZUZpbHRlcnMpO1xuICAgIH1cblxuICAgIGdldCBzb3J0KCk6IFNvcnRpbmdTZWxlY3Rpb24ge1xuICAgICAgICBpZiAoIXRoaXMuaW50ZXJuYWxTdGF0ZS5zb3J0KSB7XG4gICAgICAgICAgICByZXR1cm4gZGVlcENsb25lKGluaXRpYWxMaXN0U29ydCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVlcENsb25lKHRoaXMuaW50ZXJuYWxTdGF0ZS5zb3J0KTtcbiAgICB9XG5cbiAgICBzZXQgc29ydChzb3J0OiBTb3J0aW5nU2VsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgc29ydFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgcGFnaW5hdGlvbigpOiBQYWdpbmF0aW9uIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVybmFsU3RhdGUucGFnaW5hdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGRlZXBDbG9uZShpbml0aWFsTGlzdFBhZ2luYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZXBDbG9uZSh0aGlzLmludGVybmFsU3RhdGUucGFnaW5hdGlvbik7XG4gICAgfVxuXG4gICAgc2V0IHBhZ2luYXRpb24ocGFnaW5hdGlvbjogUGFnaW5hdGlvbikge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb25cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGlvbigpOiBSZWNvcmRTZWxlY3Rpb24ge1xuICAgICAgICBpZiAoIXRoaXMuaW50ZXJuYWxTdGF0ZS5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBkZWVwQ2xvbmUoaW5pdGlhbFNlbGVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVlcENsb25lKHRoaXMuaW50ZXJuYWxTdGF0ZS5zZWxlY3Rpb24pO1xuICAgIH1cblxuICAgIGdldCByZWNvcmRzKCk6IFJlY29yZFtdIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVybmFsU3RhdGUucmVjb3Jkcykge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5yZWNvcmRzO1xuICAgIH1cblxuICAgIGdldE1vZHVsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZTtcbiAgICB9XG5cbiAgICBnZXRSZWNvcmQoaWQ6IHN0cmluZyk6IFJlY29yZCB7XG4gICAgICAgIGxldCByZWNvcmQ6IFJlY29yZCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVjb3Jkcy5zb21lKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkID0gaXRlbTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlY29yZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhbiBkZXN0cm95XG4gICAgICovXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIGxpc3QgcmVjb3JkcyBsb2FkIGlmIG5vdCBjYWNoZWQgYW5kIHVwZGF0ZSBzdGF0ZS5cbiAgICAgKiBSZXR1cm5zIG9ic2VydmFibGUgdG8gYmUgdXNlZCBpbiByZXNvbHZlciBpZiBuZWVkZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkIGlmIHRvIGxvYWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFnZVNpemVDb25maWdLZXkgc3RyaW5nXG4gICAgICogQHBhcmFtIGZpbHRlclxuICAgICAqIEBwYXJhbSBwcmVmZXJlbmNlS2V5XG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHVibGljIGluaXQobW9kdWxlOiBzdHJpbmcsIGxvYWQgPSB0cnVlLCBwYWdlU2l6ZUNvbmZpZ0tleSA9ICdsaXN0X21heF9lbnRyaWVzX3Blcl9wYWdlJywgZmlsdGVyID0gZGVlcENsb25lKGluaXRpYWxGaWx0ZXIpLCBwcmVmZXJlbmNlS2V5ID0gJycpOiBPYnNlcnZhYmxlPFJlY29yZExpc3Q+IHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5wcmVmZXJlbmNlS2V5ID0gcHJlZmVyZW5jZUtleTtcblxuICAgICAgICBpZiAocGFnZVNpemVDb25maWdLZXkpIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hQYWdlU2l6ZShwYWdlU2l6ZUNvbmZpZ0tleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRCYXNlRmlsdGVyKGZpbHRlcik7XG4gICAgICAgIHRoaXMubG9hZEN1cnJlbnRGaWx0ZXIobW9kdWxlKTtcblxuICAgICAgICBpZiAobG9hZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCYXNlRmlsdGVyKGZpbHRlcikge1xuXG4gICAgICAgIHRoaXMuYmFzZUZpbHRlck1hcCA9IHsnZGVmYXVsdCc6IGRlZXBDbG9uZShmaWx0ZXIpfTtcbiAgICAgICAgdGhpcy5iYXNlRmlsdGVyID0gZGVlcENsb25lKGZpbHRlcik7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4udGhpcy5pbnRlcm5hbFN0YXRlLCBhY3RpdmVGaWx0ZXJzOiBkZWVwQ2xvbmUodGhpcy5iYXNlRmlsdGVyTWFwKSwgb3BlbkZpbHRlcjogZGVlcENsb25lKHRoaXMuYmFzZUZpbHRlcil9KTtcblxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBjdXJyZW50IGZpbHRlclxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHVibGljIGxvYWRDdXJyZW50RmlsdGVyKG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlRmlsdGVyc1ByZWYgPSB0aGlzLmxvYWRQcmVmZXJlbmNlKG1vZHVsZSwgJ2N1cnJlbnQtZmlsdGVycycpID8/IHRoaXMuYmFzZUZpbHRlck1hcDtcblxuICAgICAgICBpZiAoIWFjdGl2ZUZpbHRlcnNQcmVmIHx8IGVtcHR5T2JqZWN0KGFjdGl2ZUZpbHRlcnNQcmVmKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGN1cnJlbnRTb3J0ID0gdGhpcy5sb2FkUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LXNvcnQnKSBhcyBTb3J0aW5nU2VsZWN0aW9uO1xuICAgICAgICBpZiAoIWN1cnJlbnRTb3J0ICYmIGVtcHR5T2JqZWN0KGN1cnJlbnRTb3J0KSkge1xuICAgICAgICAgICAgY3VycmVudFNvcnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRGaWx0ZXJzKGFjdGl2ZUZpbHRlcnNQcmVmLCBmYWxzZSwgY3VycmVudFNvcnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhY3RpdmUgZmlsdGVyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpbHRlcnMgdG8gc2V0XG4gICAgICogQHBhcmFtIHtib29sZWFufSByZWxvYWQgZmxhZ1xuICAgICAqIEBwYXJhbSBzb3J0XG4gICAgICovXG4gICAgcHVibGljIHNldEZpbHRlcnMoZmlsdGVyczogU2F2ZWRGaWx0ZXJNYXAsIHJlbG9hZCA9IHRydWUsIHNvcnQ6IFNvcnRpbmdTZWxlY3Rpb24gPSBudWxsKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyS2V5ID0gT2JqZWN0LmtleXMoZmlsdGVycykuc2hpZnQoKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyc1tmaWx0ZXJLZXldO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLnRoaXMuaW50ZXJuYWxTdGF0ZSwgYWN0aXZlRmlsdGVyczogZGVlcENsb25lKGZpbHRlcnMpLCBvcGVuRmlsdGVyOiBkZWVwQ2xvbmUoZmlsdGVyKX0pO1xuXG4gICAgICAgIGlmIChmaWx0ZXIuY3JpdGVyaWEpIHtcbiAgICAgICAgICAgIGxldCBvcmRlckJ5ID0gZmlsdGVyLmNyaXRlcmlhLm9yZGVyQnkgPz8gJyc7XG4gICAgICAgICAgICBjb25zdCBzb3J0T3JkZXIgPSBmaWx0ZXIuY3JpdGVyaWEuc29ydE9yZGVyID8/ICdkZXNjJztcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLm1hcFNvcnRPcmRlcihzb3J0T3JkZXIpO1xuXG4gICAgICAgICAgICBpZiAoc29ydCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9yZGVyQnkgPSBzb3J0Lm9yZGVyQnk7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gc29ydC5zb3J0T3JkZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlU29ydGluZyhvcmRlckJ5LCBkaXJlY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU29ydExvY2FsU3RvcmFnZSgpO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlYXJjaENyaXRlcmlhKGZpbHRlci5jcml0ZXJpYSwgcmVsb2FkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlRmlsdGVyTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUZpbHRlckxvY2FsU3RvcmFnZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZTtcblxuICAgICAgICB0aGlzLnNhdmVQcmVmZXJlbmNlKG1vZHVsZSwgJ2N1cnJlbnQtZmlsdGVycycsIHRoaXMuaW50ZXJuYWxTdGF0ZS5hY3RpdmVGaWx0ZXJzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlU29ydExvY2FsU3RvcmFnZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZTtcblxuICAgICAgICB0aGlzLnNhdmVQcmVmZXJlbmNlKG1vZHVsZSwgJ2N1cnJlbnQtc29ydCcsIHRoaXMuc29ydCk7XG4gICAgfVxuXG4gICBwdWJsaWMgdXBkYXRlUGFnaW5hdGlvbkxvY2FsU3RvcmFnZSgpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5wYWdlS2V5ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZTtcbiAgICAgICAgY29uc3Qga2V5ID0gbW9kdWxlICsgJy0nICsgdGhpcy5wYWdlS2V5ICsgJy0nICsnY3VycmVudC1wYWdpbmF0aW9uJztcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldChrZXksIHRoaXMucGFnaW5hdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCAvIHJlbG9hZCByZWNvcmRzIHVzaW5nIGN1cnJlbnQgcGFnaW5hdGlvbiBhbmQgY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxMaXN0Vmlld1N0YXRlPlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8UmVjb3JkTGlzdD4ge1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWNvcmRzKFxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZSxcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5jcml0ZXJpYSxcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5zb3J0LFxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLnBhZ2luYXRpb24sXG4gICAgICAgICAgICB1c2VDYWNoZVxuICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KCdMQkxfR0VUX1JFQ09SRF9MSVNUX0VSUk9SJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkczogW10sXG4gICAgICAgICAgICAgICAgICAgIGNyaXRlcmlhOiBkZWVwQ2xvbmUoaW5pdGlhbFNlYXJjaENyaXRlcmlhKSxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogZGVlcENsb25lKGluaXRpYWxMaXN0U29ydCksXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IGRlZXBDbG9uZShpbml0aWFsTGlzdFBhZ2luYXRpb24pLFxuICAgICAgICAgICAgICAgICAgICBvcGVuRmlsdGVyOiBkZWVwQ2xvbmUodGhpcy5iYXNlRmlsdGVyKSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRmlsdGVyczogZGVlcENsb25lKHRoaXMuYmFzZUZpbHRlck1hcCksXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogZGVlcENsb25lKGluaXRpYWxTZWxlY3Rpb24pLFxuICAgICAgICAgICAgICAgICAgICBtZXRhOiB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0YXAoXG4gICAgICAgICAgICAgICAgKGRhdGE6IFJlY29yZExpc3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVQYWdlQ291bnQoZGF0YS5yZWNvcmRzLCBkYXRhLnBhZ2luYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZHM6IGRhdGEucmVjb3JkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IGRhdGEucGFnaW5hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YTogZGF0YS5tZXRhID8/IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzZWFyY2ggY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjcml0ZXJpYSB0byBzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCBmbGFnXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZVNlYXJjaENyaXRlcmlhKGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSwgcmVsb2FkID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIGNyaXRlcmlhfSk7XG5cbiAgICAgICAgaWYgKHJlbG9hZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oU2VsZWN0aW9uU3RhdHVzLk5PTkUpO1xuICAgICAgICAgICAgLy8gUmVzZXQgcGFnaW5hdGlvbiB0byBkZWZhdWx0IGZpcnN0IHBhZ2VcbiAgICAgICAgICAgIHRoaXMucmVzZXRQYWdpbmF0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBzZWFyY2ggY3JpdGVyaWFcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCBmbGFnXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0U2VhcmNoQ3JpdGVyaWEocmVsb2FkID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVNlYXJjaENyaXRlcmlhKGRlZXBDbG9uZShpbml0aWFsU2VhcmNoQ3JpdGVyaWEpLCByZWxvYWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjdXJyZW50IGxpc3QgdmlldyBzb3J0aW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3JkZXJCeSB0byBzZXRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc29ydE9yZGVyIHRvIHNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVsb2FkIGZsYWdcbiAgICAgKi9cbiAgICB1cGRhdGVTb3J0aW5nKG9yZGVyQnk6IHN0cmluZywgc29ydE9yZGVyOiBTb3J0RGlyZWN0aW9uLCByZWxvYWQgPSB0cnVlKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHNvcnRPcmRlciA9PT0gU29ydERpcmVjdGlvbi5OT05FKSB7XG4gICAgICAgICAgICBvcmRlckJ5ID0gJyc7XG4gICAgICAgICAgICBzb3J0T3JkZXIgPSBTb3J0RGlyZWN0aW9uLkRFU0M7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzb3J0ID0ge29yZGVyQnksIHNvcnRPcmRlcn0gYXMgU29ydGluZ1NlbGVjdGlvbjtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIHNvcnR9KTtcblxuICAgICAgICBpZiAocmVsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXAgc29ydCBvcmRlciB0byBTb3J0RGlyZWN0aW9uIGVudW1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc29ydE9yZGVyIHRvIG1hcFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFNvcnREaXJlY3Rpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgbWFwU29ydE9yZGVyKHNvcnRPcmRlcjogc3RyaW5nKTogU29ydERpcmVjdGlvbiB7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBTb3J0RGlyZWN0aW9uLk5PTkU7XG4gICAgICAgIGNvbnN0IHNvcnQgPSBzb3J0T3JkZXIudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoc29ydCA9PT0gJ2FzYycpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IFNvcnREaXJlY3Rpb24uQVNDXG4gICAgICAgIH0gZWxzZSBpZiAoc29ydCA9PT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBTb3J0RGlyZWN0aW9uLkRFU0NcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBwYWdpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VycmVudCB0byBzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlUGFnaW5hdGlvbihjdXJyZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHsuLi50aGlzLmludGVybmFsU3RhdGUucGFnaW5hdGlvbiwgY3VycmVudH07XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLnRoaXMuaW50ZXJuYWxTdGF0ZSwgcGFnaW5hdGlvbn0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb25Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy5sb2FkKGZhbHNlKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBvcGVuIGZpbHRlcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWx0ZXIgdG8gc2V0XG4gICAgICovXG4gICAgcHVibGljIHNldE9wZW5GaWx0ZXIoZmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIG9wZW5GaWx0ZXI6IGRlZXBDbG9uZShmaWx0ZXIpfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgYWN0aXZlIGZpbHRlcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVsb2FkIGZsYWdcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzZXRGaWx0ZXJzKHJlbG9hZCA9IHRydWUpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIGFjdGl2ZUZpbHRlcnM6IGRlZXBDbG9uZSh0aGlzLmJhc2VGaWx0ZXJNYXApLFxuICAgICAgICAgICAgb3BlbkZpbHRlcjogZGVlcENsb25lKHRoaXMuYmFzZUZpbHRlciksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2xlYXJTb3J0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU29ydExvY2FsU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlckxvY2FsU3RvcmFnZSgpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU2VhcmNoQ3JpdGVyaWEodGhpcy5iYXNlRmlsdGVyLmNyaXRlcmlhLCByZWxvYWQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB1aSB1c2VyIHByZWZlcmVuY2VcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIHN0b3JhZ2VLZXlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNhdmVQcmVmZXJlbmNlKG1vZHVsZTogc3RyaW5nLCBzdG9yYWdlS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcHJlZmVyZW5jZUtleSA9IHRoaXMucHJlZmVyZW5jZUtleSA/PyBudWxsO1xuICAgICAgICBpZiAoIXByZWZlcmVuY2VLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleSA9IGAke3ByZWZlcmVuY2VLZXl9JHtzdG9yYWdlS2V5fWA7XG4gICAgICAgIHRoaXMucHJlZmVyZW5jZXNTdG9yZS5zZXRVaShtb2R1bGUsIGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgdWkgdXNlciBwcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSBzdG9yYWdlS2V5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBsb2FkUHJlZmVyZW5jZShtb2R1bGU6IHN0cmluZywgc3RvcmFnZUtleTogc3RyaW5nKTogYW55IHtcblxuICAgICAgICBjb25zdCBwcmVmZXJlbmNlS2V5ID0gdGhpcy5wcmVmZXJlbmNlS2V5ID8/IG51bGw7XG4gICAgICAgIGlmICghcHJlZmVyZW5jZUtleSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5ID0gYCR7cHJlZmVyZW5jZUtleX0ke3N0b3JhZ2VLZXl9YDtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZXNTdG9yZS5nZXRVaShtb2R1bGUsIGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQvQ2xlYXIgdGhlIHBhZ2luYXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzZXRQYWdpbmF0aW9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgb2JzZXJ2YWJsZSBjYWNoZVxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWNoZSQgPSBudWxsO1xuICAgICAgICB0aGlzLnN0b3JlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMucHJlZmVyZW5jZXNTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJBdXRoQmFzZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3Rpb24gcHVibGljIGFwaVxuICAgICAqL1xuXG4gICAgZ2V0U2VsZWN0aW9uU3RhdHVzKCk6IE9ic2VydmFibGU8U2VsZWN0aW9uU3RhdHVzPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkU3RhdHVzJDtcbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZENvdW50KCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkQ291bnQkO1xuICAgIH1cblxuICAgIHVwZGF0ZVNlbGVjdGlvbihzdGF0ZTogU2VsZWN0aW9uU3RhdHVzKTogdm9pZCB7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gU2VsZWN0aW9uU3RhdHVzLk5PTkUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gU2VsZWN0aW9uU3RhdHVzLkFMTCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGwoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gU2VsZWN0aW9uU3RhdHVzLlBBR0UpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0UGFnZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgc2VsZWN0aW9uOiBkZWVwQ2xvbmUoaW5pdGlhbFNlbGVjdGlvbilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJTb3J0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHNvcnQ6IGRlZXBDbG9uZShpbml0aWFsTGlzdFNvcnQpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGVjdEFsbCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdG90YWwgPSB0aGlzLmludGVybmFsU3RhdGUucGFnaW5hdGlvbi50b3RhbDtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBzZWxlY3Rpb246IHtcbiAgICAgICAgICAgICAgICBhbGw6IHRydWUsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBTZWxlY3Rpb25TdGF0dXMuQUxMLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB7fSxcbiAgICAgICAgICAgICAgICBjb3VudDogdG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZWN0UGFnZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB7Li4udGhpcy5pbnRlcm5hbFN0YXRlLnNlbGVjdGlvbi5zZWxlY3RlZH07XG5cbiAgICAgICAgaWYgKHRoaXMuaW50ZXJuYWxTdGF0ZS5yZWNvcmRzICYmIHRoaXMuaW50ZXJuYWxTdGF0ZS5yZWNvcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLnJlY29yZHMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkW3ZhbHVlLmlkXSA9IHZhbHVlLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBzZWxlY3Rpb246IHtcbiAgICAgICAgICAgICAgICBhbGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0YXR1czogU2VsZWN0aW9uU3RhdHVzLlNPTUUsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgY291bnQ6IE9iamVjdC5rZXlzKHNlbGVjdGVkKS5sZW5ndGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlU2VsZWN0aW9uKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZGVlcENsb25lKHRoaXMuaW50ZXJuYWxTdGF0ZS5zZWxlY3Rpb24pO1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb24uc2VsZWN0ZWRbaWRdKSB7XG4gICAgICAgICAgICBkZWxldGUgc2VsZWN0aW9uLnNlbGVjdGVkW2lkXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZFtpZF0gPSBpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdGlvbi5jb3VudCA9IE9iamVjdC5rZXlzKHNlbGVjdGlvbi5zZWxlY3RlZCkubGVuZ3RoO1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb24uY291bnQgPT09IDApIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zdGF0dXMgPSBTZWxlY3Rpb25TdGF0dXMuTk9ORTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zdGF0dXMgPSBTZWxlY3Rpb25TdGF0dXMuU09NRTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgc2VsZWN0aW9uXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhZ2luYXRpb24gUHVibGljIEFQSVxuICAgICAqL1xuXG4gICAgZ2V0UGFnaW5hdGlvbkNvdW50KCk6IE9ic2VydmFibGU8UGFnaW5hdGlvbkNvdW50PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb24kLnBpcGUobWFwKHBhZ2luYXRpb24gPT4gKHtcbiAgICAgICAgICAgIHBhZ2VGaXJzdDogcGFnaW5hdGlvbi5wYWdlRmlyc3QsXG4gICAgICAgICAgICBwYWdlTGFzdDogcGFnaW5hdGlvbi5wYWdlTGFzdCxcbiAgICAgICAgICAgIHRvdGFsOiBwYWdpbmF0aW9uLnRvdGFsXG4gICAgICAgIH0gYXMgUGFnaW5hdGlvbkNvdW50KSksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIGdldFBhZ2luYXRpb24oKTogUGFnaW5hdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnZhbHVlLnBhZ2luYXRpb247XG4gICAgfVxuXG4gICAgZ2V0TWV0YSgpOiBPYmplY3RNYXAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS52YWx1ZS5tZXRhO1xuICAgIH1cblxuICAgIGNoYW5nZVBhZ2UocGFnZTogUGFnZVNlbGVjdGlvbik6IHZvaWQge1xuICAgICAgICBsZXQgcGFnZVRvTG9hZCA9IDA7XG5cbiAgICAgICAgY29uc3QgcGFnZU1hcCA9IHt9O1xuICAgICAgICBwYWdlTWFwW1BhZ2VTZWxlY3Rpb24uRklSU1RdID0gMDtcbiAgICAgICAgcGFnZU1hcFtQYWdlU2VsZWN0aW9uLlBSRVZJT1VTXSA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5wYWdpbmF0aW9uLnByZXZpb3VzO1xuICAgICAgICBwYWdlTWFwW1BhZ2VTZWxlY3Rpb24uTkVYVF0gPSB0aGlzLmludGVybmFsU3RhdGUucGFnaW5hdGlvbi5uZXh0O1xuICAgICAgICBwYWdlTWFwW1BhZ2VTZWxlY3Rpb24uTEFTVF0gPSB0aGlzLmludGVybmFsU3RhdGUucGFnaW5hdGlvbi5sYXN0O1xuXG4gICAgICAgIGlmIChwYWdlIGluIHBhZ2VNYXAgJiYgcGFnZU1hcFtwYWdlXSA+PSAwKSB7XG4gICAgICAgICAgICBwYWdlVG9Mb2FkID0gcGFnZU1hcFtwYWdlXTtcblxuICAgICAgICAgICAgaWYgKE51bWJlcihwYWdlVG9Mb2FkKSA+IHRoaXMuaW50ZXJuYWxTdGF0ZS5wYWdpbmF0aW9uLmxhc3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYWdlVG9Mb2FkIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKHBhZ2VUb0xvYWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFBhZ2luYXRpb24gcGFnZSBzaXplXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZVNpemUgdG8gc2V0XG4gICAgICovXG4gICAgcHVibGljIHNldFBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHsuLi50aGlzLmludGVybmFsU3RhdGUucGFnaW5hdGlvbiwgcGFnZVNpemV9O1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIHBhZ2luYXRpb259KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgUGFnaW5hdGlvbiBwYWdlIHNpemVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXM/LmludGVybmFsU3RhdGU/LnBhZ2luYXRpb24/LnBhZ2VTaXplID8/IDEwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIEFQSVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlIHRvIHBhZ2Ugc2l6ZSBjaGFuZ2VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFnZVNpemVDb25maWdLZXkga2V5XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHdhdGNoUGFnZVNpemUocGFnZVNpemVDb25maWdLZXk6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHBhZ2VTaXplUHJlZmVyZW5jZSA9IHRoaXMucHJlZmVyZW5jZXNTdG9yZS5nZXRVc2VyUHJlZmVyZW5jZShwYWdlU2l6ZUNvbmZpZ0tleSk7XG4gICAgICAgIGNvbnN0IHBhZ2VTaXplQ29uZmlnID0gdGhpcy5jb25maWdTdG9yZS5nZXRDb25maWdWYWx1ZShwYWdlU2l6ZUNvbmZpZ0tleSk7XG4gICAgICAgIHRoaXMuZGV0ZXJtaW5lUGFnZVNpemUocGFnZVNpemVQcmVmZXJlbmNlLCBwYWdlU2l6ZUNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5wcmVmZXJlbmNlc1N1YiA9IHRoaXMuY29uZmlnU3RvcmUuY29uZmlncyQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMucHJlZmVyZW5jZXNTdG9yZS51c2VyUHJlZmVyZW5jZXMkKSxcbiAgICAgICAgICAgICAgICB0YXAoKFtjb25maWdzLCBwcmVmZXJlbmNlc106IFtTeXN0ZW1Db25maWdNYXAsIFVzZXJQcmVmZXJlbmNlc10pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcGFnZVNpemVDb25maWdLZXk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemVQcmVmZXJlbmNlID0gKHByZWZlcmVuY2VzICYmIHByZWZlcmVuY2VzW2tleV0pIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemVDb25maWcgPSAoY29uZmlncyAmJiBjb25maWdzW2tleV0gJiYgY29uZmlnc1trZXldLnZhbHVlKSB8fCBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0ZXJtaW5lUGFnZVNpemUoc2l6ZVByZWZlcmVuY2UsIHNpemVDb25maWcpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHBhZ2Ugc2l6ZSB0byB1c2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7fSBwYWdlU2l6ZVByZWZlcmVuY2UgdG8gdXNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhZ2VTaXplQ29uZmlnIHRvIHVzZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBkZXRlcm1pbmVQYWdlU2l6ZShwYWdlU2l6ZVByZWZlcmVuY2U6IGFueSwgcGFnZVNpemVDb25maWc6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgc2l6ZSA9IDIwO1xuXG4gICAgICAgIGlmIChwYWdlU2l6ZVByZWZlcmVuY2UpIHtcbiAgICAgICAgICAgIHNpemUgPSBwYWdlU2l6ZVByZWZlcmVuY2U7XG4gICAgICAgIH0gZWxzZSBpZiAocGFnZVNpemVDb25maWcpIHtcbiAgICAgICAgICAgIHNpemUgPSBwYXJzZUludChwYWdlU2l6ZUNvbmZpZywgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRQYWdlU2l6ZShzaXplKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlOiBSZWNvcmRMaXN0U3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5uZXh0KHRoaXMuaW50ZXJuYWxTdGF0ZSA9IHN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgcGFnZSBjb3VudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZHMgbGlzdFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYWdpbmF0aW9uIGluZm9cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlUGFnZUNvdW50KHJlY29yZHM6IFJlY29yZFtdLCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlY29yZENvdW50ID0gKHJlY29yZHMgJiYgcmVjb3Jkcy5sZW5ndGgpIHx8IDA7XG4gICAgICAgIGxldCBwYWdlRmlyc3QgPSAwO1xuICAgICAgICBsZXQgcGFnZUxhc3QgPSAwO1xuXG4gICAgICAgIGlmIChyZWNvcmRDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHBhZ2VGaXJzdCA9IHBhZ2luYXRpb24uY3VycmVudCArIDE7XG4gICAgICAgICAgICBwYWdlTGFzdCA9IHBhZ2luYXRpb24uY3VycmVudCArIHJlY29yZENvdW50O1xuICAgICAgICB9XG4gICAgICAgIHBhZ2luYXRpb24ucGFnZUZpcnN0ID0gcGFnZUZpcnN0O1xuICAgICAgICBwYWdpbmF0aW9uLnBhZ2VMYXN0ID0gcGFnZUxhc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHJlY29yZHMgY2FjaGVkIE9ic2VydmFibGUgb3IgY2FsbCB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3JpdGVyaWEgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNvcnQgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhZ2luYXRpb24gdG8gdXNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1c2VDYWNoZSBpZiB0byB1c2UgY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UmVjb3JkcyhcbiAgICAgICAgbW9kdWxlOiBzdHJpbmcsXG4gICAgICAgIGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSxcbiAgICAgICAgc29ydDogU29ydGluZ1NlbGVjdGlvbixcbiAgICAgICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvbixcbiAgICAgICAgdXNlQ2FjaGUgPSB0cnVlXG4gICAgKTogT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PiB7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FjaGUkID09IG51bGwgfHwgdXNlQ2FjaGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlJCA9IHRoaXMubGlzdEdRTC5nZXQobW9kdWxlLCBjcml0ZXJpYSwgc29ydCwgcGFnaW5hdGlvbikucGlwZShcbiAgICAgICAgICAgICAgICBzaGFyZVJlcGxheSgxKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZSQ7XG4gICAgfVxufVxuIl19