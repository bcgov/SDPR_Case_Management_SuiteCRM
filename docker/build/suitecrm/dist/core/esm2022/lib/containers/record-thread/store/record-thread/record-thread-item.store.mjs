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
import { map } from 'rxjs/operators';
import { BaseRecordContainerStore } from '../../../../store/record-container/base-record-container.store';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { MessageService } from '../../../../services/message/message.service';
import { FieldManager } from '../../../../services/record/field/field.manager';
import { LanguageStore } from '../../../../store/language/language.store';
import { RecordStoreFactory } from '../../../../store/record/record.store.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/app-state/app-state.store";
import * as i2 from "../../../../store/metadata/metadata.store.service";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../services/record/field/field.manager";
import * as i5 from "../../../../store/language/language.store";
import * as i6 from "../../../../store/record/record.store.factory";
class RecordThreadItemStore extends BaseRecordContainerStore {
    constructor(appStateStore, meta, message, fieldManager, language, storeFactory) {
        super(appStateStore, meta, message, fieldManager, language, storeFactory);
        this.appStateStore = appStateStore;
        this.meta = meta;
        this.message = message;
        this.fieldManager = fieldManager;
        this.language = language;
        this.storeFactory = storeFactory;
    }
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    getViewFields$() {
        return this.meta$.pipe(map((meta) => {
            const fieldsMap = {};
            const fields = [];
            const fieldDefinitions = meta.fields ?? {};
            Object.keys(fieldDefinitions).forEach(fieldName => {
                if (fieldDefinitions[fieldName]) {
                    fieldsMap[fieldName] = fieldDefinitions[fieldName];
                }
            });
            meta.headerLayout && meta.headerLayout.rows && meta.headerLayout.rows.forEach(row => {
                row.cols.forEach(col => {
                    if (col.field) {
                        fieldsMap[col.field.name] = col.field;
                    }
                });
            });
            meta.bodyLayout && meta.bodyLayout.rows && meta.bodyLayout.rows.forEach(row => {
                row.cols.forEach(col => {
                    if (col.field) {
                        fieldsMap[col.field.name] = col.field;
                    }
                });
            });
            Object.keys(fieldsMap).forEach(fieldName => {
                fields.push(fieldsMap[fieldName]);
            });
            return fields;
        }));
    }
    /**
     * Init record
     *
     * @param {object} record to use
     * @param {string} mode to use
     * @param {boolean} loadMetadata to use
     * @returns {object} Observable<any>
     */
    initRecord(record, mode = 'detail', loadMetadata = true) {
        super.initRecord(record, mode, loadMetadata);
        this.setRecord(record);
    }
    static { this.ɵfac = function RecordThreadItemStore_Factory(t) { return new (t || RecordThreadItemStore)(i0.ɵɵinject(i1.AppStateStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.FieldManager), i0.ɵɵinject(i5.LanguageStore), i0.ɵɵinject(i6.RecordStoreFactory)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordThreadItemStore, factory: RecordThreadItemStore.ɵfac }); }
}
export { RecordThreadItemStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadItemStore, [{
        type: Injectable
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.MetadataStore }, { type: i3.MessageService }, { type: i4.FieldManager }, { type: i5.LanguageStore }, { type: i6.RecordStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC1pdGVtLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvcmVjb3JkLXRocmVhZC9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQtaXRlbS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBQ0gsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sZ0VBQWdFLENBQUM7QUFDeEcsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUNoRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDNUUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQzdFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7Ozs7QUFFakYsTUFDYSxxQkFBc0IsU0FBUSx3QkFBa0Q7SUFFekYsWUFDYyxhQUE0QixFQUM1QixJQUFtQixFQUNuQixPQUF1QixFQUN2QixZQUEwQixFQUMxQixRQUF1QixFQUN2QixZQUFnQztRQUcxQyxLQUFLLENBQ0QsYUFBYSxFQUNiLElBQUksRUFDSixPQUFPLEVBQ1AsWUFBWSxFQUNaLFFBQVEsRUFDUixZQUFZLENBQ2YsQ0FBQztRQWZRLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFNBQUksR0FBSixJQUFJLENBQWU7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7SUFXOUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxjQUFjO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBOEIsRUFBRSxFQUFFO1lBQzFELE1BQU0sU0FBUyxHQUEyQixFQUE0QixDQUFDO1lBQ3ZFLE1BQU0sTUFBTSxHQUEwQixFQUFFLENBQUM7WUFFekMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQTRCLENBQUE7WUFDcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDOUMsSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDN0IsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN0RDtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hGLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNuQixJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7d0JBQ1gsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztxQkFDekM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMxRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO3dCQUNYLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7cUJBQ3pDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQTtZQUVGLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLFVBQVUsQ0FBQyxNQUFjLEVBQUUsT0FBaUIsUUFBb0IsRUFBRSxZQUFZLEdBQUcsSUFBSTtRQUV4RixLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO3NGQTFFUSxxQkFBcUI7dUVBQXJCLHFCQUFxQixXQUFyQixxQkFBcUI7O1NBQXJCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7UmVjb3JkLCBWaWV3RmllbGREZWZpbml0aW9uLCBWaWV3RmllbGREZWZpbml0aW9uTWFwLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1NZXRhZGF0YX0gZnJvbSAnLi9yZWNvcmQtdGhyZWFkLWl0ZW0uc3RvcmUubW9kZWwnO1xuaW1wb3J0IHtCYXNlUmVjb3JkQ29udGFpbmVyU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC1jb250YWluZXIvYmFzZS1yZWNvcmQtY29udGFpbmVyLnN0b3JlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWVsZE1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3JlY29yZC9maWVsZC9maWVsZC5tYW5hZ2VyJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC9yZWNvcmQuc3RvcmUuZmFjdG9yeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWNvcmRUaHJlYWRJdGVtU3RvcmUgZXh0ZW5kcyBCYXNlUmVjb3JkQ29udGFpbmVyU3RvcmU8UmVjb3JkVGhyZWFkSXRlbU1ldGFkYXRhPiB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBmaWVsZE1hbmFnZXI6IEZpZWxkTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmVGYWN0b3J5OiBSZWNvcmRTdG9yZUZhY3RvcnlcbiAgICApIHtcblxuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGFwcFN0YXRlU3RvcmUsXG4gICAgICAgICAgICBtZXRhLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGZpZWxkTWFuYWdlcixcbiAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgc3RvcmVGYWN0b3J5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHZpZXcgZmllbGRzIG9ic2VydmFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8Vmlld0ZpZWxkRGVmaW5pdGlvbltdPlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRWaWV3RmllbGRzJCgpOiBPYnNlcnZhYmxlPFZpZXdGaWVsZERlZmluaXRpb25bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXRhJC5waXBlKG1hcCgobWV0YTogUmVjb3JkVGhyZWFkSXRlbU1ldGFkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZHNNYXA6IFZpZXdGaWVsZERlZmluaXRpb25NYXAgPSB7fSBhcyBWaWV3RmllbGREZWZpbml0aW9uTWFwO1xuICAgICAgICAgICAgY29uc3QgZmllbGRzOiBWaWV3RmllbGREZWZpbml0aW9uW10gPSBbXTtcblxuICAgICAgICAgICAgY29uc3QgZmllbGREZWZpbml0aW9ucyA9IG1ldGEuZmllbGRzID8/IHt9IGFzIFZpZXdGaWVsZERlZmluaXRpb25NYXBcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZpZWxkRGVmaW5pdGlvbnMpLmZvckVhY2goZmllbGROYW1lID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGREZWZpbml0aW9uc1tmaWVsZE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc01hcFtmaWVsZE5hbWVdID0gZmllbGREZWZpbml0aW9uc1tmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZXRhLmhlYWRlckxheW91dCAmJiBtZXRhLmhlYWRlckxheW91dC5yb3dzICYmIG1ldGEuaGVhZGVyTGF5b3V0LnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgIHJvdy5jb2xzLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbC5maWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzTWFwW2NvbC5maWVsZC5uYW1lXSA9IGNvbC5maWVsZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1ldGEuYm9keUxheW91dCAmJiBtZXRhLmJvZHlMYXlvdXQucm93cyAmJiBtZXRhLmJvZHlMYXlvdXQucm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgcm93LmNvbHMuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29sLmZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNNYXBbY29sLmZpZWxkLm5hbWVdID0gY29sLmZpZWxkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZmllbGRzTWFwKS5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgZmllbGRzLnB1c2goZmllbGRzTWFwW2ZpZWxkTmFtZV0pO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkcztcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgcmVjb3JkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9hZE1ldGFkYXRhIHRvIHVzZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0UmVjb3JkKHJlY29yZDogUmVjb3JkLCBtb2RlOiBWaWV3TW9kZSA9ICdkZXRhaWwnIGFzIFZpZXdNb2RlLCBsb2FkTWV0YWRhdGEgPSB0cnVlKTogdm9pZCB7XG5cbiAgICAgICAgc3VwZXIuaW5pdFJlY29yZChyZWNvcmQsIG1vZGUsIGxvYWRNZXRhZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0UmVjb3JkKHJlY29yZCk7XG4gICAgfVxuXG59XG4iXX0=