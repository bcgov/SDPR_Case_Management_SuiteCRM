import { ValidationManager } from '../validation/validation.manager';
import { DataTypeFormatter } from '../../formatters/data-type.formatter.service';
import { AttributeDependency, BaseField, Field, FieldDefinition, FieldLogicMap, ObjectMap, Record, ViewFieldDefinition } from 'common';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { LanguageStore } from '../../../store/language/language.store';
import * as i0 from "@angular/core";
export declare class FieldBuilder {
    protected validationManager: ValidationManager;
    protected typeFormatter: DataTypeFormatter;
    constructor(validationManager: ValidationManager, typeFormatter: DataTypeFormatter);
    /**
     * Build field
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    buildField(record: Record, viewField: ViewFieldDefinition, language?: LanguageStore): Field;
    getFieldLabel(label: string, module: string, language: LanguageStore): string;
    /**
     * Parse value from record
     *
     * @param {object} viewField ViewFieldDefinition
     * @param {object} definition FieldDefinition
     * @param {object} record Record
     * @returns {object} value object
     */
    protected parseValue(viewField: ViewFieldDefinition, definition: FieldDefinition, record: Record): {
        value: string;
        valueList: string[];
        valueObject?: any;
    };
    /**
     * Build and initialize field object
     *
     * @param {string} module to use
     * @param {object} viewField ViewFieldDefinition
     * @param {string} value string
     * @param {[]} valueList string[]
     * @param {} valueObject value object
     * @param {object} record Record
     * @param {object} definition FieldDefinition
     * @param {[]} validators ValidatorFn[]
     * @param {[]} asyncValidators AsyncValidatorFn[]
     * @param {object} language LanguageStore
     * @returns {object} BaseField
     */
    protected setupField(module: string, viewField: ViewFieldDefinition, value: string, valueList: string[], valueObject: any, record: Record, definition: FieldDefinition, validators: ValidatorFn[], asyncValidators: AsyncValidatorFn[], language: LanguageStore): BaseField;
    protected addFieldDependencies(config: FieldLogicMap, fieldDependencies: ObjectMap, attributeDependencies: {
        [key: string]: AttributeDependency;
    }, type: string): void;
    /**
     * Get save validators for the given field definition
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @returns {object} Validator map
     */
    protected getSaveValidators(record: Record, viewField: ViewFieldDefinition): {
        validators: ValidatorFn[];
        asyncValidators: AsyncValidatorFn[];
    };
    /**
     * Set attribute value on parent
     *
     * @param {object} record Record
     * @param {object} field Field
     * @param {string} name String
     * @param {object} definition FieldDefinition
     * @returns any
     */
    protected getParentValue(record: Record, field: Field, name: string, definition: FieldDefinition): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldBuilder, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FieldBuilder>;
}
