import { RecordViewStore } from '../../views/record/store/record-view/record-view.store';
import { ModuleNavigation } from '../../services/navigation/module-navigation/module-navigation.service';
import * as i0 from "@angular/core";
export declare class StatusBarComponent {
    protected recordViewStore: RecordViewStore;
    protected moduleNavigation: ModuleNavigation;
    displayResponsiveTable: boolean;
    constructor(recordViewStore: RecordViewStore, moduleNavigation: ModuleNavigation);
    static ɵfac: i0.ɵɵFactoryDeclaration<StatusBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StatusBarComponent, "scrm-status-bar", never, {}, {}, never, never, false, never>;
}
