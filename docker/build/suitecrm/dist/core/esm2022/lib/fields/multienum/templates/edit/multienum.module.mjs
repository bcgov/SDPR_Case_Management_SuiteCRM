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
import { MultiEnumEditFieldComponent } from './multienum.component';
import { MultiSelectModule } from "primeng/multiselect";
import { ButtonModule } from "../../../../components/button/button.module";
import { DropdownModule } from "primeng/dropdown";
import { ImageModule } from "../../../../components/image/image.module";
import { InputTextModule } from "primeng/inputtext";
import * as i0 from "@angular/core";
class MultiEnumEditFieldModule {
    static { this.ɵfac = function MultiEnumEditFieldModule_Factory(t) { return new (t || MultiEnumEditFieldModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MultiEnumEditFieldModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FormsModule,
            MultiSelectModule,
            ButtonModule,
            DropdownModule,
            ImageModule,
            InputTextModule] }); }
}
export { MultiEnumEditFieldModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MultiEnumEditFieldModule, [{
        type: NgModule,
        args: [{
                declarations: [MultiEnumEditFieldComponent],
                exports: [MultiEnumEditFieldComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    MultiSelectModule,
                    ButtonModule,
                    DropdownModule,
                    ImageModule,
                    InputTextModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MultiEnumEditFieldModule, { declarations: [MultiEnumEditFieldComponent], imports: [CommonModule,
        FormsModule,
        MultiSelectModule,
        ButtonModule,
        DropdownModule,
        ImageModule,
        InputTextModule], exports: [MultiEnumEditFieldComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGllbnVtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvbXVsdGllbnVtL3RlbXBsYXRlcy9lZGl0L211bHRpZW51bS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDekUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRWxELE1BYWEsd0JBQXdCO3lGQUF4Qix3QkFBd0I7bUVBQXhCLHdCQUF3Qjt1RUFUN0IsWUFBWTtZQUNaLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsWUFBWTtZQUNaLGNBQWM7WUFDZCxXQUFXO1lBQ1gsZUFBZTs7U0FHVix3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQWJwQyxRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQzNDLE9BQU8sRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN0QyxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIsWUFBWTtvQkFDWixjQUFjO29CQUNkLFdBQVc7b0JBQ1gsZUFBZTtpQkFDbEI7YUFDSjs7d0ZBQ1ksd0JBQXdCLG1CQVpsQiwyQkFBMkIsYUFHdEMsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGNBQWM7UUFDZCxXQUFXO1FBQ1gsZUFBZSxhQVJULDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNdWx0aUVudW1FZGl0RmllbGRDb21wb25lbnR9IGZyb20gJy4vbXVsdGllbnVtLmNvbXBvbmVudCc7XG5pbXBvcnQge011bHRpU2VsZWN0TW9kdWxlfSBmcm9tIFwicHJpbWVuZy9tdWx0aXNlbGVjdFwiO1xuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlXCI7XG5pbXBvcnQge0Ryb3Bkb3duTW9kdWxlfSBmcm9tIFwicHJpbWVuZy9kcm9wZG93blwiO1xuaW1wb3J0IHtJbWFnZU1vZHVsZX0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UubW9kdWxlXCI7XG5pbXBvcnQge0lucHV0VGV4dE1vZHVsZX0gZnJvbSBcInByaW1lbmcvaW5wdXR0ZXh0XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbTXVsdGlFbnVtRWRpdEZpZWxkQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbTXVsdGlFbnVtRWRpdEZpZWxkQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIE11bHRpU2VsZWN0TW9kdWxlLFxuICAgICAgICBCdXR0b25Nb2R1bGUsXG4gICAgICAgIERyb3Bkb3duTW9kdWxlLFxuICAgICAgICBJbWFnZU1vZHVsZSxcbiAgICAgICAgSW5wdXRUZXh0TW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aUVudW1FZGl0RmllbGRNb2R1bGUge1xufVxuIl19