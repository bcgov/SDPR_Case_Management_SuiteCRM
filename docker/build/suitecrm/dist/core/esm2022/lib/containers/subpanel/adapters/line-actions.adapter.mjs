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
import { combineLatestWith, of } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { LanguageStore } from '../../../store/language/language.store';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import { SubpanelStore } from '../store/subpanel/subpanel.store';
import { SubpanelLineActionManager } from '../line-actions/line-action-manager.service';
import { SelectModalService } from "../../../services/modals/select-modal.service";
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
import * as i1 from "../store/subpanel/subpanel.store";
import * as i2 from "../line-actions/line-action-manager.service";
import * as i3 from "../../../services/process/processes/async-action/async-action";
import * as i4 from "../../../services/message/message.service";
import * as i5 from "../../../services/modals/confirmation-modal.service";
import * as i6 from "../../../store/language/language.store";
import * as i7 from "../../../services/modals/select-modal.service";
import * as i8 from "../../../store/metadata/metadata.store.service";
import * as i9 from "../../../store/app-metadata/app-metadata.store.service";
class SubpanelLineActionsAdapter extends BaseRecordActionsAdapter {
    constructor(store, actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata, appMetadataStore) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata, appMetadataStore);
        this.store = store;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.language = language;
        this.selectModalService = selectModalService;
        this.metadata = metadata;
        this.appMetadataStore = appMetadataStore;
    }
    getActions(context = null) {
        return this.store.metadata$.pipe(map(metadata => metadata.lineActions)).pipe(combineLatestWith(of('list').pipe(shareReplay())), map(([actions, mode]) => {
            return this.parseModeActions(actions, mode, context);
        }));
    }
    buildActionData(action, context) {
        return {
            record: (context && context.record) || null,
            store: this.store,
            action: action
        };
    }
    getMode() {
        return 'list';
    }
    getModuleName(context) {
        return this.store.metadata.module;
    }
    reload(action, process, context) {
        this.store.load(false).pipe(take(1)).subscribe();
        this.store.loadAllStatistics(false).pipe(take(1)).subscribe();
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
        const metadata = this.store.metadata;
        const collectionList = metadata.collection_list || null;
        const module = (context && context.module) || moduleName;
        let linkField = metadata.get_subpanel_data;
        if (collectionList && collectionList[module] && collectionList[module].get_subpanel_data) {
            linkField = collectionList[module].get_subpanel_data;
        }
        if (linkField && action && action.params && action.params.linkFieldMapping) {
            Object.keys(action.params.linkFieldMapping).some(key => {
                if (linkField.includes(key)) {
                    linkField = action.params.linkFieldMapping[key];
                    return true;
                }
            });
        }
        return {
            action: actionName,
            module: moduleName,
            id: (context && context.record && context.record.id) || '',
            payload: {
                baseModule: this.store.parentModule,
                baseRecordId: this.store.parentId,
                linkField,
                recordModule: module,
                relateModule: this.store.metadata.module,
                relateRecordId: (context && context.record && context.record.id) || '',
            }
        };
    }
    static { this.ɵfac = function SubpanelLineActionsAdapter_Factory(t) { return new (t || SubpanelLineActionsAdapter)(i0.ɵɵinject(i1.SubpanelStore), i0.ɵɵinject(i2.SubpanelLineActionManager), i0.ɵɵinject(i3.AsyncActionService), i0.ɵɵinject(i4.MessageService), i0.ɵɵinject(i5.ConfirmationModalService), i0.ɵɵinject(i6.LanguageStore), i0.ɵɵinject(i7.SelectModalService), i0.ɵɵinject(i8.MetadataStore), i0.ɵɵinject(i9.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelLineActionsAdapter, factory: SubpanelLineActionsAdapter.ɵfac, providedIn: 'root' }); }
}
export { SubpanelLineActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelLineActionsAdapter, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.SubpanelStore }, { type: i2.SubpanelLineActionManager }, { type: i3.AsyncActionService }, { type: i4.MessageService }, { type: i5.ConfirmationModalService }, { type: i6.LanguageStore }, { type: i7.SelectModalService }, { type: i8.MetadataStore }, { type: i9.AppMetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1hY3Rpb25zLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zdWJwYW5lbC9hZGFwdGVycy9saW5lLWFjdGlvbnMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQWMsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBbUIsa0JBQWtCLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUNuSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFFekUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBRTlGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDN0UsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0RBQXdELENBQUM7Ozs7Ozs7Ozs7O0FBRXhGLE1BR2EsMEJBQTJCLFNBQVEsd0JBQWdEO0lBRTVGLFlBQ2MsS0FBb0IsRUFDcEIsYUFBd0MsRUFD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Y0FIdEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb24sIEFjdGlvbkNvbnRleHQsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHNoYXJlUmVwbGF5LCB0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0FzeW5jQWN0aW9uSW5wdXQsIEFzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1Byb2Nlc3N9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7Q29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvY29uZmlybWF0aW9uLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0Jhc2VSZWNvcmRBY3Rpb25zQWRhcHRlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYWN0aW9ucy9iYXNlLXJlY29yZC1hY3Rpb24uYWRhcHRlcic7XG5pbXBvcnQge1N1YnBhbmVsTGluZUFjdGlvbkRhdGF9IGZyb20gJy4uL2xpbmUtYWN0aW9ucy9saW5lLmFjdGlvbic7XG5pbXBvcnQge1N1YnBhbmVsU3RvcmV9IGZyb20gJy4uL3N0b3JlL3N1YnBhbmVsL3N1YnBhbmVsLnN0b3JlJztcbmltcG9ydCB7U3VicGFuZWxMaW5lQWN0aW9uTWFuYWdlcn0gZnJvbSAnLi4vbGluZS1hY3Rpb25zL2xpbmUtYWN0aW9uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQge1NlbGVjdE1vZGFsU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9zZWxlY3QtbW9kYWwuc2VydmljZVwiO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7QXBwTWV0YWRhdGFTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2FwcC1tZXRhZGF0YS9hcHAtbWV0YWRhdGEuc3RvcmUuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTdWJwYW5lbExpbmVBY3Rpb25zQWRhcHRlciBleHRlbmRzIEJhc2VSZWNvcmRBY3Rpb25zQWRhcHRlcjxTdWJwYW5lbExpbmVBY3Rpb25EYXRhPiB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlOiBTdWJwYW5lbFN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uTWFuYWdlcjogU3VicGFuZWxMaW5lQWN0aW9uTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uU2VydmljZTogQXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBjb25maXJtYXRpb246IENvbmZpcm1hdGlvbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc2VsZWN0TW9kYWxTZXJ2aWNlOiBTZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFwcE1ldGFkYXRhU3RvcmU6IEFwcE1ldGFkYXRhU3RvcmVcbiAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBhY3Rpb25NYW5hZ2VyLFxuICAgICAgICAgICAgYXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbixcbiAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgc2VsZWN0TW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgICAgICBhcHBNZXRhZGF0YVN0b3JlXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBnZXRBY3Rpb25zKGNvbnRleHQ6IEFjdGlvbkNvbnRleHQgPSBudWxsKTogT2JzZXJ2YWJsZTxBY3Rpb25bXT4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLm1ldGFkYXRhJC5waXBlKG1hcChtZXRhZGF0YSA9PiBtZXRhZGF0YS5saW5lQWN0aW9ucykpLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChvZignbGlzdCcgYXMgVmlld01vZGUpLnBpcGUoc2hhcmVSZXBsYXkoKSkpLFxuICAgICAgICAgICAgbWFwKChbYWN0aW9ucywgbW9kZV06IFtBY3Rpb25bXSwgVmlld01vZGVdKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VNb2RlQWN0aW9ucyhhY3Rpb25zLCBtb2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRBY3Rpb25EYXRhKGFjdGlvbjogQWN0aW9uLCBjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IFN1YnBhbmVsTGluZUFjdGlvbkRhdGEge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVjb3JkOiAoY29udGV4dCAmJiBjb250ZXh0LnJlY29yZCkgfHwgbnVsbCxcbiAgICAgICAgICAgIHN0b3JlOiB0aGlzLnN0b3JlLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfSBhcyBTdWJwYW5lbExpbmVBY3Rpb25EYXRhO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRNb2RlKCk6IFZpZXdNb2RlIHtcbiAgICAgICAgcmV0dXJuICdsaXN0JyBhcyBWaWV3TW9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TW9kdWxlTmFtZShjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLm1ldGFkYXRhLm1vZHVsZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVsb2FkKGFjdGlvbjogQWN0aW9uLCBwcm9jZXNzOiBQcm9jZXNzLCBjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuc3RvcmUubG9hZEFsbFN0YXRpc3RpY3MoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYmFja2VuZCBwcm9jZXNzIGlucHV0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWN0aW9uXG4gICAgICogQHBhcmFtIGFjdGlvbk5hbWVcbiAgICAgKiBAcGFyYW0gbW9kdWxlTmFtZVxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkQWN0aW9uSW5wdXQoYWN0aW9uOiBBY3Rpb24sIGFjdGlvbk5hbWU6IHN0cmluZywgbW9kdWxlTmFtZTogc3RyaW5nLCBjb250ZXh0OiBBY3Rpb25Db250ZXh0ID0gbnVsbCk6IEFzeW5jQWN0aW9uSW5wdXQge1xuXG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gdGhpcy5zdG9yZS5tZXRhZGF0YTtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbkxpc3QgPSBtZXRhZGF0YS5jb2xsZWN0aW9uX2xpc3QgfHwgbnVsbDtcblxuICAgICAgICBjb25zdCBtb2R1bGUgPSAoY29udGV4dCAmJiBjb250ZXh0Lm1vZHVsZSkgfHwgbW9kdWxlTmFtZTtcblxuICAgICAgICBsZXQgbGlua0ZpZWxkOiBzdHJpbmcgPSBtZXRhZGF0YS5nZXRfc3VicGFuZWxfZGF0YTtcblxuICAgICAgICBpZihjb2xsZWN0aW9uTGlzdCAmJiBjb2xsZWN0aW9uTGlzdFttb2R1bGVdICYmIGNvbGxlY3Rpb25MaXN0W21vZHVsZV0uZ2V0X3N1YnBhbmVsX2RhdGEpe1xuICAgICAgICAgICAgbGlua0ZpZWxkID0gY29sbGVjdGlvbkxpc3RbbW9kdWxlXS5nZXRfc3VicGFuZWxfZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGxpbmtGaWVsZCAmJiBhY3Rpb24gJiYgYWN0aW9uLnBhcmFtcyAmJiBhY3Rpb24ucGFyYW1zLmxpbmtGaWVsZE1hcHBpbmcpe1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYWN0aW9uLnBhcmFtcy5saW5rRmllbGRNYXBwaW5nKS5zb21lKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmtGaWVsZC5pbmNsdWRlcyhrZXkpKXtcbiAgICAgICAgICAgICAgICAgICAgbGlua0ZpZWxkID0gYWN0aW9uLnBhcmFtcy5saW5rRmllbGRNYXBwaW5nW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25OYW1lLFxuICAgICAgICAgICAgbW9kdWxlOiBtb2R1bGVOYW1lLFxuICAgICAgICAgICAgaWQ6IChjb250ZXh0ICYmIGNvbnRleHQucmVjb3JkICYmIGNvbnRleHQucmVjb3JkLmlkKSB8fCAnJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBiYXNlTW9kdWxlOiB0aGlzLnN0b3JlLnBhcmVudE1vZHVsZSxcbiAgICAgICAgICAgICAgICBiYXNlUmVjb3JkSWQ6IHRoaXMuc3RvcmUucGFyZW50SWQsXG4gICAgICAgICAgICAgICAgbGlua0ZpZWxkLFxuICAgICAgICAgICAgICAgIHJlY29yZE1vZHVsZTogbW9kdWxlLFxuICAgICAgICAgICAgICAgIHJlbGF0ZU1vZHVsZTogdGhpcy5zdG9yZS5tZXRhZGF0YS5tb2R1bGUsXG4gICAgICAgICAgICAgICAgcmVsYXRlUmVjb3JkSWQ6IChjb250ZXh0ICYmIGNvbnRleHQucmVjb3JkICYmIGNvbnRleHQucmVjb3JkLmlkKSB8fCAnJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBBc3luY0FjdGlvbklucHV0O1xuICAgIH1cbn1cbiJdfQ==