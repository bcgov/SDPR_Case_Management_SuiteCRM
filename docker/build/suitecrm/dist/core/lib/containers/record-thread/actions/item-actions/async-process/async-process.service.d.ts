import { RecordThreadItemActionData, RecordThreadItemActionHandler } from '../record-thread-item.action';
import * as i0 from "@angular/core";
export declare class AsyncProcessRecordThreadItemAction extends RecordThreadItemActionHandler {
    key: string;
    modes: import("common").ViewMode[];
    constructor();
    run(data: RecordThreadItemActionData): void;
    shouldDisplay(data: RecordThreadItemActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AsyncProcessRecordThreadItemAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AsyncProcessRecordThreadItemAction>;
}
