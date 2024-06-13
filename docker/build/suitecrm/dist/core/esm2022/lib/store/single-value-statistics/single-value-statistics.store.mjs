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
import { FieldManager } from '../../services/record/field/field.manager';
import * as i0 from "@angular/core";
import * as i1 from "../statistics/graphql/api.statistics.get";
import * as i2 from "../../services/record/field/field.manager";
const initialState = {
    module: '',
    query: {},
    statistic: {
        id: '',
        data: {}
    },
    loading: false
};
class SingleValueStatisticsStore extends StatisticsStore {
    constructor(fetchGQL, fieldManager) {
        super(fetchGQL);
        this.fetchGQL = fetchGQL;
        this.fieldManager = fieldManager;
        this.cache$ = null;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.state$ = this.store.asObservable();
        this.statistic$ = this.state$.pipe(map(state => state.statistic), distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading), distinctUntilChanged());
    }
    addNewState(statistic) {
        if (!statistic.metadata || !statistic.metadata.dataType) {
            return;
        }
        const field = this.fieldManager.buildShallowField(statistic.metadata.dataType, statistic.data.value);
        field.metadata = {
            digits: 0
        };
        this.updateState({
            ...this.internalState,
            statistic,
            field,
            loading: false
        });
    }
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        super.updateState(state);
    }
    static { this.ɵfac = function SingleValueStatisticsStore_Factory(t) { return new (t || SingleValueStatisticsStore)(i0.ɵɵinject(i1.StatisticsFetchGQL), i0.ɵɵinject(i2.FieldManager)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SingleValueStatisticsStore, factory: SingleValueStatisticsStore.ɵfac }); }
}
export { SingleValueStatisticsStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SingleValueStatisticsStore, [{
        type: Injectable
    }], function () { return [{ type: i1.StatisticsFetchGQL }, { type: i2.FieldManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLXZhbHVlLXN0YXRpc3RpY3Muc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvc2luZ2xlLXZhbHVlLXN0YXRpc3RpY3Mvc2luZ2xlLXZhbHVlLXN0YXRpc3RpY3Muc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBT2pDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJDQUEyQyxDQUFDOzs7O0FBTXZFLE1BQU0sWUFBWSxHQUFHO0lBQ2pCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLEVBQXFCO0lBQzVCLFNBQVMsRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLEVBQStCO0tBQ2hCO0lBQ3pCLE9BQU8sRUFBRSxLQUFLO0NBQ2EsQ0FBQztBQUdoQyxNQUNhLDBCQUEyQixTQUFRLGVBQWU7SUFRM0QsWUFDYyxRQUE0QixFQUM1QixZQUEwQjtRQUVwQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFITixhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUM1QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU45QixXQUFNLEdBQW9CLElBQUksQ0FBQztRQUMvQixrQkFBYSxHQUErQixTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEUsVUFBSyxHQUFHLElBQUksZUFBZSxDQUE2QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFPbEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVTLFdBQVcsQ0FBQyxTQUFvQjtRQUV0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQ3JELE9BQU87U0FDVjtRQUVELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRyxLQUFLLENBQUMsUUFBUSxHQUFHO1lBQ2IsTUFBTSxFQUFFLENBQUM7U0FDWixDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNiLEdBQUcsSUFBSSxDQUFDLGFBQWE7WUFDckIsU0FBUztZQUNULEtBQUs7WUFDTCxPQUFPLEVBQUUsS0FBSztTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLFdBQVcsQ0FBQyxLQUFpQztRQUNuRCxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7MkZBN0NRLDBCQUEwQjt1RUFBMUIsMEJBQTBCLFdBQTFCLDBCQUEwQjs7U0FBMUIsMEJBQTBCO3VGQUExQiwwQkFBMEI7Y0FEdEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtcbiAgICBTaW5nbGVWYWx1ZVN0YXRpc3RpYyxcbiAgICBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NEYXRhLFxuICAgIFN0YXRpc3RpYyxcbiAgICBTdGF0aXN0aWNzUXVlcnlcbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7U3RhdGlzdGljc0ZldGNoR1FMfSBmcm9tICcuLi9zdGF0aXN0aWNzL2dyYXBocWwvYXBpLnN0YXRpc3RpY3MuZ2V0JztcbmltcG9ydCB7U3RhdGlzdGljc1N0b3JlfSBmcm9tICcuLi9zdGF0aXN0aWNzL3N0YXRpc3RpY3Muc3RvcmUnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0ZpZWxkTWFuYWdlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVjb3JkL2ZpZWxkL2ZpZWxkLm1hbmFnZXInO1xuaW1wb3J0IHtcbiAgICBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSxcbiAgICBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZUludGVyZmFjZVxufSBmcm9tICdjb21tb24nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbW9kdWxlOiAnJyxcbiAgICBxdWVyeToge30gYXMgU3RhdGlzdGljc1F1ZXJ5LFxuICAgIHN0YXRpc3RpYzoge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIGRhdGE6IHt9IGFzIFNpbmdsZVZhbHVlU3RhdGlzdGljc0RhdGFcbiAgICB9IGFzIFNpbmdsZVZhbHVlU3RhdGlzdGljLFxuICAgIGxvYWRpbmc6IGZhbHNlXG59IGFzIFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZSBleHRlbmRzIFN0YXRpc3RpY3NTdG9yZSBpbXBsZW1lbnRzIFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0b3JlSW50ZXJmYWNlIHtcbiAgICBzdGF0ZSQ6IE9ic2VydmFibGU8U2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGU+O1xuICAgIHN0YXRpc3RpYyQ6IE9ic2VydmFibGU8U3RhdGlzdGljPjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwcm90ZWN0ZWQgY2FjaGUkOiBPYnNlcnZhYmxlPGFueT4gPSBudWxsO1xuICAgIHByb3RlY3RlZCBpbnRlcm5hbFN0YXRlOiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGU+KHRoaXMuaW50ZXJuYWxTdGF0ZSk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGZldGNoR1FMOiBTdGF0aXN0aWNzRmV0Y2hHUUwsXG4gICAgICAgIHByb3RlY3RlZCBmaWVsZE1hbmFnZXI6IEZpZWxkTWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcihmZXRjaEdRTCk7XG4gICAgICAgIHRoaXMuc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICAgICAgdGhpcy5zdGF0aXN0aWMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuc3RhdGlzdGljKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5sb2FkaW5nKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZE5ld1N0YXRlKHN0YXRpc3RpYzogU3RhdGlzdGljKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFzdGF0aXN0aWMubWV0YWRhdGEgfHwgIXN0YXRpc3RpYy5tZXRhZGF0YS5kYXRhVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkTWFuYWdlci5idWlsZFNoYWxsb3dGaWVsZChzdGF0aXN0aWMubWV0YWRhdGEuZGF0YVR5cGUsIHN0YXRpc3RpYy5kYXRhLnZhbHVlKTtcblxuICAgICAgICBmaWVsZC5tZXRhZGF0YSA9IHtcbiAgICAgICAgICAgIGRpZ2l0czogMFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgc3RhdGlzdGljLFxuICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlOiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSk6IHZvaWQge1xuICAgICAgICBzdXBlci51cGRhdGVTdGF0ZShzdGF0ZSk7XG4gICAgfVxufVxuIl19