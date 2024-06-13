import { StringMap } from 'common';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { RecordListStore } from '../record-list/record-list.store';
import { SavedFilter, SavedFilterList } from './saved-filter.model';
import { ModuleNameMapper } from '../../services/navigation/module-name-mapper/module-name-mapper.service';
import { SystemConfigStore } from '../system-config/system-config.store';
import { UserPreferenceStore } from '../user-preference/user-preference.store';
import { LanguageStore } from '../language/language.store';
import { MessageService } from '../../services/message/message.service';
import { FiltersListGQL } from './graphql/api.list.get';
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import * as i0 from "@angular/core";
export declare class FilterListStore extends RecordListStore {
    protected listGQL: FiltersListGQL;
    protected configs: SystemConfigStore;
    protected preferences: UserPreferenceStore;
    protected language: LanguageStore;
    protected message: MessageService;
    protected auth: AuthService;
    protected moduleNameMapper: ModuleNameMapper;
    protected localStorageService: LocalStorageService;
    records$: Observable<SavedFilter[]>;
    protected moduleName: string;
    protected filterFields: StringMap;
    /**
     * Constructor
     * @param listGQL
     * @param configs
     * @param preferences
     * @param language
     * @param message
     * @param auth
     * @param moduleNameMapper
     * @param localStorageService
     */
    constructor(listGQL: FiltersListGQL, configs: SystemConfigStore, preferences: UserPreferenceStore, language: LanguageStore, message: MessageService, auth: AuthService, moduleNameMapper: ModuleNameMapper, localStorageService: LocalStorageService);
    /**
     * Initialize store
     * @param module
     */
    init(module: string): Observable<SavedFilterList>;
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordList>
     */
    load(useCache?: boolean): Observable<SavedFilterList>;
    /**
     * Get current list of saved filters
     */
    getFilters(): SavedFilter[];
    /**
     * Add new filter to list
     * @param filter
     */
    addFilter(filter: SavedFilter): void;
    /**
     * Remove existing filter
     * @param filter
     */
    removeFilter(filter: SavedFilter): void;
    /**
     * Initialize criteria
     * @param module
     */
    protected initCriteria(module: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterListStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FilterListStore>;
}
