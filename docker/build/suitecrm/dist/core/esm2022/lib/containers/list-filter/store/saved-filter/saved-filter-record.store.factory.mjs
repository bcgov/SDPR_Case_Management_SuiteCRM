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
import { RecordMapperRegistry } from 'common';
import { SavedFilterRecordStore } from './saved-filter-record.store';
import { FieldManager } from '../../../../services/record/field/field.manager';
import { LanguageStore } from '../../../../store/language/language.store';
import { RecordFetchGQL } from '../../../../store/record/graphql/api.record.get';
import { RecordSaveGQL } from '../../../../store/record/graphql/api.record.save';
import { MessageService } from '../../../../services/message/message.service';
import { RecordManager } from '../../../../services/record/record.manager';
import { BaseSaveRecordMapper } from '../../../../store/record/record-mappers/base-save.record-mapper';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record/graphql/api.record.get";
import * as i2 from "../../../../store/record/graphql/api.record.save";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../services/record/record.manager";
import * as i5 from "common";
import * as i6 from "../../../../store/record/record-mappers/base-save.record-mapper";
import * as i7 from "../../../../services/record/field/field.manager";
import * as i8 from "../../../../store/language/language.store";
class SavedFilterRecordStoreFactory {
    constructor(recordFetchGQL, recordSaveGQL, message, recordManager, recordMappers, baseMapper, fieldManager, language) {
        this.recordFetchGQL = recordFetchGQL;
        this.recordSaveGQL = recordSaveGQL;
        this.message = message;
        this.recordManager = recordManager;
        this.recordMappers = recordMappers;
        this.baseMapper = baseMapper;
        this.fieldManager = fieldManager;
        this.language = language;
        recordMappers.register('default', baseMapper.getKey(), baseMapper);
    }
    create(definitions$) {
        return new SavedFilterRecordStore(definitions$, this.recordSaveGQL, this.recordFetchGQL, this.message, this.recordManager, this.recordMappers, this.fieldManager, this.language);
    }
    static { this.ɵfac = function SavedFilterRecordStoreFactory_Factory(t) { return new (t || SavedFilterRecordStoreFactory)(i0.ɵɵinject(i1.RecordFetchGQL), i0.ɵɵinject(i2.RecordSaveGQL), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.RecordManager), i0.ɵɵinject(i5.RecordMapperRegistry), i0.ɵɵinject(i6.BaseSaveRecordMapper), i0.ɵɵinject(i7.FieldManager), i0.ɵɵinject(i8.LanguageStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SavedFilterRecordStoreFactory, factory: SavedFilterRecordStoreFactory.ɵfac, providedIn: 'root' }); }
}
export { SavedFilterRecordStoreFactory };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SavedFilterRecordStoreFactory, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RecordFetchGQL }, { type: i2.RecordSaveGQL }, { type: i3.MessageService }, { type: i4.RecordManager }, { type: i5.RecordMapperRegistry }, { type: i6.BaseSaveRecordMapper }, { type: i7.FieldManager }, { type: i8.LanguageStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZWQtZmlsdGVyLXJlY29yZC5zdG9yZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvbGlzdC1maWx0ZXIvc3RvcmUvc2F2ZWQtZmlsdGVyL3NhdmVkLWZpbHRlci1yZWNvcmQuc3RvcmUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsb0JBQW9CLEVBQXNCLE1BQU0sUUFBUSxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUM3RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQy9FLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUMvRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDNUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGlFQUFpRSxDQUFDOzs7Ozs7Ozs7O0FBR3JHLE1BR2EsNkJBQTZCO0lBRXRDLFlBQ2MsY0FBOEIsRUFDOUIsYUFBNEIsRUFDNUIsT0FBdUIsRUFDdkIsYUFBNEIsRUFDNUIsYUFBbUMsRUFDbkMsVUFBZ0MsRUFDaEMsWUFBMEIsRUFDMUIsUUFBdUI7UUFQdkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxlQUFVLEdBQVYsVUFBVSxDQUFzQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBRWpDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQStDO1FBQ2xELE9BQU8sSUFBSSxzQkFBc0IsQ0FDN0IsWUFBWSxFQUNaLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FDaEIsQ0FBQztJQUNOLENBQUM7OEZBMUJRLDZCQUE2Qjt1RUFBN0IsNkJBQTZCLFdBQTdCLDZCQUE2QixtQkFGMUIsTUFBTTs7U0FFVCw2QkFBNkI7dUZBQTdCLDZCQUE2QjtjQUh6QyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlY29yZE1hcHBlclJlZ2lzdHJ5LCBWaWV3RmllbGREZWZpbml0aW9ufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtTYXZlZEZpbHRlclJlY29yZFN0b3JlfSBmcm9tICcuL3NhdmVkLWZpbHRlci1yZWNvcmQuc3RvcmUnO1xuaW1wb3J0IHtGaWVsZE1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3JlY29yZC9maWVsZC9maWVsZC5tYW5hZ2VyJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRGZXRjaEdRTH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkL2dyYXBocWwvYXBpLnJlY29yZC5nZXQnO1xuaW1wb3J0IHtSZWNvcmRTYXZlR1FMfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQvZ3JhcGhxbC9hcGkucmVjb3JkLnNhdmUnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9yZWNvcmQvcmVjb3JkLm1hbmFnZXInO1xuaW1wb3J0IHtCYXNlU2F2ZVJlY29yZE1hcHBlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkL3JlY29yZC1tYXBwZXJzL2Jhc2Utc2F2ZS5yZWNvcmQtbWFwcGVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNhdmVkRmlsdGVyUmVjb3JkU3RvcmVGYWN0b3J5IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkRmV0Y2hHUUw6IFJlY29yZEZldGNoR1FMLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkU2F2ZUdRTDogUmVjb3JkU2F2ZUdRTCxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkTWFuYWdlcjogUmVjb3JkTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZE1hcHBlcnM6IFJlY29yZE1hcHBlclJlZ2lzdHJ5LFxuICAgICAgICBwcm90ZWN0ZWQgYmFzZU1hcHBlcjogQmFzZVNhdmVSZWNvcmRNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBmaWVsZE1hbmFnZXI6IEZpZWxkTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHJlY29yZE1hcHBlcnMucmVnaXN0ZXIoJ2RlZmF1bHQnLCBiYXNlTWFwcGVyLmdldEtleSgpLCBiYXNlTWFwcGVyKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoZGVmaW5pdGlvbnMkOiBPYnNlcnZhYmxlPFZpZXdGaWVsZERlZmluaXRpb25bXT4pOiBTYXZlZEZpbHRlclJlY29yZFN0b3JlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTYXZlZEZpbHRlclJlY29yZFN0b3JlKFxuICAgICAgICAgICAgZGVmaW5pdGlvbnMkLFxuICAgICAgICAgICAgdGhpcy5yZWNvcmRTYXZlR1FMLFxuICAgICAgICAgICAgdGhpcy5yZWNvcmRGZXRjaEdRTCxcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRoaXMucmVjb3JkTWFuYWdlcixcbiAgICAgICAgICAgIHRoaXMucmVjb3JkTWFwcGVycyxcbiAgICAgICAgICAgIHRoaXMuZmllbGRNYW5hZ2VyLFxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==