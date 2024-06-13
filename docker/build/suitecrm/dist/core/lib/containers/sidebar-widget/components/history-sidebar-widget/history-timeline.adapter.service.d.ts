import { HistoryTimelineEntry } from './history-sidebar-widget.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Record, ViewContext } from 'common';
import { HistoryTimelineStoreFactory } from './history-timeline.store.factory';
import * as i0 from "@angular/core";
export type ActivityTypes = 'calls' | 'tasks' | 'meetings' | 'history' | 'audit' | 'notes' | string;
export declare class HistoryTimelineAdapter {
    protected historyTimelineStoreFactory: HistoryTimelineStoreFactory;
    loading: boolean;
    cache: HistoryTimelineEntry[];
    dataStream: BehaviorSubject<HistoryTimelineEntry[]>;
    dataStream$: Observable<HistoryTimelineEntry[]>;
    private defaultPageSize;
    private store;
    constructor(historyTimelineStoreFactory: HistoryTimelineStoreFactory);
    /**
     * @returns {void}
     * @param {ViewContext} context - parent module context
     * @description adapter init function to initialize timeline store
     */
    init(context: ViewContext): void;
    /**
     * @returns {Observable<HistoryTimelineEntry[]>} return observable array of timeline entries
     * @description retrieve next set of records starting from the current offset
     * represented by the field this.cache.length
     * @param {boolean} reload timeline
     */
    fetchTimelineEntries(reload: boolean): Observable<HistoryTimelineEntry[]>;
    /**
     * @returns {string} color code
     * @param {string} activity the valid activity types
     * @description {returns the mapped background color code defined for an activity}
     */
    getActivityGridColor(activity: ActivityTypes): string;
    /**
     * @returns {HistoryTimelineEntry} Timeline Entry
     * @param {Record} record object
     * @description {returns the mapped record to timeline entry}
     */
    buildTimelineEntry(record: Record): HistoryTimelineEntry;
    static ɵfac: i0.ɵɵFactoryDeclaration<HistoryTimelineAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HistoryTimelineAdapter>;
}
