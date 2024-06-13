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
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, combineLatestWith } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { deepClone, isVoid } from 'common';
import { LoadingBufferFactory } from '../../services/ui/loading-buffer/loading-buffer.factory';
import { SystemConfigStore } from '../system-config/system-config.store';
import * as i0 from "@angular/core";
import * as i1 from "../../services/ui/loading-buffer/loading-buffer.factory";
import * as i2 from "../system-config/system-config.store";
const initialState = {
    loading: false,
    initialAppLoading: true,
    module: null,
    view: null,
    loaded: false,
    routeUrl: null,
    preLoginUrl: null,
    currentUser: null,
    activeRequests: 0,
    prevRoutes: [],
    isSidebarVisible: false,
    activeNavbarDropdown: 0
};
let internalState = deepClone(initialState);
class AppStateStore {
    constructor(loadingBufferFactory, configs) {
        this.loadingBufferFactory = loadingBufferFactory;
        this.configs = configs;
        this.store = new BehaviorSubject(internalState);
        this.state$ = this.store.asObservable();
        this.loadingQueue = {};
        this.subs = [];
        this.isTouchScreen = signal(false);
        this.loading$ = this.state$.pipe(map(state => state.loading), distinctUntilChanged());
        this.module$ = this.state$.pipe(map(state => state.module), distinctUntilChanged());
        this.view$ = this.state$.pipe(map(state => state.view), distinctUntilChanged());
        this.initialAppLoading$ = this.state$.pipe(map(state => state.initialAppLoading), distinctUntilChanged());
        this.activeRequests$ = this.state$.pipe(map(state => state.activeRequests), distinctUntilChanged());
        this.isSidebarVisible$ = this.state$.pipe(map(state => state.isSidebarVisible), distinctUntilChanged());
        this.activeNavbarDropdown$ = this.state$.pipe(map(state => state.activeNavbarDropdown), distinctUntilChanged());
        this.vm$ = this.loading$.pipe(combineLatestWith(this.module$, this.view$, this.initialAppLoading$), map(([loading, module, view, initialAppLoading]) => ({
            loading,
            module,
            view,
            loaded: internalState.loaded,
            initialAppLoading,
            isSidebarVisible: internalState.isSidebarVisible,
            activeNavbarDropdown: internalState.activeNavbarDropdown
        })));
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            this.isTouchScreen.set(true);
        }
        else {
            this.isTouchScreen.set(false);
        }
    }
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear() {
        this.loadingQueue = {};
        this.updateState(deepClone(initialState));
        this.subs.forEach(sub => sub.unsubscribe());
    }
    clearAuthBased() {
    }
    init() {
        this.initLoadingBuffer();
    }
    /**
     * Check if is logged in
     */
    isLoggedIn() {
        return !!(internalState.currentUser ?? false);
    }
    /**
     * Get current user
     */
    getCurrentUser() {
        return internalState.currentUser;
    }
    /**
     * Set current user
     * @param user
     */
    setCurrentUser(user) {
        if (!isVoid(user)) {
            this.onLogin();
        }
        else {
            this.onLogout();
        }
        this.updateState({ ...internalState, currentUser: user });
    }
    /**
     * On login handlers
     * @protected
     */
    onLogin() {
    }
    /**
     * On logout handlers
     * @protected
     */
    onLogout() {
        this.updateState({ ...internalState, preLoginUrl: null });
    }
    /**
     * Get number of active requests
     */
    getActiveRequests() {
        return internalState.activeRequests;
    }
    /**
     * Add active request to counter
     */
    addActiveRequest() {
        let activeRequests = internalState.activeRequests;
        if (isVoid(activeRequests)) {
            activeRequests = 0;
        }
        activeRequests++;
        this.updateState({ ...internalState, activeRequests });
    }
    /**
     * Remove active request to counter
     */
    removeActiveRequest() {
        let activeRequests = internalState.activeRequests;
        if (isVoid(activeRequests)) {
            activeRequests = 0;
        }
        else {
            activeRequests--;
        }
        if (activeRequests < 0) {
            activeRequests = 0;
        }
        this.updateState({ ...internalState, activeRequests });
    }
    /**
     * Update loading status for given key
     *
     * @param {string} key to update
     * @param {boolean} loading status to set
     * @param {boolean} delay
     */
    updateLoading(key, loading, delay = true) {
        this.initLoadingBuffer();
        if (loading === true) {
            this.addToLoadingQueue(key);
            this.loadingBuffer.updateLoading(loading);
            if (!delay) {
                this.updateState({ ...internalState, loading });
            }
            return;
        }
        this.removeFromLoadingQueue(key);
        if (this.hasActiveLoading()) {
            this.loadingBuffer.updateLoading(loading);
            this.updateState({ ...internalState, loading });
        }
    }
    /**
     * Update loading status for given key
     *
     * @param {boolean} initialAppLoading status to set
     */
    updateInitialAppLoading(initialAppLoading) {
        this.updateState({ ...internalState, initialAppLoading });
    }
    /**
     * Has app been initially loaded
     *
     * @returns {boolean} is loaded
     */
    isLoaded() {
        return internalState.loaded;
    }
    /**
     * Set initial app load status
     *
     * @param {string} loaded flag
     */
    setLoaded(loaded) {
        this.updateState({ ...internalState, loaded });
    }
    /**
     * Set current module
     *
     * @param {string} module to set as current module
     */
    setModule(module) {
        this.updateState({ ...internalState, module });
    }
    /**
     * Get the current module
     *
     * @returns {string} current view
     */
    getModule() {
        return internalState?.module ?? '';
    }
    /**
     * Set current View
     *
     * @param {string} view to set as current view
     */
    setView(view) {
        this.updateState({ ...internalState, view });
    }
    /**
     * Get the current view
     *
     * @returns {string} current view
     */
    getView() {
        return internalState.view;
    }
    /**
     * Set route url
     *
     * @param {string} routeUrl to set
     */
    setRouteUrl(routeUrl) {
        this.updateState({ ...internalState, routeUrl });
    }
    /**
     * Get the route ulr
     *
     * @returns {string} current route url
     */
    getRouteUrl() {
        return internalState.routeUrl;
    }
    /**
     * set pre login url
     *
     * @param preLoginUrl
     */
    setPreLoginUrl(preLoginUrl) {
        this.updateState({ ...internalState, preLoginUrl });
    }
    /**
     * get pre login url
     *
     * @returns string
     */
    getPreLoginUrl() {
        return internalState.preLoginUrl ?? '';
    }
    /**
     * Internal API
     */
    /**
     * Init loading buffer
     * @protected
     */
    initLoadingBuffer() {
        if (!this.loadingBuffer) {
            this.loadingBuffer = this.loadingBufferFactory.create();
            this.subs.push(this.loadingBuffer.loading$.subscribe((loading) => {
                this.updateState({ ...internalState, loading });
            }));
        }
    }
    /**
     *  Check if there are still active loadings
     *
     *  @returns {boolean} active loading
     */
    hasActiveLoading() {
        return Object.keys(this.loadingQueue).length < 1;
    }
    /**
     * Remove key from loading queue
     *
     * @param {string} key to remove
     */
    removeFromLoadingQueue(key) {
        if (this.loadingQueue[key]) {
            delete this.loadingQueue[key];
        }
    }
    /**
     * Add key to loading queue
     *
     * @param {string} key to add
     */
    addToLoadingQueue(key) {
        this.loadingQueue[key] = true;
    }
    /**
     * Update the state
     *
     * @param {{}} state app state
     */
    updateState(state) {
        this.store.next(internalState = state);
    }
    toggleSidebar() {
        this.updateState({ ...internalState, isSidebarVisible: !internalState.isSidebarVisible });
    }
    closeSidebar() {
        this.updateState({ ...internalState, isSidebarVisible: false });
    }
    getLatestPrevRoute() {
        return internalState.prevRoutes[internalState.prevRoutes.length - 2];
    }
    getPrevRoutes() {
        return internalState.prevRoutes;
    }
    addToPrevRoute(route) {
        const prevRoutes = this.getPrevRoutes();
        if (prevRoutes.length > 0 && prevRoutes[prevRoutes.length - 1] === route) {
            return;
        }
        prevRoutes.push(route);
        this.updateState({ ...internalState });
    }
    removeLatestPrevRoute() {
        const prevRoutes = this.getPrevRoutes();
        const newArr = prevRoutes.slice(0, prevRoutes.length - 1);
        this.updateState({ ...internalState, prevRoutes: newArr });
    }
    removeAllPrevRoutes() {
        this.updateState({ ...internalState, prevRoutes: [] });
    }
    setActiveDropdown(key) {
        this.updateState({ ...internalState, activeNavbarDropdown: key });
    }
    getActiveDropdown() {
        return internalState.activeNavbarDropdown;
    }
    resetActiveDropdown() {
        this.updateState({ ...internalState, activeNavbarDropdown: 0 });
    }
    static { this.ɵfac = function AppStateStore_Factory(t) { return new (t || AppStateStore)(i0.ɵɵinject(i1.LoadingBufferFactory), i0.ɵɵinject(i2.SystemConfigStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppStateStore, factory: AppStateStore.ɵfac, providedIn: 'root' }); }
}
export { AppStateStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppStateStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.LoadingBufferFactory }, { type: i2.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN0YXRlLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxlQUFlLEVBQUUsaUJBQWlCLEVBQTJCLE1BQU0sTUFBTSxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBTyxNQUFNLFFBQVEsQ0FBQztBQUUvQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUU3RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQWlCdkUsTUFBTSxZQUFZLEdBQWE7SUFDM0IsT0FBTyxFQUFFLEtBQUs7SUFDZCxpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLE1BQU0sRUFBRSxJQUFJO0lBQ1osSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsS0FBSztJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsV0FBVyxFQUFFLElBQUk7SUFDakIsV0FBVyxFQUFFLElBQUk7SUFDakIsY0FBYyxFQUFFLENBQUM7SUFDakIsVUFBVSxFQUFFLEVBQUU7SUFDZCxnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLG9CQUFvQixFQUFFLENBQUM7Q0FDMUIsQ0FBQztBQUVGLElBQUksYUFBYSxHQUFhLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV0RCxNQUdhLGFBQWE7SUEwQnRCLFlBQ2Msb0JBQTBDLEVBQzFDLE9BQTBCO1FBRDFCLHlCQUFvQixHQUFw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LEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEdBQUcsYUFBYSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxtQkFBbUI7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUMsR0FBRyxhQUFhLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLGlCQUFpQixDQUFDLEdBQVc7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLEdBQUcsYUFBYSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLGlCQUFpQjtRQUNwQixPQUFPLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztJQUM5QyxDQUFDO0lBRU0sbUJBQW1CO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxHQUFHLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7OEVBcFlRLGFBQWE7dUVBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlYsTUFBTTs7U0FFVCxhQUFhO3VGQUFiLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGUsIHNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7ZGVlcENsb25lLCBpc1ZvaWQsIFVzZXJ9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1N0YXRlU3RvcmV9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7TG9hZGluZ0J1ZmZlckZhY3Rvcnl9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VpL2xvYWRpbmctYnVmZmVyL2xvYWRpbmctYnVmZmVyLmZhY3RvcnknO1xuaW1wb3J0IHtMb2FkaW5nQnVmZmVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91aS9sb2FkaW5nLWJ1ZmZlci9sb2FkaW5nLWJ1ZmZlci5zZXJ2aWNlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xuICAgIGxvYWRpbmc/OiBib29sZWFuO1xuICAgIGluaXRpYWxBcHBMb2FkaW5nPzogYm9vbGVhbjtcbiAgICBtb2R1bGU/OiBzdHJpbmc7XG4gICAgdmlldz86IHN0cmluZztcbiAgICBsb2FkZWQ/OiBib29sZWFuO1xuICAgIHJvdXRlVXJsPzogc3RyaW5nO1xuICAgIHByZUxvZ2luVXJsPzogc3RyaW5nO1xuICAgIGN1cnJlbnRVc2VyPzogVXNlcjtcbiAgICBhY3RpdmVSZXF1ZXN0cz86IG51bWJlcjtcbiAgICBwcmV2Um91dGVzPzogc3RyaW5nW107XG4gICAgaXNTaWRlYmFyVmlzaWJsZT86IGJvb2xlYW47XG4gICAgYWN0aXZlTmF2YmFyRHJvcGRvd24/OiBudW1iZXI7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogQXBwU3RhdGUgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgaW5pdGlhbEFwcExvYWRpbmc6IHRydWUsXG4gICAgbW9kdWxlOiBudWxsLFxuICAgIHZpZXc6IG51bGwsXG4gICAgbG9hZGVkOiBmYWxzZSxcbiAgICByb3V0ZVVybDogbnVsbCxcbiAgICBwcmVMb2dpblVybDogbnVsbCxcbiAgICBjdXJyZW50VXNlcjogbnVsbCxcbiAgICBhY3RpdmVSZXF1ZXN0czogMCxcbiAgICBwcmV2Um91dGVzOiBbXSxcbiAgICBpc1NpZGViYXJWaXNpYmxlOiBmYWxzZSxcbiAgICBhY3RpdmVOYXZiYXJEcm9wZG93bjogMFxufTtcblxubGV0IGludGVybmFsU3RhdGU6IEFwcFN0YXRlID0gZGVlcENsb25lKGluaXRpYWxTdGF0ZSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFwcFN0YXRlU3RvcmUgaW1wbGVtZW50cyBTdGF0ZVN0b3JlIHtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBsb25nLWxpdmVkIG9ic2VydmFibGUgc3RyZWFtc1xuICAgICAqL1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIG1vZHVsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICB2aWV3JDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIGluaXRpYWxBcHBMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBhY3RpdmVSZXF1ZXN0cyQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBpc1NpZGViYXJWaXNpYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBhY3RpdmVOYXZiYXJEcm9wZG93biQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICAgIC8qKlxuICAgICAqIFZpZXdNb2RlbCB0aGF0IHJlc29sdmVzIG9uY2UgYWxsIHRoZSBkYXRhIGlzIHJlYWR5IChvciB1cGRhdGVkKS4uLlxuICAgICAqL1xuICAgIHZtJDogT2JzZXJ2YWJsZTxBcHBTdGF0ZT47XG5cbiAgICBwcm90ZWN0ZWQgc3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFwcFN0YXRlPihpbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgbG9hZGluZ1F1ZXVlID0ge307XG4gICAgcHJvdGVjdGVkIGxvYWRpbmdCdWZmZXI6IExvYWRpbmdCdWZmZXI7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBpc1RvdWNoU2NyZWVuID0gc2lnbmFsPGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbG9hZGluZ0J1ZmZlckZhY3Rvcnk6IExvYWRpbmdCdWZmZXJGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmVcbiAgICApIHtcblxuICAgICAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubG9hZGluZyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLm1vZHVsZSQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5tb2R1bGUpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy52aWV3JCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnZpZXcpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5pbml0aWFsQXBwTG9hZGluZyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5pbml0aWFsQXBwTG9hZGluZyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmFjdGl2ZVJlcXVlc3RzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmFjdGl2ZVJlcXVlc3RzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuaXNTaWRlYmFyVmlzaWJsZSQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5pc1NpZGViYXJWaXNpYmxlKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuYWN0aXZlTmF2YmFyRHJvcGRvd24kID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuYWN0aXZlTmF2YmFyRHJvcGRvd24pLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcblxuICAgICAgICB0aGlzLnZtJCA9IHRoaXMubG9hZGluZyQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMubW9kdWxlJCwgdGhpcy52aWV3JCwgdGhpcy5pbml0aWFsQXBwTG9hZGluZyQpLFxuICAgICAgICAgICAgbWFwKChbbG9hZGluZywgbW9kdWxlLCB2aWV3LCBpbml0aWFsQXBwTG9hZGluZ10pID0+ICh7XG4gICAgICAgICAgICAgICAgbG9hZGluZyxcbiAgICAgICAgICAgICAgICBtb2R1bGUsXG4gICAgICAgICAgICAgICAgdmlldyxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGludGVybmFsU3RhdGUubG9hZGVkLFxuICAgICAgICAgICAgICAgIGluaXRpYWxBcHBMb2FkaW5nLFxuICAgICAgICAgICAgICAgIGlzU2lkZWJhclZpc2libGU6IGludGVybmFsU3RhdGUuaXNTaWRlYmFyVmlzaWJsZSxcbiAgICAgICAgICAgICAgICBhY3RpdmVOYXZiYXJEcm9wZG93bjogaW50ZXJuYWxTdGF0ZS5hY3RpdmVOYXZiYXJEcm9wZG93blxuXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgKTtcblxuICAgICAgICBpZignb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pc1RvdWNoU2NyZWVuLnNldCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNUb3VjaFNjcmVlbi5zZXQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFwaVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9hZGluZ1F1ZXVlID0ge307XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0TG9hZGluZ0J1ZmZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGlzIGxvZ2dlZCBpblxuICAgICAqL1xuICAgIGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIShpbnRlcm5hbFN0YXRlLmN1cnJlbnRVc2VyID8/IGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCB1c2VyXG4gICAgICovXG4gICAgZ2V0Q3VycmVudFVzZXIoKTogVXNlciB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmN1cnJlbnRVc2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjdXJyZW50IHVzZXJcbiAgICAgKiBAcGFyYW0gdXNlclxuICAgICAqL1xuICAgIHNldEN1cnJlbnRVc2VyKHVzZXI6IFVzZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpc1ZvaWQodXNlcikpIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2dpbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbkxvZ291dCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGN1cnJlbnRVc2VyOiB1c2VyfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gbG9naW4gaGFuZGxlcnNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uTG9naW4oKTogdm9pZCB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gbG9nb3V0IGhhbmRsZXJzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbkxvZ291dCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgcHJlTG9naW5Vcmw6IG51bGx9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbnVtYmVyIG9mIGFjdGl2ZSByZXF1ZXN0c1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBY3RpdmVSZXF1ZXN0cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5hY3RpdmVSZXF1ZXN0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYWN0aXZlIHJlcXVlc3QgdG8gY291bnRlclxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRBY3RpdmVSZXF1ZXN0KCk6IHZvaWQge1xuICAgICAgICBsZXQgYWN0aXZlUmVxdWVzdHMgPSBpbnRlcm5hbFN0YXRlLmFjdGl2ZVJlcXVlc3RzO1xuICAgICAgICBpZiAoaXNWb2lkKGFjdGl2ZVJlcXVlc3RzKSkge1xuICAgICAgICAgICAgYWN0aXZlUmVxdWVzdHMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2ZVJlcXVlc3RzKys7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgYWN0aXZlUmVxdWVzdHN9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWN0aXZlIHJlcXVlc3QgdG8gY291bnRlclxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVBY3RpdmVSZXF1ZXN0KCk6IHZvaWQge1xuICAgICAgICBsZXQgYWN0aXZlUmVxdWVzdHMgPSBpbnRlcm5hbFN0YXRlLmFjdGl2ZVJlcXVlc3RzO1xuICAgICAgICBpZiAoaXNWb2lkKGFjdGl2ZVJlcXVlc3RzKSkge1xuICAgICAgICAgICAgYWN0aXZlUmVxdWVzdHMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlUmVxdWVzdHMtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmVSZXF1ZXN0cyA8IDApIHtcbiAgICAgICAgICAgIGFjdGl2ZVJlcXVlc3RzID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGFjdGl2ZVJlcXVlc3RzfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGxvYWRpbmcgc3RhdHVzIGZvciBnaXZlbiBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nIHN0YXR1cyB0byBzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRlbGF5XG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUxvYWRpbmcoa2V5OiBzdHJpbmcsIGxvYWRpbmc6IGJvb2xlYW4sIGRlbGF5ID0gdHJ1ZSk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuaW5pdExvYWRpbmdCdWZmZXIoKTtcblxuICAgICAgICBpZiAobG9hZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5hZGRUb0xvYWRpbmdRdWV1ZShrZXkpO1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdCdWZmZXIudXBkYXRlTG9hZGluZyhsb2FkaW5nKTtcbiAgICAgICAgICAgIGlmICghZGVsYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBsb2FkaW5nfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbUxvYWRpbmdRdWV1ZShrZXkpO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc0FjdGl2ZUxvYWRpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nQnVmZmVyLnVwZGF0ZUxvYWRpbmcobG9hZGluZyk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBsb2FkaW5nfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgbG9hZGluZyBzdGF0dXMgZm9yIGdpdmVuIGtleVxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpbml0aWFsQXBwTG9hZGluZyBzdGF0dXMgdG8gc2V0XG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUluaXRpYWxBcHBMb2FkaW5nKGluaXRpYWxBcHBMb2FkaW5nOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGluaXRpYWxBcHBMb2FkaW5nfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFzIGFwcCBiZWVuIGluaXRpYWxseSBsb2FkZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBpcyBsb2FkZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmxvYWRlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgaW5pdGlhbCBhcHAgbG9hZCBzdGF0dXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2FkZWQgZmxhZ1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXRMb2FkZWQobG9hZGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGxvYWRlZH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjdXJyZW50IG1vZHVsZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0byBzZXQgYXMgY3VycmVudCBtb2R1bGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TW9kdWxlKG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIG1vZHVsZX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBtb2R1bGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGN1cnJlbnQgdmlld1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRNb2R1bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGU/Lm1vZHVsZSA/PyAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY3VycmVudCBWaWV3XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmlldyB0byBzZXQgYXMgY3VycmVudCB2aWV3XG4gICAgICovXG4gICAgcHVibGljIHNldFZpZXcodmlldzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIHZpZXd9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgdmlld1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gY3VycmVudCB2aWV3XG4gICAgICovXG4gICAgcHVibGljIGdldFZpZXcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGUudmlldztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcm91dGUgdXJsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcm91dGVVcmwgdG8gc2V0XG4gICAgICovXG4gICAgcHVibGljIHNldFJvdXRlVXJsKHJvdXRlVXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgcm91dGVVcmx9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHJvdXRlIHVsclxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gY3VycmVudCByb3V0ZSB1cmxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Um91dGVVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGUucm91dGVVcmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2V0IHByZSBsb2dpbiB1cmxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcmVMb2dpblVybFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRQcmVMb2dpblVybChwcmVMb2dpblVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIHByZUxvZ2luVXJsfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHByZSBsb2dpbiB1cmxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQcmVMb2dpblVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5wcmVMb2dpblVybCA/PyAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEluaXQgbG9hZGluZyBidWZmZXJcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRMb2FkaW5nQnVmZmVyKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMubG9hZGluZ0J1ZmZlcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nQnVmZmVyID0gdGhpcy5sb2FkaW5nQnVmZmVyRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMubG9hZGluZ0J1ZmZlci5sb2FkaW5nJC5zdWJzY3JpYmUoKGxvYWRpbmcpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBsb2FkaW5nfSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQ2hlY2sgaWYgdGhlcmUgYXJlIHN0aWxsIGFjdGl2ZSBsb2FkaW5nc1xuICAgICAqXG4gICAgICogIEByZXR1cm5zIHtib29sZWFufSBhY3RpdmUgbG9hZGluZ1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBoYXNBY3RpdmVMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5sb2FkaW5nUXVldWUpLmxlbmd0aCA8IDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGtleSBmcm9tIGxvYWRpbmcgcXVldWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gcmVtb3ZlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlbW92ZUZyb21Mb2FkaW5nUXVldWUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1F1ZXVlW2tleV0pIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmxvYWRpbmdRdWV1ZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGtleSB0byBsb2FkaW5nIHF1ZXVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGFkZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGRUb0xvYWRpbmdRdWV1ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvYWRpbmdRdWV1ZVtrZXldID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3t9fSBzdGF0ZSBhcHAgc3RhdGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IEFwcFN0YXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dChpbnRlcm5hbFN0YXRlID0gc3RhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVTaWRlYmFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBpc1NpZGViYXJWaXNpYmxlOiAhaW50ZXJuYWxTdGF0ZS5pc1NpZGViYXJWaXNpYmxlfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlU2lkZWJhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgaXNTaWRlYmFyVmlzaWJsZTogZmFsc2V9KTtcbiAgICB9XG4gICAgZ2V0TGF0ZXN0UHJldlJvdXRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLnByZXZSb3V0ZXNbaW50ZXJuYWxTdGF0ZS5wcmV2Um91dGVzLmxlbmd0aCAtIDJdO1xuICAgIH1cblxuICAgIGdldFByZXZSb3V0ZXMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5wcmV2Um91dGVzO1xuICAgIH1cblxuICAgIGFkZFRvUHJldlJvdXRlKHJvdXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcHJldlJvdXRlcyA9IHRoaXMuZ2V0UHJldlJvdXRlcygpO1xuICAgICAgICBpZihwcmV2Um91dGVzLmxlbmd0aCA+IDAgJiYgcHJldlJvdXRlc1twcmV2Um91dGVzLmxlbmd0aCAtIDFdID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByZXZSb3V0ZXMucHVzaChyb3V0ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGV9KTtcbiAgICB9XG5cbiAgICByZW1vdmVMYXRlc3RQcmV2Um91dGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHByZXZSb3V0ZXMgPSB0aGlzLmdldFByZXZSb3V0ZXMoKTtcbiAgICAgICAgY29uc3QgbmV3QXJyID0gcHJldlJvdXRlcy5zbGljZSgwLCBwcmV2Um91dGVzLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBwcmV2Um91dGVzOiBuZXdBcnJ9KTtcbiAgICB9XG5cbiAgICByZW1vdmVBbGxQcmV2Um91dGVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBwcmV2Um91dGVzOiBbXX0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRBY3RpdmVEcm9wZG93bihrZXk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBhY3RpdmVOYXZiYXJEcm9wZG93bjoga2V5fSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEFjdGl2ZURyb3Bkb3duKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmFjdGl2ZU5hdmJhckRyb3Bkb3duO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldEFjdGl2ZURyb3Bkb3duKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBhY3RpdmVOYXZiYXJEcm9wZG93bjogMH0pO1xuICAgIH1cbn1cbiJdfQ==