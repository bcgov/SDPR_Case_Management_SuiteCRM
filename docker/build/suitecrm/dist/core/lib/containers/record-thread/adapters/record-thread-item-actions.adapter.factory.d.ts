import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { RecordThreadItemActionsAdapter } from './record-thread-item-actions.adapter';
import { RecordThreadStore } from '../store/record-thread/record-thread.store';
import { RecordThreadItemStore } from '../store/record-thread/record-thread-item.store';
import { LanguageStore } from '../../../store/language/language.store';
import { RecordThreadItemActionManager } from '../actions/item-actions/record-thread-item-action-manager.service';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { RecordThreadItemConfig } from '../components/record-thread-item/record-thread-item.model';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare class RecordThreadItemActionsAdapterFactory {
    protected language: LanguageStore;
    protected actionManager: RecordThreadItemActionManager;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected selectModalService: SelectModalService;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    constructor(language: LanguageStore, actionManager: RecordThreadItemActionManager, asyncActionService: AsyncActionService, message: MessageService, confirmation: ConfirmationModalService, selectModalService: SelectModalService, metadata: MetadataStore, appMetadataStore: AppMetadataStore);
    create(itemStore: RecordThreadItemStore, threadStore: RecordThreadStore, config?: RecordThreadItemConfig): RecordThreadItemActionsAdapter;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordThreadItemActionsAdapterFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordThreadItemActionsAdapterFactory>;
}
