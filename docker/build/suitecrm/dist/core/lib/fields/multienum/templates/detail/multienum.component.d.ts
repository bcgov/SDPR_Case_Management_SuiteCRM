import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { BaseMultiEnumComponent } from '../../../base/base-multienum.component';
import { LanguageStore } from '../../../../store/language/language.store';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class MultiEnumDetailFieldComponent extends BaseMultiEnumComponent {
    protected languages: LanguageStore;
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    constructor(languages: LanguageStore, typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiEnumDetailFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiEnumDetailFieldComponent, "scrm-multienum-detail", never, {}, {}, never, never, false, never>;
}
