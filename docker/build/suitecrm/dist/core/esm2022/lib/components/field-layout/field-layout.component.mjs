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
import { BreakpointObserver } from '@angular/cdk/layout';
import { BaseFieldGridComponent } from '../field-grid/base-field-grid.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
import * as i2 from "@angular/common";
import * as i3 from "../../fields/field.component";
import * as i4 from "../image/image.component";
function FieldLayoutComponent_div_1_div_1_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 10);
    i0.ɵɵtext(2, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function FieldLayoutComponent_div_1_div_1_ng_container_1_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function FieldLayoutComponent_div_1_div_1_ng_container_1_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r12.dataSource.getEditAction()); });
    i0.ɵɵelement(1, "scrm-image", 12);
    i0.ɵɵelementEnd();
} }
const _c0 = function () { return ["edit", "create"]; };
function FieldLayoutComponent_div_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5)(2, "strong")(3, "label", 1);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "uppercase");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, ": ");
    i0.ɵɵtemplate(7, FieldLayoutComponent_div_1_div_1_ng_container_1_ng_container_7_Template, 3, 0, "ng-container", 3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 6)(9, "div", 7);
    i0.ɵɵelement(10, "scrm-field", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div");
    i0.ɵɵtemplate(12, FieldLayoutComponent_div_1_div_1_ng_container_1_button_12_Template, 2, 0, "button", 9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r6.labelClass);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 9, col_r4.field.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", col_r4.field.definition.required && i0.ɵɵpureFunction0(11, _c0).includes(ctx_r6.config.mode));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", col_r4.field.type)("mode", ctx_r6.config.mode)("klass", ctx_r6.inputClass)("field", col_r4.field)("record", ctx_r6.record);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", col_r4.field.definition.inline_edit !== false && !col_r4.field.readonly && !col_r4.field.definition.readonly && ctx_r6.dataSource.inlineEdit && ctx_r6.config.mode === "detail");
} }
function FieldLayoutComponent_div_1_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
function FieldLayoutComponent_div_1_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementContainerEnd();
} }
function FieldLayoutComponent_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 13);
} }
function FieldLayoutComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, FieldLayoutComponent_div_1_div_1_ng_container_1_Template, 13, 12, "ng-container", 3);
    i0.ɵɵtemplate(2, FieldLayoutComponent_div_1_div_1_ng_container_2_Template, 2, 0, "ng-container", 3);
    i0.ɵɵtemplate(3, FieldLayoutComponent_div_1_div_1_ng_container_3_Template, 2, 0, "ng-container", 3);
    i0.ɵɵtemplate(4, FieldLayoutComponent_div_1_div_1_div_4_Template, 1, 0, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r4 = ctx.$implicit;
    const colNumber_r5 = ctx.index;
    const ctx_r15 = i0.ɵɵnextContext();
    const row_r1 = ctx_r15.$implicit;
    const i_r2 = ctx_r15.index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("field-column-bordered", row_r1.cols.length > 1 && colNumber_r5 < row_r1.cols.length - 1);
    i0.ɵɵproperty("ngClass", ctx_r3.colClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r4.field && col_r4.field.display !== "none");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r4.actionSlot);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r4.specialSlot);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r4.field && (col_r4.field == null ? null : col_r4.field.display) !== "none" && i_r2 < ctx_r3.fieldGrid.length - 1);
} }
function FieldLayoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, FieldLayoutComponent_div_1_div_1_Template, 5, 7, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.rowClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r1.cols);
} }
const _c1 = [[["", "field-grid-actions", ""]], [["", "field-grid-special", ""]]];
const _c2 = ["[field-grid-actions]", "[field-grid-special]"];
class FieldLayoutComponent extends BaseFieldGridComponent {
    constructor(breakpointObserver) {
        super(breakpointObserver);
        this.breakpointObserver = breakpointObserver;
        this.baseColClass = {
            col: true,
            'form-group': true,
            'm-1': false,
            'm-0': true,
            'pl-3': true,
            'pb-2': true,
            'pr-3': true,
            'd-flex': true,
            'flex-column': true,
            'justify-content-between': true
        };
        this.baseRowClass = {
            'form-row': true,
            'align-items-stretch': true
        };
    }
    ngOnInit() {
        this.subscriptions.push(this.dataSource.getConfig().subscribe(config => {
            this.config = { ...config };
        }));
        this.subscriptions.push(this.dataSource.getLayout().subscribe(layout => {
            this.layout = { ...layout };
        }));
        this.subscriptions.push(this.dataSource.getFields().subscribe(fields => {
            this.fields = { ...fields };
        }));
        this.subscriptions.push(this.dataSource.getRecord().subscribe(record => {
            this.record = { ...record };
        }));
        super.ngOnInit();
    }
    buildGrid() {
        const grid = [];
        if (!this.fields || Object.keys(this.fields).length === 0) {
            this.fieldGrid = [];
            return;
        }
        this.layout.rows.forEach(layoutRow => {
            let row = {
                cols: []
            };
            layoutRow.cols.forEach((layoutCol, colIndex) => {
                const fieldName = layoutCol.name;
                const field = this.fields[fieldName] || null;
                if (!field) {
                    row.cols.push({});
                    return;
                }
                row.cols.push({
                    field
                });
                if (this.colNumber === 1 && colIndex < layoutRow.cols.length - 1) {
                    grid.push(row);
                    row = {
                        cols: []
                    };
                }
            });
            if (row.cols.length < this.colNumber) {
                this.fillRow(row);
            }
            grid.push(row);
        });
        this.addSpecialSlots(grid);
        this.fieldGrid = grid;
    }
    get colNumber() {
        const size = this.sizeMap[this.currentSize];
        if (size === 1) {
            return 1;
        }
        return this.config.maxColumns;
    }
    static { this.ɵfac = function FieldLayoutComponent_Factory(t) { return new (t || FieldLayoutComponent)(i0.ɵɵdirectiveInject(i1.BreakpointObserver)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldLayoutComponent, selectors: [["scrm-field-layout"]], inputs: { dataSource: "dataSource" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 2, vars: 4, consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "field-column-bordered", "ngClass", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "field-separation mt-2", 4, "ngIf"], [1, "label-container"], [1, "d-flex", "flex-grow-1"], [1, "flex-grow-1", "text-break"], [3, "type", "mode", "klass", "field", "record"], ["type", "button", "class", "record-action-button", 3, "click", 4, "ngIf"], [1, "required"], ["type", "button", 1, "record-action-button", 3, "click"], ["image", "pencil", 1, "sicon"], [1, "field-separation", "mt-2"]], template: function FieldLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "form");
            i0.ɵɵtemplate(1, FieldLayoutComponent_div_1_Template, 2, 2, "div", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("field-layout ", ctx.config.mode, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.fieldGrid);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i3.FieldComponent, i4.ImageComponent, i2.UpperCasePipe], encapsulation: 2 }); }
}
export { FieldLayoutComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldLayoutComponent, [{
        type: Component,
        args: [{ selector: 'scrm-field-layout', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<form class=\"field-layout {{config.mode}}\">\n    <div [ngClass]=\"rowClass\" *ngFor=\"let row of fieldGrid; index as i\">\n\n        <div *ngFor=\"let col of row.cols; index as colNumber\"\n             [class.field-column-bordered]=\"row.cols.length > 1 && colNumber < row.cols.length - 1\"\n             [ngClass]=\"colClass\">\n\n            <ng-container *ngIf=\"col.field && col.field.display !== 'none'\">\n                <div class=\"label-container\">\n                    <strong>\n                        <label [ngClass]=\"labelClass\">{{col.field.label | uppercase}}</label>:\n                        <ng-container\n                            *ngIf=\"col.field.definition.required && (['edit', 'create'].includes(config.mode))\">\n                            <span class=\"required\">*</span>\n                        </ng-container>\n                    </strong>\n                </div>\n                <div class=\"d-flex flex-grow-1\">\n                    <div class=\"flex-grow-1 text-break\">\n                        <scrm-field [type]=\"col.field.type\"\n                                    [mode]=\"config.mode\"\n                                    [klass]=\"inputClass\"\n                                    [field]=\"col.field\"\n                                    [record]=\"record\">\n                        </scrm-field>\n                    </div>\n                    <div>\n                        <button type=\"button\" class=\"record-action-button\"\n                                (click)=\"this.dataSource.getEditAction()\"\n                                *ngIf=\"col.field.definition.inline_edit !== false && !col.field.readonly && !col.field.definition.readonly && this.dataSource.inlineEdit && config.mode === 'detail'\">\n                            <scrm-image class=\"sicon\" image=\"pencil\"></scrm-image>\n                        </button>\n                    </div>\n                </div>\n            </ng-container>\n\n            <ng-container *ngIf=\"col.actionSlot\">\n                <ng-content select=\"[field-grid-actions]\"></ng-content>\n            </ng-container>\n\n            <ng-container *ngIf=\"col.specialSlot\">\n                <ng-content select=\"[field-grid-special]\"></ng-content>\n            </ng-container>\n\n            <div *ngIf=\"col.field && col.field?.display !== 'none' && i < fieldGrid.length - 1\"\n                 class=\"field-separation mt-2\">\n            </div>\n        </div>\n    </div>\n</form>\n" }]
    }], function () { return [{ type: i1.BreakpointObserver }]; }, { dataSource: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2ZpZWxkLWxheW91dC9maWVsZC1sYXlvdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZmllbGQtbGF5b3V0L2ZpZWxkLWxheW91dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7SUNRdkQsNkJBQ3dGO0lBQ3BGLGdDQUF1QjtJQUFBLGlCQUFDO0lBQUEsaUJBQU87SUFDbkMsMEJBQWU7Ozs7SUFhZixrQ0FFOEs7SUFEdEssbU1BQVMsZUFBQSxrQ0FBK0IsQ0FBQSxJQUFDO0lBRTdDLGlDQUFzRDtJQUMxRCxpQkFBUzs7OztJQXhCckIsNkJBQWdFO0lBQzVELDhCQUE2QixhQUFBLGVBQUE7SUFFUyxZQUErQjs7SUFBQSxpQkFBUTtJQUFBLGtCQUNyRTtJQUFBLGtIQUdlO0lBQ25CLGlCQUFTLEVBQUE7SUFFYiw4QkFBZ0MsYUFBQTtJQUV4QixpQ0FLYTtJQUNqQixpQkFBTTtJQUNOLDRCQUFLO0lBQ0Qsd0dBSVM7SUFDYixpQkFBTSxFQUFBO0lBRWQsMEJBQWU7Ozs7SUF4QkksZUFBc0I7SUFBdEIsMkNBQXNCO0lBQUMsZUFBK0I7SUFBL0IsOERBQStCO0lBRXhELGVBQWlGO0lBQWpGLG1IQUFpRjtJQU8xRSxlQUF1QjtJQUF2Qix3Q0FBdUIsNEJBQUEs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SSxTQUFTO1FBQ1QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ1osT0FBTyxDQUFDLENBQUM7U0FDWjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDbEMsQ0FBQztxRkF0R1Esb0JBQW9CO29FQUFwQixvQkFBb0I7O1lDWGpDLDRCQUEyQztZQUN2QyxxRUErQ007WUFDVixpQkFBTzs7WUFqREQsK0RBQW9DO1lBQ0ksZUFBYztZQUFkLHVDQUFjOzs7U0RVL0Msb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDSSxtQkFBbUI7cUVBTXBCLFVBQVU7a0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpZWxkTWFwLCBQYW5lbCwgUmVjb3JkfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtCcmVha3BvaW50T2JzZXJ2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHtGaWVsZEdyaWRDb2x1bW4sIEZpZWxkR3JpZFJvd30gZnJvbSAnLi4vZmllbGQtZ3JpZC9maWVsZC1ncmlkLm1vZGVsJztcbmltcG9ydCB7QmFzZUZpZWxkR3JpZENvbXBvbmVudH0gZnJvbSAnLi4vZmllbGQtZ3JpZC9iYXNlLWZpZWxkLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7RmllbGRMYXlvdXRDb25maWcsIEZpZWxkTGF5b3V0RGF0YVNvdXJjZX0gZnJvbSAnLi9maWVsZC1sYXlvdXQubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tZmllbGQtbGF5b3V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZmllbGQtbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUZpZWxkR3JpZENvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKSBkYXRhU291cmNlOiBGaWVsZExheW91dERhdGFTb3VyY2U7XG4gICAgY29uZmlnOiBGaWVsZExheW91dENvbmZpZztcbiAgICBsYXlvdXQ6IFBhbmVsO1xuICAgIGZpZWxkczogRmllbGRNYXA7XG4gICAgcmVjb3JkOiBSZWNvcmQ7XG5cbiAgICBiYXNlQ29sQ2xhc3MgPSB7XG4gICAgICAgIGNvbDogdHJ1ZSxcbiAgICAgICAgJ2Zvcm0tZ3JvdXAnOiB0cnVlLFxuICAgICAgICAnbS0xJzogZmFsc2UsXG4gICAgICAgICdtLTAnOiB0cnVlLFxuICAgICAgICAncGwtMyc6IHRydWUsXG4gICAgICAgICdwYi0yJzogdHJ1ZSxcbiAgICAgICAgJ3ByLTMnOiB0cnVlLFxuICAgICAgICAnZC1mbGV4JzogdHJ1ZSxcbiAgICAgICAgJ2ZsZXgtY29sdW1uJzogdHJ1ZSxcbiAgICAgICAgJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJzogdHJ1ZVxuICAgIH0gYXMgeyBba2V5OnN0cmluZ106IGJvb2xlYW4gfTtcblxuICAgIGJhc2VSb3dDbGFzcyA9IHtcbiAgICAgICAgJ2Zvcm0tcm93JzogdHJ1ZSxcbiAgICAgICAgJ2FsaWduLWl0ZW1zLXN0cmV0Y2gnOiB0cnVlXG4gICAgfSBhcyB7IFtrZXk6c3RyaW5nXTogYm9vbGVhbiB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XG4gICAgICAgIHN1cGVyKGJyZWFrcG9pbnRPYnNlcnZlcik7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5kYXRhU291cmNlLmdldENvbmZpZygpLnN1YnNjcmliZShjb25maWcgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25maWcgPSB7Li4uY29uZmlnfTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmRhdGFTb3VyY2UuZ2V0TGF5b3V0KCkuc3Vic2NyaWJlKGxheW91dCA9PiB7XG4gICAgICAgICAgICB0aGlzLmxheW91dCA9IHsuLi5sYXlvdXR9O1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuZGF0YVNvdXJjZS5nZXRGaWVsZHMoKS5zdWJzY3JpYmUoZmllbGRzID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRzID0gey4uLmZpZWxkc307XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5kYXRhU291cmNlLmdldFJlY29yZCgpLnN1YnNjcmliZShyZWNvcmQgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWNvcmQgPSB7Li4ucmVjb3JkfTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgfVxuXG4gICAgYnVpbGRHcmlkKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBncmlkOiBGaWVsZEdyaWRSb3dbXSA9IFtdO1xuXG4gICAgICAgIGlmICghdGhpcy5maWVsZHMgfHwgT2JqZWN0LmtleXModGhpcy5maWVsZHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maWVsZEdyaWQgPSBbXTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGF5b3V0LnJvd3MuZm9yRWFjaChsYXlvdXRSb3cgPT4ge1xuICAgICAgICAgICAgbGV0IHJvdyA9IHtcbiAgICAgICAgICAgICAgICBjb2xzOiBbXVxuICAgICAgICAgICAgfSBhcyBGaWVsZEdyaWRSb3c7XG5cbiAgICAgICAgICAgIGxheW91dFJvdy5jb2xzLmZvckVhY2goKGxheW91dENvbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBsYXlvdXRDb2wubmFtZTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRzW2ZpZWxkTmFtZV0gfHwgbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICghZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcm93LmNvbHMucHVzaCh7fSBhcyBGaWVsZEdyaWRDb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcm93LmNvbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkXG4gICAgICAgICAgICAgICAgfSBhcyBGaWVsZEdyaWRDb2x1bW4pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sTnVtYmVyID09PSAxICYmIGNvbEluZGV4IDwgbGF5b3V0Um93LmNvbHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBncmlkLnB1c2gocm93KTtcblxuICAgICAgICAgICAgICAgICAgICByb3cgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBbXVxuICAgICAgICAgICAgICAgICAgICB9IGFzIEZpZWxkR3JpZFJvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJvdy5jb2xzLmxlbmd0aCA8IHRoaXMuY29sTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxsUm93KHJvdyk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgZ3JpZC5wdXNoKHJvdyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkU3BlY2lhbFNsb3RzKGdyaWQpO1xuXG4gICAgICAgIHRoaXMuZmllbGRHcmlkID0gZ3JpZDtcbiAgICB9XG5cbiAgICBnZXQgY29sTnVtYmVyKCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnNpemVNYXBbdGhpcy5jdXJyZW50U2l6ZV07XG4gICAgICAgIGlmIChzaXplID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcubWF4Q29sdW1ucztcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48Zm9ybSBjbGFzcz1cImZpZWxkLWxheW91dCB7e2NvbmZpZy5tb2RlfX1cIj5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cInJvd0NsYXNzXCIgKm5nRm9yPVwibGV0IHJvdyBvZiBmaWVsZEdyaWQ7IGluZGV4IGFzIGlcIj5cblxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjb2wgb2Ygcm93LmNvbHM7IGluZGV4IGFzIGNvbE51bWJlclwiXG4gICAgICAgICAgICAgW2NsYXNzLmZpZWxkLWNvbHVtbi1ib3JkZXJlZF09XCJyb3cuY29scy5sZW5ndGggPiAxICYmIGNvbE51bWJlciA8IHJvdy5jb2xzLmxlbmd0aCAtIDFcIlxuICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImNvbENsYXNzXCI+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2wuZmllbGQgJiYgY29sLmZpZWxkLmRpc3BsYXkgIT09ICdub25lJ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBbbmdDbGFzc109XCJsYWJlbENsYXNzXCI+e3tjb2wuZmllbGQubGFiZWwgfCB1cHBlcmNhc2V9fTwvbGFiZWw+OlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY29sLmZpZWxkLmRlZmluaXRpb24ucmVxdWlyZWQgJiYgKFsnZWRpdCcsICdjcmVhdGUnXS5pbmNsdWRlcyhjb25maWcubW9kZSkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWdyb3ctMVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTEgdGV4dC1icmVha1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZmllbGQgW3R5cGVdPVwiY29sLmZpZWxkLnR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21vZGVdPVwiY29uZmlnLm1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImNvbC5maWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cInJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicmVjb3JkLWFjdGlvbi1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidGhpcy5kYXRhU291cmNlLmdldEVkaXRBY3Rpb24oKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY29sLmZpZWxkLmRlZmluaXRpb24uaW5saW5lX2VkaXQgIT09IGZhbHNlICYmICFjb2wuZmllbGQucmVhZG9ubHkgJiYgIWNvbC5maWVsZC5kZWZpbml0aW9uLnJlYWRvbmx5ICYmIHRoaXMuZGF0YVNvdXJjZS5pbmxpbmVFZGl0ICYmIGNvbmZpZy5tb2RlID09PSAnZGV0YWlsJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwic2ljb25cIiBpbWFnZT1cInBlbmNpbFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sLmFjdGlvblNsb3RcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbZmllbGQtZ3JpZC1hY3Rpb25zXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sLnNwZWNpYWxTbG90XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2ZpZWxkLWdyaWQtc3BlY2lhbF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbC5maWVsZCAmJiBjb2wuZmllbGQ/LmRpc3BsYXkgIT09ICdub25lJyAmJiBpIDwgZmllbGRHcmlkLmxlbmd0aCAtIDFcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImZpZWxkLXNlcGFyYXRpb24gbXQtMlwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9mb3JtPlxuIl19