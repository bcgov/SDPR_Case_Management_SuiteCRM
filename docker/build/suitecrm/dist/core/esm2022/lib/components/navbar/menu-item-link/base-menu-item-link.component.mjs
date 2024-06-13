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
import { take } from 'rxjs/operators';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { AppStateStore } from '../../../store/app-state/app-state.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/process/processes/async-action/async-action";
import * as i2 from "../../../store/app-state/app-state.store";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "../../image/image.component";
function BaseMenuItemLinkComponent_ng_container_0_scrm_image_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 3);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("image", ctx_r3.icon);
} }
function BaseMenuItemLinkComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function BaseMenuItemLinkComponent_ng_container_0_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.config.onClick($event)); })("touchstart", function BaseMenuItemLinkComponent_ng_container_0_Template_a_touchstart_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.config.onTouchStart($event)); });
    i0.ɵɵtemplate(2, BaseMenuItemLinkComponent_ng_container_0_scrm_image_2_Template, 1, 1, "scrm-image", 2);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r0.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.link.label, " ");
} }
function BaseMenuItemLinkComponent_ng_container_1_a_1_scrm_image_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 3);
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("image", ctx_r10.icon);
} }
function BaseMenuItemLinkComponent_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵtemplate(1, BaseMenuItemLinkComponent_ng_container_1_a_1_scrm_image_1_Template, 1, 1, "scrm-image", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r7.class)("queryParams", ctx_r7.link.params)("routerLink", ctx_r7.link.route);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.link.label, " ");
} }
function BaseMenuItemLinkComponent_ng_container_1_a_2_scrm_image_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 3);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("image", ctx_r11.icon);
} }
function BaseMenuItemLinkComponent_ng_container_1_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtemplate(1, BaseMenuItemLinkComponent_ng_container_1_a_2_scrm_image_1_Template, 1, 1, "scrm-image", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("href", ctx_r8.link.url, i0.ɵɵsanitizeUrl)("ngClass", ctx_r8.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.link.label, " ");
} }
function BaseMenuItemLinkComponent_ng_container_1_a_3_scrm_image_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 3);
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("image", ctx_r12.icon);
} }
function BaseMenuItemLinkComponent_ng_container_1_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵtemplate(1, BaseMenuItemLinkComponent_ng_container_1_a_3_scrm_image_1_Template, 1, 1, "scrm-image", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r9.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.link.label, " ");
} }
function BaseMenuItemLinkComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseMenuItemLinkComponent_ng_container_1_a_1_Template, 3, 5, "a", 4);
    i0.ɵɵtemplate(2, BaseMenuItemLinkComponent_ng_container_1_a_2_Template, 3, 4, "a", 5);
    i0.ɵɵtemplate(3, BaseMenuItemLinkComponent_ng_container_1_a_3_Template, 3, 3, "a", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.link.route);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.link.route && ctx_r1.link.url);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.link.route && !ctx_r1.link.url);
} }
function BaseMenuItemLinkComponent_ng_container_2_scrm_image_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 3);
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("image", ctx_r13.icon);
} }
function BaseMenuItemLinkComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 10);
    i0.ɵɵlistener("click", function BaseMenuItemLinkComponent_ng_container_2_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.handleProcess(ctx_r14.link.process)); });
    i0.ɵɵtemplate(2, BaseMenuItemLinkComponent_ng_container_2_scrm_image_2_Template, 1, 1, "scrm-image", 2);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r2.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.link.label, " ");
} }
class BaseMenuItemLinkComponent {
    constructor(asyncActionService, appState) {
        this.asyncActionService = asyncActionService;
        this.appState = appState;
    }
    handleProcess(process) {
        if (!process) {
            return;
        }
        const processType = process;
        const options = {
            action: processType,
            module: this.appState.getModule(),
        };
        this.asyncActionService.run(processType, options).pipe(take(1)).subscribe();
    }
    static { this.ɵfac = function BaseMenuItemLinkComponent_Factory(t) { return new (t || BaseMenuItemLinkComponent)(i0.ɵɵdirectiveInject(i1.AsyncActionService), i0.ɵɵdirectiveInject(i2.AppStateStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMenuItemLinkComponent, selectors: [["scrm-base-menu-item-link"]], inputs: { link: "link", icon: "icon", class: "class", disableRoute: "disableRoute", config: "config" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "ngClass", "click", "touchstart"], [3, "image", 4, "ngIf"], [3, "image"], [3, "ngClass", "queryParams", "routerLink", 4, "ngIf"], [3, "href", "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "ngClass", "queryParams", "routerLink"], [3, "href", "ngClass"], [3, "ngClass"], [3, "ngClass", "click"]], template: function BaseMenuItemLinkComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseMenuItemLinkComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
            i0.ɵɵtemplate(1, BaseMenuItemLinkComponent_ng_container_1_Template, 4, 3, "ng-container", 0);
            i0.ɵɵtemplate(2, BaseMenuItemLinkComponent_ng_container_2_Template, 4, 3, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.link.process && (ctx.config == null ? null : ctx.config.onClick));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.link.process && !(ctx.config == null ? null : ctx.config.onClick));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.link.process);
        } }, dependencies: [i3.NgClass, i3.NgIf, i4.RouterLink, i5.ImageComponent], encapsulation: 2 }); }
}
export { BaseMenuItemLinkComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMenuItemLinkComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-menu-item-link', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"!link.process && config?.onClick\">\n    <a (click)=\"config.onClick($event)\"\n       (touchstart)=\"config.onTouchStart($event)\"\n       [ngClass]=\"class\"\n    >\n        <scrm-image *ngIf=\"icon\" image=\"{{ icon }}\"></scrm-image>\n        {{ link.label }}\n    </a>\n</ng-container>\n<ng-container *ngIf=\"!link.process && !config?.onClick\">\n    <a *ngIf=\"link.route\"\n       [ngClass]=\"class\"\n       [queryParams]=\"link.params\"\n       [routerLink]=\"link.route\"\n    >\n        <scrm-image *ngIf=\"icon\" image=\"{{ icon }}\"></scrm-image>\n        {{ link.label }}\n    </a>\n    <a *ngIf=\"!link.route && link.url\"\n       [href]=\"link.url\"\n       [ngClass]=\"class\"\n    >\n        <scrm-image *ngIf=\"icon\" image=\"{{ icon }}\"></scrm-image>\n        {{ link.label }}\n    </a>\n    <a *ngIf=\"!link.route && !link.url\"\n       [ngClass]=\"class\"\n    >\n        <scrm-image *ngIf=\"icon\" image=\"{{ icon }}\"></scrm-image>\n        {{ link.label }}\n    </a>\n</ng-container>\n<ng-container *ngIf=\"link.process\">\n    <a [ngClass]=\"class\" (click)=\"handleProcess(link.process)\">\n        <scrm-image *ngIf=\"icon\" image=\"{{ icon }}\"></scrm-image>\n        {{ link.label }}\n    </a>\n</ng-container>\n\n\n" }]
    }], function () { return [{ type: i1.AsyncActionService }, { type: i2.AppStateStore }]; }, { link: [{
            type: Input
        }], icon: [{
            type: Input
        }], class: [{
            type: Input
        }], disableRoute: [{
            type: Input
        }], config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LWl0ZW0tbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1pdGVtLWxpbmsvYmFzZS1tZW51LWl0ZW0tbGluay5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1pdGVtLWxpbmsvYmFzZS1tZW51LWl0ZW0tbGluay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BDLE9BQU8sRUFBbUIsa0JBQWtCLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUNuSCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7O0lDRS9ELGdDQUF5RDs7O0lBQWhDLDhDQUFrQjs7OztJQUxuRCw2QkFBdUQ7SUFDbkQsNEJBR0M7SUFIRSxnTEFBUyxlQUFBLDZCQUFzQixDQUFBLElBQUMsNktBQ2xCLGVBQUEsa0NBQTJCLENBQUEsSUFEVDtJQUkvQix1R0FBeUQ7SUFDekQsWUFDSjtJQUFBLGlCQUFJO0lBQ1IsMEJBQWU7OztJQUxSLGVBQWlCO0lBQWpCLHNDQUFpQjtJQUVILGVBQVU7SUFBVixrQ0FBVTtJQUN2QixlQUNKO0lBREksa0RBQ0o7OztJQVFJLGdDQUF5RDs7O0lBQWhDLCtDQUFrQjs7O0lBTC9DLDRCQUlDO0lBQ0csMkdBQXlEO0lBQ3pELFlBQ0o7SUFBQSxpQkFBSTs7O0lBTkQsc0NBQWlCLG1DQUFBLGlDQUFBO0lBSUgsZUFBVTtJQUFWLGtDQUFVO0lBQ3ZCLGVBQ0o7SUFESSxrREFDSjs7O0lBS0ksZ0NBQXlEOzs7SUFBaEMsK0NBQWtCOzs7SUFKL0MsNEJBR0M7SUFDRywyR0FBeUQ7SUFDekQsWUFDSjtJQUFBLGlCQUFJOzs7SUFMRCx3REFBaUIseUJBQUE7SUFHSCxlQUFVO0lBQVYsa0NBQVU7SUFDdkIsZUFDSjtJQURJLGtEQUNKOzs7SUFJSSxnQ0FBeUQ7OztJQUFoQywrQ0FBa0I7OztJQUgvQyw0QkFFQztJQUNHLDJHQUF5RDtJQUN6RCxZQUNKO0lBQUEsaUJBQUk7OztJQUpELHNDQUFpQjtJQUVILGVBQVU7SUFBVixrQ0FBVTtJQUN2QixlQUNKO0lBREksa0RBQ0o7OztJQXJCSiw2QkFBd0Q7SUFDcEQscUZBT0k7SUFDSixxRkFNSTtJQUNKLHFGQUtJO0lBQ1IsMEJBQWU7OztJQXJCUCxlQUFnQjtJQUFoQix3Q0FBZ0I7SUFRaEIsZUFBNkI7SUFBN0IsNERBQTZCO0lBTzdCLGVBQThCO0lBQTlCLDZEQUE4Qjs7O0lBUzlCLGdDQUF5RDs7O0lBQWhDLCtDQUFrQjs7OztJQUZuRCw2QkFBbUM7SUFDL0IsNkJBQTJEO0lBQXRDLDRLQUFTLGVBQUEsMkNBQTJCLENBQUEsSUFBQztJQUN0RCx1R0FBeUQ7SUFDekQsWUFDSjtJQUFBLGlCQUFJO0lBQ1IsMEJBQWU7OztJQUpSLGVBQWlCO0lBQWpCLHNDQUFpQjtJQUNILGVBQVU7SUFBVixrQ0FBVTtJQUN2QixlQUNKO0lBREksa0RBQ0o7O0FEOUJKLE1BS2EseUJBQXlCO0lBT2xDLFlBQ2Msa0JBQXNDLEVBQ3RDLFFBQXVCO1FBRHZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtJQUVyQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFFekIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLE9BQU87U0FDVjtRQUVELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUU1QixNQUFNLE9BQU8sR0FBRztZQUNaLE1BQU0sRUFBRSxXQUFXO1lBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtTQUNoQixDQUFDO1FBRXRCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRixDQUFDOzBGQTNCUSx5QkFBeUI7b0VBQXpCLHlCQUF5QjtZQ1h0Qyw0RkFRZTtZQUNmLDRGQXNCZTtZQUNmLDRGQUtlOztZQXJDQSw0RkFBc0M7WUFTdEMsZUFBdUM7WUFBdkMsNkZBQXVDO1lBdUJ2QyxlQUFrQjtZQUFsQix1Q0FBa0I7OztTRHJCcEIseUJBQXlCO3VGQUF6Qix5QkFBeUI7Y0FMckMsU0FBUzsyQkFDSSwwQkFBMEI7aUdBSzNCLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lbnVJdGVtTGlua30gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7TWVudUl0ZW1MaW5rQ29uZmlnfSBmcm9tIFwiLi9tZW51LWl0ZW0tbGluay1jb25maWcubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWJhc2UtbWVudS1pdGVtLWxpbmsnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYXNlLW1lbnUtaXRlbS1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VNZW51SXRlbUxpbmtDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGxpbms6IE1lbnVJdGVtTGluaztcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgICBASW5wdXQoKSBkaXNhYmxlUm91dGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgY29uZmlnOiBNZW51SXRlbUxpbmtDb25maWc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uU2VydmljZTogQXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGU6IEFwcFN0YXRlU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBoYW5kbGVQcm9jZXNzKHByb2Nlc3M6IHN0cmluZykge1xuXG4gICAgICAgIGlmICghcHJvY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvY2Vzc1R5cGUgPSBwcm9jZXNzO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhY3Rpb246IHByb2Nlc3NUeXBlLFxuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLmFwcFN0YXRlLmdldE1vZHVsZSgpLFxuICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG5cbiAgICAgICAgdGhpcy5hc3luY0FjdGlvblNlcnZpY2UucnVuKHByb2Nlc3NUeXBlLCBvcHRpb25zKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhbGluay5wcm9jZXNzICYmIGNvbmZpZz8ub25DbGlja1wiPlxuICAgIDxhIChjbGljayk9XCJjb25maWcub25DbGljaygkZXZlbnQpXCJcbiAgICAgICAodG91Y2hzdGFydCk9XCJjb25maWcub25Ub3VjaFN0YXJ0KCRldmVudClcIlxuICAgICAgIFtuZ0NsYXNzXT1cImNsYXNzXCJcbiAgICA+XG4gICAgICAgIDxzY3JtLWltYWdlICpuZ0lmPVwiaWNvblwiIGltYWdlPVwie3sgaWNvbiB9fVwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAge3sgbGluay5sYWJlbCB9fVxuICAgIDwvYT5cbjwvbmctY29udGFpbmVyPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFsaW5rLnByb2Nlc3MgJiYgIWNvbmZpZz8ub25DbGlja1wiPlxuICAgIDxhICpuZ0lmPVwibGluay5yb3V0ZVwiXG4gICAgICAgW25nQ2xhc3NdPVwiY2xhc3NcIlxuICAgICAgIFtxdWVyeVBhcmFtc109XCJsaW5rLnBhcmFtc1wiXG4gICAgICAgW3JvdXRlckxpbmtdPVwibGluay5yb3V0ZVwiXG4gICAgPlxuICAgICAgICA8c2NybS1pbWFnZSAqbmdJZj1cImljb25cIiBpbWFnZT1cInt7IGljb24gfX1cIj48L3Njcm0taW1hZ2U+XG4gICAgICAgIHt7IGxpbmsubGFiZWwgfX1cbiAgICA8L2E+XG4gICAgPGEgKm5nSWY9XCIhbGluay5yb3V0ZSAmJiBsaW5rLnVybFwiXG4gICAgICAgW2hyZWZdPVwibGluay51cmxcIlxuICAgICAgIFtuZ0NsYXNzXT1cImNsYXNzXCJcbiAgICA+XG4gICAgICAgIDxzY3JtLWltYWdlICpuZ0lmPVwiaWNvblwiIGltYWdlPVwie3sgaWNvbiB9fVwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAge3sgbGluay5sYWJlbCB9fVxuICAgIDwvYT5cbiAgICA8YSAqbmdJZj1cIiFsaW5rLnJvdXRlICYmICFsaW5rLnVybFwiXG4gICAgICAgW25nQ2xhc3NdPVwiY2xhc3NcIlxuICAgID5cbiAgICAgICAgPHNjcm0taW1hZ2UgKm5nSWY9XCJpY29uXCIgaW1hZ2U9XCJ7eyBpY29uIH19XCI+PC9zY3JtLWltYWdlPlxuICAgICAgICB7eyBsaW5rLmxhYmVsIH19XG4gICAgPC9hPlxuPC9uZy1jb250YWluZXI+XG48bmctY29udGFpbmVyICpuZ0lmPVwibGluay5wcm9jZXNzXCI+XG4gICAgPGEgW25nQ2xhc3NdPVwiY2xhc3NcIiAoY2xpY2spPVwiaGFuZGxlUHJvY2VzcyhsaW5rLnByb2Nlc3MpXCI+XG4gICAgICAgIDxzY3JtLWltYWdlICpuZ0lmPVwiaWNvblwiIGltYWdlPVwie3sgaWNvbiB9fVwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAge3sgbGluay5sYWJlbCB9fVxuICAgIDwvYT5cbjwvbmctY29udGFpbmVyPlxuXG5cbiJdfQ==