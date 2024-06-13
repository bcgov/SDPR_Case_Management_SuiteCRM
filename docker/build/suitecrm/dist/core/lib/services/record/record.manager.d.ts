import { FieldDefinitionMap, FieldMap, Record, ViewFieldDefinition } from 'common';
import { LanguageStore } from '../../store/language/language.store';
import { FieldManager } from './field/field.manager';
import { Params } from '@angular/router';
import * as i0 from "@angular/core";
export declare class RecordManager {
    protected fieldManager: FieldManager;
    protected language: LanguageStore;
    constructor(fieldManager: FieldManager, language: LanguageStore);
    /**
     * Get empty record
     *
     * @param {string} module string
     * @returns {object} Record
     */
    buildEmptyRecord(module: string): Record;
    /**
     * Init Fields
     *
     * @param {object} record to use
     * @param {object} viewFieldDefinitions to use
     * @returns {object} fields
     */
    initFields(record: Record, viewFieldDefinitions: ViewFieldDefinition[]): FieldMap;
    /**
     * Inject param fields
     *
     * @param {object} params Params
     * @param {object} record Record
     * @param {object} vardefs FieldDefinitionMap
     */
    injectParamFields(params: Params, record: Record, vardefs: FieldDefinitionMap): void;
    protected handleLinkTypeRelationship(paramKey: string, params: Params, vardefs: FieldDefinitionMap, record: Record): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordManager>;
}
