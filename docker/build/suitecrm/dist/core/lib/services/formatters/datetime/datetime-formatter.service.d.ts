import { UserPreferenceStore } from '../../../store/user-preference/user-preference.store';
import { Observable } from 'rxjs';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { DateTime } from 'luxon';
import { FormatOptions, Formatter } from '../formatter.model';
import { FormControlUtils } from '../../record/field/form-control.utils';
import { DateTimeOptions } from "luxon/src/datetime";
import * as i0 from "@angular/core";
export interface DatetimeFormats {
    date: string;
    time: string;
}
export interface DateTimeStruct extends NgbDateStruct, NgbTimeStruct {
}
export declare class DatetimeFormatter implements Formatter {
    protected preferences: UserPreferenceStore;
    protected formUtils: FormControlUtils;
    locale: string;
    format$: Observable<DatetimeFormats>;
    constructor(preferences: UserPreferenceStore, formUtils: FormControlUtils, locale: string);
    getDateFormat(): string;
    getTimeFormat(): string;
    getDateTimeFormat(): string;
    getInternalDateFormat(): string;
    getInternalTimeFormat(): string;
    getInternalDateTimeFormat(): string;
    getInternalFormat(): string;
    getUserFormat(): string;
    /**
     * Format Internal Date to User. It assumes internal date is in GMT/UTC
     *
     * @param dateString
     * @param options
     */
    toUserFormat(dateString: string, options?: FormatOptions): string;
    /**
     * Format User Date to Internal format. It assumes the date is in the user timezone
     *
     * @param dateString
     * @param options
     */
    toInternalFormat(dateString: string, options?: FormatOptions): string;
    formatDateTime(dateString: string, format: string, fromFormat?: string, locale?: string, timezone?: string): string;
    toDateTime(datetimeString: string, fromFormat?: string, options?: DateTimeOptions): DateTime;
    userDateTimeFormatToStruct(datetime: string): {
        date: NgbDateStruct;
        time: NgbTimeStruct;
    };
    internalDateTimeFormatToStruct(datetime: string): {
        date: NgbDateStruct;
        time: NgbTimeStruct;
    };
    userDateFormatToStruct(datetime: string): NgbDateStruct;
    dateFormatToStruct(datetime: string, fromFormat?: string): NgbDateStruct;
    userTimeFormatToStruct(datetime: string): NgbTimeStruct;
    fromUserFormat(datetime: string, options?: DateTimeOptions, formatOptions?: FormatOptions): DateTime;
    fromInternalFormat(datetime: string, options?: DateTimeOptions): DateTime;
    validateUserFormat(inputValue: any, userFormat?: string): boolean;
    userTimeZone(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatetimeFormatter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DatetimeFormatter>;
}
