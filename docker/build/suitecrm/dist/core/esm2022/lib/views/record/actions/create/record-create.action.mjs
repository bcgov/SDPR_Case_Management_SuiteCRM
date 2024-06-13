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
import { Router } from '@angular/router';
import { ModuleNameMapper } from '../../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { RecordActionHandler } from '../record.action';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i2 from "@angular/router";
class RecordCreateAction extends RecordActionHandler {
    constructor(moduleNameMapper, router) {
        super();
        this.moduleNameMapper = moduleNameMapper;
        this.router = router;
        this.key = 'create';
        this.modes = ['detail'];
    }
    run(data) {
        const store = data.store;
        const baseRecord = store.getBaseRecord();
        const route = '/' + store.vm.appData.module.name + '/edit';
        const module = this.moduleNameMapper.toLegacy(store.vm.appData.module.name);
        this.router.navigate([route], {
            queryParams: {
                // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
                return_module: module,
                // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
                return_action: 'DetailView',
                // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
                return_record: (baseRecord && baseRecord.id) || ''
            }
        }).then();
    }
    shouldDisplay(data) {
        return this.checkRecordAccess(data, ['edit']);
    }
    static { this.ɵfac = function RecordCreateAction_Factory(t) { return new (t || RecordCreateAction)(i0.ɵɵinject(i1.ModuleNameMapper), i0.ɵɵinject(i2.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordCreateAction, factory: RecordCreateAction.ɵfac, providedIn: 'root' }); }
}
export { RecordCreateAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordCreateAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ModuleNameMapper }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNyZWF0ZS5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2FjdGlvbnMvY3JlYXRlL3JlY29yZC1jcmVhdGUuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV2QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwrRUFBK0UsQ0FBQztBQUMvRyxPQUFPLEVBQW1CLG1CQUFtQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFFdkUsTUFHYSxrQkFBbUIsU0FBUSxtQkFBbUI7SUFJdkQsWUFBc0IsZ0JBQWtDLEVBQVksTUFBYztRQUM5RSxLQUFLLEVBQUUsQ0FBQztRQURVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBWSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSGxGLFFBQUcsR0FBRyxRQUFRLENBQUM7UUFDZixVQUFLLEdBQUcsQ0FBQyxRQUFvQixDQUFDLENBQUM7SUFJL0IsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFzQjtRQUN0QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV6QyxNQUFNLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDM0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixXQUFXLEVBQUU7Z0JBQ1Qsa0VBQWtFO2dCQUNsRSxhQUFhLEVBQUUsTUFBTTtnQkFDckIsa0VBQWtFO2dCQUNsRSxhQUFhLEVBQUUsWUFBWTtnQkFDM0Isa0VBQWtFO2dCQUNsRSxhQUFhLEVBQUUsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7YUFDckQ7U0FDSixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQXNCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzttRkE3QlEsa0JBQWtCO3VFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZmLE1BQU07O1NBRVQsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge1JlY29yZEFjdGlvbkRhdGEsIFJlY29yZEFjdGlvbkhhbmRsZXJ9IGZyb20gJy4uL3JlY29yZC5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZENyZWF0ZUFjdGlvbiBleHRlbmRzIFJlY29yZEFjdGlvbkhhbmRsZXIge1xuICAgIGtleSA9ICdjcmVhdGUnO1xuICAgIG1vZGVzID0gWydkZXRhaWwnIGFzIFZpZXdNb2RlXTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLCBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogUmVjb3JkQWN0aW9uRGF0YSk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdG9yZSA9IGRhdGEuc3RvcmU7XG4gICAgICAgIGNvbnN0IGJhc2VSZWNvcmQgPSBzdG9yZS5nZXRCYXNlUmVjb3JkKCk7XG5cbiAgICAgICAgY29uc3Qgcm91dGUgPSAnLycgKyBzdG9yZS52bS5hcHBEYXRhLm1vZHVsZS5uYW1lICsgJy9lZGl0JztcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5tb2R1bGVOYW1lTWFwcGVyLnRvTGVnYWN5KHN0b3JlLnZtLmFwcERhdGEubW9kdWxlLm5hbWUpO1xuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyb3V0ZV0sIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZSxAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlXG4gICAgICAgICAgICAgICAgcmV0dXJuX21vZHVsZTogbW9kdWxlLFxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UsQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZVxuICAgICAgICAgICAgICAgIHJldHVybl9hY3Rpb246ICdEZXRhaWxWaWV3JyxcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlLEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2VcbiAgICAgICAgICAgICAgICByZXR1cm5fcmVjb3JkOiAoYmFzZVJlY29yZCAmJiBiYXNlUmVjb3JkLmlkKSB8fCAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkRGlzcGxheShkYXRhOiBSZWNvcmRBY3Rpb25EYXRhKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrUmVjb3JkQWNjZXNzKGRhdGEsIFsnZWRpdCddKTtcbiAgICB9XG59XG4iXX0=