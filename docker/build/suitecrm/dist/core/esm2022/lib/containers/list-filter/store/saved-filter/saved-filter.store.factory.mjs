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
import { Injectable } from '@angular/core';
import { RecordFetchGQL } from '../../../../store/record/graphql/api.record.get';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { LanguageStore } from '../../../../store/language/language.store';
import { MessageService } from '../../../../services/message/message.service';
import { RecordManager } from '../../../../services/record/record.manager';
import { SavedFilterStore } from './saved-filter.store';
import { MetadataStore } from '../../../../store/metadata/metadata.store.service';
import { SavedFilterSaveGQL } from './graphql/api.saved-filters.save';
import { RecordMapperRegistry } from 'common';
import { BaseSaveRecordMapper } from '../../../../store/record/record-mappers/base-save.record-mapper';
import { SavedSearchRecordMapper } from './record-mappers/saved-search.record-mapper';
import { FieldManager } from '../../../../services/record/field/field.manager';
import { SavedFilterRecordStoreFactory } from './saved-filter-record.store.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record/graphql/api.record.get";
import * as i2 from "./graphql/api.saved-filters.save";
import * as i3 from "../../../../store/app-state/app-state.store";
import * as i4 from "../../../../store/language/language.store";
import * as i5 from "../../../../store/metadata/metadata.store.service";
import * as i6 from "../../../../services/message/message.service";
import * as i7 from "../../../../services/record/record.manager";
import * as i8 from "../../../../services/record/field/field.manager";
import * as i9 from "common";
import * as i10 from "../../../../store/record/record-mappers/base-save.record-mapper";
import * as i11 from "./record-mappers/saved-search.record-mapper";
class SaveFilterStoreFactory {
    constructor(recordFetchGQL, recordSaveGQL, appStateStore, languageStore, metadataStore, message, recordManager, fieldManager, recordMappers, baseMapper, savedSearchMapper) {
        this.recordFetchGQL = recordFetchGQL;
        this.recordSaveGQL = recordSaveGQL;
        this.appStateStore = appStateStore;
        this.languageStore = languageStore;
        this.metadataStore = metadataStore;
        this.message = message;
        this.recordManager = recordManager;
        this.fieldManager = fieldManager;
        this.recordMappers = recordMappers;
        this.baseMapper = baseMapper;
        this.savedSearchMapper = savedSearchMapper;
        this.savedFilterStoreFactory = new SavedFilterRecordStoreFactory(recordFetchGQL, recordSaveGQL, message, recordManager, recordMappers, baseMapper, fieldManager, languageStore);
        this.recordMappers.register('saved-search', this.savedSearchMapper.getKey(), this.savedSearchMapper);
    }
    create() {
        return new SavedFilterStore(this.appStateStore, this.metadataStore, this.message, this.fieldManager, this.languageStore, this.savedFilterStoreFactory);
    }
    static { this.ɵfac = function SaveFilterStoreFactory_Factory(t) { return new (t || SaveFilterStoreFactory)(i0.ɵɵinject(i1.RecordFetchGQL), i0.ɵɵinject(i2.SavedFilterSaveGQL), i0.ɵɵinject(i3.AppStateStore), i0.ɵɵinject(i4.LanguageStore), i0.ɵɵinject(i5.MetadataStore), i0.ɵɵinject(i6.MessageService), i0.ɵɵinject(i7.RecordManager), i0.ɵɵinject(i8.FieldManager), i0.ɵɵinject(i9.RecordMapperRegistry), i0.ɵɵinject(i10.BaseSaveRecordMapper), i0.ɵɵinject(i11.SavedSearchRecordMapper)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SaveFilterStoreFactory, factory: SaveFilterStoreFactory.ɵfac, providedIn: 'root' }); }
}
export { SaveFilterStoreFactory };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SaveFilterStoreFactory, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RecordFetchGQL }, { type: i2.SavedFilterSaveGQL }, { type: i3.AppStateStore }, { type: i4.LanguageStore }, { type: i5.MetadataStore }, { type: i6.MessageService }, { type: i7.RecordManager }, { type: i8.FieldManager }, { type: i9.RecordMapperRegistry }, { type: i10.BaseSaveRecordMapper }, { type: i11.SavedSearchRecordMapper }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZWQtZmlsdGVyLnN0b3JlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9saXN0LWZpbHRlci9zdG9yZS9zYXZlZC1maWx0ZXIvc2F2ZWQtZmlsdGVyLnN0b3JlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDaEYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGlFQUFpRSxDQUFDO0FBQ3JHLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUM3RSxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQUVsRixNQUdhLHNCQUFzQjtJQUkvQixZQUNjLGNBQThCLEVBQzlCLGFBQWlDLEVBQ2pDLGFBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLE9BQXVCLEVBQ3ZCLGFBQTRCLEVBQzVCLFlBQTBCLEVBQzFCLGFBQW1DLEVBQ25DLFVBQWdDLEVBQ2hDLGlCQUEwQztRQVYxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxlQUFVLEdBQVYsVUFBVSxDQUFzQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXlCO1FBRXBELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLDZCQUE2QixDQUM1RCxjQUFjLEVBQ2QsYUFBYSxFQUNiLE9BQU8sRUFDUCxhQUFhLEVBQ2IsYUFBYSxFQUNiLFVBQVUsRUFDVixZQUFZLEVBQ1osYUFBYSxDQUNoQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBRUQsTUFBTTtRQUNGLE9BQU8sSUFBSSxnQkFBZ0IsQ0FDdkIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsdUJBQXVCLENBQy9CLENBQUM7SUFDTixDQUFDO3VGQXZDUSxzQkFBc0I7dUVBQXRCLHNCQUFzQixXQUF0QixzQkFBc0IsbUJBRm5CLE1BQU07O1NBRVQsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FIbEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWNvcmRGZXRjaEdRTH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkL2dyYXBocWwvYXBpLnJlY29yZC5nZXQnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9yZWNvcmQvcmVjb3JkLm1hbmFnZXInO1xuaW1wb3J0IHtTYXZlZEZpbHRlclN0b3JlfSBmcm9tICcuL3NhdmVkLWZpbHRlci5zdG9yZSc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtTYXZlZEZpbHRlclNhdmVHUUx9IGZyb20gJy4vZ3JhcGhxbC9hcGkuc2F2ZWQtZmlsdGVycy5zYXZlJztcbmltcG9ydCB7UmVjb3JkTWFwcGVyUmVnaXN0cnl9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0Jhc2VTYXZlUmVjb3JkTWFwcGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQvcmVjb3JkLW1hcHBlcnMvYmFzZS1zYXZlLnJlY29yZC1tYXBwZXInO1xuaW1wb3J0IHtTYXZlZFNlYXJjaFJlY29yZE1hcHBlcn0gZnJvbSAnLi9yZWNvcmQtbWFwcGVycy9zYXZlZC1zZWFyY2gucmVjb3JkLW1hcHBlcic7XG5pbXBvcnQge0ZpZWxkTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL2ZpZWxkL2ZpZWxkLm1hbmFnZXInO1xuaW1wb3J0IHtTYXZlZEZpbHRlclJlY29yZFN0b3JlRmFjdG9yeX0gZnJvbSAnLi9zYXZlZC1maWx0ZXItcmVjb3JkLnN0b3JlLmZhY3RvcnknO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTYXZlRmlsdGVyU3RvcmVGYWN0b3J5IHtcblxuICAgIHByb3RlY3RlZCBzYXZlZEZpbHRlclN0b3JlRmFjdG9yeTogU2F2ZWRGaWx0ZXJSZWNvcmRTdG9yZUZhY3Rvcnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZEZldGNoR1FMOiBSZWNvcmRGZXRjaEdRTCxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZFNhdmVHUUw6IFNhdmVkRmlsdGVyU2F2ZUdRTCxcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGFTdG9yZTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkTWFuYWdlcjogUmVjb3JkTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGZpZWxkTWFuYWdlcjogRmllbGRNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkTWFwcGVyczogUmVjb3JkTWFwcGVyUmVnaXN0cnksXG4gICAgICAgIHByb3RlY3RlZCBiYXNlTWFwcGVyOiBCYXNlU2F2ZVJlY29yZE1hcHBlcixcbiAgICAgICAgcHJvdGVjdGVkIHNhdmVkU2VhcmNoTWFwcGVyOiBTYXZlZFNlYXJjaFJlY29yZE1hcHBlclxuICAgICkge1xuICAgICAgICB0aGlzLnNhdmVkRmlsdGVyU3RvcmVGYWN0b3J5ID0gbmV3IFNhdmVkRmlsdGVyUmVjb3JkU3RvcmVGYWN0b3J5KFxuICAgICAgICAgICAgcmVjb3JkRmV0Y2hHUUwsXG4gICAgICAgICAgICByZWNvcmRTYXZlR1FMLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIHJlY29yZE1hbmFnZXIsXG4gICAgICAgICAgICByZWNvcmRNYXBwZXJzLFxuICAgICAgICAgICAgYmFzZU1hcHBlcixcbiAgICAgICAgICAgIGZpZWxkTWFuYWdlcixcbiAgICAgICAgICAgIGxhbmd1YWdlU3RvcmVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZWNvcmRNYXBwZXJzLnJlZ2lzdGVyKCdzYXZlZC1zZWFyY2gnLCB0aGlzLnNhdmVkU2VhcmNoTWFwcGVyLmdldEtleSgpLCB0aGlzLnNhdmVkU2VhcmNoTWFwcGVyKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKTogU2F2ZWRGaWx0ZXJTdG9yZSB7XG4gICAgICAgIHJldHVybiBuZXcgU2F2ZWRGaWx0ZXJTdG9yZShcbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZSxcbiAgICAgICAgICAgIHRoaXMubWV0YWRhdGFTdG9yZSxcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRoaXMuZmllbGRNYW5hZ2VyLFxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVN0b3JlLFxuICAgICAgICAgICAgdGhpcy5zYXZlZEZpbHRlclN0b3JlRmFjdG9yeVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==