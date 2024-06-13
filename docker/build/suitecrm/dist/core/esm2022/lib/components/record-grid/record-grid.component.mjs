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
import { Component, Input } from '@angular/core';
import { combineLatestWith } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../field-grid/field-grid.component";
import * as i3 from "../action-group-menu/action-group-menu.component";
function RecordGridComponent_ng_container_0_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵelement(1, "scrm-action-group-menu", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("buttonClass", ctx_r3.config.buttonClass)("config", ctx_r3.config.actions);
} }
function RecordGridComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "scrm-field-grid", 2);
    i0.ɵɵtemplate(2, RecordGridComponent_ng_container_0_div_1_span_2_Template, 2, 2, "span", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("record-grid ", ctx_r1.config && ctx_r1.config.klass || "", "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("actions", !!ctx_r1.config.actions)("appendActions", ctx_r1.config && ctx_r1.config.appendActions || false)("colClass", ctx_r1.config && ctx_r1.config.colClass)("fieldMode", ctx_r1.mode)("fields", ctx_r1.fields)("inputClass", ctx_r1.config && ctx_r1.config.inputClass)("labelClass", ctx_r1.config && ctx_r1.config.labelClass)("labelDisplay", ctx_r1.config && ctx_r1.config.labelDisplay || "top")("maxColumns", ctx_r1.maxColumns)("rowClass", ctx_r1.config && ctx_r1.config.rowClass)("sizeMap", ctx_r1.sizeMap)("colAlignItems", ctx_r1.config.colAlignItems);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.config.actions);
} }
function RecordGridComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordGridComponent_ng_container_0_div_1_Template, 3, 16, "div", 1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, ctx_r0.vm$));
} }
class RecordGridComponent {
    constructor() {
        this.gridButtons = [];
        this.mode = 'detail';
        this.maxColumns = 4;
        this.sizeMap = {
            handset: 1,
            tablet: 2,
            web: 3,
            wide: 4
        };
        this.fields = [];
        this.special = [];
    }
    ngOnInit() {
        if (!this.config) {
            return;
        }
        const config = this.config;
        this.vm$ = config.record$.pipe(combineLatestWith(config.mode$, config.fields$, config.maxColumns$, config.sizeMap$), map(([record, mode, fields, maxColumns, sizeMap]) => {
            this.mode = mode;
            this.maxColumns = maxColumns;
            this.sizeMap = sizeMap;
            this.fields = this.getFields(record, fields);
            return { record, mode, fields, maxColumns };
        }));
    }
    getFields(record, fieldKeys) {
        if (!record || !fieldKeys || !record.fields) {
            return [];
        }
        const fields = [];
        fieldKeys.forEach(fieldKey => {
            if (!record.fields[fieldKey]) {
                return;
            }
            fields.push(record.fields[fieldKey]);
        });
        return fields;
    }
    static { this.ɵfac = function RecordGridComponent_Factory(t) { return new (t || RecordGridComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordGridComponent, selectors: [["scrm-record-grid"]], inputs: { config: "config" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "class", 4, "ngIf"], [3, "actions", "appendActions", "colClass", "fieldMode", "fields", "inputClass", "labelClass", "labelDisplay", "maxColumns", "rowClass", "sizeMap", "colAlignItems"], ["class", "float-right", "field-grid-actions", "", 4, "ngIf"], ["field-grid-actions", "", 1, "float-right"], [3, "buttonClass", "config"]], template: function RecordGridComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordGridComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.config);
        } }, dependencies: [i1.NgIf, i2.FieldGridComponent, i3.ActionGroupMenuComponent, i1.AsyncPipe], encapsulation: 2 }); }
}
export { RecordGridComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordGridComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-grid', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"config\">\n    <div *ngIf=\"(vm$ | async) as vm\" class=\"record-grid {{(config && config.klass) || ''}}\">\n        <scrm-field-grid [actions]=\"!!config.actions\"\n                         [appendActions]=\"(config && config.appendActions) || false\"\n                         [colClass]=\"config && config.colClass\"\n                         [fieldMode]=\"mode\"\n                         [fields]=\"fields\"\n                         [inputClass]=\"config && config.inputClass\"\n                         [labelClass]=\"config && config.labelClass\"\n                         [labelDisplay]=\"(config && config.labelDisplay) || 'top'\"\n                         [maxColumns]=\"maxColumns\"\n                         [rowClass]=\"config && config.rowClass\"\n                         [sizeMap]=\"sizeMap\"\n                         [colAlignItems]=\"config.colAlignItems\"\n        >\n        <span *ngIf=\"config.actions\" class=\"float-right\" field-grid-actions>\n            <scrm-action-group-menu [buttonClass]=\"config.buttonClass\"\n                                    [config]=\"config.actions\"></scrm-action-group-menu>\n        </span>\n        </scrm-field-grid>\n    </div>\n</ng-container>\n" }]
    }], function () { return []; }, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWdyaWQvcmVjb3JkLWdyaWQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWdyaWQvcmVjb3JkLWdyaWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRXZELE9BQU8sRUFBQyxpQkFBaUIsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztJQ2EzQiwrQkFBb0U7SUFDaEUsNENBQzJFO0lBQy9FLGlCQUFPOzs7SUFGcUIsZUFBa0M7SUFBbEMsdURBQWtDLGlDQUFBOzs7SUFmbEUsMkJBQXdGLHlCQUFBO0lBY3BGLDJGQUdPO0lBQ1AsaUJBQWtCLEVBQUE7OztJQWxCVyx5RkFBc0Q7SUFDbEUsZUFBNEI7SUFBNUIsaURBQTRCLHdFQUFBLHFEQUFBLDBCQUFBLHlCQUFBLHlEQUFBLHlEQUFBLHNFQUFBLGlDQUFBLHFEQUFBLDJCQUFBLDhDQUFBO0lBYXRDLGVBQW9CO0lBQXBCLDRDQUFvQjs7O0lBZm5DLDZCQUE2QjtJQUN6QixvRkFtQk07O0lBQ1YsMEJBQWU7OztJQXBCTCxlQUFvQjtJQUFwQix1REFBb0I7O0FESTlCLE1BS2EsbUJBQW1CO0lBa0I1QjtRQWZBLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRWpCLFNBQUksR0FBYSxRQUFRLENBQUM7UUFDMUIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixZQUFPLEdBQWtCO1lBQ3JCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDO1NBQ1YsQ0FBQztRQUNGLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFZLEVBQUUsQ0FBQztJQUt0QixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsT0FBTztTQUNWO1FBQ0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUUzQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUMxQixpQkFBaUIsQ0FDVCxNQUFNLENBQUMsS0FBSyxFQUNaLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsTUFBTSxDQUFDLFdBQVcsRUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FDdEIsRUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDN0MsT0FBTyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWMsRUFBRSxTQUFtQjtRQUN6QyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUN6QyxPQUFPLEVBQUUsQ0FBQztTQUNiO1FBRUQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWxCLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzFCLE9BQU87YUFDVjtZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztvRkEzRFEsbUJBQW1CO29FQUFuQixtQkFBbUI7WUNWaEMsc0ZBcUJlOztZQXJCQSxpQ0FBWTs7O1NEVWQsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FML0IsU0FBUzsyQkFDSSxrQkFBa0I7c0NBTW5CLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWVsZCwgUmVjb3JkLCBTY3JlZW5TaXplTWFwLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UmVjb3JkR3JpZENvbmZpZywgUmVjb3JkR3JpZFZpZXdNb2RlbH0gZnJvbSAnLi9yZWNvcmQtZ3JpZC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWNvcmQtZ3JpZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlY29yZC1ncmlkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgY29uZmlnOiBSZWNvcmRHcmlkQ29uZmlnO1xuICAgIGdyaWRCdXR0b25zID0gW107XG5cbiAgICBtb2RlOiBWaWV3TW9kZSA9ICdkZXRhaWwnO1xuICAgIG1heENvbHVtbnM6IG51bWJlciA9IDQ7XG4gICAgc2l6ZU1hcDogU2NyZWVuU2l6ZU1hcCA9IHtcbiAgICAgICAgaGFuZHNldDogMSxcbiAgICAgICAgdGFibGV0OiAyLFxuICAgICAgICB3ZWI6IDMsXG4gICAgICAgIHdpZGU6IDRcbiAgICB9O1xuICAgIGZpZWxkczogRmllbGRbXSA9IFtdO1xuICAgIHNwZWNpYWw6IEZpZWxkW10gPSBbXTtcblxuICAgIHZtJDogT2JzZXJ2YWJsZTxSZWNvcmRHcmlkVmlld01vZGVsPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG5cbiAgICAgICAgdGhpcy52bSQgPSBjb25maWcucmVjb3JkJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgoXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5tb2RlJCxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmZpZWxkcyQsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5tYXhDb2x1bW5zJCxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnNpemVNYXAkXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWFwKChbcmVjb3JkLCBtb2RlLCBmaWVsZHMsIG1heENvbHVtbnMsIHNpemVNYXBdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1heENvbHVtbnMgPSBtYXhDb2x1bW5zO1xuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZU1hcCA9IHNpemVNYXA7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMgPSB0aGlzLmdldEZpZWxkcyhyZWNvcmQsIGZpZWxkcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtyZWNvcmQsIG1vZGUsIGZpZWxkcywgbWF4Q29sdW1uc307XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldEZpZWxkcyhyZWNvcmQ6IFJlY29yZCwgZmllbGRLZXlzOiBzdHJpbmdbXSk6IEZpZWxkW10ge1xuICAgICAgICBpZiAoIXJlY29yZCB8fCAhZmllbGRLZXlzIHx8ICFyZWNvcmQuZmllbGRzKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWVsZHMgPSBbXTtcblxuICAgICAgICBmaWVsZEtleXMuZm9yRWFjaChmaWVsZEtleSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlY29yZC5maWVsZHNbZmllbGRLZXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmllbGRzLnB1c2gocmVjb3JkLmZpZWxkc1tmaWVsZEtleV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmllbGRzO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWdcIj5cbiAgICA8ZGl2ICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiIGNsYXNzPVwicmVjb3JkLWdyaWQge3soY29uZmlnICYmIGNvbmZpZy5rbGFzcykgfHwgJyd9fVwiPlxuICAgICAgICA8c2NybS1maWVsZC1ncmlkIFthY3Rpb25zXT1cIiEhY29uZmlnLmFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRBY3Rpb25zXT1cIihjb25maWcgJiYgY29uZmlnLmFwcGVuZEFjdGlvbnMpIHx8IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbY29sQ2xhc3NdPVwiY29uZmlnICYmIGNvbmZpZy5jb2xDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkTW9kZV09XCJtb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRzXT1cImZpZWxkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiY29uZmlnICYmIGNvbmZpZy5pbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxDbGFzc109XCJjb25maWcgJiYgY29uZmlnLmxhYmVsQ2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbERpc3BsYXldPVwiKGNvbmZpZyAmJiBjb25maWcubGFiZWxEaXNwbGF5KSB8fCAndG9wJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW21heENvbHVtbnNdPVwibWF4Q29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd0NsYXNzXT1cImNvbmZpZyAmJiBjb25maWcucm93Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtzaXplTWFwXT1cInNpemVNYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2xBbGlnbkl0ZW1zXT1cImNvbmZpZy5jb2xBbGlnbkl0ZW1zXCJcbiAgICAgICAgPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImNvbmZpZy5hY3Rpb25zXCIgY2xhc3M9XCJmbG9hdC1yaWdodFwiIGZpZWxkLWdyaWQtYWN0aW9ucz5cbiAgICAgICAgICAgIDxzY3JtLWFjdGlvbi1ncm91cC1tZW51IFtidXR0b25DbGFzc109XCJjb25maWcuYnV0dG9uQ2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJjb25maWcuYWN0aW9uc1wiPjwvc2NybS1hY3Rpb24tZ3JvdXAtbWVudT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3Njcm0tZmllbGQtZ3JpZD5cbiAgICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19