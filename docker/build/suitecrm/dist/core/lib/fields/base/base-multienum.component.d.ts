import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { BaseEnumComponent } from './base-enum.component';
import { LanguageStore } from '../../store/language/language.store';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class BaseMultiEnumComponent extends BaseEnumComponent {
    protected languages: LanguageStore;
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    constructor(languages: LanguageStore, typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    protected subscribeValueChanges(): void;
    protected initValue(): void;
    protected updateInternalState(value?: string | string[]): void;
    protected syncSelectedValuesWithForm(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseMultiEnumComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseMultiEnumComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
