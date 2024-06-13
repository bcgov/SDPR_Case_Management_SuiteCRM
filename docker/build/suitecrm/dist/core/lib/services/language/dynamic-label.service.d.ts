import { DataTypeFormatter } from '../formatters/data-type.formatter.service';
import { Field, FieldMap, StringMap } from 'common';
import { LanguageStore } from '../../store/language/language.store';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import { UserPreferenceStore } from '../../store/user-preference/user-preference.store';
import * as i0 from "@angular/core";
export declare type TemplateValueFilter = (value: string, filterArguments?: string[]) => string;
export declare type TemplateFieldFilter = (value: Field) => string;
export interface TemplateValueFilterMap {
    [key: string]: TemplateValueFilter;
}
export interface TemplateFieldFilterMap {
    [key: string]: TemplateFieldFilter;
}
export interface DynamicLabelServiceInterface {
    addValuePipe(name: string, processor: TemplateValueFilter): void;
    addFieldPipe(name: string, processor: TemplateFieldFilter): void;
    parse(template: string, context: {
        [key: string]: string;
    }, fields: FieldMap): string;
}
export declare class DynamicLabelService implements DynamicLabelServiceInterface {
    protected typeFormatter: DataTypeFormatter;
    protected language: LanguageStore;
    protected configs: SystemConfigStore;
    protected preferences: UserPreferenceStore;
    protected valuePipes: TemplateValueFilterMap;
    protected fieldPipes: TemplateFieldFilterMap;
    constructor(typeFormatter: DataTypeFormatter, language: LanguageStore, configs: SystemConfigStore, preferences: UserPreferenceStore);
    addValuePipe(name: string, processor: TemplateValueFilter): void;
    addFieldPipe(name: string, processor: TemplateFieldFilter): void;
    parse(template: string, context: StringMap, fields: FieldMap): string;
    protected valueTypeFormat(type: string, value: string): string;
    protected enumFormat(value: string, filterArguments?: string[]): string;
    protected fieldTypeFormat(type: string, field: Field): string;
    protected enumFieldFormat(field: Field): string;
    protected multiEnumFormat(field: Field): string;
    protected getFieldLabel(labelKey: string, module?: string): string;
    protected parseObjectContext(variableName: string, parsedTemplate: string, regexMatch: string, filter: string, filterArguments: string[], getter: (key: string) => any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicLabelService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicLabelService>;
}
