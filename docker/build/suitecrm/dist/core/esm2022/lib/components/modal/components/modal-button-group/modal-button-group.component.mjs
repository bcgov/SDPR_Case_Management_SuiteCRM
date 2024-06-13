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
import { Observable } from 'rxjs';
import { deepClone } from 'common';
import { map } from 'rxjs/operators';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import defaults from 'lodash-es/defaults';
import { ButtonUtils } from '../../../button/button.utils';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../button/button.utils";
import * as i2 from "../../../../store/system-config/system-config.store";
import * as i3 from "../../../button-group/button-group.component";
class ModalButtonGroupComponent {
    constructor(buttonUtils, config) {
        this.buttonUtils = buttonUtils;
        this.config = config;
        this.activeModal = null;
        this.defaultButtonGroup = {
            breakpoint: 4,
            wrapperKlass: ['modal-buttons'],
            buttonKlass: ['modal-button', 'btn', 'btn-sm'],
            buttons: []
        };
        const ui = this.config.getConfigValue('ui');
        if (ui && ui.modal_button_group_breakpoint) {
            this.defaultButtonGroup.breakpoint = ui.modal_buttons_collapse_breakpoint;
        }
    }
    ngOnInit() {
        if (this.config$) {
            this.buttonGroup$ = this.config$.pipe(map((config) => this.mapButtonGroup(config)));
        }
    }
    mapButtonGroup(config) {
        const group = defaults({ ...config }, deepClone(this.defaultButtonGroup));
        this.mapButtons(group);
        return group;
    }
    mapButtons(group) {
        const buttons = group.buttons || [];
        group.buttons = [];
        if (buttons.length > 0) {
            buttons.forEach(modalButton => {
                const button = this.buttonUtils.addOnClickPartial(modalButton, this.activeModal);
                group.buttons.push(button);
            });
        }
    }
    static { this.ɵfac = function ModalButtonGroupComponent_Factory(t) { return new (t || ModalButtonGroupComponent)(i0.ɵɵdirectiveInject(i1.ButtonUtils), i0.ɵɵdirectiveInject(i2.SystemConfigStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalButtonGroupComponent, selectors: [["scrm-modal-button-group"]], inputs: { config$: "config$", activeModal: "activeModal" }, decls: 1, vars: 1, consts: [[3, "config$"]], template: function ModalButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "scrm-button-group", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("config$", ctx.buttonGroup$);
        } }, dependencies: [i3.ButtonGroupComponent], encapsulation: 2 }); }
}
export { ModalButtonGroupComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalButtonGroupComponent, [{
        type: Component,
        args: [{ selector: 'scrm-modal-button-group', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-button-group [config$]=\"buttonGroup$\"></scrm-button-group>\n" }]
    }], function () { return [{ type: i1.ButtonUtils }, { type: i2.SystemConfigStore }]; }, { config$: [{
            type: Input
        }], activeModal: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL21vZGFsL2NvbXBvbmVudHMvbW9kYWwtYnV0dG9uLWdyb3VwL21vZGFsLWJ1dHRvbi1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL21vZGFsLWJ1dHRvbi1ncm91cC9tb2RhbC1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDaEMsT0FBTyxFQUF1QixTQUFTLEVBQTRCLE1BQU0sUUFBUSxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOzs7OztBQUV0RixNQUthLHlCQUF5QjtJQWFsQyxZQUNjLFdBQXdCLEVBQ3hCLE1BQXlCO1FBRHpCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBWjlCLGdCQUFXLEdBQW1CLElBQUksQ0FBQztRQUdsQyx1QkFBa0IsR0FBeUI7WUFDakQsVUFBVSxFQUFFLENBQUM7WUFDYixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7WUFDL0IsV0FBVyxFQUFFLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7WUFDOUMsT0FBTyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBTUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLDZCQUE2QixFQUFFO1lBQ3hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQzdFO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFFSixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNqQyxHQUFHLENBQUMsQ0FBQyxNQUE0QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ3JFLENBQUM7U0FDTDtJQUNMLENBQUM7SUFFUyxjQUFjLENBQUMsTUFBNEI7UUFDakQsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEVBQUMsR0FBRyxNQUFNLEVBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUV4RSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFUyxVQUFVLENBQUMsS0FBMkI7UUFDNUMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDcEMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbkIsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUMxQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pGLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDOzBGQWxEUSx5QkFBeUI7b0VBQXpCLHlCQUF5QjtZQ2J0Qyx1Q0FBZ0U7O1lBQTdDLDBDQUF3Qjs7O1NEYTlCLHlCQUF5Qjt1RkFBekIseUJBQXlCO2NBTHJDLFNBQVM7MkJBQ0kseUJBQXlCOzhGQU0xQixPQUFPO2tCQUFmLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtCdXR0b25Hcm91cEludGVyZmFjZSwgZGVlcENsb25lLCBNb2RhbEJ1dHRvbkdyb3VwSW50ZXJmYWNlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TmdiQWN0aXZlTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICdsb2Rhc2gtZXMvZGVmYXVsdHMnO1xuaW1wb3J0IHtCdXR0b25VdGlsc30gZnJvbSAnLi4vLi4vLi4vYnV0dG9uL2J1dHRvbi51dGlscyc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tbW9kYWwtYnV0dG9uLWdyb3VwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9kYWwtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQnV0dG9uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgY29uZmlnJDogT2JzZXJ2YWJsZTxNb2RhbEJ1dHRvbkdyb3VwSW50ZXJmYWNlPjtcbiAgICBASW5wdXQoKSBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwgPSBudWxsO1xuXG4gICAgYnV0dG9uR3JvdXAkOiBPYnNlcnZhYmxlPEJ1dHRvbkdyb3VwSW50ZXJmYWNlPjtcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdEJ1dHRvbkdyb3VwOiBCdXR0b25Hcm91cEludGVyZmFjZSA9IHtcbiAgICAgICAgYnJlYWtwb2ludDogNCxcbiAgICAgICAgd3JhcHBlcktsYXNzOiBbJ21vZGFsLWJ1dHRvbnMnXSxcbiAgICAgICAgYnV0dG9uS2xhc3M6IFsnbW9kYWwtYnV0dG9uJywgJ2J0bicsICdidG4tc20nXSxcbiAgICAgICAgYnV0dG9uczogW11cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBidXR0b25VdGlsczogQnV0dG9uVXRpbHMsXG4gICAgICAgIHByb3RlY3RlZCBjb25maWc6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICkge1xuICAgICAgICBjb25zdCB1aSA9IHRoaXMuY29uZmlnLmdldENvbmZpZ1ZhbHVlKCd1aScpO1xuICAgICAgICBpZiAodWkgJiYgdWkubW9kYWxfYnV0dG9uX2dyb3VwX2JyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdEJ1dHRvbkdyb3VwLmJyZWFrcG9pbnQgPSB1aS5tb2RhbF9idXR0b25zX2NvbGxhcHNlX2JyZWFrcG9pbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5jb25maWckKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkdyb3VwJCA9IHRoaXMuY29uZmlnJC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgoY29uZmlnOiBCdXR0b25Hcm91cEludGVyZmFjZSkgPT4gdGhpcy5tYXBCdXR0b25Hcm91cChjb25maWcpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBCdXR0b25Hcm91cChjb25maWc6IEJ1dHRvbkdyb3VwSW50ZXJmYWNlKTogQnV0dG9uR3JvdXBJbnRlcmZhY2Uge1xuICAgICAgICBjb25zdCBncm91cCA9IGRlZmF1bHRzKHsuLi5jb25maWd9LCBkZWVwQ2xvbmUodGhpcy5kZWZhdWx0QnV0dG9uR3JvdXApKTtcblxuICAgICAgICB0aGlzLm1hcEJ1dHRvbnMoZ3JvdXApO1xuXG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwQnV0dG9ucyhncm91cDogQnV0dG9uR3JvdXBJbnRlcmZhY2UpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGdyb3VwLmJ1dHRvbnMgfHwgW107XG4gICAgICAgIGdyb3VwLmJ1dHRvbnMgPSBbXTtcblxuICAgICAgICBpZiAoYnV0dG9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBidXR0b25zLmZvckVhY2gobW9kYWxCdXR0b24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnV0dG9uVXRpbHMuYWRkT25DbGlja1BhcnRpYWwobW9kYWxCdXR0b24sIHRoaXMuYWN0aXZlTW9kYWwpO1xuICAgICAgICAgICAgICAgIGdyb3VwLmJ1dHRvbnMucHVzaChidXR0b24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48c2NybS1idXR0b24tZ3JvdXAgW2NvbmZpZyRdPVwiYnV0dG9uR3JvdXAkXCI+PC9zY3JtLWJ1dHRvbi1ncm91cD5cbiJdfQ==