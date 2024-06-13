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
import { AsyncActionHandler } from '../../async-action.model';
import { Injectable } from '@angular/core';
import { MessageService } from '../../../../../message/message.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../message/message.service";
class ExportAsyncAction extends AsyncActionHandler {
    constructor(message) {
        super();
        this.message = message;
        this.key = 'export';
    }
    run(data) {
        if (!data || !data.url || !data.formData) {
            this.message.addDangerMessageByKey('LBL_MISSING_HANDLER_DATA_ROUTE');
            return;
        }
        const options = {
            responseType: 'blob',
            observe: 'response',
        };
        if (data.queryParams) {
            options.params = data.queryParams;
        }
        this.download(data.url, data.formData);
    }
    /**
     * Download file
     *
     * NOTE: using a hidden form instead of js for better memory management see:
     * https://github.com/eligrey/FileSaver.js/wiki/Saving-a-remote-file#using-a-form-element-other-than-get-methods
     *
     * @param {string} url for download
     * @param {object} formData to submit
     */
    download(url, formData) {
        const form = document.createElement('form');
        form.setAttribute('id', 'export-download');
        form.setAttribute('method', 'post');
        form.setAttribute('action', url);
        form.setAttribute('target', '_self');
        form.setAttribute('style', 'display: none;');
        Object.keys(formData).forEach(key => {
            const hiddenField = document.createElement('input');
            hiddenField.setAttribute('name', key);
            hiddenField.setAttribute('value', formData[key]);
            form.appendChild(hiddenField);
        });
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    }
    static { this.ɵfac = function ExportAsyncAction_Factory(t) { return new (t || ExportAsyncAction)(i0.ɵɵinject(i1.MessageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ExportAsyncAction, factory: ExportAsyncAction.ɵfac, providedIn: 'root' }); }
}
export { ExportAsyncAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExportAsyncAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LmFzeW5jLWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYWN0aW9ucy9leHBvcnQvZXhwb3J0LmFzeW5jLWFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFrQixrQkFBa0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzdFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdDQUF3QyxDQUFDOzs7QUFFdEUsTUFHYSxpQkFBa0IsU0FBUSxrQkFBa0I7SUFHckQsWUFDYyxPQUF1QjtRQUVqQyxLQUFLLEVBQUUsQ0FBQztRQUZFLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBSHJDLFFBQUcsR0FBRyxRQUFRLENBQUM7SUFNZixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQXFCO1FBRXJCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDckUsT0FBTztTQUNWO1FBRUQsTUFBTSxPQUFPLEdBQUc7WUFDWixZQUFZLEVBQUUsTUFBTTtZQUNwQixPQUFPLEVBQUUsVUFBVTtTQUNJLENBQUM7UUFFNUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNyQztRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ08sUUFBUSxDQUFDLEdBQVcsRUFBRSxRQUFtQztRQUUvRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUc3QyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNoQyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BELFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO2tGQXpEUSxpQkFBaUI7dUVBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmQsTUFBTTs7U0FFVCxpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7QXN5bmNBY3Rpb25EYXRhLCBBc3luY0FjdGlvbkhhbmRsZXJ9IGZyb20gJy4uLy4uL2FzeW5jLWFjdGlvbi5tb2RlbCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV4cG9ydEFzeW5jQWN0aW9uIGV4dGVuZHMgQXN5bmNBY3Rpb25IYW5kbGVyIHtcbiAgICBrZXkgPSAnZXhwb3J0JztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogQXN5bmNBY3Rpb25EYXRhKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLnVybCB8fCAhZGF0YS5mb3JtRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2VCeUtleSgnTEJMX01JU1NJTkdfSEFORExFUl9EQVRBX1JPVVRFJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXG4gICAgICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgICAgICB9IGFzIHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cbiAgICAgICAgaWYgKGRhdGEucXVlcnlQYXJhbXMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucGFyYW1zID0gZGF0YS5xdWVyeVBhcmFtcztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZG93bmxvYWQoZGF0YS51cmwsIGRhdGEuZm9ybURhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvd25sb2FkIGZpbGVcbiAgICAgKlxuICAgICAqIE5PVEU6IHVzaW5nIGEgaGlkZGVuIGZvcm0gaW5zdGVhZCBvZiBqcyBmb3IgYmV0dGVyIG1lbW9yeSBtYW5hZ2VtZW50IHNlZTpcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vZWxpZ3JleS9GaWxlU2F2ZXIuanMvd2lraS9TYXZpbmctYS1yZW1vdGUtZmlsZSN1c2luZy1hLWZvcm0tZWxlbWVudC1vdGhlci10aGFuLWdldC1tZXRob2RzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIGZvciBkb3dubG9hZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmb3JtRGF0YSB0byBzdWJtaXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZG93bmxvYWQodXJsOiBzdHJpbmcsIGZvcm1EYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2V4cG9ydC1kb3dubG9hZCcpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsIHVybCk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX3NlbGYnKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cblxuICAgICAgICBPYmplY3Qua2V5cyhmb3JtRGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGlkZGVuRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaGlkZGVuRmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywga2V5KTtcbiAgICAgICAgICAgIGhpZGRlbkZpZWxkLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBmb3JtRGF0YVtrZXldKTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuRmllbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBmb3JtLnN1Ym1pdCgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZvcm0pO1xuICAgIH1cbn1cbiJdfQ==