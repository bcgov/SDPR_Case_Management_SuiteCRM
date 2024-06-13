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
import { DataTypeUnitConverter } from '../../../../unit-converters/data-type.unit-converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../unit-converters/data-type.unit-converter.service";
class DataTypeSeriesMapper {
    constructor(converter) {
        this.converter = converter;
    }
    visit(item, options) {
        const dataType = options?.dataType ?? null;
        const direction = options?.direction ?? 'user-unit';
        if (!dataType) {
            return;
        }
        const numberValue = parseFloat(item.value.toString());
        if (!isFinite(numberValue)) {
            return;
        }
        if (direction === 'user-unit') {
            item.value = this.converter.toUserFormat(dataType, numberValue.toString());
            return;
        }
        item.value = this.converter.toInternalFormat(dataType, numberValue.toString());
    }
    static { this.ɵfac = function DataTypeSeriesMapper_Factory(t) { return new (t || DataTypeSeriesMapper)(i0.ɵɵinject(i1.DataTypeUnitConverter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DataTypeSeriesMapper, factory: DataTypeSeriesMapper.ɵfac, providedIn: 'root' }); }
}
export { DataTypeSeriesMapper };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTypeSeriesMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.DataTypeUnitConverter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10eXBlLnNlcmllcy1tYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvc3RhdGlzdGljcy9zZXJpZXMvbWFwcGVyL2RhdGEtdHlwZS1tYXBwZXIvZGF0YS10eXBlLnNlcmllcy1tYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sOERBQThELENBQUM7OztBQUluRyxNQUdhLG9CQUFvQjtJQUc3QixZQUFzQixTQUFnQztRQUFoQyxjQUFTLEdBQVQsU0FBUyxDQUF1QjtJQUN0RCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQWMsRUFBRSxPQUFtQjtRQUVyQyxNQUFNLFFBQVEsR0FBRyxPQUFPLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQztRQUMzQyxNQUFNLFNBQVMsR0FBRyxPQUFPLEVBQUUsU0FBUyxJQUFJLFdBQVcsQ0FBQztRQUVwRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTztTQUNWO1FBRUQsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3hCLE9BQU87U0FDVjtRQUVELElBQUksU0FBUyxLQUFLLFdBQVcsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMzRSxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBRW5GLENBQUM7cUZBNUJRLG9CQUFvQjt1RUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQixtQkFGakIsTUFBTTs7U0FFVCxvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQUhoQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGFUeXBlVW5pdENvbnZlcnRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vdW5pdC1jb252ZXJ0ZXJzL2RhdGEtdHlwZS51bml0LWNvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7U2VyaWVzVmlzaXRvcn0gZnJvbSAnLi4vc2VyaWVzLXRyYXZlcnNlci5zZXJ2aWNlJztcbmltcG9ydCB7RGF0YUl0ZW0sIE9iamVjdE1hcH0gZnJvbSAnY29tbW9uJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhVHlwZVNlcmllc01hcHBlciBpbXBsZW1lbnRzIFNlcmllc1Zpc2l0b3Ige1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29udmVydGVyOiBEYXRhVHlwZVVuaXRDb252ZXJ0ZXIpIHtcbiAgICB9XG5cbiAgICB2aXNpdChpdGVtOiBEYXRhSXRlbSwgb3B0aW9ucz86IE9iamVjdE1hcCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGRhdGFUeXBlID0gb3B0aW9ucz8uZGF0YVR5cGUgPz8gbnVsbDtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gb3B0aW9ucz8uZGlyZWN0aW9uID8/ICd1c2VyLXVuaXQnO1xuXG4gICAgICAgIGlmICghZGF0YVR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG51bWJlclZhbHVlID0gcGFyc2VGbG9hdChpdGVtLnZhbHVlLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIGlmICghaXNGaW5pdGUobnVtYmVyVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndXNlci11bml0Jykge1xuICAgICAgICAgICAgaXRlbS52YWx1ZSA9IHRoaXMuY29udmVydGVyLnRvVXNlckZvcm1hdChkYXRhVHlwZSwgbnVtYmVyVmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtLnZhbHVlID0gdGhpcy5jb252ZXJ0ZXIudG9JbnRlcm5hbEZvcm1hdChkYXRhVHlwZSwgbnVtYmVyVmFsdWUudG9TdHJpbmcoKSk7XG5cbiAgICB9XG5cblxufVxuIl19