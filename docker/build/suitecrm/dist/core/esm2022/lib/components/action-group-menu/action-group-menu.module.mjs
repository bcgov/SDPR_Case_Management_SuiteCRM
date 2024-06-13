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
import { ActionGroupMenuComponent } from './action-group-menu.component';
import { ButtonGroupModule } from '../button-group/button-group.module';
import { ButtonModule } from '../button/button.module';
import { ImageModule } from '../image/image.module';
import { LabelModule } from '../label/label.module';
import { DynamicLabelModule } from '../dynamic-label/dynamic-label.module';
import { InlineLoadingSpinnerModule } from '../inline-loading-spinner/inline-loading-spinner.module';
import * as i0 from "@angular/core";
class ActionGroupMenuModule {
    static { this.ɵfac = function ActionGroupMenuModule_Factory(t) { return new (t || ActionGroupMenuModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ActionGroupMenuModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ImageModule,
            ButtonModule,
            ButtonGroupModule,
            LabelModule,
            DynamicLabelModule,
            InlineLoadingSpinnerModule] }); }
}
export { ActionGroupMenuModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionGroupMenuModule, [{
        type: NgModule,
        args: [{
                declarations: [ActionGroupMenuComponent],
                exports: [ActionGroupMenuComponent],
                imports: [
                    CommonModule,
                    ImageModule,
                    ButtonModule,
                    ButtonGroupModule,
                    LabelModule,
                    DynamicLabelModule,
                    InlineLoadingSpinnerModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ActionGroupMenuModule, { declarations: [ActionGroupMenuComponent], imports: [CommonModule,
        ImageModule,
        ButtonModule,
        ButtonGroupModule,
        LabelModule,
        DynamicLabelModule,
        InlineLoadingSpinnerModule], exports: [ActionGroupMenuComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWdyb3VwLW1lbnUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYWN0aW9uLWdyb3VwLW1lbnUvYWN0aW9uLWdyb3VwLW1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQzs7QUFFbkcsTUFhYSxxQkFBcUI7c0ZBQXJCLHFCQUFxQjttRUFBckIscUJBQXFCO3VFQVQxQixZQUFZO1lBQ1osV0FBVztZQUNYLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsV0FBVztZQUNYLGtCQUFrQjtZQUNsQiwwQkFBMEI7O1NBR3JCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBYmpDLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ25DLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLFdBQVc7b0JBQ1gsa0JBQWtCO29CQUNsQiwwQkFBMEI7aUJBQzdCO2FBQ0o7O3dGQUNZLHFCQUFxQixtQkFaZix3QkFBd0IsYUFHbkMsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsMEJBQTBCLGFBUnBCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7QWN0aW9uR3JvdXBNZW51Q29tcG9uZW50fSBmcm9tICcuL2FjdGlvbi1ncm91cC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQge0J1dHRvbkdyb3VwTW9kdWxlfSBmcm9tICcuLi9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLm1vZHVsZSc7XG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHtJbWFnZU1vZHVsZX0gZnJvbSAnLi4vaW1hZ2UvaW1hZ2UubW9kdWxlJztcbmltcG9ydCB7TGFiZWxNb2R1bGV9IGZyb20gJy4uL2xhYmVsL2xhYmVsLm1vZHVsZSc7XG5pbXBvcnQge0R5bmFtaWNMYWJlbE1vZHVsZX0gZnJvbSAnLi4vZHluYW1pYy1sYWJlbC9keW5hbWljLWxhYmVsLm1vZHVsZSc7XG5pbXBvcnQge0lubGluZUxvYWRpbmdTcGlubmVyTW9kdWxlfSBmcm9tICcuLi9pbmxpbmUtbG9hZGluZy1zcGlubmVyL2lubGluZS1sb2FkaW5nLXNwaW5uZXIubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtBY3Rpb25Hcm91cE1lbnVDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtBY3Rpb25Hcm91cE1lbnVDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBJbWFnZU1vZHVsZSxcbiAgICAgICAgQnV0dG9uTW9kdWxlLFxuICAgICAgICBCdXR0b25Hcm91cE1vZHVsZSxcbiAgICAgICAgTGFiZWxNb2R1bGUsXG4gICAgICAgIER5bmFtaWNMYWJlbE1vZHVsZSxcbiAgICAgICAgSW5saW5lTG9hZGluZ1NwaW5uZXJNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbkdyb3VwTWVudU1vZHVsZSB7XG59XG4iXX0=