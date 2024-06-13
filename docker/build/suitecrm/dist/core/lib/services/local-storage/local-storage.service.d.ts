import * as i0 from "@angular/core";
export declare class LocalStorageService {
    protected storageKey: string;
    protected stickyStorageKey: string;
    constructor();
    clear(): void;
    set(key: string, data: any, sticky?: boolean): void;
    protected store(storageKey: string, key: string, data: any): void;
    get(key: string): any;
    protected getLocalStorage(): Storage;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocalStorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocalStorageService>;
}
