import { ViewMode } from 'common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecordActionData, RecordActionHandler } from '../record.action';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import * as i0 from "@angular/core";
export declare class RecordCancelAction extends RecordActionHandler {
    private modalService;
    protected navigation: ModuleNavigation;
    key: string;
    modes: ViewMode[];
    constructor(modalService: NgbModal, navigation: ModuleNavigation);
    run(data: RecordActionData): void;
    shouldDisplay(): boolean;
    protected cancel(data: RecordActionData): void;
    protected showConfirmationModal(data: RecordActionData): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordCancelAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordCancelAction>;
}
