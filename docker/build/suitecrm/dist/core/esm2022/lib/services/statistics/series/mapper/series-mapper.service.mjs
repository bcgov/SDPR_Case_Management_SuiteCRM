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
import { SeriesTraverser } from './series-traverser.service';
import { DataTypeSeriesMapper } from './data-type-mapper/data-type.series-mapper';
import * as i0 from "@angular/core";
import * as i1 from "./series-traverser.service";
import * as i2 from "./data-type-mapper/data-type.series-mapper";
class SeriesMapper {
    constructor(traverser, dataTypeMapper) {
        this.traverser = traverser;
        this.dataTypeMapper = dataTypeMapper;
        this.registry = {};
        this.addMapper('data-type-unit-converter', dataTypeMapper);
    }
    addMapper(unitType, mapper) {
        this.registry[unitType] = mapper;
    }
    map(result, mapperType, options) {
        const mapper = this?.registry[mapperType] ?? null;
        if (!mapper) {
            return;
        }
        this.traverser.traverse(result, mapper, options);
    }
    static { this.ɵfac = function SeriesMapper_Factory(t) { return new (t || SeriesMapper)(i0.ɵɵinject(i1.SeriesTraverser), i0.ɵɵinject(i2.DataTypeSeriesMapper)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SeriesMapper, factory: SeriesMapper.ɵfac, providedIn: 'root' }); }
}
export { SeriesMapper };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeriesMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.SeriesTraverser }, { type: i2.DataTypeSeriesMapper }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLW1hcHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3N0YXRpc3RpY3Mvc2VyaWVzL21hcHBlci9zZXJpZXMtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGVBQWUsRUFBa0MsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQzs7OztBQUVoRixNQUdhLFlBQVk7SUFJckIsWUFDYyxTQUEwQixFQUMxQixjQUFvQztRQURwQyxjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUFKbEQsYUFBUSxHQUFxQixFQUFFLENBQUM7UUFNNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQywwQkFBMEIsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsU0FBUyxDQUFDLFFBQWdCLEVBQUUsTUFBcUI7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDckMsQ0FBQztJQUVELEdBQUcsQ0FBQyxNQUFvQixFQUFFLFVBQWtCLEVBQUUsT0FBbUI7UUFFN0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUM7UUFFbEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQzs2RUF4QlEsWUFBWTt1RUFBWixZQUFZLFdBQVosWUFBWSxtQkFGVCxNQUFNOztTQUVULFlBQVk7dUZBQVosWUFBWTtjQUh4QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09iamVjdE1hcCwgU2VyaWVzUmVzdWx0fSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtTZXJpZXNUcmF2ZXJzZXIsIFNlcmllc1Zpc2l0b3IsIFNlcmllc1Zpc2l0b3JNYXB9IGZyb20gJy4vc2VyaWVzLXRyYXZlcnNlci5zZXJ2aWNlJztcbmltcG9ydCB7RGF0YVR5cGVTZXJpZXNNYXBwZXJ9IGZyb20gJy4vZGF0YS10eXBlLW1hcHBlci9kYXRhLXR5cGUuc2VyaWVzLW1hcHBlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VyaWVzTWFwcGVyIHtcblxuICAgIHJlZ2lzdHJ5OiBTZXJpZXNWaXNpdG9yTWFwID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHRyYXZlcnNlcjogU2VyaWVzVHJhdmVyc2VyLFxuICAgICAgICBwcm90ZWN0ZWQgZGF0YVR5cGVNYXBwZXI6IERhdGFUeXBlU2VyaWVzTWFwcGVyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuYWRkTWFwcGVyKCdkYXRhLXR5cGUtdW5pdC1jb252ZXJ0ZXInLCBkYXRhVHlwZU1hcHBlcik7XG4gICAgfVxuXG4gICAgYWRkTWFwcGVyKHVuaXRUeXBlOiBzdHJpbmcsIG1hcHBlcjogU2VyaWVzVmlzaXRvcik6IHZvaWQge1xuICAgICAgICB0aGlzLnJlZ2lzdHJ5W3VuaXRUeXBlXSA9IG1hcHBlcjtcbiAgICB9XG5cbiAgICBtYXAocmVzdWx0OiBTZXJpZXNSZXN1bHQsIG1hcHBlclR5cGU6IHN0cmluZywgb3B0aW9ucz86IE9iamVjdE1hcCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IG1hcHBlciA9IHRoaXM/LnJlZ2lzdHJ5W21hcHBlclR5cGVdID8/IG51bGw7XG5cbiAgICAgICAgaWYgKCFtYXBwZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhdmVyc2VyLnRyYXZlcnNlKHJlc3VsdCwgbWFwcGVyLCBvcHRpb25zKTtcbiAgICB9XG59XG4iXX0=