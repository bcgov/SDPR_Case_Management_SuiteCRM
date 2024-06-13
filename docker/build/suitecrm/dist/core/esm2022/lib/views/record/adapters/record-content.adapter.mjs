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
import { combineLatestWith } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { RecordActionManager } from '../actions/record-action-manager.service';
import { LanguageStore } from '../../../store/language/language.store';
import { RecordViewStore } from '../store/record-view/record-view.store';
import { PanelLogicManager } from '../../../components/panel-logic/panel-logic.manager';
import * as i0 from "@angular/core";
import * as i1 from "../store/record-view/record-view.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
import * as i3 from "../../../store/language/language.store";
import * as i4 from "../actions/record-action-manager.service";
import * as i5 from "../../../components/panel-logic/panel-logic.manager";
class RecordContentAdapter {
    constructor(store, metadata, language, actions, logicManager) {
        this.store = store;
        this.metadata = metadata;
        this.language = language;
        this.actions = actions;
        this.logicManager = logicManager;
        this.fieldSubs = [];
    }
    getEditAction() {
        const data = {
            store: this.store
        };
        const action = {
            key: 'edit'
        };
        this.actions.run(action, this.store.getMode(), data);
    }
    getDisplayConfig() {
        return this.metadata.recordViewMetadata$.pipe(combineLatestWith(this.store.mode$), map(([meta, mode]) => {
            const layout = this.getLayout(meta);
            const maxColumns = meta.templateMeta.maxColumns || 2;
            const tabDefs = meta.templateMeta.tabDefs;
            return {
                layout,
                mode,
                maxColumns,
                tabDefs
            };
        }));
    }
    getPanels() {
        return this.store.panels$;
    }
    getRecord() {
        return this.store.stagingRecord$.pipe(combineLatestWith(this.store.mode$), map(([record, mode]) => {
            if (mode === 'edit' || mode === 'create') {
                this.store.initValidators(record);
            }
            else {
                this.store.resetValidatorsForAllFields(record);
            }
            if (record.formGroup) {
                record.formGroup.enable();
            }
            return record;
        }));
    }
    getLayout(recordMeta) {
        let layout = 'panels';
        if (recordMeta.templateMeta.useTabs) {
            layout = 'tabs';
        }
        return layout;
    }
    clean() {
        this.fieldSubs.forEach(sub => sub.unsubscribe());
    }
    static { this.ɵfac = function RecordContentAdapter_Factory(t) { return new (t || RecordContentAdapter)(i0.ɵɵinject(i1.RecordViewStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.LanguageStore), i0.ɵɵinject(i4.RecordActionManager), i0.ɵɵinject(i5.PanelLogicManager)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordContentAdapter, factory: RecordContentAdapter.ɵfac }); }
}
export { RecordContentAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordContentAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordViewStore }, { type: i2.MetadataStore }, { type: i3.LanguageStore }, { type: i4.RecordActionManager }, { type: i5.PanelLogicManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNvbnRlbnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvYWRhcHRlcnMvcmVjb3JkLWNvbnRlbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLGlCQUFpQixFQUEyQixNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuQyxPQUFPLEVBQUMsYUFBYSxFQUFxQixNQUFNLGdEQUFnRCxDQUFDO0FBRWpHLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBRTdFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDdkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scURBQXFELENBQUM7Ozs7Ozs7QUFFdEYsTUFDYSxvQkFBb0I7SUFLN0IsWUFDYyxLQUFzQixFQUN0QixRQUF1QixFQUN2QixRQUF1QixFQUN2QixPQUE0QixFQUM1QixZQUErQjtRQUovQixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBUG5DLGNBQVMsR0FBbUIsRUFBRSxDQUFDO0lBU3pDLENBQUM7SUFFRCxhQUFhO1FBQ1QsTUFBTSxJQUFJLEdBQXFCO1lBQzNCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNwQixDQUFDO1FBRUYsTUFBTSxNQUFNLEdBQUc7WUFDWCxHQUFHLEVBQUUsTUFBTTtTQUNKLENBQUM7UUFFWixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsZ0JBQWdCO1FBRVosT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FDekMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFDbkMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFpQyxFQUFFLEVBQUU7WUFDakQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7WUFDckQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7WUFFMUMsT0FBTztnQkFDSCxNQUFNO2dCQUNOLElBQUk7Z0JBQ0osVUFBVTtnQkFDVixPQUFPO2FBQ2EsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ2pDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQ25DLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBcUIsRUFBRSxFQUFFO1lBQ3ZDLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xEO1lBRUQsSUFBRyxNQUFNLENBQUMsU0FBUyxFQUFFO2dCQUNqQixNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzdCO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFFUyxTQUFTLENBQUMsVUFBOEI7UUFDOUMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFDakMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUNuQjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO3FGQTlFUSxvQkFBb0I7dUVBQXBCLG9CQUFvQixXQUFwQixvQkFBb0I7O1NBQXBCLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QWN0aW9uLCBQYW5lbCwgUmVjb3JkLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZSwgUmVjb3JkVmlld01ldGFkYXRhfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkQ29udGVudENvbmZpZywgUmVjb3JkQ29udGVudERhdGFTb3VyY2V9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRlbnQvcmVjb3JkLWNvbnRlbnQubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmRBY3Rpb25NYW5hZ2VyfSBmcm9tICcuLi9hY3Rpb25zL3JlY29yZC1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkQWN0aW9uRGF0YX0gZnJvbSAnLi4vYWN0aW9ucy9yZWNvcmQuYWN0aW9uJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRWaWV3U3RvcmV9IGZyb20gJy4uL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlJztcbmltcG9ydCB7UGFuZWxMb2dpY01hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcGFuZWwtbG9naWMvcGFuZWwtbG9naWMubWFuYWdlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWNvcmRDb250ZW50QWRhcHRlciBpbXBsZW1lbnRzIFJlY29yZENvbnRlbnREYXRhU291cmNlIHtcbiAgICBpbmxpbmVFZGl0OiB0cnVlO1xuXG4gICAgcHJvdGVjdGVkIGZpZWxkU3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IFJlY29yZFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25zOiBSZWNvcmRBY3Rpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNNYW5hZ2VyOiBQYW5lbExvZ2ljTWFuYWdlclxuICAgICkge1xuICAgIH1cblxuICAgIGdldEVkaXRBY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRhdGE6IFJlY29yZEFjdGlvbkRhdGEgPSB7XG4gICAgICAgICAgICBzdG9yZTogdGhpcy5zdG9yZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgICAgIGtleTogJ2VkaXQnXG4gICAgICAgIH0gYXMgQWN0aW9uO1xuXG4gICAgICAgIHRoaXMuYWN0aW9ucy5ydW4oYWN0aW9uLCB0aGlzLnN0b3JlLmdldE1vZGUoKSwgZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0RGlzcGxheUNvbmZpZygpOiBPYnNlcnZhYmxlPFJlY29yZENvbnRlbnRDb25maWc+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5tZXRhZGF0YS5yZWNvcmRWaWV3TWV0YWRhdGEkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLnN0b3JlLm1vZGUkKSxcbiAgICAgICAgICAgIG1hcCgoW21ldGEsIG1vZGVdOiBbUmVjb3JkVmlld01ldGFkYXRhLCBWaWV3TW9kZV0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXlvdXQgPSB0aGlzLmdldExheW91dChtZXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhDb2x1bW5zID0gbWV0YS50ZW1wbGF0ZU1ldGEubWF4Q29sdW1ucyB8fCAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYkRlZnMgPSBtZXRhLnRlbXBsYXRlTWV0YS50YWJEZWZzO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgICAgICAgICBtYXhDb2x1bW5zLFxuICAgICAgICAgICAgICAgICAgICB0YWJEZWZzXG4gICAgICAgICAgICAgICAgfSBhcyBSZWNvcmRDb250ZW50Q29uZmlnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRQYW5lbHMoKTogT2JzZXJ2YWJsZTxQYW5lbFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnBhbmVscyQ7XG4gICAgfVxuXG4gICAgZ2V0UmVjb3JkKCk6IE9ic2VydmFibGU8UmVjb3JkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnN0YWdpbmdSZWNvcmQkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLnN0b3JlLm1vZGUkKSxcbiAgICAgICAgICAgIG1hcCgoW3JlY29yZCwgbW9kZV06IFtSZWNvcmQsIFZpZXdNb2RlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnZWRpdCcgfHwgbW9kZSA9PT0gJ2NyZWF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5pbml0VmFsaWRhdG9ycyhyZWNvcmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucmVzZXRWYWxpZGF0b3JzRm9yQWxsRmllbGRzKHJlY29yZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYocmVjb3JkLmZvcm1Hcm91cCkge1xuICAgICAgICAgICAgICAgICAgICByZWNvcmQuZm9ybUdyb3VwLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjb3JkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TGF5b3V0KHJlY29yZE1ldGE6IFJlY29yZFZpZXdNZXRhZGF0YSk6IHN0cmluZyB7XG4gICAgICAgIGxldCBsYXlvdXQgPSAncGFuZWxzJztcbiAgICAgICAgaWYgKHJlY29yZE1ldGEudGVtcGxhdGVNZXRhLnVzZVRhYnMpIHtcbiAgICAgICAgICAgIGxheW91dCA9ICd0YWJzJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYXlvdXQ7XG4gICAgfVxuXG4gICAgY2xlYW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmllbGRTdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cblxufVxuIl19