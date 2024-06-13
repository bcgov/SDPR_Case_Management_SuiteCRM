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
import { ChangeDetectorRef, Component, HostBinding, Input, Type } from '@angular/core';
import { EDITABLE_VIEW_MODES } from 'common';
import { Router } from '@angular/router';
import { ModuleNameMapper } from '../../services/navigation/module-name-mapper/module-name-mapper.service';
import { ModuleNavigation } from '../../services/navigation/module-navigation/module-navigation.service';
import { DynamicLabelService } from '../../services/language/dynamic-label.service';
import { LinkRouteAsyncActionService } from '../../services/navigation/link-route-async-action/link-route-async-action.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/navigation/module-navigation/module-navigation.service";
import * as i2 from "../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i3 from "@angular/router";
import * as i4 from "../../services/language/dynamic-label.service";
import * as i5 from "../../services/navigation/link-route-async-action/link-route-async-action.service";
import * as i6 from "@angular/common";
import * as i7 from "../../components/dynamic-label/dynamic-label.component";
import * as i8 from "ng-dynamic-component";
const _c0 = function (a0, a1, a2, a3, a4, a5) { return { "mode": a0, "originalMode": a1, "field": a2, "klass": a3, "record": a4, "parent": a5 }; };
function DynamicFieldComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function DynamicFieldComponent_ng_container_0_ng_container_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.onClick()); });
    i0.ɵɵelement(2, "ndc-dynamic", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ndcDynamicComponent", ctx_r3.componentType)("ndcDynamicInputs", i0.ɵɵpureFunction6(2, _c0, ctx_r3.mode, ctx_r3.originalMode, ctx_r3.field, ctx_r3.klass, ctx_r3.record, ctx_r3.parent));
} }
function DynamicFieldComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 3);
    i0.ɵɵelement(2, "ndc-dynamic", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", ctx_r4.getLink());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ndcDynamicComponent", ctx_r4.componentType)("ndcDynamicInputs", i0.ɵɵpureFunction6(3, _c0, ctx_r4.mode, ctx_r4.originalMode, ctx_r4.field, ctx_r4.klass, ctx_r4.record, ctx_r4.parent));
} }
function DynamicFieldComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "ndc-dynamic", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ndcDynamicComponent", ctx_r5.componentType)("ndcDynamicInputs", i0.ɵɵpureFunction6(2, _c0, ctx_r5.mode, ctx_r5.originalMode, ctx_r5.field, ctx_r5.klass, ctx_r5.record, ctx_r5.parent));
} }
function DynamicFieldComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DynamicFieldComponent_ng_container_0_ng_container_1_Template, 3, 9, "ng-container", 0);
    i0.ɵɵtemplate(2, DynamicFieldComponent_ng_container_0_ng_container_2_Template, 3, 10, "ng-container", 0);
    i0.ɵɵtemplate(3, DynamicFieldComponent_ng_container_0_ng_container_3_Template, 2, 9, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.hasOnClick());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isLink() && !ctx_r0.hasOnClick());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.isLink() && !ctx_r0.hasOnClick());
} }
function DynamicFieldComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelement(2, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
const _c1 = function (a0) { return { field: a0 }; };
function DynamicFieldComponent_ng_container_2_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "scrm-dynamic-label", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("context", ctx_r9.getMessageContext(item_r10.value, ctx_r9.record))("fields", i0.ɵɵpureFunction1(3, _c1, ctx_r9.field))("labelKey", ctx_r9.getMessageLabelKey(item_r10.value));
} }
function DynamicFieldComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DynamicFieldComponent_ng_container_2_ng_container_1_div_1_Template, 2, 5, "div", 6);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r8.field.formControl.errors));
} }
function DynamicFieldComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DynamicFieldComponent_ng_container_2_ng_container_1_Template, 3, 3, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.field.formControl.invalid && ctx_r2.field.formControl.touched);
} }
class DynamicFieldComponent {
    constructor(navigation, moduleNameMapper, router, dynamicLabelService, linkRouteAsyncActionService, cd) {
        this.navigation = navigation;
        this.moduleNameMapper = moduleNameMapper;
        this.router = router;
        this.dynamicLabelService = dynamicLabelService;
        this.linkRouteAsyncActionService = linkRouteAsyncActionService;
        this.cd = cd;
        this.record = null;
        this.parent = null;
        this.klass = null;
        this.class = 'dynamic-field';
    }
    get getRelateLink() {
        let linkModule = this.field.definition.module;
        if (this.field.definition.type_name === 'parent_type') {
            linkModule = this.record.attributes.parent_type;
        }
        if (this.field.definition.id_name && linkModule) {
            const moduleName = this.moduleNameMapper.toFrontend(linkModule);
            return this.navigation.getRecordRouterLink(moduleName, this.record.attributes[this.field.definition.id_name]);
        }
        return '';
    }
    ngOnInit() {
        this.setHostClass();
        this.cd.detectChanges();
        const defaultValueModes = this?.field?.defaultValueModes ?? ['create'];
        if (defaultValueModes.includes(this.originalMode)) {
            this.initDefaultValue();
        }
    }
    isLink() {
        if (EDITABLE_VIEW_MODES.includes(this.mode)) {
            return false;
        }
        if (!this.field || !this.record) {
            return false;
        }
        if (this.type === 'relate') {
            return true;
        }
        return !!(this?.field?.metadata && this?.field?.metadata?.link);
    }
    hasOnClick() {
        const fieldMetadata = this?.field?.metadata ?? {};
        const linkAsyncAction = fieldMetadata?.linkAsyncAction ?? null;
        const linkOnClick = fieldMetadata?.onClick ?? null;
        return !!(linkAsyncAction || linkOnClick);
    }
    isEdit() {
        return this.mode === 'edit' || this.mode === 'filter';
    }
    getLink() {
        if (this.type === 'relate') {
            return this.getRelateLink;
        }
        const fieldMetadata = this?.field?.metadata ?? null;
        const linkRoute = fieldMetadata.linkRoute ?? null;
        if (fieldMetadata && linkRoute) {
            return this.dynamicLabelService.parse(linkRoute, {}, this.record.fields);
        }
        return this.navigation.getRecordRouterLink(this.record.module, this.record.id);
    }
    getMessageContext(item, record) {
        const context = item && item.message && item.message.context || {};
        context.module = (record && record.module) || '';
        return context;
    }
    getMessageLabelKey(item) {
        return (item && item.message && item.message.labelKey) || '';
    }
    onClick() {
        const fieldMetadata = this?.field?.metadata ?? null;
        if (fieldMetadata && fieldMetadata.onClick) {
            this.field.metadata.onClick(this.field, this.record);
            return;
        }
        const linkAsyncAction = fieldMetadata.linkAsyncAction ?? null;
        if (fieldMetadata && linkAsyncAction) {
            this.linkRouteAsyncActionService.run(linkAsyncAction, this.field, this.record);
            return;
        }
        this.router.navigateByUrl(this.getLink()).then();
        return false;
    }
    setHostClass() {
        const classes = [];
        classes.push('dynamic-field');
        if (this.mode) {
            classes.push('dynamic-field-mode-' + this.mode);
        }
        if (this.type) {
            classes.push('dynamic-field-type-' + this.type);
        }
        if (this.field && this.field.name) {
            classes.push('dynamic-field-name-' + this.field.name);
        }
        this.class = classes.join(' ');
    }
    initDefaultValue() {
        const defaultValue = this?.field?.default ?? this?.field?.definition?.default ?? null;
        if (!this.field.value && defaultValue) {
            this.field.value = defaultValue;
            this.field?.formControl?.setValue(defaultValue);
        }
        else if (this.field.value === null) {
            this.field.value = '';
        }
    }
    static { this.ɵfac = function DynamicFieldComponent_Factory(t) { return new (t || DynamicFieldComponent)(i0.ɵɵdirectiveInject(i1.ModuleNavigation), i0.ɵɵdirectiveInject(i2.ModuleNameMapper), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.DynamicLabelService), i0.ɵɵdirectiveInject(i5.LinkRouteAsyncActionService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DynamicFieldComponent, selectors: [["scrm-dynamic-field"]], hostVars: 2, hostBindings: function DynamicFieldComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.class);
        } }, inputs: { mode: "mode", originalMode: "originalMode", type: "type", field: "field", record: "record", parent: "parent", klass: "klass", componentType: "componentType" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [1, "clickable", "field-link", 3, "click"], [3, "ndcDynamicComponent", "ndcDynamicInputs"], [1, "field-link", 3, "routerLink"], [1, "dynamic-field"], [1, "flex-grow-1", "text-break", "rounded", "box-loading", "skeleton-field-content"], ["class", "invalid-feedback d-block", 4, "ngFor", "ngForOf"], [1, "invalid-feedback", "d-block"], [3, "context", "fields", "labelKey"]], template: function DynamicFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DynamicFieldComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
            i0.ɵɵtemplate(1, DynamicFieldComponent_ng_container_1_Template, 3, 0, "ng-container", 0);
            i0.ɵɵtemplate(2, DynamicFieldComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.field.loading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.field.loading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isEdit() && ctx.field.formControl && ctx.field.formControl.errors);
        } }, dependencies: [i6.NgForOf, i6.NgIf, i3.RouterLink, i7.DynamicLabelComponent, i8.DynamicIoDirective, i8.DynamicComponent, i6.KeyValuePipe], encapsulation: 2 }); }
}
export { DynamicFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-dynamic-field', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"!field.loading\">\n    <ng-container *ngIf=\"hasOnClick()\">\n        <a (click)=\"onClick()\" class=\"clickable field-link\">\n            <ndc-dynamic\n                [ndcDynamicComponent]=\"componentType\"\n                [ndcDynamicInputs]=\"{\n                'mode': mode,\n                'originalMode': originalMode,\n                'field': field,\n                'klass': klass,\n                'record': record,\n                'parent': parent\n            }\"\n            ></ndc-dynamic>\n        </a>\n    </ng-container>\n    <ng-container *ngIf=\"isLink() && !hasOnClick()\">\n        <a [routerLink]=\"getLink()\" class=\"field-link\">\n            <ndc-dynamic\n                [ndcDynamicComponent]=\"componentType\"\n                [ndcDynamicInputs]=\"{\n                'mode': mode,\n                'originalMode': originalMode,\n                'field': field,\n                'klass': klass,\n                'record': record,\n                'parent': parent\n            }\"\n            ></ndc-dynamic>\n        </a>\n    </ng-container>\n    <ng-container *ngIf=\"!isLink() && !hasOnClick()\">\n        <ndc-dynamic\n            [ndcDynamicComponent]=\"componentType\"\n            [ndcDynamicInputs]=\"{\n            'mode': mode,\n            'originalMode': originalMode,\n            'field': field,\n            'klass': klass,\n            'record': record,\n            'parent': parent\n        }\"\n        ></ndc-dynamic>\n    </ng-container>\n</ng-container>\n\n<ng-container *ngIf=\"field.loading\">\n   <div class= \"dynamic-field\">\n        <div class=\"flex-grow-1 text-break rounded box-loading skeleton-field-content\"></div>\n   </div>\n</ng-container>\n\n<ng-container *ngIf=\"isEdit() && field.formControl && field.formControl.errors\">\n    <ng-container *ngIf=\"field.formControl.invalid && field.formControl.touched\">\n        <div *ngFor=\"let item of field.formControl.errors | keyvalue\" class=\"invalid-feedback d-block\">\n            <scrm-dynamic-label [context]=\"getMessageContext(item.value, record)\"\n                                [fields]=\"{field: field}\"\n                                [labelKey]=\"getMessageLabelKey(item.value)\">\n            </scrm-dynamic-label>\n        </div>\n    </ng-container>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.ModuleNavigation }, { type: i2.ModuleNameMapper }, { type: i3.Router }, { type: i4.DynamicLabelService }, { type: i5.LinkRouteAsyncActionService }, { type: i0.ChangeDetectorRef }]; }, { mode: [{
            type: Input,
            args: ['mode']
        }], originalMode: [{
            type: Input,
            args: ['originalMode']
        }], type: [{
            type: Input,
            args: ['type']
        }], field: [{
            type: Input,
            args: ['field']
        }], record: [{
            type: Input,
            args: ['record']
        }], parent: [{
            type: Input,
            args: ['parent']
        }], klass: [{
            type: Input,
            args: ['klass']
        }], componentType: [{
            type: Input,
            args: ['componentType']
        }], class: [{
            type: HostBinding,
            args: ['class']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2R5bmFtaWMtZmllbGQvZHluYW1pYy1maWVsZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2R5bmFtaWMtZmllbGQvZHluYW1pYy1maWVsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUMsbUJBQW1CLEVBQXFDLE1BQU0sUUFBUSxDQUFDO0FBQy9FLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5RUFBeUUsQ0FBQztBQUN6RyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx1RUFBdUUsQ0FBQztBQUN2RyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNsRixPQUFPLEVBQ0gsMkJBQTJCLEVBQzlCLE1BQU0sbUZBQW1GLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNOdkYsNkJBQW1DO0lBQy9CLDRCQUFvRDtJQUFqRCxzTEFBUyxlQUFBLGdCQUFTLENBQUEsSUFBQztJQUNsQixpQ0FVZTtJQUNuQixpQkFBSTtJQUNSLDBCQUFlOzs7SUFYSCxlQUFxQztJQUFyQywwREFBcUMsNElBQUE7OztJQVlqRCw2QkFBZ0Q7SUFDNUMsNEJBQStDO0lBQzNDLGlDQVVlO0lBQ25CLGlCQUFJO0lBQ1IsMEJBQWU7OztJQWJSLGVBQXdCO0lBQXhCLDZDQUF3QjtJQUVuQixl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QUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDO3NGQXZKUSxxQkFBcUI7b0VBQXJCLHFCQUFxQjs7O1lDZGxDLHdGQTRDZTtZQUVmLHdGQUllO1lBRWYsd0ZBU2U7O1lBN0RBLHlDQUFvQjtZQThDcEIsZUFBbUI7WUFBbkIsd0NBQW1CO1lBTW5CLGVBQStEO1lBQS9ELDRGQUErRDs7O1NEdENqRSxxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQUxqQyxTQUFTOzJCQUNJLG9CQUFvQjttT0FNZixJQUFJO2tCQUFsQixLQUFLO21CQUFDLE1BQU07WUFDVSxZQUFZO2tCQUFsQyxLQUFLO21CQUFDLGNBQWM7WUFDTixJQUFJO2tCQUFsQixLQUFLO21CQUFDLE1BQU07WUFDRyxLQUFLO2tCQUFwQixLQUFLO21CQUFDLE9BQU87WUFDRyxNQUFNO2tCQUF0QixLQUFLO21CQUFDLFFBQVE7WUFDRSxNQUFNO2tCQUF0QixLQUFLO21CQUFDLFFBQVE7WUFDQyxLQUFLO2tCQUFwQixLQUFLO21CQUFDLE9BQU87WUFDVSxhQUFhO2tCQUFwQyxLQUFLO21CQUFDLGVBQWU7WUFFQSxLQUFLO2tCQUExQixXQUFXO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQsIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFRElUQUJMRV9WSUVXX01PREVTLCBGaWVsZCwgUmVjb3JkLCBTdHJpbmdNYXAsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7TW9kdWxlTmF2aWdhdGlvbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7RHluYW1pY0xhYmVsU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGFuZ3VhZ2UvZHluYW1pYy1sYWJlbC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gICAgTGlua1JvdXRlQXN5bmNBY3Rpb25TZXJ2aWNlXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbGluay1yb3V0ZS1hc3luYy1hY3Rpb24vbGluay1yb3V0ZS1hc3luYy1hY3Rpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1keW5hbWljLWZpZWxkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCdtb2RlJykgbW9kZTogc3RyaW5nO1xuICAgIEBJbnB1dCgnb3JpZ2luYWxNb2RlJykgb3JpZ2luYWxNb2RlOiBzdHJpbmc7XG4gICAgQElucHV0KCd0eXBlJykgdHlwZTogc3RyaW5nO1xuICAgIEBJbnB1dCgnZmllbGQnKSBmaWVsZDogRmllbGQ7XG4gICAgQElucHV0KCdyZWNvcmQnKSByZWNvcmQ6IFJlY29yZCA9IG51bGw7XG4gICAgQElucHV0KCdwYXJlbnQnKSBwYXJlbnQ6IFJlY29yZCA9IG51bGw7XG4gICAgQElucHV0KCdrbGFzcycpIGtsYXNzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0gbnVsbDtcbiAgICBASW5wdXQoJ2NvbXBvbmVudFR5cGUnKSBjb21wb25lbnRUeXBlOiBUeXBlPGFueT47XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgY2xhc3MgPSAnZHluYW1pYy1maWVsZCc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24sXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBkeW5hbWljTGFiZWxTZXJ2aWNlOiBEeW5hbWljTGFiZWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbGlua1JvdXRlQXN5bmNBY3Rpb25TZXJ2aWNlOiBMaW5rUm91dGVBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICAgKSB7XG4gICAgfVxuXG4gICAgZ2V0IGdldFJlbGF0ZUxpbmsoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGxpbmtNb2R1bGUgPSB0aGlzLmZpZWxkLmRlZmluaXRpb24ubW9kdWxlO1xuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkLmRlZmluaXRpb24udHlwZV9uYW1lID09PSAncGFyZW50X3R5cGUnKSB7XG4gICAgICAgICAgICBsaW5rTW9kdWxlID0gdGhpcy5yZWNvcmQuYXR0cmlidXRlcy5wYXJlbnRfdHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkLmRlZmluaXRpb24uaWRfbmFtZSAmJiBsaW5rTW9kdWxlKSB7XG4gICAgICAgICAgICBjb25zdCBtb2R1bGVOYW1lID0gdGhpcy5tb2R1bGVOYW1lTWFwcGVyLnRvRnJvbnRlbmQobGlua01vZHVsZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uLmdldFJlY29yZFJvdXRlckxpbmsoXG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZC5hdHRyaWJ1dGVzW3RoaXMuZmllbGQuZGVmaW5pdGlvbi5pZF9uYW1lXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRIb3N0Q2xhc3MoKTtcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlTW9kZXMgPSB0aGlzPy5maWVsZD8uZGVmYXVsdFZhbHVlTW9kZXMgPz8gWydjcmVhdGUnXTtcbiAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZU1vZGVzLmluY2x1ZGVzKHRoaXMub3JpZ2luYWxNb2RlIGFzIFZpZXdNb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5pbml0RGVmYXVsdFZhbHVlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0xpbmsoKTogYm9vbGVhbiB7XG5cbiAgICAgICAgaWYgKEVESVRBQkxFX1ZJRVdfTU9ERVMuaW5jbHVkZXModGhpcy5tb2RlIGFzIFZpZXdNb2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkIHx8ICF0aGlzLnJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3JlbGF0ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhKHRoaXM/LmZpZWxkPy5tZXRhZGF0YSAmJiB0aGlzPy5maWVsZD8ubWV0YWRhdGE/LmxpbmspO1xuICAgIH1cblxuICAgIGhhc09uQ2xpY2soKTogYm9vbGVhbiB7XG5cbiAgICAgICAgY29uc3QgZmllbGRNZXRhZGF0YSA9IHRoaXM/LmZpZWxkPy5tZXRhZGF0YSA/PyB7fTtcbiAgICAgICAgY29uc3QgbGlua0FzeW5jQWN0aW9uID0gZmllbGRNZXRhZGF0YT8ubGlua0FzeW5jQWN0aW9uID8/IG51bGw7XG4gICAgICAgIGNvbnN0IGxpbmtPbkNsaWNrID0gZmllbGRNZXRhZGF0YT8ub25DbGljayA/PyBudWxsO1xuXG4gICAgICAgIHJldHVybiAhIShsaW5rQXN5bmNBY3Rpb24gfHwgbGlua09uQ2xpY2spO1xuICAgIH1cblxuICAgIGlzRWRpdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ2VkaXQnIHx8IHRoaXMubW9kZSA9PT0gJ2ZpbHRlcic7XG4gICAgfVxuXG4gICAgZ2V0TGluaygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy50eXBlID09PSAncmVsYXRlJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVsYXRlTGluaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkTWV0YWRhdGEgPSB0aGlzPy5maWVsZD8ubWV0YWRhdGEgPz8gbnVsbDtcbiAgICAgICAgY29uc3QgbGlua1JvdXRlID0gZmllbGRNZXRhZGF0YS5saW5rUm91dGUgPz8gbnVsbDtcbiAgICAgICAgaWYgKGZpZWxkTWV0YWRhdGEgJiYgbGlua1JvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5keW5hbWljTGFiZWxTZXJ2aWNlLnBhcnNlKGxpbmtSb3V0ZSwge30sIHRoaXMucmVjb3JkLmZpZWxkcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uLmdldFJlY29yZFJvdXRlckxpbmsodGhpcy5yZWNvcmQubW9kdWxlLCB0aGlzLnJlY29yZC5pZCk7XG4gICAgfVxuXG4gICAgZ2V0TWVzc2FnZUNvbnRleHQoaXRlbTogYW55LCByZWNvcmQ6IFJlY29yZCk6IFN0cmluZ01hcCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBpdGVtICYmIGl0ZW0ubWVzc2FnZSAmJiBpdGVtLm1lc3NhZ2UuY29udGV4dCB8fCB7fTtcbiAgICAgICAgY29udGV4dC5tb2R1bGUgPSAocmVjb3JkICYmIHJlY29yZC5tb2R1bGUpIHx8ICcnO1xuXG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cblxuICAgIGdldE1lc3NhZ2VMYWJlbEtleShpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKGl0ZW0gJiYgaXRlbS5tZXNzYWdlICYmIGl0ZW0ubWVzc2FnZS5sYWJlbEtleSkgfHwgJyc7XG4gICAgfVxuXG4gICAgb25DbGljaygpOiBib29sZWFuIHtcblxuICAgICAgICBjb25zdCBmaWVsZE1ldGFkYXRhID0gdGhpcz8uZmllbGQ/Lm1ldGFkYXRhID8/IG51bGw7XG4gICAgICAgIGlmIChmaWVsZE1ldGFkYXRhICYmIGZpZWxkTWV0YWRhdGEub25DbGljaykge1xuICAgICAgICAgICAgdGhpcy5maWVsZC5tZXRhZGF0YS5vbkNsaWNrKHRoaXMuZmllbGQsIHRoaXMucmVjb3JkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxpbmtBc3luY0FjdGlvbiA9IGZpZWxkTWV0YWRhdGEubGlua0FzeW5jQWN0aW9uID8/IG51bGw7XG4gICAgICAgIGlmIChmaWVsZE1ldGFkYXRhICYmIGxpbmtBc3luY0FjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5saW5rUm91dGVBc3luY0FjdGlvblNlcnZpY2UucnVuKGxpbmtBc3luY0FjdGlvbiwgdGhpcy5maWVsZCwgdGhpcy5yZWNvcmQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLmdldExpbmsoKSkudGhlbigpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEhvc3RDbGFzcygpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgICAgICBjbGFzc2VzLnB1c2goJ2R5bmFtaWMtZmllbGQnKTtcblxuICAgICAgICBpZiAodGhpcy5tb2RlKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ2R5bmFtaWMtZmllbGQtbW9kZS0nICsgdGhpcy5tb2RlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdkeW5hbWljLWZpZWxkLXR5cGUtJyArIHRoaXMudHlwZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkICYmIHRoaXMuZmllbGQubmFtZSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdkeW5hbWljLWZpZWxkLW5hbWUtJyArIHRoaXMuZmllbGQubmFtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xhc3MgPSBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdERlZmF1bHRWYWx1ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gdGhpcz8uZmllbGQ/LmRlZmF1bHQgPz8gdGhpcz8uZmllbGQ/LmRlZmluaXRpb24/LmRlZmF1bHQgPz8gbnVsbDtcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkLnZhbHVlICYmIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5maWVsZC52YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZmllbGQ/LmZvcm1Db250cm9sPy5zZXRWYWx1ZShkZWZhdWx0VmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmllbGQudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaWVsZC5sb2FkaW5nXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc09uQ2xpY2soKVwiPlxuICAgICAgICA8YSAoY2xpY2spPVwib25DbGljaygpXCIgY2xhc3M9XCJjbGlja2FibGUgZmllbGQtbGlua1wiPlxuICAgICAgICAgICAgPG5kYy1keW5hbWljXG4gICAgICAgICAgICAgICAgW25kY0R5bmFtaWNDb21wb25lbnRdPVwiY29tcG9uZW50VHlwZVwiXG4gICAgICAgICAgICAgICAgW25kY0R5bmFtaWNJbnB1dHNdPVwie1xuICAgICAgICAgICAgICAgICdtb2RlJzogbW9kZSxcbiAgICAgICAgICAgICAgICAnb3JpZ2luYWxNb2RlJzogb3JpZ2luYWxNb2RlLFxuICAgICAgICAgICAgICAgICdmaWVsZCc6IGZpZWxkLFxuICAgICAgICAgICAgICAgICdrbGFzcyc6IGtsYXNzLFxuICAgICAgICAgICAgICAgICdyZWNvcmQnOiByZWNvcmQsXG4gICAgICAgICAgICAgICAgJ3BhcmVudCc6IHBhcmVudFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+PC9uZGMtZHluYW1pYz5cbiAgICAgICAgPC9hPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0xpbmsoKSAmJiAhaGFzT25DbGljaygpXCI+XG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cImdldExpbmsoKVwiIGNsYXNzPVwiZmllbGQtbGlua1wiPlxuICAgICAgICAgICAgPG5kYy1keW5hbWljXG4gICAgICAgICAgICAgICAgW25kY0R5bmFtaWNDb21wb25lbnRdPVwiY29tcG9uZW50VHlwZVwiXG4gICAgICAgICAgICAgICAgW25kY0R5bmFtaWNJbnB1dHNdPVwie1xuICAgICAgICAgICAgICAgICdtb2RlJzogbW9kZSxcbiAgICAgICAgICAgICAgICAnb3JpZ2luYWxNb2RlJzogb3JpZ2luYWxNb2RlLFxuICAgICAgICAgICAgICAgICdmaWVsZCc6IGZpZWxkLFxuICAgICAgICAgICAgICAgICdrbGFzcyc6IGtsYXNzLFxuICAgICAgICAgICAgICAgICdyZWNvcmQnOiByZWNvcmQsXG4gICAgICAgICAgICAgICAgJ3BhcmVudCc6IHBhcmVudFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+PC9uZGMtZHluYW1pYz5cbiAgICAgICAgPC9hPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNMaW5rKCkgJiYgIWhhc09uQ2xpY2soKVwiPlxuICAgICAgICA8bmRjLWR5bmFtaWNcbiAgICAgICAgICAgIFtuZGNEeW5hbWljQ29tcG9uZW50XT1cImNvbXBvbmVudFR5cGVcIlxuICAgICAgICAgICAgW25kY0R5bmFtaWNJbnB1dHNdPVwie1xuICAgICAgICAgICAgJ21vZGUnOiBtb2RlLFxuICAgICAgICAgICAgJ29yaWdpbmFsTW9kZSc6IG9yaWdpbmFsTW9kZSxcbiAgICAgICAgICAgICdmaWVsZCc6IGZpZWxkLFxuICAgICAgICAgICAgJ2tsYXNzJzoga2xhc3MsXG4gICAgICAgICAgICAncmVjb3JkJzogcmVjb3JkLFxuICAgICAgICAgICAgJ3BhcmVudCc6IHBhcmVudFxuICAgICAgICB9XCJcbiAgICAgICAgPjwvbmRjLWR5bmFtaWM+XG4gICAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLmxvYWRpbmdcIj5cbiAgIDxkaXYgY2xhc3M9IFwiZHluYW1pYy1maWVsZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTEgdGV4dC1icmVhayByb3VuZGVkIGJveC1sb2FkaW5nIHNrZWxldG9uLWZpZWxkLWNvbnRlbnRcIj48L2Rpdj5cbiAgIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJpc0VkaXQoKSAmJiBmaWVsZC5mb3JtQ29udHJvbCAmJiBmaWVsZC5mb3JtQ29udHJvbC5lcnJvcnNcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQuZm9ybUNvbnRyb2wuaW52YWxpZCAmJiBmaWVsZC5mb3JtQ29udHJvbC50b3VjaGVkXCI+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmllbGQuZm9ybUNvbnRyb2wuZXJyb3JzIHwga2V5dmFsdWVcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPlxuICAgICAgICAgICAgPHNjcm0tZHluYW1pYy1sYWJlbCBbY29udGV4dF09XCJnZXRNZXNzYWdlQ29udGV4dChpdGVtLnZhbHVlLCByZWNvcmQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkc109XCJ7ZmllbGQ6IGZpZWxkfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEtleV09XCJnZXRNZXNzYWdlTGFiZWxLZXkoaXRlbS52YWx1ZSlcIj5cbiAgICAgICAgICAgIDwvc2NybS1keW5hbWljLWxhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuIl19