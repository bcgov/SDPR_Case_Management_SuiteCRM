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
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SubpanelStore } from '../store/subpanel/subpanel.store';
import { SubpanelLineActionsAdapterFactory } from './line-actions.adapter.factory';
import { UserPreferenceStore } from '../../../store/user-preference/user-preference.store';
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
import * as i1 from "../store/subpanel/subpanel.store";
import * as i2 from "./line-actions.adapter.factory";
import * as i3 from "../../../store/user-preference/user-preference.store";
import * as i4 from "../../../store/system-config/system-config.store";
class SubpanelTableAdapter {
    constructor(store, lineActionsAdapterFactory, preferences, systemConfigs) {
        this.store = store;
        this.lineActionsAdapterFactory = lineActionsAdapterFactory;
        this.preferences = preferences;
        this.systemConfigs = systemConfigs;
    }
    getTable() {
        return {
            showHeader: false,
            showFooter: true,
            module: this.store.metadata.headerModule,
            columns: this.getColumns(),
            lineActions: this.getLineActions(),
            sort$: this.store.recordList.sort$,
            maxColumns$: of(5),
            loading$: this.store.recordList.loading$,
            dataSource: this.store.recordList,
            pagination: this.store.recordList,
            toggleRecordSelection: (id) => {
                this.store.recordList.toggleSelection(id);
            },
            updateSorting: (orderBy, sortOrder) => {
                this.store.recordList.updateSorting(orderBy, sortOrder);
                const parentModule = this.store.parentModule;
                const module = this.store.recordList.getModule();
                const sort = { orderBy, sortOrder };
                this.preferences.setUi(parentModule, module + '-subpanel-sort', sort);
            },
            maxListHeight: this.preferences.getUserPreference('subpanel_max_height') ?? this.systemConfigs.getConfigValue('subpanel_max_height'),
            paginationType: this.preferences.getUserPreference('subpanel_pagination_type') ?? this.systemConfigs.getConfigValue('subpanel_pagination_type'),
            loadMore: () => {
                const jump = this.preferences.getUserPreference('list_max_entries_per_subpanel') ?? this.systemConfigs.getConfigValue('list_max_entries_per_subpanel');
                const pagination = this.store.recordList.getPagination();
                const currentPageSize = pagination.pageSize || 0;
                const newPageSize = Number(currentPageSize) + Number(jump);
                this.store.recordList.setPageSize(newPageSize);
                this.store.recordList.updatePagination(pagination.current);
            },
            allLoaded: () => {
                const pagination = this.store.recordList.getPagination();
                if (!pagination) {
                    return false;
                }
                if (Number(pagination.pageLast) >= Number(pagination.total)) {
                    return true;
                }
                return Number(pagination.pageSize) >= Number(pagination.total);
            }
        };
    }
    getColumns() {
        return this.store.metadata$.pipe(map(metadata => metadata.columns));
    }
    getLineActions() {
        return this.lineActionsAdapterFactory.create(this.store);
    }
    static { this.ɵfac = function SubpanelTableAdapter_Factory(t) { return new (t || SubpanelTableAdapter)(i0.ɵɵinject(i1.SubpanelStore), i0.ɵɵinject(i2.SubpanelLineActionsAdapterFactory), i0.ɵɵinject(i3.UserPreferenceStore), i0.ɵɵinject(i4.SystemConfigStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelTableAdapter, factory: SubpanelTableAdapter.ɵfac }); }
}
export { SubpanelTableAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelTableAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.SubpanelStore }, { type: i2.SubpanelLineActionsAdapterFactory }, { type: i3.UserPreferenceStore }, { type: i4.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3N1YnBhbmVsL2FkYXB0ZXJzL3RhYmxlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBYSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQy9ELE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtEQUFrRCxDQUFDOzs7Ozs7QUFFbkYsTUFDYSxvQkFBb0I7SUFFN0IsWUFDYyxLQUFvQixFQUNwQix5QkFBNEQsRUFDNUQsV0FBZ0MsRUFDaEMsYUFBZ0M7UUFIaEMsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUNwQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQW1DO1FBQzVELGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7SUFFOUMsQ0FBQztJQUVELFFBQVE7UUFDSixPQUFPO1lBQ0gsVUFBVSxFQUFFLEtBQUs7WUFDakIsVUFBVSxFQUFFLElBQUk7WUFFaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVk7WUFFeEMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDMUIsV0FBVyxFQUFFLElBQUksQ0FBQyxjQUFjLEVB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QUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRVMsY0FBYztRQUNwQixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7cUZBOUVRLG9CQUFvQjt1RUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQjs7U0FBcEIsb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FEaEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb25EYXRhU291cmNlLCBDb2x1bW5EZWZpbml0aW9uLCBTb3J0RGlyZWN0aW9uLCBTb3J0aW5nU2VsZWN0aW9ufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7VGFibGVDb25maWd9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kZWwnO1xuaW1wb3J0IHtTdWJwYW5lbFN0b3JlfSBmcm9tICcuLi9zdG9yZS9zdWJwYW5lbC9zdWJwYW5lbC5zdG9yZSc7XG5pbXBvcnQge1N1YnBhbmVsTGluZUFjdGlvbnNBZGFwdGVyRmFjdG9yeX0gZnJvbSAnLi9saW5lLWFjdGlvbnMuYWRhcHRlci5mYWN0b3J5JztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdWJwYW5lbFRhYmxlQWRhcHRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlOiBTdWJwYW5lbFN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGluZUFjdGlvbnNBZGFwdGVyRmFjdG9yeTogU3VicGFuZWxMaW5lQWN0aW9uc0FkYXB0ZXJGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdzOiBTeXN0ZW1Db25maWdTdG9yZVxuICAgICkge1xuICAgIH1cblxuICAgIGdldFRhYmxlKCk6IFRhYmxlQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dIZWFkZXI6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd0Zvb3RlcjogdHJ1ZSxcblxuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLnN0b3JlLm1ldGFkYXRhLmhlYWRlck1vZHVsZSxcblxuICAgICAgICAgICAgY29sdW1uczogdGhpcy5nZXRDb2x1bW5zKCksXG4gICAgICAgICAgICBsaW5lQWN0aW9uczogdGhpcy5nZXRMaW5lQWN0aW9ucygpLFxuICAgICAgICAgICAgc29ydCQ6IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5zb3J0JCxcbiAgICAgICAgICAgIG1heENvbHVtbnMkOiBvZig1KSxcbiAgICAgICAgICAgIGxvYWRpbmckOiB0aGlzLnN0b3JlLnJlY29yZExpc3QubG9hZGluZyQsXG5cbiAgICAgICAgICAgIGRhdGFTb3VyY2U6IHRoaXMuc3RvcmUucmVjb3JkTGlzdCxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHRoaXMuc3RvcmUucmVjb3JkTGlzdCxcblxuICAgICAgICAgICAgdG9nZ2xlUmVjb3JkU2VsZWN0aW9uOiAoaWQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC50b2dnbGVTZWxlY3Rpb24oaWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdXBkYXRlU29ydGluZzogKG9yZGVyQnk6IHN0cmluZywgc29ydE9yZGVyOiBTb3J0RGlyZWN0aW9uKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5yZWNvcmRMaXN0LnVwZGF0ZVNvcnRpbmcob3JkZXJCeSwgc29ydE9yZGVyKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE1vZHVsZSA9IHRoaXMuc3RvcmUucGFyZW50TW9kdWxlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5nZXRNb2R1bGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3J0ID0ge29yZGVyQnksIHNvcnRPcmRlcn0gYXMgU29ydGluZ1NlbGVjdGlvbjtcblxuICAgICAgICAgICAgICAgIHRoaXMucHJlZmVyZW5jZXMuc2V0VWkocGFyZW50TW9kdWxlLCBtb2R1bGUgKyAnLXN1YnBhbmVsLXNvcnQnLCBzb3J0KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1heExpc3RIZWlnaHQ6IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ3N1YnBhbmVsX21heF9oZWlnaHQnKSA/PyB0aGlzLnN5c3RlbUNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ3N1YnBhbmVsX21heF9oZWlnaHQnKSxcblxuICAgICAgICAgICAgcGFnaW5hdGlvblR5cGU6IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ3N1YnBhbmVsX3BhZ2luYXRpb25fdHlwZScpID8/IHRoaXMuc3lzdGVtQ29uZmlncy5nZXRDb25maWdWYWx1ZSgnc3VicGFuZWxfcGFnaW5hdGlvbl90eXBlJyksXG5cbiAgICAgICAgICAgIGxvYWRNb3JlOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QganVtcCA9IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ2xpc3RfbWF4X2VudHJpZXNfcGVyX3N1YnBhbmVsJykgPz8gdGhpcy5zeXN0ZW1Db25maWdzLmdldENvbmZpZ1ZhbHVlKCdsaXN0X21heF9lbnRyaWVzX3Blcl9zdWJwYW5lbCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSB0aGlzLnN0b3JlLnJlY29yZExpc3QuZ2V0UGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlU2l6ZSA9IHBhZ2luYXRpb24ucGFnZVNpemUgfHwgMDtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQYWdlU2l6ZSA9IE51bWJlcihjdXJyZW50UGFnZVNpemUpICsgTnVtYmVyKGp1bXApO1xuXG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnJlY29yZExpc3Quc2V0UGFnZVNpemUobmV3UGFnZVNpemUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC51cGRhdGVQYWdpbmF0aW9uKHBhZ2luYXRpb24uY3VycmVudClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGFsbExvYWRlZDogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSB0aGlzLnN0b3JlLnJlY29yZExpc3QuZ2V0UGFnaW5hdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFwYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHBhZ2luYXRpb24ucGFnZUxhc3QpID49IE51bWJlcihwYWdpbmF0aW9uLnRvdGFsKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKHBhZ2luYXRpb24ucGFnZVNpemUpID49IE51bWJlcihwYWdpbmF0aW9uLnRvdGFsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGFzIFRhYmxlQ29uZmlnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCk6IE9ic2VydmFibGU8Q29sdW1uRGVmaW5pdGlvbltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLm1ldGFkYXRhJC5waXBlKG1hcChtZXRhZGF0YSA9PiBtZXRhZGF0YS5jb2x1bW5zKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldExpbmVBY3Rpb25zKCk6IEFjdGlvbkRhdGFTb3VyY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5saW5lQWN0aW9uc0FkYXB0ZXJGYWN0b3J5LmNyZWF0ZSh0aGlzLnN0b3JlKTtcbiAgICB9XG59XG4iXX0=