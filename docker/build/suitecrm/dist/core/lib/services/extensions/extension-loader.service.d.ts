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
import { Injector, NgModuleRef } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadChildrenCallback } from '@angular/router';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
interface ExtensionConfig {
    remoteEntry?: string;
    remoteName?: string;
    enabled?: boolean;
}
export interface ModuleRefMap {
    [key: string]: NgModuleRef<any>;
}
export declare class ExtensionLoader {
    protected systemConfigStore: SystemConfigStore;
    constructor(systemConfigStore: SystemConfigStore);
    /**
     * Load all extensions
     *
     * @param {object} injector Injector
     */
    load(injector: Injector): Observable<ModuleRefMap>;
    /**
     * Load single extension
     *
     * @param {object} config ExtensionConfig
     * @param {object} injector Injector
     */
    loadExtension(config: ExtensionConfig, injector: Injector): Observable<NgModuleRef<any>>;
    /**
     * Check if object is a promise
     * @param {} obj promise
     * @returns {boolean} isPromise
     */
    protected isPromise<T = any>(obj: any): obj is Promise<T>;
    /**
     * Wrap into observable
     *
     * @param {object} value to wrap
     * @returns {object} observable
     */
    protected wrapIntoObservable<T>(value: T | Promise<T> | Observable<T>): Observable<T>;
    /**
     * Load module factory and return observable
     * @param {function} loadChildren
     */
    protected loadModule(loadChildren: LoadChildrenCallback, injector: Injector): Observable<NgModuleRef<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExtensionLoader, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ExtensionLoader>;
}
export {};
