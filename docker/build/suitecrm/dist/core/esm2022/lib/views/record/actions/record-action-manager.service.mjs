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
import { RecordCancelAction } from './cancel/record-cancel.action';
import { RecordSaveAction } from './save/record-save.action';
import { RecordToggleWidgetsAction } from './toggle-widgets/record-widget-action.service';
import { RecordEditAction } from './edit/record-edit.action';
import { RecordCreateAction } from './create/record-create.action';
import { RecordSaveNewAction } from './save-new/record-save-new.action';
import { CancelCreateAction } from './cancel-create/cancel-create.action';
import { BaseActionManager } from '../../../services/actions/base-action-manager.service';
import { AsyncProcessRecordAction } from './async-process/async-process.service';
import * as i0 from "@angular/core";
import * as i1 from "./edit/record-edit.action";
import * as i2 from "./create/record-create.action";
import * as i3 from "./toggle-widgets/record-widget-action.service";
import * as i4 from "./cancel/record-cancel.action";
import * as i5 from "./cancel-create/cancel-create.action";
import * as i6 from "./save/record-save.action";
import * as i7 from "./save-new/record-save-new.action";
import * as i8 from "./async-process/async-process.service";
class RecordActionManager extends BaseActionManager {
    constructor(edit, create, toggleWidgets, cancel, cancelCreate, save, saveNew, async) {
        super();
        this.edit = edit;
        this.create = create;
        this.toggleWidgets = toggleWidgets;
        this.cancel = cancel;
        this.cancelCreate = cancelCreate;
        this.save = save;
        this.saveNew = saveNew;
        this.async = async;
        edit.modes.forEach(mode => this.actions[mode][edit.key] = edit);
        create.modes.forEach(mode => this.actions[mode][create.key] = create);
        toggleWidgets.modes.forEach(mode => this.actions[mode][toggleWidgets.key] = toggleWidgets);
        cancel.modes.forEach(mode => this.actions[mode][cancel.key] = cancel);
        save.modes.forEach(mode => this.actions[mode][save.key] = save);
        saveNew.modes.forEach(mode => this.actions[mode][saveNew.key] = saveNew);
        cancelCreate.modes.forEach(mode => this.actions[mode][cancelCreate.key] = cancelCreate);
        async.modes.forEach(mode => this.actions[mode][async.key] = async);
    }
    static { this.ɵfac = function RecordActionManager_Factory(t) { return new (t || RecordActionManager)(i0.ɵɵinject(i1.RecordEditAction), i0.ɵɵinject(i2.RecordCreateAction), i0.ɵɵinject(i3.RecordToggleWidgetsAction), i0.ɵɵinject(i4.RecordCancelAction), i0.ɵɵinject(i5.CancelCreateAction), i0.ɵɵinject(i6.RecordSaveAction), i0.ɵɵinject(i7.RecordSaveNewAction), i0.ɵɵinject(i8.AsyncProcessRecordAction)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordActionManager, factory: RecordActionManager.ɵfac, providedIn: 'root' }); }
}
export { RecordActionManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordActionManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RecordEditAction }, { type: i2.RecordCreateAction }, { type: i3.RecordToggleWidgetsAction }, { type: i4.RecordCancelAction }, { type: i5.CancelCreateAction }, { type: i6.RecordSaveAction }, { type: i7.RecordSaveNewAction }, { type: i8.AsyncProcessRecordAction }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2FjdGlvbnMvcmVjb3JkLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDeEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sdUNBQXVDLENBQUM7Ozs7Ozs7Ozs7QUFHL0UsTUFHYSxtQkFBb0IsU0FBUSxpQkFBbUM7SUFFeEUsWUFDYyxJQUFzQixFQUN0QixNQUEwQixFQUMxQixhQUF3QyxFQUN4QyxNQUEwQixFQUMxQixZQUFnQyxFQUNoQyxJQUFzQixFQUN0QixPQUE0QixFQUM1QixLQUErQjtRQUV6QyxLQUFLLEVBQUUsQ0FBQztRQVRFLFNBQUksR0FBSixJQUFJLENBQWtCO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQzFCLGtCQUFhLEdBQWIsYUFBYSxDQUEyQjtRQUN4QyxXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBMEI7UUFHekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNoRSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7UUFDM0YsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDekUsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUN4RixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7b0ZBckJRLG1CQUFtQjt1RUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGaEIsTUFBTTs7U0FFVCxtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlY29yZEFjdGlvbkRhdGF9IGZyb20gJy4vcmVjb3JkLmFjdGlvbic7XG5pbXBvcnQge1JlY29yZENhbmNlbEFjdGlvbn0gZnJvbSAnLi9jYW5jZWwvcmVjb3JkLWNhbmNlbC5hY3Rpb24nO1xuaW1wb3J0IHtSZWNvcmRTYXZlQWN0aW9ufSBmcm9tICcuL3NhdmUvcmVjb3JkLXNhdmUuYWN0aW9uJztcbmltcG9ydCB7UmVjb3JkVG9nZ2xlV2lkZ2V0c0FjdGlvbn0gZnJvbSAnLi90b2dnbGUtd2lkZ2V0cy9yZWNvcmQtd2lkZ2V0LWFjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkRWRpdEFjdGlvbn0gZnJvbSAnLi9lZGl0L3JlY29yZC1lZGl0LmFjdGlvbic7XG5pbXBvcnQge1JlY29yZENyZWF0ZUFjdGlvbn0gZnJvbSAnLi9jcmVhdGUvcmVjb3JkLWNyZWF0ZS5hY3Rpb24nO1xuaW1wb3J0IHtSZWNvcmRTYXZlTmV3QWN0aW9ufSBmcm9tICcuL3NhdmUtbmV3L3JlY29yZC1zYXZlLW5ldy5hY3Rpb24nO1xuaW1wb3J0IHtDYW5jZWxDcmVhdGVBY3Rpb259IGZyb20gJy4vY2FuY2VsLWNyZWF0ZS9jYW5jZWwtY3JlYXRlLmFjdGlvbic7XG5pbXBvcnQge0Jhc2VBY3Rpb25NYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hY3Rpb25zL2Jhc2UtYWN0aW9uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQge0FzeW5jUHJvY2Vzc1JlY29yZEFjdGlvbn0gZnJvbSAnLi9hc3luYy1wcm9jZXNzL2FzeW5jLXByb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge0FjdGlvbkhhbmRsZXJNYXB9IGZyb20gJ2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZEFjdGlvbk1hbmFnZXIgZXh0ZW5kcyBCYXNlQWN0aW9uTWFuYWdlcjxSZWNvcmRBY3Rpb25EYXRhPiB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGVkaXQ6IFJlY29yZEVkaXRBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGU6IFJlY29yZENyZWF0ZUFjdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIHRvZ2dsZVdpZGdldHM6IFJlY29yZFRvZ2dsZVdpZGdldHNBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBjYW5jZWw6IFJlY29yZENhbmNlbEFjdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIGNhbmNlbENyZWF0ZTogQ2FuY2VsQ3JlYXRlQWN0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZTogUmVjb3JkU2F2ZUFjdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIHNhdmVOZXc6IFJlY29yZFNhdmVOZXdBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBhc3luYzogQXN5bmNQcm9jZXNzUmVjb3JkQWN0aW9uLFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBlZGl0Lm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bZWRpdC5rZXldID0gZWRpdCk7XG4gICAgICAgIGNyZWF0ZS5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW2NyZWF0ZS5rZXldID0gY3JlYXRlKTtcbiAgICAgICAgdG9nZ2xlV2lkZ2V0cy5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW3RvZ2dsZVdpZGdldHMua2V5XSA9IHRvZ2dsZVdpZGdldHMpO1xuICAgICAgICBjYW5jZWwubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtjYW5jZWwua2V5XSA9IGNhbmNlbCk7XG4gICAgICAgIHNhdmUubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtzYXZlLmtleV0gPSBzYXZlKTtcbiAgICAgICAgc2F2ZU5ldy5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW3NhdmVOZXcua2V5XSA9IHNhdmVOZXcpO1xuICAgICAgICBjYW5jZWxDcmVhdGUubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtjYW5jZWxDcmVhdGUua2V5XSA9IGNhbmNlbENyZWF0ZSk7XG4gICAgICAgIGFzeW5jLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bYXN5bmMua2V5XSA9IGFzeW5jKTtcbiAgICB9XG59XG4iXX0=