import { ListViewStore } from '../store/list-view/list-view.store';
import { RecordPanelActionData, RecordPanelConfig } from '../../../containers/record-panel/components/record-panel/record-panel.model';
import { RecordPanelStore } from '../../../containers/record-panel/store/record-panel/record-panel.store';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import { ListViewRecordPanelActionAdapterFactory } from './record-panel-actions.adapter.factory';
import { RecordPanelStoreFactory } from '../../../containers/record-panel/store/record-panel/record-panel.store.factory';
import { ViewMode } from 'common';
import { RecordManager } from '../../../services/record/record.manager';
import * as i0 from "@angular/core";
export declare class RecordPanelAdapter {
    protected store: ListViewStore;
    protected recordPanelStoreFactory: RecordPanelStoreFactory;
    protected actionAdapterFactory: ListViewRecordPanelActionAdapterFactory;
    protected recordManager: RecordManager;
    constructor(store: ListViewStore, recordPanelStoreFactory: RecordPanelStoreFactory, actionAdapterFactory: ListViewRecordPanelActionAdapterFactory, recordManager: RecordManager);
    getConfig(): RecordPanelConfig;
    /**
     * Get configured module
     * @returns {string} module
     */
    protected getModule(): string;
    /**
     * Get configured view mode
     * @returns {string} ViewMode
     */
    protected getViewMode(): ViewMode;
    /**
     * Create and init store
     * @returns {object} RecordPanelStore
     */
    protected createStore(): RecordPanelStore;
    /**
     * Create action adapter
     * @returns {object} BaseRecordActionsAdapter
     */
    protected createActionAdapter(store: RecordPanelStore): BaseRecordActionsAdapter<RecordPanelActionData>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordPanelAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordPanelAdapter>;
}
