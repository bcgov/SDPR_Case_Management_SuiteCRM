import { DatetimeFormatter } from './datetime-formatter.service';
import { FormatOptions } from '../formatter.model';
import * as i0 from "@angular/core";
export declare class DateFormatter extends DatetimeFormatter {
    getInternalFormat(): string;
    getUserFormat(): string;
    /**
     * Format User Date to Internal format. It assumes the date is always in GMT
     *
     * @param dateString
     * @param options
     */
    toInternalFormat(dateString: string, options?: FormatOptions): string;
    /**
     * Format Internal Date to User. It assumes internal date is in GMT/UTC
     *
     * @param dateString
     * @param options
     */
    toUserFormat(dateString: string, options?: FormatOptions): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateFormatter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DateFormatter>;
}
