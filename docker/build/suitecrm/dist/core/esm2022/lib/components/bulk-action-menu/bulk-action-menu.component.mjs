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
import { SelectionStatus } from 'common';
import { LanguageStore } from '../../store/language/language.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "../dropdown-button/dropdown-button.component";
import * as i5 from "../label/label.component";
function BulkActionMenuComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-label", 17);
    i0.ɵɵelementContainerEnd();
} }
class BulkActionMenuComponent {
    constructor(languageStore) {
        this.languageStore = languageStore;
        this.subs = [];
        this.status = SelectionStatus.NONE;
        this.count = 0;
        this.SelectionStatus = SelectionStatus;
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
        this.count = 0;
        this.status = SelectionStatus.NONE;
    }
    ngOnInit() {
        this.subs = [];
        this.subs.push(this.selectionSource.getSelectionStatus().subscribe(status => this.status = status));
        this.subs.push(this.selectionSource.getSelectedCount().subscribe(count => this.count = count));
        this.subs.push(this.actionSource.getBulkActions().subscribe(actions => {
            const dropdownConfig = {
                labelKey: 'LBL_BULK_ACTION_BUTTON_LABEL',
                klass: ['bulk-action-button', 'btn', 'btn-sm'],
                wrapperKlass: ['bulk-action-group', 'float-left'],
                items: []
            };
            const dropdownSmallConfig = {
                labelKey: 'LBL_ACTION',
                klass: ['bulk-action-button', 'btn', 'btn-sm'],
                wrapperKlass: ['bulk-action-group', 'float-left'],
                items: []
            };
            Object.keys(actions).forEach(actionKey => {
                const action = actions[actionKey];
                dropdownConfig.items.push({
                    labelKey: action.labelKey ?? '',
                    klass: [`${actionKey}-bulk-action`],
                    onClick: () => {
                        this.actionSource.executeBulkAction(action.key);
                    }
                });
                dropdownSmallConfig.items.push({
                    labelKey: action.labelKey ?? '',
                    klass: [`${actionKey}-bulk-action`],
                    onClick: () => {
                        this.actionSource.executeBulkAction(action.key);
                    }
                });
            });
            this.dropdownConfig = dropdownConfig;
            this.dropdownSmallConfig = dropdownSmallConfig;
        }));
    }
    selectPage() {
        this.selectionSource.updateSelection(SelectionStatus.PAGE);
    }
    selectAll() {
        this.selectionSource.updateSelection(SelectionStatus.ALL);
    }
    deselectAll() {
        this.selectionSource.updateSelection(SelectionStatus.NONE);
    }
    toggleSelection(status) {
        if (status === SelectionStatus.ALL) {
            this.selectionSource.updateSelection(SelectionStatus.NONE);
            return;
        }
        this.selectionSource.updateSelection(SelectionStatus.ALL);
    }
    static { this.ɵfac = function BulkActionMenuComponent_Factory(t) { return new (t || BulkActionMenuComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BulkActionMenuComponent, selectors: [["scrm-bulk-action-menu"]], inputs: { selectionSource: "selectionSource", actionSource: "actionSource" }, decls: 18, vars: 8, consts: [[1, "bulk-action", "d-flex"], ["ngbDropdown", "", 1, "dropdown", "select-action-group"], ["type", "button", "ngbDropdownToggle", "", "aria-haspopup", "true", "aria-expanded", "false", "aria-hidden", "true", "aria-label", "Select Action Menu", 1, "bulk-action-button", "dropdown-toggle", "btn", "btn-sm"], [1, "checkbox-container"], ["type", "checkbox", "aria-hidden", "true", 3, "checked", "indeterminate", "change"], [1, "checkmark"], [1, "bulk-action-selected-number"], [4, "ngIf"], ["ngbDropdownMenu", "", "aria-hidden", "true", 1, "dropdown-menu"], [1, "dropdown-item", "select-all", 3, "click"], ["labelKey", "LBL_LISTVIEW_OPTION_ENTIRE"], [1, "dropdown-item", "select-page", 3, "click"], ["labelKey", "LBL_LISTVIEW_OPTION_CURRENT"], [1, "dropdown-item", "deselect-all", 3, "click"], ["labelKey", "LBL_LISTVIEW_NONE"], [1, "d-block", "d-sm-none", 3, "disabled", "config"], [1, "d-none", "d-sm-block", 3, "disabled", "config"], ["labelKey", "LBL_LISTVIEW_SELECTED_OBJECTS", 1, "d-none", "d-sm-inline"]], template: function BulkActionMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "button", 2)(3, "label", 3)(4, "input", 4);
            i0.ɵɵlistener("change", function BulkActionMenuComponent_Template_input_change_4_listener() { return ctx.toggleSelection(ctx.status); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "span", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span", 6);
            i0.ɵɵtemplate(7, BulkActionMenuComponent_ng_container_7_Template, 2, 0, "ng-container", 7);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 8)(10, "a", 9);
            i0.ɵɵlistener("click", function BulkActionMenuComponent_Template_a_click_10_listener() { return ctx.selectAll(); });
            i0.ɵɵelement(11, "scrm-label", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "a", 11);
            i0.ɵɵlistener("click", function BulkActionMenuComponent_Template_a_click_12_listener() { return ctx.selectPage(); });
            i0.ɵɵelement(13, "scrm-label", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "a", 13);
            i0.ɵɵlistener("click", function BulkActionMenuComponent_Template_a_click_14_listener() { return ctx.deselectAll(); });
            i0.ɵɵelement(15, "scrm-label", 14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(16, "scrm-dropdown-button", 15)(17, "scrm-dropdown-button", 16);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("checked", ctx.status === "ALL")("indeterminate", ctx.status === "SOME" || ctx.status === "PAGE");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.count > 0);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.count > 0 ? ctx.count : "", " ");
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("disabled", ctx.count < 1)("config", ctx.dropdownSmallConfig);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", ctx.count < 1)("config", ctx.dropdownConfig);
        } }, dependencies: [i2.NgIf, i3.NgbDropdown, i3.NgbDropdownToggle, i3.NgbDropdownMenu, i4.DropdownButtonComponent, i5.LabelComponent], encapsulation: 2 }); }
}
export { BulkActionMenuComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BulkActionMenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-bulk-action-menu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"bulk-action d-flex\">\n    <div ngbDropdown class=\"dropdown select-action-group\">\n        <button class=\"bulk-action-button dropdown-toggle btn btn-sm\"\n                type=\"button\"\n                ngbDropdownToggle\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                aria-hidden=\"true\"\n                aria-label=\"Select Action Menu\">\n            <label class=\"checkbox-container\">\n                <input type=\"checkbox\"\n                       [checked]=\"status === 'ALL'\"\n                       [indeterminate]=\"status === 'SOME' || status === 'PAGE'\"\n                       (change)=\"toggleSelection(status)\"\n                       aria-hidden=\"true\">\n                <span class=\"checkmark\"></span>\n            </label>\n            <span class=\"bulk-action-selected-number\">\n                <ng-container *ngIf=\"count > 0\"> <scrm-label class=\"d-none d-sm-inline\" labelKey=\"LBL_LISTVIEW_SELECTED_OBJECTS\"></scrm-label></ng-container> {{count > 0 ? count : ''}}\n            </span>\n        </button>\n        <div class=\"dropdown-menu\"\n             ngbDropdownMenu\n             aria-hidden=\"true\">\n            <a class=\"dropdown-item select-all\" (click)=\"selectAll()\">\n                <scrm-label labelKey=\"LBL_LISTVIEW_OPTION_ENTIRE\"></scrm-label>\n            </a>\n            <a class=\"dropdown-item select-page\" (click)=\"selectPage()\">\n                <scrm-label labelKey=\"LBL_LISTVIEW_OPTION_CURRENT\"></scrm-label>\n            </a>\n            <a class=\"dropdown-item deselect-all\" (click)=\"deselectAll()\">\n                <scrm-label labelKey=\"LBL_LISTVIEW_NONE\"></scrm-label>\n            </a>\n        </div>\n    </div>\n    <scrm-dropdown-button class=\"d-block d-sm-none\"\n                          [disabled]=\"count < 1\"\n                          [config]=\"dropdownSmallConfig\">\n    </scrm-dropdown-button>\n    <scrm-dropdown-button class=\"d-none d-sm-block\"\n                          [disabled]=\"count < 1\"\n                          [config]=\"dropdownConfig\">\n    </scrm-dropdown-button>\n</div>\n" }]
    }], function () { return [{ type: i1.LanguageStore }]; }, { selectionSource: [{
            type: Input
        }], actionSource: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsay1hY3Rpb24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9idWxrLWFjdGlvbi1tZW51L2J1bGstYWN0aW9uLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYnVsay1hY3Rpb24tbWVudS9idWxrLWFjdGlvbi1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFFbEUsT0FBTyxFQUErRCxlQUFlLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDckcsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7OztJQ2dCbEQsNkJBQWdDO0lBQUMsaUNBQTZGO0lBQUEsMEJBQWU7O0FERjdKLE1BSWEsdUJBQXVCO0lBV2hDLFlBQXNCLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSmxELFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBQzFCLFdBQU0sR0FBb0IsZUFBZSxDQUFDLElBQUksQ0FBQztRQUMvQyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBNkVDLG9CQUFlLEdBQUcsZUFBZSxDQUFDO0lBMUVyRCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdB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QUNuQyxJQUFJLE1BQU0sS0FBSyxlQUFlLENBQUMsR0FBRyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUQsQ0FBQzt3RkFwRlEsdUJBQXVCO29FQUF2Qix1QkFBdUI7WUNwQnBDLDhCQUFnQyxhQUFBLGdCQUFBLGVBQUEsZUFBQTtZQWFULHFHQUFVLCtCQUF1QixJQUFDO1lBSHpDLGlCQUkwQjtZQUMxQiwwQkFBK0I7WUFDbkMsaUJBQVE7WUFDUiwrQkFBMEM7WUFDdEMsMEZBQTZJO1lBQUMsWUFDbEo7WUFBQSxpQkFBTyxFQUFBO1lBRVgsOEJBRXdCLFlBQUE7WUFDZ0IsZ0dBQVMsZUFBVyxJQUFDO1lBQ3JELGtDQUErRDtZQUNuRSxpQkFBSTtZQUNKLDhCQUE0RDtZQUF2QixnR0FBUyxnQkFBWSxJQUFDO1lBQ3ZELGtDQUFnRTtZQUNwRSxpQkFBSTtZQUNKLDhCQUE4RDtZQUF4QixnR0FBUyxpQkFBYSxJQUFDO1lBQ3pELGtDQUFzRDtZQUMxRCxpQkFBSSxFQUFBLEVBQUE7WUFHWiw0Q0FHdUIsZ0NBQUE7WUFLM0IsaUJBQU07O1lBaENpQixlQUE0QjtZQUE1Qiw4Q0FBNEIsaUVBQUE7WUFPcEIsZUFBZTtZQUFmLG9DQUFlO1lBQWdILGVBQ2xKO1lBRGtKLCtEQUNsSjtZQWlCYyxlQUFzQjtZQUF0Qix3Q0FBc0IsbUNBQUE7WUFJdEIsZUFBc0I7WUFBdEIsd0NBQXNCLDhCQUFBOzs7U0RwQm5DLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBSm5DLFNBQVM7MkJBQ0ksdUJBQXVCO2dFQUt4QixlQUFlO2tCQUF2QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0J1bGtBY3Rpb25zTWFwLCBEcm9wZG93bkJ1dHRvbkludGVyZmFjZSwgU2VsZWN0aW9uRGF0YVNvdXJjZSwgU2VsZWN0aW9uU3RhdHVzfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVsa0FjdGlvbkRhdGFTb3VyY2Uge1xuICAgIGdldEJ1bGtBY3Rpb25zKCk6IE9ic2VydmFibGU8QnVsa0FjdGlvbnNNYXA+O1xuXG4gICAgZXhlY3V0ZUJ1bGtBY3Rpb24oYWN0aW9uOiBzdHJpbmcpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1bGtBY3Rpb25WaWV3TW9kZWwge1xuICAgIHN0YXR1czogU2VsZWN0aW9uU3RhdHVzO1xuICAgIGNvdW50OiBudW1iZXI7XG4gICAgYWN0aW9uczogQnVsa0FjdGlvbnNNYXA7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1idWxrLWFjdGlvbi1tZW51JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2J1bGstYWN0aW9uLW1lbnUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJ1bGtBY3Rpb25NZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgc2VsZWN0aW9uU291cmNlOiBTZWxlY3Rpb25EYXRhU291cmNlO1xuICAgIEBJbnB1dCgpIGFjdGlvblNvdXJjZTogQnVsa0FjdGlvbkRhdGFTb3VyY2U7XG5cbiAgICBkcm9wZG93bkNvbmZpZzogRHJvcGRvd25CdXR0b25JbnRlcmZhY2U7XG4gICAgZHJvcGRvd25TbWFsbENvbmZpZzogRHJvcGRvd25CdXR0b25JbnRlcmZhY2U7XG4gICAgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBzdGF0dXM6IFNlbGVjdGlvblN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy5OT05FO1xuICAgIGNvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUpIHtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5zdWJzID0gW107XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy5OT05FO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMgPSBbXTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnNlbGVjdGlvblNvdXJjZS5nZXRTZWxlY3Rpb25TdGF0dXMoKS5zdWJzY3JpYmUoc3RhdHVzID0+IHRoaXMuc3RhdHVzID0gc3RhdHVzKSk7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuc2VsZWN0aW9uU291cmNlLmdldFNlbGVjdGVkQ291bnQoKS5zdWJzY3JpYmUoY291bnQgPT4gdGhpcy5jb3VudCA9IGNvdW50KSk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5hY3Rpb25Tb3VyY2UuZ2V0QnVsa0FjdGlvbnMoKS5zdWJzY3JpYmUoYWN0aW9ucyA9PiB7XG4gICAgICAgICAgICBjb25zdCBkcm9wZG93bkNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9CVUxLX0FDVElPTl9CVVRUT05fTEFCRUwnLFxuICAgICAgICAgICAgICAgIGtsYXNzOiBbJ2J1bGstYWN0aW9uLWJ1dHRvbicsICdidG4nLCAnYnRuLXNtJ10sXG4gICAgICAgICAgICAgICAgd3JhcHBlcktsYXNzOiBbJ2J1bGstYWN0aW9uLWdyb3VwJywgJ2Zsb2F0LWxlZnQnXSxcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgIH0gYXMgRHJvcGRvd25CdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duU21hbGxDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfQUNUSU9OJyxcbiAgICAgICAgICAgICAgICBrbGFzczogWydidWxrLWFjdGlvbi1idXR0b24nLCAnYnRuJywgJ2J0bi1zbSddLFxuICAgICAgICAgICAgICAgIHdyYXBwZXJLbGFzczogWydidWxrLWFjdGlvbi1ncm91cCcsICdmbG9hdC1sZWZ0J10sXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgICB9IGFzIERyb3Bkb3duQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKGFjdGlvbktleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uc1thY3Rpb25LZXldO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29uZmlnLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEtleTogYWN0aW9uLmxhYmVsS2V5ID8/ICcnLFxuICAgICAgICAgICAgICAgICAgICBrbGFzczogW2Ake2FjdGlvbktleX0tYnVsay1hY3Rpb25gXSxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25Tb3VyY2UuZXhlY3V0ZUJ1bGtBY3Rpb24oYWN0aW9uLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkcm9wZG93blNtYWxsQ29uZmlnLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEtleTogYWN0aW9uLmxhYmVsS2V5ID8/ICcnLFxuICAgICAgICAgICAgICAgICAgICBrbGFzczogW2Ake2FjdGlvbktleX0tYnVsay1hY3Rpb25gXSxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25Tb3VyY2UuZXhlY3V0ZUJ1bGtBY3Rpb24oYWN0aW9uLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duQ29uZmlnID0gZHJvcGRvd25Db25maWc7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU21hbGxDb25maWcgPSBkcm9wZG93blNtYWxsQ29uZmlnO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgc2VsZWN0UGFnZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25Tb3VyY2UudXBkYXRlU2VsZWN0aW9uKFNlbGVjdGlvblN0YXR1cy5QQUdFKTtcbiAgICB9XG5cbiAgICBzZWxlY3RBbGwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU291cmNlLnVwZGF0ZVNlbGVjdGlvbihTZWxlY3Rpb25TdGF0dXMuQUxMKTtcbiAgICB9XG5cbiAgICBkZXNlbGVjdEFsbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25Tb3VyY2UudXBkYXRlU2VsZWN0aW9uKFNlbGVjdGlvblN0YXR1cy5OT05FKTtcbiAgICB9XG5cbiAgICB0b2dnbGVTZWxlY3Rpb24oc3RhdHVzOiBTZWxlY3Rpb25TdGF0dXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gU2VsZWN0aW9uU3RhdHVzLkFMTCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25Tb3VyY2UudXBkYXRlU2VsZWN0aW9uKFNlbGVjdGlvblN0YXR1cy5OT05FKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU291cmNlLnVwZGF0ZVNlbGVjdGlvbihTZWxlY3Rpb25TdGF0dXMuQUxMKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgU2VsZWN0aW9uU3RhdHVzID0gU2VsZWN0aW9uU3RhdHVzO1xufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cImJ1bGstYWN0aW9uIGQtZmxleFwiPlxuICAgIDxkaXYgbmdiRHJvcGRvd24gY2xhc3M9XCJkcm9wZG93biBzZWxlY3QtYWN0aW9uLWdyb3VwXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidWxrLWFjdGlvbi1idXR0b24gZHJvcGRvd24tdG9nZ2xlIGJ0biBidG4tc21cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG5nYkRyb3Bkb3duVG9nZ2xlXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VsZWN0IEFjdGlvbiBNZW51XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwic3RhdHVzID09PSAnQUxMJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cInN0YXR1cyA9PT0gJ1NPTUUnIHx8IHN0YXR1cyA9PT0gJ1BBR0UnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJ0b2dnbGVTZWxlY3Rpb24oc3RhdHVzKVwiXG4gICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnVsay1hY3Rpb24tc2VsZWN0ZWQtbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvdW50ID4gMFwiPiA8c2NybS1sYWJlbCBjbGFzcz1cImQtbm9uZSBkLXNtLWlubGluZVwiIGxhYmVsS2V5PVwiTEJMX0xJU1RWSUVXX1NFTEVDVEVEX09CSkVDVFNcIj48L3Njcm0tbGFiZWw+PC9uZy1jb250YWluZXI+IHt7Y291bnQgPiAwID8gY291bnQgOiAnJ319XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiXG4gICAgICAgICAgICAgbmdiRHJvcGRvd25NZW51XG4gICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gc2VsZWN0LWFsbFwiIChjbGljayk9XCJzZWxlY3RBbGwoKVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX0xJU1RWSUVXX09QVElPTl9FTlRJUkVcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gc2VsZWN0LXBhZ2VcIiAoY2xpY2spPVwic2VsZWN0UGFnZSgpXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfTElTVFZJRVdfT1BUSU9OX0NVUlJFTlRcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gZGVzZWxlY3QtYWxsXCIgKGNsaWNrKT1cImRlc2VsZWN0QWxsKClcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9MSVNUVklFV19OT05FXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c2NybS1kcm9wZG93bi1idXR0b24gY2xhc3M9XCJkLWJsb2NrIGQtc20tbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjb3VudCA8IDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImRyb3Bkb3duU21hbGxDb25maWdcIj5cbiAgICA8L3Njcm0tZHJvcGRvd24tYnV0dG9uPlxuICAgIDxzY3JtLWRyb3Bkb3duLWJ1dHRvbiBjbGFzcz1cImQtbm9uZSBkLXNtLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNvdW50IDwgMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiZHJvcGRvd25Db25maWdcIj5cbiAgICA8L3Njcm0tZHJvcGRvd24tYnV0dG9uPlxuPC9kaXY+XG4iXX0=