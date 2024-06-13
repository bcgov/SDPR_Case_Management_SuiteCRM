import { SavedFilterActionManager } from '../actions/saved-filter-action-manager.service';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { SavedFilterActionsAdapter } from './actions.adapter';
import { LanguageStore } from '../../../store/language/language.store';
import { MessageService } from '../../../services/message/message.service';
import { ListFilterStore } from '../store/list-filter/list-filter.store';
import { SavedFilterStore } from '../store/saved-filter/saved-filter.store';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare class SavedFilterActionAdapterFactory {
    protected language: LanguageStore;
    protected actionManager: SavedFilterActionManager;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confimation: ConfirmationModalService;
    protected selectModalService: SelectModalService;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    constructor(language: LanguageStore, actionManager: SavedFilterActionManager, asyncActionService: AsyncActionService, message: MessageService, confimation: ConfirmationModalService, selectModalService: SelectModalService, metadata: MetadataStore, appMetadataStore: AppMetadataStore);
    create(store: SavedFilterStore, listFilterStore: ListFilterStore): SavedFilterActionsAdapter;
    static ɵfac: i0.ɵɵFactoryDeclaration<SavedFilterActionAdapterFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SavedFilterActionAdapterFactory>;
}
