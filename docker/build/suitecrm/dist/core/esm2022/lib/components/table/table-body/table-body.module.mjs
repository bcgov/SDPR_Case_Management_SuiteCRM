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
import { TableBodyComponent } from './table-body.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CdkTableModule } from '@angular/cdk/table';
import { FieldModule } from '../../../fields/field.module';
import { LoadingSpinnerModule } from '../../loading-spinner/loading-spinner.module';
import { SortButtonModule } from '../../sort-button/sort-button.module';
import { LabelModule } from '../../label/label.module';
import { LineActionModule } from '../../line-action-menu/line-action-menu.module';
import { RecordDetailsPopupButtonModule } from "../../popups/components/record-details-popup-button/record-details-popup-button.module";
import * as i0 from "@angular/core";
class TableBodyModule {
    static { this.ɵfac = function TableBodyModule_Factory(t) { return new (t || TableBodyModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TableBodyModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            AngularSvgIconModule,
            CdkTableModule,
            FieldModule,
            SortButtonModule,
            LineActionModule,
            LoadingSpinnerModule,
            LabelModule,
            RecordDetailsPopupButtonModule] }); }
}
export { TableBodyModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableBodyModule, [{
        type: NgModule,
        args: [{
                declarations: [TableBodyComponent],
                exports: [TableBodyComponent],
                imports: [
                    CommonModule,
                    AngularSvgIconModule,
                    CdkTableModule,
                    FieldModule,
                    SortButtonModule,
                    LineActionModule,
                    LoadingSpinnerModule,
                    LabelModule,
                    RecordDetailsPopupButtonModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TableBodyModule, { declarations: [TableBodyComponent], imports: [CommonModule,
        AngularSvgIconModule,
        CdkTableModule,
        FieldModule,
        SortButtonModule,
        LineActionModule,
        LoadingSpinnerModule,
        LabelModule,
        RecordDetailsPopupButtonModule], exports: [TableBodyComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYm9keS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS1ib2R5L3RhYmxlLWJvZHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNoRixPQUFPLEVBQ0gsOEJBQThCLEVBQ2pDLE1BQU0sd0ZBQXdGLENBQUM7O0FBRWhHLE1BZWEsZUFBZTtnRkFBZixlQUFlO21FQUFmLGVBQWU7dUVBWHBCLFlBQVk7WUFDWixvQkFBb0I7WUFDcEIsY0FBYztZQUNkLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixXQUFXO1lBQ1gsOEJBQThCOztTQUd6QixlQUFlO3VGQUFmLGVBQWU7Y0FmM0IsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDN0IsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQixjQUFjO29CQUNkLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIsV0FBVztvQkFDWCw4QkFBOEI7aUJBQ2pDO2FBQ0o7O3dGQUNZLGVBQWUsbUJBZFQsa0JBQWtCLGFBRzdCLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixXQUFXO1FBQ1gsOEJBQThCLGFBVnhCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtUYWJsZUJvZHlDb21wb25lbnR9IGZyb20gJy4vdGFibGUtYm9keS5jb21wb25lbnQnO1xuaW1wb3J0IHtBbmd1bGFyU3ZnSWNvbk1vZHVsZX0gZnJvbSAnYW5ndWxhci1zdmctaWNvbic7XG5pbXBvcnQge0Nka1RhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHtGaWVsZE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vZmllbGRzL2ZpZWxkLm1vZHVsZSc7XG5pbXBvcnQge0xvYWRpbmdTcGlubmVyTW9kdWxlfSBmcm9tICcuLi8uLi9sb2FkaW5nLXNwaW5uZXIvbG9hZGluZy1zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQge1NvcnRCdXR0b25Nb2R1bGV9IGZyb20gJy4uLy4uL3NvcnQtYnV0dG9uL3NvcnQtYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQge0xhYmVsTW9kdWxlfSBmcm9tICcuLi8uLi9sYWJlbC9sYWJlbC5tb2R1bGUnO1xuaW1wb3J0IHtMaW5lQWN0aW9uTW9kdWxlfSBmcm9tICcuLi8uLi9saW5lLWFjdGlvbi1tZW51L2xpbmUtYWN0aW9uLW1lbnUubW9kdWxlJztcbmltcG9ydCB7XG4gICAgUmVjb3JkRGV0YWlsc1BvcHVwQnV0dG9uTW9kdWxlXG59IGZyb20gXCIuLi8uLi9wb3B1cHMvY29tcG9uZW50cy9yZWNvcmQtZGV0YWlscy1wb3B1cC1idXR0b24vcmVjb3JkLWRldGFpbHMtcG9wdXAtYnV0dG9uLm1vZHVsZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1RhYmxlQm9keUNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1RhYmxlQm9keUNvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEFuZ3VsYXJTdmdJY29uTW9kdWxlLFxuICAgICAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICAgICAgRmllbGRNb2R1bGUsXG4gICAgICAgIFNvcnRCdXR0b25Nb2R1bGUsXG4gICAgICAgIExpbmVBY3Rpb25Nb2R1bGUsXG4gICAgICAgIExvYWRpbmdTcGlubmVyTW9kdWxlLFxuICAgICAgICBMYWJlbE1vZHVsZSxcbiAgICAgICAgUmVjb3JkRGV0YWlsc1BvcHVwQnV0dG9uTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUJvZHlNb2R1bGUge1xufVxuIl19