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
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { divide, multiply, round } from 'mathjs';
import { UserPreferenceStore } from '../../store/user-preference/user-preference.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/system-config/system-config.store";
import * as i2 from "../../store/user-preference/user-preference.store";
class CurrencyService {
    constructor(config, preferences) {
        this.config = config;
        this.preferences = preferences;
    }
    getFieldCurrencyValue(field, record) {
        const isBase = this.isBase(field);
        const currencyId = this.getCurrencyId(record);
        if (!isBase && currencyId !== null) {
            return field.value;
        }
        const value = parseFloat(field.value);
        if (!isFinite(value)) {
            return field.value;
        }
        const userCurrency = this.getUserCurrency();
        return this.baseToCurrency(userCurrency.id, value).toString();
    }
    baseToCurrency(currencyId, value) {
        const conversionRate = this.getConversionRate(currencyId);
        if (!isFinite(conversionRate)) {
            return value;
        }
        return this.round(multiply(value, conversionRate));
    }
    currencyToBase(currencyId, value) {
        const conversionRate = this.getConversionRate(currencyId);
        if (!isFinite(conversionRate)) {
            return value;
        }
        return this.round(divide(value, conversionRate));
    }
    round(value) {
        const precision = this.getPrecision();
        return round(value, precision);
    }
    getCurrencyId(record) {
        return record?.fields?.currency_id?.value ?? null;
    }
    isBase(field) {
        return field?.metadata?.isBaseCurrency ?? false;
    }
    getCurrency(id) {
        const currencies = this.config.getConfigValue('currencies');
        return currencies[id] ?? [];
    }
    getBaseCurrency() {
        return this.config.getConfigValue('currency');
    }
    getUserCurrency() {
        return this.preferences.getUserPreference('currency');
    }
    getPrecision() {
        const userPrecision = parseInt(this.preferences.getUserPreference('default_currency_significant_digits'));
        if (isFinite(userPrecision)) {
            return userPrecision;
        }
        const systemPrecision = parseInt(this.config.getConfigValue('default_currency_significant_digits'));
        if (isFinite(systemPrecision)) {
            return systemPrecision;
        }
        return 0;
    }
    getConversionRate(id) {
        const currency = this.getCurrency(id);
        return parseFloat(currency['conversion_rate']);
    }
    getCode(id) {
        return this.getCurrency(id).iso4217;
    }
    getSymbol(id) {
        return this.getCurrency(id).symbol;
    }
    static { this.ɵfac = function CurrencyService_Factory(t) { return new (t || CurrencyService)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.UserPreferenceStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CurrencyService, factory: CurrencyService.ɵfac, providedIn: 'root' }); }
}
export { CurrencyService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CurrencyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.UserPreferenceStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9jdXJyZW5jeS9jdXJyZW5jeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRWhGLE9BQU8sRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUMvQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtREFBbUQsQ0FBQzs7OztBQUV0RixNQUdhLGVBQWU7SUFFeEIsWUFDYyxNQUF5QixFQUN6QixXQUFnQztRQURoQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7SUFFOUMsQ0FBQztJQUVELHFCQUFxQixDQUFDLEtBQVksRUFBRSxNQUFjO1FBQzlDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5QyxJQUFJLENBQUMsTUFBTSxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDaEMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3RCO1FBRUQsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztTQUN0QjtRQUVELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FB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QUMsTUFBTSxDQUFDO0lBQ3ZDLENBQUM7Z0ZBdEdRLGVBQWU7dUVBQWYsZUFBZSxXQUFmLGVBQWUsbUJBRlosTUFBTTs7U0FFVCxlQUFlO3VGQUFmLGVBQWU7Y0FIM0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7RmllbGQsIFJlY29yZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7ZGl2aWRlLCBtdWx0aXBseSwgcm91bmR9IGZyb20gJ21hdGhqcyc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5U2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZzogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZVxuICAgICkge1xuICAgIH1cblxuICAgIGdldEZpZWxkQ3VycmVuY3lWYWx1ZShmaWVsZDogRmllbGQsIHJlY29yZDogUmVjb3JkKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaXNCYXNlID0gdGhpcy5pc0Jhc2UoZmllbGQpO1xuICAgICAgICBjb25zdCBjdXJyZW5jeUlkID0gdGhpcy5nZXRDdXJyZW5jeUlkKHJlY29yZCk7XG5cbiAgICAgICAgaWYgKCFpc0Jhc2UgJiYgY3VycmVuY3lJZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KGZpZWxkLnZhbHVlKTtcblxuICAgICAgICBpZiAoIWlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlckN1cnJlbmN5ID0gdGhpcy5nZXRVc2VyQ3VycmVuY3koKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlVG9DdXJyZW5jeSh1c2VyQ3VycmVuY3kuaWQsIHZhbHVlKS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGJhc2VUb0N1cnJlbmN5KGN1cnJlbmN5SWQ6IHN0cmluZywgdmFsdWU6IG51bWJlcik6IG51bWJlciB7XG5cbiAgICAgICAgY29uc3QgY29udmVyc2lvblJhdGUgPSB0aGlzLmdldENvbnZlcnNpb25SYXRlKGN1cnJlbmN5SWQpO1xuICAgICAgICBpZiAoIWlzRmluaXRlKGNvbnZlcnNpb25SYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucm91bmQobXVsdGlwbHkodmFsdWUsIGNvbnZlcnNpb25SYXRlKSk7XG4gICAgfVxuXG4gICAgY3VycmVuY3lUb0Jhc2UoY3VycmVuY3lJZDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcblxuICAgICAgICBjb25zdCBjb252ZXJzaW9uUmF0ZSA9IHRoaXMuZ2V0Q29udmVyc2lvblJhdGUoY3VycmVuY3lJZCk7XG4gICAgICAgIGlmICghaXNGaW5pdGUoY29udmVyc2lvblJhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yb3VuZChkaXZpZGUodmFsdWUsIGNvbnZlcnNpb25SYXRlKSk7XG4gICAgfVxuXG4gICAgcm91bmQodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHByZWNpc2lvbiA9IHRoaXMuZ2V0UHJlY2lzaW9uKCk7XG4gICAgICAgIHJldHVybiByb3VuZCh2YWx1ZSwgcHJlY2lzaW9uKTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW5jeUlkKHJlY29yZDogUmVjb3JkKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHJlY29yZD8uZmllbGRzPy5jdXJyZW5jeV9pZD8udmFsdWUgPz8gbnVsbDtcbiAgICB9XG5cbiAgICBpc0Jhc2UoZmllbGQ6IEZpZWxkKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmaWVsZD8ubWV0YWRhdGE/LmlzQmFzZUN1cnJlbmN5ID8/IGZhbHNlO1xuICAgIH1cblxuICAgIGdldEN1cnJlbmN5KGlkOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBjb25zdCBjdXJyZW5jaWVzID0gdGhpcy5jb25maWcuZ2V0Q29uZmlnVmFsdWUoJ2N1cnJlbmNpZXMnKTtcblxuICAgICAgICByZXR1cm4gY3VycmVuY2llc1tpZF0gPz8gW107XG4gICAgfVxuXG4gICAgZ2V0QmFzZUN1cnJlbmN5KCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5nZXRDb25maWdWYWx1ZSgnY3VycmVuY3knKTtcbiAgICB9XG5cbiAgICBnZXRVc2VyQ3VycmVuY3koKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ2N1cnJlbmN5Jyk7XG4gICAgfVxuXG4gICAgZ2V0UHJlY2lzaW9uKCk6IG51bWJlciB7XG5cbiAgICAgICAgY29uc3QgdXNlclByZWNpc2lvbiA9IHBhcnNlSW50KHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ2RlZmF1bHRfY3VycmVuY3lfc2lnbmlmaWNhbnRfZGlnaXRzJykpO1xuXG4gICAgICAgIGlmIChpc0Zpbml0ZSh1c2VyUHJlY2lzaW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJQcmVjaXNpb247XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzeXN0ZW1QcmVjaXNpb24gPSBwYXJzZUludCh0aGlzLmNvbmZpZy5nZXRDb25maWdWYWx1ZSgnZGVmYXVsdF9jdXJyZW5jeV9zaWduaWZpY2FudF9kaWdpdHMnKSk7XG5cbiAgICAgICAgaWYgKGlzRmluaXRlKHN5c3RlbVByZWNpc2lvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBzeXN0ZW1QcmVjaXNpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBnZXRDb252ZXJzaW9uUmF0ZShpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgY3VycmVuY3kgPSB0aGlzLmdldEN1cnJlbmN5KGlkKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoY3VycmVuY3lbJ2NvbnZlcnNpb25fcmF0ZSddKTtcbiAgICB9XG5cbiAgICBnZXRDb2RlKGlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW5jeShpZCkuaXNvNDIxNztcbiAgICB9XG5cbiAgICBnZXRTeW1ib2woaWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEN1cnJlbmN5KGlkKS5zeW1ib2w7XG4gICAgfVxufVxuIl19