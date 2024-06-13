import { TableConfig } from './table.model';
import * as i0 from "@angular/core";
export declare class TableComponent {
    config: TableConfig;
    getPaginationType(): "pagination" | "load-more";
    showHeader(): boolean;
    showFooter(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "scrm-table", never, { "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
