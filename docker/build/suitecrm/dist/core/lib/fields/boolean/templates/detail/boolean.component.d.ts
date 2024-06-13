import { BaseBooleanComponent } from '../../../base/base-boolean.component';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class BooleanDetailFieldComponent extends BaseBooleanComponent {
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    constructor(typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    static ɵfac: i0.ɵɵFactoryDeclaration<BooleanDetailFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BooleanDetailFieldComponent, "scrm-boolean-detail", never, {}, {}, never, never, false, never>;
}
