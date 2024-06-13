import { Field, FieldDefinition, Record, ViewFieldDefinition } from 'common';
import { LanguageStore } from '../../../store/language/language.store';
import { SavedFilter } from '../../../store/saved-filters/saved-filter.model';
import { FieldBuilder } from './field.builder';
import { GroupFieldBuilder } from './group-field.builder';
import { AttributeBuilder } from './attribute.builder';
import { FilterFieldBuilder } from './filter-field.builder';
import { FilterAttributeBuilder } from './filter-attribute.builder';
import { LineItemBuilder } from './line-item.builder';
import * as i0 from "@angular/core";
export declare class FieldManager {
    protected fieldBuilder: FieldBuilder;
    protected groupFieldBuilder: GroupFieldBuilder;
    protected attributeBuilder: AttributeBuilder;
    protected filterFieldBuilder: FilterFieldBuilder;
    protected filterAttributeBuilder: FilterAttributeBuilder;
    protected lineItemBuilder: LineItemBuilder;
    protected languageStore: LanguageStore;
    constructor(fieldBuilder: FieldBuilder, groupFieldBuilder: GroupFieldBuilder, attributeBuilder: AttributeBuilder, filterFieldBuilder: FilterFieldBuilder, filterAttributeBuilder: FilterAttributeBuilder, lineItemBuilder: LineItemBuilder, languageStore: LanguageStore);
    /**
     * Build minimally initialised field object
     *
     * @param {string} type field type
     * @param {string} value field value
     * @returns {object} Field
     */
    buildShallowField(type: string, value: string): Field;
    /**
     * Build and add field to record
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    addField(record: Record, viewField: ViewFieldDefinition, language?: LanguageStore): Field;
    /**
     * Build and add filter field to record
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    addFilterField(record: SavedFilter, viewField: ViewFieldDefinition, language?: LanguageStore): Field;
    /**
     * Build line item and add to record
     *
     * @param {FieldDefinition} itemDefinition Item Definition
     * @param {Record} parentRecord Parent Record
     * @param {Field} parentField Parent Field
     * @param {Record | null} item Item
     */
    addLineItem(itemDefinition: FieldDefinition, parentRecord: Record, parentField: Field, item?: Record): void;
    /**
     * Remove line item
     *
     * @param {Field} parentField Parent Field
     * @param {number} index Index
     */
    removeLineItem(parentField: Field, index: number): void;
    /**
     * Add field to record
     *
     * @param {object} record Record
     * @param {string} name string
     * @param {object} field Field
     */
    addToRecord(record: Record, name: string, field: Field): void;
    /**
     * Build and add vardef only field to record
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    addVardefOnlyField(record: Record, viewField: ViewFieldDefinition, language?: LanguageStore): Field;
    /**
     * Add field to record
     *
     * @param {object} record Record
     * @param {string} name string
     * @param {object} field Field
     */
    addVardefOnlyFieldToRecord(record: Record, name: string, field: Field): void;
    /**
     * Is field initialized in record
     *
     * @param {object} record Record
     * @param {string} fieldName field
     * @returns {boolean} isInitialized
     */
    protected isFieldInitialized(record: Record, fieldName: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FieldManager>;
}
