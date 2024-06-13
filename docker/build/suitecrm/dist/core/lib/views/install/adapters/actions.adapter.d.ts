import { Action, ActionContext, ModeActions, ViewMode } from 'common';
import { Observable } from 'rxjs';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { AsyncActionInput, AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { LanguageStore } from '../../../store/language/language.store';
import { MessageService } from '../../../services/message/message.service';
import { Process } from '../../../services/process/process.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import { InstallViewActionData } from '../actions/install-view.action';
import { InstallViewStore } from '../store/install-view/install-view.store';
import { InstallActionManager } from '../actions/install-action-manager.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare class InstallActionsAdapter extends BaseRecordActionsAdapter<InstallViewActionData> {
    protected store: InstallViewStore;
    protected metadata: MetadataStore;
    protected language: LanguageStore;
    protected actionManager: InstallActionManager;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected selectModalService: SelectModalService;
    protected appMetadataStore: AppMetadataStore;
    defaultActions: ModeActions;
    collapseButtons: boolean;
    constructor(store: InstallViewStore, metadata: MetadataStore, language: LanguageStore, actionManager: InstallActionManager, asyncActionService: AsyncActionService, message: MessageService, confirmation: ConfirmationModalService, selectModalService: SelectModalService, appMetadataStore: AppMetadataStore);
    getActions(context?: ActionContext): Observable<Action[]>;
    protected buildActionData(action: Action, context?: ActionContext): InstallViewActionData;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<InstallActionsAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InstallActionsAdapter>;
}
