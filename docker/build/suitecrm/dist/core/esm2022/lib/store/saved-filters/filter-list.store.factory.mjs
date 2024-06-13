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
import { FilterListStore } from './filter-list.store';
import { AuthService } from '../../services/auth/auth.service';
import { ModuleNameMapper } from '../../services/navigation/module-name-mapper/module-name-mapper.service';
import { FiltersListGQL } from './graphql/api.list.get';
import { SystemConfigStore } from '../system-config/system-config.store';
import { UserPreferenceStore } from '../user-preference/user-preference.store';
import { LanguageStore } from '../language/language.store';
import { MessageService } from '../../services/message/message.service';
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import * as i0 from "@angular/core";
import * as i1 from "./graphql/api.list.get";
import * as i2 from "../system-config/system-config.store";
import * as i3 from "../user-preference/user-preference.store";
import * as i4 from "../language/language.store";
import * as i5 from "../../services/message/message.service";
import * as i6 from "../../services/auth/auth.service";
import * as i7 from "../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i8 from "../../services/local-storage/local-storage.service";
class FilterListStoreFactory {
    /**
     * Constructor
     * @param listGQL
     * @param configs
     * @param preferences
     * @param language
     * @param message
     * @param auth
     * @param moduleNameMapper
     * @param localStorageService
     */
    constructor(listGQL, configs, preferences, language, message, auth, moduleNameMapper, localStorageService) {
        this.listGQL = listGQL;
        this.configs = configs;
        this.preferences = preferences;
        this.language = language;
        this.message = message;
        this.auth = auth;
        this.moduleNameMapper = moduleNameMapper;
        this.localStorageService = localStorageService;
    }
    /**
     * Create a new FilterListStore instance
     * @returns {object} FilterListStore
     */
    create() {
        return new FilterListStore(this.listGQL, this.configs, this.preferences, this.language, this.message, this.auth, this.moduleNameMapper, this.localStorageService);
    }
    static { this.ɵfac = function FilterListStoreFactory_Factory(t) { return new (t || FilterListStoreFactory)(i0.ɵɵinject(i1.FiltersListGQL), i0.ɵɵinject(i2.SystemConfigStore), i0.ɵɵinject(i3.UserPreferenceStore), i0.ɵɵinject(i4.LanguageStore), i0.ɵɵinject(i5.MessageService), i0.ɵɵinject(i6.AuthService), i0.ɵɵinject(i7.ModuleNameMapper), i0.ɵɵinject(i8.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilterListStoreFactory, factory: FilterListStoreFactory.ɵfac, providedIn: 'root' }); }
}
export { FilterListStoreFactory };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterListStoreFactory, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.FiltersListGQL }, { type: i2.SystemConfigStore }, { type: i3.UserPreferenceStore }, { type: i4.LanguageStore }, { type: i5.MessageService }, { type: i6.AuthService }, { type: i7.ModuleNameMapper }, { type: i8.LocalStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWxpc3Quc3RvcmUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS9zYXZlZC1maWx0ZXJzL2ZpbHRlci1saXN0LnN0b3JlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5RUFBeUUsQ0FBQztBQUN6RyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7Ozs7OztBQUV2RixNQUdhLHNCQUFzQjtJQUUvQjs7Ozs7Ozs7OztPQVVHO0lBQ0gsWUFDYyxPQUF1QixFQUN2QixPQUEwQixFQUMxQixXQUFnQyxFQUNoQyxRQUF1QixFQUN2QixPQUF1QixFQUN2QixJQUFpQixFQUNqQixnQkFBa0MsRUFDbEMsbUJBQXdDO1FBUHhDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUNoQyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBRXRELENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNO1FBQ0YsT0FBTyxJQUFJLGVBQWUsQ0FDdEIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxnQkFBZ0IsRUFDckIsSUFBSSxDQUFDLG1CQUFtQixDQUMzQixDQUFDO0lBQ04sQ0FBQzt1RkF4Q1Esc0JBQXNCO3VFQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCLG1CQUZuQixNQUFNOztTQUVULHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBSGxDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmlsdGVyTGlzdFN0b3JlfSBmcm9tICcuL2ZpbHRlci1saXN0LnN0b3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmFtZS1tYXBwZXIvbW9kdWxlLW5hbWUtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWx0ZXJzTGlzdEdRTH0gZnJvbSAnLi9ncmFwaHFsL2FwaS5saXN0LmdldCc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTGlzdFN0b3JlRmFjdG9yeSB7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSBsaXN0R1FMXG4gICAgICogQHBhcmFtIGNvbmZpZ3NcbiAgICAgKiBAcGFyYW0gcHJlZmVyZW5jZXNcbiAgICAgKiBAcGFyYW0gbGFuZ3VhZ2VcbiAgICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgICAqIEBwYXJhbSBhdXRoXG4gICAgICogQHBhcmFtIG1vZHVsZU5hbWVNYXBwZXJcbiAgICAgKiBAcGFyYW0gbG9jYWxTdG9yYWdlU2VydmljZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdEdRTDogRmlsdGVyc0xpc3RHUUwsXG4gICAgICAgIHByb3RlY3RlZCBjb25maWdzOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kdWxlTmFtZU1hcHBlcjogTW9kdWxlTmFtZU1hcHBlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgRmlsdGVyTGlzdFN0b3JlIGluc3RhbmNlXG4gICAgICogQHJldHVybnMge29iamVjdH0gRmlsdGVyTGlzdFN0b3JlXG4gICAgICovXG4gICAgY3JlYXRlKCk6IEZpbHRlckxpc3RTdG9yZSB7XG4gICAgICAgIHJldHVybiBuZXcgRmlsdGVyTGlzdFN0b3JlKFxuICAgICAgICAgICAgdGhpcy5saXN0R1FMLFxuICAgICAgICAgICAgdGhpcy5jb25maWdzLFxuICAgICAgICAgICAgdGhpcy5wcmVmZXJlbmNlcyxcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2UsXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UsXG4gICAgICAgICAgICB0aGlzLmF1dGgsXG4gICAgICAgICAgICB0aGlzLm1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2VcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=