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
import { OnInit } from '@angular/core';
import { Field, Record } from 'common';
import { FieldRegistry } from './field.registry';
import * as i0 from "@angular/core";
export declare class FieldComponent implements OnInit {
    protected registry: FieldRegistry;
    mode: string;
    type: string;
    field: Field;
    record: Record;
    klass: {
        [key: string]: any;
    };
    class: string;
    map: import("core").FieldComponentMap;
    constructor(registry: FieldRegistry);
    ngOnInit(): void;
    get componentMode(): string;
    get componentType(): any;
    setHostClass(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FieldComponent, "scrm-field", never, { "mode": { "alias": "mode"; "required": false; }; "type": { "alias": "type"; "required": false; }; "field": { "alias": "field"; "required": false; }; "record": { "alias": "record"; "required": false; }; "klass": { "alias": "klass"; "required": false; }; }, {}, never, never, false, never>;
}
