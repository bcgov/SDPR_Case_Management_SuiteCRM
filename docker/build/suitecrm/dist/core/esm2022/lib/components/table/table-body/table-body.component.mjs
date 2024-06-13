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
import { combineLatestWith, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SelectionStatus, SortDirection } from 'common';
import { FieldManager } from '../../../services/record/field/field.manager';
import { LoadingBufferFactory } from '../../../services/ui/loading-buffer/loading-buffer.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/record/field/field.manager";
import * as i2 from "../../../services/ui/loading-buffer/loading-buffer.factory";
import * as i3 from "@angular/common";
import * as i4 from "@angular/cdk/table";
import * as i5 from "../../../fields/field.component";
import * as i6 from "../../sort-button/sort-button.component";
import * as i7 from "../../line-action-menu/line-action-menu.component";
import * as i8 from "../../loading-spinner/loading-spinner.component";
import * as i9 from "../../label/label.component";
import * as i10 from "../../popups/components/record-details-popup-button/record-details-popup-button.component";
function TableBodyComponent_ng_container_0_ng_container_3_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 13);
} }
function TableBodyComponent_ng_container_0_ng_container_3_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 14)(1, "label", 15)(2, "input", 16);
    i0.ɵɵlistener("change", function TableBodyComponent_ng_container_0_ng_container_3_td_2_Template_input_change_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r15); const record_r13 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r14.toggleSelection(record_r13["id"])); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const record_r13 = ctx.$implicit;
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", record_r13["id"] && vm_r1.selected[record_r13["id"]] || ctx_r12.allSelected(vm_r1.selectionStatus))("disabled", ctx_r12.allSelected(vm_r1.selectionStatus));
} }
function TableBodyComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 12);
    i0.ɵɵtemplate(1, TableBodyComponent_ng_container_0_ng_container_3_th_1_Template, 1, 0, "th", 7);
    i0.ɵɵtemplate(2, TableBodyComponent_ng_container_0_ng_container_3_td_2_Template, 4, 2, "td", 8);
    i0.ɵɵelementContainerEnd();
} }
function TableBodyComponent_ng_container_0_ng_container_4_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 21);
} }
function TableBodyComponent_ng_container_0_ng_container_4_td_2_scrm_record_details_popup_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-record-details-popup-button", 24);
} if (rf & 2) {
    const record_r19 = i0.ɵɵnextContext().$implicit;
    const ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("record", record_r19)("columns", ctx_r20.popoverColumns);
} }
function TableBodyComponent_ng_container_0_ng_container_4_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵtemplate(1, TableBodyComponent_ng_container_0_ng_container_4_td_2_scrm_record_details_popup_button_1_Template, 1, 2, "scrm-record-details-popup-button", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.popoverColumns.length);
} }
function TableBodyComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 18);
    i0.ɵɵtemplate(1, TableBodyComponent_ng_container_0_ng_container_4_th_1_Template, 1, 0, "th", 19);
    i0.ɵɵtemplate(2, TableBodyComponent_ng_container_0_ng_container_4_td_2_Template, 2, 1, "td", 20);
    i0.ɵɵelementContainerEnd();
} }
function TableBodyComponent_ng_container_0_ng_container_5_th_1_scrm_sort_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-sort-button", 31);
} if (rf & 2) {
    const column_r22 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("state", ctx_r25.getFieldSort(column_r22));
} }
function TableBodyComponent_ng_container_0_ng_container_5_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 28);
    i0.ɵɵelement(1, "scrm-label", 29);
    i0.ɵɵtemplate(2, TableBodyComponent_ng_container_0_ng_container_5_th_1_scrm_sort_button_2_Template, 1, 1, "scrm-sort-button", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r22 = i0.ɵɵnextContext().$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    let tmp_0_0;
    i0.ɵɵclassMap(((tmp_0_0 = "primary-table-header " + "column-" + (column_r22 == null ? null : column_r22.name)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "") + " " + ((tmp_0_0 = "column-type-" + (column_r22 == null ? null : column_r22.type)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : ""));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", column_r22.label)("module", ctx_r23.config.module || "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.config.sort$ && column_r22.sortable);
} }
function TableBodyComponent_ng_container_0_ng_container_5_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵelement(1, "scrm-field", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r28 = ctx.$implicit;
    const column_r22 = i0.ɵɵnextContext().$implicit;
    const ctx_r24 = i0.ɵɵnextContext(2);
    let tmp_0_0;
    i0.ɵɵclassMap(((tmp_0_0 = "column-" + (column_r22 == null ? null : column_r22.name)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "") + " " + ((tmp_0_0 = "column-type-" + (column_r22 == null ? null : column_r22.type)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : ""));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("mode", "list")("type", column_r22.type)("field", ctx_r24.getField(column_r22, record_r28))("record", record_r28);
} }
function TableBodyComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 25);
    i0.ɵɵtemplate(1, TableBodyComponent_ng_container_0_ng_container_5_th_1_Template, 3, 5, "th", 26);
    i0.ɵɵtemplate(2, TableBodyComponent_ng_container_0_ng_container_5_td_2_Template, 2, 6, "td", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r22 = ctx.$implicit;
    i0.ɵɵproperty("cdkColumnDef", column_r22.name);
} }
function TableBodyComponent_ng_container_0_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 13);
} }
function TableBodyComponent_ng_container_0_td_8_scrm_line_action_menu_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-line-action-menu", 34);
} if (rf & 2) {
    const record_r30 = i0.ɵɵnextContext().$implicit;
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r31.config.lineActions)("record", record_r30)("wrapperClass", "listview-actions")("klass", "icon-bar");
} }
function TableBodyComponent_ng_container_0_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtemplate(1, TableBodyComponent_ng_container_0_td_8_scrm_line_action_menu_1_Template, 1, 4, "scrm-line-action-menu", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r30 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", record_r30 && ctx_r6.config.lineActions);
} }
function TableBodyComponent_ng_container_0_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 35);
} }
function TableBodyComponent_ng_container_0_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 36);
} }
function TableBodyComponent_ng_container_0_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "p", 37);
    i0.ɵɵelement(2, "scrm-label", 38);
    i0.ɵɵelementEnd()();
} }
function TableBodyComponent_ng_container_0_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "scrm-loading-spinner", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵclassProp("m-5", !vm_r1.records || vm_r1.records.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("overlay", true);
} }
function TableBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1)(2, "table", 2);
    i0.ɵɵtemplate(3, TableBodyComponent_ng_container_0_ng_container_3_Template, 3, 0, "ng-container", 3);
    i0.ɵɵtemplate(4, TableBodyComponent_ng_container_0_ng_container_4_Template, 3, 0, "ng-container", 4);
    i0.ɵɵtemplate(5, TableBodyComponent_ng_container_0_ng_container_5_Template, 3, 1, "ng-container", 5);
    i0.ɵɵelementContainerStart(6, 6);
    i0.ɵɵtemplate(7, TableBodyComponent_ng_container_0_th_7_Template, 1, 0, "th", 7);
    i0.ɵɵtemplate(8, TableBodyComponent_ng_container_0_td_8_Template, 2, 1, "td", 8);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(9, TableBodyComponent_ng_container_0_tr_9_Template, 1, 0, "tr", 9);
    i0.ɵɵtemplate(10, TableBodyComponent_ng_container_0_tr_10_Template, 1, 0, "tr", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, TableBodyComponent_ng_container_0_div_11_Template, 3, 0, "div", 0);
    i0.ɵɵtemplate(12, TableBodyComponent_ng_container_0_div_12_Template, 2, 3, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("dataSource", ctx_r0.config.dataSource)("trackBy", ctx_r0.trackRecord);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.selection);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.popoverColumns && ctx_r0.popoverColumns.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", vm_r1.columns);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("cdkHeaderRowDef", vm_r1.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkRowDefColumns", vm_r1.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !vm_r1.loading && vm_r1.records.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.loading);
} }
class TableBodyComponent {
    constructor(fieldManager, loadingBufferFactory) {
        this.fieldManager = fieldManager;
        this.loadingBufferFactory = loadingBufferFactory;
        this.maxColumns = 4;
        this.subs = [];
        this.loadingBuffer = this.loadingBufferFactory.create('table_loading_display_delay');
    }
    ngOnInit() {
        const selection$ = this.config.selection$ || of(null).pipe(shareReplay(1));
        let loading$ = this.initLoading();
        this.vm$ = this.config.columns.pipe(combineLatestWith(selection$, this.config.maxColumns$, this.config.dataSource.connect(null), loading$), map(([columns, selection, maxColumns, records, loading]) => {
            const displayedColumns = [];
            this.maxColumns = maxColumns;
            const columnsDefs = this.buildDisplayColumns(columns);
            this.popoverColumns = this.buildHiddenColumns(columns, columnsDefs);
            if (selection) {
                displayedColumns.push('checkbox');
            }
            if (this.popoverColumns && this.popoverColumns.length) {
                displayedColumns.push('show-more');
            }
            displayedColumns.push(...columnsDefs);
            displayedColumns.push('line-actions');
            const selected = selection && selection.selected || {};
            const selectionStatus = selection && selection.status || SelectionStatus.NONE;
            return {
                columns,
                selection,
                selected,
                selectionStatus,
                displayedColumns,
                records: records || [],
                loading
            };
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    toggleSelection(id) {
        this.config.toggleRecordSelection(id);
    }
    allSelected(status) {
        return status === SelectionStatus.ALL;
    }
    buildDisplayColumns(metaFields) {
        let i = 0;
        let hasLinkField = false;
        const displayedColumns = [];
        const fields = metaFields.filter(function (field) {
            return !field.hasOwnProperty('default')
                || (field.hasOwnProperty('default') && field.default === true);
        });
        while (i < this.maxColumns && i < fields.length) {
            displayedColumns.push(fields[i].name);
            hasLinkField = hasLinkField || fields[i].link;
            i++;
        }
        if (!hasLinkField && (this.maxColumns < fields.length)) {
            for (i = this.maxColumns; i < fields.length; i++) {
                if (fields[i].link) {
                    displayedColumns.splice(-1, 1);
                    displayedColumns.push(fields[i].name);
                    break;
                }
            }
        }
        return displayedColumns;
    }
    buildHiddenColumns(metaFields, displayedColumns) {
        const fields = metaFields.filter(function (field) {
            return !field.hasOwnProperty('default')
                || (field.hasOwnProperty('default') && field.default === true);
        });
        let missingFields = [];
        for (let i = 0; i < fields.length; i++) {
            if (displayedColumns.indexOf(fields[i].name) === -1) {
                missingFields.push(fields[i].name);
            }
        }
        let hiddenColumns = fields.filter(obj => missingFields.includes(obj.name));
        return hiddenColumns;
    }
    getFieldSort(field) {
        return {
            getSortDirection: () => this.config.sort$.pipe(map((sort) => {
                let direction = SortDirection.NONE;
                if (sort.orderBy === field.name) {
                    direction = sort.sortOrder;
                }
                return direction;
            })),
            changeSortDirection: (direction) => {
                this.config.updateSorting(field.name, direction);
            }
        };
    }
    getField(column, record) {
        if (!column || !record) {
            return null;
        }
        return this.fieldManager.addField(record, column);
    }
    initLoading() {
        let loading$ = of(false).pipe(shareReplay(1));
        if (this.config.loading$) {
            this.subs.push(this.config.loading$.subscribe(loading => {
                this.loadingBuffer.updateLoading(loading);
            }));
            loading$ = this.loadingBuffer.loading$;
        }
        return loading$;
    }
    trackRecord(index, item) {
        return item?.id ?? '';
    }
    static { this.ɵfac = function TableBodyComponent_Factory(t) { return new (t || TableBodyComponent)(i0.ɵɵdirectiveInject(i1.FieldManager), i0.ɵɵdirectiveInject(i2.LoadingBufferFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableBodyComponent, selectors: [["scrm-table-body"]], inputs: { config: "config" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "position-relative", "d-flex", "flex-column"], ["cdk-table", "", "aria-describedby", "table-body", 1, "list-view-table", "striped-table", "table", 3, "dataSource", "trackBy"], ["cdkColumnDef", "checkbox", 4, "ngIf"], ["cdkColumnDef", "show-more", 4, "ngIf"], [3, "cdkColumnDef", 4, "ngFor", "ngForOf"], ["cdkColumnDef", "line-actions"], ["cdk-header-cell", "", "scope", "col", "class", "primary-table-header", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], [3, "m-5", 4, "ngIf"], ["cdkColumnDef", "checkbox"], ["cdk-header-cell", "", "scope", "col", 1, "primary-table-header"], ["cdk-cell", ""], [1, "checkbox-container"], ["type", "checkbox", "aria-hidden", "true", 3, "checked", "disabled", "change"], [1, "checkmark"], ["cdkColumnDef", "show-more"], ["cdk-header-cell", "", "scope", "col", "class", "primary-table-header show-more-column", 4, "cdkHeaderCellDef"], ["cdk-cell", "", "class", "show-more-column", 4, "cdkCellDef"], ["cdk-header-cell", "", "scope", "col", 1, "primary-table-header", "show-more-column"], ["cdk-cell", "", 1, "show-more-column"], [3, "record", "columns", 4, "ngIf"], [3, "record", "columns"], [3, "cdkColumnDef"], ["cdk-header-cell", "", "scope", "col", 3, "class", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "class", 4, "cdkCellDef"], ["cdk-header-cell", "", "scope", "col"], [3, "labelKey", "module"], [3, "state", 4, "ngIf"], [3, "state"], [3, "mode", "type", "field", "record"], [3, "config", "record", "wrapperClass", "klass", 4, "ngIf"], [3, "config", "record", "wrapperClass", "klass"], ["cdk-header-row", ""], ["cdk-row", ""], [1, "lead", "text-center", "pt-3"], ["labelKey", "MSG_LIST_VIEW_NO_RESULTS_BASIC"], [3, "overlay"]], template: function TableBodyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TableBodyComponent_ng_container_0_Template, 13, 9, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.CdkTable, i4.CdkRowDef, i4.CdkCellDef, i4.CdkHeaderCellDef, i4.CdkColumnDef, i4.CdkCell, i4.CdkRow, i4.CdkHeaderCell, i4.CdkHeaderRow, i4.CdkHeaderRowDef, i5.FieldComponent, i6.SortButtonComponent, i7.LineActionMenuComponent, i8.LoadingSpinnerComponent, i9.LabelComponent, i10.RecordDetailsPopupButtonComponent, i3.AsyncPipe], encapsulation: 2 }); }
}
export { TableBodyComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableBodyComponent, [{
        type: Component,
        args: [{ selector: 'scrm-table-body', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<ng-container *ngIf=\"(vm$ | async) as vm\">\n    <div class=\"position-relative d-flex flex-column\">\n        <table cdk-table [dataSource]=\"config.dataSource\" [trackBy]=\"trackRecord\"\n               aria-describedby=\"table-body\"\n               class=\"list-view-table striped-table table\">\n\n            <ng-container cdkColumnDef=\"checkbox\" *ngIf=\"vm.selection\">\n\n                <th cdk-header-cell scope=\"col\" *cdkHeaderCellDef class=\"primary-table-header\"></th>\n\n                <td cdk-cell *cdkCellDef=\"let record\">\n                    <label class=\"checkbox-container\">\n                        <input type=\"checkbox\"\n                               [checked]=\"(record['id'] && vm.selected[record['id']]) || allSelected(vm.selectionStatus) \"\n                               (change)=\"toggleSelection(record['id'])\"\n                               [disabled]=\"allSelected(vm.selectionStatus)\"\n                               aria-hidden=\"true\">\n                        <span class=\"checkmark\"></span>\n                    </label>\n                </td>\n\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"show-more\" *ngIf=\"popoverColumns && popoverColumns.length\">\n\n                <th cdk-header-cell scope=\"col\" *cdkHeaderCellDef class=\"primary-table-header show-more-column\"></th>\n\n                <td cdk-cell *cdkCellDef=\"let record\" class=\"show-more-column\">\n                    <scrm-record-details-popup-button [record]=\"record\" [columns]=\"popoverColumns\"\n                                                      *ngIf=\"popoverColumns.length\"></scrm-record-details-popup-button>\n                </td>\n\n            </ng-container>\n\n            <ng-container *ngFor=\"let column of vm.columns\" [cdkColumnDef]=\"column.name\">\n\n                <th cdk-header-cell\n                    *cdkHeaderCellDef\n                    scope=\"col\"\n                    [class]=\"('primary-table-header ' + 'column-' + column?.name ?? '') + ' ' + ('column-type-' + column?.type ?? '')\">\n\n                    <scrm-label [labelKey]=\"column.label\" [module]=\"config.module || ''\"></scrm-label>\n                    <scrm-sort-button *ngIf=\"config.sort$ && column.sortable\"\n                                      [state]=\"getFieldSort(column)\">\n                    </scrm-sort-button>\n\n                </th>\n\n                <td cdk-cell *cdkCellDef=\"let record\" [class]=\"('column-' + column?.name ?? '') + ' ' + ('column-type-' + column?.type ?? '')\">\n                    <scrm-field [mode]=\"'list'\"\n                                [type]=\"column.type\"\n                                [field]=\"getField(column, record)\"\n                                [record]=\"record\">\n                    </scrm-field>\n                </td>\n\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"line-actions\">\n\n                <th cdk-header-cell scope=\"col\" *cdkHeaderCellDef class=\"primary-table-header\"></th>\n\n                <td cdk-cell *cdkCellDef=\"let record\">\n                    <scrm-line-action-menu *ngIf=\"record && config.lineActions\"\n                                           [config]=\"config.lineActions\"\n                                           [record]=\"record\"\n                                           [wrapperClass]=\"'listview-actions'\"\n                                           [klass]=\"'icon-bar'\">\n                    </scrm-line-action-menu>\n                </td>\n\n            </ng-container>\n\n            <tr cdk-header-row *cdkHeaderRowDef=\"vm.displayedColumns\"></tr>\n            <tr cdk-row *cdkRowDef=\"let row; columns: vm.displayedColumns;\"></tr>\n\n        </table>\n\n        <div *ngIf=\"!vm.loading && vm.records.length === 0\">\n            <p class=\"lead text-center pt-3\">\n                <scrm-label labelKey=\"MSG_LIST_VIEW_NO_RESULTS_BASIC\"></scrm-label>\n            </p>\n        </div>\n        <div *ngIf=\"vm.loading\" [class.m-5]=\"!vm.records || vm.records.length === 0\">\n            <scrm-loading-spinner [overlay]=\"true\"></scrm-loading-spinner>\n        </div>\n    </div>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.FieldManager }, { type: i2.LoadingBufferFactory }]; }, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS1ib2R5L3RhYmxlLWJvZHkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUtYm9keS90YWJsZS1ib2R5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFDLGlCQUFpQixFQUFjLEVBQUUsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUNyRSxPQUFPLEVBQUMsR0FBRyxFQUFFLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFLSCxlQUFlLEVBQ2YsYUFBYSxFQUVoQixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFHMUUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sNERBQTRELENBQUM7Ozs7Ozs7Ozs7Ozs7SUNMaEYseUJBQW9GOzs7O0lBRXBGLDhCQUFzQyxnQkFBQSxnQkFBQTtJQUl2Qiw4UEFBVSxlQUFBLG1DQUF1QixJQUFJLEVBQUUsQ0FBQSxJQUFDO0lBRi9DLGlCQUkwQjtJQUMxQiwyQkFBK0I7SUFDbkMsaUJBQVEsRUFBQTs7Ozs7SUFMRyxlQUEyRjtJQUEzRiw0SEFBMkYsd0RBQUE7OztJQVA5RyxpQ0FBMkQ7SUFFdkQsK0ZBQW9GO0lBRXBGLCtGQVNLO0lBRVQsMEJBQWU7OztJQUlYLHlCQUFxRzs7O0lBR2pHLHVEQUNtRzs7OztJQURqRSxtQ0FBaUIsbUNBQUE7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QWEsQ0FBQyxRQUFRLENBQUM7U0FDMUM7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWEsRUFBRSxJQUFZO1FBQ25DLE9BQU8sSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzttRkE1S1Esa0JBQWtCO29FQUFsQixrQkFBa0I7WUM5Qi9CLHNGQXVGZTs7O1lBdkZBLG9EQUFvQjs7O1NEOEJ0QixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUo5QixTQUFTOzJCQUNJLGlCQUFpQjtrR0FJbEIsTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHNoYXJlUmVwbGF5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICAgIENvbHVtbkRlZmluaXRpb24sXG4gICAgRmllbGQsXG4gICAgUmVjb3JkLFxuICAgIFJlY29yZFNlbGVjdGlvbixcbiAgICBTZWxlY3Rpb25TdGF0dXMsXG4gICAgU29ydERpcmVjdGlvbixcbiAgICBTb3J0aW5nU2VsZWN0aW9uXG59IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0ZpZWxkTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL2ZpZWxkL2ZpZWxkLm1hbmFnZXInO1xuaW1wb3J0IHtUYWJsZUNvbmZpZ30gZnJvbSAnLi4vdGFibGUubW9kZWwnO1xuaW1wb3J0IHtTb3J0RGlyZWN0aW9uRGF0YVNvdXJjZX0gZnJvbSAnLi4vLi4vc29ydC1idXR0b24vc29ydC1idXR0b24ubW9kZWwnO1xuaW1wb3J0IHtMb2FkaW5nQnVmZmVyRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdWkvbG9hZGluZy1idWZmZXIvbG9hZGluZy1idWZmZXIuZmFjdG9yeSc7XG5pbXBvcnQge0xvYWRpbmdCdWZmZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VpL2xvYWRpbmctYnVmZmVyL2xvYWRpbmctYnVmZmVyLnNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgVGFibGVWaWV3TW9kZWwge1xuICAgIGNvbHVtbnM6IENvbHVtbkRlZmluaXRpb25bXTtcbiAgICBzZWxlY3Rpb246IFJlY29yZFNlbGVjdGlvbjtcbiAgICBzZWxlY3RlZDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICBzZWxlY3Rpb25TdGF0dXM6IFNlbGVjdGlvblN0YXR1cztcbiAgICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXTtcbiAgICByZWNvcmRzOiBSZWNvcmRbXSB8IHJlYWRvbmx5IFJlY29yZFtdO1xuICAgIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS10YWJsZS1ib2R5JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RhYmxlLWJvZHkuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgY29uZmlnOiBUYWJsZUNvbmZpZztcbiAgICBtYXhDb2x1bW5zID0gNDtcbiAgICBwb3BvdmVyQ29sdW1uczogQ29sdW1uRGVmaW5pdGlvbltdO1xuICAgIHZtJDogT2JzZXJ2YWJsZTxUYWJsZVZpZXdNb2RlbD47XG4gICAgcHJvdGVjdGVkIGxvYWRpbmdCdWZmZXI6IExvYWRpbmdCdWZmZXI7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGZpZWxkTWFuYWdlcjogRmllbGRNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9hZGluZ0J1ZmZlckZhY3Rvcnk6IExvYWRpbmdCdWZmZXJGYWN0b3J5XG4gICAgKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ0J1ZmZlciA9IHRoaXMubG9hZGluZ0J1ZmZlckZhY3RvcnkuY3JlYXRlKCd0YWJsZV9sb2FkaW5nX2Rpc3BsYXlfZGVsYXknKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uJCA9IHRoaXMuY29uZmlnLnNlbGVjdGlvbiQgfHwgb2YobnVsbCkucGlwZShzaGFyZVJlcGxheSgxKSk7XG4gICAgICAgIGxldCBsb2FkaW5nJCA9IHRoaXMuaW5pdExvYWRpbmcoKTtcblxuICAgICAgICB0aGlzLnZtJCA9IHRoaXMuY29uZmlnLmNvbHVtbnMucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbiQsXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcubWF4Q29sdW1ucyQsXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuZGF0YVNvdXJjZS5jb25uZWN0KG51bGwpLFxuICAgICAgICAgICAgICAgIGxvYWRpbmckXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWFwKChcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnMsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbWF4Q29sdW1ucyxcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkcyxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1heENvbHVtbnMgPSBtYXhDb2x1bW5zO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uc0RlZnMgPSB0aGlzLmJ1aWxkRGlzcGxheUNvbHVtbnMoY29sdW1ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BvdmVyQ29sdW1ucyA9IHRoaXMuYnVpbGRIaWRkZW5Db2x1bW5zKGNvbHVtbnMsIGNvbHVtbnNEZWZzKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheWVkQ29sdW1ucy5wdXNoKCdjaGVja2JveCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvcG92ZXJDb2x1bW5zICYmIHRoaXMucG9wb3ZlckNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZENvbHVtbnMucHVzaCgnc2hvdy1tb3JlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGlzcGxheWVkQ29sdW1ucy5wdXNoKC4uLmNvbHVtbnNEZWZzKTtcblxuICAgICAgICAgICAgICAgIGRpc3BsYXllZENvbHVtbnMucHVzaCgnbGluZS1hY3Rpb25zJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdGlvbiAmJiBzZWxlY3Rpb24uc2VsZWN0ZWQgfHwge307XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uU3RhdHVzID0gc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5zdGF0dXMgfHwgU2VsZWN0aW9uU3RhdHVzLk5PTkU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZENvbHVtbnMsXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZHM6IHJlY29yZHMgfHwgW10sXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICB0b2dnbGVTZWxlY3Rpb24oaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbmZpZy50b2dnbGVSZWNvcmRTZWxlY3Rpb24oaWQpO1xuICAgIH1cblxuICAgIGFsbFNlbGVjdGVkKHN0YXR1czogU2VsZWN0aW9uU3RhdHVzKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBzdGF0dXMgPT09IFNlbGVjdGlvblN0YXR1cy5BTEw7XG4gICAgfVxuXG4gICAgYnVpbGREaXNwbGF5Q29sdW1ucyhtZXRhRmllbGRzOiBDb2x1bW5EZWZpbml0aW9uW10pOiBzdHJpbmdbXSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGhhc0xpbmtGaWVsZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBkaXNwbGF5ZWRDb2x1bW5zID0gW107XG5cbiAgICAgICAgY29uc3QgZmllbGRzID0gbWV0YUZpZWxkcy5maWx0ZXIoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gIWZpZWxkLmhhc093blByb3BlcnR5KCdkZWZhdWx0JylcbiAgICAgICAgICAgICAgICB8fCAoZmllbGQuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSAmJiBmaWVsZC5kZWZhdWx0ID09PSB0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLm1heENvbHVtbnMgJiYgaSA8IGZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRpc3BsYXllZENvbHVtbnMucHVzaChmaWVsZHNbaV0ubmFtZSk7XG4gICAgICAgICAgICBoYXNMaW5rRmllbGQgPSBoYXNMaW5rRmllbGQgfHwgZmllbGRzW2ldLmxpbms7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYXNMaW5rRmllbGQgJiYgKHRoaXMubWF4Q29sdW1ucyA8IGZpZWxkcy5sZW5ndGgpKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSB0aGlzLm1heENvbHVtbnM7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRzW2ldLmxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheWVkQ29sdW1ucy5zcGxpY2UoLTEsIDEpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWRDb2x1bW5zLnB1c2goZmllbGRzW2ldLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGlzcGxheWVkQ29sdW1ucztcbiAgICB9XG5cbiAgICBidWlsZEhpZGRlbkNvbHVtbnMobWV0YUZpZWxkczogQ29sdW1uRGVmaW5pdGlvbltdLCBkaXNwbGF5ZWRDb2x1bW5zOnN0cmluZ1tdKTogQ29sdW1uRGVmaW5pdGlvbltdIHtcbiAgICAgICAgY29uc3QgZmllbGRzID0gbWV0YUZpZWxkcy5maWx0ZXIoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gIWZpZWxkLmhhc093blByb3BlcnR5KCdkZWZhdWx0JylcbiAgICAgICAgICAgICAgICB8fCAoZmllbGQuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSAmJiBmaWVsZC5kZWZhdWx0ID09PSB0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1pc3NpbmdGaWVsZHMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRpc3BsYXllZENvbHVtbnMuaW5kZXhPZihmaWVsZHNbaV0ubmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbWlzc2luZ0ZpZWxkcy5wdXNoKGZpZWxkc1tpXS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoaWRkZW5Db2x1bW5zPSBmaWVsZHMuZmlsdGVyKG9iaiA9PiBtaXNzaW5nRmllbGRzLmluY2x1ZGVzKG9iai5uYW1lKSk7XG5cbiAgICAgICAgcmV0dXJuIGhpZGRlbkNvbHVtbnM7XG4gICAgfVxuXG4gICAgZ2V0RmllbGRTb3J0KGZpZWxkOiBDb2x1bW5EZWZpbml0aW9uKTogU29ydERpcmVjdGlvbkRhdGFTb3VyY2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0U29ydERpcmVjdGlvbjogKCk6IE9ic2VydmFibGU8U29ydERpcmVjdGlvbj4gPT4gdGhpcy5jb25maWcuc29ydCQucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKHNvcnQ6IFNvcnRpbmdTZWxlY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IFNvcnREaXJlY3Rpb24uTk9ORTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc29ydC5vcmRlckJ5ID09PSBmaWVsZC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBzb3J0LnNvcnRPcmRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjaGFuZ2VTb3J0RGlyZWN0aW9uOiAoZGlyZWN0aW9uOiBTb3J0RGlyZWN0aW9uKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcudXBkYXRlU29ydGluZyhmaWVsZC5uYW1lLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIFNvcnREaXJlY3Rpb25EYXRhU291cmNlO1xuICAgIH1cblxuICAgIGdldEZpZWxkKGNvbHVtbjogQ29sdW1uRGVmaW5pdGlvbiwgcmVjb3JkOiBSZWNvcmQpOiBGaWVsZCB7XG5cbiAgICAgICAgaWYgKCFjb2x1bW4gfHwgIXJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZE1hbmFnZXIuYWRkRmllbGQocmVjb3JkLCBjb2x1bW4pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAgICAgbGV0IGxvYWRpbmckID0gb2YoZmFsc2UpLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5sb2FkaW5nJCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb25maWcubG9hZGluZyQuc3Vic2NyaWJlKGxvYWRpbmcgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0J1ZmZlci51cGRhdGVMb2FkaW5nKGxvYWRpbmcpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICBsb2FkaW5nJCA9IHRoaXMubG9hZGluZ0J1ZmZlci5sb2FkaW5nJDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9hZGluZyQ7XG4gICAgfVxuXG4gICAgdHJhY2tSZWNvcmQoaW5kZXg6IG51bWJlciwgaXRlbTogUmVjb3JkKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0/LmlkID8/ICcnO1xuICAgIH1cbn1cblxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgPHRhYmxlIGNkay10YWJsZSBbZGF0YVNvdXJjZV09XCJjb25maWcuZGF0YVNvdXJjZVwiIFt0cmFja0J5XT1cInRyYWNrUmVjb3JkXCJcbiAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ0YWJsZS1ib2R5XCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdC12aWV3LXRhYmxlIHN0cmlwZWQtdGFibGUgdGFibGVcIj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJjaGVja2JveFwiICpuZ0lmPVwidm0uc2VsZWN0aW9uXCI+XG5cbiAgICAgICAgICAgICAgICA8dGggY2RrLWhlYWRlci1jZWxsIHNjb3BlPVwiY29sXCIgKmNka0hlYWRlckNlbGxEZWYgY2xhc3M9XCJwcmltYXJ5LXRhYmxlLWhlYWRlclwiPjwvdGg+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgcmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiKHJlY29yZFsnaWQnXSAmJiB2bS5zZWxlY3RlZFtyZWNvcmRbJ2lkJ11dKSB8fCBhbGxTZWxlY3RlZCh2bS5zZWxlY3Rpb25TdGF0dXMpIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJ0b2dnbGVTZWxlY3Rpb24ocmVjb3JkWydpZCddKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImFsbFNlbGVjdGVkKHZtLnNlbGVjdGlvblN0YXR1cylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGVja21hcmtcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwic2hvdy1tb3JlXCIgKm5nSWY9XCJwb3BvdmVyQ29sdW1ucyAmJiBwb3BvdmVyQ29sdW1ucy5sZW5ndGhcIj5cblxuICAgICAgICAgICAgICAgIDx0aCBjZGstaGVhZGVyLWNlbGwgc2NvcGU9XCJjb2xcIiAqY2RrSGVhZGVyQ2VsbERlZiBjbGFzcz1cInByaW1hcnktdGFibGUtaGVhZGVyIHNob3ctbW9yZS1jb2x1bW5cIj48L3RoPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNkay1jZWxsICpjZGtDZWxsRGVmPVwibGV0IHJlY29yZFwiIGNsYXNzPVwic2hvdy1tb3JlLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1yZWNvcmQtZGV0YWlscy1wb3B1cC1idXR0b24gW3JlY29yZF09XCJyZWNvcmRcIiBbY29sdW1uc109XCJwb3BvdmVyQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInBvcG92ZXJDb2x1bW5zLmxlbmd0aFwiPjwvc2NybS1yZWNvcmQtZGV0YWlscy1wb3B1cC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiB2bS5jb2x1bW5zXCIgW2Nka0NvbHVtbkRlZl09XCJjb2x1bW4ubmFtZVwiPlxuXG4gICAgICAgICAgICAgICAgPHRoIGNkay1oZWFkZXItY2VsbFxuICAgICAgICAgICAgICAgICAgICAqY2RrSGVhZGVyQ2VsbERlZlxuICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCIoJ3ByaW1hcnktdGFibGUtaGVhZGVyICcgKyAnY29sdW1uLScgKyBjb2x1bW4/Lm5hbWUgPz8gJycpICsgJyAnICsgKCdjb2x1bW4tdHlwZS0nICsgY29sdW1uPy50eXBlID8/ICcnKVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJjb2x1bW4ubGFiZWxcIiBbbW9kdWxlXT1cImNvbmZpZy5tb2R1bGUgfHwgJydcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLXNvcnQtYnV0dG9uICpuZ0lmPVwiY29uZmlnLnNvcnQkICYmIGNvbHVtbi5zb3J0YWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdGF0ZV09XCJnZXRGaWVsZFNvcnQoY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3Njcm0tc29ydC1idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8L3RoPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNkay1jZWxsICpjZGtDZWxsRGVmPVwibGV0IHJlY29yZFwiIFtjbGFzc109XCIoJ2NvbHVtbi0nICsgY29sdW1uPy5uYW1lID8/ICcnKSArICcgJyArICgnY29sdW1uLXR5cGUtJyArIGNvbHVtbj8udHlwZSA/PyAnJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tZmllbGQgW21vZGVdPVwiJ2xpc3QnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiY29sdW1uLnR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiZ2V0RmllbGQoY29sdW1uLCByZWNvcmQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlY29yZF09XCJyZWNvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cImxpbmUtYWN0aW9uc1wiPlxuXG4gICAgICAgICAgICAgICAgPHRoIGNkay1oZWFkZXItY2VsbCBzY29wZT1cImNvbFwiICpjZGtIZWFkZXJDZWxsRGVmIGNsYXNzPVwicHJpbWFyeS10YWJsZS1oZWFkZXJcIj48L3RoPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNkay1jZWxsICpjZGtDZWxsRGVmPVwibGV0IHJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1saW5lLWFjdGlvbi1tZW51ICpuZ0lmPVwicmVjb3JkICYmIGNvbmZpZy5saW5lQWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJjb25maWcubGluZUFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWNvcmRdPVwicmVjb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbd3JhcHBlckNsYXNzXT1cIidsaXN0dmlldy1hY3Rpb25zJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tsYXNzXT1cIidpY29uLWJhcidcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWxpbmUtYWN0aW9uLW1lbnU+XG4gICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDx0ciBjZGstaGVhZGVyLXJvdyAqY2RrSGVhZGVyUm93RGVmPVwidm0uZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gICAgICAgICAgICA8dHIgY2RrLXJvdyAqY2RrUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogdm0uZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuXG4gICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgPGRpdiAqbmdJZj1cIiF2bS5sb2FkaW5nICYmIHZtLnJlY29yZHMubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImxlYWQgdGV4dC1jZW50ZXIgcHQtM1wiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTVNHX0xJU1RfVklFV19OT19SRVNVTFRTX0JBU0lDXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cInZtLmxvYWRpbmdcIiBbY2xhc3MubS01XT1cIiF2bS5yZWNvcmRzIHx8IHZtLnJlY29yZHMubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgICA8c2NybS1sb2FkaW5nLXNwaW5uZXIgW292ZXJsYXldPVwidHJ1ZVwiPjwvc2NybS1sb2FkaW5nLXNwaW5uZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=