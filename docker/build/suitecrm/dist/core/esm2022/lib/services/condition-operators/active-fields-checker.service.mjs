/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { isEmpty } from "lodash-es";
import { ConditionOperatorManager } from "./condition-operator.manager";
import * as i0 from "@angular/core";
import * as i1 from "./condition-operator.manager";
class ActiveFieldsChecker {
    constructor(operatorManager) {
        this.operatorManager = operatorManager;
    }
    /**
     * Check if any of the configured values is currently set
     * @param {array} relatedFields
     * @param {object} record
     * @param {object} activeOnFields
     * @param {array} relatedAttributesFields
     * @param {object} activeOnAttributes
     */
    isActive(relatedFields, record, activeOnFields, relatedAttributesFields, activeOnAttributes) {
        let isActive = true;
        if (!isEmpty(activeOnFields)) {
            isActive = this.areFieldsActive(relatedFields, record, activeOnFields);
        }
        if (!isEmpty(activeOnAttributes)) {
            isActive = isActive && this.areAttributesActive(relatedAttributesFields, record, activeOnAttributes);
        }
        return isActive;
    }
    /**
     * Are attributes active
     * @param {array} relatedAttributesFields
     * @param {object} record
     * @param {object} activeOnAttributes
     */
    areAttributesActive(relatedAttributesFields, record, activeOnAttributes) {
        return relatedAttributesFields.every(fieldKey => {
            const fields = record.fields;
            const field = (fields && record.fields[fieldKey]) || null;
            const attributes = activeOnAttributes[fieldKey] && Object.keys(activeOnAttributes[fieldKey]);
            if (!field || !attributes || !attributes.length) {
                return;
            }
            return attributes.some(attributeKey => {
                const activeValues = activeOnAttributes[fieldKey][attributeKey];
                const attribute = field.attributes && field.attributes[attributeKey];
                if (!activeValues || !activeValues.length || !attribute) {
                    return;
                }
                return this.isValueActive(record, attribute, activeValues);
            });
        });
    }
    /**
     * Are fields active
     * @param {array} relatedFields
     * @param {object} record
     * @param {object} activeOnFields
     */
    areFieldsActive(relatedFields, record, activeOnFields) {
        return relatedFields.every(fieldKey => {
            const fields = record.fields;
            const field = (fields && record.fields[fieldKey]) || null;
            const activeValues = activeOnFields[fieldKey];
            if (!field || !activeValues || !activeValues.length) {
                return true;
            }
            return this.isValueActive(record, field, activeValues);
        });
    }
    /**
     * Is value active
     * @param {object} record
     * @param {object} field
     * @param {array} activeValues
     */
    isValueActive(record, field, activeValues) {
        let isActive = false;
        if (field.valueList && field.valueList.length) {
            field.valueList.some(value => {
                return activeValues.some(activeValue => {
                    if (activeValue === value) {
                        isActive = true;
                        return true;
                    }
                });
            });
            return isActive;
        }
        const fields = Object.keys(record.fields);
        let opsArr = [];
        if (field.value) {
            activeValues.some(activeValue => {
                if (activeValue.field && !fields.includes(activeValue.field)) {
                    return;
                }
                if (activeValue === field.value && !activeValue.operator) {
                    isActive = true;
                }
                if (activeValue.operator) {
                    const operatorKey = activeValue.operator;
                    const operator = this.operatorManager.get(operatorKey);
                    opsArr.push(operator.run(record, field, activeValue));
                    isActive = opsArr.every(data => data);
                }
            });
        }
        else {
            activeValues.some(activeValue => {
                if (activeValue.operator) {
                    if (activeValue.field && !fields.includes(activeValue.field)) {
                        return;
                    }
                    const operatorKey = activeValue.operator;
                    const operator = this.operatorManager.get(operatorKey);
                    opsArr.push(operator.run(record, field, activeValue));
                    isActive = opsArr.every(data => data);
                }
            });
        }
        return isActive;
    }
    static { this.ɵfac = function ActiveFieldsChecker_Factory(t) { return new (t || ActiveFieldsChecker)(i0.ɵɵinject(i1.ConditionOperatorManager)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ActiveFieldsChecker, factory: ActiveFieldsChecker.ɵfac, providedIn: 'root' }); }
}
export { ActiveFieldsChecker };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActiveFieldsChecker, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ConditionOperatorManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpZWxkcy1jaGVja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvY29uZGl0aW9uLW9wZXJhdG9ycy9hY3RpdmUtZmllbGRzLWNoZWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ2xDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7QUFFdEUsTUFHYSxtQkFBbUI7SUFFNUIsWUFBc0IsZUFBeUM7UUFBekMsb0JBQWUsR0FBZixlQUFlLENBQTBCO0lBQy9ELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksUUFBUSxDQUNYLGFBQXVCLEVBQ3ZCLE1BQWMsRUFDZCxjQUE4QixFQUM5Qix1QkFBaUMsRUFDakMsa0JBQXFDO1FBRXJDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzFCLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDMUU7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDOUIsUUFBUSxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixDQUFDLENBQUM7U0FDeEc7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxtQkFBbUIsQ0FDekIsdUJBQWlDLEVBQ2pDLE1BQWMsRUFD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R0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3pDO1lBQ0wsQ0FBQyxDQUFDLENBQUE7U0FFTDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7b0ZBNUlRLG1CQUFtQjt1RUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGaEIsTUFBTTs7U0FFVCxtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpZWxkLCBSZWNvcmQsIFN0cmluZ0FycmF5TWFwLCBTdHJpbmdBcnJheU1hdHJpeH0gZnJvbSBcImNvbW1vblwiO1xuaW1wb3J0IHtpc0VtcHR5fSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQge0NvbmRpdGlvbk9wZXJhdG9yTWFuYWdlcn0gZnJvbSBcIi4vY29uZGl0aW9uLW9wZXJhdG9yLm1hbmFnZXJcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVGaWVsZHNDaGVja2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcGVyYXRvck1hbmFnZXI6IENvbmRpdGlvbk9wZXJhdG9yTWFuYWdlcikge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGFueSBvZiB0aGUgY29uZmlndXJlZCB2YWx1ZXMgaXMgY3VycmVudGx5IHNldFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHJlbGF0ZWRGaWVsZHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFjdGl2ZU9uRmllbGRzXG4gICAgICogQHBhcmFtIHthcnJheX0gcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYWN0aXZlT25BdHRyaWJ1dGVzXG4gICAgICovXG4gICAgcHVibGljIGlzQWN0aXZlKFxuICAgICAgICByZWxhdGVkRmllbGRzOiBzdHJpbmdbXSxcbiAgICAgICAgcmVjb3JkOiBSZWNvcmQsXG4gICAgICAgIGFjdGl2ZU9uRmllbGRzOiBTdHJpbmdBcnJheU1hcCxcbiAgICAgICAgcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHM6IHN0cmluZ1tdLFxuICAgICAgICBhY3RpdmVPbkF0dHJpYnV0ZXM6IFN0cmluZ0FycmF5TWF0cml4XG4gICAgKSB7XG4gICAgICAgIGxldCBpc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmICghaXNFbXB0eShhY3RpdmVPbkZpZWxkcykpIHtcbiAgICAgICAgICAgIGlzQWN0aXZlID0gdGhpcy5hcmVGaWVsZHNBY3RpdmUocmVsYXRlZEZpZWxkcywgcmVjb3JkLCBhY3RpdmVPbkZpZWxkcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzRW1wdHkoYWN0aXZlT25BdHRyaWJ1dGVzKSkge1xuICAgICAgICAgICAgaXNBY3RpdmUgPSBpc0FjdGl2ZSAmJiB0aGlzLmFyZUF0dHJpYnV0ZXNBY3RpdmUocmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHMsIHJlY29yZCwgYWN0aXZlT25BdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcmUgYXR0cmlidXRlcyBhY3RpdmVcbiAgICAgKiBAcGFyYW0ge2FycmF5fSByZWxhdGVkQXR0cmlidXRlc0ZpZWxkc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYWN0aXZlT25BdHRyaWJ1dGVzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFyZUF0dHJpYnV0ZXNBY3RpdmUoXG4gICAgICAgIHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzOiBzdHJpbmdbXSxcbiAgICAgICAgcmVjb3JkOiBSZWNvcmQsXG4gICAgICAgIGFjdGl2ZU9uQXR0cmlidXRlczogU3RyaW5nQXJyYXlNYXRyaXhcbiAgICApOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzLmV2ZXJ5KGZpZWxkS2V5ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZmllbGRzID0gcmVjb3JkLmZpZWxkcztcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gKGZpZWxkcyAmJiByZWNvcmQuZmllbGRzW2ZpZWxkS2V5XSkgfHwgbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBhY3RpdmVPbkF0dHJpYnV0ZXNbZmllbGRLZXldICYmIE9iamVjdC5rZXlzKGFjdGl2ZU9uQXR0cmlidXRlc1tmaWVsZEtleV0pO1xuICAgICAgICAgICAgaWYgKCFmaWVsZCB8fCAhYXR0cmlidXRlcyB8fCAhYXR0cmlidXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLnNvbWUoYXR0cmlidXRlS2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVWYWx1ZXMgPSBhY3RpdmVPbkF0dHJpYnV0ZXNbZmllbGRLZXldW2F0dHJpYnV0ZUtleV07XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZmllbGQuYXR0cmlidXRlcyAmJiBmaWVsZC5hdHRyaWJ1dGVzW2F0dHJpYnV0ZUtleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZVZhbHVlcyB8fCAhYWN0aXZlVmFsdWVzLmxlbmd0aCB8fCAhYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWx1ZUFjdGl2ZShyZWNvcmQsIGF0dHJpYnV0ZSwgYWN0aXZlVmFsdWVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcmUgZmllbGRzIGFjdGl2ZVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHJlbGF0ZWRGaWVsZHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFjdGl2ZU9uRmllbGRzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFyZUZpZWxkc0FjdGl2ZShyZWxhdGVkRmllbGRzOiBzdHJpbmdbXSwgcmVjb3JkOiBSZWNvcmQsIGFjdGl2ZU9uRmllbGRzOiBTdHJpbmdBcnJheU1hcCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gcmVsYXRlZEZpZWxkcy5ldmVyeShmaWVsZEtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZHMgPSByZWNvcmQuZmllbGRzO1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSAoZmllbGRzICYmIHJlY29yZC5maWVsZHNbZmllbGRLZXldKSB8fCBudWxsO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlVmFsdWVzID0gYWN0aXZlT25GaWVsZHNbZmllbGRLZXldO1xuICAgICAgICAgICAgaWYgKCFmaWVsZCB8fCAhYWN0aXZlVmFsdWVzIHx8ICFhY3RpdmVWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbHVlQWN0aXZlKHJlY29yZCwgZmllbGQsIGFjdGl2ZVZhbHVlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIHZhbHVlIGFjdGl2ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGRcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBhY3RpdmVWYWx1ZXNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNWYWx1ZUFjdGl2ZShyZWNvcmQ6IFJlY29yZCwgZmllbGQ6IEZpZWxkLCBhY3RpdmVWYWx1ZXM6IHN0cmluZ1tdIHwgYW55KTogYm9vbGVhbiB7XG5cbiAgICAgICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChmaWVsZC52YWx1ZUxpc3QgJiYgZmllbGQudmFsdWVMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZmllbGQudmFsdWVMaXN0LnNvbWUodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY3RpdmVWYWx1ZXMuc29tZShhY3RpdmVWYWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gaXNBY3RpdmU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhyZWNvcmQuZmllbGRzKTtcbiAgICAgICAgbGV0IG9wc0FycjogYm9vbGVhbltdID0gW107XG5cbiAgICAgICAgaWYgKGZpZWxkLnZhbHVlKSB7XG4gICAgICAgICAgICBhY3RpdmVWYWx1ZXMuc29tZShhY3RpdmVWYWx1ZSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlVmFsdWUuZmllbGQgJiYgIWZpZWxkcy5pbmNsdWRlcyhhY3RpdmVWYWx1ZS5maWVsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVWYWx1ZSA9PT0gZmllbGQudmFsdWUgJiYgIWFjdGl2ZVZhbHVlLm9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVZhbHVlLm9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yS2V5ID0gYWN0aXZlVmFsdWUub3BlcmF0b3I7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5vcGVyYXRvck1hbmFnZXIuZ2V0KG9wZXJhdG9yS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgb3BzQXJyLnB1c2gob3BlcmF0b3IucnVuKHJlY29yZCwgZmllbGQsIGFjdGl2ZVZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPSBvcHNBcnIuZXZlcnkoZGF0YSA9PiBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlVmFsdWVzLnNvbWUoYWN0aXZlVmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVWYWx1ZS5vcGVyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlVmFsdWUuZmllbGQgJiYgIWZpZWxkcy5pbmNsdWRlcyhhY3RpdmVWYWx1ZS5maWVsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcGVyYXRvcktleSA9IGFjdGl2ZVZhbHVlLm9wZXJhdG9yO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMub3BlcmF0b3JNYW5hZ2VyLmdldChvcGVyYXRvcktleSk7XG4gICAgICAgICAgICAgICAgICAgIG9wc0Fyci5wdXNoKG9wZXJhdG9yLnJ1bihyZWNvcmQsIGZpZWxkLCBhY3RpdmVWYWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID0gb3BzQXJyLmV2ZXJ5KGRhdGEgPT4gZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzQWN0aXZlO1xuICAgIH1cbn1cbiJdfQ==