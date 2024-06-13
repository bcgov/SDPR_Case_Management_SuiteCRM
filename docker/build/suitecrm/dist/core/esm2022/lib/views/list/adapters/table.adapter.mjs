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
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListViewStore } from '../store/list-view/list-view.store';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { LineActionsAdapter } from './line-actions.adapter';
import { LineActionActionManager } from '../../../components/table/line-actions/line-action-manager.service';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { LanguageStore } from '../../../store/language/language.store';
import { BulkActionsAdapterFactory } from './bulk-actions.adapter.factory';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { UserPreferenceStore } from "../../../store/user-preference/user-preference.store";
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import { ListviewTableActionsAdapterFactory } from "./listview-table-actions.adapter.factory";
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
import * as i3 from "../../../components/table/line-actions/line-action-manager.service";
import * as i4 from "../../../services/process/processes/async-action/async-action";
import * as i5 from "../../../services/message/message.service";
import * as i6 from "../../../services/modals/confirmation-modal.service";
import * as i7 from "../../../store/language/language.store";
import * as i8 from "./bulk-actions.adapter.factory";
import * as i9 from "./listview-table-actions.adapter.factory";
import * as i10 from "../../../services/modals/select-modal.service";
import * as i11 from "../../../store/user-preference/user-preference.store";
import * as i12 from "../../../store/system-config/system-config.store";
import * as i13 from "../../../store/app-metadata/app-metadata.store.service";
class TableAdapter {
    constructor(store, metadata, actionManager, asyncActionService, message, confirmation, language, bulkActionsAdapterFactory, listviewTableActionsAdapterFactory, selectModalService, preferences, systemConfigs, appMetadataStore) {
        this.store = store;
        this.metadata = metadata;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.language = language;
        this.bulkActionsAdapterFactory = bulkActionsAdapterFactory;
        this.listviewTableActionsAdapterFactory = listviewTableActionsAdapterFactory;
        this.selectModalService = selectModalService;
        this.preferences = preferences;
        this.systemConfigs = systemConfigs;
        this.appMetadataStore = appMetadataStore;
    }
    getTable() {
        return {
            showHeader: true,
            showFooter: true,
            module: this.store.getModuleName(),
            columns: this.store.columns$,
            lineActions: this.getLineActionsDataSource(),
            selection$: this.store.selection$,
            sort$: this.store.sort$,
            maxColumns$: of(4),
            loading$: this.store.recordList.loading$,
            dataSource: this.store.recordList,
            selection: this.store.recordList,
            bulkActions: this.getBulkActionsDataSource(this.store),
            tableActions: this.getTableActions(this.store),
            pagination: this.store.recordList,
            paginationType: this.preferences.getUserPreference('listview_pagination_type') ?? this.systemConfigs.getConfigValue('listview_pagination_type'),
            toggleRecordSelection: (id) => {
                this.store.recordList.toggleSelection(id);
            },
            updateSorting: (orderBy, sortOrder) => {
                this.store.recordList.updateSorting(orderBy, sortOrder);
                this.store.updateSortLocalStorage();
            },
            maxListHeight: this.preferences.getUserPreference('listview_max_height') ?? this.systemConfigs.getConfigValue('listview_max_height'),
            loadMore: () => {
                const jump = this.preferences.getUserPreference('list_max_entries_per_page') ?? this.systemConfigs.getConfigValue('list_max_entries_per_page');
                const pagination = this.store.recordList.getPagination();
                const currentPageSize = pagination.pageSize || 0;
                const newPageSize = Number(currentPageSize) + Number(jump);
                this.store.recordList.setPageSize(newPageSize);
                this.store.recordList.updatePagination(pagination.current);
            },
            allLoaded: () => {
                const pagination = this.store.recordList.getPagination();
                if (!pagination) {
                    return false;
                }
                if (Number(pagination.pageLast) >= Number(pagination.total)) {
                    return true;
                }
                return Number(pagination.pageSize) >= Number(pagination.total);
            }
        };
    }
    getLineActionsDataSource() {
        return new LineActionsAdapter(this.store, this.actionManager, this.asyncActionService, this.message, this.confirmation, this.language, this.selectModalService, this.metadata, this.appMetadataStore);
    }
    getBulkActionsDataSource(store) {
        return this.bulkActionsAdapterFactory.create(store);
    }
    getTableActions(store) {
        return this.listviewTableActionsAdapterFactory.create(store);
    }
    static { this.ɵfac = function TableAdapter_Factory(t) { return new (t || TableAdapter)(i0.ɵɵinject(i1.ListViewStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.LineActionActionManager), i0.ɵɵinject(i4.AsyncActionService), i0.ɵɵinject(i5.MessageService), i0.ɵɵinject(i6.ConfirmationModalService), i0.ɵɵinject(i7.LanguageStore), i0.ɵɵinject(i8.BulkActionsAdapterFactory), i0.ɵɵinject(i9.ListviewTableActionsAdapterFactory), i0.ɵɵinject(i10.SelectModalService), i0.ɵɵinject(i11.UserPreferenceStore), i0.ɵɵinject(i12.SystemConfigStore), i0.ɵɵinject(i13.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TableAdapter, factory: TableAdapter.ɵfac }); }
}
export { TableAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.MetadataStore }, { type: i3.LineActionActionManager }, { type: i4.AsyncActionService }, { type: i5.MessageService }, { type: i6.ConfirmationModalService }, { type: i7.LanguageStore }, { type: i8.BulkActionsAdapterFactory }, { type: i9.ListviewTableActionsAdapterFactory }, { type: i10.SelectModalService }, { type: i11.UserPreferenceStore }, { type: i12.SystemConfigStore }, { type: i13.AppMetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9saXN0L2FkYXB0ZXJzL3RhYmxlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDeEIsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDakUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBRTdFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG9FQUFvRSxDQUFDO0FBQzNHLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM3RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDckUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFFekUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sc0RBQXNELENBQUM7QUFDekYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDbkYsT0FBTyxFQUFDLGtDQUFrQyxFQUFDLE1BQU0sMENBQTBDLENBQUM7QUFDNUYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0RB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QUFJLENBQUMsa0JBQWtCLEVBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUN4QixDQUFDO0lBQ04sQ0FBQztJQUVELHdCQUF3QixDQUFDLEtBQW9CO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU8sZUFBZSxDQUFDLEtBQW9CO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGtDQUFrQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRSxDQUFDOzZFQXBHUSxZQUFZO3VFQUFaLFlBQVksV0FBWixZQUFZOztTQUFaLFlBQVk7dUZBQVosWUFBWTtjQUR4QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge29mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGlvbkRhdGFTb3VyY2UsIFNvcnREaXJlY3Rpb259IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0xpc3RWaWV3U3RvcmV9IGZyb20gJy4uL3N0b3JlL2xpc3Qtdmlldy9saXN0LXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7VGFibGVDb25maWd9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kZWwnO1xuaW1wb3J0IHtMaW5lQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4vbGluZS1hY3Rpb25zLmFkYXB0ZXInO1xuaW1wb3J0IHtMaW5lQWN0aW9uQWN0aW9uTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90YWJsZS9saW5lLWFjdGlvbnMvbGluZS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7QXN5bmNBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7Q29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvY29uZmlybWF0aW9uLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0J1bGtBY3Rpb25zQWRhcHRlckZhY3Rvcnl9IGZyb20gJy4vYnVsay1hY3Rpb25zLmFkYXB0ZXIuZmFjdG9yeSc7XG5pbXBvcnQge0J1bGtBY3Rpb25zQWRhcHRlcn0gZnJvbSAnLi9idWxrLWFjdGlvbnMuYWRhcHRlcic7XG5pbXBvcnQge1NlbGVjdE1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL3NlbGVjdC1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmVcIjtcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmVcIjtcbmltcG9ydCB7TGlzdHZpZXdUYWJsZUFjdGlvbnNBZGFwdGVyRmFjdG9yeX0gZnJvbSBcIi4vbGlzdHZpZXctdGFibGUtYWN0aW9ucy5hZGFwdGVyLmZhY3RvcnlcIjtcbmltcG9ydCB7QXBwTWV0YWRhdGFTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2FwcC1tZXRhZGF0YS9hcHAtbWV0YWRhdGEuc3RvcmUuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGFibGVBZGFwdGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IExpc3RWaWV3U3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbk1hbmFnZXI6IExpbmVBY3Rpb25BY3Rpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBidWxrQWN0aW9uc0FkYXB0ZXJGYWN0b3J5OiBCdWxrQWN0aW9uc0FkYXB0ZXJGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdHZpZXdUYWJsZUFjdGlvbnNBZGFwdGVyRmFjdG9yeTogTGlzdHZpZXdUYWJsZUFjdGlvbnNBZGFwdGVyRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIHNlbGVjdE1vZGFsU2VydmljZTogU2VsZWN0TW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdzOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFwcE1ldGFkYXRhU3RvcmU6IEFwcE1ldGFkYXRhU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBnZXRUYWJsZSgpOiBUYWJsZUNvbmZpZyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93SGVhZGVyOiB0cnVlLFxuICAgICAgICAgICAgc2hvd0Zvb3RlcjogdHJ1ZSxcblxuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLnN0b3JlLmdldE1vZHVsZU5hbWUoKSxcblxuICAgICAgICAgICAgY29sdW1uczogdGhpcy5zdG9yZS5jb2x1bW5zJCxcbiAgICAgICAgICAgIGxpbmVBY3Rpb25zOiB0aGlzLmdldExpbmVBY3Rpb25zRGF0YVNvdXJjZSgpLFxuICAgICAgICAgICAgc2VsZWN0aW9uJDogdGhpcy5zdG9yZS5zZWxlY3Rpb24kLFxuICAgICAgICAgICAgc29ydCQ6IHRoaXMuc3RvcmUuc29ydCQsXG4gICAgICAgICAgICBtYXhDb2x1bW5zJDogb2YoNCksXG4gICAgICAgICAgICBsb2FkaW5nJDogdGhpcy5zdG9yZS5yZWNvcmRMaXN0LmxvYWRpbmckLFxuXG4gICAgICAgICAgICBkYXRhU291cmNlOiB0aGlzLnN0b3JlLnJlY29yZExpc3QsXG4gICAgICAgICAgICBzZWxlY3Rpb246IHRoaXMuc3RvcmUucmVjb3JkTGlzdCxcbiAgICAgICAgICAgIGJ1bGtBY3Rpb25zOiB0aGlzLmdldEJ1bGtBY3Rpb25zRGF0YVNvdXJjZSh0aGlzLnN0b3JlKSxcbiAgICAgICAgICAgIHRhYmxlQWN0aW9uczogdGhpcy5nZXRUYWJsZUFjdGlvbnModGhpcy5zdG9yZSksXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB0aGlzLnN0b3JlLnJlY29yZExpc3QsXG5cbiAgICAgICAgICAgIHBhZ2luYXRpb25UeXBlOiB0aGlzLnByZWZlcmVuY2VzLmdldFVzZXJQcmVmZXJlbmNlKCdsaXN0dmlld19wYWdpbmF0aW9uX3R5cGUnKSA/PyB0aGlzLnN5c3RlbUNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ2xpc3R2aWV3X3BhZ2luYXRpb25fdHlwZScpLFxuXG4gICAgICAgICAgICB0b2dnbGVSZWNvcmRTZWxlY3Rpb246IChpZDogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5yZWNvcmRMaXN0LnRvZ2dsZVNlbGVjdGlvbihpZCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB1cGRhdGVTb3J0aW5nOiAob3JkZXJCeTogc3RyaW5nLCBzb3J0T3JkZXI6IFNvcnREaXJlY3Rpb24pOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnJlY29yZExpc3QudXBkYXRlU29ydGluZyhvcmRlckJ5LCBzb3J0T3JkZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUudXBkYXRlU29ydExvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbWF4TGlzdEhlaWdodDogdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgnbGlzdHZpZXdfbWF4X2hlaWdodCcpID8/IHRoaXMuc3lzdGVtQ29uZmlncy5nZXRDb25maWdWYWx1ZSgnbGlzdHZpZXdfbWF4X2hlaWdodCcpLFxuXG4gICAgICAgICAgICBsb2FkTW9yZTogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGp1bXAgPSB0aGlzLnByZWZlcmVuY2VzLmdldFVzZXJQcmVmZXJlbmNlKCdsaXN0X21heF9lbnRyaWVzX3Blcl9wYWdlJykgPz8gdGhpcy5zeXN0ZW1Db25maWdzLmdldENvbmZpZ1ZhbHVlKCdsaXN0X21heF9lbnRyaWVzX3Blcl9wYWdlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5nZXRQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFBhZ2VTaXplID0gcGFnaW5hdGlvbi5wYWdlU2l6ZSB8fCAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BhZ2VTaXplID0gTnVtYmVyKGN1cnJlbnRQYWdlU2l6ZSkgKyBOdW1iZXIoanVtcCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnJlY29yZExpc3Quc2V0UGFnZVNpemUobmV3UGFnZVNpemUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC51cGRhdGVQYWdpbmF0aW9uKHBhZ2luYXRpb24uY3VycmVudClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGFsbExvYWRlZDogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSB0aGlzLnN0b3JlLnJlY29yZExpc3QuZ2V0UGFnaW5hdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFwYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHBhZ2luYXRpb24ucGFnZUxhc3QpID49IE51bWJlcihwYWdpbmF0aW9uLnRvdGFsKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKHBhZ2luYXRpb24ucGFnZVNpemUpID49IE51bWJlcihwYWdpbmF0aW9uLnRvdGFsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGFzIFRhYmxlQ29uZmlnO1xuICAgIH1cblxuICAgIGdldExpbmVBY3Rpb25zRGF0YVNvdXJjZSgpOiBBY3Rpb25EYXRhU291cmNlIHtcblxuICAgICAgICByZXR1cm4gbmV3IExpbmVBY3Rpb25zQWRhcHRlcihcbiAgICAgICAgICAgIHRoaXMuc3RvcmUsXG4gICAgICAgICAgICB0aGlzLmFjdGlvbk1hbmFnZXIsXG4gICAgICAgICAgICB0aGlzLmFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZSxcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgdGhpcy5tZXRhZGF0YSxcbiAgICAgICAgICAgIHRoaXMuYXBwTWV0YWRhdGFTdG9yZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldEJ1bGtBY3Rpb25zRGF0YVNvdXJjZShzdG9yZTogTGlzdFZpZXdTdG9yZSk6IEJ1bGtBY3Rpb25zQWRhcHRlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1bGtBY3Rpb25zQWRhcHRlckZhY3RvcnkuY3JlYXRlKHN0b3JlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFRhYmxlQWN0aW9ucyhzdG9yZTogTGlzdFZpZXdTdG9yZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0dmlld1RhYmxlQWN0aW9uc0FkYXB0ZXJGYWN0b3J5LmNyZWF0ZShzdG9yZSk7XG4gICAgfVxufVxuIl19