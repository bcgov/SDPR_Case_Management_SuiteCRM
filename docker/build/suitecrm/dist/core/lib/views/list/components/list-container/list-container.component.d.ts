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
import { MaxColumnsCalculator } from '../../../../services/ui/max-columns-calculator/max-columns-calculator.service';
import { LanguageStore } from '../../../../store/language/language.store';
import { ScreenSize } from '../../../../services/ui/screen-size-observer/screen-size-observer.service';
import { ListViewStore } from '../../store/list-view/list-view.store';
import { TableConfig } from '../../../../components/table/table.model';
import { TableAdapter } from '../../adapters/table.adapter';
import { ListViewSidebarWidgetAdapter } from '../../adapters/sidebar-widget.adapter';
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { ListViewSidebarWidgetService } from "../../services/list-view-sidebar-widget.service";
import * as i0 from "@angular/core";
export interface ListContainerState {
    sidebarWidgetConfig: {
        widgets: WidgetMetadata[];
        show: boolean;
        widgetsEnabled: boolean;
    };
}
export declare class ListContainerComponent implements OnInit, OnDestroy {
    store: ListViewStore;
    protected adapter: TableAdapter;
    protected maxColumnCalculator: MaxColumnsCalculator;
    languageStore: LanguageStore;
    protected sidebarWidgetAdapter: ListViewSidebarWidgetAdapter;
    protected systemConfigs: SystemConfigStore;
    protected sidebarWidgetHandler: ListViewSidebarWidgetService;
    screen: ScreenSize;
    maxColumns: number;
    tableConfig: TableConfig;
    displayWidgets: boolean;
    swapWidgets: boolean;
    sidebarWidgetConfig: any;
    widgetDisplayType: string;
    protected subs: Subscription[];
    constructor(store: ListViewStore, adapter: TableAdapter, maxColumnCalculator: MaxColumnsCalculator, languageStore: LanguageStore, sidebarWidgetAdapter: ListViewSidebarWidgetAdapter, systemConfigs: SystemConfigStore, sidebarWidgetHandler: ListViewSidebarWidgetService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getMaxColumns(): Observable<number>;
    getDisplayWidgets(): boolean;
    getDisplay(display: boolean): string;
    getViewContext(): ViewContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListContainerComponent, "scrm-list-container", never, {}, {}, never, never, false, never>;
}
