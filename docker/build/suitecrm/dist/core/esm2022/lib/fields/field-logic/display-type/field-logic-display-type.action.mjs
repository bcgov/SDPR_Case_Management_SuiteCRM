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
import { Injectable } from '@angular/core';
import { FieldLogicActionHandler } from '../field-logic.action';
import { ConditionOperatorManager } from '../../../services/condition-operators/condition-operator.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/condition-operators/condition-operator.manager";
/**
 * @DEPRECATED
 */
class FieldLogicDisplayTypeAction extends FieldLogicActionHandler {
    constructor(operatorManager) {
        super();
        this.operatorManager = operatorManager;
        this.key = 'displayType';
        this.modes = ['edit', 'detail', 'list', 'create', 'massupdate', 'filter'];
    }
    run(data, action) {
        const record = data.record;
        const field = data.field;
        if (!record || !field) {
            return;
        }
        const activeOnFields = (action.params && action.params.activeOnFields) || {};
        const relatedFields = Object.keys(activeOnFields);
        const activeOnAttributes = (action.params && action.params.activeOnAttributes) || {};
        const relatedAttributesFields = Object.keys(activeOnAttributes);
        if (!relatedFields.length && !relatedAttributesFields.length) {
            return;
        }
        const targetDisplay = action.params && action.params.targetDisplayType;
        if (!targetDisplay) {
            return;
        }
        let isActive = this.isActive(relatedFields, record, activeOnFields, relatedAttributesFields, activeOnAttributes);
        let display = data.field.defaultDisplay;
        if (isActive) {
            display = targetDisplay;
        }
        data.field.display = display;
        const resetOn = (action.params && action.params.resetOn) || 'none';
        if (resetOn === display) {
            if (data.field.valueList && data.field.valueList.length) {
                data.field.valueList = [];
            }
            if (data.field.value) {
                data.field.value = '';
            }
        }
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
        let isActive = false;
        if (!isActive && !isEmpty(activeOnFields)) {
            isActive = this.areFieldsActive(relatedFields, record, activeOnFields);
        }
        if (!isActive && !isEmpty(activeOnAttributes)) {
            isActive = this.areAttributesActive(relatedAttributesFields, record, activeOnAttributes);
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
        return relatedAttributesFields.some(fieldKey => {
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
                return;
            }
            return this.isValueActive(record, field, activeValues);
        });
    }
    /**
     * Is value active
     * @param record
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
    getTriggeringStatus() {
        return ['onValueChange', 'onFieldInitialize'];
    }
    static { this.ɵfac = function FieldLogicDisplayTypeAction_Factory(t) { return new (t || FieldLogicDisplayTypeAction)(i0.ɵɵinject(i1.ConditionOperatorManager)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldLogicDisplayTypeAction, factory: FieldLogicDisplayTypeAction.ɵfac, providedIn: 'root' }); }
}
export { FieldLogicDisplayTypeAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldLogicDisplayTypeAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ConditionOperatorManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtbG9naWMtZGlzcGxheS10eXBlLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvZmllbGQtbG9naWMvZGlzcGxheS10eXBlL2ZpZWxkLWxvZ2ljLWRpc3BsYXktdHlwZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQXVCLHVCQUF1QixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFcEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sa0VBQWtFLENBQUM7OztBQUUxRzs7R0FFRztBQUVILE1BR2EsMkJBQTRCLFNBQVEsdUJBQXVCO0lBS3BFLFlBQXNCLGVBQXlDO1FBQzNELEtBQUssRUFBRSxDQUFDO1FBRFUsb0JBQWUsR0FBZixlQUFlLENBQTBCO1FBSC9ELFFBQUcsR0FBRyxhQUFhLENBQUM7UUFDcEIsVUFBSyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQWUsQ0FBQztJQUluRixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQTBCLEVBQUUsTUFBYztRQUMxQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFekIsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNuQixPQUFPO1NBQ1Y7UUFFRCxNQUFNLGNBQWMsR0FBbUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxD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LE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmllbGRMb2dpY0FjdGlvbkRhdGEsIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9maWVsZC1sb2dpYy5hY3Rpb24nO1xuaW1wb3J0IHtBY3Rpb24sIERpc3BsYXlUeXBlLCBGaWVsZCwgUmVjb3JkLCBTdHJpbmdBcnJheU1hcCwgU3RyaW5nQXJyYXlNYXRyaXgsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtDb25kaXRpb25PcGVyYXRvck1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2NvbmRpdGlvbi1vcGVyYXRvcnMvY29uZGl0aW9uLW9wZXJhdG9yLm1hbmFnZXInO1xuXG4vKipcbiAqIEBERVBSRUNBVEVEXG4gKi9cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaWVsZExvZ2ljRGlzcGxheVR5cGVBY3Rpb24gZXh0ZW5kcyBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlciB7XG5cbiAgICBrZXkgPSAnZGlzcGxheVR5cGUnO1xuICAgIG1vZGVzID0gWydlZGl0JywgJ2RldGFpbCcsICdsaXN0JywgJ2NyZWF0ZScsICdtYXNzdXBkYXRlJywgJ2ZpbHRlciddIGFzIFZpZXdNb2RlW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3BlcmF0b3JNYW5hZ2VyOiBDb25kaXRpb25PcGVyYXRvck1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogRmllbGRMb2dpY0FjdGlvbkRhdGEsIGFjdGlvbjogQWN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGRhdGEucmVjb3JkO1xuICAgICAgICBjb25zdCBmaWVsZCA9IGRhdGEuZmllbGQ7XG5cbiAgICAgICAgaWYgKCFyZWNvcmQgfHwgIWZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY3RpdmVPbkZpZWxkczogU3RyaW5nQXJyYXlNYXAgPSAoYWN0aW9uLnBhcmFtcyAmJiBhY3Rpb24ucGFyYW1zLmFjdGl2ZU9uRmllbGRzKSB8fCB7fSBhcyBTdHJpbmdBcnJheU1hcDtcbiAgICAgICAgY29uc3QgcmVsYXRlZEZpZWxkczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhhY3RpdmVPbkZpZWxkcyk7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlT25BdHRyaWJ1dGVzOiBTdHJpbmdBcnJheU1hdHJpeCA9IChhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMuYWN0aXZlT25BdHRyaWJ1dGVzKSB8fCB7fSBhcyBTdHJpbmdBcnJheU1hdHJpeDtcbiAgICAgICAgY29uc3QgcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoYWN0aXZlT25BdHRyaWJ1dGVzKTtcblxuICAgICAgICBpZiAoIXJlbGF0ZWRGaWVsZHMubGVuZ3RoICYmICFyZWxhdGVkQXR0cmlidXRlc0ZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldERpc3BsYXkgPSBhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMudGFyZ2V0RGlzcGxheVR5cGU7XG5cbiAgICAgICAgaWYgKCF0YXJnZXREaXNwbGF5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNBY3RpdmUgPSB0aGlzLmlzQWN0aXZlKHJlbGF0ZWRGaWVsZHMsIHJlY29yZCwgYWN0aXZlT25GaWVsZHMsIHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzLCBhY3RpdmVPbkF0dHJpYnV0ZXMpO1xuXG4gICAgICAgIGxldCBkaXNwbGF5ID0gZGF0YS5maWVsZC5kZWZhdWx0RGlzcGxheTtcbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICBkaXNwbGF5ID0gdGFyZ2V0RGlzcGxheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEuZmllbGQuZGlzcGxheSA9IGRpc3BsYXkgYXMgRGlzcGxheVR5cGU7XG5cbiAgICAgICAgY29uc3QgcmVzZXRPbjogc3RyaW5nID0gKGFjdGlvbi5wYXJhbXMgJiYgYWN0aW9uLnBhcmFtcy5yZXNldE9uKSB8fCAnbm9uZSc7XG5cbiAgICAgICAgaWYgKHJlc2V0T24gPT09IGRpc3BsYXkpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmZpZWxkLnZhbHVlTGlzdCAmJiBkYXRhLmZpZWxkLnZhbHVlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmZpZWxkLnZhbHVlTGlzdCA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YS5maWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRhdGEuZmllbGQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYW55IG9mIHRoZSBjb25maWd1cmVkIHZhbHVlcyBpcyBjdXJyZW50bHkgc2V0XG4gICAgICogQHBhcmFtIHthcnJheX0gcmVsYXRlZEZpZWxkc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYWN0aXZlT25GaWVsZHNcbiAgICAgKiBAcGFyYW0ge2FycmF5fSByZWxhdGVkQXR0cmlidXRlc0ZpZWxkc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3RpdmVPbkF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNBY3RpdmUoXG4gICAgICAgIHJlbGF0ZWRGaWVsZHM6IHN0cmluZ1tdLFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgYWN0aXZlT25GaWVsZHM6IFN0cmluZ0FycmF5TWFwLFxuICAgICAgICByZWxhdGVkQXR0cmlidXRlc0ZpZWxkczogc3RyaW5nW10sXG4gICAgICAgIGFjdGl2ZU9uQXR0cmlidXRlczogU3RyaW5nQXJyYXlNYXRyaXhcbiAgICApIHtcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICghaXNBY3RpdmUgJiYgIWlzRW1wdHkoYWN0aXZlT25GaWVsZHMpKSB7XG4gICAgICAgICAgICBpc0FjdGl2ZSA9IHRoaXMuYXJlRmllbGRzQWN0aXZlKHJlbGF0ZWRGaWVsZHMsIHJlY29yZCwgYWN0aXZlT25GaWVsZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0FjdGl2ZSAmJiAhaXNFbXB0eShhY3RpdmVPbkF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICBpc0FjdGl2ZSA9IHRoaXMuYXJlQXR0cmlidXRlc0FjdGl2ZShyZWxhdGVkQXR0cmlidXRlc0ZpZWxkcywgcmVjb3JkLCBhY3RpdmVPbkF0dHJpYnV0ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzQWN0aXZlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFyZSBhdHRyaWJ1dGVzIGFjdGl2ZVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3RpdmVPbkF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYXJlQXR0cmlidXRlc0FjdGl2ZShcbiAgICAgICAgcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHM6IHN0cmluZ1tdLFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgYWN0aXZlT25BdHRyaWJ1dGVzOiBTdHJpbmdBcnJheU1hdHJpeFxuICAgICk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHMuc29tZShmaWVsZEtleSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IHJlY29yZC5maWVsZHM7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IChmaWVsZHMgJiYgcmVjb3JkLmZpZWxkc1tmaWVsZEtleV0pIHx8IG51bGw7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gYWN0aXZlT25BdHRyaWJ1dGVzW2ZpZWxkS2V5XSAmJiBPYmplY3Qua2V5cyhhY3RpdmVPbkF0dHJpYnV0ZXNbZmllbGRLZXldKTtcbiAgICAgICAgICAgIGlmICghZmllbGQgfHwgIWF0dHJpYnV0ZXMgfHwgIWF0dHJpYnV0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5zb21lKGF0dHJpYnV0ZUtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlVmFsdWVzID0gYWN0aXZlT25BdHRyaWJ1dGVzW2ZpZWxkS2V5XVthdHRyaWJ1dGVLZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGZpZWxkLmF0dHJpYnV0ZXMgJiYgZmllbGQuYXR0cmlidXRlc1thdHRyaWJ1dGVLZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVWYWx1ZXMgfHwgIWFjdGl2ZVZhbHVlcy5sZW5ndGggfHwgIWF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsdWVBY3RpdmUocmVjb3JkLCBhdHRyaWJ1dGUsIGFjdGl2ZVZhbHVlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXJlIGZpZWxkcyBhY3RpdmVcbiAgICAgKiBAcGFyYW0ge2FycmF5fSByZWxhdGVkRmllbGRzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3RpdmVPbkZpZWxkc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBhcmVGaWVsZHNBY3RpdmUocmVsYXRlZEZpZWxkczogc3RyaW5nW10sIHJlY29yZDogUmVjb3JkLCBhY3RpdmVPbkZpZWxkczogU3RyaW5nQXJyYXlNYXApOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHJlbGF0ZWRGaWVsZHMuZXZlcnkoZmllbGRLZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGRzID0gcmVjb3JkLmZpZWxkcztcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gKGZpZWxkcyAmJiByZWNvcmQuZmllbGRzW2ZpZWxkS2V5XSkgfHwgbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVZhbHVlcyA9IGFjdGl2ZU9uRmllbGRzW2ZpZWxkS2V5XTtcbiAgICAgICAgICAgIGlmICghZmllbGQgfHwgIWFjdGl2ZVZhbHVlcyB8fCAhYWN0aXZlVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsdWVBY3RpdmUocmVjb3JkLCBmaWVsZCwgYWN0aXZlVmFsdWVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgdmFsdWUgYWN0aXZlXG4gICAgICogQHBhcmFtIHJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGFjdGl2ZVZhbHVlc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBpc1ZhbHVlQWN0aXZlKHJlY29yZDpSZWNvcmQsIGZpZWxkOiBGaWVsZCwgYWN0aXZlVmFsdWVzOiBzdHJpbmdbXSB8IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGZpZWxkLnZhbHVlTGlzdCAmJiBmaWVsZC52YWx1ZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZUxpc3Quc29tZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZVZhbHVlcy5zb21lKGFjdGl2ZVZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gaXNBY3RpdmU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhyZWNvcmQuZmllbGRzKTtcbiAgICAgICAgbGV0IG9wc0Fycjpib29sZWFuW109IFtdO1xuXG4gICAgICAgIGlmIChmaWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgYWN0aXZlVmFsdWVzLnNvbWUoYWN0aXZlVmFsdWUgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYoYWN0aXZlVmFsdWUuZmllbGQgJiYgIWZpZWxkcy5pbmNsdWRlcyhhY3RpdmVWYWx1ZS5maWVsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVWYWx1ZSA9PT0gZmllbGQudmFsdWUgJiYgIWFjdGl2ZVZhbHVlLm9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoYWN0aXZlVmFsdWUub3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3JLZXkgPSBhY3RpdmVWYWx1ZS5vcGVyYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm9wZXJhdG9yTWFuYWdlci5nZXQob3BlcmF0b3JLZXkpO1xuICAgICAgICAgICAgICAgICAgICBvcHNBcnIucHVzaChvcGVyYXRvci5ydW4ocmVjb3JkLCBmaWVsZCwgYWN0aXZlVmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA9IG9wc0Fyci5ldmVyeShkYXRhID0+IGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVWYWx1ZXMuc29tZShhY3RpdmVWYWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoYWN0aXZlVmFsdWUub3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoYWN0aXZlVmFsdWUuZmllbGQgJiYgIWZpZWxkcy5pbmNsdWRlcyhhY3RpdmVWYWx1ZS5maWVsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcGVyYXRvcktleSA9IGFjdGl2ZVZhbHVlLm9wZXJhdG9yO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMub3BlcmF0b3JNYW5hZ2VyLmdldChvcGVyYXRvcktleSk7XG4gICAgICAgICAgICAgICAgICAgIG9wc0Fyci5wdXNoKG9wZXJhdG9yLnJ1bihyZWNvcmQsIGZpZWxkLCBhY3RpdmVWYWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID0gb3BzQXJyLmV2ZXJ5KGRhdGEgPT4gZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgZ2V0VHJpZ2dlcmluZ1N0YXR1cygpIDogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gWydvblZhbHVlQ2hhbmdlJywgJ29uRmllbGRJbml0aWFsaXplJ107XG4gICAgfVxufVxuIl19