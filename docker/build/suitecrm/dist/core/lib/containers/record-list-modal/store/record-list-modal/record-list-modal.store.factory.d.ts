import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { RecordListModalStore } from './record-list-modal.store';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import * as i0 from "@angular/core";
export declare class RecordListModalStoreFactory {
    protected listStoreFactory: RecordListStoreFactory;
    protected metadataStore: MetadataStore;
    protected preferences: UserPreferenceStore;
    constructor(listStoreFactory: RecordListStoreFactory, metadataStore: MetadataStore, preferences: UserPreferenceStore);
    create(): RecordListModalStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordListModalStoreFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordListModalStoreFactory>;
}
