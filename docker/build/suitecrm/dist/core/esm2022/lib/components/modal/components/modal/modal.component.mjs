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
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../close-button/close-button.component";
import * as i3 from "../../../label/label.component";
function ModalComponent_scrm_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-label", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("labelKey", ctx_r0.titleKey);
} }
function ModalComponent_scrm_close_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-close-button", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("config", ctx_r1.close);
} }
const _c0 = [[["", "modal-body", ""]], [["", "modal-footer", ""]]];
const _c1 = ["[modal-body]", "[modal-footer]"];
class ModalComponent {
    constructor() {
        this.klass = '';
        this.headerKlass = '';
        this.bodyKlass = '';
        this.footerKlass = '';
        this.titleKey = '';
        this.closable = false;
        this.close = {
            klass: ['btn', 'btn-outline-light', 'btn-sm']
        };
    }
    static { this.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["scrm-modal"]], inputs: { klass: "klass", headerKlass: "headerKlass", bodyKlass: "bodyKlass", footerKlass: "footerKlass", titleKey: "titleKey", closable: "closable", close: "close" }, ngContentSelectors: _c1, decls: 9, vars: 13, consts: [[1, "modal-title"], [3, "labelKey", 4, "ngIf"], [3, "config", 4, "ngIf"], [3, "labelKey"], [3, "config"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div")(1, "div")(2, "div", 0);
            i0.ɵɵtemplate(3, ModalComponent_scrm_label_3_Template, 1, 1, "scrm-label", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, ModalComponent_scrm_close_button_4_Template, 1, 1, "scrm-close-button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div");
            i0.ɵɵprojection(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div");
            i0.ɵɵprojection(8, 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.klass);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("modal-header ", ctx.headerKlass, " d-flex align-items-center");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.titleKey);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.closable);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("modal-body ", ctx.bodyKlass, "");
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("modal-footer ", ctx.footerKlass, "");
        } }, dependencies: [i1.NgIf, i2.CloseButtonComponent, i3.LabelComponent], encapsulation: 2 }); }
}
export { ModalComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{ selector: 'scrm-modal', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div [class]=\"klass\">\n    <div class=\"modal-header {{headerKlass}} d-flex align-items-center\">\n        <div class=\"modal-title\">\n            <scrm-label *ngIf=\"titleKey\" [labelKey]=\"titleKey\"></scrm-label>\n        </div>\n        <scrm-close-button *ngIf=\"closable\" [config]=\"close\"></scrm-close-button>\n    </div>\n\n    <div class=\"modal-body {{bodyKlass}}\">\n        <ng-content select=\"[modal-body]\"></ng-content>\n    </div>\n\n    <div class=\"modal-footer {{footerKlass}}\">\n        <ng-content select=\"[modal-footer]\"></ng-content>\n    </div>\n</div>\n" }]
    }], null, { klass: [{
            type: Input
        }], headerKlass: [{
            type: Input
        }], bodyKlass: [{
            type: Input
        }], footerKlass: [{
            type: Input
        }], titleKey: [{
            type: Input
        }], closable: [{
            type: Input
        }], close: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbW9kYWwvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDSTNDLGdDQUFnRTs7O0lBQW5DLDBDQUFxQjs7O0lBRXRELHVDQUF5RTs7O0lBQXJDLHFDQUFnQjs7OztBREg1RCxNQUthLGNBQWM7SUFMM0I7UUFPYSxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxhQUFRLEdBQVcsS0FBSyxDQUFDO1FBQ3pCLFVBQUssR0FBb0I7WUFDOUIsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsQ0FBQztTQUM3QixDQUFDO0tBRXhCOytFQVpZLGNBQWM7b0VBQWQsY0FBYzs7WUNQM0IsMkJBQXFCLFVBQUEsYUFBQTtZQUdULDZFQUFnRTtZQUNwRSxpQkFBTTtZQUNOLDJGQUF5RTtZQUM3RSxpQkFBTTtZQUVOLDJCQUFzQztZQUNsQyxrQkFBK0M7WUFDbkQsaUJBQU07WUFFTiwyQkFBMEM7WUFDdEMscUJBQWlEO1lBQ3JELGlCQUFNLEVBQUE7O1lBZEwsd0JBQWU7WUFDWCxlQUE4RDtZQUE5RCx5RkFBOEQ7WUFFOUMsZUFBYztZQUFkLG1DQUFjO1lBRVgsZUFBYztZQUFkLG1DQUFjO1lBR2pDLGVBQWdDO1lBQWhDLDJEQUFnQztZQUloQyxlQUFvQztZQUFwQywrREFBb0M7OztTRExoQyxjQUFjO3VGQUFkLGNBQWM7Y0FMMUIsU0FBUzsyQkFDSSxZQUFZO2dCQU1iLEtBQUs7a0JBQWIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0J1dHRvbkludGVyZmFjZX0gZnJvbSAnY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50e1xuXG4gICAgQElucHV0KCkga2xhc3MgPSAnJztcbiAgICBASW5wdXQoKSBoZWFkZXJLbGFzcyA9ICcnO1xuICAgIEBJbnB1dCgpIGJvZHlLbGFzcyA9ICcnO1xuICAgIEBJbnB1dCgpIGZvb3RlcktsYXNzID0gJyc7XG4gICAgQElucHV0KCkgdGl0bGVLZXkgPSAnJztcbiAgICBASW5wdXQoKSBjbG9zYWJsZTpib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgY2xvc2U6IEJ1dHRvbkludGVyZmFjZSA9IHtcbiAgICAgICAga2xhc3M6IFsnYnRuJywgJ2J0bi1vdXRsaW5lLWxpZ2h0JywgJ2J0bi1zbSddXG4gICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG5cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgW2NsYXNzXT1cImtsYXNzXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlciB7e2hlYWRlcktsYXNzfX0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgIDxzY3JtLWxhYmVsICpuZ0lmPVwidGl0bGVLZXlcIiBbbGFiZWxLZXldPVwidGl0bGVLZXlcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c2NybS1jbG9zZS1idXR0b24gKm5nSWY9XCJjbG9zYWJsZVwiIFtjb25maWddPVwiY2xvc2VcIj48L3Njcm0tY2xvc2UtYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHkge3tib2R5S2xhc3N9fVwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbW9kYWwtYm9keV1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyIHt7Zm9vdGVyS2xhc3N9fVwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbW9kYWwtZm9vdGVyXVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19