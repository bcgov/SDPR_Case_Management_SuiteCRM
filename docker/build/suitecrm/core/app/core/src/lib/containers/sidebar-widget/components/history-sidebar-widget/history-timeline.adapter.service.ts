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

import {Injectable} from '@angular/core';
import {HistoryTimelineEntry} from './history-sidebar-widget.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {HistoryTimelineStore} from '../../store/history-timeline/history-timeline.store';
import {emptyObject, Record, ViewContext} from 'common';
import {take} from 'rxjs/operators';
import {HistoryTimelineStoreFactory} from './history-timeline.store.factory';

export type ActivityTypes = 'calls' | 'tasks' | 'meetings' | 'history' | 'audit' | 'notes' | string;

@Injectable()
export class HistoryTimelineAdapter {
    loading = false;

    cache: HistoryTimelineEntry[] = [];
    dataStream = new BehaviorSubject<HistoryTimelineEntry[]>(this.cache);
    dataStream$ = this.dataStream.asObservable();

    private defaultPageSize = 10;
    private store: HistoryTimelineStore;

    constructor(protected historyTimelineStoreFactory: HistoryTimelineStoreFactory
    ) {
    }

    /**
     * @returns {void}
     * @param {ViewContext} context - parent module context
     * @description adapter init function to initialize timeline store
     */
    init(context: ViewContext): void {

        this.store = this.historyTimelineStoreFactory.create();
        this.store.init(context);
    }

    /**
     * @returns {Observable<HistoryTimelineEntry[]>} return observable array of timeline entries
     * @description retrieve next set of records starting from the current offset
     * represented by the field this.cache.length
     * @param {boolean} reload timeline
     */
    fetchTimelineEntries(reload: boolean): Observable<HistoryTimelineEntry[]> {

        if (this.loading === true) {
            return;
        }

        if (reload === true) {
            this.cache.length = 0;
        }
        this.store.initSearchCriteria(this.cache.length, this.defaultPageSize);

        this.loading = true;
        this.store.load(false).pipe(take(1)).subscribe(value => {
            this.loading = false;
            const records: Record [] = value.records;

            if (!emptyObject(records)) {

                Object.keys(records).forEach(key => {

                    this.cache.push(this.buildTimelineEntry(records[key]));
                });
            }
            this.dataStream.next([...this.cache]);
        });
        return this.dataStream$;
    }

    /**
     * @returns {string} color code
     * @param {string} activity the valid activity types
     * @description {returns the mapped background color code defined for an activity}
     */
    getActivityGridColor(activity: ActivityTypes): string {
        const colorMap = {
            calls: 'yellow',
            tasks: 'green',
            meetings: 'blue',
            notes: 'orange',
            audit: 'purple',
            history: 'purple'
        };
        return colorMap[activity] || 'yellow';
    }

    /**
     * @returns {HistoryTimelineEntry} Timeline Entry
     * @param {Record} record object
     * @description {returns the mapped record to timeline entry}
     */
    buildTimelineEntry(record: Record): HistoryTimelineEntry {

        const timelineModule = record.module;

        let moduleIcon = record.attributes.module_name;
        if (timelineModule === 'audit') {
            moduleIcon = 'History';
        }

        const gridColor = this.getActivityGridColor(record.module);

        const timelineEntry = {
            module: timelineModule,
            icon: moduleIcon,
            color: gridColor,
            title: {
                type: 'varchar',
                value: record.attributes.name
            },
            user: {
                type: 'varchar',
                value: record.attributes.assigned_user_name.user_name,
            },
            date: {
                type: 'datetime',
                value: record.attributes.date_end,
            },
            record
        } as HistoryTimelineEntry;

        if (timelineModule === 'audit') {

            timelineEntry.description = {
                type: 'html',
                value: record.attributes.description
            };
        }
        return timelineEntry;
    }
}
