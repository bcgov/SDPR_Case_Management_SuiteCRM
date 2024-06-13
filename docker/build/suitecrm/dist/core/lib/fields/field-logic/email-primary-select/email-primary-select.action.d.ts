import { FieldLogicActionData, FieldLogicActionHandler } from '../field-logic.action';
import { Action, ViewMode } from 'common';
import * as i0 from "@angular/core";
export declare class EmailPrimarySelectAction extends FieldLogicActionHandler {
    key: string;
    modes: ViewMode[];
    constructor();
    run(data: FieldLogicActionData, action: Action): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailPrimarySelectAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EmailPrimarySelectAction>;
}
