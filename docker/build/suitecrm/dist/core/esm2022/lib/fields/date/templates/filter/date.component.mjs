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
import { Component, } from '@angular/core';
import { NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { isEmptyString, isVoid } from 'common';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { DateParserFormatter } from '../../../base/datetime/date/date-parser-formatter.service';
import { DateFormatter } from '../../../../services/formatters/datetime/date-formatter.service';
import { DateAdapter } from '../../../base/datetime/date/date-adapter.service';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import { DateEditFieldComponent } from '../edit/date.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatters/datetime/date-formatter.service";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../../services/formatters/data-type.formatter.service";
import * as i4 from "../../../field-logic/field-logic.manager";
import * as i5 from "../../../field-logic-display/field-logic-display.manager";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
import * as i8 from "../../../../components/button/button.component";
class DateFilterFieldComponent extends DateEditFieldComponent {
    constructor(formatter, dateAdapter, dateParserFormatter, typeFormatter, logic, logicDisplay) {
        super(formatter, dateAdapter, dateParserFormatter, typeFormatter, logic, logicDisplay);
        this.formatter = formatter;
        this.dateAdapter = dateAdapter;
        this.dateParserFormatter = dateParserFormatter;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    ngOnInit() {
        let current = null;
        if (this.field.criteria.values && this.field.criteria.values.length > 0) {
            current = this.field.criteria.values[0];
        }
        if (!isVoid(current) && !isEmptyString(current)) {
            current = current.trim();
        }
        this.field.value = current ?? '';
        super.ngOnInit();
    }
    setFieldValue(newValue) {
        super.setFieldValue(newValue);
        this.field.criteria.operator = '=';
        this.field.criteria.values = [newValue];
    }
    static { this.ɵfac = function DateFilterFieldComponent_Factory(t) { return new (t || DateFilterFieldComponent)(i0.ɵɵdirectiveInject(i1.DateFormatter), i0.ɵɵdirectiveInject(i2.NgbDateAdapter), i0.ɵɵdirectiveInject(i2.NgbDateParserFormatter), i0.ɵɵdirectiveInject(i3.DataTypeFormatter), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateFilterFieldComponent, selectors: [["scrm-date-filter"]], features: [i0.ɵɵProvidersFeature([
                { provide: NgbDateAdapter, useClass: DateAdapter },
                { provide: NgbDateParserFormatter, useClass: DateParserFormatter }
            ]), i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 8, consts: [[1, "input-group"], ["ngbDatepicker", "", 3, "ngClass", "placement", "placeholder", "formControl", "startDate", "ngModelChange"], ["datepicker", "ngbDatepicker"], [1, "input-group-append", "align-items-end"], [3, "config"]], template: function DateFilterFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "input", 1, 2);
            i0.ɵɵlistener("ngModelChange", function DateFilterFieldComponent_Template_input_ngModelChange_1_listener($event) { return ctx.setModel($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span", 3);
            i0.ɵɵelement(4, "scrm-button", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("is-invalid", ctx.field.formControl.invalid && ctx.field.formControl.touched);
            i0.ɵɵproperty("ngClass", ctx.klass)("placement", ctx.getPlacement())("placeholder", ctx.getDateFormat().toLowerCase())("formControl", ctx.field.formControl)("startDate", ctx.dateModel);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("config", ctx.getOpenButton(_r0));
        } }, dependencies: [i6.NgClass, i7.DefaultValueAccessor, i7.NgControlStatus, i2.NgbInputDatepicker, i8.ButtonComponent, i7.FormControlDirective], encapsulation: 2 }); }
}
export { DateFilterFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateFilterFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-date-filter', providers: [
                    { provide: NgbDateAdapter, useClass: DateAdapter },
                    { provide: NgbDateParserFormatter, useClass: DateParserFormatter }
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"input-group\">\n    <input ngbDatepicker\n           [ngClass]=\"klass\"\n           [placement]=\"getPlacement()\"\n           [placeholder]=\"getDateFormat().toLowerCase()\"\n           [class.is-invalid]=\"field.formControl.invalid && field.formControl.touched\"\n           [formControl]=\"field.formControl\"\n           [startDate]=\"dateModel\"\n           (ngModelChange)=\"setModel($event)\"\n           #datepicker=\"ngbDatepicker\">\n    <span class=\"input-group-append align-items-end\">\n        <scrm-button [config]=\"getOpenButton(datepicker)\">\n        </scrm-button>\n    </span>\n</div>\n" }]
    }], function () { return [{ type: i1.DateFormatter }, { type: i2.NgbDateAdapter }, { type: i2.NgbDateParserFormatter }, { type: i3.DataTypeFormatter }, { type: i4.FieldLogicManager }, { type: i5.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2RhdGUvdGVtcGxhdGVzL2ZpbHRlci9kYXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvZGF0ZS90ZW1wbGF0ZXMvZmlsdGVyL2RhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEdBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxjQUFjLEVBQUUsc0JBQXNCLEVBQWdCLE1BQU0sNEJBQTRCLENBQUM7QUFDakcsT0FBTyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDN0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDOUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFDOUYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlFQUFpRSxDQUFDO0FBQzlGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTs7Ozs7Ozs7OztBQUcvRCxNQVNhLHdCQUF5QixTQUFRLHNCQUFzQjtJQUloRSxZQUNjLFNBQXdCLEVBQ3hCLFdBQW1DLEVBQ25DLG1CQUEyQyxFQUMzQyxhQUFnQyxFQUNoQyxLQUF3QixFQUN4QixZQUFzQztRQUVoRCxLQUFLLENBQUMsU0FBUyxFQUNiLFdBQVcsRUFDWCxtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLEtBQUssRUFDTCxZQUFZLENBQ2IsQ0FBQTtRQWJTLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQXdCO1FBQ25DLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBd0I7UUFDM0Msa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtJQVNwRCxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyRSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM3QyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzVCO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUVqQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVTLGFBQWEsQ0FBQyxRQUFRO1FBQzVCLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDO3lGQXhDUSx3QkFBd0I7b0VBQXhCLHdCQUF3QixzRUFMdEI7Z0JBQ1AsRUFBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUM7Z0JBQ2hELEVBQUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBQzthQUNuRTtZQ2xCTCw4QkFBeUIsa0JBQUE7WUFRZCwwSEFBaUIsb0JBQWdCLElBQUM7WUFQekMsaUJBUW1DO1lBQ25DLCtCQUFpRDtZQUM3QyxpQ0FDYztZQUNsQixpQkFBTyxFQUFBOzs7WUFSQSxlQUEyRTtZQUEzRSw0RkFBMkU7WUFIM0UsbUNBQWlCLGlDQUFBLGtEQUFBLHNDQUFBLDRCQUFBO1lBU1AsZUFBb0M7WUFBcEMsK0NBQW9DOzs7U0RTNUMsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FUcEMsU0FBUzsyQkFDSSxrQkFBa0IsYUFHakI7b0JBQ1AsRUFBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUM7b0JBQ2hELEVBQUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBQztpQkFDbkUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ2JEYXRlQWRhcHRlciwgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciwgTmdiRGF0ZVN0cnVjdH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtpc0VtcHR5U3RyaW5nLCBpc1ZvaWR9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0RhdGVQYXJzZXJGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uL2Jhc2UvZGF0ZXRpbWUvZGF0ZS9kYXRlLXBhcnNlci1mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0RhdGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0ZXRpbWUvZGF0ZS1mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0RhdGVBZGFwdGVyfSBmcm9tICcuLi8uLi8uLi9iYXNlL2RhdGV0aW1lL2RhdGUvZGF0ZS1hZGFwdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5TWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMtZGlzcGxheS9maWVsZC1sb2dpYy1kaXNwbGF5Lm1hbmFnZXInO1xuaW1wb3J0IHsgRGF0ZUVkaXRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2VkaXQvZGF0ZS5jb21wb25lbnQnXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWRhdGUtZmlsdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6IE5nYkRhdGVBZGFwdGVyLCB1c2VDbGFzczogRGF0ZUFkYXB0ZXJ9LFxuICAgICAgICB7cHJvdmlkZTogTmdiRGF0ZVBhcnNlckZvcm1hdHRlciwgdXNlQ2xhc3M6IERhdGVQYXJzZXJGb3JtYXR0ZXJ9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlRmlsdGVyRmllbGRDb21wb25lbnQgZXh0ZW5kcyBEYXRlRWRpdEZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHVibGljIGRhdGVNb2RlbDogTmdiRGF0ZVN0cnVjdDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgZm9ybWF0dGVyOiBEYXRlRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgZGF0ZUFkYXB0ZXI6IE5nYkRhdGVBZGFwdGVyPHN0cmluZz4sXG4gICAgICAgIHByb3RlY3RlZCBkYXRlUGFyc2VyRm9ybWF0dGVyOiBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcihmb3JtYXR0ZXIsXG4gICAgICAgICAgZGF0ZUFkYXB0ZXIsXG4gICAgICAgICAgZGF0ZVBhcnNlckZvcm1hdHRlcixcbiAgICAgICAgICB0eXBlRm9ybWF0dGVyLFxuICAgICAgICAgIGxvZ2ljLFxuICAgICAgICAgIGxvZ2ljRGlzcGxheVxuICAgICAgICApXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuZmllbGQuY3JpdGVyaWEudmFsdWVzICYmIHRoaXMuZmllbGQuY3JpdGVyaWEudmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNWb2lkKGN1cnJlbnQpICYmICFpc0VtcHR5U3RyaW5nKGN1cnJlbnQpKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlID0gY3VycmVudCA/PyAnJztcblxuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRGaWVsZFZhbHVlKG5ld1ZhbHVlKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLnNldEZpZWxkVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLmZpZWxkLmNyaXRlcmlhLm9wZXJhdG9yID0gJz0nO1xuICAgICAgICB0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlcyA9IFtuZXdWYWx1ZV07XG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICA8aW5wdXQgbmdiRGF0ZXBpY2tlclxuICAgICAgICAgICBbbmdDbGFzc109XCJrbGFzc1wiXG4gICAgICAgICAgIFtwbGFjZW1lbnRdPVwiZ2V0UGxhY2VtZW50KClcIlxuICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZ2V0RGF0ZUZvcm1hdCgpLnRvTG93ZXJDYXNlKClcIlxuICAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJmaWVsZC5mb3JtQ29udHJvbC5pbnZhbGlkICYmIGZpZWxkLmZvcm1Db250cm9sLnRvdWNoZWRcIlxuICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZmllbGQuZm9ybUNvbnRyb2xcIlxuICAgICAgICAgICBbc3RhcnREYXRlXT1cImRhdGVNb2RlbFwiXG4gICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldE1vZGVsKCRldmVudClcIlxuICAgICAgICAgICAjZGF0ZXBpY2tlcj1cIm5nYkRhdGVwaWNrZXJcIj5cbiAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZCBhbGlnbi1pdGVtcy1lbmRcIj5cbiAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwiZ2V0T3BlbkJ1dHRvbihkYXRlcGlja2VyKVwiPlxuICAgICAgICA8L3Njcm0tYnV0dG9uPlxuICAgIDwvc3Bhbj5cbjwvZGl2PlxuIl19