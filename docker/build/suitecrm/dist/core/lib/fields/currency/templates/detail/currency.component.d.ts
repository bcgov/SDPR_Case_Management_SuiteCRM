import { BaseNumberComponent } from '../../../base/base-number.component';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { FormatOptions } from '../../../../services/formatters/formatter.model';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { CurrencyService } from '../../../../services/currency/currency.service';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class CurrencyDetailFieldComponent extends BaseNumberComponent {
    protected userPreferences: UserPreferenceStore;
    protected systemConfig: SystemConfigStore;
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected currencyService: CurrencyService;
    protected logicDisplay: FieldLogicDisplayManager;
    constructor(userPreferences: UserPreferenceStore, systemConfig: SystemConfigStore, typeFormatter: DataTypeFormatter, logic: FieldLogicManager, currencyService: CurrencyService, logicDisplay: FieldLogicDisplayManager);
    getOptions(): FormatOptions;
    getCurrencyValue(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyDetailFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CurrencyDetailFieldComponent, "scrm-currency-detail", never, {}, {}, never, never, false, never>;
}
