import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { SingleValueStatisticsStoreFactory } from '../../../../store/single-value-statistics/single-value-statistics.store.factory';
import { LanguageStore } from '../../../../store/language/language.store';
import { SubpanelStore } from './subpanel.store';
import { FilterListStoreFactory } from "../../../../store/saved-filters/filter-list.store.factory";
import { MetadataStore } from "../../../../store/metadata/metadata.store.service";
import { UserPreferenceStore } from "../../../../store/user-preference/user-preference.store";
import * as i0 from "@angular/core";
export declare class SubpanelStoreFactory {
    protected listStoreFactory: RecordListStoreFactory;
    protected languageStore: LanguageStore;
    protected statisticsStoreFactory: SingleValueStatisticsStoreFactory;
    protected filterListStoreFactory: FilterListStoreFactory;
    protected meta: MetadataStore;
    protected preferences: UserPreferenceStore;
    constructor(listStoreFactory: RecordListStoreFactory, languageStore: LanguageStore, statisticsStoreFactory: SingleValueStatisticsStoreFactory, filterListStoreFactory: FilterListStoreFactory, meta: MetadataStore, preferences: UserPreferenceStore);
    create(): SubpanelStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelStoreFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SubpanelStoreFactory>;
}
