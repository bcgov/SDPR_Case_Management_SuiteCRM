import { LineActionActionHandler, LineActionData } from '../line.action';
import * as i0 from "@angular/core";
export declare class AsyncProcessLineAction extends LineActionActionHandler {
    key: string;
    modes: import("common").ViewMode[];
    constructor();
    run(data: LineActionData): void;
    shouldDisplay(data: LineActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AsyncProcessLineAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AsyncProcessLineAction>;
}
