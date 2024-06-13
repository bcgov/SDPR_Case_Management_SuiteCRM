/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { deepClone, RecordMapperRegistry } from 'common';
import { FieldLogicActionHandler } from '../field-logic.action';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { ProcessService } from '../../../services/process/process.service';
import { MessageService } from '../../../services/message/message.service';
import { BaseSaveRecordMapper } from '../../../store/record/record-mappers/base-save.record-mapper';
import { ActiveFieldsChecker } from "../../../services/condition-operators/active-fields-checker.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../services/process/processes/async-action/async-action";
import * as i2 from "../../../services/process/process.service";
import * as i3 from "../../../services/message/message.service";
import * as i4 from "common";
import * as i5 from "../../../store/record/record-mappers/base-save.record-mapper";
import * as i6 from "../../../services/condition-operators/active-fields-checker.service";
class DisplayTypeBackendAction extends FieldLogicActionHandler {
    constructor(asyncActionService, processService, messages, recordMappers, baseMapper, activeFieldsChecker) {
        super();
        this.asyncActionService = asyncActionService;
        this.processService = processService;
        this.messages = messages;
        this.recordMappers = recordMappers;
        this.baseMapper = baseMapper;
        this.activeFieldsChecker = activeFieldsChecker;
        this.key = 'displayTypeBackend';
        this.modes = ['edit', 'detail', 'list', 'create', 'massupdate', 'filter'];
        recordMappers.register('default', baseMapper.getKey(), baseMapper);
    }
    run(data, action) {
        const record = data.record;
        const field = data.field;
        if (!record || !field) {
            return;
        }
        const activeOnFields = (action.params && action.params.activeOnFields) || {};
        const relatedFields = Object.keys(activeOnFields);
        const activeOnAttributes = (action.params && action.params.activeOnAttributes) || {};
        const relatedAttributesFields = Object.keys(activeOnAttributes);
        if (!relatedFields.length && !relatedAttributesFields.length) {
            return;
        }
        const process = action.params && action.params.process;
        if (!process) {
            return;
        }
        const isActive = this.activeFieldsChecker.isActive(relatedFields, record, activeOnFields, relatedAttributesFields, activeOnAttributes);
        let display = data.field.defaultDisplay;
        if (isActive) {
            const processType = process;
            const baseRecord = this.getBaseRecord(record);
            const options = {
                action: processType,
                module: record.module ?? '',
                record: baseRecord
            };
            field.loading = true;
            this.processService.submit(processType, options).subscribe((result) => {
                const targetDisplay = result?.data?.value ?? null;
                field.loading = false;
                if (targetDisplay === null) {
                    this.messages.addDangerMessageByKey("ERR_FIELD_LOGIC_BACKEND_CALCULATION");
                    return;
                }
                display = targetDisplay;
                data.field.display = display;
            }, (error) => {
                field.loading = false;
                this.messages.addDangerMessageByKey("ERR_FIELD_LOGIC_BACKEND_CALCULATION");
            });
        }
        const resetOn = (action.params && action.params.resetOn) || 'none';
        if (resetOn === display) {
            if (data.field.valueList && data.field.valueList.length) {
                data.field.valueList = [];
            }
            if (data.field.value) {
                data.field.value = '';
            }
        }
    }
    getBaseRecord(record) {
        if (!record) {
            return null;
        }
        this.mapRecordFields(record);
        const baseRecord = {
            id: record.id,
            type: record.type,
            module: record.module,
            attributes: record.attributes,
            acls: record.acls
        };
        return deepClone(baseRecord);
    }
    /**
     * Map staging fields
     */
    mapRecordFields(record) {
        const mappers = this.recordMappers.get(record.module);
        Object.keys(mappers).forEach(key => {
            const mapper = mappers[key];
            mapper.map(record);
        });
    }
    getTriggeringStatus() {
        return ['onValueChange', 'onFieldInitialize'];
    }
    static { this.ɵfac = function DisplayTypeBackendAction_Factory(t) { return new (t || DisplayTypeBackendAction)(i0.ɵɵinject(i1.AsyncActionService), i0.ɵɵinject(i2.ProcessService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.RecordMapperRegistry), i0.ɵɵinject(i5.BaseSaveRecordMapper), i0.ɵɵinject(i6.ActiveFieldsChecker)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DisplayTypeBackendAction, factory: DisplayTypeBackendAction.ɵfac, providedIn: 'root' }); }
}
export { DisplayTypeBackendAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DisplayTypeBackendAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AsyncActionService }, { type: i2.ProcessService }, { type: i3.MessageService }, { type: i4.RecordMapperRegistry }, { type: i5.BaseSaveRecordMapper }, { type: i6.ActiveFieldsChecker }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS10eXBlLWJhY2tlbmQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9maWVsZC1sb2dpYy9kaXNwbGF5LXR5cGUtYmFja2VuZC9kaXNwbGF5LXR5cGUtYmFja2VuZC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUVILFNBQVMsRUFLVCxvQkFBb0IsRUFJdkIsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUF1Qix1QkFBdUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3BGLE9BQU8sRUFBbUIsa0JBQWtCLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUNuSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDekUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDhEQUE4RCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFFQUFxRSxDQUFDOzs7Ozs7OztBQUV4RyxNQUdhLHdCQUF5QixTQUFRLHVCQUF1QjtJQUtqRSxZQUNjLGtCQUFzQyxFQUN0QyxjQUE4QixFQUM5QixRQUF3QixFQUN4QixhQUFtQyxFQUNuQyxVQUFnQyxFQUNoQyxtQkFBd0M7UUFFbEQsS0FBSyxFQUFFLENBQUM7UUFQRSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsZUFBVSxHQUFWLFVBQVUsQ0FBc0I7UUFDaEMs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R0FBRyxDQUFDLEVBQUU7WUFDL0IsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsT0FBTyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7eUZBcEhRLHdCQUF3Qjt1RUFBeEIsd0JBQXdCLFdBQXhCLHdCQUF3QixtQkFGckIsTUFBTTs7U0FFVCx3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQUhwQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIEFjdGlvbixcbiAgICBkZWVwQ2xvbmUsXG4gICAgRGlzcGxheVR5cGUsXG4gICAgTWFwRW50cnksXG4gICAgUmVjb3JkLFxuICAgIFJlY29yZE1hcHBlcixcbiAgICBSZWNvcmRNYXBwZXJSZWdpc3RyeSxcbiAgICBTdHJpbmdBcnJheU1hcCxcbiAgICBTdHJpbmdBcnJheU1hdHJpeCxcbiAgICBWaWV3TW9kZVxufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtGaWVsZExvZ2ljQWN0aW9uRGF0YSwgRmllbGRMb2dpY0FjdGlvbkhhbmRsZXJ9IGZyb20gJy4uL2ZpZWxkLWxvZ2ljLmFjdGlvbic7XG5pbXBvcnQge0FzeW5jQWN0aW9uSW5wdXQsIEFzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge1Byb2Nlc3NTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge0Jhc2VTYXZlUmVjb3JkTWFwcGVyfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9yZWNvcmQvcmVjb3JkLW1hcHBlcnMvYmFzZS1zYXZlLnJlY29yZC1tYXBwZXInO1xuaW1wb3J0IHtBY3RpdmVGaWVsZHNDaGVja2VyfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvY29uZGl0aW9uLW9wZXJhdG9ycy9hY3RpdmUtZmllbGRzLWNoZWNrZXIuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERpc3BsYXlUeXBlQmFja2VuZEFjdGlvbiBleHRlbmRzIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyIHtcblxuICAgIGtleSA9ICdkaXNwbGF5VHlwZUJhY2tlbmQnO1xuICAgIG1vZGVzID0gWydlZGl0JywgJ2RldGFpbCcsICdsaXN0JywgJ2NyZWF0ZScsICdtYXNzdXBkYXRlJywgJ2ZpbHRlciddIGFzIFZpZXdNb2RlW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uU2VydmljZTogQXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJvY2Vzc1NlcnZpY2U6IFByb2Nlc3NTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZXM6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkTWFwcGVyczogUmVjb3JkTWFwcGVyUmVnaXN0cnksXG4gICAgICAgIHByb3RlY3RlZCBiYXNlTWFwcGVyOiBCYXNlU2F2ZVJlY29yZE1hcHBlcixcbiAgICAgICAgcHJvdGVjdGVkIGFjdGl2ZUZpZWxkc0NoZWNrZXI6IEFjdGl2ZUZpZWxkc0NoZWNrZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgcmVjb3JkTWFwcGVycy5yZWdpc3RlcignZGVmYXVsdCcsIGJhc2VNYXBwZXIuZ2V0S2V5KCksIGJhc2VNYXBwZXIpO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBGaWVsZExvZ2ljQWN0aW9uRGF0YSwgYWN0aW9uOiBBY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVjb3JkID0gZGF0YS5yZWNvcmQ7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZGF0YS5maWVsZDtcblxuICAgICAgICBpZiAoIXJlY29yZCB8fCAhZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3RpdmVPbkZpZWxkczogU3RyaW5nQXJyYXlNYXAgPSAoYWN0aW9uLnBhcmFtcyAmJiBhY3Rpb24ucGFyYW1zLmFjdGl2ZU9uRmllbGRzKSB8fCB7fSBhcyBTdHJpbmdBcnJheU1hcDtcbiAgICAgICAgY29uc3QgcmVsYXRlZEZpZWxkczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhhY3RpdmVPbkZpZWxkcyk7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlT25BdHRyaWJ1dGVzOiBTdHJpbmdBcnJheU1hdHJpeCA9IChhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMuYWN0aXZlT25BdHRyaWJ1dGVzKSB8fCB7fSBhcyBTdHJpbmdBcnJheU1hdHJpeDtcbiAgICAgICAgY29uc3QgcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoYWN0aXZlT25BdHRyaWJ1dGVzKTtcblxuICAgICAgICBpZiAoIXJlbGF0ZWRGaWVsZHMubGVuZ3RoICYmICFyZWxhdGVkQXR0cmlidXRlc0ZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2Nlc3MgPSBhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMucHJvY2VzcztcblxuICAgICAgICBpZiAoIXByb2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5hY3RpdmVGaWVsZHNDaGVja2VyLmlzQWN0aXZlKHJlbGF0ZWRGaWVsZHMsIHJlY29yZCwgYWN0aXZlT25GaWVsZHMsIHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzLCBhY3RpdmVPbkF0dHJpYnV0ZXMpO1xuXG4gICAgICAgIGxldCBkaXNwbGF5ID0gZGF0YS5maWVsZC5kZWZhdWx0RGlzcGxheTtcbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzVHlwZSA9IHByb2Nlc3M7XG4gICAgICAgICAgICBjb25zdCBiYXNlUmVjb3JkID0gdGhpcy5nZXRCYXNlUmVjb3JkKHJlY29yZCk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogcHJvY2Vzc1R5cGUsXG4gICAgICAgICAgICAgICAgbW9kdWxlOiByZWNvcmQubW9kdWxlID8/ICcnLFxuICAgICAgICAgICAgICAgIHJlY29yZDogYmFzZVJlY29yZFxuICAgICAgICAgICAgfSBhcyBBc3luY0FjdGlvbklucHV0O1xuICAgICAgICAgICAgZmllbGQubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1NlcnZpY2Uuc3VibWl0KHByb2Nlc3NUeXBlLCBvcHRpb25zKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0RGlzcGxheSA9IHJlc3VsdD8uZGF0YT8udmFsdWUgPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBmaWVsZC5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RGlzcGxheSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLmFkZERhbmdlck1lc3NhZ2VCeUtleShcIkVSUl9GSUVMRF9MT0dJQ19CQUNLRU5EX0NBTENVTEFUSU9OXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpc3BsYXkgPSB0YXJnZXREaXNwbGF5XG4gICAgICAgICAgICAgICAgZGF0YS5maWVsZC5kaXNwbGF5ID0gZGlzcGxheSBhcyBEaXNwbGF5VHlwZTtcblxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgZmllbGQubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KFwiRVJSX0ZJRUxEX0xPR0lDX0JBQ0tFTkRfQ0FMQ1VMQVRJT05cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc2V0T246IHN0cmluZyA9IChhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMucmVzZXRPbikgfHwgJ25vbmUnO1xuXG4gICAgICAgIGlmIChyZXNldE9uID09PSBkaXNwbGF5KSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5maWVsZC52YWx1ZUxpc3QgJiYgZGF0YS5maWVsZC52YWx1ZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5maWVsZC52YWx1ZUxpc3QgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGEuZmllbGQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmZpZWxkLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRCYXNlUmVjb3JkKHJlY29yZDogUmVjb3JkKTogUmVjb3JkIHtcbiAgICAgICAgaWYgKCFyZWNvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXBSZWNvcmRGaWVsZHMocmVjb3JkKTtcblxuICAgICAgICBjb25zdCBiYXNlUmVjb3JkID0ge1xuICAgICAgICAgICAgaWQ6IHJlY29yZC5pZCxcbiAgICAgICAgICAgIHR5cGU6IHJlY29yZC50eXBlLFxuICAgICAgICAgICAgbW9kdWxlOiByZWNvcmQubW9kdWxlLFxuICAgICAgICAgICAgYXR0cmlidXRlczogcmVjb3JkLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICBhY2xzOiByZWNvcmQuYWNsc1xuICAgICAgICB9IGFzIFJlY29yZDtcblxuICAgICAgICByZXR1cm4gZGVlcENsb25lKGJhc2VSZWNvcmQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcCBzdGFnaW5nIGZpZWxkc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBtYXBSZWNvcmRGaWVsZHMocmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWFwcGVyczogTWFwRW50cnk8UmVjb3JkTWFwcGVyPiA9IHRoaXMucmVjb3JkTWFwcGVycy5nZXQocmVjb3JkLm1vZHVsZSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMobWFwcGVycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFwcGVyID0gbWFwcGVyc1trZXldO1xuICAgICAgICAgICAgbWFwcGVyLm1hcChyZWNvcmQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRUcmlnZ2VyaW5nU3RhdHVzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIFsnb25WYWx1ZUNoYW5nZScsICdvbkZpZWxkSW5pdGlhbGl6ZSddO1xuICAgIH1cblxufVxuIl19