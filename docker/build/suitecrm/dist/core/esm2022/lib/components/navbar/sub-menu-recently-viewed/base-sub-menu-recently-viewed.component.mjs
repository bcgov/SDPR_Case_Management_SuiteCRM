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
import { map } from 'rxjs/operators';
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
function BaseSubMenuRecentlyViewedComponent_ng_container_0_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵlistener("click", function BaseSubMenuRecentlyViewedComponent_ng_container_0_li_6_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.onItemClick($event)); })("touchstart", function BaseSubMenuRecentlyViewedComponent_ng_container_0_li_6_Template_li_touchstart_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r5.onItemTouchStart($event)); });
    i0.ɵɵelement(1, "scrm-menu-item-link", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const recentRecord_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("submenu-nav-link nav-link action-link");
    i0.ɵɵproperty("link", i0.ɵɵpureFunction3(3, _c0, recentRecord_r2.attributes.item_summary, ctx_r1.buildRoute(recentRecord_r2), ctx_r1.buildRoute(recentRecord_r2)));
} }
function BaseSubMenuRecentlyViewedComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 1)(2, "a", 2);
    i0.ɵɵlistener("touchstart", function BaseSubMenuRecentlyViewedComponent_ng_container_0_Template_a_touchstart_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onTouchStart($event)); })("click", function BaseSubMenuRecentlyViewedComponent_ng_container_0_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.toggleDropdown()); });
    i0.ɵɵelement(3, "scrm-image", 3)(4, "scrm-label", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ul", 5);
    i0.ɵɵtemplate(6, BaseSubMenuRecentlyViewedComponent_ng_container_0_li_6_Template, 2, 7, "li", 6);
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
class BaseSubMenuRecentlyViewedComponent {
    constructor(navigation, nameMapper, configs, metadata) {
        this.navigation = navigation;
        this.nameMapper = nameMapper;
        this.configs = configs;
        this.metadata = metadata;
        this.maxDisplayed = 5;
        this.subs = [];
        this.showDropdown = signal(false);
        this.clickType = 'click';
    }
    ngOnInit() {
        const ui = this.configs.getConfigValue('ui') ?? {};
        this.maxDisplayed = parseInt(ui.navigation_max_module_recently_viewed) ?? 5;
        this.initMetadata$();
    }
    ngOnDestroy() {
        this.clear();
    }
    ngOnChanges(changes) {
        const moduleChanges = changes?.module ?? null;
        if (moduleChanges === null) {
            return;
        }
        const previousModule = changes?.module?.previousValue ?? '';
        const currentModule = changes?.module?.currentValue ?? '';
        if (previousModule !== currentModule) {
            this.clear();
            this.initMetadata$();
        }
    }
    /**
     * Build route from recently viewed item
     * @param item
     */
    buildRoute(item) {
        const legacyName = item.attributes.module_name ?? '';
        const module = this.nameMapper.toFrontend(legacyName) ?? '';
        const id = item.attributes.item_id ?? '';
        return this.navigation.getRecordRouterLink(module, id);
    }
    /**
     * Init metadata subscription
     * @protected
     */
    initMetadata$() {
        const moduleMeta$ = this.metadata.allModuleMetadata$.pipe(map(value => value[this.module] ?? null));
        this.subs.push(moduleMeta$.subscribe(meta => {
            this.records = meta?.recentlyViewed ?? null;
        }));
        if (this?.config?.showDropdown$) {
            this.subs.push(this.config.showDropdown$.subscribe(showDropdown => {
                this.showDropdown.set(showDropdown);
            }));
        }
    }
    /**
     * Clear subscription and data
     * @protected
     */
    clear() {
        this.records = null;
        this.subs.forEach(sub => sub.unsubscribe());
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
    static { this.ɵfac = function BaseSubMenuRecentlyViewedComponent_Factory(t) { return new (t || BaseSubMenuRecentlyViewedComponent)(i0.ɵɵdirectiveInject(i1.ModuleNavigation), i0.ɵɵdirectiveInject(i2.ModuleNameMapper), i0.ɵɵdirectiveInject(i3.SystemConfigStore), i0.ɵɵdirectiveInject(i4.MetadataStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseSubMenuRecentlyViewedComponent, selectors: [["scrm-base-sub-menu-recently-viewed"]], inputs: { module: "module", config: "config" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "nav-item", "dropdown-submenu", "submenu", "submenu-extra"], [1, "sub-nav-link", "nav-link", "action-link", "dropdown-item", "dropdown-toggle", "pr-4", 3, "touchstart", "click"], ["image", "clock"], ["labelKey", "LBL_LAST_VIEWED"], [1, "dropdown-menu", "submenu"], ["class", "nav-item", 3, "click", "touchstart", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "click", "touchstart"], [3, "link"]], template: function BaseSubMenuRecentlyViewedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseSubMenuRecentlyViewedComponent_ng_container_0_Template, 8, 7, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.records && ctx.records.length);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i6.ImageComponent, i7.LabelComponent, i8.MenuItemLinkComponent, i5.SlicePipe], encapsulation: 2 }); }
}
export { BaseSubMenuRecentlyViewedComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseSubMenuRecentlyViewedComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-sub-menu-recently-viewed', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"records && records.length\">\n    <li class=\"nav-item dropdown-submenu submenu submenu-extra\">\n\n        <a class=\"sub-nav-link nav-link action-link dropdown-item dropdown-toggle pr-4\"\n           (touchstart)=\"onTouchStart($event)\"\n           (click)=\"toggleDropdown()\">\n            <scrm-image image=\"clock\"></scrm-image>\n            <scrm-label labelKey=\"LBL_LAST_VIEWED\"></scrm-label>\n        </a>\n\n        <ul class=\"dropdown-menu submenu\"\n            [class.active]=\"showDropdown()\"\n        >\n            <li *ngFor=\"let recentRecord of records | slice:0:maxDisplayed\"\n                class=\"nav-item\"\n                (click)=\"onItemClick($event)\"\n                (touchstart)=\"onItemTouchStart($event)\"\n            >\n                <scrm-menu-item-link [class]=\"'submenu-nav-link nav-link action-link'\"\n                                     [link]=\"{\n                                                label: recentRecord.attributes.item_summary,\n                                                url: buildRoute(recentRecord),\n                                                route: buildRoute(recentRecord)\n                                             }\">\n                </scrm-menu-item-link>\n            </li>\n        </ul>\n    </li>\n</ng-container>\n\n\n\n" }]
    }], function () { return [{ type: i1.ModuleNavigation }, { type: i2.ModuleNameMapper }, { type: i3.SystemConfigStore }, { type: i4.MetadataStore }]; }, { module: [{
            type: Input
        }], config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdWItbWVudS1yZWNlbnRseS12aWV3ZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL3N1Yi1tZW51LXJlY2VudGx5LXZpZXdlZC9iYXNlLXN1Yi1tZW51LXJlY2VudGx5LXZpZXdlZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvc3ViLW1lbnUtcmVjZW50bHktdmlld2VkL2Jhc2Utc3ViLW1lbnUtcmVjZW50bHktdmlld2VkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwwRUFBMEUsQ0FBQztBQUMxRyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0RUFBNEUsQ0FBQztBQUM1RyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUNuRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDN0UsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7O0lDUXZCLDZCQUlDO0lBRkcsZ01BQVMsZUFBQSwwQkFBbUIsQ0FBQSxJQUFDLDZMQUNmLGVBQUEsK0JBQXdCLENBQUEsSUFEVDtJQUc3Qix5Q0FNc0I7SUFDMUIsaUJBQUs7Ozs7SUFQb0IsZUFBaUQ7SUFBakQsc0RBQWlEO0lBQ2pELGtLQUlVOzs7O0lBdkIvQyw2QkFBZ0Q7SUFDNUMsNkJBQTRELFdBQUE7SUFHckQsbU1BQWMsZUFBQSwy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QTVCQSx3REFBK0I7OztTRGNqQyxrQ0FBa0M7dUZBQWxDLGtDQUFrQztjQUw5QyxTQUFTOzJCQUNJLG9DQUFvQzs4SkFLckMsTUFBTTtrQkFBZCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIHNpZ25hbCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlY2VudGx5Vmlld2VkfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1N1Yk1lbnVSZWNlbnRseVZpZXdlZENvbmZpZ30gZnJvbSBcIi4vc3ViLW1lbnUtcmVjZW50bHktdmlld2VkLWNvbmZpZy5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYmFzZS1zdWItbWVudS1yZWNlbnRseS12aWV3ZWQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYXNlLXN1Yi1tZW51LXJlY2VudGx5LXZpZXdlZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBCYXNlU3ViTWVudVJlY2VudGx5Vmlld2VkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgbW9kdWxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29uZmlnOiBTdWJNZW51UmVjZW50bHlWaWV3ZWRDb25maWc7XG4gICAgbWF4RGlzcGxheWVkOiBudW1iZXIgPSA1O1xuICAgIHJlY29yZHM6IFJlY2VudGx5Vmlld2VkW107XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgc2hvd0Ryb3Bkb3duID0gc2lnbmFsPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjbGlja1R5cGU6IHN0cmluZyA9ICdjbGljayc7XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvbjogTW9kdWxlTmF2aWdhdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIG5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBjb25maWdzOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHVpID0gdGhpcy5jb25maWdzLmdldENvbmZpZ1ZhbHVlKCd1aScpID8/IHt9O1xuICAgICAgICB0aGlzLm1heERpc3BsYXllZCA9IHBhcnNlSW50KHVpLm5hdmlnYXRpb25fbWF4X21vZHVsZV9yZWNlbnRseV92aWV3ZWQpID8/IDU7XG4gICAgICAgIHRoaXMuaW5pdE1ldGFkYXRhJCgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2R1bGVDaGFuZ2VzID0gY2hhbmdlcz8ubW9kdWxlID8/IG51bGw7XG5cbiAgICAgICAgaWYgKG1vZHVsZUNoYW5nZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZpb3VzTW9kdWxlID0gY2hhbmdlcz8ubW9kdWxlPy5wcmV2aW91c1ZhbHVlID8/ICcnO1xuICAgICAgICBjb25zdCBjdXJyZW50TW9kdWxlID0gY2hhbmdlcz8ubW9kdWxlPy5jdXJyZW50VmFsdWUgPz8gJyc7XG4gICAgICAgIGlmIChwcmV2aW91c01vZHVsZSAhPT0gY3VycmVudE1vZHVsZSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0TWV0YWRhdGEkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCByb3V0ZSBmcm9tIHJlY2VudGx5IHZpZXdlZCBpdGVtXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKi9cbiAgICBidWlsZFJvdXRlKGl0ZW06IFJlY2VudGx5Vmlld2VkKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbGVnYWN5TmFtZSA9IGl0ZW0uYXR0cmlidXRlcy5tb2R1bGVfbmFtZSA/PyAnJztcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5uYW1lTWFwcGVyLnRvRnJvbnRlbmQobGVnYWN5TmFtZSkgPz8gJyc7XG4gICAgICAgIGNvbnN0IGlkID0gaXRlbS5hdHRyaWJ1dGVzLml0ZW1faWQgPz8gJyc7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdmlnYXRpb24uZ2V0UmVjb3JkUm91dGVyTGluayhtb2R1bGUsIGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IG1ldGFkYXRhIHN1YnNjcmlwdGlvblxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdE1ldGFkYXRhJCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlTWV0YSQgPSB0aGlzLm1ldGFkYXRhLmFsbE1vZHVsZU1ldGFkYXRhJC5waXBlKG1hcCh2YWx1ZSA9PiB2YWx1ZVt0aGlzLm1vZHVsZV0gPz8gbnVsbCkpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKG1vZHVsZU1ldGEkLnN1YnNjcmliZShtZXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IG1ldGE/LnJlY2VudGx5Vmlld2VkID8/IG51bGw7XG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAodGhpcz8uY29uZmlnPy5zaG93RHJvcGRvd24kKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmNvbmZpZy5zaG93RHJvcGRvd24kLnN1YnNjcmliZShzaG93RHJvcGRvd24gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duLnNldChzaG93RHJvcGRvd24pO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdWJzY3JpcHRpb24gYW5kIGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnJlY29yZHMgPSBudWxsO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIHRvZ2dsZURyb3Bkb3duKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmNsaWNrVHlwZSA9PT0gJ3RvdWNoJykge1xuICAgICAgICAgICAgdGhpcy5zaG93RHJvcGRvd24uc2V0KCF0aGlzLnNob3dEcm9wZG93bigpKTtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tUeXBlID0gJ2NsaWNrJztcbiAgICAgICAgICAgIHRoaXM/LmNvbmZpZz8ub25Ub2dnbGVEcm9wZG93bih0aGlzLnNob3dEcm9wZG93bigpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xpY2tUeXBlID0gJ3RvdWNoJztcbiAgICB9XG5cbiAgICBvbkl0ZW1DbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdGhpcy50b2dnbGVEcm9wZG93bigpO1xuICAgICAgICB0aGlzPy5jb25maWc/Lm9uSXRlbUNsaWNrKCRldmVudClcbiAgICB9XG5cbiAgICBvbkl0ZW1Ub3VjaFN0YXJ0KCRldmVudDogVG91Y2hFdmVudCkge1xuICAgICAgICB0aGlzLm9uVG91Y2hTdGFydCgkZXZlbnQpO1xuICAgICAgICB0aGlzPy5jb25maWc/Lm9uSXRlbVRvdWNoU3RhcnQoJGV2ZW50KVxuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJyZWNvcmRzICYmIHJlY29yZHMubGVuZ3RoXCI+XG4gICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd24tc3VibWVudSBzdWJtZW51IHN1Ym1lbnUtZXh0cmFcIj5cblxuICAgICAgICA8YSBjbGFzcz1cInN1Yi1uYXYtbGluayBuYXYtbGluayBhY3Rpb24tbGluayBkcm9wZG93bi1pdGVtIGRyb3Bkb3duLXRvZ2dsZSBwci00XCJcbiAgICAgICAgICAgKHRvdWNoc3RhcnQpPVwib25Ub3VjaFN0YXJ0KCRldmVudClcIlxuICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlRHJvcGRvd24oKVwiPlxuICAgICAgICAgICAgPHNjcm0taW1hZ2UgaW1hZ2U9XCJjbG9ja1wiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX0xBU1RfVklFV0VEXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudSBzdWJtZW51XCJcbiAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwic2hvd0Ryb3Bkb3duKClcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHJlY2VudFJlY29yZCBvZiByZWNvcmRzIHwgc2xpY2U6MDptYXhEaXNwbGF5ZWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAodG91Y2hzdGFydCk9XCJvbkl0ZW1Ub3VjaFN0YXJ0KCRldmVudClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbS1saW5rIFtjbGFzc109XCInc3VibWVudS1uYXYtbGluayBuYXYtbGluayBhY3Rpb24tbGluaydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsaW5rXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiByZWNlbnRSZWNvcmQuYXR0cmlidXRlcy5pdGVtX3N1bW1hcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGJ1aWxkUm91dGUocmVjZW50UmVjb3JkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlOiBidWlsZFJvdXRlKHJlY2VudFJlY29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgICAgICA8L3Njcm0tbWVudS1pdGVtLWxpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvbGk+XG48L25nLWNvbnRhaW5lcj5cblxuXG5cbiJdfQ==