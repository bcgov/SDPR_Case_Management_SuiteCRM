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
import { RecordComponent } from './record.component';
import { FieldModule } from '../../../../fields/field.module';
import { RecordContainerModule } from '../record-container/record-container.module';
import { RecordHeaderModule } from '../record-header/record-header.module';
import { StatusBarModule } from '../../../../components/status-bar/status-bar.module';
import { SubpanelModule } from '../../../../containers/subpanel/components/subpanel/subpanel.module';
import * as i0 from "@angular/core";
class RecordModule {
    static { this.ɵfac = function RecordModule_Factory(t) { return new (t || RecordModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RecordModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FieldModule,
            RecordContainerModule,
            RecordHeaderModule,
            StatusBarModule,
            SubpanelModule] }); }
}
export { RecordModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordModule, [{
        type: NgModule,
        args: [{
                declarations: [RecordComponent],
                exports: [RecordComponent],
                imports: [
                    CommonModule,
                    FieldModule,
                    RecordContainerModule,
                    RecordHeaderModule,
                    StatusBarModule,
                    SubpanelModule
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RecordModule, { declarations: [RecordComponent], imports: [CommonModule,
        FieldModule,
        RecordContainerModule,
        RecordHeaderModule,
        StatusBarModule,
        SubpanelModule], exports: [RecordComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvY29tcG9uZW50cy9yZWNvcmQtdmlldy9yZWNvcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQzVELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUNwRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUVBQXFFLENBQUM7O0FBRW5HLE1BWWEsWUFBWTs2RUFBWixZQUFZO21FQUFaLFlBQVk7dUVBUmpCLFlBQVk7WUFDWixXQUFXO1lBQ1gscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsY0FBYzs7U0FHVCxZQUFZO3VGQUFaLFlBQVk7Y0FaeEIsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUMxQixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixXQUFXO29CQUNYLHFCQUFxQjtvQkFDckIsa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLGNBQWM7aUJBQ2pCO2FBQ0o7O3dGQUNZLFlBQVksbUJBWE4sZUFBZSxhQUcxQixZQUFZO1FBQ1osV0FBVztRQUNYLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGNBQWMsYUFQUixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtSZWNvcmRDb21wb25lbnR9IGZyb20gJy4vcmVjb3JkLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZpZWxkTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvZmllbGQubW9kdWxlJztcbmltcG9ydCB7UmVjb3JkQ29udGFpbmVyTW9kdWxlfSBmcm9tICcuLi9yZWNvcmQtY29udGFpbmVyL3JlY29yZC1jb250YWluZXIubW9kdWxlJztcbmltcG9ydCB7UmVjb3JkSGVhZGVyTW9kdWxlfSBmcm9tICcuLi9yZWNvcmQtaGVhZGVyL3JlY29yZC1oZWFkZXIubW9kdWxlJztcbmltcG9ydCB7U3RhdHVzQmFyTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3N0YXR1cy1iYXIvc3RhdHVzLWJhci5tb2R1bGUnO1xuaW1wb3J0IHtTdWJwYW5lbE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9zdWJwYW5lbC9jb21wb25lbnRzL3N1YnBhbmVsL3N1YnBhbmVsLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbUmVjb3JkQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbUmVjb3JkQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRmllbGRNb2R1bGUsXG4gICAgICAgIFJlY29yZENvbnRhaW5lck1vZHVsZSxcbiAgICAgICAgUmVjb3JkSGVhZGVyTW9kdWxlLFxuICAgICAgICBTdGF0dXNCYXJNb2R1bGUsXG4gICAgICAgIFN1YnBhbmVsTW9kdWxlXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkTW9kdWxlIHtcbn1cbiJdfQ==