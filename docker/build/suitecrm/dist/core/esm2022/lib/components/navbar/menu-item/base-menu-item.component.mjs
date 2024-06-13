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
import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { Subject } from "rxjs";
import { AppStateStore } from "../../../store/app-state/app-state.store";
import { ModuleNavigation } from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/app-state/app-state.store";
import * as i2 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i3 from "@angular/common";
import * as i4 from "../sub-menu-recently-viewed/sub-menu-recently-viewed.component";
import * as i5 from "../sub-menu-favorites/sub-menu-favorites.component";
import * as i6 from "../menu-item-link/menu-item-link.component";
const _c0 = ["topLink"];
function BaseMenuItemComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BaseMenuItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseMenuItemComponent_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function BaseMenuItemComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BaseMenuItemComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseMenuItemComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function BaseMenuItemComponent_ng_template_2_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelement(1, "scrm-menu-item-link", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("sub-nav-link nav-link action-link");
    i0.ɵɵproperty("icon", sub_r11.icon)("link", sub_r11.link);
} }
function BaseMenuItemComponent_ng_template_2_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "scrm-sub-menu-recently-viewed", 13);
    i0.ɵɵlistener("click", function BaseMenuItemComponent_ng_template_2_div_5_ng_container_2_Template_scrm_sub_menu_recently_viewed_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "scrm-sub-menu-favorites", 13);
    i0.ɵɵlistener("click", function BaseMenuItemComponent_ng_template_2_div_5_ng_container_2_Template_scrm_sub_menu_favorites_click_2_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("module", ctx_r10.item.module)("config", ctx_r10.recentlyViewedConfig);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("module", ctx_r10.item.module)("config", ctx_r10.favoritesConfig);
} }
function BaseMenuItemComponent_ng_template_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function BaseMenuItemComponent_ng_template_2_div_5_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.hideDropdown()); });
    i0.ɵɵtemplate(1, BaseMenuItemComponent_ng_template_2_div_5_div_1_Template, 2, 4, "div", 10);
    i0.ɵɵtemplate(2, BaseMenuItemComponent_ng_template_2_div_5_ng_container_2_Template, 3, 4, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("show", ctx_r8.showDropdown())("hover-enabled", ctx_r8.hoverEnabled());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r8.item.submenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.item && ctx_r8.item.module);
} }
const _c1 = function (a2, a3, a4) { return { "top-nav-link": true, "nav-link-nongrouped": true, "dropdown-toggle": a2, "hover-enabled": a3, "nav-link-activated": a4 }; };
function BaseMenuItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3, 4)(2, "span", 5, 6);
    i0.ɵɵlistener("touchstart", function BaseMenuItemComponent_ng_template_2_Template_span_touchstart_2_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.onTouchStart()); })("touchend", function BaseMenuItemComponent_ng_template_2_Template_span_touchend_2_listener() { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.onTouchEnd()); })("click", function BaseMenuItemComponent_ng_template_2_Template_span_click_2_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.onClick($event)); });
    i0.ɵɵelement(4, "scrm-menu-item-link", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, BaseMenuItemComponent_ng_template_2_div_5_Template, 3, 6, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵclassMap(i0.ɵɵpureFunction3(5, _c1, ctx_r3.item.submenu.length, ctx_r3.hoverEnabled(), ctx_r3.showDropdown()));
    i0.ɵɵproperty("link", ctx_r3.item.link)("config", ctx_r3.topLinkConfig);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.item.submenu.length);
} }
class BaseMenuItemComponent {
    constructor(appStateStore, moduleNavigation) {
        this.appStateStore = appStateStore;
        this.moduleNavigation = moduleNavigation;
        this.index = 0;
        this.showDropdown = signal(false);
        this.hoverEnabled = signal(true);
        this.clickType = 'click';
        this.subs = [];
    }
    ngOnInit() {
        this.showRecentlyViewed = new Subject();
        this.showFavorites = new Subject();
        this.topLinkConfig = {
            onClick: (event) => {
            },
            onTouchStart: (event) => {
            }
        };
        this.recentlyViewedConfig = {
            onItemClick: (event) => {
                if (this.clickType === 'touch') {
                    this.hideDropdown();
                    this.clickType = 'click';
                }
            },
            onItemTouchStart: (event) => {
                this.clickType = 'touch';
            },
            onToggleDropdown: (showDropdown) => {
                if (showDropdown) {
                    this.showFavorites.next(false);
                }
            },
            showDropdown$: this.showRecentlyViewed.asObservable()
        };
        this.favoritesConfig = {
            onItemClick: (event) => {
                if (this.clickType === 'touch') {
                    this.hideDropdown();
                    this.clickType = 'click';
                }
            },
            onItemTouchStart: (event) => {
                this.clickType = 'touch';
            },
            onToggleDropdown: (showDropdown) => {
                if (showDropdown) {
                    this.showRecentlyViewed.next(false);
                }
            },
            showDropdown$: this.showFavorites.asObservable()
        };
        this.subs.push(this.appStateStore.activeNavbarDropdown$.subscribe((activeDropdown) => {
            if (this.index !== activeDropdown) {
                this.hideDropdown();
            }
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.showRecentlyViewed.unsubscribe();
        this.showFavorites.unsubscribe();
    }
    hideDropdown() {
        this.showDropdown.set(false);
        this.hoverEnabled.set(true);
    }
    navigate() {
        this.moduleNavigation.navigateUsingMenuItem(this.item);
    }
    onTopItemClick($event) {
        if (this.clickType === 'click') {
            this.appStateStore.resetActiveDropdown();
            this.navigate();
            return;
        }
        this.toggleDropdown();
        this.clickType = 'click';
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
    onTouchStart() {
        this.clickType = 'touch';
    }
    onTouchEnd() {
        this.clickType = 'touch';
    }
    onClick(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.onTopItemClick(event);
    }
    static { this.ɵfac = function BaseMenuItemComponent_Factory(t) { return new (t || BaseMenuItemComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore), i0.ɵɵdirectiveInject(i2.ModuleNavigation)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMenuItemComponent, selectors: [["scrm-base-menu-item"]], viewQuery: function BaseMenuItemComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.topLink = _t.first);
        } }, inputs: { item: "item", index: "index" }, decls: 4, vars: 2, consts: [[4, "ngIf"], ["menuItem", ""], [4, "ngTemplateOutlet"], [1, "menu-item-wrapper"], ["menuItemWrapper", ""], ["data-target", ".navbar-collapse", "data-toggle", "collapse", 3, "touchstart", "touchend", "click"], ["topLink", ""], [3, "link", "config"], ["aria-labelledby", "navbarDropdownMenuLink", "class", "dropdown-menu submenu", 3, "show", "hover-enabled", "click", 4, "ngIf"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "submenu", 3, "click"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], [3, "icon", "link"], [3, "module", "config", "click"]], template: function BaseMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseMenuItemComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            i0.ɵɵtemplate(1, BaseMenuItemComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
            i0.ɵɵtemplate(2, BaseMenuItemComponent_ng_template_2_Template, 6, 9, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.hoverEnabled());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.hoverEnabled());
        } }, dependencies: [i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i4.SubMenuRecentlyViewedComponent, i5.SubMenuFavoritesComponent, i6.MenuItemLinkComponent], encapsulation: 2 }); }
}
export { BaseMenuItemComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMenuItemComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-menu-item', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"hoverEnabled()\">\n    <ng-container *ngTemplateOutlet=\"menuItem\"></ng-container>\n</ng-container>\n<ng-container *ngIf=\"!hoverEnabled()\">\n    <ng-container *ngTemplateOutlet=\"menuItem\"></ng-container>\n</ng-container>\n\n<ng-template #menuItem>\n    <div class=\"menu-item-wrapper\" #menuItemWrapper>\n        <span data-target=\".navbar-collapse\" data-toggle=\"collapse\" #topLink\n              (touchstart)=\"onTouchStart()\"\n              (touchend)=\"onTouchEnd()\"\n              (click)=\"onClick($event)\"\n        >\n                <scrm-menu-item-link [class]=\"{\n                                            'top-nav-link': true,\n                                            'nav-link-nongrouped': true,\n                                            'dropdown-toggle': item.submenu.length,\n                                            'hover-enabled': hoverEnabled(),\n                                            'nav-link-activated': showDropdown()\n                                        }\"\n                                     [link]=\"item.link\"\n                                     [config]=\"this.topLinkConfig\">\n                </scrm-menu-item-link>\n        </span>\n\n        <div (click)=\"hideDropdown()\"\n             aria-labelledby=\"navbarDropdownMenuLink\"\n             *ngIf=\"item.submenu.length\"\n             class=\"dropdown-menu submenu\"\n             [class.show]=\"showDropdown()\"\n             [class.hover-enabled]=\"hoverEnabled()\">\n\n            <div *ngFor=\"let sub of item.submenu\" class=\"nav-item\">\n\n                <scrm-menu-item-link\n                        [class]=\"'sub-nav-link nav-link action-link'\"\n                        [icon]=\"sub.icon\"\n                        [link]=\"sub.link\">\n                </scrm-menu-item-link>\n\n            </div>\n\n            <ng-container *ngIf=\"item && item.module\">\n                <scrm-sub-menu-recently-viewed\n                        [module]=\"item.module\"\n                        [config]=\"recentlyViewedConfig\"\n                        (click)=\"$event.stopPropagation();\">\n\n                </scrm-sub-menu-recently-viewed>\n                <scrm-sub-menu-favorites\n                        [module]=\"item.module\"\n                        [config]=\"favoritesConfig\"\n                        (click)=\"$event.stopPropagation()\"></scrm-sub-menu-favorites>\n            </ng-container>\n        </div>\n    </div>\n</ng-template>\n" }]
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.ModuleNavigation }]; }, { item: [{
            type: Input
        }], index: [{
            type: Input
        }], topLink: [{
            type: ViewChild,
            args: ['topLink']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL21lbnUtaXRlbS9iYXNlLW1lbnUtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1pdGVtL2Jhc2UtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFDLE9BQU8sRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDdkUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMEVBQTBFLENBQUM7Ozs7Ozs7Ozs7SUNGdEcsd0JBQTBEOzs7SUFEOUQsNkJBQXFDO0lBQ2pDLHVHQUEwRDtJQUM5RCwwQkFBZTs7OztJQURJLGVBQTBCO0lBQTFCLHNDQUEwQjs7O0lBR3pDLHdCQUEwRDs7O0lBRDlELDZCQUFzQztJQUNsQyx1R0FBMEQ7SUFDOUQsMEJBQWU7Ozs7SUFESSxlQUEwQjtJQUExQixzQ0FBMEI7OztJQTZCakMsK0JBQXVEO0lBRW5ELDBDQUlzQjtJQUUxQixpQkFBTTs7O0lBTE0sZUFBNkM7SUFBN0Msa0RBQTZDO0lBQzdDLG1DQUFpQixzQkFBQTs7O0lBTTdCLDZCQUEwQztJQUN0Qyx5REFHNEM7SUFBcEMsa0tBQVMsd0JBQXdCLElBQUU7SUFFM0MsaUJBQWdDO0lBQ2hDLG1EQUcyQztJQUFuQyw0SkFBUyx3QkFB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bnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBzaWduYWwsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lbnVJdGVtfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtTdWJqZWN0LCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlXCI7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7TWVudUl0ZW1MaW5rQ29uZmlnfSBmcm9tIFwiLi4vbWVudS1pdGVtLWxpbmsvbWVudS1pdGVtLWxpbmstY29uZmlnLm1vZGVsXCI7XG5pbXBvcnQge1N1Yk1lbnVSZWNlbnRseVZpZXdlZENvbmZpZ30gZnJvbSBcIi4uL3N1Yi1tZW51LXJlY2VudGx5LXZpZXdlZC9zdWItbWVudS1yZWNlbnRseS12aWV3ZWQtY29uZmlnLm1vZGVsXCI7XG5pbXBvcnQge1N1Yk1lbnVGYXZvcml0ZXNDb25maWd9IGZyb20gXCIuLi9zdWItbWVudS1mYXZvcml0ZXMvc3ViLW1lbnUtZmF2b3JpdGVzLWNvbmZpZy5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYmFzZS1tZW51LWl0ZW0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYXNlLW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBCYXNlTWVudUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgaXRlbTogTWVudUl0ZW07XG4gICAgQElucHV0KCkgaW5kZXg6IG51bWJlciA9IDA7XG4gICAgQFZpZXdDaGlsZCgndG9wTGluaycpIHRvcExpbms6IEVsZW1lbnRSZWY7XG5cbiAgICBzaG93RHJvcGRvd24gPSBzaWduYWw8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGhvdmVyRW5hYmxlZCA9IHNpZ25hbDxib29sZWFuPih0cnVlKTtcbiAgICB0b3BMaW5rQ29uZmlnOiBNZW51SXRlbUxpbmtDb25maWc7XG4gICAgcmVjZW50bHlWaWV3ZWRDb25maWc6IFN1Yk1lbnVSZWNlbnRseVZpZXdlZENvbmZpZztcbiAgICBmYXZvcml0ZXNDb25maWc6IFN1Yk1lbnVGYXZvcml0ZXNDb25maWc7XG4gICAgc2hvd1JlY2VudGx5Vmlld2VkOiBTdWJqZWN0PGJvb2xlYW4+O1xuICAgIHNob3dGYXZvcml0ZXM6IFN1YmplY3Q8Ym9vbGVhbj47XG4gICAgY2xpY2tUeXBlOiBzdHJpbmcgPSAnY2xpY2snO1xuXG4gICAgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcHBTdGF0ZVN0b3JlOiBBcHBTdGF0ZVN0b3JlLCBwcm90ZWN0ZWQgbW9kdWxlTmF2aWdhdGlvbjogTW9kdWxlTmF2aWdhdGlvbikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuc2hvd1JlY2VudGx5Vmlld2VkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy5zaG93RmF2b3JpdGVzID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAgICAgICB0aGlzLnRvcExpbmtDb25maWcgPSB7XG4gICAgICAgICAgICBvbkNsaWNrOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIE1lbnVJdGVtTGlua0NvbmZpZ1xuXG4gICAgICAgIHRoaXMucmVjZW50bHlWaWV3ZWRDb25maWcgPSB7XG4gICAgICAgICAgICBvbkl0ZW1DbGljazogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tUeXBlID09PSAndG91Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tUeXBlID0gJ2NsaWNrJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25JdGVtVG91Y2hTdGFydDogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja1R5cGUgPSAndG91Y2gnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uVG9nZ2xlRHJvcGRvd246IChzaG93RHJvcGRvd24pOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2hvd0Ryb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Zhdm9yaXRlcy5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0Ryb3Bkb3duJDogdGhpcy5zaG93UmVjZW50bHlWaWV3ZWQuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgfSBhcyBTdWJNZW51UmVjZW50bHlWaWV3ZWRDb25maWdcblxuICAgICAgICB0aGlzLmZhdm9yaXRlc0NvbmZpZyA9IHtcbiAgICAgICAgICAgIG9uSXRlbUNsaWNrOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGlja1R5cGUgPT09ICd0b3VjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlRHJvcGRvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja1R5cGUgPSAnY2xpY2snO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkl0ZW1Ub3VjaFN0YXJ0OiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrVHlwZSA9ICd0b3VjaCc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Ub2dnbGVEcm9wZG93bjogKHNob3dEcm9wZG93bik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzaG93RHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVjZW50bHlWaWV3ZWQubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dEcm9wZG93biQ6IHRoaXMuc2hvd0Zhdm9yaXRlcy5hc09ic2VydmFibGUoKVxuICAgICAgICB9IGFzIFN1Yk1lbnVGYXZvcml0ZXNDb25maWdcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmFwcFN0YXRlU3RvcmUuYWN0aXZlTmF2YmFyRHJvcGRvd24kLnN1YnNjcmliZShcbiAgICAgICAgICAgIChhY3RpdmVEcm9wZG93bjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggIT09IGFjdGl2ZURyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5zaG93UmVjZW50bHlWaWV3ZWQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5zaG93RmF2b3JpdGVzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaGlkZURyb3Bkb3duKCkge1xuICAgICAgICB0aGlzLnNob3dEcm9wZG93bi5zZXQoZmFsc2UpO1xuICAgICAgICB0aGlzLmhvdmVyRW5hYmxlZC5zZXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9kdWxlTmF2aWdhdGlvbi5uYXZpZ2F0ZVVzaW5nTWVudUl0ZW0odGhpcy5pdGVtKTtcbiAgICB9XG5cbiAgICBvblRvcEl0ZW1DbGljaygkZXZlbnQ6IFBvaW50ZXJFdmVudCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmNsaWNrVHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnJlc2V0QWN0aXZlRHJvcGRvd24oKTtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24oKTtcbiAgICAgICAgdGhpcy5jbGlja1R5cGUgPSAnY2xpY2snO1xuICAgIH1cblxuICAgIHRvZ2dsZURyb3Bkb3duKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNob3dEcm9wZG93bi5zZXQoIXRoaXMuc2hvd0Ryb3Bkb3duKCkpO1xuICAgICAgICBpZiAodGhpcy5zaG93RHJvcGRvd24oKSkge1xuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnNldEFjdGl2ZURyb3Bkb3duKHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5ob3ZlckVuYWJsZWQuc2V0KGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS5yZXNldEFjdGl2ZURyb3Bkb3duKCk7XG4gICAgICAgICAgICB0aGlzLmhvdmVyRW5hYmxlZC5zZXQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xpY2tUeXBlID0gJ3RvdWNoJztcbiAgICB9XG5cbiAgICBvblRvdWNoRW5kKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsaWNrVHlwZSA9ICd0b3VjaCc7XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMub25Ub3BJdGVtQ2xpY2soZXZlbnQpXG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImhvdmVyRW5hYmxlZCgpXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1lbnVJdGVtXCI+PC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhaG92ZXJFbmFibGVkKClcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWVudUl0ZW1cIj48L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuXG48bmctdGVtcGxhdGUgI21lbnVJdGVtPlxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0td3JhcHBlclwiICNtZW51SXRlbVdyYXBwZXI+XG4gICAgICAgIDxzcGFuIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiAjdG9wTGlua1xuICAgICAgICAgICAgICAodG91Y2hzdGFydCk9XCJvblRvdWNoU3RhcnQoKVwiXG4gICAgICAgICAgICAgICh0b3VjaGVuZCk9XCJvblRvdWNoRW5kKClcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbS1saW5rIFtjbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0b3AtbmF2LWxpbmsnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmF2LWxpbmstbm9uZ3JvdXBlZCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkcm9wZG93bi10b2dnbGUnOiBpdGVtLnN1Ym1lbnUubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG92ZXItZW5hYmxlZCc6IGhvdmVyRW5hYmxlZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmF2LWxpbmstYWN0aXZhdGVkJzogc2hvd0Ryb3Bkb3duKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGlua109XCJpdGVtLmxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwidGhpcy50b3BMaW5rQ29uZmlnXCI+XG4gICAgICAgICAgICAgICAgPC9zY3JtLW1lbnUtaXRlbS1saW5rPlxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPGRpdiAoY2xpY2spPVwiaGlkZURyb3Bkb3duKClcIlxuICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIlxuICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS5zdWJtZW51Lmxlbmd0aFwiXG4gICAgICAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1tZW51IHN1Ym1lbnVcIlxuICAgICAgICAgICAgIFtjbGFzcy5zaG93XT1cInNob3dEcm9wZG93bigpXCJcbiAgICAgICAgICAgICBbY2xhc3MuaG92ZXItZW5hYmxlZF09XCJob3ZlckVuYWJsZWQoKVwiPlxuXG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBzdWIgb2YgaXRlbS5zdWJtZW51XCIgY2xhc3M9XCJuYXYtaXRlbVwiPlxuXG4gICAgICAgICAgICAgICAgPHNjcm0tbWVudS1pdGVtLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCInc3ViLW5hdi1saW5rIG5hdi1saW5rIGFjdGlvbi1saW5rJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbaWNvbl09XCJzdWIuaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbGlua109XCJzdWIubGlua1wiPlxuICAgICAgICAgICAgICAgIDwvc2NybS1tZW51LWl0ZW0tbGluaz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtICYmIGl0ZW0ubW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tc3ViLW1lbnUtcmVjZW50bHktdmlld2VkXG4gICAgICAgICAgICAgICAgICAgICAgICBbbW9kdWxlXT1cIml0ZW0ubW9kdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwicmVjZW50bHlWaWV3ZWRDb25maWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcIj5cblxuICAgICAgICAgICAgICAgIDwvc2NybS1zdWItbWVudS1yZWNlbnRseS12aWV3ZWQ+XG4gICAgICAgICAgICAgICAgPHNjcm0tc3ViLW1lbnUtZmF2b3JpdGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBbbW9kdWxlXT1cIml0ZW0ubW9kdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiZmF2b3JpdGVzQ29uZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj48L3Njcm0tc3ViLW1lbnUtZmF2b3JpdGVzPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==