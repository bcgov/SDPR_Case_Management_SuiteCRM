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
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { UserPreferenceStore } from '../../../store/user-preference/user-preference.store';
import { formatCurrency, formatNumber } from '@angular/common';
import { NumberFormatter } from '../number/number-formatter.service';
import { isVoid } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/user-preference/user-preference.store";
import * as i2 from "../number/number-formatter.service";
class CurrencyFormatter {
    constructor(preferences, numberFormatter, locale) {
        this.preferences = preferences;
        this.numberFormatter = numberFormatter;
        this.locale = locale;
    }
    toUserFormat(value, options = null) {
        if (isVoid(value) || value === '') {
            return '';
        }
        const symbol = (options && options.symbol) || this.getSymbol();
        const code = (options && options.code) || this.getCode();
        let digits = null;
        if (options && options.digits !== null && isFinite(options.digits)) {
            digits = options.digits;
        }
        const digitsInfo = this.getDigitsInfo(digits);
        let formatted;
        if (options && options.mode === 'edit') {
            formatted = formatNumber(Number(value), this.locale, digitsInfo);
            return this.replaceSeparators(formatted);
        }
        formatted = formatCurrency(Number(value), this.locale, symbol, code, digitsInfo);
        return this.replaceSeparators(formatted);
    }
    toInternalFormat(value) {
        if (!value) {
            return '';
        }
        const transformed = value.replace(this.getSymbol(), '');
        return this.numberFormatter.toInternalFormat(transformed);
    }
    getCurrencyFormat() {
        const currencyFormat = this.preferences.getUserPreference('currency');
        if (currencyFormat) {
            return currencyFormat;
        }
        return this.getDefaultFormat();
    }
    getDefaultFormat() {
        return {
            iso4217: 'USD',
            name: 'US Dollars',
            symbol: '$'
        };
    }
    getCode() {
        return this.getCurrencyFormat().iso4217;
    }
    getSymbol() {
        return this.getCurrencyFormat().symbol;
    }
    getDigits() {
        const digits = this.preferences.getUserPreference('default_currency_significant_digits');
        if (digits) {
            return digits;
        }
        return 2;
    }
    getDigitsInfo(definedDigits) {
        let digitInfo = '1.2-2';
        let digits = this.getDigits();
        if (definedDigits !== null && isFinite(definedDigits)) {
            digits = definedDigits;
        }
        if (digits !== null && isFinite(digits)) {
            if (digits < 1) {
                digitInfo = '1.0-0';
            }
            else {
                digitInfo = `1.${digits}-${digits}`;
            }
        }
        return digitInfo;
    }
    replaceSeparators(transformed) {
        return this.numberFormatter.replaceSeparators(transformed);
    }
    static { this.ɵfac = function CurrencyFormatter_Factory(t) { return new (t || CurrencyFormatter)(i0.ɵɵinject(i1.UserPreferenceStore), i0.ɵɵinject(i2.NumberFormatter), i0.ɵɵinject(LOCALE_ID)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CurrencyFormatter, factory: CurrencyFormatter.ɵfac, providedIn: 'root' }); }
}
export { CurrencyFormatter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CurrencyFormatter, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.UserPreferenceStore }, { type: i2.NumberFormatter }, { type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3ktZm9ybWF0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvZm9ybWF0dGVycy9jdXJyZW5jeS9jdXJyZW5jeS1mb3JtYXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxjQUFjLEVBQUUsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBRW5FLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxRQUFRLENBQUM7Ozs7QUFROUIsTUFHYSxpQkFBaUI7SUFFMUIsWUFDYyxXQUFnQyxFQUNoQyxlQUFnQyxFQUNoQixNQUFjO1FBRjlCLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUNoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUU1QyxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWEsRUFBRSxVQUF5QixJQUFJO1FBRXJELElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDL0IsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUVELE1BQU0sTUFBTSxHQUFHLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJ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QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsV0FBbUI7UUFDakMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7a0ZBckdRLGlCQUFpQixvRkFLZCxTQUFTO3VFQUxaLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmQsTUFBTTs7U0FFVCxpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7O3NCQU1RLE1BQU07dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIExPQ0FMRV9JRH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtmb3JtYXRDdXJyZW5jeSwgZm9ybWF0TnVtYmVyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOdW1iZXJGb3JtYXR0ZXJ9IGZyb20gJy4uL251bWJlci9udW1iZXItZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtGb3JtYXRPcHRpb25zLCBGb3JtYXR0ZXJ9IGZyb20gJy4uL2Zvcm1hdHRlci5tb2RlbCc7XG5pbXBvcnQge2lzVm9pZH0gZnJvbSAnY29tbW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBDdXJyZW5jeUZvcm1hdCB7XG4gICAgaXNvNDIxNzogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzeW1ib2w6IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeUZvcm1hdHRlciBpbXBsZW1lbnRzIEZvcm1hdHRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbnVtYmVyRm9ybWF0dGVyOiBOdW1iZXJGb3JtYXR0ZXIsXG4gICAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmdcbiAgICApIHtcbiAgICB9XG5cbiAgICB0b1VzZXJGb3JtYXQodmFsdWU6IHN0cmluZywgb3B0aW9uczogRm9ybWF0T3B0aW9ucyA9IG51bGwpOiBzdHJpbmcge1xuXG4gICAgICAgIGlmIChpc1ZvaWQodmFsdWUpIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3ltYm9sID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5zeW1ib2wpIHx8IHRoaXMuZ2V0U3ltYm9sKCk7XG4gICAgICAgIGNvbnN0IGNvZGUgPSAob3B0aW9ucyAmJiBvcHRpb25zLmNvZGUpIHx8IHRoaXMuZ2V0Q29kZSgpO1xuICAgICAgICBsZXQgZGlnaXRzID0gbnVsbDtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kaWdpdHMgIT09IG51bGwgJiYgaXNGaW5pdGUob3B0aW9ucy5kaWdpdHMpKSB7XG4gICAgICAgICAgICBkaWdpdHMgPSBvcHRpb25zLmRpZ2l0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpZ2l0c0luZm8gPSB0aGlzLmdldERpZ2l0c0luZm8oZGlnaXRzKTtcbiAgICAgICAgbGV0IGZvcm1hdHRlZDogc3RyaW5nO1xuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubW9kZSA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSBmb3JtYXROdW1iZXIoTnVtYmVyKHZhbHVlKSwgdGhpcy5sb2NhbGUsIGRpZ2l0c0luZm8pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZVNlcGFyYXRvcnMoZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdHRlZCA9IGZvcm1hdEN1cnJlbmN5KE51bWJlcih2YWx1ZSksIHRoaXMubG9jYWxlLCBzeW1ib2wsIGNvZGUsIGRpZ2l0c0luZm8pO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlU2VwYXJhdG9ycyhmb3JtYXR0ZWQpO1xuICAgIH1cblxuICAgIHRvSW50ZXJuYWxGb3JtYXQodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkID0gdmFsdWUucmVwbGFjZSh0aGlzLmdldFN5bWJvbCgpLCAnJyk7XG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlckZvcm1hdHRlci50b0ludGVybmFsRm9ybWF0KHRyYW5zZm9ybWVkKTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW5jeUZvcm1hdCgpOiBDdXJyZW5jeUZvcm1hdCB7XG4gICAgICAgIGNvbnN0IGN1cnJlbmN5Rm9ybWF0ID0gdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgnY3VycmVuY3knKTtcblxuICAgICAgICBpZiAoY3VycmVuY3lGb3JtYXQpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeUZvcm1hdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRGb3JtYXQoKTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0Rm9ybWF0KCk6IEN1cnJlbmN5Rm9ybWF0IHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNvNDIxNzogJ1VTRCcsXG4gICAgICAgICAgICBuYW1lOiAnVVMgRG9sbGFycycsXG4gICAgICAgICAgICBzeW1ib2w6ICckJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldENvZGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVuY3lGb3JtYXQoKS5pc280MjE3O1xuICAgIH1cblxuICAgIGdldFN5bWJvbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW5jeUZvcm1hdCgpLnN5bWJvbDtcbiAgICB9XG5cbiAgICBnZXREaWdpdHMoKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgZGlnaXRzID0gdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgnZGVmYXVsdF9jdXJyZW5jeV9zaWduaWZpY2FudF9kaWdpdHMnKTtcblxuICAgICAgICBpZiAoZGlnaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gZGlnaXRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDI7XG4gICAgfVxuXG4gICAgZ2V0RGlnaXRzSW5mbyhkZWZpbmVkRGlnaXRzPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGRpZ2l0SW5mbyA9ICcxLjItMic7XG4gICAgICAgIGxldCBkaWdpdHMgPSB0aGlzLmdldERpZ2l0cygpO1xuXG4gICAgICAgIGlmIChkZWZpbmVkRGlnaXRzICE9PSBudWxsICYmIGlzRmluaXRlKGRlZmluZWREaWdpdHMpKSB7XG4gICAgICAgICAgICBkaWdpdHMgPSBkZWZpbmVkRGlnaXRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpZ2l0cyAhPT0gbnVsbCAmJiBpc0Zpbml0ZShkaWdpdHMpKSB7XG4gICAgICAgICAgICBpZiAoZGlnaXRzIDwgMSkge1xuICAgICAgICAgICAgICAgIGRpZ2l0SW5mbyA9ICcxLjAtMCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpZ2l0SW5mbyA9IGAxLiR7ZGlnaXRzfS0ke2RpZ2l0c31gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpZ2l0SW5mbztcbiAgICB9XG5cbiAgICByZXBsYWNlU2VwYXJhdG9ycyh0cmFuc2Zvcm1lZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyRm9ybWF0dGVyLnJlcGxhY2VTZXBhcmF0b3JzKHRyYW5zZm9ybWVkKTtcbiAgICB9XG59XG4iXX0=