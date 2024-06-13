import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { DateFormatter } from '../../../../services/formatters/datetime/date-formatter.service';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import { BaseDateComponent } from '../../../base/datetime/base-date.component';
import * as i0 from "@angular/core";
export declare class DateDetailFieldComponent extends BaseDateComponent {
    protected formatter: DateFormatter;
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    constructor(formatter: DateFormatter, typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    static ɵfac: i0.ɵɵFactoryDeclaration<DateDetailFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateDetailFieldComponent, "scrm-date-detail", never, {}, {}, never, never, false, never>;
}
