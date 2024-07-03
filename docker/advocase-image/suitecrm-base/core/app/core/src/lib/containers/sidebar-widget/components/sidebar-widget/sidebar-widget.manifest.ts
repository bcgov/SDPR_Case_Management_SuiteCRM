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

import {HistorySidebarWidgetComponent} from '../history-sidebar-widget/history-sidebar-widget.component';
import {StatisticsSidebarWidgetModule} from '../statistics-sidebar-widget/statistics-sidebar-widget.module';
import {HistorySidebarWidgetModule} from '../history-sidebar-widget/history-sidebar-widget.module';
import {StatisticsSidebarWidgetComponent} from '../statistics-sidebar-widget/statistics-sidebar-widget.component';
import {ChartSidebarWidgetModule} from '../chart-sidebar-widget/chart-sidebar-widget.module';
import {ChartSidebarWidgetComponent} from '../chart-sidebar-widget/chart-sidebar-widget.component';
import {RecordThreadSidebarWidgetComponent} from '../record-thread-sidebar-widget/record-thread-sidebar-widget.component';

export const sidebarWidgetModules = [
    HistorySidebarWidgetModule,
    ChartSidebarWidgetModule,
    StatisticsSidebarWidgetModule
];

export const componentTypeMap = {
    'history-timeline': HistorySidebarWidgetComponent,
    chart: ChartSidebarWidgetComponent,
    statistics: StatisticsSidebarWidgetComponent,
    'record-thread': RecordThreadSidebarWidgetComponent
};
