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
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ModuleNameMapper } from '../../services/navigation/module-name-mapper/module-name-mapper.service';
import { BaseFieldComponent } from './base-field.component';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { LanguageStore } from '../../store/language/language.store';
import { RelateService } from '../../services/record/relate/relate.service';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../services/formatters/data-type.formatter.service";
import * as i3 from "../../services/record/relate/relate.service";
import * as i4 from "../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i5 from "../field-logic/field-logic.manager";
import * as i6 from "../field-logic-display/field-logic-display.manager";
class BaseRelateComponent extends BaseFieldComponent {
    constructor(languages, typeFormatter, relateService, moduleNameMapper, logic, logicDisplay) {
        super(typeFormatter, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.relateService = relateService;
        this.moduleNameMapper = moduleNameMapper;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.selectedValues = [];
        this.options = [];
        this.status = '';
        this.initModule = '';
        this.search = (text) => {
            if (text === '') {
                return of([]);
            }
            this.status = 'searching';
            return this.relateService.search(text, this.getRelateFieldName()).pipe(tap(() => this.status = 'found'), catchError(() => {
                this.status = 'error';
                return of([]);
            }), map(records => {
                if (!records || records.length < 1) {
                    this.status = 'not-found';
                    return [];
                }
                const flatRecords = [];
                records.forEach((record) => {
                    if (record && record.attributes) {
                        flatRecords.push(record.attributes);
                    }
                });
                this.status = '';
                return flatRecords;
            }));
        };
    }
    get module() {
        if (!this.record || !this.record.module) {
            return null;
        }
        return this.record.module;
    }
    ngOnInit() {
        super.ngOnInit();
        this.init();
        this.subs.push(this.field.valueChanges$.subscribe(() => {
            this.onModuleChange();
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    onModuleChange() {
        const currentModule = this.initModule;
        const newModule = this?.field?.definition?.module ?? '';
        if (currentModule === newModule) {
            return;
        }
        this.initModule = newModule;
        if (currentModule === '' && currentModule !== newModule) {
            this.init();
        }
        if (newModule === '') {
            this.status = 'no-module';
        }
        else {
            this.init();
            this.status = '';
            this.selectedValues = [];
            this.options = [];
        }
    }
    getRelateFieldName() {
        return (this.field && this.field.definition && this.field.definition.rname) || 'name';
    }
    getRelateIdField() {
        return (this.field && this.field.definition && this.field.definition.id_name) || '';
    }
    getRelatedModule() {
        const legacyName = (this.field && this.field.definition && this.field.definition.module) || '';
        if (!legacyName) {
            return '';
        }
        return this.moduleNameMapper.toFrontend(legacyName);
    }
    getMessage() {
        const messages = {
            searching: 'LBL_SEARCHING',
            'not-found': 'LBL_NOT_FOUND',
            error: 'LBL_SEARCH_ERROR',
            found: 'LBL_FOUND',
            'no-module': 'LBL_NO_MODULE_SELECTED'
        };
        if (messages[this.status]) {
            return messages[this.status];
        }
        return '';
    }
    getInvalidClass() {
        if (this.field.formControl && this.field.formControl.invalid && this.field.formControl.touched) {
            return 'is-invalid';
        }
        if (this.hasSearchError()) {
            return 'is-invalid';
        }
        return '';
    }
    hasSearchError() {
        return this.status === 'error' || this.status === 'not-found';
    }
    resetStatus() {
        this.status = '';
    }
    getPlaceholderLabel() {
        return this.languages.getAppString('LBL_TYPE_TO_SEARCH') || '';
    }
    init() {
        this.initModule = this?.field?.definition?.module ?? '';
        if (this.relateService) {
            this.relateService.init(this.getRelatedModule());
        }
    }
    buildRelate(id, relateValue) {
        const relate = { id };
        if (this.getRelateFieldName()) {
            relate[this.getRelateFieldName()] = relateValue;
        }
        return relate;
    }
    static { this.ɵfac = function BaseRelateComponent_Factory(t) { return new (t || BaseRelateComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.RelateService), i0.ɵɵdirectiveInject(i4.ModuleNameMapper), i0.ɵɵdirectiveInject(i5.FieldLogicManager), i0.ɵɵdirectiveInject(i6.FieldLogicDisplayManager)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseRelateComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BaseRelateComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
export { BaseRelateComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseRelateComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.RelateService }, { type: i4.ModuleNameMapper }, { type: i5.FieldLogicManager }, { type: i6.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1yZWxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9iYXNlL2Jhc2UtcmVsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFhLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5RUFBeUUsQ0FBQztBQUN6RyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7OztBQUU1RixNQUNhLG1CQUFvQixTQUFRLGtCQUFrQjtJQU92RCxZQUNjLFNBQXdCLEVBQ3hCLGFBQWdDLEVBQ2hDLGFBQTRCLEVBQzVCLGdCQUFrQyxFQUNsQyxLQUF3QixFQUN4QixZQUFzQztRQUVoRCxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQVBoQyxjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNoQyxrQkFBYSxH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QztJQUVTLFdBQVcsQ0FBQyxFQUFVLEVBQUUsV0FBbUI7UUFDakQsTUFBTSxNQUFNLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQztRQUVwQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQztTQUNuRDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7b0ZBaExRLG1CQUFtQjtvRUFBbkIsbUJBQW1COztTQUFuQixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUQvQixTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0F0dHJpYnV0ZU1hcCwgUmVjb3JkfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge0Jhc2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9iYXNlLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7UmVsYXRlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlbGF0ZS9yZWxhdGUuc2VydmljZSc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5cbkBDb21wb25lbnQoe3RlbXBsYXRlOiAnJ30pXG5leHBvcnQgY2xhc3MgQmFzZVJlbGF0ZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBzZWxlY3RlZFZhbHVlczogQXR0cmlidXRlTWFwW10gPSBbXTtcbiAgICBvcHRpb25zOiBBdHRyaWJ1dGVNYXBbXSA9IFtdO1xuXG4gICAgc3RhdHVzOiAnJyB8ICdzZWFyY2hpbmcnIHwgJ25vdC1mb3VuZCcgfCAnZXJyb3InIHwgJ2ZvdW5kJyB8ICduby1tb2R1bGUnID0gJyc7XG4gICAgaW5pdE1vZHVsZSA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZXM6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIHJlbGF0ZVNlcnZpY2U6IFJlbGF0ZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIodHlwZUZvcm1hdHRlciwgbG9naWMsIGxvZ2ljRGlzcGxheSk7XG4gICAgfVxuXG4gICAgZ2V0IG1vZHVsZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRoaXMucmVjb3JkIHx8ICF0aGlzLnJlY29yZC5tb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkLm1vZHVsZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZmllbGQudmFsdWVDaGFuZ2VzJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbk1vZHVsZUNoYW5nZSgpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBvbk1vZHVsZUNoYW5nZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY3VycmVudE1vZHVsZSA9IHRoaXMuaW5pdE1vZHVsZTtcbiAgICAgICAgY29uc3QgbmV3TW9kdWxlID0gdGhpcz8uZmllbGQ/LmRlZmluaXRpb24/Lm1vZHVsZSA/PyAnJztcblxuICAgICAgICBpZiAoY3VycmVudE1vZHVsZSA9PT0gbmV3TW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXRNb2R1bGUgPSBuZXdNb2R1bGU7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRNb2R1bGUgPT09ICcnICYmIGN1cnJlbnRNb2R1bGUgIT09IG5ld01vZHVsZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3TW9kdWxlID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnbm8tbW9kdWxlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2ggPSAodGV4dDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+ID0+IHtcblxuICAgICAgICBpZih0ZXh0ID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdHVzID0gJ3NlYXJjaGluZyc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRlU2VydmljZS5zZWFyY2godGV4dCwgdGhpcy5nZXRSZWxhdGVGaWVsZE5hbWUoKSkucGlwZShcbiAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLnN0YXR1cyA9ICdmb3VuZCcpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnZXJyb3InO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1hcChyZWNvcmRzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlY29yZHMgfHwgcmVjb3Jkcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ25vdC1mb3VuZCc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmbGF0UmVjb3JkczogQXR0cmlidXRlTWFwW10gPSBbXTtcblxuICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaCgocmVjb3JkOiBSZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZCAmJiByZWNvcmQuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdFJlY29yZHMucHVzaChyZWNvcmQuYXR0cmlidXRlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmxhdFJlY29yZHM7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgZ2V0UmVsYXRlRmllbGROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAodGhpcy5maWVsZCAmJiB0aGlzLmZpZWxkLmRlZmluaXRpb24gJiYgdGhpcy5maWVsZC5kZWZpbml0aW9uLnJuYW1lKSB8fCAnbmFtZSc7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRlSWRGaWVsZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuZmllbGQgJiYgdGhpcy5maWVsZC5kZWZpbml0aW9uICYmIHRoaXMuZmllbGQuZGVmaW5pdGlvbi5pZF9uYW1lKSB8fCAnJztcbiAgICB9XG5cbiAgICBnZXRSZWxhdGVkTW9kdWxlKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGxlZ2FjeU5hbWUgPSAodGhpcy5maWVsZCAmJiB0aGlzLmZpZWxkLmRlZmluaXRpb24gJiYgdGhpcy5maWVsZC5kZWZpbml0aW9uLm1vZHVsZSkgfHwgJyc7XG4gICAgICAgIGlmICghbGVnYWN5TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlTmFtZU1hcHBlci50b0Zyb250ZW5kKGxlZ2FjeU5hbWUpO1xuICAgIH1cblxuICAgIGdldE1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSB7XG4gICAgICAgICAgICBzZWFyY2hpbmc6ICdMQkxfU0VBUkNISU5HJyxcbiAgICAgICAgICAgICdub3QtZm91bmQnOiAnTEJMX05PVF9GT1VORCcsXG4gICAgICAgICAgICBlcnJvcjogJ0xCTF9TRUFSQ0hfRVJST1InLFxuICAgICAgICAgICAgZm91bmQ6ICdMQkxfRk9VTkQnLFxuICAgICAgICAgICAgJ25vLW1vZHVsZSc6ICdMQkxfTk9fTU9EVUxFX1NFTEVDVEVEJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtZXNzYWdlc1t0aGlzLnN0YXR1c10pIHtcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlc1t0aGlzLnN0YXR1c107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZ2V0SW52YWxpZENsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmZpZWxkLmZvcm1Db250cm9sICYmIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuaW52YWxpZCAmJiB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnRvdWNoZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnaXMtaW52YWxpZCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYXNTZWFyY2hFcnJvcigpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2lzLWludmFsaWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGhhc1NlYXJjaEVycm9yKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdlcnJvcicgfHwgdGhpcy5zdGF0dXMgPT09ICdub3QtZm91bmQnO1xuICAgIH1cblxuICAgIHJlc2V0U3RhdHVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXR1cyA9ICcnO1xuICAgIH1cblxuICAgIGdldFBsYWNlaG9sZGVyTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VzLmdldEFwcFN0cmluZygnTEJMX1RZUEVfVE9fU0VBUkNIJykgfHwgJyc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5pbml0TW9kdWxlID0gdGhpcz8uZmllbGQ/LmRlZmluaXRpb24/Lm1vZHVsZSA/PyAnJztcblxuICAgICAgICBpZiAodGhpcy5yZWxhdGVTZXJ2aWNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGF0ZVNlcnZpY2UuaW5pdCh0aGlzLmdldFJlbGF0ZWRNb2R1bGUoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRSZWxhdGUoaWQ6IHN0cmluZywgcmVsYXRlVmFsdWU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGNvbnN0IHJlbGF0ZSA9IHtpZH07XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0UmVsYXRlRmllbGROYW1lKCkpIHtcbiAgICAgICAgICAgIHJlbGF0ZVt0aGlzLmdldFJlbGF0ZUZpZWxkTmFtZSgpXSA9IHJlbGF0ZVZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbGF0ZTtcbiAgICB9XG5cbn1cbiJdfQ==