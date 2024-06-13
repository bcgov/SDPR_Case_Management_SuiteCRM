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
import * as i2 from "./table-header/table-header.component";
import * as i3 from "./table-body/table-body.component";
import * as i4 from "./table-footer/table-footer.component";
function TableComponent_scrm_table_header_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-table-header", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("bulkActions", ctx_r0.config.bulkActions)("paginationType", ctx_r0.getPaginationType())("pagination", ctx_r0.config.pagination)("selection", ctx_r0.config.selection)("tableActions", ctx_r0.config == null ? null : ctx_r0.config.tableActions);
} }
function TableComponent_scrm_table_footer_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-table-footer", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("bulkActions", ctx_r1.config.bulkActions)("paginationType", ctx_r1.getPaginationType())("pagination", ctx_r1.config.pagination)("selection", ctx_r1.config.selection)("tableActions", ctx_r1.config == null ? null : ctx_r1.config.tableActions)("config", ctx_r1.config);
} }
class TableComponent {
    getPaginationType() {
        if (!this.config?.loadMore) {
            return 'pagination';
        }
        if (this.config?.paginationType !== 'load-more') {
            return 'pagination';
        }
        return this.config.paginationType;
    }
    showHeader() {
        return this.config.showHeader;
    }
    showFooter() {
        return this.config.showFooter;
    }
    static { this.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableComponent, selectors: [["scrm-table"]], inputs: { config: "config" }, decls: 4, vars: 6, consts: [[3, "bulkActions", "paginationType", "pagination", "selection", "tableActions", 4, "ngIf"], [3, "config"], [3, "bulkActions", "paginationType", "pagination", "selection", "tableActions", "config", 4, "ngIf"], [3, "bulkActions", "paginationType", "pagination", "selection", "tableActions"], [3, "bulkActions", "paginationType", "pagination", "selection", "tableActions", "config"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, TableComponent_scrm_table_header_1_Template, 1, 5, "scrm-table-header", 0);
            i0.ɵɵelement(2, "scrm-table-body", 1);
            i0.ɵɵtemplate(3, TableComponent_scrm_table_footer_3_Template, 1, 6, "scrm-table-footer", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.config && ctx.config.klass || "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showHeader());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("config", ctx.config);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showFooter());
        } }, dependencies: [i1.NgIf, i2.TableHeaderComponent, i3.TableBodyComponent, i4.TableFooterComponent], encapsulation: 2 }); }
}
export { TableComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableComponent, [{
        type: Component,
        args: [{ selector: 'scrm-table', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"{{ (config && config.klass) || ''}}\">\n    <scrm-table-header *ngIf=\"showHeader()\"\n                       [bulkActions]=\"config.bulkActions\"\n                       [paginationType]=\"getPaginationType()\"\n                       [pagination]=\"config.pagination\"\n                       [selection]=\"config.selection\"\n                       [tableActions]=\"config?.tableActions\"\n    >\n    </scrm-table-header>\n\n\n    <scrm-table-body [config]=\"config\"></scrm-table-body>\n\n\n    <scrm-table-footer *ngIf=\"showFooter()\"\n                       [bulkActions]=\"config.bulkActions\"\n                       [paginationType]=\"getPaginationType()\"\n                       [pagination]=\"config.pagination\"\n                       [selection]=\"config.selection\"\n                       [tableActions]=\"config?.tableActions\"\n                       [config]=\"config\"\n    >\n    </scrm-table-footer>\n</div>\n\n" }]
    }], null, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDRTNDLHVDQU9vQjs7O0lBTkQsdURBQWtDLDhDQUFBLHdDQUFBLHNDQUFBLDJFQUFBOzs7SUFZckQsdUNBUW9COzs7SUFQRCx1REFBa0MsOENBQUEsd0NBQUEsc0NBQUEsMkVBQUEseUJBQUE7O0FEYnpELE1BS2EsY0FBYztJQUd2QixpQkFBaUI7UUFFYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUU7WUFDeEIsT0FBTyxZQUFZLENBQUM7U0FDdkI7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxLQUFLLFdBQVcsRUFBQztZQUM1QyxPQUFPLFlBQVksQ0FBQztTQUN2QjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFFdEMsQ0FBQztJQUdELFVBQVU7UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxVQUFVO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNsQyxDQUFDOytFQXhCUSxjQUFjO29FQUFkLGNBQWM7WUNQM0IsMkJBQWlEO1lBQzdDLDJGQU9vQjtZQUdwQixxQ0FBcUQ7WUFHckQsMkZBUW9CO1lBQ3hCLGlCQUFNOztZQXZCRCxtREFBMkM7WUFDeEIsZUFBa0I7WUFBbEIsdUNBQWtCO1lBVXJCLGVBQWlCO1lBQWpCLG1DQUFpQjtZQUdkLGVBQWtCO1lBQWxCLHVDQUFrQjs7O1NEUDdCLGNBQWM7dUZBQWQsY0FBYztjQUwxQixTQUFTOzJCQUNJLFlBQVk7Z0JBS2IsTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZUNvbmZpZ30gZnJvbSAnLi90YWJsZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS10YWJsZScsXG4gICAgdGVtcGxhdGVVcmw6ICd0YWJsZS5jb21wb25lbnQuaHRtbCcsXG5cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGNvbmZpZzogVGFibGVDb25maWc7XG5cbiAgICBnZXRQYWdpbmF0aW9uVHlwZSgpe1xuXG4gICAgICAgIGlmICghdGhpcy5jb25maWc/LmxvYWRNb3JlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3BhZ2luYXRpb24nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnPy5wYWdpbmF0aW9uVHlwZSAhPT0gJ2xvYWQtbW9yZScpe1xuICAgICAgICAgICAgcmV0dXJuICdwYWdpbmF0aW9uJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uVHlwZTtcblxuICAgIH1cblxuXG4gICAgc2hvd0hlYWRlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnNob3dIZWFkZXI7XG4gICAgfVxuXG4gICAgc2hvd0Zvb3RlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnNob3dGb290ZXI7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cInt7IChjb25maWcgJiYgY29uZmlnLmtsYXNzKSB8fCAnJ319XCI+XG4gICAgPHNjcm0tdGFibGUtaGVhZGVyICpuZ0lmPVwic2hvd0hlYWRlcigpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2J1bGtBY3Rpb25zXT1cImNvbmZpZy5idWxrQWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFtwYWdpbmF0aW9uVHlwZV09XCJnZXRQYWdpbmF0aW9uVHlwZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3BhZ2luYXRpb25dPVwiY29uZmlnLnBhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICBbc2VsZWN0aW9uXT1cImNvbmZpZy5zZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICBbdGFibGVBY3Rpb25zXT1cImNvbmZpZz8udGFibGVBY3Rpb25zXCJcbiAgICA+XG4gICAgPC9zY3JtLXRhYmxlLWhlYWRlcj5cblxuXG4gICAgPHNjcm0tdGFibGUtYm9keSBbY29uZmlnXT1cImNvbmZpZ1wiPjwvc2NybS10YWJsZS1ib2R5PlxuXG5cbiAgICA8c2NybS10YWJsZS1mb290ZXIgKm5nSWY9XCJzaG93Rm9vdGVyKClcIlxuICAgICAgICAgICAgICAgICAgICAgICBbYnVsa0FjdGlvbnNdPVwiY29uZmlnLmJ1bGtBY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3BhZ2luYXRpb25UeXBlXT1cImdldFBhZ2luYXRpb25UeXBlKClcIlxuICAgICAgICAgICAgICAgICAgICAgICBbcGFnaW5hdGlvbl09XCJjb25maWcucGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtzZWxlY3Rpb25dPVwiY29uZmlnLnNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgIFt0YWJsZUFjdGlvbnNdPVwiY29uZmlnPy50YWJsZUFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImNvbmZpZ1wiXG4gICAgPlxuICAgIDwvc2NybS10YWJsZS1mb290ZXI+XG48L2Rpdj5cblxuIl19