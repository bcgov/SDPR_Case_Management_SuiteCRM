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
import { Component, HostBinding, Input } from '@angular/core';
import { viewFieldsMap } from './field.manifest';
import { FieldRegistry } from './field.registry';
import * as i0 from "@angular/core";
import * as i1 from "./field.registry";
import * as i2 from "@angular/common";
import * as i3 from "./dynamic-field/dynamic-field.component";
import * as i4 from "./line-items/line-items.component";
function FieldComponent_ng_container_0_scrm_dynamic_field_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-dynamic-field", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("componentType", ctx_r1.componentType)("field", ctx_r1.field)("klass", ctx_r1.klass)("mode", ctx_r1.componentMode)("originalMode", ctx_r1.mode)("record", ctx_r1.record)("parent", ctx_r1.record)("type", ctx_r1.type);
} }
function FieldComponent_ng_container_0_scrm_line_items_field_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-line-items-field", 4);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("field", ctx_r2.field)("klass", ctx_r2.klass)("mode", ctx_r2.componentMode)("originalMode", ctx_r2.mode)("record", ctx_r2.record)("parent", ctx_r2.record);
} }
function FieldComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, FieldComponent_ng_container_0_scrm_dynamic_field_1_Template, 1, 8, "scrm-dynamic-field", 1);
    i0.ɵɵtemplate(2, FieldComponent_ng_container_0_scrm_line_items_field_2_Template, 1, 6, "scrm-line-items-field", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.type !== "line-items");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.type === "line-items");
} }
class FieldComponent {
    constructor(registry) {
        this.registry = registry;
        this.record = null;
        this.klass = null;
        this.class = 'field';
        this.map = viewFieldsMap;
    }
    ngOnInit() {
        this.setHostClass();
    }
    get componentMode() {
        let mode = this.mode;
        if (mode === 'create') {
            mode = 'edit';
        }
        if (['edit', 'filter'].includes(mode) && this.field.readonly) {
            mode = 'detail';
        }
        return mode;
    }
    get componentType() {
        let module = (this.record && this.record.module) || 'default';
        const displayType = (this.field.definition && this.field.definition.displayType) || '';
        return this.registry.getDisplayType(module, this.type, displayType, this.componentMode, this.field.name);
    }
    setHostClass() {
        const classes = [];
        classes.push('field');
        if (this.mode) {
            classes.push('field-mode-' + this.mode);
        }
        if (this.type) {
            classes.push('field-type-' + this.type);
        }
        if (this.field && this.field.name) {
            classes.push('field-name-' + this.field.name);
        }
        this.class = classes.join(' ');
    }
    static { this.ɵfac = function FieldComponent_Factory(t) { return new (t || FieldComponent)(i0.ɵɵdirectiveInject(i1.FieldRegistry)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldComponent, selectors: [["scrm-field"]], hostVars: 2, hostBindings: function FieldComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.class);
        } }, inputs: { mode: "mode", type: "type", field: "field", record: "record", klass: "klass" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "componentType", "field", "klass", "mode", "originalMode", "record", "parent", "type", 4, "ngIf"], [3, "field", "klass", "mode", "originalMode", "record", "parent", 4, "ngIf"], [3, "componentType", "field", "klass", "mode", "originalMode", "record", "parent", "type"], [3, "field", "klass", "mode", "originalMode", "record", "parent"]], template: function FieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, FieldComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.field && ctx.field.display !== "none");
        } }, dependencies: [i2.NgIf, i3.DynamicFieldComponent, i4.LineItemsComponent], encapsulation: 2 }); }
}
export { FieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-field', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"field && field.display !== 'none'\">\n    <scrm-dynamic-field *ngIf=\"type !== 'line-items'\"\n                        [componentType]=\"componentType\"\n                        [field]=\"field\"\n                        [klass]=\"klass\"\n                        [mode]=\"componentMode\"\n                        [originalMode]=\"mode\"\n                        [record]=\"record\"\n                        [parent]=\"record\"\n                        [type]=\"type\">\n    </scrm-dynamic-field>\n    <scrm-line-items-field *ngIf=\"type === 'line-items'\"\n                           [field]=\"field\"\n                           [klass]=\"klass\"\n                           [mode]=\"componentMode\"\n                           [originalMode]=\"mode\"\n                           [record]=\"record\"\n                           [parent]=\"record\">\n    </scrm-line-items-field>\n</ng-container>\n\n" }]
    }], function () { return [{ type: i1.FieldRegistry }]; }, { mode: [{
            type: Input,
            args: ['mode']
        }], type: [{
            type: Input,
            args: ['type']
        }], field: [{
            type: Input,
            args: ['field']
        }], record: [{
            type: Input,
            args: ['record']
        }], klass: [{
            type: Input,
            args: ['klass']
        }], class: [{
            type: HostBinding,
            args: ['class']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9maWVsZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2ZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7OztJQ0QzQyx3Q0FTcUI7OztJQVJELG9EQUErQix1QkFBQSx1QkFBQSw4QkFBQSw2QkFBQSx5QkFBQSx5QkFBQSxxQkFBQTs7O0lBU25ELDJDQU93Qjs7O0lBTkQsb0NBQWUsdUJBQUEsOEJBQUEsNkJBQUEseUJBQUEseUJBQUE7OztJQVoxQyw2QkFBd0Q7SUFDcEQsNEdBU3FCO0lBQ3JCLGtIQU93QjtJQUM1QiwwQkFBZTs7O0lBbEJVLGVBQTJCO0lBQTNCLG1EQUEyQjtJQVV4QixlQUEyQjtJQUEzQixtREFBMkI7O0FEUHZELE1BS2EsY0FBYztJQVV2QixZQUFzQixRQUF1QjtRQUF2QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBTjVCLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdkIsVUFBSyxHQUEyQixJQUFJLENBQUM7UUFDL0IsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUV0QyxRQUFHLEdBQUcsYUFBYSxDQUFDO0lBSXBCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDYixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXJCLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNuQixJQUFJLEdBQUcsTUFBTSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDMUQsSUFBSSxHQUFHLFFBQVEsQ0FBQztTQUNuQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDYixJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUM7UUFFOUQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkYsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFFTSxZQUFZO1FBQ2YsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzFDO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzFDO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDaEQ7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQzsrRUF6RFEsY0FBYztvRUFBZCxjQUFjOzs7WUNUM0IsaUZBbUJlOztZQW5CQSxnRUFBdUM7OztTRFN6QyxjQUFjO3VGQUFkLGNBQWM7Y0FMMUIsU0FBUzsyQkFDSSxZQUFZO2dFQUtQLElBQUk7a0JBQWxCLEtBQUs7bUJBQUMsTUFBTTtZQUNFLElBQUk7a0JBQWxCLEtBQUs7bUJBQUMsTUFBTTtZQUNHLEtBQUs7a0JBQXBCLEtBQUs7bUJBQUMsT0FBTztZQUNHLE1BQU07a0JBQXRCLEtBQUs7bUJBQUMsUUFBUTtZQUNDLEtBQUs7a0JBQXBCLEtBQUs7bUJBQUMsT0FBTztZQUNRLEtBQUs7a0JBQTFCLFdBQVc7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dmlld0ZpZWxkc01hcH0gZnJvbSAnLi9maWVsZC5tYW5pZmVzdCc7XG5pbXBvcnQge0ZpZWxkLCBSZWNvcmQsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtGaWVsZFJlZ2lzdHJ5fSBmcm9tICcuL2ZpZWxkLnJlZ2lzdHJ5JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWZpZWxkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgnbW9kZScpIG1vZGU6IHN0cmluZztcbiAgICBASW5wdXQoJ3R5cGUnKSB0eXBlOiBzdHJpbmc7XG4gICAgQElucHV0KCdmaWVsZCcpIGZpZWxkOiBGaWVsZDtcbiAgICBASW5wdXQoJ3JlY29yZCcpIHJlY29yZDogUmVjb3JkID0gbnVsbDtcbiAgICBASW5wdXQoJ2tsYXNzJykga2xhc3M6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSBudWxsO1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKSBjbGFzcyA9ICdmaWVsZCc7XG5cbiAgICBtYXAgPSB2aWV3RmllbGRzTWFwO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlZ2lzdHJ5OiBGaWVsZFJlZ2lzdHJ5KSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRIb3N0Q2xhc3MoKTtcbiAgICB9XG5cbiAgICBnZXQgY29tcG9uZW50TW9kZSgpOiBzdHJpbmcge1xuICAgICAgICBsZXQgbW9kZSA9IHRoaXMubW9kZTtcblxuICAgICAgICBpZiAobW9kZSA9PT0gJ2NyZWF0ZScpIHtcbiAgICAgICAgICAgIG1vZGUgPSAnZWRpdCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoWydlZGl0JywgJ2ZpbHRlciddLmluY2x1ZGVzKG1vZGUpICYmIHRoaXMuZmllbGQucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIG1vZGUgPSAnZGV0YWlsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb2RlO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnRUeXBlKCk6IGFueSB7XG4gICAgICAgIGxldCBtb2R1bGUgPSAodGhpcy5yZWNvcmQgJiYgdGhpcy5yZWNvcmQubW9kdWxlKSB8fCAnZGVmYXVsdCc7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheVR5cGUgPSAodGhpcy5maWVsZC5kZWZpbml0aW9uICYmIHRoaXMuZmllbGQuZGVmaW5pdGlvbi5kaXNwbGF5VHlwZSkgfHwgJyc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0cnkuZ2V0RGlzcGxheVR5cGUobW9kdWxlLCB0aGlzLnR5cGUsIGRpc3BsYXlUeXBlLCB0aGlzLmNvbXBvbmVudE1vZGUsIHRoaXMuZmllbGQubmFtZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEhvc3RDbGFzcygpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgICAgICBjbGFzc2VzLnB1c2goJ2ZpZWxkJyk7XG5cbiAgICAgICAgaWYgKHRoaXMubW9kZSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdmaWVsZC1tb2RlLScgKyB0aGlzLm1vZGUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ2ZpZWxkLXR5cGUtJyArIHRoaXMudHlwZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkICYmIHRoaXMuZmllbGQubmFtZSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdmaWVsZC1uYW1lLScgKyB0aGlzLmZpZWxkLm5hbWUpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsYXNzID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkICYmIGZpZWxkLmRpc3BsYXkgIT09ICdub25lJ1wiPlxuICAgIDxzY3JtLWR5bmFtaWMtZmllbGQgKm5nSWY9XCJ0eXBlICE9PSAnbGluZS1pdGVtcydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudFR5cGVdPVwiY29tcG9uZW50VHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2tsYXNzXT1cImtsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFttb2RlXT1cImNvbXBvbmVudE1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW29yaWdpbmFsTW9kZV09XCJtb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyZWNvcmRdPVwicmVjb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwYXJlbnRdPVwicmVjb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cInR5cGVcIj5cbiAgICA8L3Njcm0tZHluYW1pYy1maWVsZD5cbiAgICA8c2NybS1saW5lLWl0ZW1zLWZpZWxkICpuZ0lmPVwidHlwZSA9PT0gJ2xpbmUtaXRlbXMnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZF09XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBba2xhc3NdPVwia2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW21vZGVdPVwiY29tcG9uZW50TW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbb3JpZ2luYWxNb2RlXT1cIm1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlY29yZF09XCJyZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BhcmVudF09XCJyZWNvcmRcIj5cbiAgICA8L3Njcm0tbGluZS1pdGVtcy1maWVsZD5cbjwvbmctY29udGFpbmVyPlxuXG4iXX0=