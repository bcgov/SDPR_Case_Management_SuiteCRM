import { ModuleNavigation } from '../../../services/navigation/module-navigation/module-navigation.service';
import { ModuleNameMapper } from '../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { BaseFavoritesComponent } from '../menu-favorites/base-favorites.component';
import { SubMenuFavoritesConfig } from "./sub-menu-favorites-config.model";
import * as i0 from "@angular/core";
export declare class BaseSubMenuFavoritesComponent extends BaseFavoritesComponent {
    protected navigation: ModuleNavigation;
    protected nameMapper: ModuleNameMapper;
    protected configs: SystemConfigStore;
    protected metadata: MetadataStore;
    config: SubMenuFavoritesConfig;
    showDropdown: import("@angular/core").WritableSignal<boolean>;
    clickType: string;
    constructor(navigation: ModuleNavigation, nameMapper: ModuleNameMapper, configs: SystemConfigStore, metadata: MetadataStore);
    ngOnInit(): void;
    toggleDropdown(): void;
    onTouchStart(event: any): void;
    onItemClick($event: MouseEvent): void;
    onItemTouchStart($event: TouchEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseSubMenuFavoritesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseSubMenuFavoritesComponent, "scrm-base-sub-menu-favorites", never, { "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
