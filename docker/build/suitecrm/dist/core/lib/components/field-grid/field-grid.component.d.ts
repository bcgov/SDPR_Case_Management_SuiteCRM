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
import { OnChanges } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Field, Record } from 'common';
import { BaseFieldGridComponent } from './base-field-grid.component';
import * as i0 from "@angular/core";
export declare class FieldGridComponent extends BaseFieldGridComponent implements OnChanges {
    protected breakpointObserver: BreakpointObserver;
    fields: Field[];
    record: Record;
    fieldMode: string;
    constructor(breakpointObserver: BreakpointObserver);
    ngOnChanges(): void;
    buildGrid(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FieldGridComponent, "scrm-field-grid", never, { "fields": { "alias": "fields"; "required": false; }; "record": { "alias": "record"; "required": false; }; "fieldMode": { "alias": "fieldMode"; "required": false; }; }, {}, never, ["[field-grid-actions]", "[field-grid-actions]"], false, never>;
}
