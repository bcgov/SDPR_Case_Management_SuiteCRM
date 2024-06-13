import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
export declare class ConfirmationModalService {
    private modalService;
    constructor(modalService: NgbModal);
    showModal(messageLabel: string, onProceed: Function): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmationModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfirmationModalService>;
}
