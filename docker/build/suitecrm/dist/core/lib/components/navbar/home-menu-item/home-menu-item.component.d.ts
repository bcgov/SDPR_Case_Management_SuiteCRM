import { HomeMenuItemRegistry } from './home-menu-item.registry';
import * as i0 from "@angular/core";
export declare class HomeMenuItemComponent {
    protected registry: HomeMenuItemRegistry;
    route: string;
    active: boolean;
    constructor(registry: HomeMenuItemRegistry);
    get getType(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HomeMenuItemComponent, "scrm-home-menu-item", never, { "route": { "alias": "route"; "required": false; }; "active": { "alias": "active"; "required": false; }; }, {}, never, never, false, never>;
}
