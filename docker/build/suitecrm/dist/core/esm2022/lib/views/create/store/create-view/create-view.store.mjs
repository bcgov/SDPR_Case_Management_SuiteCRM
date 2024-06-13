/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021 SalesAgility Ltd.
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
import { of } from 'rxjs';
import { catchError, finalize, shareReplay, tap } from 'rxjs/operators';
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
import { RecordStoreFactory } from '../../../../store/record/record.store.factory';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { PanelLogicManager } from '../../../../components/panel-logic/panel-logic.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record/graphql/api.record.get";
import * as i2 from "../../../../store/record/graphql/api.record.save";
import * as i3 from "../../../../store/app-state/app-state.store";
import * as i4 from "../../../../store/language/language.store";
import * as i5 from "../../../../store/navigation/navigation.store";
import * as i6 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i7 from "../../../../store/metadata/metadata.store.service";
import * as i8 from "../../../../services/local-storage/local-storage.service";
import * as i9 from "../../../../services/message/message.service";
import * as i10 from "../../../../containers/subpanel/store/subpanel/subpanel.store.factory";
import * as i11 from "../../../../services/record/record.manager";
import * as i12 from "../../../../store/statistics/statistics-batch.service";
import * as i13 from "../../../../services/auth/auth.service";
import * as i14 from "../../../../store/record/record.store.factory";
import * as i15 from "../../../../store/user-preference/user-preference.store";
import * as i16 from "../../../../components/panel-logic/panel-logic.manager";
class CreateViewStore extends RecordViewStore {
    constructor(recordFetchGQL, recordSaveGQL, appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore, localStorage, message, subpanelFactory, recordManager, statisticsBatch, auth, recordStoreFactory, preferences, panelLogicManager) {
        super(recordFetchGQL, recordSaveGQL, appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore, localStorage, message, subpanelFactory, recordManager, statisticsBatch, recordStoreFactory, preferences, panelLogicManager);
        this.recordFetchGQL = recordFetchGQL;
        this.recordSaveGQL = recordSaveGQL;
        this.appStateStore = appStateStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.moduleNavigation = moduleNavigation;
        this.metadataStore = metadataStore;
        this.localStorage = localStorage;
        this.message = message;
        this.subpanelFactory = subpanelFactory;
        this.recordManager = recordManager;
        this.statisticsBatch = statisticsBatch;
        this.auth = auth;
        this.recordStoreFactory = recordStoreFactory;
        this.preferences = preferences;
        this.panelLogicManager = panelLogicManager;
    }
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
    init(module, recordID, mode = 'detail', params = {}) {
        this.internalState.module = module;
        this.internalState.recordID = recordID;
        this.setMode(mode);
        this.parseParams(params);
        this.calculateShowWidgets();
        this.showTopWidget = false;
        this.showSubpanels = false;
        const isDuplicate = this.params.isDuplicate ?? false;
        const isOriginalDuplicate = this.params.originalDuplicateId ?? false;
        if (!isDuplicate && !isOriginalDuplicate) {
            this.initRecord(params);
        }
        return this.load();
    }
    save() {
        this.appStateStore.updateLoading(`${this.internalState.module}-record-save-new`, true);
        return this.recordStore.save().pipe(catchError(() => {
            this.message.addDangerMessageByKey('LBL_ERROR_SAVING');
            return of({});
        }), finalize(() => {
            this.setMode('detail');
            this.appStateStore.updateLoading(`${this.internalState.module}-record-save-new`, false);
        }));
    }
    /**
     * Init record using params
     *
     * @param {object} params queryParams
     */
    initRecord(params = {}) {
        const user = this.auth.getCurrentUser();
        const blankRecord = {
            id: '',
            type: '',
            module: this.internalState.module,
            /* eslint-disable camelcase,@typescript-eslint/camelcase */
            attributes: {
                assigned_user_id: user.id,
                assigned_user_name: {
                    id: user.id,
                    user_name: user.userName
                },
                relate_to: params?.return_relationship,
                relate_id: params?.parent_id
            }
            /* eslint-enable camelcase,@typescript-eslint/camelcase */
        };
        this.recordManager.injectParamFields(params, blankRecord, this.getVardefs());
        this.recordStore.init(blankRecord);
    }
    /**
     * Load / reload record using current pagination and criteria
     *
     * @returns {object} Observable<RecordViewState>
     */
    load() {
        if ((this.params.isDuplicate ?? false) && (this.params.originalDuplicateId ?? false)) {
            this.updateState({
                ...this.internalState,
                loading: true
            });
            return this.recordStore.retrieveRecord(this.internalState.module, this.params.originalDuplicateId, false).pipe(tap((data) => {
                data.id = '';
                data.attributes.id = '';
                // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
                data.attributes.date_entered = '';
                this.recordManager.injectParamFields(this.params, data, this.getVardefs());
                this.recordStore.setRecord(data);
                this.updateState({
                    ...this.internalState,
                    module: data.module,
                    loading: false
                });
            }));
        }
        return of(this.recordStore.getBaseRecord()).pipe(shareReplay());
    }
    /**
     * Calculate if widgets are to display
     */
    calculateShowWidgets() {
        const show = false;
        this.showSidebarWidgets = show;
        this.widgets = show;
    }
    static { this.ɵfac = function CreateViewStore_Factory(t) { return new (t || CreateViewStore)(i0.ɵɵinject(i1.RecordFetchGQL), i0.ɵɵinject(i2.RecordSaveGQL), i0.ɵɵinject(i3.AppStateStore), i0.ɵɵinject(i4.LanguageStore), i0.ɵɵinject(i5.NavigationStore), i0.ɵɵinject(i6.ModuleNavigation), i0.ɵɵinject(i7.MetadataStore), i0.ɵɵinject(i8.LocalStorageService), i0.ɵɵinject(i9.MessageService), i0.ɵɵinject(i10.SubpanelStoreFactory), i0.ɵɵinject(i11.RecordManager), i0.ɵɵinject(i12.StatisticsBatch), i0.ɵɵinject(i13.AuthService), i0.ɵɵinject(i14.RecordStoreFactory), i0.ɵɵinject(i15.UserPreferenceStore), i0.ɵɵinject(i16.PanelLogicManager)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CreateViewStore, factory: CreateViewStore.ɵfac }); }
}
export { CreateViewStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateViewStore, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordFetchGQL }, { type: i2.RecordSaveGQL }, { type: i3.AppStateStore }, { type: i4.LanguageStore }, { type: i5.NavigationStore }, { type: i6.ModuleNavigation }, { type: i7.MetadataStore }, { type: i8.LocalStorageService }, { type: i9.MessageService }, { type: i10.SubpanelStoreFactory }, { type: i11.RecordManager }, { type: i12.StatisticsBatch }, { type: i13.AuthService }, { type: i14.RecordStoreFactory }, { type: i15.UserPreferenceStore }, { type: i16.PanelLogicManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXZpZXcuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvY3JlYXRlL3N0b3JlL2NyZWF0ZS12aWV3L2NyZWF0ZS12aWV3LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUN0RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scURBQXFELENBQUM7QUFDcEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUMvRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2RUFBNkUsQ0FBQztBQUM3RyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDaEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQzdGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVFQUF1RSxDQUFDO0FBQzNHLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFFNUUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDNUYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sd0RBQXdELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RixNQUNhLGVBQWdCLFNBQVEsZUFBZTtJQUVoRCxZQUNjLGNBQThCLEVBQzlCLGFBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLGVBQWdDLEVBQ2hDLGdCQUFrQyxFQUNsQyxhQUE0QixFQUM1QixZQUFpQyxFQUNqQyxPQUF1QixFQUN2QixlQUFxQyxFQUNyQyxhQUE0QixFQUM1QixlQUFnQyxFQUNoQyxJQUFpQixFQUNqQixrQkFBc0MsRUFDdEMsV0FBZ0MsRUFDaEMsaUJBQW9DO1FBRTlDLEtBQUssQ0FDRCxjQUFjLEVBQ2QsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsWUFBWSxFQUNaLE9BQU8sRUFDUCxlQUFlLEVBQ2YsYUFBYSxFQUNiLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsV0FBVyxFQUNYLGlCQUFpQixDQUNwQixDQUFDO1FBakNRLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsb0JBQWUsR0FBZixlQUFlLENBQXNCO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO1FBQ2hDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFtQmxELENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxJQUFJLENBQUMsTUFBYyxFQUFFLFFBQWdCLEVBQUUsT0FBTyxRQUFvQixFQUFFLFNBQWlCLEVBQUU7UUFDMUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDO1FBQ3JELE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsSUFBSSxLQUFLLENBQUM7UUFFckUsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0I7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXZGLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQy9CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDdkQsT0FBTyxFQUFFLENBQUMsRUFBWSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLEVBQ0YsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBb0IsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVGLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFVBQVUsQ0FBQyxTQUFpQixFQUFFO1FBQ2pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEMsTUFBTSxXQUFXLEdBQUc7WUFDaEIsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU07WUFDakMsMkRBQTJEO1lBQzNELFVBQVUsRUFBRTtnQkFDUixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDekIsa0JBQWtCLEVBQUU7b0JBQ2hCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtvQkFDWCxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVE7aUJBQzNCO2dCQUNELFNBQVMsRUFBRSxNQUFNLEVBQUUsbUJBQW1CO2dCQUN0QyxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVM7YUFDL0I7WUFDRCwwREFBMEQ7U0FDbkQsQ0FBQztRQUVaLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLElBQUk7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ2xGLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsR0FBRyxJQUFJLENBQUMsYUFBYTtnQkFDckIsT0FBTyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1lBRUgsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQy9CLEtBQUssQ0FDUixDQUFDLElBQUksQ0FDRixHQUFHLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtnQkFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUN4QixrRUFBa0U7Z0JBQ2xFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDM0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ2IsR0FBRyxJQUFJLENBQUMsYUFBYTtvQkFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixPQUFPLEVBQUUsS0FBSztpQkFDakIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQ0wsQ0FBQztTQUNMO1FBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7T0FFRztJQUNPLG9CQUFvQjtRQUMxQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO2dGQTFKUSxlQUFlO3VFQUFmLGVBQWUsV0FBZixlQUFlOztTQUFmLGVBQWU7dUZBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIGZpbmFsaXplLCBzaGFyZVJlcGxheSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1BhcmFtc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7U3RhdGlzdGljc0JhdGNofSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zdGF0aXN0aWNzL3N0YXRpc3RpY3MtYmF0Y2guc2VydmljZSc7XG5pbXBvcnQge1JlY29yZFZpZXdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vcmVjb3JkL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlJztcbmltcG9ydCB7UmVjb3JkRmV0Y2hHUUx9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC9ncmFwaHFsL2FwaS5yZWNvcmQuZ2V0JztcbmltcG9ydCB7UmVjb3JkU2F2ZUdRTH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkL2dyYXBocWwvYXBpLnJlY29yZC5zYXZlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7TmF2aWdhdGlvblN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc3RvcmUnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlY29yZC5tYW5hZ2VyJztcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtTdWJwYW5lbFN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9zdWJwYW5lbC9zdG9yZS9zdWJwYW5lbC9zdWJwYW5lbC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7UmVjb3JkU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQvcmVjb3JkLnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcbmltcG9ydCB7UGFuZWxMb2dpY01hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcGFuZWwtbG9naWMvcGFuZWwtbG9naWMubWFuYWdlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDcmVhdGVWaWV3U3RvcmUgZXh0ZW5kcyBSZWNvcmRWaWV3U3RvcmUge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRGZXRjaEdRTDogUmVjb3JkRmV0Y2hHUUwsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRTYXZlR1FMOiBSZWNvcmRTYXZlR1FMLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uU3RvcmU6IE5hdmlnYXRpb25TdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24sXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YVN0b3JlOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzdWJwYW5lbEZhY3Rvcnk6IFN1YnBhbmVsU3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkTWFuYWdlcjogUmVjb3JkTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIHN0YXRpc3RpY3NCYXRjaDogU3RhdGlzdGljc0JhdGNoLFxuICAgICAgICBwcm90ZWN0ZWQgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRTdG9yZUZhY3Rvcnk6IFJlY29yZFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcGFuZWxMb2dpY01hbmFnZXI6IFBhbmVsTG9naWNNYW5hZ2VyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgcmVjb3JkRmV0Y2hHUUwsXG4gICAgICAgICAgICByZWNvcmRTYXZlR1FMLFxuICAgICAgICAgICAgYXBwU3RhdGVTdG9yZSxcbiAgICAgICAgICAgIGxhbmd1YWdlU3RvcmUsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uU3RvcmUsXG4gICAgICAgICAgICBtb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICAgICAgbWV0YWRhdGFTdG9yZSxcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBzdWJwYW5lbEZhY3RvcnksXG4gICAgICAgICAgICByZWNvcmRNYW5hZ2VyLFxuICAgICAgICAgICAgc3RhdGlzdGljc0JhdGNoLFxuICAgICAgICAgICAgcmVjb3JkU3RvcmVGYWN0b3J5LFxuICAgICAgICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICAgICAgICBwYW5lbExvZ2ljTWFuYWdlclxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgcmVjb3JkIGxvYWQgaWYgbm90IGNhY2hlZCBhbmQgdXBkYXRlIHN0YXRlLlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSB0byBiZSB1c2VkIGluIHJlc29sdmVyIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjb3JkSUQgdG8gdXNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyB0byBzZXRcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdChtb2R1bGU6IHN0cmluZywgcmVjb3JkSUQ6IHN0cmluZywgbW9kZSA9ICdkZXRhaWwnIGFzIFZpZXdNb2RlLCBwYXJhbXM6IFBhcmFtcyA9IHt9KTogT2JzZXJ2YWJsZTxSZWNvcmQ+IHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLnJlY29yZElEID0gcmVjb3JkSUQ7XG4gICAgICAgIHRoaXMuc2V0TW9kZShtb2RlKTtcbiAgICAgICAgdGhpcy5wYXJzZVBhcmFtcyhwYXJhbXMpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNob3dXaWRnZXRzKCk7XG4gICAgICAgIHRoaXMuc2hvd1RvcFdpZGdldCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dTdWJwYW5lbHMgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBpc0R1cGxpY2F0ZSA9IHRoaXMucGFyYW1zLmlzRHVwbGljYXRlID8/IGZhbHNlO1xuICAgICAgICBjb25zdCBpc09yaWdpbmFsRHVwbGljYXRlID0gdGhpcy5wYXJhbXMub3JpZ2luYWxEdXBsaWNhdGVJZCA/PyBmYWxzZTtcblxuICAgICAgICBpZiAoIWlzRHVwbGljYXRlICYmICFpc09yaWdpbmFsRHVwbGljYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRSZWNvcmQocGFyYW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWQoKTtcbiAgICB9XG5cbiAgICBzYXZlKCk6IE9ic2VydmFibGU8UmVjb3JkPiB7XG4gICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVMb2FkaW5nKGAke3RoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGV9LXJlY29yZC1zYXZlLW5ld2AsIHRydWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZFN0b3JlLnNhdmUoKS5waXBlKFxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2VCeUtleSgnTEJMX0VSUk9SX1NBVklORycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZih7fSBhcyBSZWNvcmQpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNb2RlKCdkZXRhaWwnIGFzIFZpZXdNb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZyhgJHt0aGlzLmludGVybmFsU3RhdGUubW9kdWxlfS1yZWNvcmQtc2F2ZS1uZXdgLCBmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgcmVjb3JkIHVzaW5nIHBhcmFtc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyBxdWVyeVBhcmFtc1xuICAgICAqL1xuICAgIHB1YmxpYyBpbml0UmVjb3JkKHBhcmFtczogUGFyYW1zID0ge30pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdXNlciA9IHRoaXMuYXV0aC5nZXRDdXJyZW50VXNlcigpO1xuICAgICAgICBjb25zdCBibGFua1JlY29yZCA9IHtcbiAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgIHR5cGU6ICcnLFxuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlLFxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlLEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2UgKi9cbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICBhc3NpZ25lZF91c2VyX2lkOiB1c2VyLmlkLFxuICAgICAgICAgICAgICAgIGFzc2lnbmVkX3VzZXJfbmFtZToge1xuICAgICAgICAgICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9uYW1lOiB1c2VyLnVzZXJOYW1lXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZWxhdGVfdG86IHBhcmFtcz8ucmV0dXJuX3JlbGF0aW9uc2hpcCxcbiAgICAgICAgICAgICAgICByZWxhdGVfaWQ6IHBhcmFtcz8ucGFyZW50X2lkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIGNhbWVsY2FzZSxAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlICovXG4gICAgICAgIH0gYXMgUmVjb3JkO1xuXG4gICAgICAgIHRoaXMucmVjb3JkTWFuYWdlci5pbmplY3RQYXJhbUZpZWxkcyhwYXJhbXMsIGJsYW5rUmVjb3JkLCB0aGlzLmdldFZhcmRlZnMoKSk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRTdG9yZS5pbml0KGJsYW5rUmVjb3JkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIC8gcmVsb2FkIHJlY29yZCB1c2luZyBjdXJyZW50IHBhZ2luYXRpb24gYW5kIGNyaXRlcmlhXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPFJlY29yZFZpZXdTdGF0ZT5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZCgpOiBPYnNlcnZhYmxlPFJlY29yZD4ge1xuICAgICAgICBpZiAoKHRoaXMucGFyYW1zLmlzRHVwbGljYXRlID8/IGZhbHNlKSAmJiAodGhpcy5wYXJhbXMub3JpZ2luYWxEdXBsaWNhdGVJZCA/PyBmYWxzZSkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkU3RvcmUucmV0cmlldmVSZWNvcmQoXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5vcmlnaW5hbER1cGxpY2F0ZUlkLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKChkYXRhOiBSZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pZCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmF0dHJpYnV0ZXMuaWQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZSxAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXR0cmlidXRlcy5kYXRlX2VudGVyZWQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRNYW5hZ2VyLmluamVjdFBhcmFtRmllbGRzKHRoaXMucGFyYW1zLCBkYXRhLCB0aGlzLmdldFZhcmRlZnMoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkU3RvcmUuc2V0UmVjb3JkKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogZGF0YS5tb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2YodGhpcy5yZWNvcmRTdG9yZS5nZXRCYXNlUmVjb3JkKCkpLnBpcGUoc2hhcmVSZXBsYXkoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGlmIHdpZGdldHMgYXJlIHRvIGRpc3BsYXlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlU2hvd1dpZGdldHMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNob3cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93U2lkZWJhcldpZGdldHMgPSBzaG93O1xuICAgICAgICB0aGlzLndpZGdldHMgPSBzaG93O1xuICAgIH1cbn1cbiJdfQ==