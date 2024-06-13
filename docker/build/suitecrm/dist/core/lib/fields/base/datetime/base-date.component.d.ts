import { DataTypeFormatter } from '../../../services/formatters/data-type.formatter.service';
import { DatetimeFormatter } from '../../../services/formatters/datetime/datetime-formatter.service';
import { FieldLogicManager } from '../../field-logic/field-logic.manager';
import { BaseDateTimeComponent } from './base-datetime.component';
import { FieldLogicDisplayManager } from "../../field-logic-display/field-logic-display.manager";
import * as i0 from "@angular/core";
export declare class BaseDateComponent extends BaseDateTimeComponent {
    protected formatter: DatetimeFormatter;
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    constructor(formatter: DatetimeFormatter, typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    protected toInternalFormat(fieldType: any, value: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseDateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseDateComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
