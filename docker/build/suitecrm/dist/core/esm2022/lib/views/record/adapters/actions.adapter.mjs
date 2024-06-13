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
import { combineLatestWith } from 'rxjs';
import { map, take, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { RecordViewStore } from '../store/record-view/record-view.store';
import { RecordActionManager } from '../actions/record-action-manager.service';
import { AsyncActionService, } from '../../../services/process/processes/async-action/async-action';
import { LanguageStore } from '../../../store/language/language.store';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { RecordActionDisplayTypeLogic } from '../action-logic/display-type/display-type.logic';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
import * as i1 from "../store/record-view/record-view.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
import * as i3 from "../../../store/language/language.store";
import * as i4 from "../actions/record-action-manager.service";
import * as i5 from "../../../services/process/processes/async-action/async-action";
import * as i6 from "../../../services/message/message.service";
import * as i7 from "../../../services/modals/confirmation-modal.service";
import * as i8 from "../../../services/modals/select-modal.service";
import * as i9 from "../action-logic/display-type/display-type.logic";
import * as i10 from "../../../store/app-metadata/app-metadata.store.service";
class RecordActionsAdapter extends BaseRecordActionsAdapter {
    constructor(store, metadata, language, actionManager, asyncActionService, message, confirmation, selectModalService, displayTypeLogic, appMetadataStore) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata, appMetadataStore);
        this.store = store;
        this.metadata = metadata;
        this.language = language;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.selectModalService = selectModalService;
        this.displayTypeLogic = displayTypeLogic;
        this.appMetadataStore = appMetadataStore;
        this.defaultActions = {
            detail: [
                {
                    key: 'toggle-widgets',
                    labelKey: 'LBL_INSIGHTS',
                    params: {
                        expanded: true
                    },
                    acl: []
                },
            ],
            edit: [
                {
                    key: 'toggle-widgets',
                    labelKey: 'LBL_INSIGHTS',
                    params: {
                        expanded: true
                    },
                    acl: []
                }
            ],
        };
    }
    getActions(context) {
        return this.metadata.recordViewMetadata$.pipe(combineLatestWith(this.store.mode$, this.store.record$, this.store.language$, this.store.widgets$, this.store.panels$), map(([meta, mode]) => {
            if (!mode || !meta) {
                return [];
            }
            return this.parseModeActions(meta.actions, mode, this.store.getViewContext());
        }));
    }
    buildActionData(action, context) {
        return {
            store: this.store,
            action,
        };
    }
    /**
     * Build backend process input
     *
     * @param {Action} action Action
     * @param {string} actionName Action Name
     * @param {string} moduleName Module Name
     * @param {ActionContext|null} context Context
     * @returns {AsyncActionInput} Built backend process input
     */
    buildActionInput(action, actionName, moduleName, context = null) {
        const baseRecord = this.store.getBaseRecord();
        this.message.removeMessages();
        return {
            action: actionName,
            module: baseRecord.module,
            id: baseRecord.id,
            params: (action && action.params) || []
        };
    }
    getMode() {
        return this.store.getMode();
    }
    getModuleName(context) {
        return this.store.getModuleName();
    }
    reload(action, process, context) {
        this.store.load(false).pipe(take(1)).subscribe();
    }
    shouldDisplay(actionHandler, data) {
        const displayLogic = data?.action?.displayLogic ?? null;
        let toDisplay = true;
        if (displayLogic && Object.keys(displayLogic).length) {
            toDisplay = this.displayTypeLogic.runAll(displayLogic, data);
        }
        if (!toDisplay) {
            return false;
        }
        return actionHandler && actionHandler.shouldDisplay(data);
    }
    static { this.ɵfac = function RecordActionsAdapter_Factory(t) { return new (t || RecordActionsAdapter)(i0.ɵɵinject(i1.RecordViewStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.LanguageStore), i0.ɵɵinject(i4.RecordActionManager), i0.ɵɵinject(i5.AsyncActionService), i0.ɵɵinject(i6.MessageService), i0.ɵɵinject(i7.ConfirmationModalService), i0.ɵɵinject(i8.SelectModalService), i0.ɵɵinject(i9.RecordActionDisplayTypeLogic), i0.ɵɵinject(i10.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordActionsAdapter, factory: RecordActionsAdapter.ɵfac }); }
}
export { RecordActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordViewStore }, { type: i2.MetadataStore }, { type: i3.LanguageStore }, { type: i4.RecordActionManager }, { type: i5.AsyncActionService }, { type: i6.MessageService }, { type: i7.ConfirmationModalService }, { type: i8.SelectModalService }, { type: i9.RecordActionDisplayTypeLogic }, { type: i10.AppMetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL3JlY29yZC9hZGFwdGVycy9hY3Rpb25zLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBRSxpQkFBaUIsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQ0gsR0FBRyxFQUNILElBQUksR0FDUCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFXM0MsT0FBTyxFQUFFLGFBQWEsRUFBc0IsTUFBTSxnREFBZ0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUVILGtCQUFrQixHQUNyQixNQUFNLCtEQUErRCxDQUFDO0FBRXZFLE9BQU8sRUFBRSxhQUFhLEVBQW1CLE1BQU0sd0NBQXdDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9GLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHdEQUF3RCxDQUFDOzs7Ozs7Ozs7Ozs7QUFFeEYsTUFDYSxvQkFBcUIsU0FBUSx3QkFBMEM7SUF5QmhGLFlBQ2MsS0FBc0IsRUFD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UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVTLGFBQWEsQ0FBQyxPQUF1QjtRQUMzQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVTLE1BQU0sQ0FBQyxNQUFjLEVBQUUsT0FBZ0IsRUFBRSxPQUF1QjtRQUN0RSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVTLGFBQWEsQ0FBQyxhQUE4QyxFQUFFLElBQXNCO1FBRTFGLE1BQU0sWUFBWSxHQUE0QixJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksSUFBSSxJQUFJLENBQUM7UUFDakYsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksWUFBWSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2xELFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoRTtRQUVELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDWixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sYUFBYSxJQUFJLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztxRkFySFEsb0JBQW9CO3VFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9COztTQUFwQixvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQURoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgICBtYXAsXG4gICAgdGFrZSxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBBY3Rpb24sXG4gICAgQWN0aW9uQ29udGV4dCxcbiAgICBBY3Rpb25IYW5kbGVyLFxuICAgIExvZ2ljRGVmaW5pdGlvbnMsXG4gICAgTW9kZUFjdGlvbnMsXG4gICAgUmVjb3JkLFxuICAgIFZpZXdNb2RlLFxuICAgIFBhbmVsXG59IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBNZXRhZGF0YVN0b3JlLCBSZWNvcmRWaWV3TWV0YWRhdGEgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJlY29yZFZpZXdTdG9yZSB9IGZyb20gJy4uL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlJztcbmltcG9ydCB7IFJlY29yZEFjdGlvbk1hbmFnZXIgfSBmcm9tICcuLi9hY3Rpb25zL3JlY29yZC1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gICAgQXN5bmNBY3Rpb25JbnB1dCxcbiAgICBBc3luY0FjdGlvblNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHsgUmVjb3JkQWN0aW9uRGF0YSB9IGZyb20gJy4uL2FjdGlvbnMvcmVjb3JkLmFjdGlvbic7XG5pbXBvcnQgeyBMYW5ndWFnZVN0b3JlLCBMYW5ndWFnZVN0cmluZ3MgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2Nlc3MgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvY29uZmlybWF0aW9uLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFzZVJlY29yZEFjdGlvbnNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYWN0aW9ucy9iYXNlLXJlY29yZC1hY3Rpb24uYWRhcHRlcic7XG5pbXBvcnQgeyBTZWxlY3RNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvc2VsZWN0LW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVjb3JkQWN0aW9uRGlzcGxheVR5cGVMb2dpYyB9IGZyb20gJy4uL2FjdGlvbi1sb2dpYy9kaXNwbGF5LXR5cGUvZGlzcGxheS10eXBlLmxvZ2ljJztcbmltcG9ydCB7QXBwTWV0YWRhdGFTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2FwcC1tZXRhZGF0YS9hcHAtbWV0YWRhdGEuc3RvcmUuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVjb3JkQWN0aW9uc0FkYXB0ZXIgZXh0ZW5kcyBCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXI8UmVjb3JkQWN0aW9uRGF0YT4ge1xuXG4gICAgZGVmYXVsdEFjdGlvbnM6IE1vZGVBY3Rpb25zID0ge1xuICAgICAgICBkZXRhaWw6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICd0b2dnbGUtd2lkZ2V0cycsXG4gICAgICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfSU5TSUdIVFMnLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWNsOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZWRpdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ3RvZ2dsZS13aWRnZXRzJyxcbiAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9JTlNJR0hUUycsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhY2w6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IFJlY29yZFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25NYW5hZ2VyOiBSZWNvcmRBY3Rpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc2VsZWN0TW9kYWxTZXJ2aWNlOiBTZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBkaXNwbGF5VHlwZUxvZ2ljOiBSZWNvcmRBY3Rpb25EaXNwbGF5VHlwZUxvZ2ljLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwTWV0YWRhdGFTdG9yZTogQXBwTWV0YWRhdGFTdG9yZVxuICAgICkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGFjdGlvbk1hbmFnZXIsXG4gICAgICAgICAgICBhc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgICAgICBzZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgICAgIGFwcE1ldGFkYXRhU3RvcmVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRBY3Rpb25zKGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogT2JzZXJ2YWJsZTxBY3Rpb25bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXRhZGF0YS5yZWNvcmRWaWV3TWV0YWRhdGEkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLnN0b3JlLm1vZGUkLCB0aGlzLnN0b3JlLnJlY29yZCQsIHRoaXMuc3RvcmUubGFuZ3VhZ2UkLCB0aGlzLnN0b3JlLndpZGdldHMkLCB0aGlzLnN0b3JlLnBhbmVscyQpLFxuICAgICAgICAgICAgbWFwKChbbWV0YSwgbW9kZV06IFtSZWNvcmRWaWV3TWV0YWRhdGEsIFZpZXdNb2RlLCBSZWNvcmQsIExhbmd1YWdlU3RyaW5ncywgYm9vbGVhbiwgUGFuZWxbXV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGUgfHwgIW1ldGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlTW9kZUFjdGlvbnMobWV0YS5hY3Rpb25zLCBtb2RlLCB0aGlzLnN0b3JlLmdldFZpZXdDb250ZXh0KCkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRBY3Rpb25EYXRhKGFjdGlvbjogQWN0aW9uLCBjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IFJlY29yZEFjdGlvbkRhdGEge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RvcmU6IHRoaXMuc3RvcmUsXG4gICAgICAgICAgICBhY3Rpb24sXG4gICAgICAgIH0gYXMgUmVjb3JkQWN0aW9uRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBiYWNrZW5kIHByb2Nlc3MgaW5wdXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QWN0aW9ufSBhY3Rpb24gQWN0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbk5hbWUgQWN0aW9uIE5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlTmFtZSBNb2R1bGUgTmFtZVxuICAgICAqIEBwYXJhbSB7QWN0aW9uQ29udGV4dHxudWxsfSBjb250ZXh0IENvbnRleHRcbiAgICAgKiBAcmV0dXJucyB7QXN5bmNBY3Rpb25JbnB1dH0gQnVpbHQgYmFja2VuZCBwcm9jZXNzIGlucHV0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkQWN0aW9uSW5wdXQoYWN0aW9uOiBBY3Rpb24sIGFjdGlvbk5hbWU6IHN0cmluZywgbW9kdWxlTmFtZTogc3RyaW5nLCBjb250ZXh0OiBBY3Rpb25Db250ZXh0ID0gbnVsbCk6IEFzeW5jQWN0aW9uSW5wdXQge1xuICAgICAgICBjb25zdCBiYXNlUmVjb3JkID0gdGhpcy5zdG9yZS5nZXRCYXNlUmVjb3JkKCk7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlLnJlbW92ZU1lc3NhZ2VzKCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1vZHVsZTogYmFzZVJlY29yZC5tb2R1bGUsXG4gICAgICAgICAgICBpZDogYmFzZVJlY29yZC5pZCxcbiAgICAgICAgICAgIHBhcmFtczogKGFjdGlvbiAmJiBhY3Rpb24ucGFyYW1zKSB8fCBbXVxuICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldE1vZGUoKTogVmlld01vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRNb2RlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldE1vZHVsZU5hbWUoY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRNb2R1bGVOYW1lKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbG9hZChhY3Rpb246IEFjdGlvbiwgcHJvY2VzczogUHJvY2VzcywgY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5sb2FkKGZhbHNlKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzaG91bGREaXNwbGF5KGFjdGlvbkhhbmRsZXI6IEFjdGlvbkhhbmRsZXI8UmVjb3JkQWN0aW9uRGF0YT4sIGRhdGE6IFJlY29yZEFjdGlvbkRhdGEpOiBib29sZWFuIHtcblxuICAgICAgICBjb25zdCBkaXNwbGF5TG9naWM6IExvZ2ljRGVmaW5pdGlvbnMgfCBudWxsID0gZGF0YT8uYWN0aW9uPy5kaXNwbGF5TG9naWMgPz8gbnVsbDtcbiAgICAgICAgbGV0IHRvRGlzcGxheSA9IHRydWU7XG5cbiAgICAgICAgaWYgKGRpc3BsYXlMb2dpYyAmJiBPYmplY3Qua2V5cyhkaXNwbGF5TG9naWMpLmxlbmd0aCkge1xuICAgICAgICAgICAgdG9EaXNwbGF5ID0gdGhpcy5kaXNwbGF5VHlwZUxvZ2ljLnJ1bkFsbChkaXNwbGF5TG9naWMsIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0b0Rpc3BsYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3Rpb25IYW5kbGVyICYmIGFjdGlvbkhhbmRsZXIuc2hvdWxkRGlzcGxheShkYXRhKTtcbiAgICB9XG59XG4iXX0=