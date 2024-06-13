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
import { FieldLogicActionHandler } from '../field-logic.action';
import { CurrencyService } from '../../../services/currency/currency.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/currency/currency.service";
class UpdateBaseCurrencyAction extends FieldLogicActionHandler {
    constructor(currencyService) {
        super();
        this.currencyService = currencyService;
        this.key = 'update-base-currency';
        this.modes = ['edit', 'create', 'massupdate', 'filter'];
    }
    run(data, action) {
        const record = data.record;
        const field = data.field;
        if (!record || !field) {
            return;
        }
        const currencyIdFieldName = action.params.currencyIdField ?? 'currency_id';
        const currencyFieldName = action.params.currencyField ?? 'amount';
        const currencyId = record?.fields[currencyIdFieldName]?.value ?? null;
        let value = parseFloat(record?.fields[currencyFieldName]?.value ?? null);
        if (!isFinite(value)) {
            return;
        }
        if (currencyId === null) {
            this.updateValue(field, value, record);
        }
        const baseValue = this.currencyService.currencyToBase(currencyId, value);
        if (!isFinite(baseValue)) {
            return;
        }
        this.updateValue(field, baseValue, record);
    }
    updateValue(field, baseValue, record) {
        field.value = baseValue.toString();
        field.formControl.setValue(baseValue.toString());
        // re-validate the parent form-control after value update
        record.formGroup.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
    static { this.ɵfac = function UpdateBaseCurrencyAction_Factory(t) { return new (t || UpdateBaseCurrencyAction)(i0.ɵɵinject(i1.CurrencyService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UpdateBaseCurrencyAction, factory: UpdateBaseCurrencyAction.ɵfac, providedIn: 'root' }); }
}
export { UpdateBaseCurrencyAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UpdateBaseCurrencyAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.CurrencyService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWJhc2UtY3VycmVuY3kuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9maWVsZC1sb2dpYy9jdXJyZW5jeS1jb252ZXJzaW9uL3VwZGF0ZS1iYXNlLWN1cnJlbmN5LmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQXVCLHVCQUF1QixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDZDQUE2QyxDQUFDOzs7QUFFNUUsTUFHYSx3QkFBeUIsU0FBUSx1QkFBdUI7SUFLakUsWUFBc0IsZUFBZ0M7UUFDbEQsS0FBSyxFQUFFLENBQUM7UUFEVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFIdEQsUUFBRyxHQUFHLHNCQUFzQixDQUFDO1FBQzdCLFVBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBZSxDQUFDO0lBSWpFLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBMEIsRUFBRSxNQUFjO1FBQzFDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV6QixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUVELE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLElBQUksYUFBYSxDQUFDO1FBQzNFLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksUUFBUSxDQUFDO1FBRWxFLE1BQU0sVUFBVSxHQUFHLE1BQU0sRUFBRSxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDO1FBQ3RFLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEIsT0FBTztTQUNWO1FBRUQsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMxQztRQUVELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV6RSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3RCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRVMsV0FBVyxDQUFDLEtBQVksRUFBRSxTQUFpQixFQUFFLE1BQWM7UUFDakUsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDakQseURBQXlEO1FBQ3pELE1BQU0sQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7eUZBN0NRLHdCQUF3Qjt1RUFBeEIsd0JBQXdCLFdBQXhCLHdCQUF3QixtQkFGckIsTUFBTTs7U0FFVCx3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQUhwQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGlvbiwgRmllbGQsIFJlY29yZCwgVmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0ZpZWxkTG9naWNBY3Rpb25EYXRhLCBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vZmllbGQtbG9naWMuYWN0aW9uJztcbmltcG9ydCB7Q3VycmVuY3lTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9jdXJyZW5jeS9jdXJyZW5jeS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVcGRhdGVCYXNlQ3VycmVuY3lBY3Rpb24gZXh0ZW5kcyBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlciB7XG5cbiAgICBrZXkgPSAndXBkYXRlLWJhc2UtY3VycmVuY3knO1xuICAgIG1vZGVzID0gWydlZGl0JywgJ2NyZWF0ZScsICdtYXNzdXBkYXRlJywgJ2ZpbHRlciddIGFzIFZpZXdNb2RlW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY3VycmVuY3lTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogRmllbGRMb2dpY0FjdGlvbkRhdGEsIGFjdGlvbjogQWN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGRhdGEucmVjb3JkO1xuICAgICAgICBjb25zdCBmaWVsZCA9IGRhdGEuZmllbGQ7XG5cbiAgICAgICAgaWYgKCFyZWNvcmQgfHwgIWZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdXJyZW5jeUlkRmllbGROYW1lID0gYWN0aW9uLnBhcmFtcy5jdXJyZW5jeUlkRmllbGQgPz8gJ2N1cnJlbmN5X2lkJztcbiAgICAgICAgY29uc3QgY3VycmVuY3lGaWVsZE5hbWUgPSBhY3Rpb24ucGFyYW1zLmN1cnJlbmN5RmllbGQgPz8gJ2Ftb3VudCc7XG5cbiAgICAgICAgY29uc3QgY3VycmVuY3lJZCA9IHJlY29yZD8uZmllbGRzW2N1cnJlbmN5SWRGaWVsZE5hbWVdPy52YWx1ZSA/PyBudWxsO1xuICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KHJlY29yZD8uZmllbGRzW2N1cnJlbmN5RmllbGROYW1lXT8udmFsdWUgPz8gbnVsbCk7XG5cbiAgICAgICAgaWYgKCFpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW5jeUlkID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGZpZWxkLCB2YWx1ZSwgcmVjb3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJhc2VWYWx1ZSA9IHRoaXMuY3VycmVuY3lTZXJ2aWNlLmN1cnJlbmN5VG9CYXNlKGN1cnJlbmN5SWQsIHZhbHVlKTtcblxuICAgICAgICBpZiAoIWlzRmluaXRlKGJhc2VWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZmllbGQsIGJhc2VWYWx1ZSwgcmVjb3JkKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlVmFsdWUoZmllbGQ6IEZpZWxkLCBiYXNlVmFsdWU6IG51bWJlciwgcmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgZmllbGQudmFsdWUgPSBiYXNlVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoYmFzZVZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAvLyByZS12YWxpZGF0ZSB0aGUgcGFyZW50IGZvcm0tY29udHJvbCBhZnRlciB2YWx1ZSB1cGRhdGVcbiAgICAgICAgcmVjb3JkLmZvcm1Hcm91cC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiB0cnVlfSk7XG4gICAgfVxufVxuIl19