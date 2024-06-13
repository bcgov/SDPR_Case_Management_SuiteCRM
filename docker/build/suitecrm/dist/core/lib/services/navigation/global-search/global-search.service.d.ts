import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class GlobalSearch {
    protected router: Router;
    constructor(router: Router);
    /**
     * Public Api
     */
    /**
     * Navigate to global search
     *
     * @param {string} searchTerm to search
     * @returns {object} Promise<boolean>
     */
    navigateToSearch(searchTerm: string): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalSearch, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GlobalSearch>;
}
