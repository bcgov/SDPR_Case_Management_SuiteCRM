import { BehaviorSubject, Observable } from 'rxjs';
import { EntityGQL } from '../../services/api/graphql-api/api.entity.get';
import { StringMap } from 'common';
import { StateStore } from '../state';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { Process, ProcessService } from '../../services/process/process.service';
import { SystemConfigStore } from '../system-config/system-config.store';
import * as i0 from "@angular/core";
export interface LanguageStringMap {
    [key: string]: string;
}
export interface LanguageListStringMap {
    [key: string]: string | LanguageStringMap;
}
export interface LoadedLanguageStringMap {
    [key: string]: LanguageStringMap;
}
export interface LanguageState {
    appStrings: LanguageStringMap;
    appListStrings: LanguageListStringMap;
    modStrings: LanguageListStringMap;
    languageKey: string;
    loaded?: LoadedLanguageStringMap;
    hasChanged: boolean;
}
export interface LanguageStrings {
    appStrings: LanguageStringMap;
    appListStrings: LanguageListStringMap;
    modStrings: LanguageListStringMap;
    languageKey: string;
}
export interface LanguageCache {
    [key: string]: {
        [key: string]: Observable<any>;
    };
}
export declare class LanguageStore implements StateStore {
    protected recordGQL: EntityGQL;
    protected localStorage: LocalStorageService;
    protected processService: ProcessService;
    protected configs: SystemConfigStore;
    /**
     * Public long-lived observable streams
     */
    appStrings$: Observable<LanguageStringMap>;
    appListStrings$: Observable<LanguageListStringMap>;
    modStrings$: Observable<LanguageListStringMap>;
    languageKey$: Observable<string>;
    /**
     * ViewModel that resolves once all the data is ready (or updated)...
     */
    vm$: Observable<LanguageStrings>;
    protected store: BehaviorSubject<LanguageState>;
    protected state$: Observable<LanguageState>;
    protected config: {
        appStrings: {
            fetch: string;
            resourceName: string;
            metadata: {
                fields: string[];
            };
        };
        appListStrings: {
            fetch: string;
            resourceName: string;
            metadata: {
                fields: string[];
            };
        };
        modStrings: {
            fetch: string;
            resourceName: string;
            metadata: {
                fields: string[];
            };
        };
    };
    constructor(recordGQL: EntityGQL, localStorage: LocalStorageService, processService: ProcessService, configs: SystemConfigStore);
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear(): void;
    clearAuthBased(): void;
    /**
     * Update the language strings toe the given language
     *
     * @param {string} languageKey language key
     * @param {boolean} reload
     */
    changeLanguage(languageKey: string, reload?: boolean): Observable<any>;
    /**
     * Get All languageStrings label by key
     *
     * @returns {object} LanguageStrings
     */
    getLanguageStrings(): LanguageStrings;
    /**
     * Get AppStrings label by key
     *
     * @param {string} labelKey to fetch
     * @returns {string} label
     */
    getAppString(labelKey: string): string;
    /**
     * Get AppListStrings label by key
     *
     * @param {string} labelKey to fetch
     * @returns {string|{}} app strings
     */
    getAppListString(labelKey: string): string | LanguageStringMap;
    /**
     * Get ModStrings label by key
     *
     * @param {string} labelKey to fetch
     * @returns {string|{}} mod strings
     */
    getModString(labelKey: string): string | LanguageStringMap;
    /**
     * Get field label
     *
     * @param {string} labelKey to fetch
     * @param {string} module to use
     * @param {object} lang to use
     * @returns {string} label
     */
    getFieldLabel(labelKey: string, module?: string, lang?: LanguageStrings): string;
    /**
     * Get list label
     *
     * @param {string} listKey to fetch
     * @param {string} labelKey to fetch
     * @returns {string} label
     */
    getListLabel(listKey: string, labelKey: string): string;
    /**
     * Get all available string types
     *
     * @returns {string[]} string types
     */
    getAvailableStringsTypes(): string[];
    /**
     * Returns whether the language has changed manually
     *
     * @returns {boolean} has changed
     */
    hasLanguageChanged(): boolean;
    /**
     * Returns the currently active language
     *
     * @returns {string} current language key
     */
    getCurrentLanguage(): string;
    /**
     * Returns the active language
     *
     * @returns {string} active language key
     */
    getActiveLanguage(): string;
    /**
     * Returns the selected language
     *
     * @returns {string} selected language key
     */
    getSelectedLanguage(): string;
    /**
     * Check if language is enabled
     * @param currentLanguage
     */
    isLanguageEnabled(currentLanguage: string): boolean;
    /**
     * Get disabled languages
     */
    getDisabledLanguages(): string[];
    /**
     * Get enabled languages
     */
    getEnabledLanguages(): StringMap;
    /**
     * Get fist language in list
     * @private
     */
    getFirstLanguage(): string;
    /**
     * Initial Language Strings Load for given language and types if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} languageKey to load
     * @param {string[]} types to load
     * @param {boolean} reload
     * @returns {object} Observable
     */
    load(languageKey: string, types: string[], reload?: boolean): Observable<any>;
    /**
     * Check if loaded
     */
    areAllCached(): boolean;
    /**
     * Set pre-loaded strings and cache
     */
    set(languageKey: string, languageStrings: LanguageStrings): void;
    /**
     * Set session language
     */
    setSessionLanguage(): Observable<Process>;
    /**
     * Internal API
     */
    /**
     * Update internal state cache and emit from store...
     *
     * @param {{}} state to set
     */
    protected updateState(state: LanguageState): void;
    /**
     * Get given $type of strings Observable from cache  or call the backend
     *
     * @param {string} language to load
     * @param {string} type load
     * @param {boolean} reload
     * @returns {object} Observable<any>
     */
    protected getStrings(language: string, type: string, reload?: boolean): Observable<{}>;
    /**
     * Fetch the App strings from the backend
     *
     * @param {string} language to fetch
     * @returns {{}} Observable<{}>
     */
    protected fetchAppStrings(language: string): Observable<{}>;
    /**
     * Fetch the App list strings from the backend
     *
     * @param {string} language to fetch
     * @returns {{}} Observable<{}>
     */
    protected fetchAppListStrings(language: string): Observable<{}>;
    /**
     * Fetch the Mod strings from the backend
     *
     * @param {string} language to fetch
     * @returns {{}} Observable<{}>
     */
    protected fetchModStrings(language: string): Observable<{}>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LanguageStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LanguageStore>;
}
