/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { LanguageStore } from '../../../../store/language/language.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
import * as i4 from "../../../../components/label/label.component";
import * as i5 from "../../../../components/image/image.component";
function AdminCardComponent_div_1_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "a", 10)(2, "div", 11);
    i0.ɵɵelement(3, "scrm-image", 12)(4, "scrm-label", 13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const isFirst_r4 = ctx.first;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("border-top", isFirst_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("queryParams", item_r3 == null ? null : item_r3.params)("routerLink", item_r3.link)("title", ctx_r2.language.getFieldLabel(item_r3.descriptionKey, "administration"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("image", item_r3.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", item_r3.titleKey);
} }
function AdminCardComponent_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AdminCardComponent_div_1_ng_container_5_div_1_Template, 5, 7, "div", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.content.linkGroup);
} }
function AdminCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "h5", 4);
    i0.ɵɵelement(3, "scrm-label", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵtemplate(5, AdminCardComponent_div_1_ng_container_5_Template, 2, 1, "ng-container", 7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", ctx_r0.language.getFieldLabel(ctx_r0.content.descriptionLabelKey, "administration"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", ctx_r0.content.titleLabelKey);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.content.linkGroup);
} }
class AdminCardComponent {
    constructor(language) {
        this.language = language;
    }
    static { this.ɵfac = function AdminCardComponent_Factory(t) { return new (t || AdminCardComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminCardComponent, selectors: [["scrm-admin-card"]], inputs: { content: "content" }, decls: 2, vars: 1, consts: [[1, "widget-panel", "h-100", "shadow-sm"], ["class", "card h-100 panel-card border-0", 4, "ngIf"], [1, "card", "h-100", "panel-card", "border-0"], [1, "card-header"], [1, "card-title", "admin-card-title", "m-0", 3, "title"], ["module", "administration", 3, "labelKey"], [1, "card-body", "d-flex", "flex-column", "align-items-start"], [4, "ngIf"], ["class", "admin-card-link-box border-bottom w-100", 3, "border-top", 4, "ngFor", "ngForOf"], [1, "admin-card-link-box", "border-bottom", "w-100"], ["queryParamsHandling", "merge", 1, "card-link", "admin-card-link", 3, "queryParams", "routerLink", "title"], [1, "d-flex", "admin-card-link-wrapper", "align-items-center", "w-100", "p-1"], [1, "admin-card-icon", "sicon-2x", 3, "image"], ["module", "administration", 1, "admin-card-label", "pl-1", "flex-grow-1", 3, "labelKey"]], template: function AdminCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, AdminCardComponent_div_1_Template, 6, 3, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.content);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.RouterLink, i4.LabelComponent, i5.ImageComponent], encapsulation: 2 }); }
}
export { AdminCardComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminCardComponent, [{
        type: Component,
        args: [{ selector: 'scrm-admin-card', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"widget-panel h-100 shadow-sm\">\n    <div *ngIf=\"content\" class=\"card h-100 panel-card border-0\">\n        <div class=\"card-header\">\n            <h5 [title]=\"language.getFieldLabel(content.descriptionLabelKey, 'administration')\"\n                class=\"card-title admin-card-title m-0\">\n                <scrm-label [labelKey]=\"content.titleLabelKey\" module=\"administration\"></scrm-label>\n            </h5>\n        </div>\n        <div class=\"card-body d-flex flex-column align-items-start\">\n            <ng-container *ngIf=\"content.linkGroup\">\n                <div *ngFor=\"let item of content.linkGroup; let isFirst = first\" [class.border-top]=\"isFirst\"\n                     class=\"admin-card-link-box border-bottom w-100\">\n                    <a [queryParams]=\"item?.params\"\n                       [routerLink]=\"item.link\"\n                       [title]=\"language.getFieldLabel(item.descriptionKey, 'administration')\"\n                       class=\"card-link admin-card-link\"\n                       queryParamsHandling=\"merge\">\n                        <div class=\"d-flex admin-card-link-wrapper align-items-center w-100 p-1 \">\n                            <scrm-image [image]=\"item.icon\" class=\"admin-card-icon sicon-2x\"></scrm-image>\n                            <scrm-label [labelKey]=\"item.titleKey\"\n                                        class=\"admin-card-label pl-1 flex-grow-1\"\n                                        module=\"administration\">\n                            </scrm-label>\n                        </div>\n\n                    </a>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n\n" }]
    }], function () { return [{ type: i1.LanguageStore }]; }, { content: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvYWRtaW4vY29tcG9uZW50cy9hZG1pbi1jYXJkL2FkbWluLWNhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2FkbWluL2NvbXBvbmVudHMvYWRtaW4tY2FyZC9hZG1pbi1jYXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7Ozs7Ozs7O0lDV3hELDhCQUNxRCxZQUFBLGNBQUE7SUFPekMsaUNBQThFLHFCQUFBO0lBS2xGLGlCQUFNLEVBQUEsRUFBQTs7Ozs7SUFibUQsd0NBQTRCO0lBRXRGLGVBQTRCO0lBQTVCLHFFQUE0Qiw0QkFBQSxrRkFBQTtJQU1YLGVBQW1CO0lBQW5CLG9DQUFtQjtJQUNuQixlQUEwQjtJQUExQiwyQ0FBMEI7OztJQVZ0RCw2QkFBd0M7SUFDcEMsd0ZBZ0JNO0lBQ1YsMEJBQWU7OztJQWpCVyxlQUFzQjtJQUF0QixrREFBc0I7OztJQVR4RCw4QkFBNEQsYUFBQSxZQUFBO0lBSWhELGdDQUFvRjtJQUN4RixpQkFBSyxFQUFBO0lBRVQsOEJBQTREO0lBQ3hELDJGQWtCZTtJQUNuQixpQkFBTSxFQUFBOzs7SUF6QkUsZUFBK0U7SUFBL0UsMkdBQStFO0lBRW5FLGVBQWtDO0lBQWxDLHVEQUFrQztJQUluQyxlQUF1QjtJQUF2QiwrQ0FBdUI7O0FETmxELE1BS2Esa0JBQWtCO0lBRzNCLFlBQW1CLFFBQXVCO1FBQXZCLGFBQVEsR0FBUixRQUFRLENBQWU7SUFDMUMsQ0FBQzttRkFKUSxrQkFBa0I7b0VBQWxCLGtCQUFrQjtZQ1IvQiw4QkFBMEM7WUFDdEMsbUVBNEJNO1lBQ1YsaUJBQU07O1lBN0JJLGVBQWE7WUFBYixrQ0FBYTs7O1NET1Ysa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FMOUIsU0FBUzsyQkFDSSxpQkFBaUI7Z0VBS2xCLE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtBZG1pbkxpbmtHcm91cE1vZGVsfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9hZG1pbi1tZXRhZGF0YS9hZG1pbi1tZXRhZGF0YS5tb2RlbCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWFkbWluLWNhcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hZG1pbi1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbkNhcmRDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGNvbnRlbnQ6IEFkbWluTGlua0dyb3VwTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUpIHtcbiAgICB9XG5cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cblxuPGRpdiBjbGFzcz1cIndpZGdldC1wYW5lbCBoLTEwMCBzaGFkb3ctc21cIj5cbiAgICA8ZGl2ICpuZ0lmPVwiY29udGVudFwiIGNsYXNzPVwiY2FyZCBoLTEwMCBwYW5lbC1jYXJkIGJvcmRlci0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgPGg1IFt0aXRsZV09XCJsYW5ndWFnZS5nZXRGaWVsZExhYmVsKGNvbnRlbnQuZGVzY3JpcHRpb25MYWJlbEtleSwgJ2FkbWluaXN0cmF0aW9uJylcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC10aXRsZSBhZG1pbi1jYXJkLXRpdGxlIG0tMFwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJjb250ZW50LnRpdGxlTGFiZWxLZXlcIiBtb2R1bGU9XCJhZG1pbmlzdHJhdGlvblwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRlbnQubGlua0dyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb250ZW50LmxpbmtHcm91cDsgbGV0IGlzRmlyc3QgPSBmaXJzdFwiIFtjbGFzcy5ib3JkZXItdG9wXT1cImlzRmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhZG1pbi1jYXJkLWxpbmstYm94IGJvcmRlci1ib3R0b20gdy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgW3F1ZXJ5UGFyYW1zXT1cIml0ZW0/LnBhcmFtc1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cIml0ZW0ubGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJsYW5ndWFnZS5nZXRGaWVsZExhYmVsKGl0ZW0uZGVzY3JpcHRpb25LZXksICdhZG1pbmlzdHJhdGlvbicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWxpbmsgYWRtaW4tY2FyZC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZz1cIm1lcmdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFkbWluLWNhcmQtbGluay13cmFwcGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBwLTEgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgW2ltYWdlXT1cIml0ZW0uaWNvblwiIGNsYXNzPVwiYWRtaW4tY2FyZC1pY29uIHNpY29uLTJ4XCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJpdGVtLnRpdGxlS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFkbWluLWNhcmQtbGFiZWwgcGwtMSBmbGV4LWdyb3ctMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPVwiYWRtaW5pc3RyYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuIl19