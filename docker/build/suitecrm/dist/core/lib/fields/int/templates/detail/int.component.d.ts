import { BaseNumberComponent } from '../../../base/base-number.component';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class IntDetailFieldComponent extends BaseNumberComponent {
    protected userPreferences: UserPreferenceStore;
    protected systemConfig: SystemConfigStore;
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    constructor(userPreferences: UserPreferenceStore, systemConfig: SystemConfigStore, typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    static ɵfac: i0.ɵɵFactoryDeclaration<IntDetailFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IntDetailFieldComponent, "scrm-int-detail", never, {}, {}, never, never, false, never>;
}
