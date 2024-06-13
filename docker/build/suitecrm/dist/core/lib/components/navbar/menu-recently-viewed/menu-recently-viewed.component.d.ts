import { MenuRecentlyViewedRegistry } from './menu-recently-viewed-registry';
import * as i0 from "@angular/core";
export declare class MenuRecentlyViewedComponent {
    protected registry: MenuRecentlyViewedRegistry;
    module: string;
    onClick: Function;
    collapsible: boolean;
    constructor(registry: MenuRecentlyViewedRegistry);
    get getType(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuRecentlyViewedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuRecentlyViewedComponent, "scrm-menu-recently-viewed", never, { "module": { "alias": "module"; "required": false; }; "onClick": { "alias": "onClick"; "required": false; }; "collapsible": { "alias": "collapsible"; "required": false; }; }, {}, never, never, false, never>;
}
