/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE
 * WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Supercharged by SuiteCRM" logo. If the display of the logos is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Supercharged by SuiteCRM".
 */
import { OnDestroy, OnInit } from '@angular/core';
import { ContentAlign, ContentJustify, Field, Record, ScreenSizeMap, StatisticWidgetLayoutRow, TextColor, TextSizes, ViewFieldDefinition, ViewMode } from 'common';
import { Subscription } from 'rxjs';
import { FieldFlexbox, FieldFlexboxCol, RecordFlexboxConfig } from './record-flexbox.model';
import { LabelDisplay } from '../field-grid/field-grid.model';
import * as i0 from "@angular/core";
export declare class RecordFlexboxComponent implements OnInit, OnDestroy {
    config: RecordFlexboxConfig;
    mode: ViewMode;
    record: Record;
    layout: FieldFlexbox;
    maxColumns: number;
    sizeMap: ScreenSizeMap;
    protected subs: Subscription[];
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    getRowClass(): {
        [klass: string]: any;
    };
    getColClass(): {
        [klass: string]: any;
    };
    getSizeClass(size: TextSizes): string;
    getFontWeight(bold: string | boolean): string;
    getColor(color: TextColor): string;
    getJustify(justify: ContentJustify): string;
    getAlign(align: ContentAlign): string;
    getLayoutRowClass(row: StatisticWidgetLayoutRow): string;
    getClass(layoutCol: FieldFlexboxCol): string;
    getLabelDisplay(col: FieldFlexboxCol, mode: ViewMode): LabelDisplay;
    getField(record: Record, field: ViewFieldDefinition): Field;
    getFieldClass(col: FieldFlexboxCol): {
        [key: string]: any;
    };
    getLabelClass(col: FieldFlexboxCol): {
        [key: string]: any;
    };
    shouldDisplay(col: FieldFlexboxCol, field: Field, mode: ViewMode): boolean;
    shouldColDisplayInMode(col: FieldFlexboxCol, mode: ViewMode): boolean;
    shouldFieldDisplayInMode(col: FieldFlexboxCol, mode: ViewMode): boolean;
    shouldLabelDisplayInMode(col: FieldFlexboxCol, mode: ViewMode): boolean;
    getDisplay(col: FieldFlexboxCol): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordFlexboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecordFlexboxComponent, "scrm-record-flexbox", never, { "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
