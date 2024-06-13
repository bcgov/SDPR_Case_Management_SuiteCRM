/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { AdminMetadataStore } from '../../../../store/admin-metadata/admin-metadata.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/admin-metadata/admin-metadata.store";
import * as i2 from "@angular/common";
import * as i3 from "../admin-card/admin-card.component";
function AdminPanelComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "scrm-admin-card", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("content", data_r1);
} }
class AdminPanelComponent {
    constructor(adminMetaData) {
        this.adminMetaData = adminMetaData;
        this.adminPanelData = [];
    }
    ngOnInit() {
        const adminData = this.adminMetaData.getAdminPanel();
        this.setData(adminData);
    }
    setData(adminData) {
        adminData.forEach(({ icon, titleLabelKey, descriptionLabelKey, linkGroup }) => {
            this.adminPanelData.push({
                icon,
                titleLabelKey,
                descriptionLabelKey,
                linkGroup: this.setLinkGroups(linkGroup)
            });
        });
    }
    setLinkGroups(groupData) {
        let linkGroups = [];
        let linkGroupKeys = Object.keys(groupData);
        for (let j = 0; j < linkGroupKeys.length; j++) {
            let linkGroup = groupData[linkGroupKeys[j]];
            let links = Object.values(linkGroup);
            for (let i = 0; i < links.length; i++) {
                linkGroups.push(links[i]);
            }
        }
        return linkGroups;
    }
    static { this.ɵfac = function AdminPanelComponent_Factory(t) { return new (t || AdminPanelComponent)(i0.ɵɵdirectiveInject(i1.AdminMetadataStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminPanelComponent, selectors: [["scrm-admin-panel"]], decls: 3, vars: 1, consts: [[1, "admin-view", "full-height-view", "d-flex", "align-items-center"], [1, "row", "flex-grow-1"], ["class", "col-12 col-sm-6 col-lg-4 col-xl-3 mt-3 mb-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "col-lg-4", "col-xl-3", "mt-3", "mb-3"], [3, "content"]], template: function AdminPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, AdminPanelComponent_div_2_Template, 2, 1, "div", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.adminPanelData);
        } }, dependencies: [i2.NgForOf, i3.AdminCardComponent], encapsulation: 2 }); }
}
export { AdminPanelComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminPanelComponent, [{
        type: Component,
        args: [{ selector: 'scrm-admin-panel', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"admin-view full-height-view d-flex align-items-center\">\n    <div class=\"row flex-grow-1\">\n        <div *ngFor=\"let data of adminPanelData\" class=\"col-12 col-sm-6 col-lg-4 col-xl-3 mt-3 mb-3\">\n\n            <scrm-admin-card [content]=\"data\"></scrm-admin-card>\n\n        </div>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.AdminMetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2FkbWluL2NvbXBvbmVudHMvYWRtaW4tcGFuZWwvYWRtaW4tcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2FkbWluL2NvbXBvbmVudHMvYWRtaW4tcGFuZWwvYWRtaW4tcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdURBQXVELENBQUM7Ozs7OztJQ0dqRiw4QkFBNkY7SUFFekYscUNBQW9EO0lBRXhELGlCQUFNOzs7SUFGZSxlQUFnQjtJQUFoQixpQ0FBZ0I7O0FERzdDLE1BS2EsbUJBQW1CO0lBSTVCLFlBQXNCLGFBQWlDO1FBQWpDLGtCQUFhLEdBQWIsYUFBYSxDQUFvQjtRQUZ2RCxtQkFBYyxHQUF5QixFQUFFLENBQUM7SUFHMUMsQ0FBQztJQUVELFFBQVE7UUFDSixNQUFNLFNBQVMsR0FBa0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFUyxPQUFPLENBQUMsU0FBd0I7UUFDdEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUNyQixJQUFJO2dCQUNKLGFBQWE7Z0JBQ2IsbUJBQW1CO2dCQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7YUFDM0MsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRVMsYUFBYSxDQUFDLFNBQThCO1FBQ2xELElBQUksVUFBVSxHQUEwQixFQUFFLENBQUM7UUFDM0MsSUFBSSxhQUFhLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QjtTQUNKO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztvRkFsQ1EsbUJBQW1CO29FQUFuQixtQkFBbUI7WUNaaEMsOEJBQW1FLGFBQUE7WUFFM0Qsb0VBSU07WUFDVixpQkFBTSxFQUFBOztZQUxvQixlQUFpQjtZQUFqQiw0Q0FBaUI7OztTRFVsQyxtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUwvQixTQUFTOzJCQUNJLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FkbWluTWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYWRtaW4tbWV0YWRhdGEvYWRtaW4tbWV0YWRhdGEuc3RvcmUnO1xuaW1wb3J0IHtcbiAgICBBZG1pbkxpbmtHcm91cE1vZGVsLFxuICAgIEFkbWluTWV0YWRhdGEsXG4gICAgQWRtaW5NZXRhZGF0YU1vZGVsXG59IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2FkbWluLW1ldGFkYXRhL2FkbWluLW1ldGFkYXRhLm1vZGVsJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYWRtaW4tcGFuZWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hZG1pbi1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5QYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBhZG1pblBhbmVsRGF0YTogQWRtaW5NZXRhZGF0YU1vZGVsW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZG1pbk1ldGFEYXRhOiBBZG1pbk1ldGFkYXRhU3RvcmUpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYWRtaW5EYXRhOiBBZG1pbk1ldGFkYXRhID0gdGhpcy5hZG1pbk1ldGFEYXRhLmdldEFkbWluUGFuZWwoKTtcbiAgICAgICAgdGhpcy5zZXREYXRhKGFkbWluRGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldERhdGEoYWRtaW5EYXRhOiBBZG1pbk1ldGFkYXRhKTogdm9pZCB7XG4gICAgICAgIGFkbWluRGF0YS5mb3JFYWNoKCh7aWNvbiwgdGl0bGVMYWJlbEtleSwgZGVzY3JpcHRpb25MYWJlbEtleSwgbGlua0dyb3VwfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZG1pblBhbmVsRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgICAgIHRpdGxlTGFiZWxLZXksXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbEtleSxcbiAgICAgICAgICAgICAgICBsaW5rR3JvdXA6IHRoaXMuc2V0TGlua0dyb3VwcyhsaW5rR3JvdXApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldExpbmtHcm91cHMoZ3JvdXBEYXRhOiBBZG1pbkxpbmtHcm91cE1vZGVsKTogQWRtaW5MaW5rR3JvdXBNb2RlbFtdIHtcbiAgICAgICAgbGV0IGxpbmtHcm91cHM6IEFkbWluTGlua0dyb3VwTW9kZWxbXSA9IFtdO1xuICAgICAgICBsZXQgbGlua0dyb3VwS2V5czogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhncm91cERhdGEpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpbmtHcm91cEtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBsaW5rR3JvdXAgPSBncm91cERhdGFbbGlua0dyb3VwS2V5c1tqXV07XG4gICAgICAgICAgICBsZXQgbGlua3MgPSBPYmplY3QudmFsdWVzKGxpbmtHcm91cCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGlua0dyb3Vwcy5wdXNoKGxpbmtzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlua0dyb3VwcztcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG5cbjxkaXYgY2xhc3M9XCJhZG1pbi12aWV3IGZ1bGwtaGVpZ2h0LXZpZXcgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgZmxleC1ncm93LTFcIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZGF0YSBvZiBhZG1pblBhbmVsRGF0YVwiIGNsYXNzPVwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy00IGNvbC14bC0zIG10LTMgbWItM1wiPlxuXG4gICAgICAgICAgICA8c2NybS1hZG1pbi1jYXJkIFtjb250ZW50XT1cImRhdGFcIj48L3Njcm0tYWRtaW4tY2FyZD5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19