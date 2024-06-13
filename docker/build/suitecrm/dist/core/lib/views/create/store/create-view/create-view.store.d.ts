import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { StatisticsBatch } from '../../../../store/statistics/statistics-batch.service';
import { RecordViewStore } from '../../../record/store/record-view/record-view.store';
import { RecordFetchGQL } from '../../../../store/record/graphql/api.record.get';
import { RecordSaveGQL } from '../../../../store/record/graphql/api.record.save';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { LanguageStore } from '../../../../store/language/language.store';
import { NavigationStore } from '../../../../store/navigation/navigation.store';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { RecordManager } from '../../../../services/record/record.manager';
import { LocalStorageService } from '../../../../services/local-storage/local-storage.service';
import { SubpanelStoreFactory } from '../../../../containers/subpanel/store/subpanel/subpanel.store.factory';
import { AuthService } from '../../../../services/auth/auth.service';
import { MessageService } from '../../../../services/message/message.service';
import { Record, ViewMode } from 'common';
import { RecordStoreFactory } from '../../../../store/record/record.store.factory';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { PanelLogicManager } from '../../../../components/panel-logic/panel-logic.manager';
import * as i0 from "@angular/core";
export declare class CreateViewStore extends RecordViewStore {
    protected recordFetchGQL: RecordFetchGQL;
    protected recordSaveGQL: RecordSaveGQL;
    protected appStateStore: AppStateStore;
    protected languageStore: LanguageStore;
    protected navigationStore: NavigationStore;
    protected moduleNavigation: ModuleNavigation;
    protected metadataStore: MetadataStore;
    protected localStorage: LocalStorageService;
    protected message: MessageService;
    protected subpanelFactory: SubpanelStoreFactory;
    protected recordManager: RecordManager;
    protected statisticsBatch: StatisticsBatch;
    protected auth: AuthService;
    protected recordStoreFactory: RecordStoreFactory;
    protected preferences: UserPreferenceStore;
    protected panelLogicManager: PanelLogicManager;
    constructor(recordFetchGQL: RecordFetchGQL, recordSaveGQL: RecordSaveGQL, appStateStore: AppStateStore, languageStore: LanguageStore, navigationStore: NavigationStore, moduleNavigation: ModuleNavigation, metadataStore: MetadataStore, localStorage: LocalStorageService, message: MessageService, subpanelFactory: SubpanelStoreFactory, recordManager: RecordManager, statisticsBatch: StatisticsBatch, auth: AuthService, recordStoreFactory: RecordStoreFactory, preferences: UserPreferenceStore, panelLogicManager: PanelLogicManager);
    /**
     * Initial record load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @param {string} recordID to use
     * @param {string} mode to use
     * @param {object} params to set
     * @returns {object} Observable<any>
     */
    init(module: string, recordID: string, mode?: ViewMode, params?: Params): Observable<Record>;
    save(): Observable<Record>;
    /**
     * Init record using params
     *
     * @param {object} params queryParams
     */
    initRecord(params?: Params): void;
    /**
     * Load / reload record using current pagination and criteria
     *
     * @returns {object} Observable<RecordViewState>
     */
    load(): Observable<Record>;
    /**
     * Calculate if widgets are to display
     */
    protected calculateShowWidgets(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateViewStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreateViewStore>;
}
