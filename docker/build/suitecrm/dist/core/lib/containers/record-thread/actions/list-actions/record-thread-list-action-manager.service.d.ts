import { BaseActionManager } from '../../../../services/actions/base-action-manager.service';
import { AsyncProcessRecordThreadListAction } from './async-process/async-process.service';
import { RecordThreadListActionData } from "./record-thread-list.action";
import * as i0 from "@angular/core";
export declare class RecordThreadListActionManager extends BaseActionManager<RecordThreadListActionData> {
    protected async: AsyncProcessRecordThreadListAction;
    constructor(async: AsyncProcessRecordThreadListAction);
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordThreadListActionManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordThreadListActionManager>;
}
