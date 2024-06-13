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
import { ChangeDetectorRef, OnInit, Type } from '@angular/core';
import { Field, Record, StringMap } from 'common';
import { Router } from '@angular/router';
import { ModuleNameMapper } from '../../services/navigation/module-name-mapper/module-name-mapper.service';
import { ModuleNavigation } from '../../services/navigation/module-navigation/module-navigation.service';
import { DynamicLabelService } from '../../services/language/dynamic-label.service';
import { LinkRouteAsyncActionService } from '../../services/navigation/link-route-async-action/link-route-async-action.service';
import * as i0 from "@angular/core";
export declare class DynamicFieldComponent implements OnInit {
    protected navigation: ModuleNavigation;
    protected moduleNameMapper: ModuleNameMapper;
    protected router: Router;
    protected dynamicLabelService: DynamicLabelService;
    protected linkRouteAsyncActionService: LinkRouteAsyncActionService;
    private cd;
    mode: string;
    originalMode: string;
    type: string;
    field: Field;
    record: Record;
    parent: Record;
    klass: {
        [key: string]: any;
    };
    componentType: Type<any>;
    class: string;
    constructor(navigation: ModuleNavigation, moduleNameMapper: ModuleNameMapper, router: Router, dynamicLabelService: DynamicLabelService, linkRouteAsyncActionService: LinkRouteAsyncActionService, cd: ChangeDetectorRef);
    get getRelateLink(): string;
    ngOnInit(): void;
    isLink(): boolean;
    hasOnClick(): boolean;
    isEdit(): boolean;
    getLink(): string;
    getMessageContext(item: any, record: Record): StringMap;
    getMessageLabelKey(item: any): string;
    onClick(): boolean;
    setHostClass(): void;
    protected initDefaultValue(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicFieldComponent, "scrm-dynamic-field", never, { "mode": { "alias": "mode"; "required": false; }; "originalMode": { "alias": "originalMode"; "required": false; }; "type": { "alias": "type"; "required": false; }; "field": { "alias": "field"; "required": false; }; "record": { "alias": "record"; "required": false; }; "parent": { "alias": "parent"; "required": false; }; "klass": { "alias": "klass"; "required": false; }; "componentType": { "alias": "componentType"; "required": false; }; }, {}, never, never, false, never>;
}
