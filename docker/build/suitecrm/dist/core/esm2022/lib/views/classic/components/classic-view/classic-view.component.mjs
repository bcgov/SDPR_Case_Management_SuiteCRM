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
import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { IframeResizeHandlerHandler } from '../../services/iframe-resize-handler.service';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import { AuthService } from '../../../../services/auth/auth.service';
import { RouteConverter } from '../../../../services/navigation/route-converter/route-converter.service';
import { IframePageChangeObserver } from '../../services/iframe-page-change-observer.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/platform-browser";
import * as i3 from "../../../../services/navigation/route-converter/route-converter.service";
import * as i4 from "../../../../services/auth/auth.service";
import * as i5 from "../../../../store/system-config/system-config.store";
const _c0 = ["dataContainer"];
class ClassicViewUiComponent {
    constructor(route, router, sanitizer, routeConverter, auth, ngZone, systemConfigs) {
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.routeConverter = routeConverter;
        this.auth = auth;
        this.ngZone = ngZone;
        this.systemConfigs = systemConfigs;
        this.iframe = null;
    }
    ngOnInit() {
        this.url = this.route.snapshot.data.legacyUrl;
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
    onPageChange(newLocation) {
        if (this.shouldRedirect(newLocation) === false) {
            this.iframe.style.display = 'block';
            this.cleanObservers();
            this.initObservers();
            return;
        }
        const location = this.routeConverter.toFrontEndRoute(newLocation);
        if (location === '/users/login') {
            this.auth.logout('LBL_SESSION_EXPIRED');
            return;
        }
        this.ngZone.run(() => this.router.navigateByUrl(location).then()).then();
    }
    onIFrameLoad() {
        // Do not show scroll at any time, to avoid flickering
        this.iframe.contentWindow.document.body.style.overflow = 'hidden';
        // Init resize handler
        this.iframeResizeHandler.init(this.iframe);
    }
    onIFrameUnload() {
        // hide iframe, while being re-directed
        this.iframe.style.display = 'none';
        this.iframeResizeHandler.destroy();
    }
    buildIframePageChangeObserver() {
        return new IframePageChangeObserver(this.iframe, this.onPageChange.bind(this), this.onIFrameLoad.bind(this), this.onIFrameUnload.bind(this));
    }
    buildIframeResizeHandlerHandler() {
        return new IframeResizeHandlerHandler();
    }
    /**
     * Check if should re-direct to link or if it was excluded
     *
     * @param {string} legacyLink to check
     * @returns {boolean} should redirect
     */
    shouldRedirect(legacyLink) {
        if (legacyLink && legacyLink.includes('/#/')) {
            return true;
        }
        const routeInfo = this.routeConverter.parse(legacyLink);
        // if no route or no module, don't re-direct
        if (!routeInfo || !routeInfo.module) {
            return false;
        }
        const reuse = this.routeConverter.matchesActiveRoute(this.route, routeInfo);
        if (reuse === true) {
            return false;
        }
        if (!routeInfo.action) {
            return true;
        }
        return this.toExclude(routeInfo);
    }
    /**
     * Check if given route is to exclude from redirection
     *
     * @param {object} routeInfo to check
     * @returns {boolean} is to exclude
     */
    toExclude(routeInfo) {
        const exclusions = this.systemConfigs.getConfigValue('classicview_routing_exclusions');
        if (!exclusions || Object.keys(exclusions).length === 0) {
            return true;
        }
        // if action is excluded for any module, don't re-direct
        if (exclusions.any && exclusions.any.includes(routeInfo.action)) {
            return false;
        }
        if (!exclusions[routeInfo.module]) {
            return true;
        }
        // if module action is excluded, don't re-direct
        const moduleExclusions = exclusions[routeInfo.module];
        return !(moduleExclusions && moduleExclusions.includes(routeInfo.action));
    }
    static { this.ɵfac = function ClassicViewUiComponent_Factory(t) { return new (t || ClassicViewUiComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.DomSanitizer), i0.ɵɵdirectiveInject(i3.RouteConverter), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i5.SystemConfigStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ClassicViewUiComponent, selectors: [["scrm-classic-view-ui"]], viewQuery: function ClassicViewUiComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dataContainer = _t.first);
        } }, decls: 3, vars: 0, consts: [[1, "classic-view-container"], ["dataContainer", ""]], template: function ClassicViewUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵelement(2, "iframe");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 }); }
}
export { ClassicViewUiComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClassicViewUiComponent, [{
        type: Component,
        args: [{ selector: 'scrm-classic-view-ui', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"classic-view-container\" #dataContainer>\n    <iframe></iframe>\n</div>\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.DomSanitizer }, { type: i3.RouteConverter }, { type: i4.AuthService }, { type: i0.NgZone }, { type: i5.SystemConfigStore }]; }, { dataContainer: [{
            type: ViewChild,
            args: ['dataContainer', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9jbGFzc2ljL2NvbXBvbmVudHMvY2xhc3NpYy12aWV3L2NsYXNzaWMtdmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvY2xhc3NpYy9jb21wb25lbnRzL2NsYXNzaWMtdmlldy9jbGFzc2ljLXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQXFCLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUMsY0FBYyxFQUFFLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUN4RixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUN0RixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGNBQWMsRUFBWSxNQUFNLHlFQUF5RSxDQUFDO0FBQ2xILE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7OztBQU01RixNQUthLHNCQUFzQjtJQVMvQixZQUNZLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxTQUF1QixFQUN2QixjQUE4QixFQUM5QixJQUFpQixFQUNqQixNQUFjLEVBQ2QsYUFBZ0M7UUFOaEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFO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WUFDL0IsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELGdEQUFnRDtRQUNoRCxNQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7dUZBdExRLHNCQUFzQjtvRUFBdEIsc0JBQXNCOzs7Ozs7WUNqQm5DLGlDQUFtRDtZQUMvQyx5QkFBaUI7WUFDckIsaUJBQU07OztTRGVPLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0ksc0JBQXNCOzZOQU1ZLGFBQWE7a0JBQXhELFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0lmcmFtZVJlc2l6ZUhhbmRsZXJIYW5kbGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pZnJhbWUtcmVzaXplLWhhbmRsZXIuc2VydmljZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZUNvbnZlcnRlciwgUm91dGVJbmZvfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL3JvdXRlLWNvbnZlcnRlci9yb3V0ZS1jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge0lmcmFtZVBhZ2VDaGFuZ2VPYnNlcnZlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvaWZyYW1lLXBhZ2UtY2hhbmdlLW9ic2VydmVyLnNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgUm91dGluZ0V4Y2x1c2lvbnMge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1tdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tY2xhc3NpYy12aWV3LXVpJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2xhc3NpYy12aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENsYXNzaWNWaWV3VWlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKCdkYXRhQ29udGFpbmVyJywge3N0YXRpYzogdHJ1ZX0pIGRhdGFDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIHdyYXBwZXI6IGFueTtcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGlmcmFtZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBpZnJhbWVQYWdlQ2hhbmdlSGFuZGxlcjogSWZyYW1lUGFnZUNoYW5nZU9ic2VydmVyO1xuICAgIHByaXZhdGUgaWZyYW1lUmVzaXplSGFuZGxlcjogSWZyYW1lUmVzaXplSGFuZGxlckhhbmRsZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgICAgIHByaXZhdGUgcm91dGVDb252ZXJ0ZXI6IFJvdXRlQ29udmVydGVyLFxuICAgICAgICBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgICBwcml2YXRlIHN5c3RlbUNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVybCA9IHRoaXMucm91dGUuc25hcHNob3QuZGF0YS5sZWdhY3lVcmw7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXRJZnJhbWUoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhbk9ic2VydmVycygpO1xuXG4gICAgICAgIHRoaXMuaWZyYW1lID0gbnVsbDtcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSB0aGlzLndyYXBwZXI7XG4gICAgICAgIGlmICh0aGlzLndyYXBwZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIucmVtb3ZlQ2hpbGQocGxhY2Vob2xkZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gJzxpZnJhbWU+PC9pZnJhbWU+JztcbiAgICAgICAgdGhpcy53cmFwcGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbGVhbk9ic2VydmVycygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaWZyYW1lUmVzaXplSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5pZnJhbWVSZXNpemVIYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lUmVzaXplSGFuZGxlciA9IG51bGw7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pZnJhbWVQYWdlQ2hhbmdlSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5pZnJhbWVQYWdlQ2hhbmdlSGFuZGxlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZVBhZ2VDaGFuZ2VIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRJZnJhbWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IHRoaXMuZGF0YUNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLndyYXBwZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy53cmFwcGVyLnJlbW92ZUNoaWxkKHRoaXMud3JhcHBlci5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgaWZyYW1lLnNyYyA9IHRoaXMudXJsO1xuXG4gICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXG4gICAgICAgIHRoaXMuaWZyYW1lID0gaWZyYW1lO1xuXG4gICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIHRoaXMuaW5pdE9ic2VydmVycygpO1xuICAgIH1cblxuICAgIGluaXRPYnNlcnZlcnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaWZyYW1lUGFnZUNoYW5nZUhhbmRsZXIgPSB0aGlzLmJ1aWxkSWZyYW1lUGFnZUNoYW5nZU9ic2VydmVyKCk7XG4gICAgICAgIHRoaXMuaWZyYW1lUmVzaXplSGFuZGxlciA9IHRoaXMuYnVpbGRJZnJhbWVSZXNpemVIYW5kbGVySGFuZGxlcigpO1xuXG4gICAgICAgIGlmICh0aGlzLmlmcmFtZVBhZ2VDaGFuZ2VIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZVBhZ2VDaGFuZ2VIYW5kbGVyLmluaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblBhZ2VDaGFuZ2UobmV3TG9jYXRpb24pOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5zaG91bGRSZWRpcmVjdChuZXdMb2NhdGlvbikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHRoaXMuY2xlYW5PYnNlcnZlcnMoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdE9ic2VydmVycygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLnJvdXRlQ29udmVydGVyLnRvRnJvbnRFbmRSb3V0ZShuZXdMb2NhdGlvbik7XG5cbiAgICAgICAgaWYgKGxvY2F0aW9uID09PSAnL3VzZXJzL2xvZ2luJykge1xuICAgICAgICAgICAgdGhpcy5hdXRoLmxvZ291dCgnTEJMX1NFU1NJT05fRVhQSVJFRCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwobG9jYXRpb24pLnRoZW4oKSkudGhlbigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbklGcmFtZUxvYWQoKTogdm9pZCB7XG4gICAgICAgIC8vIERvIG5vdCBzaG93IHNjcm9sbCBhdCBhbnkgdGltZSwgdG8gYXZvaWQgZmxpY2tlcmluZ1xuICAgICAgICB0aGlzLmlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICAgICAgICAvLyBJbml0IHJlc2l6ZSBoYW5kbGVyXG4gICAgICAgIHRoaXMuaWZyYW1lUmVzaXplSGFuZGxlci5pbml0KHRoaXMuaWZyYW1lKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25JRnJhbWVVbmxvYWQoKTogdm9pZCB7XG4gICAgICAgIC8vIGhpZGUgaWZyYW1lLCB3aGlsZSBiZWluZyByZS1kaXJlY3RlZFxuICAgICAgICB0aGlzLmlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmlmcmFtZVJlc2l6ZUhhbmRsZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZElmcmFtZVBhZ2VDaGFuZ2VPYnNlcnZlcigpOiBJZnJhbWVQYWdlQ2hhbmdlT2JzZXJ2ZXIge1xuICAgICAgICByZXR1cm4gbmV3IElmcmFtZVBhZ2VDaGFuZ2VPYnNlcnZlcihcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLFxuICAgICAgICAgICAgdGhpcy5vblBhZ2VDaGFuZ2UuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHRoaXMub25JRnJhbWVMb2FkLmJpbmQodGhpcyksXG4gICAgICAgICAgICB0aGlzLm9uSUZyYW1lVW5sb2FkLmJpbmQodGhpcyksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkSWZyYW1lUmVzaXplSGFuZGxlckhhbmRsZXIoKTogSWZyYW1lUmVzaXplSGFuZGxlckhhbmRsZXIge1xuICAgICAgICByZXR1cm4gbmV3IElmcmFtZVJlc2l6ZUhhbmRsZXJIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgc2hvdWxkIHJlLWRpcmVjdCB0byBsaW5rIG9yIGlmIGl0IHdhcyBleGNsdWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxlZ2FjeUxpbmsgdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gc2hvdWxkIHJlZGlyZWN0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNob3VsZFJlZGlyZWN0KGxlZ2FjeUxpbms6IHN0cmluZyk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGlmIChsZWdhY3lMaW5rICYmIGxlZ2FjeUxpbmsuaW5jbHVkZXMoJy8jLycpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHRoaXMucm91dGVDb252ZXJ0ZXIucGFyc2UobGVnYWN5TGluayk7XG5cbiAgICAgICAgLy8gaWYgbm8gcm91dGUgb3Igbm8gbW9kdWxlLCBkb24ndCByZS1kaXJlY3RcbiAgICAgICAgaWYgKCFyb3V0ZUluZm8gfHwgIXJvdXRlSW5mby5tb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJldXNlID0gdGhpcy5yb3V0ZUNvbnZlcnRlci5tYXRjaGVzQWN0aXZlUm91dGUodGhpcy5yb3V0ZSwgcm91dGVJbmZvKTtcblxuICAgICAgICBpZiAocmV1c2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcm91dGVJbmZvLmFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy50b0V4Y2x1ZGUocm91dGVJbmZvKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBnaXZlbiByb3V0ZSBpcyB0byBleGNsdWRlIGZyb20gcmVkaXJlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByb3V0ZUluZm8gdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gaXMgdG8gZXhjbHVkZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCB0b0V4Y2x1ZGUocm91dGVJbmZvOiBSb3V0ZUluZm8pOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZXhjbHVzaW9uczogUm91dGluZ0V4Y2x1c2lvbnMgPSB0aGlzLnN5c3RlbUNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ2NsYXNzaWN2aWV3X3JvdXRpbmdfZXhjbHVzaW9ucycpO1xuXG4gICAgICAgIGlmICghZXhjbHVzaW9ucyB8fCBPYmplY3Qua2V5cyhleGNsdXNpb25zKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgYWN0aW9uIGlzIGV4Y2x1ZGVkIGZvciBhbnkgbW9kdWxlLCBkb24ndCByZS1kaXJlY3RcbiAgICAgICAgaWYgKGV4Y2x1c2lvbnMuYW55ICYmIGV4Y2x1c2lvbnMuYW55LmluY2x1ZGVzKHJvdXRlSW5mby5hY3Rpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWV4Y2x1c2lvbnNbcm91dGVJbmZvLm1vZHVsZV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbW9kdWxlIGFjdGlvbiBpcyBleGNsdWRlZCwgZG9uJ3QgcmUtZGlyZWN0XG4gICAgICAgIGNvbnN0IG1vZHVsZUV4Y2x1c2lvbnMgPSBleGNsdXNpb25zW3JvdXRlSW5mby5tb2R1bGVdO1xuICAgICAgICByZXR1cm4gIShtb2R1bGVFeGNsdXNpb25zICYmIG1vZHVsZUV4Y2x1c2lvbnMuaW5jbHVkZXMocm91dGVJbmZvLmFjdGlvbikpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgY2xhc3M9XCJjbGFzc2ljLXZpZXctY29udGFpbmVyXCIgI2RhdGFDb250YWluZXI+XG4gICAgPGlmcmFtZT48L2lmcmFtZT5cbjwvZGl2PlxuIl19