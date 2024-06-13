import { ActivatedRoute, Params, UrlSegment, UrlTree } from '@angular/router';
import { ModuleNameMapper } from '../module-name-mapper/module-name-mapper.service';
import { ActionNameMapper } from '../action-name-mapper/action-name-mapper.service';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
export interface RouteInfo {
    module?: string;
    action?: string;
    record?: string;
    params?: Params;
}
export declare class RouteConverter {
    private moduleNameMapper;
    private actionNameMapper;
    private systemConfigStore;
    constructor(moduleNameMapper: ModuleNameMapper, actionNameMapper: ActionNameMapper, systemConfigStore: SystemConfigStore);
    /**
     * Public Api
     */
    /**
     * Converts legacyLink to front end link. Includes the /#/.
     *
     * @param {string} legacyLink legacy url
     * @returns {string} frontend path
     */
    toFrontEndLink(legacyLink: string): string;
    /**
     * Converts legacyLink to front end route
     *
     * @param {string} legacyLink legacy url
     * @returns {string} frontend path
     */
    toFrontEndRoute(legacyLink: string): string;
    /**
     * Build legacy link from router information
     *
     * @param {object} params route params
     * @param {object} queryParams route query params
     * @returns {string} legacy url
     */
    toLegacy(params: Params, queryParams: Params): string;
    /**
     * Parse legacy link
     *
     * @param {string} legacyLink to parse
     * @returns {object} route info
     */
    parse(legacyLink: string): RouteInfo;
    /**
     * Map route url to RouteInfo
     *
     * @returns {object} RouteInfo of the current URL
     * @description Parses route information from ActivatedRouteSnapshot to RouteInfo object
     * @param {UrlSegment[]} urlSegment from the Router object
     */
    parseRouteURL(urlSegment: UrlSegment[]): RouteInfo;
    /**
     * check if the current route is a classic view route
     *
     * @returns {object} RouteInfo
     * @description if the current url is a classic view url; so redirect back to the same view
     * @param {UrlTree} urlTree of current route
     */
    parseRouteInfoFromUrlTree(urlTree: UrlTree): RouteInfo;
    /**
     * check if the current route is a classic view route
     *
     * @returns {boolean} true/false
     * @param {UrlTree} urlTree of the route
     * @description if the current url is a classic view url; so redirect back to the same view
     */
    isClassicViewRoute(urlTree: UrlTree): boolean;
    /**
     * Check if given routeInfo matches the provided activated route
     *
     * @param {object} route to check
     * @param {object} routeInfo to check
     * @returns {boolean} is match
     */
    matchesActiveRoute(route: ActivatedRoute, routeInfo: RouteInfo): boolean;
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
    protected buildRoute(module: string, action: string, record: string): string;
    /**
     * Build query string
     *
     * @param {object} queryParams query parameters
     * @param {string[]} exclude parameters to exclude
     * @returns {string} query string
     */
    protected buildQueryString(queryParams: Params, exclude?: string[]): string;
    /**
     * Map legacy module name to frontend
     *
     * @param {string} module legacy name
     * @returns {string} frontend name
     */
    protected mapModuleToFrontend(module: string): string;
    /**
     * Map legacy action name to frontend
     *
     * @param {string} action legacy name
     * @returns {string} frontend name
     */
    protected mapActionToFrontEnd(action: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<RouteConverter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RouteConverter>;
}
