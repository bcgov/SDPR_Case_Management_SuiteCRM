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
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i2 from "../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i3 from "../../../store/system-config/system-config.store";
import * as i4 from "../../../store/metadata/metadata.store.service";
import * as i5 from "@angular/common";
import * as i6 from "@angular/router";
import * as i7 from "../../label/label.component";
function BaseMenuRecentlyViewedComponent_ng_container_0_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function BaseMenuRecentlyViewedComponent_ng_container_0_ng_container_3_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r4.onClick && ctx_r4.onClick()); });
    i0.ɵɵelementStart(1, "a", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const recentRecord_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", ctx_r2.buildRoute(recentRecord_r3));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", recentRecord_r3.attributes.item_summary, " ");
} }
function BaseMenuRecentlyViewedComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseMenuRecentlyViewedComponent_ng_container_0_ng_container_3_div_1_Template, 3, 2, "div", 3);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(2, 1, ctx_r1.records, 0, ctx_r1.maxDisplayed));
} }
function BaseMenuRecentlyViewedComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h4", 1);
    i0.ɵɵlistener("click", function BaseMenuRecentlyViewedComponent_ng_container_0_Template_h4_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.toggleCollapse()); });
    i0.ɵɵelement(2, "scrm-label", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseMenuRecentlyViewedComponent_ng_container_0_ng_container_3_Template, 3, 5, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.collapsed);
} }
class BaseMenuRecentlyViewedComponent {
    constructor(navigation, nameMapper, configs, metadata) {
        this.navigation = navigation;
        this.nameMapper = nameMapper;
        this.configs = configs;
        this.metadata = metadata;
        this.collapsible = false;
        this.maxDisplayed = 5;
        this.collapsed = false;
        this.subs = [];
    }
    ngOnInit() {
        const ui = this.configs.getConfigValue('ui') ?? {};
        this.maxDisplayed = parseInt(ui.navigation_max_module_recently_viewed) ?? 5;
        this.initMetadata$();
        this.collapsed = !!this.collapsible;
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
     * toggle collapse
     */
    toggleCollapse() {
        if (!this.collapsible) {
            return;
        }
        this.collapsed = !this.collapsed;
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
    }
    /**
     * Clear subscription and data
     * @protected
     */
    clear() {
        this.records = null;
        this.subs.forEach(sub => sub.unsubscribe());
    }
    static { this.ɵfac = function BaseMenuRecentlyViewedComponent_Factory(t) { return new (t || BaseMenuRecentlyViewedComponent)(i0.ɵɵdirectiveInject(i1.ModuleNavigation), i0.ɵɵdirectiveInject(i2.ModuleNameMapper), i0.ɵɵdirectiveInject(i3.SystemConfigStore), i0.ɵɵdirectiveInject(i4.MetadataStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMenuRecentlyViewedComponent, selectors: [["scrm-base-menu-recently-viewed"]], inputs: { module: "module", onClick: "onClick", collapsible: "collapsible" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "recently-viewed-header", "mt-0", "pb-1", "pl-2", "pr-2", 3, "click"], ["labelKey", "LBL_LAST_VIEWED"], ["class", "nav-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "click"], [1, "nav-link", "action-link", "pb-2", "pt-2", 3, "routerLink"]], template: function BaseMenuRecentlyViewedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseMenuRecentlyViewedComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.records && ctx.records.length);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i6.RouterLink, i7.LabelComponent, i5.SlicePipe], encapsulation: 2 }); }
}
export { BaseMenuRecentlyViewedComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMenuRecentlyViewedComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-menu-recently-viewed', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"records && records.length\">\n    <h4 (click)=\"toggleCollapse()\"\n        class=\"recently-viewed-header mt-0 pb-1 pl-2 pr-2\">\n        <scrm-label labelKey=\"LBL_LAST_VIEWED\"></scrm-label>\n    </h4>\n    <ng-container *ngIf=\"!collapsed\">\n        <div (click)=\"onClick && onClick()\"\n             *ngFor=\"let recentRecord of records | slice:0:maxDisplayed\"\n             class=\"nav-item\"\n        >\n            <a [routerLink]=\"this.buildRoute(recentRecord)\"\n               class=\"nav-link action-link pb-2 pt-2\">\n                {{ recentRecord.attributes.item_summary }}\n            </a>\n        </div>\n    </ng-container>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.ModuleNavigation }, { type: i2.ModuleNameMapper }, { type: i3.SystemConfigStore }, { type: i4.MetadataStore }]; }, { module: [{
            type: Input
        }], onClick: [{
            type: Input
        }], collapsible: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LXJlY2VudGx5LXZpZXdlZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1yZWNlbnRseS12aWV3ZWQvYmFzZS1tZW51LXJlY2VudGx5LXZpZXdlZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1yZWNlbnRseS12aWV3ZWQvYmFzZS1tZW51LXJlY2VudGx5LXZpZXdlZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQThDLE1BQU0sZUFBZSxDQUFDO0FBRTVGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBFQUEwRSxDQUFDO0FBQzFHLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRFQUE0RSxDQUFDO0FBQzVHLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ25GLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUM3RSxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7O0lDQzNCLDhCQUdDO0lBSEksd01BQVMsaUNBQVcsZ0JBQVMsQ0FBQSxJQUFDO0lBSS9CLDRCQUMwQztJQUN0QyxZQUNKO0lBQUEsaUJBQUksRUFBQTs7OztJQUhELGVBQTRDO0lBQTVDLCtEQUE0QztJQUUzQyxlQUNKO0lBREksd0VBQ0o7OztJQVJSLDZCQUFpQztJQUM3Qiw4R0FRTTs7SUFDViwwQkFBZTs7O0lBUm1CLGVBQWlDO0lBQWpDLHNGQUFpQzs7OztJQVB2RSw2QkFBZ0Q7SUFDNUMsNkJB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QUM7UUFDaEQsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRDs7O09BR0c7SUFDTyxLQUFLO1FBQ1gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO2dHQXJGUSwrQkFBK0I7b0VBQS9CLCtCQUErQjtZQ2I1QyxrR0FnQmU7O1lBaEJBLHdEQUErQjs7O1NEYWpDLCtCQUErQjt1RkFBL0IsK0JBQStCO2NBTDNDLFNBQVM7MkJBQ0ksZ0NBQWdDOzhKQUtqQyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWNlbnRseVZpZXdlZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TW9kdWxlTmF2aWdhdGlvbn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmFtZS1tYXBwZXIvbW9kdWxlLW5hbWUtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYmFzZS1tZW51LXJlY2VudGx5LXZpZXdlZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Jhc2UtbWVudS1yZWNlbnRseS12aWV3ZWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgQmFzZU1lbnVSZWNlbnRseVZpZXdlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIG1vZHVsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG9uQ2xpY2s6IEZ1bmN0aW9uO1xuICAgIEBJbnB1dCgpIGNvbGxhcHNpYmxlID0gZmFsc2U7XG4gICAgbWF4RGlzcGxheWVkOiBudW1iZXIgPSA1O1xuICAgIHJlY29yZHM6IFJlY2VudGx5Vmlld2VkW107XG4gICAgY29sbGFwc2VkID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvbjogTW9kdWxlTmF2aWdhdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIG5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBjb25maWdzOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHVpID0gdGhpcy5jb25maWdzLmdldENvbmZpZ1ZhbHVlKCd1aScpID8/IHt9O1xuICAgICAgICB0aGlzLm1heERpc3BsYXllZCA9IHBhcnNlSW50KHVpLm5hdmlnYXRpb25fbWF4X21vZHVsZV9yZWNlbnRseV92aWV3ZWQpID8/IDU7XG4gICAgICAgIHRoaXMuaW5pdE1ldGFkYXRhJCgpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9ICEhdGhpcy5jb2xsYXBzaWJsZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlQ2hhbmdlcyA9IGNoYW5nZXM/Lm1vZHVsZSA/PyBudWxsO1xuXG4gICAgICAgIGlmIChtb2R1bGVDaGFuZ2VzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2aW91c01vZHVsZSA9IGNoYW5nZXM/Lm1vZHVsZT8ucHJldmlvdXNWYWx1ZSA/PyAnJztcbiAgICAgICAgY29uc3QgY3VycmVudE1vZHVsZSA9IGNoYW5nZXM/Lm1vZHVsZT8uY3VycmVudFZhbHVlID8/ICcnO1xuICAgICAgICBpZiAocHJldmlvdXNNb2R1bGUgIT09IGN1cnJlbnRNb2R1bGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdE1ldGFkYXRhJCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgcm91dGUgZnJvbSByZWNlbnRseSB2aWV3ZWQgaXRlbVxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgYnVpbGRSb3V0ZShpdGVtOiBSZWNlbnRseVZpZXdlZCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGxlZ2FjeU5hbWUgPSBpdGVtLmF0dHJpYnV0ZXMubW9kdWxlX25hbWUgPz8gJyc7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMubmFtZU1hcHBlci50b0Zyb250ZW5kKGxlZ2FjeU5hbWUpID8/ICcnO1xuICAgICAgICBjb25zdCBpZCA9IGl0ZW0uYXR0cmlidXRlcy5pdGVtX2lkID8/ICcnO1xuICAgICAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uLmdldFJlY29yZFJvdXRlckxpbmsobW9kdWxlLCBpZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdG9nZ2xlIGNvbGxhcHNlXG4gICAgICovXG4gICAgdG9nZ2xlQ29sbGFwc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb2xsYXBzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBtZXRhZGF0YSBzdWJzY3JpcHRpb25cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRNZXRhZGF0YSQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZU1ldGEkID0gdGhpcy5tZXRhZGF0YS5hbGxNb2R1bGVNZXRhZGF0YSQucGlwZShtYXAodmFsdWUgPT4gdmFsdWVbdGhpcy5tb2R1bGVdID8/IG51bGwpKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaChtb2R1bGVNZXRhJC5zdWJzY3JpYmUobWV0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZHMgPSBtZXRhPy5yZWNlbnRseVZpZXdlZCA/PyBudWxsO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3Vic2NyaXB0aW9uIGFuZCBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5yZWNvcmRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlY29yZHMgJiYgcmVjb3Jkcy5sZW5ndGhcIj5cbiAgICA8aDQgKGNsaWNrKT1cInRvZ2dsZUNvbGxhcHNlKClcIlxuICAgICAgICBjbGFzcz1cInJlY2VudGx5LXZpZXdlZC1oZWFkZXIgbXQtMCBwYi0xIHBsLTIgcHItMlwiPlxuICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9MQVNUX1ZJRVdFRFwiPjwvc2NybS1sYWJlbD5cbiAgICA8L2g0PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sbGFwc2VkXCI+XG4gICAgICAgIDxkaXYgKGNsaWNrKT1cIm9uQ2xpY2sgJiYgb25DbGljaygpXCJcbiAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgcmVjZW50UmVjb3JkIG9mIHJlY29yZHMgfCBzbGljZTowOm1heERpc3BsYXllZFwiXG4gICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cInRoaXMuYnVpbGRSb3V0ZShyZWNlbnRSZWNvcmQpXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmsgYWN0aW9uLWxpbmsgcGItMiBwdC0yXCI+XG4gICAgICAgICAgICAgICAge3sgcmVjZW50UmVjb3JkLmF0dHJpYnV0ZXMuaXRlbV9zdW1tYXJ5IH19XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG4iXX0=