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
import { Component } from '@angular/core';
import { BaseFieldComponent } from './base-field.component';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { RecordManager } from '../../services/record/record.manager';
import { emptyObject, isEditable, isTrue, LineActionEvent } from 'common';
import set from 'lodash-es/set';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldManager } from '../../services/record/field/field.manager';
import { FieldRegistry } from '../field.registry';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../services/formatters/data-type.formatter.service";
import * as i2 from "../field.registry";
import * as i3 from "../../services/record/record.manager";
import * as i4 from "../field-logic/field-logic.manager";
import * as i5 from "../../services/record/field/field.manager";
import * as i6 from "../field-logic-display/field-logic-display.manager";
class BaseLineItemsComponent extends BaseFieldComponent {
    constructor(typeFormatter, registry, recordManager, logic, fieldManager, logicDisplay) {
        super(typeFormatter, logic, logicDisplay);
        this.typeFormatter = typeFormatter;
        this.registry = registry;
        this.recordManager = recordManager;
        this.logic = logic;
        this.fieldManager = fieldManager;
        this.logicDisplay = logicDisplay;
    }
    ngOnInit() {
        super.ngOnInit();
        this.initUpdateParentSubscription();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    /**
     * Get component type
     * @param {string} type
     * @param {FieldDefinition} definition
     * @returns {}
     */
    getComponentType(type, definition) {
        const module = (this.record && this.record.module) || 'default';
        const displayType = (definition && definition.displayType) || '';
        return this.registry.getDisplayType(module, type, displayType, this.getMode(), this.field.name);
    }
    /**
     * Get the list of items
     *
     * @returns {object} Record[]
     */
    getItems() {
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
    getItemFields(item) {
        const fields = item.fields || {};
        return Object.keys(fields).map(key => fields[key]);
    }
    /**
     * Remove item from array
     *
     * @param {number} index
     * @return {void}
     */
    removeItem(index) {
        this.fieldManager.removeLineItem(this.field, index);
        this.updateItems(this.field.items);
        this.triggerLineActionEvents(LineActionEvent.onLineItemRemove);
    }
    /**
     * Add item to array
     *
     * @return {void}
     */
    addEmptyItem() {
        const itemDefinition = this.field?.definition?.lineItems?.definition || {};
        this.fieldManager.addLineItem(itemDefinition, this.record, this.field);
        this.triggerLineActionEvents(LineActionEvent.onLineItemAdd);
    }
    /**
     * Update items
     *
     * @param {Record[]} items
     * @return {void}
     */
    updateItems(items) {
        this.field.items = items;
    }
    /**
     * Get module
     *
     * @return {string}
     */
    getModule() {
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
    getMode() {
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
    getDirection() {
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
    isConfigured() {
        return this.hasItemConfig();
    }
    /**
     * Check if its editable
     */
    isEditable() {
        return isEditable(this.mode);
    }
    /**
     * Show label
     *
     * @param {FieldAttribute} attribute
     * @returns {boolean}
     */
    showLabel(attribute) {
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
    getMessageContext(item, record) {
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
    getMessageLabelKey(item) {
        return (item && item.message && item.message.labelKey) || '';
    }
    /**
     * Check if groupFields are configured
     *
     * @returns {boolean} has groupFields
     */
    hasItemConfig() {
        return !!(this.field?.definition?.lineItems?.definition ?? null);
    }
    /**
     * Init Update parent subscription
     */
    initUpdateParentSubscription() {
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
    setValueOnParent(attribute, value) {
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
    setAttributeLabelDisplay(itemRecord, showLabel) {
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
    triggerLineActionEvents(lineActionEvent) {
        const fieldLogics = this.field?.logic || {};
        if (emptyObject(fieldLogics)) {
            return;
        }
        Object.keys(fieldLogics).forEach(logicKey => {
            const fieldLogic = fieldLogics[logicKey] || null;
            const onEvent = fieldLogic?.params?.triggerOnEvents?.[lineActionEvent];
            if (isTrue(onEvent)) {
                this.logic.runLogic(this.field, this.mode, this.record);
            }
        });
    }
    static { this.ɵfac = function BaseLineItemsComponent_Factory(t) { return new (t || BaseLineItemsComponent)(i0.ɵɵdirectiveInject(i1.DataTypeFormatter), i0.ɵɵdirectiveInject(i2.FieldRegistry), i0.ɵɵdirectiveInject(i3.RecordManager), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.FieldManager), i0.ɵɵdirectiveInject(i6.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseLineItemsComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BaseLineItemsComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
export { BaseLineItemsComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseLineItemsComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: i1.DataTypeFormatter }, { type: i2.FieldRegistry }, { type: i3.RecordManager }, { type: i4.FieldLogicManager }, { type: i5.FieldManager }, { type: i6.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1saW5lLWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvYmFzZS9iYXNlLWxpbmUtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUNILFdBQVcsRUFLWCxVQUFVLEVBQ1YsTUFBTSxFQUNOLGVBQWUsRUFLbEIsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxHQUFHLE1BQU0sZUFBZSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7O0FBRTVGLE1BQ2Esc0JBQXVCLFNBQVEsa0JBQWtCO0lBRTFELFlBQ2MsYUFBZ0MsRUFDaEMsUUFBdUIsRUFDdkIsYUFBNEIsRUFDNUIsS0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsWUFBc0M7UUFFaEQsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFQaEMsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsa0JB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SUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBZ0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdkU7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7dUZBdFRRLHNCQUFzQjtvRUFBdEIsc0JBQXNCOztTQUF0QixzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQURsQyxTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlRmllbGRDb21wb25lbnR9IGZyb20gJy4vYmFzZS1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRNYW5hZ2VyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZWNvcmQvcmVjb3JkLm1hbmFnZXInO1xuaW1wb3J0IHtcbiAgICBlbXB0eU9iamVjdCxcbiAgICBGaWVsZCxcbiAgICBGaWVsZEF0dHJpYnV0ZSxcbiAgICBGaWVsZERlZmluaXRpb24sXG4gICAgRmllbGRMb2dpY01hcCxcbiAgICBpc0VkaXRhYmxlLFxuICAgIGlzVHJ1ZSxcbiAgICBMaW5lQWN0aW9uRXZlbnQsXG4gICAgTGluZUl0ZW1zTWV0YWRhdGEsXG4gICAgUmVjb3JkLFxuICAgIFN0cmluZ01hcCxcbiAgICBWaWV3TW9kZVxufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHNldCBmcm9tICdsb2Rhc2gtZXMvc2V0JztcbmltcG9ydCB7RmllbGRMb2dpY01hbmFnZXJ9IGZyb20gJy4uL2ZpZWxkLWxvZ2ljL2ZpZWxkLWxvZ2ljLm1hbmFnZXInO1xuaW1wb3J0IHtGaWVsZE1hbmFnZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlY29yZC9maWVsZC9maWVsZC5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRSZWdpc3RyeX0gZnJvbSAnLi4vZmllbGQucmVnaXN0cnknO1xuaW1wb3J0IHtGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJ9IGZyb20gJy4uL2ZpZWxkLWxvZ2ljLWRpc3BsYXkvZmllbGQtbG9naWMtZGlzcGxheS5tYW5hZ2VyJztcblxuQENvbXBvbmVudCh7dGVtcGxhdGU6ICcnfSlcbmV4cG9ydCBjbGFzcyBCYXNlTGluZUl0ZW1zQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIHJlZ2lzdHJ5OiBGaWVsZFJlZ2lzdHJ5LFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkTWFuYWdlcjogUmVjb3JkTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljOiBGaWVsZExvZ2ljTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGZpZWxkTWFuYWdlcjogRmllbGRNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIodHlwZUZvcm1hdHRlciwgbG9naWMsIGxvZ2ljRGlzcGxheSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgICAgIHRoaXMuaW5pdFVwZGF0ZVBhcmVudFN1YnNjcmlwdGlvbigpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjb21wb25lbnQgdHlwZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICogQHBhcmFtIHtGaWVsZERlZmluaXRpb259IGRlZmluaXRpb25cbiAgICAgKiBAcmV0dXJucyB7fVxuICAgICAqL1xuICAgIGdldENvbXBvbmVudFR5cGUodHlwZTogc3RyaW5nLCBkZWZpbml0aW9uOiBGaWVsZERlZmluaXRpb24pOiBhbnkge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSAodGhpcy5yZWNvcmQgJiYgdGhpcy5yZWNvcmQubW9kdWxlKSB8fCAnZGVmYXVsdCc7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheVR5cGUgPSAoZGVmaW5pdGlvbiAmJiBkZWZpbml0aW9uLmRpc3BsYXlUeXBlKSB8fCAnJztcblxuICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RyeS5nZXREaXNwbGF5VHlwZShtb2R1bGUsIHR5cGUsIGRpc3BsYXlUeXBlLCB0aGlzLmdldE1vZGUoKSwgdGhpcy5maWVsZC5uYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxpc3Qgb2YgaXRlbXNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IFJlY29yZFtdXG4gICAgICovXG4gICAgZ2V0SXRlbXMoKTogUmVjb3JkW10ge1xuICAgICAgICB0aGlzLmZpZWxkLml0ZW1zID0gdGhpcy5maWVsZC5pdGVtcyB8fCBbXTtcblxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZmllbGQuaXRlbXM7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUl0ZW1zID0gaXRlbXMgJiYgaXRlbXMuZmlsdGVyKGl0ZW0gPT4gIShpdGVtICYmIGl0ZW0uYXR0cmlidXRlcyAmJiBpdGVtLmF0dHJpYnV0ZXMuZGVsZXRlZCkpO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsT25GaXJzdExpbmUgPSAhISh0aGlzLmZpZWxkPy5kZWZpbml0aW9uPy5saW5lSXRlbXM/LmxhYmVsT25GaXJzdExpbmUgPz8gZmFsc2UpO1xuXG4gICAgICAgIGFjdGl2ZUl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93ID0gIWxhYmVsT25GaXJzdExpbmUgfHwgaW5kZXggPD0gMDtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlTGFiZWxEaXNwbGF5KGl0ZW0sIHNob3cpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZC5pdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZpZWxkcyBmb3IgdGhlIGl0ZW0gcmVjb3JkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlY29yZH0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IEZpZWxkW11cbiAgICAgKi9cbiAgICBnZXRJdGVtRmllbGRzKGl0ZW06IFJlY29yZCk6IEZpZWxkW10ge1xuICAgICAgICBjb25zdCBmaWVsZHMgPSBpdGVtLmZpZWxkcyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpZWxkcykubWFwKGtleSA9PiBmaWVsZHNba2V5XSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGl0ZW0gZnJvbSBhcnJheVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmZpZWxkTWFuYWdlci5yZW1vdmVMaW5lSXRlbShcbiAgICAgICAgICAgIHRoaXMuZmllbGQsXG4gICAgICAgICAgICBpbmRleFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbXModGhpcy5maWVsZC5pdGVtcyk7XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyTGluZUFjdGlvbkV2ZW50cyhMaW5lQWN0aW9uRXZlbnQub25MaW5lSXRlbVJlbW92ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGl0ZW0gdG8gYXJyYXlcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgYWRkRW1wdHlJdGVtKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpdGVtRGVmaW5pdGlvbjogRmllbGREZWZpbml0aW9uID0gdGhpcy5maWVsZD8uZGVmaW5pdGlvbj8ubGluZUl0ZW1zPy5kZWZpbml0aW9uIHx8IHt9O1xuXG4gICAgICAgIHRoaXMuZmllbGRNYW5hZ2VyLmFkZExpbmVJdGVtKFxuICAgICAgICAgICAgaXRlbURlZmluaXRpb24sXG4gICAgICAgICAgICB0aGlzLnJlY29yZCxcbiAgICAgICAgICAgIHRoaXMuZmllbGRcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnRyaWdnZXJMaW5lQWN0aW9uRXZlbnRzKExpbmVBY3Rpb25FdmVudC5vbkxpbmVJdGVtQWRkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgaXRlbXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVjb3JkW119IGl0ZW1zXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB1cGRhdGVJdGVtcyhpdGVtczogUmVjb3JkW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWVsZC5pdGVtcyA9IGl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBtb2R1bGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRNb2R1bGUoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmQubW9kdWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBNb2RlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0TW9kZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnZmlsdGVyJykge1xuICAgICAgICAgICAgcmV0dXJuICdlZGl0JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGZsZXggZGlyZWN0aW9uIHRvIGJlIHVzZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGRpcmVjdGlvblxuICAgICAqL1xuICAgIGdldERpcmVjdGlvbigpOiBzdHJpbmcge1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gJ2ZsZXgtY29sdW1uJztcblxuICAgICAgICBpZiAodGhpcy5maWVsZC5kZWZpbml0aW9uLmRpc3BsYXkgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnZmxleC1yb3cnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpcyBjb25maWd1cmVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gaXMgY29uZmlndXJlZFxuICAgICAqL1xuICAgIGlzQ29uZmlndXJlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzSXRlbUNvbmZpZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGl0cyBlZGl0YWJsZVxuICAgICAqL1xuICAgIGlzRWRpdGFibGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBpc0VkaXRhYmxlKHRoaXMubW9kZSBhcyBWaWV3TW9kZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBsYWJlbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtGaWVsZEF0dHJpYnV0ZX0gYXR0cmlidXRlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc2hvd0xhYmVsKGF0dHJpYnV0ZTogRmllbGRBdHRyaWJ1dGUpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGF0dHJpYnV0ZS5kZWZpbml0aW9uIHx8IG51bGw7XG4gICAgICAgIGNvbnN0IHNob3dMYWJlbCA9IGRlZmluaXRpb24uc2hvd0xhYmVsIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKCFkZWZpbml0aW9uIHx8ICFzaG93TGFiZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoc2hvd0xhYmVsLmluY2x1ZGVzKCcqJykgfHwgc2hvd0xhYmVsLmluY2x1ZGVzKHRoaXMubW9kZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBtZXNzYWdlIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7fSBpdGVtXG4gICAgICogQHBhcmFtIHtSZWNvcmR9IHJlY29yZFxuICAgICAqIEByZXR1cm4ge29iamVjdH0gU3RyaW5nTWFwXG4gICAgICovXG4gICAgZ2V0TWVzc2FnZUNvbnRleHQoaXRlbTogYW55LCByZWNvcmQ6IFJlY29yZCk6IFN0cmluZ01hcCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBpdGVtICYmIGl0ZW0ubWVzc2FnZSAmJiBpdGVtLm1lc3NhZ2UuY29udGV4dCB8fCB7fTtcbiAgICAgICAgY29udGV4dC5tb2R1bGUgPSAocmVjb3JkICYmIHJlY29yZC5tb2R1bGUpIHx8ICcnO1xuXG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBtZXNzYWdlIGxhYmVsIGtleVxuICAgICAqXG4gICAgICogQHBhcmFtIHt9IGl0ZW1cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0TWVzc2FnZUxhYmVsS2V5KGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAoaXRlbSAmJiBpdGVtLm1lc3NhZ2UgJiYgaXRlbS5tZXNzYWdlLmxhYmVsS2V5KSB8fCAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBncm91cEZpZWxkcyBhcmUgY29uZmlndXJlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGhhcyBncm91cEZpZWxkc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBoYXNJdGVtQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISEodGhpcy5maWVsZD8uZGVmaW5pdGlvbj8ubGluZUl0ZW1zPy5kZWZpbml0aW9uID8/IG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgVXBkYXRlIHBhcmVudCBzdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdFVwZGF0ZVBhcmVudFN1YnNjcmlwdGlvbigpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmllbGQuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyaWJ1dGVLZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gdGhpcy5maWVsZC5hdHRyaWJ1dGVzW2F0dHJpYnV0ZUtleV07XG5cbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlLnZhbHVlQ2hhbmdlcyQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGF0dHJpYnV0ZS52YWx1ZUNoYW5nZXMkLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdmFsdWUudmFsdWVPYmplY3QgfHwgdmFsdWUudmFsdWVMaXN0IHx8IHZhbHVlLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVPblBhcmVudChhdHRyaWJ1dGUsIHZhbCk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhdHRyaWJ1dGUgdmFsdWUgb24gcGFyZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlXG4gICAgICogQHBhcmFtIHt9IHZhbHVlXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldFZhbHVlT25QYXJlbnQoYXR0cmlidXRlOiBGaWVsZEF0dHJpYnV0ZSwgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAoYXR0cmlidXRlLnZhbHVlUGF0aCkge1xuICAgICAgICAgICAgc2V0KHRoaXMuZmllbGQsIGF0dHJpYnV0ZS52YWx1ZVBhdGgsIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldCh0aGlzLmZpZWxkLnZhbHVlT2JqZWN0LCBhdHRyaWJ1dGUubmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhdHRyaWJ1dGUgbGFiZWwgZGlzcGxheVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW1SZWNvcmRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNob3dMYWJlbFxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXRBdHRyaWJ1dGVMYWJlbERpc3BsYXkoaXRlbVJlY29yZDogUmVjb3JkLCBzaG93TGFiZWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3ViZmllbGRzID0gaXRlbVJlY29yZC5maWVsZHMgfHwge307XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3ViZmllbGRzKS5mb3JFYWNoKHN1YkZpZWxkS2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkZpZWxkID0gc3ViZmllbGRzW3N1YkZpZWxkS2V5XTtcblxuICAgICAgICAgICAgaWYgKHN1YkZpZWxkLnR5cGUgIT09ICdjb21wb3NpdGUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzdWJGaWVsZEF0dHJpYnV0ZXMgPSBzdWJGaWVsZC5hdHRyaWJ1dGVzIHx8IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3ViRmllbGRBdHRyaWJ1dGVzKS5mb3JFYWNoKHN1YkZpZWxkQXR0cmlidXRlS2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJGaWVsZEF0dHJpYnV0ZSA9IHN1YkZpZWxkQXR0cmlidXRlc1tzdWJGaWVsZEF0dHJpYnV0ZUtleV07XG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBzdWJGaWVsZEF0dHJpYnV0ZS5tZXRhZGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5sYWJlbERpc3BsYXkgPSAhc2hvd0xhYmVsID8gJ2hpZGUnIDogJ2RlZmF1bHQnO1xuICAgICAgICAgICAgICAgIHN1YkZpZWxkQXR0cmlidXRlLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYW5kIGlmIGVuYWJsZWQsIFJ1biBjdXN0b20gZmllbGQgbG9naWMgb24gbGluZSBhY3Rpb24gZXZlbnRzXG4gICAgICogZS5nLiBvbiBsaW5lIGl0ZW1zIHJvdyBhZGQvcmVtb3ZlIGFuZCBzbyBvbiBhcyByZXF1aXJlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtMaW5lQWN0aW9uRXZlbnR9IGxpbmVBY3Rpb25FdmVudFxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHByb3RlY3RlZCB0cmlnZ2VyTGluZUFjdGlvbkV2ZW50cyhsaW5lQWN0aW9uRXZlbnQ6IExpbmVBY3Rpb25FdmVudCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGZpZWxkTG9naWNzID0gdGhpcy5maWVsZD8ubG9naWMgfHwge30gYXMgRmllbGRMb2dpY01hcDtcblxuICAgICAgICBpZiAoZW1wdHlPYmplY3QoZmllbGRMb2dpY3MpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyhmaWVsZExvZ2ljcykuZm9yRWFjaChsb2dpY0tleSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpZWxkTG9naWMgPSBmaWVsZExvZ2ljc1tsb2dpY0tleV0gfHwgbnVsbDtcblxuICAgICAgICAgICAgY29uc3Qgb25FdmVudCA9IGZpZWxkTG9naWM/LnBhcmFtcz8udHJpZ2dlck9uRXZlbnRzPy5bbGluZUFjdGlvbkV2ZW50XTtcblxuICAgICAgICAgICAgaWYgKGlzVHJ1ZShvbkV2ZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9naWMucnVuTG9naWModGhpcy5maWVsZCwgdGhpcy5tb2RlIGFzIFZpZXdNb2RlLCB0aGlzLnJlY29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==