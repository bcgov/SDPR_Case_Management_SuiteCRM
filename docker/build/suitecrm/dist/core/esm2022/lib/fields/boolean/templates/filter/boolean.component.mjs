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
import * as i5 from "@angular/forms";
import * as i6 from "ngx-chips";
const _c0 = ["tag"];
class BooleanFilterFieldComponent extends BaseEnumComponent {
    constructor(languages, typeFormatter, logic, logicDisplay) {
        super(languages, typeFormatter, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    ngOnInit() {
        this.field.value = '';
        if (this.field.criteria.values && this.field.criteria.values.length > 0) {
            this.field.value = this.field.criteria.values[0];
        }
        super.ngOnInit();
    }
    onAdd(item) {
        if (item && item.value) {
            this.field.value = item.value;
            this.field.formControl.setValue(item.value);
            this.field.formControl.markAsDirty();
            this.field.criteria.operator = '=';
            this.field.criteria.values = [item.value];
            return;
        }
        this.field.value = '';
        this.field.formControl.setValue('');
        this.field.formControl.markAsDirty();
        this.selectedValues = [];
        this.field.criteria.operator = '';
        this.field.criteria.values = [];
        return;
    }
    onRemove() {
        this.field.value = '';
        this.field.formControl.setValue('');
        this.field.formControl.markAsDirty();
        this.field.criteria.operator = '';
        this.field.criteria.values = [];
        setTimeout(() => {
            this.tag.focus(true, true);
            this.tag.dropdown.show();
        }, 200);
    }
    getPlaceholderLabel() {
        return this.languages.getAppString('LBL_SELECT_ITEM') || '';
    }
    static { this.ɵfac = function BooleanFilterFieldComponent_Factory(t) { return new (t || BooleanFilterFieldComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.FieldLogicManager), i0.ɵɵdirectiveInject(i4.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BooleanFilterFieldComponent, selectors: [["scrm-boolean-filter"]], viewQuery: function BooleanFilterFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tag = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 15, consts: [["maxItems", "1", 3, "ngModel", "clearOnBlur", "displayBy", "identifyBy", "inputClass", "onlyFromAutocomplete", "placeholder", "secondaryPlaceholder", "onAdd", "onRemove", "ngModelChange"], ["tag", ""], [3, "autocompleteItems", "displayBy", "identifyBy", "keepOpen", "showDropdownIfEmpty"]], template: function BooleanFilterFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "tag-input", 0, 1);
            i0.ɵɵlistener("onAdd", function BooleanFilterFieldComponent_Template_tag_input_onAdd_0_listener($event) { return ctx.onAdd($event); })("onRemove", function BooleanFilterFieldComponent_Template_tag_input_onRemove_0_listener() { return ctx.onRemove(); })("ngModelChange", function BooleanFilterFieldComponent_Template_tag_input_ngModelChange_0_listener($event) { return ctx.selectedValues = $event; });
            i0.ɵɵelement(2, "tag-input-dropdown", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.getInvalidClass());
            i0.ɵɵproperty("ngModel", ctx.selectedValues)("clearOnBlur", true)("displayBy", "label")("identifyBy", "value")("inputClass", ctx.getInvalidClass())("onlyFromAutocomplete", true)("placeholder", ctx.getPlaceholderLabel())("secondaryPlaceholder", ctx.getPlaceholderLabel());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("autocompleteItems", ctx.options)("displayBy", "label")("identifyBy", "value")("keepOpen", false)("showDropdownIfEmpty", true);
        } }, dependencies: [i5.NgControlStatus, i5.NgModel, i6.TagInputComponent, i6.TagInputDropdown], encapsulation: 2 }); }
}
export { BooleanFilterFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BooleanFilterFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-boolean-filter', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<tag-input #tag\n           (onAdd)=\"onAdd($event)\"\n           (onRemove)=\"onRemove()\"\n           [(ngModel)]=\"selectedValues\"\n           [class]=\"getInvalidClass()\"\n           [clearOnBlur]=\"true\"\n           [displayBy]=\"'label'\"\n           [identifyBy]=\"'value'\"\n           [inputClass]=\"getInvalidClass()\"\n           [onlyFromAutocomplete]=\"true\"\n           [placeholder]=\"getPlaceholderLabel()\"\n           [secondaryPlaceholder]=\"getPlaceholderLabel()\"\n           maxItems=\"1\">\n    <tag-input-dropdown [autocompleteItems]=\"this.options\"\n                        [displayBy]=\"'label'\"\n                        [identifyBy]=\"'value'\"\n                        [keepOpen]=\"false\"\n                        [showDropdownIfEmpty]=\"true\">\n    </tag-input-dropdown>\n</tag-input>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.FieldLogicManager }, { type: i4.FieldLogicDisplayManager }]; }, { tag: [{
            type: ViewChild,
            args: ['tag']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2Jvb2xlYW4vdGVtcGxhdGVzL2ZpbHRlci9ib29sZWFuLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvYm9vbGVhbi90ZW1wbGF0ZXMvZmlsdGVyL2Jvb2xlYW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQXFCLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDNUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDOUYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBEQUEwRCxDQUFDOzs7Ozs7Ozs7QUFFbEcsTUFLYSwyQkFBNEIsU0FBUSxpQkFBaUI7SUFJOUQsWUFDYyxTQUF3QixFQUN4QixhQUFnQyxFQUNoQyxLQUF3QixFQUN4QixZQUFzQztRQUVoRCxLQUFLLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFMM0MsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsaUJBQVksR0FBWixZ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QUFBLG1CQUFBLDZCQUFBOzs7U0REN0MsMkJBQTJCO3VGQUEzQiwyQkFBMkI7Y0FMdkMsU0FBUzsyQkFDSSxxQkFBcUI7dUtBTWIsR0FBRztrQkFBcEIsU0FBUzttQkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhZ0lucHV0Q29tcG9uZW50fSBmcm9tICduZ3gtY2hpcHMnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtCYXNlRW51bUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9iYXNlLWVudW0uY29tcG9uZW50JztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5TWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMtZGlzcGxheS9maWVsZC1sb2dpYy1kaXNwbGF5Lm1hbmFnZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYm9vbGVhbi1maWx0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ib29sZWFuLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5GaWx0ZXJGaWVsZENvbXBvbmVudCBleHRlbmRzIEJhc2VFbnVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQFZpZXdDaGlsZCgndGFnJykgdGFnOiBUYWdJbnB1dENvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VzOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcihsYW5ndWFnZXMsIHR5cGVGb3JtYXR0ZXIsIGxvZ2ljLCBsb2dpY0Rpc3BsYXkpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlID0gJyc7XG5cbiAgICAgICAgaWYgKHRoaXMuZmllbGQuY3JpdGVyaWEudmFsdWVzICYmIHRoaXMuZmllbGQuY3JpdGVyaWEudmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQudmFsdWUgPSB0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25BZGQoaXRlbSk6IHZvaWQge1xuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLnZhbHVlID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLmNyaXRlcmlhLm9wZXJhdG9yID0gJz0nO1xuICAgICAgICAgICAgdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZXMgPSBbaXRlbS52YWx1ZV07XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5maWVsZC5jcml0ZXJpYS5vcGVyYXRvciA9ICcnO1xuICAgICAgICB0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlcyA9IFtdO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25SZW1vdmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmllbGQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgdGhpcy5maWVsZC5jcml0ZXJpYS5vcGVyYXRvciA9ICcnO1xuICAgICAgICB0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlcyA9IFtdO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGFnLmZvY3VzKHRydWUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy50YWcuZHJvcGRvd24uc2hvdygpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQbGFjZWhvbGRlckxhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlcy5nZXRBcHBTdHJpbmcoJ0xCTF9TRUxFQ1RfSVRFTScpIHx8ICcnO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjx0YWctaW5wdXQgI3RhZ1xuICAgICAgICAgICAob25BZGQpPVwib25BZGQoJGV2ZW50KVwiXG4gICAgICAgICAgIChvblJlbW92ZSk9XCJvblJlbW92ZSgpXCJcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhbHVlc1wiXG4gICAgICAgICAgIFtjbGFzc109XCJnZXRJbnZhbGlkQ2xhc3MoKVwiXG4gICAgICAgICAgIFtjbGVhck9uQmx1cl09XCJ0cnVlXCJcbiAgICAgICAgICAgW2Rpc3BsYXlCeV09XCInbGFiZWwnXCJcbiAgICAgICAgICAgW2lkZW50aWZ5QnldPVwiJ3ZhbHVlJ1wiXG4gICAgICAgICAgIFtpbnB1dENsYXNzXT1cImdldEludmFsaWRDbGFzcygpXCJcbiAgICAgICAgICAgW29ubHlGcm9tQXV0b2NvbXBsZXRlXT1cInRydWVcIlxuICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZ2V0UGxhY2Vob2xkZXJMYWJlbCgpXCJcbiAgICAgICAgICAgW3NlY29uZGFyeVBsYWNlaG9sZGVyXT1cImdldFBsYWNlaG9sZGVyTGFiZWwoKVwiXG4gICAgICAgICAgIG1heEl0ZW1zPVwiMVwiPlxuICAgIDx0YWctaW5wdXQtZHJvcGRvd24gW2F1dG9jb21wbGV0ZUl0ZW1zXT1cInRoaXMub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzcGxheUJ5XT1cIidsYWJlbCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2lkZW50aWZ5QnldPVwiJ3ZhbHVlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBba2VlcE9wZW5dPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dEcm9wZG93bklmRW1wdHldPVwidHJ1ZVwiPlxuICAgIDwvdGFnLWlucHV0LWRyb3Bkb3duPlxuPC90YWctaW5wdXQ+XG4iXX0=