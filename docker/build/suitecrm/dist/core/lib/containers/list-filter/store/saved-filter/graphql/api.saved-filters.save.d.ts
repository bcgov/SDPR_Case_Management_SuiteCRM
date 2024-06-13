import { Apollo } from 'apollo-angular';
import { Record } from 'common';
import { ApolloQueryResult } from '@apollo/client/core';
import { RecordSaveGQL } from '../../../../../store/record/graphql/api.record.save';
import { SavedFilter } from '../../../../../store/saved-filters/saved-filter.model';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SavedFilterSaveGQL extends RecordSaveGQL {
    protected apollo: Apollo;
    constructor(apollo: Apollo);
    save(record: Record): Observable<SavedFilter>;
    protected mapToRecord(response: ApolloQueryResult<any>): SavedFilter;
    static ɵfac: i0.ɵɵFactoryDeclaration<SavedFilterSaveGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SavedFilterSaveGQL>;
}
