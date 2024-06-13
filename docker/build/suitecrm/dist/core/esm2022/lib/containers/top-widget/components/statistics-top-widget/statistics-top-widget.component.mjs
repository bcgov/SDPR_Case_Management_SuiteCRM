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
import { Component } from '@angular/core';
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { SingleValueStatisticsStoreFactory } from '../../../../store/single-value-statistics/single-value-statistics.store.factory';
import { map, take } from 'rxjs/operators';
import { LanguageStore } from '../../../../store/language/language.store';
import { combineLatestWith, of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../store/single-value-statistics/single-value-statistics.store.factory";
import * as i3 from "@angular/common";
import * as i4 from "../../../../fields/field.component";
import * as i5 from "../../../../components/inline-loading-spinner/inline-loading-spinner.component";
function StatisticsTopWidgetComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, vm_r1.appStrings[ctx_r2.messageLabelKey] || ""), " ");
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r11.getLabel(item_r5.value.labelKey)), ": ");
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r12.getLabel(item_r5.value.labelKey)), " ");
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_1_ng_container_1_Template, 3, 3, "ng-container", 6);
    i0.ɵɵtemplate(2, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_1_ng_container_2_Template, 3, 3, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext(2).$implicit;
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r10.isValueEmpty(vm_r1.statistics[item_r5.key]));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.isValueEmpty(vm_r1.statistics[item_r5.key]));
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_1_Template, 3, 2, "div", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r5.value.labelKey && ctx_r6.getLabel(item_r5.value.labelKey));
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_3_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-field", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext(3).$implicit;
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", vm_r1.statistics[item_r5.key].field.type)("field", vm_r1.statistics[item_r5.key].field);
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_3_div_1_ng_container_1_Template, 2, 2, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext(2).$implicit;
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r18 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r18.isValueEmpty(vm_r1.statistics[item_r5.key]) || item_r5.value.hideValueIfEmpty !== true);
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_3_div_1_Template, 2, 1, "div", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !vm_r1.statistics[item_r5.key].loading && vm_r1.statistics[item_r5.key].field);
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " - ");
    i0.ɵɵelementContainerEnd();
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "scrm-inline-loading-spinner");
    i0.ɵɵtemplate(2, StatisticsTopWidgetComponent_div_0_ng_container_2_div_4_ng_container_2_Template, 2, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const loading_r26 = ctx.ngIf;
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !loading_r26 && (!item_r5.key || !vm_r1.statistics[item_r5.key]));
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r30.getLabel(item_r5.value.endLabelKey)), " ");
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_6_div_1_Template, 3, 3, "div", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r5.value.endLabelKey && ctx_r9.getLabel(item_r5.value.endLabelKey));
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 6);
    i0.ɵɵtemplate(3, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 6);
    i0.ɵɵtemplate(4, StatisticsTopWidgetComponent_div_0_ng_container_2_div_4_Template, 3, 1, "div", 7);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵtemplate(6, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_6_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r3.shouldHide(vm_r1.statistics[item_r5.key], item_r5.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r5.key && vm_r1.statistics[item_r5.key] && !ctx_r3.shouldHide(vm_r1.statistics[item_r5.key], item_r5.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(5, 4, item_r5.value.store.loading$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r3.shouldHide(vm_r1.statistics[item_r5.key], item_r5.value));
} }
function StatisticsTopWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_div_1_Template, 3, 3, "div", 2);
    i0.ɵɵtemplate(2, StatisticsTopWidgetComponent_div_0_ng_container_2_Template, 7, 6, "ng-container", 3);
    i0.ɵɵpipe(3, "keyvalue");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.messageLabelKey);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx_r0.statistics));
} }
class StatisticsTopWidgetComponent extends BaseWidgetComponent {
    constructor(language, factory) {
        super();
        this.language = language;
        this.factory = factory;
        this.statistics = {};
        this.loading = true;
        this.subs = [];
    }
    ngOnInit() {
        if (!this.context || !this.context.module) {
            this.messageLabelKey = 'LBL_CONFIG_BAD_CONTEXT';
            return;
        }
        if (!this.config) {
            this.messageLabelKey = 'LBL_CONFIG_NO_CONFIG';
            return;
        }
        if (!this.config.options || !this.config.options.statistics || !this.config.options.statistics.length) {
            this.messageLabelKey = 'LBL_CONFIG_NO_STATISTICS_KEY';
            return;
        }
        if (this.context$) {
            this.subs.push(this.context$.subscribe((context) => {
                this.context = context;
            }));
        }
        const statistics$ = [];
        const loadings$ = [];
        this.config.options.statistics.forEach(statistic => {
            if (!statistic.type) {
                return;
            }
            this.statistics[statistic.type] = {
                labelKey: statistic.labelKey || '',
                endLabelKey: statistic.endLabelKey || '',
                hideValueIfEmpty: statistic.hideValueIfEmpty || false,
                type: statistic.type,
                store: this.factory.create()
            };
            this.statistics[statistic.type].store.init(this.context.module, {
                key: statistic.type,
                context: { ...this.context }
            }).pipe(take(1)).subscribe();
            statistics$.push(this.statistics[statistic.type].store.state$);
            loadings$.push(this.statistics[statistic.type].store.loading$);
        });
        let statisticObs = null;
        if (statistics$.length < 1) {
            statisticObs = of([]);
        }
        else if (statistics$.length === 1) {
            statisticObs = statistics$[0].pipe(map(value => [value]));
        }
        else {
            let firsObs = null;
            let others;
            [firsObs, ...others] = statistics$;
            statisticObs = firsObs.pipe(combineLatestWith(others));
        }
        this.loading$ = loadings$[0].pipe(combineLatestWith(...loadings$), map((loadings) => {
            if (!loadings || loadings.length < 1) {
                this.loading = false;
                return false;
            }
            let loading = true;
            loadings.forEach(value => {
                loading = loading && value;
            });
            this.loading = loading;
            return loading;
        }));
        this.subs.push(this.loading$.subscribe());
        this.vm$ = statisticObs.pipe(combineLatestWith(this.language.appStrings$), map(([statistics, appStrings]) => {
            const statsMap = {};
            statistics.forEach(value => {
                statsMap[value.query.key] = value;
                this.statistics[value.query.key].labelKey = this.getMetadataEntry(value, 'labelKey');
                this.statistics[value.query.key].endLabelKey = this.getMetadataEntry(value, 'endLabelKey');
            });
            return {
                statistics: statsMap,
                appStrings
            };
        }));
        if (this.config.reload$) {
            this.subs.push(this.config.reload$.subscribe(() => {
                if (this.loading === false) {
                    this.loading = true;
                    this.config.options.statistics.forEach(statistic => {
                        if (!statistic.type) {
                            return;
                        }
                        if (!this.statistics[statistic.type] || !this.statistics[statistic.type].store) {
                            return;
                        }
                        this.statistics[statistic.type].store.load(false).pipe(take(1)).subscribe();
                    });
                }
            }));
        }
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    /**
     * Check if statistics should be hidden
     * @param stats
     * @param item
     */
    shouldHide(stats, item) {
        return this.hasLoaded(stats) && this.isValueEmpty(stats) && item.hideIfEmpty === true;
    }
    /**
     * Check if statistics have been loaded
     * @param stats
     */
    hasLoaded(stats) {
        return !stats.loading;
    }
    /**
     * Check if value is empty
     * @param stats
     */
    isValueEmpty(stats) {
        const emptyValue = stats?.statistic?.metadata?.emptyValueString ?? null;
        if (emptyValue !== null) {
            return true;
        }
        const value = stats?.field?.value ?? null;
        if (value) {
            return false;
        }
        return emptyValue === value;
    }
    /**
     * Get metadata entry for statistic
     * @param stat
     * @param name
     */
    getMetadataEntry(stat, name) {
        const value = stat.statistic.metadata && stat.statistic.metadata[name];
        if (value !== null && typeof value !== 'undefined') {
            return value;
        }
        return this.statistics[stat.query.key][name];
    }
    /**
     * Get label value
     * @param key
     */
    getLabel(key) {
        const context = this.context || {};
        const module = context.module || '';
        return this.language.getFieldLabel(key, module);
    }
    static { this.ɵfac = function StatisticsTopWidgetComponent_Factory(t) { return new (t || StatisticsTopWidgetComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.SingleValueStatisticsStoreFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatisticsTopWidgetComponent, selectors: [["scrm-statistics-top-widget"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["class", "d-flex justify-content-center widget-bar rounded", 4, "ngIf"], [1, "d-flex", "justify-content-center", "widget-bar", "rounded"], ["class", "p-2 widget-bar-entry-message", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "p-2", "widget-bar-entry-message"], [1, "d-flex", "justify-content-center", "align-items-baseline", "widget-bar-entry", "p-2"], [4, "ngIf"], ["class", "pl-1 pr-1 widget-bar-entry-loading", 4, "ngIf"], ["class", "pr-1 widget-bar-entry-label", 4, "ngIf"], [1, "pr-1", "widget-bar-entry-label"], ["class", "pl-1 pr-1 widget-bar-entry-value", 4, "ngIf"], [1, "pl-1", "pr-1", "widget-bar-entry-value"], ["mode", "list", 3, "type", "field"], [1, "pl-1", "pr-1", "widget-bar-entry-loading"], ["class", "pl-1 widget-bar-entry-end-label", 4, "ngIf"], [1, "pl-1", "widget-bar-entry-end-label"]], template: function StatisticsTopWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, StatisticsTopWidgetComponent_div_0_Template, 4, 4, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.FieldComponent, i5.InlineLoadingSpinnerComponent, i3.AsyncPipe, i3.UpperCasePipe, i3.KeyValuePipe], encapsulation: 2 }); }
}
export { StatisticsTopWidgetComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatisticsTopWidgetComponent, [{
        type: Component,
        args: [{ selector: 'scrm-statistics-top-widget', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div *ngIf=\"(vm$ | async) as vm\"\n     class=\"d-flex justify-content-center widget-bar rounded\">\n    <div class=\"p-2 widget-bar-entry-message\" *ngIf=\"this.messageLabelKey\">\n        {{vm.appStrings[this.messageLabelKey] || '' | uppercase}}\n    </div>\n    <ng-container *ngFor=\"let item of statistics | keyvalue\">\n\n        <div class=\"d-flex justify-content-center align-items-baseline widget-bar-entry p-2\">\n\n            <ng-container *ngIf=\"!shouldHide(vm.statistics[item.key], item.value)\">\n\n                <div *ngIf=\"item.value.labelKey && getLabel(item.value.labelKey)\" class=\"pr-1 widget-bar-entry-label\">\n                    <ng-container *ngIf=\"!isValueEmpty(vm.statistics[item.key])\">\n                        {{getLabel(item.value.labelKey) | uppercase}}:\n                    </ng-container>\n                    <ng-container *ngIf=\"isValueEmpty(vm.statistics[item.key])\">\n                        {{getLabel(item.value.labelKey) | uppercase}}\n                    </ng-container>\n                </div>\n\n            </ng-container>\n\n            <ng-container\n                *ngIf=\"item.key && vm.statistics[item.key] && !shouldHide(vm.statistics[item.key], item.value)\">\n\n                <div class=\"pl-1 pr-1 widget-bar-entry-value\"\n                     *ngIf=\"!vm.statistics[item.key].loading && vm.statistics[item.key].field\">\n                    <ng-container\n                        *ngIf=\"!isValueEmpty(vm.statistics[item.key]) || item.value.hideValueIfEmpty !== true\">\n                        <scrm-field [type]=\"vm.statistics[item.key].field.type\" [field]=\"vm.statistics[item.key].field\"\n                                    mode=\"list\"></scrm-field>\n\n                    </ng-container>\n                </div>\n\n            </ng-container>\n\n            <div class=\"pl-1 pr-1 widget-bar-entry-loading\" *ngIf=\"(item.value.store.loading$ | async) as loading\">\n                <scrm-inline-loading-spinner></scrm-inline-loading-spinner>\n\n                <ng-container *ngIf=\"!loading && (!item.key || !vm.statistics[item.key])\">\n                    -\n                </ng-container>\n            </div>\n\n            <ng-container *ngIf=\"!shouldHide(vm.statistics[item.key], item.value)\">\n\n                <div *ngIf=\"item.value.endLabelKey && getLabel(item.value.endLabelKey)\"\n                     class=\"pl-1 widget-bar-entry-end-label\">\n                    {{getLabel(item.value.endLabelKey) | uppercase}}\n                </div>\n\n            </ng-container>\n\n        </div>\n\n    </ng-container>\n</div>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.SingleValueStatisticsStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy10b3Atd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3RvcC13aWRnZXQvY29tcG9uZW50cy9zdGF0aXN0aWNzLXRvcC13aWRnZXQvc3RhdGlzdGljcy10b3Atd2lkZ2V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3RvcC13aWRnZXQvY29tcG9uZW50cy9zdGF0aXN0aWNzLXRvcC13aWRnZXQvc3RhdGlzdGljcy10b3Atd2lkZ2V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUV2RSxPQUFPLEVBQ0gsaUNBQWlDLEVBQ3BDLE1BQU0saUZBQWlGLENBQUM7QUFDekYsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFvQixNQUFNLDJDQUEyQyxDQUFDO0FBQzNGLE9BQU8sRUFBQyxpQkFBaUIsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7O0lDTGpFLDhCQUF1RTtJQUNuRSxZQUNKOztJQUFBLGlCQUFNOzs7O0lBREYsZUFDSjtJQURJLHFHQUNKOzs7SUFRZ0IsNkJBQTZEO0lBQ3pELFlBQ0o7O0lBQUEsMEJBQWU7Ozs7SUFEWCxlQUNKO0lBREksZ0dBQ0o7OztJQUNBLDZCQUE0RDtJQUN4RCxZQUNKOztJQUFBLDBCQUFlOzs7O0lBRFgsZUFDSjtJQURJLCtGQUNKOzs7SUFOSiw4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bWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlV2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi93aWRnZXRzL2Jhc2Utd2lkZ2V0Lm1vZGVsJztcbmltcG9ydCB7U2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3NpbmdsZS12YWx1ZS1zdGF0aXN0aWNzL3NpbmdsZS12YWx1ZS1zdGF0aXN0aWNzLnN0b3JlJztcbmltcG9ydCB7XG4gICAgU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmVGYWN0b3J5XG59IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3NpbmdsZS12YWx1ZS1zdGF0aXN0aWNzL3NpbmdsZS12YWx1ZS1zdGF0aXN0aWNzLnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHttYXAsIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZSwgTGFuZ3VhZ2VTdHJpbmdNYXB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSwgU3RhdGlzdGljc1F1ZXJ5LCBWaWV3Q29udGV4dH0gZnJvbSAnY29tbW9uJztcblxuaW50ZXJmYWNlIFN0YXRpc3RpY3NUb3BXaWRnZXRTdGF0ZSB7XG4gICAgc3RhdGlzdGljczogeyBba2V5OiBzdHJpbmddOiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSB9O1xuICAgIGFwcFN0cmluZ3M6IExhbmd1YWdlU3RyaW5nTWFwO1xufVxuXG5pbnRlcmZhY2UgU3RhdGlzdGljc0VudHJ5IHtcbiAgICBsYWJlbEtleTogc3RyaW5nO1xuICAgIGVuZExhYmVsS2V5Pzogc3RyaW5nO1xuICAgIGhpZGVWYWx1ZUlmRW1wdHk/OiBib29sZWFuO1xuICAgIGhpZGVJZkVtcHR5PzogYm9vbGVhbjtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgc3RvcmU6IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0b3JlO1xufVxuXG5pbnRlcmZhY2UgU3RhdGlzdGljc0VudHJ5TWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBTdGF0aXN0aWNzRW50cnk7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1zdGF0aXN0aWNzLXRvcC13aWRnZXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zdGF0aXN0aWNzLXRvcC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU3RhdGlzdGljc1RvcFdpZGdldENvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgc3RhdGlzdGljczogU3RhdGlzdGljc0VudHJ5TWFwID0ge307XG4gICAgdm0kOiBPYnNlcnZhYmxlPFN0YXRpc3RpY3NUb3BXaWRnZXRTdGF0ZT47XG4gICAgbWVzc2FnZUxhYmVsS2V5OiBzdHJpbmc7XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJvdGVjdGVkIGxvYWRpbmcgPSB0cnVlO1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGZhY3Rvcnk6IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0b3JlRmFjdG9yeVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbnRleHQgfHwgIXRoaXMuY29udGV4dC5tb2R1bGUpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxhYmVsS2V5ID0gJ0xCTF9DT05GSUdfQkFEX0NPTlRFWFQnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlTGFiZWxLZXkgPSAnTEJMX0NPTkZJR19OT19DT05GSUcnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5vcHRpb25zIHx8ICF0aGlzLmNvbmZpZy5vcHRpb25zLnN0YXRpc3RpY3MgfHwgIXRoaXMuY29uZmlnLm9wdGlvbnMuc3RhdGlzdGljcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxhYmVsS2V5ID0gJ0xCTF9DT05GSUdfTk9fU1RBVElTVElDU19LRVknO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dCQpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuY29udGV4dCQuc3Vic2NyaWJlKChjb250ZXh0OiBWaWV3Q29udGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGF0aXN0aWNzJDogT2JzZXJ2YWJsZTxTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZT5bXSA9IFtdO1xuICAgICAgICBjb25zdCBsb2FkaW5ncyQ6IE9ic2VydmFibGU8Ym9vbGVhbj5bXSA9IFtdO1xuICAgICAgICB0aGlzLmNvbmZpZy5vcHRpb25zLnN0YXRpc3RpY3MuZm9yRWFjaChzdGF0aXN0aWMgPT4ge1xuXG4gICAgICAgICAgICBpZiAoIXN0YXRpc3RpYy50eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3Nbc3RhdGlzdGljLnR5cGVdID0ge1xuICAgICAgICAgICAgICAgIGxhYmVsS2V5OiBzdGF0aXN0aWMubGFiZWxLZXkgfHwgJycsXG4gICAgICAgICAgICAgICAgZW5kTGFiZWxLZXk6IHN0YXRpc3RpYy5lbmRMYWJlbEtleSB8fCAnJyxcbiAgICAgICAgICAgICAgICBoaWRlVmFsdWVJZkVtcHR5OiBzdGF0aXN0aWMuaGlkZVZhbHVlSWZFbXB0eSB8fCBmYWxzZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBzdGF0aXN0aWMudHlwZSxcbiAgICAgICAgICAgICAgICBzdG9yZTogdGhpcy5mYWN0b3J5LmNyZWF0ZSgpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3Nbc3RhdGlzdGljLnR5cGVdLnN0b3JlLmluaXQoXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0Lm1vZHVsZSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogc3RhdGlzdGljLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHsuLi50aGlzLmNvbnRleHR9XG4gICAgICAgICAgICAgICAgfSBhcyBTdGF0aXN0aWNzUXVlcnksXG4gICAgICAgICAgICApLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgICAgIHN0YXRpc3RpY3MkLnB1c2godGhpcy5zdGF0aXN0aWNzW3N0YXRpc3RpYy50eXBlXS5zdG9yZS5zdGF0ZSQpO1xuICAgICAgICAgICAgbG9hZGluZ3MkLnB1c2godGhpcy5zdGF0aXN0aWNzW3N0YXRpc3RpYy50eXBlXS5zdG9yZS5sb2FkaW5nJCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzdGF0aXN0aWNPYnMgPSBudWxsO1xuXG4gICAgICAgIGlmKHN0YXRpc3RpY3MkLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHN0YXRpc3RpY09icyA9IG9mKFtdKTtcbiAgICAgICAgfSBlbHNlIGlmKHN0YXRpc3RpY3MkLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgICAgICBzdGF0aXN0aWNPYnMgPSBzdGF0aXN0aWNzJFswXS5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiBbdmFsdWVdKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBmaXJzT2JzID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBvdGhlcnM7XG4gICAgICAgICAgICBbZmlyc09icywgLi4ub3RoZXJzXSA9IHN0YXRpc3RpY3MkO1xuICAgICAgICAgICAgc3RhdGlzdGljT2JzID0gZmlyc09icy5waXBlKFxuICAgICAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKG90aGVycylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgIHRoaXMubG9hZGluZyQgPSBsb2FkaW5ncyRbMF0ucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKC4uLmxvYWRpbmdzJCksXG4gICAgICAgICAgICBtYXAoKGxvYWRpbmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFsb2FkaW5ncyB8fCBsb2FkaW5ncy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgbG9hZGluZ3MuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgPSBsb2FkaW5nICYmIHZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gbG9hZGluZztcblxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkaW5nO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmxvYWRpbmckLnN1YnNjcmliZSgpKTtcblxuICAgICAgdGhpcy52bSQgPSBzdGF0aXN0aWNPYnMucGlwZShcbiAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLmxhbmd1YWdlLmFwcFN0cmluZ3MkKSxcbiAgICAgICAgICBtYXAoKFtzdGF0aXN0aWNzLCBhcHBTdHJpbmdzXSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdGF0c01hcDogeyBba2V5OiBzdHJpbmddOiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSB9ID0ge307XG4gICAgICAgICAgICAgIHN0YXRpc3RpY3MuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICBzdGF0c01hcFt2YWx1ZS5xdWVyeS5rZXldID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljc1t2YWx1ZS5xdWVyeS5rZXldLmxhYmVsS2V5ID0gdGhpcy5nZXRNZXRhZGF0YUVudHJ5KHZhbHVlLCAnbGFiZWxLZXknKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljc1t2YWx1ZS5xdWVyeS5rZXldLmVuZExhYmVsS2V5ID0gdGhpcy5nZXRNZXRhZGF0YUVudHJ5KHZhbHVlLCAnZW5kTGFiZWxLZXknKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpc3RpY3M6IHN0YXRzTWFwLFxuICAgICAgICAgICAgICAgICAgYXBwU3RyaW5nc1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5yZWxvYWQkKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmNvbmZpZy5yZWxvYWQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGluZyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5vcHRpb25zLnN0YXRpc3RpY3MuZm9yRWFjaChzdGF0aXN0aWMgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXRpc3RpYy50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGlzdGljc1tzdGF0aXN0aWMudHlwZV0gfHwgIXRoaXMuc3RhdGlzdGljc1tzdGF0aXN0aWMudHlwZV0uc3RvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljc1tzdGF0aXN0aWMudHlwZV0uc3RvcmUubG9hZChmYWxzZSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgc3RhdGlzdGljcyBzaG91bGQgYmUgaGlkZGVuXG4gICAgICogQHBhcmFtIHN0YXRzXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKi9cbiAgICBzaG91bGRIaWRlKHN0YXRzOiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSwgaXRlbTogU3RhdGlzdGljc0VudHJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0xvYWRlZChzdGF0cykgJiYgdGhpcy5pc1ZhbHVlRW1wdHkoc3RhdHMpICYmIGl0ZW0uaGlkZUlmRW1wdHkgPT09IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgc3RhdGlzdGljcyBoYXZlIGJlZW4gbG9hZGVkXG4gICAgICogQHBhcmFtIHN0YXRzXG4gICAgICovXG4gICAgaGFzTG9hZGVkKHN0YXRzOiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXN0YXRzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdmFsdWUgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gc3RhdHNcbiAgICAgKi9cbiAgICBpc1ZhbHVlRW1wdHkoc3RhdHM6IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5VmFsdWUgPSBzdGF0cz8uc3RhdGlzdGljPy5tZXRhZGF0YT8uZW1wdHlWYWx1ZVN0cmluZyA/PyBudWxsO1xuICAgICAgICBpZiAoZW1wdHlWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0YXRzPy5maWVsZD8udmFsdWUgPz8gbnVsbDtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbXB0eVZhbHVlID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbWV0YWRhdGEgZW50cnkgZm9yIHN0YXRpc3RpY1xuICAgICAqIEBwYXJhbSBzdGF0XG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKi9cbiAgICBnZXRNZXRhZGF0YUVudHJ5KHN0YXQ6IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0YXQuc3RhdGlzdGljLm1ldGFkYXRhICYmIHN0YXQuc3RhdGlzdGljLm1ldGFkYXRhW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGlzdGljc1tzdGF0LnF1ZXJ5LmtleV1bbmFtZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGxhYmVsIHZhbHVlXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqL1xuICAgIGdldExhYmVsKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dCB8fCB7fSBhcyBWaWV3Q29udGV4dDtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gY29udGV4dC5tb2R1bGUgfHwgJyc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2UuZ2V0RmllbGRMYWJlbChrZXksIG1vZHVsZSk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIlxuICAgICBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHdpZGdldC1iYXIgcm91bmRlZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJwLTIgd2lkZ2V0LWJhci1lbnRyeS1tZXNzYWdlXCIgKm5nSWY9XCJ0aGlzLm1lc3NhZ2VMYWJlbEtleVwiPlxuICAgICAgICB7e3ZtLmFwcFN0cmluZ3NbdGhpcy5tZXNzYWdlTGFiZWxLZXldIHx8ICcnIHwgdXBwZXJjYXNlfX1cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHN0YXRpc3RpY3MgfCBrZXl2YWx1ZVwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1iYXNlbGluZSB3aWRnZXQtYmFyLWVudHJ5IHAtMlwiPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNob3VsZEhpZGUodm0uc3RhdGlzdGljc1tpdGVtLmtleV0sIGl0ZW0udmFsdWUpXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWx1ZS5sYWJlbEtleSAmJiBnZXRMYWJlbChpdGVtLnZhbHVlLmxhYmVsS2V5KVwiIGNsYXNzPVwicHItMSB3aWRnZXQtYmFyLWVudHJ5LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNWYWx1ZUVtcHR5KHZtLnN0YXRpc3RpY3NbaXRlbS5rZXldKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tnZXRMYWJlbChpdGVtLnZhbHVlLmxhYmVsS2V5KSB8IHVwcGVyY2FzZX19OlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVmFsdWVFbXB0eSh2bS5zdGF0aXN0aWNzW2l0ZW0ua2V5XSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7Z2V0TGFiZWwoaXRlbS52YWx1ZS5sYWJlbEtleSkgfCB1cHBlcmNhc2V9fVxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0ua2V5ICYmIHZtLnN0YXRpc3RpY3NbaXRlbS5rZXldICYmICFzaG91bGRIaWRlKHZtLnN0YXRpc3RpY3NbaXRlbS5rZXldLCBpdGVtLnZhbHVlKVwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsLTEgcHItMSB3aWRnZXQtYmFyLWVudHJ5LXZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIXZtLnN0YXRpc3RpY3NbaXRlbS5rZXldLmxvYWRpbmcgJiYgdm0uc3RhdGlzdGljc1tpdGVtLmtleV0uZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhaXNWYWx1ZUVtcHR5KHZtLnN0YXRpc3RpY3NbaXRlbS5rZXldKSB8fCBpdGVtLnZhbHVlLmhpZGVWYWx1ZUlmRW1wdHkgIT09IHRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWZpZWxkIFt0eXBlXT1cInZtLnN0YXRpc3RpY3NbaXRlbS5rZXldLmZpZWxkLnR5cGVcIiBbZmllbGRdPVwidm0uc3RhdGlzdGljc1tpdGVtLmtleV0uZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cImxpc3RcIj48L3Njcm0tZmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGwtMSBwci0xIHdpZGdldC1iYXItZW50cnktbG9hZGluZ1wiICpuZ0lmPVwiKGl0ZW0udmFsdWUuc3RvcmUubG9hZGluZyQgfCBhc3luYykgYXMgbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWlubGluZS1sb2FkaW5nLXNwaW5uZXI+PC9zY3JtLWlubGluZS1sb2FkaW5nLXNwaW5uZXI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWxvYWRpbmcgJiYgKCFpdGVtLmtleSB8fCAhdm0uc3RhdGlzdGljc1tpdGVtLmtleV0pXCI+XG4gICAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNob3VsZEhpZGUodm0uc3RhdGlzdGljc1tpdGVtLmtleV0sIGl0ZW0udmFsdWUpXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWx1ZS5lbmRMYWJlbEtleSAmJiBnZXRMYWJlbChpdGVtLnZhbHVlLmVuZExhYmVsS2V5KVwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBsLTEgd2lkZ2V0LWJhci1lbnRyeS1lbmQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAge3tnZXRMYWJlbChpdGVtLnZhbHVlLmVuZExhYmVsS2V5KSB8IHVwcGVyY2FzZX19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==