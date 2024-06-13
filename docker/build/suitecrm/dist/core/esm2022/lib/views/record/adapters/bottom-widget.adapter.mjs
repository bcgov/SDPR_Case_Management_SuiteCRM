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
import { RecordViewStore } from '../store/record-view/record-view.store';
import * as i0 from "@angular/core";
import * as i1 from "../store/record-view/record-view.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
class BottomWidgetAdapter {
    constructor(store, metadata) {
        this.store = store;
        this.metadata = metadata;
        this.config$ = this.metadata.recordViewMetadata$.pipe(combineLatestWith(this.store.widgets$), map(([metadata, show]) => {
            if (metadata.bottomWidgets && metadata.bottomWidgets.length) {
                metadata.bottomWidgets.forEach(widget => {
                    if (widget && widget.refreshOn === 'data-update') {
                        widget.reload$ = this.store.record$.pipe(map(() => true));
                    }
                    if (widget) {
                        widget.subpanelReload$ = this.store.subpanelReload$;
                    }
                });
            }
            return {
                widgets: metadata.bottomWidgets || [],
                show
            };
        }));
    }
    static { this.ɵfac = function BottomWidgetAdapter_Factory(t) { return new (t || BottomWidgetAdapter)(i0.ɵɵinject(i1.RecordViewStore), i0.ɵɵinject(i2.MetadataStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BottomWidgetAdapter, factory: BottomWidgetAdapter.ɵfac }); }
}
export { BottomWidgetAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottomWidgetAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordViewStore }, { type: i2.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLXdpZGdldC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL3JlY29yZC9hZGFwdGVycy9ib3R0b20td2lkZ2V0LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUMsYUFBYSxFQUFxQixNQUFNLGdEQUFnRCxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQzs7OztBQUV2RSxNQUNhLG1CQUFtQjtJQXlCNUIsWUFDYyxLQUFzQixFQUN0QixRQUF1QjtRQUR2QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBekJyQyxZQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQzVDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQ3RDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBZ0MsRUFBRSxFQUFFO1lBRXBELElBQUksUUFBUSxDQUFDLGFBQWEsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtnQkFDekQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3BDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssYUFBYSxFQUFFO3dCQUM5QyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDN0Q7b0JBRUQsSUFBSSxNQUFNLEVBQUU7d0JBQ1IsTUFBTSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztxQkFDdkQ7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUVELE9BQU87Z0JBQ0gsT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFhLElBQUksRUFBRTtnQkFDckMsSUFBSTthQUNQLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDTCxDQUFDO0lBTUYsQ0FBQztvRkE3QlEsbUJBQW1CO3VFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1COztTQUFuQixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUQvQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlLCBSZWNvcmRWaWV3TWV0YWRhdGF9IGZyb20gJy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRWaWV3U3RvcmV9IGZyb20gJy4uL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJvdHRvbVdpZGdldEFkYXB0ZXIge1xuXG4gICAgY29uZmlnJCA9IHRoaXMubWV0YWRhdGEucmVjb3JkVmlld01ldGFkYXRhJC5waXBlKFxuICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLnN0b3JlLndpZGdldHMkKSxcbiAgICAgICAgbWFwKChbbWV0YWRhdGEsIHNob3ddOiBbUmVjb3JkVmlld01ldGFkYXRhLCBib29sZWFuXSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAobWV0YWRhdGEuYm90dG9tV2lkZ2V0cyAmJiBtZXRhZGF0YS5ib3R0b21XaWRnZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmJvdHRvbVdpZGdldHMuZm9yRWFjaCh3aWRnZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2lkZ2V0ICYmIHdpZGdldC5yZWZyZXNoT24gPT09ICdkYXRhLXVwZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5yZWxvYWQkID0gdGhpcy5zdG9yZS5yZWNvcmQkLnBpcGUobWFwKCgpID0+IHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5zdWJwYW5lbFJlbG9hZCQgPSB0aGlzLnN0b3JlLnN1YnBhbmVsUmVsb2FkJDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZGdldHM6IG1ldGFkYXRhLmJvdHRvbVdpZGdldHMgfHwgW10sXG4gICAgICAgICAgICAgICAgc2hvd1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzdG9yZTogUmVjb3JkVmlld1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbn1cbiJdfQ==