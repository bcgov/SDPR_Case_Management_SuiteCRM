/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { BehaviorSubject, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import { deepClone } from 'common';
import * as i0 from "@angular/core";
const initialState = {
    globalRecentlyViewed: []
};
let internalState = deepClone(initialState);
let cache$ = null;
class GlobalRecentlyViewedStore {
    constructor() {
        this.store = new BehaviorSubject(internalState);
        this.state$ = this.store.asObservable();
        this.globalRecentlyViewed$ = this.state$.pipe(map(state => state.globalRecentlyViewed), distinctUntilChanged());
    }
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear() {
        cache$ = null;
        this.updateState(deepClone(initialState));
    }
    clearAuthBased() {
        this.clear();
    }
    /**
     * Returns the currently active globalRecentlyViewedMetadata
     *
     * @returns {object} the globalRecentlyViewedMetadata
     */
    getGlobalRecentlyViewed() {
        return internalState.globalRecentlyViewed;
    }
    /**
     * Check if loaded
     */
    isCached() {
        return cache$ !== null;
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
        this.store.next(internalState = state);
    }
    /**
     * Set pre-loaded globalRecentlyViewedMetadata and cache
     */
    set(globalRecentlyViewedMetadata) {
        cache$ = of(globalRecentlyViewedMetadata).pipe(shareReplay(1));
        this.updateState({ globalRecentlyViewed: globalRecentlyViewedMetadata });
    }
    addToState(data) {
        const currentList = this.getGlobalRecentlyViewed();
        const newList = currentList.filter((obj) => obj?.attributes?.item_id !== data?.attributes?.item_id);
        newList.unshift(data);
        this.updateState({ globalRecentlyViewed: newList });
    }
    static { this.ɵfac = function GlobalRecentlyViewedStore_Factory(t) { return new (t || GlobalRecentlyViewedStore)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GlobalRecentlyViewedStore, factory: GlobalRecentlyViewedStore.ɵfac, providedIn: 'root' }); }
}
export { GlobalRecentlyViewedStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalRecentlyViewedStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXJlY2VudGx5LXZpZXdlZC5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS9nbG9iYWwtcmVjZW50bHktdmlld2VkL2dsb2JhbC1yZWNlbnRseS12aWV3ZWQuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEVBQUMsU0FBUyxFQUF1QyxNQUFNLFFBQVEsQ0FBQzs7QUFHdkUsTUFBTSxZQUFZLEdBQXlCO0lBQ3ZDLG9CQUFvQixFQUFFLEVBQUU7Q0FDM0IsQ0FBQztBQUVGLElBQUksYUFBYSxHQUF5QixTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFbEUsSUFBSSxNQUFNLEdBQW9CLElBQUksQ0FBQztBQUVuQyxNQUdhLHlCQUF5QjtJQVVsQztRQUhVLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBdUIsYUFBYSxDQUFDLENBQUM7UUFDakUsV0FBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFHekMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUNwSCxDQUFDO0lBRUQ7O09BRUc7SUFFSDs7T0FFRztJQUNJLEtBQUs7UUFDUixNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sY0FBYztRQUNqQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx1QkFBdUI7UUFDMUIsT0FBTyxhQUFhLENBQUMsb0JBQW9CLENBQUM7SUFDOUMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksUUFBUTtRQUNYLE9BQU8sTUFBTSxLQUFLLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFFSDs7OztPQUlHO0lBQ08sV0FBVyxDQUFDLEtBQTJCO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxHQUFHLENBQUMsNEJBQThDO1FBQ3JELE1BQU0sR0FBRyxFQUFFLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLG9CQUFvQixFQUFFLDRCQUE0QixFQUFDLENBQUMsQ0FBQztJQUUzRSxDQUFDO0lBRU0sVUFBVSxDQUFDLElBQW9CO1FBQ2xDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQ25ELE1BQU0sT0FBTyxHQUFxQixXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBa0IsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxPQUFPLEtBQUssSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNySSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxvQkFBb0IsRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7MEZBekVRLHlCQUF5Qjt1RUFBekIseUJBQXlCLFdBQXpCLHlCQUF5QixtQkFGdEIsTUFBTTs7U0FFVCx5QkFBeUI7dUZBQXpCLHlCQUF5QjtjQUhyQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzaGFyZVJlcGxheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQge2RlZXBDbG9uZSwgR2xvYmFsUmVjZW50bHlWaWV3ZWQsIFJlY2VudGx5Vmlld2VkfSBmcm9tICdjb21tb24nO1xuXG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogR2xvYmFsUmVjZW50bHlWaWV3ZWQgPSB7XG4gICAgZ2xvYmFsUmVjZW50bHlWaWV3ZWQ6IFtdXG59O1xuXG5sZXQgaW50ZXJuYWxTdGF0ZTogR2xvYmFsUmVjZW50bHlWaWV3ZWQgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcblxubGV0IGNhY2hlJDogT2JzZXJ2YWJsZTxhbnk+ID0gbnVsbDtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsUmVjZW50bHlWaWV3ZWRTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIGxvbmctbGl2ZWQgb2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgICovXG4gICAgZ2xvYmFsUmVjZW50bHlWaWV3ZWQkOiBPYnNlcnZhYmxlPFJlY2VudGx5Vmlld2VkW10+O1xuXG4gICAgcHJvdGVjdGVkIHN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHbG9iYWxSZWNlbnRseVZpZXdlZD4oaW50ZXJuYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIHN0YXRlJCA9IHRoaXMuc3RvcmUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nbG9iYWxSZWNlbnRseVZpZXdlZCQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5nbG9iYWxSZWNlbnRseVZpZXdlZCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBBcGlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBjYWNoZSQgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRlZXBDbG9uZShpbml0aWFsU3RhdGUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJBdXRoQmFzZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgYWN0aXZlIGdsb2JhbFJlY2VudGx5Vmlld2VkTWV0YWRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHRoZSBnbG9iYWxSZWNlbnRseVZpZXdlZE1ldGFkYXRhXG4gICAgICovXG4gICAgcHVibGljIGdldEdsb2JhbFJlY2VudGx5Vmlld2VkKCk6IFJlY2VudGx5Vmlld2VkW10ge1xuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5nbG9iYWxSZWNlbnRseVZpZXdlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBsb2FkZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNDYWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBjYWNoZSQgIT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgQVBJXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlOiBHbG9iYWxSZWNlbnRseVZpZXdlZCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLm5leHQoaW50ZXJuYWxTdGF0ZSA9IHN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJlLWxvYWRlZCBnbG9iYWxSZWNlbnRseVZpZXdlZE1ldGFkYXRhIGFuZCBjYWNoZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQoZ2xvYmFsUmVjZW50bHlWaWV3ZWRNZXRhZGF0YTogUmVjZW50bHlWaWV3ZWRbXSk6IHZvaWQge1xuICAgICAgICBjYWNoZSQgPSBvZihnbG9iYWxSZWNlbnRseVZpZXdlZE1ldGFkYXRhKS5waXBlKHNoYXJlUmVwbGF5KDEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Z2xvYmFsUmVjZW50bHlWaWV3ZWQ6IGdsb2JhbFJlY2VudGx5Vmlld2VkTWV0YWRhdGF9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRUb1N0YXRlKGRhdGE6IFJlY2VudGx5Vmlld2VkKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gdGhpcy5nZXRHbG9iYWxSZWNlbnRseVZpZXdlZCgpO1xuICAgICAgICBjb25zdCBuZXdMaXN0OiBSZWNlbnRseVZpZXdlZFtdID0gY3VycmVudExpc3QuZmlsdGVyKChvYmo6UmVjZW50bHlWaWV3ZWQpID0+IG9iaj8uYXR0cmlidXRlcz8uaXRlbV9pZCAhPT0gZGF0YT8uYXR0cmlidXRlcz8uaXRlbV9pZCk7XG4gICAgICAgIG5ld0xpc3QudW5zaGlmdChkYXRhKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Z2xvYmFsUmVjZW50bHlWaWV3ZWQ6IG5ld0xpc3R9KTtcbiAgICB9XG5cblxufVxuIl19