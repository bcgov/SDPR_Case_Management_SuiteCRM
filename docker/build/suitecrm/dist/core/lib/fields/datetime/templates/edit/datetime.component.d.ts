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
import { OnDestroy, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct, NgbPopoverConfig, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { ButtonInterface } from 'common';
import { BaseDateTimeComponent } from '../../../base/datetime/base-datetime.component';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { DatetimeFormatter } from "../../../../services/formatters/datetime/datetime-formatter.service";
import { DateTimeModel } from "../../datetime.model";
import { PlacementArray } from "@ng-bootstrap/ng-bootstrap/util/positioning";
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class DateTimeEditFieldComponent extends BaseDateTimeComponent implements OnInit, OnDestroy {
    protected formatter: DatetimeFormatter;
    protected typeFormatter: DataTypeFormatter;
    protected calendar: NgbCalendar;
    protected config: NgbPopoverConfig;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    private popover;
    dateTimeModel: DateTimeModel;
    constructor(formatter: DatetimeFormatter, typeFormatter: DataTypeFormatter, calendar: NgbCalendar, config: NgbPopoverConfig, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected setFormValues(dateTimeString: string): void;
    onDateChange(date: NgbDateStruct | null): void;
    onTimeChange(time: NgbTimeStruct | null): void;
    onInputChange($event: any): void;
    getOpenButton(): ButtonInterface;
    getPlacement(): PlacementArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateTimeEditFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateTimeEditFieldComponent, "scrm-datetime-edit", never, {}, {}, never, never, false, never>;
}
