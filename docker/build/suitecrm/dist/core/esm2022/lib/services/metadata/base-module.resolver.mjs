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
import { BaseMetadataResolver } from './base-metadata.resolver';
import { ModuleNameMapper } from '../navigation/module-name-mapper/module-name-mapper.service';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { LanguageStore } from '../../store/language/language.store';
import { NavigationStore } from '../../store/navigation/navigation.store';
import { UserPreferenceStore } from '../../store/user-preference/user-preference.store';
import { ThemeImagesStore } from '../../store/theme-images/theme-images.store';
import { AppStateStore } from '../../store/app-state/app-state.store';
import { forkJoin } from 'rxjs';
import { MetadataStore } from '../../store/metadata/metadata.store.service';
import { MessageService } from '../message/message.service';
import { concatMap, map, tap } from 'rxjs/operators';
import { RouteConverter } from "../navigation/route-converter/route-converter.service";
import { AppMetadataStore } from '../../store/app-metadata/app-metadata.store.service';
import { AuthService } from '../auth/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "../../store/system-config/system-config.store";
import * as i2 from "../../store/language/language.store";
import * as i3 from "../../store/navigation/navigation.store";
import * as i4 from "../../store/user-preference/user-preference.store";
import * as i5 from "../../store/theme-images/theme-images.store";
import * as i6 from "../navigation/module-name-mapper/module-name-mapper.service";
import * as i7 from "../../store/app-state/app-state.store";
import * as i8 from "../../store/metadata/metadata.store.service";
import * as i9 from "../message/message.service";
import * as i10 from "../navigation/route-converter/route-converter.service";
import * as i11 from "../../store/app-metadata/app-metadata.store.service";
import * as i12 from "../auth/auth.service";
class BaseModuleResolver extends BaseMetadataResolver {
    constructor(systemConfigStore, languageStore, navigationStore, userPreferenceStore, themeImagesStore, moduleNameMapper, appStateStore, metadataStore, messageService, routeConverter, appMetadata, auth) {
        super(systemConfigStore, languageStore, navigationStore, userPreferenceStore, themeImagesStore, appStateStore, moduleNameMapper, messageService, appMetadata, auth);
        this.systemConfigStore = systemConfigStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.userPreferenceStore = userPreferenceStore;
        this.themeImagesStore = themeImagesStore;
        this.moduleNameMapper = moduleNameMapper;
        this.appStateStore = appStateStore;
        this.metadataStore = metadataStore;
        this.messageService = messageService;
        this.routeConverter = routeConverter;
        this.appMetadata = appMetadata;
        this.auth = auth;
    }
    resolve(route) {
        let routeModule = route.params.module;
        if (!routeModule) {
            routeModule = route.data.module;
        }
        return super.resolve(route).pipe(concatMap(() => forkJoin([
            this.metadataStore.load(routeModule, this.metadataStore.getMetadataTypes()),
            this.metadataStore.getMetadata('saved-search', ['recordView'])
        ])), map(value => {
            return {
                metadata: value[0] ?? {},
                savedSearchMeta: value[1] ?? {},
            };
        }), tap(() => {
            if (routeModule) {
                const module = this.calculateActiveModule(route);
                this.appStateStore.setModule(module);
            }
            const info = this.routeConverter.parseRouteURL(route.url);
            const action = info.action ?? 'index';
            this.appStateStore.setView(action);
        }, () => {
            this.addMetadataLoadErrorMessage();
        }));
    }
    static { this.ɵfac = function BaseModuleResolver_Factory(t) { return new (t || BaseModuleResolver)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.NavigationStore), i0.ɵɵinject(i4.UserPreferenceStore), i0.ɵɵinject(i5.ThemeImagesStore), i0.ɵɵinject(i6.ModuleNameMapper), i0.ɵɵinject(i7.AppStateStore), i0.ɵɵinject(i8.MetadataStore), i0.ɵɵinject(i9.MessageService), i0.ɵɵinject(i10.RouteConverter), i0.ɵɵinject(i11.AppMetadataStore), i0.ɵɵinject(i12.AuthService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BaseModuleResolver, factory: BaseModuleResolver.ɵfac, providedIn: 'root' }); }
}
export { BaseModuleResolver };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseModuleResolver, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.LanguageStore }, { type: i3.NavigationStore }, { type: i4.UserPreferenceStore }, { type: i5.ThemeImagesStore }, { type: i6.ModuleNameMapper }, { type: i7.AppStateStore }, { type: i8.MetadataStore }, { type: i9.MessageService }, { type: i10.RouteConverter }, { type: i11.AppMetadataStore }, { type: i12.AuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tb2R1bGUucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbWV0YWRhdGEvYmFzZS1tb2R1bGUucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDN0YsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUN0RixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM5QixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNyRixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUNyRixPQUFPLEVB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QVU7ZUFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0Jhc2VNZXRhZGF0YVJlc29sdmVyfSBmcm9tICcuL2Jhc2UtbWV0YWRhdGEucmVzb2x2ZXInO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge05hdmlnYXRpb25TdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5pbXBvcnQge1RoZW1lSW1hZ2VzU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3RoZW1lLWltYWdlcy90aGVtZS1pbWFnZXMuc3RvcmUnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7Zm9ya0pvaW59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7Y29uY2F0TWFwLCBtYXAsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtSb3V0ZUNvbnZlcnRlcn0gZnJvbSBcIi4uL25hdmlnYXRpb24vcm91dGUtY29udmVydGVyL3JvdXRlLWNvbnZlcnRlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0FwcE1ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2FwcC1tZXRhZGF0YS9hcHAtbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9hdXRoL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEJhc2VNb2R1bGVSZXNvbHZlciBleHRlbmRzIEJhc2VNZXRhZGF0YVJlc29sdmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG5hdmlnYXRpb25TdG9yZTogTmF2aWdhdGlvblN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdXNlclByZWZlcmVuY2VTdG9yZTogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHRoZW1lSW1hZ2VzU3RvcmU6IFRoZW1lSW1hZ2VzU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhU3RvcmU6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZUNvbnZlcnRlcjogUm91dGVDb252ZXJ0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBhcHBNZXRhZGF0YTogQXBwTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgc3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgICAgICBsYW5ndWFnZVN0b3JlLFxuICAgICAgICAgICAgbmF2aWdhdGlvblN0b3JlLFxuICAgICAgICAgICAgdXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgICAgIHRoZW1lSW1hZ2VzU3RvcmUsXG4gICAgICAgICAgICBhcHBTdGF0ZVN0b3JlLFxuICAgICAgICAgICAgbW9kdWxlTmFtZU1hcHBlcixcbiAgICAgICAgICAgIG1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgYXBwTWV0YWRhdGEsXG4gICAgICAgICAgICBhdXRoXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGFueSB7XG4gICAgICAgIGxldCByb3V0ZU1vZHVsZSA9IHJvdXRlLnBhcmFtcy5tb2R1bGU7XG5cbiAgICAgICAgaWYgKCFyb3V0ZU1vZHVsZSkge1xuICAgICAgICAgICAgcm91dGVNb2R1bGUgPSByb3V0ZS5kYXRhLm1vZHVsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIucmVzb2x2ZShyb3V0ZSkucGlwZShcbiAgICAgICAgICAgIGNvbmNhdE1hcChcbiAgICAgICAgICAgICAgICAoKSA9PiBmb3JrSm9pbihbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YWRhdGFTdG9yZS5sb2FkKHJvdXRlTW9kdWxlLCB0aGlzLm1ldGFkYXRhU3RvcmUuZ2V0TWV0YWRhdGFUeXBlcygpKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhZGF0YVN0b3JlLmdldE1ldGFkYXRhKCdzYXZlZC1zZWFyY2gnLCBbJ3JlY29yZFZpZXcnXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB2YWx1ZVswXSA/PyB7fSxcbiAgICAgICAgICAgICAgICAgICAgc2F2ZWRTZWFyY2hNZXRhOiB2YWx1ZVsxXSA/PyB7fSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRhcChcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZU1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5jYWxjdWxhdGVBY3RpdmVNb2R1bGUocm91dGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUuc2V0TW9kdWxlKG1vZHVsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMucm91dGVDb252ZXJ0ZXIucGFyc2VSb3V0ZVVSTChyb3V0ZS51cmwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBpbmZvLmFjdGlvbiA/PyAnaW5kZXgnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUuc2V0VmlldyhhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE1ldGFkYXRhTG9hZEVycm9yTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==