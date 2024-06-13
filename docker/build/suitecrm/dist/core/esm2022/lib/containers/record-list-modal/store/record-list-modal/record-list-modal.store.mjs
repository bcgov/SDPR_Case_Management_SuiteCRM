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
import { BehaviorSubject } from 'rxjs';
import { emptyObject } from 'common';
import { map, take, tap } from 'rxjs/operators';
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record-list/record-list.store.factory";
import * as i2 from "../../../../store/metadata/metadata.store.service";
import * as i3 from "../../../../store/user-preference/user-preference.store";
class RecordListModalStore {
    constructor(listStoreFactory, meta, preferences) {
        this.listStoreFactory = listStoreFactory;
        this.meta = meta;
        this.preferences = preferences;
        this.module = '';
        this.parentModule = '';
        this.recordList = listStoreFactory.create();
        this.loading$ = this.recordList.loading$;
        this.metadataLoadingState = new BehaviorSubject(false);
        this.linkClickedState = new BehaviorSubject(false);
        this.linkClicked$ = this.linkClickedState.asObservable();
        this.metadataLoading$ = this.metadataLoadingState.asObservable();
        this.selection$ = this.recordList.selection$;
        this.selectedCount$ = this.recordList.selectedCount$;
        this.selectedStatus$ = this.recordList.selectedStatus$;
    }
    clear() {
        this.recordList.clear();
        this.recordList = null;
    }
    clearAuthBased() {
        this.recordList.clearAuthBased();
    }
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module name
     * @param {string} parentModule
     */
    init(module, parentModule = '') {
        this.module = module;
        this.parentModule = parentModule;
        this.loadCurrentSort();
        this.metadataLoadingState.next(true);
        const meta$ = this.meta.getMetadata(module).pipe(tap(() => {
            this.metadataLoadingState.next(false);
            this.recordList.load().pipe(take(1)).subscribe();
        }));
        this.listMetadata$ = meta$.pipe(map(meta => meta.listView));
        this.searchMetadata$ = meta$.pipe(map(meta => meta.search));
        this.recordList.init(module, false, 'list_max_entries_per_modal');
        this.columns$ = this.listMetadata$.pipe(map(metadata => metadata.fields));
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
     * Load current sorting
     */
    loadCurrentSort() {
        if (!this.parentModule) {
            return;
        }
        const currentSort = this.loadPreference(this.parentModule, 'current-sort');
        if (!currentSort || emptyObject(currentSort)) {
            return;
        }
        this.recordList.sort = currentSort;
    }
    /**
     * Load current sorting
     */
    saveCurrentSort() {
        if (!this.parentModule) {
            return;
        }
        this.savePreference(this.parentModule, 'current-sort', this.recordList.sort);
    }
    /**
     * Emit Clicked Event
     */
    emitLinkClicked() {
        this.linkClickedState.next(true);
    }
    /**
     * Build ui user preference key
     * @param storageKey
     * @protected
     */
    getPreferenceKey(storageKey) {
        return this.module + '-record-list-modal-' + storageKey;
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
     * @param parentModule
     * @param storageKey
     * @protected
     */
    loadPreference(parentModule, storageKey) {
        return this.preferences.getUi(parentModule, this.getPreferenceKey(storageKey));
    }
    static { this.ɵfac = function RecordListModalStore_Factory(t) { return new (t || RecordListModalStore)(i0.ɵɵinject(i1.RecordListStoreFactory), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.UserPreferenceStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordListModalStore, factory: RecordListModalStore.ɵfac }); }
}
export { RecordListModalStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordListModalStore, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordListStoreFactory }, { type: i2.MetadataStore }, { type: i3.UserPreferenceStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWxpc3QtbW9kYWwuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtbGlzdC1tb2RhbC9zdG9yZS9yZWNvcmQtbGlzdC1tb2RhbC9yZWNvcmQtbGlzdC1tb2RhbC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBbUIsV0FBVyxFQUErRCxNQUFNLFFBQVEsQ0FBQztBQUNuSCxPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUMvRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFHaEYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seURBQXlELENBQUM7Ozs7O0FBRTVGLE1BQ2Esb0JBQW9CO0lBa0I3QixZQUNjLGdCQUF3QyxFQUN4QyxJQUFtQixFQUNuQixXQUFnQztRQUZoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXdCO1FBQ3hDLFNBQUksR0FBSixJQUFJLENBQWU7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO1FBbkI5QyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBb0J0QixJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFF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QUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZUFBZTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNwQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZUFBZTtRQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sZ0JBQWdCLENBQUMsVUFBa0I7UUFDekMsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFxQixHQUFHLFVBQVUsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ08sY0FBYyxDQUFDLE1BQWMsRUFBRSxVQUFrQixFQUFFLEtBQVU7UUFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxjQUFjLENBQUMsWUFBb0IsRUFBRSxVQUFrQjtRQUM3RCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO3FGQWxKUSxvQkFBb0I7dUVBQXBCLG9CQUFvQixXQUFwQixvQkFBb0I7O1NBQXBCLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0NvbHVtbkRlZmluaXRpb24sIGVtcHR5T2JqZWN0LCBSZWNvcmRMaXN0TWV0YSwgUmVjb3JkU2VsZWN0aW9uLCBTZWFyY2hNZXRhLCBTZWxlY3Rpb25TdGF0dXN9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge21hcCwgdGFrZSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1JlY29yZExpc3RTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC1saXN0L3JlY29yZC1saXN0LnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkTGlzdCwgUmVjb3JkTGlzdFN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQtbGlzdC9yZWNvcmQtbGlzdC5zdG9yZSc7XG5pbXBvcnQge1N0YXRlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWNvcmRMaXN0TW9kYWxTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuXG4gICAgbW9kdWxlOiBzdHJpbmcgPSAnJztcbiAgICBwYXJlbnRNb2R1bGU6IHN0cmluZyA9ICcnO1xuICAgIHJlY29yZExpc3Q6IFJlY29yZExpc3RTdG9yZTtcbiAgICBsaXN0TWV0YWRhdGEkOiBPYnNlcnZhYmxlPFJlY29yZExpc3RNZXRhPjtcbiAgICBzZWFyY2hNZXRhZGF0YSQ6IE9ic2VydmFibGU8U2VhcmNoTWV0YT47XG4gICAgc2VsZWN0aW9uJDogT2JzZXJ2YWJsZTxSZWNvcmRTZWxlY3Rpb24+O1xuICAgIHNlbGVjdGVkQ291bnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgc2VsZWN0ZWRTdGF0dXMkOiBPYnNlcnZhYmxlPFNlbGVjdGlvblN0YXR1cz47XG4gICAgY29sdW1ucyQ6IE9ic2VydmFibGU8Q29sdW1uRGVmaW5pdGlvbltdPjtcbiAgICBsaXN0TWV0YWRhdGE6IFJlY29yZExpc3RNZXRhO1xuICAgIGxpbmtDbGlja2VkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBtZXRhZGF0YUxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHByb3RlY3RlZCBtZXRhZGF0YUxvYWRpbmdTdGF0ZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xuICAgIHByb3RlY3RlZCBsaW5rQ2xpY2tlZFN0YXRlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxpc3RTdG9yZUZhY3Rvcnk6IFJlY29yZExpc3RTdG9yZUZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCBtZXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmVcbiAgICApIHtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0ID0gbGlzdFN0b3JlRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMucmVjb3JkTGlzdC5sb2FkaW5nJDtcblxuICAgICAgICB0aGlzLm1ldGFkYXRhTG9hZGluZ1N0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gICAgICAgIHRoaXMubGlua0NsaWNrZWRTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICAgICAgICB0aGlzLmxpbmtDbGlja2VkJCA9IHRoaXMubGlua0NsaWNrZWRTdGF0ZS5hc09ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5tZXRhZGF0YUxvYWRpbmckID0gdGhpcy5tZXRhZGF0YUxvYWRpbmdTdGF0ZS5hc09ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24kID0gdGhpcy5yZWNvcmRMaXN0LnNlbGVjdGlvbiQ7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudCQgPSB0aGlzLnJlY29yZExpc3Quc2VsZWN0ZWRDb3VudCQ7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTdGF0dXMkID0gdGhpcy5yZWNvcmRMaXN0LnNlbGVjdGVkU3RhdHVzJDtcbiAgICB9XG5cbiAgICBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdCA9IG51bGw7XG4gICAgfVxuXG4gICAgY2xlYXJBdXRoQmFzZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5jbGVhckF1dGhCYXNlZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgbGlzdCByZWNvcmRzIGxvYWQgaWYgbm90IGNhY2hlZCBhbmQgdXBkYXRlIHN0YXRlLlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSB0byBiZSB1c2VkIGluIHJlc29sdmVyIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBuYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudE1vZHVsZVxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0KG1vZHVsZTogc3RyaW5nLCBwYXJlbnRNb2R1bGU6IHN0cmluZyA9ICcnKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLnBhcmVudE1vZHVsZSA9IHBhcmVudE1vZHVsZTtcblxuICAgICAgICB0aGlzLmxvYWRDdXJyZW50U29ydCgpO1xuXG4gICAgICAgIHRoaXMubWV0YWRhdGFMb2FkaW5nU3RhdGUubmV4dCh0cnVlKTtcbiAgICAgICAgY29uc3QgbWV0YSQgPSB0aGlzLm1ldGEuZ2V0TWV0YWRhdGEobW9kdWxlKS5waXBlKFxuICAgICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGFkYXRhTG9hZGluZ1N0YXRlLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkTGlzdC5sb2FkKCkucGlwZShcbiAgICAgICAgICAgICAgICAgICAgdGFrZSgxKVxuICAgICAgICAgICAgICAgICkuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmxpc3RNZXRhZGF0YSQgPSBtZXRhJC5waXBlKG1hcChtZXRhID0+IG1ldGEubGlzdFZpZXcpKTtcbiAgICAgICAgdGhpcy5zZWFyY2hNZXRhZGF0YSQgPSBtZXRhJC5waXBlKG1hcChtZXRhID0+IG1ldGEuc2VhcmNoKSk7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5pbml0KG1vZHVsZSwgZmFsc2UsICdsaXN0X21heF9lbnRyaWVzX3Blcl9tb2RhbCcpO1xuICAgICAgICB0aGlzLmNvbHVtbnMkID0gdGhpcy5saXN0TWV0YWRhdGEkLnBpcGUobWFwKG1ldGFkYXRhID0+IG1ldGFkYXRhLmZpZWxkcykpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTG9hZCAvIHJlbG9hZCByZWNvcmRzIHVzaW5nIGN1cnJlbnQgcGFnaW5hdGlvbiBhbmQgY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8UmVjb3JkTGlzdD4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZExpc3QubG9hZCh1c2VDYWNoZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBjdXJyZW50IHNvcnRpbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZEN1cnJlbnRTb3J0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMucGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdXJyZW50U29ydCA9IHRoaXMubG9hZFByZWZlcmVuY2UodGhpcy5wYXJlbnRNb2R1bGUsICdjdXJyZW50LXNvcnQnKTtcbiAgICAgICAgaWYgKCFjdXJyZW50U29ydCB8fCBlbXB0eU9iamVjdChjdXJyZW50U29ydCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5zb3J0ID0gY3VycmVudFNvcnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBjdXJyZW50IHNvcnRpbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgc2F2ZUN1cnJlbnRTb3J0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMucGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNhdmVQcmVmZXJlbmNlKHRoaXMucGFyZW50TW9kdWxlLCAnY3VycmVudC1zb3J0JywgdGhpcy5yZWNvcmRMaXN0LnNvcnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtaXQgQ2xpY2tlZCBFdmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBlbWl0TGlua0NsaWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGlua0NsaWNrZWRTdGF0ZS5uZXh0KHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHVpIHVzZXIgcHJlZmVyZW5jZSBrZXlcbiAgICAgKiBAcGFyYW0gc3RvcmFnZUtleVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UHJlZmVyZW5jZUtleShzdG9yYWdlS2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGUgKyAnLXJlY29yZC1saXN0LW1vZGFsLScgKyBzdG9yYWdlS2V5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgdWkgdXNlciBwcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSBzdG9yYWdlS2V5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzYXZlUHJlZmVyZW5jZShtb2R1bGU6IHN0cmluZywgc3RvcmFnZUtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJlZmVyZW5jZXMuc2V0VWkobW9kdWxlLCB0aGlzLmdldFByZWZlcmVuY2VLZXkoc3RvcmFnZUtleSksIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHVpIHVzZXIgcHJlZmVyZW5jZVxuICAgICAqIEBwYXJhbSBwYXJlbnRNb2R1bGVcbiAgICAgKiBAcGFyYW0gc3RvcmFnZUtleVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZFByZWZlcmVuY2UocGFyZW50TW9kdWxlOiBzdHJpbmcsIHN0b3JhZ2VLZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZlcmVuY2VzLmdldFVpKHBhcmVudE1vZHVsZSwgdGhpcy5nZXRQcmVmZXJlbmNlS2V5KHN0b3JhZ2VLZXkpKTtcbiAgICB9XG59XG4iXX0=