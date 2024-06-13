/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2024 SalesAgility Ltd.
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
import { AppStateStore } from "../../store/app-state/app-state.store";
import { Subscription } from "rxjs";
import { NavbarModuleMap, NavigationStore } from "../../store/navigation/navigation.store";
import { MenuItem } from "common";
import { ModuleNameMapper } from "../../services/navigation/module-name-mapper/module-name-mapper.service";
import { ModuleNavigation } from "../../services/navigation/module-navigation/module-navigation.service";
import { LanguageListStringMap, LanguageStore } from "../../store/language/language.store";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import * as i0 from "@angular/core";
export declare class SidebarComponent implements OnInit, OnDestroy {
    protected appStateStore: AppStateStore;
    protected navigationStore: NavigationStore;
    protected moduleNameMapper: ModuleNameMapper;
    protected moduleNavigation: ModuleNavigation;
    protected language: LanguageStore;
    searchBarComponent: SearchBarComponent;
    isSidebarVisible: boolean;
    menuItems: MenuItem[];
    displayedItems: WritableSignal<MenuItem[]>;
    protected subs: Subscription[];
    constructor(appStateStore: AppStateStore, navigationStore: NavigationStore, moduleNameMapper: ModuleNameMapper, moduleNavigation: ModuleNavigation, language: LanguageStore);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setMenuItems(modules: NavbarModuleMap, tabs: string[], appListStrings: LanguageListStringMap): void;
    toggleSidebar(): void;
    closeSidebar(): void;
    search(searchTerm: string): void;
    protected resetMenuItems(): void;
    protected clearFilter(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarComponent, "scrm-sidebar", never, {}, {}, never, never, true, never>;
}
