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
import { Component } from '@angular/core';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { BaseEnumComponent } from './base-enum.component';
import { LanguageStore } from '../../store/language/language.store';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import { isArray, isEmpty, uniqBy } from 'lodash-es';
import { isVoid } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../services/formatters/data-type.formatter.service";
import * as i3 from "../field-logic/field-logic.manager";
import * as i4 from "../field-logic-display/field-logic-display.manager";
class BaseMultiEnumComponent extends BaseEnumComponent {
    constructor(languages, typeFormatter, logic, logicDisplay) {
        super(languages, typeFormatter, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    subscribeValueChanges() {
        if (!this.field?.formControl) {
            return;
        }
        const formValueChangesSubscription = this.field.formControl.valueChanges.subscribe((value) => this.field.valueList = value);
        this.subs.push(formValueChangesSubscription);
    }
    initValue() {
        const fieldValueList = this.field.valueList;
        if (isVoid(fieldValueList) || isEmpty(fieldValueList)) {
            this.initEnumDefault();
            return;
        }
        this.updateInternalState(fieldValueList);
    }
    updateInternalState(value = []) {
        const valueArray = isArray(value) ? value : [value];
        this.selectedValues = valueArray.map(valueElement => this.buildOptionFromValue(valueElement));
        this.selectedValues = uniqBy(this.selectedValues, 'value');
        this.syncSelectedValuesWithForm();
    }
    syncSelectedValuesWithForm() {
        const selectedValuesValueMap = this.selectedValues.map(selectedValue => selectedValue.value);
        this.setFormControlValue(selectedValuesValueMap);
        return selectedValuesValueMap;
    }
    static { this.ɵfac = function BaseMultiEnumComponent_Factory(t) { return new (t || BaseMultiEnumComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.FieldLogicManager), i0.ɵɵdirectiveInject(i4.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMultiEnumComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BaseMultiEnumComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
export { BaseMultiEnumComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMultiEnumComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.FieldLogicManager }, { type: i4.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tdWx0aWVudW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9iYXNlL2Jhc2UtbXVsdGllbnVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sb0RBQW9ELENBQUM7QUFDNUYsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7OztBQUVoQyxNQUNhLHNCQUF1QixTQUFRLGlCQUFpQjtJQUV6RCxZQUNjLFNBQXdCLEVBQ3hCLGFBQWdDLEVBQ2hDLEtBQXdCLEVBQ3hCLFlBQXNDO1FBRWhELEtBQUssQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUwzQyxjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7SUFHcEQsQ0FBQztJQUVTLHFCQUFxQjtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUU7WUFDMUIsT0FBTztTQUNWO1FBRUQsTUFBTSw0QkFBNEIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUM5RSxDQUFDLEtBQWUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRVMsU0FBUztRQUNmLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBRTVDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFUyxtQkFBbUIsQ0FBQyxRQUEyQixFQUFFO1FBQ3ZELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUEsRUFBRSxDQUFBLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFM0QsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVTLDBCQUEwQjtRQUNoQyxNQUFNLHNCQUFzQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRWpELE9BQU8sc0JBQXNCLENBQUM7SUFDbEMsQ0FBQzt1RkFoRFEsc0JBQXNCO29FQUF0QixzQkFBc0I7O1NBQXRCLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBRGxDLFNBQVM7ZUFBQyxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7QmFzZUVudW1Db21wb25lbnR9IGZyb20gJy4vYmFzZS1lbnVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7RmllbGRMb2dpY01hbmFnZXJ9IGZyb20gJy4uL2ZpZWxkLWxvZ2ljL2ZpZWxkLWxvZ2ljLm1hbmFnZXInO1xuaW1wb3J0IHtGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJ9IGZyb20gJy4uL2ZpZWxkLWxvZ2ljLWRpc3BsYXkvZmllbGQtbG9naWMtZGlzcGxheS5tYW5hZ2VyJztcbmltcG9ydCB7IGlzQXJyYXksIGlzRW1wdHksIHVuaXFCeSB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBpc1ZvaWQgfSBmcm9tICdjb21tb24nO1xuXG5AQ29tcG9uZW50KHt0ZW1wbGF0ZTogJyd9KVxuZXhwb3J0IGNsYXNzIEJhc2VNdWx0aUVudW1Db21wb25lbnQgZXh0ZW5kcyBCYXNlRW51bUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlczogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIobGFuZ3VhZ2VzLCB0eXBlRm9ybWF0dGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3Vic2NyaWJlVmFsdWVDaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZmllbGQ/LmZvcm1Db250cm9sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtVmFsdWVDaGFuZ2VzU3Vic2NyaXB0aW9uID0gdGhpcy5maWVsZC5mb3JtQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHZhbHVlOiBzdHJpbmdbXSkgPT4gdGhpcy5maWVsZC52YWx1ZUxpc3QgPSB2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2goZm9ybVZhbHVlQ2hhbmdlc1N1YnNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRWYWx1ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZUxpc3QgPSB0aGlzLmZpZWxkLnZhbHVlTGlzdDtcblxuICAgICAgICBpZiAoaXNWb2lkKGZpZWxkVmFsdWVMaXN0KSB8fCBpc0VtcHR5KGZpZWxkVmFsdWVMaXN0KSkge1xuICAgICAgICAgICAgdGhpcy5pbml0RW51bURlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJuYWxTdGF0ZShmaWVsZFZhbHVlTGlzdCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUludGVybmFsU3RhdGUodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdID0gW10pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdmFsdWVBcnJheSA9IGlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSB2YWx1ZUFycmF5Lm1hcCh2YWx1ZUVsZW1lbnQ9PnRoaXMuYnVpbGRPcHRpb25Gcm9tVmFsdWUodmFsdWVFbGVtZW50KSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSB1bmlxQnkodGhpcy5zZWxlY3RlZFZhbHVlcywgJ3ZhbHVlJyk7XG5cbiAgICAgICAgdGhpcy5zeW5jU2VsZWN0ZWRWYWx1ZXNXaXRoRm9ybSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzeW5jU2VsZWN0ZWRWYWx1ZXNXaXRoRm9ybSgpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzVmFsdWVNYXAgPSB0aGlzLnNlbGVjdGVkVmFsdWVzLm1hcChzZWxlY3RlZFZhbHVlID0+IHNlbGVjdGVkVmFsdWUudmFsdWUpO1xuXG4gICAgICAgIHRoaXMuc2V0Rm9ybUNvbnRyb2xWYWx1ZShzZWxlY3RlZFZhbHVlc1ZhbHVlTWFwKTtcblxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZXNWYWx1ZU1hcDtcbiAgICB9XG59XG4iXX0=