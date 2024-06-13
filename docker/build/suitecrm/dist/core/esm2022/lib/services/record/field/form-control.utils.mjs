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
import * as i0 from "@angular/core";
class FormControlUtils {
    getTrimmedInputValue(inputValue) {
        // Handle the cases, when input values are not string e.g. multienums: String[]
        // Process the input, only when it's a string else return as it is
        if (typeof inputValue !== 'string') {
            return inputValue;
        }
        return inputValue.trim();
    }
    isEmptyInputValue(inputValue) {
        // Handle the cases, when input value is an string, array, objects or any other type
        return inputValue == null
            || typeof inputValue === 'undefined'
            || inputValue === ''
            || inputValue.length === 0;
    }
    isEmptyTrimmedInputValue(inputValue) {
        return this.isEmptyInputValue(this.getTrimmedInputValue(inputValue));
    }
    isEmptyBooleanInputValue(inputValue) {
        return this.isEmptyInputValue(inputValue) || inputValue === 'false' || inputValue === false || inputValue === '';
    }
    static { this.ɵfac = function FormControlUtils_Factory(t) { return new (t || FormControlUtils)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FormControlUtils, factory: FormControlUtils.ɵfac, providedIn: 'root' }); }
}
export { FormControlUtils };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormControlUtils, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLnV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3JlY29yZC9maWVsZC9mb3JtLWNvbnRyb2wudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBRXpDLE1BSWEsZ0JBQWdCO0lBRXpCLG9CQUFvQixDQUFDLFVBQWU7UUFDaEMsK0VBQStFO1FBQy9FLGtFQUFrRTtRQUNsRSxJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsRUFBRTtZQUNoQyxPQUFPLFVBQVUsQ0FBQztTQUNyQjtRQUNELE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxVQUFlO1FBQzdCLG9GQUFvRjtRQUNwRixPQUFPLFVBQVUsSUFBSSxJQUFJO2VBQ2xCLE9BQU8sVUFBVSxLQUFLLFdBQVc7ZUFDakMsVUFBVSxLQUFLLEVBQUU7ZUFDakIsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHdCQUF3QixDQUFDLFVBQWU7UUFDcEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELHdCQUF3QixDQUFDLFVBQWU7UUFDcEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxLQUFLLE9BQU8sSUFBSSxVQUFVLEtBQUssS0FBSyxJQUFJLFVBQVUsS0FBSyxFQUFFLENBQUM7SUFDckgsQ0FBQztpRkF6QlEsZ0JBQWdCO3VFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUhiLE1BQU07O1NBR1QsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FKNUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xVdGlscyB7XG5cbiAgICBnZXRUcmltbWVkSW5wdXRWYWx1ZShpbnB1dFZhbHVlOiBhbnkpOiBhbnkge1xuICAgICAgICAvLyBIYW5kbGUgdGhlIGNhc2VzLCB3aGVuIGlucHV0IHZhbHVlcyBhcmUgbm90IHN0cmluZyBlLmcuIG11bHRpZW51bXM6IFN0cmluZ1tdXG4gICAgICAgIC8vIFByb2Nlc3MgdGhlIGlucHV0LCBvbmx5IHdoZW4gaXQncyBhIHN0cmluZyBlbHNlIHJldHVybiBhcyBpdCBpc1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0VmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZS50cmltKCk7XG4gICAgfVxuXG4gICAgaXNFbXB0eUlucHV0VmFsdWUoaW5wdXRWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZXMsIHdoZW4gaW5wdXQgdmFsdWUgaXMgYW4gc3RyaW5nLCBhcnJheSwgb2JqZWN0cyBvciBhbnkgb3RoZXIgdHlwZVxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZSA9PSBudWxsXG4gICAgICAgICAgICB8fCB0eXBlb2YgaW5wdXRWYWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgIHx8IGlucHV0VmFsdWUgPT09ICcnXG4gICAgICAgICAgICB8fCBpbnB1dFZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cbiAgICBpc0VtcHR5VHJpbW1lZElucHV0VmFsdWUoaW5wdXRWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRW1wdHlJbnB1dFZhbHVlKHRoaXMuZ2V0VHJpbW1lZElucHV0VmFsdWUoaW5wdXRWYWx1ZSkpO1xuICAgIH1cblxuICAgIGlzRW1wdHlCb29sZWFuSW5wdXRWYWx1ZShpbnB1dFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNFbXB0eUlucHV0VmFsdWUoaW5wdXRWYWx1ZSkgfHwgaW5wdXRWYWx1ZSA9PT0gJ2ZhbHNlJyB8fCBpbnB1dFZhbHVlID09PSBmYWxzZSB8fCBpbnB1dFZhbHVlID09PSAnJztcbiAgICB9XG59XG4iXX0=