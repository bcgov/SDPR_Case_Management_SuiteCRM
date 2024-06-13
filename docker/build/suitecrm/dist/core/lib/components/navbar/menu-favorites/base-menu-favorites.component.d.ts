import { ModuleNavigation } from '../../../services/navigation/module-navigation/module-navigation.service';
import { ModuleNameMapper } from '../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { BaseFavoritesComponent } from './base-favorites.component';
import * as i0 from "@angular/core";
export declare class BaseMenuFavoritesComponent extends BaseFavoritesComponent {
    protected navigation: ModuleNavigation;
    protected nameMapper: ModuleNameMapper;
    protected configs: SystemConfigStore;
    protected metadata: MetadataStore;
    onClick: Function;
    collapsible: boolean;
    collapsed: boolean;
    constructor(navigation: ModuleNavigation, nameMapper: ModuleNameMapper, configs: SystemConfigStore, metadata: MetadataStore);
    ngOnInit(): void;
    /**
     * toggle collapse
     */
    toggleCollapse(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseMenuFavoritesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseMenuFavoritesComponent, "scrm-base-menu-favorites", never, { "onClick": { "alias": "onClick"; "required": false; }; "collapsible": { "alias": "collapsible"; "required": false; }; }, {}, never, never, false, never>;
}
