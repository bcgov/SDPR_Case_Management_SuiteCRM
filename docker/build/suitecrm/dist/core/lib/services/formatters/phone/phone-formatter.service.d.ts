import { Formatter } from '../formatter.model';
import { FormControlUtils } from '../../record/field/form-control.utils';
import * as i0 from "@angular/core";
export declare class PhoneFormatter implements Formatter {
    protected formUtils: FormControlUtils;
    constructor(formUtils: FormControlUtils);
    toUserFormat(value: string): string;
    toInternalFormat(value: string): string;
    getUserFormatPattern(): string;
    validateUserFormat(inputValue: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhoneFormatter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PhoneFormatter>;
}
