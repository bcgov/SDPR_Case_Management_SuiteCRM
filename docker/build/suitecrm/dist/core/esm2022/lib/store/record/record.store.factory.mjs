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
import { RecordStore } from './record.store';
import { RecordFetchGQL } from './graphql/api.record.get';
import { RecordSaveGQL } from './graphql/api.record.save';
import { MessageService } from '../../services/message/message.service';
import { RecordManager } from '../../services/record/record.manager';
import { BaseSaveRecordMapper } from './record-mappers/base-save.record-mapper';
import * as i0 from "@angular/core";
import * as i1 from "./graphql/api.record.get";
import * as i2 from "./graphql/api.record.save";
import * as i3 from "../../services/message/message.service";
import * as i4 from "../../services/record/record.manager";
import * as i5 from "common";
import * as i6 from "./record-mappers/base-save.record-mapper";
class RecordStoreFactory {
    constructor(recordFetchGQL, recordSaveGQL, message, recordManager, recordMappers, baseMapper) {
        this.recordFetchGQL = recordFetchGQL;
        this.recordSaveGQL = recordSaveGQL;
        this.message = message;
        this.recordManager = recordManager;
        this.recordMappers = recordMappers;
        this.baseMapper = baseMapper;
        recordMappers.register('default', baseMapper.getKey(), baseMapper);
    }
    create(definitions$) {
        return new RecordStore(definitions$, this.recordSaveGQL, this.recordFetchGQL, this.message, this.recordManager, this.recordMappers);
    }
    static { this.ɵfac = function RecordStoreFactory_Factory(t) { return new (t || RecordStoreFactory)(i0.ɵɵinject(i1.RecordFetchGQL), i0.ɵɵinject(i2.RecordSaveGQL), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.RecordManager), i0.ɵɵinject(i5.RecordMapperRegistry), i0.ɵɵinject(i6.BaseSaveRecordMapper)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordStoreFactory, factory: RecordStoreFactory.ɵfac, providedIn: 'root' }); }
}
export { RecordStoreFactory };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordStoreFactory, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RecordFetchGQL }, { type: i2.RecordSaveGQL }, { type: i3.MessageService }, { type: i4.RecordManager }, { type: i5.RecordMapperRegistry }, { type: i6.BaseSaveRecordMapper }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLnN0b3JlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvcmVjb3JkL3JlY29yZC5zdG9yZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxvQkFBb0IsRUFBc0IsTUFBTSxRQUFRLENBQUM7QUFDakUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7Ozs7QUFFOUUsTUFHYSxrQkFBa0I7SUFFM0IsWUFDYyxjQUE4QixFQUM5QixhQUE0QixFQUM1QixPQUF1QixFQUN2QixhQUE0QixFQUM1QixhQUFtQyxFQUNuQyxVQUFnQztRQUxoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGVBQVUsR0FBVixVQUFVLENBQXNCO1FBRTFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQStDO1FBQ2xELE9BQU8sSUFBSSxXQUFXLENBQ2xCLFlBQVksRUFDWixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsY0FBYyxFQUNuQixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxhQUFhLENBQ3JCLENBQUM7SUFDTixDQUFDO21GQXRCUSxrQkFBa0I7dUVBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmYsTUFBTTs7U0FFVCxrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUg5QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlY29yZE1hcHBlclJlZ2lzdHJ5LCBWaWV3RmllbGREZWZpbml0aW9ufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtSZWNvcmRTdG9yZX0gZnJvbSAnLi9yZWNvcmQuc3RvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7UmVjb3JkRmV0Y2hHUUx9IGZyb20gJy4vZ3JhcGhxbC9hcGkucmVjb3JkLmdldCc7XG5pbXBvcnQge1JlY29yZFNhdmVHUUx9IGZyb20gJy4vZ3JhcGhxbC9hcGkucmVjb3JkLnNhdmUnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRNYW5hZ2VyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZWNvcmQvcmVjb3JkLm1hbmFnZXInO1xuaW1wb3J0IHtCYXNlU2F2ZVJlY29yZE1hcHBlcn0gZnJvbSAnLi9yZWNvcmQtbWFwcGVycy9iYXNlLXNhdmUucmVjb3JkLW1hcHBlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZFN0b3JlRmFjdG9yeSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZEZldGNoR1FMOiBSZWNvcmRGZXRjaEdRTCxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZFNhdmVHUUw6IFJlY29yZFNhdmVHUUwsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZE1hbmFnZXI6IFJlY29yZE1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRNYXBwZXJzOiBSZWNvcmRNYXBwZXJSZWdpc3RyeSxcbiAgICAgICAgcHJvdGVjdGVkIGJhc2VNYXBwZXI6IEJhc2VTYXZlUmVjb3JkTWFwcGVyLFxuICAgICkge1xuICAgICAgICByZWNvcmRNYXBwZXJzLnJlZ2lzdGVyKCdkZWZhdWx0JywgYmFzZU1hcHBlci5nZXRLZXkoKSwgYmFzZU1hcHBlcik7XG4gICAgfVxuXG4gICAgY3JlYXRlKGRlZmluaXRpb25zJDogT2JzZXJ2YWJsZTxWaWV3RmllbGREZWZpbml0aW9uW10+KTogUmVjb3JkU3RvcmUge1xuICAgICAgICByZXR1cm4gbmV3IFJlY29yZFN0b3JlKFxuICAgICAgICAgICAgZGVmaW5pdGlvbnMkLFxuICAgICAgICAgICAgdGhpcy5yZWNvcmRTYXZlR1FMLFxuICAgICAgICAgICAgdGhpcy5yZWNvcmRGZXRjaEdRTCxcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRoaXMucmVjb3JkTWFuYWdlcixcbiAgICAgICAgICAgIHRoaXMucmVjb3JkTWFwcGVyc1xuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==