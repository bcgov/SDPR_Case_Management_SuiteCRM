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
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';
import { LanguageStore } from '../../store/language/language.store';
import { MessageService } from '../../services/message/message.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/message/message.service";
import * as i2 from "../../store/language/language.store";
import * as i3 from "@angular/common";
function MessageUiComponent_div_0_div_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext().$implicit;
    const appStrings_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(appStrings_r1[message_r5.labelKey] || message_r5.labelKey || "");
} }
function MessageUiComponent_div_0_div_1_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(message_r5.text);
} }
function MessageUiComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("click", function MessageUiComponent_div_0_div_1_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const message_r5 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r11.close(message_r5)); });
    i0.ɵɵtemplate(1, MessageUiComponent_div_0_div_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    i0.ɵɵtemplate(2, MessageUiComponent_div_0_div_1_div_1_ng_container_2_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementStart(3, "a", 7);
    i0.ɵɵlistener("click", function MessageUiComponent_div_0_div_1_div_1_Template_a_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const message_r5 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r13.close(message_r5)); });
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const message_r5 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("message ", message_r5.type, " alert-dismissible fade show shadow");
    i0.ɵɵproperty("@fade", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", message_r5.labelKey);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", message_r5.text && !message_r5.labelKey);
} }
function MessageUiComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, MessageUiComponent_div_0_div_1_div_1_Template, 6, 6, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r3 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", items_r3);
} }
function MessageUiComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, MessageUiComponent_div_0_div_1_Template, 2, 1, "div", 2);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, ctx_r0.messages$));
} }
class MessageUiComponent {
    constructor(messageService, languages) {
        this.messageService = messageService;
        this.languages = languages;
        this.appStrings$ = languages.appStrings$;
    }
    ngOnInit() {
        this.messages$ = this.messageService.messages$;
    }
    close(message) {
        this.messageService.contains(message, true);
    }
    static { this.ɵfac = function MessageUiComponent_Factory(t) { return new (t || MessageUiComponent)(i0.ɵɵdirectiveInject(i1.MessageService), i0.ɵɵdirectiveInject(i2.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MessageUiComponent, selectors: [["scrm-message-ui"]], decls: 2, vars: 3, consts: [["class", "container-fluid alert-fixed message-wrapper", 4, "ngIf"], [1, "container-fluid", "alert-fixed", "message-wrapper"], ["class", "d-flex justify-content-center flex-column align-items-center message-container", 4, "ngIf"], [1, "d-flex", "justify-content-center", "flex-column", "align-items-center", "message-container"], ["role", "alert", 3, "class", "click", 4, "ngFor", "ngForOf"], ["role", "alert", 3, "click"], [4, "ngIf"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function MessageUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MessageUiComponent_div_0_Template, 3, 3, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.appStrings$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i3.AsyncPipe], encapsulation: 2, data: { animation: [
                trigger('fade', [
                    transition(':enter', useAnimation(fadeIn, {
                        params: { timing: 0.5, delay: 0 }
                    })),
                    transition(':leave', useAnimation(fadeOut, {
                        params: { timing: 0.5, delay: 0 }
                    })),
                ])
            ] } }); }
}
export { MessageUiComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageUiComponent, [{
        type: Component,
        args: [{ selector: 'scrm-message-ui', animations: [
                    trigger('fade', [
                        transition(':enter', useAnimation(fadeIn, {
                            params: { timing: 0.5, delay: 0 }
                        })),
                        transition(':leave', useAnimation(fadeOut, {
                            params: { timing: 0.5, delay: 0 }
                        })),
                    ])
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"container-fluid alert-fixed message-wrapper\" *ngIf=\"(appStrings$ | async) as appStrings\">\n    <div class=\"d-flex justify-content-center flex-column align-items-center message-container\"\n         *ngIf=\"(messages$ | async) as items\">\n        <div *ngFor=\"let message of items\"\n             (click)=\"close(message)\"\n             class=\"message {{ message.type }} alert-dismissible fade show shadow\"\n             [@fade]\n             role=\"alert\">\n            <ng-container *ngIf=\"message.labelKey\">{{appStrings[message.labelKey] || message.labelKey || ''}}</ng-container>\n            <ng-container *ngIf=\"message.text && !message.labelKey\">{{message.text}}</ng-container>\n            <a (click)=\"close(message)\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n            </a>\n        </div>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.MessageService }, { type: i2.LanguageStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBR2hELE9BQU8sRUFBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQW9CLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdDQUF3QyxDQUFDOzs7Ozs7SUNHMUQsNkJBQXVDO0lBQUEsWUFBMEQ7SUFBQSwwQkFBZTs7OztJQUF6RSxlQUEwRDtJQUExRCxxRkFBMEQ7OztJQUNqRyw2QkFBd0Q7SUFBQSxZQUFnQjtJQUFBLDBCQUFlOzs7SUFBL0IsZUFBZ0I7SUFBaEIscUNBQWdCOzs7O0lBTjVFLDhCQUlrQjtJQUhiLHlPQUFTLGVBQUEseUJBQWMsQ0FBQSxJQUFDO0lBSXpCLHVHQUFnSDtJQUNoSCx1R0FBdUY7SUFDdkYsNEJBQWdHO0lBQTdGLHVPQUFTLGVBQUEseUJBQWMsQ0FBQSxJQUFDO0lBQ3ZCLCtCQUF5QjtJQUFBLHNCQUFPO0lBQUEsaUJBQU8sRUFBQSxFQUFBOzs7SUFOMUMsNkZBQXFFO0lBQ3JFLGlDQUFPO0lBRU8sZUFBc0I7SUFBdEIsMENBQXNCO0lBQ3RCLGVBQXVDO0lBQXZDLDhEQUF1Qzs7O0lBUjlELDhCQUMwQztJQUN0QywrRUFVTTtJQUNWLGlCQUFNOzs7SUFYdUIsZUFBUTtJQUFSLGtDQUFROzs7SUFIekMsOEJBQXFHO0lBQ2pHLHlFQWFNOztJQUNWLGlCQUFNOzs7SUFiSSxlQUEwQjtJQUExQiw2REFBMEI7O0FETXBDLE1BZWEsa0JBQWtCO0lBTTNCLFlBQ1csY0FBOEIsRUFDOUIsU0FBd0I7UUFEeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFFL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQzdDLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQWdCO1FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO21GQW5CUSxrQkFBa0I7b0VBQWxCLGtCQUFrQjtZQ3ZCL0IsbUVBZU07OztZQWZvRCw0REFBNEI7cUdEWXRFO2dCQUNSLE9BQU8sQ0FBQyxNQUFNLEVBQUU7b0JBQ1osVUFBVSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsTUFBTSxFQUFFO3dCQUN0QyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUM7cUJBQ2xDLENBQUMsQ0FBQztvQkFDSCxVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQztxQkFDbEMsQ0FBQyxDQUFDO2lCQUNOLENBQUM7YUFDTDs7U0FFUSxrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQWY5QixTQUFTOzJCQUNJLGlCQUFpQixjQUdmO29CQUNSLE9BQU8sQ0FBQyxNQUFNLEVBQUU7d0JBQ1osVUFBVSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsTUFBTSxFQUFFOzRCQUN0QyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUM7eUJBQ2xDLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUU7NEJBQ3ZDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQzt5QkFDbEMsQ0FBQyxDQUFDO3FCQUNOLENBQUM7aUJBQ0wiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7dHJhbnNpdGlvbiwgdHJpZ2dlciwgdXNlQW5pbWF0aW9ufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7ZmFkZUluLCBmYWRlT3V0fSBmcm9tICduZy1hbmltYXRlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZSwgTGFuZ3VhZ2VTdHJpbmdNYXB9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tbWVzc2FnZS11aScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdmYWRlJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgdXNlQW5pbWF0aW9uKGZhZGVJbiwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge3RpbWluZzogMC41LCBkZWxheTogMH1cbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIHVzZUFuaW1hdGlvbihmYWRlT3V0LCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7dGltaW5nOiAwLjUsIGRlbGF5OiAwfVxuICAgICAgICAgICAgfSkpLFxuICAgICAgICBdKVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZVVpQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG1lc3NhZ2VzJDogT2JzZXJ2YWJsZTxNZXNzYWdlW10+O1xuXG4gICAgYXBwU3RyaW5ncyQ6IE9ic2VydmFibGU8TGFuZ3VhZ2VTdHJpbmdNYXA+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyBsYW5ndWFnZXM6IExhbmd1YWdlU3RvcmVcbiAgICApIHtcbiAgICAgICAgdGhpcy5hcHBTdHJpbmdzJCA9IGxhbmd1YWdlcy5hcHBTdHJpbmdzJDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyQgPSB0aGlzLm1lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzJDtcbiAgICB9XG5cbiAgICBjbG9zZShtZXNzYWdlOiBNZXNzYWdlKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuY29udGFpbnMobWVzc2FnZSwgdHJ1ZSk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBhbGVydC1maXhlZCBtZXNzYWdlLXdyYXBwZXJcIiAqbmdJZj1cIihhcHBTdHJpbmdzJCB8IGFzeW5jKSBhcyBhcHBTdHJpbmdzXCI+XG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBtZXNzYWdlLWNvbnRhaW5lclwiXG4gICAgICAgICAqbmdJZj1cIihtZXNzYWdlcyQgfCBhc3luYykgYXMgaXRlbXNcIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBpdGVtc1wiXG4gICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlKG1lc3NhZ2UpXCJcbiAgICAgICAgICAgICBjbGFzcz1cIm1lc3NhZ2Uge3sgbWVzc2FnZS50eXBlIH19IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvdyBzaGFkb3dcIlxuICAgICAgICAgICAgIFtAZmFkZV1cbiAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtZXNzYWdlLmxhYmVsS2V5XCI+e3thcHBTdHJpbmdzW21lc3NhZ2UubGFiZWxLZXldIHx8IG1lc3NhZ2UubGFiZWxLZXkgfHwgJyd9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1lc3NhZ2UudGV4dCAmJiAhbWVzc2FnZS5sYWJlbEtleVwiPnt7bWVzc2FnZS50ZXh0fX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxhIChjbGljayk9XCJjbG9zZShtZXNzYWdlKVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19