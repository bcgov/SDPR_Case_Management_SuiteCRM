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
import { Component, ElementRef, HostListener, signal, ViewChild } from '@angular/core';
import { combineLatestWith } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { NavbarAbstract } from '../navbar.abstract';
import { transition, trigger, useAnimation } from '@angular/animations';
import { backInDown } from 'ng-animate';
import { ActionNameMapper } from '../../../services/navigation/action-name-mapper/action-name-mapper.service';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { NavigationStore } from '../../../store/navigation/navigation.store';
import { UserPreferenceStore } from '../../../store/user-preference/user-preference.store';
import { ScreenSize, ScreenSizeObserverService } from '../../../services/ui/screen-size-observer/screen-size-observer.service';
import { RouteConverter } from '../../../services/navigation/route-converter/route-converter.service';
import { LanguageStore } from '../../../store/language/language.store';
import { ModuleNavigation } from '../../../services/navigation/module-navigation/module-navigation.service';
import { ModuleNameMapper } from '../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { AppStateStore } from '../../../store/app-state/app-state.store';
import { AuthService } from '../../../services/auth/auth.service';
import { ready } from 'common';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { NotificationStore } from "../../../store/notification/notification.store";
import { GlobalRecentlyViewedStore } from "../../../store/global-recently-viewed/global-recently-viewed.store";
import { GlobalSearch } from "../../../services/navigation/global-search/global-search.service";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { SearchBarComponent } from "../../search-bar/search-bar.component";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/navigation/navigation.store";
import * as i2 from "../../../store/language/language.store";
import * as i3 from "../../../store/user-preference/user-preference.store";
import * as i4 from "../../../store/system-config/system-config.store";
import * as i5 from "../../../store/app-state/app-state.store";
import * as i6 from "../../../services/auth/auth.service";
import * as i7 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i8 from "../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i9 from "../../../services/process/processes/async-action/async-action";
import * as i10 from "../../../store/notification/notification.store";
import * as i11 from "../../../store/global-recently-viewed/global-recently-viewed.store";
import * as i12 from "../../../services/navigation/global-search/global-search.service";
import * as i13 from "@angular/cdk/layout";
import * as i14 from "@angular/common";
import * as i15 from "../../logo/logo.component";
import * as i16 from "../../logout/logout.component";
import * as i17 from "@ng-bootstrap/ng-bootstrap";
import * as i18 from "@angular/router";
import * as i19 from "../../image/image.component";
import * as i20 from "../../label/label.component";
import * as i21 from "../../../containers/notifications/notifications.component";
import * as i22 from "../../search-bar/search-bar.component";
import * as i23 from "../recently-viewed/recently-viewed.component";
import * as i24 from "../menu-item/menu-item.component";
import * as i25 from "../home-menu-item/home-menu-item.component";
import * as i26 from "../grouped-menu-item/grouped-menu-item.component";
import * as i27 from "../menu-items-list/menu-items-list.component";
const _c0 = ["mobileGlobalLinkTitle"];
const _c1 = ["searchTerm"];
function BaseNavbarComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 5)(1, "div", 6)(2, "ul", 7)(3, "li", 8);
    i0.ɵɵtext(4, "\u00A0 ");
    i0.ɵɵelementEnd()()()();
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nav", 9)(2, "div", 10)(3, "ul", 7)(4, "li", 11);
    i0.ɵɵelement(5, "scrm-logo-ui");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementContainerEnd();
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 28);
    i0.ɵɵelement(1, "scrm-menu-item", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("item", ctx_r9.navbar.current);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_18_ng_container_0_hr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_18_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 31);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_18_ng_container_0_hr_3_Template, 1, 0, "hr", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const globalAction_r14 = ctx.$implicit;
    const first_r15 = ctx.first;
    const last_r16 = ctx.last;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", globalAction_r14.link.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("target", globalAction_r14.link.target);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", globalAction_r14.link.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", last_r16 === true || first_r15 === true);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_18_ng_container_0_Template, 4, 4, "ng-container", 30);
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngForOf", ctx_r12.navbar.globalActions);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 12)(2, "div", 13)(3, "button", 14);
    i0.ɵɵlistener("click", function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r18.toggleSidebar()); });
    i0.ɵɵelement(4, "scrm-image", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nav", 16)(6, "ul", 17);
    i0.ɵɵtemplate(7, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_li_7_Template, 2, 1, "li", 18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 19);
    i0.ɵɵtemplate(9, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_container_9_Template, 1, 0, "ng-container", 20);
    i0.ɵɵelementStart(10, "div", 21)(11, "li", 22)(12, "a", 23, 24);
    i0.ɵɵelement(14, "scrm-image", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 26)(16, "span", 27);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_18_Template, 1, 1, "ng-template", 2);
    i0.ɵɵelement(19, "scrm-logout-ui");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r11 = i0.ɵɵreference(13);
    i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(4);
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", ctx_r7.isSmallScreen() && ctx_r7.isSearchBoxVisible() ? "d-none" : "d-block");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r7.navbar.current && !ctx_r7.navbar.current.isGroupedMenu);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
    i0.ɵɵadvance(6);
    i0.ɵɵstyleProp("min-width", _r11.offsetWidth, "px");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r7.navbar.currentUser.firstName, " ", ctx_r7.navbar.currentUser.lastName, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.navbar.globalActions);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 41);
    i0.ɵɵelement(2, "scrm-grouped-menu-item", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("item", ctx_r24.navbar.current)("subNavCollapse", ctx_r24.subNavCollapse)("index", 1);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 43);
    i0.ɵɵelement(1, "scrm-menu-item", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("item", ctx_r25.navbar.current)("index", 1);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 41);
    i0.ɵɵelement(1, "scrm-grouped-menu-item", 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r26 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("item", item_r27)("subNavCollapse", ctx_r26.subNavCollapse)("index", i_r28 + 2);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 37);
    i0.ɵɵtemplate(2, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_ng_container_2_Template, 3, 3, "ng-container", 3);
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_li_3_Template, 2, 2, "li", 38);
    i0.ɵɵtemplate(4, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_li_4_Template, 2, 3, "li", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "scrm-menu-items-list", 40);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r20.navbar.current && ctx_r20.navbar.current.isGroupedMenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.navbar.current && !ctx_r20.navbar.current.isGroupedMenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r20.navbar.menu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("items", ctx_r20.navbar.all.modules)("index", ctx_r20.navbar.menu.length + 2);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 43);
    i0.ɵɵelement(1, "scrm-menu-item", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("item", ctx_r29.navbar.current)("index", 1);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 41);
    i0.ɵɵelement(2, "scrm-grouped-menu-item", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("item", ctx_r30.navbar.current)("subNavCollapse", ctx_r30.subNavCollapse)("index", 1);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 47);
    i0.ɵɵelement(1, "scrm-menu-item", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    const i_r33 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("item", item_r32)("index", i_r33 + 2);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 7);
    i0.ɵɵtemplate(2, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_li_2_Template, 2, 2, "li", 38);
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_ng_container_3_Template, 3, 3, "ng-container", 3);
    i0.ɵɵtemplate(4, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_li_4_Template, 2, 2, "li", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "scrm-menu-items-list", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r21.navbar.current && !ctx_r21.navbar.current.isGroupedMenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r21.navbar.current == null ? null : ctx_r21.navbar.current.submenu) && ctx_r21.navbar.current.isGroupedMenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r21.navbar.menu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("items", ctx_r21.navbar.all.modules)("index", ctx_r21.navbar.menu.length + 2);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_ng_container_1_hr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 31);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_ng_container_1_hr_3_Template, 1, 0, "hr", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const globalAction_r35 = ctx.$implicit;
    const first_r36 = ctx.first;
    const last_r37 = ctx.last;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", globalAction_r35.link.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("target", globalAction_r35.link.target);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", globalAction_r35.link.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", last_r37 === true || first_r36 === true);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_ng_container_1_Template, 4, 4, "ng-container", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r23.navbar.globalActions);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nav", 32)(2, "div", 33);
    i0.ɵɵelement(3, "scrm-home-menu-item", 34);
    i0.ɵɵtemplate(4, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_Template, 6, 5, "ng-container", 3);
    i0.ɵɵtemplate(5, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_Template, 6, 5, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_6_Template, 1, 0, "ng-container", 20);
    i0.ɵɵelementStart(7, "div", 21)(8, "ul", 7)(9, "li", 22)(10, "a", 35);
    i0.ɵɵelement(11, "scrm-image", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 36)(13, "span", 27);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelement(16, "scrm-logout-ui");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    const _r4 = i0.ɵɵreference(4);
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngbCollapse", ctx_r8.mainNavCollapse);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("active", vm_r1.appState.module && vm_r1.appState.module === "home")("route", ctx_r8.getHomePage());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.userPreferences["navigation_paradigm"] == "gm");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.userPreferences["navigation_paradigm"] != "gm");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate2("", ctx_r8.navbar.currentUser.firstName, " ", ctx_r8.navbar.currentUser.lastName, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.navbar.globalActions);
} }
function BaseNavbarComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_container_2_ng_container_1_Template, 6, 0, "ng-container", 3);
    i0.ɵɵtemplate(2, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_Template, 20, 8, "ng-container", 3);
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_Template, 17, 9, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.isUserLoggedIn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.isUserLoggedIn && ctx_r3.mobileNavbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.isUserLoggedIn && !ctx_r3.mobileNavbar);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_7_li_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 70);
    i0.ɵɵelement(2, "scrm-label", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const moduleQuickAction_r45 = i0.ɵɵnextContext().$implicit;
    const ctx_r46 = i0.ɵɵnextContext(4);
    let tmp_1_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", moduleQuickAction_r45.url)("queryParams", (tmp_1_0 = moduleQuickAction_r45 == null ? null : moduleQuickAction_r45.params) !== null && tmp_1_0 !== undefined ? tmp_1_0 : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", moduleQuickAction_r45.labelKey)("module", ctx_r46.navbar.current.module);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_7_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 72);
    i0.ɵɵlistener("click", function BaseNavbarComponent_div_0_ng_template_3_ng_container_7_li_3_ng_container_2_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r51); const moduleQuickAction_r45 = i0.ɵɵnextContext().$implicit; const ctx_r49 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r49.handleProcess(moduleQuickAction_r45)); });
    i0.ɵɵelement(2, "scrm-label", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const moduleQuickAction_r45 = i0.ɵɵnextContext().$implicit;
    const ctx_r47 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", moduleQuickAction_r45.labelKey)("module", ctx_r47.navbar.current.module);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_7_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 69);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_template_3_ng_container_7_li_3_ng_container_1_Template, 3, 4, "ng-container", 3);
    i0.ɵɵtemplate(2, BaseNavbarComponent_div_0_ng_template_3_ng_container_7_li_3_ng_container_2_Template, 3, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const moduleQuickAction_r45 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !moduleQuickAction_r45.process);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", moduleQuickAction_r45.process);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 66);
    i0.ɵɵelement(2, "scrm-label", 67);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_template_3_ng_container_7_li_3_Template, 3, 2, "li", 68);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("module", ctx_r40.navbar.current.module);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r40.currentQuickActions);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_8_li_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 70);
    i0.ɵɵelement(2, "scrm-label", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const quickAction_r54 = i0.ɵɵnextContext().$implicit;
    let tmp_1_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", quickAction_r54.url)("queryParams", (tmp_1_0 = quickAction_r54 == null ? null : quickAction_r54.params) !== null && tmp_1_0 !== undefined ? tmp_1_0 : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", quickAction_r54.labelKey)("module", quickAction_r54.module);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_8_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 72);
    i0.ɵɵlistener("click", function BaseNavbarComponent_div_0_ng_template_3_ng_container_8_li_3_ng_container_2_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r60); const quickAction_r54 = i0.ɵɵnextContext().$implicit; const ctx_r58 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r58.handleProcess(quickAction_r54)); });
    i0.ɵɵelement(2, "scrm-label", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const quickAction_r54 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", quickAction_r54.labelKey)("module", quickAction_r54.module);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_8_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 69);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_template_3_ng_container_8_li_3_ng_container_1_Template, 3, 4, "ng-container", 3);
    i0.ɵɵtemplate(2, BaseNavbarComponent_div_0_ng_template_3_ng_container_8_li_3_ng_container_2_Template, 3, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const quickAction_r54 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !quickAction_r54.process);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", quickAction_r54.process);
} }
const _c2 = function () { return []; };
function BaseNavbarComponent_div_0_ng_template_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 66);
    i0.ɵɵelement(2, "scrm-label", 73);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_template_3_ng_container_8_li_3_Template, 3, 2, "li", 68);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r41 = i0.ɵɵnextContext(3);
    let tmp_0_0;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", (tmp_0_0 = ctx_r41 == null ? null : ctx_r41.navigation == null ? null : ctx_r41.navigation.quickActions) !== null && tmp_0_0 !== undefined ? tmp_0_0 : i0.ɵɵpureFunction0(1, _c2));
} }
function BaseNavbarComponent_div_0_ng_template_3_div_24_ng_container_5_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const notificationCount_r63 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(notificationCount_r63);
} }
function BaseNavbarComponent_div_0_ng_template_3_div_24_ng_container_5_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 79);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_template_3_div_24_ng_container_5_span_1_ng_container_1_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const notificationCount_r63 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", notificationCount_r63 > 0);
} }
function BaseNavbarComponent_div_0_ng_template_3_div_24_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_template_3_div_24_ng_container_5_span_1_Template, 2, 1, "span", 78);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const notificationCount_r63 = ctx.ngIf;
    let tmp_0_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (tmp_0_0 = notificationCount_r63) !== null && tmp_0_0 !== undefined ? tmp_0_0 : false);
} }
function BaseNavbarComponent_div_0_ng_template_3_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 74)(1, "ul", 50)(2, "li", 22)(3, "a", 75);
    i0.ɵɵlistener("mouseenter", function BaseNavbarComponent_div_0_ng_template_3_div_24_Template_a_mouseenter_3_listener() { i0.ɵɵrestoreView(_r69); const ctx_r68 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r68.markAsRead()); });
    i0.ɵɵelement(4, "scrm-image", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, BaseNavbarComponent_div_0_ng_template_3_div_24_ng_container_5_Template, 2, 1, "ng-container", 3);
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementStart(7, "div", 77);
    i0.ɵɵelement(8, "scrm-notifications");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r43 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(6, 1, ctx_r43.notificationCount$));
} }
function BaseNavbarComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 48)(1, "div", 49)(2, "ul", 50)(3, "li", 22)(4, "a", 51);
    i0.ɵɵelement(5, "scrm-image", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ul", 53);
    i0.ɵɵtemplate(7, BaseNavbarComponent_div_0_ng_template_3_ng_container_7_Template, 4, 2, "ng-container", 3);
    i0.ɵɵtemplate(8, BaseNavbarComponent_div_0_ng_template_3_ng_container_8_Template, 4, 2, "ng-container", 3);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(9, "div", 54)(10, "ul", 50)(11, "li", 22)(12, "a", 55);
    i0.ɵɵelement(13, "scrm-image", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 57);
    i0.ɵɵelement(15, "scrm-recently-viewed", 58);
    i0.ɵɵpipe(16, "slice");
    i0.ɵɵpipe(17, "async");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(18, "div", 59)(19, "a", 60);
    i0.ɵɵlistener("click", function BaseNavbarComponent_div_0_ng_template_3_Template_a_click_19_listener() { i0.ɵɵrestoreView(_r71); const ctx_r70 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r70.openSearchBox()); });
    i0.ɵɵelement(20, "scrm-image", 61);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 62)(22, "scrm-search-bar", 63, 64);
    i0.ɵɵlistener("isSearchVisible", function BaseNavbarComponent_div_0_ng_template_3_Template_scrm_search_bar_isSearchVisible_22_listener($event) { i0.ɵɵrestoreView(_r71); const ctx_r72 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r72.closeSearchBox($event)); })("searchExpression", function BaseNavbarComponent_div_0_ng_template_3_Template_scrm_search_bar_searchExpression_22_listener($event) { i0.ɵɵrestoreView(_r71); const ctx_r73 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r73.search($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(24, BaseNavbarComponent_div_0_ng_template_3_div_24_Template, 9, 3, "div", 65);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r5 = i0.ɵɵnextContext();
    let tmp_2_0;
    let tmp_3_0;
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("dropdown-menu-right", !ctx_r5.mobileNavbar)("dropdown-menu-right-center", ctx_r5.mobileNavbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_2_0 = ctx_r5.navbar == null ? null : ctx_r5.navbar.current == null ? null : ctx_r5.navbar.current.module) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "") && ctx_r5.currentQuickActions.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_3_0 = ctx_r5 == null ? null : ctx_r5.navigation == null ? null : ctx_r5.navigation.quickActions) !== null && tmp_3_0 !== undefined ? tmp_3_0 : i0.ɵɵpureFunction0(23, _c2)).length);
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("dropdown-menu-right", !ctx_r5.mobileNavbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("menuItems", i0.ɵɵpipeBind3(16, 17, i0.ɵɵpipeBind1(17, 21, ctx_r5.recentlyViewed$), 0, ctx_r5.recentlyViewedCount));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", ctx_r5.isSearchBoxVisible() ? "d-none" : "d-block");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r5.isSearchBoxVisible() ? "d-block" : "d-none")("@mobileSearchBarAnm", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", "LBL_SEARCH")("klass", "search-bar-global")("searchTrigger", "enter")("isMobile", ctx_r5.isSmallScreen());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.notificationsEnabled && ctx_r5.checkAppStrings(vm_r1.appStrings) && ctx_r5.arePreferencesInitialized(vm_r1.userPreferences));
} }
function BaseNavbarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_template_1_Template, 5, 0, "ng-template", 2);
    i0.ɵɵtemplate(2, BaseNavbarComponent_div_0_ng_container_2_Template, 4, 3, "ng-container", 3);
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_template_3_Template, 25, 24, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.loaded);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loaded);
} }
class BaseNavbarComponent {
    static { this.instances = []; }
    constructor(navigationStore, languageStore, userPreferenceStore, systemConfigStore, appState, authService, moduleNavigation, screenSize, asyncActionService, notificationStore, globalRecentlyViewedStore, globalSearch, breakpointObserver) {
        this.navigationStore = navigationStore;
        this.languageStore = languageStore;
        this.userPreferenceStore = userPreferenceStore;
        this.systemConfigStore = systemConfigStore;
        this.appState = appState;
        this.authService = authService;
        this.moduleNavigation = moduleNavigation;
        this.screenSize = screenSize;
        this.asyncActionService = asyncActionService;
        this.notificationStore = notificationStore;
        this.globalRecentlyViewedStore = globalRecentlyViewedStore;
        this.globalSearch = globalSearch;
        this.breakpointObserver = breakpointObserver;
        this.loaded = true;
        this.mainNavCollapse = true;
        this.subNavCollapse = true;
        this.mobileSubNav = false;
        this.backLink = false;
        this.mainNavLink = true;
        this.submenu = [];
        this.moduleNameMapper = new ModuleNameMapper(this.systemConfigStore);
        this.actionNameMapper = new ActionNameMapper(this.systemConfigStore);
        this.routeConverter = new RouteConverter(this.moduleNameMapper, this.actionNameMapper, this.systemConfigStore);
        this.maxTabs = 8;
        this.screen = ScreenSize.Medium;
        this.notificationsEnabled = false;
        this.subs = [];
        this.mobileNavbar = false;
        this.isSmallScreen = signal(false);
        this.isTabletScreen = signal(false);
        this.recentlyViewedCount = 10;
        this.isSearchBoxVisible = signal(false);
        this.languages$ = this.languageStore.vm$;
        this.userPreferences$ = this.userPreferenceStore.userPreferences$;
        this.currentUser$ = this.authService.currentUser$;
        this.appState$ = this.appState.vm$;
        this.navigation$ = this.navigationStore.vm$;
        this.recentlyViewed$ = this.globalRecentlyViewedStore.globalRecentlyViewed$;
        this.vm$ = this.navigation$.pipe(combineLatestWith(this.userPreferences$, this.currentUser$, this.appState$, this.screenSize.screenSize$, this.languages$), map(([navigation, userPreferences, currentUser, appState, screenSize, language]) => {
            if (screenSize) {
                this.screen = screenSize;
                this.onResize();
            }
            if (navigation && navigation.modules) {
                this.navigation = navigation;
            }
            this.calculateMaxTabs(navigation);
            this.getModuleQuickActions(appState.module);
            this.navbar.resetMenu();
            if (ready([language.appStrings, language.modStrings, language.appListStrings, userPreferences, currentUser])) {
                this.navbar.build(navigation, currentUser, this.maxTabs);
            }
            return {
                navigation,
                userPreferences,
                appState,
                appStrings: language.appStrings || {},
                appListStrings: language.appListStrings || {}
            };
        }));
    }
    /**
     * Public API
     */
    onResize() {
        const innerWidth = window.innerWidth;
        this.mobileNavbar = innerWidth <= 768;
        this.isSmallScreen.set(innerWidth <= 600);
        this.isTabletScreen.set(innerWidth <= 992);
        if (!this.isSmallScreen()) {
            this.isSearchBoxVisible.set(true);
        }
    }
    ngOnInit() {
        const navbar = new NavbarAbstract(this.routeConverter, this.moduleNavigation, this.userPreferenceStore, this.languageStore, this.appState, this.moduleNameMapper);
        this.setNavbar(navbar);
        this.authService.isUserLoggedIn.subscribe(value => {
            this.isUserLoggedIn = value;
        });
        window.dispatchEvent(new Event('resize'));
        this.notificationCount$ = this.notificationStore.notificationsUnreadTotal$;
        this.recentlyViewedCount = this.systemConfigStore.getUi('global_recently_viewed');
        this.subs.push(this.notificationStore.notificationsEnabled$.subscribe(notificationsEnabled => {
            this.notificationsEnabled = notificationsEnabled;
        }));
        this.subs.push(this.breakpointObserver.observe([
            Breakpoints.XSmall,
        ]).subscribe((result) => {
            let hasSearchTerm;
            if (!!this.searchTermRef?.searchForm.get('searchTerm').value) {
                hasSearchTerm = true;
            }
            else {
                hasSearchTerm = false;
            }
            if (result.matches && !hasSearchTerm) {
                this.isSearchBoxVisible.set(false);
            }
        }));
    }
    ngOnDestroy() {
        this.authService.isUserLoggedIn.unsubscribe();
        this.subs.forEach(sub => sub.unsubscribe());
    }
    checkAppStrings(appStrings) {
        return appStrings && Object.keys(appStrings).length > 0;
    }
    arePreferencesInitialized(preferences) {
        return preferences && Object.keys(preferences).length;
    }
    markAsRead() {
        this.notificationStore.markNotificationsAsRead();
    }
    ngAfterViewInit() {
        if (!this.mobileGlobalLinkTitle?.nativeElement?.offsetWidth) {
            return;
        }
        this.dropdownLength = this.mobileGlobalLinkTitle.nativeElement.offsetWidth;
    }
    /**
     * Change subnavigation
     *
     * @param {object} event triggered
     * @param {object} items
     */
    changeSubNav(event, items) {
        this.mobileSubNav = !this.mobileSubNav;
        this.backLink = !this.backLink;
        this.mainNavLink = !this.mainNavLink;
        this.submenu = items;
    }
    /**
     * Set link flags
     */
    navBackLink() {
        this.mobileSubNav = !this.mobileSubNav;
        this.backLink = !this.backLink;
        this.mainNavLink = !this.mainNavLink;
    }
    /**
     * Get home page
     *
     * @returns {string} homepage
     */
    getHomePage() {
        return this.systemConfigStore.getHomePage();
    }
    /**
     * Internal API
     */
    /**
     * Set navbar model
     *
     * @param {object} navbar model
     */
    setNavbar(navbar) {
        this.navbar = navbar;
        this.loaded = true;
    }
    /**
     * Check if is loaded
     *
     * @returns {{boolean}} is loaded
     */
    isLoaded() {
        return this.loaded;
    }
    calculateMaxTabs(navigation) {
        const sizeMap = this.systemConfigStore.getConfigValue('navigation_tab_limits');
        if (this.screen && sizeMap) {
            let maxTabs = sizeMap[this.screen];
            if (!maxTabs || navigation.maxTabs && navigation.maxTabs < maxTabs) {
                maxTabs = navigation.maxTabs;
            }
            this.maxTabs = maxTabs;
        }
    }
    getModuleQuickActions(module) {
        const moduleNavigation = this?.navigation?.modules[module] ?? null;
        const moduleNavigationMenu = moduleNavigation?.menu ?? [];
        if (moduleNavigation === null || !moduleNavigationMenu.length) {
            this.currentQuickActions = [];
        }
        const actions = [];
        moduleNavigationMenu.forEach(entry => {
            if (!entry.url || !entry.quickAction) {
                return;
            }
            const url = entry?.url ?? '';
            actions.push({
                ...entry,
                url: url.replace('/#/', '/')
            });
        });
        this.currentQuickActions = actions;
    }
    handleProcess(action) {
        if (!action.process) {
            return;
        }
        const processType = action.process;
        const options = {
            action: processType,
            module: action.module,
        };
        this.asyncActionService.run(processType, options).pipe(take(1)).subscribe();
    }
    openSearchBox() {
        if (this.isSmallScreen()) {
            this.isSearchBoxVisible.set(true);
        }
    }
    closeSearchBox(isVisible) {
        this.isSearchBoxVisible.set(isVisible);
    }
    search(searchTerm) {
        this.globalSearch.navigateToSearch(searchTerm).finally();
    }
    toggleSidebar() {
        this.appState.toggleSidebar();
    }
    static { this.ɵfac = function BaseNavbarComponent_Factory(t) { return new (t || BaseNavbarComponent)(i0.ɵɵdirectiveInject(i1.NavigationStore), i0.ɵɵdirectiveInject(i2.LanguageStore), i0.ɵɵdirectiveInject(i3.UserPreferenceStore), i0.ɵɵdirectiveInject(i4.SystemConfigStore), i0.ɵɵdirectiveInject(i5.AppStateStore), i0.ɵɵdirectiveInject(i6.AuthService), i0.ɵɵdirectiveInject(i7.ModuleNavigation), i0.ɵɵdirectiveInject(i8.ScreenSizeObserverService), i0.ɵɵdirectiveInject(i9.AsyncActionService), i0.ɵɵdirectiveInject(i10.NotificationStore), i0.ɵɵdirectiveInject(i11.GlobalRecentlyViewedStore), i0.ɵɵdirectiveInject(i12.GlobalSearch), i0.ɵɵdirectiveInject(i13.BreakpointObserver)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseNavbarComponent, selectors: [["scrm-base-navbar"]], viewQuery: function BaseNavbarComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mobileGlobalLinkTitle = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchTermRef = _t.first);
        } }, hostBindings: function BaseNavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function BaseNavbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
        } }, decls: 2, vars: 3, consts: [["class", "top-panel fixed-top", 4, "ngIf"], [1, "top-panel", "fixed-top"], [3, "ngIf"], [4, "ngIf"], ["actionIcons", ""], [1, "navbar", "navbar-expand-lg"], [1, "navbar-collapse", "collapse", "order-4", "order-md-0", "collapsenav"], [1, "navbar-nav"], [1, "top-nav", "nav-item"], [1, "navbar", "ml-0", "pl-0"], [1, "navbar-collapse"], [1, "pl-0"], [1, "navbar", "mobile-nav-block", "mobilenavbar"], [1, "d-flex"], ["type", "button", 1, "navbar-toggler", 3, "click"], ["image", "hamburger", 1, "responsive-menu-toggler"], [1, "navbar-expand", 3, "ngClass"], [1, "navbar-nav", "h-100"], ["class", "top-nav nav-item dropdown mobile-navbar-active-module h-100 non-grouped", 4, "ngIf"], [1, "d-flex", "align-items-center"], [4, "ngTemplateOutlet"], ["ngbDropdown", "", 1, "global-links", "action-dropdown"], [1, "global-link-item"], ["ngbDropdownToggle", "", 1, "nav-link", "primary-global-link", "dropdown-toggle"], ["mobileGlobalLinkTitle", ""], ["image", "user", 1, "global-action-icon", "sicon-2x"], ["aria-labelledby", "navbarDropdownMenuLink", "ngbDropdownMenu", "", 1, "dropdown-menu", "global-links-dropdown", "border", "shadow-sm-2"], [1, "global-user-name"], [1, "top-nav", "nav-item", "dropdown", "mobile-navbar-active-module", "h-100", "non-grouped"], [3, "item"], [4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 1, "dropdown-item", "global-links-sublink", 3, "href", "target"], [1, "navbar", "navbar-expand-md", "navbar-1"], [1, "navbar-collapse", "collapse", "collapsenav", 3, "ngbCollapse"], [3, "active", "route"], ["ngbDropdownToggle", "", 1, "nav-link", "primary-global-link"], ["aria-labelledby", "navbarDropdownMenuLink", "ngbDropdownMenu", "", 1, "dropdown-menu", "global-links-dropdown", "border", "shadow-sm-2", "dropdown-menu-right"], [1, "navbar-nav", "grouped"], ["class", "top-nav nav-item dropdown non-grouped active", 4, "ngIf"], ["class", "top-nav nav-item dropdown main-grouped", 4, "ngFor", "ngForOf"], ["labelKey", "LBL_TABGROUP_ALL", 3, "items", "index"], [1, "top-nav", "nav-item", "dropdown", "main-grouped"], [3, "item", "subNavCollapse", "index"], [1, "top-nav", "nav-item", "dropdown", "non-grouped", "active"], [3, "item", "index"], ["class", "top-nav nav-item dropdown non-grouped", 4, "ngFor", "ngForOf"], ["labelKey", "LBL_MORE", 3, "items", "index"], [1, "top-nav", "nav-item", "dropdown", "non-grouped"], [1, "action-group", "navbar-action-group"], ["ngbDropdown", "", 1, "action-new", "action-dropdown"], [1, "navbar-nav", "border-0"], ["type", "button", "aria-label", "Quick Create", "ngbDropdownToggle", "", 1, "action-link", "primary-global-link"], ["image", "plus", 1, "action-btn-icon"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-left", "border", "shadow-sm-2"], ["ngbDropdown", "", 1, "action-history", "action-dropdown"], ["type", "button", "aria-label", "Recently Viewed", "ngbDropdownToggle", "", 1, "action-link", "primary-global-link"], ["image", "recently_viewed", 1, "action-btn-icon"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "border", "shadow-sm-2", "dropdown-menu-right", "scrollbar-thick", "recently-viewed-nav-header"], [1, "recently-viewed", 3, "menuItems"], [1, "d-flex", "align-items-center", "px-1", "action-search"], ["type", "button", "aria-label", "Search", 1, "search-mobile-view", "action-link", "primary-global-link", 3, "ngClass", "click"], ["image", "search", 1, "action-btn-icon"], [3, "ngClass"], [3, "labelKey", "klass", "searchTrigger", "isMobile", "isSearchVisible", "searchExpression"], ["searchTerm", ""], ["class", "action-alert action-dropdown", "ngbDropdown", "", 4, "ngIf"], [1, "new-list-item-header", "font-weight-bold"], ["labelKey", "LBL_MODULE_NAME", 3, "module"], ["class", "new-list-item", 4, "ngFor", "ngForOf"], [1, "new-list-item"], [1, "d-flex", "align-items-center", 3, "routerLink", "queryParams"], [1, "new-list-item-label", 3, "labelKey", "module"], [1, "d-flex", "align-items-center", 3, "click"], ["labelKey", "LBL_QUICK_ACTIONS"], ["ngbDropdown", "", 1, "action-alert", "action-dropdown"], ["type", "button", "ngbDropdownToggle", "", 1, "action-link", "primary-global-link", 3, "mouseenter"], ["image", "alert", 1, "action-btn-icon"], ["aria-labelledby", "navbarDropdownMenuLink", "ngbDropdownMenu", "", 1, "dropdown-menu", "border", "shadow-sm-2", "dropdown-menu-right"], ["class", "badge badge-position rounded-pill bg-danger text-white", 4, "ngIf"], [1, "badge", "badge-position", "rounded-pill", "bg-danger", "text-white"]], template: function BaseNavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseNavbarComponent_div_0_Template, 5, 2, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i14.NgClass, i14.NgForOf, i14.NgIf, i14.NgTemplateOutlet, i15.LogoUiComponent, i16.LogoutUiComponent, i17.NgbCollapse, i17.NgbDropdown, i17.NgbDropdownToggle, i17.NgbDropdownMenu, i17.NgbDropdownItem, i18.RouterLink, i19.ImageComponent, i20.LabelComponent, i21.NotificationsComponent, i22.SearchBarComponent, i23.RecentlyViewedComponent, i24.MenuItemComponent, i25.HomeMenuItemComponent, i26.GroupedMenuItemComponent, i27.MenuItemsListComponent, i14.AsyncPipe, i14.SlicePipe], encapsulation: 2, data: { animation: [
                trigger('mobileSearchBarAnm', [
                    transition(':enter', useAnimation(backInDown, {
                        params: { timing: 0.5, delay: 0 }
                    })),
                ])
            ] } }); }
}
export { BaseNavbarComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseNavbarComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-navbar', animations: [
                    trigger('mobileSearchBarAnm', [
                        transition(':enter', useAnimation(backInDown, {
                            params: { timing: 0.5, delay: 0 }
                        })),
                    ])
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start of main navbar section -->\n\n<div *ngIf=\"(vm$ | async) as vm\" class=\"top-panel fixed-top\">\n\n    <!-- Start of empty navbar section until data is loaded -->\n\n    <ng-template [ngIf]=\"!loaded\">\n        <nav class=\"navbar navbar-expand-lg\">\n            <div class=\"navbar-collapse collapse order-4 order-md-0 collapsenav\">\n                <ul class=\"navbar-nav\">\n                    <li class=\"top-nav nav-item\">&nbsp;\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </ng-template>\n\n    <!-- End of empty  section until data is loaded -->\n\n    <!-- Start of empty navbar with logo -->\n\n    <ng-container *ngIf=\"loaded\">\n        <ng-container *ngIf=\"!this.isUserLoggedIn\">\n            <nav class=\"navbar ml-0 pl-0\">\n                <div class=\"navbar-collapse\">\n                    <ul class=\"navbar-nav\">\n                        <li class=\"pl-0\">\n                            <scrm-logo-ui></scrm-logo-ui>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </ng-container>\n\n        <!-- End of empty navbar section with logo -->\n\n        <!-- Start of mobile navigation section -->\n\n        <ng-container *ngIf=\"this.isUserLoggedIn && mobileNavbar\">\n            <ul class=\"navbar mobile-nav-block mobilenavbar\">\n                <div class=\"d-flex\">\n                    <button (click)=\"toggleSidebar()\" class=\"navbar-toggler\" type=\"button\">\n                        <scrm-image class=\"responsive-menu-toggler\" image=\"hamburger\"></scrm-image>\n                    </button>\n                    <nav class=\"navbar-expand\" [ngClass]=\"(isSmallScreen() && isSearchBoxVisible()) ? 'd-none' : 'd-block'\">\n                        <ul class=\"navbar-nav h-100\">\n                            <li *ngIf=\"navbar.current && !navbar.current.isGroupedMenu\" class=\"top-nav nav-item dropdown mobile-navbar-active-module h-100 non-grouped\">\n                                <scrm-menu-item [item]=\"navbar.current\"></scrm-menu-item>\n                            </li>\n                        </ul>\n                    </nav>\n                </div>\n\n                <div class=\"d-flex align-items-center\">\n                    <ng-container *ngTemplateOutlet=\"actionIcons\"></ng-container>\n                    <div class=\"global-links action-dropdown\" ngbDropdown>\n                        <li class=\"global-link-item\">\n                            <a #mobileGlobalLinkTitle class=\"nav-link primary-global-link dropdown-toggle\"\n                               ngbDropdownToggle>\n                                <scrm-image class=\"global-action-icon sicon-2x\" image=\"user\"></scrm-image>\n                            </a>\n                            <div [style.min-width.px]=\"mobileGlobalLinkTitle.offsetWidth\"\n                                 aria-labelledby=\"navbarDropdownMenuLink\"\n                                 class=\"dropdown-menu global-links-dropdown border shadow-sm-2\" ngbDropdownMenu>\n                                <span\n                                    class=\"global-user-name\">{{ navbar.currentUser.firstName }} {{ navbar.currentUser.lastName }}</span>\n                                <ng-template [ngIf]=\"navbar.globalActions\">\n                                    <ng-container\n                                        *ngFor=\"let globalAction of navbar.globalActions; let first = first; let last = last;\">\n                                        <a class=\"dropdown-item global-links-sublink\"\n                                           href=\"{{ globalAction.link.url }}\"\n                                           ngbDropdownItem\n                                           target=\"{{ globalAction.link.target }}\">{{ globalAction.link.label }}\n                                        </a>\n                                        <hr *ngIf=\"last === true || first === true\"/>\n                                    </ng-container>\n                                </ng-template>\n                                <scrm-logout-ui></scrm-logout-ui>\n                            </div>\n                        </li>\n                    </div>\n                </div>\n\n            </ul>\n\n        </ng-container>\n\n        <!-- End of mobile navigation section-->\n\n        <!-- Start of navbar section with data once authenticated -->\n\n        <ng-container *ngIf=\"this.isUserLoggedIn && !mobileNavbar\">\n            <nav class=\"navbar navbar-expand-md navbar-1\">\n                <div [ngbCollapse]=\"mainNavCollapse\" class=\"navbar-collapse collapse collapsenav\">\n                        <scrm-home-menu-item\n                            [active]=\"vm.appState.module && vm.appState.module === 'home'\"\n                            [route]=\"getHomePage()\"\n                        ></scrm-home-menu-item>\n\n                        <!-- Navbar with grouped tabs -->\n\n                        <ng-container *ngIf=\"vm.userPreferences['navigation_paradigm'] == 'gm'\">\n\n                            <ul class=\"navbar-nav grouped\">\n\n                                <ng-container *ngIf=\"navbar.current && navbar.current.isGroupedMenu\">\n                                    <li class=\"top-nav nav-item dropdown main-grouped\">\n                                        <scrm-grouped-menu-item\n                                                [item]=\"navbar.current\"\n                                                [subNavCollapse]=\"subNavCollapse\"\n                                                [index]=\"1\"\n                                        >\n                                        </scrm-grouped-menu-item>\n\n                                    </li>\n                                </ng-container>\n\n                                <li *ngIf=\"navbar.current && !navbar.current.isGroupedMenu\" class=\"top-nav nav-item dropdown non-grouped active\">\n                                    <scrm-menu-item [item]=\"navbar.current\" [index]=\"1\"></scrm-menu-item>\n                                </li>\n\n                                <li *ngFor=\"let item of navbar.menu; let i = index;\" class=\"top-nav nav-item dropdown main-grouped\">\n                                    <scrm-grouped-menu-item\n                                        [item]=\"item\"\n                                        [subNavCollapse]=\"subNavCollapse\"\n                                        [index]=\"i+2\"\n                                    >\n                                    </scrm-grouped-menu-item>\n\n                                </li>\n                            </ul>\n\n                            <scrm-menu-items-list [items]=\"navbar.all.modules\"\n                                                  labelKey=\"LBL_TABGROUP_ALL\"\n                                                  [index]=\"navbar.menu.length + 2\">\n                            </scrm-menu-items-list>\n\n                        </ng-container>\n\n\n                        <!-- END Navbar with grouped tabs -->\n\n                        <!-- Navbar with non-grouped tabs -->\n\n                        <ng-container *ngIf=\"vm.userPreferences['navigation_paradigm'] != 'gm'\">\n\n                            <ul class=\"navbar-nav\">\n                                <li *ngIf=\"navbar.current && !navbar.current.isGroupedMenu\" class=\"top-nav nav-item dropdown non-grouped active\">\n                                    <scrm-menu-item [item]=\"navbar.current\" [index]=\"1\"></scrm-menu-item>\n                                </li>\n\n                                <ng-container *ngIf=\"navbar.current?.submenu  && navbar.current.isGroupedMenu\">\n                                    <li class=\"top-nav nav-item dropdown main-grouped\">\n                                        <scrm-grouped-menu-item\n                                            [item]=\"navbar.current\"\n                                            [subNavCollapse]=\"subNavCollapse\"\n                                            [index]=\"1\">\n                                        </scrm-grouped-menu-item>\n                                    </li>\n                                </ng-container>\n\n                                <li *ngFor=\"let item of navbar.menu; let i = index\" class=\"top-nav nav-item dropdown non-grouped\">\n                                    <scrm-menu-item [item]=\"item\" [index]=\"i+2\"></scrm-menu-item>\n                                </li>\n                            </ul>\n\n                        <scrm-menu-items-list [items]=\"navbar.all.modules\"\n                                              labelKey=\"LBL_MORE\"\n                                                [index]=\"navbar.menu.length + 2\">\n                        </scrm-menu-items-list>\n\n                        </ng-container>\n\n                        <!-- END Navbar with non-grouped tabs -->\n\n                </div>\n\n                <ng-container *ngTemplateOutlet=\"actionIcons\"></ng-container>\n\n                <!-- Global Links -->\n\n                <div class=\"global-links action-dropdown\" ngbDropdown>\n                    <ul class=\"navbar-nav\">\n                        <li class=\"global-link-item\">\n                            <a class=\"nav-link primary-global-link\" ngbDropdownToggle>\n                                <scrm-image class=\"global-action-icon sicon-2x\" image=\"user\"></scrm-image>\n                            </a>\n                            <div aria-labelledby=\"navbarDropdownMenuLink\"\n                                 class=\"dropdown-menu global-links-dropdown border shadow-sm-2 dropdown-menu-right\" ngbDropdownMenu>\n                                <span\n                                    class=\"global-user-name\">{{ navbar.currentUser.firstName }} {{ navbar.currentUser.lastName }}</span>\n                                <ng-container *ngIf=\"navbar.globalActions\">\n                                    <ng-container\n                                        *ngFor=\"let globalAction of navbar.globalActions; let first = first; let last = last;\">\n                                        <a class=\"dropdown-item global-links-sublink\"\n                                           href=\"{{ globalAction.link.url }}\"\n                                           ngbDropdownItem\n                                           target=\"{{ globalAction.link.target }}\">{{ globalAction.link.label }}\n                                        </a>\n                                        <hr *ngIf=\"last === true || first === true\"/>\n                                    </ng-container>\n\n                                </ng-container>\n                                <scrm-logout-ui></scrm-logout-ui>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n\n                <!-- END Global Links -->\n\n            </nav>\n\n            <!-- End of navbar section with data once authenticated -->\n\n        </ng-container>\n    </ng-container>\n\n    <ng-template #actionIcons>\n        <div class=\"action-group navbar-action-group\">\n            <!--Quick Create-->\n            <div class=\"action-new action-dropdown\" ngbDropdown>\n                <ul class=\"navbar-nav border-0\">\n                    <li class=\"global-link-item\">\n                        <a class=\"action-link primary-global-link\" type=\"button\" aria-label=\"Quick Create\" ngbDropdownToggle>\n                            <scrm-image class=\"action-btn-icon\" image=\"plus\"></scrm-image>\n                        </a>\n                        <ul [class.dropdown-menu-right]=\"!mobileNavbar\"\n                            [class.dropdown-menu-right-center]=\"mobileNavbar\"\n                            class=\"dropdown-menu dropdown-menu-left border shadow-sm-2\" ngbDropdownMenu>\n\n                            <ng-container *ngIf=\"(navbar?.current?.module ?? '') && currentQuickActions.length\">\n                                <li class=\"new-list-item-header font-weight-bold\">\n                                    <scrm-label labelKey=\"LBL_MODULE_NAME\" [module]=\"navbar.current.module\"></scrm-label>\n                                </li>\n                                <li class=\"new-list-item\" *ngFor=\"let moduleQuickAction of currentQuickActions\">\n                                    <ng-container *ngIf=\"!moduleQuickAction.process\">\n                                        <a [routerLink]=\"moduleQuickAction.url\" [queryParams]=\"moduleQuickAction?.params ?? null\" class=\"d-flex align-items-center\">\n                                            <scrm-label [labelKey]=\"moduleQuickAction.labelKey\" [module]=\"navbar.current.module\" class=\"new-list-item-label\"></scrm-label>\n                                        </a>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"moduleQuickAction.process\">\n                                        <a (click)=\"handleProcess(moduleQuickAction)\" class=\"d-flex align-items-center\">\n                                            <scrm-label [labelKey]=\"moduleQuickAction.labelKey\" [module]=\"navbar.current.module\" class=\"new-list-item-label\"></scrm-label>\n                                        </a>\n                                    </ng-container>\n\n                                </li>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"(this?.navigation?.quickActions ?? []).length\">\n                                <li class=\"new-list-item-header font-weight-bold\">\n                                    <scrm-label labelKey=\"LBL_QUICK_ACTIONS\"></scrm-label>\n                                </li>\n                                <li class=\"new-list-item\" *ngFor=\"let quickAction of (this?.navigation?.quickActions ?? [])\">\n                                    <ng-container *ngIf=\"!quickAction.process\">\n                                        <a [routerLink]=\"quickAction.url\" [queryParams]=\"quickAction?.params ?? null\" class=\"d-flex align-items-center\">\n                                            <scrm-label [labelKey]=\"quickAction.labelKey\" [module]=\"quickAction.module\" class=\"new-list-item-label\"></scrm-label>\n                                        </a>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"quickAction.process\">\n                                        <a (click)=\"handleProcess(quickAction)\" class=\"d-flex align-items-center\">\n                                            <scrm-label [labelKey]=\"quickAction.labelKey\" [module]=\"quickAction.module\" class=\"new-list-item-label\"></scrm-label>\n                                        </a>\n                                    </ng-container>\n                                </li>\n                            </ng-container>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n            <!--Recently Viewed-->\n            <div class=\"action-history action-dropdown\" ngbDropdown>\n                <ul class=\"navbar-nav border-0 \">\n                    <li class=\"global-link-item\">\n                        <a class=\"action-link primary-global-link\" type=\"button\" aria-label=\"Recently Viewed\" ngbDropdownToggle>\n                            <scrm-image class=\"action-btn-icon\" image=\"recently_viewed\"></scrm-image>\n                        </a>\n                        <div class=\"dropdown-menu border shadow-sm-2 dropdown-menu-right scrollbar-thick recently-viewed-nav-header\"\n                             [class.dropdown-menu-right]=\"!mobileNavbar\" ngbDropdownMenu>\n                            <scrm-recently-viewed class=\"recently-viewed\" [menuItems]=\"recentlyViewed$ | async | slice:0:recentlyViewedCount\"></scrm-recently-viewed>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n\n            <!--Searchbar-->\n            <div class=\"d-flex align-items-center px-1 action-search\">\n                <a class=\"search-mobile-view action-link primary-global-link\" [ngClass]=\"isSearchBoxVisible() ? 'd-none' : 'd-block'\"\n                   type=\"button\" (click)=\"openSearchBox()\" aria-label=\"Search\">\n                    <scrm-image class=\"action-btn-icon\" image=\"search\"></scrm-image>\n                </a>\n\n                <div [ngClass]=\"isSearchBoxVisible() ? 'd-block' : 'd-none'\" [@mobileSearchBarAnm]>\n                    <scrm-search-bar\n                        [labelKey]=\"'LBL_SEARCH'\"\n                        [klass]=\"'search-bar-global'\"\n                        [searchTrigger]=\"'enter'\"\n                        [isMobile]=\"isSmallScreen()\"\n                        (isSearchVisible)=\"closeSearchBox($event)\"\n                        (searchExpression)=\"search($event)\" #searchTerm>\n                    </scrm-search-bar>\n                </div>\n            </div>\n            <!--Notifications-->\n            <div *ngIf=\"notificationsEnabled && checkAppStrings(vm.appStrings) && arePreferencesInitialized(vm.userPreferences)\"\n                 class=\"action-alert action-dropdown\" ngbDropdown>\n                <ul class=\"navbar-nav border-0\">\n                    <li class=\"global-link-item\">\n                        <a class=\"action-link primary-global-link\" type=\"button\"\n                           (mouseenter)=\"markAsRead()\" ngbDropdownToggle>\n                            <scrm-image class=\"action-btn-icon\" image=\"alert\"></scrm-image>\n                        </a>\n                        <ng-container *ngIf=\"(notificationCount$ | async) as notificationCount\">\n                                    <span *ngIf=\"(notificationCount ?? false)\"\n                                          class=\"badge badge-position rounded-pill bg-danger text-white\">\n                                        <ng-container *ngIf=\"notificationCount > 0\">{{notificationCount }}</ng-container>\n                                    </span>\n                        </ng-container>\n                        <div class=\"dropdown-menu border shadow-sm-2 dropdown-menu-right\"\n                              aria-labelledby=\"navbarDropdownMenuLink\" ngbDropdownMenu>\n                            <scrm-notifications></scrm-notifications>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n    </ng-template>\n\n</div>\n\n<!-- End of main navbar section -->\n" }]
    }], function () { return [{ type: i1.NavigationStore }, { type: i2.LanguageStore }, { type: i3.UserPreferenceStore }, { type: i4.SystemConfigStore }, { type: i5.AppStateStore }, { type: i6.AuthService }, { type: i7.ModuleNavigation }, { type: i8.ScreenSizeObserverService }, { type: i9.AsyncActionService }, { type: i10.NotificationStore }, { type: i11.GlobalRecentlyViewedStore }, { type: i12.GlobalSearch }, { type: i13.BreakpointObserver }]; }, { mobileGlobalLinkTitle: [{
            type: ViewChild,
            args: ['mobileGlobalLinkTitle']
        }], searchTermRef: [{
            type: ViewChild,
            args: ['searchTerm', { static: false }]
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL2Jhc2UtbmF2YmFyL2Jhc2UtbmF2YmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL25hdmJhci9iYXNlLW5hdmJhci9iYXNlLW5hdmJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2SCxPQUFPLEVBQUMsaUJBQWlCLEVBQTJCLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEVBQTRFLENBQUM7QUFDNUcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDbkYsT0FBTyxFQUEyQixlQUFlLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUNyRyxPQUFPLEVBQW9CLG1CQUFtQixFQUFDLE1BQU0sc0RBQXNELENBQUM7QUFDNUcsT0FBTyxFQUNILFVBQVUsRUFDVix5QkFBeUIsRUFDNUIsTUFBTSx3RUFBd0UsQ0FBQztBQUNo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O29CQUMxQixVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxVQUFVLEVBQUU7d0JBQzFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQztxQkFDbEMsQ0FBQyxDQUFDO2lCQUNOLENBQUM7YUFDTDs7U0FFUSxtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQVovQixTQUFTOzJCQUNJLGtCQUFrQixjQUdoQjtvQkFDUixPQUFPLENBQUMsb0JBQW9CLEVBQUU7d0JBQzFCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLFVBQVUsRUFBRTs0QkFDMUMsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDO3lCQUNsQyxDQUFDLENBQUM7cUJBQ04sQ0FBQztpQkFDTDtzY0FJbUMscUJBQXFCO2tCQUF4RCxTQUFTO21CQUFDLHVCQUF1QjtZQUNVLGFBQWE7a0JBQXhELFNBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQXVHMUMsUUFBUTtrQkFEUCxZQUFZO21CQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBPbkluaXQsIHNpZ25hbCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtOYXZiYXJNb2RlbH0gZnJvbSAnLi4vbmF2YmFyLW1vZGVsJztcbmltcG9ydCB7TmF2YmFyQWJzdHJhY3R9IGZyb20gJy4uL25hdmJhci5hYnN0cmFjdCc7XG5pbXBvcnQge3RyYW5zaXRpb24sIHRyaWdnZXIsIHVzZUFuaW1hdGlvbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge2JhY2tJbkRvd259IGZyb20gJ25nLWFuaW1hdGUnO1xuaW1wb3J0IHtBY3Rpb25OYW1lTWFwcGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL2FjdGlvbi1uYW1lLW1hcHBlci9hY3Rpb24tbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtNb2R1bGVBY3Rpb24sIE5hdmlnYXRpb24sIE5hdmlnYXRpb25TdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VNYXAsIFVzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtcbiAgICBTY3JlZW5TaXplLFxuICAgIFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2Vcbn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdWkvc2NyZWVuLXNpemUtb2JzZXJ2ZXIvc2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZSc7XG5pbXBvcnQge1JvdXRlQ29udmVydGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL3JvdXRlLWNvbnZlcnRlci9yb3V0ZS1jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nc30gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge0FwcFN0YXRlLCBBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7TWVudUl0ZW0sIHJlYWR5LCBSZWNlbnRseVZpZXdlZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QXN5bmNBY3Rpb25JbnB1dCwgQXN5bmNBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnN0b3JlXCI7XG5pbXBvcnQge0dsb2JhbFJlY2VudGx5Vmlld2VkU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9nbG9iYWwtcmVjZW50bHktdmlld2VkL2dsb2JhbC1yZWNlbnRseS12aWV3ZWQuc3RvcmVcIjtcbmltcG9ydCB7R2xvYmFsU2VhcmNofSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9nbG9iYWwtc2VhcmNoL2dsb2JhbC1zZWFyY2guc2VydmljZVwiO1xuaW1wb3J0IHtCcmVha3BvaW50T2JzZXJ2ZXIsIEJyZWFrcG9pbnRzLCBCcmVha3BvaW50U3RhdGV9IGZyb20gXCJAYW5ndWxhci9jZGsvbGF5b3V0XCI7XG5pbXBvcnQge1NlYXJjaEJhckNvbXBvbmVudH0gZnJvbSBcIi4uLy4uL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWJhc2UtbmF2YmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmFzZS1uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdtb2JpbGVTZWFyY2hCYXJBbm0nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCB1c2VBbmltYXRpb24oYmFja0luRG93biwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge3RpbWluZzogMC41LCBkZWxheTogMH1cbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKCdtb2JpbGVHbG9iYWxMaW5rVGl0bGUnKSBtb2JpbGVHbG9iYWxMaW5rVGl0bGU6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnc2VhcmNoVGVybScsIHsgc3RhdGljOiBmYWxzZSB9KSBzZWFyY2hUZXJtUmVmOiBTZWFyY2hCYXJDb21wb25lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgc3RhdGljIGluc3RhbmNlczogQmFzZU5hdmJhckNvbXBvbmVudFtdID0gW107XG5cbiAgICBsb2FkZWQgPSB0cnVlO1xuICAgIGlzVXNlckxvZ2dlZEluOiBib29sZWFuO1xuICAgIG1haW5OYXZDb2xsYXBzZSA9IHRydWU7XG4gICAgc3ViTmF2Q29sbGFwc2UgPSB0cnVlO1xuICAgIG1vYmlsZVN1Yk5hdiA9IGZhbHNlO1xuICAgIGJhY2tMaW5rID0gZmFsc2U7XG4gICAgbWFpbk5hdkxpbmsgPSB0cnVlO1xuICAgIHN1Ym1lbnU6IGFueSA9IFtdO1xuICAgIG1vZHVsZU5hbWVNYXBwZXIgPSBuZXcgTW9kdWxlTmFtZU1hcHBlcih0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlKTtcbiAgICBhY3Rpb25OYW1lTWFwcGVyID0gbmV3IEFjdGlvbk5hbWVNYXBwZXIodGhpcy5zeXN0ZW1Db25maWdTdG9yZSk7XG4gICAgcm91dGVDb252ZXJ0ZXIgPSBuZXcgUm91dGVDb252ZXJ0ZXIodGhpcy5tb2R1bGVOYW1lTWFwcGVyLCB0aGlzLmFjdGlvbk5hbWVNYXBwZXIsIHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUpO1xuICAgIG5hdmJhcjogTmF2YmFyTW9kZWw7XG4gICAgbWF4VGFicyA9IDg7XG4gICAgc2NyZWVuOiBTY3JlZW5TaXplID0gU2NyZWVuU2l6ZS5NZWRpdW07XG4gICAgbm90aWZpY2F0aW9uc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdXG4gICAgbmF2aWdhdGlvbjogTmF2aWdhdGlvbjtcbiAgICBtb2JpbGVOYXZiYXIgPSBmYWxzZTtcbiAgICBpc1NtYWxsU2NyZWVuID0gc2lnbmFsPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBpc1RhYmxldFNjcmVlbiA9IHNpZ25hbDxib29sZWFuPihmYWxzZSk7XG4gICAgZHJvcGRvd25MZW5ndGg6IG51bWJlcjtcbiAgICByZWNlbnRseVZpZXdlZENvdW50OiBudW1iZXIgPSAxMDtcblxuICAgIGN1cnJlbnRRdWlja0FjdGlvbnM6IE1vZHVsZUFjdGlvbltdO1xuICAgIGlzU2VhcmNoQm94VmlzaWJsZSA9IHNpZ25hbDxib29sZWFuPihmYWxzZSk7XG5cbiAgICBsYW5ndWFnZXMkOiBPYnNlcnZhYmxlPExhbmd1YWdlU3RyaW5ncz4gPSB0aGlzLmxhbmd1YWdlU3RvcmUudm0kO1xuICAgIHVzZXJQcmVmZXJlbmNlcyQ6IE9ic2VydmFibGU8VXNlclByZWZlcmVuY2VNYXA+ID0gdGhpcy51c2VyUHJlZmVyZW5jZVN0b3JlLnVzZXJQcmVmZXJlbmNlcyQ7XG4gICAgY3VycmVudFVzZXIkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyJDtcbiAgICBhcHBTdGF0ZSQ6IE9ic2VydmFibGU8QXBwU3RhdGU+ID0gdGhpcy5hcHBTdGF0ZS52bSQ7XG4gICAgbmF2aWdhdGlvbiQ6IE9ic2VydmFibGU8TmF2aWdhdGlvbj4gPSB0aGlzLm5hdmlnYXRpb25TdG9yZS52bSQ7XG4gICAgcmVjZW50bHlWaWV3ZWQkOiBPYnNlcnZhYmxlPFJlY2VudGx5Vmlld2VkW10+ID0gdGhpcy5nbG9iYWxSZWNlbnRseVZpZXdlZFN0b3JlLmdsb2JhbFJlY2VudGx5Vmlld2VkJDtcblxuICAgIG5vdGlmaWNhdGlvbkNvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gICAgdm0kID0gdGhpcy5uYXZpZ2F0aW9uJC5waXBlKFxuICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChcbiAgICAgICAgICAgIHRoaXMudXNlclByZWZlcmVuY2VzJCxcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIkLFxuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZSQsXG4gICAgICAgICAgICB0aGlzLnNjcmVlblNpemUuc2NyZWVuU2l6ZSQsXG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlcyQsXG4gICAgICAgICksXG4gICAgICAgIG1hcCgoW25hdmlnYXRpb24sIHVzZXJQcmVmZXJlbmNlcywgY3VycmVudFVzZXIsIGFwcFN0YXRlLCBzY3JlZW5TaXplLCBsYW5ndWFnZV0pID0+IHtcblxuICAgICAgICAgICAgaWYgKHNjcmVlblNpemUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlbiA9IHNjcmVlblNpemU7XG4gICAgICAgICAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmF2aWdhdGlvbiAmJiBuYXZpZ2F0aW9uLm1vZHVsZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZU1heFRhYnMobmF2aWdhdGlvbik7XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0TW9kdWxlUXVpY2tBY3Rpb25zKGFwcFN0YXRlLm1vZHVsZSk7XG5cbiAgICAgICAgICAgIHRoaXMubmF2YmFyLnJlc2V0TWVudSgpO1xuICAgICAgICAgICAgaWYgKHJlYWR5KFtsYW5ndWFnZS5hcHBTdHJpbmdzLCBsYW5ndWFnZS5tb2RTdHJpbmdzLCBsYW5ndWFnZS5hcHBMaXN0U3RyaW5ncywgdXNlclByZWZlcmVuY2VzLCBjdXJyZW50VXNlcl0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXZiYXIuYnVpbGQoXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heFRhYnMsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLFxuICAgICAgICAgICAgICAgIHVzZXJQcmVmZXJlbmNlcyxcbiAgICAgICAgICAgICAgICBhcHBTdGF0ZSxcbiAgICAgICAgICAgICAgICBhcHBTdHJpbmdzOiBsYW5ndWFnZS5hcHBTdHJpbmdzIHx8IHt9LFxuICAgICAgICAgICAgICAgIGFwcExpc3RTdHJpbmdzOiBsYW5ndWFnZS5hcHBMaXN0U3RyaW5ncyB8fCB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uU3RvcmU6IE5hdmlnYXRpb25TdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB1c2VyUHJlZmVyZW5jZVN0b3JlOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgc2NyZWVuU2l6ZTogU2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uU2VydmljZTogQXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbm90aWZpY2F0aW9uU3RvcmU6IE5vdGlmaWNhdGlvblN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgZ2xvYmFsUmVjZW50bHlWaWV3ZWRTdG9yZTogR2xvYmFsUmVjZW50bHlWaWV3ZWRTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGdsb2JhbFNlYXJjaDogR2xvYmFsU2VhcmNoLFxuICAgICAgICBwcm90ZWN0ZWQgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgQVBJXG4gICAgICovXG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgICBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaW5uZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLm1vYmlsZU5hdmJhciA9IGlubmVyV2lkdGggPD0gNzY4O1xuICAgICAgICB0aGlzLmlzU21hbGxTY3JlZW4uc2V0KGlubmVyV2lkdGggPD0gNjAwKTtcbiAgICAgICAgdGhpcy5pc1RhYmxldFNjcmVlbi5zZXQoaW5uZXJXaWR0aCA8PSA5OTIpO1xuICAgICAgICBpZighdGhpcy5pc1NtYWxsU2NyZWVuKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTZWFyY2hCb3hWaXNpYmxlLnNldCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBuYXZiYXIgPSBuZXcgTmF2YmFyQWJzdHJhY3QoXG4gICAgICAgICAgICB0aGlzLnJvdXRlQ29udmVydGVyLFxuICAgICAgICAgICAgdGhpcy5tb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICAgICAgdGhpcy51c2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVN0b3JlLFxuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZSxcbiAgICAgICAgICAgIHRoaXMubW9kdWxlTmFtZU1hcHBlclxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldE5hdmJhcihuYXZiYXIpO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzVXNlckxvZ2dlZEluID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xuXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uQ291bnQkID0gdGhpcy5ub3RpZmljYXRpb25TdG9yZS5ub3RpZmljYXRpb25zVW5yZWFkVG90YWwkO1xuXG4gICAgICAgIHRoaXMucmVjZW50bHlWaWV3ZWRDb3VudCA9IHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUuZ2V0VWkoJ2dsb2JhbF9yZWNlbnRseV92aWV3ZWQnKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLm5vdGlmaWNhdGlvblN0b3JlLm5vdGlmaWNhdGlvbnNFbmFibGVkJC5zdWJzY3JpYmUobm90aWZpY2F0aW9uc0VuYWJsZWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zRW5hYmxlZCA9IG5vdGlmaWNhdGlvbnNFbmFibGVkO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShbXG4gICAgICAgICAgICBCcmVha3BvaW50cy5YU21hbGwsXG4gICAgICAgIF0pLnN1YnNjcmliZSgocmVzdWx0OiBCcmVha3BvaW50U3RhdGUpID0+IHtcbiAgICAgICAgICAgIGxldCBoYXNTZWFyY2hUZXJtO1xuICAgICAgICAgICAgaWYoISF0aGlzLnNlYXJjaFRlcm1SZWY/LnNlYXJjaEZvcm0uZ2V0KCdzZWFyY2hUZXJtJykudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBoYXNTZWFyY2hUZXJtID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFzU2VhcmNoVGVybSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5tYXRjaGVzICYmICFoYXNTZWFyY2hUZXJtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NlYXJjaEJveFZpc2libGUuc2V0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgY2hlY2tBcHBTdHJpbmdzKGFwcFN0cmluZ3MpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGFwcFN0cmluZ3MgJiYgT2JqZWN0LmtleXMoYXBwU3RyaW5ncykubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBhcmVQcmVmZXJlbmNlc0luaXRpYWxpemVkKHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZU1hcCkge1xuICAgICAgICByZXR1cm4gcHJlZmVyZW5jZXMgJiYgT2JqZWN0LmtleXMocHJlZmVyZW5jZXMpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBtYXJrQXNSZWFkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblN0b3JlLm1hcmtOb3RpZmljYXRpb25zQXNSZWFkKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMubW9iaWxlR2xvYmFsTGlua1RpdGxlPy5uYXRpdmVFbGVtZW50Py5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcGRvd25MZW5ndGggPSB0aGlzLm1vYmlsZUdsb2JhbExpbmtUaXRsZS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBzdWJuYXZpZ2F0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgdHJpZ2dlcmVkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zXG4gICAgICovXG4gICAgcHVibGljIGNoYW5nZVN1Yk5hdihldmVudDogRXZlbnQsIGl0ZW1zOiBNZW51SXRlbVtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9iaWxlU3ViTmF2ID0gIXRoaXMubW9iaWxlU3ViTmF2O1xuICAgICAgICB0aGlzLmJhY2tMaW5rID0gIXRoaXMuYmFja0xpbms7XG4gICAgICAgIHRoaXMubWFpbk5hdkxpbmsgPSAhdGhpcy5tYWluTmF2TGluaztcbiAgICAgICAgdGhpcy5zdWJtZW51ID0gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGxpbmsgZmxhZ3NcbiAgICAgKi9cbiAgICBwdWJsaWMgbmF2QmFja0xpbmsoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9iaWxlU3ViTmF2ID0gIXRoaXMubW9iaWxlU3ViTmF2O1xuICAgICAgICB0aGlzLmJhY2tMaW5rID0gIXRoaXMuYmFja0xpbms7XG4gICAgICAgIHRoaXMubWFpbk5hdkxpbmsgPSAhdGhpcy5tYWluTmF2TGluaztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgaG9tZSBwYWdlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBob21lcGFnZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRIb21lUGFnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRIb21lUGFnZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIEFQSVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU2V0IG5hdmJhciBtb2RlbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5hdmJhciBtb2RlbFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXROYXZiYXIobmF2YmFyOiBOYXZiYXJNb2RlbCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5hdmJhciA9IG5hdmJhcjtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGlzIGxvYWRlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge3tib29sZWFufX0gaXMgbG9hZGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzTG9hZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkZWQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNhbGN1bGF0ZU1heFRhYnMobmF2aWdhdGlvbjogTmF2aWdhdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCBzaXplTWFwID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRDb25maWdWYWx1ZSgnbmF2aWdhdGlvbl90YWJfbGltaXRzJyk7XG4gICAgICAgIGlmICh0aGlzLnNjcmVlbiAmJiBzaXplTWFwKSB7XG5cbiAgICAgICAgICAgIGxldCBtYXhUYWJzID0gc2l6ZU1hcFt0aGlzLnNjcmVlbl07XG4gICAgICAgICAgICBpZiAoIW1heFRhYnMgfHwgbmF2aWdhdGlvbi5tYXhUYWJzICYmIG5hdmlnYXRpb24ubWF4VGFicyA8IG1heFRhYnMpIHtcbiAgICAgICAgICAgICAgICBtYXhUYWJzID0gbmF2aWdhdGlvbi5tYXhUYWJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1heFRhYnMgPSBtYXhUYWJzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW9kdWxlUXVpY2tBY3Rpb25zKG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZU5hdmlnYXRpb24gPSB0aGlzPy5uYXZpZ2F0aW9uPy5tb2R1bGVzW21vZHVsZV0gPz8gbnVsbDtcbiAgICAgICAgY29uc3QgbW9kdWxlTmF2aWdhdGlvbk1lbnUgPSBtb2R1bGVOYXZpZ2F0aW9uPy5tZW51ID8/IFtdO1xuICAgICAgICBpZiAobW9kdWxlTmF2aWdhdGlvbiA9PT0gbnVsbCB8fCAhbW9kdWxlTmF2aWdhdGlvbk1lbnUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWlja0FjdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXSBhcyBNb2R1bGVBY3Rpb25bXTtcblxuICAgICAgICBtb2R1bGVOYXZpZ2F0aW9uTWVudS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgIGlmICghZW50cnkudXJsIHx8ICFlbnRyeS5xdWlja0FjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdXJsID0gZW50cnk/LnVybCA/PyAnJztcblxuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgICAgICAgICB1cmw6IHVybC5yZXBsYWNlKCcvIy8nLCAnLycpXG4gICAgICAgICAgICB9IGFzIE1vZHVsZUFjdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFF1aWNrQWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgfVxuXG4gICAgaGFuZGxlUHJvY2VzcyhhY3Rpb246IE1vZHVsZUFjdGlvbikge1xuICAgICAgICBpZiAoIWFjdGlvbi5wcm9jZXNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9jZXNzVHlwZSA9IGFjdGlvbi5wcm9jZXNzO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhY3Rpb246IHByb2Nlc3NUeXBlLFxuICAgICAgICAgICAgbW9kdWxlOiBhY3Rpb24ubW9kdWxlLFxuICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG5cbiAgICAgICAgdGhpcy5hc3luY0FjdGlvblNlcnZpY2UucnVuKHByb2Nlc3NUeXBlLCBvcHRpb25zKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIG9wZW5TZWFyY2hCb3goKSB7XG4gICAgICAgIGlmKHRoaXMuaXNTbWFsbFNjcmVlbigpKSB7XG4gICAgICAgICAgICB0aGlzLmlzU2VhcmNoQm94VmlzaWJsZS5zZXQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZVNlYXJjaEJveChpc1Zpc2libGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc1NlYXJjaEJveFZpc2libGUuc2V0KGlzVmlzaWJsZSk7XG4gICAgfVxuXG4gICAgc2VhcmNoKHNlYXJjaFRlcm06IHN0cmluZykge1xuICAgICAgICB0aGlzLmdsb2JhbFNlYXJjaC5uYXZpZ2F0ZVRvU2VhcmNoKHNlYXJjaFRlcm0pLmZpbmFsbHkoKTtcbiAgICB9XG5cbiAgICB0b2dnbGVTaWRlYmFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcFN0YXRlLnRvZ2dsZVNpZGViYXIoKTtcbiAgICB9XG5cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjwhLS0gU3RhcnQgb2YgbWFpbiBuYXZiYXIgc2VjdGlvbiAtLT5cblxuPGRpdiAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIiBjbGFzcz1cInRvcC1wYW5lbCBmaXhlZC10b3BcIj5cblxuICAgIDwhLS0gU3RhcnQgb2YgZW1wdHkgbmF2YmFyIHNlY3Rpb24gdW50aWwgZGF0YSBpcyBsb2FkZWQgLS0+XG5cbiAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiIWxvYWRlZFwiPlxuICAgICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2Ugb3JkZXItNCBvcmRlci1tZC0wIGNvbGxhcHNlbmF2XCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0b3AtbmF2IG5hdi1pdGVtXCI+Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLSBFbmQgb2YgZW1wdHkgIHNlY3Rpb24gdW50aWwgZGF0YSBpcyBsb2FkZWQgLS0+XG5cbiAgICA8IS0tIFN0YXJ0IG9mIGVtcHR5IG5hdmJhciB3aXRoIGxvZ28gLS0+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibG9hZGVkXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdGhpcy5pc1VzZXJMb2dnZWRJblwiPlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBtbC0wIHBsLTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBsLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sb2dvLXVpPjwvc2NybS1sb2dvLXVpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8IS0tIEVuZCBvZiBlbXB0eSBuYXZiYXIgc2VjdGlvbiB3aXRoIGxvZ28gLS0+XG5cbiAgICAgICAgPCEtLSBTdGFydCBvZiBtb2JpbGUgbmF2aWdhdGlvbiBzZWN0aW9uIC0tPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0aGlzLmlzVXNlckxvZ2dlZEluICYmIG1vYmlsZU5hdmJhclwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyIG1vYmlsZS1uYXYtYmxvY2sgbW9iaWxlbmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0b2dnbGVTaWRlYmFyKClcIiBjbGFzcz1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJyZXNwb25zaXZlLW1lbnUtdG9nZ2xlclwiIGltYWdlPVwiaGFtYnVyZ2VyXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhci1leHBhbmRcIiBbbmdDbGFzc109XCIoaXNTbWFsbFNjcmVlbigpICYmIGlzU2VhcmNoQm94VmlzaWJsZSgpKSA/ICdkLW5vbmUnIDogJ2QtYmxvY2snXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IGgtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwibmF2YmFyLmN1cnJlbnQgJiYgIW5hdmJhci5jdXJyZW50LmlzR3JvdXBlZE1lbnVcIiBjbGFzcz1cInRvcC1uYXYgbmF2LWl0ZW0gZHJvcGRvd24gbW9iaWxlLW5hdmJhci1hY3RpdmUtbW9kdWxlIGgtMTAwIG5vbi1ncm91cGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbSBbaXRlbV09XCJuYXZiYXIuY3VycmVudFwiPjwvc2NybS1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImFjdGlvbkljb25zXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnbG9iYWwtbGlua3MgYWN0aW9uLWRyb3Bkb3duXCIgbmdiRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJnbG9iYWwtbGluay1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgI21vYmlsZUdsb2JhbExpbmtUaXRsZSBjbGFzcz1cIm5hdi1saW5rIHByaW1hcnktZ2xvYmFsLWxpbmsgZHJvcGRvd24tdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZ2JEcm9wZG93blRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJnbG9iYWwtYWN0aW9uLWljb24gc2ljb24tMnhcIiBpbWFnZT1cInVzZXJcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW3N0eWxlLm1pbi13aWR0aC5weF09XCJtb2JpbGVHbG9iYWxMaW5rVGl0bGUub2Zmc2V0V2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25NZW51TGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZ2xvYmFsLWxpbmtzLWRyb3Bkb3duIGJvcmRlciBzaGFkb3ctc20tMlwiIG5nYkRyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZ2xvYmFsLXVzZXItbmFtZVwiPnt7IG5hdmJhci5jdXJyZW50VXNlci5maXJzdE5hbWUgfX0ge3sgbmF2YmFyLmN1cnJlbnRVc2VyLmxhc3ROYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwibmF2YmFyLmdsb2JhbEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZ2xvYmFsQWN0aW9uIG9mIG5hdmJhci5nbG9iYWxBY3Rpb25zOyBsZXQgZmlyc3QgPSBmaXJzdDsgbGV0IGxhc3QgPSBsYXN0O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBnbG9iYWwtbGlua3Mtc3VibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cInt7IGdsb2JhbEFjdGlvbi5saW5rLnVybCB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmdiRHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwie3sgZ2xvYmFsQWN0aW9uLmxpbmsudGFyZ2V0IH19XCI+e3sgZ2xvYmFsQWN0aW9uLmxpbmsubGFiZWwgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyICpuZ0lmPVwibGFzdCA9PT0gdHJ1ZSB8fCBmaXJzdCA9PT0gdHJ1ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sb2dvdXQtdWk+PC9zY3JtLWxvZ291dC11aT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDwhLS0gRW5kIG9mIG1vYmlsZSBuYXZpZ2F0aW9uIHNlY3Rpb24tLT5cblxuICAgICAgICA8IS0tIFN0YXJ0IG9mIG5hdmJhciBzZWN0aW9uIHdpdGggZGF0YSBvbmNlIGF1dGhlbnRpY2F0ZWQgLS0+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoaXMuaXNVc2VyTG9nZ2VkSW4gJiYgIW1vYmlsZU5hdmJhclwiPlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLW1kIG5hdmJhci0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBbbmdiQ29sbGFwc2VdPVwibWFpbk5hdkNvbGxhcHNlXCIgY2xhc3M9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2UgY29sbGFwc2VuYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWhvbWUtbWVudS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGl2ZV09XCJ2bS5hcHBTdGF0ZS5tb2R1bGUgJiYgdm0uYXBwU3RhdGUubW9kdWxlID09PSAnaG9tZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3V0ZV09XCJnZXRIb21lUGFnZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3Njcm0taG9tZS1tZW51LWl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTmF2YmFyIHdpdGggZ3JvdXBlZCB0YWJzIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidm0udXNlclByZWZlcmVuY2VzWyduYXZpZ2F0aW9uX3BhcmFkaWdtJ10gPT0gJ2dtJ1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBncm91cGVkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5hdmJhci5jdXJyZW50ICYmIG5hdmJhci5jdXJyZW50LmlzR3JvdXBlZE1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRvcC1uYXYgbmF2LWl0ZW0gZHJvcGRvd24gbWFpbi1ncm91cGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZ3JvdXBlZC1tZW51LWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpdGVtXT1cIm5hdmJhci5jdXJyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdWJOYXZDb2xsYXBzZV09XCJzdWJOYXZDb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1ncm91cGVkLW1lbnUtaXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwibmF2YmFyLmN1cnJlbnQgJiYgIW5hdmJhci5jdXJyZW50LmlzR3JvdXBlZE1lbnVcIiBjbGFzcz1cInRvcC1uYXYgbmF2LWl0ZW0gZHJvcGRvd24gbm9uLWdyb3VwZWQgYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1tZW51LWl0ZW0gW2l0ZW1dPVwibmF2YmFyLmN1cnJlbnRcIiBbaW5kZXhdPVwiMVwiPjwvc2NybS1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIG5hdmJhci5tZW51OyBsZXQgaSA9IGluZGV4O1wiIGNsYXNzPVwidG9wLW5hdiBuYXYtaXRlbSBkcm9wZG93biBtYWluLWdyb3VwZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWdyb3VwZWQtbWVudS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N1Yk5hdkNvbGxhcHNlXT1cInN1Yk5hdkNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwiaSsyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1ncm91cGVkLW1lbnUtaXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1tZW51LWl0ZW1zLWxpc3QgW2l0ZW1zXT1cIm5hdmJhci5hbGwubW9kdWxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5PVwiTEJMX1RBQkdST1VQX0FMTFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCJuYXZiYXIubWVudS5sZW5ndGggKyAyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLW1lbnUtaXRlbXMtbGlzdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBFTkQgTmF2YmFyIHdpdGggZ3JvdXBlZCB0YWJzIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE5hdmJhciB3aXRoIG5vbi1ncm91cGVkIHRhYnMgLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2bS51c2VyUHJlZmVyZW5jZXNbJ25hdmlnYXRpb25fcGFyYWRpZ20nXSAhPSAnZ20nXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cIm5hdmJhci5jdXJyZW50ICYmICFuYXZiYXIuY3VycmVudC5pc0dyb3VwZWRNZW51XCIgY2xhc3M9XCJ0b3AtbmF2IG5hdi1pdGVtIGRyb3Bkb3duIG5vbi1ncm91cGVkIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbWVudS1pdGVtIFtpdGVtXT1cIm5hdmJhci5jdXJyZW50XCIgW2luZGV4XT1cIjFcIj48L3Njcm0tbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuYXZiYXIuY3VycmVudD8uc3VibWVudSAgJiYgbmF2YmFyLmN1cnJlbnQuaXNHcm91cGVkTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidG9wLW5hdiBuYXYtaXRlbSBkcm9wZG93biBtYWluLWdyb3VwZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1ncm91cGVkLW1lbnUtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXRlbV09XCJuYXZiYXIuY3VycmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdWJOYXZDb2xsYXBzZV09XCJzdWJOYXZDb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWdyb3VwZWQtbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIG5hdmJhci5tZW51OyBsZXQgaSA9IGluZGV4XCIgY2xhc3M9XCJ0b3AtbmF2IG5hdi1pdGVtIGRyb3Bkb3duIG5vbi1ncm91cGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1tZW51LWl0ZW0gW2l0ZW1dPVwiaXRlbVwiIFtpbmRleF09XCJpKzJcIj48L3Njcm0tbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbXMtbGlzdCBbaXRlbXNdPVwibmF2YmFyLmFsbC5tb2R1bGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEtleT1cIkxCTF9NT1JFXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCJuYXZiYXIubWVudS5sZW5ndGggKyAyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tbWVudS1pdGVtcy1saXN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBFTkQgTmF2YmFyIHdpdGggbm9uLWdyb3VwZWQgdGFicyAtLT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImFjdGlvbkljb25zXCI+PC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8IS0tIEdsb2JhbCBMaW5rcyAtLT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnbG9iYWwtbGlua3MgYWN0aW9uLWRyb3Bkb3duXCIgbmdiRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImdsb2JhbC1saW5rLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIHByaW1hcnktZ2xvYmFsLWxpbmtcIiBuZ2JEcm9wZG93blRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJnbG9iYWwtYWN0aW9uLWljb24gc2ljb24tMnhcIiBpbWFnZT1cInVzZXJcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25NZW51TGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZ2xvYmFsLWxpbmtzLWRyb3Bkb3duIGJvcmRlciBzaGFkb3ctc20tMiBkcm9wZG93bi1tZW51LXJpZ2h0XCIgbmdiRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJnbG9iYWwtdXNlci1uYW1lXCI+e3sgbmF2YmFyLmN1cnJlbnRVc2VyLmZpcnN0TmFtZSB9fSB7eyBuYXZiYXIuY3VycmVudFVzZXIubGFzdE5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuYXZiYXIuZ2xvYmFsQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBnbG9iYWxBY3Rpb24gb2YgbmF2YmFyLmdsb2JhbEFjdGlvbnM7IGxldCBmaXJzdCA9IGZpcnN0OyBsZXQgbGFzdCA9IGxhc3Q7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGdsb2JhbC1saW5rcy1zdWJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwie3sgZ2xvYmFsQWN0aW9uLmxpbmsudXJsIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZ2JEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ7eyBnbG9iYWxBY3Rpb24ubGluay50YXJnZXQgfX1cIj57eyBnbG9iYWxBY3Rpb24ubGluay5sYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgKm5nSWY9XCJsYXN0ID09PSB0cnVlIHx8IGZpcnN0ID09PSB0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxvZ291dC11aT48L3Njcm0tbG9nb3V0LXVpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gRU5EIEdsb2JhbCBMaW5rcyAtLT5cblxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIDwhLS0gRW5kIG9mIG5hdmJhciBzZWN0aW9uIHdpdGggZGF0YSBvbmNlIGF1dGhlbnRpY2F0ZWQgLS0+XG5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctdGVtcGxhdGUgI2FjdGlvbkljb25zPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWdyb3VwIG5hdmJhci1hY3Rpb24tZ3JvdXBcIj5cbiAgICAgICAgICAgIDwhLS1RdWljayBDcmVhdGUtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tbmV3IGFjdGlvbi1kcm9wZG93blwiIG5nYkRyb3Bkb3duPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgYm9yZGVyLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ2xvYmFsLWxpbmstaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhY3Rpb24tbGluayBwcmltYXJ5LWdsb2JhbC1saW5rXCIgdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJRdWljayBDcmVhdGVcIiBuZ2JEcm9wZG93blRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cImFjdGlvbi1idG4taWNvblwiIGltYWdlPVwicGx1c1wiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBbY2xhc3MuZHJvcGRvd24tbWVudS1yaWdodF09XCIhbW9iaWxlTmF2YmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZHJvcGRvd24tbWVudS1yaWdodC1jZW50ZXJdPVwibW9iaWxlTmF2YmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1sZWZ0IGJvcmRlciBzaGFkb3ctc20tMlwiIG5nYkRyb3Bkb3duTWVudT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIobmF2YmFyPy5jdXJyZW50Py5tb2R1bGUgPz8gJycpICYmIGN1cnJlbnRRdWlja0FjdGlvbnMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5ldy1saXN0LWl0ZW0taGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX01PRFVMRV9OQU1FXCIgW21vZHVsZV09XCJuYXZiYXIuY3VycmVudC5tb2R1bGVcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5ldy1saXN0LWl0ZW1cIiAqbmdGb3I9XCJsZXQgbW9kdWxlUXVpY2tBY3Rpb24gb2YgY3VycmVudFF1aWNrQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFtb2R1bGVRdWlja0FjdGlvbi5wcm9jZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwibW9kdWxlUXVpY2tBY3Rpb24udXJsXCIgW3F1ZXJ5UGFyYW1zXT1cIm1vZHVsZVF1aWNrQWN0aW9uPy5wYXJhbXMgPz8gbnVsbFwiIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwibW9kdWxlUXVpY2tBY3Rpb24ubGFiZWxLZXlcIiBbbW9kdWxlXT1cIm5hdmJhci5jdXJyZW50Lm1vZHVsZVwiIGNsYXNzPVwibmV3LWxpc3QtaXRlbS1sYWJlbFwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtb2R1bGVRdWlja0FjdGlvbi5wcm9jZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cImhhbmRsZVByb2Nlc3MobW9kdWxlUXVpY2tBY3Rpb24pXCIgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJtb2R1bGVRdWlja0FjdGlvbi5sYWJlbEtleVwiIFttb2R1bGVdPVwibmF2YmFyLmN1cnJlbnQubW9kdWxlXCIgY2xhc3M9XCJuZXctbGlzdC1pdGVtLWxhYmVsXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKHRoaXM/Lm5hdmlnYXRpb24/LnF1aWNrQWN0aW9ucyA/PyBbXSkubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5ldy1saXN0LWl0ZW0taGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX1FVSUNLX0FDVElPTlNcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5ldy1saXN0LWl0ZW1cIiAqbmdGb3I9XCJsZXQgcXVpY2tBY3Rpb24gb2YgKHRoaXM/Lm5hdmlnYXRpb24/LnF1aWNrQWN0aW9ucyA/PyBbXSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcXVpY2tBY3Rpb24ucHJvY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cInF1aWNrQWN0aW9uLnVybFwiIFtxdWVyeVBhcmFtc109XCJxdWlja0FjdGlvbj8ucGFyYW1zID8/IG51bGxcIiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cInF1aWNrQWN0aW9uLmxhYmVsS2V5XCIgW21vZHVsZV09XCJxdWlja0FjdGlvbi5tb2R1bGVcIiBjbGFzcz1cIm5ldy1saXN0LWl0ZW0tbGFiZWxcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicXVpY2tBY3Rpb24ucHJvY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJoYW5kbGVQcm9jZXNzKHF1aWNrQWN0aW9uKVwiIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwicXVpY2tBY3Rpb24ubGFiZWxLZXlcIiBbbW9kdWxlXT1cInF1aWNrQWN0aW9uLm1vZHVsZVwiIGNsYXNzPVwibmV3LWxpc3QtaXRlbS1sYWJlbFwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLVJlY2VudGx5IFZpZXdlZC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1oaXN0b3J5IGFjdGlvbi1kcm9wZG93blwiIG5nYkRyb3Bkb3duPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgYm9yZGVyLTAgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImdsb2JhbC1saW5rLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYWN0aW9uLWxpbmsgcHJpbWFyeS1nbG9iYWwtbGlua1wiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiUmVjZW50bHkgVmlld2VkXCIgbmdiRHJvcGRvd25Ub2dnbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJhY3Rpb24tYnRuLWljb25cIiBpbWFnZT1cInJlY2VudGx5X3ZpZXdlZFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGJvcmRlciBzaGFkb3ctc20tMiBkcm9wZG93bi1tZW51LXJpZ2h0IHNjcm9sbGJhci10aGljayByZWNlbnRseS12aWV3ZWQtbmF2LWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5kcm9wZG93bi1tZW51LXJpZ2h0XT1cIiFtb2JpbGVOYXZiYXJcIiBuZ2JEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tcmVjZW50bHktdmlld2VkIGNsYXNzPVwicmVjZW50bHktdmlld2VkXCIgW21lbnVJdGVtc109XCJyZWNlbnRseVZpZXdlZCQgfCBhc3luYyB8IHNsaWNlOjA6cmVjZW50bHlWaWV3ZWRDb3VudFwiPjwvc2NybS1yZWNlbnRseS12aWV3ZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwhLS1TZWFyY2hiYXItLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHB4LTEgYWN0aW9uLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwic2VhcmNoLW1vYmlsZS12aWV3IGFjdGlvbi1saW5rIHByaW1hcnktZ2xvYmFsLWxpbmtcIiBbbmdDbGFzc109XCJpc1NlYXJjaEJveFZpc2libGUoKSA/ICdkLW5vbmUnIDogJ2QtYmxvY2snXCJcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9wZW5TZWFyY2hCb3goKVwiIGFyaWEtbGFiZWw9XCJTZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJhY3Rpb24tYnRuLWljb25cIiBpbWFnZT1cInNlYXJjaFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cImlzU2VhcmNoQm94VmlzaWJsZSgpID8gJ2QtYmxvY2snIDogJ2Qtbm9uZSdcIiBbQG1vYmlsZVNlYXJjaEJhckFubV0+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLXNlYXJjaC1iYXJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEtleV09XCInTEJMX1NFQVJDSCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2tsYXNzXT1cIidzZWFyY2gtYmFyLWdsb2JhbCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3NlYXJjaFRyaWdnZXJdPVwiJ2VudGVyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbaXNNb2JpbGVdPVwiaXNTbWFsbFNjcmVlbigpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpc1NlYXJjaFZpc2libGUpPVwiY2xvc2VTZWFyY2hCb3goJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VhcmNoRXhwcmVzc2lvbik9XCJzZWFyY2goJGV2ZW50KVwiICNzZWFyY2hUZXJtPlxuICAgICAgICAgICAgICAgICAgICA8L3Njcm0tc2VhcmNoLWJhcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLU5vdGlmaWNhdGlvbnMtLT5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJub3RpZmljYXRpb25zRW5hYmxlZCAmJiBjaGVja0FwcFN0cmluZ3Modm0uYXBwU3RyaW5ncykgJiYgYXJlUHJlZmVyZW5jZXNJbml0aWFsaXplZCh2bS51c2VyUHJlZmVyZW5jZXMpXCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJhY3Rpb24tYWxlcnQgYWN0aW9uLWRyb3Bkb3duXCIgbmdiRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBib3JkZXItMFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJnbG9iYWwtbGluay1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImFjdGlvbi1saW5rIHByaW1hcnktZ2xvYmFsLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cIm1hcmtBc1JlYWQoKVwiIG5nYkRyb3Bkb3duVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwiYWN0aW9uLWJ0bi1pY29uXCIgaW1hZ2U9XCJhbGVydFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIobm90aWZpY2F0aW9uQ291bnQkIHwgYXN5bmMpIGFzIG5vdGlmaWNhdGlvbkNvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIihub3RpZmljYXRpb25Db3VudCA/PyBmYWxzZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiYWRnZSBiYWRnZS1wb3NpdGlvbiByb3VuZGVkLXBpbGwgYmctZGFuZ2VyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibm90aWZpY2F0aW9uQ291bnQgPiAwXCI+e3tub3RpZmljYXRpb25Db3VudCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBib3JkZXIgc2hhZG93LXNtLTIgZHJvcGRvd24tbWVudS1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93bk1lbnVMaW5rXCIgbmdiRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLW5vdGlmaWNhdGlvbnM+PC9zY3JtLW5vdGlmaWNhdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuPC9kaXY+XG5cbjwhLS0gRW5kIG9mIG1haW4gbmF2YmFyIHNlY3Rpb24gLS0+XG4iXX0=