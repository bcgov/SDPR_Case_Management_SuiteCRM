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
import { BaseFieldComponent } from './base-field.component';
import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Field, Option } from 'common';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { LanguageListStringMap, LanguageStore, LanguageStringMap } from '../../store/language/language.store';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class BaseEnumComponent extends BaseFieldComponent implements OnInit, OnDestroy {
    protected languages: LanguageStore;
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    selectedValues: Option[];
    valueLabel: string;
    optionsMap: LanguageStringMap;
    options: Option[];
    labels: LanguageStringMap;
    protected subs: Subscription[];
    protected mappedOptions: {
        [key: string]: Option[];
    };
    protected isDynamicEnum: boolean;
    constructor(languages: LanguageStore, typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getInvalidClass(): string;
    protected buildProvidedOptions(options: Option[]): void;
    protected buildAppStringListOptions(appStrings: LanguageListStringMap): void;
    protected addExtraOptions(): void;
    protected buildOptionsArray(appStrings: LanguageListStringMap): void;
    protected addEmptyStringOption(): boolean;
    protected initValue(): void;
    protected initValueLabel(): void;
    /**
     *  Initialize the default value for the enum
     *
     *  @returns {void}
     *  @description set default enum value, if defined in vardefs
     * */
    protected initEnumDefault(): void;
    protected initEnumDefaultFieldValues(defaultVal: string): void;
    protected checkAndInitAsDynamicEnum(): void;
    protected buildDynamicEnumOptions(appStrings: LanguageListStringMap): void;
    protected filterMatchingOptions(values: string[]): Option[];
    protected createParentChildOptionsMap(parentOptions: LanguageStringMap, childOptions: Option[]): {
        [key: string]: Option[];
    };
    protected subscribeToParentValueChanges(parentEnum: Field): void;
    protected setValueToAvailableOption(): void;
    protected buildOptionFromValue(value: string): Option;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseEnumComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseEnumComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
