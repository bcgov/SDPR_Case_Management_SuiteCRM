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
import { FieldBuilder } from './field.builder';
import { ValidationManager } from '../validation/validation.manager';
import { DataTypeFormatter } from '../../formatters/data-type.formatter.service';
import { SavedFilter } from '../../../store/saved-filters/saved-filter.model';
import { Field, Option, SearchCriteria, SearchCriteriaFieldFilter, ViewFieldDefinition } from 'common';
import { LanguageStore } from '../../../store/language/language.store';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class FilterFieldBuilder extends FieldBuilder {
    protected validationManager: ValidationManager;
    protected typeFormatter: DataTypeFormatter;
    constructor(validationManager: ValidationManager, typeFormatter: DataTypeFormatter);
    /**
     * Build filter field
     *
     * @param {object} savedFilter SavedFilter
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object} Field
     */
    buildFilterField(savedFilter: SavedFilter, viewField: ViewFieldDefinition, language?: LanguageStore): Field;
    /**
     * Get Filter Validators for given field definition
     *
     * @param {object} record  Record
     * @param {object} viewField ViewFieldDefinition
     * @returns {object} validator map
     */
    getFilterValidators(record: SavedFilter, viewField: ViewFieldDefinition): {
        validators: ValidatorFn[];
        asyncValidators: AsyncValidatorFn[];
    };
    /**
     * Init filter fields
     *
     * @param {object} searchCriteria to use
     * @param {object} viewField to init
     * @param {object} field to init
     * @returns {object} SearchCriteriaFieldFilter
     */
    initFieldFilter(searchCriteria: SearchCriteria, viewField: ViewFieldDefinition, field: Field): SearchCriteriaFieldFilter;
    protected mapEnumEmptyOption(fieldCriteria: SearchCriteriaFieldFilter, field: Field): void;
    protected mapRelateFields(fieldCriteria: SearchCriteriaFieldFilter, field: Field, searchCriteria: SearchCriteria): void;
    protected getEmptyOption(field: Field): Option;
    /**
     * Is criteria field initialized in record
     *
     * @param {object} record Record
     * @param {string} fieldName field
     * @returns {boolean} isInitialized
     */
    isCriteriaFieldInitialized(record: SavedFilter, fieldName: string): boolean;
    /**
     * Add field to SavedFilter
     *
     * @param {object} savedFilter SavedFilter
     * @param {string} name string
     * @param {object} field Field
     */
    addToSavedFilter(savedFilter: SavedFilter, name: string, field: Field): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterFieldBuilder, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FilterFieldBuilder>;
}
