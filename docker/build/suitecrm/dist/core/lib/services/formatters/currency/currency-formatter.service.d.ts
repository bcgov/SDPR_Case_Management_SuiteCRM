import { UserPreferenceStore } from '../../../store/user-preference/user-preference.store';
import { NumberFormatter } from '../number/number-formatter.service';
import { FormatOptions, Formatter } from '../formatter.model';
import * as i0 from "@angular/core";
export interface CurrencyFormat {
    iso4217: string;
    name: string;
    symbol: string;
}
export declare class CurrencyFormatter implements Formatter {
    protected preferences: UserPreferenceStore;
    protected numberFormatter: NumberFormatter;
    locale: string;
    constructor(preferences: UserPreferenceStore, numberFormatter: NumberFormatter, locale: string);
    toUserFormat(value: string, options?: FormatOptions): string;
    toInternalFormat(value: string): string;
    getCurrencyFormat(): CurrencyFormat;
    getDefaultFormat(): CurrencyFormat;
    getCode(): string;
    getSymbol(): string;
    getDigits(): number;
    getDigitsInfo(definedDigits?: number): string;
    replaceSeparators(transformed: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyFormatter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CurrencyFormatter>;
}
