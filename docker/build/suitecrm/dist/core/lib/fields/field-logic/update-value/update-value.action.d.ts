import { FieldLogicActionData, FieldLogicActionHandler } from '../field-logic.action';
import { Action, Field, Record, ViewMode } from 'common';
import { ActiveFieldsChecker } from "../../../services/condition-operators/active-fields-checker.service";
import * as i0 from "@angular/core";
export declare class UpdateValueAction extends FieldLogicActionHandler {
    protected activeFieldsChecker: ActiveFieldsChecker;
    key: string;
    modes: ViewMode[];
    constructor(activeFieldsChecker: ActiveFieldsChecker);
    run(data: FieldLogicActionData, action: Action): void;
    /**
     * Update the new value
     * @param {object} field
     * @param {object} record
     */
    protected updateValue(field: Field, value: string, record: Record): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateValueAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpdateValueAction>;
}
