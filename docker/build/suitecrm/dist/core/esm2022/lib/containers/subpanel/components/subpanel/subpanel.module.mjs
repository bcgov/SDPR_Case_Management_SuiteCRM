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
import { SubpanelComponent } from './subpanel.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonGroupModule } from '../../../../components/button-group/button-group.module';
import { PanelModule } from '../../../../components/panel/panel.module';
import { ImageModule } from '../../../../components/image/image.module';
import { TableModule } from '../../../../components/table/table.module';
import { ListFilterModule } from "../../../list-filter/components/list-filter/list-filter.module";
import { ActionGroupMenuModule } from "../../../../components/action-group-menu/action-group-menu.module";
import * as i0 from "@angular/core";
class SubpanelModule {
    static { this.ɵfac = function SubpanelModule_Factory(t) { return new (t || SubpanelModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SubpanelModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            NgbModule,
            ImageModule,
            PanelModule,
            RouterModule,
            ButtonGroupModule,
            TableModule,
            ListFilterModule,
            ActionGroupMenuModule] }); }
}
export { SubpanelModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelModule, [{
        type: NgModule,
        args: [{
                declarations: [SubpanelComponent],
                exports: [SubpanelComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    ImageModule,
                    PanelModule,
                    RouterModule,
                    ButtonGroupModule,
                    TableModule,
                    ListFilterModule,
                    ActionGroupMenuModule,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SubpanelModule, { declarations: [SubpanelComponent], imports: [CommonModule,
        NgbModule,
        ImageModule,
        PanelModule,
        RouterModule,
        ButtonGroupModule,
        TableModule,
        ListFilterModule,
        ActionGroupMenuModule], exports: [SubpanelComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VicGFuZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvc3VicGFuZWwvY29tcG9uZW50cy9zdWJwYW5lbC9zdWJwYW5lbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDckQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDMUYsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sZ0VBQWdFLENBQUM7QUFDaEcsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sbUVBQW1FLENBQUM7O0FBR3hHLE1BZWEsY0FBYzsrRUFBZCxjQUFjO21FQUFkLGNBQWM7dUVBWG5CLFlBQVk7WUFDWixTQUFTO1lBQ1QsV0FBVztZQUNYLFdBQVc7WUFDWCxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIscUJBQXFCOztTQUdoQixjQUFjO3VGQUFkLGNBQWM7Y0FmMUIsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUIsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osU0FBUztvQkFDVCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixxQkFBcUI7aUJBQ3hCO2FBQ0o7O3dGQUNZLGNBQWMsbUJBZFIsaUJBQWlCLGFBRzVCLFlBQVk7UUFDWixTQUFTO1FBQ1QsV0FBVztRQUNYLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIscUJBQXFCLGFBVmYsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtTdWJwYW5lbENvbXBvbmVudH0gZnJvbSAnLi9zdWJwYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge05nYk1vZHVsZX0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtCdXR0b25Hcm91cE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLm1vZHVsZSc7XG5pbXBvcnQge1BhbmVsTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BhbmVsL3BhbmVsLm1vZHVsZSc7XG5pbXBvcnQge0ltYWdlTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2ltYWdlL2ltYWdlLm1vZHVsZSc7XG5pbXBvcnQge1RhYmxlTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLm1vZHVsZSc7XG5pbXBvcnQge0xpc3RGaWx0ZXJNb2R1bGV9IGZyb20gXCIuLi8uLi8uLi9saXN0LWZpbHRlci9jb21wb25lbnRzL2xpc3QtZmlsdGVyL2xpc3QtZmlsdGVyLm1vZHVsZVwiO1xuaW1wb3J0IHtBY3Rpb25Hcm91cE1lbnVNb2R1bGV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FjdGlvbi1ncm91cC1tZW51L2FjdGlvbi1ncm91cC1tZW51Lm1vZHVsZVwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbU3VicGFuZWxDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtTdWJwYW5lbENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIE5nYk1vZHVsZSxcbiAgICAgICAgSW1hZ2VNb2R1bGUsXG4gICAgICAgIFBhbmVsTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIEJ1dHRvbkdyb3VwTW9kdWxlLFxuICAgICAgICBUYWJsZU1vZHVsZSxcbiAgICAgICAgTGlzdEZpbHRlck1vZHVsZSxcbiAgICAgICAgQWN0aW9uR3JvdXBNZW51TW9kdWxlLFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VicGFuZWxNb2R1bGUge1xufVxuIl19