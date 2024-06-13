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
import { createNgModule, Injectable } from '@angular/core';
import { forkJoin, from, isObservable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { isFalse } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../store/system-config/system-config.store";
class ExtensionLoader {
    constructor(systemConfigStore) {
        this.systemConfigStore = systemConfigStore;
    }
    /**
     * Load all extensions
     *
     * @param {object} injector Injector
     */
    load(injector) {
        const extensions = this.systemConfigStore.getConfigValue('extensions');
        const extensionModules$ = {};
        Object.keys(extensions).forEach(extensionName => {
            if (!extensions[extensionName]) {
                return;
            }
            const config = extensions[extensionName];
            if (!config.remoteEntry || !config.remoteName) {
                return;
            }
            if (!config.enabled || isFalse(config.enabled)) {
                return;
            }
            extensionModules$[extensionName] = this.loadExtension(config, injector);
        });
        if (Object.keys(extensionModules$).length < 1) {
            return of({});
        }
        //TODO: Correct here
        return forkJoin(extensionModules$);
    }
    /**
     * Load single extension
     *
     * @param {object} config ExtensionConfig
     * @param {object} injector Injector
     */
    loadExtension(config, injector) {
        const promise = () => loadRemoteModule({
            type: 'module',
            remoteEntry: config.remoteEntry,
            exposedModule: './Module'
        }).then(m => m.ExtensionModule);
        return this.loadModule(promise, injector);
    }
    /**
     * Check if object is a promise
     * @param {} obj promise
     * @returns {boolean} isPromise
     */
    isPromise(obj) {
        return !!obj && typeof obj.then === 'function';
    }
    /**
     * Wrap into observable
     *
     * @param {object} value to wrap
     * @returns {object} observable
     */
    wrapIntoObservable(value) {
        if (isObservable(value)) {
            // @ts-ignore
            return value;
        }
        if (this.isPromise(value)) {
            // @ts-ignore
            return from(Promise.resolve(value));
        }
        // @ts-ignore
        return of(value);
    }
    /**
     * Load module factory and return observable
     * @param {function} loadChildren
     */
    loadModule(loadChildren, injector) {
        return this.wrapIntoObservable(loadChildren()).pipe(map((module) => {
            return createNgModule(module, injector);
        }));
    }
    static { this.ɵfac = function ExtensionLoader_Factory(t) { return new (t || ExtensionLoader)(i0.ɵɵinject(i1.SystemConfigStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ExtensionLoader, factory: ExtensionLoader.ɵfac, providedIn: 'root' }); }
}
export { ExtensionLoader };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExtensionLoader, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2V4dGVuc2lvbnMvZXh0ZW5zaW9uLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsY0FBYyxFQUFFLFVBQVUsRUFBOEIsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUVsRSxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDL0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFFBQVEsQ0FBQzs7O0FBWS9CLE1BR2EsZUFBZTtJQUV4QixZQUNjLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBRWxELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksSUFBSSxDQUFDLFFBQWtCO1FBRTFCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdkUsTUFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFFN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDNUIsT0FBTzthQUNWO1lBRUQsTUFBTSxNQUFNLEdBQW9CLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUcxRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQzNDLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzVDLE9BQU87YUFDVjtZQUVELGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVFLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMzQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQjtRQUVELG9CQUFvQjtRQUVwQixPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLGFBQWEsQ0FBQyxNQUF1QixFQUFFLFFBQWtCO1FBQzVELE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQ25DLElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXO1lBQy9CLGFBQWEsRUFBRSxVQUFVO1NBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFaEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLFNBQVMsQ0FBVSxHQUFRO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO0lBQ25ELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLGtCQUFrQixDQUFJLEtBQXFDO1FBQ2pFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLGFBQWE7WUFDYixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixhQUFhO1lBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsYUFBYTtRQUNiLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7O09BR0c7SUFDTyxVQUFVLENBQUMsWUFBa0MsRUFBRSxRQUFrQjtRQUN2RSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFpQixFQUFFLEVBQUU7WUFDMUUsT0FBTyxjQUFjLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO2dGQXBHUSxlQUFlO3VFQUFmLGVBQWUsV0FBZixlQUFlLG1CQUZaLE1BQU07O1NBRVQsZUFBZTt1RkFBZixlQUFlO2NBSDNCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtjcmVhdGVOZ01vZHVsZSwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE5nTW9kdWxlUmVmLCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Zm9ya0pvaW4sIGZyb20sIGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtMb2FkQ2hpbGRyZW5DYWxsYmFja30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2xvYWRSZW1vdGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyLWFyY2hpdGVjdHMvbW9kdWxlLWZlZGVyYXRpb24tcnVudGltZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtpc0ZhbHNlfSBmcm9tICdjb21tb24nO1xuXG5pbnRlcmZhY2UgRXh0ZW5zaW9uQ29uZmlnIHtcbiAgICByZW1vdGVFbnRyeT86IHN0cmluZyxcbiAgICByZW1vdGVOYW1lPzogc3RyaW5nLFxuICAgIGVuYWJsZWQ/OiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kdWxlUmVmTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBOZ01vZHVsZVJlZjxhbnk+XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXh0ZW5zaW9uTG9hZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgYWxsIGV4dGVuc2lvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpbmplY3RvciBJbmplY3RvclxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKGluamVjdG9yOiBJbmplY3Rvcik6IE9ic2VydmFibGU8TW9kdWxlUmVmTWFwPiB7XG5cbiAgICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUuZ2V0Q29uZmlnVmFsdWUoJ2V4dGVuc2lvbnMnKTtcblxuICAgICAgICBjb25zdCBleHRlbnNpb25Nb2R1bGVzJCA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGV4dGVuc2lvbnMpLmZvckVhY2goZXh0ZW5zaW9uTmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAoIWV4dGVuc2lvbnNbZXh0ZW5zaW9uTmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZzogRXh0ZW5zaW9uQ29uZmlnID0gZXh0ZW5zaW9uc1tleHRlbnNpb25OYW1lXTtcblxuXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5yZW1vdGVFbnRyeSB8fCAhY29uZmlnLnJlbW90ZU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghY29uZmlnLmVuYWJsZWQgfHwgaXNGYWxzZShjb25maWcuZW5hYmxlZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV4dGVuc2lvbk1vZHVsZXMkW2V4dGVuc2lvbk5hbWVdID0gdGhpcy5sb2FkRXh0ZW5zaW9uKGNvbmZpZywgaW5qZWN0b3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZXh0ZW5zaW9uTW9kdWxlcyQpLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBvZih7fSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1RPRE86IENvcnJlY3QgaGVyZVxuXG4gICAgICAgIHJldHVybiBmb3JrSm9pbihleHRlbnNpb25Nb2R1bGVzJCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBzaW5nbGUgZXh0ZW5zaW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIEV4dGVuc2lvbkNvbmZpZ1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpbmplY3RvciBJbmplY3RvclxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkRXh0ZW5zaW9uKGNvbmZpZzogRXh0ZW5zaW9uQ29uZmlnLCBpbmplY3RvcjogSW5qZWN0b3IpOiBPYnNlcnZhYmxlPE5nTW9kdWxlUmVmPGFueT4+IHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9ICgpID0+IGxvYWRSZW1vdGVNb2R1bGUoe1xuICAgICAgICAgICAgdHlwZTogJ21vZHVsZScsXG4gICAgICAgICAgICByZW1vdGVFbnRyeTogY29uZmlnLnJlbW90ZUVudHJ5LFxuICAgICAgICAgICAgZXhwb3NlZE1vZHVsZTogJy4vTW9kdWxlJ1xuICAgICAgICB9KS50aGVuKG0gPT4gbS5FeHRlbnNpb25Nb2R1bGUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRNb2R1bGUocHJvbWlzZSwgaW5qZWN0b3IpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIG9iamVjdCBpcyBhIHByb21pc2VcbiAgICAgKiBAcGFyYW0ge30gb2JqIHByb21pc2VcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gaXNQcm9taXNlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzUHJvbWlzZTxUID0gYW55PihvYmo6IGFueSk6IG9iaiBpcyBQcm9taXNlPFQ+IHtcbiAgICAgICAgcmV0dXJuICEhb2JqICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwIGludG8gb2JzZXJ2YWJsZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIHRvIHdyYXBcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBvYnNlcnZhYmxlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHdyYXBJbnRvT2JzZXJ2YWJsZTxUPih2YWx1ZTogVCB8IFByb21pc2U8VD4gfCBPYnNlcnZhYmxlPFQ+KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIGlmIChpc09ic2VydmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1Byb21pc2UodmFsdWUpKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICByZXR1cm4gZnJvbShQcm9taXNlLnJlc29sdmUodmFsdWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIG9mKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIG1vZHVsZSBmYWN0b3J5IGFuZCByZXR1cm4gb2JzZXJ2YWJsZVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxvYWRDaGlsZHJlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBsb2FkTW9kdWxlKGxvYWRDaGlsZHJlbjogTG9hZENoaWxkcmVuQ2FsbGJhY2ssIGluamVjdG9yOiBJbmplY3Rvcik6IE9ic2VydmFibGU8TmdNb2R1bGVSZWY8YW55Pj4ge1xuICAgICAgICByZXR1cm4gdGhpcy53cmFwSW50b09ic2VydmFibGUobG9hZENoaWxkcmVuKCkpLnBpcGUobWFwKChtb2R1bGU6IFR5cGU8YW55PikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU5nTW9kdWxlKG1vZHVsZSwgaW5qZWN0b3IpO1xuICAgICAgICB9KSk7XG4gICAgfVxufVxuIl19