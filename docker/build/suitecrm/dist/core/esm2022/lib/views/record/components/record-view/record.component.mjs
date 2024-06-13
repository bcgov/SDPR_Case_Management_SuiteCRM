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
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { RecordViewStore } from '../../store/record-view/record-view.store';
import { ActivatedRoute } from '@angular/router';
import { RecordActionsAdapter } from '../../adapters/actions.adapter';
import { RecordViewSidebarWidgetService } from "../../services/record-view-sidebar-widget.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/app-state/app-state.store";
import * as i2 from "../../store/record-view/record-view.store";
import * as i3 from "@angular/router";
import * as i4 from "../../services/record-view-sidebar-widget.service";
import * as i5 from "@angular/common";
import * as i6 from "../record-container/record-container.component";
import * as i7 from "../record-header/record-header.component";
import * as i8 from "../../../../components/status-bar/status-bar.component";
function RecordComponent_div_0_scrm_status_bar_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-status-bar");
} }
function RecordComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵelement(2, "scrm-record-header");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelement(4, "hr", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RecordComponent_div_0_scrm_status_bar_5_Template, 1, 0, "scrm-status-bar", 5);
    i0.ɵɵelement(6, "scrm-record-container");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.showStatusBar);
} }
class RecordComponent {
    constructor(appState, recordStore, route, sidebarWidgetHandler) {
        this.appState = appState;
        this.recordStore = recordStore;
        this.route = route;
        this.sidebarWidgetHandler = sidebarWidgetHandler;
        this.vm$ = null;
        this.showStatusBar = false;
    }
    ngOnInit() {
        let mode = 'detail';
        this.appState.addToPrevRoute(this.appState.getRouteUrl());
        const data = (this.route.snapshot && this.route.snapshot.data) || {};
        if (data.mode) {
            mode = data.mode;
        }
        const params = (this.route.snapshot && this.route.snapshot.queryParams) || {};
        this.recordSub = this.recordStore.init(this.appState.getModule(), this.route.snapshot.params.record, mode, params).subscribe();
        this.vm$ = this.recordStore.vm$;
    }
    ngOnDestroy() {
        if (this.recordSub) {
            this.recordSub.unsubscribe();
        }
        this.sidebarWidgetHandler.destroy();
        this.recordStore.destroy();
    }
    static { this.ɵfac = function RecordComponent_Factory(t) { return new (t || RecordComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore), i0.ɵɵdirectiveInject(i2.RecordViewStore), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.RecordViewSidebarWidgetService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordComponent, selectors: [["scrm-record"]], features: [i0.ɵɵProvidersFeature([RecordViewStore, RecordActionsAdapter, RecordViewSidebarWidgetService])], decls: 2, vars: 3, consts: [["class", "record-view", 4, "ngIf"], [1, "record-view"], [1, "record-view-position-sticky"], [1, "record-view-hr-container"], [1, "record-view-hr"], [4, "ngIf"]], template: function RecordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordComponent_div_0_Template, 7, 1, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i5.NgIf, i6.RecordContainerComponent, i7.RecordHeaderComponent, i8.StatusBarComponent, i5.AsyncPipe], encapsulation: 2 }); }
}
export { RecordComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record', providers: [RecordViewStore, RecordActionsAdapter, RecordViewSidebarWidgetService], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start Record View Section -->\n<div class=\"record-view\" *ngIf=\"(vm$ | async) as vm\">\n\n    <div class=\"record-view-position-sticky\">\n        <scrm-record-header></scrm-record-header>\n    </div>\n    <div class=\"record-view-hr-container\">\n        <hr class=\"record-view-hr\">\n    </div>\n\n    <scrm-status-bar *ngIf=\"showStatusBar\"></scrm-status-bar>\n    <scrm-record-container></scrm-record-container>\n</div>\n<!-- End Record View Section -->\n" }]
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.RecordViewStore }, { type: i3.ActivatedRoute }, { type: i4.RecordViewSidebarWidgetService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvY29tcG9uZW50cy9yZWNvcmQtdmlldy9yZWNvcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL3JlY29yZC9jb21wb25lbnRzL3JlY29yZC12aWV3L3JlY29yZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBRTFFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsY0FBYyxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFHdkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0sbURBQW1ELENBQUM7Ozs7Ozs7Ozs7O0lDRzdGLGtDQUF5RDs7O0lBVDdELDhCQUFxRCxhQUFBO0lBRzdDLHFDQUF5QztJQUM3QyxpQkFBTTtJQUNOLDhCQUFzQztJQUNsQyx3QkFBMkI7SUFDL0IsaUJBQU07SUFFTiw4RkFBeUQ7SUFDekQsd0NBQStDO0lBQ25ELGlCQUFNOzs7SUFGZ0IsZUFBbUI7SUFBbkIsMkNBQW1COztBRER6QyxNQU1hLGVBQWU7SUFLeEIsWUFDYyxRQUF1QixFQUN2QixXQUE0QixFQUM5QixLQUFxQixFQUNuQixvQkFBb0Q7UUFIcEQsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFDOUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDbkIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFnQztRQVBsRSxRQUFHLEdBQWdDLElBQUksQ0FBQztRQUN4QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVF0QixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksSUFBSSxHQUFHLFFBQW9CLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzFELE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BCO1FBRUQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFZLENBQUM7UUFFeEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9ILElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7SUFDcEMsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQy9CLENBQUM7Z0ZBbENRLGVBQWU7b0VBQWYsZUFBZSxpRUFGYixDQUFDLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSw4QkFBOEIsQ0FBQztZQ1p0RixnRUFXTTs7O1lBWG9CLG9EQUFvQjs7O1NEY2pDLGVBQWU7dUZBQWYsZUFBZTtjQU4zQixTQUFTOzJCQUNJLGFBQWEsYUFHWixDQUFDLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1JlY29yZFZpZXdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvcmVjb3JkLXZpZXcvcmVjb3JkLXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtSZWNvcmRWaWV3TW9kZWx9IGZyb20gJy4uLy4uL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlLm1vZGVsJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1JlY29yZEFjdGlvbnNBZGFwdGVyfSBmcm9tICcuLi8uLi9hZGFwdGVycy9hY3Rpb25zLmFkYXB0ZXInO1xuaW1wb3J0IHtSZWNvcmRWaWV3U2lkZWJhcldpZGdldFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9yZWNvcmQtdmlldy1zaWRlYmFyLXdpZGdldC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWNvcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWNvcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG4gICAgcHJvdmlkZXJzOiBbUmVjb3JkVmlld1N0b3JlLCBSZWNvcmRBY3Rpb25zQWRhcHRlciwgUmVjb3JkVmlld1NpZGViYXJXaWRnZXRTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcmVjb3JkU3ViOiBTdWJzY3JpcHRpb247XG4gICAgdm0kOiBPYnNlcnZhYmxlPFJlY29yZFZpZXdNb2RlbD4gPSBudWxsO1xuICAgIHNob3dTdGF0dXNCYXIgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRTdG9yZTogUmVjb3JkVmlld1N0b3JlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJvdGVjdGVkIHNpZGViYXJXaWRnZXRIYW5kbGVyOiBSZWNvcmRWaWV3U2lkZWJhcldpZGdldFNlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IG1vZGUgPSAnZGV0YWlsJyBhcyBWaWV3TW9kZTtcbiAgICAgICAgdGhpcy5hcHBTdGF0ZS5hZGRUb1ByZXZSb3V0ZSh0aGlzLmFwcFN0YXRlLmdldFJvdXRlVXJsKCkpO1xuICAgICAgICBjb25zdCBkYXRhID0gKHRoaXMucm91dGUuc25hcHNob3QgJiYgdGhpcy5yb3V0ZS5zbmFwc2hvdC5kYXRhKSB8fCB7fTtcblxuICAgICAgICBpZiAoZGF0YS5tb2RlKSB7XG4gICAgICAgICAgICBtb2RlID0gZGF0YS5tb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gKHRoaXMucm91dGUuc25hcHNob3QgJiYgdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtcykgfHwge30gYXMgUGFyYW1zO1xuXG4gICAgICAgIHRoaXMucmVjb3JkU3ViID0gdGhpcy5yZWNvcmRTdG9yZS5pbml0KHRoaXMuYXBwU3RhdGUuZ2V0TW9kdWxlKCksIHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnJlY29yZCwgbW9kZSwgcGFyYW1zKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy52bSQgPSB0aGlzLnJlY29yZFN0b3JlLnZtJDtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucmVjb3JkU3ViKSB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZFN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2lkZWJhcldpZGdldEhhbmRsZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnJlY29yZFN0b3JlLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48IS0tIFN0YXJ0IFJlY29yZCBWaWV3IFNlY3Rpb24gLS0+XG48ZGl2IGNsYXNzPVwicmVjb3JkLXZpZXdcIiAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIj5cblxuICAgIDxkaXYgY2xhc3M9XCJyZWNvcmQtdmlldy1wb3NpdGlvbi1zdGlja3lcIj5cbiAgICAgICAgPHNjcm0tcmVjb3JkLWhlYWRlcj48L3Njcm0tcmVjb3JkLWhlYWRlcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmVjb3JkLXZpZXctaHItY29udGFpbmVyXCI+XG4gICAgICAgIDxociBjbGFzcz1cInJlY29yZC12aWV3LWhyXCI+XG4gICAgPC9kaXY+XG5cbiAgICA8c2NybS1zdGF0dXMtYmFyICpuZ0lmPVwic2hvd1N0YXR1c0JhclwiPjwvc2NybS1zdGF0dXMtYmFyPlxuICAgIDxzY3JtLXJlY29yZC1jb250YWluZXI+PC9zY3JtLXJlY29yZC1jb250YWluZXI+XG48L2Rpdj5cbjwhLS0gRW5kIFJlY29yZCBWaWV3IFNlY3Rpb24gLS0+XG4iXX0=