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
import { concatMap, map, tap } from 'rxjs/operators';
import { ModuleNameMapper } from '../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { AppStateStore } from '../../../store/app-state/app-state.store';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { NavigationStore } from '../../../store/navigation/navigation.store';
import { UserPreferenceStore } from '../../../store/user-preference/user-preference.store';
import { BaseMetadataResolver } from '../../../services/metadata/base-metadata.resolver';
import { RouteConverter } from '../../../services/navigation/route-converter/route-converter.service';
import { LanguageStore } from '../../../store/language/language.store';
import { ThemeImagesStore } from '../../../store/theme-images/theme-images.store';
import { MessageService } from '../../../services/message/message.service';
import { AppMetadataStore } from '../../../store/app-metadata/app-metadata.store.service';
import { AuthService } from '../../../services/auth/auth.service';
import { RecentlyViewedService } from '../../../services/navigation/recently-viewed/recently-viewed.service';
import { forkJoin } from 'rxjs';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/system-config/system-config.store";
import * as i2 from "../../../store/language/language.store";
import * as i3 from "../../../store/navigation/navigation.store";
import * as i4 from "../../../store/user-preference/user-preference.store";
import * as i5 from "../../../store/theme-images/theme-images.store";
import * as i6 from "../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i7 from "../../../services/navigation/route-converter/route-converter.service";
import * as i8 from "../../../services/message/message.service";
import * as i9 from "../../../store/app-state/app-state.store";
import * as i10 from "../../../store/app-metadata/app-metadata.store.service";
import * as i11 from "../../../services/auth/auth.service";
import * as i12 from "../../../services/navigation/recently-viewed/recently-viewed.service";
import * as i13 from "../../../store/metadata/metadata.store.service";
class ClassicViewResolver extends BaseMetadataResolver {
    constructor(systemConfigStore, languageStore, navigationStore, userPreferenceStore, themeImagesStore, moduleNameMapper, routeConverter, messageService, appStateStore, appMetadata, auth, recentlyViewed, metadataStore) {
        super(systemConfigStore, languageStore, navigationStore, userPreferenceStore, themeImagesStore, appStateStore, moduleNameMapper, messageService, appMetadata, auth);
        this.systemConfigStore = systemConfigStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.userPreferenceStore = userPreferenceStore;
        this.themeImagesStore = themeImagesStore;
        this.moduleNameMapper = moduleNameMapper;
        this.routeConverter = routeConverter;
        this.messageService = messageService;
        this.appStateStore = appStateStore;
        this.appMetadata = appMetadata;
        this.auth = auth;
        this.recentlyViewed = recentlyViewed;
        this.metadataStore = metadataStore;
    }
    resolve(route) {
        const module = this.calculateActiveModule(route);
        return super.resolve(route).pipe(concatMap(() => {
            return forkJoin([
                this.metadataStore.load(module, this.metadataStore.getMetadataTypes()),
            ]);
        }), map(() => this.routeConverter.toLegacy(route.params, route.queryParams)), tap(() => {
            if (route.params.module) {
                const module = this.calculateActiveModule(route);
                this.appStateStore.setModule(module);
            }
            const info = this.routeConverter.parseRouteURL(route.url);
            const action = info.action ?? 'index';
            this.appStateStore.setView(action);
            this.recentlyViewed.onNavigationAdd(this.appStateStore.getModule(), route);
        }, () => {
            this.addMetadataLoadErrorMessage();
        }));
    }
    static { this.ɵfac = function ClassicViewResolver_Factory(t) { return new (t || ClassicViewResolver)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.NavigationStore), i0.ɵɵinject(i4.UserPreferenceStore), i0.ɵɵinject(i5.ThemeImagesStore), i0.ɵɵinject(i6.ModuleNameMapper), i0.ɵɵinject(i7.RouteConverter), i0.ɵɵinject(i8.MessageService), i0.ɵɵinject(i9.AppStateStore), i0.ɵɵinject(i10.AppMetadataStore), i0.ɵɵinject(i11.AuthService), i0.ɵɵinject(i12.RecentlyViewedService), i0.ɵɵinject(i13.MetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ClassicViewResolver, factory: ClassicViewResolver.ɵfac, providedIn: 'root' }); }
}
export { ClassicViewResolver };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClassicViewResolver, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.LanguageStore }, { type: i3.NavigationStore }, { type: i4.UserPreferenceStore }, { type: i5.ThemeImagesStore }, { type: i6.ModuleNameMapper }, { type: i7.RouteConverter }, { type: i8.MessageService }, { type: i9.AppStateStore }, { type: i10.AppMetadataStore }, { type: i11.AuthService }, { type: i12.RecentlyViewedService }, { type: i13.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy12aWV3LnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2NsYXNzaWMvc2VydmljZXMvY2xhc3NpYy12aWV3LnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRFQUE0RSxDQUFDO0FBQzVHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUNuRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sc0RBQXNELENBQUM7QUFDekYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDdkYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHNFQUFzRSxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNoRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0RBQXdELENBQUM7QUFDeEYsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ2hFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNFQUFzRSxDQUFD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O1NBQ2xCLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBRC9CLFVBQVU7ZUFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge2NvbmNhdE1hcCwgbWFwLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmFtZS1tYXBwZXIvbW9kdWxlLW5hbWUtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge05hdmlnYXRpb25TdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5pbXBvcnQge0Jhc2VNZXRhZGF0YVJlc29sdmVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXRhZGF0YS9iYXNlLW1ldGFkYXRhLnJlc29sdmVyJztcbmltcG9ydCB7Um91dGVDb252ZXJ0ZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vcm91dGUtY29udmVydGVyL3JvdXRlLWNvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtUaGVtZUltYWdlc1N0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS90aGVtZS1pbWFnZXMvdGhlbWUtaW1hZ2VzLnN0b3JlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7QXBwTWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYXBwLW1ldGFkYXRhL2FwcC1tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7UmVjZW50bHlWaWV3ZWRTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL3JlY2VudGx5LXZpZXdlZC9yZWNlbnRseS12aWV3ZWQuc2VydmljZSc7XG5pbXBvcnQge2ZvcmtKb2lufSBmcm9tICdyeGpzJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIENsYXNzaWNWaWV3UmVzb2x2ZXIgZXh0ZW5kcyBCYXNlTWV0YWRhdGFSZXNvbHZlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uU3RvcmU6IE5hdmlnYXRpb25TdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHVzZXJQcmVmZXJlbmNlU3RvcmU6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB0aGVtZUltYWdlc1N0b3JlOiBUaGVtZUltYWdlc1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kdWxlTmFtZU1hcHBlcjogTW9kdWxlTmFtZU1hcHBlcixcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlQ29udmVydGVyOiBSb3V0ZUNvbnZlcnRlcixcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhcHBNZXRhZGF0YTogQXBwTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjZW50bHlWaWV3ZWQ6IFJlY2VudGx5Vmlld2VkU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhU3RvcmU6IE1ldGFkYXRhU3RvcmUsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgc3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgICAgICBsYW5ndWFnZVN0b3JlLFxuICAgICAgICAgICAgbmF2aWdhdGlvblN0b3JlLFxuICAgICAgICAgICAgdXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgICAgIHRoZW1lSW1hZ2VzU3RvcmUsXG4gICAgICAgICAgICBhcHBTdGF0ZVN0b3JlLFxuICAgICAgICAgICAgbW9kdWxlTmFtZU1hcHBlcixcbiAgICAgICAgICAgIG1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgYXBwTWV0YWRhdGEsXG4gICAgICAgICAgICBhdXRoXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGFueSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuY2FsY3VsYXRlQWN0aXZlTW9kdWxlKHJvdXRlKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnJlc29sdmUocm91dGUpLnBpcGUoXG4gICAgICAgICAgICBjb25jYXRNYXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JrSm9pbihbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YWRhdGFTdG9yZS5sb2FkKG1vZHVsZSwgdGhpcy5tZXRhZGF0YVN0b3JlLmdldE1ldGFkYXRhVHlwZXMoKSksXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1hcCgoKSA9PiB0aGlzLnJvdXRlQ29udmVydGVyLnRvTGVnYWN5KHJvdXRlLnBhcmFtcywgcm91dGUucXVlcnlQYXJhbXMpKSxcbiAgICAgICAgICAgIHRhcChcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZS5wYXJhbXMubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmNhbGN1bGF0ZUFjdGl2ZU1vZHVsZShyb3V0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS5zZXRNb2R1bGUobW9kdWxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5yb3V0ZUNvbnZlcnRlci5wYXJzZVJvdXRlVVJMKHJvdXRlLnVybCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGluZm8uYWN0aW9uID8/ICdpbmRleCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS5zZXRWaWV3KGFjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNlbnRseVZpZXdlZC5vbk5hdmlnYXRpb25BZGQodGhpcy5hcHBTdGF0ZVN0b3JlLmdldE1vZHVsZSgpLCByb3V0ZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTWV0YWRhdGFMb2FkRXJyb3JNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19