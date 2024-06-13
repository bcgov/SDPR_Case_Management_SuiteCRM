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
import { Component, Input, signal, } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { ThemeImagesStore } from '../../store/theme-images/theme-images.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/theme-images/theme-images.store";
import * as i2 from "@angular/common";
import * as i3 from "angular-svg-icon";
function ImageComponent_ng_container_0_svg_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "svg-icon", 3);
} if (rf & 2) {
    const img_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r2.wrapperClass);
    i0.ɵɵpropertyInterpolate("name", img_r1.name);
    i0.ɵɵproperty("svgClass", ctx_r2.klass || "")("title", ctx_r2.title || "");
} }
function ImageComponent_ng_container_0_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 4);
} if (rf & 2) {
    const img_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r3.klass);
    i0.ɵɵpropertyInterpolate("src", img_r1.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵproperty("title", ctx_r3.title || "");
} }
function ImageComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ImageComponent_ng_container_0_svg_icon_1_Template, 1, 6, "svg-icon", 1);
    i0.ɵɵtemplate(2, ImageComponent_ng_container_0_img_2_Template, 1, 5, "img", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const img_r1 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", img_r1.type === "svg");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", img_r1.type !== "svg");
} }
class ImageComponent {
    constructor(themeImagesStore) {
        this.themeImagesStore = themeImagesStore;
        this.klass = '';
        this.title = '';
        this.wrapperClass = 'sicon';
        this.images$ = this.themeImagesStore.images$;
        this.imageSig = signal({});
        this.subs = [];
    }
    ngOnInit() {
        this.subs = [];
        this.subs.push(this.images$.pipe(filter(img => img !== null), map((images) => ({ images })), tap(data => this.getImage(data, this.image))).subscribe());
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
    }
    /**
     * Get image from current view model and log if not existent
     *
     * @param vm
     * @param image name
     * @returns ThemeImage
     */
    getImage(vm, image) {
        if (!vm || !vm.images || Object.keys(vm.images).length < 1) {
            return null;
        }
        this.imageSig.update(() => vm.images[image]);
        if (!this.imageSig()) {
            console.warn(`Image with name '${image}' not found`);
        }
    }
    static { this.ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(i0.ɵɵdirectiveInject(i1.ThemeImagesStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImageComponent, selectors: [["scrm-image"]], inputs: { image: "image", klass: "klass", title: "title", wrapperClass: "wrapperClass" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "svgClass", "title", "class", "name", 4, "ngIf"], ["alt", "", 3, "src", "class", "title", 4, "ngIf"], [3, "svgClass", "title", "name"], ["alt", "", 3, "src", "title"]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ImageComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.imageSig());
        } }, dependencies: [i2.NgIf, i3.SvgIconComponent], encapsulation: 2 }); }
}
export { ImageComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageComponent, [{
        type: Component,
        args: [{ selector: 'scrm-image', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"imageSig() as img\">\n\n    <svg-icon *ngIf=\"img.type === 'svg'\" [svgClass]=\"klass || ''\" [title]=\"title || ''\" class=\"{{wrapperClass}}\"\n              name=\"{{img.name}}\"></svg-icon>\n\n    <img *ngIf=\"img.type !=='svg'\" alt=\"\" src=\"{{img.path}}\" class=\"{{klass}}\" [title]=\"title || ''\">\n\n</ng-container>\n" }]
    }], function () { return [{ type: i1.ThemeImagesStore }]; }, { image: [{
            type: Input
        }], klass: [{
            type: Input
        }], title: [{
            type: Input
        }], wrapperClass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxFQUdMLE1BQU0sR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQTRCLGdCQUFnQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7Ozs7OztJQ05wRyw4QkFDeUM7Ozs7SUFEMkMsa0NBQXdCO0lBQ2xHLDZDQUFtQjtJQURRLDZDQUF3Qiw2QkFBQTs7O0lBRzdELHlCQUFpRzs7OztJQUF4QywyQkFBaUI7SUFBcEMsOERBQWtCO0lBQW1CLDBDQUFxQjs7O0lBTHBHLDZCQUF3QztJQUVwQyx3RkFDeUM7SUFFekMsOEVBQWlHO0lBRXJHLDBCQUFlOzs7SUFMQSxlQUF3QjtJQUF4Qiw0Q0FBd0I7SUFHN0IsZUFBdUI7SUFBdkIsNENBQXVCOztBREtqQyxNQUthLGNBQWM7SUFZdkIsWUFBc0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFWL0MsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxpQkFBWSxHQUFHLE9BQU8sQ0FBQztRQUVoQyxZQUFPLEdBQThCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7UUFFbkUsYUFBUSxHQUFHLE1BQU0sQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUVqQixTQUFJLEdBQW1CLEVBQUUsQ0FBQztJQUdwQyxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsRUFDM0IsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxFQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDL0MsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsUUFBUSxDQUFDLEVBQTZCLEVBQUUsS0FBYTtRQUNqRCxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixLQUFLLGFBQWEsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0wsQ0FBQzsrRUE5Q1EsY0FBYztvRUFBZCxjQUFjO1lDZjNCLGlGQU9lOztZQVBBLHFDQUFpQjs7O1NEZW5CLGNBQWM7dUZBQWQsY0FBYztjQUwxQixTQUFTOzJCQUNJLFlBQVk7bUVBS2IsS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBzaWduYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaWx0ZXIsIG1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1RoZW1lSW1hZ2UsIFRoZW1lSW1hZ2VNYXAsIFRoZW1lSW1hZ2VzU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3RoZW1lLWltYWdlcy90aGVtZS1pbWFnZXMuc3RvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0taW1hZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNvbXBvbmVudCAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcbiAgICBASW5wdXQoKSBrbGFzcyA9ICcnO1xuICAgIEBJbnB1dCgpIHRpdGxlID0gJyc7XG4gICAgQElucHV0KCkgd3JhcHBlckNsYXNzID0gJ3NpY29uJztcblxuICAgIGltYWdlcyQ6IE9ic2VydmFibGU8VGhlbWVJbWFnZU1hcD4gPSB0aGlzLnRoZW1lSW1hZ2VzU3RvcmUuaW1hZ2VzJDtcblxuICAgIGltYWdlU2lnID0gc2lnbmFsPGFueT4oe30pO1xuXG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGhlbWVJbWFnZXNTdG9yZTogVGhlbWVJbWFnZXNTdG9yZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5pbWFnZXMkLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoaW1nID0+IGltZyAhPT0gbnVsbCksXG4gICAgICAgICAgICBtYXAoKGltYWdlcykgPT4gKHtpbWFnZXN9KSksXG4gICAgICAgICAgICB0YXAoZGF0YSA9PiB0aGlzLmdldEltYWdlKGRhdGEsIHRoaXMuaW1hZ2UpKSxcbiAgICAgICAgKS5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuc3VicyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBpbWFnZSBmcm9tIGN1cnJlbnQgdmlldyBtb2RlbCBhbmQgbG9nIGlmIG5vdCBleGlzdGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHZtXG4gICAgICogQHBhcmFtIGltYWdlIG5hbWVcbiAgICAgKiBAcmV0dXJucyBUaGVtZUltYWdlXG4gICAgICovXG4gICAgZ2V0SW1hZ2Uodm06IHsgaW1hZ2VzOiBUaGVtZUltYWdlTWFwIH0sIGltYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF2bSB8fCAhdm0uaW1hZ2VzIHx8IE9iamVjdC5rZXlzKHZtLmltYWdlcykubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmltYWdlU2lnLnVwZGF0ZSgoKSA9PiB2bS5pbWFnZXNbaW1hZ2VdKTtcblxuICAgICAgICBpZiAoIXRoaXMuaW1hZ2VTaWcoKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIG5hbWUgJyR7aW1hZ2V9JyBub3QgZm91bmRgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJpbWFnZVNpZygpIGFzIGltZ1wiPlxuXG4gICAgPHN2Zy1pY29uICpuZ0lmPVwiaW1nLnR5cGUgPT09ICdzdmcnXCIgW3N2Z0NsYXNzXT1cImtsYXNzIHx8ICcnXCIgW3RpdGxlXT1cInRpdGxlIHx8ICcnXCIgY2xhc3M9XCJ7e3dyYXBwZXJDbGFzc319XCJcbiAgICAgICAgICAgICAgbmFtZT1cInt7aW1nLm5hbWV9fVwiPjwvc3ZnLWljb24+XG5cbiAgICA8aW1nICpuZ0lmPVwiaW1nLnR5cGUgIT09J3N2ZydcIiBhbHQ9XCJcIiBzcmM9XCJ7e2ltZy5wYXRofX1cIiBjbGFzcz1cInt7a2xhc3N9fVwiIFt0aXRsZV09XCJ0aXRsZSB8fCAnJ1wiPlxuXG48L25nLWNvbnRhaW5lcj5cbiJdfQ==