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
import { Component, Input } from '@angular/core';
import { SortDirection } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../image/image.component";
function SortButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function SortButtonComponent_ng_container_0_Template_a_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const direction_r1 = restoredCtx.ngIf; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.changeSorting(direction_r1)); });
    i0.ɵɵelement(2, "scrm-image", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const direction_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("image", ctx_r0.getStatusIcon(direction_r1));
} }
class SortButtonComponent {
    constructor() {
        this.statusIcons = {
            NONE: 'sort',
            ASC: 'sort_ascend',
            DESC: 'sort_descend'
        };
        this.nextDirection = {
            NONE: SortDirection.DESC,
            ASC: SortDirection.NONE,
            DESC: SortDirection.ASC
        };
    }
    ngOnInit() {
        this.direction$ = this.state.getSortDirection();
    }
    getStatusIcon(direction) {
        return this.statusIcons[direction];
    }
    changeSorting(direction) {
        const newDirection = this.nextDirection[direction];
        this.state.changeSortDirection(newDirection);
    }
    static { this.ɵfac = function SortButtonComponent_Factory(t) { return new (t || SortButtonComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SortButtonComponent, selectors: [["scrm-sort-button"]], inputs: { state: "state" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "btn", "btn-sm", "p-0", "sort-button", 3, "click"], [1, "sort-icon", "sicon", 3, "image"]], template: function SortButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SortButtonComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.direction$));
        } }, dependencies: [i1.NgIf, i2.ImageComponent, i1.AsyncPipe], encapsulation: 2 }); }
}
export { SortButtonComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortButtonComponent, [{
        type: Component,
        args: [{ selector: 'scrm-sort-button', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"(direction$ | async) as direction\">\n    <a class=\"btn btn-sm p-0 sort-button\" (click)=\"changeSorting(direction)\">\n        <scrm-image class=\"sort-icon sicon\" [image]=\"getStatusIcon(direction)\"></scrm-image>\n    </a>\n</ng-container>\n\n" }]
    }], function () { return []; }, { state: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvc29ydC1idXR0b24vc29ydC1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvc29ydC1idXR0b24vc29ydC1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxRQUFRLENBQUM7Ozs7OztJQ0FyQyw2QkFBd0Q7SUFDcEQsNEJBQXlFO0lBQW5DLCtOQUFTLGVBQUEsa0NBQXdCLENBQUEsSUFBQztJQUNwRSxnQ0FBb0Y7SUFDeEYsaUJBQUk7SUFDUiwwQkFBZTs7OztJQUY2QixlQUFrQztJQUFsQywwREFBa0M7O0FERTlFLE1BS2EsbUJBQW1CO0lBZ0I1QjtRQVpVLGdCQUFXLEdBQUc7WUFDcEIsSUFBSSxFQUFFLE1BQU07WUFDWixHQUFHLEVBQUUsYUFBYTtZQUNsQixJQUFJLEVBQUUsY0FBYztTQUN2QixDQUFDO1FBRVEsa0JBQWEsR0FBRztZQUN0QixJQUFJLEVBQUUsYUFBYSxDQUFDLElBQUk7WUFDeEIsR0FBRyxFQUFFLGFBQWEsQ0FBQyxJQUFJO1lBQ3ZCLElBQUksRUFBRSxhQUFhLENBQUMsR0FBRztTQUMxQixDQUFDO0lBR0YsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRUQsYUFBYSxDQUFDLFNBQXdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsYUFBYSxDQUFDLFNBQXdCO1FBQ2xDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqRCxDQUFDO29GQTlCUSxtQkFBbUI7b0VBQW5CLG1CQUFtQjtZQ1RoQyxzRkFJZTs7O1lBSkEsMkRBQTJCOzs7U0RTN0IsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FML0IsU0FBUzsyQkFDSSxrQkFBa0I7c0NBS25CLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U29ydERpcmVjdGlvbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1NvcnREaXJlY3Rpb25EYXRhU291cmNlfSBmcm9tICcuL3NvcnQtYnV0dG9uLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXNvcnQtYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc29ydC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU29ydEJ1dHRvbkNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgc3RhdGU6IFNvcnREaXJlY3Rpb25EYXRhU291cmNlO1xuICAgIGRpcmVjdGlvbiQ6IE9ic2VydmFibGU8U29ydERpcmVjdGlvbj47XG5cbiAgICBwcm90ZWN0ZWQgc3RhdHVzSWNvbnMgPSB7XG4gICAgICAgIE5PTkU6ICdzb3J0JyxcbiAgICAgICAgQVNDOiAnc29ydF9hc2NlbmQnLFxuICAgICAgICBERVNDOiAnc29ydF9kZXNjZW5kJ1xuICAgIH07XG5cbiAgICBwcm90ZWN0ZWQgbmV4dERpcmVjdGlvbiA9IHtcbiAgICAgICAgTk9ORTogU29ydERpcmVjdGlvbi5ERVNDLFxuICAgICAgICBBU0M6IFNvcnREaXJlY3Rpb24uTk9ORSxcbiAgICAgICAgREVTQzogU29ydERpcmVjdGlvbi5BU0NcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uJCA9IHRoaXMuc3RhdGUuZ2V0U29ydERpcmVjdGlvbigpO1xuICAgIH1cblxuICAgIGdldFN0YXR1c0ljb24oZGlyZWN0aW9uOiBTb3J0RGlyZWN0aW9uKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzSWNvbnNbZGlyZWN0aW9uXTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTb3J0aW5nKGRpcmVjdGlvbjogU29ydERpcmVjdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCBuZXdEaXJlY3Rpb24gPSB0aGlzLm5leHREaXJlY3Rpb25bZGlyZWN0aW9uXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5jaGFuZ2VTb3J0RGlyZWN0aW9uKG5ld0RpcmVjdGlvbik7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIihkaXJlY3Rpb24kIHwgYXN5bmMpIGFzIGRpcmVjdGlvblwiPlxuICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1zbSBwLTAgc29ydC1idXR0b25cIiAoY2xpY2spPVwiY2hhbmdlU29ydGluZyhkaXJlY3Rpb24pXCI+XG4gICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwic29ydC1pY29uIHNpY29uXCIgW2ltYWdlXT1cImdldFN0YXR1c0ljb24oZGlyZWN0aW9uKVwiPjwvc2NybS1pbWFnZT5cbiAgICA8L2E+XG48L25nLWNvbnRhaW5lcj5cblxuIl19