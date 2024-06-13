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
import { isTrue } from 'common';
import { ScreenSizeObserverService } from "../../../services/ui/screen-size-observer/screen-size-observer.service";
import { SystemConfigStore } from "../../../store/system-config/system-config.store";
import { map } from "rxjs/operators";
import { RecordViewStore } from "../store/record-view/record-view.store";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/system-config/system-config.store";
import * as i2 from "../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i3 from "../store/record-view/record-view.store";
class RecordViewSidebarWidgetService {
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
    static { this.ɵfac = function RecordViewSidebarWidgetService_Factory(t) { return new (t || RecordViewSidebarWidgetService)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.ScreenSizeObserverService), i0.ɵɵinject(i3.RecordViewStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordViewSidebarWidgetService, factory: RecordViewSidebarWidgetService.ɵfac }); }
}
export { RecordViewSidebarWidgetService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordViewSidebarWidgetService, [{
        type: Injectable
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.ScreenSizeObserverService }, { type: i3.RecordViewStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXZpZXctc2lkZWJhci13aWRnZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvc2VydmljZXMvcmVjb3JkLXZpZXctc2lkZWJhci13aWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTlCLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHdFQUF3RSxDQUFDO0FBQ2pILE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBQ25GLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0NBQXdDLENBQUM7Ozs7O0FBRXZFLE1BQ2EsOEJBQThCO0lBU3ZDLFlBQ2MsaUJBQW9DLEVBQ3BDLFVBQXFDLEVBQ3JDLEtBQXNCO1FBRnRCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZUFBVSxHQUFWLFVBQVUsQ0FBMkI7UUFDckMsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFWMUIsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQVdoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUUxRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDakUsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDNUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7YUFDekM7WUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ1AsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7K0ZBN0JRLDhCQUE4Qjt1RUFBOUIsOEJBQThCLFdBQTlCLDhCQUE4Qjs7U0FBOUIsOEJBQThCO3VGQUE5Qiw4QkFBOEI7Y0FEMUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtpc1RydWV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7U2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3VpL3NjcmVlbi1zaXplLW9ic2VydmVyL3NjcmVlbi1zaXplLW9ic2VydmVyLnNlcnZpY2VcIjtcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmVcIjtcbmltcG9ydCB7bWFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7UmVjb3JkVmlld1N0b3JlfSBmcm9tIFwiLi4vc3RvcmUvcmVjb3JkLXZpZXcvcmVjb3JkLXZpZXcuc3RvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlY29yZFZpZXdTaWRlYmFyV2lkZ2V0U2VydmljZSB7XG5cbiAgICBwcm90ZWN0ZWQgc3dhcFNpemVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCB3aWRnZXRTd2FwPzogYm9vbGVhbjtcblxuICAgIHB1YmxpYyB3aWRnZXRTd2FwJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc2NyZWVuU2l6ZTogU2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlOiBSZWNvcmRWaWV3U3RvcmVcbiAgICApIHtcbiAgICAgICAgdGhpcy5zd2FwU2l6ZXMgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldFVpKCd3aWRnZXRfc3dhcF9zY3JlZW5fc2l6ZXMnKTtcblxuICAgICAgICB0aGlzLndpZGdldFN3YXAkID0gdGhpcy5zY3JlZW5TaXplLnNjcmVlblNpemUkLnBpcGUobWFwKHNjcmVlblNpemUgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3dhcCA9IGlzVHJ1ZSh0aGlzLnN3YXBTaXplc1tzY3JlZW5TaXplXSA/PyBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoKHRoaXMud2lkZ2V0U3dhcCA9PT0gbnVsbCAmJiBzd2FwID09PSB0cnVlKSB8fCAodGhpcy53aWRnZXRTd2FwICE9PSBzd2FwICYmIHN3YXAgPT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zaG93U2lkZWJhcldpZGdldHMgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMud2lkZ2V0U3dhcCA9IHN3YXA7XG4gICAgICAgICAgICByZXR1cm4gc3dhcDtcbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5zdWJzID0gW107XG4gICAgfVxufVxuIl19