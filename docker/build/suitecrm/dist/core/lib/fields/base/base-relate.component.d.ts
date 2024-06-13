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
import { OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AttributeMap } from 'common';
import { ModuleNameMapper } from '../../services/navigation/module-name-mapper/module-name-mapper.service';
import { BaseFieldComponent } from './base-field.component';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { LanguageStore } from '../../store/language/language.store';
import { RelateService } from '../../services/record/relate/relate.service';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class BaseRelateComponent extends BaseFieldComponent implements OnInit, OnDestroy {
    protected languages: LanguageStore;
    protected typeFormatter: DataTypeFormatter;
    protected relateService: RelateService;
    protected moduleNameMapper: ModuleNameMapper;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    selectedValues: AttributeMap[];
    options: AttributeMap[];
    status: '' | 'searching' | 'not-found' | 'error' | 'found' | 'no-module';
    initModule: string;
    constructor(languages: LanguageStore, typeFormatter: DataTypeFormatter, relateService: RelateService, moduleNameMapper: ModuleNameMapper, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    get module(): string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    onModuleChange(): void;
    search: (text: string) => Observable<any>;
    getRelateFieldName(): string;
    getRelateIdField(): string;
    getRelatedModule(): string;
    getMessage(): string;
    getInvalidClass(): string;
    hasSearchError(): boolean;
    resetStatus(): void;
    getPlaceholderLabel(): string;
    protected init(): void;
    protected buildRelate(id: string, relateValue: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseRelateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseRelateComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
