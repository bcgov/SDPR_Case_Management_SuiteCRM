import { ActionDataSource, ButtonInterface, PaginationDataSource, SelectionDataSource } from 'common';
import { BulkActionDataSource } from '../../bulk-action-menu/bulk-action-menu.component';
import { TableConfig } from "../table.model";
import * as i0 from "@angular/core";
export declare class TableFooterComponent {
    selection: SelectionDataSource;
    bulkActions: BulkActionDataSource;
    pagination: PaginationDataSource;
    tableActions: ActionDataSource;
    paginationType: string;
    config: TableConfig;
    isPaginationEnabled(): boolean;
    getLoadMoreButton(): ButtonInterface;
    allLoaded(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableFooterComponent, "scrm-table-footer", never, { "selection": { "alias": "selection"; "required": false; }; "bulkActions": { "alias": "bulkActions"; "required": false; }; "pagination": { "alias": "pagination"; "required": false; }; "tableActions": { "alias": "tableActions"; "required": false; }; "paginationType": { "alias": "paginationType"; "required": false; }; "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
