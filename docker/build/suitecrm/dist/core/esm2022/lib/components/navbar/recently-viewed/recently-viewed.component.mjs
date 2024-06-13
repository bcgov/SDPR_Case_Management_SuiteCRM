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
import { ChangeDetectionStrategy, Component, computed, Input, signal } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ImageModule } from "../../image/image.module";
import { RouterLink } from "@angular/router";
import { ModuleNameMapper } from "../../../services/navigation/module-name-mapper/module-name-mapper.service";
import { ModuleNavigation } from "../../../services/navigation/module-navigation/module-navigation.service";
import { LabelModule } from "../../label/label.module";
import * as i0 from "@angular/core";
import * as i1 from "../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i2 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i3 from "@angular/common";
import * as i4 from "../../image/image.component";
import * as i5 from "../../label/label.component";
function RecentlyViewedComponent_ng_container_0_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 4)(1, "a", 5);
    i0.ɵɵelement(2, "scrm-image", 6);
    i0.ɵɵelementStart(3, "div", 7)(4, "span", 8);
    i0.ɵɵelement(5, "scrm-label", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 10);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", item_r4.attributes == null ? null : item_r4.attributes.route);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("image", item_r4 == null ? null : item_r4.attributes == null ? null : item_r4.attributes.module_name);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("labelKey", item_r4 == null ? null : item_r4.attributes == null ? null : item_r4.attributes.module_name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4 == null ? null : item_r4.attributes == null ? null : item_r4.attributes.item_summary);
} }
function RecentlyViewedComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 2);
    i0.ɵɵtemplate(2, RecentlyViewedComponent_ng_container_0_li_2_Template, 8, 4, "li", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.itemWithRoutes());
} }
function RecentlyViewedComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h6", 11);
    i0.ɵɵelement(1, "scrm-label", 12);
    i0.ɵɵelementEnd();
} }
class RecentlyViewedComponent {
    set menuItems(value) {
        this._menuItems.set(value);
    }
    constructor(nameMapper, navigation) {
        this.nameMapper = nameMapper;
        this.navigation = navigation;
        this._menuItems = signal([]);
        this.itemWithRoutes = computed(() => this._menuItems().map(item => {
            if (item.attributes?.route) {
                return item;
            }
            return {
                ...item,
                attributes: {
                    ...item.attributes,
                    route: this.buildRoute(item)
                }
            };
        }));
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
    static { this.ɵfac = function RecentlyViewedComponent_Factory(t) { return new (t || RecentlyViewedComponent)(i0.ɵɵdirectiveInject(i1.ModuleNameMapper), i0.ɵɵdirectiveInject(i2.ModuleNavigation)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecentlyViewedComponent, selectors: [["scrm-recently-viewed"]], inputs: { menuItems: "menuItems" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["noItems", ""], [1, "p-0", "mb-0"], ["class", "recently-viewed-header d-flex", 4, "ngFor", "ngForOf"], [1, "recently-viewed-header", "d-flex"], [1, "new-list-item", "d-flex", 3, "routerLink"], [1, "action-btn-icon", "mr-3", 3, "image"], [1, "d-flex", "flex-column"], [1, "text-title", "text-uppercase"], ["listKey", "moduleList", 3, "labelKey"], [1, "text-subtitle"], [1, "d-flex", "justify-content-center", "pt-3", "pb-2"], ["labelKey", "LBL_LAST_VIEWED_NO_RESULT"]], template: function RecentlyViewedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecentlyViewedComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
            i0.ɵɵtemplate(1, RecentlyViewedComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r1 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.itemWithRoutes() && ctx.itemWithRoutes().length)("ngIfElse", _r1);
        } }, dependencies: [CommonModule, i3.NgForOf, i3.NgIf, ImageModule, i4.ImageComponent, RouterLink, LabelModule, i5.LabelComponent], encapsulation: 2, changeDetection: 0 }); }
}
export { RecentlyViewedComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecentlyViewedComponent, [{
        type: Component,
        args: [{ selector: 'scrm-recently-viewed', standalone: true, imports: [CommonModule, ImageModule, RouterLink, LabelModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"itemWithRoutes() && itemWithRoutes().length; else noItems\">\n    <ul class=\"p-0 mb-0\">\n        <li *ngFor=\"let item of itemWithRoutes();\" class=\"recently-viewed-header d-flex\">\n            <a class=\"new-list-item d-flex\" [routerLink]=\"item.attributes?.route\">\n                <scrm-image class=\"action-btn-icon mr-3\" [image]=\"item?.attributes?.module_name\"></scrm-image>\n                <div class=\"d-flex flex-column\">\n                <span class=\"text-title text-uppercase\">\n                    <scrm-label listKey=\"moduleList\" [labelKey]=\"item?.attributes?.module_name\"></scrm-label>\n                </span>\n                    <span class=\"text-subtitle\">{{ item?.attributes?.item_summary }}</span>\n                </div>\n            </a>\n        </li>\n    </ul>\n</ng-container>\n<ng-template #noItems>\n    <h6 class=\"d-flex justify-content-center pt-3 pb-2\">\n        <scrm-label labelKey=\"LBL_LAST_VIEWED_NO_RESULT\"></scrm-label>\n    </h6>\n</ng-template>\n\n\n\n" }]
    }], function () { return [{ type: i1.ModuleNameMapper }, { type: i2.ModuleNavigation }]; }, { menuItems: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZW50bHktdmlld2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL25hdmJhci9yZWNlbnRseS12aWV3ZWQvcmVjZW50bHktdmlld2VkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL25hdmJhci9yZWNlbnRseS12aWV3ZWQvcmVjZW50bHktdmlld2VkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRFQUE0RSxDQUFDO0FBQzVHLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBFQUEwRSxDQUFDO0FBRTFHLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7SUNKN0MsNkJBQWlGLFdBQUE7SUFFekUsZ0NBQThGO0lBQzlGLDhCQUFnQyxjQUFBO0lBRTVCLGdDQUF5RjtJQUM3RixpQkFBTztJQUNILGdDQUE0QjtJQUFBLFlBQW9DO0lBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUE7OztJQU4vQyxlQUFxQztJQUFyQyx5RkFBcUM7SUFDeEIsZUFBdUM7SUFBdkMsbUhBQXVDO0lBRzNDLGVBQTBDO0lBQTFDLHNIQUEwQztJQUUvQyxlQUFvQztJQUFwQyxrSEFBb0M7OztJQVRwRiw2QkFBZ0Y7SUFDNUUsNkJBQXFCO0lBQ2pCLHFGQVVLO0lBQ1QsaUJBQUs7SUFDVCwwQkFBZTs7O0lBWmMsZUFBb0I7SUFBcEIsaURBQW9COzs7SUFjN0MsOEJBQW9EO0lBQ2hELGlDQUE4RDtJQUNsRSxpQkFBSzs7QURWVCxNQVFhLHVCQUF1QjtJQUVoQyxJQUFhLFNBQVMsQ0FBQyxLQUF1QjtRQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBZUQsWUFDYyxVQUE0QixFQUM1QixVQUE0QjtRQUQ1QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQXBCMUMsZUFBVSxHQUFHLE1BQU0sQ0FBbUIsRUFBRSxDQUFDLENBQUM7UUFLMUMsbUJBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsRUFBRTtZQUMxRCxJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFO2dCQUN2QixPQUFPLElBQUksQ0FBQzthQUNmO1lBQ0QsT0FBTztnQkFDSCxHQUFHLElBQUk7Z0JBQ1AsVUFBVSxFQUFFO29CQUNSLEdBQUcsSUFBSSxDQUFDLFVBQVU7b0JBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztpQkFDL0I7YUFDSixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUl5QyxDQUFDO0lBRTlDOzs7T0FHRztJQUNILFVBQVUsQ0FBQyxJQUFTO1FBQ2hCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUNyRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQzt3RkFoQ1EsdUJBQXVCO29FQUF2Qix1QkFBdUI7WUNoQnBDLDBGQWNlO1lBQ2YseUhBSWM7OztZQW5CQywwRUFBbUQsaUJBQUE7NEJEYXBELFlBQVksdUJBQUUsV0FBVyxxQkFBRSxVQUFVLEVBQUUsV0FBVzs7U0FHbkQsdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FSbkMsU0FBUzsyQkFDSSxzQkFBc0IsY0FHcEIsSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLG1CQUM1Qyx1QkFBdUIsQ0FBQyxNQUFNO2tHQUlsQyxTQUFTO2tCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGNvbXB1dGVkLCBJbnB1dCwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge0ltYWdlTW9kdWxlfSBmcm9tIFwiLi4vLi4vaW1hZ2UvaW1hZ2UubW9kdWxlXCI7XG5pbXBvcnQge1JvdXRlckxpbmt9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcn0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVjZW50bHlWaWV3ZWR9IGZyb20gXCJjb21tb25cIjtcbmltcG9ydCB7TGFiZWxNb2R1bGV9IGZyb20gXCIuLi8uLi9sYWJlbC9sYWJlbC5tb2R1bGVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXJlY2VudGx5LXZpZXdlZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlY2VudGx5LXZpZXdlZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEltYWdlTW9kdWxlLCBSb3V0ZXJMaW5rLCBMYWJlbE1vZHVsZV0sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFJlY2VudGx5Vmlld2VkQ29tcG9uZW50IHtcbiAgICBfbWVudUl0ZW1zID0gc2lnbmFsPFJlY2VudGx5Vmlld2VkW10+KFtdKTtcbiAgICBASW5wdXQoKSBzZXQgbWVudUl0ZW1zKHZhbHVlOiBSZWNlbnRseVZpZXdlZFtdKSB7XG4gICAgICAgIHRoaXMuX21lbnVJdGVtcy5zZXQodmFsdWUpO1xuICAgIH1cblxuICAgIGl0ZW1XaXRoUm91dGVzID0gY29tcHV0ZWQoKCkgPT4gdGhpcy5fbWVudUl0ZW1zKCkubWFwKCBpdGVtID0+IHtcbiAgICAgICAgaWYoaXRlbS5hdHRyaWJ1dGVzPy5yb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgLi4uaXRlbS5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICAgIHJvdXRlOiB0aGlzLmJ1aWxkUm91dGUoaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KSk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uKSB7fVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgcm91dGUgZnJvbSByZWNlbnRseSB2aWV3ZWQgaXRlbVxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgYnVpbGRSb3V0ZShpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBsZWdhY3lOYW1lID0gaXRlbS5hdHRyaWJ1dGVzLm1vZHVsZV9uYW1lID8/ICcnO1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLm5hbWVNYXBwZXIudG9Gcm9udGVuZChsZWdhY3lOYW1lKSA/PyAnJztcbiAgICAgICAgY29uc3QgaWQgPSBpdGVtLmF0dHJpYnV0ZXMuaXRlbV9pZCA/PyAnJztcbiAgICAgICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbi5nZXRSZWNvcmRSb3V0ZXJMaW5rKG1vZHVsZSwgaWQpO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW1XaXRoUm91dGVzKCkgJiYgaXRlbVdpdGhSb3V0ZXMoKS5sZW5ndGg7IGVsc2Ugbm9JdGVtc1wiPlxuICAgIDx1bCBjbGFzcz1cInAtMCBtYi0wXCI+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtV2l0aFJvdXRlcygpO1wiIGNsYXNzPVwicmVjZW50bHktdmlld2VkLWhlYWRlciBkLWZsZXhcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmV3LWxpc3QtaXRlbSBkLWZsZXhcIiBbcm91dGVyTGlua109XCJpdGVtLmF0dHJpYnV0ZXM/LnJvdXRlXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJhY3Rpb24tYnRuLWljb24gbXItM1wiIFtpbWFnZV09XCJpdGVtPy5hdHRyaWJ1dGVzPy5tb2R1bGVfbmFtZVwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXRpdGxlIHRleHQtdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxpc3RLZXk9XCJtb2R1bGVMaXN0XCIgW2xhYmVsS2V5XT1cIml0ZW0/LmF0dHJpYnV0ZXM/Lm1vZHVsZV9uYW1lXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlXCI+e3sgaXRlbT8uYXR0cmlidXRlcz8uaXRlbV9zdW1tYXJ5IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG48L25nLWNvbnRhaW5lcj5cbjxuZy10ZW1wbGF0ZSAjbm9JdGVtcz5cbiAgICA8aDYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBwdC0zIHBiLTJcIj5cbiAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfTEFTVF9WSUVXRURfTk9fUkVTVUxUXCI+PC9zY3JtLWxhYmVsPlxuICAgIDwvaDY+XG48L25nLXRlbXBsYXRlPlxuXG5cblxuIl19