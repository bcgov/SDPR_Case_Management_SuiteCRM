import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { Field, Record } from 'common';
import { UserPreferenceStore } from '../../store/user-preference/user-preference.store';
import * as i0 from "@angular/core";
export declare class CurrencyService {
    protected config: SystemConfigStore;
    protected preferences: UserPreferenceStore;
    constructor(config: SystemConfigStore, preferences: UserPreferenceStore);
    getFieldCurrencyValue(field: Field, record: Record): string;
    baseToCurrency(currencyId: string, value: number): number;
    currencyToBase(currencyId: string, value: number): number;
    round(value: number): number;
    getCurrencyId(record: Record): string;
    isBase(field: Field): boolean;
    getCurrency(id: string): any;
    getBaseCurrency(): any;
    getUserCurrency(): any;
    getPrecision(): number;
    getConversionRate(id: string): number;
    getCode(id: string): string;
    getSymbol(id: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CurrencyService>;
}
