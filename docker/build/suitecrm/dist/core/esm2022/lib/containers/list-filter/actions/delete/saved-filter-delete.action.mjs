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
import { MessageService } from '../../../../services/message/message.service';
import { SavedFilterActionHandler } from '../saved-filter.action';
import { AsyncActionService } from '../../../../services/process/processes/async-action/async-action';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/message/message.service";
import * as i2 from "../../../../services/process/processes/async-action/async-action";
class SavedFilterDeleteAction extends SavedFilterActionHandler {
    constructor(message, asyncActionService) {
        super();
        this.message = message;
        this.asyncActionService = asyncActionService;
        this.key = 'delete';
        this.modes = ['edit', 'detail'];
    }
    run(data) {
        const actionName = `record-${this.key}`;
        const baseRecord = (data.store.getBaseRecord()) || {};
        if (!baseRecord.id) {
            this.message.addWarningMessageByKey('LBL_FILTER_ID_NOT_DEFINED');
            return;
        }
        this.message.removeMessages();
        const asyncData = {
            action: actionName,
            module: baseRecord.module,
            id: baseRecord.id,
        };
        this.asyncActionService.run(actionName, asyncData, 'noop').pipe(take(1)).subscribe(() => {
            data.listFilterStore.config.removeSavedFilter(baseRecord);
        });
    }
    shouldDisplay(data) {
        const store = data && data.store;
        const filter = (store && store.recordStore.getBaseRecord()) || {};
        return !!filter.id;
    }
    static { this.ɵfac = function SavedFilterDeleteAction_Factory(t) { return new (t || SavedFilterDeleteAction)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject(i2.AsyncActionService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SavedFilterDeleteAction, factory: SavedFilterDeleteAction.ɵfac, providedIn: 'root' }); }
}
export { SavedFilterDeleteAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SavedFilterDeleteAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MessageService }, { type: i2.AsyncActionService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZWQtZmlsdGVyLWRlbGV0ZS5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9saXN0LWZpbHRlci9hY3Rpb25zL2RlbGV0ZS9zYXZlZC1maWx0ZXItZGVsZXRlLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQzVFLE9BQU8sRUFBd0Isd0JBQXdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RixPQUFPLEVBQW1CLGtCQUFrQixFQUFDLE1BQU0sa0VBQWtFLENBQUM7Ozs7QUFHdEgsTUFHYSx1QkFBd0IsU0FBUSx3QkFBd0I7SUFLakUsWUFDYyxPQUF1QixFQUN2QixrQkFBc0M7UUFFaEQsS0FBSyxFQUFFLENBQUM7UUFIRSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTHBELFFBQUcsR0FBRyxRQUFRLENBQUM7UUFDZixVQUFLLEdBQUcsQ0FBQyxNQUFrQixFQUFFLFFBQW9CLENBQUMsQ0FBQztJQU9uRCxDQUFDO0lBRUQsR0FBRyxDQUFDLElBQTJCO1FBRTNCLE1BQU0sVUFBVSxHQUFHLFVBQVUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLEVBQWlCLENBQUM7UUFDckUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ2pFLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFOUIsTUFBTSxTQUFTLEdBQUc7WUFDZCxNQUFNLEVBQUUsVUFBVTtZQUNsQixNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07WUFDekIsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFO1NBQ0EsQ0FBQztRQUV0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUN2QixVQUFVLEVBQ1YsU0FBUyxFQUNULE1BQU0sQ0FDVCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUEyQjtRQUNyQyxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNqQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksRUFBaUIsQ0FBQztRQUVqRixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7d0ZBM0NRLHVCQUF1Qjt1RUFBdkIsdUJBQXVCLFdBQXZCLHVCQUF1QixtQkFGcEIsTUFBTTs7U0FFVCx1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQUhuQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1NhdmVkRmlsdGVyQWN0aW9uRGF0YSwgU2F2ZWRGaWx0ZXJBY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9zYXZlZC1maWx0ZXIuYWN0aW9uJztcbmltcG9ydCB7QXN5bmNBY3Rpb25JbnB1dCwgQXN5bmNBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3NhdmVkLWZpbHRlcnMvc2F2ZWQtZmlsdGVyLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTYXZlZEZpbHRlckRlbGV0ZUFjdGlvbiBleHRlbmRzIFNhdmVkRmlsdGVyQWN0aW9uSGFuZGxlciB7XG5cbiAgICBrZXkgPSAnZGVsZXRlJztcbiAgICBtb2RlcyA9IFsnZWRpdCcgYXMgVmlld01vZGUsICdkZXRhaWwnIGFzIFZpZXdNb2RlXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBTYXZlZEZpbHRlckFjdGlvbkRhdGEpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBhY3Rpb25OYW1lID0gYHJlY29yZC0ke3RoaXMua2V5fWA7XG4gICAgICAgIGNvbnN0IGJhc2VSZWNvcmQgPSAoZGF0YS5zdG9yZS5nZXRCYXNlUmVjb3JkKCkpIHx8IHt9IGFzIFNhdmVkRmlsdGVyO1xuICAgICAgICBpZiAoIWJhc2VSZWNvcmQuaWQpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGRXYXJuaW5nTWVzc2FnZUJ5S2V5KCdMQkxfRklMVEVSX0lEX05PVF9ERUZJTkVEJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1lc3NhZ2UucmVtb3ZlTWVzc2FnZXMoKTtcblxuICAgICAgICBjb25zdCBhc3luY0RhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbk5hbWUsXG4gICAgICAgICAgICBtb2R1bGU6IGJhc2VSZWNvcmQubW9kdWxlLFxuICAgICAgICAgICAgaWQ6IGJhc2VSZWNvcmQuaWQsXG4gICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcblxuICAgICAgICB0aGlzLmFzeW5jQWN0aW9uU2VydmljZS5ydW4oXG4gICAgICAgICAgICBhY3Rpb25OYW1lLFxuICAgICAgICAgICAgYXN5bmNEYXRhLFxuICAgICAgICAgICAgJ25vb3AnXG4gICAgICAgICkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgZGF0YS5saXN0RmlsdGVyU3RvcmUuY29uZmlnLnJlbW92ZVNhdmVkRmlsdGVyKGJhc2VSZWNvcmQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG91bGREaXNwbGF5KGRhdGE6IFNhdmVkRmlsdGVyQWN0aW9uRGF0YSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBzdG9yZSA9IGRhdGEgJiYgZGF0YS5zdG9yZTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gKHN0b3JlICYmIHN0b3JlLnJlY29yZFN0b3JlLmdldEJhc2VSZWNvcmQoKSkgfHwge30gYXMgU2F2ZWRGaWx0ZXI7XG5cbiAgICAgICAgcmV0dXJuICEhZmlsdGVyLmlkO1xuICAgIH1cbn1cbiJdfQ==