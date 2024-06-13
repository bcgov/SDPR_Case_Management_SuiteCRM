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
import { map } from 'rxjs/operators';
import { ListViewStore } from '../store/list-view/list-view.store';
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
class FilterAdapter {
    constructor(store) {
        this.store = store;
    }
    getConfig() {
        return {
            savedFilterEdit: true,
            displayHeader: true,
            module: this.store.getModuleName(),
            filter$: this.store.openFilter$,
            savedFilters$: this.store.filterList.records$,
            searchFields$: this.store.metadata$.pipe(map((meta) => {
                if (!meta || !meta.search) {
                    return {};
                }
                const searchMeta = meta.search;
                let type = 'advanced';
                if (!searchMeta.layout.advanced) {
                    type = 'basic';
                }
                return searchMeta.layout[type];
            })),
            listFields: this.store.metadata.listView.fields,
            onClose: () => {
                this.store.showFilters = false;
            },
            onSearch: () => {
                this.store.showFilters = false;
            },
            updateFilter: (filter, reload = true) => {
                const filters = {};
                filters[filter.key] = filter;
                this.store.setFilters(filters, reload);
            },
            resetFilter: (reload) => {
                this.store.resetFilters(reload);
            },
            addSavedFilter: (filter) => {
                this.store.addSavedFilter(filter);
            },
            removeSavedFilter: (filter) => {
                this.store.removeSavedFilter(filter);
            },
            setOpenFilter: (filter) => {
                this.store.setOpenFilter(filter);
            },
        };
    }
    static { this.ɵfac = function FilterAdapter_Factory(t) { return new (t || FilterAdapter)(i0.ɵɵinject(i1.ListViewStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilterAdapter, factory: FilterAdapter.ɵfac }); }
}
export { FilterAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.ListViewStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9hZGFwdGVycy9maWx0ZXIuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9DQUFvQyxDQUFDOzs7QUFLakUsTUFDYSxhQUFhO0lBRXRCLFlBQXNCLEtBQW9CO1FBQXBCLFVBQUssR0FBTCxLQUFLLENBQWU7SUFDMUMsQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPO1lBQ0gsZUFBZSxFQUFFLElBQUk7WUFDckIsYUFBYSxFQUFFLElBQUk7WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQ2xDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7WUFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVE7WUFDN0MsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDcEMsR0FBRyxDQUFDLENBQUMsSUFBYyxFQUFFLEVBQUU7Z0JBRW5CLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUN2QixPQUFPLEVBQXdCLENBQUM7aUJBQ25DO2dCQUVELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBRS9CLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO29CQUM3QixJQUFJLEdBQUcsT0FBTyxDQUFDO2lCQUNsQjtnQkFFRCxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQ0w7WUFDRCxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU07WUFFL0MsT0FBTyxFQUFFLEdBQVMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ25DLENBQUM7WUFFRCxRQUFRLEVBQUUsR0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDbkMsQ0FBQztZQUVELFlBQVksRUFBRSxDQUFDLE1BQW1CLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBUSxFQUFFO2dCQUV2RCxNQUFNLE9BQU8sR0FBRyxFQUFvQixDQUFDO2dCQUNyQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztnQkFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFFRCxXQUFXLEVBQUUsQ0FBQyxNQUFnQixFQUFRLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFFRCxjQUFjLEVBQUUsQ0FBQyxNQUFtQixFQUFRLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFFRCxpQkFBaUIsRUFBRSxDQUFDLE1BQW1CLEVBQVEsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxDQUFDO1lBRUQsYUFBYSxFQUFFLENBQUMsTUFBbUIsRUFBUSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxDQUFDO1NBRVksQ0FBQztJQUN0QixDQUFDOzhFQS9EUSxhQUFhO3VFQUFiLGFBQWEsV0FBYixhQUFhOztTQUFiLGFBQWE7dUZBQWIsYUFBYTtjQUR6QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZWFyY2hNZXRhRmllbGRNYXB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtMaXN0Vmlld1N0b3JlfSBmcm9tICcuLi9zdG9yZS9saXN0LXZpZXcvbGlzdC12aWV3LnN0b3JlJztcbmltcG9ydCB7TWV0YWRhdGF9IGZyb20gJy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWx0ZXJDb25maWd9IGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvbGlzdC1maWx0ZXIvY29tcG9uZW50cy9saXN0LWZpbHRlci9saXN0LWZpbHRlci5tb2RlbCc7XG5pbXBvcnQge1NhdmVkRmlsdGVyLCBTYXZlZEZpbHRlck1hcH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9zYXZlZC1maWx0ZXIubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlsdGVyQWRhcHRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IExpc3RWaWV3U3RvcmUpIHtcbiAgICB9XG5cbiAgICBnZXRDb25maWcoKTogRmlsdGVyQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNhdmVkRmlsdGVyRWRpdDogdHJ1ZSxcbiAgICAgICAgICAgIGRpc3BsYXlIZWFkZXI6IHRydWUsXG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMuc3RvcmUuZ2V0TW9kdWxlTmFtZSgpLFxuICAgICAgICAgICAgZmlsdGVyJDogdGhpcy5zdG9yZS5vcGVuRmlsdGVyJCxcbiAgICAgICAgICAgIHNhdmVkRmlsdGVycyQ6IHRoaXMuc3RvcmUuZmlsdGVyTGlzdC5yZWNvcmRzJCxcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkcyQ6IHRoaXMuc3RvcmUubWV0YWRhdGEkLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKChtZXRhOiBNZXRhZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghbWV0YSB8fCAhbWV0YS5zZWFyY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7fSBhcyBTZWFyY2hNZXRhRmllbGRNYXA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hNZXRhID0gbWV0YS5zZWFyY2g7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSAnYWR2YW5jZWQnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlYXJjaE1ldGEubGF5b3V0LmFkdmFuY2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2Jhc2ljJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hNZXRhLmxheW91dFt0eXBlXTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGxpc3RGaWVsZHM6IHRoaXMuc3RvcmUubWV0YWRhdGEubGlzdFZpZXcuZmllbGRzLFxuXG4gICAgICAgICAgICBvbkNsb3NlOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zaG93RmlsdGVycyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25TZWFyY2g6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNob3dGaWx0ZXJzID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB1cGRhdGVGaWx0ZXI6IChmaWx0ZXI6IFNhdmVkRmlsdGVyLCByZWxvYWQgPSB0cnVlKTogdm9pZCA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJzID0ge30gYXMgU2F2ZWRGaWx0ZXJNYXA7XG4gICAgICAgICAgICAgICAgZmlsdGVyc1tmaWx0ZXIua2V5XSA9IGZpbHRlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNldEZpbHRlcnMoZmlsdGVycywgcmVsb2FkKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlc2V0RmlsdGVyOiAocmVsb2FkPzogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucmVzZXRGaWx0ZXJzKHJlbG9hZCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhZGRTYXZlZEZpbHRlcjogKGZpbHRlcjogU2F2ZWRGaWx0ZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmFkZFNhdmVkRmlsdGVyKGZpbHRlcik7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZW1vdmVTYXZlZEZpbHRlcjogKGZpbHRlcjogU2F2ZWRGaWx0ZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnJlbW92ZVNhdmVkRmlsdGVyKGZpbHRlcik7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZXRPcGVuRmlsdGVyOiAoZmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc2V0T3BlbkZpbHRlcihmaWx0ZXIpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICB9IGFzIEZpbHRlckNvbmZpZztcbiAgICB9XG59XG4iXX0=