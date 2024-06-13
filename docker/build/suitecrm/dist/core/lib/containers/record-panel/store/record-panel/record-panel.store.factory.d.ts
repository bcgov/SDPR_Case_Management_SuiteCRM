import { RecordFetchGQL } from '../../../../store/record/graphql/api.record.get';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { LanguageStore } from '../../../../store/language/language.store';
import { MessageService } from '../../../../services/message/message.service';
import { RecordManager } from '../../../../services/record/record.manager';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { FieldManager } from '../../../../services/record/field/field.manager';
import { RecordPanelStore } from './record-panel.store';
import { RecordStoreFactory } from '../../../../store/record/record.store.factory';
import { RecordSaveGQL } from '../../../../store/record/graphql/api.record.save';
import * as i0 from "@angular/core";
export declare class RecordPanelStoreFactory {
    protected recordFetchGQL: RecordFetchGQL;
    protected recordSaveGQL: RecordSaveGQL;
    protected appStateStore: AppStateStore;
    protected languageStore: LanguageStore;
    protected metadataStore: MetadataStore;
    protected message: MessageService;
    protected recordManager: RecordManager;
    protected fieldManager: FieldManager;
    protected recordStoreFactory: RecordStoreFactory;
    constructor(recordFetchGQL: RecordFetchGQL, recordSaveGQL: RecordSaveGQL, appStateStore: AppStateStore, languageStore: LanguageStore, metadataStore: MetadataStore, message: MessageService, recordManager: RecordManager, fieldManager: FieldManager, recordStoreFactory: RecordStoreFactory);
    create(): RecordPanelStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordPanelStoreFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordPanelStoreFactory>;
}
