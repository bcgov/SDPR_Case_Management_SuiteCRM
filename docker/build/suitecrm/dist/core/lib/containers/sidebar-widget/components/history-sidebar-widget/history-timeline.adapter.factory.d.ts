import { HistoryTimelineAdapter } from "./history-timeline.adapter.service";
import { HistoryTimelineStoreFactory } from "./history-timeline.store.factory";
import * as i0 from "@angular/core";
export declare class HistoryTimelineAdapterFactory {
    protected historyTimelineStoreFactory: HistoryTimelineStoreFactory;
    constructor(historyTimelineStoreFactory: HistoryTimelineStoreFactory);
    create(): HistoryTimelineAdapter;
    static ɵfac: i0.ɵɵFactoryDeclaration<HistoryTimelineAdapterFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HistoryTimelineAdapterFactory>;
}
