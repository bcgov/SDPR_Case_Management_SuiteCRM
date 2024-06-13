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
import { AuthService } from '../../services/auth/auth.service';
import { RecordListStore } from '../record-list/record-list.store';
import { ModuleNameMapper } from '../../services/navigation/module-name-mapper/module-name-mapper.service';
import { SystemConfigStore } from '../system-config/system-config.store';
import { UserPreferenceStore } from '../user-preference/user-preference.store';
import { LanguageStore } from '../language/language.store';
import { MessageService } from '../../services/message/message.service';
import { FiltersListGQL } from './graphql/api.list.get';
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import * as i0 from "@angular/core";
import * as i1 from "./graphql/api.list.get";
import * as i2 from "../system-config/system-config.store";
import * as i3 from "../user-preference/user-preference.store";
import * as i4 from "../language/language.store";
import * as i5 from "../../services/message/message.service";
import * as i6 from "../../services/auth/auth.service";
import * as i7 from "../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i8 from "../../services/local-storage/local-storage.service";
class FilterListStore extends RecordListStore {
    /**
     * Constructor
     * @param listGQL
     * @param configs
     * @param preferences
     * @param language
     * @param message
     * @param auth
     * @param moduleNameMapper
     * @param localStorageService
     */
    constructor(listGQL, configs, preferences, language, message, auth, moduleNameMapper, localStorageService) {
        super(listGQL, configs, preferences, language, message, localStorageService);
        this.listGQL = listGQL;
        this.configs = configs;
        this.preferences = preferences;
        this.language = language;
        this.message = message;
        this.auth = auth;
        this.moduleNameMapper = moduleNameMapper;
        this.localStorageService = localStorageService;
        this.moduleName = 'saved-search';
        this.filterFields = {
            module: 'search_module',
            user: 'assigned_user_id',
        };
    }
    /**
     * Initialize store
     * @param module
     */
    init(module) {
        const result$ = super.init(this.moduleName, false);
        this.initCriteria(module);
        return result$;
    }
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordList>
     */
    load(useCache = true) {
        return super.load(useCache);
    }
    /**
     * Get current list of saved filters
     */
    getFilters() {
        return this.records;
    }
    /**
     * Add new filter to list
     * @param filter
     */
    addFilter(filter) {
        let isNew = true;
        const filters = this.records;
        const newList = [];
        filters.forEach(record => {
            if (record.id === filter.id) {
                newList.push(filter);
                isNew = false;
                return;
            }
            newList.push(record);
        });
        if (isNew) {
            newList.push(filter);
        }
        this.updateState({
            ...this.internalState,
            records: newList,
        });
    }
    /**
     * Remove existing filter
     * @param filter
     */
    removeFilter(filter) {
        if (!filter || !filter.id) {
            return;
        }
        const filters = this.records;
        const newList = [];
        filters.forEach(record => {
            if (record.id === filter.id) {
                return;
            }
            newList.push(record);
        });
        this.updateState({
            ...this.internalState,
            records: newList,
        });
    }
    /**
     * Initialize criteria
     * @param module
     */
    initCriteria(module) {
        const criteria = this.criteria;
        criteria.filters[this.filterFields.module] = {
            field: this.filterFields.module,
            operator: '=',
            values: [this.moduleNameMapper.toLegacy(module)]
        };
        criteria.filters[this.filterFields.user] = {
            field: this.filterFields.user,
            operator: '=',
            values: [this.auth.getCurrentUser().id]
        };
        this.updateSearchCriteria(criteria, false);
    }
    static { this.ɵfac = function FilterListStore_Factory(t) { return new (t || FilterListStore)(i0.ɵɵinject(i1.FiltersListGQL), i0.ɵɵinject(i2.SystemConfigStore), i0.ɵɵinject(i3.UserPreferenceStore), i0.ɵɵinject(i4.LanguageStore), i0.ɵɵinject(i5.MessageService), i0.ɵɵinject(i6.AuthService), i0.ɵɵinject(i7.ModuleNameMapper), i0.ɵɵinject(i8.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilterListStore, factory: FilterListStore.ɵfac }); }
}
export { FilterListStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterListStore, [{
        type: Injectable
    }], function () { return [{ type: i1.FiltersListGQL }, { type: i2.SystemConfigStore }, { type: i3.UserPreferenceStore }, { type: i4.LanguageStore }, { type: i5.MessageService }, { type: i6.AuthService }, { type: i7.ModuleNameMapper }, { type: i8.LocalStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWxpc3Quc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvc2F2ZWQtZmlsdGVycy9maWx0ZXItbGlzdC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDN0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBRWpFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlFQUF5RSxDQUFDO0FBQ3pHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7Ozs7O0FBRXZGLE1BQ2EsZUFBZ0IsU0FBUSxlQUFlO0lBVWhEOzs7Ozs7Ozs7O09BVUc7SUFDSCxZQUNjLE9BQXVCLEVBQ3ZCLE9BQTBCLEVBQzFCLFdBQWdDLEVBQ2hDLFFBQXVCLEVBQ3ZCLE9BQXVCLEVBQ3ZCLElBQWlCLEVBQ2pCLGdCQUFrQyxFQUNsQyxtQkFBd0M7UUFFbEQsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQVRuRSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQXpCNUMsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUM1QixpQkFBWSxHQUFjO1lBQ2hDLE1BQU0sRUFBRSxlQUFlO1lBQ3ZCLElBQUksRUFBRSxrQkFBa0I7U0FDM0IsQ0FBQztJQXdCRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxDQUFDLE1BQWM7UUFDZixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUk7UUFDaEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVU7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxNQUFtQjtRQUV6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUU3QixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQixJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUUsRUFBRTtnQkFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckIsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDZCxPQUFPO2FBQ1Y7WUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxLQUFLLEVBQUU7WUFDUCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNiLEdBQUcsSUFBSSxDQUFDLGFBQWE7WUFDckIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7T0FHRztJQUNILFlBQVksQ0FBQyxNQUFtQjtRQUc1QixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUN2QixPQUFPO1NBQ1Y7UUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTdCLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVuQixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxFQUFFO2dCQUN6QixPQUFPO2FBQ1Y7WUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNiLEdBQUcsSUFBSSxDQUFDLGFBQWE7WUFDckIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7T0FHRztJQUNPLFlBQVksQ0FBQyxNQUFjO1FBRWpDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHO1lBQ3pDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU07WUFDL0IsUUFBUSxFQUFFLEdBQUc7WUFDYixNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25ELENBQUM7UUFFRixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDdkMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSTtZQUM3QixRQUFRLEVBQUUsR0FBRztZQUNiLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQzFDLENBQUM7UUFFRixJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7Z0ZBOUlRLGVBQWU7dUVBQWYsZUFBZSxXQUFmLGVBQWU7O1NBQWYsZUFBZTt1RkFBZixlQUFlO2NBRDNCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N0cmluZ01hcH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1JlY29yZExpc3RTdG9yZX0gZnJvbSAnLi4vcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3Quc3RvcmUnO1xuaW1wb3J0IHtTYXZlZEZpbHRlciwgU2F2ZWRGaWx0ZXJMaXN0fSBmcm9tICcuL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge0ZpbHRlcnNMaXN0R1FMfSBmcm9tICcuL2dyYXBocWwvYXBpLmxpc3QuZ2V0JztcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWx0ZXJMaXN0U3RvcmUgZXh0ZW5kcyBSZWNvcmRMaXN0U3RvcmUge1xuXG4gICAgcmVjb3JkcyQ6IE9ic2VydmFibGU8U2F2ZWRGaWx0ZXJbXT47XG5cbiAgICBwcm90ZWN0ZWQgbW9kdWxlTmFtZSA9ICdzYXZlZC1zZWFyY2gnO1xuICAgIHByb3RlY3RlZCBmaWx0ZXJGaWVsZHM6IFN0cmluZ01hcCA9IHtcbiAgICAgICAgbW9kdWxlOiAnc2VhcmNoX21vZHVsZScsXG4gICAgICAgIHVzZXI6ICdhc3NpZ25lZF91c2VyX2lkJyxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gbGlzdEdRTFxuICAgICAqIEBwYXJhbSBjb25maWdzXG4gICAgICogQHBhcmFtIHByZWZlcmVuY2VzXG4gICAgICogQHBhcmFtIGxhbmd1YWdlXG4gICAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gYXV0aFxuICAgICAqIEBwYXJhbSBtb2R1bGVOYW1lTWFwcGVyXG4gICAgICogQHBhcmFtIGxvY2FsU3RvcmFnZVNlcnZpY2VcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxpc3RHUUw6IEZpbHRlcnNMaXN0R1FMLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGxpc3RHUUwsIGNvbmZpZ3MsIHByZWZlcmVuY2VzLCBsYW5ndWFnZSwgbWVzc2FnZSwgbG9jYWxTdG9yYWdlU2VydmljZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBzdG9yZVxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKi9cbiAgICBpbml0KG1vZHVsZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxTYXZlZEZpbHRlckxpc3Q+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0JCA9IHN1cGVyLmluaXQodGhpcy5tb2R1bGVOYW1lLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuaW5pdENyaXRlcmlhKG1vZHVsZSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdCQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCAvIHJlbG9hZCByZWNvcmRzIHVzaW5nIGN1cnJlbnQgcGFnaW5hdGlvbiBhbmQgY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PlxuICAgICAqL1xuICAgIGxvYWQodXNlQ2FjaGUgPSB0cnVlKTogT2JzZXJ2YWJsZTxTYXZlZEZpbHRlckxpc3Q+IHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmxvYWQodXNlQ2FjaGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IGxpc3Qgb2Ygc2F2ZWQgZmlsdGVyc1xuICAgICAqL1xuICAgIGdldEZpbHRlcnMoKTogU2F2ZWRGaWx0ZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5ldyBmaWx0ZXIgdG8gbGlzdFxuICAgICAqIEBwYXJhbSBmaWx0ZXJcbiAgICAgKi9cbiAgICBhZGRGaWx0ZXIoZmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQge1xuXG4gICAgICAgIGxldCBpc05ldyA9IHRydWU7XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLnJlY29yZHM7XG5cbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IFtdO1xuXG4gICAgICAgIGZpbHRlcnMuZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlY29yZC5pZCA9PT0gZmlsdGVyLmlkKSB7XG4gICAgICAgICAgICAgICAgbmV3TGlzdC5wdXNoKGZpbHRlcik7XG4gICAgICAgICAgICAgICAgaXNOZXcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ld0xpc3QucHVzaChyZWNvcmQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaChmaWx0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICByZWNvcmRzOiBuZXdMaXN0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZXhpc3RpbmcgZmlsdGVyXG4gICAgICogQHBhcmFtIGZpbHRlclxuICAgICAqL1xuICAgIHJlbW92ZUZpbHRlcihmaWx0ZXI6IFNhdmVkRmlsdGVyKTogdm9pZCB7XG5cblxuICAgICAgICBpZiAoIWZpbHRlciB8fCAhZmlsdGVyLmlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5yZWNvcmRzO1xuXG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbXTtcblxuICAgICAgICBmaWx0ZXJzLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICAgIGlmIChyZWNvcmQuaWQgPT09IGZpbHRlci5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHJlY29yZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgcmVjb3JkczogbmV3TGlzdCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBjcml0ZXJpYVxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdENyaXRlcmlhKG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgY3JpdGVyaWEgPSB0aGlzLmNyaXRlcmlhO1xuICAgICAgICBjcml0ZXJpYS5maWx0ZXJzW3RoaXMuZmlsdGVyRmllbGRzLm1vZHVsZV0gPSB7XG4gICAgICAgICAgICBmaWVsZDogdGhpcy5maWx0ZXJGaWVsZHMubW9kdWxlLFxuICAgICAgICAgICAgb3BlcmF0b3I6ICc9JyxcbiAgICAgICAgICAgIHZhbHVlczogW3RoaXMubW9kdWxlTmFtZU1hcHBlci50b0xlZ2FjeShtb2R1bGUpXVxuICAgICAgICB9O1xuXG4gICAgICAgIGNyaXRlcmlhLmZpbHRlcnNbdGhpcy5maWx0ZXJGaWVsZHMudXNlcl0gPSB7XG4gICAgICAgICAgICBmaWVsZDogdGhpcy5maWx0ZXJGaWVsZHMudXNlcixcbiAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXG4gICAgICAgICAgICB2YWx1ZXM6IFt0aGlzLmF1dGguZ2V0Q3VycmVudFVzZXIoKS5pZF1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVNlYXJjaENyaXRlcmlhKGNyaXRlcmlhLCBmYWxzZSk7XG4gICAgfVxuXG59XG4iXX0=