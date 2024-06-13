import { Action, ViewMode } from 'common';
import { FieldLogicActionData, FieldLogicActionHandler } from '../field-logic.action';
import { RequiredValidator } from '../../../services/record/validation/validators/required.validator';
import { ActiveFieldsChecker } from "../../../services/condition-operators/active-fields-checker.service";
import * as i0 from "@angular/core";
export declare class RequiredAction extends FieldLogicActionHandler {
    protected requiredValidator: RequiredValidator;
    protected activeFieldsChecker: ActiveFieldsChecker;
    key: string;
    modes: ViewMode[];
    constructor(requiredValidator: RequiredValidator, activeFieldsChecker: ActiveFieldsChecker);
    run(data: FieldLogicActionData, action: Action): void;
    getTriggeringStatus(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RequiredAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RequiredAction>;
}
