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
import { BaseFieldGridComponent } from './base-field-grid.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
import * as i2 from "@angular/common";
import * as i3 from "../../fields/field.component";
import * as i4 from "../label/label.component";
function FieldGridComponent_div_1_div_1_div_2_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r8.labelClass);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(col_r3.field.label);
} }
function FieldGridComponent_div_1_div_1_div_2_scrm_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-label", 8);
} if (rf & 2) {
    const col_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("labelKey", col_r3.field.labelKey)("ngClass", ctx_r9.labelClass);
} }
function FieldGridComponent_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, FieldGridComponent_div_1_div_1_div_2_label_1_Template, 2, 2, "label", 6);
    i0.ɵɵtemplate(2, FieldGridComponent_div_1_div_1_div_2_scrm_label_2_Template, 1, 2, "scrm-label", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("pr-3", ctx_r4.labelDisplay === "inline");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r3.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !col_r3.field.label && col_r3.field.labelKey);
} }
function FieldGridComponent_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "scrm-field", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("flex-grow-1", ctx_r5.labelDisplay === "inline");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", col_r3.field)("klass", ctx_r5.inputClass)("mode", ctx_r5.fieldMode)("record", ctx_r5.record)("type", col_r3.field.type);
} }
function FieldGridComponent_div_1_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
function FieldGridComponent_div_1_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementContainerEnd();
} }
function FieldGridComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵtemplate(2, FieldGridComponent_div_1_div_1_div_2_Template, 3, 4, "div", 3);
    i0.ɵɵtemplate(3, FieldGridComponent_div_1_div_1_div_3_Template, 2, 7, "div", 4);
    i0.ɵɵtemplate(4, FieldGridComponent_div_1_div_1_ng_container_4_Template, 2, 0, "ng-container", 5);
    i0.ɵɵtemplate(5, FieldGridComponent_div_1_div_1_ng_container_5_Template, 2, 0, "ng-container", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r2.colClass);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("align-items-center", ctx_r2.labelDisplay === "inline" && !ctx_r2.colAlignItems)("flex-column", ctx_r2.labelDisplay === "top")("flex-row", ctx_r2.labelDisplay === "inline")("justify-content-end", !col_r3.field);
    i0.ɵɵproperty("ngClass", ctx_r2.colAlignItems ? ctx_r2.colAlignItems : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r3.field && col_r3.field.display !== "none");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r3.field && col_r3.field.display !== "none");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r3.actionSlot);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r3.specialSlot);
} }
function FieldGridComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, FieldGridComponent_div_1_div_1_Template, 6, 14, "div", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.rowClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r1.cols);
} }
const _c0 = [[["", "field-grid-actions", ""]], [["", "field-grid-actions", ""]]];
const _c1 = ["[field-grid-actions]", "[field-grid-actions]"];
class FieldGridComponent extends BaseFieldGridComponent {
    constructor(breakpointObserver) {
        super(breakpointObserver);
        this.breakpointObserver = breakpointObserver;
        this.fieldMode = 'detail';
    }
    ngOnChanges() {
        this.buildGrid();
    }
    buildGrid() {
        const grid = [];
        if (!this.fields || this.fields.length === 0) {
            this.fieldGrid = [];
            return;
        }
        let col = 0;
        let row = {
            cols: []
        };
        grid.push(row);
        this.fields.forEach(field => {
            if (col >= this.colNumber) {
                col = 0;
                row = {
                    cols: []
                };
                grid.push(row);
            }
            row.cols.push({
                field
            });
            col++;
        });
        const lastRow = grid[grid.length - 1];
        if (col < this.colNumber) {
            this.fillRow(lastRow);
        }
        this.addSpecialSlots(grid);
        this.fieldGrid = grid;
    }
    static { this.ɵfac = function FieldGridComponent_Factory(t) { return new (t || FieldGridComponent)(i0.ɵɵdirectiveInject(i1.BreakpointObserver)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldGridComponent, selectors: [["scrm-field-grid"]], inputs: { fields: "fields", record: "record", fieldMode: "fieldMode" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 2, vars: 1, consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "d-flex", 3, "ngClass"], [3, "pr-3", 4, "ngIf"], [3, "flex-grow-1", 4, "ngIf"], [4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "labelKey", "ngClass", 4, "ngIf"], [3, "labelKey", "ngClass"], [3, "field", "klass", "mode", "record", "type"]], template: function FieldGridComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "form");
            i0.ɵɵtemplate(1, FieldGridComponent_div_1_Template, 2, 2, "div", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.fieldGrid);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i3.FieldComponent, i4.LabelComponent], encapsulation: 2 }); }
}
export { FieldGridComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldGridComponent, [{
        type: Component,
        args: [{ selector: 'scrm-field-grid', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<form>\n    <div [ngClass]=\"rowClass\" *ngFor=\"let row of fieldGrid\">\n\n        <div [ngClass]=\"colClass\" *ngFor=\"let col of row.cols\">\n            <div [class.align-items-center]=\"labelDisplay === 'inline' && !colAlignItems\"\n                     [class.flex-column]=\"labelDisplay === 'top'\"\n                     [class.flex-row]=\"labelDisplay === 'inline'\"\n                     [class.justify-content-end]=\"!col.field\"\n                     [ngClass]=\"colAlignItems ? colAlignItems : ''\"\n                     class=\"d-flex\"\n                >\n                    <div *ngIf=\"col.field && col.field.display !== 'none'\"\n                         [class.pr-3]=\"labelDisplay === 'inline'\" >\n                        <label *ngIf=\"col.field.label\" [ngClass]=\"labelClass\">{{col.field.label}}</label>\n                        <scrm-label *ngIf=\"!col.field.label && col.field.labelKey\"\n                                    [labelKey]=\"col.field.labelKey\"\n                                    [ngClass]=\"labelClass\"></scrm-label>\n                    </div>\n                    <div *ngIf=\"col.field && col.field.display !== 'none'\"\n                         [class.flex-grow-1]=\"labelDisplay === 'inline'\">\n                        <scrm-field [field]=\"col.field\"\n                                    [klass]=\"inputClass\"\n                                    [mode]=\"fieldMode\"\n                                    [record]=\"record\"\n                                    [type]=\"col.field.type\">\n                        </scrm-field>\n                    </div>\n                    <ng-container *ngIf=\"col.actionSlot\">\n                        <ng-content select=\"[field-grid-actions]\"></ng-content>\n                    </ng-container>\n                    <ng-container *ngIf=\"col.specialSlot\">\n                        <ng-content select=\"[field-grid-actions]\"></ng-content>\n                    </ng-container>\n                </div>\n        </div>\n    </div>\n</form>\n" }]
    }], function () { return [{ type: i1.BreakpointObserver }]; }, { fields: [{
            type: Input
        }], record: [{
            type: Input
        }], fieldMode: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9maWVsZC1ncmlkL2ZpZWxkLWdyaWQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZmllbGQtZ3JpZC9maWVsZC1ncmlkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUd2RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7OztJQ1UzQyxnQ0FBc0Q7SUFBQSxZQUFtQjtJQUFBLGlCQUFROzs7O0lBQWxELDJDQUFzQjtJQUFDLGVBQW1CO0lBQW5CLHdDQUFtQjs7O0lBQ3pFLGdDQUVnRDs7OztJQURwQyxnREFBK0IsOEJBQUE7OztJQUovQywyQkFDK0M7SUFDM0MseUZBQWlGO0lBQ2pGLG1HQUVnRDtJQUNwRCxpQkFBTTs7OztJQUxELHdEQUF3QztJQUNqQyxlQUFxQjtJQUFyQix5Q0FBcUI7SUFDaEIsZUFBNEM7SUFBNUMsbUVBQTRDOzs7SUFJN0QsMkJBQ3FEO0lBQ2pELGdDQUthO0lBQ2pCLGlCQUFNOzs7O0lBUEQsK0RBQStDO0lBQ3BDLGVBQW1CO0lBQW5CLG9DQUFtQiw0QkFBQSwwQkFBQSx5QkFBQSwyQkFBQTs7O0lBT25DLDZCQUFxQztJQUNqQyxrQkFBdUQ7SUFDM0QsMEJBQWU7OztJQUNmLDZCQUFzQztJQUNsQyxxQkFBdUQ7SUFDM0QsMEJBQWU7OztJQTdCM0IsOEJBQXVELGFBQUE7SUFRM0MsK0VBTU07SUFDTiwrRUFRTTtJQUNOLGlHQUVlO0lBQ2YsaUdBRWU7SUFDbkIsaUJBQU0sRUFBQTs7OztJQTlCVCx5Q0FBb0I7SUFDaEIsZUFBd0U7SUFBeEUsK0ZBQXdFLDhDQUFBLDhDQUFBLHNDQUFBO0lBSXBFLDBFQUE4QztJQUd6QyxlQUErQztJQUEvQyxzRUFBK0M7SUFPL0MsZUFBK0M7SUFBL0Msc0VBQStDO0lBU3RDLGVBQW9CO0lBQXBCLHdDQUFvQjtJQUdwQixlQUFxQjtJQUFyQix5Q0FBcUI7OztJQTdCcEQsOEJBQXdEO0lBRXBELDBFQStCTTtJQUNWLGlCQUFNOzs7O0lBbENELHlDQUFvQjtJQUVxQixlQUFXO0lBQVgscUNBQVc7Ozs7QURFN0QsTUFLYSxrQkFBbUIsU0FBUSxzQkFBc0I7SUFNMUQsWUFBc0Isa0JBQXNDO1FBQ3hELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRFIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUZuRCxjQUFTLEdBQUcsUUFBUSxDQUFDO0lBSTlCLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxTQUFTO1FBQ0wsTUFBTSxJQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUVoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDcEIsT0FBTztTQUNWO1FBRUQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxHQUFHLEdBQUc7WUFDTixJQUFJLEVBQUUsRUFBRTtTQUNLLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBRXhCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3ZCLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ1IsR0FBRyxHQUFHO29CQUNGLElBQUksRUFBRSxFQUFFO2lCQUNLLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7WUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDVixLQUFLO2FBQ1csQ0FBQyxDQUFDO1lBRXRCLEdBQUcsRUFBRSxDQUFDO1FBQ1YsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7bUZBckRRLGtCQUFrQjtvRUFBbEIsa0JBQWtCOztZQ1YvQiw0QkFBTTtZQUNGLG1FQWtDTTtZQUNWLGlCQUFPOztZQW5DdUMsZUFBWTtZQUFaLHVDQUFZOzs7U0RTN0Msa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FMOUIsU0FBUzsyQkFDSSxpQkFBaUI7cUVBTWxCLE1BQU07a0JBQWQsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnJlYWtwb2ludE9ic2VydmVyfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7RmllbGQsIFJlY29yZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7RmllbGRHcmlkQ29sdW1uLCBGaWVsZEdyaWRSb3d9IGZyb20gJy4vZmllbGQtZ3JpZC5tb2RlbCc7XG5pbXBvcnQge0Jhc2VGaWVsZEdyaWRDb21wb25lbnR9IGZyb20gJy4vYmFzZS1maWVsZC1ncmlkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1maWVsZC1ncmlkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZmllbGQtZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZEdyaWRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRmllbGRHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpIGZpZWxkczogRmllbGRbXTtcbiAgICBASW5wdXQoKSByZWNvcmQ6IFJlY29yZDtcbiAgICBASW5wdXQoKSBmaWVsZE1vZGUgPSAnZGV0YWlsJztcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcikge1xuICAgICAgICBzdXBlcihicmVha3BvaW50T2JzZXJ2ZXIpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJ1aWxkR3JpZCgpO1xuICAgIH1cblxuICAgIGJ1aWxkR3JpZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZ3JpZDogRmllbGRHcmlkUm93W10gPSBbXTtcblxuICAgICAgICBpZiAoIXRoaXMuZmllbGRzIHx8IHRoaXMuZmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maWVsZEdyaWQgPSBbXTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2wgPSAwO1xuICAgICAgICBsZXQgcm93ID0ge1xuICAgICAgICAgICAgY29sczogW11cbiAgICAgICAgfSBhcyBGaWVsZEdyaWRSb3c7XG4gICAgICAgIGdyaWQucHVzaChyb3cpO1xuXG4gICAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuXG4gICAgICAgICAgICBpZiAoY29sID49IHRoaXMuY29sTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY29sID0gMDtcbiAgICAgICAgICAgICAgICByb3cgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHM6IFtdXG4gICAgICAgICAgICAgICAgfSBhcyBGaWVsZEdyaWRSb3c7XG4gICAgICAgICAgICAgICAgZ3JpZC5wdXNoKHJvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvdy5jb2xzLnB1c2goe1xuICAgICAgICAgICAgICAgIGZpZWxkXG4gICAgICAgICAgICB9IGFzIEZpZWxkR3JpZENvbHVtbik7XG5cbiAgICAgICAgICAgIGNvbCsrO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBsYXN0Um93ID0gZ3JpZFtncmlkLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoY29sIDwgdGhpcy5jb2xOdW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsbFJvdyhsYXN0Um93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkU3BlY2lhbFNsb3RzKGdyaWQpO1xuXG4gICAgICAgIHRoaXMuZmllbGRHcmlkID0gZ3JpZDtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48Zm9ybT5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cInJvd0NsYXNzXCIgKm5nRm9yPVwibGV0IHJvdyBvZiBmaWVsZEdyaWRcIj5cblxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cImNvbENsYXNzXCIgKm5nRm9yPVwibGV0IGNvbCBvZiByb3cuY29sc1wiPlxuICAgICAgICAgICAgPGRpdiBbY2xhc3MuYWxpZ24taXRlbXMtY2VudGVyXT1cImxhYmVsRGlzcGxheSA9PT0gJ2lubGluZScgJiYgIWNvbEFsaWduSXRlbXNcIlxuICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmZsZXgtY29sdW1uXT1cImxhYmVsRGlzcGxheSA9PT0gJ3RvcCdcIlxuICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmZsZXgtcm93XT1cImxhYmVsRGlzcGxheSA9PT0gJ2lubGluZSdcIlxuICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmp1c3RpZnktY29udGVudC1lbmRdPVwiIWNvbC5maWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJjb2xBbGlnbkl0ZW1zID8gY29sQWxpZ25JdGVtcyA6ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb2wuZmllbGQgJiYgY29sLmZpZWxkLmRpc3BsYXkgIT09ICdub25lJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnByLTNdPVwibGFiZWxEaXNwbGF5ID09PSAnaW5saW5lJ1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cImNvbC5maWVsZC5sYWJlbFwiIFtuZ0NsYXNzXT1cImxhYmVsQ2xhc3NcIj57e2NvbC5maWVsZC5sYWJlbH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsICpuZ0lmPVwiIWNvbC5maWVsZC5sYWJlbCAmJiBjb2wuZmllbGQubGFiZWxLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsS2V5XT1cImNvbC5maWVsZC5sYWJlbEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJsYWJlbENsYXNzXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbC5maWVsZCAmJiBjb2wuZmllbGQuZGlzcGxheSAhPT0gJ25vbmUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZmxleC1ncm93LTFdPVwibGFiZWxEaXNwbGF5ID09PSAnaW5saW5lJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZmllbGQgW2ZpZWxkXT1cImNvbC5maWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBba2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9kZV09XCJmaWVsZE1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlY29yZF09XCJyZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiY29sLmZpZWxkLnR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2wuYWN0aW9uU2xvdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2ZpZWxkLWdyaWQtYWN0aW9uc11cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sLnNwZWNpYWxTbG90XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbZmllbGQtZ3JpZC1hY3Rpb25zXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9mb3JtPlxuIl19