/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { RecordThreadListActionHandler } from "../record-thread-list.action";
import * as i0 from "@angular/core";
class AsyncProcessRecordThreadListAction extends RecordThreadListActionHandler {
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
    static { this.ɵfac = function AsyncProcessRecordThreadListAction_Factory(t) { return new (t || AsyncProcessRecordThreadListAction)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AsyncProcessRecordThreadListAction, factory: AsyncProcessRecordThreadListAction.ɵfac, providedIn: 'root' }); }
}
export { AsyncProcessRecordThreadListAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AsyncProcessRecordThreadListAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMtcHJvY2Vzcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvcmVjb3JkLXRocmVhZC9hY3Rpb25zL2xpc3QtYWN0aW9ucy9hc3luYy1wcm9jZXNzL2FzeW5jLXByb2Nlc3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3RDLE9BQU8sRUFBNkIsNkJBQTZCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7QUFFdkcsTUFHYSxrQ0FBbUMsU0FBUSw2QkFBNkI7SUFLakY7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUpaLFFBQUcsR0FBRyxlQUFlLENBQUM7UUFDdEIsVUFBSyxHQUFHLGNBQWMsQ0FBQztJQUl2QixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQWdDO0lBQ3BDLENBQUM7SUFFRCxhQUFhLENBQUMsSUFBZ0M7UUFDMUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQzttR0FuQlEsa0NBQWtDO3VFQUFsQyxrQ0FBa0MsV0FBbEMsa0NBQWtDLG1CQUYvQixNQUFNOztTQUVULGtDQUFrQzt1RkFBbEMsa0NBQWtDO2NBSDlDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QUxMX1ZJRVdfTU9ERVN9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1JlY29yZFRocmVhZExpc3RBY3Rpb25EYXRhLCBSZWNvcmRUaHJlYWRMaXN0QWN0aW9uSGFuZGxlcn0gZnJvbSBcIi4uL3JlY29yZC10aHJlYWQtbGlzdC5hY3Rpb25cIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBc3luY1Byb2Nlc3NSZWNvcmRUaHJlYWRMaXN0QWN0aW9uIGV4dGVuZHMgUmVjb3JkVGhyZWFkTGlzdEFjdGlvbkhhbmRsZXIge1xuXG4gICAga2V5ID0gJ2FzeW5jLXByb2Nlc3MnO1xuICAgIG1vZGVzID0gQUxMX1ZJRVdfTU9ERVM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogUmVjb3JkVGhyZWFkTGlzdEFjdGlvbkRhdGEpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBzaG91bGREaXNwbGF5KGRhdGE6IFJlY29yZFRocmVhZExpc3RBY3Rpb25EYXRhKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRBY2xzID0gZGF0YT8uYWN0aW9uPy5hY2wgPz8gW107XG4gICAgICAgIGlmICghZGVmYXVsdEFjbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrUmVjb3JkQWNjZXNzKGRhdGEsIGRlZmF1bHRBY2xzKTtcbiAgICB9XG59XG4iXX0=