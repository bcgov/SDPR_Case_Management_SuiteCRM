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
import { formatNumber } from '@angular/common';
import { isFalse, isVoid } from 'common';
import { FormControlUtils } from '../../record/field/form-control.utils';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/user-preference/user-preference.store";
import * as i2 from "../../record/field/form-control.utils";
class NumberFormatter {
    constructor(preferences, formUtils, locale) {
        this.preferences = preferences;
        this.formUtils = formUtils;
        this.locale = locale;
    }
    toUserFormat(value, options) {
        if (isVoid(value) || value === '') {
            return '';
        }
        if (isFalse(options?.metadata?.format ?? true)) {
            return value;
        }
        const formatted = formatNumber(Number(value), this.locale);
        return this.replaceSeparators(formatted);
    }
    toInternalFormat(value) {
        if (!value) {
            return value;
        }
        const decimalSymbol = this.getDecimalsSymbol() || '.';
        const groupSymbol = this.getGroupSymbol() || ',';
        let decimalSymbolRegex = new RegExp(decimalSymbol, 'g');
        if (decimalSymbol === '.') {
            decimalSymbolRegex = new RegExp('\\.', 'g');
        }
        let groupSymbolRegex = new RegExp(groupSymbol, 'g');
        if (groupSymbol === '.') {
            groupSymbolRegex = new RegExp('\\.', 'g');
        }
        value = value.replace(groupSymbolRegex, 'group_separator');
        value = value.replace(decimalSymbolRegex, 'decimal_separator');
        value = value.replace(/decimal_separator/g, '.');
        value = value.replace(/group_separator/g, '');
        return value;
    }
    getFloatUserFormatPattern() {
        const group = this.getGroupSymbol();
        const decimals = this.getDecimalsSymbol();
        let pattern = '^-?(';
        pattern += '(\\d{1,3}(\\' + group + '\\d{3})*(\\' + decimals + '\\d+)?)|';
        pattern += '\\d*|';
        pattern += '(\\d+(\\' + decimals + '\\d+)?)|';
        pattern += '(\\d+(\\.\\d+)?)';
        pattern += ')$';
        return pattern;
    }
    getIntUserFormatPattern() {
        const group = this.getGroupSymbol();
        let pattern = '^-?(';
        pattern += '(\\d{1,3}(\\' + group + '\\d{3})*)|';
        pattern += '\\d*';
        pattern += ')$';
        return pattern;
    }
    getGroupSymbol() {
        const separator = this.preferences.getUserPreference('num_grp_sep');
        if (separator) {
            return separator;
        }
        return ',';
    }
    getDecimalsSymbol() {
        const separator = this.preferences.getUserPreference('dec_sep');
        if (separator) {
            return separator;
        }
        return '.';
    }
    replaceSeparators(transformed) {
        if (!transformed) {
            return transformed;
        }
        transformed = transformed.replace(/,/g, 'group_separator');
        transformed = transformed.replace(/\./g, 'decimal_separator');
        const decimalSymbol = this.getDecimalsSymbol() || '.';
        const groupSymbol = this.getGroupSymbol() || ',';
        transformed = transformed.replace(/decimal_separator/g, decimalSymbol);
        transformed = transformed.replace(/group_separator/g, groupSymbol);
        return transformed;
    }
    validateIntUserFormat(inputValue) {
        const trimmedInputValue = this.formUtils.getTrimmedInputValue(inputValue);
        if (this.formUtils.isEmptyInputValue(trimmedInputValue)) {
            return false;
        }
        const regex = new RegExp(this.getIntUserFormatPattern());
        if (regex.test(trimmedInputValue)) {
            return false;
        }
    }
    validateFloatUserFormat(inputValue) {
        const trimmedInputValue = this.formUtils.getTrimmedInputValue(inputValue);
        if (this.formUtils.isEmptyInputValue(trimmedInputValue)) {
            return false;
        }
        const regex = new RegExp(this.getFloatUserFormatPattern());
        return !regex.test(trimmedInputValue);
    }
    static { this.ɵfac = function NumberFormatter_Factory(t) { return new (t || NumberFormatter)(i0.ɵɵinject(i1.UserPreferenceStore), i0.ɵɵinject(i2.FormControlUtils), i0.ɵɵinject(LOCALE_ID)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NumberFormatter, factory: NumberFormatter.ɵfac, providedIn: 'root' }); }
}
export { NumberFormatter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberFormatter, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.UserPreferenceStore }, { type: i2.FormControlUtils }, { type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZvcm1hdHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2Zvcm1hdHRlcnMvbnVtYmVyL251bWJlci1mb3JtYXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQzs7OztBQUV2RSxNQUdhLGVBQWU7SUFFeEIsWUFDYyxXQUFnQyxFQUNoQyxTQUEyQixFQUNYLE1BQWM7UUFGOUIsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQ1gsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUU1QyxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWEsRUFBRyxPQUF1QjtRQUVoRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQy9CLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxJQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtZQUMzQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1B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LEVBQUU7WUFDckQsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFFMUMsQ0FBQztnRkExSVEsZUFBZSxxRkFLWixTQUFTO3VFQUxaLGVBQWUsV0FBZixlQUFlLG1CQUZaLE1BQU07O1NBRVQsZUFBZTt1RkFBZixlQUFlO2NBSDNCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7c0JBTVEsTUFBTTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgTE9DQUxFX0lEfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5pbXBvcnQge2Zvcm1hdE51bWJlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Rm9ybWF0T3B0aW9ucywgRm9ybWF0dGVyfSBmcm9tICcuLi9mb3JtYXR0ZXIubW9kZWwnO1xuaW1wb3J0IHtpc0ZhbHNlLCBpc1ZvaWR9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0Zvcm1Db250cm9sVXRpbHN9IGZyb20gJy4uLy4uL3JlY29yZC9maWVsZC9mb3JtLWNvbnRyb2wudXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlckZvcm1hdHRlciBpbXBsZW1lbnRzIEZvcm1hdHRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgZm9ybVV0aWxzOiBGb3JtQ29udHJvbFV0aWxzLFxuICAgICAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nXG4gICAgKSB7XG4gICAgfVxuXG4gICAgdG9Vc2VyRm9ybWF0KHZhbHVlOiBzdHJpbmcsICBvcHRpb25zPzogRm9ybWF0T3B0aW9ucyk6IHN0cmluZyB7XG5cbiAgICAgICAgaWYgKGlzVm9pZCh2YWx1ZSkgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpc0ZhbHNlKG9wdGlvbnM/Lm1ldGFkYXRhPy5mb3JtYXQgPz8gdHJ1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdE51bWJlcihOdW1iZXIodmFsdWUpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VTZXBhcmF0b3JzKGZvcm1hdHRlZCk7XG4gICAgfVxuXG4gICAgdG9JbnRlcm5hbEZvcm1hdCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWNpbWFsU3ltYm9sID0gdGhpcy5nZXREZWNpbWFsc1N5bWJvbCgpIHx8ICcuJztcbiAgICAgICAgY29uc3QgZ3JvdXBTeW1ib2wgPSB0aGlzLmdldEdyb3VwU3ltYm9sKCkgfHwgJywnO1xuXG4gICAgICAgIGxldCBkZWNpbWFsU3ltYm9sUmVnZXggPSBuZXcgUmVnRXhwKGRlY2ltYWxTeW1ib2wsICdnJyk7XG4gICAgICAgIGlmIChkZWNpbWFsU3ltYm9sID09PSAnLicpIHtcbiAgICAgICAgICAgIGRlY2ltYWxTeW1ib2xSZWdleCA9IG5ldyBSZWdFeHAoJ1xcXFwuJywgJ2cnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBncm91cFN5bWJvbFJlZ2V4ID0gbmV3IFJlZ0V4cChncm91cFN5bWJvbCwgJ2cnKTtcbiAgICAgICAgaWYgKGdyb3VwU3ltYm9sID09PSAnLicpIHtcbiAgICAgICAgICAgIGdyb3VwU3ltYm9sUmVnZXggPSBuZXcgUmVnRXhwKCdcXFxcLicsICdnJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoZ3JvdXBTeW1ib2xSZWdleCwgJ2dyb3VwX3NlcGFyYXRvcicpO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoZGVjaW1hbFN5bWJvbFJlZ2V4LCAnZGVjaW1hbF9zZXBhcmF0b3InKTtcblxuXG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvZGVjaW1hbF9zZXBhcmF0b3IvZywgJy4nKTtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9ncm91cF9zZXBhcmF0b3IvZywgJycpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXRGbG9hdFVzZXJGb3JtYXRQYXR0ZXJuKCk6IHN0cmluZyB7XG5cbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLmdldEdyb3VwU3ltYm9sKCk7XG4gICAgICAgIGNvbnN0IGRlY2ltYWxzID0gdGhpcy5nZXREZWNpbWFsc1N5bWJvbCgpO1xuXG4gICAgICAgIGxldCBwYXR0ZXJuID0gJ14tPygnO1xuICAgICAgICBwYXR0ZXJuICs9ICcoXFxcXGR7MSwzfShcXFxcJyArIGdyb3VwICsgJ1xcXFxkezN9KSooXFxcXCcgKyBkZWNpbWFscyArICdcXFxcZCspPyl8JztcbiAgICAgICAgcGF0dGVybiArPSAnXFxcXGQqfCc7XG4gICAgICAgIHBhdHRlcm4gKz0gJyhcXFxcZCsoXFxcXCcgKyBkZWNpbWFscyArICdcXFxcZCspPyl8JztcbiAgICAgICAgcGF0dGVybiArPSAnKFxcXFxkKyhcXFxcLlxcXFxkKyk/KSc7XG4gICAgICAgIHBhdHRlcm4gKz0gJykkJztcbiAgICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuXG4gICAgZ2V0SW50VXNlckZvcm1hdFBhdHRlcm4oKTogc3RyaW5nIHtcblxuICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuZ2V0R3JvdXBTeW1ib2woKTtcblxuICAgICAgICBsZXQgcGF0dGVybiA9ICdeLT8oJztcbiAgICAgICAgcGF0dGVybiArPSAnKFxcXFxkezEsM30oXFxcXCcgKyBncm91cCArICdcXFxcZHszfSkqKXwnO1xuICAgICAgICBwYXR0ZXJuICs9ICdcXFxcZConO1xuICAgICAgICBwYXR0ZXJuICs9ICcpJCc7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cblxuICAgIGdldEdyb3VwU3ltYm9sKCk6IHN0cmluZyB7XG5cbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgnbnVtX2dycF9zZXAnKTtcblxuICAgICAgICBpZiAoc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gJywnO1xuICAgIH1cblxuICAgIGdldERlY2ltYWxzU3ltYm9sKCk6IHN0cmluZyB7XG5cbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgnZGVjX3NlcCcpO1xuXG4gICAgICAgIGlmIChzZXBhcmF0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXBhcmF0b3I7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJy4nO1xuICAgIH1cblxuICAgIHJlcGxhY2VTZXBhcmF0b3JzKHRyYW5zZm9ybWVkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRyYW5zZm9ybWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0cmFuc2Zvcm1lZCA9IHRyYW5zZm9ybWVkLnJlcGxhY2UoLywvZywgJ2dyb3VwX3NlcGFyYXRvcicpO1xuICAgICAgICB0cmFuc2Zvcm1lZCA9IHRyYW5zZm9ybWVkLnJlcGxhY2UoL1xcLi9nLCAnZGVjaW1hbF9zZXBhcmF0b3InKTtcblxuICAgICAgICBjb25zdCBkZWNpbWFsU3ltYm9sID0gdGhpcy5nZXREZWNpbWFsc1N5bWJvbCgpIHx8ICcuJztcbiAgICAgICAgY29uc3QgZ3JvdXBTeW1ib2wgPSB0aGlzLmdldEdyb3VwU3ltYm9sKCkgfHwgJywnO1xuXG4gICAgICAgIHRyYW5zZm9ybWVkID0gdHJhbnNmb3JtZWQucmVwbGFjZSgvZGVjaW1hbF9zZXBhcmF0b3IvZywgZGVjaW1hbFN5bWJvbCk7XG4gICAgICAgIHRyYW5zZm9ybWVkID0gdHJhbnNmb3JtZWQucmVwbGFjZSgvZ3JvdXBfc2VwYXJhdG9yL2csIGdyb3VwU3ltYm9sKTtcblxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtZWQ7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVJbnRVc2VyRm9ybWF0KGlucHV0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGNvbnN0IHRyaW1tZWRJbnB1dFZhbHVlID0gdGhpcy5mb3JtVXRpbHMuZ2V0VHJpbW1lZElucHV0VmFsdWUoaW5wdXRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmZvcm1VdGlscy5pc0VtcHR5SW5wdXRWYWx1ZSh0cmltbWVkSW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAodGhpcy5nZXRJbnRVc2VyRm9ybWF0UGF0dGVybigpKTtcbiAgICAgICAgaWYgKHJlZ2V4LnRlc3QodHJpbW1lZElucHV0VmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZUZsb2F0VXNlckZvcm1hdChpbnB1dFZhbHVlOiBhbnkpOiBib29sZWFuIHtcblxuICAgICAgICBjb25zdCB0cmltbWVkSW5wdXRWYWx1ZSA9IHRoaXMuZm9ybVV0aWxzLmdldFRyaW1tZWRJbnB1dFZhbHVlKGlucHV0VmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5mb3JtVXRpbHMuaXNFbXB0eUlucHV0VmFsdWUodHJpbW1lZElucHV0VmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHRoaXMuZ2V0RmxvYXRVc2VyRm9ybWF0UGF0dGVybigpKTtcbiAgICAgICAgcmV0dXJuICFyZWdleC50ZXN0KHRyaW1tZWRJbnB1dFZhbHVlKTtcblxuICAgIH1cblxufVxuIl19