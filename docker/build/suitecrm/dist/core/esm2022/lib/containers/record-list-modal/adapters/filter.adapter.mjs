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
import { of } from 'rxjs';
import * as i0 from "@angular/core";
class ModalRecordFilterAdapter {
    getConfig(store) {
        return {
            klass: 'light-filter',
            panelMode: 'collapsible',
            isCollapsed: true,
            collapseOnSearch: true,
            savedFilterEdit: false,
            displayHeader: true,
            module: store.recordList.getModule(),
            filter$: store.recordList.criteria$.pipe(map(criteria => {
                return {
                    key: 'default',
                    criteria
                };
            })),
            savedFilters$: of([]),
            searchFields$: store.searchMetadata$.pipe(map((searchMeta) => {
                if (!searchMeta) {
                    return {};
                }
                let type = 'advanced';
                if (!searchMeta.layout.advanced) {
                    type = 'basic';
                }
                return searchMeta.layout[type];
            })),
            listFields: [],
            onClose: () => {
            },
            onSearch: () => {
            },
            updateFilter: (filter, reload = true) => {
                store.recordList.updateSearchCriteria(filter.criteria, reload);
            },
            resetFilter: (reload) => {
                store.recordList.resetSearchCriteria(reload);
            },
            addSavedFilter: (filter) => {
            },
            removeSavedFilter: (filter) => {
            },
            setOpenFilter: (filter) => {
            },
        };
    }
    static { this.ɵfac = function ModalRecordFilterAdapter_Factory(t) { return new (t || ModalRecordFilterAdapter)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModalRecordFilterAdapter, factory: ModalRecordFilterAdapter.ɵfac }); }
}
export { ModalRecordFilterAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalRecordFilterAdapter, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtbGlzdC1tb2RhbC9hZGFwdGVycy9maWx0ZXIuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFLbkMsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFFeEIsTUFDYSx3QkFBd0I7SUFFakMsU0FBUyxDQUFDLEtBQTJCO1FBQ2pDLE9BQU87WUFDSCxLQUFLLEVBQUUsY0FBYztZQUNyQixTQUFTLEVBQUUsYUFBYTtZQUN4QixXQUFXLEVBQUUsSUFBSTtZQUNqQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUNwQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNwQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ1gsT0FBTztvQkFDSCxHQUFHLEVBQUUsU0FBUztvQkFDZCxRQUFRO2lCQUNJLENBQUE7WUFDcEIsQ0FBQyxDQUFDLENBQ0w7WUFDRCxhQUFhLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNyQixhQUFhLEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQ3JDLEdBQUcsQ0FBQyxDQUFDLFVBQXNCLEVBQUUsRUFBRTtnQkFFM0IsSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDYixPQUFPLEVBQXdCLENBQUM7aUJBQ25DO2dCQUVELElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO29CQUM3QixJQUFJLEdBQUcsT0FBTyxDQUFDO2lCQUNsQjtnQkFFRCxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQ0w7WUFDRCxVQUFVLEVBQUUsRUFBRTtZQUVkLE9BQU8sRUFBRSxHQUFTLEVBQUU7WUFDcEIsQ0FBQztZQUVELFFBQVEsRUFBRSxHQUFTLEVBQUU7WUFDckIsQ0FBQztZQUVELFlBQVksRUFBRSxDQUFDLE1BQW1CLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBUSxFQUFFO2dCQUN2RCxLQUFLLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbkUsQ0FBQztZQUVELFdBQVcsRUFBRSxDQUFDLE1BQWdCLEVBQVEsRUFBRTtnQkFDcEMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBRUQsY0FBYyxFQUFFLENBQUMsTUFBbUIsRUFBUSxFQUFFO1lBQzlDLENBQUM7WUFFRCxpQkFBaUIsRUFBRSxDQUFDLE1BQW1CLEVBQVEsRUFBRTtZQUNqRCxDQUFDO1lBRUQsYUFBYSxFQUFFLENBQUMsTUFBbUIsRUFBUSxFQUFFO1lBQzdDLENBQUM7U0FDWSxDQUFDO0lBQ3RCLENBQUM7eUZBNURRLHdCQUF3Qjt1RUFBeEIsd0JBQXdCLFdBQXhCLHdCQUF3Qjs7U0FBeEIsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FEcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2VhcmNoTWV0YSwgU2VhcmNoTWV0YUZpZWxkTWFwfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UmVjb3JkTGlzdE1vZGFsU3RvcmV9IGZyb20gJy4uL3N0b3JlL3JlY29yZC1saXN0LW1vZGFsL3JlY29yZC1saXN0LW1vZGFsLnN0b3JlJztcbmltcG9ydCB7UmVjb3JkTGlzdE1vZGFsRmlsdGVyQWRhcHRlckludGVyZmFjZX0gZnJvbSAnLi9hZGFwdGVyLm1vZGVsJztcbmltcG9ydCB7RmlsdGVyQ29uZmlnfSBmcm9tICcuLi8uLi9saXN0LWZpbHRlci9jb21wb25lbnRzL2xpc3QtZmlsdGVyL2xpc3QtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXJ9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3NhdmVkLWZpbHRlcnMvc2F2ZWQtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7b2Z9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9kYWxSZWNvcmRGaWx0ZXJBZGFwdGVyIGltcGxlbWVudHMgUmVjb3JkTGlzdE1vZGFsRmlsdGVyQWRhcHRlckludGVyZmFjZSB7XG5cbiAgICBnZXRDb25maWcoc3RvcmU6IFJlY29yZExpc3RNb2RhbFN0b3JlKTogRmlsdGVyQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtsYXNzOiAnbGlnaHQtZmlsdGVyJyxcbiAgICAgICAgICAgIHBhbmVsTW9kZTogJ2NvbGxhcHNpYmxlJyxcbiAgICAgICAgICAgIGlzQ29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgICAgY29sbGFwc2VPblNlYXJjaDogdHJ1ZSxcbiAgICAgICAgICAgIHNhdmVkRmlsdGVyRWRpdDogZmFsc2UsXG4gICAgICAgICAgICBkaXNwbGF5SGVhZGVyOiB0cnVlLFxuICAgICAgICAgICAgbW9kdWxlOiBzdG9yZS5yZWNvcmRMaXN0LmdldE1vZHVsZSgpLFxuICAgICAgICAgICAgZmlsdGVyJDogc3RvcmUucmVjb3JkTGlzdC5jcml0ZXJpYSQucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoY3JpdGVyaWEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjcml0ZXJpYVxuICAgICAgICAgICAgICAgICAgICB9IGFzIFNhdmVkRmlsdGVyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzYXZlZEZpbHRlcnMkOiBvZihbXSksXG4gICAgICAgICAgICBzZWFyY2hGaWVsZHMkOiBzdG9yZS5zZWFyY2hNZXRhZGF0YSQucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKHNlYXJjaE1ldGE6IFNlYXJjaE1ldGEpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlYXJjaE1ldGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7fSBhcyBTZWFyY2hNZXRhRmllbGRNYXA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9ICdhZHZhbmNlZCc7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2VhcmNoTWV0YS5sYXlvdXQuYWR2YW5jZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnYmFzaWMnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlYXJjaE1ldGEubGF5b3V0W3R5cGVdO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbGlzdEZpZWxkczogW10sXG5cbiAgICAgICAgICAgIG9uQ2xvc2U6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uU2VhcmNoOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB1cGRhdGVGaWx0ZXI6IChmaWx0ZXI6IFNhdmVkRmlsdGVyLCByZWxvYWQgPSB0cnVlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgc3RvcmUucmVjb3JkTGlzdC51cGRhdGVTZWFyY2hDcml0ZXJpYShmaWx0ZXIuY3JpdGVyaWEsIHJlbG9hZCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXNldEZpbHRlcjogKHJlbG9hZD86IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBzdG9yZS5yZWNvcmRMaXN0LnJlc2V0U2VhcmNoQ3JpdGVyaWEocmVsb2FkKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGFkZFNhdmVkRmlsdGVyOiAoZmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVtb3ZlU2F2ZWRGaWx0ZXI6IChmaWx0ZXI6IFNhdmVkRmlsdGVyKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZXRPcGVuRmlsdGVyOiAoZmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSBhcyBGaWx0ZXJDb25maWc7XG4gICAgfVxufVxuIl19