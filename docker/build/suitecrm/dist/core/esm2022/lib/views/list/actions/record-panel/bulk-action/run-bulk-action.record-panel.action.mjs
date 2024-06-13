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
import { take } from 'rxjs/operators';
import { ConfirmationModalService } from '../../../../../services/modals/confirmation-modal.service';
import { ListViewRecordPanelActionHandler } from '../record-panel.action';
import { MessageService } from '../../../../../services/message/message.service';
import { AsyncActionService } from '../../../../../services/process/processes/async-action/async-action';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../services/message/message.service";
import * as i2 from "../../../../../services/process/processes/async-action/async-action";
import * as i3 from "../../../../../services/modals/confirmation-modal.service";
class RunBulkActionRecordPanelAction extends ListViewRecordPanelActionHandler {
    constructor(message, asyncActionService, confirmation, asyncAction) {
        super();
        this.message = message;
        this.asyncActionService = asyncActionService;
        this.confirmation = confirmation;
        this.asyncAction = asyncAction;
        this.key = 'bulk-action';
        this.modes = [
            'detail',
            'edit',
            'list',
            'create',
            'massupdate'
        ];
    }
    run(data) {
        const definition = data.action;
        const selection = data.listStore.recordList.selection;
        const params = (definition && definition.params) || {};
        if (isFalse(params.allowAll) && selection.all) {
            let message = data.listStore.appStrings.LBL_SELECT_ALL_NOT_ALLOWED;
            this.message.addDangerMessage(message);
            return;
        }
        if (params.min && selection.count < params.min) {
            let message = data.listStore.appStrings.LBL_TOO_FEW_SELECTED;
            message = message.replace('{min}', params.min);
            this.message.addDangerMessage(message);
            return;
        }
        if (params.max && selection.count > params.max) {
            let message = data.listStore.appStrings.LBL_TOO_MANY_SELECTED;
            message = message.replace('{max}', params.max);
            this.message.addDangerMessage(message);
            return;
        }
        this.runBulkAction(data);
    }
    shouldDisplay() {
        return true;
    }
    /**
     * Run async buk action
     *
     * @returns void
     * @param {AsyncActionInput} data: data passed to the async process
     */
    runBulkAction(data) {
        const actionName = `bulk-${data.action.params.bulkAction}`;
        const asyncData = this.buildActionInput(actionName, data);
        this.asyncAction.run(actionName, asyncData).subscribe((process) => {
            this.handleProcessResult(process, data);
        });
    }
    /**
     * Build backend bulk action input
     * @param actionName
     * @param data
     */
    buildActionInput(actionName, data) {
        const displayedFields = [];
        data.listStore.metadata.listView.fields.forEach(value => {
            displayedFields.push(value.name);
        });
        const asyncData = {
            action: actionName,
            module: data.listStore.getModuleName(),
            criteria: null,
            sort: null,
            ids: null,
            fields: displayedFields,
            payload: {
                panelRecord: data.store.recordStore.getBaseStaging()
            }
        };
        const selection = data.listStore.recordList.selection;
        if (selection.all && selection.count > data.listStore.recordList.records.length) {
            asyncData.criteria = data.listStore.recordList.criteria;
            asyncData.sort = data.listStore.recordList.sort;
        }
        if (selection.all && selection.count <= data.listStore.recordList.records.length) {
            asyncData.ids = [];
            data.listStore.recordList.records.forEach(record => {
                data.ids.push(record.id);
            });
        }
        if (!selection.all) {
            asyncData.ids = Object.keys(selection.selected);
        }
        return asyncData;
    }
    /**
     * Run this function once the process is executed
     *
     * @returns void
     * @param {object} process Process data returned by the process once the process is executed
     * @param {object} data ListViewRecordPanelActionData
     */
    handleProcessResult(process, data) {
        if (process.data && process.data.reload) {
            data.listStore.recordList.clearSelection();
            data.listStore.load(false).pipe(take(1)).subscribe();
        }
        if (process.data && process.data.dataUpdated) {
            data.listStore.triggerDataUpdate();
        }
        data.listStore.closeRecordPanel();
    }
    static { this.ɵfac = function RunBulkActionRecordPanelAction_Factory(t) { return new (t || RunBulkActionRecordPanelAction)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject(i2.AsyncActionService), i0.ɵɵinject(i3.ConfirmationModalService), i0.ɵɵinject(i2.AsyncActionService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RunBulkActionRecordPanelAction, factory: RunBulkActionRecordPanelAction.ɵfac, providedIn: 'root' }); }
}
export { RunBulkActionRecordPanelAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RunBulkActionRecordPanelAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MessageService }, { type: i2.AsyncActionService }, { type: i3.ConfirmationModalService }, { type: i2.AsyncActionService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLWJ1bGstYWN0aW9uLnJlY29yZC1wYW5lbC5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9hY3Rpb25zL3JlY29yZC1wYW5lbC9idWxrLWFjdGlvbi9ydW4tYnVsay1hY3Rpb24ucmVjb3JkLXBhbmVsLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsT0FBTyxFQUFXLE1BQU0sUUFBUSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwQyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUNuRyxPQUFPLEVBQWdDLGdDQUFnQyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkcsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFFSCxrQkFBa0IsRUFDckIsTUFBTSxxRUFBcUUsQ0FBQzs7Ozs7QUFFN0UsTUFHYSw4QkFBK0IsU0FBUSxnQ0FBZ0M7SUFXaEYsWUFDYyxPQUF1QixFQUN2QixrQkFBc0MsRUFDdEMsWUFBc0MsRUFDdEMsV0FBK0I7UUFFekMsS0FBSyxFQUFFLENBQUM7UUFMRSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtRQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFiN0MsUUFBRyxHQUFHLGFBQWEsQ0FBQztRQUNwQixVQUFLLEdBQUc7WUFDSixRQUFvQjtZQUNwQixNQUFrQjtZQUNsQixNQUFrQjtZQUNsQixRQUFvQjtZQUNw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Q0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUN0QztRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN0QyxDQUFDOytGQXhJUSw4QkFBOEI7dUVBQTlCLDhCQUE4QixXQUE5Qiw4QkFBOEIsbUJBRjNCLE1BQU07O1NBRVQsOEJBQThCO3VGQUE5Qiw4QkFBOEI7Y0FIMUMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpc0ZhbHNlLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtQcm9jZXNzfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge0NvbmZpcm1hdGlvbk1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7TGlzdFZpZXdSZWNvcmRQYW5lbEFjdGlvbkRhdGEsIExpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9yZWNvcmQtcGFuZWwuYWN0aW9uJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7XG4gICAgQXN5bmNBY3Rpb25JbnB1dCxcbiAgICBBc3luY0FjdGlvblNlcnZpY2Vcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUnVuQnVsa0FjdGlvblJlY29yZFBhbmVsQWN0aW9uIGV4dGVuZHMgTGlzdFZpZXdSZWNvcmRQYW5lbEFjdGlvbkhhbmRsZXIge1xuXG4gICAga2V5ID0gJ2J1bGstYWN0aW9uJztcbiAgICBtb2RlcyA9IFtcbiAgICAgICAgJ2RldGFpbCcgYXMgVmlld01vZGUsXG4gICAgICAgICdlZGl0JyBhcyBWaWV3TW9kZSxcbiAgICAgICAgJ2xpc3QnIGFzIFZpZXdNb2RlLFxuICAgICAgICAnY3JlYXRlJyBhcyBWaWV3TW9kZSxcbiAgICAgICAgJ21hc3N1cGRhdGUnIGFzIFZpZXdNb2RlXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb246IEFzeW5jQWN0aW9uU2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBMaXN0Vmlld1JlY29yZFBhbmVsQWN0aW9uRGF0YSk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBkYXRhLmFjdGlvbjtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZGF0YS5saXN0U3RvcmUucmVjb3JkTGlzdC5zZWxlY3Rpb247XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gKGRlZmluaXRpb24gJiYgZGVmaW5pdGlvbi5wYXJhbXMpIHx8IHt9IGFzIHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cbiAgICAgICAgaWYgKGlzRmFsc2UocGFyYW1zLmFsbG93QWxsKSAmJiBzZWxlY3Rpb24uYWxsKSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGRhdGEubGlzdFN0b3JlLmFwcFN0cmluZ3MuTEJMX1NFTEVDVF9BTExfTk9UX0FMTE9XRUQ7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMubWluICYmIHNlbGVjdGlvbi5jb3VudCA8IHBhcmFtcy5taW4pIHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZGF0YS5saXN0U3RvcmUuYXBwU3RyaW5ncy5MQkxfVE9PX0ZFV19TRUxFQ1RFRDtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ3ttaW59JywgcGFyYW1zLm1pbik7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMubWF4ICYmIHNlbGVjdGlvbi5jb3VudCA+IHBhcmFtcy5tYXgpIHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZGF0YS5saXN0U3RvcmUuYXBwU3RyaW5ncy5MQkxfVE9PX01BTllfU0VMRUNURUQ7XG4gICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCd7bWF4fScsIHBhcmFtcy5tYXgpO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJ1bkJ1bGtBY3Rpb24oZGF0YSk7XG4gICAgfVxuXG4gICAgc2hvdWxkRGlzcGxheSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIGFzeW5jIGJ1ayBhY3Rpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKiBAcGFyYW0ge0FzeW5jQWN0aW9uSW5wdXR9IGRhdGE6IGRhdGEgcGFzc2VkIHRvIHRoZSBhc3luYyBwcm9jZXNzXG4gICAgICovXG4gICAgcHVibGljIHJ1bkJ1bGtBY3Rpb24oZGF0YTogTGlzdFZpZXdSZWNvcmRQYW5lbEFjdGlvbkRhdGEpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBhY3Rpb25OYW1lID0gYGJ1bGstJHtkYXRhLmFjdGlvbi5wYXJhbXMuYnVsa0FjdGlvbn1gO1xuXG4gICAgICAgIGNvbnN0IGFzeW5jRGF0YSA9IHRoaXMuYnVpbGRBY3Rpb25JbnB1dChhY3Rpb25OYW1lLCBkYXRhKTtcblxuICAgICAgICB0aGlzLmFzeW5jQWN0aW9uLnJ1bihhY3Rpb25OYW1lLCBhc3luY0RhdGEpLnN1YnNjcmliZSgocHJvY2VzczogUHJvY2VzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQcm9jZXNzUmVzdWx0KHByb2Nlc3MsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBiYWNrZW5kIGJ1bGsgYWN0aW9uIGlucHV0XG4gICAgICogQHBhcmFtIGFjdGlvbk5hbWVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZEFjdGlvbklucHV0KGFjdGlvbk5hbWU6IHN0cmluZywgZGF0YTogTGlzdFZpZXdSZWNvcmRQYW5lbEFjdGlvbkRhdGEpIHtcblxuICAgICAgICBjb25zdCBkaXNwbGF5ZWRGaWVsZHMgPSBbXTtcblxuICAgICAgICBkYXRhLmxpc3RTdG9yZS5tZXRhZGF0YS5saXN0Vmlldy5maWVsZHMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5ZWRGaWVsZHMucHVzaCh2YWx1ZS5uYW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYXN5bmNEYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25OYW1lLFxuICAgICAgICAgICAgbW9kdWxlOiBkYXRhLmxpc3RTdG9yZS5nZXRNb2R1bGVOYW1lKCksXG4gICAgICAgICAgICBjcml0ZXJpYTogbnVsbCxcbiAgICAgICAgICAgIHNvcnQ6IG51bGwsXG4gICAgICAgICAgICBpZHM6IG51bGwsXG4gICAgICAgICAgICBmaWVsZHM6IGRpc3BsYXllZEZpZWxkcyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBwYW5lbFJlY29yZDogZGF0YS5zdG9yZS5yZWNvcmRTdG9yZS5nZXRCYXNlU3RhZ2luZygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcblxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBkYXRhLmxpc3RTdG9yZS5yZWNvcmRMaXN0LnNlbGVjdGlvbjtcblxuICAgICAgICBpZiAoc2VsZWN0aW9uLmFsbCAmJiBzZWxlY3Rpb24uY291bnQgPiBkYXRhLmxpc3RTdG9yZS5yZWNvcmRMaXN0LnJlY29yZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhc3luY0RhdGEuY3JpdGVyaWEgPSBkYXRhLmxpc3RTdG9yZS5yZWNvcmRMaXN0LmNyaXRlcmlhO1xuICAgICAgICAgICAgYXN5bmNEYXRhLnNvcnQgPSBkYXRhLmxpc3RTdG9yZS5yZWNvcmRMaXN0LnNvcnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0aW9uLmFsbCAmJiBzZWxlY3Rpb24uY291bnQgPD0gZGF0YS5saXN0U3RvcmUucmVjb3JkTGlzdC5yZWNvcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgYXN5bmNEYXRhLmlkcyA9IFtdO1xuICAgICAgICAgICAgZGF0YS5saXN0U3RvcmUucmVjb3JkTGlzdC5yZWNvcmRzLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhLmlkcy5wdXNoKHJlY29yZC5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2VsZWN0aW9uLmFsbCkge1xuICAgICAgICAgICAgYXN5bmNEYXRhLmlkcyA9IE9iamVjdC5rZXlzKHNlbGVjdGlvbi5zZWxlY3RlZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXN5bmNEYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1biB0aGlzIGZ1bmN0aW9uIG9uY2UgdGhlIHByb2Nlc3MgaXMgZXhlY3V0ZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvY2VzcyBQcm9jZXNzIGRhdGEgcmV0dXJuZWQgYnkgdGhlIHByb2Nlc3Mgb25jZSB0aGUgcHJvY2VzcyBpcyBleGVjdXRlZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIExpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25EYXRhXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGhhbmRsZVByb2Nlc3NSZXN1bHQocHJvY2VzczogUHJvY2VzcywgZGF0YTogTGlzdFZpZXdSZWNvcmRQYW5lbEFjdGlvbkRhdGEpOiB2b2lkIHtcblxuICAgICAgICBpZiAocHJvY2Vzcy5kYXRhICYmIHByb2Nlc3MuZGF0YS5yZWxvYWQpIHtcbiAgICAgICAgICAgIGRhdGEubGlzdFN0b3JlLnJlY29yZExpc3QuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIGRhdGEubGlzdFN0b3JlLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvY2Vzcy5kYXRhICYmIHByb2Nlc3MuZGF0YS5kYXRhVXBkYXRlZCkge1xuICAgICAgICAgICAgZGF0YS5saXN0U3RvcmUudHJpZ2dlckRhdGFVcGRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEubGlzdFN0b3JlLmNsb3NlUmVjb3JkUGFuZWwoKTtcbiAgICB9XG59XG4iXX0=