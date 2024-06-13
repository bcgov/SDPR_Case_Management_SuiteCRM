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
import { FavoritesService } from '../../../../services/navigation/favorites/favorites.service';
import { ImmediateDebounce } from '../../../../services/utils/immediate-debounce.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/navigation/favorites/favorites.service";
import * as i2 from "@angular/common";
import * as i3 from "../../../../components/button/button.component";
function FavoriteToggleComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-button", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r0.addButton);
} }
function FavoriteToggleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-button", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r1.removeButton);
} }
class FavoriteToggleComponent {
    constructor(handler) {
        this.handler = handler;
        this.favorite = false;
    }
    ngOnInit() {
        if (!this.record) {
            return;
        }
        this.debounceService = new ImmediateDebounce();
        this.debounceService.init();
        this.favorite = this?.record?.favorite ?? false;
        this.addButton = {
            klass: ['btn btn-sm btn-outline-light favorite-star favorite-off'],
            onClick: () => {
                this.debounceService.debounce(() => {
                    this.add();
                });
            },
            icon: 'star'
        };
        this.removeButton = {
            klass: ['btn btn-sm btn-outline-light favorite-star favorite-on'],
            onClick: () => {
                this.debounceService.debounce(() => {
                    this.remove();
                });
            },
            icon: 'star'
        };
    }
    ngOnDestroy() {
        this.debounceService.destroy();
    }
    add() {
        this.record.favorite = true;
        this.favorite = true;
        const favorite = this.handler.build(this.record.module, this.record.id);
        this.handler.add(this.record.module, favorite);
    }
    remove() {
        this.record.favorite = false;
        this.favorite = false;
        const favorite = this.handler.build(this.record.module, this.record.id);
        this.handler.remove(this.record.module, favorite);
    }
    static { this.ɵfac = function FavoriteToggleComponent_Factory(t) { return new (t || FavoriteToggleComponent)(i0.ɵɵdirectiveInject(i1.FavoritesService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FavoriteToggleComponent, selectors: [["scrm-favorite-toggle"]], inputs: { record: "record" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "config"]], template: function FavoriteToggleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, FavoriteToggleComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            i0.ɵɵtemplate(1, FavoriteToggleComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.favorite);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.favorite);
        } }, dependencies: [i2.NgIf, i3.ButtonComponent], encapsulation: 2 }); }
}
export { FavoriteToggleComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavoriteToggleComponent, [{
        type: Component,
        args: [{ selector: 'scrm-favorite-toggle', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"!favorite\">\n    <scrm-button [config]=\"addButton\"></scrm-button>\n</ng-container>\n<ng-container *ngIf=\"favorite\">\n    <scrm-button [config]=\"removeButton\"></scrm-button>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.FavoritesService }]; }, { record: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGUtdG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL2Zhdm9yaXRlLXRvZ2dsZS9jb21wb25lbnRzL2Zhdm9yaXRlLXRvZ2dsZS9mYXZvcml0ZS10b2dnbGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvZmF2b3JpdGUtdG9nZ2xlL2NvbXBvbmVudHMvZmF2b3JpdGUtdG9nZ2xlL2Zhdm9yaXRlLXRvZ2dsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBRWxFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZEQUE2RCxDQUFDO0FBQzdGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDOzs7Ozs7SUNGeEYsNkJBQWdDO0lBQzVCLGlDQUFnRDtJQUNwRCwwQkFBZTs7O0lBREUsZUFBb0I7SUFBcEIseUNBQW9COzs7SUFFckMsNkJBQStCO0lBQzNCLGlDQUFtRDtJQUN2RCwwQkFBZTs7O0lBREUsZUFBdUI7SUFBdkIsNENBQXVCOztBREF4QyxNQUthLHVCQUF1QjtJQU9oQyxZQUNjLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBSnZDLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFNMUIsQ0FBQztJQUVELFFBQVE7UUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsSUFBSSxLQUFLLENBQUM7UUFFaEQsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNiLEtBQUssRUFBRSxDQUFDLHlEQUF5RCxDQUFDO1lBQ2xFLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFO29CQUMvQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDO1lBQ0QsSUFBSSxFQUFFLE1BQU07U0FDSSxDQUFDO1FBRXJCLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDaEIsS0FBSyxFQUFFLENBQUMsd0RBQXdELENBQUM7WUFDakUsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDVixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDO1lBQ0QsSUFBSSxFQUFFLE1BQU07U0FDSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRVMsR0FBRztRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFUyxNQUFNO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQzt3RkE1RFEsdUJBQXVCO29FQUF2Qix1QkFBdUI7WUNUcEMsMEZBRWU7WUFDZiwwRkFFZTs7WUFMQSxvQ0FBZTtZQUdmLGVBQWM7WUFBZCxtQ0FBYzs7O1NETWhCLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBTG5DLFNBQVM7MkJBQ0ksc0JBQXNCO21FQUt2QixNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCdXR0b25JbnRlcmZhY2UsIFJlY29yZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7RmF2b3JpdGVzU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9mYXZvcml0ZXMvZmF2b3JpdGVzLnNlcnZpY2UnO1xuaW1wb3J0IHtJbW1lZGlhdGVEZWJvdW5jZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdXRpbHMvaW1tZWRpYXRlLWRlYm91bmNlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tZmF2b3JpdGUtdG9nZ2xlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZmF2b3JpdGUtdG9nZ2xlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEZhdm9yaXRlVG9nZ2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHJlY29yZDogUmVjb3JkO1xuICAgIGFkZEJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlO1xuICAgIHJlbW92ZUJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlO1xuICAgIGZhdm9yaXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIGRlYm91bmNlU2VydmljZTogSW1tZWRpYXRlRGVib3VuY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGhhbmRsZXI6IEZhdm9yaXRlc1NlcnZpY2UsXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLnJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZWJvdW5jZVNlcnZpY2UgPSBuZXcgSW1tZWRpYXRlRGVib3VuY2UoKTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVNlcnZpY2UuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMuZmF2b3JpdGUgPSB0aGlzPy5yZWNvcmQ/LmZhdm9yaXRlID8/IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYWRkQnV0dG9uID0ge1xuICAgICAgICAgICAga2xhc3M6IFsnYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1saWdodCBmYXZvcml0ZS1zdGFyIGZhdm9yaXRlLW9mZiddLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2VTZXJ2aWNlLmRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb246ICdzdGFyJ1xuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuICAgICAgICB0aGlzLnJlbW92ZUJ1dHRvbiA9IHtcbiAgICAgICAgICAgIGtsYXNzOiBbJ2J0biBidG4tc20gYnRuLW91dGxpbmUtbGlnaHQgZmF2b3JpdGUtc3RhciBmYXZvcml0ZS1vbiddLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2VTZXJ2aWNlLmRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb246ICdzdGFyJ1xuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVNlcnZpY2UuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVjb3JkLmZhdm9yaXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mYXZvcml0ZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IGZhdm9yaXRlID0gdGhpcy5oYW5kbGVyLmJ1aWxkKHRoaXMucmVjb3JkLm1vZHVsZSwgdGhpcy5yZWNvcmQuaWQpO1xuICAgICAgICB0aGlzLmhhbmRsZXIuYWRkKHRoaXMucmVjb3JkLm1vZHVsZSwgZmF2b3JpdGUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZW1vdmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVjb3JkLmZhdm9yaXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmF2b3JpdGUgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZmF2b3JpdGUgPSB0aGlzLmhhbmRsZXIuYnVpbGQodGhpcy5yZWNvcmQubW9kdWxlLCB0aGlzLnJlY29yZC5pZCk7XG4gICAgICAgIHRoaXMuaGFuZGxlci5yZW1vdmUodGhpcy5yZWNvcmQubW9kdWxlLCBmYXZvcml0ZSk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmYXZvcml0ZVwiPlxuICAgIDxzY3JtLWJ1dHRvbiBbY29uZmlnXT1cImFkZEJ1dHRvblwiPjwvc2NybS1idXR0b24+XG48L25nLWNvbnRhaW5lcj5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJmYXZvcml0ZVwiPlxuICAgIDxzY3JtLWJ1dHRvbiBbY29uZmlnXT1cInJlbW92ZUJ1dHRvblwiPjwvc2NybS1idXR0b24+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==