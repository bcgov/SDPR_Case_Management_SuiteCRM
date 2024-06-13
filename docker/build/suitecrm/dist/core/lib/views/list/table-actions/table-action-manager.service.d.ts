import { BaseActionManager } from '../../../services/actions/base-action-manager.service';
import { TableActionData } from "./table.action";
import { AsyncProcessTableAction } from "./async-process/async-process.table.action";
import { SelectColumnsTableAction } from "./select-columns/select-columns.table.action";
import * as i0 from "@angular/core";
export declare class TableActionManager extends BaseActionManager<TableActionData> {
    protected async: AsyncProcessTableAction;
    protected selectColumns: SelectColumnsTableAction;
    constructor(async: AsyncProcessTableAction, selectColumns: SelectColumnsTableAction);
    static ɵfac: i0.ɵɵFactoryDeclaration<TableActionManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TableActionManager>;
}
