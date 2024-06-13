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
import { of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { ProcessService } from '../../process.service';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { MessageService } from '../../../message/message.service';
import { RedirectAsyncAction } from './actions/redirect/redirect.async-action';
import { ExportAsyncAction } from './actions/export/export.async-action';
import { NoopAsyncAction } from './actions/noop/noop.async-action';
import { ChangelogAsyncAction } from './actions/changelog/changelog.async-action';
import * as i0 from "@angular/core";
import * as i1 from "../../process.service";
import * as i2 from "../../../../store/app-state/app-state.store";
import * as i3 from "../../../message/message.service";
import * as i4 from "./actions/redirect/redirect.async-action";
import * as i5 from "./actions/export/export.async-action";
import * as i6 from "./actions/noop/noop.async-action";
import * as i7 from "./actions/changelog/changelog.async-action";
class AsyncActionService {
    constructor(processService, appStateStore, message, redirectAction, exportAction, noopAction, changelogAction) {
        this.processService = processService;
        this.appStateStore = appStateStore;
        this.message = message;
        this.redirectAction = redirectAction;
        this.exportAction = exportAction;
        this.noopAction = noopAction;
        this.changelogAction = changelogAction;
        this.actions = {};
        this.registerHandler(redirectAction);
        this.registerHandler(exportAction);
        this.registerHandler(noopAction);
        this.registerHandler(changelogAction);
    }
    registerHandler(handler) {
        this.actions[handler.key] = handler;
    }
    /**
     * Send action request
     *
     * @param {string} actionName to submit
     * @param {string} data to send
     * @param {string} presetHandlerKey to use
     * @returns {object} Observable<Process>
     */
    run(actionName, data, presetHandlerKey = null) {
        const options = {
            ...data
        };
        this.appStateStore.updateLoading(actionName, true);
        return this.processService
            .submit(actionName, options)
            .pipe(take(1), tap((process) => {
            this.appStateStore.updateLoading(actionName, false);
            let handler = 'addSuccessMessageByKey';
            if (process.status === 'error') {
                handler = 'addDangerMessageByKey';
            }
            if (process.messages) {
                process.messages.forEach(message => {
                    if (!!message) {
                        this.message[handler](message);
                    }
                });
            }
            if (process.status === 'error') {
                return;
            }
            const actionHandlerKey = presetHandlerKey || (process.data && process.data.handler) || null;
            if (!actionHandlerKey) {
                return;
            }
            const actionHandler = this.actions[actionHandlerKey];
            if (!actionHandler) {
                this.message.addDangerMessageByKey('LBL_MISSING_HANDLER');
                return;
            }
            actionHandler.run(process.data.params);
        }), catchError((err) => {
            const errorMessage = err?.message ?? '';
            if (errorMessage === 'Access Denied.') {
                this.appStateStore.updateLoading(actionName, false);
                return of(null);
            }
            this.message.addDangerMessageByKey('LBL_ACTION_ERROR');
            this.appStateStore.updateLoading(actionName, false);
            return of(null);
        }));
    }
    static { this.ɵfac = function AsyncActionService_Factory(t) { return new (t || AsyncActionService)(i0.ɵɵinject(i1.ProcessService), i0.ɵɵinject(i2.AppStateStore), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.RedirectAsyncAction), i0.ɵɵinject(i5.ExportAsyncAction), i0.ɵɵinject(i6.NoopAsyncAction), i0.ɵɵinject(i7.ChangelogAsyncAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AsyncActionService, factory: AsyncActionService.ɵfac, providedIn: 'root' }); }
}
export { AsyncActionService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AsyncActionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.ProcessService }, { type: i2.AppStateStore }, { type: i3.MessageService }, { type: i4.RedirectAsyncAction }, { type: i5.ExportAsyncAction }, { type: i6.NoopAsyncAction }, { type: i7.ChangelogAsyncAction }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMtYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQVUsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUdoRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sNENBQTRDLENBQUM7Ozs7Ozs7OztBQWdCaEYsTUFHYSxrQkFBa0I7SUFJM0IsWUFDWSxjQUE4QixFQUM5QixhQUE0QixFQUMxQixPQUF1QixFQUN2QixjQUFtQyxFQUNuQyxZQUErQixFQUMvQixVQUEyQixFQUMzQixlQUFxQztRQU52QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDMUIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENB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QyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDVixDQUFDO21GQTNGUSxrQkFBa0I7dUVBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmYsTUFBTTs7U0FFVCxrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUg5QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgdGFrZSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1Byb2Nlc3MsIFByb2Nlc3NTZXJ2aWNlfSBmcm9tICcuLi8uLi9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7QXN5bmNBY3Rpb25IYW5kbGVyfSBmcm9tICcuL2FzeW5jLWFjdGlvbi5tb2RlbCc7XG5pbXBvcnQge1JlY29yZCwgU2VhcmNoQ3JpdGVyaWEsIFNvcnRpbmdTZWxlY3Rpb259IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1JlZGlyZWN0QXN5bmNBY3Rpb259IGZyb20gJy4vYWN0aW9ucy9yZWRpcmVjdC9yZWRpcmVjdC5hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtFeHBvcnRBc3luY0FjdGlvbn0gZnJvbSAnLi9hY3Rpb25zL2V4cG9ydC9leHBvcnQuYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7Tm9vcEFzeW5jQWN0aW9ufSBmcm9tICcuL2FjdGlvbnMvbm9vcC9ub29wLmFzeW5jLWFjdGlvbic7XG5pbXBvcnQge0NoYW5nZWxvZ0FzeW5jQWN0aW9ufSBmcm9tICcuL2FjdGlvbnMvY2hhbmdlbG9nL2NoYW5nZWxvZy5hc3luYy1hY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFzeW5jQWN0aW9uSW5wdXQge1xuICAgIGFjdGlvbj86IHN0cmluZztcbiAgICBtb2R1bGU/OiBzdHJpbmc7XG4gICAgY3JpdGVyaWE/OiBTZWFyY2hDcml0ZXJpYTtcbiAgICBzb3J0PzogU29ydGluZ1NlbGVjdGlvbjtcbiAgICBpZHM/OiBzdHJpbmdbXTtcbiAgICBpZD86IHN0cmluZztcbiAgICBwYXlsb2FkPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgICBtb2RhbFJlY29yZD86IFJlY29yZDtcbiAgICByZWNvcmQ/OiBSZWNvcmQ7XG5cbiAgICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXN5bmNBY3Rpb25TZXJ2aWNlIHtcblxuICAgIGFjdGlvbnM6IHsgW2tleTogc3RyaW5nXTogQXN5bmNBY3Rpb25IYW5kbGVyIH0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHByb2Nlc3NTZXJ2aWNlOiBQcm9jZXNzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhcHBTdGF0ZVN0b3JlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCByZWRpcmVjdEFjdGlvbjogUmVkaXJlY3RBc3luY0FjdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIGV4cG9ydEFjdGlvbjogRXhwb3J0QXN5bmNBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBub29wQWN0aW9uOiBOb29wQXN5bmNBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBjaGFuZ2Vsb2dBY3Rpb246IENoYW5nZWxvZ0FzeW5jQWN0aW9uXG4gICAgKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVyKHJlZGlyZWN0QWN0aW9uKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckhhbmRsZXIoZXhwb3J0QWN0aW9uKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckhhbmRsZXIobm9vcEFjdGlvbik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVyKGNoYW5nZWxvZ0FjdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihoYW5kbGVyOiBBc3luY0FjdGlvbkhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hY3Rpb25zW2hhbmRsZXIua2V5XSA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZCBhY3Rpb24gcmVxdWVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbk5hbWUgdG8gc3VibWl0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgdG8gc2VuZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVzZXRIYW5kbGVyS2V5IHRvIHVzZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8UHJvY2Vzcz5cbiAgICAgKi9cbiAgICBwdWJsaWMgcnVuKGFjdGlvbk5hbWU6IHN0cmluZywgZGF0YTogQXN5bmNBY3Rpb25JbnB1dCwgcHJlc2V0SGFuZGxlcktleTogc3RyaW5nID0gbnVsbCk6IE9ic2VydmFibGU8UHJvY2Vzcz4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgLi4uZGF0YVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVMb2FkaW5nKGFjdGlvbk5hbWUsIHRydWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTZXJ2aWNlXG4gICAgICAgICAgICAuc3VibWl0KGFjdGlvbk5hbWUsIG9wdGlvbnMpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgICAgIHRhcCgocHJvY2VzczogUHJvY2VzcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZyhhY3Rpb25OYW1lLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhbmRsZXIgPSAnYWRkU3VjY2Vzc01lc3NhZ2VCeUtleSc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciA9ICdhZGREYW5nZXJNZXNzYWdlQnlLZXknO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MubWVzc2FnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MubWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighIW1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlW2hhbmRsZXJdKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3Muc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb25IYW5kbGVyS2V5ID0gcHJlc2V0SGFuZGxlcktleSB8fCAocHJvY2Vzcy5kYXRhICYmIHByb2Nlc3MuZGF0YS5oYW5kbGVyKSB8fCBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uSGFuZGxlcktleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uSGFuZGxlcjogQXN5bmNBY3Rpb25IYW5kbGVyID0gdGhpcy5hY3Rpb25zW2FjdGlvbkhhbmRsZXJLZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uSGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2VCeUtleSgnTEJMX01JU1NJTkdfSEFORExFUicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uSGFuZGxlci5ydW4ocHJvY2Vzcy5kYXRhLnBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyPy5tZXNzYWdlID8/ICcnXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSA9PT0gJ0FjY2VzcyBEZW5pZWQuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoYWN0aW9uTmFtZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2VCeUtleSgnTEJMX0FDVElPTl9FUlJPUicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZyhhY3Rpb25OYW1lLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuIl19