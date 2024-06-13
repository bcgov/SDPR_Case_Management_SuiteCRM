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
import { take } from 'rxjs/operators';
import { InstallViewActionHandler } from '../install-view.action';
import { MessageService } from '../../../../services/message/message.service';
import { AsyncActionService } from '../../../../services/process/processes/async-action/async-action';
import { Router } from '@angular/router';
import { InstallErrorModalComponent } from '../../../../components/install-error-modal/install-error-modal.component';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { StateManager } from '../../../../store/state-manager';
import { LocalStorageService } from '../../../../services/local-storage/local-storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/message/message.service";
import * as i2 from "../../../../services/process/processes/async-action/async-action";
import * as i3 from "@angular/router";
import * as i4 from "@ng-bootstrap/ng-bootstrap";
import * as i5 from "../../../../store/state-manager";
import * as i6 from "../../../../services/local-storage/local-storage.service";
class InstallAction extends InstallViewActionHandler {
    constructor(message, asyncActionService, router, modalService, state, localStorage) {
        super();
        this.message = message;
        this.asyncActionService = asyncActionService;
        this.router = router;
        this.modalService = modalService;
        this.state = state;
        this.localStorage = localStorage;
        this.key = 'install';
        this.modes = ['edit'];
    }
    run(data) {
        data.store.recordStore.validate().pipe(take(1)).subscribe(valid => {
            if (valid) {
                const stagingRecord = data.store.recordStore.getStaging();
                this.runInstall(stagingRecord);
                return;
            }
            this.message.addWarningMessageByKey('LBL_VALIDATION_ERRORS');
        });
    }
    shouldDisplay() {
        return true;
    }
    runInstall(stagingRecord) {
        const actionName = `suitecrm-app-${this.key}`;
        this.message.removeMessages();
        const asyncData = {
            action: actionName,
            module: stagingRecord.module,
            id: stagingRecord.id,
            payload: stagingRecord.formGroup.value
        };
        this.asyncActionService.run(actionName, asyncData).pipe(take(1)).subscribe((process) => {
            if (process.data.statusCode === 3) {
                // system validation pre-check failed; display errors modal
                this.openErrorModalDialog(process.data.errors);
            }
            // redirect to /, if request is successful
            if (process.data.statusCode === 0) {
                this.state.clear();
                this.localStorage.clear();
                this.router.navigate(['/'], {}).then();
            }
        });
    }
    openErrorModalDialog(errors) {
        const modalRef = this.modalService.open(InstallErrorModalComponent, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'lg',
            windowClass: 'custom-modal',
            modalDialogClass: 'custom-modal'
        });
        modalRef.componentInstance.errors = errors;
    }
    static { this.ɵfac = function InstallAction_Factory(t) { return new (t || InstallAction)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject(i2.AsyncActionService), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.NgbModal), i0.ɵɵinject(i5.StateManager), i0.ɵɵinject(i6.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InstallAction, factory: InstallAction.ɵfac, providedIn: 'root' }); }
}
export { InstallAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MessageService }, { type: i2.AsyncActionService }, { type: i3.Router }, { type: i4.NgbModal }, { type: i5.StateManager }, { type: i6.LocalStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvaW5zdGFsbC9hY3Rpb25zL2luc3RhbGwvaW5zdGFsbC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BDLE9BQU8sRUFBd0Isd0JBQXdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDNUUsT0FBTyxFQUFtQixrQkFBa0IsRUFBQyxNQUFNLGtFQUFrRSxDQUFDO0FBRXRILE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSwwRUFBMEUsQ0FBQztBQUNwSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQzdELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDBEQUEwRCxDQUFDOzs7Ozs7OztBQUU3RixNQUdhLGFBQWMsU0FBUSx3QkFBd0I7SUFLdkQsWUFDYyxPQUF1QixFQUN2QixrQkFBc0MsRUFDdEMsTUFBYyxFQUNkLFlBQXNCLEVBQ3RCLEtBQW1CLEVBQ25CLFlBQWlDO1FBRTNDLEtBQUssRUFBRSxDQUFDO1FBUEUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQVU7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFUL0MsUUFBRyxHQUFHLFNBQVMsQ0FBQztRQUNoQixVQUFLLEdBQUcsQ0FBQyxNQUFrQixDQUFDLENBQUM7SUFXN0IsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUEyQjtRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlELElBQUksS0FBSyxFQUFFO2dCQUNQLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMvQixPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxVQUFVLENBQUMsYUFBcUI7UUFFNUIsTUFBTSxVQUFVLEdBQUcsZ0JBQWdCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTlCLE1BQU0sU0FBUyxHQUFHO1lBQ2QsTUFBTSxFQUFFLFVBQVU7WUFDbEIsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNO1lBQzVCLEVBQUUsRUFBRSxhQUFhLENBQUMsRUFBRTtZQUNwQixPQUFPLEVBQUUsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1NBQ3JCLENBQUM7UUFFdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FDdkIsVUFBVSxFQUNWLFNBQVMsQ0FDWixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFFM0MsSUFBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7Z0JBQzlCLDJEQUEyRDtnQkFDM0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEQ7WUFFRCwwQ0FBMEM7WUFDMUMsSUFBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxNQUFVO1FBRTNCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQ2hFLGNBQWMsRUFBRSxtQkFBbUI7WUFDbkMsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsSUFBSTtZQUNWLFdBQVcsRUFBRSxjQUFjO1lBQzNCLGdCQUFnQixFQUFFLGNBQWM7U0FDbkMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDL0MsQ0FBQzs4RUEzRVEsYUFBYTt1RUFBYixhQUFhLFdBQWIsYUFBYSxtQkFGVixNQUFNOztTQUVULGFBQWE7dUZBQWIsYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlY29yZCwgVmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7SW5zdGFsbFZpZXdBY3Rpb25EYXRhLCBJbnN0YWxsVmlld0FjdGlvbkhhbmRsZXJ9IGZyb20gJy4uL2luc3RhbGwtdmlldy5hY3Rpb24nO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtQcm9jZXNzfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7SW5zdGFsbEVycm9yTW9kYWxDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaW5zdGFsbC1lcnJvci1tb2RhbC9pbnN0YWxsLWVycm9yLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge05nYk1vZGFsfSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcbmltcG9ydCB7U3RhdGVNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zdGF0ZS1tYW5hZ2VyJztcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEluc3RhbGxBY3Rpb24gZXh0ZW5kcyBJbnN0YWxsVmlld0FjdGlvbkhhbmRsZXIge1xuXG4gICAga2V5ID0gJ2luc3RhbGwnO1xuICAgIG1vZGVzID0gWydlZGl0JyBhcyBWaWV3TW9kZV07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByb3RlY3RlZCBzdGF0ZTogU3RhdGVNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IEluc3RhbGxWaWV3QWN0aW9uRGF0YSk6IHZvaWQge1xuICAgICAgICBkYXRhLnN0b3JlLnJlY29yZFN0b3JlLnZhbGlkYXRlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUodmFsaWQgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhZ2luZ1JlY29yZCA9IGRhdGEuc3RvcmUucmVjb3JkU3RvcmUuZ2V0U3RhZ2luZygpO1xuICAgICAgICAgICAgICAgIHRoaXMucnVuSW5zdGFsbChzdGFnaW5nUmVjb3JkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGRXYXJuaW5nTWVzc2FnZUJ5S2V5KCdMQkxfVkFMSURBVElPTl9FUlJPUlMnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvdWxkRGlzcGxheSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcnVuSW5zdGFsbChzdGFnaW5nUmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBhY3Rpb25OYW1lID0gYHN1aXRlY3JtLWFwcC0ke3RoaXMua2V5fWA7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlLnJlbW92ZU1lc3NhZ2VzKCk7XG5cbiAgICAgICAgY29uc3QgYXN5bmNEYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25OYW1lLFxuICAgICAgICAgICAgbW9kdWxlOiBzdGFnaW5nUmVjb3JkLm1vZHVsZSxcbiAgICAgICAgICAgIGlkOiBzdGFnaW5nUmVjb3JkLmlkLFxuICAgICAgICAgICAgcGF5bG9hZDogc3RhZ2luZ1JlY29yZC5mb3JtR3JvdXAudmFsdWVcbiAgICAgICAgfSBhcyBBc3luY0FjdGlvbklucHV0O1xuXG4gICAgICAgIHRoaXMuYXN5bmNBY3Rpb25TZXJ2aWNlLnJ1bihcbiAgICAgICAgICAgIGFjdGlvbk5hbWUsXG4gICAgICAgICAgICBhc3luY0RhdGFcbiAgICAgICAgKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgocHJvY2VzczogUHJvY2VzcykgPT4ge1xuXG4gICAgICAgICAgICBpZihwcm9jZXNzLmRhdGEuc3RhdHVzQ29kZSA9PT0gMykge1xuICAgICAgICAgICAgICAgIC8vIHN5c3RlbSB2YWxpZGF0aW9uIHByZS1jaGVjayBmYWlsZWQ7IGRpc3BsYXkgZXJyb3JzIG1vZGFsXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuRXJyb3JNb2RhbERpYWxvZyhwcm9jZXNzLmRhdGEuZXJyb3JzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVkaXJlY3QgdG8gLywgaWYgcmVxdWVzdCBpcyBzdWNjZXNzZnVsXG4gICAgICAgICAgICBpZihwcm9jZXNzLmRhdGEuc3RhdHVzQ29kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddLCB7fSkudGhlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuRXJyb3JNb2RhbERpYWxvZyhlcnJvcnM6IFtdKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgbW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEluc3RhbGxFcnJvck1vZGFsQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBhcmlhTGFiZWxsZWRCeTogJ21vZGFsLWJhc2ljLXRpdGxlJyxcbiAgICAgICAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnY3VzdG9tLW1vZGFsJyxcbiAgICAgICAgICAgIG1vZGFsRGlhbG9nQ2xhc3M6ICdjdXN0b20tbW9kYWwnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG5cbn1cbiJdfQ==