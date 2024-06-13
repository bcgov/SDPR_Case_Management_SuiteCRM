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
import { combineLatestWith } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { LanguageStore } from '../../../store/language/language.store';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import { RecordPanelStore } from '../../../containers/record-panel/store/record-panel/record-panel.store';
import { RecordPanelActionManager } from '../actions/record-panel/record-panel-action-manager.service';
import { ListViewStore } from '../store/list-view/list-view.store';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../containers/record-panel/store/record-panel/record-panel.store";
import * as i2 from "../store/list-view/list-view.store";
import * as i3 from "../../../store/language/language.store";
import * as i4 from "../actions/record-panel/record-panel-action-manager.service";
import * as i5 from "../../../services/process/processes/async-action/async-action";
import * as i6 from "../../../services/message/message.service";
import * as i7 from "../../../services/modals/confirmation-modal.service";
import * as i8 from "../../../services/modals/select-modal.service";
import * as i9 from "../../../store/metadata/metadata.store.service";
import * as i10 from "../../../store/app-metadata/app-metadata.store.service";
class ListViewRecordPanelActionsAdapter extends BaseRecordActionsAdapter {
    constructor(store, listStore, language, actionManager, asyncActionService, message, confirmation, selectModalService, metadata, appMetadataStore) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata, appMetadataStore);
        this.store = store;
        this.listStore = listStore;
        this.language = language;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.selectModalService = selectModalService;
        this.metadata = metadata;
        this.appMetadataStore = appMetadataStore;
        this.collapseButtons = false;
    }
    getActions(context) {
        return this.store.meta$.pipe(combineLatestWith(this.store.mode$, this.store.stagingRecord$, this.language.vm$), map(([meta, mode, stagingRecord, vm]) => {
            if (!mode || !meta) {
                return [];
            }
            return this.parseModeActions(meta.actions, mode);
        }));
    }
    buildActionData(action, context) {
        return {
            store: this.store,
            listStore: this.listStore,
            action
        };
    }
    getMode() {
        return this.store.getMode();
    }
    getModuleName(context) {
        return this.store.getModuleName();
    }
    reload(action, process, context) {
        this.listStore.load(false).pipe(take(1)).subscribe();
    }
    static { this.ɵfac = function ListViewRecordPanelActionsAdapter_Factory(t) { return new (t || ListViewRecordPanelActionsAdapter)(i0.ɵɵinject(i1.RecordPanelStore), i0.ɵɵinject(i2.ListViewStore), i0.ɵɵinject(i3.LanguageStore), i0.ɵɵinject(i4.RecordPanelActionManager), i0.ɵɵinject(i5.AsyncActionService), i0.ɵɵinject(i6.MessageService), i0.ɵɵinject(i7.ConfirmationModalService), i0.ɵɵinject(i8.SelectModalService), i0.ɵɵinject(i9.MetadataStore), i0.ɵɵinject(i10.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewRecordPanelActionsAdapter, factory: ListViewRecordPanelActionsAdapter.ɵfac }); }
}
export { ListViewRecordPanelActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewRecordPanelActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordPanelStore }, { type: i2.ListViewStore }, { type: i3.LanguageStore }, { type: i4.RecordPanelActionManager }, { type: i5.AsyncActionService }, { type: i6.MessageService }, { type: i7.ConfirmationModalService }, { type: i8.SelectModalService }, { type: i9.MetadataStore }, { type: i10.AppMetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXBhbmVsLWFjdGlvbnMuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9saXN0L2FkYXB0ZXJzL3JlY29yZC1wYW5lbC1hY3Rpb25zLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGlCQUFpQixFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDakcsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUV6RSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM3RixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxzREFBc0QsQ0FBQztBQUU5RixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx3RUFBd0UsQ0FBQztBQUN4RyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUNyRyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFFakUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQzdFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHdEQUF3RCxDQUFDOzs7Ozs7Ozs7Ozs7QUFFeEYsTUFDYSxpQ0FBa0MsU0FBUSx3QkFBK0M7SUFJbEcsWUFDYyxLQUF1QixFQUN2QixTQUF3QixFQUN4QixRQUF1QixFQUN2QixhQUF1QyxFQUN2QyxrQkFBc0MsRUFDdEMsT0FBdUIsRUFDdkIsWUFBc0MsRUFDdEMsa0JBQXNDLEVBQ3RDLFFBQXVCLEVBQ3ZCLGdCQUFrQztRQUU1QyxLQUFLLENBQ0QsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixPQUFPLEVBQ1AsWUFBWSxFQUNaLFFBQVEsRUFDUixrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLGdCQUFnQixDQUNuQixDQUFBO1FBcEJTLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFDdkMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFaaEQsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUF3QnhCLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBdUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3hCLGlCQUFpQixDQUNULElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQ3hCLEVBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFFRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRVMsZUFBZSxDQUFDLE1BQWMsRUFBRSxPQUF1QjtRQUM3RCxPQUFPO1lBQ0gsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNO1NBQ3dCLENBQUM7SUFDdkMsQ0FBQztJQUVTLE9BQU87UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVTLGFBQWEsQ0FBQyxPQUF1QjtRQUMzQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVTLE1BQU0sQ0FBQyxNQUFjLEVBQUUsT0FBZ0IsRUFBRSxPQUF1QjtRQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDekQsQ0FBQztrR0EvRFEsaUNBQWlDO3VFQUFqQyxpQ0FBaUMsV0FBakMsaUNBQWlDOztTQUFqQyxpQ0FBaUM7dUZBQWpDLGlDQUFpQztjQUQ3QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb24sIEFjdGlvbkNvbnRleHQsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1Byb2Nlc3N9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7Q29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvY29uZmlybWF0aW9uLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1yZWNvcmQtYWN0aW9uLmFkYXB0ZXInO1xuaW1wb3J0IHtSZWNvcmRQYW5lbEFjdGlvbkRhdGF9IGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLXBhbmVsL2NvbXBvbmVudHMvcmVjb3JkLXBhbmVsL3JlY29yZC1wYW5lbC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZFBhbmVsU3RvcmV9IGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLXBhbmVsL3N0b3JlL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwuc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRQYW5lbEFjdGlvbk1hbmFnZXJ9IGZyb20gJy4uL2FjdGlvbnMvcmVjb3JkLXBhbmVsL3JlY29yZC1wYW5lbC1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7TGlzdFZpZXdTdG9yZX0gZnJvbSAnLi4vc3RvcmUvbGlzdC12aWV3L2xpc3Qtdmlldy5zdG9yZSc7XG5pbXBvcnQge0xpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25EYXRhfSBmcm9tICcuLi9hY3Rpb25zL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwuYWN0aW9uJztcbmltcG9ydCB7U2VsZWN0TW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvc2VsZWN0LW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7QXBwTWV0YWRhdGFTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2FwcC1tZXRhZGF0YS9hcHAtbWV0YWRhdGEuc3RvcmUuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdSZWNvcmRQYW5lbEFjdGlvbnNBZGFwdGVyIGV4dGVuZHMgQmFzZVJlY29yZEFjdGlvbnNBZGFwdGVyPFJlY29yZFBhbmVsQWN0aW9uRGF0YT4ge1xuXG4gICAgY29sbGFwc2VCdXR0b25zID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlOiBSZWNvcmRQYW5lbFN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdFN0b3JlOiBMaXN0Vmlld1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25NYW5hZ2VyOiBSZWNvcmRQYW5lbEFjdGlvbk1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb25Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3RNb2RhbFNlcnZpY2U6IFNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwTWV0YWRhdGFTdG9yZTogQXBwTWV0YWRhdGFTdG9yZVxuICAgICkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGFjdGlvbk1hbmFnZXIsXG4gICAgICAgICAgICBhc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgICAgICBzZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgICAgIGFwcE1ldGFkYXRhU3RvcmVcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGdldEFjdGlvbnMoY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBPYnNlcnZhYmxlPEFjdGlvbltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLm1ldGEkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5tb2RlJCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zdGFnaW5nUmVjb3JkJCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZS52bSQsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWFwKChbbWV0YSwgbW9kZSwgc3RhZ2luZ1JlY29yZCwgdm1dKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RlIHx8ICFtZXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU1vZGVBY3Rpb25zKG1ldGEuYWN0aW9ucywgbW9kZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZEFjdGlvbkRhdGEoYWN0aW9uOiBBY3Rpb24sIGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogUmVjb3JkUGFuZWxBY3Rpb25EYXRhIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0b3JlOiB0aGlzLnN0b3JlLFxuICAgICAgICAgICAgbGlzdFN0b3JlOiB0aGlzLmxpc3RTdG9yZSxcbiAgICAgICAgICAgIGFjdGlvblxuICAgICAgICB9IGFzIExpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25EYXRhO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRNb2RlKCk6IFZpZXdNb2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0TW9kZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRNb2R1bGVOYW1lKGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0TW9kdWxlTmFtZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWxvYWQoYWN0aW9uOiBBY3Rpb24sIHByb2Nlc3M6IFByb2Nlc3MsIGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogdm9pZCB7XG4gICAgICAgIHRoaXMubGlzdFN0b3JlLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuIl19