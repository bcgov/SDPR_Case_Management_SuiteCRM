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
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { map, take, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record-list/record-list.store.factory";
class RecordStoreList {
    constructor(listStoreFactory, recordStoreFactory) {
        this.listStoreFactory = listStoreFactory;
        this.recordStoreFactory = recordStoreFactory;
        this.subs = [];
        this.stores = [];
        this.storeSubject = new BehaviorSubject([]);
        this.state$ = this.storeSubject.asObservable();
        this.pageSize = 10;
        this.recordList = listStoreFactory.create();
        this.stores$ = this.state$;
        this.storesMap$ = this.stores$.pipe(map(stores => {
            return this.getStoreMap(stores);
        }));
    }
    clear() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    clearAuthBased() {
    }
    getItemMetadata() {
        return null;
    }
    getRecordList() {
        return this.recordList;
    }
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @param {boolean} load
     * @param {number} pageSize
     */
    init(module, load = true, pageSize = null) {
        let pageSizeConfigKey = 'list_max_entries_per_record_thread';
        if (pageSize && isFinite(pageSize)) {
            pageSizeConfigKey = '';
            this.recordList.setPageSize(pageSize);
        }
        const load$ = this.recordList.init(module, load, pageSizeConfigKey);
        this.pageSize = this.recordList.getPageSize();
        this.subs.push(this.recordList.records$.subscribe(records => {
            this.initStores(records);
        }));
        if (!load$) {
            return;
        }
        load$.pipe(tap((recordList) => {
            this.initStores(recordList.records);
        })).pipe(take(1)).subscribe();
        this.module = module;
    }
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordList>
     */
    load(useCache = true) {
        return this.recordList.load(useCache).pipe(tap((recordList) => {
            this.initStores(recordList.records);
        }));
    }
    /**
     * Init record stores using records
     * @param records
     */
    initStores(records) {
        if (!records) {
            return;
        }
        const newStores = {};
        const storesArray = [];
        const storesMap = this.getStoreMap(this.stores);
        records.forEach(record => {
            if (!record || !record.id) {
                return;
            }
            const id = record.id;
            if (storesMap[id]) {
                const store = storesMap[id];
                store.setRecord(record);
                newStores[id] = store;
                storesArray.push(store);
                return;
            }
            newStores[id] = this.recordStoreFactory.create();
            if (this.getItemMetadata()) {
                newStores[id].setMetadata(this.getItemMetadata());
            }
            newStores[id].initRecord(record, 'detail', false);
            storesArray.push(newStores[id]);
        });
        const existingIds = Object.keys(storesMap);
        existingIds.forEach(id => {
            if (newStores[id]) {
                return;
            }
            storesMap[id].destroy();
        });
        this.updateState(storesArray);
    }
    updateState(stores) {
        this.storeSubject.next(this.stores = stores);
    }
    getStoreMap(stores) {
        const map = {};
        if (!stores || !stores.length) {
            return map;
        }
        stores.forEach(store => {
            map[store.getBaseRecord().id] = store;
        });
        return map;
    }
    getItemStores() {
        const stores = this.stores ?? [];
        if (stores && stores.length) {
            return stores;
        }
        return [];
    }
    getRecordIds() {
        const ids = [];
        if (!this.stores || !this.stores.length) {
            return ids;
        }
        this.stores.forEach(store => {
            ids.push(store.getRecordId());
        });
        return ids;
    }
    static { this.ɵfac = function RecordStoreList_Factory(t) { i0.ɵɵinvalidFactory(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordStoreList, factory: RecordStoreList.ɵfac }); }
}
export { RecordStoreList };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordStoreList, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordListStoreFactory }, { type: undefined }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1yZWNvcmQtdGhyZWFkLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvcmVjb3JkLXRocmVhZC9zdG9yZS9yZWNvcmQtdGhyZWFkL2Jhc2UtcmVjb3JkLXRocmVhZC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBR0gsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsZUFBZSxFQUEyQixNQUFNLE1BQU0sQ0FBQztBQUUvRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUUvRixPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBUTlDLE1BQ3NCLGVBQWU7SUFZakMsWUFDYyxnQkFBd0MsRUFDeEMsa0JBQTZEO1FBRDdELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7UUFDeEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEyQztRQVRqRSxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUUxQixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDNUMsV0FBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQU01QixJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FB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SSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDM0IsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFTSxhQUFhO1FBQ2hCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ2pDLElBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDeEIsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxZQUFZO1FBQ1IsTUFBTSxHQUFHLEdBQWEsRUFBRSxDQUFDO1FBRXpCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDckMsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7O3VFQWxMaUIsZUFBZSxXQUFmLGVBQWU7O1NBQWYsZUFBZTt1RkFBZixlQUFlO2NBRHBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc3RhdGUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1JlY29yZExpc3QsIFJlY29yZExpc3RTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3Quc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRMaXN0U3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQtbGlzdC9yZWNvcmQtbGlzdC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHttYXAsIHRha2UsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtCYXNlUmVjb3JkQ29udGFpbmVyU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC1jb250YWluZXIvYmFzZS1yZWNvcmQtY29udGFpbmVyLnN0b3JlJztcbmltcG9ydCB7QmFzZVJlY29yZEl0ZW1TdG9yZUZhY3RvcnlJbnRlcmZhY2V9IGZyb20gJy4vYmFzZS1yZWNvcmQtdGhyZWFkLXRocmVhZC5tb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb3JkU3RvcmVNYXA8VCBleHRlbmRzIEJhc2VSZWNvcmRDb250YWluZXJTdG9yZTxNPiwgTT4ge1xuICAgIFtrZXk6IHN0cmluZ106IFQ7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZWNvcmRTdG9yZUxpc3Q8VCBleHRlbmRzIEJhc2VSZWNvcmRDb250YWluZXJTdG9yZTxNPiwgTT4gaW1wbGVtZW50cyBTdGF0ZVN0b3JlIHtcblxuICAgIHN0b3Jlc01hcCQ6IE9ic2VydmFibGU8UmVjb3JkU3RvcmVNYXA8VCwgTT4+O1xuICAgIHN0b3JlcyQ6IE9ic2VydmFibGU8VFtdPjtcbiAgICBtb2R1bGU6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgcmVjb3JkTGlzdDogUmVjb3JkTGlzdFN0b3JlO1xuICAgIHByb3RlY3RlZCBzdG9yZXM6IFRbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBzdG9yZVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRbXT4oW10pO1xuICAgIHByb3RlY3RlZCBzdGF0ZSQgPSB0aGlzLnN0b3JlU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgcGFnZVNpemU6IG51bWJlciA9IDEwO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdFN0b3JlRmFjdG9yeTogUmVjb3JkTGlzdFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZFN0b3JlRmFjdG9yeTogQmFzZVJlY29yZEl0ZW1TdG9yZUZhY3RvcnlJbnRlcmZhY2U8VCwgTT5cbiAgICApIHtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0ID0gbGlzdFN0b3JlRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5zdG9yZXMkID0gdGhpcy5zdGF0ZSQ7XG4gICAgICAgIHRoaXMuc3RvcmVzTWFwJCA9IHRoaXMuc3RvcmVzJC5waXBlKG1hcChzdG9yZXMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RvcmVNYXAoc3RvcmVzKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIGNsZWFyQXV0aEJhc2VkKCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtTWV0YWRhdGEoKTogTSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZWNvcmRMaXN0KCk6UmVjb3JkTGlzdFN0b3JlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkTGlzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIGxpc3QgcmVjb3JkcyBsb2FkIGlmIG5vdCBjYWNoZWQgYW5kIHVwZGF0ZSBzdGF0ZS5cbiAgICAgKiBSZXR1cm5zIG9ic2VydmFibGUgdG8gYmUgdXNlZCBpbiByZXNvbHZlciBpZiBuZWVkZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VTaXplXG4gICAgICovXG4gICAgcHVibGljIGluaXQobW9kdWxlOiBzdHJpbmcsIGxvYWQgPSB0cnVlLCBwYWdlU2l6ZTogbnVtYmVyID0gbnVsbCk6IHZvaWQge1xuICAgICAgICBsZXQgcGFnZVNpemVDb25maWdLZXkgPSAnbGlzdF9tYXhfZW50cmllc19wZXJfcmVjb3JkX3RocmVhZCc7XG4gICAgICAgIGlmIChwYWdlU2l6ZSAmJiBpc0Zpbml0ZShwYWdlU2l6ZSkpIHtcbiAgICAgICAgICAgIHBhZ2VTaXplQ29uZmlnS2V5ID0gJyc7XG4gICAgICAgICAgICB0aGlzLnJlY29yZExpc3Quc2V0UGFnZVNpemUocGFnZVNpemUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2FkJCA9IHRoaXMucmVjb3JkTGlzdC5pbml0KG1vZHVsZSwgbG9hZCwgcGFnZVNpemVDb25maWdLZXkpO1xuXG4gICAgICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLnJlY29yZExpc3QuZ2V0UGFnZVNpemUoKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnJlY29yZExpc3QucmVjb3JkcyQuc3Vic2NyaWJlKHJlY29yZHMgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0U3RvcmVzKHJlY29yZHMpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKCFsb2FkJCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9hZCQucGlwZShcbiAgICAgICAgICAgIHRhcCgocmVjb3JkTGlzdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFN0b3JlcyhyZWNvcmRMaXN0LnJlY29yZHMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIC8gcmVsb2FkIHJlY29yZHMgdXNpbmcgY3VycmVudCBwYWdpbmF0aW9uIGFuZCBjcml0ZXJpYVxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1c2VDYWNoZSBpZiB0byB1c2UgY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPFJlY29yZExpc3Q+XG4gICAgICovXG4gICAgcHVibGljIGxvYWQodXNlQ2FjaGUgPSB0cnVlKTogT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkTGlzdC5sb2FkKHVzZUNhY2hlKS5waXBlKFxuICAgICAgICAgICAgdGFwKChyZWNvcmRMaXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U3RvcmVzKHJlY29yZExpc3QucmVjb3Jkcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgcmVjb3JkIHN0b3JlcyB1c2luZyByZWNvcmRzXG4gICAgICogQHBhcmFtIHJlY29yZHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdFN0b3JlcyhyZWNvcmRzOiBSZWNvcmRbXSkge1xuICAgICAgICBpZiAoIXJlY29yZHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1N0b3JlczogUmVjb3JkU3RvcmVNYXA8VCwgTT4gPSB7fTtcbiAgICAgICAgY29uc3Qgc3RvcmVzQXJyYXk6IFRbXSA9IFtdO1xuICAgICAgICBjb25zdCBzdG9yZXNNYXAgPSB0aGlzLmdldFN0b3JlTWFwKHRoaXMuc3RvcmVzKTtcblxuICAgICAgICByZWNvcmRzLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICAgIGlmICghcmVjb3JkIHx8ICFyZWNvcmQuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaWQgPSByZWNvcmQuaWQ7XG4gICAgICAgICAgICBpZiAoc3RvcmVzTWFwW2lkXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlOiBUID0gc3RvcmVzTWFwW2lkXTtcblxuICAgICAgICAgICAgICAgIHN0b3JlLnNldFJlY29yZChyZWNvcmQpO1xuICAgICAgICAgICAgICAgIG5ld1N0b3Jlc1tpZF0gPSBzdG9yZTtcbiAgICAgICAgICAgICAgICBzdG9yZXNBcnJheS5wdXNoKHN0b3JlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ld1N0b3Jlc1tpZF0gPSB0aGlzLnJlY29yZFN0b3JlRmFjdG9yeS5jcmVhdGUoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0SXRlbU1ldGFkYXRhKCkpIHtcbiAgICAgICAgICAgICAgICBuZXdTdG9yZXNbaWRdLnNldE1ldGFkYXRhKHRoaXMuZ2V0SXRlbU1ldGFkYXRhKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXdTdG9yZXNbaWRdLmluaXRSZWNvcmQocmVjb3JkLCAnZGV0YWlsJywgZmFsc2UpO1xuICAgICAgICAgICAgc3RvcmVzQXJyYXkucHVzaChuZXdTdG9yZXNbaWRdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdJZHMgPSBPYmplY3Qua2V5cyhzdG9yZXNNYXApO1xuICAgICAgICBleGlzdGluZ0lkcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgIGlmIChuZXdTdG9yZXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdG9yZXNNYXBbaWRdLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdG9yZXNBcnJheSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0b3JlczogVFtdKSB7XG4gICAgICAgIHRoaXMuc3RvcmVTdWJqZWN0Lm5leHQodGhpcy5zdG9yZXMgPSBzdG9yZXMpO1xuICAgIH1cblxuXG4gICAgcHVibGljIGdldFN0b3JlTWFwKHN0b3JlczogVFtdKTogUmVjb3JkU3RvcmVNYXA8VCwgTT4ge1xuICAgICAgICBjb25zdCBtYXA6IFJlY29yZFN0b3JlTWFwPFQsIE0+ID0ge307XG5cbiAgICAgICAgaWYgKCFzdG9yZXMgfHwgIXN0b3Jlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yZXMuZm9yRWFjaChzdG9yZSA9PiB7XG4gICAgICAgICAgICBtYXBbc3RvcmUuZ2V0QmFzZVJlY29yZCgpLmlkXSA9IHN0b3JlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWFwO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtU3RvcmVzKCk6IFRbXSB7XG4gICAgICAgIGNvbnN0IHN0b3JlcyA9IHRoaXMuc3RvcmVzID8/IFtdO1xuICAgICAgICBpZihzdG9yZXMgJiYgc3RvcmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBnZXRSZWNvcmRJZHMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBpZHM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0b3JlcyB8fCAhdGhpcy5zdG9yZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gaWRzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdG9yZXMuZm9yRWFjaChzdG9yZSA9PiB7XG4gICAgICAgICAgICBpZHMucHVzaChzdG9yZS5nZXRSZWNvcmRJZCgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGlkcztcbiAgICB9XG5cbn1cbiJdfQ==