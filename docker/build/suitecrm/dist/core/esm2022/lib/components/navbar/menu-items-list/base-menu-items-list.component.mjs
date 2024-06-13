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
import { AppStateStore } from "../../../store/app-state/app-state.store";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/app-state/app-state.store";
import * as i2 from "@angular/common";
import * as i3 from "../../label/label.component";
import * as i4 from "../menu-item-link/menu-item-link.component";
const _c0 = function (a1) { return { "hover-enabled": true, "nav-link-activated": a1 }; };
function BaseMenuItemsListComponent_ul_0_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵlistener("click", function BaseMenuItemsListComponent_ul_0_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.toggleDropdown()); });
    i0.ɵɵelement(1, "scrm-label", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(i0.ɵɵpureFunction1(3, _c0, ctx_r1.showDropdown()));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", ctx_r1.labelKey);
} }
const _c1 = function (a1) { return { "hover-enabled": false, "nav-link-activated": a1 }; };
function BaseMenuItemsListComponent_ul_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵlistener("click", function BaseMenuItemsListComponent_ul_0_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.toggleDropdown()); });
    i0.ɵɵelement(1, "scrm-label", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(i0.ɵɵpureFunction1(3, _c1, ctx_r2.showDropdown()));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", ctx_r2.labelKey);
} }
function BaseMenuItemsListComponent_ul_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "scrm-menu-item-link", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("nav-link action-link");
    i0.ɵɵproperty("link", item_r8.link);
} }
function BaseMenuItemsListComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 1)(1, "li", 2);
    i0.ɵɵtemplate(2, BaseMenuItemsListComponent_ul_0_a_2_Template, 2, 5, "a", 3);
    i0.ɵɵtemplate(3, BaseMenuItemsListComponent_ul_0_a_3_Template, 2, 5, "a", 3);
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵlistener("click", function BaseMenuItemsListComponent_ul_0_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.hideDropdown()); });
    i0.ɵɵtemplate(5, BaseMenuItemsListComponent_ul_0_div_5_Template, 2, 3, "div", 5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.hoverEnabled());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.hoverEnabled());
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("show", ctx_r0.showDropdown())("hover-enabled", ctx_r0.hoverEnabled());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.items);
} }
class BaseMenuItemsListComponent {
    constructor(appStateStore) {
        this.appStateStore = appStateStore;
        this.showDropdown = signal(true);
        this.hoverEnabled = signal(true);
        this.allowHover = signal(true);
        this.isTouchDevice = signal(false);
        this.subs = [];
    }
    ngOnInit() {
        this.subs.push(this.appStateStore.activeNavbarDropdown$.subscribe((activeDropdown) => {
            if (this.index !== activeDropdown) {
                this.hideDropdown();
            }
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    hideDropdown() {
        this.showDropdown.set(false);
        this.hoverEnabled.set(true);
    }
    toggleDropdown() {
        this.showDropdown.set(!this.showDropdown());
        if (this.showDropdown()) {
            this.appStateStore.setActiveDropdown(this.index);
            this.hoverEnabled.set(false);
        }
        else {
            this.appStateStore.resetActiveDropdown();
            this.hoverEnabled.set(true);
        }
    }
    static { this.ɵfac = function BaseMenuItemsListComponent_Factory(t) { return new (t || BaseMenuItemsListComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMenuItemsListComponent, selectors: [["scrm-base-menu-items-list"]], inputs: { items: "items", labelKey: "labelKey", index: "index" }, decls: 1, vars: 1, consts: [["class", "navbar-list navbar-nav nav-collapsed-items", 4, "ngIf"], [1, "navbar-list", "navbar-nav", "nav-collapsed-items"], [1, "top-nav", "nav-item", "dropdown", "non-grouped"], ["class", "nav-link-nongrouped dropdown-toggle", 3, "class", "click", 4, "ngIf"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "more-menu", "submenu", 3, "click"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-link-nongrouped", "dropdown-toggle", 3, "click"], [3, "labelKey"], [1, "nav-item"], [3, "link"]], template: function BaseMenuItemsListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseMenuItemsListComponent_ul_0_Template, 6, 7, "ul", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.items && ctx.items.length > 0);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.LabelComponent, i4.MenuItemLinkComponent], encapsulation: 2 }); }
}
export { BaseMenuItemsListComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMenuItemsListComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-menu-items-list', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ul *ngIf=\"items && items.length > 0\" class=\"navbar-list navbar-nav nav-collapsed-items\">\n\n    <li class=\"top-nav nav-item dropdown non-grouped\">\n\n        <a class=\"nav-link-nongrouped dropdown-toggle\" *ngIf=\"hoverEnabled()\"\n           [class]=\"{\n               'hover-enabled': true,\n               'nav-link-activated': showDropdown()\n           }\"\n           (click)=\"toggleDropdown()\">\n            <scrm-label [labelKey]=\"labelKey\"></scrm-label>\n        </a>\n\n        <a class=\"nav-link-nongrouped dropdown-toggle\" *ngIf=\"!hoverEnabled()\"\n           [class]=\"{\n               'hover-enabled':false,\n               'nav-link-activated': showDropdown()\n           }\"\n           (click)=\"toggleDropdown()\">\n            <scrm-label [labelKey]=\"labelKey\"></scrm-label>\n        </a>\n\n        <div aria-labelledby=\"navbarDropdownMenuLink\"\n             (click)=\"hideDropdown()\"\n             class=\"dropdown-menu more-menu submenu\"\n             [class.show]=\"showDropdown()\"\n             [class.hover-enabled]=\"hoverEnabled()\"\n        >\n            <div *ngFor=\"let item of items\" class=\"nav-item\">\n                <scrm-menu-item-link [class]=\"'nav-link action-link'\" [link]=\"item.link\">\n                </scrm-menu-item-link>\n            </div>\n        </div>\n    </li>\n</ul>\n\n" }]
    }], function () { return [{ type: i1.AppStateStore }]; }, { items: [{
            type: Input
        }], labelKey: [{
            type: Input
        }], index: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LWl0ZW1zLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL21lbnUtaXRlbXMtbGlzdC9iYXNlLW1lbnUtaXRlbXMtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1pdGVtcy1saXN0L2Jhc2UtbWVudS1pdGVtcy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7SUNFL0QsNEJBSzhCO0lBQTNCLHNLQUFTLGVBQUEsdUJBQWdCLENBQUEsSUFBQztJQUN6QixnQ0FBK0M7SUFDbkQsaUJBQUk7OztJQU5ELGdFQUdFO0lBRVcsZUFBcUI7SUFBckIsMENBQXFCOzs7OztJQUdyQyw0QkFLOEI7SUFBM0Isc0tBQVMsZUFBQSx1QkFBZ0IsQ0FBQSxJQUFDO0lBQ3pCLGdDQUErQztJQUNuRCxpQkFBSTs7O0lBTkQsZ0VBR0U7SUFFVyxlQUFxQjtJQUFyQiwwQ0FBcUI7OztJQVNqQyw4QkFBaUQ7SUFDN0MseUNBQ3NCO0lBQzFCLGlCQUFNOzs7SUFGbUIsZUFBZ0M7SUFBaEMscUNBQWdDO0lBQUMsbUNBQWtCOzs7O0lBN0J4Riw2QkFBeUYsWUFBQTtJQUlqRiw0RUFPSTtJQUVKLDRFQU9JO0lBRUosOEJBS0M7SUFKSSxvS0FBUyxlQUFBLHFCQUFjLENBQUEsSUFBQztJQUt6QixnRkFHTTtJQUNWLGlCQUFNLEVBQUEsRUFBQTs7O0lBNUIwQyxlQUFvQjtJQUFwQiw0Q0FBb0I7SUFTcEIsZUFBcUI7SUFBckIsNkNBQXFCO0lBWWhFLGVBQTZCO0lBQTdCLDZDQUE2Qix3Q0FBQTtJQUdSLGVBQVE7SUFBUixzQ0FBUTs7QUR4QjFDLE1BS2EsMEJBQTBCO0lBWW5DLFlBQXNCLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBUGxELGlCQUFZLEdBQUcsTUFBTSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQ3JDLGlCQUFZLEdBQUcsTUFBTSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQ3JDLGVBQVUsR0FBRyxNQUFNLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxNQUFNLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFdkMsU0FBSSxHQUFtQixFQUFFLENBQUM7SUFHMUIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FDN0QsQ0FBQyxjQUFzQixFQUFFLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLGNBQWMsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQyxDQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxjQUFjO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQzsyRkEzQ1EsMEJBQTBCO29FQUExQiwwQkFBMEI7WUNUdkMseUVBa0NLOztZQWxDQSx3REFBK0I7OztTRFN2QiwwQkFBMEI7dUZBQTFCLDBCQUEwQjtjQUx0QyxTQUFTOzJCQUNJLDJCQUEyQjtnRUFLNUIsS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBzaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZW51SXRlbX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYmFzZS1tZW51LWl0ZW1zLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYXNlLW1lbnUtaXRlbXMtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBCYXNlTWVudUl0ZW1zTGlzdENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgaXRlbXM6IE1lbnVJdGVtW107XG4gICAgQElucHV0KCkgbGFiZWxLZXk6IHN0cmluZztcbiAgICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gICAgc2hvd0Ryb3Bkb3duID0gc2lnbmFsPGJvb2xlYW4+KHRydWUpO1xuICAgIGhvdmVyRW5hYmxlZCA9IHNpZ25hbDxib29sZWFuPih0cnVlKTtcbiAgICBhbGxvd0hvdmVyID0gc2lnbmFsPGJvb2xlYW4+KHRydWUpO1xuICAgIGlzVG91Y2hEZXZpY2UgPSBzaWduYWw8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gICAgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcHBTdGF0ZVN0b3JlOiBBcHBTdGF0ZVN0b3JlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuYXBwU3RhdGVTdG9yZS5hY3RpdmVOYXZiYXJEcm9wZG93biQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKGFjdGl2ZURyb3Bkb3duOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbmRleCAhPT0gYWN0aXZlRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlRHJvcGRvd24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIGhpZGVEcm9wZG93bigpIHtcbiAgICAgICAgdGhpcy5zaG93RHJvcGRvd24uc2V0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5ob3ZlckVuYWJsZWQuc2V0KHRydWUpO1xuICAgIH1cblxuICAgIHRvZ2dsZURyb3Bkb3duKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNob3dEcm9wZG93bi5zZXQoIXRoaXMuc2hvd0Ryb3Bkb3duKCkpO1xuICAgICAgICBpZiAodGhpcy5zaG93RHJvcGRvd24oKSkge1xuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnNldEFjdGl2ZURyb3Bkb3duKHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5ob3ZlckVuYWJsZWQuc2V0KGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS5yZXNldEFjdGl2ZURyb3Bkb3duKCk7XG4gICAgICAgICAgICB0aGlzLmhvdmVyRW5hYmxlZC5zZXQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48dWwgKm5nSWY9XCJpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwXCIgY2xhc3M9XCJuYXZiYXItbGlzdCBuYXZiYXItbmF2IG5hdi1jb2xsYXBzZWQtaXRlbXNcIj5cblxuICAgIDxsaSBjbGFzcz1cInRvcC1uYXYgbmF2LWl0ZW0gZHJvcGRvd24gbm9uLWdyb3VwZWRcIj5cblxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rLW5vbmdyb3VwZWQgZHJvcGRvd24tdG9nZ2xlXCIgKm5nSWY9XCJob3ZlckVuYWJsZWQoKVwiXG4gICAgICAgICAgIFtjbGFzc109XCJ7XG4gICAgICAgICAgICAgICAnaG92ZXItZW5hYmxlZCc6IHRydWUsXG4gICAgICAgICAgICAgICAnbmF2LWxpbmstYWN0aXZhdGVkJzogc2hvd0Ryb3Bkb3duKClcbiAgICAgICAgICAgfVwiXG4gICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVEcm9wZG93bigpXCI+XG4gICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwibGFiZWxLZXlcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rLW5vbmdyb3VwZWQgZHJvcGRvd24tdG9nZ2xlXCIgKm5nSWY9XCIhaG92ZXJFbmFibGVkKClcIlxuICAgICAgICAgICBbY2xhc3NdPVwie1xuICAgICAgICAgICAgICAgJ2hvdmVyLWVuYWJsZWQnOmZhbHNlLFxuICAgICAgICAgICAgICAgJ25hdi1saW5rLWFjdGl2YXRlZCc6IHNob3dEcm9wZG93bigpXG4gICAgICAgICAgIH1cIlxuICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlRHJvcGRvd24oKVwiPlxuICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cImxhYmVsS2V5XCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGRpdiBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93bk1lbnVMaW5rXCJcbiAgICAgICAgICAgICAoY2xpY2spPVwiaGlkZURyb3Bkb3duKClcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBtb3JlLW1lbnUgc3VibWVudVwiXG4gICAgICAgICAgICAgW2NsYXNzLnNob3ddPVwic2hvd0Ryb3Bkb3duKClcIlxuICAgICAgICAgICAgIFtjbGFzcy5ob3Zlci1lbmFibGVkXT1cImhvdmVyRW5hYmxlZCgpXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8c2NybS1tZW51LWl0ZW0tbGluayBbY2xhc3NdPVwiJ25hdi1saW5rIGFjdGlvbi1saW5rJ1wiIFtsaW5rXT1cIml0ZW0ubGlua1wiPlxuICAgICAgICAgICAgICAgIDwvc2NybS1tZW51LWl0ZW0tbGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuPC91bD5cblxuIl19