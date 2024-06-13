import { RecordThreadStore } from './record-thread.store';
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { RecordThreadItemStoreFactory } from './record-thread-item.store.factory';
import * as i0 from "@angular/core";
export declare class RecordThreadStoreFactory {
    protected recordListFactory: RecordListStoreFactory;
    protected recordStoreFactory: RecordThreadItemStoreFactory;
    constructor(recordListFactory: RecordListStoreFactory, recordStoreFactory: RecordThreadItemStoreFactory);
    create(): RecordThreadStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordThreadStoreFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordThreadStoreFactory>;
}
