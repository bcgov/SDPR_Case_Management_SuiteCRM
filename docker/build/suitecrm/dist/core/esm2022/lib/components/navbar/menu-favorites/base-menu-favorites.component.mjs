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
import { ModuleNavigation } from '../../../services/navigation/module-navigation/module-navigation.service';
import { ModuleNameMapper } from '../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { BaseFavoritesComponent } from './base-favorites.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i2 from "../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i3 from "../../../store/system-config/system-config.store";
import * as i4 from "../../../store/metadata/metadata.store.service";
import * as i5 from "@angular/common";
import * as i6 from "@angular/router";
import * as i7 from "../../label/label.component";
function BaseMenuFavoritesComponent_ng_container_0_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function BaseMenuFavoritesComponent_ng_container_0_ng_container_3_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r4.onClick && ctx_r4.onClick()); });
    i0.ɵɵelementStart(1, "a", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const favorite_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", ctx_r2.buildRoute(favorite_r3));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", favorite_r3.attributes.parent_name, " ");
} }
function BaseMenuFavoritesComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseMenuFavoritesComponent_ng_container_0_ng_container_3_div_1_Template, 3, 2, "div", 3);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(2, 1, ctx_r1.records, 0, ctx_r1.maxDisplayed));
} }
function BaseMenuFavoritesComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h4", 1);
    i0.ɵɵlistener("click", function BaseMenuFavoritesComponent_ng_container_0_Template_h4_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.toggleCollapse()); });
    i0.ɵɵelement(2, "scrm-label", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseMenuFavoritesComponent_ng_container_0_ng_container_3_Template, 3, 5, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.collapsed);
} }
class BaseMenuFavoritesComponent extends BaseFavoritesComponent {
    constructor(navigation, nameMapper, configs, metadata) {
        super(navigation, nameMapper, configs, metadata);
        this.navigation = navigation;
        this.nameMapper = nameMapper;
        this.configs = configs;
        this.metadata = metadata;
        this.collapsible = false;
        this.collapsed = false;
    }
    ngOnInit() {
        super.ngOnInit();
        this.collapsed = !!this.collapsible;
    }
    /**
     * toggle collapse
     */
    toggleCollapse() {
        if (!this.collapsible) {
            return;
        }
        this.collapsed = !this.collapsed;
    }
    static { this.ɵfac = function BaseMenuFavoritesComponent_Factory(t) { return new (t || BaseMenuFavoritesComponent)(i0.ɵɵdirectiveInject(i1.ModuleNavigation), i0.ɵɵdirectiveInject(i2.ModuleNameMapper), i0.ɵɵdirectiveInject(i3.SystemConfigStore), i0.ɵɵdirectiveInject(i4.MetadataStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMenuFavoritesComponent, selectors: [["scrm-base-menu-favorites"]], inputs: { onClick: "onClick", collapsible: "collapsible" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "favorite-header", "mt-0", "pb-1", "pl-2", "pr-2", 3, "click"], ["labelKey", "LBL_FAVORITES"], ["class", "nav-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "click"], [1, "nav-link", "action-link", "pb-2", "pt-2", 3, "routerLink"]], template: function BaseMenuFavoritesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseMenuFavoritesComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.records && ctx.records.length);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i6.RouterLink, i7.LabelComponent, i5.SlicePipe], encapsulation: 2 }); }
}
export { BaseMenuFavoritesComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMenuFavoritesComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-menu-favorites', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"records && records.length\">\n    <h4 (click)=\"toggleCollapse()\"\n        class=\"favorite-header mt-0 pb-1 pl-2 pr-2\">\n        <scrm-label labelKey=\"LBL_FAVORITES\"></scrm-label>\n    </h4>\n    <ng-container *ngIf=\"!collapsed\">\n        <div (click)=\"onClick && onClick()\"\n             *ngFor=\"let favorite of records | slice:0:maxDisplayed\"\n             class=\"nav-item\"\n        >\n            <a [routerLink]=\"this.buildRoute(favorite)\"\n               class=\"nav-link action-link pb-2 pt-2\">\n                {{ favorite.attributes.parent_name }}\n            </a>\n        </div>\n    </ng-container>\n\n</ng-container>\n" }]
    }], function () { return [{ type: i1.ModuleNavigation }, { type: i2.ModuleNameMapper }, { type: i3.SystemConfigStore }, { type: i4.MetadataStore }]; }, { onClick: [{
            type: Input
        }], collapsible: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LWZhdm9yaXRlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1mYXZvcml0ZXMvYmFzZS1tZW51LWZhdm9yaXRlcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1mYXZvcml0ZXMvYmFzZS1tZW51LWZhdm9yaXRlcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMEVBQTBFLENBQUM7QUFDMUcsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEVBQTRFLENBQUM7QUFDNUcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDbkYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQzdFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7Ozs7OztJQ0UxRCw4QkFHQztJQUhJLG1NQUFTLGlDQUFXLGdCQUFTLENBQUEsSUFBQztJQUkvQiw0QkFDMEM7SUFDdEMsWUFDSjtJQUFBLGlCQUFJLEVBQUE7Ozs7SUFIRCxlQUF3QztJQUF4QywyREFBd0M7SUFFdkMsZUFDSjtJQURJLG1FQUNKOzs7SUFSUiw2QkFBaUM7SUFDN0IseUdBUU07O0lBQ1YsMEJBQWU7OztJQVJlLGVBQWlDO0lBQWpDLHNGQUFpQzs7OztJQVBuRSw2QkFBZ0Q7SUFDNUMsNkJBQ2dEO0lBRDVDLDRLQUFTLGVBQUEsdUJBQWdCLENBQUEsSUFBQztJQUUxQixnQ0FBa0Q7SUFDdEQsaUJBQUs7SUFDTCw0R0FVZTtJQUVuQiwwQkFBZTs7O0lBWkksZUFBZ0I7SUFBaEIsd0NBQWdCOztBRENuQyxNQUthLDBCQUEyQixTQUFRLHNCQUFzQjtJQU1sRSxZQUNjLFVBQTRCLEVBQzVCLFVBQTRCLEVBQzVCLE9BQTBCLEVBQzFCLFFBQXVCO1FBRWpDLEtBQUssQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUx0QyxlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBUDVCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFTbEIsQ0FBQztJQUVELFFBQVE7UUFDSixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDckMsQ0FBQzsyRkE3QlEsMEJBQTBCO29FQUExQiwwQkFBMEI7WUNYdkMsNkZBaUJlOztZQWpCQSx3REFBK0I7OztTRFdqQywwQkFBMEI7dUZBQTFCLDBCQUEwQjtjQUx0QyxTQUFTOzJCQUNJLDBCQUEwQjs4SkFNM0IsT0FBTztrQkFBZixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TW9kdWxlTmF2aWdhdGlvbn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmFtZS1tYXBwZXIvbW9kdWxlLW5hbWUtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge0Jhc2VGYXZvcml0ZXNDb21wb25lbnR9IGZyb20gJy4vYmFzZS1mYXZvcml0ZXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWJhc2UtbWVudS1mYXZvcml0ZXMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYXNlLW1lbnUtZmF2b3JpdGVzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VNZW51RmF2b3JpdGVzQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZhdm9yaXRlc0NvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKSBvbkNsaWNrOiBGdW5jdGlvbjtcbiAgICBASW5wdXQoKSBjb2xsYXBzaWJsZSA9IGZhbHNlO1xuICAgIGNvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgbmFtZU1hcHBlcjogTW9kdWxlTmFtZU1hcHBlcixcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmVcbiAgICApIHtcbiAgICAgICAgc3VwZXIobmF2aWdhdGlvbiwgbmFtZU1hcHBlciwgY29uZmlncywgbWV0YWRhdGEpXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkID0gISF0aGlzLmNvbGxhcHNpYmxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvZ2dsZSBjb2xsYXBzZVxuICAgICAqL1xuICAgIHRvZ2dsZUNvbGxhcHNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29sbGFwc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VkID0gIXRoaXMuY29sbGFwc2VkO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJyZWNvcmRzICYmIHJlY29yZHMubGVuZ3RoXCI+XG4gICAgPGg0IChjbGljayk9XCJ0b2dnbGVDb2xsYXBzZSgpXCJcbiAgICAgICAgY2xhc3M9XCJmYXZvcml0ZS1oZWFkZXIgbXQtMCBwYi0xIHBsLTIgcHItMlwiPlxuICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9GQVZPUklURVNcIj48L3Njcm0tbGFiZWw+XG4gICAgPC9oND5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbGxhcHNlZFwiPlxuICAgICAgICA8ZGl2IChjbGljayk9XCJvbkNsaWNrICYmIG9uQ2xpY2soKVwiXG4gICAgICAgICAgICAgKm5nRm9yPVwibGV0IGZhdm9yaXRlIG9mIHJlY29yZHMgfCBzbGljZTowOm1heERpc3BsYXllZFwiXG4gICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cInRoaXMuYnVpbGRSb3V0ZShmYXZvcml0ZSlcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtbGluayBhY3Rpb24tbGluayBwYi0yIHB0LTJcIj5cbiAgICAgICAgICAgICAgICB7eyBmYXZvcml0ZS5hdHRyaWJ1dGVzLnBhcmVudF9uYW1lIH19XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuXG48L25nLWNvbnRhaW5lcj5cbiJdfQ==