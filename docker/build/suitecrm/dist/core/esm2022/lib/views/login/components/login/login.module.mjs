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
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginUiComponent } from './login.component';
import { LoginUiRoutes } from './login.routes';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonLoadingUiModule } from '../../../../directives/button-loading/button-loading.module';
import { LogoUiModule } from '../../../../components/logo/logo.module';
import { ImageModule } from '../../../../components/image/image.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
class LoginUiModule {
    static { this.ɵfac = function LoginUiModule_Factory(t) { return new (t || LoginUiModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LoginUiModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [FormsModule,
            LogoUiModule,
            RouterModule.forChild(LoginUiRoutes),
            CommonModule,
            AngularSvgIconModule,
            ImageModule,
            ButtonLoadingUiModule] }); }
}
export { LoginUiModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginUiModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    LoginUiComponent
                ],
                exports: [
                    LoginUiComponent
                ],
                imports: [
                    FormsModule,
                    LogoUiModule,
                    RouterModule.forChild(LoginUiRoutes),
                    CommonModule,
                    AngularSvgIconModule,
                    ImageModule,
                    ButtonLoadingUiModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LoginUiModule, { declarations: [LoginUiComponent], imports: [FormsModule,
        LogoUiModule, i1.RouterModule, CommonModule,
        AngularSvgIconModule,
        ImageModule,
        ButtonLoadingUiModule], exports: [LoginUiComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xvZ2luL2NvbXBvbmVudHMvbG9naW4vbG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUNsRyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDJDQUEyQyxDQUFDOzs7QUFFdEUsTUFpQmEsYUFBYTs4RUFBYixhQUFhO21FQUFiLGFBQWE7dUVBVGxCLFdBQVc7WUFDWCxZQUFZO1lBQ1osWUFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFDcEMsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixXQUFXO1lBQ1gscUJBQXFCOztTQUdoQixhQUFhO3VGQUFiLGFBQWE7Y0FqQnpCLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1YsZ0JBQWdCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsZ0JBQWdCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsV0FBVztvQkFDWCxZQUFZO29CQUNaLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO29CQUNwQyxZQUFZO29CQUNaLG9CQUFvQjtvQkFDcEIsV0FBVztvQkFDWCxxQkFBcUI7aUJBQ3hCO2FBQ0o7O3dGQUNZLGFBQWEsbUJBZmxCLGdCQUFnQixhQU1oQixXQUFXO1FBQ1gsWUFBWSxtQkFFWixZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxxQkFBcUIsYUFUckIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0xvZ2luVWlDb21wb25lbnR9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7TG9naW5VaVJvdXRlc30gZnJvbSAnLi9sb2dpbi5yb3V0ZXMnO1xuaW1wb3J0IHtBbmd1bGFyU3ZnSWNvbk1vZHVsZX0gZnJvbSAnYW5ndWxhci1zdmctaWNvbic7XG5pbXBvcnQge0J1dHRvbkxvYWRpbmdVaU1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vZGlyZWN0aXZlcy9idXR0b24tbG9hZGluZy9idXR0b24tbG9hZGluZy5tb2R1bGUnO1xuaW1wb3J0IHtMb2dvVWlNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvbG9nby9sb2dvLm1vZHVsZSc7XG5pbXBvcnQge0ltYWdlTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2ltYWdlL2ltYWdlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIExvZ2luVWlDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTG9naW5VaUNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgTG9nb1VpTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoTG9naW5VaVJvdXRlcyksXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgQW5ndWxhclN2Z0ljb25Nb2R1bGUsXG4gICAgICAgIEltYWdlTW9kdWxlLFxuICAgICAgICBCdXR0b25Mb2FkaW5nVWlNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luVWlNb2R1bGUge1xufVxuIl19