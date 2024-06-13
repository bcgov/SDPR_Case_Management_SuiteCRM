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
import { FieldModule } from '../../../../fields/field.module';
import { WidgetPanelModule } from '../../../../components/widget-panel/widget-panel.module';
import { LabelModule } from '../../../../components/label/label.module';
import { RecordThreadSidebarWidgetComponent } from './record-thread-sidebar-widget.component';
import { RecordThreadModule } from '../../../record-thread/components/record-thread/record-thread.module';
import { RecordThreadItemModule } from '../../../record-thread/components/record-thread-item/record-thread-item.module';
import * as i0 from "@angular/core";
class RecordThreadSidebarWidgetModule {
    static { this.ɵfac = function RecordThreadSidebarWidgetModule_Factory(t) { return new (t || RecordThreadSidebarWidgetModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RecordThreadSidebarWidgetModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FieldModule,
            WidgetPanelModule,
            LabelModule,
            RecordThreadModule,
            RecordThreadItemModule] }); }
}
export { RecordThreadSidebarWidgetModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadSidebarWidgetModule, [{
        type: NgModule,
        args: [{
                declarations: [RecordThreadSidebarWidgetComponent],
                exports: [
                    RecordThreadSidebarWidgetComponent
                ],
                imports: [
                    CommonModule,
                    FieldModule,
                    WidgetPanelModule,
                    LabelModule,
                    RecordThreadModule,
                    RecordThreadItemModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RecordThreadSidebarWidgetModule, { declarations: [RecordThreadSidebarWidgetComponent], imports: [CommonModule,
        FieldModule,
        WidgetPanelModule,
        LabelModule,
        RecordThreadModule,
        RecordThreadItemModule], exports: [RecordThreadSidebarWidgetComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL3JlY29yZC10aHJlYWQtc2lkZWJhci13aWRnZXQvcmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUMxRixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGtDQUFrQyxFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDNUYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sc0VBQXNFLENBQUM7QUFDeEcsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sZ0ZBQWdGLENBQUM7O0FBRXRILE1BY2EsK0JBQStCO2dHQUEvQiwrQkFBK0I7bUVBQS9CLCtCQUErQjt1RUFScEMsWUFBWTtZQUNaLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsV0FBVztZQUNYLGtCQUFrQjtZQUNsQixzQkFBc0I7O1NBR2pCLCtCQUErQjt1RkFBL0IsK0JBQStCO2NBZDNDLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDbEQsT0FBTyxFQUFFO29CQUNMLGtDQUFrQztpQkFDckM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxpQkFBaUI7b0JBQ2pCLFdBQVc7b0JBQ1gsa0JBQWtCO29CQUNsQixzQkFBc0I7aUJBQ3pCO2FBQ0o7O3dGQUNZLCtCQUErQixtQkFiekIsa0NBQWtDLGFBSzdDLFlBQVk7UUFDWixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsc0JBQXNCLGFBUnRCLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7RmllbGRNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9maWVsZC5tb2R1bGUnO1xuaW1wb3J0IHtXaWRnZXRQYW5lbE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy93aWRnZXQtcGFuZWwvd2lkZ2V0LXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQge0xhYmVsTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xhYmVsL2xhYmVsLm1vZHVsZSc7XG5pbXBvcnQge1JlY29yZFRocmVhZFNpZGViYXJXaWRnZXRDb21wb25lbnR9IGZyb20gJy4vcmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRNb2R1bGV9IGZyb20gJy4uLy4uLy4uL3JlY29yZC10aHJlYWQvY29tcG9uZW50cy9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQubW9kdWxlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbU1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vcmVjb3JkLXRocmVhZC9jb21wb25lbnRzL3JlY29yZC10aHJlYWQtaXRlbS9yZWNvcmQtdGhyZWFkLWl0ZW0ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtSZWNvcmRUaHJlYWRTaWRlYmFyV2lkZ2V0Q29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFJlY29yZFRocmVhZFNpZGViYXJXaWRnZXRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGaWVsZE1vZHVsZSxcbiAgICAgICAgV2lkZ2V0UGFuZWxNb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlLFxuICAgICAgICBSZWNvcmRUaHJlYWRNb2R1bGUsXG4gICAgICAgIFJlY29yZFRocmVhZEl0ZW1Nb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZFRocmVhZFNpZGViYXJXaWRnZXRNb2R1bGUge1xufVxuIl19