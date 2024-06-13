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
import { AppStateStore } from './app-state/app-state.store';
import { LanguageStore } from './language/language.store';
import { NavigationStore } from './navigation/navigation.store';
import { SystemConfigStore } from './system-config/system-config.store';
import { ThemeImagesStore } from './theme-images/theme-images.store';
import { UserPreferenceStore } from './user-preference/user-preference.store';
import { MetadataStore } from './metadata/metadata.store.service';
import { AppMetadataStore } from './app-metadata/app-metadata.store.service';
import * as i0 from "@angular/core";
import * as i1 from "./app-state/app-state.store";
import * as i2 from "./language/language.store";
import * as i3 from "./metadata/metadata.store.service";
import * as i4 from "./navigation/navigation.store";
import * as i5 from "./system-config/system-config.store";
import * as i6 from "./theme-images/theme-images.store";
import * as i7 from "./user-preference/user-preference.store";
import * as i8 from "./app-metadata/app-metadata.store.service";
class StateManager {
    constructor(appStore, languageStore, metadataStore, navigationStore, systemConfigStore, themeImagesStore, userPreferenceStore, appMetadataStore) {
        this.appStore = appStore;
        this.languageStore = languageStore;
        this.metadataStore = metadataStore;
        this.navigationStore = navigationStore;
        this.systemConfigStore = systemConfigStore;
        this.themeImagesStore = themeImagesStore;
        this.userPreferenceStore = userPreferenceStore;
        this.appMetadataStore = appMetadataStore;
        this.stateStores = {};
        this.stateStores.appStore = this.buildMapEntry(appStore, false);
        this.stateStores.navigationStore = this.buildMapEntry(navigationStore, true);
        this.stateStores.languageStore = this.buildMapEntry(languageStore, true);
        this.stateStores.metadataStore = this.buildMapEntry(metadataStore, false);
        this.stateStores.systemConfigStore = this.buildMapEntry(systemConfigStore, false);
        this.stateStores.themeImagesStore = this.buildMapEntry(themeImagesStore, false);
        this.stateStores.userPreferenceStore = this.buildMapEntry(userPreferenceStore, true);
        this.stateStores.appMetadataStore = this.buildMapEntry(appMetadataStore, true);
    }
    /**
     * Public Api
     */
    /**
     * Clear all state
     */
    clear() {
        Object.keys(this.stateStores).forEach((key) => {
            this.stateStores[key].store.clear();
        });
    }
    /**
     * Clear all state
     */
    clearAuthBased() {
        Object.keys(this.stateStores).forEach((key) => {
            if (this.stateStores[key].authBased) {
                this.stateStores[key].store.clearAuthBased();
            }
        });
    }
    clearBackendCacheable() {
        this.clearAuthBased();
        this.systemConfigStore.clear();
    }
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
    buildMapEntry(store, authBased) {
        return {
            store,
            authBased
        };
    }
    static { this.ɵfac = function StateManager_Factory(t) { return new (t || StateManager)(i0.ɵɵinject(i1.AppStateStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.MetadataStore), i0.ɵɵinject(i4.NavigationStore), i0.ɵɵinject(i5.SystemConfigStore), i0.ɵɵinject(i6.ThemeImagesStore), i0.ɵɵinject(i7.UserPreferenceStore), i0.ɵɵinject(i8.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StateManager, factory: StateManager.ɵfac, providedIn: 'root' }); }
}
export { StateManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StateManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.LanguageStore }, { type: i3.MetadataStore }, { type: i4.NavigationStore }, { type: i5.SystemConfigStore }, { type: i6.ThemeImagesStore }, { type: i7.UserPreferenceStore }, { type: i8.AppMetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS9zdGF0ZS1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBRTVFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7Ozs7OztBQUUzRSxNQUdhLFlBQVk7SUFHckIsWUFDYyxRQUF1QixFQUN2QixhQUE0QixFQUM1QixhQUE0QixFQUM1QixlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsZ0JBQWtDLEVBQ2xDLG1CQUF3QyxFQUN4QyxnQkFBa0M7UUFQbEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVZ0QyxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFZdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRDs7T0FFRztJQUVIOztPQUVHO0lBQ0ksS0FBSztRQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHO0lBQ0ksY0FBYztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUNoRDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHFCQUFxQjtRQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRDs7T0FFRztJQUVIOzs7Ozs7T0FNRztJQUNPLGFBQWEsQ0FBQyxLQUFpQixFQUFFLFNBQWtCO1FBQ3pELE9BQU87WUFDSCxLQUFLO1lBQ0wsU0FBUztTQUNaLENBQUM7SUFDTixDQUFDOzZFQXBFUSxZQUFZO3VFQUFaLFlBQVksV0FBWixZQUFZLG1CQUZULE1BQU07O1NBRVQsWUFBWTt1RkFBWixZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge05hdmlnYXRpb25TdG9yZX0gZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc3RvcmUnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtUaGVtZUltYWdlc1N0b3JlfSBmcm9tICcuL3RoZW1lLWltYWdlcy90aGVtZS1pbWFnZXMuc3RvcmUnO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlLCBTdGF0ZVN0b3JlTWFwLCBTdGF0ZVN0b3JlTWFwRW50cnl9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtBcHBNZXRhZGF0YVN0b3JlfSBmcm9tICcuL2FwcC1tZXRhZGF0YS9hcHAtbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRlTWFuYWdlciB7XG4gICAgcHJvdGVjdGVkIHN0YXRlU3RvcmVzOiBTdGF0ZVN0b3JlTWFwID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0b3JlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhU3RvcmU6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uU3RvcmU6IE5hdmlnYXRpb25TdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHRoZW1lSW1hZ2VzU3RvcmU6IFRoZW1lSW1hZ2VzU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB1c2VyUHJlZmVyZW5jZVN0b3JlOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwTWV0YWRhdGFTdG9yZTogQXBwTWV0YWRhdGFTdG9yZSxcbiAgICApIHtcbiAgICAgICAgdGhpcy5zdGF0ZVN0b3Jlcy5hcHBTdG9yZSA9IHRoaXMuYnVpbGRNYXBFbnRyeShhcHBTdG9yZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnN0YXRlU3RvcmVzLm5hdmlnYXRpb25TdG9yZSA9IHRoaXMuYnVpbGRNYXBFbnRyeShuYXZpZ2F0aW9uU3RvcmUsIHRydWUpO1xuICAgICAgICB0aGlzLnN0YXRlU3RvcmVzLmxhbmd1YWdlU3RvcmUgPSB0aGlzLmJ1aWxkTWFwRW50cnkobGFuZ3VhZ2VTdG9yZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc3RhdGVTdG9yZXMubWV0YWRhdGFTdG9yZSA9IHRoaXMuYnVpbGRNYXBFbnRyeShtZXRhZGF0YVN0b3JlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc3RhdGVTdG9yZXMuc3lzdGVtQ29uZmlnU3RvcmUgPSB0aGlzLmJ1aWxkTWFwRW50cnkoc3lzdGVtQ29uZmlnU3RvcmUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zdGF0ZVN0b3Jlcy50aGVtZUltYWdlc1N0b3JlID0gdGhpcy5idWlsZE1hcEVudHJ5KHRoZW1lSW1hZ2VzU3RvcmUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zdGF0ZVN0b3Jlcy51c2VyUHJlZmVyZW5jZVN0b3JlID0gdGhpcy5idWlsZE1hcEVudHJ5KHVzZXJQcmVmZXJlbmNlU3RvcmUsIHRydWUpO1xuICAgICAgICB0aGlzLnN0YXRlU3RvcmVzLmFwcE1ldGFkYXRhU3RvcmUgPSB0aGlzLmJ1aWxkTWFwRW50cnkoYXBwTWV0YWRhdGFTdG9yZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFwaVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgYWxsIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlU3RvcmVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVTdG9yZXNba2V5XS5zdG9yZS5jbGVhcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbGwgc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXJBdXRoQmFzZWQoKTogdm9pZCB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGVTdG9yZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVTdG9yZXNba2V5XS5hdXRoQmFzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlU3RvcmVzW2tleV0uc3RvcmUuY2xlYXJBdXRoQmFzZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyQmFja2VuZENhY2hlYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhckF1dGhCYXNlZCgpO1xuICAgICAgICB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgYXBpXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBNYXAgZW50cnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7e319IHN0b3JlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYXV0aEJhc2VkIGZsYWdcbiAgICAgKiBAcmV0dXJucyB7e319IFN0YXRlU3RvcmVNYXBFbnRyeVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZE1hcEVudHJ5KHN0b3JlOiBTdGF0ZVN0b3JlLCBhdXRoQmFzZWQ6IGJvb2xlYW4pOiBTdGF0ZVN0b3JlTWFwRW50cnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgICBhdXRoQmFzZWRcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=