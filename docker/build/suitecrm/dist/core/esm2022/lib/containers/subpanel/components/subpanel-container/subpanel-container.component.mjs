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
import { Component, Input, signal } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { LanguageStore } from '../../../../store/language/language.store';
import { MaxColumnsCalculator } from '../../../../services/ui/max-columns-calculator/max-columns-calculator.service';
import { isTrue } from 'common';
import { LocalStorageService } from "../../../../services/local-storage/local-storage.service";
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../services/ui/max-columns-calculator/max-columns-calculator.service";
import * as i3 from "../../../../services/local-storage/local-storage.service";
import * as i4 from "../../../../store/user-preference/user-preference.store";
import * as i5 from "@angular/common";
import * as i6 from "@ng-bootstrap/ng-bootstrap";
import * as i7 from "../../../../components/image/image.component";
import * as i8 from "../subpanel/subpanel.component";
import * as i9 from "../../../../components/grid-widget/grid-widget.component";
import * as i10 from "../../../../components/label/label.component";
function SubpanelContainerComponent_ng_container_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-image", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("image", ctx_r3.toggleIcon());
    i0.ɵɵattribute("aria-expanded", false);
} }
function SubpanelContainerComponent_ng_container_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-image", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("image", ctx_r4.toggleIcon());
    i0.ɵɵattribute("aria-expanded", true);
} }
const _c0 = function (a0) { return { "sub-panel-banner-button-active": a0 }; };
function SubpanelContainerComponent_ng_container_0_ng_template_12_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵlistener("click", function SubpanelContainerComponent_ng_container_0_ng_template_12_div_2_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const item_r8 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r9.showSubpanel(item_r8.key, item_r8.value)); });
    i0.ɵɵelement(1, "scrm-grid-widget", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, item_r8.value.show === true));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r7.getGridConfig(item_r8.value));
} }
function SubpanelContainerComponent_ng_container_0_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 14);
    i0.ɵɵtemplate(2, SubpanelContainerComponent_ng_container_0_ng_template_12_div_2_Template, 2, 4, "div", 15);
    i0.ɵɵpipe(3, "keyvalue");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 1, vm_r1.subpanels));
} }
function SubpanelContainerComponent_ng_container_0_ng_container_14_ng_container_1_scrm_subpanel_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-subpanel", 19);
} if (rf & 2) {
    const item_r14 = i0.ɵɵnextContext().ngIf;
    const subpanelKey_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("maxColumns$", ctx_r15.maxColumns$)("store", item_r14)("filterConfig", ctx_r15.filterConfig)("onClose", ctx_r15.getCloseCallBack(subpanelKey_r12, item_r14));
} }
function SubpanelContainerComponent_ng_container_0_ng_container_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubpanelContainerComponent_ng_container_0_ng_container_14_ng_container_1_scrm_subpanel_1_Template, 1, 4, "scrm-subpanel", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r14 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r14.show);
} }
function SubpanelContainerComponent_ng_container_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubpanelContainerComponent_ng_container_0_ng_container_14_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const subpanelKey_r12 = ctx.$implicit;
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.subpanels[subpanelKey_r12]);
} }
function SubpanelContainerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1, 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
    i0.ɵɵlistener("click", function SubpanelContainerComponent_ng_container_0_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.toggleSubPanels()); });
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵelement(7, "scrm-label", 7);
    i0.ɵɵtemplate(8, SubpanelContainerComponent_ng_container_0_ng_container_8_Template, 2, 2, "ng-container", 0);
    i0.ɵɵtemplate(9, SubpanelContainerComponent_ng_container_0_ng_container_9_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 8)(11, "div", 9);
    i0.ɵɵtemplate(12, SubpanelContainerComponent_ng_container_0_ng_template_12_Template, 4, 3, "ng-template");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(13, "div", 10);
    i0.ɵɵtemplate(14, SubpanelContainerComponent_ng_container_0_ng_container_14_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("collapsed", ctx_r0.isCollapsed());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.isCollapsed());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.isCollapsed());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.openSubpanels);
} }
class SubpanelContainerComponent {
    constructor(languageStore, maxColumnCalculator, localStorage, preferences) {
        this.languageStore = languageStore;
        this.maxColumnCalculator = maxColumnCalculator;
        this.localStorage = localStorage;
        this.preferences = preferences;
        this.isCollapsed = signal(false);
        this.toggleIcon = signal('arrow_down_filled');
        this.languages$ = this.languageStore.vm$;
        this.openSubpanels = [];
    }
    ngOnInit() {
        const module = this?.config?.parentModule ?? 'default';
        this.setCollapsed(isTrue(this.preferences.getUi(module, 'subpanel-container-collapse') ?? false));
        this.openSubpanels = this.preferences.getUi(module, 'subpanel-container-open-subpanels') ?? [];
        this.vm$ = this.config.subpanels$.pipe(map((subpanelsMap) => ({
            subpanels: subpanelsMap
        })), tap((subpanelsMap) => {
            if (!subpanelsMap || !Object.keys(subpanelsMap).length) {
                return;
            }
            if (!this.openSubpanels || this.openSubpanels.length < 1) {
                return;
            }
            this.openSubpanels.forEach(subpanelKey => {
                const subpanel = subpanelsMap.subpanels[subpanelKey];
                if (!subpanel || subpanel.show) {
                    return;
                }
                subpanel.show = true;
                subpanel.load().pipe(take(1)).subscribe();
            });
        }));
        this.maxColumns$ = this.getMaxColumns();
    }
    getMaxColumns() {
        return this.maxColumnCalculator.getMaxColumns(this.config.sidebarActive$);
    }
    toggleSubPanels() {
        this.setCollapsed(!this.isCollapsed());
        const module = this?.config?.parentModule ?? 'default';
        this.preferences.setUi(module, 'subpanel-container-collapse', this.isCollapsed());
    }
    showSubpanel(key, item) {
        item.show = !item.show;
        if (item.show) {
            if (!this.openSubpanels.includes(key)) {
                this.openSubpanels.push(key);
            }
            item.load().pipe(take(1)).subscribe();
        }
        else {
            this.openSubpanels = this.openSubpanels.filter(subpanelKey => subpanelKey != key);
        }
        const module = this?.config?.parentModule ?? 'default';
        this.preferences.setUi(module, 'subpanel-container-open-subpanels', this.openSubpanels);
    }
    getCloseCallBack(key, item) {
        return () => this.showSubpanel(key, item);
    }
    getGridConfig(vm) {
        if (!vm.metadata || !vm.metadata.insightWidget) {
            return {
                layout: null,
            };
        }
        const layout = vm.getWidgetLayout();
        layout.rows.forEach(row => {
            if (!row.cols || !row.cols.length) {
                return;
            }
            row.cols.forEach(col => {
                if (!col.statistic) {
                    return;
                }
                const store = vm.getStatistic(col.statistic);
                if (store) {
                    col.store = store;
                }
            });
        });
        return {
            rowClass: 'statistics-sidebar-widget-row',
            columnClass: 'statistics-sidebar-widget-col',
            layout,
            widgetConfig: {},
            queryArgs: {
                module: vm.metadata.name,
                context: { module: vm.parentModule, id: vm.parentId },
                params: { subpanel: vm.metadata.name },
            },
        };
    }
    setCollapsed(newCollapsedValue) {
        this.isCollapsed.set(newCollapsedValue);
        this.setToggleIcon();
    }
    setToggleIcon() {
        this.toggleIcon.set((this.isCollapsed()) ? 'arrow_up_filled' : 'arrow_down_filled');
    }
    static { this.ɵfac = function SubpanelContainerComponent_Factory(t) { return new (t || SubpanelContainerComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.MaxColumnsCalculator), i0.ɵɵdirectiveInject(i3.LocalStorageService), i0.ɵɵdirectiveInject(i4.UserPreferenceStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubpanelContainerComponent, selectors: [["scrm-subpanel-container"]], inputs: { config: "config" }, features: [i0.ɵɵProvidersFeature([MaxColumnsCalculator])], decls: 2, vars: 3, consts: [[4, "ngIf"], ["ngbAccordion", "", "activeIds", "sub-panel-buttons", 1, "sub-panel-banner"], ["accordion", "ngbAccordion"], ["ngbAccordionItem", "", "id", "sub-panel-buttons", 1, "card", 3, "collapsed"], ["ngbAccordionHeader", "", 1, "card-header"], [1, "clickable", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-between"], ["labelKey", "LBL_SELECT_SUBPANEL_BANNER"], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], ["id", "sub-panels"], [4, "ngFor", "ngForOf"], ["aria-controls", "collapseShowSubPanels", 1, "float-right", 3, "image"], ["id", "collapseShowSubPanels"], [1, "row", "insight-panel"], ["class", "col-xs-6 col-sm-3 col-md-2 insight-panel-card border-insight", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-xs-6", "col-sm-3", "col-md-2", "insight-panel-card", "border-insight", 3, "ngClass", "click"], [3, "config"], ["class", "sub-panel", 3, "maxColumns$", "store", "filterConfig", "onClose", 4, "ngIf"], [1, "sub-panel", 3, "maxColumns$", "store", "filterConfig", "onClose"]], template: function SubpanelContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SubpanelContainerComponent_ng_container_0_Template, 15, 4, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i5.NgClass, i5.NgForOf, i5.NgIf, i6.NgbAccordionDirective, i6.NgbAccordionItem, i6.NgbAccordionHeader, i6.NgbAccordionBody, i6.NgbAccordionCollapse, i7.ImageComponent, i8.SubpanelComponent, i9.GridWidgetComponent, i10.LabelComponent, i5.AsyncPipe, i5.KeyValuePipe], encapsulation: 2 }); }
}
export { SubpanelContainerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelContainerComponent, [{
        type: Component,
        args: [{ selector: 'scrm-subpanel-container', providers: [MaxColumnsCalculator], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"(vm$ | async) as vm\">\n    <div ngbAccordion class=\"sub-panel-banner\" #accordion=\"ngbAccordion\" activeIds=\"sub-panel-buttons\">\n        <div ngbAccordionItem id=\"sub-panel-buttons\" class=\"card\" [collapsed]=\"isCollapsed()\">\n            <div ngbAccordionHeader class=\"card-header\">\n                <a (click)=\"toggleSubPanels()\" class=\"clickable\">\n                    <div class=\"d-flex align-items-center justify-content-between\">\n                        <scrm-label labelKey=\"LBL_SELECT_SUBPANEL_BANNER\"></scrm-label>\n                        <ng-container *ngIf=\"isCollapsed()\">\n                            <scrm-image\n                                    [attr.aria-expanded]=\"false\"\n                                    [image]=\"toggleIcon()\"\n                                    aria-controls=\"collapseShowSubPanels\"\n                                    class=\"float-right\">\n                            </scrm-image>\n                        </ng-container>\n                        <ng-container *ngIf=\"!isCollapsed()\">\n                            <scrm-image\n                                    [attr.aria-expanded]=\"true\"\n                                    [image]=\"toggleIcon()\"\n                                    aria-controls=\"collapseShowSubPanels\"\n                                    class=\"float-right\">\n                            </scrm-image>\n                        </ng-container>\n                    </div>\n                </a>\n            </div>\n            <div ngbAccordionCollapse>\n                <div ngbAccordionBody>\n                    <ng-template>\n                        <div id=\"collapseShowSubPanels\">\n                            <div class=\"row insight-panel\">\n                                <div class=\"col-xs-6 col-sm-3 col-md-2 insight-panel-card border-insight\"\n                                     *ngFor=\"let item of vm.subpanels | keyvalue\"\n                                     [ngClass]=\"{'sub-panel-banner-button-active': item.value.show === true}\"\n                                     (click)=\"showSubpanel(item.key, item.value)\">\n                                    <scrm-grid-widget [config]=\"getGridConfig(item.value)\"></scrm-grid-widget>\n\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div id=\"sub-panels\">\n        <ng-container *ngFor=\"let subpanelKey of this.openSubpanels\">\n            <ng-container *ngIf=\"(vm.subpanels[subpanelKey]) as item\">\n                <scrm-subpanel *ngIf=\"item.show\"\n                               [maxColumns$]=\"maxColumns$\"\n                               [store]=\"item\"\n                               [filterConfig]=\"filterConfig\"\n                               [onClose]=\"getCloseCallBack(subpanelKey, item)\"\n                               class=\"sub-panel\">\n                </scrm-subpanel>\n            </ng-container>\n        </ng-container>\n\n    </div>\n\n</ng-container>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.MaxColumnsCalculator }, { type: i3.LocalStorageService }, { type: i4.UserPreferenceStore }]; }, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VicGFuZWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3N1YnBhbmVsL2NvbXBvbmVudHMvc3VicGFuZWwtY29udGFpbmVyL3N1YnBhbmVsLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zdWJwYW5lbC9jb21wb25lbnRzL3N1YnBhbmVsLWNvbnRhaW5lci9zdWJwYW5lbC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUc5QyxPQUFPLEVBQUMsYUFBYSxFQUFrQixNQUFNLDJDQUEyQyxDQUFDO0FBRXpGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLCtFQUErRSxDQUFDO0FBQ25ILE9BQU8sRUFBQyxNQUFNLEVBQThCLE1BQU0sUUFBUSxDQUFDO0FBRTNELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBRTdGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDOzs7Ozs7Ozs7Ozs7O0lDSHBFLDZCQUFvQztJQUNoQyxpQ0FLYTtJQUNqQiwwQkFBZTs7O0lBSkgsZUFBc0I7SUFBdEIsMkNBQXNCO0lBRHRCLHNDQUE0Qjs7O0lBTXhDLDZCQUFxQztJQUNqQyxpQ0FLYTtJQUNqQiwwQkFBZTs7O0lBSkgsZUFBc0I7SUFBdEIsMkNBQXNCO0lB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O3VLQUl4QixNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBzaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHttYXAsIHRha2UsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7U3VicGFuZWxDb250YWluZXJDb25maWd9IGZyb20gJy4vc3VicGFuZWwtY29udGFpbmVyLm1vZGVsJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZSwgTGFuZ3VhZ2VTdHJpbmdzfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge1N1YnBhbmVsU3RvcmUsIFN1YnBhbmVsU3RvcmVNYXB9IGZyb20gJy4uLy4uL3N0b3JlL3N1YnBhbmVsL3N1YnBhbmVsLnN0b3JlJztcbmltcG9ydCB7TWF4Q29sdW1uc0NhbGN1bGF0b3J9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VpL21heC1jb2x1bW5zLWNhbGN1bGF0b3IvbWF4LWNvbHVtbnMtY2FsY3VsYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7aXNUcnVlLCBWaWV3Q29udGV4dCwgV2lkZ2V0TWV0YWRhdGF9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0dyaWRXaWRnZXRDb25maWcsIFN0YXRpc3RpY3NRdWVyeUFyZ3N9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZ3JpZC13aWRnZXQvZ3JpZC13aWRnZXQuY29tcG9uZW50JztcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpbHRlckNvbmZpZ30gZnJvbSBcIi4uLy4uLy4uL2xpc3QtZmlsdGVyL2NvbXBvbmVudHMvbGlzdC1maWx0ZXIvbGlzdC1maWx0ZXIubW9kZWxcIjtcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1zdWJwYW5lbC1jb250YWluZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnc3VicGFuZWwtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtNYXhDb2x1bW5zQ2FsY3VsYXRvcl1cbn0pXG5leHBvcnQgY2xhc3MgU3VicGFuZWxDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgY29uZmlnOiBTdWJwYW5lbENvbnRhaW5lckNvbmZpZztcblxuICAgIGlzQ29sbGFwc2VkID0gc2lnbmFsKGZhbHNlKTtcbiAgICB0b2dnbGVJY29uID0gc2lnbmFsKCdhcnJvd19kb3duX2ZpbGxlZCcpO1xuICAgIG1heENvbHVtbnMkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgICBsYW5ndWFnZXMkOiBPYnNlcnZhYmxlPExhbmd1YWdlU3RyaW5ncz4gPSB0aGlzLmxhbmd1YWdlU3RvcmUudm0kO1xuXG4gICAgdm0kOiBPYnNlcnZhYmxlPHsgc3VicGFuZWxzOiBTdWJwYW5lbFN0b3JlTWFwIH0+O1xuICAgIG9wZW5TdWJwYW5lbHM6IHN0cmluZ1tdID0gW107XG5cbiAgICBmaWx0ZXJDb25maWc6IEZpbHRlckNvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1heENvbHVtbkNhbGN1bGF0b3I6IE1heENvbHVtbnNDYWxjdWxhdG9yLFxuICAgICAgICBwcm90ZWN0ZWQgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcz8uY29uZmlnPy5wYXJlbnRNb2R1bGUgPz8gJ2RlZmF1bHQnO1xuICAgICAgICB0aGlzLnNldENvbGxhcHNlZChpc1RydWUodGhpcy5wcmVmZXJlbmNlcy5nZXRVaShtb2R1bGUsICdzdWJwYW5lbC1jb250YWluZXItY29sbGFwc2UnKSA/PyBmYWxzZSkpO1xuXG4gICAgICAgIHRoaXMub3BlblN1YnBhbmVscyA9IHRoaXMucHJlZmVyZW5jZXMuZ2V0VWkobW9kdWxlLCAnc3VicGFuZWwtY29udGFpbmVyLW9wZW4tc3VicGFuZWxzJykgPz8gW107XG5cbiAgICAgICAgdGhpcy52bSQgPSB0aGlzLmNvbmZpZy5zdWJwYW5lbHMkLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHN1YnBhbmVsc01hcCkgPT4gKHtcbiAgICAgICAgICAgICAgICBzdWJwYW5lbHM6IHN1YnBhbmVsc01hcFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgdGFwKChzdWJwYW5lbHNNYXApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXN1YnBhbmVsc01hcCB8fCAhT2JqZWN0LmtleXMoc3VicGFuZWxzTWFwKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcGVuU3VicGFuZWxzIHx8IHRoaXMub3BlblN1YnBhbmVscy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5TdWJwYW5lbHMuZm9yRWFjaChzdWJwYW5lbEtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YnBhbmVsID0gc3VicGFuZWxzTWFwLnN1YnBhbmVsc1tzdWJwYW5lbEtleV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdWJwYW5lbCB8fCBzdWJwYW5lbC5zaG93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzdWJwYW5lbC5zaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc3VicGFuZWwubG9hZCgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMubWF4Q29sdW1ucyQgPSB0aGlzLmdldE1heENvbHVtbnMoKTtcbiAgICB9XG5cbiAgICBnZXRNYXhDb2x1bW5zKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1heENvbHVtbkNhbGN1bGF0b3IuZ2V0TWF4Q29sdW1ucyh0aGlzLmNvbmZpZy5zaWRlYmFyQWN0aXZlJCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlU3ViUGFuZWxzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldENvbGxhcHNlZCghdGhpcy5pc0NvbGxhcHNlZCgpKTtcblxuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzPy5jb25maWc/LnBhcmVudE1vZHVsZSA/PyAnZGVmYXVsdCc7XG4gICAgICAgIHRoaXMucHJlZmVyZW5jZXMuc2V0VWkobW9kdWxlLCAnc3VicGFuZWwtY29udGFpbmVyLWNvbGxhcHNlJywgdGhpcy5pc0NvbGxhcHNlZCgpKTtcbiAgICB9XG5cbiAgICBzaG93U3VicGFuZWwoa2V5OiBzdHJpbmcsIGl0ZW06IFN1YnBhbmVsU3RvcmUpOiB2b2lkIHtcbiAgICAgICAgaXRlbS5zaG93ID0gIWl0ZW0uc2hvdztcblxuICAgICAgICBpZiAoaXRlbS5zaG93KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMub3BlblN1YnBhbmVscy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuU3VicGFuZWxzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW0ubG9hZCgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5TdWJwYW5lbHMgPSB0aGlzLm9wZW5TdWJwYW5lbHMuZmlsdGVyKHN1YnBhbmVsS2V5ID0+IHN1YnBhbmVsS2V5ICE9IGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzPy5jb25maWc/LnBhcmVudE1vZHVsZSA/PyAnZGVmYXVsdCc7XG4gICAgICAgIHRoaXMucHJlZmVyZW5jZXMuc2V0VWkobW9kdWxlLCAnc3VicGFuZWwtY29udGFpbmVyLW9wZW4tc3VicGFuZWxzJywgdGhpcy5vcGVuU3VicGFuZWxzKTtcbiAgICB9XG5cbiAgICBnZXRDbG9zZUNhbGxCYWNrKGtleTogc3RyaW5nLCBpdGVtOiBTdWJwYW5lbFN0b3JlKTogRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy5zaG93U3VicGFuZWwoa2V5LCBpdGVtKTtcbiAgICB9XG5cbiAgICBnZXRHcmlkQ29uZmlnKHZtOiBTdWJwYW5lbFN0b3JlKTogR3JpZFdpZGdldENvbmZpZyB7XG5cbiAgICAgICAgaWYgKCF2bS5tZXRhZGF0YSB8fCAhdm0ubWV0YWRhdGEuaW5zaWdodFdpZGdldCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IG51bGwsXG4gICAgICAgICAgICB9IGFzIEdyaWRXaWRnZXRDb25maWc7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IGxheW91dCA9IHZtLmdldFdpZGdldExheW91dCgpO1xuXG4gICAgICAgIGxheW91dC5yb3dzLmZvckVhY2gocm93ID0+IHtcblxuICAgICAgICAgICAgaWYgKCFyb3cuY29scyB8fCAhcm93LmNvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3cuY29scy5mb3JFYWNoKGNvbCA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbC5zdGF0aXN0aWMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdm0uZ2V0U3RhdGlzdGljKGNvbC5zdGF0aXN0aWMpO1xuICAgICAgICAgICAgICAgIGlmIChzdG9yZSkge1xuICAgICAgICAgICAgICAgICAgICBjb2wuc3RvcmUgPSBzdG9yZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93Q2xhc3M6ICdzdGF0aXN0aWNzLXNpZGViYXItd2lkZ2V0LXJvdycsXG4gICAgICAgICAgICBjb2x1bW5DbGFzczogJ3N0YXRpc3RpY3Mtc2lkZWJhci13aWRnZXQtY29sJyxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZGdldENvbmZpZzoge30gYXMgV2lkZ2V0TWV0YWRhdGEsXG4gICAgICAgICAgICBxdWVyeUFyZ3M6IHtcbiAgICAgICAgICAgICAgICBtb2R1bGU6IHZtLm1ldGFkYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgY29udGV4dDoge21vZHVsZTogdm0ucGFyZW50TW9kdWxlLCBpZDogdm0ucGFyZW50SWR9IGFzIFZpZXdDb250ZXh0LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge3N1YnBhbmVsOiB2bS5tZXRhZGF0YS5uYW1lfSxcbiAgICAgICAgICAgIH0gYXMgU3RhdGlzdGljc1F1ZXJ5QXJncyxcbiAgICAgICAgfSBhcyBHcmlkV2lkZ2V0Q29uZmlnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRDb2xsYXBzZWQobmV3Q29sbGFwc2VkVmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0NvbGxhcHNlZC5zZXQobmV3Q29sbGFwc2VkVmFsdWUpO1xuICAgICAgICB0aGlzLnNldFRvZ2dsZUljb24oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0VG9nZ2xlSWNvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b2dnbGVJY29uLnNldCgodGhpcy5pc0NvbGxhcHNlZCgpKSA/ICdhcnJvd191cF9maWxsZWQnIDogJ2Fycm93X2Rvd25fZmlsbGVkJyk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIj5cbiAgICA8ZGl2IG5nYkFjY29yZGlvbiBjbGFzcz1cInN1Yi1wYW5lbC1iYW5uZXJcIiAjYWNjb3JkaW9uPVwibmdiQWNjb3JkaW9uXCIgYWN0aXZlSWRzPVwic3ViLXBhbmVsLWJ1dHRvbnNcIj5cbiAgICAgICAgPGRpdiBuZ2JBY2NvcmRpb25JdGVtIGlkPVwic3ViLXBhbmVsLWJ1dHRvbnNcIiBjbGFzcz1cImNhcmRcIiBbY29sbGFwc2VkXT1cImlzQ29sbGFwc2VkKClcIj5cbiAgICAgICAgICAgIDxkaXYgbmdiQWNjb3JkaW9uSGVhZGVyIGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwidG9nZ2xlU3ViUGFuZWxzKClcIiBjbGFzcz1cImNsaWNrYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfU0VMRUNUX1NVQlBBTkVMX0JBTk5FUlwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0NvbGxhcHNlZCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ltYWdlXT1cInRvZ2dsZUljb24oKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VTaG93U3ViUGFuZWxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNDb2xsYXBzZWQoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ltYWdlXT1cInRvZ2dsZUljb24oKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VTaG93U3ViUGFuZWxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IG5nYkFjY29yZGlvbkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDxkaXYgbmdiQWNjb3JkaW9uQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbGxhcHNlU2hvd1N1YlBhbmVsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaW5zaWdodC1wYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTYgY29sLXNtLTMgY29sLW1kLTIgaW5zaWdodC1wYW5lbC1jYXJkIGJvcmRlci1pbnNpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiB2bS5zdWJwYW5lbHMgfCBrZXl2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydzdWItcGFuZWwtYmFubmVyLWJ1dHRvbi1hY3RpdmUnOiBpdGVtLnZhbHVlLnNob3cgPT09IHRydWV9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2hvd1N1YnBhbmVsKGl0ZW0ua2V5LCBpdGVtLnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZ3JpZC13aWRnZXQgW2NvbmZpZ109XCJnZXRHcmlkQ29uZmlnKGl0ZW0udmFsdWUpXCI+PC9zY3JtLWdyaWQtd2lkZ2V0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgaWQ9XCJzdWItcGFuZWxzXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN1YnBhbmVsS2V5IG9mIHRoaXMub3BlblN1YnBhbmVsc1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIih2bS5zdWJwYW5lbHNbc3VicGFuZWxLZXldKSBhcyBpdGVtXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tc3VicGFuZWwgKm5nSWY9XCJpdGVtLnNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYXhDb2x1bW5zJF09XCJtYXhDb2x1bW5zJFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0b3JlXT1cIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWx0ZXJDb25maWddPVwiZmlsdGVyQ29uZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb25DbG9zZV09XCJnZXRDbG9zZUNhbGxCYWNrKHN1YnBhbmVsS2V5LCBpdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzdWItcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8L3Njcm0tc3VicGFuZWw+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8L2Rpdj5cblxuPC9uZy1jb250YWluZXI+XG4iXX0=