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
import { DefaultUrlSerializer, PRIMARY_OUTLET } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { ModuleNameMapper } from '../module-name-mapper/module-name-mapper.service';
import { ActionNameMapper } from '../action-name-mapper/action-name-mapper.service';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
import * as i1 from "../module-name-mapper/module-name-mapper.service";
import * as i2 from "../action-name-mapper/action-name-mapper.service";
import * as i3 from "../../../store/system-config/system-config.store";
const ROUTE_PREFIX = './#';
class RouteConverter {
    constructor(moduleNameMapper, actionNameMapper, systemConfigStore) {
        this.moduleNameMapper = moduleNameMapper;
        this.actionNameMapper = actionNameMapper;
        this.systemConfigStore = systemConfigStore;
    }
    /**
     * Public Api
     */
    /**
     * Converts legacyLink to front end link. Includes the /#/.
     *
     * @param {string} legacyLink legacy url
     * @returns {string} frontend path
     */
    toFrontEndLink(legacyLink) {
        return '#/' + this.toFrontEndRoute(legacyLink);
    }
    /**
     * Converts legacyLink to front end route
     *
     * @param {string} legacyLink legacy url
     * @returns {string} frontend path
     */
    toFrontEndRoute(legacyLink) {
        if (legacyLink && legacyLink.includes('/#/')) {
            const anchorParts = legacyLink.split('/#/');
            if (anchorParts.length < 2) {
                return '/';
            }
            return anchorParts[1];
        }
        const info = this.parse(legacyLink);
        if (!info) {
            return '/';
        }
        let route = this.buildRoute(info.module, info.action, info.record);
        route += this.buildQueryString(info.params, ['module', 'action', 'record']);
        return route;
    }
    /**
     * Build legacy link from router information
     *
     * @param {object} params route params
     * @param {object} queryParams route query params
     * @returns {string} legacy url
     */
    toLegacy(params, queryParams) {
        let path = './legacy/index.php';
        const queryObject = {
            ...queryParams,
        };
        if (params.module) {
            queryObject.module = this.moduleNameMapper.toLegacy(params.module);
        }
        if (params.action) {
            queryObject.action = this.actionNameMapper.toLegacy(params.action);
        }
        if (params.record) {
            queryObject.record = params.record;
        }
        path += this.buildQueryString(queryObject);
        return path;
    }
    /**
     * Parse legacy link
     *
     * @param {string} legacyLink to parse
     * @returns {object} route info
     */
    parse(legacyLink) {
        const parser = new DefaultUrlSerializer();
        const replacedString = legacyLink.replace('/legacy', '');
        const parts = replacedString.split('?');
        if (parts.length < 2) {
            return null;
        }
        const tree = parser.parse('/?' + parts[1]);
        const params = tree.queryParamMap;
        const module = params.get('module') || '';
        const action = params.get('action') || '';
        const record = params.get('record') || '';
        return {
            module,
            action,
            record,
            params: tree.queryParams
        };
    }
    /**
     * Map route url to RouteInfo
     *
     * @returns {object} RouteInfo of the current URL
     * @description Parses route information from ActivatedRouteSnapshot to RouteInfo object
     * @param {UrlSegment[]} urlSegment from the Router object
     */
    parseRouteURL(urlSegment) {
        return {
            module: urlSegment[0]?.path ?? '',
            action: urlSegment[1]?.path ?? 'index',
            record: urlSegment[2]?.path ?? ''
        };
    }
    /**
     * check if the current route is a classic view route
     *
     * @returns {object} RouteInfo
     * @description if the current url is a classic view url; so redirect back to the same view
     * @param {UrlTree} urlTree of current route
     */
    parseRouteInfoFromUrlTree(urlTree) {
        const urlSegmentGroup = urlTree.root.children[PRIMARY_OUTLET];
        const urlSegment = urlSegmentGroup.segments;
        return this.parseRouteURL(urlSegment);
    }
    /**
     * check if the current route is a classic view route
     *
     * @returns {boolean} true/false
     * @param {UrlTree} urlTree of the route
     * @description if the current url is a classic view url; so redirect back to the same view
     */
    isClassicViewRoute(urlTree) {
        const configRoutes = this.systemConfigStore.getConfigValue('module_routing');
        const currentRouteInfo = this.parseRouteInfoFromUrlTree(urlTree);
        const module = currentRouteInfo.module;
        const action = currentRouteInfo.action;
        return !configRoutes[module] || !configRoutes[module][action];
    }
    /**
     * Check if given routeInfo matches the provided activated route
     *
     * @param {object} route to check
     * @param {object} routeInfo to check
     * @returns {boolean} is match
     */
    matchesActiveRoute(route, routeInfo) {
        const toCheck = [
            {
                name: 'module',
                map: (value) => {
                    if (!value) {
                        return value;
                    }
                    return this.mapModuleToFrontend(value);
                }
            },
            {
                name: 'action',
                map: (value) => {
                    if (!value) {
                        return value;
                    }
                    return this.mapActionToFrontEnd(value);
                }
            },
            {
                name: 'record',
                map: (value) => value
            }
        ];
        let match = true;
        toCheck.forEach((param) => {
            if (!route.snapshot.params[param.name] && !routeInfo[param.name]) {
                return;
            }
            match = match && (route.snapshot.params[param.name] === param.map(routeInfo[param.name]));
        });
        return match;
    }
    /**
     * Internal API
     */
    /**
     * Build front end route
     *
     * @param {string} module name
     * @param {string} action name
     * @param {string} record id
     * @returns {string} route
     */
    buildRoute(module, action, record) {
        const moduleName = this.mapModuleToFrontend(module);
        let route = `${moduleName}`;
        if (action) {
            const actionName = this.mapActionToFrontEnd(action);
            route += `/${actionName}`;
        }
        if (record) {
            route += `/${record}`;
        }
        return route;
    }
    /**
     * Build query string
     *
     * @param {object} queryParams query parameters
     * @param {string[]} exclude parameters to exclude
     * @returns {string} query string
     */
    buildQueryString(queryParams, exclude = []) {
        let params = new HttpParams();
        Object.keys(queryParams).forEach((param) => {
            if (exclude.includes(param)) {
                return;
            }
            const value = queryParams[param];
            params = params.set(param, value);
        });
        if (params.keys().length > 0) {
            return '?' + params.toString();
        }
        return '';
    }
    /**
     * Map legacy module name to frontend
     *
     * @param {string} module legacy name
     * @returns {string} frontend name
     */
    mapModuleToFrontend(module) {
        return this.moduleNameMapper.toFrontend(module);
    }
    /**
     * Map legacy action name to frontend
     *
     * @param {string} action legacy name
     * @returns {string} frontend name
     */
    mapActionToFrontEnd(action) {
        return this.actionNameMapper.toFrontend(action);
    }
    static { this.ɵfac = function RouteConverter_Factory(t) { return new (t || RouteConverter)(i0.ɵɵinject(i1.ModuleNameMapper), i0.ɵɵinject(i2.ActionNameMapper), i0.ɵɵinject(i3.SystemConfigStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RouteConverter, factory: RouteConverter.ɵfac, providedIn: 'root' }); }
}
export { RouteConverter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RouteConverter, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.ModuleNameMapper }, { type: i2.ActionNameMapper }, { type: i3.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtY29udmVydGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbmF2aWdhdGlvbi9yb3V0ZS1jb252ZXJ0ZXIvcm91dGUtY29udmVydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUVILG9CQUFvQixFQUNaLGNBQWMsRUFHekIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDbEYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDbEYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0RBQWtELENBQUM7Ozs7O0FBRW5GLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQztBQVMzQixNQUNhLGNBQWM7SUFFdkIsWUFDWSxnQkFBa0MsRUFDbEMsZ0JBQWtDLEVBQ2xDLGlCQUFvQztRQUZwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUVoRCxDQUFDO0lBRUQ7O09BRUc7SUFFSDs7Ozs7T0FLRztJQUNJLGNBQWMsQ0FBQyxVQUFrQjtRQUNwQyxPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLGVBQWUsQ0FBQyxVQUFrQjtRQUVyQyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFDLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFNUMsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDeEIsT0FBTyxHQUFHLENBQUM7YUFDZDtZQUVELE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUVELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVuRSxLQUFLLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFNUUsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLFFBQVEsQ0FBQyxNQUFjLEVBQUUsV0FBbUI7UUFDL0MsSUFBSSxJQUFJLEdBQUcsb0JBQW9CLENBQUM7UUFFaEMsTUFBTSxXQUFXLEdBQUc7WUFDaEIsR0FBRyxXQUFXO1NBQ2pCLENBQUM7UUFFRixJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDZixXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2YsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0RTtRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNmLFdBQVcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUN0QztRQUVELElBQUksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFM0MsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLFVBQWtCO1FBRTNCLE1BQU0sTUFBTSxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztRQUUxQyxNQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6RCxNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE1BQU0sSUFBSSxHQUFZLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFbEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFMUMsT0FBTztZQUNILE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVztTQUMzQixDQUFDO0lBQ04sQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLGFBQWEsQ0FBQyxVQUF3QjtRQUV6QyxPQUFPO1lBQ0gsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRTtZQUNqQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxPQUFPO1lBQ3RDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLEVBQUU7U0FDdkIsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0kseUJBQXlCLENBQUMsT0FBZ0I7UUFDN0MsTUFBTSxlQUFlLEdBQW9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sVUFBVSxHQUFpQixlQUFlLENBQUMsUUFBUSxDQUFDO1FBQzFELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksa0JBQWtCLENBQUMsT0FBZ0I7UUFFdEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTdFLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpFLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUN2QyxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFFdkMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksa0JBQWtCLENBQUMsS0FBcUIsRUFBRSxTQUFvQjtRQUNqRSxNQUFNLE9BQU8sR0FBRztZQUNaO2dCQUNJLElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBTyxFQUFFO29CQUVoQixJQUFJLENBQUMsS0FBSyxFQUFFO3dCQUNSLE9BQU8sS0FBSyxDQUFDO3FCQUNoQjtvQkFFRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0MsQ0FBQzthQUNKO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFPLEVBQUU7b0JBRWhCLElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQ1IsT0FBTyxLQUFLLENBQUM7cUJBQ2hCO29CQUVELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2FBQ0o7WUFDRDtnQkFDSSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQU8sRUFBRSxDQUFDLEtBQUs7YUFDN0I7U0FDSixDQUFDO1FBRUYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWpCLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUQsT0FBTzthQUNWO1lBRUQsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlGLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOztPQUVHO0lBRUg7Ozs7Ozs7T0FPRztJQUNPLFVBQVUsQ0FBQyxNQUFjLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDL0QsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksS0FBSyxHQUFHLEdBQUcsVUFBVSxFQUFFLENBQUM7UUFFNUIsSUFBSSxNQUFNLEVBQUU7WUFDUixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsS0FBSyxJQUFJLElBQUksVUFBVSxFQUFFLENBQUM7U0FDN0I7UUFFRCxJQUFJLE1BQU0sRUFBRTtZQUNSLEtBQUssSUFBSSxJQUFJLE1BQU0sRUFBRSxDQUFDO1NBQ3pCO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNPLGdCQUFnQixDQUFDLFdBQW1CLEVBQUUsVUFBb0IsRUFBRTtRQUVsRSxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFFdkMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN6QixPQUFPO2FBQ1Y7WUFFRCxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQixPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbEM7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLG1CQUFtQixDQUFDLE1BQWM7UUFDeEMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLG1CQUFtQixDQUFDLE1BQWM7UUFDeEMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7K0VBalNRLGNBQWM7dUVBQWQsY0FBYyxXQUFkLGNBQWMsbUJBREYsTUFBTTs7U0FDbEIsY0FBYzt1RkFBZCxjQUFjO2NBRDFCLFVBQVU7ZUFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIEFjdGl2YXRlZFJvdXRlLFxuICAgIERlZmF1bHRVcmxTZXJpYWxpemVyLFxuICAgIFBhcmFtcywgUFJJTUFSWV9PVVRMRVQsXG4gICAgVXJsU2VnbWVudCwgVXJsU2VnbWVudEdyb3VwLFxuICAgIFVybFRyZWVcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7SHR0cFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi9tb2R1bGUtbmFtZS1tYXBwZXIvbW9kdWxlLW5hbWUtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtBY3Rpb25OYW1lTWFwcGVyfSBmcm9tICcuLi9hY3Rpb24tbmFtZS1tYXBwZXIvYWN0aW9uLW5hbWUtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcblxuY29uc3QgUk9VVEVfUFJFRklYID0gJy4vIyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVJbmZvIHtcbiAgICBtb2R1bGU/OiBzdHJpbmc7XG4gICAgYWN0aW9uPzogc3RyaW5nO1xuICAgIHJlY29yZD86IHN0cmluZztcbiAgICBwYXJhbXM/OiBQYXJhbXM7XG59XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFJvdXRlQ29udmVydGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG1vZHVsZU5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByaXZhdGUgYWN0aW9uTmFtZU1hcHBlcjogQWN0aW9uTmFtZU1hcHBlcixcbiAgICAgICAgcHJpdmF0ZSBzeXN0ZW1Db25maWdTdG9yZTogU3lzdGVtQ29uZmlnU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgQXBpXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBsZWdhY3lMaW5rIHRvIGZyb250IGVuZCBsaW5rLiBJbmNsdWRlcyB0aGUgLyMvLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxlZ2FjeUxpbmsgbGVnYWN5IHVybFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGZyb250ZW5kIHBhdGhcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9Gcm9udEVuZExpbmsobGVnYWN5TGluazogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcjLycgKyB0aGlzLnRvRnJvbnRFbmRSb3V0ZShsZWdhY3lMaW5rKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBsZWdhY3lMaW5rIHRvIGZyb250IGVuZCByb3V0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxlZ2FjeUxpbmsgbGVnYWN5IHVybFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGZyb250ZW5kIHBhdGhcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9Gcm9udEVuZFJvdXRlKGxlZ2FjeUxpbms6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgICAgaWYgKGxlZ2FjeUxpbmsgJiYgbGVnYWN5TGluay5pbmNsdWRlcygnLyMvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGFuY2hvclBhcnRzID0gbGVnYWN5TGluay5zcGxpdCgnLyMvJyk7XG5cbiAgICAgICAgICAgIGlmIChhbmNob3JQYXJ0cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcvJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFuY2hvclBhcnRzWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMucGFyc2UobGVnYWN5TGluayk7XG4gICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgcmV0dXJuICcvJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByb3V0ZSA9IHRoaXMuYnVpbGRSb3V0ZShpbmZvLm1vZHVsZSwgaW5mby5hY3Rpb24sIGluZm8ucmVjb3JkKTtcblxuICAgICAgICByb3V0ZSArPSB0aGlzLmJ1aWxkUXVlcnlTdHJpbmcoaW5mby5wYXJhbXMsIFsnbW9kdWxlJywgJ2FjdGlvbicsICdyZWNvcmQnXSk7XG5cbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGxlZ2FjeSBsaW5rIGZyb20gcm91dGVyIGluZm9ybWF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIHJvdXRlIHBhcmFtc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVyeVBhcmFtcyByb3V0ZSBxdWVyeSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBsZWdhY3kgdXJsXG4gICAgICovXG4gICAgcHVibGljIHRvTGVnYWN5KHBhcmFtczogUGFyYW1zLCBxdWVyeVBhcmFtczogUGFyYW1zKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHBhdGggPSAnLi9sZWdhY3kvaW5kZXgucGhwJztcblxuICAgICAgICBjb25zdCBxdWVyeU9iamVjdCA9IHtcbiAgICAgICAgICAgIC4uLnF1ZXJ5UGFyYW1zLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChwYXJhbXMubW9kdWxlKSB7XG4gICAgICAgICAgICBxdWVyeU9iamVjdC5tb2R1bGUgPSB0aGlzLm1vZHVsZU5hbWVNYXBwZXIudG9MZWdhY3kocGFyYW1zLm1vZHVsZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5hY3Rpb24pIHtcbiAgICAgICAgICAgIHF1ZXJ5T2JqZWN0LmFjdGlvbiA9IHRoaXMuYWN0aW9uTmFtZU1hcHBlci50b0xlZ2FjeShwYXJhbXMuYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMucmVjb3JkKSB7XG4gICAgICAgICAgICBxdWVyeU9iamVjdC5yZWNvcmQgPSBwYXJhbXMucmVjb3JkO1xuICAgICAgICB9XG5cbiAgICAgICAgcGF0aCArPSB0aGlzLmJ1aWxkUXVlcnlTdHJpbmcocXVlcnlPYmplY3QpO1xuXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIGxlZ2FjeSBsaW5rXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGVnYWN5TGluayB0byBwYXJzZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHJvdXRlIGluZm9cbiAgICAgKi9cbiAgICBwdWJsaWMgcGFyc2UobGVnYWN5TGluazogc3RyaW5nKTogUm91dGVJbmZvIHtcblxuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRGVmYXVsdFVybFNlcmlhbGl6ZXIoKTtcblxuICAgICAgICBjb25zdCByZXBsYWNlZFN0cmluZyA9IGxlZ2FjeUxpbmsucmVwbGFjZSgnL2xlZ2FjeScsICcnKTtcbiAgICAgICAgY29uc3QgcGFydHMgPSByZXBsYWNlZFN0cmluZy5zcGxpdCgnPycpO1xuXG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRyZWU6IFVybFRyZWUgPSBwYXJzZXIucGFyc2UoJy8/JyArIHBhcnRzWzFdKTtcblxuICAgICAgICBjb25zdCBwYXJhbXMgPSB0cmVlLnF1ZXJ5UGFyYW1NYXA7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gcGFyYW1zLmdldCgnbW9kdWxlJykgfHwgJyc7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHBhcmFtcy5nZXQoJ2FjdGlvbicpIHx8ICcnO1xuICAgICAgICBjb25zdCByZWNvcmQgPSBwYXJhbXMuZ2V0KCdyZWNvcmQnKSB8fCAnJztcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgICAgcmVjb3JkLFxuICAgICAgICAgICAgcGFyYW1zOiB0cmVlLnF1ZXJ5UGFyYW1zXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwIHJvdXRlIHVybCB0byBSb3V0ZUluZm9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IFJvdXRlSW5mbyBvZiB0aGUgY3VycmVudCBVUkxcbiAgICAgKiBAZGVzY3JpcHRpb24gUGFyc2VzIHJvdXRlIGluZm9ybWF0aW9uIGZyb20gQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB0byBSb3V0ZUluZm8gb2JqZWN0XG4gICAgICogQHBhcmFtIHtVcmxTZWdtZW50W119IHVybFNlZ21lbnQgZnJvbSB0aGUgUm91dGVyIG9iamVjdFxuICAgICAqL1xuICAgIHB1YmxpYyBwYXJzZVJvdXRlVVJMKHVybFNlZ21lbnQ6IFVybFNlZ21lbnRbXSk6IFJvdXRlSW5mbyB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZHVsZTogdXJsU2VnbWVudFswXT8ucGF0aCA/PyAnJyxcbiAgICAgICAgICAgIGFjdGlvbjogdXJsU2VnbWVudFsxXT8ucGF0aCA/PyAnaW5kZXgnLFxuICAgICAgICAgICAgcmVjb3JkOiB1cmxTZWdtZW50WzJdPy5wYXRoID8/ICcnXG4gICAgICAgIH0gYXMgUm91dGVJbmZvO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNoZWNrIGlmIHRoZSBjdXJyZW50IHJvdXRlIGlzIGEgY2xhc3NpYyB2aWV3IHJvdXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBSb3V0ZUluZm9cbiAgICAgKiBAZGVzY3JpcHRpb24gaWYgdGhlIGN1cnJlbnQgdXJsIGlzIGEgY2xhc3NpYyB2aWV3IHVybDsgc28gcmVkaXJlY3QgYmFjayB0byB0aGUgc2FtZSB2aWV3XG4gICAgICogQHBhcmFtIHtVcmxUcmVlfSB1cmxUcmVlIG9mIGN1cnJlbnQgcm91dGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcGFyc2VSb3V0ZUluZm9Gcm9tVXJsVHJlZSh1cmxUcmVlOiBVcmxUcmVlKTogUm91dGVJbmZvIHtcbiAgICAgICAgY29uc3QgdXJsU2VnbWVudEdyb3VwOiBVcmxTZWdtZW50R3JvdXAgPSB1cmxUcmVlLnJvb3QuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdO1xuICAgICAgICBjb25zdCB1cmxTZWdtZW50OiBVcmxTZWdtZW50W10gPSB1cmxTZWdtZW50R3JvdXAuc2VnbWVudHM7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlUm91dGVVUkwodXJsU2VnbWVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2hlY2sgaWYgdGhlIGN1cnJlbnQgcm91dGUgaXMgYSBjbGFzc2ljIHZpZXcgcm91dGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlL2ZhbHNlXG4gICAgICogQHBhcmFtIHtVcmxUcmVlfSB1cmxUcmVlIG9mIHRoZSByb3V0ZVxuICAgICAqIEBkZXNjcmlwdGlvbiBpZiB0aGUgY3VycmVudCB1cmwgaXMgYSBjbGFzc2ljIHZpZXcgdXJsOyBzbyByZWRpcmVjdCBiYWNrIHRvIHRoZSBzYW1lIHZpZXdcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNDbGFzc2ljVmlld1JvdXRlKHVybFRyZWU6IFVybFRyZWUpOiBib29sZWFuIHtcblxuICAgICAgICBjb25zdCBjb25maWdSb3V0ZXMgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldENvbmZpZ1ZhbHVlKCdtb2R1bGVfcm91dGluZycpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSb3V0ZUluZm8gPSB0aGlzLnBhcnNlUm91dGVJbmZvRnJvbVVybFRyZWUodXJsVHJlZSk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gY3VycmVudFJvdXRlSW5mby5tb2R1bGU7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGN1cnJlbnRSb3V0ZUluZm8uYWN0aW9uO1xuXG4gICAgICAgIHJldHVybiAhY29uZmlnUm91dGVzW21vZHVsZV0gfHwgIWNvbmZpZ1JvdXRlc1ttb2R1bGVdW2FjdGlvbl07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgZ2l2ZW4gcm91dGVJbmZvIG1hdGNoZXMgdGhlIHByb3ZpZGVkIGFjdGl2YXRlZCByb3V0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJvdXRlIHRvIGNoZWNrXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJvdXRlSW5mbyB0byBjaGVja1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBpcyBtYXRjaFxuICAgICAqL1xuICAgIHB1YmxpYyBtYXRjaGVzQWN0aXZlUm91dGUocm91dGU6IEFjdGl2YXRlZFJvdXRlLCByb3V0ZUluZm86IFJvdXRlSW5mbyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB0b0NoZWNrID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdtb2R1bGUnLFxuICAgICAgICAgICAgICAgIG1hcDogKHZhbHVlKTogYW55ID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXBNb2R1bGVUb0Zyb250ZW5kKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdhY3Rpb24nLFxuICAgICAgICAgICAgICAgIG1hcDogKHZhbHVlKTogYW55ID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXBBY3Rpb25Ub0Zyb250RW5kKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdyZWNvcmQnLFxuICAgICAgICAgICAgICAgIG1hcDogKHZhbHVlKTogYW55ID0+IHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgbGV0IG1hdGNoID0gdHJ1ZTtcblxuICAgICAgICB0b0NoZWNrLmZvckVhY2goKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJvdXRlLnNuYXBzaG90LnBhcmFtc1twYXJhbS5uYW1lXSAmJiAhcm91dGVJbmZvW3BhcmFtLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaCA9IG1hdGNoICYmIChyb3V0ZS5zbmFwc2hvdC5wYXJhbXNbcGFyYW0ubmFtZV0gPT09IHBhcmFtLm1hcChyb3V0ZUluZm9bcGFyYW0ubmFtZV0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIEFQSVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQnVpbGQgZnJvbnQgZW5kIHJvdXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjb3JkIGlkXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcm91dGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRSb3V0ZShtb2R1bGU6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIHJlY29yZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbW9kdWxlTmFtZSA9IHRoaXMubWFwTW9kdWxlVG9Gcm9udGVuZChtb2R1bGUpO1xuICAgICAgICBsZXQgcm91dGUgPSBgJHttb2R1bGVOYW1lfWA7XG5cbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9IHRoaXMubWFwQWN0aW9uVG9Gcm9udEVuZChhY3Rpb24pO1xuICAgICAgICAgICAgcm91dGUgKz0gYC8ke2FjdGlvbk5hbWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGAvJHtyZWNvcmR9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBxdWVyeSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVyeVBhcmFtcyBxdWVyeSBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gZXhjbHVkZSBwYXJhbWV0ZXJzIHRvIGV4Y2x1ZGVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBxdWVyeSBzdHJpbmdcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRRdWVyeVN0cmluZyhxdWVyeVBhcmFtczogUGFyYW1zLCBleGNsdWRlOiBzdHJpbmdbXSA9IFtdKTogc3RyaW5nIHtcblxuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcblxuXG4gICAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKS5mb3JFYWNoKChwYXJhbSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoZXhjbHVkZS5pbmNsdWRlcyhwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlQYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgcGFyYW1zID0gcGFyYW1zLnNldChwYXJhbSwgdmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocGFyYW1zLmtleXMoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwIGxlZ2FjeSBtb2R1bGUgbmFtZSB0byBmcm9udGVuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBsZWdhY3kgbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGZyb250ZW5kIG5hbWVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbWFwTW9kdWxlVG9Gcm9udGVuZChtb2R1bGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZU5hbWVNYXBwZXIudG9Gcm9udGVuZChtb2R1bGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcCBsZWdhY3kgYWN0aW9uIG5hbWUgdG8gZnJvbnRlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gbGVnYWN5IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBmcm9udGVuZCBuYW1lXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1hcEFjdGlvblRvRnJvbnRFbmQoYWN0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25OYW1lTWFwcGVyLnRvRnJvbnRlbmQoYWN0aW9uKTtcbiAgICB9XG5cbn1cbiJdfQ==