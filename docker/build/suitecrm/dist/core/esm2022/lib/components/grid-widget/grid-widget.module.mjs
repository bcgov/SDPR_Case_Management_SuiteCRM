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
import { FieldModule } from '../../fields/field.module';
import { InlineLoadingSpinnerModule } from '../inline-loading-spinner/inline-loading-spinner.module';
import { WidgetPanelModule } from '../widget-panel/widget-panel.module';
import { GridWidgetComponent } from './grid-widget.component';
import { LabelModule } from '../label/label.module';
import { DynamicLabelModule } from '../dynamic-label/dynamic-label.module';
import { ImageModule } from '../image/image.module';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import * as i0 from "@angular/core";
class GridWidgetModule {
    static { this.ɵfac = function GridWidgetModule_Factory(t) { return new (t || GridWidgetModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: GridWidgetModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FieldModule,
            InlineLoadingSpinnerModule,
            WidgetPanelModule,
            LabelModule,
            ImageModule,
            DynamicLabelModule,
            NgbTooltipModule] }); }
}
export { GridWidgetModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridWidgetModule, [{
        type: NgModule,
        args: [{
                declarations: [GridWidgetComponent],
                exports: [
                    GridWidgetComponent
                ],
                imports: [
                    CommonModule,
                    FieldModule,
                    InlineLoadingSpinnerModule,
                    WidgetPanelModule,
                    LabelModule,
                    ImageModule,
                    DynamicLabelModule,
                    NgbTooltipModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GridWidgetModule, { declarations: [GridWidgetComponent], imports: [CommonModule,
        FieldModule,
        InlineLoadingSpinnerModule,
        WidgetPanelModule,
        LabelModule,
        ImageModule,
        DynamicLabelModule,
        NgbTooltipModule], exports: [GridWidgetComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC13aWRnZXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZ3JpZC13aWRnZXQvZ3JpZC13aWRnZXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdEQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFNUQsTUFnQmEsZ0JBQWdCO2lGQUFoQixnQkFBZ0I7bUVBQWhCLGdCQUFnQjt1RUFWckIsWUFBWTtZQUNaLFdBQVc7WUFDWCwwQkFBMEI7WUFDMUIsaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCxXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLGdCQUFnQjs7U0FHWCxnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQWhCNUIsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxPQUFPLEVBQUU7b0JBQ0wsbUJBQW1CO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixXQUFXO29CQUNYLDBCQUEwQjtvQkFDMUIsaUJBQWlCO29CQUNqQixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsa0JBQWtCO29CQUNsQixnQkFBZ0I7aUJBQ25CO2FBQ0o7O3dGQUNZLGdCQUFnQixtQkFmVixtQkFBbUIsYUFLOUIsWUFBWTtRQUNaLFdBQVc7UUFDWCwwQkFBMEI7UUFDMUIsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGdCQUFnQixhQVZoQixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0ZpZWxkTW9kdWxlfSBmcm9tICcuLi8uLi9maWVsZHMvZmllbGQubW9kdWxlJztcbmltcG9ydCB7SW5saW5lTG9hZGluZ1NwaW5uZXJNb2R1bGV9IGZyb20gJy4uL2lubGluZS1sb2FkaW5nLXNwaW5uZXIvaW5saW5lLWxvYWRpbmctc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHtXaWRnZXRQYW5lbE1vZHVsZX0gZnJvbSAnLi4vd2lkZ2V0LXBhbmVsL3dpZGdldC1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHtHcmlkV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL2dyaWQtd2lkZ2V0LmNvbXBvbmVudCc7XG5pbXBvcnQge0xhYmVsTW9kdWxlfSBmcm9tICcuLi9sYWJlbC9sYWJlbC5tb2R1bGUnO1xuaW1wb3J0IHtEeW5hbWljTGFiZWxNb2R1bGV9IGZyb20gJy4uL2R5bmFtaWMtbGFiZWwvZHluYW1pYy1sYWJlbC5tb2R1bGUnO1xuaW1wb3J0IHtJbWFnZU1vZHVsZX0gZnJvbSAnLi4vaW1hZ2UvaW1hZ2UubW9kdWxlJztcbmltcG9ydCB7TmdiVG9vbHRpcE1vZHVsZX0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbR3JpZFdpZGdldENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBHcmlkV2lkZ2V0Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRmllbGRNb2R1bGUsXG4gICAgICAgIElubGluZUxvYWRpbmdTcGlubmVyTW9kdWxlLFxuICAgICAgICBXaWRnZXRQYW5lbE1vZHVsZSxcbiAgICAgICAgTGFiZWxNb2R1bGUsXG4gICAgICAgIEltYWdlTW9kdWxlLFxuICAgICAgICBEeW5hbWljTGFiZWxNb2R1bGUsXG4gICAgICAgIE5nYlRvb2x0aXBNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRXaWRnZXRNb2R1bGUge1xufVxuIl19