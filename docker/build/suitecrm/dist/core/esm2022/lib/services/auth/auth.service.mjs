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
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, distinctUntilChanged, filter, finalize, take } from 'rxjs/operators';
import { isEmptyString, isTrue } from 'common';
import { MessageService } from '../message/message.service';
import { StateManager } from '../../store/state-manager';
import { LanguageStore } from '../../store/language/language.store';
import { AppStateStore } from '../../store/app-state/app-state.store';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { BaseRouteService } from "../base-route/base-route.service";
import { NotificationStore } from '../../store/notification/notification.store';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
import * as i3 from "../message/message.service";
import * as i4 from "../../store/state-manager";
import * as i5 from "../../store/language/language.store";
import * as i6 from "../../store/app-state/app-state.store";
import * as i7 from "../local-storage/local-storage.service";
import * as i8 from "../../store/system-config/system-config.store";
import * as i9 from "../base-route/base-route.service";
import * as i10 from "../../store/notification/notification.store";
class AuthService {
    constructor(http, router, message, stateManager, languageStore, appStateStore, localStorage, configs, baseRoute, notificationStore) {
        this.http = http;
        this.router = router;
        this.message = message;
        this.stateManager = stateManager;
        this.languageStore = languageStore;
        this.appStateStore = appStateStore;
        this.localStorage = localStorage;
        this.configs = configs;
        this.baseRoute = baseRoute;
        this.notificationStore = notificationStore;
        this.isUserLoggedIn = new BehaviorSubject(false);
        this.currentUserSubject = new BehaviorSubject({});
        this.currentUser$ = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
    }
    isLoggedIn() {
        return this.isUserLoggedIn.value;
    }
    getCurrentUser() {
        return this.currentUserSubject.value;
    }
    setCurrentUser(data) {
        this.appStateStore.setCurrentUser(data);
        this.currentUserSubject.next(data);
        this.isUserLoggedIn.next(true);
    }
    doLogin(username, password, onSuccess, onError) {
        let loginUrl = 'login';
        loginUrl = this.baseRoute.appendNativeAuth(loginUrl);
        loginUrl = this.baseRoute.calculateRoute(loginUrl);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.post(loginUrl, {
            username,
            password
        }, { headers }).subscribe((response) => {
            if (this.baseRoute.isNativeAuth()) {
                window.location.href = this.baseRoute.removeNativeAuth();
            }
            this.appStateStore.updateInitialAppLoading(true);
            onSuccess(response);
            this.isUserLoggedIn.next(true);
            this.setCurrentUser(response);
            this.notificationStore.enableNotifications();
            this.notificationStore.refreshNotifications();
        }, (error) => {
            onError(error);
        });
    }
    /**
     * Logout user
     *
     * @param {string} messageKey of message to display
     * @param {boolean} redirect to home
     */
    logout(messageKey = 'LBL_LOGOUT_SUCCESS', redirect = true) {
        this.appStateStore.updateLoading('logout', true, false);
        const logoutConfig = this.configs.getConfigValue('logout') ?? [];
        let logoutUrl = (logoutConfig?.path ?? 'logout');
        const redirectLogout = isTrue(logoutConfig?.redirect ?? false);
        if (this.baseRoute.isNativeAuth()) {
            logoutUrl = this.baseRoute.getNativeOutLogoutUrl();
        }
        logoutUrl = this.baseRoute.calculateRoute(logoutUrl);
        const body = new HttpParams();
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
        if (this.appStateStore.getActiveRequests() < 1) {
            this.callLogout(logoutUrl, body, headers, redirect, messageKey, redirectLogout);
        }
        else {
            this.appStateStore.activeRequests$.pipe(filter(value => value < 1), take(1)).subscribe(() => {
                this.callLogout(logoutUrl, body, headers, redirect, messageKey, redirectLogout);
            });
        }
    }
    /**
     * Call logout
     * @param logoutUrl
     * @param body
     * @param headers
     * @param redirect
     * @param messageKey
     * @param redirectLogout
     * @protected
     */
    callLogout(logoutUrl, body, headers, redirect, messageKey, redirectLogout) {
        this.resetState();
        if (redirectLogout) {
            window.location.href = logoutUrl;
            return;
        }
        this.http.post(logoutUrl, body.toString(), { headers, responseType: 'text' })
            .pipe(take(1), catchError(err => {
            this.message.log('Logout failed');
            return throwError(err);
        }), finalize(() => {
            this.appStateStore.updateInitialAppLoading(true);
            this.appStateStore.updateLoading('logout', false, false);
            this.appStateStore.setCurrentUser(null);
            this.stateManager.clearAuthBased();
            this.configs.clear();
            if (redirect === true) {
                this.router.navigate(['/Login']).finally();
            }
        }))
            .subscribe(() => {
            this.message.log('Logout success');
            if (!isEmptyString(messageKey)) {
                this.message.addSuccessMessageByKey(messageKey);
            }
        }, () => {
            this.message.log('Error on logout');
            if (!isEmptyString(messageKey)) {
                this.message.addSuccessMessageByKey(messageKey);
            }
        });
    }
    /**
     * On logout state reset
     */
    resetState() {
        this.stateManager.clearAuthBased();
        this.localStorage.clear();
        this.isUserLoggedIn.next(false);
    }
    /**
     * Fetch session status from backend
     *
     * @returns {{}} Observable<SessionStatus>
     */
    fetchSessionStatus() {
        let url = 'session-status';
        url = this.baseRoute.appendNativeAuth(url);
        url = this.baseRoute.calculateRoute(url);
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
        return this.http.get(url, { headers });
    }
    /**
     * Get route for session expired handling
     * @return string
     */
    getSessionExpiredRoute() {
        const sessionExpiredConfig = this.configs.getConfigValue('session-expired') ?? [];
        return (sessionExpiredConfig?.path ?? 'Login');
    }
    /**
     * Handle invalid session on request
     * @return boolean
     */
    handleInvalidSession(message) {
        const redirect = this.sessionExpiredRedirect();
        if (redirect) {
            this.handleSessionExpiredRedirect();
            return;
        }
        this.logout(message);
    }
    /**
     * Redirect to route configured for session expiry
     */
    handleSessionExpiredRedirect() {
        window.location.href = this.getSessionExpiredRoute();
    }
    /**
     * Is to re-direct on session expiry
     * @return boolean
     */
    sessionExpiredRedirect() {
        const sessionExpiredConfig = this.configs.getConfigValue('session-expired') ?? [];
        return isTrue(sessionExpiredConfig?.redirect ?? false);
    }
    static { this.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.StateManager), i0.ɵɵinject(i5.LanguageStore), i0.ɵɵinject(i6.AppStateStore), i0.ɵɵinject(i7.LocalStorageService), i0.ɵɵinject(i8.SystemConfigStore), i0.ɵɵinject(i9.BaseRouteService), i0.ɵɵinject(i10.NotificationStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' }); }
}
export { AuthService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.Router }, { type: i3.MessageService }, { type: i4.StateManager }, { type: i5.LanguageStore }, { type: i6.AppStateStore }, { type: i7.LocalStorageService }, { type: i8.SystemConfigStore }, { type: i9.BaseRouteService }, { type: i10.NotificationStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsVUFBVSxFQUFxQixXQUFXLEVBQUUsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDNUYsT0FBTyxFQUFDLGVBQWUsRUFBNEIsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzNFLE9BQU8sRUFBQyxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RixPQUFPLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBTyxNQUFNLFFBQVEsQ0FBQztBQUNuRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDM0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7Ozs7Ozs7Ozs7OztBQWU5RSxNQUdhLFdBQVc7SUFNcEIsWUFDYyxJQUFnQixFQUNoQixNQUFjLEVBQ2QsT0FBdUIsRUFDdkIsWUFBMEIsRUFDMUIsYUFBNEIsRUFDNUIsYUFBNEIsRUFDNUIsWUFBaUMsRUFDakMsT0FBMEIsRUFDMUIsU0FBMkIsRUFDM0IsaUJBQW9DO1FBVHBDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBYmxELG1CQUFjLEdBQTZCLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLHVCQUFrQixHQUFHLElBQUksZUFBZSxDQUFPLEVBQVUsQ0FBQyxDQUFDO1FBY2pFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVELFVBQVU7UUFDTixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxjQUFjLENBQUMsSUFBSTtRQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELE9BQU8sQ0FDSCxRQUFnQixFQUNoQixRQUFnQixFQUNoQixTQUFxQyxFQUNyQyxPQUEyQztRQUUzQyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDdkIsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzVCLGNBQWMsRUFBRSxrQkFBa0I7U0FDckMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsUUFBUSxFQUNSO1lBQ0ksUUFBUTtZQUNSLFFBQVE7U0FDWCxFQUNELEVBQUMsT0FBTyxFQUFDLENBQ1osQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUUxQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEVBQUU7Z0JBQy9CLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUM1RDtZQUVELElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDbEQsQ0FBQyxFQUFFLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsb0JBQW9CLEVBQUUsUUFBUSxHQUFHLElBQUk7UUFDNUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4RCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakUsSUFBSSxTQUFTLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxJQUFJLFFBQVEsQ0FBVyxDQUFDO1FBQzNELE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDO1FBRS9ELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUMvQixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQ3REO1FBRUQsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sSUFBSSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFFOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFFbkYsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNuRjthQUFNO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQzFCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDVixDQUFDLFNBQVMsQ0FDUCxHQUFHLEVBQUU7Z0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ3BGLENBQUMsQ0FDSixDQUFBO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ08sVUFBVSxDQUNoQixTQUFpQixFQUNqQixJQUFnQixFQUNoQixPQUFvQixFQUNwQixRQUFpQixFQUNqQixVQUFrQixFQUNsQixjQUF1QjtRQUV2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsSUFBSSxjQUFjLEVBQUU7WUFDaEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQyxDQUFDO2FBQ3RFLElBQUksQ0FDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEMsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLEVBQ0YsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckIsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO2dCQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDOUM7UUFDTCxDQUFDLENBQUMsQ0FDTDthQUNBLFNBQVMsQ0FDTixHQUFHLEVBQUU7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDbkQ7UUFDTCxDQUFDLEVBQ0QsR0FBRyxFQUFFO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ25EO1FBQ0wsQ0FBQyxDQUNKLENBQUM7SUFDVixDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksa0JBQWtCO1FBRXJCLElBQUksR0FBRyxHQUFHLGdCQUFnQixDQUFDO1FBQzNCLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUVuRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHNCQUFzQjtRQUN6QixNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xGLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLElBQUksT0FBTyxDQUFXLENBQUM7SUFDN0QsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG9CQUFvQixDQUFDLE9BQWU7UUFDdkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUE7UUFFOUMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztZQUNwQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNJLDRCQUE0QjtRQUMvQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksc0JBQXNCO1FBQ3pCLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEYsT0FBTyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7NEVBcE9RLFdBQVc7dUVBQVgsV0FBVyxXQUFYLFdBQVcsbUJBRlIsTUFBTTs7U0FFVCxXQUFXO3VGQUFYLFdBQVc7Y0FIdkIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVycywgSHR0cFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgdGhyb3dFcnJvcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIGZpbmFsaXplLCB0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2lzRW1wdHlTdHJpbmcsIGlzVHJ1ZSwgVXNlcn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7U3RhdGVNYW5hZ2VyfSBmcm9tICcuLi8uLi9zdG9yZS9zdGF0ZS1tYW5hZ2VyJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7QmFzZVJvdXRlU2VydmljZX0gZnJvbSBcIi4uL2Jhc2Utcm91dGUvYmFzZS1yb3V0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQge05vdGlmaWNhdGlvblN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnN0b3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBTZXNzaW9uU3RhdHVzIHtcbiAgICBhcHBTdGF0dXM/OiBBcHBTdGF0dXM7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBpZD86IHN0cmluZztcbiAgICBmaXJzdE5hbWU/OiBzdHJpbmc7XG4gICAgbGFzdE5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdHVzIHtcbiAgICBpbnN0YWxsZWQ/OiBib29sZWFuO1xuICAgIGxvY2tlZD86IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gICAgY3VycmVudFVzZXIkOiBPYnNlcnZhYmxlPFVzZXI+O1xuICAgIGlzVXNlckxvZ2dlZEluOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgICBwcm90ZWN0ZWQgY3VycmVudFVzZXJTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxVc2VyPih7fSBhcyBVc2VyKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzdGF0ZU1hbmFnZXI6IFN0YXRlTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZVN0b3JlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBiYXNlUm91dGU6IEJhc2VSb3V0ZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBub3RpZmljYXRpb25TdG9yZTogTm90aWZpY2F0aW9uU3RvcmVcbiAgICApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciQgPSB0aGlzLmN1cnJlbnRVc2VyU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgIH1cblxuICAgIGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVXNlckxvZ2dlZEluLnZhbHVlO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRVc2VyKCk6IFVzZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VXNlclN1YmplY3QudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFVzZXIoZGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUuc2V0Q3VycmVudFVzZXIoZGF0YSk7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXJTdWJqZWN0Lm5leHQoZGF0YSk7XG4gICAgICAgIHRoaXMuaXNVc2VyTG9nZ2VkSW4ubmV4dCh0cnVlKTtcbiAgICB9XG5cbiAgICBkb0xvZ2luKFxuICAgICAgICB1c2VybmFtZTogc3RyaW5nLFxuICAgICAgICBwYXNzd29yZDogc3RyaW5nLFxuICAgICAgICBvblN1Y2Nlc3M6IChyZXNwb25zZTogc3RyaW5nKSA9PiB2b2lkLFxuICAgICAgICBvbkVycm9yOiAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB2b2lkXG4gICAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICAgICAgbGV0IGxvZ2luVXJsID0gJ2xvZ2luJztcbiAgICAgICAgbG9naW5VcmwgPSB0aGlzLmJhc2VSb3V0ZS5hcHBlbmROYXRpdmVBdXRoKGxvZ2luVXJsKTtcbiAgICAgICAgbG9naW5VcmwgPSB0aGlzLmJhc2VSb3V0ZS5jYWxjdWxhdGVSb3V0ZShsb2dpblVybCk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgICAgICAgbG9naW5VcmwsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7aGVhZGVyc31cbiAgICAgICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYmFzZVJvdXRlLmlzTmF0aXZlQXV0aCgpKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmJhc2VSb3V0ZS5yZW1vdmVOYXRpdmVBdXRoKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVJbml0aWFsQXBwTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLmlzVXNlckxvZ2dlZEluLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRVc2VyKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU3RvcmUuZW5hYmxlTm90aWZpY2F0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TdG9yZS5yZWZyZXNoTm90aWZpY2F0aW9ucygpO1xuICAgICAgICB9LCAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nb3V0IHVzZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlS2V5IG9mIG1lc3NhZ2UgdG8gZGlzcGxheVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVkaXJlY3QgdG8gaG9tZVxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dvdXQobWVzc2FnZUtleSA9ICdMQkxfTE9HT1VUX1NVQ0NFU1MnLCByZWRpcmVjdCA9IHRydWUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoJ2xvZ291dCcsIHRydWUsIGZhbHNlKTtcblxuICAgICAgICBjb25zdCBsb2dvdXRDb25maWcgPSB0aGlzLmNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ2xvZ291dCcpID8/IFtdO1xuICAgICAgICBsZXQgbG9nb3V0VXJsID0gKGxvZ291dENvbmZpZz8ucGF0aCA/PyAnbG9nb3V0JykgYXMgc3RyaW5nO1xuICAgICAgICBjb25zdCByZWRpcmVjdExvZ291dCA9IGlzVHJ1ZShsb2dvdXRDb25maWc/LnJlZGlyZWN0ID8/IGZhbHNlKTtcblxuICAgICAgICBpZiAodGhpcy5iYXNlUm91dGUuaXNOYXRpdmVBdXRoKCkpIHtcbiAgICAgICAgICAgIGxvZ291dFVybCA9IHRoaXMuYmFzZVJvdXRlLmdldE5hdGl2ZU91dExvZ291dFVybCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nb3V0VXJsID0gdGhpcy5iYXNlUm91dGUuY2FsY3VsYXRlUm91dGUobG9nb3V0VXJsKTtcbiAgICAgICAgY29uc3QgYm9keSA9IG5ldyBIdHRwUGFyYW1zKCk7XG5cbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvcGxhaW47IGNoYXJzZXQ9dXRmLTgnKTtcblxuICAgICAgICBpZiAodGhpcy5hcHBTdGF0ZVN0b3JlLmdldEFjdGl2ZVJlcXVlc3RzKCkgPCAxKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxMb2dvdXQobG9nb3V0VXJsLCBib2R5LCBoZWFkZXJzLCByZWRpcmVjdCwgbWVzc2FnZUtleSwgcmVkaXJlY3RMb2dvdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLmFjdGl2ZVJlcXVlc3RzJC5waXBlKFxuICAgICAgICAgICAgICAgIGZpbHRlcih2YWx1ZSA9PiB2YWx1ZSA8IDEpLFxuICAgICAgICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsTG9nb3V0KGxvZ291dFVybCwgYm9keSwgaGVhZGVycywgcmVkaXJlY3QsIG1lc3NhZ2VLZXksIHJlZGlyZWN0TG9nb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsIGxvZ291dFxuICAgICAqIEBwYXJhbSBsb2dvdXRVcmxcbiAgICAgKiBAcGFyYW0gYm9keVxuICAgICAqIEBwYXJhbSBoZWFkZXJzXG4gICAgICogQHBhcmFtIHJlZGlyZWN0XG4gICAgICogQHBhcmFtIG1lc3NhZ2VLZXlcbiAgICAgKiBAcGFyYW0gcmVkaXJlY3RMb2dvdXRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNhbGxMb2dvdXQoXG4gICAgICAgIGxvZ291dFVybDogc3RyaW5nLFxuICAgICAgICBib2R5OiBIdHRwUGFyYW1zLFxuICAgICAgICBoZWFkZXJzOiBIdHRwSGVhZGVycyxcbiAgICAgICAgcmVkaXJlY3Q6IGJvb2xlYW4sXG4gICAgICAgIG1lc3NhZ2VLZXk6IHN0cmluZyxcbiAgICAgICAgcmVkaXJlY3RMb2dvdXQ6IGJvb2xlYW5cbiAgICApIHtcbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICAgICAgaWYgKHJlZGlyZWN0TG9nb3V0KSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxvZ291dFVybDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmh0dHAucG9zdChsb2dvdXRVcmwsIGJvZHkudG9TdHJpbmcoKSwge2hlYWRlcnMsIHJlc3BvbnNlVHlwZTogJ3RleHQnfSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UubG9nKCdMb2dvdXQgZmFpbGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlSW5pdGlhbEFwcExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVMb2FkaW5nKCdsb2dvdXQnLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUuc2V0Q3VycmVudFVzZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVNYW5hZ2VyLmNsZWFyQXV0aEJhc2VkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlncy5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL0xvZ2luJ10pLmZpbmFsbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmxvZygnTG9nb3V0IHN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0VtcHR5U3RyaW5nKG1lc3NhZ2VLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkU3VjY2Vzc01lc3NhZ2VCeUtleShtZXNzYWdlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UubG9nKCdFcnJvciBvbiBsb2dvdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0VtcHR5U3RyaW5nKG1lc3NhZ2VLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkU3VjY2Vzc01lc3NhZ2VCeUtleShtZXNzYWdlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gbG9nb3V0IHN0YXRlIHJlc2V0XG4gICAgICovXG4gICAgcHVibGljIHJlc2V0U3RhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGVNYW5hZ2VyLmNsZWFyQXV0aEJhc2VkKCk7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuaXNVc2VyTG9nZ2VkSW4ubmV4dChmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggc2Vzc2lvbiBzdGF0dXMgZnJvbSBiYWNrZW5kXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7e319IE9ic2VydmFibGU8U2Vzc2lvblN0YXR1cz5cbiAgICAgKi9cbiAgICBwdWJsaWMgZmV0Y2hTZXNzaW9uU3RhdHVzKCk6IE9ic2VydmFibGU8U2Vzc2lvblN0YXR1cz4ge1xuXG4gICAgICAgIGxldCB1cmwgPSAnc2Vzc2lvbi1zdGF0dXMnO1xuICAgICAgICB1cmwgPSB0aGlzLmJhc2VSb3V0ZS5hcHBlbmROYXRpdmVBdXRoKHVybCk7XG4gICAgICAgIHVybCA9IHRoaXMuYmFzZVJvdXRlLmNhbGN1bGF0ZVJvdXRlKHVybCk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04Jyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7aGVhZGVyc30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCByb3V0ZSBmb3Igc2Vzc2lvbiBleHBpcmVkIGhhbmRsaW5nXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U2Vzc2lvbkV4cGlyZWRSb3V0ZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBzZXNzaW9uRXhwaXJlZENvbmZpZyA9IHRoaXMuY29uZmlncy5nZXRDb25maWdWYWx1ZSgnc2Vzc2lvbi1leHBpcmVkJykgPz8gW107XG4gICAgICAgIHJldHVybiAoc2Vzc2lvbkV4cGlyZWRDb25maWc/LnBhdGggPz8gJ0xvZ2luJykgYXMgc3RyaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBpbnZhbGlkIHNlc3Npb24gb24gcmVxdWVzdFxuICAgICAqIEByZXR1cm4gYm9vbGVhblxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVJbnZhbGlkU2Vzc2lvbihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVkaXJlY3QgPSB0aGlzLnNlc3Npb25FeHBpcmVkUmVkaXJlY3QoKVxuXG4gICAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTZXNzaW9uRXhwaXJlZFJlZGlyZWN0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvZ291dChtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdCB0byByb3V0ZSBjb25maWd1cmVkIGZvciBzZXNzaW9uIGV4cGlyeVxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVTZXNzaW9uRXhwaXJlZFJlZGlyZWN0KCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuZ2V0U2Vzc2lvbkV4cGlyZWRSb3V0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIHRvIHJlLWRpcmVjdCBvbiBzZXNzaW9uIGV4cGlyeVxuICAgICAqIEByZXR1cm4gYm9vbGVhblxuICAgICAqL1xuICAgIHB1YmxpYyBzZXNzaW9uRXhwaXJlZFJlZGlyZWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBzZXNzaW9uRXhwaXJlZENvbmZpZyA9IHRoaXMuY29uZmlncy5nZXRDb25maWdWYWx1ZSgnc2Vzc2lvbi1leHBpcmVkJykgPz8gW107XG4gICAgICAgIHJldHVybiBpc1RydWUoc2Vzc2lvbkV4cGlyZWRDb25maWc/LnJlZGlyZWN0ID8/IGZhbHNlKTtcbiAgICB9XG59XG4iXX0=