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
import { isVoid } from 'common';
import { BehaviorSubject, of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../components/panel/panel.component";
import * as i3 from "../../../../components/record-grid/record-grid.component";
function RecordPanelComponent_scrm_panel_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-grid", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r2.getGridConfig());
} }
function RecordPanelComponent_scrm_panel_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "scrm-panel", 1)(1, "div", 2);
    i0.ɵɵtemplate(2, RecordPanelComponent_scrm_panel_0_ng_container_2_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("klass", "record-panel ", ctx_r0.config && ctx_r0.config.klass || "", "");
    i0.ɵɵproperty("close", ctx_r0.closeButton)("isCollapsed$", ctx_r0.isCollapsed$)("mode", ctx_r0.panelMode)("titleKey", ctx_r0.config.title || "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.config);
} }
class RecordPanelComponent {
    constructor() {
        this.panelMode = 'closable';
    }
    ngOnInit() {
        this.vm$ = this.config.store.vm$;
        this.initCloseButton();
        if (this.config.panelMode) {
            this.panelMode = this.config.panelMode;
        }
        this.collapse = new BehaviorSubject(false);
        this.isCollapsed$ = this.collapse.asObservable();
        if (!isVoid(this.config.isCollapsed)) {
            this.collapse.next(this.config.isCollapsed);
        }
    }
    ngOnDestroy() {
    }
    getGridConfig() {
        return {
            record$: this.config.store.stagingRecord$,
            mode$: this.config.store.mode$,
            fields$: this.config.store.getViewFieldsKeys$(),
            actions: this.config.actions,
            klass: 'mt-2 rounded',
            buttonClass: 'btn btn-outline-danger btn-sm',
            maxColumns$: of(4).pipe(shareReplay(1)),
            sizeMap$: of({
                handset: 1,
                tablet: 2,
                web: 3,
                wide: 4
            }).pipe(shareReplay(1)),
        };
    }
    /**
     * Init close button
     */
    initCloseButton() {
        this.closeButton = {
            onClick: () => {
                this.config.onClose();
            }
        };
    }
    static { this.ɵfac = function RecordPanelComponent_Factory(t) { return new (t || RecordPanelComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordPanelComponent, selectors: [["scrm-record-panel"]], inputs: { config: "config" }, decls: 2, vars: 3, consts: [[3, "close", "isCollapsed$", "mode", "titleKey", "klass", 4, "ngIf"], [3, "close", "isCollapsed$", "mode", "titleKey", "klass"], ["panel-body", "", 1, "pl-2", "pr-2"], [4, "ngIf"], [3, "config"]], template: function RecordPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordPanelComponent_scrm_panel_0_Template, 3, 6, "scrm-panel", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i1.NgIf, i2.PanelComponent, i3.RecordGridComponent, i1.AsyncPipe], encapsulation: 2 }); }
}
export { RecordPanelComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordPanelComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-panel', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-panel *ngIf=\"(vm$ | async) as vm\"\n            [close]=\"closeButton\"\n            [isCollapsed$]=\"isCollapsed$\"\n            [mode]=\"panelMode\"\n            [titleKey]=\"config.title || ''\"\n            klass=\"record-panel {{ (config && config.klass) || ''}}\">\n\n    <div class=\"pl-2 pr-2\" panel-body>\n\n        <ng-container *ngIf=\"config\">\n            <scrm-record-grid [config]=\"getGridConfig()\"></scrm-record-grid>\n        </ng-container>\n\n    </div>\n\n</scrm-panel>\n" }]
    }], function () { return []; }, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC1wYW5lbC9jb21wb25lbnRzL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvcmVjb3JkLXBhbmVsL2NvbXBvbmVudHMvcmVjb3JkLXBhbmVsL3JlY29yZC1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBa0IsTUFBTSxFQUFnQixNQUFNLFFBQVEsQ0FBQztBQUM5RCxPQUFPLEVBQUMsZUFBZSxFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztJQ09uQyw2QkFBNkI7SUFDekIsc0NBQWdFO0lBQ3BFLDBCQUFlOzs7SUFETyxlQUEwQjtJQUExQiwrQ0FBMEI7OztJQVZ4RCxxQ0FLcUUsYUFBQTtJQUk3RCxvR0FFZTtJQUVuQixpQkFBTSxFQUFBOzs7SUFSRSxtR0FBd0Q7SUFKeEQsMENBQXFCLHFDQUFBLDBCQUFBLHVDQUFBO0lBUVYsZUFBWTtJQUFaLG9DQUFZOztBREhuQyxNQUthLG9CQUFvQjtJQVc3QjtRQVBBLGNBQVMsR0FBd0MsVUFBVSxDQUFDO0lBUTVELENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFFakMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztTQUMxQztRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO0lBRUwsQ0FBQztJQUVELFdBQVc7SUFDWCxDQUFDO0lBRUQsYUFBYTtRQUVULE9BQU87WUFDSCxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYztZQUN6QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSztZQUM5QixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUU7WUFDL0MsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztZQUM1QixLQUFLLEVBQUUsY0FBYztZQUNyQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxRQUFRLEVBQUUsRUFBRSxDQUFDO2dCQUNULE9BQU8sRUFBRSxDQUFDO2dCQUNWLE1BQU0sRUFBRSxDQUFDO2dCQUNULEdBQUcsRUFBRSxDQUFDO2dCQUNOLElBQUksRUFBRSxDQUFDO2FBQ08sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkIsQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDTyxlQUFlO1FBRXJCLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDZixPQUFPLEVBQUUsR0FBUyxFQUFFO2dCQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzFCLENBQUM7U0FDZSxDQUFDO0lBQ3pCLENBQUM7cUZBL0RRLG9CQUFvQjtvRUFBcEIsb0JBQW9CO1lDWGpDLG1GQWVhOzs7WUFmQSxvREFBb0I7OztTRFdwQixvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQUxoQyxTQUFTOzJCQUNJLG1CQUFtQjtzQ0FNcEIsTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnV0dG9uSW50ZXJmYWNlLCBpc1ZvaWQsIFNjcmVlblNpemVNYXB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtzaGFyZVJlcGxheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtSZWNvcmRHcmlkQ29uZmlnfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3JlY29yZC1ncmlkL3JlY29yZC1ncmlkLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkUGFuZWxDb25maWd9IGZyb20gJy4vcmVjb3JkLXBhbmVsLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXJlY29yZC1wYW5lbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlY29yZC1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBjb25maWc6IFJlY29yZFBhbmVsQ29uZmlnO1xuICAgIGNsb3NlQnV0dG9uOiBCdXR0b25JbnRlcmZhY2U7XG4gICAgcGFuZWxNb2RlOiAnY29sbGFwc2libGUnIHwgJ2Nsb3NhYmxlJyB8ICdub25lJyA9ICdjbG9zYWJsZSc7XG4gICAgaXNDb2xsYXBzZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gICAgdm0kOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICBwcm90ZWN0ZWQgY29sbGFwc2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZtJCA9IHRoaXMuY29uZmlnLnN0b3JlLnZtJDtcblxuICAgICAgICB0aGlzLmluaXRDbG9zZUJ1dHRvbigpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5wYW5lbE1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMucGFuZWxNb2RlID0gdGhpcy5jb25maWcucGFuZWxNb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICAgICAgICB0aGlzLmlzQ29sbGFwc2VkJCA9IHRoaXMuY29sbGFwc2UuYXNPYnNlcnZhYmxlKCk7XG4gICAgICAgIGlmICghaXNWb2lkKHRoaXMuY29uZmlnLmlzQ29sbGFwc2VkKSkge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZS5uZXh0KHRoaXMuY29uZmlnLmlzQ29sbGFwc2VkKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgfVxuXG4gICAgZ2V0R3JpZENvbmZpZygpOiBSZWNvcmRHcmlkQ29uZmlnIHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVjb3JkJDogdGhpcy5jb25maWcuc3RvcmUuc3RhZ2luZ1JlY29yZCQsXG4gICAgICAgICAgICBtb2RlJDogdGhpcy5jb25maWcuc3RvcmUubW9kZSQsXG4gICAgICAgICAgICBmaWVsZHMkOiB0aGlzLmNvbmZpZy5zdG9yZS5nZXRWaWV3RmllbGRzS2V5cyQoKSxcbiAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMuY29uZmlnLmFjdGlvbnMsXG4gICAgICAgICAgICBrbGFzczogJ210LTIgcm91bmRlZCcsXG4gICAgICAgICAgICBidXR0b25DbGFzczogJ2J0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtJyxcbiAgICAgICAgICAgIG1heENvbHVtbnMkOiBvZig0KS5waXBlKHNoYXJlUmVwbGF5KDEpKSxcbiAgICAgICAgICAgIHNpemVNYXAkOiBvZih7XG4gICAgICAgICAgICAgICAgaGFuZHNldDogMSxcbiAgICAgICAgICAgICAgICB0YWJsZXQ6IDIsXG4gICAgICAgICAgICAgICAgd2ViOiAzLFxuICAgICAgICAgICAgICAgIHdpZGU6IDRcbiAgICAgICAgICAgIH0gYXMgU2NyZWVuU2l6ZU1hcCkucGlwZShzaGFyZVJlcGxheSgxKSksXG4gICAgICAgIH0gYXMgUmVjb3JkR3JpZENvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNsb3NlIGJ1dHRvblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0Q2xvc2VCdXR0b24oKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5vbkNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPHNjcm0tcGFuZWwgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCJcbiAgICAgICAgICAgIFtjbG9zZV09XCJjbG9zZUJ1dHRvblwiXG4gICAgICAgICAgICBbaXNDb2xsYXBzZWQkXT1cImlzQ29sbGFwc2VkJFwiXG4gICAgICAgICAgICBbbW9kZV09XCJwYW5lbE1vZGVcIlxuICAgICAgICAgICAgW3RpdGxlS2V5XT1cImNvbmZpZy50aXRsZSB8fCAnJ1wiXG4gICAgICAgICAgICBrbGFzcz1cInJlY29yZC1wYW5lbCB7eyAoY29uZmlnICYmIGNvbmZpZy5rbGFzcykgfHwgJyd9fVwiPlxuXG4gICAgPGRpdiBjbGFzcz1cInBsLTIgcHItMlwiIHBhbmVsLWJvZHk+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZ1wiPlxuICAgICAgICAgICAgPHNjcm0tcmVjb3JkLWdyaWQgW2NvbmZpZ109XCJnZXRHcmlkQ29uZmlnKClcIj48L3Njcm0tcmVjb3JkLWdyaWQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPC9kaXY+XG5cbjwvc2NybS1wYW5lbD5cbiJdfQ==