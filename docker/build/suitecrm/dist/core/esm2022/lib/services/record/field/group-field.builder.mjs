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
import { FieldBuilder } from './field.builder';
import { Injectable } from '@angular/core';
import { ValidationManager } from '../validation/validation.manager';
import { DataTypeFormatter } from '../../formatters/data-type.formatter.service';
import * as i0 from "@angular/core";
import * as i1 from "../validation/validation.manager";
import * as i2 from "../../formatters/data-type.formatter.service";
class GroupFieldBuilder extends FieldBuilder {
    constructor(validationManager, typeFormatter) {
        super(validationManager, typeFormatter);
        this.validationManager = validationManager;
        this.typeFormatter = typeFormatter;
    }
    /**
     * Create and add group fields to record
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @param {function} isInitializedFunction
     * @param {function} buildFieldFunction
     * @param {function} addRecordFunction
     */
    addGroupFields(record, viewField, language, isInitializedFunction, buildFieldFunction, addRecordFunction) {
        const definition = (viewField && viewField.fieldDefinition) || {};
        const groupFields = definition.groupFields || {};
        const groupFieldsKeys = Object.keys(groupFields);
        groupFieldsKeys.forEach(key => {
            const fieldDefinition = groupFields[key];
            if (isInitializedFunction(record, key)) {
                return;
            }
            if (fieldDefinition && fieldDefinition.type === 'relate' && fieldDefinition.type_name === 'parent_type') {
                fieldDefinition.module = record.attributes.parent_type;
            }
            const groupViewField = {
                name: fieldDefinition.name,
                label: fieldDefinition.vname,
                type: fieldDefinition.type,
                fieldDefinition
            };
            const groupField = buildFieldFunction(record, groupViewField, language);
            groupField.source = 'groupField';
            addRecordFunction(record, fieldDefinition.name, groupField);
        });
    }
    static { this.ɵfac = function GroupFieldBuilder_Factory(t) { return new (t || GroupFieldBuilder)(i0.ɵɵinject(i1.ValidationManager), i0.ɵɵinject(i2.DataTypeFormatter)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GroupFieldBuilder, factory: GroupFieldBuilder.ɵfac, providedIn: 'root' }); }
}
export { GroupFieldBuilder };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupFieldBuilder, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ValidationManager }, { type: i2.DataTypeFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtZmllbGQuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvZ3JvdXAtZmllbGQuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRzdDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sOENBQThDLENBQUM7Ozs7QUFFL0UsTUFHYSxpQkFBa0IsU0FBUSxZQUFZO0lBRS9DLFlBQ2MsaUJBQW9DLEVBQ3BDLGFBQWdDO1FBRTFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUg5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUc5QyxDQUFDO0lBR0Q7Ozs7Ozs7OztPQVNHO0lBQ0ksY0FBYyxDQUNqQixNQUFjLEVBQ2QsU0FBOEIsRUFDOUIsUUFBdUIsRUFDdkIscUJBQStCLEVBQy9CLGtCQUE0QixFQUM1QixpQkFBMkI7UUFHM0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRSxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUNqRCxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWpELGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDMUIsTUFBTSxlQUFlLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXpDLElBQUkscUJBQXFCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQyxPQUFPO2FBQ1Y7WUFFRCxJQUFJLGVBQWUsSUFBSSxlQUFlLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxlQUFlLENBQUMsU0FBUyxLQUFLLGFBQWEsRUFBRTtnQkFDckcsZUFBZSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQzthQUMxRDtZQUVELE1BQU0sY0FBYyxHQUFHO2dCQUNuQixJQUFJLEVBQUUsZUFBZSxDQUFDLElBQUk7Z0JBQzFCLEtBQUssRUFBRSxlQUFlLENBQUMsS0FBSztnQkFDNUIsSUFBSSxFQUFFLGVBQWUsQ0FBQyxJQUFJO2dCQUMxQixlQUFlO2FBQ2xCLENBQUM7WUFFRixNQUFNLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3hFLFVBQVUsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1lBQ2pDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztrRkF2RFEsaUJBQWlCO3VFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZkLE1BQU07O1NBRVQsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0ZpZWxkQnVpbGRlcn0gZnJvbSAnLi9maWVsZC5idWlsZGVyJztcbmltcG9ydCB7UmVjb3JkLCBWaWV3RmllbGREZWZpbml0aW9ufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWYWxpZGF0aW9uTWFuYWdlcn0gZnJvbSAnLi4vdmFsaWRhdGlvbi92YWxpZGF0aW9uLm1hbmFnZXInO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwRmllbGRCdWlsZGVyIGV4dGVuZHMgRmllbGRCdWlsZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgdmFsaWRhdGlvbk1hbmFnZXI6IFZhbGlkYXRpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIodmFsaWRhdGlvbk1hbmFnZXIsIHR5cGVGb3JtYXR0ZXIpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuZCBhZGQgZ3JvdXAgZmllbGRzIHRvIHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmlld0ZpZWxkIFZpZXdGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2UgTGFuZ3VhZ2VTdG9yZVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGlzSW5pdGlhbGl6ZWRGdW5jdGlvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGJ1aWxkRmllbGRGdW5jdGlvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGFkZFJlY29yZEZ1bmN0aW9uXG4gICAgICovXG4gICAgcHVibGljIGFkZEdyb3VwRmllbGRzKFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uLFxuICAgICAgICBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgaXNJbml0aWFsaXplZEZ1bmN0aW9uOiBGdW5jdGlvbixcbiAgICAgICAgYnVpbGRGaWVsZEZ1bmN0aW9uOiBGdW5jdGlvbixcbiAgICAgICAgYWRkUmVjb3JkRnVuY3Rpb246IEZ1bmN0aW9uLFxuICAgICk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSAodmlld0ZpZWxkICYmIHZpZXdGaWVsZC5maWVsZERlZmluaXRpb24pIHx8IHt9O1xuICAgICAgICBjb25zdCBncm91cEZpZWxkcyA9IGRlZmluaXRpb24uZ3JvdXBGaWVsZHMgfHwge307XG4gICAgICAgIGNvbnN0IGdyb3VwRmllbGRzS2V5cyA9IE9iamVjdC5rZXlzKGdyb3VwRmllbGRzKTtcblxuICAgICAgICBncm91cEZpZWxkc0tleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGREZWZpbml0aW9uID0gZ3JvdXBGaWVsZHNba2V5XTtcblxuICAgICAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWRGdW5jdGlvbihyZWNvcmQsIGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmaWVsZERlZmluaXRpb24gJiYgZmllbGREZWZpbml0aW9uLnR5cGUgPT09ICdyZWxhdGUnICYmIGZpZWxkRGVmaW5pdGlvbi50eXBlX25hbWUgPT09ICdwYXJlbnRfdHlwZScpIHtcbiAgICAgICAgICAgICAgICBmaWVsZERlZmluaXRpb24ubW9kdWxlID0gcmVjb3JkLmF0dHJpYnV0ZXMucGFyZW50X3R5cGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwVmlld0ZpZWxkID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGZpZWxkRGVmaW5pdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZERlZmluaXRpb24udm5hbWUsXG4gICAgICAgICAgICAgICAgdHlwZTogZmllbGREZWZpbml0aW9uLnR5cGUsXG4gICAgICAgICAgICAgICAgZmllbGREZWZpbml0aW9uXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBncm91cEZpZWxkID0gYnVpbGRGaWVsZEZ1bmN0aW9uKHJlY29yZCwgZ3JvdXBWaWV3RmllbGQsIGxhbmd1YWdlKTtcbiAgICAgICAgICAgIGdyb3VwRmllbGQuc291cmNlID0gJ2dyb3VwRmllbGQnO1xuICAgICAgICAgICAgYWRkUmVjb3JkRnVuY3Rpb24ocmVjb3JkLCBmaWVsZERlZmluaXRpb24ubmFtZSwgZ3JvdXBGaWVsZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19