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
import { isTrue } from 'common';
import { FormControlUtils } from '../../field/form-control.utils';
import * as i0 from "@angular/core";
import * as i1 from "../../field/form-control.utils";
export const requiredValidator = (utils) => ((control) => {
    if (utils.isEmptyTrimmedInputValue(control.value)) {
        return {
            required: {
                required: true,
                message: {
                    labelKey: 'LBL_VALIDATION_ERROR_REQUIRED',
                    context: {
                        value: control.value
                    }
                }
            }
        };
    }
    return null;
});
export const booleanRequiredValidator = (utils) => ((control) => {
    if (utils.isEmptyBooleanInputValue(control.value)) {
        return {
            required: {
                required: true,
                message: {
                    labelKey: 'LBL_VALIDATION_ERROR_REQUIRED',
                    context: {
                        value: control.value
                    }
                }
            }
        };
    }
    return null;
});
class RequiredValidator {
    constructor(utils) {
        this.utils = utils;
    }
    applies(record, viewField) {
        if (!viewField || !viewField.fieldDefinition) {
            return false;
        }
        return isTrue(viewField.fieldDefinition.required);
    }
    getValidator(viewField) {
        if (viewField.type === 'boolean') {
            return [booleanRequiredValidator(this.utils)];
        }
        return [requiredValidator(this.utils)];
    }
    static { this.ɵfac = function RequiredValidator_Factory(t) { return new (t || RequiredValidator)(i0.ɵɵinject(i1.FormControlUtils)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RequiredValidator, factory: RequiredValidator.ɵfac, providedIn: 'root' }); }
}
export { RequiredValidator };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RequiredValidator, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.FormControlUtils }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3JlY29yZC92YWxpZGF0aW9uL3ZhbGlkYXRvcnMvcmVxdWlyZWQudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3pDLE9BQU8sRUFBQyxNQUFNLEVBQVMsTUFBTSxRQUFRLENBQUM7QUFHdEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7OztBQUVoRSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEtBQXVCLEVBQXVCLEVBQUUsQ0FBQyxDQUMvRSxDQUFDLE9BQXdCLEVBQW1DLEVBQUU7SUFFMUQsSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQy9DLE9BQU87WUFDSCxRQUFRLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLElBQUk7Z0JBQ2QsT0FBTyxFQUFFO29CQUNMLFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLE9BQU8sRUFBRTt3QkFDTCxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7cUJBQ3ZCO2lCQUNKO2FBQ0o7U0FDSixDQUFDO0tBQ0w7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQ0osQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLENBQUMsS0FBdUIsRUFBdUIsRUFBRSxDQUFDLENBQ3RGLENBQUMsT0FBd0IsRUFBbUMsRUFBRTtJQUUxRCxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDL0MsT0FBTztZQUNILFFBQVEsRUFBRTtnQkFDTixRQUFRLEVBQUUsSUFBSTtnQkFDZCxPQUFPLEVBQUU7b0JBQ0wsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsT0FBTyxFQUFFO3dCQUNMLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztxQkFDdkI7aUJBQ0o7YUFDSjtTQUNKLENBQUM7S0FDTDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FDSixDQUFDO0FBRUYsTUFHYSxpQkFBaUI7SUFFMUIsWUFBc0IsS0FBdUI7UUFBdkIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7SUFDN0MsQ0FBQztJQUVELE9BQU8sQ0FBQyxNQUFjLEVBQUUsU0FBOEI7UUFDbEQsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDMUMsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxZQUFZLENBQUMsU0FBOEI7UUFFdkMsSUFBRyxTQUFTLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBQztZQUM1QixPQUFPLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDakQ7UUFFRCxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztrRkFwQlEsaUJBQWlCO3VFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZkLE1BQU07O1NBRVQsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWYWxpZGF0b3JJbnRlcmZhY2V9IGZyb20gJy4uL3ZhbGlkYXRvci5JbnRlcmZhY2UnO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7aXNUcnVlLCBSZWNvcmR9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1ZpZXdGaWVsZERlZmluaXRpb259IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1N0YW5kYXJkVmFsaWRhdGlvbkVycm9ycywgU3RhbmRhcmRWYWxpZGF0b3JGbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7Rm9ybUNvbnRyb2xVdGlsc30gZnJvbSAnLi4vLi4vZmllbGQvZm9ybS1jb250cm9sLnV0aWxzJztcblxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkVmFsaWRhdG9yID0gKHV0aWxzOiBGb3JtQ29udHJvbFV0aWxzKTogU3RhbmRhcmRWYWxpZGF0b3JGbiA9PiAoXG4gICAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFN0YW5kYXJkVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuXG4gICAgICAgIGlmICh1dGlscy5pc0VtcHR5VHJpbW1lZElucHV0VmFsdWUoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX1ZBTElEQVRJT05fRVJST1JfUkVRVUlSRUQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb250cm9sLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGJvb2xlYW5SZXF1aXJlZFZhbGlkYXRvciA9ICh1dGlsczogRm9ybUNvbnRyb2xVdGlscyk6IFN0YW5kYXJkVmFsaWRhdG9yRm4gPT4gKFxuICAgIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBTdGFuZGFyZFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcblxuICAgICAgICBpZiAodXRpbHMuaXNFbXB0eUJvb2xlYW5JbnB1dFZhbHVlKGNvbnRyb2wudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9WQUxJREFUSU9OX0VSUk9SX1JFUVVJUkVEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29udHJvbC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbik7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVxdWlyZWRWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3JJbnRlcmZhY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHV0aWxzOiBGb3JtQ29udHJvbFV0aWxzKSB7XG4gICAgfVxuXG4gICAgYXBwbGllcyhyZWNvcmQ6IFJlY29yZCwgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdmlld0ZpZWxkIHx8ICF2aWV3RmllbGQuZmllbGREZWZpbml0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNUcnVlKHZpZXdGaWVsZC5maWVsZERlZmluaXRpb24ucmVxdWlyZWQpO1xuICAgIH1cblxuICAgIGdldFZhbGlkYXRvcih2aWV3RmllbGQ6IFZpZXdGaWVsZERlZmluaXRpb24pOiBTdGFuZGFyZFZhbGlkYXRvckZuW10ge1xuXG4gICAgICAgIGlmKHZpZXdGaWVsZC50eXBlID09PSAnYm9vbGVhbicpe1xuICAgICAgICAgICAgcmV0dXJuIFtib29sZWFuUmVxdWlyZWRWYWxpZGF0b3IodGhpcy51dGlscyldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtyZXF1aXJlZFZhbGlkYXRvcih0aGlzLnV0aWxzKV07XG4gICAgfVxuXG59XG4iXX0=