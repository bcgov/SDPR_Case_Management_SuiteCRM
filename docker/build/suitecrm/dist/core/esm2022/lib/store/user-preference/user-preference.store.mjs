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
import { BehaviorSubject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, shareReplay, take, tap } from 'rxjs/operators';
import { CollectionGQL } from '../../services/api/graphql-api/api.collection.get';
import { deepClone } from 'common';
import { SystemConfigStore } from '../system-config/system-config.store';
import { ProcessService } from '../../services/process/process.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/api/graphql-api/api.collection.get";
import * as i2 from "../system-config/system-config.store";
import * as i3 from "../../services/process/process.service";
import * as i4 from "../../services/local-storage/local-storage.service";
const initialState = {
    userPreferences: {},
    loading: false
};
let internalState = deepClone(initialState);
let cache$ = null;
class UserPreferenceStore {
    constructor(collectionGQL, config, processService, localStorage) {
        this.collectionGQL = collectionGQL;
        this.config = config;
        this.processService = processService;
        this.localStorage = localStorage;
        this.store = new BehaviorSubject(internalState);
        this.state$ = this.store.asObservable();
        this.saveBufferStore = new BehaviorSubject(false);
        this.subs = [];
        this.resourceName = 'userPreferences';
        this.fieldsMetadata = {
            fields: [
                'id',
                '_id',
                'value',
                'items'
            ]
        };
        /**
         * Public long-lived observable streams
         */
        this.userPreferences$ = this.state$.pipe(map(state => state.userPreferences), distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading));
        const uiSettings = config.getConfigValue('ui') ?? {};
        const delay = uiSettings.user_preferences_save_delay ?? 5000;
        this.saveBuffer$ = this.saveBufferStore.asObservable().pipe(debounceTime(delay ?? 5000));
        this.subs.push(this.saveBuffer$.subscribe((value) => {
            if (!value) {
                return;
            }
            this.saveUiPreferences();
        }));
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
        this.subs.forEach(sub => sub.unsubscribe());
    }
    clearAuthBased() {
        this.clear();
    }
    /**
     * Get user preferences value by key
     *
     * @param {string} key to retrieve
     * @returns any users preference
     */
    getUserPreference(key) {
        if (!internalState.userPreferences || !internalState.userPreferences[key]) {
            return null;
        }
        return internalState.userPreferences[key];
    }
    /**
     * Get ui user preferences value by key
     *
     * @param module
     * @param {string} key to retrieve
     * @returns any users preference
     */
    getUi(module, key) {
        const storageKey = module + '-' + key;
        const value = this.storageLoad(module, storageKey);
        if (value != null) {
            return value;
        }
        const ui = internalState?.userPreferences?.ui ?? {};
        return ui[storageKey] ?? null;
    }
    /**
     * Set user preferences value by key
     *
     * @param {string} module name
     * @param {string} key to retrieve
     * @param value
     * @returns any users preference
     */
    setUi(module, key, value) {
        const storageKey = module + '-' + key;
        this.storageSave(module, storageKey, value);
        const ui = internalState?.userPreferences?.ui ?? {};
        ui[storageKey] = value;
        internalState.userPreferences.ui = ui;
        this.saveBufferStore.next(true);
    }
    saveUiPreferences() {
        const processType = 'save-ui-user-preferences';
        const options = {
            preferences: internalState.userPreferences.ui
        };
        this.processService.submit(processType, options).pipe(take(1)).subscribe();
    }
    /**
     * Store the data in local storage
     *
     * @param {string} module to store in
     * @param {string} storageKey to store in
     * @param {} data to store
     */
    storageSave(module, storageKey, data) {
        let storage = this.localStorage.get(storageKey);
        if (!storage) {
            storage = {};
        }
        storage[module] = data;
        this.localStorage.set(storageKey, storage);
    }
    /**
     * Store the key in local storage
     *
     * @param {string} module to load from
     * @param {string} storageKey from load from
     */
    storageLoad(module, storageKey) {
        const storage = this.localStorage.get(storageKey);
        if (!storage || !storage[module]) {
            return null;
        }
        return storage[module];
    }
    /**
     * Initial UserPreferences load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @returns {object} Observable<any>
     */
    load() {
        this.updateState({ ...internalState, loading: true });
        return this.getUserPreferences().pipe(tap(userPreferences => {
            this.updateState({ ...internalState, userPreferences, loading: false });
        }));
    }
    /**
     * Check if loaded
     */
    isCached() {
        return cache$ !== null;
    }
    /**
     * Set pre-loaded preferences and cache
     */
    set(userPreferences) {
        cache$ = of(userPreferences).pipe(shareReplay(1));
        this.updateState({ ...internalState, userPreferences, loading: false });
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
     * Get UserPreferences cached Observable or call the backend
     *
     * @returns {object} Observable<any>
     */
    getUserPreferences() {
        if (cache$ == null) {
            cache$ = this.fetch().pipe(shareReplay(1));
        }
        return cache$;
    }
    /**
     * Fetch the User Preferences from the backend
     *
     * @returns {object} Observable<any>
     */
    fetch() {
        return this.collectionGQL
            .fetchAll(this.resourceName, this.fieldsMetadata).pipe(map(({ data }) => {
            const userPreferences = {};
            if (data.userPreferences && data.userPreferences.edges) {
                data.userPreferences.edges.forEach((edge) => {
                    if (!edge.node.items) {
                        return;
                    }
                    Object.keys(edge.node.items).forEach(key => {
                        userPreferences[key] = edge.node.items[key];
                    });
                });
            }
            return userPreferences;
        }));
    }
    static { this.ɵfac = function UserPreferenceStore_Factory(t) { return new (t || UserPreferenceStore)(i0.ɵɵinject(i1.CollectionGQL), i0.ɵɵinject(i2.SystemConfigStore), i0.ɵɵinject(i3.ProcessService), i0.ɵɵinject(i4.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UserPreferenceStore, factory: UserPreferenceStore.ɵfac, providedIn: 'root' }); }
}
export { UserPreferenceStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserPreferenceStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.CollectionGQL }, { type: i2.SystemConfigStore }, { type: i3.ProcessService }, { type: i4.LocalStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcmVmZXJlbmNlLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFDLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDaEYsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0RBQW9ELENBQUM7Ozs7OztBQVd2RixNQUFNLFlBQVksR0FBb0I7SUFDbEMsZUFBZSxFQUFFLEVBQUU7SUFDbkIsT0FBTyxFQUFFLEtBQUs7Q0FDakIsQ0FBQztBQUVGLElBQUksYUFBYSxHQUFvQixTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFN0QsSUFBSSxNQUFNLEdBQW9CLElBQUksQ0FBQztBQUVuQyxNQUdhLG1CQUFtQjtJQXNCNUIsWUFDYyxhQUE0QixFQUM1QixNQUF5QixFQUN6QixjQUE4QixFQUM5QixZQUFpQztRQUhqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFB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QUFtQixXQUFuQixtQkFBbUIsbUJBRmhCLE1BQU07O1NBRVQsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHNoYXJlUmVwbGF5LCB0YWtlLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtDb2xsZWN0aW9uR1FMfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkvZ3JhcGhxbC1hcGkvYXBpLmNvbGxlY3Rpb24uZ2V0JztcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtQcm9jZXNzU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2NhbC1zdG9yYWdlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclByZWZlcmVuY2VNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyUHJlZmVyZW5jZXMge1xuICAgIHVzZXJQcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VNYXA7XG4gICAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VyUHJlZmVyZW5jZXMgPSB7XG4gICAgdXNlclByZWZlcmVuY2VzOiB7fSxcbiAgICBsb2FkaW5nOiBmYWxzZVxufTtcblxubGV0IGludGVybmFsU3RhdGU6IFVzZXJQcmVmZXJlbmNlcyA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuXG5sZXQgY2FjaGUkOiBPYnNlcnZhYmxlPGFueT4gPSBudWxsO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyUHJlZmVyZW5jZVN0b3JlIGltcGxlbWVudHMgU3RhdGVTdG9yZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxVc2VyUHJlZmVyZW5jZXM+KGludGVybmFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByb3RlY3RlZCBzYXZlQnVmZmVyU3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgICBwcm90ZWN0ZWQgc2F2ZUJ1ZmZlciQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgcHJvdGVjdGVkIHJlc291cmNlTmFtZSA9ICd1c2VyUHJlZmVyZW5jZXMnO1xuICAgIHByb3RlY3RlZCBmaWVsZHNNZXRhZGF0YSA9IHtcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAnaWQnLFxuICAgICAgICAgICAgJ19pZCcsXG4gICAgICAgICAgICAndmFsdWUnLFxuICAgICAgICAgICAgJ2l0ZW1zJ1xuICAgICAgICBdXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBsb25nLWxpdmVkIG9ic2VydmFibGUgc3RyZWFtc1xuICAgICAqL1xuICAgIHVzZXJQcmVmZXJlbmNlcyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS51c2VyUHJlZmVyZW5jZXMpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICBsb2FkaW5nJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmxvYWRpbmcpKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgY29sbGVjdGlvbkdRTDogQ29sbGVjdGlvbkdRTCxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZzogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBwcm9jZXNzU2VydmljZTogUHJvY2Vzc1NlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IHVpU2V0dGluZ3MgPSBjb25maWcuZ2V0Q29uZmlnVmFsdWUoJ3VpJykgPz8ge307XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gdWlTZXR0aW5ncy51c2VyX3ByZWZlcmVuY2VzX3NhdmVfZGVsYXkgPz8gNTAwMDtcbiAgICAgICAgdGhpcy5zYXZlQnVmZmVyJCA9IHRoaXMuc2F2ZUJ1ZmZlclN0b3JlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGVib3VuY2VUaW1lKGRlbGF5ID8/IDUwMDApKTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5zYXZlQnVmZmVyJC5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zYXZlVWlQcmVmZXJlbmNlcygpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFwaVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGNhY2hlJCA9IG51bGw7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB1c2VyIHByZWZlcmVuY2VzIHZhbHVlIGJ5IGtleVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byByZXRyaWV2ZVxuICAgICAqIEByZXR1cm5zIGFueSB1c2VycyBwcmVmZXJlbmNlXG4gICAgICovXG4gICAgcHVibGljIGdldFVzZXJQcmVmZXJlbmNlKGtleTogc3RyaW5nKTogYW55IHtcblxuICAgICAgICBpZiAoIWludGVybmFsU3RhdGUudXNlclByZWZlcmVuY2VzIHx8ICFpbnRlcm5hbFN0YXRlLnVzZXJQcmVmZXJlbmNlc1trZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLnVzZXJQcmVmZXJlbmNlc1trZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB1aSB1c2VyIHByZWZlcmVuY2VzIHZhbHVlIGJ5IGtleVxuICAgICAqXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gcmV0cmlldmVcbiAgICAgKiBAcmV0dXJucyBhbnkgdXNlcnMgcHJlZmVyZW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRVaShtb2R1bGU6IHN0cmluZywga2V5OiBzdHJpbmcpOiBhbnkge1xuXG4gICAgICAgIGNvbnN0IHN0b3JhZ2VLZXkgPSBtb2R1bGUgKyAnLScgKyBrZXk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zdG9yYWdlTG9hZChtb2R1bGUsIHN0b3JhZ2VLZXkpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1aSA9IGludGVybmFsU3RhdGU/LnVzZXJQcmVmZXJlbmNlcz8udWkgPz8ge30gYXMgYW55O1xuICAgICAgICByZXR1cm4gdWlbc3RvcmFnZUtleV0gPz8gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdXNlciBwcmVmZXJlbmNlcyB2YWx1ZSBieSBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gcmV0cmlldmVcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyBhbnkgdXNlcnMgcHJlZmVyZW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRVaShtb2R1bGU6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBzdG9yYWdlS2V5ID0gbW9kdWxlICsgJy0nICsga2V5O1xuICAgICAgICB0aGlzLnN0b3JhZ2VTYXZlKG1vZHVsZSwgc3RvcmFnZUtleSwgdmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IHVpID0gaW50ZXJuYWxTdGF0ZT8udXNlclByZWZlcmVuY2VzPy51aSA/PyB7fSBhcyBhbnk7XG4gICAgICAgIHVpW3N0b3JhZ2VLZXldID0gdmFsdWU7XG5cbiAgICAgICAgaW50ZXJuYWxTdGF0ZS51c2VyUHJlZmVyZW5jZXMudWkgPSB1aTtcblxuICAgICAgICB0aGlzLnNhdmVCdWZmZXJTdG9yZS5uZXh0KHRydWUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzYXZlVWlQcmVmZXJlbmNlcygpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBwcm9jZXNzVHlwZSA9ICdzYXZlLXVpLXVzZXItcHJlZmVyZW5jZXMnO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwcmVmZXJlbmNlczogaW50ZXJuYWxTdGF0ZS51c2VyUHJlZmVyZW5jZXMudWlcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHRoaXMucHJvY2Vzc1NlcnZpY2Uuc3VibWl0KHByb2Nlc3NUeXBlLCBvcHRpb25zKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3JlIHRoZSBkYXRhIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgdG8gc3RvcmUgaW5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RvcmFnZUtleSB0byBzdG9yZSBpblxuICAgICAqIEBwYXJhbSB7fSBkYXRhIHRvIHN0b3JlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHN0b3JhZ2VTYXZlKG1vZHVsZTogc3RyaW5nLCBzdG9yYWdlS2V5OiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQge1xuICAgICAgICBsZXQgc3RvcmFnZSA9IHRoaXMubG9jYWxTdG9yYWdlLmdldChzdG9yYWdlS2V5KTtcblxuICAgICAgICBpZiAoIXN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHN0b3JhZ2UgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0b3JhZ2VbbW9kdWxlXSA9IGRhdGE7XG5cbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0KHN0b3JhZ2VLZXksIHN0b3JhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3JlIHRoZSBrZXkgaW4gbG9jYWwgc3RvcmFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0byBsb2FkIGZyb21cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RvcmFnZUtleSBmcm9tIGxvYWQgZnJvbVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzdG9yYWdlTG9hZChtb2R1bGU6IHN0cmluZywgc3RvcmFnZUtleTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHRoaXMubG9jYWxTdG9yYWdlLmdldChzdG9yYWdlS2V5KTtcblxuICAgICAgICBpZiAoIXN0b3JhZ2UgfHwgIXN0b3JhZ2VbbW9kdWxlXSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RvcmFnZVttb2R1bGVdO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBVc2VyUHJlZmVyZW5jZXMgbG9hZCBpZiBub3QgY2FjaGVkIGFuZCB1cGRhdGUgc3RhdGUuXG4gICAgICogUmV0dXJucyBvYnNlcnZhYmxlIHRvIGJlIHVzZWQgaW4gcmVzb2x2ZXIgaWYgbmVlZGVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBsb2FkaW5nOiB0cnVlfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXNlclByZWZlcmVuY2VzKCkucGlwZShcbiAgICAgICAgICAgIHRhcCh1c2VyUHJlZmVyZW5jZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIHVzZXJQcmVmZXJlbmNlcywgbG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgbG9hZGVkXG4gICAgICovXG4gICAgcHVibGljIGlzQ2FjaGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY2FjaGUkICE9PSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBwcmUtbG9hZGVkIHByZWZlcmVuY2VzIGFuZCBjYWNoZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQodXNlclByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZU1hcCk6IHZvaWQge1xuICAgICAgICBjYWNoZSQgPSBvZih1c2VyUHJlZmVyZW5jZXMpLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCB1c2VyUHJlZmVyZW5jZXMsIGxvYWRpbmc6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgQVBJXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlOiBVc2VyUHJlZmVyZW5jZXMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5uZXh0KGludGVybmFsU3RhdGUgPSBzdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IFVzZXJQcmVmZXJlbmNlcyBjYWNoZWQgT2JzZXJ2YWJsZSBvciBjYWxsIHRoZSBiYWNrZW5kXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0VXNlclByZWZlcmVuY2VzKCk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgaWYgKGNhY2hlJCA9PSBudWxsKSB7XG4gICAgICAgICAgICBjYWNoZSQgPSB0aGlzLmZldGNoKCkucGlwZShcbiAgICAgICAgICAgICAgICBzaGFyZVJlcGxheSgxKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWNoZSQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggdGhlIFVzZXIgUHJlZmVyZW5jZXMgZnJvbSB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZldGNoKCk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbkdRTFxuICAgICAgICAgICAgLmZldGNoQWxsKHRoaXMucmVzb3VyY2VOYW1lLCB0aGlzLmZpZWxkc01ldGFkYXRhKS5waXBlKG1hcCgoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlclByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZU1hcCA9IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudXNlclByZWZlcmVuY2VzICYmIGRhdGEudXNlclByZWZlcmVuY2VzLmVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudXNlclByZWZlcmVuY2VzLmVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlZGdlLm5vZGUuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGVkZ2Uubm9kZS5pdGVtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQcmVmZXJlbmNlc1trZXldID0gZWRnZS5ub2RlLml0ZW1zW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJQcmVmZXJlbmNlcztcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG59XG4iXX0=