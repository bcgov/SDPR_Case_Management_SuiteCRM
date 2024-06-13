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
import { deepClone } from 'common';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
class RecordSaveGQL {
    constructor(apollo) {
        this.apollo = apollo;
    }
    /**
     * Save record on the backend
     *
     * @param {object} record to save
     *
     * @returns {object} Observable<Record>
     */
    save(record) {
        const input = {
            module: record.module,
            attributes: deepClone(record.attributes),
        };
        if (record.id) {
            // eslint-disable-next-line no-underscore-dangle
            input._id = record.id;
        }
        const mutationOptions = {
            mutation: gql `
                mutation saveRecord($input: saveRecordInput!) {
                    saveRecord(input: $input) {
                        record {
                            attributes
                            favorite
                            id
                            _id
                            module
                            acls
                        }
                    }
                }
            `,
            variables: {
                input
            },
        };
        return this.apollo.mutate(mutationOptions).pipe(map((result) => this.mapToRecord(result)));
    }
    mapToRecord(response) {
        if (!response.data || !response.data.saveRecord || !response.data.saveRecord.record) {
            return null;
        }
        return {
            // eslint-disable-next-line no-underscore-dangle
            id: response.data.saveRecord.record._id,
            type: response?.data?.saveRecord?.record?.type ?? '',
            module: response?.data?.saveRecord?.record?.module ?? '',
            attributes: response?.data?.saveRecord?.record?.attributes ?? [],
            acls: response?.data?.saveRecord?.record?.acls ?? [],
            favorite: response?.data.saveRecord?.record?.favorite ?? false
        };
    }
    static { this.ɵfac = function RecordSaveGQL_Factory(t) { return new (t || RecordSaveGQL)(i0.ɵɵinject(i1.Apollo)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordSaveGQL, factory: RecordSaveGQL.ɵfac, providedIn: 'root' }); }
}
export { RecordSaveGQL };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordSaveGQL, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Apollo }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnJlY29yZC5zYXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL3JlY29yZC9ncmFwaHFsL2FwaS5yZWNvcmQuc2F2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxRQUFRLENBQUM7QUFDekMsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7QUFTbkMsTUFHYSxhQUFhO0lBRXRCLFlBQXNCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3BDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxJQUFJLENBQUMsTUFBYztRQUV0QixNQUFNLEtBQUssR0FBYztZQUNyQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07WUFDckIsVUFBVSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQzNDLENBQUM7UUFFRixJQUFJLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDWCxnREFBZ0Q7WUFDaEQsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1NBQ3pCO1FBRUQsTUFBTSxlQUFlLEdBQUc7WUFDcEIsUUFBUSxFQUFFLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7OzthQWFaO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLEtBQUs7YUFDUjtTQUNKLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUE4QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2SCxDQUFDO0lBRVMsV0FBVyxDQUFDLFFBQWdDO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDakYsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU87WUFDSCxnREFBZ0Q7WUFDaEQsRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHO1lBQ3ZDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDcEQsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLElBQUksRUFBRTtZQUN4RCxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsSUFBSSxFQUFFO1lBQ2hFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDcEQsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLElBQUksS0FBSztTQUN2RCxDQUFDO0lBQ2hCLENBQUM7OEVBN0RRLGFBQWE7dUVBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlYsTUFBTTs7U0FFVCxhQUFhO3VGQUFiLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBcG9sbG8sIGdxbH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVlcENsb25lLCBSZWNvcmR9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBcG9sbG9RdWVyeVJlc3VsdH0gZnJvbSAnQGFwb2xsby9jbGllbnQvY29yZSc7XG5cbmludGVyZmFjZSBTYXZlSW5wdXQge1xuICAgIG1vZHVsZTogc3RyaW5nO1xuICAgIGF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gICAgX2lkPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZFNhdmVHUUwge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFwb2xsbzogQXBvbGxvKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSByZWNvcmQgb24gdGhlIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgdG8gc2F2ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxSZWNvcmQ+XG4gICAgICovXG4gICAgcHVibGljIHNhdmUocmVjb3JkOiBSZWNvcmQpOiBPYnNlcnZhYmxlPFJlY29yZD4ge1xuXG4gICAgICAgIGNvbnN0IGlucHV0OiBTYXZlSW5wdXQgPSB7XG4gICAgICAgICAgICBtb2R1bGU6IHJlY29yZC5tb2R1bGUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBkZWVwQ2xvbmUocmVjb3JkLmF0dHJpYnV0ZXMpLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChyZWNvcmQuaWQpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgICAgICAgaW5wdXQuX2lkID0gcmVjb3JkLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbXV0YXRpb25PcHRpb25zID0ge1xuICAgICAgICAgICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgICAgICAgICBtdXRhdGlvbiBzYXZlUmVjb3JkKCRpbnB1dDogc2F2ZVJlY29yZElucHV0ISkge1xuICAgICAgICAgICAgICAgICAgICBzYXZlUmVjb3JkKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2xzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgaW5wdXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYXBvbGxvLm11dGF0ZShtdXRhdGlvbk9wdGlvbnMpLnBpcGUobWFwKChyZXN1bHQ6IEFwb2xsb1F1ZXJ5UmVzdWx0PGFueT4pID0+IHRoaXMubWFwVG9SZWNvcmQocmVzdWx0KSkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBUb1JlY29yZChyZXNwb25zZTogQXBvbGxvUXVlcnlSZXN1bHQ8YW55Pik6IFJlY29yZCB7XG4gICAgICAgIGlmICghcmVzcG9uc2UuZGF0YSB8fCAhcmVzcG9uc2UuZGF0YS5zYXZlUmVjb3JkIHx8ICFyZXNwb25zZS5kYXRhLnNhdmVSZWNvcmQucmVjb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgICAgIGlkOiByZXNwb25zZS5kYXRhLnNhdmVSZWNvcmQucmVjb3JkLl9pZCxcbiAgICAgICAgICAgIHR5cGU6IHJlc3BvbnNlPy5kYXRhPy5zYXZlUmVjb3JkPy5yZWNvcmQ/LnR5cGUgPz8gJycsXG4gICAgICAgICAgICBtb2R1bGU6IHJlc3BvbnNlPy5kYXRhPy5zYXZlUmVjb3JkPy5yZWNvcmQ/Lm1vZHVsZSA/PyAnJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHJlc3BvbnNlPy5kYXRhPy5zYXZlUmVjb3JkPy5yZWNvcmQ/LmF0dHJpYnV0ZXMgPz8gW10sXG4gICAgICAgICAgICBhY2xzOiByZXNwb25zZT8uZGF0YT8uc2F2ZVJlY29yZD8ucmVjb3JkPy5hY2xzID8/IFtdLFxuICAgICAgICAgICAgZmF2b3JpdGU6IHJlc3BvbnNlPy5kYXRhLnNhdmVSZWNvcmQ/LnJlY29yZD8uZmF2b3JpdGUgPz8gZmFsc2VcbiAgICAgICAgfSBhcyBSZWNvcmQ7XG4gICAgfVxufVxuIl19