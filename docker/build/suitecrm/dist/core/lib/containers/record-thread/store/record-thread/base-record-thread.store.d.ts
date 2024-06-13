import { StateStore } from '../../../../store/state';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { RecordList, RecordListStore } from '../../../../store/record-list/record-list.store';
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { Record } from 'common';
import { BaseRecordContainerStore } from '../../../../store/record-container/base-record-container.store';
import { BaseRecordItemStoreFactoryInterface } from './base-record-thread-thread.model';
import * as i0 from "@angular/core";
export interface RecordStoreMap<T extends BaseRecordContainerStore<M>, M> {
    [key: string]: T;
}
export declare abstract class RecordStoreList<T extends BaseRecordContainerStore<M>, M> implements StateStore {
    protected listStoreFactory: RecordListStoreFactory;
    protected recordStoreFactory: BaseRecordItemStoreFactoryInterface<T, M>;
    storesMap$: Observable<RecordStoreMap<T, M>>;
    stores$: Observable<T[]>;
    module: string;
    protected subs: Subscription[];
    protected recordList: RecordListStore;
    protected stores: T[];
    protected storeSubject: BehaviorSubject<T[]>;
    protected state$: Observable<T[]>;
    protected pageSize: number;
    protected constructor(listStoreFactory: RecordListStoreFactory, recordStoreFactory: BaseRecordItemStoreFactoryInterface<T, M>);
    clear(): void;
    clearAuthBased(): void;
    getItemMetadata(): M;
    getRecordList(): RecordListStore;
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @param {boolean} load
     * @param {number} pageSize
     */
    init(module: string, load?: boolean, pageSize?: number): void;
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordList>
     */
    load(useCache?: boolean): Observable<RecordList>;
    /**
     * Init record stores using records
     * @param records
     */
    protected initStores(records: Record[]): void;
    protected updateState(stores: T[]): void;
    getStoreMap(stores: T[]): RecordStoreMap<T, M>;
    getItemStores(): T[];
    getRecordIds(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordStoreList<any, any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordStoreList<any, any>>;
}
