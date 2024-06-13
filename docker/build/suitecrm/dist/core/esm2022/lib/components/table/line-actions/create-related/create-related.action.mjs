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
import { LineActionActionHandler } from '../line.action';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i2 from "@angular/router";
class CreateRelatedLineAction extends LineActionActionHandler {
    constructor(moduleNameMapper, router) {
        super();
        this.moduleNameMapper = moduleNameMapper;
        this.router = router;
        this.key = 'create';
        this.modes = ['list'];
    }
    run(data, action = null) {
        const configs = action.params['create'] || {};
        const params = {};
        /* eslint-disable camelcase,@typescript-eslint/camelcase*/
        params.return_module = configs.legacyModuleName;
        params.return_action = configs.returnAction;
        params.return_id = data.record.id;
        /* eslint-enable camelcase,@typescript-eslint/camelcase */
        params[configs.mapping.moduleName] = configs.legacyModuleName;
        params[configs.mapping.name] = data.record.attributes.name;
        params[configs.mapping.id] = data.record.id;
        const route = '/' + configs.module + '/' + configs.action;
        this.router.navigate([route], {
            queryParams: params
        }).then();
    }
    shouldDisplay(data) {
        return true;
    }
    static { this.ɵfac = function CreateRelatedLineAction_Factory(t) { return new (t || CreateRelatedLineAction)(i0.ɵɵinject(i1.ModuleNameMapper), i0.ɵɵinject(i2.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CreateRelatedLineAction, factory: CreateRelatedLineAction.ɵfac, providedIn: 'root' }); }
}
export { CreateRelatedLineAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateRelatedLineAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ModuleNameMapper }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXJlbGF0ZWQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvbGluZS1hY3Rpb25zL2NyZWF0ZS1yZWxhdGVkL2NyZWF0ZS1yZWxhdGVkLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFdkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sK0VBQStFLENBQUM7QUFDL0csT0FBTyxFQUFDLHVCQUF1QixFQUFpQixNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXZFLE1BR2EsdUJBQXdCLFNBQVEsdUJBQXVCO0lBSWhFLFlBQXNCLGdCQUFrQyxFQUFZLE1BQWM7UUFDOUUsS0FBSyxFQUFFLENBQUM7UUFEVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVksV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUhsRixRQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ2YsVUFBSyxHQUFHLENBQUMsTUFBa0IsQ0FBQyxDQUFDO0lBSTdCLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBb0IsRUFBRSxTQUFpQixJQUFJO1FBRTNDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBUyxDQUFDO1FBRXJELE1BQU0sTUFBTSxHQUEyQixFQUFFLENBQUM7UUFDMUMsMERBQTBEO1FBQzFELE1BQU0sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELE1BQU0sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUM1QyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2xDLDBEQUEwRDtRQUMxRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFFOUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzNELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBRTVDLE1BQU0sS0FBSyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRTFELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsV0FBVyxFQUFFLE1BQU07U0FDdEIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFvQjtRQUM5QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO3dGQWhDUSx1QkFBdUI7dUVBQXZCLHVCQUF1QixXQUF2Qix1QkFBdUIsbUJBRnBCLE1BQU07O1NBRVQsdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FIbkMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0FjdGlvbiwgVmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7TGluZUFjdGlvbkFjdGlvbkhhbmRsZXIsIExpbmVBY3Rpb25EYXRhfSBmcm9tICcuLi9saW5lLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlUmVsYXRlZExpbmVBY3Rpb24gZXh0ZW5kcyBMaW5lQWN0aW9uQWN0aW9uSGFuZGxlciB7XG4gICAga2V5ID0gJ2NyZWF0ZSc7XG4gICAgbW9kZXMgPSBbJ2xpc3QnIGFzIFZpZXdNb2RlXTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLCBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogTGluZUFjdGlvbkRhdGEsIGFjdGlvbjogQWN0aW9uID0gbnVsbCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGNvbmZpZ3MgPSBhY3Rpb24ucGFyYW1zWydjcmVhdGUnXSB8fCB7fSBhcyBhbnk7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSxAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlKi9cbiAgICAgICAgcGFyYW1zLnJldHVybl9tb2R1bGUgPSBjb25maWdzLmxlZ2FjeU1vZHVsZU5hbWU7XG4gICAgICAgIHBhcmFtcy5yZXR1cm5fYWN0aW9uID0gY29uZmlncy5yZXR1cm5BY3Rpb247XG4gICAgICAgIHBhcmFtcy5yZXR1cm5faWQgPSBkYXRhLnJlY29yZC5pZDtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UsQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZSAqL1xuICAgICAgICBwYXJhbXNbY29uZmlncy5tYXBwaW5nLm1vZHVsZU5hbWVdID0gY29uZmlncy5sZWdhY3lNb2R1bGVOYW1lO1xuXG4gICAgICAgIHBhcmFtc1tjb25maWdzLm1hcHBpbmcubmFtZV0gPSBkYXRhLnJlY29yZC5hdHRyaWJ1dGVzLm5hbWU7XG4gICAgICAgIHBhcmFtc1tjb25maWdzLm1hcHBpbmcuaWRdID0gZGF0YS5yZWNvcmQuaWQ7XG5cbiAgICAgICAgY29uc3Qgcm91dGUgPSAnLycgKyBjb25maWdzLm1vZHVsZSArICcvJyArIGNvbmZpZ3MuYWN0aW9uO1xuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyb3V0ZV0sIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfSkudGhlbigpO1xuICAgIH1cblxuICAgIHNob3VsZERpc3BsYXkoZGF0YTogTGluZUFjdGlvbkRhdGEpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIl19