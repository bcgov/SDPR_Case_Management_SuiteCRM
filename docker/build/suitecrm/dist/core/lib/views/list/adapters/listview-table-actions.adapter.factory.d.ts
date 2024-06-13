import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { ListViewStore } from '../store/list-view/list-view.store';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { ListViewTableActionsAdapter } from "./listview-table-actions.adapter";
import { TableActionManager } from "../table-actions/table-action-manager.service";
import { LanguageStore } from "../../../store/language/language.store";
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare class ListviewTableActionsAdapterFactory {
    protected actionManager: TableActionManager;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected language: LanguageStore;
    protected selectModalService: SelectModalService;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    constructor(actionManager: TableActionManager, asyncActionService: AsyncActionService, message: MessageService, confirmation: ConfirmationModalService, language: LanguageStore, selectModalService: SelectModalService, metadata: MetadataStore, appMetadataStore: AppMetadataStore);
    create(store: ListViewStore): ListViewTableActionsAdapter;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListviewTableActionsAdapterFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListviewTableActionsAdapterFactory>;
}
