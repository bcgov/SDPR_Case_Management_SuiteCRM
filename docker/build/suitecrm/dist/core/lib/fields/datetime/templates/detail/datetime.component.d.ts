import { BaseDateTimeComponent } from '../../../base/datetime/base-datetime.component';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { DatetimeFormatter } from '../../../../services/formatters/datetime/datetime-formatter.service';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class DateTimeDetailFieldComponent extends BaseDateTimeComponent {
    protected formatter: DatetimeFormatter;
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    constructor(formatter: DatetimeFormatter, typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    getUserTimeZone(): string;
    toDateTime(dateString: string): Date;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateTimeDetailFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateTimeDetailFieldComponent, "scrm-datetime-detail", never, {}, {}, never, never, false, never>;
}
