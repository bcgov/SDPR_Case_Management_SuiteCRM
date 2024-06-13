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
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { DateFormatter } from '../../../../services/formatters/datetime/date-formatter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatters/datetime/date-formatter.service";
class DateParserFormatter extends NgbDateParserFormatter {
    constructor(formatter) {
        super();
        this.formatter = formatter;
    }
    getUserFormat() {
        return this.userFormat;
    }
    setUserFormat(format) {
        this.userFormat = format;
    }
    parse(value) {
        if (!value) {
            return null;
        }
        const options = { fromFormat: 'yyyy-M-d' };
        if (this.userFormat) {
            options.toFormat = this.userFormat;
        }
        return this.formatter.dateFormatToStruct(value, options.toFormat || this.formatter.getUserFormat());
    }
    format(date) {
        if (!date) {
            return null;
        }
        const dateString = [date.year, date.month, date.day].join('-');
        const options = { fromFormat: 'yyyy-M-d' };
        if (this.userFormat) {
            options.toFormat = this.userFormat;
        }
        return this.formatter.toUserFormat(dateString, options);
    }
    static { this.ɵfac = function DateParserFormatter_Factory(t) { return new (t || DateParserFormatter)(i0.ɵɵinject(i1.DateFormatter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DateParserFormatter, factory: DateParserFormatter.ɵfac }); }
}
export { DateParserFormatter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateParserFormatter, [{
        type: Injectable
    }], function () { return [{ type: i1.DateFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1wYXJzZXItZm9ybWF0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2Jhc2UvZGF0ZXRpbWUvZGF0ZS9kYXRlLXBhcnNlci1mb3JtYXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLHNCQUFzQixFQUFnQixNQUFNLDRCQUE0QixDQUFDO0FBQ2pGLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGlFQUFpRSxDQUFDOzs7QUFHOUYsTUFDYSxtQkFBb0IsU0FBUSxzQkFBc0I7SUFJM0QsWUFBc0IsU0FBd0I7UUFDMUMsS0FBSyxFQUFFLENBQUM7UUFEVSxjQUFTLEdBQVQsU0FBUyxDQUFlO0lBRTlDLENBQUM7SUFFRCxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBYztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQWE7UUFDZixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE1BQU0sT0FBTyxHQUFHLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBa0IsQ0FBQztRQUMxRCxJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDaEIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQTBCO1FBQzdCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvRCxNQUFNLE9BQU8sR0FBRyxFQUFDLFVBQVUsRUFBRSxVQUFVLEVBQWtCLENBQUM7UUFDMUQsSUFBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7b0ZBckNRLG1CQUFtQjt1RUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQjs7U0FBbkIsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyLCBOZ2JEYXRlU3RydWN0fSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGV0aW1lL2RhdGUtZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtGb3JtYXRPcHRpb25zfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2Zvcm1hdHRlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlUGFyc2VyRm9ybWF0dGVyIGV4dGVuZHMgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciB7XG5cbiAgICB1c2VyRm9ybWF0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZm9ybWF0dGVyOiBEYXRlRm9ybWF0dGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0VXNlckZvcm1hdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckZvcm1hdDtcbiAgICB9XG5cbiAgICBzZXRVc2VyRm9ybWF0KGZvcm1hdDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudXNlckZvcm1hdCA9IGZvcm1hdDtcbiAgICB9XG5cbiAgICBwYXJzZSh2YWx1ZTogc3RyaW5nKTogTmdiRGF0ZVN0cnVjdCB8IG51bGwge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcHRpb25zID0ge2Zyb21Gb3JtYXQ6ICd5eXl5LU0tZCd9IGFzIEZvcm1hdE9wdGlvbnM7XG4gICAgICAgIGlmKHRoaXMudXNlckZvcm1hdCkge1xuICAgICAgICAgICAgb3B0aW9ucy50b0Zvcm1hdCA9IHRoaXMudXNlckZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZXIuZGF0ZUZvcm1hdFRvU3RydWN0KHZhbHVlLCBvcHRpb25zLnRvRm9ybWF0IHx8IHRoaXMuZm9ybWF0dGVyLmdldFVzZXJGb3JtYXQoKSk7XG4gICAgfVxuXG4gICAgZm9ybWF0KGRhdGU6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gW2RhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXldLmpvaW4oJy0nKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtmcm9tRm9ybWF0OiAneXl5eS1NLWQnfSBhcyBGb3JtYXRPcHRpb25zO1xuICAgICAgICBpZih0aGlzLnVzZXJGb3JtYXQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudG9Gb3JtYXQgPSB0aGlzLnVzZXJGb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVyLnRvVXNlckZvcm1hdChkYXRlU3RyaW5nLCBvcHRpb25zKTtcbiAgICB9XG59XG4iXX0=