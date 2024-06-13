import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { StringMap } from 'common';
import * as i0 from "@angular/core";
export declare class ActionNameMapper {
    private systemConfig;
    constructor(systemConfig: SystemConfigStore);
    /**
     * Public Api
     */
    /**
     * Map the legacy name to frontend
     *
     * @param {string} action the action name
     * @returns {string} frontend name
     */
    toFrontend(action: string): string;
    /**
     * Map the frontend name to legacy
     *
     * @param {string} action the action name
     * @returns {string} frontend name
     */
    toLegacy(action: string): string;
    /**
     * Check if action is valid
     *
     * @param {string} action the action name
     * @returns {boolean} is valid
     */
    isValid(action: string): boolean;
    /**
     * Internal API
     */
    /**
     * Get the legacy to frontend map
     *
     * @returns {{}} legacy to frontend map
     */
    protected getLegacyToFrontendMap(): StringMap;
    /**
     * Get the frontend to legacy map
     *
     * @returns {{}} frontend to legacy map
     */
    protected getFrontendToLegacyMap(): StringMap;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionNameMapper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ActionNameMapper>;
}
