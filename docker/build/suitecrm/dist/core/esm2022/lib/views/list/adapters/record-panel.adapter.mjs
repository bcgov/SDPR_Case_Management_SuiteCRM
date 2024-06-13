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
import { ListViewStore } from '../store/list-view/list-view.store';
import { ListViewRecordPanelActionAdapterFactory } from './record-panel-actions.adapter.factory';
import { RecordPanelStoreFactory } from '../../../containers/record-panel/store/record-panel/record-panel.store.factory';
import { RecordManager } from '../../../services/record/record.manager';
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
import * as i2 from "../../../containers/record-panel/store/record-panel/record-panel.store.factory";
import * as i3 from "./record-panel-actions.adapter.factory";
import * as i4 from "../../../services/record/record.manager";
class RecordPanelAdapter {
    constructor(store, recordPanelStoreFactory, actionAdapterFactory, recordManager) {
        this.store = store;
        this.recordPanelStoreFactory = recordPanelStoreFactory;
        this.actionAdapterFactory = actionAdapterFactory;
        this.recordManager = recordManager;
    }
    getConfig() {
        const store = this.createStore();
        return {
            module: this.getModule(),
            title: (this.store.recordPanelConfig && this.store.recordPanelConfig.title) || '',
            store: store,
            meta: this.store.recordPanelConfig,
            actions: this.createActionAdapter(store),
            onClose: () => {
                this.store.closeRecordPanel();
            },
        };
    }
    /**
     * Get configured module
     * @returns {string} module
     */
    getModule() {
        return this.store.recordPanelConfig.module || this.store.getModuleName();
    }
    /**
     * Get configured view mode
     * @returns {string} ViewMode
     */
    getViewMode() {
        return this.store.recordPanelConfig.mode || 'edit';
    }
    /**
     * Create and init store
     * @returns {object} RecordPanelStore
     */
    createStore() {
        const store = this.recordPanelStoreFactory.create();
        const blankRecord = this.recordManager.buildEmptyRecord(this.getModule());
        store.setMetadata(this.store.recordPanelConfig);
        store.initRecord(blankRecord, this.getViewMode(), false);
        return store;
    }
    /**
     * Create action adapter
     * @returns {object} BaseRecordActionsAdapter
     */
    createActionAdapter(store) {
        return this.actionAdapterFactory.create(store, this.store);
    }
    static { this.ɵfac = function RecordPanelAdapter_Factory(t) { return new (t || RecordPanelAdapter)(i0.ɵɵinject(i1.ListViewStore), i0.ɵɵinject(i2.RecordPanelStoreFactory), i0.ɵɵinject(i3.ListViewRecordPanelActionAdapterFactory), i0.ɵɵinject(i4.RecordManager)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordPanelAdapter, factory: RecordPanelAdapter.ɵfac }); }
}
export { RecordPanelAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordPanelAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.RecordPanelStoreFactory }, { type: i3.ListViewRecordPanelActionAdapterFactory }, { type: i4.RecordManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXBhbmVsLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9hZGFwdGVycy9yZWNvcmQtcGFuZWwuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFPakUsT0FBTyxFQUFDLHVDQUF1QyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDL0YsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sZ0ZBQWdGLENBQUM7QUFFdkgsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7QUFFdEUsTUFDYSxrQkFBa0I7SUFFM0IsWUFDYyxLQUFvQixFQUNwQix1QkFBZ0QsRUFDaEQsb0JBQTZELEVBQzdELGFBQTRCO1FBSDVCLFVBQUssR0FBTCxLQUFLLENBQWU7UUFDcEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXlDO1FBQzdELGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBRTFDLENBQUM7SUFFRCxTQUFTO1FBQ0wsTUFBTSxLQUFLLEdBQXFCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUduRCxPQUFPO1lBQ0gsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFFeEIsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDakYsS0FBSyxFQUFFLEtBQUs7WUFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUI7WUFFbEMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7WUFFeEMsT0FBTyxFQUFFLEdBQVMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ2xDLENBQUM7U0FFaUIsQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sU0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sV0FBVztRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxJQUFJLE1BQWtCLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7T0FHRztJQUNPLFdBQVc7UUFDakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFMUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXpELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7O09BR0c7SUFDTyxtQkFBbUIsQ0FBQyxLQUF1QjtRQUNqRCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQ25DLEtBQUssRUFDTCxJQUFJLENBQUMsS0FBSyxDQUNiLENBQUE7SUFDTCxDQUFDO21GQXJFUSxrQkFBa0I7dUVBQWxCLGtCQUFrQixXQUFsQixrQkFBa0I7O1NBQWxCLGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xpc3RWaWV3U3RvcmV9IGZyb20gJy4uL3N0b3JlL2xpc3Qtdmlldy9saXN0LXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtcbiAgICBSZWNvcmRQYW5lbEFjdGlvbkRhdGEsXG4gICAgUmVjb3JkUGFuZWxDb25maWdcbn0gZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9yZWNvcmQtcGFuZWwvY29tcG9uZW50cy9yZWNvcmQtcGFuZWwvcmVjb3JkLXBhbmVsLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkUGFuZWxTdG9yZX0gZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9yZWNvcmQtcGFuZWwvc3RvcmUvcmVjb3JkLXBhbmVsL3JlY29yZC1wYW5lbC5zdG9yZSc7XG5pbXBvcnQge0Jhc2VSZWNvcmRBY3Rpb25zQWRhcHRlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYWN0aW9ucy9iYXNlLXJlY29yZC1hY3Rpb24uYWRhcHRlcic7XG5pbXBvcnQge0xpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25BZGFwdGVyRmFjdG9yeX0gZnJvbSAnLi9yZWNvcmQtcGFuZWwtYWN0aW9ucy5hZGFwdGVyLmZhY3RvcnknO1xuaW1wb3J0IHtSZWNvcmRQYW5lbFN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9yZWNvcmQtcGFuZWwvc3RvcmUvcmVjb3JkLXBhbmVsL3JlY29yZC1wYW5lbC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1JlY29yZE1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3JlY29yZC9yZWNvcmQubWFuYWdlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWNvcmRQYW5lbEFkYXB0ZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzdG9yZTogTGlzdFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZFBhbmVsU3RvcmVGYWN0b3J5OiBSZWNvcmRQYW5lbFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbkFkYXB0ZXJGYWN0b3J5OiBMaXN0Vmlld1JlY29yZFBhbmVsQWN0aW9uQWRhcHRlckZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRNYW5hZ2VyOiBSZWNvcmRNYW5hZ2VyXG4gICAgKSB7XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKCk6IFJlY29yZFBhbmVsQ29uZmlnIHtcbiAgICAgICAgY29uc3Qgc3RvcmU6IFJlY29yZFBhbmVsU3RvcmUgPSB0aGlzLmNyZWF0ZVN0b3JlKCk7XG5cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLmdldE1vZHVsZSgpLFxuXG4gICAgICAgICAgICB0aXRsZTogKHRoaXMuc3RvcmUucmVjb3JkUGFuZWxDb25maWcgJiYgdGhpcy5zdG9yZS5yZWNvcmRQYW5lbENvbmZpZy50aXRsZSkgfHwgJycsXG4gICAgICAgICAgICBzdG9yZTogc3RvcmUsXG4gICAgICAgICAgICBtZXRhOiB0aGlzLnN0b3JlLnJlY29yZFBhbmVsQ29uZmlnLFxuXG4gICAgICAgICAgICBhY3Rpb25zOiB0aGlzLmNyZWF0ZUFjdGlvbkFkYXB0ZXIoc3RvcmUpLFxuXG4gICAgICAgICAgICBvbkNsb3NlOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5jbG9zZVJlY29yZFBhbmVsKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIH0gYXMgUmVjb3JkUGFuZWxDb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvbmZpZ3VyZWQgbW9kdWxlXG4gICAgICogQHJldHVybnMge3N0cmluZ30gbW9kdWxlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldE1vZHVsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5yZWNvcmRQYW5lbENvbmZpZy5tb2R1bGUgfHwgdGhpcy5zdG9yZS5nZXRNb2R1bGVOYW1lKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNvbmZpZ3VyZWQgdmlldyBtb2RlXG4gICAgICogQHJldHVybnMge3N0cmluZ30gVmlld01vZGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0Vmlld01vZGUoKTogVmlld01vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5yZWNvcmRQYW5lbENvbmZpZy5tb2RlIHx8ICdlZGl0JyBhcyBWaWV3TW9kZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIGluaXQgc3RvcmVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBSZWNvcmRQYW5lbFN0b3JlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN0b3JlKCk6IFJlY29yZFBhbmVsU3RvcmUge1xuICAgICAgICBjb25zdCBzdG9yZSA9IHRoaXMucmVjb3JkUGFuZWxTdG9yZUZhY3RvcnkuY3JlYXRlKCk7XG4gICAgICAgIGNvbnN0IGJsYW5rUmVjb3JkID0gdGhpcy5yZWNvcmRNYW5hZ2VyLmJ1aWxkRW1wdHlSZWNvcmQodGhpcy5nZXRNb2R1bGUoKSk7XG5cbiAgICAgICAgc3RvcmUuc2V0TWV0YWRhdGEodGhpcy5zdG9yZS5yZWNvcmRQYW5lbENvbmZpZyk7XG4gICAgICAgIHN0b3JlLmluaXRSZWNvcmQoYmxhbmtSZWNvcmQsIHRoaXMuZ2V0Vmlld01vZGUoKSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYWN0aW9uIGFkYXB0ZXJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXJcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQWN0aW9uQWRhcHRlcihzdG9yZTogUmVjb3JkUGFuZWxTdG9yZSk6IEJhc2VSZWNvcmRBY3Rpb25zQWRhcHRlcjxSZWNvcmRQYW5lbEFjdGlvbkRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uQWRhcHRlckZhY3RvcnkuY3JlYXRlKFxuICAgICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgICB0aGlzLnN0b3JlXG4gICAgICAgIClcbiAgICB9XG59XG4iXX0=