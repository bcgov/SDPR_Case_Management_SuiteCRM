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
import { ScreenSize, ScreenSizeObserverService } from '../screen-size-observer/screen-size-observer.service';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
import * as i1 from "../screen-size-observer/screen-size-observer.service";
import * as i2 from "../../../store/system-config/system-config.store";
class MaxColumnsCalculator {
    constructor(screenSize, systemConfigStore) {
        this.screenSize = screenSize;
        this.systemConfigStore = systemConfigStore;
        this.screen = ScreenSize.Medium;
        this.maxColumns = 5;
    }
    getMaxColumns(sidebarActive$) {
        return sidebarActive$.pipe(combineLatestWith(this.screenSize.screenSize$), map(([sidebarActive, screenSize]) => {
            if (screenSize) {
                this.screen = screenSize;
            }
            return this.calculateMaxColumns(sidebarActive);
        }), distinctUntilChanged());
    }
    calculateMaxColumns(sideBar = true) {
        let sizeMap;
        sizeMap = this.systemConfigStore.getConfigValue('listview_column_limits');
        if (sideBar) {
            sizeMap = sizeMap.with_sidebar;
        }
        else {
            sizeMap = sizeMap.without_sidebar;
        }
        if (this.screen && sizeMap) {
            const maxCols = sizeMap[this.screen];
            if (maxCols) {
                this.maxColumns = maxCols;
            }
        }
        return this.maxColumns;
    }
    static { this.ɵfac = function MaxColumnsCalculator_Factory(t) { return new (t || MaxColumnsCalculator)(i0.ɵɵinject(i1.ScreenSizeObserverService), i0.ɵɵinject(i2.SystemConfigStore)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MaxColumnsCalculator, factory: MaxColumnsCalculator.ɵfac }); }
}
export { MaxColumnsCalculator };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaxColumnsCalculator, [{
        type: Injectable
    }], function () { return [{ type: i1.ScreenSizeObserverService }, { type: i2.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LWNvbHVtbnMtY2FsY3VsYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3VpL21heC1jb2x1bW5zLWNhbGN1bGF0b3IvbWF4LWNvbHVtbnMtY2FsY3VsYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUMsVUFBVSxFQUFFLHlCQUF5QixFQUFDLE1BQU0sc0RBQXNELENBQUM7QUFDM0csT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtEQUFrRCxDQUFDOzs7O0FBRW5GLE1BQ2Esb0JBQW9CO0lBSzdCLFlBQ2MsVUFBcUMsRUFDckMsaUJBQW9DO1FBRHBDLGVBQVUsR0FBVixVQUFVLENBQTJCO1FBQ3JDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFMbEQsV0FBTSxHQUFlLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDdkMsZUFBVSxHQUFHLENBQUMsQ0FBQztJQU1mLENBQUM7SUFFRCxhQUFhLENBQUMsY0FBbUM7UUFDN0MsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUN0QixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUM5QyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQXdCLEVBQUUsRUFBRTtZQUV2RCxJQUFJLFVBQVUsRUFBRTtnQkFDWixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQzthQUM1QjtZQUVELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxFQUNGLG9CQUFvQixFQUFFLENBQ3pCLENBQUM7SUFDTixDQUFDO0lBRUQsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUk7UUFDOUIsSUFBSSxPQUFPLENBQUM7UUFDWixPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRTFFLElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDbEM7YUFBTTtZQUNILE9BQU8sR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUN4QixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLElBQUksT0FBTyxFQUFFO2dCQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO2FBQzdCO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztxRkE1Q1Esb0JBQW9CO3VFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9COztTQUFwQixvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQURoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1NjcmVlblNpemUsIFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2V9IGZyb20gJy4uL3NjcmVlbi1zaXplLW9ic2VydmVyL3NjcmVlbi1zaXplLW9ic2VydmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWF4Q29sdW1uc0NhbGN1bGF0b3Ige1xuXG4gICAgc2NyZWVuOiBTY3JlZW5TaXplID0gU2NyZWVuU2l6ZS5NZWRpdW07XG4gICAgbWF4Q29sdW1ucyA9IDU7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHNjcmVlblNpemU6IFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdTdG9yZTogU3lzdGVtQ29uZmlnU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBnZXRNYXhDb2x1bW5zKHNpZGViYXJBY3RpdmUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+KTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHNpZGViYXJBY3RpdmUkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLnNjcmVlblNpemUuc2NyZWVuU2l6ZSQpLFxuICAgICAgICAgICAgbWFwKChbc2lkZWJhckFjdGl2ZSwgc2NyZWVuU2l6ZV06IFtib29sZWFuLCBTY3JlZW5TaXplXSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHNjcmVlblNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JlZW4gPSBzY3JlZW5TaXplO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGN1bGF0ZU1heENvbHVtbnMoc2lkZWJhckFjdGl2ZSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVNYXhDb2x1bW5zKHNpZGVCYXIgPSB0cnVlKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHNpemVNYXA7XG4gICAgICAgIHNpemVNYXAgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldENvbmZpZ1ZhbHVlKCdsaXN0dmlld19jb2x1bW5fbGltaXRzJyk7XG5cbiAgICAgICAgaWYgKHNpZGVCYXIpIHtcbiAgICAgICAgICAgIHNpemVNYXAgPSBzaXplTWFwLndpdGhfc2lkZWJhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpemVNYXAgPSBzaXplTWFwLndpdGhvdXRfc2lkZWJhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNjcmVlbiAmJiBzaXplTWFwKSB7XG4gICAgICAgICAgICBjb25zdCBtYXhDb2xzID0gc2l6ZU1hcFt0aGlzLnNjcmVlbl07XG4gICAgICAgICAgICBpZiAobWF4Q29scykge1xuICAgICAgICAgICAgICAgIHRoaXMubWF4Q29sdW1ucyA9IG1heENvbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5tYXhDb2x1bW5zO1xuICAgIH1cbn1cbiJdfQ==