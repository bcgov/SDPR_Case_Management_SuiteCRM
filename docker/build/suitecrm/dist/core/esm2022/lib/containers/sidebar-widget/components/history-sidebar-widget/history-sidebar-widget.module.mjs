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
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HistorySidebarWidgetComponent } from './history-sidebar-widget.component';
import { FieldModule } from '../../../../fields/field.module';
import { WidgetPanelModule } from '../../../../components/widget-panel/widget-panel.module';
import { ImageModule } from '../../../../components/image/image.module';
import { LoadingSpinnerModule } from '../../../../components/loading-spinner/loading-spinner.module';
import { LabelModule } from '../../../../components/label/label.module';
import { ChartMessageAreaModule } from '../../../../components/chart/components/chart-message-area/chart-message-area.module';
import { RouterModule } from "@angular/router";
import * as i0 from "@angular/core";
class HistorySidebarWidgetModule {
    static { this.ɵfac = function HistorySidebarWidgetModule_Factory(t) { return new (t || HistorySidebarWidgetModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HistorySidebarWidgetModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ScrollingModule,
            ImageModule,
            FieldModule,
            WidgetPanelModule,
            LoadingSpinnerModule,
            LabelModule,
            ChartMessageAreaModule,
            RouterModule] }); }
}
export { HistorySidebarWidgetModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistorySidebarWidgetModule, [{
        type: NgModule,
        args: [{
                declarations: [HistorySidebarWidgetComponent],
                exports: [
                    HistorySidebarWidgetComponent
                ],
                imports: [
                    CommonModule,
                    ScrollingModule,
                    ImageModule,
                    FieldModule,
                    WidgetPanelModule,
                    LoadingSpinnerModule,
                    LabelModule,
                    ChartMessageAreaModule,
                    RouterModule,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HistorySidebarWidgetModule, { declarations: [HistorySidebarWidgetComponent], imports: [CommonModule,
        ScrollingModule,
        ImageModule,
        FieldModule,
        WidgetPanelModule,
        LoadingSpinnerModule,
        LabelModule,
        ChartMessageAreaModule,
        RouterModule], exports: [HistorySidebarWidgetComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS1zaWRlYmFyLXdpZGdldC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL2hpc3Rvcnktc2lkZWJhci13aWRnZXQvaGlzdG9yeS1zaWRlYmFyLXdpZGdldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDNUQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDMUYsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQ25HLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxzRkFBc0YsQ0FBQztBQUM1SCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7O0FBRTdDLE1BaUJhLDBCQUEwQjsyRkFBMUIsMEJBQTBCO21FQUExQiwwQkFBMEI7dUVBWC9CLFlBQVk7WUFDWixlQUFlO1lBQ2YsV0FBVztZQUNYLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsb0JBQW9CO1lBQ3BCLFdBQVc7WUFDWCxzQkFBc0I7WUFDdEIsWUFBWTs7U0FHUCwwQkFBMEI7dUZBQTFCLDBCQUEwQjtjQWpCdEMsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLDZCQUE2QixDQUFDO2dCQUM3QyxPQUFPLEVBQUU7b0JBQ0wsNkJBQTZCO2lCQUNoQztnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixlQUFlO29CQUNmLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxpQkFBaUI7b0JBQ2pCLG9CQUFvQjtvQkFDcEIsV0FBVztvQkFDWCxzQkFBc0I7b0JBQ3RCLFlBQVk7aUJBQ2Y7YUFDSjs7d0ZBQ1ksMEJBQTBCLG1CQWhCcEIsNkJBQTZCLGFBS3hDLFlBQVk7UUFDWixlQUFlO1FBQ2YsV0FBVztRQUNYLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsWUFBWSxhQVhaLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7U2Nyb2xsaW5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7SGlzdG9yeVNpZGViYXJXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vaGlzdG9yeS1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQnO1xuaW1wb3J0IHtGaWVsZE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2ZpZWxkLm1vZHVsZSc7XG5pbXBvcnQge1dpZGdldFBhbmVsTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3dpZGdldC1wYW5lbC93aWRnZXQtcGFuZWwubW9kdWxlJztcbmltcG9ydCB7SW1hZ2VNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UubW9kdWxlJztcbmltcG9ydCB7TG9hZGluZ1NwaW5uZXJNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHtMYWJlbE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYWJlbC9sYWJlbC5tb2R1bGUnO1xuaW1wb3J0IHtDaGFydE1lc3NhZ2VBcmVhTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2NoYXJ0L2NvbXBvbmVudHMvY2hhcnQtbWVzc2FnZS1hcmVhL2NoYXJ0LW1lc3NhZ2UtYXJlYS5tb2R1bGUnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtIaXN0b3J5U2lkZWJhcldpZGdldENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBIaXN0b3J5U2lkZWJhcldpZGdldENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFNjcm9sbGluZ01vZHVsZSxcbiAgICAgICAgSW1hZ2VNb2R1bGUsXG4gICAgICAgIEZpZWxkTW9kdWxlLFxuICAgICAgICBXaWRnZXRQYW5lbE1vZHVsZSxcbiAgICAgICAgTG9hZGluZ1NwaW5uZXJNb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlLFxuICAgICAgICBDaGFydE1lc3NhZ2VBcmVhTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBIaXN0b3J5U2lkZWJhcldpZGdldE1vZHVsZSB7XG59XG4iXX0=