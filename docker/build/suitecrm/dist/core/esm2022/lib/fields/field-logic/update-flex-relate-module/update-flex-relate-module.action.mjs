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
import { FieldLogicActionHandler } from '../field-logic.action';
import * as i0 from "@angular/core";
class UpdateFlexRelateModuleAction extends FieldLogicActionHandler {
    constructor() {
        super();
        this.key = 'update-flex-relate-module';
        this.modes = ['edit', 'create', 'massupdate', 'filter'];
    }
    run(data, action) {
        const record = data.record;
        const field = data.field;
        if (!record || !field) {
            return;
        }
        const typeField = field.definition.type_name ?? '';
        if (typeField === '') {
            return;
        }
        const type = record?.fields[typeField]?.value ?? '';
        const fieldModule = field?.definition?.module ?? '';
        if (type !== fieldModule) {
            field.definition.module = record?.fields[typeField]?.value ?? '';
            this.updateValue(field, {}, '', record);
        }
    }
    updateValue(field, valueObject, value, record) {
        field.value = value;
        field.valueObject = valueObject;
        field.formControl.setValue(value);
        // re-validate the parent form-control after value update
        record.formGroup.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
    static { this.ɵfac = function UpdateFlexRelateModuleAction_Factory(t) { return new (t || UpdateFlexRelateModuleAction)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UpdateFlexRelateModuleAction, factory: UpdateFlexRelateModuleAction.ɵfac, providedIn: 'root' }); }
}
export { UpdateFlexRelateModuleAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UpdateFlexRelateModuleAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWZsZXgtcmVsYXRlLW1vZHVsZS5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2ZpZWxkLWxvZ2ljL3VwZGF0ZS1mbGV4LXJlbGF0ZS1tb2R1bGUvdXBkYXRlLWZsZXgtcmVsYXRlLW1vZHVsZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUF1Qix1QkFBdUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDOztBQUVwRixNQUdhLDRCQUE2QixTQUFRLHVCQUF1QjtJQUtyRTtRQUNJLEtBQUssRUFBRSxDQUFDO1FBSlosUUFBRyxHQUFHLDJCQUEyQixDQUFDO1FBQ2xDLFVBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBZSxDQUFDO0lBSWpFLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBMEIsRUFBRSxNQUFjO1FBQzFDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV6QixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUVELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUVuRCxJQUFJLFNBQVMsS0FBSyxFQUFFLEVBQUU7WUFDbEIsT0FBTztTQUNWO1FBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BELE1BQU0sV0FBVyxHQUFHLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUVwRCxJQUFJLElBQUksS0FBSyxXQUFXLEVBQUU7WUFDdEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2pFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0M7SUFDTCxDQUFDO0lBRVMsV0FBVyxDQUFDLEtBQVksRUFBRSxXQUFnQixFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQy9FLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLHlEQUF5RDtRQUN6RCxNQUFNLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDOzZGQXRDUSw0QkFBNEI7dUVBQTVCLDRCQUE0QixXQUE1Qiw0QkFBNEIsbUJBRnpCLE1BQU07O1NBRVQsNEJBQTRCO3VGQUE1Qiw0QkFBNEI7Y0FIeEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb24sIEZpZWxkLCBSZWNvcmQsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtGaWVsZExvZ2ljQWN0aW9uRGF0YSwgRmllbGRMb2dpY0FjdGlvbkhhbmRsZXJ9IGZyb20gJy4uL2ZpZWxkLWxvZ2ljLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlRmxleFJlbGF0ZU1vZHVsZUFjdGlvbiBleHRlbmRzIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyIHtcblxuICAgIGtleSA9ICd1cGRhdGUtZmxleC1yZWxhdGUtbW9kdWxlJztcbiAgICBtb2RlcyA9IFsnZWRpdCcsICdjcmVhdGUnLCAnbWFzc3VwZGF0ZScsICdmaWx0ZXInXSBhcyBWaWV3TW9kZVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IEZpZWxkTG9naWNBY3Rpb25EYXRhLCBhY3Rpb246IEFjdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCByZWNvcmQgPSBkYXRhLnJlY29yZDtcbiAgICAgICAgY29uc3QgZmllbGQgPSBkYXRhLmZpZWxkO1xuXG4gICAgICAgIGlmICghcmVjb3JkIHx8ICFmaWVsZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHlwZUZpZWxkID0gZmllbGQuZGVmaW5pdGlvbi50eXBlX25hbWUgPz8gJyc7XG5cbiAgICAgICAgaWYgKHR5cGVGaWVsZCA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHR5cGUgPSByZWNvcmQ/LmZpZWxkc1t0eXBlRmllbGRdPy52YWx1ZSA/PyAnJztcbiAgICAgICAgY29uc3QgZmllbGRNb2R1bGUgPSBmaWVsZD8uZGVmaW5pdGlvbj8ubW9kdWxlID8/ICcnO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBmaWVsZE1vZHVsZSkge1xuICAgICAgICAgICAgZmllbGQuZGVmaW5pdGlvbi5tb2R1bGUgPSByZWNvcmQ/LmZpZWxkc1t0eXBlRmllbGRdPy52YWx1ZSA/PyAnJztcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZmllbGQsIHt9LCAnJywgcmVjb3JkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVWYWx1ZShmaWVsZDogRmllbGQsIHZhbHVlT2JqZWN0OiBhbnksIHZhbHVlOiBzdHJpbmcsIHJlY29yZDogUmVjb3JkKTogdm9pZCB7XG4gICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGZpZWxkLnZhbHVlT2JqZWN0ID0gdmFsdWVPYmplY3Q7XG4gICAgICAgIGZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgLy8gcmUtdmFsaWRhdGUgdGhlIHBhcmVudCBmb3JtLWNvbnRyb2wgYWZ0ZXIgdmFsdWUgdXBkYXRlXG4gICAgICAgIHJlY29yZC5mb3JtR3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogdHJ1ZX0pO1xuICAgIH1cbn1cbiJdfQ==