import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AsyncActionService } from '../process/processes/async-action/async-action';
import { AppStateStore } from '../../store/app-state/app-state.store';
import { RouteConverter } from '../navigation/route-converter/route-converter.service';
import { LanguageStore } from '../../store/language/language.store';
import { NotificationStore } from '../../store/notification/notification.store';
import * as i0 from "@angular/core";
export declare class AuthGuard {
    protected router: Router;
    protected authService: AuthService;
    protected asyncActionService: AsyncActionService;
    protected appState: AppStateStore;
    protected routeConverter: RouteConverter;
    protected language: LanguageStore;
    protected notificationStore: NotificationStore;
    constructor(router: Router, authService: AuthService, asyncActionService: AsyncActionService, appState: AppStateStore, routeConverter: RouteConverter, language: LanguageStore, notificationStore: NotificationStore);
    canActivate(route: ActivatedRouteSnapshot, snapshot: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    /**
     * Authorize user session and acl together in conjunction
     *
     * @returns {object} Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     * @param {ActivatedRouteSnapshot} route information about the current route
     * @param snapshot
     */
    protected authorizeUser(route: ActivatedRouteSnapshot, snapshot: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    /**
     * Authorize user acl
     *
     * @returns {object} Observable<boolean | UrlTree>
     * @param {ActivatedRouteSnapshot} activatedRoute information about the current route
     */
    protected authorizeUserACL(activatedRoute: ActivatedRouteSnapshot): Observable<boolean | UrlTree>;
    /**
     * Authorize user session
     *
     * @returns {object} Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     * @param {ActivatedRouteSnapshot} route information about the current route
     * @param snapshot
     */
    protected authorizeUserSession(route: ActivatedRouteSnapshot, snapshot: RouterStateSnapshot): Observable<boolean | UrlTree>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuard>;
}
