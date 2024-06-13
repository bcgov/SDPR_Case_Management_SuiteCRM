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
import { Injectable } from "@angular/core";
import { ListViewStore } from "../store/list-view/list-view.store";
import { isTrue } from 'common';
import { BehaviorSubject } from "rxjs";
import { ScreenSize, ScreenSizeObserverService } from "../../../services/ui/screen-size-observer/screen-size-observer.service";
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import { map } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/system-config/system-config.store";
import * as i2 from "../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i3 from "../store/list-view/list-view.store";
class QuickFiltersService {
    constructor(systemConfigStore, screenSize, store) {
        this.systemConfigStore = systemConfigStore;
        this.screenSize = screenSize;
        this.store = store;
        this.quickFiltersConfigState = new BehaviorSubject({ buttons: [] });
        this.enabledState = new BehaviorSubject(false);
        this.screen = ScreenSize.Medium;
        this.defaultBreakpoint = 5;
        this.breakdownSizes = [];
        this.subs = [];
        this.config$ = this.quickFiltersConfigState.asObservable();
        this.enabled$ = this.enabledState.asObservable();
        this.enabled = false;
        this.breakdownSizes = this.systemConfigStore.getUi('quick_filters_breakdown_screen_sizes');
        const displayedQuickFilters = this.systemConfigStore.getUi('displayed_quick_filters');
        const quickFiltersBreakdownThresholds = this.systemConfigStore.getUi('quick_filters_breakdown_threshold');
        this.breakdown$ = this.screenSize.screenSize$.pipe(map(screenSize => {
            const quickFiltersBreakpoint = displayedQuickFilters[screenSize] ?? 2;
            const maxQuickFiltersForDisplay = quickFiltersBreakdownThresholds[screenSize] ?? 2;
            if (quickFiltersBreakpoint > maxQuickFiltersForDisplay) {
                return true;
            }
            return isTrue(this.breakdownSizes[screenSize] ?? false);
        }));
        this.subs.push(this.screenSize.screenSize$.subscribe(currentScreenSize => {
            if (currentScreenSize) {
                this.screen = currentScreenSize;
            }
            this.init();
        }));
    }
    init() {
        let filters = this.store.filterList.getFilters() ?? [];
        filters = filters.filter(filter => filter?.attributes?.quick_filter ?? false);
        this.enabled = this.areConfigEnabled();
        if (!filters || filters.length < 1) {
            this.enabled = false;
            this.enabledState.next(false);
            return;
        }
        this.enabledState.next(this.enabled);
        const config = {
            buttonKlass: ['settings-button btn btn-outline-main'],
            dropdownLabel: this.store.appStrings.LBL_QUICK_FILTERS || '',
            breakpoint: this.getBreakpoint(),
            showAfterBreakpoint: false,
            dropdownOptions: {
                placement: ['bottom-right'],
                wrapperKlass: ['dropdown-button-secondary', 'filter-action-group']
            },
            buttons: []
        };
        const activeFilters = this.store.activeFilters;
        let anyActive = false;
        filters.forEach((filter) => {
            const isQuickFilter = filter?.attributes?.quick_filter ?? false;
            if (!isQuickFilter) {
                return;
            }
            const isActive = Object.keys(activeFilters).some(key => key === filter.key);
            anyActive = anyActive || isActive;
            const button = {
                label: filter.attributes.name,
                title: filter.attributes.name,
                onClick: () => {
                    this.store.toggleQuickFilter(filter);
                }
            };
            if (isActive) {
                button.klass = ['active'];
            }
            config.buttons.push(button);
        });
        if (anyActive) {
            config.dropdownOptions.klass = ['active'];
            config.dropdownOptions.icon = 'filter';
        }
        this.quickFiltersConfigState.next(config);
    }
    destroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
        this.quickFiltersConfigState.unsubscribe();
    }
    getBreakpoint() {
        const breakpointMap = this.systemConfigStore.getUi('displayed_quick_filters');
        if (this.screen && breakpointMap && breakpointMap[this.screen]) {
            this.breakpoint = breakpointMap[this.screen];
            return this.breakpoint;
        }
        if (this.breakpoint) {
            return this.breakpoint;
        }
        return this.defaultBreakpoint;
    }
    areConfigEnabled() {
        const enableMap = this.systemConfigStore.getUi('enable_quick_filters');
        if (!this.screen || !enableMap) {
            return false;
        }
        return isTrue(enableMap[this.screen] ?? false);
    }
    static { this.ɵfac = function QuickFiltersService_Factory(t) { return new (t || QuickFiltersService)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.ScreenSizeObserverService), i0.ɵɵinject(i3.ListViewStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: QuickFiltersService, factory: QuickFiltersService.ɵfac }); }
}
export { QuickFiltersService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QuickFiltersService, [{
        type: Injectable
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.ScreenSizeObserverService }, { type: i3.ListViewStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2stZmlsdGVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3Qvc2VydmljZXMvcXVpY2stZmlsdGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNqRSxPQUFPLEVBQXdDLE1BQU0sRUFBUyxNQUFNLFFBQVEsQ0FBQztBQUM3RSxPQUFPLEVBQUMsZUFBZSxFQUEyQixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQ0gsVUFBVSxFQUNWLHlCQUF5QixFQUM1QixNQUFNLHdFQUF3RSxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ25GLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFbkMsTUFDYSxtQkFBbUI7SUFlNUIsWUFDYyxpQkFBb0MsRUFDcEMsVUFBcUMsRUFDckMsS0FBb0I7UUFGcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxlQUFVLEdBQVYsVUFBVSxDQUEyQjtRQUNyQyxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBaEJ4Qiw0QkFBdUIsR0FBRyxJQUFJLGVBQWUsQ0FBdUIsRUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUNuRixpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ25ELFdBQU0sR0FBZSxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUV0QixtQkFBYyxHQUFhLEVBQUUsQ0FBQztRQUM5QixTQUFJ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QUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELGFBQWE7UUFDVCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFFOUUsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDMUI7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzFCO1FBRUQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUVELGdCQUFnQjtRQUNaLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztvRkF4SVEsbUJBQW1CO3VFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1COztTQUFuQixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUQvQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1NhdmVkRmlsdGVyfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9zYXZlZC1maWx0ZXIubW9kZWxcIjtcbmltcG9ydCB7TGlzdFZpZXdTdG9yZX0gZnJvbSBcIi4uL3N0b3JlL2xpc3Qtdmlldy9saXN0LXZpZXcuc3RvcmVcIjtcbmltcG9ydCB7QnV0dG9uR3JvdXBJbnRlcmZhY2UsIEJ1dHRvbkludGVyZmFjZSwgaXNUcnVlLCBpc1ZvaWR9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtcbiAgICBTY3JlZW5TaXplLFxuICAgIFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2Vcbn0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3VpL3NjcmVlbi1zaXplLW9ic2VydmVyL3NjcmVlbi1zaXplLW9ic2VydmVyLnNlcnZpY2VcIjtcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmVcIjtcbmltcG9ydCB7bWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFF1aWNrRmlsdGVyc1NlcnZpY2Uge1xuXG4gICAgcHJvdGVjdGVkIHF1aWNrRmlsdGVyc0NvbmZpZ1N0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxCdXR0b25Hcm91cEludGVyZmFjZT4oe2J1dHRvbnM6IFtdfSk7XG4gICAgcHJvdGVjdGVkIGVuYWJsZWRTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIHByb3RlY3RlZCBzY3JlZW46IFNjcmVlblNpemUgPSBTY3JlZW5TaXplLk1lZGl1bTtcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdEJyZWFrcG9pbnQgPSA1O1xuICAgIHByb3RlY3RlZCBicmVha3BvaW50OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGJyZWFrZG93blNpemVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgcHVibGljIGNvbmZpZyQgPSB0aGlzLnF1aWNrRmlsdGVyc0NvbmZpZ1N0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHB1YmxpYyBlbmFibGVkJCA9IHRoaXMuZW5hYmxlZFN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHB1YmxpYyBlbmFibGVkID0gZmFsc2U7XG4gICAgcHVibGljIGJyZWFrZG93biQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdTdG9yZTogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IExpc3RWaWV3U3RvcmVcbiAgICApIHtcbiAgICAgICAgdGhpcy5icmVha2Rvd25TaXplcyA9IHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUuZ2V0VWkoJ3F1aWNrX2ZpbHRlcnNfYnJlYWtkb3duX3NjcmVlbl9zaXplcycpO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXllZFF1aWNrRmlsdGVycyAgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldFVpKCdkaXNwbGF5ZWRfcXVpY2tfZmlsdGVycycpO1xuXG4gICAgICAgIGNvbnN0IHF1aWNrRmlsdGVyc0JyZWFrZG93blRocmVzaG9sZHMgID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRVaSgncXVpY2tfZmlsdGVyc19icmVha2Rvd25fdGhyZXNob2xkJyk7XG5cbiAgICAgICAgdGhpcy5icmVha2Rvd24kID0gdGhpcy5zY3JlZW5TaXplLnNjcmVlblNpemUkLnBpcGUobWFwKHNjcmVlblNpemUgPT4ge1xuICAgICAgICAgICAgY29uc3QgcXVpY2tGaWx0ZXJzQnJlYWtwb2ludCA9IGRpc3BsYXllZFF1aWNrRmlsdGVyc1tzY3JlZW5TaXplXSA/PyAyO1xuICAgICAgICAgICAgY29uc3QgbWF4UXVpY2tGaWx0ZXJzRm9yRGlzcGxheSA9IHF1aWNrRmlsdGVyc0JyZWFrZG93blRocmVzaG9sZHNbc2NyZWVuU2l6ZV0gPz8gMjtcblxuICAgICAgICAgICAgaWYgKHF1aWNrRmlsdGVyc0JyZWFrcG9pbnQgPiBtYXhRdWlja0ZpbHRlcnNGb3JEaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpc1RydWUodGhpcy5icmVha2Rvd25TaXplc1tzY3JlZW5TaXplXSA/PyBmYWxzZSk7XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuc2NyZWVuU2l6ZS5zY3JlZW5TaXplJC5zdWJzY3JpYmUoY3VycmVudFNjcmVlblNpemUgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JlZW5TaXplKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JlZW4gPSBjdXJyZW50U2NyZWVuU2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGZpbHRlcnMgPSB0aGlzLnN0b3JlLmZpbHRlckxpc3QuZ2V0RmlsdGVycygpID8/IFtdO1xuICAgICAgICBmaWx0ZXJzID0gZmlsdGVycy5maWx0ZXIoZmlsdGVyID0+IGZpbHRlcj8uYXR0cmlidXRlcz8ucXVpY2tfZmlsdGVyID8/IGZhbHNlKTtcblxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLmFyZUNvbmZpZ0VuYWJsZWQoKTtcbiAgICAgICAgaWYgKCFmaWx0ZXJzIHx8IGZpbHRlcnMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWRTdGF0ZS5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuYWJsZWRTdGF0ZS5uZXh0KHRoaXMuZW5hYmxlZCk7XG5cbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgYnV0dG9uS2xhc3M6IFsnc2V0dGluZ3MtYnV0dG9uIGJ0biBidG4tb3V0bGluZS1tYWluJ10sXG4gICAgICAgICAgICBkcm9wZG93bkxhYmVsOiB0aGlzLnN0b3JlLmFwcFN0cmluZ3MuTEJMX1FVSUNLX0ZJTFRFUlMgfHwgJycsXG4gICAgICAgICAgICBicmVha3BvaW50OiB0aGlzLmdldEJyZWFrcG9pbnQoKSxcbiAgICAgICAgICAgIHNob3dBZnRlckJyZWFrcG9pbnQ6IGZhbHNlLFxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiBbJ2JvdHRvbS1yaWdodCddLFxuICAgICAgICAgICAgICAgIHdyYXBwZXJLbGFzczogWydkcm9wZG93bi1idXR0b24tc2Vjb25kYXJ5JywgJ2ZpbHRlci1hY3Rpb24tZ3JvdXAnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtdXG4gICAgICAgIH0gYXMgQnV0dG9uR3JvdXBJbnRlcmZhY2U7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlRmlsdGVycyA9IHRoaXMuc3RvcmUuYWN0aXZlRmlsdGVycztcblxuICAgICAgICBsZXQgYW55QWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyOiBTYXZlZEZpbHRlcikgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBpc1F1aWNrRmlsdGVyID0gZmlsdGVyPy5hdHRyaWJ1dGVzPy5xdWlja19maWx0ZXIgPz8gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICghaXNRdWlja0ZpbHRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBPYmplY3Qua2V5cyhhY3RpdmVGaWx0ZXJzKS5zb21lKGtleSA9PiBrZXkgPT09IGZpbHRlci5rZXkpO1xuICAgICAgICAgICAgYW55QWN0aXZlID0gYW55QWN0aXZlIHx8IGlzQWN0aXZlO1xuXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGZpbHRlci5hdHRyaWJ1dGVzLm5hbWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6IGZpbHRlci5hdHRyaWJ1dGVzLm5hbWUsXG4gICAgICAgICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnRvZ2dsZVF1aWNrRmlsdGVyKGZpbHRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG5cblxuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmtsYXNzID0gWydhY3RpdmUnXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uZmlnLmJ1dHRvbnMucHVzaChidXR0b24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoYW55QWN0aXZlKSB7XG4gICAgICAgICAgICBjb25maWcuZHJvcGRvd25PcHRpb25zLmtsYXNzID0gWydhY3RpdmUnXTtcbiAgICAgICAgICAgIGNvbmZpZy5kcm9wZG93bk9wdGlvbnMuaWNvbiA9ICdmaWx0ZXInO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5xdWlja0ZpbHRlcnNDb25maWdTdGF0ZS5uZXh0KGNvbmZpZyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIDogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuc3VicyA9IFtdO1xuICAgICAgICB0aGlzLnF1aWNrRmlsdGVyc0NvbmZpZ1N0YXRlLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgZ2V0QnJlYWtwb2ludCgpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBicmVha3BvaW50TWFwID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRVaSgnZGlzcGxheWVkX3F1aWNrX2ZpbHRlcnMnKTtcblxuICAgICAgICBpZiAodGhpcy5zY3JlZW4gJiYgYnJlYWtwb2ludE1hcCAmJiBicmVha3BvaW50TWFwW3RoaXMuc2NyZWVuXSkge1xuICAgICAgICAgICAgdGhpcy5icmVha3BvaW50ID0gYnJlYWtwb2ludE1hcFt0aGlzLnNjcmVlbl07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5icmVha3BvaW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRCcmVha3BvaW50O1xuICAgIH1cblxuICAgIGFyZUNvbmZpZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGVuYWJsZU1hcCA9IHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUuZ2V0VWkoJ2VuYWJsZV9xdWlja19maWx0ZXJzJyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNjcmVlbiB8fCAhZW5hYmxlTWFwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNUcnVlKGVuYWJsZU1hcFt0aGlzLnNjcmVlbl0gPz8gZmFsc2UpO1xuICAgIH1cblxufVxuIl19