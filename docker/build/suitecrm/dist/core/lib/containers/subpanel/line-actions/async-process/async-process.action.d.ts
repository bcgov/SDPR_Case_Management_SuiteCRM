import { SubpanelLineActionData, SubpanelLineActionHandler } from '../line.action';
import * as i0 from "@angular/core";
export declare class AsyncProcessSubpanelLineAction extends SubpanelLineActionHandler {
    key: string;
    modes: import("common").ViewMode[];
    constructor();
    run(data: SubpanelLineActionData): void;
    shouldDisplay(data: SubpanelLineActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AsyncProcessSubpanelLineAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AsyncProcessSubpanelLineAction>;
}
