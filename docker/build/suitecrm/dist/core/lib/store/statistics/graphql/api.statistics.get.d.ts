import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { StatisticsMap, StatisticsQueryMap } from 'common';
import * as i0 from "@angular/core";
export declare class StatisticsFetchGQL {
    private apollo;
    constructor(apollo: Apollo);
    /**
     * Fetch statistics data from backend
     *
     * @param {string} module name
     * @param {object} queries to use
     * @returns {object} Observable<ApolloQueryResult<any>>
     */
    fetch(module: string, queries: StatisticsQueryMap): Observable<StatisticsMap>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StatisticsFetchGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StatisticsFetchGQL>;
}
