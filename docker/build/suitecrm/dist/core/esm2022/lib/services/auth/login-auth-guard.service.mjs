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
import { of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { AppStateStore } from '../../store/app-state/app-state.store';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./auth.service";
import * as i3 from "../../store/system-config/system-config.store";
import * as i4 from "../../store/app-state/app-state.store";
class LoginAuthGuard {
    constructor(router, authService, systemConfigStore, appStateStore) {
        this.router = router;
        this.authService = authService;
        this.systemConfigStore = systemConfigStore;
        this.appStateStore = appStateStore;
    }
    canActivate() {
        const homePage = this.systemConfigStore.getHomePage();
        const homePageUrlTree = this.router.parseUrl(homePage);
        if (this.authService.isUserLoggedIn.value) {
            return homePageUrlTree;
        }
        return this.authService.fetchSessionStatus()
            .pipe(take(1), map((user) => {
            if (user && user.appStatus.installed === false) {
                return this.router.parseUrl('install');
            }
            if (user && user.active === true) {
                // Session is active, go to home page
                this.authService.setCurrentUser(user);
                return homePageUrlTree;
            }
            // Stay on login
            return true;
        }), catchError(() => of(true)));
    }
    static { this.ɵfac = function LoginAuthGuard_Factory(t) { return new (t || LoginAuthGuard)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.SystemConfigStore), i0.ɵɵinject(i4.AppStateStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoginAuthGuard, factory: LoginAuthGuard.ɵfac, providedIn: 'root' }); }
}
export { LoginAuthGuard };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginAuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.AuthService }, { type: i3.SystemConfigStore }, { type: i4.AppStateStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2F1dGgvbG9naW4tYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQWEsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxXQUFXLEVBQWdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7QUFFcEUsTUFHYSxjQUFjO0lBQ3ZCLFlBQ2MsTUFBYyxFQUNoQixXQUF3QixFQUN0QixpQkFBb0MsRUFDcEMsYUFBNEI7UUFINUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN0QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBRTFDLENBQUM7SUFFRCxXQUFXO1FBRVAsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RELE1BQU0sZUFBZSxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWhFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFO1lBQ3ZDLE9BQU8sZUFBZSxDQUFDO1NBQzFCO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFO2FBQ3ZDLElBQUksQ0FDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRyxDQUFDLENBQUMsSUFBbUIsRUFBRSxFQUFFO1lBRXhCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtnQkFDNUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMxQztZQUVELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUM5QixxQ0FBcUM7Z0JBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLGVBQWUsQ0FBQzthQUMxQjtZQUVELGdCQUFnQjtZQUNoQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQzdCLENBQUM7SUFDVixDQUFDOytFQXRDUSxjQUFjO3VFQUFkLGNBQWMsV0FBZCxjQUFjLG1CQUZYLE1BQU07O1NBRVQsY0FBYzt1RkFBZCxjQUFjO2NBSDFCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBVcmxUcmVlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcCwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBdXRoU2VydmljZSwgU2Vzc2lvblN0YXR1c30gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5BdXRoR3VhcmQgIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWUge1xuXG4gICAgICAgIGNvbnN0IGhvbWVQYWdlID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRIb21lUGFnZSgpO1xuICAgICAgICBjb25zdCBob21lUGFnZVVybFRyZWU6IFVybFRyZWUgPSB0aGlzLnJvdXRlci5wYXJzZVVybChob21lUGFnZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4udmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBob21lUGFnZVVybFRyZWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5mZXRjaFNlc3Npb25TdGF0dXMoKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICAgICBtYXAoKHVzZXI6IFNlc3Npb25TdGF0dXMpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlciAmJiB1c2VyLmFwcFN0YXR1cy5pbnN0YWxsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIucGFyc2VVcmwoJ2luc3RhbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VyICYmIHVzZXIuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXNzaW9uIGlzIGFjdGl2ZSwgZ28gdG8gaG9tZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldEN1cnJlbnRVc2VyKHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhvbWVQYWdlVXJsVHJlZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YXkgb24gbG9naW5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZih0cnVlKSlcbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuIl19