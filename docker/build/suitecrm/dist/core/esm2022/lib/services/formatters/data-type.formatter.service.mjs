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
import { NumberFormatter } from './number/number-formatter.service';
import { DatetimeFormatter } from './datetime/datetime-formatter.service';
import { CurrencyFormatter } from './currency/currency-formatter.service';
import { DateFormatter } from './datetime/date-formatter.service';
import { PhoneFormatter } from './phone/phone-formatter.service';
import * as i0 from "@angular/core";
import * as i1 from "./currency/currency-formatter.service";
import * as i2 from "./number/number-formatter.service";
import * as i3 from "./datetime/date-formatter.service";
import * as i4 from "./datetime/datetime-formatter.service";
import * as i5 from "./phone/phone-formatter.service";
class DataTypeFormatter {
    constructor(currencyFormatter, numberFormatter, dateFormatter, datetimeFormatter, phoneFormatter) {
        this.currencyFormatter = currencyFormatter;
        this.numberFormatter = numberFormatter;
        this.dateFormatter = dateFormatter;
        this.datetimeFormatter = datetimeFormatter;
        this.phoneFormatter = phoneFormatter;
        this.map = {};
        this.map.int = numberFormatter;
        this.map.float = numberFormatter;
        this.map.date = dateFormatter;
        this.map.datetime = datetimeFormatter;
        this.map.currency = currencyFormatter;
        this.map.phone = phoneFormatter;
    }
    toUserFormat(dataType, value, options) {
        if (!dataType) {
            return value;
        }
        const formatter = this.map[dataType];
        if (!formatter) {
            return value;
        }
        return formatter.toUserFormat(value, options);
    }
    toInternalFormat(dataType, value) {
        if (!dataType) {
            return value;
        }
        const formatter = this.map[dataType];
        if (!formatter) {
            return value;
        }
        return formatter.toInternalFormat(value);
    }
    static { this.ɵfac = function DataTypeFormatter_Factory(t) { return new (t || DataTypeFormatter)(i0.ɵɵinject(i1.CurrencyFormatter), i0.ɵɵinject(i2.NumberFormatter), i0.ɵɵinject(i3.DateFormatter), i0.ɵɵinject(i4.DatetimeFormatter), i0.ɵɵinject(i5.PhoneFormatter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DataTypeFormatter, factory: DataTypeFormatter.ɵfac, providedIn: 'root' }); }
}
export { DataTypeFormatter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTypeFormatter, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.CurrencyFormatter }, { type: i2.NumberFormatter }, { type: i3.DateFormatter }, { type: i4.DatetimeFormatter }, { type: i5.PhoneFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUV4RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7O0FBTS9ELE1BR2EsaUJBQWlCO0lBSTFCLFlBQ2MsaUJBQW9DLEVBQ3BDLGVBQWdDLEVBQ2hDLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxjQUE4QjtRQUo5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVA1QyxRQUFHLEdBQXFCLEVBQUUsQ0FBQztRQVN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7SUFDcEMsQ0FBQztJQUVELFlBQVksQ0FBQyxRQUFnQixFQUFFLEtBQWEsRUFBRSxPQUF1QjtRQUVqRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDWixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWdCLEVBQUUsS0FBYTtRQUU1QyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDWixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sU0FBUyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7a0ZBN0NRLGlCQUFpQjt1RUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGZCxNQUFNOztTQUVULGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TnVtYmVyRm9ybWF0dGVyfSBmcm9tICcuL251bWJlci9udW1iZXItZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtEYXRldGltZUZvcm1hdHRlcn0gZnJvbSAnLi9kYXRldGltZS9kYXRldGltZS1mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0Zvcm1hdE9wdGlvbnMsIEZvcm1hdHRlcn0gZnJvbSAnLi9mb3JtYXR0ZXIubW9kZWwnO1xuaW1wb3J0IHtDdXJyZW5jeUZvcm1hdHRlcn0gZnJvbSAnLi9jdXJyZW5jeS9jdXJyZW5jeS1mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0RhdGVGb3JtYXR0ZXJ9IGZyb20gJy4vZGF0ZXRpbWUvZGF0ZS1mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge1Bob25lRm9ybWF0dGVyfSBmcm9tICcuL3Bob25lL3Bob25lLWZvcm1hdHRlci5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBUeXBlRm9ybWF0dGVyTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBGb3JtYXR0ZXI7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVR5cGVGb3JtYXR0ZXIge1xuXG4gICAgbWFwOiBUeXBlRm9ybWF0dGVyTWFwID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGN1cnJlbmN5Rm9ybWF0dGVyOiBDdXJyZW5jeUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIG51bWJlckZvcm1hdHRlcjogTnVtYmVyRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgZGF0ZUZvcm1hdHRlcjogRGF0ZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIGRhdGV0aW1lRm9ybWF0dGVyOiBEYXRldGltZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIHBob25lRm9ybWF0dGVyOiBQaG9uZUZvcm1hdHRlcixcbiAgICApIHtcbiAgICAgICAgdGhpcy5tYXAuaW50ID0gbnVtYmVyRm9ybWF0dGVyO1xuICAgICAgICB0aGlzLm1hcC5mbG9hdCA9IG51bWJlckZvcm1hdHRlcjtcbiAgICAgICAgdGhpcy5tYXAuZGF0ZSA9IGRhdGVGb3JtYXR0ZXI7XG4gICAgICAgIHRoaXMubWFwLmRhdGV0aW1lID0gZGF0ZXRpbWVGb3JtYXR0ZXI7XG4gICAgICAgIHRoaXMubWFwLmN1cnJlbmN5ID0gY3VycmVuY3lGb3JtYXR0ZXI7XG4gICAgICAgIHRoaXMubWFwLnBob25lID0gcGhvbmVGb3JtYXR0ZXI7XG4gICAgfVxuXG4gICAgdG9Vc2VyRm9ybWF0KGRhdGFUeXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIG9wdGlvbnM/OiBGb3JtYXRPcHRpb25zKTogc3RyaW5nIHtcblxuICAgICAgICBpZiAoIWRhdGFUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSB0aGlzLm1hcFtkYXRhVHlwZV07XG4gICAgICAgIGlmICghZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybWF0dGVyLnRvVXNlckZvcm1hdCh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdG9JbnRlcm5hbEZvcm1hdChkYXRhVHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgICBpZiAoIWRhdGFUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSB0aGlzLm1hcFtkYXRhVHlwZV07XG4gICAgICAgIGlmICghZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybWF0dGVyLnRvSW50ZXJuYWxGb3JtYXQodmFsdWUpO1xuICAgIH1cbn1cbiJdfQ==