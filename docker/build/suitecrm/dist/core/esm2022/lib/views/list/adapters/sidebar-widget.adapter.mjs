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
import { combineLatestWith } from 'rxjs';
import { map } from 'rxjs/operators';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { ListViewStore } from '../store/list-view/list-view.store';
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
class ListViewSidebarWidgetAdapter {
    constructor(store, metadata) {
        this.store = store;
        this.metadata = metadata;
        this.config$ = this.metadata.listMetadata$.pipe(combineLatestWith(this.store.showSidebarWidgets$, this.store.widgets$), map(([metadata, show, widgetsEnabled]) => {
            if (metadata.sidebarWidgets && metadata.sidebarWidgets.length) {
                metadata.sidebarWidgets.forEach(widget => {
                    if (widget && widget.refreshOn === 'data-update') {
                        widget.reload$ = this.store.dataSetUpdate$.pipe(map(() => true));
                    }
                    else if (widget && widget.refreshOn === 'data-reload') {
                        widget.reload$ = this.store.records$.pipe(map(() => true));
                    }
                });
            }
            return {
                widgets: metadata.sidebarWidgets || [],
                show,
                widgetsEnabled,
            };
        }));
    }
    static { this.ɵfac = function ListViewSidebarWidgetAdapter_Factory(t) { return new (t || ListViewSidebarWidgetAdapter)(i0.ɵɵinject(i1.ListViewStore), i0.ɵɵinject(i2.MetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewSidebarWidgetAdapter, factory: ListViewSidebarWidgetAdapter.ɵfac }); }
}
export { ListViewSidebarWidgetAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewSidebarWidgetAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci13aWRnZXQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9saXN0L2FkYXB0ZXJzL3NpZGViYXItd2lkZ2V0LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDN0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9DQUFvQyxDQUFDOzs7O0FBRWpFLE1BQ2EsNEJBQTRCO0lBMEJyQyxZQUNjLEtBQW9CLEVBQ3BCLFFBQXVCO1FBRHZCLFVBQUssR0FBTCxLQUFLLENBQWU7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQTFCckMsWUFBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDdEMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUN0RSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLEVBQUUsRUFBRTtZQUVyQyxJQUFJLFFBQVEsQ0FBQyxjQUFjLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzNELFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUVyQyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLGFBQWEsRUFBRTt3QkFDOUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQ3BFO3lCQUFNLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssYUFBYSxFQUFFO3dCQUNyRCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDOUQ7Z0JBRUwsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUVELE9BQU87Z0JBQ0gsT0FBTyxFQUFFLFFBQVEsQ0FBQyxjQUFjLElBQUksRUFBRTtnQkFDdEMsSUFBSTtnQkFDSixjQUFjO2FBQ2pCLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDTCxDQUFDO0lBTUYsQ0FBQzs2RkE5QlEsNEJBQTRCO3VFQUE1Qiw0QkFBNEIsV0FBNUIsNEJBQTRCOztTQUE1Qiw0QkFBNEI7dUZBQTVCLDRCQUE0QjtjQUR4QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7TGlzdFZpZXdTdG9yZX0gZnJvbSAnLi4vc3RvcmUvbGlzdC12aWV3L2xpc3Qtdmlldy5zdG9yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1NpZGViYXJXaWRnZXRBZGFwdGVyIHtcblxuICAgIGNvbmZpZyQgPSB0aGlzLm1ldGFkYXRhLmxpc3RNZXRhZGF0YSQucGlwZShcbiAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5zdG9yZS5zaG93U2lkZWJhcldpZGdldHMkLCB0aGlzLnN0b3JlLndpZGdldHMkKSxcbiAgICAgICAgbWFwKChbbWV0YWRhdGEsIHNob3csIHdpZGdldHNFbmFibGVkXSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAobWV0YWRhdGEuc2lkZWJhcldpZGdldHMgJiYgbWV0YWRhdGEuc2lkZWJhcldpZGdldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEuc2lkZWJhcldpZGdldHMuZm9yRWFjaCh3aWRnZXQgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXQgJiYgd2lkZ2V0LnJlZnJlc2hPbiA9PT0gJ2RhdGEtdXBkYXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnJlbG9hZCQgPSB0aGlzLnN0b3JlLmRhdGFTZXRVcGRhdGUkLnBpcGUobWFwKCgpID0+IHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aWRnZXQgJiYgd2lkZ2V0LnJlZnJlc2hPbiA9PT0gJ2RhdGEtcmVsb2FkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnJlbG9hZCQgPSB0aGlzLnN0b3JlLnJlY29yZHMkLnBpcGUobWFwKCgpID0+IHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0czogbWV0YWRhdGEuc2lkZWJhcldpZGdldHMgfHwgW10sXG4gICAgICAgICAgICAgICAgc2hvdyxcbiAgICAgICAgICAgICAgICB3aWRnZXRzRW5hYmxlZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IExpc3RWaWV3U3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YTogTWV0YWRhdGFTdG9yZVxuICAgICkge1xuICAgIH1cblxufVxuIl19