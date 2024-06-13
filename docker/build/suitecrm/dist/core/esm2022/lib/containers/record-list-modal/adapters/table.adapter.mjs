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
import { map } from 'rxjs/operators';
export class ModalRecordListTableAdapter {
    constructor(systemConfigs, preferences) {
        this.systemConfigs = systemConfigs;
        this.preferences = preferences;
    }
    /**
     * Get table config
     *
     * @param {object} store to use
     * @param {boolean} multiSelect
     * @returns {object} TableConfig
     */
    getTable(store, multiSelect = false) {
        const config = {
            showHeader: true,
            showFooter: true,
            klass: 'light-table',
            module: store.recordList.getModule(),
            columns: store.columns$.pipe(map(columns => this.mapColumns(store, columns))),
            sort$: store.recordList.sort$,
            maxColumns$: of(5),
            loading$: store.recordList.loading$,
            dataSource: store.recordList,
            pagination: store.recordList,
            toggleRecordSelection: (id) => {
                store.recordList.toggleSelection(id);
            },
            updateSorting: (orderBy, sortOrder) => {
                store.recordList.updateSorting(orderBy, sortOrder);
                store.saveCurrentSort();
            },
            maxListHeight: this.preferences.getUserPreference('record_modal_max_height') ?? this.systemConfigs.getConfigValue('record_modal_max_height'),
            paginationType: this.preferences.getUserPreference('record_modal_pagination_type') ?? this.systemConfigs.getConfigValue('record_modal_pagination_type'),
            loadMore: () => {
                const jump = this.preferences.getUserPreference('list_max_entries_per_modal') ?? this.systemConfigs.getConfigValue('list_max_entries_per_modal');
                const pagination = store.recordList.getPagination();
                const currentPageSize = pagination.pageSize || 0;
                const newPageSize = Number(currentPageSize) + Number(jump);
                store.recordList.setPageSize(newPageSize);
                store.recordList.updatePagination(pagination.current);
            },
            allLoaded: () => {
                const pagination = store.recordList.getPagination();
                if (!pagination) {
                    return false;
                }
                if (Number(pagination.pageLast) >= Number(pagination.total)) {
                    return true;
                }
                return Number(pagination.pageSize) >= Number(pagination.total);
            }
        };
        if (multiSelect) {
            config.selection$ = store.recordList.selection$;
            config.selectedCount$ = store.recordList.selectedCount$;
            config.selectedStatus$ = store.recordList.selectedStatus$;
        }
        return config;
    }
    /**
     * Parse and override column definitions
     *
     * @param {object} store to use
     * @param {[]} columns to map
     * @returns {[]} ColumnDefinition[]
     */
    mapColumns(store, columns) {
        const mappedColumns = [];
        columns.forEach(column => {
            const mapped = { ...column };
            const metadata = column.metadata || {};
            mapped.metadata = { ...metadata };
            this.disableRelateFieldsLink(mapped);
            this.addLinkSelectHandler(store, mapped);
            mappedColumns.push(mapped);
        });
        return mappedColumns;
    }
    /**
     * Disable link for relate fields
     *
     * @param {object} definition to update
     */
    disableRelateFieldsLink(definition) {
        if (definition.type !== 'relate') {
            return;
        }
        definition.link = false;
        definition.metadata.link = false;
    }
    /**
     * Add onClick handler for link fields
     *
     * @param {object} store to use
     * @param {object} definition to update
     */
    addLinkSelectHandler(store, definition) {
        if (!definition.link) {
            return;
        }
        definition.metadata.onClick = (field, record) => {
            store.recordList.clearSelection();
            store.recordList.toggleSelection(record.id);
            store.emitLinkClicked();
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC1saXN0LW1vZGFsL2FkYXB0ZXJzL3RhYmxlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFeEIsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT25DLE1BQU0sT0FBTywyQkFBMkI7SUFFcEMsWUFDYyxhQUFnQyxFQUNoQyxXQUFnQztRQURoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO0lBRTlDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxRQUFRLENBQUMsS0FBMkIsRUFBRSxjQUF1QixLQUFLO1FBQzlELE1BQU0sTUFBTSxHQUFHO1lBQ1gsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsS0FBSyxFQUFFLGFBQWE7WUFDcEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBRXBDLE9BQU8sRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzdFLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUs7WUFDN0IsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUVuQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsVUFBVSxFQUFFLEtB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QU0sQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFekMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sYUFBYSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sdUJBQXVCLENBQUMsVUFBNEI7UUFDMUQsSUFBSSxVQUFVLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM5QixPQUFPO1NBQ1Y7UUFDRCxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN4QixVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ08sb0JBQW9CLENBQUMsS0FBMkIsRUFBRSxVQUE0QjtRQUNwRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPO1NBQ1Y7UUFFRCxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQVksRUFBRSxNQUFjLEVBQVEsRUFBRTtZQUNqRSxLQUFLLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge29mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Q29sdW1uRGVmaW5pdGlvbiwgRmllbGQsIFJlY29yZCwgU29ydERpcmVjdGlvbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1JlY29yZExpc3RNb2RhbFRhYmxlQWRhcHRlckludGVyZmFjZX0gZnJvbSAnLi9hZGFwdGVyLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkTGlzdE1vZGFsU3RvcmV9IGZyb20gJy4uL3N0b3JlL3JlY29yZC1saXN0LW1vZGFsL3JlY29yZC1saXN0LW1vZGFsLnN0b3JlJztcbmltcG9ydCB7VGFibGVDb25maWd9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kZWwnO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZVwiO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZVwiO1xuXG5leHBvcnQgY2xhc3MgTW9kYWxSZWNvcmRMaXN0VGFibGVBZGFwdGVyIGltcGxlbWVudHMgUmVjb3JkTGlzdE1vZGFsVGFibGVBZGFwdGVySW50ZXJmYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZVxuICAgICl7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRhYmxlIGNvbmZpZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0b3JlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbXVsdGlTZWxlY3RcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBUYWJsZUNvbmZpZ1xuICAgICAqL1xuICAgIGdldFRhYmxlKHN0b3JlOiBSZWNvcmRMaXN0TW9kYWxTdG9yZSwgbXVsdGlTZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZSk6IFRhYmxlQ29uZmlnIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgc2hvd0hlYWRlcjogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dGb290ZXI6IHRydWUsXG4gICAgICAgICAgICBrbGFzczogJ2xpZ2h0LXRhYmxlJyxcbiAgICAgICAgICAgIG1vZHVsZTogc3RvcmUucmVjb3JkTGlzdC5nZXRNb2R1bGUoKSxcblxuICAgICAgICAgICAgY29sdW1uczogc3RvcmUuY29sdW1ucyQucGlwZShtYXAoY29sdW1ucyA9PiB0aGlzLm1hcENvbHVtbnMoc3RvcmUsIGNvbHVtbnMpKSksXG4gICAgICAgICAgICBzb3J0JDogc3RvcmUucmVjb3JkTGlzdC5zb3J0JCxcbiAgICAgICAgICAgIG1heENvbHVtbnMkOiBvZig1KSxcbiAgICAgICAgICAgIGxvYWRpbmckOiBzdG9yZS5yZWNvcmRMaXN0LmxvYWRpbmckLFxuXG4gICAgICAgICAgICBkYXRhU291cmNlOiBzdG9yZS5yZWNvcmRMaXN0LFxuICAgICAgICAgICAgcGFnaW5hdGlvbjogc3RvcmUucmVjb3JkTGlzdCxcblxuICAgICAgICAgICAgdG9nZ2xlUmVjb3JkU2VsZWN0aW9uOiAoaWQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHN0b3JlLnJlY29yZExpc3QudG9nZ2xlU2VsZWN0aW9uKGlkKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHVwZGF0ZVNvcnRpbmc6IChvcmRlckJ5OiBzdHJpbmcsIHNvcnRPcmRlcjogU29ydERpcmVjdGlvbik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHN0b3JlLnJlY29yZExpc3QudXBkYXRlU29ydGluZyhvcmRlckJ5LCBzb3J0T3JkZXIpO1xuICAgICAgICAgICAgICAgIHN0b3JlLnNhdmVDdXJyZW50U29ydCgpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbWF4TGlzdEhlaWdodDogdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgncmVjb3JkX21vZGFsX21heF9oZWlnaHQnKSA/PyB0aGlzLnN5c3RlbUNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ3JlY29yZF9tb2RhbF9tYXhfaGVpZ2h0JyksXG5cbiAgICAgICAgICAgIHBhZ2luYXRpb25UeXBlOiB0aGlzLnByZWZlcmVuY2VzLmdldFVzZXJQcmVmZXJlbmNlKCdyZWNvcmRfbW9kYWxfcGFnaW5hdGlvbl90eXBlJykgPz8gdGhpcy5zeXN0ZW1Db25maWdzLmdldENvbmZpZ1ZhbHVlKCdyZWNvcmRfbW9kYWxfcGFnaW5hdGlvbl90eXBlJyksXG5cbiAgICAgICAgICAgIGxvYWRNb3JlOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QganVtcCA9IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ2xpc3RfbWF4X2VudHJpZXNfcGVyX21vZGFsJykgPz8gdGhpcy5zeXN0ZW1Db25maWdzLmdldENvbmZpZ1ZhbHVlKCdsaXN0X21heF9lbnRyaWVzX3Blcl9tb2RhbCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBzdG9yZS5yZWNvcmRMaXN0LmdldFBhZ2luYXRpb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZVNpemUgPSBwYWdpbmF0aW9uLnBhZ2VTaXplIHx8IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UGFnZVNpemUgPSBOdW1iZXIoY3VycmVudFBhZ2VTaXplKSArIE51bWJlcihqdW1wKTtcblxuXG4gICAgICAgICAgICAgICAgc3RvcmUucmVjb3JkTGlzdC5zZXRQYWdlU2l6ZShuZXdQYWdlU2l6ZSk7XG4gICAgICAgICAgICAgICAgc3RvcmUucmVjb3JkTGlzdC51cGRhdGVQYWdpbmF0aW9uKHBhZ2luYXRpb24uY3VycmVudCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhbGxMb2FkZWQ6ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uID0gc3RvcmUucmVjb3JkTGlzdC5nZXRQYWdpbmF0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIocGFnaW5hdGlvbi5wYWdlTGFzdCkgPj0gTnVtYmVyKHBhZ2luYXRpb24udG90YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIocGFnaW5hdGlvbi5wYWdlU2l6ZSkgPj0gTnVtYmVyKHBhZ2luYXRpb24udG90YWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gYXMgVGFibGVDb25maWc7XG5cblxuICAgICAgICBpZiAobXVsdGlTZWxlY3Qpe1xuICAgICAgICAgICAgY29uZmlnLnNlbGVjdGlvbiQgPSBzdG9yZS5yZWNvcmRMaXN0LnNlbGVjdGlvbiQ7XG4gICAgICAgICAgICBjb25maWcuc2VsZWN0ZWRDb3VudCQgPSBzdG9yZS5yZWNvcmRMaXN0LnNlbGVjdGVkQ291bnQkO1xuICAgICAgICAgICAgY29uZmlnLnNlbGVjdGVkU3RhdHVzJCA9IHN0b3JlLnJlY29yZExpc3Quc2VsZWN0ZWRTdGF0dXMkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBhbmQgb3ZlcnJpZGUgY29sdW1uIGRlZmluaXRpb25zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RvcmUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtbXX0gY29sdW1ucyB0byBtYXBcbiAgICAgKiBAcmV0dXJucyB7W119IENvbHVtbkRlZmluaXRpb25bXVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBtYXBDb2x1bW5zKHN0b3JlOiBSZWNvcmRMaXN0TW9kYWxTdG9yZSwgY29sdW1uczogQ29sdW1uRGVmaW5pdGlvbltdKTogQ29sdW1uRGVmaW5pdGlvbltdIHtcbiAgICAgICAgY29uc3QgbWFwcGVkQ29sdW1ucyA9IFtdO1xuXG4gICAgICAgIGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFwcGVkID0gey4uLmNvbHVtbn07XG4gICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGNvbHVtbi5tZXRhZGF0YSB8fCB7fTtcbiAgICAgICAgICAgIG1hcHBlZC5tZXRhZGF0YSA9IHsuLi5tZXRhZGF0YX07XG5cbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZVJlbGF0ZUZpZWxkc0xpbmsobWFwcGVkKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTGlua1NlbGVjdEhhbmRsZXIoc3RvcmUsIG1hcHBlZCk7XG5cbiAgICAgICAgICAgIG1hcHBlZENvbHVtbnMucHVzaChtYXBwZWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWFwcGVkQ29sdW1ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIGxpbmsgZm9yIHJlbGF0ZSBmaWVsZHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkZWZpbml0aW9uIHRvIHVwZGF0ZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBkaXNhYmxlUmVsYXRlRmllbGRzTGluayhkZWZpbml0aW9uOiBDb2x1bW5EZWZpbml0aW9uKTogdm9pZCB7XG4gICAgICAgIGlmIChkZWZpbml0aW9uLnR5cGUgIT09ICdyZWxhdGUnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGVmaW5pdGlvbi5saW5rID0gZmFsc2U7XG4gICAgICAgIGRlZmluaXRpb24ubWV0YWRhdGEubGluayA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBvbkNsaWNrIGhhbmRsZXIgZm9yIGxpbmsgZmllbGRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RvcmUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRlZmluaXRpb24gdG8gdXBkYXRlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZExpbmtTZWxlY3RIYW5kbGVyKHN0b3JlOiBSZWNvcmRMaXN0TW9kYWxTdG9yZSwgZGVmaW5pdGlvbjogQ29sdW1uRGVmaW5pdGlvbik6IHZvaWQge1xuICAgICAgICBpZiAoIWRlZmluaXRpb24ubGluaykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmaW5pdGlvbi5tZXRhZGF0YS5vbkNsaWNrID0gKGZpZWxkOiBGaWVsZCwgcmVjb3JkOiBSZWNvcmQpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHN0b3JlLnJlY29yZExpc3QuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIHN0b3JlLnJlY29yZExpc3QudG9nZ2xlU2VsZWN0aW9uKHJlY29yZC5pZCk7XG4gICAgICAgICAgICBzdG9yZS5lbWl0TGlua0NsaWNrZWQoKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=