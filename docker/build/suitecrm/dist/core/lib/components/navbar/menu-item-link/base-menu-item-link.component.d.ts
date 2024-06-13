import { MenuItemLink } from 'common';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { AppStateStore } from '../../../store/app-state/app-state.store';
import { MenuItemLinkConfig } from "./menu-item-link-config.model";
import * as i0 from "@angular/core";
export declare class BaseMenuItemLinkComponent {
    protected asyncActionService: AsyncActionService;
    protected appState: AppStateStore;
    link: MenuItemLink;
    icon: string;
    class: string;
    disableRoute: boolean;
    config: MenuItemLinkConfig;
    constructor(asyncActionService: AsyncActionService, appState: AppStateStore);
    handleProcess(process: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseMenuItemLinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseMenuItemLinkComponent, "scrm-base-menu-item-link", never, { "link": { "alias": "link"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "class": { "alias": "class"; "required": false; }; "disableRoute": { "alias": "disableRoute"; "required": false; }; "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
