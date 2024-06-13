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
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IframeResizeHandlerHandler } from "../../../../views/classic/services/iframe-resize-handler.service";
import { IframePageChangeObserver } from "../../../../views/classic/services/iframe-page-change-observer.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { animate, transition, trigger } from "@angular/animations";
import { LanguageStore } from "../../../../store/language/language.store";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../modal/modal.component";
const _c0 = ["dataContainer"];
class ClassicModalComponent {
    constructor(languageStore, activeModal) {
        this.languageStore = languageStore;
        this.activeModal = activeModal;
        this.url = '';
        this.titleKey = '';
        this.asyncActionCallback = null;
        this.iframe = null;
    }
    ngOnInit() {
        this.closeButton = {
            klass: ['btn', 'btn-outline-light', 'btn-sm'],
            onClick: () => {
                this.activeModal.close({
                    type: 'close-button'
                });
            }
        };
    }
    ngAfterViewInit() {
        this.initIframe();
    }
    ngOnDestroy() {
        this.cleanObservers();
        this.iframe = null;
        const placeholder = this.wrapper;
        if (this.wrapper.firstChild) {
            placeholder.removeChild(placeholder.firstChild);
        }
        placeholder.innerHTML = '<iframe></iframe>';
        this.wrapper = null;
    }
    cleanObservers() {
        if (this.iframeResizeHandler) {
            this.iframeResizeHandler.destroy();
            this.iframeResizeHandler = null;
        }
        if (this.iframePageChangeHandler) {
            this.iframePageChangeHandler.destroy();
            this.iframePageChangeHandler = null;
        }
    }
    initIframe() {
        this.wrapper = this.dataContainer.nativeElement;
        if (this.wrapper.firstChild) {
            this.wrapper.removeChild(this.wrapper.firstChild);
        }
        const iframe = document.createElement('iframe');
        iframe.src = this.url;
        this.wrapper.appendChild(iframe);
        this.iframe = iframe;
        this.iframe.style.display = 'block';
        this.initObservers();
    }
    initObservers() {
        this.iframePageChangeHandler = this.buildIframePageChangeObserver();
        this.iframeResizeHandler = this.buildIframeResizeHandlerHandler();
        if (this.iframePageChangeHandler) {
            this.iframePageChangeHandler.init();
        }
    }
    onIFrameLoad() {
        // Do not show scroll at any time, to avoid flickering
        this.iframe.contentWindow.document.body.style.overflow = 'hidden';
        // callback function to execute custom task
        // as required by the caller
        if (this.asyncActionCallback !== null) {
            this.asyncActionCallback(this.iframe);
        }
        // Init resize handler
        this.iframeResizeHandler.init(this.iframe);
    }
    onIFrameUnload() {
        // hide iframe, while being re-directed
        this.iframe.style.display = 'none';
        this.iframeResizeHandler.destroy();
    }
    buildIframePageChangeObserver() {
        return new IframePageChangeObserver(this.iframe, null, this.onIFrameLoad.bind(this), this.onIFrameUnload.bind(this));
    }
    buildIframeResizeHandlerHandler() {
        return new IframeResizeHandlerHandler();
    }
    static { this.ɵfac = function ClassicModalComponent_Factory(t) { return new (t || ClassicModalComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.NgbActiveModal)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ClassicModalComponent, selectors: [["scrm-classic-modal"]], viewQuery: function ClassicModalComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dataContainer = _t.first);
        } }, inputs: { url: "url", titleKey: "titleKey", asyncActionCallback: "asyncActionCallback" }, decls: 5, vars: 3, consts: [["bodyKlass", "m-0 small-font", "footerKlass", "border-0", "klass", "classic-view-modal", 3, "closable", "close", "titleKey"], ["modal-body", ""], [1, "classic-view-container"], ["dataContainer", ""]], template: function ClassicModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-modal", 0)(1, "div", 1)(2, "div", 2, 3);
            i0.ɵɵelement(4, "iframe");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("closable", true)("close", ctx.closeButton)("titleKey", ctx.titleKey);
        } }, dependencies: [i3.ModalComponent], encapsulation: 2, data: { animation: [
                trigger('modalFade', [
                    transition('void <=> *', [
                        animate('800ms')
                    ]),
                ]),
            ] } }); }
}
export { ClassicModalComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClassicModalComponent, [{
        type: Component,
        args: [{ selector: 'scrm-classic-modal', animations: [
                    trigger('modalFade', [
                        transition('void <=> *', [
                            animate('800ms')
                        ]),
                    ]),
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<scrm-modal [closable]=\"true\"\n            [close]=\"closeButton\"\n            [titleKey]=\"titleKey\"\n            bodyKlass=\"m-0 small-font\"\n            footerKlass=\"border-0\"\n            klass=\"classic-view-modal\">\n\n    <div modal-body>\n\n        <div class=\"classic-view-container\" #dataContainer>\n            <iframe></iframe>\n        </div>\n\n    </div>\n\n</scrm-modal>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.NgbActiveModal }]; }, { url: [{
            type: Input
        }], titleKey: [{
            type: Input
        }], asyncActionCallback: [{
            type: Input
        }], dataContainer: [{
            type: ViewChild,
            args: ['dataContainer', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL2NsYXNzaWMtbW9kYWwvY2xhc3NpYy1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL2NsYXNzaWMtbW9kYWwvY2xhc3NpYy1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLGtFQUFrRSxDQUFDO0FBQzVHLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHdFQUF3RSxDQUFDO0FBQ2hILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRCxPQUFPLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7Ozs7OztBQUd4RSxNQVlhLHFCQUFxQjtJQVk5QixZQUNXLGFBQTRCLEVBQ3pCLFdBQTJCO1FBRDlCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQWJoQyxRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsd0JBQW1CLEdBQWEsSUFBSSxDQUFDO1FBS3BDLFdBQU0sR0FBRyxJQUFJLENBQUM7SUFReEIs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QWUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lmcmFtZVJlc2l6ZUhhbmRsZXJIYW5kbGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vdmlld3MvY2xhc3NpYy9zZXJ2aWNlcy9pZnJhbWUtcmVzaXplLWhhbmRsZXIuc2VydmljZVwiO1xuaW1wb3J0IHtJZnJhbWVQYWdlQ2hhbmdlT2JzZXJ2ZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi92aWV3cy9jbGFzc2ljL3NlcnZpY2VzL2lmcmFtZS1wYWdlLWNoYW5nZS1vYnNlcnZlci5zZXJ2aWNlXCI7XG5pbXBvcnQge05nYkFjdGl2ZU1vZGFsfSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcbmltcG9ydCB7QnV0dG9uSW50ZXJmYWNlLCBNb2RhbENsb3NlRmVlZEJhY2t9IGZyb20gXCJjb21tb25cIjtcbmltcG9ydCB7YW5pbWF0ZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWNsYXNzaWMtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbGFzc2ljLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignbW9kYWxGYWRlJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA8PT4gKicsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCc4MDBtcycpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDbGFzc2ljTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgdXJsOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSB0aXRsZUtleTogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgYXN5bmNBY3Rpb25DYWxsYmFjazogRnVuY3Rpb24gPSBudWxsO1xuICAgIEBWaWV3Q2hpbGQoJ2RhdGFDb250YWluZXInLCB7c3RhdGljOiB0cnVlfSkgZGF0YUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgICBjbG9zZUJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgcHVibGljIHdyYXBwZXI6IGFueTtcbiAgICBwcm90ZWN0ZWQgaWZyYW1lID0gbnVsbDtcbiAgICBwcml2YXRlIGlmcmFtZVBhZ2VDaGFuZ2VIYW5kbGVyOiBJZnJhbWVQYWdlQ2hhbmdlT2JzZXJ2ZXI7XG4gICAgcHJpdmF0ZSBpZnJhbWVSZXNpemVIYW5kbGVyOiBJZnJhbWVSZXNpemVIYW5kbGVySGFuZGxlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCxcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IHtcbiAgICAgICAgICAgIGtsYXNzOiBbJ2J0bicsICdidG4tb3V0bGluZS1saWdodCcsICdidG4tc20nXSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Nsb3NlLWJ1dHRvbidcbiAgICAgICAgICAgICAgICB9IGFzIE1vZGFsQ2xvc2VGZWVkQmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0SWZyYW1lKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYW5PYnNlcnZlcnMoKTtcblxuICAgICAgICB0aGlzLmlmcmFtZSA9IG51bGw7XG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gdGhpcy53cmFwcGVyO1xuICAgICAgICBpZiAodGhpcy53cmFwcGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLnJlbW92ZUNoaWxkKHBsYWNlaG9sZGVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9ICc8aWZyYW1lPjwvaWZyYW1lPic7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IG51bGw7XG4gICAgfVxuXG4gICAgY2xlYW5PYnNlcnZlcnMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlmcmFtZVJlc2l6ZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lUmVzaXplSGFuZGxlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZVJlc2l6ZUhhbmRsZXIgPSBudWxsO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaWZyYW1lUGFnZUNoYW5nZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lUGFnZUNoYW5nZUhhbmRsZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5pZnJhbWVQYWdlQ2hhbmdlSGFuZGxlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0SWZyYW1lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLndyYXBwZXIgPSB0aGlzLmRhdGFDb250YWluZXIubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy53cmFwcGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5yZW1vdmVDaGlsZCh0aGlzLndyYXBwZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIGlmcmFtZS5zcmMgPSB0aGlzLnVybDtcblxuICAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcblxuICAgICAgICB0aGlzLmlmcmFtZSA9IGlmcmFtZTtcblxuICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICB0aGlzLmluaXRPYnNlcnZlcnMoKTtcbiAgICB9XG5cbiAgICBpbml0T2JzZXJ2ZXJzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlmcmFtZVBhZ2VDaGFuZ2VIYW5kbGVyID0gdGhpcy5idWlsZElmcmFtZVBhZ2VDaGFuZ2VPYnNlcnZlcigpO1xuICAgICAgICB0aGlzLmlmcmFtZVJlc2l6ZUhhbmRsZXIgPSB0aGlzLmJ1aWxkSWZyYW1lUmVzaXplSGFuZGxlckhhbmRsZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5pZnJhbWVQYWdlQ2hhbmdlSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5pZnJhbWVQYWdlQ2hhbmdlSGFuZGxlci5pbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25JRnJhbWVMb2FkKCk6IHZvaWQge1xuICAgICAgICAvLyBEbyBub3Qgc2hvdyBzY3JvbGwgYXQgYW55IHRpbWUsIHRvIGF2b2lkIGZsaWNrZXJpbmdcbiAgICAgICAgdGhpcy5pZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICAgICAgLy8gY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSBjdXN0b20gdGFza1xuICAgICAgICAvLyBhcyByZXF1aXJlZCBieSB0aGUgY2FsbGVyXG4gICAgICAgIGlmICh0aGlzLmFzeW5jQWN0aW9uQ2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYXN5bmNBY3Rpb25DYWxsYmFjayh0aGlzLmlmcmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IHJlc2l6ZSBoYW5kbGVyXG4gICAgICAgIHRoaXMuaWZyYW1lUmVzaXplSGFuZGxlci5pbml0KHRoaXMuaWZyYW1lKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25JRnJhbWVVbmxvYWQoKTogdm9pZCB7XG4gICAgICAgIC8vIGhpZGUgaWZyYW1lLCB3aGlsZSBiZWluZyByZS1kaXJlY3RlZFxuICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmlmcmFtZVJlc2l6ZUhhbmRsZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZElmcmFtZVBhZ2VDaGFuZ2VPYnNlcnZlcigpOiBJZnJhbWVQYWdlQ2hhbmdlT2JzZXJ2ZXIge1xuICAgICAgICByZXR1cm4gbmV3IElmcmFtZVBhZ2VDaGFuZ2VPYnNlcnZlcihcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHRoaXMub25JRnJhbWVMb2FkLmJpbmQodGhpcyksXG4gICAgICAgICAgICB0aGlzLm9uSUZyYW1lVW5sb2FkLmJpbmQodGhpcyksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkSWZyYW1lUmVzaXplSGFuZGxlckhhbmRsZXIoKTogSWZyYW1lUmVzaXplSGFuZGxlckhhbmRsZXIge1xuICAgICAgICByZXR1cm4gbmV3IElmcmFtZVJlc2l6ZUhhbmRsZXJIYW5kbGVyKCk7XG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG5cbjxzY3JtLW1vZGFsIFtjbG9zYWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgIFtjbG9zZV09XCJjbG9zZUJ1dHRvblwiXG4gICAgICAgICAgICBbdGl0bGVLZXldPVwidGl0bGVLZXlcIlxuICAgICAgICAgICAgYm9keUtsYXNzPVwibS0wIHNtYWxsLWZvbnRcIlxuICAgICAgICAgICAgZm9vdGVyS2xhc3M9XCJib3JkZXItMFwiXG4gICAgICAgICAgICBrbGFzcz1cImNsYXNzaWMtdmlldy1tb2RhbFwiPlxuXG4gICAgPGRpdiBtb2RhbC1ib2R5PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbGFzc2ljLXZpZXctY29udGFpbmVyXCIgI2RhdGFDb250YWluZXI+XG4gICAgICAgICAgICA8aWZyYW1lPjwvaWZyYW1lPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG48L3Njcm0tbW9kYWw+XG4iXX0=