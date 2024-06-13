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
import * as i0 from "@angular/core";
class LocalStorageService {
    constructor() {
        this.storageKey = 'scrm-session-storage';
        this.stickyStorageKey = 'scrm-sticky-session-storage';
    }
    clear() {
        this.getLocalStorage().removeItem(this.storageKey);
        const sticky = this.getLocalStorage().getItem(this.stickyStorageKey);
        if (sticky) {
            this.getLocalStorage().setItem(this.storageKey, sticky);
        }
    }
    set(key, data, sticky = false) {
        this.store(this.storageKey, key, data);
        if (sticky) {
            this.store(this.stickyStorageKey, key, data);
        }
    }
    store(storageKey, key, data) {
        const storeJson = this.getLocalStorage().getItem(storageKey);
        let store = {};
        if (storeJson) {
            store = JSON.parse(storeJson);
        }
        store[key] = data;
        this.getLocalStorage().setItem(storageKey, JSON.stringify(store));
    }
    get(key) {
        const storeJson = this.getLocalStorage().getItem(this.storageKey);
        let store = {};
        if (storeJson) {
            store = JSON.parse(storeJson);
        }
        return store[key];
    }
    getLocalStorage() {
        return localStorage;
    }
    static { this.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' }); }
}
export { LocalStorageService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocalStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUV6QyxNQUdhLG1CQUFtQjtJQUs1QjtRQUhVLGVBQVUsR0FBRyxzQkFBc0IsQ0FBQztRQUNwQyxxQkFBZ0IsR0FBRyw2QkFBNkIsQ0FBQztJQUczRCxDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFckUsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxJQUFTLEVBQUUsTUFBTSxHQUFHLEtBQUs7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV2QyxJQUFJLE1BQU0sRUFBRTtZQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFFUyxLQUFLLENBQUMsVUFBa0IsRUFBRSxHQUFXLEVBQUUsSUFBUztRQUN0RCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVmLElBQUksU0FBUyxFQUFFO1lBQ1gsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7UUFFRCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRWxCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDWCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFZixJQUFJLFNBQVMsRUFBRTtZQUNYLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVTLGVBQWU7UUFDckIsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztvRkFuRFEsbUJBQW1CO3VFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZoQixNQUFNOztTQUVULG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBSC9CLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcblxuICAgIHByb3RlY3RlZCBzdG9yYWdlS2V5ID0gJ3Njcm0tc2Vzc2lvbi1zdG9yYWdlJztcbiAgICBwcm90ZWN0ZWQgc3RpY2t5U3RvcmFnZUtleSA9ICdzY3JtLXN0aWNreS1zZXNzaW9uLXN0b3JhZ2UnO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2V0TG9jYWxTdG9yYWdlKCkucmVtb3ZlSXRlbSh0aGlzLnN0b3JhZ2VLZXkpO1xuICAgICAgICBjb25zdCBzdGlja3kgPSB0aGlzLmdldExvY2FsU3RvcmFnZSgpLmdldEl0ZW0odGhpcy5zdGlja3lTdG9yYWdlS2V5KTtcblxuICAgICAgICBpZiAoc3RpY2t5KSB7XG4gICAgICAgICAgICB0aGlzLmdldExvY2FsU3RvcmFnZSgpLnNldEl0ZW0odGhpcy5zdG9yYWdlS2V5LCBzdGlja3kpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0KGtleTogc3RyaW5nLCBkYXRhOiBhbnksIHN0aWNreSA9IGZhbHNlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUodGhpcy5zdG9yYWdlS2V5LCBrZXksIGRhdGEpO1xuXG4gICAgICAgIGlmIChzdGlja3kpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUodGhpcy5zdGlja3lTdG9yYWdlS2V5LCBrZXksIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0b3JlKHN0b3JhZ2VLZXk6IHN0cmluZywga2V5OiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgICAgICBjb25zdCBzdG9yZUpzb24gPSB0aGlzLmdldExvY2FsU3RvcmFnZSgpLmdldEl0ZW0oc3RvcmFnZUtleSk7XG4gICAgICAgIGxldCBzdG9yZSA9IHt9O1xuXG4gICAgICAgIGlmIChzdG9yZUpzb24pIHtcbiAgICAgICAgICAgIHN0b3JlID0gSlNPTi5wYXJzZShzdG9yZUpzb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RvcmVba2V5XSA9IGRhdGE7XG5cbiAgICAgICAgdGhpcy5nZXRMb2NhbFN0b3JhZ2UoKS5zZXRJdGVtKHN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHN0b3JlKSk7XG4gICAgfVxuXG4gICAgZ2V0KGtleTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgY29uc3Qgc3RvcmVKc29uID0gdGhpcy5nZXRMb2NhbFN0b3JhZ2UoKS5nZXRJdGVtKHRoaXMuc3RvcmFnZUtleSk7XG4gICAgICAgIGxldCBzdG9yZSA9IHt9O1xuXG4gICAgICAgIGlmIChzdG9yZUpzb24pIHtcbiAgICAgICAgICAgIHN0b3JlID0gSlNPTi5wYXJzZShzdG9yZUpzb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0b3JlW2tleV07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldExvY2FsU3RvcmFnZSgpOiBTdG9yYWdlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcbiAgICB9XG59XG4iXX0=