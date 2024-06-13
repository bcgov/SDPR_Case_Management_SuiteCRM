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
import { BaseFieldComponent } from '../../../base/base-field.component';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { ModuleNavigation } from "../../../../services/navigation/module-navigation/module-navigation.service";
import { ModuleNameMapper } from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AppStateStore } from "../../../../store/app-state/app-state.store";
import { ActionNameMapper } from "../../../../services/navigation/action-name-mapper/action-name-mapper.service";
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatters/data-type.formatter.service";
import * as i2 from "../../../field-logic/field-logic.manager";
import * as i3 from "../../../field-logic-display/field-logic-display.manager";
import * as i4 from "../../../../store/user-preference/user-preference.store";
import * as i5 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i6 from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i7 from "../../../../services/navigation/action-name-mapper/action-name-mapper.service";
import * as i8 from "../../../../store/app-state/app-state.store";
import * as i9 from "@ng-bootstrap/ng-bootstrap";
import * as i10 from "@angular/router";
import * as i11 from "@angular/common";
function EmailListFieldsComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("href", "mailto:", ctx_r0.field.value, "", i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.field.value);
} }
function EmailListFieldsComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵlistener("click", function EmailListFieldsComponent_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openEmail()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.field.value);
} }
class EmailListFieldsComponent extends BaseFieldComponent {
    constructor(typeFormatter, logic, logicDisplay, preferences, navigation, moduleNameMapper, actionNameMapper, appState, modalService, router) {
        super(typeFormatter, logic, logicDisplay);
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.preferences = preferences;
        this.navigation = navigation;
        this.moduleNameMapper = moduleNameMapper;
        this.actionNameMapper = actionNameMapper;
        this.appState = appState;
        this.modalService = modalService;
        this.router = router;
    }
    ngOnInit() {
        this.linkType = this.preferences.getUserPreference('email_link_type') || 'mailto';
    }
    openEmail() {
        const view = this.actionNameMapper.toLegacy(this.appState.getView());
        const module = this.moduleNameMapper.toLegacy(this.parent.module);
        const parent_id = this.parent.id;
        const parent_name = this.parent.attributes.name;
        const email = this.field.value;
        let return_id;
        if (view !== 'ListView' && view !== 'index') {
            return_id = parent_id;
        }
        this.router.navigate(['emails', 'compose'], {
            queryParams: {
                return_module: module,
                return_action: view,
                return_id,
                to_addrs_names: email,
                parent_type: module,
                parent_name,
                parent_id,
            }
        });
    }
    static { this.ɵfac = function EmailListFieldsComponent_Factory(t) { return new (t || EmailListFieldsComponent)(i0.ɵɵdirectiveInject(i1.DataTypeFormatter), i0.ɵɵdirectiveInject(i2.FieldLogicManager), i0.ɵɵdirectiveInject(i3.FieldLogicDisplayManager), i0.ɵɵdirectiveInject(i4.UserPreferenceStore), i0.ɵɵdirectiveInject(i5.ModuleNavigation), i0.ɵɵdirectiveInject(i6.ModuleNameMapper), i0.ɵɵdirectiveInject(i7.ActionNameMapper), i0.ɵɵdirectiveInject(i8.AppStateStore), i0.ɵɵdirectiveInject(i9.NgbModal), i0.ɵɵdirectiveInject(i10.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EmailListFieldsComponent, selectors: [["scrm-email-list"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [[1, "mailto-field"], [3, "href", 4, "ngIf"], ["class", "clickable field-link", 3, "click", 4, "ngIf"], [3, "href"], [1, "clickable", "field-link", 3, "click"]], template: function EmailListFieldsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, EmailListFieldsComponent_a_1_Template, 2, 2, "a", 1);
            i0.ɵɵtemplate(2, EmailListFieldsComponent_a_2_Template, 2, 1, "a", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.linkType === "mailto");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.linkType === "sugar");
        } }, dependencies: [i11.NgIf], encapsulation: 2 }); }
}
export { EmailListFieldsComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmailListFieldsComponent, [{
        type: Component,
        args: [{ selector: 'scrm-email-list', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"mailto-field\">\n    <a *ngIf=\"linkType === 'mailto'\" href=\"mailto:{{ this.field.value }}\">{{ this.field.value }}</a>\n\n    <a *ngIf=\"linkType === 'sugar'\" class=\"clickable field-link\" (click)=\"openEmail()\">{{ this.field.value }}</a>\n</div>\n" }]
    }], function () { return [{ type: i1.DataTypeFormatter }, { type: i2.FieldLogicManager }, { type: i3.FieldLogicDisplayManager }, { type: i4.UserPreferenceStore }, { type: i5.ModuleNavigation }, { type: i6.ModuleNameMapper }, { type: i7.ActionNameMapper }, { type: i8.AppStateStore }, { type: i9.NgbModal }, { type: i10.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9lbWFpbC90ZW1wbGF0ZXMvbGlzdC9lbWFpbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2VtYWlsL3RlbXBsYXRlcy9saXN0L2VtYWlsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZEQUE2RCxDQUFDO0FBQzlGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQzVGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZFQUE2RSxDQUFDO0FBQzdHLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLCtFQUErRSxDQUFDO0FBQy9HLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLCtFQUErRSxDQUFDO0FBQy9HLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBEQUEwRCxDQUFDOzs7Ozs7Ozs7Ozs7OztJQ1Q5Riw0QkFBc0U7SUFBQSxZQUFzQjtJQUFBLGlCQUFJOzs7SUFBL0Qsc0ZBQW9DO0lBQUMsZUFBc0I7SUFBdEIsd0NBQXNCOzs7O0lBRTVGLDRCQUFtRjtJQUF0Qiw4SkFBUyxlQUFBLGtCQUFXLENBQUEsSUFBQztJQUFDLFlBQXNCO0lBQUEsaUJBQUk7OztJQUExQixlQUFzQjtJQUF0Qix3Q0FBc0I7O0FEUzdHLE1BS2Esd0JBQXlCLFNBQVEsa0JBQWtCO0lBRzVELFlBQ2MsYUFBZ0MsRUFDaEMsS0FBd0IsRUFDeEIsWUFBc0MsRUFDdEMsV0FBZ0MsRUFDaEMsVUFBNEIsRUFDNUIsZ0JBQWtDLEVBQ2xDLGdCQUFrQyxFQUNsQyxRQUF1QixFQUN2QixZQUFzQixFQUN0QixNQUFjO1FBRXhCLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBWGhDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO1FBQ2hDLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFHNUIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxRQUFRLENBQUM7SUFDdEYsQ0FBQztJQUVELFNBQVM7UUFFTCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNyRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDakMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2hELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBRS9CLElBQUksU0FBUyxDQUFDO1FBQ2QsSUFBSSxJQUFJLEtBQUssVUFBVSxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDekMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUFFO1lBQ3hDLFdBQVcsRUFBRTtnQkFDVCxhQUFhLEVBQUUsTUFBTTtnQkFDckIsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFNBQVM7Z0JBQ1QsY0FBYyxFQUFFLEtBQUs7Z0JBQ3JCLFdBQVcsRUFBRSxNQUFNO2dCQUNuQixXQUFXO2dCQUNYLFNBQVM7YUFDWjtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7eUZBOUNRLHdCQUF3QjtvRUFBeEIsd0JBQXdCO1lDakJyQyw4QkFBMEI7WUFDdEIscUVBQWdHO1lBRWhHLHFFQUE2RztZQUNqSCxpQkFBTTs7WUFIRSxlQUEyQjtZQUEzQixnREFBMkI7WUFFM0IsZUFBMEI7WUFBMUIsK0NBQTBCOzs7U0RjckIsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FMcEMsU0FBUzsyQkFDSSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlRmllbGRDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL2Jhc2UvYmFzZS1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TmdiTW9kYWx9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZVwiO1xuaW1wb3J0IHtBY3Rpb25OYW1lTWFwcGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9hY3Rpb24tbmFtZS1tYXBwZXIvYWN0aW9uLW5hbWUtbWFwcGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1lbWFpbC1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZW1haWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgRW1haWxMaXN0RmllbGRzQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBsaW5rVHlwZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljOiBGaWVsZExvZ2ljTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljRGlzcGxheTogRmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kdWxlTmFtZU1hcHBlcjogTW9kdWxlTmFtZU1hcHBlcixcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbk5hbWVNYXBwZXI6IEFjdGlvbk5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgICAgICBzdXBlcih0eXBlRm9ybWF0dGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5saW5rVHlwZSA9IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ2VtYWlsX2xpbmtfdHlwZScpIHx8ICdtYWlsdG8nO1xuICAgIH1cblxuICAgIG9wZW5FbWFpbCgpIHtcblxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5hY3Rpb25OYW1lTWFwcGVyLnRvTGVnYWN5KHRoaXMuYXBwU3RhdGUuZ2V0VmlldygpKTtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5tb2R1bGVOYW1lTWFwcGVyLnRvTGVnYWN5KHRoaXMucGFyZW50Lm1vZHVsZSk7XG4gICAgICAgIGNvbnN0IHBhcmVudF9pZCA9IHRoaXMucGFyZW50LmlkO1xuICAgICAgICBjb25zdCBwYXJlbnRfbmFtZSA9IHRoaXMucGFyZW50LmF0dHJpYnV0ZXMubmFtZTtcbiAgICAgICAgY29uc3QgZW1haWwgPSB0aGlzLmZpZWxkLnZhbHVlO1xuXG4gICAgICAgIGxldCByZXR1cm5faWQ7XG4gICAgICAgIGlmICh2aWV3ICE9PSAnTGlzdFZpZXcnICYmIHZpZXcgIT09ICdpbmRleCcpIHtcbiAgICAgICAgICAgIHJldHVybl9pZCA9IHBhcmVudF9pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZW1haWxzJywgJ2NvbXBvc2UnXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICByZXR1cm5fbW9kdWxlOiBtb2R1bGUsXG4gICAgICAgICAgICAgICAgcmV0dXJuX2FjdGlvbjogdmlldyxcbiAgICAgICAgICAgICAgICByZXR1cm5faWQsXG4gICAgICAgICAgICAgICAgdG9fYWRkcnNfbmFtZXM6IGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhcmVudF90eXBlOiBtb2R1bGUsXG4gICAgICAgICAgICAgICAgcGFyZW50X25hbWUsXG4gICAgICAgICAgICAgICAgcGFyZW50X2lkLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgY2xhc3M9XCJtYWlsdG8tZmllbGRcIj5cbiAgICA8YSAqbmdJZj1cImxpbmtUeXBlID09PSAnbWFpbHRvJ1wiIGhyZWY9XCJtYWlsdG86e3sgdGhpcy5maWVsZC52YWx1ZSB9fVwiPnt7IHRoaXMuZmllbGQudmFsdWUgfX08L2E+XG5cbiAgICA8YSAqbmdJZj1cImxpbmtUeXBlID09PSAnc3VnYXInXCIgY2xhc3M9XCJjbGlja2FibGUgZmllbGQtbGlua1wiIChjbGljayk9XCJvcGVuRW1haWwoKVwiPnt7IHRoaXMuZmllbGQudmFsdWUgfX08L2E+XG48L2Rpdj5cbiJdfQ==