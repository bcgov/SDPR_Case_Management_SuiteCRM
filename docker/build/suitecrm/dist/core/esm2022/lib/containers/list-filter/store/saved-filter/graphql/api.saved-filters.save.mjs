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
import { RecordSaveGQL } from '../../../../../store/record/graphql/api.record.save';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
class SavedFilterSaveGQL extends RecordSaveGQL {
    constructor(apollo) {
        super(apollo);
        this.apollo = apollo;
    }
    save(record) {
        return super.save(record);
    }
    mapToRecord(response) {
        if (!response.data || !response.data.saveRecord || !response.data.saveRecord.record) {
            return null;
        }
        const savedFilter = {
            // eslint-disable-next-line no-underscore-dangle
            id: response.data.saveRecord.record._id,
            type: response.data.saveRecord.record.type || '',
            module: response.data.saveRecord.record.module || '',
            attributes: response.data.saveRecord.record.attributes || null,
        };
        savedFilter.key = savedFilter.id || (savedFilter.attributes && savedFilter.attributes.id) || '';
        const contents = (savedFilter.attributes && savedFilter.attributes.contents) || null;
        if (contents) {
            savedFilter.criteria = contents;
        }
        return savedFilter;
    }
    static { this.ɵfac = function SavedFilterSaveGQL_Factory(t) { return new (t || SavedFilterSaveGQL)(i0.ɵɵinject(i1.Apollo)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SavedFilterSaveGQL, factory: SavedFilterSaveGQL.ɵfac, providedIn: 'root' }); }
}
export { SavedFilterSaveGQL };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SavedFilterSaveGQL, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Apollo }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNhdmVkLWZpbHRlcnMuc2F2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL2xpc3QtZmlsdGVyL3N0b3JlL3NhdmVkLWZpbHRlci9ncmFwaHFsL2FwaS5zYXZlZC1maWx0ZXJzLnNhdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR3RDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxxREFBcUQsQ0FBQzs7O0FBSWxGLE1BR2Esa0JBQW1CLFNBQVEsYUFBYTtJQUVqRCxZQUFzQixNQUFjO1FBQ2hDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQURJLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFcEMsQ0FBQztJQUVNLElBQUksQ0FBQyxNQUFjO1FBQ3RCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRVMsV0FBVyxDQUFDLFFBQWdDO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDakYsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE1BQU0sV0FBVyxHQUFHO1lBQ2hCLGdEQUFnRDtZQUNoRCxFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUc7WUFDdkMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNoRCxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFO1lBQ3BELFVBQVUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUk7U0FDbEQsQ0FBQztRQUVqQixXQUFXLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWhHLE1BQU0sUUFBUSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUNyRixJQUFJLFFBQVEsRUFBRTtZQUNWLFdBQVcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQ25DO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQzttRkEvQlEsa0JBQWtCO3VFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZmLE1BQU07O1NBRVQsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBcG9sbG99IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtBcG9sbG9RdWVyeVJlc3VsdH0gZnJvbSAnQGFwb2xsby9jbGllbnQvY29yZSc7XG5pbXBvcnQge1JlY29yZFNhdmVHUUx9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC9ncmFwaHFsL2FwaS5yZWNvcmQuc2F2ZSc7XG5pbXBvcnQge1NhdmVkRmlsdGVyfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNhdmVkRmlsdGVyU2F2ZUdRTCBleHRlbmRzIFJlY29yZFNhdmVHUUwge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFwb2xsbzogQXBvbGxvKSB7XG4gICAgICAgIHN1cGVyKGFwb2xsbyk7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmUocmVjb3JkOiBSZWNvcmQpOiBPYnNlcnZhYmxlPFNhdmVkRmlsdGVyPiB7XG4gICAgICAgIHJldHVybiBzdXBlci5zYXZlKHJlY29yZCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcFRvUmVjb3JkKHJlc3BvbnNlOiBBcG9sbG9RdWVyeVJlc3VsdDxhbnk+KTogU2F2ZWRGaWx0ZXIge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEgfHwgIXJlc3BvbnNlLmRhdGEuc2F2ZVJlY29yZCB8fCAhcmVzcG9uc2UuZGF0YS5zYXZlUmVjb3JkLnJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzYXZlZEZpbHRlciA9IHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgICAgICAgaWQ6IHJlc3BvbnNlLmRhdGEuc2F2ZVJlY29yZC5yZWNvcmQuX2lkLFxuICAgICAgICAgICAgdHlwZTogcmVzcG9uc2UuZGF0YS5zYXZlUmVjb3JkLnJlY29yZC50eXBlIHx8ICcnLFxuICAgICAgICAgICAgbW9kdWxlOiByZXNwb25zZS5kYXRhLnNhdmVSZWNvcmQucmVjb3JkLm1vZHVsZSB8fCAnJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHJlc3BvbnNlLmRhdGEuc2F2ZVJlY29yZC5yZWNvcmQuYXR0cmlidXRlcyB8fCBudWxsLFxuICAgICAgICB9IGFzIFNhdmVkRmlsdGVyO1xuXG4gICAgICAgIHNhdmVkRmlsdGVyLmtleSA9IHNhdmVkRmlsdGVyLmlkIHx8IChzYXZlZEZpbHRlci5hdHRyaWJ1dGVzICYmIHNhdmVkRmlsdGVyLmF0dHJpYnV0ZXMuaWQpIHx8ICcnO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gKHNhdmVkRmlsdGVyLmF0dHJpYnV0ZXMgJiYgc2F2ZWRGaWx0ZXIuYXR0cmlidXRlcy5jb250ZW50cykgfHwgbnVsbDtcbiAgICAgICAgaWYgKGNvbnRlbnRzKSB7XG4gICAgICAgICAgICBzYXZlZEZpbHRlci5jcml0ZXJpYSA9IGNvbnRlbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNhdmVkRmlsdGVyO1xuICAgIH1cbn1cbiJdfQ==