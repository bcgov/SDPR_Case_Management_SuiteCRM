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
import { FilterFieldBuilder } from './filter-field.builder';
import isObjectLike from 'lodash-es/isObjectLike';
import * as i0 from "@angular/core";
import * as i1 from "../validation/validation.manager";
import * as i2 from "../../formatters/data-type.formatter.service";
class FilterAttributeBuilder extends FilterFieldBuilder {
    constructor(validationManager, typeFormatter) {
        super(validationManager, typeFormatter);
        this.validationManager = validationManager;
        this.typeFormatter = typeFormatter;
    }
    /**
     * Build filter attribute
     *
     * @param {object} savedFilter SavedFilter
     * @param {object} parentField Field
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object} FieldAttribute
     */
    buildFilterAttribute(savedFilter, parentField, viewField, language = null) {
        const definition = (viewField && viewField.fieldDefinition) || {};
        if (!definition.valuePath) {
            definition.valuePath = 'criteria.' + (viewField.name || definition.name);
        }
        const { value, valueList, valueObject } = this.parseFilterAttributeValue(viewField, definition, savedFilter, parentField);
        const { validators, asyncValidators } = this.getFilterValidators(savedFilter, viewField);
        const field = this.setupField(savedFilter.searchModule, viewField, value, valueList, valueObject, savedFilter, definition, validators, asyncValidators, language);
        const fieldAttribute = field;
        fieldAttribute.valuePath = definition.valuePath;
        fieldAttribute.source = 'attribute';
        fieldAttribute.parentKey = parentField.definition.name;
        return fieldAttribute;
    }
    /**
     * Add attribute to SavedFilter
     *
     * @param {object} savedFilter SavedFilter
     * @param {object} field Field
     * @param {string} name string
     * @param {object} attribute FieldAttribute
     */
    addAttributeToSavedFilter(savedFilter, field, name, attribute) {
        if (!savedFilter || !name || !field || !attribute) {
            return;
        }
        field.attributes = field.attributes || {};
        field.attributes[name] = attribute;
        if (savedFilter.criteriaFormGroup && attribute.formControl) {
            savedFilter.criteriaFormGroup.addControl(name, attribute.formControl);
        }
    }
    /**
     * Parse filter attribute from field
     *
     * @param {object} viewField ViewFieldDefinition
     * @param {object} definition FieldDefinition
     * @param {object} record Record
     * @param {object} field Field
     * @returns {object} value object
     */
    parseFilterAttributeValue(viewField, definition, record, field) {
        const viewName = viewField.name || '';
        let value;
        if (!viewName) {
            value = '';
        }
        else {
            value = this.getParentValue(record, field, viewName, definition);
        }
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
    static { this.ɵfac = function FilterAttributeBuilder_Factory(t) { return new (t || FilterAttributeBuilder)(i0.ɵɵinject(i1.ValidationManager), i0.ɵɵinject(i2.DataTypeFormatter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilterAttributeBuilder, factory: FilterAttributeBuilder.ɵfac, providedIn: 'root' }); }
}
export { FilterAttributeBuilder };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterAttributeBuilder, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ValidationManager }, { type: i2.DataTypeFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWF0dHJpYnV0ZS5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3JlY29yZC9maWVsZC9maWx0ZXItYXR0cmlidXRlLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFJL0UsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFbEQsTUFHYSxzQkFBdUIsU0FBUSxrQkFBa0I7SUFFMUQsWUFDYyxpQkFBb0MsRUFDcEMsYUFBZ0M7UUFFMUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBSDlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsa0JBQWEsR0FBYixhQUFhLENBQW1CO0lBRzlDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLG9CQUFvQixDQUN2QixXQUF3QixFQUN4QixXQUFrQixFQUNsQixTQUE4QixFQUM5QixXQUEwQixJQUFJO1FBRzlCLE1BQU0sVUFBVSxHQUFHLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFxQixDQUFDO1FBRXJGLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsV0FBVyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUU7UUFFRCxNQUFNLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUMsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDeEgsTUFBTSxFQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXZGLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQ3pCLFdBQVcsQ0FBQyxZQUFZLEVBQ3hCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFVBQVUsRUFDVixlQUFlLEVBQ2YsUUFBUSxDQUNYLENBQUM7UUFFRixNQUFNLGNBQWMsR0FBRyxLQUF1QixDQUFDO1FBQy9DLGNBQWMsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUNoRCxjQUFjLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztRQUNwQyxjQUFjLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBRXZELE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0kseUJBQXlCLENBQUMsV0FBd0IsRUFBRSxLQUFZLEVBQUUsSUFBWSxFQUFFLFNBQXlCO1FBRTVHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDL0MsT0FBTztTQUNWO1FBRUQsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUUxQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUVuQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQ3hELFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN6RTtJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNPLHlCQUF5QixDQUMvQixTQUE4QixFQUM5QixVQUEyQixFQUMzQixNQUFjLEVBQ2QsS0FBWTtRQUdaLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3RDLElBQUksS0FBVSxDQUFDO1FBRWYsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDZDthQUFNO1lBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDcEU7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEIsT0FBTztnQkFDSCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsV0FBVyxFQUFFLElBQUk7YUFDcEIsQ0FBQTtTQUNKO1FBRUQsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsT0FBTztnQkFDSCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxTQUFTLEVBQUUsSUFBSTtnQkFDZixXQUFXLEVBQUUsS0FBSzthQUNyQixDQUFBO1NBQ0o7UUFFRCxPQUFPLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQ3ZELENBQUM7dUZBeEhRLHNCQUFzQjt1RUFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQixtQkFGbkIsTUFBTTs7U0FFVCxzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQUhsQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZhbGlkYXRpb25NYW5hZ2VyfSBmcm9tICcuLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24ubWFuYWdlcic7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge1NhdmVkRmlsdGVyfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkLCBGaWVsZEF0dHJpYnV0ZSwgRmllbGREZWZpbml0aW9uLCBSZWNvcmQsIFZpZXdGaWVsZERlZmluaXRpb259IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7RmlsdGVyRmllbGRCdWlsZGVyfSBmcm9tICcuL2ZpbHRlci1maWVsZC5idWlsZGVyJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnbG9kYXNoLWVzL2lzT2JqZWN0TGlrZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyQXR0cmlidXRlQnVpbGRlciBleHRlbmRzIEZpbHRlckZpZWxkQnVpbGRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHZhbGlkYXRpb25NYW5hZ2VyOiBWYWxpZGF0aW9uTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHZhbGlkYXRpb25NYW5hZ2VyLCB0eXBlRm9ybWF0dGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBmaWx0ZXIgYXR0cmlidXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc2F2ZWRGaWx0ZXIgU2F2ZWRGaWx0ZXJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyZW50RmllbGQgRmllbGRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmlld0ZpZWxkIFZpZXdGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2UgTGFuZ3VhZ2VTdG9yZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IEZpZWxkQXR0cmlidXRlXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkRmlsdGVyQXR0cmlidXRlKFxuICAgICAgICBzYXZlZEZpbHRlcjogU2F2ZWRGaWx0ZXIsXG4gICAgICAgIHBhcmVudEZpZWxkOiBGaWVsZCxcbiAgICAgICAgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uLFxuICAgICAgICBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSA9IG51bGxcbiAgICApOiBGaWVsZEF0dHJpYnV0ZSB7XG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9ICh2aWV3RmllbGQgJiYgdmlld0ZpZWxkLmZpZWxkRGVmaW5pdGlvbikgfHwge30gYXMgRmllbGREZWZpbml0aW9uO1xuXG4gICAgICAgIGlmICghZGVmaW5pdGlvbi52YWx1ZVBhdGgpIHtcbiAgICAgICAgICAgIGRlZmluaXRpb24udmFsdWVQYXRoID0gJ2NyaXRlcmlhLicgKyAodmlld0ZpZWxkLm5hbWUgfHwgZGVmaW5pdGlvbi5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHt2YWx1ZSwgdmFsdWVMaXN0LCB2YWx1ZU9iamVjdH0gPSB0aGlzLnBhcnNlRmlsdGVyQXR0cmlidXRlVmFsdWUodmlld0ZpZWxkLCBkZWZpbml0aW9uLCBzYXZlZEZpbHRlciwgcGFyZW50RmllbGQpO1xuICAgICAgICBjb25zdCB7dmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzfSA9IHRoaXMuZ2V0RmlsdGVyVmFsaWRhdG9ycyhzYXZlZEZpbHRlciwgdmlld0ZpZWxkKTtcblxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuc2V0dXBGaWVsZChcbiAgICAgICAgICAgIHNhdmVkRmlsdGVyLnNlYXJjaE1vZHVsZSxcbiAgICAgICAgICAgIHZpZXdGaWVsZCxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgdmFsdWVMaXN0LFxuICAgICAgICAgICAgdmFsdWVPYmplY3QsXG4gICAgICAgICAgICBzYXZlZEZpbHRlcixcbiAgICAgICAgICAgIGRlZmluaXRpb24sXG4gICAgICAgICAgICB2YWxpZGF0b3JzLFxuICAgICAgICAgICAgYXN5bmNWYWxpZGF0b3JzLFxuICAgICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBmaWVsZEF0dHJpYnV0ZSA9IGZpZWxkIGFzIEZpZWxkQXR0cmlidXRlO1xuICAgICAgICBmaWVsZEF0dHJpYnV0ZS52YWx1ZVBhdGggPSBkZWZpbml0aW9uLnZhbHVlUGF0aDtcbiAgICAgICAgZmllbGRBdHRyaWJ1dGUuc291cmNlID0gJ2F0dHJpYnV0ZSc7XG4gICAgICAgIGZpZWxkQXR0cmlidXRlLnBhcmVudEtleSA9IHBhcmVudEZpZWxkLmRlZmluaXRpb24ubmFtZTtcblxuICAgICAgICByZXR1cm4gZmllbGRBdHRyaWJ1dGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGF0dHJpYnV0ZSB0byBTYXZlZEZpbHRlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNhdmVkRmlsdGVyIFNhdmVkRmlsdGVyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkIEZpZWxkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgc3RyaW5nXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZSBGaWVsZEF0dHJpYnV0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRBdHRyaWJ1dGVUb1NhdmVkRmlsdGVyKHNhdmVkRmlsdGVyOiBTYXZlZEZpbHRlciwgZmllbGQ6IEZpZWxkLCBuYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZTogRmllbGRBdHRyaWJ1dGUpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXNhdmVkRmlsdGVyIHx8ICFuYW1lIHx8ICFmaWVsZCB8fCAhYXR0cmlidXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZC5hdHRyaWJ1dGVzID0gZmllbGQuYXR0cmlidXRlcyB8fCB7fTtcblxuICAgICAgICBmaWVsZC5hdHRyaWJ1dGVzW25hbWVdID0gYXR0cmlidXRlO1xuXG4gICAgICAgIGlmIChzYXZlZEZpbHRlci5jcml0ZXJpYUZvcm1Hcm91cCAmJiBhdHRyaWJ1dGUuZm9ybUNvbnRyb2wpIHtcbiAgICAgICAgICAgIHNhdmVkRmlsdGVyLmNyaXRlcmlhRm9ybUdyb3VwLmFkZENvbnRyb2wobmFtZSwgYXR0cmlidXRlLmZvcm1Db250cm9sKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIGZpbHRlciBhdHRyaWJ1dGUgZnJvbSBmaWVsZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRlZmluaXRpb24gRmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGQgRmllbGRcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSB2YWx1ZSBvYmplY3RcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcGFyc2VGaWx0ZXJBdHRyaWJ1dGVWYWx1ZShcbiAgICAgICAgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uLFxuICAgICAgICBkZWZpbml0aW9uOiBGaWVsZERlZmluaXRpb24sXG4gICAgICAgIHJlY29yZDogUmVjb3JkLFxuICAgICAgICBmaWVsZDogRmllbGRcbiAgICApOiB7IHZhbHVlOiBzdHJpbmc7IHZhbHVlTGlzdDogc3RyaW5nW107IHZhbHVlT2JqZWN0PzogYW55IH0ge1xuXG4gICAgICAgIGNvbnN0IHZpZXdOYW1lID0gdmlld0ZpZWxkLm5hbWUgfHwgJyc7XG4gICAgICAgIGxldCB2YWx1ZTogYW55O1xuXG4gICAgICAgIGlmICghdmlld05hbWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0UGFyZW50VmFsdWUocmVjb3JkLCBmaWVsZCwgdmlld05hbWUsIGRlZmluaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgIHZhbHVlTGlzdDogdmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWVPYmplY3Q6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc09iamVjdExpa2UodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgICAgICAgIHZhbHVlTGlzdDogbnVsbCxcbiAgICAgICAgICAgICAgICB2YWx1ZU9iamVjdDogdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7dmFsdWUsIHZhbHVlTGlzdDogbnVsbCwgdmFsdWVPYmplY3Q6IG51bGx9O1xuICAgIH1cbn1cbiJdfQ==