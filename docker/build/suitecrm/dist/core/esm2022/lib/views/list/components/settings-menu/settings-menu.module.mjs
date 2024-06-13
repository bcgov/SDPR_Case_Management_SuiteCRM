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
import { SettingsMenuComponent } from './settings-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownButtonModule } from '../../../../components/dropdown-button/dropdown-button.module';
import { ButtonGroupModule } from '../../../../components/button-group/button-group.module';
import { ButtonModule } from '../../../../components/button/button.module';
import { ColumnChooserModule } from '../../../../components/columnchooser/columnchooser.module';
import { ImageModule } from '../../../../components/image/image.module';
import { LabelModule } from '../../../../components/label/label.module';
import * as i0 from "@angular/core";
class SettingsMenuModule {
    static { this.ɵfac = function SettingsMenuModule_Factory(t) { return new (t || SettingsMenuModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SettingsMenuModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ColumnChooserModule,
            ImageModule,
            ButtonModule,
            DropdownButtonModule,
            NgbModule,
            ButtonGroupModule,
            LabelModule] }); }
}
export { SettingsMenuModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingsMenuModule, [{
        type: NgModule,
        args: [{
                declarations: [SettingsMenuComponent],
                exports: [SettingsMenuComponent],
                imports: [
                    CommonModule,
                    ColumnChooserModule,
                    ImageModule,
                    ButtonModule,
                    DropdownButtonModule,
                    NgbModule,
                    ButtonGroupModule,
                    LabelModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SettingsMenuModule, { declarations: [SettingsMenuComponent], imports: [CommonModule,
        ColumnChooserModule,
        ImageModule,
        ButtonModule,
        DropdownButtonModule,
        NgbModule,
        ButtonGroupModule,
        LabelModule], exports: [SettingsMenuComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9jb21wb25lbnRzL3NldHRpbmdzLW1lbnUvc2V0dGluZ3MtbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRWhFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUNuRyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUMxRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDekUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFDOUYsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFdEUsTUFjYSxrQkFBa0I7bUZBQWxCLGtCQUFrQjttRUFBbEIsa0JBQWtCO3VFQVZ2QixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLFNBQVM7WUFDVCxpQkFBaUI7WUFDakIsV0FBVzs7U0FHTixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQWQ5QixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNoQyxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixvQkFBb0I7b0JBQ3BCLFNBQVM7b0JBQ1QsaUJBQWlCO29CQUNqQixXQUFXO2lCQUNkO2FBQ0o7O3dGQUNZLGtCQUFrQixtQkFiWixxQkFBcUIsYUFHaEMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixTQUFTO1FBQ1QsaUJBQWlCO1FBQ2pCLFdBQVcsYUFUTCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7U2V0dGluZ3NNZW51Q29tcG9uZW50fSBmcm9tICcuL3NldHRpbmdzLW1lbnUuY29tcG9uZW50JztcblxuaW1wb3J0IHtOZ2JNb2R1bGV9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7RHJvcGRvd25CdXR0b25Nb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZHJvcGRvd24tYnV0dG9uL2Ryb3Bkb3duLWJ1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHtCdXR0b25Hcm91cE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLm1vZHVsZSc7XG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQge0NvbHVtbkNob29zZXJNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29sdW1uY2hvb3Nlci9jb2x1bW5jaG9vc2VyLm1vZHVsZSc7XG5pbXBvcnQge0ltYWdlTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2ltYWdlL2ltYWdlLm1vZHVsZSc7XG5pbXBvcnQge0xhYmVsTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xhYmVsL2xhYmVsLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbU2V0dGluZ3NNZW51Q29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbU2V0dGluZ3NNZW51Q29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgQ29sdW1uQ2hvb3Nlck1vZHVsZSxcbiAgICAgICAgSW1hZ2VNb2R1bGUsXG4gICAgICAgIEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgRHJvcGRvd25CdXR0b25Nb2R1bGUsXG4gICAgICAgIE5nYk1vZHVsZSxcbiAgICAgICAgQnV0dG9uR3JvdXBNb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc01lbnVNb2R1bGUge1xufVxuIl19