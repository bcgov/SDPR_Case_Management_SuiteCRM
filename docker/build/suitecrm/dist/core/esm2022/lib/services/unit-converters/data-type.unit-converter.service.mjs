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
import { CurrencyUnitConverter } from './currency/currency.unit-converter';
import * as i0 from "@angular/core";
import * as i1 from "./currency/currency.unit-converter";
class DataTypeUnitConverter {
    constructor(currencyUnitConverter) {
        this.currencyUnitConverter = currencyUnitConverter;
        this.map = {};
        this.addUnitConverter('currency', currencyUnitConverter);
    }
    addUnitConverter(unitType, unitConverter) {
        this.map[unitType] = unitConverter;
    }
    toUserFormat(dataType, value, options) {
        if (!dataType) {
            return value;
        }
        const formatter = this.map[dataType];
        if (!formatter) {
            return value;
        }
        return formatter.toUserFormat(value, options);
    }
    toInternalFormat(dataType, value) {
        if (!dataType) {
            return value;
        }
        const formatter = this.map[dataType];
        if (!formatter) {
            return value;
        }
        return formatter.toInternalFormat(value);
    }
    static { this.ɵfac = function DataTypeUnitConverter_Factory(t) { return new (t || DataTypeUnitConverter)(i0.ɵɵinject(i1.CurrencyUnitConverter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DataTypeUnitConverter, factory: DataTypeUnitConverter.ɵfac, providedIn: 'root' }); }
}
export { DataTypeUnitConverter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTypeUnitConverter, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.CurrencyUnitConverter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10eXBlLnVuaXQtY29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvdW5pdC1jb252ZXJ0ZXJzL2RhdGEtdHlwZS51bml0LWNvbnZlcnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDOzs7QUFNekUsTUFHYSxxQkFBcUI7SUFJOUIsWUFDYyxxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUgxRCxRQUFHLEdBQXFCLEVBQUUsQ0FBQztRQUt2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWdCLEVBQUUsYUFBNEI7UUFDM0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVELFlBQVksQ0FBQyxRQUFnQixFQUFFLEtBQWEsRUFBRSxPQUE4QjtRQUV4RSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDWixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWdCLEVBQUUsS0FBYTtRQUU1QyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDWixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sU0FBUyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7c0ZBeENRLHFCQUFxQjt1RUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQixtQkFGbEIsTUFBTTs7U0FFVCxxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQUhqQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VuaXRDb252ZXJ0ZXIsIFVuaXRDb252ZXJ0ZXJPcHRpb25zfSBmcm9tICcuL3VuaXQtY29udmVydGVyLm1vZGVsJztcbmltcG9ydCB7Q3VycmVuY3lVbml0Q29udmVydGVyfSBmcm9tICcuL2N1cnJlbmN5L2N1cnJlbmN5LnVuaXQtY29udmVydGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBVbml0Q29udmVydGVyTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBVbml0Q29udmVydGVyO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUeXBlVW5pdENvbnZlcnRlciB7XG5cbiAgICBtYXA6IFVuaXRDb252ZXJ0ZXJNYXAgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgY3VycmVuY3lVbml0Q29udmVydGVyOiBDdXJyZW5jeVVuaXRDb252ZXJ0ZXIsXG4gICAgKSB7XG4gICAgICAgIHRoaXMuYWRkVW5pdENvbnZlcnRlcignY3VycmVuY3knLCBjdXJyZW5jeVVuaXRDb252ZXJ0ZXIpO1xuICAgIH1cblxuICAgIGFkZFVuaXRDb252ZXJ0ZXIodW5pdFR5cGU6IHN0cmluZywgdW5pdENvbnZlcnRlcjogVW5pdENvbnZlcnRlcik6IHZvaWQge1xuICAgICAgICB0aGlzLm1hcFt1bml0VHlwZV0gPSB1bml0Q29udmVydGVyO1xuICAgIH1cblxuICAgIHRvVXNlckZvcm1hdChkYXRhVHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvcHRpb25zPzogVW5pdENvbnZlcnRlck9wdGlvbnMpOiBzdHJpbmcge1xuXG4gICAgICAgIGlmICghZGF0YVR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IHRoaXMubWFwW2RhdGFUeXBlXTtcbiAgICAgICAgaWYgKCFmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZXIudG9Vc2VyRm9ybWF0KHZhbHVlLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICB0b0ludGVybmFsRm9ybWF0KGRhdGFUeXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICAgIGlmICghZGF0YVR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlciA9IHRoaXMubWFwW2RhdGFUeXBlXTtcbiAgICAgICAgaWYgKCFmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZXIudG9JbnRlcm5hbEZvcm1hdCh2YWx1ZSk7XG4gICAgfVxufVxuIl19