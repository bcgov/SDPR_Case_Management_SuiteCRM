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
import { isVoid } from 'common';
import { UntypedFormGroup } from '@angular/forms';
import { LanguageStore } from '../../store/language/language.store';
import { FieldManager } from './field/field.manager';
import * as i0 from "@angular/core";
import * as i1 from "./field/field.manager";
import * as i2 from "../../store/language/language.store";
class RecordManager {
    constructor(fieldManager, language) {
        this.fieldManager = fieldManager;
        this.language = language;
    }
    /**
     * Get empty record
     *
     * @param {string} module string
     * @returns {object} Record
     */
    buildEmptyRecord(module) {
        return {
            id: '',
            module,
            attributes: {
                id: ''
            },
            fields: {},
            formGroup: new UntypedFormGroup({}),
        };
    }
    /**
     * Init Fields
     *
     * @param {object} record to use
     * @param {object} viewFieldDefinitions to use
     * @returns {object} fields
     */
    initFields(record, viewFieldDefinitions) {
        if (!record.fields) {
            record.fields = {};
        }
        if (!record.formGroup) {
            record.formGroup = new UntypedFormGroup({});
        }
        viewFieldDefinitions.forEach(viewField => {
            if (!viewField || !viewField.name) {
                return;
            }
            if (record.fields[viewField.name]) {
                return;
            }
            const isVardefBased = viewField?.vardefBased ?? false;
            if (isVardefBased) {
                this.fieldManager.addVardefOnlyField(record, viewField, this.language);
                return;
            }
            this.fieldManager.addField(record, viewField, this.language);
        });
        return record.fields;
    }
    /**
     * Inject param fields
     *
     * @param {object} params Params
     * @param {object} record Record
     * @param {object} vardefs FieldDefinitionMap
     */
    injectParamFields(params, record, vardefs) {
        Object.keys(params).forEach(paramKey => {
            const definition = vardefs[paramKey];
            if (!isVoid(definition)) {
                const type = definition.type || '';
                let idName = definition.id_name || '';
                const name = definition.name || '';
                let rname = definition.rname || '';
                if (type === 'relate' && idName === name) {
                    record.attributes[paramKey] = params[paramKey];
                    return;
                }
                if (type === 'parent') {
                    const relate = {};
                    let rname = 'name';
                    let idName = 'parent_id';
                    const groupFieldKey = paramKey + '-group';
                    const groupField = vardefs[groupFieldKey] ?? {};
                    const parentName = groupField.groupFields[paramKey];
                    if (parentName && parentName.rname) {
                        rname = parentName.rname;
                    }
                    if (rname) {
                        relate[rname] = params[paramKey];
                    }
                    if (idName && params[idName]) {
                        relate.id = params[idName];
                    }
                    record.attributes[paramKey] = relate;
                    return;
                }
                if (type === 'relate') {
                    const relate = {};
                    if (rname) {
                        relate[rname] = params[paramKey];
                    }
                    if (idName && params[idName]) {
                        relate.id = params[idName];
                    }
                    record.attributes[paramKey] = relate;
                    return;
                }
                record.attributes[paramKey] = params[paramKey];
                return;
            }
            this.handleLinkTypeRelationship(paramKey, params, vardefs, record);
        });
    }
    handleLinkTypeRelationship(paramKey, params, vardefs, record) {
        if (paramKey === 'return_relationship') {
            const returnRelationship = params.return_relationship;
            if (!returnRelationship) {
                return;
            }
            // check, on vardefs, if there is a field of type = link
            // with relationship equal to the value of return_relationship param
            Object.keys(vardefs).forEach(key => {
                const vardef = vardefs[key];
                const type = vardef.type || '';
                if (type !== 'link') {
                    return;
                }
                const relationship = vardef.relationship || '';
                if (!relationship) {
                    return;
                }
                if (relationship === returnRelationship) {
                    const linkFieldName = vardef.name;
                    const module = vardef.module ?? params.return_module ?? '';
                    if (!module) {
                        return;
                    }
                    const parentName = params.parent_name;
                    if (!parentName) {
                        return;
                    }
                    // name of the related parent field e.g. contact_id as injected
                    // in to field definition from its metadata definition
                    const relateId = vardef?.relationshipMetadata?.related_id;
                    const parentId = params[relateId] ?? '';
                    if (!parentId) {
                        return;
                    }
                    // add link type fields as line items to base record
                    record.attributes[linkFieldName] = [
                        {
                            id: parentId,
                            module,
                            attributes: {
                                id: parentId,
                                name: parentName
                            }
                        }
                    ];
                    return;
                }
            });
        }
    }
    static { this.ɵfac = function RecordManager_Factory(t) { return new (t || RecordManager)(i0.ɵɵinject(i1.FieldManager), i0.ɵɵinject(i2.LanguageStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordManager, factory: RecordManager.ɵfac, providedIn: 'root' }); }
}
export { RecordManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.FieldManager }, { type: i2.LanguageStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLm1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvcmVjb3JkL3JlY29yZC5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBK0IsTUFBTSxFQUE4QixNQUFNLFFBQVEsQ0FBQztBQUN6RixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHVCQUF1QixDQUFDOzs7O0FBR25ELE1BR2EsYUFBYTtJQUV0QixZQUNjLFlBQTBCLEVBQzFCLFFBQXVCO1FBRHZCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQWU7SUFFckMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsZ0JBQWdCLENBQUMsTUFBYztRQUMzQixPQUFPO1lBQ0gsRUFBRSxFQUFFLEVBQUU7WUFDTixNQUFNO1lBQ04sVUFBVSxFQUFFO2dCQUNSLEVBQUUsRUFBRSxFQUFFO2FBQ1Q7WUFDRCxNQUFNLEVBQUUsRUFBRTtZQUNWLFNBQVMsRUFBRSxJQUFJLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztTQUM1QixDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxVQUFVLENBQUMsTUFBYyxFQUFFLG9CQUEyQztRQUV6RSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNoQixNQUFNLENBQUMsTUFBTSxHQUFHLEVBQWMsQ0FBQztTQUNsQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ25CLE1BQU0s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YXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpZWxkRGVmaW5pdGlvbk1hcCwgRmllbGRNYXAsIGlzVm9pZCwgUmVjb3JkLCBWaWV3RmllbGREZWZpbml0aW9ufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtVbnR5cGVkRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7RmllbGRNYW5hZ2VyfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLm1hbmFnZXInO1xuaW1wb3J0IHtQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkTWFuYWdlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGZpZWxkTWFuYWdlcjogRmllbGRNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZW1wdHkgcmVjb3JkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IFJlY29yZFxuICAgICAqL1xuICAgIGJ1aWxkRW1wdHlSZWNvcmQobW9kdWxlOiBzdHJpbmcpOiBSZWNvcmQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIGlkOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpZWxkczoge30sXG4gICAgICAgICAgICBmb3JtR3JvdXA6IG5ldyBVbnR5cGVkRm9ybUdyb3VwKHt9KSxcbiAgICAgICAgfSBhcyBSZWNvcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBGaWVsZHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZERlZmluaXRpb25zIHRvIHVzZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IGZpZWxkc1xuICAgICAqL1xuICAgIHB1YmxpYyBpbml0RmllbGRzKHJlY29yZDogUmVjb3JkLCB2aWV3RmllbGREZWZpbml0aW9uczogVmlld0ZpZWxkRGVmaW5pdGlvbltdKTogRmllbGRNYXAge1xuXG4gICAgICAgIGlmICghcmVjb3JkLmZpZWxkcykge1xuICAgICAgICAgICAgcmVjb3JkLmZpZWxkcyA9IHt9IGFzIEZpZWxkTWFwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZWNvcmQuZm9ybUdyb3VwKSB7XG4gICAgICAgICAgICByZWNvcmQuZm9ybUdyb3VwID0gbmV3IFVudHlwZWRGb3JtR3JvdXAoe30pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmlld0ZpZWxkRGVmaW5pdGlvbnMuZm9yRWFjaCh2aWV3RmllbGQgPT4ge1xuICAgICAgICAgICAgaWYgKCF2aWV3RmllbGQgfHwgIXZpZXdGaWVsZC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihyZWNvcmQuZmllbGRzW3ZpZXdGaWVsZC5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaXNWYXJkZWZCYXNlZCA9IHZpZXdGaWVsZD8udmFyZGVmQmFzZWQgPz8gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChpc1ZhcmRlZkJhc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZE1hbmFnZXIuYWRkVmFyZGVmT25seUZpZWxkKHJlY29yZCwgdmlld0ZpZWxkLCB0aGlzLmxhbmd1YWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZmllbGRNYW5hZ2VyLmFkZEZpZWxkKHJlY29yZCwgdmlld0ZpZWxkLCB0aGlzLmxhbmd1YWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlY29yZC5maWVsZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IHBhcmFtIGZpZWxkc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyBQYXJhbXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2YXJkZWZzIEZpZWxkRGVmaW5pdGlvbk1hcFxuICAgICAqL1xuICAgIHB1YmxpYyBpbmplY3RQYXJhbUZpZWxkcyhwYXJhbXM6IFBhcmFtcywgcmVjb3JkOiBSZWNvcmQsIHZhcmRlZnM6IEZpZWxkRGVmaW5pdGlvbk1hcCk6IHZvaWQge1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChwYXJhbUtleSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSB2YXJkZWZzW3BhcmFtS2V5XTtcblxuICAgICAgICAgICAgaWYgKCFpc1ZvaWQoZGVmaW5pdGlvbikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gZGVmaW5pdGlvbi50eXBlIHx8ICcnO1xuICAgICAgICAgICAgICAgIGxldCBpZE5hbWUgPSBkZWZpbml0aW9uLmlkX25hbWUgfHwgJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRlZmluaXRpb24ubmFtZSB8fCAnJztcbiAgICAgICAgICAgICAgICBsZXQgcm5hbWUgPSBkZWZpbml0aW9uLnJuYW1lIHx8ICcnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdyZWxhdGUnICYmIGlkTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZWNvcmQuYXR0cmlidXRlc1twYXJhbUtleV0gPSBwYXJhbXNbcGFyYW1LZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0ZSA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcm5hbWUgPSAnbmFtZSc7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZE5hbWUgPSAncGFyZW50X2lkJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBGaWVsZEtleSA9IHBhcmFtS2V5ICsgJy1ncm91cCc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwRmllbGQgPSB2YXJkZWZzW2dyb3VwRmllbGRLZXldID8/IHt9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROYW1lID0gZ3JvdXBGaWVsZC5ncm91cEZpZWxkc1twYXJhbUtleV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYocGFyZW50TmFtZSAgJiYgcGFyZW50TmFtZS5ybmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm5hbWUgPSBwYXJlbnROYW1lLnJuYW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGVbcm5hbWVdID0gcGFyYW1zW3BhcmFtS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZE5hbWUgJiYgcGFyYW1zW2lkTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZS5pZCA9IHBhcmFtc1tpZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkLmF0dHJpYnV0ZXNbcGFyYW1LZXldID0gcmVsYXRlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3JlbGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRlID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChybmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlW3JuYW1lXSA9IHBhcmFtc1twYXJhbUtleV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaWROYW1lICYmIHBhcmFtc1tpZE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGUuaWQgPSBwYXJhbXNbaWROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZC5hdHRyaWJ1dGVzW3BhcmFtS2V5XSA9IHJlbGF0ZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVjb3JkLmF0dHJpYnV0ZXNbcGFyYW1LZXldID0gcGFyYW1zW3BhcmFtS2V5XTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVMaW5rVHlwZVJlbGF0aW9uc2hpcChwYXJhbUtleSwgcGFyYW1zLCB2YXJkZWZzLCByZWNvcmQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGFuZGxlTGlua1R5cGVSZWxhdGlvbnNoaXAocGFyYW1LZXk6IHN0cmluZywgcGFyYW1zOiBQYXJhbXMsIHZhcmRlZnM6IEZpZWxkRGVmaW5pdGlvbk1hcCwgcmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHBhcmFtS2V5ID09PSAncmV0dXJuX3JlbGF0aW9uc2hpcCcpIHtcblxuICAgICAgICAgICAgY29uc3QgcmV0dXJuUmVsYXRpb25zaGlwID0gcGFyYW1zLnJldHVybl9yZWxhdGlvbnNoaXA7XG4gICAgICAgICAgICBpZiAoIXJldHVyblJlbGF0aW9uc2hpcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2ssIG9uIHZhcmRlZnMsIGlmIHRoZXJlIGlzIGEgZmllbGQgb2YgdHlwZSA9IGxpbmtcbiAgICAgICAgICAgIC8vIHdpdGggcmVsYXRpb25zaGlwIGVxdWFsIHRvIHRoZSB2YWx1ZSBvZiByZXR1cm5fcmVsYXRpb25zaGlwIHBhcmFtXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh2YXJkZWZzKS5mb3JFYWNoKGtleSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB2YXJkZWYgPSB2YXJkZWZzW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhcmRlZi50eXBlIHx8ICcnO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlICE9PSAnbGluaycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHZhcmRlZi5yZWxhdGlvbnNoaXAgfHwgJyc7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWxhdGlvbnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXAgPT09IHJldHVyblJlbGF0aW9uc2hpcCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtGaWVsZE5hbWUgPSB2YXJkZWYubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlID0gdmFyZGVmLm1vZHVsZSA/PyBwYXJhbXMucmV0dXJuX21vZHVsZSA/PyAnJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5hbWUgPSBwYXJhbXMucGFyZW50X25hbWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbmFtZSBvZiB0aGUgcmVsYXRlZCBwYXJlbnQgZmllbGQgZS5nLiBjb250YWN0X2lkIGFzIGluamVjdGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGluIHRvIGZpZWxkIGRlZmluaXRpb24gZnJvbSBpdHMgbWV0YWRhdGEgZGVmaW5pdGlvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGVJZCA9IHZhcmRlZj8ucmVsYXRpb25zaGlwTWV0YWRhdGE/LnJlbGF0ZWRfaWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudElkID0gcGFyYW1zW3JlbGF0ZUlkXSA/PyAnJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGxpbmsgdHlwZSBmaWVsZHMgYXMgbGluZSBpdGVtcyB0byBiYXNlIHJlY29yZFxuICAgICAgICAgICAgICAgICAgICByZWNvcmQuYXR0cmlidXRlc1tsaW5rRmllbGROYW1lXSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcGFyZW50SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHBhcmVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwYXJlbnROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBSZWNvcmRcbiAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=