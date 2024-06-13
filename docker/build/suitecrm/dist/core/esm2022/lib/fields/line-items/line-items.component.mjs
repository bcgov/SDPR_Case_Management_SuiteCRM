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
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { RecordManager } from '../../services/record/record.manager';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { BaseLineItemsComponent } from '../base/base-line-items.component';
import { FieldManager } from '../../services/record/field/field.manager';
import { FieldRegistry } from '../field.registry';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../services/formatters/data-type.formatter.service";
import * as i2 from "../field.registry";
import * as i3 from "../../services/record/record.manager";
import * as i4 from "../field-logic/field-logic.manager";
import * as i5 from "../../services/record/field/field.manager";
import * as i6 from "../field-logic-display/field-logic-display.manager";
import * as i7 from "@angular/common";
import * as i8 from "../../components/label/label.component";
import * as i9 from "../dynamic-field/dynamic-field.component";
import * as i10 from "../../components/button/button.component";
import * as i11 from "../../components/dynamic-label/dynamic-label.component";
function LineItemsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-label", 1);
    i0.ɵɵelementContainerEnd();
} }
function LineItemsComponent_ng_container_1_ng_container_3_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "scrm-dynamic-field", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemField_r10 = ctx.$implicit;
    const item_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("", itemField_r10.type, " ", itemField_r10.name, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("componentType", ctx_r8.getComponentType(itemField_r10.type, itemField_r10.definition))("field", itemField_r10)("klass", ctx_r8.klass)("mode", ctx_r8.mode)("originalMode", ctx_r8.originalMode)("record", item_r5)("parent", ctx_r8.parent)("type", itemField_r10.type);
} }
function LineItemsComponent_ng_container_1_ng_container_3_div_1_scrm_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 11);
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    const item_r5 = ctx_r12.$implicit;
    const i_r6 = ctx_r12.index;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r9.getRemoveItemButton(item_r5, i_r6));
} }
function LineItemsComponent_ng_container_1_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7);
    i0.ɵɵtemplate(2, LineItemsComponent_ng_container_1_ng_container_3_div_1_div_2_Template, 2, 12, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 9);
    i0.ɵɵtemplate(4, LineItemsComponent_ng_container_1_ng_container_3_div_1_scrm_button_4_Template, 1, 1, "scrm-button", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r7.getItemFields(item_r5));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r7.isEditable());
} }
function LineItemsComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LineItemsComponent_ng_container_1_ng_container_3_div_1_Template, 5, 2, "div", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r5 && item_r5.attributes && item_r5.attributes.deleted));
} }
function LineItemsComponent_ng_container_1_scrm_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 11);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r3.getAddItemButton());
} }
const _c0 = function (a0) { return { field: a0 }; };
function LineItemsComponent_ng_container_1_ng_container_6_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "scrm-dynamic-label", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r15 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("context", ctx_r15.getMessageContext(item_r16.value, ctx_r15.record))("fields", i0.ɵɵpureFunction1(3, _c0, ctx_r15.field))("labelKey", ctx_r15.getMessageLabelKey(item_r16.value));
} }
function LineItemsComponent_ng_container_1_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LineItemsComponent_ng_container_1_ng_container_6_ng_container_1_div_1_Template, 2, 5, "div", 12);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r14.field.itemFormArray.errors));
} }
function LineItemsComponent_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LineItemsComponent_ng_container_1_ng_container_6_ng_container_1_Template, 3, 3, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.field.itemFormArray.invalid);
} }
function LineItemsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, LineItemsComponent_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 3);
    i0.ɵɵtemplate(5, LineItemsComponent_ng_container_1_scrm_button_5_Template, 1, 1, "scrm-button", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, LineItemsComponent_ng_container_1_ng_container_6_Template, 2, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate2("line-items d-flex flex-column ", ctx_r1.field.type, " ", ctx_r1.field.name, "");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("d-flex ", ctx_r1.getDirection(), " justify-content-start align-items-end line-item h-100");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.getItems());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable() && ctx_r1.field.itemFormArray && ctx_r1.field.itemFormArray.errors);
} }
class LineItemsComponent extends BaseLineItemsComponent {
    constructor(typeFormatter, registry, recordManager, logic, fieldManager, logicDisplay) {
        super(typeFormatter, registry, recordManager, logic, fieldManager, logicDisplay);
        this.typeFormatter = typeFormatter;
        this.registry = registry;
        this.recordManager = recordManager;
        this.logic = logic;
        this.fieldManager = fieldManager;
        this.logicDisplay = logicDisplay;
    }
    /**
     * Add item button config
     * @returns {object} ButtonInterface
     */
    getAddItemButton() {
        return {
            klass: 'btn btn-sm btn-outline-secondary m-0 border-0',
            icon: 'plus',
            onClick: () => {
                this.addEmptyItem();
            },
        };
    }
    /**
     * Remove item button config
     * @param {object} item
     * @param {number} index
     * @returns {object} ButtonInterface
     */
    getRemoveItemButton(item, index) {
        return {
            klass: 'btn btn-sm btn-outline-secondary m-0 border-0',
            icon: 'minimise',
            onClick: () => {
                this.removeItem(index);
            },
        };
    }
    static { this.ɵfac = function LineItemsComponent_Factory(t) { return new (t || LineItemsComponent)(i0.ɵɵdirectiveInject(i1.DataTypeFormatter), i0.ɵɵdirectiveInject(i2.FieldRegistry), i0.ɵɵdirectiveInject(i3.RecordManager), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.FieldManager), i0.ɵɵdirectiveInject(i6.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LineItemsComponent, selectors: [["scrm-line-items-field"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[4, "ngIf"], ["labelKey", "LBL_LINE_ITEMS_FIELD_CONFIG"], [4, "ngFor", "ngForOf"], [1, "line-item-buttons", "d-flex", "justify-content-end", "mt-1"], [3, "config", 4, "ngIf"], ["class", "d-flex flex-row line-item-entry w-100 align-items-end", 4, "ngIf"], [1, "d-flex", "flex-row", "line-item-entry", "w-100", "align-items-end"], [1, "flex-grow-1", "line-item-entry-composite"], [3, "class", 4, "ngFor", "ngForOf"], [1, "line-item-entry-buttons", "mb-1"], [3, "componentType", "field", "klass", "mode", "originalMode", "record", "parent", "type"], [3, "config"], ["class", "invalid-feedback d-block", 4, "ngFor", "ngForOf"], [1, "invalid-feedback", "d-block"], [3, "context", "fields", "labelKey"]], template: function LineItemsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LineItemsComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
            i0.ɵɵtemplate(1, LineItemsComponent_ng_container_1_Template, 7, 10, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.isConfigured());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isConfigured());
        } }, dependencies: [i7.NgForOf, i7.NgIf, i8.LabelComponent, i9.DynamicFieldComponent, i10.ButtonComponent, i11.DynamicLabelComponent, i7.KeyValuePipe], encapsulation: 2 }); }
}
export { LineItemsComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineItemsComponent, [{
        type: Component,
        args: [{ selector: 'scrm-line-items-field', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"!isConfigured()\">\n    <scrm-label labelKey=\"LBL_LINE_ITEMS_FIELD_CONFIG\"></scrm-label>\n</ng-container>\n\n<ng-container *ngIf=\"isConfigured()\">\n    <div class=\"line-items d-flex flex-column {{field.type}} {{field.name}}\">\n\n        <div class=\"d-flex {{getDirection()}} justify-content-start align-items-end line-item h-100\">\n            <ng-container *ngFor=\"let item of getItems(); index as i\">\n                <div *ngIf=\"!(item && item.attributes && item.attributes.deleted)\"\n                     class=\"d-flex flex-row line-item-entry w-100 align-items-end\">\n\n                    <div class=\"flex-grow-1 line-item-entry-composite\">\n                        <div *ngFor=\"let itemField of getItemFields(item)\"\n                             class=\"{{itemField.type}} {{itemField.name}}\">\n                            <scrm-dynamic-field [componentType]=\"getComponentType(itemField.type, itemField.definition)\"\n                                                [field]=\"itemField\"\n                                                [klass]=\"klass\"\n                                                [mode]=\"mode\"\n                                                [originalMode]=\"originalMode\"\n                                                [record]=\"item\"\n                                                [parent]=\"parent\"\n                                                [type]=\"itemField.type\">\n                            </scrm-dynamic-field>\n                        </div>\n                    </div>\n\n                    <div class=\"line-item-entry-buttons mb-1\">\n                        <scrm-button *ngIf=\"isEditable()\" [config]=\"getRemoveItemButton(item, i)\">\n                        </scrm-button>\n                    </div>\n                </div>\n            </ng-container>\n\n\n        </div>\n        <div class=\"line-item-buttons d-flex justify-content-end mt-1\">\n            <scrm-button *ngIf=\"isEditable()\" [config]=\"getAddItemButton()\">\n            </scrm-button>\n        </div>\n\n        <ng-container *ngIf=\"isEditable() && field.itemFormArray && field.itemFormArray.errors\">\n            <ng-container *ngIf=\"field.itemFormArray.invalid\">\n                <div *ngFor=\"let item of field.itemFormArray.errors | keyvalue\" class=\"invalid-feedback d-block\">\n                    <scrm-dynamic-label [context]=\"getMessageContext(item.value, record)\"\n                                        [fields]=\"{field: field}\"\n                                        [labelKey]=\"getMessageLabelKey(item.value)\">\n                    </scrm-dynamic-label>\n                </div>\n            </ng-container>\n        </ng-container>\n    </div>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.DataTypeFormatter }, { type: i2.FieldRegistry }, { type: i3.RecordManager }, { type: i4.FieldLogicManager }, { type: i5.FieldManager }, { type: i6.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1pdGVtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2xpbmUtaXRlbXMvbGluZS1pdGVtcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2xpbmUtaXRlbXMvbGluZS1pdGVtcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFekUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUNQNUYsNkJBQXNDO0lBQ2xDLGdDQUFnRTtJQUNwRSwwQkFBZTs7O0lBV1MsMkJBQ21EO0lBQy9DLHlDQVFxQjtJQUN6QixpQkFBTTs7Ozs7SUFWRCw4RUFBNkM7SUFDMUIsZUFBd0U7SUFBeEUscUdBQXdFLHdCQUFBLHVCQUFBLHFCQUFBLHFDQUFBLG1CQUFBLHlCQUFBLDRCQUFBOzs7SUFhaEcsa0NBQ2M7Ozs7OztJQURvQixrRUFBdUM7OztJQW5CakYsOEJBQ21FLGFBQUE7SUFHM0Qsd0dBV007SUFDVixpQkFBTTtJQUVOLDhCQUEwQztJQUN0Qyx1SEFDYztJQUNsQixpQkFBTSxFQUFBOzs7O0lBakJ5QixlQUFzQjtJQUF0Qix1REFBc0I7SUFlbkMsZUFBa0I7SUFBbEIsMENBQWtCOzs7SUFwQjVDLDZCQUEwRDtJQUN0RCxpR0FzQk07SUFDViwwQkFBZTs7O0lBdkJMLGVBQTJEO0lBQTNELHFGQUEyRDs7O0lBNEJyRSxrQ0FDYzs7O0lBRG9CLGtEQUE2Qjs7OztJQU0zRCwrQkFBaUc7SUFDN0YseUNBR3FCO0lBQ3pCLGlCQUFNOzs7O0lBSmtCLGVBQWlEO0lBQWpELG1GQUFpRCxxREFBQSx3REFBQTs7O0lBRjdFLDZCQUFrRDtJQUM5QyxpSEFLTTs7SUFDViwwQkFBZTs7O0lBTlcsZUFBd0M7SUFBeEMsa0ZBQXdDOzs7SUFGdEUsNkJBQXdGO0lBQ3BGLG1IQU9lO0lBQ25CLDBCQUFlOzs7SUFSSSxlQUFpQztJQUFqQyx5REFBaUM7OztJQXRDNUQsNkJBQXFDO0lBQ2pDLDJCQUF5RSxVQUFBO0lBR2pFLG9HQXdCZTtJQUduQixpQkFBTTtJQUNOLDhCQUErRDtJQUMzRCxrR0FDYztJQUNsQixpQkFBTTtJQUVOLG9HQVNlO0lBQ25CLGlCQUFNO0lBQ1YsMEJBQWU7OztJQS9DTixlQUFtRTtJQUFuRSwwR0FBbUU7SUFFL0QsZUFBdUY7SUFBdkYscUhBQXVGO0lBQ3pELGVBQWU7SUFBZiwyQ0FBZTtJQTZCaEMsZUFBa0I7SUFBbEIsMENBQWtCO0lBSXJCLGVBQXVFO0lBQXZFLDZHQUF1RTs7QURoQzlGLE1BS2Esa0JBQW1CLFNBQVEsc0JBQXNCO0lBRTFELFlBQ2MsYUFBZ0MsRUFDaEMsUUFBdUIsRUFDdkIsYUFBNEIsRUFDNUIsS0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsWUFBc0M7UUFFaEQsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFQdkUsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQTBCO0lBR3BELENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQkFBZ0I7UUFDWixPQUFPO1lBQ0gsS0FBSyxFQUFFLCtDQUErQztZQUN0RCxJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxHQUFTLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QixDQUFDO1NBRUosQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILG1CQUFtQixDQUFDLElBQWUsRUFBRSxLQUFhO1FBQzlDLE9BQU87WUFDSCxLQUFLLEVBQUUsK0NBQStDO1lBQ3RELElBQUksRUFBRSxVQUFVO1lBQ2hCLE9BQU8sRUFBRSxHQUFTLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsQ0FBQztTQUNKLENBQUM7SUFDTixDQUFDO21GQTFDUSxrQkFBa0I7b0VBQWxCLGtCQUFrQjtZQ2QvQixxRkFFZTtZQUVmLHNGQWdEZTs7WUFwREEsMENBQXFCO1lBSXJCLGVBQW9CO1lBQXBCLHlDQUFvQjs7O1NEVXRCLGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBTDlCLFNBQVM7MkJBQ0ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge1JlY29yZE1hbmFnZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlY29yZC9yZWNvcmQubWFuYWdlcic7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7QmFzZUxpbmVJdGVtc0NvbXBvbmVudH0gZnJvbSAnLi4vYmFzZS9iYXNlLWxpbmUtaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7QnV0dG9uSW50ZXJmYWNlLCBPYmplY3RNYXB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0ZpZWxkTWFuYWdlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVjb3JkL2ZpZWxkL2ZpZWxkLm1hbmFnZXInO1xuaW1wb3J0IHtGaWVsZFJlZ2lzdHJ5fSBmcm9tICcuLi9maWVsZC5yZWdpc3RyeSc7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5TWFuYWdlcn0gZnJvbSAnLi4vZmllbGQtbG9naWMtZGlzcGxheS9maWVsZC1sb2dpYy1kaXNwbGF5Lm1hbmFnZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tbGluZS1pdGVtcy1maWVsZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xpbmUtaXRlbXMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgTGluZUl0ZW1zQ29tcG9uZW50IGV4dGVuZHMgQmFzZUxpbmVJdGVtc0NvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgcmVnaXN0cnk6IEZpZWxkUmVnaXN0cnksXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRNYW5hZ2VyOiBSZWNvcmRNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgZmllbGRNYW5hZ2VyOiBGaWVsZE1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcih0eXBlRm9ybWF0dGVyLCByZWdpc3RyeSwgcmVjb3JkTWFuYWdlciwgbG9naWMsIGZpZWxkTWFuYWdlciwgbG9naWNEaXNwbGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgaXRlbSBidXR0b24gY29uZmlnXG4gICAgICogQHJldHVybnMge29iamVjdH0gQnV0dG9uSW50ZXJmYWNlXG4gICAgICovXG4gICAgZ2V0QWRkSXRlbUJ1dHRvbigpOiBCdXR0b25JbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2xhc3M6ICdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtLTAgYm9yZGVyLTAnLFxuICAgICAgICAgICAgaWNvbjogJ3BsdXMnLFxuICAgICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRW1wdHlJdGVtKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGl0ZW0gYnV0dG9uIGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge29iamVjdH0gQnV0dG9uSW50ZXJmYWNlXG4gICAgICovXG4gICAgZ2V0UmVtb3ZlSXRlbUJ1dHRvbihpdGVtOiBPYmplY3RNYXAsIGluZGV4OiBudW1iZXIpOiBCdXR0b25JbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2xhc3M6ICdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtLTAgYm9yZGVyLTAnLFxuICAgICAgICAgICAgaWNvbjogJ21pbmltaXNlJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oaW5kZXgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNDb25maWd1cmVkKClcIj5cbiAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9MSU5FX0lURU1TX0ZJRUxEX0NPTkZJR1wiPjwvc2NybS1sYWJlbD5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiaXNDb25maWd1cmVkKClcIj5cbiAgICA8ZGl2IGNsYXNzPVwibGluZS1pdGVtcyBkLWZsZXggZmxleC1jb2x1bW4ge3tmaWVsZC50eXBlfX0ge3tmaWVsZC5uYW1lfX1cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IHt7Z2V0RGlyZWN0aW9uKCl9fSBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtZW5kIGxpbmUtaXRlbSBoLTEwMFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBnZXRJdGVtcygpOyBpbmRleCBhcyBpXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiEoaXRlbSAmJiBpdGVtLmF0dHJpYnV0ZXMgJiYgaXRlbS5hdHRyaWJ1dGVzLmRlbGV0ZWQpXCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGZsZXgtcm93IGxpbmUtaXRlbS1lbnRyeSB3LTEwMCBhbGlnbi1pdGVtcy1lbmRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTEgbGluZS1pdGVtLWVudHJ5LWNvbXBvc2l0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbUZpZWxkIG9mIGdldEl0ZW1GaWVsZHMoaXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7aXRlbUZpZWxkLnR5cGV9fSB7e2l0ZW1GaWVsZC5uYW1lfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1keW5hbWljLWZpZWxkIFtjb21wb25lbnRUeXBlXT1cImdldENvbXBvbmVudFR5cGUoaXRlbUZpZWxkLnR5cGUsIGl0ZW1GaWVsZC5kZWZpbml0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiaXRlbUZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtrbGFzc109XCJrbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9kZV09XCJtb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcmlnaW5hbE1vZGVdPVwib3JpZ2luYWxNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWNvcmRdPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50XT1cInBhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJpdGVtRmllbGQudHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1keW5hbWljLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5lLWl0ZW0tZW50cnktYnV0dG9ucyBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gKm5nSWY9XCJpc0VkaXRhYmxlKClcIiBbY29uZmlnXT1cImdldFJlbW92ZUl0ZW1CdXR0b24oaXRlbSwgaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpbmUtaXRlbS1idXR0b25zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG10LTFcIj5cbiAgICAgICAgICAgIDxzY3JtLWJ1dHRvbiAqbmdJZj1cImlzRWRpdGFibGUoKVwiIFtjb25maWddPVwiZ2V0QWRkSXRlbUJ1dHRvbigpXCI+XG4gICAgICAgICAgICA8L3Njcm0tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNFZGl0YWJsZSgpICYmIGZpZWxkLml0ZW1Gb3JtQXJyYXkgJiYgZmllbGQuaXRlbUZvcm1BcnJheS5lcnJvcnNcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5pdGVtRm9ybUFycmF5LmludmFsaWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLml0ZW1Gb3JtQXJyYXkuZXJyb3JzIHwga2V5dmFsdWVcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2sgZC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1keW5hbWljLWxhYmVsIFtjb250ZXh0XT1cImdldE1lc3NhZ2VDb250ZXh0KGl0ZW0udmFsdWUsIHJlY29yZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZHNdPVwie2ZpZWxkOiBmaWVsZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEtleV09XCJnZXRNZXNzYWdlTGFiZWxLZXkoaXRlbS52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWR5bmFtaWMtbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==