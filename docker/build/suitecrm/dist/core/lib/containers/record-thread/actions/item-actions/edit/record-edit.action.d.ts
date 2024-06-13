import { ViewMode } from 'common';
import { RecordThreadItemActionData, RecordThreadItemActionHandler } from '../record-thread-item.action';
import * as i0 from "@angular/core";
export declare class RecordThreadItemEditAction extends RecordThreadItemActionHandler {
    key: string;
    modes: ViewMode[];
    constructor();
    run(data: RecordThreadItemActionData): void;
    shouldDisplay(data: RecordThreadItemActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordThreadItemEditAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordThreadItemEditAction>;
}
