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
import { BehaviorSubject, of } from 'rxjs';
import { deepClone } from 'common';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import { SeriesStatisticsStore } from '../series-statistics/series-statistics.store';
import { StatisticsFetchGQL } from '../statistics/graphql/api.statistics.get';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { SeriesMapper } from '../../services/statistics/series/mapper/series-mapper.service';
import * as i0 from "@angular/core";
import * as i1 from "../statistics/graphql/api.statistics.get";
import * as i2 from "../../services/formatters/data-type.formatter.service";
import * as i3 from "../../services/statistics/series/mapper/series-mapper.service";
const initialState = {
    module: '',
    query: {},
    statistic: {
        id: '',
        data: {}
    },
    loading: false
};
class ChartDataStore extends SeriesStatisticsStore {
    constructor(fetchGQL, formatter, seriesMapper) {
        super(fetchGQL);
        this.fetchGQL = fetchGQL;
        this.formatter = formatter;
        this.seriesMapper = seriesMapper;
        this.internalState = deepClone(initialState);
        this.store = new BehaviorSubject(this.internalState);
        this.defaultOptions = {};
        this.state$ = this.store.asObservable();
        this.statistic$ = this.state$.pipe(map(state => state.statistic), distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading), distinctUntilChanged());
    }
    setDefaultOptions(chartOptions) {
        this.defaultOptions = chartOptions;
    }
    getDataSource() {
        return this.internalState.dataSource;
    }
    addNewState(statistic) {
        if (!statistic.metadata || !statistic.metadata.dataType) {
            return;
        }
        this.injectDefaultValues(statistic);
        const dataSource = this.buildCharDataSource(statistic);
        this.updateState({
            ...this.internalState,
            statistic,
            dataSource,
            loading: false
        });
    }
    injectDefaultValues(statistic) {
        if (!statistic.metadata.chartOptions) {
            statistic.metadata.chartOptions = deepClone(this.defaultOptions);
            return;
        }
        Object.keys(this.defaultOptions).forEach(optionKey => {
            if (!(optionKey in statistic.metadata.chartOptions)) {
                statistic.metadata.chartOptions[optionKey] = this.defaultOptions[optionKey];
            }
        });
    }
    buildCharDataSource(statistic) {
        const dataType = statistic.metadata.dataType || '';
        let formatOptions = null;
        const digits = (statistic.metadata && statistic.metadata.digits) || null;
        if (digits !== null) {
            formatOptions = {
                digits
            };
        }
        return {
            options: statistic.metadata.chartOptions || {},
            getResults: () => of(this.buildSeriesResult(statistic)).pipe(shareReplay(1)),
            tickFormatting: (value) => this.formatter.toUserFormat(dataType, value, formatOptions),
            tooltipFormatting: (value) => this.formatter.toUserFormat(dataType, value, formatOptions)
        };
    }
    buildSeriesResult(statistic) {
        const dataType = statistic.metadata.dataType || '';
        const result = {};
        const singleSeries = statistic.data.singleSeries || null;
        if (singleSeries) {
            result.singleSeries = singleSeries;
        }
        const multiSeries = statistic.data.multiSeries || null;
        if (multiSeries) {
            result.multiSeries = multiSeries;
        }
        this.seriesMapper.map(result, 'data-type-unit-converter', { dataType });
        return result;
    }
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        super.updateState(state);
    }
    static { this.ɵfac = function ChartDataStore_Factory(t) { return new (t || ChartDataStore)(i0.ɵɵinject(i1.StatisticsFetchGQL), i0.ɵɵinject(i2.DataTypeFormatter), i0.ɵɵinject(i3.SeriesMapper)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ChartDataStore, factory: ChartDataStore.ɵfac }); }
}
export { ChartDataStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChartDataStore, [{
        type: Injectable
    }], function () { return [{ type: i1.StatisticsFetchGQL }, { type: i2.DataTypeFormatter }, { type: i3.SeriesMapper }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtZGF0YS5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS9jaGFydC1kYXRhL2NoYXJ0LWRhdGEuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUlILFNBQVMsRUFLWixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBd0IscUJBQXFCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUMxRyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sK0RBQStELENBQUM7Ozs7O0FBRTNGLE1BQU0sWUFBWSxHQUFHO0lBQ2pCLE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLEVBQXFCO0lBQzVCLFNBQVMsRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLEVBQWtCO0tBQ1I7SUFDcEIsT0FBTyxFQUFFLEtBQUs7Q0FDQyxDQUFDO0FBTXBCLE1BQ2EsY0FBZSxTQUFRLHFCQUFxQjtJQVNyRCxZQUNjLFFBQTRCLEVBQzVCLFNBQTRCLEVBQzVCLFlBQTBCO1FBRXBDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUpOLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQzVCLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzVC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KlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICAgIENoYXJ0RGF0YVNvdXJjZSxcbiAgICBDaGFydE9wdGlvbk1hcCxcbiAgICBDaGFydE9wdGlvbnMsXG4gICAgZGVlcENsb25lLFxuICAgIFNlcmllc1Jlc3VsdCxcbiAgICBTZXJpZXNTdGF0aXN0aWMsXG4gICAgU3RhdGlzdGljLFxuICAgIFN0YXRpc3RpY3NRdWVyeVxufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzaGFyZVJlcGxheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTZXJpZXNTdGF0aXN0aWNzU3RhdGUsIFNlcmllc1N0YXRpc3RpY3NTdG9yZX0gZnJvbSAnLi4vc2VyaWVzLXN0YXRpc3RpY3Mvc2VyaWVzLXN0YXRpc3RpY3Muc3RvcmUnO1xuaW1wb3J0IHtTdGF0aXN0aWNzRmV0Y2hHUUx9IGZyb20gJy4uL3N0YXRpc3RpY3MvZ3JhcGhxbC9hcGkuc3RhdGlzdGljcy5nZXQnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTZXJpZXNNYXBwZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3N0YXRpc3RpY3Mvc2VyaWVzL21hcHBlci9zZXJpZXMtbWFwcGVyLnNlcnZpY2UnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbW9kdWxlOiAnJyxcbiAgICBxdWVyeToge30gYXMgU3RhdGlzdGljc1F1ZXJ5LFxuICAgIHN0YXRpc3RpYzoge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIGRhdGE6IHt9IGFzIFNlcmllc1Jlc3VsdFxuICAgIH0gYXMgU2VyaWVzU3RhdGlzdGljLFxuICAgIGxvYWRpbmc6IGZhbHNlXG59IGFzIENoYXJ0RGF0YVN0YXRlO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0RGF0YVN0YXRlIGV4dGVuZHMgU2VyaWVzU3RhdGlzdGljc1N0YXRlIHtcbiAgICBkYXRhU291cmNlPzogQ2hhcnREYXRhU291cmNlO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhcnREYXRhU3RvcmUgZXh0ZW5kcyBTZXJpZXNTdGF0aXN0aWNzU3RvcmUge1xuXG4gICAgc3RhdGUkOiBPYnNlcnZhYmxlPENoYXJ0RGF0YVN0YXRlPjtcbiAgICBzdGF0aXN0aWMkOiBPYnNlcnZhYmxlPFNlcmllc1N0YXRpc3RpYz47XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJvdGVjdGVkIGludGVybmFsU3RhdGU6IENoYXJ0RGF0YVN0YXRlID0gZGVlcENsb25lKGluaXRpYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIHN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDaGFydERhdGFTdGF0ZT4odGhpcy5pbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdE9wdGlvbnM6IENoYXJ0T3B0aW9ucyA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBmZXRjaEdRTDogU3RhdGlzdGljc0ZldGNoR1FMLFxuICAgICAgICBwcm90ZWN0ZWQgZm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIHNlcmllc01hcHBlcjogU2VyaWVzTWFwcGVyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGZldGNoR1FMKTtcbiAgICAgICAgdGhpcy5zdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLnN0YXRpc3RpYyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0aXN0aWMpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmxvYWRpbmcpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RGVmYXVsdE9wdGlvbnMoY2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IGNoYXJ0T3B0aW9ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGF0YVNvdXJjZSgpOiBDaGFydERhdGFTb3VyY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLmRhdGFTb3VyY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZE5ld1N0YXRlKHN0YXRpc3RpYzogU3RhdGlzdGljKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFzdGF0aXN0aWMubWV0YWRhdGEgfHwgIXN0YXRpc3RpYy5tZXRhZGF0YS5kYXRhVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5qZWN0RGVmYXVsdFZhbHVlcyhzdGF0aXN0aWMpO1xuXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB0aGlzLmJ1aWxkQ2hhckRhdGFTb3VyY2Uoc3RhdGlzdGljKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHN0YXRpc3RpYyxcbiAgICAgICAgICAgIGRhdGFTb3VyY2UsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5qZWN0RGVmYXVsdFZhbHVlcyhzdGF0aXN0aWM6IFN0YXRpc3RpYyk6IHZvaWQge1xuICAgICAgICBpZiAoIXN0YXRpc3RpYy5tZXRhZGF0YS5jaGFydE9wdGlvbnMpIHtcbiAgICAgICAgICAgIHN0YXRpc3RpYy5tZXRhZGF0YS5jaGFydE9wdGlvbnMgPSBkZWVwQ2xvbmUodGhpcy5kZWZhdWx0T3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRlZmF1bHRPcHRpb25zKS5mb3JFYWNoKG9wdGlvbktleSA9PiB7XG4gICAgICAgICAgICBpZiAoIShvcHRpb25LZXkgaW4gc3RhdGlzdGljLm1ldGFkYXRhLmNoYXJ0T3B0aW9ucykpIHtcbiAgICAgICAgICAgICAgICBzdGF0aXN0aWMubWV0YWRhdGEuY2hhcnRPcHRpb25zW29wdGlvbktleV0gPSB0aGlzLmRlZmF1bHRPcHRpb25zW29wdGlvbktleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZENoYXJEYXRhU291cmNlKHN0YXRpc3RpYzogU3RhdGlzdGljKTogQ2hhcnREYXRhU291cmNlIHtcbiAgICAgICAgY29uc3QgZGF0YVR5cGUgPSBzdGF0aXN0aWMubWV0YWRhdGEuZGF0YVR5cGUgfHwgJyc7XG5cbiAgICAgICAgbGV0IGZvcm1hdE9wdGlvbnMgPSBudWxsO1xuICAgICAgICBjb25zdCBkaWdpdHMgPSAoc3RhdGlzdGljLm1ldGFkYXRhICYmIHN0YXRpc3RpYy5tZXRhZGF0YS5kaWdpdHMpIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKGRpZ2l0cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBkaWdpdHNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3B0aW9uczogc3RhdGlzdGljLm1ldGFkYXRhLmNoYXJ0T3B0aW9ucyB8fCB7fSBhcyBDaGFydE9wdGlvbk1hcCxcblxuICAgICAgICAgICAgZ2V0UmVzdWx0czogKCk6IE9ic2VydmFibGU8U2VyaWVzUmVzdWx0PiA9PiBvZih0aGlzLmJ1aWxkU2VyaWVzUmVzdWx0KHN0YXRpc3RpYykpLnBpcGUoc2hhcmVSZXBsYXkoMSkpLFxuICAgICAgICAgICAgdGlja0Zvcm1hdHRpbmc6ICh2YWx1ZTogYW55KTogYW55ID0+IHRoaXMuZm9ybWF0dGVyLnRvVXNlckZvcm1hdChkYXRhVHlwZSwgdmFsdWUsIGZvcm1hdE9wdGlvbnMpLFxuICAgICAgICAgICAgdG9vbHRpcEZvcm1hdHRpbmc6ICh2YWx1ZTogYW55KTogYW55ID0+IHRoaXMuZm9ybWF0dGVyLnRvVXNlckZvcm1hdChkYXRhVHlwZSwgdmFsdWUsIGZvcm1hdE9wdGlvbnMpXG4gICAgICAgIH0gYXMgQ2hhcnREYXRhU291cmNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZFNlcmllc1Jlc3VsdChzdGF0aXN0aWM6IFN0YXRpc3RpYyk6IFNlcmllc1Jlc3VsdCB7XG5cbiAgICAgICAgY29uc3QgZGF0YVR5cGUgPSBzdGF0aXN0aWMubWV0YWRhdGEuZGF0YVR5cGUgfHwgJyc7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge30gYXMgU2VyaWVzUmVzdWx0O1xuXG4gICAgICAgIGNvbnN0IHNpbmdsZVNlcmllcyA9IHN0YXRpc3RpYy5kYXRhLnNpbmdsZVNlcmllcyB8fCBudWxsO1xuICAgICAgICBpZiAoc2luZ2xlU2VyaWVzKSB7XG4gICAgICAgICAgICByZXN1bHQuc2luZ2xlU2VyaWVzID0gc2luZ2xlU2VyaWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbXVsdGlTZXJpZXMgPSBzdGF0aXN0aWMuZGF0YS5tdWx0aVNlcmllcyB8fCBudWxsO1xuICAgICAgICBpZiAobXVsdGlTZXJpZXMpIHtcbiAgICAgICAgICAgIHJlc3VsdC5tdWx0aVNlcmllcyA9IG11bHRpU2VyaWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXJpZXNNYXBwZXIubWFwKHJlc3VsdCwgJ2RhdGEtdHlwZS11bml0LWNvbnZlcnRlcicsIHtkYXRhVHlwZX0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZTogQ2hhcnREYXRhU3RhdGUpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIudXBkYXRlU3RhdGUoc3RhdGUpO1xuICAgIH1cbn1cbiJdfQ==