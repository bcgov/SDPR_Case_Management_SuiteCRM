/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2024 SalesAgility Ltd.
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
import { Component, signal, ViewChild } from '@angular/core';
import { AppStateStore } from "../../store/app-state/app-state.store";
import { combineLatestWith } from "rxjs";
import { NavigationStore } from "../../store/navigation/navigation.store";
import { ModuleNameMapper } from "../../services/navigation/module-name-mapper/module-name-mapper.service";
import { ModuleNavigation } from "../../services/navigation/module-navigation/module-navigation.service";
import { LanguageStore } from "../../store/language/language.store";
import { map } from "rxjs/operators";
import { CommonModule } from "@angular/common";
import { SidebarModule } from "primeng/sidebar";
import { ImageModule } from "../image/image.module";
import { MobileMenuComponent } from "./mobile-menu/mobile-menu.component";
import { SearchBarModule } from "../search-bar/search-bar.module";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import * as i0 from "@angular/core";
import * as i1 from "../../store/app-state/app-state.store";
import * as i2 from "../../store/navigation/navigation.store";
import * as i3 from "../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i4 from "../../services/navigation/module-navigation/module-navigation.service";
import * as i5 from "../../store/language/language.store";
import * as i6 from "@angular/common";
import * as i7 from "primeng/sidebar";
import * as i8 from "primeng/api";
import * as i9 from "../image/image.component";
import * as i10 from "../search-bar/search-bar.component";
const _c0 = ["searchBarComponent"];
function SidebarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "button", 5);
    i0.ɵɵlistener("click", function SidebarComponent_ng_template_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.toggleSidebar()); });
    i0.ɵɵelement(3, "scrm-image", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 7)(5, "scrm-search-bar", 8, 9);
    i0.ɵɵlistener("searchExpression", function SidebarComponent_ng_template_1_Template_scrm_search_bar_searchExpression_5_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.search($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("labelKey", "LBL_FILTER_MODULES")("klass", "search-bar-mobile-menu")("searchTrigger", "input");
} }
function SidebarComponent_ng_template_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-mobile-menu", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("menuItems", ctx_r6.displayedItems);
} }
function SidebarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, SidebarComponent_ng_template_2_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.displayedItems());
} }
class SidebarComponent {
    constructor(appStateStore, navigationStore, moduleNameMapper, moduleNavigation, language) {
        this.appStateStore = appStateStore;
        this.navigationStore = navigationStore;
        this.moduleNameMapper = moduleNameMapper;
        this.moduleNavigation = moduleNavigation;
        this.language = language;
        this.isSidebarVisible = false;
        this.menuItems = [];
        this.displayedItems = signal([]);
        this.subs = [];
    }
    ngOnInit() {
        this.subs.push(this.navigationStore.vm$.pipe(combineLatestWith(this.language.vm$), map(([navigation, language]) => {
            this.setMenuItems(navigation.modules, navigation.tabs, language.appListStrings);
        })).subscribe());
        this.subs.push(this.appStateStore.isSidebarVisible$.subscribe((isSidebarVisible) => {
            this.isSidebarVisible = isSidebarVisible;
            if (!this.isSidebarVisible) {
                this.clearFilter();
            }
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    setMenuItems(modules, tabs, appListStrings) {
        const menuItems = [];
        tabs.forEach((tab) => {
            const moduleInfo = modules[tab];
            const moduleRoute = this.moduleNavigation.getModuleRoute(moduleInfo);
            const menuItem = {
                link: {
                    label: this.moduleNavigation.getModuleLabel(moduleInfo, appListStrings),
                    url: moduleRoute.url,
                    route: moduleRoute.route,
                    params: null
                },
                icon: this.moduleNameMapper.toLegacy(moduleInfo?.name) ?? null,
                submenu: [],
                module: moduleInfo?.name ?? null
            };
            menuItems.push(menuItem);
        });
        this.menuItems = [...menuItems];
        this.displayedItems.set([...menuItems]);
    }
    toggleSidebar() {
        this.appStateStore.toggleSidebar();
    }
    closeSidebar() {
        this.clearFilter();
        this.appStateStore.closeSidebar();
    }
    search(searchTerm) {
        this.displayedItems.set([]);
        if (searchTerm.length && searchTerm.trim() !== '') {
            this.displayedItems.set(this.menuItems.filter(item => {
                return item?.link?.label.toLowerCase().includes(searchTerm.toLowerCase());
            }) ?? []);
        }
        else {
            this.resetMenuItems();
        }
    }
    resetMenuItems() {
        this.displayedItems.set([...this.menuItems]);
    }
    clearFilter() {
        this.resetMenuItems();
        this?.searchBarComponent?.clearSearchTerm();
    }
    static { this.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore), i0.ɵɵdirectiveInject(i2.NavigationStore), i0.ɵɵdirectiveInject(i3.ModuleNameMapper), i0.ɵɵdirectiveInject(i4.ModuleNavigation), i0.ɵɵdirectiveInject(i5.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidebarComponent, selectors: [["scrm-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchBarComponent = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [[3, "visible", "showCloseIcon", "visibleChange", "onHide"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "d-flex", "justify-content-start"], [1, "flex-shrink-1"], ["type", "button", 1, "navbar-toggler", 3, "click"], ["image", "hamburger", 1, "responsive-menu-toggler"], [1, "d-flex", "flex-grow-1", "justify-content-center"], [3, "labelKey", "klass", "searchTrigger", "searchExpression"], ["searchBarComponent", ""], [1, "sidebar-container"], [4, "ngIf"], [3, "menuItems"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p-sidebar", 0);
            i0.ɵɵlistener("visibleChange", function SidebarComponent_Template_p_sidebar_visibleChange_0_listener($event) { return ctx.isSidebarVisible = $event; })("onHide", function SidebarComponent_Template_p_sidebar_onHide_0_listener() { return ctx.closeSidebar(); });
            i0.ɵɵtemplate(1, SidebarComponent_ng_template_1_Template, 7, 3, "ng-template", 1);
            i0.ɵɵtemplate(2, SidebarComponent_ng_template_2_Template, 2, 1, "ng-template", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("visible", ctx.isSidebarVisible)("showCloseIcon", false);
        } }, dependencies: [CommonModule, i6.NgIf, SidebarModule, i7.Sidebar, i8.PrimeTemplate, ImageModule, i9.ImageComponent, MobileMenuComponent, SearchBarModule, i10.SearchBarComponent], encapsulation: 2 }); }
}
export { SidebarComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarComponent, [{
        type: Component,
        args: [{ selector: 'scrm-sidebar', standalone: true, imports: [CommonModule, SidebarModule, ImageModule, MobileMenuComponent, SearchBarModule], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2024 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<p-sidebar [(visible)]=\"isSidebarVisible\" [showCloseIcon]=\"false\" (onHide)=\"closeSidebar()\">\n    <ng-template pTemplate=\"header\">\n        <div class=\"d-flex justify-content-start\">\n            <div class=\"flex-shrink-1\">\n                <button (click)=\"toggleSidebar()\" class=\"navbar-toggler\" type=\"button\">\n                    <scrm-image class=\"responsive-menu-toggler\" image=\"hamburger\"></scrm-image>\n                </button>\n            </div>\n\n            <div class=\"d-flex flex-grow-1 justify-content-center\">\n                <scrm-search-bar\n                        #searchBarComponent\n                        [labelKey]=\"'LBL_FILTER_MODULES'\"\n                        [klass]=\"'search-bar-mobile-menu'\"\n                        [searchTrigger]=\"'input'\"\n                        (searchExpression)=\"search($event)\">\n                </scrm-search-bar>\n            </div>\n        </div>\n    </ng-template>\n    <ng-template pTemplate=\"content\">\n        <div class=\"sidebar-container\">\n            <ng-container *ngIf=\"displayedItems()\">\n                <scrm-mobile-menu [menuItems]=\"displayedItems\"></scrm-mobile-menu>\n            </ng-container>\n        </div>\n    </ng-template>\n</p-sidebar>\n" }]
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.NavigationStore }, { type: i3.ModuleNameMapper }, { type: i4.ModuleNavigation }, { type: i5.LanguageStore }]; }, { searchBarComponent: [{
            type: ViewChild,
            args: ['searchBarComponent']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBOEIsZUFBZSxFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFFckcsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUVBQXlFLENBQUM7QUFDekcsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sdUVBQXVFLENBQUM7QUFDdkcsT0FBTyxFQUF3QixhQUFhLEVBQWtCLE1BQU0scUNBQXFDLENBQUM7QUFDMUcsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25DLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUMsa0JB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O1lBQ0gsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVTLGNBQWM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFUyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLENBQUM7SUFDaEQsQ0FBQztpRkE1RlEsZ0JBQWdCO29FQUFoQixnQkFBZ0I7Ozs7OztZQ3RCN0Isb0NBQTRGO1lBQWpGLHVKQUE4QixxRkFBbUMsa0JBQWMsSUFBakQ7WUFDckMsaUZBa0JjO1lBQ2QsaUZBTWM7WUFDbEIsaUJBQVk7O1lBM0JELDhDQUE4Qix3QkFBQTs0QkRtQjNCLFlBQVksV0FBRSxhQUFhLGdDQUFFLFdBQVcscUJBQUUsbUJBQW1CLEVBQUUsZUFBZTs7U0FHL0UsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FQNUIsU0FBUzsyQkFDSSxjQUFjLGNBRVosSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxDQUFDO3dMQUt4RCxrQkFBa0I7a0JBQWxELFNBQVM7bUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjQgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIHNpZ25hbCwgVmlld0NoaWxkLCBXcml0YWJsZVNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gXCIuLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlXCI7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge05hdmJhck1vZHVsZU1hcCwgTmF2aWdhdGlvbiwgTmF2aWdhdGlvblN0b3JlfSBmcm9tIFwiLi4vLi4vc3RvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlXCI7XG5pbXBvcnQge01lbnVJdGVtfSBmcm9tIFwiY29tbW9uXCI7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZVwiO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0xhbmd1YWdlTGlzdFN0cmluZ01hcCwgTGFuZ3VhZ2VTdG9yZSwgTGFuZ3VhZ2VTdHJpbmdzfSBmcm9tIFwiLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmVcIjtcbmltcG9ydCB7bWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1NpZGViYXJNb2R1bGV9IGZyb20gXCJwcmltZW5nL3NpZGViYXJcIjtcbmltcG9ydCB7SW1hZ2VNb2R1bGV9IGZyb20gXCIuLi9pbWFnZS9pbWFnZS5tb2R1bGVcIjtcbmltcG9ydCB7TW9iaWxlTWVudUNvbXBvbmVudH0gZnJvbSBcIi4vbW9iaWxlLW1lbnUvbW9iaWxlLW1lbnUuY29tcG9uZW50XCI7XG5pbXBvcnQge1NlYXJjaEJhck1vZHVsZX0gZnJvbSBcIi4uL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5tb2R1bGVcIjtcbmltcG9ydCB7U2VhcmNoQmFyQ29tcG9uZW50fSBmcm9tIFwiLi4vc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tc2lkZWJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICdzaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFNpZGViYXJNb2R1bGUsIEltYWdlTW9kdWxlLCBNb2JpbGVNZW51Q29tcG9uZW50LCBTZWFyY2hCYXJNb2R1bGVdLFxufSlcblxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBAVmlld0NoaWxkKCdzZWFyY2hCYXJDb21wb25lbnQnKSBzZWFyY2hCYXJDb21wb25lbnQ6IFNlYXJjaEJhckNvbXBvbmVudDtcbiAgICBpc1NpZGViYXJWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgbWVudUl0ZW1zOiBNZW51SXRlbVtdID0gW107XG4gICAgZGlzcGxheWVkSXRlbXM6IFdyaXRhYmxlU2lnbmFsPE1lbnVJdGVtW10+ID0gc2lnbmFsPE1lbnVJdGVtW10+KFtdKTtcblxuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZVN0b3JlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvblN0b3JlOiBOYXZpZ2F0aW9uU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kdWxlTmF2aWdhdGlvbjogTW9kdWxlTmF2aWdhdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMubmF2aWdhdGlvblN0b3JlLnZtJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5sYW5ndWFnZS52bSQpLFxuICAgICAgICAgICAgbWFwKChbbmF2aWdhdGlvbiwgbGFuZ3VhZ2VdOiBbTmF2aWdhdGlvbiwgTGFuZ3VhZ2VTdHJpbmdzXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWVudUl0ZW1zKG5hdmlnYXRpb24ubW9kdWxlcywgbmF2aWdhdGlvbi50YWJzLCBsYW5ndWFnZS5hcHBMaXN0U3RyaW5ncyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApLnN1YnNjcmliZSgpKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmFwcFN0YXRlU3RvcmUuaXNTaWRlYmFyVmlzaWJsZSQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKGlzU2lkZWJhclZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2lkZWJhclZpc2libGUgPSBpc1NpZGViYXJWaXNpYmxlO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1NpZGViYXJWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGaWx0ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIHNldE1lbnVJdGVtcyhtb2R1bGVzOiBOYXZiYXJNb2R1bGVNYXAsIHRhYnM6IHN0cmluZ1tdLCBhcHBMaXN0U3RyaW5nczogTGFuZ3VhZ2VMaXN0U3RyaW5nTWFwKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtdO1xuICAgICAgICB0YWJzLmZvckVhY2goKHRhYjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2R1bGVJbmZvID0gbW9kdWxlc1t0YWJdO1xuICAgICAgICAgICAgY29uc3QgbW9kdWxlUm91dGUgPSB0aGlzLm1vZHVsZU5hdmlnYXRpb24uZ2V0TW9kdWxlUm91dGUobW9kdWxlSW5mbyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtOiBNZW51SXRlbSA9IHtcbiAgICAgICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLm1vZHVsZU5hdmlnYXRpb24uZ2V0TW9kdWxlTGFiZWwobW9kdWxlSW5mbywgYXBwTGlzdFN0cmluZ3MpLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IG1vZHVsZVJvdXRlLnVybCxcbiAgICAgICAgICAgICAgICAgICAgcm91dGU6IG1vZHVsZVJvdXRlLnJvdXRlLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGljb246IHRoaXMubW9kdWxlTmFtZU1hcHBlci50b0xlZ2FjeShtb2R1bGVJbmZvPy5uYW1lKSA/PyBudWxsLFxuICAgICAgICAgICAgICAgIHN1Ym1lbnU6IFtdLFxuICAgICAgICAgICAgICAgIG1vZHVsZTogbW9kdWxlSW5mbz8ubmFtZSA/PyBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbWVudUl0ZW1zLnB1c2gobWVudUl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnVJdGVtcyA9IFsuLi5tZW51SXRlbXNdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheWVkSXRlbXMuc2V0KFsuLi5tZW51SXRlbXNdKTtcbiAgICB9XG5cbiAgICB0b2dnbGVTaWRlYmFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudG9nZ2xlU2lkZWJhcigpO1xuICAgIH1cblxuICAgIGNsb3NlU2lkZWJhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhckZpbHRlcigpO1xuICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUuY2xvc2VTaWRlYmFyKCk7XG4gICAgfVxuXG4gICAgc2VhcmNoKHNlYXJjaFRlcm06IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc3BsYXllZEl0ZW1zLnNldChbXSk7XG4gICAgICAgIGlmIChzZWFyY2hUZXJtLmxlbmd0aCAmJiBzZWFyY2hUZXJtLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkSXRlbXMuc2V0KHRoaXMubWVudUl0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbT8ubGluaz8ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgfSkgPz8gW10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNldE1lbnVJdGVtcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc2V0TWVudUl0ZW1zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc3BsYXllZEl0ZW1zLnNldChbLi4udGhpcy5tZW51SXRlbXNdKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xlYXJGaWx0ZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzZXRNZW51SXRlbXMoKTtcbiAgICAgICAgdGhpcz8uc2VhcmNoQmFyQ29tcG9uZW50Py5jbGVhclNlYXJjaFRlcm0oKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDI0IFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48cC1zaWRlYmFyIFsodmlzaWJsZSldPVwiaXNTaWRlYmFyVmlzaWJsZVwiIFtzaG93Q2xvc2VJY29uXT1cImZhbHNlXCIgKG9uSGlkZSk9XCJjbG9zZVNpZGViYXIoKVwiPlxuICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidG9nZ2xlU2lkZWJhcigpXCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJyZXNwb25zaXZlLW1lbnUtdG9nZ2xlclwiIGltYWdlPVwiaGFtYnVyZ2VyXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1ncm93LTEganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLXNlYXJjaC1iYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICNzZWFyY2hCYXJDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEtleV09XCInTEJMX0ZJTFRFUl9NT0RVTEVTJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBba2xhc3NdPVwiJ3NlYXJjaC1iYXItbW9iaWxlLW1lbnUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzZWFyY2hUcmlnZ2VyXT1cIidpbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlYXJjaEV4cHJlc3Npb24pPVwic2VhcmNoKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8L3Njcm0tc2VhcmNoLWJhcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRpc3BsYXllZEl0ZW1zKClcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1tb2JpbGUtbWVudSBbbWVudUl0ZW1zXT1cImRpc3BsYXllZEl0ZW1zXCI+PC9zY3JtLW1vYmlsZS1tZW51PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG48L3Atc2lkZWJhcj5cbiJdfQ==