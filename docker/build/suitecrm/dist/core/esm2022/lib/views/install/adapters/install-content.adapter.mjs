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
import { combineLatestWith, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { LanguageStore } from '../../../store/language/language.store';
import { InstallViewStore } from '../store/install-view/install-view.store';
import { InstallActionManager } from '../actions/install-action-manager.service';
import * as i0 from "@angular/core";
import * as i1 from "../store/install-view/install-view.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
import * as i3 from "../../../store/language/language.store";
import * as i4 from "../actions/install-action-manager.service";
class InstallContentAdapter {
    constructor(store, metadata, language, actions) {
        this.store = store;
        this.metadata = metadata;
        this.language = language;
        this.actions = actions;
    }
    getEditAction() {
    }
    getDisplayConfig() {
        return this.store.getMetadata$().pipe(combineLatestWith(this.store.mode$), map(([meta, mode]) => {
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
        return this.store.getMetadata$().pipe(combineLatestWith(this.store.stagingRecord$, this.language.vm$), map(([meta, record, languages]) => {
            const panels = [];
            const module = (record && record.module) || '';
            meta.panels.forEach(panelDefinition => {
                const label = this.language.getFieldLabel(panelDefinition.key.toUpperCase(), module, languages);
                const panel = {
                    label,
                    key: panelDefinition.key,
                    display$: panelDefinition?.display$ ?? of(true).pipe(shareReplay(1)),
                    rows: []
                };
                panelDefinition.rows.forEach(rowDefinition => {
                    const row = { cols: [] };
                    rowDefinition.cols.forEach(cellDefinition => {
                        row.cols.push({ ...cellDefinition });
                    });
                    panel.rows.push(row);
                });
                panels.push(panel);
            });
            return panels;
        }));
    }
    getRecord() {
        return this.store.stagingRecord$;
    }
    getLayout(meta) {
        let layout = 'panels';
        if (meta.templateMeta.useTabs) {
            layout = 'tabs';
        }
        return layout;
    }
    static { this.ɵfac = function InstallContentAdapter_Factory(t) { return new (t || InstallContentAdapter)(i0.ɵɵinject(i1.InstallViewStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.LanguageStore), i0.ɵɵinject(i4.InstallActionManager)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InstallContentAdapter, factory: InstallContentAdapter.ɵfac }); }
}
export { InstallContentAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallContentAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.InstallViewStore }, { type: i2.MetadataStore }, { type: i3.LanguageStore }, { type: i4.InstallActionManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC1jb250ZW50LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvaW5zdGFsbC9hZGFwdGVycy9pbnN0YWxsLWNvbnRlbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLGlCQUFpQixFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxHQUFHLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBRTdFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7O0FBRy9FLE1BQ2EscUJBQXFCO0lBRzlCLFlBQ2MsS0FBdUIsRUFDdkIsUUFBdUIsRUFDdkIsUUFBdUIsRUFDdkIsT0FBNkI7UUFIN0IsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQXNCO0lBRTNDLENBQUM7SUFFRCxhQUFhO0lBQ2IsQ0FBQztJQUVELGdCQUFnQjtRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ2pDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQ25DLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBa0MsRUFBRSxFQUFFO1lBQ2xELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1lBQ3JELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO1lBRTFDLE9BQU87Z0JBQ0gsTUFBTTtnQkFDTixJQUFJO2dCQUNKLFVBQVU7Z0JBQ1YsT0FBTzthQUNhLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDakMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFDL0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUU7WUFFOUIsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sTUFBTSxHQUFHLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ2xDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNoRyxNQUFNLEtBQUssR0FBRztvQkFDVixLQUFLO29CQUNMLEdBQUcsRUFBRSxlQUFlLENBQUMsR0FBRztvQkFDeEIsUUFBUSxFQUFFLGVBQWUsRUFBRSxRQUFRLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BFLElBQUksRUFBRSxFQUFFO2lCQUNGLENBQUM7Z0JBRVgsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQ3pDLE1BQU0sR0FBRyxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBYSxDQUFDO29CQUNuQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTt3QkFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLGNBQWMsRUFBQyxDQUFDLENBQUM7b0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO29CQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQztnQkFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztJQUNyQyxDQUFDO0lBRVMsU0FBUyxDQUFDLElBQXlCO1FBQ3pDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQzNCLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDbkI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO3NGQTVFUSxxQkFBcUI7dUVBQXJCLHFCQUFxQixXQUFyQixxQkFBcUI7O1NBQXJCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge21hcCwgc2hhcmVSZXBsYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UGFuZWwsIFBhbmVsUm93LCBSZWNvcmQsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkQ29udGVudENvbmZpZywgUmVjb3JkQ29udGVudERhdGFTb3VyY2V9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRlbnQvcmVjb3JkLWNvbnRlbnQubW9kZWwnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0luc3RhbGxWaWV3U3RvcmV9IGZyb20gJy4uL3N0b3JlL2luc3RhbGwtdmlldy9pbnN0YWxsLXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtJbnN0YWxsQWN0aW9uTWFuYWdlcn0gZnJvbSAnLi4vYWN0aW9ucy9pbnN0YWxsLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtJbnN0YWxsVmlld01ldGFkYXRhfSBmcm9tICcuLi9zdG9yZS9pbnN0YWxsLXZpZXcvaW5zdGFsbC12aWV3LnN0b3JlLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluc3RhbGxDb250ZW50QWRhcHRlciBpbXBsZW1lbnRzIFJlY29yZENvbnRlbnREYXRhU291cmNlIHtcbiAgICBpbmxpbmVFZGl0OiB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzdG9yZTogSW5zdGFsbFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25zOiBJbnN0YWxsQWN0aW9uTWFuYWdlclxuICAgICkge1xuICAgIH1cblxuICAgIGdldEVkaXRBY3Rpb24oKTogdm9pZCB7XG4gICAgfVxuXG4gICAgZ2V0RGlzcGxheUNvbmZpZygpOiBPYnNlcnZhYmxlPFJlY29yZENvbnRlbnRDb25maWc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0TWV0YWRhdGEkKCkucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMuc3RvcmUubW9kZSQpLFxuICAgICAgICAgICAgbWFwKChbbWV0YSwgbW9kZV06IFtJbnN0YWxsVmlld01ldGFkYXRhLCBWaWV3TW9kZV0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXlvdXQgPSB0aGlzLmdldExheW91dChtZXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhDb2x1bW5zID0gbWV0YS50ZW1wbGF0ZU1ldGEubWF4Q29sdW1ucyB8fCAyO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYkRlZnMgPSBtZXRhLnRlbXBsYXRlTWV0YS50YWJEZWZzO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgICAgICAgICBtYXhDb2x1bW5zLFxuICAgICAgICAgICAgICAgICAgICB0YWJEZWZzXG4gICAgICAgICAgICAgICAgfSBhcyBSZWNvcmRDb250ZW50Q29uZmlnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRQYW5lbHMoKTogT2JzZXJ2YWJsZTxQYW5lbFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldE1ldGFkYXRhJCgpLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLnN0b3JlLnN0YWdpbmdSZWNvcmQkLCB0aGlzLmxhbmd1YWdlLnZtJCksXG4gICAgICAgICAgICBtYXAoKFttZXRhLCByZWNvcmQsIGxhbmd1YWdlc10pID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBhbmVscyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IChyZWNvcmQgJiYgcmVjb3JkLm1vZHVsZSkgfHwgJyc7XG5cbiAgICAgICAgICAgICAgICBtZXRhLnBhbmVscy5mb3JFYWNoKHBhbmVsRGVmaW5pdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYW5ndWFnZS5nZXRGaWVsZExhYmVsKHBhbmVsRGVmaW5pdGlvbi5rZXkudG9VcHBlckNhc2UoKSwgbW9kdWxlLCBsYW5ndWFnZXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYW5lbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwYW5lbERlZmluaXRpb24ua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheSQ6IHBhbmVsRGVmaW5pdGlvbj8uZGlzcGxheSQgPz8gb2YodHJ1ZSkucGlwZShzaGFyZVJlcGxheSgxKSksXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBbXVxuICAgICAgICAgICAgICAgICAgICB9IGFzIFBhbmVsO1xuXG4gICAgICAgICAgICAgICAgICAgIHBhbmVsRGVmaW5pdGlvbi5yb3dzLmZvckVhY2gocm93RGVmaW5pdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSB7Y29sczogW119IGFzIFBhbmVsUm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93RGVmaW5pdGlvbi5jb2xzLmZvckVhY2goY2VsbERlZmluaXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5jb2xzLnB1c2goey4uLmNlbGxEZWZpbml0aW9ufSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhbmVsLnJvd3MucHVzaChyb3cpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBwYW5lbHMucHVzaChwYW5lbCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFuZWxzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRSZWNvcmQoKTogT2JzZXJ2YWJsZTxSZWNvcmQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuc3RhZ2luZ1JlY29yZCQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldExheW91dChtZXRhOiBJbnN0YWxsVmlld01ldGFkYXRhKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGxheW91dCA9ICdwYW5lbHMnO1xuICAgICAgICBpZiAobWV0YS50ZW1wbGF0ZU1ldGEudXNlVGFicykge1xuICAgICAgICAgICAgbGF5b3V0ID0gJ3RhYnMnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxheW91dDtcbiAgICB9XG59XG4iXX0=