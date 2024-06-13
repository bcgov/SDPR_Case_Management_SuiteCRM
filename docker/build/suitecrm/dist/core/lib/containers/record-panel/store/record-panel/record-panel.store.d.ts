import { Observable } from 'rxjs';
import { Record, ViewFieldDefinition, ViewMode } from 'common';
import { BaseRecordContainerStore } from '../../../../store/record-container/base-record-container.store';
import { RecordPanelMetadata } from './record-panel.store.model';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { MessageService } from '../../../../services/message/message.service';
import { FieldManager } from '../../../../services/record/field/field.manager';
import { LanguageStore } from '../../../../store/language/language.store';
import { RecordStoreFactory } from '../../../../store/record/record.store.factory';
import * as i0 from "@angular/core";
export declare class RecordPanelStore extends BaseRecordContainerStore<RecordPanelMetadata> {
    protected appStateStore: AppStateStore;
    protected meta: MetadataStore;
    protected message: MessageService;
    protected fieldManager: FieldManager;
    protected language: LanguageStore;
    protected storeFactory: RecordStoreFactory;
    constructor(appStateStore: AppStateStore, meta: MetadataStore, message: MessageService, fieldManager: FieldManager, language: LanguageStore, storeFactory: RecordStoreFactory);
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    getViewFields$(): Observable<ViewFieldDefinition[]>;
    /**
     * Get view fields keys observable
     *
     * @returns {object} Observable<string[]>
     */
    getViewFieldsKeys$(): Observable<string[]>;
    /**
     * Init record
     *
     * @param {object} record to use
     * @param {string} mode to use
     * @param {boolean} loadMetadata to use
     * @returns {object} Observable<any>
     */
    initRecord(record: Record, mode?: ViewMode, loadMetadata?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordPanelStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordPanelStore>;
}
