import { MenuFavoritesRegistry } from './menu-favorites-registry';
import * as i0 from "@angular/core";
export declare class MenuFavoritesComponent {
    protected registry: MenuFavoritesRegistry;
    module: string;
    onClick: Function;
    collapsible: boolean;
    constructor(registry: MenuFavoritesRegistry);
    get getType(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuFavoritesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuFavoritesComponent, "scrm-menu-favorites", never, { "module": { "alias": "module"; "required": false; }; "onClick": { "alias": "onClick"; "required": false; }; "collapsible": { "alias": "collapsible"; "required": false; }; }, {}, never, never, false, never>;
}
