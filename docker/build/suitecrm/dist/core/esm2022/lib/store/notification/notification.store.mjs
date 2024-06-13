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
import { BehaviorSubject, of, timer } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, take, tap } from 'rxjs/operators';
import { deepClone } from 'common';
import { NotificationsService } from './notifications.service';
import { AppStateStore } from '../app-state/app-state.store';
import { SystemConfigStore } from '../system-config/system-config.store';
import * as i0 from "@angular/core";
import * as i1 from "../app-state/app-state.store";
import * as i2 from "../system-config/system-config.store";
import * as i3 from "./notifications.service";
const initialState = {
    notificationsEnabled: false,
    notificationsTotal: 0,
    notificationsUnreadTotal: 0
};
let internalState = deepClone(initialState);
let cache$ = null;
class NotificationStore {
    constructor(appStateStore, configs, notificationService) {
        this.appStateStore = appStateStore;
        this.configs = configs;
        this.notificationService = notificationService;
        this.store = new BehaviorSubject(internalState);
        this.state$ = this.store.asObservable();
        this.notificationPageSize = 0;
        this.notificationsUnreadTotal$ = this.state$.pipe(map(state => state.notificationsUnreadTotal), distinctUntilChanged());
        this.notificationsTotal$ = this.state$.pipe(map(state => state.notificationsTotal), distinctUntilChanged());
        this.notificationsEnabled$ = this.state$.pipe(map(state => state.notificationsEnabled), distinctUntilChanged());
    }
    /**
     * Clear state
     */
    clear() {
        cache$ = null;
        this.updateState(deepClone(initialState));
    }
    clearAuthBased() {
        this.clear();
        this.notificationStore.clear();
        this.notificationStore = null;
    }
    init() {
        if (this.appStateStore.isLoggedIn()) {
            this.initNotifications();
        }
    }
    /**
     * Initialize notifications
     */
    initNotifications() {
        if (this.notificationStore) {
            return;
        }
        this.notificationStore = this.notificationService.initStore();
    }
    /**
     * Enable notifications
     */
    enableNotifications() {
        this.initNotifications();
        this.updateState({ ...internalState, notificationsEnabled: true });
    }
    /**
     * Disable notifications
     */
    disableNotifications() {
        this.disableNotificationAutoRefresh();
        this.updateState({
            ...internalState,
            notificationsEnabled: false,
            notificationsTotal: 0,
            notificationsUnreadTotal: 0
        });
    }
    /**
     * Check if notifications are enabled
     */
    areNotificationsEnabled() {
        return internalState.notificationsEnabled;
    }
    /**
     * Call notification refresh
     */
    refreshNotifications() {
        if (!this.areNotificationsEnabled()) {
            return;
        }
        this.notificationStore.load(false).pipe(take(1)).subscribe(() => {
            this.notificationService.onRefresh(this.notificationStore, this);
        });
    }
    /**
     * Mark current notifications as read
     */
    markNotificationsAsRead() {
        if (!this.areNotificationsEnabled()) {
            return;
        }
        this.notificationStore.getRecordList().pagination$.pipe(take(1), tap(data => this.notificationPageSize = data.pageSize), tap(data => this.setNotificationsTotal(data.total))).subscribe();
        let unreadCountFromRecords = this.notificationStore.getRecordList().records.filter(item => item.attributes.is_read === false).length;
        let readCount = this.getNotificationsTotal() - this.getNotificationsUnreadTotal();
        timer(500).pipe(take(1))
            .subscribe(() => {
            if (this.getNotificationsUnreadTotal() > 0 && (this.notificationPageSize > readCount || unreadCountFromRecords > 0)) {
                this.notificationService.markNotificationsAsRead(this.notificationStore)
                    .subscribe((process) => {
                    const unreadCount = process?.data?.unreadCount ?? 0;
                    this.setNotificationsUnreadTotal(unreadCount);
                    this.setRecordAsReadTrue();
                });
            }
        });
    }
    /**
     * Run conditional navigation auto-refresh
     * @param view current view
     */
    conditionalNotificationRefresh(view = '') {
        if (!this.areNotificationsEnabled()) {
            return;
        }
        const reloadActions = this.configs.getUi('notifications_reload_actions') ?? null;
        const previousModule = this.getModule();
        if (!view) {
            view = this.getView();
        }
        if (!reloadActions || !previousModule) {
            return;
        }
        const actions = reloadActions[previousModule];
        if (!actions || !actions.length) {
            return;
        }
        const reload = actions.some(action => {
            return action === 'any' || action === view;
        });
        if (reload) {
            this.refreshNotifications();
        }
    }
    /**
     * Disable notifications auto-refresh
     */
    disableNotificationAutoRefresh() {
        this.notificationStore.disableAutoRefresh();
    }
    /**
     * Mark record as read
     */
    setRecordAsReadTrue() {
        this.notificationStore.getRecordList().records.forEach(record => {
            if (!record.attributes.is_read) {
                record.attributes.is_read = true;
            }
        });
    }
    /**
     * Set notification as unread
     * @param notificationsUnreadTotal
     */
    setNotificationsUnreadTotal(notificationsUnreadTotal) {
        this.updateState({ ...internalState, notificationsUnreadTotal });
    }
    /**
     * Set notification as total
     * @param notificationsTotal
     */
    setNotificationsTotal(notificationsTotal) {
        this.updateState({ ...internalState, notificationsTotal });
    }
    /**
     * Get notification total
     *
     * @returns number
     */
    getNotificationsTotal() {
        return internalState.notificationsTotal;
    }
    /**
     * Get unread notification count
     *
     * @returns number
     */
    getNotificationsUnreadTotal() {
        return internalState.notificationsUnreadTotal;
    }
    /**
     * Get Notification store
     *
     * @returns {object}
     */
    getNotificationStore() {
        return this.notificationStore;
    }
    /**
     * Get the current module
     *
     * @returns {string} current view
     */
    getModule() {
        return this.appStateStore.getModule();
    }
    /**
     * Get the current view
     *
     * @returns {string} current view
     */
    getView() {
        return this.appStateStore.getView();
    }
    /**
     * On login handlers
     * @protected
     */
    onLogin() {
    }
    /**
     * On logout handlers
     * @protected
     */
    onLogout() {
        this.disableNotifications();
        this.clearAuthBased();
    }
    /**
     * Check if loaded
     */
    isCached() {
        return cache$ !== null;
    }
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(internalState = state);
    }
    /**
     * Set pre-loaded adminMetadata and cache
     */
    set(state) {
        cache$ = of(state).pipe(shareReplay(1));
        this.updateState(state);
    }
    static { this.ɵfac = function NotificationStore_Factory(t) { return new (t || NotificationStore)(i0.ɵɵinject(i1.AppStateStore), i0.ɵɵinject(i2.SystemConfigStore), i0.ɵɵinject(i3.NotificationsService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NotificationStore, factory: NotificationStore.ɵfac, providedIn: 'root' }); }
}
export { NotificationStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.SystemConfigStore }, { type: i3.NotificationsService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLEVBQUUsS0FBSyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7QUFRdkUsTUFBTSxZQUFZLEdBQXNCO0lBQ3BDLG9CQUFvQixFQUFFLEtBQUs7SUFDM0Isa0JBQWtCLEVBQUUsQ0FBQztJQUNyQix3QkFBd0IsRUFBRSxDQUFDO0NBQzlCLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBc0IsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRS9ELElBQUksTUFBTSxHQUFvQixJQUFJLENBQUM7QUFFbkMsTUFHYSxpQkFBaUI7SUFlMUIsWUFDYyxhQUE0QixFQUM1QixPQUEwQixFQUMxQixtQkFBeUM7UUFGekMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDMUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFz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QUUsQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxRQUFRO1FBQ1gsT0FBTyxNQUFNLEtBQUssSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sV0FBVyxDQUFDLEtBQXdCO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxHQUFHLENBQUMsS0FBd0I7UUFDL0IsTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUU1QixDQUFDO2tGQTFSUSxpQkFBaUI7dUVBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmQsTUFBTTs7U0FFVCxpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YsIHRpbWVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2hhcmVSZXBsYXksIHRha2UsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkU3RvcmV9IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLXRocmVhZC9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQuc3RvcmUnO1xuaW1wb3J0IHtOb3RpZmljYXRpb25zU2VydmljZX0gZnJvbSAnLi9ub3RpZmljYXRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7UHJvY2Vzc30gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25TdGF0ZSB7XG4gICAgbm90aWZpY2F0aW9uc0VuYWJsZWQ/OiBib29sZWFuO1xuICAgIG5vdGlmaWNhdGlvbnNUb3RhbD86IG51bWJlcjtcbiAgICBub3RpZmljYXRpb25zVW5yZWFkVG90YWw/OiBudW1iZXI7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogTm90aWZpY2F0aW9uU3RhdGUgPSB7XG4gICAgbm90aWZpY2F0aW9uc0VuYWJsZWQ6IGZhbHNlLFxuICAgIG5vdGlmaWNhdGlvbnNUb3RhbDogMCxcbiAgICBub3RpZmljYXRpb25zVW5yZWFkVG90YWw6IDBcbn07XG5cbmxldCBpbnRlcm5hbFN0YXRlOiBOb3RpZmljYXRpb25TdGF0ZSA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuXG5sZXQgY2FjaGUkOiBPYnNlcnZhYmxlPGFueT4gPSBudWxsO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIGxvbmctbGl2ZWQgb2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgICovXG4gICAgbm90aWZpY2F0aW9uc1VucmVhZFRvdGFsJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIG5vdGlmaWNhdGlvbnNUb3RhbCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBub3RpZmljYXRpb25zRW5hYmxlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgICBwcm90ZWN0ZWQgc3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE5vdGlmaWNhdGlvblN0YXRlPihpbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcblxuICAgIHByb3RlY3RlZCBub3RpZmljYXRpb25TdG9yZTogUmVjb3JkVGhyZWFkU3RvcmU7XG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25QYWdlU2l6ZTogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zVW5yZWFkVG90YWwkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubm90aWZpY2F0aW9uc1VucmVhZFRvdGFsKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1RvdGFsJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLm5vdGlmaWNhdGlvbnNUb3RhbCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNFbmFibGVkJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLm5vdGlmaWNhdGlvbnNFbmFibGVkKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGNhY2hlJCA9IG51bGw7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblN0b3JlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU3RvcmUgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hcHBTdGF0ZVN0b3JlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgICAgICAgdGhpcy5pbml0Tm90aWZpY2F0aW9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBub3RpZmljYXRpb25zXG4gICAgICovXG4gICAgcHVibGljIGluaXROb3RpZmljYXRpb25zKCkge1xuICAgICAgICBpZiAodGhpcy5ub3RpZmljYXRpb25TdG9yZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU3RvcmUgPSB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuaW5pdFN0b3JlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIG5vdGlmaWNhdGlvbnNcbiAgICAgKi9cbiAgICBwdWJsaWMgZW5hYmxlTm90aWZpY2F0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0Tm90aWZpY2F0aW9ucygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBub3RpZmljYXRpb25zRW5hYmxlZDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgbm90aWZpY2F0aW9uc1xuICAgICAqL1xuICAgIHB1YmxpYyBkaXNhYmxlTm90aWZpY2F0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlTm90aWZpY2F0aW9uQXV0b1JlZnJlc2goKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgbm90aWZpY2F0aW9uc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbm90aWZpY2F0aW9uc1RvdGFsOiAwLFxuICAgICAgICAgICAgbm90aWZpY2F0aW9uc1VucmVhZFRvdGFsOiAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIG5vdGlmaWNhdGlvbnMgYXJlIGVuYWJsZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgYXJlTm90aWZpY2F0aW9uc0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLm5vdGlmaWNhdGlvbnNFbmFibGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgbm90aWZpY2F0aW9uIHJlZnJlc2hcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVmcmVzaE5vdGlmaWNhdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5hcmVOb3RpZmljYXRpb25zRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TdG9yZS5sb2FkKGZhbHNlKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25SZWZyZXNoKHRoaXMubm90aWZpY2F0aW9uU3RvcmUsIHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXJrIGN1cnJlbnQgbm90aWZpY2F0aW9ucyBhcyByZWFkXG4gICAgICovXG4gICAgcHVibGljIG1hcmtOb3RpZmljYXRpb25zQXNSZWFkKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5hcmVOb3RpZmljYXRpb25zRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblN0b3JlLmdldFJlY29yZExpc3QoKS5wYWdpbmF0aW9uJC5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIHRhcChkYXRhID0+IHRoaXMubm90aWZpY2F0aW9uUGFnZVNpemUgPSBkYXRhLnBhZ2VTaXplKSxcbiAgICAgICAgICAgIHRhcChkYXRhID0+IHRoaXMuc2V0Tm90aWZpY2F0aW9uc1RvdGFsKGRhdGEudG90YWwpKSxcbiAgICAgICAgKS5zdWJzY3JpYmUoKTtcblxuICAgICAgICBsZXQgdW5yZWFkQ291bnRGcm9tUmVjb3JkcyA9IHRoaXMubm90aWZpY2F0aW9uU3RvcmUuZ2V0UmVjb3JkTGlzdCgpLnJlY29yZHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5hdHRyaWJ1dGVzLmlzX3JlYWQgPT09IGZhbHNlKS5sZW5ndGg7XG5cbiAgICAgICAgbGV0IHJlYWRDb3VudCA9IHRoaXMuZ2V0Tm90aWZpY2F0aW9uc1RvdGFsKCkgLSB0aGlzLmdldE5vdGlmaWNhdGlvbnNVbnJlYWRUb3RhbCgpO1xuXG4gICAgICAgIHRpbWVyKDUwMCkucGlwZSh0YWtlKDEpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Tm90aWZpY2F0aW9uc1VucmVhZFRvdGFsKCkgPiAwICYmICh0aGlzLm5vdGlmaWNhdGlvblBhZ2VTaXplID4gcmVhZENvdW50IHx8IHVucmVhZENvdW50RnJvbVJlY29yZHMgPiAwKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UubWFya05vdGlmaWNhdGlvbnNBc1JlYWQodGhpcy5ub3RpZmljYXRpb25TdG9yZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHByb2Nlc3M6IFByb2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnJlYWRDb3VudCA9IHByb2Nlc3M/LmRhdGE/LnVucmVhZENvdW50ID8/IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXROb3RpZmljYXRpb25zVW5yZWFkVG90YWwodW5yZWFkQ291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UmVjb3JkQXNSZWFkVHJ1ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIGNvbmRpdGlvbmFsIG5hdmlnYXRpb24gYXV0by1yZWZyZXNoXG4gICAgICogQHBhcmFtIHZpZXcgY3VycmVudCB2aWV3XG4gICAgICovXG4gICAgcHVibGljIGNvbmRpdGlvbmFsTm90aWZpY2F0aW9uUmVmcmVzaCh2aWV3OiBzdHJpbmcgPSAnJyk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5hcmVOb3RpZmljYXRpb25zRW5hYmxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWxvYWRBY3Rpb25zID0gdGhpcy5jb25maWdzLmdldFVpKCdub3RpZmljYXRpb25zX3JlbG9hZF9hY3Rpb25zJykgPz8gbnVsbDtcbiAgICAgICAgY29uc3QgcHJldmlvdXNNb2R1bGUgPSB0aGlzLmdldE1vZHVsZSgpO1xuXG4gICAgICAgIGlmICghdmlldykge1xuICAgICAgICAgICAgdmlldyA9IHRoaXMuZ2V0VmlldygpO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoIXJlbG9hZEFjdGlvbnMgfHwgIXByZXZpb3VzTW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY3Rpb25zOiBzdHJpbmdbXSA9IHJlbG9hZEFjdGlvbnNbcHJldmlvdXNNb2R1bGVdO1xuXG4gICAgICAgIGlmICghYWN0aW9ucyB8fCAhYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbG9hZCA9IGFjdGlvbnMuc29tZShhY3Rpb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbiA9PT0gJ2FueScgfHwgYWN0aW9uID09PSB2aWV3O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hOb3RpZmljYXRpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIG5vdGlmaWNhdGlvbnMgYXV0by1yZWZyZXNoXG4gICAgICovXG4gICAgcHVibGljIGRpc2FibGVOb3RpZmljYXRpb25BdXRvUmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TdG9yZS5kaXNhYmxlQXV0b1JlZnJlc2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXJrIHJlY29yZCBhcyByZWFkXG4gICAgICovXG4gICAgcHVibGljIHNldFJlY29yZEFzUmVhZFRydWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU3RvcmUuZ2V0UmVjb3JkTGlzdCgpLnJlY29yZHMuZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZWNvcmQuYXR0cmlidXRlcy5pc19yZWFkKSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkLmF0dHJpYnV0ZXMuaXNfcmVhZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBub3RpZmljYXRpb24gYXMgdW5yZWFkXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvbnNVbnJlYWRUb3RhbFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXROb3RpZmljYXRpb25zVW5yZWFkVG90YWwobm90aWZpY2F0aW9uc1VucmVhZFRvdGFsOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgbm90aWZpY2F0aW9uc1VucmVhZFRvdGFsfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IG5vdGlmaWNhdGlvbiBhcyB0b3RhbFxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25zVG90YWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0Tm90aWZpY2F0aW9uc1RvdGFsKG5vdGlmaWNhdGlvbnNUb3RhbDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIG5vdGlmaWNhdGlvbnNUb3RhbH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBub3RpZmljYXRpb24gdG90YWxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIG51bWJlclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXROb3RpZmljYXRpb25zVG90YWwoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGUubm90aWZpY2F0aW9uc1RvdGFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB1bnJlYWQgbm90aWZpY2F0aW9uIGNvdW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Tm90aWZpY2F0aW9uc1VucmVhZFRvdGFsKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLm5vdGlmaWNhdGlvbnNVbnJlYWRUb3RhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgTm90aWZpY2F0aW9uIHN0b3JlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXROb3RpZmljYXRpb25TdG9yZSgpOiBSZWNvcmRUaHJlYWRTdG9yZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvblN0b3JlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBtb2R1bGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGN1cnJlbnQgdmlld1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRNb2R1bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwU3RhdGVTdG9yZS5nZXRNb2R1bGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgdmlld1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gY3VycmVudCB2aWV3XG4gICAgICovXG4gICAgcHVibGljIGdldFZpZXcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwU3RhdGVTdG9yZS5nZXRWaWV3KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gbG9naW4gaGFuZGxlcnNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uTG9naW4oKTogdm9pZCB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gbG9nb3V0IGhhbmRsZXJzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbkxvZ291dCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlTm90aWZpY2F0aW9ucygpO1xuICAgICAgICB0aGlzLmNsZWFyQXV0aEJhc2VkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgbG9hZGVkXG4gICAgICovXG4gICAgcHVibGljIGlzQ2FjaGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY2FjaGUkICE9PSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IE5vdGlmaWNhdGlvblN0YXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dChpbnRlcm5hbFN0YXRlID0gc3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBwcmUtbG9hZGVkIGFkbWluTWV0YWRhdGEgYW5kIGNhY2hlXG4gICAgICovXG4gICAgcHVibGljIHNldChzdGF0ZTogTm90aWZpY2F0aW9uU3RhdGUpOiB2b2lkIHtcbiAgICAgICAgY2FjaGUkID0gb2Yoc3RhdGUpLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcblxuICAgIH1cblxufVxuIl19