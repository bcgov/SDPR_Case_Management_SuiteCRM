import { BaseActionManager } from '../../services/actions/base-action-manager.service';
import { FieldLogicActionData, FieldLogicActionHandlerMap } from './field-logic.action';
import { Action, ActionContext, Field, Record, ViewMode } from 'common';
import { FieldLogicDisplayTypeAction } from './display-type/field-logic-display-type.action';
import { EmailPrimarySelectAction } from './email-primary-select/email-primary-select.action';
import { RequiredAction } from './required/required.action';
import { UpdateBaseCurrencyAction } from './currency-conversion/update-base-currency.action';
import { UpdateCurrencyAction } from './currency-conversion/update-currency.action';
import { UpdateFlexRelateModuleAction } from './update-flex-relate-module/update-flex-relate-module.action';
import { UpdateValueAction } from './update-value/update-value.action';
import { UpdateValueBackendAction } from './update-value-backend/update-value-backend.action';
import { DisplayTypeBackendAction } from './display-type-backend/display-type-backend.action';
import * as i0 from "@angular/core";
export declare class FieldLogicManager extends BaseActionManager<FieldLogicActionData> {
    actions: {
        [key: string]: FieldLogicActionHandlerMap;
    };
    constructor(displayType: FieldLogicDisplayTypeAction, emailPrimarySelectAction: EmailPrimarySelectAction, required: RequiredAction, updateBaseCurrency: UpdateBaseCurrencyAction, updateCurrency: UpdateCurrencyAction, updateValue: UpdateValueAction, updateFlexRelateModule: UpdateFlexRelateModuleAction, updateValueBackend: UpdateValueBackendAction, dislayTypeBackend: DisplayTypeBackendAction);
    /**
     * Run logic for the given field
     * @param {object} field
     * @param {object} mode
     * @param {object} record
     * @param triggeringStatus
     */
    runLogic(field: Field, mode: ViewMode, record: Record, triggeringStatus?: string): void;
    /**
     * Run the action using given context
     * @param action
     * @param mode
     * @param context
     */
    runAction(action: Action, mode: ViewMode, context?: ActionContext): void;
    /**
     * Run front end action
     * @param {object} action
     * @param {object} mode
     * @param {object} context
     */
    protected runFrontEndAction(action: Action, mode: ViewMode, context?: ActionContext): void;
    /**
     * Get module name
     * @param {object} context
     */
    protected getModuleName(context?: ActionContext): string;
    protected buildActionData(action: Action, context?: ActionContext): FieldLogicActionData;
    /**
     * Parse mode actions
     * @param declaredActions
     * @param mode
     * @param triggeringStatus
     */
    protected parseModeActions(declaredActions: Action[], mode: ViewMode, triggeringStatus: string): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldLogicManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FieldLogicManager>;
}
