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
import { AttributeMap, FieldDefinitionMap, SearchCriteria, SearchCriteriaFilter, StringMap, ViewContext } from 'common';
import { Observable, Subscription } from 'rxjs';
import { LanguageStore } from '../../../../store/language/language.store';
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { RecordThreadConfig, ThreadItemMetadataConfig } from '../../../record-thread/components/record-thread/record-thread.model';
import { RecordThreadItemMetadata } from '../../../record-thread/store/record-thread/record-thread-item.store.model';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
export declare class RecordThreadSidebarWidgetComponent extends BaseWidgetComponent implements OnInit, OnDestroy {
    protected language: LanguageStore;
    protected sytemConfig: SystemConfigStore;
    panelMode: 'collapsible' | 'closable' | 'none';
    options: {
        module: string;
        class?: string;
        maxListHeight?: number;
        direction?: 'asc' | 'desc';
        item: {
            dynamicClass?: string[];
            itemClass?: string;
            collapsible?: boolean;
            collapseLimit?: number;
            layout?: ThreadItemMetadataConfig;
            fields?: FieldDefinitionMap;
        };
        create: {
            presetFields?: {
                parentValues?: StringMap;
                static?: AttributeMap;
            };
            layout?: ThreadItemMetadataConfig;
        };
        filters?: {
            parentFilters?: StringMap;
            static?: SearchCriteriaFilter;
            orderBy?: string;
            sortOrder?: string;
        };
    };
    recordThreadConfig: RecordThreadConfig;
    filters$: Observable<SearchCriteria>;
    presetFields$: Observable<AttributeMap>;
    protected subs: Subscription[];
    constructor(language: LanguageStore, sytemConfig: SystemConfigStore);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getHeaderLabel(): string;
    getLabel(key: string): string;
    getConfig(): RecordThreadConfig;
    protected setupItemMetadata(metadata: RecordThreadItemMetadata, config: ThreadItemMetadataConfig): void;
    protected initPanelMode(): void;
    protected initFilters$(): void;
    protected initPresetFields$(): void;
    protected initParentFilters(context: any, filters: any): void;
    protected initParentValues(context: ViewContext): AttributeMap;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordThreadSidebarWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecordThreadSidebarWidgetComponent, "scrm-record-thread-sidebar-widget", never, {}, {}, never, never, false, never>;
}
