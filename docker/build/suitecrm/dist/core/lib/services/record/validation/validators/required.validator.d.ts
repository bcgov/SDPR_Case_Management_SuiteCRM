import { ValidatorInterface } from '../validator.Interface';
import { Record } from 'common';
import { ViewFieldDefinition } from 'common';
import { StandardValidatorFn } from 'common';
import { FormControlUtils } from '../../field/form-control.utils';
import * as i0 from "@angular/core";
export declare const requiredValidator: (utils: FormControlUtils) => StandardValidatorFn;
export declare const booleanRequiredValidator: (utils: FormControlUtils) => StandardValidatorFn;
export declare class RequiredValidator implements ValidatorInterface {
    protected utils: FormControlUtils;
    constructor(utils: FormControlUtils);
    applies(record: Record, viewField: ViewFieldDefinition): boolean;
    getValidator(viewField: ViewFieldDefinition): StandardValidatorFn[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RequiredValidator, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RequiredValidator>;
}
