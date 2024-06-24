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

import {Injectable} from '@angular/core';
import {Action, StringArrayMap, StringArrayMatrix, ViewMode} from 'common';
import {FieldLogicActionData, FieldLogicActionHandler} from '../field-logic.action';
import {RequiredValidator} from '../../../services/record/validation/validators/required.validator';
import {ActiveFieldsChecker} from "../../../services/condition-operators/active-fields-checker.service";

@Injectable({
    providedIn: 'root'
})
export class RequiredAction extends FieldLogicActionHandler {

    key = 'required';
    modes = ['edit', 'create', 'massupdate', 'filter'] as ViewMode[];

    constructor(
        protected requiredValidator: RequiredValidator,
        protected activeFieldsChecker: ActiveFieldsChecker
    ) {
        super();
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

        const isActive = this.activeFieldsChecker.isActive(relatedFields, record, activeOnFields, relatedAttributesFields, activeOnAttributes);

        let required = false;
        let validators = [...data.field.validators || []];
        if (isActive) {
            required = true;
            validators = validators.concat(this.requiredValidator.getValidator(field));
        }

        data.field.formControl.updateValueAndValidity({onlySelf: true, emitEvent: true});
        record.formGroup.updateValueAndValidity({onlySelf: true, emitEvent: true});
        data.field.definition.required = required;
        data.field.formControl.setValidators(validators);
        data.field.formControl.updateValueAndValidity({onlySelf: true, emitEvent: true});
        record.formGroup.updateValueAndValidity({onlySelf: true, emitEvent: true});
    }

    getTriggeringStatus(): string[] {
        return ['onValueChange', 'onFieldInitialize'];
    }
}
