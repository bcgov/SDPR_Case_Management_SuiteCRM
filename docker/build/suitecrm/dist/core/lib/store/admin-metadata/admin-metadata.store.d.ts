import { BehaviorSubject, Observable } from 'rxjs';
import { AppStateStore } from '../app-state/app-state.store';
import { StateStore } from '../state';
import { ObjectMap } from 'common';
import { AdminMetadata } from './admin-metadata.model';
import * as i0 from "@angular/core";
export declare class AdminMetadataStore implements StateStore {
    protected appStateStore: AppStateStore;
    /**
     * Public long-lived observable streams
     */
    adminPanel$: Observable<ObjectMap>;
    protected store: BehaviorSubject<AdminMetadata>;
    protected state$: Observable<AdminMetadata>;
    constructor(appStateStore: AppStateStore);
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear(): void;
    clearAuthBased(): void;
    /**
     * Returns the currently active admin panel
     *
     * @returns {object} the admin panel
     */
    getAdminPanel(): AdminMetadata;
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
    protected updateState(state: AdminMetadata): void;
    /**
     * Set pre-loaded adminMetadata and cache
     */
    set(adminMetadata: AdminMetadata): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdminMetadataStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AdminMetadataStore>;
}
