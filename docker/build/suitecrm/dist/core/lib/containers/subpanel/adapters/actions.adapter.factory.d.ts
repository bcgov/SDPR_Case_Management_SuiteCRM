import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { SubpanelActionsAdapter } from './actions.adapter';
import { LanguageStore } from '../../../store/language/language.store';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { SubpanelStore } from "../store/subpanel/subpanel.store";
import { SubpanelActionManager } from "../components/subpanel/action-manager.service";
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare class SubpanelActionAdapterFactory {
    protected language: LanguageStore;
    protected actionManager: SubpanelActionManager;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confimation: ConfirmationModalService;
    protected selectModalService: SelectModalService;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    constructor(language: LanguageStore, actionManager: SubpanelActionManager, asyncActionService: AsyncActionService, message: MessageService, confimation: ConfirmationModalService, selectModalService: SelectModalService, metadata: MetadataStore, appMetadataStore: AppMetadataStore);
    create(store: SubpanelStore): SubpanelActionsAdapter;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelActionAdapterFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SubpanelActionAdapterFactory>;
}
