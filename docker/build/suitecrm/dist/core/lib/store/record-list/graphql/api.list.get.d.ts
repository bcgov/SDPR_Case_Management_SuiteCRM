import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';
import { Pagination, Record, SearchCriteria, SortingSelection } from 'common';
import { RecordList } from '../record-list.store';
import * as i0 from "@angular/core";
export declare class ListGQL {
    protected apollo: Apollo;
    protected fieldsMetadata: {
        fields: string[];
    };
    constructor(apollo: Apollo);
    /**
     * Fetch data either from backend
     *
     * @param {string} module to get from
     * @param {number} limit  page limit
     * @param {number} offset  current offset
     * @param {object} criteria filter criteria
     * @param {object} sort selection
     * @param {object} metadata with the fields to ask for
     * @returns {object} Observable<ApolloQueryResult<any>>
     */
    fetch(module: string, limit: number, offset: number, criteria: {
        [key: string]: any;
    }, sort: {
        [key: string]: any;
    }, metadata: {
        fields: string[];
    }): Observable<ApolloQueryResult<any>>;
    /**
     * Fetch the List records from the backend
     *
     * @param {string} module to use
     * @param {object} criteria to use
     * @param {object} sort to use
     * @param {object} pagination to use
     * @returns {object} Observable<any>
     */
    get(module: string, criteria: SearchCriteria, sort: SortingSelection, pagination: Pagination): Observable<RecordList>;
    /**
     * Map sort.
     * @param {object} sort to map
     */
    protected mapSort(sort: SortingSelection): {
        [key: string]: string;
    };
    /**
     * Map record. Allow for extensions
     * @param record
     */
    protected mapRecord(record: any): Record;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListGQL>;
}
