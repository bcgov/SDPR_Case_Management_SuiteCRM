import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Pagination, SearchCriteria, SortingSelection } from 'common';
import { ListGQL } from '../../record-list/graphql/api.list.get';
import { SavedFilter, SavedFilterList } from '../saved-filter.model';
import * as i0 from "@angular/core";
export declare class FiltersListGQL extends ListGQL {
    protected apollo: Apollo;
    constructor(apollo: Apollo);
    /**
     * Fetch the list of filters from the backend
     *
     * @param {string} module to use
     * @param {object} criteria to use
     * @param {object} sort to use
     * @param {object} pagination to use
     * @returns {object} Observable<any>
     */
    get(module: string, criteria: SearchCriteria, sort: SortingSelection, pagination: Pagination): Observable<SavedFilterList>;
    /**
     * Map record. Allow for extensions
     * @param record
     */
    protected mapRecord(record: any): SavedFilter;
    static ɵfac: i0.ɵɵFactoryDeclaration<FiltersListGQL, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FiltersListGQL>;
}
