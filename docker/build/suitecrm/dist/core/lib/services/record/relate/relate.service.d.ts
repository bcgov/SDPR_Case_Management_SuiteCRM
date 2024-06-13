import { RecordListStoreFactory } from '../../../store/record-list/record-list.store.factory';
import { RecordListStore } from '../../../store/record-list/record-list.store';
import { Record } from 'common';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class RelateService {
    recordList: RecordListStore;
    constructor(recordListStoreFactory: RecordListStoreFactory);
    init(module: string): void;
    search(term: string, field: string): Observable<Record[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RelateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RelateService>;
}
