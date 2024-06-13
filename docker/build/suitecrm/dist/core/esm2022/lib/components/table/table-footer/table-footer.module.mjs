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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFooterComponent } from './table-footer.component';
import { PaginationModule } from '../../pagination/pagination.module';
import { BulkActionMenuModule } from '../../bulk-action-menu/bulk-action-menu.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LoadMoreModule } from "../../load-more/load-more.module";
import { ActionGroupMenuModule } from "../../action-group-menu/action-group-menu.module";
import * as i0 from "@angular/core";
class TableFooterModule {
    static { this.ɵfac = function TableFooterModule_Factory(t) { return new (t || TableFooterModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TableFooterModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            PaginationModule,
            BulkActionMenuModule,
            AngularSvgIconModule,
            LoadMoreModule,
            ActionGroupMenuModule] }); }
}
export { TableFooterModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableFooterModule, [{
        type: NgModule,
        args: [{
                declarations: [TableFooterComponent],
                exports: [TableFooterComponent],
                imports: [
                    CommonModule,
                    PaginationModule,
                    BulkActionMenuModule,
                    AngularSvgIconModule,
                    LoadMoreModule,
                    ActionGroupMenuModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TableFooterModule, { declarations: [TableFooterComponent], imports: [CommonModule,
        PaginationModule,
        BulkActionMenuModule,
        AngularSvgIconModule,
        LoadMoreModule,
        ActionGroupMenuModule], exports: [TableFooterComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZm9vdGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWZvb3Rlci90YWJsZS1mb290ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUU5RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNwRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDaEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sa0RBQWtELENBQUM7O0FBRXZGLE1BWWEsaUJBQWlCO2tGQUFqQixpQkFBaUI7bUVBQWpCLGlCQUFpQjt1RUFSdEIsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLGNBQWM7WUFDZCxxQkFBcUI7O1NBR2hCLGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBWjdCLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9CLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QscUJBQXFCO2lCQUN4QjthQUNKOzt3RkFDWSxpQkFBaUIsbUJBWFgsb0JBQW9CLGFBRy9CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2QscUJBQXFCLGFBUGYsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1RhYmxlRm9vdGVyQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlLWZvb3Rlci5jb21wb25lbnQnO1xuXG5pbXBvcnQge1BhZ2luYXRpb25Nb2R1bGV9IGZyb20gJy4uLy4uL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHtCdWxrQWN0aW9uTWVudU1vZHVsZX0gZnJvbSAnLi4vLi4vYnVsay1hY3Rpb24tbWVudS9idWxrLWFjdGlvbi1tZW51Lm1vZHVsZSc7XG5pbXBvcnQge0FuZ3VsYXJTdmdJY29uTW9kdWxlfSBmcm9tICdhbmd1bGFyLXN2Zy1pY29uJztcbmltcG9ydCB7TG9hZE1vcmVNb2R1bGV9IGZyb20gXCIuLi8uLi9sb2FkLW1vcmUvbG9hZC1tb3JlLm1vZHVsZVwiO1xuaW1wb3J0IHtBY3Rpb25Hcm91cE1lbnVNb2R1bGV9IGZyb20gXCIuLi8uLi9hY3Rpb24tZ3JvdXAtbWVudS9hY3Rpb24tZ3JvdXAtbWVudS5tb2R1bGVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtUYWJsZUZvb3RlckNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1RhYmxlRm9vdGVyQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUGFnaW5hdGlvbk1vZHVsZSxcbiAgICAgICAgQnVsa0FjdGlvbk1lbnVNb2R1bGUsXG4gICAgICAgIEFuZ3VsYXJTdmdJY29uTW9kdWxlLFxuICAgICAgICBMb2FkTW9yZU1vZHVsZSxcbiAgICAgICAgQWN0aW9uR3JvdXBNZW51TW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUZvb3Rlck1vZHVsZSB7XG59XG4iXX0=