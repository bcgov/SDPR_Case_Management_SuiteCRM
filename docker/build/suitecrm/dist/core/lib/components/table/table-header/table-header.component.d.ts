import { ActionDataSource, PaginationDataSource, SelectionDataSource } from 'common';
import { BulkActionDataSource } from '../../bulk-action-menu/bulk-action-menu.component';
import * as i0 from "@angular/core";
export declare class TableHeaderComponent {
    selection: SelectionDataSource;
    bulkActions: BulkActionDataSource;
    pagination: PaginationDataSource;
    tableActions: ActionDataSource;
    paginationType: string;
    isPaginationEnabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableHeaderComponent, "scrm-table-header", never, { "selection": { "alias": "selection"; "required": false; }; "bulkActions": { "alias": "bulkActions"; "required": false; }; "pagination": { "alias": "pagination"; "required": false; }; "tableActions": { "alias": "tableActions"; "required": false; }; "paginationType": { "alias": "paginationType"; "required": false; }; }, {}, never, never, false, never>;
}
