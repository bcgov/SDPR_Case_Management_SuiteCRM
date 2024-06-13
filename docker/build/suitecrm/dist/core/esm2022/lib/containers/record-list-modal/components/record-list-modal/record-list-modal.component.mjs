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
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { animate, transition, trigger } from '@angular/animations';
import { of } from 'rxjs';
import { distinctUntilChanged, skip } from 'rxjs/operators';
import { ModalRecordFilterAdapter } from '../../adapters/filter.adapter';
import { ModalRecordListTableAdapter } from '../../adapters/table.adapter';
import { RecordListModalStoreFactory } from '../../store/record-list-modal/record-list-modal.store.factory';
import { MaxColumnsCalculator } from '../../../../services/ui/max-columns-calculator/max-columns-calculator.service';
import { LanguageStore } from '../../../../store/language/language.store';
import { UserPreferenceStore } from "../../../../store/user-preference/user-preference.store";
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../store/record-list-modal/record-list-modal.store.factory";
import * as i3 from "../../../../store/language/language.store";
import * as i4 from "../../../../services/ui/max-columns-calculator/max-columns-calculator.service";
import * as i5 from "../../../../store/user-preference/user-preference.store";
import * as i6 from "../../../../store/system-config/system-config.store";
function RecordListModalComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-label", 3);
    i0.ɵɵelementContainerEnd();
} }
function RecordListModalComponent_ng_container_3_scrm_list_filter_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-list-filter", 9);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r2.filterConfig);
} }
function RecordListModalComponent_ng_container_3_ng_container_9_scrm_loading_spinner_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-loading-spinner", 11);
} if (rf & 2) {
    i0.ɵɵproperty("overlay", true);
} }
function RecordListModalComponent_ng_container_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordListModalComponent_ng_container_3_ng_container_9_scrm_loading_spinner_1_Template, 1, 1, "scrm-loading-spinner", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const loading_r5 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", loading_r5);
} }
function RecordListModalComponent_ng_container_3_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-button", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r4.buildSelectButton());
} }
function RecordListModalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div", 4)(3, "div", 5)(4, "div", 6);
    i0.ɵɵtemplate(5, RecordListModalComponent_ng_container_3_scrm_list_filter_5_Template, 1, 1, "scrm-list-filter", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 8)(7, "div", 6);
    i0.ɵɵelement(8, "scrm-table", 9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(9, RecordListModalComponent_ng_container_3_ng_container_9_Template, 2, 1, "ng-container", 2);
    i0.ɵɵpipe(10, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, RecordListModalComponent_ng_container_3_ng_container_11_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.filterConfig);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("config", ctx_r1.tableConfig);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(10, 4, ctx_r1.loading$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.multiSelect);
} }
class RecordListModalComponent {
    constructor(activeModal, storeFactory, languages, maxColumnCalculator, preferences, systemConfigs) {
        this.activeModal = activeModal;
        this.storeFactory = storeFactory;
        this.languages = languages;
        this.maxColumnCalculator = maxColumnCalculator;
        this.preferences = preferences;
        this.systemConfigs = systemConfigs;
        this.titleKey = '';
        this.multiSelect = false;
        this.multiSelectButtonLabel = 'LBL_SAVE';
        this.adapter = null;
        this.filterAdapter = null;
        this.subs = [];
        this.store = this.storeFactory.create();
    }
    ngOnInit() {
        this.closeButton = {
            klass: ['btn', 'btn-outline-light', 'btn-sm'],
            onClick: () => {
                this.activeModal.close({
                    type: 'close-button'
                });
            }
        };
        this.init();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    init() {
        if (!this.module) {
            return;
        }
        this.initStore();
        this.initTableAdapter();
        this.initFilterAdapters();
    }
    getMaxColumns() {
        return this.maxColumnCalculator.getMaxColumns(of(true));
    }
    linkSelectedRecords() {
        this.activeModal.close({
            selection: this.store.recordList.selection,
            records: this.store.recordList.records
        });
    }
    buildSelectButton() {
        return {
            klass: ['btn', 'btn-primary', 'btn-sm'],
            onClick: () => {
                this.linkSelectedRecords();
            },
            labelKey: this.multiSelectButtonLabel
        };
    }
    initTableAdapter() {
        if (this.adapter === null) {
            this.adapter = new ModalRecordListTableAdapter(this.systemConfigs, this.preferences);
        }
        this.tableConfig = this.adapter.getTable(this.store, this.multiSelect);
        if (this.store?.listMetadata?.maxHeight) {
            this.tableConfig.maxListHeight = this.store.listMetadata.maxHeight;
        }
        if (!this.tableConfig?.maxListHeight) {
            const ui = this.systemConfigs.getConfigValue('ui') ?? {};
            const configModalHeight = this.systemConfigs.getConfigValue('record_modal_max_height') ?? '';
            this.tableConfig.maxListHeight = ui.record_modal_max_height ?? configModalHeight;
        }
        this.tableConfig.maxColumns$ = this.getMaxColumns();
    }
    initFilterAdapters() {
        if (this.filterAdapter === null) {
            this.filterAdapter = new ModalRecordFilterAdapter();
        }
        this.filterConfig = this.filterAdapter.getConfig(this.store);
    }
    initStore() {
        this.store.init(this.module, this.parentModule ?? '');
        this.loading$ = this.store.metadataLoading$;
        this.subs.push(this.store.linkClicked$.pipe(distinctUntilChanged(), skip(1)).subscribe(clicked => {
            if (!clicked) {
                return;
            }
            this.linkSelectedRecords();
        }));
    }
    static { this.ɵfac = function RecordListModalComponent_Factory(t) { return new (t || RecordListModalComponent)(i0.ɵɵdirectiveInject(i1.NgbActiveModal), i0.ɵɵdirectiveInject(i2.RecordListModalStoreFactory), i0.ɵɵdirectiveInject(i3.LanguageStore), i0.ɵɵdirectiveInject(i4.MaxColumnsCalculator), i0.ɵɵdirectiveInject(i5.UserPreferenceStore), i0.ɵɵdirectiveInject(i6.SystemConfigStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordListModalComponent, selectors: [["scrm-record-list-modal"]], inputs: { titleKey: "titleKey", module: "module", parentModule: "parentModule", multiSelect: "multiSelect", multiSelectButtonLabel: "multiSelectButtonLabel", adapter: "adapter", filterAdapter: "filterAdapter" }, features: [i0.ɵɵProvidersFeature([MaxColumnsCalculator])], decls: 4, vars: 5, consts: [["bodyKlass", "m-0 small-font", "footerKlass", "border-0", "headerKlass", "border-0", "klass", "record-list-modal", 3, "closable", "close", "title"], ["modal-body", ""], [4, "ngIf"], ["labelKey", "LBL_CONFIG_NO_CONFIG"], [1, "container-fluid"], [1, "row", "pb-3"], [1, "col"], [3, "config", 4, "ngIf"], [1, "row"], [3, "config"], [3, "overlay", 4, "ngIf"], [3, "overlay"]], template: function RecordListModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-modal", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, RecordListModalComponent_ng_container_2_Template, 2, 0, "ng-container", 2);
            i0.ɵɵtemplate(3, RecordListModalComponent_ng_container_3_Template, 12, 6, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("closable", true)("close", ctx.closeButton)("title", ctx.titleKey);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.tableConfig);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.tableConfig);
        } }, encapsulation: 2, data: { animation: [
                trigger('modalFade', [
                    transition('void <=> *', [
                        animate('800ms')
                    ]),
                ]),
            ] } }); }
}
export { RecordListModalComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordListModalComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-list-modal', providers: [MaxColumnsCalculator], animations: [
                    trigger('modalFade', [
                        transition('void <=> *', [
                            animate('800ms')
                        ]),
                    ]),
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-modal [closable]=\"true\"\n            [close]=\"closeButton\"\n            [title]=\"titleKey\"\n            bodyKlass=\"m-0 small-font\"\n            footerKlass=\"border-0\"\n            headerKlass=\"border-0\"\n            klass=\"record-list-modal\">\n\n    <div modal-body>\n\n        <ng-container *ngIf=\"!tableConfig\">\n            <scrm-label labelKey=\"LBL_CONFIG_NO_CONFIG\"></scrm-label>\n        </ng-container>\n\n        <ng-container *ngIf=\"tableConfig\">\n            <div>\n                <div class=\"container-fluid\">\n                    <div class=\"row pb-3\">\n                        <div class=\"col\">\n                            <scrm-list-filter *ngIf=\"filterConfig\" [config]=\"filterConfig\"></scrm-list-filter>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <scrm-table [config]=\"tableConfig\">\n                            </scrm-table>\n                        </div>\n                    </div>\n                </div>\n\n                <ng-container *ngIf=\"(loading$ | async) as loading\">\n                    <scrm-loading-spinner *ngIf=\"loading\" [overlay]=\"true\"></scrm-loading-spinner>\n                </ng-container>\n            </div>\n            <ng-container *ngIf=\"multiSelect\">\n                    <scrm-button [config]=\"buildSelectButton()\"></scrm-button>\n            </ng-container>\n        </ng-container>\n    </div>\n</scrm-modal>\n" }]
    }], function () { return [{ type: i1.NgbActiveModal }, { type: i2.RecordListModalStoreFactory }, { type: i3.LanguageStore }, { type: i4.MaxColumnsCalculator }, { type: i5.UserPreferenceStore }, { type: i6.SystemConfigStore }]; }, { titleKey: [{
            type: Input
        }], module: [{
            type: Input
        }], parentModule: [{
            type: Input
        }], multiSelect: [{
            type: Input
        }], multiSelectButtonLabel: [{
            type: Input
        }], adapter: [{
            type: Input
        }], filterAdapter: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWxpc3QtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvcmVjb3JkLWxpc3QtbW9kYWwvY29tcG9uZW50cy9yZWNvcmQtbGlzdC1tb2RhbC9yZWNvcmQtbGlzdC1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtbGlzdC1tb2RhbC9jb21wb25lbnRzL3JlY29yZC1saXN0LW1vZGFsL3JlY29yZC1saXN0LW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRWpFLE9BQU8sRUFBYSxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFDLG9CQUFvQixFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBR3pFLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBRTFHLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLCtFQUErRSxDQUFDO0FBRW5ILE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUV4RSxPQUFP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c0NBQWlCO2tERFN4QjtnQkFDUixPQUFPLENBQUMsV0FBVyxFQUFFO29CQUNqQixVQUFVLENBQUMsWUFBWSxFQUFFO3dCQUNyQixPQUFPLENBQUMsT0FBTyxDQUFDO3FCQUNuQixDQUFDO2lCQUNMLENBQUM7YUFDTDs7U0FFUSx3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQWJwQyxTQUFTOzJCQUNJLHdCQUF3QixhQUd2QixDQUFDLG9CQUFvQixDQUFDLGNBQ3JCO29CQUNSLE9BQU8sQ0FBQyxXQUFXLEVBQUU7d0JBQ2pCLFVBQVUsQ0FBQyxZQUFZLEVBQUU7NEJBQ3JCLE9BQU8sQ0FBQyxPQUFPLENBQUM7eUJBQ25CLENBQUM7cUJBQ0wsQ0FBQztpQkFDTDs0T0FJUSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxzQkFBc0I7a0JBQTlCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiQWN0aXZlTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7YW5pbWF0ZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0J1dHRvbkludGVyZmFjZSwgTW9kYWxDbG9zZUZlZWRCYWNrfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIHNraXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TW9kYWxSZWNvcmRGaWx0ZXJBZGFwdGVyfSBmcm9tICcuLi8uLi9hZGFwdGVycy9maWx0ZXIuYWRhcHRlcic7XG5pbXBvcnQge01vZGFsUmVjb3JkTGlzdFRhYmxlQWRhcHRlcn0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvdGFibGUuYWRhcHRlcic7XG5pbXBvcnQge1JlY29yZExpc3RNb2RhbFRhYmxlQWRhcHRlckludGVyZmFjZX0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvYWRhcHRlci5tb2RlbCc7XG5pbXBvcnQge1JlY29yZExpc3RNb2RhbFN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9yZWNvcmQtbGlzdC1tb2RhbC9yZWNvcmQtbGlzdC1tb2RhbC5zdG9yZSc7XG5pbXBvcnQge1JlY29yZExpc3RNb2RhbFN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vc3RvcmUvcmVjb3JkLWxpc3QtbW9kYWwvcmVjb3JkLWxpc3QtbW9kYWwuc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge1RhYmxlQ29uZmlnfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLm1vZGVsJztcbmltcG9ydCB7TWF4Q29sdW1uc0NhbGN1bGF0b3J9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VpL21heC1jb2x1bW5zLWNhbGN1bGF0b3IvbWF4LWNvbHVtbnMtY2FsY3VsYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7RmlsdGVyQ29uZmlnfSBmcm9tICcuLi8uLi8uLi9saXN0LWZpbHRlci9jb21wb25lbnRzL2xpc3QtZmlsdGVyL2xpc3QtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRMaXN0TW9kYWxSZXN1bHR9IGZyb20gJy4vcmVjb3JkLWxpc3QtbW9kYWwubW9kZWwnO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZVwiO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tcmVjb3JkLWxpc3QtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWNvcmQtbGlzdC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbiAgICBwcm92aWRlcnM6IFtNYXhDb2x1bW5zQ2FsY3VsYXRvcl0sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdtb2RhbEZhZGUnLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkIDw9PiAqJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzgwMG1zJylcbiAgICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZExpc3RNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIHRpdGxlS2V5ID0gJyc7XG4gICAgQElucHV0KCkgbW9kdWxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcGFyZW50TW9kdWxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbXVsdGlTZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBtdWx0aVNlbGVjdEJ1dHRvbkxhYmVsID0gJ0xCTF9TQVZFJztcbiAgICBASW5wdXQoKSBhZGFwdGVyOiBSZWNvcmRMaXN0TW9kYWxUYWJsZUFkYXB0ZXJJbnRlcmZhY2UgPSBudWxsO1xuICAgIEBJbnB1dCgpIGZpbHRlckFkYXB0ZXI6IE1vZGFsUmVjb3JkRmlsdGVyQWRhcHRlciA9IG51bGw7XG5cbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAgIGNsb3NlQnV0dG9uOiBCdXR0b25JbnRlcmZhY2U7XG4gICAgdGFibGVDb25maWc6IFRhYmxlQ29uZmlnO1xuICAgIGZpbHRlckNvbmZpZzogRmlsdGVyQ29uZmlnO1xuICAgIHN0b3JlOiBSZWNvcmRMaXN0TW9kYWxTdG9yZTtcbiAgICBtYXhIZWlnaHQ6bnVtYmVyO1xuXG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCxcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlRmFjdG9yeTogUmVjb3JkTGlzdE1vZGFsU3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VzOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWF4Q29sdW1uQ2FsY3VsYXRvcjogTWF4Q29sdW1uc0NhbGN1bGF0b3IsXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuc3RvcmUgPSB0aGlzLnN0b3JlRmFjdG9yeS5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0ge1xuICAgICAgICAgICAga2xhc3M6IFsnYnRuJywgJ2J0bi1vdXRsaW5lLWxpZ2h0JywgJ2J0bi1zbSddLFxuICAgICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuY2xvc2Uoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2xvc2UtYnV0dG9uJ1xuICAgICAgICAgICAgICAgIH0gYXMgTW9kYWxDbG9zZUZlZWRCYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLm1vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdFN0b3JlKCk7XG4gICAgICAgIHRoaXMuaW5pdFRhYmxlQWRhcHRlcigpO1xuICAgICAgICB0aGlzLmluaXRGaWx0ZXJBZGFwdGVycygpO1xuICAgIH1cblxuICAgIGdldE1heENvbHVtbnMoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4Q29sdW1uQ2FsY3VsYXRvci5nZXRNYXhDb2x1bW5zKG9mKHRydWUpKTtcbiAgICB9XG5cbiAgICBsaW5rU2VsZWN0ZWRSZWNvcmRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKHtcbiAgICAgICAgICAgIHNlbGVjdGlvbjogdGhpcy5zdG9yZS5yZWNvcmRMaXN0LnNlbGVjdGlvbixcbiAgICAgICAgICAgIHJlY29yZHM6IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5yZWNvcmRzXG4gICAgICAgIH0gYXMgUmVjb3JkTGlzdE1vZGFsUmVzdWx0KTtcbiAgICB9XG5cbiAgICBidWlsZFNlbGVjdEJ1dHRvbigpOiBCdXR0b25JbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2xhc3M6IFsnYnRuJywgJ2J0bi1wcmltYXJ5JywgJ2J0bi1zbSddLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGlua1NlbGVjdGVkUmVjb3JkcygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsS2V5OiB0aGlzLm11bHRpU2VsZWN0QnV0dG9uTGFiZWxcbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRUYWJsZUFkYXB0ZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlciA9IG5ldyBNb2RhbFJlY29yZExpc3RUYWJsZUFkYXB0ZXIodGhpcy5zeXN0ZW1Db25maWdzLCB0aGlzLnByZWZlcmVuY2VzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFibGVDb25maWcgPSB0aGlzLmFkYXB0ZXIuZ2V0VGFibGUodGhpcy5zdG9yZSwgdGhpcy5tdWx0aVNlbGVjdCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RvcmU/Lmxpc3RNZXRhZGF0YT8ubWF4SGVpZ2h0KXtcbiAgICAgICAgICAgIHRoaXMudGFibGVDb25maWcubWF4TGlzdEhlaWdodCA9IHRoaXMuc3RvcmUubGlzdE1ldGFkYXRhLm1heEhlaWdodDtcblxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy50YWJsZUNvbmZpZz8ubWF4TGlzdEhlaWdodCkge1xuICAgICAgICAgICAgY29uc3QgdWkgPSB0aGlzLnN5c3RlbUNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ3VpJykgPz8ge307XG4gICAgICAgICAgICBjb25zdCBjb25maWdNb2RhbEhlaWdodCA9IHRoaXMuc3lzdGVtQ29uZmlncy5nZXRDb25maWdWYWx1ZSgncmVjb3JkX21vZGFsX21heF9oZWlnaHQnKSA/PyAnJztcbiAgICAgICAgICAgIHRoaXMudGFibGVDb25maWcubWF4TGlzdEhlaWdodCA9IHVpLnJlY29yZF9tb2RhbF9tYXhfaGVpZ2h0ID8/IGNvbmZpZ01vZGFsSGVpZ2h0O1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YWJsZUNvbmZpZy5tYXhDb2x1bW5zJCA9IHRoaXMuZ2V0TWF4Q29sdW1ucygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0RmlsdGVyQWRhcHRlcnMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlckFkYXB0ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQWRhcHRlciA9IG5ldyBNb2RhbFJlY29yZEZpbHRlckFkYXB0ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlsdGVyQ29uZmlnID0gdGhpcy5maWx0ZXJBZGFwdGVyLmdldENvbmZpZyh0aGlzLnN0b3JlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdFN0b3JlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLmluaXQodGhpcy5tb2R1bGUsIHRoaXMucGFyZW50TW9kdWxlID8/ICcnKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMuc3RvcmUubWV0YWRhdGFMb2FkaW5nJDtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnN0b3JlLmxpbmtDbGlja2VkJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksIHNraXAoMSkpLnN1YnNjcmliZShjbGlja2VkID0+IHtcbiAgICAgICAgICAgIGlmICghY2xpY2tlZCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxpbmtTZWxlY3RlZFJlY29yZHMoKTtcblxuICAgICAgICB9KSk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPHNjcm0tbW9kYWwgW2Nsb3NhYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgW2Nsb3NlXT1cImNsb3NlQnV0dG9uXCJcbiAgICAgICAgICAgIFt0aXRsZV09XCJ0aXRsZUtleVwiXG4gICAgICAgICAgICBib2R5S2xhc3M9XCJtLTAgc21hbGwtZm9udFwiXG4gICAgICAgICAgICBmb290ZXJLbGFzcz1cImJvcmRlci0wXCJcbiAgICAgICAgICAgIGhlYWRlcktsYXNzPVwiYm9yZGVyLTBcIlxuICAgICAgICAgICAga2xhc3M9XCJyZWNvcmQtbGlzdC1tb2RhbFwiPlxuXG4gICAgPGRpdiBtb2RhbC1ib2R5PlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdGFibGVDb25maWdcIj5cbiAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX0NPTkZJR19OT19DT05GSUdcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0YWJsZUNvbmZpZ1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcGItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxpc3QtZmlsdGVyICpuZ0lmPVwiZmlsdGVyQ29uZmlnXCIgW2NvbmZpZ109XCJmaWx0ZXJDb25maWdcIj48L3Njcm0tbGlzdC1maWx0ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS10YWJsZSBbY29uZmlnXT1cInRhYmxlQ29uZmlnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLXRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihsb2FkaW5nJCB8IGFzeW5jKSBhcyBsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWxvYWRpbmctc3Bpbm5lciAqbmdJZj1cImxvYWRpbmdcIiBbb3ZlcmxheV09XCJ0cnVlXCI+PC9zY3JtLWxvYWRpbmctc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm11bHRpU2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWJ1dHRvbiBbY29uZmlnXT1cImJ1aWxkU2VsZWN0QnV0dG9uKClcIj48L3Njcm0tYnV0dG9uPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuPC9zY3JtLW1vZGFsPlxuIl19