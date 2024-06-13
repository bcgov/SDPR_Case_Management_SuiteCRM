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
import { LanguageStore } from '../../store/language/language.store';
import { SubpanelActionManager } from "../../containers/subpanel/components/subpanel/action-manager.service";
import { BehaviorSubject, combineLatestWith } from 'rxjs';
import { ScreenSize, ScreenSizeObserverService } from '../../services/ui/screen-size-observer/screen-size-observer.service';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../containers/subpanel/components/subpanel/action-manager.service";
import * as i3 from "../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i4 from "../../store/system-config/system-config.store";
import * as i5 from "@angular/common";
import * as i6 from "../image/image.component";
import * as i7 from "../button-group/button-group.component";
function LineActionMenuComponent_ng_container_0_scrm_button_group_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button-group", 7);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config$", ctx_r1.config$)("klass", "icon-bar-block");
} }
function LineActionMenuComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div");
    i0.ɵɵtemplate(5, LineActionMenuComponent_ng_container_0_scrm_button_group_5_Template, 1, 2, "scrm-button-group", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 5);
    i0.ɵɵlistener("click", function LineActionMenuComponent_ng_container_0_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.isButtonClicked = !ctx_r2.isButtonClicked); });
    i0.ɵɵelement(7, "scrm-image", 6);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r0.wrapperClass);
    i0.ɵɵproperty("ngClass", ctx_r0.isButtonClicked ? "active" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r0.klass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.config$);
} }
class LineActionMenuComponent {
    constructor(languageStore, actionManager, languages, screenSize, systemConfigStore) {
        this.languageStore = languageStore;
        this.actionManager = actionManager;
        this.languages = languages;
        this.screenSize = screenSize;
        this.systemConfigStore = systemConfigStore;
        this.klass = '';
        this.wrapperClass = '';
        this.limitConfigKey = 'listview_line_actions_limits';
        this.configState = new BehaviorSubject({ buttons: [] });
        this.config$ = this.configState.asObservable();
        this.isButtonClicked = false;
        this.buttonClass = 'line-action-item line-action';
        this.buttonGroupClass = 'float-right';
        this.subs = [];
        this.screen = ScreenSize.Medium;
        this.defaultBreakpoint = 3;
    }
    ngOnInit() {
        this.subs.push(this.config.getActions({ record: this.record }).pipe(combineLatestWith(this.screenSize.screenSize$, this.languages.vm$), map(([actions, screenSize, languages]) => {
            if (screenSize) {
                this.screen = screenSize;
            }
            this.configState.next(this.getButtonGroupConfig(actions));
            this.actions = actions;
        })).subscribe());
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
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
        let breakpoint = actions.length;
        const buttons = expanded.concat(collapsed);
        return {
            buttonKlass: [this.buttonClass],
            dropdownLabel: this.languages.getAppString('LBL_ACTIONS') || '',
            breakpoint,
            dropdownOptions: {
                placement: ['bottom-right'],
                wrapperKlass: [(this.buttonGroupClass)]
            },
            buttons
        };
    }
    getBreakpoint() {
        const breakpointMap = this.systemConfigStore.getConfigValue(this.limitConfigKey);
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
            titleKey: action.labelKey || '',
            klass: this.buttonClass,
            icon: action.icon || '',
            onClick: () => {
                this.config.runAction(action, {
                    module: (this.record && this.record.module) || '',
                    record: this.record
                });
            }
        };
        if (action.icon) {
            button.icon = action.icon;
        }
        const debounceClick = action?.params?.debounceClick ?? null;
        button.debounceClick = true;
        if (isFalse(debounceClick)) {
            button.debounceClick = false;
        }
        if (action.status) {
            Button.appendClasses(button, [action.status]);
        }
        return button;
    }
    static { this.ɵfac = function LineActionMenuComponent_Factory(t) { return new (t || LineActionMenuComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.SubpanelActionManager), i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i3.ScreenSizeObserverService), i0.ɵɵdirectiveInject(i4.SystemConfigStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LineActionMenuComponent, selectors: [["scrm-line-action-menu"]], inputs: { klass: "klass", wrapperClass: "wrapperClass", record: "record", config: "config", limitConfigKey: "limitConfigKey" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "line-action-container"], ["id", "line-action-div", 1, "line-action", "line-action-position"], [3, "ngClass"], [3, "config$", "klass", 4, "ngIf"], ["aria-label", "Mobile Menu Button", 1, "more-button", 3, "click"], ["image", "apps-line", 1, "sicon"], [3, "config$", "klass"]], template: function LineActionMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LineActionMenuComponent_ng_container_0_Template, 8, 8, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.actions.length);
        } }, dependencies: [i5.NgClass, i5.NgIf, i6.ImageComponent, i7.ButtonGroupComponent], encapsulation: 2 }); }
}
export { LineActionMenuComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineActionMenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-line-action-menu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"actions.length\">\n    <div class=\"line-action-container\">\n        <div id=\"line-action-div\" class=\"line-action line-action-position\">\n            <div class=\"{{wrapperClass}}\" [ngClass]=\"isButtonClicked  ? 'active': ''\">\n                <div class=\"{{klass}}\">\n                    <scrm-button-group *ngIf=\"config$\" [config$]=\"config$\" [klass]=\"'icon-bar-block'\"></scrm-button-group>\n                </div>\n                <button class=\"more-button\" aria-label=\"Mobile Menu Button\" (click)=\"isButtonClicked=!isButtonClicked\">\n                    <scrm-image class=\"sicon\" image=\"apps-line\"></scrm-image>\n                </button>\n            </div>\n        </div>\n    </div>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.SubpanelActionManager }, { type: i1.LanguageStore }, { type: i3.ScreenSizeObserverService }, { type: i4.SystemConfigStore }]; }, { klass: [{
            type: Input
        }], wrapperClass: [{
            type: Input
        }], record: [{
            type: Input
        }], config: [{
            type: Input
        }], limitConfigKey: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1hY3Rpb24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9saW5lLWFjdGlvbi1tZW51L2xpbmUtYWN0aW9uLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbGluZS1hY3Rpb24tbWVudS9saW5lLWFjdGlvbi1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUlILE1BQU0sRUFHTixPQUFPLEVBRVYsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUFDLGFBQWEsRUFBa0IsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxzRUFBc0UsQ0FBQztBQUMzRyxPQUFPLEVBQUMsZUFBZSxFQUFFLGlCQUFpQixFQUEyQixNQUFNLE1BQU0sQ0FBQztBQUNsRixPQUFPLEVBQ0gsVUFBVSxFQUNWLHlCQUF5QixFQUM1QixNQUFNLHFFQUFxRSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztJQ2JmLHVDQUFzRzs7O0lBQW5FLHdDQUFtQiwyQkFBQTs7OztJQUwxRSw2QkFBcUM7SUFDakMsOEJBQW1DLGFBQUEsYUFBQSxVQUFBO0lBSW5CLG1IQUFzRztJQUMxRyxpQkFBTTtJQUNOLGlDQUF1RztJQUEzQyxpUEFBMEM7SUFDbEcsZ0NBQXlEO0lBQzdELGlCQUFTLEVBQUEsRUFBQSxF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LE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO29CQUNqRCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07aUJBQ0wsQ0FBQyxDQUFDO1lBQ3hCLENBQUM7U0FDZSxDQUFDO1FBRXJCLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtZQUNiLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztTQUM3QjtRQUNELE1BQU0sYUFBYSxHQUFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxJQUFJLElBQUksQ0FBQztRQUU1RCxNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUU1QixJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN4QixNQUFNLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUNoQztRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNmLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDakQ7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO3dGQWhJUSx1QkFBdUI7b0VBQXZCLHVCQUF1QjtZQzlCcEMsMEZBYWU7O1lBYkEseUNBQW9COzs7U0Q4QnRCLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBSm5DLFNBQVM7MkJBQ0ksdUJBQXVCO3dNQUt4QixLQUFLO2tCQUFiLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIEFjdGlvbixcbiAgICBBY3Rpb25Db250ZXh0LFxuICAgIEFjdGlvbkRhdGFTb3VyY2UsXG4gICAgQnV0dG9uLFxuICAgIEJ1dHRvbkdyb3VwSW50ZXJmYWNlLFxuICAgIEJ1dHRvbkludGVyZmFjZSxcbiAgICBpc0ZhbHNlLFxuICAgIFJlY29yZFxufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlLCBMYW5ndWFnZVN0cmluZ3N9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7U3VicGFuZWxBY3Rpb25NYW5hZ2VyfSBmcm9tIFwiLi4vLi4vY29udGFpbmVycy9zdWJwYW5lbC9jb21wb25lbnRzL3N1YnBhbmVsL2FjdGlvbi1tYW5hZ2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gICAgU2NyZWVuU2l6ZSxcbiAgICBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VpL3NjcmVlbi1zaXplLW9ic2VydmVyL3NjcmVlbi1zaXplLW9ic2VydmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZUFjdGlvbk1lbnVWaWV3TW9kZWwge1xuICAgIGFjdGlvbnM6IEFjdGlvbltdO1xuICAgIHNjcmVlblNpemU6IFNjcmVlblNpemU7XG4gICAgbGFuZ3VhZ2VzOiBMYW5ndWFnZVN0cmluZ3M7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1saW5lLWFjdGlvbi1tZW51JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2xpbmUtYWN0aW9uLW1lbnUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExpbmVBY3Rpb25NZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkga2xhc3MgPSAnJztcbiAgICBASW5wdXQoKSB3cmFwcGVyQ2xhc3MgPSAnJztcbiAgICBASW5wdXQoKSByZWNvcmQ6IFJlY29yZDtcbiAgICBASW5wdXQoKSBjb25maWc6IEFjdGlvbkRhdGFTb3VyY2U7XG4gICAgQElucHV0KCkgbGltaXRDb25maWdLZXkgPSAnbGlzdHZpZXdfbGluZV9hY3Rpb25zX2xpbWl0cyc7XG4gICAgY29uZmlnU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEJ1dHRvbkdyb3VwSW50ZXJmYWNlPih7YnV0dG9uczogW119KTtcbiAgICBjb25maWckID0gdGhpcy5jb25maWdTdGF0ZS5hc09ic2VydmFibGUoKTtcbiAgICBhY3Rpb25zOiBBY3Rpb25bXTtcbiAgICBpc0J1dHRvbkNsaWNrZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgdm0kOiBPYnNlcnZhYmxlPExpbmVBY3Rpb25NZW51Vmlld01vZGVsPjtcblxuICAgIHByb3RlY3RlZCBidXR0b25DbGFzcyA9ICdsaW5lLWFjdGlvbi1pdGVtIGxpbmUtYWN0aW9uJztcbiAgICBwcm90ZWN0ZWQgYnV0dG9uR3JvdXBDbGFzcyA9ICdmbG9hdC1yaWdodCc7XG5cbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgc2NyZWVuOiBTY3JlZW5TaXplID0gU2NyZWVuU2l6ZS5NZWRpdW07XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRCcmVha3BvaW50ID0gMztcbiAgICBwcm90ZWN0ZWQgYnJlYWtwb2ludDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uTWFuYWdlcjogU3VicGFuZWxBY3Rpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VzOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc2NyZWVuU2l6ZTogU2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb25maWcuZ2V0QWN0aW9ucyh7cmVjb3JkOiB0aGlzLnJlY29yZH0pLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlblNpemUuc2NyZWVuU2l6ZSQsXG4gICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMudm0kXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWFwKChbYWN0aW9ucywgc2NyZWVuU2l6ZSwgbGFuZ3VhZ2VzXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzY3JlZW5TaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuU2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWdTdGF0ZS5uZXh0KHRoaXMuZ2V0QnV0dG9uR3JvdXBDb25maWcoYWN0aW9ucykpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIGdldEJ1dHRvbkdyb3VwQ29uZmlnKGFjdGlvbnM6IEFjdGlvbltdKTogQnV0dG9uR3JvdXBJbnRlcmZhY2Uge1xuXG4gICAgICAgIGNvbnN0IGV4cGFuZGVkID0gW107XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IFtdO1xuXG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnVpbGRCdXR0b24oYWN0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXJhbXMgJiYgYWN0aW9uLnBhcmFtcy5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkLnB1c2goYnV0dG9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbGxhcHNlZC5wdXNoKGJ1dHRvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBicmVha3BvaW50ID0gYWN0aW9ucy5sZW5ndGg7XG5cbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGV4cGFuZGVkLmNvbmNhdChjb2xsYXBzZWQpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidXR0b25LbGFzczogW3RoaXMuYnV0dG9uQ2xhc3NdLFxuICAgICAgICAgICAgZHJvcGRvd25MYWJlbDogdGhpcy5sYW5ndWFnZXMuZ2V0QXBwU3RyaW5nKCdMQkxfQUNUSU9OUycpIHx8ICcnLFxuICAgICAgICAgICAgYnJlYWtwb2ludCxcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogWydib3R0b20tcmlnaHQnXSxcbiAgICAgICAgICAgICAgICB3cmFwcGVyS2xhc3M6IFsodGhpcy5idXR0b25Hcm91cENsYXNzKV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zXG4gICAgICAgIH0gYXMgQnV0dG9uR3JvdXBJbnRlcmZhY2U7XG4gICAgfVxuXG4gICAgZ2V0QnJlYWtwb2ludCgpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBicmVha3BvaW50TWFwID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRDb25maWdWYWx1ZSh0aGlzLmxpbWl0Q29uZmlnS2V5KTtcblxuICAgICAgICBpZiAodGhpcy5zY3JlZW4gJiYgYnJlYWtwb2ludE1hcCAmJiBicmVha3BvaW50TWFwW3RoaXMuc2NyZWVuXSkge1xuICAgICAgICAgICAgdGhpcy5icmVha3BvaW50ID0gYnJlYWtwb2ludE1hcFt0aGlzLnNjcmVlbl07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5icmVha3BvaW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRCcmVha3BvaW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZEJ1dHRvbihhY3Rpb246IEFjdGlvbik6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHtcbiAgICAgICAgICAgIHRpdGxlS2V5OiBhY3Rpb24ubGFiZWxLZXkgfHwgJycsXG4gICAgICAgICAgICBrbGFzczogdGhpcy5idXR0b25DbGFzcyxcbiAgICAgICAgICAgIGljb246IGFjdGlvbi5pY29uIHx8ICcnLFxuICAgICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnJ1bkFjdGlvbihhY3Rpb24sIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiAodGhpcy5yZWNvcmQgJiYgdGhpcy5yZWNvcmQubW9kdWxlKSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkOiB0aGlzLnJlY29yZFxuICAgICAgICAgICAgICAgIH0gYXMgQWN0aW9uQ29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgICAgIGlmIChhY3Rpb24uaWNvbikge1xuICAgICAgICAgICAgYnV0dG9uLmljb24gPSBhY3Rpb24uaWNvbjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWJvdW5jZUNsaWNrID0gYWN0aW9uPy5wYXJhbXM/LmRlYm91bmNlQ2xpY2sgPz8gbnVsbDtcblxuICAgICAgICBidXR0b24uZGVib3VuY2VDbGljayA9IHRydWU7XG5cbiAgICAgICAgaWYgKGlzRmFsc2UoZGVib3VuY2VDbGljaykpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5kZWJvdW5jZUNsaWNrID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uLnN0YXR1cykge1xuICAgICAgICAgICAgQnV0dG9uLmFwcGVuZENsYXNzZXMoYnV0dG9uLCBbYWN0aW9uLnN0YXR1c10pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48bmctY29udGFpbmVyICpuZ0lmPVwiYWN0aW9ucy5sZW5ndGhcIj5cbiAgICA8ZGl2IGNsYXNzPVwibGluZS1hY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJsaW5lLWFjdGlvbi1kaXZcIiBjbGFzcz1cImxpbmUtYWN0aW9uIGxpbmUtYWN0aW9uLXBvc2l0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3t3cmFwcGVyQ2xhc3N9fVwiIFtuZ0NsYXNzXT1cImlzQnV0dG9uQ2xpY2tlZCAgPyAnYWN0aXZlJzogJydcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3trbGFzc319XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWJ1dHRvbi1ncm91cCAqbmdJZj1cImNvbmZpZyRcIiBbY29uZmlnJF09XCJjb25maWckXCIgW2tsYXNzXT1cIidpY29uLWJhci1ibG9jaydcIj48L3Njcm0tYnV0dG9uLWdyb3VwPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb3JlLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJNb2JpbGUgTWVudSBCdXR0b25cIiAoY2xpY2spPVwiaXNCdXR0b25DbGlja2VkPSFpc0J1dHRvbkNsaWNrZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJzaWNvblwiIGltYWdlPVwiYXBwcy1saW5lXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=