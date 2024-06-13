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
import { BehaviorSubject, combineLatestWith, forkJoin, of } from 'rxjs';
import { distinctUntilChanged, first, map, shareReplay, take, tap } from 'rxjs/operators';
import { EntityGQL } from '../../services/api/graphql-api/api.entity.get';
import { deepClone, emptyObject } from 'common';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { ProcessService } from '../../services/process/process.service';
import { SystemConfigStore } from '../system-config/system-config.store';
import { isString } from 'lodash-es';
import * as i0 from "@angular/core";
import * as i1 from "../../services/api/graphql-api/api.entity.get";
import * as i2 from "../../services/local-storage/local-storage.service";
import * as i3 from "../../services/process/process.service";
import * as i4 from "../system-config/system-config.store";
const initialState = {
    appStrings: {},
    appListStrings: {},
    modStrings: {},
    languageKey: 'en_us',
    loaded: {},
    hasChanged: false
};
let internalState = deepClone(initialState);
const initialCache = {
    appStrings: {},
    appListStrings: {},
    modStrings: {},
};
let loadedLanguages = {};
let cache = deepClone(initialCache);
class LanguageStore {
    constructor(recordGQL, localStorage, processService, configs) {
        this.recordGQL = recordGQL;
        this.localStorage = localStorage;
        this.processService = processService;
        this.configs = configs;
        this.store = new BehaviorSubject(internalState);
        this.state$ = this.store.asObservable();
        this.config = {
            appStrings: {
                fetch: 'fetchAppStrings',
                resourceName: 'appStrings',
                metadata: {
                    fields: [
                        'id',
                        '_id',
                        'items'
                    ]
                }
            },
            appListStrings: {
                fetch: 'fetchAppListStrings',
                resourceName: 'appListStrings',
                metadata: {
                    fields: [
                        'id',
                        '_id',
                        'items'
                    ]
                }
            },
            modStrings: {
                fetch: 'fetchModStrings',
                resourceName: 'modStrings',
                metadata: {
                    fields: [
                        'id',
                        '_id',
                        'items'
                    ]
                }
            },
        };
        this.appStrings$ = this.state$.pipe(map(state => state.appStrings), distinctUntilChanged());
        this.appListStrings$ = this.state$.pipe(map(state => state.appListStrings), distinctUntilChanged());
        this.modStrings$ = this.state$.pipe(map(state => state.modStrings), distinctUntilChanged());
        this.languageKey$ = this.state$.pipe(map(state => state.languageKey), distinctUntilChanged());
        this.vm$ = this.appStrings$
            .pipe(combineLatestWith(this.appListStrings$, this.modStrings$, this.languageKey$), map(([appStrings, appListStrings, modStrings, languageKey]) => ({ appStrings, appListStrings, modStrings, languageKey })));
    }
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear() {
        loadedLanguages = {};
        cache = deepClone(initialCache);
        this.updateState(deepClone(initialState));
    }
    clearAuthBased() {
        const keysToClear = ['modStrings', 'appListStrings'];
        keysToClear.forEach(type => {
            if (loadedLanguages && loadedLanguages[type]) {
                delete loadedLanguages[type];
            }
        });
        cache.modStrings = {};
        cache.appListStrings = {};
    }
    /**
     * Update the language strings toe the given language
     *
     * @param {string} languageKey language key
     * @param {boolean} reload
     */
    changeLanguage(languageKey, reload = false) {
        const types = [];
        Object.keys(loadedLanguages).forEach(type => loadedLanguages[type] && types.push(type));
        internalState.hasChanged = true;
        return this.load(languageKey, types, reload).pipe(tap(() => {
            this.localStorage.set('selected_language', languageKey, true);
        }));
    }
    /**
     * Get All languageStrings label by key
     *
     * @returns {object} LanguageStrings
     */
    getLanguageStrings() {
        if (!internalState) {
            return null;
        }
        return {
            appStrings: internalState.appStrings,
            appListStrings: internalState.appListStrings,
            modStrings: internalState.modStrings,
            languageKey: internalState.languageKey
        };
    }
    /**
     * Get AppStrings label by key
     *
     * @param {string} labelKey to fetch
     * @returns {string} label
     */
    getAppString(labelKey) {
        if (!internalState.appStrings || !internalState.appStrings[labelKey]) {
            return null;
        }
        return internalState.appStrings[labelKey];
    }
    /**
     * Get AppListStrings label by key
     *
     * @param {string} labelKey to fetch
     * @returns {string|{}} app strings
     */
    getAppListString(labelKey) {
        if (!internalState.appListStrings || !internalState.appListStrings[labelKey]) {
            return null;
        }
        return internalState.appListStrings[labelKey];
    }
    /**
     * Get ModStrings label by key
     *
     * @param {string} labelKey to fetch
     * @returns {string|{}} mod strings
     */
    getModString(labelKey) {
        if (!internalState.modStrings || !internalState.modStrings[labelKey]) {
            return null;
        }
        return internalState.modStrings[labelKey];
    }
    /**
     * Get field label
     *
     * @param {string} labelKey to fetch
     * @param {string} module to use
     * @param {object} lang to use
     * @returns {string} label
     */
    getFieldLabel(labelKey, module = null, lang = null) {
        let languages = lang;
        if (!lang) {
            languages = this.getLanguageStrings();
        }
        if (!languages || !languages.modStrings || !labelKey) {
            return '';
        }
        let label = '';
        if (module) {
            label = languages.modStrings[module] && languages.modStrings[module][labelKey];
        }
        if (!label) {
            label = languages.appStrings && languages.appStrings[labelKey];
        }
        return label || '';
    }
    /**
     * Get list label
     *
     * @param {string} listKey to fetch
     * @param {string} labelKey to fetch
     * @returns {string} label
     */
    getListLabel(listKey, labelKey) {
        if (!listKey || !labelKey) {
            return '';
        }
        const listStrings = this.getAppListString(listKey);
        if (!listStrings) {
            return '';
        }
        return listStrings[labelKey] || '';
    }
    /**
     * Get all available string types
     *
     * @returns {string[]} string types
     */
    getAvailableStringsTypes() {
        return Object.keys(this.config);
    }
    /**
     * Returns whether the language has changed manually
     *
     * @returns {boolean} has changed
     */
    hasLanguageChanged() {
        return internalState.hasChanged;
    }
    /**
     * Returns the currently active language
     *
     * @returns {string} current language key
     */
    getCurrentLanguage() {
        const storedLanguage = this.localStorage.get('selected_language');
        if (storedLanguage) {
            return storedLanguage;
        }
        return internalState.languageKey ?? 'en_us';
    }
    /**
     * Returns the active language
     *
     * @returns {string} active language key
     */
    getActiveLanguage() {
        return internalState.languageKey ?? '';
    }
    /**
     * Returns the selected language
     *
     * @returns {string} selected language key
     */
    getSelectedLanguage() {
        return this.localStorage.get('selected_language') ?? '';
    }
    /**
     * Check if language is enabled
     * @param currentLanguage
     */
    isLanguageEnabled(currentLanguage) {
        if (!currentLanguage) {
            return false;
        }
        const languages = this.configs.getConfigValue('languages') ?? {};
        const disabled = this.getDisabledLanguages();
        const languageKeys = Object.keys(languages);
        if (!languageKeys.length) {
            return false;
        }
        return languageKeys.includes(currentLanguage) && !disabled.includes(currentLanguage);
    }
    /**
     * Get disabled languages
     */
    getDisabledLanguages() {
        const disabledConfig = this.configs.getConfigValue('disabled_languages') ?? '';
        if (!isString(disabledConfig) || disabledConfig === '') {
            return [];
        }
        return disabledConfig.replace(' ', '').split(',');
    }
    /**
     * Get enabled languages
     */
    getEnabledLanguages() {
        const languages = this.configs.getConfigValue('languages') ?? {};
        const disabled = this.getDisabledLanguages();
        const enabled = {};
        const enabledKeys = Object.keys(languages).filter(value => !disabled.includes(value));
        enabledKeys.forEach(key => {
            enabled[key] = languages[key];
        });
        return enabled;
    }
    /**
     * Get fist language in list
     * @private
     */
    getFirstLanguage() {
        const languages = this.configs.getConfigValue('languages') ?? {};
        const languageKeys = Object.keys(languages);
        return languageKeys.sort()[0] ?? '';
    }
    /**
     * Initial Language Strings Load for given language and types if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} languageKey to load
     * @param {string[]} types to load
     * @param {boolean} reload
     * @returns {object} Observable
     */
    load(languageKey, types, reload = false) {
        const streams$ = [];
        types.forEach(type => streams$.push(this.getStrings(languageKey, type, reload)));
        return forkJoin(streams$).pipe(first(), tap(result => {
            const stateUpdate = { ...internalState, languageKey };
            types.forEach((type, index) => {
                stateUpdate[type] = result[index];
                loadedLanguages[type] = true;
            });
            this.updateState(stateUpdate);
        }));
    }
    /**
     * Check if loaded
     */
    areAllCached() {
        let isCached = true;
        isCached = isCached && !emptyObject(cache?.appStrings ?? {});
        isCached = isCached && !emptyObject(cache?.appListStrings ?? {});
        isCached = isCached && !emptyObject(cache?.modStrings ?? {});
        return isCached;
    }
    /**
     * Set pre-loaded strings and cache
     */
    set(languageKey, languageStrings) {
        const stateUpdate = { ...internalState, languageKey };
        if (languageStrings.appStrings && !emptyObject(languageStrings.appStrings)) {
            cache['appStrings'][languageKey] = of(languageStrings.appStrings).pipe(shareReplay(1));
            stateUpdate['appStrings'] = languageStrings.appStrings;
            loadedLanguages['appStrings'] = true;
        }
        if (languageStrings.appListStrings && !emptyObject(languageStrings.appListStrings)) {
            cache['appListStrings'][languageKey] = of(languageStrings.appListStrings).pipe(shareReplay(1));
            stateUpdate['appListStrings'] = languageStrings.appListStrings;
            loadedLanguages['appListStrings'] = true;
        }
        if (languageStrings.modStrings && !emptyObject(languageStrings.modStrings)) {
            cache['modStrings'][languageKey] = of(languageStrings.modStrings).pipe(shareReplay(1));
            stateUpdate['modStrings'] = languageStrings.modStrings;
            loadedLanguages['modStrings'] = true;
        }
        this.updateState(stateUpdate);
    }
    /**
     * Set session language
     */
    setSessionLanguage() {
        const processType = 'set-session-language';
        const options = {
            language: internalState.languageKey
        };
        return this.processService.submit(processType, options).pipe(take(1));
    }
    /**
     * Internal API
     */
    /**
     * Update internal state cache and emit from store...
     *
     * @param {{}} state to set
     */
    updateState(state) {
        this.store.next(internalState = state);
    }
    /**
     * Get given $type of strings Observable from cache  or call the backend
     *
     * @param {string} language to load
     * @param {string} type load
     * @param {boolean} reload
     * @returns {object} Observable<any>
     */
    getStrings(language, type, reload = false) {
        const stringsCache = cache[type];
        const fetchMethod = this.config[type].fetch;
        if (stringsCache[language] && reload === false) {
            return stringsCache[language];
        }
        stringsCache[language] = this[fetchMethod](language).pipe(shareReplay(1));
        return stringsCache[language];
    }
    /**
     * Fetch the App strings from the backend
     *
     * @param {string} language to fetch
     * @returns {{}} Observable<{}>
     */
    fetchAppStrings(language) {
        const resourceName = this.config.appStrings.resourceName;
        const fields = this.config.appStrings.metadata;
        return this.recordGQL.fetch(resourceName, `/api/app-strings/${language}`, fields)
            .pipe(map(({ data }) => {
            let items = {};
            if (data.appStrings) {
                items = data.appStrings.items;
            }
            return items;
        }));
    }
    /**
     * Fetch the App list strings from the backend
     *
     * @param {string} language to fetch
     * @returns {{}} Observable<{}>
     */
    fetchAppListStrings(language) {
        const resourceName = this.config.appListStrings.resourceName;
        const fields = this.config.appListStrings.metadata;
        return this.recordGQL.fetch(resourceName, `/api/app-list-strings/${language}`, fields)
            .pipe(map(({ data }) => {
            let items = {};
            if (data.appListStrings) {
                items = data.appListStrings.items;
            }
            return items;
        }));
    }
    /**
     * Fetch the Mod strings from the backend
     *
     * @param {string} language to fetch
     * @returns {{}} Observable<{}>
     */
    fetchModStrings(language) {
        const resourceName = this.config.modStrings.resourceName;
        const fields = this.config.modStrings.metadata;
        return this.recordGQL.fetch(resourceName, `/api/mod-strings/${language}`, fields)
            .pipe(map(({ data }) => {
            let items = {};
            if (data.modStrings) {
                items = data.modStrings.items;
            }
            return items;
        }));
    }
    static { this.ɵfac = function LanguageStore_Factory(t) { return new (t || LanguageStore)(i0.ɵɵinject(i1.EntityGQL), i0.ɵɵinject(i2.LocalStorageService), i0.ɵɵinject(i3.ProcessService), i0.ɵɵinject(i4.SystemConfigStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LanguageStore, factory: LanguageStore.ɵfac, providedIn: 'root' }); }
}
export { LanguageStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LanguageStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.EntityGQL }, { type: i2.LocalStorageService }, { type: i3.ProcessService }, { type: i4.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGVBQWUsRUFBaUIsaUJBQWlCLEVBQUUsUUFBUSxFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNqRyxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hGLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBWSxNQUFNLFFBQVEsQ0FBQztBQUV6RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvREFBb0QsQ0FBQztBQUN2RixPQUFPLEVBQVUsY0FBYyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLFdBQVcsQ0FBQzs7Ozs7O0FBb0NuQyxNQUFNLFlBQVksR0FBa0I7SUFDaEMsVUFBVSxFQUFFLEVBQUU7SUFDZCxjQUFjLEVBQUUsRUFBRTtJQUNsQixVQUFVLEVBQUUsRUFBRTtJQUNkLFdBQVcsRUFBRSxPQUFPO0lBQ3BCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsVUFBVSxFQUFFLEtBQUs7Q0FDcEIsQ0FBQztBQUVGLElBQUksYUFBYSxHQUFrQixTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFM0QsTUFBTSxZQUFZ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O09BS0c7SUFDTyxlQUFlLENBQUMsUUFBZ0I7UUFDdEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQ3pELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUMvQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxvQkFBb0IsUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDO2FBQzVFLElBQUksQ0FDRCxHQUFHLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUU7WUFDWCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7WUFFZixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pCLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzthQUNqQztZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDVixDQUFDOzhFQXBpQlEsYUFBYTt1RUFBYixhQUFhLFdBQWIsYUFBYSxtQkFGVixNQUFNOztTQUVULGFBQWE7dUZBQWIsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgZm9ya0pvaW4sIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpcnN0LCBtYXAsIHNoYXJlUmVwbGF5LCB0YWtlLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7RW50aXR5R1FMfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkvZ3JhcGhxbC1hcGkvYXBpLmVudGl0eS5nZXQnO1xuaW1wb3J0IHtkZWVwQ2xvbmUsIGVtcHR5T2JqZWN0LCBTdHJpbmdNYXB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1N0YXRlU3RvcmV9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtQcm9jZXNzLCBQcm9jZXNzU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7aXNTdHJpbmd9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VTdHJpbmdNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZUxpc3RTdHJpbmdNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IExhbmd1YWdlU3RyaW5nTWFwO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZExhbmd1YWdlU3RyaW5nTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBMYW5ndWFnZVN0cmluZ01hcDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZVN0YXRlIHtcbiAgICBhcHBTdHJpbmdzOiBMYW5ndWFnZVN0cmluZ01hcDtcbiAgICBhcHBMaXN0U3RyaW5nczogTGFuZ3VhZ2VMaXN0U3RyaW5nTWFwO1xuICAgIG1vZFN0cmluZ3M6IExhbmd1YWdlTGlzdFN0cmluZ01hcDtcbiAgICBsYW5ndWFnZUtleTogc3RyaW5nO1xuICAgIGxvYWRlZD86IExvYWRlZExhbmd1YWdlU3RyaW5nTWFwO1xuICAgIGhhc0NoYW5nZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VTdHJpbmdzIHtcbiAgICBhcHBTdHJpbmdzOiBMYW5ndWFnZVN0cmluZ01hcDtcbiAgICBhcHBMaXN0U3RyaW5nczogTGFuZ3VhZ2VMaXN0U3RyaW5nTWFwO1xuICAgIG1vZFN0cmluZ3M6IExhbmd1YWdlTGlzdFN0cmluZ01hcDtcbiAgICBsYW5ndWFnZUtleTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlQ2FjaGUge1xuICAgIFtrZXk6IHN0cmluZ106IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIH07XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogTGFuZ3VhZ2VTdGF0ZSA9IHtcbiAgICBhcHBTdHJpbmdzOiB7fSxcbiAgICBhcHBMaXN0U3RyaW5nczoge30sXG4gICAgbW9kU3RyaW5nczoge30sXG4gICAgbGFuZ3VhZ2VLZXk6ICdlbl91cycsXG4gICAgbG9hZGVkOiB7fSxcbiAgICBoYXNDaGFuZ2VkOiBmYWxzZVxufTtcblxubGV0IGludGVybmFsU3RhdGU6IExhbmd1YWdlU3RhdGUgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcblxuY29uc3QgaW5pdGlhbENhY2hlOiBMYW5ndWFnZUNhY2hlID0ge1xuICAgIGFwcFN0cmluZ3M6IHt9LFxuICAgIGFwcExpc3RTdHJpbmdzOiB7fSxcbiAgICBtb2RTdHJpbmdzOiB7fSxcbn07XG5cbmxldCBsb2FkZWRMYW5ndWFnZXMgPSB7fTtcbmxldCBjYWNoZTogTGFuZ3VhZ2VDYWNoZSA9IGRlZXBDbG9uZShpbml0aWFsQ2FjaGUpO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVN0b3JlIGltcGxlbWVudHMgU3RhdGVTdG9yZSB7XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbG9uZy1saXZlZCBvYnNlcnZhYmxlIHN0cmVhbXNcbiAgICAgKi9cbiAgICBhcHBTdHJpbmdzJDogT2JzZXJ2YWJsZTxMYW5ndWFnZVN0cmluZ01hcD47XG4gICAgYXBwTGlzdFN0cmluZ3MkOiBPYnNlcnZhYmxlPExhbmd1YWdlTGlzdFN0cmluZ01hcD47XG4gICAgbW9kU3RyaW5ncyQ6IE9ic2VydmFibGU8TGFuZ3VhZ2VMaXN0U3RyaW5nTWFwPjtcbiAgICBsYW5ndWFnZUtleSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAgIC8qKlxuICAgICAqIFZpZXdNb2RlbCB0aGF0IHJlc29sdmVzIG9uY2UgYWxsIHRoZSBkYXRhIGlzIHJlYWR5IChvciB1cGRhdGVkKS4uLlxuICAgICAqL1xuICAgIHZtJDogT2JzZXJ2YWJsZTxMYW5ndWFnZVN0cmluZ3M+O1xuXG4gICAgcHJvdGVjdGVkIHN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMYW5ndWFnZVN0YXRlPihpbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcblxuICAgIHByb3RlY3RlZCBjb25maWcgPSB7XG4gICAgICAgIGFwcFN0cmluZ3M6IHtcbiAgICAgICAgICAgIGZldGNoOiAnZmV0Y2hBcHBTdHJpbmdzJyxcbiAgICAgICAgICAgIHJlc291cmNlTmFtZTogJ2FwcFN0cmluZ3MnLFxuICAgICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgJ19pZCcsXG4gICAgICAgICAgICAgICAgICAgICdpdGVtcydcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFwcExpc3RTdHJpbmdzOiB7XG4gICAgICAgICAgICBmZXRjaDogJ2ZldGNoQXBwTGlzdFN0cmluZ3MnLFxuICAgICAgICAgICAgcmVzb3VyY2VOYW1lOiAnYXBwTGlzdFN0cmluZ3MnLFxuICAgICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgJ19pZCcsXG4gICAgICAgICAgICAgICAgICAgICdpdGVtcydcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZFN0cmluZ3M6IHtcbiAgICAgICAgICAgIGZldGNoOiAnZmV0Y2hNb2RTdHJpbmdzJyxcbiAgICAgICAgICAgIHJlc291cmNlTmFtZTogJ21vZFN0cmluZ3MnLFxuICAgICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgJ19pZCcsXG4gICAgICAgICAgICAgICAgICAgICdpdGVtcydcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkR1FMOiBFbnRpdHlHUUwsXG4gICAgICAgIHByb3RlY3RlZCBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBwcm9jZXNzU2VydmljZTogUHJvY2Vzc1NlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBjb25maWdzOiBTeXN0ZW1Db25maWdTdG9yZVxuICAgICkge1xuXG4gICAgICAgIHRoaXMuYXBwU3RyaW5ncyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5hcHBTdHJpbmdzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuYXBwTGlzdFN0cmluZ3MkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuYXBwTGlzdFN0cmluZ3MpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5tb2RTdHJpbmdzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLm1vZFN0cmluZ3MpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZUtleSQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5sYW5ndWFnZUtleSksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuXG4gICAgICAgIHRoaXMudm0kID0gdGhpcy5hcHBTdHJpbmdzJFxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwTGlzdFN0cmluZ3MkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZFN0cmluZ3MkLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlS2V5JFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgbWFwKChcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwU3RyaW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcExpc3RTdHJpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kU3RyaW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlS2V5XG4gICAgICAgICAgICAgICAgICAgIF0pID0+ICh7YXBwU3RyaW5ncywgYXBwTGlzdFN0cmluZ3MsIG1vZFN0cmluZ3MsIGxhbmd1YWdlS2V5fSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBBcGlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBsb2FkZWRMYW5ndWFnZXMgPSB7fTtcbiAgICAgICAgY2FjaGUgPSBkZWVwQ2xvbmUoaW5pdGlhbENhY2hlKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyQXV0aEJhc2VkKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXlzVG9DbGVhciA9IFsnbW9kU3RyaW5ncycsICdhcHBMaXN0U3RyaW5ncyddO1xuXG4gICAgICAgIGtleXNUb0NsZWFyLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAgICAgICBpZiAobG9hZGVkTGFuZ3VhZ2VzICYmIGxvYWRlZExhbmd1YWdlc1t0eXBlXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBsb2FkZWRMYW5ndWFnZXNbdHlwZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNhY2hlLm1vZFN0cmluZ3MgPSB7fTtcbiAgICAgICAgY2FjaGUuYXBwTGlzdFN0cmluZ3MgPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGxhbmd1YWdlIHN0cmluZ3MgdG9lIHRoZSBnaXZlbiBsYW5ndWFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlS2V5IGxhbmd1YWdlIGtleVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVsb2FkXG4gICAgICovXG4gICAgcHVibGljIGNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlS2V5OiBzdHJpbmcsIHJlbG9hZCA9IGZhbHNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgICAgICBPYmplY3Qua2V5cyhsb2FkZWRMYW5ndWFnZXMpLmZvckVhY2godHlwZSA9PiBsb2FkZWRMYW5ndWFnZXNbdHlwZV0gJiYgdHlwZXMucHVzaCh0eXBlKSk7XG5cbiAgICAgICAgaW50ZXJuYWxTdGF0ZS5oYXNDaGFuZ2VkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkKGxhbmd1YWdlS2V5LCB0eXBlcywgcmVsb2FkKS5waXBlKFxuICAgICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5zZXQoJ3NlbGVjdGVkX2xhbmd1YWdlJywgbGFuZ3VhZ2VLZXksIHRydWUpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBBbGwgbGFuZ3VhZ2VTdHJpbmdzIGxhYmVsIGJ5IGtleVxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gTGFuZ3VhZ2VTdHJpbmdzXG4gICAgICovXG4gICAgcHVibGljIGdldExhbmd1YWdlU3RyaW5ncygpOiBMYW5ndWFnZVN0cmluZ3Mge1xuICAgICAgICBpZiAoIWludGVybmFsU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFwcFN0cmluZ3M6IGludGVybmFsU3RhdGUuYXBwU3RyaW5ncyxcbiAgICAgICAgICAgIGFwcExpc3RTdHJpbmdzOiBpbnRlcm5hbFN0YXRlLmFwcExpc3RTdHJpbmdzLFxuICAgICAgICAgICAgbW9kU3RyaW5nczogaW50ZXJuYWxTdGF0ZS5tb2RTdHJpbmdzLFxuICAgICAgICAgICAgbGFuZ3VhZ2VLZXk6IGludGVybmFsU3RhdGUubGFuZ3VhZ2VLZXlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgQXBwU3RyaW5ncyBsYWJlbCBieSBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbEtleSB0byBmZXRjaFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGxhYmVsXG4gICAgICovXG4gICAgcHVibGljIGdldEFwcFN0cmluZyhsYWJlbEtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFpbnRlcm5hbFN0YXRlLmFwcFN0cmluZ3MgfHwgIWludGVybmFsU3RhdGUuYXBwU3RyaW5nc1tsYWJlbEtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmFwcFN0cmluZ3NbbGFiZWxLZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBBcHBMaXN0U3RyaW5ncyBsYWJlbCBieSBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbEtleSB0byBmZXRjaFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8e319IGFwcCBzdHJpbmdzXG4gICAgICovXG4gICAgcHVibGljIGdldEFwcExpc3RTdHJpbmcobGFiZWxLZXk6IHN0cmluZyk6IHN0cmluZyB8IExhbmd1YWdlU3RyaW5nTWFwIHtcblxuICAgICAgICBpZiAoIWludGVybmFsU3RhdGUuYXBwTGlzdFN0cmluZ3MgfHwgIWludGVybmFsU3RhdGUuYXBwTGlzdFN0cmluZ3NbbGFiZWxLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmFwcExpc3RTdHJpbmdzW2xhYmVsS2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgTW9kU3RyaW5ncyBsYWJlbCBieSBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbEtleSB0byBmZXRjaFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8e319IG1vZCBzdHJpbmdzXG4gICAgICovXG4gICAgcHVibGljIGdldE1vZFN0cmluZyhsYWJlbEtleTogc3RyaW5nKTogc3RyaW5nIHwgTGFuZ3VhZ2VTdHJpbmdNYXAge1xuXG4gICAgICAgIGlmICghaW50ZXJuYWxTdGF0ZS5tb2RTdHJpbmdzIHx8ICFpbnRlcm5hbFN0YXRlLm1vZFN0cmluZ3NbbGFiZWxLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLm1vZFN0cmluZ3NbbGFiZWxLZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBmaWVsZCBsYWJlbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsS2V5IHRvIGZldGNoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZyB0byB1c2VcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBsYWJlbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRGaWVsZExhYmVsKGxhYmVsS2V5OiBzdHJpbmcsIG1vZHVsZTogc3RyaW5nID0gbnVsbCwgbGFuZzogTGFuZ3VhZ2VTdHJpbmdzID0gbnVsbCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBsYW5ndWFnZXMgPSBsYW5nO1xuXG4gICAgICAgIGlmICghbGFuZykge1xuICAgICAgICAgICAgbGFuZ3VhZ2VzID0gdGhpcy5nZXRMYW5ndWFnZVN0cmluZ3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbGFuZ3VhZ2VzIHx8ICFsYW5ndWFnZXMubW9kU3RyaW5ncyB8fCAhbGFiZWxLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsYWJlbCA9ICcnO1xuXG4gICAgICAgIGlmIChtb2R1bGUpIHtcbiAgICAgICAgICAgIGxhYmVsID0gbGFuZ3VhZ2VzLm1vZFN0cmluZ3NbbW9kdWxlXSAmJiBsYW5ndWFnZXMubW9kU3RyaW5nc1ttb2R1bGVdW2xhYmVsS2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsID0gbGFuZ3VhZ2VzLmFwcFN0cmluZ3MgJiYgbGFuZ3VhZ2VzLmFwcFN0cmluZ3NbbGFiZWxLZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxhYmVsIHx8ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBsaXN0IGxhYmVsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGlzdEtleSB0byBmZXRjaFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbEtleSB0byBmZXRjaFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGxhYmVsXG4gICAgICovXG4gICAgcHVibGljIGdldExpc3RMYWJlbChsaXN0S2V5OiBzdHJpbmcsIGxhYmVsS2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICAgIGlmICghbGlzdEtleSB8fCAhbGFiZWxLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxpc3RTdHJpbmdzID0gdGhpcy5nZXRBcHBMaXN0U3RyaW5nKGxpc3RLZXkpO1xuXG4gICAgICAgIGlmICghbGlzdFN0cmluZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0U3RyaW5nc1tsYWJlbEtleV0gfHwgJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBhdmFpbGFibGUgc3RyaW5nIHR5cGVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119IHN0cmluZyB0eXBlc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBdmFpbGFibGVTdHJpbmdzVHlwZXMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgbGFuZ3VhZ2UgaGFzIGNoYW5nZWQgbWFudWFsbHlcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBoYXMgY2hhbmdlZFxuICAgICAqL1xuICAgIHB1YmxpYyBoYXNMYW5ndWFnZUNoYW5nZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmhhc0NoYW5nZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudGx5IGFjdGl2ZSBsYW5ndWFnZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gY3VycmVudCBsYW5ndWFnZSBrZXlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q3VycmVudExhbmd1YWdlKCk6IHN0cmluZyB7XG5cbiAgICAgICAgY29uc3Qgc3RvcmVkTGFuZ3VhZ2UgPSB0aGlzLmxvY2FsU3RvcmFnZS5nZXQoJ3NlbGVjdGVkX2xhbmd1YWdlJyk7XG5cbiAgICAgICAgaWYgKHN0b3JlZExhbmd1YWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmVkTGFuZ3VhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5sYW5ndWFnZUtleSA/PyAnZW5fdXMnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFjdGl2ZSBsYW5ndWFnZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gYWN0aXZlIGxhbmd1YWdlIGtleVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBY3RpdmVMYW5ndWFnZSgpOiBzdHJpbmcge1xuXG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmxhbmd1YWdlS2V5ID8/ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNlbGVjdGVkIGxhbmd1YWdlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBzZWxlY3RlZCBsYW5ndWFnZSBrZXlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U2VsZWN0ZWRMYW5ndWFnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0KCdzZWxlY3RlZF9sYW5ndWFnZScpID8/ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGxhbmd1YWdlIGlzIGVuYWJsZWRcbiAgICAgKiBAcGFyYW0gY3VycmVudExhbmd1YWdlXG4gICAgICovXG4gICAgcHVibGljIGlzTGFuZ3VhZ2VFbmFibGVkKGN1cnJlbnRMYW5ndWFnZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghY3VycmVudExhbmd1YWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0gdGhpcy5jb25maWdzLmdldENvbmZpZ1ZhbHVlKCdsYW5ndWFnZXMnKSA/PyB7fTtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmdldERpc2FibGVkTGFuZ3VhZ2VzKCk7XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlS2V5cyA9IE9iamVjdC5rZXlzKGxhbmd1YWdlcyk7XG5cbiAgICAgICAgaWYgKCFsYW5ndWFnZUtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFuZ3VhZ2VLZXlzLmluY2x1ZGVzKGN1cnJlbnRMYW5ndWFnZSkgJiYgIWRpc2FibGVkLmluY2x1ZGVzKGN1cnJlbnRMYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGRpc2FibGVkIGxhbmd1YWdlc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXREaXNhYmxlZExhbmd1YWdlcygpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGRpc2FibGVkQ29uZmlnID0gdGhpcy5jb25maWdzLmdldENvbmZpZ1ZhbHVlKCdkaXNhYmxlZF9sYW5ndWFnZXMnKSA/PyAnJztcbiAgICAgICAgaWYgKCFpc1N0cmluZyhkaXNhYmxlZENvbmZpZykgfHwgZGlzYWJsZWRDb25maWcgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpc2FibGVkQ29uZmlnLnJlcGxhY2UoJyAnLCAnJykuc3BsaXQoJywnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZW5hYmxlZCBsYW5ndWFnZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RW5hYmxlZExhbmd1YWdlcygpOiBTdHJpbmdNYXAge1xuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSB0aGlzLmNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ2xhbmd1YWdlcycpID8/IHt9O1xuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZ2V0RGlzYWJsZWRMYW5ndWFnZXMoKTtcblxuICAgICAgICBjb25zdCBlbmFibGVkID0ge307XG4gICAgICAgIGNvbnN0IGVuYWJsZWRLZXlzID0gT2JqZWN0LmtleXMobGFuZ3VhZ2VzKS5maWx0ZXIodmFsdWUgPT4gIWRpc2FibGVkLmluY2x1ZGVzKHZhbHVlKSk7XG4gICAgICAgIGVuYWJsZWRLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGVuYWJsZWRba2V5XSA9IGxhbmd1YWdlc1trZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZW5hYmxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZmlzdCBsYW5ndWFnZSBpbiBsaXN0XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Rmlyc3RMYW5ndWFnZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSB0aGlzLmNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ2xhbmd1YWdlcycpID8/IHt9O1xuICAgICAgICBjb25zdCBsYW5ndWFnZUtleXMgPSBPYmplY3Qua2V5cyhsYW5ndWFnZXMpO1xuICAgICAgICByZXR1cm4gbGFuZ3VhZ2VLZXlzLnNvcnQoKVswXSA/PyAnJztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgTGFuZ3VhZ2UgU3RyaW5ncyBMb2FkIGZvciBnaXZlbiBsYW5ndWFnZSBhbmQgdHlwZXMgaWYgbm90IGNhY2hlZCBhbmQgdXBkYXRlIHN0YXRlLlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSB0byBiZSB1c2VkIGluIHJlc29sdmVyIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlS2V5IHRvIGxvYWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0eXBlcyB0byBsb2FkXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZWxvYWRcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlXG4gICAgICovXG4gICAgcHVibGljIGxvYWQobGFuZ3VhZ2VLZXk6IHN0cmluZywgdHlwZXM6IHN0cmluZ1tdLCByZWxvYWQgPSBmYWxzZSk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgY29uc3Qgc3RyZWFtcyQ6IEFycmF5PE9ic2VydmFibGU8YW55Pj4gPSBbXTtcblxuICAgICAgICB0eXBlcy5mb3JFYWNoKHR5cGUgPT4gc3RyZWFtcyQucHVzaCh0aGlzLmdldFN0cmluZ3MobGFuZ3VhZ2VLZXksIHR5cGUsIHJlbG9hZCkpKTtcblxuICAgICAgICByZXR1cm4gZm9ya0pvaW4oc3RyZWFtcyQpLnBpcGUoXG4gICAgICAgICAgICBmaXJzdCgpLFxuICAgICAgICAgICAgdGFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVVcGRhdGUgPSB7Li4uaW50ZXJuYWxTdGF0ZSwgbGFuZ3VhZ2VLZXl9O1xuXG4gICAgICAgICAgICAgICAgdHlwZXMuZm9yRWFjaCgodHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVVcGRhdGVbdHlwZV0gPSByZXN1bHRbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBsb2FkZWRMYW5ndWFnZXNbdHlwZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlVXBkYXRlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgbG9hZGVkXG4gICAgICovXG4gICAgcHVibGljIGFyZUFsbENhY2hlZCgpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGlzQ2FjaGVkID0gdHJ1ZTtcbiAgICAgICAgaXNDYWNoZWQgPSBpc0NhY2hlZCAmJiAhZW1wdHlPYmplY3QoY2FjaGU/LmFwcFN0cmluZ3MgPz8ge30pO1xuICAgICAgICBpc0NhY2hlZCA9IGlzQ2FjaGVkICYmICFlbXB0eU9iamVjdChjYWNoZT8uYXBwTGlzdFN0cmluZ3MgPz8ge30pO1xuICAgICAgICBpc0NhY2hlZCA9IGlzQ2FjaGVkICYmICFlbXB0eU9iamVjdChjYWNoZT8ubW9kU3RyaW5ncyA/PyB7fSk7XG5cbiAgICAgICAgcmV0dXJuIGlzQ2FjaGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBwcmUtbG9hZGVkIHN0cmluZ3MgYW5kIGNhY2hlXG4gICAgICovXG4gICAgcHVibGljIHNldChsYW5ndWFnZUtleTogc3RyaW5nLCBsYW5ndWFnZVN0cmluZ3M6IExhbmd1YWdlU3RyaW5ncyk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHN0YXRlVXBkYXRlID0gey4uLmludGVybmFsU3RhdGUsIGxhbmd1YWdlS2V5fTtcblxuICAgICAgICBpZiAobGFuZ3VhZ2VTdHJpbmdzLmFwcFN0cmluZ3MgJiYgIWVtcHR5T2JqZWN0KGxhbmd1YWdlU3RyaW5ncy5hcHBTdHJpbmdzKSkge1xuICAgICAgICAgICAgY2FjaGVbJ2FwcFN0cmluZ3MnXVtsYW5ndWFnZUtleV0gPSBvZihsYW5ndWFnZVN0cmluZ3MuYXBwU3RyaW5ncykucGlwZShzaGFyZVJlcGxheSgxKSk7XG4gICAgICAgICAgICBzdGF0ZVVwZGF0ZVsnYXBwU3RyaW5ncyddID0gbGFuZ3VhZ2VTdHJpbmdzLmFwcFN0cmluZ3M7XG4gICAgICAgICAgICBsb2FkZWRMYW5ndWFnZXNbJ2FwcFN0cmluZ3MnXSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFuZ3VhZ2VTdHJpbmdzLmFwcExpc3RTdHJpbmdzICYmICFlbXB0eU9iamVjdChsYW5ndWFnZVN0cmluZ3MuYXBwTGlzdFN0cmluZ3MpKSB7XG4gICAgICAgICAgICBjYWNoZVsnYXBwTGlzdFN0cmluZ3MnXVtsYW5ndWFnZUtleV0gPSBvZihsYW5ndWFnZVN0cmluZ3MuYXBwTGlzdFN0cmluZ3MpLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xuICAgICAgICAgICAgc3RhdGVVcGRhdGVbJ2FwcExpc3RTdHJpbmdzJ10gPSBsYW5ndWFnZVN0cmluZ3MuYXBwTGlzdFN0cmluZ3M7XG4gICAgICAgICAgICBsb2FkZWRMYW5ndWFnZXNbJ2FwcExpc3RTdHJpbmdzJ10gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhbmd1YWdlU3RyaW5ncy5tb2RTdHJpbmdzICYmICFlbXB0eU9iamVjdChsYW5ndWFnZVN0cmluZ3MubW9kU3RyaW5ncykpIHtcbiAgICAgICAgICAgIGNhY2hlWydtb2RTdHJpbmdzJ11bbGFuZ3VhZ2VLZXldID0gb2YobGFuZ3VhZ2VTdHJpbmdzLm1vZFN0cmluZ3MpLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xuICAgICAgICAgICAgc3RhdGVVcGRhdGVbJ21vZFN0cmluZ3MnXSA9IGxhbmd1YWdlU3RyaW5ncy5tb2RTdHJpbmdzO1xuICAgICAgICAgICAgbG9hZGVkTGFuZ3VhZ2VzWydtb2RTdHJpbmdzJ10gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZVVwZGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHNlc3Npb24gbGFuZ3VhZ2VcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U2Vzc2lvbkxhbmd1YWdlKCk6IE9ic2VydmFibGU8UHJvY2Vzcz4ge1xuXG4gICAgICAgIGNvbnN0IHByb2Nlc3NUeXBlID0gJ3NldC1zZXNzaW9uLWxhbmd1YWdlJztcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgbGFuZ3VhZ2U6IGludGVybmFsU3RhdGUubGFuZ3VhZ2VLZXlcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzU2VydmljZS5zdWJtaXQocHJvY2Vzc1R5cGUsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGludGVybmFsIHN0YXRlIGNhY2hlIGFuZCBlbWl0IGZyb20gc3RvcmUuLi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7e319IHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZTogTGFuZ3VhZ2VTdGF0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLm5leHQoaW50ZXJuYWxTdGF0ZSA9IHN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZ2l2ZW4gJHR5cGUgb2Ygc3RyaW5ncyBPYnNlcnZhYmxlIGZyb20gY2FjaGUgIG9yIGNhbGwgdGhlIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSB0byBsb2FkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgbG9hZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVsb2FkXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFN0cmluZ3MobGFuZ3VhZ2U6IHN0cmluZywgdHlwZTogc3RyaW5nLCByZWxvYWQgPSBmYWxzZSk6IE9ic2VydmFibGU8e30+IHtcblxuICAgICAgICBjb25zdCBzdHJpbmdzQ2FjaGUgPSBjYWNoZVt0eXBlXTtcbiAgICAgICAgY29uc3QgZmV0Y2hNZXRob2QgPSB0aGlzLmNvbmZpZ1t0eXBlXS5mZXRjaDtcblxuICAgICAgICBpZiAoc3RyaW5nc0NhY2hlW2xhbmd1YWdlXSAmJiByZWxvYWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nc0NhY2hlW2xhbmd1YWdlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0cmluZ3NDYWNoZVtsYW5ndWFnZV0gPSB0aGlzW2ZldGNoTWV0aG9kXShsYW5ndWFnZSkucGlwZShcbiAgICAgICAgICAgIHNoYXJlUmVwbGF5KDEpLFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBzdHJpbmdzQ2FjaGVbbGFuZ3VhZ2VdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHRoZSBBcHAgc3RyaW5ncyBmcm9tIHRoZSBiYWNrZW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgdG8gZmV0Y2hcbiAgICAgKiBAcmV0dXJucyB7e319IE9ic2VydmFibGU8e30+XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZldGNoQXBwU3RyaW5ncyhsYW5ndWFnZTogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgICAgICBjb25zdCByZXNvdXJjZU5hbWUgPSB0aGlzLmNvbmZpZy5hcHBTdHJpbmdzLnJlc291cmNlTmFtZTtcbiAgICAgICAgY29uc3QgZmllbGRzID0gdGhpcy5jb25maWcuYXBwU3RyaW5ncy5tZXRhZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkR1FMLmZldGNoKHJlc291cmNlTmFtZSwgYC9hcGkvYXBwLXN0cmluZ3MvJHtsYW5ndWFnZX1gLCBmaWVsZHMpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbXMgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hcHBTdHJpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IGRhdGEuYXBwU3RyaW5ncy5pdGVtcztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCB0aGUgQXBwIGxpc3Qgc3RyaW5ncyBmcm9tIHRoZSBiYWNrZW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgdG8gZmV0Y2hcbiAgICAgKiBAcmV0dXJucyB7e319IE9ic2VydmFibGU8e30+XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZldGNoQXBwTGlzdFN0cmluZ3MobGFuZ3VhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2VOYW1lID0gdGhpcy5jb25maWcuYXBwTGlzdFN0cmluZ3MucmVzb3VyY2VOYW1lO1xuICAgICAgICBjb25zdCBmaWVsZHMgPSB0aGlzLmNvbmZpZy5hcHBMaXN0U3RyaW5ncy5tZXRhZGF0YTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRHUUwuZmV0Y2gocmVzb3VyY2VOYW1lLCBgL2FwaS9hcHAtbGlzdC1zdHJpbmdzLyR7bGFuZ3VhZ2V9YCwgZmllbGRzKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYXBwTGlzdFN0cmluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zID0gZGF0YS5hcHBMaXN0U3RyaW5ncy5pdGVtcztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCB0aGUgTW9kIHN0cmluZ3MgZnJvbSB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIHRvIGZldGNoXG4gICAgICogQHJldHVybnMge3t9fSBPYnNlcnZhYmxlPHt9PlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBmZXRjaE1vZFN0cmluZ3MobGFuZ3VhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2VOYW1lID0gdGhpcy5jb25maWcubW9kU3RyaW5ncy5yZXNvdXJjZU5hbWU7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuY29uZmlnLm1vZFN0cmluZ3MubWV0YWRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZEdRTC5mZXRjaChyZXNvdXJjZU5hbWUsIGAvYXBpL21vZC1zdHJpbmdzLyR7bGFuZ3VhZ2V9YCwgZmllbGRzKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubW9kU3RyaW5ncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSBkYXRhLm1vZFN0cmluZ3MuaXRlbXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuIl19