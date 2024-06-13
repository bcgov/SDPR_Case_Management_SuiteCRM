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
import { BaseFieldComponent } from '../base-field.component';
import { Component } from '@angular/core';
import { DataTypeFormatter } from '../../../services/formatters/data-type.formatter.service';
import { DatetimeFormatter } from '../../../services/formatters/datetime/datetime-formatter.service';
import { FieldLogicManager } from '../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/formatters/datetime/datetime-formatter.service";
import * as i2 from "../../../services/formatters/data-type.formatter.service";
import * as i3 from "../../field-logic/field-logic.manager";
import * as i4 from "../../field-logic-display/field-logic-display.manager";
class BaseDateTimeComponent extends BaseFieldComponent {
    constructor(formatter, typeFormatter, logic, logicDisplay) {
        super(typeFormatter, logic, logicDisplay);
        this.formatter = formatter;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.vm$ = this.formatter.format$;
    }
    getDateFormat() {
        if (this.field.metadata.date_time_format) {
            return this.field.metadata.date_time_format;
        }
        return this.formatter.getDateFormat();
    }
    getDateTimeFormat() {
        return this.formatter.getDateTimeFormat();
    }
    toInternalFormat(fieldType, value) {
        return this.formatter.toInternalFormat(value, { fromFormat: this.getDateTimeFormat() });
    }
    static { this.ɵfac = function BaseDateTimeComponent_Factory(t) { return new (t || BaseDateTimeComponent)(i0.ɵɵdirectiveInject(i1.DatetimeFormatter), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.FieldLogicManager), i0.ɵɵdirectiveInject(i4.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseDateTimeComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BaseDateTimeComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
export { BaseDateTimeComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseDateTimeComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: i1.DatetimeFormatter }, { type: i2.DataTypeFormatter }, { type: i3.FieldLogicManager }, { type: i4.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRldGltZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2Jhc2UvZGF0ZXRpbWUvYmFzZS1kYXRldGltZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMERBQTBELENBQUM7QUFDM0YsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0VBQWtFLENBQUM7QUFDbkcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sdURBQXVELENBQUM7Ozs7OztBQUUvRixNQUNhLHFCQUFzQixTQUFRLGtCQUFrQjtJQUl6RCxZQUNjLFNBQTRCLEVBQzVCLGFBQWdDLEVBQ2hDLEtBQXdCLEVBQ3hCLFlBQXNDO1FBRWhELEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBTGhDLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFOcEQsUUFBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO0lBUzdCLENBQUM7SUFFRCxhQUFhO1FBQ1QsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFBO1NBQzlDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxpQkFBaUI7UUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRVMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUs7UUFDdkMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFFMUYsQ0FBQztzRkEzQlEscUJBQXFCO29FQUFyQixxQkFBcUI7O1NBQXJCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBRGpDLFNBQVM7ZUFBQyxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7QmFzZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuLi9iYXNlLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0RhdGV0aW1lRm9ybWF0dGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGV0aW1lL2RhdGV0aW1lLWZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7RmllbGRMb2dpY01hbmFnZXJ9IGZyb20gJy4uLy4uL2ZpZWxkLWxvZ2ljL2ZpZWxkLWxvZ2ljLm1hbmFnZXInO1xuaW1wb3J0IHtGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJ9IGZyb20gJy4uLy4uL2ZpZWxkLWxvZ2ljLWRpc3BsYXkvZmllbGQtbG9naWMtZGlzcGxheS5tYW5hZ2VyJztcblxuQENvbXBvbmVudCh7dGVtcGxhdGU6ICcnfSlcbmV4cG9ydCBjbGFzcyBCYXNlRGF0ZVRpbWVDb21wb25lbnQgZXh0ZW5kcyBCYXNlRmllbGRDb21wb25lbnQge1xuXG4gICAgdm0kID0gdGhpcy5mb3JtYXR0ZXIuZm9ybWF0JDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgZm9ybWF0dGVyOiBEYXRldGltZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIodHlwZUZvcm1hdHRlciwgbG9naWMsIGxvZ2ljRGlzcGxheSk7XG4gICAgfVxuXG4gICAgZ2V0RGF0ZUZvcm1hdCgpOiBzdHJpbmcge1xuICAgICAgICBpZih0aGlzLmZpZWxkLm1ldGFkYXRhLmRhdGVfdGltZV9mb3JtYXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpZWxkLm1ldGFkYXRhLmRhdGVfdGltZV9mb3JtYXRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZXIuZ2V0RGF0ZUZvcm1hdCgpO1xuICAgIH1cblxuICAgIGdldERhdGVUaW1lRm9ybWF0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRlci5nZXREYXRlVGltZUZvcm1hdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0b0ludGVybmFsRm9ybWF0KGZpZWxkVHlwZSwgdmFsdWUpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZXIudG9JbnRlcm5hbEZvcm1hdCh2YWx1ZSwge2Zyb21Gb3JtYXQ6IHRoaXMuZ2V0RGF0ZVRpbWVGb3JtYXQoKX0pO1xuXG4gICAgfVxuXG59XG4iXX0=