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
import { Injectable } from '@angular/core';
import { ValidationManager } from '../validation/validation.manager';
import { DataTypeFormatter } from '../../formatters/data-type.formatter.service';
import { deepClone } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../validation/validation.manager";
import * as i2 from "../../formatters/data-type.formatter.service";
class FilterFieldBuilder extends FieldBuilder {
    constructor(validationManager, typeFormatter) {
        super(validationManager, typeFormatter);
        this.validationManager = validationManager;
        this.typeFormatter = typeFormatter;
    }
    /**
     * Build filter field
     *
     * @param {object} savedFilter SavedFilter
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object} Field
     */
    buildFilterField(savedFilter, viewField, language = null) {
        const definition = (viewField && viewField.fieldDefinition) || {};
        const { validators, asyncValidators } = this.getFilterValidators(savedFilter, viewField);
        const field = this.setupField(savedFilter.searchModule, viewField, null, null, null, savedFilter, definition, validators, asyncValidators, language);
        field.criteria = this.initFieldFilter(savedFilter.criteria, viewField, field);
        return field;
    }
    /**
     * Get Filter Validators for given field definition
     *
     * @param {object} record  Record
     * @param {object} viewField ViewFieldDefinition
     * @returns {object} validator map
     */
    getFilterValidators(record, viewField) {
        const validators = this.validationManager.getFilterValidations(record.searchModule, viewField, record);
        const asyncValidators = [];
        return { validators, asyncValidators };
    }
    /**
     * Init filter fields
     *
     * @param {object} searchCriteria to use
     * @param {object} viewField to init
     * @param {object} field to init
     * @returns {object} SearchCriteriaFieldFilter
     */
    initFieldFilter(searchCriteria, viewField, field) {
        let fieldCriteria;
        const fieldName = viewField.name;
        let fieldType = viewField.type;
        if (fieldType === 'composite') {
            fieldType = field.definition.type;
        }
        if (searchCriteria.filters[fieldName] && searchCriteria.filters[fieldName].fieldType) {
            fieldCriteria = deepClone(searchCriteria.filters[fieldName]);
        }
        else {
            fieldCriteria = {
                field: fieldName,
                fieldType,
                operator: '',
                values: []
            };
        }
        this.mapEnumEmptyOption(fieldCriteria, field);
        this.mapRelateFields(fieldCriteria, field, searchCriteria);
        return fieldCriteria;
    }
    mapEnumEmptyOption(fieldCriteria, field) {
        if (!['multienum', 'enum'].includes(fieldCriteria.fieldType)) {
            return;
        }
        let emptyOption = this.getEmptyOption(field);
        if (!emptyOption) {
            return;
        }
        if (!fieldCriteria.values || !fieldCriteria.values.length) {
            return;
        }
        fieldCriteria.values = fieldCriteria.values.map(value => {
            if (value !== '') {
                return value;
            }
            return '__SuiteCRMEmptyString__';
        });
    }
    mapRelateFields(fieldCriteria, field, searchCriteria) {
        if (!['relate'].includes(fieldCriteria.fieldType)) {
            return;
        }
        if (!fieldCriteria.values || !fieldCriteria.values.length) {
            return;
        }
        const idFieldName = (field && field.definition && field.definition.id_name) || '';
        const relateFieldName = (field && field.definition && field.definition.rname) || 'name';
        const idValues = searchCriteria?.filters[idFieldName]?.values ?? [];
        fieldCriteria.valueObjectArray = fieldCriteria.valueObjectArray ?? [];
        const relateFieldMap = {};
        if (fieldCriteria.valueObjectArray.length) {
            fieldCriteria.valueObjectArray.forEach(value => {
                relateFieldMap[value.id] = value;
            });
        }
        for (let i = 0; i < fieldCriteria.values.length; i++) {
            let value = fieldCriteria.values[i];
            const relateValue = {};
            relateValue[relateFieldName] = value;
            relateValue['id'] = idValues[i] ?? '';
            if (!relateFieldMap[relateValue['id']]) {
                relateFieldMap[relateValue['id']] = relateValue;
                fieldCriteria.valueObjectArray.push(relateValue);
            }
        }
    }
    getEmptyOption(field) {
        let emptyOption = null;
        const extraOptions = field?.definition?.metadata?.extraOptions ?? [];
        extraOptions.forEach(option => {
            if (option.value === '__SuiteCRMEmptyString__') {
                emptyOption = option;
            }
        });
        return emptyOption;
    }
    /**
     * Is criteria field initialized in record
     *
     * @param {object} record Record
     * @param {string} fieldName field
     * @returns {boolean} isInitialized
     */
    isCriteriaFieldInitialized(record, fieldName) {
        const criteriaField = record.criteriaFields[fieldName];
        return !!criteriaField && !criteriaField.vardefBased;
    }
    /**
     * Add field to SavedFilter
     *
     * @param {object} savedFilter SavedFilter
     * @param {string} name string
     * @param {object} field Field
     */
    addToSavedFilter(savedFilter, name, field) {
        if (!savedFilter || !name || !field) {
            return;
        }
        if (!savedFilter.criteriaFields) {
            savedFilter.criteriaFields = {};
        }
        savedFilter.criteriaFields[name] = field;
        if (!savedFilter.criteria.filters) {
            savedFilter.criteria.filters = {};
        }
        savedFilter.criteria.filters[name] = field.criteria;
        if (savedFilter.criteriaFormGroup && field.formControl) {
            savedFilter.criteriaFormGroup.addControl(name, field.formControl);
        }
    }
    static { this.ɵfac = function FilterFieldBuilder_Factory(t) { return new (t || FilterFieldBuilder)(i0.ɵɵinject(i1.ValidationManager), i0.ɵɵinject(i2.DataTypeFormatter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilterFieldBuilder, factory: FilterFieldBuilder.ɵfac, providedIn: 'root' }); }
}
export { FilterFieldBuilder };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterFieldBuilder, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ValidationManager }, { type: i2.DataTypeFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWZpZWxkLmJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvcmVjb3JkL2ZpZWxkL2ZpbHRlci1maWVsZC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUUvRSxPQUFPLEVBQ0gsU0FBUyxFQU9aLE1BQU0sUUFBUSxDQUFDOzs7O0FBSWhCLE1BR2Esa0JBQW1CLFNBQVEsWUFBWTtJQUVoRCxZQUNjLGlCQUFvQyxFQUNwQyxhQUFnQztRQUUxQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFIOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7SUFHOUMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxnQkFBZ0IsQ0FBQyxXQUF3QixFQUFFLFNBQThCLEVBQUUsV0FBMEIsSUFBSTtRQUU1RyxNQUFNLFVBQVUsR0FBRyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksRUFBcUIsQ0FBQztRQUNyRixNQUFNLEVBQUMsVUFBVSxFQUFFLGVBQWUsRUFBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFdkYsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FDekIsV0FBVyxDQUFDLFlBQVksRUFDeEIs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O1lBQy9CLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNyQztRQUVELFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFFcEQsSUFBSSxXQUFXLENBQUMsaUJBQWlCLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUNwRCxXQUFXLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDckU7SUFDTCxDQUFDO21GQTVNUSxrQkFBa0I7dUVBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmYsTUFBTTs7U0FFVCxrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUg5QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7RmllbGRCdWlsZGVyfSBmcm9tICcuL2ZpZWxkLmJ1aWxkZXInO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VmFsaWRhdGlvbk1hbmFnZXJ9IGZyb20gJy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tYW5hZ2VyJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXJ9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3NhdmVkLWZpbHRlcnMvc2F2ZWQtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7XG4gICAgZGVlcENsb25lLFxuICAgIEZpZWxkLFxuICAgIEZpZWxkRGVmaW5pdGlvbixcbiAgICBPcHRpb24sXG4gICAgU2VhcmNoQ3JpdGVyaWEsXG4gICAgU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcixcbiAgICBWaWV3RmllbGREZWZpbml0aW9uXG59IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7QXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJGaWVsZEJ1aWxkZXIgZXh0ZW5kcyBGaWVsZEJ1aWxkZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCB2YWxpZGF0aW9uTWFuYWdlcjogVmFsaWRhdGlvbk1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlclxuICAgICkge1xuICAgICAgICBzdXBlcih2YWxpZGF0aW9uTWFuYWdlciwgdHlwZUZvcm1hdHRlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgZmlsdGVyIGZpZWxkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc2F2ZWRGaWx0ZXIgU2F2ZWRGaWx0ZXJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmlld0ZpZWxkIFZpZXdGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2UgTGFuZ3VhZ2VTdG9yZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IEZpZWxkXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkRmlsdGVyRmllbGQoc2F2ZWRGaWx0ZXI6IFNhdmVkRmlsdGVyLCB2aWV3RmllbGQ6IFZpZXdGaWVsZERlZmluaXRpb24sIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlID0gbnVsbCk6IEZpZWxkIHtcblxuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gKHZpZXdGaWVsZCAmJiB2aWV3RmllbGQuZmllbGREZWZpbml0aW9uKSB8fCB7fSBhcyBGaWVsZERlZmluaXRpb247XG4gICAgICAgIGNvbnN0IHt2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnN9ID0gdGhpcy5nZXRGaWx0ZXJWYWxpZGF0b3JzKHNhdmVkRmlsdGVyLCB2aWV3RmllbGQpO1xuXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5zZXR1cEZpZWxkKFxuICAgICAgICAgICAgc2F2ZWRGaWx0ZXIuc2VhcmNoTW9kdWxlLFxuICAgICAgICAgICAgdmlld0ZpZWxkLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgc2F2ZWRGaWx0ZXIsXG4gICAgICAgICAgICBkZWZpbml0aW9uLFxuICAgICAgICAgICAgdmFsaWRhdG9ycyxcbiAgICAgICAgICAgIGFzeW5jVmFsaWRhdG9ycyxcbiAgICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICk7XG4gICAgICAgIGZpZWxkLmNyaXRlcmlhID0gdGhpcy5pbml0RmllbGRGaWx0ZXIoc2F2ZWRGaWx0ZXIuY3JpdGVyaWEsIHZpZXdGaWVsZCwgZmllbGQpO1xuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IEZpbHRlciBWYWxpZGF0b3JzIGZvciBnaXZlbiBmaWVsZCBkZWZpbml0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkICBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmlld0ZpZWxkIFZpZXdGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSB2YWxpZGF0b3IgbWFwXG4gICAgICovXG4gICAgcHVibGljIGdldEZpbHRlclZhbGlkYXRvcnMoXG4gICAgICAgIHJlY29yZDogU2F2ZWRGaWx0ZXIsXG4gICAgICAgIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICk6IHsgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXTsgYXN5bmNWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10gfSB7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9ycyA9IHRoaXMudmFsaWRhdGlvbk1hbmFnZXIuZ2V0RmlsdGVyVmFsaWRhdGlvbnMocmVjb3JkLnNlYXJjaE1vZHVsZSwgdmlld0ZpZWxkLCByZWNvcmQpO1xuICAgICAgICBjb25zdCBhc3luY1ZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXSA9IFtdO1xuXG4gICAgICAgIHJldHVybiB7dmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGZpbHRlciBmaWVsZHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZWFyY2hDcml0ZXJpYSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmlld0ZpZWxkIHRvIGluaXRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGQgdG8gaW5pdFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdEZpZWxkRmlsdGVyKHNlYXJjaENyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSwgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uLCBmaWVsZDogRmllbGQpOiBTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyIHtcbiAgICAgICAgbGV0IGZpZWxkQ3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXI7XG5cbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gdmlld0ZpZWxkLm5hbWU7XG4gICAgICAgIGxldCBmaWVsZFR5cGUgPSB2aWV3RmllbGQudHlwZTtcblxuICAgICAgICBpZiAoZmllbGRUeXBlID09PSAnY29tcG9zaXRlJykge1xuICAgICAgICAgICAgZmllbGRUeXBlID0gZmllbGQuZGVmaW5pdGlvbi50eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlYXJjaENyaXRlcmlhLmZpbHRlcnNbZmllbGROYW1lXSAmJiBzZWFyY2hDcml0ZXJpYS5maWx0ZXJzW2ZpZWxkTmFtZV0uZmllbGRUeXBlKSB7XG4gICAgICAgICAgICBmaWVsZENyaXRlcmlhID0gZGVlcENsb25lKHNlYXJjaENyaXRlcmlhLmZpbHRlcnNbZmllbGROYW1lXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWVsZENyaXRlcmlhID0ge1xuICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZE5hbWUsXG4gICAgICAgICAgICAgICAgZmllbGRUeXBlLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnJyxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXBFbnVtRW1wdHlPcHRpb24oZmllbGRDcml0ZXJpYSwgZmllbGQpO1xuXG4gICAgICAgIHRoaXMubWFwUmVsYXRlRmllbGRzKGZpZWxkQ3JpdGVyaWEsIGZpZWxkLCBzZWFyY2hDcml0ZXJpYSk7XG5cbiAgICAgICAgcmV0dXJuIGZpZWxkQ3JpdGVyaWE7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEVudW1FbXB0eU9wdGlvbihmaWVsZENyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLCBmaWVsZDogRmllbGQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFbJ211bHRpZW51bScsICdlbnVtJ10uaW5jbHVkZXMoZmllbGRDcml0ZXJpYS5maWVsZFR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZW1wdHlPcHRpb24gPSB0aGlzLmdldEVtcHR5T3B0aW9uKGZpZWxkKTtcblxuICAgICAgICBpZiAoIWVtcHR5T3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZpZWxkQ3JpdGVyaWEudmFsdWVzIHx8ICFmaWVsZENyaXRlcmlhLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkQ3JpdGVyaWEudmFsdWVzID0gZmllbGRDcml0ZXJpYS52YWx1ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAnX19TdWl0ZUNSTUVtcHR5U3RyaW5nX18nO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwUmVsYXRlRmllbGRzKGZpZWxkQ3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIsIGZpZWxkOiBGaWVsZCwgc2VhcmNoQ3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhKTogdm9pZCB7XG4gICAgICAgIGlmICghWydyZWxhdGUnXS5pbmNsdWRlcyhmaWVsZENyaXRlcmlhLmZpZWxkVHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZmllbGRDcml0ZXJpYS52YWx1ZXMgfHwgIWZpZWxkQ3JpdGVyaWEudmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaWRGaWVsZE5hbWUgPSAoZmllbGQgJiYgZmllbGQuZGVmaW5pdGlvbiAmJiBmaWVsZC5kZWZpbml0aW9uLmlkX25hbWUpIHx8ICcnO1xuICAgICAgICBjb25zdCByZWxhdGVGaWVsZE5hbWUgPSAoZmllbGQgJiYgZmllbGQuZGVmaW5pdGlvbiAmJiBmaWVsZC5kZWZpbml0aW9uLnJuYW1lKSB8fCAnbmFtZSc7XG4gICAgICAgIGNvbnN0IGlkVmFsdWVzID0gc2VhcmNoQ3JpdGVyaWE/LmZpbHRlcnNbaWRGaWVsZE5hbWVdPy52YWx1ZXMgPz8gW107XG5cbiAgICAgICAgZmllbGRDcml0ZXJpYS52YWx1ZU9iamVjdEFycmF5ID0gZmllbGRDcml0ZXJpYS52YWx1ZU9iamVjdEFycmF5ID8/IFtdO1xuICAgICAgICBjb25zdCByZWxhdGVGaWVsZE1hcCA9IHt9O1xuICAgICAgICBpZiAoZmllbGRDcml0ZXJpYS52YWx1ZU9iamVjdEFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgZmllbGRDcml0ZXJpYS52YWx1ZU9iamVjdEFycmF5LmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHJlbGF0ZUZpZWxkTWFwW3ZhbHVlLmlkXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRDcml0ZXJpYS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGZpZWxkQ3JpdGVyaWEudmFsdWVzW2ldO1xuXG4gICAgICAgICAgICBjb25zdCByZWxhdGVWYWx1ZSA9IHt9O1xuICAgICAgICAgICAgcmVsYXRlVmFsdWVbcmVsYXRlRmllbGROYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmVsYXRlVmFsdWVbJ2lkJ10gPSBpZFZhbHVlc1tpXSA/PyAnJztcblxuICAgICAgICAgICAgaWYgKCFyZWxhdGVGaWVsZE1hcFtyZWxhdGVWYWx1ZVsnaWQnXV0pIHtcbiAgICAgICAgICAgICAgICByZWxhdGVGaWVsZE1hcFtyZWxhdGVWYWx1ZVsnaWQnXV0gPSByZWxhdGVWYWx1ZTtcbiAgICAgICAgICAgICAgICBmaWVsZENyaXRlcmlhLnZhbHVlT2JqZWN0QXJyYXkucHVzaChyZWxhdGVWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0RW1wdHlPcHRpb24oZmllbGQ6IEZpZWxkKTogT3B0aW9uIHtcbiAgICAgICAgbGV0IGVtcHR5T3B0aW9uID0gbnVsbDtcbiAgICAgICAgY29uc3QgZXh0cmFPcHRpb25zID0gZmllbGQ/LmRlZmluaXRpb24/Lm1ldGFkYXRhPy5leHRyYU9wdGlvbnMgPz8gW107XG5cbiAgICAgICAgZXh0cmFPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09ICdfX1N1aXRlQ1JNRW1wdHlTdHJpbmdfXycpIHtcbiAgICAgICAgICAgICAgICBlbXB0eU9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVtcHR5T3B0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIGNyaXRlcmlhIGZpZWxkIGluaXRpYWxpemVkIGluIHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIGZpZWxkXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGlzSW5pdGlhbGl6ZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNDcml0ZXJpYUZpZWxkSW5pdGlhbGl6ZWQocmVjb3JkOiBTYXZlZEZpbHRlciwgZmllbGROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY3JpdGVyaWFGaWVsZCA9IHJlY29yZC5jcml0ZXJpYUZpZWxkc1tmaWVsZE5hbWVdO1xuICAgICAgICByZXR1cm4gISFjcml0ZXJpYUZpZWxkICYmICFjcml0ZXJpYUZpZWxkLnZhcmRlZkJhc2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBmaWVsZCB0byBTYXZlZEZpbHRlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNhdmVkRmlsdGVyIFNhdmVkRmlsdGVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgc3RyaW5nXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkIEZpZWxkXG4gICAgICovXG4gICAgcHVibGljIGFkZFRvU2F2ZWRGaWx0ZXIoc2F2ZWRGaWx0ZXI6IFNhdmVkRmlsdGVyLCBuYW1lOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghc2F2ZWRGaWx0ZXIgfHwgIW5hbWUgfHwgIWZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNhdmVkRmlsdGVyLmNyaXRlcmlhRmllbGRzKSB7XG4gICAgICAgICAgICBzYXZlZEZpbHRlci5jcml0ZXJpYUZpZWxkcyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgc2F2ZWRGaWx0ZXIuY3JpdGVyaWFGaWVsZHNbbmFtZV0gPSBmaWVsZDtcblxuICAgICAgICBpZiAoIXNhdmVkRmlsdGVyLmNyaXRlcmlhLmZpbHRlcnMpIHtcbiAgICAgICAgICAgIHNhdmVkRmlsdGVyLmNyaXRlcmlhLmZpbHRlcnMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNhdmVkRmlsdGVyLmNyaXRlcmlhLmZpbHRlcnNbbmFtZV0gPSBmaWVsZC5jcml0ZXJpYTtcblxuICAgICAgICBpZiAoc2F2ZWRGaWx0ZXIuY3JpdGVyaWFGb3JtR3JvdXAgJiYgZmllbGQuZm9ybUNvbnRyb2wpIHtcbiAgICAgICAgICAgIHNhdmVkRmlsdGVyLmNyaXRlcmlhRm9ybUdyb3VwLmFkZENvbnRyb2wobmFtZSwgZmllbGQuZm9ybUNvbnRyb2wpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19