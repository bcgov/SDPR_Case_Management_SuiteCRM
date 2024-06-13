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
import { RecordThreadStore } from './record-thread.store';
import { RecordListStoreFactory } from '../../../../store/record-list/record-list.store.factory';
import { RecordThreadItemStoreFactory } from './record-thread-item.store.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record-list/record-list.store.factory";
import * as i2 from "./record-thread-item.store.factory";
class RecordThreadStoreFactory {
    constructor(recordListFactory, recordStoreFactory) {
        this.recordListFactory = recordListFactory;
        this.recordStoreFactory = recordStoreFactory;
    }
    create() {
        return new RecordThreadStore(this.recordListFactory, this.recordStoreFactory);
    }
    static { this.ɵfac = function RecordThreadStoreFactory_Factory(t) { return new (t || RecordThreadStoreFactory)(i0.ɵɵinject(i1.RecordListStoreFactory), i0.ɵɵinject(i2.RecordThreadItemStoreFactory)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordThreadStoreFactory, factory: RecordThreadStoreFactory.ɵfac, providedIn: 'root' }); }
}
export { RecordThreadStoreFactory };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadStoreFactory, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RecordListStoreFactory }, { type: i2.RecordThreadItemStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC5zdG9yZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvcmVjb3JkLXRocmVhZC9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQuc3RvcmUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUMvRixPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQzs7OztBQUVoRixNQUdhLHdCQUF3QjtJQUVqQyxZQUNjLGlCQUF5QyxFQUN6QyxrQkFBZ0Q7UUFEaEQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF3QjtRQUN6Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQThCO0lBRTlELENBQUM7SUFFRCxNQUFNO1FBQ0YsT0FBTyxJQUFJLGlCQUFpQixDQUN4QixJQUFJLENBQUMsaUJBQWlCLEVBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FDMUIsQ0FBQztJQUNOLENBQUM7eUZBYlEsd0JBQXdCO3VFQUF4Qix3QkFBd0IsV0FBeEIsd0JBQXdCLG1CQUZyQixNQUFNOztTQUVULHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBSHBDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkU3RvcmV9IGZyb20gJy4vcmVjb3JkLXRocmVhZC5zdG9yZSc7XG5pbXBvcnQge1JlY29yZExpc3RTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC1saXN0L3JlY29yZC1saXN0LnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRJdGVtU3RvcmVGYWN0b3J5fSBmcm9tICcuL3JlY29yZC10aHJlYWQtaXRlbS5zdG9yZS5mYWN0b3J5JztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkVGhyZWFkU3RvcmVGYWN0b3J5IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkTGlzdEZhY3Rvcnk6IFJlY29yZExpc3RTdG9yZUZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRTdG9yZUZhY3Rvcnk6IFJlY29yZFRocmVhZEl0ZW1TdG9yZUZhY3RvcnlcbiAgICApIHtcbiAgICB9XG5cbiAgICBjcmVhdGUoKTogUmVjb3JkVGhyZWFkU3RvcmUge1xuICAgICAgICByZXR1cm4gbmV3IFJlY29yZFRocmVhZFN0b3JlKFxuICAgICAgICAgICAgdGhpcy5yZWNvcmRMaXN0RmFjdG9yeSxcbiAgICAgICAgICAgIHRoaXMucmVjb3JkU3RvcmVGYWN0b3J5XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19