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
import { Injectable } from '@angular/core';
import { ValidationManager } from '../validation/validation.manager';
import { DataTypeFormatter } from '../../formatters/data-type.formatter.service';
import { BaseField, isTrue } from 'common';
import { UntypedFormArray, UntypedFormControl } from '@angular/forms';
import get from 'lodash-es/get';
import { merge } from 'lodash-es';
import * as i0 from "@angular/core";
import * as i1 from "../validation/validation.manager";
import * as i2 from "../../formatters/data-type.formatter.service";
class FieldBuilder {
    constructor(validationManager, typeFormatter) {
        this.validationManager = validationManager;
        this.typeFormatter = typeFormatter;
    }
    /**
     * Build field
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    buildField(record, viewField, language = null) {
        const definition = (viewField && viewField.fieldDefinition) || {};
        const { value, valueList, valueObject } = this.parseValue(viewField, definition, record);
        const { validators, asyncValidators } = this.getSaveValidators(record, viewField);
        return this.setupField(record.module, viewField, value, valueList, valueObject, record, definition, validators, asyncValidators, language);
    }
    getFieldLabel(label, module, language) {
        const languages = language.getLanguageStrings();
        return language.getFieldLabel(label, module, languages);
    }
    /**
     * Parse value from record
     *
     * @param {object} viewField ViewFieldDefinition
     * @param {object} definition FieldDefinition
     * @param {object} record Record
     * @returns {object} value object
     */
    parseValue(viewField, definition, record) {
        const type = (viewField && viewField.type) || '';
        const source = (definition && definition.source) || '';
        const rname = (definition && definition.rname) || 'name';
        const viewName = viewField.name || '';
        let value = null;
        let valueList = null;
        if (!viewName || !record.attributes[viewName]) {
            value = '';
        }
        else if (type === 'relate' && source === 'non-db' && rname !== '') {
            value = record.attributes[viewName][rname];
            const valueObject = record.attributes[viewName];
            return { value, valueList, valueObject };
        }
        else {
            value = record.attributes[viewName];
        }
        if (type === 'line-items') {
            return { value: null, valueList };
        }
        if (Array.isArray(value)) {
            valueList = value;
            value = null;
        }
        return { value, valueList };
    }
    /**
     * Build and initialize field object
     *
     * @param {string} module to use
     * @param {object} viewField ViewFieldDefinition
     * @param {string} value string
     * @param {[]} valueList string[]
     * @param {} valueObject value object
     * @param {object} record Record
     * @param {object} definition FieldDefinition
     * @param {[]} validators ValidatorFn[]
     * @param {[]} asyncValidators AsyncValidatorFn[]
     * @param {object} language LanguageStore
     * @returns {object} BaseField
     */
    setupField(module, viewField, value, valueList, valueObject, record, definition, validators, asyncValidators, language) {
        const metadata = merge(definition?.metadata ?? {}, viewField?.metadata ?? {});
        const formattedValue = this.typeFormatter.toUserFormat(viewField.type, value, { mode: 'edit', metadata });
        if (viewField.link) {
            metadata.link = viewField.link;
        }
        const field = new BaseField();
        field.type = viewField.type || definition.type;
        field.name = viewField.name || definition.name || '';
        field.vardefBased = viewField?.vardefBased ?? definition?.vardefBased ?? false;
        field.readonly = isTrue(viewField.readonly) || isTrue(definition.readonly) || false;
        field.display = (viewField.display || definition.display || 'default');
        field.defaultDisplay = field.display;
        if (field.defaultDisplay === 'default') {
            field.defaultDisplay = 'show';
        }
        field.value = value;
        field.metadata = metadata;
        field.definition = definition;
        if (viewField?.lineItems) {
            field.definition.lineItems = viewField.lineItems;
        }
        field.labelKey = viewField.label || definition.vname || '';
        field.dynamicLabelKey = viewField.dynamicLabelKey || definition.dynamicLabelKey || '';
        const defaultValue = viewField?.defaultValue ?? definition?.default ?? definition?.defaultValue ?? null;
        if (defaultValue) {
            field.default = defaultValue;
        }
        field.defaultValueModes = viewField?.defaultValueModes ?? definition?.defaultValueModes ?? ['create'];
        field.validators = validators;
        field.asyncValidators = asyncValidators;
        if (field.type === 'line-items') {
            field.valueObjectArray = record.attributes[field.name];
            field.itemFormArray = new UntypedFormArray([]);
            field.formControl = new UntypedFormControl(formattedValue);
        }
        else {
            field.formControl = new UntypedFormControl(formattedValue);
        }
        field.attributes = {};
        field.source = 'field';
        field.logic = viewField.logic || definition.logic || null;
        field.displayLogic = viewField.displayLogic || definition.displayLogic || null;
        const fieldDependencies = {};
        const attributeDependencies = {};
        this.addFieldDependencies(field.logic, fieldDependencies, attributeDependencies, 'logic');
        this.addFieldDependencies(field.displayLogic, fieldDependencies, attributeDependencies, 'displayLogic');
        field.attributeDependencies = Object.keys(attributeDependencies).map(key => attributeDependencies[key]);
        field.fieldDependencies = fieldDependencies;
        if (valueList) {
            field.valueList = valueList;
        }
        if (valueObject) {
            field.valueObject = valueObject;
        }
        if (language) {
            field.label = this.getFieldLabel(viewField.label, module, language);
        }
        if (!field.labelKey && viewField.label) {
            field.labelKey = viewField.label;
        }
        return field;
    }
    addFieldDependencies(config, fieldDependencies, attributeDependencies, type) {
        if (config && Object.keys(config).length) {
            Object.keys(config).forEach(logicKey => {
                const entry = config[logicKey] || {};
                if (!entry.params) {
                    return;
                }
                if (entry.params && entry.params.attributeDependencies) {
                    entry.params.attributeDependencies.forEach(dependency => {
                        const dependencyKey = dependency.field + '.' + dependency.attribute;
                        attributeDependencies[dependencyKey] = dependency;
                    });
                }
                if (entry.params && entry.params.fieldDependencies) {
                    entry.params.fieldDependencies.forEach(dependency => {
                        const fieldDependency = fieldDependencies[dependency] ?? {};
                        const types = fieldDependency['types'] ?? [];
                        types.push(type);
                        fieldDependencies[dependency] = {
                            field: dependency,
                            type: types
                        };
                    });
                }
            });
        }
    }
    /**
     * Get save validators for the given field definition
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @returns {object} Validator map
     */
    getSaveValidators(record, viewField) {
        const validators = this.validationManager.getSaveValidations(record.module, viewField, record);
        const asyncValidators = this.validationManager.getAsyncSaveValidations(record.module, viewField, record);
        return { validators, asyncValidators };
    }
    /**
     * Set attribute value on parent
     *
     * @param {object} record Record
     * @param {object} field Field
     * @param {string} name String
     * @param {object} definition FieldDefinition
     * @returns any
     */
    getParentValue(record, field, name, definition) {
        const valueParent = definition.valueParent ?? 'field';
        const parent = valueParent === 'record' ? record : field;
        if (definition.valuePath) {
            return get(parent, definition.valuePath, '');
        }
        if (valueParent === 'record') {
            return get(record.attributes, name, '');
        }
        return get(field.valueObject, name, '');
    }
    static { this.ɵfac = function FieldBuilder_Factory(t) { return new (t || FieldBuilder)(i0.ɵɵinject(i1.ValidationManager), i0.ɵɵinject(i2.DataTypeFormatter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldBuilder, factory: FieldBuilder.ɵfac, providedIn: 'root' }); }
}
export { FieldBuilder };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldBuilder, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ValidationManager }, { type: i2.DataTypeFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvZmllbGQuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUMvRSxPQUFPLEVBRUgsU0FBUyxFQU1ULE1BQU0sRUFJVCxNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQW1CLGdCQUFnQixFQUFFLGtCQUFrQixFQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkcsT0FBTyxHQUFHLE1BQU0sZUFBZSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxXQUFXLENBQUM7Ozs7QUFHaEMsTUFHYSxZQUFZO0lBRXJCLFlBQ2MsaUJBQW9DLEVBQ3BDLGFBQWdDO1FBRGhDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsa0JBQWEsR0FBYixhQUFhLENBQW1CO0lBRTlDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksVUFBVSxDQUFDLE1BQWMsRUFBRSxTQUE4QixFQUFFLFdBQTBCLElBQUk7UUFFNUYsTUFBTSxVQUFVLEdBQUcsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQXFCLENBQUM7UUFDckYsTUFBTSxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZGLE1BQU0sRUFBQyxVQUFV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VTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWYWxpZGF0aW9uTWFuYWdlcn0gZnJvbSAnLi4vdmFsaWRhdGlvbi92YWxpZGF0aW9uLm1hbmFnZXInO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgICBBdHRyaWJ1dGVEZXBlbmRlbmN5LFxuICAgIEJhc2VGaWVsZCxcbiAgICBEaXNwbGF5VHlwZSxcbiAgICBGaWVsZCxcbiAgICBGaWVsZERlZmluaXRpb24sXG4gICAgRmllbGRMb2dpYyxcbiAgICBGaWVsZExvZ2ljTWFwLFxuICAgIGlzVHJ1ZSxcbiAgICBPYmplY3RNYXAsXG4gICAgUmVjb3JkLFxuICAgIFZpZXdGaWVsZERlZmluaXRpb25cbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QXN5bmNWYWxpZGF0b3JGbiwgVW50eXBlZEZvcm1BcnJheSwgVW50eXBlZEZvcm1Db250cm9sLCBWYWxpZGF0b3JGbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC1lcy9nZXQnO1xuaW1wb3J0IHttZXJnZX0gZnJvbSAnbG9kYXNoLWVzJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkQnVpbGRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHZhbGlkYXRpb25NYW5hZ2VyOiBWYWxpZGF0aW9uTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgZmllbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGxhbmd1YWdlIExhbmd1YWdlU3RvcmVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fUZpZWxkXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkRmllbGQocmVjb3JkOiBSZWNvcmQsIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbiwgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUgPSBudWxsKTogRmllbGQge1xuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSAodmlld0ZpZWxkICYmIHZpZXdGaWVsZC5maWVsZERlZmluaXRpb24pIHx8IHt9IGFzIEZpZWxkRGVmaW5pdGlvbjtcbiAgICAgICAgY29uc3Qge3ZhbHVlLCB2YWx1ZUxpc3QsIHZhbHVlT2JqZWN0fSA9IHRoaXMucGFyc2VWYWx1ZSh2aWV3RmllbGQsIGRlZmluaXRpb24sIHJlY29yZCk7XG4gICAgICAgIGNvbnN0IHt2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnN9ID0gdGhpcy5nZXRTYXZlVmFsaWRhdG9ycyhyZWNvcmQsIHZpZXdGaWVsZCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dXBGaWVsZChcbiAgICAgICAgICAgIHJlY29yZC5tb2R1bGUsXG4gICAgICAgICAgICB2aWV3RmllbGQsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHZhbHVlTGlzdCxcbiAgICAgICAgICAgIHZhbHVlT2JqZWN0LFxuICAgICAgICAgICAgcmVjb3JkLFxuICAgICAgICAgICAgZGVmaW5pdGlvbixcbiAgICAgICAgICAgIHZhbGlkYXRvcnMsXG4gICAgICAgICAgICBhc3luY1ZhbGlkYXRvcnMsXG4gICAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGaWVsZExhYmVsKGxhYmVsOiBzdHJpbmcsIG1vZHVsZTogc3RyaW5nLCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlcyA9IGxhbmd1YWdlLmdldExhbmd1YWdlU3RyaW5ncygpO1xuICAgICAgICByZXR1cm4gbGFuZ3VhZ2UuZ2V0RmllbGRMYWJlbChsYWJlbCwgbW9kdWxlLCBsYW5ndWFnZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIHZhbHVlIGZyb20gcmVjb3JkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmlld0ZpZWxkIFZpZXdGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGVmaW5pdGlvbiBGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlY29yZFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHZhbHVlIG9iamVjdFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBwYXJzZVZhbHVlKFxuICAgICAgICB2aWV3RmllbGQ6IFZpZXdGaWVsZERlZmluaXRpb24sXG4gICAgICAgIGRlZmluaXRpb246IEZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgcmVjb3JkOiBSZWNvcmRcbiAgICApOiB7IHZhbHVlOiBzdHJpbmc7IHZhbHVlTGlzdDogc3RyaW5nW107IHZhbHVlT2JqZWN0PzogYW55IH0ge1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSAodmlld0ZpZWxkICYmIHZpZXdGaWVsZC50eXBlKSB8fCAnJztcbiAgICAgICAgY29uc3Qgc291cmNlID0gKGRlZmluaXRpb24gJiYgZGVmaW5pdGlvbi5zb3VyY2UpIHx8ICcnO1xuICAgICAgICBjb25zdCBybmFtZSA9IChkZWZpbml0aW9uICYmIGRlZmluaXRpb24ucm5hbWUpIHx8ICduYW1lJztcbiAgICAgICAgY29uc3Qgdmlld05hbWUgPSB2aWV3RmllbGQubmFtZSB8fCAnJztcbiAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmcgPSBudWxsO1xuICAgICAgICBsZXQgdmFsdWVMaXN0OiBzdHJpbmdbXSA9IG51bGw7XG5cbiAgICAgICAgaWYgKCF2aWV3TmFtZSB8fCAhcmVjb3JkLmF0dHJpYnV0ZXNbdmlld05hbWVdKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyZWxhdGUnICYmIHNvdXJjZSA9PT0gJ25vbi1kYicgJiYgcm5hbWUgIT09ICcnKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHJlY29yZC5hdHRyaWJ1dGVzW3ZpZXdOYW1lXVtybmFtZV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZU9iamVjdCA9IHJlY29yZC5hdHRyaWJ1dGVzW3ZpZXdOYW1lXTtcbiAgICAgICAgICAgIHJldHVybiB7dmFsdWUsIHZhbHVlTGlzdCwgdmFsdWVPYmplY3R9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSByZWNvcmQuYXR0cmlidXRlc1t2aWV3TmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmUtaXRlbXMnKSB7XG4gICAgICAgICAgICByZXR1cm4ge3ZhbHVlOiBudWxsLCB2YWx1ZUxpc3R9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZUxpc3QgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7dmFsdWUsIHZhbHVlTGlzdH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYW5kIGluaXRpYWxpemUgZmllbGQgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGQgVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge1tdfSB2YWx1ZUxpc3Qgc3RyaW5nW11cbiAgICAgKiBAcGFyYW0ge30gdmFsdWVPYmplY3QgdmFsdWUgb2JqZWN0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGVmaW5pdGlvbiBGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge1tdfSB2YWxpZGF0b3JzIFZhbGlkYXRvckZuW11cbiAgICAgKiBAcGFyYW0ge1tdfSBhc3luY1ZhbGlkYXRvcnMgQXN5bmNWYWxpZGF0b3JGbltdXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGxhbmd1YWdlIExhbmd1YWdlU3RvcmVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBCYXNlRmllbGRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2V0dXBGaWVsZChcbiAgICAgICAgbW9kdWxlOiBzdHJpbmcsXG4gICAgICAgIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgdmFsdWU6IHN0cmluZyxcbiAgICAgICAgdmFsdWVMaXN0OiBzdHJpbmdbXSxcbiAgICAgICAgdmFsdWVPYmplY3Q6IGFueSxcbiAgICAgICAgcmVjb3JkOiBSZWNvcmQsXG4gICAgICAgIGRlZmluaXRpb246IEZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSxcbiAgICAgICAgYXN5bmNWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10sXG4gICAgICAgIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlXG4gICAgKTogQmFzZUZpZWxkIHtcblxuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IG1lcmdlKGRlZmluaXRpb24/Lm1ldGFkYXRhID8/IHt9LCB2aWV3RmllbGQ/Lm1ldGFkYXRhID8/IHt9KTtcblxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMudHlwZUZvcm1hdHRlci50b1VzZXJGb3JtYXQodmlld0ZpZWxkLnR5cGUsIHZhbHVlLCB7bW9kZTogJ2VkaXQnLCBtZXRhZGF0YX0pO1xuXG4gICAgICAgIGlmICh2aWV3RmllbGQubGluaykge1xuICAgICAgICAgICAgbWV0YWRhdGEubGluayA9IHZpZXdGaWVsZC5saW5rO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmllbGQgPSBuZXcgQmFzZUZpZWxkKCk7XG5cbiAgICAgICAgZmllbGQudHlwZSA9IHZpZXdGaWVsZC50eXBlIHx8IGRlZmluaXRpb24udHlwZTtcbiAgICAgICAgZmllbGQubmFtZSA9IHZpZXdGaWVsZC5uYW1lIHx8IGRlZmluaXRpb24ubmFtZSB8fCAnJztcbiAgICAgICAgZmllbGQudmFyZGVmQmFzZWQgPSB2aWV3RmllbGQ/LnZhcmRlZkJhc2VkID8/IGRlZmluaXRpb24/LnZhcmRlZkJhc2VkID8/IGZhbHNlO1xuICAgICAgICBmaWVsZC5yZWFkb25seSA9IGlzVHJ1ZSh2aWV3RmllbGQucmVhZG9ubHkpIHx8IGlzVHJ1ZShkZWZpbml0aW9uLnJlYWRvbmx5KSB8fCBmYWxzZTtcbiAgICAgICAgZmllbGQuZGlzcGxheSA9ICh2aWV3RmllbGQuZGlzcGxheSB8fCBkZWZpbml0aW9uLmRpc3BsYXkgfHwgJ2RlZmF1bHQnKSBhcyBEaXNwbGF5VHlwZTtcbiAgICAgICAgZmllbGQuZGVmYXVsdERpc3BsYXkgPSBmaWVsZC5kaXNwbGF5O1xuICAgICAgICBpZiAoZmllbGQuZGVmYXVsdERpc3BsYXkgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgZmllbGQuZGVmYXVsdERpc3BsYXkgPSAnc2hvdyc7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgZmllbGQubWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgZmllbGQuZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG4gICAgICAgIGlmICh2aWV3RmllbGQ/LmxpbmVJdGVtcykge1xuICAgICAgICAgICAgZmllbGQuZGVmaW5pdGlvbi5saW5lSXRlbXMgPSB2aWV3RmllbGQubGluZUl0ZW1zO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkLmxhYmVsS2V5ID0gdmlld0ZpZWxkLmxhYmVsIHx8IGRlZmluaXRpb24udm5hbWUgfHwgJyc7XG4gICAgICAgIGZpZWxkLmR5bmFtaWNMYWJlbEtleSA9IHZpZXdGaWVsZC5keW5hbWljTGFiZWxLZXkgfHwgZGVmaW5pdGlvbi5keW5hbWljTGFiZWxLZXkgfHwgJyc7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gdmlld0ZpZWxkPy5kZWZhdWx0VmFsdWUgPz8gZGVmaW5pdGlvbj8uZGVmYXVsdCA/PyBkZWZpbml0aW9uPy5kZWZhdWx0VmFsdWUgPz8gbnVsbDtcbiAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgZmllbGQuZGVmYXVsdCA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkLmRlZmF1bHRWYWx1ZU1vZGVzID0gdmlld0ZpZWxkPy5kZWZhdWx0VmFsdWVNb2RlcyA/PyBkZWZpbml0aW9uPy5kZWZhdWx0VmFsdWVNb2RlcyA/PyBbJ2NyZWF0ZSddO1xuXG4gICAgICAgIGZpZWxkLnZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzO1xuICAgICAgICBmaWVsZC5hc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnM7XG5cbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdsaW5lLWl0ZW1zJykge1xuICAgICAgICAgICAgZmllbGQudmFsdWVPYmplY3RBcnJheSA9IHJlY29yZC5hdHRyaWJ1dGVzW2ZpZWxkLm5hbWVdO1xuICAgICAgICAgICAgZmllbGQuaXRlbUZvcm1BcnJheSA9IG5ldyBVbnR5cGVkRm9ybUFycmF5KFtdKTtcbiAgICAgICAgICAgIGZpZWxkLmZvcm1Db250cm9sID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbChmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWVsZC5mb3JtQ29udHJvbCA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmllbGQuYXR0cmlidXRlcyA9IHt9O1xuICAgICAgICBmaWVsZC5zb3VyY2UgPSAnZmllbGQnO1xuICAgICAgICBmaWVsZC5sb2dpYyA9IHZpZXdGaWVsZC5sb2dpYyB8fCBkZWZpbml0aW9uLmxvZ2ljIHx8IG51bGw7XG4gICAgICAgIGZpZWxkLmRpc3BsYXlMb2dpYyA9IHZpZXdGaWVsZC5kaXNwbGF5TG9naWMgfHwgZGVmaW5pdGlvbi5kaXNwbGF5TG9naWMgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgZmllbGREZXBlbmRlbmNpZXM6IE9iamVjdE1hcCA9IHt9O1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVEZXBlbmRlbmNpZXM6IHsgW2tleTogc3RyaW5nXTogQXR0cmlidXRlRGVwZW5kZW5jeSB9ID0ge307XG5cblxuICAgICAgICB0aGlzLmFkZEZpZWxkRGVwZW5kZW5jaWVzKGZpZWxkLmxvZ2ljLCBmaWVsZERlcGVuZGVuY2llcywgYXR0cmlidXRlRGVwZW5kZW5jaWVzLCAnbG9naWMnKTtcbiAgICAgICAgdGhpcy5hZGRGaWVsZERlcGVuZGVuY2llcyhmaWVsZC5kaXNwbGF5TG9naWMsIGZpZWxkRGVwZW5kZW5jaWVzLCBhdHRyaWJ1dGVEZXBlbmRlbmNpZXMsICdkaXNwbGF5TG9naWMnKTtcblxuICAgICAgICBmaWVsZC5hdHRyaWJ1dGVEZXBlbmRlbmNpZXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVEZXBlbmRlbmNpZXMpLm1hcChrZXkgPT4gYXR0cmlidXRlRGVwZW5kZW5jaWVzW2tleV0pO1xuICAgICAgICBmaWVsZC5maWVsZERlcGVuZGVuY2llcyA9IGZpZWxkRGVwZW5kZW5jaWVzO1xuXG4gICAgICAgIGlmICh2YWx1ZUxpc3QpIHtcbiAgICAgICAgICAgIGZpZWxkLnZhbHVlTGlzdCA9IHZhbHVlTGlzdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZU9iamVjdCkge1xuICAgICAgICAgICAgZmllbGQudmFsdWVPYmplY3QgPSB2YWx1ZU9iamVjdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYW5ndWFnZSkge1xuICAgICAgICAgICAgZmllbGQubGFiZWwgPSB0aGlzLmdldEZpZWxkTGFiZWwodmlld0ZpZWxkLmxhYmVsLCBtb2R1bGUsIGxhbmd1YWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZmllbGQubGFiZWxLZXkgJiYgdmlld0ZpZWxkLmxhYmVsKSB7XG4gICAgICAgICAgICBmaWVsZC5sYWJlbEtleSA9IHZpZXdGaWVsZC5sYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZEZpZWxkRGVwZW5kZW5jaWVzKGNvbmZpZzogRmllbGRMb2dpY01hcCwgZmllbGREZXBlbmRlbmNpZXM6IE9iamVjdE1hcCwgYXR0cmlidXRlRGVwZW5kZW5jaWVzOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IEF0dHJpYnV0ZURlcGVuZGVuY3lcbiAgICB9LCB0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyAmJiBPYmplY3Qua2V5cyhjb25maWcpLmxlbmd0aCkge1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2gobG9naWNLZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gY29uZmlnW2xvZ2ljS2V5XSB8fCB7fSBhcyBGaWVsZExvZ2ljO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFlbnRyeS5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5wYXJhbXMgJiYgZW50cnkucGFyYW1zLmF0dHJpYnV0ZURlcGVuZGVuY2llcykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5wYXJhbXMuYXR0cmlidXRlRGVwZW5kZW5jaWVzLmZvckVhY2goZGVwZW5kZW5jeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXBlbmRlbmN5S2V5ID0gZGVwZW5kZW5jeS5maWVsZCArICcuJyArIGRlcGVuZGVuY3kuYXR0cmlidXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3lLZXldID0gZGVwZW5kZW5jeTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZW50cnkucGFyYW1zICYmIGVudHJ5LnBhcmFtcy5maWVsZERlcGVuZGVuY2llcykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5wYXJhbXMuZmllbGREZXBlbmRlbmNpZXMuZm9yRWFjaChkZXBlbmRlbmN5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkRGVwZW5kZW5jeSA9IGZpZWxkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldID8/IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlcyA9IGZpZWxkRGVwZW5kZW5jeVsndHlwZXMnXSA/PyBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzLnB1c2godHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBkZXBlbmRlbmN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNhdmUgdmFsaWRhdG9ycyBmb3IgdGhlIGdpdmVuIGZpZWxkIGRlZmluaXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHJldHVybnMge29iamVjdH0gVmFsaWRhdG9yIG1hcFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTYXZlVmFsaWRhdG9ycyhcbiAgICAgICAgcmVjb3JkOiBSZWNvcmQsXG4gICAgICAgIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICk6IHsgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXTsgYXN5bmNWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10gfSB7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9ycyA9IHRoaXMudmFsaWRhdGlvbk1hbmFnZXIuZ2V0U2F2ZVZhbGlkYXRpb25zKHJlY29yZC5tb2R1bGUsIHZpZXdGaWVsZCwgcmVjb3JkKTtcbiAgICAgICAgY29uc3QgYXN5bmNWYWxpZGF0b3JzID0gdGhpcy52YWxpZGF0aW9uTWFuYWdlci5nZXRBc3luY1NhdmVWYWxpZGF0aW9ucyhyZWNvcmQubW9kdWxlLCB2aWV3RmllbGQsIHJlY29yZCk7XG4gICAgICAgIHJldHVybiB7dmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYXR0cmlidXRlIHZhbHVlIG9uIHBhcmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGQgRmllbGRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBTdHJpbmdcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGVmaW5pdGlvbiBGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcmV0dXJucyBhbnlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UGFyZW50VmFsdWUocmVjb3JkOiBSZWNvcmQsIGZpZWxkOiBGaWVsZCwgbmFtZTogc3RyaW5nLCBkZWZpbml0aW9uOiBGaWVsZERlZmluaXRpb24pOiBhbnkge1xuICAgICAgICBjb25zdCB2YWx1ZVBhcmVudCA9IGRlZmluaXRpb24udmFsdWVQYXJlbnQgPz8gJ2ZpZWxkJztcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdmFsdWVQYXJlbnQgPT09ICdyZWNvcmQnID8gcmVjb3JkIDogZmllbGQ7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb24udmFsdWVQYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0KHBhcmVudCwgZGVmaW5pdGlvbi52YWx1ZVBhdGgsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZVBhcmVudCA9PT0gJ3JlY29yZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXQocmVjb3JkLmF0dHJpYnV0ZXMsIG5hbWUsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXQoZmllbGQudmFsdWVPYmplY3QsIG5hbWUsICcnKTtcbiAgICB9XG5cbn1cbiJdfQ==