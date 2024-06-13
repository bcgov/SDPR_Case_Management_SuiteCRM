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
import { RecordGridModule } from '../../../../components/record-grid/record-grid.module';
import { RecordThreadComponent } from './record-thread.component';
import { RecordThreadItemModule } from '../record-thread-item/record-thread-item.module';
import { LoadingSpinnerModule } from '../../../../components/loading-spinner/loading-spinner.module';
import { ActionGroupMenuModule } from "../../../../components/action-group-menu/action-group-menu.module";
import * as i0 from "@angular/core";
class RecordThreadModule {
    static { this.ɵfac = function RecordThreadModule_Factory(t) { return new (t || RecordThreadModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RecordThreadModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ButtonModule,
            PanelModule,
            FieldGridModule,
            DropdownButtonModule,
            LabelModule,
            RecordGridModule,
            ButtonModule,
            RecordThreadItemModule,
            LoadingSpinnerModule,
            ActionGroupMenuModule] }); }
}
export { RecordThreadModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadModule, [{
        type: NgModule,
        args: [{
                declarations: [RecordThreadComponent],
                exports: [
                    RecordThreadComponent
                ],
                imports: [
                    CommonModule,
                    ButtonModule,
                    PanelModule,
                    FieldGridModule,
                    DropdownButtonModule,
                    LabelModule,
                    RecordGridModule,
                    ButtonModule,
                    RecordThreadItemModule,
                    LoadingSpinnerModule,
                    ActionGroupMenuModule,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RecordThreadModule, { declarations: [RecordThreadComponent], imports: [CommonModule,
        ButtonModule,
        PanelModule,
        FieldGridModule,
        DropdownButtonModule,
        LabelModule,
        RecordGridModule,
        ButtonModule,
        RecordThreadItemModule,
        LoadingSpinnerModule,
        ActionGroupMenuModule], exports: [RecordThreadComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtdGhyZWFkL2NvbXBvbmVudHMvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDbkcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQ25HLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLG1FQUFtRSxDQUFDOztBQUV4RyxNQW9CYSxrQkFBa0I7bUZBQWxCLGtCQUFrQjttRUFBbEIsa0JBQWtCO3VFQWR2QixZQUFZO1lBQ1osWUFBWTtZQUNaLFdBQVc7WUFDWCxlQUFlO1lBQ2Ysb0JBQW9CO1lBQ3BCLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIscUJBQXFCOztTQUloQixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQXBCOUIsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNyQyxPQUFPLEVBQUU7b0JBQ0wscUJBQXFCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLHNCQUFzQjtvQkFDdEIsb0JBQW9CO29CQUNwQixxQkFBcUI7aUJBRXhCO2FBQ0o7O3dGQUNZLGtCQUFrQixtQkFuQloscUJBQXFCLGFBS2hDLFlBQVk7UUFDWixZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQixxQkFBcUIsYUFickIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtEcm9wZG93bkJ1dHRvbk1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kcm9wZG93bi1idXR0b24vZHJvcGRvd24tYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQge0xhYmVsTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xhYmVsL2xhYmVsLm1vZHVsZSc7XG5pbXBvcnQge1BhbmVsTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BhbmVsL3BhbmVsLm1vZHVsZSc7XG5pbXBvcnQge0ZpZWxkR3JpZE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9maWVsZC1ncmlkL2ZpZWxkLWdyaWQubW9kdWxlJztcbmltcG9ydCB7UmVjb3JkR3JpZE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9yZWNvcmQtZ3JpZC9yZWNvcmQtZ3JpZC5tb2R1bGUnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRDb21wb25lbnR9IGZyb20gJy4vcmVjb3JkLXRocmVhZC5jb21wb25lbnQnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRJdGVtTW9kdWxlfSBmcm9tICcuLi9yZWNvcmQtdGhyZWFkLWl0ZW0vcmVjb3JkLXRocmVhZC1pdGVtLm1vZHVsZSc7XG5pbXBvcnQge0xvYWRpbmdTcGlubmVyTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7QWN0aW9uR3JvdXBNZW51TW9kdWxlfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hY3Rpb24tZ3JvdXAtbWVudS9hY3Rpb24tZ3JvdXAtbWVudS5tb2R1bGVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtSZWNvcmRUaHJlYWRDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUmVjb3JkVGhyZWFkQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgQnV0dG9uTW9kdWxlLFxuICAgICAgICBQYW5lbE1vZHVsZSxcbiAgICAgICAgRmllbGRHcmlkTW9kdWxlLFxuICAgICAgICBEcm9wZG93bkJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTGFiZWxNb2R1bGUsXG4gICAgICAgIFJlY29yZEdyaWRNb2R1bGUsXG4gICAgICAgIEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgUmVjb3JkVGhyZWFkSXRlbU1vZHVsZSxcbiAgICAgICAgTG9hZGluZ1NwaW5uZXJNb2R1bGUsXG4gICAgICAgIEFjdGlvbkdyb3VwTWVudU1vZHVsZSxcblxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkVGhyZWFkTW9kdWxlIHtcbn1cbiJdfQ==