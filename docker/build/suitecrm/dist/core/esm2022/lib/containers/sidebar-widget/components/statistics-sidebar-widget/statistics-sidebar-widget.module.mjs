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
import { StatisticsSidebarWidgetComponent } from './statistics-sidebar-widget.component';
import { FieldModule } from '../../../../fields/field.module';
import { InlineLoadingSpinnerModule } from '../../../../components/inline-loading-spinner/inline-loading-spinner.module';
import { WidgetPanelModule } from '../../../../components/widget-panel/widget-panel.module';
import { LabelModule } from '../../../../components/label/label.module';
import { GridWidgetModule } from '../../../../components/grid-widget/grid-widget.module';
import * as i0 from "@angular/core";
class StatisticsSidebarWidgetModule {
    static { this.ɵfac = function StatisticsSidebarWidgetModule_Factory(t) { return new (t || StatisticsSidebarWidgetModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StatisticsSidebarWidgetModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FieldModule,
            InlineLoadingSpinnerModule,
            WidgetPanelModule,
            GridWidgetModule,
            LabelModule] }); }
}
export { StatisticsSidebarWidgetModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatisticsSidebarWidgetModule, [{
        type: NgModule,
        args: [{
                declarations: [StatisticsSidebarWidgetComponent],
                exports: [
                    StatisticsSidebarWidgetComponent
                ],
                imports: [
                    CommonModule,
                    FieldModule,
                    InlineLoadingSpinnerModule,
                    WidgetPanelModule,
                    GridWidgetModule,
                    LabelModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StatisticsSidebarWidgetModule, { declarations: [StatisticsSidebarWidgetComponent], imports: [CommonModule,
        FieldModule,
        InlineLoadingSpinnerModule,
        WidgetPanelModule,
        GridWidgetModule,
        LabelModule], exports: [StatisticsSidebarWidgetComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy1zaWRlYmFyLXdpZGdldC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL3N0YXRpc3RpY3Mtc2lkZWJhci13aWRnZXQvc3RhdGlzdGljcy1zaWRlYmFyLXdpZGdldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQ0FBZ0MsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RCxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSw2RUFBNkUsQ0FBQztBQUN2SCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUMxRixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sdURBQXVELENBQUM7O0FBRXZGLE1BY2EsNkJBQTZCOzhGQUE3Qiw2QkFBNkI7bUVBQTdCLDZCQUE2Qjt1RUFSbEMsWUFBWTtZQUNaLFdBQVc7WUFDWCwwQkFBMEI7WUFDMUIsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixXQUFXOztTQUdOLDZCQUE2Qjt1RkFBN0IsNkJBQTZCO2NBZHpDLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDaEQsT0FBTyxFQUFFO29CQUNMLGdDQUFnQztpQkFDbkM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osV0FBVztvQkFDWCwwQkFBMEI7b0JBQzFCLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixXQUFXO2lCQUNkO2FBQ0o7O3dGQUNZLDZCQUE2QixtQkFidkIsZ0NBQWdDLGFBSzNDLFlBQVk7UUFDWixXQUFXO1FBQ1gsMEJBQTBCO1FBQzFCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsV0FBVyxhQVJYLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7U3RhdGlzdGljc1NpZGViYXJXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vc3RhdGlzdGljcy1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQnO1xuaW1wb3J0IHtGaWVsZE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2ZpZWxkLm1vZHVsZSc7XG5pbXBvcnQge0lubGluZUxvYWRpbmdTcGlubmVyTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2lubGluZS1sb2FkaW5nLXNwaW5uZXIvaW5saW5lLWxvYWRpbmctc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHtXaWRnZXRQYW5lbE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy93aWRnZXQtcGFuZWwvd2lkZ2V0LXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQge0xhYmVsTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xhYmVsL2xhYmVsLm1vZHVsZSc7XG5pbXBvcnQge0dyaWRXaWRnZXRNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZ3JpZC13aWRnZXQvZ3JpZC13aWRnZXQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtTdGF0aXN0aWNzU2lkZWJhcldpZGdldENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdGF0aXN0aWNzU2lkZWJhcldpZGdldENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZpZWxkTW9kdWxlLFxuICAgICAgICBJbmxpbmVMb2FkaW5nU3Bpbm5lck1vZHVsZSxcbiAgICAgICAgV2lkZ2V0UGFuZWxNb2R1bGUsXG4gICAgICAgIEdyaWRXaWRnZXRNb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdGF0aXN0aWNzU2lkZWJhcldpZGdldE1vZHVsZSB7XG59XG4iXX0=