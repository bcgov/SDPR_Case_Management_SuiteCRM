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
import { Subscription } from 'rxjs';
import { RecordThreadStore } from '../../store/record-thread/record-thread.store';
import { RecordThreadStoreFactory } from '../../store/record-thread/record-thread.store.factory';
import { RecordThreadConfig } from './record-thread.model';
import { RecordThreadItemConfig } from '../record-thread-item/record-thread-item.model';
import { RecordThreadItemStore } from '../../store/record-thread/record-thread-item.store';
import { AttributeMap, ButtonInterface, Record } from 'common';
import { RecordThreadItemStoreFactory } from '../../store/record-thread/record-thread-item.store.factory';
import { RecordManager } from '../../../../services/record/record.manager';
import { MessageService } from '../../../../services/message/message.service';
import { RecordThreadListActionsAdapter } from "../../adapters/record-thread-list-actions.adapter";
import { RecordThreadListActionsAdapterFactory } from "../../adapters/record-thread-list-actions.adapter.factory";
import * as i0 from "@angular/core";
export declare class RecordThreadComponent implements OnInit, OnDestroy, AfterViewInit {
    protected storeFactory: RecordThreadStoreFactory;
    protected itemFactory: RecordThreadItemStoreFactory;
    protected recordManager: RecordManager;
    protected message: MessageService;
    protected actionAdapterFactory: RecordThreadListActionsAdapterFactory;
    config: RecordThreadConfig;
    listContainer: ElementRef;
    store: RecordThreadStore;
    createStore: RecordThreadItemStore;
    records: RecordThreadItemStore[];
    loading: boolean;
    maxHeight: number;
    direction: 'asc' | 'desc';
    loadMorePosition: 'bottom' | 'top' | string;
    listActionAdapter: RecordThreadListActionsAdapter;
    protected shouldResetScroll: boolean;
    protected subs: Subscription[];
    protected presetFieldValues: AttributeMap;
    constructor(storeFactory: RecordThreadStoreFactory, itemFactory: RecordThreadItemStoreFactory, recordManager: RecordManager, message: MessageService, actionAdapterFactory: RecordThreadListActionsAdapterFactory);
    ngOnInit(): void;
    private setLoadMorePosition;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    buildItem(item: RecordThreadItemStore, itemRef: any): RecordThreadItemConfig;
    getLoadMoreButton(): ButtonInterface;
    buildCreateItem(): RecordThreadItemConfig;
    getCreateButton(): ButtonInterface;
    allLoaded(): boolean;
    getMaxHeight(): {
        [klass: string]: any;
    } | null;
    protected initRecord(): void;
    protected scrollToEnd(): void;
    protected scrollToTop(): void;
    protected scrollTo(position: number): void;
    protected scrollToItem(item: any): void;
    protected resetScroll(): void;
    protected scheduleScrollReset(): void;
    protected initCreate(): void;
    protected initPresetFieldsMapping(): void;
    protected addPresetFields(record: Record): void;
    protected initDataSubscription(): void;
    protected initLoading(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordThreadComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecordThreadComponent, "scrm-record-thread", never, { "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
