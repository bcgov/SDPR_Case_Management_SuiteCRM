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
import { TagInputComponent } from 'ngx-chips';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { BaseEnumComponent } from '../../../base/base-enum.component';
import { LanguageStore } from '../../../../store/language/language.store';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../services/formatters/data-type.formatter.service";
import * as i3 from "../../../field-logic/field-logic.manager";
import * as i4 from "../../../field-logic-display/field-logic-display.manager";
import * as i5 from "ngx-chips";
import * as i6 from "@angular/forms";
const _c0 = ["tag"];
class EnumEditFieldComponent extends BaseEnumComponent {
    constructor(languages, typeFormatter, logic, logicDisplay) {
        super(languages, typeFormatter, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    ngOnInit() {
        this.checkAndInitAsDynamicEnum();
        super.ngOnInit();
    }
    onAdd(item) {
        if (item && item.value) {
            this.field.value = item.value;
            this.field.formControl.setValue(item.value);
            this.field.formControl.markAsDirty();
            return;
        }
        this.field.value = '';
        this.field.formControl.setValue('');
        this.field.formControl.markAsDirty();
        this.selectedValues = [];
        return;
    }
    onRemove() {
        this.field.value = '';
        this.field.formControl.setValue('');
        this.field.formControl.markAsDirty();
        setTimeout(() => {
            this.tag.focus(true, true);
            this.tag.dropdown.show();
        }, 200);
    }
    getPlaceholderLabel() {
        return this.languages.getAppString('LBL_SELECT_ITEM') || '';
    }
    selectFirstElement() {
        const filteredElements = this.tag.dropdown.items;
        if (filteredElements.length !== 0) {
            const firstElement = filteredElements[0];
            this.selectedValues.push(firstElement);
            this.onAdd(firstElement);
            this.tag.dropdown.hide();
        }
    }
    static { this.ɵfac = function EnumEditFieldComponent_Factory(t) { return new (t || EnumEditFieldComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.FieldLogicManager), i0.ɵɵdirectiveInject(i4.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EnumEditFieldComponent, selectors: [["scrm-enum-edit"]], viewQuery: function EnumEditFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tag = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 15, consts: [["maxItems", "1", 3, "ngModel", "onlyFromAutocomplete", "clearOnBlur", "displayBy", "identifyBy", "placeholder", "secondaryPlaceholder", "inputClass", "ngModelChange", "onAdd", "onRemove", "keyup.enter"], ["tag", ""], [3, "displayBy", "identifyBy", "showDropdownIfEmpty", "keepOpen", "autocompleteItems"]], template: function EnumEditFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "tag-input", 0, 1);
            i0.ɵɵlistener("ngModelChange", function EnumEditFieldComponent_Template_tag_input_ngModelChange_0_listener($event) { return ctx.selectedValues = $event; })("onAdd", function EnumEditFieldComponent_Template_tag_input_onAdd_0_listener($event) { return ctx.onAdd($event); })("onRemove", function EnumEditFieldComponent_Template_tag_input_onRemove_0_listener() { return ctx.onRemove(); })("keyup.enter", function EnumEditFieldComponent_Template_tag_input_keyup_enter_0_listener() { return ctx.selectFirstElement(); });
            i0.ɵɵelement(2, "tag-input-dropdown", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.getInvalidClass());
            i0.ɵɵproperty("ngModel", ctx.selectedValues)("onlyFromAutocomplete", true)("clearOnBlur", true)("displayBy", "label")("identifyBy", "value")("placeholder", ctx.getPlaceholderLabel())("secondaryPlaceholder", ctx.getPlaceholderLabel())("inputClass", ctx.getInvalidClass());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("displayBy", "label")("identifyBy", "value")("showDropdownIfEmpty", true)("keepOpen", false)("autocompleteItems", ctx.options);
        } }, dependencies: [i5.TagInputComponent, i5.TagInputDropdown, i6.NgControlStatus, i6.NgModel], encapsulation: 2 }); }
}
export { EnumEditFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EnumEditFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-enum-edit', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<tag-input [(ngModel)]=\"selectedValues\"\n           [onlyFromAutocomplete]=\"true\"\n           [clearOnBlur]=\"true\"\n           [displayBy]=\"'label'\"\n           [identifyBy]=\"'value'\"\n           [placeholder]=\"getPlaceholderLabel()\"\n           [secondaryPlaceholder]=\"getPlaceholderLabel()\"\n           [class]=\"getInvalidClass()\"\n           [inputClass]=\"getInvalidClass()\"\n           maxItems=\"1\"\n           #tag\n           (onAdd)=\"onAdd($event)\"\n           (onRemove)=\"onRemove()\"\n           (keyup.enter)=\"selectFirstElement()\">\n    <tag-input-dropdown [displayBy]=\"'label'\"\n                        [identifyBy]=\"'value'\"\n                        [showDropdownIfEmpty]=\"true\"\n                        [keepOpen]=\"false\"\n                        [autocompleteItems]=\"this.options\">\n    </tag-input-dropdown>\n</tag-input>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.FieldLogicManager }, { type: i4.FieldLogicDisplayManager }]; }, { tag: [{
            type: ViewChild,
            args: ['tag']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2VudW0vdGVtcGxhdGVzL2VkaXQvZW51bS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2VudW0vdGVtcGxhdGVzL2VkaXQvZW51bS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQzVDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZEQUE2RCxDQUFDO0FBQzlGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUV4RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQzs7Ozs7Ozs7O0FBRWxHLE1BS2Esc0JBQXVCLFNBQVEsaUJBQWlCO0lBSXpELFlBQ2MsU0FBd0IsRUFDeEIsYUFBZ0MsRUFDaEMsS0FBd0IsRUFDeEIsWUFBc0M7UUFFaEQsS0FBSyxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBTDNDLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtJQUdwRCxDQUFDO0lBRUQsUUFBUTtRQUVKLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUk7UUFDYixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXpCLE9BQU87SUFDWCxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRU0sbUJBQW1CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEUsQ0FBQztJQUVNLGtCQUFrQjtRQUNyQixNQUFNLGdCQUFnQixHQUFhLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUMzRCxJQUFJLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0IsTUFBTSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM1QjtJQUNMLENBQUM7dUZBekRRLHNCQUFzQjtvRUFBdEIsc0JBQXNCOzs7Ozs7WUNibkMsdUNBYWdEO1lBYnJDLDJKQUE0QiwrRkFXbkIsaUJBQWEsSUFYTSwrRkFZaEIsY0FBVSxJQVpNLHFHQWFiLHdCQUFvQixJQWJQO1lBY25DLHdDQUtxQjtZQUN6QixpQkFBWTs7WUFiRCxvQ0FBMkI7WUFQM0IsNENBQTRCLDhCQUFBLHFCQUFBLHNCQUFBLHVCQUFBLDBDQUFBLG1EQUFBLHFDQUFBO1lBY2YsZUFBcUI7WUFBckIsbUNBQXFCLHVCQUFBLDZCQUFBLG1CQUFBLGtDQUFBOzs7U0REaEMsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDSSxnQkFBZ0I7dUtBTVIsR0FBRztrQkFBcEIsU0FBUzttQkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFnSW5wdXRDb21wb25lbnR9IGZyb20gJ25neC1jaGlwcyc7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0Jhc2VFbnVtQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9iYXNlL2Jhc2UtZW51bS5jb21wb25lbnQnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge1RhZ01vZGVsfSBmcm9tICduZ3gtY2hpcHMvY29yZS90YWctbW9kZWwnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5TWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMtZGlzcGxheS9maWVsZC1sb2dpYy1kaXNwbGF5Lm1hbmFnZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tZW51bS1lZGl0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZW51bS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBFbnVtRWRpdEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQmFzZUVudW1Db21wb25lbnQge1xuXG4gICAgQFZpZXdDaGlsZCgndGFnJykgdGFnOiBUYWdJbnB1dENvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VzOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcihsYW5ndWFnZXMsIHR5cGVGb3JtYXR0ZXIsIGxvZ2ljLCBsb2dpY0Rpc3BsYXkpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuY2hlY2tBbmRJbml0QXNEeW5hbWljRW51bSgpO1xuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkFkZChpdGVtKTogdm9pZCB7XG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0udmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQudmFsdWUgPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZShpdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmllbGQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IFtdO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25SZW1vdmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmllbGQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRhZy5mb2N1cyh0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudGFnLmRyb3Bkb3duLnNob3coKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UGxhY2Vob2xkZXJMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZXMuZ2V0QXBwU3RyaW5nKCdMQkxfU0VMRUNUX0lURU0nKSB8fCAnJztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0Rmlyc3RFbGVtZW50KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzOiBUYWdNb2RlbCA9IHRoaXMudGFnLmRyb3Bkb3duLml0ZW1zO1xuICAgICAgICBpZiAoZmlsdGVyZWRFbGVtZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RWxlbWVudCA9IGZpbHRlcmVkRWxlbWVudHNbMF07XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzLnB1c2goZmlyc3RFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMub25BZGQoZmlyc3RFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMudGFnLmRyb3Bkb3duLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPHRhZy1pbnB1dCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVzXCJcbiAgICAgICAgICAgW29ubHlGcm9tQXV0b2NvbXBsZXRlXT1cInRydWVcIlxuICAgICAgICAgICBbY2xlYXJPbkJsdXJdPVwidHJ1ZVwiXG4gICAgICAgICAgIFtkaXNwbGF5QnldPVwiJ2xhYmVsJ1wiXG4gICAgICAgICAgIFtpZGVudGlmeUJ5XT1cIid2YWx1ZSdcIlxuICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZ2V0UGxhY2Vob2xkZXJMYWJlbCgpXCJcbiAgICAgICAgICAgW3NlY29uZGFyeVBsYWNlaG9sZGVyXT1cImdldFBsYWNlaG9sZGVyTGFiZWwoKVwiXG4gICAgICAgICAgIFtjbGFzc109XCJnZXRJbnZhbGlkQ2xhc3MoKVwiXG4gICAgICAgICAgIFtpbnB1dENsYXNzXT1cImdldEludmFsaWRDbGFzcygpXCJcbiAgICAgICAgICAgbWF4SXRlbXM9XCIxXCJcbiAgICAgICAgICAgI3RhZ1xuICAgICAgICAgICAob25BZGQpPVwib25BZGQoJGV2ZW50KVwiXG4gICAgICAgICAgIChvblJlbW92ZSk9XCJvblJlbW92ZSgpXCJcbiAgICAgICAgICAgKGtleXVwLmVudGVyKT1cInNlbGVjdEZpcnN0RWxlbWVudCgpXCI+XG4gICAgPHRhZy1pbnB1dC1kcm9wZG93biBbZGlzcGxheUJ5XT1cIidsYWJlbCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2lkZW50aWZ5QnldPVwiJ3ZhbHVlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbc2hvd0Ryb3Bkb3duSWZFbXB0eV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtrZWVwT3Blbl09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXV0b2NvbXBsZXRlSXRlbXNdPVwidGhpcy5vcHRpb25zXCI+XG4gICAgPC90YWctaW5wdXQtZHJvcGRvd24+XG48L3RhZy1pbnB1dD5cbiJdfQ==