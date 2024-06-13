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
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { LanguageStore } from '../../../../store/language/language.store';
import { deepClone } from 'common';
import { SingleValueStatisticsStoreFactory } from '../../../../store/single-value-statistics/single-value-statistics.store.factory';
import { FilterListStoreFactory } from "../../../../store/saved-filters/filter-list.store.factory";
import { map, take, tap } from "rxjs/operators";
import { MetadataStore } from "../../../../store/metadata/metadata.store.service";
import { UserPreferenceStore } from "../../../../store/user-preference/user-preference.store";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record-list/record-list.store.factory";
import * as i2 from "../../../../store/language/language.store";
import * as i3 from "../../../../store/single-value-statistics/single-value-statistics.store.factory";
import * as i4 from "../../../../store/saved-filters/filter-list.store.factory";
import * as i5 from "../../../../store/metadata/metadata.store.service";
import * as i6 from "../../../../store/user-preference/user-preference.store";
class SubpanelStore {
    constructor(listStoreFactory, languageStore, statisticsStoreFactory, filterListStoreFactory, meta, preferences) {
        this.listStoreFactory = listStoreFactory;
        this.languageStore = languageStore;
        this.statisticsStoreFactory = statisticsStoreFactory;
        this.filterListStoreFactory = filterListStoreFactory;
        this.meta = meta;
        this.preferences = preferences;
        this.show = false;
        this.showFilter = false;
        this.filterApplied = false;
        this.preferenceKey = null;
        this.subs = [];
        this.recordList = listStoreFactory.create();
        this.filterList = this.filterListStoreFactory.create();
        this.criteria$ = this.recordList.criteria$;
        this.statistics = {};
        this.metadataState = new BehaviorSubject({});
        this.metadata$ = this.metadataState.asObservable();
        this.loading$ = this.recordList.loading$;
    }
    getTitle() {
        let label = this.languageStore.getFieldLabel(this.metadata.title_key, this.parentModule);
        if (!label) {
            const moduleList = this.languageStore.getAppListString('moduleList');
            label = (moduleList && moduleList[this.metadata.title_key]) || '';
        }
        return label;
    }
    getIcon() {
        return this.metadata.icon;
    }
    clear() {
        this.metadataState.unsubscribe();
        this.metadataState = null;
        this.recordList.clear();
        this.recordList = null;
        this.subs.forEach(sub => sub.unsubscribe());
    }
    clearAuthBased() {
        this.recordList.clearAuthBased();
    }
    searchFilter() {
        this.filterApplied = true;
        this.showFilter = false;
    }
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} parentModule name
     * @param {string} parentId id
     * @param {object} meta to use
     * @param {object} parentRecord$ to use
     */
    init(parentModule, parentId, meta, parentRecord$ = null) {
        this.parentModule = parentModule;
        this.parentId = parentId;
        this.metadata = meta;
        this.metadataState.next(this.metadata);
        const meta$ = this.meta.getMetadata(meta.module).pipe(tap(() => {
            this.recordList.load().pipe(take(1)).subscribe();
        }));
        this.searchMetadata$ = meta$.pipe(map(meta => meta.search));
        const filter = this.initSearchCriteria(this.parentModule, this.parentId, meta);
        this.recordList.init(meta.module, false, 'list_max_entries_per_subpanel', filter);
        this.initStatistics(meta, parentModule, parentId);
        if (parentRecord$) {
            this.parentRecord$ = parentRecord$;
            this.parentRecord$.subscribe(record => this.parentRecord = record);
        }
    }
    setFilters(filters, reload = true) {
        this.recordList.setFilters(filters, reload, null);
    }
    isAnyFilterApplied() {
        return this.hasActiveFilter() || !this.areAllCurrentCriteriaFilterEmpty();
    }
    hasActiveFilter() {
        const activeFilters = this.recordList.criteria;
        if (activeFilters) {
            return false;
        }
        const filterKeys = Object.keys(activeFilters) ?? [];
        if (!filterKeys || !filterKeys.length) {
            return false;
        }
        if (filterKeys.length > 1) {
            return true;
        }
        const currentFilter = activeFilters[filterKeys[0]];
        return currentFilter.key && currentFilter.key !== '' && currentFilter.key !== 'default';
    }
    areAllCurrentCriteriaFilterEmpty() {
        return Object.keys(this.getFilters() ?? {}).every(key => this.getFilters()[key].operator === '');
    }
    getFilters() {
        return this.recordList?.criteria?.filters ?? {};
    }
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordList>
     */
    load(useCache = true) {
        return this.recordList.load(useCache);
    }
    /**
     * Get statistic store
     *
     * @param {string} key key of statistic
     * @returns {object} SingleValueStatisticsStore
     */
    getStatistic(key) {
        if (!this.statistics[key]) {
            return null;
        }
        return this.statistics[key];
    }
    resetFilters(reload = true) {
        this.recordList.resetFilters(reload);
    }
    clearFilter() {
        this.resetFilters();
        this.filterApplied = false;
        this.showFilter = false;
    }
    /**
     * add search criteria
     *
     * @param {string} parentModule name
     * @param {string} parentId id
     * @param {string} subpanel name
     */
    initSearchCriteria(parentModule, parentId, meta) {
        const sortOrder = meta?.sort_order ?? 'desc';
        const orderBy = meta?.sort_by ?? '';
        return {
            key: 'default',
            module: 'saved-search',
            attributes: { contents: '' },
            criteria: {
                name: 'default',
                filters: {},
                preset: {
                    type: 'subpanel',
                    params: {
                        subpanel: meta?.name,
                        parentModule,
                        parentId
                    }
                },
                sortOrder,
                orderBy
            },
        };
    }
    /**
     * Load / reload statistics
     *
     * @param {string} key of statistic
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<Statistic>
     */
    loadStatistics(key, useCache = true) {
        if (!this.statistics[key]) {
            return null;
        }
        return this.statistics[key].load(useCache);
    }
    /**
     * Load / reload all statistics
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<Statistic>
     */
    loadAllStatistics(useCache = true) {
        if (!this.statistics || !Object.keys(this.statistics).length) {
            return null;
        }
        const stats$ = [];
        Object.keys(this.statistics).forEach(statisticKey => {
            if (!this.statistics[statisticKey]) {
                return;
            }
            stats$.push(this.loadStatistics(statisticKey, useCache));
        });
        return forkJoin(stats$);
    }
    /**
     * Should batch statistic
     *
     * @returns {boolean} shouldBatch
     */
    shouldBatchStatistic() {
        const metadata = this.metadata || {};
        return !(metadata.insightWidget && metadata.insightWidget.batch && metadata.insightWidget.batch === false);
    }
    /**
     * Set loading
     *
     * @param {string} key of statistic
     * @param {boolean} loading bool
     */
    setStatisticsLoading(key, loading) {
        if (!this.statistics[key]) {
            return;
        }
        this.statistics[key].setLoading(loading);
    }
    /**
     * Set all statistics loading
     *
     * @param {boolean} loading bool
     */
    setAllStatisticsLoading(loading) {
        if (!this.statistics || !Object.keys(this.statistics).length) {
            return;
        }
        Object.keys(this.statistics).forEach(statisticKey => {
            if (!this.statistics[statisticKey]) {
                return;
            }
            this.setStatisticsLoading(statisticKey, loading);
        });
    }
    /**
     * Set Statistic value
     *
     * @param {string} key of statistic
     * @param {object} statistic Statistic
     * @param {boolean} cache bool
     */
    setStatistics(key, statistic, cache = false) {
        if (!this.statistics[key]) {
            return;
        }
        this.statistics[key].setStatistic(key, statistic, cache);
    }
    /**
     * Get statistic query
     *
     * @param {string} key of statistic
     * @returns {object} StatisticsQuery
     */
    getStatisticQuery(key) {
        return this.statistics[key].getQuery();
    }
    /**
     * Get all statistics queries
     *
     * @returns {object} StatisticsQuery
     */
    getAllStatisticQuery() {
        if (!this.statistics || !Object.keys(this.statistics).length) {
            return {};
        }
        const queriesMap = {};
        Object.keys(this.statistics).forEach(statisticKey => {
            if (!this.statistics[statisticKey]) {
                return;
            }
            queriesMap[statisticKey] = this.getStatisticQuery(statisticKey);
        });
        return queriesMap;
    }
    /**
     * Get widget layout
     *
     * @returns {any} any
     */
    getWidgetLayout() {
        const meta = this.metadata;
        if (!meta || !meta.insightWidget || !meta.insightWidget.options || !meta.insightWidget.options.insightWidget) {
            return { rows: [] };
        }
        const layout = deepClone(meta.insightWidget.options.insightWidget);
        if (!layout.rows || !layout.rows.length) {
            layout.rows = {};
        }
        return layout;
    }
    toggleFilter() {
        return this.showFilter = !this.showFilter;
    }
    /**
     * Init statistics store
     *
     * @param {object} meta for subpanel
     * @param {string} parentModule name
     * @param {string} parentId {id}
     */
    initStatistics(meta, parentModule, parentId) {
        const layout = this.getWidgetLayout();
        layout.rows.forEach(row => {
            if (!row.cols || !row.cols.length) {
                return;
            }
            row.cols.forEach(col => {
                if (!col.statistic || typeof col.statistic !== 'string') {
                    return;
                }
                this.initStatistic(col.statistic, meta, parentModule, parentId);
                col.store = this.statistics[col.statistic];
            });
        });
    }
    /**
     * Init a single value statistic
     *
     * @param {string} statisticKey to use
     * @param {object} meta SubPanelDefinition
     * @param {string} parentModule to use
     * @param {string} parentId to use
     */
    initStatistic(statisticKey, meta, parentModule, parentId) {
        this.statistics[statisticKey] = this.statisticsStoreFactory.create();
        this.statistics[statisticKey].init(meta.module, {
            key: statisticKey,
            context: { module: parentModule, id: parentId },
            params: { subpanel: meta.name }
        }, false);
    }
    static { this.ɵfac = function SubpanelStore_Factory(t) { return new (t || SubpanelStore)(i0.ɵɵinject(i1.RecordListStoreFactory), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.SingleValueStatisticsStoreFactory), i0.ɵɵinject(i4.FilterListStoreFactory), i0.ɵɵinject(i5.MetadataStore), i0.ɵɵinject(i6.UserPreferenceStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelStore, factory: SubpanelStore.ɵfac }); }
}
export { SubpanelStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelStore, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordListStoreFactory }, { type: i2.LanguageStore }, { type: i3.SingleValueStatisticsStoreFactory }, { type: i4.FilterListStoreFactory }, { type: i5.MetadataStore }, { type: i6.UserPreferenceStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VicGFuZWwuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zdWJwYW5lbC9zdG9yZS9zdWJwYW5lbC9zdWJwYW5lbC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsZUFBZSxFQUFFLFFBQVEsRUFBMkIsTUFBTSxNQUFNLENBQUM7QUFDekUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDL0YsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFFSCxTQUFTLEVBWVosTUFBTSxRQUFRLENBQUM7QUFFaEIsT0FBTyxFQUNILGlDQUFpQyxFQUNwQyxNQUFNLGlGQUFpRixDQUFDO0FBRXpGLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDJEQUEyRCxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUVoRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5REFBeUQsQ0FBQzs7Ozs7Ozs7QUFVNUYsTUFDYSxhQUFhO0lBMkJ0QixZQUNjLGdCQUF3QyxFQUN4QyxhQUE0QixFQUM1QixzQkFBeUQsRUFDekQsc0JBQThDLEVBQzlDLElBQW1CLEVBQ25CLFdBQWdDO1FBTGhDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7UUFDeEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFtQztRQUN6RCwyQkFBc0IsR0FB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LGFBQWE7dUVBQWIsYUFBYSxXQUFiLGFBQWE7O1NBQWIsYUFBYTt1RkFBYixhQUFhO2NBRHpCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N0YXRlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7UmVjb3JkTGlzdCwgUmVjb3JkTGlzdFN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQtbGlzdC9yZWNvcmQtbGlzdC5zdG9yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgZm9ya0pvaW4sIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1JlY29yZExpc3RTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC1saXN0L3JlY29yZC1saXN0LnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge1xuICAgIENvbHVtbkRlZmluaXRpb24sXG4gICAgZGVlcENsb25lLFxuICAgIFJlY29yZCxcbiAgICBSZWNvcmRMaXN0TWV0YSxcbiAgICBTZWFyY2hDcml0ZXJpYSxcbiAgICBTZWFyY2hDcml0ZXJpYUZpbHRlcixcbiAgICBTZWFyY2hNZXRhLFxuICAgIFN0YXRpc3RpYyxcbiAgICBTdGF0aXN0aWNzTWFwLFxuICAgIFN0YXRpc3RpY3NRdWVyeSxcbiAgICBTdGF0aXN0aWNzUXVlcnlNYXAsXG4gICAgU3RhdGlzdGljV2lkZ2V0T3B0aW9ucyxcbiAgICBTdWJQYW5lbERlZmluaXRpb25cbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7U2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3NpbmdsZS12YWx1ZS1zdGF0aXN0aWNzL3NpbmdsZS12YWx1ZS1zdGF0aXN0aWNzLnN0b3JlJztcbmltcG9ydCB7XG4gICAgU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmVGYWN0b3J5XG59IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3NpbmdsZS12YWx1ZS1zdGF0aXN0aWNzL3NpbmdsZS12YWx1ZS1zdGF0aXN0aWNzLnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtGaWx0ZXJMaXN0U3RvcmV9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL2ZpbHRlci1saXN0LnN0b3JlXCI7XG5pbXBvcnQge0ZpbHRlckxpc3RTdG9yZUZhY3Rvcnl9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL2ZpbHRlci1saXN0LnN0b3JlLmZhY3RvcnlcIjtcbmltcG9ydCB7bWFwLCB0YWtlLCB0YXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZVwiO1xuaW1wb3J0IHtTYXZlZEZpbHRlciwgU2F2ZWRGaWx0ZXJNYXB9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbFwiO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN1YnBhbmVsU3RvcmVNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IFN1YnBhbmVsU3RvcmU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmVNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0b3JlO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VicGFuZWxTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuICAgIHNob3cgPSBmYWxzZTtcbiAgICBwYXJlbnRNb2R1bGU6IHN0cmluZztcbiAgICBwYXJlbnRJZDogc3RyaW5nO1xuICAgIHBhcmVudFJlY29yZCQ6IE9ic2VydmFibGU8UmVjb3JkPjtcbiAgICBwYXJlbnRSZWNvcmQ6IFJlY29yZDtcbiAgICByZWNvcmRMaXN0OiBSZWNvcmRMaXN0U3RvcmU7XG4gICAgc3RhdGlzdGljczogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmVNYXA7XG4gICAgbWV0YWRhdGEkOiBPYnNlcnZhYmxlPFN1YlBhbmVsRGVmaW5pdGlvbj47XG4gICAgbGlzdE1ldGFkYXRhJDogT2JzZXJ2YWJsZTxSZWNvcmRMaXN0TWV0YT47XG4gICAgc2VhcmNoTWV0YWRhdGEkOiBPYnNlcnZhYmxlPFNlYXJjaE1ldGE+O1xuICAgIGNvbHVtbnMkOiBPYnNlcnZhYmxlPENvbHVtbkRlZmluaXRpb25bXT47XG4gICAgbWV0YWRhdGE6IFN1YlBhbmVsRGVmaW5pdGlvbjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAgIC8vIEZpbHRlciB2YXJpYWJsZXNcbiAgICBmaWx0ZXJMaXN0OiBGaWx0ZXJMaXN0U3RvcmU7XG4gICAgY3JpdGVyaWEkOiBPYnNlcnZhYmxlPFNlYXJjaENyaXRlcmlhPjtcbiAgICBzaG93RmlsdGVyID0gZmFsc2U7XG4gICAgZmlsdGVyQXBwbGllZCA9IGZhbHNlO1xuXG4gICAgcHJlZmVyZW5jZUtleSA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgbWV0YWRhdGFTdGF0ZTogQmVoYXZpb3JTdWJqZWN0PFN1YlBhbmVsRGVmaW5pdGlvbj47XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdFN0b3JlRmFjdG9yeTogUmVjb3JkTGlzdFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzdGF0aXN0aWNzU3RvcmVGYWN0b3J5OiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZUZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCBmaWx0ZXJMaXN0U3RvcmVGYWN0b3J5OiBGaWx0ZXJMaXN0U3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICkge1xuICAgICAgICB0aGlzLnJlY29yZExpc3QgPSBsaXN0U3RvcmVGYWN0b3J5LmNyZWF0ZSgpO1xuICAgICAgICB0aGlzLmZpbHRlckxpc3QgPSB0aGlzLmZpbHRlckxpc3RTdG9yZUZhY3RvcnkuY3JlYXRlKCk7XG4gICAgICAgIHRoaXMuY3JpdGVyaWEkID0gdGhpcy5yZWNvcmRMaXN0LmNyaXRlcmlhJDtcbiAgICAgICAgdGhpcy5zdGF0aXN0aWNzID0ge307XG4gICAgICAgIHRoaXMubWV0YWRhdGFTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U3ViUGFuZWxEZWZpbml0aW9uPih7fSBhcyBTdWJQYW5lbERlZmluaXRpb24pO1xuICAgICAgICB0aGlzLm1ldGFkYXRhJCA9IHRoaXMubWV0YWRhdGFTdGF0ZS5hc09ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMucmVjb3JkTGlzdC5sb2FkaW5nJDtcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0RmllbGRMYWJlbCh0aGlzLm1ldGFkYXRhLnRpdGxlX2tleSwgdGhpcy5wYXJlbnRNb2R1bGUpO1xuXG4gICAgICAgIGlmICghbGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZUxpc3QgPSB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0QXBwTGlzdFN0cmluZygnbW9kdWxlTGlzdCcpO1xuICAgICAgICAgICAgbGFiZWwgPSAobW9kdWxlTGlzdCAmJiBtb2R1bGVMaXN0W3RoaXMubWV0YWRhdGEudGl0bGVfa2V5XSkgfHwgJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgZ2V0SWNvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXRhZGF0YS5pY29uO1xuICAgIH1cblxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1ldGFkYXRhU3RhdGUudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5tZXRhZGF0YVN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgY2xlYXJBdXRoQmFzZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5jbGVhckF1dGhCYXNlZCgpO1xuICAgIH1cblxuICAgIHNlYXJjaEZpbHRlcigpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJBcHBsaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93RmlsdGVyID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBsaXN0IHJlY29yZHMgbG9hZCBpZiBub3QgY2FjaGVkIGFuZCB1cGRhdGUgc3RhdGUuXG4gICAgICogUmV0dXJucyBvYnNlcnZhYmxlIHRvIGJlIHVzZWQgaW4gcmVzb2x2ZXIgaWYgbmVlZGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50TW9kdWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50SWQgaWRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyZW50UmVjb3JkJCB0byB1c2VcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdChwYXJlbnRNb2R1bGU6IHN0cmluZywgcGFyZW50SWQ6IHN0cmluZywgbWV0YTogU3ViUGFuZWxEZWZpbml0aW9uLCBwYXJlbnRSZWNvcmQkOiBPYnNlcnZhYmxlPFJlY29yZD4gPSBudWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFyZW50TW9kdWxlID0gcGFyZW50TW9kdWxlO1xuICAgICAgICB0aGlzLnBhcmVudElkID0gcGFyZW50SWQ7XG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSBtZXRhO1xuICAgICAgICB0aGlzLm1ldGFkYXRhU3RhdGUubmV4dCh0aGlzLm1ldGFkYXRhKTtcbiAgICAgICAgY29uc3QgbWV0YSQgPSB0aGlzLm1ldGEuZ2V0TWV0YWRhdGEobWV0YS5tb2R1bGUpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkTGlzdC5sb2FkKCkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgdGFrZSgxKVxuICAgICAgICAgICAgICAgICkuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc2VhcmNoTWV0YWRhdGEkID0gbWV0YSQucGlwZShtYXAobWV0YSA9PiBtZXRhLnNlYXJjaCkpO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmluaXRTZWFyY2hDcml0ZXJpYSh0aGlzLnBhcmVudE1vZHVsZSwgdGhpcy5wYXJlbnRJZCwgbWV0YSk7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5pbml0KG1ldGEubW9kdWxlLCBmYWxzZSwgJ2xpc3RfbWF4X2VudHJpZXNfcGVyX3N1YnBhbmVsJywgZmlsdGVyKVxuXG4gICAgICAgIHRoaXMuaW5pdFN0YXRpc3RpY3MobWV0YSwgcGFyZW50TW9kdWxlLCBwYXJlbnRJZCk7XG5cbiAgICAgICAgaWYgKHBhcmVudFJlY29yZCQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50UmVjb3JkJCA9IHBhcmVudFJlY29yZCQ7XG4gICAgICAgICAgICB0aGlzLnBhcmVudFJlY29yZCQuc3Vic2NyaWJlKHJlY29yZCA9PiB0aGlzLnBhcmVudFJlY29yZCA9IHJlY29yZCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRGaWx0ZXJzKGZpbHRlcnM6IFNhdmVkRmlsdGVyTWFwLCByZWxvYWQgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5zZXRGaWx0ZXJzKGZpbHRlcnMsIHJlbG9hZCwgbnVsbCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzQW55RmlsdGVyQXBwbGllZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQWN0aXZlRmlsdGVyKCkgfHwgIXRoaXMuYXJlQWxsQ3VycmVudENyaXRlcmlhRmlsdGVyRW1wdHkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzQWN0aXZlRmlsdGVyKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBhY3RpdmVGaWx0ZXJzID0gdGhpcy5yZWNvcmRMaXN0LmNyaXRlcmlhO1xuXG4gICAgICAgIGlmIChhY3RpdmVGaWx0ZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWx0ZXJLZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRmlsdGVycykgPz8gW107XG5cbiAgICAgICAgaWYgKCFmaWx0ZXJLZXlzIHx8ICFmaWx0ZXJLZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbHRlcktleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdXJyZW50RmlsdGVyID0gYWN0aXZlRmlsdGVyc1tmaWx0ZXJLZXlzWzBdXTtcblxuICAgICAgICByZXR1cm4gY3VycmVudEZpbHRlci5rZXkgJiYgY3VycmVudEZpbHRlci5rZXkgIT09ICcnICYmIGN1cnJlbnRGaWx0ZXIua2V5ICE9PSAnZGVmYXVsdCdcbiAgICB9XG5cbiAgICBwdWJsaWMgYXJlQWxsQ3VycmVudENyaXRlcmlhRmlsdGVyRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEZpbHRlcnMoKSA/PyB7fSkuZXZlcnkoa2V5ID0+IHRoaXMuZ2V0RmlsdGVycygpW2tleV0ub3BlcmF0b3IgPT09ICcnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmlsdGVycygpOiBTZWFyY2hDcml0ZXJpYUZpbHRlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZExpc3Q/LmNyaXRlcmlhPy5maWx0ZXJzID8/IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgLyByZWxvYWQgcmVjb3JkcyB1c2luZyBjdXJyZW50IHBhZ2luYXRpb24gYW5kIGNyaXRlcmlhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUNhY2hlIGlmIHRvIHVzZSBjYWNoZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8UmVjb3JkTGlzdD5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZCh1c2VDYWNoZSA9IHRydWUpOiBPYnNlcnZhYmxlPFJlY29yZExpc3Q+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkTGlzdC5sb2FkKHVzZUNhY2hlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc3RhdGlzdGljIHN0b3JlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IGtleSBvZiBzdGF0aXN0aWNcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTdGF0aXN0aWMoa2V5OiBzdHJpbmcpOiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0aXN0aWNzW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGlzdGljc1trZXldO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldEZpbHRlcnMocmVsb2FkID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlY29yZExpc3QucmVzZXRGaWx0ZXJzKHJlbG9hZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyRmlsdGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc2V0RmlsdGVycygpO1xuICAgICAgICB0aGlzLmZpbHRlckFwcGxpZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93RmlsdGVyID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYWRkIHNlYXJjaCBjcml0ZXJpYVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudE1vZHVsZSBuYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudElkIGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN1YnBhbmVsIG5hbWVcbiAgICAgKi9cbiAgICBpbml0U2VhcmNoQ3JpdGVyaWEocGFyZW50TW9kdWxlOiBzdHJpbmcsIHBhcmVudElkOiBzdHJpbmcsIG1ldGE6IFN1YlBhbmVsRGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBzb3J0T3JkZXIgPSBtZXRhPy5zb3J0X29yZGVyID8/ICdkZXNjJztcbiAgICAgICAgY29uc3Qgb3JkZXJCeSA9IG1ldGE/LnNvcnRfYnkgPz8gJyc7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgIG1vZHVsZTogJ3NhdmVkLXNlYXJjaCcsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7Y29udGVudHM6ICcnfSxcbiAgICAgICAgICAgIGNyaXRlcmlhOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IHt9LFxuICAgICAgICAgICAgICAgIHByZXNldDoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VicGFuZWwnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnBhbmVsOiBtZXRhPy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50TW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc29ydE9yZGVyLFxuICAgICAgICAgICAgICAgIG9yZGVyQnlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0gYXMgU2F2ZWRGaWx0ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCAvIHJlbG9hZCBzdGF0aXN0aWNzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IG9mIHN0YXRpc3RpY1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxTdGF0aXN0aWM+XG4gICAgICovXG4gICAgcHVibGljIGxvYWRTdGF0aXN0aWNzKGtleTogc3RyaW5nLCB1c2VDYWNoZSA9IHRydWUpOiBPYnNlcnZhYmxlPFN0YXRpc3RpYz4ge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGlzdGljc1trZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRpc3RpY3Nba2V5XS5sb2FkKHVzZUNhY2hlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIC8gcmVsb2FkIGFsbCBzdGF0aXN0aWNzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUNhY2hlIGlmIHRvIHVzZSBjYWNoZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8U3RhdGlzdGljPlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkQWxsU3RhdGlzdGljcyh1c2VDYWNoZSA9IHRydWUpOiBPYnNlcnZhYmxlPFN0YXRpc3RpY1tdPiB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0aXN0aWNzIHx8ICFPYmplY3Qua2V5cyh0aGlzLnN0YXRpc3RpY3MpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IHN0YXRzJCA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRpc3RpY3MpLmZvckVhY2goc3RhdGlzdGljS2V5ID0+IHtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRpc3RpY3Nbc3RhdGlzdGljS2V5XSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRzJC5wdXNoKHRoaXMubG9hZFN0YXRpc3RpY3Moc3RhdGlzdGljS2V5LCB1c2VDYWNoZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZm9ya0pvaW4oc3RhdHMkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgYmF0Y2ggc3RhdGlzdGljXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gc2hvdWxkQmF0Y2hcbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvdWxkQmF0Y2hTdGF0aXN0aWMoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhOiBTdWJQYW5lbERlZmluaXRpb24gPSB0aGlzLm1ldGFkYXRhIHx8IHt9IGFzIFN1YlBhbmVsRGVmaW5pdGlvbjtcbiAgICAgICAgcmV0dXJuICEobWV0YWRhdGEuaW5zaWdodFdpZGdldCAmJiBtZXRhZGF0YS5pbnNpZ2h0V2lkZ2V0LmJhdGNoICYmIG1ldGFkYXRhLmluc2lnaHRXaWRnZXQuYmF0Y2ggPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgbG9hZGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBvZiBzdGF0aXN0aWNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRpbmcgYm9vbFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTdGF0aXN0aWNzTG9hZGluZyhrZXk6IHN0cmluZywgbG9hZGluZzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGlzdGljc1trZXldKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0aXN0aWNzW2tleV0uc2V0TG9hZGluZyhsb2FkaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYWxsIHN0YXRpc3RpY3MgbG9hZGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nIGJvb2xcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0QWxsU3RhdGlzdGljc0xvYWRpbmcobG9hZGluZzogYm9vbGVhbik6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0aXN0aWNzIHx8ICFPYmplY3Qua2V5cyh0aGlzLnN0YXRpc3RpY3MpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0aXN0aWNzKS5mb3JFYWNoKHN0YXRpc3RpY0tleSA9PiB7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0aXN0aWNzW3N0YXRpc3RpY0tleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRpc3RpY3NMb2FkaW5nKHN0YXRpc3RpY0tleSwgbG9hZGluZyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBTdGF0aXN0aWMgdmFsdWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgb2Ygc3RhdGlzdGljXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRpc3RpYyBTdGF0aXN0aWNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNhY2hlIGJvb2xcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U3RhdGlzdGljcyhrZXk6IHN0cmluZywgc3RhdGlzdGljOiBTdGF0aXN0aWMsIGNhY2hlID0gZmFsc2UpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRpc3RpY3Nba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGlzdGljc1trZXldLnNldFN0YXRpc3RpYyhrZXksIHN0YXRpc3RpYywgY2FjaGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBzdGF0aXN0aWMgcXVlcnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgb2Ygc3RhdGlzdGljXG4gICAgICogQHJldHVybnMge29iamVjdH0gU3RhdGlzdGljc1F1ZXJ5XG4gICAgICovXG4gICAgcHVibGljIGdldFN0YXRpc3RpY1F1ZXJ5KGtleTogc3RyaW5nKTogU3RhdGlzdGljc1F1ZXJ5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGlzdGljc1trZXldLmdldFF1ZXJ5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBzdGF0aXN0aWNzIHF1ZXJpZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IFN0YXRpc3RpY3NRdWVyeVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBbGxTdGF0aXN0aWNRdWVyeSgpOiBTdGF0aXN0aWNzUXVlcnlNYXAge1xuXG4gICAgICAgIGlmICghdGhpcy5zdGF0aXN0aWNzIHx8ICFPYmplY3Qua2V5cyh0aGlzLnN0YXRpc3RpY3MpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcXVlcmllc01hcCA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGlzdGljcykuZm9yRWFjaChzdGF0aXN0aWNLZXkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGlzdGljc1tzdGF0aXN0aWNLZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcmllc01hcFtzdGF0aXN0aWNLZXldID0gdGhpcy5nZXRTdGF0aXN0aWNRdWVyeShzdGF0aXN0aWNLZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcXVlcmllc01hcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgd2lkZ2V0IGxheW91dFxuICAgICAqXG4gICAgICogQHJldHVybnMge2FueX0gYW55XG4gICAgICovXG4gICAgcHVibGljIGdldFdpZGdldExheW91dCgpOiBTdGF0aXN0aWNXaWRnZXRPcHRpb25zIHtcblxuICAgICAgICBjb25zdCBtZXRhID0gdGhpcy5tZXRhZGF0YTtcbiAgICAgICAgaWYgKCFtZXRhIHx8ICFtZXRhLmluc2lnaHRXaWRnZXQgfHwgIW1ldGEuaW5zaWdodFdpZGdldC5vcHRpb25zIHx8ICFtZXRhLmluc2lnaHRXaWRnZXQub3B0aW9ucy5pbnNpZ2h0V2lkZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4ge3Jvd3M6IFtdfSBhcyBTdGF0aXN0aWNXaWRnZXRPcHRpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGF5b3V0ID0gZGVlcENsb25lKG1ldGEuaW5zaWdodFdpZGdldC5vcHRpb25zLmluc2lnaHRXaWRnZXQpO1xuXG4gICAgICAgIGlmICghbGF5b3V0LnJvd3MgfHwgIWxheW91dC5yb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGF5b3V0LnJvd3MgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYXlvdXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZUZpbHRlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0ZpbHRlciA9ICF0aGlzLnNob3dGaWx0ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBzdGF0aXN0aWNzIHN0b3JlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YSBmb3Igc3VicGFuZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50TW9kdWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50SWQge2lkfVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0U3RhdGlzdGljcyhtZXRhOiBTdWJQYW5lbERlZmluaXRpb24sIHBhcmVudE1vZHVsZTogc3RyaW5nLCBwYXJlbnRJZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgbGF5b3V0ID0gdGhpcy5nZXRXaWRnZXRMYXlvdXQoKTtcblxuICAgICAgICBsYXlvdXQucm93cy5mb3JFYWNoKHJvdyA9PiB7XG5cbiAgICAgICAgICAgIGlmICghcm93LmNvbHMgfHwgIXJvdy5jb2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93LmNvbHMuZm9yRWFjaChjb2wgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjb2wuc3RhdGlzdGljIHx8IHR5cGVvZiBjb2wuc3RhdGlzdGljICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U3RhdGlzdGljKGNvbC5zdGF0aXN0aWMsIG1ldGEsIHBhcmVudE1vZHVsZSwgcGFyZW50SWQpO1xuICAgICAgICAgICAgICAgIGNvbC5zdG9yZSA9IHRoaXMuc3RhdGlzdGljc1tjb2wuc3RhdGlzdGljXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGEgc2luZ2xlIHZhbHVlIHN0YXRpc3RpY1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRpc3RpY0tleSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YSBTdWJQYW5lbERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50TW9kdWxlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRJZCB0byB1c2VcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdFN0YXRpc3RpYyhzdGF0aXN0aWNLZXk6IHN0cmluZywgbWV0YTogU3ViUGFuZWxEZWZpbml0aW9uLCBwYXJlbnRNb2R1bGU6IHN0cmluZywgcGFyZW50SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRpc3RpY3Nbc3RhdGlzdGljS2V5XSA9IHRoaXMuc3RhdGlzdGljc1N0b3JlRmFjdG9yeS5jcmVhdGUoKTtcblxuICAgICAgICB0aGlzLnN0YXRpc3RpY3Nbc3RhdGlzdGljS2V5XS5pbml0KFxuICAgICAgICAgICAgbWV0YS5tb2R1bGUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBzdGF0aXN0aWNLZXksXG4gICAgICAgICAgICAgICAgY29udGV4dDoge21vZHVsZTogcGFyZW50TW9kdWxlLCBpZDogcGFyZW50SWR9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge3N1YnBhbmVsOiBtZXRhLm5hbWV9XG4gICAgICAgICAgICB9IGFzIFN0YXRpc3RpY3NRdWVyeSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19