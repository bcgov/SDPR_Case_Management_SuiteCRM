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
import { RecordManager } from '../../services/record/record.manager';
import { Field, FieldAttribute, FieldDefinition, LineActionEvent, Record, StringMap } from 'common';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldManager } from '../../services/record/field/field.manager';
import { FieldRegistry } from '../field.registry';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class BaseLineItemsComponent extends BaseFieldComponent implements OnInit, OnDestroy {
    protected typeFormatter: DataTypeFormatter;
    protected registry: FieldRegistry;
    protected recordManager: RecordManager;
    protected logic: FieldLogicManager;
    protected fieldManager: FieldManager;
    protected logicDisplay: FieldLogicDisplayManager;
    constructor(typeFormatter: DataTypeFormatter, registry: FieldRegistry, recordManager: RecordManager, logic: FieldLogicManager, fieldManager: FieldManager, logicDisplay: FieldLogicDisplayManager);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Get component type
     * @param {string} type
     * @param {FieldDefinition} definition
     * @returns {}
     */
    getComponentType(type: string, definition: FieldDefinition): any;
    /**
     * Get the list of items
     *
     * @returns {object} Record[]
     */
    getItems(): Record[];
    /**
     * Get the fields for the item record
     *
     * @param {Record} item
     * @returns {object} Field[]
     */
    getItemFields(item: Record): Field[];
    /**
     * Remove item from array
     *
     * @param {number} index
     * @return {void}
     */
    removeItem(index: number): void;
    /**
     * Add item to array
     *
     * @return {void}
     */
    addEmptyItem(): void;
    /**
     * Update items
     *
     * @param {Record[]} items
     * @return {void}
     */
    updateItems(items: Record[]): void;
    /**
     * Get module
     *
     * @return {string}
     */
    getModule(): string;
    /**
     * Get Mode
     *
     * @return {string}
     */
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
     * Check if its editable
     */
    isEditable(): boolean;
    /**
     * Show label
     *
     * @param {FieldAttribute} attribute
     * @returns {boolean}
     */
    showLabel(attribute: FieldAttribute): boolean;
    /**
     * Get message context
     *
     * @param {} item
     * @param {Record} record
     * @return {object} StringMap
     */
    getMessageContext(item: any, record: Record): StringMap;
    /**
     * Get message label key
     *
     * @param {} item
     * @return {string}
     */
    getMessageLabelKey(item: any): string;
    /**
     * Check if groupFields are configured
     *
     * @returns {boolean} has groupFields
     */
    protected hasItemConfig(): boolean;
    /**
     * Init Update parent subscription
     */
    protected initUpdateParentSubscription(): void;
    /**
     * Set attribute value on parent
     *
     * @param {object} attribute
     * @param {} value
     * @returns {void}
     */
    protected setValueOnParent(attribute: FieldAttribute, value: any): void;
    /**
     * Set attribute label display
     *
     * @param {object} itemRecord
     * @param {boolean} showLabel
     * @returns {void}
     */
    protected setAttributeLabelDisplay(itemRecord: Record, showLabel: boolean): void;
    /**
     * Check and if enabled, Run custom field logic on line action events
     * e.g. on line items row add/remove and so on as required
     *
     * @param {LineActionEvent} lineActionEvent
     * @returns {void}
     */
    protected triggerLineActionEvents(lineActionEvent: LineActionEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseLineItemsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseLineItemsComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
