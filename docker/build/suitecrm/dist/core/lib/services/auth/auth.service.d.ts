import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { User } from 'common';
import { MessageService } from '../message/message.service';
import { StateManager } from '../../store/state-manager';
import { LanguageStore } from '../../store/language/language.store';
import { AppStateStore } from '../../store/app-state/app-state.store';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { BaseRouteService } from "../base-route/base-route.service";
import { NotificationStore } from '../../store/notification/notification.store';
import * as i0 from "@angular/core";
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
export declare class AuthService {
    protected http: HttpClient;
    protected router: Router;
    protected message: MessageService;
    protected stateManager: StateManager;
    protected languageStore: LanguageStore;
    protected appStateStore: AppStateStore;
    protected localStorage: LocalStorageService;
    protected configs: SystemConfigStore;
    protected baseRoute: BaseRouteService;
    protected notificationStore: NotificationStore;
    currentUser$: Observable<User>;
    isUserLoggedIn: BehaviorSubject<boolean>;
    protected currentUserSubject: BehaviorSubject<User>;
    constructor(http: HttpClient, router: Router, message: MessageService, stateManager: StateManager, languageStore: LanguageStore, appStateStore: AppStateStore, localStorage: LocalStorageService, configs: SystemConfigStore, baseRoute: BaseRouteService, notificationStore: NotificationStore);
    isLoggedIn(): boolean;
    getCurrentUser(): User;
    setCurrentUser(data: any): void;
    doLogin(username: string, password: string, onSuccess: (response: string) => void, onError: (error: HttpErrorResponse) => void): Subscription;
    /**
     * Logout user
     *
     * @param {string} messageKey of message to display
     * @param {boolean} redirect to home
     */
    logout(messageKey?: string, redirect?: boolean): void;
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
    protected callLogout(logoutUrl: string, body: HttpParams, headers: HttpHeaders, redirect: boolean, messageKey: string, redirectLogout: boolean): void;
    /**
     * On logout state reset
     */
    resetState(): void;
    /**
     * Fetch session status from backend
     *
     * @returns {{}} Observable<SessionStatus>
     */
    fetchSessionStatus(): Observable<SessionStatus>;
    /**
     * Get route for session expired handling
     * @return string
     */
    getSessionExpiredRoute(): string;
    /**
     * Handle invalid session on request
     * @return boolean
     */
    handleInvalidSession(message: string): void;
    /**
     * Redirect to route configured for session expiry
     */
    handleSessionExpiredRedirect(): void;
    /**
     * Is to re-direct on session expiry
     * @return boolean
     */
    sessionExpiredRedirect(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
