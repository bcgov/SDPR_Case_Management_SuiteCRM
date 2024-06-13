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
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { deepClone, emptyObject } from 'common';
import { LanguageStore } from '../../store/language/language.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "../image/image.component";
import * as i5 from "../dropdown-submenu/dropdown-submenu.component";
import * as i6 from "../label/label.component";
function DropdownButtonComponent_scrm_image_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 7);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("image", ctx_r1.config.icon)("klass", ctx_r1.config.iconKlass || "");
} }
function DropdownButtonComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.config.label, " ");
} }
function DropdownButtonComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-label", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", ctx_r3.config.labelKey);
} }
function DropdownButtonComponent_ng_container_7_div_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { item: a0 }; };
function DropdownButtonComponent_ng_container_7_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DropdownButtonComponent_ng_container_7_div_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    i0.ɵɵnextContext(3);
    const _r6 = i0.ɵɵreference(10);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, item_r13));
} }
function DropdownButtonComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11);
    i0.ɵɵelement(2, "scrm-label", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, DropdownButtonComponent_ng_container_7_div_1_ng_container_3_Template, 2, 4, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const section_r9 = ctx.$implicit;
    const isLast_r10 = ctx.last;
    const isFirst_r11 = ctx.first;
    let tmp_3_0;
    let tmp_4_0;
    i0.ɵɵclassProp("section-split", !isFirst_r11)("last-section", isLast_r10)("first-section", isFirst_r11);
    i0.ɵɵproperty("ngClass", (tmp_3_0 = section_r9.klass) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", (tmp_4_0 = (tmp_4_0 = section_r9.labelKey) !== null && tmp_4_0 !== undefined ? tmp_4_0 : section_r9.label) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", section_r9.items);
} }
function DropdownButtonComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DropdownButtonComponent_ng_container_7_div_1_Template, 4, 9, "div", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.sections);
} }
function DropdownButtonComponent_ng_container_8_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DropdownButtonComponent_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DropdownButtonComponent_ng_container_8_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    i0.ɵɵnextContext(2);
    const _r6 = i0.ɵɵreference(10);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, item_r17));
} }
function DropdownButtonComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DropdownButtonComponent_ng_container_8_ng_container_1_Template, 2, 4, "ng-container", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.buttons);
} }
function DropdownButtonComponent_ng_template_9_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "scrm-image", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext(2).item;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("image", item_r19.icon)("klass", item_r19.iconKlass || "");
} }
function DropdownButtonComponent_ng_template_9_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext(2).item;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r19.label, " ");
} }
function DropdownButtonComponent_ng_template_9_ng_container_0_ng_container_6_scrm_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-label", 18);
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext(3).item;
    let tmp_1_0;
    i0.ɵɵproperty("labelKey", item_r19.labelKey)("module", (tmp_1_0 = item_r19.labelModule) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "");
} }
function DropdownButtonComponent_ng_template_9_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DropdownButtonComponent_ng_template_9_ng_container_0_ng_container_6_scrm_label_1_Template, 1, 2, "scrm-label", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext(2).item;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r19 && item_r19.labelKey);
} }
function DropdownButtonComponent_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 14);
    i0.ɵɵlistener("click", function DropdownButtonComponent_ng_template_9_ng_container_0_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r32); const item_r19 = i0.ɵɵnextContext().item; const ctx_r30 = i0.ɵɵnextContext(); const _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(item_r19 && ctx_r30.click(item_r19.onClick, _r0)); });
    i0.ɵɵelementStart(2, "div", 15);
    i0.ɵɵtemplate(3, DropdownButtonComponent_ng_template_9_ng_container_0_div_3_Template, 2, 2, "div", 4);
    i0.ɵɵelementStart(4, "div", 16);
    i0.ɵɵtemplate(5, DropdownButtonComponent_ng_template_9_ng_container_0_ng_container_5_Template, 2, 1, "ng-container", 4);
    i0.ɵɵtemplate(6, DropdownButtonComponent_ng_template_9_ng_container_0_ng_container_6_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext().item;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", item_r19 && item_r19.klass);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r19.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r19 && item_r19.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r19 && !item_r19.label && item_r19.labelKey);
} }
function DropdownButtonComponent_ng_template_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "scrm-dropdown-submenu", 19);
    i0.ɵɵlistener("item-clicked", function DropdownButtonComponent_ng_template_9_ng_container_1_Template_scrm_dropdown_submenu_item_clicked_1_listener() { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(2); const _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx_r34.close(_r0)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r19 = i0.ɵɵnextContext().item;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("item", item_r19);
} }
function DropdownButtonComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DropdownButtonComponent_ng_template_9_ng_container_0_Template, 7, 4, "ng-container", 4);
    i0.ɵɵtemplate(1, DropdownButtonComponent_ng_template_9_ng_container_1_Template, 2, 1, "ng-container", 4);
} if (rf & 2) {
    const item_r19 = ctx.item;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", item_r19 && !ctx_r7.isDropdown(item_r19));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r19 && ctx_r7.isDropdown(item_r19));
} }
class DropdownButtonComponent {
    constructor(language) {
        this.language = language;
        this.disabled = false;
        this.autoClose = true;
        this.buttons = [];
        this.sections = [];
        this.sectionsEnabled = false;
    }
    isDropdown(item) {
        if (!item) {
            return false;
        }
        return 'items' in item;
    }
    click(onClick, dropdown) {
        onClick();
        dropdown.close();
    }
    close(dropdown) {
        dropdown.close();
    }
    ngOnInit() {
        if (this.config && !this.config.placement) {
            this.config.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
        }
        this.sections = [];
        const sectionsConfig = this.config?.sections ?? {};
        if (emptyObject(sectionsConfig)) {
            this.buttons = [...this.config?.items ?? []];
            this.sectionsEnabled = false;
            return;
        }
        this.sectionsEnabled = true;
        this.preprocessItems(this.config?.items ?? []);
    }
    preprocessItems(items) {
        const sectionsConfig = this.config?.sections ?? {};
        const sections = {};
        if (!items || !items.length) {
            return;
        }
        items.forEach(item => {
            const sectionKey = item?.section ?? 'default';
            let section = this.getSection(sectionsConfig, sectionKey, sections);
            section.items.push(item);
        });
        Object.keys(sectionsConfig).forEach(sectionKey => {
            const section = sections[sectionKey];
            if (section && section.items && section.items.length) {
                this.sections.push(section);
            }
        });
    }
    /**
     * Get section from map, initialize if not on map
     * @param sectionsConfig
     * @param sectionKey
     * @param sections
     * @protected
     */
    getSection(sectionsConfig, sectionKey, sections) {
        const sectionConfig = sectionsConfig[sectionKey] ?? {};
        let section = sections[sectionKey] ?? null;
        if (section === null) {
            section = deepClone(sectionConfig);
            section.items = [];
            sections[sectionKey] = section;
        }
        return section;
    }
    getPlacement() {
        if (this.config && !this.config.placement) {
            return ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
        }
        return this.config.placement;
    }
    static { this.ɵfac = function DropdownButtonComponent_Factory(t) { return new (t || DropdownButtonComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropdownButtonComponent, selectors: [["scrm-dropdown-button"]], inputs: { config: "config", disabled: "disabled", autoClose: "autoClose" }, decls: 11, vars: 13, consts: [["ngbDropdown", "", 1, "d-inline-block", "dropdown-button", 3, "autoClose", "placement", "ngClass"], ["dropDown", "ngbDropdown"], ["ngbDropdownToggle", "", 3, "disabled", "ngClass", "title"], [3, "image", "klass", 4, "ngIf"], [4, "ngIf"], ["ngbDropdownMenu", ""], ["buttonTemplate", ""], [3, "image", "klass"], [3, "labelKey"], [3, "ngClass", "section-split", "last-section", "first-section", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "dropdown-menu-item-header"], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["ngbDropdownItem", "", 3, "ngClass", "click"], [1, "d-flex", "align-items-center"], [1, "dropdown-item-label", "flex-grow-1"], [3, "labelKey", "module", 4, "ngIf"], [3, "labelKey", "module"], [3, "item", "item-clicked"]], template: function DropdownButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0, 1)(2, "button", 2);
            i0.ɵɵtemplate(3, DropdownButtonComponent_scrm_image_3_Template, 1, 2, "scrm-image", 3);
            i0.ɵɵtemplate(4, DropdownButtonComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
            i0.ɵɵtemplate(5, DropdownButtonComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵtemplate(7, DropdownButtonComponent_ng_container_7_Template, 2, 1, "ng-container", 4);
            i0.ɵɵtemplate(8, DropdownButtonComponent_ng_container_8_Template, 2, 1, "ng-container", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(9, DropdownButtonComponent_ng_template_9_Template, 2, 2, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵclassProp("sectioned-dropdown-menu", ctx.sectionsEnabled);
            i0.ɵɵproperty("autoClose", ctx.autoClose)("placement", ctx.getPlacement())("ngClass", ctx.config.wrapperKlass);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.disabled)("ngClass", ctx.config.klass)("title", ctx.language.getFieldLabel(ctx.config.titleKey) || "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.config.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.config.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.config.label && ctx.config.labelKey);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.sectionsEnabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.sectionsEnabled);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.NgbDropdown, i3.NgbDropdownToggle, i3.NgbDropdownMenu, i3.NgbDropdownItem, i4.ImageComponent, i5.DropdownSubmenuComponent, i6.LabelComponent], encapsulation: 2, changeDetection: 0 }); }
}
export { DropdownButtonComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownButtonComponent, [{
        type: Component,
        args: [{ selector: 'scrm-dropdown-button', changeDetection: ChangeDetectionStrategy.OnPush, template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div ngbDropdown\n     [autoClose]=\"autoClose\"\n     [placement]=\"getPlacement()\"\n     #dropDown=\"ngbDropdown\"\n     class=\"d-inline-block dropdown-button\"\n     [class.sectioned-dropdown-menu]=\"sectionsEnabled\"\n     [ngClass]=\"config.wrapperKlass\">\n    <button [disabled]=\"disabled\"\n            [ngClass]=\"config.klass\"\n            [title]=\"language.getFieldLabel(config.titleKey) || ''\"\n            ngbDropdownToggle>\n\n        <scrm-image *ngIf=\"config.icon\"\n                    [image]=\"config.icon\"\n                    [klass]=\"config.iconKlass || ''\"></scrm-image>\n\n        <ng-container *ngIf=\"config.label\">\n            {{ config.label }}\n        </ng-container>\n\n        <ng-container *ngIf=\"!config.label && config.labelKey\">\n            <scrm-label [labelKey]=\"config.labelKey\"></scrm-label>\n        </ng-container>\n\n    </button>\n    <div ngbDropdownMenu>\n\n        <ng-container *ngIf=\"sectionsEnabled\">\n\n            <div *ngFor=\"let section of sections; last as isLast; first as isFirst\"\n                 [ngClass]=\"section.klass ?? ''\"\n                 [class.section-split]=\"!isFirst\"\n                 [class.last-section]=\"isLast\"\n                 [class.first-section]=\"isFirst\">\n                <div class=\"dropdown-menu-item-header\">\n                    <scrm-label [labelKey]=\"section.labelKey ?? section.label ?? ''\" ></scrm-label>\n                </div>\n\n                <ng-container *ngFor=\"let item of section.items; let last = last\">\n                    <ng-container *ngTemplateOutlet=\"buttonTemplate; context: { item: item }\"></ng-container>\n                </ng-container>\n\n            </div>\n\n        </ng-container>\n\n        <ng-container *ngIf=\"!sectionsEnabled\">\n            <ng-container *ngFor=\"let item of buttons\">\n                <ng-container *ngTemplateOutlet=\"buttonTemplate; context: { item: item }\"></ng-container>\n            </ng-container>\n        </ng-container>\n\n    </div>\n</div>\n\n\n<ng-template #buttonTemplate let-item=\"item\">\n\n    <ng-container *ngIf=\"item && !isDropdown(item)\">\n        <a ngbDropdownItem [ngClass]=\"item && item.klass\" (click)=\"item && click(item.onClick, dropDown)\">\n            <div class=\"d-flex align-items-center\">\n                <div *ngIf=\"item.icon\">\n                    <scrm-image [image]=\"item.icon\" [klass]=\"item.iconKlass || ''\"></scrm-image>\n                </div>\n                <div class=\"dropdown-item-label flex-grow-1\">\n                    <ng-container *ngIf=\"item && item.label\">\n                        {{ item.label }}\n                    </ng-container>\n                    <ng-container *ngIf=\"item && !item.label && item.labelKey\">\n                        <scrm-label *ngIf=\"item && item.labelKey\" [labelKey]=\"item.labelKey\"\n                                    [module]=\"item.labelModule ?? ''\"></scrm-label>\n                    </ng-container>\n                </div>\n            </div>\n        </a>\n    </ng-container>\n\n    <ng-container *ngIf=\"item && isDropdown(item)\">\n        <scrm-dropdown-submenu (item-clicked)=\"close(dropDown)\" [item]=\"item\"></scrm-dropdown-submenu>\n    </ng-container>\n\n</ng-template>\n" }]
    }], function () { return [{ type: i1.LanguageStore }]; }, { config: [{
            type: Input
        }], disabled: [{
            type: Input
        }], autoClose: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3duLWJ1dHRvbi9kcm9wZG93bi1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24tYnV0dG9uL2Ryb3Bkb3duLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUVILFNBQVMsRUFJVCxXQUFXLEVBQ2QsTUFBTSxRQUFRLENBQUM7QUFHaEIsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7Ozs7SUNFMUQsZ0NBRTBEOzs7SUFEOUMsMENBQXFCLHdDQUFBOzs7SUFHakMsNkJBQW1DO0lBQy9CLFlBQ0o7SUFBQSwwQkFBZTs7O0lBRFgsZUFDSjtJQURJLG9EQUNKOzs7SUFFQSw2QkFBdUQ7SUFDbkQsZ0NBQXNEO0lBQzFELDBCQUFlOzs7SUFEQyxlQUE0QjtJQUE1QixpREFBNEI7OztJQWtCaEMsd0JBQXlGOzs7O0lBRDdGLDZCQUFrRTtJQUM5RCwrSEFBeUY7SUFDN0YsMEJBQWU7Ozs7O0lBREksZUFBa0M7SUFBbEMsc0NBQWtDLGlFQUFBOzs7SUFWekQsK0JBSXFDLGNBQUE7SUFFN0IsZ0NBQStFO0lBQ25GLGlCQUFNO0lBRU4sZ0hBRWU7SUFFbkIsaUJBQU07Ozs7Ozs7SUFYRCw2Q0FBZ0MsNEJBQUEsOEJBQUE7SUFEaEMsdUdBQStCO0lBS2hCLGVBQW9EO0lBQXBELHNMQUFvRDtJQUdyQyxlQUFrQjtJQUFs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RUFHdEMsTUFBTTtrQkFBZCxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIEJ1dHRvbkludGVyZmFjZSxcbiAgICBkZWVwQ2xvbmUsXG4gICAgRHJvcGRvd25CdXR0b25JbnRlcmZhY2UsXG4gICAgRHJvcGRvd25CdXR0b25TZWN0aW9uLFxuICAgIERyb3Bkb3duQnV0dG9uU2VjdGlvbk1hcCxcbiAgICBlbXB0eU9iamVjdFxufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtOZ2JEcm9wZG93bn0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtQbGFjZW1lbnRBcnJheX0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvdXRpbC9wb3NpdGlvbmluZyc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tZHJvcGRvd24tYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBjb25maWc6IERyb3Bkb3duQnV0dG9uSW50ZXJmYWNlO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gICAgQElucHV0KCkgYXV0b0Nsb3NlOiBib29sZWFuIHwgJ291dHNpZGUnIHwgJ2luc2lkZScgPSB0cnVlO1xuXG4gICAgYnV0dG9uczogYW55W10gPSBbXTtcbiAgICBzZWN0aW9uczogRHJvcGRvd25CdXR0b25TZWN0aW9uW10gPSBbXTtcbiAgICBzZWN0aW9uc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSkge1xuICAgIH1cblxuICAgIGlzRHJvcGRvd24oaXRlbTogQnV0dG9uSW50ZXJmYWNlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnaXRlbXMnIGluIGl0ZW07XG4gICAgfVxuXG4gICAgY2xpY2sob25DbGljazogRnVuY3Rpb24sIGRyb3Bkb3duOiBOZ2JEcm9wZG93bik6IHZvaWQge1xuICAgICAgICBvbkNsaWNrKCk7XG4gICAgICAgIGRyb3Bkb3duLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgY2xvc2UoZHJvcGRvd246IE5nYkRyb3Bkb3duKTogdm9pZCB7XG4gICAgICAgIGRyb3Bkb3duLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZyAmJiAhdGhpcy5jb25maWcucGxhY2VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5wbGFjZW1lbnQgPSBbJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VjdGlvbnMgPSBbXTtcblxuICAgICAgICBjb25zdCBzZWN0aW9uc0NvbmZpZzogRHJvcGRvd25CdXR0b25TZWN0aW9uTWFwID0gdGhpcy5jb25maWc/LnNlY3Rpb25zID8/IHt9O1xuXG4gICAgICAgIGlmIChlbXB0eU9iamVjdChzZWN0aW9uc0NvbmZpZykpIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucyA9IFsuLi50aGlzLmNvbmZpZz8uaXRlbXMgPz8gW11dO1xuICAgICAgICAgICAgdGhpcy5zZWN0aW9uc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlY3Rpb25zRW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzSXRlbXModGhpcy5jb25maWc/Lml0ZW1zID8/IFtdKTtcbiAgICB9XG5cbiAgICBwcmVwcm9jZXNzSXRlbXMoaXRlbXM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25zQ29uZmlnOiBEcm9wZG93bkJ1dHRvblNlY3Rpb25NYXAgPSB0aGlzLmNvbmZpZz8uc2VjdGlvbnMgPz8ge307XG4gICAgICAgIGNvbnN0IHNlY3Rpb25zOiBEcm9wZG93bkJ1dHRvblNlY3Rpb25NYXAgPSB7fTtcblxuICAgICAgICBpZiAoIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uS2V5ID0gaXRlbT8uc2VjdGlvbiA/PyAnZGVmYXVsdCc7XG4gICAgICAgICAgICBsZXQgc2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbihzZWN0aW9uc0NvbmZpZywgc2VjdGlvbktleSwgc2VjdGlvbnMpO1xuXG4gICAgICAgICAgICBzZWN0aW9uLml0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc2VjdGlvbnNDb25maWcpLmZvckVhY2goc2VjdGlvbktleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gc2VjdGlvbnNbc2VjdGlvbktleV07XG4gICAgICAgICAgICBpZiAoc2VjdGlvbiAmJiBzZWN0aW9uLml0ZW1zICYmIHNlY3Rpb24uaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9ucy5wdXNoKHNlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBzZWN0aW9uIGZyb20gbWFwLCBpbml0aWFsaXplIGlmIG5vdCBvbiBtYXBcbiAgICAgKiBAcGFyYW0gc2VjdGlvbnNDb25maWdcbiAgICAgKiBAcGFyYW0gc2VjdGlvbktleVxuICAgICAqIEBwYXJhbSBzZWN0aW9uc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0U2VjdGlvbihzZWN0aW9uc0NvbmZpZzogRHJvcGRvd25CdXR0b25TZWN0aW9uTWFwLCBzZWN0aW9uS2V5OiBzdHJpbmcsIHNlY3Rpb25zOiBEcm9wZG93bkJ1dHRvblNlY3Rpb25NYXApOiBEcm9wZG93bkJ1dHRvblNlY3Rpb24ge1xuICAgICAgICBjb25zdCBzZWN0aW9uQ29uZmlnID0gc2VjdGlvbnNDb25maWdbc2VjdGlvbktleV0gPz8ge307XG4gICAgICAgIGxldCBzZWN0aW9uID0gc2VjdGlvbnNbc2VjdGlvbktleV0gPz8gbnVsbDtcbiAgICAgICAgaWYgKHNlY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHNlY3Rpb24gPSBkZWVwQ2xvbmUoc2VjdGlvbkNvbmZpZyk7XG4gICAgICAgICAgICBzZWN0aW9uLml0ZW1zID0gW107XG4gICAgICAgICAgICBzZWN0aW9uc1tzZWN0aW9uS2V5XSA9IHNlY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfVxuXG4gICAgZ2V0UGxhY2VtZW50KCk6IFBsYWNlbWVudEFycmF5IHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnICYmICF0aGlzLmNvbmZpZy5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBbJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcucGxhY2VtZW50O1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBuZ2JEcm9wZG93blxuICAgICBbYXV0b0Nsb3NlXT1cImF1dG9DbG9zZVwiXG4gICAgIFtwbGFjZW1lbnRdPVwiZ2V0UGxhY2VtZW50KClcIlxuICAgICAjZHJvcERvd249XCJuZ2JEcm9wZG93blwiXG4gICAgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgZHJvcGRvd24tYnV0dG9uXCJcbiAgICAgW2NsYXNzLnNlY3Rpb25lZC1kcm9wZG93bi1tZW51XT1cInNlY3Rpb25zRW5hYmxlZFwiXG4gICAgIFtuZ0NsYXNzXT1cImNvbmZpZy53cmFwcGVyS2xhc3NcIj5cbiAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJjb25maWcua2xhc3NcIlxuICAgICAgICAgICAgW3RpdGxlXT1cImxhbmd1YWdlLmdldEZpZWxkTGFiZWwoY29uZmlnLnRpdGxlS2V5KSB8fCAnJ1wiXG4gICAgICAgICAgICBuZ2JEcm9wZG93blRvZ2dsZT5cblxuICAgICAgICA8c2NybS1pbWFnZSAqbmdJZj1cImNvbmZpZy5pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgW2ltYWdlXT1cImNvbmZpZy5pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgW2tsYXNzXT1cImNvbmZpZy5pY29uS2xhc3MgfHwgJydcIj48L3Njcm0taW1hZ2U+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5sYWJlbFwiPlxuICAgICAgICAgICAge3sgY29uZmlnLmxhYmVsIH19XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29uZmlnLmxhYmVsICYmIGNvbmZpZy5sYWJlbEtleVwiPlxuICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cImNvbmZpZy5sYWJlbEtleVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IG5nYkRyb3Bkb3duTWVudT5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2VjdGlvbnNFbmFibGVkXCI+XG5cbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHNlY3Rpb24gb2Ygc2VjdGlvbnM7IGxhc3QgYXMgaXNMYXN0OyBmaXJzdCBhcyBpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwic2VjdGlvbi5rbGFzcyA/PyAnJ1wiXG4gICAgICAgICAgICAgICAgIFtjbGFzcy5zZWN0aW9uLXNwbGl0XT1cIiFpc0ZpcnN0XCJcbiAgICAgICAgICAgICAgICAgW2NsYXNzLmxhc3Qtc2VjdGlvbl09XCJpc0xhc3RcIlxuICAgICAgICAgICAgICAgICBbY2xhc3MuZmlyc3Qtc2VjdGlvbl09XCJpc0ZpcnN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUtaXRlbS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cInNlY3Rpb24ubGFiZWxLZXkgPz8gc2VjdGlvbi5sYWJlbCA/PyAnJ1wiID48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNlY3Rpb24uaXRlbXM7IGxldCBsYXN0ID0gbGFzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYnV0dG9uVGVtcGxhdGU7IGNvbnRleHQ6IHsgaXRlbTogaXRlbSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2VjdGlvbnNFbmFibGVkXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYnV0dG9uVGVtcGxhdGU7IGNvbnRleHQ6IHsgaXRlbTogaXRlbSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG5cbjxuZy10ZW1wbGF0ZSAjYnV0dG9uVGVtcGxhdGUgbGV0LWl0ZW09XCJpdGVtXCI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbSAmJiAhaXNEcm9wZG93bihpdGVtKVwiPlxuICAgICAgICA8YSBuZ2JEcm9wZG93bkl0ZW0gW25nQ2xhc3NdPVwiaXRlbSAmJiBpdGVtLmtsYXNzXCIgKGNsaWNrKT1cIml0ZW0gJiYgY2xpY2soaXRlbS5vbkNsaWNrLCBkcm9wRG93bilcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0uaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBbaW1hZ2VdPVwiaXRlbS5pY29uXCIgW2tsYXNzXT1cIml0ZW0uaWNvbktsYXNzIHx8ICcnXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1pdGVtLWxhYmVsIGZsZXgtZ3Jvdy0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtICYmIGl0ZW0ubGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtICYmICFpdGVtLmxhYmVsICYmIGl0ZW0ubGFiZWxLZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsICpuZ0lmPVwiaXRlbSAmJiBpdGVtLmxhYmVsS2V5XCIgW2xhYmVsS2V5XT1cIml0ZW0ubGFiZWxLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21vZHVsZV09XCJpdGVtLmxhYmVsTW9kdWxlID8/ICcnXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbSAmJiBpc0Ryb3Bkb3duKGl0ZW0pXCI+XG4gICAgICAgIDxzY3JtLWRyb3Bkb3duLXN1Ym1lbnUgKGl0ZW0tY2xpY2tlZCk9XCJjbG9zZShkcm9wRG93bilcIiBbaXRlbV09XCJpdGVtXCI+PC9zY3JtLWRyb3Bkb3duLXN1Ym1lbnU+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbjwvbmctdGVtcGxhdGU+XG4iXX0=