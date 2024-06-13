import { ListViewStore } from "../store/list-view/list-view.store";
import { Observable, Subscription } from "rxjs";
import { ScreenSizeObserverService } from "../../../services/ui/screen-size-observer/screen-size-observer.service";
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
export declare class ListViewSidebarWidgetService {
    protected systemConfigStore: SystemConfigStore;
    protected screenSize: ScreenSizeObserverService;
    protected store: ListViewStore;
    protected swapSizes: string[];
    protected subs: Subscription[];
    protected widgetSwap?: boolean;
    widgetSwap$: Observable<boolean>;
    constructor(systemConfigStore: SystemConfigStore, screenSize: ScreenSizeObserverService, store: ListViewStore);
    destroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewSidebarWidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListViewSidebarWidgetService>;
}
