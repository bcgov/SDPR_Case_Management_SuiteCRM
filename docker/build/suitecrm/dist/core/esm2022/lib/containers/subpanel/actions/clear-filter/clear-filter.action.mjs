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
import { SubpanelActionHandler } from '../subpanel.action';
import * as i0 from "@angular/core";
class SubpanelClearFilterAction extends SubpanelActionHandler {
    constructor() {
        super(...arguments);
        this.key = 'clear-filter';
        this.modes = ['list'];
    }
    shouldDisplay(data) {
        return this.isAnyFilterApplied(data.store);
    }
    run(data) {
        data.store.clearFilter();
    }
    isAnyFilterApplied(store) {
        return store.hasActiveFilter() || !store.areAllCurrentCriteriaFilterEmpty();
    }
    static { this.ɵfac = /*@__PURE__*/ function () { let ɵSubpanelClearFilterAction_BaseFactory; return function SubpanelClearFilterAction_Factory(t) { return (ɵSubpanelClearFilterAction_BaseFactory || (ɵSubpanelClearFilterAction_BaseFactory = i0.ɵɵgetInheritedFactory(SubpanelClearFilterAction)))(t || SubpanelClearFilterAction); }; }(); }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelClearFilterAction, factory: SubpanelClearFilterAction.ɵfac, providedIn: 'root' }); }
}
export { SubpanelClearFilterAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelClearFilterAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXItZmlsdGVyLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3N1YnBhbmVsL2FjdGlvbnMvY2xlYXItZmlsdGVyL2NsZWFyLWZpbHRlci5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFxQixxQkFBcUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDOztBQUc3RSxNQUdhLHlCQUEwQixTQUFRLHFCQUFxQjtJQUhwRTs7UUFJSSxRQUFHLEdBQUcsY0FBYyxDQUFDO1FBRXJCLFVBQUssR0FBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBYWhDO0lBWEcsYUFBYSxDQUFDLElBQXdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsR0FBRyxDQUFDLElBQXdCO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQW9CO1FBQ25DLE9BQU8sS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxFQUFFLENBQUM7SUFDaEYsQ0FBQzs2UUFmUSx5QkFBeUIsU0FBekIseUJBQXlCO3VFQUF6Qix5QkFBeUIsV0FBekIseUJBQXlCLG1CQUZ0QixNQUFNOztTQUVULHlCQUF5Qjt1RkFBekIseUJBQXlCO2NBSHJDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1N1YnBhbmVsQWN0aW9uRGF0YSwgU3VicGFuZWxBY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9zdWJwYW5lbC5hY3Rpb24nO1xuaW1wb3J0IHtTdWJwYW5lbFN0b3JlfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3VicGFuZWwvc3VicGFuZWwuc3RvcmVcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdWJwYW5lbENsZWFyRmlsdGVyQWN0aW9uIGV4dGVuZHMgU3VicGFuZWxBY3Rpb25IYW5kbGVyIHtcbiAgICBrZXkgPSAnY2xlYXItZmlsdGVyJztcblxuICAgIG1vZGVzOiBWaWV3TW9kZVtdID0gWydsaXN0J107XG5cbiAgICBzaG91bGREaXNwbGF5KGRhdGE6IFN1YnBhbmVsQWN0aW9uRGF0YSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0FueUZpbHRlckFwcGxpZWQoZGF0YS5zdG9yZSk7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IFN1YnBhbmVsQWN0aW9uRGF0YSk6IHZvaWQge1xuICAgICAgICBkYXRhLnN0b3JlLmNsZWFyRmlsdGVyKCk7XG4gICAgfVxuXG4gICAgaXNBbnlGaWx0ZXJBcHBsaWVkKHN0b3JlOiBTdWJwYW5lbFN0b3JlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBzdG9yZS5oYXNBY3RpdmVGaWx0ZXIoKSB8fCAhc3RvcmUuYXJlQWxsQ3VycmVudENyaXRlcmlhRmlsdGVyRW1wdHkoKTtcbiAgICB9XG59XG4iXX0=