import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { RecordThreadStore } from '../store/record-thread/record-thread.store';
import { LanguageStore } from '../../../store/language/language.store';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { RecordThreadListActionsAdapter } from "./record-thread-list-actions.adapter";
import { RecordThreadListActionManager } from "../actions/list-actions/record-thread-list-action-manager.service";
import { RecordThreadConfig } from '../components/record-thread/record-thread.model';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare class RecordThreadListActionsAdapterFactory {
    protected language: LanguageStore;
    protected actionManager: RecordThreadListActionManager;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected selectModalService: SelectModalService;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    constructor(language: LanguageStore, actionManager: RecordThreadListActionManager, asyncActionService: AsyncActionService, message: MessageService, confirmation: ConfirmationModalService, selectModalService: SelectModalService, metadata: MetadataStore, appMetadataStore: AppMetadataStore);
    create(threadStore: RecordThreadStore, config: RecordThreadConfig): RecordThreadListActionsAdapter;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordThreadListActionsAdapterFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordThreadListActionsAdapterFactory>;
}
