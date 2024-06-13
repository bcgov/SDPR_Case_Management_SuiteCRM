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
import { BaseFieldComponent } from '../base/base-field.component';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { StandardFieldRegistry } from '../standard-field.registry';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../services/formatters/data-type.formatter.service";
import * as i2 from "../standard-field.registry";
import * as i3 from "../field-logic/field-logic.manager";
import * as i4 from "../field-logic-display/field-logic-display.manager";
import * as i5 from "@angular/common";
import * as i6 from "../../components/label/label.component";
import * as i7 from "../dynamic-field/dynamic-field.component";
function GroupFieldComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-label", 1);
    i0.ɵɵelementContainerEnd();
} }
function GroupFieldComponent_ng_container_1_ng_container_2_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7)(1, "label");
    i0.ɵɵelement(2, "scrm-label", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const groupField_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", groupField_r3.labelKey)("module", ctx_r5.getModule());
} }
function GroupFieldComponent_ng_container_1_ng_container_2_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵelement(1, "scrm-dynamic-field", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const groupField_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("componentType", ctx_r6.getComponentType(groupField_r3.type, groupField_r3.definition))("field", groupField_r3)("klass", ctx_r6.klass)("mode", ctx_r6.mode)("originalMode", ctx_r6.originalMode)("record", ctx_r6.record)("parent", ctx_r6.parent)("type", groupField_r3.type);
} }
function GroupFieldComponent_ng_container_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, GroupFieldComponent_ng_container_1_ng_container_2_div_1_span_1_Template, 3, 2, "span", 5);
    i0.ɵɵtemplate(2, GroupFieldComponent_ng_container_1_ng_container_2_div_1_span_2_Template, 2, 8, "span", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const groupField_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("flex-fill", ctx_r4.mode === "edit" && ctx_r4.getDirection() === "flex-row")("h-100", ctx_r4.getDirection() === "flex-row");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", groupField_r3.labelKey && ctx_r4.showLabel(groupField_r3.definition.name));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", groupField_r3.type);
} }
function GroupFieldComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GroupFieldComponent_ng_container_1_ng_container_2_div_1_Template, 3, 6, "div", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const groupField_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.isModeEnabled(ctx_r2.mode, groupField_r3));
} }
function GroupFieldComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, GroupFieldComponent_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("d-flex ", ctx_r1.getDirection(), " justify-content-start align-items-start field-group h-100");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.getFields());
} }
class GroupFieldComponent extends BaseFieldComponent {
    constructor(typeFormatter, registry, logic, logicDisplay) {
        super(typeFormatter, logic, logicDisplay);
        this.typeFormatter = typeFormatter;
        this.registry = registry;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    getComponentType(type, definition) {
        let module = (this.record && this.record.module) || 'default';
        const displayType = (definition && definition.displayType) || '';
        return this.registry.getDisplayType(module, type, displayType, this.mode, this.field.name);
    }
    /**
     * Get the group fields from the record
     *
     * @returns {object} Field[]
     */
    getFields() {
        const fields = [];
        this.field.definition.layout.forEach(name => {
            if (!this.record.fields[name] || this.record.fields[name].display === 'none') {
                return;
            }
            fields.push(this.record.fields[name]);
        });
        return fields;
    }
    getModule() {
        if (!this.record) {
            return null;
        }
        return this.record.module;
    }
    /**
     * Get flex direction to be used
     *
     * @returns {string} direction
     */
    getDirection() {
        let direction = 'flex-column';
        if (this.field.definition.display === 'inline') {
            direction = 'flex-row';
        }
        return direction;
    }
    /**
     * Check if is configured
     *
     * @returns {boolean} is configured
     */
    isConfigured() {
        return this.hasDisplay() && this.hasLayout() && this.hasGroupFields();
    }
    showLabel(fieldName) {
        const definition = this.field.definition || null;
        const showLabel = definition.showLabel || null;
        if (!definition || !showLabel) {
            return false;
        }
        const showLabelOptions = definition.showLabel[this.mode] || null;
        // showLabel > viewMode not defined || defined without any values e.g. edit:
        if (!showLabelOptions || typeof (showLabelOptions) === 'undefined') {
            return false;
        }
        return (showLabelOptions.includes('*') || showLabelOptions.includes(fieldName));
    }
    isModeEnabled(mode, groupField) {
        const modes = groupField.definition.modes;
        if (!modes || modes.length < 1) {
            return true;
        }
        return modes.includes(mode);
    }
    /**
     * Check if groupFields are configured
     *
     * @returns {boolean} has groupFields
     */
    hasGroupFields() {
        return !!(this.field.definition.groupFields && Object.keys(this.field.definition.groupFields).length);
    }
    /**
     * Check if layout is configured
     *
     * @returns {boolean} has layout
     */
    hasLayout() {
        return !!(this.field.definition.layout && this.field.definition.layout.length);
    }
    /**
     * Check if display is configured
     *
     * @returns {boolean} has display
     */
    hasDisplay() {
        return !!this.field.definition.display;
    }
    static { this.ɵfac = function GroupFieldComponent_Factory(t) { return new (t || GroupFieldComponent)(i0.ɵɵdirectiveInject(i1.DataTypeFormatter), i0.ɵɵdirectiveInject(i2.StandardFieldRegistry), i0.ɵɵdirectiveInject(i3.FieldLogicManager), i0.ɵɵdirectiveInject(i4.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupFieldComponent, selectors: [["scrm-group-field"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[4, "ngIf"], ["labelKey", "LBL_BAD_GROUP_FIELD_CONFIG"], [4, "ngFor", "ngForOf"], ["class", "field-group-item d-flex flex-column justify-content-end w-100", 3, "flex-fill", "h-100", 4, "ngIf"], [1, "field-group-item", "d-flex", "flex-column", "justify-content-end", "w-100"], ["class", "field-group-label pt-2 pr-1", 4, "ngIf"], ["class", "field-group-field pr-1", 4, "ngIf"], [1, "field-group-label", "pt-2", "pr-1"], [3, "labelKey", "module"], [1, "field-group-field", "pr-1"], [3, "componentType", "field", "klass", "mode", "originalMode", "record", "parent", "type"]], template: function GroupFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, GroupFieldComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
            i0.ɵɵtemplate(1, GroupFieldComponent_ng_container_1_Template, 3, 4, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.isConfigured());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isConfigured());
        } }, dependencies: [i5.NgForOf, i5.NgIf, i6.LabelComponent, i7.DynamicFieldComponent], encapsulation: 2 }); }
}
export { GroupFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-group-field', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"!isConfigured()\">\n    <scrm-label labelKey=\"LBL_BAD_GROUP_FIELD_CONFIG\"></scrm-label>\n</ng-container>\n\n<ng-container *ngIf=\"isConfigured()\">\n    <div class=\"d-flex {{getDirection()}} justify-content-start align-items-start field-group h-100\">\n\n        <ng-container *ngFor=\"let groupField of getFields()\">\n\n            <div *ngIf=\"isModeEnabled(mode, groupField)\"\n                 [class.flex-fill]=\"mode ==='edit' && getDirection() === 'flex-row'\"\n                 class=\"field-group-item d-flex flex-column justify-content-end w-100\"\n                 [class.h-100]=\"getDirection() === 'flex-row'\">\n\n                <!-- LABEL -->\n                <span *ngIf=\"groupField.labelKey && showLabel(groupField.definition.name)\"\n                      class=\"field-group-label pt-2 pr-1\">\n                    <label>\n                        <scrm-label [labelKey]=\"groupField.labelKey\" [module]=\"getModule()\"></scrm-label>\n                    </label>\n                </span>\n\n                <!-- VALUE -->\n                <span *ngIf=\"groupField.type\" class=\"field-group-field pr-1\">\n\n                    <scrm-dynamic-field [componentType]=\"getComponentType(groupField.type, groupField.definition)\"\n                                        [field]=\"groupField\"\n                                        [klass]=\"klass\"\n                                        [mode]=\"mode\"\n                                        [originalMode]=\"originalMode\"\n                                        [record]=\"record\"\n                                        [parent]=\"parent\"\n                                        [type]=\"groupField.type\">\n                    </scrm-dynamic-field>\n\n                </span>\n            </div>\n        </ng-container>\n\n    </div>\n</ng-container>\n\n\n" }]
    }], function () { return [{ type: i1.DataTypeFormatter }, { type: i2.StandardFieldRegistry }, { type: i3.FieldLogicManager }, { type: i4.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9ncm91cC1maWVsZC9ncm91cC1maWVsZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2dyb3VwLWZpZWxkL2dyb3VwLWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7Ozs7O0lDTDVGLDZCQUFzQztJQUNsQyxnQ0FBK0Q7SUFDbkUsMEJBQWU7OztJQWFDLCtCQUMwQyxZQUFBO0lBRWxDLGdDQUFpRjtJQUNyRixpQkFBUSxFQUFBOzs7O0lBRFEsZUFBZ0M7SUFBaEMsaURBQWdDLDhCQUFBOzs7SUFLcEQsK0JBQTZEO0lBRXpELHlDQVFxQjtJQUV6QixpQkFBTzs7OztJQVZpQixlQUEwRTtJQUExRSxxR0FBMEUsd0JBQUEsdUJBQUEscUJBQUEscUNBQUEseUJBQUEseUJBQUEsNEJBQUE7OztJQWhCdEcsOEJBR21EO0lBRy9DLDBHQUtPO0lBR1AsMEdBWU87SUFDWCxpQkFBTTs7OztJQTFCRCwyRkFBbUUsK0NBQUE7SUFLN0QsZUFBa0U7SUFBbEUs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QUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDM0MsQ0FBQztvRkExSFEsbUJBQW1CO29FQUFuQixtQkFBbUI7WUNaaEMsc0ZBRWU7WUFFZixzRkFvQ2U7O1lBeENBLDBDQUFxQjtZQUlyQixlQUFvQjtZQUFwQix5Q0FBb0I7OztTRFF0QixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUwvQixTQUFTOzJCQUNJLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWVsZCwgRmllbGREZWZpbml0aW9uLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QmFzZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuLi9iYXNlL2Jhc2UtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7RmllbGRMb2dpY01hbmFnZXJ9IGZyb20gJy4uL2ZpZWxkLWxvZ2ljL2ZpZWxkLWxvZ2ljLm1hbmFnZXInO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTdGFuZGFyZEZpZWxkUmVnaXN0cnl9IGZyb20gJy4uL3N0YW5kYXJkLWZpZWxkLnJlZ2lzdHJ5JztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1ncm91cC1maWVsZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dyb3VwLWZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwRmllbGRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRmllbGRDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIHJlZ2lzdHJ5OiBTdGFuZGFyZEZpZWxkUmVnaXN0cnksXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcih0eXBlRm9ybWF0dGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnRUeXBlKHR5cGU6IHN0cmluZywgZGVmaW5pdGlvbjogRmllbGREZWZpbml0aW9uKTogYW55IHtcbiAgICAgICAgbGV0IG1vZHVsZSA9ICh0aGlzLnJlY29yZCAmJiB0aGlzLnJlY29yZC5tb2R1bGUpIHx8ICdkZWZhdWx0JztcblxuICAgICAgICBjb25zdCBkaXNwbGF5VHlwZSA9IChkZWZpbml0aW9uICYmIGRlZmluaXRpb24uZGlzcGxheVR5cGUpIHx8ICcnO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdHJ5LmdldERpc3BsYXlUeXBlKG1vZHVsZSwgdHlwZSwgZGlzcGxheVR5cGUsIHRoaXMubW9kZSwgdGhpcy5maWVsZC5uYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGdyb3VwIGZpZWxkcyBmcm9tIHRoZSByZWNvcmRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IEZpZWxkW11cbiAgICAgKi9cbiAgICBnZXRGaWVsZHMoKTogRmllbGRbXSB7XG4gICAgICAgIGNvbnN0IGZpZWxkczogRmllbGRbXSA9IFtdO1xuXG4gICAgICAgIHRoaXMuZmllbGQuZGVmaW5pdGlvbi5sYXlvdXQuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWNvcmQuZmllbGRzW25hbWVdIHx8IHRoaXMucmVjb3JkLmZpZWxkc1tuYW1lXS5kaXNwbGF5ID09PSAnbm9uZScpe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmllbGRzLnB1c2godGhpcy5yZWNvcmQuZmllbGRzW25hbWVdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZpZWxkcztcbiAgICB9XG5cbiAgICBnZXRNb2R1bGUoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmQubW9kdWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBmbGV4IGRpcmVjdGlvbiB0byBiZSB1c2VkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBkaXJlY3Rpb25cbiAgICAgKi9cbiAgICBnZXREaXJlY3Rpb24oKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9ICdmbGV4LWNvbHVtbic7XG5cbiAgICAgICAgaWYgKHRoaXMuZmllbGQuZGVmaW5pdGlvbi5kaXNwbGF5ID09PSAnaW5saW5lJykge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gJ2ZsZXgtcm93JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXMgY29uZmlndXJlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGlzIGNvbmZpZ3VyZWRcbiAgICAgKi9cbiAgICBpc0NvbmZpZ3VyZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0Rpc3BsYXkoKSAmJiB0aGlzLmhhc0xheW91dCgpICYmIHRoaXMuaGFzR3JvdXBGaWVsZHMoKTtcbiAgICB9XG5cbiAgICBzaG93TGFiZWwoZmllbGROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuZmllbGQuZGVmaW5pdGlvbiB8fCBudWxsO1xuICAgICAgICBjb25zdCBzaG93TGFiZWwgPSBkZWZpbml0aW9uLnNob3dMYWJlbCB8fCBudWxsO1xuXG4gICAgICAgIGlmICghZGVmaW5pdGlvbiB8fCAhc2hvd0xhYmVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG93TGFiZWxPcHRpb25zID0gZGVmaW5pdGlvbi5zaG93TGFiZWxbdGhpcy5tb2RlXSB8fCBudWxsO1xuXG4gICAgICAgIC8vIHNob3dMYWJlbCA+IHZpZXdNb2RlIG5vdCBkZWZpbmVkIHx8IGRlZmluZWQgd2l0aG91dCBhbnkgdmFsdWVzIGUuZy4gZWRpdDpcbiAgICAgICAgaWYgKCFzaG93TGFiZWxPcHRpb25zIHx8IHR5cGVvZiAoc2hvd0xhYmVsT3B0aW9ucykgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHNob3dMYWJlbE9wdGlvbnMuaW5jbHVkZXMoJyonKSB8fCBzaG93TGFiZWxPcHRpb25zLmluY2x1ZGVzKGZpZWxkTmFtZSkpO1xuICAgIH1cblxuICAgIGlzTW9kZUVuYWJsZWQobW9kZTogc3RyaW5nLCBncm91cEZpZWxkOiBGaWVsZCkge1xuICAgICAgICBjb25zdCBtb2RlcyA9IGdyb3VwRmllbGQuZGVmaW5pdGlvbi5tb2RlcztcbiAgICAgICAgaWYgKCFtb2RlcyB8fCBtb2Rlcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb2Rlcy5pbmNsdWRlcyhtb2RlIGFzIFZpZXdNb2RlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBncm91cEZpZWxkcyBhcmUgY29uZmlndXJlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGhhcyBncm91cEZpZWxkc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBoYXNHcm91cEZpZWxkcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKHRoaXMuZmllbGQuZGVmaW5pdGlvbi5ncm91cEZpZWxkcyAmJiBPYmplY3Qua2V5cyh0aGlzLmZpZWxkLmRlZmluaXRpb24uZ3JvdXBGaWVsZHMpLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgbGF5b3V0IGlzIGNvbmZpZ3VyZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBoYXMgbGF5b3V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGhhc0xheW91dCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKHRoaXMuZmllbGQuZGVmaW5pdGlvbi5sYXlvdXQgJiYgdGhpcy5maWVsZC5kZWZpbml0aW9uLmxheW91dC5sZW5ndGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGRpc3BsYXkgaXMgY29uZmlndXJlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGhhcyBkaXNwbGF5XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGhhc0Rpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuZmllbGQuZGVmaW5pdGlvbi5kaXNwbGF5O1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNDb25maWd1cmVkKClcIj5cbiAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9CQURfR1JPVVBfRklFTERfQ09ORklHXCI+PC9zY3JtLWxhYmVsPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJpc0NvbmZpZ3VyZWQoKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgge3tnZXREaXJlY3Rpb24oKX19IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1zdGFydCBmaWVsZC1ncm91cCBoLTEwMFwiPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGdyb3VwRmllbGQgb2YgZ2V0RmllbGRzKClcIj5cblxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzTW9kZUVuYWJsZWQobW9kZSwgZ3JvdXBGaWVsZClcIlxuICAgICAgICAgICAgICAgICBbY2xhc3MuZmxleC1maWxsXT1cIm1vZGUgPT09J2VkaXQnICYmIGdldERpcmVjdGlvbigpID09PSAnZmxleC1yb3cnXCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaWVsZC1ncm91cC1pdGVtIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtZW5kIHctMTAwXCJcbiAgICAgICAgICAgICAgICAgW2NsYXNzLmgtMTAwXT1cImdldERpcmVjdGlvbigpID09PSAnZmxleC1yb3cnXCI+XG5cbiAgICAgICAgICAgICAgICA8IS0tIExBQkVMIC0tPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZ3JvdXBGaWVsZC5sYWJlbEtleSAmJiBzaG93TGFiZWwoZ3JvdXBGaWVsZC5kZWZpbml0aW9uLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpZWxkLWdyb3VwLWxhYmVsIHB0LTIgcHItMVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwiZ3JvdXBGaWVsZC5sYWJlbEtleVwiIFttb2R1bGVdPVwiZ2V0TW9kdWxlKClcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBWQUxVRSAtLT5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImdyb3VwRmllbGQudHlwZVwiIGNsYXNzPVwiZmllbGQtZ3JvdXAtZmllbGQgcHItMVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWR5bmFtaWMtZmllbGQgW2NvbXBvbmVudFR5cGVdPVwiZ2V0Q29tcG9uZW50VHlwZShncm91cEZpZWxkLnR5cGUsIGdyb3VwRmllbGQuZGVmaW5pdGlvbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZF09XCJncm91cEZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBba2xhc3NdPVwia2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcmlnaW5hbE1vZGVdPVwib3JpZ2luYWxNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cInJlY29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BhcmVudF09XCJwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cImdyb3VwRmllbGQudHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZHluYW1pYy1maWVsZD5cblxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG5cblxuIl19