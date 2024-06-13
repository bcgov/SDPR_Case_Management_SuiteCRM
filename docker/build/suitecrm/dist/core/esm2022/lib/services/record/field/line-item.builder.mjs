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
import { deepClone } from 'common';
import { ValidationManager } from '../validation/validation.manager';
import { DataTypeFormatter } from '../../formatters/data-type.formatter.service';
import { Injectable } from '@angular/core';
import { AttributeBuilder } from './attribute.builder';
import { UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../validation/validation.manager";
import * as i2 from "../../formatters/data-type.formatter.service";
class LineItemBuilder extends AttributeBuilder {
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
     * @param {function} buildLineItemFunction
     */
    addLineItems(record, fields, viewField, language, buildLineItemFunction) {
        const fieldKeys = Object.keys(fields) || [];
        if (fieldKeys.length < 1) {
            return;
        }
        fieldKeys.forEach(key => {
            const field = fields[key];
            this.addFieldLineItems(record, field, language, buildLineItemFunction);
        });
    }
    /**
     * Create and add attributes fields to field
     *
     * @param {object} record Record
     * @param {object} field Field
     * @param {object} language LanguageStore
     * @param {function} buildLineItemFunction
     */
    addFieldLineItems(record, field, language, buildLineItemFunction) {
        const definition = (field && field.definition) || {};
        const type = (field && field.type) || '';
        const items = (field.valueObjectArray && field.valueObjectArray) || [];
        if (type !== 'line-items' || !items.length) {
            return;
        }
        const itemDefinition = definition.lineItems?.definition || {};
        field.items = [];
        items.forEach(item => {
            this.addLineItem(itemDefinition, item, buildLineItemFunction, language, record, field);
        });
    }
    /**
     * Build line item and and to record
     * @param {object} itemDefinition
     * @param {object }item
     * @param {object} buildLineItemFunction
     * @param {object} language
     * @param {object} parentRecord
     * @param {object} parentField
     */
    addLineItem(itemDefinition, item, buildLineItemFunction, language, parentRecord, parentField) {
        const itemViewField = {
            name: itemDefinition.name,
            label: itemDefinition.vname,
            type: itemDefinition.type,
            fieldDefinition: deepClone(itemDefinition)
        };
        const itemRecord = {
            id: item.id || '',
            type: item.type || '',
            module: item.module || '',
            attributes: item.attributes || {},
            fields: {},
            formGroup: new UntypedFormGroup({})
        };
        buildLineItemFunction(itemRecord, itemViewField, language);
        parentField.itemFormArray.push(itemRecord.formGroup);
        parentField.items.push(itemRecord);
    }
    static { this.ɵfac = function LineItemBuilder_Factory(t) { return new (t || LineItemBuilder)(i0.ɵɵinject(i1.ValidationManager), i0.ɵɵinject(i2.DataTypeFormatter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LineItemBuilder, factory: LineItemBuilder.ɵfac, providedIn: 'root' }); }
}
export { LineItemBuilder };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineItemBuilder, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ValidationManager }, { type: i2.DataTypeFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1pdGVtLmJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvcmVjb3JkL2ZpZWxkL2xpbmUtaXRlbS5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFnRSxNQUFNLFFBQVEsQ0FBQztBQUVoRyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRWhELE1BR2EsZUFBZ0IsU0FBUSxnQkFBZ0I7SUFFakQsWUFDYyxpQkFBb0MsRUFDcEMsYUFBZ0M7UUFFMUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBSDlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsa0JBQWEsR0FBYixhQUFhLENBQW1CO0lBRzlDLENBQUM7SUFHRDs7Ozs7Ozs7T0FRRztJQUNJLFlBQVksQ0FDZixNQUFjLEVBQ2QsTUFBZ0IsRUFDaEIsU0FBOEIsRUFDOUIsUUFBdUIsRUFDdkIscUJBQStCO1FBRS9CLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRzVDLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdEIsT0FBTztTQUNWO1FBRUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUNsQixNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsRUFDUixxQkFBcUIsQ0FDeEIsQ0FBQTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxpQkFBaUIsQ0FDcEIsTUFBYyxFQUNkLEtBQVksRUFDWixRQUF1QixFQUN2QixxQkFBK0I7UUFHL0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyRCxNQUFNLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pDLE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV2RSxJQUFJLElBQUksS0FBSyxZQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3hDLE9BQU87U0FDVjtRQUVELE1BQU0sY0FBYyxHQUFvQixVQUFVLENBQUMsU0FBUyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFDL0UsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxJQUFjLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLFdBQVcsQ0FDZCxjQUErQixFQUMvQixJQUFZLEVBQ1oscUJBQStCLEVBQy9CLFFBQXVCLEVBQ3ZCLFlBQW9CLEVBQ3BCLFdBQWtCO1FBR2xCLE1BQU0sYUFBYSxHQUFHO1lBQ2xCLElBQUksRUFBRSxjQUFjLENBQUMsSUFBSTtZQUN6QixLQUFLLEVBQUUsY0FBYyxDQUFDLEtBQUs7WUFDM0IsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJO1lBQ3pCLGVBQWUsRUFBRSxTQUFTLENBQUMsY0FBYyxDQUFDO1NBQzdDLENBQUM7UUFFRixNQUFNLFVBQVUsR0FBRztZQUNmLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUU7WUFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFO1lBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUU7WUFDakMsTUFBTSxFQUFFLEVBQUU7WUFDVixTQUFTLEVBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7U0FDNUIsQ0FBQztRQUVaLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFM0QsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJELFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Z0ZBbkhRLGVBQWU7dUVBQWYsZUFBZSxXQUFmLGVBQWUsbUJBRlosTUFBTTs7U0FFVCxlQUFlO3VGQUFmLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge2RlZXBDbG9uZSwgRmllbGQsIEZpZWxkRGVmaW5pdGlvbiwgRmllbGRNYXAsIFJlY29yZCwgVmlld0ZpZWxkRGVmaW5pdGlvbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtWYWxpZGF0aW9uTWFuYWdlcn0gZnJvbSAnLi4vdmFsaWRhdGlvbi92YWxpZGF0aW9uLm1hbmFnZXInO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXR0cmlidXRlQnVpbGRlcn0gZnJvbSAnLi9hdHRyaWJ1dGUuYnVpbGRlcic7XG5pbXBvcnQge1VudHlwZWRGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMaW5lSXRlbUJ1aWxkZXIgZXh0ZW5kcyBBdHRyaWJ1dGVCdWlsZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgdmFsaWRhdGlvbk1hbmFnZXI6IFZhbGlkYXRpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIodmFsaWRhdGlvbk1hbmFnZXIsIHR5cGVGb3JtYXR0ZXIpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuZCBhZGQgYXR0cmlidXRlcyBmaWVsZHMgdG8gZmllbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkcyBGaWVsZE1hcFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGQgVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYW5ndWFnZSBMYW5ndWFnZVN0b3JlXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gYnVpbGRMaW5lSXRlbUZ1bmN0aW9uXG4gICAgICovXG4gICAgcHVibGljIGFkZExpbmVJdGVtcyhcbiAgICAgICAgcmVjb3JkOiBSZWNvcmQsXG4gICAgICAgIGZpZWxkczogRmllbGRNYXAsXG4gICAgICAgIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIGJ1aWxkTGluZUl0ZW1GdW5jdGlvbjogRnVuY3Rpb24sXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpZWxkS2V5cyA9IE9iamVjdC5rZXlzKGZpZWxkcykgfHwgW107XG5cblxuICAgICAgICBpZiAoZmllbGRLZXlzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1trZXldO1xuICAgICAgICAgICAgdGhpcy5hZGRGaWVsZExpbmVJdGVtcyhcbiAgICAgICAgICAgICAgICByZWNvcmQsXG4gICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgYnVpbGRMaW5lSXRlbUZ1bmN0aW9uLFxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbmQgYWRkIGF0dHJpYnV0ZXMgZmllbGRzIHRvIGZpZWxkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZCBGaWVsZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYW5ndWFnZSBMYW5ndWFnZVN0b3JlXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gYnVpbGRMaW5lSXRlbUZ1bmN0aW9uXG4gICAgICovXG4gICAgcHVibGljIGFkZEZpZWxkTGluZUl0ZW1zKFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgZmllbGQ6IEZpZWxkLFxuICAgICAgICBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgYnVpbGRMaW5lSXRlbUZ1bmN0aW9uOiBGdW5jdGlvbixcbiAgICApOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gKGZpZWxkICYmIGZpZWxkLmRlZmluaXRpb24pIHx8IHt9O1xuICAgICAgICBjb25zdCB0eXBlID0gKGZpZWxkICYmIGZpZWxkLnR5cGUpIHx8ICcnO1xuICAgICAgICBjb25zdCBpdGVtcyA9IChmaWVsZC52YWx1ZU9iamVjdEFycmF5ICYmIGZpZWxkLnZhbHVlT2JqZWN0QXJyYXkpIHx8IFtdO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSAnbGluZS1pdGVtcycgfHwgIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXRlbURlZmluaXRpb246IEZpZWxkRGVmaW5pdGlvbiA9IGRlZmluaXRpb24ubGluZUl0ZW1zPy5kZWZpbml0aW9uIHx8IHt9O1xuICAgICAgICBmaWVsZC5pdGVtcyA9IFtdO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZExpbmVJdGVtKGl0ZW1EZWZpbml0aW9uLCBpdGVtIGFzIFJlY29yZCwgYnVpbGRMaW5lSXRlbUZ1bmN0aW9uLCBsYW5ndWFnZSwgcmVjb3JkLCBmaWVsZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGxpbmUgaXRlbSBhbmQgYW5kIHRvIHJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0IH1pdGVtXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGJ1aWxkTGluZUl0ZW1GdW5jdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYW5ndWFnZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJlbnRSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyZW50RmllbGRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkTGluZUl0ZW0oXG4gICAgICAgIGl0ZW1EZWZpbml0aW9uOiBGaWVsZERlZmluaXRpb24sXG4gICAgICAgIGl0ZW06IFJlY29yZCxcbiAgICAgICAgYnVpbGRMaW5lSXRlbUZ1bmN0aW9uOiBGdW5jdGlvbixcbiAgICAgICAgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHBhcmVudFJlY29yZDogUmVjb3JkLFxuICAgICAgICBwYXJlbnRGaWVsZDogRmllbGRcbiAgICApIHtcblxuICAgICAgICBjb25zdCBpdGVtVmlld0ZpZWxkID0ge1xuICAgICAgICAgICAgbmFtZTogaXRlbURlZmluaXRpb24ubmFtZSxcbiAgICAgICAgICAgIGxhYmVsOiBpdGVtRGVmaW5pdGlvbi52bmFtZSxcbiAgICAgICAgICAgIHR5cGU6IGl0ZW1EZWZpbml0aW9uLnR5cGUsXG4gICAgICAgICAgICBmaWVsZERlZmluaXRpb246IGRlZXBDbG9uZShpdGVtRGVmaW5pdGlvbilcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpdGVtUmVjb3JkID0ge1xuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQgfHwgJycsXG4gICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGUgfHwgJycsXG4gICAgICAgICAgICBtb2R1bGU6IGl0ZW0ubW9kdWxlIHx8ICcnLFxuICAgICAgICAgICAgYXR0cmlidXRlczogaXRlbS5hdHRyaWJ1dGVzIHx8IHt9LFxuICAgICAgICAgICAgZmllbGRzOiB7fSxcbiAgICAgICAgICAgIGZvcm1Hcm91cDogbmV3IFVudHlwZWRGb3JtR3JvdXAoe30pXG4gICAgICAgIH0gYXMgUmVjb3JkO1xuXG4gICAgICAgIGJ1aWxkTGluZUl0ZW1GdW5jdGlvbihpdGVtUmVjb3JkLCBpdGVtVmlld0ZpZWxkLCBsYW5ndWFnZSk7XG5cbiAgICAgICAgcGFyZW50RmllbGQuaXRlbUZvcm1BcnJheS5wdXNoKGl0ZW1SZWNvcmQuZm9ybUdyb3VwKTtcblxuICAgICAgICBwYXJlbnRGaWVsZC5pdGVtcy5wdXNoKGl0ZW1SZWNvcmQpO1xuICAgIH1cbn1cbiJdfQ==