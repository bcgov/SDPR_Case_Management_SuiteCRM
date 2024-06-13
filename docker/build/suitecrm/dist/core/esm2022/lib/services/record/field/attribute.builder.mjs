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
import { FieldBuilder } from './field.builder';
import { ValidationManager } from '../validation/validation.manager';
import { DataTypeFormatter } from '../../formatters/data-type.formatter.service';
import { Injectable } from '@angular/core';
import isObjectLike from 'lodash-es/isObjectLike';
import * as i0 from "@angular/core";
import * as i1 from "../validation/validation.manager";
import * as i2 from "../../formatters/data-type.formatter.service";
class AttributeBuilder extends FieldBuilder {
    constructor(validationManager, typeFormatter) {
        super(validationManager, typeFormatter);
        this.validationManager = validationManager;
        this.typeFormatter = typeFormatter;
    }
    /**
     * Create and add attributes fields to field
     *
     * @param {object} record Record
     * @param {object} fields FieldMap
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @param {function} buildAttributeFunction
     * @param {function} addAttributeFunction
     */
    addAttributes(record, fields, viewField, language, buildAttributeFunction, addAttributeFunction) {
        const fieldKeys = Object.keys(fields) || [];
        if (fieldKeys.length < 1) {
            return;
        }
        fieldKeys.forEach(key => {
            const field = fields[key];
            this.addFieldAttributes(record, field, language, buildAttributeFunction, addAttributeFunction);
        });
    }
    /**
     * Create and add attributes fields to field
     *
     * @param {object} record Record
     * @param {object} field Field
     * @param {object} language LanguageStore
     * @param {function} buildAttributeFunction
     * @param {function} addAttributeFunction
     */
    addFieldAttributes(record, field, language, buildAttributeFunction, addAttributeFunction) {
        const definition = (field && field.definition) || {};
        const attributes = definition.attributeFields || {};
        const attributeKeys = Object.keys(attributes);
        attributeKeys.forEach(key => {
            const attributeDefinition = attributes[key];
            if (!!field.attributes[key]) {
                return;
            }
            const attributeViewField = {
                name: attributeDefinition.name,
                label: attributeDefinition.vname,
                type: attributeDefinition.type,
                fieldDefinition: attributeDefinition
            };
            const attributeField = buildAttributeFunction(record, field, attributeViewField, language);
            addAttributeFunction(record, field, attributeDefinition.name, attributeField);
        });
    }
    /**
     * Build field
     *
     * @param {object} record Record
     * @param {object} parentField Field
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object} FieldAttribute
     */
    buildAttribute(record, parentField, viewField, language = null) {
        const definition = (viewField && viewField.fieldDefinition) || {};
        const { value, valueList, valueObject } = this.parseAttributeValue(viewField, definition, record, parentField);
        const { validators, asyncValidators } = this.getSaveValidators(record, viewField);
        const field = this.setupField(record.module, viewField, value, valueList, valueObject, record, definition, validators, asyncValidators, language);
        const fieldAttribute = field;
        fieldAttribute.valuePath = definition.valuePath;
        fieldAttribute.valueParent = definition.valueParent;
        fieldAttribute.source = 'attribute';
        fieldAttribute.parentKey = parentField.name;
        return fieldAttribute;
    }
    /**
     * Add attribute to record
     *
     * @param {object} record Record
     * @param {object} field Field
     * @param {string} name string
     * @param {object} attribute FieldAttribute
     */
    addAttributeToRecord(record, field, name, attribute) {
        if (!record || !name || !field || !attribute) {
            return;
        }
        field.attributes = field.attributes || {};
        field.attributes[name] = attribute;
        if (record.formGroup && attribute.formControl) {
            record.formGroup.addControl(name, attribute.formControl);
        }
    }
    /**
     * Parse attribute from field
     *
     * @param {object} viewField ViewFieldDefinition
     * @param {object} definition FieldDefinition
     * @param {object} record Record
     * @param {object} field Field
     * @returns {object} value object
     */
    parseAttributeValue(viewField, definition, record, field) {
        const type = (viewField && viewField.type) || '';
        const source = (definition && definition.source) || '';
        const rname = (definition && definition.rname) || 'name';
        const viewName = viewField.name || '';
        let value;
        let valueList = null;
        if (type === 'relate' && source === 'non-db' && rname !== '') {
            value = this.getParentValue(record, field, viewName, definition)[rname];
            const valueObject = this.getParentValue(record, field, viewName, definition);
            return { value, valueList, valueObject };
        }
        if (!viewName) {
            value = '';
        }
        else {
            value = this.getParentValue(record, field, viewName, definition);
        }
        value = this.getParentValue(record, field, viewName, definition);
        if (Array.isArray(value)) {
            return {
                value: null,
                valueList: value,
                valueObject: null
            };
        }
        if (isObjectLike(value)) {
            return {
                value: null,
                valueList: null,
                valueObject: value
            };
        }
        return { value, valueList: null, valueObject: null };
    }
    static { this.ɵfac = function AttributeBuilder_Factory(t) { return new (t || AttributeBuilder)(i0.ɵɵinject(i1.ValidationManager), i0.ɵɵinject(i2.DataTypeFormatter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AttributeBuilder, factory: AttributeBuilder.ɵfac, providedIn: 'root' }); }
}
export { AttributeBuilder };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttributeBuilder, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ValidationManager }, { type: i2.DataTypeFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLmJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvcmVjb3JkL2ZpZWxkL2F0dHJpYnV0ZS5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFHN0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDL0UsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLFlBQVksTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVsRCxNQUdhLGdCQUFpQixTQUFRLFlBQVk7SUFFOUMsWUFDYyxpQkFBb0MsRUFDcEMsYUFBZ0M7UUFFMUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBSDlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsa0JBQWEsR0FBYixhQUFhLENBQW1CO0lBRzlDLENBQUM7SUFHRDs7Ozs7Ozs7O09BU0c7SUFDSSxhQUFhLENBQ2hCLE1BQWMsRUFDZCxNQUFnQixFQUNoQixTQUE4QixFQUM5QixRQUF1QixFQUN2QixzQkFBZ0MsRUFDaEMsb0JBQThCO1FBRTlCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRzVDLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEIsT0FBTztTQUNWO1FBRUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFD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QyxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBQyxDQUFDO1NBQzFDO1FBRUQsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDZDthQUFNO1lBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDcEU7UUFFRCxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVqRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEIsT0FBTztnQkFDSCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsV0FBVyxFQUFFLElBQUk7YUFDcEIsQ0FBQTtTQUNKO1FBRUQsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsT0FBTztnQkFDSCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxTQUFTLEVBQUUsSUFBSTtnQkFDZixXQUFXLEVBQUUsS0FBSzthQUNyQixDQUFBO1NBQ0o7UUFFRCxPQUFPLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQ3ZELENBQUM7aUZBM01RLGdCQUFnQjt1RUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQixtQkFGYixNQUFNOztTQUVULGdCQUFnQjt1RkFBaEIsZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtGaWVsZEJ1aWxkZXJ9IGZyb20gJy4vZmllbGQuYnVpbGRlcic7XG5pbXBvcnQge0ZpZWxkLCBGaWVsZEF0dHJpYnV0ZSwgRmllbGREZWZpbml0aW9uLCBGaWVsZE1hcCwgUmVjb3JkLCBWaWV3RmllbGREZWZpbml0aW9ufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge1ZhbGlkYXRpb25NYW5hZ2VyfSBmcm9tICcuLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24ubWFuYWdlcic7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICdsb2Rhc2gtZXMvaXNPYmplY3RMaWtlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVCdWlsZGVyIGV4dGVuZHMgRmllbGRCdWlsZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgdmFsaWRhdGlvbk1hbmFnZXI6IFZhbGlkYXRpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIodmFsaWRhdGlvbk1hbmFnZXIsIHR5cGVGb3JtYXR0ZXIpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuZCBhZGQgYXR0cmlidXRlcyBmaWVsZHMgdG8gZmllbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyBGaWVsZE1hcFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGQgVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYW5ndWFnZSBMYW5ndWFnZVN0b3JlXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gYnVpbGRBdHRyaWJ1dGVGdW5jdGlvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGFkZEF0dHJpYnV0ZUZ1bmN0aW9uXG4gICAgICovXG4gICAgcHVibGljIGFkZEF0dHJpYnV0ZXMoXG4gICAgICAgIHJlY29yZDogUmVjb3JkLFxuICAgICAgICBmaWVsZHM6IEZpZWxkTWFwLFxuICAgICAgICB2aWV3RmllbGQ6IFZpZXdGaWVsZERlZmluaXRpb24sXG4gICAgICAgIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBidWlsZEF0dHJpYnV0ZUZ1bmN0aW9uOiBGdW5jdGlvbixcbiAgICAgICAgYWRkQXR0cmlidXRlRnVuY3Rpb246IEZ1bmN0aW9uLFxuICAgICk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWVsZEtleXMgPSBPYmplY3Qua2V5cyhmaWVsZHMpIHx8IFtdO1xuXG5cbiAgICAgICAgaWYgKGZpZWxkS2V5cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNba2V5XTtcbiAgICAgICAgICAgIHRoaXMuYWRkRmllbGRBdHRyaWJ1dGVzKFxuICAgICAgICAgICAgICAgIHJlY29yZCxcbiAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgICAgICBidWlsZEF0dHJpYnV0ZUZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIGFkZEF0dHJpYnV0ZUZ1bmN0aW9uXG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuZCBhZGQgYXR0cmlidXRlcyBmaWVsZHMgdG8gZmllbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkIEZpZWxkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGxhbmd1YWdlIExhbmd1YWdlU3RvcmVcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBidWlsZEF0dHJpYnV0ZUZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gYWRkQXR0cmlidXRlRnVuY3Rpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkRmllbGRBdHRyaWJ1dGVzKFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgZmllbGQ6IEZpZWxkLFxuICAgICAgICBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgYnVpbGRBdHRyaWJ1dGVGdW5jdGlvbjogRnVuY3Rpb24sXG4gICAgICAgIGFkZEF0dHJpYnV0ZUZ1bmN0aW9uOiBGdW5jdGlvblxuICAgICk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSAoZmllbGQgJiYgZmllbGQuZGVmaW5pdGlvbikgfHwge307XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBkZWZpbml0aW9uLmF0dHJpYnV0ZUZpZWxkcyB8fCB7fTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlS2V5cyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpO1xuXG4gICAgICAgIGF0dHJpYnV0ZUtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlRGVmaW5pdGlvbiA9IGF0dHJpYnV0ZXNba2V5XTtcblxuICAgICAgICAgICAgaWYgKCEhZmllbGQuYXR0cmlidXRlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWaWV3RmllbGQgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogYXR0cmlidXRlRGVmaW5pdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBhdHRyaWJ1dGVEZWZpbml0aW9uLnZuYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IGF0dHJpYnV0ZURlZmluaXRpb24udHlwZSxcbiAgICAgICAgICAgICAgICBmaWVsZERlZmluaXRpb246IGF0dHJpYnV0ZURlZmluaXRpb25cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZUZpZWxkID0gYnVpbGRBdHRyaWJ1dGVGdW5jdGlvbihyZWNvcmQsIGZpZWxkLCBhdHRyaWJ1dGVWaWV3RmllbGQsIGxhbmd1YWdlKTtcbiAgICAgICAgICAgIGFkZEF0dHJpYnV0ZUZ1bmN0aW9uKHJlY29yZCwgZmllbGQsIGF0dHJpYnV0ZURlZmluaXRpb24ubmFtZSwgYXR0cmlidXRlRmllbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBmaWVsZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyZW50RmllbGQgRmllbGRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmlld0ZpZWxkIFZpZXdGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2UgTGFuZ3VhZ2VTdG9yZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IEZpZWxkQXR0cmlidXRlXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkQXR0cmlidXRlKHJlY29yZDogUmVjb3JkLCBwYXJlbnRGaWVsZDogRmllbGQsIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbiwgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUgPSBudWxsKTogRmllbGRBdHRyaWJ1dGUge1xuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSAodmlld0ZpZWxkICYmIHZpZXdGaWVsZC5maWVsZERlZmluaXRpb24pIHx8IHt9IGFzIEZpZWxkRGVmaW5pdGlvbjtcbiAgICAgICAgY29uc3Qge3ZhbHVlLCB2YWx1ZUxpc3QsIHZhbHVlT2JqZWN0fSA9IHRoaXMucGFyc2VBdHRyaWJ1dGVWYWx1ZSh2aWV3RmllbGQsIGRlZmluaXRpb24sIHJlY29yZCwgcGFyZW50RmllbGQpO1xuICAgICAgICBjb25zdCB7dmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzfSA9IHRoaXMuZ2V0U2F2ZVZhbGlkYXRvcnMocmVjb3JkLCB2aWV3RmllbGQpO1xuXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5zZXR1cEZpZWxkKFxuICAgICAgICAgICAgcmVjb3JkLm1vZHVsZSxcbiAgICAgICAgICAgIHZpZXdGaWVsZCxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgdmFsdWVMaXN0LFxuICAgICAgICAgICAgdmFsdWVPYmplY3QsXG4gICAgICAgICAgICByZWNvcmQsXG4gICAgICAgICAgICBkZWZpbml0aW9uLFxuICAgICAgICAgICAgdmFsaWRhdG9ycyxcbiAgICAgICAgICAgIGFzeW5jVmFsaWRhdG9ycyxcbiAgICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZmllbGRBdHRyaWJ1dGUgPSBmaWVsZCBhcyBGaWVsZEF0dHJpYnV0ZTtcbiAgICAgICAgZmllbGRBdHRyaWJ1dGUudmFsdWVQYXRoID0gZGVmaW5pdGlvbi52YWx1ZVBhdGg7XG4gICAgICAgIGZpZWxkQXR0cmlidXRlLnZhbHVlUGFyZW50ID0gZGVmaW5pdGlvbi52YWx1ZVBhcmVudDtcbiAgICAgICAgZmllbGRBdHRyaWJ1dGUuc291cmNlID0gJ2F0dHJpYnV0ZSc7XG4gICAgICAgIGZpZWxkQXR0cmlidXRlLnBhcmVudEtleSA9IHBhcmVudEZpZWxkLm5hbWU7XG5cbiAgICAgICAgcmV0dXJuIGZpZWxkQXR0cmlidXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhdHRyaWJ1dGUgdG8gcmVjb3JkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZCBGaWVsZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGUgRmllbGRBdHRyaWJ1dGVcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkQXR0cmlidXRlVG9SZWNvcmQocmVjb3JkOiBSZWNvcmQsIGZpZWxkOiBGaWVsZCwgbmFtZTogc3RyaW5nLCBhdHRyaWJ1dGU6IEZpZWxkQXR0cmlidXRlKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFyZWNvcmQgfHwgIW5hbWUgfHwgIWZpZWxkIHx8ICFhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkLmF0dHJpYnV0ZXMgPSBmaWVsZC5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gICAgICAgIGZpZWxkLmF0dHJpYnV0ZXNbbmFtZV0gPSBhdHRyaWJ1dGU7XG5cbiAgICAgICAgaWYgKHJlY29yZC5mb3JtR3JvdXAgJiYgYXR0cmlidXRlLmZvcm1Db250cm9sKSB7XG4gICAgICAgICAgICByZWNvcmQuZm9ybUdyb3VwLmFkZENvbnRyb2wobmFtZSwgYXR0cmlidXRlLmZvcm1Db250cm9sKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgYXR0cmlidXRlIGZyb20gZmllbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGQgVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkZWZpbml0aW9uIEZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkIEZpZWxkXG4gICAgICogQHJldHVybnMge29iamVjdH0gdmFsdWUgb2JqZWN0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHBhcnNlQXR0cmlidXRlVmFsdWUoXG4gICAgICAgIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgZGVmaW5pdGlvbjogRmllbGREZWZpbml0aW9uLFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgZmllbGQ6IEZpZWxkXG4gICAgKTogeyB2YWx1ZTogc3RyaW5nOyB2YWx1ZUxpc3Q6IHN0cmluZ1tdOyB2YWx1ZU9iamVjdD86IGFueSB9IHtcblxuICAgICAgICBjb25zdCB0eXBlID0gKHZpZXdGaWVsZCAmJiB2aWV3RmllbGQudHlwZSkgfHwgJyc7XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IChkZWZpbml0aW9uICYmIGRlZmluaXRpb24uc291cmNlKSB8fCAnJztcbiAgICAgICAgY29uc3Qgcm5hbWUgPSAoZGVmaW5pdGlvbiAmJiBkZWZpbml0aW9uLnJuYW1lKSB8fCAnbmFtZSc7XG4gICAgICAgIGNvbnN0IHZpZXdOYW1lID0gdmlld0ZpZWxkLm5hbWUgfHwgJyc7XG4gICAgICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuICAgICAgICBsZXQgdmFsdWVMaXN0OiBzdHJpbmdbXSA9IG51bGw7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdyZWxhdGUnICYmIHNvdXJjZSA9PT0gJ25vbi1kYicgJiYgcm5hbWUgIT09ICcnKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0UGFyZW50VmFsdWUocmVjb3JkLCBmaWVsZCwgdmlld05hbWUsIGRlZmluaXRpb24pW3JuYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlT2JqZWN0ID0gdGhpcy5nZXRQYXJlbnRWYWx1ZShyZWNvcmQsIGZpZWxkLCB2aWV3TmFtZSwgZGVmaW5pdGlvbik7XG4gICAgICAgICAgICByZXR1cm4ge3ZhbHVlLCB2YWx1ZUxpc3QsIHZhbHVlT2JqZWN0fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdmlld05hbWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0UGFyZW50VmFsdWUocmVjb3JkLCBmaWVsZCwgdmlld05hbWUsIGRlZmluaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSB0aGlzLmdldFBhcmVudFZhbHVlKHJlY29yZCwgZmllbGQsIHZpZXdOYW1lLCBkZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgdmFsdWVMaXN0OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZU9iamVjdDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0TGlrZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICAgICAgdmFsdWVMaXN0OiBudWxsLFxuICAgICAgICAgICAgICAgIHZhbHVlT2JqZWN0OiB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt2YWx1ZSwgdmFsdWVMaXN0OiBudWxsLCB2YWx1ZU9iamVjdDogbnVsbH07XG4gICAgfVxuXG59XG4iXX0=