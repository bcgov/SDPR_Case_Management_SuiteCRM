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
class BaseActionManager {
    constructor() {
        this.actions = {
            edit: {},
            create: {},
            list: {},
            detail: {},
            massupdate: {},
            filter: {}
        };
    }
    run(action, mode, data) {
        if (!this.actions || !this.actions[mode] || !this.actions[mode][action.key]) {
            return;
        }
        this.actions[mode][action.key].run(data, action);
    }
    getHandler(action, mode) {
        let handlerKey = action.key;
        if (action && action.asyncProcess) {
            handlerKey = 'async-process';
        }
        if (!this.actions || !this.actions[mode] || !this.actions[mode][handlerKey]) {
            return null;
        }
        return this.actions[mode][handlerKey];
    }
    addHandler(action, mode, handler) {
        if (!this.actions[mode]) {
            this.actions[mode] = {};
        }
        this.actions[mode][action.key] = handler;
    }
    static { this.ɵfac = function BaseActionManager_Factory(t) { return new (t || BaseActionManager)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BaseActionManager, factory: BaseActionManager.ɵfac, providedIn: 'root' }); }
}
export { BaseActionManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseActionManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUd6QyxNQUdhLGlCQUFpQjtJQUg5QjtRQUtJLFlBQU8sR0FBMkM7WUFDOUMsSUFBSSxFQUFFLEVBQXlCO1lBQy9CLE1BQU0sRUFBRSxFQUF5QjtZQUNqQyxJQUFJLEVBQUUsRUFBeUI7WUFDL0IsTUFBTSxFQUFFLEVBQXlCO1lBQ2pDLFVBQVUsRUFBRSxFQUF5QjtZQUNyQyxNQUFNLEVBQUUsRUFBeUI7U0FDcEMsQ0FBQztLQWlDTDtJQS9CRyxHQUFHLENBQUMsTUFBYyxFQUFFLElBQWMsRUFBRSxJQUFPO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pFLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFjLEVBQUUsSUFBYztRQUNyQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBRTVCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDL0IsVUFBVSxHQUFHLGVBQWUsQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekUsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQWMsRUFBRSxJQUFjLEVBQUUsT0FBeUI7UUFFaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUF5QixDQUFDO1NBRWxEO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQzdDLENBQUM7a0ZBekNRLGlCQUFpQjt1RUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGZCxNQUFNOztTQUVULGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uLCBBY3Rpb25EYXRhLCBBY3Rpb25IYW5kbGVyLCBBY3Rpb25IYW5kbGVyTWFwLCBBY3Rpb25NYW5hZ2VyLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQmFzZUFjdGlvbk1hbmFnZXI8RCBleHRlbmRzIEFjdGlvbkRhdGE+IGltcGxlbWVudHMgQWN0aW9uTWFuYWdlcjxEPiB7XG5cbiAgICBhY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IEFjdGlvbkhhbmRsZXJNYXA8RD4gfSA9IHtcbiAgICAgICAgZWRpdDoge30gYXMgQWN0aW9uSGFuZGxlck1hcDxEPixcbiAgICAgICAgY3JlYXRlOiB7fSBhcyBBY3Rpb25IYW5kbGVyTWFwPEQ+LFxuICAgICAgICBsaXN0OiB7fSBhcyBBY3Rpb25IYW5kbGVyTWFwPEQ+LFxuICAgICAgICBkZXRhaWw6IHt9IGFzIEFjdGlvbkhhbmRsZXJNYXA8RD4sXG4gICAgICAgIG1hc3N1cGRhdGU6IHt9IGFzIEFjdGlvbkhhbmRsZXJNYXA8RD4sXG4gICAgICAgIGZpbHRlcjoge30gYXMgQWN0aW9uSGFuZGxlck1hcDxEPlxuICAgIH07XG5cbiAgICBydW4oYWN0aW9uOiBBY3Rpb24sIG1vZGU6IFZpZXdNb2RlLCBkYXRhOiBEKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5hY3Rpb25zIHx8ICF0aGlzLmFjdGlvbnNbbW9kZV0gfHwgIXRoaXMuYWN0aW9uc1ttb2RlXVthY3Rpb24ua2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3Rpb25zW21vZGVdW2FjdGlvbi5rZXldLnJ1bihkYXRhLCBhY3Rpb24pO1xuICAgIH1cblxuICAgIGdldEhhbmRsZXIoYWN0aW9uOiBBY3Rpb24sIG1vZGU6IFZpZXdNb2RlKTogQWN0aW9uSGFuZGxlcjxEPiB7XG4gICAgICAgIGxldCBoYW5kbGVyS2V5ID0gYWN0aW9uLmtleTtcblxuICAgICAgICBpZiAoYWN0aW9uICYmIGFjdGlvbi5hc3luY1Byb2Nlc3MpIHtcbiAgICAgICAgICAgIGhhbmRsZXJLZXkgPSAnYXN5bmMtcHJvY2Vzcyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuYWN0aW9ucyB8fCAhdGhpcy5hY3Rpb25zW21vZGVdIHx8ICF0aGlzLmFjdGlvbnNbbW9kZV1baGFuZGxlcktleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uc1ttb2RlXVtoYW5kbGVyS2V5XTtcbiAgICB9XG5cbiAgICBhZGRIYW5kbGVyKGFjdGlvbjogQWN0aW9uLCBtb2RlOiBWaWV3TW9kZSwgaGFuZGxlcjogQWN0aW9uSGFuZGxlcjxEPikge1xuXG4gICAgICAgIGlmICghdGhpcy5hY3Rpb25zW21vZGVdKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNbbW9kZV0gPSB7fSBhcyBBY3Rpb25IYW5kbGVyTWFwPEQ+O1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGlvbnNbbW9kZV1bYWN0aW9uLmtleV0gPSBoYW5kbGVyO1xuICAgIH1cbn1cbiJdfQ==