import { FieldLogicDisplayActionData, FieldLogicDisplayActionHandler } from '../field-logic-display.action';
import { Action, ViewMode } from 'common';
import { ActiveFieldsChecker } from "../../../services/condition-operators/active-fields-checker.service";
import * as i0 from "@angular/core";
export declare class DisplayTypeAction extends FieldLogicDisplayActionHandler {
    protected activeFieldsChecker: ActiveFieldsChecker;
    key: string;
    modes: ViewMode[];
    constructor(activeFieldsChecker: ActiveFieldsChecker);
    run(data: FieldLogicDisplayActionData, action: Action): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DisplayTypeAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DisplayTypeAction>;
}
