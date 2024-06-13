import { BaseFieldComponent } from '../../../base/base-field.component';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class TinymceDetailFieldComponent extends BaseFieldComponent {
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected config: SystemConfigStore;
    protected logicDisplay: FieldLogicDisplayManager;
    settings: any;
    initialValue: string;
    constructor(typeFormatter: DataTypeFormatter, logic: FieldLogicManager, config: SystemConfigStore, logicDisplay: FieldLogicDisplayManager);
    ngOnInit(): void;
    initSettings(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TinymceDetailFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TinymceDetailFieldComponent, "scrm-tinymce-detail", never, {}, {}, never, never, false, never>;
}
