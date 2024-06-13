import { BehaviorSubject, Observable } from 'rxjs';
import { CollectionGQL } from '../../services/api/graphql-api/api.collection.get';
import { StateStore } from '../state';
import * as i0 from "@angular/core";
export interface SystemConfig {
    id: string;
    _id: string;
    value: string;
    items: {
        [key: string]: any;
    };
}
export interface SystemConfigMap {
    [key: string]: SystemConfig;
}
export interface SystemConfigs {
    configs: SystemConfigMap;
    loading: boolean;
}
export declare class SystemConfigStore implements StateStore {
    private collectionGQL;
    configs$: Observable<SystemConfigMap>;
    loading$: Observable<boolean>;
    protected store: BehaviorSubject<SystemConfigs>;
    protected state$: Observable<SystemConfigs>;
    protected resourceName: string;
    protected fieldsMetadata: {
        fields: string[];
    };
    constructor(collectionGQL: CollectionGQL);
    /**
     * Public Api
     */
    /**
     * Get system config value by key
     *
     * @param {string} configKey of the config
     * @returns {{}|string} config value
     */
    getConfigValue(configKey: string): any;
    /**
     * Get ui config value by key
     *
     * @param {string} configKey of the ui config
     * @returns {{}|string} config value
     */
    getUi(configKey: string): any;
    getHomePage(): string;
    /**
     * Clear state
     */
    clear(): void;
    clearAuthBased(): void;
    /**
     * Initial SystemConfigs load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @returns {Observable<{}>} observable
     */
    load(): Observable<any>;
    /**
     * Check if loaded
     */
    isCached(): boolean;
    /**
     * Set pre-loaded configs and cache
     */
    set(configs: SystemConfigMap): void;
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {{}} state new state
     */
    protected updateState(state: SystemConfigs): void;
    /**
     * Get SystemConfigs cached Observable or call the backend
     *
     * @returns {Observable<{}>} observable
     */
    protected getSystemConfigs(): Observable<any>;
    /**
     * Fetch the App strings from the backend
     *
     * @returns {Observable<{}>} observable
     */
    protected fetch(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SystemConfigStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SystemConfigStore>;
}
