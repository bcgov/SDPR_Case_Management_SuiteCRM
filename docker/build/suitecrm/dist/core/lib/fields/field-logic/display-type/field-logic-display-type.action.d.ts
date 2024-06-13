import { FieldLogicActionData, FieldLogicActionHandler } from '../field-logic.action';
import { Action, Field, Record, StringArrayMap, StringArrayMatrix, ViewMode } from 'common';
import { ConditionOperatorManager } from '../../../services/condition-operators/condition-operator.manager';
import * as i0 from "@angular/core";
/**
 * @DEPRECATED
 */
export declare class FieldLogicDisplayTypeAction extends FieldLogicActionHandler {
    protected operatorManager: ConditionOperatorManager;
    key: string;
    modes: ViewMode[];
    constructor(operatorManager: ConditionOperatorManager);
    run(data: FieldLogicActionData, action: Action): void;
    /**
     * Check if any of the configured values is currently set
     * @param {array} relatedFields
     * @param {object} record
     * @param {object} activeOnFields
     * @param {array} relatedAttributesFields
     * @param {object} activeOnAttributes
     */
    protected isActive(relatedFields: string[], record: Record, activeOnFields: StringArrayMap, relatedAttributesFields: string[], activeOnAttributes: StringArrayMatrix): boolean;
    /**
     * Are attributes active
     * @param {array} relatedAttributesFields
     * @param {object} record
     * @param {object} activeOnAttributes
     */
    protected areAttributesActive(relatedAttributesFields: string[], record: Record, activeOnAttributes: StringArrayMatrix): boolean;
    /**
     * Are fields active
     * @param {array} relatedFields
     * @param {object} record
     * @param {object} activeOnFields
     */
    protected areFieldsActive(relatedFields: string[], record: Record, activeOnFields: StringArrayMap): boolean;
    /**
     * Is value active
     * @param record
     * @param {object} field
     * @param {array} activeValues
     */
    protected isValueActive(record: Record, field: Field, activeValues: string[] | any): boolean;
    getTriggeringStatus(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldLogicDisplayTypeAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FieldLogicDisplayTypeAction>;
}
