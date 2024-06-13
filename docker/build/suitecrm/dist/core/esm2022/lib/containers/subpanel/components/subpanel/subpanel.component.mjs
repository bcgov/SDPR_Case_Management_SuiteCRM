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
import { Observable } from 'rxjs';
import { SubpanelTableAdapter } from '../../adapters/table.adapter';
import { LanguageStore } from '../../../../store/language/language.store';
import { SubpanelStore } from '../../store/subpanel/subpanel.store';
import { SubpanelActionManager } from './action-manager.service';
import { SubpanelTableAdapterFactory } from '../../adapters/table.adapter.factory';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { SubpanelFilterAdapterFactory } from "../../adapters/filter.adapter.factory";
import { SubpanelActionAdapterFactory } from "../../adapters/actions.adapter.factory";
import * as i0 from "@angular/core";
import * as i1 from "./action-manager.service";
import * as i2 from "../../../../store/language/language.store";
import * as i3 from "../../adapters/table.adapter.factory";
import * as i4 from "../../../../store/user-preference/user-preference.store";
import * as i5 from "../../../../store/system-config/system-config.store";
import * as i6 from "../../adapters/filter.adapter.factory";
import * as i7 from "../../adapters/actions.adapter.factory";
import * as i8 from "@angular/common";
import * as i9 from "../../../../components/image/image.component";
import * as i10 from "../../../../components/panel/panel.component";
import * as i11 from "../../../../components/table/table.component";
import * as i12 from "../../../list-filter/components/list-filter/list-filter.component";
import * as i13 from "../../../../components/action-group-menu/action-group-menu.component";
function SubpanelComponent_scrm_list_filter_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-list-filter", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("config", ctx_r0.filterConfig);
} }
class SubpanelComponent {
    constructor(actionManager, languages, tableAdapterFactory, preferences, systemConfigs, filterAdapterFactory, actionAdapterFactory) {
        this.actionManager = actionManager;
        this.languages = languages;
        this.tableAdapterFactory = tableAdapterFactory;
        this.preferences = preferences;
        this.systemConfigs = systemConfigs;
        this.filterAdapterFactory = filterAdapterFactory;
        this.actionAdapterFactory = actionAdapterFactory;
    }
    ngOnInit() {
        this.buildAdapters();
        if (this.maxColumns$) {
            this.tableConfig.maxColumns$ = this.maxColumns$;
        }
        if (this.store?.metadata?.max_height) {
            this.tableConfig.maxListHeight = this.store.metadata.max_height;
        }
        if (!this.tableConfig?.maxListHeight) {
            const ui = this.systemConfigs.getConfigValue('ui') ?? {};
            this.tableConfig.maxListHeight = ui.subpanel_max_height;
        }
        this.tableConfig.paginationType = this?.store?.metadata?.pagination_type ?? this.tableConfig.paginationType;
        const parentModule = this.store.parentModule;
        const module = this.store.recordList.getModule();
        const sort = this.preferences.getUi(parentModule, module + '-subpanel-sort');
        if (sort) {
            this.store.recordList.updateSorting(sort.orderBy, sort.sortOrder);
        }
        this.closeButton = {
            onClick: () => {
                this.onClose && this.onClose();
            }
        };
    }
    getActionContext() {
        const module = this.store?.metadata?.module ?? '';
        return { module };
    }
    buildAdapters() {
        this.adapter = this.tableAdapterFactory.create(this.store);
        this.tableConfig = this.adapter.getTable();
        this.filterAdapter = this.filterAdapterFactory.create(this.store);
        this.filterConfig = this.filterAdapter.getConfig();
        this.actionsAdapter = this.actionAdapterFactory.create(this.store);
    }
    static { this.ɵfac = function SubpanelComponent_Factory(t) { return new (t || SubpanelComponent)(i0.ɵɵdirectiveInject(i1.SubpanelActionManager), i0.ɵɵdirectiveInject(i2.LanguageStore), i0.ɵɵdirectiveInject(i3.SubpanelTableAdapterFactory), i0.ɵɵdirectiveInject(i4.UserPreferenceStore), i0.ɵɵdirectiveInject(i5.SystemConfigStore), i0.ɵɵdirectiveInject(i6.SubpanelFilterAdapterFactory), i0.ɵɵdirectiveInject(i7.SubpanelActionAdapterFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubpanelComponent, selectors: [["scrm-subpanel"]], inputs: { store: "store", maxColumns$: "maxColumns$", onClose: "onClose", filterConfig: "filterConfig" }, features: [i0.ɵɵProvidersFeature([
                SubpanelTableAdapter
            ])], decls: 9, vars: 9, consts: [["mode", "closable", "bodyPadding", "0", 3, "title", "close", "klass"], ["panel-icon-area", "", 1, "subpanel-icon", "pl-1"], [3, "image"], ["panel-header-button", ""], ["buttonClass", "btn btn-sm btn-outline-light", 3, "config", "actionContext", "actionLimitConfig"], ["panel-body", ""], [3, "config", 4, "ngIf"], [3, "config"]], template: function SubpanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "scrm-panel", 0)(2, "span", 1);
            i0.ɵɵelement(3, "scrm-image", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵelement(5, "scrm-action-group-menu", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵtemplate(7, SubpanelComponent_scrm_list_filter_7_Template, 1, 1, "scrm-list-filter", 6);
            i0.ɵɵelement(8, "scrm-table", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            let tmp_2_0;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("title", ctx.store.getTitle())("close", ctx.closeButton)("klass", (tmp_2_0 = "subpanel-" + (ctx.store == null ? null : ctx.store.metadata == null ? null : ctx.store.metadata.name)) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("image", ctx.store.getIcon());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("config", ctx.actionsAdapter)("actionContext", ctx.getActionContext())("actionLimitConfig", "subpanelview_actions_limits");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.store.showFilter);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("config", ctx.tableConfig);
        } }, dependencies: [i8.NgIf, i9.ImageComponent, i10.PanelComponent, i11.TableComponent, i12.ListFilterComponent, i13.ActionGroupMenuComponent], encapsulation: 2 }); }
}
export { SubpanelComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelComponent, [{
        type: Component,
        args: [{ selector: 'scrm-subpanel', providers: [
                    SubpanelTableAdapter
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container>\n    <scrm-panel [title]=\"store.getTitle()\" mode=\"closable\" [close]=\"closeButton\" bodyPadding=\"0\" [klass]=\"'subpanel-' + store?.metadata?.name ?? ''\">\n        <span class=\"subpanel-icon pl-1\" panel-icon-area>\n            <scrm-image [image]=\"store.getIcon()\"></scrm-image>\n        </span>\n        <span panel-header-button>\n            <scrm-action-group-menu [config]=\"actionsAdapter\"\n                                    [actionContext]=\"getActionContext()\"\n                                    [actionLimitConfig]=\"'subpanelview_actions_limits'\"\n                                    buttonClass=\"btn btn-sm btn-outline-light\"\n            ></scrm-action-group-menu>\n        </span>\n        <div panel-body>\n            <scrm-list-filter *ngIf=\"store.showFilter\" [config]=\"filterConfig\"></scrm-list-filter>\n            <scrm-table [config]=\"tableConfig\"></scrm-table>\n        </div>\n    </scrm-panel>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.SubpanelActionManager }, { type: i2.LanguageStore }, { type: i3.SubpanelTableAdapterFactory }, { type: i4.UserPreferenceStore }, { type: i5.SystemConfigStore }, { type: i6.SubpanelFilterAdapterFactory }, { type: i7.SubpanelActionAdapterFactory }]; }, { store: [{
            type: Input
        }], maxColumns$: [{
            type: Input
        }], onClose: [{
            type: Input
        }], filterConfig: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvc3VicGFuZWwvY29tcG9uZW50cy9zdWJwYW5lbC9zdWJwYW5lbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zdWJwYW5lbC9jb21wb25lbnRzL3N1YnBhbmVsL3N1YnBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUV2RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRWhDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDakYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDNUYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFFdEYsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFFbkYsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sd0NBQXdDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBeEUsc0NBQXNGOzs7SUFBM0MsNENBQXVCOztBREc5RSxNQU9hLGlC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Q0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkUsQ0FBQztrRkF0RVEsaUJBQWlCO29FQUFqQixpQkFBaUIsNktBSmY7Z0JBQ1Asb0JBQW9CO2FBQ3ZCO1lDckJMLDZCQUFjO1lBQ1YscUNBQWlKLGNBQUE7WUFFekksZ0NBQW1EO1lBQ3ZELGlCQUFPO1lBQ1AsK0JBQTBCO1lBQ3RCLDRDQUkwQjtZQUM5QixpQkFBTztZQUNQLDhCQUFnQjtZQUNaLDRGQUFzRjtZQUN0RixnQ0FBZ0Q7WUFDcEQsaUJBQU0sRUFBQTtZQUVkLDBCQUFlOzs7WUFoQkMsZUFBMEI7WUFBMUIsNENBQTBCLDBCQUFBLDhLQUFBO1lBRWxCLGVBQXlCO1lBQXpCLDJDQUF5QjtZQUdiLGVBQXlCO1lBQXpCLDJDQUF5Qix5Q0FBQSxvREFBQTtZQU85QixlQUFzQjtZQUF0QiwyQ0FBc0I7WUFDN0IsZUFBc0I7WUFBdEIsd0NBQXNCOzs7U0RTakMsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FQN0IsU0FBUzsyQkFDSSxlQUFlLGFBRWQ7b0JBQ1Asb0JBQW9CO2lCQUN2QjtzU0FHUSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb25Db250ZXh0LCBCdXR0b25Hcm91cEludGVyZmFjZSwgQnV0dG9uSW50ZXJmYWNlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7VGFibGVDb25maWd9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kZWwnO1xuaW1wb3J0IHtTdWJwYW5lbFRhYmxlQWRhcHRlcn0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvdGFibGUuYWRhcHRlcic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7U3VicGFuZWxTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvc3VicGFuZWwvc3VicGFuZWwuc3RvcmUnO1xuaW1wb3J0IHtTdWJwYW5lbEFjdGlvbk1hbmFnZXJ9IGZyb20gJy4vYWN0aW9uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQge1N1YnBhbmVsVGFibGVBZGFwdGVyRmFjdG9yeX0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvdGFibGUuYWRhcHRlci5mYWN0b3J5JztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlXCI7XG5pbXBvcnQge0ZpbHRlckNvbmZpZ30gZnJvbSBcIi4uLy4uLy4uL2xpc3QtZmlsdGVyL2NvbXBvbmVudHMvbGlzdC1maWx0ZXIvbGlzdC1maWx0ZXIubW9kZWxcIjtcbmltcG9ydCB7U3VicGFuZWxGaWx0ZXJBZGFwdGVyRmFjdG9yeX0gZnJvbSBcIi4uLy4uL2FkYXB0ZXJzL2ZpbHRlci5hZGFwdGVyLmZhY3RvcnlcIjtcbmltcG9ydCB7U3VicGFuZWxGaWx0ZXJBZGFwdGVyfSBmcm9tIFwiLi4vLi4vYWRhcHRlcnMvZmlsdGVyLmFkYXB0ZXJcIjtcbmltcG9ydCB7U3VicGFuZWxBY3Rpb25BZGFwdGVyRmFjdG9yeX0gZnJvbSBcIi4uLy4uL2FkYXB0ZXJzL2FjdGlvbnMuYWRhcHRlci5mYWN0b3J5XCI7XG5pbXBvcnQge1N1YnBhbmVsQWN0aW9uc0FkYXB0ZXJ9IGZyb20gXCIuLi8uLi9hZGFwdGVycy9hY3Rpb25zLmFkYXB0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXN1YnBhbmVsJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3N1YnBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgU3VicGFuZWxUYWJsZUFkYXB0ZXJcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1YnBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBzdG9yZTogU3VicGFuZWxTdG9yZTtcbiAgICBASW5wdXQoKSBtYXhDb2x1bW5zJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIEBJbnB1dCgpIG9uQ2xvc2U6IEZ1bmN0aW9uO1xuICAgIEBJbnB1dCgpIGZpbHRlckNvbmZpZzogRmlsdGVyQ29uZmlnO1xuXG4gICAgY2xvc2VCdXR0b246IEJ1dHRvbkludGVyZmFjZTtcbiAgICBhZGFwdGVyOiBTdWJwYW5lbFRhYmxlQWRhcHRlcjtcbiAgICBjb25maWckOiBPYnNlcnZhYmxlPEJ1dHRvbkdyb3VwSW50ZXJmYWNlPjtcbiAgICB0YWJsZUNvbmZpZzogVGFibGVDb25maWc7XG4gICAgZmlsdGVyQWRhcHRlcjogU3VicGFuZWxGaWx0ZXJBZGFwdGVyO1xuICAgIGFjdGlvbnNBZGFwdGVyOiBTdWJwYW5lbEFjdGlvbnNBZGFwdGVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25NYW5hZ2VyOiBTdWJwYW5lbEFjdGlvbk1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZXM6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB0YWJsZUFkYXB0ZXJGYWN0b3J5OiBTdWJwYW5lbFRhYmxlQWRhcHRlckZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgZmlsdGVyQWRhcHRlckZhY3Rvcnk6IFN1YnBhbmVsRmlsdGVyQWRhcHRlckZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25BZGFwdGVyRmFjdG9yeTogU3VicGFuZWxBY3Rpb25BZGFwdGVyRmFjdG9yeVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuYnVpbGRBZGFwdGVycygpO1xuXG4gICAgICAgIGlmICh0aGlzLm1heENvbHVtbnMkKSB7XG4gICAgICAgICAgICB0aGlzLnRhYmxlQ29uZmlnLm1heENvbHVtbnMkID0gdGhpcy5tYXhDb2x1bW5zJDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0b3JlPy5tZXRhZGF0YT8ubWF4X2hlaWdodCkge1xuICAgICAgICAgICAgdGhpcy50YWJsZUNvbmZpZy5tYXhMaXN0SGVpZ2h0ID0gdGhpcy5zdG9yZS5tZXRhZGF0YS5tYXhfaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnRhYmxlQ29uZmlnPy5tYXhMaXN0SGVpZ2h0KSB7XG4gICAgICAgICAgICBjb25zdCB1aSA9IHRoaXMuc3lzdGVtQ29uZmlncy5nZXRDb25maWdWYWx1ZSgndWknKSA/PyB7fTtcbiAgICAgICAgICAgIHRoaXMudGFibGVDb25maWcubWF4TGlzdEhlaWdodCA9IHVpLnN1YnBhbmVsX21heF9oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhYmxlQ29uZmlnLnBhZ2luYXRpb25UeXBlID0gdGhpcz8uc3RvcmU/Lm1ldGFkYXRhPy5wYWdpbmF0aW9uX3R5cGUgPz8gdGhpcy50YWJsZUNvbmZpZy5wYWdpbmF0aW9uVHlwZTtcblxuICAgICAgICBjb25zdCBwYXJlbnRNb2R1bGUgPSB0aGlzLnN0b3JlLnBhcmVudE1vZHVsZTtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5zdG9yZS5yZWNvcmRMaXN0LmdldE1vZHVsZSgpO1xuXG4gICAgICAgIGNvbnN0IHNvcnQgPSB0aGlzLnByZWZlcmVuY2VzLmdldFVpKHBhcmVudE1vZHVsZSwgbW9kdWxlICsgJy1zdWJwYW5lbC1zb3J0Jyk7XG5cbiAgICAgICAgaWYgKHNvcnQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC51cGRhdGVTb3J0aW5nKHNvcnQub3JkZXJCeSwgc29ydC5zb3J0T3JkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xvc2UgJiYgdGhpcy5vbkNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuICAgIH1cblxuICAgIGdldEFjdGlvbkNvbnRleHQoKTogQWN0aW9uQ29udGV4dCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuc3RvcmU/Lm1ldGFkYXRhPy5tb2R1bGUgPz8gJyc7XG4gICAgICAgIHJldHVybiB7bW9kdWxlfSBhcyBBY3Rpb25Db250ZXh0O1xuICAgIH1cblxuICAgIGJ1aWxkQWRhcHRlcnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRhcHRlciA9IHRoaXMudGFibGVBZGFwdGVyRmFjdG9yeS5jcmVhdGUodGhpcy5zdG9yZSk7XG4gICAgICAgIHRoaXMudGFibGVDb25maWcgPSB0aGlzLmFkYXB0ZXIuZ2V0VGFibGUoKTtcbiAgICAgICAgdGhpcy5maWx0ZXJBZGFwdGVyID0gdGhpcy5maWx0ZXJBZGFwdGVyRmFjdG9yeS5jcmVhdGUodGhpcy5zdG9yZSk7XG4gICAgICAgIHRoaXMuZmlsdGVyQ29uZmlnID0gdGhpcy5maWx0ZXJBZGFwdGVyLmdldENvbmZpZygpO1xuICAgICAgICB0aGlzLmFjdGlvbnNBZGFwdGVyID0gdGhpcy5hY3Rpb25BZGFwdGVyRmFjdG9yeS5jcmVhdGUodGhpcy5zdG9yZSk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lcj5cbiAgICA8c2NybS1wYW5lbCBbdGl0bGVdPVwic3RvcmUuZ2V0VGl0bGUoKVwiIG1vZGU9XCJjbG9zYWJsZVwiIFtjbG9zZV09XCJjbG9zZUJ1dHRvblwiIGJvZHlQYWRkaW5nPVwiMFwiIFtrbGFzc109XCInc3VicGFuZWwtJyArIHN0b3JlPy5tZXRhZGF0YT8ubmFtZSA/PyAnJ1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInN1YnBhbmVsLWljb24gcGwtMVwiIHBhbmVsLWljb24tYXJlYT5cbiAgICAgICAgICAgIDxzY3JtLWltYWdlIFtpbWFnZV09XCJzdG9yZS5nZXRJY29uKClcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gcGFuZWwtaGVhZGVyLWJ1dHRvbj5cbiAgICAgICAgICAgIDxzY3JtLWFjdGlvbi1ncm91cC1tZW51IFtjb25maWddPVwiYWN0aW9uc0FkYXB0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGlvbkNvbnRleHRdPVwiZ2V0QWN0aW9uQ29udGV4dCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthY3Rpb25MaW1pdENvbmZpZ109XCInc3VicGFuZWx2aWV3X2FjdGlvbnNfbGltaXRzJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25DbGFzcz1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtbGlnaHRcIlxuICAgICAgICAgICAgPjwvc2NybS1hY3Rpb24tZ3JvdXAtbWVudT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IHBhbmVsLWJvZHk+XG4gICAgICAgICAgICA8c2NybS1saXN0LWZpbHRlciAqbmdJZj1cInN0b3JlLnNob3dGaWx0ZXJcIiBbY29uZmlnXT1cImZpbHRlckNvbmZpZ1wiPjwvc2NybS1saXN0LWZpbHRlcj5cbiAgICAgICAgICAgIDxzY3JtLXRhYmxlIFtjb25maWddPVwidGFibGVDb25maWdcIj48L3Njcm0tdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2NybS1wYW5lbD5cbjwvbmctY29udGFpbmVyPlxuIl19