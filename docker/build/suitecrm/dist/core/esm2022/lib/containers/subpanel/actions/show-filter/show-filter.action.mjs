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
class SubpanelShowFilterAction extends SubpanelActionHandler {
    constructor() {
        super(...arguments);
        this.key = 'show-filter';
        this.modes = ['list'];
    }
    shouldDisplay(data) {
        return true;
    }
    getStatus(data) {
        if (this.isAnyFilterApplied(data.store)) {
            return 'active';
        }
        return '';
    }
    run(data) {
        data.store.toggleFilter();
    }
    isAnyFilterApplied(store) {
        return store.hasActiveFilter() || !store.areAllCurrentCriteriaFilterEmpty();
    }
    static { this.ɵfac = /*@__PURE__*/ function () { let ɵSubpanelShowFilterAction_BaseFactory; return function SubpanelShowFilterAction_Factory(t) { return (ɵSubpanelShowFilterAction_BaseFactory || (ɵSubpanelShowFilterAction_BaseFactory = i0.ɵɵgetInheritedFactory(SubpanelShowFilterAction)))(t || SubpanelShowFilterAction); }; }(); }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelShowFilterAction, factory: SubpanelShowFilterAction.ɵfac, providedIn: 'root' }); }
}
export { SubpanelShowFilterAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelShowFilterAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1maWx0ZXIuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvc3VicGFuZWwvYWN0aW9ucy9zaG93LWZpbHRlci9zaG93LWZpbHRlci5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFxQixxQkFBcUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDOztBQUk3RSxNQUdhLHdCQUF5QixTQUFRLHFCQUFxQjtJQUhuRTs7UUFJSSxRQUFHLEdBQUcsYUFBYSxDQUFDO1FBRXBCLFVBQUssR0FBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBb0JoQztJQWxCRyxhQUFhLENBQUMsSUFBd0I7UUFDbEMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUF3QjtRQUM5QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckMsT0FBTyxRQUFRLENBQUM7U0FDbkI7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBd0I7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBb0I7UUFDbkMsT0FBTyxLQUFLLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztJQUNoRixDQUFDO3lRQXRCUSx3QkFBd0IsU0FBeEIsd0JBQXdCO3VFQUF4Qix3QkFBd0IsV0FBeEIsd0JBQXdCLG1CQUZyQixNQUFNOztTQUVULHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBSHBDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1N1YnBhbmVsQWN0aW9uRGF0YSwgU3VicGFuZWxBY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9zdWJwYW5lbC5hY3Rpb24nO1xuaW1wb3J0IHtTdWJwYW5lbFN0b3JlfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3VicGFuZWwvc3VicGFuZWwuc3RvcmVcIjtcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN1YnBhbmVsU2hvd0ZpbHRlckFjdGlvbiBleHRlbmRzIFN1YnBhbmVsQWN0aW9uSGFuZGxlciB7XG4gICAga2V5ID0gJ3Nob3ctZmlsdGVyJztcblxuICAgIG1vZGVzOiBWaWV3TW9kZVtdID0gWydsaXN0J107XG5cbiAgICBzaG91bGREaXNwbGF5KGRhdGE6IFN1YnBhbmVsQWN0aW9uRGF0YSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRTdGF0dXMoZGF0YTogU3VicGFuZWxBY3Rpb25EYXRhKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBbnlGaWx0ZXJBcHBsaWVkKGRhdGEuc3RvcmUpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2FjdGl2ZSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBTdWJwYW5lbEFjdGlvbkRhdGEpOiB2b2lkIHtcbiAgICAgICAgZGF0YS5zdG9yZS50b2dnbGVGaWx0ZXIoKTtcbiAgICB9XG5cbiAgICBpc0FueUZpbHRlckFwcGxpZWQoc3RvcmU6IFN1YnBhbmVsU3RvcmUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmhhc0FjdGl2ZUZpbHRlcigpIHx8ICFzdG9yZS5hcmVBbGxDdXJyZW50Q3JpdGVyaWFGaWx0ZXJFbXB0eSgpO1xuICAgIH1cbn1cbiJdfQ==