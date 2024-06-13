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
import { Component } from '@angular/core';
import { MaxColumnsCalculator } from '../../../../services/ui/max-columns-calculator/max-columns-calculator.service';
import { LanguageStore } from '../../../../store/language/language.store';
import { ScreenSize } from '../../../../services/ui/screen-size-observer/screen-size-observer.service';
import { ListViewStore } from '../../store/list-view/list-view.store';
import { TableAdapter } from '../../adapters/table.adapter';
import { ListViewSidebarWidgetAdapter } from '../../adapters/sidebar-widget.adapter';
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { ListViewSidebarWidgetService } from "../../services/list-view-sidebar-widget.service";
import * as i0 from "@angular/core";
import * as i1 from "../../store/list-view/list-view.store";
import * as i2 from "../../adapters/table.adapter";
import * as i3 from "../../../../services/ui/max-columns-calculator/max-columns-calculator.service";
import * as i4 from "../../../../store/language/language.store";
import * as i5 from "../../adapters/sidebar-widget.adapter";
import * as i6 from "../../../../store/system-config/system-config.store";
import * as i7 from "../../services/list-view-sidebar-widget.service";
import * as i8 from "@angular/common";
import * as i9 from "../../../../components/table/table.component";
import * as i10 from "../../../../containers/sidebar-widget/components/sidebar-widget/sidebar-widget.component";
const _c0 = function (a0) { return { "col-lg-12": a0 }; };
function ListContainerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelement(2, "scrm-table", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, !ctx_r0.displayWidgets));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r0.tableConfig);
} }
function ListContainerComponent_ng_container_3_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "scrm-sidebar-widget", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", widget_r4)("context", ctx_r3.getViewContext())("context$", ctx_r3.store.context$)("type", widget_r4.type);
} }
function ListContainerComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, ListContainerComponent_ng_container_3_ng_container_1_div_2_Template, 2, 4, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("display", ctx_r2.widgetDisplayType);
    i0.ɵɵclassProp("mt-0", ctx_r2.swapWidgets);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.sidebarWidgetConfig.widgets);
} }
function ListContainerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListContainerComponent_ng_container_3_ng_container_1_Template, 3, 5, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.swapWidgets || ctx_r1.swapWidgets && ctx_r1.displayWidgets);
} }
class ListContainerComponent {
    constructor(store, adapter, maxColumnCalculator, languageStore, sidebarWidgetAdapter, systemConfigs, sidebarWidgetHandler) {
        this.store = store;
        this.adapter = adapter;
        this.maxColumnCalculator = maxColumnCalculator;
        this.languageStore = languageStore;
        this.sidebarWidgetAdapter = sidebarWidgetAdapter;
        this.systemConfigs = systemConfigs;
        this.sidebarWidgetHandler = sidebarWidgetHandler;
        this.screen = ScreenSize.Medium;
        this.maxColumns = 5;
        this.displayWidgets = true;
        this.swapWidgets = false;
        this.widgetDisplayType = 'none';
        this.subs = [];
    }
    ngOnInit() {
        this.tableConfig = this.adapter.getTable();
        this.tableConfig.maxColumns$ = this.getMaxColumns();
        if (this.store?.metadata?.listView?.maxHeight) {
            this.tableConfig.maxListHeight = this.store.metadata.listView.maxHeight;
        }
        if (!this.tableConfig?.maxListHeight) {
            const ui = this.systemConfigs.getConfigValue('ui');
            this.tableConfig.maxListHeight = ui.listview_max_height;
        }
        this.tableConfig.paginationType = this?.store?.metadata?.listView?.paginationType ?? this.tableConfig.paginationType;
        this.subs.push(this.sidebarWidgetAdapter.config$.subscribe(sidebarWidgetConfig => {
            this.sidebarWidgetConfig = sidebarWidgetConfig;
            this.displayWidgets = this.store.widgets && this.store.showSidebarWidgets;
            this.widgetDisplayType = this.getDisplay(!!(this.sidebarWidgetConfig.show && this.sidebarWidgetConfig.widgets));
        }));
        this.subs.push(this.sidebarWidgetHandler.widgetSwap$.subscribe(swap => {
            this.swapWidgets = swap;
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
    }
    getMaxColumns() {
        return this.maxColumnCalculator.getMaxColumns(this.store.widgets$);
    }
    getDisplayWidgets() {
        return this.store.widgets && this.store.showSidebarWidgets;
    }
    getDisplay(display) {
        let displayType = 'none';
        if (display) {
            displayType = 'block';
        }
        return displayType;
    }
    getViewContext() {
        return this.store.getViewContext();
    }
    static { this.ɵfac = function ListContainerComponent_Factory(t) { return new (t || ListContainerComponent)(i0.ɵɵdirectiveInject(i1.ListViewStore), i0.ɵɵdirectiveInject(i2.TableAdapter), i0.ɵɵdirectiveInject(i3.MaxColumnsCalculator), i0.ɵɵdirectiveInject(i4.LanguageStore), i0.ɵɵdirectiveInject(i5.ListViewSidebarWidgetAdapter), i0.ɵɵdirectiveInject(i6.SystemConfigStore), i0.ɵɵdirectiveInject(i7.ListViewSidebarWidgetService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListContainerComponent, selectors: [["scrm-list-container"]], features: [i0.ɵɵProvidersFeature([TableAdapter, MaxColumnsCalculator, ListViewSidebarWidgetAdapter])], decls: 4, vars: 2, consts: [[1, "list-view-container", "container-fluid", "pt-2"], [1, "row"], [4, "ngIf"], [1, "col-lg-9", 3, "ngClass"], [3, "config"], [1, "col-lg-3", "list-widget-container", "pl-0"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "mb-3"], [3, "config", "context", "context$", "type"]], template: function ListContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, ListContainerComponent_ng_container_2_Template, 3, 4, "ng-container", 2);
            i0.ɵɵtemplate(3, ListContainerComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.swapWidgets || ctx.swapWidgets && !ctx.displayWidgets);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.sidebarWidgetConfig.widgetsEnabled);
        } }, dependencies: [i8.NgClass, i8.NgForOf, i8.NgIf, i9.TableComponent, i10.SidebarWidgetComponent], encapsulation: 2 }); }
}
export { ListContainerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListContainerComponent, [{
        type: Component,
        args: [{ selector: 'scrm-list-container', providers: [TableAdapter, MaxColumnsCalculator, ListViewSidebarWidgetAdapter], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start List View Container Section -->\n\n<div class=\"list-view-container container-fluid pt-2\">\n    <div class=\"row\">\n        <ng-container *ngIf=\"!swapWidgets || (swapWidgets && !displayWidgets)\">\n            <div [ngClass]=\"{ 'col-lg-12': !displayWidgets }\"\n                 class=\"col-lg-9\"\n            >\n                <scrm-table [config]=\"tableConfig\"></scrm-table>\n            </div>\n        </ng-container>\n\n\n        <ng-container *ngIf=\"sidebarWidgetConfig.widgetsEnabled\">\n            <ng-container *ngIf=\"!swapWidgets || (swapWidgets && displayWidgets)\">\n            <div [style.display]=\"widgetDisplayType\"\n                 [class.mt-0]=\"swapWidgets\"\n                 class=\"col-lg-3 list-widget-container pl-0\">\n                <div *ngFor=\"let widget of sidebarWidgetConfig.widgets\" class=\"mb-3\">\n                    <scrm-sidebar-widget [config]=\"widget\"\n                                         [context]=\"getViewContext()\"\n                                         [context$]=\"store.context$\"\n                                         [type]=\"widget.type\">\n                    </scrm-sidebar-widget>\n                </div>\n            </div>\n            </ng-container>\n        </ng-container>\n\n\n    </div>\n</div>\n\n<!-- End List View Container Section -->\n" }]
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.TableAdapter }, { type: i3.MaxColumnsCalculator }, { type: i4.LanguageStore }, { type: i5.ListViewSidebarWidgetAdapter }, { type: i6.SystemConfigStore }, { type: i7.ListViewSidebarWidgetService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3QvY29tcG9uZW50cy9saXN0LWNvbnRhaW5lci9saXN0LWNvbnRhaW5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9jb21wb25lbnRzL2xpc3QtY29udGFpbmVyL2xpc3QtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUkzRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwrRUFBK0UsQ0FBQztBQUNuSCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDJFQUEyRSxDQUFDO0FBQ3JHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUVwRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDbkYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDdEYsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0saURBQWlELENBQUM7Ozs7Ozs7Ozs7Ozs7O0lDUHJGLDZCQUF1RTtJQUNuRSw4QkFFQztJQUNHLGdDQUFnRDtJQUNwRCxpQkFBTTtJQUNWLDBCQUFlOzs7SUFMTixlQUE0QztJQUE1Qyw0RUFBNEM7SUFHakMsZUFBc0I7SUFBdEIsMkNBQXNCOzs7SUFVbEMsOEJBQXFFO0lBQ2pF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Y2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1ZpZXdDb250ZXh0LCBXaWRnZXRNZXRhZGF0YX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge01heENvbHVtbnNDYWxjdWxhdG9yfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy91aS9tYXgtY29sdW1ucy1jYWxjdWxhdG9yL21heC1jb2x1bW5zLWNhbGN1bGF0b3Iuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7U2NyZWVuU2l6ZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdWkvc2NyZWVuLXNpemUtb2JzZXJ2ZXIvc2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZSc7XG5pbXBvcnQge0xpc3RWaWV3U3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xpc3Qtdmlldy9saXN0LXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtUYWJsZUNvbmZpZ30gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy90YWJsZS90YWJsZS5tb2RlbCc7XG5pbXBvcnQge1RhYmxlQWRhcHRlcn0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvdGFibGUuYWRhcHRlcic7XG5pbXBvcnQge0xpc3RWaWV3U2lkZWJhcldpZGdldEFkYXB0ZXJ9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL3NpZGViYXItd2lkZ2V0LmFkYXB0ZXInO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZVwiO1xuaW1wb3J0IHtMaXN0Vmlld1NpZGViYXJXaWRnZXRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGlzdC12aWV3LXNpZGViYXItd2lkZ2V0LnNlcnZpY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBMaXN0Q29udGFpbmVyU3RhdGUge1xuICAgIHNpZGViYXJXaWRnZXRDb25maWc6IHtcbiAgICAgICAgd2lkZ2V0czogV2lkZ2V0TWV0YWRhdGFbXTtcbiAgICAgICAgc2hvdzogYm9vbGVhbjtcbiAgICAgICAgd2lkZ2V0c0VuYWJsZWQ6IGJvb2xlYW47XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tbGlzdC1jb250YWluZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnbGlzdC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1RhYmxlQWRhcHRlciwgTWF4Q29sdW1uc0NhbGN1bGF0b3IsIExpc3RWaWV3U2lkZWJhcldpZGdldEFkYXB0ZXJdLFxufSlcblxuZXhwb3J0IGNsYXNzIExpc3RDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgc2NyZWVuOiBTY3JlZW5TaXplID0gU2NyZWVuU2l6ZS5NZWRpdW07XG4gICAgbWF4Q29sdW1ucyA9IDU7XG4gICAgdGFibGVDb25maWc6IFRhYmxlQ29uZmlnO1xuICAgIGRpc3BsYXlXaWRnZXRzOiBib29sZWFuID0gdHJ1ZTtcbiAgICBzd2FwV2lkZ2V0czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHNpZGViYXJXaWRnZXRDb25maWc6IGFueTtcbiAgICB3aWRnZXREaXNwbGF5VHlwZTogc3RyaW5nID0gJ25vbmUnO1xuXG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHN0b3JlOiBMaXN0Vmlld1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYWRhcHRlcjogVGFibGVBZGFwdGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbWF4Q29sdW1uQ2FsY3VsYXRvcjogTWF4Q29sdW1uc0NhbGN1bGF0b3IsXG4gICAgICAgIHB1YmxpYyBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc2lkZWJhcldpZGdldEFkYXB0ZXI6IExpc3RWaWV3U2lkZWJhcldpZGdldEFkYXB0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdzOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHNpZGViYXJXaWRnZXRIYW5kbGVyOiBMaXN0Vmlld1NpZGViYXJXaWRnZXRTZXJ2aWNlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFibGVDb25maWcgPSB0aGlzLmFkYXB0ZXIuZ2V0VGFibGUoKTtcbiAgICAgICAgdGhpcy50YWJsZUNvbmZpZy5tYXhDb2x1bW5zJCA9IHRoaXMuZ2V0TWF4Q29sdW1ucygpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0b3JlPy5tZXRhZGF0YT8ubGlzdFZpZXc/Lm1heEhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy50YWJsZUNvbmZpZy5tYXhMaXN0SGVpZ2h0ID0gdGhpcy5zdG9yZS5tZXRhZGF0YS5saXN0Vmlldy5tYXhIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnRhYmxlQ29uZmlnPy5tYXhMaXN0SGVpZ2h0KSB7XG4gICAgICAgICAgICBjb25zdCB1aSA9IHRoaXMuc3lzdGVtQ29uZmlncy5nZXRDb25maWdWYWx1ZSgndWknKTtcbiAgICAgICAgICAgIHRoaXMudGFibGVDb25maWcubWF4TGlzdEhlaWdodCA9IHVpLmxpc3R2aWV3X21heF9oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YWJsZUNvbmZpZy5wYWdpbmF0aW9uVHlwZSA9IHRoaXM/LnN0b3JlPy5tZXRhZGF0YT8ubGlzdFZpZXc/LnBhZ2luYXRpb25UeXBlID8/IHRoaXMudGFibGVDb25maWcucGFnaW5hdGlvblR5cGU7XG5cblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnNpZGViYXJXaWRnZXRBZGFwdGVyLmNvbmZpZyQuc3Vic2NyaWJlKHNpZGViYXJXaWRnZXRDb25maWcgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaWRlYmFyV2lkZ2V0Q29uZmlnID0gc2lkZWJhcldpZGdldENvbmZpZztcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVdpZGdldHMgPSB0aGlzLnN0b3JlLndpZGdldHMgJiYgdGhpcy5zdG9yZS5zaG93U2lkZWJhcldpZGdldHM7XG4gICAgICAgICAgICB0aGlzLndpZGdldERpc3BsYXlUeXBlID0gdGhpcy5nZXREaXNwbGF5KCEhKHRoaXMuc2lkZWJhcldpZGdldENvbmZpZy5zaG93ICYmIHRoaXMuc2lkZWJhcldpZGdldENvbmZpZy53aWRnZXRzKSk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnNpZGViYXJXaWRnZXRIYW5kbGVyLndpZGdldFN3YXAkLnN1YnNjcmliZShzd2FwID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3dhcFdpZGdldHMgPSBzd2FwO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuc3VicyA9IFtdO1xuICAgIH1cblxuICAgIGdldE1heENvbHVtbnMoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4Q29sdW1uQ2FsY3VsYXRvci5nZXRNYXhDb2x1bW5zKHRoaXMuc3RvcmUud2lkZ2V0cyQpO1xuICAgIH1cblxuICAgIGdldERpc3BsYXlXaWRnZXRzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS53aWRnZXRzICYmIHRoaXMuc3RvcmUuc2hvd1NpZGViYXJXaWRnZXRzO1xuICAgIH1cblxuICAgIGdldERpc3BsYXkoZGlzcGxheTogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgICAgIGxldCBkaXNwbGF5VHlwZSA9ICdub25lJztcblxuICAgICAgICBpZiAoZGlzcGxheSkge1xuICAgICAgICAgICAgZGlzcGxheVR5cGUgPSAnYmxvY2snO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpc3BsYXlUeXBlO1xuICAgIH1cblxuICAgIGdldFZpZXdDb250ZXh0KCk6IFZpZXdDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0Vmlld0NvbnRleHQoKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48IS0tIFN0YXJ0IExpc3QgVmlldyBDb250YWluZXIgU2VjdGlvbiAtLT5cblxuPGRpdiBjbGFzcz1cImxpc3Qtdmlldy1jb250YWluZXIgY29udGFpbmVyLWZsdWlkIHB0LTJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc3dhcFdpZGdldHMgfHwgKHN3YXBXaWRnZXRzICYmICFkaXNwbGF5V2lkZ2V0cylcIj5cbiAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieyAnY29sLWxnLTEyJzogIWRpc3BsYXlXaWRnZXRzIH1cIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC1sZy05XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c2NybS10YWJsZSBbY29uZmlnXT1cInRhYmxlQ29uZmlnXCI+PC9zY3JtLXRhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNpZGViYXJXaWRnZXRDb25maWcud2lkZ2V0c0VuYWJsZWRcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc3dhcFdpZGdldHMgfHwgKHN3YXBXaWRnZXRzICYmIGRpc3BsYXlXaWRnZXRzKVwiPlxuICAgICAgICAgICAgPGRpdiBbc3R5bGUuZGlzcGxheV09XCJ3aWRnZXREaXNwbGF5VHlwZVwiXG4gICAgICAgICAgICAgICAgIFtjbGFzcy5tdC0wXT1cInN3YXBXaWRnZXRzXCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtbGctMyBsaXN0LXdpZGdldC1jb250YWluZXIgcGwtMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHdpZGdldCBvZiBzaWRlYmFyV2lkZ2V0Q29uZmlnLndpZGdldHNcIiBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tc2lkZWJhci13aWRnZXQgW2NvbmZpZ109XCJ3aWRnZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udGV4dF09XCJnZXRWaWV3Q29udGV4dCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbnRleHQkXT1cInN0b3JlLmNvbnRleHQkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwid2lkZ2V0LnR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9zY3JtLXNpZGViYXItd2lkZ2V0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cblxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjwhLS0gRW5kIExpc3QgVmlldyBDb250YWluZXIgU2VjdGlvbiAtLT5cbiJdfQ==