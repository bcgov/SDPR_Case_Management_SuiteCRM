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
import { AppStateStore } from '../app-state/app-state.store';
import { map, tap } from 'rxjs/operators';
import { combineLatestWith } from 'rxjs';
import { LanguageStore } from '../language/language.store';
import { NavigationStore } from '../navigation/navigation.store';
import { ModuleNavigation } from '../../services/navigation/module-navigation/module-navigation.service';
import { MetadataStore } from '../metadata/metadata.store.service';
import * as i0 from "@angular/core";
import * as i1 from "../app-state/app-state.store";
import * as i2 from "../language/language.store";
import * as i3 from "../navigation/navigation.store";
import * as i4 from "../../services/navigation/module-navigation/module-navigation.service";
import * as i5 from "../metadata/metadata.store.service";
class ViewStore {
    constructor(appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore) {
        this.appStateStore = appStateStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.moduleNavigation = moduleNavigation;
        this.metadataStore = metadataStore;
        this.appState$ = this.appStateStore.vm$;
        this.language$ = this.languageStore.vm$;
        this.navigation$ = this.navigationStore.vm$;
        this.module$ = this.appState$.pipe(combineLatestWith(this.navigation$), map(([appStateInfo, navigationInfo]) => this.moduleNavigation.getModuleInfo(appStateInfo.module, navigationInfo)));
        this.appData$ = this.appState$.pipe(combineLatestWith(this.module$, this.language$, this.navigation$), map(([appState, module, language, navigation]) => {
            this.appData = { appState, module, language, navigation };
            return this.appData;
        }));
        this.metadata$ = metadataStore.metadata$.pipe(tap(metadata => { this.metadata = metadata; }));
    }
    clear() {
    }
    clearAuthBased() {
        this.clear();
    }
    get appState() {
        if (!this.appData.appState) {
            return {};
        }
        return this.appData.appState;
    }
    get module() {
        return this.appData.module;
    }
    get language() {
        if (!this.appData.language) {
            return {
                appStrings: {},
                appListStrings: {},
                modStrings: {},
                languageKey: ''
            };
        }
        return this.appData.language;
    }
    get appStrings() {
        return this.language.appStrings;
    }
    get appListStrings() {
        return this.language.appListStrings;
    }
    get modStrings() {
        return this.language.modStrings;
    }
    get navigation() {
        return this.appData.navigation;
    }
    get searchMeta() {
        if (!this.metadata.search) {
            return {
                layout: {
                    basic: {},
                    advanced: {}
                }
            };
        }
        return this.metadata.search;
    }
    static { this.ɵfac = function ViewStore_Factory(t) { return new (t || ViewStore)(i0.ɵɵinject(i1.AppStateStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.NavigationStore), i0.ɵɵinject(i4.ModuleNavigation), i0.ɵɵinject(i5.MetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ViewStore, factory: ViewStore.ɵfac }); }
}
export { ViewStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ViewStore, [{
        type: Injectable
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.LanguageStore }, { type: i3.NavigationStore }, { type: i4.ModuleNavigation }, { type: i5.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS92aWV3L3ZpZXcuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFXLGFBQWEsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFDLGlCQUFpQixFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBd0IsYUFBYSxFQUFxQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3BILE9BQU8sRUFBMkIsZUFBZSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDekYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sdUVBQXVFLENBQUM7QUFDdkcsT0FBTyxFQUFXLGFBQWEsRUFBQyxNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7O0FBVzNFLE1BQ2EsU0FBUztJQVlsQixZQUNjLGFBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLGVBQWdDLEVBQ2hDLGdCQUFrQyxFQUNsQyxhQUE0QjtRQUo1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUV0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDeEMsSUFBSSxDQUFD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bnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQge0FwcFN0YXRlLCBBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7bWFwLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtMYW5ndWFnZUxpc3RTdHJpbmdNYXAsIExhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nTWFwLCBMYW5ndWFnZVN0cmluZ3N9IGZyb20gJy4uL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7TmF2YmFyTW9kdWxlLCBOYXZpZ2F0aW9uLCBOYXZpZ2F0aW9uU3RvcmV9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5zdG9yZSc7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gJy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQge01ldGFkYXRhLCBNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7U2VhcmNoTWV0YX0gZnJvbSAnY29tbW9uJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcERhdGEge1xuICAgIGFwcFN0YXRlOiBBcHBTdGF0ZTtcbiAgICBtb2R1bGU6IE5hdmJhck1vZHVsZTtcbiAgICBsYW5ndWFnZTogTGFuZ3VhZ2VTdHJpbmdzO1xuICAgIG5hdmlnYXRpb246IE5hdmlnYXRpb247XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWaWV3U3RvcmUgaW1wbGVtZW50cyBTdGF0ZVN0b3JlIHtcblxuICAgIGFwcFN0YXRlJDogT2JzZXJ2YWJsZTxBcHBTdGF0ZT47XG4gICAgbW9kdWxlJDogT2JzZXJ2YWJsZTxOYXZiYXJNb2R1bGU+O1xuICAgIGxhbmd1YWdlJDogT2JzZXJ2YWJsZTxMYW5ndWFnZVN0cmluZ3M+O1xuICAgIG5hdmlnYXRpb24kOiBPYnNlcnZhYmxlPE5hdmlnYXRpb24+O1xuICAgIGFwcERhdGEkOiBPYnNlcnZhYmxlPEFwcERhdGE+O1xuICAgIG1ldGFkYXRhJDogT2JzZXJ2YWJsZTxNZXRhZGF0YT47XG5cbiAgICBhcHBEYXRhOiBBcHBEYXRhO1xuICAgIG1ldGFkYXRhOiBNZXRhZGF0YTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uU3RvcmU6IE5hdmlnYXRpb25TdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24sXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YVN0b3JlOiBNZXRhZGF0YVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuYXBwU3RhdGUkID0gdGhpcy5hcHBTdGF0ZVN0b3JlLnZtJDtcbiAgICAgICAgdGhpcy5sYW5ndWFnZSQgPSB0aGlzLmxhbmd1YWdlU3RvcmUudm0kO1xuICAgICAgICB0aGlzLm5hdmlnYXRpb24kID0gdGhpcy5uYXZpZ2F0aW9uU3RvcmUudm0kO1xuICAgICAgICB0aGlzLm1vZHVsZSQgPSB0aGlzLmFwcFN0YXRlJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5uYXZpZ2F0aW9uJCksXG4gICAgICAgICAgICBtYXAoKFthcHBTdGF0ZUluZm8sIG5hdmlnYXRpb25JbmZvXTogW0FwcFN0YXRlLCBOYXZpZ2F0aW9uXSkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZU5hdmlnYXRpb24uZ2V0TW9kdWxlSW5mbyhhcHBTdGF0ZUluZm8ubW9kdWxlLCBuYXZpZ2F0aW9uSW5mbykpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5hcHBEYXRhJCA9IHRoaXMuYXBwU3RhdGUkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLm1vZHVsZSQsIHRoaXMubGFuZ3VhZ2UkLCB0aGlzLm5hdmlnYXRpb24kKSxcbiAgICAgICAgICAgIG1hcCgoW2FwcFN0YXRlLCBtb2R1bGUsIGxhbmd1YWdlLCBuYXZpZ2F0aW9uXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YSA9IHthcHBTdGF0ZSwgbW9kdWxlLCBsYW5ndWFnZSwgbmF2aWdhdGlvbn0gYXMgQXBwRGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBEYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm1ldGFkYXRhJCA9IG1ldGFkYXRhU3RvcmUubWV0YWRhdGEkLnBpcGUoXG4gICAgICAgICAgICB0YXAobWV0YWRhdGEgPT4ge3RoaXMubWV0YWRhdGEgPSBtZXRhZGF0YTt9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIGdldCBhcHBTdGF0ZSgpOiBBcHBTdGF0ZSB7XG4gICAgICAgIGlmICghdGhpcy5hcHBEYXRhLmFwcFN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwRGF0YS5hcHBTdGF0ZTtcbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlKCk6IE5hdmJhck1vZHVsZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcERhdGEubW9kdWxlO1xuICAgIH1cblxuICAgIGdldCBsYW5ndWFnZSgpOiBMYW5ndWFnZVN0cmluZ3Mge1xuICAgICAgICBpZiAoIXRoaXMuYXBwRGF0YS5sYW5ndWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhcHBTdHJpbmdzOiB7fSxcbiAgICAgICAgICAgICAgICBhcHBMaXN0U3RyaW5nczoge30sXG4gICAgICAgICAgICAgICAgbW9kU3RyaW5nczoge30sXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VLZXk6ICcnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFwcERhdGEubGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgZ2V0IGFwcFN0cmluZ3MoKTogTGFuZ3VhZ2VTdHJpbmdNYXAge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZS5hcHBTdHJpbmdzO1xuICAgIH1cblxuICAgIGdldCBhcHBMaXN0U3RyaW5ncygpOiBMYW5ndWFnZUxpc3RTdHJpbmdNYXAge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZS5hcHBMaXN0U3RyaW5ncztcbiAgICB9XG5cbiAgICBnZXQgbW9kU3RyaW5ncygpOiBMYW5ndWFnZUxpc3RTdHJpbmdNYXAge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZS5tb2RTdHJpbmdzO1xuICAgIH1cblxuICAgIGdldCBuYXZpZ2F0aW9uKCk6IE5hdmlnYXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBEYXRhLm5hdmlnYXRpb247XG4gICAgfVxuXG4gICAgZ2V0IHNlYXJjaE1ldGEoKTogU2VhcmNoTWV0YSB7XG4gICAgICAgIGlmICghdGhpcy5tZXRhZGF0YS5zZWFyY2gpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgICAgIGJhc2ljOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgYWR2YW5jZWQ6IHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm1ldGFkYXRhLnNlYXJjaDtcbiAgICB9XG59XG4iXX0=