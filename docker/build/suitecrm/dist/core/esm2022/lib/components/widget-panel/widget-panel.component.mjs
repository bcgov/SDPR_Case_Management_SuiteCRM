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
import { animate, style, transition, trigger } from '@angular/animations';
import { LanguageStore } from '../../store/language/language.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "../panel/panel.component";
function WidgetPanelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@widgetContentFade", ctx_r0.displayContent ? "true" : "false");
} }
const _c0 = [[["", "widget-body", ""]]];
const _c1 = ["[widget-body]"];
class WidgetPanelComponent {
    constructor(languageStore) {
        this.languageStore = languageStore;
        this.title = '';
        this.mode = 'none';
        this.displayContent = true;
    }
    ngOnInit() {
    }
    static { this.ɵfac = function WidgetPanelComponent_Factory(t) { return new (t || WidgetPanelComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WidgetPanelComponent, selectors: [["scrm-widget-panel"]], inputs: { title: "title", mode: "mode" }, ngContentSelectors: _c1, decls: 5, vars: 3, consts: [[1, "accordion", "widget-panel", "mr-0", "shadow-sm"], ["bodyPadding", "0", 3, "mode", "title"], ["panel-header-button", ""], ["panel-body", ""], ["class", "widget collapse show open-close-container", "data-parent", ".widget-panel", 4, "ngIf"], ["data-parent", ".widget-panel", 1, "widget", "collapse", "show", "open-close-container"]], template: function WidgetPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div", 0)(1, "scrm-panel", 1);
            i0.ɵɵelement(2, "span", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, WidgetPanelComponent_div_4_Template, 2, 1, "div", 4);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("mode", ctx.mode)("title", ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.displayContent);
        } }, dependencies: [i2.NgIf, i3.PanelComponent], encapsulation: 2, data: { animation: [
                trigger('widgetFade', [
                    transition('void => *', [
                        style({ transform: 'translateX(100%)', opacity: 0 }),
                        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
                    ]),
                    transition('* => void', [
                        style({ transform: 'translateX(0)', opacity: 1 }),
                        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
                    ])
                ]),
                trigger('widgetContentFade', [
                    transition('void => *', [
                        style({ transform: 'translateY(-5%)', opacity: 0 }),
                        animate('500ms', style({ transform: 'translateY(0)', opacity: 1 }))
                    ]),
                    transition('* => void', [
                        style({ transform: 'translateY(0)', opacity: 1 }),
                        animate('500ms', style({ transform: 'translateY(-5%)', opacity: 0 }))
                    ])
                ])
            ] } }); }
}
export { WidgetPanelComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetPanelComponent, [{
        type: Component,
        args: [{ selector: 'scrm-widget-panel', animations: [
                    trigger('widgetFade', [
                        transition('void => *', [
                            style({ transform: 'translateX(100%)', opacity: 0 }),
                            animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
                        ]),
                        transition('* => void', [
                            style({ transform: 'translateX(0)', opacity: 1 }),
                            animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
                        ])
                    ]),
                    trigger('widgetContentFade', [
                        transition('void => *', [
                            style({ transform: 'translateY(-5%)', opacity: 0 }),
                            animate('500ms', style({ transform: 'translateY(0)', opacity: 1 }))
                        ]),
                        transition('* => void', [
                            style({ transform: 'translateY(0)', opacity: 1 }),
                            animate('500ms', style({ transform: 'translateY(-5%)', opacity: 0 }))
                        ])
                    ])
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"accordion widget-panel mr-0 shadow-sm\">\n    <scrm-panel [mode]=\"mode\" [title]=\"title\" bodyPadding=\"0\">\n        <span panel-header-button>\n        </span>\n        <div panel-body>\n            <div *ngIf=\"displayContent\"\n                 class=\"widget collapse show open-close-container\"\n                 data-parent=\".widget-panel\"\n                 [@widgetContentFade]=\"displayContent ? 'true' : 'false'\">\n                <ng-content select=\"[widget-body]\"></ng-content>\n            </div>\n        </div>\n    </scrm-panel>\n</div>\n" }]
    }], function () { return [{ type: i1.LanguageStore }]; }, { title: [{
            type: Input
        }], mode: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3dpZGdldC1wYW5lbC93aWRnZXQtcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvd2lkZ2V0LXBhbmVsL3dpZGdldC1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7O0lDSXRELDhCQUc4RDtJQUMxRCxrQkFBZ0Q7SUFDcEQsaUJBQU07OztJQUZELDZFQUF3RDs7OztBREx6RSxNQTJCYSxvQkFBb0I7SUFNN0IsWUFBbUIsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFMdEMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFNBQUksR0FBd0MsTUFBTSxDQUFDO1FBRTVELG1CQUFjLEdBQUcsSUFBSSxDQUFDO0lBR3RCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztxRkFWUSxvQkFBb0I7b0VBQXBCLG9CQUFvQjs7WUM5QmpDLDhCQUFtRCxvQkFBQTtZQUUzQywwQkFDTztZQUNQLDhCQUFnQjtZQUNaLHFFQUtNO1lBQ1YsaUJBQU0sRUFBQSxFQUFBOztZQVZFLGVBQWE7WUFBYiwrQkFBYSxvQkFBQTtZQUlYLGVBQW9CO1lBQXBCLHlDQUFvQjs4RkRDdEI7Z0JBQ1IsT0FBTyxDQUFDLFlB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RUFJUSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7YW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS13aWRnZXQtcGFuZWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnd2lkZ2V0LXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ3dpZGdldEZhZGUnLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLCBvcGFjaXR5OiAwfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnNTAwbXMnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9wYWNpdHk6IDF9KSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb3BhY2l0eTogMX0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzUwMG1zJywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLCBvcGFjaXR5OiAwfSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgdHJpZ2dlcignd2lkZ2V0Q29udGVudEZhZGUnLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUlKScsIG9wYWNpdHk6IDB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCc1MDBtcycsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJywgb3BhY2l0eTogMX0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLCBvcGFjaXR5OiAxfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnNTAwbXMnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNSUpJywgb3BhY2l0eTogMH0pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgV2lkZ2V0UGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHRpdGxlID0gJyc7XG4gICAgQElucHV0KCkgbW9kZTogJ2NvbGxhcHNpYmxlJyB8ICdjbG9zYWJsZScgfCAnbm9uZScgPSAnbm9uZSc7XG5cbiAgICBkaXNwbGF5Q29udGVudCA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgY2xhc3M9XCJhY2NvcmRpb24gd2lkZ2V0LXBhbmVsIG1yLTAgc2hhZG93LXNtXCI+XG4gICAgPHNjcm0tcGFuZWwgW21vZGVdPVwibW9kZVwiIFt0aXRsZV09XCJ0aXRsZVwiIGJvZHlQYWRkaW5nPVwiMFwiPlxuICAgICAgICA8c3BhbiBwYW5lbC1oZWFkZXItYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgcGFuZWwtYm9keT5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJkaXNwbGF5Q29udGVudFwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwid2lkZ2V0IGNvbGxhcHNlIHNob3cgb3Blbi1jbG9zZS1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICBkYXRhLXBhcmVudD1cIi53aWRnZXQtcGFuZWxcIlxuICAgICAgICAgICAgICAgICBbQHdpZGdldENvbnRlbnRGYWRlXT1cImRpc3BsYXlDb250ZW50ID8gJ3RydWUnIDogJ2ZhbHNlJ1wiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt3aWRnZXQtYm9keV1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zY3JtLXBhbmVsPlxuPC9kaXY+XG4iXX0=