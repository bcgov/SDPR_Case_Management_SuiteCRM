import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { RecordViewStore } from '../store/record-view/record-view.store';
import * as i0 from "@angular/core";
export declare class SidebarWidgetAdapter {
    protected store: RecordViewStore;
    protected metadata: MetadataStore;
    config$: import("rxjs").Observable<{
        widgets: import("common").WidgetMetadata[];
        show: boolean;
    }>;
    constructor(store: RecordViewStore, metadata: MetadataStore);
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarWidgetAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SidebarWidgetAdapter>;
}
