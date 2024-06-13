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
import { deepClone } from 'common';
import { StatisticsFetchGQL } from '../statistics/graphql/api.statistics.get';
import { StatisticsStore } from '../statistics/statistics.store';
import { distinctUntilChanged, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../statistics/graphql/api.statistics.get";
const initialState = {
    module: '',
    query: {},
    statistic: {
        id: '',
        data: {}
    },
    loading: false
};
class SeriesStatisticsStore extends StatisticsStore {
    constructor(fetchGQL) {
        super(fetchGQL);
        this.fetchGQL = fetchGQL;
        this.cache$ = null;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.statistic$ = this.state$.pipe(map(state => state.statistic), distinctUntilChanged());
    }
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        super.updateState(state);
    }
    static { this.ɵfac = function SeriesStatisticsStore_Factory(t) { return new (t || SeriesStatisticsStore)(i0.ɵɵinject(i1.StatisticsFetchGQL)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SeriesStatisticsStore, factory: SeriesStatisticsStore.ɵfac }); }
}
export { SeriesStatisticsStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeriesStatisticsStore, [{
        type: Injectable
    }], function () { return [{ type: i1.StatisticsFetchGQL }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLXN0YXRpc3RpY3Muc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvc2VyaWVzLXN0YXRpc3RpY3Mvc2VyaWVzLXN0YXRpc3RpY3Muc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7OztBQUl6RCxNQUFNLFlBQVksR0FBRztJQUNqQixNQUFNLEVBQUUsRUFBRTtJQUNWLEtBQUssRUFBRSxFQUFxQjtJQUM1QixTQUFTLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxFQUFrQjtLQUNSO0lBQ3BCLE9BQU8sRUFBRSxLQUFLO0NBQ1EsQ0FBQztBQU0zQixNQUNhLHFCQUFzQixTQUFRLGVBQWU7SUFPdEQsWUFDYyxRQUE0QjtRQUV0QyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFGTixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUxoQyxXQUFNLEdBQW9CLElBQUksQ0FBQztRQUMvQixrQkFBYSxHQUEwQixTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0QsVUFBSyxHQUFHLElBQUksZUFBZSxDQUF3QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFNN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLFdBQVcsQ0FBQyxLQUE0QjtRQUM5QyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7c0ZBdEJRLHFCQUFxQjt1RUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjs7U0FBckIscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtTZXJpZXNTdGF0aXN0aWMsIFN0YXRpc3RpY3NRdWVyeX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7U3RhdGlzdGljc0ZldGNoR1FMfSBmcm9tICcuLi9zdGF0aXN0aWNzL2dyYXBocWwvYXBpLnN0YXRpc3RpY3MuZ2V0JztcbmltcG9ydCB7U3RhdGlzdGljc1N0b3JlfSBmcm9tICcuLi9zdGF0aXN0aWNzL3N0YXRpc3RpY3Muc3RvcmUnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1Nlcmllc1Jlc3VsdH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7U3RhdGlzdGljc1N0YXRlfSBmcm9tICdjb21tb24nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbW9kdWxlOiAnJyxcbiAgICBxdWVyeToge30gYXMgU3RhdGlzdGljc1F1ZXJ5LFxuICAgIHN0YXRpc3RpYzoge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIGRhdGE6IHt9IGFzIFNlcmllc1Jlc3VsdFxuICAgIH0gYXMgU2VyaWVzU3RhdGlzdGljLFxuICAgIGxvYWRpbmc6IGZhbHNlXG59IGFzIFNlcmllc1N0YXRpc3RpY3NTdGF0ZTtcblxuZXhwb3J0IGludGVyZmFjZSBTZXJpZXNTdGF0aXN0aWNzU3RhdGUgZXh0ZW5kcyBTdGF0aXN0aWNzU3RhdGUge1xuICAgIHN0YXRpc3RpYzogU2VyaWVzU3RhdGlzdGljO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VyaWVzU3RhdGlzdGljc1N0b3JlIGV4dGVuZHMgU3RhdGlzdGljc1N0b3JlIHtcbiAgICBzdGF0ZSQ6IE9ic2VydmFibGU8U2VyaWVzU3RhdGlzdGljc1N0YXRlPjtcbiAgICBzdGF0aXN0aWMkOiBPYnNlcnZhYmxlPFNlcmllc1N0YXRpc3RpYz47XG4gICAgcHJvdGVjdGVkIGNhY2hlJDogT2JzZXJ2YWJsZTxhbnk+ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgaW50ZXJuYWxTdGF0ZTogU2VyaWVzU3RhdGlzdGljc1N0YXRlID0gZGVlcENsb25lKGluaXRpYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIHN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTZXJpZXNTdGF0aXN0aWNzU3RhdGU+KHRoaXMuaW50ZXJuYWxTdGF0ZSk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGZldGNoR1FMOiBTdGF0aXN0aWNzRmV0Y2hHUUwsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGZldGNoR1FMKTtcbiAgICAgICAgdGhpcy5zdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLnN0YXRpc3RpYyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0aXN0aWMpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlOiBTZXJpZXNTdGF0aXN0aWNzU3RhdGUpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIudXBkYXRlU3RhdGUoc3RhdGUpO1xuICAgIH1cbn1cbiJdfQ==