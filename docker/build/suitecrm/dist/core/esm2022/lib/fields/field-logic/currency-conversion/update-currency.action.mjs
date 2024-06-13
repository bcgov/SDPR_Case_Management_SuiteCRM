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
class UpdateCurrencyAction extends FieldLogicActionHandler {
    constructor(currencyService) {
        super();
        this.currencyService = currencyService;
        this.key = 'update-currency';
        this.modes = ['edit', 'create', 'massupdate', 'filter'];
    }
    run(data, action) {
        const record = data.record;
        const field = data.field;
        const isBaseCurrency = field?.definition?.metadata?.isBaseCurrency ?? false;
        if (!record || !field || isBaseCurrency) {
            return;
        }
        const currencyIdFieldName = action.params.currencyIdField ?? 'currency_id';
        const baseCurrencyFieldName = action.params.baseCurrencyField ?? 'amount_usdollar';
        const currencyId = record?.fields[currencyIdFieldName]?.value ?? null;
        let value = parseFloat(field?.value ?? null);
        let baseValue = parseFloat(record?.fields[baseCurrencyFieldName]?.value ?? null);
        if (!isFinite(value) || !isFinite(baseValue) || currencyId === null) {
            return;
        }
        const newValue = this.currencyService.baseToCurrency(currencyId, baseValue);
        if (!isFinite(newValue)) {
            return;
        }
        this.updateValue(field, newValue, record);
    }
    updateValue(field, value, record) {
        field.value = value.toString();
        field.formControl.setValue(value.toString());
        // re-validate the parent form-control after value update
        record.formGroup.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
    static { this.ɵfac = function UpdateCurrencyAction_Factory(t) { return new (t || UpdateCurrencyAction)(i0.ɵɵinject(i1.CurrencyService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UpdateCurrencyAction, factory: UpdateCurrencyAction.ɵfac, providedIn: 'root' }); }
}
export { UpdateCurrencyAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UpdateCurrencyAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.CurrencyService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWN1cnJlbmN5LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvZmllbGQtbG9naWMvY3VycmVuY3ktY29udmVyc2lvbi91cGRhdGUtY3VycmVuY3kuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBdUIsdUJBQXVCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNkNBQTZDLENBQUM7OztBQUU1RSxNQUdhLG9CQUFxQixTQUFRLHVCQUF1QjtJQUs3RCxZQUFzQixlQUFnQztRQUNsRCxLQUFLLEVBQUUsQ0FBQztRQURVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUh0RCxRQUFHLEdBQUcsaUJBQWlCLENBQUM7UUFDeEIsVUFBSyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFlLENBQUM7SUFJakUsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUEwQixFQUFFLE1BQWM7UUFDMUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLE1BQU0sY0FBYyxHQUFHLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGNBQWMsSUFBSSxLQUFLLENBQUM7UUFFNUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssSUFBSSxjQUFjLEVBQUU7WUFDckMsT0FBTztTQUNWO1FBRUQsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsSUFBSSxhQUFhLENBQUM7UUFDM0UsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQixJQUFJLGlCQUFpQixDQUFDO1FBRW5GLE1BQU0sVUFBVSxHQUFHLE1BQU0sRUFBRSxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDO1FBQ3RFLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDO1FBRWpGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtZQUNqRSxPQUFPO1NBQ1Y7UUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNyQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVTLFdBQVcsQ0FBQyxLQUFZLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDN0QsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0IsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDN0MseURBQXlEO1FBQ3pELE1BQU0sQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7cUZBM0NRLG9CQUFvQjt1RUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQixtQkFGakIsTUFBTTs7U0FFVCxvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQUhoQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGlvbiwgRmllbGQsIFJlY29yZCwgVmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0ZpZWxkTG9naWNBY3Rpb25EYXRhLCBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vZmllbGQtbG9naWMuYWN0aW9uJztcbmltcG9ydCB7Q3VycmVuY3lTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9jdXJyZW5jeS9jdXJyZW5jeS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVcGRhdGVDdXJyZW5jeUFjdGlvbiBleHRlbmRzIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyIHtcblxuICAgIGtleSA9ICd1cGRhdGUtY3VycmVuY3knO1xuICAgIG1vZGVzID0gWydlZGl0JywgJ2NyZWF0ZScsICdtYXNzdXBkYXRlJywgJ2ZpbHRlciddIGFzIFZpZXdNb2RlW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY3VycmVuY3lTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogRmllbGRMb2dpY0FjdGlvbkRhdGEsIGFjdGlvbjogQWN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGRhdGEucmVjb3JkO1xuICAgICAgICBjb25zdCBmaWVsZCA9IGRhdGEuZmllbGQ7XG4gICAgICAgIGNvbnN0IGlzQmFzZUN1cnJlbmN5ID0gZmllbGQ/LmRlZmluaXRpb24/Lm1ldGFkYXRhPy5pc0Jhc2VDdXJyZW5jeSA/PyBmYWxzZTtcblxuICAgICAgICBpZiAoIXJlY29yZCB8fCAhZmllbGQgfHwgaXNCYXNlQ3VycmVuY3kpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbmN5SWRGaWVsZE5hbWUgPSBhY3Rpb24ucGFyYW1zLmN1cnJlbmN5SWRGaWVsZCA/PyAnY3VycmVuY3lfaWQnO1xuICAgICAgICBjb25zdCBiYXNlQ3VycmVuY3lGaWVsZE5hbWUgPSBhY3Rpb24ucGFyYW1zLmJhc2VDdXJyZW5jeUZpZWxkID8/ICdhbW91bnRfdXNkb2xsYXInO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbmN5SWQgPSByZWNvcmQ/LmZpZWxkc1tjdXJyZW5jeUlkRmllbGROYW1lXT8udmFsdWUgPz8gbnVsbDtcbiAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VGbG9hdChmaWVsZD8udmFsdWUgPz8gbnVsbCk7XG4gICAgICAgIGxldCBiYXNlVmFsdWUgPSBwYXJzZUZsb2F0KHJlY29yZD8uZmllbGRzW2Jhc2VDdXJyZW5jeUZpZWxkTmFtZV0/LnZhbHVlID8/IG51bGwpO1xuXG4gICAgICAgIGlmICghaXNGaW5pdGUodmFsdWUpIHx8ICFpc0Zpbml0ZShiYXNlVmFsdWUpIHx8IGN1cnJlbmN5SWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5jdXJyZW5jeVNlcnZpY2UuYmFzZVRvQ3VycmVuY3koY3VycmVuY3lJZCwgYmFzZVZhbHVlKTtcblxuICAgICAgICBpZiAoIWlzRmluaXRlKG5ld1ZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShmaWVsZCwgbmV3VmFsdWUsIHJlY29yZCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKGZpZWxkOiBGaWVsZCwgdmFsdWU6IG51bWJlciwgcmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICBmaWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSh2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgLy8gcmUtdmFsaWRhdGUgdGhlIHBhcmVudCBmb3JtLWNvbnRyb2wgYWZ0ZXIgdmFsdWUgdXBkYXRlXG4gICAgICAgIHJlY29yZC5mb3JtR3JvdXAudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogdHJ1ZX0pO1xuICAgIH1cbn1cbiJdfQ==