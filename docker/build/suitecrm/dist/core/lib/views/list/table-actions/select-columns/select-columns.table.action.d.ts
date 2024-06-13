import { ViewMode } from 'common';
import { TableActionData, TableActionHandler } from "../table.action";
import * as i0 from "@angular/core";
export declare class SelectColumnsTableAction extends TableActionHandler {
    key: string;
    modes: ViewMode[];
    constructor();
    run(data: TableActionData): void;
    shouldDisplay(data: TableActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectColumnsTableAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SelectColumnsTableAction>;
}
