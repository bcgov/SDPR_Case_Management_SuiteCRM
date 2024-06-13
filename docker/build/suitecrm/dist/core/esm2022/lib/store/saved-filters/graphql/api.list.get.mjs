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
import { Apollo } from 'apollo-angular';
import { ListGQL } from '../../record-list/graphql/api.list.get';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
class FiltersListGQL extends ListGQL {
    constructor(apollo) {
        super(apollo);
        this.apollo = apollo;
    }
    /**
     * Fetch the list of filters from the backend
     *
     * @param {string} module to use
     * @param {object} criteria to use
     * @param {object} sort to use
     * @param {object} pagination to use
     * @returns {object} Observable<any>
     */
    get(module, criteria, sort, pagination) {
        return super.get(module, criteria, sort, pagination);
    }
    /**
     * Map record. Allow for extensions
     * @param record
     */
    mapRecord(record) {
        if (!record) {
            return record;
        }
        record.key = record.id || (record.attributes && record.attributes.id) || '';
        const contents = (record.attributes && record.attributes && record.attributes.contents) || null;
        if (contents) {
            const savedFilter = { ...record };
            savedFilter.criteria = contents;
            return savedFilter;
        }
        return record;
    }
    static { this.ɵfac = function FiltersListGQL_Factory(t) { return new (t || FiltersListGQL)(i0.ɵɵinject(i1.Apollo)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FiltersListGQL, factory: FiltersListGQL.ɵfac, providedIn: 'root' }); }
}
export { FiltersListGQL };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FiltersListGQL, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Apollo }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmxpc3QuZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL3NhdmVkLWZpbHRlcnMvZ3JhcGhxbC9hcGkubGlzdC5nZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR3RDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQzs7O0FBRy9ELE1BR2EsY0FBZSxTQUFRLE9BQU87SUFFdkMsWUFBc0IsTUFBYztRQUNoQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFESSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXBDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLEdBQUcsQ0FBQyxNQUFjLEVBQUUsUUFBd0IsRUFBRSxJQUFzQixFQUFFLFVBQXNCO1FBQy9GLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sU0FBUyxDQUFDLE1BQVc7UUFDM0IsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULE9BQU8sTUFBTSxDQUFDO1NBQ2pCO1FBRUQsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU1RSxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUNoRyxJQUFJLFFBQVEsRUFBRTtZQUNWLE1BQU0sV0FBVyxHQUFHLEVBQUMsR0FBRyxNQUFNLEVBQWdCLENBQUM7WUFDL0MsV0FBVyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDaEMsT0FBTyxXQUFXLENBQUM7U0FDdEI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOytFQXRDUSxjQUFjO3VFQUFkLGNBQWMsV0FBZCxjQUFjLG1CQUZYLE1BQU07O1NBRVQsY0FBYzt1RkFBZCxjQUFjO2NBSDFCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBvbGxvfSBmcm9tICdhcG9sbG8tYW5ndWxhcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtQYWdpbmF0aW9uLCBTZWFyY2hDcml0ZXJpYSwgU29ydGluZ1NlbGVjdGlvbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TGlzdEdRTH0gZnJvbSAnLi4vLi4vcmVjb3JkLWxpc3QvZ3JhcGhxbC9hcGkubGlzdC5nZXQnO1xuaW1wb3J0IHtTYXZlZEZpbHRlciwgU2F2ZWRGaWx0ZXJMaXN0fSBmcm9tICcuLi9zYXZlZC1maWx0ZXIubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlcnNMaXN0R1FMIGV4dGVuZHMgTGlzdEdRTCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXBvbGxvOiBBcG9sbG8pIHtcbiAgICAgICAgc3VwZXIoYXBvbGxvKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCB0aGUgbGlzdCBvZiBmaWx0ZXJzIGZyb20gdGhlIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNyaXRlcmlhIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzb3J0IHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYWdpbmF0aW9uIHRvIHVzZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQobW9kdWxlOiBzdHJpbmcsIGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSwgc29ydDogU29ydGluZ1NlbGVjdGlvbiwgcGFnaW5hdGlvbjogUGFnaW5hdGlvbik6IE9ic2VydmFibGU8U2F2ZWRGaWx0ZXJMaXN0PiB7XG4gICAgICAgIHJldHVybiBzdXBlci5nZXQobW9kdWxlLCBjcml0ZXJpYSwgc29ydCwgcGFnaW5hdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwIHJlY29yZC4gQWxsb3cgZm9yIGV4dGVuc2lvbnNcbiAgICAgKiBAcGFyYW0gcmVjb3JkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1hcFJlY29yZChyZWNvcmQ6IGFueSk6IFNhdmVkRmlsdGVyIHtcbiAgICAgICAgaWYgKCFyZWNvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgICAgIH1cblxuICAgICAgICByZWNvcmQua2V5ID0gcmVjb3JkLmlkIHx8IChyZWNvcmQuYXR0cmlidXRlcyAmJiByZWNvcmQuYXR0cmlidXRlcy5pZCkgfHwgJyc7XG5cbiAgICAgICAgY29uc3QgY29udGVudHMgPSAocmVjb3JkLmF0dHJpYnV0ZXMgJiYgcmVjb3JkLmF0dHJpYnV0ZXMgJiYgcmVjb3JkLmF0dHJpYnV0ZXMuY29udGVudHMpIHx8IG51bGw7XG4gICAgICAgIGlmIChjb250ZW50cykge1xuICAgICAgICAgICAgY29uc3Qgc2F2ZWRGaWx0ZXIgPSB7Li4ucmVjb3JkfSBhcyBTYXZlZEZpbHRlcjtcbiAgICAgICAgICAgIHNhdmVkRmlsdGVyLmNyaXRlcmlhID0gY29udGVudHM7XG4gICAgICAgICAgICByZXR1cm4gc2F2ZWRGaWx0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVjb3JkO1xuICAgIH1cbn1cbiJdfQ==