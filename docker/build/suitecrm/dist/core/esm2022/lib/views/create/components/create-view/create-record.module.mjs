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
import { FieldModule } from '../../../../fields/field.module';
import { RecordContainerModule } from '../../../record/components/record-container/record-container.module';
import { CreateRecordComponent } from './create-record.component';
import { RecordHeaderModule } from '../../../record/components/record-header/record-header.module';
import { StatusBarModule } from '../../../../components/status-bar/status-bar.module';
import { RecordModule } from '../../../record/components/record-view/record.module';
import { SubpanelModule } from '../../../../containers/subpanel/components/subpanel/subpanel.module';
import * as i0 from "@angular/core";
class CreateRecordModule {
    static { this.ɵfac = function CreateRecordModule_Factory(t) { return new (t || CreateRecordModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CreateRecordModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FieldModule,
            RecordModule,
            RecordContainerModule,
            RecordHeaderModule,
            StatusBarModule,
            SubpanelModule] }); }
}
export { CreateRecordModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateRecordModule, [{
        type: NgModule,
        args: [{
                declarations: [CreateRecordComponent],
                exports: [CreateRecordComponent],
                imports: [
                    CommonModule,
                    FieldModule,
                    RecordModule,
                    RecordContainerModule,
                    RecordHeaderModule,
                    StatusBarModule,
                    SubpanelModule
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CreateRecordModule, { declarations: [CreateRecordComponent], imports: [CommonModule,
        FieldModule,
        RecordModule,
        RecordContainerModule,
        RecordHeaderModule,
        StatusBarModule,
        SubpanelModule], exports: [CreateRecordComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXJlY29yZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvY3JlYXRlL2NvbXBvbmVudHMvY3JlYXRlLXZpZXcvY3JlYXRlLXJlY29yZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxxRUFBcUUsQ0FBQztBQUMxRyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUNqRyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scURBQXFELENBQUM7QUFDcEYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxxRUFBcUUsQ0FBQzs7QUFFbkcsTUFhYSxrQkFBa0I7bUZBQWxCLGtCQUFrQjttRUFBbEIsa0JBQWtCO3VFQVR2QixZQUFZO1lBQ1osV0FBVztZQUNYLFlBQVk7WUFDWixxQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixjQUFjOztTQUdULGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBYjlCLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDckMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixxQkFBcUI7b0JBQ3JCLGtCQUFrQjtvQkFDbEIsZUFBZTtvQkFDZixjQUFjO2lCQUNqQjthQUNKOzt3RkFDWSxrQkFBa0IsbUJBWloscUJBQXFCLGFBR2hDLFlBQVk7UUFDWixXQUFXO1FBQ1gsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGNBQWMsYUFSUixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0ZpZWxkTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvZmllbGQubW9kdWxlJztcbmltcG9ydCB7UmVjb3JkQ29udGFpbmVyTW9kdWxlfSBmcm9tICcuLi8uLi8uLi9yZWNvcmQvY29tcG9uZW50cy9yZWNvcmQtY29udGFpbmVyL3JlY29yZC1jb250YWluZXIubW9kdWxlJztcbmltcG9ydCB7Q3JlYXRlUmVjb3JkQ29tcG9uZW50fSBmcm9tICcuL2NyZWF0ZS1yZWNvcmQuY29tcG9uZW50JztcbmltcG9ydCB7UmVjb3JkSGVhZGVyTW9kdWxlfSBmcm9tICcuLi8uLi8uLi9yZWNvcmQvY29tcG9uZW50cy9yZWNvcmQtaGVhZGVyL3JlY29yZC1oZWFkZXIubW9kdWxlJztcbmltcG9ydCB7U3RhdHVzQmFyTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3N0YXR1cy1iYXIvc3RhdHVzLWJhci5tb2R1bGUnO1xuaW1wb3J0IHtSZWNvcmRNb2R1bGV9IGZyb20gJy4uLy4uLy4uL3JlY29yZC9jb21wb25lbnRzL3JlY29yZC12aWV3L3JlY29yZC5tb2R1bGUnO1xuaW1wb3J0IHtTdWJwYW5lbE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9zdWJwYW5lbC9jb21wb25lbnRzL3N1YnBhbmVsL3N1YnBhbmVsLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbQ3JlYXRlUmVjb3JkQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbQ3JlYXRlUmVjb3JkQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRmllbGRNb2R1bGUsXG4gICAgICAgIFJlY29yZE1vZHVsZSxcbiAgICAgICAgUmVjb3JkQ29udGFpbmVyTW9kdWxlLFxuICAgICAgICBSZWNvcmRIZWFkZXJNb2R1bGUsXG4gICAgICAgIFN0YXR1c0Jhck1vZHVsZSxcbiAgICAgICAgU3VicGFuZWxNb2R1bGVcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVSZWNvcmRNb2R1bGUge1xufVxuIl19