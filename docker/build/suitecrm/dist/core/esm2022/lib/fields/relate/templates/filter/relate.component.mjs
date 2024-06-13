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
import { Component, ElementRef, ViewChild } from '@angular/core';
import { deepClone } from 'common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModuleNameMapper } from '../../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { RecordListModalComponent } from '../../../../containers/record-list-modal/components/record-list-modal/record-list-modal.component';
import { BaseRelateComponent } from '../../../base/base-relate.component';
import { LanguageStore } from '../../../../store/language/language.store';
import { RelateService } from '../../../../services/record/relate/relate.service';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import { map, take } from "rxjs/operators";
import { MultiSelect } from "primeng/multiselect";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../services/formatters/data-type.formatter.service";
import * as i3 from "../../../../services/record/relate/relate.service";
import * as i4 from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i5 from "@ng-bootstrap/ng-bootstrap";
import * as i6 from "../../../field-logic/field-logic.manager";
import * as i7 from "../../../field-logic-display/field-logic-display.manager";
import * as i8 from "@angular/common";
import * as i9 from "@angular/forms";
import * as i10 from "../../../../components/button/button.component";
import * as i11 from "../../../../components/image/image.component";
import * as i12 from "primeng/multiselect";
import * as i13 from "primeng/api";
import * as i14 from "primeng/inputtext";
const _c0 = ["tag"];
const _c1 = ["dropdownFilterInput"];
function RelateFilterFieldComponent_ng_container_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 9);
} }
function RelateFilterFieldComponent_ng_container_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 10);
} }
function RelateFilterFieldComponent_ng_container_1_ng_template_6_scrm_image_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 10);
} }
function RelateFilterFieldComponent_ng_container_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵlistener("click", function RelateFilterFieldComponent_ng_container_1_ng_template_6_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "input", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵlistener("click", function RelateFilterFieldComponent_ng_container_1_ng_template_6_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.onSelectAll()); });
    i0.ɵɵtemplate(4, RelateFilterFieldComponent_ng_container_1_ng_template_6_scrm_image_4_Template, 1, 0, "scrm-image", 15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 16);
    i0.ɵɵlistener("click", function RelateFilterFieldComponent_ng_container_1_ng_template_6_Template_div_click_5_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(6, "input", 17, 18);
    i0.ɵɵlistener("ngModelChange", function RelateFilterFieldComponent_ng_container_1_ng_template_6_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.filterValue = $event); })("keyup", function RelateFilterFieldComponent_ng_container_1_ng_template_6_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.onFilterInput($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 19);
    i0.ɵɵelement(9, "scrm-image", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r4.selectAll);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r4.filterValue);
} }
function RelateFilterFieldComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2)(2, "p-multiSelect", 3, 4);
    i0.ɵɵlistener("ngModelChange", function RelateFilterFieldComponent_ng_container_1_Template_p_multiSelect_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.selectedValues = $event); })("onChange", function RelateFilterFieldComponent_ng_container_1_Template_p_multiSelect_onChange_2_listener() { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.onAdd()); })("onLazyLoad", function RelateFilterFieldComponent_ng_container_1_Template_p_multiSelect_onLazyLoad_2_listener() { i0.ɵɵrestoreView(_r15); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.onFilter()); })("onRemove", function RelateFilterFieldComponent_ng_container_1_Template_p_multiSelect_onRemove_2_listener() { i0.ɵɵrestoreView(_r15); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.onRemove()); })("onPanelShow", function RelateFilterFieldComponent_ng_container_1_Template_p_multiSelect_onPanelShow_2_listener() { i0.ɵɵrestoreView(_r15); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.onPanelShow()); })("onPanelHide", function RelateFilterFieldComponent_ng_container_1_Template_p_multiSelect_onPanelHide_2_listener() { i0.ɵɵrestoreView(_r15); const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.resetFunction()); })("onClear", function RelateFilterFieldComponent_ng_container_1_Template_p_multiSelect_onClear_2_listener() { i0.ɵɵrestoreView(_r15); const ctx_r21 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r21.onClear()); });
    i0.ɵɵtemplate(4, RelateFilterFieldComponent_ng_container_1_ng_template_4_Template, 1, 0, "ng-template", 5);
    i0.ɵɵtemplate(5, RelateFilterFieldComponent_ng_container_1_ng_template_5_Template, 1, 0, "ng-template", 6);
    i0.ɵɵtemplate(6, RelateFilterFieldComponent_ng_container_1_ng_template_6_Template, 10, 2, "ng-template", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵelement(8, "scrm-button", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("options", ctx_r0.options)("ngModel", ctx_r0.selectedValues)("optionLabel", ctx_r0.getRelateFieldName())("placeholder", ctx_r0.placeholderLabel)("selectedItemsLabel", "{0} " + ctx_r0.selectedItemsLabel)("emptyFilterMessage", ctx_r0.emptyFilterLabel)("emptyMessage", ctx_r0.emptyFilterLabel)("maxSelectedLabels", ctx_r0.maxSelectedLabels)("styleClass", "w-100 " + ctx_r0.getInvalidClass())("showToggleAll", true)("selectAll", ctx_r0.selectAll)("autoOptionFocus", false)("autofocusFilter", false)("focusOnHover", true)("showClear", true)("filter", true)("lazy", true)("dataKey", "id")("filterBy", ctx_r0.getRelateFieldName());
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("config", ctx_r0.selectButton);
} }
class RelateFilterFieldComponent extends BaseRelateComponent {
    /**
     * Constructor
     *
     * @param {object} languages service
     * @param {object} typeFormatter service
     * @param {object} relateService service
     * @param {object} moduleNameMapper service
     * @param {object} modalService service
     * @param {object} logic
     * @param {object} logicDisplay
     */
    constructor(languages, typeFormatter, relateService, moduleNameMapper, modalService, logic, logicDisplay) {
        super(languages, typeFormatter, relateService, moduleNameMapper, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.relateService = relateService;
        this.moduleNameMapper = moduleNameMapper;
        this.modalService = modalService;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.placeholderLabel = '';
        this.selectedItemsLabel = '';
        this.emptyFilterLabel = '';
        this.maxSelectedLabels = 20;
        this.selectAll = false;
        this.filterValue = '';
        this.selectButton = {
            klass: ['btn', 'btn-sm', 'btn-outline-secondary', 'm-0', 'border-0'],
            onClick: () => {
                this.showSelectModal();
            },
            icon: 'cursor'
        };
    }
    /**
     * On init handler
     */
    ngOnInit() {
        this.selectAll = false;
        const filter = this.record;
        this.field.valueList = [];
        this.field.valueObjectArray = [];
        let values = (this.field && this.field.criteria && this.field.criteria.values) || [];
        values = values.filter(value => !value);
        if (values.length > 0) {
            this.field.valueList = values;
        }
        let valueObjectArray = (this.field && this.field.criteria && this.field.criteria.valueObjectArray) || [];
        valueObjectArray = valueObjectArray.map(value => {
            const mapped = { ...value };
            mapped[this.getRelateFieldName()] = value[this.getRelateFieldName()] ?? value?.name ?? '';
            return mapped;
        });
        if (valueObjectArray.length > 0) {
            this.field.valueObjectArray = deepClone(valueObjectArray);
            this.selectedValues = deepClone(valueObjectArray);
        }
        super.ngOnInit();
        this.options = this.options ?? [];
        this.getTranslatedLabels();
        this.addCurrentlySelectedToOptions(this.options ?? []);
        const idFieldName = this.getRelateIdField();
        if (idFieldName && filter && filter.criteriaFields && filter.criteriaFields[idFieldName]) {
            this.idField = filter.criteriaFields[idFieldName];
            this.idField.valueList = [];
            let idValues = (this.idField && this.idField.criteria && this.idField.criteria.values) || [];
            idValues = idValues.filter(value => !!value);
            if (idValues.length > 0) {
                this.idField.valueList = deepClone(idValues);
            }
        }
    }
    /**
     * Handle newly added item
     */
    onAdd() {
        this.updateFieldValues();
        this.calculateSelectAll();
    }
    /**
     * Handle item removal
     */
    onRemove() {
        this.updateFieldValues();
        this.calculateSelectAll();
    }
    onClear() {
        this.options = [];
        this.selectedValues = [];
        this.selectAll = false;
        this.filterValue = '';
        this.onRemove();
    }
    onSelectAll() {
        this.selectAll = !this.selectAll;
        if (this.selectAll) {
            if (this.tag.visibleOptions() && this.tag.visibleOptions().length) {
                this.selectedValues = this.tag.visibleOptions();
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
    onPanelShow() {
        this.dropdownFilterInput.nativeElement.focus();
        this.calculateSelectAll();
    }
    resetFunction() {
        this.filterValue = '';
        this.options = this.selectedValues;
    }
    onFilterInput(event) {
        event?.stopPropagation();
        this.selectAll = false;
        this.tag.onLazyLoad.emit();
    }
    onFilter() {
        const relateName = this.getRelateFieldName();
        this.filterValue = this.filterValue ?? '';
        const matches = this.filterValue.match(/^\s*$/g);
        if (matches && matches.length) {
            this.filterValue = '';
        }
        let term = this.filterValue;
        this.search(term).pipe(take(1), map(data => data.filter((item) => item[relateName] !== '')), map(filteredData => filteredData.map((item) => ({
            id: item.id,
            [relateName]: item[relateName]
        })))).subscribe(filteredOptions => {
            this.options = filteredOptions;
            this.addCurrentlySelectedToOptions(filteredOptions);
            this.calculateSelectAll();
        });
    }
    updateFieldValues() {
        let value = this?.selectedValues?.map(option => option[this.getRelateFieldName()]) ?? null;
        if (!value) {
            value = [];
        }
        this.field.valueList = value;
        this.field.valueObjectArray = deepClone(this.selectedValues ?? []);
        this.updateSearchCriteria(this.field);
        this.field.criteria.valueObjectArray = deepClone(this.field.valueObjectArray);
        this.updateIdField();
    }
    updateIdField() {
        if (!this.idField) {
            return;
        }
        this.idField.valueList = this?.selectedValues?.map(option => option.id) ?? [];
        this.updateSearchCriteria(this.idField);
    }
    /**
     * Set value on field
     *
     * @param item
     */
    setValue(item) {
        const relateName = this.getRelateFieldName();
        const id = item?.id ?? '';
        const relateValue = item[relateName];
        if (this.idField && this.idField.valueList.includes(id)) {
            return;
        }
        if (!this.idField && this.field.valueList.includes(relateValue)) {
            return;
        }
        const valueObject = {};
        valueObject.id = id;
        valueObject[relateName] = relateValue;
        this.field.valueObjectArray.push(valueObject);
        this.field.valueList.push(relateValue);
        if (this.idField) {
            this.idField.valueList.push(id);
            this.updateSearchCriteria(this.idField);
        }
        this.updateSearchCriteria(this.field);
        if (!this.field.criteria.valueObjectArray) {
            this.field.criteria.valueObjectArray = [];
        }
        this.field.criteria.valueObjectArray.push(valueObject);
    }
    /**
     * Set value on field criteria and form
     */
    updateSearchCriteria(field) {
        field.criteria.operator = '=';
        field.criteria.values = field.valueList;
        field.formControl.setValue(field.valueList);
        field.formControl.markAsDirty();
    }
    /**
     * Show record selection modal
     */
    showSelectModal() {
        const modal = this.modalService.open(RecordListModalComponent, { size: 'xl', scrollable: true });
        modal.componentInstance.module = this.getRelatedModule();
        modal.result.then((data) => {
            if (!data || !data.selection || !data.selection.selected) {
                return;
            }
            const record = this.getSelectedRecord(data);
            const found = this.field.valueObjectArray.find(element => element.id === record.id);
            if (found) {
                return;
            }
            this.setItem(record);
            this.tag.updateModel(this.selectedValues);
        });
    }
    /**
     * Get Selected Record
     *
     * @param {object} data RecordListModalResult
     * @returns {object} Record
     */
    getSelectedRecord(data) {
        let id = '';
        Object.keys(data.selection.selected).some(selected => {
            id = selected;
            return true;
        });
        let record = null;
        data.records.some(rec => {
            if (rec && rec.id === id) {
                record = rec;
                return true;
            }
        });
        return record;
    }
    /**
     * Set the record as the selected item
     *
     * @param {object} record to set
     */
    setItem(record) {
        const relateName = this.getRelateFieldName();
        const newItem = {
            id: record?.attributes?.id,
            [relateName]: record?.attributes[relateName]
        };
        const inList = this.isInList(this.selectedValues, newItem);
        if (inList) {
            return;
        }
        this.selectedValues.push(newItem);
        this.addCurrentlySelectedToOptions(this.options);
        this.onAdd();
    }
    addCurrentlySelectedToOptions(filteredOptions) {
        if (!this?.selectedValues || !this?.selectedValues.length) {
            return;
        }
        this.selectedValues.forEach(selectedValue => {
            let found = this.isInList(filteredOptions, selectedValue);
            if (found === false && selectedValue) {
                this.options.push(selectedValue);
            }
        });
    }
    isInList(filteredOptions, selectedValue) {
        let found = false;
        filteredOptions.some((value) => {
            if (value?.id === selectedValue?.id) {
                found = true;
                return true;
            }
            return false;
        });
        return found;
    }
    calculateSelectAll() {
        const visibleOptions = this?.tag?.visibleOptions() ?? [];
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
    static { this.ɵfac = function RelateFilterFieldComponent_Factory(t) { return new (t || RelateFilterFieldComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.RelateService), i0.ɵɵdirectiveInject(i4.ModuleNameMapper), i0.ɵɵdirectiveInject(i5.NgbModal), i0.ɵɵdirectiveInject(i6.FieldLogicManager), i0.ɵɵdirectiveInject(i7.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RelateFilterFieldComponent, selectors: [["scrm-relate-filter"]], viewQuery: function RelateFilterFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tag = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdownFilterInput = _t.first);
        } }, features: [i0.ɵɵProvidersFeature([RelateService]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "d-flex", "align-items-center"], [4, "ngIf"], [1, "flex-grow-1", "w-100", "mr-1"], [3, "options", "ngModel", "optionLabel", "placeholder", "selectedItemsLabel", "emptyFilterMessage", "emptyMessage", "maxSelectedLabels", "styleClass", "showToggleAll", "selectAll", "autoOptionFocus", "autofocusFilter", "focusOnHover", "showClear", "filter", "lazy", "dataKey", "filterBy", "ngModelChange", "onChange", "onLazyLoad", "onRemove", "onPanelShow", "onPanelHide", "onClear"], ["tag", ""], ["pTemplate", "dropdownicon"], ["pTemplate", "checkicon"], ["pTemplate", "filter"], [3, "config"], ["image", "down_carret"], ["image", "checkbox_cross"], [1, "p-checkbox", "p-component", 3, "click"], ["data-p-hidden-accessible", "true", 1, "p-hidden-accessible"], ["type", "checkbox", "checked", "false", "aria-label", "All items unselected"], ["role", "checkbox", "aria-checked", "false", 1, "p-checkbox-box", 3, "click"], ["image", "checkbox_cross", 4, "ngIf"], [1, "p-multiselect-filter-container", 3, "click"], ["type", "text", "pInputText", "", "autocomplete", "off", "tabindex", "0", 1, "p-multiselect-filter", "p-inputtext", "p-component", 3, "ngModel", "ngModelChange", "keyup"], ["dropdownFilterInput", ""], [1, "p-multiselect-filter-icon"], ["image", "search", 1, "p-element", "p-dropdown-filter-search-icon"]], template: function RelateFilterFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, RelateFilterFieldComponent_ng_container_1_Template, 9, 20, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.initModule);
        } }, dependencies: [i8.NgIf, i9.DefaultValueAccessor, i9.NgControlStatus, i9.NgModel, i10.ButtonComponent, i11.ImageComponent, i12.MultiSelect, i13.PrimeTemplate, i14.InputText], encapsulation: 2 }); }
}
export { RelateFilterFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RelateFilterFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-relate-filter', providers: [RelateService], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"d-flex align-items-center\">\n    <ng-container *ngIf=\"initModule\">\n        <div class=\"flex-grow-1 w-100 mr-1\">\n            <p-multiSelect\n                #tag\n                [options]=\"this.options\"\n                [(ngModel)]=\"selectedValues\"\n                [optionLabel]=\"getRelateFieldName()\"\n                (onChange)=\"onAdd()\"\n                (onLazyLoad)=\"onFilter()\"\n                (onRemove)=\"onRemove()\"\n                (onPanelShow)=\"onPanelShow()\"\n                (onPanelHide)=\"resetFunction()\"\n                [placeholder]=\"placeholderLabel\"\n                [selectedItemsLabel]=\"'{0} ' + selectedItemsLabel\"\n                [emptyFilterMessage]=\"emptyFilterLabel\"\n                [emptyMessage]=\"emptyFilterLabel\"\n                [maxSelectedLabels]=\"maxSelectedLabels\"\n                [styleClass]=\"'w-100 ' + getInvalidClass()\"\n                [showToggleAll]=\"true\"\n                [selectAll]=\"selectAll\"\n                [autoOptionFocus]=\"false\"\n                [autofocusFilter]=\"false\"\n                [focusOnHover]=\"true\"\n                [showClear]=\"true\"\n                (onClear)=\"onClear()\"\n                [filter]=\"true\"\n                [lazy]=\"true\"\n                [dataKey]=\"'id'\"\n                [filterBy]=\"getRelateFieldName()\"\n            >\n                <ng-template pTemplate=\"dropdownicon\">\n                    <scrm-image image=\"down_carret\"></scrm-image>\n                </ng-template>\n                <ng-template pTemplate=\"checkicon\">\n                    <scrm-image image=\"checkbox_cross\"></scrm-image>\n                </ng-template>\n\n                <ng-template pTemplate=\"filter\" let-options=\"options\">\n\n                    <div class=\"p-checkbox p-component\" (click)=\"$event.stopPropagation()\">\n                        <div class=\"p-hidden-accessible\" data-p-hidden-accessible=\"true\">\n                            <input type=\"checkbox\" checked=\"false\" aria-label=\"All items unselected\">\n                        </div>\n                        <div role=\"checkbox\" class=\"p-checkbox-box\" aria-checked=\"false\" (click)=\"onSelectAll()\">\n                            <scrm-image image=\"checkbox_cross\" *ngIf=\"selectAll\"></scrm-image>\n                        </div>\n                    </div>\n                    <div class=\"p-multiselect-filter-container\" (click)=\"$event.stopPropagation()\">\n                        <input #dropdownFilterInput\n                               type=\"text\"\n                               pInputText\n                               autocomplete=\"off\"\n                               class=\"p-multiselect-filter p-inputtext p-component\"\n                               [(ngModel)]=\"filterValue\"\n                               (keyup)=\"onFilterInput($event);\"\n                               tabindex=\"0\">\n                        <span class=\"p-multiselect-filter-icon\">\n                            <scrm-image image=\"search\" class=\"p-element p-dropdown-filter-search-icon\"></scrm-image>\n                        </span>\n                    </div>\n\n                </ng-template>\n\n\n\n            </p-multiSelect>\n        </div>\n        <div>\n            <scrm-button [config]=\"selectButton\">\n            </scrm-button>\n        </div>\n    </ng-container>\n</div>\n\n\n\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.RelateService }, { type: i4.ModuleNameMapper }, { type: i5.NgbModal }, { type: i6.FieldLogicManager }, { type: i7.FieldLogicDisplayManager }]; }, { tag: [{
            type: ViewChild,
            args: ['tag']
        }], dropdownFilterInput: [{
            type: ViewChild,
            args: ['dropdownFilterInput']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvcmVsYXRlL3RlbXBsYXRlcy9maWx0ZXIvcmVsYXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvcmVsYXRlL3RlbXBsYXRlcy9maWx0ZXIvcmVsYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFnQyxTQUFTLEVBQTJCLE1BQU0sUUFBUSxDQUFDO0FBQzFGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwrRUFBK0UsQ0FBQztBQUMvRyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUM5RixPQUFPLEVBQ0gsd0JBQXdCLEVBQzNCLE1BQU0sbUdBQW1HLENBQUM7QUFDM0csT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUloRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUUzRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUNsRyxPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2U1QixnQ0FBNkM7OztJQUc3QyxpQ0FBZ0Q7OztJQVV4QyxpQ0FBa0U7Ozs7SUFMMUUsK0JBQXVFO0lBQW5DLHVJQUFTLHdCQUF3QixJQUFDO0lBQ2xFLCtCQUFpRTtJQUM3RCw0QkFBeUU7SUFDN0UsaUJBQU07SUFDTiwrQkFBeUY7SUFBeEIsNkxBQVMsZUFBQSxvQkFBYSxDQUFBLElBQUM7SUFDcEYsdUhBQWtFO0lBQ3RFLGlCQUFNLEVBQUE7SUFFViwrQkFBK0U7SUFBbkMsdUlBQVMsd0JBQXdCLElBQUM7SUFDMUUscUNBT29CO0lBRmIsc1FBQXlCLHlMQUNoQixlQUFBLDZCQUFxQixDQUFBLElBREw7SUFMaEMsaUJBT29CO0lBQ3BCLGdDQUF3QztJQUNwQyxpQ0FBd0Y7SUFDNUYsaUJBQU8sRUFBQTs7O0lBZGlDLGVBQWU7SUFBZix1Q0FBZTtJQVNoRCxlQUF5QjtJQUF6Qiw0Q0FBeUI7Ozs7SUFyRHBELDZCQUFpQztJQUM3Qiw4QkFBb0MsMEJBQUE7SUFJNUIsa1FBQTRCLGtMQUVoQixlQUFBLGVBQU8sQ0FBQSxJQUZTLHNMQUdkLGVBQUEsa0JBQVUsQ0FBQSxJQUhJLGtMQUloQixlQUFBLGtCQUFVLENBQUEsSUFKTSx3TEFLYixlQUFBLHFCQUFhLENBQUEsSUFMQSx3TEFNYixlQUFBLHVCQUFlLENBQUEsSUFORixnTEFtQmpCLGVBQUEsaUJBQVMsQ0FBQSxJQW5CUTtJQXlCNUIsMEdBRWM7SUFDZCwwR0FFYztJQUVkLDJHQXdCYztJQUlsQixpQkFBZ0IsRUFBQTtJQUVwQiwyQkFBSztJQUNELGlDQUNjO0lBQ2xCLGlCQUFNO0lBQ1YsMEJBQWU7OztJQW5FSCxlQUF3QjtJQUF4Qix3Q0FBd0Isa0NBQUEsNENBQUEsd0NBQUEsMERBQUEsK0NBQUEseUNBQUEsK0NBQUEsbURBQUEsdUJBQUEsK0JBQUEsMEJBQUEsMEJBQUEsc0JBQUEsbUJBQUEsZ0JBQUEsY0FBQSxpQkFBQSx5Q0FBQTtJQWdFZixlQUF1QjtJQUF2Qiw0Q0FBdUI7O0FEbERoRCxNQU1hLDBCQUEyQixTQUFRLG1CQUFtQjtJQWEvRDs7Ozs7Ozs7OztPQVVHO0lBQ0gsWUFDYyxTQUF3QixFQUN4QixhQUFnQyxFQUNoQyxhQUE0QixFQUM1QixnQkFBa0MsRUFDbEMsWUFBc0IsRUFDdEIsS0FBd0IsRUFDeEIsWUFBc0M7UUFFaEQsS0FBSyxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQVI1RSxjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtRQXpCcEQscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBQzlCLHVCQUFrQixHQUFXLEVBQUUsQ0FBQztRQUNoQyxxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFDOUIsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBQy9CLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZ0JBQVcsR0FBdUIsRUFBRSxDQUFDO1FBd0JqQyxJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2hCLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQztZQUNwRSxPQUFPLEVBQUUsR0FBUyxFQUFFO2dCQUNoQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDM0IsQ0FBQztZQUNELElBQUksRUFBRSxRQUFRO1NBQ0UsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQXFCLENBQUM7UUFFMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRTFCLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBRWpDLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckYsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhDLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekcsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVDLE1BQU0sTUFBTSxHQUFHLEVBQUMsR0FBRyxLQUFLLEVBQUMsQ0FBQTtZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUMxRixPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDckQ7UUFFRCxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUVsQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztRQUV2RCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU1QyxJQUFJLFdBQVcsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3RGLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDNUIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3RixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUU3QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEQ7U0FDSjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUs7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ0osSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxFQUFFO2dCQUMvRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDbkQ7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3RDO1lBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO2FBQU07WUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFdkYsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzlDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxhQUFhO1FBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBb0I7UUFDOUIsS0FBSyxFQUFFLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzlCLENBQUM7SUFFRCxRQUFRO1FBQ0osTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUMxQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFlLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUN0RSxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZELEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNqQyxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO1lBQy9CLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFUyxpQkFBaUI7UUFDdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLGNBQWMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUMzRixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRTdCLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRVMsYUFBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxjQUFjLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sUUFBUSxDQUFDLElBQVM7UUFFeEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0MsTUFBTSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDMUIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXJDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckQsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzdELE9BQU87U0FDVjtRQUVELE1BQU0sV0FBVyxHQUFHLEVBQVMsQ0FBQztRQUM5QixXQUFXLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNwQixXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBRXRDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV2QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztTQUM3QztRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxvQkFBb0IsQ0FBQyxLQUFZO1FBQ3ZDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUM5QixLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ3hDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7T0FFRztJQUNPLGVBQWU7UUFDckIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBRS9GLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFekQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUEyQixFQUFFLEVBQUU7WUFFOUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtnQkFDdEQsT0FBTzthQUNWO1lBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTVDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFcEYsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxpQkFBaUIsQ0FBQyxJQUEyQjtRQUNuRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2pELEVBQUUsR0FBRyxRQUFRLENBQUM7WUFDZCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksTUFBTSxHQUFXLElBQUksQ0FBQztRQUUxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDdEIsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDYixPQUFPLElBQUksQ0FBQzthQUNmO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLE9BQU8sQ0FBQyxNQUFjO1FBQzVCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzdDLE1BQU0sT0FBTyxHQUFHO1lBQ1osRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBRTtZQUMxQixDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDO1NBQ2xDLENBQUM7UUFFZixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0QsSUFBSSxNQUFNLEVBQUU7WUFDUixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRVMsNkJBQTZCLENBQUMsZUFBZTtRQUNuRCxJQUFJLENBQUMsSUFBSSxFQUFFLGNBQWMsSUFBSSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQ3ZELE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3hDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBRTFELElBQUksS0FBSyxLQUFLLEtBQUssSUFBSSxhQUFhLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3BDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRVMsUUFBUSxDQUFDLGVBQStCLEVBQUUsYUFBMkI7UUFDM0UsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBRWpCLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFtQixFQUFFLEVBQUU7WUFFekMsSUFBSSxLQUFLLEVBQUUsRUFBRSxLQUFLLGFBQWEsRUFBRSxFQUFFLEVBQUU7Z0JBQ2pDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVTLGtCQUFrQjtRQUN4QixNQUFNLGNBQWMsR0FBRyxJQUFJLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN6RCxNQUFNLGtCQUFrQixHQUFHLENBQUMsSUFBSSxFQUFFLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsT0FBTztTQUNWO1FBRUQsSUFBSSxjQUFjLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLE1BQU0sRUFBRTtZQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQzsyRkFwWFEsMEJBQTBCO29FQUExQiwwQkFBMEI7Ozs7Ozs7OENBRnhCLENBQUMsYUFBYSxDQUFDO1lDdkI5Qiw4QkFBdUM7WUFDbkMsOEZBdUVlO1lBQ25CLGlCQUFNOztZQXhFYSxlQUFnQjtZQUFoQixxQ0FBZ0I7OztTRHdCdEIsMEJBQTBCO3VGQUExQiwwQkFBMEI7Y0FOdEMsU0FBUzsyQkFDSSxvQkFBb0IsYUFHbkIsQ0FBQyxhQUFhLENBQUM7eVBBR1IsR0FBRztrQkFBcEIsU0FBUzttQkFBQyxLQUFLO1lBQ2tCLG1CQUFtQjtrQkFBcEQsU0FBUzttQkFBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBdHRyaWJ1dGVNYXAsIEJ1dHRvbkludGVyZmFjZSwgZGVlcENsb25lLCBGaWVsZCwgT2JqZWN0TWFwLCBSZWNvcmR9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge05nYk1vZGFsfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gICAgUmVjb3JkTGlzdE1vZGFsQ29tcG9uZW50XG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLWxpc3QtbW9kYWwvY29tcG9uZW50cy9yZWNvcmQtbGlzdC1tb2RhbC9yZWNvcmQtbGlzdC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlUmVsYXRlQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9iYXNlL2Jhc2UtcmVsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7UmVsYXRlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlbGF0ZS9yZWxhdGUuc2VydmljZSc7XG5pbXBvcnQge1xuICAgIFJlY29yZExpc3RNb2RhbFJlc3VsdFxufSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL3JlY29yZC1saXN0LW1vZGFsL2NvbXBvbmVudHMvcmVjb3JkLWxpc3QtbW9kYWwvcmVjb3JkLWxpc3QtbW9kYWwubW9kZWwnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge1NhdmVkRmlsdGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5TWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMtZGlzcGxheS9maWVsZC1sb2dpYy1kaXNwbGF5Lm1hbmFnZXInO1xuaW1wb3J0IHttYXAsIHRha2V9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtNdWx0aVNlbGVjdH0gZnJvbSBcInByaW1lbmcvbXVsdGlzZWxlY3RcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXJlbGF0ZS1maWx0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWxhdGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG4gICAgcHJvdmlkZXJzOiBbUmVsYXRlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUmVsYXRlRmlsdGVyRmllbGRDb21wb25lbnQgZXh0ZW5kcyBCYXNlUmVsYXRlQ29tcG9uZW50IHtcbiAgICBAVmlld0NoaWxkKCd0YWcnKSB0YWc6IE11bHRpU2VsZWN0O1xuICAgIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duRmlsdGVySW5wdXQnKSBkcm9wZG93bkZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xuICAgIHNlbGVjdEJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlO1xuICAgIGlkRmllbGQ6IEZpZWxkO1xuXG4gICAgcGxhY2Vob2xkZXJMYWJlbDogc3RyaW5nID0gJyc7XG4gICAgc2VsZWN0ZWRJdGVtc0xhYmVsOiBzdHJpbmcgPSAnJztcbiAgICBlbXB0eUZpbHRlckxhYmVsOiBzdHJpbmcgPSAnJztcbiAgICBtYXhTZWxlY3RlZExhYmVsczogbnVtYmVyID0gMjA7XG4gICAgc2VsZWN0QWxsOiBib29sZWFuID0gZmFsc2U7XG4gICAgZmlsdGVyVmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYW5ndWFnZXMgc2VydmljZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlRm9ybWF0dGVyIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVsYXRlU2VydmljZSBzZXJ2aWNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1vZHVsZU5hbWVNYXBwZXIgc2VydmljZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtb2RhbFNlcnZpY2Ugc2VydmljZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsb2dpY1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsb2dpY0Rpc3BsYXlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlczogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgcmVsYXRlU2VydmljZTogUmVsYXRlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIobGFuZ3VhZ2VzLCB0eXBlRm9ybWF0dGVyLCByZWxhdGVTZXJ2aWNlLCBtb2R1bGVOYW1lTWFwcGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcblxuICAgICAgICB0aGlzLnNlbGVjdEJ1dHRvbiA9IHtcbiAgICAgICAgICAgIGtsYXNzOiBbJ2J0bicsICdidG4tc20nLCAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5JywgJ20tMCcsICdib3JkZXItMCddLFxuICAgICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlbGVjdE1vZGFsKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbjogJ2N1cnNvcidcbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gaW5pdCBoYW5kbGVyXG4gICAgICovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMucmVjb3JkIGFzIFNhdmVkRmlsdGVyO1xuXG4gICAgICAgIHRoaXMuZmllbGQudmFsdWVMaXN0ID0gW107XG5cbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZU9iamVjdEFycmF5ID0gW107XG5cbiAgICAgICAgbGV0IHZhbHVlcyA9ICh0aGlzLmZpZWxkICYmIHRoaXMuZmllbGQuY3JpdGVyaWEgJiYgdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZXMpIHx8IFtdO1xuICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuZmlsdGVyKHZhbHVlID0+ICF2YWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLnZhbHVlTGlzdCA9IHZhbHVlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWx1ZU9iamVjdEFycmF5ID0gKHRoaXMuZmllbGQgJiYgdGhpcy5maWVsZC5jcml0ZXJpYSAmJiB0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlT2JqZWN0QXJyYXkpIHx8IFtdO1xuICAgICAgICB2YWx1ZU9iamVjdEFycmF5ID0gdmFsdWVPYmplY3RBcnJheS5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFwcGVkID0gey4uLnZhbHVlfVxuICAgICAgICAgICAgbWFwcGVkW3RoaXMuZ2V0UmVsYXRlRmllbGROYW1lKCldID0gdmFsdWVbdGhpcy5nZXRSZWxhdGVGaWVsZE5hbWUoKV0gPz8gdmFsdWU/Lm5hbWUgPz8gJyc7XG4gICAgICAgICAgICByZXR1cm4gbWFwcGVkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodmFsdWVPYmplY3RBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLnZhbHVlT2JqZWN0QXJyYXkgPSBkZWVwQ2xvbmUodmFsdWVPYmplY3RBcnJheSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzID0gZGVlcENsb25lKHZhbHVlT2JqZWN0QXJyYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgPz8gW107XG5cbiAgICAgICAgdGhpcy5nZXRUcmFuc2xhdGVkTGFiZWxzKCk7XG5cbiAgICAgICAgdGhpcy5hZGRDdXJyZW50bHlTZWxlY3RlZFRvT3B0aW9ucyh0aGlzLm9wdGlvbnMgPz8gW10pO1xuXG4gICAgICAgIGNvbnN0IGlkRmllbGROYW1lID0gdGhpcy5nZXRSZWxhdGVJZEZpZWxkKCk7XG5cbiAgICAgICAgaWYgKGlkRmllbGROYW1lICYmIGZpbHRlciAmJiBmaWx0ZXIuY3JpdGVyaWFGaWVsZHMgJiYgZmlsdGVyLmNyaXRlcmlhRmllbGRzW2lkRmllbGROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5pZEZpZWxkID0gZmlsdGVyLmNyaXRlcmlhRmllbGRzW2lkRmllbGROYW1lXTtcbiAgICAgICAgICAgIHRoaXMuaWRGaWVsZC52YWx1ZUxpc3QgPSBbXTtcbiAgICAgICAgICAgIGxldCBpZFZhbHVlcyA9ICh0aGlzLmlkRmllbGQgJiYgdGhpcy5pZEZpZWxkLmNyaXRlcmlhICYmIHRoaXMuaWRGaWVsZC5jcml0ZXJpYS52YWx1ZXMpIHx8IFtdO1xuICAgICAgICAgICAgaWRWYWx1ZXMgPSBpZFZhbHVlcy5maWx0ZXIodmFsdWUgPT4gISF2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChpZFZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZEZpZWxkLnZhbHVlTGlzdCA9IGRlZXBDbG9uZShpZFZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgbmV3bHkgYWRkZWQgaXRlbVxuICAgICAqL1xuICAgIG9uQWRkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkVmFsdWVzKCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2VsZWN0QWxsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGl0ZW0gcmVtb3ZhbFxuICAgICAqL1xuICAgIG9uUmVtb3ZlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkVmFsdWVzKCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2VsZWN0QWxsKCk7XG4gICAgfVxuXG4gICAgb25DbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLm9uUmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgb25TZWxlY3RBbGwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsID0gIXRoaXMuc2VsZWN0QWxsO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RBbGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhZy52aXNpYmxlT3B0aW9ucygpICYmIHRoaXMudGFnLnZpc2libGVPcHRpb25zKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IHRoaXMudGFnLnZpc2libGVPcHRpb25zKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9uQWRkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzID0gW107XG4gICAgICAgICAgICB0aGlzLm9uUmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUcmFuc2xhdGVkTGFiZWxzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyTGFiZWwgPSB0aGlzLmxhbmd1YWdlcy5nZXRBcHBTdHJpbmcoJ0xCTF9TRUxFQ1RfSVRFTScpIHx8ICcnO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXNMYWJlbCA9IHRoaXMubGFuZ3VhZ2VzLmdldEFwcFN0cmluZygnTEJMX0lURU1TX1NFTEVDVEVEJykgfHwgJyc7XG4gICAgICAgIHRoaXMuZW1wdHlGaWx0ZXJMYWJlbCA9IHRoaXMubGFuZ3VhZ2VzLmdldEFwcFN0cmluZygnRVJSX1NFQVJDSF9OT19SRVNVTFRTJykgfHwgJyc7XG5cbiAgICB9XG5cbiAgICBvblBhbmVsU2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bkZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKVxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNlbGVjdEFsbCgpO1xuICAgIH1cblxuICAgIHJlc2V0RnVuY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5zZWxlY3RlZFZhbHVlcztcbiAgICB9XG5cbiAgICBvbkZpbHRlcklucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50Py5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50YWcub25MYXp5TG9hZC5lbWl0KClcbiAgICB9XG5cbiAgICBvbkZpbHRlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVsYXRlTmFtZSA9IHRoaXMuZ2V0UmVsYXRlRmllbGROYW1lKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB0aGlzLmZpbHRlclZhbHVlID8/ICcnO1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5maWx0ZXJWYWx1ZS5tYXRjaCgvXlxccyokL2cpO1xuICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0ZXJtID0gdGhpcy5maWx0ZXJWYWx1ZTtcbiAgICAgICAgdGhpcy5zZWFyY2godGVybSkucGlwZShcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBtYXAoZGF0YSA9PiBkYXRhLmZpbHRlcigoaXRlbTogT2JqZWN0TWFwKSA9PiBpdGVtW3JlbGF0ZU5hbWVdICE9PSAnJykpLFxuICAgICAgICAgICAgbWFwKGZpbHRlcmVkRGF0YSA9PiBmaWx0ZXJlZERhdGEubWFwKChpdGVtOiBPYmplY3RNYXApID0+ICh7XG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgW3JlbGF0ZU5hbWVdOiBpdGVtW3JlbGF0ZU5hbWVdXG4gICAgICAgICAgICB9KSkpXG4gICAgICAgICkuc3Vic2NyaWJlKGZpbHRlcmVkT3B0aW9ucyA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBmaWx0ZXJlZE9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLmFkZEN1cnJlbnRseVNlbGVjdGVkVG9PcHRpb25zKGZpbHRlcmVkT3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVNlbGVjdEFsbCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlRmllbGRWYWx1ZXMoKTogdm9pZCB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXM/LnNlbGVjdGVkVmFsdWVzPy5tYXAob3B0aW9uID0+IG9wdGlvblt0aGlzLmdldFJlbGF0ZUZpZWxkTmFtZSgpXSkgPz8gbnVsbDtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlTGlzdCA9IHZhbHVlO1xuXG4gICAgICAgIHRoaXMuZmllbGQudmFsdWVPYmplY3RBcnJheSA9IGRlZXBDbG9uZSh0aGlzLnNlbGVjdGVkVmFsdWVzID8/IFtdKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVNlYXJjaENyaXRlcmlhKHRoaXMuZmllbGQpO1xuXG4gICAgICAgIHRoaXMuZmllbGQuY3JpdGVyaWEudmFsdWVPYmplY3RBcnJheSA9IGRlZXBDbG9uZSh0aGlzLmZpZWxkLnZhbHVlT2JqZWN0QXJyYXkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUlkRmllbGQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlSWRGaWVsZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlkRmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlkRmllbGQudmFsdWVMaXN0ID0gdGhpcz8uc2VsZWN0ZWRWYWx1ZXM/Lm1hcChvcHRpb24gPT4gb3B0aW9uLmlkKSA/PyBbXTtcbiAgICAgICAgdGhpcy51cGRhdGVTZWFyY2hDcml0ZXJpYSh0aGlzLmlkRmllbGQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB2YWx1ZSBvbiBmaWVsZFxuICAgICAqXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2V0VmFsdWUoaXRlbTogYW55KTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgcmVsYXRlTmFtZSA9IHRoaXMuZ2V0UmVsYXRlRmllbGROYW1lKCk7XG4gICAgICAgIGNvbnN0IGlkID0gaXRlbT8uaWQgPz8gJyc7XG4gICAgICAgIGNvbnN0IHJlbGF0ZVZhbHVlID0gaXRlbVtyZWxhdGVOYW1lXTtcblxuICAgICAgICBpZiAodGhpcy5pZEZpZWxkICYmIHRoaXMuaWRGaWVsZC52YWx1ZUxpc3QuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaWRGaWVsZCAmJiB0aGlzLmZpZWxkLnZhbHVlTGlzdC5pbmNsdWRlcyhyZWxhdGVWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbHVlT2JqZWN0ID0ge30gYXMgYW55O1xuICAgICAgICB2YWx1ZU9iamVjdC5pZCA9IGlkO1xuICAgICAgICB2YWx1ZU9iamVjdFtyZWxhdGVOYW1lXSA9IHJlbGF0ZVZhbHVlO1xuXG4gICAgICAgIHRoaXMuZmllbGQudmFsdWVPYmplY3RBcnJheS5wdXNoKHZhbHVlT2JqZWN0KTtcbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZUxpc3QucHVzaChyZWxhdGVWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaWRGaWVsZCkge1xuICAgICAgICAgICAgdGhpcy5pZEZpZWxkLnZhbHVlTGlzdC5wdXNoKGlkKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VhcmNoQ3JpdGVyaWEodGhpcy5pZEZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU2VhcmNoQ3JpdGVyaWEodGhpcy5maWVsZCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlT2JqZWN0QXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuY3JpdGVyaWEudmFsdWVPYmplY3RBcnJheSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZU9iamVjdEFycmF5LnB1c2godmFsdWVPYmplY3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB2YWx1ZSBvbiBmaWVsZCBjcml0ZXJpYSBhbmQgZm9ybVxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTZWFyY2hDcml0ZXJpYShmaWVsZDogRmllbGQpOiB2b2lkIHtcbiAgICAgICAgZmllbGQuY3JpdGVyaWEub3BlcmF0b3IgPSAnPSc7XG4gICAgICAgIGZpZWxkLmNyaXRlcmlhLnZhbHVlcyA9IGZpZWxkLnZhbHVlTGlzdDtcbiAgICAgICAgZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZmllbGQudmFsdWVMaXN0KTtcbiAgICAgICAgZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IHJlY29yZCBzZWxlY3Rpb24gbW9kYWxcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2hvd1NlbGVjdE1vZGFsKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oUmVjb3JkTGlzdE1vZGFsQ29tcG9uZW50LCB7c2l6ZTogJ3hsJywgc2Nyb2xsYWJsZTogdHJ1ZX0pO1xuXG4gICAgICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlLm1vZHVsZSA9IHRoaXMuZ2V0UmVsYXRlZE1vZHVsZSgpO1xuXG4gICAgICAgIG1vZGFsLnJlc3VsdC50aGVuKChkYXRhOiBSZWNvcmRMaXN0TW9kYWxSZXN1bHQpID0+IHtcblxuICAgICAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLnNlbGVjdGlvbiB8fCAhZGF0YS5zZWxlY3Rpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IHRoaXMuZ2V0U2VsZWN0ZWRSZWNvcmQoZGF0YSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvdW5kID0gdGhpcy5maWVsZC52YWx1ZU9iamVjdEFycmF5LmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmlkID09PSByZWNvcmQuaWQpO1xuXG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbShyZWNvcmQpO1xuICAgICAgICAgICAgdGhpcy50YWcudXBkYXRlTW9kZWwodGhpcy5zZWxlY3RlZFZhbHVlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBTZWxlY3RlZCBSZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFJlY29yZExpc3RNb2RhbFJlc3VsdFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IFJlY29yZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTZWxlY3RlZFJlY29yZChkYXRhOiBSZWNvcmRMaXN0TW9kYWxSZXN1bHQpOiBSZWNvcmQge1xuICAgICAgICBsZXQgaWQgPSAnJztcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YS5zZWxlY3Rpb24uc2VsZWN0ZWQpLnNvbWUoc2VsZWN0ZWQgPT4ge1xuICAgICAgICAgICAgaWQgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcmVjb3JkOiBSZWNvcmQgPSBudWxsO1xuXG4gICAgICAgIGRhdGEucmVjb3Jkcy5zb21lKHJlYyA9PiB7XG4gICAgICAgICAgICBpZiAocmVjICYmIHJlYy5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZWNvcmQgPSByZWM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSByZWNvcmQgYXMgdGhlIHNlbGVjdGVkIGl0ZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldEl0ZW0ocmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVsYXRlTmFtZSA9IHRoaXMuZ2V0UmVsYXRlRmllbGROYW1lKCk7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7XG4gICAgICAgICAgICBpZDogcmVjb3JkPy5hdHRyaWJ1dGVzPy5pZCxcbiAgICAgICAgICAgIFtyZWxhdGVOYW1lXTogcmVjb3JkPy5hdHRyaWJ1dGVzW3JlbGF0ZU5hbWVdXG4gICAgICAgIH0gYXMgT2JqZWN0TWFwO1xuXG4gICAgICAgIGNvbnN0IGluTGlzdCA9IHRoaXMuaXNJbkxpc3QodGhpcy5zZWxlY3RlZFZhbHVlcywgbmV3SXRlbSk7XG4gICAgICAgIGlmIChpbkxpc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMucHVzaChuZXdJdGVtKVxuICAgICAgICB0aGlzLmFkZEN1cnJlbnRseVNlbGVjdGVkVG9PcHRpb25zKHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5vbkFkZCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRDdXJyZW50bHlTZWxlY3RlZFRvT3B0aW9ucyhmaWx0ZXJlZE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCF0aGlzPy5zZWxlY3RlZFZhbHVlcyB8fCAhdGhpcz8uc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzLmZvckVhY2goc2VsZWN0ZWRWYWx1ZSA9PiB7XG4gICAgICAgICAgICBsZXQgZm91bmQgPSB0aGlzLmlzSW5MaXN0KGZpbHRlcmVkT3B0aW9ucywgc2VsZWN0ZWRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChmb3VuZCA9PT0gZmFsc2UgJiYgc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaXNJbkxpc3QoZmlsdGVyZWRPcHRpb25zOiBBdHRyaWJ1dGVNYXBbXSwgc2VsZWN0ZWRWYWx1ZTogQXR0cmlidXRlTWFwKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlXG5cbiAgICAgICAgZmlsdGVyZWRPcHRpb25zLnNvbWUoKHZhbHVlOiBBdHRyaWJ1dGVNYXApID0+IHtcblxuICAgICAgICAgICAgaWYgKHZhbHVlPy5pZCA9PT0gc2VsZWN0ZWRWYWx1ZT8uaWQpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlU2VsZWN0QWxsKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB2aXNpYmxlT3B0aW9ucyA9IHRoaXM/LnRhZz8udmlzaWJsZU9wdGlvbnMoKSA/PyBbXTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXNLZXlzID0gKHRoaXM/LnNlbGVjdGVkVmFsdWVzID8/IFtdKS5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKTtcblxuICAgICAgICBpZiAoIXZpc2libGVPcHRpb25zLmxlbmd0aCB8fCAhc2VsZWN0ZWRWYWx1ZXNLZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aXNpYmxlT3B0aW9ucy5sZW5ndGggPiBzZWxlY3RlZFZhbHVlc0tleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFsbCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSB2aXNpYmxlT3B0aW9ucy5ldmVyeShpdGVtID0+IHNlbGVjdGVkVmFsdWVzS2V5cy5pbmNsdWRlcyhpdGVtLnZhbHVlKSk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5pdE1vZHVsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTEgdy0xMDAgbXItMVwiPlxuICAgICAgICAgICAgPHAtbXVsdGlTZWxlY3RcbiAgICAgICAgICAgICAgICAjdGFnXG4gICAgICAgICAgICAgICAgW29wdGlvbnNdPVwidGhpcy5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVzXCJcbiAgICAgICAgICAgICAgICBbb3B0aW9uTGFiZWxdPVwiZ2V0UmVsYXRlRmllbGROYW1lKClcIlxuICAgICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJvbkFkZCgpXCJcbiAgICAgICAgICAgICAgICAob25MYXp5TG9hZCk9XCJvbkZpbHRlcigpXCJcbiAgICAgICAgICAgICAgICAob25SZW1vdmUpPVwib25SZW1vdmUoKVwiXG4gICAgICAgICAgICAgICAgKG9uUGFuZWxTaG93KT1cIm9uUGFuZWxTaG93KClcIlxuICAgICAgICAgICAgICAgIChvblBhbmVsSGlkZSk9XCJyZXNldEZ1bmN0aW9uKClcIlxuICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlckxhYmVsXCJcbiAgICAgICAgICAgICAgICBbc2VsZWN0ZWRJdGVtc0xhYmVsXT1cIid7MH0gJyArIHNlbGVjdGVkSXRlbXNMYWJlbFwiXG4gICAgICAgICAgICAgICAgW2VtcHR5RmlsdGVyTWVzc2FnZV09XCJlbXB0eUZpbHRlckxhYmVsXCJcbiAgICAgICAgICAgICAgICBbZW1wdHlNZXNzYWdlXT1cImVtcHR5RmlsdGVyTGFiZWxcIlxuICAgICAgICAgICAgICAgIFttYXhTZWxlY3RlZExhYmVsc109XCJtYXhTZWxlY3RlZExhYmVsc1wiXG4gICAgICAgICAgICAgICAgW3N0eWxlQ2xhc3NdPVwiJ3ctMTAwICcgKyBnZXRJbnZhbGlkQ2xhc3MoKVwiXG4gICAgICAgICAgICAgICAgW3Nob3dUb2dnbGVBbGxdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW3NlbGVjdEFsbF09XCJzZWxlY3RBbGxcIlxuICAgICAgICAgICAgICAgIFthdXRvT3B0aW9uRm9jdXNdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIFthdXRvZm9jdXNGaWx0ZXJdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIFtmb2N1c09uSG92ZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW3Nob3dDbGVhcl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAob25DbGVhcik9XCJvbkNsZWFyKClcIlxuICAgICAgICAgICAgICAgIFtmaWx0ZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW2xhenldPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW2RhdGFLZXldPVwiJ2lkJ1wiXG4gICAgICAgICAgICAgICAgW2ZpbHRlckJ5XT1cImdldFJlbGF0ZUZpZWxkTmFtZSgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiZHJvcGRvd25pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGltYWdlPVwiZG93bl9jYXJyZXRcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiY2hlY2tpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGltYWdlPVwiY2hlY2tib3hfY3Jvc3NcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJmaWx0ZXJcIiBsZXQtb3B0aW9ucz1cIm9wdGlvbnNcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1jaGVja2JveCBwLWNvbXBvbmVudFwiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWhpZGRlbi1hY2Nlc3NpYmxlXCIgZGF0YS1wLWhpZGRlbi1hY2Nlc3NpYmxlPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiQWxsIGl0ZW1zIHVuc2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiY2hlY2tib3hcIiBjbGFzcz1cInAtY2hlY2tib3gtYm94XCIgYXJpYS1jaGVja2VkPVwiZmFsc2VcIiAoY2xpY2spPVwib25TZWxlY3RBbGwoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGltYWdlPVwiY2hlY2tib3hfY3Jvc3NcIiAqbmdJZj1cInNlbGVjdEFsbFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtZmlsdGVyLWNvbnRhaW5lclwiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjZHJvcGRvd25GaWx0ZXJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwSW5wdXRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInAtbXVsdGlzZWxlY3QtZmlsdGVyIHAtaW5wdXR0ZXh0IHAtY29tcG9uZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpbHRlclZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwib25GaWx0ZXJJbnB1dCgkZXZlbnQpO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtbXVsdGlzZWxlY3QtZmlsdGVyLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBpbWFnZT1cInNlYXJjaFwiIGNsYXNzPVwicC1lbGVtZW50IHAtZHJvcGRvd24tZmlsdGVyLXNlYXJjaC1pY29uXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG5cblxuXG4gICAgICAgICAgICA8L3AtbXVsdGlTZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwic2VsZWN0QnV0dG9uXCI+XG4gICAgICAgICAgICA8L3Njcm0tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuXG5cblxuIl19