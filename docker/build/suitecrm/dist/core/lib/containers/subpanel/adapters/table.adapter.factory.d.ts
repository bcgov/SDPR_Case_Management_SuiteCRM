import { SubpanelStore } from '../store/subpanel/subpanel.store';
import { SubpanelTableAdapter } from './table.adapter';
import { SubpanelLineActionsAdapterFactory } from './line-actions.adapter.factory';
import { UserPreferenceStore } from '../../../store/user-preference/user-preference.store';
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
export declare class SubpanelTableAdapterFactory {
    protected lineActionsAdapterFactory: SubpanelLineActionsAdapterFactory;
    protected preferences: UserPreferenceStore;
    protected systemConfigs: SystemConfigStore;
    constructor(lineActionsAdapterFactory: SubpanelLineActionsAdapterFactory, preferences: UserPreferenceStore, systemConfigs: SystemConfigStore);
    create(store: SubpanelStore): SubpanelTableAdapter;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelTableAdapterFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SubpanelTableAdapterFactory>;
}
