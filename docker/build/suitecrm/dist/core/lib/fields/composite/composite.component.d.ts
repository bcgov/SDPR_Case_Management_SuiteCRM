import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { StandardFieldRegistry } from '../standard-field.registry';
import { RecordManager } from '../../services/record/record.manager';
import { BaseComposite } from '../base/base-composite.component';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class CompositeComponent extends BaseComposite {
    protected typeFormatter: DataTypeFormatter;
    protected registry: StandardFieldRegistry;
    protected recordManager: RecordManager;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    constructor(typeFormatter: DataTypeFormatter, registry: StandardFieldRegistry, recordManager: RecordManager, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    static ɵfac: i0.ɵɵFactoryDeclaration<CompositeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CompositeComponent, "scrm-composite-field", never, {}, {}, never, never, false, never>;
}
