import { SubpanelActionData, SubpanelActionHandler } from '../subpanel.action';
import * as i0 from "@angular/core";
export declare class AsyncProcessSubpanelAction extends SubpanelActionHandler {
    key: string;
    modes: import("common").ViewMode[];
    constructor();
    run(data: SubpanelActionData): void;
    shouldDisplay(data: SubpanelActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AsyncProcessSubpanelAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AsyncProcessSubpanelAction>;
}
