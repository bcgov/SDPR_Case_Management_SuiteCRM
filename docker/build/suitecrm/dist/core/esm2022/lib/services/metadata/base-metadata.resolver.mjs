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
import { concatAll, map, take, tap, toArray } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
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
import * as i1 from "../../store/system-config/system-config.store";
import * as i2 from "../../store/language/language.store";
import * as i3 from "../../store/navigation/navigation.store";
import * as i4 from "../../store/user-preference/user-preference.store";
import * as i5 from "../../store/theme-images/theme-images.store";
import * as i6 from "../../store/app-state/app-state.store";
import * as i7 from "../navigation/module-name-mapper/module-name-mapper.service";
import * as i8 from "../message/message.service";
import * as i9 from "../../store/app-metadata/app-metadata.store.service";
import * as i10 from "../auth/auth.service";
class BaseMetadataResolver {
    constructor(systemConfigStore, languageStore, navigationStore, userPreferenceStore, themeImagesStore, appState, moduleNameMapper, messageService, appMetadata, auth) {
        this.systemConfigStore = systemConfigStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.userPreferenceStore = userPreferenceStore;
        this.themeImagesStore = themeImagesStore;
        this.appState = appState;
        this.moduleNameMapper = moduleNameMapper;
        this.messageService = messageService;
        this.appMetadata = appMetadata;
        this.auth = auth;
    }
    resolve(route) {
        const module = this.calculateActiveModule(route);
        return this.appMetadata.load(module).pipe(tap(() => {
            if (this.auth.isLoggedIn()) {
                setTimeout(() => {
                    this.appMetadata.loadModuleMetadata(module).pipe(take(1)).subscribe();
                }, 0);
            }
        }));
    }
    /**
     * @param route
     */
    sequentialLoad(route) {
        const streams$ = {};
        if (this.isToLoadNavigation(route)) {
            streams$.navigation = this.navigationStore.load();
        }
        if (this.isToLoadConfigs(route)) {
            let configs$ = this.systemConfigStore.load();
            if (this.isToLoadLanguageStrings(route)) {
                const langStrings = this.getLanguagesToLoad(route);
                configs$ = configs$.pipe(map((configs) => {
                    let language = configs.default_language.value;
                    const storedLanguage = this.languageStore.getCurrentLanguage();
                    if (storedLanguage) {
                        language = storedLanguage;
                    }
                    return this.languageStore.load(language, langStrings);
                }), concatAll(), toArray());
            }
            streams$.configs = configs$;
        }
        if (this.isToLoadUserPreferences(route)) {
            streams$.preferences = this.userPreferenceStore.load();
        }
        const parallelStream$ = forkJoin(streams$);
        return parallelStream$.pipe(map((data) => {
            let theme = null;
            if (this.systemConfigStore.getConfigValue('default_theme')) {
                theme = this.systemConfigStore.getConfigValue('default_theme');
            }
            if (this.userPreferenceStore.getUserPreference('user_theme')) {
                theme = this.userPreferenceStore.getUserPreference('user_theme');
            }
            if (this.themeImagesStore.getTheme()) {
                theme = this.themeImagesStore.getTheme();
            }
            if (theme !== null) {
                return this.themeImagesStore.load(theme);
            }
            return data;
        }), concatAll(), toArray(), tap(() => this.appState.setLoaded(true)));
    }
    /**
     * Get Languages to Load
     *
     * @param {{}} route activated
     * @returns {string[]} languages
     */
    getLanguagesToLoad(route) {
        let langStrings = this.languageStore.getAvailableStringsTypes();
        if (this.isToLoadNavigation(route)) {
            return langStrings;
        }
        if (!route.data || !route.data.load) {
            return [];
        }
        if (Array.isArray(route.data.load.languageStrings)) {
            langStrings = route.data.load.languageStrings;
        }
        return langStrings;
    }
    /**
     * Should load language strings. True if navigation is to load
     *
     * @param {{}} route activated
     * @returns {boolean} is to load
     */
    isToLoadLanguageStrings(route) {
        if (this.isToLoadNavigation(route)) {
            return true;
        }
        if (!route.data || !route.data.load) {
            return false;
        }
        return Array.isArray(route.data.load.languageStrings) || route.data.load.languageStrings === true;
    }
    /**
     * Should load navigation. If not set defaults to true
     *
     * @param {{}} route activated
     * @returns {boolean} is to load
     */
    isToLoadConfigs(route) {
        if (!route.data || !route.data.load) {
            return true;
        }
        return route.data.load.configs !== false;
    }
    /**
     * Should load navigation, If not set defaults to true
     *
     * @param {{}} route activated
     * @returns {boolean} is to load
     */
    isToLoadNavigation(route) {
        if (!route.data || !route.data.load) {
            return true;
        }
        return route.data.load.navigation !== false;
    }
    /**
     * Should load user preferences. If not set defaults to true
     *
     * @param {{}} route activated
     * @returns {boolean} is to load
     */
    isToLoadUserPreferences(route) {
        if (!route.data || !route.data.load) {
            return true;
        }
        return route.data.load.preferences !== false;
    }
    addMetadataLoadErrorMessage() {
        let message = this.languageStore.getAppString('LBL_ERROR_FETCHING_METADATA');
        if (!message) {
            message = 'Error occurred while fetching metadata';
        }
        this.messageService.addDangerMessage(message);
    }
    /**
     * Calculate the active module
     *
     * @param {{}} route active
     * @returns {string} active module
     */
    calculateActiveModule(route) {
        let module = route.params.module;
        if (!module) {
            module = route.data.module;
        }
        const rootPath = route?.url[0]?.path ?? '';
        if (!module && rootPath !== '') {
            module = rootPath;
        }
        const parentModuleParam = this.getParentModuleMap()[module] || '';
        const parentModule = route.queryParams[parentModuleParam] || '';
        if (parentModule) {
            module = this.moduleNameMapper.toFrontend(parentModule);
        }
        return module;
    }
    /**
     * Get Parent Module Map
     *
     * @returns {{}} parent module map
     */
    getParentModuleMap() {
        return {
            'merge-records': 'return_module',
            import: 'import_module'
        };
    }
    static { this.ɵfac = function BaseMetadataResolver_Factory(t) { return new (t || BaseMetadataResolver)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.NavigationStore), i0.ɵɵinject(i4.UserPreferenceStore), i0.ɵɵinject(i5.ThemeImagesStore), i0.ɵɵinject(i6.AppStateStore), i0.ɵɵinject(i7.ModuleNameMapper), i0.ɵɵinject(i8.MessageService), i0.ɵɵinject(i9.AppMetadataStore), i0.ɵɵinject(i10.AuthService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BaseMetadataResolver, factory: BaseMetadataResolver.ɵfac, providedIn: 'root' }); }
}
export { BaseMetadataResolver };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMetadataResolver, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.LanguageStore }, { type: i3.NavigationStore }, { type: i4.UserPreferenceStore }, { type: i5.ThemeImagesStore }, { type: i6.AppStateStore }, { type: i7.ModuleNameMapper }, { type: i8.MessageService }, { type: i9.AppMetadataStore }, { type: i10.AuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZXRhZGF0YS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9tZXRhZGF0YS9iYXNlLW1ldGFkYXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFDLFFBQVEsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUUxQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDN0YsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDckYsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7QUFHakQsTUFDYSxvQkFBb0I7SUFFN0IsWUFDYyxpQkFBb0MsRUFDcEMsYUFBNEIsRUFDNUIsZUFBZ0MsRUFDaEMs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QWlCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFaEUsSUFBSSxZQUFZLEVBQUU7WUFDZCxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMzRDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sa0JBQWtCO1FBQ3hCLE9BQU87WUFDSCxlQUFlLEVBQUUsZUFBZTtZQUNoQyxNQUFNLEVBQUUsZUFBZTtTQUMxQixDQUFDO0lBQ04sQ0FBQztxRkE5T1Esb0JBQW9CO3VFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CLG1CQURSLE1BQU07O1NBQ2xCLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBRGhDLFVBQVU7ZUFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge2NvbmNhdEFsbCwgbWFwLCB0YWtlLCB0YXAsIHRvQXJyYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7Zm9ya0pvaW4sIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge05hdmlnYXRpb25TdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5pbXBvcnQge1RoZW1lSW1hZ2VzU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3RoZW1lLWltYWdlcy90aGVtZS1pbWFnZXMuc3RvcmUnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcn0gZnJvbSAnLi4vbmF2aWdhdGlvbi9tb2R1bGUtbmFtZS1tYXBwZXIvbW9kdWxlLW5hbWUtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtBcHBNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9hcHAtbWV0YWRhdGEvYXBwLW1ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuXG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEJhc2VNZXRhZGF0YVJlc29sdmVyICB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uU3RvcmU6IE5hdmlnYXRpb25TdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHVzZXJQcmVmZXJlbmNlU3RvcmU6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB0aGVtZUltYWdlc1N0b3JlOiBUaGVtZUltYWdlc1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwTWV0YWRhdGE6IEFwcE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmNhbGN1bGF0ZUFjdGl2ZU1vZHVsZShyb3V0ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcE1ldGFkYXRhLmxvYWQobW9kdWxlKS5waXBlKFxuICAgICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwTWV0YWRhdGEubG9hZE1vZHVsZU1ldGFkYXRhKG1vZHVsZSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSByb3V0ZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXF1ZW50aWFsTG9hZChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICAgICAgICBjb25zdCBzdHJlYW1zJDogeyBba2V5OiBzdHJpbmddOiBPYnNlcnZhYmxlPGFueT4gfSA9IHt9O1xuXG4gICAgICAgIGlmICh0aGlzLmlzVG9Mb2FkTmF2aWdhdGlvbihyb3V0ZSkpIHtcbiAgICAgICAgICAgIHN0cmVhbXMkLm5hdmlnYXRpb24gPSB0aGlzLm5hdmlnYXRpb25TdG9yZS5sb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1RvTG9hZENvbmZpZ3Mocm91dGUpKSB7XG5cbiAgICAgICAgICAgIGxldCBjb25maWdzJCA9IHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUubG9hZCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RvTG9hZExhbmd1YWdlU3RyaW5ncyhyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYW5nU3RyaW5ncyA9IHRoaXMuZ2V0TGFuZ3VhZ2VzVG9Mb2FkKHJvdXRlKTtcblxuICAgICAgICAgICAgICAgIGNvbmZpZ3MkID0gY29uZmlncyQucGlwZShcbiAgICAgICAgICAgICAgICAgICAgbWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpZ3M6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhbmd1YWdlID0gY29uZmlncy5kZWZhdWx0X2xhbmd1YWdlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlZExhbmd1YWdlID0gdGhpcy5sYW5ndWFnZVN0b3JlLmdldEN1cnJlbnRMYW5ndWFnZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3JlZExhbmd1YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlID0gc3RvcmVkTGFuZ3VhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VTdG9yZS5sb2FkKGxhbmd1YWdlLCBsYW5nU3RyaW5ncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBjb25jYXRBbGwoKSxcbiAgICAgICAgICAgICAgICAgICAgdG9BcnJheSgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RyZWFtcyQuY29uZmlncyA9IGNvbmZpZ3MkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNUb0xvYWRVc2VyUHJlZmVyZW5jZXMocm91dGUpKSB7XG5cbiAgICAgICAgICAgIHN0cmVhbXMkLnByZWZlcmVuY2VzID0gdGhpcy51c2VyUHJlZmVyZW5jZVN0b3JlLmxvYWQoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgcGFyYWxsZWxTdHJlYW0kID0gZm9ya0pvaW4oc3RyZWFtcyQpO1xuXG4gICAgICAgIHJldHVybiBwYXJhbGxlbFN0cmVhbSQucGlwZShcbiAgICAgICAgICAgIG1hcCgoZGF0YTogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdGhlbWUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUuZ2V0Q29uZmlnVmFsdWUoJ2RlZmF1bHRfdGhlbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGVtZSA9IHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUuZ2V0Q29uZmlnVmFsdWUoJ2RlZmF1bHRfdGhlbWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VyUHJlZmVyZW5jZVN0b3JlLmdldFVzZXJQcmVmZXJlbmNlKCd1c2VyX3RoZW1lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUgPSB0aGlzLnVzZXJQcmVmZXJlbmNlU3RvcmUuZ2V0VXNlclByZWZlcmVuY2UoJ3VzZXJfdGhlbWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aGVtZUltYWdlc1N0b3JlLmdldFRoZW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhlbWUgPSB0aGlzLnRoZW1lSW1hZ2VzU3RvcmUuZ2V0VGhlbWUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhlbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbWVJbWFnZXNTdG9yZS5sb2FkKHRoZW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY29uY2F0QWxsKCksXG4gICAgICAgICAgICB0b0FycmF5KCksXG4gICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5hcHBTdGF0ZS5zZXRMb2FkZWQodHJ1ZSkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IExhbmd1YWdlcyB0byBMb2FkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3t9fSByb3V0ZSBhY3RpdmF0ZWRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119IGxhbmd1YWdlc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRMYW5ndWFnZXNUb0xvYWQocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBzdHJpbmdbXSB7XG4gICAgICAgIGxldCBsYW5nU3RyaW5nczogc3RyaW5nW10gPSB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0QXZhaWxhYmxlU3RyaW5nc1R5cGVzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNUb0xvYWROYXZpZ2F0aW9uKHJvdXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGxhbmdTdHJpbmdzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyb3V0ZS5kYXRhIHx8ICFyb3V0ZS5kYXRhLmxvYWQpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvdXRlLmRhdGEubG9hZC5sYW5ndWFnZVN0cmluZ3MpKSB7XG4gICAgICAgICAgICBsYW5nU3RyaW5ncyA9IHJvdXRlLmRhdGEubG9hZC5sYW5ndWFnZVN0cmluZ3M7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFuZ1N0cmluZ3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIGxvYWQgbGFuZ3VhZ2Ugc3RyaW5ncy4gVHJ1ZSBpZiBuYXZpZ2F0aW9uIGlzIHRvIGxvYWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7e319IHJvdXRlIGFjdGl2YXRlZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBpcyB0byBsb2FkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzVG9Mb2FkTGFuZ3VhZ2VTdHJpbmdzKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNUb0xvYWROYXZpZ2F0aW9uKHJvdXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJvdXRlLmRhdGEgfHwgIXJvdXRlLmRhdGEubG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocm91dGUuZGF0YS5sb2FkLmxhbmd1YWdlU3RyaW5ncykgfHwgcm91dGUuZGF0YS5sb2FkLmxhbmd1YWdlU3RyaW5ncyA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgbG9hZCBuYXZpZ2F0aW9uLiBJZiBub3Qgc2V0IGRlZmF1bHRzIHRvIHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7e319IHJvdXRlIGFjdGl2YXRlZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBpcyB0byBsb2FkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzVG9Mb2FkQ29uZmlncyhyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXJvdXRlLmRhdGEgfHwgIXJvdXRlLmRhdGEubG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcm91dGUuZGF0YS5sb2FkLmNvbmZpZ3MgIT09IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBsb2FkIG5hdmlnYXRpb24sIElmIG5vdCBzZXQgZGVmYXVsdHMgdG8gdHJ1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHt7fX0gcm91dGUgYWN0aXZhdGVkXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGlzIHRvIGxvYWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNUb0xvYWROYXZpZ2F0aW9uKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghcm91dGUuZGF0YSB8fCAhcm91dGUuZGF0YS5sb2FkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByb3V0ZS5kYXRhLmxvYWQubmF2aWdhdGlvbiAhPT0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIGxvYWQgdXNlciBwcmVmZXJlbmNlcy4gSWYgbm90IHNldCBkZWZhdWx0cyB0byB0cnVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3t9fSByb3V0ZSBhY3RpdmF0ZWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gaXMgdG8gbG9hZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpc1RvTG9hZFVzZXJQcmVmZXJlbmNlcyhyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXJvdXRlLmRhdGEgfHwgIXJvdXRlLmRhdGEubG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcm91dGUuZGF0YS5sb2FkLnByZWZlcmVuY2VzICE9PSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkTWV0YWRhdGFMb2FkRXJyb3JNZXNzYWdlKCk6IHZvaWQge1xuICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMubGFuZ3VhZ2VTdG9yZS5nZXRBcHBTdHJpbmcoJ0xCTF9FUlJPUl9GRVRDSElOR19NRVRBREFUQScpO1xuXG4gICAgICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9ICdFcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyBtZXRhZGF0YSc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZERhbmdlck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHRoZSBhY3RpdmUgbW9kdWxlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3t9fSByb3V0ZSBhY3RpdmVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBhY3RpdmUgbW9kdWxlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNhbGN1bGF0ZUFjdGl2ZU1vZHVsZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHN0cmluZyB7XG5cbiAgICAgICAgbGV0IG1vZHVsZSA9IHJvdXRlLnBhcmFtcy5tb2R1bGU7XG5cbiAgICAgICAgaWYgKCFtb2R1bGUpIHtcbiAgICAgICAgICAgIG1vZHVsZSA9IHJvdXRlLmRhdGEubW9kdWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm9vdFBhdGggPSByb3V0ZT8udXJsWzBdPy5wYXRoID8/ICcnO1xuICAgICAgICBpZiAoIW1vZHVsZSAmJiByb290UGF0aCAhPT0gJycpIHtcbiAgICAgICAgICAgIG1vZHVsZSA9IHJvb3RQYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyZW50TW9kdWxlUGFyYW0gPSB0aGlzLmdldFBhcmVudE1vZHVsZU1hcCgpW21vZHVsZV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHBhcmVudE1vZHVsZSA9IHJvdXRlLnF1ZXJ5UGFyYW1zW3BhcmVudE1vZHVsZVBhcmFtXSB8fCAnJztcblxuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICBtb2R1bGUgPSB0aGlzLm1vZHVsZU5hbWVNYXBwZXIudG9Gcm9udGVuZChwYXJlbnRNb2R1bGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IFBhcmVudCBNb2R1bGUgTWFwXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7e319IHBhcmVudCBtb2R1bGUgbWFwXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFBhcmVudE1vZHVsZU1hcCgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdtZXJnZS1yZWNvcmRzJzogJ3JldHVybl9tb2R1bGUnLFxuICAgICAgICAgICAgaW1wb3J0OiAnaW1wb3J0X21vZHVsZSdcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=