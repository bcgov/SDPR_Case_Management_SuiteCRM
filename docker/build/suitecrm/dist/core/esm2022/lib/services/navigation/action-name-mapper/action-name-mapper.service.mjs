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
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/system-config/system-config.store";
class ActionNameMapper {
    constructor(systemConfig) {
        this.systemConfig = systemConfig;
    }
    /**
     * Public Api
     */
    /**
     * Map the legacy name to frontend
     *
     * @param {string} action the action name
     * @returns {string} frontend name
     */
    toFrontend(action) {
        const map = this.getLegacyToFrontendMap();
        if (!map[action]) {
            return action;
        }
        return map[action];
    }
    /**
     * Map the frontend name to legacy
     *
     * @param {string} action the action name
     * @returns {string} frontend name
     */
    toLegacy(action) {
        const map = this.getFrontendToLegacyMap();
        if (!map[action]) {
            return action;
        }
        return map[action];
    }
    /**
     * Check if action is valid
     *
     * @param {string} action the action name
     * @returns {boolean} is valid
     */
    isValid(action) {
        const map = this.getFrontendToLegacyMap();
        let valid = false;
        if (map[action]) {
            valid = true;
        }
        return valid;
    }
    /**
     * Internal API
     */
    /**
     * Get the legacy to frontend map
     *
     * @returns {{}} legacy to frontend map
     */
    getLegacyToFrontendMap() {
        return this.systemConfig.getConfigValue('action_name_map');
    }
    /**
     * Get the frontend to legacy map
     *
     * @returns {{}} frontend to legacy map
     */
    getFrontendToLegacyMap() {
        const map = this.systemConfig.getConfigValue('action_name_map');
        const invertedMap = {};
        Object.keys(map).forEach((legacyName) => {
            const frontendName = map[legacyName];
            invertedMap[frontendName] = legacyName;
        });
        return invertedMap;
    }
    static { this.ɵfac = function ActionNameMapper_Factory(t) { return new (t || ActionNameMapper)(i0.ɵɵinject(i1.SystemConfigStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ActionNameMapper, factory: ActionNameMapper.ɵfac, providedIn: 'root' }); }
}
export { ActionNameMapper };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionNameMapper, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLW5hbWUtbWFwcGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbmF2aWdhdGlvbi9hY3Rpb24tbmFtZS1tYXBwZXIvYWN0aW9uLW5hbWUtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0RBQWtELENBQUM7OztBQUduRixNQUNhLGdCQUFnQjtJQUV6QixZQUFvQixZQUErQjtRQUEvQixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7SUFDbkQsQ0FBQztJQUVEOztPQUVHO0lBRUg7Ozs7O09BS0c7SUFDSSxVQUFVLENBQUMsTUFBYztRQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUUxQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFDO1lBQ2IsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFFRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxRQUFRLENBQUMsTUFBYztRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUUxQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFDO1lBQ2IsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFFRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxPQUFPLENBQUMsTUFBYztRQUN6QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUMxQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbEIsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDYixLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUdEOztPQUVHO0lBRUg7Ozs7T0FJRztJQUNPLHNCQUFzQjtRQUM1QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxzQkFBc0I7UUFDNUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRSxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUNwQyxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckMsV0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7aUZBdkZRLGdCQUFnQjt1RUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQixtQkFESixNQUFNOztTQUNsQixnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUQ1QixVQUFVO2VBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7U3RyaW5nTWFwfSBmcm9tICdjb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25OYW1lTWFwcGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3lzdGVtQ29uZmlnOiBTeXN0ZW1Db25maWdTdG9yZSkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBBcGlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIE1hcCB0aGUgbGVnYWN5IG5hbWUgdG8gZnJvbnRlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gdGhlIGFjdGlvbiBuYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ30gZnJvbnRlbmQgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyB0b0Zyb250ZW5kKGFjdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZXRMZWdhY3lUb0Zyb250ZW5kTWFwKCk7XG5cbiAgICAgICAgaWYgKCFtYXBbYWN0aW9uXSl7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hcFthY3Rpb25dO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcCB0aGUgZnJvbnRlbmQgbmFtZSB0byBsZWdhY3lcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gdGhlIGFjdGlvbiBuYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ30gZnJvbnRlbmQgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyB0b0xlZ2FjeShhY3Rpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuZ2V0RnJvbnRlbmRUb0xlZ2FjeU1hcCgpO1xuXG4gICAgICAgIGlmICghbWFwW2FjdGlvbl0pe1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXBbYWN0aW9uXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhY3Rpb24gaXMgdmFsaWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gdGhlIGFjdGlvbiBuYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGlzIHZhbGlkXG4gICAgICovXG4gICAgcHVibGljIGlzVmFsaWQoYWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZXRGcm9udGVuZFRvTGVnYWN5TWFwKCk7XG4gICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChtYXBbYWN0aW9uXSkge1xuICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgQVBJXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxlZ2FjeSB0byBmcm9udGVuZCBtYXBcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt7fX0gbGVnYWN5IHRvIGZyb250ZW5kIG1hcFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRMZWdhY3lUb0Zyb250ZW5kTWFwKCk6IFN0cmluZ01hcCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUNvbmZpZy5nZXRDb25maWdWYWx1ZSgnYWN0aW9uX25hbWVfbWFwJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmcm9udGVuZCB0byBsZWdhY3kgbWFwXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7e319IGZyb250ZW5kIHRvIGxlZ2FjeSBtYXBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0RnJvbnRlbmRUb0xlZ2FjeU1hcCgpOiBTdHJpbmdNYXAge1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLnN5c3RlbUNvbmZpZy5nZXRDb25maWdWYWx1ZSgnYWN0aW9uX25hbWVfbWFwJyk7XG4gICAgICAgIGNvbnN0IGludmVydGVkTWFwID0ge307XG5cbiAgICAgICAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKChsZWdhY3lOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmcm9udGVuZE5hbWUgPSBtYXBbbGVnYWN5TmFtZV07XG4gICAgICAgICAgICBpbnZlcnRlZE1hcFtmcm9udGVuZE5hbWVdID0gbGVnYWN5TmFtZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGludmVydGVkTWFwO1xuICAgIH1cbn1cbiJdfQ==