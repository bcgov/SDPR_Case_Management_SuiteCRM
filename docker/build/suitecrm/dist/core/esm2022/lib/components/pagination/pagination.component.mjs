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
import { combineLatestWith } from 'rxjs';
import { map } from 'rxjs/operators';
import { PageSelection } from 'common';
import { LanguageStore } from '../../store/language/language.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "../image/image.component";
function PaginationComponent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function PaginationComponent_div_0_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.first()); });
    i0.ɵɵelement(1, "scrm-image", 8);
    i0.ɵɵelementEnd();
} }
function PaginationComponent_div_0_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function PaginationComponent_div_0_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.previous()); });
    i0.ɵɵelement(1, "scrm-image", 10);
    i0.ɵɵelementEnd();
} }
function PaginationComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function PaginationComponent_div_0_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.next()); });
    i0.ɵɵelement(1, "scrm-image", 12);
    i0.ɵɵelementEnd();
} }
function PaginationComponent_div_0_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function PaginationComponent_div_0_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.last()); });
    i0.ɵɵelement(1, "scrm-image", 14);
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0, a1) { return { "hide-pagination-count": a0, "centre-pagination": a1 }; };
function PaginationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, PaginationComponent_div_0_button_1_Template, 2, 0, "button", 2);
    i0.ɵɵtemplate(2, PaginationComponent_div_0_button_2_Template, 2, 0, "button", 3);
    i0.ɵɵelementStart(3, "span", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, PaginationComponent_div_0_button_5_Template, 2, 0, "button", 5);
    i0.ɵɵtemplate(6, PaginationComponent_div_0_button_6_Template, 2, 0, "button", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.allowPagination);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.allowPagination);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(9, _c0, ctx_r0.displayResponsiveTable, !ctx_r0.allowPagination));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate4(" (", vm_r1.pageCount.pageFirst, " - ", vm_r1.pageCount.pageLast, " ", vm_r1.appStrings["LBL_LIST_OF"] || "", " ", vm_r1.pageCount.total, ") ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.allowPagination);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.allowPagination);
} }
class PaginationComponent {
    constructor(languageStore) {
        this.languageStore = languageStore;
        this.allowPagination = true;
        this.appStrings$ = this.languageStore.appStrings$;
        this.vm$ = null;
    }
    ngOnInit() {
        const pageCount$ = this.state.getPaginationCount();
        this.vm$ = this.appStrings$.pipe(combineLatestWith(pageCount$), map(([appStrings, pageCount]) => ({ appStrings, pageCount })));
    }
    first() {
        this.state.changePage(PageSelection.FIRST);
    }
    previous() {
        this.state.changePage(PageSelection.PREVIOUS);
    }
    next() {
        this.state.changePage(PageSelection.NEXT);
    }
    last() {
        this.state.changePage(PageSelection.LAST);
    }
    static { this.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["scrm-pagination"]], inputs: { allowPagination: "allowPagination", state: "state" }, decls: 2, vars: 3, consts: [["class", "bulk-action float-right", 4, "ngIf"], [1, "bulk-action", "float-right"], ["class", "pagination-button pagination-first", "aria-label", "Navigate to first page", 3, "click", 4, "ngIf"], ["class", "pagination-button pagination-previous", "aria-label", "Previous page", 3, "click", 4, "ngIf"], [1, "pagination-count", 3, "ngClass"], ["class", "pagination-button pagination-next", "aria-label", "Navigate to last page", 3, "click", 4, "ngIf"], ["class", "pagination-button pagination-last", "aria-label", "Next page", 3, "click", 4, "ngIf"], ["aria-label", "Navigate to first page", 1, "pagination-button", "pagination-first", 3, "click"], ["image", "paginate_first", 1, "sicon-2x", "pagination-icons"], ["aria-label", "Previous page", 1, "pagination-button", "pagination-previous", 3, "click"], ["image", "paginate_previous", 1, "sicon-2x", "pagination-icons"], ["aria-label", "Navigate to last page", 1, "pagination-button", "pagination-next", 3, "click"], ["image", "paginate_next", 1, "sicon-2x", "pagination-icons"], ["aria-label", "Next page", 1, "pagination-button", "pagination-last", 3, "click"], ["image", "paginate_last", 1, "sicon-2x", "pagination-icons"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PaginationComponent_div_0_Template, 7, 12, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i2.NgClass, i2.NgIf, i3.ImageComponent, i2.AsyncPipe], encapsulation: 2 }); }
}
export { PaginationComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{ selector: 'scrm-pagination', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"bulk-action float-right\" *ngIf=\"(vm$ | async) as vm\">\n    <button *ngIf=\"allowPagination\" class=\"pagination-button pagination-first\"\n            aria-label=\"Navigate to first page\"\n            (click)=\"first()\">\n        <scrm-image class=\"sicon-2x pagination-icons\" image=\"paginate_first\">\n        </scrm-image>\n    </button>\n    <button *ngIf=\"allowPagination\" class=\"pagination-button pagination-previous\"\n            aria-label=\"Previous page\"\n            (click)=\"previous()\">\n        <scrm-image class=\"sicon-2x pagination-icons\" image=\"paginate_previous\">\n        </scrm-image>\n    </button>\n    <span class=\"pagination-count\"\n          [ngClass]=\"{\n            'hide-pagination-count': displayResponsiveTable, 'centre-pagination': !allowPagination\n          }\"\n    >\n      ({{vm.pageCount.pageFirst}}\n        - {{vm.pageCount.pageLast}} {{vm.appStrings['LBL_LIST_OF'] || ''}} {{vm.pageCount.total}})\n    </span>\n    <button *ngIf=\"allowPagination\" class=\"pagination-button pagination-next\"\n            aria-label=\"Navigate to last page\"\n            (click)=\"next()\">\n        <scrm-image class=\"sicon-2x pagination-icons\" image=\"paginate_next\">\n        </scrm-image>\n    </button>\n    <button *ngIf=\"allowPagination\" class=\"pagination-button pagination-last\"\n            aria-label=\"Next page\"\n            (click)=\"last()\">\n        <scrm-image class=\"sicon-2x pagination-icons\" image=\"paginate_last\">\n        </scrm-image>\n    </button>\n</div>\n" }]
    }], function () { return [{ type: i1.LanguageStore }]; }, { allowPagination: [{
            type: Input
        }], state: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsaUJBQWlCLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25DLE9BQU8sRUFBQyxhQUFhLEVBQXdDLE1BQU0sUUFBUSxDQUFDO0FBQzVFLE9BQU8sRUFBQyxhQUFhLEVBQW9CLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7SUNGakYsaUNBRTBCO0lBQWxCLDBLQUFTLGVBQUEsY0FBTyxDQUFBLElBQUM7SUFDckIsZ0NBQ2E7SUFDakIsaUJBQVM7Ozs7SUFDVCxpQ0FFNkI7SUFBckIsMEtBQVMsZUFBQSxpQkFBVSxDQUFBLElBQUM7SUFDeEIsaUNBQ2E7SUFDakIsaUJBQVM7Ozs7SUFTVCxrQ0FFeUI7SUFBakIsNEtBQVMsZUFBQSxjQUFNLENBQUEsSUFBQztJQUNwQixpQ0FDYTtJQUNqQixpQkFBUzs7OztJQUNULGtDQUV5QjtJQUFqQiw0S0FBUyxlQUFBLGNBQU0sQ0FBQSxJQUFDO0lBQ3BCLGlDQUNhO0lBQ2pCLGlCQUFTOzs7O0lBaENiLDhCQUFpRTtJQUM3RCxnRkFLUztJQUNULGdGQUtTO0lBQ1QsK0JBSUM7SUFDQyxZQUVGO0lBQUEsaUJBQU87SUFDUCxnRkFLUztJQUNULGdGQUtTO0lBQ2IsaUJBQU07Ozs7SUFoQ08sZUFBcUI7SUFBckIsNkNBQXFCO0lBTXJCLGVBQXFCO0lBQXJCLDZDQUFxQjtJQU94QixlQUVFO0lBRkYsNEdBRUU7SUFFTixlQUVGO0lBRkUscUtBRUY7SUFDUyxlQUFxQjtJQUFyQiw2Q0FBcUI7SUFNckIsZUFBcUI7SUFBckIsNkNBQXFCOztBRGpCbEMsTUFJYSxtQkFBbUI7SUFTNUIsWUFBc0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFQekMsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFJaEMsZ0JBQVcsR0FBa0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDNUUsUUFBRyxHQUFvQyxJQUFJLENBQUM7SUFHNUMsQ0FBQztJQUVELFFBQVE7UUFDSixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFbkQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDNUIsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQzdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBdUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDLENBQ3BHLENBQUM7SUFDTixDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO29GQW5DUSxtQkFBbUI7b0VBQW5CLG1CQUFtQjtZQ2RoQyxxRUFpQ007OztZQWpDZ0Msb0RBQW9COzs7U0RjN0MsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FKL0IsU0FBUzsyQkFDSSxpQkFBaUI7Z0VBS2xCLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UGFnZVNlbGVjdGlvbiwgUGFnaW5hdGlvbkNvdW50LCBQYWdpbmF0aW9uRGF0YVNvdXJjZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZSwgTGFuZ3VhZ2VTdHJpbmdNYXB9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uVmlld01vZGVsIHtcbiAgICBhcHBTdHJpbmdzOiBMYW5ndWFnZVN0cmluZ01hcDtcbiAgICBwYWdlQ291bnQ6IFBhZ2luYXRpb25Db3VudDtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXBhZ2luYXRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAncGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBhbGxvd1BhZ2luYXRpb24gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHN0YXRlOiBQYWdpbmF0aW9uRGF0YVNvdXJjZTtcbiAgICBkaXNwbGF5UmVzcG9uc2l2ZVRhYmxlOiBhbnk7XG5cbiAgICBhcHBTdHJpbmdzJDogT2JzZXJ2YWJsZTxMYW5ndWFnZVN0cmluZ01hcD4gPSB0aGlzLmxhbmd1YWdlU3RvcmUuYXBwU3RyaW5ncyQ7XG4gICAgdm0kOiBPYnNlcnZhYmxlPFBhZ2luYXRpb25WaWV3TW9kZWw+ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBhZ2VDb3VudCQgPSB0aGlzLnN0YXRlLmdldFBhZ2luYXRpb25Db3VudCgpO1xuXG4gICAgICAgIHRoaXMudm0kID0gdGhpcy5hcHBTdHJpbmdzJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgocGFnZUNvdW50JCksXG4gICAgICAgICAgICBtYXAoKFthcHBTdHJpbmdzLCBwYWdlQ291bnRdOiBbTGFuZ3VhZ2VTdHJpbmdNYXAsIFBhZ2luYXRpb25Db3VudF0pID0+ICh7YXBwU3RyaW5ncywgcGFnZUNvdW50fSkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZmlyc3QoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUuY2hhbmdlUGFnZShQYWdlU2VsZWN0aW9uLkZJUlNUKTtcbiAgICB9XG5cbiAgICBwcmV2aW91cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5jaGFuZ2VQYWdlKFBhZ2VTZWxlY3Rpb24uUFJFVklPVVMpO1xuICAgIH1cblxuICAgIG5leHQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUuY2hhbmdlUGFnZShQYWdlU2VsZWN0aW9uLk5FWFQpO1xuICAgIH1cblxuICAgIGxhc3QoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUuY2hhbmdlUGFnZShQYWdlU2VsZWN0aW9uLkxBU1QpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgY2xhc3M9XCJidWxrLWFjdGlvbiBmbG9hdC1yaWdodFwiICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiPlxuICAgIDxidXR0b24gKm5nSWY9XCJhbGxvd1BhZ2luYXRpb25cIiBjbGFzcz1cInBhZ2luYXRpb24tYnV0dG9uIHBhZ2luYXRpb24tZmlyc3RcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5hdmlnYXRlIHRvIGZpcnN0IHBhZ2VcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImZpcnN0KClcIj5cbiAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJzaWNvbi0yeCBwYWdpbmF0aW9uLWljb25zXCIgaW1hZ2U9XCJwYWdpbmF0ZV9maXJzdFwiPlxuICAgICAgICA8L3Njcm0taW1hZ2U+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImFsbG93UGFnaW5hdGlvblwiIGNsYXNzPVwicGFnaW5hdGlvbi1idXR0b24gcGFnaW5hdGlvbi1wcmV2aW91c1wiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXMgcGFnZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwicHJldmlvdXMoKVwiPlxuICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cInNpY29uLTJ4IHBhZ2luYXRpb24taWNvbnNcIiBpbWFnZT1cInBhZ2luYXRlX3ByZXZpb3VzXCI+XG4gICAgICAgIDwvc2NybS1pbWFnZT5cbiAgICA8L2J1dHRvbj5cbiAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tY291bnRcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICdoaWRlLXBhZ2luYXRpb24tY291bnQnOiBkaXNwbGF5UmVzcG9uc2l2ZVRhYmxlLCAnY2VudHJlLXBhZ2luYXRpb24nOiAhYWxsb3dQYWdpbmF0aW9uXG4gICAgICAgICAgfVwiXG4gICAgPlxuICAgICAgKHt7dm0ucGFnZUNvdW50LnBhZ2VGaXJzdH19XG4gICAgICAgIC0ge3t2bS5wYWdlQ291bnQucGFnZUxhc3R9fSB7e3ZtLmFwcFN0cmluZ3NbJ0xCTF9MSVNUX09GJ10gfHwgJyd9fSB7e3ZtLnBhZ2VDb3VudC50b3RhbH19KVxuICAgIDwvc3Bhbj5cbiAgICA8YnV0dG9uICpuZ0lmPVwiYWxsb3dQYWdpbmF0aW9uXCIgY2xhc3M9XCJwYWdpbmF0aW9uLWJ1dHRvbiBwYWdpbmF0aW9uLW5leHRcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5hdmlnYXRlIHRvIGxhc3QgcGFnZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwibmV4dCgpXCI+XG4gICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwic2ljb24tMnggcGFnaW5hdGlvbi1pY29uc1wiIGltYWdlPVwicGFnaW5hdGVfbmV4dFwiPlxuICAgICAgICA8L3Njcm0taW1hZ2U+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImFsbG93UGFnaW5hdGlvblwiIGNsYXNzPVwicGFnaW5hdGlvbi1idXR0b24gcGFnaW5hdGlvbi1sYXN0XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJOZXh0IHBhZ2VcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImxhc3QoKVwiPlxuICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cInNpY29uLTJ4IHBhZ2luYXRpb24taWNvbnNcIiBpbWFnZT1cInBhZ2luYXRlX2xhc3RcIj5cbiAgICAgICAgPC9zY3JtLWltYWdlPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=