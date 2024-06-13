import { SubMenuFavoritesRegistry } from './sub-menu-favorites-registry';
import { SubMenuFavoritesConfig } from "./sub-menu-favorites-config.model";
import * as i0 from "@angular/core";
export declare class SubMenuFavoritesComponent {
    protected registry: SubMenuFavoritesRegistry;
    module: string;
    config: SubMenuFavoritesConfig;
    constructor(registry: SubMenuFavoritesRegistry);
    get getType(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubMenuFavoritesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SubMenuFavoritesComponent, "scrm-sub-menu-favorites", never, { "module": { "alias": "module"; "required": false; }; "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
