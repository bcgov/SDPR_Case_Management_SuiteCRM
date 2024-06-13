import { MenuItem } from 'common';
import { GroupedMenuItemRegistry } from './grouped-menu-item.registry';
import * as i0 from "@angular/core";
export declare class GroupedMenuItemComponent {
    protected registry: GroupedMenuItemRegistry;
    item: MenuItem;
    subNavCollapse: boolean;
    index: number;
    constructor(registry: GroupedMenuItemRegistry);
    get getType(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupedMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupedMenuItemComponent, "scrm-grouped-menu-item", never, { "item": { "alias": "item"; "required": false; }; "subNavCollapse": { "alias": "subNavCollapse"; "required": false; }; "index": { "alias": "index"; "required": false; }; }, {}, never, never, false, never>;
}
