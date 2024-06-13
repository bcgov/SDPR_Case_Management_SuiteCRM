import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';
import * as i0 from "@angular/core";
export declare class CollectionGQL {
    private apollo;
    constructor(apollo: Apollo);
    /**
     * Fetch data either from backend or cache
     *
     * @param {string} module to get from
     * @param {object} metadata with the fields to ask for
     *
     * @returns {object} Observable<ApolloQueryResult<any>>
     */
    fetchAll(module: string, metadata: {
        fields: string[];
    }): Observable<ApolloQueryResult<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CollectionGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CollectionGQL>;
}
