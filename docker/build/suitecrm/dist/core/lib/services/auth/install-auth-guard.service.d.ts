import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { RouteConverter } from '../navigation/route-converter/route-converter.service';
import { AsyncActionService } from '../process/processes/async-action/async-action';
import { MessageService } from '../message/message.service';
import { Observable } from 'rxjs';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
export declare class InstallAuthGuard {
    protected systemConfigStore: SystemConfigStore;
    private authService;
    protected router: Router;
    protected routeConverter: RouteConverter;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    constructor(systemConfigStore: SystemConfigStore, authService: AuthService, router: Router, routeConverter: RouteConverter, asyncActionService: AsyncActionService, message: MessageService);
    canActivate(route: any): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    /**
 * Allow web installation
 * @returns {object} Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
 * @param activatedRoute
 */
    protected canActivateWebInstallation(activatedRoute: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    static ɵfac: i0.ɵɵFactoryDeclaration<InstallAuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InstallAuthGuard>;
}
