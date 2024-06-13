import { BaseActionManager } from '../../../../services/actions/base-action-manager.service';
import { ListViewRecordPanelActionData } from './record-panel.action';
import { CancelRecordPanelAction } from './cancel/cancel.record-panel.action';
import { RunBulkActionRecordPanelAction } from './bulk-action/run-bulk-action.record-panel.action';
import * as i0 from "@angular/core";
export declare class RecordPanelActionManager extends BaseActionManager<ListViewRecordPanelActionData> {
    constructor(runBulkAction: RunBulkActionRecordPanelAction, cancel: CancelRecordPanelAction);
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordPanelActionManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordPanelActionManager>;
}
