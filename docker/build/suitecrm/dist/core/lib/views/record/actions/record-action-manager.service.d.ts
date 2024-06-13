import { RecordActionData } from './record.action';
import { RecordCancelAction } from './cancel/record-cancel.action';
import { RecordSaveAction } from './save/record-save.action';
import { RecordToggleWidgetsAction } from './toggle-widgets/record-widget-action.service';
import { RecordEditAction } from './edit/record-edit.action';
import { RecordCreateAction } from './create/record-create.action';
import { RecordSaveNewAction } from './save-new/record-save-new.action';
import { CancelCreateAction } from './cancel-create/cancel-create.action';
import { BaseActionManager } from '../../../services/actions/base-action-manager.service';
import { AsyncProcessRecordAction } from './async-process/async-process.service';
import * as i0 from "@angular/core";
export declare class RecordActionManager extends BaseActionManager<RecordActionData> {
    protected edit: RecordEditAction;
    protected create: RecordCreateAction;
    protected toggleWidgets: RecordToggleWidgetsAction;
    protected cancel: RecordCancelAction;
    protected cancelCreate: CancelCreateAction;
    protected save: RecordSaveAction;
    protected saveNew: RecordSaveNewAction;
    protected async: AsyncProcessRecordAction;
    constructor(edit: RecordEditAction, create: RecordCreateAction, toggleWidgets: RecordToggleWidgetsAction, cancel: RecordCancelAction, cancelCreate: CancelCreateAction, save: RecordSaveAction, saveNew: RecordSaveNewAction, async: AsyncProcessRecordAction);
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordActionManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordActionManager>;
}
