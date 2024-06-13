import { RecordListStoreFactory } from "../../../../store/record-list/record-list.store.factory";
import { HistoryTimelineStore } from "../../store/history-timeline/history-timeline.store";
import * as i0 from "@angular/core";
export declare class HistoryTimelineStoreFactory {
    protected listStoreFactory: RecordListStoreFactory;
    constructor(listStoreFactory: RecordListStoreFactory);
    create(): HistoryTimelineStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<HistoryTimelineStoreFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HistoryTimelineStoreFactory>;
}
