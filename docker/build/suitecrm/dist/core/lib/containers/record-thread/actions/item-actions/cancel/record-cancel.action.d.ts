import { ViewMode } from 'common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModuleNavigation } from '../../../../../services/navigation/module-navigation/module-navigation.service';
import { RecordThreadItemActionData, RecordThreadItemActionHandler } from '../record-thread-item.action';
import * as i0 from "@angular/core";
export declare class RecordThreadItemCancelAction extends RecordThreadItemActionHandler {
    private modalService;
    protected navigation: ModuleNavigation;
    key: string;
    modes: ViewMode[];
    constructor(modalService: NgbModal, navigation: ModuleNavigation);
    run(data: RecordThreadItemActionData): void;
    shouldDisplay(): boolean;
    protected cancel(data: RecordThreadItemActionData): void;
    protected showConfirmationModal(data: RecordThreadItemActionData): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordThreadItemCancelAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordThreadItemCancelAction>;
}
