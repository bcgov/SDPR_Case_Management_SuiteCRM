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
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field.component';
import { fieldModules } from './field.manifest';
import { DynamicFieldModule } from './dynamic-field/dynamic-field.module';
import { LineItemsModule } from './line-items/line-items.module';
import * as i0 from "@angular/core";
import * as i1 from "./varchar/templates/detail/varchar.module";
import * as i2 from "./varchar/templates/edit/varchar.module";
import * as i3 from "./varchar/templates/filter/filter.module";
import * as i4 from "./password/templates/detail/password.module";
import * as i5 from "./password/templates/edit/password.module";
import * as i6 from "./int/templates/detail/int.module";
import * as i7 from "./icon/templates/detail/icon.module";
import * as i8 from "./file/templates/detail/file.module";
import * as i9 from "./float/templates/detail/float.module";
import * as i10 from "./phone/templates/detail/phone.module";
import * as i11 from "./date/templates/detail/date.module";
import * as i12 from "./date/templates/edit/date.module";
import * as i13 from "./date/templates/filter/date.module";
import * as i14 from "./datetime/templates/detail/datetime.module";
import * as i15 from "./datetime/templates/edit/datetime.module";
import * as i16 from "./datetime/templates/filter/datetime.module";
import * as i17 from "./url/templates/detail/url.module";
import * as i18 from "./currency/templates/detail/currency.module";
import * as i19 from "./email/templates/list/email.module";
import * as i20 from "./text/templates/detail/text.module";
import * as i21 from "./text/templates/edit/text.module";
import * as i22 from "./text/templates/list/text.module";
import * as i23 from "./relate/templates/detail/relate.module";
import * as i24 from "./relate/templates/edit/relate.module";
import * as i25 from "./relate/templates/filter/relate.module";
import * as i26 from "./fullname/templates/detail/fullname.module";
import * as i27 from "./enum/templates/detail/enum.module";
import * as i28 from "./enum/templates/edit/enum.module";
import * as i29 from "./dropdownenum/templates/detail/dropdownenum.module";
import * as i30 from "./dropdownenum/templates/edit/dropdownenum.module";
import * as i31 from "./radioenum/templates/detail/radioenum.module";
import * as i32 from "./radioenum/templates/edit/radioenum.module";
import * as i33 from "./multienum/templates/detail/multienum.module";
import * as i34 from "./multienum/templates/edit/multienum.module";
import * as i35 from "./multienum/templates/filter/multienum.module";
import * as i36 from "./boolean/templates/detail/boolean.module";
import * as i37 from "./boolean/templates/edit/boolean.module";
import * as i38 from "./boolean/templates/filter/boolean.module";
import * as i39 from "./html/templates/detail/html.module";
import * as i40 from "./tinymce/templates/detail/tinymce.module";
import * as i41 from "./tinymce/templates/edit/tinymce.module";
import * as i42 from "./group-field/group-field.module";
import * as i43 from "./composite/composite.module";
class FieldModule {
    static { this.ɵfac = function FieldModule_Factory(t) { return new (t || FieldModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FieldModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [fieldModules, CommonModule,
            DynamicFieldModule,
            LineItemsModule] }); }
}
export { FieldModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    FieldComponent,
                ],
                exports: [
                    FieldComponent,
                ],
                imports: [
                    ...fieldModules,
                    CommonModule,
                    DynamicFieldModule,
                    LineItemsModule
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FieldModule, { declarations: [FieldComponent], imports: [i1.VarcharDetailFieldModule, i2.VarcharEditFieldModule, i3.VarcharFilterFieldModule, i4.PasswordDetailFieldModule, i5.PasswordEditFieldModule, i6.IntDetailFieldModule, i7.IconListFieldModule, i8.FileDetailFieldModule, i9.FloatDetailFieldModule, i10.PhoneDetailFieldModule, i11.DateDetailFieldModule, i12.DateEditFieldModule, i13.DateFilterFieldModule, i14.DateTimeDetailFieldModule, i15.DateTimeEditFieldModule, i16.DateTimeFilterFieldModule, i17.UrlDetailFieldModule, i18.CurrencyDetailFieldModule, i19.EmailListFieldsModule, i20.TextDetailFieldModule, i21.TextEditFieldModule, i22.TextListFieldModule, i23.RelateDetailFieldsModule, i24.RelateEditFieldModule, i25.RelateFilterFieldModule, i26.FullNameDetailFieldsModule, i27.EnumDetailFieldModule, i28.EnumEditFieldModule, i29.DropdownEnumDetailFieldModule, i30.DropdownEnumEditFieldModule, i31.RadioEnumDetailFieldModule, i32.RadioEnumEditFieldModule, i33.MultiEnumDetailFieldModule, i34.MultiEnumEditFieldModule, i35.MultiEnumFilterFieldModule, i36.BooleanDetailFieldModule, i37.BooleanEditFieldModule, i38.BooleanFilterFieldModule, i39.HtmlDetailFieldModule, i40.TinymceDetailFieldModule, i41.TinymceEditFieldModule, i42.GroupFieldModule, i43.CompositeModule, CommonModule,
        DynamicFieldModule,
        LineItemsModule], exports: [FieldComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9maWVsZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxzQkFBc0IsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDOUMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0QsTUFlYSxXQUFXOzRFQUFYLFdBQVc7bUVBQVgsV0FBVzt1RUFQYixZQUFZLEVBQ2YsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixlQUFlOztTQUlWLFdBQVc7dUZBQVgsV0FBVztjQWZ2QixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLGNBQWM7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxjQUFjO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsR0FBRyxZQUFZO29CQUNmLFlBQVk7b0JBQ1osa0JBQWtCO29CQUNsQixlQUFlO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNwQzs7d0ZBQ1ksV0FBVyxtQkFiaEIsY0FBYywyc0NBT2QsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixlQUFlLGFBTmYsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7RmllbGRDb21wb25lbnR9IGZyb20gJy4vZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7ZmllbGRNb2R1bGVzfSBmcm9tICcuL2ZpZWxkLm1hbmlmZXN0JztcbmltcG9ydCB7RHluYW1pY0ZpZWxkTW9kdWxlfSBmcm9tICcuL2R5bmFtaWMtZmllbGQvZHluYW1pYy1maWVsZC5tb2R1bGUnO1xuaW1wb3J0IHtMaW5lSXRlbXNNb2R1bGV9IGZyb20gJy4vbGluZS1pdGVtcy9saW5lLWl0ZW1zLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEZpZWxkQ29tcG9uZW50LFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBGaWVsZENvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgLi4uZmllbGRNb2R1bGVzLFxuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIER5bmFtaWNGaWVsZE1vZHVsZSxcbiAgICAgICAgTGluZUl0ZW1zTW9kdWxlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgRmllbGRNb2R1bGUge1xufVxuIl19