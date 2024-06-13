import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { LanguageStore } from '../../store/language/language.store';
import { NavigationStore } from '../../store/navigation/navigation.store';
import { UserPreferenceStore } from '../../store/user-preference/user-preference.store';
import { ThemeImagesStore } from '../../store/theme-images/theme-images.store';
import { AppStateStore } from '../../store/app-state/app-state.store';
import { MessageService } from '../message/message.service';
import { ModuleNameMapper } from '../navigation/module-name-mapper/module-name-mapper.service';
import { AppMetadataStore } from '../../store/app-metadata/app-metadata.store.service';
import { AuthService } from '../auth/auth.service';
import * as i0 from "@angular/core";
export declare class BaseMetadataResolver {
    protected systemConfigStore: SystemConfigStore;
    protected languageStore: LanguageStore;
    protected navigationStore: NavigationStore;
    protected userPreferenceStore: UserPreferenceStore;
    protected themeImagesStore: ThemeImagesStore;
    protected appState: AppStateStore;
    protected moduleNameMapper: ModuleNameMapper;
    protected messageService: MessageService;
    protected appMetadata: AppMetadataStore;
    protected auth: AuthService;
    constructor(systemConfigStore: SystemConfigStore, languageStore: LanguageStore, navigationStore: NavigationStore, userPreferenceStore: UserPreferenceStore, themeImagesStore: ThemeImagesStore, appState: AppStateStore, moduleNameMapper: ModuleNameMapper, messageService: MessageService, appMetadata: AppMetadataStore, auth: AuthService);
    resolve(route: ActivatedRouteSnapshot): Observable<any>;
    /**
     * @param route
     */
    protected sequentialLoad(route: ActivatedRouteSnapshot): Observable<unknown[]>;
    /**
     * Get Languages to Load
     *
     * @param {{}} route activated
     * @returns {string[]} languages
     */
    protected getLanguagesToLoad(route: ActivatedRouteSnapshot): string[];
    /**
     * Should load language strings. True if navigation is to load
     *
     * @param {{}} route activated
     * @returns {boolean} is to load
     */
    protected isToLoadLanguageStrings(route: ActivatedRouteSnapshot): boolean;
    /**
     * Should load navigation. If not set defaults to true
     *
     * @param {{}} route activated
     * @returns {boolean} is to load
     */
    protected isToLoadConfigs(route: ActivatedRouteSnapshot): boolean;
    /**
     * Should load navigation, If not set defaults to true
     *
     * @param {{}} route activated
     * @returns {boolean} is to load
     */
    protected isToLoadNavigation(route: ActivatedRouteSnapshot): boolean;
    /**
     * Should load user preferences. If not set defaults to true
     *
     * @param {{}} route activated
     * @returns {boolean} is to load
     */
    protected isToLoadUserPreferences(route: ActivatedRouteSnapshot): boolean;
    protected addMetadataLoadErrorMessage(): void;
    /**
     * Calculate the active module
     *
     * @param {{}} route active
     * @returns {string} active module
     */
    protected calculateActiveModule(route: ActivatedRouteSnapshot): string;
    /**
     * Get Parent Module Map
     *
     * @returns {{}} parent module map
     */
    protected getParentModuleMap(): {
        [key: string]: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseMetadataResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BaseMetadataResolver>;
}
