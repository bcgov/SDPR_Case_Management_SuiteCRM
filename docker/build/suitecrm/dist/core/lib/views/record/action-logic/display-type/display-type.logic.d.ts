import { Action, Field, LogicDefinitions, Record, StringArrayMap, StringArrayMatrix, ViewMode } from 'common';
import { RecordActionData } from '../../actions/record.action';
import { ActionLogicHandler } from '../../../../services/actions/action-logic-handler';
import * as i0 from "@angular/core";
export declare class RecordActionDisplayTypeLogic extends ActionLogicHandler<RecordActionData> {
    key: string;
    modes: ViewMode[];
    constructor();
    runAll(displayLogic: LogicDefinitions, data: RecordActionData): boolean;
    run(data: RecordActionData, logic: Action): boolean;
    /**
     * Check if any of the configured values is currently set
     *
     * @param {Array} relatedFields Related Fields
     * @param {object} record Record
     * @param {object} activeOnFields Active On Fields
     * @param {Array} relatedAttributesFields Related Attributes Fields
     * @param {object} activeOnAttributes Active On Attributes
     * @returns {boolean} True if any of the configured values is currently set
     */
    protected isActive(relatedFields: string[], record: Record, activeOnFields: StringArrayMap, relatedAttributesFields: string[], activeOnAttributes: StringArrayMatrix): boolean;
    /**
     * Are attributes active
     *
     * @param {Array} relatedAttributesFields Related Attributes Fields
     * @param {object} record Record
     * @param {object} activeOnAttributes Active On Attributes
     * @returns {boolean} True if any attributes active exists
     */
    protected areAttributesActive(relatedAttributesFields: string[], record: Record, activeOnAttributes: StringArrayMatrix): boolean;
    /**
     * Are fields active
     *
     * @param {Array} relatedFields Related Fields
     * @param {object} record Record
     * @param {object} activeOnFields Active On Fields
     * @returns {boolean} True if there is any fields active
     */
    protected areFieldsActive(relatedFields: string[], record: Record, activeOnFields: StringArrayMap): boolean;
    /**
     * Is value active
     *
     * @param {object} field Field
     * @param {Array} activeValues Active Values
     * @returns {boolean} True if there is any value active
     */
    protected isValueActive(field: Field, activeValues: string[]): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordActionDisplayTypeLogic, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordActionDisplayTypeLogic>;
}
