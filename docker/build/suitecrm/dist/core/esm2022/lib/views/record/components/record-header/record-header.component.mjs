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
import { RecordViewStore } from '../../store/record-view/record-view.store';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { RecordActionsAdapter } from '../../adapters/actions.adapter';
import { AppStateStore } from "../../../../store/app-state/app-state.store";
import { Router } from "@angular/router";
import * as i0 from "@angular/core";
import * as i1 from "../../adapters/actions.adapter";
import * as i2 from "../../store/record-view/record-view.store";
import * as i3 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i4 from "../../../../store/app-state/app-state.store";
import * as i5 from "@angular/router";
import * as i6 from "@angular/common";
import * as i7 from "../../../../components/module-title/module-title.component";
import * as i8 from "../../../../components/dynamic-label/dynamic-label.component";
import * as i9 from "../../../../components/action-group-menu/action-group-menu.component";
import * as i10 from "../../../../containers/favorite-toggle/components/favorite-toggle/favorite-toggle.component";
import * as i11 from "../../../../components/button/button.component";
function RecordHeaderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4);
    i0.ɵɵelement(2, "scrm-module-title", 5)(3, "div", 6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", ctx_r0.moduleTitle);
} }
function RecordHeaderComponent_div_3_div_3_scrm_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 20);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("config", ctx_r6.backButtonConfig);
} }
function RecordHeaderComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, RecordHeaderComponent_div_3_div_3_scrm_button_1_Template, 1, 1, "scrm-button", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.backButtonConfig);
} }
function RecordHeaderComponent_div_3_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelement(1, "scrm-favorite-toggle", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("record", ctx_r3.record);
} }
function RecordHeaderComponent_div_3_scrm_dynamic_label_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-dynamic-label", 23);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("fields", ctx_r4.record.fields)("labelKey", ctx_r4.getSummaryTemplate());
} }
function RecordHeaderComponent_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelement(1, "scrm-action-group-menu", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r5.actionsAdapter)("actionContext", ctx_r5.getActionContext(ctx_r5.record))("klass", ctx_r5.isScrolled ? "record-view-actions-scrolled float-right" : "record-view-actions float-right");
} }
function RecordHeaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "div", 9);
    i0.ɵɵtemplate(3, RecordHeaderComponent_div_3_div_3_Template, 2, 1, "div", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 11)(5, "div", 12);
    i0.ɵɵtemplate(6, RecordHeaderComponent_div_3_div_6_Template, 2, 1, "div", 13);
    i0.ɵɵtemplate(7, RecordHeaderComponent_div_3_scrm_dynamic_label_7_Template, 1, 2, "scrm-dynamic-label", 14);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 15)(9, "div", 16);
    i0.ɵɵtemplate(10, RecordHeaderComponent_div_3_div_10_Template, 2, 3, "div", 17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.mode === "detail" || ctx_r1.mode === "edit");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("justify-content-center", ctx_r1.mode === "detail" || ctx_r1.mode === "edit")("justify-content-start", !(ctx_r1.mode === "detail" || ctx_r1.mode === "edit"))("record-view-name-wrapper-margin-left", ctx_r1.mode === "detail" || ctx_r1.mode === "edit");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r1.isScrolled ? "record-view-name-scrolled" : "record-view-name");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.record && ctx_r1.record.fields && ctx_r1.mode !== "create");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.record && ctx_r1.record.fields);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.record);
} }
class RecordHeaderComponent {
    onScroll() {
        const scrollPosition = window.pageYOffset;
        //ScrollThreshold is set to 5em
        const scrollThreshold = 5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        if (scrollPosition > scrollThreshold) {
            //20 is just a random safezone number
            if (scrollPosition - scrollThreshold < 10)
                return;
            this.isScrolled = true;
        }
        else {
            if (scrollThreshold - scrollPosition < 10)
                return;
            this.isScrolled = false;
        }
    }
    constructor(actionsAdapter, recordViewStore, moduleNavigation, appState, router) {
        this.actionsAdapter = actionsAdapter;
        this.recordViewStore = recordViewStore;
        this.moduleNavigation = moduleNavigation;
        this.appState = appState;
        this.router = router;
        this.mode = 'detail';
        this.loading = true;
        this.isScrolled = false;
        this.subs = [];
    }
    ngOnInit() {
        this.mode = this.recordViewStore.getMode();
        this.setBackButtonConfig();
        this.subs.push(this.recordViewStore.mode$.subscribe(mode => {
            this.mode = mode;
        }));
        this.subs.push(this.recordViewStore.record$.subscribe(record => {
            this.record = record;
        }));
        this.subs.push(this.recordViewStore.loading$.subscribe(loading => {
            this.loading = loading;
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    get moduleTitle() {
        const module = this.recordViewStore.vm.appData.module;
        const appListStrings = this.recordViewStore.vm.appData.language.appListStrings;
        return this.moduleNavigation.getModuleLabel(module, appListStrings);
    }
    /**
     * Get Summary template
     *
     * @returns {string} template label
     */
    getSummaryTemplate() {
        return this.recordViewStore.getSummaryTemplate();
    }
    /**
     * Build action context
     * @param record
     */
    getActionContext(record) {
        if (!record) {
            return {};
        }
        return {
            module: record.module || '',
            record
        };
    }
    setBackButtonConfig() {
        const moduleRoute = this.moduleNavigation.getModuleRoute(this.recordViewStore.vm.appData.module);
        this.backButtonConfig = {
            icon: 'paginate_previous',
            klass: 'back-button',
            onClick: () => {
                this.router.navigateByUrl(moduleRoute.route).then();
            }
        };
    }
    static { this.ɵfac = function RecordHeaderComponent_Factory(t) { return new (t || RecordHeaderComponent)(i0.ɵɵdirectiveInject(i1.RecordActionsAdapter), i0.ɵɵdirectiveInject(i2.RecordViewStore), i0.ɵɵdirectiveInject(i3.ModuleNavigation), i0.ɵɵdirectiveInject(i4.AppStateStore), i0.ɵɵdirectiveInject(i5.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordHeaderComponent, selectors: [["scrm-record-header"]], hostBindings: function RecordHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function RecordHeaderComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, i0.ɵɵresolveWindow);
        } }, decls: 4, vars: 3, consts: [[1, "record-view-header", 3, "ngClass"], ["class", "row mr-0", 4, "ngIf"], ["class", "row m-0 d-flex justify-content-between ml-1 mr-1", 4, "ngIf"], [1, "row", "mr-0"], [1, "col-md-4", "d-flex", "align-items-center"], [1, "record-view-title", "title-font", 3, "title"], [1, "record-view-name", "pt-3", "pb-3"], [1, "row", "m-0", "d-flex", "justify-content-between", "ml-1", "mr-1"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-7", "col-xl-8", "record-name-container"], [1, "float-left", "p-0"], ["class", "d-flex record-view-back-button justify-content-start", 4, "ngIf"], [1, "record-view-name-wrapper", "d-flex", "justify-content-md-start", "align-items-center"], [1, "p-0", "d-inline-block", 3, "ngClass"], ["class", "float-right align-items-top d-flex", 4, "ngIf"], ["class", "record-view-name-label d-block p-0 lh-100", 3, "fields", "labelKey", 4, "ngIf"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-5", "col-xl-4", "align-items-center", "record-view-action-header"], [1, "row", "mr-1", "ml-1", "justify-content-center", "justify-content-md-end"], ["class", "", 4, "ngIf"], [1, "d-flex", "record-view-back-button", "justify-content-start"], [3, "config", 4, "ngIf"], [3, "config"], [1, "float-right", "align-items-top", "d-flex"], [1, "h-100", "lh-100", 3, "record"], [1, "record-view-name-label", "d-block", "p-0", "lh-100", 3, "fields", "labelKey"], [1, ""], ["buttonClass", "settings-button", 3, "config", "actionContext", "klass"]], template: function RecordHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵtemplate(2, RecordHeaderComponent_div_2_Template, 4, 1, "div", 1);
            i0.ɵɵtemplate(3, RecordHeaderComponent_div_3_Template, 11, 11, "div", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx.isScrolled ? "record-view-header-scrolled shadow-md" : "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.loading);
        } }, dependencies: [i6.NgClass, i6.NgIf, i7.ModuleTitleComponent, i8.DynamicLabelComponent, i9.ActionGroupMenuComponent, i10.FavoriteToggleComponent, i11.ButtonComponent], encapsulation: 2 }); }
}
export { RecordHeaderComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordHeaderComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-header', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container>\n    <div [ngClass]=\"isScrolled ? 'record-view-header-scrolled shadow-md': ''\" class=\"record-view-header\">\n        <div *ngIf=\"loading\" class=\"row mr-0\">\n            <div class=\"col-md-4 d-flex align-items-center\">\n                <scrm-module-title [title]=\"moduleTitle\" class=\"record-view-title title-font\"></scrm-module-title>\n                <div class=\"record-view-name pt-3 pb-3\"></div>\n            </div>\n        </div>\n        <div *ngIf=\"!loading\" class=\"row m-0 d-flex justify-content-between ml-1 mr-1\">\n            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-7 col-xl-8 record-name-container\">\n                <div class=\"float-left p-0\">\n                    <div class=\"d-flex record-view-back-button justify-content-start\" *ngIf=\"mode === 'detail' || mode === 'edit'\">\n                        <scrm-button *ngIf=\"backButtonConfig\" [config]=\"backButtonConfig\"></scrm-button>\n                    </div>\n                </div>\n                <div class=\"record-view-name-wrapper d-flex justify-content-md-start align-items-center\"\n                     [class.justify-content-center]=\"mode === 'detail' || mode === 'edit'\"\n                     [class.justify-content-start]=\"!(mode === 'detail' || mode === 'edit')\"\n                     [class.record-view-name-wrapper-margin-left]=\"mode === 'detail' || mode === 'edit'\"\n                >\n                    <div class=\"p-0 d-inline-block\" [ngClass]=\"isScrolled ? 'record-view-name-scrolled' : 'record-view-name'\">\n                        <div *ngIf=\"record && record.fields && mode !== 'create'\" class=\"float-right align-items-top d-flex\">\n                            <scrm-favorite-toggle [record]=\"record\"\n                                                  class=\"h-100 lh-100\"></scrm-favorite-toggle>\n                        </div>\n                        <scrm-dynamic-label *ngIf=\"record && record.fields\"\n                                            class=\"record-view-name-label d-block p-0 lh-100\"\n                                            [fields]=\"record.fields\"\n                                            [labelKey]=\"getSummaryTemplate()\">\n                        </scrm-dynamic-label>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-4 align-items-center record-view-action-header\">\n                <div class=\"row mr-1 ml-1 justify-content-center justify-content-md-end\">\n                    <div *ngIf=\"record\" class=\"\">\n                        <scrm-action-group-menu\n                                [config]=\"actionsAdapter\"\n                                [actionContext]=\"getActionContext(record)\"\n                                [klass]=\"isScrolled ?  'record-view-actions-scrolled float-right' : 'record-view-actions float-right'\"\n                                buttonClass=\"settings-button\"\n                        >\n                        </scrm-action-group-menu>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.RecordActionsAdapter }, { type: i2.RecordViewStore }, { type: i3.ModuleNavigation }, { type: i4.AppStateStore }, { type: i5.Router }]; }, { onScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2NvbXBvbmVudHMvcmVjb3JkLWhlYWRlci9yZWNvcmQtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvY29tcG9uZW50cy9yZWNvcmQtaGVhZGVyL3JlY29yZC1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUdILE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUV6RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkVBQTZFLENBQUM7QUFDN0csT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFFcEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUNML0IsOEJBQXNDLGFBQUE7SUFFOUIsdUNBQWtHLGFBQUE7SUFFdEcsaUJBQU0sRUFBQTs7O0lBRmlCLGVBQXFCO0lBQXJCLDBDQUFxQjs7O0lBUWhDLGtDQUFnRjs7O0lBQTFDLGdEQUEyQjs7O0lBRHJFLCtCQUErRztJQUMzRyxtR0FBZ0Y7SUFDcEYsaUJBQU07OztJQURZLGVBQXNCO0lBQXRCLDhDQUFzQjs7O0lBU3BDLCtCQUFxRztJQUNqRywyQ0FDa0U7SUFDdEUsaUJBQU07OztJQUZvQixlQUFpQjtJQUFqQixzQ0FBaUI7OztJQUczQyx5Q0FJ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Qiw2QkFBYztZQUNWLDhCQUFxRztZQUNqRyxzRUFLTTtZQUNOLHdFQXVDTTtZQUNWLGlCQUFNO1lBQ1YsMEJBQWU7O1lBaEROLGVBQW9FO1lBQXBFLHVGQUFvRTtZQUMvRCxlQUFhO1lBQWIsa0NBQWE7WUFNYixlQUFjO1lBQWQsbUNBQWM7OztTREtmLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBSmpDLFNBQVM7MkJBQ0ksb0JBQW9CO3FMQWFDLFFBQVE7a0JBQXRDLFlBQVk7bUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuXG5pbXBvcnQge0NvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1JlY29yZFZpZXdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvcmVjb3JkLXZpZXcvcmVjb3JkLXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRBY3Rpb25zQWRhcHRlcn0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvYWN0aW9ucy5hZGFwdGVyJztcbmltcG9ydCB7QWN0aW9uQ29udGV4dCwgQnV0dG9uSW50ZXJmYWNlLCBSZWNvcmQsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXJlY29yZC1oZWFkZXInLFxuICAgIHRlbXBsYXRlVXJsOiAncmVjb3JkLWhlYWRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcmVjb3JkOiBSZWNvcmQ7XG4gICAgbW9kZTogVmlld01vZGUgPSAnZGV0YWlsJztcbiAgICBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgICBpc1Njcm9sbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgYmFja0J1dHRvbkNvbmZpZzogQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6c2Nyb2xsJykgb25TY3JvbGwoKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAvL1Njcm9sbFRocmVzaG9sZCBpcyBzZXQgdG8gNWVtXG4gICAgICAgIGNvbnN0IHNjcm9sbFRocmVzaG9sZCA9IDUgKiBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5mb250U2l6ZSk7XG5cbiAgICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uID4gc2Nyb2xsVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAvLzIwIGlzIGp1c3QgYSByYW5kb20gc2FmZXpvbmUgbnVtYmVyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gLSBzY3JvbGxUaHJlc2hvbGQgPCAxMCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5pc1Njcm9sbGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxUaHJlc2hvbGQgLSBzY3JvbGxQb3NpdGlvbiA8IDEwKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmlzU2Nyb2xsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgYWN0aW9uc0FkYXB0ZXI6IFJlY29yZEFjdGlvbnNBZGFwdGVyLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkVmlld1N0b3JlOiBSZWNvcmRWaWV3U3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vZGUgPSB0aGlzLnJlY29yZFZpZXdTdG9yZS5nZXRNb2RlKCk7XG4gICAgICAgIHRoaXMuc2V0QmFja0J1dHRvbkNvbmZpZygpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMucmVjb3JkVmlld1N0b3JlLm1vZGUkLnN1YnNjcmliZShtb2RlID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5yZWNvcmRWaWV3U3RvcmUucmVjb3JkJC5zdWJzY3JpYmUocmVjb3JkID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkID0gcmVjb3JkO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5yZWNvcmRWaWV3U3RvcmUubG9hZGluZyQuc3Vic2NyaWJlKGxvYWRpbmcgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gbG9hZGluZztcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgZ2V0IG1vZHVsZVRpdGxlKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMucmVjb3JkVmlld1N0b3JlLnZtLmFwcERhdGEubW9kdWxlO1xuICAgICAgICBjb25zdCBhcHBMaXN0U3RyaW5ncyA9IHRoaXMucmVjb3JkVmlld1N0b3JlLnZtLmFwcERhdGEubGFuZ3VhZ2UuYXBwTGlzdFN0cmluZ3M7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZU5hdmlnYXRpb24uZ2V0TW9kdWxlTGFiZWwobW9kdWxlLCBhcHBMaXN0U3RyaW5ncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IFN1bW1hcnkgdGVtcGxhdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHRlbXBsYXRlIGxhYmVsXG4gICAgICovXG4gICAgZ2V0U3VtbWFyeVRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZFZpZXdTdG9yZS5nZXRTdW1tYXJ5VGVtcGxhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhY3Rpb24gY29udGV4dFxuICAgICAqIEBwYXJhbSByZWNvcmRcbiAgICAgKi9cbiAgICBnZXRBY3Rpb25Db250ZXh0KHJlY29yZDogUmVjb3JkKTogQWN0aW9uQ29udGV4dCB7XG4gICAgICAgIGlmICghcmVjb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4ge30gYXMgQWN0aW9uQ29udGV4dFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZHVsZTogcmVjb3JkLm1vZHVsZSB8fCAnJyxcbiAgICAgICAgICAgIHJlY29yZFxuICAgICAgICB9IGFzIEFjdGlvbkNvbnRleHRcbiAgICB9XG5cbiAgICBzZXRCYWNrQnV0dG9uQ29uZmlnKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2R1bGVSb3V0ZT0gdGhpcy5tb2R1bGVOYXZpZ2F0aW9uLmdldE1vZHVsZVJvdXRlKHRoaXMucmVjb3JkVmlld1N0b3JlLnZtLmFwcERhdGEubW9kdWxlKTtcblxuICAgICAgICB0aGlzLmJhY2tCdXR0b25Db25maWcgPSB7XG4gICAgICAgICAgICBpY29uOiAncGFnaW5hdGVfcHJldmlvdXMnLFxuICAgICAgICAgICAga2xhc3M6ICdiYWNrLWJ1dHRvbicsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChtb2R1bGVSb3V0ZS5yb3V0ZSkudGhlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lcj5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cImlzU2Nyb2xsZWQgPyAncmVjb3JkLXZpZXctaGVhZGVyLXNjcm9sbGVkIHNoYWRvdy1tZCc6ICcnXCIgY2xhc3M9XCJyZWNvcmQtdmlldy1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cInJvdyBtci0wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLW1vZHVsZS10aXRsZSBbdGl0bGVdPVwibW9kdWxlVGl0bGVcIiBjbGFzcz1cInJlY29yZC12aWV3LXRpdGxlIHRpdGxlLWZvbnRcIj48L3Njcm0tbW9kdWxlLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWNvcmQtdmlldy1uYW1lIHB0LTMgcGItM1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIWxvYWRpbmdcIiBjbGFzcz1cInJvdyBtLTAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1sLTEgbXItMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTcgY29sLXhsLTggcmVjb3JkLW5hbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsb2F0LWxlZnQgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggcmVjb3JkLXZpZXctYmFjay1idXR0b24ganVzdGlmeS1jb250ZW50LXN0YXJ0XCIgKm5nSWY9XCJtb2RlID09PSAnZGV0YWlsJyB8fCBtb2RlID09PSAnZWRpdCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWJ1dHRvbiAqbmdJZj1cImJhY2tCdXR0b25Db25maWdcIiBbY29uZmlnXT1cImJhY2tCdXR0b25Db25maWdcIj48L3Njcm0tYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjb3JkLXZpZXctbmFtZS13cmFwcGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtbWQtc3RhcnQgYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXT1cIm1vZGUgPT09ICdkZXRhaWwnIHx8IG1vZGUgPT09ICdlZGl0J1wiXG4gICAgICAgICAgICAgICAgICAgICBbY2xhc3MuanVzdGlmeS1jb250ZW50LXN0YXJ0XT1cIiEobW9kZSA9PT0gJ2RldGFpbCcgfHwgbW9kZSA9PT0gJ2VkaXQnKVwiXG4gICAgICAgICAgICAgICAgICAgICBbY2xhc3MucmVjb3JkLXZpZXctbmFtZS13cmFwcGVyLW1hcmdpbi1sZWZ0XT1cIm1vZGUgPT09ICdkZXRhaWwnIHx8IG1vZGUgPT09ICdlZGl0J1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC0wIGQtaW5saW5lLWJsb2NrXCIgW25nQ2xhc3NdPVwiaXNTY3JvbGxlZCA/ICdyZWNvcmQtdmlldy1uYW1lLXNjcm9sbGVkJyA6ICdyZWNvcmQtdmlldy1uYW1lJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInJlY29yZCAmJiByZWNvcmQuZmllbGRzICYmIG1vZGUgIT09ICdjcmVhdGUnXCIgY2xhc3M9XCJmbG9hdC1yaWdodCBhbGlnbi1pdGVtcy10b3AgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZmF2b3JpdGUtdG9nZ2xlIFtyZWNvcmRdPVwicmVjb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoLTEwMCBsaC0xMDBcIj48L3Njcm0tZmF2b3JpdGUtdG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1keW5hbWljLWxhYmVsICpuZ0lmPVwicmVjb3JkICYmIHJlY29yZC5maWVsZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlY29yZC12aWV3LW5hbWUtbGFiZWwgZC1ibG9jayBwLTAgbGgtMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkc109XCJyZWNvcmQuZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsS2V5XT1cImdldFN1bW1hcnlUZW1wbGF0ZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZHluYW1pYy1sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTUgY29sLXhsLTQgYWxpZ24taXRlbXMtY2VudGVyIHJlY29yZC12aWV3LWFjdGlvbi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG1yLTEgbWwtMSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGp1c3RpZnktY29udGVudC1tZC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInJlY29yZFwiIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1hY3Rpb24tZ3JvdXAtbWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImFjdGlvbnNBZGFwdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGlvbkNvbnRleHRdPVwiZ2V0QWN0aW9uQ29udGV4dChyZWNvcmQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tsYXNzXT1cImlzU2Nyb2xsZWQgPyAgJ3JlY29yZC12aWV3LWFjdGlvbnMtc2Nyb2xsZWQgZmxvYXQtcmlnaHQnIDogJ3JlY29yZC12aWV3LWFjdGlvbnMgZmxvYXQtcmlnaHQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ2xhc3M9XCJzZXR0aW5ncy1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWFjdGlvbi1ncm91cC1tZW51PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19