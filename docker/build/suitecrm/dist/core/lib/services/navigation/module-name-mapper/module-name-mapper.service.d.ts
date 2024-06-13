import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { StringMap } from 'common';
import * as i0 from "@angular/core";
export declare class ModuleNameMapper {
    private systemConfig;
    constructor(systemConfig: SystemConfigStore);
    /**
     * Public Api
     */
    /**
     * Map the legacy name to frontend
     *
     * @param {string} module the module name
     * @returns {string} frontend name
     */
    toFrontend(module: string): string;
    /**
     * Map the frontend name to legacy
     *
     * @param {string} module the module name
     * @returns {string} frontend name
     */
    toLegacy(module: string): string;
    /**
     * Check if module is valid
     *
     * @param {string} module the module name
     * @returns {boolean} is valid
     */
    isValid(module: string): boolean;
    /**
     * Internal API
     */
    /**
     * Get the legacy to frontend map
     *
     * @returns {{}} map
     */
    protected getLegacyToFrontendMap(): StringMap;
    /**
     * Get the frontend to legacy map
     *
     * @returns {{}} map
     */
    protected getFrontendToLegacyMap(): StringMap;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModuleNameMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModuleNameMapper>;
}
