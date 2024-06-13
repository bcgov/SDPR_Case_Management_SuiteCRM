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
import { PanelLogicActionHandler } from '../panel-logic.action';
import { isVoid } from 'common';
import { isEmpty } from 'lodash-es';
import * as i0 from "@angular/core";
class PanelLogicDisplayTypeAction extends PanelLogicActionHandler {
    constructor() {
        super();
        this.key = 'displayType';
        this.modes = ['edit', 'detail', 'list', 'create', 'massupdate', 'filter'];
    }
    run(data, action) {
        const record = data.record;
        const field = data.field;
        if (!record || !field) {
            return true;
        }
        const activeOnFields = (action.params && action.params.activeOnFields) || {};
        const relatedFields = Object.keys(activeOnFields);
        const activeOnAttributes = (action.params && action.params.activeOnAttributes) || {};
        const relatedAttributesFields = Object.keys(activeOnAttributes);
        if (!relatedFields.length && !relatedAttributesFields.length) {
            return true;
        }
        return this.isActive(relatedFields, record, activeOnFields, relatedAttributesFields, activeOnAttributes);
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
                return this.isValueActive(attribute, activeValues);
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
            return this.isValueActive(field, activeValues);
        });
    }
    /**
     * Is value active
     * @param {object} field
     * @param {array} activeValues
     */
    isValueActive(field, activeValues) {
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
        if (!isVoid(field.value)) {
            activeValues.some(activeValue => {
                if (activeValue === field.value) {
                    isActive = true;
                }
            });
        }
        return isActive;
    }
    static { this.ɵfac = function PanelLogicDisplayTypeAction_Factory(t) { return new (t || PanelLogicDisplayTypeAction)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PanelLogicDisplayTypeAction, factory: PanelLogicDisplayTypeAction.ɵfac, providedIn: 'root' }); }
}
export { PanelLogicDisplayTypeAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelLogicDisplayTypeAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbG9naWMtZGlzcGxheS10eXBlLWFjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwtbG9naWMvZGlzcGxheS10eXBlL3BhbmVsLWxvZ2ljLWRpc3BsYXktdHlwZS1hY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQXVCLHVCQUF1QixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEYsT0FBTyxFQUFnQixNQUFNLEVBQXNELE1BQU0sUUFBUSxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxXQUFXLENBQUM7O0FBRWxDLE1BR2EsMkJBQTRCLFNBQVEsdUJBQXVCO0lBS3BFO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFKWixRQUFHLEdBQUcsYUFBYSxDQUFDO1FBQ3BCLFVBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFlLENBQUM7SUFJbkYsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUEwQixFQUFFLE1BQWM7UUFDMUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXpCLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE1BQU0sY0FBYyxHQUFtQixDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFvQixDQUFDO1FBQy9H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LG1CQUZ4QixNQUFNOztTQUVULDJCQUEyQjt1RkFBM0IsMkJBQTJCO2NBSHZDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFuZWxMb2dpY0FjdGlvbkRhdGEsIFBhbmVsTG9naWNBY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9wYW5lbC1sb2dpYy5hY3Rpb24nO1xuaW1wb3J0IHtBY3Rpb24sIEZpZWxkLCBpc1ZvaWQsIFJlY29yZCwgU3RyaW5nQXJyYXlNYXAsIFN0cmluZ0FycmF5TWF0cml4LCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7aXNFbXB0eX0gZnJvbSAnbG9kYXNoLWVzJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYW5lbExvZ2ljRGlzcGxheVR5cGVBY3Rpb24gZXh0ZW5kcyBQYW5lbExvZ2ljQWN0aW9uSGFuZGxlciB7XG5cbiAgICBrZXkgPSAnZGlzcGxheVR5cGUnO1xuICAgIG1vZGVzID0gWydlZGl0JywgJ2RldGFpbCcsICdsaXN0JywgJ2NyZWF0ZScsICdtYXNzdXBkYXRlJywgJ2ZpbHRlciddIGFzIFZpZXdNb2RlW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogUGFuZWxMb2dpY0FjdGlvbkRhdGEsIGFjdGlvbjogQWN0aW9uKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGRhdGEucmVjb3JkO1xuICAgICAgICBjb25zdCBmaWVsZCA9IGRhdGEuZmllbGQ7XG5cbiAgICAgICAgaWYgKCFyZWNvcmQgfHwgIWZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjdGl2ZU9uRmllbGRzOiBTdHJpbmdBcnJheU1hcCA9IChhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMuYWN0aXZlT25GaWVsZHMpIHx8IHt9IGFzIFN0cmluZ0FycmF5TWFwO1xuICAgICAgICBjb25zdCByZWxhdGVkRmllbGRzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKGFjdGl2ZU9uRmllbGRzKTtcblxuICAgICAgICBjb25zdCBhY3RpdmVPbkF0dHJpYnV0ZXM6IFN0cmluZ0FycmF5TWF0cml4ID0gKGFjdGlvbi5wYXJhbXMgJiYgYWN0aW9uLnBhcmFtcy5hY3RpdmVPbkF0dHJpYnV0ZXMpIHx8IHt9IGFzIFN0cmluZ0FycmF5TWF0cml4O1xuICAgICAgICBjb25zdCByZWxhdGVkQXR0cmlidXRlc0ZpZWxkczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhhY3RpdmVPbkF0dHJpYnV0ZXMpO1xuXG4gICAgICAgIGlmICghcmVsYXRlZEZpZWxkcy5sZW5ndGggJiYgIXJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZShyZWxhdGVkRmllbGRzLCByZWNvcmQsIGFjdGl2ZU9uRmllbGRzLCByZWxhdGVkQXR0cmlidXRlc0ZpZWxkcywgYWN0aXZlT25BdHRyaWJ1dGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhbnkgb2YgdGhlIGNvbmZpZ3VyZWQgdmFsdWVzIGlzIGN1cnJlbnRseSBzZXRcbiAgICAgKiBAcGFyYW0ge2FycmF5fSByZWxhdGVkRmllbGRzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3RpdmVPbkZpZWxkc1xuICAgICAqIEBwYXJhbSB7YXJyYXl9IHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFjdGl2ZU9uQXR0cmlidXRlc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBpc0FjdGl2ZShcbiAgICAgICAgcmVsYXRlZEZpZWxkczogc3RyaW5nW10sXG4gICAgICAgIHJlY29yZDogUmVjb3JkLFxuICAgICAgICBhY3RpdmVPbkZpZWxkczogU3RyaW5nQXJyYXlNYXAsXG4gICAgICAgIHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzOiBzdHJpbmdbXSxcbiAgICAgICAgYWN0aXZlT25BdHRyaWJ1dGVzOiBTdHJpbmdBcnJheU1hdHJpeFxuICAgICkge1xuICAgICAgICBsZXQgaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAoIWlzRW1wdHkoYWN0aXZlT25GaWVsZHMpKSB7XG4gICAgICAgICAgICBpc0FjdGl2ZSA9IHRoaXMuYXJlRmllbGRzQWN0aXZlKHJlbGF0ZWRGaWVsZHMsIHJlY29yZCwgYWN0aXZlT25GaWVsZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0VtcHR5KGFjdGl2ZU9uQXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgIGlzQWN0aXZlID0gaXNBY3RpdmUgJiYgdGhpcy5hcmVBdHRyaWJ1dGVzQWN0aXZlKHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzLCByZWNvcmQsIGFjdGl2ZU9uQXR0cmlidXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXJlIGF0dHJpYnV0ZXMgYWN0aXZlXG4gICAgICogQHBhcmFtIHthcnJheX0gcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFjdGl2ZU9uQXR0cmlidXRlc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBhcmVBdHRyaWJ1dGVzQWN0aXZlKFxuICAgICAgICByZWxhdGVkQXR0cmlidXRlc0ZpZWxkczogc3RyaW5nW10sXG4gICAgICAgIHJlY29yZDogUmVjb3JkLFxuICAgICAgICBhY3RpdmVPbkF0dHJpYnV0ZXM6IFN0cmluZ0FycmF5TWF0cml4XG4gICAgKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiByZWxhdGVkQXR0cmlidXRlc0ZpZWxkcy5ldmVyeShmaWVsZEtleSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IHJlY29yZC5maWVsZHM7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IChmaWVsZHMgJiYgcmVjb3JkLmZpZWxkc1tmaWVsZEtleV0pIHx8IG51bGw7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gYWN0aXZlT25BdHRyaWJ1dGVzW2ZpZWxkS2V5XSAmJiBPYmplY3Qua2V5cyhhY3RpdmVPbkF0dHJpYnV0ZXNbZmllbGRLZXldKTtcbiAgICAgICAgICAgIGlmICghZmllbGQgfHwgIWF0dHJpYnV0ZXMgfHwgIWF0dHJpYnV0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5zb21lKGF0dHJpYnV0ZUtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlVmFsdWVzID0gYWN0aXZlT25BdHRyaWJ1dGVzW2ZpZWxkS2V5XVthdHRyaWJ1dGVLZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGZpZWxkLmF0dHJpYnV0ZXMgJiYgZmllbGQuYXR0cmlidXRlc1thdHRyaWJ1dGVLZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVWYWx1ZXMgfHwgIWFjdGl2ZVZhbHVlcy5sZW5ndGggfHwgIWF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWx1ZUFjdGl2ZShhdHRyaWJ1dGUsIGFjdGl2ZVZhbHVlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXJlIGZpZWxkcyBhY3RpdmVcbiAgICAgKiBAcGFyYW0ge2FycmF5fSByZWxhdGVkRmllbGRzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3RpdmVPbkZpZWxkc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBhcmVGaWVsZHNBY3RpdmUocmVsYXRlZEZpZWxkczogc3RyaW5nW10sIHJlY29yZDogUmVjb3JkLCBhY3RpdmVPbkZpZWxkczogU3RyaW5nQXJyYXlNYXApOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHJlbGF0ZWRGaWVsZHMuZXZlcnkoZmllbGRLZXkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBmaWVsZHMgPSByZWNvcmQuZmllbGRzO1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSAoZmllbGRzICYmIHJlY29yZC5maWVsZHNbZmllbGRLZXldKSB8fCBudWxsO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlVmFsdWVzID0gYWN0aXZlT25GaWVsZHNbZmllbGRLZXldO1xuXG4gICAgICAgICAgICBpZiAoIWZpZWxkIHx8ICFhY3RpdmVWYWx1ZXMgfHwgIWFjdGl2ZVZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsdWVBY3RpdmUoZmllbGQsIGFjdGl2ZVZhbHVlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIHZhbHVlIGFjdGl2ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGFjdGl2ZVZhbHVlc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBpc1ZhbHVlQWN0aXZlKGZpZWxkOiBGaWVsZCwgYWN0aXZlVmFsdWVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBpZiAoZmllbGQudmFsdWVMaXN0ICYmIGZpZWxkLnZhbHVlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZpZWxkLnZhbHVlTGlzdC5zb21lKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aXZlVmFsdWVzLnNvbWUoYWN0aXZlVmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGlzQWN0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1ZvaWQoZmllbGQudmFsdWUpKSB7XG4gICAgICAgICAgICBhY3RpdmVWYWx1ZXMuc29tZShhY3RpdmVWYWx1ZSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlVmFsdWUgPT09IGZpZWxkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzQWN0aXZlO1xuICAgIH1cbn1cbiJdfQ==