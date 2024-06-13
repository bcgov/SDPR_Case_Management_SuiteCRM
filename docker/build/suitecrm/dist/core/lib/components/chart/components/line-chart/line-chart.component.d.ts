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
import { MultiSeries } from 'common';
import { BaseChartComponent } from '../base-chart/base-chart.component';
import { ScreenSizeObserverService } from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i0 from "@angular/core";
export declare class LineChartComponent extends BaseChartComponent implements OnInit, OnDestroy {
    protected elementRef: ElementRef;
    protected screenSize: ScreenSizeObserverService;
    results: MultiSeries;
    scheme: string;
    gradient: boolean;
    xAxis: boolean;
    yAxis: boolean;
    legend: boolean;
    xScaleMin: number | string;
    xScaleMax: number | string;
    xAxisTicks: any;
    showXAxisLabel: boolean;
    showYAxisLabel: boolean;
    xAxisLabel: string;
    yAxisLabel: string;
    yAxisTickFormatting: Function;
    xAxisTickFormatting: Function;
    tooltipDisabled: boolean;
    constructor(elementRef: ElementRef, screenSize: ScreenSizeObserverService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getScheme(): string;
    getGradient(): boolean;
    getXAxis(): boolean;
    getYAxis(): boolean;
    getLegend(): boolean;
    getXScaleMin(): number | string;
    getXScaleMax(): number | string;
    getXAxisTicks(): any;
    getShowXAxisLabel(): boolean;
    getShowYAxisLabel(): boolean;
    getXAxisLabel(): string;
    getYAxisLabel(): string;
    getYAxisTickFormatting(): Function;
    getXAxisTickFormatting(): Function;
    getTooltipDisabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<LineChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LineChartComponent, "scrm-line-chart", never, {}, {}, never, never, false, never>;
}
