import { Action, Field, Record, ViewMode } from 'common';
import { FieldLogicActionData, FieldLogicActionHandler } from '../field-logic.action';
import * as i0 from "@angular/core";
export declare class UpdateFlexRelateModuleAction extends FieldLogicActionHandler {
    key: string;
    modes: ViewMode[];
    constructor();
    run(data: FieldLogicActionData, action: Action): void;
    protected updateValue(field: Field, valueObject: any, value: string, record: Record): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateFlexRelateModuleAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpdateFlexRelateModuleAction>;
}
