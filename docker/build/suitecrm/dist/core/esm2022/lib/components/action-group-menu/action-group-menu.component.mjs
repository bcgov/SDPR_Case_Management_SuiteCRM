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
import { Button, isFalse } from 'common';
import { BehaviorSubject, combineLatestWith } from 'rxjs';
import { map } from 'rxjs/operators';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { ScreenSize, ScreenSizeObserverService } from '../../services/ui/screen-size-observer/screen-size-observer.service';
import { LanguageStore } from '../../store/language/language.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i3 from "../../store/system-config/system-config.store";
import * as i4 from "@angular/common";
import * as i5 from "../button/button.component";
import * as i6 from "../button-group/button-group.component";
import * as i7 from "../label/label.component";
import * as i8 from "../dynamic-label/dynamic-label.component";
import * as i9 from "../inline-loading-spinner/inline-loading-spinner.component";
function ActionGroupMenuComponent_ng_container_0_ng_container_2_scrm_button_group_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button-group", 2);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("config$", ctx_r5.config$)("klass", ctx_r5.buttonGroupClass);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ActionGroupMenuComponent_ng_container_0_ng_container_2_scrm_button_group_1_Template, 1, 2, "scrm-button-group", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.config$);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-label", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", ctx_r6.confirmationLabel);
} }
const _c0 = function () { return {}; };
function ActionGroupMenuComponent_ng_container_0_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-dynamic-label", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    let tmp_1_0;
    let tmp_2_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", ctx_r7.confirmationDynamicLabel)("module", (tmp_1_0 = ctx_r7.actionContext == null ? null : ctx_r7.actionContext.module) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "")("fields", (tmp_2_0 = ctx_r7.actionContext == null ? null : ctx_r7.actionContext.record == null ? null : ctx_r7.actionContext.record.fields) !== null && tmp_2_0 !== undefined ? tmp_2_0 : i0.ɵɵpureFunction0(3, _c0));
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_3_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "scrm-button", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r8.inlineCancelButton);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_3_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "scrm-button", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r9.inlineConfirmButton);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, ActionGroupMenuComponent_ng_container_0_ng_container_3_div_2_Template, 2, 1, "div", 4);
    i0.ɵɵtemplate(3, ActionGroupMenuComponent_ng_container_0_ng_container_3_div_3_Template, 2, 4, "div", 4);
    i0.ɵɵtemplate(4, ActionGroupMenuComponent_ng_container_0_ng_container_3_div_4_Template, 2, 1, "div", 5);
    i0.ɵɵtemplate(5, ActionGroupMenuComponent_ng_container_0_ng_container_3_div_5_Template, 2, 1, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.confirmationLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.confirmationDynamicLabel && !ctx_r3.confirmationLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.inlineCancelButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.inlineConfirmButton);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-inline-loading-spinner", 11);
    i0.ɵɵelementContainerEnd();
} }
function ActionGroupMenuComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ActionGroupMenuComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, ActionGroupMenuComponent_ng_container_0_ng_container_3_Template, 6, 4, "ng-container", 0);
    i0.ɵɵtemplate(4, ActionGroupMenuComponent_ng_container_0_ng_container_4_Template, 2, 0, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r0.klass, " float-right action-group-menu");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.inlineConfirmationEnabled && !ctx_r0.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.inlineConfirmationEnabled && !ctx_r0.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loading);
} }
class ActionGroupMenuComponent {
    constructor(languages, screenSize, systemConfigStore) {
        this.languages = languages;
        this.screenSize = screenSize;
        this.systemConfigStore = systemConfigStore;
        this.klass = '';
        this.buttonClass = 'btn btn-sm';
        this.buttonGroupClass = '';
        this.actionLimitConfig = 'recordview_actions_limits';
        this.configState = new BehaviorSubject({ buttons: [] });
        this.config$ = this.configState.asObservable();
        this.inlineConfirmationEnabled = false;
        this.confirmationLabel = '';
        this.confirmationDynamicLabel = '';
        this.inlineCancelButton = null;
        this.inlineConfirmButton = null;
        this.loading = false;
        this.buttonGroupDropdownClass = 'dropdown-button-secondary';
        this.screen = ScreenSize.Medium;
        this.defaultBreakpoint = 3;
    }
    ngOnInit() {
        this.vm$ = this.config?.getActions().pipe(combineLatestWith(this.screenSize.screenSize$, this.languages.vm$), map(([actions, screenSize, languages]) => {
            if (screenSize) {
                this.screen = screenSize;
            }
            this.configState.next(this.getButtonGroupConfig(actions));
            return { actions, screenSize, languages };
        }));
    }
    isXSmallScreen() {
        return this.screen === ScreenSize.XSmall;
    }
    getButtonGroupConfig(actions) {
        const expanded = [];
        const collapsed = [];
        actions.forEach((action) => {
            const button = this.buildButton(action);
            if (action.params && action.params.expanded) {
                expanded.push(button);
                return;
            }
            collapsed.push(button);
        });
        const collapseButtons = this.config.collapseButtons ?? true;
        let breakpoint = actions.length;
        if (collapseButtons === true) {
            breakpoint = this.getBreakpoint();
            if (expanded.length < breakpoint) {
                breakpoint = expanded.length;
            }
        }
        const buttons = expanded.concat(collapsed);
        return {
            buttonKlass: [this.buttonClass],
            dropdownLabel: this.languages.getAppString('LBL_ACTIONS') || '',
            breakpoint,
            dropdownOptions: {
                placement: ['bottom-right'],
                wrapperKlass: [(this.buttonGroupDropdownClass)]
            },
            buttons
        };
    }
    getBreakpoint() {
        const breakpointMap = this.systemConfigStore.getConfigValue(this.actionLimitConfig);
        if (this.screen && breakpointMap && breakpointMap[this.screen]) {
            this.breakpoint = breakpointMap[this.screen];
            return this.breakpoint;
        }
        if (this.breakpoint) {
            return this.breakpoint;
        }
        return this.defaultBreakpoint;
    }
    buildButton(action) {
        const button = {
            label: action.label || '',
            labelModule: this?.actionContext?.module ?? '',
            labelKey: action.labelKey || '',
            klass: this.buttonClass,
            titleKey: action.titleKey || '',
            onClick: () => {
                const inlineConfirmation = action?.params?.inlineConfirmation ?? false;
                if (inlineConfirmation) {
                    this.triggerTemporaryLoading();
                    const callback = () => {
                        this.config.runAction(action, this.actionContext);
                    };
                    this.initInlineConfirmation(action, callback);
                    return;
                }
                this.config.runAction(action, this.actionContext);
            }
        };
        if (!button.label) {
            button.labelKey = action.labelKey ?? '';
        }
        const debounceClick = action?.params?.debounceClick ?? null;
        button.debounceClick = true;
        if (isFalse(debounceClick)) {
            button.debounceClick = false;
        }
        if (action.icon) {
            button.icon = action.icon;
        }
        if (action.status) {
            Button.appendClasses(button, [action.status]);
        }
        if (action.klass) {
            Button.appendClasses(button, action.klass);
        }
        return button;
    }
    triggerTemporaryLoading() {
        this.loading = true;
        const delay = parseInt(this.systemConfigStore.getUi('inline_confirmation_loading_delay')) ?? 200;
        setTimeout(() => {
            this.loading = false;
        }, delay);
    }
    initInlineConfirmation(action, callback) {
        const cancelConfig = action?.params?.inlineConfirmationButtons?.cancel ?? {};
        const confirmConfig = action?.params?.inlineConfirmationButtons?.confirm ?? {};
        this.confirmationLabel = action?.params?.confirmationLabel ?? '';
        this.confirmationDynamicLabel = action?.params?.confirmationDynamicLabel ?? '';
        this.inlineCancelButton = this.buildInlineCancelButton(cancelConfig);
        this.inlineConfirmButton = this.buildInlineConfirmButton(confirmConfig, callback);
        this.inlineConfirmationEnabled = true;
    }
    buildInlineCancelButton(config) {
        const defaults = {
            labelKey: 'LBL_NO',
            klass: 'btn btn-sm p-0 m-0 btn-link border-0 line-height-initial',
            debounceClick: true,
        };
        const button = { ...defaults, ...(config ?? {}) };
        button.onClick = () => {
            this.triggerTemporaryLoading();
            this.resetInlineConfirmation();
        };
        return button;
    }
    buildInlineConfirmButton(config, callback) {
        const defaults = {
            labelKey: 'LBL_YES',
            klass: 'btn btn-sm p-0 m-0 btn-link border-0 line-height-initial',
            debounceClick: true,
        };
        const button = { ...defaults, ...(config ?? {}) };
        button.onClick = () => {
            this.triggerTemporaryLoading();
            callback();
            this.resetInlineConfirmation();
        };
        return button;
    }
    resetInlineConfirmation() {
        this.inlineConfirmationEnabled = false;
        this.confirmationDynamicLabel = '';
        this.confirmationLabel = '';
        this.inlineConfirmButton = null;
        this.inlineCancelButton = null;
    }
    static { this.ɵfac = function ActionGroupMenuComponent_Factory(t) { return new (t || ActionGroupMenuComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.ScreenSizeObserverService), i0.ɵɵdirectiveInject(i3.SystemConfigStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionGroupMenuComponent, selectors: [["scrm-action-group-menu"]], inputs: { klass: "klass", buttonClass: "buttonClass", buttonGroupClass: "buttonGroupClass", actionContext: "actionContext", config: "config", actionLimitConfig: "actionLimitConfig" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "config$", "klass", 4, "ngIf"], [3, "config$", "klass"], [1, "d-flex", "align-items-start", "justify-content-end", "inline-confirmation"], ["class", "pl-1 inline-confirmation-label", 4, "ngIf"], ["class", "pl-1 inline-confirmation-button", 4, "ngIf"], [1, "pl-1", "inline-confirmation-label"], [3, "labelKey"], [3, "labelKey", "module", "fields"], [1, "pl-1", "inline-confirmation-button"], [3, "config"], ["klass", "inline-spinner-md"]], template: function ActionGroupMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ActionGroupMenuComponent_ng_container_0_Template, 5, 6, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i4.NgIf, i5.ButtonComponent, i6.ButtonGroupComponent, i7.LabelComponent, i8.DynamicLabelComponent, i9.InlineLoadingSpinnerComponent, i4.AsyncPipe], encapsulation: 2 }); }
}
export { ActionGroupMenuComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionGroupMenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-action-group-menu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"(vm$ | async) as vm\">\n    <div class=\"{{klass}} float-right action-group-menu\">\n        <ng-container *ngIf=\"!inlineConfirmationEnabled && !loading\">\n            <scrm-button-group *ngIf=\"config$\" [config$]=\"config$\" [klass]=\"buttonGroupClass\"></scrm-button-group>\n        </ng-container>\n        <ng-container *ngIf=\"inlineConfirmationEnabled && !loading\">\n            <div class=\"d-flex align-items-start justify-content-end inline-confirmation\">\n                <div *ngIf=\"confirmationLabel\" class=\"pl-1 inline-confirmation-label\">\n                    <scrm-label [labelKey]=\"confirmationLabel\"></scrm-label>\n                </div>\n                <div *ngIf=\"confirmationDynamicLabel && !confirmationLabel\" class=\"pl-1 inline-confirmation-label\">\n                    <scrm-dynamic-label [labelKey]=\"confirmationDynamicLabel\"\n                                        [module]=\"actionContext?.module ?? ''\"\n                                        [fields]=\"actionContext?.record?.fields ?? {}\"\n                    >\n                    </scrm-dynamic-label>\n                </div>\n                <div *ngIf=\"inlineCancelButton\" class=\"pl-1 inline-confirmation-button\">\n                    <scrm-button [config]=\"inlineCancelButton\"></scrm-button>\n                </div>\n                <div *ngIf=\"inlineConfirmButton\" class=\"pl-1 inline-confirmation-button\">\n                    <scrm-button [config]=\"inlineConfirmButton\"></scrm-button>\n                </div>\n            </div>\n        </ng-container>\n        <ng-container *ngIf=\"loading\">\n            <scrm-inline-loading-spinner klass=\"inline-spinner-md\"></scrm-inline-loading-spinner>\n        </ng-container>\n    </div>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.ScreenSizeObserverService }, { type: i3.SystemConfigStore }]; }, { klass: [{
            type: Input
        }], buttonClass: [{
            type: Input
        }], buttonGroupClass: [{
            type: Input
        }], actionContext: [{
            type: Input
        }], config: [{
            type: Input
        }], actionLimitConfig: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWdyb3VwLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYWN0aW9uLWdyb3VwLW1lbnUvYWN0aW9uLWdyb3VwLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYWN0aW9uLWdyb3VwLW1lbnUvYWN0aW9uLWdyb3VwLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBMEMsTUFBTSxFQUF5QyxPQUFPLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkgsT0FBTyxFQUFDLGVBQWUsRUFBRSxpQkFBaUIsRUFBMkIsTUFBTSxNQUFNLENBQUM7QUFDbEYsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25DLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ2hGLE9BQU8sRUFDSCxVQUFVLEVBQ1YseUJBQXlCLEVBQzVCLE1BQU0scUVBQXFFLENBQUM7QUFDN0UsT0FBTyxFQUFDLGFBQWEsRUFBa0IsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7Ozs7O0lDTHZFLHVDQUFzRzs7O0lBQW5FLHdDQUFtQixrQ0FBQTs7O0lBRDFELDZCQUE2RDtJQUN6RCxtSUFBc0c7SUFDMUcsMEJBQWU7OztJQURTLGVBQWE7SUFBYixxQ0FBYTs7O0lBSTdCLDhCQUFzRTtJQUNsRSxnQ0FBd0Q7SUFDNUQsaUJBQU07OztJQURVLGVBQThCO0lBQTlCLG1EQUE4Qjs7OztJQUU5Qyw4QkFBbUc7SUFDL0Ysd0NBSXFCO0lBQ3pCLGlC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dXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb24sIEFjdGlvbkNvbnRleHQsIEFjdGlvbkRhdGFTb3VyY2UsIEJ1dHRvbiwgQnV0dG9uR3JvdXBJbnRlcmZhY2UsIEJ1dHRvbkludGVyZmFjZSwgaXNGYWxzZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtcbiAgICBTY3JlZW5TaXplLFxuICAgIFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2Vcbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWkvc2NyZWVuLXNpemUtb2JzZXJ2ZXIvc2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nc30gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkdyb3VwTWVudVZpZXdNb2RlbCB7XG4gICAgYWN0aW9uczogQWN0aW9uW107XG4gICAgc2NyZWVuU2l6ZTogU2NyZWVuU2l6ZTtcbiAgICBsYW5ndWFnZXM6IExhbmd1YWdlU3RyaW5ncztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWFjdGlvbi1ncm91cC1tZW51JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9uLWdyb3VwLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25Hcm91cE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkga2xhc3MgPSAnJztcbiAgICBASW5wdXQoKSBidXR0b25DbGFzcyA9ICdidG4gYnRuLXNtJztcbiAgICBASW5wdXQoKSBidXR0b25Hcm91cENsYXNzID0gJyc7XG4gICAgQElucHV0KCkgYWN0aW9uQ29udGV4dDogQWN0aW9uQ29udGV4dDtcbiAgICBASW5wdXQoKSBjb25maWc6IEFjdGlvbkRhdGFTb3VyY2U7XG4gICAgQElucHV0KCkgYWN0aW9uTGltaXRDb25maWc6IHN0cmluZyA9ICdyZWNvcmR2aWV3X2FjdGlvbnNfbGltaXRzJztcbiAgICBjb25maWdTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QnV0dG9uR3JvdXBJbnRlcmZhY2U+KHtidXR0b25zOiBbXX0pO1xuICAgIGNvbmZpZyQgPSB0aGlzLmNvbmZpZ1N0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgdm0kOiBPYnNlcnZhYmxlPEFjdGlvbkdyb3VwTWVudVZpZXdNb2RlbD47XG5cbiAgICBpbmxpbmVDb25maXJtYXRpb25FbmFibGVkID0gZmFsc2U7XG4gICAgY29uZmlybWF0aW9uTGFiZWwgPSAnJztcbiAgICBjb25maXJtYXRpb25EeW5hbWljTGFiZWwgPSAnJztcbiAgICBpbmxpbmVDYW5jZWxCdXR0b246IEJ1dHRvbkludGVyZmFjZSA9IG51bGw7XG4gICAgaW5saW5lQ29uZmlybUJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlID0gbnVsbDtcbiAgICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgICBwcm90ZWN0ZWQgYnV0dG9uR3JvdXBEcm9wZG93bkNsYXNzID0gJ2Ryb3Bkb3duLWJ1dHRvbi1zZWNvbmRhcnknO1xuXG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdO1xuICAgIHByb3RlY3RlZCBzY3JlZW46IFNjcmVlblNpemUgPSBTY3JlZW5TaXplLk1lZGl1bTtcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdEJyZWFrcG9pbnQgPSAzO1xuICAgIHByb3RlY3RlZCBicmVha3BvaW50OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlczogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHNjcmVlblNpemU6IFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdTdG9yZTogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudm0kID0gdGhpcy5jb25maWc/LmdldEFjdGlvbnMoKS5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgoXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JlZW5TaXplLnNjcmVlblNpemUkLFxuICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzLnZtJFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1hcCgoW2FjdGlvbnMsIHNjcmVlblNpemUsIGxhbmd1YWdlc10pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2NyZWVuU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcmVlbiA9IHNjcmVlblNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnU3RhdGUubmV4dCh0aGlzLmdldEJ1dHRvbkdyb3VwQ29uZmlnKGFjdGlvbnMpKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7YWN0aW9ucywgc2NyZWVuU2l6ZSwgbGFuZ3VhZ2VzfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaXNYU21hbGxTY3JlZW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcmVlbiA9PT0gU2NyZWVuU2l6ZS5YU21hbGw7XG4gICAgfVxuXG4gICAgZ2V0QnV0dG9uR3JvdXBDb25maWcoYWN0aW9uczogQWN0aW9uW10pOiBCdXR0b25Hcm91cEludGVyZmFjZSB7XG5cbiAgICAgICAgY29uc3QgZXhwYW5kZWQgPSBbXTtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkID0gW107XG5cbiAgICAgICAgYWN0aW9ucy5mb3JFYWNoKChhY3Rpb246IEFjdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5idWlsZEJ1dHRvbihhY3Rpb24pO1xuXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBhcmFtcyAmJiBhY3Rpb24ucGFyYW1zLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWQucHVzaChidXR0b24pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29sbGFwc2VkLnB1c2goYnV0dG9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY29sbGFwc2VCdXR0b25zID0gdGhpcy5jb25maWcuY29sbGFwc2VCdXR0b25zID8/IHRydWU7XG5cbiAgICAgICAgbGV0IGJyZWFrcG9pbnQgPSBhY3Rpb25zLmxlbmd0aDtcbiAgICAgICAgaWYgKGNvbGxhcHNlQnV0dG9ucyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYnJlYWtwb2ludCA9IHRoaXMuZ2V0QnJlYWtwb2ludCgpO1xuICAgICAgICAgICAgaWYgKGV4cGFuZGVkLmxlbmd0aCA8IGJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50ID0gZXhwYW5kZWQubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGV4cGFuZGVkLmNvbmNhdChjb2xsYXBzZWQpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidXR0b25LbGFzczogW3RoaXMuYnV0dG9uQ2xhc3NdLFxuICAgICAgICAgICAgZHJvcGRvd25MYWJlbDogdGhpcy5sYW5ndWFnZXMuZ2V0QXBwU3RyaW5nKCdMQkxfQUNUSU9OUycpIHx8ICcnLFxuICAgICAgICAgICAgYnJlYWtwb2ludCxcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogWydib3R0b20tcmlnaHQnXSxcbiAgICAgICAgICAgICAgICB3cmFwcGVyS2xhc3M6IFsodGhpcy5idXR0b25Hcm91cERyb3Bkb3duQ2xhc3MpXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnNcbiAgICAgICAgfSBhcyBCdXR0b25Hcm91cEludGVyZmFjZTtcbiAgICB9XG5cbiAgICBnZXRCcmVha3BvaW50KCk6IG51bWJlciB7XG5cbiAgICAgICAgY29uc3QgYnJlYWtwb2ludE1hcCA9IHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUuZ2V0Q29uZmlnVmFsdWUodGhpcy5hY3Rpb25MaW1pdENvbmZpZyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2NyZWVuICYmIGJyZWFrcG9pbnRNYXAgJiYgYnJlYWtwb2ludE1hcFt0aGlzLnNjcmVlbl0pIHtcbiAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludCA9IGJyZWFrcG9pbnRNYXBbdGhpcy5zY3JlZW5dO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0QnJlYWtwb2ludDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRCdXR0b24oYWN0aW9uOiBBY3Rpb24pOiBCdXR0b25JbnRlcmZhY2Uge1xuICAgICAgICBjb25zdCBidXR0b24gPSB7XG4gICAgICAgICAgICBsYWJlbDogYWN0aW9uLmxhYmVsIHx8ICcnLFxuICAgICAgICAgICAgbGFiZWxNb2R1bGU6IHRoaXM/LmFjdGlvbkNvbnRleHQ/Lm1vZHVsZSA/PyAnJyxcbiAgICAgICAgICAgIGxhYmVsS2V5OiBhY3Rpb24ubGFiZWxLZXkgfHwgJycsXG4gICAgICAgICAgICBrbGFzczogdGhpcy5idXR0b25DbGFzcyxcbiAgICAgICAgICAgIHRpdGxlS2V5OiBhY3Rpb24udGl0bGVLZXkgfHwgJycsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpbmxpbmVDb25maXJtYXRpb24gPSBhY3Rpb24/LnBhcmFtcz8uaW5saW5lQ29uZmlybWF0aW9uID8/IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChpbmxpbmVDb25maXJtYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyVGVtcG9yYXJ5TG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnJ1bkFjdGlvbihhY3Rpb24sIHRoaXMuYWN0aW9uQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0SW5saW5lQ29uZmlybWF0aW9uKGFjdGlvbiwgY2FsbGJhY2spO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5ydW5BY3Rpb24oYWN0aW9uLCB0aGlzLmFjdGlvbkNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuICAgICAgICBpZiAoIWJ1dHRvbi5sYWJlbCl7XG4gICAgICAgICAgICBidXR0b24ubGFiZWxLZXkgPSBhY3Rpb24ubGFiZWxLZXkgPz8gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWJvdW5jZUNsaWNrID0gYWN0aW9uPy5wYXJhbXM/LmRlYm91bmNlQ2xpY2sgPz8gbnVsbDtcblxuICAgICAgICBidXR0b24uZGVib3VuY2VDbGljayA9IHRydWU7XG5cbiAgICAgICAgaWYgKGlzRmFsc2UoZGVib3VuY2VDbGljaykpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5kZWJvdW5jZUNsaWNrID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uLmljb24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5pY29uID0gYWN0aW9uLmljb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uLnN0YXR1cykge1xuICAgICAgICAgICAgQnV0dG9uLmFwcGVuZENsYXNzZXMoYnV0dG9uLCBbYWN0aW9uLnN0YXR1c10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbi5rbGFzcykge1xuICAgICAgICAgICAgQnV0dG9uLmFwcGVuZENsYXNzZXMoYnV0dG9uLCBhY3Rpb24ua2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdHJpZ2dlclRlbXBvcmFyeUxvYWRpbmcoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gcGFyc2VJbnQodGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRVaSgnaW5saW5lX2NvbmZpcm1hdGlvbl9sb2FkaW5nX2RlbGF5JykpID8/IDIwMDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0SW5saW5lQ29uZmlybWF0aW9uKGFjdGlvbjogQWN0aW9uLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjYW5jZWxDb25maWcgPSBhY3Rpb24/LnBhcmFtcz8uaW5saW5lQ29uZmlybWF0aW9uQnV0dG9ucz8uY2FuY2VsID8/IHt9O1xuICAgICAgICBjb25zdCBjb25maXJtQ29uZmlnID0gYWN0aW9uPy5wYXJhbXM/LmlubGluZUNvbmZpcm1hdGlvbkJ1dHRvbnM/LmNvbmZpcm0gPz8ge307XG4gICAgICAgIHRoaXMuY29uZmlybWF0aW9uTGFiZWwgPSBhY3Rpb24/LnBhcmFtcz8uY29uZmlybWF0aW9uTGFiZWwgPz8gJyc7XG4gICAgICAgIHRoaXMuY29uZmlybWF0aW9uRHluYW1pY0xhYmVsID0gYWN0aW9uPy5wYXJhbXM/LmNvbmZpcm1hdGlvbkR5bmFtaWNMYWJlbCA/PyAnJztcblxuICAgICAgICB0aGlzLmlubGluZUNhbmNlbEJ1dHRvbiA9IHRoaXMuYnVpbGRJbmxpbmVDYW5jZWxCdXR0b24oY2FuY2VsQ29uZmlnKVxuICAgICAgICB0aGlzLmlubGluZUNvbmZpcm1CdXR0b24gPSB0aGlzLmJ1aWxkSW5saW5lQ29uZmlybUJ1dHRvbihjb25maXJtQ29uZmlnLCBjYWxsYmFjaylcbiAgICAgICAgdGhpcy5pbmxpbmVDb25maXJtYXRpb25FbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRJbmxpbmVDYW5jZWxCdXR0b24oY29uZmlnOiBCdXR0b25JbnRlcmZhY2UpOiBCdXR0b25JbnRlcmZhY2Uge1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX05PJyxcbiAgICAgICAgICAgIGtsYXNzOiAnYnRuIGJ0bi1zbSBwLTAgbS0wIGJ0bi1saW5rIGJvcmRlci0wIGxpbmUtaGVpZ2h0LWluaXRpYWwnLFxuICAgICAgICAgICAgZGVib3VuY2VDbGljazogdHJ1ZSxcbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHsuLi5kZWZhdWx0cywgLi4uKGNvbmZpZyA/PyB7fSl9O1xuXG4gICAgICAgIGJ1dHRvbi5vbkNsaWNrID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyVGVtcG9yYXJ5TG9hZGluZygpO1xuICAgICAgICAgICAgdGhpcy5yZXNldElubGluZUNvbmZpcm1hdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRJbmxpbmVDb25maXJtQnV0dG9uKGNvbmZpZzogQnV0dG9uSW50ZXJmYWNlLCBjYWxsYmFjazogRnVuY3Rpb24pOiBCdXR0b25JbnRlcmZhY2Uge1xuICAgICAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX1lFUycsXG4gICAgICAgICAgICBrbGFzczogJ2J0biBidG4tc20gcC0wIG0tMCBidG4tbGluayBib3JkZXItMCBsaW5lLWhlaWdodC1pbml0aWFsJyxcbiAgICAgICAgICAgIGRlYm91bmNlQ2xpY2s6IHRydWUsXG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuICAgICAgICBjb25zdCBidXR0b24gPSB7Li4uZGVmYXVsdHMsIC4uLihjb25maWcgPz8ge30pfTtcblxuICAgICAgICBidXR0b24ub25DbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclRlbXBvcmFyeUxvYWRpbmcoKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0SW5saW5lQ29uZmlybWF0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZXNldElubGluZUNvbmZpcm1hdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbmxpbmVDb25maXJtYXRpb25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29uZmlybWF0aW9uRHluYW1pY0xhYmVsID0gJyc7XG4gICAgICAgIHRoaXMuY29uZmlybWF0aW9uTGFiZWwgPSAnJztcbiAgICAgICAgdGhpcy5pbmxpbmVDb25maXJtQnV0dG9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbmxpbmVDYW5jZWxCdXR0b24gPSBudWxsO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCI+XG4gICAgPGRpdiBjbGFzcz1cInt7a2xhc3N9fSBmbG9hdC1yaWdodCBhY3Rpb24tZ3JvdXAtbWVudVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlubGluZUNvbmZpcm1hdGlvbkVuYWJsZWQgJiYgIWxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxzY3JtLWJ1dHRvbi1ncm91cCAqbmdJZj1cImNvbmZpZyRcIiBbY29uZmlnJF09XCJjb25maWckXCIgW2tsYXNzXT1cImJ1dHRvbkdyb3VwQ2xhc3NcIj48L3Njcm0tYnV0dG9uLWdyb3VwPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlubGluZUNvbmZpcm1hdGlvbkVuYWJsZWQgJiYgIWxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQganVzdGlmeS1jb250ZW50LWVuZCBpbmxpbmUtY29uZmlybWF0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbmZpcm1hdGlvbkxhYmVsXCIgY2xhc3M9XCJwbC0xIGlubGluZS1jb25maXJtYXRpb24tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cImNvbmZpcm1hdGlvbkxhYmVsXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb25maXJtYXRpb25EeW5hbWljTGFiZWwgJiYgIWNvbmZpcm1hdGlvbkxhYmVsXCIgY2xhc3M9XCJwbC0xIGlubGluZS1jb25maXJtYXRpb24tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tZHluYW1pYy1sYWJlbCBbbGFiZWxLZXldPVwiY29uZmlybWF0aW9uRHluYW1pY0xhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9kdWxlXT1cImFjdGlvbkNvbnRleHQ/Lm1vZHVsZSA/PyAnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkc109XCJhY3Rpb25Db250ZXh0Py5yZWNvcmQ/LmZpZWxkcyA/PyB7fVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWR5bmFtaWMtbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlubGluZUNhbmNlbEJ1dHRvblwiIGNsYXNzPVwicGwtMSBpbmxpbmUtY29uZmlybWF0aW9uLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gW2NvbmZpZ109XCJpbmxpbmVDYW5jZWxCdXR0b25cIj48L3Njcm0tYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpbmxpbmVDb25maXJtQnV0dG9uXCIgY2xhc3M9XCJwbC0xIGlubGluZS1jb25maXJtYXRpb24tYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWJ1dHRvbiBbY29uZmlnXT1cImlubGluZUNvbmZpcm1CdXR0b25cIj48L3Njcm0tYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibG9hZGluZ1wiPlxuICAgICAgICAgICAgPHNjcm0taW5saW5lLWxvYWRpbmctc3Bpbm5lciBrbGFzcz1cImlubGluZS1zcGlubmVyLW1kXCI+PC9zY3JtLWlubGluZS1sb2FkaW5nLXNwaW5uZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=