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
import { isEmptyString, isVoid } from 'common';
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
function DateTimeEditFieldComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div")(2, "ngb-datepicker", 5);
    i0.ɵɵlistener("dateSelect", function DateTimeEditFieldComponent_ng_template_4_Template_ngb_datepicker_dateSelect_2_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDateChange($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 6)(4, "ngb-timepicker", 7);
    i0.ɵɵlistener("ngModelChange", function DateTimeEditFieldComponent_ng_template_4_Template_ngb_timepicker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onTimeChange($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r1.dateTimeModel.date)("startDate", ctx_r1.dateTimeModel.date);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r1.dateTimeModel.time)("seconds", ctx_r1.dateTimeModel.displaySeconds)("hourStep", ctx_r1.dateTimeModel.hourStep)("minuteStep", ctx_r1.dateTimeModel.minuteStep)("secondStep", ctx_r1.dateTimeModel.secondStep);
} }
class DateTimeEditFieldComponent extends BaseDateTimeComponent {
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
        // Note: handle NgbDatePicker default validation
        // Note: convert empty form value to null for the ngb date validator to pass it
        if (isVoid(this.field.value) || isEmptyString(this.field.value)) {
            this.dateTimeModel.date = this.calendar.getToday();
            this.dateTimeModel.time = { hour: 0, minute: 0, second: 0 };
            this.field.formControl.setValue(null);
        }
        else {
            this.dateTimeModel = DateTimeModel.internalToDateTimeStruct(this.formatter, this.field.value);
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
    static { this.ɵfac = function DateTimeEditFieldComponent_Factory(t) { return new (t || DateTimeEditFieldComponent)(i0.ɵɵdirectiveInject(i1.DatetimeFormatter), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.NgbCalendar), i0.ɵɵdirectiveInject(i3.NgbPopoverConfig), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateTimeEditFieldComponent, selectors: [["scrm-datetime-edit"]], viewQuery: function DateTimeEditFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(NgbPopover, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.popover = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 8, consts: [[1, "input-group", "mr-2"], [3, "ngClass", "placeholder", "formControl", "ngbPopover", "change"], [1, "input-group-append"], [3, "config", "ngbPopover"], ["calendarContent", ""], ["name", "datepicker", 3, "ngModel", "startDate", "dateSelect"], [1, "d-flex", "justify-content-center", "mt-auto"], ["name", "timepicker", 3, "ngModel", "seconds", "hourStep", "minuteStep", "secondStep", "ngModelChange"]], template: function DateTimeEditFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "input", 1);
            i0.ɵɵlistener("change", function DateTimeEditFieldComponent_Template_input_change_1_listener($event) { return ctx.onInputChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelement(3, "scrm-button", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, DateTimeEditFieldComponent_ng_template_4_Template, 5, 7, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(5);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("is-invalid", ctx.field.formControl.invalid && ctx.field.formControl.touched);
            i0.ɵɵproperty("ngClass", ctx.klass)("placeholder", ctx.getDateTimeFormat().toLowerCase())("formControl", ctx.field.formControl)("ngbPopover", _r0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("config", ctx.getOpenButton())("ngbPopover", _r0);
        } }, dependencies: [i6.NgClass, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel, i3.NgbDatepicker, i3.NgbTimepicker, i8.ButtonComponent, i7.FormControlDirective, i3.NgbPopover], encapsulation: 2 }); }
}
export { DateTimeEditFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateTimeEditFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-datetime-edit', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"input-group mr-2\">\n\n    <input\n        [ngClass]=\"klass\"\n        [placeholder]=\"getDateTimeFormat().toLowerCase()\"\n        [class.is-invalid]=\"field.formControl.invalid && field.formControl.touched\"\n        [formControl]=\"field.formControl\"\n        (change)=\"onInputChange($event)\"\n        [ngbPopover]=\"calendarContent\"\n    >\n\n    <div class=\"input-group-append\">\n        <scrm-button [config]=\"getOpenButton()\" [ngbPopover]=\"calendarContent\">\n        </scrm-button>\n    </div>\n</div>\n\n<ng-template #calendarContent>\n    <div>\n        <div>\n            <ngb-datepicker name=\"datepicker\"\n                            [ngModel]=\"dateTimeModel.date\"\n                            (dateSelect)=\"onDateChange($event)\" [startDate]=\"dateTimeModel.date\"></ngb-datepicker>\n        </div>\n\n        <div class=\"d-flex justify-content-center mt-auto\">\n            <ngb-timepicker name=\"timepicker\"\n                            [ngModel]=\"dateTimeModel.time\" (ngModelChange)=\"onTimeChange($event)\"\n                            [seconds]=\"dateTimeModel.displaySeconds\" [hourStep]=\"dateTimeModel.hourStep\"\n                            [minuteStep]=\"dateTimeModel.minuteStep\"\n                            [secondStep]=\"dateTimeModel.secondStep\">\n            </ngb-timepicker>\n        </div>\n    </div>\n</ng-template>\n" }]
    }], function () { return [{ type: i1.DatetimeFormatter }, { type: i2.DataTypeFormatter }, { type: i3.NgbCalendar }, { type: i3.NgbPopoverConfig }, { type: i4.FieldLogicManager }, { type: i5.FieldLogicDisplayManager }]; }, { popover: [{
            type: ViewChild,
            args: [NgbPopover, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9kYXRldGltZS90ZW1wbGF0ZXMvZWRpdC9kYXRldGltZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2RhdGV0aW1lL3RlbXBsYXRlcy9lZGl0L2RhdGV0aW1lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFxQixTQUFTLEdBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFDLFdBQVcsRUFBaUIsVUFBVSxFQUFFLGdCQUFnQixFQUFnQixNQUFNLDRCQUE0QixDQUFDO0FBQ25ILE9BQU8sRUFBa0IsYUFBYSxFQUFFLE1BQU0sRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUM5RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUM5RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxRUFBcUUsQ0FBQztBQUN0RyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sMERBQTBELENBQUM7Ozs7Ozs7Ozs7OztJQ1c5RiwyQkFBSyxVQUFBLHdCQUFBO0lBSW1CLHVNQUFjLGVBQUEsMkJBQW9CLENBQUEsSUFBQztJQUFrQyxpQkFBaUIsRUFBQTtJQUcxRyw4QkFBbUQsd0JBQUE7SUFFQSw2TUFBaUIsZUFBQSwyQkFBb0Is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LElBQUksRUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiQ2FsZW5kYXIsIE5nYkRhdGVTdHJ1Y3QsIE5nYlBvcG92ZXIsIE5nYlBvcG92ZXJDb25maWcsIE5nYlRpbWVTdHJ1Y3R9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7QnV0dG9uSW50ZXJmYWNlLCBpc0VtcHR5U3RyaW5nLCBpc1ZvaWR9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0Jhc2VEYXRlVGltZUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9kYXRldGltZS9iYXNlLWRhdGV0aW1lLmNvbXBvbmVudCc7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0RhdGV0aW1lRm9ybWF0dGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRldGltZS9kYXRldGltZS1mb3JtYXR0ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtEYXRlVGltZU1vZGVsfSBmcm9tIFwiLi4vLi4vZGF0ZXRpbWUubW9kZWxcIjtcbmltcG9ydCB7UGxhY2VtZW50QXJyYXl9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC91dGlsL3Bvc2l0aW9uaW5nXCI7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1kYXRldGltZS1lZGl0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXRpbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVFZGl0RmllbGRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRGF0ZVRpbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBAVmlld0NoaWxkKE5nYlBvcG92ZXIsIHtzdGF0aWM6IHRydWV9KVxuICAgIHByaXZhdGUgcG9wb3ZlcjogTmdiUG9wb3ZlcjtcblxuICAgIGRhdGVUaW1lTW9kZWw6IERhdGVUaW1lTW9kZWwgPSBuZXcgRGF0ZVRpbWVNb2RlbCgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBmb3JtYXR0ZXI6IERhdGV0aW1lRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBjYWxlbmRhcjogTmdiQ2FsZW5kYXIsXG4gICAgICAgIHByb3RlY3RlZCBjb25maWc6IE5nYlBvcG92ZXJDb25maWcsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcihmb3JtYXR0ZXIsIHR5cGVGb3JtYXR0ZXIsIGxvZ2ljLCBsb2dpY0Rpc3BsYXkpO1xuICAgICAgICBjb25maWcuYXV0b0Nsb3NlID0gXCJvdXRzaWRlXCI7XG4gICAgICAgIGNvbmZpZy5wbGFjZW1lbnQgPSB0aGlzLmdldFBsYWNlbWVudCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIC8vIE5vdGU6IGhhbmRsZSBOZ2JEYXRlUGlja2VyIGRlZmF1bHQgdmFsaWRhdGlvblxuICAgICAgICAvLyBOb3RlOiBjb252ZXJ0IGVtcHR5IGZvcm0gdmFsdWUgdG8gbnVsbCBmb3IgdGhlIG5nYiBkYXRlIHZhbGlkYXRvciB0byBwYXNzIGl0XG4gICAgICAgIGlmIChpc1ZvaWQodGhpcy5maWVsZC52YWx1ZSkgfHwgaXNFbXB0eVN0cmluZyh0aGlzLmZpZWxkLnZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlVGltZU1vZGVsLmRhdGUgPSB0aGlzLmNhbGVuZGFyLmdldFRvZGF5KCkgYXMgTmdiRGF0ZVN0cnVjdDtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVNb2RlbC50aW1lID0ge2hvdXI6IDAsIG1pbnV0ZTogMCwgc2Vjb25kOiAwfSBhcyBOZ2JUaW1lU3RydWN0O1xuICAgICAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVNb2RlbCA9IERhdGVUaW1lTW9kZWwuaW50ZXJuYWxUb0RhdGVUaW1lU3RydWN0KHRoaXMuZm9ybWF0dGVyLCB0aGlzLmZpZWxkLnZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVUaW1lTW9kZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0Rm9ybVZhbHVlcyh0aGlzLmRhdGVUaW1lTW9kZWwudG9Vc2VyRm9ybWF0KHRoaXMuZm9ybWF0dGVyKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbmFibGUgc2Vjb25kcyBpbiB0aW1lcGlja2VyXG4gICAgICAgIGlmICh0aGlzLmZvcm1hdHRlci5nZXRUaW1lRm9ybWF0KCkuaW5jbHVkZXMoJ3NzJykpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVNb2RlbC5kaXNwbGF5U2Vjb25kcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1YnNjcmliZVZhbHVlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlQWxsKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEZvcm1WYWx1ZXMoZGF0ZVRpbWVTdHJpbmc6IHN0cmluZykge1xuICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKGRhdGVUaW1lU3RyaW5nKTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIH1cblxuICAgIG9uRGF0ZUNoYW5nZShkYXRlOiBOZ2JEYXRlU3RydWN0IHwgbnVsbCkge1xuICAgICAgICB0aGlzLmRhdGVUaW1lTW9kZWwuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuc2V0Rm9ybVZhbHVlcyh0aGlzLmRhdGVUaW1lTW9kZWwudG9Vc2VyRm9ybWF0KHRoaXMuZm9ybWF0dGVyKSk7XG4gICAgfVxuXG4gICAgb25UaW1lQ2hhbmdlKHRpbWU6IE5nYlRpbWVTdHJ1Y3QgfCBudWxsKSB7XG4gICAgICAgIHRoaXMuZGF0ZVRpbWVNb2RlbC50aW1lID0gdGltZTtcbiAgICAgICAgdGhpcy5zZXRGb3JtVmFsdWVzKHRoaXMuZGF0ZVRpbWVNb2RlbC50b1VzZXJGb3JtYXQodGhpcy5mb3JtYXR0ZXIpKTtcbiAgICB9XG5cbiAgICBvbklucHV0Q2hhbmdlKCRldmVudDogYW55KSB7XG4gICAgICAgIGNvbnN0IGRhdGVUaW1lTW9kZWwgPSBEYXRlVGltZU1vZGVsLnRvRGF0ZVRpbWVTdHJ1Y3QodGhpcy5mb3JtYXR0ZXIsICRldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICBpZighZGF0ZVRpbWVNb2RlbCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRlVGltZU1vZGVsID0gZGF0ZVRpbWVNb2RlbDtcbiAgICB9XG5cbiAgICBnZXRPcGVuQnV0dG9uKCk6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrbGFzczogJ2J0biBidG4tc20gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IG0tMCBib3JkZXItMCcsXG4gICAgICAgICAgICBpY29uOiAnY2FsZW5kYXInXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0UGxhY2VtZW50KCk6IFBsYWNlbWVudEFycmF5IHtcbiAgICAgICAgcmV0dXJuIFsnYm90dG9tLXJpZ2h0JywgJ3RvcC1yaWdodCcsICdib3R0b20tbGVmdCcsICd0b3AtbGVmdCddO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuXG48ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbXItMlwiPlxuXG4gICAgPGlucHV0XG4gICAgICAgIFtuZ0NsYXNzXT1cImtsYXNzXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cImdldERhdGVUaW1lRm9ybWF0KCkudG9Mb3dlckNhc2UoKVwiXG4gICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cImZpZWxkLmZvcm1Db250cm9sLmludmFsaWQgJiYgZmllbGQuZm9ybUNvbnRyb2wudG91Y2hlZFwiXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJmaWVsZC5mb3JtQ29udHJvbFwiXG4gICAgICAgIChjaGFuZ2UpPVwib25JbnB1dENoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW25nYlBvcG92ZXJdPVwiY2FsZW5kYXJDb250ZW50XCJcbiAgICA+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgIDxzY3JtLWJ1dHRvbiBbY29uZmlnXT1cImdldE9wZW5CdXR0b24oKVwiIFtuZ2JQb3BvdmVyXT1cImNhbGVuZGFyQ29udGVudFwiPlxuICAgICAgICA8L3Njcm0tYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjY2FsZW5kYXJDb250ZW50PlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bmdiLWRhdGVwaWNrZXIgbmFtZT1cImRhdGVwaWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cImRhdGVUaW1lTW9kZWwuZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGVTZWxlY3QpPVwib25EYXRlQ2hhbmdlKCRldmVudClcIiBbc3RhcnREYXRlXT1cImRhdGVUaW1lTW9kZWwuZGF0ZVwiPjwvbmdiLWRhdGVwaWNrZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC1hdXRvXCI+XG4gICAgICAgICAgICA8bmdiLXRpbWVwaWNrZXIgbmFtZT1cInRpbWVwaWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsXT1cImRhdGVUaW1lTW9kZWwudGltZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uVGltZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2Vjb25kc109XCJkYXRlVGltZU1vZGVsLmRpc3BsYXlTZWNvbmRzXCIgW2hvdXJTdGVwXT1cImRhdGVUaW1lTW9kZWwuaG91clN0ZXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttaW51dGVTdGVwXT1cImRhdGVUaW1lTW9kZWwubWludXRlU3RlcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NlY29uZFN0ZXBdPVwiZGF0ZVRpbWVNb2RlbC5zZWNvbmRTdGVwXCI+XG4gICAgICAgICAgICA8L25nYi10aW1lcGlja2VyPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=