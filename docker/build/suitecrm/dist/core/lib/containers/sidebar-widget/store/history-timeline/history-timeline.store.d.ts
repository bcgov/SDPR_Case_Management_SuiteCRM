import { StateStore } from '../../../../store/state';
import { RecordList } from '../../../../store/record-list/record-list.store';
import { Observable } from 'rxjs';
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { ViewContext } from 'common';
import * as i0 from "@angular/core";
export declare class HistoryTimelineStore implements StateStore {
    protected listStoreFactory: RecordListStoreFactory;
    private recordList;
    private viewContext;
    constructor(listStoreFactory: RecordListStoreFactory);
    clear(): void;
    clearAuthBased(): void;
    /**
     * Initial list records load if not cached and update state.
     *
     * @param {ViewContext} context of parent
     * @description initialize the Record List Store
     * returns {void}
     */
    init(context: any): void;
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordList>
     */
    load(useCache?: boolean): Observable<RecordList>;
    /**
     * Init search criteria
     *
     * @param {number} offset of the recordset
     * @param {number} limit of the recordset
     * @description initialize the search module/criteria(offset/limit) for the record set
     */
    initSearchCriteria(offset: number, limit: number): void;
    protected initViewContext(viewContext: ViewContext): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HistoryTimelineStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HistoryTimelineStore>;
}
