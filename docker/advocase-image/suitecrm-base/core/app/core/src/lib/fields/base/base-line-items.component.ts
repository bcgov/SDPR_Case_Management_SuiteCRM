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

import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseFieldComponent} from './base-field.component';
import {DataTypeFormatter} from '../../services/formatters/data-type.formatter.service';
import {RecordManager} from '../../services/record/record.manager';
import {
    emptyObject,
    Field,
    FieldAttribute,
    FieldDefinition,
    FieldLogicMap,
    isEditable,
    isTrue,
    LineActionEvent,
    LineItemsMetadata,
    Record,
    StringMap,
    ViewMode
} from 'common';
import set from 'lodash-es/set';
import {FieldLogicManager} from '../field-logic/field-logic.manager';
import {FieldManager} from '../../services/record/field/field.manager';
import {FieldRegistry} from '../field.registry';
import {FieldLogicDisplayManager} from '../field-logic-display/field-logic-display.manager';

@Component({template: ''})
export class BaseLineItemsComponent extends BaseFieldComponent implements OnInit, OnDestroy {

    constructor(
        protected typeFormatter: DataTypeFormatter,
        protected registry: FieldRegistry,
        protected recordManager: RecordManager,
        protected logic: FieldLogicManager,
        protected fieldManager: FieldManager,
        protected logicDisplay: FieldLogicDisplayManager
    ) {
        super(typeFormatter, logic, logicDisplay);
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.initUpdateParentSubscription();
    }

    ngOnDestroy(): void {
        this.subs.forEach(sub => sub.unsubscribe());
    }

    /**
     * Get component type
     * @param {string} type
     * @param {FieldDefinition} definition
     * @returns {}
     */
    getComponentType(type: string, definition: FieldDefinition): any {
        const module = (this.record && this.record.module) || 'default';

        const displayType = (definition && definition.displayType) || '';

        return this.registry.getDisplayType(module, type, displayType, this.getMode(), this.field.name);
    }

    /**
     * Get the list of items
     *
     * @returns {object} Record[]
     */
    getItems(): Record[] {
        this.field.items = this.field.items || [];

        const items = this.field.items;
        const activeItems = items && items.filter(item => !(item && item.attributes && item.attributes.deleted));

        const labelOnFirstLine = !!(this.field?.definition?.lineItems?.labelOnFirstLine ?? false);

        activeItems.forEach((item, index) => {
            const show = !labelOnFirstLine || index <= 0;
            this.setAttributeLabelDisplay(item, show);
        });

        return this.field.items;
    }

    /**
     * Get the fields for the item record
     *
     * @param {Record} item
     * @returns {object} Field[]
     */
    getItemFields(item: Record): Field[] {
        const fields = item.fields || {};
        return Object.keys(fields).map(key => fields[key]);
    }

    /**
     * Remove item from array
     *
     * @param {number} index
     * @return {void}
     */
    removeItem(index: number): void {

        this.fieldManager.removeLineItem(
            this.field,
            index
        );

        this.updateItems(this.field.items);

        this.triggerLineActionEvents(LineActionEvent.onLineItemRemove);
    }

    /**
     * Add item to array
     *
     * @return {void}
     */
    addEmptyItem(): void {
        const itemDefinition: FieldDefinition = this.field?.definition?.lineItems?.definition || {};

        this.fieldManager.addLineItem(
            itemDefinition,
            this.record,
            this.field
        );

        this.triggerLineActionEvents(LineActionEvent.onLineItemAdd);
    }

    /**
     * Update items
     *
     * @param {Record[]} items
     * @return {void}
     */
    updateItems(items: Record[]): void {
        this.field.items = items;
    }

    /**
     * Get module
     *
     * @return {string}
     */
    getModule(): string {
        if (!this.record) {
            return null;
        }

        return this.record.module;
    }

    /**
     * Get Mode
     *
     * @return {string}
     */
    getMode(): string {
        if (this.mode === 'filter') {
            return 'edit';
        }

        return this.mode;
    }

