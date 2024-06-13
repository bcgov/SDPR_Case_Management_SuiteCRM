import { BaseActionManager } from '../../../../services/actions/base-action-manager.service';
import { AsyncProcessRecordThreadItemAction } from './async-process/async-process.service';
import { RecordThreadItemActionData } from './record-thread-item.action';
import { RecordThreadItemCancelAction } from './cancel/record-cancel.action';
import { RecordThreadItemEditAction } from './edit/record-edit.action';
import { RecordThreadItemSaveAction } from './save/record-save.action';
import * as i0 from "@angular/core";
export declare class RecordThreadItemActionManager extends BaseActionManager<RecordThreadItemActionData> {
    protected async: AsyncProcessRecordThreadItemAction;
    protected cancel: RecordThreadItemCancelAction;
    protected edit: RecordThreadItemEditAction;
    protected save: RecordThreadItemSaveAction;
    constructor(async: AsyncProcessRecordThreadItemAction, cancel: RecordThreadItemCancelAction, edit: RecordThreadItemEditAction, save: RecordThreadItemSaveAction);
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordThreadItemActionManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordThreadItemActionManager>;
}
