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
import { Component, ViewChild } from '@angular/core';
import { HistoryTimelineAdapter } from './history-timeline.adapter.service';
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { LanguageStore } from '../../../../store/language/language.store';
import { HistoryTimelineAdapterFactory } from './history-timeline.adapter.factory';
import { combineLatestWith, Subscription, timer } from 'rxjs';
import { debounce, map } from 'rxjs/operators';
import { floor } from 'lodash-es';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ModuleNavigation } from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i0 from "@angular/core";
import * as i1 from "./history-timeline.adapter.factory";
import * as i2 from "../../../../store/language/language.store";
import * as i3 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i4 from "@angular/common";
import * as i5 from "@angular/cdk/scrolling";
import * as i6 from "../../../../components/image/image.component";
import * as i7 from "../../../../fields/field.component";
import * as i8 from "../../../../components/widget-panel/widget-panel.component";
import * as i9 from "../../../../components/loading-spinner/loading-spinner.component";
import * as i10 from "../../../../components/chart/components/chart-message-area/chart-message-area.component";
import * as i11 from "@angular/router";
function HistorySidebarWidgetComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "scrm-loading-spinner", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("overlay", true);
} }
function HistorySidebarWidgetComponent_div_1_scrm_chart_message_area_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-chart-message-area", 10);
} }
function HistorySidebarWidgetComponent_div_1_div_5_div_1_a_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 30);
    i0.ɵɵelement(1, "scrm-field", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", ctx_r7.redirectLink(entry_r5.record.module, entry_r5.record.id));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", entry_r5.title.type)("field", entry_r5.title)("record", entry_r5.record);
} }
function HistorySidebarWidgetComponent_div_1_div_5_div_1_a_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵelement(1, "scrm-field", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", entry_r5.title.type)("field", entry_r5.title)("record", entry_r5.record);
} }
function HistorySidebarWidgetComponent_div_1_div_5_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31)(1, "small", 26);
    i0.ɵɵelement(2, "scrm-field", 32);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const entry_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("type", entry_r5.description.type)("field", entry_r5.description)("record", entry_r5.record);
} }
function HistorySidebarWidgetComponent_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 12)(2, "div", 13)(3, "div", 14);
    i0.ɵɵelement(4, "scrm-image", 15);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 12)(6, "div", 16);
    i0.ɵɵelement(7, "div", 17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 18)(9, "div", 19)(10, "div", 20)(11, "p", 21);
    i0.ɵɵtemplate(12, HistorySidebarWidgetComponent_div_1_div_5_div_1_a_12_Template, 2, 4, "a", 22);
    i0.ɵɵtemplate(13, HistorySidebarWidgetComponent_div_1_div_5_div_1_a_13_Template, 2, 3, "a", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, HistorySidebarWidgetComponent_div_1_div_5_div_1_div_14_Template, 3, 3, "div", 24);
    i0.ɵɵelementStart(15, "div", 25)(16, "small", 26);
    i0.ɵɵelement(17, "scrm-field", 27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 28)(19, "small", 29);
    i0.ɵɵelement(20, "scrm-field", 27);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const entry_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("d-flex flex-row m-2 history-timeline-entry entry-", entry_r5.color, "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("image", entry_r5.icon);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", entry_r5.record.module !== "audit");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r5.record.module === "audit");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r5.description);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", entry_r5.user.type)("field", entry_r5.user)("record", entry_r5.record);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", entry_r5.date.type)("field", entry_r5.date)("record", entry_r5.record);
} }
function HistorySidebarWidgetComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, HistorySidebarWidgetComponent_div_1_div_5_div_1_Template, 21, 13, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.length > 0);
} }
const _c0 = function (a0) { return [a0]; };
function HistorySidebarWidgetComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtemplate(2, HistorySidebarWidgetComponent_div_1_div_2_Template, 2, 1, "div", 4);
    i0.ɵɵelementStart(3, "cdk-virtual-scroll-viewport", 5);
    i0.ɵɵlistener("scroll", function HistorySidebarWidgetComponent_div_1_Template_cdk_virtual_scroll_viewport_scroll_3_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.onScroll()); });
    i0.ɵɵtemplate(4, HistorySidebarWidgetComponent_div_1_scrm_chart_message_area_4_Template, 1, 0, "scrm-chart-message-area", 6);
    i0.ɵɵtemplate(5, HistorySidebarWidgetComponent_div_1_div_5_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.adapter == null ? null : ctx_r0.adapter.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, vm_r1.length <= 0 ? "history-timeline-viewport-no-data" : "history-timeline-viewport"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(ctx_r0.adapter == null ? null : ctx_r0.adapter.loading) && vm_r1.length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", vm_r1);
} }
class HistorySidebarWidgetComponent extends BaseWidgetComponent {
    constructor(historyTimelineAdapterFactory, languageStore, navigation) {
        super();
        this.historyTimelineAdapterFactory = historyTimelineAdapterFactory;
        this.languageStore = languageStore;
        this.navigation = navigation;
        this.subscription = new Subscription();
    }
    ngOnInit() {
        this.adapter = this.historyTimelineAdapterFactory.create();
        this.adapter.init(this.context);
    }
    ngAfterViewInit() {
        // watch out for the data list updates on the related subpanels activities and history
        // reload request will be ignored;
        // if they are notified multiple times within the dueTime/delay 500 ms
        const reloadMap = [];
        reloadMap.push(this.config.reload$);
        reloadMap.push(this.config.subpanelReload$);
        const subpanelsToWatch = ['history', 'activities'];
        const reload$ = reloadMap[0].pipe(combineLatestWith(...reloadMap), map(([reload, subpanelReload = {}]) => {
            if (reload) {
                return reload;
            }
            if (!subpanelReload) {
                return false;
            }
            return subpanelsToWatch.some(subpanelKey => !!subpanelReload[subpanelKey]);
        }));
        const debouncedReload = reload$.pipe(debounce(() => timer(1000)));
        this.subscription.add(debouncedReload.subscribe(reload => {
            if (reload) {
                this.adapter.fetchTimelineEntries(true);
            }
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @returns {string} Timeline Entry
     * @description {fetch language label for the timeline widget header}
     */
    getHeaderLabel() {
        return this.languageStore.getFieldLabel('LBL_QUICK_HISTORY');
    }
    /**
     * @returns {void} Timeline Entry
     * @description {checks if end of the scroll is reached to make a backend call for next set of timeline entries}
     */
    onScroll() {
        if (!this.adapter) {
            return;
        }
        const scrollOffset = this.virtualScroll.measureScrollOffset('bottom');
        if (floor(scrollOffset) === 0) {
            this.adapter.fetchTimelineEntries(false);
        }
    }
    redirectLink(module, id) {
        if (module === 'audit') {
            return;
        }
        return this.navigation.getRecordRouterLink(module, id);
    }
    static { this.ɵfac = function HistorySidebarWidgetComponent_Factory(t) { return new (t || HistorySidebarWidgetComponent)(i0.ɵɵdirectiveInject(i1.HistoryTimelineAdapterFactory), i0.ɵɵdirectiveInject(i2.LanguageStore), i0.ɵɵdirectiveInject(i3.ModuleNavigation)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HistorySidebarWidgetComponent, selectors: [["scrm-history-timeline-widget"]], viewQuery: function HistorySidebarWidgetComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(CdkVirtualScrollViewport, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.virtualScroll = _t.first);
        } }, features: [i0.ɵɵProvidersFeature([HistoryTimelineAdapter]), i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "title"], ["widget-body", "", 4, "ngIf"], ["widget-body", ""], [1, "widget-background", "history-timeline", "p-2", "pt-2"], ["class", "d-flex record-thread-loading justify-content-center", 4, "ngIf"], ["itemSize", "100", 1, "history-timeline-viewport", 3, "ngClass", "scroll"], ["labelKey", "LBL_NO_DATA", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "d-flex", "record-thread-loading", "justify-content-center"], [3, "overlay"], ["labelKey", "LBL_NO_DATA"], [3, "class", 4, "ngIf"], [1, ""], [1, "circle"], [1, "d-flex", "justify-content-center", "align-items-center", "h-100", "history-timeline-image"], [3, "image"], [1, "d-flex", "justify-content-center", "h-100"], [1, "connector", "mt-3"], [1, "flex-grow-1"], [1, "card"], [1, "card-body", "p-1", "pr-2", "pl-2"], [1, "card-title", "text-break", "history-timeline-entry-title"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["class", "card-text history-timeline-entry-description", 4, "ngIf"], [1, "card-text", "history-timeline-entry-user", "text-uppercase"], [1, "text-break"], ["mode", "list", 3, "type", "field", "record"], [1, "card-text", "text-break", "history-timeline-entry-date"], [1, "font-italic"], [3, "routerLink"], [1, "card-text", "history-timeline-entry-description"], ["mode", "detail", 3, "type", "field", "record"]], template: function HistorySidebarWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-widget-panel", 0);
            i0.ɵɵtemplate(1, HistorySidebarWidgetComponent_div_1_Template, 6, 6, "div", 1);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.getHeaderLabel());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 2, ctx.adapter == null ? null : ctx.adapter.dataStream$));
        } }, dependencies: [i4.NgClass, i4.NgForOf, i4.NgIf, i5.CdkFixedSizeVirtualScroll, i5.CdkVirtualScrollViewport, i6.ImageComponent, i7.FieldComponent, i8.WidgetPanelComponent, i9.LoadingSpinnerComponent, i10.ChartMessageAreaComponent, i11.RouterLink, i4.AsyncPipe], encapsulation: 2 }); }
}
export { HistorySidebarWidgetComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistorySidebarWidgetComponent, [{
        type: Component,
        args: [{ selector: 'scrm-history-timeline-widget', providers: [HistoryTimelineAdapter], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-widget-panel [title]=\"getHeaderLabel()\">\n    <div widget-body *ngIf=\"(adapter?.dataStream$| async) as vm\">\n\n        <div class=\"widget-background history-timeline p-2 pt-2\">\n\n            <div *ngIf=\"adapter?.loading\" class=\"d-flex record-thread-loading justify-content-center\">\n                <scrm-loading-spinner [overlay]=\"true\"></scrm-loading-spinner>\n            </div>\n\n            <cdk-virtual-scroll-viewport itemSize=\"100\"\n                                         class=\"history-timeline-viewport\"\n                                         [ngClass]=\"[vm.length <= 0 ? 'history-timeline-viewport-no-data' : 'history-timeline-viewport']\"\n                                         (scroll)=\"onScroll()\">\n\n                <scrm-chart-message-area *ngIf=\"!adapter?.loading && vm.length <= 0\"\n                                         labelKey=\"LBL_NO_DATA\"></scrm-chart-message-area>\n\n                <div *ngFor=\"let entry of vm;\">\n                    <div *ngIf=\"vm.length > 0\"\n                         class=\"d-flex flex-row m-2 history-timeline-entry entry-{{entry.color}}\">\n                        <div class=\"\">\n                            <div class=\"circle\">\n                                <div\n                                    class=\"d-flex justify-content-center align-items-center h-100 history-timeline-image\">\n                                    <scrm-image [image]=\"entry.icon\"></scrm-image>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"\">\n                            <div class=\"d-flex justify-content-center h-100\">\n                                <div class=\"connector mt-3\">\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"flex-grow-1\">\n\n                            <div class=\"card\">\n                                <div class=\"card-body p-1 pr-2 pl-2\">\n                                    <p class=\"card-title text-break history-timeline-entry-title\">\n                                        <a *ngIf=\"entry.record.module !== 'audit'\"\n                                           [routerLink]=\"redirectLink(entry.record.module, entry.record.id)\"\n                                        >\n                                        <scrm-field [type]=\"entry.title.type\"\n                                                    mode=\"list\"\n                                                    [field]=\"entry.title\"\n                                                    [record]=\"entry.record\">\n                                        </scrm-field>\n                                        </a>\n                                        <a *ngIf=\"entry.record.module === 'audit'\">\n                                            <scrm-field [type]=\"entry.title.type\"\n                                                        mode=\"list\"\n                                                        [field]=\"entry.title\"\n                                                        [record]=\"entry.record\">\n                                            </scrm-field>\n                                        </a>\n                                    </p>\n                                    <div *ngIf=\"entry.description\"\n                                         class=\"card-text history-timeline-entry-description\">\n                                        <small class=\"text-break\">\n                                            <scrm-field [type]=\"entry.description.type\"\n                                                        mode=\"detail\"\n                                                        [field]=\"entry.description\"\n                                                        [record]=\"entry.record\">\n                                            </scrm-field>\n                                        </small>\n                                    </div>\n                                    <div class=\"card-text history-timeline-entry-user text-uppercase\">\n                                        <small class=\"text-break\">\n                                            <scrm-field [type]=\"entry.user.type\"\n                                                        mode=\"list\"\n                                                        [field]=\"entry.user\"\n                                                        [record]=\"entry.record\">\n                                            </scrm-field>\n                                        </small>\n                                    </div>\n                                    <div class=\"card-text text-break history-timeline-entry-date\">\n                                        <small class=\"font-italic\">\n                                            <scrm-field [type]=\"entry.date.type\"\n                                                        mode=\"list\"\n                                                        [field]=\"entry.date\"\n                                                        [record]=\"entry.record\"></scrm-field>\n                                        </small>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n                </div>\n            </cdk-virtual-scroll-viewport>\n        </div>\n    </div>\n</scrm-widget-panel>\n" }]
    }], function () { return [{ type: i1.HistoryTimelineAdapterFactory }, { type: i2.LanguageStore }, { type: i3.ModuleNavigation }]; }, { virtualScroll: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL2hpc3Rvcnktc2lkZWJhci13aWRnZXQvaGlzdG9yeS1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL2hpc3Rvcnktc2lkZWJhci13aWRnZXQvaGlzdG9yeS1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFnQixTQUFTLEVBQXFCLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDakYsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDNUQsT0FBTyxFQUFDLFFBQVEsRUFBRSxHQUFHLEVBQU0sTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ2hDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZF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LENBQUM7UUFFdEUsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQWMsRUFBRSxFQUFVO1FBQ25DLElBQUksTUFBTSxLQUFLLE9BQU8sRUFBRTtZQUNwQixPQUFPO1NBQ1Y7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQzFELENBQUM7OEZBdkZRLDZCQUE2QjtvRUFBN0IsNkJBQTZCOzJCQUMzQix3QkFBd0I7Ozs7OENBSHhCLENBQUMsc0JBQXNCLENBQUM7WUNkdkMsNENBQThDO1lBQzFDLDhFQTRGTTs7WUFDVixpQkFBb0I7O1lBOUZELDRDQUEwQjtZQUN2QixlQUFvQztZQUFwQyxpR0FBb0M7OztTRGU3Qyw2QkFBNkI7dUZBQTdCLDZCQUE2QjtjQU56QyxTQUFTOzJCQUNJLDhCQUE4QixhQUc3QixDQUFDLHNCQUFzQixDQUFDOzJJQUdFLGFBQWE7a0JBQWpELFNBQVM7bUJBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hpc3RvcnlUaW1lbGluZUFkYXB0ZXJ9IGZyb20gJy4vaGlzdG9yeS10aW1lbGluZS5hZGFwdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtCYXNlV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi93aWRnZXRzL2Jhc2Utd2lkZ2V0Lm1vZGVsJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtIaXN0b3J5VGltZWxpbmVBZGFwdGVyRmFjdG9yeX0gZnJvbSAnLi9oaXN0b3J5LXRpbWVsaW5lLmFkYXB0ZXIuZmFjdG9yeSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBTdWJzY3JpcHRpb24sIHRpbWVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVib3VuY2UsIG1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2Zsb29yfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHtDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1oaXN0b3J5LXRpbWVsaW5lLXdpZGdldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hpc3Rvcnktc2lkZWJhci13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG4gICAgcHJvdmlkZXJzOiBbSGlzdG9yeVRpbWVsaW5lQWRhcHRlcl1cbn0pXG5leHBvcnQgY2xhc3MgSGlzdG9yeVNpZGViYXJXaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAgIEBWaWV3Q2hpbGQoQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0KSB2aXJ0dWFsU2Nyb2xsOiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XG5cbiAgICBwdWJsaWMgYWRhcHRlcjogSGlzdG9yeVRpbWVsaW5lQWRhcHRlcjtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgaGlzdG9yeVRpbWVsaW5lQWRhcHRlckZhY3Rvcnk6IEhpc3RvcnlUaW1lbGluZUFkYXB0ZXJGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyID0gdGhpcy5oaXN0b3J5VGltZWxpbmVBZGFwdGVyRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmluaXQodGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cbiAgICAgICAgLy8gd2F0Y2ggb3V0IGZvciB0aGUgZGF0YSBsaXN0IHVwZGF0ZXMgb24gdGhlIHJlbGF0ZWQgc3VicGFuZWxzIGFjdGl2aXRpZXMgYW5kIGhpc3RvcnlcbiAgICAgICAgLy8gcmVsb2FkIHJlcXVlc3Qgd2lsbCBiZSBpZ25vcmVkO1xuICAgICAgICAvLyBpZiB0aGV5IGFyZSBub3RpZmllZCBtdWx0aXBsZSB0aW1lcyB3aXRoaW4gdGhlIGR1ZVRpbWUvZGVsYXkgNTAwIG1zXG5cbiAgICAgICAgY29uc3QgcmVsb2FkTWFwID0gW107XG4gICAgICAgIHJlbG9hZE1hcC5wdXNoKHRoaXMuY29uZmlnLnJlbG9hZCQpO1xuICAgICAgICByZWxvYWRNYXAucHVzaCh0aGlzLmNvbmZpZy5zdWJwYW5lbFJlbG9hZCQpO1xuXG4gICAgICAgIGNvbnN0IHN1YnBhbmVsc1RvV2F0Y2ggPSBbJ2hpc3RvcnknLCAnYWN0aXZpdGllcyddO1xuICAgICAgICBjb25zdCByZWxvYWQkID0gcmVsb2FkTWFwWzBdLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCguLi5yZWxvYWRNYXApLFxuICAgICAgICAgICAgbWFwKChbcmVsb2FkLCBzdWJwYW5lbFJlbG9hZD17fV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWxvYWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFzdWJwYW5lbFJlbG9hZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YnBhbmVsc1RvV2F0Y2guc29tZShzdWJwYW5lbEtleSA9PiAhIXN1YnBhbmVsUmVsb2FkW3N1YnBhbmVsS2V5XSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZGVib3VuY2VkUmVsb2FkID0gcmVsb2FkJC5waXBlKGRlYm91bmNlKCgpID0+IHRpbWVyKDEwMDApKSk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKGRlYm91bmNlZFJlbG9hZC5zdWJzY3JpYmUocmVsb2FkID0+IHtcbiAgICAgICAgICAgIGlmIChyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZmV0Y2hUaW1lbGluZUVudHJpZXModHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaW1lbGluZSBFbnRyeVxuICAgICAqIEBkZXNjcmlwdGlvbiB7ZmV0Y2ggbGFuZ3VhZ2UgbGFiZWwgZm9yIHRoZSB0aW1lbGluZSB3aWRnZXQgaGVhZGVyfVxuICAgICAqL1xuICAgIGdldEhlYWRlckxhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0RmllbGRMYWJlbCgnTEJMX1FVSUNLX0hJU1RPUlknKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7dm9pZH0gVGltZWxpbmUgRW50cnlcbiAgICAgKiBAZGVzY3JpcHRpb24ge2NoZWNrcyBpZiBlbmQgb2YgdGhlIHNjcm9sbCBpcyByZWFjaGVkIHRvIG1ha2UgYSBiYWNrZW5kIGNhbGwgZm9yIG5leHQgc2V0IG9mIHRpbWVsaW5lIGVudHJpZXN9XG4gICAgICovXG4gICAgb25TY3JvbGwoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjcm9sbE9mZnNldCA9IHRoaXMudmlydHVhbFNjcm9sbC5tZWFzdXJlU2Nyb2xsT2Zmc2V0KCdib3R0b20nKTtcblxuICAgICAgICBpZiAoZmxvb3Ioc2Nyb2xsT2Zmc2V0KSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmZldGNoVGltZWxpbmVFbnRyaWVzKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZGlyZWN0TGluayhtb2R1bGU6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgICAgICBpZiAobW9kdWxlID09PSAnYXVkaXQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbi5nZXRSZWNvcmRSb3V0ZXJMaW5rKG1vZHVsZSwgaWQpXG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48c2NybS13aWRnZXQtcGFuZWwgW3RpdGxlXT1cImdldEhlYWRlckxhYmVsKClcIj5cbiAgICA8ZGl2IHdpZGdldC1ib2R5ICpuZ0lmPVwiKGFkYXB0ZXI/LmRhdGFTdHJlYW0kfCBhc3luYykgYXMgdm1cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LWJhY2tncm91bmQgaGlzdG9yeS10aW1lbGluZSBwLTIgcHQtMlwiPlxuXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiYWRhcHRlcj8ubG9hZGluZ1wiIGNsYXNzPVwiZC1mbGV4IHJlY29yZC10aHJlYWQtbG9hZGluZyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tbG9hZGluZy1zcGlubmVyIFtvdmVybGF5XT1cInRydWVcIj48L3Njcm0tbG9hZGluZy1zcGlubmVyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgaXRlbVNpemU9XCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhpc3RvcnktdGltZWxpbmUtdmlld3BvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJbdm0ubGVuZ3RoIDw9IDAgPyAnaGlzdG9yeS10aW1lbGluZS12aWV3cG9ydC1uby1kYXRhJyA6ICdoaXN0b3J5LXRpbWVsaW5lLXZpZXdwb3J0J11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2Nyb2xsKT1cIm9uU2Nyb2xsKClcIj5cblxuICAgICAgICAgICAgICAgIDxzY3JtLWNoYXJ0LW1lc3NhZ2UtYXJlYSAqbmdJZj1cIiFhZGFwdGVyPy5sb2FkaW5nICYmIHZtLmxlbmd0aCA8PSAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxLZXk9XCJMQkxfTk9fREFUQVwiPjwvc2NybS1jaGFydC1tZXNzYWdlLWFyZWE+XG5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlbnRyeSBvZiB2bTtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInZtLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGZsZXgtcm93IG0tMiBoaXN0b3J5LXRpbWVsaW5lLWVudHJ5IGVudHJ5LXt7ZW50cnkuY29sb3J9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0xMDAgaGlzdG9yeS10aW1lbGluZS1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgW2ltYWdlXT1cImVudHJ5Lmljb25cIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGgtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25uZWN0b3IgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTFcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC0xIHByLTIgcGwtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRpdGxlIHRleHQtYnJlYWsgaGlzdG9yeS10aW1lbGluZS1lbnRyeS10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiZW50cnkucmVjb3JkLm1vZHVsZSAhPT0gJ2F1ZGl0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwicmVkaXJlY3RMaW5rKGVudHJ5LnJlY29yZC5tb2R1bGUsIGVudHJ5LnJlY29yZC5pZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZCBbdHlwZV09XCJlbnRyeS50aXRsZS50eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImVudHJ5LnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cImVudHJ5LnJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJlbnRyeS5yZWNvcmQubW9kdWxlID09PSAnYXVkaXQnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWZpZWxkIFt0eXBlXT1cImVudHJ5LnRpdGxlLnR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZF09XCJlbnRyeS50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWNvcmRdPVwiZW50cnkucmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZW50cnkuZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmQtdGV4dCBoaXN0b3J5LXRpbWVsaW5lLWVudHJ5LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1icmVha1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZCBbdHlwZV09XCJlbnRyeS5kZXNjcmlwdGlvbi50eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImRldGFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZF09XCJlbnRyeS5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWNvcmRdPVwiZW50cnkucmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0IGhpc3RvcnktdGltZWxpbmUtZW50cnktdXNlciB0ZXh0LXVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtYnJlYWtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZmllbGQgW3R5cGVdPVwiZW50cnkudXNlci50eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiZW50cnkudXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWNvcmRdPVwiZW50cnkucmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0IHRleHQtYnJlYWsgaGlzdG9yeS10aW1lbGluZS1lbnRyeS1kYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZm9udC1pdGFsaWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZmllbGQgW3R5cGVdPVwiZW50cnkuZGF0ZS50eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiZW50cnkuZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWNvcmRdPVwiZW50cnkucmVjb3JkXCI+PC9zY3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9zY3JtLXdpZGdldC1wYW5lbD5cbiJdfQ==