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
import { catchError, tap } from 'rxjs/operators';
import { ProcessService } from '../../process.service';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import * as i0 from "@angular/core";
import * as i1 from "../../process.service";
import * as i2 from "../../../../store/app-state/app-state.store";
class RecoverPasswordService {
    constructor(processService, appStateStore) {
        this.processService = processService;
        this.appStateStore = appStateStore;
        this.processType = 'recover-password';
    }
    /**
     * Send recover password request
     *
     * @param {string} userName to check
     * @param {string} email to check
     * @returns {{}} Observable<Process>
     */
    run(userName, email) {
        const options = {
            username: userName,
            useremail: email
        };
        this.appStateStore.updateLoading('recover-password', true, false);
        return this.processService
            .submit(this.processType, options)
            .pipe(tap(() => this.appStateStore.updateLoading('recover-password', false, false)), catchError(err => {
            this.appStateStore.updateLoading('recover-password', false, false);
            throw err;
        }));
    }
    static { this.ɵfac = function RecoverPasswordService_Factory(t) { return new (t || RecoverPasswordService)(i0.ɵɵinject(i1.ProcessService), i0.ɵɵinject(i2.AppStateStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecoverPasswordService, factory: RecoverPasswordService.ɵfac, providedIn: 'root' }); }
}
export { RecoverPasswordService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecoverPasswordService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.ProcessService }, { type: i2.AppStateStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3Zlci1wYXNzd29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9yZWNvdmVyLXBhc3N3b3JkL3JlY292ZXItcGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQVUsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDOzs7O0FBRTFFLE1BR2Esc0JBQXNCO0lBSS9CLFlBQW9CLGNBQThCLEVBQVUsYUFBNEI7UUFBcEUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFGOUUsZ0JBQVcsR0FBRyxrQkFBa0IsQ0FBQztJQUczQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksR0FBRyxDQUFDLFFBQWdCLEVBQUUsS0FBYTtRQUN0QyxNQUFNLE9BQU8sR0FBRztZQUNaLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbEUsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUM7YUFDakMsSUFBSSxDQUNELEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFDN0UsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25FLE1BQU0sR0FBRyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNWLENBQUM7dUZBL0JRLHNCQUFzQjt1RUFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQixtQkFGbkIsTUFBTTs7U0FFVCxzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQUhsQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UHJvY2VzcywgUHJvY2Vzc1NlcnZpY2V9IGZyb20gJy4uLy4uL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSZWNvdmVyUGFzc3dvcmRTZXJ2aWNlIHtcblxuICAgIHByb3RlY3RlZCBwcm9jZXNzVHlwZSA9ICdyZWNvdmVyLXBhc3N3b3JkJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvY2Vzc1NlcnZpY2U6IFByb2Nlc3NTZXJ2aWNlLCBwcml2YXRlIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmUpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kIHJlY292ZXIgcGFzc3dvcmQgcmVxdWVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJOYW1lIHRvIGNoZWNrXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVtYWlsIHRvIGNoZWNrXG4gICAgICogQHJldHVybnMge3t9fSBPYnNlcnZhYmxlPFByb2Nlc3M+XG4gICAgICovXG4gICAgcHVibGljIHJ1bih1c2VyTmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9jZXNzPiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogdXNlck5hbWUsXG4gICAgICAgICAgICB1c2VyZW1haWw6IGVtYWlsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoJ3JlY292ZXItcGFzc3dvcmQnLCB0cnVlLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1NlcnZpY2VcbiAgICAgICAgICAgIC5zdWJtaXQodGhpcy5wcm9jZXNzVHlwZSwgb3B0aW9ucylcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZygncmVjb3Zlci1wYXNzd29yZCcsIGZhbHNlLCBmYWxzZSkpLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoJ3JlY292ZXItcGFzc3dvcmQnLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==