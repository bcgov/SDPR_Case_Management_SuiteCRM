import { RecordMapperRegistry, ViewFieldDefinition } from 'common';
import { RecordStore } from './record.store';
import { Observable } from 'rxjs';
import { RecordFetchGQL } from './graphql/api.record.get';
import { RecordSaveGQL } from './graphql/api.record.save';
import { MessageService } from '../../services/message/message.service';
import { RecordManager } from '../../services/record/record.manager';
import { BaseSaveRecordMapper } from './record-mappers/base-save.record-mapper';
import * as i0 from "@angular/core";
export declare class RecordStoreFactory {
    protected recordFetchGQL: RecordFetchGQL;
    protected recordSaveGQL: RecordSaveGQL;
    protected message: MessageService;
    protected recordManager: RecordManager;
    protected recordMappers: RecordMapperRegistry;
    protected baseMapper: BaseSaveRecordMapper;
    constructor(recordFetchGQL: RecordFetchGQL, recordSaveGQL: RecordSaveGQL, message: MessageService, recordManager: RecordManager, recordMappers: RecordMapperRegistry, baseMapper: BaseSaveRecordMapper);
    create(definitions$: Observable<ViewFieldDefinition[]>): RecordStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordStoreFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordStoreFactory>;
}
