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
import { map, shareReplay } from 'rxjs/operators';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../services/message/message.service';
import { ListViewStore } from '../store/list-view/list-view.store';
import { LineActionActionManager } from '../../../components/table/line-actions/line-action-manager.service';
import { BaseLineActionsAdapter } from '../../../components/table/adapters/base-line-actions.adapter';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { LanguageStore } from '../../../store/language/language.store';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
import * as i2 from "../../../components/table/line-actions/line-action-manager.service";
import * as i3 from "../../../services/process/processes/async-action/async-action";
import * as i4 from "../../../services/message/message.service";
import * as i5 from "../../../services/modals/confirmation-modal.service";
import * as i6 from "../../../store/language/language.store";
import * as i7 from "../../../services/modals/select-modal.service";
import * as i8 from "../../../store/metadata/metadata.store.service";
import * as i9 from "../../../store/app-metadata/app-metadata.store.service";
class LineActionsAdapter extends BaseLineActionsAdapter {
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
        return this.store.lineActions$.pipe(combineLatestWith(of('list').pipe(shareReplay())), map(([lineActions, mode]) => {
            return this.parseModeActions(lineActions, mode, context);
        }));
    }
    getModuleName(record) {
        return this.store.getModuleName();
    }
    reload(action, process, record) {
        this.store.recordList.clearSelection();
        this.store.recordList.resetPagination();
    }
    getMode() {
        return 'list';
    }
    static { this.ɵfac = function LineActionsAdapter_Factory(t) { return new (t || LineActionsAdapter)(i0.ɵɵinject(i1.ListViewStore), i0.ɵɵinject(i2.LineActionActionManager), i0.ɵɵinject(i3.AsyncActionService), i0.ɵɵinject(i4.MessageService), i0.ɵɵinject(i5.ConfirmationModalService), i0.ɵɵinject(i6.LanguageStore), i0.ɵɵinject(i7.SelectModalService), i0.ɵɵinject(i8.MetadataStore), i0.ɵɵinject(i9.AppMetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LineActionsAdapter, factory: LineActionsAdapter.ɵfac }); }
}
export { LineActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.LineActionActionManager }, { type: i3.AsyncActionService }, { type: i4.MessageService }, { type: i5.ConfirmationModalService }, { type: i6.LanguageStore }, { type: i7.SelectModalService }, { type: i8.MetadataStore }, { type: i9.AppMetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1hY3Rpb25zLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9hZGFwdGVycy9saW5lLWFjdGlvbnMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQWMsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxHQUFHLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDakcsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBRXpFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNqRSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxvRUFBb0UsQ0FBQztBQUMzRyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw4REFBOEQsQ0FBQztBQUNwRyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM3RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDckUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQzdFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHdEQUF3RCxDQUFDOzs7Ozs7Ozs7OztBQUV4RixNQUNhLGtCQUFtQixTQUFRLHNCQUFzQjtJQUUxRCxZQUNjLEtBQW9CLEVBQ3BCLGFBQXNDLEVBQ3RDLGtCQUFzQyxFQUN0QyxPQUF1QixFQUN2QixZQUFzQyxFQUN0QyxRQUF1QixFQUN2QixrQkFBc0MsRUFDdEMsUUFBdUIsRUFDdkIsZ0JBQWtDO1FBRTVDLEtBQUssQ0FDRCxhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxFQUNSLGtCQUFrQixFQUNsQixRQUFRLEVBQ1IsZ0JBQWdCLENBQ25CLENBQUM7UUFuQlEsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUNwQixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQVloRCxDQUFDO0lBRUQsVUFBVSxDQUFDLFVBQXlCLElBQUk7UUFDcEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQy9CLGlCQUFpQixDQUNiLEVBQUUsQ0FBQyxNQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQzdDLEVBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUF1QixFQUFFLEVBQUU7WUFDOUMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQztJQUVTLGFBQWEsQ0FBQyxNQUFlO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRVMsTUFBTSxDQUFDLE1BQWMsRUFBRSxPQUFnQixFQUFFLE1BQWU7UUFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVTLE9BQU87UUFDYixPQUFPLE1BQWtCLENBQUM7SUFDOUIsQ0FBQzttRkEvQ1Esa0JBQWtCO3VFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCOztTQUFsQixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb24sIEFjdGlvbkNvbnRleHQsIFJlY29yZCwgVmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc2hhcmVSZXBsYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QXN5bmNBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7UHJvY2Vzc30gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtMaXN0Vmlld1N0b3JlfSBmcm9tICcuLi9zdG9yZS9saXN0LXZpZXcvbGlzdC12aWV3LnN0b3JlJztcbmltcG9ydCB7TGluZUFjdGlvbkFjdGlvbk1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvbGluZS1hY3Rpb25zL2xpbmUtYWN0aW9uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQge0Jhc2VMaW5lQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvYWRhcHRlcnMvYmFzZS1saW5lLWFjdGlvbnMuYWRhcHRlcic7XG5pbXBvcnQge0NvbmZpcm1hdGlvbk1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtTZWxlY3RNb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9zZWxlY3QtbW9kYWwuc2VydmljZSc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtBcHBNZXRhZGF0YVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvYXBwLW1ldGFkYXRhL2FwcC1tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaW5lQWN0aW9uc0FkYXB0ZXIgZXh0ZW5kcyBCYXNlTGluZUFjdGlvbnNBZGFwdGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IExpc3RWaWV3U3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25NYW5hZ2VyOiBMaW5lQWN0aW9uQWN0aW9uTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uU2VydmljZTogQXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBjb25maXJtYXRpb246IENvbmZpcm1hdGlvbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc2VsZWN0TW9kYWxTZXJ2aWNlOiBTZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFwcE1ldGFkYXRhU3RvcmU6IEFwcE1ldGFkYXRhU3RvcmVcbiAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBhY3Rpb25NYW5hZ2VyLFxuICAgICAgICAgICAgYXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbixcbiAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgc2VsZWN0TW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgbWV0YWRhdGEsXG4gICAgICAgICAgICBhcHBNZXRhZGF0YVN0b3JlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9ucyhjb250ZXh0OiBBY3Rpb25Db250ZXh0ID0gbnVsbCk6IE9ic2VydmFibGU8QWN0aW9uW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUubGluZUFjdGlvbnMkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChcbiAgICAgICAgICAgICAgICBvZignbGlzdCcgYXMgVmlld01vZGUpLnBpcGUoc2hhcmVSZXBsYXkoKSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtYXAoKFtsaW5lQWN0aW9ucywgbW9kZV06IFtBY3Rpb25bXSwgVmlld01vZGVdKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VNb2RlQWN0aW9ucyhsaW5lQWN0aW9ucywgbW9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRNb2R1bGVOYW1lKHJlY29yZD86IFJlY29yZCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldE1vZHVsZU5hbWUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVsb2FkKGFjdGlvbjogQWN0aW9uLCBwcm9jZXNzOiBQcm9jZXNzLCByZWNvcmQ/OiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5yZWNvcmRMaXN0LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC5yZXNldFBhZ2luYXRpb24oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TW9kZSgpOiBWaWV3TW9kZSB7XG4gICAgICAgIHJldHVybiAnbGlzdCcgYXMgVmlld01vZGU7XG4gICAgfVxufVxuIl19