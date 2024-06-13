import { ViewMode } from 'common';
import { RecordActionData, RecordActionHandler } from '../record.action';
import * as i0 from "@angular/core";
export declare class RecordToggleWidgetsAction extends RecordActionHandler {
    key: string;
    modes: ViewMode[];
    constructor();
    run(data: RecordActionData): void;
    shouldDisplay(data: RecordActionData): boolean;
    getStatus(data: RecordActionData): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordToggleWidgetsAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordToggleWidgetsAction>;
}
