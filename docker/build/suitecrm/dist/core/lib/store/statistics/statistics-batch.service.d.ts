import { Observable } from 'rxjs';
import { StatisticsFetchGQL } from './graphql/api.statistics.get';
import { StatisticsMap, StatisticsQueryMap } from 'common';
import * as i0 from "@angular/core";
export declare class StatisticsBatch {
    protected fetchGQL: StatisticsFetchGQL;
    constructor(fetchGQL: StatisticsFetchGQL);
    /**
     * Get statistics
     *
     * @param {string} module to use
     * @param {object} queries StatisticsQueryMap
     * @returns {object} Observable<any>
     */
    fetch(module: string, queries: StatisticsQueryMap): Observable<StatisticsMap>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StatisticsBatch, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StatisticsBatch>;
}
