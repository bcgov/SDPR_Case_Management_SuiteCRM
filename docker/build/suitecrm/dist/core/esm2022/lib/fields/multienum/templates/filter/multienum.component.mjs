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
import { LanguageStore } from '../../../../store/language/language.store';
import { BaseMultiEnumComponent } from '../../../base/base-multienum.component';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import { take } from "rxjs/operators";
import { ScreenSizeObserverService } from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
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
import * as i9 from "../../../../components/image/image.component";
import * as i10 from "primeng/multiselect";
const _c0 = ["multiSelect"];
function MultiEnumFilterFieldComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 6);
} }
function MultiEnumFilterFieldComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 7);
} }
function MultiEnumFilterFieldComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 8);
} }
class MultiEnumFilterFieldComponent extends BaseMultiEnumComponent {
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
    }
    ngOnInit() {
        this.field.valueList = [];
        if (this.field.criteria.values && this.field.criteria.values.length > 0) {
            this.field.valueList = this.field.criteria.values;
        }
        const maxSelectedLabelsForDisplay = this.systemConfigStore.getUi('multiselect_max_number');
        this.screenSize.screenSize$
            .pipe(take(1))
            .subscribe((screenSize) => {
            this.maxSelectedLabels = maxSelectedLabelsForDisplay[screenSize] || this.maxSelectedLabels;
        });
        this.getTranslatedLabels();
        super.ngOnInit();
        this.primengConfig.ripple = true;
    }
    onAdd() {
        const value = this.selectedValues.map(option => option.value);
        this.field.valueList = value;
        this.field.formControl.setValue(value);
        this.field.formControl.markAsDirty();
        this.field.criteria.operator = '=';
        this.field.criteria.values = value;
        this.calculateSelectAll();
    }
    onRemove() {
        let value = this.selectedValues.map(option => option.value);
        if (!value) {
            value = [];
        }
        this.field.valueList = value;
        this.field.formControl.setValue(value);
        this.field.formControl.markAsDirty();
        this.field.criteria.operator = '=';
        this.field.criteria.values = value;
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
    getPlaceholderLabel() {
        return this.languages.getAppString('LBL_SELECT_ITEM') || '';
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
    getTranslatedLabels() {
        this.placeholderLabel = this.languages.getAppString('LBL_SELECT_ITEM') || '';
        this.selectedItemsLabel = this.languages.getAppString('LBL_ITEMS_SELECTED') || '';
        this.emptyFilterLabel = this.languages.getAppString('ERR_SEARCH_NO_RESULTS') || '';
    }
    addEmptyStringOption() {
        return false;
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
    static { this.ɵfac = function MultiEnumFilterFieldComponent_Factory(t) { return new (t || MultiEnumFilterFieldComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.FieldLogicManager), i0.ɵɵdirectiveInject(i4.FieldLogicDisplayManager), i0.ɵɵdirectiveInject(i5.ScreenSizeObserverService), i0.ɵɵdirectiveInject(i6.SystemConfigStore), i0.ɵɵdirectiveInject(i7.PrimeNGConfig)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MultiEnumFilterFieldComponent, selectors: [["scrm-multienum-filter"]], viewQuery: function MultiEnumFilterFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.multiSelect = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 14, consts: [[1, "d-flex", "align-items-center"], [3, "options", "ngModel", "optionLabel", "placeholder", "selectedItemsLabel", "emptyFilterMessage", "maxSelectedLabels", "styleClass", "showToggleAll", "selectAll", "autoOptionFocus", "autofocusFilter", "showClear", "focusOnHover", "ngModelChange", "onChange", "onSelectAllChange", "onRemove", "onPanelShow", "onFilter", "onClear"], ["multiSelect", ""], ["pTemplate", "dropdownicon"], ["pTemplate", "filtericon"], ["pTemplate", "checkicon"], ["image", "down_carret"], ["image", "search"], ["image", "checkbox_cross"]], template: function MultiEnumFilterFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "p-multiSelect", 1, 2);
            i0.ɵɵlistener("ngModelChange", function MultiEnumFilterFieldComponent_Template_p_multiSelect_ngModelChange_1_listener($event) { return ctx.selectedValues = $event; })("onChange", function MultiEnumFilterFieldComponent_Template_p_multiSelect_onChange_1_listener() { return ctx.onAdd(); })("onSelectAllChange", function MultiEnumFilterFieldComponent_Template_p_multiSelect_onSelectAllChange_1_listener($event) { return ctx.onSelectAll($event); })("onRemove", function MultiEnumFilterFieldComponent_Template_p_multiSelect_onRemove_1_listener() { return ctx.onRemove(); })("onPanelShow", function MultiEnumFilterFieldComponent_Template_p_multiSelect_onPanelShow_1_listener() { return ctx.onPanelShow(); })("onFilter", function MultiEnumFilterFieldComponent_Template_p_multiSelect_onFilter_1_listener() { return ctx.onFilter(); })("onClear", function MultiEnumFilterFieldComponent_Template_p_multiSelect_onClear_1_listener() { return ctx.onClear(); });
            i0.ɵɵtemplate(3, MultiEnumFilterFieldComponent_ng_template_3_Template, 1, 0, "ng-template", 3);
            i0.ɵɵtemplate(4, MultiEnumFilterFieldComponent_ng_template_4_Template, 1, 0, "ng-template", 4);
            i0.ɵɵtemplate(5, MultiEnumFilterFieldComponent_ng_template_5_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("options", ctx.options)("ngModel", ctx.selectedValues)("optionLabel", "label")("placeholder", ctx.placeholderLabel)("selectedItemsLabel", "{0} " + ctx.selectedItemsLabel)("emptyFilterMessage", ctx.emptyFilterLabel)("maxSelectedLabels", ctx.maxSelectedLabels)("styleClass", "w-100 " + ctx.getInvalidClass())("showToggleAll", true)("selectAll", ctx.selectAll)("autoOptionFocus", false)("autofocusFilter", true)("showClear", true)("focusOnHover", true);
        } }, dependencies: [i8.NgControlStatus, i8.NgModel, i9.ImageComponent, i10.MultiSelect, i7.PrimeTemplate], encapsulation: 2 }); }
}
export { MultiEnumFilterFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MultiEnumFilterFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-multienum-filter', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"d-flex align-items-center\">\n    <p-multiSelect\n        #multiSelect\n        [options]=\"options\"\n        [(ngModel)]=\"selectedValues\"\n        [optionLabel]=\"'label'\"\n        (onChange)=\"onAdd()\"\n        (onSelectAllChange)=\"onSelectAll($event)\"\n        (onRemove)=\"onRemove()\"\n        (onPanelShow)=\"onPanelShow()\"\n        (onFilter)=\"onFilter()\"\n        [placeholder]=\"placeholderLabel\"\n        [selectedItemsLabel]=\"'{0} ' + selectedItemsLabel\"\n        [emptyFilterMessage]=\"emptyFilterLabel\"\n        [maxSelectedLabels]=\"maxSelectedLabels\"\n        [styleClass]=\"'w-100 ' + getInvalidClass()\"\n        [showToggleAll]=\"true\"\n        [selectAll]=\"selectAll\"\n        [autoOptionFocus]=\"false\"\n        [autofocusFilter]=\"true\"\n        [showClear]=\"true\"\n        (onClear)=\"onClear()\"\n        [focusOnHover]=\"true\"\n    >\n        <ng-template pTemplate=\"dropdownicon\">\n            <scrm-image image=\"down_carret\"></scrm-image>\n        </ng-template>\n        <ng-template pTemplate=\"filtericon\">\n            <scrm-image image=\"search\"></scrm-image>\n        </ng-template>\n        <ng-template pTemplate=\"checkicon\">\n            <scrm-image image=\"checkbox_cross\"></scrm-image>\n        </ng-template>\n\n    </p-multiSelect>\n</div>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.FieldLogicManager }, { type: i4.FieldLogicDisplayManager }, { type: i5.ScreenSizeObserverService }, { type: i6.SystemConfigStore }, { type: i7.PrimeNGConfig }]; }, { multiSelect: [{
            type: ViewChild,
            args: ['multiSelect']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGllbnVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvbXVsdGllbnVtL3RlbXBsYXRlcy9maWx0ZXIvbXVsdGllbnVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvbXVsdGllbnVtL3RlbXBsYXRlcy9maWx0ZXIvbXVsdGllbnVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFxQixTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDOUYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwQyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSwyRUFBMkUsQ0FBQztBQUNwSCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUN0RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUNnQnBDLGdDQUE2Qzs7O0lBRzdDLGdDQUF3Qzs7O0lBR3hDLGdDQUFnRDs7QURwQjVELE1B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Q0FBQyxNQUFNLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7OEZBbklRLDZCQUE2QjtvRUFBN0IsNkJBQTZCOzs7Ozs7WUNoQjFDLDhCQUF1QywwQkFBQTtZQUkvQixzS0FBNEIsMEdBRWhCLFdBQU8sSUFGUyxrSUFHUCx1QkFBbUIsSUFIWiwwR0FJaEIsY0FBVSxJQUpNLGdIQUtiLGlCQUFhLElBTEEsMEdBTWhCLGNBQVUsSUFOTSx3R0FpQmpCLGFBQVMsSUFqQlE7WUFvQjVCLDhGQUVjO1lBQ2QsOEZBRWM7WUFDZCw4RkFFYztZQUVsQixpQkFBZ0IsRUFBQTs7WUEvQlosZUFBbUI7WUFBbkIscUNBQW1CLCtCQUFBLHdCQUFBLHFDQUFBLHVEQUFBLDRDQUFBLDRDQUFBLGdEQUFBLHVCQUFBLDRCQUFBLDBCQUFBLHlCQUFBLG1CQUFBLHNCQUFBOzs7U0RhZCw2QkFBNkI7dUZBQTdCLDZCQUE2QjtjQUx6QyxTQUFTOzJCQUNJLHVCQUF1QjsyUUFLUCxXQUFXO2tCQUFwQyxTQUFTO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtCYXNlTXVsdGlFbnVtQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9iYXNlL2Jhc2UtbXVsdGllbnVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5pbXBvcnQge3Rha2V9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvdWkvc2NyZWVuLXNpemUtb2JzZXJ2ZXIvc2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZVwiO1xuaW1wb3J0IHtQcmltZU5HQ29uZmlnfSBmcm9tIFwicHJpbWVuZy9hcGlcIjtcbmltcG9ydCB7TXVsdGlTZWxlY3R9IGZyb20gXCJwcmltZW5nL211bHRpc2VsZWN0XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1tdWx0aWVudW0tZmlsdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbXVsdGllbnVtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpRW51bUZpbHRlckZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQmFzZU11bHRpRW51bUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBAVmlld0NoaWxkKCdtdWx0aVNlbGVjdCcpIG11bHRpU2VsZWN0OiBNdWx0aVNlbGVjdDtcblxuICAgIHBsYWNlaG9sZGVyTGFiZWw6IHN0cmluZyA9ICcnO1xuICAgIHNlbGVjdGVkSXRlbXNMYWJlbDogc3RyaW5nID0gJyc7XG4gICAgZW1wdHlGaWx0ZXJMYWJlbDogc3RyaW5nID0gJyc7XG4gICAgbWF4U2VsZWN0ZWRMYWJlbHM6IG51bWJlciA9IDIwO1xuICAgIHNlbGVjdEFsbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZXM6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljOiBGaWVsZExvZ2ljTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljRGlzcGxheTogRmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgc2NyZWVuU2l6ZTogU2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJpdmF0ZSBwcmltZW5nQ29uZmlnOiBQcmltZU5HQ29uZmlnXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGxhbmd1YWdlcywgdHlwZUZvcm1hdHRlciwgbG9naWMsIGxvZ2ljRGlzcGxheSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmllbGQudmFsdWVMaXN0ID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuZmllbGQuY3JpdGVyaWEudmFsdWVzICYmIHRoaXMuZmllbGQuY3JpdGVyaWEudmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQudmFsdWVMaXN0ID0gdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZXM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXhTZWxlY3RlZExhYmVsc0ZvckRpc3BsYXkgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldFVpKCdtdWx0aXNlbGVjdF9tYXhfbnVtYmVyJyk7XG4gICAgICAgIHRoaXMuc2NyZWVuU2l6ZS5zY3JlZW5TaXplJFxuICAgICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHNjcmVlblNpemU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWF4U2VsZWN0ZWRMYWJlbHMgPSBtYXhTZWxlY3RlZExhYmVsc0ZvckRpc3BsYXlbc2NyZWVuU2l6ZV0gfHwgdGhpcy5tYXhTZWxlY3RlZExhYmVscztcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5nZXRUcmFuc2xhdGVkTGFiZWxzKCk7XG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICAgICAgdGhpcy5wcmltZW5nQ29uZmlnLnJpcHBsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQWRkKCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlcy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIHRoaXMuZmllbGQudmFsdWVMaXN0ID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgIHRoaXMuZmllbGQuY3JpdGVyaWEub3BlcmF0b3IgPSAnPSc7XG4gICAgICAgIHRoaXMuZmllbGQuY3JpdGVyaWEudmFsdWVzID0gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTZWxlY3RBbGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25SZW1vdmUoKTogdm9pZCB7XG5cbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlcy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlTGlzdCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICB0aGlzLmZpZWxkLmNyaXRlcmlhLm9wZXJhdG9yID0gJz0nO1xuICAgICAgICB0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlcyA9IHZhbHVlO1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2VsZWN0QWxsKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5tdWx0aVNlbGVjdC5maWx0ZXJWYWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLm9uUmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgb25QYW5lbFNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMubXVsdGlTZWxlY3QuZmlsdGVySW5wdXRDaGlsZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIHRoaXMubXVsdGlTZWxlY3QuZmlsdGVyVmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTZWxlY3RBbGwoKTtcbiAgICB9XG5cbiAgICBvbkZpbHRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVTZWxlY3RBbGwoKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXRQbGFjZWhvbGRlckxhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlcy5nZXRBcHBTdHJpbmcoJ0xCTF9TRUxFQ1RfSVRFTScpIHx8ICcnO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblNlbGVjdEFsbChldmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdEFsbCA9IGV2ZW50LmNoZWNrZWQ7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEFsbCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tdWx0aVNlbGVjdC52aXNpYmxlT3B0aW9ucygpICYmIHRoaXMubXVsdGlTZWxlY3QudmlzaWJsZU9wdGlvbnMoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzID0gdGhpcy5tdWx0aVNlbGVjdC52aXNpYmxlT3B0aW9ucygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzID0gdGhpcy5vcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vbkFkZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5vblJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRyYW5zbGF0ZWRMYWJlbHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJMYWJlbCA9IHRoaXMubGFuZ3VhZ2VzLmdldEFwcFN0cmluZygnTEJMX1NFTEVDVF9JVEVNJykgfHwgJyc7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtc0xhYmVsID0gdGhpcy5sYW5ndWFnZXMuZ2V0QXBwU3RyaW5nKCdMQkxfSVRFTVNfU0VMRUNURUQnKSB8fCAnJztcbiAgICAgICAgdGhpcy5lbXB0eUZpbHRlckxhYmVsID0gdGhpcy5sYW5ndWFnZXMuZ2V0QXBwU3RyaW5nKCdFUlJfU0VBUkNIX05PX1JFU1VMVFMnKSB8fCAnJztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkRW1wdHlTdHJpbmdPcHRpb24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlU2VsZWN0QWxsKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB2aXNpYmxlT3B0aW9ucyA9IHRoaXM/Lm11bHRpU2VsZWN0Py52aXNpYmxlT3B0aW9ucygpID8/IFtdO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlc0tleXMgPSAodGhpcz8uc2VsZWN0ZWRWYWx1ZXMgPz8gW10pLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpO1xuXG4gICAgICAgIGlmICghdmlzaWJsZU9wdGlvbnMubGVuZ3RoIHx8ICFzZWxlY3RlZFZhbHVlc0tleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFsbCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpc2libGVPcHRpb25zLmxlbmd0aCA+IHNlbGVjdGVkVmFsdWVzS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdEFsbCA9IHZpc2libGVPcHRpb25zLmV2ZXJ5KGl0ZW0gPT4gc2VsZWN0ZWRWYWx1ZXNLZXlzLmluY2x1ZGVzKGl0ZW0udmFsdWUpKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgIDxwLW11bHRpU2VsZWN0XG4gICAgICAgICNtdWx0aVNlbGVjdFxuICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhbHVlc1wiXG4gICAgICAgIFtvcHRpb25MYWJlbF09XCInbGFiZWwnXCJcbiAgICAgICAgKG9uQ2hhbmdlKT1cIm9uQWRkKClcIlxuICAgICAgICAob25TZWxlY3RBbGxDaGFuZ2UpPVwib25TZWxlY3RBbGwoJGV2ZW50KVwiXG4gICAgICAgIChvblJlbW92ZSk9XCJvblJlbW92ZSgpXCJcbiAgICAgICAgKG9uUGFuZWxTaG93KT1cIm9uUGFuZWxTaG93KClcIlxuICAgICAgICAob25GaWx0ZXIpPVwib25GaWx0ZXIoKVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlckxhYmVsXCJcbiAgICAgICAgW3NlbGVjdGVkSXRlbXNMYWJlbF09XCInezB9ICcgKyBzZWxlY3RlZEl0ZW1zTGFiZWxcIlxuICAgICAgICBbZW1wdHlGaWx0ZXJNZXNzYWdlXT1cImVtcHR5RmlsdGVyTGFiZWxcIlxuICAgICAgICBbbWF4U2VsZWN0ZWRMYWJlbHNdPVwibWF4U2VsZWN0ZWRMYWJlbHNcIlxuICAgICAgICBbc3R5bGVDbGFzc109XCIndy0xMDAgJyArIGdldEludmFsaWRDbGFzcygpXCJcbiAgICAgICAgW3Nob3dUb2dnbGVBbGxdPVwidHJ1ZVwiXG4gICAgICAgIFtzZWxlY3RBbGxdPVwic2VsZWN0QWxsXCJcbiAgICAgICAgW2F1dG9PcHRpb25Gb2N1c109XCJmYWxzZVwiXG4gICAgICAgIFthdXRvZm9jdXNGaWx0ZXJdPVwidHJ1ZVwiXG4gICAgICAgIFtzaG93Q2xlYXJdPVwidHJ1ZVwiXG4gICAgICAgIChvbkNsZWFyKT1cIm9uQ2xlYXIoKVwiXG4gICAgICAgIFtmb2N1c09uSG92ZXJdPVwidHJ1ZVwiXG4gICAgPlxuICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiZHJvcGRvd25pY29uXCI+XG4gICAgICAgICAgICA8c2NybS1pbWFnZSBpbWFnZT1cImRvd25fY2FycmV0XCI+PC9zY3JtLWltYWdlPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiZmlsdGVyaWNvblwiPlxuICAgICAgICAgICAgPHNjcm0taW1hZ2UgaW1hZ2U9XCJzZWFyY2hcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJjaGVja2ljb25cIj5cbiAgICAgICAgICAgIDxzY3JtLWltYWdlIGltYWdlPVwiY2hlY2tib3hfY3Jvc3NcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8L3AtbXVsdGlTZWxlY3Q+XG48L2Rpdj5cbiJdfQ==