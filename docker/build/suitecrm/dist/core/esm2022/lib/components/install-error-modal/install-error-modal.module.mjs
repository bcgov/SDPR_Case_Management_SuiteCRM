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
import { InstallErrorModalComponent } from './install-error-modal.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CloseButtonModule } from '../close-button/close-button.module';
import { ModalModule } from '../modal/components/modal/modal.module';
import { LabelModule } from '../label/label.module';
import { ButtonModule } from '../button/button.module';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageModule } from '../image/image.module';
import * as i0 from "@angular/core";
class InstallErrorModalModule {
    static { this.ɵfac = function InstallErrorModalModule_Factory(t) { return new (t || InstallErrorModalModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: InstallErrorModalModule, bootstrap: [InstallErrorModalComponent] }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            DragDropModule,
            CloseButtonModule,
            ModalModule,
            LabelModule,
            ButtonModule,
            NgbModule,
            NgbAlertModule,
            ImageModule] }); }
}
export { InstallErrorModalModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallErrorModalModule, [{
        type: NgModule,
        args: [{
                declarations: [InstallErrorModalComponent],
                exports: [InstallErrorModalComponent],
                imports: [
                    CommonModule,
                    DragDropModule,
                    CloseButtonModule,
                    ModalModule,
                    LabelModule,
                    ButtonModule,
                    NgbModule,
                    NgbAlertModule,
                    ImageModule
                ],
                bootstrap: [InstallErrorModalComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(InstallErrorModalModule, { declarations: [InstallErrorModalComponent], imports: [CommonModule,
        DragDropModule,
        CloseButtonModule,
        ModalModule,
        LabelModule,
        ButtonModule,
        NgbModule,
        NgbAlertModule,
        ImageModule], exports: [InstallErrorModalComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC1lcnJvci1tb2RhbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9pbnN0YWxsLWVycm9yLW1vZGFsL2luc3RhbGwtZXJyb3ItbW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7O0FBRWxELE1BZ0JhLHVCQUF1Qjt3RkFBdkIsdUJBQXVCO21FQUF2Qix1QkFBdUIsY0FGcEIsMEJBQTBCO3VFQVZsQyxZQUFZO1lBQ1osY0FBYztZQUNkLGlCQUFpQjtZQUNqQixXQUFXO1lBQ1gsV0FBVztZQUNYLFlBQVk7WUFDWixTQUFTO1lBQ1QsY0FBYztZQUNkLFdBQVc7O1NBSU4sdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FoQm5DLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztnQkFDMUMsT0FBTyxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLGNBQWM7b0JBQ2QsaUJBQWlCO29CQUNqQixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixTQUFTO29CQUNULGNBQWM7b0JBQ2QsV0FBVztpQkFDZDtnQkFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUMxQzs7d0ZBQ1ksdUJBQXVCLG1CQWZqQiwwQkFBMEIsYUFHckMsWUFBWTtRQUNaLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsV0FBVztRQUNYLFdBQVc7UUFDWCxZQUFZO1FBQ1osU0FBUztRQUNULGNBQWM7UUFDZCxXQUFXLGFBVkwsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge0luc3RhbGxFcnJvck1vZGFsQ29tcG9uZW50fSBmcm9tICcuL2luc3RhbGwtZXJyb3ItbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7RHJhZ0Ryb3BNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHtDbG9zZUJ1dHRvbk1vZHVsZX0gZnJvbSAnLi4vY2xvc2UtYnV0dG9uL2Nsb3NlLWJ1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHtNb2RhbE1vZHVsZX0gZnJvbSAnLi4vbW9kYWwvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5tb2R1bGUnO1xuaW1wb3J0IHtMYWJlbE1vZHVsZX0gZnJvbSAnLi4vbGFiZWwvbGFiZWwubW9kdWxlJztcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICcuLi9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQge05nYkFsZXJ0TW9kdWxlLCBOZ2JNb2R1bGV9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7SW1hZ2VNb2R1bGV9IGZyb20gJy4uL2ltYWdlL2ltYWdlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbSW5zdGFsbEVycm9yTW9kYWxDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtJbnN0YWxsRXJyb3JNb2RhbENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIERyYWdEcm9wTW9kdWxlLFxuICAgICAgICBDbG9zZUJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTW9kYWxNb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlLFxuICAgICAgICBCdXR0b25Nb2R1bGUsXG4gICAgICAgIE5nYk1vZHVsZSxcbiAgICAgICAgTmdiQWxlcnRNb2R1bGUsXG4gICAgICAgIEltYWdlTW9kdWxlXG4gICAgXSxcbiAgICBib290c3RyYXA6IFtJbnN0YWxsRXJyb3JNb2RhbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSW5zdGFsbEVycm9yTW9kYWxNb2R1bGUge1xufVxuIl19