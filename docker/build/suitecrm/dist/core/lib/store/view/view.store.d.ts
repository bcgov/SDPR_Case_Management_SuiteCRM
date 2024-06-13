import { StateStore } from '../state';
import { AppState, AppStateStore } from '../app-state/app-state.store';
import { Observable } from 'rxjs';
import { LanguageListStringMap, LanguageStore, LanguageStringMap, LanguageStrings } from '../language/language.store';
import { NavbarModule, Navigation, NavigationStore } from '../navigation/navigation.store';
import { ModuleNavigation } from '../../services/navigation/module-navigation/module-navigation.service';
import { Metadata, MetadataStore } from '../metadata/metadata.store.service';
import { SearchMeta } from 'common';
import * as i0 from "@angular/core";
export interface AppData {
    appState: AppState;
    module: NavbarModule;
    language: LanguageStrings;
    navigation: Navigation;
}
export declare class ViewStore implements StateStore {
    protected appStateStore: AppStateStore;
    protected languageStore: LanguageStore;
    protected navigationStore: NavigationStore;
    protected moduleNavigation: ModuleNavigation;
    protected metadataStore: MetadataStore;
    appState$: Observable<AppState>;
    module$: Observable<NavbarModule>;
    language$: Observable<LanguageStrings>;
    navigation$: Observable<Navigation>;
    appData$: Observable<AppData>;
    metadata$: Observable<Metadata>;
    appData: AppData;
    metadata: Metadata;
    constructor(appStateStore: AppStateStore, languageStore: LanguageStore, navigationStore: NavigationStore, moduleNavigation: ModuleNavigation, metadataStore: MetadataStore);
    clear(): void;
    clearAuthBased(): void;
    get appState(): AppState;
    get module(): NavbarModule;
    get language(): LanguageStrings;
    get appStrings(): LanguageStringMap;
    get appListStrings(): LanguageListStringMap;
    get modStrings(): LanguageListStringMap;
    get navigation(): Navigation;
    get searchMeta(): SearchMeta;
    static ɵfac: i0.ɵɵFactoryDeclaration<ViewStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ViewStore>;
}
