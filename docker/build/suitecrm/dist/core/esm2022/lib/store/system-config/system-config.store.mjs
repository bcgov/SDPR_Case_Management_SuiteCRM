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
import { distinctUntilChanged, map, shareReplay, tap } from 'rxjs/operators';
import { CollectionGQL } from '../../services/api/graphql-api/api.collection.get';
import { deepClone } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../services/api/graphql-api/api.collection.get";
const initialState = {
    configs: {},
    loading: false
};
let internalState = deepClone(initialState);
let cache$ = null;
class SystemConfigStore {
    constructor(collectionGQL) {
        this.collectionGQL = collectionGQL;
        this.store = new BehaviorSubject(internalState);
        this.state$ = this.store.asObservable();
        this.resourceName = 'systemConfigs';
        this.fieldsMetadata = {
            fields: [
                'id',
                '_id',
                'value',
                'items'
            ]
        };
        this.configs$ = this.state$.pipe(map(state => state.configs), distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading));
    }
    /**
     * Public Api
     */
    /**
     * Get system config value by key
     *
     * @param {string} configKey of the config
     * @returns {{}|string} config value
     */
    getConfigValue(configKey) {
        if (!internalState.configs || !internalState.configs[configKey]) {
            return null;
        }
        if (internalState.configs[configKey].value !== null) {
            return internalState.configs[configKey].value;
        }
        return internalState.configs[configKey].items;
    }
    /**
     * Get ui config value by key
     *
     * @param {string} configKey of the ui config
     * @returns {{}|string} config value
     */
    getUi(configKey) {
        const ui = this.getConfigValue('ui') ?? {};
        return ui[configKey] ?? null;
    }
    getHomePage() {
        let defaultModule = 'home';
        const defaultModuleConfig = this.getConfigValue('default_module');
        if (defaultModuleConfig) {
            defaultModule = defaultModuleConfig;
        }
        return defaultModule;
    }
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
     * Initial SystemConfigs load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @returns {Observable<{}>} observable
     */
    load() {
        this.updateState({ ...internalState, loading: true });
        return this.getSystemConfigs().pipe(tap(configs => {
            this.updateState({ ...internalState, configs, loading: false });
        }));
    }
    /**
     * Check if loaded
     */
    isCached() {
        return cache$ !== null;
    }
    /**
     * Set pre-loaded configs and cache
     */
    set(configs) {
        cache$ = of(configs).pipe(shareReplay(1));
        this.updateState({ ...internalState, configs, loading: false });
    }
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {{}} state new state
     */
    updateState(state) {
        this.store.next(internalState = state);
    }
    /**
     * Get SystemConfigs cached Observable or call the backend
     *
     * @returns {Observable<{}>} observable
     */
    getSystemConfigs() {
        if (cache$ == null) {
            cache$ = this.fetch().pipe(shareReplay(1));
        }
        return cache$;
    }
    /**
     * Fetch the App strings from the backend
     *
     * @returns {Observable<{}>} observable
     */
    fetch() {
        return this.collectionGQL
            .fetchAll(this.resourceName, this.fieldsMetadata).pipe(map(({ data }) => {
            const configs = {};
            if (data.systemConfigs && data.systemConfigs.edges) {
                data.systemConfigs.edges.forEach((edge) => {
                    // eslint-disable-next-line no-underscore-dangle
                    configs[edge.node._id] = edge.node;
                });
            }
            return configs;
        }));
    }
    static { this.ɵfac = function SystemConfigStore_Factory(t) { return new (t || SystemConfigStore)(i0.ɵɵinject(i1.CollectionGQL)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SystemConfigStore, factory: SystemConfigStore.ɵfac, providedIn: 'root' }); }
}
export { SystemConfigStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SystemConfigStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.CollectionGQL }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLWNvbmZpZy5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxRQUFRLENBQUM7OztBQW1CakMsTUFBTSxZQUFZLEdBQWtCO0lBQ2hDLE9BQU8sRUFBRSxFQUFFO0lBQ1gsT0FBTyxFQUFFLEtBQUs7Q0FDakIsQ0FBQztBQUVGLElBQUksYUFBYSxHQUFrQixTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFM0QsSUFBSSxNQUFNLEdBQW9CLElBQUksQ0FBQztBQUVuQyxNQUdhLGlCQUFpQjtJQWlCMUIsWUFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFidEMsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFnQixhQUFhLENBQUMsQ0FBQztRQUMxRCxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuQyxpQkFBWSxHQUFHLGVBQWUsQ0FBQztRQUMvQixtQkFBYyxHQUFHO1lBQ3ZCLE1BQU0sRUFBRTtnQkFDSixJQUFJO2dCQUNKLEtBQUs7Z0JBQ0wsT0FBTztnQkFDUCxPQUFPO2FBQ1Y7U0FDSixDQUFD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OztPQUlHO0lBQ08sZ0JBQWdCO1FBRXRCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUNoQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FDdEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNqQixDQUFDO1NBQ0w7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLEtBQUs7UUFFWCxPQUFPLElBQUksQ0FBQyxhQUFhO2FBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFO1lBQ2xFLE1BQU0sT0FBTyxHQUFvQixFQUFFLENBQUM7WUFFcEMsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO2dCQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDdEMsZ0RBQWdEO29CQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN2QyxDQUFDLENBQUMsQ0FBQzthQUNOO1lBRUQsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUM7a0ZBaEtRLGlCQUFpQjt1RUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGZCxNQUFNOztTQUVULGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHNoYXJlUmVwbGF5LCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtDb2xsZWN0aW9uR1FMfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkvZ3JhcGhxbC1hcGkvYXBpLmNvbGxlY3Rpb24uZ2V0JztcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi9zdGF0ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3lzdGVtQ29uZmlnIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIF9pZDogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgaXRlbXM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3lzdGVtQ29uZmlnTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBTeXN0ZW1Db25maWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3lzdGVtQ29uZmlncyB7XG4gICAgY29uZmlnczogU3lzdGVtQ29uZmlnTWFwO1xuICAgIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogU3lzdGVtQ29uZmlncyA9IHtcbiAgICBjb25maWdzOiB7fSxcbiAgICBsb2FkaW5nOiBmYWxzZVxufTtcblxubGV0IGludGVybmFsU3RhdGU6IFN5c3RlbUNvbmZpZ3MgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcblxubGV0IGNhY2hlJDogT2JzZXJ2YWJsZTxhbnk+ID0gbnVsbDtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3lzdGVtQ29uZmlnU3RvcmUgaW1wbGVtZW50cyBTdGF0ZVN0b3JlIHtcblxuICAgIGNvbmZpZ3MkOiBPYnNlcnZhYmxlPFN5c3RlbUNvbmZpZ01hcD47XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJvdGVjdGVkIHN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTeXN0ZW1Db25maWdzPihpbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VOYW1lID0gJ3N5c3RlbUNvbmZpZ3MnO1xuICAgIHByb3RlY3RlZCBmaWVsZHNNZXRhZGF0YSA9IHtcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAnaWQnLFxuICAgICAgICAgICAgJ19pZCcsXG4gICAgICAgICAgICAndmFsdWUnLFxuICAgICAgICAgICAgJ2l0ZW1zJ1xuICAgICAgICBdXG4gICAgfTtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb2xsZWN0aW9uR1FMOiBDb2xsZWN0aW9uR1FMKSB7XG4gICAgICAgIHRoaXMuY29uZmlncyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5jb25maWdzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5sb2FkaW5nKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFwaVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0IHN5c3RlbSBjb25maWcgdmFsdWUgYnkga2V5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnS2V5IG9mIHRoZSBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7e318c3RyaW5nfSBjb25maWcgdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q29uZmlnVmFsdWUoY29uZmlnS2V5OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBpZiAoIWludGVybmFsU3RhdGUuY29uZmlncyB8fCAhaW50ZXJuYWxTdGF0ZS5jb25maWdzW2NvbmZpZ0tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGludGVybmFsU3RhdGUuY29uZmlnc1tjb25maWdLZXldLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5jb25maWdzW2NvbmZpZ0tleV0udmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5jb25maWdzW2NvbmZpZ0tleV0uaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHVpIGNvbmZpZyB2YWx1ZSBieSBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWdLZXkgb2YgdGhlIHVpIGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHt7fXxzdHJpbmd9IGNvbmZpZyB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRVaShjb25maWdLZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGNvbnN0IHVpID0gdGhpcy5nZXRDb25maWdWYWx1ZSgndWknKSA/PyB7fTtcbiAgICAgICAgcmV0dXJuIHVpW2NvbmZpZ0tleV0gPz8gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SG9tZVBhZ2UoKTogc3RyaW5nIHtcblxuICAgICAgICBsZXQgZGVmYXVsdE1vZHVsZSA9ICdob21lJztcbiAgICAgICAgY29uc3QgZGVmYXVsdE1vZHVsZUNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnVmFsdWUoJ2RlZmF1bHRfbW9kdWxlJyk7XG5cbiAgICAgICAgaWYgKGRlZmF1bHRNb2R1bGVDb25maWcpIHtcbiAgICAgICAgICAgIGRlZmF1bHRNb2R1bGUgPSBkZWZhdWx0TW9kdWxlQ29uZmlnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRNb2R1bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGNhY2hlJCA9IG51bGw7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgU3lzdGVtQ29uZmlncyBsb2FkIGlmIG5vdCBjYWNoZWQgYW5kIHVwZGF0ZSBzdGF0ZS5cbiAgICAgKiBSZXR1cm5zIG9ic2VydmFibGUgdG8gYmUgdXNlZCBpbiByZXNvbHZlciBpZiBuZWVkZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPHt9Pn0gb2JzZXJ2YWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKCk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgbG9hZGluZzogdHJ1ZX0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN5c3RlbUNvbmZpZ3MoKS5waXBlKFxuICAgICAgICAgICAgdGFwKGNvbmZpZ3MgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGNvbmZpZ3MsIGxvYWRpbmc6IGZhbHNlfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGxvYWRlZFxuICAgICAqL1xuICAgIHB1YmxpYyBpc0NhY2hlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlJCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJlLWxvYWRlZCBjb25maWdzIGFuZCBjYWNoZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQoY29uZmlnczogU3lzdGVtQ29uZmlnTWFwKTogdm9pZCB7XG4gICAgICAgIGNhY2hlJCA9IG9mKGNvbmZpZ3MpLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBjb25maWdzLCBsb2FkaW5nOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIEFQSVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHt7fX0gc3RhdGUgbmV3IHN0YXRlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlOiBTeXN0ZW1Db25maWdzKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dChpbnRlcm5hbFN0YXRlID0gc3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBTeXN0ZW1Db25maWdzIGNhY2hlZCBPYnNlcnZhYmxlIG9yIGNhbGwgdGhlIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPHt9Pn0gb2JzZXJ2YWJsZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTeXN0ZW1Db25maWdzKCk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgaWYgKGNhY2hlJCA9PSBudWxsKSB7XG4gICAgICAgICAgICBjYWNoZSQgPSB0aGlzLmZldGNoKCkucGlwZShcbiAgICAgICAgICAgICAgICBzaGFyZVJlcGxheSgxKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWNoZSQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggdGhlIEFwcCBzdHJpbmdzIGZyb20gdGhlIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPHt9Pn0gb2JzZXJ2YWJsZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBmZXRjaCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb25HUUxcbiAgICAgICAgICAgIC5mZXRjaEFsbCh0aGlzLnJlc291cmNlTmFtZSwgdGhpcy5maWVsZHNNZXRhZGF0YSkucGlwZShtYXAoKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZ3M6IFN5c3RlbUNvbmZpZ01hcCA9IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3lzdGVtQ29uZmlncyAmJiBkYXRhLnN5c3RlbUNvbmZpZ3MuZWRnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zeXN0ZW1Db25maWdzLmVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnc1tlZGdlLm5vZGUuX2lkXSA9IGVkZ2Uubm9kZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ3M7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG59XG4iXX0=