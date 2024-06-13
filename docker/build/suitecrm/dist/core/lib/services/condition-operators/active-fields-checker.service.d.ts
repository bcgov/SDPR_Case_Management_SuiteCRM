import { Field, Record, StringArrayMap, StringArrayMatrix } from "common";
import { ConditionOperatorManager } from "./condition-operator.manager";
import * as i0 from "@angular/core";
export declare class ActiveFieldsChecker {
    protected operatorManager: ConditionOperatorManager;
    constructor(operatorManager: ConditionOperatorManager);
    /**
     * Check if any of the configured values is currently set
     * @param {array} relatedFields
     * @param {object} record
     * @param {object} activeOnFields
     * @param {array} relatedAttributesFields
     * @param {object} activeOnAttributes
     */
    isActive(relatedFields: string[], record: Record, activeOnFields: StringArrayMap, relatedAttributesFields: string[], activeOnAttributes: StringArrayMatrix): boolean;
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
     * @param {object} record
     * @param {object} field
     * @param {array} activeValues
     */
    protected isValueActive(record: Record, field: Field, activeValues: string[] | any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveFieldsChecker, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ActiveFieldsChecker>;
}
