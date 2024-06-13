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
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { DateFormatter } from '../../../../services/formatters/datetime/date-formatter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatters/datetime/date-formatter.service";
class DateAdapter extends NgbDateAdapter {
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
    fromModel(value) {
        if (!value) {
            return null;
        }
        return this.formatter.dateFormatToStruct(value, this.userFormat || '');
    }
    toModel(date) {
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
    static { this.ɵfac = function DateAdapter_Factory(t) { return new (t || DateAdapter)(i0.ɵɵinject(i1.DateFormatter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DateAdapter, factory: DateAdapter.ɵfac }); }
}
export { DateAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.DateFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1hZGFwdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2Jhc2UvZGF0ZXRpbWUvZGF0ZS9kYXRlLWFkYXB0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLGNBQWMsRUFBZ0IsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxpRUFBaUUsQ0FBQzs7O0FBRzlGLE1BQ2EsV0FBWSxTQUFRLGNBQXNCO0lBSW5ELFlBQ2MsU0FBd0I7UUFFbEMsS0FBSyxFQUFFLENBQUM7UUFGRSxjQUFTLEdBQVQsU0FBUyxDQUFlO0lBR3RDLENBQUM7SUFFRCxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBYztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQW9CO1FBQzFCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBMEI7UUFDOUIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sT0FBTyxHQUFHLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBa0IsQ0FBQztRQUMxRCxJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDaEIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs0RUFuQ1EsV0FBVzt1RUFBWCxXQUFXLFdBQVgsV0FBVzs7U0FBWCxXQUFXO3VGQUFYLFdBQVc7Y0FEdkIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOZ2JEYXRlQWRhcHRlciwgTmdiRGF0ZVN0cnVjdH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0ZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRldGltZS9kYXRlLWZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7Rm9ybWF0T3B0aW9uc30gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9mb3JtYXR0ZXIubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0ZUFkYXB0ZXIgZXh0ZW5kcyBOZ2JEYXRlQWRhcHRlcjxzdHJpbmc+IHtcblxuICAgIHVzZXJGb3JtYXQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgZm9ybWF0dGVyOiBEYXRlRm9ybWF0dGVyLFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldFVzZXJGb3JtYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJGb3JtYXQ7XG4gICAgfVxuXG4gICAgc2V0VXNlckZvcm1hdChmb3JtYXQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnVzZXJGb3JtYXQgPSBmb3JtYXQ7XG4gICAgfVxuXG4gICAgZnJvbU1vZGVsKHZhbHVlOiBzdHJpbmcgfCBudWxsKTogTmdiRGF0ZVN0cnVjdCB8IG51bGwge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZXIuZGF0ZUZvcm1hdFRvU3RydWN0KHZhbHVlLCB0aGlzLnVzZXJGb3JtYXQgfHwgJycpO1xuICAgIH1cblxuICAgIHRvTW9kZWwoZGF0ZTogTmdiRGF0ZVN0cnVjdCB8IG51bGwpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgICAgaWYgKCFkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gW2RhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXldLmpvaW4oJy0nKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtmcm9tRm9ybWF0OiAneXl5eS1NLWQnfSBhcyBGb3JtYXRPcHRpb25zO1xuICAgICAgICBpZih0aGlzLnVzZXJGb3JtYXQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudG9Gb3JtYXQgPSB0aGlzLnVzZXJGb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVyLnRvVXNlckZvcm1hdChkYXRlU3RyaW5nLCBvcHRpb25zKTtcbiAgICB9XG59XG4iXX0=