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
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
export var ScreenSize;
(function (ScreenSize) {
    ScreenSize["XSmall"] = "XSmall";
    ScreenSize["Small"] = "Small";
    ScreenSize["Medium"] = "Medium";
    ScreenSize["Large"] = "Large";
    ScreenSize["XLarge"] = "XLarge";
})(ScreenSize || (ScreenSize = {}));
class ScreenSizeObserverService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.screenSize = new BehaviorSubject(ScreenSize.Medium);
        this.screenSize$ = this.screenSize.asObservable();
        this.initScreenSizeObservable();
    }
    initScreenSizeObservable() {
        merge(this.breakpointObserver.observe([
            Breakpoints.XSmall,
        ]).pipe(map((result) => {
            if (result.matches) {
                return ScreenSize.XSmall;
            }
        })), this.breakpointObserver.observe([
            Breakpoints.Small,
        ]).pipe(map((result) => {
            if (result.matches) {
                return ScreenSize.Small;
            }
        })), this.breakpointObserver.observe([
            Breakpoints.Medium,
        ]).pipe(map((result) => {
            if (result.matches) {
                return ScreenSize.Medium;
            }
        })), this.breakpointObserver.observe([
            Breakpoints.Large,
        ]).pipe(map((result) => {
            if (result.matches) {
                return ScreenSize.Large;
            }
        })), this.breakpointObserver.observe([
            Breakpoints.XLarge,
        ]).pipe(map((result) => {
            if (result.matches) {
                return ScreenSize.XLarge;
            }
        }))).subscribe((value) => {
            if (value) {
                this.screenSize.next(value);
            }
        });
    }
    static { this.ɵfac = function ScreenSizeObserverService_Factory(t) { return new (t || ScreenSizeObserverService)(i0.ɵɵinject(i1.BreakpointObserver)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ScreenSizeObserverService, factory: ScreenSizeObserverService.ɵfac, providedIn: 'root' }); }
}
export { ScreenSizeObserverService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScreenSizeObserverService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.BreakpointObserver }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy91aS9zY3JlZW4tc2l6ZS1vYnNlcnZlci9zY3JlZW4tc2l6ZS1vYnNlcnZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQWtCLE1BQU0scUJBQXFCLENBQUM7QUFDckYsT0FBTyxFQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7QUFFbkMsTUFBTSxDQUFOLElBQVksVUFNWDtBQU5ELFdBQVksVUFBVTtJQUNsQiwrQkFBaUIsQ0FBQTtJQUNqQiw2QkFBZSxDQUFBO0lBQ2YsK0JBQWlCLENBQUE7SUFDakIsNkJBQWUsQ0FBQTtJQUNmLCtCQUFpQixDQUFBO0FBQ3JCLENBQUMsRUFOVyxVQUFVLEtBQVYsVUFBVSxRQU1yQjtBQUVELE1BR2EseUJBQXlCO0lBS2xDLFlBQXNCLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBSDVELGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBYSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsZ0JBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBR3pDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFUyx3QkFBd0I7UUFDOUIsS0FBSyxDQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDNUIsV0FBVyxDQUFDLE1BQU07U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUF1QixFQUFFLEVBQUU7WUFDcEMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUNoQixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUM7YUFDNUI7UUFDTCxDQUFDLENBQUMsQ0FBQyxFQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDNUIsV0FBVyxDQUFDLEtBQUs7U0FDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUF1QixFQUFFLEVBQUU7WUFDcEMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUNoQixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUM7YUFDM0I7UUFDTCxDQUFDLENBQUMsQ0FBQyxFQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDNUIsV0FBVyxDQUFDLE1BQU07U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUF1QixFQUFFLEVBQUU7WUFDcEMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUNoQixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUM7YUFDNUI7UUFDTCxDQUFDLENBQUMsQ0FBQyxFQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDNUIsV0FBVyxDQUFDLEtBQUs7U0FDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUF1QixFQUFFLEVBQUU7WUFDcEMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUNoQixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUM7YUFDM0I7UUFDTCxDQUFDLENBQUMsQ0FBQyxFQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDNUIsV0FBVyxDQUFDLE1BQU07U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUF1QixFQUFFLEVBQUU7WUFDcEMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUNoQixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUM7YUFDNUI7UUFDTCxDQUFDLENBQUMsQ0FBQyxDQUNOLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0I7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7MEZBbkRRLHlCQUF5Qjt1RUFBekIseUJBQXlCLFdBQXpCLHlCQUF5QixtQkFGdEIsTUFBTTs7U0FFVCx5QkFBeUI7dUZBQXpCLHlCQUF5QjtjQUhyQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHMsIEJyZWFrcG9pbnRTdGF0ZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgbWVyZ2V9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGVudW0gU2NyZWVuU2l6ZSB7XG4gICAgWFNtYWxsID0gJ1hTbWFsbCcsXG4gICAgU21hbGwgPSAnU21hbGwnLFxuICAgIE1lZGl1bSA9ICdNZWRpdW0nLFxuICAgIExhcmdlID0gJ0xhcmdlJyxcbiAgICBYTGFyZ2UgPSAnWExhcmdlJ1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2Uge1xuXG4gICAgc2NyZWVuU2l6ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U2NyZWVuU2l6ZT4oU2NyZWVuU2l6ZS5NZWRpdW0pO1xuICAgIHNjcmVlblNpemUkID0gdGhpcy5zY3JlZW5TaXplLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMuaW5pdFNjcmVlblNpemVPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRTY3JlZW5TaXplT2JzZXJ2YWJsZSgpOiB2b2lkIHtcbiAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgICB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKFtcbiAgICAgICAgICAgICAgICBCcmVha3BvaW50cy5YU21hbGwsXG4gICAgICAgICAgICBdKS5waXBlKG1hcCgocmVzdWx0OiBCcmVha3BvaW50U3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNjcmVlblNpemUuWFNtYWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoW1xuICAgICAgICAgICAgICAgIEJyZWFrcG9pbnRzLlNtYWxsLFxuICAgICAgICAgICAgXSkucGlwZShtYXAoKHJlc3VsdDogQnJlYWtwb2ludFN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTY3JlZW5TaXplLlNtYWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUoW1xuICAgICAgICAgICAgICAgIEJyZWFrcG9pbnRzLk1lZGl1bSxcbiAgICAgICAgICAgIF0pLnBpcGUobWFwKChyZXN1bHQ6IEJyZWFrcG9pbnRTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2NyZWVuU2l6ZS5NZWRpdW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShbXG4gICAgICAgICAgICAgICAgQnJlYWtwb2ludHMuTGFyZ2UsXG4gICAgICAgICAgICBdKS5waXBlKG1hcCgocmVzdWx0OiBCcmVha3BvaW50U3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNjcmVlblNpemUuTGFyZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShbXG4gICAgICAgICAgICAgICAgQnJlYWtwb2ludHMuWExhcmdlLFxuICAgICAgICAgICAgXSkucGlwZShtYXAoKHJlc3VsdDogQnJlYWtwb2ludFN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTY3JlZW5TaXplLlhMYXJnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlblNpemUubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==