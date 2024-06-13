import { Formatter } from '../formatter.model';
import { FormControlUtils } from '../../record/field/form-control.utils';
import * as i0 from "@angular/core";
export declare class EmailFormatter implements Formatter {
    protected formUtils: FormControlUtils;
    constructor(formUtils: FormControlUtils);
    toUserFormat(value: string): string;
    toInternalFormat(value: string): string;
    getUserFormatPattern(): RegExp;
    validateUserFormat(inputValue: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailFormatter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EmailFormatter>;
}
