import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Action, Field, Record, ViewContext, ViewFieldDefinition, ViewMode } from 'common';
import { InstallViewMetadata, InstallViewModel, InstallViewState } from './install-view.store.model';
import { StateStore } from '../../../../store/state';
import { RecordSaveGQL } from '../../../../store/record/graphql/api.record.save';
import { MessageService } from '../../../../services/message/message.service';
import { RecordManager } from '../../../../services/record/record.manager';
import { RecordStore } from '../../../../store/record/record.store';
import { RecordFetchGQL } from '../../../../store/record/graphql/api.record.get';
import { Params } from '@angular/router';
import { RecordStoreFactory } from '../../../../store/record/record.store.factory';
import { LanguageStore } from '../../../../store/language/language.store';
import * as i0 from "@angular/core";
export declare class InstallViewStore implements StateStore {
    protected recordFetchGQL: RecordFetchGQL;
    protected recordSaveGQL: RecordSaveGQL;
    protected message: MessageService;
    protected recordManager: RecordManager;
    protected recordStoreFactory: RecordStoreFactory;
    protected language: LanguageStore;
    /**
     * Public long-lived observable streams
     */
    record$: Observable<Record>;
    stagingRecord$: Observable<Record>;
    loading$: Observable<boolean>;
    mode$: Observable<ViewMode>;
    viewContext$: Observable<ViewContext>;
    /**
     * View-model that resolves once all the data is ready (or updated).
     */
    vm$: Observable<InstallViewModel>;
    vm: InstallViewModel;
    recordStore: RecordStore;
    url: string;
    /** Internal Properties */
    protected cache$: Observable<any>;
    protected internalState: InstallViewState;
    protected store: BehaviorSubject<InstallViewState>;
    protected state$: Observable<InstallViewState>;
    protected subs: Subscription[];
    constructor(recordFetchGQL: RecordFetchGQL, recordSaveGQL: RecordSaveGQL, message: MessageService, recordManager: RecordManager, recordStoreFactory: RecordStoreFactory, language: LanguageStore);
    get params(): {
        [key: string]: string;
    };
    set params(params: {
        [key: string]: string;
    });
    getViewContext(): ViewContext;
    getActions(): Observable<Action[]>;
    /**
     * Initial install view
     *
     * @param {string} mode to use
     * @param {object} params to set
     */
    init(mode?: ViewMode, params?: Params): void;
    /**
     * Clear observable cache
     */
    clear(): void;
    /**
     * Clear
     */
    clearAuthBased(): void;
    /**
     * Get staging record
     *
     * @returns {string} ViewMode
     */
    getBaseRecord(): Record;
    /**
     * Get current view mode
     *
     * @returns {string} ViewMode
     */
    getMode(): ViewMode;
    /**
     * Set new mode
     *
     * @param {string} mode ViewMode
     */
    setMode(mode: ViewMode): void;
    getLicenseText(): string;
    getMetadata(): InstallViewMetadata;
    getMetadata$(): Observable<InstallViewMetadata>;
    getModuleName(): string;
    /**
     * Parse query params
     *
     * @param {object} params to set
     */
    protected parseParams(params?: Params): void;
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: InstallViewState): void;
    getIgnoreSystemChecksField(): Field;
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    protected getViewFieldsObservable(): Observable<ViewFieldDefinition[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<InstallViewStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InstallViewStore>;
}
