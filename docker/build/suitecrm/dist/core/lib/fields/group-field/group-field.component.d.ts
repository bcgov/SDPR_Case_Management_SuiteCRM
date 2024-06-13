import { Field, FieldDefinition } from 'common';
import { BaseFieldComponent } from '../base/base-field.component';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { StandardFieldRegistry } from '../standard-field.registry';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class GroupFieldComponent extends BaseFieldComponent {
    protected typeFormatter: DataTypeFormatter;
    protected registry: StandardFieldRegistry;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    constructor(typeFormatter: DataTypeFormatter, registry: StandardFieldRegistry, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    getComponentType(type: string, definition: FieldDefinition): any;
    /**
     * Get the group fields from the record
     *
     * @returns {object} Field[]
     */
    getFields(): Field[];
    getModule(): string;
    /**
     * Get flex direction to be used
     *
     * @returns {string} direction
     */
    getDirection(): string;
    /**
     * Check if is configured
     *
     * @returns {boolean} is configured
     */
    isConfigured(): boolean;
    showLabel(fieldName: string): boolean;
    isModeEnabled(mode: string, groupField: Field): boolean;
    /**
     * Check if groupFields are configured
     *
     * @returns {boolean} has groupFields
     */
    protected hasGroupFields(): boolean;
    /**
     * Check if layout is configured
     *
     * @returns {boolean} has layout
     */
    protected hasLayout(): boolean;
    /**
     * Check if display is configured
     *
     * @returns {boolean} has display
     */
    protected hasDisplay(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupFieldComponent, "scrm-group-field", never, {}, {}, never, never, false, never>;
}
