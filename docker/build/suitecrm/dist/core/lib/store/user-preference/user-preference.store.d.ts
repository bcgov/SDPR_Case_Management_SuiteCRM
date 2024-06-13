import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CollectionGQL } from '../../services/api/graphql-api/api.collection.get';
import { StateStore } from '../state';
import { SystemConfigStore } from '../system-config/system-config.store';
import { ProcessService } from '../../services/process/process.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import * as i0 from "@angular/core";
export interface UserPreferenceMap {
    [key: string]: any;
}
export interface UserPreferences {
    userPreferences: UserPreferenceMap;
    loading: boolean;
}
export declare class UserPreferenceStore implements StateStore {
    protected collectionGQL: CollectionGQL;
    protected config: SystemConfigStore;
    protected processService: ProcessService;
    protected localStorage: LocalStorageService;
    protected store: BehaviorSubject<UserPreferences>;
    protected state$: Observable<UserPreferences>;
    protected saveBufferStore: BehaviorSubject<boolean>;
    protected saveBuffer$: Observable<boolean>;
    protected subs: Subscription[];
    protected resourceName: string;
    protected fieldsMetadata: {
        fields: string[];
    };
    /**
     * Public long-lived observable streams
     */
    userPreferences$: Observable<UserPreferenceMap>;
    loading$: Observable<boolean>;
    constructor(collectionGQL: CollectionGQL, config: SystemConfigStore, processService: ProcessService, localStorage: LocalStorageService);
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear(): void;
    clearAuthBased(): void;
    /**
     * Get user preferences value by key
     *
     * @param {string} key to retrieve
     * @returns any users preference
     */
    getUserPreference(key: string): any;
    /**
     * Get ui user preferences value by key
     *
     * @param module
     * @param {string} key to retrieve
     * @returns any users preference
     */
    getUi(module: string, key: string): any;
    /**
     * Set user preferences value by key
     *
     * @param {string} module name
     * @param {string} key to retrieve
     * @param value
     * @returns any users preference
     */
    setUi(module: string, key: string, value: any): void;
    protected saveUiPreferences(): void;
    /**
     * Store the data in local storage
     *
     * @param {string} module to store in
     * @param {string} storageKey to store in
     * @param {} data to store
     */
    protected storageSave(module: string, storageKey: string, data: any): void;
    /**
     * Store the key in local storage
     *
     * @param {string} module to load from
     * @param {string} storageKey from load from
     */
    protected storageLoad(module: string, storageKey: string): any;
    /**
     * Initial UserPreferences load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @returns {object} Observable<any>
     */
    load(): Observable<any>;
    /**
     * Check if loaded
     */
    isCached(): boolean;
    /**
     * Set pre-loaded preferences and cache
     */
    set(userPreferences: UserPreferenceMap): void;
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: UserPreferences): void;
    /**
     * Get UserPreferences cached Observable or call the backend
     *
     * @returns {object} Observable<any>
     */
    protected getUserPreferences(): Observable<any>;
    /**
     * Fetch the User Preferences from the backend
     *
     * @returns {object} Observable<any>
     */
    protected fetch(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserPreferenceStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserPreferenceStore>;
}
