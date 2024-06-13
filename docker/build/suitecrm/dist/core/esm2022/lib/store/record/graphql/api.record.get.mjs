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
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
class RecordFetchGQL {
    constructor(apollo) {
        this.apollo = apollo;
    }
    /**
     * Fetch data from backend
     *
     * @param {string} module name
     * @param {string} record id
     * @param {object} metadata with the fields to ask for
     * @returns {object} Observable<ApolloQueryResult<any>>
     */
    fetch(module, record, metadata) {
        const fields = metadata.fields;
        const queryOptions = {
            query: gql `
            query getRecord($module: String!, $record: String!) {
                getRecord(module: $module, record: $record) {
                    ${fields.join('\n')}
                }
            }
        `,
            variables: {
                module,
                record,
            },
        };
        return this.apollo.query(queryOptions);
    }
    static { this.ɵfac = function RecordFetchGQL_Factory(t) { return new (t || RecordFetchGQL)(i0.ɵɵinject(i1.Apollo)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordFetchGQL, factory: RecordFetchGQL.ɵfac, providedIn: 'root' }); }
}
export { RecordFetchGQL };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordFetchGQL, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Apollo }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnJlY29yZC5nZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvcmVjb3JkL2dyYXBocWwvYXBpLnJlY29yZC5nZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSTNDLE1BR2EsY0FBYztJQUV2QixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNsQyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLEtBQUssQ0FDUixNQUFjLEVBQ2QsTUFBYyxFQUNkLFFBQThCO1FBRTlCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFFL0IsTUFBTSxZQUFZLEdBQUc7WUFDakIsS0FBSyxFQUFFLEdBQUcsQ0FBQTs7O3NCQUdBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOzs7U0FHOUI7WUFDRyxTQUFTLEVBQUU7Z0JBQ1AsTUFBTTtnQkFDTixNQUFNO2FBQ1Q7U0FDSixDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDOytFQW5DUSxjQUFjO3VFQUFkLGNBQWMsV0FBZCxjQUFjLG1CQUZYLE1BQU07O1NBRVQsY0FBYzt1RkFBZCxjQUFjO2NBSDFCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBvbGxvLCBncWx9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Fwb2xsb1F1ZXJ5UmVzdWx0fSBmcm9tICdAYXBvbGxvL2NsaWVudC9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRGZXRjaEdRTCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwb2xsbzogQXBvbGxvKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggZGF0YSBmcm9tIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWNvcmQgaWRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGEgd2l0aCB0aGUgZmllbGRzIHRvIGFzayBmb3JcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPEFwb2xsb1F1ZXJ5UmVzdWx0PGFueT4+XG4gICAgICovXG4gICAgcHVibGljIGZldGNoKFxuICAgICAgICBtb2R1bGU6IHN0cmluZyxcbiAgICAgICAgcmVjb3JkOiBzdHJpbmcsXG4gICAgICAgIG1ldGFkYXRhOiB7IGZpZWxkczogc3RyaW5nW10gfVxuICAgICk6IE9ic2VydmFibGU8QXBvbGxvUXVlcnlSZXN1bHQ8YW55Pj4ge1xuICAgICAgICBjb25zdCBmaWVsZHMgPSBtZXRhZGF0YS5maWVsZHM7XG5cbiAgICAgICAgY29uc3QgcXVlcnlPcHRpb25zID0ge1xuICAgICAgICAgICAgcXVlcnk6IGdxbGBcbiAgICAgICAgICAgIHF1ZXJ5IGdldFJlY29yZCgkbW9kdWxlOiBTdHJpbmchLCAkcmVjb3JkOiBTdHJpbmchKSB7XG4gICAgICAgICAgICAgICAgZ2V0UmVjb3JkKG1vZHVsZTogJG1vZHVsZSwgcmVjb3JkOiAkcmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgICR7ZmllbGRzLmpvaW4oJ1xcbicpfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIG1vZHVsZSxcbiAgICAgICAgICAgICAgICByZWNvcmQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeShxdWVyeU9wdGlvbnMpO1xuICAgIH1cbn1cbiJdfQ==