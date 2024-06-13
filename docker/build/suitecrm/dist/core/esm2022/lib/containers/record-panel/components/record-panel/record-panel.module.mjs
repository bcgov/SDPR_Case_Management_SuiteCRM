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
import { DropdownButtonModule } from '../../../../components/dropdown-button/dropdown-button.module';
import { ButtonModule } from '../../../../components/button/button.module';
import { LabelModule } from '../../../../components/label/label.module';
import { PanelModule } from '../../../../components/panel/panel.module';
import { FieldGridModule } from '../../../../components/field-grid/field-grid.module';
import { RecordPanelComponent } from './record-panel.component';
import { RecordGridModule } from '../../../../components/record-grid/record-grid.module';
import * as i0 from "@angular/core";
class RecordPanelModule {
    static { this.ɵfac = function RecordPanelModule_Factory(t) { return new (t || RecordPanelModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RecordPanelModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ButtonModule,
            PanelModule,
            FieldGridModule,
            DropdownButtonModule,
            LabelModule,
            ButtonModule,
            RecordGridModule] }); }
}
export { RecordPanelModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordPanelModule, [{
        type: NgModule,
        args: [{
                declarations: [RecordPanelComponent],
                exports: [
                    RecordPanelComponent
                ],
                imports: [
                    CommonModule,
                    ButtonModule,
                    PanelModule,
                    FieldGridModule,
                    DropdownButtonModule,
                    LabelModule,
                    ButtonModule,
                    RecordGridModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RecordPanelModule, { declarations: [RecordPanelComponent], imports: [CommonModule,
        ButtonModule,
        PanelModule,
        FieldGridModule,
        DropdownButtonModule,
        LabelModule,
        ButtonModule,
        RecordGridModule], exports: [RecordPanelComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXBhbmVsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC1wYW5lbC9jb21wb25lbnRzL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUNuRyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDekUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scURBQXFELENBQUM7QUFDcEYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sdURBQXVELENBQUM7O0FBRXZGLE1BZ0JhLGlCQUFpQjtrRkFBakIsaUJBQWlCO21FQUFqQixpQkFBaUI7dUVBVnRCLFlBQVk7WUFDWixZQUFZO1lBQ1osV0FBVztZQUNYLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsV0FBVztZQUNYLFlBQVk7WUFDWixnQkFBZ0I7O1NBR1gsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FoQjdCLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFO29CQUNMLG9CQUFvQjtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixXQUFXO29CQUNYLGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQixXQUFXO29CQUNYLFlBQVk7b0JBQ1osZ0JBQWdCO2lCQUNuQjthQUNKOzt3RkFDWSxpQkFBaUIsbUJBZlgsb0JBQW9CLGFBSy9CLFlBQVk7UUFDWixZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsV0FBVztRQUNYLFlBQVk7UUFDWixnQkFBZ0IsYUFWaEIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtEcm9wZG93bkJ1dHRvbk1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kcm9wZG93bi1idXR0b24vZHJvcGRvd24tYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQge0xhYmVsTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xhYmVsL2xhYmVsLm1vZHVsZSc7XG5pbXBvcnQge1BhbmVsTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BhbmVsL3BhbmVsLm1vZHVsZSc7XG5pbXBvcnQge0ZpZWxkR3JpZE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9maWVsZC1ncmlkL2ZpZWxkLWdyaWQubW9kdWxlJztcbmltcG9ydCB7UmVjb3JkUGFuZWxDb21wb25lbnR9IGZyb20gJy4vcmVjb3JkLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge1JlY29yZEdyaWRNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcmVjb3JkLWdyaWQvcmVjb3JkLWdyaWQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtSZWNvcmRQYW5lbENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBSZWNvcmRQYW5lbENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgUGFuZWxNb2R1bGUsXG4gICAgICAgIEZpZWxkR3JpZE1vZHVsZSxcbiAgICAgICAgRHJvcGRvd25CdXR0b25Nb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlLFxuICAgICAgICBCdXR0b25Nb2R1bGUsXG4gICAgICAgIFJlY29yZEdyaWRNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZFBhbmVsTW9kdWxlIHtcbn1cbiJdfQ==