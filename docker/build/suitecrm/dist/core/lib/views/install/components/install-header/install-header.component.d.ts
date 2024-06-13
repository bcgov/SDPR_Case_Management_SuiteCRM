import { InstallActionsAdapter } from '../../adapters/actions.adapter';
import { ActionContext, Record } from 'common';
import { InstallViewStore } from '../../store/install-view/install-view.store';
import * as i0 from "@angular/core";
export declare class InstallHeaderComponent {
    actionsAdapter: InstallActionsAdapter;
    store: InstallViewStore;
    vm$: import("rxjs").Observable<{
        record: Record;
    }>;
    constructor(actionsAdapter: InstallActionsAdapter, store: InstallViewStore);
    /**
     * Build action context
     * @param record
     */
    getActionContext(record: Record): ActionContext;
    getTitle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InstallHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InstallHeaderComponent, "scrm-install-header", never, {}, {}, never, never, false, never>;
}
