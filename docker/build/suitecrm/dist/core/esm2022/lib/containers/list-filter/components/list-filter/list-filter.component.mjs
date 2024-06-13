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
import { Component, HostListener, Input } from '@angular/core';
import { of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ListFilterStoreFactory } from '../../store/list-filter/list-filter.store.factory';
import { SavedFilterActionAdapterFactory } from '../../adapters/actions.adapter.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../store/list-filter/list-filter.store.factory";
import * as i2 from "../../adapters/actions.adapter.factory";
import * as i3 from "@angular/common";
import * as i4 from "../../../../components/button/button.component";
import * as i5 from "../../../../components/panel/panel.component";
import * as i6 from "../../../../components/field-grid/field-grid.component";
import * as i7 from "../../../../components/dropdown-button/dropdown-button.component";
import * as i8 from "../../../../components/label/label.component";
import * as i9 from "../../../../components/record-grid/record-grid.component";
function ListFilterComponent_scrm_panel_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-dropdown-button", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r2.store.myFilterButton);
} }
function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "input", 14);
    i0.ɵɵelementStart(2, "label", 15);
    i0.ɵɵelement(3, "scrm-label", 16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", item_r8.value);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", item_r8.labelKey);
} }
function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_1_div_1_Template, 4, 2, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.store.special);
} }
function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_2_scrm_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 7);
} if (rf & 2) {
    const button_r10 = ctx.$implicit;
    i0.ɵɵproperty("config", button_r10);
} }
function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_2_scrm_button_1_Template, 1, 1, "scrm-button", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.store.gridButtons);
} }
function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "scrm-field-grid", 8);
    i0.ɵɵlistener("click", function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_Template_scrm_field_grid_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.onFocusSearch()); });
    i0.ɵɵtemplate(1, ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_1_Template, 2, 1, "div", 9);
    i0.ɵɵtemplate(2, ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_2_Template, 2, 1, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("actions", true)("appendActions", false)("fieldMode", ctx_r3.store.mode)("fields", ctx_r3.store.displayFields)("record", vm_r1)("special", ctx_r3.store.special.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.store.special.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.store.gridButtons);
} }
function ListFilterComponent_scrm_panel_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "scrm-record-grid", 19);
    i0.ɵɵlistener("click", function ListFilterComponent_scrm_panel_0_ng_container_4_Template_scrm_record_grid_click_1_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.onFocusSave()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r4.gridConfig);
} }
function ListFilterComponent_scrm_panel_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "scrm-panel", 1);
    i0.ɵɵtemplate(1, ListFilterComponent_scrm_panel_0_div_1_Template, 2, 1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtemplate(3, ListFilterComponent_scrm_panel_0_scrm_field_grid_3_Template, 3, 8, "scrm-field-grid", 4);
    i0.ɵɵtemplate(4, ListFilterComponent_scrm_panel_0_ng_container_4_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("klass", "filter-panel m-0 ", ctx_r0.config && ctx_r0.config.klass || "", "");
    i0.ɵɵproperty("showHeader", ctx_r0.config.displayHeader)("close", ctx_r0.store.closeButton)("isCollapsed$", ctx_r0.store.isCollapsed$)("mode", ctx_r0.store.panelMode)("titleKey", "LBL_BASIC_FILTER");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.store.myFilterButton);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.store.displayFields && ctx_r0.store.displayFields.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.config && ctx_r0.config.savedFilterEdit && ctx_r0.store.filterStore.getMode() !== "detail");
} }
class ListFilterComponent {
    onEnterKey() {
        if (!this.selectedActionButton) {
            return;
        }
        this.selectedActionButton.onClick();
    }
    constructor(storeFactory, actionAdapterFactory) {
        this.storeFactory = storeFactory;
        this.actionAdapterFactory = actionAdapterFactory;
        this.subs = [];
        this.store = storeFactory.create();
        this.filterActionsAdapter = actionAdapterFactory.create(this.store.filterStore, this.store);
    }
    ngOnInit() {
        this.store.init(this.config);
        this.vm$ = this.store.vm$.pipe(map(([savedFilter]) => {
            const record = { ...savedFilter };
            record.fields = savedFilter.criteriaFields;
            return record;
        }));
        this.searchActionButton = this.store.gridButtons.find(button => button.id === "search");
        this.saveActionButton = {
            id: 'save',
            onClick: () => {
                this.filterActionsAdapter.run('save');
            }
        };
        this.gridConfig = {
            record$: this.store.filterStore.stagingRecord$,
            mode$: this.store.filterStore.mode$,
            fields$: this.store.filterStore.getViewFieldsKeys$(),
            actions: this.filterActionsAdapter,
            appendActions: true,
            klass: 'mt-2 p-2 saved-search-container rounded',
            buttonClass: 'btn btn-outline-danger btn-sm',
            labelDisplay: 'inline',
            rowClass: {
                'align-items-start': true,
                'align-items-center': false
            },
            colAlignItems: 'align-items-start',
            maxColumns$: of(4).pipe(shareReplay(1)),
            sizeMap$: of({
                handset: 1,
                tablet: 2,
                web: 4,
                wide: 4
            }).pipe(shareReplay(1))
        };
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.store.clear();
        this.store = null;
    }
    onFocusSearch() {
        this.selectedActionButton = this.searchActionButton;
    }
    onFocusSave() {
        this.selectedActionButton = this.saveActionButton;
    }
    static { this.ɵfac = function ListFilterComponent_Factory(t) { return new (t || ListFilterComponent)(i0.ɵɵdirectiveInject(i1.ListFilterStoreFactory), i0.ɵɵdirectiveInject(i2.SavedFilterActionAdapterFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListFilterComponent, selectors: [["scrm-list-filter"]], hostBindings: function ListFilterComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.enter", function ListFilterComponent_keydown_enter_HostBindingHandler() { return ctx.onEnterKey(); });
        } }, inputs: { config: "config" }, decls: 2, vars: 3, consts: [[3, "showHeader", "close", "isCollapsed$", "mode", "klass", "titleKey", 4, "ngIf"], [3, "showHeader", "close", "isCollapsed$", "mode", "klass", "titleKey"], ["panel-header-button", "", 4, "ngIf"], ["panel-body", "", 1, "p-2", "filter-body"], [3, "actions", "appendActions", "fieldMode", "fields", "record", "special", "click", 4, "ngIf"], [4, "ngIf"], ["panel-header-button", ""], [3, "config"], [3, "actions", "appendActions", "fieldMode", "fields", "record", "special", "click"], ["class", "float-right mt-4", "field-grid-special", "", 4, "ngIf"], ["class", "mt-4 align-self-end", "field-grid-actions", "", 4, "ngIf"], ["field-grid-special", "", 1, "float-right", "mt-4"], ["class", "d-inline-block form-check mb-2 mr-sm-2", 4, "ngFor", "ngForOf"], [1, "d-inline-block", "form-check", "mb-2", "mr-sm-2"], ["type", "checkbox", 1, "form-check-input", 3, "value"], [1, "form-check-label"], [3, "labelKey"], ["field-grid-actions", "", 1, "mt-4", "align-self-end"], [3, "config", 4, "ngFor", "ngForOf"], [3, "config", "click"]], template: function ListFilterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListFilterComponent_scrm_panel_0_Template, 5, 9, "scrm-panel", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.ButtonComponent, i5.PanelComponent, i6.FieldGridComponent, i7.DropdownButtonComponent, i8.LabelComponent, i9.RecordGridComponent, i3.AsyncPipe], encapsulation: 2 }); }
}
export { ListFilterComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListFilterComponent, [{
        type: Component,
        args: [{ selector: 'scrm-list-filter', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-panel *ngIf=\"(vm$ | async) as vm\"\n            [showHeader]=\"config.displayHeader\"\n            [close]=\"store.closeButton\"\n            [isCollapsed$]=\"store.isCollapsed$\"\n            [mode]=\"store.panelMode\"\n            klass=\"filter-panel m-0 {{ (config && config.klass) || ''}}\"\n            [titleKey]=\"'LBL_BASIC_FILTER'\"\n>\n\n    <div *ngIf=\"store.myFilterButton\" panel-header-button>\n        <scrm-dropdown-button [config]=\"store.myFilterButton\"></scrm-dropdown-button>\n    </div>\n\n    <div class=\"p-2 filter-body\" panel-body>\n\n        <scrm-field-grid *ngIf=\"store.displayFields && store.displayFields.length\"\n                         [actions]=\"true\"\n                         [appendActions]=\"false\"\n                         [fieldMode]=\"store.mode\"\n                         [fields]=\"store.displayFields\"\n                         [record]=\"vm\"\n                         [special]=\"store.special.length > 0\"\n                         (click)=\"onFocusSearch()\"\n        >\n\n            <div *ngIf=\"store.special.length > 0\" class=\"float-right mt-4\" field-grid-special>\n\n                <div *ngFor=\"let item of store.special \" class=\"d-inline-block form-check mb-2 mr-sm-2\">\n\n                    <input class=\"form-check-input\" type=\"checkbox\" [value]=\"item.value\">\n\n                    <label class=\"form-check-label\">\n                        <scrm-label [labelKey]=\"item.labelKey\"></scrm-label>\n                    </label>\n\n                </div>\n            </div>\n\n            <div *ngIf=\"store.gridButtons\" class=\"mt-4 align-self-end\" field-grid-actions>\n                <scrm-button *ngFor=\"let button of store.gridButtons\" [config]=\"button\"></scrm-button>\n            </div>\n        </scrm-field-grid>\n\n        <ng-container *ngIf=\"config && config.savedFilterEdit && store.filterStore.getMode() !== 'detail'\">\n            <scrm-record-grid [config]=\"gridConfig\" (click)=\"onFocusSave()\"></scrm-record-grid>\n        </ng-container>\n    </div>\n\n</scrm-panel>\n" }]
    }], function () { return [{ type: i1.ListFilterStoreFactory }, { type: i2.SavedFilterActionAdapterFactory }]; }, { config: [{
            type: Input
        }], onEnterKey: [{
            type: HostListener,
            args: ['keydown.enter']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvbGlzdC1maWx0ZXIvY29tcG9uZW50cy9saXN0LWZpbHRlci9saXN0LWZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9saXN0LWZpbHRlci9jb21wb25lbnRzL2xpc3QtZmlsdGVyL2xpc3QtZmlsdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBRWhGLE9BQU8sRUFBYSxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUdoRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUd6RixPQUFPLEVBQUMsK0JBQStCLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQzs7Ozs7Ozs7Ozs7O0lDQ25GLDhCQUFzRDtJQUNsRCwwQ0FBNkU7SUFDakYsaUJBQU07OztJQURvQixlQUErQjtJQUEvQixvREFBK0I7OztJQWlCN0MsK0JBQXdGO0lBRXBGLDRCQUFxRTtJQUVyRSxpQ0FBZ0M7SUFDNUIsaUNBQW9EO0lBQ3hELGlCQUFRLEVBQUE7OztJQUp3QyxlQUFvQjtJQUFwQixxQ0FBb0I7SUFHcEQsZUFBMEI7SUFBMUIsMkNBQTBCOzs7SUFQbEQsK0JBQWtGO0lBRTlFLDBHQVFNO0lBQ1YsaUJBQU07OztJQVRvQixlQUFnQjtJQUFoQiw4Q0FBZ0I7OztJQVl0QyxpQ0FBc0Y7OztJ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LEtBQUs7WUFhTixVQUFVO2tCQURULFlBQVk7bUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uLCBCdXR0b25JbnRlcmZhY2UsIFJlY29yZCwgU2NyZWVuU2l6ZU1hcH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc2hhcmVSZXBsYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7RmlsdGVyQ29uZmlnfSBmcm9tICcuL2xpc3QtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkR3JpZENvbmZpZ30gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9yZWNvcmQtZ3JpZC9yZWNvcmQtZ3JpZC5tb2RlbCc7XG5pbXBvcnQge0xpc3RGaWx0ZXJTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uL3N0b3JlL2xpc3QtZmlsdGVyL2xpc3QtZmlsdGVyLnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtMaXN0RmlsdGVyU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xpc3QtZmlsdGVyL2xpc3QtZmlsdGVyLnN0b3JlJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXJBY3Rpb25zQWRhcHRlcn0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvYWN0aW9ucy5hZGFwdGVyJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXJBY3Rpb25BZGFwdGVyRmFjdG9yeX0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvYWN0aW9ucy5hZGFwdGVyLmZhY3RvcnknO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tbGlzdC1maWx0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9saXN0LWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGNvbmZpZzogRmlsdGVyQ29uZmlnO1xuXG4gICAgdm0kOiBPYnNlcnZhYmxlPFJlY29yZD47XG4gICAgc3RvcmU6IExpc3RGaWx0ZXJTdG9yZTtcbiAgICBmaWx0ZXJBY3Rpb25zQWRhcHRlcjogU2F2ZWRGaWx0ZXJBY3Rpb25zQWRhcHRlcjtcbiAgICBzZWxlY3RlZEFjdGlvbkJ1dHRvbjpCdXR0b25JbnRlcmZhY2U7XG4gICAgc2VhcmNoQWN0aW9uQnV0dG9uOiBCdXR0b25JbnRlcmZhY2U7XG4gICAgc2F2ZUFjdGlvbkJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlO1xuICAgIGdyaWRDb25maWc6IFJlY29yZEdyaWRDb25maWc7XG5cbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZW50ZXInKVxuICAgIG9uRW50ZXJLZXkoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3RlZEFjdGlvbkJ1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRBY3Rpb25CdXR0b24ub25DbGljaygpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmVGYWN0b3J5OiBMaXN0RmlsdGVyU3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uQWRhcHRlckZhY3Rvcnk6IFNhdmVkRmlsdGVyQWN0aW9uQWRhcHRlckZhY3RvcnlcbiAgICApIHtcbiAgICAgICAgdGhpcy5zdG9yZSA9IHN0b3JlRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5maWx0ZXJBY3Rpb25zQWRhcHRlciA9IGFjdGlvbkFkYXB0ZXJGYWN0b3J5LmNyZWF0ZSh0aGlzLnN0b3JlLmZpbHRlclN0b3JlLCB0aGlzLnN0b3JlKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5pbml0KHRoaXMuY29uZmlnKTtcbiAgICAgICAgdGhpcy52bSQgPSB0aGlzLnN0b3JlLnZtJC5waXBlKG1hcCgoW3NhdmVkRmlsdGVyXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjb3JkID0gey4uLnNhdmVkRmlsdGVyfTtcbiAgICAgICAgICAgIHJlY29yZC5maWVsZHMgPSBzYXZlZEZpbHRlci5jcml0ZXJpYUZpZWxkcztcbiAgICAgICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnNlYXJjaEFjdGlvbkJ1dHRvbiA9IHRoaXMuc3RvcmUuZ3JpZEJ1dHRvbnMuZmluZChidXR0b24gPT4gYnV0dG9uLmlkID09PSBcInNlYXJjaFwiKTtcblxuICAgICAgICB0aGlzLnNhdmVBY3Rpb25CdXR0b24gPSB7XG4gICAgICAgICAgICBpZDogJ3NhdmUnLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQWN0aW9uc0FkYXB0ZXIucnVuKCdzYXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdyaWRDb25maWcgPSB7XG4gICAgICAgICAgICByZWNvcmQkOiB0aGlzLnN0b3JlLmZpbHRlclN0b3JlLnN0YWdpbmdSZWNvcmQkLFxuICAgICAgICAgICAgbW9kZSQ6IHRoaXMuc3RvcmUuZmlsdGVyU3RvcmUubW9kZSQsXG4gICAgICAgICAgICBmaWVsZHMkOiB0aGlzLnN0b3JlLmZpbHRlclN0b3JlLmdldFZpZXdGaWVsZHNLZXlzJCgpLFxuICAgICAgICAgICAgYWN0aW9uczogdGhpcy5maWx0ZXJBY3Rpb25zQWRhcHRlcixcbiAgICAgICAgICAgIGFwcGVuZEFjdGlvbnM6IHRydWUsXG4gICAgICAgICAgICBrbGFzczogJ210LTIgcC0yIHNhdmVkLXNlYXJjaC1jb250YWluZXIgcm91bmRlZCcsXG4gICAgICAgICAgICBidXR0b25DbGFzczogJ2J0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtJyxcbiAgICAgICAgICAgIGxhYmVsRGlzcGxheTogJ2lubGluZScsXG4gICAgICAgICAgICByb3dDbGFzczoge1xuICAgICAgICAgICAgICAgICdhbGlnbi1pdGVtcy1zdGFydCc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2FsaWduLWl0ZW1zLWNlbnRlcic6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sQWxpZ25JdGVtczogJ2FsaWduLWl0ZW1zLXN0YXJ0JyxcbiAgICAgICAgICAgIG1heENvbHVtbnMkOiBvZig0KS5waXBlKHNoYXJlUmVwbGF5KDEpKSxcbiAgICAgICAgICAgIHNpemVNYXAkOiBvZih7XG4gICAgICAgICAgICAgICAgaGFuZHNldDogMSxcbiAgICAgICAgICAgICAgICB0YWJsZXQ6IDIsXG4gICAgICAgICAgICAgICAgd2ViOiA0LFxuICAgICAgICAgICAgICAgIHdpZGU6IDRcbiAgICAgICAgICAgIH0gYXMgU2NyZWVuU2l6ZU1hcCkucGlwZShzaGFyZVJlcGxheSgxKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLnN0b3JlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBudWxsO1xuICAgIH1cblxuICAgIG9uRm9jdXNTZWFyY2goKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRBY3Rpb25CdXR0b24gPSB0aGlzLnNlYXJjaEFjdGlvbkJ1dHRvbjtcbiAgICB9XG5cbiAgICBvbkZvY3VzU2F2ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEFjdGlvbkJ1dHRvbiA9IHRoaXMuc2F2ZUFjdGlvbkJ1dHRvbjtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48c2NybS1wYW5lbCAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIlxuICAgICAgICAgICAgW3Nob3dIZWFkZXJdPVwiY29uZmlnLmRpc3BsYXlIZWFkZXJcIlxuICAgICAgICAgICAgW2Nsb3NlXT1cInN0b3JlLmNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgIFtpc0NvbGxhcHNlZCRdPVwic3RvcmUuaXNDb2xsYXBzZWQkXCJcbiAgICAgICAgICAgIFttb2RlXT1cInN0b3JlLnBhbmVsTW9kZVwiXG4gICAgICAgICAgICBrbGFzcz1cImZpbHRlci1wYW5lbCBtLTAge3sgKGNvbmZpZyAmJiBjb25maWcua2xhc3MpIHx8ICcnfX1cIlxuICAgICAgICAgICAgW3RpdGxlS2V5XT1cIidMQkxfQkFTSUNfRklMVEVSJ1wiXG4+XG5cbiAgICA8ZGl2ICpuZ0lmPVwic3RvcmUubXlGaWx0ZXJCdXR0b25cIiBwYW5lbC1oZWFkZXItYnV0dG9uPlxuICAgICAgICA8c2NybS1kcm9wZG93bi1idXR0b24gW2NvbmZpZ109XCJzdG9yZS5teUZpbHRlckJ1dHRvblwiPjwvc2NybS1kcm9wZG93bi1idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicC0yIGZpbHRlci1ib2R5XCIgcGFuZWwtYm9keT5cblxuICAgICAgICA8c2NybS1maWVsZC1ncmlkICpuZ0lmPVwic3RvcmUuZGlzcGxheUZpZWxkcyAmJiBzdG9yZS5kaXNwbGF5RmllbGRzLmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGlvbnNdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZEFjdGlvbnNdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZE1vZGVdPVwic3RvcmUubW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkc109XCJzdG9yZS5kaXNwbGF5RmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cInZtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbc3BlY2lhbF09XCJzdG9yZS5zcGVjaWFsLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkZvY3VzU2VhcmNoKClcIlxuICAgICAgICA+XG5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzdG9yZS5zcGVjaWFsLmxlbmd0aCA+IDBcIiBjbGFzcz1cImZsb2F0LXJpZ2h0IG10LTRcIiBmaWVsZC1ncmlkLXNwZWNpYWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIHN0b3JlLnNwZWNpYWwgXCIgY2xhc3M9XCJkLWlubGluZS1ibG9jayBmb3JtLWNoZWNrIG1iLTIgbXItc20tMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJpdGVtLmxhYmVsS2V5XCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInN0b3JlLmdyaWRCdXR0b25zXCIgY2xhc3M9XCJtdC00IGFsaWduLXNlbGYtZW5kXCIgZmllbGQtZ3JpZC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgIDxzY3JtLWJ1dHRvbiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIHN0b3JlLmdyaWRCdXR0b25zXCIgW2NvbmZpZ109XCJidXR0b25cIj48L3Njcm0tYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2NybS1maWVsZC1ncmlkPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcgJiYgY29uZmlnLnNhdmVkRmlsdGVyRWRpdCAmJiBzdG9yZS5maWx0ZXJTdG9yZS5nZXRNb2RlKCkgIT09ICdkZXRhaWwnXCI+XG4gICAgICAgICAgICA8c2NybS1yZWNvcmQtZ3JpZCBbY29uZmlnXT1cImdyaWRDb25maWdcIiAoY2xpY2spPVwib25Gb2N1c1NhdmUoKVwiPjwvc2NybS1yZWNvcmQtZ3JpZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG5cbjwvc2NybS1wYW5lbD5cbiJdfQ==