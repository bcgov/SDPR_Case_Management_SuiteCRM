import { FieldMap, Panel, Record } from 'common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BaseFieldGridComponent } from '../field-grid/base-field-grid.component';
import { FieldLayoutConfig, FieldLayoutDataSource } from './field-layout.model';
import * as i0 from "@angular/core";
export declare class FieldLayoutComponent extends BaseFieldGridComponent {
    protected breakpointObserver: BreakpointObserver;
    dataSource: FieldLayoutDataSource;
    config: FieldLayoutConfig;
    layout: Panel;
    fields: FieldMap;
    record: Record;
    baseColClass: {
        [key: string]: boolean;
    };
    baseRowClass: {
        [key: string]: boolean;
    };
    constructor(breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    buildGrid(): void;
    get colNumber(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FieldLayoutComponent, "scrm-field-layout", never, { "dataSource": { "alias": "dataSource"; "required": false; }; }, {}, never, ["[field-grid-actions]", "[field-grid-special]"], false, never>;
}
