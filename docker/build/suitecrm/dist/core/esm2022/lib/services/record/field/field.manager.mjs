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
import { isEmpty } from 'lodash-es';
import { LanguageStore } from '../../../store/language/language.store';
import { Injectable } from '@angular/core';
import { FieldBuilder } from './field.builder';
import { GroupFieldBuilder } from './group-field.builder';
import { AttributeBuilder } from './attribute.builder';
import { FilterFieldBuilder } from './filter-field.builder';
import { FilterAttributeBuilder } from './filter-attribute.builder';
import { LineItemBuilder } from './line-item.builder';
import { UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "./field.builder";
import * as i2 from "./group-field.builder";
import * as i3 from "./attribute.builder";
import * as i4 from "./filter-field.builder";
import * as i5 from "./filter-attribute.builder";
import * as i6 from "./line-item.builder";
import * as i7 from "../../../store/language/language.store";
class FieldManager {
    constructor(fieldBuilder, groupFieldBuilder, attributeBuilder, filterFieldBuilder, filterAttributeBuilder, lineItemBuilder, languageStore) {
        this.fieldBuilder = fieldBuilder;
        this.groupFieldBuilder = groupFieldBuilder;
        this.attributeBuilder = attributeBuilder;
        this.filterFieldBuilder = filterFieldBuilder;
        this.filterAttributeBuilder = filterAttributeBuilder;
        this.lineItemBuilder = lineItemBuilder;
        this.languageStore = languageStore;
    }
    /**
     * Build minimally initialised field object
     *
     * @param {string} type field type
     * @param {string} value field value
     * @returns {object} Field
     */
    buildShallowField(type, value) {
        return {
            type,
            value,
            definition: {
                type
            }
        };
    }
    /**
     * Build and add field to record
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    addField(record, viewField, language = null) {
        const field = this.fieldBuilder.buildField(record, viewField, language);
        this.addToRecord(record, viewField.name, field);
        this.groupFieldBuilder.addGroupFields(record, viewField, language, this.isFieldInitialized.bind(this), this.fieldBuilder.buildField.bind(this.fieldBuilder), this.addToRecord.bind(this));
        this.attributeBuilder.addAttributes(record, record.fields, viewField, language, this.attributeBuilder.buildAttribute.bind(this.attributeBuilder), this.attributeBuilder.addAttributeToRecord.bind(this.attributeBuilder));
        this.lineItemBuilder.addLineItems(record, record.fields, viewField, language, this.addField.bind(this));
        return field;
    }
    /**
     * Build and add filter field to record
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    addFilterField(record, viewField, language = null) {
        if (viewField.vardefBased && !isEmpty(record.criteriaFields[viewField.name])) {
            return record.criteriaFields[viewField.name];
        }
        const field = this.filterFieldBuilder.buildFilterField(record, viewField, language);
        this.filterFieldBuilder.addToSavedFilter(record, viewField.name, field);
        this.groupFieldBuilder.addGroupFields(record, viewField, language, this.filterFieldBuilder.isCriteriaFieldInitialized.bind(this.filterFieldBuilder), this.filterFieldBuilder.buildFilterField.bind(this.filterFieldBuilder), this.filterFieldBuilder.addToSavedFilter.bind(this.filterFieldBuilder));
        this.attributeBuilder.addAttributes(record, record.criteriaFields, viewField, language, this.filterAttributeBuilder.buildFilterAttribute.bind(this.filterAttributeBuilder), this.filterAttributeBuilder.addAttributeToSavedFilter.bind(this.filterAttributeBuilder));
        return field;
    }
    /**
     * Build line item and add to record
     *
     * @param {FieldDefinition} itemDefinition Item Definition
     * @param {Record} parentRecord Parent Record
     * @param {Field} parentField Parent Field
     * @param {Record | null} item Item
     */
    addLineItem(itemDefinition, parentRecord, parentField, item = null) {
        if (!item) {
            item = {
                id: '',
                module: parentField.definition.module || '',
                attributes: {},
                fields: {},
                formGroup: new UntypedFormGroup({}),
            };
        }
        this.lineItemBuilder.addLineItem(itemDefinition, item, this.addField.bind(this), this.languageStore, parentRecord, parentField);
        parentField.itemFormArray.updateValueAndValidity();
    }
    /**
     * Remove line item
     *
     * @param {Field} parentField Parent Field
     * @param {number} index Index
     */
    removeLineItem(parentField, index) {
        const item = parentField.items[index];
        if (!item) {
            return;
        }
        if (item.id) {
            item.attributes.deleted = 1;
        }
        else {
            parentField.items = (index > -1) ? [
                ...parentField.items.slice(0, index),
                ...parentField.items.slice(index + 1)
            ] : parentField.items;
        }
        parentField.itemFormArray.clear();
        parentField.items.forEach(parentItem => {
            const deleted = parentItem && parentItem.attributes && parentItem.attributes.deleted;
            if (!parentItem || deleted) {
                return;
            }
            parentField.itemFormArray.push(parentItem.formGroup);
        });
        parentField.itemFormArray.updateValueAndValidity();
    }
    /**
     * Add field to record
     *
     * @param {object} record Record
     * @param {string} name string
     * @param {object} field Field
     */
    addToRecord(record, name, field) {
        if (!record || !name || !field) {
            return;
        }
        if (!record.fields) {
            record.fields = {};
        }
        record.fields[name] = field;
        if (record.formGroup && field.itemFormArray) {
            record.formGroup.addControl(name + '-items', field.itemFormArray);
        }
        if (record.formGroup && field.formControl) {
            record.formGroup.addControl(name, field.formControl);
        }
    }
    /**
     * Build and add vardef only field to record
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    addVardefOnlyField(record, viewField, language = null) {
        const field = this.fieldBuilder.buildField(record, viewField, language);
        this.addVardefOnlyFieldToRecord(record, viewField.name, field);
        return field;
    }
    /**
     * Add field to record
     *
     * @param {object} record Record
     * @param {string} name string
     * @param {object} field Field
     */
    addVardefOnlyFieldToRecord(record, name, field) {
        if (!record || !name || !field) {
            return;
        }
        if (!record.fields) {
            record.fields = {};
        }
        record.fields[name] = field;
    }
    /**
     * Is field initialized in record
     *
     * @param {object} record Record
     * @param {string} fieldName field
     * @returns {boolean} isInitialized
     */
    isFieldInitialized(record, fieldName) {
        return !!record.fields[fieldName];
    }
    static { this.ɵfac = function FieldManager_Factory(t) { return new (t || FieldManager)(i0.ɵɵinject(i1.FieldBuilder), i0.ɵɵinject(i2.GroupFieldBuilder), i0.ɵɵinject(i3.AttributeBuilder), i0.ɵɵinject(i4.FilterFieldBuilder), i0.ɵɵinject(i5.FilterAttributeBuilder), i0.ɵɵinject(i6.LineItemBuilder), i0.ɵɵinject(i7.LanguageStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldManager, factory: FieldManager.ɵfac, providedIn: 'root' }); }
}
export { FieldManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.FieldBuilder }, { type: i2.GroupFieldBuilder }, { type: i3.AttributeBuilder }, { type: i4.FilterFieldBuilder }, { type: i5.FilterAttributeBuilder }, { type: i6.LineItemBuilder }, { type: i7.LanguageStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvZmllbGQubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUVsQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDckUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7QUFFaEQsTUFHYSxZQUFZO0lBRXJCLFlBQ2MsWUFBMEIsRUFDMUIsaUJBQW9DLEVBQ3BDLGdCQUFrQyxFQUNsQyxrQkFBc0MsRUFDdEMsc0JBQThDLEVBQzlDLGVBQWdDLEVBQ2hDLGFBQTRCO1FBTjVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLDJCQUFzQixHQUF0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QUN0QyxDQUFDOzZFQXBRUSxZQUFZO3VFQUFaLFlBQVksV0FBWixZQUFZLG1CQUZULE1BQU07O1NBRVQsWUFBWTt1RkFBWixZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtpc0VtcHR5fSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHtGaWVsZCwgRmllbGREZWZpbml0aW9uLCBSZWNvcmQsIFZpZXdGaWVsZERlZmluaXRpb259IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NhdmVkRmlsdGVyfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkQnVpbGRlcn0gZnJvbSAnLi9maWVsZC5idWlsZGVyJztcbmltcG9ydCB7R3JvdXBGaWVsZEJ1aWxkZXJ9IGZyb20gJy4vZ3JvdXAtZmllbGQuYnVpbGRlcic7XG5pbXBvcnQge0F0dHJpYnV0ZUJ1aWxkZXJ9IGZyb20gJy4vYXR0cmlidXRlLmJ1aWxkZXInO1xuaW1wb3J0IHtGaWx0ZXJGaWVsZEJ1aWxkZXJ9IGZyb20gJy4vZmlsdGVyLWZpZWxkLmJ1aWxkZXInO1xuaW1wb3J0IHtGaWx0ZXJBdHRyaWJ1dGVCdWlsZGVyfSBmcm9tICcuL2ZpbHRlci1hdHRyaWJ1dGUuYnVpbGRlcic7XG5pbXBvcnQge0xpbmVJdGVtQnVpbGRlcn0gZnJvbSAnLi9saW5lLWl0ZW0uYnVpbGRlcic7XG5pbXBvcnQge1VudHlwZWRGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaWVsZE1hbmFnZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBmaWVsZEJ1aWxkZXI6IEZpZWxkQnVpbGRlcixcbiAgICAgICAgcHJvdGVjdGVkIGdyb3VwRmllbGRCdWlsZGVyOiBHcm91cEZpZWxkQnVpbGRlcixcbiAgICAgICAgcHJvdGVjdGVkIGF0dHJpYnV0ZUJ1aWxkZXI6IEF0dHJpYnV0ZUJ1aWxkZXIsXG4gICAgICAgIHByb3RlY3RlZCBmaWx0ZXJGaWVsZEJ1aWxkZXI6IEZpbHRlckZpZWxkQnVpbGRlcixcbiAgICAgICAgcHJvdGVjdGVkIGZpbHRlckF0dHJpYnV0ZUJ1aWxkZXI6IEZpbHRlckF0dHJpYnV0ZUJ1aWxkZXIsXG4gICAgICAgIHByb3RlY3RlZCBsaW5lSXRlbUJ1aWxkZXI6IExpbmVJdGVtQnVpbGRlcixcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBtaW5pbWFsbHkgaW5pdGlhbGlzZWQgZmllbGQgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBmaWVsZCB0eXBlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIGZpZWxkIHZhbHVlXG4gICAgICogQHJldHVybnMge29iamVjdH0gRmllbGRcbiAgICAgKi9cbiAgICBwdWJsaWMgYnVpbGRTaGFsbG93RmllbGQodHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogRmllbGQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgZGVmaW5pdGlvbjoge1xuICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBGaWVsZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhbmQgYWRkIGZpZWxkIHRvIHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmlld0ZpZWxkIFZpZXdGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2UgTGFuZ3VhZ2VTdG9yZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9RmllbGRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkRmllbGQocmVjb3JkOiBSZWNvcmQsIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbiwgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUgPSBudWxsKTogRmllbGQge1xuXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZEJ1aWxkZXIuYnVpbGRGaWVsZChyZWNvcmQsIHZpZXdGaWVsZCwgbGFuZ3VhZ2UpO1xuXG4gICAgICAgIHRoaXMuYWRkVG9SZWNvcmQocmVjb3JkLCB2aWV3RmllbGQubmFtZSwgZmllbGQpO1xuICAgICAgICB0aGlzLmdyb3VwRmllbGRCdWlsZGVyLmFkZEdyb3VwRmllbGRzKFxuICAgICAgICAgICAgcmVjb3JkLFxuICAgICAgICAgICAgdmlld0ZpZWxkLFxuICAgICAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgICAgICB0aGlzLmlzRmllbGRJbml0aWFsaXplZC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgdGhpcy5maWVsZEJ1aWxkZXIuYnVpbGRGaWVsZC5iaW5kKHRoaXMuZmllbGRCdWlsZGVyKSxcbiAgICAgICAgICAgIHRoaXMuYWRkVG9SZWNvcmQuYmluZCh0aGlzKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlQnVpbGRlci5hZGRBdHRyaWJ1dGVzKFxuICAgICAgICAgICAgcmVjb3JkLFxuICAgICAgICAgICAgcmVjb3JkLmZpZWxkcyxcbiAgICAgICAgICAgIHZpZXdGaWVsZCxcbiAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVCdWlsZGVyLmJ1aWxkQXR0cmlidXRlLmJpbmQodGhpcy5hdHRyaWJ1dGVCdWlsZGVyKSxcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlQnVpbGRlci5hZGRBdHRyaWJ1dGVUb1JlY29yZC5iaW5kKHRoaXMuYXR0cmlidXRlQnVpbGRlcilcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmxpbmVJdGVtQnVpbGRlci5hZGRMaW5lSXRlbXMoXG4gICAgICAgICAgICByZWNvcmQsXG4gICAgICAgICAgICByZWNvcmQuZmllbGRzLFxuICAgICAgICAgICAgdmlld0ZpZWxkLFxuICAgICAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgICAgICB0aGlzLmFkZEZpZWxkLmJpbmQodGhpcyksXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYW5kIGFkZCBmaWx0ZXIgZmllbGQgdG8gcmVjb3JkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGQgVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYW5ndWFnZSBMYW5ndWFnZVN0b3JlXG4gICAgICogQHJldHVybnMge29iamVjdH1GaWVsZFxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRGaWx0ZXJGaWVsZChyZWNvcmQ6IFNhdmVkRmlsdGVyLCB2aWV3RmllbGQ6IFZpZXdGaWVsZERlZmluaXRpb24sIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlID0gbnVsbCk6IEZpZWxkIHtcbiAgICAgICAgaWYgKHZpZXdGaWVsZC52YXJkZWZCYXNlZCAmJiAhaXNFbXB0eShyZWNvcmQuY3JpdGVyaWFGaWVsZHNbdmlld0ZpZWxkLm5hbWVdKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlY29yZC5jcml0ZXJpYUZpZWxkc1t2aWV3RmllbGQubmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmlsdGVyRmllbGRCdWlsZGVyLmJ1aWxkRmlsdGVyRmllbGQocmVjb3JkLCB2aWV3RmllbGQsIGxhbmd1YWdlKTtcblxuICAgICAgICB0aGlzLmZpbHRlckZpZWxkQnVpbGRlci5hZGRUb1NhdmVkRmlsdGVyKHJlY29yZCwgdmlld0ZpZWxkLm5hbWUsIGZpZWxkKTtcbiAgICAgICAgdGhpcy5ncm91cEZpZWxkQnVpbGRlci5hZGRHcm91cEZpZWxkcyhcbiAgICAgICAgICAgIHJlY29yZCxcbiAgICAgICAgICAgIHZpZXdGaWVsZCxcbiAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgdGhpcy5maWx0ZXJGaWVsZEJ1aWxkZXIuaXNDcml0ZXJpYUZpZWxkSW5pdGlhbGl6ZWQuYmluZCh0aGlzLmZpbHRlckZpZWxkQnVpbGRlciksXG4gICAgICAgICAgICB0aGlzLmZpbHRlckZpZWxkQnVpbGRlci5idWlsZEZpbHRlckZpZWxkLmJpbmQodGhpcy5maWx0ZXJGaWVsZEJ1aWxkZXIpLFxuICAgICAgICAgICAgdGhpcy5maWx0ZXJGaWVsZEJ1aWxkZXIuYWRkVG9TYXZlZEZpbHRlci5iaW5kKHRoaXMuZmlsdGVyRmllbGRCdWlsZGVyKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlQnVpbGRlci5hZGRBdHRyaWJ1dGVzKFxuICAgICAgICAgICAgcmVjb3JkLFxuICAgICAgICAgICAgcmVjb3JkLmNyaXRlcmlhRmllbGRzLFxuICAgICAgICAgICAgdmlld0ZpZWxkLFxuICAgICAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgICAgICB0aGlzLmZpbHRlckF0dHJpYnV0ZUJ1aWxkZXIuYnVpbGRGaWx0ZXJBdHRyaWJ1dGUuYmluZCh0aGlzLmZpbHRlckF0dHJpYnV0ZUJ1aWxkZXIpLFxuICAgICAgICAgICAgdGhpcy5maWx0ZXJBdHRyaWJ1dGVCdWlsZGVyLmFkZEF0dHJpYnV0ZVRvU2F2ZWRGaWx0ZXIuYmluZCh0aGlzLmZpbHRlckF0dHJpYnV0ZUJ1aWxkZXIpXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGxpbmUgaXRlbSBhbmQgYWRkIHRvIHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtGaWVsZERlZmluaXRpb259IGl0ZW1EZWZpbml0aW9uIEl0ZW0gRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7UmVjb3JkfSBwYXJlbnRSZWNvcmQgUGFyZW50IFJlY29yZFxuICAgICAqIEBwYXJhbSB7RmllbGR9IHBhcmVudEZpZWxkIFBhcmVudCBGaWVsZFxuICAgICAqIEBwYXJhbSB7UmVjb3JkIHwgbnVsbH0gaXRlbSBJdGVtXG4gICAgICovXG4gICAgcHVibGljIGFkZExpbmVJdGVtKFxuICAgICAgICBpdGVtRGVmaW5pdGlvbjogRmllbGREZWZpbml0aW9uLFxuICAgICAgICBwYXJlbnRSZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgcGFyZW50RmllbGQ6IEZpZWxkLFxuICAgICAgICBpdGVtOiBSZWNvcmQgPSBudWxsXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICAgICAgbW9kdWxlOiBwYXJlbnRGaWVsZC5kZWZpbml0aW9uLm1vZHVsZSB8fCAnJyxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHt9LFxuICAgICAgICAgICAgICAgIGZvcm1Hcm91cDogbmV3IFVudHlwZWRGb3JtR3JvdXAoe30pLFxuICAgICAgICAgICAgfSBhcyBSZWNvcmQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpbmVJdGVtQnVpbGRlci5hZGRMaW5lSXRlbShcbiAgICAgICAgICAgIGl0ZW1EZWZpbml0aW9uLFxuICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgIHRoaXMuYWRkRmllbGQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgICAgIHBhcmVudFJlY29yZCxcbiAgICAgICAgICAgIHBhcmVudEZpZWxkXG4gICAgICAgICk7XG5cbiAgICAgICAgcGFyZW50RmllbGQuaXRlbUZvcm1BcnJheS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGxpbmUgaXRlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtGaWVsZH0gcGFyZW50RmllbGQgUGFyZW50IEZpZWxkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4XG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZUxpbmVJdGVtKHBhcmVudEZpZWxkOiBGaWVsZCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBpdGVtID0gcGFyZW50RmllbGQuaXRlbXNbaW5kZXhdO1xuXG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0uaWQpIHtcbiAgICAgICAgICAgIGl0ZW0uYXR0cmlidXRlcy5kZWxldGVkID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudEZpZWxkLml0ZW1zID0gKGluZGV4ID4gLTEpID8gW1xuICAgICAgICAgICAgICAgIC4uLnBhcmVudEZpZWxkLml0ZW1zLnNsaWNlKDAsIGluZGV4KSxcbiAgICAgICAgICAgICAgICAuLi5wYXJlbnRGaWVsZC5pdGVtcy5zbGljZShpbmRleCArIDEpXG4gICAgICAgICAgICBdIDogcGFyZW50RmllbGQuaXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnRGaWVsZC5pdGVtRm9ybUFycmF5LmNsZWFyKCk7XG5cbiAgICAgICAgcGFyZW50RmllbGQuaXRlbXMuZm9yRWFjaChwYXJlbnRJdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWQgPSBwYXJlbnRJdGVtICYmIHBhcmVudEl0ZW0uYXR0cmlidXRlcyAmJiBwYXJlbnRJdGVtLmF0dHJpYnV0ZXMuZGVsZXRlZDtcbiAgICAgICAgICAgIGlmICghcGFyZW50SXRlbSB8fCBkZWxldGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXJlbnRGaWVsZC5pdGVtRm9ybUFycmF5LnB1c2gocGFyZW50SXRlbS5mb3JtR3JvdXApO1xuICAgICAgICB9KTtcblxuICAgICAgICBwYXJlbnRGaWVsZC5pdGVtRm9ybUFycmF5LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZCBmaWVsZCB0byByZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgc3RyaW5nXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkIEZpZWxkXG4gICAgICovXG4gICAgcHVibGljIGFkZFRvUmVjb3JkKHJlY29yZDogUmVjb3JkLCBuYW1lOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghcmVjb3JkIHx8ICFuYW1lIHx8ICFmaWVsZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZWNvcmQuZmllbGRzKSB7XG4gICAgICAgICAgICByZWNvcmQuZmllbGRzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICByZWNvcmQuZmllbGRzW25hbWVdID0gZmllbGQ7XG5cbiAgICAgICAgaWYgKHJlY29yZC5mb3JtR3JvdXAgJiYgZmllbGQuaXRlbUZvcm1BcnJheSkge1xuICAgICAgICAgICAgcmVjb3JkLmZvcm1Hcm91cC5hZGRDb250cm9sKG5hbWUgKyAnLWl0ZW1zJywgZmllbGQuaXRlbUZvcm1BcnJheSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVjb3JkLmZvcm1Hcm91cCAmJiBmaWVsZC5mb3JtQ29udHJvbCkge1xuICAgICAgICAgICAgcmVjb3JkLmZvcm1Hcm91cC5hZGRDb250cm9sKG5hbWUsIGZpZWxkLmZvcm1Db250cm9sKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYW5kIGFkZCB2YXJkZWYgb25seSBmaWVsZCB0byByZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGxhbmd1YWdlIExhbmd1YWdlU3RvcmVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fUZpZWxkXG4gICAgICovXG4gICAgcHVibGljIGFkZFZhcmRlZk9ubHlGaWVsZChyZWNvcmQ6IFJlY29yZCwgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uLCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSA9IG51bGwpOiBGaWVsZCB7XG5cbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkQnVpbGRlci5idWlsZEZpZWxkKHJlY29yZCwgdmlld0ZpZWxkLCBsYW5ndWFnZSk7XG5cbiAgICAgICAgdGhpcy5hZGRWYXJkZWZPbmx5RmllbGRUb1JlY29yZChyZWNvcmQsIHZpZXdGaWVsZC5uYW1lLCBmaWVsZCk7XG5cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkIGZpZWxkIHRvIHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGQgRmllbGRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkVmFyZGVmT25seUZpZWxkVG9SZWNvcmQocmVjb3JkOiBSZWNvcmQsIG5hbWU6IHN0cmluZywgZmllbGQ6IEZpZWxkKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFyZWNvcmQgfHwgIW5hbWUgfHwgIWZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlY29yZC5maWVsZHMpIHtcbiAgICAgICAgICAgIHJlY29yZC5maWVsZHMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY29yZC5maWVsZHNbbmFtZV0gPSBmaWVsZDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIElzIGZpZWxkIGluaXRpYWxpemVkIGluIHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIGZpZWxkXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGlzSW5pdGlhbGl6ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNGaWVsZEluaXRpYWxpemVkKHJlY29yZDogUmVjb3JkLCBmaWVsZE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISFyZWNvcmQuZmllbGRzW2ZpZWxkTmFtZV07XG4gICAgfVxuXG59XG4iXX0=