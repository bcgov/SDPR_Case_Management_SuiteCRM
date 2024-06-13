import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { User } from 'common';
import { StateStore } from '../state';
import { LoadingBufferFactory } from '../../services/ui/loading-buffer/loading-buffer.factory';
import { LoadingBuffer } from '../../services/ui/loading-buffer/loading-buffer.service';
import { SystemConfigStore } from '../system-config/system-config.store';
import * as i0 from "@angular/core";
export interface AppState {
    loading?: boolean;
    initialAppLoading?: boolean;
    module?: string;
    view?: string;
    loaded?: boolean;
    routeUrl?: string;
    preLoginUrl?: string;
    currentUser?: User;
    activeRequests?: number;
    prevRoutes?: string[];
    isSidebarVisible?: boolean;
    activeNavbarDropdown?: number;
}
export declare class AppStateStore implements StateStore {
    protected loadingBufferFactory: LoadingBufferFactory;
    protected configs: SystemConfigStore;
    /**
     * Public long-lived observable streams
     */
    loading$: Observable<boolean>;
    module$: Observable<string>;
    view$: Observable<string>;
    initialAppLoading$: Observable<boolean>;
    activeRequests$: Observable<number>;
    isSidebarVisible$: Observable<boolean>;
    activeNavbarDropdown$: Observable<number>;
    /**
     * ViewModel that resolves once all the data is ready (or updated)...
     */
    vm$: Observable<AppState>;
    protected store: BehaviorSubject<AppState>;
    protected state$: Observable<AppState>;
    protected loadingQueue: {};
    protected loadingBuffer: LoadingBuffer;
    protected subs: Subscription[];
    isTouchScreen: import("@angular/core").WritableSignal<boolean>;
    constructor(loadingBufferFactory: LoadingBufferFactory, configs: SystemConfigStore);
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear(): void;
    clearAuthBased(): void;
    init(): void;
    /**
     * Check if is logged in
     */
    isLoggedIn(): boolean;
    /**
     * Get current user
     */
    getCurrentUser(): User;
    /**
     * Set current user
     * @param user
     */
    setCurrentUser(user: User): void;
    /**
     * On login handlers
     * @protected
     */
    protected onLogin(): void;
    /**
     * On logout handlers
     * @protected
     */
    protected onLogout(): void;
    /**
     * Get number of active requests
     */
    getActiveRequests(): number;
    /**
     * Add active request to counter
     */
    addActiveRequest(): void;
    /**
     * Remove active request to counter
     */
    removeActiveRequest(): void;
    /**
     * Update loading status for given key
     *
     * @param {string} key to update
     * @param {boolean} loading status to set
     * @param {boolean} delay
     */
    updateLoading(key: string, loading: boolean, delay?: boolean): void;
    /**
     * Update loading status for given key
     *
     * @param {boolean} initialAppLoading status to set
     */
    updateInitialAppLoading(initialAppLoading: boolean): void;
    /**
     * Has app been initially loaded
     *
     * @returns {boolean} is loaded
     */
    isLoaded(): boolean;
    /**
     * Set initial app load status
     *
     * @param {string} loaded flag
     */
    setLoaded(loaded: boolean): void;
    /**
     * Set current module
     *
     * @param {string} module to set as current module
     */
    setModule(module: string): void;
    /**
     * Get the current module
     *
     * @returns {string} current view
     */
    getModule(): string;
    /**
     * Set current View
     *
     * @param {string} view to set as current view
     */
    setView(view: string): void;
    /**
     * Get the current view
     *
     * @returns {string} current view
     */
    getView(): string;
    /**
     * Set route url
     *
     * @param {string} routeUrl to set
     */
    setRouteUrl(routeUrl: string): void;
    /**
     * Get the route ulr
     *
     * @returns {string} current route url
     */
    getRouteUrl(): string;
    /**
     * set pre login url
     *
     * @param preLoginUrl
     */
    setPreLoginUrl(preLoginUrl: string): void;
    /**
     * get pre login url
     *
     * @returns string
     */
    getPreLoginUrl(): string;
    /**
     * Internal API
     */
    /**
     * Init loading buffer
     * @protected
     */
    protected initLoadingBuffer(): void;
    /**
     *  Check if there are still active loadings
     *
     *  @returns {boolean} active loading
     */
    protected hasActiveLoading(): boolean;
    /**
     * Remove key from loading queue
     *
     * @param {string} key to remove
     */
    protected removeFromLoadingQueue(key: string): void;
    /**
     * Add key to loading queue
     *
     * @param {string} key to add
     */
    protected addToLoadingQueue(key: string): void;
    /**
     * Update the state
     *
     * @param {{}} state app state
     */
    protected updateState(state: AppState): void;
    toggleSidebar(): void;
    closeSidebar(): void;
    getLatestPrevRoute(): string;
    getPrevRoutes(): string[];
    addToPrevRoute(route: string): void;
    removeLatestPrevRoute(): void;
    removeAllPrevRoutes(): void;
    setActiveDropdown(key: number): void;
    getActiveDropdown(): number;
    resetActiveDropdown(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppStateStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppStateStore>;
}