    /**
     * Get flex direction to be used
     *
     * @returns {string} direction
     */
    getDirection(): string {
        let direction = 'flex-column';

        if (this.field.definition.display === 'inline') {
            direction = 'flex-row';
        }

        return direction;
    }

    /**
     * Check if is configured
     *
     * @returns {boolean} is configured
     */
    isConfigured(): boolean {
        return this.hasItemConfig();
    }

    /**
     * Check if its editable
     */
    isEditable(): boolean {
        return isEditable(this.mode as ViewMode);
    }

    /**
     * Show label
     *
     * @param {FieldAttribute} attribute
     * @returns {boolean}
     */
    showLabel(attribute: FieldAttribute): boolean {
        const definition = attribute.definition || null;
        const showLabel = definition.showLabel || null;

        if (!definition || !showLabel) {
            return false;
        }

        return (showLabel.includes('*') || showLabel.includes(this.mode));
    }

    /**
     * Get message context
     *
     * @param {} item
     * @param {Record} record
     * @return {object} StringMap
     */
    getMessageContext(item: any, record: Record): StringMap {
        const context = item && item.message && item.message.context || {};
        context.module = (record && record.module) || '';

        return context;
    }

    /**
     * Get message label key
     *
     * @param {} item
     * @return {string}
     */
    getMessageLabelKey(item: any): string {
        return (item && item.message && item.message.labelKey) || '';
    }

    /**
     * Check if groupFields are configured
     *
     * @returns {boolean} has groupFields
     */
    protected hasItemConfig(): boolean {
        return !!(this.field?.definition?.lineItems?.definition ?? null);
    }

    /**
     * Init Update parent subscription
     */
    protected initUpdateParentSubscription(): void {
        if (!this.field.attributes) {
            return;
        }

        Object.keys(this.field.attributes).forEach(attributeKey => {
            const attribute = this.field.attributes[attributeKey];

            if (!attribute.valueChanges$) {
                return;
            }

            this.subs.push(attribute.valueChanges$.subscribe(value => {
                const val = value.valueObject || value.valueList || value.value;
                this.setValueOnParent(attribute, val);
            }));
        });
    }

    /**
     * Set attribute value on parent
     *
     * @param {object} attribute
     * @param {} value
     * @returns {void}
     */
    protected setValueOnParent(attribute: FieldAttribute, value: any): void {
        if (attribute.valuePath) {
            set(this.field, attribute.valuePath, value);
            return;
        }

        set(this.field.valueObject, attribute.name, value);
    }

    /**
     * Set attribute label display
     *
     * @param {object} itemRecord
     * @param {boolean} showLabel
     * @returns {void}
     */
    protected setAttributeLabelDisplay(itemRecord: Record, showLabel: boolean): void {
        const subfields = itemRecord.fields || {};

        Object.keys(subfields).forEach(subFieldKey => {
            const subField = subfields[subFieldKey];

            if (subField.type !== 'composite') {
                return;
            }

            const subFieldAttributes = subField.attributes || {};
            Object.keys(subFieldAttributes).forEach(subFieldAttributeKey => {
                const subFieldAttribute = subFieldAttributes[subFieldAttributeKey];
                const metadata = subFieldAttribute.metadata || {};
                metadata.labelDisplay = !showLabel ? 'hide' : 'default';
                subFieldAttribute.metadata = metadata;
            });
        });
    }

    /**
     * Check and if enabled, Run custom field logic on line action events
     * e.g. on line items row add/remove and so on as required
     *
     * @param {LineActionEvent} lineActionEvent
     * @returns {void}
     */
    protected triggerLineActionEvents(lineActionEvent: LineActionEvent): void {

        const fieldLogics = this.field?.logic || {} as FieldLogicMap;

        if (emptyObject(fieldLogics)) {
            return;
        }

        Object.keys(fieldLogics).forEach(logicKey => {

            const fieldLogic = fieldLogics[logicKey] || null;

            const onEvent = fieldLogic?.params?.triggerOnEvents?.[lineActionEvent];

            if (isTrue(onEvent)) {
                this.logic.runLogic(this.field, this.mode as ViewMode, this.record);
            }
        });
    }
}
