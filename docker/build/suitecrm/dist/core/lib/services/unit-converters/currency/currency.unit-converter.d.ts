import { UserPreferenceStore } from '../../../store/user-preference/user-preference.store';
import { UnitConverter, UnitConverterOptions } from '../unit-converter.model';
import { CurrencyService } from '../../currency/currency.service';
import * as i0 from "@angular/core";
export declare class CurrencyUnitConverter implements UnitConverter {
    protected currencyService: CurrencyService;
    protected preferences: UserPreferenceStore;
    constructor(currencyService: CurrencyService, preferences: UserPreferenceStore);
    toUserFormat(value: string, options?: UnitConverterOptions): string;
    toInternalFormat(value: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyUnitConverter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CurrencyUnitConverter>;
}
