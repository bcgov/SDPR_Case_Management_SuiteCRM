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
import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { HistoryTimelineAdapter } from './history-timeline.adapter.service';
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { LanguageStore } from '../../../../store/language/language.store';
import { HistoryTimelineAdapterFactory } from './history-timeline.adapter.factory';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ModuleNavigation } from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i0 from "@angular/core";
export declare class HistorySidebarWidgetComponent extends BaseWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    protected historyTimelineAdapterFactory: HistoryTimelineAdapterFactory;
    protected languageStore: LanguageStore;
    protected navigation: ModuleNavigation;
    virtualScroll: CdkVirtualScrollViewport;
    adapter: HistoryTimelineAdapter;
    private subscription;
    constructor(historyTimelineAdapterFactory: HistoryTimelineAdapterFactory, languageStore: LanguageStore, navigation: ModuleNavigation);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * @returns {string} Timeline Entry
     * @description {fetch language label for the timeline widget header}
     */
    getHeaderLabel(): string;
    /**
     * @returns {void} Timeline Entry
     * @description {checks if end of the scroll is reached to make a backend call for next set of timeline entries}
     */
    onScroll(): void;
    redirectLink(module: string, id: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<HistorySidebarWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HistorySidebarWidgetComponent, "scrm-history-timeline-widget", never, {}, {}, never, never, false, never>;
}
