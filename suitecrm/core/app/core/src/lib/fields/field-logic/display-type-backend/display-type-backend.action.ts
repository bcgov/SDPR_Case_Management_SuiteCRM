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

import {Injectable} from '@angular/core';
import {
    Action,
    deepClone,
    DisplayType,
    MapEntry,
    Record,
    RecordMapper,
    RecordMapperRegistry,
    StringArrayMap,
    StringArrayMatrix,
    ViewMode
} from 'common';
import {FieldLogicActionData, FieldLogicActionHandler} from '../field-logic.action';
import {AsyncActionInput, AsyncActionService} from '../../../services/process/processes/async-action/async-action';
import {ProcessService} from '../../../services/process/process.service';
import {MessageService} from '../../../services/message/message.service';
import {BaseSaveRecordMapper} from '../../../store/record/record-mappers/base-save.record-mapper';
import {ActiveFieldsChecker} from "../../../services/condition-operators/active-fields-checker.service";

@Injectable({
    providedIn: 'root'
})
export class DisplayTypeBackendAction extends FieldLogicActionHandler {

    key = 'displayTypeBackend';
    modes = ['edit', 'detail', 'list', 'create', 'massupdate', 'filter'] as ViewMode[];

    constructor(
        protected asyncActionService: AsyncActionService,
        protected processService: ProcessService,
        protected messages: MessageService,
        protected recordMappers: RecordMapperRegistry,
        protected baseMapper: BaseSaveRecordMapper,
        protected activeFieldsChecker: ActiveFieldsChecker
    ) {
        super();
        recordMappers.register('default', baseMapper.getKey(), baseMapper);
    }

    run(data: FieldLogicActionData, action: Action): void {
        const record = data.record;
        const field = data.field;

        if (!record || !field) {
            return;
        }
        const activeOnFields: StringArrayMap = (action.params && action.params.activeOnFields) || {} as StringArrayMap;
        const relatedFields: string[] = Object.keys(activeOnFields);

        const activeOnAttributes: StringArrayMatrix = (action.params && action.params.activeOnAttributes) || {} as StringArrayMatrix;
        const relatedAttributesFields: string[] = Object.keys(activeOnAttributes);

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
            } as AsyncActionInput;
            field.loading = true;

            this.processService.submit(processType, options).subscribe((result) => {

                const targetDisplay = result?.data?.value ?? null;
                field.loading = false;

                if (targetDisplay === null) {
                    this.messages.addDangerMessageByKey("ERR_FIELD_LOGIC_BACKEND_CALCULATION");
                    return;
                }
                display = targetDisplay
                data.field.display = display as DisplayType;

            }, (error) => {
                field.loading = false;
                this.messages.addDangerMessageByKey("ERR_FIELD_LOGIC_BACKEND_CALCULATION");
            });
        }

        const resetOn: string = (action.params && action.params.resetOn) || 'none';

        if (resetOn === display) {
            if (data.field.valueList && data.field.valueList.length) {
                data.field.valueList = [];
            }

            if (data.field.value) {
                data.field.value = '';
            }
        }
    }

    getBaseRecord(record: Record): Record {
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
        } as Record;

        return deepClone(baseRecord);
    }

    /**
     * Map staging fields
     */
    protected mapRecordFields(record: Record): void {
        const mappers: MapEntry<RecordMapper> = this.recordMappers.get(record.module);

        Object.keys(mappers).forEach(key => {
            const mapper = mappers[key];
            mapper.map(record);
        });
    }

    getTriggeringStatus(): string[] {
        return ['onValueChange', 'onFieldInitialize'];
    }

}
