import { Injectable } from '@angular/core';
import { DateFormatter } from '../../../formatters/datetime/date-formatter.service';
import { FormControlUtils } from '../../field/form-control.utils';
import * as i0 from "@angular/core";
import * as i1 from "../../../formatters/datetime/date-formatter.service";
import * as i2 from "../../field/form-control.utils";
export const dateValidator = (formatter, userFormat) => ((control) => {
    const invalid = formatter.validateUserFormat(control.value, userFormat);
    return invalid ? {
        invalidDate: {
            value: control.value,
            message: {
                labelKey: 'LBL_VALIDATION_ERROR_DATE_FORMAT',
                context: {
                    value: control.value,
                    expected: formatter.toUserFormat('2020-01-23')
                }
            }
        },
    } : null;
});
class DateValidator {
    constructor(formatter, utils) {
        this.formatter = formatter;
        this.utils = utils;
    }
    applies(record, viewField) {
        if (!viewField || !viewField.fieldDefinition) {
            return false;
        }
        return viewField.type === 'date';
    }
    getValidator(viewField) {
        if (!viewField || !viewField.fieldDefinition) {
            return [];
        }
        let userFormat = viewField?.metadata?.date_time_format || '';
        return [dateValidator(this.formatter, userFormat)];
    }
    static { this.ɵfac = function DateValidator_Factory(t) { return new (t || DateValidator)(i0.ɵɵinject(i1.DateFormatter), i0.ɵɵinject(i2.FormControlUtils)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DateValidator, factory: DateValidator.ɵfac, providedIn: 'root' }); }
}
export { DateValidator };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateValidator, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.DateFormatter }, { type: i2.FormControlUtils }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvcmVjb3JkL3ZhbGlkYXRpb24vdmFsaWRhdG9ycy9kYXRlLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QkEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scURBQXFELENBQUM7QUFFbEYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFFaEUsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQUMsU0FBd0IsRUFBRSxVQUFrQixFQUF1QixFQUFFLENBQUMsQ0FDaEcsQ0FBQyxPQUF3QixFQUFtQyxFQUFFO0lBRTFELE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hFLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNiLFdBQVcsRUFBRTtZQUNULEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixPQUFPLEVBQUU7Z0JBQ0wsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsT0FBTyxFQUFFO29CQUNMLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztvQkFDcEIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO2lCQUNqRDthQUNKO1NBQ0o7S0FFSixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDYixDQUFDLENBQ0osQ0FBQztBQUVGLE1BR2EsYUFBYTtJQUV0QixZQUFzQixTQUF3QixFQUFZLEtBQXVCO1FBQTNELGNBQVMsR0FBVCxTQUFTLENBQWU7UUFBWSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtJQUNqRixDQUFDO0lBRUQsT0FBTyxDQUFDLE1BQWMsRUFBRSxTQUE4QjtRQUNsRCxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUMxQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sU0FBUyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7SUFDckMsQ0FBQztJQUVELFlBQVksQ0FBQyxTQUE4QjtRQUV2QyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUMxQyxPQUFPLEVBQUUsQ0FBQztTQUNiO1FBRUQsSUFBSSxVQUFVLEdBQUcsU0FBUyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7UUFFN0QsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs4RUF0QlEsYUFBYTt1RUFBYixhQUFhLFdBQWIsYUFBYSxtQkFGVixNQUFNOztTQUVULGFBQWE7dUZBQWIsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7VmFsaWRhdG9ySW50ZXJmYWNlfSBmcm9tICcuLi92YWxpZGF0b3IuSW50ZXJmYWNlJztcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7Vmlld0ZpZWxkRGVmaW5pdGlvbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uL2Zvcm1hdHRlcnMvZGF0ZXRpbWUvZGF0ZS1mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge1N0YW5kYXJkVmFsaWRhdGlvbkVycm9ycywgU3RhbmRhcmRWYWxpZGF0b3JGbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7Rm9ybUNvbnRyb2xVdGlsc30gZnJvbSAnLi4vLi4vZmllbGQvZm9ybS1jb250cm9sLnV0aWxzJztcblxuZXhwb3J0IGNvbnN0IGRhdGVWYWxpZGF0b3IgPSAoZm9ybWF0dGVyOiBEYXRlRm9ybWF0dGVyLCB1c2VyRm9ybWF0OiBzdHJpbmcpOiBTdGFuZGFyZFZhbGlkYXRvckZuID0+IChcbiAgICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogU3RhbmRhcmRWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IGZvcm1hdHRlci52YWxpZGF0ZVVzZXJGb3JtYXQoY29udHJvbC52YWx1ZSwgdXNlckZvcm1hdCk7XG4gICAgICAgIHJldHVybiBpbnZhbGlkID8ge1xuICAgICAgICAgICAgaW52YWxpZERhdGU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogY29udHJvbC52YWx1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX1ZBTElEQVRJT05fRVJST1JfREFURV9GT1JNQVQnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29udHJvbC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiBmb3JtYXR0ZXIudG9Vc2VyRm9ybWF0KCcyMDIwLTAxLTIzJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgfSA6IG51bGw7XG4gICAgfVxuKTtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRlVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9ySW50ZXJmYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBmb3JtYXR0ZXI6IERhdGVGb3JtYXR0ZXIsIHByb3RlY3RlZCB1dGlsczogRm9ybUNvbnRyb2xVdGlscykge1xuICAgIH1cblxuICAgIGFwcGxpZXMocmVjb3JkOiBSZWNvcmQsIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXZpZXdGaWVsZCB8fCAhdmlld0ZpZWxkLmZpZWxkRGVmaW5pdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZpZXdGaWVsZC50eXBlID09PSAnZGF0ZSc7XG4gICAgfVxuXG4gICAgZ2V0VmFsaWRhdG9yKHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbik6IFN0YW5kYXJkVmFsaWRhdG9yRm5bXSB7XG5cbiAgICAgICAgaWYgKCF2aWV3RmllbGQgfHwgIXZpZXdGaWVsZC5maWVsZERlZmluaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1c2VyRm9ybWF0ID0gdmlld0ZpZWxkPy5tZXRhZGF0YT8uZGF0ZV90aW1lX2Zvcm1hdCB8fCAnJztcblxuICAgICAgICByZXR1cm4gW2RhdGVWYWxpZGF0b3IodGhpcy5mb3JtYXR0ZXIsIHVzZXJGb3JtYXQpXTtcbiAgICB9XG5cblxufVxuIl19