import { BehaviorSubject, Observable } from 'rxjs';
import { ColumnDefinition, RecordListMeta, RecordSelection, SearchMeta, SelectionStatus } from 'common';
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { RecordList, RecordListStore } from '../../../../store/record-list/record-list.store';
import { StateStore } from '../../../../store/state';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import * as i0 from "@angular/core";
export declare class RecordListModalStore implements StateStore {
    protected listStoreFactory: RecordListStoreFactory;
    protected meta: MetadataStore;
    protected preferences: UserPreferenceStore;
    module: string;
    parentModule: string;
    recordList: RecordListStore;
    listMetadata$: Observable<RecordListMeta>;
    searchMetadata$: Observable<SearchMeta>;
    selection$: Observable<RecordSelection>;
    selectedCount$: Observable<number>;
    selectedStatus$: Observable<SelectionStatus>;
    columns$: Observable<ColumnDefinition[]>;
    listMetadata: RecordListMeta;
    linkClicked$: Observable<boolean>;
    loading$: Observable<boolean>;
    metadataLoading$: Observable<boolean>;
    protected metadataLoadingState: BehaviorSubject<boolean>;
    protected linkClickedState: BehaviorSubject<boolean>;
    constructor(listStoreFactory: RecordListStoreFactory, meta: MetadataStore, preferences: UserPreferenceStore);
    clear(): void;
    clearAuthBased(): void;
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module name
     * @param {string} parentModule
     */
    init(module: string, parentModule?: string): void;
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordList>
     */
    load(useCache?: boolean): Observable<RecordList>;
    /**
     * Load current sorting
     */
    loadCurrentSort(): void;
    /**
     * Load current sorting
     */
    saveCurrentSort(): void;
    /**
     * Emit Clicked Event
     */
    emitLinkClicked(): void;
    /**
     * Build ui user preference key
     * @param storageKey
     * @protected
     */
    protected getPreferenceKey(storageKey: string): string;
    /**
     * Save ui user preference
     * @param module
     * @param storageKey
     * @param value
     * @protected
     */
    protected savePreference(module: string, storageKey: string, value: any): void;
    /**
     * Load ui user preference
     * @param parentModule
     * @param storageKey
     * @protected
     */
    protected loadPreference(parentModule: string, storageKey: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordListModalStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordListModalStore>;
}
