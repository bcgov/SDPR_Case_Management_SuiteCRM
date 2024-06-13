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
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Record, ViewContext, ViewFieldDefinition, ViewMode } from 'common';
import { RecordStore } from '../record/record.store';
import { AppStateStore } from '../app-state/app-state.store';
import { MetadataStore } from '../metadata/metadata.store.service';
import { FieldManager } from '../../services/record/field/field.manager';
import { MessageService } from '../../services/message/message.service';
import { LanguageStore } from '../language/language.store';
import { RecordStoreFactory } from '../record/record.store.factory';
import { StateStore } from '../state';
import { RecordContainerState } from './record-container.store.model';
export declare abstract class BaseRecordContainerStore<M> implements StateStore {
    protected appStateStore: AppStateStore;
    protected meta: MetadataStore;
    protected message: MessageService;
    protected fieldManager: FieldManager;
    protected language: LanguageStore;
    protected storeFactory: RecordStoreFactory;
    /**
     * Public long-lived observable streams
     */
    record$: Observable<Record>;
    stagingRecord$: Observable<Record>;
    loading$: Observable<boolean>;
    mode$: Observable<ViewMode>;
    meta$: Observable<M>;
    /**
     * View-model that resolves once all the data is ready (or updated).
     */
    vm$: Observable<RecordContainerState>;
    recordStore: RecordStore;
    /** Internal Properties */
    protected internalState: RecordContainerState;
    protected metadataState: M;
    protected store: BehaviorSubject<RecordContainerState>;
    protected state$: Observable<RecordContainerState>;
    protected metadataStore: BehaviorSubject<M>;
    protected metadataState$: Observable<M>;
    protected subs: Subscription[];
    constructor(appStateStore: AppStateStore, meta: MetadataStore, message: MessageService, fieldManager: FieldManager, language: LanguageStore, storeFactory: RecordStoreFactory);
    /**
     * Get current module name
     * @returns {string} module
     */
    getModuleName(): string;
    /**
     * Get current record id
     * @returns {string} id
     */
    getRecordId(): string;
    /**
     * Get View Context
     * @returns {object} ViewContext
     */
    getViewContext(): ViewContext;
    /**
     * Initial record load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @param {string} recordId to use
     * @param {string} mode to use
     * @returns {object} Observable<any>
     */
    init(module: string, recordId: string, mode?: ViewMode): Observable<Record>;
    /**
     * Init record
     *
     * @param {object} record to use
     * @param {string} mode to use
     * @param {boolean} loadMetadata to use
     * @returns {object} Observable<any>
     */
    initRecord(record: Record, mode?: ViewMode, loadMetadata?: boolean): void;
    /**
     * Init staging
     * @param {object} record
     */
    initStaging(record: Record): void;
    /**
     * Set Record
     * @param {object} record
     */
    setRecord(record: Record): void;
    /**
     * Set Metadata
     * @param {object} meta
     */
    setMetadata(meta: M): void;
    /**
     * Clean destroy
     */
    destroy(): void;
    /**
     * Clear observable cache
     */
    clear(): void;
    /**
     * Clear observable cache
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
    /**
     * Set loading flag
     *
     * @param {boolean} loading flag
     */
    setDataLoading(loading: boolean): void;
    /**
     * Set loading flag
     *
     * @param {boolean} loading flag
     */
    setMetadataLoading(loading: boolean): void;
    /**
     * Save record
     */
    save(): Observable<Record>;
    /**
     * Validate search filter fields
     *
     * @returns {object} Observable<boolean>
     */
    validate(): Observable<boolean>;
    /**
     * Load / reload record using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordViewState>
     */
    load(useCache?: boolean): Observable<Record>;
    /**
     * Load / reload record using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordViewState>
     */
    loadMetadata(useCache?: boolean): Observable<M>;
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    abstract getViewFields$(): Observable<ViewFieldDefinition[]>;
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: RecordContainerState): void;
    /**
     * Update the metadata state
     *
     * @param {object} state to set
     */
    protected updateMetadataState(state: M): void;
    /**
     * Get record view metadata
     *
     * @returns {object} metadata M
     */
    protected getMetadata(): M;
    /**
     * Base store initialization
     * @param module
     * @param recordId
     * @param mode
     */
    protected baseInit(module: string, recordId: string, mode?: ViewMode): void;
}
