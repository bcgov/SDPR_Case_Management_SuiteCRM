import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { ListViewStore } from '../store/list-view/list-view.store';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { BulkActionsAdapter } from './bulk-actions.adapter';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare class BulkActionsAdapterFactory {
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected selectModalService: SelectModalService;
    protected asyncAction: AsyncActionService;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    constructor(message: MessageService, confirmation: ConfirmationModalService, selectModalService: SelectModalService, asyncAction: AsyncActionService, metadata: MetadataStore, appMetadataStore: AppMetadataStore);
    create(store: ListViewStore): BulkActionsAdapter;
    static ɵfac: i0.ɵɵFactoryDeclaration<BulkActionsAdapterFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BulkActionsAdapterFactory>;
}
