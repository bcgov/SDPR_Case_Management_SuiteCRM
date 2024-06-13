/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { BaseActionManager } from '../../../services/actions/base-action-manager.service';
import { AsyncProcessTableAction } from "./async-process/async-process.table.action";
import { SelectColumnsTableAction } from "./select-columns/select-columns.table.action";
import * as i0 from "@angular/core";
import * as i1 from "./async-process/async-process.table.action";
import * as i2 from "./select-columns/select-columns.table.action";
class TableActionManager extends BaseActionManager {
    constructor(async, selectColumns) {
        super();
        this.async = async;
        this.selectColumns = selectColumns;
        selectColumns.modes.forEach(mode => this.actions[mode][selectColumns.key] = selectColumns);
        async.modes.forEach(mode => this.actions[mode][async.key] = async);
    }
    static { this.ɵfac = function TableActionManager_Factory(t) { return new (t || TableActionManager)(i0.ɵɵinject(i1.AsyncProcessTableAction), i0.ɵɵinject(i2.SelectColumnsTableAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TableActionManager, factory: TableActionManager.ɵfac, providedIn: 'root' }); }
}
export { TableActionManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableActionManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.AsyncProcessTableAction }, { type: i2.SelectColumnsTableAction }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYWN0aW9uLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9saXN0L3RhYmxlLWFjdGlvbnMvdGFibGUtYWN0aW9uLW1hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUV4RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQzs7OztBQUV0RixNQUdhLGtCQUFtQixTQUFRLGlCQUFrQztJQUV0RSxZQUNjLEtBQThCLEVBQzlCLGFBQXVDO1FBRWpELEtBQUssRUFBRSxDQUFDO1FBSEUsVUFBSyxHQUFMLEtBQUssQ0FBeUI7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBR2pELGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7UUFDM0YsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUN2RSxDQUFDO21GQVRRLGtCQUFrQjt1RUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFGZixNQUFNOztTQUVULGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBSDlCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUFjdGlvbk1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7VGFibGVBY3Rpb25EYXRhfSBmcm9tIFwiLi90YWJsZS5hY3Rpb25cIjtcbmltcG9ydCB7QXN5bmNQcm9jZXNzVGFibGVBY3Rpb259IGZyb20gXCIuL2FzeW5jLXByb2Nlc3MvYXN5bmMtcHJvY2Vzcy50YWJsZS5hY3Rpb25cIjtcbmltcG9ydCB7U2VsZWN0Q29sdW1uc1RhYmxlQWN0aW9ufSBmcm9tIFwiLi9zZWxlY3QtY29sdW1ucy9zZWxlY3QtY29sdW1ucy50YWJsZS5hY3Rpb25cIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVBY3Rpb25NYW5hZ2VyIGV4dGVuZHMgQmFzZUFjdGlvbk1hbmFnZXI8VGFibGVBY3Rpb25EYXRhPiB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jOiBBc3luY1Byb2Nlc3NUYWJsZUFjdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIHNlbGVjdENvbHVtbnM6IFNlbGVjdENvbHVtbnNUYWJsZUFjdGlvbixcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2VsZWN0Q29sdW1ucy5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW3NlbGVjdENvbHVtbnMua2V5XSA9IHNlbGVjdENvbHVtbnMpO1xuICAgICAgICBhc3luYy5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW2FzeW5jLmtleV0gPSBhc3luYyk7XG4gICAgfVxufVxuIl19