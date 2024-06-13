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
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { emptyObject } from 'common';
import { take } from 'rxjs/operators';
import { HistoryTimelineStoreFactory } from './history-timeline.store.factory';
import * as i0 from "@angular/core";
import * as i1 from "./history-timeline.store.factory";
class HistoryTimelineAdapter {
    constructor(historyTimelineStoreFactory) {
        this.historyTimelineStoreFactory = historyTimelineStoreFactory;
        this.loading = false;
        this.cache = [];
        this.dataStream = new BehaviorSubject(this.cache);
        this.dataStream$ = this.dataStream.asObservable();
        this.defaultPageSize = 10;
    }
    /**
     * @returns {void}
     * @param {ViewContext} context - parent module context
     * @description adapter init function to initialize timeline store
     */
    init(context) {
        this.store = this.historyTimelineStoreFactory.create();
        this.store.init(context);
    }
    /**
     * @returns {Observable<HistoryTimelineEntry[]>} return observable array of timeline entries
     * @description retrieve next set of records starting from the current offset
     * represented by the field this.cache.length
     * @param {boolean} reload timeline
     */
    fetchTimelineEntries(reload) {
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
            const records = value.records;
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
    getActivityGridColor(activity) {
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
    buildTimelineEntry(record) {
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
        };
        if (timelineModule === 'audit') {
            timelineEntry.description = {
                type: 'html',
                value: record.attributes.description
            };
        }
        return timelineEntry;
    }
    static { this.ɵfac = function HistoryTimelineAdapter_Factory(t) { return new (t || HistoryTimelineAdapter)(i0.ɵɵinject(i1.HistoryTimelineStoreFactory)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HistoryTimelineAdapter, factory: HistoryTimelineAdapter.ɵfac }); }
}
export { HistoryTimelineAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistoryTimelineAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.HistoryTimelineStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS10aW1lbGluZS5hZGFwdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL2hpc3Rvcnktc2lkZWJhci13aWRnZXQvaGlzdG9yeS10aW1lbGluZS5hZGFwdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUVqRCxPQUFPLEVBQUMsV0FBVyxFQUFzQixNQUFNLFFBQVEsQ0FBQztBQUN4RCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEMsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7OztBQUk3RSxNQUNhLHNCQUFzQjtJQVUvQixZQUFzQiwyQkFBd0Q7UUFBeEQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQVQ5RSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLFVBQUssR0FBMkIsRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBeUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLGdCQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVyQyxvQkFBZSxHQUFHLEVBQUUsQ0FBQztJQUs3QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksQ0FBQyxPQUFvQjtRQUVyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FB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LENBQUMsV0FBVyxHQUFHO2dCQUN4QixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXO2FBQ3ZDLENBQUM7U0FDTDtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3pCLENBQUM7dUZBdkhRLHNCQUFzQjt1RUFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQjs7U0FBdEIsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SGlzdG9yeVRpbWVsaW5lRW50cnl9IGZyb20gJy4vaGlzdG9yeS1zaWRlYmFyLXdpZGdldC5tb2RlbCc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0hpc3RvcnlUaW1lbGluZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9oaXN0b3J5LXRpbWVsaW5lL2hpc3RvcnktdGltZWxpbmUuc3RvcmUnO1xuaW1wb3J0IHtlbXB0eU9iamVjdCwgUmVjb3JkLCBWaWV3Q29udGV4dH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtIaXN0b3J5VGltZWxpbmVTdG9yZUZhY3Rvcnl9IGZyb20gJy4vaGlzdG9yeS10aW1lbGluZS5zdG9yZS5mYWN0b3J5JztcblxuZXhwb3J0IHR5cGUgQWN0aXZpdHlUeXBlcyA9ICdjYWxscycgfCAndGFza3MnIHwgJ21lZXRpbmdzJyB8ICdoaXN0b3J5JyB8ICdhdWRpdCcgfCAnbm90ZXMnIHwgc3RyaW5nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGlzdG9yeVRpbWVsaW5lQWRhcHRlciB7XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgY2FjaGU6IEhpc3RvcnlUaW1lbGluZUVudHJ5W10gPSBbXTtcbiAgICBkYXRhU3RyZWFtID0gbmV3IEJlaGF2aW9yU3ViamVjdDxIaXN0b3J5VGltZWxpbmVFbnRyeVtdPih0aGlzLmNhY2hlKTtcbiAgICBkYXRhU3RyZWFtJCA9IHRoaXMuZGF0YVN0cmVhbS5hc09ic2VydmFibGUoKTtcblxuICAgIHByaXZhdGUgZGVmYXVsdFBhZ2VTaXplID0gMTA7XG4gICAgcHJpdmF0ZSBzdG9yZTogSGlzdG9yeVRpbWVsaW5lU3RvcmU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaGlzdG9yeVRpbWVsaW5lU3RvcmVGYWN0b3J5OiBIaXN0b3J5VGltZWxpbmVTdG9yZUZhY3RvcnlcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKiBAcGFyYW0ge1ZpZXdDb250ZXh0fSBjb250ZXh0IC0gcGFyZW50IG1vZHVsZSBjb250ZXh0XG4gICAgICogQGRlc2NyaXB0aW9uIGFkYXB0ZXIgaW5pdCBmdW5jdGlvbiB0byBpbml0aWFsaXplIHRpbWVsaW5lIHN0b3JlXG4gICAgICovXG4gICAgaW5pdChjb250ZXh0OiBWaWV3Q29udGV4dCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuc3RvcmUgPSB0aGlzLmhpc3RvcnlUaW1lbGluZVN0b3JlRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5zdG9yZS5pbml0KGNvbnRleHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEhpc3RvcnlUaW1lbGluZUVudHJ5W10+fSByZXR1cm4gb2JzZXJ2YWJsZSBhcnJheSBvZiB0aW1lbGluZSBlbnRyaWVzXG4gICAgICogQGRlc2NyaXB0aW9uIHJldHJpZXZlIG5leHQgc2V0IG9mIHJlY29yZHMgc3RhcnRpbmcgZnJvbSB0aGUgY3VycmVudCBvZmZzZXRcbiAgICAgKiByZXByZXNlbnRlZCBieSB0aGUgZmllbGQgdGhpcy5jYWNoZS5sZW5ndGhcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCB0aW1lbGluZVxuICAgICAqL1xuICAgIGZldGNoVGltZWxpbmVFbnRyaWVzKHJlbG9hZDogYm9vbGVhbik6IE9ic2VydmFibGU8SGlzdG9yeVRpbWVsaW5lRW50cnlbXT4ge1xuXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWxvYWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3JlLmluaXRTZWFyY2hDcml0ZXJpYSh0aGlzLmNhY2hlLmxlbmd0aCwgdGhpcy5kZWZhdWx0UGFnZVNpemUpO1xuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RvcmUubG9hZChmYWxzZSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCByZWNvcmRzOiBSZWNvcmQgW10gPSB2YWx1ZS5yZWNvcmRzO1xuXG4gICAgICAgICAgICBpZiAoIWVtcHR5T2JqZWN0KHJlY29yZHMpKSB7XG5cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhyZWNvcmRzKS5mb3JFYWNoKGtleSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5wdXNoKHRoaXMuYnVpbGRUaW1lbGluZUVudHJ5KHJlY29yZHNba2V5XSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU3RyZWFtLm5leHQoWy4uLnRoaXMuY2FjaGVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTdHJlYW0kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGNvbG9yIGNvZGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aXZpdHkgdGhlIHZhbGlkIGFjdGl2aXR5IHR5cGVzXG4gICAgICogQGRlc2NyaXB0aW9uIHtyZXR1cm5zIHRoZSBtYXBwZWQgYmFja2dyb3VuZCBjb2xvciBjb2RlIGRlZmluZWQgZm9yIGFuIGFjdGl2aXR5fVxuICAgICAqL1xuICAgIGdldEFjdGl2aXR5R3JpZENvbG9yKGFjdGl2aXR5OiBBY3Rpdml0eVR5cGVzKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY29sb3JNYXAgPSB7XG4gICAgICAgICAgICBjYWxsczogJ3llbGxvdycsXG4gICAgICAgICAgICB0YXNrczogJ2dyZWVuJyxcbiAgICAgICAgICAgIG1lZXRpbmdzOiAnYmx1ZScsXG4gICAgICAgICAgICBub3RlczogJ29yYW5nZScsXG4gICAgICAgICAgICBhdWRpdDogJ3B1cnBsZScsXG4gICAgICAgICAgICBoaXN0b3J5OiAncHVycGxlJ1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29sb3JNYXBbYWN0aXZpdHldIHx8ICd5ZWxsb3cnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtIaXN0b3J5VGltZWxpbmVFbnRyeX0gVGltZWxpbmUgRW50cnlcbiAgICAgKiBAcGFyYW0ge1JlY29yZH0gcmVjb3JkIG9iamVjdFxuICAgICAqIEBkZXNjcmlwdGlvbiB7cmV0dXJucyB0aGUgbWFwcGVkIHJlY29yZCB0byB0aW1lbGluZSBlbnRyeX1cbiAgICAgKi9cbiAgICBidWlsZFRpbWVsaW5lRW50cnkocmVjb3JkOiBSZWNvcmQpOiBIaXN0b3J5VGltZWxpbmVFbnRyeSB7XG5cbiAgICAgICAgY29uc3QgdGltZWxpbmVNb2R1bGUgPSByZWNvcmQubW9kdWxlO1xuXG4gICAgICAgIGxldCBtb2R1bGVJY29uID0gcmVjb3JkLmF0dHJpYnV0ZXMubW9kdWxlX25hbWU7XG4gICAgICAgIGlmICh0aW1lbGluZU1vZHVsZSA9PT0gJ2F1ZGl0Jykge1xuICAgICAgICAgICAgbW9kdWxlSWNvbiA9ICdIaXN0b3J5JztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdyaWRDb2xvciA9IHRoaXMuZ2V0QWN0aXZpdHlHcmlkQ29sb3IocmVjb3JkLm1vZHVsZSk7XG5cbiAgICAgICAgY29uc3QgdGltZWxpbmVFbnRyeSA9IHtcbiAgICAgICAgICAgIG1vZHVsZTogdGltZWxpbmVNb2R1bGUsXG4gICAgICAgICAgICBpY29uOiBtb2R1bGVJY29uLFxuICAgICAgICAgICAgY29sb3I6IGdyaWRDb2xvcixcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3ZhcmNoYXInLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXR0cmlidXRlcy5uYW1lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICd2YXJjaGFyJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmF0dHJpYnV0ZXMuYXNzaWduZWRfdXNlcl9uYW1lLnVzZXJfbmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2RhdGV0aW1lJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmF0dHJpYnV0ZXMuZGF0ZV9lbmQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVjb3JkXG4gICAgICAgIH0gYXMgSGlzdG9yeVRpbWVsaW5lRW50cnk7XG5cbiAgICAgICAgaWYgKHRpbWVsaW5lTW9kdWxlID09PSAnYXVkaXQnKSB7XG5cbiAgICAgICAgICAgIHRpbWVsaW5lRW50cnkuZGVzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2h0bWwnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXR0cmlidXRlcy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGltZWxpbmVFbnRyeTtcbiAgICB9XG59XG4iXX0=