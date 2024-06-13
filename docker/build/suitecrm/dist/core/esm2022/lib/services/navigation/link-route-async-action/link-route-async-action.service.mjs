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
import { AsyncActionService } from '../../process/processes/async-action/async-action';
import * as i0 from "@angular/core";
import * as i1 from "../../process/processes/async-action/async-action";
class LinkRouteAsyncActionService {
    constructor(asyncActionService) {
        this.asyncActionService = asyncActionService;
    }
    run(linkAsyncAction, field, record) {
        const data = {
            payload: {
                fieldName: field.name ?? '',
                fieldValue: field.value ?? '',
            },
            record: {
                id: record.id ?? '',
                type: record.type ?? '',
                module: record.module ?? '',
                favorite: record.favorite ?? '',
                attributes: record.attributes ?? {},
                acls: record.acls ?? []
            }
        };
        this.asyncActionService.run(linkAsyncAction, data);
    }
    static { this.ɵfac = function LinkRouteAsyncActionService_Factory(t) { return new (t || LinkRouteAsyncActionService)(i0.ɵɵinject(i1.AsyncActionService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LinkRouteAsyncActionService, factory: LinkRouteAsyncActionService.ɵfac, providedIn: 'root' }); }
}
export { LinkRouteAsyncActionService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LinkRouteAsyncActionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.AsyncActionService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay1yb3V0ZS1hc3luYy1hY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL2xpbmstcm91dGUtYXN5bmMtYWN0aW9uL2xpbmstcm91dGUtYXN5bmMtYWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFtQixrQkFBa0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDOzs7QUFHdkcsTUFHYSwyQkFBMkI7SUFFcEMsWUFBc0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDNUQsQ0FBQztJQUVNLEdBQUcsQ0FBQyxlQUF1QixFQUFFLEtBQVksRUFBRSxNQUFjO1FBQzVELE1BQU0sSUFBSSxHQUFHO1lBQ1QsT0FBTyxFQUFFO2dCQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQzNCLFVBQVUsRUFBRSxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUU7YUFDaEM7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRTtnQkFDbkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDdkIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRTtnQkFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLElBQUksRUFBRTtnQkFDL0IsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBRTtnQkFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTthQUNoQjtTQUNNLENBQUM7UUFFdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDdEQsQ0FBQzs0RkF0QlEsMkJBQTJCO3VFQUEzQiwyQkFBMkIsV0FBM0IsMkJBQTJCLG1CQUZ4QixNQUFNOztTQUVULDJCQUEyQjt1RkFBM0IsMkJBQTJCO2NBSHZDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXN5bmNBY3Rpb25JbnB1dCwgQXN5bmNBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7RmllbGQsIFJlY29yZH0gZnJvbSAnY29tbW9uJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTGlua1JvdXRlQXN5bmNBY3Rpb25TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBydW4obGlua0FzeW5jQWN0aW9uOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCwgcmVjb3JkOiBSZWNvcmQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkLm5hbWUgPz8gJycsXG4gICAgICAgICAgICAgICAgZmllbGRWYWx1ZTogZmllbGQudmFsdWUgPz8gJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVjb3JkOiB7XG4gICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5pZCA/PyAnJyxcbiAgICAgICAgICAgICAgICB0eXBlOiByZWNvcmQudHlwZSA/PyAnJyxcbiAgICAgICAgICAgICAgICBtb2R1bGU6IHJlY29yZC5tb2R1bGUgPz8gJycsXG4gICAgICAgICAgICAgICAgZmF2b3JpdGU6IHJlY29yZC5mYXZvcml0ZSA/PyAnJyxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiByZWNvcmQuYXR0cmlidXRlcyA/PyB7fSxcbiAgICAgICAgICAgICAgICBhY2xzOiByZWNvcmQuYWNscyA/PyBbXVxuICAgICAgICAgICAgfSBhcyBSZWNvcmRcbiAgICAgICAgfSBhcyBBc3luY0FjdGlvbklucHV0O1xuXG4gICAgICAgIHRoaXMuYXN5bmNBY3Rpb25TZXJ2aWNlLnJ1bihsaW5rQXN5bmNBY3Rpb24sIGRhdGEpXG4gICAgfVxufVxuIl19