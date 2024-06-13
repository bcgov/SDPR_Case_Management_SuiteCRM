import { SubMenuRecentlyViewedRegistry } from './sub-menu-recently-viewed-registry';
import { SubMenuRecentlyViewedConfig } from "./sub-menu-recently-viewed-config.model";
import * as i0 from "@angular/core";
export declare class SubMenuRecentlyViewedComponent {
    protected registry: SubMenuRecentlyViewedRegistry;
    module: string;
    config: SubMenuRecentlyViewedConfig;
    constructor(registry: SubMenuRecentlyViewedRegistry);
    get getType(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubMenuRecentlyViewedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SubMenuRecentlyViewedComponent, "scrm-sub-menu-recently-viewed", never, { "module": { "alias": "module"; "required": false; }; "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
