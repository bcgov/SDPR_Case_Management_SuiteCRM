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
import { Component, HostListener } from '@angular/core';
import { combineLatestWith } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { LanguageStore } from '../../../../store/language/language.store';
import { SidebarWidgetAdapter } from '../../adapters/sidebar-widget.adapter';
import { RecordViewStore } from '../../store/record-view/record-view.store';
import { RecordContentAdapter } from '../../adapters/record-content.adapter';
import { TopWidgetAdapter } from '../../adapters/top-widget.adapter';
import { BottomWidgetAdapter } from '../../adapters/bottom-widget.adapter';
import { RecordActionsAdapter } from '../../adapters/actions.adapter';
import { RecordViewSidebarWidgetService } from "../../services/record-view-sidebar-widget.service";
import * as i0 from "@angular/core";
import * as i1 from "../../store/record-view/record-view.store";
import * as i2 from "../../../../store/language/language.store";
import * as i3 from "../../../../store/metadata/metadata.store.service";
import * as i4 from "../../adapters/record-content.adapter";
import * as i5 from "../../adapters/top-widget.adapter";
import * as i6 from "../../adapters/sidebar-widget.adapter";
import * as i7 from "../../adapters/bottom-widget.adapter";
import * as i8 from "../../adapters/actions.adapter";
import * as i9 from "../../services/record-view-sidebar-widget.service";
import * as i10 from "@angular/common";
import * as i11 from "../../../../containers/subpanel/components/subpanel-container/subpanel-container.component";
import * as i12 from "../../../../components/record-content/record-content.component";
import * as i13 from "../../../../containers/top-widget/components/top-widget/top-widget.component";
import * as i14 from "../../../../containers/sidebar-widget/components/sidebar-widget/sidebar-widget.component";
import * as i15 from "../../../../components/record-content-skeleton/record-content-skeleton.component";
function RecordContainerComponent_div_0_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 11)(2, "div", 12);
    i0.ɵɵelement(3, "div", 13);
    i0.ɵɵelementEnd()()();
} }
function RecordContainerComponent_div_0_ng_container_2_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 11);
    i0.ɵɵelement(2, "scrm-top-widget", 14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(3).ngIf;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", vm_r1.topWidgetConfig.widget)("context", ctx_r10.getViewContext())("type", vm_r1.topWidgetConfig.widget.type);
} }
function RecordContainerComponent_div_0_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContainerComponent_div_0_ng_container_2_ng_container_4_div_1_Template, 3, 3, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.topWidgetConfig.show && ctx_r5.hasTopWidgetMetadata(vm_r1.topWidgetConfig.widget));
} }
function RecordContainerComponent_div_0_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-content-skeleton");
    i0.ɵɵelementContainerEnd();
} }
function RecordContainerComponent_div_0_ng_container_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-content", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dataSource", ctx_r7.getContentAdapter());
} }
function RecordContainerComponent_div_0_ng_container_2_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelement(1, "scrm-sidebar-widget", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r14 = ctx.$implicit;
    const ctx_r13 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", widget_r14)("context$", ctx_r13.getViewContext$())("context", ctx_r13.getViewContext())("type", widget_r14.type);
} }
function RecordContainerComponent_div_0_ng_container_2_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 8);
    i0.ɵɵtemplate(2, RecordContainerComponent_div_0_ng_container_2_div_9_div_2_Template, 2, 4, "div", 17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", vm_r1.bottomWidgetConfig.widgets);
} }
function RecordContainerComponent_div_0_ng_container_2_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 8);
    i0.ɵɵelement(2, "scrm-subpanel-container", 21);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r9.getSubpanelsConfig());
} }
const _c0 = function (a0) { return { "col-lg-12": a0 }; };
function RecordContainerComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4)(2, "div", 5);
    i0.ɵɵtemplate(3, RecordContainerComponent_div_0_ng_container_2_div_3_Template, 4, 0, "div", 6);
    i0.ɵɵtemplate(4, RecordContainerComponent_div_0_ng_container_2_ng_container_4_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementStart(5, "div", 7)(6, "div", 8);
    i0.ɵɵtemplate(7, RecordContainerComponent_div_0_ng_container_2_ng_container_7_Template, 2, 0, "ng-container", 3);
    i0.ɵɵtemplate(8, RecordContainerComponent_div_0_ng_container_2_ng_container_8_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, RecordContainerComponent_div_0_ng_container_2_div_9_Template, 3, 1, "div", 9);
    i0.ɵɵtemplate(10, RecordContainerComponent_div_0_ng_container_2_div_10_Template, 3, 1, "div", 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, !ctx_r2.sidebarWidgetConfig.show));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.loading);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.bottomWidgetConfig.show && vm_r1.bottomWidgetConfig.widgets);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.showSubpanels);
} }
function RecordContainerComponent_div_0_ng_container_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelement(1, "scrm-sidebar-widget", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r19 = ctx.$implicit;
    const ctx_r18 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", widget_r19.type)("context", ctx_r18.getViewContext())("context$", ctx_r18.getViewContext$())("config", widget_r19);
} }
function RecordContainerComponent_div_0_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, RecordContainerComponent_div_0_ng_container_3_div_1_div_1_Template, 2, 4, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("mt-0", ctx_r17.swapWidgets);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r17.sidebarWidgetConfig.widgets);
} }
function RecordContainerComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContainerComponent_div_0_ng_container_3_div_1_Template, 2, 3, "div", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.displayWidgets);
} }
function RecordContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵtemplate(2, RecordContainerComponent_div_0_ng_container_2_Template, 11, 9, "ng-container", 3);
    i0.ɵɵtemplate(3, RecordContainerComponent_div_0_ng_container_3_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.swapWidgets || ctx_r0.swapWidgets && !ctx_r0.displayWidgets);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.swapWidgets || ctx_r0.swapWidgets && ctx_r0.displayWidgets);
} }
class RecordContainerComponent {
    onEnterKey() {
        if (!this.saveAction || !this.context) {
            return;
        }
        this.actionsAdapter.runAction(this.saveAction, this.context);
    }
    constructor(recordViewStore, language, metadata, contentAdapter, topWidgetAdapter, sidebarWidgetAdapter, bottomWidgetAdapter, actionsAdapter, sidebarWidgetHandler) {
        this.recordViewStore = recordViewStore;
        this.language = language;
        this.metadata = metadata;
        this.contentAdapter = contentAdapter;
        this.topWidgetAdapter = topWidgetAdapter;
        this.sidebarWidgetAdapter = sidebarWidgetAdapter;
        this.bottomWidgetAdapter = bottomWidgetAdapter;
        this.actionsAdapter = actionsAdapter;
        this.sidebarWidgetHandler = sidebarWidgetHandler;
        this.subs = [];
        this.loading = true;
        this.language$ = this.language.vm$;
        this.displayWidgets = true;
        this.swapWidgets = false;
        this.vm$ = this.language$.pipe(combineLatestWith(this.bottomWidgetAdapter.config$, this.topWidgetAdapter.config$, this.recordViewStore.showSubpanels$), map(([language, bottomWidgetConfig, topWidgetConfig, showSubpanels]) => ({
            language,
            bottomWidgetConfig,
            topWidgetConfig,
            showSubpanels
        })));
        this.actionConfig$ = this.recordViewStore.mode$.pipe(combineLatestWith(this.actionsAdapter.getActions(), this.getViewContext$()), filter(([mode, actions, context]) => mode === 'edit'), map(([mode, actions, context]) => ({
            mode,
            actions,
            context
        })));
    }
    ngOnInit() {
        this.subs.push(this.recordViewStore.loading$.subscribe(loading => {
            this.loading = loading;
        }));
        this.subs.push(this.actionConfig$.subscribe(config => {
            this.context = config.context;
            config.actions.forEach(actionItem => {
                if (actionItem.key === 'save') {
                    this.saveAction = actionItem;
                }
            });
        }));
        this.subs.push(this.sidebarWidgetAdapter.config$.subscribe(sidebarWidgetConfig => {
            this.sidebarWidgetConfig = sidebarWidgetConfig;
            this.displayWidgets = this.sidebarWidgetConfig.show && this.sidebarWidgetConfig.widgets;
        }));
        this.subs.push(this.sidebarWidgetHandler.widgetSwap$.subscribe(swap => {
            this.swapWidgets = swap;
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.contentAdapter.clean();
    }
    getContentAdapter() {
        return this.contentAdapter;
    }
    getSubpanelsConfig() {
        return {
            parentModule: this.recordViewStore.getModuleName(),
            subpanels$: this.recordViewStore.subpanels$,
            sidebarActive$: this.recordViewStore.widgets$
        };
    }
    getViewContext() {
        return this.recordViewStore.getViewContext();
    }
    getViewContext$() {
        return this.recordViewStore.viewContext$;
    }
    hasTopWidgetMetadata(meta) {
        return !!(meta && meta.type);
    }
    static { this.ɵfac = function RecordContainerComponent_Factory(t) { return new (t || RecordContainerComponent)(i0.ɵɵdirectiveInject(i1.RecordViewStore), i0.ɵɵdirectiveInject(i2.LanguageStore), i0.ɵɵdirectiveInject(i3.MetadataStore), i0.ɵɵdirectiveInject(i4.RecordContentAdapter), i0.ɵɵdirectiveInject(i5.TopWidgetAdapter), i0.ɵɵdirectiveInject(i6.SidebarWidgetAdapter), i0.ɵɵdirectiveInject(i7.BottomWidgetAdapter), i0.ɵɵdirectiveInject(i8.RecordActionsAdapter), i0.ɵɵdirectiveInject(i9.RecordViewSidebarWidgetService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordContainerComponent, selectors: [["scrm-record-container"]], hostBindings: function RecordContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup.control.enter", function RecordContainerComponent_keyup_control_enter_HostBindingHandler() { return ctx.onEnterKey(); });
        } }, features: [i0.ɵɵProvidersFeature([RecordContentAdapter, TopWidgetAdapter, SidebarWidgetAdapter, BottomWidgetAdapter])], decls: 2, vars: 3, consts: [["class", "record-view-container view-container container-fluid pt-3 pb-3 small-font", 4, "ngIf"], [1, "record-view-container", "view-container", "container-fluid", "pt-3", "pb-3", "small-font"], [1, "row"], [4, "ngIf"], [1, "col-lg-9", 3, "ngClass"], [1, "container-fluid", "pl-0", "pr-0"], ["class", "row no-gutters", 4, "ngIf"], [1, "row", "no-gutters"], [1, "col"], ["class", "row no-gutters mt-4", 4, "ngIf"], ["class", "row no-gutters pt-1 pb-4", 4, "ngIf"], [1, "col", "pb-3"], [1, "d-flex", "justify-content-center", "widget-bar", "rounded", "pb-1", "pt-3", "box-loading"], [1, "d-flex", "justify-content-center", "align-items-baseline", "widget-bar-entry", "p-2"], [3, "config", "context", "type"], [3, "dataSource"], [1, "row", "no-gutters", "mt-4"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "mb-3"], [3, "config", "context$", "context", "type"], [1, "row", "no-gutters", "pt-1", "pb-4"], [3, "config"], ["class", "col-lg-3 record-widget-container pl-0", 3, "mt-0", 4, "ngIf"], [1, "col-lg-3", "record-widget-container", "pl-0"], [3, "type", "context", "context$", "config"]], template: function RecordContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordContainerComponent_div_0_Template, 4, 2, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i10.NgClass, i10.NgForOf, i10.NgIf, i11.SubpanelContainerComponent, i12.RecordContentComponent, i13.TopWidgetComponent, i14.SidebarWidgetComponent, i15.RecordContentSkeletonComponent, i10.AsyncPipe], encapsulation: 2 }); }
}
export { RecordContainerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordContainerComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-container', providers: [RecordContentAdapter, TopWidgetAdapter, SidebarWidgetAdapter, BottomWidgetAdapter], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start Record View Container Section -->\n\n<div *ngIf=\"(vm$ | async) as vm\"\n     class=\"record-view-container view-container container-fluid pt-3 pb-3 small-font\">\n    <div class=\"row\">\n        <ng-container *ngIf=\"!swapWidgets || (swapWidgets && !displayWidgets)\">\n            <div class=\"col-lg-9\" [ngClass]=\"{ 'col-lg-12': !sidebarWidgetConfig.show }\">\n\n            <div class=\"container-fluid pl-0 pr-0\">\n                <div *ngIf=\"loading\" class=\"row no-gutters\">\n                    <div class=\"col pb-3\">\n                        <div class=\"d-flex justify-content-center widget-bar rounded  pb-1 pt-3 box-loading\">\n                            <div class=\"d-flex justify-content-center align-items-baseline widget-bar-entry p-2\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <ng-container *ngIf=\"!loading\">\n                    <div *ngIf=\"vm.topWidgetConfig.show && hasTopWidgetMetadata(vm.topWidgetConfig.widget)\"\n                         class=\"row no-gutters\">\n                        <div class=\"col pb-3\">\n                            <scrm-top-widget [config]=\"vm.topWidgetConfig.widget\"\n                                             [context]=\"getViewContext()\"\n                                             [type]=\"vm.topWidgetConfig.widget.type\">\n                            </scrm-top-widget>\n                        </div>\n                    </div>\n                </ng-container>\n\n\n                <div class=\"row no-gutters\">\n                    <div class=\"col\">\n                        <ng-container *ngIf=\"loading\">\n                            <scrm-record-content-skeleton></scrm-record-content-skeleton>\n                        </ng-container>\n                        <ng-container *ngIf=\"!loading\">\n                            <scrm-record-content [dataSource]=\"getContentAdapter()\"></scrm-record-content>\n                        </ng-container>\n                    </div>\n                </div>\n\n                <div *ngIf=\"vm.bottomWidgetConfig.show && vm.bottomWidgetConfig.widgets\"\n                     class=\"row no-gutters mt-4\">\n                    <div class=\"col\">\n                        <div *ngFor=\"let widget of vm.bottomWidgetConfig.widgets\" class=\"mb-3\">\n                            <scrm-sidebar-widget [config]=\"widget\"\n                                                 [context$]=\"getViewContext$()\"\n                                                 [context]=\"getViewContext()\"\n                                                 [type]=\"widget.type\">\n                            </scrm-sidebar-widget>\n                        </div>\n                    </div>\n                </div>\n\n                <div *ngIf=\"vm.showSubpanels\"\n                     class=\"row no-gutters pt-1 pb-4\">\n                    <div class=\"col\">\n                        <scrm-subpanel-container [config]=\"getSubpanelsConfig()\"></scrm-subpanel-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"!swapWidgets || (swapWidgets && displayWidgets)\">\n            <div class=\"col-lg-3 record-widget-container pl-0\"\n                 [class.mt-0]=\"swapWidgets\"\n                 *ngIf=\"displayWidgets\">\n                <div class=\"mb-3\" *ngFor=\"let widget of sidebarWidgetConfig.widgets\">\n                    <scrm-sidebar-widget [type]=\"widget.type\"\n                                         [context]=\"getViewContext()\"\n                                         [context$]=\"getViewContext$()\"\n                                         [config]=\"widget\">\n                    </scrm-sidebar-widget>\n                </div>\n            </div>\n        </ng-container>\n\n    </div>\n</div>\n\n<!-- End Record View Container Section -->\n" }]
    }], function () { return [{ type: i1.RecordViewStore }, { type: i2.LanguageStore }, { type: i3.MetadataStore }, { type: i4.RecordContentAdapter }, { type: i5.TopWidgetAdapter }, { type: i6.SidebarWidgetAdapter }, { type: i7.BottomWidgetAdapter }, { type: i8.RecordActionsAdapter }, { type: i9.RecordViewSidebarWidgetService }]; }, { onEnterKey: [{
            type: HostListener,
            args: ['keyup.control.enter']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRhaW5lci9yZWNvcmQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvY29tcG9uZW50cy9yZWNvcmQtY29udGFpbmVyL3JlY29yZC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsaUJBQWlCLEVBQTJCLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxhQUFhLEVBQWtCLE1BQU0sMkNBQTJDLENBQUM7QUFJekYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDM0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBRTNFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBRXBFLE9BQU8sRUFBQyw4QkFB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QUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQkFBaUI7UUFDYixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVELGtCQUFrQjtRQUNkLE9BQU87WUFDSCxZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUU7WUFDbEQsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVTtZQUMzQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRO1NBQ3JCLENBQUM7SUFDakMsQ0FBQztJQUVELGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELGVBQWU7UUFDWCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDO0lBQzdDLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxJQUFvQjtRQUNyQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzt5RkF0SFEsd0JBQXdCO29FQUF4Qix3QkFBd0I7cUlBQXhCLGdCQUFZOzhDQUZWLENBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUM7WUNuQmxHLHlFQTZFTTs7O1lBN0VBLG9EQUFvQjs7O1NEcUJiLHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBTHBDLFNBQVM7MkJBQ0ksdUJBQXVCLGFBRXRCLENBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUM7aVZBZ0Q5RixVQUFVO2tCQURULFlBQVk7bUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIGZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtWaWV3Q29udGV4dCwgV2lkZ2V0TWV0YWRhdGF9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlLCBMYW5ndWFnZVN0cmluZ3N9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7XG4gICAgU3VicGFuZWxDb250YWluZXJDb25maWdcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9zdWJwYW5lbC9jb21wb25lbnRzL3N1YnBhbmVsLWNvbnRhaW5lci9zdWJwYW5lbC1jb250YWluZXIubW9kZWwnO1xuaW1wb3J0IHtTaWRlYmFyV2lkZ2V0QWRhcHRlcn0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvc2lkZWJhci13aWRnZXQuYWRhcHRlcic7XG5pbXBvcnQge1JlY29yZFZpZXdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvcmVjb3JkLXZpZXcvcmVjb3JkLXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRDb250ZW50QWRhcHRlcn0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvcmVjb3JkLWNvbnRlbnQuYWRhcHRlcic7XG5pbXBvcnQge1JlY29yZENvbnRlbnREYXRhU291cmNlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3JlY29yZC1jb250ZW50L3JlY29yZC1jb250ZW50Lm1vZGVsJztcbmltcG9ydCB7VG9wV2lkZ2V0QWRhcHRlcn0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvdG9wLXdpZGdldC5hZGFwdGVyJztcbmltcG9ydCB7Qm90dG9tV2lkZ2V0QWRhcHRlcn0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvYm90dG9tLXdpZGdldC5hZGFwdGVyJztcbmltcG9ydCB7UmVjb3JkQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL2FjdGlvbnMuYWRhcHRlcic7XG5pbXBvcnQge0FjdGlvbiwgQWN0aW9uQ29udGV4dH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7UmVjb3JkVmlld1NpZGViYXJXaWRnZXRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcmVjb3JkLXZpZXctc2lkZWJhci13aWRnZXQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tcmVjb3JkLWNvbnRhaW5lcicsXG4gICAgdGVtcGxhdGVVcmw6ICdyZWNvcmQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtSZWNvcmRDb250ZW50QWRhcHRlciwgVG9wV2lkZ2V0QWRhcHRlciwgU2lkZWJhcldpZGdldEFkYXB0ZXIsIEJvdHRvbVdpZGdldEFkYXB0ZXJdXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgc2F2ZUFjdGlvbjogQWN0aW9uO1xuICAgIGNvbnRleHQ6IEFjdGlvbkNvbnRleHQ7XG4gICAgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG4gICAgbGFuZ3VhZ2UkOiBPYnNlcnZhYmxlPExhbmd1YWdlU3RyaW5ncz4gPSB0aGlzLmxhbmd1YWdlLnZtJDtcbiAgICBkaXNwbGF5V2lkZ2V0czogYm9vbGVhbiA9IHRydWU7XG4gICAgc3dhcFdpZGdldHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzaWRlYmFyV2lkZ2V0Q29uZmlnOiBhbnk7XG5cbiAgICB2bSQgPSB0aGlzLmxhbmd1YWdlJC5waXBlKFxuICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChcbiAgICAgICAgICAgIHRoaXMuYm90dG9tV2lkZ2V0QWRhcHRlci5jb25maWckLFxuICAgICAgICAgICAgdGhpcy50b3BXaWRnZXRBZGFwdGVyLmNvbmZpZyQsXG4gICAgICAgICAgICB0aGlzLnJlY29yZFZpZXdTdG9yZS5zaG93U3VicGFuZWxzJFxuICAgICAgICApLFxuICAgICAgICBtYXAoKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgICAgIGJvdHRvbVdpZGdldENvbmZpZyxcbiAgICAgICAgICAgICAgICB0b3BXaWRnZXRDb25maWcsXG4gICAgICAgICAgICAgICAgc2hvd1N1YnBhbmVsc1xuICAgICAgICAgICAgXVxuICAgICAgICApID0+ICh7XG4gICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgIGJvdHRvbVdpZGdldENvbmZpZyxcbiAgICAgICAgICAgIHRvcFdpZGdldENvbmZpZyxcbiAgICAgICAgICAgIHNob3dTdWJwYW5lbHNcbiAgICAgICAgfSkpXG4gICAgKTtcblxuICAgIGFjdGlvbkNvbmZpZyQgPSAgdGhpcy5yZWNvcmRWaWV3U3RvcmUubW9kZSQucGlwZShcbiAgICAgICAgY29tYmluZUxhdGVzdFdpdGgoXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNBZGFwdGVyLmdldEFjdGlvbnMoKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0Vmlld0NvbnRleHQkKCkpLFxuICAgICAgICBmaWx0ZXIoKFttb2RlLCBhY3Rpb25zLCBjb250ZXh0XSkgPT4gbW9kZSA9PT0gJ2VkaXQnKSxcbiAgICAgICAgbWFwKChbbW9kZSwgYWN0aW9ucywgY29udGV4dF0pID0+ICh7XG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgYWN0aW9ucyxcbiAgICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgfSkpXG4gICAgKTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleXVwLmNvbnRyb2wuZW50ZXInKVxuICAgIG9uRW50ZXJLZXkoKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlQWN0aW9uIHx8ICF0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGlvbnNBZGFwdGVyLnJ1bkFjdGlvbih0aGlzLnNhdmVBY3Rpb24sIHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByZWNvcmRWaWV3U3RvcmU6IFJlY29yZFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBjb250ZW50QWRhcHRlcjogUmVjb3JkQ29udGVudEFkYXB0ZXIsXG4gICAgICAgIHByb3RlY3RlZCB0b3BXaWRnZXRBZGFwdGVyOiBUb3BXaWRnZXRBZGFwdGVyLFxuICAgICAgICBwcm90ZWN0ZWQgc2lkZWJhcldpZGdldEFkYXB0ZXI6IFNpZGViYXJXaWRnZXRBZGFwdGVyLFxuICAgICAgICBwcm90ZWN0ZWQgYm90dG9tV2lkZ2V0QWRhcHRlcjogQm90dG9tV2lkZ2V0QWRhcHRlcixcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbnNBZGFwdGVyOiBSZWNvcmRBY3Rpb25zQWRhcHRlcixcbiAgICAgICAgcHJvdGVjdGVkIHNpZGViYXJXaWRnZXRIYW5kbGVyOiBSZWNvcmRWaWV3U2lkZWJhcldpZGdldFNlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5yZWNvcmRWaWV3U3RvcmUubG9hZGluZyQuc3Vic2NyaWJlKGxvYWRpbmcgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gbG9hZGluZztcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuYWN0aW9uQ29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb25maWcuY29udGV4dDtcbiAgICAgICAgICAgICAgICBjb25maWcuYWN0aW9ucy5mb3JFYWNoKGFjdGlvbkl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uSXRlbS5rZXkgPT09ICdzYXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQWN0aW9uID0gYWN0aW9uSXRlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnNpZGViYXJXaWRnZXRBZGFwdGVyLmNvbmZpZyQuc3Vic2NyaWJlKHNpZGViYXJXaWRnZXRDb25maWcgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaWRlYmFyV2lkZ2V0Q29uZmlnID0gc2lkZWJhcldpZGdldENvbmZpZztcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVdpZGdldHMgPSB0aGlzLnNpZGViYXJXaWRnZXRDb25maWcuc2hvdyAmJiB0aGlzLnNpZGViYXJXaWRnZXRDb25maWcud2lkZ2V0cztcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuc2lkZWJhcldpZGdldEhhbmRsZXIud2lkZ2V0U3dhcCQuc3Vic2NyaWJlKHN3YXAgPT4ge1xuICAgICAgICAgICAgdGhpcy5zd2FwV2lkZ2V0cyA9IHN3YXA7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5jb250ZW50QWRhcHRlci5jbGVhbigpO1xuICAgIH1cblxuICAgIGdldENvbnRlbnRBZGFwdGVyKCk6IFJlY29yZENvbnRlbnREYXRhU291cmNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudEFkYXB0ZXI7XG4gICAgfVxuXG4gICAgZ2V0U3VicGFuZWxzQ29uZmlnKCk6IFN1YnBhbmVsQ29udGFpbmVyQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmVudE1vZHVsZTogdGhpcy5yZWNvcmRWaWV3U3RvcmUuZ2V0TW9kdWxlTmFtZSgpLFxuICAgICAgICAgICAgc3VicGFuZWxzJDogdGhpcy5yZWNvcmRWaWV3U3RvcmUuc3VicGFuZWxzJCxcbiAgICAgICAgICAgIHNpZGViYXJBY3RpdmUkOiB0aGlzLnJlY29yZFZpZXdTdG9yZS53aWRnZXRzJFxuICAgICAgICB9IGFzIFN1YnBhbmVsQ29udGFpbmVyQ29uZmlnO1xuICAgIH1cblxuICAgIGdldFZpZXdDb250ZXh0KCk6IFZpZXdDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkVmlld1N0b3JlLmdldFZpZXdDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgZ2V0Vmlld0NvbnRleHQkKCk6IE9ic2VydmFibGU8Vmlld0NvbnRleHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkVmlld1N0b3JlLnZpZXdDb250ZXh0JDtcbiAgICB9XG5cbiAgICBoYXNUb3BXaWRnZXRNZXRhZGF0YShtZXRhOiBXaWRnZXRNZXRhZGF0YSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISEobWV0YSAmJiBtZXRhLnR5cGUpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjwhLS0gU3RhcnQgUmVjb3JkIFZpZXcgQ29udGFpbmVyIFNlY3Rpb24gLS0+XG5cbjxkaXYgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCJcbiAgICAgY2xhc3M9XCJyZWNvcmQtdmlldy1jb250YWluZXIgdmlldy1jb250YWluZXIgY29udGFpbmVyLWZsdWlkIHB0LTMgcGItMyBzbWFsbC1mb250XCI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXN3YXBXaWRnZXRzIHx8IChzd2FwV2lkZ2V0cyAmJiAhZGlzcGxheVdpZGdldHMpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTlcIiBbbmdDbGFzc109XCJ7ICdjb2wtbGctMTInOiAhc2lkZWJhcldpZGdldENvbmZpZy5zaG93IH1cIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwbC0wIHByLTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBwYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgd2lkZ2V0LWJhciByb3VuZGVkICBwYi0xIHB0LTMgYm94LWxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtYmFzZWxpbmUgd2lkZ2V0LWJhci1lbnRyeSBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInZtLnRvcFdpZGdldENvbmZpZy5zaG93ICYmIGhhc1RvcFdpZGdldE1ldGFkYXRhKHZtLnRvcFdpZGdldENvbmZpZy53aWRnZXQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHBiLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS10b3Atd2lkZ2V0IFtjb25maWddPVwidm0udG9wV2lkZ2V0Q29uZmlnLndpZGdldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udGV4dF09XCJnZXRWaWV3Q29udGV4dCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cInZtLnRvcFdpZGdldENvbmZpZy53aWRnZXQudHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS10b3Atd2lkZ2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1yZWNvcmQtY29udGVudC1za2VsZXRvbj48L3Njcm0tcmVjb3JkLWNvbnRlbnQtc2tlbGV0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLXJlY29yZC1jb250ZW50IFtkYXRhU291cmNlXT1cImdldENvbnRlbnRBZGFwdGVyKClcIj48L3Njcm0tcmVjb3JkLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidm0uYm90dG9tV2lkZ2V0Q29uZmlnLnNob3cgJiYgdm0uYm90dG9tV2lkZ2V0Q29uZmlnLndpZGdldHNcIlxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3cgbm8tZ3V0dGVycyBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHdpZGdldCBvZiB2bS5ib3R0b21XaWRnZXRDb25maWcud2lkZ2V0c1wiIGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLXNpZGViYXItd2lkZ2V0IFtjb25maWddPVwid2lkZ2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udGV4dCRdPVwiZ2V0Vmlld0NvbnRleHQkKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb250ZXh0XT1cImdldFZpZXdDb250ZXh0KClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cIndpZGdldC50eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLXNpZGViYXItd2lkZ2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInZtLnNob3dTdWJwYW5lbHNcIlxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3cgbm8tZ3V0dGVycyBwdC0xIHBiLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tc3VicGFuZWwtY29udGFpbmVyIFtjb25maWddPVwiZ2V0U3VicGFuZWxzQ29uZmlnKClcIj48L3Njcm0tc3VicGFuZWwtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzd2FwV2lkZ2V0cyB8fCAoc3dhcFdpZGdldHMgJiYgZGlzcGxheVdpZGdldHMpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgcmVjb3JkLXdpZGdldC1jb250YWluZXIgcGwtMFwiXG4gICAgICAgICAgICAgICAgIFtjbGFzcy5tdC0wXT1cInN3YXBXaWRnZXRzXCJcbiAgICAgICAgICAgICAgICAgKm5nSWY9XCJkaXNwbGF5V2lkZ2V0c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCIgKm5nRm9yPVwibGV0IHdpZGdldCBvZiBzaWRlYmFyV2lkZ2V0Q29uZmlnLndpZGdldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tc2lkZWJhci13aWRnZXQgW3R5cGVdPVwid2lkZ2V0LnR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udGV4dF09XCJnZXRWaWV3Q29udGV4dCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbnRleHQkXT1cImdldFZpZXdDb250ZXh0JCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9zY3JtLXNpZGViYXItd2lkZ2V0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSBFbmQgUmVjb3JkIFZpZXcgQ29udGFpbmVyIFNlY3Rpb24gLS0+XG4iXX0=