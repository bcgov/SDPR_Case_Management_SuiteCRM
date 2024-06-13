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
import { Component, ViewChild, } from '@angular/core';
import { NgbCalendar, NgbPopover, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { isEmptyString } from 'common';
import { BaseDateTimeComponent } from '../../../base/datetime/base-datetime.component';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { DatetimeFormatter } from "../../../../services/formatters/datetime/datetime-formatter.service";
import { DateTimeModel } from "../../datetime.model";
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatters/datetime/datetime-formatter.service";
import * as i2 from "../../../../services/formatters/data-type.formatter.service";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "../../../field-logic/field-logic.manager";
import * as i5 from "../../../field-logic-display/field-logic-display.manager";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
import * as i8 from "../../../../components/button/button.component";
function DateTimeFilterFieldComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div")(2, "ngb-datepicker", 5);
    i0.ɵɵlistener("dateSelect", function DateTimeFilterFieldComponent_ng_template_4_Template_ngb_datepicker_dateSelect_2_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDateChange($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 6)(4, "ngb-timepicker", 7);
    i0.ɵɵlistener("ngModelChange", function DateTimeFilterFieldComponent_ng_template_4_Template_ngb_timepicker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onTimeChange($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r1.dateTimeModel.date)("startDate", ctx_r1.dateTimeModel.date);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r1.dateTimeModel.time)("seconds", ctx_r1.dateTimeModel.displaySeconds)("hourStep", ctx_r1.dateTimeModel.hourStep)("minuteStep", ctx_r1.dateTimeModel.minuteStep)("secondStep", ctx_r1.dateTimeModel.secondStep);
} }
class DateTimeFilterFieldComponent extends BaseDateTimeComponent {
    constructor(formatter, typeFormatter, calendar, config, logic, logicDisplay) {
        super(formatter, typeFormatter, logic, logicDisplay);
        this.formatter = formatter;
        this.typeFormatter = typeFormatter;
        this.calendar = calendar;
        this.config = config;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.dateTimeModel = new DateTimeModel();
        config.autoClose = "outside";
        config.placement = this.getPlacement();
    }
    ngOnInit() {
        super.ngOnInit();
        const values = (this.field && this.field.criteria && this.field.criteria.values) || [];
        let criteria = '';
        if (values.length > 0) {
            criteria = this.field.criteria.values[0];
        }
        // Note: handle NgbDatePicker default validation
        // Note: convert empty form value to null for the ngb date validator to pass it
        if (isEmptyString(criteria)) {
            this.dateTimeModel.date = this.calendar.getToday();
            this.dateTimeModel.time = { hour: 0, minute: 0, second: 0 };
            this.field.formControl.setValue(null);
        }
        else {
            this.dateTimeModel = DateTimeModel.internalToDateTimeStruct(this.formatter, criteria);
            if (this.dateTimeModel === null) {
                this.field.formControl.setValue(null);
                return;
            }
            this.setFormValues(this.dateTimeModel.toUserFormat(this.formatter));
        }
        // enable seconds in timepicker
        if (this.formatter.getTimeFormat().includes('ss')) {
            this.dateTimeModel.displaySeconds = true;
        }
        this.subscribeValueChanges();
    }
    ngOnDestroy() {
        this.unsubscribeAll();
    }
    setFormValues(dateTimeString) {
        this.field.formControl.setValue(dateTimeString);
        this.field.formControl.markAsDirty();
    }
    setFieldValue(newValue) {
        this.field.value = newValue;
        this.field.criteria.operator = '=';
        this.field.criteria.values = [newValue];
    }
    onDateChange(date) {
        this.dateTimeModel.date = date;
        this.setFormValues(this.dateTimeModel.toUserFormat(this.formatter));
    }
    onTimeChange(time) {
        this.dateTimeModel.time = time;
        this.setFormValues(this.dateTimeModel.toUserFormat(this.formatter));
    }
    onInputChange($event) {
        const dateTimeModel = DateTimeModel.toDateTimeStruct(this.formatter, $event.target.value);
        if (!dateTimeModel) {
            return;
        }
        this.dateTimeModel = dateTimeModel;
    }
    getOpenButton() {
        return {
            klass: 'btn btn-sm btn-outline-secondary m-0 border-0',
            icon: 'calendar'
        };
    }
    getPlacement() {
        return ['bottom-right', 'top-right', 'bottom-left', 'top-left'];
    }
    static { this.ɵfac = function DateTimeFilterFieldComponent_Factory(t) { return new (t || DateTimeFilterFieldComponent)(i0.ɵɵdirectiveInject(i1.DatetimeFormatter), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.NgbCalendar), i0.ɵɵdirectiveInject(i3.NgbPopoverConfig), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateTimeFilterFieldComponent, selectors: [["scrm-datetime-filter"]], viewQuery: function DateTimeFilterFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(NgbPopover, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.popover = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [[1, "input-group", "mr-2"], [3, "ngClass", "placeholder", "formControl", "change"], [1, "input-group-append"], [3, "config", "ngbPopover"], ["calendarContent", ""], ["name", "datepicker", 3, "ngModel", "startDate", "dateSelect"], [1, "d-flex", "justify-content-center", "mt-auto"], ["name", "timepicker", 3, "ngModel", "seconds", "hourStep", "minuteStep", "secondStep", "ngModelChange"]], template: function DateTimeFilterFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "input", 1);
            i0.ɵɵlistener("change", function DateTimeFilterFieldComponent_Template_input_change_1_listener($event) { return ctx.onInputChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelement(3, "scrm-button", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, DateTimeFilterFieldComponent_ng_template_4_Template, 5, 7, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(5);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("is-invalid", ctx.field.formControl.invalid && ctx.field.formControl.touched);
            i0.ɵɵproperty("ngClass", ctx.klass)("placeholder", ctx.getDateTimeFormat().toLowerCase())("formControl", ctx.field.formControl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("config", ctx.getOpenButton())("ngbPopover", _r0);
        } }, dependencies: [i6.NgClass, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel, i3.NgbDatepicker, i3.NgbTimepicker, i8.ButtonComponent, i7.FormControlDirective, i3.NgbPopover], encapsulation: 2 }); }
}
export { DateTimeFilterFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateTimeFilterFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-datetime-filter', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"input-group mr-2\">\n\n    <input\n        [ngClass]=\"klass\"\n        [placeholder]=\"getDateTimeFormat().toLowerCase()\"\n        [class.is-invalid]=\"field.formControl.invalid && field.formControl.touched\"\n        [formControl]=\"field.formControl\"\n        (change)=\"onInputChange($event)\"\n    >\n\n    <div class=\"input-group-append\">\n        <scrm-button [config]=\"getOpenButton()\" [ngbPopover]=\"calendarContent\">\n        </scrm-button>\n    </div>\n</div>\n\n<ng-template #calendarContent>\n    <div>\n        <div>\n            <ngb-datepicker name=\"datepicker\"\n                            [ngModel]=\"dateTimeModel.date\"\n                            (dateSelect)=\"onDateChange($event)\" [startDate]=\"dateTimeModel.date\"></ngb-datepicker>\n        </div>\n\n        <div class=\"d-flex justify-content-center mt-auto\">\n            <ngb-timepicker name=\"timepicker\"\n                            [ngModel]=\"dateTimeModel.time\" (ngModelChange)=\"onTimeChange($event)\"\n                            [seconds]=\"dateTimeModel.displaySeconds\" [hourStep]=\"dateTimeModel.hourStep\"\n                            [minuteStep]=\"dateTimeModel.minuteStep\"\n                            [secondStep]=\"dateTimeModel.secondStep\">\n            </ngb-timepicker>\n        </div>\n    </div>\n</ng-template>\n" }]
    }], function () { return [{ type: i1.DatetimeFormatter }, { type: i2.DataTypeFormatter }, { type: i3.NgbCalendar }, { type: i3.NgbPopoverConfig }, { type: i4.FieldLogicManager }, { type: i5.FieldLogicDisplayManager }]; }, { popover: [{
            type: ViewChild,
            args: [NgbPopover, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9kYXRldGltZS90ZW1wbGF0ZXMvZmlsdGVyL2RhdGV0aW1lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvZGF0ZXRpbWUvdGVtcGxhdGVzL2ZpbHRlci9kYXRldGltZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBcUIsU0FBUyxHQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxXQUFXLEVBQWlCLFVBQVUsRUFBRSxnQkFBZ0IsRUFBZ0IsTUFBTSw0QkFBNEIsQ0FBQztBQUNuSCxPQUFPLEVBQWtCLGFBQWEsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUN0RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUM5RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxRUFBcUUsQ0FBQztBQUN0RyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMERBQTBELENBQUM7Ozs7Ozs7Ozs7OztJQ1U5RiwyQkFBSyxVQUFBLHdCQUFBO0lBSW1CLHlNQUFjLGVBQUEsMkJBQW9CLENBQUEsSUFBQztJQUFrQyxpQkFBaUIsRUFBQTtJQUcxRyw4QkFBbUQsd0JBQUE7SUFFQSwrTUFBaUIsZUFBQSwyQkFBb0IsQ0FBQSxJ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O1FBQ1IsT0FBTyxDQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7NkZBL0ZRLDRCQUE0QjtvRUFBNUIsNEJBQTRCOzJCQUUxQixVQUFVOzs7OztZQ2hCekIsOEJBQThCLGVBQUE7WUFPdEIsZ0hBQVUseUJBQXFCLElBQUM7WUFMcEMsaUJBTUM7WUFFRCw4QkFBZ0M7WUFDNUIsaUNBQ2M7WUFDbEIsaUJBQU0sRUFBQTtZQUdWLDhIQWlCYzs7O1lBNUJOLGVBQTJFO1lBQTNFLDRGQUEyRTtZQUYzRSxtQ0FBaUIsc0RBQUEsc0NBQUE7WUFRSixlQUEwQjtZQUExQiw0Q0FBMEIsbUJBQUE7OztTREdsQyw0QkFBNEI7dUZBQTVCLDRCQUE0QjtjQUx4QyxTQUFTOzJCQUNJLHNCQUFzQjtvT0FPeEIsT0FBTztrQkFEZCxTQUFTO21CQUFDLFVBQVUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkLH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nYkNhbGVuZGFyLCBOZ2JEYXRlU3RydWN0LCBOZ2JQb3BvdmVyLCBOZ2JQb3BvdmVyQ29uZmlnLCBOZ2JUaW1lU3RydWN0fSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge0J1dHRvbkludGVyZmFjZSwgaXNFbXB0eVN0cmluZ30gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QmFzZURhdGVUaW1lQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9iYXNlL2RhdGV0aW1lL2Jhc2UtZGF0ZXRpbWUuY29tcG9uZW50JztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7RGF0ZXRpbWVGb3JtYXR0ZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGV0aW1lL2RhdGV0aW1lLWZvcm1hdHRlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGVUaW1lTW9kZWx9IGZyb20gXCIuLi8uLi9kYXRldGltZS5tb2RlbFwiO1xuaW1wb3J0IHtQbGFjZW1lbnRBcnJheX0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwL3V0aWwvcG9zaXRpb25pbmdcIjtcbmltcG9ydCB7RmllbGRMb2dpY01hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL2ZpZWxkLWxvZ2ljL2ZpZWxkLWxvZ2ljLm1hbmFnZXInO1xuaW1wb3J0IHtGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL2ZpZWxkLWxvZ2ljLWRpc3BsYXkvZmllbGQtbG9naWMtZGlzcGxheS5tYW5hZ2VyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWRhdGV0aW1lLWZpbHRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RhdGV0aW1lLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUaW1lRmlsdGVyRmllbGRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRGF0ZVRpbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBAVmlld0NoaWxkKE5nYlBvcG92ZXIsIHtzdGF0aWM6IHRydWV9KVxuICAgIHByaXZhdGUgcG9wb3ZlcjogTmdiUG9wb3ZlcjtcblxuICAgIGRhdGVUaW1lTW9kZWw6IERhdGVUaW1lTW9kZWwgPSBuZXcgRGF0ZVRpbWVNb2RlbCgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBmb3JtYXR0ZXI6IERhdGV0aW1lRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBjYWxlbmRhcjogTmdiQ2FsZW5kYXIsXG4gICAgICAgIHByb3RlY3RlZCBjb25maWc6IE5nYlBvcG92ZXJDb25maWcsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcihmb3JtYXR0ZXIsIHR5cGVGb3JtYXR0ZXIsIGxvZ2ljLCBsb2dpY0Rpc3BsYXkpO1xuICAgICAgICBjb25maWcuYXV0b0Nsb3NlID0gXCJvdXRzaWRlXCI7XG4gICAgICAgIGNvbmZpZy5wbGFjZW1lbnQgPSB0aGlzLmdldFBsYWNlbWVudCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9ICh0aGlzLmZpZWxkICYmIHRoaXMuZmllbGQuY3JpdGVyaWEgJiYgdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZXMpIHx8IFtdO1xuXG4gICAgICAgIGxldCBjcml0ZXJpYSA9ICcnO1xuICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNyaXRlcmlhID0gdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb3RlOiBoYW5kbGUgTmdiRGF0ZVBpY2tlciBkZWZhdWx0IHZhbGlkYXRpb25cbiAgICAgICAgLy8gTm90ZTogY29udmVydCBlbXB0eSBmb3JtIHZhbHVlIHRvIG51bGwgZm9yIHRoZSBuZ2IgZGF0ZSB2YWxpZGF0b3IgdG8gcGFzcyBpdFxuICAgICAgICBpZiAoaXNFbXB0eVN0cmluZyhjcml0ZXJpYSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVNb2RlbC5kYXRlID0gdGhpcy5jYWxlbmRhci5nZXRUb2RheSgpIGFzIE5nYkRhdGVTdHJ1Y3Q7XG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lTW9kZWwudGltZSA9IHtob3VyOiAwLCBtaW51dGU6IDAsIHNlY29uZDogMH0gYXMgTmdiVGltZVN0cnVjdDtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lTW9kZWwgPSBEYXRlVGltZU1vZGVsLmludGVybmFsVG9EYXRlVGltZVN0cnVjdCh0aGlzLmZvcm1hdHRlciwgY3JpdGVyaWEpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVRpbWVNb2RlbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRGb3JtVmFsdWVzKHRoaXMuZGF0ZVRpbWVNb2RlbC50b1VzZXJGb3JtYXQodGhpcy5mb3JtYXR0ZXIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuYWJsZSBzZWNvbmRzIGluIHRpbWVwaWNrZXJcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0dGVyLmdldFRpbWVGb3JtYXQoKS5pbmNsdWRlcygnc3MnKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlVGltZU1vZGVsLmRpc3BsYXlTZWNvbmRzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVmFsdWVDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVBbGwoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0Rm9ybVZhbHVlcyhkYXRlVGltZVN0cmluZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZGF0ZVRpbWVTdHJpbmcpO1xuICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEZpZWxkVmFsdWUobmV3VmFsdWUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLmZpZWxkLmNyaXRlcmlhLm9wZXJhdG9yID0gJz0nO1xuICAgICAgICB0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlcyA9IFtuZXdWYWx1ZV07XG4gICAgfVxuXG4gICAgb25EYXRlQ2hhbmdlKGRhdGU6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsKSB7XG4gICAgICAgIHRoaXMuZGF0ZVRpbWVNb2RlbC5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5zZXRGb3JtVmFsdWVzKHRoaXMuZGF0ZVRpbWVNb2RlbC50b1VzZXJGb3JtYXQodGhpcy5mb3JtYXR0ZXIpKTtcbiAgICB9XG5cbiAgICBvblRpbWVDaGFuZ2UodGltZTogTmdiVGltZVN0cnVjdCB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5kYXRlVGltZU1vZGVsLnRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLnNldEZvcm1WYWx1ZXModGhpcy5kYXRlVGltZU1vZGVsLnRvVXNlckZvcm1hdCh0aGlzLmZvcm1hdHRlcikpO1xuICAgIH1cblxuICAgIG9uSW5wdXRDaGFuZ2UoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgY29uc3QgZGF0ZVRpbWVNb2RlbCA9IERhdGVUaW1lTW9kZWwudG9EYXRlVGltZVN0cnVjdCh0aGlzLmZvcm1hdHRlciwgJGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGlmKCFkYXRlVGltZU1vZGVsKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhdGVUaW1lTW9kZWwgPSBkYXRlVGltZU1vZGVsO1xuICAgIH1cblxuICAgIGdldE9wZW5CdXR0b24oKTogQnV0dG9uSW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtsYXNzOiAnYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgbS0wIGJvcmRlci0wJyxcbiAgICAgICAgICAgIGljb246ICdjYWxlbmRhcidcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRQbGFjZW1lbnQoKTogUGxhY2VtZW50QXJyYXkge1xuICAgICAgICByZXR1cm4gWydib3R0b20tcmlnaHQnLCAndG9wLXJpZ2h0JywgJ2JvdHRvbS1sZWZ0JywgJ3RvcC1sZWZ0J107XG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG5cbjxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtci0yXCI+XG5cbiAgICA8aW5wdXRcbiAgICAgICAgW25nQ2xhc3NdPVwia2xhc3NcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZ2V0RGF0ZVRpbWVGb3JtYXQoKS50b0xvd2VyQ2FzZSgpXCJcbiAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwiZmllbGQuZm9ybUNvbnRyb2wuaW52YWxpZCAmJiBmaWVsZC5mb3JtQ29udHJvbC50b3VjaGVkXCJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImZpZWxkLmZvcm1Db250cm9sXCJcbiAgICAgICAgKGNoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxuICAgID5cblxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwiZ2V0T3BlbkJ1dHRvbigpXCIgW25nYlBvcG92ZXJdPVwiY2FsZW5kYXJDb250ZW50XCI+XG4gICAgICAgIDwvc2NybS1idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNjYWxlbmRhckNvbnRlbnQ+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxuZ2ItZGF0ZXBpY2tlciBuYW1lPVwiZGF0ZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiZGF0ZVRpbWVNb2RlbC5kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0ZVNlbGVjdCk9XCJvbkRhdGVDaGFuZ2UoJGV2ZW50KVwiIFtzdGFydERhdGVdPVwiZGF0ZVRpbWVNb2RlbC5kYXRlXCI+PC9uZ2ItZGF0ZXBpY2tlcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LWF1dG9cIj5cbiAgICAgICAgICAgIDxuZ2ItdGltZXBpY2tlciBuYW1lPVwidGltZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiZGF0ZVRpbWVNb2RlbC50aW1lXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25UaW1lQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzZWNvbmRzXT1cImRhdGVUaW1lTW9kZWwuZGlzcGxheVNlY29uZHNcIiBbaG91clN0ZXBdPVwiZGF0ZVRpbWVNb2RlbC5ob3VyU3RlcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW21pbnV0ZVN0ZXBdPVwiZGF0ZVRpbWVNb2RlbC5taW51dGVTdGVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2Vjb25kU3RlcF09XCJkYXRlVGltZU1vZGVsLnNlY29uZFN0ZXBcIj5cbiAgICAgICAgICAgIDwvbmdiLXRpbWVwaWNrZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==