import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare enum ScreenSize {
    XSmall = "XSmall",
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
    XLarge = "XLarge"
}
export declare class ScreenSizeObserverService {
    protected breakpointObserver: BreakpointObserver;
    screenSize: BehaviorSubject<ScreenSize>;
    screenSize$: import("rxjs").Observable<ScreenSize>;
    constructor(breakpointObserver: BreakpointObserver);
    protected initScreenSizeObservable(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScreenSizeObserverService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ScreenSizeObserverService>;
}
