import { BaseFieldComponent } from '../../../base/base-field.component';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from "../../../field-logic-display/field-logic-display.manager";
import * as i0 from "@angular/core";
export declare class TextListFieldComponent extends BaseFieldComponent {
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    isTruncated: boolean;
    constructor(typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    truncateValue(value: string): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TextListFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextListFieldComponent, "scrm-text-list", never, {}, {}, never, never, false, never>;
}
