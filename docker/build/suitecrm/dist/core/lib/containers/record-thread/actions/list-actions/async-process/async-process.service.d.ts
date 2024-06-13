import { RecordThreadListActionData, RecordThreadListActionHandler } from "../record-thread-list.action";
import * as i0 from "@angular/core";
export declare class AsyncProcessRecordThreadListAction extends RecordThreadListActionHandler {
    key: string;
    modes: import("common").ViewMode[];
    constructor();
    run(data: RecordThreadListActionData): void;
    shouldDisplay(data: RecordThreadListActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AsyncProcessRecordThreadListAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AsyncProcessRecordThreadListAction>;
}
