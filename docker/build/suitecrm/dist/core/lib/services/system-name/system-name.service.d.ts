import { SystemConfigStore } from "../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
export declare class SystemNameService {
    protected systemConfig: SystemConfigStore;
    constructor(systemConfig: SystemConfigStore, doc?: any);
    private docElement;
    setSystemName(systemName: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SystemNameService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SystemNameService>;
}
