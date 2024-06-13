import { ValidationManager } from '../validation/validation.manager';
import { DataTypeFormatter } from '../../formatters/data-type.formatter.service';
import { SavedFilter } from '../../../store/saved-filters/saved-filter.model';
import { Field, FieldAttribute, FieldDefinition, Record, ViewFieldDefinition } from 'common';
import { LanguageStore } from '../../../store/language/language.store';
import { FilterFieldBuilder } from './filter-field.builder';
import * as i0 from "@angular/core";
export declare class FilterAttributeBuilder extends FilterFieldBuilder {
    protected validationManager: ValidationManager;
    protected typeFormatter: DataTypeFormatter;
    constructor(validationManager: ValidationManager, typeFormatter: DataTypeFormatter);
    /**
     * Build filter attribute
     *
     * @param {object} savedFilter SavedFilter
     * @param {object} parentField Field
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object} FieldAttribute
     */
    buildFilterAttribute(savedFilter: SavedFilter, parentField: Field, viewField: ViewFieldDefinition, language?: LanguageStore): FieldAttribute;
    /**
     * Add attribute to SavedFilter
     *
     * @param {object} savedFilter SavedFilter
     * @param {object} field Field
     * @param {string} name string
     * @param {object} attribute FieldAttribute
     */
    addAttributeToSavedFilter(savedFilter: SavedFilter, field: Field, name: string, attribute: FieldAttribute): void;
    /**
     * Parse filter attribute from field
     *
     * @param {object} viewField ViewFieldDefinition
     * @param {object} definition FieldDefinition
     * @param {object} record Record
     * @param {object} field Field
     * @returns {object} value object
     */
    protected parseFilterAttributeValue(viewField: ViewFieldDefinition, definition: FieldDefinition, record: Record, field: Field): {
        value: string;
        valueList: string[];
        valueObject?: any;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterAttributeBuilder, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FilterAttributeBuilder>;
}
