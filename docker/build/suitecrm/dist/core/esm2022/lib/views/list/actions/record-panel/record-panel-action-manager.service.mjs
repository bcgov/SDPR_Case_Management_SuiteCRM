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
import { BaseActionManager } from '../../../../services/actions/base-action-manager.service';
import { CancelRecordPanelAction } from './cancel/cancel.record-panel.action';
import { RunBulkActionRecordPanelAction } from './bulk-action/run-bulk-action.record-panel.action';
import * as i0 from "@angular/core";
import * as i1 from "./bulk-action/run-bulk-action.record-panel.action";
import * as i2 from "./cancel/cancel.record-panel.action";
class RecordPanelActionManager extends BaseActionManager {
    constructor(runBulkAction, cancel) {
        super();
        runBulkAction.modes.forEach(mode => this.actions[mode][runBulkAction.key] = runBulkAction);
        cancel.modes.forEach(mode => this.actions[mode][cancel.key] = cancel);
    }
    static { this.ɵfac = function RecordPanelActionManager_Factory(t) { return new (t || RecordPanelActionManager)(i0.ɵɵinject(i1.RunBulkActionRecordPanelAction), i0.ɵɵinject(i2.CancelRecordPanelAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordPanelActionManager, factory: RecordPanelActionManager.ɵfac, providedIn: 'root' }); }
}
export { RecordPanelActionManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordPanelActionManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RunBulkActionRecordPanelAction }, { type: i2.CancelRecordPanelAction }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXBhbmVsLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9hY3Rpb25zL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwtYWN0aW9uLW1hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUUzRixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQzs7OztBQUVqRyxNQUdhLHdCQUF5QixTQUFRLGlCQUFnRDtJQUUxRixZQUNJLGFBQTZDLEVBQzdDLE1BQStCO1FBRS9CLEtBQUssRUFBRSxDQUFDO1FBRVIsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQztRQUMzRixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzFFLENBQUM7eUZBVlEsd0JBQXdCO3VFQUF4Qix3QkFBd0IsV0FBeEIsd0JBQXdCLG1CQUZyQixNQUFNOztTQUVULHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBSHBDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmFzZUFjdGlvbk1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7TGlzdFZpZXdSZWNvcmRQYW5lbEFjdGlvbkRhdGF9IGZyb20gJy4vcmVjb3JkLXBhbmVsLmFjdGlvbic7XG5pbXBvcnQge0NhbmNlbFJlY29yZFBhbmVsQWN0aW9ufSBmcm9tICcuL2NhbmNlbC9jYW5jZWwucmVjb3JkLXBhbmVsLmFjdGlvbic7XG5pbXBvcnQge1J1bkJ1bGtBY3Rpb25SZWNvcmRQYW5lbEFjdGlvbn0gZnJvbSAnLi9idWxrLWFjdGlvbi9ydW4tYnVsay1hY3Rpb24ucmVjb3JkLXBhbmVsLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZFBhbmVsQWN0aW9uTWFuYWdlciBleHRlbmRzIEJhc2VBY3Rpb25NYW5hZ2VyPExpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25EYXRhPiB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcnVuQnVsa0FjdGlvbjogUnVuQnVsa0FjdGlvblJlY29yZFBhbmVsQWN0aW9uLFxuICAgICAgICBjYW5jZWw6IENhbmNlbFJlY29yZFBhbmVsQWN0aW9uLFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHJ1bkJ1bGtBY3Rpb24ubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtydW5CdWxrQWN0aW9uLmtleV0gPSBydW5CdWxrQWN0aW9uKTtcbiAgICAgICAgY2FuY2VsLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bY2FuY2VsLmtleV0gPSBjYW5jZWwpO1xuICAgIH1cbn1cbiJdfQ==