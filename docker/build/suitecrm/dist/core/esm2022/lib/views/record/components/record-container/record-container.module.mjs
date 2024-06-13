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
import { RecordContainerComponent } from './record-container.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { WidgetPanelModule } from '../../../../components/widget-panel/widget-panel.module';
import { SubpanelContainerModule } from '../../../../containers/subpanel/components/subpanel-container/subpanel-container.module';
import { SidebarWidgetModule } from '../../../../containers/sidebar-widget/components/sidebar-widget/sidebar-widget.module';
import { TopWidgetModule } from '../../../../containers/top-widget/components/top-widget/top-widget.module';
import { RecordContentModule } from '../../../../components/record-content/record-content.module';
import { RecordContentSkeletonModule } from '../../../../components/record-content-skeleton/record-content-skeleton.module';
import * as i0 from "@angular/core";
class RecordContainerModule {
    static { this.ɵfac = function RecordContainerModule_Factory(t) { return new (t || RecordContainerModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RecordContainerModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            WidgetPanelModule,
            AngularSvgIconModule,
            SubpanelContainerModule,
            RecordContentModule,
            TopWidgetModule,
            SidebarWidgetModule,
            RecordContentSkeletonModule] }); }
}
export { RecordContainerModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordContainerModule, [{
        type: NgModule,
        args: [{
                declarations: [RecordContainerComponent],
                exports: [RecordContainerComponent],
                imports: [
                    CommonModule,
                    WidgetPanelModule,
                    AngularSvgIconModule,
                    SubpanelContainerModule,
                    RecordContentModule,
                    TopWidgetModule,
                    SidebarWidgetModule,
                    RecordContentSkeletonModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RecordContainerModule, { declarations: [RecordContainerComponent], imports: [CommonModule,
        WidgetPanelModule,
        AngularSvgIconModule,
        SubpanelContainerModule,
        RecordContentModule,
        TopWidgetModule,
        SidebarWidgetModule,
        RecordContentSkeletonModule], exports: [RecordContainerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNvbnRhaW5lci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRhaW5lci9yZWNvcmQtY29udGFpbmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDMUYsT0FBTyxFQUNILHVCQUF1QixFQUMxQixNQUFNLHlGQUF5RixDQUFDO0FBQ2pHLE9BQU8sRUFDSCxtQkFBbUIsRUFDdEIsTUFBTSx1RkFBdUYsQ0FBQztBQUMvRixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkVBQTJFLENBQUM7QUFDMUcsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDaEcsT0FBTyxFQUNILDJCQUEyQixFQUM5QixNQUFNLCtFQUErRSxDQUFDOztBQUV2RixNQWNhLHFCQUFxQjtzRkFBckIscUJBQXFCO21FQUFyQixxQkFBcUI7dUVBVjFCLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsb0JBQW9CO1lBQ3BCLHVCQUF1QjtZQUN2QixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQiwyQkFBMkI7O1NBR3RCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBZGpDLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ25DLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQix1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLDJCQUEyQjtpQkFDOUI7YUFDSjs7d0ZBQ1kscUJBQXFCLG1CQWJmLHdCQUF3QixhQUduQyxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsMkJBQTJCLGFBVHJCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7UmVjb3JkQ29udGFpbmVyQ29tcG9uZW50fSBmcm9tICcuL3JlY29yZC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7QW5ndWxhclN2Z0ljb25Nb2R1bGV9IGZyb20gJ2FuZ3VsYXItc3ZnLWljb24nO1xuaW1wb3J0IHtXaWRnZXRQYW5lbE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy93aWRnZXQtcGFuZWwvd2lkZ2V0LXBhbmVsLm1vZHVsZSc7XG5pbXBvcnQge1xuICAgIFN1YnBhbmVsQ29udGFpbmVyTW9kdWxlXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvc3VicGFuZWwvY29tcG9uZW50cy9zdWJwYW5lbC1jb250YWluZXIvc3VicGFuZWwtY29udGFpbmVyLm1vZHVsZSc7XG5pbXBvcnQge1xuICAgIFNpZGViYXJXaWRnZXRNb2R1bGVcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL3NpZGViYXItd2lkZ2V0L3NpZGViYXItd2lkZ2V0Lm1vZHVsZSc7XG5pbXBvcnQge1RvcFdpZGdldE1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy90b3Atd2lkZ2V0L2NvbXBvbmVudHMvdG9wLXdpZGdldC90b3Atd2lkZ2V0Lm1vZHVsZSc7XG5pbXBvcnQge1JlY29yZENvbnRlbnRNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRlbnQvcmVjb3JkLWNvbnRlbnQubW9kdWxlJztcbmltcG9ydCB7XG4gICAgUmVjb3JkQ29udGVudFNrZWxldG9uTW9kdWxlXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRlbnQtc2tlbGV0b24vcmVjb3JkLWNvbnRlbnQtc2tlbGV0b24ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtSZWNvcmRDb250YWluZXJDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtSZWNvcmRDb250YWluZXJDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBXaWRnZXRQYW5lbE1vZHVsZSxcbiAgICAgICAgQW5ndWxhclN2Z0ljb25Nb2R1bGUsXG4gICAgICAgIFN1YnBhbmVsQ29udGFpbmVyTW9kdWxlLFxuICAgICAgICBSZWNvcmRDb250ZW50TW9kdWxlLFxuICAgICAgICBUb3BXaWRnZXRNb2R1bGUsXG4gICAgICAgIFNpZGViYXJXaWRnZXRNb2R1bGUsXG4gICAgICAgIFJlY29yZENvbnRlbnRTa2VsZXRvbk1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkQ29udGFpbmVyTW9kdWxlIHtcbn1cbiJdfQ==