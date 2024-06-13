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
class StatisticsFetchGQL {
    constructor(apollo) {
        this.apollo = apollo;
    }
    /**
     * Fetch statistics data from backend
     *
     * @param {string} module name
     * @param {object} queries to use
     * @returns {object} Observable<ApolloQueryResult<any>>
     */
    fetch(module, queries) {
        const queryOptions = {
            query: gql `
            query getBatchedStatistics($module: String!, $queries: Iterable!){
              getBatchedStatistics(module: $module, queries: $queries) {
                  _id
                  id
                  items
              }
            }
        `,
            variables: {
                module,
                queries,
            },
        };
        return this.apollo.query(queryOptions).pipe(map((result) => {
            const statistics = {};
            const response = (result.data && result.data.getBatchedStatistics) || {};
            const items = response.items || {};
            const itemKeys = Object.keys(items);
            if (itemKeys && itemKeys.length) {
                itemKeys.forEach((itemKey) => {
                    const item = items[itemKey];
                    // eslint-disable-next-line no-underscore-dangle
                    const key = itemKey || item._id;
                    statistics[key] = {
                        // eslint-disable-next-line no-underscore-dangle
                        id: item._id,
                        data: item.data,
                        metadata: item.metadata
                    };
                });
            }
            return statistics;
        }));
    }
    static { this.ɵfac = function StatisticsFetchGQL_Factory(t) { return new (t || StatisticsFetchGQL)(i0.ɵɵinject(i1.Apollo)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StatisticsFetchGQL, factory: StatisticsFetchGQL.ɵfac, providedIn: 'root' }); }
}
export { StatisticsFetchGQL };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatisticsFetchGQL, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Apollo }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnN0YXRpc3RpY3MuZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL3N0YXRpc3RpY3MvZ3JhcGhxbC9hcGkuc3RhdGlzdGljcy5nZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7OztBQUduQyxNQUdhLGtCQUFrQjtJQUUzQixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNsQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksS0FBSyxDQUNSLE1BQWMsRUFDZCxPQUEyQjtRQUczQixNQUFNLFlBQVksR0FBRztZQUNqQixLQUFLLEVBQUUsR0FBRyxDQUFBOzs7Ozs7OztTQVFiO1lBQ0csU0FBUyxFQUFFO2dCQUNQLE1BQU07Z0JBQ04sT0FBTzthQUNWO1NBQ0osQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQThCLEVBQUUsRUFBRTtZQUUvRSxNQUFNLFVBQVUsR0FBa0IsRUFBRSxDQUFDO1lBQ3JDLE1BQU0sUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBUyxDQUFDO1lBQ2hGLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLElBQUksRUFBUyxDQUFDO1lBQzFDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFcEMsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQWUsRUFBRSxFQUFFO29CQUNqQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVCLGdEQUFnRDtvQkFDaEQsTUFBTSxHQUFHLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQ2hDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRzt3QkFDZCxnREFBZ0Q7d0JBQ2hELEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRzt3QkFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO3FCQUNiLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO2FBQ047WUFDRCxPQUFPLFVBQVUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzttRkF2RFEsa0JBQWtCO3VFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZmLE1BQU07O1NBRVQsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBcG9sbG8sIGdxbH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7U3RhdGlzdGljLCBTdGF0aXN0aWNzTWFwLCBTdGF0aXN0aWNzUXVlcnlNYXB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBcG9sbG9RdWVyeVJlc3VsdH0gZnJvbSAnQGFwb2xsby9jbGllbnQvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3RhdGlzdGljc0ZldGNoR1FMIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBvbGxvOiBBcG9sbG8pIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBzdGF0aXN0aWNzIGRhdGEgZnJvbSBiYWNrZW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcXVlcmllcyB0byB1c2VcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPEFwb2xsb1F1ZXJ5UmVzdWx0PGFueT4+XG4gICAgICovXG4gICAgcHVibGljIGZldGNoKFxuICAgICAgICBtb2R1bGU6IHN0cmluZyxcbiAgICAgICAgcXVlcmllczogU3RhdGlzdGljc1F1ZXJ5TWFwLFxuICAgICk6IE9ic2VydmFibGU8U3RhdGlzdGljc01hcD4ge1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5OiBncWxgXG4gICAgICAgICAgICBxdWVyeSBnZXRCYXRjaGVkU3RhdGlzdGljcygkbW9kdWxlOiBTdHJpbmchLCAkcXVlcmllczogSXRlcmFibGUhKXtcbiAgICAgICAgICAgICAgZ2V0QmF0Y2hlZFN0YXRpc3RpY3MobW9kdWxlOiAkbW9kdWxlLCBxdWVyaWVzOiAkcXVlcmllcykge1xuICAgICAgICAgICAgICAgICAgX2lkXG4gICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgaXRlbXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgLFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgICAgIHF1ZXJpZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeShxdWVyeU9wdGlvbnMpLnBpcGUobWFwKChyZXN1bHQ6IEFwb2xsb1F1ZXJ5UmVzdWx0PGFueT4pID0+IHtcblxuICAgICAgICAgICAgY29uc3Qgc3RhdGlzdGljczogU3RhdGlzdGljc01hcCA9IHt9O1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSAocmVzdWx0LmRhdGEgJiYgcmVzdWx0LmRhdGEuZ2V0QmF0Y2hlZFN0YXRpc3RpY3MpIHx8IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gcmVzcG9uc2UuaXRlbXMgfHwge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgaXRlbUtleXMgPSBPYmplY3Qua2V5cyhpdGVtcyk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtS2V5cyAmJiBpdGVtS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpdGVtS2V5cy5mb3JFYWNoKChpdGVtS2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2l0ZW1LZXldO1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gaXRlbUtleSB8fCBpdGVtLl9pZDtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGlzdGljc1trZXldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBpdGVtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YTogaXRlbS5tZXRhZGF0YVxuICAgICAgICAgICAgICAgICAgICB9IGFzIFN0YXRpc3RpYztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdGF0aXN0aWNzO1xuICAgICAgICB9KSk7XG4gICAgfVxufVxuIl19