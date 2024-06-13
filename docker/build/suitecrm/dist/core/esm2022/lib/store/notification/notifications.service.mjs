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
import { Injectable } from '@angular/core';
import { SystemConfigStore } from '../system-config/system-config.store';
import { deepClone } from 'common';
import { RecordThreadStoreFactory } from '../../containers/record-thread/store/record-thread/record-thread.store.factory';
import { ProcessService } from '../../services/process/process.service';
import { catchError, take, tap } from 'rxjs/operators';
import { MessageService } from '../../services/message/message.service';
import { timer } from 'rxjs';
import { LanguageStore } from '../language/language.store';
import { DynamicLabelService } from '../../services/language/dynamic-label.service';
import * as i0 from "@angular/core";
import * as i1 from "../system-config/system-config.store";
import * as i2 from "../../containers/record-thread/store/record-thread/record-thread.store.factory";
import * as i3 from "../../services/process/process.service";
import * as i4 from "../../services/message/message.service";
import * as i5 from "../language/language.store";
import * as i6 from "../../services/language/dynamic-label.service";
class NotificationsService {
    constructor(systemConfig, storeFactory, processService, messages, language, dynamicLabels) {
        this.systemConfig = systemConfig;
        this.storeFactory = storeFactory;
        this.processService = processService;
        this.messages = messages;
        this.language = language;
        this.dynamicLabels = dynamicLabels;
    }
    getOptions() {
        const ui = this.systemConfig.getConfigValue('ui');
        const options = ui?.notifications ?? null;
        return options;
    }
    initStore() {
        const options = this.getOptions();
        const config = {};
        this.setupListActions(config, options);
        this.setupItemConfig(config, options);
        const store = this.storeFactory.create();
        store.setItemMetadata(config.itemConfig.metadata);
        store.setListMetadata({ actions: config.listActions });
        const filters = {
            orderBy: options?.filters?.orderBy ?? 'date_entered',
            sortOrder: options?.filters?.sortOrder ?? 'asc',
            preset: { type: 'alerts' }
        };
        store.init(options.module, false, options?.pageSize ?? null);
        store.setFilters(filters).pipe(take(1)).subscribe();
        return store;
    }
    setupListActions(config, options) {
        config.listActions = options?.listActions ?? [];
        if ((options?.collapseListActions ?? null) !== null) {
            config.collapseListActions = options.collapseListActions;
        }
    }
    setupItemConfig(config, options) {
        config.itemConfig = {
            collapsible: options?.item?.collapsible ?? false,
            collapseLimit: options?.item?.collapseLimit ?? null,
            klass: options?.item?.itemClass ?? '',
            buttonClass: options?.item?.buttonClass ?? '',
            buttonGroupClass: options?.item?.buttonGroupClass ?? '',
            dynamicClass: options?.item?.dynamicClass ?? [],
            containerClass: options?.item?.containerClass ?? '',
            flexDirection: options?.item?.flexDirection ?? '',
            metadata: {},
        };
        this.setupItemMetadata(config.itemConfig.metadata, options.item.layout, options);
    }
    setupItemMetadata(metadata, layout, options) {
        if (layout && layout.header) {
            metadata.headerLayout = deepClone(layout.header);
        }
        if (layout && layout.body) {
            metadata.bodyLayout = deepClone(layout.body);
        }
        if (layout && layout.actions) {
            metadata.actions = deepClone(layout.actions);
        }
        if (options?.item && options?.item?.fields) {
            metadata.fields = deepClone(options.item.fields);
        }
        if ((options?.item?.collapseActions ?? null) !== null) {
            metadata.collapseActions = options?.item?.collapseActions;
        }
    }
    /**
     * Send notification mark-as-read request
     *
     * @param {object} store to use
     * @returns {object} Observable<Process>
     */
    markNotificationsAsRead(store) {
        const options = {
            action: 'record-thread-list-mark-as-read',
            module: store.module ?? 'alerts',
            ids: store.getRecordIds(),
        };
        return this.processService
            .submit('record-thread-list-mark-as-read', options)
            .pipe(tap((process) => {
            let handler = 'addSuccessMessageByKey';
            if (process.status === 'error') {
                handler = 'addDangerMessageByKey';
            }
            if (process.messages) {
                process.messages.forEach(message => {
                    this.messages[handler](message);
                });
            }
            store.getItemStores().forEach(notification => {
                const staging = notification?.recordStore?.getStaging() ?? {};
                const field = staging?.fields['is_read'] ?? null;
                if (field == null) {
                    return;
                }
                field.value = 'true';
            });
        }), catchError(err => {
            this.messages.addDangerMessageByKey('ERR_NOTIFICATIONS_MARK_AS_READ');
            throw err;
        }));
    }
    onLoadMore(notificationStore) {
        timer(1500).pipe(take(1)).subscribe(() => {
            notificationStore.markNotificationsAsRead();
        });
    }
    onRefresh(store, notificationStore) {
        const count = store.getRecordList().getMeta().unreadCount;
        let appStateCount = notificationStore.getNotificationsUnreadTotal();
        if (count > appStateCount) {
            let unreadCount = (count - appStateCount).toString();
            const labelTemplate = this.language.getFieldLabel('LBL_NEW_NOTIFICATION');
            const parsedLabel = this.dynamicLabels.parse(labelTemplate, { unread: unreadCount }, {});
            this.messages.addSuccessMessage(parsedLabel);
        }
        notificationStore.setNotificationsUnreadTotal(count);
    }
    static { this.ɵfac = function NotificationsService_Factory(t) { return new (t || NotificationsService)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.RecordThreadStoreFactory), i0.ɵɵinject(i3.ProcessService), i0.ɵɵinject(i4.MessageService), i0.ɵɵinject(i5.LanguageStore), i0.ɵɵinject(i6.DynamicLabelService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NotificationsService, factory: NotificationsService.ɵfac, providedIn: 'root' }); }
}
export { NotificationsService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.RecordThreadStoreFactory }, { type: i3.ProcessService }, { type: i4.MessageService }, { type: i5.LanguageStore }, { type: i6.DynamicLabelService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFDLFNBQVMsRUFBZ0MsTUFBTSxRQUFRLENBQUM7QUFNaEUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sZ0ZBQWdGLENBQUM7QUFFeEgsT0FBTyxFQUFVLGNBQWMsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQWEsS0FBSyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7Ozs7QUFHbEYsTUFHYSxvQkFBb0I7SUFFN0IsWUFDYyxZQUErQixFQUMvQixZQUFzQyxFQUN0QyxjQUE4QixFQUM5QixRQUF3QixFQUN4QixRQUF1QixFQUN2QixhQUFrQztRQUxsQyxpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDL0IsaUJBQVksR0FBWixZQUFZLENBQTBCO1FBQ3RDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUN4QixhQUFRLEdBQVIsUUFB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Q0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBd0IsRUFBRSxpQkFBb0M7UUFDcEUsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQXFCLENBQUM7UUFDcEUsSUFBSSxhQUFhLEdBQUcsaUJBQWlCLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUNwRSxJQUFJLEtBQUssR0FBRyxhQUFhLEVBQUU7WUFDdkIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDckQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUMxRSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNoRDtRQUNELGlCQUFpQixDQUFDLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7cUZBcEpRLG9CQUFvQjt1RUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQixtQkFGakIsTUFBTTs7U0FFVCxvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQUhoQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlY29yZFRocmVhZFN0b3JlfSBmcm9tICcuLi8uLi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvc3RvcmUvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLnN0b3JlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge2RlZXBDbG9uZSwgRmllbGQsIFJlY29yZCwgU2VhcmNoQ3JpdGVyaWF9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1NZXRhZGF0YX0gZnJvbSAnLi4vLi4vY29udGFpbmVycy9yZWNvcmQtdGhyZWFkL3N0b3JlL3JlY29yZC10aHJlYWQvcmVjb3JkLXRocmVhZC1pdGVtLnN0b3JlLm1vZGVsJztcbmltcG9ydCB7XG4gICAgUmVjb3JkVGhyZWFkQ29uZmlnLFxuICAgIFRocmVhZEl0ZW1NZXRhZGF0YUNvbmZpZ1xufSBmcm9tICcuLi8uLi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvY29tcG9uZW50cy9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLXRocmVhZC9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQuc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1Db25maWd9IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLXRocmVhZC9jb21wb25lbnRzL3JlY29yZC10aHJlYWQtaXRlbS9yZWNvcmQtdGhyZWFkLWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHtQcm9jZXNzLCBQcm9jZXNzU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCB0YWtlLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QXN5bmNBY3Rpb25JbnB1dH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge09ic2VydmFibGUsIHRpbWVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtEeW5hbWljTGFiZWxTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYW5ndWFnZS9keW5hbWljLWxhYmVsLnNlcnZpY2UnO1xuaW1wb3J0IHtOb3RpZmljYXRpb25TdG9yZX0gZnJvbSAnLi9ub3RpZmljYXRpb24uc3RvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZzogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzdG9yZUZhY3Rvcnk6IFJlY29yZFRocmVhZFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIHByb2Nlc3NTZXJ2aWNlOiBQcm9jZXNzU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2VzOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgZHluYW1pY0xhYmVsczogRHluYW1pY0xhYmVsU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIGdldE9wdGlvbnMoKTogYW55IHtcbiAgICAgICAgY29uc3QgdWkgPSB0aGlzLnN5c3RlbUNvbmZpZy5nZXRDb25maWdWYWx1ZSgndWknKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHVpPy5ub3RpZmljYXRpb25zID8/IG51bGw7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIGluaXRTdG9yZSgpOiBSZWNvcmRUaHJlYWRTdG9yZSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoKTtcblxuICAgICAgICBjb25zdCBjb25maWcgPSB7fSBhcyBSZWNvcmRUaHJlYWRDb25maWc7XG4gICAgICAgIHRoaXMuc2V0dXBMaXN0QWN0aW9ucyhjb25maWcsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnNldHVwSXRlbUNvbmZpZyhjb25maWcsIG9wdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcy5zdG9yZUZhY3RvcnkuY3JlYXRlKCk7XG4gICAgICAgIHN0b3JlLnNldEl0ZW1NZXRhZGF0YShjb25maWcuaXRlbUNvbmZpZy5tZXRhZGF0YSk7XG4gICAgICAgIHN0b3JlLnNldExpc3RNZXRhZGF0YSh7YWN0aW9uczogY29uZmlnLmxpc3RBY3Rpb25zfSk7XG5cbiAgICAgICAgY29uc3QgZmlsdGVycyA9IHtcbiAgICAgICAgICAgIG9yZGVyQnk6IG9wdGlvbnM/LmZpbHRlcnM/Lm9yZGVyQnkgPz8gJ2RhdGVfZW50ZXJlZCcsXG4gICAgICAgICAgICBzb3J0T3JkZXI6IG9wdGlvbnM/LmZpbHRlcnM/LnNvcnRPcmRlciA/PyAnYXNjJyxcbiAgICAgICAgICAgIHByZXNldDoge3R5cGU6ICdhbGVydHMnfVxuICAgICAgICB9IGFzIFNlYXJjaENyaXRlcmlhO1xuXG4gICAgICAgIHN0b3JlLmluaXQob3B0aW9ucy5tb2R1bGUsIGZhbHNlLCBvcHRpb25zPy5wYWdlU2l6ZSA/PyBudWxsKTtcbiAgICAgICAgc3RvcmUuc2V0RmlsdGVycyhmaWx0ZXJzKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuXG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9XG5cbiAgICBzZXR1cExpc3RBY3Rpb25zKGNvbmZpZzogUmVjb3JkVGhyZWFkQ29uZmlnLCBvcHRpb25zKTogdm9pZCB7XG4gICAgICAgIGNvbmZpZy5saXN0QWN0aW9ucyA9IG9wdGlvbnM/Lmxpc3RBY3Rpb25zID8/IFtdO1xuXG4gICAgICAgIGlmICgob3B0aW9ucz8uY29sbGFwc2VMaXN0QWN0aW9ucyA/PyBudWxsKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uZmlnLmNvbGxhcHNlTGlzdEFjdGlvbnMgPSBvcHRpb25zLmNvbGxhcHNlTGlzdEFjdGlvbnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXR1cEl0ZW1Db25maWcoY29uZmlnOiBSZWNvcmRUaHJlYWRDb25maWcsIG9wdGlvbnMpOiB2b2lkIHtcbiAgICAgICAgY29uZmlnLml0ZW1Db25maWcgPSB7XG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogb3B0aW9ucz8uaXRlbT8uY29sbGFwc2libGUgPz8gZmFsc2UsXG4gICAgICAgICAgICBjb2xsYXBzZUxpbWl0OiBvcHRpb25zPy5pdGVtPy5jb2xsYXBzZUxpbWl0ID8/IG51bGwsXG4gICAgICAgICAgICBrbGFzczogb3B0aW9ucz8uaXRlbT8uaXRlbUNsYXNzID8/ICcnLFxuICAgICAgICAgICAgYnV0dG9uQ2xhc3M6IG9wdGlvbnM/Lml0ZW0/LmJ1dHRvbkNsYXNzID8/ICcnLFxuICAgICAgICAgICAgYnV0dG9uR3JvdXBDbGFzczogb3B0aW9ucz8uaXRlbT8uYnV0dG9uR3JvdXBDbGFzcyA/PyAnJyxcbiAgICAgICAgICAgIGR5bmFtaWNDbGFzczogb3B0aW9ucz8uaXRlbT8uZHluYW1pY0NsYXNzID8/IFtdLFxuICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M6IG9wdGlvbnM/Lml0ZW0/LmNvbnRhaW5lckNsYXNzID8/ICcnLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogb3B0aW9ucz8uaXRlbT8uZmxleERpcmVjdGlvbiA/PyAnJyxcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7fSBhcyBSZWNvcmRUaHJlYWRJdGVtTWV0YWRhdGEsXG4gICAgICAgIH0gYXMgUmVjb3JkVGhyZWFkSXRlbUNvbmZpZztcblxuICAgICAgICB0aGlzLnNldHVwSXRlbU1ldGFkYXRhKGNvbmZpZy5pdGVtQ29uZmlnLm1ldGFkYXRhLCBvcHRpb25zLml0ZW0ubGF5b3V0LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBzZXR1cEl0ZW1NZXRhZGF0YShtZXRhZGF0YTogUmVjb3JkVGhyZWFkSXRlbU1ldGFkYXRhLCBsYXlvdXQ6IFRocmVhZEl0ZW1NZXRhZGF0YUNvbmZpZywgb3B0aW9ucyk6IHZvaWQge1xuICAgICAgICBpZiAobGF5b3V0ICYmIGxheW91dC5oZWFkZXIpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLmhlYWRlckxheW91dCA9IGRlZXBDbG9uZShsYXlvdXQuaGVhZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXlvdXQgJiYgbGF5b3V0LmJvZHkpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLmJvZHlMYXlvdXQgPSBkZWVwQ2xvbmUobGF5b3V0LmJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxheW91dCAmJiBsYXlvdXQuYWN0aW9ucykge1xuICAgICAgICAgICAgbWV0YWRhdGEuYWN0aW9ucyA9IGRlZXBDbG9uZShsYXlvdXQuYWN0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucz8uaXRlbSAmJiBvcHRpb25zPy5pdGVtPy5maWVsZHMpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLmZpZWxkcyA9IGRlZXBDbG9uZShvcHRpb25zLml0ZW0uZmllbGRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgob3B0aW9ucz8uaXRlbT8uY29sbGFwc2VBY3Rpb25zID8/IG51bGwpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5jb2xsYXBzZUFjdGlvbnMgPSBvcHRpb25zPy5pdGVtPy5jb2xsYXBzZUFjdGlvbnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kIG5vdGlmaWNhdGlvbiBtYXJrLWFzLXJlYWQgcmVxdWVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0b3JlIHRvIHVzZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8UHJvY2Vzcz5cbiAgICAgKi9cbiAgICBtYXJrTm90aWZpY2F0aW9uc0FzUmVhZChzdG9yZTogUmVjb3JkVGhyZWFkU3RvcmUpOiBPYnNlcnZhYmxlPFByb2Nlc3M+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3JlY29yZC10aHJlYWQtbGlzdC1tYXJrLWFzLXJlYWQnLFxuICAgICAgICAgICAgbW9kdWxlOiBzdG9yZS5tb2R1bGUgPz8gJ2FsZXJ0cycsXG4gICAgICAgICAgICBpZHM6IHN0b3JlLmdldFJlY29yZElkcygpLFxuICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG5cblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzU2VydmljZVxuICAgICAgICAgICAgLnN1Ym1pdCgncmVjb3JkLXRocmVhZC1saXN0LW1hcmstYXMtcmVhZCcsIG9wdGlvbnMpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoKHByb2Nlc3M6IFByb2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhbmRsZXIgPSAnYWRkU3VjY2Vzc01lc3NhZ2VCeUtleSc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciA9ICdhZGREYW5nZXJNZXNzYWdlQnlLZXknO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MubWVzc2FnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MubWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2hhbmRsZXJdKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5nZXRJdGVtU3RvcmVzKCkuZm9yRWFjaChub3RpZmljYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhZ2luZyA9IG5vdGlmaWNhdGlvbj8ucmVjb3JkU3RvcmU/LmdldFN0YWdpbmcoKSA/PyB7fSBhcyBSZWNvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IHN0YWdpbmc/LmZpZWxkc1snaXNfcmVhZCddID8/IG51bGwgYXMgRmllbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnZhbHVlID0gJ3RydWUnO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KCdFUlJfTk9USUZJQ0FUSU9OU19NQVJLX0FTX1JFQUQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkxvYWRNb3JlKG5vdGlmaWNhdGlvblN0b3JlOiBOb3RpZmljYXRpb25TdG9yZSk6IHZvaWQge1xuICAgICAgICB0aW1lcigxNTAwKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBub3RpZmljYXRpb25TdG9yZS5tYXJrTm90aWZpY2F0aW9uc0FzUmVhZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlZnJlc2goc3RvcmU6IFJlY29yZFRocmVhZFN0b3JlLCBub3RpZmljYXRpb25TdG9yZTogTm90aWZpY2F0aW9uU3RvcmUpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY291bnQgPSBzdG9yZS5nZXRSZWNvcmRMaXN0KCkuZ2V0TWV0YSgpLnVucmVhZENvdW50IGFzIG51bWJlcjtcbiAgICAgICAgbGV0IGFwcFN0YXRlQ291bnQgPSBub3RpZmljYXRpb25TdG9yZS5nZXROb3RpZmljYXRpb25zVW5yZWFkVG90YWwoKTtcbiAgICAgICAgaWYgKGNvdW50ID4gYXBwU3RhdGVDb3VudCkge1xuICAgICAgICAgICAgbGV0IHVucmVhZENvdW50ID0gKGNvdW50IC0gYXBwU3RhdGVDb3VudCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsVGVtcGxhdGUgPSB0aGlzLmxhbmd1YWdlLmdldEZpZWxkTGFiZWwoJ0xCTF9ORVdfTk9USUZJQ0FUSU9OJyk7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRMYWJlbCA9IHRoaXMuZHluYW1pY0xhYmVscy5wYXJzZShsYWJlbFRlbXBsYXRlLCB7dW5yZWFkOiB1bnJlYWRDb3VudH0sIHt9KTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuYWRkU3VjY2Vzc01lc3NhZ2UocGFyc2VkTGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIG5vdGlmaWNhdGlvblN0b3JlLnNldE5vdGlmaWNhdGlvbnNVbnJlYWRUb3RhbChjb3VudCk7XG4gICAgfVxufVxuIl19