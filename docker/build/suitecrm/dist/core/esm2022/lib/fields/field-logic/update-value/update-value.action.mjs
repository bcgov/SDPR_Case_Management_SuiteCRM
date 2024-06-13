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
import { FieldLogicActionHandler } from '../field-logic.action';
import { ActiveFieldsChecker } from "../../../services/condition-operators/active-fields-checker.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../services/condition-operators/active-fields-checker.service";
class UpdateValueAction extends FieldLogicActionHandler {
    constructor(activeFieldsChecker) {
        super();
        this.activeFieldsChecker = activeFieldsChecker;
        this.key = 'updateValue';
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
        const targetValue = action.params && action.params.targetValue;
        if (!targetValue) {
            return;
        }
        const isActive = this.activeFieldsChecker.isActive(relatedFields, record, activeOnFields, relatedAttributesFields, activeOnAttributes);
        let value = data.field?.value;
        if (isActive) {
            value = targetValue;
        }
        this.updateValue(field, value.toString(), record);
    }
    /**
     * Update the new value
     * @param {object} field
     * @param {object} record
     */
    updateValue(field, value, record) {
        field.value = value.toString();
        field.formControl.setValue(value);
        // re-validate the parent form-control after value update
        record.formGroup.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
    static { this.ɵfac = function UpdateValueAction_Factory(t) { return new (t || UpdateValueAction)(i0.ɵɵinject(i1.ActiveFieldsChecker)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UpdateValueAction, factory: UpdateValueAction.ɵfac, providedIn: 'root' }); }
}
export { UpdateValueAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UpdateValueAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ActiveFieldsChecker }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXZhbHVlLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvZmllbGQtbG9naWMvdXBkYXRlLXZhbHVlL3VwZGF0ZS12YWx1ZS5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUF1Qix1QkFBdUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRXBGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFFQUFxRSxDQUFDOzs7QUFFeEcsTUFHYSxpQkFBa0IsU0FBUSx1QkFBdUI7SUFLMUQsWUFBc0IsbUJBQXdDO1FBQzFELEtBQUssRUFBRSxDQUFDO1FBRFUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUg5RCxRQUFHLEdBQUcsYUFBYSxDQUFDO1FBQ3BCLFVBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFlLENBQUM7SUFJbkYsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUEwQixFQUFFLE1BQWM7UUFDMUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXpCLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbkIsT0FBTztTQUNWO1FBRUQsTUFBTSxjQUFjLEdBQW1CLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQW9CLENBQUM7UUFDL0csTUFBTSxhQUFhLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU1RCxNQUFNLGtCQUFrQixHQUFzQixDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQXVCLENBQUM7UUFDN0gsTUFBTSx1QkFBdUIsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFMUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUU7WUFDMUQsT0FBTztTQUNWO1FBRUQsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUUvRCxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2QsT0FBTztTQUNWO1FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRXZJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBRTlCLElBQUksUUFBUSxFQUFFO1lBQ1YsS0FBSyxHQUFHLFdBQVcsQ0FBQztTQUN2QjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUV0RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLFdBQVcsQ0FBQyxLQUFZLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDN0QsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0IsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMseURBQXlEO1FBQ3pELE1BQU0sQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7a0ZBdkRRLGlCQUFpQjt1RUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGZCxNQUFNOztTQUVULGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmllbGRMb2dpY0FjdGlvbkRhdGEsIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9maWVsZC1sb2dpYy5hY3Rpb24nO1xuaW1wb3J0IHtBY3Rpb24sIEZpZWxkLCBSZWNvcmQsIFN0cmluZ0FycmF5TWFwLCBTdHJpbmdBcnJheU1hdHJpeCwgVmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0FjdGl2ZUZpZWxkc0NoZWNrZXJ9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9jb25kaXRpb24tb3BlcmF0b3JzL2FjdGl2ZS1maWVsZHMtY2hlY2tlci5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlVmFsdWVBY3Rpb24gZXh0ZW5kcyBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlciB7XG5cbiAgICBrZXkgPSAndXBkYXRlVmFsdWUnO1xuICAgIG1vZGVzID0gWydlZGl0JywgJ2RldGFpbCcsICdsaXN0JywgJ2NyZWF0ZScsICdtYXNzdXBkYXRlJywgJ2ZpbHRlciddIGFzIFZpZXdNb2RlW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWN0aXZlRmllbGRzQ2hlY2tlcjogQWN0aXZlRmllbGRzQ2hlY2tlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBGaWVsZExvZ2ljQWN0aW9uRGF0YSwgYWN0aW9uOiBBY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVjb3JkID0gZGF0YS5yZWNvcmQ7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZGF0YS5maWVsZDtcblxuICAgICAgICBpZiAoIXJlY29yZCB8fCAhZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjdGl2ZU9uRmllbGRzOiBTdHJpbmdBcnJheU1hcCA9IChhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMuYWN0aXZlT25GaWVsZHMpIHx8IHt9IGFzIFN0cmluZ0FycmF5TWFwO1xuICAgICAgICBjb25zdCByZWxhdGVkRmllbGRzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKGFjdGl2ZU9uRmllbGRzKTtcblxuICAgICAgICBjb25zdCBhY3RpdmVPbkF0dHJpYnV0ZXM6IFN0cmluZ0FycmF5TWF0cml4ID0gKGFjdGlvbi5wYXJhbXMgJiYgYWN0aW9uLnBhcmFtcy5hY3RpdmVPbkF0dHJpYnV0ZXMpIHx8IHt9IGFzIFN0cmluZ0FycmF5TWF0cml4O1xuICAgICAgICBjb25zdCByZWxhdGVkQXR0cmlidXRlc0ZpZWxkczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhhY3RpdmVPbkF0dHJpYnV0ZXMpO1xuXG4gICAgICAgIGlmICghcmVsYXRlZEZpZWxkcy5sZW5ndGggJiYgIXJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSBhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMudGFyZ2V0VmFsdWU7XG5cbiAgICAgICAgaWYgKCF0YXJnZXRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmFjdGl2ZUZpZWxkc0NoZWNrZXIuaXNBY3RpdmUocmVsYXRlZEZpZWxkcywgcmVjb3JkLCBhY3RpdmVPbkZpZWxkcywgcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHMsIGFjdGl2ZU9uQXR0cmlidXRlcyk7XG5cbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YS5maWVsZD8udmFsdWU7XG5cbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShmaWVsZCwgdmFsdWUudG9TdHJpbmcoKSwgcmVjb3JkKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgbmV3IHZhbHVlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVWYWx1ZShmaWVsZDogRmllbGQsIHZhbHVlOiBzdHJpbmcsIHJlY29yZDogUmVjb3JkKTogdm9pZCB7XG4gICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAvLyByZS12YWxpZGF0ZSB0aGUgcGFyZW50IGZvcm0tY29udHJvbCBhZnRlciB2YWx1ZSB1cGRhdGVcbiAgICAgICAgcmVjb3JkLmZvcm1Hcm91cC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiB0cnVlfSk7XG4gICAgfVxufVxuIl19