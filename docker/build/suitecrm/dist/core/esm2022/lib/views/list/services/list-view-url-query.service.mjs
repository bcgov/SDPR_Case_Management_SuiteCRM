/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2024 SalesAgility Ltd.
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
import { isArray, isEmpty } from 'lodash-es';
import { DateTime } from 'luxon';
import { isEmptyString } from 'common';
import { Injectable } from '@angular/core';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { DataTypeFormatter } from '../../../services/formatters/data-type.formatter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/system-config/system-config.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
import * as i3 from "../../../services/formatters/data-type.formatter.service";
const MONTH_YEAR_REGEX = new RegExp('^(\\d{4})-(0[1-9]|1[0-2])$');
const MONTH_REGEX = new RegExp('^(\\d{4})$');
class ListViewUrlQueryService {
    constructor(systemConfig, metadataStore, dataTypeFormatter) {
        this.systemConfig = systemConfig;
        this.metadataStore = metadataStore;
        this.dataTypeFormatter = dataTypeFormatter;
        /**
         * Array of allowed properties to be set to the searchCriteriaFieldFilter from url_query_filter_mapping
         */
        this.allowedProperties = [
            'operator',
            'target',
            'values',
            'start',
            'end'
        ];
        /**
         * An array containing properties that can be converted into dbFormat.
         */
        this.convertableProperties = [
            'target',
            'values',
            'start',
            'end'
        ];
    }
    /**
     * Builds a URL query-based filter.
     *
     * @param {string} module - The module name.
     * @param {SavedFilter} defaultFilter - The default filter.
     * @param {Params} rawQueryParams - The raw query parameters.
     * @returns {SavedFilter|null} - The built URL query-based filter, or null if no filter criteria are found.
     */
    buildUrlQueryBasedFilter(module, defaultFilter, rawQueryParams) {
        const filterFieldDefinitions = this.metadataStore.get().recordView.vardefs;
        const queryParams = Object.entries(rawQueryParams)
            .reduce((acc, [queryParamKey, queryParamVal]) => {
            const [cleanQueryParamKey, cleanQueryParamVal] = this.cleanQueryParam([
                queryParamKey,
                queryParamVal
            ]);
            acc[cleanQueryParamKey] = cleanQueryParamVal;
            return acc;
        }, {});
        const filterCriteria = this.getQueryFilterCriteria(filterFieldDefinitions, module, queryParams);
        if (isEmpty(filterCriteria.filters)) {
            return null;
        }
        return {
            key: 'default',
            searchModule: module,
            module: 'saved-search',
            criteria: filterCriteria
        };
    }
    /**
     * Generates the query filter criteria based on the provided field definitions map, module, and query parameters.
     *
     * @param {FieldDefinitionMap} fieldDefinitionMap - The field definition map.
     * @param {string} module - The module name.
     * @param {Params} queryParams - The query parameters.
     * @returns {SearchCriteria} - The generated search criteria.
     * @protected
     */
    getQueryFilterCriteria(fieldDefinitionMap, module, queryParams) {
        const criteria = {
            name: 'default',
            filters: {}
        };
        const queryParamsKeys = Object.keys(queryParams);
        const fieldDefinitions = Object.values(fieldDefinitionMap)
            .filter(({ name }) => queryParamsKeys.some(qPKey => qPKey.includes(name)));
        const listviewUrlQueryFilterMapping = this.systemConfig.getConfigValue('listview_url_query_filter_mapping');
        const listviewUrlQueryFilterMappingEntries = Object.entries(listviewUrlQueryFilterMapping);
        listviewUrlQueryFilterMappingEntries.push(['', {}]);
        let searchType;
        switch (queryParams['searchFormTab']) {
            case 'basic_search':
                searchType = 'basic';
                break;
            case 'advanced_search':
                searchType = 'advanced';
                break;
            default:
                searchType = 'advanced';
        }
        for (const fieldDefinition of fieldDefinitions) {
            const fieldFilterName = fieldDefinition.name;
            const fieldFilterKeys = [
                fieldFilterName,
                `${fieldFilterName}_${searchType}`
            ];
            for (const [queryFilterOperatorKeyTemplate, queryFilterOperatorParamsMap] of listviewUrlQueryFilterMappingEntries) {
                if (!isEmpty(criteria.filters[fieldFilterName])) {
                    break;
                }
                for (const fieldFilterKey of fieldFilterKeys) {
                    if (!isEmpty(criteria.filters[fieldFilterName])) {
                        break;
                    }
                    const searchCriteriaFieldFilter = this.buildSearchCriteriaFieldFilter(fieldFilterName, fieldDefinition.type, queryParams, fieldFilterKey, queryFilterOperatorKeyTemplate, queryFilterOperatorParamsMap);
                    if (isEmpty(searchCriteriaFieldFilter)) {
                        continue;
                    }
                    try {
                        this.convertableProperties.forEach((convertableProperty) => {
                            if (!searchCriteriaFieldFilter[convertableProperty]) {
                                return;
                            }
                            let internalFormatValue;
                            if (isArray(searchCriteriaFieldFilter[convertableProperty])) {
                                internalFormatValue = searchCriteriaFieldFilter[convertableProperty].map(prop => this.toInternalFormat(fieldDefinition.type, prop));
                            }
                            else {
                                internalFormatValue = this.toInternalFormat(fieldDefinition.type, searchCriteriaFieldFilter[convertableProperty]);
                            }
                            searchCriteriaFieldFilter[convertableProperty] = internalFormatValue;
                        });
                    }
                    catch (e) {
                        continue;
                    }
                    criteria.filters[fieldFilterName] = searchCriteriaFieldFilter;
                }
            }
        }
        return criteria;
    }
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
    buildSearchCriteriaFieldFilter(fieldFilterName, fieldFilterFieldType, queryParams, fieldFilterKey, queryFilterOperatorKeyTemplate, queryFilterOperatorParamsMap) {
        const searchCriteriaFieldFilter = {
            field: fieldFilterName,
            fieldType: fieldFilterFieldType,
            operator: '=',
            values: []
        };
        if (isEmpty(queryFilterOperatorKeyTemplate) || isEmpty(queryFilterOperatorParamsMap)) {
            const fieldFilterValue = this.getQueryParamValue(fieldFilterKey, fieldFilterKey, queryParams);
            if (isEmpty(fieldFilterValue) && !isEmptyString(fieldFilterValue)) {
                return null;
            }
            const values = isArray(fieldFilterValue)
                ? fieldFilterValue
                : [fieldFilterValue];
            searchCriteriaFieldFilter.values = values;
            searchCriteriaFieldFilter.target = values[0];
            return this.checkDateSpecialsOrReturn(searchCriteriaFieldFilter, searchCriteriaFieldFilter.target);
        }
        const queryFilterOperatorKey = this.getQueryParamValue(queryFilterOperatorKeyTemplate, fieldFilterKey, queryParams, { forceSingleString: true });
        const queryFilterOperatorParams = (queryFilterOperatorParamsMap[queryFilterOperatorKey] ??
            Object
                .values(queryFilterOperatorParamsMap)
                .reduce((prev, curr) => ({ ...prev, ...curr }), {})
            ?? {});
        if (isEmpty(queryFilterOperatorParams)) {
            return null;
        }
        let returnEmpty = true;
        searchCriteriaFieldFilter.operator = queryFilterOperatorKey;
        Object.entries(queryFilterOperatorParams)
            .filter(([_, searchCriteriaPropertyKey]) => (typeof searchCriteriaPropertyKey === 'string'
            && this.allowedProperties.includes(searchCriteriaPropertyKey)))
            .forEach(([searchCriteriaPropertyValueTemplate, searchCriteriaPropertyKey]) => {
            const rawSearchCriteriaPropertyValue = this.getQueryParamValue(searchCriteriaPropertyValueTemplate, fieldFilterKey, queryParams);
            if (isEmpty(rawSearchCriteriaPropertyValue)) {
                return;
            }
            returnEmpty = false;
            let searchCriteriaPropertyValue = rawSearchCriteriaPropertyValue;
            if (searchCriteriaPropertyKey === 'values') {
                if (!isArray(searchCriteriaPropertyValue)) {
                    searchCriteriaPropertyValue = [searchCriteriaPropertyValue];
                }
                searchCriteriaFieldFilter['target'] = searchCriteriaPropertyValue[0];
            }
            else if (searchCriteriaPropertyKey === 'target') {
                if (isArray(searchCriteriaPropertyValue)) {
                    searchCriteriaPropertyValue = searchCriteriaPropertyValue[0];
                }
                searchCriteriaFieldFilter['values'] = [searchCriteriaPropertyValue];
            }
            searchCriteriaFieldFilter[searchCriteriaPropertyKey] = searchCriteriaPropertyValue;
            if (!isArray(searchCriteriaPropertyValue)) {
                this.checkDateSpecialsOrReturn(searchCriteriaFieldFilter, searchCriteriaPropertyValue, {
                    operator: queryFilterOperatorKey,
                    key: searchCriteriaPropertyKey
                });
            }
        });
        return !returnEmpty ? this.checkForMissingOperator(searchCriteriaFieldFilter) : null;
    }
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
    getQueryParamValue(queryParamKeyTemplate, fieldFilterKey, queryParams, { forceSingleString = false } = {}) {
        const queryParamKey = queryParamKeyTemplate.replace('{field}', fieldFilterKey) ?? '';
        let queryParamValue = queryParams[queryParamKey];
        if (!queryParamValue) {
            return null;
        }
        if (isArray(queryParamValue)) {
            queryParamValue = queryParamValue.map(this.transform);
        }
        else {
            queryParamValue = this.transform(queryParamValue);
        }
        if (forceSingleString && isArray(queryParamValue)) {
            return queryParamValue[0] ?? '';
        }
        return queryParamValue;
    }
    /**
     * Cleans the query parameter key by removing the '[]' brackets if present.
     *
     * @returns {string} - The cleaned query parameter key.
     * @protected
     * @param queryParam
     */
    cleanQueryParam(queryParam) {
        let [queryParamKey, queryParamVal] = queryParam;
        const queryParamKeyReversed = queryParamKey.split('').reverse().join('');
        if (queryParamKeyReversed.indexOf('][') === 0 && typeof queryParamVal === 'string') {
            queryParamKey = queryParamKey.replace('[]', '');
            queryParamVal = queryParamVal.split(',');
        }
        return [queryParamKey, queryParamVal];
    }
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
    checkDateSpecialsOrReturn(searchCriteriaFieldFilter, fieldFilterValue, { operator = '=', key = 'target' } = {}) {
        if (fieldFilterValue.match(MONTH_YEAR_REGEX)) {
            return this.overridesSearchCriteriaFieldFilter(searchCriteriaFieldFilter, fieldFilterValue, { type: 'month', operator, key });
        }
        if (fieldFilterValue.match(MONTH_REGEX)) {
            return this.overridesSearchCriteriaFieldFilter(searchCriteriaFieldFilter, fieldFilterValue, { type: 'year', operator, key });
        }
        return searchCriteriaFieldFilter;
    }
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
    overridesSearchCriteriaFieldFilter(searchCriteriaFieldFilter, fieldFilterValue, { type = '', operator = 'equal', key = 'target' }) {
        let plusObject;
        let fmt;
        switch (type) {
            case 'year':
                plusObject = { year: 1 };
                fmt = 'yyyy';
                break;
            case 'month':
                plusObject = { month: 1 };
                fmt = 'yyyy-MM';
                break;
            default:
                return searchCriteriaFieldFilter;
        }
        const start = DateTime.fromFormat(fieldFilterValue, fmt);
        const end = start.plus(plusObject).minus({ day: 1 });
        if (key !== 'target') {
            switch (key) {
                case 'start':
                    searchCriteriaFieldFilter.start = start.toFormat('yyyy-MM-dd');
                    break;
                case 'end':
                    searchCriteriaFieldFilter.end = end.toFormat('yyyy-MM-dd');
                    break;
            }
            return searchCriteriaFieldFilter;
        }
        searchCriteriaFieldFilter.operator = operator;
        switch (operator) {
            case 'greater_than':
            case 'greater_than_equals':
                searchCriteriaFieldFilter.start = start.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.target = searchCriteriaFieldFilter.start;
                searchCriteriaFieldFilter.values = [searchCriteriaFieldFilter.target];
                break;
            case 'less_than':
            case 'less_than_equals':
                searchCriteriaFieldFilter.end = end.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.target = searchCriteriaFieldFilter.end;
                searchCriteriaFieldFilter.values = [searchCriteriaFieldFilter.target];
                break;
            case 'not_equal':
                searchCriteriaFieldFilter.start = start.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.end = end.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.target = fieldFilterValue;
                searchCriteriaFieldFilter.values = [fieldFilterValue];
                break;
            case 'equal':
            case 'between':
            default:
                searchCriteriaFieldFilter.operator = 'between';
                searchCriteriaFieldFilter.start = start.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.end = end.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.target = '';
                searchCriteriaFieldFilter.values = [];
                break;
        }
        return searchCriteriaFieldFilter;
    }
    /**
     * Converts the given value to the internal format based on the specified type.
     *
     * @param {string} type - The type of value to convert to.
     * @param {string} value - The value to convert.
     * @return {string} - The converted value in the internal format.
     * @protected
     */
    toInternalFormat(type, value) {
        if (value.match(MONTH_REGEX) || value.match(MONTH_YEAR_REGEX)) {
            return value;
        }
        return this.dataTypeFormatter.toInternalFormat(type, value);
    }
    ;
    /**
     * Transforms the given value from url to a value understandable by backend.
     *
     * @param {any} value - The value to be transformed.
     * @protected
     * @return {string} The transformed value.
     */
    transform(value) {
        switch (value) {
            case '':
                return '__SuiteCRMEmptyString__';
            default:
                return value;
        }
    }
    checkForMissingOperator(searchCriteriaFieldFilter) {
        if (!isEmpty(searchCriteriaFieldFilter.start)
            && !isEmpty(searchCriteriaFieldFilter.end)) {
            searchCriteriaFieldFilter.operator = 'between';
        }
        return searchCriteriaFieldFilter;
    }
    static { this.ɵfac = function ListViewUrlQueryService_Factory(t) { return new (t || ListViewUrlQueryService)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.DataTypeFormatter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewUrlQueryService, factory: ListViewUrlQueryService.ɵfac, providedIn: 'root' }); }
}
export { ListViewUrlQueryService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewUrlQueryService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.MetadataStore }, { type: i3.DataTypeFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXVybC1xdWVyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3Qvc2VydmljZXMvbGlzdC12aWV3LXVybC1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ2pDLE9BQU8sRUFFSCxhQUFhLEVBR2hCLE1BQU0sUUFBUSxDQUFDO0FBQ2hCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDOzs7OztBQU03RixNQUFNLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDbEUsTUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFN0MsTUFDYSx1QkFBdUI7SUF1QmhDLFlBQ2MsWUFBK0IsRUFDL0IsYUFBNEIsRUFDNUIsaUJBQW9DO1FBRnBDLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUMvQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBeEJsRDs7V0FFRztRQUNLLHNCQUFpQixHQUFHO1lBQ3hCLFVBQVU7WUFDVixRQUFRO1lBQ1IsUUFBUTtZQUNSLE9BQU87WUFDUCxLQUFLO1NBQ1IsQ0FBQztRQUVGOztXQUVH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M0IsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLEVBQUU7Z0JBQ0gsT0FBTyx5QkFBeUIsQ0FBQztZQUNyQztnQkFDSSxPQUFPLEtBQUssQ0FBQztTQUNwQjtJQUNMLENBQUM7SUFFUyx1QkFBdUIsQ0FBRSx5QkFBb0Q7UUFDbkYsSUFDSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUM7ZUFDdEMsQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLEVBQzVDO1lBQ0UseUJBQXlCLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztTQUNsRDtRQUVELE9BQU8seUJBQXlCLENBQUM7SUFDckMsQ0FBQzt3RkF4Z0JRLHVCQUF1Qjt1RUFBdkIsdUJBQXVCLFdBQXZCLHVCQUF1QixtQkFEVixNQUFNOztTQUNuQix1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQURuQyxVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjQgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQgeyBpc0FycmF5LCBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuaW1wb3J0IHtcbiAgICBGaWVsZERlZmluaXRpb25NYXAsXG4gICAgaXNFbXB0eVN0cmluZyxcbiAgICBTZWFyY2hDcml0ZXJpYSxcbiAgICBTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyXG59IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2F2ZWRGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQgeyBNZXRhZGF0YVN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBTeXN0ZW1Db25maWdTdG9yZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQgeyBEYXRhVHlwZUZvcm1hdHRlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcblxudHlwZSBHZW5lcmljTWFwPFQ+ID0geyBba2V5OiBzdHJpbmddOiBUIH07XG50eXBlIE5lc3RlZEdlbmVyaWNNYXA8VD4gPSBHZW5lcmljTWFwPEdlbmVyaWNNYXA8VD4+O1xudHlwZSBEb3VibGVOZXN0ZWRHZW5lcmljTWFwPFQ+ID0gR2VuZXJpY01hcDxOZXN0ZWRHZW5lcmljTWFwPFQ+PjtcblxuY29uc3QgTU9OVEhfWUVBUl9SRUdFWCA9IG5ldyBSZWdFeHAoJ14oXFxcXGR7NH0pLSgwWzEtOV18MVswLTJdKSQnKTtcbmNvbnN0IE1PTlRIX1JFR0VYID0gbmV3IFJlZ0V4cCgnXihcXFxcZHs0fSkkJyk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdVcmxRdWVyeVNlcnZpY2Uge1xuXG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgYWxsb3dlZCBwcm9wZXJ0aWVzIHRvIGJlIHNldCB0byB0aGUgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlciBmcm9tIHVybF9xdWVyeV9maWx0ZXJfbWFwcGluZ1xuICAgICAqL1xuICAgIHByaXZhdGUgYWxsb3dlZFByb3BlcnRpZXMgPSBbXG4gICAgICAgICdvcGVyYXRvcicsXG4gICAgICAgICd0YXJnZXQnLFxuICAgICAgICAndmFsdWVzJyxcbiAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgJ2VuZCdcbiAgICBdO1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgY29udGFpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIGNvbnZlcnRlZCBpbnRvIGRiRm9ybWF0LlxuICAgICAqL1xuICAgIHByaXZhdGUgY29udmVydGFibGVQcm9wZXJ0aWVzID0gW1xuICAgICAgICAndGFyZ2V0JyxcbiAgICAgICAgJ3ZhbHVlcycsXG4gICAgICAgICdzdGFydCcsXG4gICAgICAgICdlbmQnXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZzogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YVN0b3JlOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgZGF0YVR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGEgVVJMIHF1ZXJ5LWJhc2VkIGZpbHRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgLSBUaGUgbW9kdWxlIG5hbWUuXG4gICAgICogQHBhcmFtIHtTYXZlZEZpbHRlcn0gZGVmYXVsdEZpbHRlciAtIFRoZSBkZWZhdWx0IGZpbHRlci5cbiAgICAgKiBAcGFyYW0ge1BhcmFtc30gcmF3UXVlcnlQYXJhbXMgLSBUaGUgcmF3IHF1ZXJ5IHBhcmFtZXRlcnMuXG4gICAgICogQHJldHVybnMge1NhdmVkRmlsdGVyfG51bGx9IC0gVGhlIGJ1aWx0IFVSTCBxdWVyeS1iYXNlZCBmaWx0ZXIsIG9yIG51bGwgaWYgbm8gZmlsdGVyIGNyaXRlcmlhIGFyZSBmb3VuZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYnVpbGRVcmxRdWVyeUJhc2VkRmlsdGVyIChcbiAgICAgICAgbW9kdWxlOiBzdHJpbmcsXG4gICAgICAgIGRlZmF1bHRGaWx0ZXI6IFNhdmVkRmlsdGVyLFxuICAgICAgICByYXdRdWVyeVBhcmFtczogUGFyYW1zXG4gICAgKTogU2F2ZWRGaWx0ZXIgfCBudWxsIHtcbiAgICAgICAgY29uc3QgZmlsdGVyRmllbGREZWZpbml0aW9ucyA9IHRoaXMubWV0YWRhdGFTdG9yZS5nZXQoKS5yZWNvcmRWaWV3LnZhcmRlZnM7XG5cbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBPYmplY3QuZW50cmllcyhyYXdRdWVyeVBhcmFtcylcbiAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgW3F1ZXJ5UGFyYW1LZXksIHF1ZXJ5UGFyYW1WYWxdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2NsZWFuUXVlcnlQYXJhbUtleSwgY2xlYW5RdWVyeVBhcmFtVmFsXSA9IHRoaXMuY2xlYW5RdWVyeVBhcmFtKFtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbUtleSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbVZhbF0pO1xuICAgICAgICAgICAgICAgIGFjY1tjbGVhblF1ZXJ5UGFyYW1LZXldID0gY2xlYW5RdWVyeVBhcmFtVmFsO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSBhcyBQYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGZpbHRlckNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSA9IHRoaXMuZ2V0UXVlcnlGaWx0ZXJDcml0ZXJpYShcbiAgICAgICAgICAgIGZpbHRlckZpZWxkRGVmaW5pdGlvbnMsXG4gICAgICAgICAgICBtb2R1bGUsXG4gICAgICAgICAgICBxdWVyeVBhcmFtc1xuICAgICAgICApO1xuXG4gICAgICAgIGlmIChpc0VtcHR5KGZpbHRlckNyaXRlcmlhLmZpbHRlcnMpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgIHNlYXJjaE1vZHVsZTogbW9kdWxlLFxuICAgICAgICAgICAgbW9kdWxlOiAnc2F2ZWQtc2VhcmNoJyxcbiAgICAgICAgICAgIGNyaXRlcmlhOiBmaWx0ZXJDcml0ZXJpYVxuICAgICAgICB9IGFzIFNhdmVkRmlsdGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyB0aGUgcXVlcnkgZmlsdGVyIGNyaXRlcmlhIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBmaWVsZCBkZWZpbml0aW9ucyBtYXAsIG1vZHVsZSwgYW5kIHF1ZXJ5IHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ZpZWxkRGVmaW5pdGlvbk1hcH0gZmllbGREZWZpbml0aW9uTWFwIC0gVGhlIGZpZWxkIGRlZmluaXRpb24gbWFwLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgLSBUaGUgbW9kdWxlIG5hbWUuXG4gICAgICogQHBhcmFtIHtQYXJhbXN9IHF1ZXJ5UGFyYW1zIC0gVGhlIHF1ZXJ5IHBhcmFtZXRlcnMuXG4gICAgICogQHJldHVybnMge1NlYXJjaENyaXRlcmlhfSAtIFRoZSBnZW5lcmF0ZWQgc2VhcmNoIGNyaXRlcmlhLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UXVlcnlGaWx0ZXJDcml0ZXJpYSAoXG4gICAgICAgIGZpZWxkRGVmaW5pdGlvbk1hcDogRmllbGREZWZpbml0aW9uTWFwLFxuICAgICAgICBtb2R1bGU6IHN0cmluZyxcbiAgICAgICAgcXVlcnlQYXJhbXM6IFBhcmFtc1xuICAgICk6IFNlYXJjaENyaXRlcmlhIHtcbiAgICAgICAgY29uc3QgY3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhID0ge1xuICAgICAgICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgZmlsdGVyczoge31cbiAgICAgICAgfSBhcyBTZWFyY2hDcml0ZXJpYTtcblxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtc0tleXMgPSBPYmplY3Qua2V5cyhxdWVyeVBhcmFtcyk7XG4gICAgICAgIGNvbnN0IGZpZWxkRGVmaW5pdGlvbnMgPSBPYmplY3QudmFsdWVzKGZpZWxkRGVmaW5pdGlvbk1hcClcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgbmFtZSB9KSA9PiBxdWVyeVBhcmFtc0tleXMuc29tZShxUEtleSA9PiBxUEtleS5pbmNsdWRlcyhuYW1lKSkpO1xuXG4gICAgICAgIGNvbnN0IGxpc3R2aWV3VXJsUXVlcnlGaWx0ZXJNYXBwaW5nID0gdGhpcy5zeXN0ZW1Db25maWcuZ2V0Q29uZmlnVmFsdWUoXG4gICAgICAgICAgICAnbGlzdHZpZXdfdXJsX3F1ZXJ5X2ZpbHRlcl9tYXBwaW5nJ1xuICAgICAgICApIGFzIERvdWJsZU5lc3RlZEdlbmVyaWNNYXA8c3RyaW5nPjtcbiAgICAgICAgY29uc3QgbGlzdHZpZXdVcmxRdWVyeUZpbHRlck1hcHBpbmdFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMobGlzdHZpZXdVcmxRdWVyeUZpbHRlck1hcHBpbmcpO1xuICAgICAgICBsaXN0dmlld1VybFF1ZXJ5RmlsdGVyTWFwcGluZ0VudHJpZXMucHVzaChbJycsIHt9XSk7XG5cbiAgICAgICAgbGV0IHNlYXJjaFR5cGU7XG4gICAgICAgIHN3aXRjaCAocXVlcnlQYXJhbXNbJ3NlYXJjaEZvcm1UYWInXSkge1xuICAgICAgICAgICAgY2FzZSAnYmFzaWNfc2VhcmNoJzpcbiAgICAgICAgICAgICAgICBzZWFyY2hUeXBlID0gJ2Jhc2ljJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FkdmFuY2VkX3NlYXJjaCc6XG4gICAgICAgICAgICAgICAgc2VhcmNoVHlwZSA9ICdhZHZhbmNlZCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHNlYXJjaFR5cGUgPSAnYWR2YW5jZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBmaWVsZERlZmluaXRpb24gb2YgZmllbGREZWZpbml0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgZmllbGRGaWx0ZXJOYW1lID0gZmllbGREZWZpbml0aW9uLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBmaWVsZEZpbHRlcktleXMgPSBbXG4gICAgICAgICAgICAgICAgZmllbGRGaWx0ZXJOYW1lLFxuICAgICAgICAgICAgICAgIGAke2ZpZWxkRmlsdGVyTmFtZX1fJHtzZWFyY2hUeXBlfWBcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgW3F1ZXJ5RmlsdGVyT3BlcmF0b3JLZXlUZW1wbGF0ZSwgcXVlcnlGaWx0ZXJPcGVyYXRvclBhcmFtc01hcF0gb2YgbGlzdHZpZXdVcmxRdWVyeUZpbHRlck1hcHBpbmdFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0VtcHR5KGNyaXRlcmlhLmZpbHRlcnNbZmllbGRGaWx0ZXJOYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZEZpbHRlcktleSBvZiBmaWVsZEZpbHRlcktleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0VtcHR5KGNyaXRlcmlhLmZpbHRlcnNbZmllbGRGaWx0ZXJOYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlciA9IHRoaXMuYnVpbGRTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRGaWx0ZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREZWZpbml0aW9uLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRmlsdGVyS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlGaWx0ZXJPcGVyYXRvcktleVRlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlGaWx0ZXJPcGVyYXRvclBhcmFtc01hcFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5KHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnZlcnRhYmxlUHJvcGVydGllcy5mb3JFYWNoKChjb252ZXJ0YWJsZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyW2NvbnZlcnRhYmxlUHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJuYWxGb3JtYXRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyW2NvbnZlcnRhYmxlUHJvcGVydHldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbEZvcm1hdFZhbHVlID0gc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcltjb252ZXJ0YWJsZVByb3BlcnR5XS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wID0+IHRoaXMudG9JbnRlcm5hbEZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERlZmluaXRpb24udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbEZvcm1hdFZhbHVlID0gdGhpcy50b0ludGVybmFsRm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREZWZpbml0aW9uLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyW2NvbnZlcnRhYmxlUHJvcGVydHldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcltjb252ZXJ0YWJsZVByb3BlcnR5XSA9IGludGVybmFsRm9ybWF0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjcml0ZXJpYS5maWx0ZXJzW2ZpZWxkRmlsdGVyTmFtZV0gPSBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcml0ZXJpYTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYSBzZWFyY2ggY3JpdGVyaWEgZmllbGQgZmlsdGVyIG9iamVjdCBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZEZpbHRlck5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZmllbGQgZmlsdGVyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZEZpbHRlckZpZWxkVHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBmaWVsZCBmaWx0ZXIuXG4gICAgICogQHBhcmFtIHtQYXJhbXN9IHF1ZXJ5UGFyYW1zIC0gVGhlIHF1ZXJ5IHBhcmFtZXRlcnMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkRmlsdGVyS2V5IC0gVGhlIGtleSBvZiB0aGUgZmllbGQgZmlsdGVyIGluIHRoZSBxdWVyeSBwYXJhbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeUZpbHRlck9wZXJhdG9yS2V5VGVtcGxhdGUgLSBUaGUgdGVtcGxhdGUgZm9yIHRoZSBxdWVyeSBmaWx0ZXIgb3BlcmF0b3Iga2V5LlxuICAgICAqIEBwYXJhbSB7TmVzdGVkR2VuZXJpY01hcDxzdHJpbmc+fSBxdWVyeUZpbHRlck9wZXJhdG9yUGFyYW1zTWFwIC0gVGhlIG1hcCBvZiBxdWVyeSBmaWx0ZXIgb3BlcmF0b3Iga2V5cyB0byB0aGVpciByZXNwZWN0aXZlIHBhcmFtZXRlciBtYXBzLlxuICAgICAqIEByZXR1cm5zIHtTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyIHwgbnVsbH0gVGhlIGJ1aWx0IHNlYXJjaCBjcml0ZXJpYSBmaWVsZCBmaWx0ZXIgb2JqZWN0LlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyIChcbiAgICAgICAgZmllbGRGaWx0ZXJOYW1lOiBzdHJpbmcsXG4gICAgICAgIGZpZWxkRmlsdGVyRmllbGRUeXBlOiBzdHJpbmcsXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiBQYXJhbXMsXG4gICAgICAgIGZpZWxkRmlsdGVyS2V5OiBzdHJpbmcsXG4gICAgICAgIHF1ZXJ5RmlsdGVyT3BlcmF0b3JLZXlUZW1wbGF0ZTogc3RyaW5nLFxuICAgICAgICBxdWVyeUZpbHRlck9wZXJhdG9yUGFyYW1zTWFwOiBOZXN0ZWRHZW5lcmljTWFwPHN0cmluZz5cbiAgICApOiBTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIgPSB7XG4gICAgICAgICAgICBmaWVsZDogZmllbGRGaWx0ZXJOYW1lLFxuICAgICAgICAgICAgZmllbGRUeXBlOiBmaWVsZEZpbHRlckZpZWxkVHlwZSxcbiAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXG4gICAgICAgICAgICB2YWx1ZXM6IFtdXG4gICAgICAgIH0gYXMgU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcjtcblxuICAgICAgICBpZiAoaXNFbXB0eShxdWVyeUZpbHRlck9wZXJhdG9yS2V5VGVtcGxhdGUpIHx8IGlzRW1wdHkocXVlcnlGaWx0ZXJPcGVyYXRvclBhcmFtc01hcCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkRmlsdGVyVmFsdWUgPSB0aGlzLmdldFF1ZXJ5UGFyYW1WYWx1ZShcbiAgICAgICAgICAgICAgICBmaWVsZEZpbHRlcktleSxcbiAgICAgICAgICAgICAgICBmaWVsZEZpbHRlcktleSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChpc0VtcHR5KGZpZWxkRmlsdGVyVmFsdWUpICYmICFpc0VtcHR5U3RyaW5nKGZpZWxkRmlsdGVyVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGlzQXJyYXkoZmllbGRGaWx0ZXJWYWx1ZSlcbiAgICAgICAgICAgICAgICA/IGZpZWxkRmlsdGVyVmFsdWVcbiAgICAgICAgICAgICAgICA6IFtmaWVsZEZpbHRlclZhbHVlXTtcblxuICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnRhcmdldCA9IHZhbHVlc1swXTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tEYXRlU3BlY2lhbHNPclJldHVybihcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLFxuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIudGFyZ2V0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcXVlcnlGaWx0ZXJPcGVyYXRvcktleSA9IHRoaXMuZ2V0UXVlcnlQYXJhbVZhbHVlKFxuICAgICAgICAgICAgcXVlcnlGaWx0ZXJPcGVyYXRvcktleVRlbXBsYXRlLFxuICAgICAgICAgICAgZmllbGRGaWx0ZXJLZXksXG4gICAgICAgICAgICBxdWVyeVBhcmFtcyxcbiAgICAgICAgICAgIHsgZm9yY2VTaW5nbGVTdHJpbmc6IHRydWUgfVxuICAgICAgICApIGFzIHN0cmluZztcbiAgICAgICAgY29uc3QgcXVlcnlGaWx0ZXJPcGVyYXRvclBhcmFtcyA9IChcbiAgICAgICAgICAgIHF1ZXJ5RmlsdGVyT3BlcmF0b3JQYXJhbXNNYXBbcXVlcnlGaWx0ZXJPcGVyYXRvcktleV0gPz9cbiAgICAgICAgICAgIE9iamVjdFxuICAgICAgICAgICAgICAgIC52YWx1ZXMocXVlcnlGaWx0ZXJPcGVyYXRvclBhcmFtc01hcClcbiAgICAgICAgICAgICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIHsgLi4ucHJldiwgLi4uY3VyciB9XG4gICAgICAgICAgICAgICAgKSwge30pXG4gICAgICAgICAgICA/PyB7fVxuICAgICAgICApIGFzIEdlbmVyaWNNYXA8c3RyaW5nPjtcbiAgICAgICAgaWYgKGlzRW1wdHkocXVlcnlGaWx0ZXJPcGVyYXRvclBhcmFtcykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJldHVybkVtcHR5ID0gdHJ1ZTtcbiAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5vcGVyYXRvciA9IHF1ZXJ5RmlsdGVyT3BlcmF0b3JLZXk7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHF1ZXJ5RmlsdGVyT3BlcmF0b3JQYXJhbXMpXG4gICAgICAgICAgICAuZmlsdGVyKChbXywgc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eUtleV0pID0+IChcbiAgICAgICAgICAgICAgICB0eXBlb2Ygc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eUtleSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmFsbG93ZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKHNlYXJjaENyaXRlcmlhUHJvcGVydHlLZXkpXG4gICAgICAgICAgICApKVxuICAgICAgICAgICAgLmZvckVhY2goKFtzZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWVUZW1wbGF0ZSwgc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eUtleV0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByYXdTZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWUgPSB0aGlzLmdldFF1ZXJ5UGFyYW1WYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlVGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkRmlsdGVyS2V5LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc1xuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eShyYXdTZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuRW1wdHkgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGxldCBzZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWUgPSByYXdTZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eUtleSA9PT0gJ3ZhbHVlcycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0FycmF5KHNlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZSA9IFtzZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlclsndGFyZ2V0J10gPSBzZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWVbMF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWFyY2hDcml0ZXJpYVByb3BlcnR5S2V5ID09PSAndGFyZ2V0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShzZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWUgPSBzZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWVbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyWyd2YWx1ZXMnXSA9IFtzZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWVdIGFzIHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXJbc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eUtleV0gPSBzZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzQXJyYXkoc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRGF0ZVNwZWNpYWxzT3JSZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBxdWVyeUZpbHRlck9wZXJhdG9yS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eUtleVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAhcmV0dXJuRW1wdHkgPyB0aGlzLmNoZWNrRm9yTWlzc2luZ09wZXJhdG9yKHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIpIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIG9mIGEgcXVlcnkgcGFyYW1ldGVyIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBxdWVyeVBhcmFtS2V5VGVtcGxhdGUsXG4gICAgICogZmllbGRGaWx0ZXJLZXksIGFuZCBxdWVyeVBhcmFtcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVBhcmFtS2V5VGVtcGxhdGUgLSBUaGUgdGVtcGxhdGUgZm9yIHRoZSBxdWVyeSBwYXJhbWV0ZXIga2V5LCB3aXRoIFwie2ZpZWxkfVwiIGFzIGEgcGxhY2Vob2xkZXIgZm9yIGZpZWxkRmlsdGVyS2V5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZEZpbHRlcktleSAtIFRoZSBmaWVsZCBmaWx0ZXIga2V5IHVzZWQgdG8gcmVwbGFjZSB0aGUgXCJ7ZmllbGR9XCIgcGxhY2Vob2xkZXIgaW4gcXVlcnlQYXJhbUtleVRlbXBsYXRlLlxuICAgICAqIEBwYXJhbSB7UGFyYW1zfSBxdWVyeVBhcmFtcyAtIFRoZSBvYmplY3QgY29udGFpbmluZyB0aGUgcXVlcnkgcGFyYW1ldGVycy5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbmFsIHBhcmFtZXRlcnMgdG8gY3VzdG9taXplIHRoZSBiZWhhdmlvciBvZiB0aGUgbWV0aG9kLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5mb3JjZVNpbmdsZVN0cmluZyAtIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSByZXN1bHQgc2hvdWxkIGFsd2F5cyBiZSBhIHNpbmdsZSBzdHJpbmcgdmFsdWUuXG4gICAgICogQHJldHVybnMge3N0cmluZ3xzdHJpbmdbXX0gLSBUaGUgdmFsdWUgb2YgdGhlIHF1ZXJ5IHBhcmFtZXRlci4gSWYgZm9yY2VTaW5nbGVTdHJpbmcgaXMgZmFsc2UsIGl0IHdpbGwgYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRRdWVyeVBhcmFtVmFsdWUgKFxuICAgICAgICBxdWVyeVBhcmFtS2V5VGVtcGxhdGU6IHN0cmluZyxcbiAgICAgICAgZmllbGRGaWx0ZXJLZXk6IHN0cmluZyxcbiAgICAgICAgcXVlcnlQYXJhbXM6IFBhcmFtcyxcbiAgICAgICAgeyBmb3JjZVNpbmdsZVN0cmluZyA9IGZhbHNlIH0gPSB7fVxuICAgICk6IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1LZXkgPSBxdWVyeVBhcmFtS2V5VGVtcGxhdGUucmVwbGFjZShcbiAgICAgICAgICAgICd7ZmllbGR9JyxcbiAgICAgICAgICAgIGZpZWxkRmlsdGVyS2V5XG4gICAgICAgICkgPz8gJyc7XG5cbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1WYWx1ZSA9IHF1ZXJ5UGFyYW1zW3F1ZXJ5UGFyYW1LZXldO1xuXG4gICAgICAgIGlmICghcXVlcnlQYXJhbVZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FycmF5KHF1ZXJ5UGFyYW1WYWx1ZSkpIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1WYWx1ZSA9IHF1ZXJ5UGFyYW1WYWx1ZS5tYXAodGhpcy50cmFuc2Zvcm0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlcnlQYXJhbVZhbHVlID0gdGhpcy50cmFuc2Zvcm0ocXVlcnlQYXJhbVZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JjZVNpbmdsZVN0cmluZyAmJiBpc0FycmF5KHF1ZXJ5UGFyYW1WYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBxdWVyeVBhcmFtVmFsdWVbMF0gPz8gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcXVlcnlQYXJhbVZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFucyB0aGUgcXVlcnkgcGFyYW1ldGVyIGtleSBieSByZW1vdmluZyB0aGUgJ1tdJyBicmFja2V0cyBpZiBwcmVzZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gLSBUaGUgY2xlYW5lZCBxdWVyeSBwYXJhbWV0ZXIga2V5LlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcGFyYW0gcXVlcnlQYXJhbVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjbGVhblF1ZXJ5UGFyYW0gKHF1ZXJ5UGFyYW06IFtzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdXSk6IFtzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdXSB7XG4gICAgICAgIGxldCBbcXVlcnlQYXJhbUtleSwgcXVlcnlQYXJhbVZhbF0gPSBxdWVyeVBhcmFtO1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1LZXlSZXZlcnNlZCA9IHF1ZXJ5UGFyYW1LZXkuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1LZXlSZXZlcnNlZC5pbmRleE9mKCddWycpID09PSAwICYmIHR5cGVvZiBxdWVyeVBhcmFtVmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcXVlcnlQYXJhbUtleSA9IHF1ZXJ5UGFyYW1LZXkucmVwbGFjZSgnW10nLCAnJyk7XG4gICAgICAgICAgICBxdWVyeVBhcmFtVmFsID0gcXVlcnlQYXJhbVZhbC5zcGxpdCgnLCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtxdWVyeVBhcmFtS2V5LCBxdWVyeVBhcmFtVmFsXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgZ2l2ZW4gZmllbGRGaWx0ZXJWYWx1ZSBtYXRjaGVzIE1PTlRIX1lFQVJfUkVHRVggb3IgeWVhclJlZ2V4IGFuZCByZXR1cm5zXG4gICAgICogb3ZlcnJpZGVzU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlciBpZiB0cnVlLCBlbHNlIHJldHVybnMgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcn0gc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlciAtIFRoZSBzZWFyY2ggY3JpdGVyaWEgZmllbGQgZmlsdGVyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZEZpbHRlclZhbHVlIC0gVGhlIGZpZWxkIGZpbHRlciB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMub3BlcmF0b3I9Jz0nXSAtIFRoZSByYW5nZSBvcHRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmtleT0ndGFyZ2V0J10gLSBUaGUga2V5IG9wdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7U2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcn0gLSBUaGUgdXBkYXRlZCBzZWFyY2ggY3JpdGVyaWEgZmllbGQgZmlsdGVyLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY2hlY2tEYXRlU3BlY2lhbHNPclJldHVybiAoXG4gICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXI6IFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIsXG4gICAgICAgIGZpZWxkRmlsdGVyVmFsdWU6IHN0cmluZyxcbiAgICAgICAgeyBvcGVyYXRvciA9ICc9Jywga2V5ID0gJ3RhcmdldCcgfTogeyBvcGVyYXRvcj86IHN0cmluZywga2V5Pzogc3RyaW5nIH0gPSB7fVxuICAgICk6IFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIge1xuICAgICAgICBpZiAoZmllbGRGaWx0ZXJWYWx1ZS5tYXRjaChNT05USF9ZRUFSX1JFR0VYKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3ZlcnJpZGVzU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcihcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLFxuICAgICAgICAgICAgICAgIGZpZWxkRmlsdGVyVmFsdWUsXG4gICAgICAgICAgICAgICAgeyB0eXBlOiAnbW9udGgnLCBvcGVyYXRvciwga2V5IH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGRGaWx0ZXJWYWx1ZS5tYXRjaChNT05USF9SRUdFWCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm92ZXJyaWRlc1NlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIoXG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcixcbiAgICAgICAgICAgICAgICBmaWVsZEZpbHRlclZhbHVlLFxuICAgICAgICAgICAgICAgIHsgdHlwZTogJ3llYXInLCBvcGVyYXRvciwga2V5IH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZXMgdGhlIHNlYXJjaCBjcml0ZXJpYSBmaWVsZCBmaWx0ZXIgYmFzZWQgb24gdGhlIHByb3ZpZGVkIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1NlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXJ9IHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIgLSBUaGUgb3JpZ2luYWwgc2VhcmNoIGNyaXRlcmlhIGZpZWxkIGZpbHRlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRGaWx0ZXJWYWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgZmlsdGVyLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgZm9yIG92ZXJyaWRpbmcgdGhlIGZpZWxkIGZpbHRlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50eXBlIC0gVGhlIHR5cGUgb2YgdGhlIGZpZWxkIGZpbHRlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMub3BlcmF0b3I9J2VxdWFsJ10gLSBUaGUgb3BlcmF0b3IgZm9yIHRoZSBmaWVsZCBmaWx0ZXIuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmtleT0ndGFyZ2V0J10gLSBUaGUga2V5IGZvciB0aGUgZmllbGQgZmlsdGVyLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7U2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcn0gLSBUaGUgb3ZlcnJpZGRlbiBzZWFyY2ggY3JpdGVyaWEgZmllbGQgZmlsdGVyLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvdmVycmlkZXNTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyIChcbiAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcjogU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcixcbiAgICAgICAgZmllbGRGaWx0ZXJWYWx1ZTogc3RyaW5nLFxuICAgICAgICB7IHR5cGUgPSAnJywgb3BlcmF0b3IgPSAnZXF1YWwnLCBrZXkgPSAndGFyZ2V0JyB9OiB7XG4gICAgICAgICAgICB0eXBlOiBzdHJpbmcsXG4gICAgICAgICAgICBvcGVyYXRvcj86IHN0cmluZyxcbiAgICAgICAgICAgIGtleT86IHN0cmluZ1xuICAgICAgICB9XG4gICAgKTogU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlciB7XG4gICAgICAgIGxldCBwbHVzT2JqZWN0O1xuICAgICAgICBsZXQgZm10O1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgIHBsdXNPYmplY3QgPSB7IHllYXI6IDEgfTtcbiAgICAgICAgICAgICAgICBmbXQgPSAneXl5eSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICAgICAgcGx1c09iamVjdCA9IHsgbW9udGg6IDEgfTtcbiAgICAgICAgICAgICAgICBmbXQgPSAneXl5eS1NTSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlVGltZS5mcm9tRm9ybWF0KGZpZWxkRmlsdGVyVmFsdWUsIGZtdCk7XG4gICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0LnBsdXMocGx1c09iamVjdCkubWludXMoeyBkYXk6IDEgfSk7XG5cbiAgICAgICAgaWYgKGtleSAhPT0gJ3RhcmdldCcpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnN0YXJ0ID0gc3RhcnQudG9Gb3JtYXQoJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5lbmQgPSBlbmQudG9Gb3JtYXQoJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSAnZ3JlYXRlcl90aGFuJzpcbiAgICAgICAgICAgIGNhc2UgJ2dyZWF0ZXJfdGhhbl9lcXVhbHMnOlxuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIuc3RhcnQgPSBzdGFydC50b0Zvcm1hdCgneXl5eS1NTS1kZCcpO1xuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIudGFyZ2V0ID0gc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5zdGFydDtcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnZhbHVlcyA9IFtzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnRhcmdldF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsZXNzX3RoYW4nOlxuICAgICAgICAgICAgY2FzZSAnbGVzc190aGFuX2VxdWFscyc6XG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5lbmQgPSBlbmQudG9Gb3JtYXQoJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnRhcmdldCA9IHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIuZW5kO1xuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIudmFsdWVzID0gW3NlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIudGFyZ2V0XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ25vdF9lcXVhbCc6XG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5zdGFydCA9IHN0YXJ0LnRvRm9ybWF0KCd5eXl5LU1NLWRkJyk7XG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5lbmQgPSBlbmQudG9Gb3JtYXQoJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnRhcmdldCA9IGZpZWxkRmlsdGVyVmFsdWU7XG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci52YWx1ZXMgPSBbZmllbGRGaWx0ZXJWYWx1ZV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlcXVhbCc6XG4gICAgICAgICAgICBjYXNlICdiZXR3ZWVuJzpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5vcGVyYXRvciA9ICdiZXR3ZWVuJztcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnN0YXJ0ID0gc3RhcnQudG9Gb3JtYXQoJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLmVuZCA9IGVuZC50b0Zvcm1hdCgneXl5eS1NTS1kZCcpO1xuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIudGFyZ2V0ID0gJyc7XG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci52YWx1ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSB0byB0aGUgaW50ZXJuYWwgZm9ybWF0IGJhc2VkIG9uIHRoZSBzcGVjaWZpZWQgdHlwZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIHR5cGUgb2YgdmFsdWUgdG8gY29udmVydCB0by5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gVGhlIGNvbnZlcnRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJuYWwgZm9ybWF0LlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdG9JbnRlcm5hbEZvcm1hdCAodHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHZhbHVlLm1hdGNoKE1PTlRIX1JFR0VYKSB8fCB2YWx1ZS5tYXRjaChNT05USF9ZRUFSX1JFR0VYKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFUeXBlRm9ybWF0dGVyLnRvSW50ZXJuYWxGb3JtYXQodHlwZSwgdmFsdWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIHRoZSBnaXZlbiB2YWx1ZSBmcm9tIHVybCB0byBhIHZhbHVlIHVuZGVyc3RhbmRhYmxlIGJ5IGJhY2tlbmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gYmUgdHJhbnNmb3JtZWQuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHRyYW5zZm9ybWVkIHZhbHVlLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCB0cmFuc2Zvcm0gKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICcnOlxuICAgICAgICAgICAgICAgIHJldHVybiAnX19TdWl0ZUNSTUVtcHR5U3RyaW5nX18nO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2hlY2tGb3JNaXNzaW5nT3BlcmF0b3IgKHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXI6IFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIpOiBTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWlzRW1wdHkoc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5zdGFydClcbiAgICAgICAgICAgICYmICFpc0VtcHR5KHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIuZW5kKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIub3BlcmF0b3IgPSAnYmV0d2Vlbic7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcjtcbiAgICB9XG59XG4iXX0=