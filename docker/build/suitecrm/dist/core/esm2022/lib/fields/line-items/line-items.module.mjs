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
import { LineItemsComponent } from './line-items.component';
import { LabelModule } from '../../components/label/label.module';
import { DynamicFieldModule } from '../dynamic-field/dynamic-field.module';
import { ButtonModule } from '../../components/button/button.module';
import { BaseLineItemsComponent } from '../base/base-line-items.component';
import { DynamicLabelModule } from '../../components/dynamic-label/dynamic-label.module';
import * as i0 from "@angular/core";
class LineItemsModule {
    static { this.ɵfac = function LineItemsModule_Factory(t) { return new (t || LineItemsModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LineItemsModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            LabelModule,
            DynamicFieldModule,
            ButtonModule,
            DynamicLabelModule] }); }
}
export { LineItemsModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineItemsModule, [{
        type: NgModule,
        args: [{
                declarations: [LineItemsComponent, BaseLineItemsComponent],
                exports: [
                    LineItemsComponent
                ],
                imports: [
                    CommonModule,
                    LabelModule,
                    DynamicFieldModule,
                    ButtonModule,
                    DynamicLabelModule,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LineItemsModule, { declarations: [LineItemsComponent, BaseLineItemsComponent], imports: [CommonModule,
        LabelModule,
        DynamicFieldModule,
        ButtonModule,
        DynamicLabelModule], exports: [LineItemsComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1pdGVtcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2xpbmUtaXRlbXMvbGluZS1pdGVtcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNoRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDekUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scURBQXFELENBQUM7O0FBR3ZGLE1BYWEsZUFBZTtnRkFBZixlQUFlO21FQUFmLGVBQWU7dUVBUHBCLFlBQVk7WUFDWixXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixrQkFBa0I7O1NBR2IsZUFBZTt1RkFBZixlQUFlO2NBYjNCLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxzQkFBc0IsQ0FBQztnQkFDMUQsT0FBTyxFQUFFO29CQUNMLGtCQUFrQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxrQkFBa0I7b0JBQ2xCLFlBQVk7b0JBQ1osa0JBQWtCO2lCQUNyQjthQUNKOzt3RkFDWSxlQUFlLG1CQVpULGtCQUFrQixFQUFFLHNCQUFzQixhQUtyRCxZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osa0JBQWtCLGFBUGxCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TGluZUl0ZW1zQ29tcG9uZW50fSBmcm9tICcuL2xpbmUtaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7TGFiZWxNb2R1bGV9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGFiZWwvbGFiZWwubW9kdWxlJztcbmltcG9ydCB7RHluYW1pY0ZpZWxkTW9kdWxlfSBmcm9tICcuLi9keW5hbWljLWZpZWxkL2R5bmFtaWMtZmllbGQubW9kdWxlJztcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlJztcbmltcG9ydCB7QmFzZUxpbmVJdGVtc0NvbXBvbmVudH0gZnJvbSAnLi4vYmFzZS9iYXNlLWxpbmUtaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7RHluYW1pY0xhYmVsTW9kdWxlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2R5bmFtaWMtbGFiZWwvZHluYW1pYy1sYWJlbC5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbTGluZUl0ZW1zQ29tcG9uZW50LCBCYXNlTGluZUl0ZW1zQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIExpbmVJdGVtc0NvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlLFxuICAgICAgICBEeW5hbWljRmllbGRNb2R1bGUsXG4gICAgICAgIEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgRHluYW1pY0xhYmVsTW9kdWxlLFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTGluZUl0ZW1zTW9kdWxlIHtcbn1cbiJdfQ==