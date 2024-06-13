import { ListViewStore } from "../store/list-view/list-view.store";
import { ButtonGroupInterface } from 'common';
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { ScreenSize, ScreenSizeObserverService } from "../../../services/ui/screen-size-observer/screen-size-observer.service";
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
export declare class QuickFiltersService {
    protected systemConfigStore: SystemConfigStore;
    protected screenSize: ScreenSizeObserverService;
    protected store: ListViewStore;
    protected quickFiltersConfigState: BehaviorSubject<ButtonGroupInterface>;
    protected enabledState: BehaviorSubject<boolean>;
    protected screen: ScreenSize;
    protected defaultBreakpoint: number;
    protected breakpoint: number;
    protected breakdownSizes: string[];
    protected subs: Subscription[];
    config$: Observable<ButtonGroupInterface>;
    enabled$: Observable<boolean>;
    enabled: boolean;
    breakdown$: Observable<boolean>;
    constructor(systemConfigStore: SystemConfigStore, screenSize: ScreenSizeObserverService, store: ListViewStore);
    init(): void;
    destroy(): void;
    getBreakpoint(): number;
    areConfigEnabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuickFiltersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QuickFiltersService>;
}
