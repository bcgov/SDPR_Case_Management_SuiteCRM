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
import { emptyObject } from 'common';
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
import { Dropdown } from "primeng/dropdown";
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
import * as i11 from "primeng/api";
import * as i12 from "../../../../components/image/image.component";
import * as i13 from "primeng/dropdown";
import * as i14 from "primeng/inputtext";
const _c0 = ["tag"];
const _c1 = ["dropdownFilterInput"];
function RelateEditFieldComponent_ng_container_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 8);
} }
function RelateEditFieldComponent_ng_container_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function RelateEditFieldComponent_ng_container_1_ng_template_5_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(1, "input", 10, 11);
    i0.ɵɵlistener("ngModelChange", function RelateEditFieldComponent_ng_container_1_ng_template_5_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.filterValue = $event); })("keyup", function RelateEditFieldComponent_ng_container_1_ng_template_5_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.onFilterInput($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "scrm-image", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r3.filterValue);
} }
function RelateEditFieldComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2)(2, "p-dropdown", 3, 4);
    i0.ɵɵlistener("ngModelChange", function RelateEditFieldComponent_ng_container_1_Template_p_dropdown_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.selectedValue = $event); })("onChange", function RelateEditFieldComponent_ng_container_1_Template_p_dropdown_onChange_2_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.onAdd($event.value)); })("onLazyLoad", function RelateEditFieldComponent_ng_container_1_Template_p_dropdown_onLazyLoad_2_listener() { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.onFilter()); })("onShow", function RelateEditFieldComponent_ng_container_1_Template_p_dropdown_onShow_2_listener() { i0.ɵɵrestoreView(_r11); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.focusFilterInput()); })("onHide", function RelateEditFieldComponent_ng_container_1_Template_p_dropdown_onHide_2_listener() { i0.ɵɵrestoreView(_r11); const _r1 = i0.ɵɵreference(3); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.resetFunction(_r1.options)); })("onClear", function RelateEditFieldComponent_ng_container_1_Template_p_dropdown_onClear_2_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.onClear($event)); });
    i0.ɵɵtemplate(4, RelateEditFieldComponent_ng_container_1_ng_template_4_Template, 1, 0, "ng-template", 5);
    i0.ɵɵtemplate(5, RelateEditFieldComponent_ng_container_1_ng_template_5_Template, 4, 1, "ng-template", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div");
    i0.ɵɵelement(7, "scrm-button", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("options", ctx_r0.options)("ngModel", ctx_r0.selectedValue)("optionLabel", ctx_r0.getRelateFieldName())("emptyMessage", ctx_r0.emptyFilterLabel)("emptyFilterMessage", ctx_r0.emptyFilterLabel)("placeholder", ctx_r0.placeholderLabel)("autoOptionFocus", false)("autofocusFilter", false)("focusOnHover", true)("filter", true)("lazy", true)("dataKey", "id")("filterBy", ctx_r0.getRelateFieldName())("showClear", true)("styleClass", "w-100 " + ctx_r0.getInvalidClass());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("config", ctx_r0.selectButton);
} }
class RelateEditFieldComponent extends BaseRelateComponent {
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
        this.selectedValue = {};
        this.placeholderLabel = '';
        this.emptyFilterLabel = '';
        this.filterValue = '';
    }
    /**
     * On init handler
     */
    ngOnInit() {
        super.ngOnInit();
        this.init();
        this.getTranslatedLabels();
        this.selectButton = {
            klass: ['btn', 'btn-sm', 'btn-outline-secondary', 'm-0', 'border-0'],
            onClick: () => {
                this.showSelectModal();
            },
            icon: 'cursor'
        };
    }
    init() {
        super.init();
        this.initValue();
        const idFieldName = this.getRelateIdField();
        if (idFieldName && this.record && this.record.fields && this.record.fields[idFieldName]) {
            this.idField = this.record.fields[idFieldName];
        }
    }
    initValue() {
        if (!this.field.valueObject) {
            this.selectedValue = {};
            this.field.formControl.setValue('');
            return;
        }
        if (!this.field.valueObject.id) {
            this.selectedValue = {};
            this.field.formControl.setValue('');
            return;
        }
        this.selectedValue = this.field.valueObject;
        this.options = [this.field.valueObject];
    }
    /**
     * Handle newly added item
     *
     * @param {object} item added
     */
    onAdd(item) {
        if (item) {
            const relateName = this.getRelateFieldName();
            this.setValue(item.id, item[relateName]);
            return;
        }
        this.setValue('', '');
        this.selectedValue = {};
        return;
    }
    /**
     * Handle item removal
     */
    onRemove() {
        this.setValue('', '');
        this.selectedValue = {};
        this.options = [];
    }
    onClear(event) {
        this.selectedValue = {};
        this.filterValue = '';
        this.options = [];
        this.onRemove();
    }
    onFilter() {
        const relateName = this.getRelateFieldName();
        this.filterValue = this.filterValue ?? '';
        const matches = this.filterValue.match(/^\s*$/g);
        if (matches && matches.length) {
            this.filterValue = '';
        }
        let term = this.filterValue;
        this.search(term).pipe(take(1), map(data => data.filter(item => item[relateName] !== '')), map(filteredData => filteredData.map(item => ({
            id: item.id,
            [relateName]: item[relateName]
        })))).subscribe(filteredOptions => {
            this.options = filteredOptions;
            if (!this?.selectedValue || !this?.selectedValue?.id) {
                return;
            }
            let found = false;
            filteredOptions.some(value => {
                if (value?.id === this.selectedValue.id) {
                    found = true;
                    return true;
                }
                return false;
            });
            if (found === false && this.selectedValue) {
                this.options.push(this.selectedValue);
            }
        });
    }
    resetFunction(options) {
        this.filterValue = '';
        this.options = [];
        if (!emptyObject(this.selectedValue)) {
            this.options = [this.selectedValue];
        }
    }
    onFilterInput(event) {
        event.stopPropagation();
        this.tag.onLazyLoad.emit();
    }
    /**
     * Set value on field
     *
     * @param {string} id to set
     * @param {string} relateValue to set
     */
    setValue(id, relateValue) {
        const relate = this.buildRelate(id, relateValue);
        this.field.value = relateValue;
        this.field.valueObject = relate;
        this.field.formControl.setValue(relateValue);
        this.field.formControl.markAsDirty();
        if (this.idField) {
            this.idField.value = id;
            this.idField.formControl.setValue(id);
            this.idField.formControl.markAsDirty();
        }
        if (relateValue) {
            const relateName = this.getRelateFieldName();
            this.selectedValue = { id: id, [relateName]: relateValue };
        }
        this.options = [this.selectedValue];
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
            this.setItem(record);
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
        this.tag.writeValue(record.attributes);
        this.onAdd(record.attributes);
    }
    getTranslatedLabels() {
        this.placeholderLabel = this.languages.getAppString('LBL_SELECT_ITEM') || '';
        this.emptyFilterLabel = this.languages.getAppString('ERR_SEARCH_NO_RESULTS') || '';
    }
    focusFilterInput() {
        this.dropdownFilterInput.nativeElement.focus();
    }
    static { this.ɵfac = function RelateEditFieldComponent_Factory(t) { return new (t || RelateEditFieldComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.RelateService), i0.ɵɵdirectiveInject(i4.ModuleNameMapper), i0.ɵɵdirectiveInject(i5.NgbModal), i0.ɵɵdirectiveInject(i6.FieldLogicManager), i0.ɵɵdirectiveInject(i7.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RelateEditFieldComponent, selectors: [["scrm-relate-edit"]], viewQuery: function RelateEditFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tag = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdownFilterInput = _t.first);
        } }, features: [i0.ɵɵProvidersFeature([RelateService]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "d-flex", "align-items-center"], [4, "ngIf"], [1, "flex-grow-1", "w-100", "mr-1"], [3, "options", "ngModel", "optionLabel", "emptyMessage", "emptyFilterMessage", "placeholder", "autoOptionFocus", "autofocusFilter", "focusOnHover", "filter", "lazy", "dataKey", "filterBy", "showClear", "styleClass", "ngModelChange", "onChange", "onLazyLoad", "onShow", "onHide", "onClear"], ["tag", ""], ["pTemplate", "dropdownicon"], ["pTemplate", "filter"], [3, "config"], ["image", "down_carret"], [1, "p-dropdown-filter-container", 3, "click"], ["type", "text", "pInputText", "", "autocomplete", "off", "tabindex", "0", 1, "p-dropdown-filter", "p-component", 3, "ngModel", "ngModelChange", "keyup"], ["dropdownFilterInput", ""], ["image", "search", 1, "p-element", "p-dropdown-filter-search-icon"]], template: function RelateEditFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, RelateEditFieldComponent_ng_container_1_Template, 8, 16, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.initModule);
        } }, dependencies: [i8.NgIf, i9.DefaultValueAccessor, i9.NgControlStatus, i9.NgModel, i10.ButtonComponent, i11.PrimeTemplate, i12.ImageComponent, i13.Dropdown, i14.InputText], encapsulation: 2 }); }
}
export { RelateEditFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RelateEditFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-relate-edit', providers: [RelateService], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"d-flex align-items-center\">\n    <ng-container *ngIf=\"initModule\">\n        <div class=\"flex-grow-1 w-100 mr-1\">\n            <p-dropdown\n                #tag\n                [options]=\"options\"\n                [(ngModel)]=\"selectedValue\"\n                [optionLabel]=\"getRelateFieldName()\"\n                (onChange)=\"onAdd($event.value)\"\n                (onLazyLoad)=\"onFilter()\"\n                (onShow)=\"focusFilterInput()\"\n                (onHide)=\"resetFunction(tag.options)\"\n                [emptyMessage]=\"emptyFilterLabel\"\n                [emptyFilterMessage]=\"emptyFilterLabel\"\n                [placeholder]=\"placeholderLabel\"\n                [autoOptionFocus]=\"false\"\n                [autofocusFilter]=\"false\"\n                [focusOnHover] = \"true\"\n                [filter]=\"true\"\n                [lazy]=\"true\"\n                [dataKey]=\"'id'\"\n                [filterBy]=\"getRelateFieldName()\"\n                [showClear]=\"true\"\n                (onClear)=\"onClear($event)\"\n                [styleClass]=\"'w-100 ' + getInvalidClass()\"\n            >\n                <ng-template pTemplate=\"dropdownicon\">\n                    <scrm-image image=\"down_carret\"></scrm-image>\n                </ng-template>\n                <ng-template pTemplate=\"filter\" let-options=\"options\">\n\n                    <div class=\"p-dropdown-filter-container\" (click)=\"$event.stopPropagation()\">\n                        <input #dropdownFilterInput\n                               type=\"text\"\n                               pInputText\n                               autocomplete=\"off\"\n                               class=\"p-dropdown-filter p-component\"\n                               [(ngModel)]=\"filterValue\"\n                               (keyup)=\"onFilterInput($event)\"\n                               tabindex=\"0\">\n                        <scrm-image image=\"search\" class=\"p-element p-dropdown-filter-search-icon\"></scrm-image>\n                    </div>\n\n                </ng-template>\n            </p-dropdown>\n        </div>\n        <div>\n            <scrm-button [config]=\"selectButton\">\n            </scrm-button>\n        </div>\n    </ng-container>\n</div>\n\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.RelateService }, { type: i4.ModuleNameMapper }, { type: i5.NgbModal }, { type: i6.FieldLogicManager }, { type: i7.FieldLogicDisplayManager }]; }, { tag: [{
            type: ViewChild,
            args: ['tag']
        }], dropdownFilterInput: [{
            type: ViewChild,
            args: ['dropdownFilterInput']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvcmVsYXRlL3RlbXBsYXRlcy9lZGl0L3JlbGF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL3JlbGF0ZS90ZW1wbGF0ZXMvZWRpdC9yZWxhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQWdDLFdBQVcsRUFBZ0IsTUFBTSxRQUFRLENBQUM7QUFDakYsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLCtFQUErRSxDQUFDO0FBQy9HLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZEQUE2RCxDQUFDO0FBQzlGLE9BQU8sRUFDSCx3QkFBd0IsRUFDM0IsTUFBTSxtR0FBbUcsQ0FBQztBQUMzRyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBSWhGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLFFBQVEs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QUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2RixDQUFDO0lBRUQsZ0JBQWdCO1FBQ1osSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNsRCxDQUFDO3lGQTlQUSx3QkFBd0I7b0VBQXhCLHdCQUF3Qjs7Ozs7Ozs4Q0FGdEIsQ0FBQyxhQUFhLENBQUM7WUN0QjlCLDhCQUF1QztZQUNuQyw0RkFpRGU7WUFDbkIsaUJBQU07O1lBbERhLGVBQWdCO1lBQWhCLHFDQUFnQjs7O1NEdUJ0Qix3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQU5wQyxTQUFTOzJCQUNJLGtCQUFrQixhQUdqQixDQUFDLGFBQWEsQ0FBQzt5UEFHUixHQUFHO2tCQUFwQixTQUFTO21CQUFDLEtBQUs7WUFDa0IsbUJBQW1CO2tCQUFwRCxTQUFTO21CQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0F0dHJpYnV0ZU1hcCwgQnV0dG9uSW50ZXJmYWNlLCBlbXB0eU9iamVjdCwgRmllbGQsIFJlY29yZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TmdiTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmFtZS1tYXBwZXIvbW9kdWxlLW5hbWUtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgICBSZWNvcmRMaXN0TW9kYWxDb21wb25lbnRcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9yZWNvcmQtbGlzdC1tb2RhbC9jb21wb25lbnRzL3JlY29yZC1saXN0LW1vZGFsL3JlY29yZC1saXN0LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VSZWxhdGVDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL2Jhc2UvYmFzZS1yZWxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtSZWxhdGVTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9yZWNvcmQvcmVsYXRlL3JlbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7XG4gICAgUmVjb3JkTGlzdE1vZGFsUmVzdWx0XG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLWxpc3QtbW9kYWwvY29tcG9uZW50cy9yZWNvcmQtbGlzdC1tb2RhbC9yZWNvcmQtbGlzdC1tb2RhbC5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5pbXBvcnQge21hcCwgdGFrZX0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQge0Ryb3Bkb3duLCBEcm9wZG93bkZpbHRlck9wdGlvbnN9IGZyb20gXCJwcmltZW5nL2Ryb3Bkb3duXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWxhdGUtZWRpdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlbGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbiAgICBwcm92aWRlcnM6IFtSZWxhdGVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBSZWxhdGVFZGl0RmllbGRDb21wb25lbnQgZXh0ZW5kcyBCYXNlUmVsYXRlQ29tcG9uZW50IHtcbiAgICBAVmlld0NoaWxkKCd0YWcnKSB0YWc6IERyb3Bkb3duO1xuICAgIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duRmlsdGVySW5wdXQnKSBkcm9wZG93bkZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xuICAgIHNlbGVjdEJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlO1xuICAgIGlkRmllbGQ6IEZpZWxkO1xuICAgIHNlbGVjdGVkVmFsdWU6IEF0dHJpYnV0ZU1hcCA9IHt9O1xuXG4gICAgcGxhY2Vob2xkZXJMYWJlbDogc3RyaW5nID0gJyc7XG4gICAgZW1wdHlGaWx0ZXJMYWJlbDogc3RyaW5nID0gJyc7XG4gICAgZmlsdGVyVmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICcnO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYW5ndWFnZXMgc2VydmljZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlRm9ybWF0dGVyIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVsYXRlU2VydmljZSBzZXJ2aWNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1vZHVsZU5hbWVNYXBwZXIgc2VydmljZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtb2RhbFNlcnZpY2Ugc2VydmljZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsb2dpY1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsb2dpY0Rpc3BsYXlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlczogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgcmVsYXRlU2VydmljZTogUmVsYXRlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIobGFuZ3VhZ2VzLCB0eXBlRm9ybWF0dGVyLCByZWxhdGVTZXJ2aWNlLCBtb2R1bGVOYW1lTWFwcGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBpbml0IGhhbmRsZXJcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5nZXRUcmFuc2xhdGVkTGFiZWxzKCk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RCdXR0b24gPSB7XG4gICAgICAgICAgICBrbGFzczogWydidG4nLCAnYnRuLXNtJywgJ2J0bi1vdXRsaW5lLXNlY29uZGFyeScsICdtLTAnLCAnYm9yZGVyLTAnXSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWxlY3RNb2RhbCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb246ICdjdXJzb3InXG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMuaW5pdFZhbHVlKCk7XG5cbiAgICAgICAgY29uc3QgaWRGaWVsZE5hbWUgPSB0aGlzLmdldFJlbGF0ZUlkRmllbGQoKTtcbiAgICAgICAgaWYgKGlkRmllbGROYW1lICYmIHRoaXMucmVjb3JkICYmIHRoaXMucmVjb3JkLmZpZWxkcyAmJiB0aGlzLnJlY29yZC5maWVsZHNbaWRGaWVsZE5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmlkRmllbGQgPSB0aGlzLnJlY29yZC5maWVsZHNbaWRGaWVsZE5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRWYWx1ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkLnZhbHVlT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkLnZhbHVlT2JqZWN0LmlkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuZmllbGQudmFsdWVPYmplY3Q7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFt0aGlzLmZpZWxkLnZhbHVlT2JqZWN0XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgbmV3bHkgYWRkZWQgaXRlbVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW0gYWRkZWRcbiAgICAgKi9cbiAgICBvbkFkZChpdGVtKTogdm9pZCB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICBjb25zdCByZWxhdGVOYW1lID0gdGhpcy5nZXRSZWxhdGVGaWVsZE5hbWUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoaXRlbS5pZCwgaXRlbVtyZWxhdGVOYW1lXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFZhbHVlKCcnLCAnJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgaXRlbSByZW1vdmFsXG4gICAgICovXG4gICAgb25SZW1vdmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoJycsICcnKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0ge307XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIG9uQ2xlYXIoZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0ge307XG4gICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgICAgIHRoaXMub25SZW1vdmUoKTtcbiAgICB9XG5cbiAgICBvbkZpbHRlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVsYXRlTmFtZSA9IHRoaXMuZ2V0UmVsYXRlRmllbGROYW1lKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB0aGlzLmZpbHRlclZhbHVlID8/ICcnO1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5maWx0ZXJWYWx1ZS5tYXRjaCgvXlxccyokL2cpO1xuICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0ZXJtID0gdGhpcy5maWx0ZXJWYWx1ZTtcbiAgICAgICAgdGhpcy5zZWFyY2godGVybSkucGlwZShcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBtYXAoZGF0YSA9PiBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW1bcmVsYXRlTmFtZV0gIT09ICcnKSksXG4gICAgICAgICAgICBtYXAoZmlsdGVyZWREYXRhID0+IGZpbHRlcmVkRGF0YS5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgIFtyZWxhdGVOYW1lXTogaXRlbVtyZWxhdGVOYW1lXVxuICAgICAgICAgICAgfSkpKVxuICAgICAgICApLnN1YnNjcmliZShmaWx0ZXJlZE9wdGlvbnMgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gZmlsdGVyZWRPcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXM/LnNlbGVjdGVkVmFsdWUgfHwgIXRoaXM/LnNlbGVjdGVkVmFsdWU/LmlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZpbHRlcmVkT3B0aW9ucy5zb21lKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWU/LmlkID09PSB0aGlzLnNlbGVjdGVkVmFsdWUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGZvdW5kID09PSBmYWxzZSAmJiB0aGlzLnNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucHVzaCh0aGlzLnNlbGVjdGVkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlc2V0RnVuY3Rpb24ob3B0aW9uczogRHJvcGRvd25GaWx0ZXJPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgICAgIGlmICghZW1wdHlPYmplY3QodGhpcy5zZWxlY3RlZFZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gW3RoaXMuc2VsZWN0ZWRWYWx1ZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZpbHRlcklucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHRoaXMudGFnLm9uTGF6eUxvYWQuZW1pdCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHZhbHVlIG9uIGZpZWxkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgdG8gc2V0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0ZVZhbHVlIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXRWYWx1ZShpZDogc3RyaW5nLCByZWxhdGVWYWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbGF0ZSA9IHRoaXMuYnVpbGRSZWxhdGUoaWQsIHJlbGF0ZVZhbHVlKTtcbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZSA9IHJlbGF0ZVZhbHVlO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlT2JqZWN0ID0gcmVsYXRlO1xuICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKHJlbGF0ZVZhbHVlKTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmlkRmllbGQpIHtcbiAgICAgICAgICAgIHRoaXMuaWRGaWVsZC52YWx1ZSA9IGlkO1xuICAgICAgICAgICAgdGhpcy5pZEZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKGlkKTtcbiAgICAgICAgICAgIHRoaXMuaWRGaWVsZC5mb3JtQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlbGF0ZVZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCByZWxhdGVOYW1lID0gdGhpcy5nZXRSZWxhdGVGaWVsZE5hbWUoKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHtpZDogaWQsIFtyZWxhdGVOYW1lXTogcmVsYXRlVmFsdWV9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gW3RoaXMuc2VsZWN0ZWRWYWx1ZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyByZWNvcmQgc2VsZWN0aW9uIG1vZGFsXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNob3dTZWxlY3RNb2RhbCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKFJlY29yZExpc3RNb2RhbENvbXBvbmVudCwge3NpemU6ICd4bCcsIHNjcm9sbGFibGU6IHRydWV9KTtcblxuICAgICAgICBtb2RhbC5jb21wb25lbnRJbnN0YW5jZS5tb2R1bGUgPSB0aGlzLmdldFJlbGF0ZWRNb2R1bGUoKTtcblxuICAgICAgICBtb2RhbC5yZXN1bHQudGhlbigoZGF0YTogUmVjb3JkTGlzdE1vZGFsUmVzdWx0KSA9PiB7XG5cbiAgICAgICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5zZWxlY3Rpb24gfHwgIWRhdGEuc2VsZWN0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZWNvcmQgPSB0aGlzLmdldFNlbGVjdGVkUmVjb3JkKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZXRJdGVtKHJlY29yZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBTZWxlY3RlZCBSZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFJlY29yZExpc3RNb2RhbFJlc3VsdFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IFJlY29yZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTZWxlY3RlZFJlY29yZChkYXRhOiBSZWNvcmRMaXN0TW9kYWxSZXN1bHQpOiBSZWNvcmQge1xuICAgICAgICBsZXQgaWQgPSAnJztcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YS5zZWxlY3Rpb24uc2VsZWN0ZWQpLnNvbWUoc2VsZWN0ZWQgPT4ge1xuICAgICAgICAgICAgaWQgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcmVjb3JkOiBSZWNvcmQgPSBudWxsO1xuXG4gICAgICAgIGRhdGEucmVjb3Jkcy5zb21lKHJlYyA9PiB7XG4gICAgICAgICAgICBpZiAocmVjICYmIHJlYy5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZWNvcmQgPSByZWM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSByZWNvcmQgYXMgdGhlIHNlbGVjdGVkIGl0ZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldEl0ZW0ocmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YWcud3JpdGVWYWx1ZShyZWNvcmQuYXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMub25BZGQocmVjb3JkLmF0dHJpYnV0ZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUcmFuc2xhdGVkTGFiZWxzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyTGFiZWwgPSB0aGlzLmxhbmd1YWdlcy5nZXRBcHBTdHJpbmcoJ0xCTF9TRUxFQ1RfSVRFTScpIHx8ICcnO1xuICAgICAgICB0aGlzLmVtcHR5RmlsdGVyTGFiZWwgPSB0aGlzLmxhbmd1YWdlcy5nZXRBcHBTdHJpbmcoJ0VSUl9TRUFSQ0hfTk9fUkVTVUxUUycpIHx8ICcnO1xuICAgIH1cblxuICAgIGZvY3VzRmlsdGVySW5wdXQoKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25GaWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKClcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbml0TW9kdWxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMSB3LTEwMCBtci0xXCI+XG4gICAgICAgICAgICA8cC1kcm9wZG93blxuICAgICAgICAgICAgICAgICN0YWdcbiAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVcIlxuICAgICAgICAgICAgICAgIFtvcHRpb25MYWJlbF09XCJnZXRSZWxhdGVGaWVsZE5hbWUoKVwiXG4gICAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cIm9uQWRkKCRldmVudC52YWx1ZSlcIlxuICAgICAgICAgICAgICAgIChvbkxhenlMb2FkKT1cIm9uRmlsdGVyKClcIlxuICAgICAgICAgICAgICAgIChvblNob3cpPVwiZm9jdXNGaWx0ZXJJbnB1dCgpXCJcbiAgICAgICAgICAgICAgICAob25IaWRlKT1cInJlc2V0RnVuY3Rpb24odGFnLm9wdGlvbnMpXCJcbiAgICAgICAgICAgICAgICBbZW1wdHlNZXNzYWdlXT1cImVtcHR5RmlsdGVyTGFiZWxcIlxuICAgICAgICAgICAgICAgIFtlbXB0eUZpbHRlck1lc3NhZ2VdPVwiZW1wdHlGaWx0ZXJMYWJlbFwiXG4gICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyTGFiZWxcIlxuICAgICAgICAgICAgICAgIFthdXRvT3B0aW9uRm9jdXNdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIFthdXRvZm9jdXNGaWx0ZXJdPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIFtmb2N1c09uSG92ZXJdID0gXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBbZmlsdGVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIFtsYXp5XT1cInRydWVcIlxuICAgICAgICAgICAgICAgIFtkYXRhS2V5XT1cIidpZCdcIlxuICAgICAgICAgICAgICAgIFtmaWx0ZXJCeV09XCJnZXRSZWxhdGVGaWVsZE5hbWUoKVwiXG4gICAgICAgICAgICAgICAgW3Nob3dDbGVhcl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAob25DbGVhcik9XCJvbkNsZWFyKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtzdHlsZUNsYXNzXT1cIid3LTEwMCAnICsgZ2V0SW52YWxpZENsYXNzKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJkcm9wZG93bmljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgaW1hZ2U9XCJkb3duX2NhcnJldFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJmaWx0ZXJcIiBsZXQtb3B0aW9ucz1cIm9wdGlvbnNcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1kcm9wZG93bi1maWx0ZXItY29udGFpbmVyXCIgKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICNkcm9wZG93bkZpbHRlcklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBJbnB1dFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicC1kcm9wZG93bi1maWx0ZXIgcC1jb21wb25lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmlsdGVyVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJvbkZpbHRlcklucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgaW1hZ2U9XCJzZWFyY2hcIiBjbGFzcz1cInAtZWxlbWVudCBwLWRyb3Bkb3duLWZpbHRlci1zZWFyY2gtaWNvblwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9wLWRyb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzY3JtLWJ1dHRvbiBbY29uZmlnXT1cInNlbGVjdEJ1dHRvblwiPlxuICAgICAgICAgICAgPC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuIl19