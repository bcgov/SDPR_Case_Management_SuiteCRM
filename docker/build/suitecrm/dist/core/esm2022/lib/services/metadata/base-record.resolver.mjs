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
import { Router } from '@angular/router';
import { ModuleNameMapper } from '../navigation/module-name-mapper/module-name-mapper.service';
import { ActionNameMapper } from '../navigation/action-name-mapper/action-name-mapper.service';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { LanguageStore } from '../../store/language/language.store';
import { NavigationStore } from '../../store/navigation/navigation.store';
import { UserPreferenceStore } from '../../store/user-preference/user-preference.store';
import { ThemeImagesStore } from '../../store/theme-images/theme-images.store';
import { AppStateStore } from '../../store/app-state/app-state.store';
import { MetadataStore } from '../../store/metadata/metadata.store.service';
import { BaseModuleResolver } from './base-module.resolver';
import { forkJoin } from 'rxjs';
import { MessageService } from '../message/message.service';
import { RouteConverter } from "../navigation/route-converter/route-converter.service";
import { AppMetadataStore } from '../../store/app-metadata/app-metadata.store.service';
import { concatMap, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { RecentlyViewedService } from '../navigation/recently-viewed/recently-viewed.service';
import * as i0 from "@angular/core";
import * as i1 from "../../store/system-config/system-config.store";
import * as i2 from "../../store/language/language.store";
import * as i3 from "../../store/navigation/navigation.store";
import * as i4 from "../../store/metadata/metadata.store.service";
import * as i5 from "../../store/user-preference/user-preference.store";
import * as i6 from "../../store/theme-images/theme-images.store";
import * as i7 from "../navigation/module-name-mapper/module-name-mapper.service";
import * as i8 from "../navigation/action-name-mapper/action-name-mapper.service";
import * as i9 from "../../store/app-state/app-state.store";
import * as i10 from "../message/message.service";
import * as i11 from "../navigation/route-converter/route-converter.service";
import * as i12 from "@angular/router";
import * as i13 from "../../store/app-metadata/app-metadata.store.service";
import * as i14 from "../auth/auth.service";
import * as i15 from "../navigation/recently-viewed/recently-viewed.service";
class BaseRecordResolver extends BaseModuleResolver {
    constructor(systemConfigStore, languageStore, navigationStore, metadataStore, userPreferenceStore, themeImagesStore, moduleNameMapper, actionNameMapper, appStateStore, messageService, routeConverter, router, appMetadata, auth, recentlyViewed) {
        super(systemConfigStore, languageStore, navigationStore, userPreferenceStore, themeImagesStore, moduleNameMapper, appStateStore, metadataStore, messageService, routeConverter, appMetadata, auth);
        this.systemConfigStore = systemConfigStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.metadataStore = metadataStore;
        this.userPreferenceStore = userPreferenceStore;
        this.themeImagesStore = themeImagesStore;
        this.moduleNameMapper = moduleNameMapper;
        this.actionNameMapper = actionNameMapper;
        this.appStateStore = appStateStore;
        this.messageService = messageService;
        this.routeConverter = routeConverter;
        this.router = router;
        this.appMetadata = appMetadata;
        this.auth = auth;
        this.recentlyViewed = recentlyViewed;
    }
    resolve(route) {
        let routeModule = route.params.module;
        if (!routeModule) {
            routeModule = route.data.module;
        }
        return super.resolve(route).pipe(concatMap(() => {
            return forkJoin([
                this.metadataStore.load(routeModule, this.metadataStore.getMetadataTypes()),
            ]);
        }), tap(() => {
            if (this.auth.isLoggedIn()) {
                this.recentlyViewed.onNavigationAdd(this.appStateStore.getModule(), route);
            }
        }));
    }
    static { this.ɵfac = function BaseRecordResolver_Factory(t) { return new (t || BaseRecordResolver)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.NavigationStore), i0.ɵɵinject(i4.MetadataStore), i0.ɵɵinject(i5.UserPreferenceStore), i0.ɵɵinject(i6.ThemeImagesStore), i0.ɵɵinject(i7.ModuleNameMapper), i0.ɵɵinject(i8.ActionNameMapper), i0.ɵɵinject(i9.AppStateStore), i0.ɵɵinject(i10.MessageService), i0.ɵɵinject(i11.RouteConverter), i0.ɵɵinject(i12.Router), i0.ɵɵinject(i13.AppMetadataStore), i0.ɵɵinject(i14.AuthService), i0.ɵɵinject(i15.RecentlyViewedService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BaseRecordResolver, factory: BaseRecordResolver.ɵfac, providedIn: 'root' }); }
}
export { BaseRecordResolver };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseRecordResolver, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.LanguageStore }, { type: i3.NavigationStore }, { type: i4.MetadataStore }, { type: i5.UserPreferenceStore }, { type: i6.ThemeImagesStore }, { type: i7.ModuleNameMapper }, { type: i8.ActionNameMapper }, { type: i9.AppStateStore }, { type: i10.MessageService }, { type: i11.RouteConverter }, { type: i12.Router }, { type: i13.AppMetadataStore }, { type: i14.AuthService }, { type: i15.RecentlyViewedService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1yZWNvcmQucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbWV0YWRhdGEvYmFzZS1yZWNvcmQucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUF5QixNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUM3RixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUM3RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFFBQVEsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RixNQUNhLGtCQUFtQixTQUFRLGtCQUFrQjtJQUV0RCxZQUNjLGlCQUFvQyxFQUNwQyxhQUE0QixFQUM1QixlQUFnQyxFQUNoQyxhQUE0QixFQUM1QixtQkFBd0MsRUFDeEMsZ0JBQWtDLEVBQ2xDLGdCQUFrQyxFQUNsQyxnQkFBa0MsRUFDbEMsYUFBNEIsRUFDNUIsY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsTUFBYyxFQUNkLFdBQTZCLEVBQzdCLElBQWlCLEVBQ2pCLGNBQXFDO1FBRS9DLEtBQUssQ0FDRCxpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGNBQWMsRUFDZCxjQUFjLEVBQ2QsV0FBVyxFQUNYLElBQUksQ0FDUCxDQUFDO1FBN0JRLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsbUJBQWMsR0FBZCxjQUFjLENBQXVCO0lBZ0JuRCxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQTZCO1FBQ2pDLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRXRDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDZCxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDbkM7UUFFRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUM1QixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ1gsT0FBTyxRQUFRLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUM3RSxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzlFO1FBQ0wsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7bUZBdERRLGtCQUFrQjt1RUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFETixNQUFNOztTQUNsQixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUQ5QixVQUFVO2VBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7QWN0aW9uTmFtZU1hcHBlcn0gZnJvbSAnLi4vbmF2aWdhdGlvbi9hY3Rpb24tbmFtZS1tYXBwZXIvYWN0aW9uLW5hbWUtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL25hdmlnYXRpb24vbmF2aWdhdGlvbi5zdG9yZSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtUaGVtZUltYWdlc1N0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS90aGVtZS1pbWFnZXMvdGhlbWUtaW1hZ2VzLnN0b3JlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtCYXNlTW9kdWxlUmVzb2x2ZXJ9IGZyb20gJy4vYmFzZS1tb2R1bGUucmVzb2x2ZXInO1xuaW1wb3J0IHtmb3JrSm9pbiwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1JvdXRlQ29udmVydGVyfSBmcm9tIFwiLi4vbmF2aWdhdGlvbi9yb3V0ZS1jb252ZXJ0ZXIvcm91dGUtY29udmVydGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7QXBwTWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvYXBwLW1ldGFkYXRhL2FwcC1tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7Y29uY2F0TWFwLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7UmVjZW50bHlWaWV3ZWRTZXJ2aWNlfSBmcm9tICcuLi9uYXZpZ2F0aW9uL3JlY2VudGx5LXZpZXdlZC9yZWNlbnRseS12aWV3ZWQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEJhc2VSZWNvcmRSZXNvbHZlciBleHRlbmRzIEJhc2VNb2R1bGVSZXNvbHZlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uU3RvcmU6IE5hdmlnYXRpb25TdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhU3RvcmU6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB1c2VyUHJlZmVyZW5jZVN0b3JlOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdGhlbWVJbWFnZXNTdG9yZTogVGhlbWVJbWFnZXNTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25OYW1lTWFwcGVyOiBBY3Rpb25OYW1lTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlQ29udmVydGVyOiBSb3V0ZUNvbnZlcnRlcixcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwTWV0YWRhdGE6IEFwcE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY2VudGx5Vmlld2VkOiBSZWNlbnRseVZpZXdlZFNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBzeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgICAgIGxhbmd1YWdlU3RvcmUsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uU3RvcmUsXG4gICAgICAgICAgICB1c2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICAgICAgdGhlbWVJbWFnZXNTdG9yZSxcbiAgICAgICAgICAgIG1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgICAgICBhcHBTdGF0ZVN0b3JlLFxuICAgICAgICAgICAgbWV0YWRhdGFTdG9yZSxcbiAgICAgICAgICAgIG1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgcm91dGVDb252ZXJ0ZXIsXG4gICAgICAgICAgICBhcHBNZXRhZGF0YSxcbiAgICAgICAgICAgIGF1dGhcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgbGV0IHJvdXRlTW9kdWxlID0gcm91dGUucGFyYW1zLm1vZHVsZTtcblxuICAgICAgICBpZiAoIXJvdXRlTW9kdWxlKSB7XG4gICAgICAgICAgICByb3V0ZU1vZHVsZSA9IHJvdXRlLmRhdGEubW9kdWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLnJlc29sdmUocm91dGUpLnBpcGUoXG4gICAgICAgICAgICBjb25jYXRNYXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JrSm9pbihbXG4gICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhZGF0YVN0b3JlLmxvYWQocm91dGVNb2R1bGUsIHRoaXMubWV0YWRhdGFTdG9yZS5nZXRNZXRhZGF0YVR5cGVzKCkpLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGguaXNMb2dnZWRJbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjZW50bHlWaWV3ZWQub25OYXZpZ2F0aW9uQWRkKHRoaXMuYXBwU3RhdGVTdG9yZS5nZXRNb2R1bGUoKSwgcm91dGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19