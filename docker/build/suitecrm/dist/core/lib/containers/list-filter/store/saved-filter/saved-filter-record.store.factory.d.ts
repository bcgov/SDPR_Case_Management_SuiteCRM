import { RecordMapperRegistry, ViewFieldDefinition } from 'common';
import { SavedFilterRecordStore } from './saved-filter-record.store';
import { FieldManager } from '../../../../services/record/field/field.manager';
import { LanguageStore } from '../../../../store/language/language.store';
import { RecordFetchGQL } from '../../../../store/record/graphql/api.record.get';
import { RecordSaveGQL } from '../../../../store/record/graphql/api.record.save';
import { MessageService } from '../../../../services/message/message.service';
import { RecordManager } from '../../../../services/record/record.manager';
import { BaseSaveRecordMapper } from '../../../../store/record/record-mappers/base-save.record-mapper';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SavedFilterRecordStoreFactory {
    protected recordFetchGQL: RecordFetchGQL;
    protected recordSaveGQL: RecordSaveGQL;
    protected message: MessageService;
    protected recordManager: RecordManager;
    protected recordMappers: RecordMapperRegistry;
    protected baseMapper: BaseSaveRecordMapper;
    protected fieldManager: FieldManager;
    protected language: LanguageStore;
    constructor(recordFetchGQL: RecordFetchGQL, recordSaveGQL: RecordSaveGQL, message: MessageService, recordManager: RecordManager, recordMappers: RecordMapperRegistry, baseMapper: BaseSaveRecordMapper, fieldManager: FieldManager, language: LanguageStore);
    create(definitions$: Observable<ViewFieldDefinition[]>): SavedFilterRecordStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<SavedFilterRecordStoreFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SavedFilterRecordStoreFactory>;
}
