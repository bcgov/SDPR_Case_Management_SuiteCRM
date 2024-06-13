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
import { isVoid } from 'common';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { debounceTime } from 'rxjs/operators';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import { isEqual } from "lodash-es";
import * as i0 from "@angular/core";
import * as i1 from "../../services/formatters/data-type.formatter.service";
import * as i2 from "../field-logic/field-logic.manager";
import * as i3 from "../field-logic-display/field-logic-display.manager";
class BaseFieldComponent {
    constructor(typeFormatter, logic, logicDisplay) {
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.originalMode = '';
        this.klass = null;
        this.dependentFields = {};
        this.dependentAttributes = [];
        this.subs = [];
    }
    ngOnInit() {
        this.baseInit();
        if (!this.originalMode) {
            this.originalMode = this.mode;
        }
    }
    ngOnDestroy() {
        this.unsubscribeAll();
    }
    baseInit() {
        this.initDependencyHandlers();
    }
    /**
     * Calculate and init dependency handlers
     */
    initDependencyHandlers() {
        if (!this.record) {
            return;
        }
        const fieldKeys = (this.record.fields && Object.keys(this.record.fields)) || [];
        if (fieldKeys.length > 1) {
            this.calculateDependentFields(fieldKeys);
            this.field.previousValue = this.field.value;
            if ((this.dependentFields && Object.keys(this.dependentFields).length) || this.dependentAttributes.length) {
                Object.keys(this.dependentFields).forEach(fieldKey => {
                    const field = this.record.fields[fieldKey] || null;
                    if (!field) {
                        return;
                    }
                    const types = this.dependentFields[fieldKey].type ?? [];
                    if (types.includes('logic')) {
                        this.logic.runLogic(field, this.mode, this.record, 'onFieldInitialize');
                    }
                    if (types.includes('displayLogic')) {
                        this.logicDisplay.runAll(field, this.record, this.mode);
                    }
                });
            }
            if (this.field.valueChanges$ && ((this.dependentFields && Object.keys(this.dependentFields).length) || this.dependentAttributes.length)) {
                this.subs.push(this.field.valueChanges$.pipe(debounceTime(500)).subscribe((data) => {
                    Object.keys(this.dependentFields).forEach(fieldKey => {
                        const dependentField = this.dependentFields[fieldKey];
                        const field = this.record.fields[fieldKey] || null;
                        if (!field) {
                            return;
                        }
                        if (this.field.previousValue != data.value) {
                            const types = dependentField.type ?? [];
                            if (types.includes('logic')) {
                                this.logic.runLogic(field, this.mode, this.record, 'onValueChange');
                            }
                            if (types.includes('displayLogic')) {
                                this.logicDisplay.runAll(field, this.record, this.mode);
                            }
                        }
                    });
                    this.field.previousValue = data.value;
                    this.dependentAttributes.forEach(dependency => {
                        const field = this.record.fields[dependency.field] || {};
                        const attribute = (field && field.attributes && field.attributes[dependency.attribute]) || null;
                        if (!attribute) {
                            return;
                        }
                        this.logic.runLogic(attribute, this.mode, this.record, 'onValueChange');
                    });
                }));
            }
        }
    }
    /**
     * Calculate dependent fields
     * @param {array} fieldKeys
     */
    calculateDependentFields(fieldKeys) {
        fieldKeys.forEach(key => {
            if (this.field.source === 'field' || this.field.source === 'groupField') {
                this.addFieldDependency(key, this.dependentFields, this.dependentAttributes);
                return;
            }
            if (this.field.source === 'attribute') {
                this.addAttributeDependency(key, this.dependentFields, this.dependentAttributes);
                return;
            }
        });
    }
    /**
     * Add field dependency
     * @param {string} fieldKey
     * @param {array} dependentFields
     * @param {object} dependentAttributes
     */
    addFieldDependency(fieldKey, dependentFields, dependentAttributes) {
        const field = this.record.fields[fieldKey];
        const name = this.field.name || this.field.definition.name || '';
        if (fieldKey === name || !field) {
            return;
        }
        if (field.fieldDependencies && this.isDependencyField(field.fieldDependencies)) {
            dependentFields[fieldKey] = field.fieldDependencies[name];
        }
        const attributeKeys = (field.attributes && Object.keys(field.attributes)) || [];
        attributeKeys.forEach(attributeKey => {
            const attribute = field.attributes[attributeKey];
            if (!attribute || !attribute.fieldDependencies || !attribute.fieldDependencies.length) {
                return;
            }
            if (this.isDependencyField(attribute.fieldDependencies)) {
                dependentAttributes.push({
                    field: fieldKey,
                    attribute: attributeKey,
                    types: dependentFields[name]['types'] ?? []
                });
            }
        });
    }
    /**
     * Check if field is dependency
     * @param dependencies
     * @returns {boolean}
     */
    isDependencyField(dependencies) {
        const name = this.field.name || this.field.definition.name || '';
        return !!(dependencies[name] ?? false);
    }
    /**
     * Add attribute dependency
     * @param {string} fieldKey
     * @param {array} dependentFields
     * @param {object} dependentAttributes
     */
    addAttributeDependency(fieldKey, dependentFields, dependentAttributes) {
        const field = this.record.fields[fieldKey];
        const name = this.field.name || this.field.definition.name || '';
        if (fieldKey === name || !field) {
            return;
        }
        if (field.attributeDependencies && field.attributeDependencies.length && this.isDependencyAttribute(field.attributeDependencies)) {
            dependentFields[name] = field.fieldDependencies[name];
        }
        const attributeKeys = (field.attributes && Object.keys(field.attributes)) || [];
        attributeKeys.forEach(attributeKey => {
            const attribute = field.attributes[attributeKey];
            if (!attribute || !attribute.attributeDependencies || !attribute.attributeDependencies.length) {
                return;
            }
            if (this.isDependencyAttribute(attribute.attributeDependencies)) {
                dependentAttributes.push({
                    field: fieldKey,
                    attribute: attributeKey,
                    types: (dependentFields[name] ?? {})['types'] ?? [],
                });
            }
        });
    }
    /**
     * Check if attribute is dependency
     * @param {object} attributeDependencies
     * @returns {boolean}
     */
    isDependencyAttribute(attributeDependencies) {
        const parentKey = this.field.parentKey || '';
        const name = this.field.name || this.field.definition.name || '';
        return attributeDependencies.some(dependency => parentKey === dependency.field && name === dependency.attribute);
    }
    subscribeValueChanges() {
        if (this.field && this.field.formControl) {
            this.subs.push(this.field.formControl.valueChanges.subscribe(value => {
                if (!isVoid(value)) {
                    value = value.trim();
                }
                else {
                    value = '';
                }
                if (this.typeFormatter && this.field.type) {
                    value = this.toInternalFormat(this.field.type, value);
                }
                this.setFieldValue(value);
            }));
        }
    }
    toInternalFormat(fieldType, value) {
        return this.typeFormatter.toInternalFormat(fieldType, value);
    }
    setFieldValue(newValue) {
        this.field.value = newValue;
    }
    setFormControlValue(newValue) {
        this.field.formControl.markAsDirty();
        if (isEqual(this.field.formControl.value, newValue)) {
            return;
        }
        this.field.formControl.setValue(newValue);
    }
    unsubscribeAll() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    static { this.ɵfac = function BaseFieldComponent_Factory(t) { return new (t || BaseFieldComponent)(i0.ɵɵdirectiveInject(i1.DataTypeFormatter), i0.ɵɵdirectiveInject(i2.FieldLogicManager), i0.ɵɵdirectiveInject(i3.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseFieldComponent, selectors: [["ng-component"]], inputs: { mode: "mode", originalMode: "originalMode", field: "field", record: "record", parent: "parent", klass: "klass" }, decls: 0, vars: 0, template: function BaseFieldComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
export { BaseFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseFieldComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: i1.DataTypeFormatter }, { type: i2.FieldLogicManager }, { type: i3.FieldLogicDisplayManager }]; }, { mode: [{
            type: Input
        }], originalMode: [{
            type: Input
        }], field: [{
            type: Input
        }], record: [{
            type: Input
        }], parent: [{
            type: Input
        }], klass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2Jhc2UvYmFzZS1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUVsRSxPQUFPLEVBQTZCLE1BQU0sRUFBOEIsTUFBTSxRQUFRLENBQUM7QUFFdkYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDeEYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxXQUFXLENBQUM7Ozs7O0FBRWxDLE1BQ2Esa0JBQWtCO0lBVzNCLFlBQ2MsYUFBZ0MsRUFDaEMsS0FBd0IsRUFDeEIsWUFBc0M7UUFGdEMsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtRQVozQyxpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUkxQixVQUFLLEdBQTZCLElBQUksQ0FBQztRQUNoRCxvQkFBZSxHQUFjLEVBQUUsQ0FBQztRQUNoQyx3QkFBbUIsR0FBMEIsRUFBRSxDQUFDO1FBQ3RDLFNBQUksR0FBbUIsRUFBRSxDQUFDO0lBT3BDLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3BCLElB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QUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNQO0lBQ0wsQ0FBQztJQUVTLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxLQUFLO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFakUsQ0FBQztJQUVTLGFBQWEsQ0FBQyxRQUFRO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBRVMsbUJBQW1CLENBQUMsUUFBMkI7UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFckMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFO1lBQ2pELE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRVMsY0FBYztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7bUZBcFFRLGtCQUFrQjtvRUFBbEIsa0JBQWtCOztTQUFsQixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUQ5QixTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFDOzJJQUVaLElBQUk7a0JBQVosS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWVsZENvbXBvbmVudEludGVyZmFjZX0gZnJvbSAnLi9maWVsZC5pbnRlcmZhY2UnO1xuaW1wb3J0IHtBdHRyaWJ1dGVEZXBlbmRlbmN5LCBGaWVsZCwgaXNWb2lkLCBPYmplY3RNYXAsIFJlY29yZCwgVmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge2RlYm91bmNlVGltZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5TWFuYWdlcn0gZnJvbSAnLi4vZmllbGQtbG9naWMtZGlzcGxheS9maWVsZC1sb2dpYy1kaXNwbGF5Lm1hbmFnZXInO1xuaW1wb3J0IHtpc0VxdWFsfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5cbkBDb21wb25lbnQoe3RlbXBsYXRlOiAnJ30pXG5leHBvcnQgY2xhc3MgQmFzZUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgRmllbGRDb21wb25lbnRJbnRlcmZhY2UsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBtb2RlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgb3JpZ2luYWxNb2RlOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBmaWVsZDogRmllbGQ7XG4gICAgQElucHV0KCkgcmVjb3JkOiBSZWNvcmQ7XG4gICAgQElucHV0KCkgcGFyZW50OiBSZWNvcmQ7XG4gICAgQElucHV0KCkga2xhc3M6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSA9IG51bGw7XG4gICAgZGVwZW5kZW50RmllbGRzOiBPYmplY3RNYXAgPSB7fTtcbiAgICBkZXBlbmRlbnRBdHRyaWJ1dGVzOiBBdHRyaWJ1dGVEZXBlbmRlbmN5W10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhc2VJbml0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLm9yaWdpbmFsTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbE1vZGUgPSB0aGlzLm1vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUFsbCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBiYXNlSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0RGVwZW5kZW5jeUhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGFuZCBpbml0IGRlcGVuZGVuY3kgaGFuZGxlcnNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdERlcGVuZGVuY3lIYW5kbGVycygpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpZWxkS2V5cyA9ICh0aGlzLnJlY29yZC5maWVsZHMgJiYgT2JqZWN0LmtleXModGhpcy5yZWNvcmQuZmllbGRzKSkgfHwgW107XG4gICAgICAgIGlmIChmaWVsZEtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVEZXBlbmRlbnRGaWVsZHMoZmllbGRLZXlzKTtcbiAgICAgICAgICAgIHRoaXMuZmllbGQucHJldmlvdXNWYWx1ZSA9IHRoaXMuZmllbGQudmFsdWU7XG5cbiAgICAgICAgICAgIGlmKCh0aGlzLmRlcGVuZGVudEZpZWxkcyAmJiBPYmplY3Qua2V5cyh0aGlzLmRlcGVuZGVudEZpZWxkcykubGVuZ3RoKSB8fCB0aGlzLmRlcGVuZGVudEF0dHJpYnV0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5kZXBlbmRlbnRGaWVsZHMpLmZvckVhY2goZmllbGRLZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMucmVjb3JkLmZpZWxkc1tmaWVsZEtleV0gfHwgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZXMgPSB0aGlzLmRlcGVuZGVudEZpZWxkc1tmaWVsZEtleV0udHlwZSA/PyBbXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZXMuaW5jbHVkZXMoJ2xvZ2ljJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naWMucnVuTG9naWMoZmllbGQsIHRoaXMubW9kZSBhcyBWaWV3TW9kZSwgdGhpcy5yZWNvcmQsICdvbkZpZWxkSW5pdGlhbGl6ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVzLmluY2x1ZGVzKCdkaXNwbGF5TG9naWMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpY0Rpc3BsYXkucnVuQWxsKGZpZWxkLCB0aGlzLnJlY29yZCwgdGhpcy5tb2RlIGFzIFZpZXdNb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZC52YWx1ZUNoYW5nZXMkICYmICgodGhpcy5kZXBlbmRlbnRGaWVsZHMgJiYgT2JqZWN0LmtleXModGhpcy5kZXBlbmRlbnRGaWVsZHMpLmxlbmd0aCkgfHwgdGhpcy5kZXBlbmRlbnRBdHRyaWJ1dGVzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmZpZWxkLnZhbHVlQ2hhbmdlcyQucGlwZShkZWJvdW5jZVRpbWUoNTAwKSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGVwZW5kZW50RmllbGRzKS5mb3JFYWNoKGZpZWxkS2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlcGVuZGVudEZpZWxkID0gdGhpcy5kZXBlbmRlbnRGaWVsZHNbZmllbGRLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLnJlY29yZC5maWVsZHNbZmllbGRLZXldIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZpZWxkLnByZXZpb3VzVmFsdWUgIT0gZGF0YS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVzID0gZGVwZW5kZW50RmllbGQudHlwZSA/PyBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlcy5pbmNsdWRlcygnbG9naWMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2ljLnJ1bkxvZ2ljKGZpZWxkLCB0aGlzLm1vZGUgYXMgVmlld01vZGUsIHRoaXMucmVjb3JkLCAnb25WYWx1ZUNoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlcy5pbmNsdWRlcygnZGlzcGxheUxvZ2ljJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpY0Rpc3BsYXkucnVuQWxsKGZpZWxkLCB0aGlzLnJlY29yZCwgdGhpcy5tb2RlIGFzIFZpZXdNb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkLnByZXZpb3VzVmFsdWUgPSBkYXRhLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVwZW5kZW50QXR0cmlidXRlcy5mb3JFYWNoKGRlcGVuZGVuY3kgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLnJlY29yZC5maWVsZHNbZGVwZW5kZW5jeS5maWVsZF0gfHwge30gYXMgRmllbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSAoZmllbGQgJiYgZmllbGQuYXR0cmlidXRlcyAmJiBmaWVsZC5hdHRyaWJ1dGVzW2RlcGVuZGVuY3kuYXR0cmlidXRlXSkgfHwgbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naWMucnVuTG9naWMoYXR0cmlidXRlLCB0aGlzLm1vZGUgYXMgVmlld01vZGUsIHRoaXMucmVjb3JkLCAnb25WYWx1ZUNoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGRlcGVuZGVudCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBmaWVsZEtleXNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlRGVwZW5kZW50RmllbGRzKGZpZWxkS2V5czogc3RyaW5nW10pOiB2b2lkIHtcbiAgICAgICAgZmllbGRLZXlzLmZvckVhY2goa2V5ID0+IHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGQuc291cmNlID09PSAnZmllbGQnIHx8IHRoaXMuZmllbGQuc291cmNlID09PSAnZ3JvdXBGaWVsZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEZpZWxkRGVwZW5kZW5jeShrZXksIHRoaXMuZGVwZW5kZW50RmllbGRzLCB0aGlzLmRlcGVuZGVudEF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGQuc291cmNlID09PSAnYXR0cmlidXRlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlRGVwZW5kZW5jeShrZXksIHRoaXMuZGVwZW5kZW50RmllbGRzLCB0aGlzLmRlcGVuZGVudEF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZmllbGQgZGVwZW5kZW5jeVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZEtleVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGRlcGVuZGVudEZpZWxkc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkZXBlbmRlbnRBdHRyaWJ1dGVzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZEZpZWxkRGVwZW5kZW5jeShmaWVsZEtleTogc3RyaW5nLCBkZXBlbmRlbnRGaWVsZHM6IE9iamVjdE1hcCwgZGVwZW5kZW50QXR0cmlidXRlczogQXR0cmlidXRlRGVwZW5kZW5jeVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5yZWNvcmQuZmllbGRzW2ZpZWxkS2V5XTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZmllbGQubmFtZSB8fCB0aGlzLmZpZWxkLmRlZmluaXRpb24ubmFtZSB8fCAnJztcbiAgICAgICAgaWYgKGZpZWxkS2V5ID09PSBuYW1lIHx8ICFmaWVsZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpZWxkLmZpZWxkRGVwZW5kZW5jaWVzICYmIHRoaXMuaXNEZXBlbmRlbmN5RmllbGQoZmllbGQuZmllbGREZXBlbmRlbmNpZXMpKSB7XG4gICAgICAgICAgICBkZXBlbmRlbnRGaWVsZHNbZmllbGRLZXldID0gZmllbGQuZmllbGREZXBlbmRlbmNpZXNbbmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVLZXlzID0gKGZpZWxkLmF0dHJpYnV0ZXMgJiYgT2JqZWN0LmtleXMoZmllbGQuYXR0cmlidXRlcykpIHx8IFtdO1xuXG4gICAgICAgIGF0dHJpYnV0ZUtleXMuZm9yRWFjaChhdHRyaWJ1dGVLZXkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBmaWVsZC5hdHRyaWJ1dGVzW2F0dHJpYnV0ZUtleV07XG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZSB8fCAhYXR0cmlidXRlLmZpZWxkRGVwZW5kZW5jaWVzIHx8ICFhdHRyaWJ1dGUuZmllbGREZXBlbmRlbmNpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0RlcGVuZGVuY3lGaWVsZChhdHRyaWJ1dGUuZmllbGREZXBlbmRlbmNpZXMpKSB7XG4gICAgICAgICAgICAgICAgZGVwZW5kZW50QXR0cmlidXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkS2V5LFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IGF0dHJpYnV0ZUtleSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZXM6IGRlcGVuZGVudEZpZWxkc1tuYW1lXVsndHlwZXMnXSA/PyBbXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBmaWVsZCBpcyBkZXBlbmRlbmN5XG4gICAgICogQHBhcmFtIGRlcGVuZGVuY2llc1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpc0RlcGVuZGVuY3lGaWVsZChkZXBlbmRlbmNpZXM6IE9iamVjdE1hcCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5maWVsZC5uYW1lIHx8IHRoaXMuZmllbGQuZGVmaW5pdGlvbi5uYW1lIHx8ICcnO1xuXG4gICAgICAgIHJldHVybiAhIShkZXBlbmRlbmNpZXNbbmFtZV0gPz8gZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhdHRyaWJ1dGUgZGVwZW5kZW5jeVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZEtleVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGRlcGVuZGVudEZpZWxkc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkZXBlbmRlbnRBdHRyaWJ1dGVzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZEF0dHJpYnV0ZURlcGVuZGVuY3koZmllbGRLZXk6IHN0cmluZywgZGVwZW5kZW50RmllbGRzOiBPYmplY3RNYXAsIGRlcGVuZGVudEF0dHJpYnV0ZXM6IEF0dHJpYnV0ZURlcGVuZGVuY3lbXSk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMucmVjb3JkLmZpZWxkc1tmaWVsZEtleV07XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmZpZWxkLm5hbWUgfHwgdGhpcy5maWVsZC5kZWZpbml0aW9uLm5hbWUgfHwgJyc7XG4gICAgICAgIGlmIChmaWVsZEtleSA9PT0gbmFtZSB8fCAhZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWVsZC5hdHRyaWJ1dGVEZXBlbmRlbmNpZXMgJiYgZmllbGQuYXR0cmlidXRlRGVwZW5kZW5jaWVzLmxlbmd0aCAmJiB0aGlzLmlzRGVwZW5kZW5jeUF0dHJpYnV0ZShmaWVsZC5hdHRyaWJ1dGVEZXBlbmRlbmNpZXMpKSB7XG4gICAgICAgICAgICBkZXBlbmRlbnRGaWVsZHNbbmFtZV0gPSBmaWVsZC5maWVsZERlcGVuZGVuY2llc1tuYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZUtleXMgPSAoZmllbGQuYXR0cmlidXRlcyAmJiBPYmplY3Qua2V5cyhmaWVsZC5hdHRyaWJ1dGVzKSkgfHwgW107XG5cbiAgICAgICAgYXR0cmlidXRlS2V5cy5mb3JFYWNoKGF0dHJpYnV0ZUtleSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGZpZWxkLmF0dHJpYnV0ZXNbYXR0cmlidXRlS2V5XTtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlIHx8ICFhdHRyaWJ1dGUuYXR0cmlidXRlRGVwZW5kZW5jaWVzIHx8ICFhdHRyaWJ1dGUuYXR0cmlidXRlRGVwZW5kZW5jaWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEZXBlbmRlbmN5QXR0cmlidXRlKGF0dHJpYnV0ZS5hdHRyaWJ1dGVEZXBlbmRlbmNpZXMpKSB7XG4gICAgICAgICAgICAgICAgZGVwZW5kZW50QXR0cmlidXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkS2V5LFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IGF0dHJpYnV0ZUtleSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZXM6IChkZXBlbmRlbnRGaWVsZHNbbmFtZV0gPz8ge30pWyd0eXBlcyddID8/IFtdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhdHRyaWJ1dGUgaXMgZGVwZW5kZW5jeVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVEZXBlbmRlbmNpZXNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNEZXBlbmRlbmN5QXR0cmlidXRlKGF0dHJpYnV0ZURlcGVuZGVuY2llczogQXR0cmlidXRlRGVwZW5kZW5jeVtdKTogYm9vbGVhbiB7XG5cbiAgICAgICAgY29uc3QgcGFyZW50S2V5ID0gdGhpcy5maWVsZC5wYXJlbnRLZXkgfHwgJyc7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmZpZWxkLm5hbWUgfHwgdGhpcy5maWVsZC5kZWZpbml0aW9uLm5hbWUgfHwgJyc7XG5cbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZURlcGVuZGVuY2llcy5zb21lKGRlcGVuZGVuY3kgPT4gcGFyZW50S2V5ID09PSBkZXBlbmRlbmN5LmZpZWxkICYmIG5hbWUgPT09IGRlcGVuZGVuY3kuYXR0cmlidXRlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3Vic2NyaWJlVmFsdWVDaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5maWVsZCAmJiB0aGlzLmZpZWxkLmZvcm1Db250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmZpZWxkLmZvcm1Db250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZvaWQodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZUZvcm1hdHRlciAmJiB0aGlzLmZpZWxkLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnRvSW50ZXJuYWxGb3JtYXQodGhpcy5maWVsZC50eXBlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGaWVsZFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB0b0ludGVybmFsRm9ybWF0KGZpZWxkVHlwZSwgdmFsdWUpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlRm9ybWF0dGVyLnRvSW50ZXJuYWxGb3JtYXQoZmllbGRUeXBlLCB2YWx1ZSk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0RmllbGRWYWx1ZShuZXdWYWx1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEZvcm1Db250cm9sVmFsdWUobmV3VmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcblxuICAgICAgICBpZiAoaXNFcXVhbCh0aGlzLmZpZWxkLmZvcm1Db250cm9sLnZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdW5zdWJzY3JpYmVBbGwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19