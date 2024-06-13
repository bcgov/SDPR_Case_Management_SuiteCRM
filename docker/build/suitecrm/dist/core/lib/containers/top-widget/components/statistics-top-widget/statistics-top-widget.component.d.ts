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
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { SingleValueStatisticsStore } from '../../../../store/single-value-statistics/single-value-statistics.store';
import { SingleValueStatisticsStoreFactory } from '../../../../store/single-value-statistics/single-value-statistics.store.factory';
import { LanguageStore, LanguageStringMap } from '../../../../store/language/language.store';
import { Observable, Subscription } from 'rxjs';
import { SingleValueStatisticsState } from 'common';
import * as i0 from "@angular/core";
interface StatisticsTopWidgetState {
    statistics: {
        [key: string]: SingleValueStatisticsState;
    };
    appStrings: LanguageStringMap;
}
interface StatisticsEntry {
    labelKey: string;
    endLabelKey?: string;
    hideValueIfEmpty?: boolean;
    hideIfEmpty?: boolean;
    type: string;
    store: SingleValueStatisticsStore;
}
interface StatisticsEntryMap {
    [key: string]: StatisticsEntry;
}
export declare class StatisticsTopWidgetComponent extends BaseWidgetComponent implements OnInit, OnDestroy {
    protected language: LanguageStore;
    protected factory: SingleValueStatisticsStoreFactory;
    statistics: StatisticsEntryMap;
    vm$: Observable<StatisticsTopWidgetState>;
    messageLabelKey: string;
    loading$: Observable<boolean>;
    protected loading: boolean;
    protected subs: Subscription[];
    constructor(language: LanguageStore, factory: SingleValueStatisticsStoreFactory);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Check if statistics should be hidden
     * @param stats
     * @param item
     */
    shouldHide(stats: SingleValueStatisticsState, item: StatisticsEntry): boolean;
    /**
     * Check if statistics have been loaded
     * @param stats
     */
    hasLoaded(stats: SingleValueStatisticsState): boolean;
    /**
     * Check if value is empty
     * @param stats
     */
    isValueEmpty(stats: SingleValueStatisticsState): boolean;
    /**
     * Get metadata entry for statistic
     * @param stat
     * @param name
     */
    getMetadataEntry(stat: SingleValueStatisticsState, name: string): string;
    /**
     * Get label value
     * @param key
     */
    getLabel(key: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StatisticsTopWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StatisticsTopWidgetComponent, "scrm-statistics-top-widget", never, {}, {}, never, never, false, never>;
}
export {};
