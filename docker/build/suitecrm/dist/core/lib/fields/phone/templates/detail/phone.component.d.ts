import { BaseFieldComponent } from '../../../base/base-field.component';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class PhoneDetailFieldComponent extends BaseFieldComponent {
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    constructor(typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    getTelLink(phone: string): string;
    getUnFormatted(phone: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhoneDetailFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PhoneDetailFieldComponent, "scrm-phone-detail", never, {}, {}, never, never, false, never>;
}
