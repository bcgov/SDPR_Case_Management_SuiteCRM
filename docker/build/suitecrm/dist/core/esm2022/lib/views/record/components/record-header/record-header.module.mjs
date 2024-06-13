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
import { RecordHeaderComponent } from './record-header.component';
import { ModuleTitleModule } from '../../../../components/module-title/module-title.module';
import { DynamicLabelModule } from '../../../../components/dynamic-label/dynamic-label.module';
import { ActionGroupMenuModule } from '../../../../components/action-group-menu/action-group-menu.module';
import { FavoriteToggleModule } from '../../../../containers/favorite-toggle/components/favorite-toggle/favorite-toggle.module';
import { ButtonModule } from "../../../../components/button/button.module";
import * as i0 from "@angular/core";
class RecordHeaderModule {
    static { this.ɵfac = function RecordHeaderModule_Factory(t) { return new (t || RecordHeaderModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RecordHeaderModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ModuleTitleModule,
            DynamicLabelModule,
            ActionGroupMenuModule,
            FavoriteToggleModule,
            ButtonModule] }); }
}
export { RecordHeaderModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordHeaderModule, [{
        type: NgModule,
        args: [{
                declarations: [RecordHeaderComponent],
                exports: [RecordHeaderComponent],
                imports: [
                    CommonModule,
                    ModuleTitleModule,
                    DynamicLabelModule,
                    ActionGroupMenuModule,
                    FavoriteToggleModule,
                    ButtonModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RecordHeaderModule, { declarations: [RecordHeaderComponent], imports: [CommonModule,
        ModuleTitleModule,
        DynamicLabelModule,
        ActionGroupMenuModule,
        FavoriteToggleModule,
        ButtonModule], exports: [RecordHeaderComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWhlYWRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2NvbXBvbmVudHMvcmVjb3JkLWhlYWRlci9yZWNvcmQtaGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDMUYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFDN0YsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sbUVBQW1FLENBQUM7QUFDeEcsT0FBTyxFQUNILG9CQUFvQixFQUN2QixNQUFNLDBGQUEwRixDQUFDO0FBQ2xHLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQzs7QUFFekUsTUFZYSxrQkFBa0I7bUZBQWxCLGtCQUFrQjttRUFBbEIsa0JBQWtCO3VFQVJ2QixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixxQkFBcUI7WUFDckIsb0JBQW9CO1lBQ3BCLFlBQVk7O1NBR1Asa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FaOUIsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNyQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDaEMsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLHFCQUFxQjtvQkFDckIsb0JBQW9CO29CQUNwQixZQUFZO2lCQUNmO2FBQ0o7O3dGQUNZLGtCQUFrQixtQkFYWixxQkFBcUIsYUFHaEMsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixZQUFZLGFBUE4scUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtSZWNvcmRIZWFkZXJDb21wb25lbnR9IGZyb20gJy4vcmVjb3JkLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtNb2R1bGVUaXRsZU1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9tb2R1bGUtdGl0bGUvbW9kdWxlLXRpdGxlLm1vZHVsZSc7XG5pbXBvcnQge0R5bmFtaWNMYWJlbE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9keW5hbWljLWxhYmVsL2R5bmFtaWMtbGFiZWwubW9kdWxlJztcbmltcG9ydCB7QWN0aW9uR3JvdXBNZW51TW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2FjdGlvbi1ncm91cC1tZW51L2FjdGlvbi1ncm91cC1tZW51Lm1vZHVsZSc7XG5pbXBvcnQge1xuICAgIEZhdm9yaXRlVG9nZ2xlTW9kdWxlXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvZmF2b3JpdGUtdG9nZ2xlL2NvbXBvbmVudHMvZmF2b3JpdGUtdG9nZ2xlL2Zhdm9yaXRlLXRvZ2dsZS5tb2R1bGUnO1xuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbUmVjb3JkSGVhZGVyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbUmVjb3JkSGVhZGVyQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgTW9kdWxlVGl0bGVNb2R1bGUsXG4gICAgICAgIER5bmFtaWNMYWJlbE1vZHVsZSxcbiAgICAgICAgQWN0aW9uR3JvdXBNZW51TW9kdWxlLFxuICAgICAgICBGYXZvcml0ZVRvZ2dsZU1vZHVsZSxcbiAgICAgICAgQnV0dG9uTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRIZWFkZXJNb2R1bGUge1xufVxuIl19