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
import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { RecordThreadItemConfig } from './record-thread-item.model';
import { Subscription } from 'rxjs';
import { FieldFlexbox, RecordFlexboxConfig } from '../../../../components/record-flexbox/record-flexbox.model';
import { ButtonInterface, Record, StringMap } from 'common';
import { RecordThreadItemActionsAdapter } from '../../adapters/record-thread-item-actions.adapter';
import { RecordThreadItemActionsAdapterFactory } from '../../adapters/record-thread-item-actions.adapter.factory';
import * as i0 from "@angular/core";
export declare class RecordThreadItemComponent implements OnInit, OnDestroy, AfterViewInit {
    protected actionAdapterFactory: RecordThreadItemActionsAdapterFactory;
    config: RecordThreadItemConfig;
    bodyEl: ElementRef;
    collapsed: boolean;
    collapsible: boolean;
    collapseLimit: number;
    dynamicClass: string;
    protected subs: Subscription[];
    protected actionAdapter: RecordThreadItemActionsAdapter;
    protected dynamicClassesMap: StringMap;
    protected dynamicClassFieldSubs: Subscription[];
    constructor(actionAdapterFactory: RecordThreadItemActionsAdapterFactory);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    /**
     *
     * Build layout data source according to received configuration
     * @param {object} layout: FieldFlexboxRow[]
     * @returns {object} RecordFlexboxConfig
     */
    buildConfig(layout: FieldFlexbox): RecordFlexboxConfig;
    getCollapseButton(): ButtonInterface;
    protected initDynamicClass(): void;
    /**
     * Calculate dynamic classes
     */
    protected calculateDynamicClasses(): void;
    /**
     * Get Dynamic classes for record
     * @param fieldKey
     * @param record
     * @protected
     */
    protected getDynamicClasses(fieldKey: string, record: Record): string;
    /**
     * Get body class
     */
    getBodyClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordThreadItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecordThreadItemComponent, "scrm-record-thread-item", never, { "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
