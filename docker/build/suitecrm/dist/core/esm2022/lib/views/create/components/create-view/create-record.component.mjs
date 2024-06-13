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
import { Component, HostListener } from '@angular/core';
import { combineLatestWith } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CreateViewStore } from '../../store/create-view/create-view.store';
import { RecordViewStore } from '../../../record/store/record-view/record-view.store';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { RecordActionsAdapter } from "../../../record/adapters/actions.adapter";
import { RecordViewSidebarWidgetService } from "../../../record/services/record-view-sidebar-widget.service";
import { filter, map } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/app-state/app-state.store";
import * as i2 from "../../store/create-view/create-view.store";
import * as i3 from "../../../record/adapters/actions.adapter";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
import * as i6 from "../../../record/components/record-container/record-container.component";
import * as i7 from "../../../record/components/record-header/record-header.component";
import * as i8 from "../../../../components/status-bar/status-bar.component";
function CreateRecordComponent_div_0_scrm_status_bar_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-status-bar");
} }
function CreateRecordComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵelement(2, "scrm-record-header");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelement(4, "hr", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CreateRecordComponent_div_0_scrm_status_bar_5_Template, 1, 0, "scrm-status-bar", 5);
    i0.ɵɵelement(6, "scrm-record-container");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.showStatusBar);
} }
class CreateRecordComponent {
    onEnterKey() {
        if (!this.saveAction || !this.context) {
            return;
        }
        this.actionsAdapter.runAction(this.saveAction, this.context);
    }
    constructor(appState, recordStore, actionsAdapter, route) {
        this.appState = appState;
        this.recordStore = recordStore;
        this.actionsAdapter = actionsAdapter;
        this.route = route;
        this.subs = [];
        this.vm$ = null;
        this.showStatusBar = false;
        this.actionConfig$ = this.recordStore.mode$.pipe(combineLatestWith(this.actionsAdapter.getActions(), this.getViewContext$()), filter(([mode, actions, context]) => mode === 'create'), map(([mode, actions, context]) => ({
            mode,
            actions,
            context
        })));
    }
    ngOnInit() {
        let mode = 'detail';
        const data = (this.route.snapshot && this.route.snapshot.data) || {};
        if (data.mode) {
            mode = data.mode;
        }
        let params = (this.route.snapshot && this.route.snapshot.queryParams) || {};
        params = { ...params };
        let recordId = this.route.snapshot.params.record;
        if (data.duplicate === true) {
            params.originalDuplicateId = recordId;
            params.isDuplicate = true;
            recordId = '';
        }
        this.subs.push(this.recordStore.init(this.appState.getModule(), recordId, mode, params).subscribe());
        this.vm$ = this.recordStore.vm$;
        this.appState.removeAllPrevRoutes();
        this.subs.push(this.actionConfig$.subscribe(config => {
            this.context = config.context;
            config.actions.forEach(actionItem => {
                if (actionItem.key === 'saveNew') {
                    this.saveAction = actionItem;
                }
            });
        }));
    }
    getViewContext$() {
        return this.recordStore.viewContext$;
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.recordStore.destroy();
    }
    static { this.ɵfac = function CreateRecordComponent_Factory(t) { return new (t || CreateRecordComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore), i0.ɵɵdirectiveInject(i2.CreateViewStore), i0.ɵɵdirectiveInject(i3.RecordActionsAdapter), i0.ɵɵdirectiveInject(i4.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CreateRecordComponent, selectors: [["scrm-create-record"]], hostBindings: function CreateRecordComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup.control.enter", function CreateRecordComponent_keyup_control_enter_HostBindingHandler() { return ctx.onEnterKey(); });
        } }, features: [i0.ɵɵProvidersFeature([
                CreateViewStore,
                RecordActionsAdapter,
                {
                    provide: RecordViewStore,
                    useExisting: CreateViewStore
                },
                RecordViewSidebarWidgetService
            ])], decls: 2, vars: 3, consts: [["class", "record-view", 4, "ngIf"], [1, "record-view"], [1, "record-view-position-sticky"], [1, "record-view-hr-container"], [1, "record-view-hr"], [4, "ngIf"]], template: function CreateRecordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CreateRecordComponent_div_0_Template, 7, 1, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i5.NgIf, i6.RecordContainerComponent, i7.RecordHeaderComponent, i8.StatusBarComponent, i5.AsyncPipe], encapsulation: 2 }); }
}
export { CreateRecordComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateRecordComponent, [{
        type: Component,
        args: [{ selector: 'scrm-create-record', providers: [
                    CreateViewStore,
                    RecordActionsAdapter,
                    {
                        provide: RecordViewStore,
                        useExisting: CreateViewStore
                    },
                    RecordViewSidebarWidgetService
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<!-- Start Record View Section -->\n<div class=\"record-view\" *ngIf=\"(vm$ | async) as vm\">\n\n    <div class=\"record-view-position-sticky\">\n        <scrm-record-header></scrm-record-header>\n    </div>\n    <div class=\"record-view-hr-container\">\n        <hr class=\"record-view-hr\">\n    </div>\n\n    <scrm-status-bar *ngIf=\"showStatusBar\"></scrm-status-bar>\n    <scrm-record-container></scrm-record-container>\n</div>\n<!-- End Record View Section -->\n" }]
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.CreateViewStore }, { type: i3.RecordActionsAdapter }, { type: i4.ActivatedRoute }]; }, { onEnterKey: [{
            type: HostListener,
            args: ['keyup.control.enter']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXJlY29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvY3JlYXRlL2NvbXBvbmVudHMvY3JlYXRlLXZpZXcvY3JlYXRlLXJlY29yZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvY3JlYXRlL2NvbXBvbmVudHMvY3JlYXRlLXZpZXcvY3JlYXRlLXJlY29yZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxpQkFBaUIsRUFBMkIsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFDLGNBQWMsRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scURBQXFELENBQUM7QUFFcEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBRTFFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzlFLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLDZEQUE2RCxDQUFDO0FBQzNHLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7O0lDRXZDLGtDQUF5RDs7O0lBVDdELDhCQUFxRCxhQUFBO0lBRzdDLHFDQUF5QztJQUM3QyxpQkFBTTtJQUNOLDhCQUFzQztJQUNsQyx3QkFBMkI7SUFDL0IsaUJBQU07SUFFTixvR0FBeUQ7SUFDekQsd0NBQStDO0lB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LENBQUMsT0FBTyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO29CQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztpQkFDaEM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRUQsZUFBZTtRQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7SUFDekMsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDL0IsQ0FBQztzRkE1RVEscUJBQXFCO29FQUFyQixxQkFBcUI7a0lBQXJCLGdCQUFZOzhDQVZWO2dCQUNQLGVBQWU7Z0JBQ2Ysb0JBQW9CO2dCQUNwQjtvQkFDSSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsV0FBVyxFQUFFLGVBQWU7aUJBQy9CO2dCQUNELDhCQUE4QjthQUNqQztZQ3JCTCxzRUFXTTs7O1lBWG9CLG9EQUFvQjs7O1NEdUJqQyxxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQWRqQyxTQUFTOzJCQUNJLG9CQUFvQixhQUduQjtvQkFDUCxlQUFlO29CQUNmLG9CQUFvQjtvQkFDcEI7d0JBQ0ksT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFdBQVcsRUFBRSxlQUFlO3FCQUMvQjtvQkFDRCw4QkFBOEI7aUJBQ2pDOzhKQXNCRCxVQUFVO2tCQURULFlBQVk7bUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtDcmVhdGVWaWV3U3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2NyZWF0ZS12aWV3L2NyZWF0ZS12aWV3LnN0b3JlJztcbmltcG9ydCB7UmVjb3JkVmlld1N0b3JlfSBmcm9tICcuLi8uLi8uLi9yZWNvcmQvc3RvcmUvcmVjb3JkLXZpZXcvcmVjb3JkLXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRWaWV3TW9kZWx9IGZyb20gJy4uLy4uLy4uL3JlY29yZC9zdG9yZS9yZWNvcmQtdmlldy9yZWNvcmQtdmlldy5zdG9yZS5tb2RlbCc7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHtBY3Rpb24sIEFjdGlvbkNvbnRleHQsIFZpZXdDb250ZXh0LCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7UmVjb3JkQWN0aW9uc0FkYXB0ZXJ9IGZyb20gXCIuLi8uLi8uLi9yZWNvcmQvYWRhcHRlcnMvYWN0aW9ucy5hZGFwdGVyXCI7XG5pbXBvcnQge1JlY29yZFZpZXdTaWRlYmFyV2lkZ2V0U2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3JlY29yZC9zZXJ2aWNlcy9yZWNvcmQtdmlldy1zaWRlYmFyLXdpZGdldC5zZXJ2aWNlXCI7XG5pbXBvcnQge2ZpbHRlciwgbWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWNyZWF0ZS1yZWNvcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jcmVhdGUtcmVjb3JkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDcmVhdGVWaWV3U3RvcmUsXG4gICAgICAgIFJlY29yZEFjdGlvbnNBZGFwdGVyLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBSZWNvcmRWaWV3U3RvcmUsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogQ3JlYXRlVmlld1N0b3JlXG4gICAgICAgIH0sXG4gICAgICAgIFJlY29yZFZpZXdTaWRlYmFyV2lkZ2V0U2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlUmVjb3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHZtJDogT2JzZXJ2YWJsZTxSZWNvcmRWaWV3TW9kZWw+ID0gbnVsbDtcbiAgICBzaG93U3RhdHVzQmFyID0gZmFsc2U7XG4gICAgc2F2ZUFjdGlvbjogQWN0aW9uO1xuICAgIGNvbnRleHQ6IEFjdGlvbkNvbnRleHQ7XG5cbiAgICBhY3Rpb25Db25maWckID0gIHRoaXMucmVjb3JkU3RvcmUubW9kZSQucGlwZShcbiAgICAgICAgY29tYmluZUxhdGVzdFdpdGgoXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNBZGFwdGVyLmdldEFjdGlvbnMoKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0Vmlld0NvbnRleHQkKCkpLFxuICAgICAgICBmaWx0ZXIoKFttb2RlLCBhY3Rpb25zLCBjb250ZXh0XSkgPT4gbW9kZSA9PT0gJ2NyZWF0ZScpLFxuICAgICAgICBtYXAoKFttb2RlLCBhY3Rpb25zLCBjb250ZXh0XSkgPT4gKHtcbiAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICBhY3Rpb25zLFxuICAgICAgICAgICAgY29udGV4dFxuICAgICAgICB9KSlcbiAgICApO1xuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5dXAuY29udHJvbC5lbnRlcicpXG4gICAgb25FbnRlcktleSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNhdmVBY3Rpb24gfHwgIXRoaXMuY29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aW9uc0FkYXB0ZXIucnVuQWN0aW9uKHRoaXMuc2F2ZUFjdGlvbiwgdGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkU3RvcmU6IENyZWF0ZVZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbnNBZGFwdGVyOiBSZWNvcmRBY3Rpb25zQWRhcHRlcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IG1vZGUgPSAnZGV0YWlsJyBhcyBWaWV3TW9kZTtcbiAgICAgICAgY29uc3QgZGF0YSA9ICh0aGlzLnJvdXRlLnNuYXBzaG90ICYmIHRoaXMucm91dGUuc25hcHNob3QuZGF0YSkgfHwge307XG5cbiAgICAgICAgaWYgKGRhdGEubW9kZSkge1xuICAgICAgICAgICAgbW9kZSA9IGRhdGEubW9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJhbXMgPSAodGhpcy5yb3V0ZS5zbmFwc2hvdCAmJiB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zKSB8fCB7fSBhcyBQYXJhbXM7XG5cbiAgICAgICAgcGFyYW1zID0gey4uLnBhcmFtc307XG5cbiAgICAgICAgbGV0IHJlY29yZElkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMucmVjb3JkO1xuXG4gICAgICAgIGlmIChkYXRhLmR1cGxpY2F0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFyYW1zLm9yaWdpbmFsRHVwbGljYXRlSWQgPSByZWNvcmRJZDtcbiAgICAgICAgICAgIHBhcmFtcy5pc0R1cGxpY2F0ZSA9IHRydWU7XG4gICAgICAgICAgICByZWNvcmRJZCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMucmVjb3JkU3RvcmUuaW5pdCh0aGlzLmFwcFN0YXRlLmdldE1vZHVsZSgpLCByZWNvcmRJZCwgbW9kZSwgcGFyYW1zKS5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMudm0kID0gdGhpcy5yZWNvcmRTdG9yZS52bSQ7XG4gICAgICAgIHRoaXMuYXBwU3RhdGUucmVtb3ZlQWxsUHJldlJvdXRlcygpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuYWN0aW9uQ29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb25maWcuY29udGV4dDtcbiAgICAgICAgICAgICAgICBjb25maWcuYWN0aW9ucy5mb3JFYWNoKGFjdGlvbkl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uSXRlbS5rZXkgPT09ICdzYXZlTmV3Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQWN0aW9uID0gYWN0aW9uSXRlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRWaWV3Q29udGV4dCQoKTogT2JzZXJ2YWJsZTxWaWV3Q29udGV4dD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRTdG9yZS52aWV3Q29udGV4dCQ7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRTdG9yZS5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuXG48IS0tIFN0YXJ0IFJlY29yZCBWaWV3IFNlY3Rpb24gLS0+XG48ZGl2IGNsYXNzPVwicmVjb3JkLXZpZXdcIiAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIj5cblxuICAgIDxkaXYgY2xhc3M9XCJyZWNvcmQtdmlldy1wb3NpdGlvbi1zdGlja3lcIj5cbiAgICAgICAgPHNjcm0tcmVjb3JkLWhlYWRlcj48L3Njcm0tcmVjb3JkLWhlYWRlcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmVjb3JkLXZpZXctaHItY29udGFpbmVyXCI+XG4gICAgICAgIDxociBjbGFzcz1cInJlY29yZC12aWV3LWhyXCI+XG4gICAgPC9kaXY+XG5cbiAgICA8c2NybS1zdGF0dXMtYmFyICpuZ0lmPVwic2hvd1N0YXR1c0JhclwiPjwvc2NybS1zdGF0dXMtYmFyPlxuICAgIDxzY3JtLXJlY29yZC1jb250YWluZXI+PC9zY3JtLXJlY29yZC1jb250YWluZXI+XG48L2Rpdj5cbjwhLS0gRW5kIFJlY29yZCBWaWV3IFNlY3Rpb24gLS0+XG4iXX0=