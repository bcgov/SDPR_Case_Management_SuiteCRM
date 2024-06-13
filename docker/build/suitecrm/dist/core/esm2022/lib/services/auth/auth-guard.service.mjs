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
import { Router, UrlTree } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError, filter, map, take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AsyncActionService } from '../process/processes/async-action/async-action';
import { AppStateStore } from '../../store/app-state/app-state.store';
import { RouteConverter } from '../navigation/route-converter/route-converter.service';
import { emptyObject, isEmptyString } from 'common';
import { LanguageStore } from '../../store/language/language.store';
import { NotificationStore } from '../../store/notification/notification.store';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./auth.service";
import * as i3 from "../process/processes/async-action/async-action";
import * as i4 from "../../store/app-state/app-state.store";
import * as i5 from "../navigation/route-converter/route-converter.service";
import * as i6 from "../../store/language/language.store";
import * as i7 from "../../store/notification/notification.store";
class AuthGuard {
    constructor(router, authService, asyncActionService, appState, routeConverter, language, notificationStore) {
        this.router = router;
        this.authService = authService;
        this.asyncActionService = asyncActionService;
        this.appState = appState;
        this.routeConverter = routeConverter;
        this.language = language;
        this.notificationStore = notificationStore;
    }
    canActivate(route, snapshot) {
        return this.authorizeUser(route, snapshot);
    }
    /**
     * Authorize user session and acl together in conjunction
     *
     * @returns {object} Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     * @param {ActivatedRouteSnapshot} route information about the current route
     * @param snapshot
     */
    authorizeUser(route, snapshot) {
        // Note: this session and acl are not always booleans
        return forkJoin([
            this.authorizeUserSession(route, snapshot),
            this.authorizeUserACL(route)
        ]).pipe(map(([session, acl]) => {
            if (session instanceof UrlTree) {
                return session;
            }
            if (acl instanceof UrlTree) {
                return acl;
            }
            return session && acl;
        }));
    }
    /**
     * Authorize user acl
     *
     * @returns {object} Observable<boolean | UrlTree>
     * @param {ActivatedRouteSnapshot} activatedRoute information about the current route
     */
    authorizeUserACL(activatedRoute) {
        const routeInfo = this.routeConverter.parseRouteURL(activatedRoute.url);
        const routeURL = this.appState.getRouteUrl() ?? '';
        if (!routeInfo.module || routeInfo.module === 'home') {
            return of(true);
        }
        const homeUrl = '';
        const homeUrlTree = this.router.parseUrl(homeUrl);
        const actionName = 'user-acl';
        const asyncData = {
            action: actionName,
            module: routeInfo.module,
            payload: {
                routeAction: routeInfo.action,
                record: routeInfo.record,
                routeURL,
                queryParams: activatedRoute?.queryParams ?? []
            }
        };
        return this.asyncActionService.run(actionName, asyncData)
            .pipe(take(1), map((process) => {
            if (process.data && process.data.result === true) {
                return true;
            }
            if (isEmptyString(routeURL)) {
                // Re-direct to home
                return homeUrlTree;
            }
            const currentUrlTree = this.router.parseUrl(this.router.url);
            if (this.routeConverter.isClassicViewRoute(currentUrlTree)) {
                return currentUrlTree;
            }
            return false;
        }), catchError(() => of(homeUrlTree)));
    }
    /**
     * Authorize user session
     *
     * @returns {object} Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     * @param {ActivatedRouteSnapshot} route information about the current route
     * @param snapshot
     */
    authorizeUserSession(route, snapshot) {
        if (this.authService.isUserLoggedIn.value && route.data.checkSession !== true) {
            return of(true);
        }
        let sessionExpiredUrl = this.authService.getSessionExpiredRoute();
        const redirect = this.authService.sessionExpiredRedirect();
        const sessionExpiredUrlTree = this.router.parseUrl(sessionExpiredUrl);
        return this.authService.fetchSessionStatus()
            .pipe(take(1), map((user) => {
            if (user && user.appStatus.installed === false) {
                return this.router.parseUrl('install');
            }
            if (user && user.active === true) {
                const wasLoggedIn = !!this.appState.getCurrentUser();
                this.authService.setCurrentUser(user);
                if (!wasLoggedIn) {
                    this.language.appStrings$.pipe(filter(appStrings => appStrings && !emptyObject(appStrings)), tap(() => {
                        this.notificationStore.enableNotifications();
                        this.notificationStore.refreshNotifications();
                    }), take(1)).subscribe();
                }
                return true;
            }
            this.appState.setPreLoginUrl(snapshot.url);
            this.authService.resetState();
            if (redirect) {
                this.authService.handleSessionExpiredRedirect();
                return false;
            }
            // Re-direct to login
            return sessionExpiredUrlTree;
        }), catchError(() => {
            if (redirect) {
                this.authService.handleSessionExpiredRedirect();
                return of(false);
            }
            this.authService.logout('LBL_SESSION_EXPIRED', false);
            return of(sessionExpiredUrlTree);
        }), tap((result) => {
            if (result === true) {
                this.authService.isUserLoggedIn.next(true);
            }
        }));
    }
    static { this.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.AsyncActionService), i0.ɵɵinject(i4.AppStateStore), i0.ɵɵinject(i5.RouteConverter), i0.ɵɵinject(i6.LanguageStore), i0.ɵɵinject(i7.NotificationStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' }); }
}
export { AuthGuard };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.AuthService }, { type: i3.AsyncActionService }, { type: i4.AppStateStore }, { type: i5.RouteConverter }, { type: i6.LanguageStore }, { type: i7.NotificationStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2F1dGgvYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBeUIsTUFBTSxFQUF1QixPQUFPLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RixPQUFPLEVBQUMsUUFBUSxFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxXQUFXLEVBQWdCLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUQsT0FBTyxFQUFtQixrQkFBa0IsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsY0FBYyxFQUFZLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDbEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDOzs7Ozs7Ozs7QUFFOUUsTUFHYSxTQUFTO0lBQ2xCLFlBQ2MsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0QyxRQUF1QixFQUN2QixjQUE4QixFQUM5QixRQUF1QixFQUN2QixpQkFBb0M7UUFOcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFX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QU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QztRQUNMLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDVixDQUFDOzBFQTVLUSxTQUFTO3VFQUFULFNBQVMsV0FBVCxTQUFTLG1CQUZOLE1BQU07O1NBRVQsU0FBUzt1RkFBVCxTQUFTO2NBSHJCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtmb3JrSm9pbiwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBmaWx0ZXIsIG1hcCwgdGFrZSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlLCBTZXNzaW9uU3RhdHVzfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1Byb2Nlc3N9IGZyb20gJy4uL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7QXN5bmNBY3Rpb25JbnB1dCwgQXN5bmNBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge1JvdXRlQ29udmVydGVyLCBSb3V0ZUluZm99IGZyb20gJy4uL25hdmlnYXRpb24vcm91dGUtY29udmVydGVyL3JvdXRlLWNvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7ZW1wdHlPYmplY3QsIGlzRW1wdHlTdHJpbmd9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uc3RvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCAge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVDb252ZXJ0ZXI6IFJvdXRlQ29udmVydGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBub3RpZmljYXRpb25TdG9yZTogTm90aWZpY2F0aW9uU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc25hcHNob3Q6IFJvdXRlclN0YXRlU25hcHNob3QpOlxuICAgICAgICBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWUge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRob3JpemVVc2VyKHJvdXRlLCBzbmFwc2hvdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXV0aG9yaXplIHVzZXIgc2Vzc2lvbiBhbmQgYWNsIHRvZ2V0aGVyIGluIGNvbmp1bmN0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWVcbiAgICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IHJvdXRlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHJvdXRlXG4gICAgICogQHBhcmFtIHNuYXBzaG90XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGF1dGhvcml6ZVVzZXIocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHNuYXBzaG90OiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlIHtcbiAgICAgICAgLy8gTm90ZTogdGhpcyBzZXNzaW9uIGFuZCBhY2wgYXJlIG5vdCBhbHdheXMgYm9vbGVhbnNcbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKFtcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yaXplVXNlclNlc3Npb24ocm91dGUsIHNuYXBzaG90KSxcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yaXplVXNlckFDTChyb3V0ZSlcbiAgICAgICAgXSkucGlwZShtYXAoKFtzZXNzaW9uLCBhY2xdOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uIGluc3RhbmNlb2YgVXJsVHJlZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGFjbCBpbnN0YW5jZW9mIFVybFRyZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlc3Npb24gJiYgYWNsO1xuICAgICAgICAgICAgfVxuICAgICAgICApKTtcblxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXV0aG9yaXplIHVzZXIgYWNsXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPlxuICAgICAqIEBwYXJhbSB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gYWN0aXZhdGVkUm91dGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgcm91dGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYXV0aG9yaXplVXNlckFDTChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6XG4gICAgICAgIE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcblxuICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHRoaXMucm91dGVDb252ZXJ0ZXIucGFyc2VSb3V0ZVVSTChhY3RpdmF0ZWRSb3V0ZS51cmwpO1xuXG4gICAgICAgIGNvbnN0IHJvdXRlVVJMOiBzdHJpbmcgPSB0aGlzLmFwcFN0YXRlLmdldFJvdXRlVXJsKCkgPz8gJyc7XG5cbiAgICAgICAgaWYgKCFyb3V0ZUluZm8ubW9kdWxlIHx8IHJvdXRlSW5mby5tb2R1bGUgPT09ICdob21lJykge1xuICAgICAgICAgICAgcmV0dXJuIG9mKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaG9tZVVybCA9ICcnO1xuICAgICAgICBjb25zdCBob21lVXJsVHJlZTogVXJsVHJlZSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKGhvbWVVcmwpO1xuXG4gICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSAndXNlci1hY2wnO1xuXG4gICAgICAgIGNvbnN0IGFzeW5jRGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1vZHVsZTogcm91dGVJbmZvLm1vZHVsZSxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICByb3V0ZUFjdGlvbjogcm91dGVJbmZvLmFjdGlvbixcbiAgICAgICAgICAgICAgICByZWNvcmQ6IHJvdXRlSW5mby5yZWNvcmQsXG4gICAgICAgICAgICAgICAgcm91dGVVUkwsXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGFjdGl2YXRlZFJvdXRlPy5xdWVyeVBhcmFtcyA/PyBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG4gICAgICAgIHJldHVybiB0aGlzLmFzeW5jQWN0aW9uU2VydmljZS5ydW4oYWN0aW9uTmFtZSwgYXN5bmNEYXRhKVxuICAgICAgICAgICAgLnBpcGUodGFrZSgxKSxcbiAgICAgICAgICAgICAgICBtYXAoKHByb2Nlc3M6IFByb2Nlc3MpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5kYXRhICYmIHByb2Nlc3MuZGF0YS5yZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRW1wdHlTdHJpbmcocm91dGVVUkwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZS1kaXJlY3QgdG8gaG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhvbWVVcmxUcmVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFVybFRyZWU6IFVybFRyZWUgPSB0aGlzLnJvdXRlci5wYXJzZVVybCh0aGlzLnJvdXRlci51cmwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvdXRlQ29udmVydGVyLmlzQ2xhc3NpY1ZpZXdSb3V0ZShjdXJyZW50VXJsVHJlZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50VXJsVHJlZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IG9mKGhvbWVVcmxUcmVlKSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXV0aG9yaXplIHVzZXIgc2Vzc2lvblxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlXG4gICAgICogQHBhcmFtIHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fSByb3V0ZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCByb3V0ZVxuICAgICAqIEBwYXJhbSBzbmFwc2hvdFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhdXRob3JpemVVc2VyU2Vzc2lvbihyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc25hcHNob3Q6IFJvdXRlclN0YXRlU25hcHNob3QpOlxuICAgICAgICBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4udmFsdWUgJiYgcm91dGUuZGF0YS5jaGVja1Nlc3Npb24gIT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBvZih0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZXNzaW9uRXhwaXJlZFVybCA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0U2Vzc2lvbkV4cGlyZWRSb3V0ZSgpO1xuICAgICAgICBjb25zdCByZWRpcmVjdCA9IHRoaXMuYXV0aFNlcnZpY2Uuc2Vzc2lvbkV4cGlyZWRSZWRpcmVjdCgpO1xuXG4gICAgICAgIGNvbnN0IHNlc3Npb25FeHBpcmVkVXJsVHJlZTogVXJsVHJlZSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKHNlc3Npb25FeHBpcmVkVXJsKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5mZXRjaFNlc3Npb25TdGF0dXMoKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICAgICBtYXAoKHVzZXI6IFNlc3Npb25TdGF0dXMpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlciAmJiB1c2VyLmFwcFN0YXR1cy5pbnN0YWxsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIucGFyc2VVcmwoJ2luc3RhbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VyICYmIHVzZXIuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3YXNMb2dnZWRJbiA9ICEhdGhpcy5hcHBTdGF0ZS5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZXRDdXJyZW50VXNlcih1c2VyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3YXNMb2dnZWRJbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2UuYXBwU3RyaW5ncyQucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyKGFwcFN0cmluZ3MgPT4gYXBwU3RyaW5ncyAmJiAhZW1wdHlPYmplY3QoYXBwU3RyaW5ncykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TdG9yZS5lbmFibGVOb3RpZmljYXRpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblN0b3JlLnJlZnJlc2hOb3RpZmljYXRpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWtlKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZS5zZXRQcmVMb2dpblVybChzbmFwc2hvdC51cmwpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlc2V0U3RhdGUoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaGFuZGxlU2Vzc2lvbkV4cGlyZWRSZWRpcmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmUtZGlyZWN0IHRvIGxvZ2luXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXNzaW9uRXhwaXJlZFVybFRyZWU7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5oYW5kbGVTZXNzaW9uRXhwaXJlZFJlZGlyZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoJ0xCTF9TRVNTSU9OX0VYUElSRUQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihzZXNzaW9uRXhwaXJlZFVybFRyZWUpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHRhcCgocmVzdWx0OiBib29sZWFuIHwgVXJsVHJlZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG5cblxuIl19