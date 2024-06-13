/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { SubpanelStore } from "../store/subpanel/subpanel.store";
import * as i0 from "@angular/core";
import * as i1 from "../store/subpanel/subpanel.store";
class SubpanelFilterAdapter {
    constructor(store) {
        this.store = store;
    }
    getConfig() {
        return {
            panelMode: 'collapsible',
            collapseOnSearch: true,
            savedFilterEdit: false,
            module: this.store.recordList.getModule(),
            displayHeader: false,
            filter$: this.store.recordList.openFilter$,
            savedFilters$: this.store.filterList.records$,
            searchFields$: this.store.searchMetadata$.pipe(map((searchMeta) => {
                if (this.store.metadata.searchdefs) {
                    return this.store.metadata.searchdefs;
                }
                if (!searchMeta) {
                    return {};
                }
                let type = 'advanced';
                if (!searchMeta?.layout?.advanced) {
                    type = 'basic';
                }
                return searchMeta?.layout[type];
            })),
            listFields: [],
            onClose: () => {
            },
            onSearch: () => {
                this.store.searchFilter();
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
            },
            removeSavedFilter: (filter) => {
            },
            setOpenFilter: (filter) => {
            },
        };
    }
    static { this.ɵfac = function SubpanelFilterAdapter_Factory(t) { return new (t || SubpanelFilterAdapter)(i0.ɵɵinject(i1.SubpanelStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelFilterAdapter, factory: SubpanelFilterAdapter.ɵfac }); }
}
export { SubpanelFilterAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelFilterAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.SubpanelStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zdWJwYW5lbC9hZGFwdGVycy9maWx0ZXIuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtDQUFrQyxDQUFDOzs7QUFFL0QsTUFDYSxxQkFBcUI7SUFFOUIsWUFBc0IsS0FBb0I7UUFBcEIsVUFBSyxHQUFMLEtBQUssQ0FBZTtJQUMxQyxDQUFDO0lBRUQsU0FBUztRQUNMLE9BQU87WUFDSCxTQUFTLEVBQUUsYUFBYTtZQUN4QixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDekMsYUFBYSxFQUFFLEtBQUs7WUFDcEIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVc7WUFDMUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVE7WUFDN0MsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FDMUMsR0FBRyxDQUFDLENBQUMsVUFBc0IsRUFBRSxFQUFFO2dCQUUzQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBQztvQkFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUE7aUJBQ3hDO2dCQUVELElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2IsT0FBTyxFQUF3QixDQUFDO2lCQUNuQztnQkFFRCxJQUFJLElBQUksR0FBRyxVQUFVLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtvQkFDL0IsSUFBSSxHQUFHLE9BQU8sQ0FBQztpQkFDbEI7Z0JBRUQsT0FBTyxVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUNMO1lBQ0QsVUFBVSxFQUFFLEVBQUU7WUFFZCxPQUFPLEVBQUUsR0FBUyxFQUFFO1lBQ3BCLENBQUM7WUFFRCxRQUFRLEVBQUUsR0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzlCLENBQUM7WUFFRCxZQUFZLEVBQUUsQ0FBQyxNQUFtQixFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQVEsRUFBRTtnQkFDdkQsTUFBTSxPQUFPLEdBQUcsRUFBb0IsQ0FBQztnQkFDckMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBRUQsV0FBVyxFQUFFLENBQUMsTUFBZ0IsRUFBUSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBRUQsY0FBYyxFQUFFLENBQUMsTUFBbUIsRUFBUSxFQUFFO1lBQzlDLENBQUM7WUFFRCxpQkFBaUIsRUFBRSxDQUFDLE1BQW1CLEVBQVEsRUFBRTtZQUNqRCxDQUFDO1lBRUQsYUFBYSxFQUFFLENBQUMsTUFBbUIsRUFBUSxFQUFFO1lBQzdDLENBQUM7U0FDWSxDQUFDO0lBQ3RCLENBQUM7c0ZBN0RRLHFCQUFxQjt1RUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjs7U0FBckIscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtGaWx0ZXJDb25maWd9IGZyb20gXCIuLi8uLi9saXN0LWZpbHRlci9jb21wb25lbnRzL2xpc3QtZmlsdGVyL2xpc3QtZmlsdGVyLm1vZGVsXCI7XG5pbXBvcnQge21hcH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQge1NhdmVkRmlsdGVyLCBTYXZlZEZpbHRlck1hcH0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3NhdmVkLWZpbHRlcnMvc2F2ZWQtZmlsdGVyLm1vZGVsXCI7XG5pbXBvcnQge1NlYXJjaE1ldGEsIFNlYXJjaE1ldGFGaWVsZE1hcH0gZnJvbSBcImNvbW1vblwiO1xuaW1wb3J0IHtTdWJwYW5lbFN0b3JlfSBmcm9tIFwiLi4vc3RvcmUvc3VicGFuZWwvc3VicGFuZWwuc3RvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1YnBhbmVsRmlsdGVyQWRhcHRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN1YnBhbmVsU3RvcmUpIHtcbiAgICB9XG5cbiAgICBnZXRDb25maWcoKTogRmlsdGVyQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhbmVsTW9kZTogJ2NvbGxhcHNpYmxlJyxcbiAgICAgICAgICAgIGNvbGxhcHNlT25TZWFyY2g6IHRydWUsXG4gICAgICAgICAgICBzYXZlZEZpbHRlckVkaXQ6IGZhbHNlLFxuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLnN0b3JlLnJlY29yZExpc3QuZ2V0TW9kdWxlKCksXG4gICAgICAgICAgICBkaXNwbGF5SGVhZGVyOiBmYWxzZSxcbiAgICAgICAgICAgIGZpbHRlciQ6IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5vcGVuRmlsdGVyJCxcbiAgICAgICAgICAgIHNhdmVkRmlsdGVycyQ6IHRoaXMuc3RvcmUuZmlsdGVyTGlzdC5yZWNvcmRzJCxcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkcyQ6IHRoaXMuc3RvcmUuc2VhcmNoTWV0YWRhdGEkLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKChzZWFyY2hNZXRhOiBTZWFyY2hNZXRhKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmUubWV0YWRhdGEuc2VhcmNoZGVmcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5tZXRhZGF0YS5zZWFyY2hkZWZzXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlYXJjaE1ldGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7fSBhcyBTZWFyY2hNZXRhRmllbGRNYXA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9ICdhZHZhbmNlZCc7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2VhcmNoTWV0YT8ubGF5b3V0Py5hZHZhbmNlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdiYXNpYyc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VhcmNoTWV0YT8ubGF5b3V0W3R5cGVdO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbGlzdEZpZWxkczogW10sXG5cbiAgICAgICAgICAgIG9uQ2xvc2U6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uU2VhcmNoOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zZWFyY2hGaWx0ZXIoKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHVwZGF0ZUZpbHRlcjogKGZpbHRlcjogU2F2ZWRGaWx0ZXIsIHJlbG9hZCA9IHRydWUpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJzID0ge30gYXMgU2F2ZWRGaWx0ZXJNYXA7XG4gICAgICAgICAgICAgICAgZmlsdGVyc1tmaWx0ZXIua2V5XSA9IGZpbHRlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNldEZpbHRlcnMoZmlsdGVycywgcmVsb2FkKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlc2V0RmlsdGVyOiAocmVsb2FkPzogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucmVzZXRGaWx0ZXJzKHJlbG9hZCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhZGRTYXZlZEZpbHRlcjogKGZpbHRlcjogU2F2ZWRGaWx0ZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlbW92ZVNhdmVkRmlsdGVyOiAoZmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2V0T3BlbkZpbHRlcjogKGZpbHRlcjogU2F2ZWRGaWx0ZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0gYXMgRmlsdGVyQ29uZmlnO1xuICAgIH1cbn1cbiJdfQ==