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
import { VerticalBarChartComponent } from './vertical-bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartMessageAreaModule } from '../chart-message-area/chart-message-area.module';
import { LoadingSpinnerModule } from "../../../loading-spinner/loading-spinner.module";
import * as i0 from "@angular/core";
class VerticalBarChartModule {
    static { this.ɵfac = function VerticalBarChartModule_Factory(t) { return new (t || VerticalBarChartModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: VerticalBarChartModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            NgxChartsModule,
            ChartMessageAreaModule,
            LoadingSpinnerModule] }); }
}
export { VerticalBarChartModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VerticalBarChartModule, [{
        type: NgModule,
        args: [{
                declarations: [VerticalBarChartComponent],
                exports: [VerticalBarChartComponent],
                imports: [
                    CommonModule,
                    NgxChartsModule,
                    ChartMessageAreaModule,
                    LoadingSpinnerModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(VerticalBarChartModule, { declarations: [VerticalBarChartComponent], imports: [CommonModule,
        NgxChartsModule,
        ChartMessageAreaModule,
        LoadingSpinnerModule], exports: [VerticalBarChartComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtYmFyLWNoYXJ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2NoYXJ0L2NvbXBvbmVudHMvdmVydGljYWwtYmFyLWNoYXJ0L3ZlcnRpY2FsLWJhci1jaGFydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxpREFBaUQsQ0FBQzs7QUFFckYsTUFVYSxzQkFBc0I7dUZBQXRCLHNCQUFzQjttRUFBdEIsc0JBQXNCO3VFQU4zQixZQUFZO1lBQ1osZUFBZTtZQUNmLHNCQUFzQjtZQUN0QixvQkFBb0I7O1NBR2Ysc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FWbEMsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDcEMsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixzQkFBc0I7b0JBQ3RCLG9CQUFvQjtpQkFDdkI7YUFDSjs7d0ZBQ1ksc0JBQXNCLG1CQVRoQix5QkFBeUIsYUFHcEMsWUFBWTtRQUNaLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIsb0JBQW9CLGFBTGQseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtWZXJ0aWNhbEJhckNoYXJ0Q29tcG9uZW50fSBmcm9tICcuL3ZlcnRpY2FsLWJhci1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ3hDaGFydHNNb2R1bGV9IGZyb20gJ0Bzd2ltbGFuZS9uZ3gtY2hhcnRzJztcbmltcG9ydCB7Q2hhcnRNZXNzYWdlQXJlYU1vZHVsZX0gZnJvbSAnLi4vY2hhcnQtbWVzc2FnZS1hcmVhL2NoYXJ0LW1lc3NhZ2UtYXJlYS5tb2R1bGUnO1xuaW1wb3J0IHtMb2FkaW5nU3Bpbm5lck1vZHVsZX0gZnJvbSBcIi4uLy4uLy4uL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbVmVydGljYWxCYXJDaGFydENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1ZlcnRpY2FsQmFyQ2hhcnRDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBOZ3hDaGFydHNNb2R1bGUsXG4gICAgICAgIENoYXJ0TWVzc2FnZUFyZWFNb2R1bGUsXG4gICAgICAgIExvYWRpbmdTcGlubmVyTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEJhckNoYXJ0TW9kdWxlIHtcbn1cbiJdfQ==