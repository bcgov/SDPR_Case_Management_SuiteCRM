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
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { isEmptyString } from 'common';
import { AppStateStore } from '../../store/app-state/app-state.store';
import { LanguageStore } from '../../store/language/language.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/app-state/app-state.store";
import * as i2 from "../../store/language/language.store";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "@angular/common";
import * as i5 from "../modal/components/modal/modal.component";
import * as i6 from "../image/image.component";
function InstallErrorModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.getColumnLabel("LBL_CHECKSYS_TITLE"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getColumnLabel("ERR_CHECKSYS"), " ");
} }
function InstallErrorModalComponent_li_6_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.getColumnLabel(item_r2.value.info), " ");
} }
function InstallErrorModalComponent_li_6_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.getColumnLabel(item_r2.value.error), " ");
} }
function InstallErrorModalComponent_li_6_div_9_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subItems_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", subItems_r9, " ");
} }
function InstallErrorModalComponent_li_6_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "ul");
    i0.ɵɵtemplate(2, InstallErrorModalComponent_li_6_div_9_li_2_Template, 2, 1, "li", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r2.value.data);
} }
function InstallErrorModalComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "div", 8)(2, "div")(3, "span");
    i0.ɵɵelement(4, "scrm-image", 9);
    i0.ɵɵelementStart(5, "strong", 10);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, InstallErrorModalComponent_li_6_span_7_Template, 3, 1, "span", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, InstallErrorModalComponent_li_6_div_8_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, InstallErrorModalComponent_li_6_div_9_Template, 3, 1, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("alert ", ctx_r1.getAlertType(item_r2.value), "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("image", ctx_r1.getAlertIcon(item_r2.value));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getColumnLabel(item_r2.value.label), " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.value.info !== "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.value.error !== "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.value.data.length !== 0);
} }
export const alertTypes = {
    success: {
        alertClass: 'alert-success',
        alertIcon: 'info-circle'
    },
    error: {
        alertClass: 'alert-danger',
        alertIcon: 'exclamation-circle'
    },
    warning: {
        alertClass: 'alert-warning',
        alertIcon: 'exclamation-triangle'
    },
    info: {
        alertClass: 'alert-info',
        alertIcon: 'info-circle'
    },
    light: {
        alertClass: 'alert-light',
        alertIcon: 'exclamation-circle'
    }
};
class InstallErrorModalComponent {
    constructor(appState, languageStore, modal) {
        this.appState = appState;
        this.languageStore = languageStore;
        this.modal = modal;
        this.titleKey = 'LBL_CHECKSYS_TITLE';
    }
    getHeaderLabel() {
        return this.languageStore.getFieldLabel('LBL_CHECKSYS_TITLE');
    }
    getColumnLabel(label) {
        const langLabel = this.languageStore.getFieldLabel(label, this.appState.getModule());
        return !isEmptyString(langLabel) ? langLabel : label;
    }
    ngOnInit() {
        this.closeButtonIcon = {
            klass: ['btn', 'btn-outline-light', 'btn-sm'],
            onClick: () => {
                this.modal.close({
                    type: 'close-button'
                });
            }
        };
        this.closeButton = {
            klass: ['btn', 'modal-button-cancel'],
            labelKey: 'LBL_COLUMN_SELECTOR_CLOSE_BUTTON',
            onClick: () => {
                this.modal.close({
                    type: 'close-button'
                });
            }
        };
    }
    getAlertType(alert) {
        if (alert.status === 'error') {
            return alertTypes[alert.type]['alertClass'];
        }
        return alertTypes[alert.status]['alertClass'];
    }
    getAlertIcon(alert) {
        if (alert.status === 'error') {
            return alertTypes[alert.type]['alertIcon'];
        }
        return alertTypes[alert.status]['alertIcon'];
    }
    returnZero() {
        return 0;
    }
    static { this.ɵfac = function InstallErrorModalComponent_Factory(t) { return new (t || InstallErrorModalComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore), i0.ɵɵdirectiveInject(i2.LanguageStore), i0.ɵɵdirectiveInject(i3.NgbActiveModal)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InstallErrorModalComponent, selectors: [["scrm-install-error-modal"]], inputs: { errors: "errors" }, decls: 8, vars: 11, consts: [[3, "closable", "close", "title", "titleKey", "headerKlass", "bodyKlass"], ["modal-body", ""], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "list-style-none"], [4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-danger"], [1, "alert-heading"], [1, "alert-desc"], ["role", "alert"], [3, "image"], [2, "margin-left", "2px"], ["style", "float:right", 4, "ngIf"], [4, "ngIf"], ["class", "alert alert-light", "role", "alert", 4, "ngIf"], [2, "float", "right"], ["role", "alert", 1, "alert", "alert-light"]], template: function InstallErrorModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-modal", 0)(1, "div", 1);
            i0.ɵɵelementContainerStart(2);
            i0.ɵɵtemplate(3, InstallErrorModalComponent_div_3_Template, 6, 2, "div", 2);
            i0.ɵɵelementStart(4, "div")(5, "ul", 3);
            i0.ɵɵtemplate(6, InstallErrorModalComponent_li_6_Template, 10, 8, "li", 4);
            i0.ɵɵpipe(7, "keyvalue");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("closable", true)("close", ctx.closeButtonIcon)("title", ctx.getHeaderLabel())("titleKey", ctx.titleKey)("headerKlass", "alert-header")("bodyKlass", "alert-body");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.errors["hasValidationError"] && ctx.errors["hasValidationError"] === true);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(7, 8, ctx.errors["data"], ctx.returnZero));
        } }, dependencies: [i4.NgForOf, i4.NgIf, i5.ModalComponent, i6.ImageComponent, i4.KeyValuePipe], encapsulation: 2 }); }
}
export { InstallErrorModalComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallErrorModalComponent, [{
        type: Component,
        args: [{ selector: 'scrm-install-error-modal', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<scrm-modal\n    [closable]=\"true\"\n    [close]=\"closeButtonIcon\"\n    [title]=\"getHeaderLabel()\"\n    [titleKey]=\"titleKey\"\n    [headerKlass]=\"'alert-header'\"\n    [bodyKlass]=\"'alert-body'\">\n\n    <div modal-body>\n        <ng-container>\n            <div *ngIf=\"errors['hasValidationError'] && errors['hasValidationError'] === true\"\n                 class=\"alert alert-danger\" role=\"alert\">\n\n                <div class=\"alert-heading\">\n                    <strong>{{getColumnLabel('LBL_CHECKSYS_TITLE')}}</strong>\n                </div>\n                <div class=\"alert-desc\">\n                    {{getColumnLabel('ERR_CHECKSYS')}}\n                </div>\n            </div>\n\n            <div>\n                <ul class=\"list-style-none\">\n\n                    <li *ngFor=\"let item of errors['data'] | keyvalue : returnZero\">\n\n                        <div class=\"alert {{getAlertType(item.value)}}\" role=\"alert\">\n\n                            <div>\n                                <span>\n                                    <scrm-image [image]=\"getAlertIcon(item.value)\"></scrm-image>\n                                    <strong style=\"margin-left: 2px;\">\n                                        {{getColumnLabel(item.value.label)}}\n                                    </strong>\n                                </span>\n\n                                <span *ngIf=\"item.value.info!==''\" style=\"float:right\">\n                                    <strong>\n                                        {{getColumnLabel(item.value.info)}}\n                                    </strong>\n                                </span>\n                            </div>\n\n                            <div *ngIf=\"item.value.error!==''\">\n                                {{getColumnLabel(item.value.error)}}\n                            </div>\n                        </div>\n\n                        <div *ngIf=\"item.value.data.length!==0\" class=\"alert alert-light\" role=\"alert\">\n                            <ul>\n                                <li *ngFor=\"let subItems of item.value.data\">\n                                    {{subItems}}\n                                </li>\n                            </ul>\n                        </div>\n\n                    </li>\n                </ul>\n            </div>\n        </ng-container>\n    </div>\n</scrm-modal>\n\n" }]
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.LanguageStore }, { type: i3.NgbActiveModal }]; }, { errors: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC1lcnJvci1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9pbnN0YWxsLWVycm9yLW1vZGFsL2luc3RhbGwtZXJyb3ItbW9kYWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvaW5zdGFsbC1lcnJvci1tb2RhbC9pbnN0YWxsLWVycm9yLW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFrQixhQUFhLEVBQXFCLE1BQU0sUUFBUSxDQUFDO0FBQzFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7OztJQ1F0RCw4QkFDNkMsYUFBQSxhQUFBO0lBRzdCLFlBQXdDO0lBQUEsaUJBQVMsRUFBQTtJQUU3RCw4QkFBd0I7SUFDcEIsWUFDSjtJQUFBLGlCQUFNLEVBQUE7OztJQUpNLGVBQXdDO0lBQXhDLGlFQUF3QztJQUdoRCxlQUNKO0lBREksc0VBQ0o7OztJQWtCZ0IsZ0NBQXVELGFBQUE7SUFFL0MsWUFDSjtJQUFBLGlCQUFTLEVBQUE7Ozs7SUFETCxlQUNKO0lBREksMEVBQ0o7OztJQUlSLDJCQUFtQztJQUMvQixZQUNKO0lBQUEsaUJBQU07Ozs7SUFERixlQUNKO0lBREksMkVBQ0o7OztJQUtJLDBCQUE2QztJQUN6QyxZQUNKO0lBQUEsaUJBQUs7OztJQURELGVB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Q0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVU7UUFFbkIsSUFBRyxLQUFLLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBQztZQUN4QixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDN0M7UUFFRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFVBQVU7UUFDTixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7MkZBakVRLDBCQUEwQjtvRUFBMUIsMEJBQTBCO1lDaEN2QyxxQ0FNK0IsYUFBQTtZQUd2Qiw2QkFBYztZQUNWLDJFQVNNO1lBRU4sMkJBQUssWUFBQTtZQUdHLDBFQWdDSzs7WUFDVCxpQkFBSyxFQUFBO1lBRWIsMEJBQWU7WUFDbkIsaUJBQU0sRUFBQTs7WUEzRE4sK0JBQWlCLDhCQUFBLCtCQUFBLDBCQUFBLCtCQUFBLDJCQUFBO1lBU0gsZUFBMkU7WUFBM0Usb0dBQTJFO1lBY3BELGVBQXlDO1lBQXpDLGtGQUF5Qzs7O1NEUXJFLDBCQUEwQjt1RkFBMUIsMEJBQTBCO2NBTHRDLFNBQVM7MkJBQ0ksMEJBQTBCO3lIQUszQixNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiQWN0aXZlTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7QnV0dG9uSW50ZXJmYWNlLCBpc0VtcHR5U3RyaW5nLCBNb2RhbENsb3NlRmVlZEJhY2t9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBhbGVydFR5cGVzID0ge1xuICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgYWxlcnRDbGFzczogJ2FsZXJ0LXN1Y2Nlc3MnLFxuICAgICAgICBhbGVydEljb246ICdpbmZvLWNpcmNsZSdcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICAgIGFsZXJ0Q2xhc3M6ICdhbGVydC1kYW5nZXInLFxuICAgICAgICBhbGVydEljb246ICdleGNsYW1hdGlvbi1jaXJjbGUnXG4gICAgfSxcbiAgICB3YXJuaW5nOiB7XG4gICAgICAgIGFsZXJ0Q2xhc3M6ICdhbGVydC13YXJuaW5nJyxcbiAgICAgICAgYWxlcnRJY29uOiAnZXhjbGFtYXRpb24tdHJpYW5nbGUnXG4gICAgfSxcbiAgICBpbmZvOiB7XG4gICAgICAgIGFsZXJ0Q2xhc3M6ICdhbGVydC1pbmZvJyxcbiAgICAgICAgYWxlcnRJY29uOiAnaW5mby1jaXJjbGUnXG4gICAgfSxcbiAgICBsaWdodDoge1xuICAgICAgICBhbGVydENsYXNzOiAnYWxlcnQtbGlnaHQnLFxuICAgICAgICBhbGVydEljb246ICdleGNsYW1hdGlvbi1jaXJjbGUnXG4gICAgfVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWluc3RhbGwtZXJyb3ItbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbnN0YWxsLWVycm9yLW1vZGFsLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEluc3RhbGxFcnJvck1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBlcnJvcnM6IFtdO1xuXG4gICAgdGl0bGVLZXkgPSAnTEJMX0NIRUNLU1lTX1RJVExFJztcbiAgICBjbG9zZUJ1dHRvbkljb246IEJ1dHRvbkludGVyZmFjZTtcbiAgICBjbG9zZUJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlO1xuICAgIHNhdmVCdXR0b246IEJ1dHRvbkludGVyZmFjZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwdWJsaWMgbW9kYWw6IE5nYkFjdGl2ZU1vZGFsKSB7XG4gICAgfVxuXG4gICAgZ2V0SGVhZGVyTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VTdG9yZS5nZXRGaWVsZExhYmVsKCdMQkxfQ0hFQ0tTWVNfVElUTEUnKTtcbiAgICB9XG5cbiAgICBnZXRDb2x1bW5MYWJlbChsYWJlbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbGFuZ0xhYmVsID0gdGhpcy5sYW5ndWFnZVN0b3JlLmdldEZpZWxkTGFiZWwobGFiZWwsIHRoaXMuYXBwU3RhdGUuZ2V0TW9kdWxlKCkpO1xuICAgICAgICByZXR1cm4gIWlzRW1wdHlTdHJpbmcobGFuZ0xhYmVsKSA/IGxhbmdMYWJlbCA6IGxhYmVsO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uSWNvbiA9IHtcbiAgICAgICAgICAgIGtsYXNzOiBbJ2J0bicsICdidG4tb3V0bGluZS1saWdodCcsICdidG4tc20nXSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLmNsb3NlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Nsb3NlLWJ1dHRvbidcbiAgICAgICAgICAgICAgICB9IGFzIE1vZGFsQ2xvc2VGZWVkQmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSB7XG4gICAgICAgICAgICBrbGFzczogWydidG4nLCAnbW9kYWwtYnV0dG9uLWNhbmNlbCddLFxuICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfQ09MVU1OX1NFTEVDVE9SX0NMT1NFX0JVVFRPTicsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbC5jbG9zZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjbG9zZS1idXR0b24nXG4gICAgICAgICAgICAgICAgfSBhcyBNb2RhbENsb3NlRmVlZEJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuICAgIH1cblxuICAgIGdldEFsZXJ0VHlwZShhbGVydDogYW55KTogc3RyaW5ne1xuXG4gICAgICAgIGlmKGFsZXJ0LnN0YXR1cyA9PT0gJ2Vycm9yJyl7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnRUeXBlc1thbGVydC50eXBlXVsnYWxlcnRDbGFzcyddXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWxlcnRUeXBlc1thbGVydC5zdGF0dXNdWydhbGVydENsYXNzJ107XG4gICAgfVxuXG4gICAgZ2V0QWxlcnRJY29uKGFsZXJ0OiBhbnkpOiBzdHJpbmd7XG5cbiAgICAgICAgaWYoYWxlcnQuc3RhdHVzID09PSAnZXJyb3InKXtcbiAgICAgICAgICAgIHJldHVybiBhbGVydFR5cGVzW2FsZXJ0LnR5cGVdWydhbGVydEljb24nXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFsZXJ0VHlwZXNbYWxlcnQuc3RhdHVzXVsnYWxlcnRJY29uJ107XG4gICAgfVxuXG4gICAgcmV0dXJuWmVybygpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuXG48c2NybS1tb2RhbFxuICAgIFtjbG9zYWJsZV09XCJ0cnVlXCJcbiAgICBbY2xvc2VdPVwiY2xvc2VCdXR0b25JY29uXCJcbiAgICBbdGl0bGVdPVwiZ2V0SGVhZGVyTGFiZWwoKVwiXG4gICAgW3RpdGxlS2V5XT1cInRpdGxlS2V5XCJcbiAgICBbaGVhZGVyS2xhc3NdPVwiJ2FsZXJ0LWhlYWRlcidcIlxuICAgIFtib2R5S2xhc3NdPVwiJ2FsZXJ0LWJvZHknXCI+XG5cbiAgICA8ZGl2IG1vZGFsLWJvZHk+XG4gICAgICAgIDxuZy1jb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZXJyb3JzWydoYXNWYWxpZGF0aW9uRXJyb3InXSAmJiBlcnJvcnNbJ2hhc1ZhbGlkYXRpb25FcnJvciddID09PSB0cnVlXCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3tnZXRDb2x1bW5MYWJlbCgnTEJMX0NIRUNLU1lTX1RJVExFJyl9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydC1kZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7Z2V0Q29sdW1uTGFiZWwoJ0VSUl9DSEVDS1NZUycpfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3Qtc3R5bGUtbm9uZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBlcnJvcnNbJ2RhdGEnXSB8IGtleXZhbHVlIDogcmV0dXJuWmVyb1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQge3tnZXRBbGVydFR5cGUoaXRlbS52YWx1ZSl9fVwiIHJvbGU9XCJhbGVydFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBbaW1hZ2VdPVwiZ2V0QWxlcnRJY29uKGl0ZW0udmFsdWUpXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAycHg7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tnZXRDb2x1bW5MYWJlbChpdGVtLnZhbHVlLmxhYmVsKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXRlbS52YWx1ZS5pbmZvIT09JydcIiBzdHlsZT1cImZsb2F0OnJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Z2V0Q29sdW1uTGFiZWwoaXRlbS52YWx1ZS5pbmZvKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsdWUuZXJyb3IhPT0nJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2dldENvbHVtbkxhYmVsKGl0ZW0udmFsdWUuZXJyb3IpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWx1ZS5kYXRhLmxlbmd0aCE9PTBcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWxpZ2h0XCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHN1Ykl0ZW1zIG9mIGl0ZW0udmFsdWUuZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzdWJJdGVtc319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbjwvc2NybS1tb2RhbD5cblxuIl19