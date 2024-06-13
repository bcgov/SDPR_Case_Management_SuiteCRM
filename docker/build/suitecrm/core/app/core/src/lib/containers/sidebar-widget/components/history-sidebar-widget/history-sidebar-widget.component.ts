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

import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HistoryTimelineAdapter} from './history-timeline.adapter.service';
import {BaseWidgetComponent} from '../../../widgets/base-widget.model';
import {LanguageStore} from '../../../../store/language/language.store';
import {HistoryTimelineAdapterFactory} from './history-timeline.adapter.factory';
import {combineLatestWith, Subscription, timer} from 'rxjs';
import {debounce, map, tap} from 'rxjs/operators';
import {floor} from 'lodash-es';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {ModuleNavigation} from "../../../../services/navigation/module-navigation/module-navigation.service";

@Component({
    selector: 'scrm-history-timeline-widget',
    templateUrl: './history-sidebar-widget.component.html',
    styleUrls: [],
    providers: [HistoryTimelineAdapter]
})
export class HistorySidebarWidgetComponent extends BaseWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(CdkVirtualScrollViewport) virtualScroll: CdkVirtualScrollViewport;

    public adapter: HistoryTimelineAdapter;
    private subscription = new Subscription();

    constructor(
        protected historyTimelineAdapterFactory: HistoryTimelineAdapterFactory,
        protected languageStore: LanguageStore,
        protected navigation: ModuleNavigation) {
        super();
    }

    ngOnInit(): void {
        this.adapter = this.historyTimelineAdapterFactory.create();
        this.adapter.init(this.context);
    }

    ngAfterViewInit(): void {

        // watch out for the data list updates on the related subpanels activities and history
        // reload request will be ignored;
        // if they are notified multiple times within the dueTime/delay 500 ms

        const reloadMap = [];
        reloadMap.push(this.config.reload$);
        reloadMap.push(this.config.subpanelReload$);

        const subpanelsToWatch = ['history', 'activities'];
        const reload$ = reloadMap[0].pipe(
            combineLatestWith(...reloadMap),
            map(([reload, subpanelReload={}]) => {
                if (reload) {
                    return reload;
                }

                if (!subpanelReload) {
                    return false;
                }

                return subpanelsToWatch.some(subpanelKey => !!subpanelReload[subpanelKey]);
            }),
            );

        const debouncedReload = reload$.pipe(debounce(() => timer(1000)));

        this.subscription.add(debouncedReload.subscribe(reload => {
            if (reload) {
                this.adapter.fetchTimelineEntries(true);
            }
        }));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    /**
     * @returns {string} Timeline Entry
     * @description {fetch language label for the timeline widget header}
     */
    getHeaderLabel(): string {
        return this.languageStore.getFieldLabel('LBL_QUICK_HISTORY');
    }

    /**
     * @returns {void} Timeline Entry
     * @description {checks if end of the scroll is reached to make a backend call for next set of timeline entries}
     */
    onScroll(): void {

        if (!this.adapter) {
            return;
        }

        const scrollOffset = this.virtualScroll.measureScrollOffset('bottom');

        if (floor(scrollOffset) === 0) {
            this.adapter.fetchTimelineEntries(false);
        }
    }

    redirectLink(module: string, id: string) {
        if (module === 'audit') {
            return;
        }
        return this.navigation.getRecordRouterLink(module, id)
    }

}
