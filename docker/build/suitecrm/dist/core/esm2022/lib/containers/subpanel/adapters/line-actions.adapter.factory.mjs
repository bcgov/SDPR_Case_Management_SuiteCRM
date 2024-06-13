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
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { LanguageStore } from '../../../store/language/language.store';
import { SubpanelLineActionsAdapter } from './line-actions.adapter';
import { SubpanelLineActionManager } from '../line-actions/line-action-manager.service';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
import * as i1 from "../line-actions/line-action-manager.service";
import * as i2 from "../../../services/process/processes/async-action/async-action";
import * as i3 from "../../../services/message/message.service";
import * as i4 from "../../../services/modals/confirmation-modal.service";
import * as i5 from "../../../store/language/language.store";
import * as i6 from "../../../services/modals/select-modal.service";
import * as i7 from "../../../store/metadata/metadata.store.service";
import * as i8 from "../../../store/app-metadata/app-metadata.store.service";
class SubpanelLineActionsAdapterFactory {
    constructor(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata, appMetadataStore) {
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.language = language;
        this.selectModalService = selectModalService;
        this.metadata = metadata;
        this.appMetadataStore = appMetadataStore;
    }
    create(store) {
        return new SubpanelLineActionsAdapter(store, this.actionManager, this.asyncActionService, this.message, this.confirmation, this.language, this.selectModalService, this.metadata, this.appMetadataStore);
    }
    static { this.ɵfac = function SubpanelLineActionsAdapterFactory_Factory(t) { return new (t || SubpanelLineActionsAdapterFactory)(i0.ɵɵinject(i1.SubpanelLineActionManager), i0.ɵɵinject(i2.AsyncActionService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.ConfirmationModalService), i0.ɵɵinject(i5.LanguageStore), i0.ɵɵinject(i6.SelectModalService), i0.ɵɵinject(i7.MetadataStore), i0.ɵɵinject(i8.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelLineActionsAdapterFactory, factory: SubpanelLineActionsAdapterFactory.ɵfac, providedIn: 'root' }); }
}
export { SubpanelLineActionsAdapterFactory };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelLineActionsAdapterFactory, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.SubpanelLineActionManager }, { type: i2.AsyncActionService }, { type: i3.MessageService }, { type: i4.ConfirmationModalService }, { type: i5.LanguageStore }, { type: i6.SelectModalService }, { type: i7.MetadataStore }, { type: i8.AppMetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1hY3Rpb25zLmFkYXB0ZXIuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3N1YnBhbmVsL2FkYXB0ZXJzL2xpbmUtYWN0aW9ucy5hZGFwdGVyLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDakcsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUVyRSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDN0UsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0RBQXdELENBQUM7Ozs7Ozs7Ozs7QUFHeEYsTUFHYSxpQ0FBaUM7SUFFMUMsWUFDYyxhQUF3QyxFQUN4QyxrQkFBc0MsRUFDdEMsT0FBdUIsRUFDdkIsWUFBc0MsRUFDdEMsUUFBdUIsRUFDdkIsa0JBQXNDLEVBQ3RDLFFBQXVCLEVBQ3ZCLGdCQUFrQztRQVBsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBMkI7UUFDeEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUVoRCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQW9CO1FBQ3ZCLE9BQU8sSUFBSSwwQkFBMEIsQ0FDakMsS0FBSyxFQUNMLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFDdkIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxrQkFBa0IsRUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQ3hCLENBQUM7SUFDTixDQUFDO2tHQTFCUSxpQ0FBaUM7dUVBQWpDLGlDQUFpQyxXQUFqQyxpQ0FBaUMsbUJBRjlCLE1BQU07O1NBRVQsaUNBQWlDO3VGQUFqQyxpQ0FBaUM7Y0FIN0MsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtDb25maXJtYXRpb25Nb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9jb25maXJtYXRpb24tbW9kYWwuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7U3VicGFuZWxTdG9yZX0gZnJvbSAnLi4vc3RvcmUvc3VicGFuZWwvc3VicGFuZWwuc3RvcmUnO1xuaW1wb3J0IHtTdWJwYW5lbExpbmVBY3Rpb25zQWRhcHRlcn0gZnJvbSAnLi9saW5lLWFjdGlvbnMuYWRhcHRlcic7XG5pbXBvcnQge1N1YnBhbmVsTGluZUFjdGlvbk1hbmFnZXJ9IGZyb20gJy4uL2xpbmUtYWN0aW9ucy9saW5lLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWxlY3RNb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9zZWxlY3QtbW9kYWwuc2VydmljZSc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtBcHBNZXRhZGF0YVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvYXBwLW1ldGFkYXRhL2FwcC1tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlXCI7XG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3VicGFuZWxMaW5lQWN0aW9uc0FkYXB0ZXJGYWN0b3J5IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uTWFuYWdlcjogU3VicGFuZWxMaW5lQWN0aW9uTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uU2VydmljZTogQXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBjb25maXJtYXRpb246IENvbmZpcm1hdGlvbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc2VsZWN0TW9kYWxTZXJ2aWNlOiBTZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFwcE1ldGFkYXRhU3RvcmU6IEFwcE1ldGFkYXRhU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBjcmVhdGUoc3RvcmU6IFN1YnBhbmVsU3RvcmUpOiBTdWJwYW5lbExpbmVBY3Rpb25zQWRhcHRlciB7XG4gICAgICAgIHJldHVybiBuZXcgU3VicGFuZWxMaW5lQWN0aW9uc0FkYXB0ZXIoXG4gICAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uTWFuYWdlcixcbiAgICAgICAgICAgIHRoaXMuYXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLFxuICAgICAgICAgICAgdGhpcy5jb25maXJtYXRpb24sXG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlLFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICB0aGlzLm1ldGFkYXRhLFxuICAgICAgICAgICAgdGhpcy5hcHBNZXRhZGF0YVN0b3JlXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19