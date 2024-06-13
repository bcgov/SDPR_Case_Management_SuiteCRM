import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';
import * as i0 from "@angular/core";
export declare class EntityGQL {
    private apollo;
    constructor(apollo: Apollo);
    /**
     * Fetch data either from backend or cache
     *
     * @param {string} entity to get from
     * @param {string} id of the record
     * @param {object} metadata with the fields to ask for
     *
     * @returns {object}  Observable<ApolloQueryResult<any>>
     */
    fetch(entity: string, id: string, metadata: {
        fields: string[];
    }): Observable<ApolloQueryResult<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityGQL>;
}
