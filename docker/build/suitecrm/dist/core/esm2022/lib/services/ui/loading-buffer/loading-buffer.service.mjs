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
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/system-config/system-config.store";
class LoadingBuffer {
    constructor(config, delayConfigKey = 'loading_display_delay') {
        this.config = config;
        this.delayConfigKey = delayConfigKey;
        this.loadingStore = new BehaviorSubject(false);
        this.loadingBufferStore = new BehaviorSubject(false);
        this.subs = [];
        this.buffered = false;
        this.loading$ = this.loadingStore.asObservable();
        const uiSettings = config.getConfigValue('ui') ?? {};
        const delay = parseInt(uiSettings[delayConfigKey] ?? '') ?? 1500;
        this.loadingBufferStore$ = this.loadingBufferStore.asObservable().pipe(debounceTime(delay));
        this.subs.push(this.loadingBufferStore$.subscribe((loading) => {
            if (!this.buffered) {
                return;
            }
            this.loadingStore.next(loading);
        }));
    }
    /**
     * Update loading status
     *
     * @param {boolean} loading status to set
     */
    updateLoading(loading) {
        if (loading === true) {
            this.buffered = true;
            this.loadingBufferStore.next(loading);
            return;
        }
        this.buffered = false;
        this.loadingStore.next(loading);
        this.loadingBufferStore.next(loading);
    }
    static { this.ɵfac = function LoadingBuffer_Factory(t) { i0.ɵɵinvalidFactory(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoadingBuffer, factory: LoadingBuffer.ɵfac }); }
}
export { LoadingBuffer };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingBuffer, [{
        type: Injectable
    }], function () { return [{ type: i1.SystemConfigStore }, { type: undefined }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1idWZmZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy91aS9sb2FkaW5nLWJ1ZmZlci9sb2FkaW5nLWJ1ZmZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQTJCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrREFBa0QsQ0FBQzs7O0FBRW5GLE1BQ2EsYUFBYTtJQVV0QixZQUFzQixNQUF5QixFQUFZLGlCQUF5Qix1QkFBdUI7UUFBckYsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBWSxtQkFBYyxHQUFkLGNBQWMsQ0FBa0M7UUFOakcsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNuRCx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUV6RCxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUMxQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBSXZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVqRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyRCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUVqRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLE9BQU87YUFDVjtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGFBQWEsQ0FBQyxPQUFnQjtRQUVqQyxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7O3VFQTFDUSxhQUFhLFdBQWIsYUFBYTs7U0FBYixhQUFhO3VGQUFiLGFBQWE7Y0FEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQnVmZmVyIHtcblxuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gICAgcHJvdGVjdGVkIGxvYWRpbmdTdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIHByb3RlY3RlZCBsb2FkaW5nQnVmZmVyU3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgICBwcm90ZWN0ZWQgbG9hZGluZ0J1ZmZlclN0b3JlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgYnVmZmVyZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IFN5c3RlbUNvbmZpZ1N0b3JlLCBwcm90ZWN0ZWQgZGVsYXlDb25maWdLZXk6IHN0cmluZyA9ICdsb2FkaW5nX2Rpc3BsYXlfZGVsYXknKSB7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMubG9hZGluZ1N0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgICAgIGNvbnN0IHVpU2V0dGluZ3MgPSBjb25maWcuZ2V0Q29uZmlnVmFsdWUoJ3VpJykgPz8ge307XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gcGFyc2VJbnQodWlTZXR0aW5nc1tkZWxheUNvbmZpZ0tleV0gPz8gJycpID8/IDE1MDA7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nQnVmZmVyU3RvcmUkID0gdGhpcy5sb2FkaW5nQnVmZmVyU3RvcmUuYXNPYnNlcnZhYmxlKCkucGlwZShkZWJvdW5jZVRpbWUoZGVsYXkpKTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5sb2FkaW5nQnVmZmVyU3RvcmUkLnN1YnNjcmliZSgobG9hZGluZykgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmJ1ZmZlcmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nU3RvcmUubmV4dChsb2FkaW5nKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBsb2FkaW5nIHN0YXR1c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nIHN0YXR1cyB0byBzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlTG9hZGluZyhsb2FkaW5nOiBib29sZWFuKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGxvYWRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nQnVmZmVyU3RvcmUubmV4dChsb2FkaW5nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnVmZmVyZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nU3RvcmUubmV4dChsb2FkaW5nKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nQnVmZmVyU3RvcmUubmV4dChsb2FkaW5nKTtcbiAgICB9XG59XG4iXX0=