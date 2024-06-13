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
import { BehaviorSubject, combineLatestWith, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, tap } from 'rxjs/operators';
import { EntityGQL } from '../../services/api/graphql-api/api.entity.get';
import { deepClone } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../services/api/graphql-api/api.entity.get";
const initialState = {
    tabs: [],
    groupedTabs: [],
    modules: {},
    userActionMenu: [],
    quickActions: [],
    maxTabs: 0
};
let internalState = deepClone(initialState);
let cache$ = null;
class NavigationStore {
    constructor(recordGQL) {
        this.recordGQL = recordGQL;
        this.store = new BehaviorSubject(internalState);
        this.state$ = this.store.asObservable();
        this.resourceName = 'navbar';
        this.fieldsMetadata = {
            fields: [
                'tabs',
                'groupedTabs',
                'modules',
                'userActionMenu',
                'maxTabs'
            ]
        };
        this.tabs$ = this.state$.pipe(map(state => state.tabs), distinctUntilChanged());
        this.groupedTabs$ = this.state$.pipe(map(state => state.groupedTabs), distinctUntilChanged());
        this.modules$ = this.state$.pipe(map(state => state.modules), distinctUntilChanged());
        this.userActionMenu$ = this.state$.pipe(map(state => state.userActionMenu), distinctUntilChanged());
        this.maxTabs$ = this.state$.pipe(map(state => state.maxTabs), distinctUntilChanged());
        this.quickActions$ = this.state$.pipe(map(state => state.quickActions), distinctUntilChanged());
        this.vm$ = this.tabs$.pipe(combineLatestWith(this.groupedTabs$, this.modules$, this.userActionMenu$, this.maxTabs$, this.quickActions$), map(([tabs, groupedTabs, modules, userActionMenu, maxTabs, quickActions]) => ({
            tabs, groupedTabs, modules, userActionMenu, maxTabs, quickActions
        })));
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
     * Initial Navigation load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @returns {{}} Observable<any>
     */
    load() {
        return this.getNavigation().pipe(tap(navigation => {
            this.updateState({
                ...internalState,
                tabs: navigation.tabs,
                groupedTabs: navigation.groupedTabs,
                userActionMenu: navigation.userActionMenu,
                modules: navigation.modules,
                maxTabs: navigation.maxTabs,
                quickActions: navigation?.quickActions ?? []
            });
        }));
    }
    /**
     * Check if loaded
     */
    isCached() {
        return cache$ !== null;
    }
    /**
     * Set pre-loaded navigation and cache
     */
    set(navigation) {
        cache$ = of(navigation).pipe(shareReplay(1));
        this.updateState({
            ...internalState,
            tabs: navigation.tabs,
            groupedTabs: navigation.groupedTabs,
            userActionMenu: navigation.userActionMenu,
            modules: navigation.modules,
            maxTabs: navigation.maxTabs,
            quickActions: navigation?.quickActions ?? []
        });
    }
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {{}} state to set
     */
    updateState(state) {
        this.store.next(internalState = state);
    }
    /**
     * Get Navigation cached Observable or call the backend
     *
     * @returns {{}} Observable<any>
     */
    getNavigation() {
        const user = '1';
        if (cache$ === null) {
            cache$ = this.fetch(user).pipe(shareReplay(1));
        }
        return cache$;
    }
    /**
     * Fetch the Navigation from the backend
     *
     * @param {string} userId to use
     * @returns {{}} Observable<any>
     */
    fetch(userId) {
        return this.recordGQL
            .fetch(this.resourceName, `/api/navbars/${userId}`, this.fieldsMetadata)
            .pipe(map(({ data }) => {
            let navigation = null;
            if (data && data.navbar) {
                navigation = {
                    tabs: data.navbar.tabs,
                    groupedTabs: data.navbar.groupedTabs,
                    userActionMenu: data.navbar.userActionMenu,
                    modules: data.navbar.modules,
                    maxTabs: data.navbar.maxTabs,
                    quickActions: data?.navbar?.quickActions ?? [],
                };
            }
            return navigation;
        }));
    }
    static { this.ɵfac = function NavigationStore_Factory(t) { return new (t || NavigationStore)(i0.ɵɵinject(i1.EntityGQL)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NavigationStore, factory: NavigationStore.ɵfac, providedIn: 'root' }); }
}
export { NavigationStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.EntityGQL }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBRSxpQkFBaUIsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDeEUsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRXhFLE9BQU8sRUFBQyxTQUFTLEVBQVksTUFBTSxRQUFRLENBQUM7OztBQW9ENUMsTUFBTSxZQUFZLEdBQWU7SUFDN0IsSUFBSSxFQUFFLEVBQUU7SUFDUixXQUFXLEVBQUUsRUFBRTtJQUNmLE9BQU8sRUFBRSxFQUFFO0lBQ1gsY0FBYyxFQUFFLEVBQUU7SUFDbEIsWUFBWSxFQUFFLEVBQUU7SUFDaEIsT0FBTyxFQUFFLENBQUM7Q0FDYixDQUFDO0FBRUYsSUFBSSxhQUFhLEdBQWUsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXhELElBQUksTUFBTSxHQUFvQixJQUFJLENBQUM7QUFFbkMsTUFHYSxlQUFlO0lBOEJ4QixZQUFvQixTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBYjlCLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBYSxhQUFhLENBQUMsQ0FBQztRQUN2RCxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuQyxpQkFBWSxHQUFHLFFBQVEsQ0FBQztRQUN4QixtQkFBYyxH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QU0sRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUM7YUFDdkUsSUFBSSxDQUNELEdBQUcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRTtZQUNYLElBQUksVUFBVSxHQUFlLElBQUksQ0FBQztZQUVsQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNyQixVQUFVLEdBQUc7b0JBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtvQkFDdEIsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztvQkFDcEMsY0FBYyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYztvQkFDMUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztvQkFDNUIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztvQkFDNUIsWUFBWSxFQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxJQUFJLEVBQUU7aUJBQ2xELENBQUM7YUFFTDtZQUVELE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDVixDQUFDO2dGQTNLUSxlQUFlO3VFQUFmLGVBQWUsV0FBZixlQUFlLG1CQUZaLE1BQU07O1NBRVQsZUFBZTt1RkFBZixlQUFlO2NBSDNCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzaGFyZVJlcGxheSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7RW50aXR5R1FMfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkvZ3JhcGhxbC1hcGkvYXBpLmVudGl0eS5nZXQnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQge2RlZXBDbG9uZSwgT2JqZWN0TWFwfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGlvbiB7XG4gICAgdGFiczogc3RyaW5nW107XG4gICAgZ3JvdXBlZFRhYnM6IEdyb3VwZWRUYWJbXTtcbiAgICBtb2R1bGVzOiBOYXZiYXJNb2R1bGVNYXA7XG4gICAgcXVpY2tBY3Rpb25zOiBNb2R1bGVBY3Rpb25bXTtcbiAgICB1c2VyQWN0aW9uTWVudTogVXNlckFjdGlvbk1lbnVbXTtcbiAgICBtYXhUYWJzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2YmFyTW9kdWxlTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBOYXZiYXJNb2R1bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2YmFyTW9kdWxlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcGF0aDogc3RyaW5nO1xuICAgIGRlZmF1bHRSb3V0ZTogc3RyaW5nO1xuICAgIGxhYmVsS2V5OiBzdHJpbmc7XG4gICAgbWVudTogTW9kdWxlQWN0aW9uW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdXBlZFRhYiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGxhYmVsS2V5OiBzdHJpbmc7XG4gICAgbW9kdWxlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckFjdGlvbk1lbnUge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBsYWJlbEtleTogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIGljb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb2R1bGVBY3Rpb24ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBsYWJlbEtleTogc3RyaW5nO1xuICAgIGFjdGlvbkxhYmVsS2V5Pzogc3RyaW5nO1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIHBhcmFtcz86IHN0cmluZyB8IFBhcmFtcztcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgbW9kdWxlPzogc3RyaW5nO1xuICAgIHN1YmxpbmtzPzogT2JqZWN0TWFwO1xuICAgIHF1aWNrQWN0aW9uPzogYm9vbGVhbjtcbiAgICB0eXBlPzogc3RyaW5nO1xuICAgIHByb2Nlc3M/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogTmF2aWdhdGlvbiA9IHtcbiAgICB0YWJzOiBbXSxcbiAgICBncm91cGVkVGFiczogW10sXG4gICAgbW9kdWxlczoge30sXG4gICAgdXNlckFjdGlvbk1lbnU6IFtdLFxuICAgIHF1aWNrQWN0aW9uczogW10sXG4gICAgbWF4VGFiczogMFxufTtcblxubGV0IGludGVybmFsU3RhdGU6IE5hdmlnYXRpb24gPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcblxubGV0IGNhY2hlJDogT2JzZXJ2YWJsZTxhbnk+ID0gbnVsbDtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblN0b3JlIGltcGxlbWVudHMgU3RhdGVTdG9yZSB7XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbG9uZy1saXZlZCBvYnNlcnZhYmxlIHN0cmVhbXNcbiAgICAgKi9cbiAgICB0YWJzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG4gICAgZ3JvdXBlZFRhYnMkOiBPYnNlcnZhYmxlPEdyb3VwZWRUYWJbXT47XG4gICAgbW9kdWxlcyQ6IE9ic2VydmFibGU8TmF2YmFyTW9kdWxlTWFwPjtcbiAgICB1c2VyQWN0aW9uTWVudSQ6IE9ic2VydmFibGU8VXNlckFjdGlvbk1lbnVbXT47XG4gICAgbWF4VGFicyQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBxdWlja0FjdGlvbnMkOiBPYnNlcnZhYmxlPE1vZHVsZUFjdGlvbltdPjtcblxuICAgIC8qKlxuICAgICAqIFZpZXdNb2RlbCB0aGF0IHJlc29sdmVzIG9uY2UgYWxsIHRoZSBkYXRhIGlzIHJlYWR5IChvciB1cGRhdGVkKS4uLlxuICAgICAqL1xuICAgIHZtJDogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uPjtcblxuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TmF2aWdhdGlvbj4oaW50ZXJuYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIHN0YXRlJCA9IHRoaXMuc3RvcmUuYXNPYnNlcnZhYmxlKCk7XG4gICAgcHJvdGVjdGVkIHJlc291cmNlTmFtZSA9ICduYXZiYXInO1xuICAgIHByb3RlY3RlZCBmaWVsZHNNZXRhZGF0YSA9IHtcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAndGFicycsXG4gICAgICAgICAgICAnZ3JvdXBlZFRhYnMnLFxuICAgICAgICAgICAgJ21vZHVsZXMnLFxuICAgICAgICAgICAgJ3VzZXJBY3Rpb25NZW51JyxcbiAgICAgICAgICAgICdtYXhUYWJzJ1xuICAgICAgICBdXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVjb3JkR1FMOiBFbnRpdHlHUUwpIHtcblxuICAgICAgICB0aGlzLnRhYnMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUudGFicyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmdyb3VwZWRUYWJzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmdyb3VwZWRUYWJzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMubW9kdWxlcyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5tb2R1bGVzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMudXNlckFjdGlvbk1lbnUkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUudXNlckFjdGlvbk1lbnUpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5tYXhUYWJzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLm1heFRhYnMpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5xdWlja0FjdGlvbnMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUucXVpY2tBY3Rpb25zKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG5cblxuICAgICAgICB0aGlzLnZtJCA9IHRoaXMudGFicyQucGlwZShcbiAgICAgICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLmdyb3VwZWRUYWJzJCwgdGhpcy5tb2R1bGVzJCwgdGhpcy51c2VyQWN0aW9uTWVudSQsIHRoaXMubWF4VGFicyQsICB0aGlzLnF1aWNrQWN0aW9ucyQpLFxuICAgICAgICAgICAgICAgIG1hcCgoW3RhYnMsIGdyb3VwZWRUYWJzLCBtb2R1bGVzLCB1c2VyQWN0aW9uTWVudSwgbWF4VGFicywgcXVpY2tBY3Rpb25zXSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgdGFicywgZ3JvdXBlZFRhYnMsIG1vZHVsZXMsIHVzZXJBY3Rpb25NZW51LCBtYXhUYWJzLCBxdWlja0FjdGlvbnNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgQXBpXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdGF0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgY2FjaGUkID0gbnVsbDtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyQXV0aEJhc2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBOYXZpZ2F0aW9uIGxvYWQgaWYgbm90IGNhY2hlZCBhbmQgdXBkYXRlIHN0YXRlLlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSB0byBiZSB1c2VkIGluIHJlc29sdmVyIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge3t9fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldE5hdmlnYXRpb24oKS5waXBlKFxuICAgICAgICAgICAgdGFwKG5hdmlnYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAuLi5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICB0YWJzOiBuYXZpZ2F0aW9uLnRhYnMsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwZWRUYWJzOiBuYXZpZ2F0aW9uLmdyb3VwZWRUYWJzLFxuICAgICAgICAgICAgICAgICAgICB1c2VyQWN0aW9uTWVudTogbmF2aWdhdGlvbi51c2VyQWN0aW9uTWVudSxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlczogbmF2aWdhdGlvbi5tb2R1bGVzLFxuICAgICAgICAgICAgICAgICAgICBtYXhUYWJzOiBuYXZpZ2F0aW9uLm1heFRhYnMsXG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQWN0aW9uczogbmF2aWdhdGlvbj8ucXVpY2tBY3Rpb25zID8/IFtdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGxvYWRlZFxuICAgICAqL1xuICAgIHB1YmxpYyBpc0NhY2hlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlJCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJlLWxvYWRlZCBuYXZpZ2F0aW9uIGFuZCBjYWNoZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQobmF2aWdhdGlvbjogTmF2aWdhdGlvbik6IHZvaWQge1xuICAgICAgICBjYWNoZSQgPSBvZihuYXZpZ2F0aW9uKS5waXBlKHNoYXJlUmVwbGF5KDEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgdGFiczogbmF2aWdhdGlvbi50YWJzLFxuICAgICAgICAgICAgZ3JvdXBlZFRhYnM6IG5hdmlnYXRpb24uZ3JvdXBlZFRhYnMsXG4gICAgICAgICAgICB1c2VyQWN0aW9uTWVudTogbmF2aWdhdGlvbi51c2VyQWN0aW9uTWVudSxcbiAgICAgICAgICAgIG1vZHVsZXM6IG5hdmlnYXRpb24ubW9kdWxlcyxcbiAgICAgICAgICAgIG1heFRhYnM6IG5hdmlnYXRpb24ubWF4VGFicyxcbiAgICAgICAgICAgIHF1aWNrQWN0aW9uczogbmF2aWdhdGlvbj8ucXVpY2tBY3Rpb25zID8/IFtdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIEFQSVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHt7fX0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlOiBOYXZpZ2F0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dChpbnRlcm5hbFN0YXRlID0gc3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBOYXZpZ2F0aW9uIGNhY2hlZCBPYnNlcnZhYmxlIG9yIGNhbGwgdGhlIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt7fX0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldE5hdmlnYXRpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICBjb25zdCB1c2VyID0gJzEnO1xuXG4gICAgICAgIGlmIChjYWNoZSQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNhY2hlJCA9IHRoaXMuZmV0Y2godXNlcikucGlwZShcbiAgICAgICAgICAgICAgICBzaGFyZVJlcGxheSgxKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWNoZSQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggdGhlIE5hdmlnYXRpb24gZnJvbSB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCB0byB1c2VcbiAgICAgKiBAcmV0dXJucyB7e319IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBmZXRjaCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZEdRTFxuICAgICAgICAgICAgLmZldGNoKHRoaXMucmVzb3VyY2VOYW1lLCBgL2FwaS9uYXZiYXJzLyR7dXNlcklkfWAsIHRoaXMuZmllbGRzTWV0YWRhdGEpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmF2aWdhdGlvbjogTmF2aWdhdGlvbiA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5uYXZiYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiczogZGF0YS5uYXZiYXIudGFicyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cGVkVGFiczogZGF0YS5uYXZiYXIuZ3JvdXBlZFRhYnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckFjdGlvbk1lbnU6IGRhdGEubmF2YmFyLnVzZXJBY3Rpb25NZW51LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZXM6IGRhdGEubmF2YmFyLm1vZHVsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGFiczogZGF0YS5uYXZiYXIubWF4VGFicyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWlja0FjdGlvbnMgOiBkYXRhPy5uYXZiYXI/LnF1aWNrQWN0aW9ucyA/PyBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0aW9uO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==