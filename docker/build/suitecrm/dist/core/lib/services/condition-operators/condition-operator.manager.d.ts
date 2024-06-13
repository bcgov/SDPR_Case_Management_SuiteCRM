import { GreaterThanAction } from './greater-than/greater-than.action';
import { LessThanAction } from './less-than/less-than.action';
import { NotEmptyAction } from './not-empty/not-empty.action';
import { ConditionOperatorModel } from './condition-operator.model';
import { IsEmptyAction } from './is-empty/is-empty.action';
import { IsEqualAction } from './is-equal/is-equal.action';
import { NotEqualAction } from './not-equal/not-equal.action';
import * as i0 from "@angular/core";
export declare class ConditionOperatorManager {
    greaterThanAction: GreaterThanAction;
    lessThanAction: LessThanAction;
    notEmptyAction: NotEmptyAction;
    isEmptyAction: IsEmptyAction;
    isEqualAction: IsEqualAction;
    notEqualAction: NotEqualAction;
    constructor(greaterThanAction: GreaterThanAction, lessThanAction: LessThanAction, notEmptyAction: NotEmptyAction, isEmptyAction: IsEmptyAction, isEqualAction: IsEqualAction, notEqualAction: NotEqualAction);
    get(key: string): ConditionOperatorModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConditionOperatorManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConditionOperatorManager>;
}
