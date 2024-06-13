import { AppStateStore } from './app-state/app-state.store';
import { LanguageStore } from './language/language.store';
import { NavigationStore } from './navigation/navigation.store';
import { SystemConfigStore } from './system-config/system-config.store';
import { ThemeImagesStore } from './theme-images/theme-images.store';
import { UserPreferenceStore } from './user-preference/user-preference.store';
import { StateStore, StateStoreMap, StateStoreMapEntry } from './state';
import { MetadataStore } from './metadata/metadata.store.service';
import { AppMetadataStore } from './app-metadata/app-metadata.store.service';
import * as i0 from "@angular/core";
export declare class StateManager {
    protected appStore: AppStateStore;
    protected languageStore: LanguageStore;
    protected metadataStore: MetadataStore;
    protected navigationStore: NavigationStore;
    protected systemConfigStore: SystemConfigStore;
    protected themeImagesStore: ThemeImagesStore;
    protected userPreferenceStore: UserPreferenceStore;
    protected appMetadataStore: AppMetadataStore;
    protected stateStores: StateStoreMap;
    constructor(appStore: AppStateStore, languageStore: LanguageStore, metadataStore: MetadataStore, navigationStore: NavigationStore, systemConfigStore: SystemConfigStore, themeImagesStore: ThemeImagesStore, userPreferenceStore: UserPreferenceStore, appMetadataStore: AppMetadataStore);
    /**
     * Public Api
     */
    /**
     * Clear all state
     */
    clear(): void;
    /**
     * Clear all state
     */
    clearAuthBased(): void;
    clearBackendCacheable(): void;
    /**
     * Internal api
     */
    /**
     * Build Map entry
     *
     * @param {{}} store to use
     * @param {boolean} authBased flag
     * @returns {{}} StateStoreMapEntry
     */
    protected buildMapEntry(store: StateStore, authBased: boolean): StateStoreMapEntry;
    static ɵfac: i0.ɵɵFactoryDeclaration<StateManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StateManager>;
}
