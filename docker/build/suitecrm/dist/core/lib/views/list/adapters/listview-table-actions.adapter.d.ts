import { Action, ActionContext, Record, ViewMode } from 'common';
import { Observable } from 'rxjs';
import { AsyncActionInput, AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { Process } from '../../../services/process/process.service';
import { ListViewStore } from '../store/list-view/list-view.store';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { LanguageStore } from '../../../store/language/language.store';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { BaseActionsAdapter } from "../../../services/actions/base-action.adapter";
import { TableActionData } from "../table-actions/table.action";
import { TableActionManager } from "../table-actions/table-action-manager.service";
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare class ListViewTableActionsAdapter extends BaseActionsAdapter<TableActionData> {
    protected store: ListViewStore;
    protected actionManager: TableActionManager;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected language: LanguageStore;
    protected selectModalService: SelectModalService;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    constructor(store: ListViewStore, actionManager: TableActionManager, asyncActionService: AsyncActionService, message: MessageService, confirmation: ConfirmationModalService, language: LanguageStore, selectModalService: SelectModalService, metadata: MetadataStore, appMetadataStore: AppMetadataStore);
    protected buildActionData(action: Action, context?: ActionContext): TableActionData;
    /**
     * Get action name
     * @param action
     */
    protected getActionName(action: Action): string;
    /**
     * Build backend process input
     *
     * @param action
     * @param actionName
     * @param moduleName
     * @param context
     */
    protected buildActionInput(action: Action, actionName: string, moduleName: string, context?: ActionContext): AsyncActionInput;
    getActions(context?: ActionContext): Observable<Action[]>;
    protected getModuleName(context?: ActionContext): string;
    protected reload(action: Action, process: Process, record?: Record): void;
    protected getMode(): ViewMode;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewTableActionsAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListViewTableActionsAdapter>;
}
