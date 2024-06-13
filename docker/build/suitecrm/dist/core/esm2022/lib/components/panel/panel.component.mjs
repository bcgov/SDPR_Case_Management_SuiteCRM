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
import { Button } from 'common';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../close-button/close-button.component";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "../minimise-button/minimise-button.component";
import * as i5 from "../label/label.component";
function PanelComponent_div_1_scrm_close_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-close-button", 9);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r1.getCloseButton());
} }
function PanelComponent_div_1_scrm_minimise_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-minimise-button", 10);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r2.minimiseButton)("status", ctx_r2.minimiseStatus);
} }
function PanelComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.title);
} }
function PanelComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelement(1, "scrm-label", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", ctx_r4.titleKey);
} }
function PanelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    i0.ɵɵtemplate(3, PanelComponent_div_1_scrm_close_button_3_Template, 1, 1, "scrm-close-button", 5);
    i0.ɵɵtemplate(4, PanelComponent_div_1_scrm_minimise_button_4_Template, 1, 2, "scrm-minimise-button", 6);
    i0.ɵɵprojection(5, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, PanelComponent_div_1_div_6_Template, 2, 1, "div", 7);
    i0.ɵɵtemplate(7, PanelComponent_div_1_div_7_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 8);
    i0.ɵɵprojection(9, 2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.isClosable());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isCollapsible());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.titleKey);
} }
const _c0 = [[["", "panel-body", ""]], [["", "panel-icon-area", ""]], [["", "panel-header-button", ""]]];
const _c1 = ["[panel-body]", "[panel-icon-area]", "[panel-header-button]"];
class PanelComponent {
    constructor() {
        this.klass = '';
        this.bodyPadding = 2;
        this.mode = 'closable';
        this.close = {
            klass: ['btn', 'btn-outline-light', 'btn-sm']
        };
        this.showHeader = true;
        this.isCollapsed = false;
        this.buttonClasses = ['btn', 'btn-outline-light', 'btn-sm'];
        this.subs = [];
    }
    ngOnInit() {
        if (this.isCollapsed$) {
            this.subs.push(this.isCollapsed$.subscribe(collapse => {
                this.isCollapsed = collapse;
                this.initMinimiseButton();
            }));
        }
        this.initMinimiseButton();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getCloseButton() {
        if (!this.close) {
            return null;
        }
        const btn = Button.fromButton(this.close);
        btn.addClasses(this.buttonClasses);
        this.close = btn;
        return btn;
    }
    isClosable() {
        return this.mode === 'closable';
    }
    isCollapsible() {
        return this.mode === 'collapsible';
    }
    initMinimiseButton() {
        this.minimiseButton = {
            klass: ['btn', 'btn-outline-light', 'btn-sm'],
            onClick: () => {
                this.isCollapsed = !this.isCollapsed;
                this.initMinimiseStatus();
            },
        };
        this.initMinimiseStatus();
    }
    initMinimiseStatus() {
        if (this.isCollapsed) {
            this.minimiseStatus = 'minimised';
            return;
        }
        this.minimiseStatus = 'maximised';
    }
    static { this.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PanelComponent, selectors: [["scrm-panel"]], inputs: { klass: "klass", bodyPadding: "bodyPadding", title: "title", titleKey: "titleKey", mode: "mode", isCollapsed$: "isCollapsed$", close: "close", showHeader: "showHeader" }, ngContentSelectors: _c1, decls: 4, vars: 10, consts: [["class", "card-header d-flex justify-content-between align-items-center", 4, "ngIf"], [3, "ngbCollapse"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "flex-grow-1", "align-items-center", "d-flex"], [1, "d-flex", "align-items-center"], [3, "config", 4, "ngIf"], [3, "config", "status", 4, "ngIf"], ["class", "pl-1 panel-title", 4, "ngIf"], [1, "panel-buttons", "float-right"], [3, "config"], [3, "config", "status"], [1, "pl-1", "panel-title"], [3, "labelKey"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, PanelComponent_div_1_Template, 10, 4, "div", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("card panel-card ", ctx.klass, "");
            i0.ɵɵclassProp("collapsed", ctx.isCollapsed);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showHeader);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("card-body p-", ctx.bodyPadding, "");
            i0.ɵɵproperty("ngbCollapse", ctx.isCollapsed);
        } }, dependencies: [i1.NgIf, i2.CloseButtonComponent, i3.NgbCollapse, i4.MinimiseButtonComponent, i5.LabelComponent], encapsulation: 2 }); }
}
export { PanelComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelComponent, [{
        type: Component,
        args: [{ selector: 'scrm-panel', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div [class.collapsed]=\"isCollapsed\" class=\"card panel-card {{klass}}\">\n\n    <div *ngIf=\"showHeader\" class=\"card-header d-flex justify-content-between align-items-center\">\n\n        <div class=\"flex-grow-1 align-items-center d-flex\">\n\n            <div class=\"d-flex align-items-center\">\n                <scrm-close-button *ngIf=\"isClosable()\" [config]=\"getCloseButton()\"></scrm-close-button>\n                <scrm-minimise-button *ngIf=\"isCollapsible()\"\n                                      [config]=\"minimiseButton\"\n                                      [status]=\"minimiseStatus\">\n                </scrm-minimise-button>\n                <ng-content select=\"[panel-icon-area]\"></ng-content>\n            </div>\n\n            <div *ngIf=\"title\" class=\"pl-1 panel-title\">{{title}}</div>\n            <div *ngIf=\"titleKey\" class=\"pl-1 panel-title\">\n                <scrm-label [labelKey]=\"titleKey\"></scrm-label>\n            </div>\n        </div>\n\n\n        <div class=\"panel-buttons float-right\">\n            <ng-content select=\"[panel-header-button]\"></ng-content>\n        </div>\n    </div>\n\n    <div class=\"card-body p-{{bodyPadding}}\" [ngbCollapse]=\"isCollapsed\">\n        <ng-content select=\"[panel-body]\"></ng-content>\n    </div>\n</div>\n" }]
    }], function () { return []; }, { klass: [{
            type: Input
        }], bodyPadding: [{
            type: Input
        }], title: [{
            type: Input
        }], titleKey: [{
            type: Input
        }], mode: [{
            type: Input
        }], isCollapsed$: [{
            type: Input
        }], close: [{
            type: Input
        }], showHeader: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUMsTUFBTSxFQUFrQixNQUFNLFFBQVEsQ0FBQztBQUMvQyxPQUFPLEVBQUMsVUFBVSxFQUFlLE1BQU0sTUFBTSxDQUFDOzs7Ozs7OztJQ005Qix1Q0FBd0Y7OztJQUFoRCxnREFBMkI7OztJQUNuRSwyQ0FHdUI7OztJQUZELDhDQUF5QixpQ0FBQTs7O0lBTW5ELCtCQUE0QztJQUFBLFlBQVM7SUFBQSxpQkFBTTs7O0lBQWYsZUFBUztJQUFULGtDQUFTOzs7SUFDckQsK0JBQStDO0lBQzNDLGlDQUErQztJQUNuRCxpQkFBTTs7O0lBRFUsZUFBcUI7SUFBckIsMENBQXFCOzs7SUFmN0MsOEJBQThGLGFBQUEsYUFBQTtJQUtsRixpR0FBd0Y7SUFDeEYsdUdBR3VCO0lBQ3ZCLHFCQUFvRDtJQUN4RCxpQkFBTTtJQUVOLHFFQUEyRDtJQUMzRCxxRUFFTTtJQUNWLGlCQUFNO0lBR04sOEJBQXVDO0lBQ25DLHFCQUF3RDtJQUM1RCxpQkFBTSxFQUFBOzs7SUFqQnNCLGVBQWtCO0lBQWxCLDBDQUFrQjtJQUNmLGVBQXFCO0lBQXJCLDZDQUFxQjtJQU8xQyxlQUFXO0lBQVgsbUNBQVc7SUFDWCxlQUFjO0lBQWQsc0NBQWM7Ozs7QURaaEMsTUFLYSxjQUFjO0lBb0J2QjtRQWxCUyxVQUFLLEdB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cEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUdHLFVBQVU7a0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCdXR0b24sIEJ1dHRvbkludGVyZmFjZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7TWluaW1pc2VCdXR0b25TdGF0dXN9IGZyb20gJy4uL21pbmltaXNlLWJ1dHRvbi9taW5pbWlzZS1idXR0b24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXBhbmVsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBrbGFzcyA9ICcnO1xuICAgIEBJbnB1dCgpIGJvZHlQYWRkaW5nID0gMjtcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRpdGxlS2V5OiBzdHJpbmc7XG4gICAgQElucHV0KCkgbW9kZTogJ2NvbGxhcHNpYmxlJyB8ICdjbG9zYWJsZScgfCAnbm9uZScgPSAnY2xvc2FibGUnO1xuICAgIEBJbnB1dCgpIGlzQ29sbGFwc2VkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBASW5wdXQoKSBjbG9zZTogQnV0dG9uSW50ZXJmYWNlID0ge1xuICAgICAgICBrbGFzczogWydidG4nLCAnYnRuLW91dGxpbmUtbGlnaHQnLCAnYnRuLXNtJ11cbiAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICBASW5wdXQoKSBzaG93SGVhZGVyID0gdHJ1ZTtcblxuICAgIGlzQ29sbGFwc2VkID0gZmFsc2U7XG4gICAgbWluaW1pc2VCdXR0b246IEJ1dHRvbkludGVyZmFjZTtcbiAgICBtaW5pbWlzZVN0YXR1czogTWluaW1pc2VCdXR0b25TdGF0dXM7XG5cbiAgICBwcm90ZWN0ZWQgYnV0dG9uQ2xhc3NlcyA9IFsnYnRuJywgJ2J0bi1vdXRsaW5lLWxpZ2h0JywgJ2J0bi1zbSddO1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkJCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5pc0NvbGxhcHNlZCQuc3Vic2NyaWJlKGNvbGxhcHNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gY29sbGFwc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0TWluaW1pc2VCdXR0b24oKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRNaW5pbWlzZUJ1dHRvbigpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIGdldENsb3NlQnV0dG9uKCk6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBidG4gPSBCdXR0b24uZnJvbUJ1dHRvbih0aGlzLmNsb3NlKTtcbiAgICAgICAgYnRuLmFkZENsYXNzZXModGhpcy5idXR0b25DbGFzc2VzKTtcblxuICAgICAgICB0aGlzLmNsb3NlID0gYnRuO1xuXG4gICAgICAgIHJldHVybiBidG47XG4gICAgfVxuXG4gICAgaXNDbG9zYWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ2Nsb3NhYmxlJztcbiAgICB9XG5cbiAgICBpc0NvbGxhcHNpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnY29sbGFwc2libGUnO1xuICAgIH1cblxuICAgIGluaXRNaW5pbWlzZUJ1dHRvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5taW5pbWlzZUJ1dHRvbiA9IHtcbiAgICAgICAgICAgIGtsYXNzOiBbJ2J0bicsICdidG4tb3V0bGluZS1saWdodCcsICdidG4tc20nXSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gIXRoaXMuaXNDb2xsYXBzZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0TWluaW1pc2VTdGF0dXMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuICAgICAgICB0aGlzLmluaXRNaW5pbWlzZVN0YXR1cygpO1xuICAgIH1cblxuICAgIGluaXRNaW5pbWlzZVN0YXR1cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMubWluaW1pc2VTdGF0dXMgPSAnbWluaW1pc2VkJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1pbmltaXNlU3RhdHVzID0gJ21heGltaXNlZCc7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBbY2xhc3MuY29sbGFwc2VkXT1cImlzQ29sbGFwc2VkXCIgY2xhc3M9XCJjYXJkIHBhbmVsLWNhcmQge3trbGFzc319XCI+XG5cbiAgICA8ZGl2ICpuZ0lmPVwic2hvd0hlYWRlclwiIGNsYXNzPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMSBhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4XCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tY2xvc2UtYnV0dG9uICpuZ0lmPVwiaXNDbG9zYWJsZSgpXCIgW2NvbmZpZ109XCJnZXRDbG9zZUJ1dHRvbigpXCI+PC9zY3JtLWNsb3NlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8c2NybS1taW5pbWlzZS1idXR0b24gKm5nSWY9XCJpc0NvbGxhcHNpYmxlKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cIm1pbmltaXNlQnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0YXR1c109XCJtaW5pbWlzZVN0YXR1c1wiPlxuICAgICAgICAgICAgICAgIDwvc2NybS1taW5pbWlzZS1idXR0b24+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3BhbmVsLWljb24tYXJlYV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRpdGxlXCIgY2xhc3M9XCJwbC0xIHBhbmVsLXRpdGxlXCI+e3t0aXRsZX19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGl0bGVLZXlcIiBjbGFzcz1cInBsLTEgcGFuZWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwidGl0bGVLZXlcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYnV0dG9ucyBmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3BhbmVsLWhlYWRlci1idXR0b25dXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcC17e2JvZHlQYWRkaW5nfX1cIiBbbmdiQ29sbGFwc2VdPVwiaXNDb2xsYXBzZWRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3BhbmVsLWJvZHldXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=