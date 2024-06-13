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
import { SubpanelTableAdapter } from './table.adapter';
import { SubpanelLineActionsAdapterFactory } from './line-actions.adapter.factory';
import { UserPreferenceStore } from '../../../store/user-preference/user-preference.store';
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
import * as i1 from "./line-actions.adapter.factory";
import * as i2 from "../../../store/user-preference/user-preference.store";
import * as i3 from "../../../store/system-config/system-config.store";
class SubpanelTableAdapterFactory {
    constructor(lineActionsAdapterFactory, preferences, systemConfigs) {
        this.lineActionsAdapterFactory = lineActionsAdapterFactory;
        this.preferences = preferences;
        this.systemConfigs = systemConfigs;
    }
    create(store) {
        return new SubpanelTableAdapter(store, this.lineActionsAdapterFactory, this.preferences, this.systemConfigs);
    }
    static { this.ɵfac = function SubpanelTableAdapterFactory_Factory(t) { return new (t || SubpanelTableAdapterFactory)(i0.ɵɵinject(i1.SubpanelLineActionsAdapterFactory), i0.ɵɵinject(i2.UserPreferenceStore), i0.ɵɵinject(i3.SystemConfigStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelTableAdapterFactory, factory: SubpanelTableAdapterFactory.ɵfac, providedIn: 'root' }); }
}
export { SubpanelTableAdapterFactory };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelTableAdapterFactory, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.SubpanelLineActionsAdapterFactory }, { type: i2.UserPreferenceStore }, { type: i3.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuYWRhcHRlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvc3VicGFuZWwvYWRhcHRlcnMvdGFibGUuYWRhcHRlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtEQUFrRCxDQUFDOzs7OztBQUduRixNQUdhLDJCQUEyQjtJQUVwQyxZQUNjLHlCQUE0RCxFQUM1RCxXQUFnQyxFQUNoQyxhQUFnQztRQUZoQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQW1DO1FBQzVELGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7SUFFOUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFvQjtRQUN2QixPQUFPLElBQUksb0JBQW9CLENBQzNCLEtBQUssRUFDTCxJQUFJLENBQUMseUJBQXlCLEVBQzlCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxhQUFhLENBQ3JCLENBQUM7SUFDTixDQUFDOzRGQWhCUSwyQkFBMkI7dUVBQTNCLDJCQUEyQixXQUEzQiwyQkFBMkIsbUJBRnhCLE1BQU07O1NBRVQsMkJBQTJCO3VGQUEzQiwyQkFBMkI7Y0FIdkMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJwYW5lbFN0b3JlfSBmcm9tICcuLi9zdG9yZS9zdWJwYW5lbC9zdWJwYW5lbC5zdG9yZSc7XG5pbXBvcnQge1N1YnBhbmVsVGFibGVBZGFwdGVyfSBmcm9tICcuL3RhYmxlLmFkYXB0ZXInO1xuaW1wb3J0IHtTdWJwYW5lbExpbmVBY3Rpb25zQWRhcHRlckZhY3Rvcnl9IGZyb20gJy4vbGluZS1hY3Rpb25zLmFkYXB0ZXIuZmFjdG9yeSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZVwiO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFN1YnBhbmVsVGFibGVBZGFwdGVyRmFjdG9yeSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxpbmVBY3Rpb25zQWRhcHRlckZhY3Rvcnk6IFN1YnBhbmVsTGluZUFjdGlvbnNBZGFwdGVyRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBjcmVhdGUoc3RvcmU6IFN1YnBhbmVsU3RvcmUpOiBTdWJwYW5lbFRhYmxlQWRhcHRlciB7XG4gICAgICAgIHJldHVybiBuZXcgU3VicGFuZWxUYWJsZUFkYXB0ZXIoXG4gICAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICAgIHRoaXMubGluZUFjdGlvbnNBZGFwdGVyRmFjdG9yeSxcbiAgICAgICAgICAgIHRoaXMucHJlZmVyZW5jZXMsXG4gICAgICAgICAgICB0aGlzLnN5c3RlbUNvbmZpZ3NcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=