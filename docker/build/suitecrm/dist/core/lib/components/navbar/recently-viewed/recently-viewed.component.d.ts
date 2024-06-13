import { ModuleNameMapper } from "../../../services/navigation/module-name-mapper/module-name-mapper.service";
import { ModuleNavigation } from "../../../services/navigation/module-navigation/module-navigation.service";
import { RecentlyViewed } from "common";
import * as i0 from "@angular/core";
export declare class RecentlyViewedComponent {
    protected nameMapper: ModuleNameMapper;
    protected navigation: ModuleNavigation;
    _menuItems: import("@angular/core").WritableSignal<RecentlyViewed[]>;
    set menuItems(value: RecentlyViewed[]);
    itemWithRoutes: import("@angular/core").Signal<RecentlyViewed[]>;
    constructor(nameMapper: ModuleNameMapper, navigation: ModuleNavigation);
    /**
     * Build route from recently viewed item
     * @param item
     */
    buildRoute(item: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecentlyViewedComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecentlyViewedComponent, "scrm-recently-viewed", never, { "menuItems": { "alias": "menuItems"; "required": false; }; }, {}, never, never, true, never>;
}
