import { Action, Field, Record, RecordMapperRegistry, ViewMode } from 'common';
import { FieldLogicActionData, FieldLogicActionHandler } from '../field-logic.action';
import { AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { ProcessService } from '../../../services/process/process.service';
import { MessageService } from '../../../services/message/message.service';
import { BaseSaveRecordMapper } from '../../../store/record/record-mappers/base-save.record-mapper';
import { ActiveFieldsChecker } from "../../../services/condition-operators/active-fields-checker.service";
import * as i0 from "@angular/core";
export declare class UpdateValueBackendAction extends FieldLogicActionHandler {
    protected asyncActionService: AsyncActionService;
    protected processService: ProcessService;
    protected messages: MessageService;
    protected recordMappers: RecordMapperRegistry;
    protected baseMapper: BaseSaveRecordMapper;
    protected activeFieldsChecker: ActiveFieldsChecker;
    key: string;
    modes: ViewMode[];
    constructor(asyncActionService: AsyncActionService, processService: ProcessService, messages: MessageService, recordMappers: RecordMapperRegistry, baseMapper: BaseSaveRecordMapper, activeFieldsChecker: ActiveFieldsChecker);
    run(data: FieldLogicActionData, action: Action): void;
    getBaseRecord(record: Record): Record;
    /**
     * Map staging fields
     */
    protected mapRecordFields(record: Record): void;
    /**
     * Update the new value
     * @param {object} field
     * @param {string} value
     * @param {object} record
     */
    protected updateValue(field: Field, value: string, record: Record): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateValueBackendAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpdateValueBackendAction>;
}
