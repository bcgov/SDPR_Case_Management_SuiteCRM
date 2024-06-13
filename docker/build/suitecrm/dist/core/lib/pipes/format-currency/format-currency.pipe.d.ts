import { CurrencyFormatter } from '../../services/formatters/currency/currency-formatter.service';
import { FormatOptions } from '../../services/formatters/formatter.model';
import * as i0 from "@angular/core";
export declare class FormatCurrencyPipe {
    protected formatter: CurrencyFormatter;
    constructor(formatter: CurrencyFormatter);
    transform(value: any, options?: FormatOptions): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormatCurrencyPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FormatCurrencyPipe, "formatCurrency", false>;
}
