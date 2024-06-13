import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { LanguageStore } from '../../../store/language/language.store';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { ListViewRecordPanelActionsAdapter } from './record-panel-actions.adapter';
import { RecordPanelStore } from '../../../containers/record-panel/store/record-panel/record-panel.store';
import { ListViewStore } from '../store/list-view/list-view.store';
import { RecordPanelActionManager } from '../actions/record-panel/record-panel-action-manager.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare class ListViewRecordPanelActionAdapterFactory {
    protected language: LanguageStore;
    protected actionManager: RecordPanelActionManager;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected selectModalService: SelectModalService;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    constructor(language: LanguageStore, actionManager: RecordPanelActionManager, asyncActionService: AsyncActionService, message: MessageService, confirmation: ConfirmationModalService, selectModalService: SelectModalService, metadata: MetadataStore, appMetadataStore: AppMetadataStore);
    create(store: RecordPanelStore, listStore: ListViewStore): ListViewRecordPanelActionsAdapter;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewRecordPanelActionAdapterFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListViewRecordPanelActionAdapterFactory>;
}
