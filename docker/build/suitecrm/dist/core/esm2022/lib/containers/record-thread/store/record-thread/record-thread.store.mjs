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
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { RecordStoreList } from './base-record-thread.store';
import { timer } from 'rxjs';
import { SortDirection } from 'common';
import { map, takeWhile, tap } from 'rxjs/operators';
import { RecordThreadItemStoreFactory } from './record-thread-item.store.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record-list/record-list.store.factory";
import * as i2 from "./record-thread-item.store.factory";
class RecordThreadStore extends RecordStoreList {
    constructor(listStoreFactory, recordStoreFactory) {
        super(listStoreFactory, recordStoreFactory);
        this.listStoreFactory = listStoreFactory;
        this.recordStoreFactory = recordStoreFactory;
        this.autoRefreshEnabled = true;
        this.$loading = this.recordList.loading$;
    }
    init(module, load = true, pageSize = null) {
        super.init(module, load, pageSize);
        this.autoRefreshEnabled = true;
    }
    setFilters(filters) {
        let criteria = this.recordList.criteria;
        criteria = {
            ...criteria,
            ...filters
        };
        if (filters && filters.orderBy) {
            let sortOrder = SortDirection.DESC;
            if (filters.sortOrder && String(filters.sortOrder).toUpperCase() === 'ASC') {
                sortOrder = SortDirection.ASC;
            }
            this.recordList.updateSorting(filters.orderBy, sortOrder, false);
        }
        this.recordList.updateSearchCriteria(criteria, false);
        return this.load(false).pipe(map(value => value.records));
    }
    getItemMetadata() {
        return this.itemMetadata;
    }
    getListMetadata() {
        return this.listMetadata;
    }
    setItemMetadata(meta) {
        return this.itemMetadata = meta;
    }
    setListMetadata(meta) {
        return this.listMetadata = meta;
    }
    allLoaded() {
        const pagination = this.recordList.getPagination();
        if (!pagination) {
            return false;
        }
        return pagination.pageSize >= pagination.total;
    }
    loadMore(jump = null) {
        if (!jump) {
            jump = this.pageSize;
        }
        const pagination = this.recordList.getPagination();
        const currentPageSize = pagination.pageSize || 0;
        let newPageSize = currentPageSize + jump;
        this.recordList.setPageSize(newPageSize);
        this.recordList.updatePagination(0);
    }
    reload() {
        this.recordList.updatePagination(0);
    }
    getViewContext() {
        return {
            module: this.module,
            ids: this.getRecordIds(),
        };
    }
    initAutoRefresh(autoRefreshFrequency, min, max, onRefresh) {
        const currentDate = new Date();
        const startOfNextMinute = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes() + 1);
        const autoRefreshTime = this.getAutoRefreshTime(autoRefreshFrequency, min, max);
        return timer(startOfNextMinute, autoRefreshTime).pipe(takeWhile(() => {
            return this.autoRefreshEnabled;
        }), tap(() => {
            this.load(false).subscribe(() => {
                if (onRefresh) {
                    onRefresh();
                }
            });
        }));
    }
    disableAutoRefresh() {
        this.autoRefreshEnabled = false;
    }
    getAutoRefreshTime(autoRefreshFrequency, min, max) {
        let autoRefreshTime = (autoRefreshFrequency * (60000));
        if (min === 0 && max === 0) {
            return autoRefreshTime;
        }
        return autoRefreshTime + this.getRandomDeviation(min, max);
    }
    getRandomDeviation(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
    }
    static { this.ɵfac = function RecordThreadStore_Factory(t) { return new (t || RecordThreadStore)(i0.ɵɵinject(i1.RecordListStoreFactory), i0.ɵɵinject(i2.RecordThreadItemStoreFactory)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordThreadStore, factory: RecordThreadStore.ɵfac }); }
}
export { RecordThreadStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadStore, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordListStoreFactory }, { type: i2.RecordThreadItemStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvc3RvcmUvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFHSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQy9GLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQWEsS0FBSyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBd0MsYUFBYSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVFLE9BQU8sRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDOzs7O0FBS2hGLE1BQ2EsaUJBQWtCLFNBQVEsZUFBZ0U7SUFPbkcsWUFDYyxnQkFBd0MsRUFDeEMsa0JBQWdEO1FBRTFELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBSGxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7UUFDeEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUE4QjtRQUo5RCx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFPdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUM3QyxDQUFDO0lBRU0sSUFBSSxDQUFDLE1BQWMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLFdBQW1CLElBQUk7UUFDNUQsS0FBSyxD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QUUsR0FBRztRQUN2QixHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDcEUsQ0FBQztrRkE3SVEsaUJBQWlCO3VFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCOztTQUFqQixpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlY29yZExpc3RTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC1saXN0L3JlY29yZC1saXN0LnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtSZWNvcmRTdG9yZUxpc3R9IGZyb20gJy4vYmFzZS1yZWNvcmQtdGhyZWFkLnN0b3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgdGltZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtBY3Rpb25Db250ZXh0LCBSZWNvcmQsIFNlYXJjaENyaXRlcmlhLCBTb3J0RGlyZWN0aW9ufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHttYXAsIHRha2VXaGlsZSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1TdG9yZUZhY3Rvcnl9IGZyb20gJy4vcmVjb3JkLXRocmVhZC1pdGVtLnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRJdGVtTWV0YWRhdGF9IGZyb20gJy4vcmVjb3JkLXRocmVhZC1pdGVtLnN0b3JlLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbVN0b3JlfSBmcm9tICcuL3JlY29yZC10aHJlYWQtaXRlbS5zdG9yZSc7XG5pbXBvcnQge1JlY29yZFRocmVhZExpc3RNZXRhZGF0YX0gZnJvbSBcIi4vcmVjb3JkLXRocmVhZC1saXN0LnN0b3JlLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWNvcmRUaHJlYWRTdG9yZSBleHRlbmRzIFJlY29yZFN0b3JlTGlzdDxSZWNvcmRUaHJlYWRJdGVtU3RvcmUsIFJlY29yZFRocmVhZEl0ZW1NZXRhZGF0YT4ge1xuXG4gICAgaXRlbU1ldGFkYXRhOiBSZWNvcmRUaHJlYWRJdGVtTWV0YWRhdGE7XG4gICAgbGlzdE1ldGFkYXRhOiBSZWNvcmRUaHJlYWRMaXN0TWV0YWRhdGE7XG4gICAgJGxvYWRpbmc6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgYXV0b1JlZnJlc2hFbmFibGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdFN0b3JlRmFjdG9yeTogUmVjb3JkTGlzdFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZFN0b3JlRmFjdG9yeTogUmVjb3JkVGhyZWFkSXRlbVN0b3JlRmFjdG9yeVxuICAgICkge1xuICAgICAgICBzdXBlcihsaXN0U3RvcmVGYWN0b3J5LCByZWNvcmRTdG9yZUZhY3RvcnkpO1xuICAgICAgICB0aGlzLiRsb2FkaW5nID0gdGhpcy5yZWNvcmRMaXN0LmxvYWRpbmckO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KG1vZHVsZTogc3RyaW5nLCBsb2FkID0gdHJ1ZSwgcGFnZVNpemU6IG51bWJlciA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuaW5pdChtb2R1bGUsIGxvYWQsIHBhZ2VTaXplKTtcbiAgICAgICAgdGhpcy5hdXRvUmVmcmVzaEVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldEZpbHRlcnMoZmlsdGVyczogU2VhcmNoQ3JpdGVyaWEpOiBPYnNlcnZhYmxlPFJlY29yZFtdPiB7XG5cbiAgICAgICAgbGV0IGNyaXRlcmlhID0gdGhpcy5yZWNvcmRMaXN0LmNyaXRlcmlhO1xuICAgICAgICBjcml0ZXJpYSA9IHtcbiAgICAgICAgICAgIC4uLmNyaXRlcmlhLFxuICAgICAgICAgICAgLi4uZmlsdGVyc1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMub3JkZXJCeSkge1xuICAgICAgICAgICAgbGV0IHNvcnRPcmRlciA9IFNvcnREaXJlY3Rpb24uREVTQztcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzLnNvcnRPcmRlciAmJiBTdHJpbmcoZmlsdGVycy5zb3J0T3JkZXIpLnRvVXBwZXJDYXNlKCkgPT09ICdBU0MnKSB7XG4gICAgICAgICAgICAgICAgc29ydE9yZGVyID0gU29ydERpcmVjdGlvbi5BU0M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVjb3JkTGlzdC51cGRhdGVTb3J0aW5nKGZpbHRlcnMub3JkZXJCeSwgc29ydE9yZGVyLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlY29yZExpc3QudXBkYXRlU2VhcmNoQ3JpdGVyaWEoY3JpdGVyaWEsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZChmYWxzZSkucGlwZShcbiAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiB2YWx1ZS5yZWNvcmRzKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SXRlbU1ldGFkYXRhKCk6IFJlY29yZFRocmVhZEl0ZW1NZXRhZGF0YSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1NZXRhZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TGlzdE1ldGFkYXRhKCk6IFJlY29yZFRocmVhZExpc3RNZXRhZGF0YSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RNZXRhZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SXRlbU1ldGFkYXRhKG1ldGE6IFJlY29yZFRocmVhZEl0ZW1NZXRhZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtTWV0YWRhdGEgPSBtZXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRMaXN0TWV0YWRhdGEobWV0YTogUmVjb3JkVGhyZWFkTGlzdE1ldGFkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RNZXRhZGF0YSA9IG1ldGE7XG4gICAgfVxuXG4gICAgcHVibGljIGFsbExvYWRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHRoaXMucmVjb3JkTGlzdC5nZXRQYWdpbmF0aW9uKCk7XG4gICAgICAgIGlmICghcGFnaW5hdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2luYXRpb24ucGFnZVNpemUgPj0gcGFnaW5hdGlvbi50b3RhbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZE1vcmUoanVtcDogbnVtYmVyID0gbnVsbCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghanVtcCkge1xuICAgICAgICAgICAganVtcCA9IHRoaXMucGFnZVNpemU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYWdpbmF0aW9uID0gdGhpcy5yZWNvcmRMaXN0LmdldFBhZ2luYXRpb24oKTtcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2VTaXplID0gcGFnaW5hdGlvbi5wYWdlU2l6ZSB8fCAwO1xuICAgICAgICBsZXQgbmV3UGFnZVNpemUgPSBjdXJyZW50UGFnZVNpemUgKyBqdW1wO1xuXG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5zZXRQYWdlU2l6ZShuZXdQYWdlU2l6ZSk7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC51cGRhdGVQYWdpbmF0aW9uKDApO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC51cGRhdGVQYWdpbmF0aW9uKDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRWaWV3Q29udGV4dCgpOiBBY3Rpb25Db250ZXh0IHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLm1vZHVsZSxcbiAgICAgICAgICAgIGlkczogdGhpcy5nZXRSZWNvcmRJZHMoKSxcbiAgICAgICAgfSBhcyBBY3Rpb25Db250ZXh0O1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0QXV0b1JlZnJlc2goYXV0b1JlZnJlc2hGcmVxdWVuY3k6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyLCBvblJlZnJlc2g6IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBzdGFydE9mTmV4dE1pbnV0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIGN1cnJlbnREYXRlLmdldE1vbnRoKCksXG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5nZXREYXRlKCksXG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5nZXRIb3VycygpLFxuICAgICAgICAgICAgY3VycmVudERhdGUuZ2V0TWludXRlcygpICsgMVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGF1dG9SZWZyZXNoVGltZSA9IHRoaXMuZ2V0QXV0b1JlZnJlc2hUaW1lKGF1dG9SZWZyZXNoRnJlcXVlbmN5LCBtaW4sIG1heCk7XG5cbiAgICAgICAgcmV0dXJuIHRpbWVyKHN0YXJ0T2ZOZXh0TWludXRlLCBhdXRvUmVmcmVzaFRpbWUpLnBpcGUoXG4gICAgICAgICAgICB0YWtlV2hpbGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG9SZWZyZXNoRW5hYmxlZDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWQoZmFsc2UpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uUmVmcmVzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZGlzYWJsZUF1dG9SZWZyZXNoKCkge1xuICAgICAgICB0aGlzLmF1dG9SZWZyZXNoRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldEF1dG9SZWZyZXNoVGltZShhdXRvUmVmcmVzaEZyZXF1ZW5jeTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcblxuICAgICAgICBsZXQgYXV0b1JlZnJlc2hUaW1lID0gKGF1dG9SZWZyZXNoRnJlcXVlbmN5ICogKDYwMDAwKSk7XG5cbiAgICAgICAgaWYgKG1pbiA9PT0gMCAmJiBtYXggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBhdXRvUmVmcmVzaFRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXV0b1JlZnJlc2hUaW1lICsgdGhpcy5nZXRSYW5kb21EZXZpYXRpb24obWluLCBtYXgpO1xuICAgIH1cblxuICAgIGdldFJhbmRvbURldmlhdGlvbihtaW4sIG1heCkge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKSAqIDEwMDA7XG4gICAgfVxufVxuIl19