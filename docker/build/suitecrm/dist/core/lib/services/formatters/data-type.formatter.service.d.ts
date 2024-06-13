import { NumberFormatter } from './number/number-formatter.service';
import { DatetimeFormatter } from './datetime/datetime-formatter.service';
import { FormatOptions, Formatter } from './formatter.model';
import { CurrencyFormatter } from './currency/currency-formatter.service';
import { DateFormatter } from './datetime/date-formatter.service';
import { PhoneFormatter } from './phone/phone-formatter.service';
import * as i0 from "@angular/core";
export interface TypeFormatterMap {
    [key: string]: Formatter;
}
export declare class DataTypeFormatter {
    protected currencyFormatter: CurrencyFormatter;
    protected numberFormatter: NumberFormatter;
    protected dateFormatter: DateFormatter;
    protected datetimeFormatter: DatetimeFormatter;
    protected phoneFormatter: PhoneFormatter;
    map: TypeFormatterMap;
    constructor(currencyFormatter: CurrencyFormatter, numberFormatter: NumberFormatter, dateFormatter: DateFormatter, datetimeFormatter: DatetimeFormatter, phoneFormatter: PhoneFormatter);
    toUserFormat(dataType: string, value: string, options?: FormatOptions): string;
    toInternalFormat(dataType: string, value: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTypeFormatter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DataTypeFormatter>;
}
