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
import { Record, RecordMapperRegistry, ViewFieldDefinition } from 'common';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { RecordFetchGQL } from './graphql/api.record.get';
import { RecordSaveGQL } from './graphql/api.record.save';
import { MessageService } from '../../services/message/message.service';
import { RecordManager } from '../../services/record/record.manager';
export declare class RecordStore {
    protected definitions$: Observable<ViewFieldDefinition[]>;
    protected recordSaveGQL: RecordSaveGQL;
    protected recordFetchGQL: RecordFetchGQL;
    protected message: MessageService;
    protected recordManager: RecordManager;
    protected recordMappers: RecordMapperRegistry;
    state$: Observable<Record>;
    staging$: Observable<Record>;
    protected cache$: Observable<any>;
    protected internalState: Record;
    protected stagingState: Record;
    protected store: BehaviorSubject<Record>;
    protected staging: BehaviorSubject<Record>;
    protected definitions: ViewFieldDefinition[];
    protected subs: Subscription[];
    protected fieldsMetadata: {
        fields: string[];
    };
    constructor(definitions$: Observable<ViewFieldDefinition[]>, recordSaveGQL: RecordSaveGQL, recordFetchGQL: RecordFetchGQL, message: MessageService, recordManager: RecordManager, recordMappers: RecordMapperRegistry);
    init(record: Record): void;
    getStaging(): Record;
    setStaging(record: Record): void;
    setRecord(record: Record): void;
    save(): Observable<Record>;
    validate(): Observable<boolean>;
    resetStaging(): void;
    destroy(): void;
    /**
     * Get record
     *
     * @returns {object} Record
     */
    getBaseRecord(): Record;
    /**
     * Get record
     *
     * @returns {object} Record
     */
    getBaseStaging(): Record;
    /**
     * Extract base record
     *
     * @returns {object} Record
     */
    extractBaseRecord(record: Record): Record;
    /**
     * Is staging record dirty
     *
     * @returns {object} Record
     */
    isDirty(): boolean;
    /**
     * Get record cached Observable or call the backend
     *
     * @param {string} module to use
     * @param {string} recordId to use
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<any>
     */
    retrieveRecord(module: string, recordId: string, useCache?: boolean): Observable<Record>;
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: Record): void;
    /**
     * Update the staging
     *
     * @param {object} state to set
     */
    protected updateStaging(state: Record): void;
    /**
     * Map staging fields
     */
    protected mapStagingFields(): void;
    /**
     * Init record fields
     *
     * @param {object} record Record
     */
    protected initRecord(record: Record): void;
    /**
     * Fetch the record from the backend
     *
     * @param {string} module to use
     * @param {string} recordID to use
     * @returns {object} Observable<any>
     */
    protected fetch(module: string, recordID: string): Observable<Record>;
}
