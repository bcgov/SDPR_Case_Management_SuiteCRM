import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { FetchResult } from '@apollo/client/core';
import * as i0 from "@angular/core";
export declare class EntityMutationGQL {
    private apollo;
    constructor(apollo: Apollo);
    /**
     * Create record on the backend
     *
     * @param {string} graphqlEntityName to use
     * @param {string} entityName to use
     * @param {object} input values
     * @param {object} metadata with the fields to ask for
     *
     * @returns {object} Observable<any>
     */
    create(graphqlEntityName: string, entityName: string, input: {
        [key: string]: any;
    }, metadata: {
        fields: string[];
    }): Observable<FetchResult<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityMutationGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityMutationGQL>;
}
