import { BehaviorSubject, Observable } from 'rxjs';
import { EntityGQL } from '../../services/api/graphql-api/api.entity.get';
import { StateStore } from '../state';
import { ObjectMap } from 'common';
import { Params } from '@angular/router';
import * as i0 from "@angular/core";
export interface Navigation {
    tabs: string[];
    groupedTabs: GroupedTab[];
    modules: NavbarModuleMap;
    quickActions: ModuleAction[];
    userActionMenu: UserActionMenu[];
    maxTabs: number;
}
export interface NavbarModuleMap {
    [key: string]: NavbarModule;
}
export interface NavbarModule {
    name: string;
    path: string;
    defaultRoute: string;
    labelKey: string;
    menu: ModuleAction[];
}
export interface GroupedTab {
    name: string;
    labelKey: string;
    modules: string[];
}
export interface UserActionMenu {
    name: string;
    labelKey: string;
    url: string;
    icon: string;
}
export interface ModuleAction {
    name: string;
    labelKey: string;
    actionLabelKey?: string;
    label?: string;
    url: string;
    params?: string | Params;
    icon: string;
    module?: string;
    sublinks?: ObjectMap;
    quickAction?: boolean;
    type?: string;
    process?: string;
}
export declare class NavigationStore implements StateStore {
    private recordGQL;
    /**
     * Public long-lived observable streams
     */
    tabs$: Observable<string[]>;
    groupedTabs$: Observable<GroupedTab[]>;
    modules$: Observable<NavbarModuleMap>;
    userActionMenu$: Observable<UserActionMenu[]>;
    maxTabs$: Observable<number>;
    quickActions$: Observable<ModuleAction[]>;
    /**
     * ViewModel that resolves once all the data is ready (or updated)...
     */
    vm$: Observable<Navigation>;
    protected store: BehaviorSubject<Navigation>;
    protected state$: Observable<Navigation>;
    protected resourceName: string;
    protected fieldsMetadata: {
        fields: string[];
    };
    constructor(recordGQL: EntityGQL);
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear(): void;
    clearAuthBased(): void;
    /**
     * Initial Navigation load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @returns {{}} Observable<any>
     */
    load(): Observable<any>;
    /**
     * Check if loaded
     */
    isCached(): boolean;
    /**
     * Set pre-loaded navigation and cache
     */
    set(navigation: Navigation): void;
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {{}} state to set
     */
    protected updateState(state: Navigation): void;
    /**
     * Get Navigation cached Observable or call the backend
     *
     * @returns {{}} Observable<any>
     */
    protected getNavigation(): Observable<any>;
    /**
     * Fetch the Navigation from the backend
     *
     * @param {string} userId to use
     * @returns {{}} Observable<any>
     */
    protected fetch(userId: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavigationStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NavigationStore>;
}
