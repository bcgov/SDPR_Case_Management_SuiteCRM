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
import { SubpanelContainerComponent } from './subpanel-container.component';
import { SubpanelModule } from '../subpanel/subpanel.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineLoadingSpinnerModule } from '../../../../components/inline-loading-spinner/inline-loading-spinner.module';
import { FieldModule } from '../../../../fields/field.module';
import { GridWidgetModule } from '../../../../components/grid-widget/grid-widget.module';
import { LabelModule } from '../../../../components/label/label.module';
import { ImageModule } from '../../../../components/image/image.module';
import * as i0 from "@angular/core";
class SubpanelContainerModule {
    static { this.ɵfac = function SubpanelContainerModule_Factory(t) { return new (t || SubpanelContainerModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SubpanelContainerModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            NgbModule,
            ImageModule,
            RouterModule,
            SubpanelModule,
            InlineLoadingSpinnerModule,
            FieldModule,
            GridWidgetModule,
            LabelModule] }); }
}
export { SubpanelContainerModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelContainerModule, [{
        type: NgModule,
        args: [{
                declarations: [SubpanelContainerComponent],
                exports: [SubpanelContainerComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    ImageModule,
                    RouterModule,
                    SubpanelModule,
                    InlineLoadingSpinnerModule,
                    FieldModule,
                    GridWidgetModule,
                    LabelModule,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SubpanelContainerModule, { declarations: [SubpanelContainerComponent], imports: [CommonModule,
        NgbModule,
        ImageModule,
        RouterModule,
        SubpanelModule,
        InlineLoadingSpinnerModule,
        FieldModule,
        GridWidgetModule,
        LabelModule], exports: [SubpanelContainerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VicGFuZWwtY29udGFpbmVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3N1YnBhbmVsL2NvbXBvbmVudHMvc3VicGFuZWwtY29udGFpbmVyL3N1YnBhbmVsLWNvbnRhaW5lci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3JELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLDZFQUE2RSxDQUFDO0FBQ3ZILE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUN2RixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDdEUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDJDQUEyQyxDQUFDOztBQUV0RSxNQWVhLHVCQUF1Qjt3RkFBdkIsdUJBQXVCO21FQUF2Qix1QkFBdUI7dUVBWDVCLFlBQVk7WUFDWixTQUFTO1lBQ1QsV0FBVztZQUNYLFlBQVk7WUFDWixjQUFjO1lBQ2QsMEJBQTBCO1lBQzFCLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsV0FBVzs7U0FHTix1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQWZuQyxRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQzFDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUNyQyxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixTQUFTO29CQUNULFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixjQUFjO29CQUNkLDBCQUEwQjtvQkFDMUIsV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLFdBQVc7aUJBQ2Q7YUFDSjs7d0ZBQ1ksdUJBQXVCLG1CQWRqQiwwQkFBMEIsYUFHckMsWUFBWTtRQUNaLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGNBQWM7UUFDZCwwQkFBMEI7UUFDMUIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixXQUFXLGFBVkwsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtTdWJwYW5lbENvbnRhaW5lckNvbXBvbmVudH0gZnJvbSAnLi9zdWJwYW5lbC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7U3VicGFuZWxNb2R1bGV9IGZyb20gJy4uL3N1YnBhbmVsL3N1YnBhbmVsLm1vZHVsZSc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TmdiTW9kdWxlfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge0lubGluZUxvYWRpbmdTcGlubmVyTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2lubGluZS1sb2FkaW5nLXNwaW5uZXIvaW5saW5lLWxvYWRpbmctc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHtGaWVsZE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2ZpZWxkLm1vZHVsZSc7XG5pbXBvcnQge0dyaWRXaWRnZXRNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZ3JpZC13aWRnZXQvZ3JpZC13aWRnZXQubW9kdWxlJztcbmltcG9ydCB7TGFiZWxNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwubW9kdWxlJztcbmltcG9ydCB7SW1hZ2VNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtTdWJwYW5lbENvbnRhaW5lckNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1N1YnBhbmVsQ29udGFpbmVyQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmdiTW9kdWxlLFxuICAgICAgICBJbWFnZU1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBTdWJwYW5lbE1vZHVsZSxcbiAgICAgICAgSW5saW5lTG9hZGluZ1NwaW5uZXJNb2R1bGUsXG4gICAgICAgIEZpZWxkTW9kdWxlLFxuICAgICAgICBHcmlkV2lkZ2V0TW9kdWxlLFxuICAgICAgICBMYWJlbE1vZHVsZSxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1YnBhbmVsQ29udGFpbmVyTW9kdWxlIHtcbn1cbiJdfQ==