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
import { deepClone } from 'common';
import { of } from 'rxjs';
import { LanguageStore } from '../../store/language/language.store';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { RecordThreadStoreFactory } from "../record-thread/store/record-thread/record-thread.store.factory";
import { MessageService } from "../../services/message/message.service";
import { NotificationsService } from '../../store/notification/notifications.service';
import { NotificationStore } from '../../store/notification/notification.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../store/system-config/system-config.store";
import * as i3 from "../record-thread/store/record-thread/record-thread.store.factory";
import * as i4 from "../../services/message/message.service";
import * as i5 from "../../store/notification/notifications.service";
import * as i6 from "../../store/notification/notification.store";
import * as i7 from "@angular/common";
import * as i8 from "../../components/label/label.component";
import * as i9 from "../record-thread/components/record-thread/record-thread.component";
function NotificationsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelement(2, "scrm-label", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function NotificationsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-thread", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r1.recordThreadConfig);
} }
class NotificationsComponent {
    constructor(language, systemConfig, storeFactory, message, notificationService, notificationStore) {
        this.language = language;
        this.systemConfig = systemConfig;
        this.storeFactory = storeFactory;
        this.message = message;
        this.notificationService = notificationService;
        this.notificationStore = notificationStore;
    }
    ngOnInit() {
        this.options = this.notificationService.getOptions();
        this.recordThreadConfig = this.getConfig();
    }
    getConfig() {
        const config = {
            filters$: of({
                orderBy: this?.options?.filters?.orderBy ?? 'date_entered',
                sortOrder: this?.options?.filters?.sortOrder ?? 'asc',
                preset: { type: 'alerts' }
            }),
            module: this.options.module,
            klass: this.options.class ?? '',
            maxListHeight: this.options.maxListHeight ?? 350,
            direction: this.options.direction || 'asc',
            autoRefreshFrequency: this.options.autoRefreshFrequency || 0,
            autoRefreshDeviationMin: this.options.autoRefreshDeviationMin ?? 0,
            autoRefreshDeviationMax: this.options.autoRefreshDeviationMax ?? 0,
            onRefresh: () => {
                this.notificationService.onRefresh(this.store, this.notificationStore);
            },
            onLoadMore: () => {
                this.notificationService.onLoadMore(this.notificationStore);
            },
            loadMorePosition: this.options?.loadMorePosition ?? '',
            create: false,
            listActionsClass: this.options?.listActionsClass ?? '',
            listActionsButtonClass: this.options?.listActionsButtonClass ?? '',
            listActionsButtonGroupClass: this.options?.listActionsButtonGroupClass ?? '',
            pageSize: this.options?.pageSize ?? '',
            showNoDataMessage: this.options?.showNoDataMessage,
            noDataLabel: this.options?.noDataLabel,
        };
        this.notificationService.setupListActions(config, this.options);
        this.notificationService.setupItemConfig(config, this.options);
        config.store = this.notificationStore.getNotificationStore();
        this.store = this.notificationStore.getNotificationStore();
        return config;
    }
    setupItemMetadata(metadata, config) {
        if (config && config.header) {
            metadata.headerLayout = deepClone(config.header);
        }
        if (config && config.body) {
            metadata.bodyLayout = deepClone(config.body);
        }
        if (config && config.actions) {
            metadata.actions = deepClone(config.actions);
        }
    }
    static { this.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.SystemConfigStore), i0.ɵɵdirectiveInject(i3.RecordThreadStoreFactory), i0.ɵɵdirectiveInject(i4.MessageService), i0.ɵɵdirectiveInject(i5.NotificationsService), i0.ɵɵdirectiveInject(i6.NotificationStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NotificationsComponent, selectors: [["scrm-notifications"]], decls: 3, vars: 2, consts: [["widget-body", "", 1, "notifications"], [4, "ngIf"], [1, "p-3", "widget-message"], ["labelKey", "LBL_BAD_CONFIG"], [3, "config"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, NotificationsComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
            i0.ɵɵtemplate(2, NotificationsComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.options);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.options);
        } }, dependencies: [i7.NgIf, i8.LabelComponent, i9.RecordThreadComponent], encapsulation: 2 }); }
}
export { NotificationsComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationsComponent, [{
        type: Component,
        args: [{ selector: 'scrm-notifications', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"notifications\" widget-body>\n\n    <ng-container *ngIf=\"!options\">\n        <div class=\"p-3 widget-message\">\n            <scrm-label labelKey=\"LBL_BAD_CONFIG\"></scrm-label>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"options\">\n        <scrm-record-thread [config]=\"recordThreadConfig\"></scrm-record-thread>\n    </ng-container>\n\n</div>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.SystemConfigStore }, { type: i3.RecordThreadStoreFactory }, { type: i4.MessageService }, { type: i5.NotificationsService }, { type: i6.NotificationStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxTQUFTLEVBQWlCLE1BQU0sUUFBUSxDQUFDO0FBQ2pELE9BQU8sRUFBYSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBTWxFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGtFQUFrRSxDQUFDO0FBRTFHLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNwRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7Ozs7Ozs7O0lDVjFFLDZCQUErQjtJQUMzQiw4QkFBZ0M7SUFDNUIsZ0NBQW1EO0lBQ3ZELGlCQUFNO0lBQ1YsMEJBQWU7OztJQUVmLDZCQUE4QjtJQUMxQix3Q0FBdUU7SUFDM0UsMEJBQWU7OztJQURTLGVBQTZCO0lBQTdCLGtEQUE2Qjs7QURLekQsTUFLYSxzQkFBc0I7SUFNL0IsWUFDYyxRQUF1QixFQUN2QixZQUErQixFQUMvQixZQUFzQyxFQUN0QyxPQUF1QixFQUN2QixtQkFBeUMsRUFDekMsaUJBQW9DO1FBTHBDLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBQy9CLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXNCO1FBQ3pDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFFbEQsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxTQUFTO1FBRUwsTUFBTSxNQUFNLEdBQUc7WUFDWCxRQUFRLEVBQUUsRUFBRSxDQUFDO2dCQUNULE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLElBQUksY0FBYztnQkFDMUQsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsSUFBSSxLQUFLO2dCQUNyRCxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO2FBQ1QsQ0FBQztZQUNwQixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQzNCLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxHQUFHO1lBQ2hELFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxLQUFLO1lBQzFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLElBQUksQ0FBQztZQUM1RCx1QkFBdUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixJQUFJLENBQUM7WUFDbEUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsSUFBSSxDQUFDO1lBQ2xFLFNBQVMsRUFBRSxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzNFLENBQUM7WUFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO2dCQUNiLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDaEUsQ0FBQztZQUNELGdCQUFnQixFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLElBQUksRUFBRTtZQUN0RCxNQUFNLEVBQUUsS0FBSztZQUNiLGdCQUFnQixFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLElBQUksRUFBRTtZQUN0RCxzQkFBc0IsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLHNCQUFzQixJQUFJLEVBQUU7WUFDbEUsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSwyQkFBMkIsSUFBSSxFQUFFO1lBQzVFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsSUFBSSxFQUFFO1lBQ3RDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCO1lBQ2xELFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVc7U0FDbkIsQ0FBQztRQUV4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFL0QsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRTNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFUyxpQkFBaUIsQ0FBQyxRQUFrQyxFQUFFLE1BQWdDO1FBQzVGLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDekIsUUFBUSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtZQUN2QixRQUFRLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEQ7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQzFCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7dUZBekVRLHNCQUFzQjtvRUFBdEIsc0JBQXNCO1lDbkJuQyw4QkFBdUM7WUFFbkMseUZBSWU7WUFFZix5RkFFZTtZQUVuQixpQkFBTTs7WUFWYSxlQUFjO1lBQWQsbUNBQWM7WUFNZCxlQUFhO1lBQWIsa0NBQWE7OztTRFduQixzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQUxsQyxTQUFTOzJCQUNJLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2RlZXBDbG9uZSwgU2VhcmNoQ3JpdGVyaWF9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtcbiAgICBSZWNvcmRUaHJlYWRDb25maWcsXG4gICAgVGhyZWFkSXRlbU1ldGFkYXRhQ29uZmlnXG59IGZyb20gJy4uL3JlY29yZC10aHJlYWQvY29tcG9uZW50cy9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRJdGVtTWV0YWRhdGF9IGZyb20gJy4uL3JlY29yZC10aHJlYWQvc3RvcmUvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLWl0ZW0uc3RvcmUubW9kZWwnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkU3RvcmVGYWN0b3J5fSBmcm9tIFwiLi4vcmVjb3JkLXRocmVhZC9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQuc3RvcmUuZmFjdG9yeVwiO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRTdG9yZX0gZnJvbSBcIi4uL3JlY29yZC10aHJlYWQvc3RvcmUvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLnN0b3JlXCI7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7Tm90aWZpY2F0aW9uc1NlcnZpY2V9IGZyb20gJy4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtOb3RpZmljYXRpb25TdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1ub3RpZmljYXRpb25zJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbm90aWZpY2F0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHJlY29yZFRocmVhZENvbmZpZzogUmVjb3JkVGhyZWFkQ29uZmlnO1xuICAgIHN0b3JlOiBSZWNvcmRUaHJlYWRTdG9yZTtcbiAgICBvcHRpb25zOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlRmFjdG9yeTogUmVjb3JkVGhyZWFkU3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG5vdGlmaWNhdGlvblN0b3JlOiBOb3RpZmljYXRpb25TdG9yZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZ2V0T3B0aW9ucygpO1xuICAgICAgICB0aGlzLnJlY29yZFRocmVhZENvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKCk6IFJlY29yZFRocmVhZENvbmZpZyB7XG5cbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgZmlsdGVycyQ6IG9mKHtcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiB0aGlzPy5vcHRpb25zPy5maWx0ZXJzPy5vcmRlckJ5ID8/ICdkYXRlX2VudGVyZWQnLFxuICAgICAgICAgICAgICAgIHNvcnRPcmRlcjogdGhpcz8ub3B0aW9ucz8uZmlsdGVycz8uc29ydE9yZGVyID8/ICdhc2MnLFxuICAgICAgICAgICAgICAgIHByZXNldDoge3R5cGU6ICdhbGVydHMnfVxuICAgICAgICAgICAgfSBhcyBTZWFyY2hDcml0ZXJpYSksXG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMub3B0aW9ucy5tb2R1bGUsXG4gICAgICAgICAgICBrbGFzczogdGhpcy5vcHRpb25zLmNsYXNzID8/ICcnLFxuICAgICAgICAgICAgbWF4TGlzdEhlaWdodDogdGhpcy5vcHRpb25zLm1heExpc3RIZWlnaHQgPz8gMzUwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uIHx8ICdhc2MnLFxuICAgICAgICAgICAgYXV0b1JlZnJlc2hGcmVxdWVuY3k6IHRoaXMub3B0aW9ucy5hdXRvUmVmcmVzaEZyZXF1ZW5jeSB8fCAwLFxuICAgICAgICAgICAgYXV0b1JlZnJlc2hEZXZpYXRpb25NaW46IHRoaXMub3B0aW9ucy5hdXRvUmVmcmVzaERldmlhdGlvbk1pbiA/PyAwLFxuICAgICAgICAgICAgYXV0b1JlZnJlc2hEZXZpYXRpb25NYXg6IHRoaXMub3B0aW9ucy5hdXRvUmVmcmVzaERldmlhdGlvbk1heCA/PyAwLFxuICAgICAgICAgICAgb25SZWZyZXNoOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUmVmcmVzaCh0aGlzLnN0b3JlLCB0aGlzLm5vdGlmaWNhdGlvblN0b3JlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkxvYWRNb3JlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uTG9hZE1vcmUodGhpcy5ub3RpZmljYXRpb25TdG9yZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9hZE1vcmVQb3NpdGlvbjogdGhpcy5vcHRpb25zPy5sb2FkTW9yZVBvc2l0aW9uID8/ICcnLFxuICAgICAgICAgICAgY3JlYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGxpc3RBY3Rpb25zQ2xhc3M6IHRoaXMub3B0aW9ucz8ubGlzdEFjdGlvbnNDbGFzcyA/PyAnJyxcbiAgICAgICAgICAgIGxpc3RBY3Rpb25zQnV0dG9uQ2xhc3M6IHRoaXMub3B0aW9ucz8ubGlzdEFjdGlvbnNCdXR0b25DbGFzcyA/PyAnJyxcbiAgICAgICAgICAgIGxpc3RBY3Rpb25zQnV0dG9uR3JvdXBDbGFzczogdGhpcy5vcHRpb25zPy5saXN0QWN0aW9uc0J1dHRvbkdyb3VwQ2xhc3MgPz8gJycsXG4gICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy5vcHRpb25zPy5wYWdlU2l6ZSA/PyAnJyxcbiAgICAgICAgICAgIHNob3dOb0RhdGFNZXNzYWdlOiB0aGlzLm9wdGlvbnM/LnNob3dOb0RhdGFNZXNzYWdlLFxuICAgICAgICAgICAgbm9EYXRhTGFiZWw6IHRoaXMub3B0aW9ucz8ubm9EYXRhTGFiZWwsXG4gICAgICAgIH0gYXMgUmVjb3JkVGhyZWFkQ29uZmlnO1xuXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zZXR1cExpc3RBY3Rpb25zKGNvbmZpZywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLnNldHVwSXRlbUNvbmZpZyhjb25maWcsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgY29uZmlnLnN0b3JlID0gdGhpcy5ub3RpZmljYXRpb25TdG9yZS5nZXROb3RpZmljYXRpb25TdG9yZSgpO1xuICAgICAgICB0aGlzLnN0b3JlID0gdGhpcy5ub3RpZmljYXRpb25TdG9yZS5nZXROb3RpZmljYXRpb25TdG9yZSgpO1xuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldHVwSXRlbU1ldGFkYXRhKG1ldGFkYXRhOiBSZWNvcmRUaHJlYWRJdGVtTWV0YWRhdGEsIGNvbmZpZzogVGhyZWFkSXRlbU1ldGFkYXRhQ29uZmlnKTogdm9pZCB7XG4gICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmhlYWRlcikge1xuICAgICAgICAgICAgbWV0YWRhdGEuaGVhZGVyTGF5b3V0ID0gZGVlcENsb25lKGNvbmZpZy5oZWFkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcuYm9keSkge1xuICAgICAgICAgICAgbWV0YWRhdGEuYm9keUxheW91dCA9IGRlZXBDbG9uZShjb25maWcuYm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5hY3Rpb25zKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5hY3Rpb25zID0gZGVlcENsb25lKGNvbmZpZy5hY3Rpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG5cbjxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25zXCIgd2lkZ2V0LWJvZHk+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW9wdGlvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInAtMyB3aWRnZXQtbWVzc2FnZVwiPlxuICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfQkFEX0NPTkZJR1wiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib3B0aW9uc1wiPlxuICAgICAgICA8c2NybS1yZWNvcmQtdGhyZWFkIFtjb25maWddPVwicmVjb3JkVGhyZWFkQ29uZmlnXCI+PC9zY3JtLXJlY29yZC10aHJlYWQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbjwvZGl2PlxuIl19