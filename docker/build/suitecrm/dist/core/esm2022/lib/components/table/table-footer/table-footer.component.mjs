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
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../pagination/pagination.component";
import * as i3 from "../../bulk-action-menu/bulk-action-menu.component";
import * as i4 from "../../load-more/load-more.component";
import * as i5 from "../../action-group-menu/action-group-menu.component";
function TableFooterComponent_scrm_bulk_action_menu_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-bulk-action-menu", 8);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("selectionSource", ctx_r0.selection)("actionSource", ctx_r0.bulkActions);
} }
function TableFooterComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "scrm-load-more", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("loadMoreButton", ctx_r1.getLoadMoreButton());
} }
function TableFooterComponent_scrm_pagination_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-pagination", 11);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("allowPagination", ctx_r2.isPaginationEnabled())("state", ctx_r2.pagination);
} }
class TableFooterComponent {
    isPaginationEnabled() {
        return this.paginationType === 'pagination';
    }
    getLoadMoreButton() {
        return {
            klass: 'load-more',
            labelKey: 'LBL_LOAD_MORE',
            onClick: () => {
                this.config.loadMore();
            }
        };
    }
    allLoaded() {
        return this.config?.allLoaded();
    }
    static { this.ɵfac = function TableFooterComponent_Factory(t) { return new (t || TableFooterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableFooterComponent, selectors: [["scrm-table-footer"]], inputs: { selection: "selection", bulkActions: "bulkActions", pagination: "pagination", tableActions: "tableActions", paginationType: "paginationType", config: "config" }, decls: 8, vars: 4, consts: [[1, "list-view-tableactions", "table-footer"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex"], [3, "selectionSource", "actionSource", 4, "ngIf"], ["buttonClass", "btn table-action-button", 3, "config"], ["class", "mx-0 pl-0 load-more-style", 4, "ngIf"], [1, "mx-0", "pl-0", "table-pagination-wrapper"], [3, "allowPagination", "state", 4, "ngIf"], [3, "selectionSource", "actionSource"], [1, "mx-0", "pl-0", "load-more-style"], [3, "loadMoreButton"], [3, "allowPagination", "state"]], template: function TableFooterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵtemplate(3, TableFooterComponent_scrm_bulk_action_menu_3_Template, 1, 2, "scrm-bulk-action-menu", 3);
            i0.ɵɵelement(4, "scrm-action-group-menu", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, TableFooterComponent_div_5_Template, 2, 1, "div", 5);
            i0.ɵɵelementStart(6, "div", 6);
            i0.ɵɵtemplate(7, TableFooterComponent_scrm_pagination_7_Template, 1, 2, "scrm-pagination", 7);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.selection && ctx.bulkActions);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("config", ctx.tableActions);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isPaginationEnabled() && !ctx.allLoaded());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.pagination);
        } }, dependencies: [i1.NgIf, i2.PaginationComponent, i3.BulkActionMenuComponent, i4.LoadMoreComponent, i5.ActionGroupMenuComponent], encapsulation: 2 }); }
}
export { TableFooterComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableFooterComponent, [{
        type: Component,
        args: [{ selector: 'scrm-table-footer', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start List View Table Footer Section -->\n\n<div class=\"list-view-tableactions table-footer\">\n  <div class=\"d-flex justify-content-between align-items-center\">\n      <div class=\"d-flex\">\n          <scrm-bulk-action-menu *ngIf=\"selection && bulkActions\"\n                                 [selectionSource]=\"selection\"\n                                 [actionSource]=\"bulkActions\">\n          </scrm-bulk-action-menu>\n          <scrm-action-group-menu [config]=\"tableActions\" buttonClass=\"btn table-action-button\"></scrm-action-group-menu>\n      </div>\n      <div *ngIf=\"!isPaginationEnabled() && !allLoaded()\"\n           class=\"mx-0 pl-0 load-more-style\">\n          <scrm-load-more\n              [loadMoreButton]=\"getLoadMoreButton()\">\n          </scrm-load-more>\n      </div>\n      <div class=\"mx-0 pl-0 table-pagination-wrapper\">\n          <scrm-pagination *ngIf=\"pagination\"\n                           [allowPagination]=\"isPaginationEnabled()\"\n                           [state]=\"pagination\">\n          </scrm-pagination>\n      </div>\n  </div>\n</div>\n\n<!-- End List View Table Footer Section -->\n" }]
    }], null, { selection: [{
            type: Input
        }], bulkActions: [{
            type: Input
        }], pagination: [{
            type: Input
        }], tableActions: [{
            type: Input
        }], paginationType: [{
            type: Input
        }], config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWZvb3Rlci90YWJsZS1mb290ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUtZm9vdGVyL3RhYmxlLWZvb3Rlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDTXJDLDJDQUd3Qjs7O0lBRkQsa0RBQTZCLG9DQUFBOzs7SUFLeEQsOEJBQ3VDO0lBQ25DLHFDQUVpQjtJQUNyQixpQkFBTTs7O0lBRkUsZUFBc0M7SUFBdEMsMkRBQXNDOzs7SUFJMUMsc0NBR2tCOzs7SUFGRCw4REFBeUMsNEJBQUE7O0FEZnBFLE1BSWEsb0JBQW9CO0lBUzdCLG1CQUFtQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsS0FBSyxZQUFZLENBQUM7SUFDaEQsQ0FBQztJQUVELGlCQUFpQjtRQUNiLE9BQU87WUFDSCxLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsZUFBZTtZQUN6QixPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDM0IsQ0FBQztTQUNlLENBQUM7SUFDekIsQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDcEMsQ0FBQztxRkF6QlEsb0JBQW9CO29FQUFwQixvQkFBb0I7WUNOakMsOEJBQWlELGFBQUEsYUFBQTtZQUd2Qyx5R0FHd0I7WUFDeEIsNENBQStHO1lBQ25ILGlCQUFNO1lBQ04scUVBS007WUFDTiw4QkFBZ0Q7WUFDNUMsNkZBR2tCO1lBQ3RCLGlCQUFNLEVBQUEsRUFBQTs7WUFqQnNCLGVBQThCO1lBQTlCLHVEQUE4QjtZQUk5QixlQUF1QjtZQUF2Qix5Q0FBdUI7WUFFN0MsZUFBNEM7WUFBNUMscUVBQTRDO1lBTzVCLGVBQWdCO1lBQWhCLHFDQUFnQjs7O1NEVi9CLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBSmhDLFNBQVM7MkJBQ0ksbUJBQW1CO2dCQUlwQixTQUFTO2tCQUFqQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uRGF0YVNvdXJjZSwgQnV0dG9uSW50ZXJmYWNlLCBQYWdpbmF0aW9uRGF0YVNvdXJjZSwgU2VsZWN0aW9uRGF0YVNvdXJjZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QnVsa0FjdGlvbkRhdGFTb3VyY2V9IGZyb20gJy4uLy4uL2J1bGstYWN0aW9uLW1lbnUvYnVsay1hY3Rpb24tbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHtUYWJsZUNvbmZpZ30gZnJvbSBcIi4uL3RhYmxlLm1vZGVsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS10YWJsZS1mb290ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAndGFibGUtZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVGb290ZXJDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHNlbGVjdGlvbjogU2VsZWN0aW9uRGF0YVNvdXJjZTtcbiAgICBASW5wdXQoKSBidWxrQWN0aW9uczogQnVsa0FjdGlvbkRhdGFTb3VyY2U7XG4gICAgQElucHV0KCkgcGFnaW5hdGlvbjogUGFnaW5hdGlvbkRhdGFTb3VyY2U7XG4gICAgQElucHV0KCkgdGFibGVBY3Rpb25zOiBBY3Rpb25EYXRhU291cmNlO1xuICAgIEBJbnB1dCgpIHBhZ2luYXRpb25UeXBlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29uZmlnOiBUYWJsZUNvbmZpZztcblxuXG4gICAgaXNQYWdpbmF0aW9uRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvblR5cGUgPT09ICdwYWdpbmF0aW9uJztcbiAgICB9XG5cbiAgICBnZXRMb2FkTW9yZUJ1dHRvbigpOiBCdXR0b25JbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2xhc3M6ICdsb2FkLW1vcmUnLFxuICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfTE9BRF9NT1JFJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2FkTW9yZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICB9XG5cbiAgICBhbGxMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZz8uYWxsTG9hZGVkKCk7XG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48IS0tIFN0YXJ0IExpc3QgVmlldyBUYWJsZSBGb290ZXIgU2VjdGlvbiAtLT5cblxuPGRpdiBjbGFzcz1cImxpc3Qtdmlldy10YWJsZWFjdGlvbnMgdGFibGUtZm9vdGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XG4gICAgICAgICAgPHNjcm0tYnVsay1hY3Rpb24tbWVudSAqbmdJZj1cInNlbGVjdGlvbiAmJiBidWxrQWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2VsZWN0aW9uU291cmNlXT1cInNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYWN0aW9uU291cmNlXT1cImJ1bGtBY3Rpb25zXCI+XG4gICAgICAgICAgPC9zY3JtLWJ1bGstYWN0aW9uLW1lbnU+XG4gICAgICAgICAgPHNjcm0tYWN0aW9uLWdyb3VwLW1lbnUgW2NvbmZpZ109XCJ0YWJsZUFjdGlvbnNcIiBidXR0b25DbGFzcz1cImJ0biB0YWJsZS1hY3Rpb24tYnV0dG9uXCI+PC9zY3JtLWFjdGlvbi1ncm91cC1tZW51PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiIWlzUGFnaW5hdGlvbkVuYWJsZWQoKSAmJiAhYWxsTG9hZGVkKClcIlxuICAgICAgICAgICBjbGFzcz1cIm14LTAgcGwtMCBsb2FkLW1vcmUtc3R5bGVcIj5cbiAgICAgICAgICA8c2NybS1sb2FkLW1vcmVcbiAgICAgICAgICAgICAgW2xvYWRNb3JlQnV0dG9uXT1cImdldExvYWRNb3JlQnV0dG9uKClcIj5cbiAgICAgICAgICA8L3Njcm0tbG9hZC1tb3JlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibXgtMCBwbC0wIHRhYmxlLXBhZ2luYXRpb24td3JhcHBlclwiPlxuICAgICAgICAgIDxzY3JtLXBhZ2luYXRpb24gKm5nSWY9XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthbGxvd1BhZ2luYXRpb25dPVwiaXNQYWdpbmF0aW9uRW5hYmxlZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdGF0ZV09XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgICAgPC9zY3JtLXBhZ2luYXRpb24+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSBFbmQgTGlzdCBWaWV3IFRhYmxlIEZvb3RlciBTZWN0aW9uIC0tPlxuIl19