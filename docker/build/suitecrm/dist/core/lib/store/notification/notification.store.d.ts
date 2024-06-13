import { BehaviorSubject, Observable } from 'rxjs';
import { StateStore } from '../state';
import { RecordThreadStore } from '../../containers/record-thread/store/record-thread/record-thread.store';
import { NotificationsService } from './notifications.service';
import { AppStateStore } from '../app-state/app-state.store';
import { SystemConfigStore } from '../system-config/system-config.store';
import * as i0 from "@angular/core";
export interface NotificationState {
    notificationsEnabled?: boolean;
    notificationsTotal?: number;
    notificationsUnreadTotal?: number;
}
export declare class NotificationStore implements StateStore {
    protected appStateStore: AppStateStore;
    protected configs: SystemConfigStore;
    protected notificationService: NotificationsService;
    /**
     * Public long-lived observable streams
     */
    notificationsUnreadTotal$: Observable<number>;
    notificationsTotal$: Observable<number>;
    notificationsEnabled$: Observable<boolean>;
    protected store: BehaviorSubject<NotificationState>;
    protected state$: Observable<NotificationState>;
    protected notificationStore: RecordThreadStore;
    private notificationPageSize;
    constructor(appStateStore: AppStateStore, configs: SystemConfigStore, notificationService: NotificationsService);
    /**
     * Clear state
     */
    clear(): void;
    clearAuthBased(): void;
    init(): void;
    /**
     * Initialize notifications
     */
    initNotifications(): void;
    /**
     * Enable notifications
     */
    enableNotifications(): void;
    /**
     * Disable notifications
     */
    disableNotifications(): void;
    /**
     * Check if notifications are enabled
     */
    areNotificationsEnabled(): boolean;
    /**
     * Call notification refresh
     */
    refreshNotifications(): void;
    /**
     * Mark current notifications as read
     */
    markNotificationsAsRead(): void;
    /**
     * Run conditional navigation auto-refresh
     * @param view current view
     */
    conditionalNotificationRefresh(view?: string): void;
    /**
     * Disable notifications auto-refresh
     */
    disableNotificationAutoRefresh(): void;
    /**
     * Mark record as read
     */
    setRecordAsReadTrue(): void;
    /**
     * Set notification as unread
     * @param notificationsUnreadTotal
     */
    setNotificationsUnreadTotal(notificationsUnreadTotal: number): void;
    /**
     * Set notification as total
     * @param notificationsTotal
     */
    setNotificationsTotal(notificationsTotal: number): void;
    /**
     * Get notification total
     *
     * @returns number
     */
    getNotificationsTotal(): number;
    /**
     * Get unread notification count
     *
     * @returns number
     */
    getNotificationsUnreadTotal(): number;
    /**
     * Get Notification store
     *
     * @returns {object}
     */
    getNotificationStore(): RecordThreadStore;
    /**
     * Get the current module
     *
     * @returns {string} current view
     */
    getModule(): string;
    /**
     * Get the current view
     *
     * @returns {string} current view
     */
    getView(): string;
    /**
     * On login handlers
     * @protected
     */
    protected onLogin(): void;
    /**
     * On logout handlers
     * @protected
     */
    protected onLogout(): void;
    /**
     * Check if loaded
     */
    isCached(): boolean;
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    protected updateState(state: NotificationState): void;
    /**
     * Set pre-loaded adminMetadata and cache
     */
    set(state: NotificationState): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NotificationStore>;
}
