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
import { isFalse } from 'common';
import { map, take } from 'rxjs/operators';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { ListViewStore } from '../store/list-view/list-view.store';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
import * as i2 from "../../../services/message/message.service";
import * as i3 from "../../../services/modals/confirmation-modal.service";
import * as i4 from "../../../services/modals/select-modal.service";
import * as i5 from "../../../services/process/processes/async-action/async-action";
import * as i6 from "../../../store/metadata/metadata.store.service";
import * as i7 from "../../../store/app-metadata/app-metadata.store.service";
class BulkActionsAdapter {
    constructor(store, message, confirmation, selectModalService, asyncAction, metadata, appMetadataStore) {
        this.store = store;
        this.message = message;
        this.confirmation = confirmation;
        this.selectModalService = selectModalService;
        this.asyncAction = asyncAction;
        this.metadata = metadata;
        this.appMetadataStore = appMetadataStore;
    }
    /**
     * Get bulk action
     * @returns {object} Observable<BulkActionsMap>
     */
    getBulkActions() {
        return this.store.metadata$.pipe(map((metadata) => metadata.listView.bulkActions));
    }
    /**
     * Execute bulk actions
     * @param {string} action
     */
    executeBulkAction(action) {
        const selection = this.store.recordList.selection;
        const definition = this.store.metadata.listView.bulkActions[action];
        const actionName = `bulk-${action}`;
        this.message.removeMessages();
        if (isFalse(definition.params.allowAll) && selection.all) {
            let message = this.store.appStrings.LBL_SELECT_ALL_NOT_ALLOWED;
            this.message.addDangerMessage(message);
            return;
        }
        if (definition.params.min && selection.count < definition.params.min) {
            let message = this.store.appStrings.LBL_TOO_FEW_SELECTED;
            message = message.replace('{min}', definition.params.min);
            this.message.addDangerMessage(message);
            return;
        }
        if (definition.params.max && selection.count > definition.params.max) {
            let message = this.store.appStrings.LBL_TOO_MANY_SELECTED;
            message = message.replace('{max}', definition.params.max);
            this.message.addDangerMessage(message);
            return;
        }
        const displayedFields = [];
        this.store.metadata.listView.fields.forEach(value => {
            displayedFields.push(value.name);
        });
        const data = {
            action: actionName,
            module: this.store.getModuleName(),
            criteria: null,
            sort: null,
            ids: null,
            fields: displayedFields
        };
        if (selection.all && selection.count > this.store.recordList.records.length) {
            data.criteria = this.store.recordList.criteria;
            data.sort = this.store.recordList.sort;
        }
        if (selection.all && selection.count <= this.store.recordList.records.length) {
            data.ids = [];
            this.store.recordList.records.forEach(record => {
                data.ids.push(record.id);
            });
        }
        if (!selection.all) {
            data.ids = Object.keys(selection.selected);
        }
        const params = (definition && definition.params) || {};
        const displayConfirmation = params.displayConfirmation || false;
        const confirmationLabel = params.confirmationLabel || '';
        const selectModal = definition.params && definition.params.selectModal;
        const selectModule = selectModal && selectModal.module;
        const recordPanel = definition.params && definition.params.recordPanel;
        if (recordPanel) {
            this.store.openRecordPanel(recordPanel);
            return;
        }
        if (displayConfirmation) {
            this.confirmation.showModal(confirmationLabel, () => {
                if (!selectModule) {
                    this.runBulkAction(actionName, data);
                    return;
                }
                this.showSelectModal(selectModal.module, actionName, data);
            });
            return;
        }
        if (!selectModule) {
            this.runBulkAction(actionName, data);
            return;
        }
        this.showSelectModal(selectModal.module, actionName, data);
    }
    /**
     * Run async buk action
     *
     * @returns void
     * @param {string} selectModule: module for which records are listed in Select Modal/Popup
     * @param {string} asyncAction: bulk action name
     * @param {AsyncActionInput} asyncData: data passed to the async process
     */
    showSelectModal(selectModule, asyncAction, asyncData) {
        this.selectModalService.showSelectModal(selectModule, (modalRecord) => {
            if (modalRecord) {
                const { fields, formGroup, ...baseRecord } = modalRecord;
                asyncData.modalRecord = baseRecord;
            }
            this.runBulkAction(asyncAction, asyncData);
        });
    }
    /**
     * Run async buk action
     *
     * @returns void
     * @param {string} asyncAction: bulk action name
     * @param {AsyncActionInput} asyncData: data passed to the async process
     */
    runBulkAction(asyncAction, asyncData) {
        this.asyncAction.run(asyncAction, asyncData).subscribe((process) => {
            this.handleProcessResult(process);
        });
    }
    /**
     * Run this function once the process is executed
     *
     * @returns void
     * @param {Process} process: data returned by the process once the process is executed
     */
    handleProcessResult(process) {
        if (process.data && process.data.reload) {
            this.store.recordList.clearSelection();
            this.store.load(false).pipe(take(1)).subscribe();
        }
        if (process.data && process.data.dataUpdated) {
            this.store.triggerDataUpdate();
        }
        this.reloadMetadata(this.store.getModuleName(), process);
    }
    /**
     * Reload the metadata for the module
     * @param moduleName
     * @param process
     * @protected
     */
    reloadMetadata(moduleName, process) {
        const typesToLoad = [];
        if (this.shouldReloadRecentlyViewed(process)) {
            typesToLoad.push(this.metadata.typeKeys.recentlyViewed);
        }
        if (this.shouldReloadFavorites(process)) {
            typesToLoad.push(this.metadata.typeKeys.favorites);
        }
        if (typesToLoad && typesToLoad.length) {
            this.metadata.reloadModuleMetadata(moduleName, typesToLoad, false).pipe(take(1)).subscribe();
        }
        if (this.shouldReloadGlobalRecentlyViewed(process)) {
            this.appMetadataStore.load(moduleName, ['globalRecentlyViewed'], false).pipe(take(1)).subscribe();
        }
    }
    /**
     * Should reload page
     * @param process
     */
    shouldReloadGlobalRecentlyViewed(process) {
        return !!(process.data && process.data.reloadGlobalRecentlyViewed);
    }
    /**
     * Should reload page
     * @param process
     */
    shouldReloadRecentlyViewed(process) {
        return !!(process.data && process.data.reloadRecentlyViewed);
    }
    /**
     * Should reload page
     * @param process
     */
    shouldReloadFavorites(process) {
        return !!(process.data && process.data.reloadFavorites);
    }
    static { this.ɵfac = function BulkActionsAdapter_Factory(t) { return new (t || BulkActionsAdapter)(i0.ɵɵinject(i1.ListViewStore), i0.ɵɵinject(i2.MessageService), i0.ɵɵinject(i3.ConfirmationModalService), i0.ɵɵinject(i4.SelectModalService), i0.ɵɵinject(i5.AsyncActionService), i0.ɵɵinject(i6.MetadataStore), i0.ɵɵinject(i7.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BulkActionsAdapter, factory: BulkActionsAdapter.ɵfac }); }
}
export { BulkActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BulkActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.MessageService }, { type: i3.ConfirmationModalService }, { type: i4.SelectModalService }, { type: i5.AsyncActionService }, { type: i6.MetadataStore }, { type: i7.AppMetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsay1hY3Rpb25zLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9hZGFwdGVycy9idWxrLWFjdGlvbnMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQWlCLE9BQU8sRUFBUyxNQUFNLFFBQVEsQ0FBQztBQUV2RCxPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBbUIsa0JBQWtCLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUNuSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFFekUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ2pFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBRTdGLE9BQU8sRUFBVyxhQUFhLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUN2RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx3REFBd0QsQ0FBQzs7Ozs7Ozs7O0FBRXhGLE1BQ2Esa0JBQWtCO0lBRTNCLFlBQ2MsS0FBb0IsRUFDcEIsT0FBdUIsRUFDdkIsWUFBc0MsRUFDdEMsa0JBQXNDLEVBQ3RDLFdBQStCLEVBQy9CLFFBQXVCLEVBQ3ZCLGdCQUFrQztRQU5sQyxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQ3BCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtRQUN0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RD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Qjt1RkFBbEIsa0JBQWtCO2NBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0J1bGtBY3Rpb25zTWFwLCBpc0ZhbHNlLCBSZWNvcmR9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QXN5bmNBY3Rpb25JbnB1dCwgQXN5bmNBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7UHJvY2Vzc30gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtMaXN0Vmlld1N0b3JlfSBmcm9tICcuLi9zdG9yZS9saXN0LXZpZXcvbGlzdC12aWV3LnN0b3JlJztcbmltcG9ydCB7Q29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvY29uZmlybWF0aW9uLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtCdWxrQWN0aW9uRGF0YVNvdXJjZX0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9idWxrLWFjdGlvbi1tZW51L2J1bGstYWN0aW9uLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7TWV0YWRhdGEsIE1ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWxlY3RNb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9zZWxlY3QtbW9kYWwuc2VydmljZSc7XG5pbXBvcnQge0FwcE1ldGFkYXRhU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9hcHAtbWV0YWRhdGEvYXBwLW1ldGFkYXRhLnN0b3JlLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJ1bGtBY3Rpb25zQWRhcHRlciBpbXBsZW1lbnRzIEJ1bGtBY3Rpb25EYXRhU291cmNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IExpc3RWaWV3U3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc2VsZWN0TW9kYWxTZXJ2aWNlOiBTZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvbjogQXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhcHBNZXRhZGF0YVN0b3JlOiBBcHBNZXRhZGF0YVN0b3JlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGJ1bGsgYWN0aW9uXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxCdWxrQWN0aW9uc01hcD5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QnVsa0FjdGlvbnMoKTogT2JzZXJ2YWJsZTxCdWxrQWN0aW9uc01hcD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5tZXRhZGF0YSQucGlwZShcbiAgICAgICAgICAgIG1hcCgobWV0YWRhdGE6IE1ldGFkYXRhKSA9PiBtZXRhZGF0YS5saXN0Vmlldy5idWxrQWN0aW9ucylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlIGJ1bGsgYWN0aW9uc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgZXhlY3V0ZUJ1bGtBY3Rpb24oYWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5zdG9yZS5yZWNvcmRMaXN0LnNlbGVjdGlvbjtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuc3RvcmUubWV0YWRhdGEubGlzdFZpZXcuYnVsa0FjdGlvbnNbYWN0aW9uXTtcbiAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9IGBidWxrLSR7YWN0aW9ufWA7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlLnJlbW92ZU1lc3NhZ2VzKCk7XG5cbiAgICAgICAgaWYgKGlzRmFsc2UoZGVmaW5pdGlvbi5wYXJhbXMuYWxsb3dBbGwpICYmIHNlbGVjdGlvbi5hbGwpIHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gdGhpcy5zdG9yZS5hcHBTdHJpbmdzLkxCTF9TRUxFQ1RfQUxMX05PVF9BTExPV0VEO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVmaW5pdGlvbi5wYXJhbXMubWluICYmIHNlbGVjdGlvbi5jb3VudCA8IGRlZmluaXRpb24ucGFyYW1zLm1pbikge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLnN0b3JlLmFwcFN0cmluZ3MuTEJMX1RPT19GRVdfU0VMRUNURUQ7XG4gICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCd7bWlufScsIGRlZmluaXRpb24ucGFyYW1zLm1pbik7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWZpbml0aW9uLnBhcmFtcy5tYXggJiYgc2VsZWN0aW9uLmNvdW50ID4gZGVmaW5pdGlvbi5wYXJhbXMubWF4KSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMuc3RvcmUuYXBwU3RyaW5ncy5MQkxfVE9PX01BTllfU0VMRUNURUQ7XG4gICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCd7bWF4fScsIGRlZmluaXRpb24ucGFyYW1zLm1heCk7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpc3BsYXllZEZpZWxkcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuc3RvcmUubWV0YWRhdGEubGlzdFZpZXcuZmllbGRzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgZGlzcGxheWVkRmllbGRzLnB1c2godmFsdWUubmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbk5hbWUsXG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMuc3RvcmUuZ2V0TW9kdWxlTmFtZSgpLFxuICAgICAgICAgICAgY3JpdGVyaWE6IG51bGwsXG4gICAgICAgICAgICBzb3J0OiBudWxsLFxuICAgICAgICAgICAgaWRzOiBudWxsLFxuICAgICAgICAgICAgZmllbGRzOiBkaXNwbGF5ZWRGaWVsZHNcbiAgICAgICAgfSBhcyBBc3luY0FjdGlvbklucHV0O1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb24uYWxsICYmIHNlbGVjdGlvbi5jb3VudCA+IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5yZWNvcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZGF0YS5jcml0ZXJpYSA9IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5jcml0ZXJpYTtcbiAgICAgICAgICAgIGRhdGEuc29ydCA9IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5zb3J0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbi5hbGwgJiYgc2VsZWN0aW9uLmNvdW50IDw9IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5yZWNvcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZGF0YS5pZHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC5yZWNvcmRzLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhLmlkcy5wdXNoKHJlY29yZC5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2VsZWN0aW9uLmFsbCkge1xuICAgICAgICAgICAgZGF0YS5pZHMgPSBPYmplY3Qua2V5cyhzZWxlY3Rpb24uc2VsZWN0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gKGRlZmluaXRpb24gJiYgZGVmaW5pdGlvbi5wYXJhbXMpIHx8IHt9IGFzIHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gICAgICAgIGNvbnN0IGRpc3BsYXlDb25maXJtYXRpb24gPSBwYXJhbXMuZGlzcGxheUNvbmZpcm1hdGlvbiB8fCBmYWxzZTtcbiAgICAgICAgY29uc3QgY29uZmlybWF0aW9uTGFiZWwgPSBwYXJhbXMuY29uZmlybWF0aW9uTGFiZWwgfHwgJyc7XG4gICAgICAgIGNvbnN0IHNlbGVjdE1vZGFsID0gZGVmaW5pdGlvbi5wYXJhbXMgJiYgZGVmaW5pdGlvbi5wYXJhbXMuc2VsZWN0TW9kYWw7XG4gICAgICAgIGNvbnN0IHNlbGVjdE1vZHVsZSA9IHNlbGVjdE1vZGFsICYmIHNlbGVjdE1vZGFsLm1vZHVsZTtcbiAgICAgICAgY29uc3QgcmVjb3JkUGFuZWwgPSBkZWZpbml0aW9uLnBhcmFtcyAmJiBkZWZpbml0aW9uLnBhcmFtcy5yZWNvcmRQYW5lbDtcblxuICAgICAgICBpZiAocmVjb3JkUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUub3BlblJlY29yZFBhbmVsKHJlY29yZFBhbmVsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGRpc3BsYXlDb25maXJtYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybWF0aW9uLnNob3dNb2RhbChjb25maXJtYXRpb25MYWJlbCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0TW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVuQnVsa0FjdGlvbihhY3Rpb25OYW1lLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWxlY3RNb2RhbChzZWxlY3RNb2RhbC5tb2R1bGUsIGFjdGlvbk5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2VsZWN0TW9kdWxlKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bkJ1bGtBY3Rpb24oYWN0aW9uTmFtZSwgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93U2VsZWN0TW9kYWwoc2VsZWN0TW9kYWwubW9kdWxlLCBhY3Rpb25OYW1lLCBkYXRhKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1biBhc3luYyBidWsgYWN0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdE1vZHVsZTogbW9kdWxlIGZvciB3aGljaCByZWNvcmRzIGFyZSBsaXN0ZWQgaW4gU2VsZWN0IE1vZGFsL1BvcHVwXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFzeW5jQWN0aW9uOiBidWxrIGFjdGlvbiBuYW1lXG4gICAgICogQHBhcmFtIHtBc3luY0FjdGlvbklucHV0fSBhc3luY0RhdGE6IGRhdGEgcGFzc2VkIHRvIHRoZSBhc3luYyBwcm9jZXNzXG4gICAgICovXG4gICAgcHVibGljIHNob3dTZWxlY3RNb2RhbChzZWxlY3RNb2R1bGU6IHN0cmluZywgYXN5bmNBY3Rpb246IHN0cmluZywgYXN5bmNEYXRhOiBBc3luY0FjdGlvbklucHV0KSB7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RNb2RhbFNlcnZpY2Uuc2hvd1NlbGVjdE1vZGFsKHNlbGVjdE1vZHVsZSwgKG1vZGFsUmVjb3JkOiBSZWNvcmQpID0+IHtcbiAgICAgICAgICAgIGlmIChtb2RhbFJlY29yZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHtmaWVsZHMsIGZvcm1Hcm91cCwgLi4uYmFzZVJlY29yZH0gPSBtb2RhbFJlY29yZDtcbiAgICAgICAgICAgICAgICBhc3luY0RhdGEubW9kYWxSZWNvcmQgPSBiYXNlUmVjb3JkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ydW5CdWxrQWN0aW9uKGFzeW5jQWN0aW9uLCBhc3luY0RhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW4gYXN5bmMgYnVrIGFjdGlvblxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhc3luY0FjdGlvbjogYnVsayBhY3Rpb24gbmFtZVxuICAgICAqIEBwYXJhbSB7QXN5bmNBY3Rpb25JbnB1dH0gYXN5bmNEYXRhOiBkYXRhIHBhc3NlZCB0byB0aGUgYXN5bmMgcHJvY2Vzc1xuICAgICAqL1xuICAgIHB1YmxpYyBydW5CdWxrQWN0aW9uKGFzeW5jQWN0aW9uOiBzdHJpbmcsIGFzeW5jRGF0YTogQXN5bmNBY3Rpb25JbnB1dCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuYXN5bmNBY3Rpb24ucnVuKGFzeW5jQWN0aW9uLCBhc3luY0RhdGEpLnN1YnNjcmliZSgocHJvY2VzczogUHJvY2VzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQcm9jZXNzUmVzdWx0KHByb2Nlc3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW4gdGhpcyBmdW5jdGlvbiBvbmNlIHRoZSBwcm9jZXNzIGlzIGV4ZWN1dGVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogQHBhcmFtIHtQcm9jZXNzfSBwcm9jZXNzOiBkYXRhIHJldHVybmVkIGJ5IHRoZSBwcm9jZXNzIG9uY2UgdGhlIHByb2Nlc3MgaXMgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlUHJvY2Vzc1Jlc3VsdChwcm9jZXNzOiBQcm9jZXNzKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZGF0YSAmJiBwcm9jZXNzLmRhdGEucmVsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLnJlY29yZExpc3QuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUubG9hZChmYWxzZSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9jZXNzLmRhdGEgJiYgcHJvY2Vzcy5kYXRhLmRhdGFVcGRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLnRyaWdnZXJEYXRhVXBkYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbG9hZE1ldGFkYXRhKHRoaXMuc3RvcmUuZ2V0TW9kdWxlTmFtZSgpLCBwcm9jZXNzKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJlbG9hZCB0aGUgbWV0YWRhdGEgZm9yIHRoZSBtb2R1bGVcbiAgICAgKiBAcGFyYW0gbW9kdWxlTmFtZVxuICAgICAqIEBwYXJhbSBwcm9jZXNzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCByZWxvYWRNZXRhZGF0YShtb2R1bGVOYW1lOiBzdHJpbmcsIHByb2Nlc3M6IFByb2Nlc3MpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdHlwZXNUb0xvYWQgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5zaG91bGRSZWxvYWRSZWNlbnRseVZpZXdlZChwcm9jZXNzKSkge1xuICAgICAgICAgICAgdHlwZXNUb0xvYWQucHVzaCh0aGlzLm1ldGFkYXRhLnR5cGVLZXlzLnJlY2VudGx5Vmlld2VkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNob3VsZFJlbG9hZEZhdm9yaXRlcyhwcm9jZXNzKSkge1xuICAgICAgICAgICAgdHlwZXNUb0xvYWQucHVzaCh0aGlzLm1ldGFkYXRhLnR5cGVLZXlzLmZhdm9yaXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZXNUb0xvYWQgJiYgdHlwZXNUb0xvYWQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGFkYXRhLnJlbG9hZE1vZHVsZU1ldGFkYXRhKG1vZHVsZU5hbWUsIHR5cGVzVG9Mb2FkLCBmYWxzZSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNob3VsZFJlbG9hZEdsb2JhbFJlY2VudGx5Vmlld2VkKHByb2Nlc3MpKSB7XG4gICAgICAgICAgICB0aGlzLmFwcE1ldGFkYXRhU3RvcmUubG9hZChtb2R1bGVOYW1lLCBbJ2dsb2JhbFJlY2VudGx5Vmlld2VkJ10sIGZhbHNlKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIHJlbG9hZCBwYWdlXG4gICAgICogQHBhcmFtIHByb2Nlc3NcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2hvdWxkUmVsb2FkR2xvYmFsUmVjZW50bHlWaWV3ZWQocHJvY2VzczogUHJvY2Vzcyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISEocHJvY2Vzcy5kYXRhICYmIHByb2Nlc3MuZGF0YS5yZWxvYWRHbG9iYWxSZWNlbnRseVZpZXdlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIHJlbG9hZCBwYWdlXG4gICAgICogQHBhcmFtIHByb2Nlc3NcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2hvdWxkUmVsb2FkUmVjZW50bHlWaWV3ZWQocHJvY2VzczogUHJvY2Vzcyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISEocHJvY2Vzcy5kYXRhICYmIHByb2Nlc3MuZGF0YS5yZWxvYWRSZWNlbnRseVZpZXdlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIHJlbG9hZCBwYWdlXG4gICAgICogQHBhcmFtIHByb2Nlc3NcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2hvdWxkUmVsb2FkRmF2b3JpdGVzKHByb2Nlc3M6IFByb2Nlc3MpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKHByb2Nlc3MuZGF0YSAmJiBwcm9jZXNzLmRhdGEucmVsb2FkRmF2b3JpdGVzKTtcbiAgICB9XG59XG4iXX0=