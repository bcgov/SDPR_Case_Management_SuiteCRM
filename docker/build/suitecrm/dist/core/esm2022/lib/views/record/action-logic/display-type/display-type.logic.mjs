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
import { isEmpty } from 'lodash-es';
import { isVoid } from 'common';
import { Injectable } from '@angular/core';
import { ActionLogicHandler } from '../../../../services/actions/action-logic-handler';
import * as i0 from "@angular/core";
class RecordActionDisplayTypeLogic extends ActionLogicHandler {
    constructor() {
        super();
        this.key = 'displayType';
        this.modes = ['edit', 'detail', 'list', 'create', 'massupdate', 'filter'];
    }
    runAll(displayLogic, data) {
        let toDisplay = true;
        const validModeLogic = Object.values(displayLogic).filter(logic => {
            const allowedModes = logic.modes ?? [];
            return !!(allowedModes.length && allowedModes.includes(data.store.getMode()));
        });
        if (!validModeLogic || !validModeLogic.length) {
            return toDisplay;
        }
        let defaultDisplay = data?.action?.display ?? 'show';
        let targetDisplay = 'hide';
        if (defaultDisplay === 'hide') {
            targetDisplay = 'show';
        }
        const isActive = validModeLogic.some(logic => this.run(data, logic));
        if (isActive) {
            defaultDisplay = targetDisplay;
        }
        toDisplay = (defaultDisplay === 'show');
        return toDisplay;
    }
    run(data, logic) {
        const record = data.store.recordStore.getStaging();
        if (!record || !logic) {
            return true;
        }
        const activeOnFields = (logic.params && logic.params.activeOnFields) || {};
        const relatedFields = Object.keys(activeOnFields);
        const activeOnAttributes = (logic.params && logic.params.activeOnAttributes) || {};
        const relatedAttributesFields = Object.keys(activeOnAttributes);
        if (!relatedFields.length && !relatedAttributesFields.length) {
            return true;
        }
        return this.isActive(relatedFields, record, activeOnFields, relatedAttributesFields, activeOnAttributes);
    }
    /**
     * Check if any of the configured values is currently set
     *
     * @param {Array} relatedFields Related Fields
     * @param {object} record Record
     * @param {object} activeOnFields Active On Fields
     * @param {Array} relatedAttributesFields Related Attributes Fields
     * @param {object} activeOnAttributes Active On Attributes
     * @returns {boolean} True if any of the configured values is currently set
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
     *
     * @param {Array} relatedAttributesFields Related Attributes Fields
     * @param {object} record Record
     * @param {object} activeOnAttributes Active On Attributes
     * @returns {boolean} True if any attributes active exists
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
     *
     * @param {Array} relatedFields Related Fields
     * @param {object} record Record
     * @param {object} activeOnFields Active On Fields
     * @returns {boolean} True if there is any fields active
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
     *
     * @param {object} field Field
     * @param {Array} activeValues Active Values
     * @returns {boolean} True if there is any value active
     */
    isValueActive(field, activeValues) {
        let isActive = false;
        if (field.valueList && field.valueList.length) {
            field.valueList.some(value => activeValues.some(activeValue => {
                if (activeValue === value) {
                    isActive = true;
                    return true;
                }
            }));
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
    static { this.ɵfac = function RecordActionDisplayTypeLogic_Factory(t) { return new (t || RecordActionDisplayTypeLogic)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordActionDisplayTypeLogic, factory: RecordActionDisplayTypeLogic.ɵfac, providedIn: 'root' }); }
}
export { RecordActionDisplayTypeLogic };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordActionDisplayTypeLogic, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS10eXBlLmxvZ2ljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL3JlY29yZC9hY3Rpb24tbG9naWMvZGlzcGxheS10eXBlL2Rpc3BsYXktdHlwZS5sb2dpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLEVBQWlCLE1BQU0sRUFBeUUsTUFBTSxRQUFRLENBQUM7QUFDdEgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQzs7QUFFckYsTUFHYSw0QkFBNkIsU0FBUSxrQkFBb0M7SUFLbEY7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUpaLFFBQUcsR0FBRyxhQUFhLENBQUM7UUFDcEIsVUFBSyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQWUsQ0FBQztJQUluRixDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQThCLEVBQUUsSUFBc0I7UUFDekQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXJCLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlELE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLENB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QUksQ0FBQzthQUNmO1lBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDTyxhQUFhLENBQUMsS0FBWSxFQUFFLFlBQXNCO1FBQ3hELElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztRQUVyQixJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUMxRCxJQUFJLFdBQVcsS0FBSyxLQUFLLEVBQUU7b0JBQ3ZCLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ2hCLE9BQU8sSUFBSSxDQUFDO2lCQUNmO1lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVKLE9BQU8sUUFBUSxDQUFDO1NBQ25CO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEIsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFFNUIsSUFBSSxXQUFXLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRTtvQkFDN0IsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDbkI7WUFFTCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQzs2RkFqTFEsNEJBQTRCO3VFQUE1Qiw0QkFBNEIsV0FBNUIsNEJBQTRCLG1CQUZ6QixNQUFNOztTQUVULDRCQUE0Qjt1RkFBNUIsNEJBQTRCO2NBSHhDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtpc0VtcHR5fSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgQWN0aW9uLCBGaWVsZCwgaXNWb2lkLCBMb2dpY0RlZmluaXRpb25zLCBSZWNvcmQsIFN0cmluZ0FycmF5TWFwLCBTdHJpbmdBcnJheU1hdHJpeCwgVmlld01vZGUgfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVjb3JkQWN0aW9uRGF0YX0gZnJvbSAnLi4vLi4vYWN0aW9ucy9yZWNvcmQuYWN0aW9uJztcbmltcG9ydCB7QWN0aW9uTG9naWNIYW5kbGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9hY3Rpb25zL2FjdGlvbi1sb2dpYy1oYW5kbGVyJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRBY3Rpb25EaXNwbGF5VHlwZUxvZ2ljIGV4dGVuZHMgQWN0aW9uTG9naWNIYW5kbGVyPFJlY29yZEFjdGlvbkRhdGE+IHtcblxuICAgIGtleSA9ICdkaXNwbGF5VHlwZSc7XG4gICAgbW9kZXMgPSBbJ2VkaXQnLCAnZGV0YWlsJywgJ2xpc3QnLCAnY3JlYXRlJywgJ21hc3N1cGRhdGUnLCAnZmlsdGVyJ10gYXMgVmlld01vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bkFsbChkaXNwbGF5TG9naWM6IExvZ2ljRGVmaW5pdGlvbnMsIGRhdGE6IFJlY29yZEFjdGlvbkRhdGEpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHRvRGlzcGxheSA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgdmFsaWRNb2RlTG9naWMgPSBPYmplY3QudmFsdWVzKGRpc3BsYXlMb2dpYykuZmlsdGVyKGxvZ2ljID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFsbG93ZWRNb2RlcyA9IGxvZ2ljLm1vZGVzID8/IFtdO1xuICAgICAgICAgICAgcmV0dXJuICEhKGFsbG93ZWRNb2Rlcy5sZW5ndGggJiYgYWxsb3dlZE1vZGVzLmluY2x1ZGVzKGRhdGEuc3RvcmUuZ2V0TW9kZSgpKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdmFsaWRNb2RlTG9naWMgfHwgIXZhbGlkTW9kZUxvZ2ljLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRvRGlzcGxheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZWZhdWx0RGlzcGxheSA9IGRhdGE/LmFjdGlvbj8uZGlzcGxheSA/PyAnc2hvdyc7XG4gICAgICAgIGxldCB0YXJnZXREaXNwbGF5ID0gJ2hpZGUnO1xuICAgICAgICBpZiAoZGVmYXVsdERpc3BsYXkgPT09ICdoaWRlJykge1xuICAgICAgICAgICAgdGFyZ2V0RGlzcGxheSA9ICdzaG93JztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdmFsaWRNb2RlTG9naWMuc29tZShsb2dpYyA9PiB0aGlzLnJ1bihkYXRhLCBsb2dpYyBhcyBBY3Rpb24pKTtcblxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGRlZmF1bHREaXNwbGF5ID0gdGFyZ2V0RGlzcGxheTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvRGlzcGxheSA9IChkZWZhdWx0RGlzcGxheSA9PT0gJ3Nob3cnKTtcblxuICAgICAgICByZXR1cm4gdG9EaXNwbGF5O1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBSZWNvcmRBY3Rpb25EYXRhLCBsb2dpYzogQWN0aW9uKTogYm9vbGVhbiB7XG5cbiAgICAgICAgY29uc3QgcmVjb3JkID0gZGF0YS5zdG9yZS5yZWNvcmRTdG9yZS5nZXRTdGFnaW5nKCk7XG4gICAgICAgIGlmICghcmVjb3JkIHx8ICFsb2dpYykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY3RpdmVPbkZpZWxkczogU3RyaW5nQXJyYXlNYXAgPSAobG9naWMucGFyYW1zICYmIGxvZ2ljLnBhcmFtcy5hY3RpdmVPbkZpZWxkcykgfHwge30gYXMgU3RyaW5nQXJyYXlNYXA7XG4gICAgICAgIGNvbnN0IHJlbGF0ZWRGaWVsZHM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoYWN0aXZlT25GaWVsZHMpO1xuXG4gICAgICAgIGNvbnN0IGFjdGl2ZU9uQXR0cmlidXRlczogU3RyaW5nQXJyYXlNYXRyaXggPSAobG9naWMucGFyYW1zICYmIGxvZ2ljLnBhcmFtcy5hY3RpdmVPbkF0dHJpYnV0ZXMpIHx8IHt9IGFzIFN0cmluZ0FycmF5TWF0cml4O1xuICAgICAgICBjb25zdCByZWxhdGVkQXR0cmlidXRlc0ZpZWxkczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhhY3RpdmVPbkF0dHJpYnV0ZXMpO1xuXG4gICAgICAgIGlmICghcmVsYXRlZEZpZWxkcy5sZW5ndGggJiYgIXJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZShyZWxhdGVkRmllbGRzLCByZWNvcmQsIGFjdGl2ZU9uRmllbGRzLCByZWxhdGVkQXR0cmlidXRlc0ZpZWxkcywgYWN0aXZlT25BdHRyaWJ1dGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhbnkgb2YgdGhlIGNvbmZpZ3VyZWQgdmFsdWVzIGlzIGN1cnJlbnRseSBzZXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHJlbGF0ZWRGaWVsZHMgUmVsYXRlZCBGaWVsZHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3RpdmVPbkZpZWxkcyBBY3RpdmUgT24gRmllbGRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHMgUmVsYXRlZCBBdHRyaWJ1dGVzIEZpZWxkc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3RpdmVPbkF0dHJpYnV0ZXMgQWN0aXZlIE9uIEF0dHJpYnV0ZXNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBhbnkgb2YgdGhlIGNvbmZpZ3VyZWQgdmFsdWVzIGlzIGN1cnJlbnRseSBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNBY3RpdmUoXG4gICAgICAgIHJlbGF0ZWRGaWVsZHM6IHN0cmluZ1tdLFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgYWN0aXZlT25GaWVsZHM6IFN0cmluZ0FycmF5TWFwLFxuICAgICAgICByZWxhdGVkQXR0cmlidXRlc0ZpZWxkczogc3RyaW5nW10sXG4gICAgICAgIGFjdGl2ZU9uQXR0cmlidXRlczogU3RyaW5nQXJyYXlNYXRyaXhcbiAgICApOiBib29sZWFue1xuICAgICAgICBsZXQgaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAoIWlzRW1wdHkoYWN0aXZlT25GaWVsZHMpKSB7XG4gICAgICAgICAgICBpc0FjdGl2ZSA9IHRoaXMuYXJlRmllbGRzQWN0aXZlKHJlbGF0ZWRGaWVsZHMsIHJlY29yZCwgYWN0aXZlT25GaWVsZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0VtcHR5KGFjdGl2ZU9uQXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgIGlzQWN0aXZlID0gaXNBY3RpdmUgJiYgdGhpcy5hcmVBdHRyaWJ1dGVzQWN0aXZlKHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzLCByZWNvcmQsIGFjdGl2ZU9uQXR0cmlidXRlcyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcmUgYXR0cmlidXRlcyBhY3RpdmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzIFJlbGF0ZWQgQXR0cmlidXRlcyBGaWVsZHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3RpdmVPbkF0dHJpYnV0ZXMgQWN0aXZlIE9uIEF0dHJpYnV0ZXNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBhbnkgYXR0cmlidXRlcyBhY3RpdmUgZXhpc3RzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFyZUF0dHJpYnV0ZXNBY3RpdmUoXG4gICAgICAgIHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzOiBzdHJpbmdbXSxcbiAgICAgICAgcmVjb3JkOiBSZWNvcmQsXG4gICAgICAgIGFjdGl2ZU9uQXR0cmlidXRlczogU3RyaW5nQXJyYXlNYXRyaXhcbiAgICApOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzLmV2ZXJ5KGZpZWxkS2V5ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZmllbGRzID0gcmVjb3JkLmZpZWxkcztcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gKGZpZWxkcyAmJiByZWNvcmQuZmllbGRzW2ZpZWxkS2V5XSkgfHwgbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBhY3RpdmVPbkF0dHJpYnV0ZXNbZmllbGRLZXldICYmIE9iamVjdC5rZXlzKGFjdGl2ZU9uQXR0cmlidXRlc1tmaWVsZEtleV0pO1xuICAgICAgICAgICAgaWYgKCFmaWVsZCB8fCAhYXR0cmlidXRlcyB8fCAhYXR0cmlidXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLnNvbWUoYXR0cmlidXRlS2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVWYWx1ZXMgPSBhY3RpdmVPbkF0dHJpYnV0ZXNbZmllbGRLZXldW2F0dHJpYnV0ZUtleV07XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZmllbGQuYXR0cmlidXRlcyAmJiBmaWVsZC5hdHRyaWJ1dGVzW2F0dHJpYnV0ZUtleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZVZhbHVlcyB8fCAhYWN0aXZlVmFsdWVzLmxlbmd0aCB8fCAhYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbHVlQWN0aXZlKGF0dHJpYnV0ZSwgYWN0aXZlVmFsdWVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcmUgZmllbGRzIGFjdGl2ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gcmVsYXRlZEZpZWxkcyBSZWxhdGVkIEZpZWxkc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFjdGl2ZU9uRmllbGRzIEFjdGl2ZSBPbiBGaWVsZHNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGVyZSBpcyBhbnkgZmllbGRzIGFjdGl2ZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhcmVGaWVsZHNBY3RpdmUocmVsYXRlZEZpZWxkczogc3RyaW5nW10sIHJlY29yZDogUmVjb3JkLCBhY3RpdmVPbkZpZWxkczogU3RyaW5nQXJyYXlNYXApOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHJlbGF0ZWRGaWVsZHMuZXZlcnkoZmllbGRLZXkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBmaWVsZHMgPSByZWNvcmQuZmllbGRzO1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSAoZmllbGRzICYmIHJlY29yZC5maWVsZHNbZmllbGRLZXldKSB8fCBudWxsO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlVmFsdWVzID0gYWN0aXZlT25GaWVsZHNbZmllbGRLZXldO1xuXG4gICAgICAgICAgICBpZiAoIWZpZWxkIHx8ICFhY3RpdmVWYWx1ZXMgfHwgIWFjdGl2ZVZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsdWVBY3RpdmUoZmllbGQsIGFjdGl2ZVZhbHVlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIHZhbHVlIGFjdGl2ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkIEZpZWxkXG4gICAgICogQHBhcmFtIHtBcnJheX0gYWN0aXZlVmFsdWVzIEFjdGl2ZSBWYWx1ZXNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGVyZSBpcyBhbnkgdmFsdWUgYWN0aXZlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzVmFsdWVBY3RpdmUoZmllbGQ6IEZpZWxkLCBhY3RpdmVWYWx1ZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBpc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChmaWVsZC52YWx1ZUxpc3QgJiYgZmllbGQudmFsdWVMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZmllbGQudmFsdWVMaXN0LnNvbWUodmFsdWUgPT4gYWN0aXZlVmFsdWVzLnNvbWUoYWN0aXZlVmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNWb2lkKGZpZWxkLnZhbHVlKSkge1xuICAgICAgICAgICAgYWN0aXZlVmFsdWVzLnNvbWUoYWN0aXZlVmFsdWUgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVZhbHVlID09PSBmaWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgICB9XG59XG4iXX0=