import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';
import * as i0 from "@angular/core";
export declare class RecordFetchGQL {
    private apollo;
    constructor(apollo: Apollo);
    /**
     * Fetch data from backend
     *
     * @param {string} module name
     * @param {string} record id
     * @param {object} metadata with the fields to ask for
     * @returns {object} Observable<ApolloQueryResult<any>>
     */
    fetch(module: string, record: string, metadata: {
        fields: string[];
    }): Observable<ApolloQueryResult<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordFetchGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordFetchGQL>;
}
