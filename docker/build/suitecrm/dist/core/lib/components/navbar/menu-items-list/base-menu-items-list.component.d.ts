import { MenuItem } from 'common';
import { Subscription } from "rxjs";
import { AppStateStore } from "../../../store/app-state/app-state.store";
import * as i0 from "@angular/core";
export declare class BaseMenuItemsListComponent {
    protected appStateStore: AppStateStore;
    items: MenuItem[];
    labelKey: string;
    index: number;
    showDropdown: import("@angular/core").WritableSignal<boolean>;
    hoverEnabled: import("@angular/core").WritableSignal<boolean>;
    allowHover: import("@angular/core").WritableSignal<boolean>;
    isTouchDevice: import("@angular/core").WritableSignal<boolean>;
    subs: Subscription[];
    constructor(appStateStore: AppStateStore);
    ngOnInit(): void;
    ngOnDestroy(): void;
    hideDropdown(): void;
    toggleDropdown(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseMenuItemsListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseMenuItemsListComponent, "scrm-base-menu-items-list", never, { "items": { "alias": "items"; "required": false; }; "labelKey": { "alias": "labelKey"; "required": false; }; "index": { "alias": "index"; "required": false; }; }, {}, never, never, false, never>;
}
