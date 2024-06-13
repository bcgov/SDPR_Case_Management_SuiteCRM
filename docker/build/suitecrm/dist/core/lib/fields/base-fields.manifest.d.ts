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
import { PhoneDetailFieldComponent } from './phone/templates/detail/phone.component';
import { MultiEnumFilterFieldComponent } from './multienum/templates/filter/multienum.component';
import { EnumDetailFieldModule } from './enum/templates/detail/enum.module';
import { VarcharDetailFieldComponent } from './varchar/templates/detail/varchar.component';
import { UrlDetailFieldComponent } from './url/templates/detail/url.component';
import { TextDetailFieldComponent } from './text/templates/detail/text.component';
import { VarcharEditFieldComponent } from './varchar/templates/edit/varchar.component';
import { DateTimeDetailFieldComponent } from './datetime/templates/detail/datetime.component';
import { DateTimeFilterFieldComponent } from "./datetime/templates/filter/datetime.component";
import { MultiEnumDetailFieldComponent } from './multienum/templates/detail/multienum.component';
import { EnumEditFieldComponent } from './enum/templates/edit/enum.component';
import { BooleanDetailFieldComponent } from './boolean/templates/detail/boolean.component';
import { VarcharFilterFieldComponent } from './varchar/templates/filter/filter.component';
import { CurrencyDetailFieldComponent } from './currency/templates/detail/currency.component';
import { FileDetailFieldComponent } from './file/templates/detail/file.component';
import { DateDetailFieldComponent } from './date/templates/detail/date.component';
import { FloatDetailFieldComponent } from './float/templates/detail/float.component';
import { DateEditFieldComponent } from './date/templates/edit/date.component';
import { BooleanFilterFieldComponent } from './boolean/templates/filter/boolean.component';
import { EnumDetailFieldComponent } from './enum/templates/detail/enum.component';
import { RelateDetailFieldComponent } from './relate/templates/detail/relate.component';
import { RelateFilterFieldComponent } from './relate/templates/filter/relate.component';
import { RelateEditFieldComponent } from './relate/templates/edit/relate.component';
import { EmailListFieldsComponent } from './email/templates/list/email.component';
import { MultiEnumEditFieldComponent } from './multienum/templates/edit/multienum.component';
import { IntDetailFieldComponent } from './int/templates/detail/int.component';
import { FullNameDetailFieldsComponent } from './fullname/templates/detail/fullname.component';
import { BooleanEditFieldComponent } from './boolean/templates/edit/boolean.component';
import { DateTimeEditFieldComponent } from './datetime/templates/edit/datetime.component';
import { FieldComponentMap } from './field.model';
import { TextEditFieldComponent } from './text/templates/edit/text.component';
import { DropdownEnumDetailFieldComponent } from './dropdownenum/templates/detail/dropdownenum.component';
import { DropdownEnumEditFieldComponent } from './dropdownenum/templates/edit/dropdownenum.component';
import { RadioEnumDetailFieldComponent } from './radioenum/templates/detail/radioenum.component';
import { RadioEnumEditFieldComponent } from './radioenum/templates/edit/radioenum.component';
import { HtmlDetailFieldComponent } from './html/templates/detail/html.component';
import { PasswordDetailFieldComponent } from './password/templates/detail/password.component';
import { PasswordEditFieldComponent } from './password/templates/edit/password.component';
import { TinymceDetailFieldComponent } from './tinymce/templates/detail/tinymce.component';
import { TinymceEditFieldComponent } from './tinymce/templates/edit/tinymce.component';
import { IconDetailFieldComponent } from "./icon/templates/detail/icon.component";
import { TextListFieldComponent } from './text/templates/list/text.component';
export declare const baseFieldModules: (typeof EnumDetailFieldModule)[];
export declare const baseFieldComponents: (typeof PhoneDetailFieldComponent | typeof MultiEnumFilterFieldComponent | typeof EnumDetailFieldComponent | typeof FullNameDetailFieldsComponent | typeof VarcharDetailFieldComponent | typeof UrlDetailFieldComponent | typeof DateDetailFieldComponent | typeof CurrencyDetailFieldComponent | typeof TextDetailFieldComponent | typeof VarcharEditFieldComponent | typeof DateTimeEditFieldComponent | typeof DateEditFieldComponent | typeof DateTimeDetailFieldComponent | typeof DateTimeFilterFieldComponent | typeof MultiEnumDetailFieldComponent | typeof EnumEditFieldComponent | typeof BooleanDetailFieldComponent | typeof EmailListFieldsComponent | typeof VarcharFilterFieldComponent | typeof FileDetailFieldComponent | typeof FloatDetailFieldComponent | typeof BooleanFilterFieldComponent | typeof RelateDetailFieldComponent | typeof RelateEditFieldComponent | typeof RelateFilterFieldComponent | typeof BooleanEditFieldComponent | typeof MultiEnumEditFieldComponent | typeof IntDetailFieldComponent | typeof TextEditFieldComponent | typeof DropdownEnumEditFieldComponent | typeof DropdownEnumDetailFieldComponent | typeof RadioEnumDetailFieldComponent | typeof RadioEnumEditFieldComponent | typeof HtmlDetailFieldComponent | typeof PasswordDetailFieldComponent | typeof PasswordEditFieldComponent | typeof TinymceDetailFieldComponent | typeof TinymceEditFieldComponent | typeof IconDetailFieldComponent | typeof TextListFieldComponent)[];
export declare const baseViewFieldsMap: FieldComponentMap;
