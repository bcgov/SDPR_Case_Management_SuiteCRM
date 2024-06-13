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
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { LanguageStore } from '../../../store/language/language.store';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { RecordThreadListActionsAdapter } from "./record-thread-list-actions.adapter";
import { RecordThreadListActionManager } from "../actions/list-actions/record-thread-list-action-manager.service";
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/language/language.store";
import * as i2 from "../actions/list-actions/record-thread-list-action-manager.service";
import * as i3 from "../../../services/process/processes/async-action/async-action";
import * as i4 from "../../../services/message/message.service";
import * as i5 from "../../../services/modals/confirmation-modal.service";
import * as i6 from "../../../services/modals/select-modal.service";
import * as i7 from "../../../store/metadata/metadata.store.service";
import * as i8 from "../../../store/app-metadata/app-metadata.store.service";
class RecordThreadListActionsAdapterFactory {
    constructor(language, actionManager, asyncActionService, message, confirmation, selectModalService, metadata, appMetadataStore) {
        this.language = language;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.selectModalService = selectModalService;
        this.metadata = metadata;
        this.appMetadataStore = appMetadataStore;
    }
    create(threadStore, config) {
        const adapter = new RecordThreadListActionsAdapter(threadStore, this.language, this.actionManager, this.asyncActionService, this.message, this.confirmation, this.selectModalService, this.metadata, this.appMetadataStore);
        const collapseButtons = config?.collapseListActions ?? null;
        if (collapseButtons !== null) {
            adapter.collapseButtons = collapseButtons;
        }
        return adapter;
    }
    static { this.ɵfac = function RecordThreadListActionsAdapterFactory_Factory(t) { return new (t || RecordThreadListActionsAdapterFactory)(i0.ɵɵinject(i1.LanguageStore), i0.ɵɵinject(i2.RecordThreadListActionManager), i0.ɵɵinject(i3.AsyncActionService), i0.ɵɵinject(i4.MessageService), i0.ɵɵinject(i5.ConfirmationModalService), i0.ɵɵinject(i6.SelectModalService), i0.ɵɵinject(i7.MetadataStore), i0.ɵɵinject(i8.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordThreadListActionsAdapterFactory, factory: RecordThreadListActionsAdapterFactory.ɵfac, providedIn: 'root' }); }
}
export { RecordThreadListActionsAdapterFactory };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadListActionsAdapterFactory, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.RecordThreadListActionManager }, { type: i3.AsyncActionService }, { type: i4.MessageService }, { type: i5.ConfirmationModalService }, { type: i6.SelectModalService }, { type: i7.MetadataStore }, { type: i8.AppMetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC1saXN0LWFjdGlvbnMuYWRhcHRlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvcmVjb3JkLXRocmVhZC9hZGFwdGVycy9yZWNvcmQtdGhyZWFkLWxpc3QtYWN0aW9ucy5hZGFwdGVyLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDakcsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRWpGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDN0UsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDcEYsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sbUVBQW1FLENBQUM7QUFFaEgsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0RBQXdELENBQUM7Ozs7Ozs7Ozs7QUFFeEYsTUFHYSxxQ0FBcUM7SUFFOUMsWUFDYyxRQUF1QixFQUN2QixhQUE0QyxFQUM1QyxrQkFBc0MsRUFDdEMsT0FBdUIsRUFDdkIsWUFBc0MsRUFDdEMsa0JBQXNDLEVBQ3RDLFFBQXVCLEVBQ3ZCLGdCQUFrQztRQVBsQyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUErQjtRQUM1Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtRQUN0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUVoRCxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQThCLEVBQUUsTUFBMEI7UUFDN0QsTUFBTSxPQUFPLEdBQUcsSUFBSSw4QkFBOEIsQ0FDOUMsV0FBVyxFQUNYLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxrQkFBa0IsRUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQ3hCLENBQUM7UUFFRixNQUFNLGVBQWUsR0FBRyxNQUFNLEVBQUUsbUJBQW1CLElBQUksSUFBSSxDQUFDO1FBQzVELElBQUksZUFBZSxLQUFLLElBQUksRUFBRTtZQUMxQixPQUFPLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztTQUM3QztRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7c0dBakNRLHFDQUFxQzt1RUFBckMscUNBQXFDLFdBQXJDLHFDQUFxQyxtQkFGbEMsTUFBTTs7U0FFVCxxQ0FBcUM7dUZBQXJDLHFDQUFxQztjQUhqRCxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge0NvbmZpcm1hdGlvbk1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7U2VsZWN0TW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvc2VsZWN0LW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRTdG9yZX0gZnJvbSAnLi4vc3RvcmUvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLnN0b3JlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkTGlzdEFjdGlvbnNBZGFwdGVyfSBmcm9tIFwiLi9yZWNvcmQtdGhyZWFkLWxpc3QtYWN0aW9ucy5hZGFwdGVyXCI7XG5pbXBvcnQge1JlY29yZFRocmVhZExpc3RBY3Rpb25NYW5hZ2VyfSBmcm9tIFwiLi4vYWN0aW9ucy9saXN0LWFjdGlvbnMvcmVjb3JkLXRocmVhZC1saXN0LWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVjb3JkVGhyZWFkQ29uZmlnfSBmcm9tICcuLi9jb21wb25lbnRzL3JlY29yZC10aHJlYWQvcmVjb3JkLXRocmVhZC5tb2RlbCc7XG5pbXBvcnQge0FwcE1ldGFkYXRhU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9hcHAtbWV0YWRhdGEvYXBwLW1ldGFkYXRhLnN0b3JlLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkVGhyZWFkTGlzdEFjdGlvbnNBZGFwdGVyRmFjdG9yeSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uTWFuYWdlcjogUmVjb3JkVGhyZWFkTGlzdEFjdGlvbk1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb25Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3RNb2RhbFNlcnZpY2U6IFNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwTWV0YWRhdGFTdG9yZTogQXBwTWV0YWRhdGFTdG9yZVxuICAgICkge1xuICAgIH1cblxuICAgIGNyZWF0ZSh0aHJlYWRTdG9yZTogUmVjb3JkVGhyZWFkU3RvcmUsIGNvbmZpZzogUmVjb3JkVGhyZWFkQ29uZmlnKTogUmVjb3JkVGhyZWFkTGlzdEFjdGlvbnNBZGFwdGVyIHtcbiAgICAgICAgY29uc3QgYWRhcHRlciA9IG5ldyBSZWNvcmRUaHJlYWRMaXN0QWN0aW9uc0FkYXB0ZXIoXG4gICAgICAgICAgICB0aHJlYWRTdG9yZSxcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2UsXG4gICAgICAgICAgICB0aGlzLmFjdGlvbk1hbmFnZXIsXG4gICAgICAgICAgICB0aGlzLmFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICB0aGlzLm1ldGFkYXRhLFxuICAgICAgICAgICAgdGhpcy5hcHBNZXRhZGF0YVN0b3JlXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY29sbGFwc2VCdXR0b25zID0gY29uZmlnPy5jb2xsYXBzZUxpc3RBY3Rpb25zID8/IG51bGw7XG4gICAgICAgIGlmIChjb2xsYXBzZUJ1dHRvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGFkYXB0ZXIuY29sbGFwc2VCdXR0b25zID0gY29sbGFwc2VCdXR0b25zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFkYXB0ZXI7XG4gICAgfVxufVxuIl19