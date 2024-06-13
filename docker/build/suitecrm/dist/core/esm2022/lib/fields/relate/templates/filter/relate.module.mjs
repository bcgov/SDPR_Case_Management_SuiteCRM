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
import { RelateFilterFieldComponent } from './relate.component';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { InlineLoadingSpinnerModule } from '../../../../components/inline-loading-spinner/inline-loading-spinner.module';
import { ButtonModule } from '../../../../components/button/button.module';
import { LabelModule } from '../../../../components/label/label.module';
import { ImageModule } from "../../../../components/image/image.module";
import { MultiSelectModule } from "primeng/multiselect";
import { SharedModule } from "primeng/api";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import * as i0 from "@angular/core";
class RelateFilterFieldModule {
    static { this.ɵfac = function RelateFilterFieldModule_Factory(t) { return new (t || RelateFilterFieldModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RelateFilterFieldModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            TagInputModule,
            LabelModule,
            FormsModule,
            InlineLoadingSpinnerModule,
            ButtonModule,
            ImageModule,
            MultiSelectModule,
            SharedModule,
            DropdownModule,
            InputTextModule] }); }
}
export { RelateFilterFieldModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RelateFilterFieldModule, [{
        type: NgModule,
        args: [{
                declarations: [RelateFilterFieldComponent],
                exports: [RelateFilterFieldComponent],
                imports: [
                    CommonModule,
                    TagInputModule,
                    LabelModule,
                    FormsModule,
                    InlineLoadingSpinnerModule,
                    ButtonModule,
                    ImageModule,
                    MultiSelectModule,
                    SharedModule,
                    DropdownModule,
                    InputTextModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RelateFilterFieldModule, { declarations: [RelateFilterFieldComponent], imports: [CommonModule,
        TagInputModule,
        LabelModule,
        FormsModule,
        InlineLoadingSpinnerModule,
        ButtonModule,
        ImageModule,
        MultiSelectModule,
        SharedModule,
        DropdownModule,
        InputTextModule], exports: [RelateFilterFieldComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvcmVsYXRlL3RlbXBsYXRlcy9maWx0ZXIvcmVsYXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUN6QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sNkVBQTZFLENBQUM7QUFDdkgsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDOztBQUVsRCxNQWlCYSx1QkFBdUI7d0ZBQXZCLHVCQUF1QjttRUFBdkIsdUJBQXVCO3VFQWI1QixZQUFZO1lBQ1osY0FBYztZQUNkLFdBQVc7WUFDWCxXQUFXO1lBQ1gsMEJBQTBCO1lBQzFCLFlBQVk7WUFDWixXQUFXO1lBQ1gsaUJBQWlCO1lBQ2pCLFlBQVk7WUFDWixjQUFjO1lBQ2QsZUFBZTs7U0FHVix1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQWpCbkMsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUMxQyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztnQkFDckMsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsMEJBQTBCO29CQUMxQixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsaUJBQWlCO29CQUNqQixZQUFZO29CQUNaLGNBQWM7b0JBQ2QsZUFBZTtpQkFDbEI7YUFDSjs7d0ZBQ1ksdUJBQXVCLG1CQWhCakIsMEJBQTBCLGFBR3JDLFlBQVk7UUFDWixjQUFjO1FBQ2QsV0FBVztRQUNYLFdBQVc7UUFDWCwwQkFBMEI7UUFDMUIsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGNBQWM7UUFDZCxlQUFlLGFBWlQsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtSZWxhdGVGaWx0ZXJGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9yZWxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7VGFnSW5wdXRNb2R1bGV9IGZyb20gJ25neC1jaGlwcyc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0lubGluZUxvYWRpbmdTcGlubmVyTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2lubGluZS1sb2FkaW5nLXNwaW5uZXIvaW5saW5lLWxvYWRpbmctc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHtMYWJlbE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYWJlbC9sYWJlbC5tb2R1bGUnO1xuaW1wb3J0IHtJbWFnZU1vZHVsZX0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UubW9kdWxlXCI7XG5pbXBvcnQge011bHRpU2VsZWN0TW9kdWxlfSBmcm9tIFwicHJpbWVuZy9tdWx0aXNlbGVjdFwiO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGV9IGZyb20gXCJwcmltZW5nL2FwaVwiO1xuaW1wb3J0IHtEcm9wZG93bk1vZHVsZX0gZnJvbSBcInByaW1lbmcvZHJvcGRvd25cIjtcbmltcG9ydCB7SW5wdXRUZXh0TW9kdWxlfSBmcm9tIFwicHJpbWVuZy9pbnB1dHRleHRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtSZWxhdGVGaWx0ZXJGaWVsZENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1JlbGF0ZUZpbHRlckZpZWxkQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgVGFnSW5wdXRNb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgSW5saW5lTG9hZGluZ1NwaW5uZXJNb2R1bGUsXG4gICAgICAgIEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgSW1hZ2VNb2R1bGUsXG4gICAgICAgIE11bHRpU2VsZWN0TW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIERyb3Bkb3duTW9kdWxlLFxuICAgICAgICBJbnB1dFRleHRNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFJlbGF0ZUZpbHRlckZpZWxkTW9kdWxlIHtcbn1cbiJdfQ==