import { ViewMode } from 'common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ModuleNameMapper } from '../../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { RecordActionData, RecordActionHandler } from '../record.action';
import { ActionNameMapper } from '../../../../services/navigation/action-name-mapper/action-name-mapper.service';
import * as i0 from "@angular/core";
export declare class CancelCreateAction extends RecordActionHandler {
    private modalService;
    protected router: Router;
    protected moduleNameMapper: ModuleNameMapper;
    protected actionNameMapper: ActionNameMapper;
    key: string;
    modes: ViewMode[];
    constructor(modalService: NgbModal, router: Router, moduleNameMapper: ModuleNameMapper, actionNameMapper: ActionNameMapper);
    run(data: RecordActionData): void;
    shouldDisplay(): boolean;
    protected cancel(data: RecordActionData): void;
    protected showConfirmationModal(data: RecordActionData): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CancelCreateAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CancelCreateAction>;
}
