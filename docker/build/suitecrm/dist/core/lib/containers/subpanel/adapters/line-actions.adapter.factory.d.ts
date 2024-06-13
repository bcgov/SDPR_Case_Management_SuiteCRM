import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { LanguageStore } from '../../../store/language/language.store';
import { SubpanelStore } from '../store/subpanel/subpanel.store';
import { SubpanelLineActionsAdapter } from './line-actions.adapter';
import { SubpanelLineActionManager } from '../line-actions/line-action-manager.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare class SubpanelLineActionsAdapterFactory {
    protected actionManager: SubpanelLineActionManager;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected language: LanguageStore;
    protected selectModalService: SelectModalService;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    constructor(actionManager: SubpanelLineActionManager, asyncActionService: AsyncActionService, message: MessageService, confirmation: ConfirmationModalService, language: LanguageStore, selectModalService: SelectModalService, metadata: MetadataStore, appMetadataStore: AppMetadataStore);
    create(store: SubpanelStore): SubpanelLineActionsAdapter;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelLineActionsAdapterFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SubpanelLineActionsAdapterFactory>;
}
