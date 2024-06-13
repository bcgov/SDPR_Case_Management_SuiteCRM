import * as i0 from "@angular/core";
export declare class BaseRouteService {
    constructor();
    /**
     * Calculate Base Route
     *
     * @returns {string}
     * @param url
     */
    calculateRoute(url: any): string;
    /**
     * Append auth path
     * @param url
     */
    appendNativeAuth(url: string): string;
    /**
     * Remove native auth from path name
     */
    removeNativeAuth(): string;
    /**
     * Is native auth
     */
    isNativeAuth(): boolean;
    /**
     * Get native auth logout url
     */
    getNativeOutLogoutUrl(): string;
    /**
     * Is logged out page
     */
    isLoggedOutPath(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseRouteService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BaseRouteService>;
}
