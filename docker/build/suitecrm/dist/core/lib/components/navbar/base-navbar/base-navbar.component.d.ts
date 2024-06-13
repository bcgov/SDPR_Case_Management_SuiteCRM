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
import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NavbarModel } from '../navbar-model';
import { ActionNameMapper } from '../../../services/navigation/action-name-mapper/action-name-mapper.service';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { ModuleAction, Navigation, NavigationStore } from '../../../store/navigation/navigation.store';
import { UserPreferenceMap, UserPreferenceStore } from '../../../store/user-preference/user-preference.store';
import { ScreenSize, ScreenSizeObserverService } from '../../../services/ui/screen-size-observer/screen-size-observer.service';
import { RouteConverter } from '../../../services/navigation/route-converter/route-converter.service';
import { LanguageStore, LanguageStrings } from '../../../store/language/language.store';
import { ModuleNavigation } from '../../../services/navigation/module-navigation/module-navigation.service';
import { ModuleNameMapper } from '../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { AppState, AppStateStore } from '../../../store/app-state/app-state.store';
import { AuthService } from '../../../services/auth/auth.service';
import { MenuItem, RecentlyViewed } from 'common';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { NotificationStore } from "../../../store/notification/notification.store";
import { GlobalRecentlyViewedStore } from "../../../store/global-recently-viewed/global-recently-viewed.store";
import { GlobalSearch } from "../../../services/navigation/global-search/global-search.service";
import { BreakpointObserver } from "@angular/cdk/layout";
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import * as i0 from "@angular/core";
export declare class BaseNavbarComponent implements OnInit, OnDestroy, AfterViewInit {
    protected navigationStore: NavigationStore;
    protected languageStore: LanguageStore;
    protected userPreferenceStore: UserPreferenceStore;
    protected systemConfigStore: SystemConfigStore;
    protected appState: AppStateStore;
    protected authService: AuthService;
    protected moduleNavigation: ModuleNavigation;
    protected screenSize: ScreenSizeObserverService;
    protected asyncActionService: AsyncActionService;
    protected notificationStore: NotificationStore;
    protected globalRecentlyViewedStore: GlobalRecentlyViewedStore;
    protected globalSearch: GlobalSearch;
    protected breakpointObserver: BreakpointObserver;
    mobileGlobalLinkTitle: ElementRef;
    searchTermRef: SearchBarComponent;
    protected static instances: BaseNavbarComponent[];
    loaded: boolean;
    isUserLoggedIn: boolean;
    mainNavCollapse: boolean;
    subNavCollapse: boolean;
    mobileSubNav: boolean;
    backLink: boolean;
    mainNavLink: boolean;
    submenu: any;
    moduleNameMapper: ModuleNameMapper;
    actionNameMapper: ActionNameMapper;
    routeConverter: RouteConverter;
    navbar: NavbarModel;
    maxTabs: number;
    screen: ScreenSize;
    notificationsEnabled: boolean;
    subs: Subscription[];
    navigation: Navigation;
    mobileNavbar: boolean;
    isSmallScreen: import("@angular/core").WritableSignal<boolean>;
    isTabletScreen: import("@angular/core").WritableSignal<boolean>;
    dropdownLength: number;
    recentlyViewedCount: number;
    currentQuickActions: ModuleAction[];
    isSearchBoxVisible: import("@angular/core").WritableSignal<boolean>;
    languages$: Observable<LanguageStrings>;
    userPreferences$: Observable<UserPreferenceMap>;
    currentUser$: Observable<any>;
    appState$: Observable<AppState>;
    navigation$: Observable<Navigation>;
    recentlyViewed$: Observable<RecentlyViewed[]>;
    notificationCount$: Observable<number>;
    vm$: Observable<{
        navigation: Navigation;
        userPreferences: UserPreferenceMap;
        appState: AppState;
        appStrings: import("../../../store/language/language.store").LanguageStringMap;
        appListStrings: import("../../../store/language/language.store").LanguageListStringMap;
    }>;
    constructor(navigationStore: NavigationStore, languageStore: LanguageStore, userPreferenceStore: UserPreferenceStore, systemConfigStore: SystemConfigStore, appState: AppStateStore, authService: AuthService, moduleNavigation: ModuleNavigation, screenSize: ScreenSizeObserverService, asyncActionService: AsyncActionService, notificationStore: NotificationStore, globalRecentlyViewedStore: GlobalRecentlyViewedStore, globalSearch: GlobalSearch, breakpointObserver: BreakpointObserver);
    /**
     * Public API
     */
    onResize(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    checkAppStrings(appStrings: any): boolean;
    arePreferencesInitialized(preferences: UserPreferenceMap): number;
    markAsRead(): void;
    ngAfterViewInit(): void;
    /**
     * Change subnavigation
     *
     * @param {object} event triggered
     * @param {object} items
     */
    changeSubNav(event: Event, items: MenuItem[]): void;
    /**
     * Set link flags
     */
    navBackLink(): void;
    /**
     * Get home page
     *
     * @returns {string} homepage
     */
    getHomePage(): string;
    /**
     * Internal API
     */
    /**
     * Set navbar model
     *
     * @param {object} navbar model
     */
    protected setNavbar(navbar: NavbarModel): void;
    /**
     * Check if is loaded
     *
     * @returns {{boolean}} is loaded
     */
    protected isLoaded(): boolean;
    protected calculateMaxTabs(navigation: Navigation): void;
    getModuleQuickActions(module: string): void;
    handleProcess(action: ModuleAction): void;
    openSearchBox(): void;
    closeSearchBox(isVisible: boolean): void;
    search(searchTerm: string): void;
    toggleSidebar(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseNavbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseNavbarComponent, "scrm-base-navbar", never, {}, {}, never, never, false, never>;
}
