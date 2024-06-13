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
import { isTrue } from 'common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, combineLatestWith } from 'rxjs';
import { ListViewStore } from '../../store/list-view/list-view.store';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import { ScreenSize, ScreenSizeObserverService } from '../../../../services/ui/screen-size-observer/screen-size-observer.service';
import { QuickFiltersService } from "../../services/quick-filters.service";
import * as i0 from "@angular/core";
import * as i1 from "../../store/list-view/list-view.store";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i4 from "../../../../store/system-config/system-config.store";
import * as i5 from "../../services/quick-filters.service";
import * as i6 from "@angular/common";
import * as i7 from "../../../../components/button-group/button-group.component";
import * as i8 from "../../../../components/label/label.component";
function SettingsMenuComponent_ng_container_1_div_1_scrm_button_group_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button-group", 10);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("config$", ctx_r4.quickFilters.config$)("klass", "quick-filter-button");
} }
function SettingsMenuComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6);
    i0.ɵɵelement(2, "scrm-label", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 8);
    i0.ɵɵtemplate(4, SettingsMenuComponent_ng_container_1_div_1_scrm_button_group_4_Template, 1, 2, "scrm-button-group", 9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r3.quickFilters.config$);
} }
function SettingsMenuComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SettingsMenuComponent_ng_container_1_div_1_Template, 5, 1, "div", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showQuickFilters && ctx_r0.enableQuickFilters);
} }
function SettingsMenuComponent_scrm_button_group_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button-group", 11);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("config$", ctx_r1.config$);
} }
class SettingsMenuComponent {
    constructor(listStore, modalService, screenSize, systemConfigStore, quickFilters) {
        this.listStore = listStore;
        this.modalService = modalService;
        this.screenSize = screenSize;
        this.systemConfigStore = systemConfigStore;
        this.quickFilters = quickFilters;
        this.configState = new BehaviorSubject({ buttons: [] });
        this.config$ = this.configState.asObservable();
        this.showQuickFilters = true;
        this.enableQuickFilters = false;
        this.screen = ScreenSize.Medium;
        this.defaultBreakpoint = 5;
        this.subs = [];
    }
    ngOnInit() {
        this.configState.next(this.getButtonGroupConfig());
        const vm$ = this.listStore.widgets$.pipe(combineLatestWith(this.listStore.displayFilters$, this.listStore.criteria$, this.screenSize.screenSize$, this.listStore.showSidebarWidgets$, this.listStore.filterList.records$));
        this.subs.push(vm$.subscribe(([widgets, displayFilters, criteria, screenSize, showSidebarWidgets, savedFilters]) => {
            if (screenSize) {
                this.screen = screenSize;
            }
            this.configState.next(this.getButtonGroupConfig());
            this.quickFilters.init();
        }));
        this.subs.push(this.quickFilters.breakdown$.subscribe(breakdown => {
            this.showQuickFilters = !isTrue(breakdown);
        }));
        this.subs.push(this.quickFilters.enabled$.subscribe(enabled => {
            this.enableQuickFilters = isTrue(enabled ?? false);
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getButtonGroupConfig() {
        const availableButtons = [
            {
                show: () => this.checkFiltersDisplay(),
                button: this.getMyFiltersButton(),
            },
            {
                show: () => true,
                button: this.getFilterButton()
            },
            {
                show: () => this.listStore.widgets,
                button: this.getInsightsButton(),
            },
        ];
        const config = {
            buttonKlass: ['settings-button'],
            dropdownLabel: this.listStore.appStrings.LBL_OPTIONS || '',
            breakpoint: this.getBreakpoint(),
            dropdownOptions: {
                placement: ['bottom-right'],
                wrapperKlass: ['dropdown-button-secondary']
            },
            buttons: []
        };
        availableButtons.forEach(availableButton => {
            if (!availableButton.show) {
                config.buttons.push(availableButton.button);
                return;
            }
            if (availableButton.show()) {
                config.buttons.push(availableButton.button);
            }
        });
        return config;
    }
    checkFiltersDisplay() {
        const filters = this.listStore.filterList.getFilters() ?? [];
        const quickFilterBreakpoint = this.quickFilters.getBreakpoint();
        const totalFilters = filters.length;
        const totalQuickFilters = filters.filter(obj => obj.attributes.quick_filter).length;
        if (totalFilters > 0 && (totalQuickFilters > quickFilterBreakpoint || (totalFilters - totalQuickFilters) > 0)) {
            return true;
        }
        return false;
    }
    getFilters() {
        return this?.listStore?.recordList?.criteria?.filters ?? {};
    }
    getCurrentCriteria() {
        return this?.listStore?.recordList?.criteria ?? {};
    }
    hasActiveFilter() {
        const activeFilters = this.listStore.activeFilters;
        if (!activeFilters) {
            return false;
        }
        const filterKeys = Object.keys(activeFilters) ?? [];
        if (!filterKeys || !filterKeys.length) {
            return false;
        }
        if (filterKeys.length > 1) {
            return true;
        }
        const currentFilter = activeFilters[filterKeys[0]];
        return currentFilter.key && currentFilter.key !== '' && currentFilter.key !== 'default';
    }
    areAllCurrentCriteriaFilterEmpty() {
        return Object.keys(this.getFilters() ?? {}).every(key => this.getFilters()[key].operator === '');
    }
    isAnyFilterApplied() {
        return this.hasActiveFilter() || !this.areAllCurrentCriteriaFilterEmpty();
    }
    getBreakpoint() {
        const breakpointMap = this.systemConfigStore.getConfigValue('listview_settings_limits');
        if (this.screen && breakpointMap && breakpointMap[this.screen]) {
            this.breakpoint = breakpointMap[this.screen];
            return this.breakpoint;
        }
        if (this.breakpoint) {
            return this.breakpoint;
        }
        return this.defaultBreakpoint;
    }
    getFilterButton() {
        const groupedFilterButton = {
            type: 'grouped',
            items: []
        };
        const filterButton = {
            label: this.listStore.appStrings.LBL_FILTER || '',
            klass: {
                'filter-settings-button': true,
                'btn btn-sm settings-button': true,
                active: this.isAnyFilterApplied()
            },
            onClick: () => {
                this.listStore.showFilters = !this.listStore.showFilters;
            }
        };
        if (this.isAnyFilterApplied()) {
            filterButton.icon = 'filter';
        }
        groupedFilterButton.items.push(filterButton);
        if (this.isAnyFilterApplied()) {
            groupedFilterButton.items.push(this.getClearButton());
        }
        return groupedFilterButton;
    }
    getMyFiltersButton() {
        const filters = this.listStore.filterList.getFilters();
        const dropdownConfig = {
            label: this.listStore.appStrings.LBL_SAVED_FILTER_SHORTCUT || '',
            klass: ['dropdown-toggle'],
            wrapperKlass: ['filter-action-group'],
            items: [],
            sections: {
                'quick-filters': {
                    labelKey: 'LBL_QUICK_FILTERS'
                },
                'default': {
                    labelKey: 'LBL_SAVED_FILTER_SHORTCUT'
                },
            }
        };
        const activeFilters = this.listStore.activeFilters;
        let anyActive = false;
        let quickFilterCount = 0;
        const quickFilterBreakpoint = this.quickFilters.getBreakpoint();
        const isQuickFiltersEnabled = this.quickFilters.areConfigEnabled();
        filters.forEach((filter) => {
            const isQuickFilterButton = isTrue(filter?.attributes?.quick_filter ?? false);
            if (isQuickFiltersEnabled && isQuickFilterButton && quickFilterCount < quickFilterBreakpoint) {
                quickFilterCount++;
                return;
            }
            const isActive = Object.keys(activeFilters).some(key => key === filter.key);
            anyActive = anyActive || isActive;
            const button = {
                label: filter.attributes.name,
                section: isQuickFilterButton ? 'quick-filters' : 'default',
                onClick: () => {
                    this.listStore.showFilters = false;
                    if (isActive) {
                        this.listStore.resetFilters();
                    }
                    else {
                        this.listStore.setOpenFilter(filter);
                        const selectedFilters = {};
                        selectedFilters[filter.key] = filter;
                        this.listStore.setFilters(selectedFilters);
                    }
                }
            };
            if (isActive) {
                button.icon = 'filter';
                button.iconKlass = 'small';
                button.klass = ['active'];
            }
            dropdownConfig.items.push(button);
        });
        if (anyActive) {
            dropdownConfig.klass = ['dropdown-toggle', 'active'];
        }
        return dropdownConfig;
    }
    getClearButton() {
        return {
            label: 'x',
            titleKey: 'LBL_CLEAR_FILTER',
            klass: {
                'btn btn-sm settings-button clear-filter-button btn-main-light': true
            },
            onClick: () => {
                this.listStore.showFilters = false;
                this.listStore.resetFilters();
            }
        };
    }
    getInsightsButton() {
        return {
            label: this.listStore.appStrings.LBL_INSIGHTS || '',
            klass: {
                active: this.listStore.showSidebarWidgets
            },
            icon: 'pie',
            onClick: () => {
                this.listStore.showSidebarWidgets = !this.listStore.showSidebarWidgets;
            }
        };
    }
    static { this.ɵfac = function SettingsMenuComponent_Factory(t) { return new (t || SettingsMenuComponent)(i0.ɵɵdirectiveInject(i1.ListViewStore), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i3.ScreenSizeObserverService), i0.ɵɵdirectiveInject(i4.SystemConfigStore), i0.ɵɵdirectiveInject(i5.QuickFiltersService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SettingsMenuComponent, selectors: [["scrm-settings-menu"]], decls: 5, vars: 4, consts: [[1, "list-view-settings", "w-100", "d-flex", "justify-content-end"], [4, "ngIf"], [1, "text-nowrap"], ["klass", "d-flex align-items-center", 3, "config$", 4, "ngIf"], ["class", "d-flex align-items-baseline", 4, "ngIf"], [1, "d-flex", "align-items-baseline"], [1, "text-nowrap", "text-muted", "fs-70", "pl-1", "mr-2"], ["labelKey", "LBL_QUICK_FILTERS"], [1, "quick-filter-border", "pr-xxl-1", "mr-xxl-1"], [3, "config$", "klass", 4, "ngIf"], [3, "config$", "klass"], ["klass", "d-flex align-items-center", 3, "config$"]], template: function SettingsMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, SettingsMenuComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵtemplate(4, SettingsMenuComponent_scrm_button_group_4_Template, 1, 1, "scrm-button-group", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 2, ctx.quickFilters.config$));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.config$);
        } }, dependencies: [i6.NgIf, i7.ButtonGroupComponent, i8.LabelComponent, i6.AsyncPipe], encapsulation: 2 }); }
}
export { SettingsMenuComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingsMenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-settings-menu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"list-view-settings w-100 d-flex justify-content-end\">\n    <ng-container *ngIf=\"(quickFilters.config$ | async) as vm\">\n        <div *ngIf=\"showQuickFilters && enableQuickFilters\"\n             class=\"d-flex align-items-baseline\">\n            <div class=\"text-nowrap text-muted fs-70 pl-1 mr-2\">\n                <scrm-label labelKey=\"LBL_QUICK_FILTERS\"></scrm-label>\n            </div>\n            <div class=\"quick-filter-border pr-xxl-1 mr-xxl-1\">\n                <scrm-button-group *ngIf=\"quickFilters.config$\" [config$]=\"quickFilters.config$\" [klass]=\"'quick-filter-button'\"></scrm-button-group>\n            </div>\n        </div>\n    </ng-container>\n    <div class=\"text-nowrap\">\n        <scrm-button-group *ngIf=\"config$\" [config$]=\"config$\" klass=\"d-flex align-items-center\"></scrm-button-group>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.NgbModal }, { type: i3.ScreenSizeObserverService }, { type: i4.SystemConfigStore }, { type: i5.QuickFiltersService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9jb21wb25lbnRzL3NldHRpbmdzLW1lbnUvc2V0dGluZ3MtbWVudS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9jb21wb25lbnRzL3NldHRpbmdzLW1lbnUvc2V0dGluZ3MtbWVudS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQU9ILE1BQU0sRUFHVCxNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxpQkFBaUIsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDdEYsT0FBTyxFQUNILFVBQVUsRUFDVix5QkFBeUIsRUFDNUIsTUFBTSwyRUFBMkUsQ0FBQztBQUVuRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7Ozs7SUNaekQsd0NBQXFJOzs7SUFBckYscURBQWdDLGdDQUFBOzs7SUFOeEYsOEJBQ3lDLGFBQUE7SUFFakMsZ0NBQXNEO0lBQzFELGlCQUFNO0lBQ04sOEJBQW1EO0lBQy9DLHVIQUFxSTtJQUN6SSxpQkFBTSxFQUFBOzs7SUFEa0IsZUFBMEI7SUFBMUIsa0RBQTBCOzs7SUFQMUQsNkJBQTJEO0lB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LEtBQUssRUFBRTtnQkFDSCxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0I7YUFDNUM7WUFDRCxJQUFJLEVBQUUsS0FBSztZQUNYLE9BQU8sRUFBRSxHQUFTLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDO1lBQzNFLENBQUM7U0FDSixDQUFDO0lBQ04sQ0FBQztzRkE5U1EscUJBQXFCO29FQUFyQixxQkFBcUI7WUMxQmxDLDhCQUFpRTtZQUM3RCx3RkFVZTs7WUFDZiw4QkFBeUI7WUFDckIsa0dBQTZHO1lBQ2pILGlCQUFNLEVBQUE7O1lBYlMsZUFBcUM7WUFBckMscUVBQXFDO1lBWTVCLGVBQWE7WUFBYixrQ0FBYTs7O1NEYTVCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBSmpDLFNBQVM7MkJBQ0ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBCdXR0b25Hcm91cEludGVyZmFjZSxcbiAgICBCdXR0b25JbnRlcmZhY2UsXG4gICAgRHJvcGRvd25CdXR0b25JbnRlcmZhY2UsXG4gICAgRHJvcGRvd25CdXR0b25TZWN0aW9uLFxuICAgIERyb3Bkb3duQnV0dG9uU2VjdGlvbk1hcCxcbiAgICBHcm91cGVkQnV0dG9uSW50ZXJmYWNlLFxuICAgIGlzVHJ1ZSxcbiAgICBTZWFyY2hDcml0ZXJpYSxcbiAgICBTZWFyY2hDcml0ZXJpYUZpbHRlclxufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtOZ2JNb2RhbH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3RXaXRoLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtMaXN0Vmlld1N0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9saXN0LXZpZXcvbGlzdC12aWV3LnN0b3JlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge1xuICAgIFNjcmVlblNpemUsXG4gICAgU2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZVxufSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy91aS9zY3JlZW4tc2l6ZS1vYnNlcnZlci9zY3JlZW4tc2l6ZS1vYnNlcnZlci5zZXJ2aWNlJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXIsIFNhdmVkRmlsdGVyTWFwfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQge1F1aWNrRmlsdGVyc1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9xdWljay1maWx0ZXJzLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXNldHRpbmdzLW1lbnUnLFxuICAgIHRlbXBsYXRlVXJsOiAnc2V0dGluZ3MtbWVudS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGNvbmZpZ1N0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxCdXR0b25Hcm91cEludGVyZmFjZT4oe2J1dHRvbnM6IFtdfSk7XG4gICAgY29uZmlnJCA9IHRoaXMuY29uZmlnU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gICAgc2hvd1F1aWNrRmlsdGVycyA9IHRydWU7XG4gICAgZW5hYmxlUXVpY2tGaWx0ZXJzID0gZmFsc2U7XG5cbiAgICBwcm90ZWN0ZWQgc2NyZWVuOiBTY3JlZW5TaXplID0gU2NyZWVuU2l6ZS5NZWRpdW07XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRCcmVha3BvaW50ID0gNTtcbiAgICBwcm90ZWN0ZWQgYnJlYWtwb2ludDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsaXN0U3RvcmU6IExpc3RWaWV3U3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxuICAgICAgICBwcm90ZWN0ZWQgc2NyZWVuU2l6ZTogU2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHVibGljIHF1aWNrRmlsdGVyczogUXVpY2tGaWx0ZXJzU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbmZpZ1N0YXRlLm5leHQodGhpcy5nZXRCdXR0b25Hcm91cENvbmZpZygpKTtcblxuICAgICAgICBjb25zdCB2bSQgPSB0aGlzLmxpc3RTdG9yZS53aWRnZXRzJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgoXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0U3RvcmUuZGlzcGxheUZpbHRlcnMkLFxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFN0b3JlLmNyaXRlcmlhJCxcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlblNpemUuc2NyZWVuU2l6ZSQsXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0U3RvcmUuc2hvd1NpZGViYXJXaWRnZXRzJCxcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RTdG9yZS5maWx0ZXJMaXN0LnJlY29yZHMkXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godm0kLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RmlsdGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyaXRlcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTaWRlYmFyV2lkZ2V0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkRmlsdGVyc1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JlZW5TaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcmVlbiA9IHNjcmVlblNpemU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWdTdGF0ZS5uZXh0KHRoaXMuZ2V0QnV0dG9uR3JvdXBDb25maWcoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVpY2tGaWx0ZXJzLmluaXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5xdWlja0ZpbHRlcnMuYnJlYWtkb3duJC5zdWJzY3JpYmUoYnJlYWtkb3duID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1F1aWNrRmlsdGVycyA9ICFpc1RydWUoYnJlYWtkb3duKTtcbiAgICAgICAgfSkpXG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5xdWlja0ZpbHRlcnMuZW5hYmxlZCQuc3Vic2NyaWJlKGVuYWJsZWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVRdWlja0ZpbHRlcnMgPSBpc1RydWUoZW5hYmxlZCA/PyBmYWxzZSk7XG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIGdldEJ1dHRvbkdyb3VwQ29uZmlnKCk6IEJ1dHRvbkdyb3VwSW50ZXJmYWNlIHtcblxuICAgICAgICBjb25zdCBhdmFpbGFibGVCdXR0b25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNob3c6ICgpOiBib29sZWFuID0+IHRoaXMuY2hlY2tGaWx0ZXJzRGlzcGxheSgpLFxuICAgICAgICAgICAgICAgIGJ1dHRvbjogdGhpcy5nZXRNeUZpbHRlcnNCdXR0b24oKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2hvdzogKCk6IGJvb2xlYW4gPT4gdHJ1ZSxcbiAgICAgICAgICAgICAgICBidXR0b246IHRoaXMuZ2V0RmlsdGVyQnV0dG9uKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2hvdzogKCk6IGJvb2xlYW4gPT4gdGhpcy5saXN0U3RvcmUud2lkZ2V0cyxcbiAgICAgICAgICAgICAgICBidXR0b246IHRoaXMuZ2V0SW5zaWdodHNCdXR0b24oKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgYnV0dG9uS2xhc3M6IFsnc2V0dGluZ3MtYnV0dG9uJ10sXG4gICAgICAgICAgICBkcm9wZG93bkxhYmVsOiB0aGlzLmxpc3RTdG9yZS5hcHBTdHJpbmdzLkxCTF9PUFRJT05TIHx8ICcnLFxuICAgICAgICAgICAgYnJlYWtwb2ludDogdGhpcy5nZXRCcmVha3BvaW50KCksXG4gICAgICAgICAgICBkcm9wZG93bk9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFsnYm90dG9tLXJpZ2h0J10sXG4gICAgICAgICAgICAgICAgd3JhcHBlcktsYXNzOiBbJ2Ryb3Bkb3duLWJ1dHRvbi1zZWNvbmRhcnknXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtdXG4gICAgICAgIH0gYXMgQnV0dG9uR3JvdXBJbnRlcmZhY2U7XG5cbiAgICAgICAgYXZhaWxhYmxlQnV0dG9ucy5mb3JFYWNoKGF2YWlsYWJsZUJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBpZiAoIWF2YWlsYWJsZUJ1dHRvbi5zaG93KSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLmJ1dHRvbnMucHVzaChhdmFpbGFibGVCdXR0b24uYnV0dG9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVCdXR0b24uc2hvdygpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLmJ1dHRvbnMucHVzaChhdmFpbGFibGVCdXR0b24uYnV0dG9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgY2hlY2tGaWx0ZXJzRGlzcGxheSgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMubGlzdFN0b3JlLmZpbHRlckxpc3QuZ2V0RmlsdGVycygpID8/IFtdO1xuICAgICAgICBjb25zdCBxdWlja0ZpbHRlckJyZWFrcG9pbnQgPSB0aGlzLnF1aWNrRmlsdGVycy5nZXRCcmVha3BvaW50KCk7XG4gICAgICAgIGNvbnN0IHRvdGFsRmlsdGVycyA9IGZpbHRlcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCB0b3RhbFF1aWNrRmlsdGVycyA9IGZpbHRlcnMuZmlsdGVyKG9iaiA9PiBvYmouYXR0cmlidXRlcy5xdWlja19maWx0ZXIpLmxlbmd0aDtcblxuICAgICAgICBpZiAodG90YWxGaWx0ZXJzID4gMCAmJiAodG90YWxRdWlja0ZpbHRlcnMgPiBxdWlja0ZpbHRlckJyZWFrcG9pbnQgfHwgKHRvdGFsRmlsdGVycyAtIHRvdGFsUXVpY2tGaWx0ZXJzKSA+IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0RmlsdGVycygpOiBTZWFyY2hDcml0ZXJpYUZpbHRlciB7XG4gICAgICAgIHJldHVybiB0aGlzPy5saXN0U3RvcmU/LnJlY29yZExpc3Q/LmNyaXRlcmlhPy5maWx0ZXJzID8/IHt9O1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRDcml0ZXJpYSgpOiBTZWFyY2hDcml0ZXJpYSB7XG4gICAgICAgIHJldHVybiB0aGlzPy5saXN0U3RvcmU/LnJlY29yZExpc3Q/LmNyaXRlcmlhID8/IHt9O1xuICAgIH1cblxuICAgIGhhc0FjdGl2ZUZpbHRlcigpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgYWN0aXZlRmlsdGVycyA9IHRoaXMubGlzdFN0b3JlLmFjdGl2ZUZpbHRlcnM7XG4gICAgICAgIGlmICghYWN0aXZlRmlsdGVycykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsdGVyS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZUZpbHRlcnMpID8/IFtdO1xuICAgICAgICBpZiAoIWZpbHRlcktleXMgfHwgIWZpbHRlcktleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlsdGVyS2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRGaWx0ZXIgPSBhY3RpdmVGaWx0ZXJzW2ZpbHRlcktleXNbMF1dO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50RmlsdGVyLmtleSAmJiBjdXJyZW50RmlsdGVyLmtleSAhPT0gJycgJiYgY3VycmVudEZpbHRlci5rZXkgIT09ICdkZWZhdWx0J1xuICAgIH1cblxuICAgIGFyZUFsbEN1cnJlbnRDcml0ZXJpYUZpbHRlckVtcHR5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRGaWx0ZXJzKCkgPz8ge30pLmV2ZXJ5KGtleSA9PiB0aGlzLmdldEZpbHRlcnMoKVtrZXldLm9wZXJhdG9yID09PSAnJylcbiAgICB9XG5cbiAgICBpc0FueUZpbHRlckFwcGxpZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0FjdGl2ZUZpbHRlcigpIHx8ICF0aGlzLmFyZUFsbEN1cnJlbnRDcml0ZXJpYUZpbHRlckVtcHR5KCk7XG4gICAgfVxuXG4gICAgZ2V0QnJlYWtwb2ludCgpOiBudW1iZXIge1xuXG4gICAgICAgIGNvbnN0IGJyZWFrcG9pbnRNYXAgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldENvbmZpZ1ZhbHVlKCdsaXN0dmlld19zZXR0aW5nc19saW1pdHMnKTtcblxuICAgICAgICBpZiAodGhpcy5zY3JlZW4gJiYgYnJlYWtwb2ludE1hcCAmJiBicmVha3BvaW50TWFwW3RoaXMuc2NyZWVuXSkge1xuICAgICAgICAgICAgdGhpcy5icmVha3BvaW50ID0gYnJlYWtwb2ludE1hcFt0aGlzLnNjcmVlbl07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5icmVha3BvaW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRCcmVha3BvaW50O1xuICAgIH1cblxuXG4gICAgZ2V0RmlsdGVyQnV0dG9uKCk6IERyb3Bkb3duQnV0dG9uSW50ZXJmYWNlIHtcblxuICAgICAgICBjb25zdCBncm91cGVkRmlsdGVyQnV0dG9uID0ge1xuICAgICAgICAgICAgdHlwZTogJ2dyb3VwZWQnLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgIH0gYXMgR3JvdXBlZEJ1dHRvbkludGVyZmFjZTtcblxuICAgICAgICBjb25zdCBmaWx0ZXJCdXR0b24gPSB7XG4gICAgICAgICAgICBsYWJlbDogdGhpcy5saXN0U3RvcmUuYXBwU3RyaW5ncy5MQkxfRklMVEVSIHx8ICcnLFxuICAgICAgICAgICAga2xhc3M6IHtcbiAgICAgICAgICAgICAgICAnZmlsdGVyLXNldHRpbmdzLWJ1dHRvbic6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2J0biBidG4tc20gc2V0dGluZ3MtYnV0dG9uJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHRoaXMuaXNBbnlGaWx0ZXJBcHBsaWVkKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0U3RvcmUuc2hvd0ZpbHRlcnMgPSAhdGhpcy5saXN0U3RvcmUuc2hvd0ZpbHRlcnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQW55RmlsdGVyQXBwbGllZCgpKSB7XG4gICAgICAgICAgICBmaWx0ZXJCdXR0b24uaWNvbiA9ICdmaWx0ZXInO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JvdXBlZEZpbHRlckJ1dHRvbi5pdGVtcy5wdXNoKGZpbHRlckJ1dHRvbik7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNBbnlGaWx0ZXJBcHBsaWVkKCkpIHtcbiAgICAgICAgICAgIGdyb3VwZWRGaWx0ZXJCdXR0b24uaXRlbXMucHVzaCh0aGlzLmdldENsZWFyQnV0dG9uKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdyb3VwZWRGaWx0ZXJCdXR0b247XG4gICAgfVxuXG4gICAgZ2V0TXlGaWx0ZXJzQnV0dG9uKCk6IERyb3Bkb3duQnV0dG9uSW50ZXJmYWNlIHtcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMubGlzdFN0b3JlLmZpbHRlckxpc3QuZ2V0RmlsdGVycygpO1xuXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duQ29uZmlnID0ge1xuICAgICAgICAgICAgbGFiZWw6IHRoaXMubGlzdFN0b3JlLmFwcFN0cmluZ3MuTEJMX1NBVkVEX0ZJTFRFUl9TSE9SVENVVCB8fCAnJyxcbiAgICAgICAgICAgIGtsYXNzOiBbJ2Ryb3Bkb3duLXRvZ2dsZSddLFxuICAgICAgICAgICAgd3JhcHBlcktsYXNzOiBbJ2ZpbHRlci1hY3Rpb24tZ3JvdXAnXSxcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgIHNlY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgJ3F1aWNrLWZpbHRlcnMnOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX1FVSUNLX0ZJTFRFUlMnXG4gICAgICAgICAgICAgICAgfSBhcyBEcm9wZG93bkJ1dHRvblNlY3Rpb24sXG4gICAgICAgICAgICAgICAgJ2RlZmF1bHQnOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX1NBVkVEX0ZJTFRFUl9TSE9SVENVVCdcbiAgICAgICAgICAgICAgICB9IGFzIERyb3Bkb3duQnV0dG9uU2VjdGlvbixcbiAgICAgICAgICAgIH0gYXMgRHJvcGRvd25CdXR0b25TZWN0aW9uTWFwXG4gICAgICAgIH0gYXMgRHJvcGRvd25CdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlRmlsdGVycyA9IHRoaXMubGlzdFN0b3JlLmFjdGl2ZUZpbHRlcnM7XG5cbiAgICAgICAgbGV0IGFueUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgcXVpY2tGaWx0ZXJDb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IHF1aWNrRmlsdGVyQnJlYWtwb2ludCA9IHRoaXMucXVpY2tGaWx0ZXJzLmdldEJyZWFrcG9pbnQoKTtcbiAgICAgICAgY29uc3QgaXNRdWlja0ZpbHRlcnNFbmFibGVkID0gdGhpcy5xdWlja0ZpbHRlcnMuYXJlQ29uZmlnRW5hYmxlZCgpO1xuICAgICAgICBmaWx0ZXJzLmZvckVhY2goKGZpbHRlcjogU2F2ZWRGaWx0ZXIpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgaXNRdWlja0ZpbHRlckJ1dHRvbiA9IGlzVHJ1ZShmaWx0ZXI/LmF0dHJpYnV0ZXM/LnF1aWNrX2ZpbHRlciA/PyBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoaXNRdWlja0ZpbHRlcnNFbmFibGVkICYmIGlzUXVpY2tGaWx0ZXJCdXR0b24gJiYgcXVpY2tGaWx0ZXJDb3VudCA8IHF1aWNrRmlsdGVyQnJlYWtwb2ludCkge1xuICAgICAgICAgICAgICAgIHF1aWNrRmlsdGVyQ291bnQrKztcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gT2JqZWN0LmtleXMoYWN0aXZlRmlsdGVycykuc29tZShrZXkgPT4ga2V5ID09PSBmaWx0ZXIua2V5KTtcbiAgICAgICAgICAgIGFueUFjdGl2ZSA9IGFueUFjdGl2ZSB8fCBpc0FjdGl2ZTtcblxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0ge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBmaWx0ZXIuYXR0cmlidXRlcy5uYW1lLFxuICAgICAgICAgICAgICAgIHNlY3Rpb246IGlzUXVpY2tGaWx0ZXJCdXR0b24gPyAncXVpY2stZmlsdGVycycgOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RTdG9yZS5zaG93RmlsdGVycyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0U3RvcmUucmVzZXRGaWx0ZXJzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFN0b3JlLnNldE9wZW5GaWx0ZXIoZmlsdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVycyA9IHt9IGFzIFNhdmVkRmlsdGVyTWFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWx0ZXJzW2ZpbHRlci5rZXldID0gZmlsdGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0U3RvcmUuc2V0RmlsdGVycyhzZWxlY3RlZEZpbHRlcnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuXG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uaWNvbiA9ICdmaWx0ZXInO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5pY29uS2xhc3MgPSAnc21hbGwnO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5rbGFzcyA9IFsnYWN0aXZlJ107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyb3Bkb3duQ29uZmlnLml0ZW1zLnB1c2goYnV0dG9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGFueUFjdGl2ZSkge1xuICAgICAgICAgICAgZHJvcGRvd25Db25maWcua2xhc3MgPSBbJ2Ryb3Bkb3duLXRvZ2dsZScsICdhY3RpdmUnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkcm9wZG93bkNvbmZpZztcbiAgICB9XG5cbiAgICBnZXRDbGVhckJ1dHRvbigpOiBCdXR0b25JbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6ICd4JyxcbiAgICAgICAgICAgIHRpdGxlS2V5OiAnTEJMX0NMRUFSX0ZJTFRFUicsXG4gICAgICAgICAgICBrbGFzczoge1xuICAgICAgICAgICAgICAgICdidG4gYnRuLXNtIHNldHRpbmdzLWJ1dHRvbiBjbGVhci1maWx0ZXItYnV0dG9uIGJ0bi1tYWluLWxpZ2h0JzogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RTdG9yZS5zaG93RmlsdGVycyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFN0b3JlLnJlc2V0RmlsdGVycygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldEluc2lnaHRzQnV0dG9uKCk6IEJ1dHRvbkludGVyZmFjZSB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLmxpc3RTdG9yZS5hcHBTdHJpbmdzLkxCTF9JTlNJR0hUUyB8fCAnJyxcbiAgICAgICAgICAgIGtsYXNzOiB7XG4gICAgICAgICAgICAgICAgYWN0aXZlOiB0aGlzLmxpc3RTdG9yZS5zaG93U2lkZWJhcldpZGdldHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiAncGllJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RTdG9yZS5zaG93U2lkZWJhcldpZGdldHMgPSAhdGhpcy5saXN0U3RvcmUuc2hvd1NpZGViYXJXaWRnZXRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgY2xhc3M9XCJsaXN0LXZpZXctc2V0dGluZ3Mgdy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKHF1aWNrRmlsdGVycy5jb25maWckIHwgYXN5bmMpIGFzIHZtXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJzaG93UXVpY2tGaWx0ZXJzICYmIGVuYWJsZVF1aWNrRmlsdGVyc1wiXG4gICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LW5vd3JhcCB0ZXh0LW11dGVkIGZzLTcwIHBsLTEgbXItMlwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX1FVSUNLX0ZJTFRFUlNcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxdWljay1maWx0ZXItYm9yZGVyIHByLXh4bC0xIG1yLXh4bC0xXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tYnV0dG9uLWdyb3VwICpuZ0lmPVwicXVpY2tGaWx0ZXJzLmNvbmZpZyRcIiBbY29uZmlnJF09XCJxdWlja0ZpbHRlcnMuY29uZmlnJFwiIFtrbGFzc109XCIncXVpY2stZmlsdGVyLWJ1dHRvbidcIj48L3Njcm0tYnV0dG9uLWdyb3VwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LW5vd3JhcFwiPlxuICAgICAgICA8c2NybS1idXR0b24tZ3JvdXAgKm5nSWY9XCJjb25maWckXCIgW2NvbmZpZyRdPVwiY29uZmlnJFwiIGtsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPjwvc2NybS1idXR0b24tZ3JvdXA+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==