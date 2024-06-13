import { RecordThreadStore } from '../../containers/record-thread/store/record-thread/record-thread.store';
import { SystemConfigStore } from '../system-config/system-config.store';
import { RecordThreadItemMetadata } from '../../containers/record-thread/store/record-thread/record-thread-item.store.model';
import { RecordThreadConfig, ThreadItemMetadataConfig } from '../../containers/record-thread/components/record-thread/record-thread.model';
import { RecordThreadStoreFactory } from '../../containers/record-thread/store/record-thread/record-thread.store.factory';
import { Process, ProcessService } from '../../services/process/process.service';
import { MessageService } from '../../services/message/message.service';
import { Observable } from 'rxjs';
import { LanguageStore } from '../language/language.store';
import { DynamicLabelService } from '../../services/language/dynamic-label.service';
import { NotificationStore } from './notification.store';
import * as i0 from "@angular/core";
export declare class NotificationsService {
    protected systemConfig: SystemConfigStore;
    protected storeFactory: RecordThreadStoreFactory;
    protected processService: ProcessService;
    protected messages: MessageService;
    protected language: LanguageStore;
    protected dynamicLabels: DynamicLabelService;
    constructor(systemConfig: SystemConfigStore, storeFactory: RecordThreadStoreFactory, processService: ProcessService, messages: MessageService, language: LanguageStore, dynamicLabels: DynamicLabelService);
    getOptions(): any;
    initStore(): RecordThreadStore;
    setupListActions(config: RecordThreadConfig, options: any): void;
    setupItemConfig(config: RecordThreadConfig, options: any): void;
    setupItemMetadata(metadata: RecordThreadItemMetadata, layout: ThreadItemMetadataConfig, options: any): void;
    /**
     * Send notification mark-as-read request
     *
     * @param {object} store to use
     * @returns {object} Observable<Process>
     */
    markNotificationsAsRead(store: RecordThreadStore): Observable<Process>;
    onLoadMore(notificationStore: NotificationStore): void;
    onRefresh(store: RecordThreadStore, notificationStore: NotificationStore): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NotificationsService>;
}
