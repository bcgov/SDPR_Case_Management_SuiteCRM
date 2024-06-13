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
import { ScreenSizeObserverService } from "../../../services/ui/screen-size-observer/screen-size-observer.service";
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import { map } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/system-config/system-config.store";
import * as i2 from "../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i3 from "../store/list-view/list-view.store";
class ListViewSidebarWidgetService {
    constructor(systemConfigStore, screenSize, store) {
        this.systemConfigStore = systemConfigStore;
        this.screenSize = screenSize;
        this.store = store;
        this.swapSizes = [];
        this.subs = [];
        this.swapSizes = this.systemConfigStore.getUi('widget_swap_screen_sizes');
        this.widgetSwap$ = this.screenSize.screenSize$.pipe(map(screenSize => {
            const swap = isTrue(this.swapSizes[screenSize] ?? false);
            if ((this.widgetSwap === null && swap === true) || (this.widgetSwap !== swap && swap === true)) {
                this.store.showSidebarWidgets = false;
            }
            this.widgetSwap = swap;
            return swap;
        }));
    }
    destroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
    }
    static { this.ɵfac = function ListViewSidebarWidgetService_Factory(t) { return new (t || ListViewSidebarWidgetService)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.ScreenSizeObserverService), i0.ɵɵinject(i3.ListViewStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewSidebarWidgetService, factory: ListViewSidebarWidgetService.ɵfac }); }
}
export { ListViewSidebarWidgetService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewSidebarWidgetService, [{
        type: Injectable
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.ScreenSizeObserverService }, { type: i3.ListViewStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNpZGViYXItd2lkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9zZXJ2aWNlcy9saXN0LXZpZXctc2lkZWJhci13aWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDakUsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUU5QixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSx3RUFBd0UsQ0FBQztBQUNqSCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQztBQUNuRixPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRW5DLE1BQ2EsNEJBQTRCO0lBU3JDLFlBQ2MsaUJBQW9DLEVBQ3BDLFVBQXFDLEVBQ3JDLEtBQW9CO1FBRnBCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZUFBVSxHQUFWLFVBQVUsQ0FBMkI7UUFDckMsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQVZ4QixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBV2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNqRSxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUM1RixJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQzthQUN6QztZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDUCxDQUFDO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs2RkE3QlEsNEJBQTRCO3VFQUE1Qiw0QkFBNEIsV0FBNUIsNEJBQTRCOztTQUE1Qiw0QkFBNEI7dUZBQTVCLDRCQUE0QjtjQUR4QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0xpc3RWaWV3U3RvcmV9IGZyb20gXCIuLi9zdG9yZS9saXN0LXZpZXcvbGlzdC12aWV3LnN0b3JlXCI7XG5pbXBvcnQge2lzVHJ1ZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvdWkvc2NyZWVuLXNpemUtb2JzZXJ2ZXIvc2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZVwiO1xuaW1wb3J0IHttYXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTaWRlYmFyV2lkZ2V0U2VydmljZSB7XG5cbiAgICBwcm90ZWN0ZWQgc3dhcFNpemVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCB3aWRnZXRTd2FwPzogYm9vbGVhbjtcblxuICAgIHB1YmxpYyB3aWRnZXRTd2FwJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc2NyZWVuU2l6ZTogU2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlOiBMaXN0Vmlld1N0b3JlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuc3dhcFNpemVzID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRVaSgnd2lkZ2V0X3N3YXBfc2NyZWVuX3NpemVzJyk7XG5cbiAgICAgICAgdGhpcy53aWRnZXRTd2FwJCA9IHRoaXMuc2NyZWVuU2l6ZS5zY3JlZW5TaXplJC5waXBlKG1hcChzY3JlZW5TaXplID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN3YXAgPSBpc1RydWUodGhpcy5zd2FwU2l6ZXNbc2NyZWVuU2l6ZV0gPz8gZmFsc2UpO1xuICAgICAgICAgICAgaWYgKCh0aGlzLndpZGdldFN3YXAgPT09IG51bGwgJiYgc3dhcCA9PT0gdHJ1ZSkgfHwgKHRoaXMud2lkZ2V0U3dhcCAhPT0gc3dhcCAmJiBzd2FwID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc2hvd1NpZGViYXJXaWRnZXRzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLndpZGdldFN3YXAgPSBzd2FwO1xuICAgICAgICAgICAgcmV0dXJuIHN3YXA7XG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuc3VicyA9IFtdO1xuICAgIH1cbn1cbiJdfQ==