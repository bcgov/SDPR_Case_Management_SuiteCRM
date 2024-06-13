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
class ModuleNameMapper {
    constructor(systemConfig) {
        this.systemConfig = systemConfig;
    }
    /**
     * Public Api
     */
    /**
     * Map the legacy name to frontend
     *
     * @param {string} module the module name
     * @returns {string} frontend name
     */
    toFrontend(module) {
        const map = this.getLegacyToFrontendMap();
        if (!map || !map[module]) {
            return module;
        }
        return map[module];
    }
    /**
     * Map the frontend name to legacy
     *
     * @param {string} module the module name
     * @returns {string} frontend name
     */
    toLegacy(module) {
        const map = this.getFrontendToLegacyMap();
        if (!map[module]) {
            return module;
        }
        return map[module];
    }
    /**
     * Check if module is valid
     *
     * @param {string} module the module name
     * @returns {boolean} is valid
     */
    isValid(module) {
        const map = this.getFrontendToLegacyMap();
        let valid = false;
        if (map[module]) {
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
     * @returns {{}} map
     */
    getLegacyToFrontendMap() {
        return this.systemConfig.getConfigValue('module_name_map');
    }
    /**
     * Get the frontend to legacy map
     *
     * @returns {{}} map
     */
    getFrontendToLegacyMap() {
        const map = this.systemConfig.getConfigValue('module_name_map');
        const invertedMap = {};
        Object.keys(map).forEach((legacyName) => {
            const frontendName = map[legacyName];
            invertedMap[frontendName] = legacyName;
        });
        return invertedMap;
    }
    static { this.ɵfac = function ModuleNameMapper_Factory(t) { return new (t || ModuleNameMapper)(i0.ɵɵinject(i1.SystemConfigStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModuleNameMapper, factory: ModuleNameMapper.ɵfac, providedIn: 'root' }); }
}
export { ModuleNameMapper };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleNameMapper, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLW5hbWUtbWFwcGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmFtZS1tYXBwZXIvbW9kdWxlLW5hbWUtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0RBQWtELENBQUM7OztBQUduRixNQUNhLGdCQUFnQjtJQUV6QixZQUFvQixZQUErQjtRQUEvQixpQkFBWSxHQUFaLFlBQVksQ0FBbUI7SUFDbkQsQ0FBQztJQUVEOztPQUVHO0lBRUg7Ozs7O09BS0c7SUFDSSxVQUFVLENBQUMsTUFBYztRQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sTUFBTSxDQUFDO1NBQ2pCO1FBRUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksUUFBUSxDQUFDLE1BQWM7UUFDMUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNkLE9BQU8sTUFBTSxDQUFDO1NBQ2pCO1FBRUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksT0FBTyxDQUFDLE1BQWM7UUFDekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDMUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRWxCLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2IsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNoQjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFHRDs7T0FFRztJQUVIOzs7O09BSUc7SUFDTyxzQkFBc0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7OztPQUlHO0lBQ08sc0JBQXNCO1FBQzVCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEUsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDcEMsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JDLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO2lGQXJGUSxnQkFBZ0I7dUVBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBREosTUFBTTs7U0FDbEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FENUIsVUFBVTtlQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge1N0cmluZ01hcH0gZnJvbSAnY29tbW9uJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTW9kdWxlTmFtZU1hcHBlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN5c3RlbUNvbmZpZzogU3lzdGVtQ29uZmlnU3RvcmUpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgQXBpXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBNYXAgdGhlIGxlZ2FjeSBuYW1lIHRvIGZyb250ZW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIHRoZSBtb2R1bGUgbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGZyb250ZW5kIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9Gcm9udGVuZChtb2R1bGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuZ2V0TGVnYWN5VG9Gcm9udGVuZE1hcCgpO1xuICAgICAgICBpZiAoIW1hcCB8fCAhbWFwW21vZHVsZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFwW21vZHVsZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwIHRoZSBmcm9udGVuZCBuYW1lIHRvIGxlZ2FjeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0aGUgbW9kdWxlIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBmcm9udGVuZCBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHRvTGVnYWN5KG1vZHVsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZXRGcm9udGVuZFRvTGVnYWN5TWFwKCk7XG4gICAgICAgIGlmICghbWFwW21vZHVsZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFwW21vZHVsZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgbW9kdWxlIGlzIHZhbGlkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIHRoZSBtb2R1bGUgbmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBpcyB2YWxpZFxuICAgICAqL1xuICAgIHB1YmxpYyBpc1ZhbGlkKG1vZHVsZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuZ2V0RnJvbnRlbmRUb0xlZ2FjeU1hcCgpO1xuICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAobWFwW21vZHVsZV0pIHtcbiAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIEFQSVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsZWdhY3kgdG8gZnJvbnRlbmQgbWFwXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7e319IG1hcFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRMZWdhY3lUb0Zyb250ZW5kTWFwKCk6IFN0cmluZ01hcCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUNvbmZpZy5nZXRDb25maWdWYWx1ZSgnbW9kdWxlX25hbWVfbWFwJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmcm9udGVuZCB0byBsZWdhY3kgbWFwXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7e319IG1hcFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRGcm9udGVuZFRvTGVnYWN5TWFwKCk6IFN0cmluZ01hcCB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuc3lzdGVtQ29uZmlnLmdldENvbmZpZ1ZhbHVlKCdtb2R1bGVfbmFtZV9tYXAnKTtcbiAgICAgICAgY29uc3QgaW52ZXJ0ZWRNYXAgPSB7fTtcblxuICAgICAgICBPYmplY3Qua2V5cyhtYXApLmZvckVhY2goKGxlZ2FjeU5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyb250ZW5kTmFtZSA9IG1hcFtsZWdhY3lOYW1lXTtcbiAgICAgICAgICAgIGludmVydGVkTWFwW2Zyb250ZW5kTmFtZV0gPSBsZWdhY3lOYW1lO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaW52ZXJ0ZWRNYXA7XG4gICAgfVxufVxuIl19