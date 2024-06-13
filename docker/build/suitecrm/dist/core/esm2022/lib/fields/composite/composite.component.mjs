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
import { Component } from '@angular/core';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { StandardFieldRegistry } from '../standard-field.registry';
import { RecordManager } from '../../services/record/record.manager';
import { BaseComposite } from '../base/base-composite.component';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../services/formatters/data-type.formatter.service";
import * as i2 from "../standard-field.registry";
import * as i3 from "../../services/record/record.manager";
import * as i4 from "../field-logic/field-logic.manager";
import * as i5 from "../field-logic-display/field-logic-display.manager";
import * as i6 from "@angular/common";
import * as i7 from "../../components/label/label.component";
import * as i8 from "../dynamic-field/dynamic-field.component";
function CompositeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-label", 1);
    i0.ɵɵelementContainerEnd();
} }
function CompositeComponent_ng_container_1_div_2_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵelement(1, "scrm-label", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const attribute_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", attribute_r3.labelKey)("module", ctx_r4.getModule());
} }
function CompositeComponent_ng_container_1_div_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵelement(1, "scrm-dynamic-field", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const attribute_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("componentType", ctx_r5.getComponentType(attribute_r3.type, attribute_r3.definition))("field", attribute_r3)("klass", ctx_r5.klass)("mode", ctx_r5.getMode())("originalMode", ctx_r5.originalMode)("record", ctx_r5.record)("parent", ctx_r5.parent)("type", attribute_r3.type);
} }
function CompositeComponent_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "span", 4);
    i0.ɵɵtemplate(2, CompositeComponent_ng_container_1_div_2_label_2_Template, 2, 2, "label", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CompositeComponent_ng_container_1_div_2_span_3_Template, 2, 8, "span", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const attribute_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("flex-fill", ctx_r2.mode === "edit" && ctx_r2.getDirection() === "flex-row")("align-self-start", ctx_r2.getDirection() === "flex-row" && attribute_r3.labelKey && ctx_r2.showLabel(attribute_r3));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", attribute_r3.labelKey && ctx_r2.showLabel(attribute_r3));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", attribute_r3.type);
} }
function CompositeComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CompositeComponent_ng_container_1_div_2_Template, 4, 6, "div", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("d-flex ", ctx_r1.getDirection(), " justify-content-start align-items-end field-group h-100 composite-field-wrapper");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.getAttributes());
} }
class CompositeComponent extends BaseComposite {
    constructor(typeFormatter, registry, recordManager, logic, logicDisplay) {
        super(typeFormatter, registry, recordManager, logic, logicDisplay);
        this.typeFormatter = typeFormatter;
        this.registry = registry;
        this.recordManager = recordManager;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    static { this.ɵfac = function CompositeComponent_Factory(t) { return new (t || CompositeComponent)(i0.ɵɵdirectiveInject(i1.DataTypeFormatter), i0.ɵɵdirectiveInject(i2.StandardFieldRegistry), i0.ɵɵdirectiveInject(i3.RecordManager), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CompositeComponent, selectors: [["scrm-composite-field"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[4, "ngIf"], ["labelKey", "LBL_BAD_GROUP_FIELD_CONFIG"], ["class", "field-group-item d-flex flex-column justify-content-end h-100 w-100", 3, "flex-fill", "align-self-start", 4, "ngFor", "ngForOf"], [1, "field-group-item", "d-flex", "flex-column", "justify-content-end", "h-100", "w-100"], [1, "field-group-label", "pt-2", "pr-1"], ["class", "field-group-field pr-1 pb-1 composite-field", 4, "ngIf"], [3, "labelKey", "module"], [1, "field-group-field", "pr-1", "pb-1", "composite-field"], [3, "componentType", "field", "klass", "mode", "originalMode", "record", "parent", "type"]], template: function CompositeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CompositeComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
            i0.ɵɵtemplate(1, CompositeComponent_ng_container_1_Template, 3, 4, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.isConfigured());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isConfigured());
        } }, dependencies: [i6.NgForOf, i6.NgIf, i7.LabelComponent, i8.DynamicFieldComponent], encapsulation: 2 }); }
}
export { CompositeComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CompositeComponent, [{
        type: Component,
        args: [{ selector: 'scrm-composite-field', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"!isConfigured()\">\n    <scrm-label labelKey=\"LBL_BAD_GROUP_FIELD_CONFIG\"></scrm-label>\n</ng-container>\n\n<ng-container *ngIf=\"isConfigured()\">\n    <div class=\"d-flex {{getDirection()}} justify-content-start align-items-end field-group h-100 composite-field-wrapper\">\n\n        <div *ngFor=\"let attribute of getAttributes()\"\n             [class.flex-fill]=\"mode ==='edit' && getDirection() === 'flex-row'\"\n             [class.align-self-start]=\"getDirection() === 'flex-row' && attribute.labelKey && showLabel(attribute)\"\n             class=\"field-group-item d-flex flex-column justify-content-end h-100 w-100\">\n\n            <!-- LABEL -->\n            <span class=\"field-group-label pt-2 pr-1\">\n                <label *ngIf=\"attribute.labelKey && showLabel(attribute)\">\n                    <scrm-label [labelKey]=\"attribute.labelKey\" [module]=\"getModule()\"></scrm-label>\n                </label>\n            </span>\n\n            <!-- VALUE -->\n            <span *ngIf=\"attribute.type\" class=\"field-group-field pr-1 pb-1 composite-field\">\n\n                <scrm-dynamic-field [componentType]=\"getComponentType(attribute.type, attribute.definition)\"\n                                    [field]=\"attribute\"\n                                    [klass]=\"klass\"\n                                    [mode]=\"getMode()\"\n                                    [originalMode]=\"originalMode\"\n                                    [record]=\"record\"\n                                    [parent]=\"parent\"\n                                    [type]=\"attribute.type\">\n                </scrm-dynamic-field>\n\n            </span>\n        </div>\n    </div>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.DataTypeFormatter }, { type: i2.StandardFieldRegistry }, { type: i3.RecordManager }, { type: i4.FieldLogicManager }, { type: i5.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvY29tcG9zaXRlL2NvbXBvc2l0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2NvbXBvc2l0ZS9jb21wb3NpdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDeEYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7Ozs7Ozs7SUNMNUYsNkJBQXNDO0lBQ2xDLGdDQUErRDtJQUNuRSwwQkFBZTs7O0lBWUMsNkJBQTBEO0lBQ3RELGdDQUFnRjtJQUNwRixpQkFBUTs7OztJQURRLGVBQStCO0lBQS9CLGdEQUErQiw4QkFBQTs7O0lBS25ELCtCQUFpRjtJQUU3RSx3Q0FRcUI7SUFFekIsaUJBQU87Ozs7SUFWaUIsZUFBd0U7SUFBeEUsbUdBQXdFLHVCQUFBLHVCQUFBLDBCQUFBLHFDQUFBLHlCQUFBLHlCQUFBLDJCQUFBOzs7SUFmcEcsOEJBR2lGLGNBQUE7SUFJekUsNEZBRVE7SUFDWixpQkFBTztJQUdQLDBGQVlPO0lBQ1gsaUJBQU07Ozs7SUF6QkQsMkZBQW1FLHFIQUFBO0lBTXhELGVBQWdEO0lBQWhELDhFQUFnRDtJQU1yRCxlQUFvQjtJQUFwQix3Q0FBb0I7OztJQWhCdkMsNkJBQXFDO0lBQ2pDLDJCQUF1SDtJQUVuSCxrRkEwQk07SUFDVixpQkFBTTtJQUNWLDBCQUFlOzs7SUE5Qk4sZUFBaUg7SUFBakgsK0lBQWlIO0lBRXZGLGVBQWtCO0lBQWxCLGdEQUFrQjs7QURBckQsTUFLYSxrQkFBbUIsU0FBUSxhQUFhO0lBRWpELFlBQ2MsYUFBZ0MsRUFDaEMsUUFBK0IsRUFDL0IsYUFBNEIsRUFDNUIsS0FBd0IsRUFDeEIsWUFBc0M7UUFFaEQsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQU56RCxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUFDL0Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQTBCO0lBR3BELENBQUM7bUZBVlEsa0JBQWtCO29FQUFsQixrQkFBa0I7WUNaL0IscUZBRWU7WUFFZixxRkErQmU7O1lBbkNBLDBDQUFxQjtZQUlyQixlQUFvQjtZQUFwQix5Q0FBb0I7OztTRFF0QixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUw5QixTQUFTOzJCQUNJLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTdGFuZGFyZEZpZWxkUmVnaXN0cnl9IGZyb20gJy4uL3N0YW5kYXJkLWZpZWxkLnJlZ2lzdHJ5JztcbmltcG9ydCB7UmVjb3JkTWFuYWdlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlY29yZC5tYW5hZ2VyJztcbmltcG9ydCB7QmFzZUNvbXBvc2l0ZX0gZnJvbSAnLi4vYmFzZS9iYXNlLWNvbXBvc2l0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5TWFuYWdlcn0gZnJvbSAnLi4vZmllbGQtbG9naWMtZGlzcGxheS9maWVsZC1sb2dpYy1kaXNwbGF5Lm1hbmFnZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tY29tcG9zaXRlLWZpZWxkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9zaXRlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb3NpdGUge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIHJlZ2lzdHJ5OiBTdGFuZGFyZEZpZWxkUmVnaXN0cnksXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRNYW5hZ2VyOiBSZWNvcmRNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIodHlwZUZvcm1hdHRlciwgcmVnaXN0cnksIHJlY29yZE1hbmFnZXIsIGxvZ2ljLCBsb2dpY0Rpc3BsYXkpO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0NvbmZpZ3VyZWQoKVwiPlxuICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX0JBRF9HUk9VUF9GSUVMRF9DT05GSUdcIj48L3Njcm0tbGFiZWw+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQ29uZmlndXJlZCgpXCI+XG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCB7e2dldERpcmVjdGlvbigpfX0ganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWVuZCBmaWVsZC1ncm91cCBoLTEwMCBjb21wb3NpdGUtZmllbGQtd3JhcHBlclwiPlxuXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGF0dHJpYnV0ZSBvZiBnZXRBdHRyaWJ1dGVzKClcIlxuICAgICAgICAgICAgIFtjbGFzcy5mbGV4LWZpbGxdPVwibW9kZSA9PT0nZWRpdCcgJiYgZ2V0RGlyZWN0aW9uKCkgPT09ICdmbGV4LXJvdydcIlxuICAgICAgICAgICAgIFtjbGFzcy5hbGlnbi1zZWxmLXN0YXJ0XT1cImdldERpcmVjdGlvbigpID09PSAnZmxleC1yb3cnICYmIGF0dHJpYnV0ZS5sYWJlbEtleSAmJiBzaG93TGFiZWwoYXR0cmlidXRlKVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJmaWVsZC1ncm91cC1pdGVtIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtZW5kIGgtMTAwIHctMTAwXCI+XG5cbiAgICAgICAgICAgIDwhLS0gTEFCRUwgLS0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpZWxkLWdyb3VwLWxhYmVsIHB0LTIgcHItMVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cImF0dHJpYnV0ZS5sYWJlbEtleSAmJiBzaG93TGFiZWwoYXR0cmlidXRlKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwiYXR0cmlidXRlLmxhYmVsS2V5XCIgW21vZHVsZV09XCJnZXRNb2R1bGUoKVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8IS0tIFZBTFVFIC0tPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJhdHRyaWJ1dGUudHlwZVwiIGNsYXNzPVwiZmllbGQtZ3JvdXAtZmllbGQgcHItMSBwYi0xIGNvbXBvc2l0ZS1maWVsZFwiPlxuXG4gICAgICAgICAgICAgICAgPHNjcm0tZHluYW1pYy1maWVsZCBbY29tcG9uZW50VHlwZV09XCJnZXRDb21wb25lbnRUeXBlKGF0dHJpYnV0ZS50eXBlLCBhdHRyaWJ1dGUuZGVmaW5pdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImF0dHJpYnV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBba2xhc3NdPVwia2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21vZGVdPVwiZ2V0TW9kZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcmlnaW5hbE1vZGVdPVwib3JpZ2luYWxNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWNvcmRdPVwicmVjb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwYXJlbnRdPVwicGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImF0dHJpYnV0ZS50eXBlXCI+XG4gICAgICAgICAgICAgICAgPC9zY3JtLWR5bmFtaWMtZmllbGQ+XG5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==