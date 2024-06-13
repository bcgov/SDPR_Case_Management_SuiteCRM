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
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { SingleValueStatisticsStoreFactory } from '../../../../store/single-value-statistics/single-value-statistics.store.factory';
import { LanguageStore } from '../../../../store/language/language.store';
import { SubpanelStore } from './subpanel.store';
import { FilterListStoreFactory } from "../../../../store/saved-filters/filter-list.store.factory";
import { MetadataStore } from "../../../../store/metadata/metadata.store.service";
import { UserPreferenceStore } from "../../../../store/user-preference/user-preference.store";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record-list/record-list.store.factory";
import * as i2 from "../../../../store/language/language.store";
import * as i3 from "../../../../store/single-value-statistics/single-value-statistics.store.factory";
import * as i4 from "../../../../store/saved-filters/filter-list.store.factory";
import * as i5 from "../../../../store/metadata/metadata.store.service";
import * as i6 from "../../../../store/user-preference/user-preference.store";
class SubpanelStoreFactory {
    constructor(listStoreFactory, languageStore, statisticsStoreFactory, filterListStoreFactory, meta, preferences) {
        this.listStoreFactory = listStoreFactory;
        this.languageStore = languageStore;
        this.statisticsStoreFactory = statisticsStoreFactory;
        this.filterListStoreFactory = filterListStoreFactory;
        this.meta = meta;
        this.preferences = preferences;
    }
    create() {
        return new SubpanelStore(this.listStoreFactory, this.languageStore, this.statisticsStoreFactory, this.filterListStoreFactory, this.meta, this.preferences);
    }
    static { this.ɵfac = function SubpanelStoreFactory_Factory(t) { return new (t || SubpanelStoreFactory)(i0.ɵɵinject(i1.RecordListStoreFactory), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.SingleValueStatisticsStoreFactory), i0.ɵɵinject(i4.FilterListStoreFactory), i0.ɵɵinject(i5.MetadataStore), i0.ɵɵinject(i6.UserPreferenceStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelStoreFactory, factory: SubpanelStoreFactory.ɵfac, providedIn: 'root' }); }
}
export { SubpanelStoreFactory };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelStoreFactory, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RecordListStoreFactory }, { type: i2.LanguageStore }, { type: i3.SingleValueStatisticsStoreFactory }, { type: i4.FilterListStoreFactory }, { type: i5.MetadataStore }, { type: i6.UserPreferenceStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VicGFuZWwuc3RvcmUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3N1YnBhbmVsL3N0b3JlL3N1YnBhbmVsL3N1YnBhbmVsLnN0b3JlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDL0YsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0saUZBQWlGLENBQUM7QUFDbEksT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUNqRyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDaEYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seURBQXlELENBQUM7Ozs7Ozs7O0FBRTVGLE1BR2Esb0JBQW9CO0lBRTdCLFlBQ2MsZ0JBQXdDLEVBQ3hDLGFBQTRCLEVBQzVCLHNCQUF5RCxFQUN6RCxzQkFBOEMsRUFDOUMsSUFBbUIsRUFDbkIsV0FBZ0M7UUFMaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QjtRQUN4QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQW1DO1FBQ3pELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7SUFFOUMsQ0FBQztJQUVELE1BQU07UUFDRixPQUFPLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0osQ0FBQztxRkFkUSxvQkFBb0I7dUVBQXBCLG9CQUFvQixXQUFwQixvQkFBb0IsbUJBRmpCLE1BQU07O1NBRVQsb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FIaEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWNvcmRMaXN0U3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQtbGlzdC9yZWNvcmQtbGlzdC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7U2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zaW5nbGUtdmFsdWUtc3RhdGlzdGljcy9zaW5nbGUtdmFsdWUtc3RhdGlzdGljcy5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtTdWJwYW5lbFN0b3JlfSBmcm9tICcuL3N1YnBhbmVsLnN0b3JlJztcbmltcG9ydCB7RmlsdGVyTGlzdFN0b3JlRmFjdG9yeX0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL3NhdmVkLWZpbHRlcnMvZmlsdGVyLWxpc3Quc3RvcmUuZmFjdG9yeVwiO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTdWJwYW5lbFN0b3JlRmFjdG9yeSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxpc3RTdG9yZUZhY3Rvcnk6IFJlY29yZExpc3RTdG9yZUZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc3RhdGlzdGljc1N0b3JlRmFjdG9yeTogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgZmlsdGVyTGlzdFN0b3JlRmFjdG9yeTogRmlsdGVyTGlzdFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZVxuICAgICkge1xuICAgIH1cblxuICAgIGNyZWF0ZSgpOiBTdWJwYW5lbFN0b3JlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJwYW5lbFN0b3JlKHRoaXMubGlzdFN0b3JlRmFjdG9yeSwgdGhpcy5sYW5ndWFnZVN0b3JlLCB0aGlzLnN0YXRpc3RpY3NTdG9yZUZhY3RvcnksIHRoaXMuZmlsdGVyTGlzdFN0b3JlRmFjdG9yeSwgdGhpcy5tZXRhLCB0aGlzLnByZWZlcmVuY2VzKTtcbiAgICB9XG59XG4iXX0=