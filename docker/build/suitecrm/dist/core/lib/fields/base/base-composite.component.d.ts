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
import { BaseFieldComponent } from './base-field.component';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { StandardFieldRegistry } from '../standard-field.registry';
import { RecordManager } from '../../services/record/record.manager';
import { Field, FieldAttribute, FieldDefinition } from 'common';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class BaseComposite extends BaseFieldComponent implements OnInit, OnDestroy {
    protected typeFormatter: DataTypeFormatter;
    protected registry: StandardFieldRegistry;
    protected recordManager: RecordManager;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    constructor(typeFormatter: DataTypeFormatter, registry: StandardFieldRegistry, recordManager: RecordManager, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getComponentType(type: string, definition: FieldDefinition): any;
    /**
     * Get the attribute fields from the field
     *
     * @returns {object} Field[]
     */
    getAttributes(): Field[];
    getModule(): string;
    getMode(): string;
    /**
     * Get flex direction to be used
     *
     * @returns {string} direction
     */
    getDirection(): string;
    /**
     * Check if is configured
     *
     * @returns {boolean} is configured
     */
    isConfigured(): boolean;
    /**
     * Show label
     * @param attribute
     */
    showLabel(attribute: FieldAttribute): boolean;
    /**
     * Check if groupFields are configured
     *
     * @returns {boolean} has groupFields
     */
    protected hasAttributes(): boolean;
    /**
     * Check if layout is configured
     *
     * @returns {boolean} has layout
     */
    protected hasLayout(): boolean;
    /**
     * Check if display is configured
     *
     * @returns {boolean} has display
     */
    protected hasDisplay(): boolean;
    /**
     * Init Update parent subscription
     */
    protected initUpdateParentSubscription(): void;
    /**
     * Set attribute value on parent
     *
     * @param {object} attribute
     * @param {} value
     */
    protected setValueOnParent(attribute: FieldAttribute, value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseComposite, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseComposite, "ng-component", never, {}, {}, never, never, false, never>;
}
