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
import { PieGridChartComponent } from './pie-grid-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartMessageAreaModule } from '../chart-message-area/chart-message-area.module';
import { LoadingSpinnerModule } from "../../../loading-spinner/loading-spinner.module";
import * as i0 from "@angular/core";
class PieGridChartModule {
    static { this.ɵfac = function PieGridChartModule_Factory(t) { return new (t || PieGridChartModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PieGridChartModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            NgxChartsModule,
            ChartMessageAreaModule,
            LoadingSpinnerModule] }); }
}
export { PieGridChartModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PieGridChartModule, [{
        type: NgModule,
        args: [{
                declarations: [PieGridChartComponent],
                exports: [PieGridChartComponent],
                imports: [
                    CommonModule,
                    NgxChartsModule,
                    ChartMessageAreaModule,
                    LoadingSpinnerModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PieGridChartModule, { declarations: [PieGridChartComponent], imports: [CommonModule,
        NgxChartsModule,
        ChartMessageAreaModule,
        LoadingSpinnerModule], exports: [PieGridChartComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWdyaWQtY2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvY2hhcnQvY29tcG9uZW50cy9waWUtZ3JpZC1jaGFydC9waWUtZ3JpZC1jaGFydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxpREFBaUQsQ0FBQzs7QUFFckYsTUFVYSxrQkFBa0I7bUZBQWxCLGtCQUFrQjttRUFBbEIsa0JBQWtCO3VFQU52QixZQUFZO1lBQ1osZUFBZTtZQUNmLHNCQUFzQjtZQUN0QixvQkFBb0I7O1NBR2Ysa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FWOUIsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNyQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDaEMsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixzQkFBc0I7b0JBQ3RCLG9CQUFvQjtpQkFDdkI7YUFDSjs7d0ZBQ1ksa0JBQWtCLG1CQVRaLHFCQUFxQixhQUdoQyxZQUFZO1FBQ1osZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixvQkFBb0IsYUFMZCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1BpZUdyaWRDaGFydENvbXBvbmVudH0gZnJvbSAnLi9waWUtZ3JpZC1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ3hDaGFydHNNb2R1bGV9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtY2hhcnRzJztcbmltcG9ydCB7Q2hhcnRNZXNzYWdlQXJlYU1vZHVsZX0gZnJvbSAnLi4vY2hhcnQtbWVzc2FnZS1hcmVhL2NoYXJ0LW1lc3NhZ2UtYXJlYS5tb2R1bGUnO1xuaW1wb3J0IHtMb2FkaW5nU3Bpbm5lck1vZHVsZX0gZnJvbSBcIi4uLy4uLy4uL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbUGllR3JpZENoYXJ0Q29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbUGllR3JpZENoYXJ0Q29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmd4Q2hhcnRzTW9kdWxlLFxuICAgICAgICBDaGFydE1lc3NhZ2VBcmVhTW9kdWxlLFxuICAgICAgICBMb2FkaW5nU3Bpbm5lck1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGllR3JpZENoYXJ0TW9kdWxlIHtcbn1cbiJdfQ==