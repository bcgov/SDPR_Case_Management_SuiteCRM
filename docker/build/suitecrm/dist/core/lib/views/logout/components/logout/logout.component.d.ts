import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
export declare class LogoutComponent {
    protected configs: SystemConfigStore;
    constructor(configs: SystemConfigStore);
    getLoginURL(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LogoutComponent, "scrm-logout", never, {}, {}, never, never, false, never>;
}
