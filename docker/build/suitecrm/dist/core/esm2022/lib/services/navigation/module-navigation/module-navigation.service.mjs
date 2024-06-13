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
import { Router } from '@angular/router';
import { ModuleNameMapper } from '../module-name-mapper/module-name-mapper.service';
import { ActionNameMapper } from '../action-name-mapper/action-name-mapper.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../module-name-mapper/module-name-mapper.service";
import * as i3 from "../action-name-mapper/action-name-mapper.service";
const ROUTE_PREFIX = './#';
class ModuleNavigation {
    constructor(router, moduleNameMapper, actionNameMapper) {
        this.router = router;
        this.moduleNameMapper = moduleNameMapper;
        this.actionNameMapper = actionNameMapper;
    }
    /**
     * Public Api
     */
    /**
     * Get module info
     *
     * @param {string} module name
     * @param {object} navigation info
     * @returns {object} module info
     */
    getModuleInfo(module, navigation) {
        if (!navigation || !navigation.modules) {
            return null;
        }
        return navigation.modules[module];
    }
    /**
     * Get module label
     *
     * @param {object} module info
     * @param {object} appListStrings map
     * @returns {string} the module label
     */
    getModuleLabel(module, appListStrings) {
        if (!appListStrings || !appListStrings.moduleList || !module) {
            return '';
        }
        const labelKey = (module && module.labelKey) || '';
        return appListStrings.moduleList[labelKey] || labelKey;
    }
    /**
     * Get module route
     *
     * @param {object} module NavbarModule
     * @returns {object} NavigationRoute
     */
    getModuleRoute(module) {
        let url = (module && module.defaultRoute) || '';
        let route = null;
        const params = null;
        if (url.startsWith(ROUTE_PREFIX)) {
            route = url.replace(ROUTE_PREFIX, '');
            url = null;
        }
        return { route, url, params };
    }
    /**
     * Navigate using action information
     *
     * @param {object} item ModuleAction
     * @returns {object} Promise<boolean>
     */
    navigate(item) {
        const route = this.getActionRoute(item);
        return this.router.navigate([route.route], {
            queryParams: route.params
        });
    }
    /**
     * Navigate using menu item information
     *
     * @param {object} item MenuItem
     */
    navigateUsingMenuItem(item) {
        if (item.link.route) {
            this.router.navigate([item.link.route ?? ''], {
                queryParams: item.link.params ?? {}
            }).then();
            return;
        }
        if (item.link.url) {
            this.router.navigateByUrl(item.link.url ?? '').then();
            return;
        }
    }
    /**
     * Get action route info
     *
     * @param {object} action ModuleAction
     * @returns {object} NavigationRoute
     */
    getActionRoute(action) {
        let url = action.url;
        let route = null;
        let params = {};
        let process = action?.process;
        if (url.startsWith(ROUTE_PREFIX)) {
            route = url.replace(ROUTE_PREFIX, '');
            url = null;
            if (action.params) {
                params = action.params;
            }
            else {
                const routeParts = route.split('?');
                route = routeParts[0];
                const queryParamsStr = routeParts[1];
                const queryParamsObj = {};
                if (queryParamsStr) {
                    queryParamsStr.split('&').forEach(param => {
                        const keyValue = param.split('=');
                        queryParamsObj[keyValue[0]] = keyValue[1];
                    });
                }
                params = queryParamsObj;
            }
        }
        return { route, url, params, process };
    }
    /**
     * Get label for module action item
     *
     * @param {string} module name
     * @param {object} item action
     * @param {object} languages map
     * @param {string} labelKey to use
     * @returns {string} label
     */
    getActionLabel(module, item, languages, labelKey = '') {
        if (!languages || !languages.modStrings || !item || !module) {
            return '';
        }
        let key = labelKey;
        if (!key) {
            key = item.labelKey;
        }
        let label = languages.modStrings[module] && languages.modStrings[module][key];
        if (!label) {
            label = languages.appStrings && languages.appStrings[key];
        }
        if (!label && item.module) {
            label = languages.modStrings[item.module] && languages.modStrings[item.module][key];
        }
        if (!label) {
            label = languages.modStrings.administration && languages.modStrings.administration[key];
        }
        return label || '';
    }
    /**
     * Get record router link route info
     *
     * @param {string} module name
     * @param {string} id fo the record
     * @returns {string} router link
     */
    getRecordRouterLink(module, id) {
        return `/${module}/record/${id}`;
    }
    /**
     * Navigate back using return params
     * @param record
     * @param moduleName
     * @param params
     */
    navigateBack(record, moduleName, params) {
        let returnModule = this.getReturnModule(params);
        let returnAction = this.getReturnAction(params);
        const returnId = this.getReturnId(params);
        let route = '';
        if (returnModule) {
            route += '/' + returnModule;
        }
        if (returnAction) {
            route += '/' + returnAction;
        }
        if (returnId) {
            route += '/' + returnId;
        }
        if (returnModule === moduleName && returnAction === 'record') {
            const rid = !returnId ? record.id : returnId;
            route = '/' + moduleName + '/record/' + rid;
        }
        if (!route && record && record.id) {
            route = '/' + moduleName + '/record/' + record.id;
        }
        if (!route && record && record.id) {
            route = '/' + moduleName;
        }
        this.router.navigate([route]).then();
    }
    /**
     * Extract return id
     * @param params
     */
    getReturnId(params) {
        return params.return_id || '';
    }
    /**
     * Extract and map return action
     * @param params
     */
    getReturnAction(params) {
        let returnAction = '';
        if (params.return_action) {
            returnAction = this.actionNameMapper.toFrontend(params.return_action);
        }
        return returnAction;
    }
    /**
     * Extract and map return action
     * @param params
     */
    getReturnModule(params) {
        let returnModule = '';
        if (params.return_module) {
            returnModule = this.moduleNameMapper.toFrontend(params.return_module);
        }
        return returnModule;
    }
    static { this.ɵfac = function ModuleNavigation_Factory(t) { return new (t || ModuleNavigation)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.ModuleNameMapper), i0.ɵɵinject(i3.ActionNameMapper)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModuleNavigation, factory: ModuleNavigation.ɵfac, providedIn: 'root' }); }
}
export { ModuleNavigation };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleNavigation, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.Router }, { type: i2.ModuleNameMapper }, { type: i3.ActionNameMapper }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLW5hdmlnYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBSXZDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtEQUFrRCxDQUFDOzs7OztBQVNsRixNQUFNLFlBQVksR0FBRyxLQUFLLENBQUM7QUFFM0IsTUFDYSxnQkFBZ0I7SUFFekIsWUFDYyxNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLGdCQUFrQztRQUZsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRWhELENBQUM7SUFFRDs7T0FFRztJQUVIOzs7Ozs7T0FNRztJQUNJLGFBQWEsQ0FBQyxNQUFjLEVBQUUsVUFBc0I7UUFDdkQsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksY0FBYyxDQUFDLE1BQW9CLEVBQUUsY0FBcUM7UUFDN0UsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDMUQsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUNELE1BQU0sUUFBUSxHQUFHLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFbkQsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxjQUFjLENBQUMsTUFBb0I7UUFDdEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXBCLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUM5QixLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdEMsR0FBRyxHQUFHLElBQUksQ0FBQztTQUNkO1FBRUQsT0FBTyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksUUFBUSxDQUFDLElBQWtCO1FBQzlCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QyxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU07U0FDNUIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxxQkFBcUIsQ0FBQyxJQUFjO1FBRXZDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFFaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsRUFBRTtnQkFDMUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUU7YUFDdEMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRVYsT0FBTztTQUNWO1FBRUQsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUVkLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXRELE9BQU87U0FDVjtJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLGNBQWMsQ0FBQyxNQUFvQjtRQUN0QyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3JCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxPQUFPLEdBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQTtRQUU3QixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDOUIsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFFWCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0gsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxjQUFjLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7Z0JBRTFCLElBQUksY0FBYyxFQUFFO29CQUNoQixjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDdEMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDbEMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUMsQ0FBQyxDQUFDLENBQUM7aUJBQ047Z0JBQ0QsTUFBTSxHQUFHLGNBQWMsQ0FBQzthQUMzQjtTQUNKO1FBRUQsT0FBTyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLGNBQWMsQ0FBQyxNQUFjLEVBQUUsSUFBa0IsRUFBRSxTQUEwQixFQUFFLFFBQVEsR0FBRyxFQUFFO1FBQy9GLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3pELE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNOLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTlFLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixLQUFLLEdBQUcsU0FBUyxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLEtBQUssR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2RjtRQUVELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixLQUFLLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0Y7UUFFRCxPQUFPLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLG1CQUFtQixDQUFDLE1BQWMsRUFBRSxFQUFVO1FBRWpELE9BQU8sSUFBSSxNQUFNLFdBQVcsRUFBRSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksWUFBWSxDQUNmLE1BQWMsRUFDZCxVQUFrQixFQUNsQixNQUFpQztRQUdqQyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLFlBQVksRUFBRTtZQUNkLEtBQUssSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDO1NBQy9CO1FBRUQsSUFBSSxZQUFZLEVBQUU7WUFDZCxLQUFLLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQztTQUMvQjtRQUVELElBQUksUUFBUSxFQUFFO1lBQ1YsS0FBSyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7U0FDM0I7UUFFRCxJQUFJLFlBQVksS0FBSyxVQUFVLElBQUksWUFBWSxLQUFLLFFBQVEsRUFBRTtZQUMxRCxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzdDLEtBQUssR0FBRyxHQUFHLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxHQUFHLENBQUM7U0FDL0M7UUFFRCxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQy9CLEtBQUssR0FBRyxHQUFHLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUMvQixLQUFLLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQztTQUM1QjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksV0FBVyxDQUFDLE1BQStCO1FBQzlDLE9BQU8sTUFBTSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGVBQWUsQ0FBQyxNQUErQjtRQUNsRCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFdEIsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6RTtRQUNELE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxlQUFlLENBQUMsTUFBK0I7UUFDbEQsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXRCLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUN0QixZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekU7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO2lGQXhRUSxnQkFBZ0I7dUVBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBREosTUFBTTs7U0FDbEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FENUIsVUFBVTtlQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtNb2R1bGVBY3Rpb24sIE5hdmJhck1vZHVsZSwgTmF2aWdhdGlvbn0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlJztcbmltcG9ydCB7TGFuZ3VhZ2VMaXN0U3RyaW5nTWFwLCBMYW5ndWFnZVN0cmluZ3N9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7TWVudUl0ZW0sIFJlY29yZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcn0gZnJvbSAnLi4vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7QWN0aW9uTmFtZU1hcHBlcn0gZnJvbSAnLi4vYWN0aW9uLW5hbWUtbWFwcGVyL2FjdGlvbi1uYW1lLW1hcHBlci5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0aW9uUm91dGUge1xuICAgIHJvdXRlOiBzdHJpbmc7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgcGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgIHByb2Nlc3M/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFJPVVRFX1BSRUZJWCA9ICcuLyMnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNb2R1bGVOYXZpZ2F0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uTmFtZU1hcHBlcjogQWN0aW9uTmFtZU1hcHBlclxuICAgICkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBBcGlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCBtb2R1bGUgaW5mb1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBuYW1lXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5hdmlnYXRpb24gaW5mb1xuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IG1vZHVsZSBpbmZvXG4gICAgICovXG4gICAgcHVibGljIGdldE1vZHVsZUluZm8obW9kdWxlOiBzdHJpbmcsIG5hdmlnYXRpb246IE5hdmlnYXRpb24pOiBOYXZiYXJNb2R1bGUge1xuICAgICAgICBpZiAoIW5hdmlnYXRpb24gfHwgIW5hdmlnYXRpb24ubW9kdWxlcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmF2aWdhdGlvbi5tb2R1bGVzW21vZHVsZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG1vZHVsZSBsYWJlbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1vZHVsZSBpbmZvXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFwcExpc3RTdHJpbmdzIG1hcFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBtb2R1bGUgbGFiZWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TW9kdWxlTGFiZWwobW9kdWxlOiBOYXZiYXJNb2R1bGUsIGFwcExpc3RTdHJpbmdzOiBMYW5ndWFnZUxpc3RTdHJpbmdNYXApOiBzdHJpbmcge1xuICAgICAgICBpZiAoIWFwcExpc3RTdHJpbmdzIHx8ICFhcHBMaXN0U3RyaW5ncy5tb2R1bGVMaXN0IHx8ICFtb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYWJlbEtleSA9IChtb2R1bGUgJiYgbW9kdWxlLmxhYmVsS2V5KSB8fCAnJztcblxuICAgICAgICByZXR1cm4gYXBwTGlzdFN0cmluZ3MubW9kdWxlTGlzdFtsYWJlbEtleV0gfHwgbGFiZWxLZXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG1vZHVsZSByb3V0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1vZHVsZSBOYXZiYXJNb2R1bGVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBOYXZpZ2F0aW9uUm91dGVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TW9kdWxlUm91dGUobW9kdWxlOiBOYXZiYXJNb2R1bGUpOiBOYXZpZ2F0aW9uUm91dGUge1xuICAgICAgICBsZXQgdXJsID0gKG1vZHVsZSAmJiBtb2R1bGUuZGVmYXVsdFJvdXRlKSB8fCAnJztcbiAgICAgICAgbGV0IHJvdXRlID0gbnVsbDtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbnVsbDtcblxuICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoUk9VVEVfUFJFRklYKSkge1xuICAgICAgICAgICAgcm91dGUgPSB1cmwucmVwbGFjZShST1VURV9QUkVGSVgsICcnKTtcbiAgICAgICAgICAgIHVybCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge3JvdXRlLCB1cmwsIHBhcmFtc307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTmF2aWdhdGUgdXNpbmcgYWN0aW9uIGluZm9ybWF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaXRlbSBNb2R1bGVBY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBQcm9taXNlPGJvb2xlYW4+XG4gICAgICovXG4gICAgcHVibGljIG5hdmlnYXRlKGl0ZW06IE1vZHVsZUFjdGlvbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCByb3V0ZSA9IHRoaXMuZ2V0QWN0aW9uUm91dGUoaXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyb3V0ZS5yb3V0ZV0sIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiByb3V0ZS5wYXJhbXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTmF2aWdhdGUgdXNpbmcgbWVudSBpdGVtIGluZm9ybWF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaXRlbSBNZW51SXRlbVxuICAgICAqL1xuICAgIHB1YmxpYyBuYXZpZ2F0ZVVzaW5nTWVudUl0ZW0oaXRlbTogTWVudUl0ZW0pOiB2b2lkIHtcblxuICAgICAgICBpZihpdGVtLmxpbmsucm91dGUpIHtcblxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2l0ZW0ubGluay5yb3V0ZSA/PyAnJ10sIHtcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogaXRlbS5saW5rLnBhcmFtcyA/PyB7fVxuICAgICAgICAgICAgfSkudGhlbigpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZihpdGVtLmxpbmsudXJsKSB7XG5cbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS5saW5rLnVybCA/PyAnJykudGhlbigpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWN0aW9uIHJvdXRlIGluZm9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3Rpb24gTW9kdWxlQWN0aW9uXG4gICAgICogQHJldHVybnMge29iamVjdH0gTmF2aWdhdGlvblJvdXRlXG4gICAgICovXG4gICAgcHVibGljIGdldEFjdGlvblJvdXRlKGFjdGlvbjogTW9kdWxlQWN0aW9uKTogTmF2aWdhdGlvblJvdXRlIHtcbiAgICAgICAgbGV0IHVybCA9IGFjdGlvbi51cmw7XG4gICAgICAgIGxldCByb3V0ZSA9IG51bGw7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7fTtcbiAgICAgICAgbGV0IHByb2Nlc3MgPSBhY3Rpb24/LnByb2Nlc3NcblxuICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoUk9VVEVfUFJFRklYKSkge1xuICAgICAgICAgICAgcm91dGUgPSB1cmwucmVwbGFjZShST1VURV9QUkVGSVgsICcnKTtcbiAgICAgICAgICAgIHVybCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zID0gYWN0aW9uLnBhcmFtcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVQYXJ0cyA9IHJvdXRlLnNwbGl0KCc/Jyk7XG4gICAgICAgICAgICAgICAgcm91dGUgPSByb3V0ZVBhcnRzWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zU3RyID0gcm91dGVQYXJ0c1sxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVBhcmFtc09iaiA9IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zU3RyKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zU3RyLnNwbGl0KCcmJykuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHBhcmFtLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc09ialtrZXlWYWx1ZVswXV0gPSBrZXlWYWx1ZVsxXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmFtcyA9IHF1ZXJ5UGFyYW1zT2JqO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtyb3V0ZSwgdXJsLCBwYXJhbXMsIHByb2Nlc3N9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBsYWJlbCBmb3IgbW9kdWxlIGFjdGlvbiBpdGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaXRlbSBhY3Rpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2VzIG1hcFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbEtleSB0byB1c2VcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBsYWJlbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBY3Rpb25MYWJlbChtb2R1bGU6IHN0cmluZywgaXRlbTogTW9kdWxlQWN0aW9uLCBsYW5ndWFnZXM6IExhbmd1YWdlU3RyaW5ncywgbGFiZWxLZXkgPSAnJyk6IHN0cmluZyB7XG4gICAgICAgIGlmICghbGFuZ3VhZ2VzIHx8ICFsYW5ndWFnZXMubW9kU3RyaW5ncyB8fCAhaXRlbSB8fCAhbW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5ID0gbGFiZWxLZXk7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICBrZXkgPSBpdGVtLmxhYmVsS2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxhYmVsID0gbGFuZ3VhZ2VzLm1vZFN0cmluZ3NbbW9kdWxlXSAmJiBsYW5ndWFnZXMubW9kU3RyaW5nc1ttb2R1bGVdW2tleV07XG5cbiAgICAgICAgaWYgKCFsYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwgPSBsYW5ndWFnZXMuYXBwU3RyaW5ncyAmJiBsYW5ndWFnZXMuYXBwU3RyaW5nc1trZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFsYWJlbCAmJiBpdGVtLm1vZHVsZSkge1xuICAgICAgICAgICAgbGFiZWwgPSBsYW5ndWFnZXMubW9kU3RyaW5nc1tpdGVtLm1vZHVsZV0gJiYgbGFuZ3VhZ2VzLm1vZFN0cmluZ3NbaXRlbS5tb2R1bGVdW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWxhYmVsKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGxhbmd1YWdlcy5tb2RTdHJpbmdzLmFkbWluaXN0cmF0aW9uICYmIGxhbmd1YWdlcy5tb2RTdHJpbmdzLmFkbWluaXN0cmF0aW9uW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFiZWwgfHwgJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHJlY29yZCByb3V0ZXIgbGluayByb3V0ZSBpbmZvXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgZm8gdGhlIHJlY29yZFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHJvdXRlciBsaW5rXG4gICAgICovXG4gICAgcHVibGljIGdldFJlY29yZFJvdXRlckxpbmsobW9kdWxlOiBzdHJpbmcsIGlkOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICAgIHJldHVybiBgLyR7bW9kdWxlfS9yZWNvcmQvJHtpZH1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlIGJhY2sgdXNpbmcgcmV0dXJuIHBhcmFtc1xuICAgICAqIEBwYXJhbSByZWNvcmRcbiAgICAgKiBAcGFyYW0gbW9kdWxlTmFtZVxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgbmF2aWdhdGVCYWNrKFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgbW9kdWxlTmFtZTogc3RyaW5nLFxuICAgICAgICBwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgICApIHtcblxuICAgICAgICBsZXQgcmV0dXJuTW9kdWxlID0gdGhpcy5nZXRSZXR1cm5Nb2R1bGUocGFyYW1zKTtcbiAgICAgICAgbGV0IHJldHVybkFjdGlvbiA9IHRoaXMuZ2V0UmV0dXJuQWN0aW9uKHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJldHVybklkID0gdGhpcy5nZXRSZXR1cm5JZChwYXJhbXMpO1xuXG4gICAgICAgIGxldCByb3V0ZSA9ICcnO1xuICAgICAgICBpZiAocmV0dXJuTW9kdWxlKSB7XG4gICAgICAgICAgICByb3V0ZSArPSAnLycgKyByZXR1cm5Nb2R1bGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmV0dXJuQWN0aW9uKSB7XG4gICAgICAgICAgICByb3V0ZSArPSAnLycgKyByZXR1cm5BY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmV0dXJuSWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9ICcvJyArIHJldHVybklkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJldHVybk1vZHVsZSA9PT0gbW9kdWxlTmFtZSAmJiByZXR1cm5BY3Rpb24gPT09ICdyZWNvcmQnKSB7XG4gICAgICAgICAgICBjb25zdCByaWQgPSAhcmV0dXJuSWQgPyByZWNvcmQuaWQgOiByZXR1cm5JZDtcbiAgICAgICAgICAgIHJvdXRlID0gJy8nICsgbW9kdWxlTmFtZSArICcvcmVjb3JkLycgKyByaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJvdXRlICYmIHJlY29yZCAmJiByZWNvcmQuaWQpIHtcbiAgICAgICAgICAgIHJvdXRlID0gJy8nICsgbW9kdWxlTmFtZSArICcvcmVjb3JkLycgKyByZWNvcmQuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJvdXRlICYmIHJlY29yZCAmJiByZWNvcmQuaWQpIHtcbiAgICAgICAgICAgIHJvdXRlID0gJy8nICsgbW9kdWxlTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyb3V0ZV0pLnRoZW4oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IHJldHVybiBpZFxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UmV0dXJuSWQocGFyYW1zOiB7IFtwOiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLnJldHVybl9pZCB8fCAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGFuZCBtYXAgcmV0dXJuIGFjdGlvblxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UmV0dXJuQWN0aW9uKHBhcmFtczogeyBbcDogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICAgICAgbGV0IHJldHVybkFjdGlvbiA9ICcnO1xuXG4gICAgICAgIGlmIChwYXJhbXMucmV0dXJuX2FjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuQWN0aW9uID0gdGhpcy5hY3Rpb25OYW1lTWFwcGVyLnRvRnJvbnRlbmQocGFyYW1zLnJldHVybl9hY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BY3Rpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCBhbmQgbWFwIHJldHVybiBhY3Rpb25cbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICovXG4gICAgcHVibGljIGdldFJldHVybk1vZHVsZShwYXJhbXM6IHsgW3A6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgICAgIGxldCByZXR1cm5Nb2R1bGUgPSAnJztcblxuICAgICAgICBpZiAocGFyYW1zLnJldHVybl9tb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybk1vZHVsZSA9IHRoaXMubW9kdWxlTmFtZU1hcHBlci50b0Zyb250ZW5kKHBhcmFtcy5yZXR1cm5fbW9kdWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5Nb2R1bGU7XG4gICAgfVxufVxuIl19