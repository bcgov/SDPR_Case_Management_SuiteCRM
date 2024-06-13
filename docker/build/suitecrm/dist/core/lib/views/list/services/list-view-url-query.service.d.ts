import { FieldDefinitionMap, SearchCriteria, SearchCriteriaFieldFilter } from 'common';
import { Params } from '@angular/router';
import { SavedFilter } from '../../../store/saved-filters/saved-filter.model';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { DataTypeFormatter } from '../../../services/formatters/data-type.formatter.service';
import * as i0 from "@angular/core";
type GenericMap<T> = {
    [key: string]: T;
};
type NestedGenericMap<T> = GenericMap<GenericMap<T>>;
export declare class ListViewUrlQueryService {
    protected systemConfig: SystemConfigStore;
    protected metadataStore: MetadataStore;
    protected dataTypeFormatter: DataTypeFormatter;
    /**
     * Array of allowed properties to be set to the searchCriteriaFieldFilter from url_query_filter_mapping
     */
    private allowedProperties;
    /**
     * An array containing properties that can be converted into dbFormat.
     */
    private convertableProperties;
    constructor(systemConfig: SystemConfigStore, metadataStore: MetadataStore, dataTypeFormatter: DataTypeFormatter);
    /**
     * Builds a URL query-based filter.
     *
     * @param {string} module - The module name.
     * @param {SavedFilter} defaultFilter - The default filter.
     * @param {Params} rawQueryParams - The raw query parameters.
     * @returns {SavedFilter|null} - The built URL query-based filter, or null if no filter criteria are found.
     */
    buildUrlQueryBasedFilter(module: string, defaultFilter: SavedFilter, rawQueryParams: Params): SavedFilter | null;
    /**
     * Generates the query filter criteria based on the provided field definitions map, module, and query parameters.
     *
     * @param {FieldDefinitionMap} fieldDefinitionMap - The field definition map.
     * @param {string} module - The module name.
     * @param {Params} queryParams - The query parameters.
     * @returns {SearchCriteria} - The generated search criteria.
     * @protected
     */
    protected getQueryFilterCriteria(fieldDefinitionMap: FieldDefinitionMap, module: string, queryParams: Params): SearchCriteria;
    /**
     * Builds a search criteria field filter object based on the provided parameters.
     *
     * @param {string} fieldFilterName - The name of the field filter.
     * @param {string} fieldFilterFieldType - The type of the field filter.
     * @param {Params} queryParams - The query parameters.
     * @param {string} fieldFilterKey - The key of the field filter in the query parameters.
     * @param {string} queryFilterOperatorKeyTemplate - The template for the query filter operator key.
     * @param {NestedGenericMap<string>} queryFilterOperatorParamsMap - The map of query filter operator keys to their respective parameter maps.
     * @returns {SearchCriteriaFieldFilter | null} The built search criteria field filter object.
     * @protected
     */
    protected buildSearchCriteriaFieldFilter(fieldFilterName: string, fieldFilterFieldType: string, queryParams: Params, fieldFilterKey: string, queryFilterOperatorKeyTemplate: string, queryFilterOperatorParamsMap: NestedGenericMap<string>): SearchCriteriaFieldFilter | null;
    /**
     * Retrieves the value of a query parameter based on the provided queryParamKeyTemplate,
     * fieldFilterKey, and queryParams.
     *
     * @param {string} queryParamKeyTemplate - The template for the query parameter key, with "{field}" as a placeholder for fieldFilterKey.
     * @param {string} fieldFilterKey - The field filter key used to replace the "{field}" placeholder in queryParamKeyTemplate.
     * @param {Params} queryParams - The object containing the query parameters.
     * @param {object} options - Optional parameters to customize the behavior of the method.
     * @param {boolean} options.forceSingleString - Flag indicating whether the result should always be a single string value.
     * @returns {string|string[]} - The value of the query parameter. If forceSingleString is false, it will be either a string or an array of strings.
     * @protected
     */
    protected getQueryParamValue(queryParamKeyTemplate: string, fieldFilterKey: string, queryParams: Params, { forceSingleString }?: {
        forceSingleString?: boolean;
    }): string | string[] | null;
    /**
     * Cleans the query parameter key by removing the '[]' brackets if present.
     *
     * @returns {string} - The cleaned query parameter key.
     * @protected
     * @param queryParam
     */
    protected cleanQueryParam(queryParam: [string, string | string[]]): [string, string | string[]];
    /**
     * Checks if given fieldFilterValue matches MONTH_YEAR_REGEX or yearRegex and returns
     * overridesSearchCriteriaFieldFilter if true, else returns searchCriteriaFieldFilter.
     *
     * @param {SearchCriteriaFieldFilter} searchCriteriaFieldFilter - The search criteria field filter.
     * @param {string} fieldFilterValue - The field filter value.
     * @param {Object} options - The options object.
     * @param {string} [options.operator='='] - The range option.
     * @param {string} [options.key='target'] - The key option.
     * @returns {SearchCriteriaFieldFilter} - The updated search criteria field filter.
     * @protected
     */
    protected checkDateSpecialsOrReturn(searchCriteriaFieldFilter: SearchCriteriaFieldFilter, fieldFilterValue: string, { operator, key }?: {
        operator?: string;
        key?: string;
    }): SearchCriteriaFieldFilter;
    /**
     * Overrides the search criteria field filter based on the provided parameters.
     *
     * @param {SearchCriteriaFieldFilter} searchCriteriaFieldFilter - The original search criteria field filter.
     * @param {string} fieldFilterValue - The value of the field filter.
     * @param {Object} options - The options for overriding the field filter.
     * @param {string} options.type - The type of the field filter.
     * @param {string} [options.operator='equal'] - The operator for the field filter.
     * @param {string} [options.key='target'] - The key for the field filter.
     * @protected
     * @returns {SearchCriteriaFieldFilter} - The overridden search criteria field filter.
     */
    protected overridesSearchCriteriaFieldFilter(searchCriteriaFieldFilter: SearchCriteriaFieldFilter, fieldFilterValue: string, { type, operator, key }: {
        type: string;
        operator?: string;
        key?: string;
    }): SearchCriteriaFieldFilter;
    /**
     * Converts the given value to the internal format based on the specified type.
     *
     * @param {string} type - The type of value to convert to.
     * @param {string} value - The value to convert.
     * @return {string} - The converted value in the internal format.
     * @protected
     */
    protected toInternalFormat(type: string, value: string): string;
    /**
     * Transforms the given value from url to a value understandable by backend.
     *
     * @param {any} value - The value to be transformed.
     * @protected
     * @return {string} The transformed value.
     */
    protected transform(value: any): string;
    protected checkForMissingOperator(searchCriteriaFieldFilter: SearchCriteriaFieldFilter): SearchCriteriaFieldFilter;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewUrlQueryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListViewUrlQueryService>;
}
export {};
