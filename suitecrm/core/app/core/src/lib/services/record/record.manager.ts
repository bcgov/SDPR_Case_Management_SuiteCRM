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
import {FieldDefinitionMap, FieldMap, isVoid, Record, ViewFieldDefinition} from 'common';
import {UntypedFormGroup} from '@angular/forms';
import {LanguageStore} from '../../store/language/language.store';
import {FieldManager} from './field/field.manager';
import {Params} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RecordManager {

    constructor(
        protected fieldManager: FieldManager,
        protected language: LanguageStore
    ) {
    }

    /**
     * Get empty record
     *
     * @param {string} module string
     * @returns {object} Record
     */
    buildEmptyRecord(module: string): Record {
        return {
            id: '',
            module,
            attributes: {
                id: ''
            },
            fields: {},
            formGroup: new UntypedFormGroup({}),
        } as Record;
    }

    /**
     * Init Fields
     *
     * @param {object} record to use
     * @param {object} viewFieldDefinitions to use
     * @returns {object} fields
     */
    public initFields(record: Record, viewFieldDefinitions: ViewFieldDefinition[]): FieldMap {

        if (!record.fields) {
            record.fields = {} as FieldMap;
        }

        if (!record.formGroup) {
            record.formGroup = new UntypedFormGroup({});
        }

        viewFieldDefinitions.forEach(viewField => {
            if (!viewField || !viewField.name) {
                return;
            }

            if(record.fields[viewField.name]) {
                return;
            }

            const isVardefBased = viewField?.vardefBased ?? false;

            if (isVardefBased) {
                this.fieldManager.addVardefOnlyField(record, viewField, this.language);
                return;
            }

            this.fieldManager.addField(record, viewField, this.language);
        });

        return record.fields;
    }

    /**
     * Inject param fields
     *
     * @param {object} params Params
     * @param {object} record Record
     * @param {object} vardefs FieldDefinitionMap
     */
    public injectParamFields(params: Params, record: Record, vardefs: FieldDefinitionMap): void {

        Object.keys(params).forEach(paramKey => {

            const definition = vardefs[paramKey];

            if (!isVoid(definition)) {
                const type = definition.type || '';
                let idName = definition.id_name || '';
                const name = definition.name || '';
                let rname = definition.rname || '';

                if (type === 'relate' && idName === name) {
                    record.attributes[paramKey] = params[paramKey];
                    return;
                }

                if (type === 'parent') {
                    const relate = {} as any;

                    let rname = 'name';
                    let idName = 'parent_id';
                    const groupFieldKey = paramKey + '-group';
                    const groupField = vardefs[groupFieldKey] ?? {};
                    const parentName = groupField.groupFields[paramKey];

                    if(parentName  && parentName.rname) {
                        rname = parentName.rname;
                    }

                    if (rname) {
                        relate[rname] = params[paramKey];
                    }

                    if (idName && params[idName]) {
                        relate.id = params[idName];
                    }

                    record.attributes[paramKey] = relate;

                    return;
                }

                if (type === 'relate') {
                    const relate = {} as any;

                    if (rname) {
                        relate[rname] = params[paramKey];
                    }

                    if (idName && params[idName]) {
                        relate.id = params[idName];
                    }

                    record.attributes[paramKey] = relate;

                    return;
                }

                record.attributes[paramKey] = params[paramKey];

                return;
            }

            this.handleLinkTypeRelationship(paramKey, params, vardefs, record);
        });
    }

    protected handleLinkTypeRelationship(paramKey: string, params: Params, vardefs: FieldDefinitionMap, record: Record): void {
        if (paramKey === 'return_relationship') {

            const returnRelationship = params.return_relationship;
            if (!returnRelationship) {
                return;
            }

            // check, on vardefs, if there is a field of type = link
            // with relationship equal to the value of return_relationship param
            Object.keys(vardefs).forEach(key => {

                const vardef = vardefs[key];
                const type = vardef.type || '';
                if (type !== 'link') {
                    return;
                }

                const relationship = vardef.relationship || '';
                if (!relationship) {
                    return;
                }

                if (relationship === returnRelationship) {

                    const linkFieldName = vardef.name;
                    const module = vardef.module ?? params.return_module ?? '';
                    if (!module) {
                        return;
                    }

                    const parentName = params.parent_name;
                    if (!parentName) {
                        return;
                    }

                    // name of the related parent field e.g. contact_id as injected
                    // in to field definition from its metadata definition
                    const relateId = vardef?.relationshipMetadata?.related_id;
                    const parentId = params[relateId] ?? '';
                    if (!parentId) {
                        return;
                    }

                    // add link type fields as line items to base record
                    record.attributes[linkFieldName] = [
                        {
                            id: parentId,
                            module,
                            attributes: {
                                id: parentId,
                                name: parentName
                            }
                        } as Record
                    ];

                    return;
                }
            });
        }
    }
}
