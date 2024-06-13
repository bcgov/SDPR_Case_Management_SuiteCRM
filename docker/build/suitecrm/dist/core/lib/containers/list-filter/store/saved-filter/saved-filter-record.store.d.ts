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
import { ColumnDefinition, Record, RecordMapperRegistry, SearchCriteria, SearchMetaField, SearchMetaFieldMap, ViewFieldDefinition } from 'common';
import { BehaviorSubject, Observable } from 'rxjs';
import { RecordStore } from '../../../../store/record/record.store';
import { SavedFilter } from '../../../../store/saved-filters/saved-filter.model';
import { RecordSaveGQL } from '../../../../store/record/graphql/api.record.save';
import { MessageService } from '../../../../services/message/message.service';
import { RecordFetchGQL } from '../../../../store/record/graphql/api.record.get';
import { RecordManager } from '../../../../services/record/record.manager';
import { FieldManager } from '../../../../services/record/field/field.manager';
import { LanguageStore } from '../../../../store/language/language.store';
export declare class SavedFilterRecordStore extends RecordStore {
    protected definitions$: Observable<ViewFieldDefinition[]>;
    protected recordSaveGQL: RecordSaveGQL;
    protected recordFetchGQL: RecordFetchGQL;
    protected message: MessageService;
    protected recordManager: RecordManager;
    protected recordMappers: RecordMapperRegistry;
    protected fieldManager: FieldManager;
    protected language: LanguageStore;
    state$: Observable<SavedFilter>;
    staging$: Observable<SavedFilter>;
    protected internalState: SavedFilter;
    protected stagingState: SavedFilter;
    protected store: BehaviorSubject<SavedFilter>;
    protected staging: BehaviorSubject<SavedFilter>;
    protected searchFields: SearchMetaFieldMap;
    protected listColumns: ColumnDefinition[];
    constructor(definitions$: Observable<ViewFieldDefinition[]>, recordSaveGQL: RecordSaveGQL, recordFetchGQL: RecordFetchGQL, message: MessageService, recordManager: RecordManager, recordMappers: RecordMapperRegistry, fieldManager: FieldManager, language: LanguageStore);
    /**
     * Get search fields metadata
     * @returns SearchMetaFieldMap
     */
    getSearchFields(): SearchMetaFieldMap;
    /**
     * Set search fields metadata
     * @param {object} searchFields SearchMetaFieldMap
     */
    setSearchFields(searchFields: SearchMetaFieldMap): void;
    /**
     * Get list fields metadata
     * @returns SearchMetaFieldMap
     */
    getListColumns(): ColumnDefinition[];
    /**
     * Set list fields metadata
     * @param {object} listColumns SearchMetaFieldMap
     */
    setListColumns(listColumns: ColumnDefinition[]): void;
    /**
     * Get record
     *
     * @returns {object} Record
     */
    getBaseRecord(): SavedFilter;
    /**
     * Extract base record
     *
     * @returns {object} Record
     */
    extractBaseRecord(record: SavedFilter): Record;
    /**
     * Init record fields
     *
     * @param {object} record Record
     */
    protected initRecord(record: SavedFilter): void;
    /**
     * Init Order by options using list view columns set as default
     * @param record
     */
    protected initOrderByOptions(record: SavedFilter): void;
    /**
     * Get criteria from filter
     * @param filter
     */
    protected getCriteria(filter: SavedFilter): SearchCriteria;
    /**
     * Initialize criteria fields
     *
     * @param {object} record to use
     * @param {object} searchFields to use
     */
    protected initCriteriaFields(record: SavedFilter, searchFields: SearchMetaFieldMap): void;
    /**
     * Build filter field according to Field interface
     *
     * @param {object} record SavedFilter
     * @param {object} fieldMeta to use
     */
    protected buildField(record: SavedFilter, fieldMeta: SearchMetaField): void;
}
