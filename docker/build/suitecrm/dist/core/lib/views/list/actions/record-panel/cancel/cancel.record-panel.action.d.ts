import { ViewMode } from 'common';
import { ListViewRecordPanelActionData, ListViewRecordPanelActionHandler } from '../record-panel.action';
import * as i0 from "@angular/core";
export declare class CancelRecordPanelAction extends ListViewRecordPanelActionHandler {
    key: string;
    modes: ViewMode[];
    constructor();
    run(data: ListViewRecordPanelActionData): void;
    shouldDisplay(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CancelRecordPanelAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CancelRecordPanelAction>;
}
