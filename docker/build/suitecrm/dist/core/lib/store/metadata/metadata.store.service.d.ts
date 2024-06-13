import { BehaviorSubject, Observable } from 'rxjs';
import { EntityGQL } from '../../services/api/graphql-api/api.entity.get';
import { Action, ColumnDefinition, Favorite, FieldDefinitionMap, ListViewMeta, MassUpdateMeta, Panel, RecentlyViewed, SearchMeta, SubPanelMeta, WidgetMetadata, TabDefinitions } from 'common';
import { StateStore } from '../state';
import { AppStateStore } from '../app-state/app-state.store';
import * as i0 from "@angular/core";
export interface SummaryTemplates {
    [key: string]: string;
}
export interface RecordViewMetadata {
    topWidget?: WidgetMetadata;
    sidebarWidgets?: WidgetMetadata[];
    bottomWidgets?: WidgetMetadata[];
    actions?: Action[];
    templateMeta?: RecordTemplateMetadata;
    panels?: Panel[];
    summaryTemplates?: SummaryTemplates;
    vardefs?: FieldDefinitionMap;
}
export interface RecordTemplateMetadata {
    maxColumns: number;
    useTabs: boolean;
    tabDefs: TabDefinitions;
}
export interface Metadata {
    module?: string;
    detailView?: any;
    editView?: any;
    listView?: ListViewMeta;
    search?: SearchMeta;
    recordView?: RecordViewMetadata;
    subPanel?: SubPanelMeta;
    massUpdate?: MassUpdateMeta;
    recentlyViewed?: RecentlyViewed[];
    favorites?: Favorite[];
}
export interface MetadataMap {
    [key: string]: Metadata;
}
export interface MetadataCache {
    [key: string]: Observable<Metadata>;
}
export declare class MetadataStore implements StateStore {
    protected recordGQL: EntityGQL;
    protected appState: AppStateStore;
    /**
     * Public long-lived observable streams
     */
    listViewColumns$: Observable<ColumnDefinition[]>;
    listViewLineActions$: Observable<Action[]>;
    listViewTableActions$: Observable<Action[]>;
    listMetadata$: Observable<ListViewMeta>;
    searchMetadata$: Observable<SearchMeta>;
    recordViewMetadata$: Observable<RecordViewMetadata>;
    metadata$: Observable<Metadata>;
    allModuleMetadata$: Observable<MetadataMap>;
    subPanelMetadata$: Observable<SubPanelMeta>;
    typeKeys: {
        listView: string;
        search: string;
        recordView: string;
        subPanel: string;
        massUpdate: string;
        recentlyViewed: string;
        favorites: string;
    };
    protected store: BehaviorSubject<Metadata>;
    protected state$: Observable<Metadata>;
    protected allModuleStore: BehaviorSubject<MetadataMap>;
    protected allModulesState$: Observable<MetadataMap>;
    protected resourceName: string;
    protected fieldsMetadata: {
        fields: string[];
    };
    protected types: string[];
    protected baseTypes: string[];
    constructor(recordGQL: EntityGQL, appState: AppStateStore);
    /**
     * Clear state
     */
    clear(): void;
    clearAuthBased(): void;
    /**
     * Get all metadata types
     *
     * @returns {string[]} metadata types
     */
    getMetadataTypes(): string[];
    getModule(): string;
    get(): Metadata;
    getModuleMeta(module: string): Metadata;
    setModuleMetadata(module: string, metadata: Metadata): void;
    /**
     * Initial ListViewMeta load if not cached and update state.
     *
     * @param {string} moduleID to fetch
     * @param {string[]} types to fetch
     * @param useCache
     * @returns any data
     */
    reloadModuleMetadata(moduleID: string, types: string[], useCache?: boolean): any;
    /**
     * Initial ListViewMeta load if not cached and update state.
     *
     * @param {string} moduleID to fetch
     * @param {string[]} types to fetch
     * @param useCache
     * @returns any data
     */
    load(moduleID: string, types: string[], useCache?: boolean): Observable<any>;
    /**
     * Check if loaded
     */
    isCached(module: string): boolean;
    /**
     * Get empty Metadata
     */
    getEmpty(): Metadata;
    /**
     * Set pre-loaded navigation and cache
     */
    set(module: string, metadata: Metadata): void;
    /**
     * Get ListViewMeta cached Observable or call the backend
     *
     * @param {string} module to fetch
     * @param {string[]} types to retrieve
     * @param useCache
     * @returns {object} Observable<any>
     */
    getMetadata(module: string, types?: string[], useCache?: boolean): Observable<Metadata>;
    /**
     * Internal API
     */
    mapMetadata(module: string, data: any): Metadata;
    /**
     * Update the state
     *
     * @param {string} module
     * @param {object} state to set
     */
    protected updateState(module: string, state: Metadata): void;
    /**
     * Update the state
     *
     * @param {string} module
     * @param {object} state to set
     */
    protected updateAllModulesState(module: string, state: Metadata): void;
    /**
     * Fetch the Metadata from the backend
     *
     * @param {string} module to fetch
     * @param {string[]} types to retrieve
     * @returns {object} Observable<{}>
     */
    protected fetchMetadata(module: string, types: string[]): Observable<Metadata>;
    protected parseListViewMetadata(data: any, metadata: Metadata): void;
    protected parseSearchMetadata(data: any, metadata: Metadata): void;
    protected parseSubPanelMetadata(data: any, metadata: Metadata): void;
    protected parseMassUpdateMetadata(data: any, metadata: Metadata): void;
    protected parseRecordViewMetadata(data: any, metadata: Metadata): void;
    protected parseRecentlyViewedMetadata(data: any, metadata: Metadata): void;
    protected parseFavoritesMetadata(data: any, metadata: Metadata): void;
    protected addDefinedMeta(metadata: {
        [key: string]: any;
    }, received: {
        [key: string]: any;
    }, keyMap: {
        [key: string]: string;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MetadataStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MetadataStore>;
}
