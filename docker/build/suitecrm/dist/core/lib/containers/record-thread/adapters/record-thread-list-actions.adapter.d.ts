import { Action, ActionContext, ModeActions, ViewMode } from 'common';
import { Observable } from 'rxjs';
import { AsyncActionInput, AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { LanguageStore } from '../../../store/language/language.store';
import { MessageService } from '../../../services/message/message.service';
import { Process } from '../../../services/process/process.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { RecordThreadStore } from '../store/record-thread/record-thread.store';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { RecordThreadListActionData } from "../actions/list-actions/record-thread-list.action";
import { RecordThreadListActionManager } from "../actions/list-actions/record-thread-list-action-manager.service";
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare class RecordThreadListActionsAdapter extends BaseRecordActionsAdapter<RecordThreadListActionData> {
    protected threadStore: RecordThreadStore;
    protected language: LanguageStore;
    protected actionManager: RecordThreadListActionManager;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected selectModalService: SelectModalService;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    defaultActions: ModeActions;
    collapseButtons: boolean;
    constructor(threadStore: RecordThreadStore, language: LanguageStore, actionManager: RecordThreadListActionManager, asyncActionService: AsyncActionService, message: MessageService, confirmation: ConfirmationModalService, selectModalService: SelectModalService, metadata: MetadataStore, appMetadataStore: AppMetadataStore);
    getActions(context?: ActionContext): Observable<Action[]>;
    /**
     * Get action name
     * @param action
     */
    protected getActionName(action: Action): string;
    protected buildActionData(action: Action, context?: ActionContext): RecordThreadListActionData;
    /**
     * Build backend process input
     *
     * @param action
     * @param actionName
     * @param moduleName
     * @param context
     */
    protected buildActionInput(action: Action, actionName: string, moduleName: string, context?: ActionContext): AsyncActionInput;
    protected getMode(): ViewMode;
    protected getModuleName(context?: ActionContext): string;
    protected reload(action: Action, process: Process, context?: ActionContext): void;
    /**
     * @inheritDoc
     */
    protected shouldReload(process: Process): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordThreadListActionsAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordThreadListActionsAdapter>;
}
