import { Action, Field, Record, ViewMode } from 'common';
import { FieldLogicActionData, FieldLogicActionHandler } from '../field-logic.action';
import { CurrencyService } from '../../../services/currency/currency.service';
import * as i0 from "@angular/core";
export declare class UpdateBaseCurrencyAction extends FieldLogicActionHandler {
    protected currencyService: CurrencyService;
    key: string;
    modes: ViewMode[];
    constructor(currencyService: CurrencyService);
    run(data: FieldLogicActionData, action: Action): void;
    protected updateValue(field: Field, baseValue: number, record: Record): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateBaseCurrencyAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpdateBaseCurrencyAction>;
}
