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
import { AppStateStore } from '../app-state/app-state.store';
import { deepClone } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../app-state/app-state.store";
const initialState = {
    adminPanel: []
};
let internalState = deepClone(initialState);
let cache$ = null;
class AdminMetadataStore {
    constructor(appStateStore) {
        this.appStateStore = appStateStore;
        this.store = new BehaviorSubject(internalState);
        this.state$ = this.store.asObservable();
        this.adminPanel$ = this.state$.pipe(map(state => state.adminPanel), distinctUntilChanged());
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
     * Returns the currently active admin panel
     *
     * @returns {object} the admin panel
     */
    getAdminPanel() {
        return internalState.adminPanel;
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
     * Set pre-loaded adminMetadata and cache
     */
    set(adminMetadata) {
        cache$ = of(adminMetadata).pipe(shareReplay(1));
        this.updateState(adminMetadata);
    }
    static { this.ɵfac = function AdminMetadataStore_Factory(t) { return new (t || AdminMetadataStore)(i0.ɵɵinject(i1.AppStateStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AdminMetadataStore, factory: AdminMetadataStore.ɵfac, providedIn: 'root' }); }
}
export { AdminMetadataStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminMetadataStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.AppStateStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tbWV0YWRhdGEuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvYWRtaW4tbWV0YWRhdGEvYWRtaW4tbWV0YWRhdGEuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFFM0QsT0FBTyxFQUFDLFNBQVMsRUFBWSxNQUFNLFFBQVEsQ0FBQzs7O0FBSTVDLE1BQU0sWUFBWSxHQUFrQjtJQUNoQyxVQUFVLEVBQUUsRUFBRTtDQUNqQixDQUFDO0FBRUYsSUFBSSxhQUFhLEdBQWtCLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUUzRCxJQUFJLE1BQU0sR0FBb0IsSUFBSSxDQUFDO0FBRW5DLE1BR2Esa0JBQWtCO0lBVTNCLFlBQ2MsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFKaEMsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFnQixhQUFhLENBQUMsQ0FBQztRQUMxRCxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUt6QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVEOztPQUVHO0lBRUg7O09BRUc7SUFDSSxLQUFLO1FBQ1IsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVNLGNBQWM7UUFDakIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksYUFBYTtRQUNoQixPQUFPLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDcEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksUUFBUTtRQUNYLE9BQU8sTUFBTSxLQUFLLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFFSDs7OztPQUlHO0lBQ08sV0FBVyxDQUFDLEtBQW9CO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxHQUFHLENBQUMsYUFBNEI7UUFDbkMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVwQyxDQUFDO21GQXBFUSxrQkFBa0I7dUVBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmYsTUFBTTs7U0FFVCxrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUg5QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzaGFyZVJlcGxheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7U3RhdGVTdG9yZX0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHtkZWVwQ2xvbmUsIE9iamVjdE1hcH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QWRtaW5NZXRhZGF0YX0gZnJvbSAnLi9hZG1pbi1tZXRhZGF0YS5tb2RlbCc7XG5cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBBZG1pbk1ldGFkYXRhID0ge1xuICAgIGFkbWluUGFuZWw6IFtdXG59O1xuXG5sZXQgaW50ZXJuYWxTdGF0ZTogQWRtaW5NZXRhZGF0YSA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuXG5sZXQgY2FjaGUkOiBPYnNlcnZhYmxlPGFueT4gPSBudWxsO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbk1ldGFkYXRhU3RvcmUgaW1wbGVtZW50cyBTdGF0ZVN0b3JlIHtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBsb25nLWxpdmVkIG9ic2VydmFibGUgc3RyZWFtc1xuICAgICAqL1xuICAgIGFkbWluUGFuZWwkOiBPYnNlcnZhYmxlPE9iamVjdE1hcD47XG5cbiAgICBwcm90ZWN0ZWQgc3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFkbWluTWV0YWRhdGE+KGludGVybmFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZVN0b3JlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICkge1xuICAgICAgICB0aGlzLmFkbWluUGFuZWwkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuYWRtaW5QYW5lbCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBBcGlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBjYWNoZSQgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRlZXBDbG9uZShpbml0aWFsU3RhdGUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJBdXRoQmFzZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgYWN0aXZlIGFkbWluIHBhbmVsXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSB0aGUgYWRtaW4gcGFuZWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QWRtaW5QYW5lbCgpOiBBZG1pbk1ldGFkYXRhIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGUuYWRtaW5QYW5lbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBsb2FkZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNDYWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBjYWNoZSQgIT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgQVBJXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlOiBBZG1pbk1ldGFkYXRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dChpbnRlcm5hbFN0YXRlID0gc3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBwcmUtbG9hZGVkIGFkbWluTWV0YWRhdGEgYW5kIGNhY2hlXG4gICAgICovXG4gICAgcHVibGljIHNldChhZG1pbk1ldGFkYXRhOiBBZG1pbk1ldGFkYXRhKTogdm9pZCB7XG4gICAgICAgIGNhY2hlJCA9IG9mKGFkbWluTWV0YWRhdGEpLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGFkbWluTWV0YWRhdGEpO1xuXG4gICAgfVxuXG5cbn1cbiJdfQ==