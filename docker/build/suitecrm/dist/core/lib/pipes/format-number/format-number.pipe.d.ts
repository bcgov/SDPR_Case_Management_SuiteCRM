import { DecimalPipe } from '@angular/common';
import { NumberFormatter } from '../../services/formatters/number/number-formatter.service';
import * as i0 from "@angular/core";
export declare class FormatNumberPipe extends DecimalPipe {
    protected formatter: NumberFormatter;
    locale: string;
    constructor(formatter: NumberFormatter, locale: string);
    transform(value: number | string, digitsInfo?: string, locale?: string): string | null;
    transform(value: null | undefined, digitsInfo?: string, locale?: string): null;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormatNumberPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FormatNumberPipe, "formatNumber", false>;
}
