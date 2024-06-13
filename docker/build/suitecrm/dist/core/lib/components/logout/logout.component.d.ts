import { Observable } from 'rxjs';
import { LanguageStore, LanguageStrings } from '../../store/language/language.store';
import { AuthService } from '../../services/auth/auth.service';
import { LogoutModel } from './logout-model';
import * as i0 from "@angular/core";
export declare class LogoutUiComponent {
    protected auth: AuthService;
    protected languageStore: LanguageStore;
    logout: LogoutModel;
    languages$: Observable<LanguageStrings>;
    vm$: Observable<{
        appStrings: import("../../store/language/language.store").LanguageStringMap;
        appListStrings: import("../../store/language/language.store").LanguageListStringMap;
    }>;
    constructor(auth: AuthService, languageStore: LanguageStore);
    /**
     * call logout
     */
    doLogout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogoutUiComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LogoutUiComponent, "scrm-logout-ui", never, {}, {}, never, never, false, never>;
}
