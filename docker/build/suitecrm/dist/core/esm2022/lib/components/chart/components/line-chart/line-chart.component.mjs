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
import { Component, ElementRef } from '@angular/core';
import { isFalse } from 'common';
import { BaseChartComponent } from '../base-chart/base-chart.component';
import { ScreenSizeObserverService } from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i2 from "@angular/common";
import * as i3 from "@swimlane/ngx-charts";
import * as i4 from "../chart-message-area/chart-message-area.component";
import * as i5 from "../../../loading-spinner/loading-spinner.component";
function LineChartComponent_scrm_chart_message_area_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-chart-message-area", 3);
} }
function LineChartComponent_ng_container_1_ngx_charts_line_chart_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-line-chart", 5);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("animations", false)("results", ctx_r3.results)("view", ctx_r3.view())("scheme", ctx_r3.scheme)("gradient", ctx_r3.gradient)("xAxis", ctx_r3.xAxis)("yAxis", ctx_r3.yAxis)("legend", ctx_r3.legend)("xScaleMin", ctx_r3.xScaleMin)("xScaleMax", ctx_r3.xScaleMax)("xAxisTicks", ctx_r3.xAxisTicks)("showXAxisLabel", ctx_r3.showXAxisLabel)("showYAxisLabel", ctx_r3.showYAxisLabel)("xAxisLabel", ctx_r3.xAxisLabel)("legendPosition", "below")("autoScale", true)("yAxisTickFormatting", ctx_r3.yAxisTickFormatting)("xAxisTickFormatting", ctx_r3.xAxisTickFormatting)("tooltipDisabled", ctx_r3.tooltipDisabled)("yAxisLabel", ctx_r3.yAxisLabel);
} }
function LineChartComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LineChartComponent_ng_container_1_ngx_charts_line_chart_1_Template, 1, 20, "ngx-charts-line-chart", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.results && ctx_r1.results.length > 0);
} }
function LineChartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-loading-spinner");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵclassProp("m-5", true);
} }
class LineChartComponent extends BaseChartComponent {
    constructor(elementRef, screenSize) {
        super(elementRef, screenSize);
        this.elementRef = elementRef;
        this.screenSize = screenSize;
    }
    ngOnInit() {
        if (this.dataSource.options.height) {
            this.height = this.dataSource.options.height;
        }
        this.initResizeListener();
        this.subs.push(this.dataSource.getResults().subscribe(value => {
            this.results = value.multiSeries;
            this.calculateView();
        }));
        this.scheme = this.getScheme();
        this.gradient = this.getGradient();
        this.xAxis = this.getXAxis();
        this.yAxis = this.getYAxis();
        this.legend = this.getLegend();
        this.xScaleMin = this.getXScaleMin();
        this.xScaleMax = this.getXScaleMax();
        this.xAxisTicks = this.getXAxisTicks();
        this.showXAxisLabel = this.getShowXAxisLabel();
        this.showYAxisLabel = this.getShowYAxisLabel();
        this.xAxisLabel = this.getXAxisLabel();
        this.yAxisLabel = this.getYAxisLabel();
        this.yAxisTickFormatting = this.getYAxisTickFormatting();
        this.xAxisTickFormatting = this.getXAxisTickFormatting();
        this.tooltipDisabled = this.getTooltipDisabled();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getScheme() {
        return this.dataSource.options.scheme || 'picnic';
    }
    getGradient() {
        return this.dataSource.options.gradient || false;
    }
    getXAxis() {
        return !isFalse(this.dataSource.options.xAxis);
    }
    getYAxis() {
        return !isFalse(this.dataSource.options.yAxis);
    }
    getLegend() {
        return !isFalse(this.dataSource.options.legend);
    }
    getXScaleMin() {
        return this.dataSource.options.xScaleMin || null;
    }
    getXScaleMax() {
        return this.dataSource.options.xScaleMax || null;
    }
    getXAxisTicks() {
        return this.dataSource.options.xAxisTicks || null;
    }
    getShowXAxisLabel() {
        return !isFalse(this.dataSource.options.showXAxisLabel);
    }
    getShowYAxisLabel() {
        return this.dataSource.options.showYAxisLabel || false;
    }
    getXAxisLabel() {
        return this.dataSource.options.xAxisLabel || '';
    }
    getYAxisLabel() {
        return this.dataSource.options.yAxisLabel || '';
    }
    getYAxisTickFormatting() {
        if (!this.dataSource.options.yAxisTickFormatting) {
            return null;
        }
        return this.dataSource.tickFormatting || null;
    }
    getXAxisTickFormatting() {
        if (!this.dataSource.options.xAxisTickFormatting) {
            return null;
        }
        return this.dataSource.tickFormatting || null;
    }
    getTooltipDisabled() {
        return this.dataSource.options.tooltipDisabled || false;
    }
    static { this.ɵfac = function LineChartComponent_Factory(t) { return new (t || LineChartComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ScreenSizeObserverService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LineChartComponent, selectors: [["scrm-line-chart"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 3, consts: [["labelKey", "LBL_NO_DATA", 4, "ngIf"], [4, "ngIf"], ["class", "chart-loading", 3, "m-5", 4, "ngIf"], ["labelKey", "LBL_NO_DATA"], ["class", "line-chart", 3, "animations", "results", "view", "scheme", "gradient", "xAxis", "yAxis", "legend", "xScaleMin", "xScaleMax", "xAxisTicks", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "legendPosition", "autoScale", "yAxisTickFormatting", "xAxisTickFormatting", "tooltipDisabled", "yAxisLabel", 4, "ngIf"], [1, "line-chart", 3, "animations", "results", "view", "scheme", "gradient", "xAxis", "yAxis", "legend", "xScaleMin", "xScaleMax", "xAxisTicks", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "legendPosition", "autoScale", "yAxisTickFormatting", "xAxisTickFormatting", "tooltipDisabled", "yAxisLabel"], [1, "chart-loading"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LineChartComponent_scrm_chart_message_area_0_Template, 1, 0, "scrm-chart-message-area", 0);
            i0.ɵɵtemplate(1, LineChartComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            i0.ɵɵtemplate(2, LineChartComponent_div_2_Template, 2, 2, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.results || !ctx.results.length || ctx.results.length < 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.view().length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.view().length && ctx.results && ctx.results.length > 0);
        } }, dependencies: [i2.NgIf, i3.LineChartComponent, i4.ChartMessageAreaComponent, i5.LoadingSpinnerComponent], encapsulation: 2 }); }
}
export { LineChartComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineChartComponent, [{
        type: Component,
        args: [{ selector: 'scrm-line-chart', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-chart-message-area *ngIf=\"!results || !results.length || results.length < 1\"\n                         labelKey=\"LBL_NO_DATA\"></scrm-chart-message-area>\n<ng-container *ngIf=\"view().length\">\n    <ngx-charts-line-chart *ngIf=\"results && results.length > 0\"\n                           class=\"line-chart\"\n                           [animations]=\"false\"\n                           [results]=\"results\"\n                           [view]=\"view()\"\n                           [scheme]=\"scheme\"\n                           [gradient]=\"gradient\"\n                           [xAxis]=\"xAxis\"\n                           [yAxis]=\"yAxis\"\n                           [legend]=\"legend\"\n                           [xScaleMin]=\"xScaleMin\"\n                           [xScaleMax]=\"xScaleMax\"\n                           [xAxisTicks]=\"xAxisTicks\"\n                           [showXAxisLabel]=\"showXAxisLabel\"\n                           [showYAxisLabel]=\"showYAxisLabel\"\n                           [xAxisLabel]=\"xAxisLabel\"\n                           [legendPosition]=\"'below'\"\n                           [autoScale]=\"true\"\n                           [yAxisTickFormatting]=\"yAxisTickFormatting\"\n                           [xAxisTickFormatting]=\"xAxisTickFormatting\"\n                           [tooltipDisabled]=\"tooltipDisabled\"\n                           [yAxisLabel]=\"yAxisLabel\">\n    </ngx-charts-line-chart>\n</ng-container>\n<div *ngIf=\"!view().length && results && results.length > 0\" [class.m-5]=\"true\" class=\"chart-loading\">\n    <scrm-loading-spinner></scrm-loading-spinner>\n</div>\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.ScreenSizeObserverService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC9jb21wb25lbnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC9jb21wb25lbnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxPQUFPLEVBQWMsTUFBTSxRQUFRLENBQUM7QUFDNUMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMkVBQTJFLENBQUM7Ozs7Ozs7O0lDRnBILDZDQUMwRTs7O0lBRXRFLDJDQXNCd0I7OztJQXBCRCxrQ0FBb0IsMkJBQUEsdUJBQUEseUJBQUEsNkJBQUEsdUJBQUEsdUJBQUEseUJBQUEsK0JBQUEsK0JBQUEsaUNBQUEseUNBQUEseUNBQUEsaUNBQUEsMkJBQUEsbUJBQUEsbURBQUEsbURBQUEsMkNBQUEsaUNBQUE7OztJQUgvQyw2QkFBb0M7SUFDaEMsdUhBc0J3QjtJQUM1QiwwQkFBZTs7O0lBdkJhLGVBQW1DO0lBQW5DLGtFQUFtQzs7O0lBd0IvRCw4QkFBc0c7SUFDbEcsdUNBQTZDO0lBQ2pELGlCQUFNOztJQUZ1RCwyQkFBa0I7O0FEdkIvRSxNQUthLGtCQUFtQixTQUFRLGtCQUFrQjtJQW1CdEQsWUFBc0IsVUFBc0IsRUFBWSxVQUFxQztRQUN6RixLQUFLLENB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SUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsZUFBZSxJQUFJLEtBQUssQ0FBQztJQUM1RCxDQUFDO21GQXhIUSxrQkFBa0I7b0VBQWxCLGtCQUFrQjtZQ1QvQiwyR0FDMEU7WUFDMUUscUZBd0JlO1lBQ2YsbUVBRU07O1lBN0JvQixvRkFBdUQ7WUFFbEUsZUFBbUI7WUFBbkIsd0NBQW1CO1lBeUI1QixlQUFxRDtZQUFyRCxrRkFBcUQ7OztTRGxCOUMsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FMOUIsU0FBUzsyQkFDSSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2lzRmFsc2UsIE11bHRpU2VyaWVzfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtCYXNlQ2hhcnRDb21wb25lbnR9IGZyb20gJy4uL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHtTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvdWkvc2NyZWVuLXNpemUtb2JzZXJ2ZXIvc2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tbGluZS1jaGFydCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xpbmUtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgTGluZUNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcmVzdWx0czogTXVsdGlTZXJpZXM7XG4gICAgc2NoZW1lOiBzdHJpbmc7XG4gICAgZ3JhZGllbnQ6IGJvb2xlYW47XG4gICAgeEF4aXM6IGJvb2xlYW47XG4gICAgeUF4aXM6IGJvb2xlYW47XG4gICAgbGVnZW5kOiBib29sZWFuO1xuICAgIHhTY2FsZU1pbjogbnVtYmVyIHwgc3RyaW5nO1xuICAgIHhTY2FsZU1heDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIHhBeGlzVGlja3M6IGFueTtcbiAgICBzaG93WEF4aXNMYWJlbDogYm9vbGVhbjtcbiAgICBzaG93WUF4aXNMYWJlbDogYm9vbGVhbjtcbiAgICB4QXhpc0xhYmVsOiBzdHJpbmc7XG4gICAgeUF4aXNMYWJlbDogc3RyaW5nO1xuICAgIHlBeGlzVGlja0Zvcm1hdHRpbmc6IEZ1bmN0aW9uO1xuICAgIHhBeGlzVGlja0Zvcm1hdHRpbmc6IEZ1bmN0aW9uO1xuICAgIHRvb2x0aXBEaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgc2NyZWVuU2l6ZTogU2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZSkge1xuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCBzY3JlZW5TaXplKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXRSZXNpemVMaXN0ZW5lcigpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZGF0YVNvdXJjZS5nZXRSZXN1bHRzKCkuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0cyA9IHZhbHVlLm11bHRpU2VyaWVzO1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVWaWV3KCk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnNjaGVtZSA9IHRoaXMuZ2V0U2NoZW1lKCk7XG4gICAgICAgIHRoaXMuZ3JhZGllbnQgPSB0aGlzLmdldEdyYWRpZW50KCk7XG4gICAgICAgIHRoaXMueEF4aXMgPSB0aGlzLmdldFhBeGlzKCk7XG4gICAgICAgIHRoaXMueUF4aXMgPSB0aGlzLmdldFlBeGlzKCk7XG4gICAgICAgIHRoaXMubGVnZW5kID0gdGhpcy5nZXRMZWdlbmQoKTtcbiAgICAgICAgdGhpcy54U2NhbGVNaW4gPSB0aGlzLmdldFhTY2FsZU1pbigpO1xuICAgICAgICB0aGlzLnhTY2FsZU1heCA9IHRoaXMuZ2V0WFNjYWxlTWF4KCk7XG4gICAgICAgIHRoaXMueEF4aXNUaWNrcyA9IHRoaXMuZ2V0WEF4aXNUaWNrcygpO1xuICAgICAgICB0aGlzLnNob3dYQXhpc0xhYmVsID0gdGhpcy5nZXRTaG93WEF4aXNMYWJlbCgpO1xuICAgICAgICB0aGlzLnNob3dZQXhpc0xhYmVsID0gdGhpcy5nZXRTaG93WUF4aXNMYWJlbCgpO1xuICAgICAgICB0aGlzLnhBeGlzTGFiZWwgPSB0aGlzLmdldFhBeGlzTGFiZWwoKTtcbiAgICAgICAgdGhpcy55QXhpc0xhYmVsID0gdGhpcy5nZXRZQXhpc0xhYmVsKCk7XG4gICAgICAgIHRoaXMueUF4aXNUaWNrRm9ybWF0dGluZyA9IHRoaXMuZ2V0WUF4aXNUaWNrRm9ybWF0dGluZygpO1xuICAgICAgICB0aGlzLnhBeGlzVGlja0Zvcm1hdHRpbmcgPSB0aGlzLmdldFhBeGlzVGlja0Zvcm1hdHRpbmcoKTtcbiAgICAgICAgdGhpcy50b29sdGlwRGlzYWJsZWQgPSB0aGlzLmdldFRvb2x0aXBEaXNhYmxlZCgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIGdldFNjaGVtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMuc2NoZW1lIHx8ICdwaWNuaWMnO1xuICAgIH1cblxuICAgIGdldEdyYWRpZW50KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMuZ3JhZGllbnQgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0WEF4aXMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhaXNGYWxzZSh0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy54QXhpcyk7XG4gICAgfVxuXG4gICAgZ2V0WUF4aXMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhaXNGYWxzZSh0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy55QXhpcyk7XG4gICAgfVxuXG4gICAgZ2V0TGVnZW5kKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIWlzRmFsc2UodGhpcy5kYXRhU291cmNlLm9wdGlvbnMubGVnZW5kKTtcbiAgICB9XG5cbiAgICBnZXRYU2NhbGVNaW4oKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnhTY2FsZU1pbiB8fCBudWxsO1xuICAgIH1cblxuICAgIGdldFhTY2FsZU1heCgpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMueFNjYWxlTWF4IHx8IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0WEF4aXNUaWNrcygpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMueEF4aXNUaWNrcyB8fCBudWxsO1xuICAgIH1cblxuICAgIGdldFNob3dYQXhpc0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIWlzRmFsc2UodGhpcy5kYXRhU291cmNlLm9wdGlvbnMuc2hvd1hBeGlzTGFiZWwpO1xuICAgIH1cblxuICAgIGdldFNob3dZQXhpc0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMuc2hvd1lBeGlzTGFiZWwgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0WEF4aXNMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMueEF4aXNMYWJlbCB8fCAnJztcbiAgICB9XG5cbiAgICBnZXRZQXhpc0xhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy55QXhpc0xhYmVsIHx8ICcnO1xuICAgIH1cblxuICAgIGdldFlBeGlzVGlja0Zvcm1hdHRpbmcoKTogRnVuY3Rpb24ge1xuICAgICAgICBpZiAoIXRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnlBeGlzVGlja0Zvcm1hdHRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UudGlja0Zvcm1hdHRpbmcgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBnZXRYQXhpc1RpY2tGb3JtYXR0aW5nKCk6IEZ1bmN0aW9uIHtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy54QXhpc1RpY2tGb3JtYXR0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLnRpY2tGb3JtYXR0aW5nIHx8IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0VG9vbHRpcERpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMudG9vbHRpcERpc2FibGVkIHx8IGZhbHNlO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxzY3JtLWNoYXJ0LW1lc3NhZ2UtYXJlYSAqbmdJZj1cIiFyZXN1bHRzIHx8ICFyZXN1bHRzLmxlbmd0aCB8fCByZXN1bHRzLmxlbmd0aCA8IDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5PVwiTEJMX05PX0RBVEFcIj48L3Njcm0tY2hhcnQtbWVzc2FnZS1hcmVhPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInZpZXcoKS5sZW5ndGhcIj5cbiAgICA8bmd4LWNoYXJ0cy1saW5lLWNoYXJ0ICpuZ0lmPVwicmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5lLWNoYXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthbmltYXRpb25zXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXN1bHRzXT1cInJlc3VsdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZpZXddPVwidmlldygpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzY2hlbWVdPVwic2NoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtncmFkaWVudF09XCJncmFkaWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbeEF4aXNdPVwieEF4aXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3lBeGlzXT1cInlBeGlzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZWdlbmRdPVwibGVnZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt4U2NhbGVNaW5dPVwieFNjYWxlTWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt4U2NhbGVNYXhdPVwieFNjYWxlTWF4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt4QXhpc1RpY2tzXT1cInhBeGlzVGlja3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dYQXhpc0xhYmVsXT1cInNob3dYQXhpc0xhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93WUF4aXNMYWJlbF09XCJzaG93WUF4aXNMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbeEF4aXNMYWJlbF09XCJ4QXhpc0xhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsZWdlbmRQb3NpdGlvbl09XCInYmVsb3cnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvU2NhbGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbeUF4aXNUaWNrRm9ybWF0dGluZ109XCJ5QXhpc1RpY2tGb3JtYXR0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt4QXhpc1RpY2tGb3JtYXR0aW5nXT1cInhBeGlzVGlja0Zvcm1hdHRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Rvb2x0aXBEaXNhYmxlZF09XCJ0b29sdGlwRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3lBeGlzTGFiZWxdPVwieUF4aXNMYWJlbFwiPlxuICAgIDwvbmd4LWNoYXJ0cy1saW5lLWNoYXJ0PlxuPC9uZy1jb250YWluZXI+XG48ZGl2ICpuZ0lmPVwiIXZpZXcoKS5sZW5ndGggJiYgcmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDBcIiBbY2xhc3MubS01XT1cInRydWVcIiBjbGFzcz1cImNoYXJ0LWxvYWRpbmdcIj5cbiAgICA8c2NybS1sb2FkaW5nLXNwaW5uZXI+PC9zY3JtLWxvYWRpbmctc3Bpbm5lcj5cbjwvZGl2PlxuIl19