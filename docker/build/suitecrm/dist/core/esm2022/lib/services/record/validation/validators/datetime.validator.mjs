import { Injectable } from '@angular/core';
import { DatetimeFormatter } from '../../../formatters/datetime/datetime-formatter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../formatters/datetime/datetime-formatter.service";
export const dateTimeValidator = (formatter) => ((control) => {
    const invalid = formatter.validateUserFormat(control.value);
    return invalid ? {
        dateTimeValidator: {
            value: control.value,
            message: {
                labelKey: 'LBL_VALIDATION_ERROR_DATETIME_FORMAT',
                context: {
                    value: control.value,
                    expected: formatter.toUserFormat('2020-01-23 12:30:40')
                }
            }
        },
    } : null;
});
class DateTimeValidator {
    constructor(formatter) {
        this.formatter = formatter;
    }
    applies(record, viewField) {
        if (!viewField || !viewField.fieldDefinition) {
            return false;
        }
        return viewField.type === 'datetime';
    }
    getValidator(viewField) {
        if (!viewField || !viewField.fieldDefinition) {
            return [];
        }
        return [dateTimeValidator(this.formatter)];
    }
    static { this.ɵfac = function DateTimeValidator_Factory(t) { return new (t || DateTimeValidator)(i0.ɵɵinject(i1.DatetimeFormatter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DateTimeValidator, factory: DateTimeValidator.ɵfac, providedIn: 'root' }); }
}
export { DateTimeValidator };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateTimeValidator, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.DatetimeFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3JlY29yZC92YWxpZGF0aW9uL3ZhbGlkYXRvcnMvZGF0ZXRpbWUudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDOzs7QUFHMUYsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxTQUE0QixFQUF1QixFQUFFLENBQUMsQ0FDcEYsQ0FBQyxPQUF3QixFQUFtQyxFQUFFO0lBRTFELE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2IsaUJBQWlCLEVBQUU7WUFDZixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsT0FBTyxFQUFFO2dCQUNMLFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELE9BQU8sRUFBRTtvQkFDTCxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7b0JBQ3BCLFFBQVEsRUFBRSxTQUFTLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDO2lCQUMxRDthQUNKO1NBQ0o7S0FDSixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDYixDQUFDLENBQ0osQ0FBQztBQUVGLE1BR2EsaUJBQWlCO0lBRTFCLFlBQXNCLFNBQTRCO1FBQTVCLGNBQVMsR0FBVCxTQUFTLENBQW1CO0lBQ2xELENBQUM7SUFFRCxPQUFPLENBQUMsTUFBYyxFQUFFLFNBQThCO1FBQ2xELElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFO1lBQzFDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxTQUFTLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsWUFBWSxDQUFDLFNBQThCO1FBRXZDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFO1lBQzFDLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztrRkFwQlEsaUJBQWlCO3VFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZkLE1BQU07O1NBRVQsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge1ZhbGlkYXRvckludGVyZmFjZX0gZnJvbSAnLi4vdmFsaWRhdG9yLkludGVyZmFjZSc7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtSZWNvcmR9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1ZpZXdGaWVsZERlZmluaXRpb259IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRldGltZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0dGVycy9kYXRldGltZS9kYXRldGltZS1mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge1N0YW5kYXJkVmFsaWRhdGlvbkVycm9ycywgU3RhbmRhcmRWYWxpZGF0b3JGbn0gZnJvbSAnY29tbW9uJztcblxuZXhwb3J0IGNvbnN0IGRhdGVUaW1lVmFsaWRhdG9yID0gKGZvcm1hdHRlcjogRGF0ZXRpbWVGb3JtYXR0ZXIpOiBTdGFuZGFyZFZhbGlkYXRvckZuID0+IChcbiAgICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogU3RhbmRhcmRWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG5cbiAgICAgICAgY29uc3QgaW52YWxpZCA9IGZvcm1hdHRlci52YWxpZGF0ZVVzZXJGb3JtYXQoY29udHJvbC52YWx1ZSk7XG4gICAgICAgIHJldHVybiBpbnZhbGlkID8ge1xuICAgICAgICAgICAgZGF0ZVRpbWVWYWxpZGF0b3I6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogY29udHJvbC52YWx1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX1ZBTElEQVRJT05fRVJST1JfREFURVRJTUVfRk9STUFUJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbnRyb2wudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogZm9ybWF0dGVyLnRvVXNlckZvcm1hdCgnMjAyMC0wMS0yMyAxMjozMDo0MCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9IDogbnVsbDtcbiAgICB9XG4pO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUaW1lVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9ySW50ZXJmYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBmb3JtYXR0ZXI6IERhdGV0aW1lRm9ybWF0dGVyKSB7XG4gICAgfVxuXG4gICAgYXBwbGllcyhyZWNvcmQ6IFJlY29yZCwgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghdmlld0ZpZWxkIHx8ICF2aWV3RmllbGQuZmllbGREZWZpbml0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmlld0ZpZWxkLnR5cGUgPT09ICdkYXRldGltZSc7XG4gICAgfVxuXG4gICAgZ2V0VmFsaWRhdG9yKHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbik6IFN0YW5kYXJkVmFsaWRhdG9yRm5bXSB7XG5cbiAgICAgICAgaWYgKCF2aWV3RmllbGQgfHwgIXZpZXdGaWVsZC5maWVsZERlZmluaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbZGF0ZVRpbWVWYWxpZGF0b3IodGhpcy5mb3JtYXR0ZXIpXTtcbiAgICB9XG59XG4iXX0=