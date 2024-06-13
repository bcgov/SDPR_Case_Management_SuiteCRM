import { BehaviorSubject, Observable } from 'rxjs';
import { EntityGQL } from '../../services/api/graphql-api/api.entity.get';
import { AppStateStore } from '../app-state/app-state.store';
import { StateStore } from '../state';
import { SvgIconRegistryService } from 'angular-svg-icon';
import * as i0 from "@angular/core";
export interface ThemeImage {
    path: string;
    name: string;
    type: string;
    content?: string;
}
export interface ThemeImages {
    theme: string;
    images: ThemeImageMap;
}
export interface ThemeImageMap {
    [key: string]: ThemeImage;
}
export declare class ThemeImagesStore implements StateStore {
    protected recordGQL: EntityGQL;
    protected appStateStore: AppStateStore;
    protected iconRegistry: SvgIconRegistryService;
    /**
     * Public long-lived observable streams
     */
    images$: Observable<ThemeImageMap>;
    protected store: BehaviorSubject<ThemeImages>;
    protected state$: Observable<ThemeImages>;
    protected resourceName: string;
    protected frontendName: string;
    protected fieldsMetadata: {
        fields: string[];
    };
    constructor(recordGQL: EntityGQL, appStateStore: AppStateStore, iconRegistry: SvgIconRegistryService);
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear(): void;
    clearAuthBased(): void;
    /**
     * Change the current theme
     *
     * @param {string} theme to set
     */
    changeTheme(theme: string): void;
    /**
     * Returns the currently active image theme
     *
     * @returns {string} the theme
     */
    getTheme(): string;
    /**
     * Initial ThemeImages load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} theme to load
     * @returns {object} Observable<any>
     */
    load(theme: string): Observable<any>;
    /**
     * Check if loaded
     */
    isCached(): boolean;
    /**
     * Set pre-loaded theme images and cache
     */
    set(theme: string, images: ThemeImageMap): void;
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: ThemeImages): void;
    /**
     * Get theme images cached Observable or call the backend
     *
     * @param {string} theme to retrieve
     * @returns {object} Observable<any>
     */
    protected getThemeImages(theme: string): Observable<any>;
    protected registerSvgs(images: ThemeImageMap): void;
    /**
     * Fetch the theme images from the backend
     *
     * @param {string} theme to load
     * @returns {object} Observable<any>
     */
    protected fetch(theme: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeImagesStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemeImagesStore>;
}
