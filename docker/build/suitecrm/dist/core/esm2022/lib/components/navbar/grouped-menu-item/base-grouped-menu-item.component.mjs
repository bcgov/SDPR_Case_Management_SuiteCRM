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
import { Subject } from "rxjs";
import { AppStateStore } from "../../../store/app-state/app-state.store";
import { ModuleNavigation } from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/app-state/app-state.store";
import * as i2 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i3 from "@angular/common";
import * as i4 from "../menu-item/menu-item.component";
import * as i5 from "../sub-menu-recently-viewed/sub-menu-recently-viewed.component";
import * as i6 from "../sub-menu-favorites/sub-menu-favorites.component";
import * as i7 from "../menu-item-link/menu-item-link.component";
function BaseGroupedMenuItemComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BaseGroupedMenuItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseGroupedMenuItemComponent_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function BaseGroupedMenuItemComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BaseGroupedMenuItemComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseGroupedMenuItemComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
const _c0 = function (a0) { return { "nav-link-activated": a0 }; };
function BaseGroupedMenuItemComponent_ng_template_2_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵlistener("click", function BaseGroupedMenuItemComponent_ng_template_2_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.toggleDropdown()); });
    i0.ɵɵelementStart(1, "a", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(i0.ɵɵpureFunction1(5, _c0, ctx_r7.showDropdown()));
    i0.ɵɵclassProp("hover-enabled", ctx_r7.hoverEnabled());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.item.link.label, " ");
} }
function BaseGroupedMenuItemComponent_ng_template_2_ul_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 11)(1, "li", 12);
    i0.ɵɵelement(2, "scrm-menu-item", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("item", ctx_r8.item);
} }
function BaseGroupedMenuItemComponent_ng_template_2_li_5_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 19)(1, "scrm-menu-item-link", 20);
    i0.ɵɵlistener("click", function BaseGroupedMenuItemComponent_ng_template_2_li_5_ul_2_li_1_Template_scrm_menu_item_link_click_1_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r18.hideDropdown()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subitem_r17 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("submenu-nav-link nav-link action-link");
    i0.ɵɵproperty("icon", subitem_r17.icon)("link", subitem_r17.link);
} }
function BaseGroupedMenuItemComponent_ng_template_2_li_5_ul_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "scrm-sub-menu-recently-viewed", 21);
    i0.ɵɵlistener("click", function BaseGroupedMenuItemComponent_ng_template_2_li_5_ul_2_ng_container_2_Template_scrm_sub_menu_recently_viewed_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "scrm-sub-menu-favorites", 21);
    i0.ɵɵlistener("click", function BaseGroupedMenuItemComponent_ng_template_2_li_5_ul_2_ng_container_2_Template_scrm_sub_menu_favorites_click_2_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r12 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("module", sub_r12.module)("config", ctx_r16.recentlyViewedConfig);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("module", sub_r12.module)("config", ctx_r16.favoritesConfig);
} }
function BaseGroupedMenuItemComponent_ng_template_2_li_5_ul_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 17);
    i0.ɵɵlistener("click", function BaseGroupedMenuItemComponent_ng_template_2_li_5_ul_2_Template_ul_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r23.hideDropdown()); });
    i0.ɵɵtemplate(1, BaseGroupedMenuItemComponent_ng_template_2_li_5_ul_2_li_1_Template, 2, 4, "li", 18);
    i0.ɵɵtemplate(2, BaseGroupedMenuItemComponent_ng_template_2_li_5_ul_2_ng_container_2_Template, 3, 4, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const sub_r12 = ctx_r25.$implicit;
    const i_r13 = ctx_r25.index;
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("rounded-0", sub_r12.submenu && sub_r12.submenu.length === 1)("active", ctx_r14.showSubDropdown[i_r13]());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", sub_r12.submenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", sub_r12 && sub_r12.module);
} }
const _c1 = function (a3, a4) { return { "sub-nav-link": true, "nav-link": true, "action-link": true, "dropdown-item": a3, "dropdown-toggle": a4 }; };
function BaseGroupedMenuItemComponent_ng_template_2_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 14);
    i0.ɵɵelement(1, "scrm-menu-item-link", 15);
    i0.ɵɵtemplate(2, BaseGroupedMenuItemComponent_ng_template_2_li_5_ul_2_Template, 3, 6, "ul", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(i0.ɵɵpureFunction2(5, _c1, sub_r12.submenu.length, sub_r12.submenu.length));
    i0.ɵɵproperty("link", sub_r12.link)("config", ctx_r9.getConfig(sub_r12, i_r13));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", sub_r12.submenu.length);
} }
function BaseGroupedMenuItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3, 4);
    i0.ɵɵtemplate(2, BaseGroupedMenuItemComponent_ng_template_2_span_2_Template, 3, 7, "span", 5);
    i0.ɵɵtemplate(3, BaseGroupedMenuItemComponent_ng_template_2_ul_3_Template, 3, 1, "ul", 6);
    i0.ɵɵelementStart(4, "ul", 7);
    i0.ɵɵtemplate(5, BaseGroupedMenuItemComponent_ng_template_2_li_5_Template, 3, 8, "li", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r3.item.isGroupedMenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.item.isGroupedMenu);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("show", ctx_r3.showDropdown())("hover-enabled", ctx_r3.hoverEnabled());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.item.submenu);
} }
class BaseGroupedMenuItemComponent {
    constructor(appStateStore, moduleNavigation) {
        this.appStateStore = appStateStore;
        this.moduleNavigation = moduleNavigation;
        this.index = 0;
        this.showDropdown = signal(false);
        this.showSubDropdown = [];
        this.hoverEnabled = signal(true);
        this.subs = [];
        this.clickType = 'click';
        this.openSubDropdown = null;
    }
    ngOnInit() {
        this.showRecentlyViewed = new Subject();
        this.showFavorites = new Subject();
        this.subs.push(this.appStateStore.activeNavbarDropdown$.subscribe((activeDropdown) => {
            if (this.index !== activeDropdown) {
                this.hideDropdown();
            }
        }));
        const submenuItems = this?.item?.submenu ?? [];
        submenuItems.forEach(() => {
            this.showSubDropdown.push(signal(false));
        });
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
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.showRecentlyViewed.unsubscribe();
        this.showFavorites.unsubscribe();
    }
    hideDropdown() {
        this.showDropdown.set(false);
        this.hoverEnabled.set(true);
        this.showSubDropdown.forEach(subDropdown => {
            subDropdown.set(false);
        });
    }
    toggleDropdown() {
        this.showDropdown.set(!this.showDropdown());
        if (this.showDropdown()) {
            this.appStateStore.setActiveDropdown(this.index);
            this.hoverEnabled.set(false);
        }
        else {
            this.appStateStore.resetActiveDropdown();
            this.hideDropdown();
        }
    }
    navigate() {
        this.moduleNavigation.navigateUsingMenuItem(this.item);
    }
    onSubItemClick($event, item, index) {
        if (this.clickType === 'click') {
            this.navigate();
            return;
        }
        this.toggleSubDropdown(index);
        this.clickType = 'click';
    }
    toggleSubDropdown(index) {
        const openSubDropdownIndex = this.openSubDropdown ?? -1;
        if (index !== openSubDropdownIndex && openSubDropdownIndex >= 0) {
            this?.showSubDropdown[openSubDropdownIndex]?.set(false);
        }
        this.showSubDropdown[index]?.set(!this.showSubDropdown[index]());
        this.openSubDropdown = index;
        if (!this.showSubDropdown[index]()) {
            this.openSubDropdown = null;
        }
    }
    getConfig(sub, index) {
        return {
            onClick: (event) => {
                this.onSubItemClick(event, sub, index);
            },
            onTouchStart: (event) => {
                this.clickType = 'touch';
            }
        };
    }
    static { this.ɵfac = function BaseGroupedMenuItemComponent_Factory(t) { return new (t || BaseGroupedMenuItemComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore), i0.ɵɵdirectiveInject(i2.ModuleNavigation)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseGroupedMenuItemComponent, selectors: [["scrm-base-grouped-menu-item"]], inputs: { item: "item", subNavCollapse: "subNavCollapse", index: "index" }, decls: 4, vars: 2, consts: [[4, "ngIf"], ["groupedMenuItem", ""], [4, "ngTemplateOutlet"], [1, "menu-item-wrapper"], ["menuItemWrapper", ""], ["data-target", ".navbar-collapse", "data-toggle", "collapse", 3, "click", 4, "ngIf"], ["class", "navbar-nav grouped", 4, "ngIf"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "main"], ["class", "nav-item dropdown-submenu submenu", 4, "ngFor", "ngForOf"], ["data-target", ".navbar-collapse", "data-toggle", "collapse", 3, "click"], ["data-toggle", "dropdown", 1, "top-nav-link", "nav-link-grouped", "dropdown-toggle", "active"], [1, "navbar-nav", "grouped"], [1, "top-nav", "nav-item", "dropdown", "main-grouped", "active"], [3, "item"], [1, "nav-item", "dropdown-submenu", "submenu"], [3, "link", "config"], ["class", "dropdown-menu submenu", 3, "rounded-0", "active", "click", 4, "ngIf"], [1, "dropdown-menu", "submenu", 3, "click"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], [3, "icon", "link", "click"], [3, "module", "config", "click"]], template: function BaseGroupedMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseGroupedMenuItemComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            i0.ɵɵtemplate(1, BaseGroupedMenuItemComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
            i0.ɵɵtemplate(2, BaseGroupedMenuItemComponent_ng_template_2_Template, 6, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.hoverEnabled());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.hoverEnabled());
        } }, dependencies: [i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i4.MenuItemComponent, i5.SubMenuRecentlyViewedComponent, i6.SubMenuFavoritesComponent, i7.MenuItemLinkComponent], encapsulation: 2 }); }
}
export { BaseGroupedMenuItemComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseGroupedMenuItemComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-grouped-menu-item', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"hoverEnabled()\">\n    <ng-container *ngTemplateOutlet=\"groupedMenuItem\"></ng-container>\n</ng-container>\n<ng-container *ngIf=\"!hoverEnabled()\">\n    <ng-container *ngTemplateOutlet=\"groupedMenuItem\"></ng-container>\n</ng-container>\n\n\n<ng-template #groupedMenuItem>\n    <div class=\"menu-item-wrapper\" #menuItemWrapper>\n        <span data-target=\".navbar-collapse\" data-toggle=\"collapse\" *ngIf=\"!item.isGroupedMenu\"\n          (click)=\"toggleDropdown()\">\n            <a class=\"top-nav-link nav-link-grouped dropdown-toggle active\"\n               [class]=\"{'nav-link-activated': showDropdown() }\"\n               data-toggle=\"dropdown\" [class.hover-enabled]=\"hoverEnabled()\">\n                {{ item.link.label }}\n            </a>\n        </span>\n        <ul class=\"navbar-nav grouped\" *ngIf=\"item.isGroupedMenu\">\n\n            <li class=\"top-nav nav-item dropdown main-grouped active\">\n                <scrm-menu-item [item]=\"item\"></scrm-menu-item>\n            </li>\n        </ul>\n\n        <ul aria-labelledby=\"navbarDropdownMenuLink\"\n            class=\"dropdown-menu main\"\n            [class.show]=\"showDropdown()\"\n            [class.hover-enabled]=\"hoverEnabled()\"\n        >\n            <li *ngFor=\"let sub of item.submenu; index as i;\" class=\"nav-item dropdown-submenu submenu\">\n\n                <scrm-menu-item-link [class]=\"{\n                                        'sub-nav-link': true,\n                                        'nav-link': true,\n                                        'action-link': true,\n                                        'dropdown-item': sub.submenu.length,\n                                        'dropdown-toggle': sub.submenu.length,\n                                      }\"\n                                     [link]=\"sub.link\"\n                                     [config]=\"getConfig(sub, i)\"\n                >\n                </scrm-menu-item-link>\n\n                <ul *ngIf=\"sub.submenu.length\"\n                    (click)=\"hideDropdown()\"\n                    [class.rounded-0]=\"sub.submenu && sub.submenu.length === 1\"\n                    [class.active]=\"this.showSubDropdown[i]()\"\n                    class=\"dropdown-menu submenu\"\n                >\n\n                    <li *ngFor=\"let subitem of sub.submenu\" class=\"nav-item\">\n\n                        <scrm-menu-item-link (click)=\"hideDropdown()\"\n                                             [class]=\"'submenu-nav-link nav-link action-link'\"\n                                             [icon]=\"subitem.icon\"\n                                             [link]=\"subitem.link\">\n                        </scrm-menu-item-link>\n                    </li>\n                    <ng-container *ngIf=\"sub && sub.module\">\n                        <scrm-sub-menu-recently-viewed [module]=\"sub.module\"\n                                                       [config]=\"recentlyViewedConfig\"\n                                                       (click)=\"$event.stopPropagation();\" >\n                        </scrm-sub-menu-recently-viewed>\n                        <scrm-sub-menu-favorites [module]=\"sub.module\"\n                                                 [config]=\"favoritesConfig\"\n                                                 (click)=\"$event.stopPropagation()\">\n                        </scrm-sub-menu-favorites>\n                    </ng-container>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</ng-template>\n" }]
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.ModuleNavigation }]; }, { item: [{
            type: Input
        }], subNavCollapse: [{
            type: Input
        }], index: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1ncm91cGVkLW1lbnUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvZ3JvdXBlZC1tZW51LWl0ZW0vYmFzZS1ncm91cGVkLW1lbnUtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvZ3JvdXBlZC1tZW51LWl0ZW0vYmFzZS1ncm91cGVkLW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFDLE9BQU8sRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFFdkUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMEVBQTBFLENBQUM7Ozs7Ozs7Ozs7SUNIdEcsd0JBQWlFOzs7SUFEckUsNkJBQXFDO0lBQ2pDLDhHQUFpRTtJQUNyRSwwQkFBZTs7OztJQURJLGVBQWlDO0lBQWpDLHNDQUFpQzs7O0lBR2hELHdCQUFpRTs7O0lBRHJFLDZCQUFzQztJQUNsQyw4R0FBaUU7SUFDckUsMEJBQWU7Ozs7SUFESSxlQUFpQztJQUFqQyxzQ0FBaUM7Ozs7O0lBTTVDLCtCQUM2QjtJQUEzQix5TEFBUyxlQUFBLHdCQUFnQixDQUFBLElBQUM7SUFDeEIsNkJBRWlFO0lBQzdELFlBQ0o7SUFBQSxpQkFBSSxFQUFBOzs7SUFIRCxlQUFpRDtJQUFqRCxnRUFBaUQ7SUFDMUIsc0RBQXNDO0lBQzVELGVBQ0o7SUFESSx1REFDSjs7O0lBRUos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U0FBUzsyQkFDSSw2QkFBNkI7K0ZBSzlCLElBQUk7a0JBQVosS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIHNpZ25hbCwgV3JpdGFibGVTaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZW51SXRlbX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7U3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZVwiO1xuaW1wb3J0IHtNZW51SXRlbUxpbmtDb25maWd9IGZyb20gXCIuLi9tZW51LWl0ZW0tbGluay9tZW51LWl0ZW0tbGluay1jb25maWcubW9kZWxcIjtcbmltcG9ydCB7TW9kdWxlTmF2aWdhdGlvbn0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtTdWJNZW51UmVjZW50bHlWaWV3ZWRDb25maWd9IGZyb20gXCIuLi9zdWItbWVudS1yZWNlbnRseS12aWV3ZWQvc3ViLW1lbnUtcmVjZW50bHktdmlld2VkLWNvbmZpZy5tb2RlbFwiO1xuaW1wb3J0IHtTdWJNZW51RmF2b3JpdGVzQ29uZmlnfSBmcm9tIFwiLi4vc3ViLW1lbnUtZmF2b3JpdGVzL3N1Yi1tZW51LWZhdm9yaXRlcy1jb25maWcubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWJhc2UtZ3JvdXBlZC1tZW51LWl0ZW0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYXNlLWdyb3VwZWQtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VHcm91cGVkTWVudUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgaXRlbTogTWVudUl0ZW07XG4gICAgQElucHV0KCkgc3ViTmF2Q29sbGFwc2U6IGJvb2xlYW47XG4gICAgQElucHV0KCkgaW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBzaG93RHJvcGRvd24gPSBzaWduYWw8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIHNob3dTdWJEcm9wZG93bjogV3JpdGFibGVTaWduYWw8Ym9vbGVhbj5bXSA9IFtdO1xuICAgIGhvdmVyRW5hYmxlZCA9IHNpZ25hbDxib29sZWFuPih0cnVlKTtcbiAgICByZWNlbnRseVZpZXdlZENvbmZpZzogU3ViTWVudVJlY2VudGx5Vmlld2VkQ29uZmlnO1xuICAgIGZhdm9yaXRlc0NvbmZpZzogU3ViTWVudUZhdm9yaXRlc0NvbmZpZztcbiAgICBzaG93UmVjZW50bHlWaWV3ZWQ6IFN1YmplY3Q8Ym9vbGVhbj47XG4gICAgc2hvd0Zhdm9yaXRlczogU3ViamVjdDxib29sZWFuPjtcblxuICAgIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgY2xpY2tUeXBlOiBzdHJpbmcgPSAnY2xpY2snO1xuICAgIHByaXZhdGUgb3BlblN1YkRyb3Bkb3duPzogbnVtYmVyID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcHBTdGF0ZVN0b3JlOiBBcHBTdGF0ZVN0b3JlLCBwcm90ZWN0ZWQgbW9kdWxlTmF2aWdhdGlvbjogTW9kdWxlTmF2aWdhdGlvbikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNob3dSZWNlbnRseVZpZXdlZCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuc2hvd0Zhdm9yaXRlcyA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5hcHBTdGF0ZVN0b3JlLmFjdGl2ZU5hdmJhckRyb3Bkb3duJC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoYWN0aXZlRHJvcGRvd246IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ICE9PSBhY3RpdmVEcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKSk7XG5cbiAgICAgICAgY29uc3Qgc3VibWVudUl0ZW1zID0gdGhpcz8uaXRlbT8uc3VibWVudSA/PyBbXTtcbiAgICAgICAgc3VibWVudUl0ZW1zLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93U3ViRHJvcGRvd24ucHVzaChzaWduYWw8Ym9vbGVhbj4oZmFsc2UpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWNlbnRseVZpZXdlZENvbmZpZyA9IHtcbiAgICAgICAgICAgIG9uSXRlbUNsaWNrOiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGlja1R5cGUgPT09ICd0b3VjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlRHJvcGRvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja1R5cGUgPSAnY2xpY2snO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkl0ZW1Ub3VjaFN0YXJ0OiAoZXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrVHlwZSA9ICd0b3VjaCc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Ub2dnbGVEcm9wZG93bjogKHNob3dEcm9wZG93bik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzaG93RHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RmF2b3JpdGVzLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93RHJvcGRvd24kOiB0aGlzLnNob3dSZWNlbnRseVZpZXdlZC5hc09ic2VydmFibGUoKVxuICAgICAgICB9IGFzIFN1Yk1lbnVSZWNlbnRseVZpZXdlZENvbmZpZ1xuXG4gICAgICAgIHRoaXMuZmF2b3JpdGVzQ29uZmlnID0ge1xuICAgICAgICAgICAgb25JdGVtQ2xpY2s6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrVHlwZSA9PT0gJ3RvdWNoJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrVHlwZSA9ICdjbGljayc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSXRlbVRvdWNoU3RhcnQ6IChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tUeXBlID0gJ3RvdWNoJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRvZ2dsZURyb3Bkb3duOiAoc2hvd0Ryb3Bkb3duKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNob3dEcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dSZWNlbnRseVZpZXdlZC5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0Ryb3Bkb3duJDogdGhpcy5zaG93RmF2b3JpdGVzLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgIH0gYXMgU3ViTWVudUZhdm9yaXRlc0NvbmZpZ1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLnNob3dSZWNlbnRseVZpZXdlZC51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnNob3dGYXZvcml0ZXMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBoaWRlRHJvcGRvd24oKSB7XG4gICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duLnNldChmYWxzZSk7XG4gICAgICAgIHRoaXMuaG92ZXJFbmFibGVkLnNldCh0cnVlKTtcbiAgICAgICAgdGhpcy5zaG93U3ViRHJvcGRvd24uZm9yRWFjaChzdWJEcm9wZG93biA9PiB7XG4gICAgICAgICAgICBzdWJEcm9wZG93bi5zZXQoZmFsc2UpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZURyb3Bkb3duKCkge1xuICAgICAgICB0aGlzLnNob3dEcm9wZG93bi5zZXQoIXRoaXMuc2hvd0Ryb3Bkb3duKCkpO1xuICAgICAgICBpZiAodGhpcy5zaG93RHJvcGRvd24oKSkge1xuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnNldEFjdGl2ZURyb3Bkb3duKHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5ob3ZlckVuYWJsZWQuc2V0KGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS5yZXNldEFjdGl2ZURyb3Bkb3duKCk7XG4gICAgICAgICAgICB0aGlzLmhpZGVEcm9wZG93bigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmF2aWdhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9kdWxlTmF2aWdhdGlvbi5uYXZpZ2F0ZVVzaW5nTWVudUl0ZW0odGhpcy5pdGVtKTtcbiAgICB9XG5cbiAgICBvblN1Ykl0ZW1DbGljaygkZXZlbnQ6IFBvaW50ZXJFdmVudCwgaXRlbTogTWVudUl0ZW0sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tUeXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvZ2dsZVN1YkRyb3Bkb3duKGluZGV4KTtcbiAgICAgICAgdGhpcy5jbGlja1R5cGUgPSAnY2xpY2snO1xuICAgIH1cblxuICAgIHRvZ2dsZVN1YkRyb3Bkb3duKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBvcGVuU3ViRHJvcGRvd25JbmRleCA9IHRoaXMub3BlblN1YkRyb3Bkb3duID8/IC0xO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gb3BlblN1YkRyb3Bkb3duSW5kZXggJiYgb3BlblN1YkRyb3Bkb3duSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcz8uc2hvd1N1YkRyb3Bkb3duW29wZW5TdWJEcm9wZG93bkluZGV4XT8uc2V0KGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd1N1YkRyb3Bkb3duW2luZGV4XT8uc2V0KCF0aGlzLnNob3dTdWJEcm9wZG93bltpbmRleF0oKSk7XG5cbiAgICAgICAgdGhpcy5vcGVuU3ViRHJvcGRvd24gPSBpbmRleDtcbiAgICAgICAgaWYgKCF0aGlzLnNob3dTdWJEcm9wZG93bltpbmRleF0oKSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuU3ViRHJvcGRvd24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKHN1YjogTWVudUl0ZW0sIGluZGV4OiBudW1iZXIpOiBNZW51SXRlbUxpbmtDb25maWcge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb25DbGljazogKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblN1Ykl0ZW1DbGljayhldmVudCwgc3ViLCBpbmRleClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tUeXBlID0gJ3RvdWNoJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBNZW51SXRlbUxpbmtDb25maWc7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImhvdmVyRW5hYmxlZCgpXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImdyb3VwZWRNZW51SXRlbVwiPjwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG48bmctY29udGFpbmVyICpuZ0lmPVwiIWhvdmVyRW5hYmxlZCgpXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImdyb3VwZWRNZW51SXRlbVwiPjwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG5cblxuPG5nLXRlbXBsYXRlICNncm91cGVkTWVudUl0ZW0+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbS13cmFwcGVyXCIgI21lbnVJdGVtV3JhcHBlcj5cbiAgICAgICAgPHNwYW4gZGF0YS10YXJnZXQ9XCIubmF2YmFyLWNvbGxhcHNlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiICpuZ0lmPVwiIWl0ZW0uaXNHcm91cGVkTWVudVwiXG4gICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZURyb3Bkb3duKClcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwidG9wLW5hdi1saW5rIG5hdi1saW5rLWdyb3VwZWQgZHJvcGRvd24tdG9nZ2xlIGFjdGl2ZVwiXG4gICAgICAgICAgICAgICBbY2xhc3NdPVwieyduYXYtbGluay1hY3RpdmF0ZWQnOiBzaG93RHJvcGRvd24oKSB9XCJcbiAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBbY2xhc3MuaG92ZXItZW5hYmxlZF09XCJob3ZlckVuYWJsZWQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IGl0ZW0ubGluay5sYWJlbCB9fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgZ3JvdXBlZFwiICpuZ0lmPVwiaXRlbS5pc0dyb3VwZWRNZW51XCI+XG5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInRvcC1uYXYgbmF2LWl0ZW0gZHJvcGRvd24gbWFpbi1ncm91cGVkIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbSBbaXRlbV09XCJpdGVtXCI+PC9zY3JtLW1lbnUtaXRlbT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPHVsIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIlxuICAgICAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1tZW51IG1haW5cIlxuICAgICAgICAgICAgW2NsYXNzLnNob3ddPVwic2hvd0Ryb3Bkb3duKClcIlxuICAgICAgICAgICAgW2NsYXNzLmhvdmVyLWVuYWJsZWRdPVwiaG92ZXJFbmFibGVkKClcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHN1YiBvZiBpdGVtLnN1Ym1lbnU7IGluZGV4IGFzIGk7XCIgY2xhc3M9XCJuYXYtaXRlbSBkcm9wZG93bi1zdWJtZW51IHN1Ym1lbnVcIj5cblxuICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbS1saW5rIFtjbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N1Yi1uYXYtbGluayc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hdi1saW5rJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWN0aW9uLWxpbmsnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkcm9wZG93bi1pdGVtJzogc3ViLnN1Ym1lbnUubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkcm9wZG93bi10b2dnbGUnOiBzdWIuc3VibWVudS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsaW5rXT1cInN1Yi5saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImdldENvbmZpZyhzdWIsIGkpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9zY3JtLW1lbnUtaXRlbS1saW5rPlxuXG4gICAgICAgICAgICAgICAgPHVsICpuZ0lmPVwic3ViLnN1Ym1lbnUubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImhpZGVEcm9wZG93bigpXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnJvdW5kZWQtMF09XCJzdWIuc3VibWVudSAmJiBzdWIuc3VibWVudS5sZW5ndGggPT09IDFcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRoaXMuc2hvd1N1YkRyb3Bkb3duW2ldKClcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnUgc3VibWVudVwiXG4gICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgc3ViaXRlbSBvZiBzdWIuc3VibWVudVwiIGNsYXNzPVwibmF2LWl0ZW1cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbWVudS1pdGVtLWxpbmsgKGNsaWNrKT1cImhpZGVEcm9wZG93bigpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCInc3VibWVudS1uYXYtbGluayBuYXYtbGluayBhY3Rpb24tbGluaydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ljb25dPVwic3ViaXRlbS5pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsaW5rXT1cInN1Yml0ZW0ubGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLW1lbnUtaXRlbS1saW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3ViICYmIHN1Yi5tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLXN1Yi1tZW51LXJlY2VudGx5LXZpZXdlZCBbbW9kdWxlXT1cInN1Yi5tb2R1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwicmVjZW50bHlWaWV3ZWRDb25maWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLXN1Yi1tZW51LXJlY2VudGx5LXZpZXdlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLXN1Yi1tZW51LWZhdm9yaXRlcyBbbW9kdWxlXT1cInN1Yi5tb2R1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiZmF2b3JpdGVzQ29uZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tc3ViLW1lbnUtZmF2b3JpdGVzPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=