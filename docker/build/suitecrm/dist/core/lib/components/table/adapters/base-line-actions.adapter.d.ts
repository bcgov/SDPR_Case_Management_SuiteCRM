import { Action, ActionContext } from 'common';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { LineActionActionManager } from '../line-actions/line-action-manager.service';
import { LineActionData } from '../line-actions/line.action';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import { LanguageStore } from '../../../store/language/language.store';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare abstract class BaseLineActionsAdapter extends BaseRecordActionsAdapter<LineActionData> {
    protected actionManager: LineActionActionManager;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected language: LanguageStore;
    protected selectModalService: SelectModalService;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    protected constructor(actionManager: LineActionActionManager, asyncActionService: AsyncActionService, message: MessageService, confirmation: ConfirmationModalService, language: LanguageStore, selectModalService: SelectModalService, metadata: MetadataStore, appMetadataStore: AppMetadataStore);
    protected buildActionData(action: Action, context?: ActionContext): LineActionData;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseLineActionsAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BaseLineActionsAdapter>;
}
