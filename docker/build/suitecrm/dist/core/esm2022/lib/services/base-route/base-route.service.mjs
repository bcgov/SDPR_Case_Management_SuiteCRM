/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2022 SalesAgility Ltd.
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
import * as i0 from "@angular/core";
class BaseRouteService {
    constructor() {
    }
    /**
     * Calculate Base Route
     *
     * @returns {string}
     * @param url
     */
    calculateRoute(url) {
        const path = window.location.pathname;
        if (path.includes('index.php')) {
            url = `${path}/${url}`;
        }
        return url;
    }
    /**
     * Append auth path
     * @param url
     */
    appendNativeAuth(url) {
        const path = window.location.pathname;
        if (path.includes('auth')) {
            url = `auth/${url}`;
        }
        return url;
    }
    /**
     * Remove native auth from path name
     */
    removeNativeAuth() {
        let url = window.location.pathname;
        if (url.includes('/auth')) {
            url = url.replace('/auth', '/');
        }
        url = url.replace('//', '/');
        return url;
    }
    /**
     * Is native auth
     */
    isNativeAuth() {
        const path = window.location.pathname;
        return path.includes('auth');
    }
    /**
     * Get native auth logout url
     */
    getNativeOutLogoutUrl() {
        return `auth/logout`;
    }
    /**
     * Is logged out page
     */
    isLoggedOutPath() {
        const path = window.location.pathname;
        return path.includes('logged-out');
    }
    static { this.ɵfac = function BaseRouteService_Factory(t) { return new (t || BaseRouteService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BaseRouteService, factory: BaseRouteService.ɵfac, providedIn: 'root' }); }
}
export { BaseRouteService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseRouteService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1yb3V0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2Jhc2Utcm91dGUvYmFzZS1yb3V0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFDSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUV6QyxNQUdhLGdCQUFnQjtJQUV6QjtJQUNBLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLGNBQWMsQ0FBQyxHQUFHO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRXRDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM1QixHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7U0FDMUI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRDs7O09BR0c7SUFDSSxnQkFBZ0IsQ0FBQyxHQUFXO1FBQy9CLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRXRDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2QixHQUFHLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBQTtTQUN0QjtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZ0JBQWdCO1FBQ25CLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRW5DLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN2QixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbkM7UUFFRCxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFN0IsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQ7O09BRUc7SUFDSSxZQUFZO1FBQ2YsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFFdEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7T0FFRztJQUNJLHFCQUFxQjtRQUV4QixPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxlQUFlO1FBQ2xCLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRXRDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QyxDQUFDO2lGQXpFUSxnQkFBZ0I7dUVBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmIsTUFBTTs7U0FFVCxnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMiBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmFzZVJvdXRlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgQmFzZSBSb3V0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgcHVibGljIGNhbGN1bGF0ZVJvdXRlKHVybCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgICAgaWYgKHBhdGguaW5jbHVkZXMoJ2luZGV4LnBocCcpKSB7XG4gICAgICAgICAgICB1cmwgPSBgJHtwYXRofS8ke3VybH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kIGF1dGggcGF0aFxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKi9cbiAgICBwdWJsaWMgYXBwZW5kTmF0aXZlQXV0aCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgICAgaWYgKHBhdGguaW5jbHVkZXMoJ2F1dGgnKSkge1xuICAgICAgICAgICAgdXJsID0gYGF1dGgvJHt1cmx9YFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgbmF0aXZlIGF1dGggZnJvbSBwYXRoIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlTmF0aXZlQXV0aCgpOiBzdHJpbmcge1xuICAgICAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgICAgIGlmICh1cmwuaW5jbHVkZXMoJy9hdXRoJykpIHtcbiAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKCcvYXV0aCcsICcvJyk7XG4gICAgICAgIH1cblxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgnLy8nLCAnLycpO1xuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgbmF0aXZlIGF1dGhcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNOYXRpdmVBdXRoKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgICAgIHJldHVybiBwYXRoLmluY2x1ZGVzKCdhdXRoJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG5hdGl2ZSBhdXRoIGxvZ291dCB1cmxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TmF0aXZlT3V0TG9nb3V0VXJsKCk6IHN0cmluZyB7XG5cbiAgICAgICAgcmV0dXJuIGBhdXRoL2xvZ291dGA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgbG9nZ2VkIG91dCBwYWdlXG4gICAgICovXG4gICAgcHVibGljIGlzTG9nZ2VkT3V0UGF0aCgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcblxuICAgICAgICByZXR1cm4gcGF0aC5pbmNsdWRlcygnbG9nZ2VkLW91dCcpO1xuICAgIH1cbn1cbiJdfQ==