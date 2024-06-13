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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDateTimeComponent } from './datetime/base-datetime.component';
import { BaseFieldComponent } from './base-field.component';
import { BaseNumberComponent } from './base-number.component';
import { BaseBooleanComponent } from './base-boolean.component';
import { BaseEnumComponent } from './base-enum.component';
import { BaseMultiEnumComponent } from './base-multienum.component';
import { BaseNameComponent } from './base-name.component';
import { BaseRelateComponent } from './base-relate.component';
import { BaseDateComponent } from './datetime/base-date.component';
import * as i0 from "@angular/core";
class BaseFieldModule {
    static { this.ɵfac = function BaseFieldModule_Factory(t) { return new (t || BaseFieldModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: BaseFieldModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
export { BaseFieldModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseFieldModule, [{
        type: NgModule,
        args: [{
                exports: [
                    BaseBooleanComponent,
                    BaseEnumComponent,
                    BaseFieldComponent,
                    BaseMultiEnumComponent,
                    BaseNameComponent,
                    BaseNumberComponent,
                    BaseRelateComponent,
                    BaseDateTimeComponent,
                    BaseDateComponent
                ],
                declarations: [
                    BaseBooleanComponent,
                    BaseEnumComponent,
                    BaseFieldComponent,
                    BaseMultiEnumComponent,
                    BaseNameComponent,
                    BaseNumberComponent,
                    BaseRelateComponent,
                    BaseDateTimeComponent,
                    BaseDateComponent
                ],
                imports: [
                    CommonModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BaseFieldModule, { declarations: [BaseBooleanComponent,
        BaseEnumComponent,
        BaseFieldComponent,
        BaseMultiEnumComponent,
        BaseNameComponent,
        BaseNumberComponent,
        BaseRelateComponent,
        BaseDateTimeComponent,
        BaseDateComponent], imports: [CommonModule], exports: [BaseBooleanComponent,
        BaseEnumComponent,
        BaseFieldComponent,
        BaseMultiEnumComponent,
        BaseNameComponent,
        BaseNumberComponent,
        BaseRelateComponent,
        BaseDateTimeComponent,
        BaseDateComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2Jhc2UvYmFzZS1maWVsZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOztBQUVqRSxNQTJCYSxlQUFlO2dGQUFmLGVBQWU7bUVBQWYsZUFBZTt1RUFIcEIsWUFBWTs7U0FHUCxlQUFlO3VGQUFmLGVBQWU7Y0EzQjNCLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsb0JBQW9CO29CQUNwQixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsc0JBQXNCO29CQUN0QixpQkFBaUI7b0JBQ2pCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNWLG9CQUFvQjtvQkFDcEIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLHNCQUFzQjtvQkFDdEIsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIscUJBQXFCO29CQUNyQixpQkFBaUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO2lCQUNmO2FBQ0o7O3dGQUNZLGVBQWUsbUJBZHBCLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsaUJBQWlCLGFBR2pCLFlBQVksYUF0Qlosb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Jhc2VEYXRlVGltZUNvbXBvbmVudH0gZnJvbSAnLi9kYXRldGltZS9iYXNlLWRhdGV0aW1lLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9iYXNlLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VOdW1iZXJDb21wb25lbnR9IGZyb20gJy4vYmFzZS1udW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7QmFzZUJvb2xlYW5Db21wb25lbnR9IGZyb20gJy4vYmFzZS1ib29sZWFuLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VFbnVtQ29tcG9uZW50fSBmcm9tICcuL2Jhc2UtZW51bS5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlTXVsdGlFbnVtQ29tcG9uZW50fSBmcm9tICcuL2Jhc2UtbXVsdGllbnVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VOYW1lQ29tcG9uZW50fSBmcm9tICcuL2Jhc2UtbmFtZS5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlUmVsYXRlQ29tcG9uZW50fSBmcm9tICcuL2Jhc2UtcmVsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VEYXRlQ29tcG9uZW50fSBmcm9tICcuL2RhdGV0aW1lL2Jhc2UtZGF0ZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQmFzZUJvb2xlYW5Db21wb25lbnQsXG4gICAgICAgIEJhc2VFbnVtQ29tcG9uZW50LFxuICAgICAgICBCYXNlRmllbGRDb21wb25lbnQsXG4gICAgICAgIEJhc2VNdWx0aUVudW1Db21wb25lbnQsXG4gICAgICAgIEJhc2VOYW1lQ29tcG9uZW50LFxuICAgICAgICBCYXNlTnVtYmVyQ29tcG9uZW50LFxuICAgICAgICBCYXNlUmVsYXRlQ29tcG9uZW50LFxuICAgICAgICBCYXNlRGF0ZVRpbWVDb21wb25lbnQsXG4gICAgICAgIEJhc2VEYXRlQ29tcG9uZW50XG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQmFzZUJvb2xlYW5Db21wb25lbnQsXG4gICAgICAgIEJhc2VFbnVtQ29tcG9uZW50LFxuICAgICAgICBCYXNlRmllbGRDb21wb25lbnQsXG4gICAgICAgIEJhc2VNdWx0aUVudW1Db21wb25lbnQsXG4gICAgICAgIEJhc2VOYW1lQ29tcG9uZW50LFxuICAgICAgICBCYXNlTnVtYmVyQ29tcG9uZW50LFxuICAgICAgICBCYXNlUmVsYXRlQ29tcG9uZW50LFxuICAgICAgICBCYXNlRGF0ZVRpbWVDb21wb25lbnQsXG4gICAgICAgIEJhc2VEYXRlQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQmFzZUZpZWxkTW9kdWxlIHtcbn1cbiJdfQ==