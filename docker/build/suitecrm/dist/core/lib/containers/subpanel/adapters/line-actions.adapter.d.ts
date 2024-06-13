import { Action, ActionContext, ViewMode } from 'common';
import { Observable } from 'rxjs';
import { AsyncActionInput, AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { Process } from '../../../services/process/process.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { LanguageStore } from '../../../store/language/language.store';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import { SubpanelLineActionData } from '../line-actions/line.action';
import { SubpanelStore } from '../store/subpanel/subpanel.store';
import { SubpanelLineActionManager } from '../line-actions/line-action-manager.service';
import { SelectModalService } from "../../../services/modals/select-modal.service";
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare class SubpanelLineActionsAdapter extends BaseRecordActionsAdapter<SubpanelLineActionData> {
    protected store: SubpanelStore;
    protected actionManager: SubpanelLineActionManager;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected language: LanguageStore;
    protected selectModalService: SelectModalService;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    constructor(store: SubpanelStore, actionManager: SubpanelLineActionManager, asyncActionService: AsyncActionService, message: MessageService, confirmation: ConfirmationModalService, language: LanguageStore, selectModalService: SelectModalService, metadata: MetadataStore, appMetadataStore: AppMetadataStore);
    getActions(context?: ActionContext): Observable<Action[]>;
    protected buildActionData(action: Action, context?: ActionContext): SubpanelLineActionData;
    protected getMode(): ViewMode;
    protected getModuleName(context?: ActionContext): string;
    protected reload(action: Action, process: Process, context?: ActionContext): void;
    /**
     * Build backend process input
     *
     * @param action
     * @param actionName
     * @param moduleName
     * @param context
     */
    protected buildActionInput(action: Action, actionName: string, moduleName: string, context?: ActionContext): AsyncActionInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelLineActionsAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SubpanelLineActionsAdapter>;
}
