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
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { LanguageStore } from '../../../store/language/language.store';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { ListViewRecordPanelActionsAdapter } from './record-panel-actions.adapter';
import { RecordPanelActionManager } from '../actions/record-panel/record-panel-action-manager.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/language/language.store";
import * as i2 from "../actions/record-panel/record-panel-action-manager.service";
import * as i3 from "../../../services/process/processes/async-action/async-action";
import * as i4 from "../../../services/message/message.service";
import * as i5 from "../../../services/modals/confirmation-modal.service";
import * as i6 from "../../../services/modals/select-modal.service";
import * as i7 from "../../../store/metadata/metadata.store.service";
import * as i8 from "../../../store/app-metadata/app-metadata.store.service";
class ListViewRecordPanelActionAdapterFactory {
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
    create(store, listStore) {
        const adapter = new ListViewRecordPanelActionsAdapter(store, listStore, this.language, this.actionManager, this.asyncActionService, this.message, this.confirmation, this.selectModalService, this.metadata, this.appMetadataStore);
        const collapseButtons = listStore?.recordPanelConfig?.collapseActions ?? null;
        if (collapseButtons !== null) {
            adapter.collapseButtons = collapseButtons;
        }
        return adapter;
    }
    static { this.ɵfac = function ListViewRecordPanelActionAdapterFactory_Factory(t) { return new (t || ListViewRecordPanelActionAdapterFactory)(i0.ɵɵinject(i1.LanguageStore), i0.ɵɵinject(i2.RecordPanelActionManager), i0.ɵɵinject(i3.AsyncActionService), i0.ɵɵinject(i4.MessageService), i0.ɵɵinject(i5.ConfirmationModalService), i0.ɵɵinject(i6.SelectModalService), i0.ɵɵinject(i7.MetadataStore), i0.ɵɵinject(i8.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewRecordPanelActionAdapterFactory, factory: ListViewRecordPanelActionAdapterFactory.ɵfac, providedIn: 'root' }); }
}
export { ListViewRecordPanelActionAdapterFactory };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewRecordPanelActionAdapterFactory, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.RecordPanelActionManager }, { type: i3.AsyncActionService }, { type: i4.MessageService }, { type: i5.ConfirmationModalService }, { type: i6.SelectModalService }, { type: i7.MetadataStore }, { type: i8.AppMetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXBhbmVsLWFjdGlvbnMuYWRhcHRlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3QvYWRhcHRlcnMvcmVjb3JkLXBhbmVsLWFjdGlvbnMuYWRhcHRlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDekUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFHakYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDckcsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQzdFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHdEQUF3RCxDQUFDOzs7Ozs7Ozs7O0FBRXhGLE1BR2EsdUNBQXVDO0lBRWhELFlBQ2MsUUFBdUIsRUFDdkIsYUFBdUMsRUFDdkMsa0JBQXNDLEVBQ3RDLE9BQXVCLEVBQ3ZCLFlBQXNDLEVBQ3RDLGtCQUFzQyxFQUN0QyxRQUF1QixFQUN2QixnQkFBa0M7UUFQbEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFDdkMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFaEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUF1QixFQUFFLFNBQXdCO1FBQ3BELE1BQU0sT0FBTyxHQUFHLElBQUksaUNBQWlDLENBQ2pELEtBQUssRUFDTCxTQUFTLEVBQ1QsSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsa0JBQWtCLEVBQ3ZCLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FDeEIsQ0FBQztRQUVGLE1BQU0sZUFBZSxHQUFHLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLElBQUksSUFBSSxDQUFDO1FBQzlFLElBQUksZUFBZSxLQUFLLElBQUksRUFBRTtZQUMxQixPQUFPLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztTQUM3QztRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7d0dBbENRLHVDQUF1Qzt1RUFBdkMsdUNBQXVDLFdBQXZDLHVDQUF1QyxtQkFGcEMsTUFBTTs7U0FFVCx1Q0FBdUM7dUZBQXZDLHVDQUF1QztjQUhuRCxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7Q29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvY29uZmlybWF0aW9uLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtMaXN0Vmlld1JlY29yZFBhbmVsQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4vcmVjb3JkLXBhbmVsLWFjdGlvbnMuYWRhcHRlcic7XG5pbXBvcnQge1JlY29yZFBhbmVsU3RvcmV9IGZyb20gJy4uLy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLXBhbmVsL3N0b3JlL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwuc3RvcmUnO1xuaW1wb3J0IHtMaXN0Vmlld1N0b3JlfSBmcm9tICcuLi9zdG9yZS9saXN0LXZpZXcvbGlzdC12aWV3LnN0b3JlJztcbmltcG9ydCB7UmVjb3JkUGFuZWxBY3Rpb25NYW5hZ2VyfSBmcm9tICcuLi9hY3Rpb25zL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwtYWN0aW9uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQge1NlbGVjdE1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL3NlbGVjdC1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge0FwcE1ldGFkYXRhU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9hcHAtbWV0YWRhdGEvYXBwLW1ldGFkYXRhLnN0b3JlLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdSZWNvcmRQYW5lbEFjdGlvbkFkYXB0ZXJGYWN0b3J5IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25NYW5hZ2VyOiBSZWNvcmRQYW5lbEFjdGlvbk1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb25Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3RNb2RhbFNlcnZpY2U6IFNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwTWV0YWRhdGFTdG9yZTogQXBwTWV0YWRhdGFTdG9yZVxuICAgICkge1xuICAgIH1cblxuICAgIGNyZWF0ZShzdG9yZTogUmVjb3JkUGFuZWxTdG9yZSwgbGlzdFN0b3JlOiBMaXN0Vmlld1N0b3JlKTogTGlzdFZpZXdSZWNvcmRQYW5lbEFjdGlvbnNBZGFwdGVyIHtcbiAgICAgICAgY29uc3QgYWRhcHRlciA9IG5ldyBMaXN0Vmlld1JlY29yZFBhbmVsQWN0aW9uc0FkYXB0ZXIoXG4gICAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICAgIGxpc3RTdG9yZSxcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2UsXG4gICAgICAgICAgICB0aGlzLmFjdGlvbk1hbmFnZXIsXG4gICAgICAgICAgICB0aGlzLmFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRoaXMuY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICB0aGlzLm1ldGFkYXRhLFxuICAgICAgICAgICAgdGhpcy5hcHBNZXRhZGF0YVN0b3JlXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY29sbGFwc2VCdXR0b25zID0gbGlzdFN0b3JlPy5yZWNvcmRQYW5lbENvbmZpZz8uY29sbGFwc2VBY3Rpb25zID8/IG51bGw7XG4gICAgICAgIGlmIChjb2xsYXBzZUJ1dHRvbnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGFkYXB0ZXIuY29sbGFwc2VCdXR0b25zID0gY29sbGFwc2VCdXR0b25zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFkYXB0ZXI7XG4gICAgfVxufVxuIl19