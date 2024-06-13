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
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AppStateStore } from '../../store/app-state/app-state.store';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../store/app-state/app-state.store";
class ButtonLoadingDirective {
    constructor(el, appStateStore) {
        this.el = el;
        this.appStateStore = appStateStore;
        this.appLoading = false;
    }
    ngOnInit() {
        this.subscription = this.appStateStore.loading$.pipe(tap((loading) => {
            this.appLoading = loading;
            this.updateComponent();
        })).subscribe();
        this.updateComponent();
    }
    ngOnChanges(changes) {
        if (changes.state) {
            this.updateComponent();
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    clickEvent() {
        this.updateComponent();
    }
    /**
     * Calculate loading state and update loading
     */
    updateComponent() {
        const loading = this.isLoading();
        this.setDisabledState(loading);
    }
    /**
     * Calculate if is loading
     *
     * @returns {boolean} isLoading
     */
    isLoading() {
        let loading = false;
        if (this.state === true || this.appLoading === true) {
            loading = true;
        }
        return loading;
    }
    /**
     * Disable or enable button
     *
     * @param {boolean} state to set
     */
    setDisabledState(state) {
        this.el.nativeElement.disabled = state;
    }
    static { this.ɵfac = function ButtonLoadingDirective_Factory(t) { return new (t || ButtonLoadingDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.AppStateStore)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ButtonLoadingDirective, selectors: [["", "scrm-button-loading", ""]], hostBindings: function ButtonLoadingDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ButtonLoadingDirective_click_HostBindingHandler() { return ctx.clickEvent(); });
        } }, inputs: { state: ["scrm-button-loading", "state"] }, features: [i0.ɵɵNgOnChangesFeature] }); }
}
export { ButtonLoadingDirective };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonLoadingDirective, [{
        type: Directive,
        args: [{
                selector: '[scrm-button-loading]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.AppStateStore }]; }, { state: [{
            type: Input,
            args: ['scrm-button-loading']
        }], clickEvent: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxvYWRpbmcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvYnV0dG9uLWxvYWRpbmcvYnV0dG9uLWxvYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUE4QyxNQUFNLGVBQWUsQ0FBQztBQUN0SCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDcEUsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7QUFHbkMsTUFHYSxzQkFBc0I7SUFNL0IsWUFBb0IsRUFBYyxFQUFVLGFBQTRCO1FBQXBELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUZoRSxlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRzNCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBQzFFLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1lBQzFCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBR0QsVUFBVTtRQUNOLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSyxlQUFlO1FBQ25CLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxTQUFTO1FBQ2IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXBCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDakQsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNsQjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssZ0JBQWdCLENBQUMsS0FBYztRQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzNDLENBQUM7dUZBOURRLHNCQUFzQjtvRUFBdEIsc0JBQXNCO3VHQUF0QixnQkFBWTs7O1NBQVosc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FIbEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx1QkFBdUI7YUFDcEM7eUZBR2lDLEtBQUs7a0JBQWxDLEtBQUs7bUJBQUMscUJBQXFCO1lBMEI1QixVQUFVO2tCQURULFlBQVk7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7dGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3Njcm0tYnV0dG9uLWxvYWRpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Mb2FkaW5nRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoJ3Njcm0tYnV0dG9uLWxvYWRpbmcnKSBzdGF0ZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgYXBwTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBhcHBTdGF0ZVN0b3JlOiBBcHBTdGF0ZVN0b3JlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5hcHBTdGF0ZVN0b3JlLmxvYWRpbmckLnBpcGUodGFwKChsb2FkaW5nOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFwcExvYWRpbmcgPSBsb2FkaW5nO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQoKTtcbiAgICAgICAgfSkpLnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudCgpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuc3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gICAgY2xpY2tFdmVudCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgbG9hZGluZyBzdGF0ZSBhbmQgdXBkYXRlIGxvYWRpbmdcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZUNvbXBvbmVudCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbG9hZGluZyA9IHRoaXMuaXNMb2FkaW5nKCk7XG4gICAgICAgIHRoaXMuc2V0RGlzYWJsZWRTdGF0ZShsb2FkaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgaWYgaXMgbG9hZGluZ1xuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGlzTG9hZGluZ1xuICAgICAqL1xuICAgIHByaXZhdGUgaXNMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSB0cnVlIHx8IHRoaXMuYXBwTG9hZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbG9hZGluZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbG9hZGluZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIG9yIGVuYWJsZSBidXR0b25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXREaXNhYmxlZFN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHN0YXRlO1xuICAgIH1cbn1cbiJdfQ==