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
import { FieldModule } from '../../fields/field.module';
import { ButtonModule } from '../button/button.module';
import { LabelModule } from '../label/label.module';
import { RecordFlexboxComponent } from './record-flexbox.component';
import { ActionGroupMenuModule } from '../action-group-menu/action-group-menu.module';
import { DynamicLabelModule } from '../dynamic-label/dynamic-label.module';
import * as i0 from "@angular/core";
class RecordFlexboxModule {
    static { this.ɵfac = function RecordFlexboxModule_Factory(t) { return new (t || RecordFlexboxModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RecordFlexboxModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ButtonModule,
            FieldModule,
            LabelModule,
            ActionGroupMenuModule,
            DynamicLabelModule] }); }
}
export { RecordFlexboxModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordFlexboxModule, [{
        type: NgModule,
        args: [{
                declarations: [RecordFlexboxComponent],
                exports: [
                    RecordFlexboxComponent
                ],
                imports: [
                    CommonModule,
                    ButtonModule,
                    FieldModule,
                    LabelModule,
                    ActionGroupMenuModule,
                    DynamicLabelModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RecordFlexboxModule, { declarations: [RecordFlexboxComponent], imports: [CommonModule,
        ButtonModule,
        FieldModule,
        LabelModule,
        ActionGroupMenuModule,
        DynamicLabelModule], exports: [RecordFlexboxComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWZsZXhib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWZsZXhib3gvcmVjb3JkLWZsZXhib3gubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNwRixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQzs7QUFFekUsTUFjYSxtQkFBbUI7b0ZBQW5CLG1CQUFtQjttRUFBbkIsbUJBQW1CO3VFQVJ4QixZQUFZO1lBQ1osWUFBWTtZQUNaLFdBQVc7WUFDWCxXQUFXO1lBQ1gscUJBQXFCO1lBQ3JCLGtCQUFrQjs7U0FHYixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQWQvQixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRTtvQkFDTCxzQkFBc0I7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxXQUFXO29CQUNYLHFCQUFxQjtvQkFDckIsa0JBQWtCO2lCQUNyQjthQUNKOzt3RkFDWSxtQkFBbUIsbUJBYmIsc0JBQXNCLGFBS2pDLFlBQVk7UUFDWixZQUFZO1FBQ1osV0FBVztRQUNYLFdBQVc7UUFDWCxxQkFBcUI7UUFDckIsa0JBQWtCLGFBUmxCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7RmllbGRNb2R1bGV9IGZyb20gJy4uLy4uL2ZpZWxkcy9maWVsZC5tb2R1bGUnO1xuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gJy4uL2J1dHRvbi9idXR0b24ubW9kdWxlJztcbmltcG9ydCB7TGFiZWxNb2R1bGV9IGZyb20gJy4uL2xhYmVsL2xhYmVsLm1vZHVsZSc7XG5pbXBvcnQge1JlY29yZEZsZXhib3hDb21wb25lbnR9IGZyb20gJy4vcmVjb3JkLWZsZXhib3guY29tcG9uZW50JztcbmltcG9ydCB7QWN0aW9uR3JvdXBNZW51TW9kdWxlfSBmcm9tICcuLi9hY3Rpb24tZ3JvdXAtbWVudS9hY3Rpb24tZ3JvdXAtbWVudS5tb2R1bGUnO1xuaW1wb3J0IHtEeW5hbWljTGFiZWxNb2R1bGV9IGZyb20gJy4uL2R5bmFtaWMtbGFiZWwvZHluYW1pYy1sYWJlbC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1JlY29yZEZsZXhib3hDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUmVjb3JkRmxleGJveENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgRmllbGRNb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlLFxuICAgICAgICBBY3Rpb25Hcm91cE1lbnVNb2R1bGUsXG4gICAgICAgIER5bmFtaWNMYWJlbE1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkRmxleGJveE1vZHVsZSB7XG59XG4iXX0=