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
import { AsyncProcessRecordThreadItemAction } from './async-process/async-process.service';
import { RecordThreadItemCancelAction } from './cancel/record-cancel.action';
import { RecordThreadItemEditAction } from './edit/record-edit.action';
import { RecordThreadItemSaveAction } from './save/record-save.action';
import * as i0 from "@angular/core";
import * as i1 from "./async-process/async-process.service";
import * as i2 from "./cancel/record-cancel.action";
import * as i3 from "./edit/record-edit.action";
import * as i4 from "./save/record-save.action";
class RecordThreadItemActionManager extends BaseActionManager {
    constructor(async, cancel, edit, save) {
        super();
        this.async = async;
        this.cancel = cancel;
        this.edit = edit;
        this.save = save;
        async.modes.forEach(mode => this.actions[mode][async.key] = async);
        edit.modes.forEach(mode => this.actions[mode][edit.key] = edit);
        save.modes.forEach(mode => this.actions[mode][save.key] = save);
        cancel.modes.forEach(mode => this.actions[mode][cancel.key] = cancel);
    }
    static { this.ɵfac = function RecordThreadItemActionManager_Factory(t) { return new (t || RecordThreadItemActionManager)(i0.ɵɵinject(i1.AsyncProcessRecordThreadItemAction), i0.ɵɵinject(i2.RecordThreadItemCancelAction), i0.ɵɵinject(i3.RecordThreadItemEditAction), i0.ɵɵinject(i4.RecordThreadItemSaveAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordThreadItemActionManager, factory: RecordThreadItemActionManager.ɵfac, providedIn: 'root' }); }
}
export { RecordThreadItemActionManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadItemActionManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.AsyncProcessRecordThreadItemAction }, { type: i2.RecordThreadItemCancelAction }, { type: i3.RecordThreadItemEditAction }, { type: i4.RecordThreadItemSaveAction }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC1pdGVtLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtdGhyZWFkL2FjdGlvbnMvaXRlbS1hY3Rpb25zL3JlY29yZC10aHJlYWQtaXRlbS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBEQUEwRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyxrQ0FBa0MsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBRXpGLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzNFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3JFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7QUFFckUsTUFHYSw2QkFBOEIsU0FBUSxpQkFBNkM7SUFFNUYsWUFDYyxLQUF5QyxFQUN6QyxNQUFvQyxFQUNwQyxJQUFnQyxFQUNoQyxJQUFnQztRQUUxQyxLQUFLLEVBQUUsQ0FBQztRQUxFLFVBQUssR0FBTCxLQUFLLENBQW9DO1FBQ3pDLFdBQU0sR0FBTixNQUFNLENBQThCO1FBQ3BDLFNBQUksR0FBSixJQUFJLENBQTRCO1FBQ2hDLFNBQUksR0FBSixJQUFJLENBQTRCO1FBRzFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDMUUsQ0FBQzs4RkFiUSw2QkFBNkI7dUVBQTdCLDZCQUE2QixXQUE3Qiw2QkFBNkIsbUJBRjFCLE1BQU07O1NBRVQsNkJBQTZCO3VGQUE3Qiw2QkFBNkI7Y0FIekMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlQWN0aW9uTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvYWN0aW9ucy9iYXNlLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtBc3luY1Byb2Nlc3NSZWNvcmRUaHJlYWRJdGVtQWN0aW9ufSBmcm9tICcuL2FzeW5jLXByb2Nlc3MvYXN5bmMtcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbUFjdGlvbkRhdGF9IGZyb20gJy4vcmVjb3JkLXRocmVhZC1pdGVtLmFjdGlvbic7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1DYW5jZWxBY3Rpb259IGZyb20gJy4vY2FuY2VsL3JlY29yZC1jYW5jZWwuYWN0aW9uJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbUVkaXRBY3Rpb259IGZyb20gJy4vZWRpdC9yZWNvcmQtZWRpdC5hY3Rpb24nO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRJdGVtU2F2ZUFjdGlvbn0gZnJvbSAnLi9zYXZlL3JlY29yZC1zYXZlLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZFRocmVhZEl0ZW1BY3Rpb25NYW5hZ2VyIGV4dGVuZHMgQmFzZUFjdGlvbk1hbmFnZXI8UmVjb3JkVGhyZWFkSXRlbUFjdGlvbkRhdGE+IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmM6IEFzeW5jUHJvY2Vzc1JlY29yZFRocmVhZEl0ZW1BY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBjYW5jZWw6IFJlY29yZFRocmVhZEl0ZW1DYW5jZWxBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBlZGl0OiBSZWNvcmRUaHJlYWRJdGVtRWRpdEFjdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIHNhdmU6IFJlY29yZFRocmVhZEl0ZW1TYXZlQWN0aW9uLFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBhc3luYy5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW2FzeW5jLmtleV0gPSBhc3luYyk7XG4gICAgICAgIGVkaXQubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtlZGl0LmtleV0gPSBlZGl0KTtcbiAgICAgICAgc2F2ZS5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW3NhdmUua2V5XSA9IHNhdmUpO1xuICAgICAgICBjYW5jZWwubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtjYW5jZWwua2V5XSA9IGNhbmNlbCk7XG4gICAgfVxufVxuIl19