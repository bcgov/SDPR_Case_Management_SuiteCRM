import { BehaviorSubject, Observable } from 'rxjs';
import { EntityGQL } from '../../services/api/graphql-api/api.entity.get';
import { StateStore } from '../state';
import { LanguageStore } from '../language/language.store';
import { SystemConfigStore } from '../system-config/system-config.store';
import { ThemeImagesStore } from '../theme-images/theme-images.store';
import { UserPreferenceMap, UserPreferenceStore } from '../user-preference/user-preference.store';
import { NavigationStore } from '../navigation/navigation.store';
import { MetadataMap, MetadataStore } from '../metadata/metadata.store.service';
import { AdminMetadataStore } from '../admin-metadata/admin-metadata.store';
import { AdminMetadata } from '../admin-metadata/admin-metadata.model';
import { GlobalRecentlyViewedStore } from "../global-recently-viewed/global-recently-viewed.store";
import * as i0 from "@angular/core";
export interface AppMetadata {
    loaded?: boolean;
    moduleMetadataLoaded?: boolean;
    systemConfig?: any;
    userPreferences?: any;
    language?: any;
    themeImages?: any;
    navigation?: any;
    moduleMetadata?: MetadataMap;
    minimalModuleMetadata?: MetadataMap;
    adminMetadata?: AdminMetadata;
    globalRecentlyViewed?: any;
}
export interface AppMetadataFlags {
    systemConfig?: boolean;
    userPreferences?: boolean;
    appStrings?: boolean;
    appListStrings?: boolean;
    modStrings?: boolean;
    themeImages?: boolean;
    navigation?: boolean;
    moduleMetadata?: boolean;
    minimalModuleMetadata?: boolean;
    adminMetadata?: boolean;
    globalRecentlyViewed?: boolean;
}
export declare class AppMetadataStore implements StateStore {
    protected recordGQL: EntityGQL;
    protected metadata: MetadataStore;
    protected language: LanguageStore;
    protected themeImages: ThemeImagesStore;
    protected config: SystemConfigStore;
    protected preferences: UserPreferenceStore;
    protected navigation: NavigationStore;
    protected adminMetadataStore: AdminMetadataStore;
    protected globalRecentlyViewedStore: GlobalRecentlyViewedStore;
    /**
     * Public long-lived observable streams
     */
    metadata$: Observable<AppMetadataFlags>;
    protected store: BehaviorSubject<AppMetadataFlags>;
    protected state$: Observable<AppMetadataFlags>;
    protected resourceName: string;
    protected fieldsMetadata: {
        fields: string[];
    };
    protected types: string[];
    constructor(recordGQL: EntityGQL, metadata: MetadataStore, language: LanguageStore, themeImages: ThemeImagesStore, config: SystemConfigStore, preferences: UserPreferenceStore, navigation: NavigationStore, adminMetadataStore: AdminMetadataStore, globalRecentlyViewedStore: GlobalRecentlyViewedStore);
    /**
     * Clear state
     */
    clear(): void;
    clearAuthBased(): void;
    get(): AppMetadataFlags;
    /**
     * Initial AppMetadata load if not cached and update state.
     *
     * @returns any data
     */
    load(module?: string, types?: string[], useCache?: boolean): Observable<AppMetadataFlags>;
    /**
     * Initial AppMetadata load if not cached and update state.
     *
     * @returns any data
     */
    loadModuleMetadata(module?: string, useCache?: boolean): Observable<AppMetadataFlags>;
    /**
     * Get metadata cached Observable or call the backend
     *
     * @returns {object} Observable<AppMetadataFlags>
     */
    getMetadata(module?: string, types?: string[], useCache?: boolean): Observable<AppMetadataFlags>;
    protected getNotLoadedTypes(): string[];
    protected areAllLanguageStringsLoaded(): boolean;
    protected arePreferencesLoaded(): boolean;
    protected areSystemConfigsLoaded(): boolean;
    protected areThemeImagesLoaded(): boolean;
    protected isNavigationLoaded(): boolean;
    protected isAdminMetadataLoaded(): boolean;
    protected isGlobalRecentlyViewedLoaded(): boolean;
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: AppMetadataFlags): void;
    /**
     * Fetch the Metadata from the backend
     *
     * @returns {object} Observable<{}>
     */
    protected fetch(module: string, types?: string[]): Observable<AppMetadataFlags>;
    protected setModuleMetadata(currentMetadata: AppMetadataFlags, appMetadata: AppMetadata): void;
    protected setLanguages(currentMetadata: AppMetadataFlags, appMetadata: AppMetadata): void;
    protected setNavigation(currentMetadata: AppMetadataFlags, appMetadata: AppMetadata): void;
    protected setThemeImages(currentMetadata: AppMetadataFlags, appMetadata: AppMetadata): void;
    protected setPreferences(currentMetadata: AppMetadataFlags, appMetadata: AppMetadata): void;
    protected setConfig(currentMetadata: AppMetadataFlags, appMetadata: AppMetadata): void;
    protected setAdminMetadata(currentMetadata: AppMetadataFlags, appMetadata: AppMetadata): void;
    protected setGlobalRecentlyViewed(currentMetadata: AppMetadataFlags, appMetadata: AppMetadata): void;
    protected mapPreferences(preferences: any): UserPreferenceMap;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppMetadataStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppMetadataStore>;
}
