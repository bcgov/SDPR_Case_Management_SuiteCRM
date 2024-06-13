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
import { BaseFieldComponent } from '../base-field.component';
import { DataTypeFormatter } from '../../../services/formatters/data-type.formatter.service';
import { DatetimeFormatter } from '../../../services/formatters/datetime/datetime-formatter.service';
import { FieldLogicManager } from '../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class BaseDateTimeComponent extends BaseFieldComponent {
    protected formatter: DatetimeFormatter;
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    vm$: import("rxjs").Observable<import("../../../services/formatters/datetime/datetime-formatter.service").DatetimeFormats>;
    constructor(formatter: DatetimeFormatter, typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    getDateFormat(): string;
    getDateTimeFormat(): string;
    protected toInternalFormat(fieldType: any, value: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseDateTimeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseDateTimeComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
