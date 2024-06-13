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
import { LanguageStore } from '../../store/language/language.store';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "../image/image.component";
import * as i4 from "../label/label.component";
function ButtonComponent_scrm_image_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("image", ctx_r0.config.icon)("klass", ctx_r0.config.iconKlass || "")("title", ctx_r0.language.getFieldLabel(ctx_r0.config.titleKey || ""));
} }
function ButtonComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.config.label || "");
} }
function ButtonComponent_scrm_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-label", 5);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    let tmp_1_0;
    i0.ɵɵproperty("labelKey", ctx_r2.config.labelKey)("module", (tmp_1_0 = ctx_r2.config.labelModule) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "");
} }
const _c0 = ["*"];
class ButtonComponent {
    constructor(language) {
        this.language = language;
        this.clickBuffer = new Subject();
        this.clickBuffer$ = this.clickBuffer.asObservable();
        this.subs = [];
    }
    ngOnInit() {
        const isToDebounce = this.config?.debounceClick ?? null;
        this.clickCallBack = this.config?.onClick ?? null;
        const clickDebounceTime = this.getDebounceTime();
        if (isToDebounce && this.clickCallBack) {
            this.subs.push(this.clickBuffer$.pipe(debounceTime(clickDebounceTime)).subscribe(value => {
                const input = value ?? null;
                this.clickCallBack(input);
            }));
        }
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    runClick(input) {
        const isToDebounce = this.config?.debounceClick ?? null;
        if (!this.clickCallBack) {
            return;
        }
        if (isToDebounce && this.clickCallBack) {
            this.clickBuffer.next(input ?? null);
            return;
        }
        this.clickCallBack(input ?? null);
    }
    /**
     * Get debounce time
     * @return number
     * @protected
     */
    getDebounceTime() {
        let clickDebounceTime = this.config?.clickDebounceTime ?? 625;
        if (!isFinite(clickDebounceTime)) {
            clickDebounceTime = 625;
        }
        return clickDebounceTime;
    }
    static { this.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["scrm-button"]], inputs: { config: "config" }, ngContentSelectors: _c0, decls: 5, vars: 5, consts: [["type", "button", 3, "ngClass", "title", "click"], [3, "image", "klass", "title", 4, "ngIf"], [4, "ngIf"], [3, "labelKey", "module", 4, "ngIf"], [3, "image", "klass", "title"], [3, "labelKey", "module"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function ButtonComponent_Template_button_click_0_listener($event) { return ctx.runClick($event); });
            i0.ɵɵtemplate(1, ButtonComponent_scrm_image_1_Template, 1, 3, "scrm-image", 1);
            i0.ɵɵtemplate(2, ButtonComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
            i0.ɵɵtemplate(3, ButtonComponent_scrm_label_3_Template, 1, 2, "scrm-label", 3);
            i0.ɵɵprojection(4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.config.klass)("title", ctx.language.getFieldLabel(ctx.config.titleKey) || (ctx.config == null ? null : ctx.config.title) || "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.config.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.config.labelKey);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.config.labelKey);
        } }, dependencies: [i2.NgClass, i2.NgIf, i3.ImageComponent, i4.LabelComponent], encapsulation: 2 }); }
}
export { ButtonComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{ selector: 'scrm-button', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<button type=\"button\"\n        [ngClass]=\"config.klass\"\n        (click)=\"runClick($event)\"\n        [title]=\"(language.getFieldLabel(config.titleKey) || config?.title) || ''\">\n    <scrm-image *ngIf=\"config.icon\"\n                [image]=\"config.icon\"\n                [klass]=\"config.iconKlass || ''\"\n                [title]=\"language.getFieldLabel(config.titleKey || '')\"></scrm-image>\n    <ng-container *ngIf=\"!config.labelKey\">{{ config.label || '' }}</ng-container>\n    <scrm-label *ngIf=\"config.labelKey\" [labelKey]=\"config.labelKey\" [module]=\"config.labelModule ?? ''\"></scrm-label>\n    <ng-content></ng-content>\n</button>\n" }]
    }], function () { return [{ type: i1.LanguageStore }]; }, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBRWxFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRSxPQUFPLEVBQWEsT0FBTyxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQ0N4QyxnQ0FHaUY7OztJQUZyRSwwQ0FBcUIsd0NBQUEsc0VBQUE7OztJQUdqQyw2QkFBdUM7SUFBQSxZQUF3QjtJQUFBLDBCQUFlOzs7SUFBdkMsZUFBd0I7SUFBeEIsK0NBQXdCOzs7SUFDL0QsZ0NBQWtIOzs7O0lBQTlFLGlEQUE0QixrR0FBQTs7O0FESnBFLE1BSWEsZUFBZTtJQU94QixZQUFtQixRQUF1QjtRQUF2QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBSmhDLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNqQyxpQkFBWSxHQUFvQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hFLFNBQUksR0FBbUIsRUFBRSxDQUFDO0lBR3BDLENBQUM7SUFFRCxRQUFRO1FBQ0osTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLElBQUksSUFBSSxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLElBQUksSUFBSSxDQUFDO1FBQ2xELE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRWpELElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JGLE1BQU0sS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNQO0lBQ0wsQ0FBQztJQUdELFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxRQUFRLENBQUMsS0FBVztRQUNoQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsSUFBSSxJQUFJLENBQUM7UUFFeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsT0FBTztTQUNWO1FBRUQsSUFBSSxZQUFZLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUM7WUFDckMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxlQUFlO1FBQ3JCLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsSUFBSSxHQUFHLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQzlCLGlCQUFpQixHQUFHLEdBQUcsQ0FBQztTQUMzQjtRQUNELE9BQU8saUJBQWlCLENBQUM7SUFDN0IsQ0FBQztnRkF0RFEsZUFBZTtvRUFBZixlQUFlOztZQ1Q1QixpQ0FHbUY7WUFEM0Usa0dBQVMsb0JBQWdCLElBQUM7WUFFOUIsOEVBR2lGO1lBQ2pGLGtGQUE4RTtZQUM5RSw4RUFBa0g7WUFDbEgsa0JBQXlCO1lBQzdCLGlCQUFTOztZQVZELDBDQUF3QixrSEFBQTtZQUdmLGVBQWlCO1lBQWpCLHNDQUFpQjtZQUlmLGVBQXNCO1lBQXRCLDJDQUFzQjtZQUN4QixlQUFxQjtZQUFyQiwwQ0FBcUI7OztTREF6QixlQUFlO3VGQUFmLGVBQWU7Y0FKM0IsU0FBUzsyQkFDSSxhQUFhO2dFQUlkLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0J1dHRvbkNhbGxiYWNrLCBCdXR0b25JbnRlcmZhY2V9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1idXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAnYnV0dG9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgY29uZmlnOiBCdXR0b25JbnRlcmZhY2U7XG4gICAgY2xpY2tDYWxsQmFjazogQnV0dG9uQ2FsbGJhY2s7XG4gICAgcHJvdGVjdGVkIGNsaWNrQnVmZmVyID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHByb3RlY3RlZCBjbGlja0J1ZmZlciQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuY2xpY2tCdWZmZXIuYXNPYnNlcnZhYmxlKCk7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXNUb0RlYm91bmNlID0gdGhpcy5jb25maWc/LmRlYm91bmNlQ2xpY2sgPz8gbnVsbDtcbiAgICAgICAgdGhpcy5jbGlja0NhbGxCYWNrID0gdGhpcy5jb25maWc/Lm9uQ2xpY2sgPz8gbnVsbDtcbiAgICAgICAgY29uc3QgY2xpY2tEZWJvdW5jZVRpbWUgPSB0aGlzLmdldERlYm91bmNlVGltZSgpO1xuXG4gICAgICAgIGlmIChpc1RvRGVib3VuY2UgJiYgdGhpcy5jbGlja0NhbGxCYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmNsaWNrQnVmZmVyJC5waXBlKGRlYm91bmNlVGltZShjbGlja0RlYm91bmNlVGltZSkpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB2YWx1ZSA/PyBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tDYWxsQmFjayhpbnB1dCk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIHJ1bkNsaWNrKGlucHV0PzogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlzVG9EZWJvdW5jZSA9IHRoaXMuY29uZmlnPy5kZWJvdW5jZUNsaWNrID8/IG51bGw7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNsaWNrQ2FsbEJhY2spIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1RvRGVib3VuY2UgJiYgdGhpcy5jbGlja0NhbGxCYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrQnVmZmVyLm5leHQoaW5wdXQgPz8gbnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsaWNrQ2FsbEJhY2soaW5wdXQgPz8gbnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGRlYm91bmNlIHRpbWVcbiAgICAgKiBAcmV0dXJuIG51bWJlclxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0RGVib3VuY2VUaW1lKCk6IG51bWJlciB7XG4gICAgICAgIGxldCBjbGlja0RlYm91bmNlVGltZSA9IHRoaXMuY29uZmlnPy5jbGlja0RlYm91bmNlVGltZSA/PyA2MjU7XG4gICAgICAgIGlmICghaXNGaW5pdGUoY2xpY2tEZWJvdW5jZVRpbWUpKSB7XG4gICAgICAgICAgICBjbGlja0RlYm91bmNlVGltZSA9IDYyNTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xpY2tEZWJvdW5jZVRpbWU7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiY29uZmlnLmtsYXNzXCJcbiAgICAgICAgKGNsaWNrKT1cInJ1bkNsaWNrKCRldmVudClcIlxuICAgICAgICBbdGl0bGVdPVwiKGxhbmd1YWdlLmdldEZpZWxkTGFiZWwoY29uZmlnLnRpdGxlS2V5KSB8fCBjb25maWc/LnRpdGxlKSB8fCAnJ1wiPlxuICAgIDxzY3JtLWltYWdlICpuZ0lmPVwiY29uZmlnLmljb25cIlxuICAgICAgICAgICAgICAgIFtpbWFnZV09XCJjb25maWcuaWNvblwiXG4gICAgICAgICAgICAgICAgW2tsYXNzXT1cImNvbmZpZy5pY29uS2xhc3MgfHwgJydcIlxuICAgICAgICAgICAgICAgIFt0aXRsZV09XCJsYW5ndWFnZS5nZXRGaWVsZExhYmVsKGNvbmZpZy50aXRsZUtleSB8fCAnJylcIj48L3Njcm0taW1hZ2U+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb25maWcubGFiZWxLZXlcIj57eyBjb25maWcubGFiZWwgfHwgJycgfX08L25nLWNvbnRhaW5lcj5cbiAgICA8c2NybS1sYWJlbCAqbmdJZj1cImNvbmZpZy5sYWJlbEtleVwiIFtsYWJlbEtleV09XCJjb25maWcubGFiZWxLZXlcIiBbbW9kdWxlXT1cImNvbmZpZy5sYWJlbE1vZHVsZSA/PyAnJ1wiPjwvc2NybS1sYWJlbD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2J1dHRvbj5cbiJdfQ==