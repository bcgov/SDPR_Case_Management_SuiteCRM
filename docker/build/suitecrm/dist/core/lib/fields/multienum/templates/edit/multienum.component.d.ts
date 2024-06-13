import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { BaseMultiEnumComponent } from '../../../base/base-multienum.component';
import { LanguageStore } from '../../../../store/language/language.store';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import { ScreenSizeObserverService } from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { PrimeNGConfig } from "primeng/api";
import { ButtonInterface } from "common";
import { MultiSelect } from "primeng/multiselect";
import { Option } from "common";
import * as i0 from "@angular/core";
export declare class MultiEnumEditFieldComponent extends BaseMultiEnumComponent {
    protected languages: LanguageStore;
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    protected screenSize: ScreenSizeObserverService;
    protected systemConfigStore: SystemConfigStore;
    private primengConfig;
    multiSelect: MultiSelect;
    placeholderLabel: string;
    selectedItemsLabel: string;
    emptyFilterLabel: string;
    maxSelectedLabels: number;
    selectAll: boolean;
    filteredOptions: Option[];
    filteredWord: string;
    clearButton: ButtonInterface;
    constructor(languages: LanguageStore, typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager, screenSize: ScreenSizeObserverService, systemConfigStore: SystemConfigStore, primengConfig: PrimeNGConfig);
    ngOnInit(): void;
    onAdd(): void;
    onSelectAll(event: any): void;
    onRemove(): void;
    onClear(): void;
    onPanelShow(): void;
    onFilter(): void;
    getTranslatedLabels(): void;
    protected calculateSelectAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiEnumEditFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiEnumEditFieldComponent, "scrm-multienum-edit", never, {}, {}, never, never, false, never>;
}