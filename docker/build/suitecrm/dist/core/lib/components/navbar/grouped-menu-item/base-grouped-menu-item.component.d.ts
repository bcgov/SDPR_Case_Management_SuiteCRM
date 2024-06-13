/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE
 * WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Supercharged by SuiteCRM" logo. If the display of the logos is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Supercharged by SuiteCRM".
 */
import { OnDestroy, OnInit, WritableSignal } from '@angular/core';
import { MenuItem } from 'common';
import { Subject, Subscription } from "rxjs";
import { AppStateStore } from "../../../store/app-state/app-state.store";
import { MenuItemLinkConfig } from "../menu-item-link/menu-item-link-config.model";
import { ModuleNavigation } from "../../../services/navigation/module-navigation/module-navigation.service";
import { SubMenuRecentlyViewedConfig } from "../sub-menu-recently-viewed/sub-menu-recently-viewed-config.model";
import { SubMenuFavoritesConfig } from "../sub-menu-favorites/sub-menu-favorites-config.model";
import * as i0 from "@angular/core";
export declare class BaseGroupedMenuItemComponent implements OnInit, OnDestroy {
    protected appStateStore: AppStateStore;
    protected moduleNavigation: ModuleNavigation;
    item: MenuItem;
    subNavCollapse: boolean;
    index: number;
    showDropdown: WritableSignal<boolean>;
    showSubDropdown: WritableSignal<boolean>[];
    hoverEnabled: WritableSignal<boolean>;
    recentlyViewedConfig: SubMenuRecentlyViewedConfig;
    favoritesConfig: SubMenuFavoritesConfig;
    showRecentlyViewed: Subject<boolean>;
    showFavorites: Subject<boolean>;
    subs: Subscription[];
    clickType: string;
    private openSubDropdown?;
    constructor(appStateStore: AppStateStore, moduleNavigation: ModuleNavigation);
    ngOnInit(): void;
    ngOnDestroy(): void;
    hideDropdown(): void;
    toggleDropdown(): void;
    navigate(): void;
    onSubItemClick($event: PointerEvent, item: MenuItem, index: number): void;
    toggleSubDropdown(index: number): void;
    getConfig(sub: MenuItem, index: number): MenuItemLinkConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseGroupedMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseGroupedMenuItemComponent, "scrm-base-grouped-menu-item", never, { "item": { "alias": "item"; "required": false; }; "subNavCollapse": { "alias": "subNavCollapse"; "required": false; }; "index": { "alias": "index"; "required": false; }; }, {}, never, never, false, never>;
}
