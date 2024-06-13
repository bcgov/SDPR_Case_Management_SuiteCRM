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
import { Component, ViewChild } from '@angular/core';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { BaseMultiEnumComponent } from '../../../base/base-multienum.component';
import { LanguageStore } from '../../../../store/language/language.store';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import { ScreenSizeObserverService } from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import { take } from "rxjs/operators";
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { PrimeNGConfig } from "primeng/api";
import { MultiSelect } from "primeng/multiselect";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../services/formatters/data-type.formatter.service";
import * as i3 from "../../../field-logic/field-logic.manager";
import * as i4 from "../../../field-logic-display/field-logic-display.manager";
import * as i5 from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i6 from "../../../../store/system-config/system-config.store";
import * as i7 from "primeng/api";
import * as i8 from "@angular/forms";
import * as i9 from "primeng/multiselect";
import * as i10 from "../../../../components/image/image.component";
const _c0 = ["multiSelect"];
function MultiEnumEditFieldComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 6);
} }
function MultiEnumEditFieldComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 7);
} }
function MultiEnumEditFieldComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 8);
} }
class MultiEnumEditFieldComponent extends BaseMultiEnumComponent {
    constructor(languages, typeFormatter, logic, logicDisplay, screenSize, systemConfigStore, primengConfig) {
        super(languages, typeFormatter, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.screenSize = screenSize;
        this.systemConfigStore = systemConfigStore;
        this.primengConfig = primengConfig;
        this.placeholderLabel = '';
        this.selectedItemsLabel = '';
        this.emptyFilterLabel = '';
        this.maxSelectedLabels = 20;
        this.selectAll = false;
        this.filteredOptions = [];
        this.filteredWord = '';
    }
    ngOnInit() {
        this.checkAndInitAsDynamicEnum();
        this.getTranslatedLabels();
        super.ngOnInit();
        const maxSelectedLabelsForDisplay = this.systemConfigStore.getUi('multiselect_max_number');
        this.screenSize.screenSize$
            .pipe(take(1))
            .subscribe((screenSize) => {
            this.maxSelectedLabels = maxSelectedLabelsForDisplay[screenSize] || this.maxSelectedLabels;
        });
        this.primengConfig.ripple = true;
        this.clearButton = {
            klass: ['btn', 'btn-sm', 'btn-outline-secondary', 'm-0', 'border-0'],
            onClick: (event) => {
                this.onRemove();
            },
            icon: 'cross'
        };
    }
    onAdd() {
        const value = this.selectedValues.map(option => option.value);
        this.field.valueList = value;
        this.field.formControl.setValue(value);
        this.field.formControl.markAsDirty();
        this.calculateSelectAll();
    }
    onSelectAll(event) {
        this.selectAll = event.checked;
        if (this.selectAll) {
            if (this.multiSelect.visibleOptions() && this.multiSelect.visibleOptions().length) {
                this.selectedValues = this.multiSelect.visibleOptions();
            }
            else {
                this.selectedValues = this.options;
            }
            this.onAdd();
        }
        else {
            this.selectedValues = [];
            this.onRemove();
        }
    }
    onRemove() {
        const value = this.selectedValues.map(option => option.value);
        this.field.valueList = value;
        this.field.formControl.setValue(value);
        this.field.formControl.markAsDirty();
        this.calculateSelectAll();
    }
    onClear() {
        this.selectedValues = [];
        this.multiSelect.filterValue = '';
        this.onRemove();
    }
    onPanelShow() {
        this.multiSelect.filterInputChild.nativeElement.focus();
        this.multiSelect.filterValue = '';
        this.calculateSelectAll();
    }
    onFilter() {
        this.calculateSelectAll();
    }
    getTranslatedLabels() {
        this.placeholderLabel = this.languages.getAppString('LBL_SELECT_ITEM') || '';
        this.selectedItemsLabel = this.languages.getAppString('LBL_ITEMS_SELECTED') || '';
        this.emptyFilterLabel = this.languages.getAppString('ERR_SEARCH_NO_RESULTS') || '';
    }
    calculateSelectAll() {
        const visibleOptions = this?.multiSelect?.visibleOptions() ?? [];
        const selectedValuesKeys = (this?.selectedValues ?? []).map(item => item.value);
        if (!visibleOptions.length || !selectedValuesKeys.length) {
            this.selectAll = false;
            return;
        }
        if (visibleOptions.length > selectedValuesKeys.length) {
            this.selectAll = false;
            return;
        }
        this.selectAll = visibleOptions.every(item => selectedValuesKeys.includes(item.value));
    }
    static { this.ɵfac = function MultiEnumEditFieldComponent_Factory(t) { return new (t || MultiEnumEditFieldComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.FieldLogicManager), i0.ɵɵdirectiveInject(i4.FieldLogicDisplayManager), i0.ɵɵdirectiveInject(i5.ScreenSizeObserverService), i0.ɵɵdirectiveInject(i6.SystemConfigStore), i0.ɵɵdirectiveInject(i7.PrimeNGConfig)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MultiEnumEditFieldComponent, selectors: [["scrm-multienum-edit"]], viewQuery: function MultiEnumEditFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.multiSelect = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 14, consts: [[1, "d-flex", "align-items-center"], [3, "options", "ngModel", "optionLabel", "placeholder", "selectedItemsLabel", "emptyFilterMessage", "maxSelectedLabels", "styleClass", "showToggleAll", "selectAll", "autoOptionFocus", "autofocusFilter", "showClear", "focusOnHover", "ngModelChange", "onChange", "onSelectAllChange", "onRemove", "onPanelShow", "onFilter", "onClear"], ["multiSelect", ""], ["pTemplate", "dropdownicon"], ["pTemplate", "filtericon"], ["pTemplate", "checkicon"], ["image", "down_carret"], ["image", "search"], ["image", "checkbox_cross"]], template: function MultiEnumEditFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "p-multiSelect", 1, 2);
            i0.ɵɵlistener("ngModelChange", function MultiEnumEditFieldComponent_Template_p_multiSelect_ngModelChange_1_listener($event) { return ctx.selectedValues = $event; })("onChange", function MultiEnumEditFieldComponent_Template_p_multiSelect_onChange_1_listener() { return ctx.onAdd(); })("onSelectAllChange", function MultiEnumEditFieldComponent_Template_p_multiSelect_onSelectAllChange_1_listener($event) { return ctx.onSelectAll($event); })("onRemove", function MultiEnumEditFieldComponent_Template_p_multiSelect_onRemove_1_listener() { return ctx.onRemove(); })("onPanelShow", function MultiEnumEditFieldComponent_Template_p_multiSelect_onPanelShow_1_listener() { return ctx.onPanelShow(); })("onFilter", function MultiEnumEditFieldComponent_Template_p_multiSelect_onFilter_1_listener() { return ctx.onFilter(); })("onClear", function MultiEnumEditFieldComponent_Template_p_multiSelect_onClear_1_listener() { return ctx.onClear(); });
            i0.ɵɵtemplate(3, MultiEnumEditFieldComponent_ng_template_3_Template, 1, 0, "ng-template", 3);
            i0.ɵɵtemplate(4, MultiEnumEditFieldComponent_ng_template_4_Template, 1, 0, "ng-template", 4);
            i0.ɵɵtemplate(5, MultiEnumEditFieldComponent_ng_template_5_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("options", ctx.options)("ngModel", ctx.selectedValues)("optionLabel", "label")("placeholder", ctx.placeholderLabel)("selectedItemsLabel", "{0} " + ctx.selectedItemsLabel)("emptyFilterMessage", ctx.emptyFilterLabel)("maxSelectedLabels", ctx.maxSelectedLabels)("styleClass", "w-100 " + ctx.getInvalidClass())("showToggleAll", true)("selectAll", ctx.selectAll)("autoOptionFocus", false)("autofocusFilter", true)("showClear", true)("focusOnHover", true);
        } }, dependencies: [i8.NgControlStatus, i8.NgModel, i9.MultiSelect, i7.PrimeTemplate, i10.ImageComponent], encapsulation: 2 }); }
}
export { MultiEnumEditFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MultiEnumEditFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-multienum-edit', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"d-flex align-items-center\">\n    <p-multiSelect\n        #multiSelect\n        [options]=\"options\"\n        [(ngModel)]=\"selectedValues\"\n        [optionLabel]=\"'label'\"\n        (onChange)=\"onAdd()\"\n        (onSelectAllChange)=\"onSelectAll($event)\"\n        (onRemove)=\"onRemove()\"\n        (onPanelShow)=\"onPanelShow()\"\n        (onFilter)=\"onFilter()\"\n        [placeholder]=\"placeholderLabel\"\n        [selectedItemsLabel]=\"'{0} ' + selectedItemsLabel\"\n        [emptyFilterMessage]=\"emptyFilterLabel\"\n        [maxSelectedLabels]=\"maxSelectedLabels\"\n        [styleClass]=\"'w-100 ' + getInvalidClass()\"\n        [showToggleAll]=\"true\"\n        [selectAll]=\"selectAll\"\n        [autoOptionFocus]=\"false\"\n        [autofocusFilter]=\"true\"\n        [showClear]=\"true\"\n        (onClear)=\"onClear()\"\n        [focusOnHover]=\"true\"\n    >\n        <ng-template pTemplate=\"dropdownicon\">\n            <scrm-image image=\"down_carret\"></scrm-image>\n        </ng-template>\n        <ng-template pTemplate=\"filtericon\">\n            <scrm-image image=\"search\"></scrm-image>\n        </ng-template>\n        <ng-template pTemplate=\"checkicon\">\n            <scrm-image image=\"checkbox_cross\"></scrm-image>\n        </ng-template>\n    </p-multiSelect>\n</div>\n\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.FieldLogicManager }, { type: i4.FieldLogicDisplayManager }, { type: i5.ScreenSizeObserverService }, { type: i6.SystemConfigStore }, { type: i7.PrimeNGConfig }]; }, { multiSelect: [{
            type: ViewChild,
            args: ['multiSelect']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGllbnVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvbXVsdGllbnVtL3RlbXBsYXRlcy9lZGl0L211bHRpZW51bS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL211bHRpZW51bS90ZW1wbGF0ZXMvZWRpdC9tdWx0aWVudW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZEQUE2RCxDQUFDO0FBQzlGLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUNsRyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSwyRUFBMkUsQ0FBQztBQUNwSCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDdEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lDZXBDLGdDQUE2Qzs7O0lBRzdDLGdDQUF3Qzs7O0lBR3hDLGdDQUFnRDs7QURsQjVELE1BS2EsMkJB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QlE7WUFvQjVCLDRGQUVjO1lBQ2QsNEZBRWM7WUFDZCw0RkFFYztZQUNsQixpQkFBZ0IsRUFBQTs7WUE5QlosZUFBbUI7WUFBbkIscUNBQW1CLCtCQUFBLHdCQUFBLHFDQUFBLHVEQUFBLDRDQUFBLDRDQUFBLGdEQUFBLHVCQUFBLDRCQUFBLDBCQUFBLHlCQUFBLG1CQUFBLHNCQUFBOzs7U0RlZCwyQkFBMkI7dUZBQTNCLDJCQUEyQjtjQUx2QyxTQUFTOzJCQUNJLHFCQUFxQjsyUUFLTCxXQUFXO2tCQUFwQyxTQUFTO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtCYXNlTXVsdGlFbnVtQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9iYXNlL2Jhc2UtbXVsdGllbnVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7RmllbGRMb2dpY01hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL2ZpZWxkLWxvZ2ljL2ZpZWxkLWxvZ2ljLm1hbmFnZXInO1xuaW1wb3J0IHtGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL2ZpZWxkLWxvZ2ljLWRpc3BsYXkvZmllbGQtbG9naWMtZGlzcGxheS5tYW5hZ2VyJztcbmltcG9ydCB7U2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3VpL3NjcmVlbi1zaXplLW9ic2VydmVyL3NjcmVlbi1zaXplLW9ic2VydmVyLnNlcnZpY2VcIjtcbmltcG9ydCB7dGFrZX0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlXCI7XG5pbXBvcnQge1ByaW1lTkdDb25maWd9IGZyb20gXCJwcmltZW5nL2FwaVwiO1xuaW1wb3J0IHtCdXR0b25JbnRlcmZhY2V9IGZyb20gXCJjb21tb25cIjtcbmltcG9ydCB7TXVsdGlTZWxlY3R9IGZyb20gXCJwcmltZW5nL211bHRpc2VsZWN0XCI7XG5pbXBvcnQge09wdGlvbn0gZnJvbSBcImNvbW1vblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tbXVsdGllbnVtLWVkaXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tdWx0aWVudW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlFbnVtRWRpdEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQmFzZU11bHRpRW51bUNvbXBvbmVudCB7XG4gICAgQFZpZXdDaGlsZCgnbXVsdGlTZWxlY3QnKSBtdWx0aVNlbGVjdDogTXVsdGlTZWxlY3Q7XG5cbiAgICBwbGFjZWhvbGRlckxhYmVsOiBzdHJpbmcgPSAnJztcbiAgICBzZWxlY3RlZEl0ZW1zTGFiZWw6IHN0cmluZyA9ICcnO1xuICAgIGVtcHR5RmlsdGVyTGFiZWw6IHN0cmluZyA9ICcnO1xuICAgIG1heFNlbGVjdGVkTGFiZWxzOiBudW1iZXIgPSAyMDtcbiAgICBzZWxlY3RBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBmaWx0ZXJlZE9wdGlvbnM6IE9wdGlvbltdID0gW107XG4gICAgZmlsdGVyZWRXb3JkOiBzdHJpbmc9ICcnO1xuICAgIGNsZWFyQnV0dG9uOiBCdXR0b25JbnRlcmZhY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlczogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcml2YXRlIHByaW1lbmdDb25maWc6IFByaW1lTkdDb25maWdcbiAgICApIHtcbiAgICAgICAgc3VwZXIobGFuZ3VhZ2VzLCB0eXBlRm9ybWF0dGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja0FuZEluaXRBc0R5bmFtaWNFbnVtKCk7XG4gICAgICAgIHRoaXMuZ2V0VHJhbnNsYXRlZExhYmVscygpO1xuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgICAgICBjb25zdCBtYXhTZWxlY3RlZExhYmVsc0ZvckRpc3BsYXkgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldFVpKCdtdWx0aXNlbGVjdF9tYXhfbnVtYmVyJyk7XG4gICAgICAgIHRoaXMuc2NyZWVuU2l6ZS5zY3JlZW5TaXplJFxuICAgICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHNjcmVlblNpemU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWF4U2VsZWN0ZWRMYWJlbHMgPSBtYXhTZWxlY3RlZExhYmVsc0ZvckRpc3BsYXlbc2NyZWVuU2l6ZV0gfHwgdGhpcy5tYXhTZWxlY3RlZExhYmVscztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJpbWVuZ0NvbmZpZy5yaXBwbGUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuY2xlYXJCdXR0b24gPSB7XG4gICAgICAgICAgICBrbGFzczogWydidG4nLCAnYnRuLXNtJywgJ2J0bi1vdXRsaW5lLXNlY29uZGFyeScsICdtLTAnLCAnYm9yZGVyLTAnXSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IChldmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25SZW1vdmUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiAnY3Jvc3MnXG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkFkZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWVzLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZUxpc3QgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcblxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNlbGVjdEFsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblNlbGVjdEFsbChldmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdEFsbCA9IGV2ZW50LmNoZWNrZWQ7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubXVsdGlTZWxlY3QudmlzaWJsZU9wdGlvbnMoKSAmJiB0aGlzLm11bHRpU2VsZWN0LnZpc2libGVPcHRpb25zKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IHRoaXMubXVsdGlTZWxlY3QudmlzaWJsZU9wdGlvbnMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub25BZGQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMub25SZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblJlbW92ZSgpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZXMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlTGlzdCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2VsZWN0QWxsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5tdWx0aVNlbGVjdC5maWx0ZXJWYWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLm9uUmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgb25QYW5lbFNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMubXVsdGlTZWxlY3QuZmlsdGVySW5wdXRDaGlsZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIHRoaXMubXVsdGlTZWxlY3QuZmlsdGVyVmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTZWxlY3RBbGwoKTtcbiAgICB9XG5cbiAgICBvbkZpbHRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTZWxlY3RBbGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VHJhbnNsYXRlZExhYmVscygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlckxhYmVsID0gdGhpcy5sYW5ndWFnZXMuZ2V0QXBwU3RyaW5nKCdMQkxfU0VMRUNUX0lURU0nKSB8fCAnJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zTGFiZWwgPSB0aGlzLmxhbmd1YWdlcy5nZXRBcHBTdHJpbmcoJ0xCTF9JVEVNU19TRUxFQ1RFRCcpIHx8ICcnO1xuICAgICAgICB0aGlzLmVtcHR5RmlsdGVyTGFiZWwgPSB0aGlzLmxhbmd1YWdlcy5nZXRBcHBTdHJpbmcoJ0VSUl9TRUFSQ0hfTk9fUkVTVUxUUycpIHx8ICcnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYWxjdWxhdGVTZWxlY3RBbGwoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHZpc2libGVPcHRpb25zID0gdGhpcz8ubXVsdGlTZWxlY3Q/LnZpc2libGVPcHRpb25zKCkgPz8gW107XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzS2V5cyA9ICh0aGlzPy5zZWxlY3RlZFZhbHVlcyA/PyBbXSkubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSk7XG5cbiAgICAgICAgaWYgKCF2aXNpYmxlT3B0aW9ucy5sZW5ndGggfHwgIXNlbGVjdGVkVmFsdWVzS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlzaWJsZU9wdGlvbnMubGVuZ3RoID4gc2VsZWN0ZWRWYWx1ZXNLZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsID0gdmlzaWJsZU9wdGlvbnMuZXZlcnkoaXRlbSA9PiBzZWxlY3RlZFZhbHVlc0tleXMuaW5jbHVkZXMoaXRlbS52YWx1ZSkpO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICA8cC1tdWx0aVNlbGVjdFxuICAgICAgICAjbXVsdGlTZWxlY3RcbiAgICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXG4gICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZXNcIlxuICAgICAgICBbb3B0aW9uTGFiZWxdPVwiJ2xhYmVsJ1wiXG4gICAgICAgIChvbkNoYW5nZSk9XCJvbkFkZCgpXCJcbiAgICAgICAgKG9uU2VsZWN0QWxsQ2hhbmdlKT1cIm9uU2VsZWN0QWxsKCRldmVudClcIlxuICAgICAgICAob25SZW1vdmUpPVwib25SZW1vdmUoKVwiXG4gICAgICAgIChvblBhbmVsU2hvdyk9XCJvblBhbmVsU2hvdygpXCJcbiAgICAgICAgKG9uRmlsdGVyKT1cIm9uRmlsdGVyKClcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJMYWJlbFwiXG4gICAgICAgIFtzZWxlY3RlZEl0ZW1zTGFiZWxdPVwiJ3swfSAnICsgc2VsZWN0ZWRJdGVtc0xhYmVsXCJcbiAgICAgICAgW2VtcHR5RmlsdGVyTWVzc2FnZV09XCJlbXB0eUZpbHRlckxhYmVsXCJcbiAgICAgICAgW21heFNlbGVjdGVkTGFiZWxzXT1cIm1heFNlbGVjdGVkTGFiZWxzXCJcbiAgICAgICAgW3N0eWxlQ2xhc3NdPVwiJ3ctMTAwICcgKyBnZXRJbnZhbGlkQ2xhc3MoKVwiXG4gICAgICAgIFtzaG93VG9nZ2xlQWxsXT1cInRydWVcIlxuICAgICAgICBbc2VsZWN0QWxsXT1cInNlbGVjdEFsbFwiXG4gICAgICAgIFthdXRvT3B0aW9uRm9jdXNdPVwiZmFsc2VcIlxuICAgICAgICBbYXV0b2ZvY3VzRmlsdGVyXT1cInRydWVcIlxuICAgICAgICBbc2hvd0NsZWFyXT1cInRydWVcIlxuICAgICAgICAob25DbGVhcik9XCJvbkNsZWFyKClcIlxuICAgICAgICBbZm9jdXNPbkhvdmVyXT1cInRydWVcIlxuICAgID5cbiAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImRyb3Bkb3duaWNvblwiPlxuICAgICAgICAgICAgPHNjcm0taW1hZ2UgaW1hZ2U9XCJkb3duX2NhcnJldFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImZpbHRlcmljb25cIj5cbiAgICAgICAgICAgIDxzY3JtLWltYWdlIGltYWdlPVwic2VhcmNoXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiY2hlY2tpY29uXCI+XG4gICAgICAgICAgICA8c2NybS1pbWFnZSBpbWFnZT1cImNoZWNrYm94X2Nyb3NzXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvcC1tdWx0aVNlbGVjdD5cbjwvZGl2PlxuXG4iXX0=