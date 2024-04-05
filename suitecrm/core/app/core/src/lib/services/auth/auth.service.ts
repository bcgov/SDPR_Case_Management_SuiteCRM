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

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, Subscription, throwError} from 'rxjs';
import {catchError, distinctUntilChanged, filter, finalize, take} from 'rxjs/operators';
import {isEmptyString, isTrue, User} from 'common';
import {MessageService} from '../message/message.service';
import {StateManager} from '../../store/state-manager';
import {LanguageStore} from '../../store/language/language.store';
import {AppStateStore} from '../../store/app-state/app-state.store';
import {LocalStorageService} from '../local-storage/local-storage.service';
import {SystemConfigStore} from '../../store/system-config/system-config.store';
import {BaseRouteService} from "../base-route/base-route.service";
import {NotificationStore} from '../../store/notification/notification.store';

export interface SessionStatus {
    appStatus?: AppStatus;
    active?: boolean;
    id?: string;
    firstName?: string;
    lastName?: string;
}

export interface AppStatus {
    installed?: boolean;
    locked?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    currentUser$: Observable<User>;
    isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    protected currentUserSubject = new BehaviorSubject<User>({} as User);

    constructor(
        protected http: HttpClient,
        protected router: Router,
        protected message: MessageService,
        protected stateManager: StateManager,
        protected languageStore: LanguageStore,
        protected appStateStore: AppStateStore,
        protected localStorage: LocalStorageService,
        protected configs: SystemConfigStore,
        protected baseRoute: BaseRouteService,
        protected notificationStore: NotificationStore
    ) {
        this.currentUser$ = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
    }

    isLoggedIn(): boolean {
        return this.isUserLoggedIn.value;
    }

    getCurrentUser(): User {
        return this.currentUserSubject.value;
    }

    setCurrentUser(data): void {
        this.appStateStore.setCurrentUser(data);
        this.currentUserSubject.next(data);
        this.isUserLoggedIn.next(true);
    }

    doLogin(
        username: string,
        password: string,
        onSuccess: (response: string) => void,
        onError: (error: HttpErrorResponse) => void
    ): Subscription {
        let loginUrl = 'login';
        loginUrl = this.baseRoute.appendNativeAuth(loginUrl);
        loginUrl = this.baseRoute.calculateRoute(loginUrl);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        return this.http.post(
            loginUrl,
            {
                username,
                password
            },
            {headers}
        ).subscribe((response: any) => {

            if (this.baseRoute.isNativeAuth()) {
                window.location.href = this.baseRoute.removeNativeAuth();
            }

            this.appStateStore.updateInitialAppLoading(true);
            onSuccess(response);
            this.isUserLoggedIn.next(true);
            this.setCurrentUser(response);
            this.notificationStore.enableNotifications();
            this.notificationStore.refreshNotifications();
        }, (error: HttpErrorResponse) => {
            onError(error);
        });
    }

    /**
     * Logout user
     *
     * @param {string} messageKey of message to display
     * @param {boolean} redirect to home
     */
    public logout(messageKey = 'LBL_LOGOUT_SUCCESS', redirect = true): void {
        this.appStateStore.updateLoading('logout', true, false);

        const logoutConfig = this.configs.getConfigValue('logout') ?? [];
        let logoutUrl = (logoutConfig?.path ?? 'logout') as string;
        const redirectLogout = isTrue(logoutConfig?.redirect ?? false);

        if (this.baseRoute.isNativeAuth()) {
            logoutUrl = this.baseRoute.getNativeOutLogoutUrl();
        }

        logoutUrl = this.baseRoute.calculateRoute(logoutUrl);
        const body = new HttpParams();

        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

        if (this.appStateStore.getActiveRequests() < 1) {
            this.callLogout(logoutUrl, body, headers, redirect, messageKey, redirectLogout);
        } else {
            this.appStateStore.activeRequests$.pipe(
                filter(value => value < 1),
                take(1)
            ).subscribe(
                () => {
                    this.callLogout(logoutUrl, body, headers, redirect, messageKey, redirectLogout);
                }
            )
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
    protected callLogout(
        logoutUrl: string,
        body: HttpParams,
        headers: HttpHeaders,
        redirect: boolean,
        messageKey: string,
        redirectLogout: boolean
    ) {
        this.resetState();

        if (redirectLogout) {
            window.location.href = logoutUrl;
            return;
        }
        this.http.post(logoutUrl, body.toString(), {headers, responseType: 'text'})
            .pipe(
                take(1),
                catchError(err => {
                    this.message.log('Logout failed');
                    return throwError(err);
                }),
                finalize(() => {
                    this.appStateStore.updateInitialAppLoading(true);
                    this.appStateStore.updateLoading('logout', false, false);
                    this.appStateStore.setCurrentUser(null);
                    this.stateManager.clearAuthBased();
                    this.configs.clear();
                    if (redirect === true) {
                        this.router.navigate(['/Login']).finally();
                    }
                })
            )
            .subscribe(
                () => {
                    this.message.log('Logout success');
                    if (!isEmptyString(messageKey)) {
                        this.message.addSuccessMessageByKey(messageKey);
                    }
                },
                () => {
                    this.message.log('Error on logout');
                    if (!isEmptyString(messageKey)) {
                        this.message.addSuccessMessageByKey(messageKey);
                    }
                }
            );
    }

    /**
     * On logout state reset
     */
    public resetState(): void {
        this.stateManager.clearAuthBased();
        this.localStorage.clear();
        this.isUserLoggedIn.next(false);
    }

    /**
     * Fetch session status from backend
     *
     * @returns {{}} Observable<SessionStatus>
     */
    public fetchSessionStatus(): Observable<SessionStatus> {

        let url = 'session-status';
        url = this.baseRoute.appendNativeAuth(url);
        url = this.baseRoute.calculateRoute(url);
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

        return this.http.get(url, {headers});
    }

    /**
     * Get route for session expired handling
     * @return string
     */
    public getSessionExpiredRoute(): string {
        const sessionExpiredConfig = this.configs.getConfigValue('session-expired') ?? [];
        return (sessionExpiredConfig?.path ?? 'Login') as string;
    }

    /**
     * Handle invalid session on request
     * @return boolean
     */
    public handleInvalidSession(message: string): void {
        const redirect = this.sessionExpiredRedirect()

        if (redirect) {
            this.handleSessionExpiredRedirect();
            return;
        }

        this.logout(message);
    }

    /**
     * Redirect to route configured for session expiry
     */
    public handleSessionExpiredRedirect(): void {
        window.location.href = this.getSessionExpiredRoute();
    }

    /**
     * Is to re-direct on session expiry
     * @return boolean
     */
    public sessionExpiredRedirect(): boolean {
        const sessionExpiredConfig = this.configs.getConfigValue('session-expired') ?? [];
        return isTrue(sessionExpiredConfig?.redirect ?? false);
    }
}
