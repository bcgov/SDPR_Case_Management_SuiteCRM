import { BaseActionManager } from '../../services/actions/base-action-manager.service';
import { FieldLogicDisplayActionData } from './field-logic-display.action';
import { Action, ActionContext, Field, Record, ViewMode } from 'common';
import { DisplayTypeAction } from './display-type/display-type.action';
import * as i0 from "@angular/core";
export declare class FieldLogicDisplayManager extends BaseActionManager<FieldLogicDisplayActionData> {
    constructor(displayType: DisplayTypeAction);
    runAll(field: Field, record: Record, mode: ViewMode): void;
    protected buildActionData(action: Action, context?: ActionContext): FieldLogicDisplayActionData;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldLogicDisplayManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FieldLogicDisplayManager>;
}
