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
import { RouteConverter } from '../navigation/route-converter/route-converter.service';
import { AsyncActionService } from '../process/processes/async-action/async-action';
import { MessageService } from '../message/message.service';
import { of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
import * as i1 from "../../store/system-config/system-config.store";
import * as i2 from "./auth.service";
import * as i3 from "@angular/router";
import * as i4 from "../navigation/route-converter/route-converter.service";
import * as i5 from "../process/processes/async-action/async-action";
import * as i6 from "../message/message.service";
class InstallAuthGuard {
    constructor(systemConfigStore, authService, router, routeConverter, asyncActionService, message) {
        this.systemConfigStore = systemConfigStore;
        this.authService = authService;
        this.router = router;
        this.routeConverter = routeConverter;
        this.asyncActionService = asyncActionService;
        this.message = message;
    }
    canActivate(route) {
        return this.canActivateWebInstallation(route);
    }
    /**
 * Allow web installation
 * @returns {object} Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
 * @param activatedRoute
 */
    canActivateWebInstallation(activatedRoute) {
        const homePage = this.systemConfigStore.getHomePage();
        const homePageUrlTree = this.router.parseUrl(homePage);
        return this.authService.fetchSessionStatus()
            .pipe(take(1), map((user) => {
            if (user && user.appStatus.locked === true && user.appStatus.installed === true) {
                this.message.addDangerMessageByKey('LBL_DISABLED_TITLE_2');
                if (user && user.active === false) {
                    return homePageUrlTree;
                }
                return false;
            }
            if (user && user.active === true) {
                this.authService.logout('', false);
                this.authService.isUserLoggedIn.next(false);
            }
            return true;
        }), catchError(() => of(true)));
    }
    static { this.ɵfac = function InstallAuthGuard_Factory(t) { return new (t || InstallAuthGuard)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.RouteConverter), i0.ɵɵinject(i5.AsyncActionService), i0.ɵɵinject(i6.MessageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InstallAuthGuard, factory: InstallAuthGuard.ɵfac, providedIn: 'root' }); }
}
export { InstallAuthGuard };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallAuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.AuthService }, { type: i3.Router }, { type: i4.RouteConverter }, { type: i5.AsyncActionService }, { type: i6.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC1hdXRoLWd1YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvYXV0aC9pbnN0YWxsLWF1dGgtZ3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQXlCLE1BQU0sRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNyRixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFhLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUMsV0FBVyxFQUFnQixNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQUcxRCxNQUdhLGdCQUFnQjtJQUN6QixZQUNjLGlCQUFvQyxFQUN0QyxXQUF3QixFQUN0QixNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsa0JBQXNDLEVBQ3RDLE9BQXVCO1FBTHZCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFlBQU8sR0FBUCxPQUFPLENBQWdCO0lBRXJDLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBSztRQUViLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7OztHQUlEO0lBQ1csMEJBQTBCLENBQUMsY0FBc0M7UUFHdkUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RELE1BQU0sZUFBZSxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWhFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRTthQUN2QyxJQUFJLENBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEdBQUcsQ0FBQyxDQUFDLElBQW1CLEVBQUUsRUFBRTtZQUV4QixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO2dCQUM3RSxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBRTNELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFFO29CQUMvQixPQUFPLGVBQWUsQ0FBQztpQkFDMUI7Z0JBRUQsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFFRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0M7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQzdCLENBQUM7SUFDVixDQUFDO2lGQW5EUSxnQkFBZ0I7dUVBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmIsTUFBTTs7U0FFVCxnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlciwgVXJsVHJlZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Um91dGVDb252ZXJ0ZXJ9IGZyb20gJy4uL25hdmlnYXRpb24vcm91dGUtY29udmVydGVyL3JvdXRlLWNvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7QXN5bmNBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlLCBTZXNzaW9uU3RhdHVzfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJbnN0YWxsQXV0aEd1YXJkICB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdTdG9yZTogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZUNvbnZlcnRlcjogUm91dGVDb252ZXJ0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgY2FuQWN0aXZhdGUocm91dGUpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWUge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNhbkFjdGl2YXRlV2ViSW5zdGFsbGF0aW9uKHJvdXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAqIEFsbG93IHdlYiBpbnN0YWxsYXRpb25cbiAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4gfCBib29sZWFuIHwgVXJsVHJlZVxuICogQHBhcmFtIGFjdGl2YXRlZFJvdXRlXG4gKi9cbiAgICBwcm90ZWN0ZWQgY2FuQWN0aXZhdGVXZWJJbnN0YWxsYXRpb24oYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOlxuICAgIE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4gfCBib29sZWFuIHwgVXJsVHJlZSB7XG5cbiAgICAgICAgY29uc3QgaG9tZVBhZ2UgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldEhvbWVQYWdlKCk7XG4gICAgICAgIGNvbnN0IGhvbWVQYWdlVXJsVHJlZTogVXJsVHJlZSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKGhvbWVQYWdlKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5mZXRjaFNlc3Npb25TdGF0dXMoKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICAgICBtYXAoKHVzZXI6IFNlc3Npb25TdGF0dXMpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlciAmJiB1c2VyLmFwcFN0YXR1cy5sb2NrZWQgPT09IHRydWUgJiYgdXNlci5hcHBTdGF0dXMuaW5zdGFsbGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KCdMQkxfRElTQUJMRURfVElUTEVfMicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlciAmJiB1c2VyLmFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaG9tZVBhZ2VVcmxUcmVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlciAmJiB1c2VyLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoJycsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4ubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKHRydWUpKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==