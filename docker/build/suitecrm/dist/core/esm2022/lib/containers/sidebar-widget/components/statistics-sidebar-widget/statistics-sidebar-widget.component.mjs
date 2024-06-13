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
import { LanguageStore } from '../../../../store/language/language.store';
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../components/widget-panel/widget-panel.component";
import * as i3 from "../../../../components/grid-widget/grid-widget.component";
class StatisticsSidebarWidgetComponent extends BaseWidgetComponent {
    constructor(language) {
        super();
        this.language = language;
        this.subs = [];
    }
    ngOnInit() {
        const options = this.config.options || {};
        this.options = options.sidebarStatistic || null;
        if (this.context$) {
            this.subs.push(this.context$.subscribe((context) => {
                this.context = context;
            }));
        }
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getHeaderLabel() {
        return this.getLabel(this.config.labelKey) || '';
    }
    getLabel(key) {
        const context = this.context || {};
        const module = context.module || '';
        return this.language.getFieldLabel(key, module);
    }
    getGridConfig() {
        return {
            rowClass: 'statistics-sidebar-widget-row',
            columnClass: 'statistics-sidebar-widget-col',
            layout: this.options,
            widgetConfig: { reload$: this.config.reload$ },
            queryArgs: {
                module: this.context.module,
                context: this.context,
                params: {},
            },
        };
    }
    static { this.ɵfac = function StatisticsSidebarWidgetComponent_Factory(t) { return new (t || StatisticsSidebarWidgetComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatisticsSidebarWidgetComponent, selectors: [["scrm-statistics-sidebar-widget"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [[3, "title"], ["widget-body", "", 1, "p-3"], [3, "config"]], template: function StatisticsSidebarWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-widget-panel", 0)(1, "div", 1);
            i0.ɵɵelement(2, "scrm-grid-widget", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.getHeaderLabel());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("config", ctx.getGridConfig());
        } }, dependencies: [i2.WidgetPanelComponent, i3.GridWidgetComponent], encapsulation: 2 }); }
}
export { StatisticsSidebarWidgetComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatisticsSidebarWidgetComponent, [{
        type: Component,
        args: [{ selector: 'scrm-statistics-sidebar-widget', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-widget-panel [title]=\"getHeaderLabel()\">\n    <div widget-body class=\"p-3\">\n\n        <scrm-grid-widget [config]=\"getGridConfig()\"></scrm-grid-widget>\n\n    </div>\n</scrm-widget-panel>\n" }]
    }], function () { return [{ type: i1.LanguageStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL3N0YXRpc3RpY3Mtc2lkZWJhci13aWRnZXQvc3RhdGlzdGljcy1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL3N0YXRpc3RpY3Mtc2lkZWJhci13aWRnZXQvc3RhdGlzdGljcy1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFHM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQUd2RSxNQUthLGdDQUFpQyxTQUFRLG1CQUFtQjtJQU9yRSxZQUFzQixRQUF1QjtRQUV6QyxLQUFLLEVBQUUsQ0FBQztRQUZVLGFBQVEsR0FBUixRQUFRLENBQWU7UUFGbkMsU0FBSSxHQUFtQixFQUFFLENBQUM7SUFLcEMsQ0FBQztJQUVELFFBQVE7UUFFSixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDO1FBRWhELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBb0IsRUFBRSxFQUFFO2dCQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBaUIsQ0FBQztRQUNsRCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUVwQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU87WUFDSCxRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3BCLFlBQVksRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBbUI7WUFDOUQsU0FBUyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07Z0JBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDckIsTUFBTSxFQUFFLEVBQUU7YUFDVTtTQUNQLENBQUM7SUFDMUIsQ0FBQztpR0FuRFEsZ0NBQWdDO29FQUFoQyxnQ0FBZ0M7WUNYN0MsNENBQThDLGFBQUE7WUFHdEMsc0NBQWdFO1lBRXBFLGlCQUFNLEVBQUE7O1lBTFMsNENBQTBCO1lBR25CLGVBQTBCO1lBQTFCLDRDQUEwQjs7O1NEUXZDLGdDQUFnQzt1RkFBaEMsZ0NBQWdDO2NBTDVDLFNBQVM7MkJBQ0ksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdGF0aXN0aWNXaWRnZXRPcHRpb25zLCBWaWV3Q29udGV4dCwgV2lkZ2V0TWV0YWRhdGF9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7QmFzZVdpZGdldENvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vd2lkZ2V0cy9iYXNlLXdpZGdldC5tb2RlbCc7XG5pbXBvcnQge0dyaWRXaWRnZXRDb25maWcsIFN0YXRpc3RpY3NRdWVyeUFyZ3N9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZ3JpZC13aWRnZXQvZ3JpZC13aWRnZXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXN0YXRpc3RpY3Mtc2lkZWJhci13aWRnZXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zdGF0aXN0aWNzLXNpZGViYXItd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRpc3RpY3NTaWRlYmFyV2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXG4gICAgb3B0aW9uczogU3RhdGlzdGljV2lkZ2V0T3B0aW9ucztcblxuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge307XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMuc2lkZWJhclN0YXRpc3RpYyB8fCBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQkKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmNvbnRleHQkLnN1YnNjcmliZSgoY29udGV4dDogVmlld0NvbnRleHQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgZ2V0SGVhZGVyTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGFiZWwodGhpcy5jb25maWcubGFiZWxLZXkpIHx8ICcnO1xuICAgIH1cblxuICAgIGdldExhYmVsKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dCB8fCB7fSBhcyBWaWV3Q29udGV4dDtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gY29udGV4dC5tb2R1bGUgfHwgJyc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2UuZ2V0RmllbGRMYWJlbChrZXksIG1vZHVsZSk7XG4gICAgfVxuXG4gICAgZ2V0R3JpZENvbmZpZygpOiBHcmlkV2lkZ2V0Q29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvd0NsYXNzOiAnc3RhdGlzdGljcy1zaWRlYmFyLXdpZGdldC1yb3cnLFxuICAgICAgICAgICAgY29sdW1uQ2xhc3M6ICdzdGF0aXN0aWNzLXNpZGViYXItd2lkZ2V0LWNvbCcsXG4gICAgICAgICAgICBsYXlvdXQ6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIHdpZGdldENvbmZpZzoge3JlbG9hZCQ6IHRoaXMuY29uZmlnLnJlbG9hZCR9IGFzIFdpZGdldE1ldGFkYXRhLFxuICAgICAgICAgICAgcXVlcnlBcmdzOiB7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiB0aGlzLmNvbnRleHQubW9kdWxlLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuY29udGV4dCxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgfSBhcyBTdGF0aXN0aWNzUXVlcnlBcmdzLFxuICAgICAgICB9IGFzIEdyaWRXaWRnZXRDb25maWc7XG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48c2NybS13aWRnZXQtcGFuZWwgW3RpdGxlXT1cImdldEhlYWRlckxhYmVsKClcIj5cbiAgICA8ZGl2IHdpZGdldC1ib2R5IGNsYXNzPVwicC0zXCI+XG5cbiAgICAgICAgPHNjcm0tZ3JpZC13aWRnZXQgW2NvbmZpZ109XCJnZXRHcmlkQ29uZmlnKClcIj48L3Njcm0tZ3JpZC13aWRnZXQ+XG5cbiAgICA8L2Rpdj5cbjwvc2NybS13aWRnZXQtcGFuZWw+XG4iXX0=