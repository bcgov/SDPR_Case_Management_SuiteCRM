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
import { Button } from 'common';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../button/button.component";
import * as i3 from "../dropdown-button/dropdown-button.component";
import * as i4 from "../grouped-button/grouped-button.component";
function ButtonGroupComponent_div_0_ng_container_1_scrm_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 4);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("config", item_r3);
} }
function ButtonGroupComponent_div_0_ng_container_1_scrm_dropdown_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-dropdown-button", 4);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("config", item_r3);
} }
function ButtonGroupComponent_div_0_ng_container_1_scrm_grouped_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-grouped-button", 4);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("config", item_r3);
} }
function ButtonGroupComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ButtonGroupComponent_div_0_ng_container_1_scrm_button_1_Template, 1, 1, "scrm-button", 3);
    i0.ɵɵtemplate(2, ButtonGroupComponent_div_0_ng_container_1_scrm_dropdown_button_2_Template, 1, 1, "scrm-dropdown-button", 3);
    i0.ɵɵtemplate(3, ButtonGroupComponent_div_0_ng_container_1_scrm_grouped_button_3_Template, 1, 1, "scrm-grouped-button", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r3 && !((tmp_0_0 = item_r3 == null ? null : item_r3.items) !== null && tmp_0_0 !== undefined ? tmp_0_0 : ""));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r3 && ((tmp_1_0 = item_r3 == null ? null : item_r3.items) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "") && ((tmp_1_0 = item_r3 == null ? null : item_r3.type) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "dropdown") === "dropdown");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r3 && ((tmp_2_0 = item_r3 == null ? null : item_r3.items) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "") && ((tmp_2_0 = item_r3 == null ? null : item_r3.type) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "dropdown") === "grouped");
} }
function ButtonGroupComponent_div_0_scrm_dropdown_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-dropdown-button", 5);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r2.dropdownConfig);
} }
function ButtonGroupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ButtonGroupComponent_div_0_ng_container_1_Template, 4, 3, "ng-container", 1);
    i0.ɵɵtemplate(2, ButtonGroupComponent_div_0_scrm_dropdown_button_2_Template, 1, 1, "scrm-dropdown-button", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.klass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.buttons.expanded);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.buttons.collapsed.length);
} }
class ButtonGroupComponent {
    constructor() {
        this.klass = '';
        this.buttons = {
            expanded: [],
            collapsed: [],
        };
    }
    ngOnInit() {
        this.sub = this.config$.subscribe(config => {
            this.internalConfig = { ...config };
            this.splitButtons();
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    buildDropdownConfig() {
        let buttonClasses = ['button-group-button'];
        if (this.internalConfig.buttonKlass && this.internalConfig.buttonKlass.length > 0) {
            buttonClasses = buttonClasses.concat(this.internalConfig.buttonKlass);
        }
        if (this?.internalConfig?.dropdownOptions?.klass) {
            buttonClasses = buttonClasses.concat(this.internalConfig.dropdownOptions.klass);
        }
        let wrapperClasses = ['button-group-dropdown'];
        const dropdownOptions = this.internalConfig.dropdownOptions;
        const optionsWrapperKlass = dropdownOptions && dropdownOptions.wrapperKlass;
        if (optionsWrapperKlass && optionsWrapperKlass.length > 0) {
            wrapperClasses = wrapperClasses.concat(optionsWrapperKlass);
        }
        this.dropdownConfig = {
            label: this.internalConfig.dropdownLabel,
            klass: [...buttonClasses],
            wrapperKlass: wrapperClasses,
            items: this.buttons.collapsed,
        };
        if (this.internalConfig.dropdownOptions && this.internalConfig.dropdownOptions.placement) {
            this.dropdownConfig.placement = this.internalConfig.dropdownOptions.placement;
        }
        if (this.internalConfig.dropdownOptions && this.internalConfig.dropdownOptions.icon) {
            this.dropdownConfig.icon = this.internalConfig.dropdownOptions.icon;
        }
    }
    getBreakpoint() {
        if (!this.internalConfig.breakpoint && this.internalConfig.breakpoint !== 0) {
            return 4;
        }
        return this.internalConfig.breakpoint;
    }
    splitButtons() {
        this.buttons.expanded = [];
        this.buttons.collapsed = [];
        if (!this.internalConfig.buttons || this.internalConfig.buttons.length < 1) {
            return;
        }
        let count = 0;
        const showAfterBreakpoint = this.internalConfig.showAfterBreakpoint ?? true;
        this.internalConfig.buttons.forEach(button => {
            if (!button) {
                return;
            }
            if (count < this.getBreakpoint()) {
                let classes = ['button-group-button'];
                if (this.internalConfig.buttonKlass && this.internalConfig.buttonKlass.length > 0) {
                    classes = classes.concat(this.internalConfig.buttonKlass);
                }
                const newButton = { ...button };
                Button.appendClasses(newButton, [...classes]);
                this.buttons.expanded.push(newButton);
            }
            else if (showAfterBreakpoint === true) {
                this.buttons.collapsed.push({ ...button });
            }
            count++;
        });
        this.buildDropdownConfig();
    }
    static { this.ɵfac = function ButtonGroupComponent_Factory(t) { return new (t || ButtonGroupComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonGroupComponent, selectors: [["scrm-button-group"]], inputs: { config$: "config$", klass: "klass" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["autoClose", "outside", 3, "config", 4, "ngIf"], [3, "config", 4, "ngIf"], [3, "config"], ["autoClose", "outside", 3, "config"]], template: function ButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ButtonGroupComponent_div_0_Template, 3, 4, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.config$);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.ButtonComponent, i3.DropdownButtonComponent, i4.GroupedButtonComponent], encapsulation: 2 }); }
}
export { ButtonGroupComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonGroupComponent, [{
        type: Component,
        args: [{ selector: 'scrm-button-group', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div *ngIf=\"config$\" [class]=\"klass\">\n    <ng-container *ngFor=\"let item of buttons.expanded\">\n        <scrm-button *ngIf=\"item && !(item?.items ?? '')\"\n                     [config]=\"item\">\n        </scrm-button>\n        <scrm-dropdown-button *ngIf=\"item && (item?.items ?? '') && ((item?.type ?? 'dropdown') === 'dropdown')\"\n                              [config]=\"item\">\n        </scrm-dropdown-button>\n        <scrm-grouped-button *ngIf=\"item && (item?.items ?? '') && ((item?.type ?? 'dropdown') === 'grouped')\"\n                              [config]=\"item\">\n        </scrm-grouped-button>\n    </ng-container>\n\n    <scrm-dropdown-button autoClose=\"outside\"\n                          *ngIf=\"buttons.collapsed.length\"\n                          [config]=\"dropdownConfig\"></scrm-dropdown-button>\n</div>\n" }]
    }], function () { return []; }, { config$: [{
            type: Input
        }], klass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxNQUFNLEVBQXFGLE1BQU0sUUFBUSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxVQUFVLEVBQWUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7SUNDdEMsaUNBRWM7OztJQURELGdDQUFlOzs7SUFFNUIsMENBRXVCOzs7SUFERCxnQ0FBZTs7O0lBRXJDLHlDQUVzQjs7O0lBREEsZ0NBQWU7OztJQVJ6Qyw2QkFBb0Q7SUFDaEQsMEdBRWM7SUFDZCw0SEFFdUI7SUFDdkIsMEhBRXNCO0lBQzFCLDBCQUFlOzs7Ozs7SUFURyxlQUFrQztJQUFsQyx3SUFBa0M7SUFHekIsZUFBZ0Y7SUFBaEYsc1FBQWdGO0lBR2pGLGVBQStFO0lBQS9FLHFRQUErRTs7O0lBS3pHLDBDQUV1RTs7O0lBQWpELDhDQUF5Qjs7O0lBZm5ELDJCQUFxQztJQUNqQyw2RkFVZTtJQUVmLDZHQUV1RTtJQUMzRSxpQkFBTTs7O0lBaEJlLDJCQUFlO0lBQ0QsZUFBbUI7SUFBbkIsaURBQW1CO0lBYTNCLGVBQThCO0lBQTlCLHNEQUE4Qjs7QUROekQsTUFLYSxvQkFBb0I7SUFnQjdCO1FBYlMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUU1QixZQUFPLEdBQWlCO1lBQ3BC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Z0JNOztZQWhCQSxrQ0FBYTs7O1NEYU4sb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDSSxtQkFBbUI7c0NBTXBCLE9BQU87a0JBQWYsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0J1dHRvbiwgQnV0dG9uR3JvdXBJbnRlcmZhY2UsIEJ1dHRvbkludGVyZmFjZSwgRHJvcGRvd25CdXR0b25JbnRlcmZhY2UsIEFueUJ1dHRvbkludGVyZmFjZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuaW50ZXJmYWNlIFNwbGl0QnV0dG9ucyB7XG4gICAgZXhwYW5kZWQ6IEFueUJ1dHRvbkludGVyZmFjZVtdO1xuICAgIGNvbGxhcHNlZDogQW55QnV0dG9uSW50ZXJmYWNlW107XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1idXR0b24tZ3JvdXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgY29uZmlnJDogT2JzZXJ2YWJsZTxCdXR0b25Hcm91cEludGVyZmFjZT47XG4gICAgQElucHV0KCkga2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gICAgYnV0dG9uczogU3BsaXRCdXR0b25zID0ge1xuICAgICAgICBleHBhbmRlZDogW10sXG4gICAgICAgIGNvbGxhcHNlZDogW10sXG4gICAgfTtcblxuICAgIGRyb3Bkb3duQ29uZmlnOiBEcm9wZG93bkJ1dHRvbkludGVyZmFjZTtcblxuICAgIHByb3RlY3RlZCBpbnRlcm5hbENvbmZpZzogQnV0dG9uR3JvdXBJbnRlcmZhY2U7XG4gICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5jb25maWckLnN1YnNjcmliZShjb25maWcgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbENvbmZpZyA9IHsuLi5jb25maWd9O1xuICAgICAgICAgICAgdGhpcy5zcGxpdEJ1dHRvbnMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgYnVpbGREcm9wZG93bkNvbmZpZygpOiB2b2lkIHtcblxuICAgICAgICBsZXQgYnV0dG9uQ2xhc3NlcyA9IFsnYnV0dG9uLWdyb3VwLWJ1dHRvbiddO1xuXG4gICAgICAgIGlmICh0aGlzLmludGVybmFsQ29uZmlnLmJ1dHRvbktsYXNzICYmIHRoaXMuaW50ZXJuYWxDb25maWcuYnV0dG9uS2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYnV0dG9uQ2xhc3NlcyA9IGJ1dHRvbkNsYXNzZXMuY29uY2F0KHRoaXMuaW50ZXJuYWxDb25maWcuYnV0dG9uS2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXM/LmludGVybmFsQ29uZmlnPy5kcm9wZG93bk9wdGlvbnM/LmtsYXNzKSB7XG4gICAgICAgICAgICBidXR0b25DbGFzc2VzID0gYnV0dG9uQ2xhc3Nlcy5jb25jYXQodGhpcy5pbnRlcm5hbENvbmZpZy5kcm9wZG93bk9wdGlvbnMua2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHdyYXBwZXJDbGFzc2VzID0gWydidXR0b24tZ3JvdXAtZHJvcGRvd24nXTtcblxuICAgICAgICBjb25zdCBkcm9wZG93bk9wdGlvbnMgPSB0aGlzLmludGVybmFsQ29uZmlnLmRyb3Bkb3duT3B0aW9ucztcbiAgICAgICAgY29uc3Qgb3B0aW9uc1dyYXBwZXJLbGFzcyA9IGRyb3Bkb3duT3B0aW9ucyAmJiBkcm9wZG93bk9wdGlvbnMud3JhcHBlcktsYXNzO1xuXG4gICAgICAgIGlmIChvcHRpb25zV3JhcHBlcktsYXNzICYmIG9wdGlvbnNXcmFwcGVyS2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgd3JhcHBlckNsYXNzZXMgPSB3cmFwcGVyQ2xhc3Nlcy5jb25jYXQob3B0aW9uc1dyYXBwZXJLbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyb3Bkb3duQ29uZmlnID0ge1xuICAgICAgICAgICAgbGFiZWw6IHRoaXMuaW50ZXJuYWxDb25maWcuZHJvcGRvd25MYWJlbCxcbiAgICAgICAgICAgIGtsYXNzOiBbLi4uYnV0dG9uQ2xhc3Nlc10sXG4gICAgICAgICAgICB3cmFwcGVyS2xhc3M6IHdyYXBwZXJDbGFzc2VzLFxuICAgICAgICAgICAgaXRlbXM6IHRoaXMuYnV0dG9ucy5jb2xsYXBzZWQsXG4gICAgICAgIH0gYXMgRHJvcGRvd25CdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgaWYgKHRoaXMuaW50ZXJuYWxDb25maWcuZHJvcGRvd25PcHRpb25zICYmIHRoaXMuaW50ZXJuYWxDb25maWcuZHJvcGRvd25PcHRpb25zLnBsYWNlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bkNvbmZpZy5wbGFjZW1lbnQgPSB0aGlzLmludGVybmFsQ29uZmlnLmRyb3Bkb3duT3B0aW9ucy5wbGFjZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbnRlcm5hbENvbmZpZy5kcm9wZG93bk9wdGlvbnMgJiYgdGhpcy5pbnRlcm5hbENvbmZpZy5kcm9wZG93bk9wdGlvbnMuaWNvbikge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bkNvbmZpZy5pY29uID0gdGhpcy5pbnRlcm5hbENvbmZpZy5kcm9wZG93bk9wdGlvbnMuaWNvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRCcmVha3BvaW50KCk6IG51bWJlciB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmludGVybmFsQ29uZmlnLmJyZWFrcG9pbnQgJiYgdGhpcy5pbnRlcm5hbENvbmZpZy5icmVha3BvaW50ICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gNDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsQ29uZmlnLmJyZWFrcG9pbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNwbGl0QnV0dG9ucygpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmJ1dHRvbnMuZXhwYW5kZWQgPSBbXTtcbiAgICAgICAgdGhpcy5idXR0b25zLmNvbGxhcHNlZCA9IFtdO1xuXG4gICAgICAgIGlmICghdGhpcy5pbnRlcm5hbENvbmZpZy5idXR0b25zIHx8IHRoaXMuaW50ZXJuYWxDb25maWcuYnV0dG9ucy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIGNvbnN0IHNob3dBZnRlckJyZWFrcG9pbnQgPSB0aGlzLmludGVybmFsQ29uZmlnLnNob3dBZnRlckJyZWFrcG9pbnQgPz8gdHJ1ZTtcblxuICAgICAgICB0aGlzLmludGVybmFsQ29uZmlnLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuXG4gICAgICAgICAgICBpZiAoIWJ1dHRvbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvdW50IDwgdGhpcy5nZXRCcmVha3BvaW50KCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2xhc3NlcyA9IFsnYnV0dG9uLWdyb3VwLWJ1dHRvbiddO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVybmFsQ29uZmlnLmJ1dHRvbktsYXNzICYmIHRoaXMuaW50ZXJuYWxDb25maWcuYnV0dG9uS2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzID0gY2xhc3Nlcy5jb25jYXQodGhpcy5pbnRlcm5hbENvbmZpZy5idXR0b25LbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0J1dHRvbiA9IHsuLi5idXR0b259O1xuICAgICAgICAgICAgICAgIEJ1dHRvbi5hcHBlbmRDbGFzc2VzKG5ld0J1dHRvbiwgWy4uLmNsYXNzZXNdKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5leHBhbmRlZC5wdXNoKG5ld0J1dHRvbik7XG4gICAgICAgICAgICB9IGVsc2UgaWYoc2hvd0FmdGVyQnJlYWtwb2ludCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5jb2xsYXBzZWQucHVzaCh7Li4uYnV0dG9ufSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnVpbGREcm9wZG93bkNvbmZpZygpO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiAqbmdJZj1cImNvbmZpZyRcIiBbY2xhc3NdPVwia2xhc3NcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGJ1dHRvbnMuZXhwYW5kZWRcIj5cbiAgICAgICAgPHNjcm0tYnV0dG9uICpuZ0lmPVwiaXRlbSAmJiAhKGl0ZW0/Lml0ZW1zID8/ICcnKVwiXG4gICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cIml0ZW1cIj5cbiAgICAgICAgPC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgPHNjcm0tZHJvcGRvd24tYnV0dG9uICpuZ0lmPVwiaXRlbSAmJiAoaXRlbT8uaXRlbXMgPz8gJycpICYmICgoaXRlbT8udHlwZSA/PyAnZHJvcGRvd24nKSA9PT0gJ2Ryb3Bkb3duJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJpdGVtXCI+XG4gICAgICAgIDwvc2NybS1kcm9wZG93bi1idXR0b24+XG4gICAgICAgIDxzY3JtLWdyb3VwZWQtYnV0dG9uICpuZ0lmPVwiaXRlbSAmJiAoaXRlbT8uaXRlbXMgPz8gJycpICYmICgoaXRlbT8udHlwZSA/PyAnZHJvcGRvd24nKSA9PT0gJ2dyb3VwZWQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cIml0ZW1cIj5cbiAgICAgICAgPC9zY3JtLWdyb3VwZWQtYnV0dG9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPHNjcm0tZHJvcGRvd24tYnV0dG9uIGF1dG9DbG9zZT1cIm91dHNpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImJ1dHRvbnMuY29sbGFwc2VkLmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiZHJvcGRvd25Db25maWdcIj48L3Njcm0tZHJvcGRvd24tYnV0dG9uPlxuPC9kaXY+XG4iXX0=