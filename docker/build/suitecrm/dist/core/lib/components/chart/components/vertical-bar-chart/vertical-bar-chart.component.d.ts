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
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { SingleSeries } from 'common';
import { BaseChartComponent } from '../base-chart/base-chart.component';
import { ScreenSizeObserverService } from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i0 from "@angular/core";
export declare class VerticalBarChartComponent extends BaseChartComponent implements OnInit, OnDestroy {
    protected elementRef: ElementRef;
    protected screenSize: ScreenSizeObserverService;
    results: SingleSeries;
    constructor(elementRef: ElementRef, screenSize: ScreenSizeObserverService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get scheme(): string;
    get gradient(): boolean;
    get xAxis(): boolean;
    get yAxis(): boolean;
    get legend(): boolean;
    get showXAxisLabel(): boolean;
    get showYAxisLabel(): boolean;
    get xAxisLabel(): string;
    get yAxisLabel(): string;
    get yAxisTickFormatting(): Function;
    formatTooltipValue(value: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<VerticalBarChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VerticalBarChartComponent, "scrm-vertical-bar-chart", never, {}, {}, never, never, false, never>;
}
