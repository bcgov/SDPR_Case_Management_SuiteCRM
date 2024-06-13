import { Record, ViewMode } from 'common';
import { InstallViewActionData, InstallViewActionHandler } from '../install-view.action';
import { MessageService } from '../../../../services/message/message.service';
import { AsyncActionService } from '../../../../services/process/processes/async-action/async-action';
import { Router } from '@angular/router';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { StateManager } from '../../../../store/state-manager';
import { LocalStorageService } from '../../../../services/local-storage/local-storage.service';
import * as i0 from "@angular/core";
export declare class InstallAction extends InstallViewActionHandler {
    protected message: MessageService;
    protected asyncActionService: AsyncActionService;
    protected router: Router;
    protected modalService: NgbModal;
    protected state: StateManager;
    protected localStorage: LocalStorageService;
    key: string;
    modes: ViewMode[];
    constructor(message: MessageService, asyncActionService: AsyncActionService, router: Router, modalService: NgbModal, state: StateManager, localStorage: LocalStorageService);
    run(data: InstallViewActionData): void;
    shouldDisplay(): boolean;
    runInstall(stagingRecord: Record): void;
    openErrorModalDialog(errors: []): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InstallAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InstallAction>;
}
