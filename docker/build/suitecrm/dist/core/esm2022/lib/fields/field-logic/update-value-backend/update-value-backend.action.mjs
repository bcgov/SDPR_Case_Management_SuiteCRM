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
import { take } from 'rxjs/operators';
import { ActiveFieldsChecker } from "../../../services/condition-operators/active-fields-checker.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../services/process/processes/async-action/async-action";
import * as i2 from "../../../services/process/process.service";
import * as i3 from "../../../services/message/message.service";
import * as i4 from "common";
import * as i5 from "../../../store/record/record-mappers/base-save.record-mapper";
import * as i6 from "../../../services/condition-operators/active-fields-checker.service";
class UpdateValueBackendAction extends FieldLogicActionHandler {
    constructor(asyncActionService, processService, messages, recordMappers, baseMapper, activeFieldsChecker) {
        super();
        this.asyncActionService = asyncActionService;
        this.processService = processService;
        this.messages = messages;
        this.recordMappers = recordMappers;
        this.baseMapper = baseMapper;
        this.activeFieldsChecker = activeFieldsChecker;
        this.key = 'updateValueBackend';
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
        if (isActive) {
            const processType = process;
            const baseRecord = this.getBaseRecord(record);
            const options = {
                action: processType,
                module: record.module ?? '',
                record: baseRecord
            };
            field.loading = true;
            this.processService.submit(processType, options).pipe(take(1)).subscribe((result) => {
                const value = result?.data?.value ?? null;
                field.loading = false;
                if (value === null) {
                    this.messages.addDangerMessageByKey("ERR_FIELD_LOGIC_BACKEND_CALCULATION");
                    return;
                }
                this.updateValue(field, value.toString(), record);
            }, (error) => {
                field.loading = false;
                this.messages.addDangerMessageByKey("ERR_FIELD_LOGIC_BACKEND_CALCULATION");
            });
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
    /**
     * Update the new value
     * @param {object} field
     * @param {string} value
     * @param {object} record
     */
    updateValue(field, value, record) {
        field.value = value.toString();
        field.formControl.setValue(value);
        // re-validate the parent form-control after value update
        record.formGroup.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
    static { this.ɵfac = function UpdateValueBackendAction_Factory(t) { return new (t || UpdateValueBackendAction)(i0.ɵɵinject(i1.AsyncActionService), i0.ɵɵinject(i2.ProcessService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.RecordMapperRegistry), i0.ɵɵinject(i5.BaseSaveRecordMapper), i0.ɵɵinject(i6.ActiveFieldsChecker)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UpdateValueBackendAction, factory: UpdateValueBackendAction.ɵfac, providedIn: 'root' }); }
}
export { UpdateValueBackendAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UpdateValueBackendAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AsyncActionService }, { type: i2.ProcessService }, { type: i3.MessageService }, { type: i4.RecordMapperRegistry }, { type: i5.BaseSaveRecordMapper }, { type: i6.ActiveFieldsChecker }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXZhbHVlLWJhY2tlbmQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9maWVsZC1sb2dpYy91cGRhdGUtdmFsdWUtYmFja2VuZC91cGRhdGUtdmFsdWUtYmFja2VuZC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUVILFNBQVMsRUFLVCxvQkFBb0IsRUFJdkIsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUF1Qix1QkFBdUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3BGLE9BQU8sRUFBbUIsa0JBQWtCLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUNuSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDekUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDhEQUE4RCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxRUFBcUUsQ0FBQzs7Ozs7Ozs7QUFFeEcsTUFHYSx3QkFBeUIsU0FBUSx1QkFBdUI7SUFLakUsWUFDYyxrQkFBc0MsRUFDdEMsY0FBOEIsRUFDOUIsUUFBd0IsRUFDeEIsYUFBbUMsRUFDbkMsVUFBZ0MsRUFDaEMsbUJBQXdDO1FBRWxELEtBQUssRUFBRSxDQUFDO1FBUEUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDeEIsa0JBQWEsR0FBYixh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QUFTLENBQUMsc0JBQXNCLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7eUZBcEhRLHdCQUF3Qjt1RUFBeEIsd0JBQXdCLFdBQXhCLHdCQUF3QixtQkFGckIsTUFBTTs7U0FFVCx3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQUhwQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIEFjdGlvbixcbiAgICBkZWVwQ2xvbmUsXG4gICAgRmllbGQsXG4gICAgTWFwRW50cnksXG4gICAgUmVjb3JkLFxuICAgIFJlY29yZE1hcHBlcixcbiAgICBSZWNvcmRNYXBwZXJSZWdpc3RyeSxcbiAgICBTdHJpbmdBcnJheU1hcCxcbiAgICBTdHJpbmdBcnJheU1hdHJpeCxcbiAgICBWaWV3TW9kZVxufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtGaWVsZExvZ2ljQWN0aW9uRGF0YSwgRmllbGRMb2dpY0FjdGlvbkhhbmRsZXJ9IGZyb20gJy4uL2ZpZWxkLWxvZ2ljLmFjdGlvbic7XG5pbXBvcnQge0FzeW5jQWN0aW9uSW5wdXQsIEFzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge1Byb2Nlc3NTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge0Jhc2VTYXZlUmVjb3JkTWFwcGVyfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9yZWNvcmQvcmVjb3JkLW1hcHBlcnMvYmFzZS1zYXZlLnJlY29yZC1tYXBwZXInO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0FjdGl2ZUZpZWxkc0NoZWNrZXJ9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9jb25kaXRpb24tb3BlcmF0b3JzL2FjdGl2ZS1maWVsZHMtY2hlY2tlci5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXBkYXRlVmFsdWVCYWNrZW5kQWN0aW9uIGV4dGVuZHMgRmllbGRMb2dpY0FjdGlvbkhhbmRsZXIge1xuXG4gICAga2V5ID0gJ3VwZGF0ZVZhbHVlQmFja2VuZCc7XG4gICAgbW9kZXMgPSBbJ2VkaXQnLCAnZGV0YWlsJywgJ2xpc3QnLCAnY3JlYXRlJywgJ21hc3N1cGRhdGUnLCAnZmlsdGVyJ10gYXMgVmlld01vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBwcm9jZXNzU2VydmljZTogUHJvY2Vzc1NlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlczogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRNYXBwZXJzOiBSZWNvcmRNYXBwZXJSZWdpc3RyeSxcbiAgICAgICAgcHJvdGVjdGVkIGJhc2VNYXBwZXI6IEJhc2VTYXZlUmVjb3JkTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aXZlRmllbGRzQ2hlY2tlcjogQWN0aXZlRmllbGRzQ2hlY2tlclxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICByZWNvcmRNYXBwZXJzLnJlZ2lzdGVyKCdkZWZhdWx0JywgYmFzZU1hcHBlci5nZXRLZXkoKSwgYmFzZU1hcHBlcik7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IEZpZWxkTG9naWNBY3Rpb25EYXRhLCBhY3Rpb246IEFjdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCByZWNvcmQgPSBkYXRhLnJlY29yZDtcbiAgICAgICAgY29uc3QgZmllbGQgPSBkYXRhLmZpZWxkO1xuXG4gICAgICAgIGlmICghcmVjb3JkIHx8ICFmaWVsZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aXZlT25GaWVsZHM6IFN0cmluZ0FycmF5TWFwID0gKGFjdGlvbi5wYXJhbXMgJiYgYWN0aW9uLnBhcmFtcy5hY3RpdmVPbkZpZWxkcykgfHwge30gYXMgU3RyaW5nQXJyYXlNYXA7XG4gICAgICAgIGNvbnN0IHJlbGF0ZWRGaWVsZHM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoYWN0aXZlT25GaWVsZHMpO1xuXG4gICAgICAgIGNvbnN0IGFjdGl2ZU9uQXR0cmlidXRlczogU3RyaW5nQXJyYXlNYXRyaXggPSAoYWN0aW9uLnBhcmFtcyAmJiBhY3Rpb24ucGFyYW1zLmFjdGl2ZU9uQXR0cmlidXRlcykgfHwge30gYXMgU3RyaW5nQXJyYXlNYXRyaXg7XG4gICAgICAgIGNvbnN0IHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKGFjdGl2ZU9uQXR0cmlidXRlcyk7XG5cbiAgICAgICAgaWYgKCFyZWxhdGVkRmllbGRzLmxlbmd0aCAmJiAhcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9jZXNzID0gYWN0aW9uLnBhcmFtcyAmJiBhY3Rpb24ucGFyYW1zLnByb2Nlc3M7XG5cbiAgICAgICAgaWYgKCFwcm9jZXNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuYWN0aXZlRmllbGRzQ2hlY2tlci5pc0FjdGl2ZShyZWxhdGVkRmllbGRzLCByZWNvcmQsIGFjdGl2ZU9uRmllbGRzLCByZWxhdGVkQXR0cmlidXRlc0ZpZWxkcywgYWN0aXZlT25BdHRyaWJ1dGVzKTtcblxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcblxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc1R5cGUgPSBwcm9jZXNzO1xuXG4gICAgICAgICAgICBjb25zdCBiYXNlUmVjb3JkID0gdGhpcy5nZXRCYXNlUmVjb3JkKHJlY29yZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBwcm9jZXNzVHlwZSxcbiAgICAgICAgICAgICAgICBtb2R1bGU6IHJlY29yZC5tb2R1bGUgPz8gJycsXG4gICAgICAgICAgICAgICAgcmVjb3JkOiBiYXNlUmVjb3JkXG4gICAgICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG5cbiAgICAgICAgICAgIGZpZWxkLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NTZXJ2aWNlLnN1Ym1pdChwcm9jZXNzVHlwZSwgb3B0aW9ucykucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHQ/LmRhdGE/LnZhbHVlID8/IG51bGw7XG4gICAgICAgICAgICAgICAgZmllbGQubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KFwiRVJSX0ZJRUxEX0xPR0lDX0JBQ0tFTkRfQ0FMQ1VMQVRJT05cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShmaWVsZCwgdmFsdWUudG9TdHJpbmcoKSwgcmVjb3JkKTtcblxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgZmllbGQubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KFwiRVJSX0ZJRUxEX0xPR0lDX0JBQ0tFTkRfQ0FMQ1VMQVRJT05cIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEJhc2VSZWNvcmQocmVjb3JkOiBSZWNvcmQpOiBSZWNvcmQge1xuICAgICAgICBpZiAoIXJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcFJlY29yZEZpZWxkcyhyZWNvcmQpO1xuXG4gICAgICAgIGNvbnN0IGJhc2VSZWNvcmQgPSB7XG4gICAgICAgICAgICBpZDogcmVjb3JkLmlkLFxuICAgICAgICAgICAgdHlwZTogcmVjb3JkLnR5cGUsXG4gICAgICAgICAgICBtb2R1bGU6IHJlY29yZC5tb2R1bGUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiByZWNvcmQuYXR0cmlidXRlcyxcbiAgICAgICAgICAgIGFjbHM6IHJlY29yZC5hY2xzXG4gICAgICAgIH0gYXMgUmVjb3JkO1xuXG4gICAgICAgIHJldHVybiBkZWVwQ2xvbmUoYmFzZVJlY29yZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwIHN0YWdpbmcgZmllbGRzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1hcFJlY29yZEZpZWxkcyhyZWNvcmQ6IFJlY29yZCk6IHZvaWQge1xuICAgICAgICBjb25zdCBtYXBwZXJzOiBNYXBFbnRyeTxSZWNvcmRNYXBwZXI+ID0gdGhpcy5yZWNvcmRNYXBwZXJzLmdldChyZWNvcmQubW9kdWxlKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhtYXBwZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXBwZXIgPSBtYXBwZXJzW2tleV07XG4gICAgICAgICAgICBtYXBwZXIubWFwKHJlY29yZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgbmV3IHZhbHVlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVWYWx1ZShmaWVsZDogRmllbGQsIHZhbHVlOiBzdHJpbmcsIHJlY29yZDogUmVjb3JkKTogdm9pZCB7XG4gICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAvLyByZS12YWxpZGF0ZSB0aGUgcGFyZW50IGZvcm0tY29udHJvbCBhZnRlciB2YWx1ZSB1cGRhdGVcbiAgICAgICAgcmVjb3JkLmZvcm1Hcm91cC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiB0cnVlfSk7XG4gICAgfVxuXG59XG4iXX0=