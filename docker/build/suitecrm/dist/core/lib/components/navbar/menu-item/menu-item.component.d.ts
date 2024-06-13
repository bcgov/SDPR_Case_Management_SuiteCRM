import { MenuItem } from 'common';
import { MenuItemRegistry } from './menu-item.registry';
import * as i0 from "@angular/core";
export declare class MenuItemComponent {
    protected registry: MenuItemRegistry;
    item: MenuItem;
    index: number;
    constructor(registry: MenuItemRegistry);
    get getType(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuItemComponent, "scrm-menu-item", never, { "item": { "alias": "item"; "required": false; }; "index": { "alias": "index"; "required": false; }; }, {}, never, never, false, never>;
}
