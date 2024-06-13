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
import { Observable, Subscription } from 'rxjs';
import { ViewContext, WidgetMetadata } from 'common';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { LanguageStore, LanguageStrings } from '../../../../store/language/language.store';
import { SubpanelContainerConfig } from '../../../../containers/subpanel/components/subpanel-container/subpanel-container.model';
import { SidebarWidgetAdapter } from '../../adapters/sidebar-widget.adapter';
import { RecordViewStore } from '../../store/record-view/record-view.store';
import { RecordContentAdapter } from '../../adapters/record-content.adapter';
import { RecordContentDataSource } from '../../../../components/record-content/record-content.model';
import { TopWidgetAdapter } from '../../adapters/top-widget.adapter';
import { BottomWidgetAdapter } from '../../adapters/bottom-widget.adapter';
import { RecordActionsAdapter } from '../../adapters/actions.adapter';
import { Action, ActionContext } from 'common';
import { RecordViewSidebarWidgetService } from "../../services/record-view-sidebar-widget.service";
import * as i0 from "@angular/core";
export declare class RecordContainerComponent implements OnInit, OnDestroy {
    recordViewStore: RecordViewStore;
    protected language: LanguageStore;
    protected metadata: MetadataStore;
    protected contentAdapter: RecordContentAdapter;
    protected topWidgetAdapter: TopWidgetAdapter;
    protected sidebarWidgetAdapter: SidebarWidgetAdapter;
    protected bottomWidgetAdapter: BottomWidgetAdapter;
    protected actionsAdapter: RecordActionsAdapter;
    protected sidebarWidgetHandler: RecordViewSidebarWidgetService;
    protected subs: Subscription[];
    saveAction: Action;
    context: ActionContext;
    loading: boolean;
    language$: Observable<LanguageStrings>;
    displayWidgets: boolean;
    swapWidgets: boolean;
    sidebarWidgetConfig: any;
    vm$: Observable<{
        language: LanguageStrings;
        bottomWidgetConfig: {
            widgets: WidgetMetadata[];
            show: boolean;
        };
        topWidgetConfig: {
            widget: WidgetMetadata;
            show: boolean;
        };
        showSubpanels: boolean;
    }>;
    actionConfig$: Observable<{
        mode: import("common").ViewMode;
        actions: Action[];
        context: ViewContext;
    }>;
    onEnterKey(): void;
    constructor(recordViewStore: RecordViewStore, language: LanguageStore, metadata: MetadataStore, contentAdapter: RecordContentAdapter, topWidgetAdapter: TopWidgetAdapter, sidebarWidgetAdapter: SidebarWidgetAdapter, bottomWidgetAdapter: BottomWidgetAdapter, actionsAdapter: RecordActionsAdapter, sidebarWidgetHandler: RecordViewSidebarWidgetService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getContentAdapter(): RecordContentDataSource;
    getSubpanelsConfig(): SubpanelContainerConfig;
    getViewContext(): ViewContext;
    getViewContext$(): Observable<ViewContext>;
    hasTopWidgetMetadata(meta: WidgetMetadata): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecordContainerComponent, "scrm-record-container", never, {}, {}, never, never, false, never>;
}
