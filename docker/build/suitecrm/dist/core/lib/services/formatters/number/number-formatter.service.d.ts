import { UserPreferenceStore } from '../../../store/user-preference/user-preference.store';
import { FormatOptions, Formatter } from '../formatter.model';
import { FormControlUtils } from '../../record/field/form-control.utils';
import * as i0 from "@angular/core";
export declare class NumberFormatter implements Formatter {
    protected preferences: UserPreferenceStore;
    protected formUtils: FormControlUtils;
    locale: string;
    constructor(preferences: UserPreferenceStore, formUtils: FormControlUtils, locale: string);
    toUserFormat(value: string, options?: FormatOptions): string;
    toInternalFormat(value: string): string;
    getFloatUserFormatPattern(): string;
    getIntUserFormatPattern(): string;
    getGroupSymbol(): string;
    getDecimalsSymbol(): string;
    replaceSeparators(transformed: string): string;
    validateIntUserFormat(inputValue: any): boolean;
    validateFloatUserFormat(inputValue: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberFormatter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NumberFormatter>;
}
