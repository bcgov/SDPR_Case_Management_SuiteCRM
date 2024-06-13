import { BehaviorSubject, Observable } from 'rxjs';
import { StateStore } from '../state';
import { GlobalRecentlyViewed, RecentlyViewed } from 'common';
import * as i0 from "@angular/core";
export declare class GlobalRecentlyViewedStore implements StateStore {
    /**
     * Public long-lived observable streams
     */
    globalRecentlyViewed$: Observable<RecentlyViewed[]>;
    protected store: BehaviorSubject<GlobalRecentlyViewed>;
    protected state$: Observable<GlobalRecentlyViewed>;
    constructor();
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear(): void;
    clearAuthBased(): void;
    /**
     * Returns the currently active globalRecentlyViewedMetadata
     *
     * @returns {object} the globalRecentlyViewedMetadata
     */
    getGlobalRecentlyViewed(): RecentlyViewed[];
    /**
     * Check if loaded
     */
    isCached(): boolean;
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: GlobalRecentlyViewed): void;
    /**
     * Set pre-loaded globalRecentlyViewedMetadata and cache
     */
    set(globalRecentlyViewedMetadata: RecentlyViewed[]): void;
    addToState(data: RecentlyViewed): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalRecentlyViewedStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GlobalRecentlyViewedStore>;
}
