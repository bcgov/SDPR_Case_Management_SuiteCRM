/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE
 * WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Supercharged by SuiteCRM" logo. If the display of the logos is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Supercharged by SuiteCRM".
 */
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
class ListGQL {
    constructor(apollo) {
        this.apollo = apollo;
        this.fieldsMetadata = {
            fields: [
                'id',
                '_id',
                'meta',
                'records'
            ]
        };
    }
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
    fetch(module, limit, offset, criteria, sort, metadata) {
        const fields = metadata.fields;
        const queryOptions = {
            query: gql `
              query getRecordList($module: String!, $limit: Int, $offset: Int, $criteria: Iterable, $sort: Iterable) {
                getRecordList(module: $module, limit: $limit, offset: $offset, criteria: $criteria, sort: $sort) {
                  ${fields.join('\n')}
                }
              }
            `,
            variables: {
                module,
                limit,
                offset,
                criteria,
                sort
            },
        };
        return this.apollo.query(queryOptions);
    }
    /**
     * Fetch the List records from the backend
     *
     * @param {string} module to use
     * @param {object} criteria to use
     * @param {object} sort to use
     * @param {object} pagination to use
     * @returns {object} Observable<any>
     */
    get(module, criteria, sort, pagination) {
        const mappedSort = this.mapSort(sort);
        return this.fetch(module, pagination.pageSize, pagination.current, criteria, mappedSort, this.fieldsMetadata)
            .pipe(map(({ data }) => {
            const recordsList = {
                records: [],
                pagination: { ...pagination }
            };
            if (!data || !data.getRecordList) {
                return recordsList;
            }
            const listData = data.getRecordList;
            if (listData.records) {
                listData.records.forEach((record) => {
                    recordsList.records.push(this.mapRecord(record));
                });
            }
            if (!listData.meta) {
                return recordsList;
            }
            if (listData.meta.offsets) {
                const paginationFieldMap = {
                    current: 'current',
                    next: 'next',
                    prev: 'previous',
                    total: 'total',
                    end: 'last',
                };
                Object.keys(paginationFieldMap).forEach((key) => {
                    if (key in listData.meta.offsets) {
                        const paginationField = paginationFieldMap[key];
                        recordsList.pagination[paginationField] = listData.meta.offsets[key];
                    }
                });
            }
            recordsList.meta = listData.meta;
            return recordsList;
        }));
    }
    /**
     * Map sort.
     * @param {object} sort to map
     */
    mapSort(sort) {
        const sortOrderMap = {
            NONE: '',
            ASC: 'ASC',
            DESC: 'DESC'
        };
        return {
            sortOrder: sortOrderMap[sort.sortOrder],
            orderBy: sort.orderBy
        };
    }
    /**
     * Map record. Allow for extensions
     * @param record
     */
    mapRecord(record) {
        return record;
    }
    static { this.ɵfac = function ListGQL_Factory(t) { return new (t || ListGQL)(i0.ɵɵinject(i1.Apollo)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListGQL, factory: ListGQL.ɵfac, providedIn: 'root' }); }
}
export { ListGQL };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListGQL, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Apollo }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmxpc3QuZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL3JlY29yZC1saXN0L2dyYXBocWwvYXBpLmxpc3QuZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFJM0MsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7QUFHbkMsTUFHYSxPQUFPO0lBV2hCLFlBQXNCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVDFCLG1CQUFjLEdBQUc7WUFDdkIsTUFBTSxFQUFFO2dCQUNKLElBQUk7Z0JBQ0osS0FBSztnQkFDTCxNQUFNO2dCQUNOLFNBQVM7YUFDWjtTQUNKLENBQUM7SUFHRixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNJLEtBQUssQ0FDUixNQUFjLEVBQ2QsS0FBYSxFQUNiLE1BQWMsRUFDZCxRQUFnQyxFQUNoQyxJQUE0QixFQUM1QixRQUE4QjtRQUc5QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRS9CLE1BQU0sWUFBWSxHQUFHO1lBQ2pCLEtBQUssRUFBRSxHQUFHLENBQUE7OztvQkFHRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7O2FBR3hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLE1BQU07Z0JBQ04sS0FBSztnQkFDTCxNQUFNO2dCQUNOLFFBQVE7Z0JBQ1IsSUFBSTthQUNQO1NBQ0osQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7Ozs7OztP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cCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBcG9sbG8sIGdxbH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7QXBvbGxvUXVlcnlSZXN1bHR9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2NvcmUnO1xuaW1wb3J0IHtQYWdpbmF0aW9uLCBSZWNvcmQsIFNlYXJjaENyaXRlcmlhLCBTb3J0aW5nU2VsZWN0aW9ufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UmVjb3JkTGlzdH0gZnJvbSAnLi4vcmVjb3JkLWxpc3Quc3RvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExpc3RHUUwge1xuXG4gICAgcHJvdGVjdGVkIGZpZWxkc01ldGFkYXRhID0ge1xuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICdpZCcsXG4gICAgICAgICAgICAnX2lkJyxcbiAgICAgICAgICAgICdtZXRhJyxcbiAgICAgICAgICAgICdyZWNvcmRzJ1xuICAgICAgICBdXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcG9sbG86IEFwb2xsbykge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIGRhdGEgZWl0aGVyIGZyb20gYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0byBnZXQgZnJvbVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAgcGFnZSBsaW1pdFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgIGN1cnJlbnQgb2Zmc2V0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNyaXRlcmlhIGZpbHRlciBjcml0ZXJpYVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzb3J0IHNlbGVjdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YSB3aXRoIHRoZSBmaWVsZHMgdG8gYXNrIGZvclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8QXBvbGxvUXVlcnlSZXN1bHQ8YW55Pj5cbiAgICAgKi9cbiAgICBwdWJsaWMgZmV0Y2goXG4gICAgICAgIG1vZHVsZTogc3RyaW5nLFxuICAgICAgICBsaW1pdDogbnVtYmVyLFxuICAgICAgICBvZmZzZXQ6IG51bWJlcixcbiAgICAgICAgY3JpdGVyaWE6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICAgICAgIHNvcnQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICAgICAgIG1ldGFkYXRhOiB7IGZpZWxkczogc3RyaW5nW10gfVxuICAgICk6IE9ic2VydmFibGU8QXBvbGxvUXVlcnlSZXN1bHQ8YW55Pj4ge1xuXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IG1ldGFkYXRhLmZpZWxkcztcblxuICAgICAgICBjb25zdCBxdWVyeU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBxdWVyeTogZ3FsYFxuICAgICAgICAgICAgICBxdWVyeSBnZXRSZWNvcmRMaXN0KCRtb2R1bGU6IFN0cmluZyEsICRsaW1pdDogSW50LCAkb2Zmc2V0OiBJbnQsICRjcml0ZXJpYTogSXRlcmFibGUsICRzb3J0OiBJdGVyYWJsZSkge1xuICAgICAgICAgICAgICAgIGdldFJlY29yZExpc3QobW9kdWxlOiAkbW9kdWxlLCBsaW1pdDogJGxpbWl0LCBvZmZzZXQ6ICRvZmZzZXQsIGNyaXRlcmlhOiAkY3JpdGVyaWEsIHNvcnQ6ICRzb3J0KSB7XG4gICAgICAgICAgICAgICAgICAke2ZpZWxkcy5qb2luKCdcXG4nKX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBtb2R1bGUsXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIGNyaXRlcmlhLFxuICAgICAgICAgICAgICAgIHNvcnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYXBvbGxvLnF1ZXJ5KHF1ZXJ5T3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggdGhlIExpc3QgcmVjb3JkcyBmcm9tIHRoZSBiYWNrZW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjcml0ZXJpYSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc29ydCB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFnaW5hdGlvbiB0byB1c2VcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0KG1vZHVsZTogc3RyaW5nLCBjcml0ZXJpYTogU2VhcmNoQ3JpdGVyaWEsIHNvcnQ6IFNvcnRpbmdTZWxlY3Rpb24sIHBhZ2luYXRpb246IFBhZ2luYXRpb24pOiBPYnNlcnZhYmxlPFJlY29yZExpc3Q+IHtcbiAgICAgICAgY29uc3QgbWFwcGVkU29ydCA9IHRoaXMubWFwU29ydChzb3J0KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5mZXRjaChtb2R1bGUsIHBhZ2luYXRpb24ucGFnZVNpemUsIHBhZ2luYXRpb24uY3VycmVudCwgY3JpdGVyaWEsIG1hcHBlZFNvcnQsIHRoaXMuZmllbGRzTWV0YWRhdGEpXG4gICAgICAgICAgICAucGlwZShtYXAoKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY29yZHNMaXN0OiBSZWNvcmRMaXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjogey4uLnBhZ2luYXRpb259IGFzIFBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLmdldFJlY29yZExpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY29yZHNMaXN0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3REYXRhID0gZGF0YS5nZXRSZWNvcmRMaXN0O1xuXG4gICAgICAgICAgICAgICAgaWYgKGxpc3REYXRhLnJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdERhdGEucmVjb3Jkcy5mb3JFYWNoKChyZWNvcmQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3Jkc0xpc3QucmVjb3Jkcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwUmVjb3JkKHJlY29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghbGlzdERhdGEubWV0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjb3Jkc0xpc3Q7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGxpc3REYXRhLm1ldGEub2Zmc2V0cykge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb25GaWVsZE1hcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6ICdjdXJyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICduZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXY6ICdwcmV2aW91cycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogJ3RvdGFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogJ2xhc3QnLFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhZ2luYXRpb25GaWVsZE1hcCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5IGluIGxpc3REYXRhLm1ldGEub2Zmc2V0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb25GaWVsZCA9IHBhZ2luYXRpb25GaWVsZE1hcFtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZHNMaXN0LnBhZ2luYXRpb25bcGFnaW5hdGlvbkZpZWxkXSA9IGxpc3REYXRhLm1ldGEub2Zmc2V0c1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZWNvcmRzTGlzdC5tZXRhID0gbGlzdERhdGEubWV0YTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZWNvcmRzTGlzdDtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXAgc29ydC5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc29ydCB0byBtYXBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbWFwU29ydChzb3J0OiBTb3J0aW5nU2VsZWN0aW9uKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgICAgIGNvbnN0IHNvcnRPcmRlck1hcCA9IHtcbiAgICAgICAgICAgIE5PTkU6ICcnLFxuICAgICAgICAgICAgQVNDOiAnQVNDJyxcbiAgICAgICAgICAgIERFU0M6ICdERVNDJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzb3J0T3JkZXI6IHNvcnRPcmRlck1hcFtzb3J0LnNvcnRPcmRlcl0sXG4gICAgICAgICAgICBvcmRlckJ5OiBzb3J0Lm9yZGVyQnlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXAgcmVjb3JkLiBBbGxvdyBmb3IgZXh0ZW5zaW9uc1xuICAgICAqIEBwYXJhbSByZWNvcmRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbWFwUmVjb3JkKHJlY29yZDogYW55KTogUmVjb3JkIHtcbiAgICAgICAgcmV0dXJuIHJlY29yZDtcbiAgICB9XG59XG4iXX0=