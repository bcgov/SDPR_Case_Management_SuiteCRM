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
import { isTrue } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../fields/field.component";
import * as i3 from "../label/label.component";
import * as i4 from "../action-group-menu/action-group-menu.component";
import * as i5 from "../dynamic-label/dynamic-label.component";
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r11 = i0.ɵɵnextContext(3).ngIf;
    const col_r5 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r15 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", ctx_r15.getLabelClass(col_r5));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", field_r11.label, " ");
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_scrm_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-label", 9);
} if (rf & 2) {
    const field_r11 = i0.ɵɵnextContext(3).ngIf;
    const col_r5 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r16 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("labelKey", field_r11.labelKey)("ngClass", ctx_r16.getLabelClass(col_r5));
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_scrm_dynamic_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-dynamic-label", 10);
} if (rf & 2) {
    const field_r11 = i0.ɵɵnextContext(3).ngIf;
    const ctx_r17 = i0.ɵɵnextContext(8);
    i0.ɵɵproperty("labelKey", field_r11.dynamicLabelKey)("fields", ctx_r17.record.fields);
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_label_2_Template, 2, 2, "label", 6);
    i0.ɵɵtemplate(3, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_scrm_label_3_Template, 1, 2, "scrm-label", 7);
    i0.ɵɵtemplate(4, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_scrm_dynamic_label_4_Template, 1, 2, "scrm-dynamic-label", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r11 = i0.ɵɵnextContext(2).ngIf;
    const col_r5 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r13 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("pr-3", ctx_r13.getLabelDisplay(col_r5, ctx_r13.mode) === "inline" && ctx_r13.getDisplay(col_r5) !== "none");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r11.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r11.label && field_r11.labelKey);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r11.dynamicLabelKey);
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "scrm-field", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r11 = i0.ɵɵnextContext(2).ngIf;
    const col_r5 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r14 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("flex-grow-1", ctx_r14.getLabelDisplay(col_r5, ctx_r14.mode) === "inline");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", field_r11)("klass", ctx_r14.getFieldClass(col_r5))("mode", ctx_r14.mode)("record", ctx_r14.record)("type", field_r11.type);
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_Template, 5, 5, "ng-container", 1);
    i0.ɵɵtemplate(2, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_2_Template, 3, 7, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r5 = i0.ɵɵnextContext(5).$implicit;
    const ctx_r12 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.getLabelDisplay(col_r5, ctx_r12.mode) !== "none");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.getDisplay(col_r5) !== "none");
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r11 = ctx.ngIf;
    const col_r5 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r10 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.shouldDisplay(col_r5, field_r11, ctx_r10.mode));
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r8 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.getField(ctx_r8.record, col_r5.field));
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-action-group-menu", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(7);
    let tmp_0_0;
    let tmp_1_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("buttonClass", (tmp_0_0 = ctx_r9.config.buttonClass) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "")("buttonGroupClass", (tmp_1_0 = ctx_r9.config.buttonGroupClass) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "")("config", ctx_r9.config.actions);
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    i0.ɵɵtemplate(3, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_3_Template, 2, 3, "ng-container", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r7 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("align-items-center", ctx_r7.getLabelDisplay(col_r5, ctx_r7.mode) === "inline")("flex-column", ctx_r7.getLabelDisplay(col_r5, ctx_r7.mode) === "top")("flex-row", ctx_r7.getLabelDisplay(col_r5, ctx_r7.mode) === "inline")("justify-content-end", !col_r5.field);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.record);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r5.actionSlot && ctx_r7.config.actions);
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_Template, 4, 10, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext(4);
    let tmp_1_0;
    i0.ɵɵclassMapInterpolate1("record-flexbox-col ", ctx_r6.getClass(col_r5), "");
    i0.ɵɵproperty("ngClass", (tmp_1_0 = ctx_r6.config.colClass) !== null && tmp_1_0 !== undefined ? tmp_1_0 : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r5.display !== "hidden" && ctx_r6.shouldColDisplayInMode(col_r5, ctx_r6.mode));
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_Template, 2, 5, "div", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r5.display !== "hidden" && ctx_r4.shouldColDisplayInMode(col_r5, ctx_r4.mode));
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    let tmp_1_0;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate3("d-flex record-flexbox-row ", ctx_r2.getJustify(item_r3.justify), " ", ctx_r2.getAlign(item_r3.align), " ", ctx_r2.getLayoutRowClass(item_r3), "");
    i0.ɵɵproperty("ngClass", (tmp_1_0 = ctx_r2.config.rowClass) !== null && tmp_1_0 !== undefined ? tmp_1_0 : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", item_r3.cols);
} }
function RecordFlexboxComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_Template, 3, 7, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.layout.rows);
} }
function RecordFlexboxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("d-flex ", (ctx_r0.config && ctx_r0.config.flexDirection ? ctx_r0.config.flexDirection : "flex-column") || "", " ", ctx_r0.config && ctx_r0.config.klass || "", "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.layout && ctx_r0.layout.rows);
} }
class RecordFlexboxComponent {
    constructor() {
        this.mode = 'detail';
        this.maxColumns = 4;
        this.sizeMap = {
            handset: 1,
            tablet: 2,
            web: 3,
            wide: 4
        };
        this.subs = [];
    }
    ngOnInit() {
        if (!this.config) {
            return;
        }
        const config = this.config;
        if (config.record$) {
            this.subs.push(config.record$.subscribe(record => {
                this.record = record ?? null;
            }));
        }
        if (config.mode$) {
            this.subs.push(config.mode$.subscribe(mode => {
                this.mode = mode ?? 'detail';
            }));
        }
        if (config.layout$) {
            this.subs.push(config.layout$.subscribe(layout => {
                this.layout = layout ?? null;
            }));
        }
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getRowClass() {
        return this.config.rowClass;
    }
    getColClass() {
        return this.config.colClass;
    }
    getSizeClass(size) {
        const sizeMap = {
            regular: 'text-regular',
            medium: 'text-medium',
            large: 'text-large',
            'x-large': 'text-x-large',
            'xx-large': 'text-xx-large',
            huge: 'text-huge'
        };
        return sizeMap[size] || 'text-regular';
    }
    getFontWeight(bold) {
        let fontWeight = 'font-weight-normal';
        if (bold && isTrue(bold)) {
            fontWeight = 'font-weight-bolder';
        }
        return fontWeight;
    }
    getColor(color) {
        const sizeMap = {
            yellow: 'text-yellow',
            blue: 'text-blue',
            green: 'text-green',
            red: 'text-red',
            purple: 'text-purple',
            dark: 'text-dark',
            grey: 'text-grey'
        };
        return sizeMap[color] || '';
    }
    getJustify(justify) {
        const justifyMap = {
            start: 'justify-content-start',
            end: 'justify-content-end',
            center: 'justify-content-center',
            between: 'justify-content-between',
            around: 'justify-content-around'
        };
        return justifyMap[justify] || '';
    }
    getAlign(align) {
        const alignMap = {
            start: 'align-items-start',
            end: 'align-items-end',
            center: 'align-items-center',
            baseline: 'align-items-baseline',
            stretch: 'align-items-stretch'
        };
        return alignMap[align] || '';
    }
    getLayoutRowClass(row) {
        return (row && row.class) || '';
    }
    getClass(layoutCol) {
        if (!layoutCol) {
            return '';
        }
        const klasses = [];
        klasses.push(layoutCol.class || '');
        layoutCol.size && klasses.push(this.getSizeClass(layoutCol.size) || '');
        layoutCol.bold && klasses.push(this.getFontWeight(layoutCol.bold) || '');
        layoutCol.color && klasses.push(this.getColor(layoutCol.color) || '');
        return klasses.join(' ');
    }
    getLabelDisplay(col, mode) {
        const displayInMode = this.shouldLabelDisplayInMode(col, mode);
        if (!displayInMode) {
            return 'none';
        }
        return col.labelDisplay || (this.config && this.config.labelDisplay) || 'inline';
    }
    getField(record, field) {
        if (!field || !field.name || !record || !record.fields) {
            return null;
        }
        return record.fields[field.name] ?? null;
    }
    getFieldClass(col) {
        let klasses = this.config.inputClass || {};
        if (col.inputClass) {
            klasses[col.inputClass] = true;
        }
        return klasses;
    }
    getLabelClass(col) {
        let klasses = this.config.labelClass || {};
        if (col.labelClass) {
            klasses[col.labelClass] = true;
        }
        return klasses;
    }
    shouldDisplay(col, field, mode) {
        const displayInMode = this.shouldFieldDisplayInMode(col, mode);
        if (!displayInMode) {
            return false;
        }
        if (!col.hideIfEmpty) {
            return true;
        }
        let hasValue = false;
        hasValue = hasValue || !!field.value;
        hasValue = hasValue || !!(field.valueList && field.valueList.length);
        hasValue = hasValue || !!(field.valueObject && Object.keys(field.valueObject).length);
        return hasValue;
    }
    shouldColDisplayInMode(col, mode) {
        return this.shouldFieldDisplayInMode(col, mode) || this.shouldLabelDisplayInMode(col, mode);
    }
    shouldFieldDisplayInMode(col, mode) {
        const modes = col?.modes ?? null;
        return !(modes && modes.length && !modes.includes(mode));
    }
    shouldLabelDisplayInMode(col, mode) {
        const modes = col?.labelModes ?? null;
        return !(modes && modes.length && !modes.includes(mode));
    }
    getDisplay(col) {
        return col.display || '';
    }
    static { this.ɵfac = function RecordFlexboxComponent_Factory(t) { return new (t || RecordFlexboxComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordFlexboxComponent, selectors: [["scrm-record-flexbox"]], inputs: { config: "config" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "ngClass", "class", 4, "ngIf"], [1, "d-flex"], [3, "ngClass", 4, "ngIf"], [3, "labelKey", "ngClass", 4, "ngIf"], [3, "labelKey", "fields", 4, "ngIf"], [3, "labelKey", "ngClass"], [3, "labelKey", "fields"], [3, "field", "klass", "mode", "record", "type"], [3, "buttonClass", "buttonGroupClass", "config"]], template: function RecordFlexboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordFlexboxComponent_div_0_Template, 2, 5, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.config);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.FieldComponent, i3.LabelComponent, i4.ActionGroupMenuComponent, i5.DynamicLabelComponent], encapsulation: 2 }); }
}
export { RecordFlexboxComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordFlexboxComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-flexbox', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div *ngIf=\"config\" class=\"d-flex {{((config && config.flexDirection) ? config.flexDirection : 'flex-column' ) || ''}} {{(config && config.klass) || ''}}\"   >\n    <ng-container *ngIf=\"layout && layout.rows\">\n        <ng-container *ngFor=\"let item of layout.rows\">\n\n            <div [ngClass]=\"config.rowClass ?? null\"\n                 class=\"d-flex record-flexbox-row {{getJustify(item.justify)}} {{getAlign(item.align)}} {{getLayoutRowClass(item)}}\">\n\n                <ng-container *ngFor=\"let col of item.cols\">\n\n                <div *ngIf=\"col.display !== 'hidden' && shouldColDisplayInMode(col, mode)\"\n                     [ngClass]=\"config.colClass ?? null\"\n                     class=\"record-flexbox-col {{getClass(col)}}\">\n\n                    <ng-container *ngIf=\"col.display !== 'hidden' && shouldColDisplayInMode(col, mode)\">\n\n                        <div [class.align-items-center]=\"getLabelDisplay(col, mode) === 'inline'\"\n                             [class.flex-column]=\"getLabelDisplay(col, mode) === 'top'\"\n                             [class.flex-row]=\"getLabelDisplay(col, mode) === 'inline'\"\n                             [class.justify-content-end]=\"!col.field\"\n                             class=\"d-flex\"\n                        >\n                            <ng-container *ngIf=\"record\">\n                                <ng-container *ngIf=\"getField(record, col.field) as field\">\n\n                                    <ng-container *ngIf=\"shouldDisplay(col, field, mode)\">\n                                        <ng-container *ngIf=\"getLabelDisplay(col, mode) !== 'none'\">\n\n                                            <div\n                                                [class.pr-3]=\"getLabelDisplay(col, mode) === 'inline' && getDisplay(col) !== 'none'\">\n\n                                                <label *ngIf=\"field.label\" [ngClass]=\"getLabelClass(col)\">\n                                                    {{field.label}}\n                                                </label>\n\n                                                <scrm-label *ngIf=\"!field.label && field.labelKey\"\n                                                            [labelKey]=\"field.labelKey\"\n                                                            [ngClass]=\"getLabelClass(col)\">\n                                                </scrm-label>\n\n                                                <scrm-dynamic-label *ngIf=\"field.dynamicLabelKey\"\n                                                                    [labelKey]=\"field.dynamicLabelKey\"\n                                                                    [fields]=\"record.fields\">\n                                                </scrm-dynamic-label>\n                                            </div>\n\n                                        </ng-container>\n\n                                        <ng-container *ngIf=\"getDisplay(col) !== 'none'\">\n\n                                            <div [class.flex-grow-1]=\"getLabelDisplay(col, mode) === 'inline'\">\n                                                <scrm-field [field]=\"field\"\n                                                            [klass]=\"getFieldClass(col)\"\n                                                            [mode]=\"mode\"\n                                                            [record]=\"record\"\n                                                            [type]=\"field.type\">\n                                                </scrm-field>\n\n                                            </div>\n\n                                        </ng-container>\n\n\n                                    </ng-container>\n\n                                </ng-container>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"col.actionSlot && this.config.actions\">\n                                <scrm-action-group-menu [buttonClass]=\"config.buttonClass ?? ''\"\n                                                        [buttonGroupClass]=\"config.buttonGroupClass ?? ''\"\n                                                        [config]=\"config.actions\">\n                                </scrm-action-group-menu>\n                            </ng-container>\n\n                        </div>\n                    </ng-container>\n\n                </div>\n                </ng-container>\n            </div>\n        </ng-container>\n    </ng-container>\n</div>\n" }]
    }], function () { return []; }, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWZsZXhib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWZsZXhib3gvcmVjb3JkLWZsZXhib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWZsZXhib3gvcmVjb3JkLWZsZXhib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBSUgsTUFBTSxFQVFULE1BQU0sUUFBUSxDQUFDOzs7Ozs7OztJQ21CZ0MsZ0NBQTBEO0lBQ3RELFlBQ0o7SUFBQSxpQkFBUTs7Ozs7SUFGbUIsdURBQThCO0lBQ3JELGVBQ0o7SUFESSxnREFDSjs7O0lBRUEsZ0NBR2E7Ozs7O0lBRkQsNkNBQTJCLDBDQUFBOzs7SUFJdkMseUNBR3FCOzs7O0lBRkQsb0RBQWtDLGlDQUFBOzs7SUFmOUQsNkJBQTREO0lBRXhELDJCQUN5RjtJQUVyRiwrTUFFUTtJQUVSLHlOQUdhO0lBRWIseU9BR3FCO0lBQ3pCLGlCQUFNO0lBRVYsMEJBQWU7Ozs7O0lBakJQLGVBQW9GO0lBQXBGLDJIQUFvRjtJQUU1RSxlQUFpQjtJQUFqQixzQ0FBaUI7SUFJWixlQUFvQztJQUFwQyw2REFBb0M7SUFLNUIsZUFBMkI7SUFBM0IsZ0RBQTJCOzs7SUFReEQsNkJBQWlEO0lBRTdDLDJCQUFtRTtJQUMvRCxpQ0FLYTtJQUVqQixpQkFBTTtJQUVWLDBCQUFlOzs7OztJQVZOLGVBQTZEO0lBQTdELHlGQUE2RDtJQUNsRCxlQUFlO0lBQWYsaUNBQWUsd0NBQUEsc0JBQUEsMEJBQUEsd0JBQUE7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QW9CLEVBQUUsSUFBYztRQUN6RCxNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsd0JBQXdCLENBQUMsR0FBb0IsRUFBRSxJQUFjO1FBQ3pELE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRSxVQUFVLElBQUksSUFBSSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxVQUFVLENBQUMsR0FBb0I7UUFDM0IsT0FBTyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO3VGQXBOUSxzQkFBc0I7b0VBQXRCLHNCQUFzQjtZQ3JCbkMsdUVBa0ZNOztZQWxGQSxpQ0FBWTs7O1NEcUJMLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0kscUJBQXFCO3NDQU10QixNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBDb250ZW50QWxpZ24sXG4gICAgQ29udGVudEp1c3RpZnksXG4gICAgRmllbGQsXG4gICAgaXNUcnVlLFxuICAgIFJlY29yZCxcbiAgICBTY3JlZW5TaXplTWFwLFxuICAgIFN0YXRpc3RpY1dpZGdldExheW91dFJvdyxcbiAgICBUZXh0Q29sb3IsXG4gICAgVGV4dFNpemVzLFxuICAgIFZpZXdGaWVsZERlZmluaXRpb24sXG4gICAgVmlld01vZGVcbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7RmllbGRGbGV4Ym94LCBGaWVsZEZsZXhib3hDb2wsIFJlY29yZEZsZXhib3hDb25maWd9IGZyb20gJy4vcmVjb3JkLWZsZXhib3gubW9kZWwnO1xuaW1wb3J0IHtMYWJlbERpc3BsYXl9IGZyb20gJy4uL2ZpZWxkLWdyaWQvZmllbGQtZ3JpZC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWNvcmQtZmxleGJveCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlY29yZC1mbGV4Ym94LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZEZsZXhib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBjb25maWc6IFJlY29yZEZsZXhib3hDb25maWc7XG5cbiAgICBtb2RlOiBWaWV3TW9kZSA9ICdkZXRhaWwnO1xuICAgIHJlY29yZDogUmVjb3JkO1xuICAgIGxheW91dDogRmllbGRGbGV4Ym94O1xuXG4gICAgbWF4Q29sdW1uczogbnVtYmVyID0gNDtcbiAgICBzaXplTWFwOiBTY3JlZW5TaXplTWFwID0ge1xuICAgICAgICBoYW5kc2V0OiAxLFxuICAgICAgICB0YWJsZXQ6IDIsXG4gICAgICAgIHdlYjogMyxcbiAgICAgICAgd2lkZTogNFxuICAgIH07XG5cbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5yZWNvcmQkKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChjb25maWcucmVjb3JkJC5zdWJzY3JpYmUocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZCA9IHJlY29yZCA/PyBudWxsO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5tb2RlJCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goY29uZmlnLm1vZGUkLnN1YnNjcmliZShtb2RlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGUgPSBtb2RlID8/ICdkZXRhaWwnO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5sYXlvdXQkKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChjb25maWcubGF5b3V0JC5zdWJzY3JpYmUobGF5b3V0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxheW91dCA9IGxheW91dCA/PyBudWxsO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgZ2V0Um93Q2xhc3MoKTogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnJvd0NsYXNzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb2xDbGFzcygpOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuY29sQ2xhc3M7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNpemVDbGFzcyhzaXplOiBUZXh0U2l6ZXMpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgICAgICAgcmVndWxhcjogJ3RleHQtcmVndWxhcicsXG4gICAgICAgICAgICBtZWRpdW06ICd0ZXh0LW1lZGl1bScsXG4gICAgICAgICAgICBsYXJnZTogJ3RleHQtbGFyZ2UnLFxuICAgICAgICAgICAgJ3gtbGFyZ2UnOiAndGV4dC14LWxhcmdlJyxcbiAgICAgICAgICAgICd4eC1sYXJnZSc6ICd0ZXh0LXh4LWxhcmdlJyxcbiAgICAgICAgICAgIGh1Z2U6ICd0ZXh0LWh1Z2UnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHNpemVNYXBbc2l6ZV0gfHwgJ3RleHQtcmVndWxhcic7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZvbnRXZWlnaHQoYm9sZDogc3RyaW5nIHwgYm9vbGVhbik6IHN0cmluZyB7XG4gICAgICAgIGxldCBmb250V2VpZ2h0ID0gJ2ZvbnQtd2VpZ2h0LW5vcm1hbCc7XG5cbiAgICAgICAgaWYgKGJvbGQgJiYgaXNUcnVlKGJvbGQpKSB7XG4gICAgICAgICAgICBmb250V2VpZ2h0ID0gJ2ZvbnQtd2VpZ2h0LWJvbGRlcic7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9udFdlaWdodDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29sb3IoY29sb3I6IFRleHRDb2xvcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgICAgICAgICB5ZWxsb3c6ICd0ZXh0LXllbGxvdycsXG4gICAgICAgICAgICBibHVlOiAndGV4dC1ibHVlJyxcbiAgICAgICAgICAgIGdyZWVuOiAndGV4dC1ncmVlbicsXG4gICAgICAgICAgICByZWQ6ICd0ZXh0LXJlZCcsXG4gICAgICAgICAgICBwdXJwbGU6ICd0ZXh0LXB1cnBsZScsXG4gICAgICAgICAgICBkYXJrOiAndGV4dC1kYXJrJyxcbiAgICAgICAgICAgIGdyZXk6ICd0ZXh0LWdyZXknXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHNpemVNYXBbY29sb3JdIHx8ICcnO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRKdXN0aWZ5KGp1c3RpZnk6IENvbnRlbnRKdXN0aWZ5KTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QganVzdGlmeU1hcCA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiAnanVzdGlmeS1jb250ZW50LXN0YXJ0JyxcbiAgICAgICAgICAgIGVuZDogJ2p1c3RpZnktY29udGVudC1lbmQnLFxuICAgICAgICAgICAgY2VudGVyOiAnanVzdGlmeS1jb250ZW50LWNlbnRlcicsXG4gICAgICAgICAgICBiZXR3ZWVuOiAnanVzdGlmeS1jb250ZW50LWJldHdlZW4nLFxuICAgICAgICAgICAgYXJvdW5kOiAnanVzdGlmeS1jb250ZW50LWFyb3VuZCdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ganVzdGlmeU1hcFtqdXN0aWZ5XSB8fCAnJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWxpZ24oYWxpZ246IENvbnRlbnRBbGlnbik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGFsaWduTWFwID0ge1xuICAgICAgICAgICAgc3RhcnQ6ICdhbGlnbi1pdGVtcy1zdGFydCcsXG4gICAgICAgICAgICBlbmQ6ICdhbGlnbi1pdGVtcy1lbmQnLFxuICAgICAgICAgICAgY2VudGVyOiAnYWxpZ24taXRlbXMtY2VudGVyJyxcbiAgICAgICAgICAgIGJhc2VsaW5lOiAnYWxpZ24taXRlbXMtYmFzZWxpbmUnLFxuICAgICAgICAgICAgc3RyZXRjaDogJ2FsaWduLWl0ZW1zLXN0cmV0Y2gnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGFsaWduTWFwW2FsaWduXSB8fCAnJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TGF5b3V0Um93Q2xhc3Mocm93OiBTdGF0aXN0aWNXaWRnZXRMYXlvdXRSb3cpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHJvdyAmJiByb3cuY2xhc3MpIHx8ICcnO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDbGFzcyhsYXlvdXRDb2w6IEZpZWxkRmxleGJveENvbCk6IHN0cmluZyB7XG5cbiAgICAgICAgaWYgKCFsYXlvdXRDb2wpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGtsYXNzZXMgPSBbXTtcbiAgICAgICAga2xhc3Nlcy5wdXNoKGxheW91dENvbC5jbGFzcyB8fCAnJyk7XG4gICAgICAgIGxheW91dENvbC5zaXplICYmIGtsYXNzZXMucHVzaCh0aGlzLmdldFNpemVDbGFzcyhsYXlvdXRDb2wuc2l6ZSkgfHwgJycpO1xuICAgICAgICBsYXlvdXRDb2wuYm9sZCAmJiBrbGFzc2VzLnB1c2godGhpcy5nZXRGb250V2VpZ2h0KGxheW91dENvbC5ib2xkKSB8fCAnJyk7XG4gICAgICAgIGxheW91dENvbC5jb2xvciAmJiBrbGFzc2VzLnB1c2godGhpcy5nZXRDb2xvcihsYXlvdXRDb2wuY29sb3IpIHx8ICcnKTtcblxuICAgICAgICByZXR1cm4ga2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgZ2V0TGFiZWxEaXNwbGF5KGNvbDogRmllbGRGbGV4Ym94Q29sLCBtb2RlOiBWaWV3TW9kZSk6IExhYmVsRGlzcGxheSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlJbk1vZGUgPSB0aGlzLnNob3VsZExhYmVsRGlzcGxheUluTW9kZShjb2wsIG1vZGUpO1xuICAgICAgICBpZiAoIWRpc3BsYXlJbk1vZGUpe1xuICAgICAgICAgICAgcmV0dXJuICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2wubGFiZWxEaXNwbGF5IHx8ICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5sYWJlbERpc3BsYXkpIHx8ICdpbmxpbmUnO1xuICAgIH1cblxuICAgIGdldEZpZWxkKHJlY29yZDogUmVjb3JkLCBmaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbik6IEZpZWxkIHtcbiAgICAgICAgaWYgKCFmaWVsZCB8fCAhZmllbGQubmFtZSB8fCAhcmVjb3JkIHx8ICFyZWNvcmQuZmllbGRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWNvcmQuZmllbGRzW2ZpZWxkLm5hbWVdID8/IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0RmllbGRDbGFzcyhjb2w6IEZpZWxkRmxleGJveENvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgICAgICBsZXQga2xhc3NlcyA9IHRoaXMuY29uZmlnLmlucHV0Q2xhc3MgfHwge30gYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuICAgICAgICBpZiAoY29sLmlucHV0Q2xhc3MpIHtcbiAgICAgICAgICAgIGtsYXNzZXNbY29sLmlucHV0Q2xhc3NdID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrbGFzc2VzO1xuICAgIH1cblxuICAgIGdldExhYmVsQ2xhc3MoY29sOiBGaWVsZEZsZXhib3hDb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICAgICAgbGV0IGtsYXNzZXMgPSB0aGlzLmNvbmZpZy5sYWJlbENsYXNzIHx8IHt9IGFzIHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cbiAgICAgICAgaWYgKGNvbC5sYWJlbENsYXNzKSB7XG4gICAgICAgICAgICBrbGFzc2VzW2NvbC5sYWJlbENsYXNzXSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrbGFzc2VzO1xuICAgIH1cblxuICAgIHNob3VsZERpc3BsYXkoY29sOiBGaWVsZEZsZXhib3hDb2wsIGZpZWxkOiBGaWVsZCwgbW9kZTogVmlld01vZGUpIHtcblxuICAgICAgICBjb25zdCBkaXNwbGF5SW5Nb2RlID0gdGhpcy5zaG91bGRGaWVsZERpc3BsYXlJbk1vZGUoY29sLCBtb2RlKTtcblxuICAgICAgICBpZiAoIWRpc3BsYXlJbk1vZGUpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb2wuaGlkZUlmRW1wdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgIGhhc1ZhbHVlID0gaGFzVmFsdWUgfHwgISFmaWVsZC52YWx1ZTtcbiAgICAgICAgaGFzVmFsdWUgPSBoYXNWYWx1ZSB8fCAhIShmaWVsZC52YWx1ZUxpc3QgJiYgZmllbGQudmFsdWVMaXN0Lmxlbmd0aCk7XG4gICAgICAgIGhhc1ZhbHVlID0gaGFzVmFsdWUgfHwgISEoZmllbGQudmFsdWVPYmplY3QgJiYgT2JqZWN0LmtleXMoZmllbGQudmFsdWVPYmplY3QpLmxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIGhhc1ZhbHVlO1xuICAgIH1cblxuICAgIHNob3VsZENvbERpc3BsYXlJbk1vZGUoY29sOiBGaWVsZEZsZXhib3hDb2wsIG1vZGU6IFZpZXdNb2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3VsZEZpZWxkRGlzcGxheUluTW9kZShjb2wsIG1vZGUpIHx8IHRoaXMuc2hvdWxkTGFiZWxEaXNwbGF5SW5Nb2RlKGNvbCwgbW9kZSk7XG4gICAgfVxuXG4gICAgc2hvdWxkRmllbGREaXNwbGF5SW5Nb2RlKGNvbDogRmllbGRGbGV4Ym94Q29sLCBtb2RlOiBWaWV3TW9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBtb2RlcyA9IGNvbD8ubW9kZXMgPz8gbnVsbDtcbiAgICAgICAgcmV0dXJuICEobW9kZXMgJiYgbW9kZXMubGVuZ3RoICYmICFtb2Rlcy5pbmNsdWRlcyhtb2RlKSk7XG4gICAgfVxuXG4gICAgc2hvdWxkTGFiZWxEaXNwbGF5SW5Nb2RlKGNvbDogRmllbGRGbGV4Ym94Q29sLCBtb2RlOiBWaWV3TW9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBtb2RlcyA9IGNvbD8ubGFiZWxNb2RlcyA/PyBudWxsO1xuICAgICAgICByZXR1cm4gIShtb2RlcyAmJiBtb2Rlcy5sZW5ndGggJiYgIW1vZGVzLmluY2x1ZGVzKG1vZGUpKTtcbiAgICB9XG5cbiAgICBnZXREaXNwbGF5KGNvbDogRmllbGRGbGV4Ym94Q29sKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGNvbC5kaXNwbGF5IHx8ICcnO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cblxuPGRpdiAqbmdJZj1cImNvbmZpZ1wiIGNsYXNzPVwiZC1mbGV4IHt7KChjb25maWcgJiYgY29uZmlnLmZsZXhEaXJlY3Rpb24pID8gY29uZmlnLmZsZXhEaXJlY3Rpb24gOiAnZmxleC1jb2x1bW4nICkgfHwgJyd9fSB7eyhjb25maWcgJiYgY29uZmlnLmtsYXNzKSB8fCAnJ319XCIgICA+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxheW91dCAmJiBsYXlvdXQucm93c1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxheW91dC5yb3dzXCI+XG5cbiAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwiY29uZmlnLnJvd0NsYXNzID8/IG51bGxcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCByZWNvcmQtZmxleGJveC1yb3cge3tnZXRKdXN0aWZ5KGl0ZW0uanVzdGlmeSl9fSB7e2dldEFsaWduKGl0ZW0uYWxpZ24pfX0ge3tnZXRMYXlvdXRSb3dDbGFzcyhpdGVtKX19XCI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2wgb2YgaXRlbS5jb2xzXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29sLmRpc3BsYXkgIT09ICdoaWRkZW4nICYmIHNob3VsZENvbERpc3BsYXlJbk1vZGUoY29sLCBtb2RlKVwiXG4gICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJjb25maWcuY29sQ2xhc3MgPz8gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlY29yZC1mbGV4Ym94LWNvbCB7e2dldENsYXNzKGNvbCl9fVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2wuZGlzcGxheSAhPT0gJ2hpZGRlbicgJiYgc2hvdWxkQ29sRGlzcGxheUluTW9kZShjb2wsIG1vZGUpXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLmFsaWduLWl0ZW1zLWNlbnRlcl09XCJnZXRMYWJlbERpc3BsYXkoY29sLCBtb2RlKSA9PT0gJ2lubGluZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZmxleC1jb2x1bW5dPVwiZ2V0TGFiZWxEaXNwbGF5KGNvbCwgbW9kZSkgPT09ICd0b3AnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmZsZXgtcm93XT1cImdldExhYmVsRGlzcGxheShjb2wsIG1vZGUpID09PSAnaW5saW5lJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5qdXN0aWZ5LWNvbnRlbnQtZW5kXT1cIiFjb2wuZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0RmllbGQocmVjb3JkLCBjb2wuZmllbGQpIGFzIGZpZWxkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG91bGREaXNwbGF5KGNvbCwgZmllbGQsIG1vZGUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdldExhYmVsRGlzcGxheShjb2wsIG1vZGUpICE9PSAnbm9uZSdcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MucHItM109XCJnZXRMYWJlbERpc3BsYXkoY29sLCBtb2RlKSA9PT0gJ2lubGluZScgJiYgZ2V0RGlzcGxheShjb2wpICE9PSAnbm9uZSdcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICpuZ0lmPVwiZmllbGQubGFiZWxcIiBbbmdDbGFzc109XCJnZXRMYWJlbENsYXNzKGNvbClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2ZpZWxkLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsICpuZ0lmPVwiIWZpZWxkLmxhYmVsICYmIGZpZWxkLmxhYmVsS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEtleV09XCJmaWVsZC5sYWJlbEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJnZXRMYWJlbENsYXNzKGNvbClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZHluYW1pYy1sYWJlbCAqbmdJZj1cImZpZWxkLmR5bmFtaWNMYWJlbEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEtleV09XCJmaWVsZC5keW5hbWljTGFiZWxLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRzXT1cInJlY29yZC5maWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1keW5hbWljLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdldERpc3BsYXkoY29sKSAhPT0gJ25vbmUnXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MuZmxleC1ncm93LTFdPVwiZ2V0TGFiZWxEaXNwbGF5KGNvbCwgbW9kZSkgPT09ICdpbmxpbmUnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tsYXNzXT1cImdldEZpZWxkQ2xhc3MoY29sKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9kZV09XCJtb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWNvcmRdPVwicmVjb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImZpZWxkLnR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1maWVsZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbC5hY3Rpb25TbG90ICYmIHRoaXMuY29uZmlnLmFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tYWN0aW9uLWdyb3VwLW1lbnUgW2J1dHRvbkNsYXNzXT1cImNvbmZpZy5idXR0b25DbGFzcyA/PyAnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtidXR0b25Hcm91cENsYXNzXT1cImNvbmZpZy5idXR0b25Hcm91cENsYXNzID8/ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJjb25maWcuYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tYWN0aW9uLWdyb3VwLW1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=