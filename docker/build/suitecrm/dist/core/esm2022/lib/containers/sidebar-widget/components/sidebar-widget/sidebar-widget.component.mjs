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
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { SidebarWidgetRegistry } from './sidebar-widget.registry';
import * as i0 from "@angular/core";
import * as i1 from "./sidebar-widget.registry";
import * as i2 from "@angular/common";
import * as i3 from "ng-dynamic-component";
import * as i4 from "../../../../components/label/label.component";
function SidebarWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵelement(2, "scrm-label", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", ctx_r0.getErrorMessage());
} }
const _c0 = function (a0, a1, a2) { return { "config": a0, "context": a1, "context$": a2 }; };
function SidebarWidgetComponent_ndc_dynamic_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ndc-dynamic", 5);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ndcDynamicComponent", ctx_r1.componentType)("ndcDynamicInputs", i0.ɵɵpureFunction3(2, _c0, ctx_r1.config, ctx_r1.context, ctx_r1.context$));
} }
class SidebarWidgetComponent extends BaseWidgetComponent {
    constructor(registry) {
        super();
        this.registry = registry;
    }
    get componentType() {
        const module = this.context.module ?? 'default';
        return this.registry.get(module, this.type);
    }
    getErrorMessage() {
        if (!this.type || !this.config) {
            return 'LBL_CONFIG_NO_CONFIG';
        }
        if (!this.componentType) {
            return 'LBL_WIDGET_NOT_FOUND';
        }
        return 'LBL_BAD_CONFIG';
    }
    static { this.ɵfac = function SidebarWidgetComponent_Factory(t) { return new (t || SidebarWidgetComponent)(i0.ɵɵdirectiveInject(i1.SidebarWidgetRegistry)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidebarWidgetComponent, selectors: [["scrm-sidebar-widget"]], inputs: { type: "type" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["class", "d-flex mb-4 mt-4 justify-content-center", 4, "ngIf"], [3, "ndcDynamicComponent", "ndcDynamicInputs", 4, "ngIf"], [1, "d-flex", "mb-4", "mt-4", "justify-content-center"], [1, "lead"], [3, "labelKey"], [3, "ndcDynamicComponent", "ndcDynamicInputs"]], template: function SidebarWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SidebarWidgetComponent_div_0_Template, 3, 1, "div", 0);
            i0.ɵɵtemplate(1, SidebarWidgetComponent_ndc_dynamic_1_Template, 1, 6, "ndc-dynamic", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !(ctx.type && ctx.config && ctx.componentType));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.type && ctx.config && ctx.componentType);
        } }, dependencies: [i2.NgIf, i3.DynamicIoDirective, i3.DynamicComponent, i4.LabelComponent], encapsulation: 2 }); }
}
export { SidebarWidgetComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarWidgetComponent, [{
        type: Component,
        args: [{ selector: 'scrm-sidebar-widget', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div *ngIf=\"!(type && config && componentType)\"\n     class=\"d-flex mb-4 mt-4 justify-content-center\">\n    <div class=\"lead\">\n        <scrm-label [labelKey]=\"getErrorMessage()\"></scrm-label>\n    </div>\n</div>\n<ndc-dynamic *ngIf=\"type && config && componentType\"\n             [ndcDynamicComponent]=\"componentType\"\n             [ndcDynamicInputs]=\"{\n                'config': config,\n                'context': context,\n                'context$': context$\n            }\"\n></ndc-dynamic>\n" }]
    }], function () { return [{ type: i1.SidebarWidgetRegistry }]; }, { type: [{
            type: Input,
            args: ['type']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvc2lkZWJhci13aWRnZXQvY29tcG9uZW50cy9zaWRlYmFyLXdpZGdldC9zaWRlYmFyLXdpZGdldC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL3NpZGViYXItd2lkZ2V0L3NpZGViYXItd2lkZ2V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7OztJQ0RoRSw4QkFDcUQsYUFBQTtJQUU3QyxnQ0FBd0Q7SUFDNUQsaUJBQU0sRUFBQTs7O0lBRFUsZUFBOEI7SUFBOUIsbURBQThCOzs7O0lBR2xELGlDQU9lOzs7SUFORiwwREFBcUMsZ0dBQUE7O0FESmxELE1BS2Esc0JBQXVCLFNBQVEsbUJBQW1CO0lBSTNELFlBQXNCLFFBQStCO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRFUsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7SUFFckQsQ0FBQztJQUVELElBQUksYUFBYTtRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQztRQUNoRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDNUIsT0FBTyxzQkFBc0IsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLE9BQU8sc0JBQXNCLENBQUM7U0FDakM7UUFFRCxPQUFPLGdCQUFnQixDQUFDO0lBQzVCLENBQUM7dUZBdkJRLHNCQUFzQjtvRUFBdEIsc0JBQXNCO1lDUm5DLHVFQUtNO1lBQ04sdUZBT2U7O1lBYlQscUVBQXdDO1lBTWhDLGVBQXFDO1lBQXJDLGtFQUFxQzs7O1NERXRDLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0kscUJBQXFCO3dFQU1oQixJQUFJO2tCQUFsQixLQUFLO21CQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jhc2VXaWRnZXRDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL3dpZGdldHMvYmFzZS13aWRnZXQubW9kZWwnO1xuaW1wb3J0IHtTaWRlYmFyV2lkZ2V0UmVnaXN0cnl9IGZyb20gJy4vc2lkZWJhci13aWRnZXQucmVnaXN0cnknO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tc2lkZWJhci13aWRnZXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyV2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldENvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoJ3R5cGUnKSB0eXBlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVnaXN0cnk6IFNpZGViYXJXaWRnZXRSZWdpc3RyeSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBjb21wb25lbnRUeXBlKCk6IGFueSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuY29udGV4dC5tb2R1bGUgPz8gJ2RlZmF1bHQnO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RyeS5nZXQobW9kdWxlLCB0aGlzLnR5cGUpO1xuICAgIH1cblxuICAgIGdldEVycm9yTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRoaXMudHlwZSB8fCAhdGhpcy5jb25maWcpIHtcbiAgICAgICAgICAgIHJldHVybiAnTEJMX0NPTkZJR19OT19DT05GSUcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiAnTEJMX1dJREdFVF9OT1RfRk9VTkQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICdMQkxfQkFEX0NPTkZJRyc7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiAqbmdJZj1cIiEodHlwZSAmJiBjb25maWcgJiYgY29tcG9uZW50VHlwZSlcIlxuICAgICBjbGFzcz1cImQtZmxleCBtYi00IG10LTQganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJsZWFkXCI+XG4gICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJnZXRFcnJvck1lc3NhZ2UoKVwiPjwvc2NybS1sYWJlbD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPG5kYy1keW5hbWljICpuZ0lmPVwidHlwZSAmJiBjb25maWcgJiYgY29tcG9uZW50VHlwZVwiXG4gICAgICAgICAgICAgW25kY0R5bmFtaWNDb21wb25lbnRdPVwiY29tcG9uZW50VHlwZVwiXG4gICAgICAgICAgICAgW25kY0R5bmFtaWNJbnB1dHNdPVwie1xuICAgICAgICAgICAgICAgICdjb25maWcnOiBjb25maWcsXG4gICAgICAgICAgICAgICAgJ2NvbnRleHQnOiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICdjb250ZXh0JCc6IGNvbnRleHQkXG4gICAgICAgICAgICB9XCJcbj48L25kYy1keW5hbWljPlxuIl19