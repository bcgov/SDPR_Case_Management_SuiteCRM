/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { GreaterThanAction } from './greater-than/greater-than.action';
import { LessThanAction } from './less-than/less-than.action';
import { NotEmptyAction } from './not-empty/not-empty.action';
import { IsEmptyAction } from './is-empty/is-empty.action';
import { IsEqualAction } from './is-equal/is-equal.action';
import { NotEqualAction } from './not-equal/not-equal.action';
import * as i0 from "@angular/core";
import * as i1 from "./greater-than/greater-than.action";
import * as i2 from "./less-than/less-than.action";
import * as i3 from "./not-empty/not-empty.action";
import * as i4 from "./is-empty/is-empty.action";
import * as i5 from "./is-equal/is-equal.action";
import * as i6 from "./not-equal/not-equal.action";
class ConditionOperatorManager {
    constructor(greaterThanAction, lessThanAction, notEmptyAction, isEmptyAction, isEqualAction, notEqualAction) {
        this.greaterThanAction = greaterThanAction;
        this.lessThanAction = lessThanAction;
        this.notEmptyAction = notEmptyAction;
        this.isEmptyAction = isEmptyAction;
        this.isEqualAction = isEqualAction;
        this.notEqualAction = notEqualAction;
    }
    get(key) {
        const operatorMap = {
            'greater-than': this.greaterThanAction,
            'less-than': this.lessThanAction,
            'not-empty': this.notEmptyAction,
            'is-empty': this.isEmptyAction,
            'is-equal': this.isEqualAction,
            'not-equal': this.notEqualAction,
        };
        return operatorMap[key];
    }
    static { this.ɵfac = function ConditionOperatorManager_Factory(t) { return new (t || ConditionOperatorManager)(i0.ɵɵinject(i1.GreaterThanAction), i0.ɵɵinject(i2.LessThanAction), i0.ɵɵinject(i3.NotEmptyAction), i0.ɵɵinject(i4.IsEmptyAction), i0.ɵɵinject(i5.IsEqualAction), i0.ɵɵinject(i6.NotEqualAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConditionOperatorManager, factory: ConditionOperatorManager.ɵfac, providedIn: 'root' }); }
}
export { ConditionOperatorManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConditionOperatorManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.GreaterThanAction }, { type: i2.LessThanAction }, { type: i3.NotEmptyAction }, { type: i4.IsEmptyAction }, { type: i5.IsEqualAction }, { type: i6.NotEqualAction }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZGl0aW9uLW9wZXJhdG9yLm1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvY29uZGl0aW9uLW9wZXJhdG9ycy9jb25kaXRpb24tb3BlcmF0b3IubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBRTVELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7OztBQUU1RCxNQUdhLHdCQUF3QjtJQUVqQyxZQUNXLGlCQUFvQyxFQUNwQyxjQUE4QixFQUM5QixjQUE4QixFQUM5QixhQUE0QixFQUM1QixhQUE0QixFQUM1QixjQUE4QjtRQUw5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBR3pDLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNYLE1BQU0sV0FBVyxHQUE4QztZQUMzRCxjQUFjLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUN0QyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDaEMsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ2hDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUM5QixVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDOUIsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ25DLENBQUM7UUFFRixPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO3lGQXhCUSx3QkFBd0I7dUVBQXhCLHdCQUF3QixXQUF4Qix3QkFBd0IsbUJBRnJCLE1BQU07O1NBRVQsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FIcEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtHcmVhdGVyVGhhbkFjdGlvbn0gZnJvbSAnLi9ncmVhdGVyLXRoYW4vZ3JlYXRlci10aGFuLmFjdGlvbic7XG5pbXBvcnQge0xlc3NUaGFuQWN0aW9ufSBmcm9tICcuL2xlc3MtdGhhbi9sZXNzLXRoYW4uYWN0aW9uJztcbmltcG9ydCB7Tm90RW1wdHlBY3Rpb259IGZyb20gJy4vbm90LWVtcHR5L25vdC1lbXB0eS5hY3Rpb24nO1xuaW1wb3J0IHtDb25kaXRpb25PcGVyYXRvck1vZGVsfSBmcm9tICcuL2NvbmRpdGlvbi1vcGVyYXRvci5tb2RlbCc7XG5pbXBvcnQge0lzRW1wdHlBY3Rpb259IGZyb20gJy4vaXMtZW1wdHkvaXMtZW1wdHkuYWN0aW9uJztcbmltcG9ydCB7SXNFcXVhbEFjdGlvbn0gZnJvbSAnLi9pcy1lcXVhbC9pcy1lcXVhbC5hY3Rpb24nO1xuaW1wb3J0IHtOb3RFcXVhbEFjdGlvbn0gZnJvbSAnLi9ub3QtZXF1YWwvbm90LWVxdWFsLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uT3BlcmF0b3JNYW5hZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZ3JlYXRlclRoYW5BY3Rpb246IEdyZWF0ZXJUaGFuQWN0aW9uLFxuICAgICAgICBwdWJsaWMgbGVzc1RoYW5BY3Rpb246IExlc3NUaGFuQWN0aW9uLFxuICAgICAgICBwdWJsaWMgbm90RW1wdHlBY3Rpb246IE5vdEVtcHR5QWN0aW9uLFxuICAgICAgICBwdWJsaWMgaXNFbXB0eUFjdGlvbjogSXNFbXB0eUFjdGlvbixcbiAgICAgICAgcHVibGljIGlzRXF1YWxBY3Rpb246IElzRXF1YWxBY3Rpb24sXG4gICAgICAgIHB1YmxpYyBub3RFcXVhbEFjdGlvbjogTm90RXF1YWxBY3Rpb25cblxuICAgICkge1xuICAgIH1cblxuICAgIGdldChrZXk6IHN0cmluZyk6IENvbmRpdGlvbk9wZXJhdG9yTW9kZWwge1xuICAgICAgICBjb25zdCBvcGVyYXRvck1hcDogeyBba2V5OiBzdHJpbmddOiBDb25kaXRpb25PcGVyYXRvck1vZGVsIH0gPSB7XG4gICAgICAgICAgICAnZ3JlYXRlci10aGFuJzogdGhpcy5ncmVhdGVyVGhhbkFjdGlvbixcbiAgICAgICAgICAgICdsZXNzLXRoYW4nOiB0aGlzLmxlc3NUaGFuQWN0aW9uLFxuICAgICAgICAgICAgJ25vdC1lbXB0eSc6IHRoaXMubm90RW1wdHlBY3Rpb24sXG4gICAgICAgICAgICAnaXMtZW1wdHknOiB0aGlzLmlzRW1wdHlBY3Rpb24sXG4gICAgICAgICAgICAnaXMtZXF1YWwnOiB0aGlzLmlzRXF1YWxBY3Rpb24sXG4gICAgICAgICAgICAnbm90LWVxdWFsJzogdGhpcy5ub3RFcXVhbEFjdGlvbixcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gb3BlcmF0b3JNYXBba2V5XTtcbiAgICB9XG5cbn1cbiJdfQ==