import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Record } from 'common';
import { ApolloQueryResult } from '@apollo/client/core';
import * as i0 from "@angular/core";
export declare class RecordSaveGQL {
    protected apollo: Apollo;
    constructor(apollo: Apollo);
    /**
     * Save record on the backend
     *
     * @param {object} record to save
     *
     * @returns {object} Observable<Record>
     */
    save(record: Record): Observable<Record>;
    protected mapToRecord(response: ApolloQueryResult<any>): Record;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordSaveGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordSaveGQL>;
}
