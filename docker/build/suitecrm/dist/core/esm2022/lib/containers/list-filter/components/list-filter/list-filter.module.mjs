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
import { ListFilterComponent } from './list-filter.component';
import { DropdownButtonModule } from '../../../../components/dropdown-button/dropdown-button.module';
import { ButtonModule } from '../../../../components/button/button.module';
import { LabelModule } from '../../../../components/label/label.module';
import { PanelModule } from '../../../../components/panel/panel.module';
import { FieldGridModule } from '../../../../components/field-grid/field-grid.module';
import { RecordGridModule } from '../../../../components/record-grid/record-grid.module';
import * as i0 from "@angular/core";
class ListFilterModule {
    static { this.ɵfac = function ListFilterModule_Factory(t) { return new (t || ListFilterModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ListFilterModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ButtonModule,
            PanelModule,
            FieldGridModule,
            DropdownButtonModule,
            LabelModule,
            RecordGridModule,
            ButtonModule] }); }
}
export { ListFilterModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListFilterModule, [{
        type: NgModule,
        args: [{
                declarations: [ListFilterComponent],
                exports: [
                    ListFilterComponent
                ],
                imports: [
                    CommonModule,
                    ButtonModule,
                    PanelModule,
                    FieldGridModule,
                    DropdownButtonModule,
                    LabelModule,
                    RecordGridModule,
                    ButtonModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ListFilterModule, { declarations: [ListFilterComponent], imports: [CommonModule,
        ButtonModule,
        PanelModule,
        FieldGridModule,
        DropdownButtonModule,
        LabelModule,
        RecordGridModule,
        ButtonModule], exports: [ListFilterComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1maWx0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvbGlzdC1maWx0ZXIvY29tcG9uZW50cy9saXN0LWZpbHRlci9saXN0LWZpbHRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQ25HLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDdEUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUNwRixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQzs7QUFFdkYsTUFnQmEsZ0JBQWdCO2lGQUFoQixnQkFBZ0I7bUVBQWhCLGdCQUFnQjt1RUFWckIsWUFBWTtZQUNaLFlBQVk7WUFDWixXQUFXO1lBQ1gsZUFBZTtZQUNmLG9CQUFvQjtZQUNwQixXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCLFlBQVk7O1NBR1AsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FoQjVCLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbkMsT0FBTyxFQUFFO29CQUNMLG1CQUFtQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixXQUFXO29CQUNYLGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixXQUFXO29CQUNYLGdCQUFnQjtvQkFDaEIsWUFBWTtpQkFDZjthQUNKOzt3RkFDWSxnQkFBZ0IsbUJBZlYsbUJBQW1CLGFBSzlCLFlBQVk7UUFDWixZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixZQUFZLGFBVlosbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtMaXN0RmlsdGVyQ29tcG9uZW50fSBmcm9tICcuL2xpc3QtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0Ryb3Bkb3duQnV0dG9uTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2Ryb3Bkb3duLWJ1dHRvbi9kcm9wZG93bi1idXR0b24ubW9kdWxlJztcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlJztcbmltcG9ydCB7TGFiZWxNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwubW9kdWxlJztcbmltcG9ydCB7UGFuZWxNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwubW9kdWxlJztcbmltcG9ydCB7RmllbGRHcmlkTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2ZpZWxkLWdyaWQvZmllbGQtZ3JpZC5tb2R1bGUnO1xuaW1wb3J0IHtSZWNvcmRHcmlkTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3JlY29yZC1ncmlkL3JlY29yZC1ncmlkLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbTGlzdEZpbHRlckNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBMaXN0RmlsdGVyQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgQnV0dG9uTW9kdWxlLFxuICAgICAgICBQYW5lbE1vZHVsZSxcbiAgICAgICAgRmllbGRHcmlkTW9kdWxlLFxuICAgICAgICBEcm9wZG93bkJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTGFiZWxNb2R1bGUsXG4gICAgICAgIFJlY29yZEdyaWRNb2R1bGUsXG4gICAgICAgIEJ1dHRvbk1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdEZpbHRlck1vZHVsZSB7XG59XG4iXX0=