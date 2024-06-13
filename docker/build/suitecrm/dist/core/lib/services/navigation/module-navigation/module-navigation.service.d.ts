import { Router } from '@angular/router';
import { ModuleAction, NavbarModule, Navigation } from '../../../store/navigation/navigation.store';
import { LanguageListStringMap, LanguageStrings } from '../../../store/language/language.store';
import { MenuItem, Record } from 'common';
import { ModuleNameMapper } from '../module-name-mapper/module-name-mapper.service';
import { ActionNameMapper } from '../action-name-mapper/action-name-mapper.service';
import * as i0 from "@angular/core";
export interface NavigationRoute {
    route: string;
    url: string;
    params: {
        [key: string]: string;
    };
    process?: string;
}
export declare class ModuleNavigation {
    protected router: Router;
    protected moduleNameMapper: ModuleNameMapper;
    protected actionNameMapper: ActionNameMapper;
    constructor(router: Router, moduleNameMapper: ModuleNameMapper, actionNameMapper: ActionNameMapper);
    /**
     * Public Api
     */
    /**
     * Get module info
     *
     * @param {string} module name
     * @param {object} navigation info
     * @returns {object} module info
     */
    getModuleInfo(module: string, navigation: Navigation): NavbarModule;
    /**
     * Get module label
     *
     * @param {object} module info
     * @param {object} appListStrings map
     * @returns {string} the module label
     */
    getModuleLabel(module: NavbarModule, appListStrings: LanguageListStringMap): string;
    /**
     * Get module route
     *
     * @param {object} module NavbarModule
     * @returns {object} NavigationRoute
     */
    getModuleRoute(module: NavbarModule): NavigationRoute;
    /**
     * Navigate using action information
     *
     * @param {object} item ModuleAction
     * @returns {object} Promise<boolean>
     */
    navigate(item: ModuleAction): Promise<boolean>;
    /**
     * Navigate using menu item information
     *
     * @param {object} item MenuItem
     */
    navigateUsingMenuItem(item: MenuItem): void;
    /**
     * Get action route info
     *
     * @param {object} action ModuleAction
     * @returns {object} NavigationRoute
     */
    getActionRoute(action: ModuleAction): NavigationRoute;
    /**
     * Get label for module action item
     *
     * @param {string} module name
     * @param {object} item action
     * @param {object} languages map
     * @param {string} labelKey to use
     * @returns {string} label
     */
    getActionLabel(module: string, item: ModuleAction, languages: LanguageStrings, labelKey?: string): string;
    /**
     * Get record router link route info
     *
     * @param {string} module name
     * @param {string} id fo the record
     * @returns {string} router link
     */
    getRecordRouterLink(module: string, id: string): string;
    /**
     * Navigate back using return params
     * @param record
     * @param moduleName
     * @param params
     */
    navigateBack(record: Record, moduleName: string, params: {
        [key: string]: string;
    }): void;
    /**
     * Extract return id
     * @param params
     */
    getReturnId(params: {
        [p: string]: string;
    }): string;
    /**
     * Extract and map return action
     * @param params
     */
    getReturnAction(params: {
        [p: string]: string;
    }): string;
    /**
     * Extract and map return action
     * @param params
     */
    getReturnModule(params: {
        [p: string]: string;
    }): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModuleNavigation, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModuleNavigation>;
}
