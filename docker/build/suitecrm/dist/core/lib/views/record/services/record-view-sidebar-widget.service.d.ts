import { Observable, Subscription } from "rxjs";
import { ScreenSizeObserverService } from "../../../services/ui/screen-size-observer/screen-size-observer.service";
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import { RecordViewStore } from "../store/record-view/record-view.store";
import * as i0 from "@angular/core";
export declare class RecordViewSidebarWidgetService {
    protected systemConfigStore: SystemConfigStore;
    protected screenSize: ScreenSizeObserverService;
    protected store: RecordViewStore;
    protected swapSizes: string[];
    protected subs: Subscription[];
    protected widgetSwap?: boolean;
    widgetSwap$: Observable<boolean>;
    constructor(systemConfigStore: SystemConfigStore, screenSize: ScreenSizeObserverService, store: RecordViewStore);
    destroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordViewSidebarWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordViewSidebarWidgetService>;
}
