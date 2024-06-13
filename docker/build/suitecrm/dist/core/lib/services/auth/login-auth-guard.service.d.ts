import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { AppStateStore } from '../../store/app-state/app-state.store';
import * as i0 from "@angular/core";
export declare class LoginAuthGuard {
    protected router: Router;
    private authService;
    protected systemConfigStore: SystemConfigStore;
    protected appStateStore: AppStateStore;
    constructor(router: Router, authService: AuthService, systemConfigStore: SystemConfigStore, appStateStore: AppStateStore);
    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginAuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoginAuthGuard>;
}
