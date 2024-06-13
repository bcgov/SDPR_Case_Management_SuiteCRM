import { StateStore } from '../../../../store/state';
import { ButtonInterface, DropdownButtonInterface, Field, SearchMetaFieldMap, ViewMode } from 'common';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { FilterConfig } from '../../components/list-filter/list-filter.model';
import { MessageService } from '../../../../services/message/message.service';
import { SaveFilterStoreFactory } from '../saved-filter/saved-filter.store.factory';
import { SavedFilterStore } from '../saved-filter/saved-filter.store';
import { SavedFilter } from '../../../../store/saved-filters/saved-filter.model';
import * as i0 from "@angular/core";
export declare class ListFilterStore implements StateStore {
    protected message: MessageService;
    protected savedFilterStoreFactory: SaveFilterStoreFactory;
    config: FilterConfig;
    panelMode: 'collapsible' | 'closable' | 'none';
    mode: ViewMode;
    isCollapsed$: Observable<boolean>;
    closeButton: ButtonInterface;
    myFilterButton: DropdownButtonInterface;
    gridButtons: ButtonInterface[];
    fields: Field[];
    special: Field[];
    vm$: Observable<any>;
    filterStore: SavedFilterStore;
    savedFilters: SavedFilter[];
    displayFields: Field[];
    protected collapse: BehaviorSubject<boolean>;
    protected searchFields: SearchMetaFieldMap;
    protected subs: Subscription[];
    constructor(message: MessageService, savedFilterStoreFactory: SaveFilterStoreFactory);
    init(config: FilterConfig): void;
    clear(): void;
    clearAuthBased(): void;
    /**
     * Reset criteria
     */
    reset(): void;
    /**
     * Apply current filter values
     */
    applyFilter(): void;
    /**
     * Clear the current filter
     */
    clearFilter(): void;
    /**
     * Subscribe to config updates.
     * Each time the filter or metadata changes we need to:
     * - Reset the view state
     * - Re-initialize the filter subscription
     */
    protected initConfigUpdatesSubscription(): void;
    /**
     * Split fields per slots
     *
     * @param {object} savedFilter to use
     */
    protected splitCriteriaFields(savedFilter: SavedFilter): void;
    protected initSearchFields(): void;
    protected initDisplayFields(): void;
    /**
     * Initialize grid buttons
     */
    protected initGridButtons(): void;
    /**
     * Initialize header buttons
     */
    protected initHeaderButtons(): void;
    protected initMyFiltersButton(filters: SavedFilter[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListFilterStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListFilterStore>;
}
