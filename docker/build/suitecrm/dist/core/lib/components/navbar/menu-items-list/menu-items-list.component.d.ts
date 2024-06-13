import { MenuItem } from 'common';
import { MenuItemsListRegistry } from './menu-items-list-registry';
import * as i0 from "@angular/core";
export declare class MenuItemsListComponent {
    protected registry: MenuItemsListRegistry;
    items: MenuItem[];
    labelKey: string;
    index: number;
    constructor(registry: MenuItemsListRegistry);
    get getType(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuItemsListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuItemsListComponent, "scrm-menu-items-list", never, { "items": { "alias": "items"; "required": false; }; "labelKey": { "alias": "labelKey"; "required": false; }; "index": { "alias": "index"; "required": false; }; }, {}, never, never, false, never>;
}
