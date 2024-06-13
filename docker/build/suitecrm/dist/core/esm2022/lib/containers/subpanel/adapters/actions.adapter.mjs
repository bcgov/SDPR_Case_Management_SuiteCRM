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
import { combineLatestWith } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { LanguageStore } from '../../../store/language/language.store';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import { SelectModalService } from "../../../services/modals/select-modal.service";
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { SubpanelActionManager } from "../components/subpanel/action-manager.service";
import { SubpanelStore } from "../store/subpanel/subpanel.store";
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
import * as i1 from "../store/subpanel/subpanel.store";
import * as i2 from "../../../store/language/language.store";
import * as i3 from "../components/subpanel/action-manager.service";
import * as i4 from "../../../services/process/processes/async-action/async-action";
import * as i5 from "../../../services/message/message.service";
import * as i6 from "../../../services/modals/confirmation-modal.service";
import * as i7 from "../../../services/modals/select-modal.service";
import * as i8 from "../../../store/metadata/metadata.store.service";
import * as i9 from "../../../store/app-metadata/app-metadata.store.service";
class SubpanelActionsAdapter extends BaseRecordActionsAdapter {
    constructor(store, language, actionManager, asyncActionService, message, confirmation, selectModalService, metadata, appMetadataStore) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata, appMetadataStore);
        this.store = store;
        this.language = language;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.selectModalService = selectModalService;
        this.metadata = metadata;
        this.appMetadataStore = appMetadataStore;
    }
    getActions(context) {
        return this.store.metadata$.pipe(combineLatestWith(this.language.vm$, this.store.criteria$), map(([meta, language, criteria]) => {
            if (!meta) {
                return [];
            }
            return this.parseModeActions(meta.top_buttons, "list");
        }));
    }
    buildActionData(action, context) {
        return {
            subpanelMeta: this.store?.metadata,
            module: action.module || this.store.metadata?.module,
            parentModule: this.store.parentModule,
            parentId: this.store.parentId,
            store: this.store,
            action
        };
    }
    getMode() {
        return 'list';
    }
    getModuleName(context) {
        return this.store?.metadata?.module;
    }
    reload(action, process, context) {
        this.store.load(false).pipe(take(1)).subscribe();
    }
    static { this.ɵfac = function SubpanelActionsAdapter_Factory(t) { return new (t || SubpanelActionsAdapter)(i0.ɵɵinject(i1.SubpanelStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.SubpanelActionManager), i0.ɵɵinject(i4.AsyncActionService), i0.ɵɵinject(i5.MessageService), i0.ɵɵinject(i6.ConfirmationModalService), i0.ɵɵinject(i7.SelectModalService), i0.ɵɵinject(i8.MetadataStore), i0.ɵɵinject(i9.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelActionsAdapter, factory: SubpanelActionsAdapter.ɵfac }); }
}
export { SubpanelActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.SubpanelStore }, { type: i2.LanguageStore }, { type: i3.SubpanelActionManager }, { type: i4.AsyncActionService }, { type: i5.MessageService }, { type: i6.ConfirmationModalService }, { type: i7.SelectModalService }, { type: i8.MetadataStore }, { type: i9.AppMetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvc3VicGFuZWwvYWRhcHRlcnMvYWN0aW9ucy5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBZ0IsaUJBQWlCLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQU0sTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUNqRyxPQUFPLEVBQUMsYUFBYSxFQUFrQixNQUFNLHdDQUF3QyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUV6RSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM3RixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDN0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFcEYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQy9ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHdEQUF3RCxDQUFDOzs7Ozs7Ozs7OztBQUV4RixNQUNhLHNCQUF1QixTQUFRLHdCQUE0QztJQUVwRixZQUNjLEtBQW9CLEVBQ3BCLFFBQXVCLEVBQ3ZCLGFBQW9DLEVBQ3BDLGtCQUFzQyxFQUN0QyxPQUF1QixFQUN2QixZQUFzQyxFQUN0QyxrQkFBc0MsRUFDdEMsUUFBdUIsRUFDdkIsZ0JBQWtDO1FBRTVDLEtBQUssQ0FDRCxhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxFQUNSLGtCQUFrQixFQUNsQixRQUFRLEVBQ1IsZ0JBQWdCLENBQ25CLENBQUE7UUFuQlMsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQUNwQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtRQUN0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQVloRCxDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQXVCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUM1QixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUMxRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUF3RCxFQUFFLEVBQUU7WUFDdEYsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDUCxPQUFPLEVBQUUsQ0FBQzthQUNiO1lBRUQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFrQixDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFFUyxlQUFlLENBQUMsTUFBYyxFQUFFLE9BQXVCO1FBQzdELE9BQU87WUFDSCxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRO1lBQ2xDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU07WUFDcEQsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUNyQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNO1NBQ2EsQ0FBQztJQUM1QixDQUFDO0lBRVMsT0FBTztRQUNiLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFUyxhQUFhLENBQUMsT0FBdUI7UUFDM0MsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7SUFDeEMsQ0FBQztJQUVTLE1BQU0sQ0FBQyxNQUFjLEVBQUUsT0FBZ0IsRUFBRSxPQUF1QjtRQUN0RSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckQsQ0FBQzt1RkEzRFEsc0JBQXNCO3VFQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCOztTQUF0QixzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQURsQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb24sIEFjdGlvbkNvbnRleHQsIFNlYXJjaENyaXRlcmlhLCBTdWJQYW5lbERlZmluaXRpb24sIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgdGFrZSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0FzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nc30gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtQcm9jZXNzfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge0NvbmZpcm1hdGlvbk1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7QmFzZVJlY29yZEFjdGlvbnNBZGFwdGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hY3Rpb25zL2Jhc2UtcmVjb3JkLWFjdGlvbi5hZGFwdGVyJztcbmltcG9ydCB7U2VsZWN0TW9kYWxTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL3NlbGVjdC1tb2RhbC5zZXJ2aWNlXCI7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtTdWJwYW5lbEFjdGlvbk1hbmFnZXJ9IGZyb20gXCIuLi9jb21wb25lbnRzL3N1YnBhbmVsL2FjdGlvbi1tYW5hZ2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7U3VicGFuZWxBY3Rpb25EYXRhfSBmcm9tIFwiLi4vYWN0aW9ucy9zdWJwYW5lbC5hY3Rpb25cIjtcbmltcG9ydCB7U3VicGFuZWxTdG9yZX0gZnJvbSBcIi4uL3N0b3JlL3N1YnBhbmVsL3N1YnBhbmVsLnN0b3JlXCI7XG5pbXBvcnQge0FwcE1ldGFkYXRhU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9hcHAtbWV0YWRhdGEvYXBwLW1ldGFkYXRhLnN0b3JlLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1YnBhbmVsQWN0aW9uc0FkYXB0ZXIgZXh0ZW5kcyBCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXI8U3VicGFuZWxBY3Rpb25EYXRhPiB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlOiBTdWJwYW5lbFN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25NYW5hZ2VyOiBTdWJwYW5lbEFjdGlvbk1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb25Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3RNb2RhbFNlcnZpY2U6IFNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwTWV0YWRhdGFTdG9yZTogQXBwTWV0YWRhdGFTdG9yZVxuICAgICkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGFjdGlvbk1hbmFnZXIsXG4gICAgICAgICAgICBhc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgICAgICBzZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgICAgIGFwcE1ldGFkYXRhU3RvcmVcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGdldEFjdGlvbnMoY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBPYnNlcnZhYmxlPEFjdGlvbltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLm1ldGFkYXRhJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5sYW5ndWFnZS52bSQsIHRoaXMuc3RvcmUuY3JpdGVyaWEkKSxcbiAgICAgICAgICAgIG1hcCgoW21ldGEsIGxhbmd1YWdlLCBjcml0ZXJpYV06IFtTdWJQYW5lbERlZmluaXRpb24sIExhbmd1YWdlU3RyaW5ncywgU2VhcmNoQ3JpdGVyaWFdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtZXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU1vZGVBY3Rpb25zKG1ldGEudG9wX2J1dHRvbnMsIFwibGlzdFwiIGFzIFZpZXdNb2RlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkQWN0aW9uRGF0YShhY3Rpb246IEFjdGlvbiwgY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBTdWJwYW5lbEFjdGlvbkRhdGEge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VicGFuZWxNZXRhOiB0aGlzLnN0b3JlPy5tZXRhZGF0YSxcbiAgICAgICAgICAgIG1vZHVsZTogYWN0aW9uLm1vZHVsZSB8fCB0aGlzLnN0b3JlLm1ldGFkYXRhPy5tb2R1bGUsXG4gICAgICAgICAgICBwYXJlbnRNb2R1bGU6IHRoaXMuc3RvcmUucGFyZW50TW9kdWxlLFxuICAgICAgICAgICAgcGFyZW50SWQ6IHRoaXMuc3RvcmUucGFyZW50SWQsXG4gICAgICAgICAgICBzdG9yZTogdGhpcy5zdG9yZSxcbiAgICAgICAgICAgIGFjdGlvblxuICAgICAgICB9IGFzIFN1YnBhbmVsQWN0aW9uRGF0YTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TW9kZSgpOiBWaWV3TW9kZSB7XG4gICAgICAgIHJldHVybiAnbGlzdCc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldE1vZHVsZU5hbWUoY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZT8ubWV0YWRhdGE/Lm1vZHVsZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVsb2FkKGFjdGlvbjogQWN0aW9uLCBwcm9jZXNzOiBQcm9jZXNzLCBjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuIl19