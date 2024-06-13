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
import { SubpanelActionHandler } from '../subpanel.action';
import { RecordListModalComponent } from "../../../record-list-modal/components/record-list-modal/record-list-modal.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { take } from 'rxjs/operators';
import { AsyncActionService } from '../../../../services/process/processes/async-action/async-action';
import { MessageService } from '../../../../services/message/message.service';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../../../services/message/message.service";
import * as i3 from "../../../../services/process/processes/async-action/async-action";
class SubpanelSelectAction extends SubpanelActionHandler {
    constructor(modalService, message, asyncActionService) {
        super();
        this.modalService = modalService;
        this.message = message;
        this.asyncActionService = asyncActionService;
        this.key = 'select';
        this.modes = ['list'];
    }
    shouldDisplay(data) {
        return true;
    }
    run(data) {
        this.showSelectModal(data);
    }
    /**
     * Show record selection modal
     */
    showSelectModal(data) {
        const modal = this.modalService.open(RecordListModalComponent, { size: 'xl', scrollable: true });
        const module = data.module;
        modal.componentInstance.module = module;
        modal.componentInstance.parentModule = data?.parentModule ?? '';
        modal.componentInstance.multiSelect = true;
        modal.componentInstance.multiSelectButtonLabel = 'LBL_LINK';
        modal.result.then((result) => {
            if (!result || !result.selection || !result.selection.selected) {
                return;
            }
            const recordIds = this.getSelectedIds(result);
            let linkField = data.subpanelMeta.get_subpanel_data;
            const collectionList = data.subpanelMeta?.collection_list ?? null;
            if (collectionList && collectionList?.[module]?.get_subpanel_data) {
                linkField = collectionList[module].get_subpanel_data;
            }
            const input = {
                action: 'record-select',
                module: data.store.parentModule,
                id: data.store.parentId || '',
                payload: {
                    baseModule: data.parentModule,
                    baseRecordId: data.parentId,
                    linkField,
                    relateModule: module,
                    relateRecordIds: recordIds
                },
            };
            this.runAsyncAction(input, data);
        });
    }
    /**
     * Get Selected Record
     *
     * @param {object} data RecordListModalResult
     * @returns {object} Record
     **/
    getSelectedIds(data) {
        const ids = [];
        Object.keys(data.selection.selected).forEach((selected) => {
            if (selected) {
                ids.push(selected);
            }
        });
        return ids;
    }
    runAsyncAction(asyncData, data) {
        const actionName = 'record-select';
        this.message.removeMessages();
        this.asyncActionService.run(actionName, asyncData).pipe(take(1)).subscribe(() => {
            data.store.load(false).pipe(take(1)).subscribe();
            data.store.loadAllStatistics(false).pipe(take(1)).subscribe();
        });
    }
    static { this.ɵfac = function SubpanelSelectAction_Factory(t) { return new (t || SubpanelSelectAction)(i0.ɵɵinject(i1.NgbModal), i0.ɵɵinject(i2.MessageService), i0.ɵɵinject(i3.AsyncActionService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelSelectAction, factory: SubpanelSelectAction.ɵfac, providedIn: 'root' }); }
}
export { SubpanelSelectAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelSelectAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.NgbModal }, { type: i2.MessageService }, { type: i3.AsyncActionService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3N1YnBhbmVsL2FjdGlvbnMvc2VsZWN0L3NlbGVjdC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFxQixxQkFBcUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzdFLE9BQU8sRUFDSCx3QkFBd0IsRUFDM0IsTUFBTSxxRkFBcUYsQ0FBQztBQUU3RixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BDLE9BQU8sRUFBbUIsa0JBQWtCLEVBQUMsTUFBTSxrRUFBa0UsQ0FBQztBQUN0SCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOENBQThDLENBQUM7Ozs7O0FBRzVFLE1BR2Esb0JBQXFCLFNBQVEscUJBQXFCO0lBSzNELFlBQ2MsWUFBc0IsRUFDdEIsT0FBdUIsRUFDdkIsa0JBQXNDO1FBRWhELEtBQUssRUFBRSxDQUFDO1FBSkUsaUJBQVksR0FBWixZQUFZLENBQVU7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQVBwRCxRQUFHLEdBQUcsUUFBUSxDQUFDO1FBRWYsVUFBSyxHQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFRN0IsQ0FBQztJQUdELGFBQWEsQ0FBQyxJQUF3QjtRQUNsQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQXdCO1FBRXhCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7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SUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO3FGQS9GUSxvQkFBb0I7dUVBQXBCLG9CQUFvQixXQUFwQixvQkFBb0IsbUJBRmpCLE1BQU07O1NBRVQsb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FIaEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWNvcmQsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtTdWJwYW5lbEFjdGlvbkRhdGEsIFN1YnBhbmVsQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vc3VicGFuZWwuYWN0aW9uJztcbmltcG9ydCB7XG4gICAgUmVjb3JkTGlzdE1vZGFsQ29tcG9uZW50XG59IGZyb20gXCIuLi8uLi8uLi9yZWNvcmQtbGlzdC1tb2RhbC9jb21wb25lbnRzL3JlY29yZC1saXN0LW1vZGFsL3JlY29yZC1saXN0LW1vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZWNvcmRMaXN0TW9kYWxSZXN1bHR9IGZyb20gXCIuLi8uLi8uLi9yZWNvcmQtbGlzdC1tb2RhbC9jb21wb25lbnRzL3JlY29yZC1saXN0LW1vZGFsL3JlY29yZC1saXN0LW1vZGFsLm1vZGVsXCI7XG5pbXBvcnQge05nYk1vZGFsfSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3VicGFuZWxTZWxlY3RBY3Rpb24gZXh0ZW5kcyBTdWJwYW5lbEFjdGlvbkhhbmRsZXIge1xuICAgIGtleSA9ICdzZWxlY3QnO1xuXG4gICAgbW9kZXM6IFZpZXdNb2RlW10gPSBbJ2xpc3QnXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cblxuICAgIHNob3VsZERpc3BsYXkoZGF0YTogU3VicGFuZWxBY3Rpb25EYXRhKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBTdWJwYW5lbEFjdGlvbkRhdGEpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnNob3dTZWxlY3RNb2RhbChkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IHJlY29yZCBzZWxlY3Rpb24gbW9kYWxcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2hvd1NlbGVjdE1vZGFsKGRhdGE6IFN1YnBhbmVsQWN0aW9uRGF0YSk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oUmVjb3JkTGlzdE1vZGFsQ29tcG9uZW50LCB7c2l6ZTogJ3hsJywgc2Nyb2xsYWJsZTogdHJ1ZX0pO1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGRhdGEubW9kdWxlXG4gICAgICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UucGFyZW50TW9kdWxlID0gZGF0YT8ucGFyZW50TW9kdWxlID8/ICcnO1xuICAgICAgICBtb2RhbC5jb21wb25lbnRJbnN0YW5jZS5tdWx0aVNlbGVjdCA9IHRydWU7XG4gICAgICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlLm11bHRpU2VsZWN0QnV0dG9uTGFiZWwgPSAnTEJMX0xJTksnO1xuXG4gICAgICAgIG1vZGFsLnJlc3VsdC50aGVuKChyZXN1bHQ6IFJlY29yZExpc3RNb2RhbFJlc3VsdCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LnNlbGVjdGlvbiB8fCAhcmVzdWx0LnNlbGVjdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVjb3JkSWRzID0gdGhpcy5nZXRTZWxlY3RlZElkcyhyZXN1bHQpO1xuXG4gICAgICAgICAgICBsZXQgbGlua0ZpZWxkOiBzdHJpbmcgPSBkYXRhLnN1YnBhbmVsTWV0YS5nZXRfc3VicGFuZWxfZGF0YTtcblxuICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvbkxpc3QgPSBkYXRhLnN1YnBhbmVsTWV0YT8uY29sbGVjdGlvbl9saXN0ID8/IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uTGlzdCAmJiBjb2xsZWN0aW9uTGlzdD8uW21vZHVsZV0/LmdldF9zdWJwYW5lbF9kYXRhKSB7XG4gICAgICAgICAgICAgICAgbGlua0ZpZWxkID0gY29sbGVjdGlvbkxpc3RbbW9kdWxlXS5nZXRfc3VicGFuZWxfZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3JlY29yZC1zZWxlY3QnLFxuICAgICAgICAgICAgICAgIG1vZHVsZTogZGF0YS5zdG9yZS5wYXJlbnRNb2R1bGUsXG4gICAgICAgICAgICAgICAgaWQ6IGRhdGEuc3RvcmUucGFyZW50SWQgfHwgJycsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICBiYXNlTW9kdWxlOiBkYXRhLnBhcmVudE1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgYmFzZVJlY29yZElkOiBkYXRhLnBhcmVudElkLFxuICAgICAgICAgICAgICAgICAgICBsaW5rRmllbGQsXG4gICAgICAgICAgICAgICAgICAgIHJlbGF0ZU1vZHVsZTogbW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICByZWxhdGVSZWNvcmRJZHM6IHJlY29yZElkc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXRcblxuICAgICAgICAgICAgdGhpcy5ydW5Bc3luY0FjdGlvbihpbnB1dCwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IFNlbGVjdGVkIFJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgUmVjb3JkTGlzdE1vZGFsUmVzdWx0XG4gICAgICogQHJldHVybnMge29iamVjdH0gUmVjb3JkXG4gICAgICoqL1xuICAgIHByb3RlY3RlZCBnZXRTZWxlY3RlZElkcyhkYXRhOiBSZWNvcmRMaXN0TW9kYWxSZXN1bHQpOiBSZWNvcmRbXSB7XG4gICAgICAgIGNvbnN0IGlkcyA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhLnNlbGVjdGlvbi5zZWxlY3RlZCkuZm9yRWFjaCgoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIGlkcy5wdXNoKHNlbGVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGlkcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcnVuQXN5bmNBY3Rpb24oYXN5bmNEYXRhOiBBc3luY0FjdGlvbklucHV0LCBkYXRhOiBTdWJwYW5lbEFjdGlvbkRhdGEpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9ICdyZWNvcmQtc2VsZWN0JztcblxuICAgICAgICB0aGlzLm1lc3NhZ2UucmVtb3ZlTWVzc2FnZXMoKTtcblxuXG4gICAgICAgIHRoaXMuYXN5bmNBY3Rpb25TZXJ2aWNlLnJ1bihhY3Rpb25OYW1lLCBhc3luY0RhdGEpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGRhdGEuc3RvcmUubG9hZChmYWxzZSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIGRhdGEuc3RvcmUubG9hZEFsbFN0YXRpc3RpY3MoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19