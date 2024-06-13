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
import { Component, Input } from '@angular/core';
import { of } from 'rxjs';
import { isTrue } from 'common';
import { map, shareReplay } from 'rxjs/operators';
import { LanguageStore } from '../../store/language/language.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "../panel/panel.component";
import * as i4 from "@ng-bootstrap/ng-bootstrap";
import * as i5 from "../field-layout/field-layout.component";
import * as i6 from "../../pipes/toObservable/toObservable.pipe";
function RecordContentComponent_ng_container_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "scrm-panel", 7);
    i0.ɵɵpipe(3, "toObservable");
    i0.ɵɵelementStart(4, "div", 8);
    i0.ɵɵelement(5, "scrm-field-layout", 9);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const panel_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", panel_r4.label)("isCollapsed$", i0.ɵɵpipeBind1(3, 6, panel_r4.isCollapsed));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("panel-", panel_r4.key, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dataSource", ctx_r3.getLayoutDataSource(panel_r4));
} }
function RecordContentComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_1_div_1_Template, 6, 8, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.panels);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_3_ng_container_1_li_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "scrm-field-layout", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const panel_r8 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r13 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("tab-", panel_r8.key, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dataSource", ctx_r13.getLayoutDataSource(panel_r8));
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_3_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 16)(1, "a", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, RecordContentComponent_ng_container_0_div_2_ng_container_3_ng_container_1_li_1_ng_template_3_Template, 2, 4, "ng-template", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    const i_r9 = ctx_r15.index;
    const panel_r8 = ctx_r15.$implicit;
    i0.ɵɵproperty("ngbNavItem", i_r9 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(panel_r8.label);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_3_ng_container_1_li_1_Template, 4, 2, "li", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const panelDisplay_r11 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!panelDisplay_r11);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const panel_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, panel_r8.display$));
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "scrm-panel", 7);
    i0.ɵɵpipe(2, "toObservable");
    i0.ɵɵelementStart(3, "div", 8);
    i0.ɵɵelement(4, "scrm-field-layout", 9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const panel_r20 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r24 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("title", panel_r20.label)("isCollapsed$", i0.ɵɵpipeBind1(2, 6, panel_r20.isCollapsed));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("panel-", panel_r20.key, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dataSource", ctx_r24.getLayoutDataSource(panel_r20));
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_ng_container_1_div_1_div_1_Template, 5, 8, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r23 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", j_r18 == ctx_r23.active - 1);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_ng_container_1_div_1_Template, 2, 1, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const panelDisplay_r22 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!panelDisplay_r22);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const panel_r20 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, panel_r20.display$));
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_Template, 3, 3, "div", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const panel_r17 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", panel_r17.subPanels);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r7.panels);
} }
function RecordContentComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "ul", 11, 12);
    i0.ɵɵlistener("activeIdChange", function RecordContentComponent_ng_container_0_div_2_Template_ul_activeIdChange_1_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r27.active = $event); });
    i0.ɵɵtemplate(3, RecordContentComponent_ng_container_0_div_2_ng_container_3_Template, 3, 3, "ng-container", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 14);
    i0.ɵɵtemplate(5, RecordContentComponent_ng_container_0_div_2_ng_container_5_Template, 2, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r5 = i0.ɵɵreference(2);
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("activeId", ctx_r2.active);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.panels);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngbNavOutlet", _r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.panelsInPrevTab && ctx_r2.panelsInPrevTab.length);
} }
function RecordContentComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_1_Template, 2, 1, "div", 1);
    i0.ɵɵtemplate(2, RecordContentComponent_ng_container_0_div_2_Template, 6, 4, "div", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.config && ctx_r0.config.layout === "panels");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.config && ctx_r0.config.layout === "tabs");
} }
class RecordContentComponent {
    constructor(language) {
        this.language = language;
        this.config = {};
        this.panelsInPrevTab = [];
        this.active = 1;
        this.subs = [];
    }
    ngOnInit() {
        this.subs.push(this.dataSource.getDisplayConfig().subscribe(config => {
            this.config = { ...config };
        }));
        this.subs.push(this.dataSource.getPanels().subscribe(panels => {
            this.panels = [...panels];
            if (this?.config?.layout === 'panels') {
                this.updatePanelCollapseState();
            }
            else {
                this.updatePanelsInTabs();
            }
        }));
        this.subs.push(this.dataSource.getRecord().subscribe(record => {
            this.record = { ...record };
            this.fields = record.fields;
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    updatePanelsInTabs() {
        let tempPanels = [];
        let prevTabKey = '';
        const panelsMap = this.buildPanelMap();
        const tabDefs = this.mapTabDefs();
        Object.keys(tabDefs).forEach(tabDefKey => {
            const tabDef = tabDefs[tabDefKey];
            if (isTrue(tabDef.newTab)) {
                tempPanels = [...tempPanels, panelsMap[tabDefKey]];
                prevTabKey = tabDefKey;
            }
            else {
                const prevTab = tabDefs[prevTabKey];
                const panel = panelsMap[prevTabKey];
                if (!this.panelsInPrevTab.includes(panel)) {
                    this.panelsInPrevTab.push(panel);
                }
                const panelToAdd = panelsMap[tabDefKey];
                if (isTrue(prevTab?.newTab) && this.panelsInPrevTab.length > 0) {
                    this.addToPrevTab(panelToAdd);
                }
            }
        });
        this.panels = tempPanels;
    }
    addToPrevTab(panelToAdd) {
        const index = this.panelsInPrevTab.length - 1;
        if (!(this.panelsInPrevTab[index]?.subPanels ?? null)) {
            this.panelsInPrevTab[index].subPanels = [];
        }
        this.panelsInPrevTab[index].subPanels.push(panelToAdd);
    }
    updatePanelCollapseState() {
        const panelMap = this.buildPanelMap();
        this.panels.forEach(panel => {
            const panelKey = panel.key.toUpperCase();
            if (panelMap[panelKey]) {
                panel.isCollapsed = panelMap[panelKey].isCollapsed;
            }
        });
    }
    buildPanelMap() {
        const panelMap = {};
        this.panels.forEach(panel => {
            let isCollapsed = false;
            panel.label = panel?.label?.toUpperCase() ?? '';
            const panelKey = panel?.key?.toUpperCase() ?? '';
            if (panel.meta.panelDefault === 'collapsed') {
                isCollapsed = true;
            }
            panel.isCollapsed = isCollapsed;
            panelMap[panelKey] = panel;
        });
        return panelMap;
    }
    mapTabDefs() {
        const tabDefs = {};
        Object.keys(this?.config?.tabDefs ?? {}).forEach(key => {
            tabDefs[key.toUpperCase()] = this?.config?.tabDefs[key];
        });
        return tabDefs;
    }
    getLayoutDataSource(panel) {
        return {
            inlineEdit: true,
            getConfig: () => this.dataSource.getDisplayConfig().pipe(map(config => ({
                mode: config.mode,
                maxColumns: config.maxColumns,
            }))),
            getLayout: () => of(panel).pipe(shareReplay(1)),
            getFields: () => this.dataSource.getRecord().pipe(map(record => (record.fields))),
            getRecord: () => this.dataSource.getRecord(),
            getEditAction: () => this.dataSource.getEditAction()
        };
    }
    static { this.ɵfac = function RecordContentComponent_Factory(t) { return new (t || RecordContentComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordContentComponent, selectors: [["scrm-record-content"]], inputs: { dataSource: "dataSource" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "record-content panel-layout container-fluid pl-0 pr-0", 4, "ngIf"], ["class", "record-content tabs-layout container-fluid pl-0 pr-0", 4, "ngIf"], [1, "record-content", "panel-layout", "container-fluid", "pl-0", "pr-0"], ["class", "row no-gutters mb-3", 4, "ngFor", "ngForOf"], [1, "row", "no-gutters", "mb-3"], [1, "col"], ["mode", "collapsible", 3, "title", "isCollapsed$"], ["panel-body", ""], [3, "dataSource"], [1, "record-content", "tabs-layout", "container-fluid", "pl-0", "pr-0"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [4, "ngFor", "ngForOf"], [1, "p-2", "pt-3", "rounded-right", "rounded-bottom", 3, "ngbNavOutlet"], ["class", "tab", 3, "ngbNavItem", 4, "ngIf"], [1, "tab", 3, "ngbNavItem"], ["ngbNavLink", "", 1, "tab-link"], ["ngbNavContent", ""], ["class", "row no-gutters mt-3", 4, "ngIf"], [1, "row", "no-gutters", "mt-3"], ["class", "col", 4, "ngIf"]], template: function RecordContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordContentComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.dataSource);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.PanelComponent, i4.NgbNavContent, i4.NgbNav, i4.NgbNavItem, i4.NgbNavItemRole, i4.NgbNavLink, i4.NgbNavLinkBase, i4.NgbNavOutlet, i5.FieldLayoutComponent, i2.AsyncPipe, i6.ToObservablePipe], encapsulation: 2 }); }
}
export { RecordContentComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordContentComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-content', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"dataSource\">\n    <div *ngIf=\"config && config.layout === 'panels'\" class=\"record-content panel-layout container-fluid pl-0 pr-0\">\n        <div class=\"row no-gutters mb-3\" *ngFor=\"let panel of panels\">\n            <div class=\"col\">\n                <scrm-panel [title]=\"panel.label\" [isCollapsed$]=\"(panel.isCollapsed | toObservable)\" mode=\"collapsible\">\n                    <div panel-body class=\"panel-{{panel.key}}\">\n                        <scrm-field-layout [dataSource]=\"getLayoutDataSource(panel)\"></scrm-field-layout>\n                    </div>\n                </scrm-panel>\n            </div>\n        </div>\n\n    </div>\n\n    <div *ngIf=\"config && config.layout === 'tabs'\" class=\"record-content tabs-layout container-fluid pl-0 pr-0\">\n\n        <ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\" [(activeId)]=\"active\">\n            <ng-container *ngFor=\"let panel of panels; index as i;\">\n                <ng-container *ngIf=\"(panel.display$ | async) as panelDisplay\">\n                    <li class=\"tab\" [ngbNavItem]=\"i+1\" *ngIf=\"!!panelDisplay\">\n                        <a class=\"tab-link\" ngbNavLink>{{panel.label}}</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"tab-{{panel.key}}\">\n                                <scrm-field-layout [dataSource]=\"getLayoutDataSource(panel)\"></scrm-field-layout>\n                            </div>\n                        </ng-template>\n                    </li>\n                </ng-container>\n            </ng-container>\n        </ul>\n        <div [ngbNavOutlet]=\"nav\" class=\"p-2 pt-3 rounded-right rounded-bottom\"></div>\n\n\n        <ng-container *ngIf=\"panelsInPrevTab && panelsInPrevTab.length\">\n            <ng-container *ngFor=\"let panel of panels; let j = index;\">\n                <div *ngFor=\"let panel of panel.subPanels;\">\n                    <ng-container *ngIf=\"(panel.display$ | async) as panelDisplay\">\n                        <div class=\"row no-gutters mt-3\" *ngIf=\"!!panelDisplay\">\n                            <div class=\"col\" *ngIf=\"j==active-1\">\n                                <scrm-panel [title]=\"panel.label\" [isCollapsed$]=\"(panel.isCollapsed | toObservable)\" mode=\"collapsible\">\n                                    <div panel-body class=\"panel-{{panel.key}}\">\n                                        <scrm-field-layout [dataSource]=\"getLayoutDataSource(panel)\"></scrm-field-layout>\n                                    </div>\n                                </scrm-panel>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n            </ng-container>\n        </ng-container>\n\n    </div>\n\n</ng-container>\n" }]
    }], function () { return [{ type: i1.LanguageStore }]; }, { dataSource: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRlbnQvcmVjb3JkLWNvbnRlbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRlbnQvcmVjb3JkLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQWEsRUFBRSxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBMEIsTUFBTSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxHQUFHLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHaEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7Ozs7SUNIMUQsOEJBQThELGFBQUEsb0JBQUE7O0lBR2xELDhCQUE0QztJQUN4Qyx1Q0FBaUY7SUFDckYsaUJBQU0sRUFBQSxFQUFBLEVBQUE7Ozs7SUFIRSxlQUFxQjtJQUFyQixzQ0FBcUIsNERBQUE7SUFDYixlQUEyQjtJQUEzQixxREFBMkI7SUFDcEIsZUFBeUM7SUFBekMsaUVBQXlDOzs7SUFMaEYsOEJBQWdIO0lBQzVHLDRGQVFNO0lBRVYsaUJBQU07OztJQVZpRCxlQUFTO0lBQVQsdUNBQVM7OztJQW9CeEMsMkJBQStCO0lBQzNCLHVDQUFpRjtJQUNyRixpQkFBTTs7OztJQUZELG1EQUF5QjtJQUNQLGVBQXlDO0lBQXpDLGtFQUF5Qzs7O0lBSnhFLDhCQUEwRCxZQUFBO0lBQ3ZCLFlBQWU7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Q0osU0FBUyxFQUFFLEdBQXNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRSxTQUFTLEVBQUUsR0FBeUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkcsU0FBUyxFQUFFLEdBQXVCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUNoRSxhQUFhLEVBQUUsR0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7U0FDcEMsQ0FBQztJQUMvQixDQUFDO3VGQXBJUSxzQkFBc0I7b0VBQXRCLHNCQUFzQjtZQ1puQyx5RkFxRGU7O1lBckRBLHFDQUFnQjs7O1NEWWxCLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0kscUJBQXFCO2dFQU10QixVQUFVO2tCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0ZpZWxkTWFwLCBQYW5lbCwgUmVjb3JkLCBpc1RydWV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge21hcCwgc2hhcmVSZXBsYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UmVjb3JkQ29udGVudENvbmZpZywgUmVjb3JkQ29udGVudERhdGFTb3VyY2V9IGZyb20gJy4vcmVjb3JkLWNvbnRlbnQubW9kZWwnO1xuaW1wb3J0IHtGaWVsZExheW91dENvbmZpZywgRmllbGRMYXlvdXREYXRhU291cmNlfSBmcm9tICcuLi9maWVsZC1sYXlvdXQvZmllbGQtbGF5b3V0Lm1vZGVsJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tcmVjb3JkLWNvbnRlbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWNvcmQtY29udGVudC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGRhdGFTb3VyY2U6IFJlY29yZENvbnRlbnREYXRhU291cmNlO1xuXG4gICAgY29uZmlnOiBSZWNvcmRDb250ZW50Q29uZmlnID0ge30gYXMgUmVjb3JkQ29udGVudENvbmZpZztcbiAgICBwYW5lbHM6IFBhbmVsW107XG4gICAgcGFuZWxzSW5QcmV2VGFiOiBQYW5lbFtdID0gW107XG4gICAgYWN0aXZlID0gMTtcbiAgICBwcm90ZWN0ZWQgcmVjb3JkOiBSZWNvcmQ7XG4gICAgcHJvdGVjdGVkIGZpZWxkczogRmllbGRNYXA7XG4gICAgcHJpdmF0ZSBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZGF0YVNvdXJjZS5nZXREaXNwbGF5Q29uZmlnKCkuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IHsuLi5jb25maWd9O1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZGF0YVNvdXJjZS5nZXRQYW5lbHMoKS5zdWJzY3JpYmUocGFuZWxzID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFuZWxzID0gWy4uLnBhbmVsc107XG4gICAgICAgICAgICBpZiAodGhpcz8uY29uZmlnPy5sYXlvdXQgPT09ICdwYW5lbHMnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQYW5lbENvbGxhcHNlU3RhdGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQYW5lbHNJblRhYnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmRhdGFTb3VyY2UuZ2V0UmVjb3JkKCkuc3Vic2NyaWJlKHJlY29yZCA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZCA9IHsuLi5yZWNvcmR9O1xuICAgICAgICAgICAgdGhpcy5maWVsZHMgPSByZWNvcmQuZmllbGRzO1xuICAgICAgICB9KSk7XG5cblxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIHVwZGF0ZVBhbmVsc0luVGFicygpOiB2b2lkIHtcbiAgICAgICAgbGV0IHRlbXBQYW5lbHMgPSBbXTtcbiAgICAgICAgbGV0IHByZXZUYWJLZXkgPSAnJztcblxuICAgICAgICBjb25zdCBwYW5lbHNNYXAgPSB0aGlzLmJ1aWxkUGFuZWxNYXAoKTtcblxuICAgICAgICBjb25zdCB0YWJEZWZzID0gdGhpcy5tYXBUYWJEZWZzKCk7XG5cbiAgICAgICAgT2JqZWN0LmtleXModGFiRGVmcykuZm9yRWFjaCh0YWJEZWZLZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFiRGVmID0gdGFiRGVmc1t0YWJEZWZLZXldO1xuXG4gICAgICAgICAgICBpZiAoaXNUcnVlKHRhYkRlZi5uZXdUYWIpKSB7XG4gICAgICAgICAgICAgICAgdGVtcFBhbmVscyA9IFsuLi50ZW1wUGFuZWxzLCBwYW5lbHNNYXBbdGFiRGVmS2V5XV07XG4gICAgICAgICAgICAgICAgcHJldlRhYktleSA9IHRhYkRlZktleTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldlRhYiA9IHRhYkRlZnNbcHJldlRhYktleV07XG4gICAgICAgICAgICAgICAgY29uc3QgcGFuZWwgPSBwYW5lbHNNYXBbcHJldlRhYktleV07XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBhbmVsc0luUHJldlRhYi5pbmNsdWRlcyhwYW5lbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbHNJblByZXZUYWIucHVzaChwYW5lbCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFuZWxUb0FkZCA9IHBhbmVsc01hcFt0YWJEZWZLZXldO1xuICAgICAgICAgICAgICAgIGlmIChpc1RydWUocHJldlRhYj8ubmV3VGFiKSAmJiB0aGlzLnBhbmVsc0luUHJldlRhYi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9QcmV2VGFiKHBhbmVsVG9BZGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wYW5lbHMgPSB0ZW1wUGFuZWxzO1xuXG4gICAgfVxuXG4gICAgYWRkVG9QcmV2VGFiKHBhbmVsVG9BZGQ6IGFueSk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYW5lbHNJblByZXZUYWIubGVuZ3RoIC0gMTtcblxuICAgICAgICBpZiAoISh0aGlzLnBhbmVsc0luUHJldlRhYltpbmRleF0/LnN1YlBhbmVscyA/PyBudWxsKSkge1xuICAgICAgICAgICAgdGhpcy5wYW5lbHNJblByZXZUYWJbaW5kZXhdLnN1YlBhbmVscyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFuZWxzSW5QcmV2VGFiW2luZGV4XS5zdWJQYW5lbHMucHVzaChwYW5lbFRvQWRkKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZVBhbmVsQ29sbGFwc2VTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcGFuZWxNYXAgPSB0aGlzLmJ1aWxkUGFuZWxNYXAoKTtcblxuICAgICAgICB0aGlzLnBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhbmVsS2V5ID0gcGFuZWwua2V5LnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAocGFuZWxNYXBbcGFuZWxLZXldKSB7XG4gICAgICAgICAgICAgICAgcGFuZWwuaXNDb2xsYXBzZWQgPSBwYW5lbE1hcFtwYW5lbEtleV0uaXNDb2xsYXBzZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJ1aWxkUGFuZWxNYXAoKTogYW55IHtcbiAgICAgICAgY29uc3QgcGFuZWxNYXAgPSB7fTtcblxuICAgICAgICB0aGlzLnBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHtcbiAgICAgICAgICAgIGxldCBpc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcGFuZWwubGFiZWwgPSBwYW5lbD8ubGFiZWw/LnRvVXBwZXJDYXNlKCkgPz8gJyc7XG4gICAgICAgICAgICBjb25zdCBwYW5lbEtleSA9IHBhbmVsPy5rZXk/LnRvVXBwZXJDYXNlKCkgPz8gJyc7XG4gICAgICAgICAgICBpZiAocGFuZWwubWV0YS5wYW5lbERlZmF1bHQgPT09ICdjb2xsYXBzZWQnKSB7XG4gICAgICAgICAgICAgICAgaXNDb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFuZWwuaXNDb2xsYXBzZWQgPSBpc0NvbGxhcHNlZDtcbiAgICAgICAgICAgIHBhbmVsTWFwW3BhbmVsS2V5XSA9IHBhbmVsO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcGFuZWxNYXA7XG4gICAgfVxuXG4gICAgbWFwVGFiRGVmcygpOiBhbnkge1xuICAgICAgICBjb25zdCB0YWJEZWZzID0ge307XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcz8uY29uZmlnPy50YWJEZWZzID8/IHt9KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICB0YWJEZWZzW2tleS50b1VwcGVyQ2FzZSgpXSA9IHRoaXM/LmNvbmZpZz8udGFiRGVmc1trZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGFiRGVmcztcbiAgICB9XG5cbiAgICBnZXRMYXlvdXREYXRhU291cmNlKHBhbmVsOiBQYW5lbCk6IEZpZWxkTGF5b3V0RGF0YVNvdXJjZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmxpbmVFZGl0OiB0cnVlLFxuICAgICAgICAgICAgZ2V0Q29uZmlnOiAoKTogT2JzZXJ2YWJsZTxGaWVsZExheW91dENvbmZpZz4gPT4gdGhpcy5kYXRhU291cmNlLmdldERpc3BsYXlDb25maWcoKS5waXBlKG1hcChjb25maWcgPT4gKHtcbiAgICAgICAgICAgICAgICBtb2RlOiBjb25maWcubW9kZSxcbiAgICAgICAgICAgICAgICBtYXhDb2x1bW5zOiBjb25maWcubWF4Q29sdW1ucyxcbiAgICAgICAgICAgIH0pKSksXG4gICAgICAgICAgICBnZXRMYXlvdXQ6ICgpOiBPYnNlcnZhYmxlPFBhbmVsPiA9PiBvZihwYW5lbCkucGlwZShzaGFyZVJlcGxheSgxKSksXG4gICAgICAgICAgICBnZXRGaWVsZHM6ICgpOiBPYnNlcnZhYmxlPEZpZWxkTWFwPiA9PiB0aGlzLmRhdGFTb3VyY2UuZ2V0UmVjb3JkKCkucGlwZShtYXAocmVjb3JkID0+IChyZWNvcmQuZmllbGRzKSkpLFxuICAgICAgICAgICAgZ2V0UmVjb3JkOiAoKTogT2JzZXJ2YWJsZTxSZWNvcmQ+ID0+IHRoaXMuZGF0YVNvdXJjZS5nZXRSZWNvcmQoKSxcbiAgICAgICAgICAgIGdldEVkaXRBY3Rpb246ICgpOiB2b2lkID0+IHRoaXMuZGF0YVNvdXJjZS5nZXRFZGl0QWN0aW9uKClcbiAgICAgICAgfSBhcyBGaWVsZExheW91dERhdGFTb3VyY2U7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGFTb3VyY2VcIj5cbiAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnICYmIGNvbmZpZy5sYXlvdXQgPT09ICdwYW5lbHMnXCIgY2xhc3M9XCJyZWNvcmQtY29udGVudCBwYW5lbC1sYXlvdXQgY29udGFpbmVyLWZsdWlkIHBsLTAgcHItMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnMgbWItM1wiICpuZ0Zvcj1cImxldCBwYW5lbCBvZiBwYW5lbHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1wYW5lbCBbdGl0bGVdPVwicGFuZWwubGFiZWxcIiBbaXNDb2xsYXBzZWQkXT1cIihwYW5lbC5pc0NvbGxhcHNlZCB8IHRvT2JzZXJ2YWJsZSlcIiBtb2RlPVwiY29sbGFwc2libGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBwYW5lbC1ib2R5IGNsYXNzPVwicGFuZWwte3twYW5lbC5rZXl9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZmllbGQtbGF5b3V0IFtkYXRhU291cmNlXT1cImdldExheW91dERhdGFTb3VyY2UocGFuZWwpXCI+PC9zY3JtLWZpZWxkLWxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zY3JtLXBhbmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnICYmIGNvbmZpZy5sYXlvdXQgPT09ICd0YWJzJ1wiIGNsYXNzPVwicmVjb3JkLWNvbnRlbnQgdGFicy1sYXlvdXQgY29udGFpbmVyLWZsdWlkIHBsLTAgcHItMFwiPlxuXG4gICAgICAgIDx1bCBuZ2JOYXYgI25hdj1cIm5nYk5hdlwiIGNsYXNzPVwibmF2LXRhYnNcIiBbKGFjdGl2ZUlkKV09XCJhY3RpdmVcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHBhbmVsIG9mIHBhbmVsczsgaW5kZXggYXMgaTtcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKHBhbmVsLmRpc3BsYXkkIHwgYXN5bmMpIGFzIHBhbmVsRGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0YWJcIiBbbmdiTmF2SXRlbV09XCJpKzFcIiAqbmdJZj1cIiEhcGFuZWxEaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInRhYi1saW5rXCIgbmdiTmF2TGluaz57e3BhbmVsLmxhYmVsfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdiTmF2Q29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXt7cGFuZWwua2V5fX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZmllbGQtbGF5b3V0IFtkYXRhU291cmNlXT1cImdldExheW91dERhdGFTb3VyY2UocGFuZWwpXCI+PC9zY3JtLWZpZWxkLWxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdiBbbmdiTmF2T3V0bGV0XT1cIm5hdlwiIGNsYXNzPVwicC0yIHB0LTMgcm91bmRlZC1yaWdodCByb3VuZGVkLWJvdHRvbVwiPjwvZGl2PlxuXG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhbmVsc0luUHJldlRhYiAmJiBwYW5lbHNJblByZXZUYWIubGVuZ3RoXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBwYW5lbCBvZiBwYW5lbHM7IGxldCBqID0gaW5kZXg7XCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgcGFuZWwgb2YgcGFuZWwuc3ViUGFuZWxzO1wiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKHBhbmVsLmRpc3BsYXkkIHwgYXN5bmMpIGFzIHBhbmVsRGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBuby1ndXR0ZXJzIG10LTNcIiAqbmdJZj1cIiEhcGFuZWxEaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiICpuZ0lmPVwiaj09YWN0aXZlLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tcGFuZWwgW3RpdGxlXT1cInBhbmVsLmxhYmVsXCIgW2lzQ29sbGFwc2VkJF09XCIocGFuZWwuaXNDb2xsYXBzZWQgfCB0b09ic2VydmFibGUpXCIgbW9kZT1cImNvbGxhcHNpYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHBhbmVsLWJvZHkgY2xhc3M9XCJwYW5lbC17e3BhbmVsLmtleX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZmllbGQtbGF5b3V0IFtkYXRhU291cmNlXT1cImdldExheW91dERhdGFTb3VyY2UocGFuZWwpXCI+PC9zY3JtLWZpZWxkLWxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tcGFuZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8L2Rpdj5cblxuPC9uZy1jb250YWluZXI+XG4iXX0=