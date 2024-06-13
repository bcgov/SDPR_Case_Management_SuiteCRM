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
import { debounceTime } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i2 from "@angular/common";
import * as i3 from "@swimlane/ngx-charts";
import * as i4 from "../chart-message-area/chart-message-area.component";
import * as i5 from "../../../loading-spinner/loading-spinner.component";
function VerticalBarChartComponent_scrm_chart_message_area_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-chart-message-area", 3);
} }
function VerticalBarChartComponent_ng_container_1_ngx_charts_bar_vertical_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const model_r6 = ctx.model;
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(model_r6.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r5.formatTooltipValue(model_r6.value));
} }
function VerticalBarChartComponent_ng_container_1_ngx_charts_bar_vertical_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-charts-bar-vertical", 5);
    i0.ɵɵtemplate(1, VerticalBarChartComponent_ng_container_1_ngx_charts_bar_vertical_1_ng_template_1_Template, 4, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("animations", false)("results", ctx_r3.results)("view", ctx_r3.view())("scheme", ctx_r3.scheme)("gradient", ctx_r3.gradient)("xAxis", ctx_r3.xAxis)("yAxis", ctx_r3.yAxis)("legend", ctx_r3.legend)("legendPosition", "below")("showXAxisLabel", ctx_r3.showXAxisLabel)("showYAxisLabel", ctx_r3.showYAxisLabel)("xAxisLabel", ctx_r3.xAxisLabel)("yAxisLabel", ctx_r3.yAxisLabel)("yAxisTickFormatting", ctx_r3.yAxisTickFormatting);
} }
function VerticalBarChartComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, VerticalBarChartComponent_ng_container_1_ngx_charts_bar_vertical_1_Template, 3, 14, "ngx-charts-bar-vertical", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.results && ctx_r1.results.length > 0);
} }
function VerticalBarChartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "scrm-loading-spinner");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵclassProp("m-5", true);
} }
class VerticalBarChartComponent extends BaseChartComponent {
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
        this.subs.push(this.dataSource.getResults().pipe(debounceTime(500)).subscribe(value => {
            this.results = value.singleSeries;
            this.calculateView();
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    get scheme() {
        return this.dataSource.options.scheme || 'picnic';
    }
    get gradient() {
        return this.dataSource.options.gradient || false;
    }
    get xAxis() {
        return this.dataSource.options.xAxis || false;
    }
    get yAxis() {
        return !isFalse(this.dataSource.options.yAxis);
    }
    get legend() {
        return !isFalse(this.dataSource.options.legend);
    }
    get showXAxisLabel() {
        return this.dataSource.options.showXAxisLabel || false;
    }
    get showYAxisLabel() {
        return this.dataSource.options.showYAxisLabel || false;
    }
    get xAxisLabel() {
        return this.dataSource.options.xAxisLabel || '';
    }
    get yAxisLabel() {
        return this.dataSource.options.yAxisLabel || '';
    }
    get yAxisTickFormatting() {
        if (this.dataSource.options.yAxisTickFormatting) {
            return this.dataSource.tickFormatting;
        }
        return null;
    }
    formatTooltipValue(value) {
        if (!this.dataSource || !this.dataSource.tooltipFormatting) {
            return value;
        }
        return this.dataSource.tooltipFormatting(value);
    }
    static { this.ɵfac = function VerticalBarChartComponent_Factory(t) { return new (t || VerticalBarChartComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ScreenSizeObserverService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: VerticalBarChartComponent, selectors: [["scrm-vertical-bar-chart"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 3, consts: [["labelKey", "LBL_NO_DATA", 4, "ngIf"], [4, "ngIf"], ["class", "chart-loading", 3, "m-5", 4, "ngIf"], ["labelKey", "LBL_NO_DATA"], ["class", "vertical-bar-chart", 3, "animations", "results", "view", "scheme", "gradient", "xAxis", "yAxis", "legend", "legendPosition", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "yAxisTickFormatting", 4, "ngIf"], [1, "vertical-bar-chart", 3, "animations", "results", "view", "scheme", "gradient", "xAxis", "yAxis", "legend", "legendPosition", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "yAxisTickFormatting"], ["tooltipTemplate", ""], [1, "chart-loading"]], template: function VerticalBarChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, VerticalBarChartComponent_scrm_chart_message_area_0_Template, 1, 0, "scrm-chart-message-area", 0);
            i0.ɵɵtemplate(1, VerticalBarChartComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            i0.ɵɵtemplate(2, VerticalBarChartComponent_div_2_Template, 2, 2, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.results || !ctx.results.length || ctx.results.length < 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.view().length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.view().length && ctx.results && ctx.results.length > 0);
        } }, dependencies: [i2.NgIf, i3.BarVerticalComponent, i4.ChartMessageAreaComponent, i5.LoadingSpinnerComponent], encapsulation: 2 }); }
}
export { VerticalBarChartComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VerticalBarChartComponent, [{
        type: Component,
        args: [{ selector: 'scrm-vertical-bar-chart', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-chart-message-area *ngIf=\"!results || !results.length || results.length < 1\"\n                         labelKey=\"LBL_NO_DATA\"></scrm-chart-message-area>\n<ng-container *ngIf=\"view().length\">\n    <ngx-charts-bar-vertical *ngIf=\"results && results.length > 0\"\n                             class=\"vertical-bar-chart\"\n                             [animations]=\"false\"\n                             [results]=\"results\"\n                             [view]=\"view()\"\n                             [scheme]=\"scheme\"\n                             [gradient]=\"gradient\"\n                             [xAxis]=\"xAxis\"\n                             [yAxis]=\"yAxis\"\n                             [legend]=\"legend\"\n                             [legendPosition]=\"'below'\"\n                             [showXAxisLabel]=\"showXAxisLabel\"\n                             [showYAxisLabel]=\"showYAxisLabel\"\n                             [xAxisLabel]=\"xAxisLabel\"\n                             [yAxisLabel]=\"yAxisLabel\"\n                             [yAxisTickFormatting]=\"yAxisTickFormatting\">\n        <ng-template #tooltipTemplate let-model=\"model\">\n            <div>{{model.name}}</div>\n            <div>{{ formatTooltipValue(model.value) }}</div>\n        </ng-template>\n    </ngx-charts-bar-vertical>\n</ng-container>\n<div *ngIf=\"!view().length && results && results.length > 0\" [class.m-5]=\"true\" class=\"chart-loading\">\n    <scrm-loading-spinner></scrm-loading-spinner>\n</div>\n\n\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.ScreenSizeObserverService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2NoYXJ0L2NvbXBvbmVudHMvdmVydGljYWwtYmFyLWNoYXJ0L3ZlcnRpY2FsLWJhci1jaGFydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC9jb21wb25lbnRzL3ZlcnRpY2FsLWJhci1jaGFydC92ZXJ0aWNhbC1iYXItY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUMsT0FBTyxFQUFlLE1BQU0sUUFBUSxDQUFDO0FBQzdDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDJFQUEyRSxDQUFDO0FBQ3BILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNINUMsNkNBQzBFOzs7SUFtQjlELDJCQUFLO0lBQUEsWUFBYztJQUFBLGlCQUFNO0lBQ3pCLDJCQUFLO0lBQUEsWUFBcUM7SUFBQSxpQkFBTTs7OztJQUQzQyxlQUFjO0lBQWQsbUNBQWM7SUFDZCxlQUFxQztJQUFyQywrREFBcUM7OztJQWxCbEQsa0RBZXFFO0lBQ2pFLG9LQUdjO0lBQ2xCLGlCQUEwQjs7O0lBbEJELGtDQUFvQiwyQkFBQSx1QkFBQSx5QkFBQSw2QkFBQSx1QkFBQSx1QkFBQSx5QkFBQSwyQkFBQSx5Q0FBQSx5Q0FBQSxpQ0FBQSxpQ0FBQSxtREFBQTs7O0lBSGpELDZCQUFvQztJQUNoQyxrSUFvQjBCO0lBQzlCLDBCQUFlOzs7SUFyQmUsZUFBbUM7SUFBbkMsa0VBQW1DOzs7SUFzQmpFLDhCQUFzRztJQUNsRyx1Q0FBNkM7SUFDakQsaUJBQU07O0lBRnVELDJCQUFrQjs7QURwQi9FLE1BS2EseUJBQTBCLFNBQVEsa0JBQWtCO0lBSTdELFlBQXNCLFVBQXNCLEVBQVksVUFBcUM7UUFDekYsS0FBSyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQURaLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBWSxlQUFVLEdBQVYsVUFBVSxDQUEyQjtJQUU3RixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDO0lBQ3RELENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7SUFDckQsQ0FBQztJQUVELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ0wsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ04sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxjQUFjLElBQUksS0FBSyxDQUFDO0lBQzNELENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDZCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUM7SUFDM0QsQ0FBQztJQUVELElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCxJQUFJLG1CQUFtQjtRQUNuQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7U0FDekM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBVTtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUU7WUFDeEQsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQzswRkF6RVEseUJBQXlCO29FQUF6Qix5QkFBeUI7WUNWdEMsa0hBQzBFO1lBQzFFLDRGQXNCZTtZQUNmLDBFQUVNOztZQTNCb0Isb0ZBQXVEO1lBRWxFLGVBQW1CO1lBQW5CLHdDQUFtQjtZQXVCNUIsZUFBcUQ7WUFBckQsa0ZBQXFEOzs7U0RmOUMseUJBQXlCO3VGQUF6Qix5QkFBeUI7Y0FMckMsU0FBUzsyQkFDSSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2lzRmFsc2UsIFNpbmdsZVNlcmllc30gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QmFzZUNoYXJ0Q29tcG9uZW50fSBmcm9tICcuLi9iYXNlLWNoYXJ0L2Jhc2UtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7U2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3VpL3NjcmVlbi1zaXplLW9ic2VydmVyL3NjcmVlbi1zaXplLW9ic2VydmVyLnNlcnZpY2VcIjtcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXZlcnRpY2FsLWJhci1jaGFydCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZlcnRpY2FsLWJhci1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEJhckNoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcmVzdWx0czogU2luZ2xlU2VyaWVzO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNjcmVlblNpemUpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLm9wdGlvbnMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLmhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdFJlc2l6ZUxpc3RlbmVyKCk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5kYXRhU291cmNlLmdldFJlc3VsdHMoKS5waXBlKGRlYm91bmNlVGltZSg1MDApKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRzID0gdmFsdWUuc2luZ2xlU2VyaWVzO1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVWaWV3KClcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIGdldCBzY2hlbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnNjaGVtZSB8fCAncGljbmljJztcbiAgICB9XG5cbiAgICBnZXQgZ3JhZGllbnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5ncmFkaWVudCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgeEF4aXMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy54QXhpcyB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgeUF4aXMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhaXNGYWxzZSh0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy55QXhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IGxlZ2VuZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFpc0ZhbHNlKHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLmxlZ2VuZCk7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dYQXhpc0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMuc2hvd1hBeGlzTGFiZWwgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dZQXhpc0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMuc2hvd1lBeGlzTGFiZWwgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHhBeGlzTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnhBeGlzTGFiZWwgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0IHlBeGlzTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnlBeGlzTGFiZWwgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0IHlBeGlzVGlja0Zvcm1hdHRpbmcoKTogRnVuY3Rpb24ge1xuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLm9wdGlvbnMueUF4aXNUaWNrRm9ybWF0dGluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS50aWNrRm9ybWF0dGluZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3JtYXRUb29sdGlwVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIGlmICghdGhpcy5kYXRhU291cmNlIHx8ICF0aGlzLmRhdGFTb3VyY2UudG9vbHRpcEZvcm1hdHRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLnRvb2x0aXBGb3JtYXR0aW5nKHZhbHVlKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48c2NybS1jaGFydC1tZXNzYWdlLWFyZWEgKm5nSWY9XCIhcmVzdWx0cyB8fCAhcmVzdWx0cy5sZW5ndGggfHwgcmVzdWx0cy5sZW5ndGggPCAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEtleT1cIkxCTF9OT19EQVRBXCI+PC9zY3JtLWNoYXJ0LW1lc3NhZ2UtYXJlYT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJ2aWV3KCkubGVuZ3RoXCI+XG4gICAgPG5neC1jaGFydHMtYmFyLXZlcnRpY2FsICpuZ0lmPVwicmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInZlcnRpY2FsLWJhci1jaGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthbmltYXRpb25zXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc3VsdHNdPVwicmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2aWV3XT1cInZpZXcoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzY2hlbWVdPVwic2NoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyYWRpZW50XT1cImdyYWRpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3hBeGlzXT1cInhBeGlzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3lBeGlzXT1cInlBeGlzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xlZ2VuZF09XCJsZWdlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVnZW5kUG9zaXRpb25dPVwiJ2JlbG93J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93WEF4aXNMYWJlbF09XCJzaG93WEF4aXNMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93WUF4aXNMYWJlbF09XCJzaG93WUF4aXNMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt4QXhpc0xhYmVsXT1cInhBeGlzTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbeUF4aXNMYWJlbF09XCJ5QXhpc0xhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3lBeGlzVGlja0Zvcm1hdHRpbmddPVwieUF4aXNUaWNrRm9ybWF0dGluZ1wiPlxuICAgICAgICA8bmctdGVtcGxhdGUgI3Rvb2x0aXBUZW1wbGF0ZSBsZXQtbW9kZWw9XCJtb2RlbFwiPlxuICAgICAgICAgICAgPGRpdj57e21vZGVsLm5hbWV9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdj57eyBmb3JtYXRUb29sdGlwVmFsdWUobW9kZWwudmFsdWUpIH19PC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uZ3gtY2hhcnRzLWJhci12ZXJ0aWNhbD5cbjwvbmctY29udGFpbmVyPlxuPGRpdiAqbmdJZj1cIiF2aWV3KCkubGVuZ3RoICYmIHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAwXCIgW2NsYXNzLm0tNV09XCJ0cnVlXCIgY2xhc3M9XCJjaGFydC1sb2FkaW5nXCI+XG4gICAgPHNjcm0tbG9hZGluZy1zcGlubmVyPjwvc2NybS1sb2FkaW5nLXNwaW5uZXI+XG48L2Rpdj5cblxuXG4iXX0=