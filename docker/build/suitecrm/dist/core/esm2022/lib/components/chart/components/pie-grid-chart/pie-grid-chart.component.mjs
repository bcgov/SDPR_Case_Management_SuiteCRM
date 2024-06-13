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
import { LanguageStore } from '../../../../store/language/language.store';
import { BaseChartComponent } from '../base-chart/base-chart.component';
import { debounceTime } from "rxjs/operators";
import { ScreenSizeObserverService } from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i3 from "@angular/common";
import * as i4 from "@swimlane/ngx-charts";
import * as i5 from "../chart-message-area/chart-message-area.component";
import * as i6 from "../../../loading-spinner/loading-spinner.component";
function PieGridChartComponent_scrm_chart_message_area_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-chart-message-area", 3);
} }
function PieGridChartComponent_ng_container_1_ngx_charts_pie_grid_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-pie-grid", 5);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("animations", false)("view", ctx_r3.view())("scheme", ctx_r3.scheme)("minWidth", ctx_r3.minWidth)("label", ctx_r3.language.getFieldLabel(ctx_r3.label))("results", ctx_r3.results);
} }
function PieGridChartComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PieGridChartComponent_ng_container_1_ngx_charts_pie_grid_1_Template, 1, 6, "ngx-charts-pie-grid", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.results && ctx_r1.results.length > 0);
} }
function PieGridChartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-loading-spinner");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵclassProp("m-5", true);
} }
class PieGridChartComponent extends BaseChartComponent {
    constructor(language, elementRef, screenSize) {
        super(elementRef, screenSize);
        this.language = language;
        this.elementRef = elementRef;
        this.screenSize = screenSize;
        this.height = 700;
        this.minWidth = 100;
    }
    ngOnInit() {
        if (this.dataSource.options.height) {
            this.height = this.dataSource.options.height;
        }
        if (this?.dataSource?.options?.minWidth) {
            this.minWidth = this.dataSource.options.minWidth;
        }
        this.initResizeListener();
        this.subs.push(this.dataSource.getResults().pipe(debounceTime(500)).subscribe(value => {
            this.parseResults(value);
            this.calculateHeightBasedOnResults();
            this.calculateView();
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    get scheme() {
        return this.dataSource.options.scheme || 'picnic';
    }
    get label() {
        return this.dataSource.options.label || '';
    }
    onResize() {
        this.calculateHeightBasedOnResults();
        this.calculateView();
    }
    calculateHeightBasedOnResults() {
        if (this.results && this.results.length) {
            const perRow = Math.floor(this.view()[0] / 170);
            this.height = (Math.floor(this.results.length / perRow) * 200);
        }
        else {
            this.height = 50;
        }
    }
    parseResults(value) {
        this.results = [];
        if (value.singleSeries && value.singleSeries.length) {
            value.singleSeries.forEach(entry => {
                const parsedValue = parseFloat('' + entry.value);
                if (!parsedValue) {
                    this.results.push(entry);
                    return;
                }
                this.results.push({
                    name: entry.name,
                    value: parsedValue
                });
            });
        }
    }
    calculateView() {
        let width;
        const el = (this.elementRef && this.elementRef.nativeElement) || {};
        const parentEl = (el.parentElement && el.parentElement.parentElement) || {};
        const parentWidth = (parentEl && parentEl.offsetWidth) || 0;
        if (parentWidth > 0) {
            width = parentWidth;
        }
        else {
            width = window.innerWidth * 0.7;
            if (window.innerWidth > 990) {
                width = window.innerWidth * 0.23;
            }
        }
        if (width > 239) {
            this.view.set([width, this.height]);
            return;
        }
        this.view.set([width, 800]);
    }
    static { this.ɵfac = function PieGridChartComponent_Factory(t) { return new (t || PieGridChartComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.ScreenSizeObserverService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PieGridChartComponent, selectors: [["scrm-pie-grid-chart"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 3, consts: [["labelKey", "LBL_NO_DATA", 4, "ngIf"], [4, "ngIf"], ["class", "chart-loading", 3, "m-5", 4, "ngIf"], ["labelKey", "LBL_NO_DATA"], [3, "animations", "view", "scheme", "minWidth", "label", "results", 4, "ngIf"], [3, "animations", "view", "scheme", "minWidth", "label", "results"], [1, "chart-loading"]], template: function PieGridChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PieGridChartComponent_scrm_chart_message_area_0_Template, 1, 0, "scrm-chart-message-area", 0);
            i0.ɵɵtemplate(1, PieGridChartComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            i0.ɵɵtemplate(2, PieGridChartComponent_div_2_Template, 2, 2, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.results || !ctx.results.length || ctx.results.length < 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.view().length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.view().length && ctx.results && ctx.results.length > 0);
        } }, dependencies: [i3.NgIf, i4.PieGridComponent, i5.ChartMessageAreaComponent, i6.LoadingSpinnerComponent], encapsulation: 2 }); }
}
export { PieGridChartComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PieGridChartComponent, [{
        type: Component,
        args: [{ selector: 'scrm-pie-grid-chart', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-chart-message-area *ngIf=\"!results || !results.length || results.length < 1\"\n                         labelKey=\"LBL_NO_DATA\"></scrm-chart-message-area>\n<ng-container *ngIf=\"view().length\">\n    <ngx-charts-pie-grid *ngIf=\"results && results.length > 0\"\n                         [animations]=\"false\"\n                         [view]=\"view()\"\n                         [scheme]=\"scheme\"\n                         [minWidth]=\"minWidth\"\n                         [label]=\"language.getFieldLabel(label)\"\n                         [results]=\"results\">\n    </ngx-charts-pie-grid>\n</ng-container>\n<div *ngIf=\"!view().length && results && results.length > 0\" [class.m-5]=\"true\" class=\"chart-loading\">\n    <scrm-loading-spinner></scrm-loading-spinner>\n</div>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i0.ElementRef }, { type: i2.ScreenSizeObserverService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWdyaWQtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvY2hhcnQvY29tcG9uZW50cy9waWUtZ3JpZC1jaGFydC9waWUtZ3JpZC1jaGFydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC9jb21wb25lbnRzL3BpZS1ncmlkLWNoYXJ0L3BpZS1ncmlkLWNoYXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSwyRUFBMkUsQ0FBQzs7Ozs7Ozs7O0lDSnBILDZDQUMwRTs7O0lBRXRFLHlDQU9zQjs7O0lBTkQsa0NBQW9CLHVCQUFBLHlCQUFBLDZCQUFBLHNEQUFBLDJCQUFBOzs7SUFGN0MsNkJBQW9DO0lBQ2hDLHFIQU9zQjtJQUMxQiwwQkFBZTs7O0lBUlcsZUFBbUM7SUFBbkMsa0VBQW1DOzs7SUFTN0QsOEJBQXNHO0lBQ2xHLHVDQUE2QztJQUNqRCxpQkFBTTs7SUFGdUQsMkJBQWtCOztBRE4vRSxNQUthLHFCQUFzQixTQUFRLGtCQUFrQjtJQUt6RCxZQUNXLFFBQXVCLEVBQ3BCLFVBQXNCLEVBQ3RCLFVBQXFDO1FBRS9DLEtBQUssQ0FBQyxVQUFVLEVBQUUs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QjtZQVU1QixlQUFxRDtZQUFyRCxrRkFBcUQ7OztTREQ5QyxxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQUxqQyxTQUFTOzJCQUNJLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2VyaWVzUmVzdWx0LCBTaW5nbGVTZXJpZXN9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7QmFzZUNoYXJ0Q29tcG9uZW50fSBmcm9tICcuLi9iYXNlLWNoYXJ0L2Jhc2UtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7U2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3VpL3NjcmVlbi1zaXplLW9ic2VydmVyL3NjcmVlbi1zaXplLW9ic2VydmVyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXBpZS1ncmlkLWNoYXJ0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGllLWdyaWQtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgUGllR3JpZENoYXJ0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHJlc3VsdHM6IFNpbmdsZVNlcmllcztcbiAgICBoZWlnaHQgPSA3MDA7XG4gICAgbWluV2lkdGggPSAxMDA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJvdGVjdGVkIHNjcmVlblNpemU6IFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgc2NyZWVuU2l6ZSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXM/LmRhdGFTb3VyY2U/Lm9wdGlvbnM/Lm1pbldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLm1pbldpZHRoID0gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMubWluV2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXRSZXNpemVMaXN0ZW5lcigpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZGF0YVNvdXJjZS5nZXRSZXN1bHRzKCkucGlwZShkZWJvdW5jZVRpbWUoNTAwKSkuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFyc2VSZXN1bHRzKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlSGVpZ2h0QmFzZWRPblJlc3VsdHMoKTtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlVmlldygpO1xuXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBnZXQgc2NoZW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5zY2hlbWUgfHwgJ3BpY25pYyc7XG4gICAgfVxuXG4gICAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5sYWJlbCB8fCAnJztcbiAgICB9XG5cbiAgICBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVIZWlnaHRCYXNlZE9uUmVzdWx0cygpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVZpZXcoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlSGVpZ2h0QmFzZWRPblJlc3VsdHMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdHMgJiYgdGhpcy5yZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgcGVyUm93ID0gTWF0aC5mbG9vcih0aGlzLnZpZXcoKVswXSAvIDE3MCk7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IChNYXRoLmZsb29yKHRoaXMucmVzdWx0cy5sZW5ndGggLyBwZXJSb3cpICogMjAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNTA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcGFyc2VSZXN1bHRzKHZhbHVlOiBTZXJpZXNSZXN1bHQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXN1bHRzID0gW107XG5cbiAgICAgICAgaWYgKHZhbHVlLnNpbmdsZVNlcmllcyAmJiB2YWx1ZS5zaW5nbGVTZXJpZXMubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIHZhbHVlLnNpbmdsZVNlcmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHBhcnNlRmxvYXQoJycgKyBlbnRyeS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdHMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyc2VkVmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNhbGN1bGF0ZVZpZXcoKTogdm9pZCB7XG4gICAgICAgIGxldCB3aWR0aDtcbiAgICAgICAgY29uc3QgZWwgPSAodGhpcy5lbGVtZW50UmVmICYmIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB8fCB7fSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgcGFyZW50RWwgPSAoZWwucGFyZW50RWxlbWVudCAmJiBlbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpIHx8IHt9IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCBwYXJlbnRXaWR0aCA9IChwYXJlbnRFbCAmJiBwYXJlbnRFbC5vZmZzZXRXaWR0aCkgfHwgMDtcblxuICAgICAgICBpZiAocGFyZW50V2lkdGggPiAwKSB7XG4gICAgICAgICAgICB3aWR0aCA9IHBhcmVudFdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNztcblxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkwKSB7XG4gICAgICAgICAgICAgICAgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuMjM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2lkdGggPiAyMzkpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5zZXQoW3dpZHRoLCB0aGlzLmhlaWdodF0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlldy5zZXQoW3dpZHRoLCA4MDBdKTtcbiAgICB9XG5cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxzY3JtLWNoYXJ0LW1lc3NhZ2UtYXJlYSAqbmdJZj1cIiFyZXN1bHRzIHx8ICFyZXN1bHRzLmxlbmd0aCB8fCByZXN1bHRzLmxlbmd0aCA8IDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5PVwiTEJMX05PX0RBVEFcIj48L3Njcm0tY2hhcnQtbWVzc2FnZS1hcmVhPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInZpZXcoKS5sZW5ndGhcIj5cbiAgICA8bmd4LWNoYXJ0cy1waWUtZ3JpZCAqbmdJZj1cInJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbYW5pbWF0aW9uc109XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3ZpZXddPVwidmlldygpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbc2NoZW1lXT1cInNjaGVtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW21pbldpZHRoXT1cIm1pbldpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxdPVwibGFuZ3VhZ2UuZ2V0RmllbGRMYWJlbChsYWJlbClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXN1bHRzXT1cInJlc3VsdHNcIj5cbiAgICA8L25neC1jaGFydHMtcGllLWdyaWQ+XG48L25nLWNvbnRhaW5lcj5cbjxkaXYgKm5nSWY9XCIhdmlldygpLmxlbmd0aCAmJiByZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMFwiIFtjbGFzcy5tLTVdPVwidHJ1ZVwiIGNsYXNzPVwiY2hhcnQtbG9hZGluZ1wiPlxuICAgIDxzY3JtLWxvYWRpbmctc3Bpbm5lcj48L3Njcm0tbG9hZGluZy1zcGlubmVyPlxuPC9kaXY+XG4iXX0=