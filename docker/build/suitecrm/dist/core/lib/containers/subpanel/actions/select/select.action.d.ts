import { Record, ViewMode } from 'common';
import { SubpanelActionData, SubpanelActionHandler } from '../subpanel.action';
import { RecordListModalResult } from "../../../record-list-modal/components/record-list-modal/record-list-modal.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AsyncActionInput, AsyncActionService } from '../../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../../services/message/message.service';
import * as i0 from "@angular/core";
export declare class SubpanelSelectAction extends SubpanelActionHandler {
    protected modalService: NgbModal;
    protected message: MessageService;
    protected asyncActionService: AsyncActionService;
    key: string;
    modes: ViewMode[];
    constructor(modalService: NgbModal, message: MessageService, asyncActionService: AsyncActionService);
    shouldDisplay(data: SubpanelActionData): boolean;
    run(data: SubpanelActionData): void;
    /**
     * Show record selection modal
     */
    protected showSelectModal(data: SubpanelActionData): void;
    /**
     * Get Selected Record
     *
     * @param {object} data RecordListModalResult
     * @returns {object} Record
     **/
    protected getSelectedIds(data: RecordListModalResult): Record[];
    protected runAsyncAction(asyncData: AsyncActionInput, data: SubpanelActionData): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelSelectAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SubpanelSelectAction>;
}
