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

import {Observable} from 'rxjs';
import {SingleValueStatisticsStoreInterface} from '../statistics/statistics-store.model';
import {BooleanMap} from '../types/boolean-map';

export interface WidgetMetadata {
    type: string;
    labelKey?: string;
    options: WidgetOptionMap;
    reload$?: Observable<boolean>;
    subpanelReload$?: Observable<BooleanMap>;
    refreshOn?: string;
    allowCollapse?: boolean;
}

export interface WidgetOptionMap {
    [key: string]: any;
}

export interface StatisticWidgetOptions {
    rows: StatisticWidgetLayoutRow[];
}

export type TextSizes = 'regular' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'huge' | string;
export type ContentJustify = 'start' | 'end' | 'center' | 'between' | 'around' | string;
export type ContentAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch' | string;
export type TextColor = 'yellow' | 'blue' | 'green' | 'red' | 'purple' | 'dark' | 'grey' | string;

export interface StatisticWidgetLayoutRow {
    justify?: ContentJustify;
    align?: ContentAlign;
    cols: StatisticWidgetLayoutCol[];
    class?: string;
}

export interface StatisticWidgetLayoutCol {
    iconClass?: string;
    icon?: string;
    labelKey?: string;
    descriptionKey?: string;
    dynamicLabel?: string;
    statistic?: string;
    store?: SingleValueStatisticsStoreInterface;
    display?: string;
    size?: TextSizes;
    color?: TextColor;
    bold?: boolean | string;
    class?: string;
}
