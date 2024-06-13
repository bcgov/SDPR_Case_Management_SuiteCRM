import { Action, ActionContext, ActionManager } from 'common';
import { AsyncActionInput, AsyncActionService } from '../process/processes/async-action/async-action';
import { MessageService } from '../message/message.service';
import { ConfirmationModalService } from '../modals/confirmation-modal.service';
import { BaseActionsAdapter } from './base-action.adapter';
import { LanguageStore } from '../../store/language/language.store';
import { SelectModalService } from '../modals/select-modal.service';
import { MetadataStore } from '../../store/metadata/metadata.store.service';
import { AppMetadataStore } from "../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare abstract class BaseRecordActionsAdapter<D> extends BaseActionsAdapter<D> {
    protected actionManager: ActionManager<D>;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected language: LanguageStore;
    protected selectModalService: SelectModalService;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    protected constructor(actionManager: ActionManager<D>, asyncActionService: AsyncActionService, message: MessageService, confirmation: ConfirmationModalService, language: LanguageStore, selectModalService: SelectModalService, metadata: MetadataStore, appMetadataStore: AppMetadataStore);
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
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseRecordActionsAdapter<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BaseRecordActionsAdapter<any>>;
}
