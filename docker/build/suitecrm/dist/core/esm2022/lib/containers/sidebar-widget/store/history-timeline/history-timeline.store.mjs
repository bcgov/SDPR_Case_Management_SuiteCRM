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
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record-list/record-list.store.factory";
class HistoryTimelineStore {
    constructor(listStoreFactory) {
        this.listStoreFactory = listStoreFactory;
        this.recordList = listStoreFactory.create();
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
     *
     * @param {ViewContext} context of parent
     * @description initialize the Record List Store
     * returns {void}
     */
    init(context) {
        this.recordList.init('history', false, 'list_max_entries_per_subpanel');
        this.initViewContext(context);
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
     * Init search criteria
     *
     * @param {number} offset of the recordset
     * @param {number} limit of the recordset
     * @description initialize the search module/criteria(offset/limit) for the record set
     */
    initSearchCriteria(offset, limit) {
        this.recordList.criteria = {
            preset: {
                type: 'history-timeline',
                params: {
                    parentModule: this.viewContext.module,
                    parentId: this.viewContext.id,
                    offset,
                    limit
                }
            }
        };
    }
    initViewContext(viewContext) {
        this.viewContext = viewContext;
    }
    static { this.ɵfac = function HistoryTimelineStore_Factory(t) { return new (t || HistoryTimelineStore)(i0.ɵɵinject(i1.RecordListStoreFactory)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HistoryTimelineStore, factory: HistoryTimelineStore.ɵfac }); }
}
export { HistoryTimelineStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistoryTimelineStore, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordListStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS10aW1lbGluZS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3NpZGViYXItd2lkZ2V0L3N0b3JlL2hpc3RvcnktdGltZWxpbmUvaGlzdG9yeS10aW1lbGluZS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUl6QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQzs7O0FBRy9GLE1BQ2Esb0JBQW9CO0lBSTdCLFlBQ2MsZ0JBQXdDO1FBQXhDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7UUFFbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELGNBQWM7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxJQUFJLENBQUMsT0FBTztRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsK0JBQStCLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtRQUV2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxrQkFBa0IsQ0FBQyxNQUFjLEVBQUUsS0FBYTtRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRztZQUN2QixNQUFNLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsTUFBTSxFQUFFO29CQUNKLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU07b0JBQ3JDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQzdCLE1BQU07b0JBQ04sS0FBSztpQkFDUjthQUNKO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFFUyxlQUFlLENBQUMsV0FBd0I7UUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztxRkFqRVEsb0JBQW9CO3VFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9COztTQUFwQixvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQURoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zdGF0ZSc7XG5pbXBvcnQge1JlY29yZExpc3QsIFJlY29yZExpc3RTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3Quc3RvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7UmVjb3JkTGlzdFN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3Quc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge1ZpZXdDb250ZXh0fSBmcm9tICdjb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGlzdG9yeVRpbWVsaW5lU3RvcmUgaW1wbGVtZW50cyBTdGF0ZVN0b3JlIHtcbiAgICBwcml2YXRlIHJlY29yZExpc3Q6IFJlY29yZExpc3RTdG9yZTtcbiAgICBwcml2YXRlIHZpZXdDb250ZXh0OiBWaWV3Q29udGV4dDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdFN0b3JlRmFjdG9yeTogUmVjb3JkTGlzdFN0b3JlRmFjdG9yeVxuICAgICkge1xuICAgICAgICB0aGlzLnJlY29yZExpc3QgPSBsaXN0U3RvcmVGYWN0b3J5LmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlY29yZExpc3QuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LmNsZWFyQXV0aEJhc2VkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBsaXN0IHJlY29yZHMgbG9hZCBpZiBub3QgY2FjaGVkIGFuZCB1cGRhdGUgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ZpZXdDb250ZXh0fSBjb250ZXh0IG9mIHBhcmVudFxuICAgICAqIEBkZXNjcmlwdGlvbiBpbml0aWFsaXplIHRoZSBSZWNvcmQgTGlzdCBTdG9yZVxuICAgICAqIHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcHVibGljIGluaXQoY29udGV4dCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlY29yZExpc3QuaW5pdCgnaGlzdG9yeScsIGZhbHNlLCAnbGlzdF9tYXhfZW50cmllc19wZXJfc3VicGFuZWwnKTtcbiAgICAgICAgdGhpcy5pbml0Vmlld0NvbnRleHQoY29udGV4dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCAvIHJlbG9hZCByZWNvcmRzIHVzaW5nIGN1cnJlbnQgcGFnaW5hdGlvbiBhbmQgY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8UmVjb3JkTGlzdD4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZExpc3QubG9hZCh1c2VDYWNoZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBzZWFyY2ggY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgb2YgdGhlIHJlY29yZHNldFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCBvZiB0aGUgcmVjb3Jkc2V0XG4gICAgICogQGRlc2NyaXB0aW9uIGluaXRpYWxpemUgdGhlIHNlYXJjaCBtb2R1bGUvY3JpdGVyaWEob2Zmc2V0L2xpbWl0KSBmb3IgdGhlIHJlY29yZCBzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdFNlYXJjaENyaXRlcmlhKG9mZnNldDogbnVtYmVyLCBsaW1pdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5jcml0ZXJpYSA9IHtcbiAgICAgICAgICAgIHByZXNldDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdoaXN0b3J5LXRpbWVsaW5lJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50TW9kdWxlOiB0aGlzLnZpZXdDb250ZXh0Lm1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IHRoaXMudmlld0NvbnRleHQuaWQsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgbGltaXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRWaWV3Q29udGV4dCh2aWV3Q29udGV4dDogVmlld0NvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52aWV3Q29udGV4dCA9IHZpZXdDb250ZXh0O1xuICAgIH1cbn1cbiJdfQ==