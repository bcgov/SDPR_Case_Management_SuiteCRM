import { ConditionOperatorActionHandler } from '../condition-operator.action';
import { Record, Field, LogicRuleValues } from 'common';
import { ConditionOperatorModel } from '../condition-operator.model';
import * as i0 from "@angular/core";
export declare class GreaterThanAction extends ConditionOperatorActionHandler implements ConditionOperatorModel {
    key: string;
    constructor();
    run(record: Record, field: Field, opsConfig: LogicRuleValues): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<GreaterThanAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GreaterThanAction>;
}