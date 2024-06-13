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
import { SubpanelCreateAction } from '../../actions/create/create.action';
import { SubpanelSelectAction } from "../../actions/select/select.action";
import { AsyncProcessSubpanelAction } from '../../actions/async-process/async-process.action';
import { SubpanelShowFilterAction } from "../../actions/show-filter/show-filter.action";
import { BaseActionManager } from "../../../../services/actions/base-action-manager.service";
import { SubpanelClearFilterAction } from "../../actions/clear-filter/clear-filter.action";
import * as i0 from "@angular/core";
import * as i1 from "../../actions/create/create.action";
import * as i2 from "../../actions/select/select.action";
import * as i3 from "../../actions/async-process/async-process.action";
import * as i4 from "../../actions/show-filter/show-filter.action";
import * as i5 from "../../actions/clear-filter/clear-filter.action";
class SubpanelActionManager extends BaseActionManager {
    constructor(create, select, async, showFilter, clearFilter) {
        super();
        this.create = create;
        this.select = select;
        this.async = async;
        this.showFilter = showFilter;
        this.clearFilter = clearFilter;
        async.modes.forEach(mode => this.actions[mode][async.key] = async);
        create.modes.forEach(mode => this.actions[mode][create.key] = create);
        select.modes.forEach(mode => this.actions[mode][select.key] = select);
        showFilter.modes.forEach(mode => this.actions[mode][showFilter.key] = showFilter);
        clearFilter.modes.forEach(mode => this.actions[mode][clearFilter.key] = clearFilter);
    }
    static { this.ɵfac = function SubpanelActionManager_Factory(t) { return new (t || SubpanelActionManager)(i0.ɵɵinject(i1.SubpanelCreateAction), i0.ɵɵinject(i2.SubpanelSelectAction), i0.ɵɵinject(i3.AsyncProcessSubpanelAction), i0.ɵɵinject(i4.SubpanelShowFilterAction), i0.ɵɵinject(i5.SubpanelClearFilterAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelActionManager, factory: SubpanelActionManager.ɵfac, providedIn: 'root' }); }
}
export { SubpanelActionManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelActionManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.SubpanelCreateAction }, { type: i2.SubpanelSelectAction }, { type: i3.AsyncProcessSubpanelAction }, { type: i4.SubpanelShowFilterAction }, { type: i5.SubpanelClearFilterAction }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3N1YnBhbmVsL2NvbXBvbmVudHMvc3VicGFuZWwvYWN0aW9uLW1hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUV4RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUM1RixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUMzRixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQzs7Ozs7OztBQUV6RixNQUdhLHFCQUFzQixTQUFRLGlCQUFxQztJQUU1RSxZQUNjLE1BQTRCLEVBQzVCLE1BQTRCLEVBQzVCLEtBQWlDLEVBQ2pDLFVBQW9DLEVBQ3BDLFdBQXNDO1FBRWhELEtBQUssRUFBRSxDQUFDO1FBTkUsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBNEI7UUFDakMsZUFBVSxHQUFWLFVBQVUsQ0FBMEI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQTJCO1FBR2hELEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDbEYsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUN6RixDQUFDO3NGQWZRLHFCQUFxQjt1RUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQixtQkFGbEIsTUFBTTs7U0FFVCxxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQUhqQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YnBhbmVsQ3JlYXRlQWN0aW9ufSBmcm9tICcuLi8uLi9hY3Rpb25zL2NyZWF0ZS9jcmVhdGUuYWN0aW9uJztcbmltcG9ydCB7U3VicGFuZWxBY3Rpb25EYXRhfSBmcm9tICcuLi8uLi9hY3Rpb25zL3N1YnBhbmVsLmFjdGlvbic7XG5pbXBvcnQge1N1YnBhbmVsU2VsZWN0QWN0aW9ufSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9zZWxlY3Qvc2VsZWN0LmFjdGlvblwiO1xuaW1wb3J0IHtBc3luY1Byb2Nlc3NTdWJwYW5lbEFjdGlvbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hc3luYy1wcm9jZXNzL2FzeW5jLXByb2Nlc3MuYWN0aW9uJztcbmltcG9ydCB7U3VicGFuZWxTaG93RmlsdGVyQWN0aW9ufSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9zaG93LWZpbHRlci9zaG93LWZpbHRlci5hY3Rpb25cIjtcbmltcG9ydCB7QmFzZUFjdGlvbk1hbmFnZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9hY3Rpb25zL2Jhc2UtYWN0aW9uLW1hbmFnZXIuc2VydmljZVwiO1xuaW1wb3J0IHtTdWJwYW5lbENsZWFyRmlsdGVyQWN0aW9ufSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9jbGVhci1maWx0ZXIvY2xlYXItZmlsdGVyLmFjdGlvblwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTdWJwYW5lbEFjdGlvbk1hbmFnZXIgZXh0ZW5kcyBCYXNlQWN0aW9uTWFuYWdlcjxTdWJwYW5lbEFjdGlvbkRhdGE+IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlOiBTdWJwYW5lbENyZWF0ZUFjdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIHNlbGVjdDogU3VicGFuZWxTZWxlY3RBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBhc3luYzogQXN5bmNQcm9jZXNzU3VicGFuZWxBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBzaG93RmlsdGVyOiBTdWJwYW5lbFNob3dGaWx0ZXJBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBjbGVhckZpbHRlcjogU3VicGFuZWxDbGVhckZpbHRlckFjdGlvblxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBhc3luYy5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW2FzeW5jLmtleV0gPSBhc3luYyk7XG4gICAgICAgIGNyZWF0ZS5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW2NyZWF0ZS5rZXldID0gY3JlYXRlKTtcbiAgICAgICAgc2VsZWN0Lm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bc2VsZWN0LmtleV0gPSBzZWxlY3QpO1xuICAgICAgICBzaG93RmlsdGVyLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bc2hvd0ZpbHRlci5rZXldID0gc2hvd0ZpbHRlcik7XG4gICAgICAgIGNsZWFyRmlsdGVyLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bY2xlYXJGaWx0ZXIua2V5XSA9IGNsZWFyRmlsdGVyKTtcbiAgICB9XG59XG4iXX0=