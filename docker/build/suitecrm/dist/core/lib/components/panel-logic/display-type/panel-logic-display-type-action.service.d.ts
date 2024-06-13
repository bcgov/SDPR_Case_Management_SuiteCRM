import { PanelLogicActionData, PanelLogicActionHandler } from '../panel-logic.action';
import { Action, Field, Record, StringArrayMap, StringArrayMatrix, ViewMode } from 'common';
import * as i0 from "@angular/core";
export declare class PanelLogicDisplayTypeAction extends PanelLogicActionHandler {
    key: string;
    modes: ViewMode[];
    constructor();
    run(data: PanelLogicActionData, action: Action): boolean;
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
     * @param {object} field
     * @param {array} activeValues
     */
    protected isValueActive(field: Field, activeValues: string[]): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelLogicDisplayTypeAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PanelLogicDisplayTypeAction>;
}
