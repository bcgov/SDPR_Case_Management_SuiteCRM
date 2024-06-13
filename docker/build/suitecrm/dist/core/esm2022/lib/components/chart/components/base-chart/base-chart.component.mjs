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
import { Component, ElementRef, Input, signal } from '@angular/core';
import { fromEvent } from "rxjs";
import { ScreenSizeObserverService } from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import { debounceTime, tap } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
class BaseChartComponent {
    constructor(elementRef, screenSize) {
        this.elementRef = elementRef;
        this.screenSize = screenSize;
        this.height = 300;
        this.view = signal([300, this.height]);
        this.subs = [];
    }
    onResize() {
        this.calculateView();
    }
    initResizeListener() {
        const resize$ = fromEvent(window, 'resize').pipe(tap(() => this.view.set([])), debounceTime(300));
        this.view.set([]);
        this.subs.push(resize$.pipe(debounceTime(50)).subscribe(() => {
            this.calculateView();
        }));
    }
    calculateView() {
        let width;
        const el = (this.elementRef && this.elementRef.nativeElement) || {};
        const parentEl = (el.parentElement && el.parentElement.parentElement) || {};
        const parentWidth = (parentEl && parentEl.offsetWidth) || 0;
        if (parentWidth > 0) {
            width = parentWidth;
        }
        else {
            width = window.innerWidth * 0.7;
            if (window.innerWidth > 990) {
                width = window.innerWidth * 0.23;
            }
        }
        this.view.set([width, this.height]);
    }
    static { this.ɵfac = function BaseChartComponent_Factory(t) { return new (t || BaseChartComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ScreenSizeObserverService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseChartComponent, selectors: [["ng-component"]], inputs: { dataSource: "dataSource" }, decls: 0, vars: 0, template: function BaseChartComponent_Template(rf, ctx) { }, encapsulation: 2 }); }
}
export { BaseChartComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseChartComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.ScreenSizeObserverService }]; }, { dataSource: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC9jb21wb25lbnRzL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFDLFNBQVMsRUFBMkIsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMkVBQTJFLENBQUM7QUFDcEgsT0FBTyxFQUFDLFlBQVksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRWpELE1BQ2Esa0JBQWtCO0lBTzNCLFlBQXNCLFVBQXNCLEVBQVksVUFBcUM7UUFBdkUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFZLGVBQVUsR0FBVixVQUFVLENBQTJCO1FBSjdGLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixTQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLFNBQUksR0FBbUIsRUFBRSxDQUFDO0lBR3BDLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFUyxrQkFBa0I7UUFDeEIsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQzVDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM1QixZQUFZLENBQUMsR0FBRyxDQUFDLENBQ3BCLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDekQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRVMsYUFBYTtRQUNuQixJQUFJLEtBQUssQ0FBQztRQUNWLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQWlCLENBQUM7UUFDbkYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksRUFBaUIsQ0FBQztRQUMzRixNQUFNLFdBQVcsR0FBRyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVELElBQUksV0FBVyxHQUFHLENBQUMsRUFBRTtZQUNqQixLQUFLLEdBQUcsV0FBVyxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFFaEMsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRTtnQkFDekIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ3BDO1NBQ0o7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO21GQTFDUSxrQkFBa0I7b0VBQWxCLGtCQUFrQjs7U0FBbEIsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FEOUIsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQztxR0FFWixVQUFVO2tCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIHNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoYXJ0RGF0YVNvdXJjZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7ZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1NjcmVlblNpemVPYnNlcnZlclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy91aS9zY3JlZW4tc2l6ZS1vYnNlcnZlci9zY3JlZW4tc2l6ZS1vYnNlcnZlci5zZXJ2aWNlXCI7XG5pbXBvcnQge2RlYm91bmNlVGltZSwgdGFwfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQENvbXBvbmVudCh7dGVtcGxhdGU6ICcnfSlcbmV4cG9ydCBjbGFzcyBCYXNlQ2hhcnRDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGRhdGFTb3VyY2U6IENoYXJ0RGF0YVNvdXJjZTtcblxuICAgIGhlaWdodCA9IDMwMDtcbiAgICB2aWV3ID0gc2lnbmFsKFszMDAsIHRoaXMuaGVpZ2h0XSk7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHNjcmVlblNpemU6IFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRSZXNpemVMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMudmlldy5zZXQoW10pKSxcbiAgICAgICAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudmlldy5zZXQoW10pXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHJlc2l6ZSQucGlwZShkZWJvdW5jZVRpbWUoNTApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVWaWV3KCk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlVmlldygpOiB2b2lkIHtcbiAgICAgICAgbGV0IHdpZHRoO1xuICAgICAgICBjb25zdCBlbCA9ICh0aGlzLmVsZW1lbnRSZWYgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHx8IHt9IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCBwYXJlbnRFbCA9IChlbC5wYXJlbnRFbGVtZW50ICYmIGVsLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCkgfHwge30gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gKHBhcmVudEVsICYmIHBhcmVudEVsLm9mZnNldFdpZHRoKSB8fCAwO1xuXG4gICAgICAgIGlmIChwYXJlbnRXaWR0aCA+IDApIHtcbiAgICAgICAgICAgIHdpZHRoID0gcGFyZW50V2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC43O1xuXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTApIHtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC4yMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXcuc2V0KFt3aWR0aCwgdGhpcy5oZWlnaHRdKTtcbiAgICB9XG5cbn1cbiJdfQ==