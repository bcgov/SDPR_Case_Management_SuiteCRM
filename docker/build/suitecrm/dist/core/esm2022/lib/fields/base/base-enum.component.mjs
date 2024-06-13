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
import { Component } from '@angular/core';
import { isEmptyString, isVoid } from 'common';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { LanguageStore } from '../../store/language/language.store';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import { isNull, isObject } from "lodash-es";
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../services/formatters/data-type.formatter.service";
import * as i3 from "../field-logic/field-logic.manager";
import * as i4 from "../field-logic-display/field-logic-display.manager";
class BaseEnumComponent extends BaseFieldComponent {
    constructor(languages, typeFormatter, logic, logicDisplay) {
        super(typeFormatter, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.selectedValues = [];
        this.valueLabel = '';
        this.options = [];
        this.subs = [];
        this.isDynamicEnum = false;
    }
    ngOnInit() {
        super.ngOnInit();
        const options$ = this?.field?.metadata?.options$ ?? null;
        if (options$) {
            this.subs.push(this.field.metadata.options$.subscribe((options) => {
                this.buildProvidedOptions(options);
                this.initValue();
            }));
            return;
        }
        const options = this?.field?.definition?.options ?? null;
        if (options) {
            this.subs.push(this.languages.vm$.subscribe((strings) => {
                this.buildAppStringListOptions(strings.appListStrings);
                this.initValue();
            }));
        }
        if (!options && !options$) {
            this.initValue();
        }
    }
    ngOnDestroy() {
        this.isDynamicEnum = false;
        this.subs.forEach(sub => sub.unsubscribe());
        this.options = [];
        this.optionsMap = {};
        this.selectedValues = [];
    }
    getInvalidClass() {
        if (this.field.formControl && this.field.formControl.invalid && this.field.formControl.touched) {
            return 'is-invalid';
        }
        return '';
    }
    buildProvidedOptions(options) {
        this.options = options;
        this.optionsMap = {};
        options.forEach(option => {
            this.optionsMap[option.value] = option.label;
        });
    }
    buildAppStringListOptions(appStrings) {
        this.optionsMap = {};
        this.addExtraOptions();
        if (appStrings && this.field.definition.options && appStrings[this.field.definition.options]) {
            const options = appStrings[this.field.definition.options];
            if (this.options && Object.keys(this.options)) {
                this.optionsMap = { ...this.optionsMap, ...options };
            }
        }
        this.buildOptionsArray(appStrings);
    }
    addExtraOptions() {
        const extraOptions = (this.field.metadata && this.field.metadata.extraOptions) || [];
        extraOptions.forEach((item) => {
            if (isVoid(item.value)) {
                return;
            }
            let label = item.label || '';
            if (item.labelKey) {
                label = this.languages.getFieldLabel(item.labelKey);
            }
            this.optionsMap[item.value] = label;
        });
    }
    buildOptionsArray(appStrings) {
        this.options = [];
        Object.keys(this.optionsMap).forEach(key => {
            if (isEmptyString(this.optionsMap[key]) && !this.addEmptyStringOption()) {
                return;
            }
            this.options.push({
                value: key,
                label: this.optionsMap[key]
            });
        });
        if (this.isDynamicEnum) {
            this.buildDynamicEnumOptions(appStrings);
        }
    }
    addEmptyStringOption() {
        return this.field.type !== 'multienum';
    }
    initValue() {
        this.selectedValues = [];
        if (this.field.criteria) {
            this.initValueLabel();
            return;
        }
        if (typeof this.field.value !== 'string') {
            return;
        }
        if (!this.optionsMap) {
            return;
        }
        if (typeof this.optionsMap[this.field.value] !== 'string') {
            return;
        }
        this.initValueLabel();
    }
    initValueLabel() {
        const fieldValue = this.field.value || this.field.criteria?.target || undefined;
        if (fieldValue !== undefined) {
            this.valueLabel = this.optionsMap[fieldValue];
            this.selectedValues.push({
                value: fieldValue,
                label: this.valueLabel
            });
        }
    }
    /**
     *  Initialize the default value for the enum
     *
     *  @returns {void}
     *  @description set default enum value, if defined in vardefs
     * */
    initEnumDefault() {
        if (!isEmptyString(this.record?.id)) {
            this.field?.formControl.setValue('');
            return;
        }
        let defaultVal = this.field?.definition?.default;
        if (typeof defaultVal === 'string') {
            defaultVal = defaultVal.trim();
        }
        if (!defaultVal) {
            this.field.formControl.setValue('');
            return;
        }
        this.selectedValues.push({
            value: defaultVal,
            label: this.optionsMap[defaultVal]
        });
        this.initEnumDefaultFieldValues(defaultVal);
    }
    initEnumDefaultFieldValues(defaultVal) {
        if (this.field.type === 'multienum') {
            const defaultValues = this.selectedValues.map(option => option.value);
            this.field.valueList = defaultValues;
            this.field.formControl.setValue(defaultValues);
        }
        else {
            this.field.value = defaultVal;
            this.field.formControl.setValue(defaultVal);
        }
        this.field.formControl.markAsDirty();
    }
    checkAndInitAsDynamicEnum() {
        const definition = (this.field && this.field.definition) || {};
        const dynamic = (definition && definition.dynamic) || false;
        const parentEnumKey = (definition && definition.parentenum) || '';
        const fields = (this.record && this.record.fields) || null;
        if (dynamic && parentEnumKey && fields) {
            this.isDynamicEnum = true;
            const parentEnum = fields[parentEnumKey];
            if (parentEnum) {
                this.subscribeToParentValueChanges(parentEnum);
            }
        }
    }
    buildDynamicEnumOptions(appStrings) {
        const parentEnum = this.record.fields[this.field.definition.parentenum];
        if (parentEnum) {
            const parentOptionMap = appStrings[parentEnum.definition.options];
            if (parentOptionMap && Object.keys(parentOptionMap).length !== 0) {
                this.mappedOptions = this.createParentChildOptionsMap(parentOptionMap, this.options);
                let parentValues = [];
                if (parentEnum.definition.type === 'multienum') {
                    parentValues = parentEnum.valueList;
                }
                else {
                    parentValues.push(parentEnum.value);
                }
                this.options = this.filterMatchingOptions(parentValues);
                if (parentValues && parentValues.length) {
                    this.setValueToAvailableOption();
                }
            }
        }
    }
    filterMatchingOptions(values) {
        let filteredOptions = [];
        if (!values || !values.length) {
            return [];
        }
        values.forEach(value => {
            if (!this.mappedOptions[value]) {
                return;
            }
            filteredOptions = filteredOptions.concat([...this.mappedOptions[value]]);
        });
        return filteredOptions;
    }
    createParentChildOptionsMap(parentOptions, childOptions) {
        const mappedOptions = {};
        Object.keys(parentOptions).forEach(key => {
            mappedOptions[key] = childOptions.filter(option => String(option.value).startsWith(key));
        });
        return mappedOptions;
    }
    subscribeToParentValueChanges(parentEnum) {
        if (parentEnum.formControl) {
            this.subs.push(parentEnum.formControl.valueChanges.subscribe(values => {
                if (typeof values === 'string') {
                    values = [values];
                }
                // Rebuild available enum options
                this.options = this.filterMatchingOptions(values);
                this.setValueToAvailableOption();
                this.initValue();
            }));
        }
    }
    setValueToAvailableOption() {
        if (!this?.options?.length) {
            this.field.value = '';
            this.field.formControl.setValue('');
            return;
        }
        if (!this.options.some(option => option.value === this.field.value)) {
            this.field.value = this.options[0].value;
            this.field.formControl.setValue(this.options[0].value);
        }
    }
    buildOptionFromValue(value) {
        const option = { value: '', label: '' };
        if (isNull(value)) {
            return option;
        }
        option.value = (typeof value !== 'string' ? JSON.stringify(value) : value).trim();
        option.label = option.value;
        const valueLabel = this.optionsMap[option.value] ?? option.label;
        if (isObject(valueLabel)) {
            return option;
        }
        option.label = (typeof valueLabel !== 'string' ? JSON.stringify(valueLabel) : valueLabel).trim();
        return option;
    }
    static { this.ɵfac = function BaseEnumComponent_Factory(t) { return new (t || BaseEnumComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.FieldLogicManager), i0.ɵɵdirectiveInject(i4.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseEnumComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BaseEnumComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
export { BaseEnumComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseEnumComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.FieldLogicManager }, { type: i4.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1lbnVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvYmFzZS9iYXNlLWVudW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUUzRCxPQUFPLEVBQXlCLGFBQWEsRUFBRSxNQUFNLEVBQVMsTUFBTSxRQUFRLENBQUM7QUFDN0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDeEYsT0FBTyxFQUVILGFBQWEsRUFHaEIsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvREFBb0QsQ0FBQztBQUM1RixPQUFPLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxNQUFNLFdBQVcsQ0FBQzs7Ozs7O0FBRTNDLE1BQ2EsaUJBQWtCLFNBQVEsa0JBQWtCO0lBVXJELFlBQ2MsU0FBd0IsRUFDeEIsYUFBZ0MsRUFDaEMsS0FBd0IsRUFDeEIsWUFBc0M7UUFFaEQsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFMaEMsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQTBCO1FBYnBELG1CQUFjLEdBQWEsRUFBRSxDQUFDO1FBQzlCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUViLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBRTFCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBU2hDLENBQUM7SUFFRCxRQUFRO1FBRUosS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpCLE1BQU0sUUFBUSxHQUFHLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsSUFBSSxJQUFJLENBQUM7UUFDekQsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBaUIsRUFBRSxFQUFFO2dCQUN4RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRW5DLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUVyQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ0osT0FBTztTQUVWO1FBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQztRQUN6RCxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQXdCLEVBQUUsRUFBRTtnQkFFckUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRXJCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDUDtRQUVELElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BCO0lBRUwsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQzVGLE9BQU8sWUFBWSxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRVMsb0JBQW9CLENBQUMsT0FBaUI7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVTLHlCQUF5QixDQUFDLFVBQWlDO1FBRWpFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBdUIsQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMxRixNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFzQixDQUFDO1lBRS9FLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLE9BQU8sRUFBQyxDQUFDO2FBQ3REO1NBQ0o7UUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVTLGVBQWU7UUFDckIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQ2xDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsT0FBTzthQUNWO1lBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDN0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdkQ7WUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRVMsaUJBQWlCLENBQUMsVUFBaUM7UUFFekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBRXZDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO2dCQUNyRSxPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDZCxLQUFLLEVBQUUsR0FBRztnQkFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7YUFDOUIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQztJQUVTLG9CQUFvQjtRQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQztJQUMzQyxDQUFDO0lBRVMsU0FBUztRQUVmLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLE9BQU87U0FDVjtRQUVELElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDdEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsT0FBTztTQUNWO1FBRUQsSUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDdkQsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFUyxjQUFjO1FBQ3BCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUM7UUFDaEYsSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztnQkFDckIsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVTthQUN6QixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRDs7Ozs7U0FLSztJQUNLLGVBQWU7UUFFckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVyQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUM7UUFDakQsSUFBSSxPQUFPLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDaEMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDckIsS0FBSyxFQUFFLFVBQVU7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQywwQkFBMEIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRVMsMEJBQTBCLENBQUMsVUFBa0I7UUFFbkQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7WUFDakMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUVsRDthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFUyx5QkFBeUI7UUFFL0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBcUIsQ0FBQztRQUNsRixNQUFNLE9BQU8sR0FBRyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDO1FBQzVELE1BQU0sYUFBYSxHQUFHLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEUsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDO1FBRTNELElBQUksT0FBTyxJQUFJLGFBQWEsSUFBSSxNQUFNLEVBQUU7WUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsTUFBTSxVQUFVLEdBQVUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2hELElBQUksVUFBVSxFQUFFO2dCQUNaLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNsRDtTQUNKO0lBQ0wsQ0FBQztJQUVTLHVCQUF1QixDQUFDLFVBQWlDO1FBRS9ELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXhFLElBQUksVUFBVSxFQUFFO1lBRVosTUFBTSxlQUFlLEdBQXNCLFVBQVUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBc0IsQ0FBQztZQUUxRyxJQUFJLGVBQWUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBRTlELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRXJGLElBQUksWUFBWSxHQUFhLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7b0JBQzVDLFlBQVksR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO2lCQUN2QztxQkFBTTtvQkFDSCxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdkM7Z0JBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBRXhELElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2lCQUNwQzthQUVKO1NBQ0o7SUFDTCxDQUFDO0lBRVMscUJBQXFCLENBQUMsTUFBZ0I7UUFFNUMsSUFBSSxlQUFlLEdBQWEsRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQzNCLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM1QixPQUFPO2FBQ1Y7WUFDRCxlQUFlLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLGVBQWUsQ0FBQztJQUMzQixDQUFDO0lBRVMsMkJBQTJCLENBQUMsYUFBZ0MsRUFBRSxZQUFzQjtRQUMxRixNQUFNLGFBQWEsR0FBZ0MsRUFBRSxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUNwQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUNqRCxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBRVMsNkJBQTZCLENBQUMsVUFBaUI7UUFDckQsSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFFbEUsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7b0JBQzVCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNyQjtnQkFFRCxpQ0FBaUM7Z0JBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztnQkFFakMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDUDtJQUNMLENBQUM7SUFFUyx5QkFBeUI7UUFDL0IsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFEO0lBQ0wsQ0FBQztJQUVTLG9CQUFvQixDQUFDLEtBQWE7UUFDeEMsTUFBTSxNQUFNLEdBQVcsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQztRQUU5QyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLE9BQU8sTUFBTSxDQUFDO1NBQ2pCO1FBQ0QsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEYsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBRTVCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakUsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEIsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFDRCxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBTyxVQUFVLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVqRyxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO2tGQXpVUSxpQkFBaUI7b0VBQWpCLGlCQUFpQjs7U0FBakIsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FEN0IsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtCYXNlRmllbGRDb21wb25lbnR9IGZyb20gJy4vYmFzZS1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7RmllbGQsIEZpZWxkRGVmaW5pdGlvbiwgaXNFbXB0eVN0cmluZywgaXNWb2lkLCBPcHRpb259IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICAgIExhbmd1YWdlTGlzdFN0cmluZ01hcCxcbiAgICBMYW5ndWFnZVN0b3JlLFxuICAgIExhbmd1YWdlU3RyaW5nTWFwLFxuICAgIExhbmd1YWdlU3RyaW5nc1xufSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5pbXBvcnQge2lzTnVsbCwgaXNPYmplY3R9IGZyb20gXCJsb2Rhc2gtZXNcIjtcblxuQENvbXBvbmVudCh7dGVtcGxhdGU6ICcnfSlcbmV4cG9ydCBjbGFzcyBCYXNlRW51bUNvbXBvbmVudCBleHRlbmRzIEJhc2VGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBzZWxlY3RlZFZhbHVlczogT3B0aW9uW10gPSBbXTtcbiAgICB2YWx1ZUxhYmVsID0gJyc7XG4gICAgb3B0aW9uc01hcDogTGFuZ3VhZ2VTdHJpbmdNYXA7XG4gICAgb3B0aW9uczogT3B0aW9uW10gPSBbXTtcbiAgICBsYWJlbHM6IExhbmd1YWdlU3RyaW5nTWFwO1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBtYXBwZWRPcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IE9wdGlvbltdIH07XG4gICAgcHJvdGVjdGVkIGlzRHluYW1pY0VudW0gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VzOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcih0eXBlRm9ybWF0dGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMkID0gdGhpcz8uZmllbGQ/Lm1ldGFkYXRhPy5vcHRpb25zJCA/PyBudWxsO1xuICAgICAgICBpZiAob3B0aW9ucyQpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZmllbGQubWV0YWRhdGEub3B0aW9ucyQuc3Vic2NyaWJlKChvcHRpb25zOiBPcHRpb25bXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRQcm92aWRlZE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmluaXRWYWx1ZSgpO1xuXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzPy5maWVsZD8uZGVmaW5pdGlvbj8ub3B0aW9ucyA/PyBudWxsO1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5sYW5ndWFnZXMudm0kLnN1YnNjcmliZSgoc3RyaW5nczogTGFuZ3VhZ2VTdHJpbmdzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkQXBwU3RyaW5nTGlzdE9wdGlvbnMoc3RyaW5ncy5hcHBMaXN0U3RyaW5ncyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VmFsdWUoKTtcblxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRpb25zICYmICFvcHRpb25zJCkge1xuICAgICAgICAgICAgdGhpcy5pbml0VmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNEeW5hbWljRW51bSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5vcHRpb25zTWFwID0ge307XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgICB9XG5cbiAgICBnZXRJbnZhbGlkQ2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZmllbGQuZm9ybUNvbnRyb2wgJiYgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5pbnZhbGlkICYmIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wudG91Y2hlZCkge1xuICAgICAgICAgICAgcmV0dXJuICdpcy1pbnZhbGlkJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkUHJvdmlkZWRPcHRpb25zKG9wdGlvbnM6IE9wdGlvbltdKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMub3B0aW9uc01hcCA9IHt9O1xuXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zTWFwW29wdGlvbi52YWx1ZV0gPSBvcHRpb24ubGFiZWw7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkQXBwU3RyaW5nTGlzdE9wdGlvbnMoYXBwU3RyaW5nczogTGFuZ3VhZ2VMaXN0U3RyaW5nTWFwKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zTWFwID0ge30gYXMgTGFuZ3VhZ2VTdHJpbmdNYXA7XG4gICAgICAgIHRoaXMuYWRkRXh0cmFPcHRpb25zKCk7XG5cbiAgICAgICAgaWYgKGFwcFN0cmluZ3MgJiYgdGhpcy5maWVsZC5kZWZpbml0aW9uLm9wdGlvbnMgJiYgYXBwU3RyaW5nc1t0aGlzLmZpZWxkLmRlZmluaXRpb24ub3B0aW9uc10pIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBhcHBTdHJpbmdzW3RoaXMuZmllbGQuZGVmaW5pdGlvbi5vcHRpb25zXSBhcyBMYW5ndWFnZVN0cmluZ01hcDtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zTWFwID0gey4uLnRoaXMub3B0aW9uc01hcCwgLi4ub3B0aW9uc307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1aWxkT3B0aW9uc0FycmF5KGFwcFN0cmluZ3MpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRFeHRyYU9wdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGV4dHJhT3B0aW9ucyA9ICh0aGlzLmZpZWxkLm1ldGFkYXRhICYmIHRoaXMuZmllbGQubWV0YWRhdGEuZXh0cmFPcHRpb25zKSB8fCBbXTtcblxuICAgICAgICBleHRyYU9wdGlvbnMuZm9yRWFjaCgoaXRlbTogT3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNWb2lkKGl0ZW0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBpdGVtLmxhYmVsIHx8ICcnO1xuICAgICAgICAgICAgaWYgKGl0ZW0ubGFiZWxLZXkpIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IHRoaXMubGFuZ3VhZ2VzLmdldEZpZWxkTGFiZWwoaXRlbS5sYWJlbEtleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9uc01hcFtpdGVtLnZhbHVlXSA9IGxhYmVsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRPcHRpb25zQXJyYXkoYXBwU3RyaW5nczogTGFuZ3VhZ2VMaXN0U3RyaW5nTWFwKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMub3B0aW9uc01hcCkuZm9yRWFjaChrZXkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoaXNFbXB0eVN0cmluZyh0aGlzLm9wdGlvbnNNYXBba2V5XSkgJiYgIXRoaXMuYWRkRW1wdHlTdHJpbmdPcHRpb24oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBrZXksXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMub3B0aW9uc01hcFtrZXldXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEeW5hbWljRW51bSkge1xuICAgICAgICAgICAgdGhpcy5idWlsZER5bmFtaWNFbnVtT3B0aW9ucyhhcHBTdHJpbmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRFbXB0eVN0cmluZ09wdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQudHlwZSAhPT0gJ211bHRpZW51bSc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRWYWx1ZSgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMuZmllbGQuY3JpdGVyaWEpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFZhbHVlTGFiZWwoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZC52YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zTWFwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9uc01hcFt0aGlzLmZpZWxkLnZhbHVlXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdFZhbHVlTGFiZWwoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdFZhbHVlTGFiZWwoKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSB0aGlzLmZpZWxkLnZhbHVlIHx8IHRoaXMuZmllbGQuY3JpdGVyaWE/LnRhcmdldCB8fCB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChmaWVsZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVMYWJlbCA9IHRoaXMub3B0aW9uc01hcFtmaWVsZFZhbHVlXTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkVmFsdWUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMudmFsdWVMYWJlbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgSW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIGVudW1cbiAgICAgKlxuICAgICAqICBAcmV0dXJucyB7dm9pZH1cbiAgICAgKiAgQGRlc2NyaXB0aW9uIHNldCBkZWZhdWx0IGVudW0gdmFsdWUsIGlmIGRlZmluZWQgaW4gdmFyZGVmc1xuICAgICAqICovXG4gICAgcHJvdGVjdGVkIGluaXRFbnVtRGVmYXVsdCgpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIWlzRW1wdHlTdHJpbmcodGhpcy5yZWNvcmQ/LmlkKSkge1xuICAgICAgICAgICAgdGhpcy5maWVsZD8uZm9ybUNvbnRyb2wuc2V0VmFsdWUoJycpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVmYXVsdFZhbCA9IHRoaXMuZmllbGQ/LmRlZmluaXRpb24/LmRlZmF1bHQ7XG4gICAgICAgIGlmICh0eXBlb2YgZGVmYXVsdFZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGRlZmF1bHRWYWwgPSBkZWZhdWx0VmFsLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlZmF1bHRWYWwpIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMucHVzaCh7XG4gICAgICAgICAgICB2YWx1ZTogZGVmYXVsdFZhbCxcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLm9wdGlvbnNNYXBbZGVmYXVsdFZhbF1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW5pdEVudW1EZWZhdWx0RmllbGRWYWx1ZXMoZGVmYXVsdFZhbCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRFbnVtRGVmYXVsdEZpZWxkVmFsdWVzKGRlZmF1bHRWYWw6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkLnR5cGUgPT09ICdtdWx0aWVudW0nKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWVzID0gdGhpcy5zZWxlY3RlZFZhbHVlcy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLnZhbHVlTGlzdCA9IGRlZmF1bHRWYWx1ZXM7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKGRlZmF1bHRWYWx1ZXMpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLnZhbHVlID0gZGVmYXVsdFZhbDtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZGVmYXVsdFZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjaGVja0FuZEluaXRBc0R5bmFtaWNFbnVtKCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSAodGhpcy5maWVsZCAmJiB0aGlzLmZpZWxkLmRlZmluaXRpb24pIHx8IHt9IGFzIEZpZWxkRGVmaW5pdGlvbjtcbiAgICAgICAgY29uc3QgZHluYW1pYyA9IChkZWZpbml0aW9uICYmIGRlZmluaXRpb24uZHluYW1pYykgfHwgZmFsc2U7XG4gICAgICAgIGNvbnN0IHBhcmVudEVudW1LZXkgPSAoZGVmaW5pdGlvbiAmJiBkZWZpbml0aW9uLnBhcmVudGVudW0pIHx8ICcnO1xuICAgICAgICBjb25zdCBmaWVsZHMgPSAodGhpcy5yZWNvcmQgJiYgdGhpcy5yZWNvcmQuZmllbGRzKSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChkeW5hbWljICYmIHBhcmVudEVudW1LZXkgJiYgZmllbGRzKSB7XG4gICAgICAgICAgICB0aGlzLmlzRHluYW1pY0VudW0gPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50RW51bTogRmllbGQgPSBmaWVsZHNbcGFyZW50RW51bUtleV07XG4gICAgICAgICAgICBpZiAocGFyZW50RW51bSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlVG9QYXJlbnRWYWx1ZUNoYW5nZXMocGFyZW50RW51bSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGREeW5hbWljRW51bU9wdGlvbnMoYXBwU3RyaW5nczogTGFuZ3VhZ2VMaXN0U3RyaW5nTWFwKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgcGFyZW50RW51bSA9IHRoaXMucmVjb3JkLmZpZWxkc1t0aGlzLmZpZWxkLmRlZmluaXRpb24ucGFyZW50ZW51bV07XG5cbiAgICAgICAgaWYgKHBhcmVudEVudW0pIHtcblxuICAgICAgICAgICAgY29uc3QgcGFyZW50T3B0aW9uTWFwOiBMYW5ndWFnZVN0cmluZ01hcCA9IGFwcFN0cmluZ3NbcGFyZW50RW51bS5kZWZpbml0aW9uLm9wdGlvbnNdIGFzIExhbmd1YWdlU3RyaW5nTWFwO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50T3B0aW9uTWFwICYmIE9iamVjdC5rZXlzKHBhcmVudE9wdGlvbk1hcCkubGVuZ3RoICE9PSAwKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1hcHBlZE9wdGlvbnMgPSB0aGlzLmNyZWF0ZVBhcmVudENoaWxkT3B0aW9uc01hcChwYXJlbnRPcHRpb25NYXAsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50VmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRFbnVtLmRlZmluaXRpb24udHlwZSA9PT0gJ211bHRpZW51bScpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VmFsdWVzID0gcGFyZW50RW51bS52YWx1ZUxpc3Q7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VmFsdWVzLnB1c2gocGFyZW50RW51bS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuZmlsdGVyTWF0Y2hpbmdPcHRpb25zKHBhcmVudFZhbHVlcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFyZW50VmFsdWVzICYmIHBhcmVudFZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZVRvQXZhaWxhYmxlT3B0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZmlsdGVyTWF0Y2hpbmdPcHRpb25zKHZhbHVlczogc3RyaW5nW10pOiBPcHRpb25bXSB7XG5cbiAgICAgICAgbGV0IGZpbHRlcmVkT3B0aW9uczogT3B0aW9uW10gPSBbXTtcblxuICAgICAgICBpZiAoIXZhbHVlcyB8fCAhdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1hcHBlZE9wdGlvbnNbdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zID0gZmlsdGVyZWRPcHRpb25zLmNvbmNhdChbLi4udGhpcy5tYXBwZWRPcHRpb25zW3ZhbHVlXV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmlsdGVyZWRPcHRpb25zO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVQYXJlbnRDaGlsZE9wdGlvbnNNYXAocGFyZW50T3B0aW9uczogTGFuZ3VhZ2VTdHJpbmdNYXAsIGNoaWxkT3B0aW9uczogT3B0aW9uW10pOiB7IFtrZXk6IHN0cmluZ106IE9wdGlvbltdIH0ge1xuICAgICAgICBjb25zdCBtYXBwZWRPcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IE9wdGlvbltdIH0gPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyZW50T3B0aW9ucykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgbWFwcGVkT3B0aW9uc1trZXldID0gY2hpbGRPcHRpb25zLmZpbHRlcihcbiAgICAgICAgICAgICAgICBvcHRpb24gPT4gU3RyaW5nKG9wdGlvbi52YWx1ZSkuc3RhcnRzV2l0aChrZXkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1hcHBlZE9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN1YnNjcmliZVRvUGFyZW50VmFsdWVDaGFuZ2VzKHBhcmVudEVudW06IEZpZWxkKTogdm9pZCB7XG4gICAgICAgIGlmIChwYXJlbnRFbnVtLmZvcm1Db250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChwYXJlbnRFbnVtLmZvcm1Db250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWVzID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWVzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZWJ1aWxkIGF2YWlsYWJsZSBlbnVtIG9wdGlvbnNcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmZpbHRlck1hdGNoaW5nT3B0aW9ucyh2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVUb0F2YWlsYWJsZU9wdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VmFsdWUoKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRWYWx1ZVRvQXZhaWxhYmxlT3B0aW9uKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXM/Lm9wdGlvbnM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5maWVsZC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5zb21lKG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHRoaXMuZmllbGQudmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLnZhbHVlID0gdGhpcy5vcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLm9wdGlvbnNbMF0udmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkT3B0aW9uRnJvbVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBPcHRpb24ge1xuICAgICAgICBjb25zdCBvcHRpb246IE9wdGlvbiA9IHt2YWx1ZTogJycsIGxhYmVsOiAnJ307XG5cbiAgICAgICAgaWYgKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLnZhbHVlID0gKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZSkudHJpbSgpO1xuICAgICAgICBvcHRpb24ubGFiZWwgPSBvcHRpb24udmFsdWU7XG5cbiAgICAgICAgY29uc3QgdmFsdWVMYWJlbCA9IHRoaXMub3B0aW9uc01hcFtvcHRpb24udmFsdWVdID8/IG9wdGlvbi5sYWJlbDtcbiAgICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlTGFiZWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbi5sYWJlbCA9ICh0eXBlb2YgdmFsdWVMYWJlbCAhPT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZUxhYmVsKSA6IHZhbHVlTGFiZWwpLnRyaW0oKTtcblxuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cblxufVxuIl19