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
import { Field, FieldDefinition, FieldMap, Record, ViewFieldDefinition } from 'common';
import { LanguageStore } from '../../../store/language/language.store';
import { ValidationManager } from '../validation/validation.manager';
import { DataTypeFormatter } from '../../formatters/data-type.formatter.service';
import { AttributeBuilder } from './attribute.builder';
import * as i0 from "@angular/core";
export declare class LineItemBuilder extends AttributeBuilder {
    protected validationManager: ValidationManager;
    protected typeFormatter: DataTypeFormatter;
    constructor(validationManager: ValidationManager, typeFormatter: DataTypeFormatter);
    /**
     * Create and add attributes fields to field
     *
     * @param {object} record Record
     * @param {object} fields FieldMap
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @param {function} buildLineItemFunction
     */
    addLineItems(record: Record, fields: FieldMap, viewField: ViewFieldDefinition, language: LanguageStore, buildLineItemFunction: Function): void;
    /**
     * Create and add attributes fields to field
     *
     * @param {object} record Record
     * @param {object} field Field
     * @param {object} language LanguageStore
     * @param {function} buildLineItemFunction
     */
    addFieldLineItems(record: Record, field: Field, language: LanguageStore, buildLineItemFunction: Function): void;
    /**
     * Build line item and and to record
     * @param {object} itemDefinition
     * @param {object }item
     * @param {object} buildLineItemFunction
     * @param {object} language
     * @param {object} parentRecord
     * @param {object} parentField
     */
    addLineItem(itemDefinition: FieldDefinition, item: Record, buildLineItemFunction: Function, language: LanguageStore, parentRecord: Record, parentField: Field): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LineItemBuilder, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LineItemBuilder>;
}
