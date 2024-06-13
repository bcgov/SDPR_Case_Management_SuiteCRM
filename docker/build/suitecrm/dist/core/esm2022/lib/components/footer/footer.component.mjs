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
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../services/auth/auth.service";
import * as i3 from "@angular/common";
import * as i4 from "../image/image.component";
function FooterUiComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8)(2, "a", 9);
    i0.ɵɵlistener("click", function FooterUiComponent_ng_container_6_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.backToTop()); });
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, " Back To Top ");
    i0.ɵɵelement(5, "scrm-image", 10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} }
function FooterUiComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "h5", 13);
    i0.ɵɵtext(3, "\u00A9 Powered By SugarCRM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 14);
    i0.ɵɵlistener("click", function FooterUiComponent_ng_template_8_Template_button_click_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const modal_r7 = restoredCtx.$implicit; return i0.ɵɵresetView(modal_r7.dismiss("Cross click")); });
    i0.ɵɵelement(5, "scrm-image", 15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 16)(7, "p");
    i0.ɵɵtext(8, " \u00A9 2004-2013 SugarCRM Inc. The Program is provided AS IS, without warranty. Licensed under AGPLv3. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10, " This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License version 3 as published by the Free Software Foundation, including the additional permission set forth in the source code header. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12, " SugarCRM is a trademark of SugarCRM, Inc. All other company and product names may be trademarks of the respective companies with which they are associated. ");
    i0.ɵɵelementEnd()()();
} }
function FooterUiComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 12)(2, "h5", 13);
    i0.ɵɵtext(3, "\u00A9 Supercharged by SuiteCRM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 14);
    i0.ɵɵlistener("click", function FooterUiComponent_ng_template_10_Template_button_click_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const modal_r10 = restoredCtx.$implicit; return i0.ɵɵresetView(modal_r10.dismiss("Cross click")); });
    i0.ɵɵelement(5, "scrm-image", 15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 16)(7, "p");
    i0.ɵɵtext(8, " SuiteCRM has been written and assembled by SalesAgility. The Program is provided AS IS, without warranty. Licensed under AGPLv3. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10, " This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License version 3 as published by the Free Software Foundation, including the additional permission set forth in the source code header. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12, " SuiteCRM is a trademark of SalesAgility Ltd. All other company and product names may be trademarks of the respective companies with which they are associated. ");
    i0.ɵɵelementEnd()()();
} }
class FooterUiComponent {
    constructor(modalService, authService) {
        this.modalService = modalService;
        this.authService = authService;
    }
    openSugarCopyright(sugarcopyright) {
        this.modalService.open(sugarcopyright, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'lg'
        }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    openSuiteCopyright(suitecopyright) {
        this.modalService.open(suitecopyright, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'lg'
        }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    backToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    ngOnInit() {
        this.authSub = this.authService.isUserLoggedIn.subscribe(value => {
            this.isUserLoggedIn = value;
        });
    }
    ngOnDestroy() {
        this.authSub.unsubscribe();
    }
    static { this.ɵfac = function FooterUiComponent_Factory(t) { return new (t || FooterUiComponent)(i0.ɵɵdirectiveInject(i1.NgbModal), i0.ɵɵdirectiveInject(i2.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FooterUiComponent, selectors: [["scrm-footer-ui"]], decls: 12, vars: 1, consts: [[1, "footer"], [1, "copyright-links"], ["data-toggle", "modal", "data-target", ".copyright-suitecrm", 1, "footer-link", 3, "click"], ["data-toggle", "modal", "data-target", ".copyright-sugarcrm", 1, "footer-link", 3, "click"], [4, "ngIf"], [1, "copyright"], ["sugarcopyright", ""], ["suitecopyright", ""], [1, "back-to-top"], [1, "footer-link", 3, "click"], ["image", "arrow_up_filled", 1, "sicon", "back-top-icon"], ["role", "dialog", "aria-hidden", "true", 1, "copyright-sugarcrm"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["image", "icon_modal_close", 1, "sicon"], [1, "modal-body"], ["role", "dialog", "aria-hidden", "true", 1, "copyright-suitecrm"]], template: function FooterUiComponent_Template(rf, ctx) { if (rf & 1) {
            const _r13 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵlistener("click", function FooterUiComponent_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r13); const _r3 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx.openSuiteCopyright(_r3)); });
            i0.ɵɵtext(3, " \u00A9 Supercharged by SuiteCRM ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "a", 3);
            i0.ɵɵlistener("click", function FooterUiComponent_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r13); const _r1 = i0.ɵɵreference(9); return i0.ɵɵresetView(ctx.openSugarCopyright(_r1)); });
            i0.ɵɵtext(5, " \u00A9 Powered By SugarCRM ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(6, FooterUiComponent_ng_container_6_Template, 6, 0, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵtemplate(8, FooterUiComponent_ng_template_8_Template, 13, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(10, FooterUiComponent_ng_template_10_Template, 13, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.isUserLoggedIn);
        } }, dependencies: [i3.NgIf, i4.ImageComponent], encapsulation: 2 }); }
}
export { FooterUiComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FooterUiComponent, [{
        type: Component,
        args: [{ selector: 'scrm-footer-ui', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start of footer section -->\n<div class=\"footer\">\n  <div class=\"copyright-links\">\n    <a (click)=\"openSuiteCopyright(suitecopyright)\" class=\"footer-link\" data-toggle=\"modal\"\n       data-target=\".copyright-suitecrm\">\n      &copy; Supercharged by SuiteCRM\n    </a>\n    <a (click)=\"openSugarCopyright(sugarcopyright)\" class=\"footer-link\" data-toggle=\"modal\"\n       data-target=\".copyright-sugarcrm\">\n      &copy; Powered By SugarCRM\n    </a>\n  </div>\n  <ng-container *ngIf=\"this.isUserLoggedIn\">\n    <div class=\"back-to-top\">\n      <a (click)=\"backToTop()\" class=\"footer-link\">\n        <span>\n          Back To Top\n          <scrm-image class=\"sicon back-top-icon\" image=\"arrow_up_filled\"></scrm-image>\n        </span>\n      </a>\n    </div>\n  </ng-container>\n</div>\n<!-- End of footer section -->\n\n<!-- Start of copyright modal section -->\n\n<div class=\"copyright\">\n\n    <!-- Start of SugarCRM Copyright notice modal -->\n\n    <ng-template #sugarcopyright let-modal>\n\n        <div class=\"copyright-sugarcrm\" role=\"dialog\" aria-hidden=\"true\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">&copy; Powered By SugarCRM</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\n                        (click)=\"modal.dismiss('Cross click')\">\n                    <scrm-image class=\"sicon\" image=\"icon_modal_close\"></scrm-image>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>\n                    &copy; 2004-2013 SugarCRM Inc. The Program is provided AS IS, without\n                    warranty. Licensed under AGPLv3.\n                </p>\n                <p>\n                    This program is free software; you can redistribute it and/or modify\n                    it under the terms of the GNU Affero General Public License version\n                    3 as published by the Free Software Foundation, including the\n                    additional permission set forth in the source code header.\n                </p>\n                <p>\n                    SugarCRM is a trademark of SugarCRM, Inc. All other company and\n                    product names may be trademarks of the respective companies with\n                    which they are associated.\n                </p>\n            </div>\n        </div>\n\n    </ng-template>\n\n    <!-- End of SugarCRM Copyright notice modal -->\n\n    <!-- Start of SuiteCRM Copyright notice modal -->\n\n    <ng-template #suitecopyright let-modal>\n\n        <div class=\"copyright-suitecrm\" role=\"dialog\" aria-hidden=\"true\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">&copy; Supercharged by SuiteCRM</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\n                        (click)=\"modal.dismiss('Cross click')\">\n                    <scrm-image class=\"sicon\" image=\"icon_modal_close\"></scrm-image>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>\n                    SuiteCRM has been written and assembled by SalesAgility. The Program\n                    is provided AS IS, without warranty. Licensed under AGPLv3.\n                </p>\n                <p>\n                    This program is free software; you can redistribute it and/or modify\n                    it under the terms of the GNU Affero General Public License version\n                    3 as published by the Free Software Foundation, including the\n                    additional permission set forth in the source code header.\n                </p>\n                <p>\n                    SuiteCRM is a trademark of SalesAgility Ltd. All other company and\n                    product names may be trademarks of the respective companies with\n                    which they are associated.\n                </p>\n            </div>\n        </div>\n\n    </ng-template>\n\n    <!-- End of SuiteCRM Copyright notice modal -->\n</div>\n\n<!-- End of copyright modal section -->\n" }]
    }], function () { return [{ type: i1.NgbModal }, { type: i2.AuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUVoRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFekUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7OztJQ1MzRCw2QkFBMEM7SUFDeEMsOEJBQXlCLFdBQUE7SUFDcEIsa0tBQVMsZUFBQSxrQkFBVyxDQUFBLElBQUM7SUFDdEIsNEJBQU07SUFDSiw2QkFDQTtJQUFBLGlDQUE2RTtJQUMvRSxpQkFBTyxFQUFBLEVBQUE7SUFHYiwwQkFBZTs7OztJQVlULCtCQUFpRSxjQUFBLGFBQUE7SUFFakMsMENBQTBCO0lBQUEsaUJBQUs7SUFDdkQsa0NBQytDO0lBQXZDLCtMQUFTLGVBQUEsaUJBQWMsYUFBYSxDQUFDLENBQUEsSUFBQztJQUMxQyxpQ0FBZ0U7SUFDcEUsaUJBQVMsRUFBQTtJQUViLCtCQUF3QixRQUFBO0lBRWhCLHdIQUVKO0lBQUEsaUJBQUk7SUFDSix5QkFBRztJQUNDLG9SQUlKO0lBQUEsaUJBQUk7SUFDSiwwQkFBRztJQUNDLDhLQUdKO0lBQUEsaUJBQUksRUFBQSxFQUFBOzs7O0lBWVosK0JBQWlFLGNBQUEsYUFBQTtJQUVqQywrQ0FBK0I7SUFBQSxpQkFBSztJQUM1RCxrQ0FDK0M7SUFBdkMsa01BQVMsZUFBQSxrQkFB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QU07WUFLTiw4QkFBdUI7WUFJbkIsb0hBNkJjO1lBTWQsc0hBNkJjO1lBR2xCLGlCQUFNOztZQXRGVyxlQUF5QjtZQUF6Qix5Q0FBeUI7OztTREY3QixpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUw3QixTQUFTOzJCQUNJLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7TW9kYWxEaXNtaXNzUmVhc29ucywgTmdiTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWZvb3Rlci11aScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJVaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIGF1dGhTdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGNsb3NlUmVzdWx0OiBzdHJpbmc7XG4gICAgaXNVc2VyTG9nZ2VkSW46IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIG9wZW5TdWdhckNvcHlyaWdodChzdWdhcmNvcHlyaWdodCkge1xuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKHN1Z2FyY29weXJpZ2h0LCB7XG4gICAgICAgICAgICBhcmlhTGFiZWxsZWRCeTogJ21vZGFsLWJhc2ljLXRpdGxlJyxcbiAgICAgICAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgICAgICAgc2l6ZTogJ2xnJ1xuICAgICAgICB9KS5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUmVzdWx0ID0gYENsb3NlZCB3aXRoOiAke3Jlc3VsdH1gO1xuICAgICAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUmVzdWx0ID0gYERpc21pc3NlZCAke3RoaXMuZ2V0RGlzbWlzc1JlYXNvbihyZWFzb24pfWA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9wZW5TdWl0ZUNvcHlyaWdodChzdWl0ZWNvcHlyaWdodCkge1xuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5vcGVuKHN1aXRlY29weXJpZ2h0LCB7XG4gICAgICAgICAgICBhcmlhTGFiZWxsZWRCeTogJ21vZGFsLWJhc2ljLXRpdGxlJyxcbiAgICAgICAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgICAgICAgc2l6ZTogJ2xnJ1xuICAgICAgICB9KS5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUmVzdWx0ID0gYENsb3NlZCB3aXRoOiAke3Jlc3VsdH1gO1xuICAgICAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlUmVzdWx0ID0gYERpc21pc3NlZCAke3RoaXMuZ2V0RGlzbWlzc1JlYXNvbihyZWFzb24pfWA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RGlzbWlzc1JlYXNvbihyZWFzb246IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChyZWFzb24gPT09IE1vZGFsRGlzbWlzc1JlYXNvbnMuRVNDKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2J5IHByZXNzaW5nIEVTQyc7XG4gICAgICAgIH0gZWxzZSBpZiAocmVhc29uID09PSBNb2RhbERpc21pc3NSZWFzb25zLkJBQ0tEUk9QX0NMSUNLKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2J5IGNsaWNraW5nIG9uIGEgYmFja2Ryb3AnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGB3aXRoOiAke3JlYXNvbn1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmFja1RvVG9wKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7IC8vIEZvciBTYWZhcmlcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7IC8vIEZvciBDaHJvbWUsIEZpcmVmb3gsIElFIGFuZCBPcGVyYVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmF1dGhTdWIgPSB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzVXNlckxvZ2dlZEluID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmF1dGhTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48IS0tIFN0YXJ0IG9mIGZvb3RlciBzZWN0aW9uIC0tPlxuPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICA8ZGl2IGNsYXNzPVwiY29weXJpZ2h0LWxpbmtzXCI+XG4gICAgPGEgKGNsaWNrKT1cIm9wZW5TdWl0ZUNvcHlyaWdodChzdWl0ZWNvcHlyaWdodClcIiBjbGFzcz1cImZvb3Rlci1saW5rXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgZGF0YS10YXJnZXQ9XCIuY29weXJpZ2h0LXN1aXRlY3JtXCI+XG4gICAgICAmY29weTsgU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXG4gICAgPC9hPlxuICAgIDxhIChjbGljayk9XCJvcGVuU3VnYXJDb3B5cmlnaHQoc3VnYXJjb3B5cmlnaHQpXCIgY2xhc3M9XCJmb290ZXItbGlua1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgIGRhdGEtdGFyZ2V0PVwiLmNvcHlyaWdodC1zdWdhcmNybVwiPlxuICAgICAgJmNvcHk7IFBvd2VyZWQgQnkgU3VnYXJDUk1cbiAgICA8L2E+XG4gIDwvZGl2PlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhpcy5pc1VzZXJMb2dnZWRJblwiPlxuICAgIDxkaXYgY2xhc3M9XCJiYWNrLXRvLXRvcFwiPlxuICAgICAgPGEgKGNsaWNrKT1cImJhY2tUb1RvcCgpXCIgY2xhc3M9XCJmb290ZXItbGlua1wiPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBCYWNrIFRvIFRvcFxuICAgICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwic2ljb24gYmFjay10b3AtaWNvblwiIGltYWdlPVwiYXJyb3dfdXBfZmlsbGVkXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG48IS0tIEVuZCBvZiBmb290ZXIgc2VjdGlvbiAtLT5cblxuPCEtLSBTdGFydCBvZiBjb3B5cmlnaHQgbW9kYWwgc2VjdGlvbiAtLT5cblxuPGRpdiBjbGFzcz1cImNvcHlyaWdodFwiPlxuXG4gICAgPCEtLSBTdGFydCBvZiBTdWdhckNSTSBDb3B5cmlnaHQgbm90aWNlIG1vZGFsIC0tPlxuXG4gICAgPG5nLXRlbXBsYXRlICNzdWdhcmNvcHlyaWdodCBsZXQtbW9kYWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvcHlyaWdodC1zdWdhcmNybVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPiZjb3B5OyBQb3dlcmVkIEJ5IFN1Z2FyQ1JNPC9oNT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm1vZGFsLmRpc21pc3MoJ0Nyb3NzIGNsaWNrJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJzaWNvblwiIGltYWdlPVwiaWNvbl9tb2RhbF9jbG9zZVwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgJmNvcHk7IDIwMDQtMjAxMyBTdWdhckNSTSBJbmMuIFRoZSBQcm9ncmFtIGlzIHByb3ZpZGVkIEFTIElTLCB3aXRob3V0XG4gICAgICAgICAgICAgICAgICAgIHdhcnJhbnR5LiBMaWNlbnNlZCB1bmRlciBBR1BMdjMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICAgICAgICAgICAgICAgICAgICBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIDMgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGluY2x1ZGluZyB0aGVcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbCBwZXJtaXNzaW9uIHNldCBmb3J0aCBpbiB0aGUgc291cmNlIGNvZGUgaGVhZGVyLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgU3VnYXJDUk0gaXMgYSB0cmFkZW1hcmsgb2YgU3VnYXJDUk0sIEluYy4gQWxsIG90aGVyIGNvbXBhbnkgYW5kXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QgbmFtZXMgbWF5IGJlIHRyYWRlbWFya3Mgb2YgdGhlIHJlc3BlY3RpdmUgY29tcGFuaWVzIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgd2hpY2ggdGhleSBhcmUgYXNzb2NpYXRlZC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLSBFbmQgb2YgU3VnYXJDUk0gQ29weXJpZ2h0IG5vdGljZSBtb2RhbCAtLT5cblxuICAgIDwhLS0gU3RhcnQgb2YgU3VpdGVDUk0gQ29weXJpZ2h0IG5vdGljZSBtb2RhbCAtLT5cblxuICAgIDxuZy10ZW1wbGF0ZSAjc3VpdGVjb3B5cmlnaHQgbGV0LW1vZGFsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3B5cmlnaHQtc3VpdGVjcm1cIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj4mY29weTsgU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNPC9oNT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm1vZGFsLmRpc21pc3MoJ0Nyb3NzIGNsaWNrJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJzaWNvblwiIGltYWdlPVwiaWNvbl9tb2RhbF9jbG9zZVwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgU3VpdGVDUk0gaGFzIGJlZW4gd3JpdHRlbiBhbmQgYXNzZW1ibGVkIGJ5IFNhbGVzQWdpbGl0eS4gVGhlIFByb2dyYW1cbiAgICAgICAgICAgICAgICAgICAgaXMgcHJvdmlkZWQgQVMgSVMsIHdpdGhvdXQgd2FycmFudHkuIExpY2Vuc2VkIHVuZGVyIEFHUEx2My5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gICAgICAgICAgICAgICAgICAgIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb25cbiAgICAgICAgICAgICAgICAgICAgMyBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgaW5jbHVkaW5nIHRoZVxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsIHBlcm1pc3Npb24gc2V0IGZvcnRoIGluIHRoZSBzb3VyY2UgY29kZSBoZWFkZXIuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBTdWl0ZUNSTSBpcyBhIHRyYWRlbWFyayBvZiBTYWxlc0FnaWxpdHkgTHRkLiBBbGwgb3RoZXIgY29tcGFueSBhbmRcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCBuYW1lcyBtYXkgYmUgdHJhZGVtYXJrcyBvZiB0aGUgcmVzcGVjdGl2ZSBjb21wYW5pZXMgd2l0aFxuICAgICAgICAgICAgICAgICAgICB3aGljaCB0aGV5IGFyZSBhc3NvY2lhdGVkLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tIEVuZCBvZiBTdWl0ZUNSTSBDb3B5cmlnaHQgbm90aWNlIG1vZGFsIC0tPlxuPC9kaXY+XG5cbjwhLS0gRW5kIG9mIGNvcHlyaWdodCBtb2RhbCBzZWN0aW9uIC0tPlxuIl19