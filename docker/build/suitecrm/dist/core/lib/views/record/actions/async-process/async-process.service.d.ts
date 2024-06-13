import { RecordActionData, RecordActionHandler } from '../record.action';
import * as i0 from "@angular/core";
export declare class AsyncProcessRecordAction extends RecordActionHandler {
    key: string;
    modes: import("common").ViewMode[];
    constructor();
    run(data: RecordActionData): void;
    shouldDisplay(data: RecordActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AsyncProcessRecordAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AsyncProcessRecordAction>;
}
