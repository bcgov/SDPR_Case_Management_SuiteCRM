import { BulkActionsMap } from 'common';
import { Observable } from 'rxjs';
import { AsyncActionInput, AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { Process } from '../../../services/process/process.service';
import { ListViewStore } from '../store/list-view/list-view.store';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { BulkActionDataSource } from '../../../components/bulk-action-menu/bulk-action-menu.component';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare class BulkActionsAdapter implements BulkActionDataSource {
    protected store: ListViewStore;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected selectModalService: SelectModalService;
    protected asyncAction: AsyncActionService;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    constructor(store: ListViewStore, message: MessageService, confirmation: ConfirmationModalService, selectModalService: SelectModalService, asyncAction: AsyncActionService, metadata: MetadataStore, appMetadataStore: AppMetadataStore);
    /**
     * Get bulk action
     * @returns {object} Observable<BulkActionsMap>
     */
    getBulkActions(): Observable<BulkActionsMap>;
    /**
     * Execute bulk actions
     * @param {string} action
     */
    executeBulkAction(action: string): void;
    /**
     * Run async buk action
     *
     * @returns void
     * @param {string} selectModule: module for which records are listed in Select Modal/Popup
     * @param {string} asyncAction: bulk action name
     * @param {AsyncActionInput} asyncData: data passed to the async process
     */
    showSelectModal(selectModule: string, asyncAction: string, asyncData: AsyncActionInput): void;
    /**
     * Run async buk action
     *
     * @returns void
     * @param {string} asyncAction: bulk action name
     * @param {AsyncActionInput} asyncData: data passed to the async process
     */
    runBulkAction(asyncAction: string, asyncData: AsyncActionInput): void;
    /**
     * Run this function once the process is executed
     *
     * @returns void
     * @param {Process} process: data returned by the process once the process is executed
     */
    handleProcessResult(process: Process): void;
    /**
     * Reload the metadata for the module
     * @param moduleName
     * @param process
     * @protected
     */
    protected reloadMetadata(moduleName: string, process: Process): void;
    /**
     * Should reload page
     * @param process
     */
    protected shouldReloadGlobalRecentlyViewed(process: Process): boolean;
    /**
     * Should reload page
     * @param process
     */
    protected shouldReloadRecentlyViewed(process: Process): boolean;
    /**
     * Should reload page
     * @param process
     */
    protected shouldReloadFavorites(process: Process): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<BulkActionsAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BulkActionsAdapter>;
}
