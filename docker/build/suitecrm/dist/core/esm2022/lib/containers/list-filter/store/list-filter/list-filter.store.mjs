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
import { Injectable } from '@angular/core';
import { emptyObject, isVoid } from 'common';
import { map, take, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatestWith } from 'rxjs';
import { MessageService } from '../../../../services/message/message.service';
import { SaveFilterStoreFactory } from '../saved-filter/saved-filter.store.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/message/message.service";
import * as i2 from "../saved-filter/saved-filter.store.factory";
class ListFilterStore {
    constructor(message, savedFilterStoreFactory) {
        this.message = message;
        this.savedFilterStoreFactory = savedFilterStoreFactory;
        this.panelMode = 'closable';
        this.mode = 'filter';
        this.gridButtons = null;
        this.fields = [];
        this.special = [];
        this.savedFilters = [];
        this.subs = [];
        this.filterStore = savedFilterStoreFactory.create();
    }
    init(config) {
        this.config = config;
        this.initSearchFields();
        this.initConfigUpdatesSubscription();
        this.vm$ = this.filterStore.stagingRecord$.pipe(map(stagingRecord => [stagingRecord]), tap(([savedFilter]) => {
            this.reset();
            this.splitCriteriaFields(savedFilter);
            this.initDisplayFields();
            if (this.filterStore.getMode() !== 'detail') {
                this.initGridButtons();
            }
            this.initHeaderButtons();
            this.initMyFiltersButton(this.savedFilters);
        }));
        if (this.config.panelMode) {
            this.panelMode = this.config.panelMode;
        }
        this.collapse = new BehaviorSubject(false);
        this.isCollapsed$ = this.collapse.asObservable();
        if (!isVoid(this.config.isCollapsed)) {
            this.collapse.next(this.config.isCollapsed);
        }
        this.reset();
        this.initGridButtons();
        this.initHeaderButtons();
    }
    clear() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.reset();
        this.filterStore.clear();
        this.filterStore = null;
        this.collapse.unsubscribe();
    }
    clearAuthBased() {
        this.clear();
    }
    /**
     * Reset criteria
     */
    reset() {
        this.fields = [];
        this.special = [];
    }
    /**
     * Apply current filter values
     */
    applyFilter() {
        this.filterStore.validateCriteria().pipe(take(1)).subscribe(valid => {
            if (valid) {
                if (this.config.panelMode === 'collapsible' && this.config.collapseOnSearch) {
                    this.collapse.next(true);
                }
                this.config.onSearch();
                this.config.updateFilter(this.filterStore.getBaseRecord());
                return;
            }
            this.message.addWarningMessageByKey('LBL_VALIDATION_ERRORS');
        });
    }
    /**
     * Clear the current filter
     */
    clearFilter() {
        this.config.resetFilter(false);
    }
    /**
     * Subscribe to config updates.
     * Each time the filter or metadata changes we need to:
     * - Reset the view state
     * - Re-initialize the filter subscription
     */
    initConfigUpdatesSubscription() {
        this.subs.push(this.config.filter$.pipe(combineLatestWith(this.config.searchFields$), tap(([filter, searchFields]) => {
            this.reset();
            let mode = 'edit';
            const isReadOnly = filter.readonly ?? false;
            if (isReadOnly) {
                mode = 'detail';
                this.mode = mode;
            }
            this.filterStore.initRecord(this.config.module, filter, searchFields, this.config.listFields, mode);
        })).subscribe());
        this.subs.push(this.config.savedFilters$.pipe(map(value => [value]), tap(([filters]) => {
            this.savedFilters = filters;
            this.initMyFiltersButton(filters);
        })).subscribe());
    }
    /**
     * Split fields per slots
     *
     * @param {object} savedFilter to use
     */
    splitCriteriaFields(savedFilter) {
        if (!savedFilter || !savedFilter.criteriaFields) {
            return;
        }
        Object.entries(savedFilter.criteriaFields).forEach(([key, field]) => {
            const name = field.name || key;
            if (name.includes('_only')) {
                this.special.push(field);
                return;
            }
            if (field.vardefBased) {
                const filters = savedFilter?.criteria?.filters ?? {};
                const fieldFilter = (filters[key] ?? {});
                if (!isEmpty(fieldFilter?.operator)
                    && field.display === 'none') {
                    field.display = 'default';
                }
            }
            this.fields.push(field);
        });
    }
    initSearchFields() {
        this.subs.push(this.config.searchFields$.subscribe(searchFields => {
            this.searchFields = searchFields;
        }));
    }
    initDisplayFields() {
        if (!this.searchFields || emptyObject(this.searchFields) || !this.fields) {
            this.displayFields = [];
        }
        const fields = [];
        this.fields.forEach(field => {
            const name = field.name;
            if (field.display === 'none' || field.source === 'groupField') {
                return;
            }
            if (!this.searchFields[name]) {
                field.readonly = true;
            }
            fields.push(field);
        });
        this.displayFields = fields;
    }
    /**
     * Initialize grid buttons
     */
    initGridButtons() {
        this.gridButtons = [
            {
                id: 'clear',
                labelKey: 'LBL_CLEAR_BUTTON_LABEL',
                klass: ['clear-filters-button', 'btn', 'btn-outline-danger', 'btn-sm'],
                onClick: this.clearFilter.bind(this)
            },
            {
                id: 'search',
                labelKey: 'LBL_SEARCH_BUTTON_LABEL',
                klass: ['filter-button', 'btn', 'btn-danger', 'btn-sm'],
                onClick: this.applyFilter.bind(this)
            }
        ];
    }
    /**
     * Initialize header buttons
     */
    initHeaderButtons() {
        this.closeButton = {
            onClick: () => {
                this.config.onClose();
            }
        };
    }
    initMyFiltersButton(filters) {
        if (!filters || filters.length < 1) {
            this.myFilterButton = null;
            return;
        }
        const button = {
            wrapperKlass: ['filter-select'],
            labelKey: 'LBL_SAVED_FILTER_SHORTCUT',
            klass: ['btn', 'btn-outline-light', 'btn-sm'],
            items: [],
        };
        const currentKey = this.filterStore.getRecordId();
        filters.forEach(filter => {
            const item = {
                label: filter.attributes.name,
                onClick: () => {
                    this.config.setOpenFilter(filter);
                }
            };
            if (filter.key === currentKey) {
                button.label = filter.attributes.name;
                button.labelKey = '';
                item.icon = 'filter';
                item.iconKlass = 'small';
                item.klass = 'active';
            }
            button.items.push(item);
        });
        this.myFilterButton = button;
    }
    static { this.ɵfac = function ListFilterStore_Factory(t) { return new (t || ListFilterStore)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject(i2.SaveFilterStoreFactory)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListFilterStore, factory: ListFilterStore.ɵfac }); }
}
export { ListFilterStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListFilterStore, [{
        type: Injectable
    }], function () { return [{ type: i1.MessageService }, { type: i2.SaveFilterStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1maWx0ZXIuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9saXN0LWZpbHRlci9zdG9yZS9saXN0LWZpbHRlci9saXN0LWZpbHRlci5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFHSCxXQUFXLEVBRVgsTUFBTSxFQUlULE1BQU0sUUFBUSxDQUFDO0FBQ2hCLE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxlQUFlLEVBQUUsaUJBQWlCLEVBQTJCLE1BQU0sTUFBTSxDQUFDO0FBRWxGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUM1RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQzs7OztBQUlsRixNQUNhLGVBQWU7SUEwQnhCLFlBQ2MsT0FBdUIsRUFDdkIsdUJBQStDO1FBRC9DLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBd0I7UUF6QjdELGNBQVMsR0FBd0MsVUFBVSxDQUFDO1FBQzVELFNBQUksR0FBYSxRQUFRLENBQUM7UUFPMUIsZ0JBQVcsR0FBc0IsSUFBSSxDQUFDO1FBRXRDLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFZLEVBQUUsQ0FBQztRQUt0QixpQkFBWSxHQUFrQixFQUFFLENBQUM7UUFLdkIsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFNaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyx1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QUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxHQUFHO2dCQUNULEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUk7Z0JBQzdCLE9BQU8sRUFBRSxHQUFHLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7YUFDZSxDQUFDO1lBRXJCLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxVQUFVLEVBQUU7Z0JBQzNCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2FBQ3pCO1lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUNqQyxDQUFDO2dGQTFTUSxlQUFlO3VFQUFmLGVBQWUsV0FBZixlQUFlOztTQUFmLGVBQWU7dUZBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge2lzRW1wdHl9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zdGF0ZSc7XG5pbXBvcnQge1xuICAgIEJ1dHRvbkludGVyZmFjZSxcbiAgICBEcm9wZG93bkJ1dHRvbkludGVyZmFjZSxcbiAgICBlbXB0eU9iamVjdCxcbiAgICBGaWVsZCxcbiAgICBpc1ZvaWQsXG4gICAgU2VhcmNoTWV0YUZpZWxkTWFwLFxuICAgIFZpZXdNb2RlLFxuICAgIFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXJcbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7bWFwLCB0YWtlLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7RmlsdGVyQ29uZmlnfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpc3QtZmlsdGVyL2xpc3QtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7U2F2ZUZpbHRlclN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vc2F2ZWQtZmlsdGVyL3NhdmVkLWZpbHRlci5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7U2F2ZWRGaWx0ZXJTdG9yZX0gZnJvbSAnLi4vc2F2ZWQtZmlsdGVyL3NhdmVkLWZpbHRlci5zdG9yZSc7XG5pbXBvcnQge1NhdmVkRmlsdGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0RmlsdGVyU3RvcmUgaW1wbGVtZW50cyBTdGF0ZVN0b3JlIHtcblxuICAgIGNvbmZpZzogRmlsdGVyQ29uZmlnO1xuICAgIHBhbmVsTW9kZTogJ2NvbGxhcHNpYmxlJyB8ICdjbG9zYWJsZScgfCAnbm9uZScgPSAnY2xvc2FibGUnO1xuICAgIG1vZGU6IFZpZXdNb2RlID0gJ2ZpbHRlcic7XG5cbiAgICBpc0NvbGxhcHNlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgICBjbG9zZUJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlO1xuICAgIG15RmlsdGVyQnV0dG9uOiBEcm9wZG93bkJ1dHRvbkludGVyZmFjZTtcblxuICAgIGdyaWRCdXR0b25zOiBCdXR0b25JbnRlcmZhY2VbXSA9IG51bGw7XG5cbiAgICBmaWVsZHM6IEZpZWxkW10gPSBbXTtcbiAgICBzcGVjaWFsOiBGaWVsZFtdID0gW107XG5cbiAgICB2bSQ6IE9ic2VydmFibGU8YW55PjtcblxuICAgIGZpbHRlclN0b3JlOiBTYXZlZEZpbHRlclN0b3JlO1xuICAgIHNhdmVkRmlsdGVyczogU2F2ZWRGaWx0ZXJbXSA9IFtdO1xuICAgIGRpc3BsYXlGaWVsZHM6IEZpZWxkW107XG5cbiAgICBwcm90ZWN0ZWQgY29sbGFwc2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcbiAgICBwcm90ZWN0ZWQgc2VhcmNoRmllbGRzOiBTZWFyY2hNZXRhRmllbGRNYXA7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZWRGaWx0ZXJTdG9yZUZhY3Rvcnk6IFNhdmVGaWx0ZXJTdG9yZUZhY3RvcnlcbiAgICApIHtcbiAgICAgICAgdGhpcy5maWx0ZXJTdG9yZSA9IHNhdmVkRmlsdGVyU3RvcmVGYWN0b3J5LmNyZWF0ZSgpO1xuICAgIH1cblxuXG4gICAgaW5pdChjb25maWc6IEZpbHRlckNvbmZpZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgICAgICB0aGlzLmluaXRTZWFyY2hGaWVsZHMoKTtcblxuICAgICAgICB0aGlzLmluaXRDb25maWdVcGRhdGVzU3Vic2NyaXB0aW9uKCk7XG5cbiAgICAgICAgdGhpcy52bSQgPSB0aGlzLmZpbHRlclN0b3JlLnN0YWdpbmdSZWNvcmQkLnBpcGUoXG4gICAgICAgICAgICBtYXAoc3RhZ2luZ1JlY29yZCA9PiBbc3RhZ2luZ1JlY29yZF0pLFxuICAgICAgICAgICAgdGFwKChbc2F2ZWRGaWx0ZXJdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BsaXRDcml0ZXJpYUZpZWxkcyhzYXZlZEZpbHRlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RGlzcGxheUZpZWxkcygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyU3RvcmUuZ2V0TW9kZSgpICE9PSAnZGV0YWlsJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRHcmlkQnV0dG9ucygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEhlYWRlckJ1dHRvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRNeUZpbHRlcnNCdXR0b24odGhpcy5zYXZlZEZpbHRlcnMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcucGFuZWxNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnBhbmVsTW9kZSA9IHRoaXMuY29uZmlnLnBhbmVsTW9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCQgPSB0aGlzLmNvbGxhcHNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgICBpZiAoIWlzVm9pZCh0aGlzLmNvbmZpZy5pc0NvbGxhcHNlZCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2UubmV4dCh0aGlzLmNvbmZpZy5pc0NvbGxhcHNlZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5pbml0R3JpZEJ1dHRvbnMoKTtcbiAgICAgICAgdGhpcy5pbml0SGVhZGVyQnV0dG9ucygpO1xuICAgIH1cblxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuZmlsdGVyU3RvcmUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5maWx0ZXJTdG9yZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY29sbGFwc2UudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IGNyaXRlcmlhXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZpZWxkcyA9IFtdO1xuICAgICAgICB0aGlzLnNwZWNpYWwgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBjdXJyZW50IGZpbHRlciB2YWx1ZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXBwbHlGaWx0ZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmlsdGVyU3RvcmUudmFsaWRhdGVDcml0ZXJpYSgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHZhbGlkID0+IHtcblxuICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcucGFuZWxNb2RlID09PSAnY29sbGFwc2libGUnICYmIHRoaXMuY29uZmlnLmNvbGxhcHNlT25TZWFyY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZS5uZXh0KHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uU2VhcmNoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcudXBkYXRlRmlsdGVyKHRoaXMuZmlsdGVyU3RvcmUuZ2V0QmFzZVJlY29yZCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGRXYXJuaW5nTWVzc2FnZUJ5S2V5KCdMQkxfVkFMSURBVElPTl9FUlJPUlMnKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciB0aGUgY3VycmVudCBmaWx0ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXJGaWx0ZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29uZmlnLnJlc2V0RmlsdGVyKGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmUgdG8gY29uZmlnIHVwZGF0ZXMuXG4gICAgICogRWFjaCB0aW1lIHRoZSBmaWx0ZXIgb3IgbWV0YWRhdGEgY2hhbmdlcyB3ZSBuZWVkIHRvOlxuICAgICAqIC0gUmVzZXQgdGhlIHZpZXcgc3RhdGVcbiAgICAgKiAtIFJlLWluaXRpYWxpemUgdGhlIGZpbHRlciBzdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdENvbmZpZ1VwZGF0ZXNTdWJzY3JpcHRpb24oKSB7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKFxuICAgICAgICAgICAgdGhpcy5jb25maWcuZmlsdGVyJC5waXBlKFxuICAgICAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMuY29uZmlnLnNlYXJjaEZpZWxkcyQpLFxuICAgICAgICAgICAgICAgIHRhcCgoW2ZpbHRlciwgc2VhcmNoRmllbGRzXTogW1NhdmVkRmlsdGVyLCBTZWFyY2hNZXRhRmllbGRNYXBdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGUgPSAnZWRpdCcgYXMgVmlld01vZGU7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNSZWFkT25seSA9IGZpbHRlci5yZWFkb25seSA/PyBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUmVhZE9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGUgPSAnZGV0YWlsJyBhcyBWaWV3TW9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclN0b3JlLmluaXRSZWNvcmQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5tb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hGaWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5saXN0RmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnN1YnNjcmliZSgpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2goXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5zYXZlZEZpbHRlcnMkLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKHZhbHVlID0+IFt2YWx1ZV0pLFxuICAgICAgICAgICAgICAgIHRhcCgoW2ZpbHRlcnNdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRGaWx0ZXJzID0gZmlsdGVycztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0TXlGaWx0ZXJzQnV0dG9uKGZpbHRlcnMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnN1YnNjcmliZSgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3BsaXQgZmllbGRzIHBlciBzbG90c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNhdmVkRmlsdGVyIHRvIHVzZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzcGxpdENyaXRlcmlhRmllbGRzKHNhdmVkRmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQge1xuXG4gICAgICAgIGlmICghc2F2ZWRGaWx0ZXIgfHwgIXNhdmVkRmlsdGVyLmNyaXRlcmlhRmllbGRzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZW50cmllcyhzYXZlZEZpbHRlci5jcml0ZXJpYUZpZWxkcykuZm9yRWFjaCgoW2tleSwgZmllbGRdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZmllbGQubmFtZSB8fCBrZXk7XG5cbiAgICAgICAgICAgIGlmIChuYW1lLmluY2x1ZGVzKCdfb25seScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVjaWFsLnB1c2goZmllbGQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZpZWxkLnZhcmRlZkJhc2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVycyA9IHNhdmVkRmlsdGVyPy5jcml0ZXJpYT8uZmlsdGVycyA/PyB7fTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZEZpbHRlciA9IChcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyc1trZXldID8/IHt9XG4gICAgICAgICAgICAgICAgKSBhcyBTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyO1xuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhaXNFbXB0eShmaWVsZEZpbHRlcj8ub3BlcmF0b3IpXG4gICAgICAgICAgICAgICAgICAgICYmIGZpZWxkLmRpc3BsYXkgPT09ICdub25lJ1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kaXNwbGF5ID0gJ2RlZmF1bHQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5maWVsZHMucHVzaChmaWVsZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0U2VhcmNoRmllbGRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmNvbmZpZy5zZWFyY2hGaWVsZHMkLnN1YnNjcmliZShzZWFyY2hGaWVsZHMgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hGaWVsZHMgPSBzZWFyY2hGaWVsZHM7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdERpc3BsYXlGaWVsZHMoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNlYXJjaEZpZWxkcyB8fCBlbXB0eU9iamVjdCh0aGlzLnNlYXJjaEZpZWxkcykgfHwgIXRoaXMuZmllbGRzKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlGaWVsZHMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IFtdO1xuICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmaWVsZC5uYW1lO1xuICAgICAgICAgICAgaWYgKGZpZWxkLmRpc3BsYXkgPT09ICdub25lJyB8fCBmaWVsZC5zb3VyY2UgPT09ICdncm91cEZpZWxkJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hGaWVsZHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBmaWVsZC5yZWFkb25seSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWVsZHMucHVzaChmaWVsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheUZpZWxkcyA9IGZpZWxkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGdyaWQgYnV0dG9uc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0R3JpZEJ1dHRvbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ3JpZEJ1dHRvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdjbGVhcicsXG4gICAgICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfQ0xFQVJfQlVUVE9OX0xBQkVMJyxcbiAgICAgICAgICAgICAgICBrbGFzczogWydjbGVhci1maWx0ZXJzLWJ1dHRvbicsICdidG4nLCAnYnRuLW91dGxpbmUtZGFuZ2VyJywgJ2J0bi1zbSddLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuY2xlYXJGaWx0ZXIuYmluZCh0aGlzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ3NlYXJjaCcsXG4gICAgICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfU0VBUkNIX0JVVFRPTl9MQUJFTCcsXG4gICAgICAgICAgICAgICAga2xhc3M6IFsnZmlsdGVyLWJ1dHRvbicsICdidG4nLCAnYnRuLWRhbmdlcicsICdidG4tc20nXSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLmFwcGx5RmlsdGVyLmJpbmQodGhpcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSBhcyBCdXR0b25JbnRlcmZhY2VbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGhlYWRlciBidXR0b25zXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRIZWFkZXJCdXR0b25zKCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcub25DbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRNeUZpbHRlcnNCdXR0b24oZmlsdGVyczogU2F2ZWRGaWx0ZXJbXSk6IHZvaWQge1xuXG4gICAgICAgIGlmICghZmlsdGVycyB8fCBmaWx0ZXJzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMubXlGaWx0ZXJCdXR0b24gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnV0dG9uID0ge1xuICAgICAgICAgICAgd3JhcHBlcktsYXNzOiBbJ2ZpbHRlci1zZWxlY3QnXSxcbiAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX1NBVkVEX0ZJTFRFUl9TSE9SVENVVCcsXG4gICAgICAgICAgICBrbGFzczogWydidG4nLCAnYnRuLW91dGxpbmUtbGlnaHQnLCAnYnRuLXNtJ10sXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgIH0gYXMgRHJvcGRvd25CdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgY29uc3QgY3VycmVudEtleSA9IHRoaXMuZmlsdGVyU3RvcmUuZ2V0UmVjb3JkSWQoKTtcblxuICAgICAgICBmaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGZpbHRlci5hdHRyaWJ1dGVzLm5hbWUsXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zZXRPcGVuRmlsdGVyKGZpbHRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgICAgIGlmIChmaWx0ZXIua2V5ID09PSBjdXJyZW50S2V5KSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmxhYmVsID0gZmlsdGVyLmF0dHJpYnV0ZXMubmFtZTtcbiAgICAgICAgICAgICAgICBidXR0b24ubGFiZWxLZXkgPSAnJztcbiAgICAgICAgICAgICAgICBpdGVtLmljb24gPSAnZmlsdGVyJztcbiAgICAgICAgICAgICAgICBpdGVtLmljb25LbGFzcyA9ICdzbWFsbCc7XG4gICAgICAgICAgICAgICAgaXRlbS5rbGFzcyA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24uaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5teUZpbHRlckJ1dHRvbiA9IGJ1dHRvbjtcbiAgICB9XG59XG4iXX0=