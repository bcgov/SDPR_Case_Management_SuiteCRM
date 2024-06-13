import { TableActionData, TableActionHandler } from "../table.action";
import * as i0 from "@angular/core";
export declare class AsyncProcessTableAction extends TableActionHandler {
    key: string;
    modes: import("common").ViewMode[];
    constructor();
    run(data: TableActionData): void;
    shouldDisplay(data: TableActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AsyncProcessTableAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AsyncProcessTableAction>;
}
