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
import { ElementRef } from '@angular/core';
import { AttributeMap, ButtonInterface, Field, Record } from 'common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModuleNameMapper } from '../../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { BaseRelateComponent } from '../../../base/base-relate.component';
import { LanguageStore } from '../../../../store/language/language.store';
import { RelateService } from '../../../../services/record/relate/relate.service';
import { RecordListModalResult } from '../../../../containers/record-list-modal/components/record-list-modal/record-list-modal.model';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import { Dropdown, DropdownFilterOptions } from "primeng/dropdown";
import * as i0 from "@angular/core";
export declare class RelateEditFieldComponent extends BaseRelateComponent {
    protected languages: LanguageStore;
    protected typeFormatter: DataTypeFormatter;
    protected relateService: RelateService;
    protected moduleNameMapper: ModuleNameMapper;
    protected modalService: NgbModal;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    tag: Dropdown;
    dropdownFilterInput: ElementRef;
    selectButton: ButtonInterface;
    idField: Field;
    selectedValue: AttributeMap;
    placeholderLabel: string;
    emptyFilterLabel: string;
    filterValue: string | undefined;
    /**
     * Constructor
     *
     * @param {object} languages service
     * @param {object} typeFormatter service
     * @param {object} relateService service
     * @param {object} moduleNameMapper service
     * @param {object} modalService service
     * @param {object} logic
     * @param {object} logicDisplay
     */
    constructor(languages: LanguageStore, typeFormatter: DataTypeFormatter, relateService: RelateService, moduleNameMapper: ModuleNameMapper, modalService: NgbModal, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    /**
     * On init handler
     */
    ngOnInit(): void;
    protected init(): void;
    protected initValue(): void;
    /**
     * Handle newly added item
     *
     * @param {object} item added
     */
    onAdd(item: any): void;
    /**
     * Handle item removal
     */
    onRemove(): void;
    onClear(event: any): void;
    onFilter(): void;
    resetFunction(options: DropdownFilterOptions): void;
    onFilterInput(event: KeyboardEvent): void;
    /**
     * Set value on field
     *
     * @param {string} id to set
     * @param {string} relateValue to set
     */
    protected setValue(id: string, relateValue: string): void;
    /**
     * Show record selection modal
     */
    protected showSelectModal(): void;
    /**
     * Get Selected Record
     *
     * @param {object} data RecordListModalResult
     * @returns {object} Record
     */
    protected getSelectedRecord(data: RecordListModalResult): Record;
    /**
     * Set the record as the selected item
     *
     * @param {object} record to set
     */
    protected setItem(record: Record): void;
    getTranslatedLabels(): void;
    focusFilterInput(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RelateEditFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RelateEditFieldComponent, "scrm-relate-edit", never, {}, {}, never, never, false, never>;
}
