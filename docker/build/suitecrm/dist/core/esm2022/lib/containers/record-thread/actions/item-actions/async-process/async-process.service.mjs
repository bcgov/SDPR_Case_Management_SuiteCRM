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
import { ALL_VIEW_MODES } from 'common';
import { RecordThreadItemActionHandler } from '../record-thread-item.action';
import * as i0 from "@angular/core";
class AsyncProcessRecordThreadItemAction extends RecordThreadItemActionHandler {
    constructor() {
        super();
        this.key = 'async-process';
        this.modes = ALL_VIEW_MODES;
    }
    run(data) {
    }
    shouldDisplay(data) {
        const defaultAcls = data?.action?.acl ?? [];
        if (!defaultAcls.length) {
            return true;
        }
        return this.checkRecordAccess(data, defaultAcls);
    }
    static { this.ɵfac = function AsyncProcessRecordThreadItemAction_Factory(t) { return new (t || AsyncProcessRecordThreadItemAction)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AsyncProcessRecordThreadItemAction, factory: AsyncProcessRecordThreadItemAction.ɵfac, providedIn: 'root' }); }
}
export { AsyncProcessRecordThreadItemAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AsyncProcessRecordThreadItemAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMtcHJvY2Vzcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvcmVjb3JkLXRocmVhZC9hY3Rpb25zL2l0ZW0tYWN0aW9ucy9hc3luYy1wcm9jZXNzL2FzeW5jLXByb2Nlc3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3RDLE9BQU8sRUFBNkIsNkJBQTZCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7QUFFdkcsTUFHYSxrQ0FBbUMsU0FBUSw2QkFBNkI7SUFLakY7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUpaLFFBQUcsR0FBRyxlQUFlLENBQUM7UUFDdEIsVUFBSyxHQUFHLGNBQWMsQ0FBQztJQUl2QixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQWdDO0lBQ3BDLENBQUM7SUFFRCxhQUFhLENBQUMsSUFBZ0M7UUFDMUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQzttR0FuQlEsa0NBQWtDO3VFQUFsQyxrQ0FBa0MsV0FBbEMsa0NBQWtDLG1CQUYvQixNQUFNOztTQUVULGtDQUFrQzt1RkFBbEMsa0NBQWtDO2NBSDlDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QUxMX1ZJRVdfTU9ERVN9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1BY3Rpb25EYXRhLCBSZWNvcmRUaHJlYWRJdGVtQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vcmVjb3JkLXRocmVhZC1pdGVtLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXN5bmNQcm9jZXNzUmVjb3JkVGhyZWFkSXRlbUFjdGlvbiBleHRlbmRzIFJlY29yZFRocmVhZEl0ZW1BY3Rpb25IYW5kbGVyIHtcblxuICAgIGtleSA9ICdhc3luYy1wcm9jZXNzJztcbiAgICBtb2RlcyA9IEFMTF9WSUVXX01PREVTO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IFJlY29yZFRocmVhZEl0ZW1BY3Rpb25EYXRhKTogdm9pZCB7XG4gICAgfVxuXG4gICAgc2hvdWxkRGlzcGxheShkYXRhOiBSZWNvcmRUaHJlYWRJdGVtQWN0aW9uRGF0YSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBkZWZhdWx0QWNscyA9IGRhdGE/LmFjdGlvbj8uYWNsID8/IFtdO1xuICAgICAgICBpZiAoIWRlZmF1bHRBY2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1JlY29yZEFjY2VzcyhkYXRhLCBkZWZhdWx0QWNscyk7XG4gICAgfVxufVxuIl19