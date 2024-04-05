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

import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import {ActionDataSource, SortDirection} from 'common';
import {ListViewStore} from '../store/list-view/list-view.store';
import {MetadataStore} from '../../../store/metadata/metadata.store.service';
import {TableConfig} from '../../../components/table/table.model';
import {LineActionsAdapter} from './line-actions.adapter';
import {LineActionActionManager} from '../../../components/table/line-actions/line-action-manager.service';
import {AsyncActionService} from '../../../services/process/processes/async-action/async-action';
import {MessageService} from '../../../services/message/message.service';
import {ConfirmationModalService} from '../../../services/modals/confirmation-modal.service';
import {LanguageStore} from '../../../store/language/language.store';
import {BulkActionsAdapterFactory} from './bulk-actions.adapter.factory';
import {BulkActionsAdapter} from './bulk-actions.adapter';
import {SelectModalService} from '../../../services/modals/select-modal.service';
import {UserPreferenceStore} from "../../../store/user-preference/user-preference.store";
import {SystemConfigStore} from "../../../store/system-config/system-config.store";
import {ListviewTableActionsAdapterFactory} from "./listview-table-actions.adapter.factory";

@Injectable()
export class TableAdapter {

    constructor(
        protected store: ListViewStore,
        protected metadata: MetadataStore,
        protected actionManager: LineActionActionManager,
        protected asyncActionService: AsyncActionService,
        protected message: MessageService,
        protected confirmation: ConfirmationModalService,
        protected language: LanguageStore,
        protected bulkActionsAdapterFactory: BulkActionsAdapterFactory,
        protected listviewTableActionsAdapterFactory: ListviewTableActionsAdapterFactory,
        protected selectModalService: SelectModalService,
        protected preferences: UserPreferenceStore,
        protected systemConfigs: SystemConfigStore
    ) {
    }

    getTable(): TableConfig {
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

            toggleRecordSelection: (id: string): void => {
                this.store.recordList.toggleSelection(id);
            },

            updateSorting: (orderBy: string, sortOrder: SortDirection): void => {
                this.store.recordList.updateSorting(orderBy, sortOrder);
                this.store.updateSortLocalStorage();
            },

            maxListHeight: this.preferences.getUserPreference('listview_max_height') ?? this.systemConfigs.getConfigValue('listview_max_height'),

            loadMore: (): void => {
                const jump = this.preferences.getUserPreference('list_max_entries_per_page') ?? this.systemConfigs.getConfigValue('list_max_entries_per_page');
                const pagination = this.store.recordList.getPagination();
                const currentPageSize = pagination.pageSize || 0;
                const newPageSize = Number(currentPageSize) + Number(jump);

                this.store.recordList.setPageSize(newPageSize);
                this.store.recordList.updatePagination(pagination.current)
            },

            allLoaded: (): boolean => {
                const pagination = this.store.recordList.getPagination();

                if (!pagination) {
                    return false;
                }

                if (Number(pagination.pageLast) >= Number(pagination.total)) {
                    return true;
                }

                return Number(pagination.pageSize) >= Number(pagination.total);
            }

        } as TableConfig;
    }

    getLineActionsDataSource(): ActionDataSource {

        return new LineActionsAdapter(
            this.store,
            this.actionManager,
            this.asyncActionService,
            this.message,
            this.confirmation,
            this.language,
            this.selectModalService,
            this.metadata
        );
    }

    getBulkActionsDataSource(store: ListViewStore): BulkActionsAdapter {
        return this.bulkActionsAdapterFactory.create(store);
    }

    private getTableActions(store: ListViewStore) {
        return this.listviewTableActionsAdapterFactory.create(store);
    }
}
