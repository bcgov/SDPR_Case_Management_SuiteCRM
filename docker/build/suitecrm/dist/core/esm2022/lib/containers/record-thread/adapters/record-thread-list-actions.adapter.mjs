/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { isTrue } from 'common';
import { combineLatestWith, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { LanguageStore } from '../../../store/language/language.store';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { RecordThreadStore } from '../store/record-thread/record-thread.store';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { RecordThreadListActionManager } from "../actions/list-actions/record-thread-list-action-manager.service";
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
import * as i1 from "../store/record-thread/record-thread.store";
import * as i2 from "../../../store/language/language.store";
import * as i3 from "../actions/list-actions/record-thread-list-action-manager.service";
import * as i4 from "../../../services/process/processes/async-action/async-action";
import * as i5 from "../../../services/message/message.service";
import * as i6 from "../../../services/modals/confirmation-modal.service";
import * as i7 from "../../../services/modals/select-modal.service";
import * as i8 from "../../../store/metadata/metadata.store.service";
import * as i9 from "../../../store/app-metadata/app-metadata.store.service";
class RecordThreadListActionsAdapter extends BaseRecordActionsAdapter {
    constructor(threadStore, language, actionManager, asyncActionService, message, confirmation, selectModalService, metadata, appMetadataStore) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata, appMetadataStore);
        this.threadStore = threadStore;
        this.language = language;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.selectModalService = selectModalService;
        this.metadata = metadata;
        this.appMetadataStore = appMetadataStore;
        this.defaultActions = {
            detail: [],
            edit: [],
            create: [],
            list: []
        };
        this.collapseButtons = false;
    }
    getActions(context) {
        return of(this.threadStore.getListMetadata()).pipe(combineLatestWith(of('list')), map(([meta, mode]) => {
            if (!mode || !meta) {
                return [];
            }
            return this.parseModeActions(meta.actions, mode, this.threadStore.getViewContext());
        }));
    }
    /**
     * Get action name
     * @param action
     */
    getActionName(action) {
        return `record-thread-list-${action.key}`;
    }
    buildActionData(action, context) {
        return {
            threadStore: this.threadStore,
            action: action
        };
    }
    /**
     * Build backend process input
     *
     * @param action
     * @param actionName
     * @param moduleName
     * @param context
     */
    buildActionInput(action, actionName, moduleName, context = null) {
        this.message.removeMessages();
        return {
            action: actionName,
            module: this.threadStore.module,
            ids: this.threadStore.getRecordIds(),
            params: (action && action.params) || []
        };
    }
    getMode() {
        return 'list';
    }
    getModuleName(context) {
        return this.threadStore.module;
    }
    reload(action, process, context) {
        const reloadThread = process?.data?.reloadThread ?? false;
        if (isTrue(reloadThread)) {
            this.threadStore.reload();
        }
    }
    /**
     * @inheritDoc
     */
    shouldReload(process) {
        const reloadThread = process?.data?.reloadThread ?? false;
        return isTrue(reloadThread);
    }
    static { this.ɵfac = function RecordThreadListActionsAdapter_Factory(t) { return new (t || RecordThreadListActionsAdapter)(i0.ɵɵinject(i1.RecordThreadStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.RecordThreadListActionManager), i0.ɵɵinject(i4.AsyncActionService), i0.ɵɵinject(i5.MessageService), i0.ɵɵinject(i6.ConfirmationModalService), i0.ɵɵinject(i7.SelectModalService), i0.ɵɵinject(i8.MetadataStore), i0.ɵɵinject(i9.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordThreadListActionsAdapter, factory: RecordThreadListActionsAdapter.ɵfac }); }
}
export { RecordThreadListActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadListActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordThreadStore }, { type: i2.LanguageStore }, { type: i3.RecordThreadListActionManager }, { type: i4.AsyncActionService }, { type: i5.MessageService }, { type: i6.ConfirmationModalService }, { type: i7.SelectModalService }, { type: i8.MetadataStore }, { type: i9.AppMetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC1saXN0LWFjdGlvbnMuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvYWRhcHRlcnMvcmVjb3JkLXRocmVhZC1saXN0LWFjdGlvbnMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQXdCLE1BQU0sRUFBd0IsTUFBTSxRQUFRLENBQUM7QUFDNUUsT0FBTyxFQUFDLGlCQUFpQixFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkMsT0FBTyxFQUFtQixrQkFBa0IsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQ25ILE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFFekUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sc0RBQXNELENBQUM7QUFDOUYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDN0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBRTdFLE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLG1FQUFtRSxDQUFDO0FBRWhILE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHdEQUF3RCxDQUFDOzs7Ozs7Ozs7OztBQUV4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QUFNLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNPLFlBQVksQ0FBQyxPQUFnQjtRQUNuQyxNQUFNLFlBQVksR0FBRyxPQUFPLEVBQUUsSUFBSSxFQUFFLFlBQVksSUFBSSxLQUFLLENBQUM7UUFDMUQsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEMsQ0FBQzsrRkF4R1EsOEJBQThCO3VFQUE5Qiw4QkFBOEIsV0FBOUIsOEJBQThCOztTQUE5Qiw4QkFBOEI7dUZBQTlCLDhCQUE4QjtjQUQxQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb24sIEFjdGlvbkNvbnRleHQsIGlzVHJ1ZSwgTW9kZUFjdGlvbnMsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QXN5bmNBY3Rpb25JbnB1dCwgQXN5bmNBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtQcm9jZXNzfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge0NvbmZpcm1hdGlvbk1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7QmFzZVJlY29yZEFjdGlvbnNBZGFwdGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hY3Rpb25zL2Jhc2UtcmVjb3JkLWFjdGlvbi5hZGFwdGVyJztcbmltcG9ydCB7U2VsZWN0TW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvc2VsZWN0LW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRTdG9yZX0gZnJvbSAnLi4vc3RvcmUvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLnN0b3JlJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge1JlY29yZFRocmVhZExpc3RBY3Rpb25EYXRhfSBmcm9tIFwiLi4vYWN0aW9ucy9saXN0LWFjdGlvbnMvcmVjb3JkLXRocmVhZC1saXN0LmFjdGlvblwiO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRMaXN0QWN0aW9uTWFuYWdlcn0gZnJvbSBcIi4uL2FjdGlvbnMvbGlzdC1hY3Rpb25zL3JlY29yZC10aHJlYWQtbGlzdC1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlY29yZFRocmVhZExpc3RNZXRhZGF0YX0gZnJvbSAnLi4vc3RvcmUvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLWxpc3Quc3RvcmUubW9kZWwnO1xuaW1wb3J0IHtBcHBNZXRhZGF0YVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvYXBwLW1ldGFkYXRhL2FwcC1tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWNvcmRUaHJlYWRMaXN0QWN0aW9uc0FkYXB0ZXIgZXh0ZW5kcyBCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXI8UmVjb3JkVGhyZWFkTGlzdEFjdGlvbkRhdGE+IHtcblxuICAgIGRlZmF1bHRBY3Rpb25zOiBNb2RlQWN0aW9ucyA9IHtcbiAgICAgICAgZGV0YWlsOiBbXSxcbiAgICAgICAgZWRpdDogW10sXG4gICAgICAgIGNyZWF0ZTogW10sXG4gICAgICAgIGxpc3Q6IFtdXG4gICAgfTtcbiAgICBjb2xsYXBzZUJ1dHRvbnMgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgdGhyZWFkU3RvcmU6IFJlY29yZFRocmVhZFN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25NYW5hZ2VyOiBSZWNvcmRUaHJlYWRMaXN0QWN0aW9uTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uU2VydmljZTogQXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBjb25maXJtYXRpb246IENvbmZpcm1hdGlvbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHNlbGVjdE1vZGFsU2VydmljZTogU2VsZWN0TW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhcHBNZXRhZGF0YVN0b3JlOiBBcHBNZXRhZGF0YVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgYWN0aW9uTWFuYWdlcixcbiAgICAgICAgICAgIGFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBjb25maXJtYXRpb24sXG4gICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgIHNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgIG1ldGFkYXRhLFxuICAgICAgICAgICAgYXBwTWV0YWRhdGFTdG9yZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldEFjdGlvbnMoY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBPYnNlcnZhYmxlPEFjdGlvbltdPiB7XG4gICAgICAgIHJldHVybiBvZih0aGlzLnRocmVhZFN0b3JlLmdldExpc3RNZXRhZGF0YSgpKS5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgob2YoJ2xpc3QnIGFzIFZpZXdNb2RlKSksXG4gICAgICAgICAgICBtYXAoKFttZXRhLCBtb2RlXTogW1JlY29yZFRocmVhZExpc3RNZXRhZGF0YSwgVmlld01vZGVdKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIW1vZGUgfHwgIW1ldGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU1vZGVBY3Rpb25zKG1ldGEuYWN0aW9ucywgbW9kZSwgdGhpcy50aHJlYWRTdG9yZS5nZXRWaWV3Q29udGV4dCgpKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhY3Rpb24gbmFtZVxuICAgICAqIEBwYXJhbSBhY3Rpb25cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0QWN0aW9uTmFtZShhY3Rpb246IEFjdGlvbikge1xuICAgICAgICByZXR1cm4gYHJlY29yZC10aHJlYWQtbGlzdC0ke2FjdGlvbi5rZXl9YDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRBY3Rpb25EYXRhKGFjdGlvbjogQWN0aW9uLCBjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IFJlY29yZFRocmVhZExpc3RBY3Rpb25EYXRhIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRocmVhZFN0b3JlOiB0aGlzLnRocmVhZFN0b3JlLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfSBhcyBSZWNvcmRUaHJlYWRMaXN0QWN0aW9uRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBiYWNrZW5kIHByb2Nlc3MgaW5wdXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhY3Rpb25cbiAgICAgKiBAcGFyYW0gYWN0aW9uTmFtZVxuICAgICAqIEBwYXJhbSBtb2R1bGVOYW1lXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRBY3Rpb25JbnB1dChhY3Rpb246IEFjdGlvbiwgYWN0aW9uTmFtZTogc3RyaW5nLCBtb2R1bGVOYW1lOiBzdHJpbmcsIGNvbnRleHQ6IEFjdGlvbkNvbnRleHQgPSBudWxsKTogQXN5bmNBY3Rpb25JbnB1dCB7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlLnJlbW92ZU1lc3NhZ2VzKCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy50aHJlYWRTdG9yZS5tb2R1bGUsXG4gICAgICAgICAgICBpZHM6IHRoaXMudGhyZWFkU3RvcmUuZ2V0UmVjb3JkSWRzKCksXG4gICAgICAgICAgICBwYXJhbXM6IChhY3Rpb24gJiYgYWN0aW9uLnBhcmFtcykgfHwgW11cbiAgICAgICAgfSBhcyBBc3luY0FjdGlvbklucHV0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRNb2RlKCk6IFZpZXdNb2RlIHtcbiAgICAgICAgcmV0dXJuICdsaXN0JztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TW9kdWxlTmFtZShjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRocmVhZFN0b3JlLm1vZHVsZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVsb2FkKGFjdGlvbjogQWN0aW9uLCBwcm9jZXNzOiBQcm9jZXNzLCBjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHJlbG9hZFRocmVhZCA9IHByb2Nlc3M/LmRhdGE/LnJlbG9hZFRocmVhZCA/PyBmYWxzZTtcblxuICAgICAgICBpZiAoaXNUcnVlKHJlbG9hZFRocmVhZCkpIHtcbiAgICAgICAgICAgIHRoaXMudGhyZWFkU3RvcmUucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBzaG91bGRSZWxvYWQocHJvY2VzczogUHJvY2Vzcyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCByZWxvYWRUaHJlYWQgPSBwcm9jZXNzPy5kYXRhPy5yZWxvYWRUaHJlYWQgPz8gZmFsc2U7XG4gICAgICAgIHJldHVybiBpc1RydWUocmVsb2FkVGhyZWFkKTtcbiAgICB9XG59XG4iXX0=