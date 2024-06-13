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
import { RecordListStoreFactory } from '../../../store/record-list/record-list.store.factory';
import { map, shareReplay, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/record-list/record-list.store.factory";
class RelateService {
    constructor(recordListStoreFactory) {
        this.recordList = recordListStoreFactory.create();
    }
    init(module) {
        this.recordList.init(module, false);
    }
    search(term, field) {
        const criteria = this.recordList.criteria;
        criteria.filters[field] = {
            field,
            operator: '=',
            values: [term]
        };
        this.recordList.updateSearchCriteria(criteria, false);
        return this.recordList.load(false).pipe(map(value => value.records), take(1), shareReplay(1));
    }
    static { this.ɵfac = function RelateService_Factory(t) { return new (t || RelateService)(i0.ɵɵinject(i1.RecordListStoreFactory)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RelateService, factory: RelateService.ɵfac }); }
}
export { RelateService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RelateService, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordListStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvcmVjb3JkL3JlbGF0ZS9yZWxhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxzREFBc0QsQ0FBQztBQUU1RixPQUFPLEVBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSXRELE1BQ2EsYUFBYTtJQUd0QixZQUFZLHNCQUE4QztRQUN0RCxJQUFJLENBQUMsVUFBVSxHQUFHLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRCxJQUFJLENBQUMsTUFBYztRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVksRUFBRSxLQUFhO1FBRTlCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQzFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUc7WUFDdEIsS0FBSztZQUNMLFFBQVEsRUFBRSxHQUFHO1lBQ2IsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ2pCLENBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDbkMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNqQixDQUFDO0lBQ04sQ0FBQzs4RUExQlEsYUFBYTt1RUFBYixhQUFhLFdBQWIsYUFBYTs7U0FBYixhQUFhO3VGQUFiLGFBQWE7Y0FEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVjb3JkTGlzdFN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3Quc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge1JlY29yZExpc3RTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3Quc3RvcmUnO1xuaW1wb3J0IHttYXAsIHNoYXJlUmVwbGF5LCB0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWxhdGVTZXJ2aWNlIHtcbiAgICByZWNvcmRMaXN0OiBSZWNvcmRMaXN0U3RvcmU7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWNvcmRMaXN0U3RvcmVGYWN0b3J5OiBSZWNvcmRMaXN0U3RvcmVGYWN0b3J5KSB7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdCA9IHJlY29yZExpc3RTdG9yZUZhY3RvcnkuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgaW5pdChtb2R1bGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlY29yZExpc3QuaW5pdChtb2R1bGUsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBzZWFyY2godGVybTogc3RyaW5nLCBmaWVsZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZWNvcmRbXT4ge1xuXG4gICAgICAgIGNvbnN0IGNyaXRlcmlhID0gdGhpcy5yZWNvcmRMaXN0LmNyaXRlcmlhO1xuICAgICAgICBjcml0ZXJpYS5maWx0ZXJzW2ZpZWxkXSA9IHtcbiAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgb3BlcmF0b3I6ICc9JyxcbiAgICAgICAgICAgIHZhbHVlczogW3Rlcm1dXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LnVwZGF0ZVNlYXJjaENyaXRlcmlhKGNyaXRlcmlhLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZExpc3QubG9hZChmYWxzZSkucGlwZShcbiAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiB2YWx1ZS5yZWNvcmRzKSxcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBzaGFyZVJlcGxheSgxKVxuICAgICAgICApO1xuICAgIH1cblxufVxuIl19