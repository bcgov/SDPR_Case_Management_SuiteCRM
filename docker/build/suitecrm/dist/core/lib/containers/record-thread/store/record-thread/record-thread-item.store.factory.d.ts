import { RecordThreadItemStore } from './record-thread-item.store';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { MessageService } from '../../../../services/message/message.service';
import { FieldManager } from '../../../../services/record/field/field.manager';
import { LanguageStore } from '../../../../store/language/language.store';
import { RecordStoreFactory } from '../../../../store/record/record.store.factory';
import { BaseRecordItemStoreFactoryInterface } from './base-record-thread-thread.model';
import { RecordThreadItemMetadata } from './record-thread-item.store.model';
import * as i0 from "@angular/core";
export declare class RecordThreadItemStoreFactory implements BaseRecordItemStoreFactoryInterface<RecordThreadItemStore, RecordThreadItemMetadata> {
    protected appStateStore: AppStateStore;
    protected meta: MetadataStore;
    protected message: MessageService;
    protected fieldManager: FieldManager;
    protected language: LanguageStore;
    protected storeFactory: RecordStoreFactory;
    constructor(appStateStore: AppStateStore, meta: MetadataStore, message: MessageService, fieldManager: FieldManager, language: LanguageStore, storeFactory: RecordStoreFactory);
    create(): RecordThreadItemStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordThreadItemStoreFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordThreadItemStoreFactory>;
}
