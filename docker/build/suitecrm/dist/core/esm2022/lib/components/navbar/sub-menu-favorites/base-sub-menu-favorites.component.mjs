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
import { ModuleNavigation } from '../../../services/navigation/module-navigation/module-navigation.service';
import { ModuleNameMapper } from '../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { BaseFavoritesComponent } from '../menu-favorites/base-favorites.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i2 from "../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i3 from "../../../store/system-config/system-config.store";
import * as i4 from "../../../store/metadata/metadata.store.service";
import * as i5 from "@angular/common";
import * as i6 from "../../image/image.component";
import * as i7 from "../../label/label.component";
import * as i8 from "../menu-item-link/menu-item-link.component";
const _c0 = function (a0, a1, a2) { return { label: a0, url: a1, route: a2 }; };
function BaseSubMenuFavoritesComponent_ng_container_0_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵlistener("click", function BaseSubMenuFavoritesComponent_ng_container_0_li_6_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.onItemClick($event)); })("touchstart", function BaseSubMenuFavoritesComponent_ng_container_0_li_6_Template_li_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r5.onItemTouchStart($event)); });
    i0.ɵɵelement(1, "scrm-menu-item-link", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const favorite_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("submenu-nav-link nav-link action-link");
    i0.ɵɵproperty("link", i0.ɵɵpureFunction3(3, _c0, favorite_r2.attributes.parent_name, ctx_r1.buildRoute(favorite_r2), ctx_r1.buildRoute(favorite_r2)));
} }
function BaseSubMenuFavoritesComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 1)(2, "a", 2);
    i0.ɵɵlistener("touchstart", function BaseSubMenuFavoritesComponent_ng_container_0_Template_a_touchstart_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onTouchStart($event)); })("click", function BaseSubMenuFavoritesComponent_ng_container_0_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.toggleDropdown()); });
    i0.ɵɵelement(3, "scrm-image", 3)(4, "scrm-label", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ul", 5);
    i0.ɵɵtemplate(6, BaseSubMenuFavoritesComponent_ng_container_0_li_6_Template, 2, 7, "li", 6);
    i0.ɵɵpipe(7, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("active", ctx_r0.showDropdown());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(7, 3, ctx_r0.records, 0, ctx_r0.maxDisplayed));
} }
class BaseSubMenuFavoritesComponent extends BaseFavoritesComponent {
    constructor(navigation, nameMapper, configs, metadata) {
        super(navigation, nameMapper, configs, metadata);
        this.navigation = navigation;
        this.nameMapper = nameMapper;
        this.configs = configs;
        this.metadata = metadata;
        this.showDropdown = signal(false);
        this.clickType = 'click';
    }
    ngOnInit() {
        super.ngOnInit();
        if (this?.config?.showDropdown$) {
            this.subs.push(this.config.showDropdown$.subscribe(showDropdown => {
                this.showDropdown.set(showDropdown);
            }));
        }
    }
    toggleDropdown() {
        if (this.clickType === 'touch') {
            this.showDropdown.set(!this.showDropdown());
            this.clickType = 'click';
            this?.config?.onToggleDropdown(this.showDropdown());
            return;
        }
    }
    onTouchStart(event) {
        this.clickType = 'touch';
    }
    onItemClick($event) {
        this.toggleDropdown();
        this?.config?.onItemClick($event);
    }
    onItemTouchStart($event) {
        this.onTouchStart($event);
        this?.config?.onItemTouchStart($event);
    }
    static { this.ɵfac = function BaseSubMenuFavoritesComponent_Factory(t) { return new (t || BaseSubMenuFavoritesComponent)(i0.ɵɵdirectiveInject(i1.ModuleNavigation), i0.ɵɵdirectiveInject(i2.ModuleNameMapper), i0.ɵɵdirectiveInject(i3.SystemConfigStore), i0.ɵɵdirectiveInject(i4.MetadataStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseSubMenuFavoritesComponent, selectors: [["scrm-base-sub-menu-favorites"]], inputs: { config: "config" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "nav-item", "dropdown-submenu", "submenu", "submenu-extra"], [1, "sub-nav-link", "nav-link", "action-link", "dropdown-item", "dropdown-toggle", "pr-4", 3, "touchstart", "click"], ["image", "star"], ["labelKey", "LBL_FAVORITES"], [1, "dropdown-menu", "submenu"], ["class", "nav-item", 3, "click", "touchstart", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "click", "touchstart"], [3, "link"]], template: function BaseSubMenuFavoritesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseSubMenuFavoritesComponent_ng_container_0_Template, 8, 7, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.records && ctx.records.length);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i6.ImageComponent, i7.LabelComponent, i8.MenuItemLinkComponent, i5.SlicePipe], encapsulation: 2 }); }
}
export { BaseSubMenuFavoritesComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseSubMenuFavoritesComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-sub-menu-favorites', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"records && records.length\">\n    <li class=\"nav-item dropdown-submenu submenu submenu-extra\">\n\n        <a class=\"sub-nav-link nav-link action-link dropdown-item dropdown-toggle pr-4\"\n           (touchstart)=\"onTouchStart($event)\"\n           (click)=\"toggleDropdown()\">\n            <scrm-image image=\"star\"></scrm-image>\n            <scrm-label labelKey=\"LBL_FAVORITES\"></scrm-label>\n        </a>\n\n        <ul class=\"dropdown-menu submenu\"\n            [class.active]=\"showDropdown()\"\n        >\n            <li *ngFor=\"let favorite of records | slice:0:maxDisplayed\"\n                class=\"nav-item\"\n                (click)=\"onItemClick($event)\"\n                (touchstart)=\"onItemTouchStart($event)\"\n                >\n                <scrm-menu-item-link [class]=\"'submenu-nav-link nav-link action-link'\"\n                                     [link]=\"{\n                                                label: favorite.attributes.parent_name,\n                                                url: buildRoute(favorite),\n                                                route: buildRoute(favorite)\n                                             }\">\n                </scrm-menu-item-link>\n            </li>\n        </ul>\n    </li>\n</ng-container>\n\n\n\n" }]
    }], function () { return [{ type: i1.ModuleNavigation }, { type: i2.ModuleNameMapper }, { type: i3.SystemConfigStore }, { type: i4.MetadataStore }]; }, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdWItbWVudS1mYXZvcml0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL3N1Yi1tZW51LWZhdm9yaXRlcy9iYXNlLXN1Yi1tZW51LWZhdm9yaXRlcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvc3ViLW1lbnUtZmF2b3JpdGVzL2Jhc2Utc3ViLW1lbnUtZmF2b3JpdGVzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMEVBQTBFLENBQUM7QUFDMUcsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEVBQTRFLENBQUM7QUFDNUcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDbkYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQzdFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRDQUE0QyxDQUFDOzs7Ozs7Ozs7Ozs7O0lDU3RFLDZCQUlLO0lBRkQsMkxBQVMsZUFBQSwwQkFBbUIsQ0FBQSxJQUFDLHdMQUNmLGVBQUEsK0JBQXdCLENBQUEsSUFEVDtJQUc3Qix5Q0FNc0I7SUFDMUIsaUJBQUs7Ozs7SUFQb0IsZUFBaUQ7SUFBakQsc0RBQWlEO0lBQ2pELHFKQUlVOzs7O0lBdkIvQyw2QkFBZ0Q7SUFDNUMsNkJBQTRELFdBQUE7SUFHckQsOExBQWMsZUFBQSwyQkFBb0IsQ0FBQSxJQUFDLGlLQUMxQixlQUFBLHVCQUFnQixDQUFBLElBRFU7SUFFbEMsZ0NBQXNDLG9CQUFBO0lBRTFDLGlCQUFJO0lBRUosNkJBRUM7SUFDRywyRkFZSzs7SUFDVCxpQkFBSyxFQUFBO0lBRWIsMEJBQWU7OztJQWpCSCxlQUErQjtJQUEvQiwrQ0FBK0I7SUFFTixlQUFpQztJQUFqQyxzRkFBaUM7O0FETnRFLE1BS2EsNkJBQThCLFNBQVEsc0JBQXNCO0lBTXJFLFlBQ2MsVUFBNEIsRUFDNUIsVUFBNEIsRUFDNUIsT0FBMEIsRUFDMUIsUUFBdUI7UUFFakMsS0FBSyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBTHRDLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBQzVCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFQckMsaUJBQVksR0FBRyxNQUFNLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDdEMsY0FBUyxHQUFXLE9BQU8sQ0FBQztJQVM1QixDQUFDO0lBRUQsUUFBUTtRQUNKLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQixJQUFJLElBQUksRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNQO0lBQ0wsQ0FBQztJQUVELGNBQWM7UUFFVixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFO1lBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDekIsSUFBSSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztZQUNwRCxPQUFPO1NBQ1Y7SUFFTCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUM3QixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQWtCO1FBQzFCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsTUFBa0I7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzFDLENBQUM7OEZBaERRLDZCQUE2QjtvRUFBN0IsNkJBQTZCO1lDWjFDLGdHQTRCZTs7WUE1QkEsd0RBQStCOzs7U0RZakMsNkJBQTZCO3VGQUE3Qiw2QkFBNkI7Y0FMekMsU0FBUzsyQkFDSSw4QkFBOEI7OEpBTS9CLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBzaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7QmFzZUZhdm9yaXRlc0NvbXBvbmVudH0gZnJvbSAnLi4vbWVudS1mYXZvcml0ZXMvYmFzZS1mYXZvcml0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7U3ViTWVudUZhdm9yaXRlc0NvbmZpZ30gZnJvbSBcIi4vc3ViLW1lbnUtZmF2b3JpdGVzLWNvbmZpZy5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYmFzZS1zdWItbWVudS1mYXZvcml0ZXMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYXNlLXN1Yi1tZW51LWZhdm9yaXRlcy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBCYXNlU3ViTWVudUZhdm9yaXRlc0NvbXBvbmVudCBleHRlbmRzIEJhc2VGYXZvcml0ZXNDb21wb25lbnQge1xuXG4gICAgQElucHV0KCkgY29uZmlnOiBTdWJNZW51RmF2b3JpdGVzQ29uZmlnO1xuICAgIHNob3dEcm9wZG93biA9IHNpZ25hbDxib29sZWFuPihmYWxzZSk7XG4gICAgY2xpY2tUeXBlOiBzdHJpbmcgPSAnY2xpY2snO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgbmFtZU1hcHBlcjogTW9kdWxlTmFtZU1hcHBlcixcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmVcbiAgICApIHtcbiAgICAgICAgc3VwZXIobmF2aWdhdGlvbiwgbmFtZU1hcHBlciwgY29uZmlncywgbWV0YWRhdGEpXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICAgICAgaWYgKHRoaXM/LmNvbmZpZz8uc2hvd0Ryb3Bkb3duJCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb25maWcuc2hvd0Ryb3Bkb3duJC5zdWJzY3JpYmUoc2hvd0Ryb3Bkb3duID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dEcm9wZG93bi5zZXQoc2hvd0Ryb3Bkb3duKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZURyb3Bkb3duKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmNsaWNrVHlwZSA9PT0gJ3RvdWNoJykge1xuICAgICAgICAgICAgdGhpcy5zaG93RHJvcGRvd24uc2V0KCF0aGlzLnNob3dEcm9wZG93bigpKTtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tUeXBlID0gJ2NsaWNrJztcbiAgICAgICAgICAgIHRoaXM/LmNvbmZpZz8ub25Ub2dnbGVEcm9wZG93bih0aGlzLnNob3dEcm9wZG93bigpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xpY2tUeXBlID0gJ3RvdWNoJztcbiAgICB9XG5cbiAgICBvbkl0ZW1DbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy50b2dnbGVEcm9wZG93bigpO1xuICAgICAgICB0aGlzPy5jb25maWc/Lm9uSXRlbUNsaWNrKCRldmVudClcbiAgICB9XG5cbiAgICBvbkl0ZW1Ub3VjaFN0YXJ0KCRldmVudDogVG91Y2hFdmVudCkge1xuICAgICAgICB0aGlzLm9uVG91Y2hTdGFydCgkZXZlbnQpO1xuICAgICAgICB0aGlzPy5jb25maWc/Lm9uSXRlbVRvdWNoU3RhcnQoJGV2ZW50KVxuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJyZWNvcmRzICYmIHJlY29yZHMubGVuZ3RoXCI+XG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd24tc3VibWVudSBzdWJtZW51IHN1Ym1lbnUtZXh0cmFcIj5cblxuICAgICAgICA8YSBjbGFzcz1cInN1Yi1uYXYtbGluayBuYXYtbGluayBhY3Rpb24tbGluayBkcm9wZG93bi1pdGVtIGRyb3Bkb3duLXRvZ2dsZSBwci00XCJcbiAgICAgICAgICAgKHRvdWNoc3RhcnQpPVwib25Ub3VjaFN0YXJ0KCRldmVudClcIlxuICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlRHJvcGRvd24oKVwiPlxuICAgICAgICAgICAgPHNjcm0taW1hZ2UgaW1hZ2U9XCJzdGFyXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfRkFWT1JJVEVTXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudSBzdWJtZW51XCJcbiAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwic2hvd0Ryb3Bkb3duKClcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGZhdm9yaXRlIG9mIHJlY29yZHMgfCBzbGljZTowOm1heERpc3BsYXllZFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgICAgICh0b3VjaHN0YXJ0KT1cIm9uSXRlbVRvdWNoU3RhcnQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbS1saW5rIFtjbGFzc109XCInc3VibWVudS1uYXYtbGluayBuYXYtbGluayBhY3Rpb24tbGluaydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsaW5rXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmYXZvcml0ZS5hdHRyaWJ1dGVzLnBhcmVudF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBidWlsZFJvdXRlKGZhdm9yaXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlOiBidWlsZFJvdXRlKGZhdm9yaXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgICAgIDwvc2NybS1tZW51LWl0ZW0tbGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9saT5cbjwvbmctY29udGFpbmVyPlxuXG5cblxuIl19