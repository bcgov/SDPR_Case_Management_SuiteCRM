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
import { OnDestroy, OnInit } from '@angular/core';
import { FieldComponentInterface } from './field.interface';
import { AttributeDependency, Field, ObjectMap, Record } from 'common';
import { Subscription } from 'rxjs';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class BaseFieldComponent implements FieldComponentInterface, OnInit, OnDestroy {
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    mode: string;
    originalMode: string;
    field: Field;
    record: Record;
    parent: Record;
    klass: {
        [klass: string]: any;
    };
    dependentFields: ObjectMap;
    dependentAttributes: AttributeDependency[];
    protected subs: Subscription[];
    constructor(typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected baseInit(): void;
    /**
     * Calculate and init dependency handlers
     */
    protected initDependencyHandlers(): void;
    /**
     * Calculate dependent fields
     * @param {array} fieldKeys
     */
    protected calculateDependentFields(fieldKeys: string[]): void;
    /**
     * Add field dependency
     * @param {string} fieldKey
     * @param {array} dependentFields
     * @param {object} dependentAttributes
     */
    protected addFieldDependency(fieldKey: string, dependentFields: ObjectMap, dependentAttributes: AttributeDependency[]): void;
    /**
     * Check if field is dependency
     * @param dependencies
     * @returns {boolean}
     */
    protected isDependencyField(dependencies: ObjectMap): boolean;
    /**
     * Add attribute dependency
     * @param {string} fieldKey
     * @param {array} dependentFields
     * @param {object} dependentAttributes
     */
    protected addAttributeDependency(fieldKey: string, dependentFields: ObjectMap, dependentAttributes: AttributeDependency[]): void;
    /**
     * Check if attribute is dependency
     * @param {object} attributeDependencies
     * @returns {boolean}
     */
    protected isDependencyAttribute(attributeDependencies: AttributeDependency[]): boolean;
    protected subscribeValueChanges(): void;
    protected toInternalFormat(fieldType: any, value: any): string;
    protected setFieldValue(newValue: any): void;
    protected setFormControlValue(newValue: string | string[]): void;
    protected unsubscribeAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseFieldComponent, "ng-component", never, { "mode": { "alias": "mode"; "required": false; }; "originalMode": { "alias": "originalMode"; "required": false; }; "field": { "alias": "field"; "required": false; }; "record": { "alias": "record"; "required": false; }; "parent": { "alias": "parent"; "required": false; }; "klass": { "alias": "klass"; "required": false; }; }, {}, never, never, false, never>;
}
