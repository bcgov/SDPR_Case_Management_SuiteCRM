import { Observable } from 'rxjs';
import { ScreenSize, ScreenSizeObserverService } from '../screen-size-observer/screen-size-observer.service';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
export declare class MaxColumnsCalculator {
    protected screenSize: ScreenSizeObserverService;
    protected systemConfigStore: SystemConfigStore;
    screen: ScreenSize;
    maxColumns: number;
    constructor(screenSize: ScreenSizeObserverService, systemConfigStore: SystemConfigStore);
    getMaxColumns(sidebarActive$: Observable<boolean>): Observable<number>;
    calculateMaxColumns(sideBar?: boolean): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaxColumnsCalculator, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MaxColumnsCalculator>;
}
