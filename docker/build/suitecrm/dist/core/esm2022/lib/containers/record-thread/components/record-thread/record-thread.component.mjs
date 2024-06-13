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
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { combineLatestWith } from 'rxjs';
import { RecordThreadStoreFactory } from '../../store/record-thread/record-thread.store.factory';
import { map, take, tap } from 'rxjs/operators';
import { isVoid } from 'common';
import { RecordThreadItemStoreFactory } from '../../store/record-thread/record-thread-item.store.factory';
import { RecordManager } from '../../../../services/record/record.manager';
import { MessageService } from '../../../../services/message/message.service';
import { RecordThreadListActionsAdapterFactory } from "../../adapters/record-thread-list-actions.adapter.factory";
import * as i0 from "@angular/core";
import * as i1 from "../../store/record-thread/record-thread.store.factory";
import * as i2 from "../../store/record-thread/record-thread-item.store.factory";
import * as i3 from "../../../../services/record/record.manager";
import * as i4 from "../../../../services/message/message.service";
import * as i5 from "../../adapters/record-thread-list-actions.adapter.factory";
import * as i6 from "@angular/common";
import * as i7 from "../../../../components/button/button.component";
import * as i8 from "../../../../components/label/label.component";
import * as i9 from "../record-thread-item/record-thread-item.component";
import * as i10 from "../../../../components/loading-spinner/loading-spinner.component";
import * as i11 from "../../../../components/action-group-menu/action-group-menu.component";
const _c0 = ["list"];
function RecordThreadComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "scrm-label", 5);
    i0.ɵɵelementEnd();
} }
function RecordThreadComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-loading-spinner", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("overlay", true);
} }
function RecordThreadComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "scrm-button", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r6.getLoadMoreButton());
} }
function RecordThreadComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", null, 15);
    i0.ɵɵelement(2, "scrm-record-thread-item", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r10 = ctx.$implicit;
    const _r11 = i0.ɵɵreference(1);
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r7.buildItem(record_r10, _r11));
} }
function RecordThreadComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "scrm-button", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r8.getLoadMoreButton());
} }
function RecordThreadComponent_div_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-action-group-menu", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    let tmp_0_0;
    let tmp_1_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("buttonClass", (tmp_0_0 = ctx_r9.config.listActionsButtonClass) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "")("buttonGroupClass", (tmp_1_0 = ctx_r9.config.listActionsButtonGroupClass) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "")("config", ctx_r9.listActionAdapter);
} }
function RecordThreadComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8, 9);
    i0.ɵɵtemplate(2, RecordThreadComponent_div_3_div_2_Template, 2, 1, "div", 10);
    i0.ɵɵtemplate(3, RecordThreadComponent_div_3_div_3_Template, 3, 1, "div", 11);
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵtemplate(5, RecordThreadComponent_div_3_div_5_Template, 2, 1, "div", 12);
    i0.ɵɵtemplate(6, RecordThreadComponent_div_3_ng_container_6_Template, 2, 3, "ng-container", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    let tmp_3_0;
    i0.ɵɵproperty("ngStyle", ctx_r2.getMaxHeight());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.loadMorePosition === "top" && !ctx_r2.allLoaded());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.records);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap((tmp_3_0 = ctx_r2.config.listActionsClass) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.loadMorePosition === "bottom" && !ctx_r2.allLoaded());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.config.listActions);
} }
function RecordThreadComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h6", 18);
    i0.ɵɵelement(2, "scrm-label", 19);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", ctx_r3.config.noDataLabel || "LBL_NO_DATA");
} }
function RecordThreadComponent_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22);
    i0.ɵɵelement(2, "scrm-record-thread-item", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 23);
    i0.ɵɵelement(4, "scrm-button", 14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r12.buildCreateItem());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r12.getCreateButton());
} }
function RecordThreadComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordThreadComponent_ng_container_5_div_1_Template, 5, 2, "div", 20);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r4.loading);
} }
class RecordThreadComponent {
    constructor(storeFactory, itemFactory, recordManager, message, actionAdapterFactory) {
        this.storeFactory = storeFactory;
        this.itemFactory = itemFactory;
        this.recordManager = recordManager;
        this.message = message;
        this.actionAdapterFactory = actionAdapterFactory;
        this.loading = false;
        this.maxHeight = 400;
        this.direction = 'asc';
        this.loadMorePosition = 'top';
        this.shouldResetScroll = false;
        this.subs = [];
    }
    ngOnInit() {
        if (!isVoid(this.config.maxListHeight)) {
            this.maxHeight = this.config.maxListHeight;
        }
        if (!this.config.module) {
            return;
        }
        if (!this.config.store) {
            this.store = this.storeFactory.create();
            this.store.setItemMetadata(this.config.itemConfig.metadata);
            this.store.setListMetadata({ actions: this.config.listActions });
            this.store.init(this.config.module, false, this?.config?.pageSize ?? null);
        }
        else {
            this.store = this.config.store;
        }
        this.direction = this.config.direction || this.direction;
        this.setLoadMorePosition();
        this.initCreate();
        this.initDataSubscription();
        if (this.config.filters$) {
            this.subs.push(this.config.filters$.subscribe(filters => {
                this.store.setFilters(filters).pipe(take(1)).subscribe(() => {
                    if (this.config.onRefresh) {
                        this.config.onRefresh();
                    }
                });
            }));
        }
        else {
            this.store.load(false).subscribe(() => {
                if (this.config.onRefresh) {
                    this.config.onRefresh();
                }
            });
        }
        const autoRefreshFrequency = this?.config?.autoRefreshFrequency ?? 0;
        if (autoRefreshFrequency && this.store) {
            const min = this.config.autoRefreshDeviationMin ?? -15;
            const max = this.config.autoRefreshDeviationMax ?? 15;
            this.subs.push(this.store.initAutoRefresh(autoRefreshFrequency, min, max, this.config.onRefresh).subscribe());
        }
        this.initLoading();
        this.listActionAdapter = this.actionAdapterFactory.create(this.store, this.config);
    }
    setLoadMorePosition() {
        this.loadMorePosition = this.direction === 'asc' ? 'top' : 'bottom';
        if (this.config.loadMorePosition) {
            this.loadMorePosition = this.config.loadMorePosition;
        }
    }
    ngAfterViewInit() {
        this.shouldResetScroll = true;
        this.resetScroll();
    }
    ngOnDestroy() {
        if (!(this?.config?.store ?? null)) {
            this.store.clear();
        }
        this.store = null;
        this.subs.forEach(sub => sub.unsubscribe());
    }
    buildItem(item, itemRef) {
        let klass = 'record-thread-list-item';
        if (this.config.itemConfig.klass) {
            klass += ' ' + this.config.itemConfig.klass;
        }
        return {
            ...this.config.itemConfig,
            store: item,
            threadStore: this.store,
            klass: klass,
            containerClass: this.config.itemConfig.containerClass,
            flexDirection: this.config?.itemConfig?.flexDirection ?? '',
            expanded: () => {
                this.scrollToItem(itemRef);
            },
            collapsed: () => {
                this.scrollToItem(itemRef);
            }
        };
    }
    getLoadMoreButton() {
        return {
            klass: 'load-more-button btn btn-link btn-sm',
            labelKey: 'LBL_LOAD_MORE',
            onClick: () => {
                if (this?.config?.onLoadMore) {
                    this.store.getRecordList().records$.pipe(take(1), tap(() => this.config.onLoadMore())).subscribe();
                }
                this.store.loadMore();
            }
        };
    }
    buildCreateItem() {
        return {
            ...this.config.createConfig,
            store: this.createStore,
            rowClass: { 'pt-1': true },
            klass: 'record-thread-create-item',
        };
    }
    getCreateButton() {
        return {
            klass: 'create-thread-item-button btn btn-main btn-sm',
            labelKey: 'LBL_SUBMIT_BUTTON_LABEL',
            onClick: () => {
                this.createStore.validate().pipe(take(1)).subscribe(valid => {
                    if (valid) {
                        this.createStore.save().pipe(take(1)).subscribe(() => {
                            this.store.reload();
                            this.initRecord();
                            this.shouldResetScroll = true;
                            this.message.addSuccessMessageByKey('LBL_ACTION_SUCCESS');
                        });
                        return;
                    }
                    this.message.addWarningMessageByKey('LBL_VALIDATION_ERRORS');
                });
            }
        };
    }
    allLoaded() {
        return !!(this.store && this.store.allLoaded());
    }
    getMaxHeight() {
        if (this.maxHeight == 0) {
            return null;
        }
        return { 'max-height.px': this.maxHeight, 'overflow-y': 'auto' };
    }
    initRecord() {
        const emptyRecord = this.recordManager.buildEmptyRecord(this.config.module);
        this.addPresetFields(emptyRecord);
        let mode = 'edit';
        if (this.config.createConfig && this.config.createConfig.initialMode) {
            mode = this.config.createConfig.initialMode;
        }
        this.createStore.initRecord(emptyRecord, mode, false);
    }
    scrollToEnd() {
        if (!this.listContainer || !this.listContainer.nativeElement) {
            return;
        }
        this.scrollTo(this.listContainer.nativeElement.scrollHeight);
    }
    scrollToTop() {
        this.scrollTo(0);
    }
    scrollTo(position) {
        try {
            this.listContainer.nativeElement.scrollTop = position;
        }
        catch (err) {
        }
    }
    scrollToItem(item) {
        if (!item || !this.listContainer || !this.listContainer.nativeElement) {
            return;
        }
        const elementTop = item.offsetTop;
        const parentTop = this.listContainer.nativeElement.offsetTop;
        const relativeTop = elementTop - parentTop;
        this.scrollTo(relativeTop);
    }
    resetScroll() {
        if (this.shouldResetScroll === false) {
            return;
        }
        if (this.direction === 'asc') {
            this.scrollToEnd();
        }
        else {
            this.scrollToTop();
        }
        this.shouldResetScroll = false;
    }
    scheduleScrollReset() {
        setTimeout(() => {
            this.resetScroll();
        }, 500);
    }
    initCreate() {
        if (!this.config.create) {
            return;
        }
        this.createStore = this.itemFactory.create();
        this.createStore.setMetadata(this.config.createConfig.metadata);
        this.initRecord();
        this.initPresetFieldsMapping();
    }
    initPresetFieldsMapping() {
        if (!this.config.presetFields$) {
            return;
        }
        this.subs.push(this.config.presetFields$.subscribe(presetFieldValues => {
            if (!presetFieldValues || !Object.keys(presetFieldValues).length) {
                return;
            }
            this.presetFieldValues = presetFieldValues;
            const record = this.createStore.recordStore.getBaseRecord();
            this.addPresetFields(record);
            this.createStore.recordStore.setRecord(record);
        }));
    }
    addPresetFields(record) {
        if (!this.presetFieldValues) {
            return;
        }
        record.attributes = {
            ...this.presetFieldValues,
            ...(record.attributes || {})
        };
    }
    initDataSubscription() {
        this.subs.push(this.store.stores$.subscribe(records => {
            if (!this.records || !this.records.length) {
                this.shouldResetScroll = true;
            }
            if (this.direction === 'asc') {
                this.records = records.reverse();
                this.scheduleScrollReset();
                return;
            }
            this.records = records;
            this.scheduleScrollReset();
        }));
    }
    initLoading() {
        let loading$;
        if (this.createStore && this.createStore.loading$) {
            loading$ = this.store.$loading.pipe(combineLatestWith(this.createStore.loading$));
        }
        else {
            loading$ = this.store.$loading.pipe(map(value => [value]));
        }
        this.subs.push(loading$.subscribe((loadings) => {
            if (!loadings || !loadings.length) {
                this.loading = false;
                return;
            }
            let loading = false;
            loadings.forEach(value => {
                loading = loading || value;
            });
            this.loading = loading;
        }));
    }
    static { this.ɵfac = function RecordThreadComponent_Factory(t) { return new (t || RecordThreadComponent)(i0.ɵɵdirectiveInject(i1.RecordThreadStoreFactory), i0.ɵɵdirectiveInject(i2.RecordThreadItemStoreFactory), i0.ɵɵdirectiveInject(i3.RecordManager), i0.ɵɵdirectiveInject(i4.MessageService), i0.ɵɵdirectiveInject(i5.RecordThreadListActionsAdapterFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordThreadComponent, selectors: [["scrm-record-thread"]], viewQuery: function RecordThreadComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listContainer = _t.first);
        } }, inputs: { config: "config" }, decls: 6, vars: 8, consts: [["class", "d-flex record-thread-no-data justify-content-center h3", 4, "ngIf"], ["class", "d-flex record-thread-loading justify-content-center", 4, "ngIf"], ["class", "record-thread-list scrollbar-thick", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "record-thread-no-data", "justify-content-center", "h3"], ["labelKey", "LBL_NO_DATA"], [1, "d-flex", "record-thread-loading", "justify-content-center"], [3, "overlay"], [1, "record-thread-list", "scrollbar-thick", 3, "ngStyle"], ["list", ""], ["class", "record-thread-load-more d-flex justify-content-center flex-grow-1", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "record-thread-load-more d-flex justify-content-center", 4, "ngIf"], [1, "record-thread-load-more", "d-flex", "justify-content-center", "flex-grow-1"], [3, "config"], ["item", ""], [1, "record-thread-load-more", "d-flex", "justify-content-center"], [3, "buttonClass", "buttonGroupClass", "config"], [1, "pt-3", "pl-3", "pr-3", "pb-2"], [3, "labelKey"], ["class", "d-flex flex-column record-thread-create-container", 4, "ngIf"], [1, "d-flex", "flex-column", "record-thread-create-container"], [1, "flex-grow-1"], [1, "flex-grow-1", "d-flex", "justify-content-start", "pt-1", "record-thread-create-buttons"]], template: function RecordThreadComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, RecordThreadComponent_div_1_Template, 2, 0, "div", 0);
            i0.ɵɵtemplate(2, RecordThreadComponent_div_2_Template, 2, 1, "div", 1);
            i0.ɵɵtemplate(3, RecordThreadComponent_div_3_Template, 7, 7, "div", 2);
            i0.ɵɵtemplate(4, RecordThreadComponent_div_4_Template, 3, 1, "div", 3);
            i0.ɵɵtemplate(5, RecordThreadComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("record-thread ", ctx.config && ctx.config.klass || "", "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.loading && !ctx.records && !ctx.records.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.records && ctx.records.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (!ctx.records || !ctx.records.length) && !ctx.loading && ctx.config.showNoDataMessage);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.config.create && ctx.createStore);
        } }, dependencies: [i6.NgForOf, i6.NgIf, i6.NgStyle, i7.ButtonComponent, i8.LabelComponent, i9.RecordThreadItemComponent, i10.LoadingSpinnerComponent, i11.ActionGroupMenuComponent], encapsulation: 2 }); }
}
export { RecordThreadComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-thread', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"record-thread {{(config && config.klass) || ''}}\">\n    <div *ngIf=\"!loading && !records && !records.length\"\n         class=\"d-flex record-thread-no-data justify-content-center h3\">\n        <scrm-label labelKey=\"LBL_NO_DATA\"></scrm-label>\n    </div>\n\n    <div *ngIf=\"loading\" class=\"d-flex record-thread-loading justify-content-center\">\n        <scrm-loading-spinner [overlay]=\"true\"></scrm-loading-spinner>\n    </div>\n\n    <div #list\n         *ngIf=\"records && records.length\"\n         [ngStyle]=\"getMaxHeight()\"\n         class=\"record-thread-list scrollbar-thick\">\n\n        <div *ngIf=\"loadMorePosition === 'top' && !allLoaded()\"\n             class=\"record-thread-load-more d-flex justify-content-center flex-grow-1\">\n            <scrm-button [config]=\"getLoadMoreButton()\"></scrm-button>\n        </div>\n\n        <div #item *ngFor=\"let record of records\">\n            <scrm-record-thread-item [config]=\"buildItem(record, item)\"></scrm-record-thread-item>\n        </div>\n\n        <div [class]=\"config.listActionsClass ?? ''\">\n\n            <div *ngIf=\"loadMorePosition === 'bottom' && !allLoaded()\"\n                 class=\"record-thread-load-more d-flex justify-content-center\">\n                <scrm-button [config]=\"getLoadMoreButton()\"></scrm-button>\n            </div>\n\n            <ng-container *ngIf=\"config.listActions\">\n                <scrm-action-group-menu [buttonClass]=\"config.listActionsButtonClass ?? ''\"\n                                        [buttonGroupClass]=\"config.listActionsButtonGroupClass ?? ''\"\n                                        [config]=\"listActionAdapter\">\n                </scrm-action-group-menu>\n            </ng-container>\n\n        </div>\n\n    </div>\n\n    <div *ngIf=\"(!records || !records.length) && !loading && config.showNoDataMessage\">\n        <h6 class=\"pt-3 pl-3 pr-3 pb-2\">\n            <scrm-label [labelKey]=\"config.noDataLabel || 'LBL_NO_DATA'\"></scrm-label>\n        </h6>\n\n    </div>\n\n    <ng-container *ngIf=\"config.create && createStore\">\n\n        <div *ngIf=\"!loading\"\n             class=\"d-flex flex-column record-thread-create-container\">\n\n            <div class=\"flex-grow-1\">\n                <scrm-record-thread-item [config]=\"buildCreateItem()\"></scrm-record-thread-item>\n            </div>\n\n            <div class=\"flex-grow-1 d-flex justify-content-start pt-1 record-thread-create-buttons\">\n                <scrm-button [config]=\"getCreateButton()\"></scrm-button>\n            </div>\n\n        </div>\n\n    </ng-container>\n\n</div>\n" }]
    }], function () { return [{ type: i1.RecordThreadStoreFactory }, { type: i2.RecordThreadItemStoreFactory }, { type: i3.RecordManager }, { type: i4.MessageService }, { type: i5.RecordThreadListActionsAdapterFactory }]; }, { config: [{
            type: Input
        }], listContainer: [{
            type: ViewChild,
            args: ['list']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtdGhyZWFkL2NvbXBvbmVudHMvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvY29tcG9uZW50cy9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUMsaUJBQWlCLEVBQTJCLE1BQU0sTUFBTSxDQUFDO0FBRWpFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBRS9GLE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRzlDLE9BQU8sRUFBZ0MsTUFBTSxFQUFtQixNQUFNLFFBQVEsQ0FBQztBQUMvRSxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSw0REFBNEQsQ0FBQztBQUN4RyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNENBQTRDLENBQUM7QUFDekUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBRTVFLE9BQU8sRUFBQyxxQ0FBcUMsRUFBQyxNQUFNLDJEQUEyRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNWNUcsOEJBQ29FO0lBQ2hFLGdDQUFnRDtJQUNwRCxpQkFBTTs7O0lBRU4sOEJBQWlGO0lBQzdF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Q0FBQyxDQUFDLENBQ3hCLENBQUE7U0FDSjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLE9BQU87YUFDVjtZQUVELElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztZQUVwQixRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixPQUFPLEdBQUcsT0FBTyxJQUFJLEtBQUssQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO3NGQXJWUSxxQkFBcUI7b0VBQXJCLHFCQUFxQjs7Ozs7O1lDbkJsQywyQkFBOEQ7WUFDMUQsc0VBR007WUFFTixzRUFFTTtZQUVOLHNFQThCTTtZQUVOLHNFQUtNO1lBRU4sd0ZBZWU7WUFFbkIsaUJBQU07O1lBbEVELHFGQUF3RDtZQUNuRCxlQUE2QztZQUE3QywwRUFBNkM7WUFLN0MsZUFBYTtZQUFiLGtDQUFhO1lBS2IsZUFBK0I7WUFBL0Isd0RBQStCO1lBK0IvQixlQUEyRTtZQUEzRSw0R0FBMkU7WUFPbEUsZUFBa0M7WUFBbEMsMkRBQWtDOzs7U0Q5QnhDLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBTGpDLFNBQVM7MkJBQ0ksb0JBQW9CO21PQU1yQixNQUFNO2tCQUFkLEtBQUs7WUFDYSxhQUFhO2tCQUEvQixTQUFTO21CQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLnN0b3JlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQuc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge1JlY29yZFRocmVhZENvbmZpZ30gZnJvbSAnLi9yZWNvcmQtdGhyZWFkLm1vZGVsJztcbmltcG9ydCB7bWFwLCB0YWtlLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbUNvbmZpZ30gZnJvbSAnLi4vcmVjb3JkLXRocmVhZC1pdGVtL3JlY29yZC10aHJlYWQtaXRlbS5tb2RlbCc7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1TdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLWl0ZW0uc3RvcmUnO1xuaW1wb3J0IHtBdHRyaWJ1dGVNYXAsIEJ1dHRvbkludGVyZmFjZSwgaXNWb2lkLCBSZWNvcmQsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRJdGVtU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQtaXRlbS5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7UmVjb3JkTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlY29yZC5tYW5hZ2VyJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkTGlzdEFjdGlvbnNBZGFwdGVyfSBmcm9tIFwiLi4vLi4vYWRhcHRlcnMvcmVjb3JkLXRocmVhZC1saXN0LWFjdGlvbnMuYWRhcHRlclwiO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRMaXN0QWN0aW9uc0FkYXB0ZXJGYWN0b3J5fSBmcm9tIFwiLi4vLi4vYWRhcHRlcnMvcmVjb3JkLXRocmVhZC1saXN0LWFjdGlvbnMuYWRhcHRlci5mYWN0b3J5XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXJlY29yZC10aHJlYWQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWNvcmQtdGhyZWFkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRUaHJlYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBASW5wdXQoKSBjb25maWc6IFJlY29yZFRocmVhZENvbmZpZztcbiAgICBAVmlld0NoaWxkKCdsaXN0JykgbGlzdENvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgIHN0b3JlOiBSZWNvcmRUaHJlYWRTdG9yZTtcbiAgICBjcmVhdGVTdG9yZTogUmVjb3JkVGhyZWFkSXRlbVN0b3JlO1xuICAgIHJlY29yZHM6IFJlY29yZFRocmVhZEl0ZW1TdG9yZVtdO1xuICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICBtYXhIZWlnaHQgPSA0MDA7XG4gICAgZGlyZWN0aW9uOiAnYXNjJyB8ICdkZXNjJyA9ICdhc2MnO1xuICAgIGxvYWRNb3JlUG9zaXRpb246ICdib3R0b20nIHwgJ3RvcCcgfCBzdHJpbmcgPSAndG9wJztcbiAgICBsaXN0QWN0aW9uQWRhcHRlcjogUmVjb3JkVGhyZWFkTGlzdEFjdGlvbnNBZGFwdGVyO1xuXG4gICAgcHJvdGVjdGVkIHNob3VsZFJlc2V0U2Nyb2xsID0gZmFsc2U7XG5cbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgcHJlc2V0RmllbGRWYWx1ZXM6IEF0dHJpYnV0ZU1hcDtcblxuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlRmFjdG9yeTogUmVjb3JkVGhyZWFkU3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgaXRlbUZhY3Rvcnk6IFJlY29yZFRocmVhZEl0ZW1TdG9yZUZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRNYW5hZ2VyOiBSZWNvcmRNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25BZGFwdGVyRmFjdG9yeTogUmVjb3JkVGhyZWFkTGlzdEFjdGlvbnNBZGFwdGVyRmFjdG9yeSxcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpc1ZvaWQodGhpcy5jb25maWcubWF4TGlzdEhlaWdodCkpIHtcbiAgICAgICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gdGhpcy5jb25maWcubWF4TGlzdEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcubW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLnN0b3JlKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlID0gdGhpcy5zdG9yZUZhY3RvcnkuY3JlYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLnNldEl0ZW1NZXRhZGF0YSh0aGlzLmNvbmZpZy5pdGVtQ29uZmlnLm1ldGFkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuc2V0TGlzdE1ldGFkYXRhKHthY3Rpb25zOiB0aGlzLmNvbmZpZy5saXN0QWN0aW9uc30pO1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5pbml0KHRoaXMuY29uZmlnLm1vZHVsZSwgZmFsc2UsIHRoaXM/LmNvbmZpZz8ucGFnZVNpemUgPz8gbnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlID0gdGhpcy5jb25maWcuc3RvcmU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuY29uZmlnLmRpcmVjdGlvbiB8fCB0aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5zZXRMb2FkTW9yZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5pbml0Q3JlYXRlKCk7XG4gICAgICAgIHRoaXMuaW5pdERhdGFTdWJzY3JpcHRpb24oKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuZmlsdGVycyQpIHtcblxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb25maWcuZmlsdGVycyQuc3Vic2NyaWJlKGZpbHRlcnMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc2V0RmlsdGVycyhmaWx0ZXJzKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5vblJlZnJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uUmVmcmVzaCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5sb2FkKGZhbHNlKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5vblJlZnJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcub25SZWZyZXNoKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGF1dG9SZWZyZXNoRnJlcXVlbmN5ID0gdGhpcz8uY29uZmlnPy5hdXRvUmVmcmVzaEZyZXF1ZW5jeSA/PyAwO1xuICAgICAgICBpZiAoYXV0b1JlZnJlc2hGcmVxdWVuY3kgJiYgdGhpcy5zdG9yZSkge1xuICAgICAgICAgICAgY29uc3QgbWluID0gdGhpcy5jb25maWcuYXV0b1JlZnJlc2hEZXZpYXRpb25NaW4gPz8gLTE1O1xuICAgICAgICAgICAgY29uc3QgbWF4ID0gdGhpcy5jb25maWcuYXV0b1JlZnJlc2hEZXZpYXRpb25NYXggPz8gMTU7XG5cbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuc3RvcmUuaW5pdEF1dG9SZWZyZXNoKGF1dG9SZWZyZXNoRnJlcXVlbmN5LCBtaW4sIG1heCwgdGhpcy5jb25maWcub25SZWZyZXNoKS5zdWJzY3JpYmUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXRMb2FkaW5nKCk7XG5cbiAgICAgICAgdGhpcy5saXN0QWN0aW9uQWRhcHRlciA9IHRoaXMuYWN0aW9uQWRhcHRlckZhY3RvcnkuY3JlYXRlKHRoaXMuc3RvcmUsIHRoaXMuY29uZmlnKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0TG9hZE1vcmVQb3NpdGlvbigpIHtcbiAgICAgICAgdGhpcy5sb2FkTW9yZVBvc2l0aW9uID0gdGhpcy5kaXJlY3Rpb24gPT09ICdhc2MnID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmxvYWRNb3JlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubG9hZE1vcmVQb3NpdGlvbiA9IHRoaXMuY29uZmlnLmxvYWRNb3JlUG9zaXRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuc2hvdWxkUmVzZXRTY3JvbGwgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICghKHRoaXM/LmNvbmZpZz8uc3RvcmUgPz8gbnVsbCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3JlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKVxuICAgIH1cblxuICAgIGJ1aWxkSXRlbShpdGVtOiBSZWNvcmRUaHJlYWRJdGVtU3RvcmUsIGl0ZW1SZWY6IGFueSk6IFJlY29yZFRocmVhZEl0ZW1Db25maWcge1xuICAgICAgICBsZXQga2xhc3MgPSAncmVjb3JkLXRocmVhZC1saXN0LWl0ZW0nO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5pdGVtQ29uZmlnLmtsYXNzKSB7XG4gICAgICAgICAgICBrbGFzcyArPSAnICcgKyB0aGlzLmNvbmZpZy5pdGVtQ29uZmlnLmtsYXNzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnRoaXMuY29uZmlnLml0ZW1Db25maWcsXG4gICAgICAgICAgICBzdG9yZTogaXRlbSxcbiAgICAgICAgICAgIHRocmVhZFN0b3JlOiB0aGlzLnN0b3JlLFxuICAgICAgICAgICAga2xhc3M6IGtsYXNzLFxuICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M6IHRoaXMuY29uZmlnLml0ZW1Db25maWcuY29udGFpbmVyQ2xhc3MsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB0aGlzLmNvbmZpZz8uaXRlbUNvbmZpZz8uZmxleERpcmVjdGlvbiA/PyAnJyxcbiAgICAgICAgICAgIGV4cGFuZGVkOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0l0ZW0oaXRlbVJlZik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sbGFwc2VkOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0l0ZW0oaXRlbVJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgUmVjb3JkVGhyZWFkSXRlbUNvbmZpZztcbiAgICB9XG5cbiAgICBnZXRMb2FkTW9yZUJ1dHRvbigpOiBCdXR0b25JbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2xhc3M6ICdsb2FkLW1vcmUtYnV0dG9uIGJ0biBidG4tbGluayBidG4tc20nLFxuICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfTE9BRF9NT1JFJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcz8uY29uZmlnPy5vbkxvYWRNb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZ2V0UmVjb3JkTGlzdCgpLnJlY29yZHMkLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMuY29uZmlnLm9uTG9hZE1vcmUoKSlcbiAgICAgICAgICAgICAgICAgICAgKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5sb2FkTW9yZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICB9XG5cbiAgICBidWlsZENyZWF0ZUl0ZW0oKTogUmVjb3JkVGhyZWFkSXRlbUNvbmZpZyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi50aGlzLmNvbmZpZy5jcmVhdGVDb25maWcsXG4gICAgICAgICAgICBzdG9yZTogdGhpcy5jcmVhdGVTdG9yZSxcbiAgICAgICAgICAgIHJvd0NsYXNzOiB7J3B0LTEnOiB0cnVlfSxcbiAgICAgICAgICAgIGtsYXNzOiAncmVjb3JkLXRocmVhZC1jcmVhdGUtaXRlbScsXG4gICAgICAgIH0gYXMgUmVjb3JkVGhyZWFkSXRlbUNvbmZpZztcbiAgICB9XG5cbiAgICBnZXRDcmVhdGVCdXR0b24oKTogQnV0dG9uSW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtsYXNzOiAnY3JlYXRlLXRocmVhZC1pdGVtLWJ1dHRvbiBidG4gYnRuLW1haW4gYnRuLXNtJyxcbiAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX1NVQk1JVF9CVVRUT05fTEFCRUwnLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RvcmUudmFsaWRhdGUoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSh2YWxpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTdG9yZS5zYXZlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0UmVjb3JkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3VsZFJlc2V0U2Nyb2xsID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGRTdWNjZXNzTWVzc2FnZUJ5S2V5KCdMQkxfQUNUSU9OX1NVQ0NFU1MnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkV2FybmluZ01lc3NhZ2VCeUtleSgnTEJMX1ZBTElEQVRJT05fRVJST1JTJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuICAgIH1cblxuICAgIGFsbExvYWRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKHRoaXMuc3RvcmUgJiYgdGhpcy5zdG9yZS5hbGxMb2FkZWQoKSk7XG4gICAgfVxuXG4gICAgZ2V0TWF4SGVpZ2h0KCk6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnk7IH0gfCBudWxsIHtcbiAgICAgICAgaWYgKHRoaXMubWF4SGVpZ2h0ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsnbWF4LWhlaWdodC5weCc6IHRoaXMubWF4SGVpZ2h0LCAnb3ZlcmZsb3cteSc6ICdhdXRvJ31cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdFJlY29yZCgpIHtcbiAgICAgICAgY29uc3QgZW1wdHlSZWNvcmQgPSB0aGlzLnJlY29yZE1hbmFnZXIuYnVpbGRFbXB0eVJlY29yZCh0aGlzLmNvbmZpZy5tb2R1bGUpO1xuICAgICAgICB0aGlzLmFkZFByZXNldEZpZWxkcyhlbXB0eVJlY29yZCk7XG4gICAgICAgIGxldCBtb2RlID0gJ2VkaXQnIGFzIFZpZXdNb2RlO1xuICAgICAgICBpZiAodGhpcy5jb25maWcuY3JlYXRlQ29uZmlnICYmIHRoaXMuY29uZmlnLmNyZWF0ZUNvbmZpZy5pbml0aWFsTW9kZSkge1xuICAgICAgICAgICAgbW9kZSA9IHRoaXMuY29uZmlnLmNyZWF0ZUNvbmZpZy5pbml0aWFsTW9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlU3RvcmUuaW5pdFJlY29yZChlbXB0eVJlY29yZCwgbW9kZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzY3JvbGxUb0VuZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RDb250YWluZXIgfHwgIXRoaXMubGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMubGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNjcm9sbFRvVG9wKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNjcm9sbFRvKDApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzY3JvbGxUbyhwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RDb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSBwb3NpdGlvbjtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2Nyb2xsVG9JdGVtKGl0ZW06IGFueSkge1xuICAgICAgICBpZiAoIWl0ZW0gfHwgIXRoaXMubGlzdENvbnRhaW5lciB8fCAhdGhpcy5saXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRUb3AgPSBpdGVtLm9mZnNldFRvcDtcbiAgICAgICAgY29uc3QgcGFyZW50VG9wID0gdGhpcy5saXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wO1xuICAgICAgICBjb25zdCByZWxhdGl2ZVRvcCA9IGVsZW1lbnRUb3AgLSBwYXJlbnRUb3A7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUbyhyZWxhdGl2ZVRvcCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc2V0U2Nyb2xsKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zaG91bGRSZXNldFNjcm9sbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9FbmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvdWxkUmVzZXRTY3JvbGwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2NoZWR1bGVTY3JvbGxSZXNldCgpOiB2b2lkIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRDcmVhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcuY3JlYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZVN0b3JlID0gdGhpcy5pdGVtRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTdG9yZS5zZXRNZXRhZGF0YSh0aGlzLmNvbmZpZy5jcmVhdGVDb25maWcubWV0YWRhdGEpO1xuICAgICAgICB0aGlzLmluaXRSZWNvcmQoKTtcbiAgICAgICAgdGhpcy5pbml0UHJlc2V0RmllbGRzTWFwcGluZygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0UHJlc2V0RmllbGRzTWFwcGluZygpIHtcblxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLnByZXNldEZpZWxkcyQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuY29uZmlnLnByZXNldEZpZWxkcyQuc3Vic2NyaWJlKHByZXNldEZpZWxkVmFsdWVzID0+IHtcblxuICAgICAgICAgICAgaWYgKCFwcmVzZXRGaWVsZFZhbHVlcyB8fCAhT2JqZWN0LmtleXMocHJlc2V0RmllbGRWYWx1ZXMpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcmVzZXRGaWVsZFZhbHVlcyA9IHByZXNldEZpZWxkVmFsdWVzO1xuXG4gICAgICAgICAgICBjb25zdCByZWNvcmQgPSB0aGlzLmNyZWF0ZVN0b3JlLnJlY29yZFN0b3JlLmdldEJhc2VSZWNvcmQoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUHJlc2V0RmllbGRzKHJlY29yZCk7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RvcmUucmVjb3JkU3RvcmUuc2V0UmVjb3JkKHJlY29yZCk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkUHJlc2V0RmllbGRzKHJlY29yZDogUmVjb3JkKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5wcmVzZXRGaWVsZFZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVjb3JkLmF0dHJpYnV0ZXMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLnByZXNldEZpZWxkVmFsdWVzLFxuICAgICAgICAgICAgLi4uKHJlY29yZC5hdHRyaWJ1dGVzIHx8IHt9KVxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGluaXREYXRhU3Vic2NyaXB0aW9uKCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuc3RvcmUuc3RvcmVzJC5zdWJzY3JpYmUocmVjb3JkcyA9PiB7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5yZWNvcmRzIHx8ICF0aGlzLnJlY29yZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG91bGRSZXNldFNjcm9sbCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMgPSByZWNvcmRzLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlU2Nyb2xsUmVzZXQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlY29yZHM7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlU2Nyb2xsUmVzZXQoKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGluaXRMb2FkaW5nKCk6IHZvaWQge1xuICAgICAgICBsZXQgbG9hZGluZyQ6IE9ic2VydmFibGU8QXJyYXk8Ym9vbGVhbj4+O1xuXG4gICAgICAgIGlmICh0aGlzLmNyZWF0ZVN0b3JlICYmIHRoaXMuY3JlYXRlU3RvcmUubG9hZGluZyQpIHtcbiAgICAgICAgICAgIGxvYWRpbmckID0gdGhpcy5zdG9yZS4kbG9hZGluZy5waXBlKFxuICAgICAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMuY3JlYXRlU3RvcmUubG9hZGluZyQpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9hZGluZyQ9IHRoaXMuc3RvcmUuJGxvYWRpbmcucGlwZShcbiAgICAgICAgICAgICAgICBtYXAodmFsdWUgPT4gW3ZhbHVlXSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKGxvYWRpbmckLnN1YnNjcmliZSgobG9hZGluZ3MpID0+IHtcbiAgICAgICAgICAgIGlmICghbG9hZGluZ3MgfHwgIWxvYWRpbmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgbG9hZGluZ3MuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZyA9IGxvYWRpbmcgfHwgdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGxvYWRpbmc7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG5cbjxkaXYgY2xhc3M9XCJyZWNvcmQtdGhyZWFkIHt7KGNvbmZpZyAmJiBjb25maWcua2xhc3MpIHx8ICcnfX1cIj5cbiAgICA8ZGl2ICpuZ0lmPVwiIWxvYWRpbmcgJiYgIXJlY29yZHMgJiYgIXJlY29yZHMubGVuZ3RoXCJcbiAgICAgICAgIGNsYXNzPVwiZC1mbGV4IHJlY29yZC10aHJlYWQtbm8tZGF0YSBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGgzXCI+XG4gICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX05PX0RBVEFcIj48L3Njcm0tbGFiZWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwiZC1mbGV4IHJlY29yZC10aHJlYWQtbG9hZGluZyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIDxzY3JtLWxvYWRpbmctc3Bpbm5lciBbb3ZlcmxheV09XCJ0cnVlXCI+PC9zY3JtLWxvYWRpbmctc3Bpbm5lcj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgI2xpc3RcbiAgICAgICAgICpuZ0lmPVwicmVjb3JkcyAmJiByZWNvcmRzLmxlbmd0aFwiXG4gICAgICAgICBbbmdTdHlsZV09XCJnZXRNYXhIZWlnaHQoKVwiXG4gICAgICAgICBjbGFzcz1cInJlY29yZC10aHJlYWQtbGlzdCBzY3JvbGxiYXItdGhpY2tcIj5cblxuICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZE1vcmVQb3NpdGlvbiA9PT0gJ3RvcCcgJiYgIWFsbExvYWRlZCgpXCJcbiAgICAgICAgICAgICBjbGFzcz1cInJlY29yZC10aHJlYWQtbG9hZC1tb3JlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtZ3Jvdy0xXCI+XG4gICAgICAgICAgICA8c2NybS1idXR0b24gW2NvbmZpZ109XCJnZXRMb2FkTW9yZUJ1dHRvbigpXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiAjaXRlbSAqbmdGb3I9XCJsZXQgcmVjb3JkIG9mIHJlY29yZHNcIj5cbiAgICAgICAgICAgIDxzY3JtLXJlY29yZC10aHJlYWQtaXRlbSBbY29uZmlnXT1cImJ1aWxkSXRlbShyZWNvcmQsIGl0ZW0pXCI+PC9zY3JtLXJlY29yZC10aHJlYWQtaXRlbT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBbY2xhc3NdPVwiY29uZmlnLmxpc3RBY3Rpb25zQ2xhc3MgPz8gJydcIj5cblxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImxvYWRNb3JlUG9zaXRpb24gPT09ICdib3R0b20nICYmICFhbGxMb2FkZWQoKVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwicmVjb3JkLXRocmVhZC1sb2FkLW1vcmUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gW2NvbmZpZ109XCJnZXRMb2FkTW9yZUJ1dHRvbigpXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmxpc3RBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tYWN0aW9uLWdyb3VwLW1lbnUgW2J1dHRvbkNsYXNzXT1cImNvbmZpZy5saXN0QWN0aW9uc0J1dHRvbkNsYXNzID8/ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYnV0dG9uR3JvdXBDbGFzc109XCJjb25maWcubGlzdEFjdGlvbnNCdXR0b25Hcm91cENsYXNzID8/ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImxpc3RBY3Rpb25BZGFwdGVyXCI+XG4gICAgICAgICAgICAgICAgPC9zY3JtLWFjdGlvbi1ncm91cC1tZW51PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCIoIXJlY29yZHMgfHwgIXJlY29yZHMubGVuZ3RoKSAmJiAhbG9hZGluZyAmJiBjb25maWcuc2hvd05vRGF0YU1lc3NhZ2VcIj5cbiAgICAgICAgPGg2IGNsYXNzPVwicHQtMyBwbC0zIHByLTMgcGItMlwiPlxuICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cImNvbmZpZy5ub0RhdGFMYWJlbCB8fCAnTEJMX05PX0RBVEEnXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICA8L2g2PlxuXG4gICAgPC9kaXY+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmNyZWF0ZSAmJiBjcmVhdGVTdG9yZVwiPlxuXG4gICAgICAgIDxkaXYgKm5nSWY9XCIhbG9hZGluZ1wiXG4gICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gcmVjb3JkLXRocmVhZC1jcmVhdGUtY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLXJlY29yZC10aHJlYWQtaXRlbSBbY29uZmlnXT1cImJ1aWxkQ3JlYXRlSXRlbSgpXCI+PC9zY3JtLXJlY29yZC10aHJlYWQtaXRlbT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTEgZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBwdC0xIHJlY29yZC10aHJlYWQtY3JlYXRlLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gW2NvbmZpZ109XCJnZXRDcmVhdGVCdXR0b24oKVwiPjwvc2NybS1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvbmctY29udGFpbmVyPlxuXG48L2Rpdj5cbiJdfQ==