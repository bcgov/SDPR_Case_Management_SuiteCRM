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
import { Component } from '@angular/core';
import { ListViewStore } from '../../store/list-view/list-view.store';
import { FilterAdapter } from '../../adapters/filter.adapter';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { RecordPanelAdapter } from '../../adapters/record-panel.adapter';
import { QuickFiltersService } from "../../services/quick-filters.service";
import { isTrue } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../adapters/filter.adapter";
import * as i2 from "../../store/list-view/list-view.store";
import * as i3 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i4 from "../../adapters/record-panel.adapter";
import * as i5 from "../../services/quick-filters.service";
import * as i6 from "@angular/common";
import * as i7 from "../../../../components/module-title/module-title.component";
import * as i8 from "../settings-menu/settings-menu.component";
import * as i9 from "../../../../containers/list-filter/components/list-filter/list-filter.component";
import * as i10 from "../../../../containers/record-panel/components/record-panel/record-panel.component";
import * as i11 from "../../../../components/button-group/button-group.component";
import * as i12 from "../../../../components/label/label.component";
function ListHeaderComponent_div_7_scrm_button_group_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button-group", 14);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config$", ctx_r3.quickFilters.config$)("klass", "quick-filter-button");
} }
function ListHeaderComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10);
    i0.ɵɵelement(2, "scrm-label", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 12);
    i0.ɵɵtemplate(4, ListHeaderComponent_div_7_scrm_button_group_4_Template, 1, 2, "scrm-button-group", 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.quickFilters.config$);
} }
function ListHeaderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    i0.ɵɵelement(3, "scrm-list-filter", 18);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("config", ctx_r1.filterAdapter.getConfig());
} }
function ListHeaderComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    i0.ɵɵelement(3, "scrm-record-panel", 18);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("config", ctx_r2.recordPanelConfig);
} }
class ListHeaderComponent {
    constructor(filterAdapter, listStore, moduleNavigation, recordPanelAdapter, quickFilters) {
        this.filterAdapter = filterAdapter;
        this.listStore = listStore;
        this.moduleNavigation = moduleNavigation;
        this.recordPanelAdapter = recordPanelAdapter;
        this.quickFilters = quickFilters;
        this.actionPanel = '';
        this.showQuickFilters = false;
        this.enableQuickFilters = false;
        this.subs = [];
    }
    get moduleTitle() {
        const module = this.listStore.vm.appData.module;
        const appListStrings = this.listStore.vm.appData.language.appListStrings;
        return this.moduleNavigation.getModuleLabel(module, appListStrings);
    }
    ngOnInit() {
        this.listStore.actionPanel$.subscribe(actionPanel => {
            this.actionPanel = actionPanel;
            if (this.actionPanel === 'recordPanel') {
                this.recordPanelConfig = this.recordPanelAdapter.getConfig();
            }
            else {
                this.recordPanelConfig = null;
            }
        });
        this.subs.push(this.quickFilters.breakdown$.subscribe(breakdown => {
            this.showQuickFilters = isTrue(breakdown);
        }));
        this.subs.push(this.quickFilters.enabled$.subscribe(enabled => {
            this.enableQuickFilters = isTrue(enabled ?? false);
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.recordPanelConfig = null;
    }
    static { this.ɵfac = function ListHeaderComponent_Factory(t) { return new (t || ListHeaderComponent)(i0.ɵɵdirectiveInject(i1.FilterAdapter), i0.ɵɵdirectiveInject(i2.ListViewStore), i0.ɵɵdirectiveInject(i3.ModuleNavigation), i0.ɵɵdirectiveInject(i4.RecordPanelAdapter), i0.ɵɵdirectiveInject(i5.QuickFiltersService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListHeaderComponent, selectors: [["scrm-list-header"]], features: [i0.ɵɵProvidersFeature([FilterAdapter, RecordPanelAdapter])], decls: 12, vars: 10, consts: [[1, "list-view-header"], [1, "row", "mr-0", "justify-content-md-between"], [1, "custom-col-4", "d-none", "d-md-flex", "align-items-center"], [1, "list-view-title", 3, "title"], [1, "custom-col-8", "d-flex", "align-items-center"], ["class", "d-flex align-items-baseline w-100 justify-content-end pr-3", 4, "ngIf"], [1, "list-view-hr-container"], [1, "list-view-hr"], ["class", "container-fluid pt-2 small-font", 4, "ngIf"], [1, "d-flex", "align-items-baseline", "w-100", "justify-content-end", "pr-3"], [1, "text-nowrap", "text-muted", "fs-70", "pl-1", "mr-1"], ["labelKey", "LBL_QUICK_FILTERS"], [1, "pr-xxl-1", "mr-xxl-1"], [3, "config$", "klass", 4, "ngIf"], [3, "config$", "klass"], [1, "container-fluid", "pt-2", "small-font"], [1, "row"], [1, "col"], [3, "config"]], template: function ListHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 0)(2, "div", 1)(3, "div", 2);
            i0.ɵɵelement(4, "scrm-module-title", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵelement(6, "scrm-settings-menu");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, ListHeaderComponent_div_7_Template, 5, 1, "div", 5);
            i0.ɵɵelementStart(8, "div", 6);
            i0.ɵɵelement(9, "hr", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, ListHeaderComponent_div_10_Template, 4, 1, "div", 8);
            i0.ɵɵtemplate(11, ListHeaderComponent_div_11_Template, 4, 1, "div", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("justify-content-center", !(ctx.showQuickFilters && ctx.enableQuickFilters))("justify-content-end", ctx.showQuickFilters && ctx.enableQuickFilters);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", ctx.moduleTitle);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("pr-3", ctx.showQuickFilters && ctx.enableQuickFilters);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showQuickFilters && ctx.enableQuickFilters);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.actionPanel === "filters");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.actionPanel === "recordPanel" && ctx.recordPanelConfig);
        } }, dependencies: [i6.NgIf, i7.ModuleTitleComponent, i8.SettingsMenuComponent, i9.ListFilterComponent, i10.RecordPanelComponent, i11.ButtonGroupComponent, i12.LabelComponent], encapsulation: 2 }); }
}
export { ListHeaderComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListHeaderComponent, [{
        type: Component,
        args: [{ selector: 'scrm-list-header', providers: [FilterAdapter, RecordPanelAdapter], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container>\n    <div class=\"list-view-header\">\n        <div class=\"row mr-0 justify-content-md-between\"\n             [class.justify-content-center]=\"!(showQuickFilters && enableQuickFilters)\"\n             [class.justify-content-end]=\"(showQuickFilters && enableQuickFilters)\">\n            <div class=\"custom-col-4 d-none d-md-flex align-items-center\">\n                <scrm-module-title class=\"list-view-title\" [title]=\"moduleTitle\"></scrm-module-title>\n            </div>\n            <div class=\"custom-col-8 d-flex align-items-center\"\n                 [class.pr-3]=\"(showQuickFilters && enableQuickFilters)\"\n            >\n                <scrm-settings-menu></scrm-settings-menu>\n            </div>\n        </div>\n\n        <div *ngIf=\"showQuickFilters && enableQuickFilters\"\n             class=\"d-flex align-items-baseline w-100 justify-content-end pr-3\">\n            <div class=\"text-nowrap text-muted fs-70 pl-1 mr-1\">\n                <scrm-label labelKey=\"LBL_QUICK_FILTERS\"></scrm-label>\n            </div>\n            <div class=\"pr-xxl-1 mr-xxl-1\">\n                <scrm-button-group *ngIf=\"quickFilters.config$\" [config$]=\"quickFilters.config$\" [klass]=\"'quick-filter-button'\"></scrm-button-group>\n            </div>\n        </div>\n\n        <div class=\"list-view-hr-container\">\n            <hr class=\"list-view-hr\">\n        </div>\n        <div *ngIf=\"actionPanel === 'filters'\" class=\"container-fluid pt-2 small-font\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <scrm-list-filter [config]=\"filterAdapter.getConfig()\"></scrm-list-filter>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"actionPanel === 'recordPanel' && recordPanelConfig\" class=\"container-fluid pt-2 small-font\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <scrm-record-panel [config]=\"recordPanelConfig\"></scrm-record-panel>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.FilterAdapter }, { type: i2.ListViewStore }, { type: i3.ModuleNavigation }, { type: i4.RecordPanelAdapter }, { type: i5.QuickFiltersService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3QvY29tcG9uZW50cy9saXN0LWhlYWRlci9saXN0LWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9jb21wb25lbnRzL2xpc3QtaGVhZGVyL2xpc3QtaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzVELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZFQUE2RSxDQUFDO0FBRzdHLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ2NkLHdDQUFxSTs7O0lBQXJGLHFEQUFnQyxnQ0FBQTs7O0lBTnhGLDhCQUN3RSxjQUFBO0lBRWhFLGlDQUFzRDtJQUMxRCxpQkFBTTtJQUNOLCtCQUErQjtJQUMzQix1R0FBcUk7SUFDekksaUJBQU0sRUFBQTs7O0lBRGtCLGVBQTBCO0lBQTFCLGtEQUEwQjs7O0lBT3RELCtCQUErRSxjQUFBLGNBQUE7SUFHbkUsdUNBQTBFO0lBQzlFLGlCQUFNLEVBQUEsRUFBQTs7O0lBRGdCLGVBQW9DO0lBQXBDLHlEQUFvQzs7O0lBSWxFLCtCQUF3RyxjQUFBLGNBQUE7SUFHNUYsd0NBQW9FO0lBQ3hFLGlCQUFNLEVBQUEsRUFBQTs7O0lBRGlCLGVBQTRCO0lBQTVCLGlEQUE0Qjs7QUQ3Qm5FLE1BS2EsbUJBQW1CO0lBUTVCLFlBQ1csYUFBNEIsRUFDekIsU0FBd0IsRUFDeEIsZ0JBQWtDLEVBQ2xDLGtCQUFzQyxFQUN6QyxZQUFpQztRQUpqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUN6QixjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN6QyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFYNUMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNqQixTQUFJLEdBQW1CLEVBQUUsQ0FBQztJQVNwQyxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ1gsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUNoRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztRQUN6RSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQy9CLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxhQUFhLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDaEU7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQzthQUNqQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzlELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMxRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ1AsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztvRkE3Q1EsbUJBQW1CO29FQUFuQixtQkFBbUIsc0VBRmpCLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDO1lDWmxELDZCQUFjO1lBQ1YsOEJBQThCLGFBQUEsYUFBQTtZQUtsQix1Q0FBcUY7WUFDekYsaUJBQU07WUFDTiw4QkFFQztZQUNHLHFDQUF5QztZQUM3QyxpQkFBTSxFQUFBO1lBR1Ysb0VBUU07WUFFTiw4QkFBb0M7WUFDaEMsd0JBQXlCO1lBQzdCLGlCQUFNO1lBQ04sc0VBTU07WUFDTixzRUFNTTtZQUNWLGlCQUFNO1lBQ1YsMEJBQWU7O1lBeENGLGVBQTBFO1lBQTFFLDJGQUEwRSx1RUFBQTtZQUc1QixlQUFxQjtZQUFyQix1Q0FBcUI7WUFHL0QsZUFBdUQ7WUFBdkQsc0VBQXVEO1lBTTFELGVBQTRDO1lBQTVDLHFFQUE0QztZQWE1QyxlQUErQjtZQUEvQixvREFBK0I7WUFPL0IsZUFBd0Q7WUFBeEQsaUZBQXdEOzs7U0RyQnpELG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBTC9CLFNBQVM7MkJBQ0ksa0JBQWtCLGFBRWpCLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMaXN0Vmlld1N0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9saXN0LXZpZXcvbGlzdC12aWV3LnN0b3JlJztcbmltcG9ydCB7RmlsdGVyQWRhcHRlcn0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvZmlsdGVyLmFkYXB0ZXInO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRQYW5lbENvbmZpZ30gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9yZWNvcmQtcGFuZWwvY29tcG9uZW50cy9yZWNvcmQtcGFuZWwvcmVjb3JkLXBhbmVsLm1vZGVsJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7UmVjb3JkUGFuZWxBZGFwdGVyfSBmcm9tICcuLi8uLi9hZGFwdGVycy9yZWNvcmQtcGFuZWwuYWRhcHRlcic7XG5pbXBvcnQge1F1aWNrRmlsdGVyc1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9xdWljay1maWx0ZXJzLnNlcnZpY2VcIjtcbmltcG9ydCB7aXNUcnVlfSBmcm9tICdjb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tbGlzdC1oZWFkZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnbGlzdC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0ZpbHRlckFkYXB0ZXIsIFJlY29yZFBhbmVsQWRhcHRlcl0sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBhY3Rpb25QYW5lbCA9ICcnO1xuICAgIHJlY29yZFBhbmVsQ29uZmlnOiBSZWNvcmRQYW5lbENvbmZpZztcbiAgICBzaG93UXVpY2tGaWx0ZXJzID0gZmFsc2U7XG4gICAgZW5hYmxlUXVpY2tGaWx0ZXJzID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGZpbHRlckFkYXB0ZXI6IEZpbHRlckFkYXB0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBsaXN0U3RvcmU6IExpc3RWaWV3U3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkUGFuZWxBZGFwdGVyOiBSZWNvcmRQYW5lbEFkYXB0ZXIsXG4gICAgICAgIHB1YmxpYyBxdWlja0ZpbHRlcnM6IFF1aWNrRmlsdGVyc1NlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlVGl0bGUoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5saXN0U3RvcmUudm0uYXBwRGF0YS5tb2R1bGU7XG4gICAgICAgIGNvbnN0IGFwcExpc3RTdHJpbmdzID0gdGhpcy5saXN0U3RvcmUudm0uYXBwRGF0YS5sYW5ndWFnZS5hcHBMaXN0U3RyaW5ncztcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlTmF2aWdhdGlvbi5nZXRNb2R1bGVMYWJlbChtb2R1bGUsIGFwcExpc3RTdHJpbmdzKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5saXN0U3RvcmUuYWN0aW9uUGFuZWwkLnN1YnNjcmliZShhY3Rpb25QYW5lbCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvblBhbmVsID0gYWN0aW9uUGFuZWw7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rpb25QYW5lbCA9PT0gJ3JlY29yZFBhbmVsJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkUGFuZWxDb25maWcgPSB0aGlzLnJlY29yZFBhbmVsQWRhcHRlci5nZXRDb25maWcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRQYW5lbENvbmZpZyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMucXVpY2tGaWx0ZXJzLmJyZWFrZG93biQuc3Vic2NyaWJlKGJyZWFrZG93biA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dRdWlja0ZpbHRlcnMgPSBpc1RydWUoYnJlYWtkb3duKTtcbiAgICAgICAgfSkpXG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5xdWlja0ZpbHRlcnMuZW5hYmxlZCQuc3Vic2NyaWJlKGVuYWJsZWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVRdWlja0ZpbHRlcnMgPSBpc1RydWUoZW5hYmxlZCA/PyBmYWxzZSk7XG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLnJlY29yZFBhbmVsQ29uZmlnID0gbnVsbDtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48bmctY29udGFpbmVyPlxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LXZpZXctaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXItMCBqdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlblwiXG4gICAgICAgICAgICAgW2NsYXNzLmp1c3RpZnktY29udGVudC1jZW50ZXJdPVwiIShzaG93UXVpY2tGaWx0ZXJzICYmIGVuYWJsZVF1aWNrRmlsdGVycylcIlxuICAgICAgICAgICAgIFtjbGFzcy5qdXN0aWZ5LWNvbnRlbnQtZW5kXT1cIihzaG93UXVpY2tGaWx0ZXJzICYmIGVuYWJsZVF1aWNrRmlsdGVycylcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29sLTQgZC1ub25lIGQtbWQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1tb2R1bGUtdGl0bGUgY2xhc3M9XCJsaXN0LXZpZXctdGl0bGVcIiBbdGl0bGVdPVwibW9kdWxlVGl0bGVcIj48L3Njcm0tbW9kdWxlLXRpdGxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbC04IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICBbY2xhc3MucHItM109XCIoc2hvd1F1aWNrRmlsdGVycyAmJiBlbmFibGVRdWlja0ZpbHRlcnMpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c2NybS1zZXR0aW5ncy1tZW51Pjwvc2NybS1zZXR0aW5ncy1tZW51PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgKm5nSWY9XCJzaG93UXVpY2tGaWx0ZXJzICYmIGVuYWJsZVF1aWNrRmlsdGVyc1wiXG4gICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgdy0xMDAganVzdGlmeS1jb250ZW50LWVuZCBwci0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ub3dyYXAgdGV4dC1tdXRlZCBmcy03MCBwbC0xIG1yLTFcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9RVUlDS19GSUxURVJTXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHIteHhsLTEgbXIteHhsLTFcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1idXR0b24tZ3JvdXAgKm5nSWY9XCJxdWlja0ZpbHRlcnMuY29uZmlnJFwiIFtjb25maWckXT1cInF1aWNrRmlsdGVycy5jb25maWckXCIgW2tsYXNzXT1cIidxdWljay1maWx0ZXItYnV0dG9uJ1wiPjwvc2NybS1idXR0b24tZ3JvdXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3Qtdmlldy1oci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxociBjbGFzcz1cImxpc3Qtdmlldy1oclwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImFjdGlvblBhbmVsID09PSAnZmlsdGVycydcIiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwdC0yIHNtYWxsLWZvbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWxpc3QtZmlsdGVyIFtjb25maWddPVwiZmlsdGVyQWRhcHRlci5nZXRDb25maWcoKVwiPjwvc2NybS1saXN0LWZpbHRlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImFjdGlvblBhbmVsID09PSAncmVjb3JkUGFuZWwnICYmIHJlY29yZFBhbmVsQ29uZmlnXCIgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcHQtMiBzbWFsbC1mb250XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1yZWNvcmQtcGFuZWwgW2NvbmZpZ109XCJyZWNvcmRQYW5lbENvbmZpZ1wiPjwvc2NybS1yZWNvcmQtcGFuZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==