/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { FieldManager } from "../../../../services/record/field/field.manager";
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/record/field/field.manager";
import * as i2 from "@angular/common";
import * as i3 from "../popup-button/popup-button.component";
import * as i4 from "../../../../fields/field.component";
import * as i5 from "../../../label/label.component";
function RecordDetailsPopupButtonComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5);
    i0.ɵɵelement(2, "scrm-label", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 7);
    i0.ɵɵelement(4, "scrm-field", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const column_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", column_r2.label)("module", ctx_r1.record.module);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("mode", "list")("field", ctx_r1.getField(column_r2, ctx_r1.record))("type", column_r2.type)("record", ctx_r1.record);
} }
function RecordDetailsPopupButtonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, RecordDetailsPopupButtonComponent_div_1_div_1_Template, 5, 6, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.columns);
} }
class RecordDetailsPopupButtonComponent {
    constructor(fieldManager) {
        this.fieldManager = fieldManager;
    }
    getField(column, record) {
        if (!column || !record) {
            return null;
        }
        return this.fieldManager.addField(record, column);
    }
    static { this.ɵfac = function RecordDetailsPopupButtonComponent_Factory(t) { return new (t || RecordDetailsPopupButtonComponent)(i0.ɵɵdirectiveInject(i1.FieldManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordDetailsPopupButtonComponent, selectors: [["scrm-record-details-popup-button"]], inputs: { record: "record", columns: "columns" }, decls: 2, vars: 2, consts: [[3, "icon"], ["popup-content", "", "class", "container container-popover scrollbar-thin", 4, "ngIf"], ["popup-content", "", 1, "container", "container-popover", "scrollbar-thin"], ["class", "row py-1", 4, "ngFor", "ngForOf"], [1, "row", "py-1"], [1, "col", "font-weight-bold", "text-muted"], [3, "labelKey", "module"], [1, "col"], [3, "mode", "field", "type", "record"]], template: function RecordDetailsPopupButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-popup-button", 0);
            i0.ɵɵtemplate(1, RecordDetailsPopupButtonComponent_div_1_Template, 2, 1, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("icon", "dots-vertical");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.columns);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.PopupButtonComponent, i4.FieldComponent, i5.LabelComponent], encapsulation: 2, changeDetection: 0 }); }
}
export { RecordDetailsPopupButtonComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordDetailsPopupButtonComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-details-popup-button', changeDetection: ChangeDetectionStrategy.OnPush, template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-popup-button [icon]=\"'dots-vertical'\">\n    <div popup-content *ngIf=\"columns\" class=\"container container-popover scrollbar-thin\">\n        <div *ngFor=\"let column of columns\" class=\"row py-1\">\n            <div class=\"col font-weight-bold text-muted\">\n                <scrm-label [labelKey]=\"column.label\" [module]=\"record.module\"></scrm-label>\n            </div>\n            <div class=\"col\">\n                <scrm-field [mode]=\"'list'\"\n                            [field]=\"getField(column, record)\"\n                            [type]=\"column.type\"\n                            [record]=\"record\">\n                </scrm-field>\n            </div>\n        </div>\n    </div>\n</scrm-popup-button>\n" }]
    }], function () { return [{ type: i1.FieldManager }]; }, { record: [{
            type: Input
        }], columns: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWRldGFpbHMtcG9wdXAtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3BvcHVwcy9jb21wb25lbnRzL3JlY29yZC1kZXRhaWxzLXBvcHVwLWJ1dHRvbi9yZWNvcmQtZGV0YWlscy1wb3B1cC1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcG9wdXBzL2NvbXBvbmVudHMvcmVjb3JkLWRldGFpbHMtcG9wdXAtYnV0dG9uL3JlY29yZC1kZXRhaWxzLXBvcHVwLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFNeEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlEQUFpRCxDQUFDOzs7Ozs7OztJQ0hyRSw4QkFBcUQsYUFBQTtJQUU3QyxnQ0FBNEU7SUFDaEYsaUJBQU07SUFDTiw4QkFBaUI7SUFDYixnQ0FJYTtJQUNqQixpQkFBTSxFQUFBOzs7O0lBUlUsZUFBeUI7SUFBekIsMENBQXlCLGdDQUFBO0lBR3pCLGVBQWU7SUFBZiw2QkFBZSxvREFBQSx3QkFBQSx5QkFBQTs7O0lBTnZDLDhCQUFzRjtJQUNsRix3RkFXTTtJQUNWLGlCQUFNOzs7SUFac0IsZUFBVTtJQUFWLHdDQUFVOztBREsxQyxNQU1hLGlDQUFpQztJQUsxQyxZQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNoRCxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQXdCLEVBQUUsTUFBYztRQUU3QyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDO2tHQWZRLGlDQUFpQztvRUFBakMsaUNBQWlDO1lDYjlDLDRDQUE0QztZQUN4QyxrRkFhTTtZQUNWLGlCQUFvQjs7WUFmRCxzQ0FBd0I7WUFDbkIsZUFBYTtZQUFiLGtDQUFhOzs7U0RZeEIsaUNBQWlDO3VGQUFqQyxpQ0FBaUM7Y0FON0MsU0FBUzsyQkFDSSxrQ0FBa0MsbUJBRTNCLHVCQUF1QixDQUFDLE1BQU07K0RBS3RDLE1BQU07a0JBQWQsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIENvbHVtbkRlZmluaXRpb24sXG4gICAgRmllbGQsXG4gICAgUmVjb3JkXG59IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0ZpZWxkTWFuYWdlcn0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3JlY29yZC9maWVsZC9maWVsZC5tYW5hZ2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWNvcmQtZGV0YWlscy1wb3B1cC1idXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAncmVjb3JkLWRldGFpbHMtcG9wdXAtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIFJlY29yZERldGFpbHNQb3B1cEJ1dHRvbkNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKSByZWNvcmQ6IFJlY29yZDtcbiAgICBASW5wdXQoKSBjb2x1bW5zOiBDb2x1bW5EZWZpbml0aW9uW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZmllbGRNYW5hZ2VyOiBGaWVsZE1hbmFnZXIpIHtcbiAgICB9XG5cbiAgICBnZXRGaWVsZChjb2x1bW46IENvbHVtbkRlZmluaXRpb24sIHJlY29yZDogUmVjb3JkKTogRmllbGQge1xuXG4gICAgICAgIGlmICghY29sdW1uIHx8ICFyZWNvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGRNYW5hZ2VyLmFkZEZpZWxkKHJlY29yZCwgY29sdW1uKTtcbiAgICB9XG5cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPHNjcm0tcG9wdXAtYnV0dG9uIFtpY29uXT1cIidkb3RzLXZlcnRpY2FsJ1wiPlxuICAgIDxkaXYgcG9wdXAtY29udGVudCAqbmdJZj1cImNvbHVtbnNcIiBjbGFzcz1cImNvbnRhaW5lciBjb250YWluZXItcG9wb3ZlciBzY3JvbGxiYXItdGhpblwiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIGNsYXNzPVwicm93IHB5LTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cImNvbHVtbi5sYWJlbFwiIFttb2R1bGVdPVwicmVjb3JkLm1vZHVsZVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWZpZWxkIFttb2RlXT1cIidsaXN0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImdldEZpZWxkKGNvbHVtbiwgcmVjb3JkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiY29sdW1uLnR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWNvcmRdPVwicmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgPC9zY3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9zY3JtLXBvcHVwLWJ1dHRvbj5cbiJdfQ==