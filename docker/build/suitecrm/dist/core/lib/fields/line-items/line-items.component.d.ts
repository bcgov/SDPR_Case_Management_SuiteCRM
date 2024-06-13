import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { RecordManager } from '../../services/record/record.manager';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { BaseLineItemsComponent } from '../base/base-line-items.component';
import { ButtonInterface, ObjectMap } from 'common';
import { FieldManager } from '../../services/record/field/field.manager';
import { FieldRegistry } from '../field.registry';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class LineItemsComponent extends BaseLineItemsComponent {
    protected typeFormatter: DataTypeFormatter;
    protected registry: FieldRegistry;
    protected recordManager: RecordManager;
    protected logic: FieldLogicManager;
    protected fieldManager: FieldManager;
    protected logicDisplay: FieldLogicDisplayManager;
    constructor(typeFormatter: DataTypeFormatter, registry: FieldRegistry, recordManager: RecordManager, logic: FieldLogicManager, fieldManager: FieldManager, logicDisplay: FieldLogicDisplayManager);
    /**
     * Add item button config
     * @returns {object} ButtonInterface
     */
    getAddItemButton(): ButtonInterface;
    /**
     * Remove item button config
     * @param {object} item
     * @param {number} index
     * @returns {object} ButtonInterface
     */
    getRemoveItemButton(item: ObjectMap, index: number): ButtonInterface;
    static ɵfac: i0.ɵɵFactoryDeclaration<LineItemsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LineItemsComponent, "scrm-line-items-field", never, {}, {}, never, never, false, never>;
}
