import { ViewMode } from 'common';
import { Process } from '../../../../../services/process/process.service';
import { ConfirmationModalService } from '../../../../../services/modals/confirmation-modal.service';
import { ListViewRecordPanelActionData, ListViewRecordPanelActionHandler } from '../record-panel.action';
import { MessageService } from '../../../../../services/message/message.service';
import { AsyncActionInput, AsyncActionService } from '../../../../../services/process/processes/async-action/async-action';
import * as i0 from "@angular/core";
export declare class RunBulkActionRecordPanelAction extends ListViewRecordPanelActionHandler {
    protected message: MessageService;
    protected asyncActionService: AsyncActionService;
    protected confirmation: ConfirmationModalService;
    protected asyncAction: AsyncActionService;
    key: string;
    modes: ViewMode[];
    constructor(message: MessageService, asyncActionService: AsyncActionService, confirmation: ConfirmationModalService, asyncAction: AsyncActionService);
    run(data: ListViewRecordPanelActionData): void;
    shouldDisplay(): boolean;
    /**
     * Run async buk action
     *
     * @returns void
     * @param {AsyncActionInput} data: data passed to the async process
     */
    runBulkAction(data: ListViewRecordPanelActionData): void;
    /**
     * Build backend bulk action input
     * @param actionName
     * @param data
     */
    protected buildActionInput(actionName: string, data: ListViewRecordPanelActionData): AsyncActionInput;
    /**
     * Run this function once the process is executed
     *
     * @returns void
     * @param {object} process Process data returned by the process once the process is executed
     * @param {object} data ListViewRecordPanelActionData
     */
    protected handleProcessResult(process: Process, data: ListViewRecordPanelActionData): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RunBulkActionRecordPanelAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RunBulkActionRecordPanelAction>;
}
