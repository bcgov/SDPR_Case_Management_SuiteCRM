import { ViewMode } from 'common';
import { RecordActionData, RecordActionHandler } from '../record.action';
import * as i0 from "@angular/core";
export declare class RecordEditAction extends RecordActionHandler {
    key: string;
    modes: ViewMode[];
    constructor();
    run(data: RecordActionData): void;
    shouldDisplay(data: RecordActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordEditAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordEditAction>;
}
