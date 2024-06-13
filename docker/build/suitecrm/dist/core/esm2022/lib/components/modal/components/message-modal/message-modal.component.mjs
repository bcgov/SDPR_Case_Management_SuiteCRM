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
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { animate, transition, trigger } from '@angular/animations';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../modal/modal.component";
import * as i3 from "../../../label/label.component";
import * as i4 from "../modal-button-group/modal-button-group.component";
class MessageModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.buttons = [];
    }
    ngOnInit() {
        this.buttonGroup$ = of({
            buttons: this.buttons
        });
        this.closeButton = {
            klass: ['btn', 'btn-outline-light', 'btn-sm'],
            onClick: () => {
                this.activeModal.close({
                    type: 'close-button'
                });
            }
        };
    }
    static { this.ɵfac = function MessageModalComponent_Factory(t) { return new (t || MessageModalComponent)(i0.ɵɵdirectiveInject(i1.NgbActiveModal)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MessageModalComponent, selectors: [["scrm-message-modal"]], inputs: { titleKey: "titleKey", textKey: "textKey", buttons: "buttons" }, decls: 6, vars: 6, consts: [["klass", "message-modal", 3, "closable", "close", "title"], ["modal-body", "", 1, "p-3"], [3, "labelKey"], ["modal-footer", ""], [3, "activeModal", "config$"]], template: function MessageModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-modal", 0)(1, "div", 1)(2, "span");
            i0.ɵɵelement(3, "scrm-label", 2);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelement(5, "scrm-modal-button-group", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("closable", true)("close", ctx.closeButton)("title", ctx.titleKey || "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("labelKey", ctx.textKey);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("activeModal", ctx.activeModal)("config$", ctx.buttonGroup$);
        } }, dependencies: [i2.ModalComponent, i3.LabelComponent, i4.ModalButtonGroupComponent], encapsulation: 2, data: { animation: [
                trigger('modalFade', [
                    transition('void <=> *', [
                        animate('800ms')
                    ]),
                ]),
            ] } }); }
}
export { MessageModalComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageModalComponent, [{
        type: Component,
        args: [{ selector: 'scrm-message-modal', animations: [
                    trigger('modalFade', [
                        transition('void <=> *', [
                            animate('800ms')
                        ]),
                    ]),
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-modal [closable]=\"true\"\n            [close]=\"closeButton\"\n            [title]=\"titleKey || ''\"\n            klass=\"message-modal\">\n\n    <div class=\"p-3\" modal-body>\n        <span><scrm-label [labelKey]=\"textKey\"></scrm-label></span>\n    </div>\n\n    <div modal-footer>\n        <scrm-modal-button-group [activeModal]=\"activeModal\"\n                                 [config$]=\"buttonGroup$\">\n        </scrm-modal-button-group>\n    </div>\n</scrm-modal>\n" }]
    }], function () { return [{ type: i1.NgbActiveModal }]; }, { titleKey: [{
            type: Input
        }], textKey: [{
            type: Input
        }], buttons: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL21lc3NhZ2UtbW9kYWwvbWVzc2FnZS1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL21lc3NhZ2UtbW9kYWwvbWVzc2FnZS1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBT2pFLE9BQU8sRUFBYSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7OztBQUdwQyxNQVlhLHFCQUFxQjtJQVM5QixZQUFtQixXQUEyQjtRQUEzQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFMckMsWUFBTyxHQUE4QixFQUFFLENBQUM7SUFNakQsQ0FBQztJQUVELFFBQVE7UUFFSixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDSyxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNmLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxRQUFRLENBQUM7WUFDN0MsT0FBTyxFQUFFLEdBQVMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7b0JBQ25CLElBQUksRUFBRSxjQUFjO2lCQUNELENBQUMsQ0FBQztZQUM3QixDQUFDO1NBQ2UsQ0FBQztJQUV6QixDQUFDO3NGQTNCUSxxQkFBcUI7b0VBQXJCLHFCQUFxQjtZQ3ZCbEMscUNBR2tDLGFBQUEsV0FBQTtZQUdwQixnQ0FBOEM7WUFBQSxpQkFBTyxFQUFBO1lBRy9ELDhCQUFrQjtZQUNkLDZDQUUwQjtZQUM5QixpQkFBTSxFQUFBOztZQWJFLCtCQUFpQiwwQkFBQSw2QkFBQTtZQU1ILGVBQW9CO1lBQXBCLHNDQUFvQjtZQUliLGVBQTJCO1lBQTNCLDZDQUEyQiw2QkFBQTtzSURLNUM7Z0JBQ1IsT0FBTyxDQUFDLFdBQVcsRUFBRTtvQkFDakIsVUFBVSxDQUFDLFlBQVksRUFBRTt3QkFDckIsT0FBTyxDQUFDLE9BQU8sQ0FBQztxQkFDbkIsQ0FBQztpQkFDTCxDQUFDO2FBQ0w7O1NBRVEscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FaakMsU0FBUzsyQkFDSSxvQkFBb0IsY0FHbEI7b0JBQ1IsT0FBTyxDQUFDLFdBQVcsRUFBRTt3QkFDakIsVUFBVSxDQUFDLFlBQVksRUFBRTs0QkFDckIsT0FBTyxDQUFDLE9BQU8sQ0FBQzt5QkFDbkIsQ0FBQztxQkFDTCxDQUFDO2lCQUNMO2lFQUlRLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiQWN0aXZlTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7YW5pbWF0ZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0J1dHRvbkludGVyZmFjZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7XG4gICAgQW55TW9kYWxCdXR0b25JbnRlcmZhY2UsXG4gICAgTW9kYWxCdXR0b25Hcm91cEludGVyZmFjZSxcbiAgICBNb2RhbENsb3NlRmVlZEJhY2tcbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1tZXNzYWdlLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ21vZGFsRmFkZScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPD0+IConLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnODAwbXMnKVxuICAgICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIHRpdGxlS2V5OiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGV4dEtleTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGJ1dHRvbnM6IEFueU1vZGFsQnV0dG9uSW50ZXJmYWNlW10gPSBbXTtcblxuICAgIGJ1dHRvbkdyb3VwJDogT2JzZXJ2YWJsZTxNb2RhbEJ1dHRvbkdyb3VwSW50ZXJmYWNlPjtcbiAgICBjbG9zZUJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuYnV0dG9uR3JvdXAkID0gb2Yoe1xuICAgICAgICAgICAgYnV0dG9uczogdGhpcy5idXR0b25zXG4gICAgICAgIH0gYXMgTW9kYWxCdXR0b25Hcm91cEludGVyZmFjZSk7XG5cbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IHtcbiAgICAgICAgICAgIGtsYXNzOiBbJ2J0bicsICdidG4tb3V0bGluZS1saWdodCcsICdidG4tc20nXSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Nsb3NlLWJ1dHRvbidcbiAgICAgICAgICAgICAgICB9IGFzIE1vZGFsQ2xvc2VGZWVkQmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPHNjcm0tbW9kYWwgW2Nsb3NhYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgW2Nsb3NlXT1cImNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgIFt0aXRsZV09XCJ0aXRsZUtleSB8fCAnJ1wiXG4gICAgICAgICAgICBrbGFzcz1cIm1lc3NhZ2UtbW9kYWxcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJwLTNcIiBtb2RhbC1ib2R5PlxuICAgICAgICA8c3Bhbj48c2NybS1sYWJlbCBbbGFiZWxLZXldPVwidGV4dEtleVwiPjwvc2NybS1sYWJlbD48L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IG1vZGFsLWZvb3Rlcj5cbiAgICAgICAgPHNjcm0tbW9kYWwtYnV0dG9uLWdyb3VwIFthY3RpdmVNb2RhbF09XCJhY3RpdmVNb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnJF09XCJidXR0b25Hcm91cCRcIj5cbiAgICAgICAgPC9zY3JtLW1vZGFsLWJ1dHRvbi1ncm91cD5cbiAgICA8L2Rpdj5cbjwvc2NybS1tb2RhbD5cbiJdfQ==