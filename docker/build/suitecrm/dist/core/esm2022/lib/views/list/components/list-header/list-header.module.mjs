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
import { ListHeaderComponent } from './list-header.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ListFilterModule } from '../../../../containers/list-filter/components/list-filter/list-filter.module';
import { ActionMenuModule } from '../action-menu/action-menu.module';
import { ModuleTitleModule } from '../../../../components/module-title/module-title.module';
import { SettingsMenuModule } from '../settings-menu/settings-menu.module';
import { RecordPanelModule } from '../../../../containers/record-panel/components/record-panel/record-panel.module';
import { ButtonGroupModule } from "../../../../components/button-group/button-group.module";
import { LabelModule } from "../../../../components/label/label.module";
import * as i0 from "@angular/core";
class ListHeaderModule {
    static { this.ɵfac = function ListHeaderModule_Factory(t) { return new (t || ListHeaderModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ListHeaderModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ModuleTitleModule,
            ActionMenuModule,
            SettingsMenuModule,
            AngularSvgIconModule,
            ListFilterModule,
            RecordPanelModule,
            ButtonGroupModule,
            LabelModule] }); }
}
export { ListHeaderModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListHeaderModule, [{
        type: NgModule,
        args: [{
                declarations: [ListHeaderComponent],
                exports: [ListHeaderComponent],
                imports: [
                    CommonModule,
                    ModuleTitleModule,
                    ActionMenuModule,
                    SettingsMenuModule,
                    AngularSvgIconModule,
                    ListFilterModule,
                    RecordPanelModule,
                    ButtonGroupModule,
                    LabelModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ListHeaderModule, { declarations: [ListHeaderComponent], imports: [CommonModule,
        ModuleTitleModule,
        ActionMenuModule,
        SettingsMenuModule,
        AngularSvgIconModule,
        ListFilterModule,
        RecordPanelModule,
        ButtonGroupModule,
        LabelModule], exports: [ListHeaderComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3QvY29tcG9uZW50cy9saXN0LWhlYWRlci9saXN0LWhlYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRTVELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDhFQUE4RSxDQUFDO0FBQzlHLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQzFGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlGQUFpRixDQUFDO0FBQ2xILE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQzFGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFdEUsTUFlYSxnQkFBZ0I7aUZBQWhCLGdCQUFnQjttRUFBaEIsZ0JBQWdCO3VFQVhyQixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLFdBQVc7O1NBR04sZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FmNUIsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDOUIsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsaUJBQWlCO29CQUNqQixXQUFXO2lCQUNkO2FBQ0o7O3dGQUNZLGdCQUFnQixtQkFkVixtQkFBbUIsYUFHOUIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixXQUFXLGFBVkwsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge0xpc3RIZWFkZXJDb21wb25lbnR9IGZyb20gJy4vbGlzdC1oZWFkZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHtBbmd1bGFyU3ZnSWNvbk1vZHVsZX0gZnJvbSAnYW5ndWxhci1zdmctaWNvbic7XG5pbXBvcnQge0xpc3RGaWx0ZXJNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvbGlzdC1maWx0ZXIvY29tcG9uZW50cy9saXN0LWZpbHRlci9saXN0LWZpbHRlci5tb2R1bGUnO1xuaW1wb3J0IHtBY3Rpb25NZW51TW9kdWxlfSBmcm9tICcuLi9hY3Rpb24tbWVudS9hY3Rpb24tbWVudS5tb2R1bGUnO1xuaW1wb3J0IHtNb2R1bGVUaXRsZU1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9tb2R1bGUtdGl0bGUvbW9kdWxlLXRpdGxlLm1vZHVsZSc7XG5pbXBvcnQge1NldHRpbmdzTWVudU1vZHVsZX0gZnJvbSAnLi4vc2V0dGluZ3MtbWVudS9zZXR0aW5ncy1tZW51Lm1vZHVsZSc7XG5pbXBvcnQge1JlY29yZFBhbmVsTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL3JlY29yZC1wYW5lbC9jb21wb25lbnRzL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwubW9kdWxlJztcbmltcG9ydCB7QnV0dG9uR3JvdXBNb2R1bGV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAubW9kdWxlXCI7XG5pbXBvcnQge0xhYmVsTW9kdWxlfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYWJlbC9sYWJlbC5tb2R1bGVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtMaXN0SGVhZGVyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbTGlzdEhlYWRlckNvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIE1vZHVsZVRpdGxlTW9kdWxlLFxuICAgICAgICBBY3Rpb25NZW51TW9kdWxlLFxuICAgICAgICBTZXR0aW5nc01lbnVNb2R1bGUsXG4gICAgICAgIEFuZ3VsYXJTdmdJY29uTW9kdWxlLFxuICAgICAgICBMaXN0RmlsdGVyTW9kdWxlLFxuICAgICAgICBSZWNvcmRQYW5lbE1vZHVsZSxcbiAgICAgICAgQnV0dG9uR3JvdXBNb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0SGVhZGVyTW9kdWxlIHtcbn1cbiJdfQ==