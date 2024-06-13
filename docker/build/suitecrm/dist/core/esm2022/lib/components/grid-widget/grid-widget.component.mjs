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
import { map, shareReplay, take } from 'rxjs/operators';
import { SingleValueStatisticsStoreFactory } from '../../store/single-value-statistics/single-value-statistics.store.factory';
import { LanguageStore } from '../../store/language/language.store';
import { isTrue, } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../store/single-value-statistics/single-value-statistics.store.factory";
import * as i3 from "@angular/common";
import * as i4 from "../../fields/field.component";
import * as i5 from "../inline-loading-spinner/inline-loading-spinner.component";
import * as i6 from "../label/label.component";
import * as i7 from "../image/image.component";
import * as i8 from "../dynamic-label/dynamic-label.component";
import * as i9 from "@ng-bootstrap/ng-bootstrap";
function GridWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "scrm-label", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", ctx_r0.messageLabelKey);
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelement(2, "scrm-image", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("image", col_r6.icon)("klass", col_r6.iconClass);
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "scrm-field", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const statistics_r15 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", statistics_r15.field.type)("field", statistics_r15.field);
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelement(1, "scrm-inline-loading-spinner");
    i0.ɵɵelementEnd();
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_2_div_1_Template, 2, 2, "div", 10);
    i0.ɵɵtemplate(2, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_2_div_2_Template, 2, 0, "div", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const statistics_r15 = ctx.ngIf;
    const ctx_r9 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", statistics_r15.field);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", statistics_r15.loading && ctx_r9.loading);
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 15);
    i0.ɵɵelement(2, "scrm-label", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", col_r6.labelKey)("module", ctx_r10.getContextModule());
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 17)(2, "label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r2 = i0.ɵɵnextContext(4).ngIf;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(vm_r2.description);
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "scrm-dynamic-label", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r6 = i0.ɵɵnextContext(3).$implicit;
    const vm_r2 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r21 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("context", ctx_r21.getMessageContext())("fields", ctx_r21.getMessageFields(vm_r2.statistics))("labelKey", col_r6.dynamicLabel);
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelement(1, "scrm-inline-loading-spinner");
    i0.ɵɵelementEnd();
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_5_div_1_Template, 2, 3, "div", 18);
    i0.ɵɵtemplate(2, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_5_div_2_Template, 2, 0, "div", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r12.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.loading);
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2, " - ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r13 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("widget-entry-value ", ctx_r13.getSizeClass(col_r6.size), "");
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 7);
    i0.ɵɵtemplate(2, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 7);
    i0.ɵɵtemplate(3, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_3_Template, 3, 2, "ng-container", 7);
    i0.ɵɵtemplate(4, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_4_Template, 4, 1, "ng-container", 7);
    i0.ɵɵtemplate(5, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_5_Template, 3, 2, "ng-container", 7);
    i0.ɵɵtemplate(6, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_6_Template, 3, 3, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r6 = i0.ɵɵnextContext().$implicit;
    const vm_r2 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r6.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r6.statistic && vm_r2.statistics[col_r6.statistic]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r6.labelKey);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r6.descriptionKey);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r6.dynamicLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r6.statistic && !ctx_r7.loading && (!vm_r2.statistics[col_r6.statistic].field || vm_r2.statistics[col_r6.statistic].field && ctx_r7.isEmptyFieldValue(vm_r2.statistics[col_r6.statistic].field.value)));
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_Template, 7, 6, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r6 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate2("", ctx_r5.getColClass(), " ", ctx_r5.getClass(col_r6), "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r6.display !== "hidden");
} }
function GridWidgetComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, GridWidgetComponent_div_1_ng_container_1_div_2_Template, 2, 5, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate4("d-flex ", ctx_r3.getJustify(item_r4.justify), " ", ctx_r3.getAlign(item_r4.align), " ", ctx_r3.getRowClass(), " ", ctx_r3.getLayoutRowClass(item_r4), "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", item_r4.cols);
} }
function GridWidgetComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, GridWidgetComponent_div_1_ng_container_1_Template, 3, 7, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r2 = ctx.ngIf;
    i0.ɵɵpropertyInterpolate("ngbTooltip", vm_r2.tooltipTitleText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", vm_r2.layout);
} }
class GridWidgetComponent {
    constructor(language, factory) {
        this.language = language;
        this.factory = factory;
        this.loading = true;
        this.subs = [];
        this.statistics = {};
    }
    ngOnInit() {
        const isValid = this.validateConfig();
        if (!isValid) {
            return;
        }
        this.gridWidgetInput = this.config;
        this.buildStatistics();
        this.setupLoading$();
        this.setupVM();
        this.setupReload();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    validateConfig() {
        if (!this.config || !this.config.layout) {
            this.messageLabelKey = 'LBL_CONFIG_NO_CONFIG';
            return false;
        }
        if (!this.config.queryArgs.context || !this.config.queryArgs.module) {
            this.messageLabelKey = 'LBL_CONFIG_BAD_CONTEXT';
            return false;
        }
        if (!this.config.widgetConfig) {
            this.messageLabelKey = 'LBL_CONFIG_NO_CONFIG';
            return false;
        }
        if (!this.config.layout || !this.config.layout.rows) {
            this.messageLabelKey = 'LBL_CONFIG_NO_STATISTICS_KEY';
            return false;
        }
        return true;
    }
    getRowClass() {
        return this.gridWidgetInput.rowClass;
    }
    getColClass() {
        return this.gridWidgetInput.columnClass;
    }
    getContextModule() {
        return this.gridWidgetInput.queryArgs.context.module;
    }
    getMessageContext() {
        const module = this.getContextModule();
        if (!module) {
            return {};
        }
        return {
            module
        };
    }
    getMessageFields(statistics) {
        if (!statistics || !Object.keys(statistics).length) {
            return {};
        }
        const fields = {};
        Object.keys(statistics).forEach(key => {
            const statistic = statistics[key];
            fields[key] = statistic.field;
        });
        return fields;
    }
    getSizeClass(size) {
        const sizeMap = {
            regular: 'text-regular',
            medium: 'text-medium',
            large: 'text-large',
            'x-large': 'text-x-large',
            'xx-large': 'text-xx-large',
            huge: 'text-huge'
        };
        return sizeMap[size] || 'text-regular';
    }
    getFontWeight(bold) {
        let fontWeight = 'font-weight-normal';
        if (bold && isTrue(bold)) {
            fontWeight = 'font-weight-bolder';
        }
        return fontWeight;
    }
    getColor(color) {
        const sizeMap = {
            yellow: 'text-yellow',
            blue: 'text-blue',
            green: 'text-green',
            red: 'text-red',
            purple: 'text-purple',
            dark: 'text-dark',
            grey: 'text-grey'
        };
        return sizeMap[color] || '';
    }
    getJustify(justify) {
        const justifyMap = {
            start: 'justify-content-start',
            end: 'justify-content-end',
            center: 'justify-content-center',
            between: 'justify-content-between',
            around: 'justify-content-around'
        };
        return justifyMap[justify] || 'justify-content-center';
    }
    getAlign(align) {
        const alignMap = {
            start: 'align-items-start',
            end: 'align-items-end',
            center: 'align-items-center',
            baseline: 'align-items-baseline',
            stretch: 'align-items-stretch'
        };
        return alignMap[align] || 'align-items-center';
    }
    getLayoutRowClass(row) {
        let className = '';
        if (row && row.class) {
            className = row.class;
        }
        return className;
    }
    getClass(layoutCol) {
        let className = '';
        if (layoutCol) {
            className = layoutCol.class;
        }
        className = className + ' '
            + this.getSizeClass(layoutCol.size) + ' '
            + this.getFontWeight(layoutCol.bold) + ' '
            + this.getColor(layoutCol.color);
        return className;
    }
    isEmptyFieldValue(fieldValue) {
        // Handle the cases, when input value is an string, array, objects or any other type
        if (typeof fieldValue === 'string') {
            fieldValue = fieldValue.trim();
        }
        return fieldValue == null
            || typeof fieldValue === 'undefined'
            || fieldValue === ''
            || fieldValue.length === 0;
    }
    getLabel(statisticMetadata, attribute) {
        let label = '';
        if (statisticMetadata && statisticMetadata[attribute]) {
            label = this.language.getFieldLabel(statisticMetadata[attribute]);
        }
        return label;
    }
    getLayout() {
        return this.gridWidgetInput.layout.rows;
    }
    buildStatistics() {
        this.gridWidgetInput.layout.rows.forEach(row => {
            if (!row.cols || !row.cols.length) {
                return;
            }
            row.cols.forEach(col => {
                if (!col.statistic) {
                    return;
                }
                if (col.store) {
                    this.statistics[col.statistic] = {
                        type: col.statistic,
                        store: col.store
                    };
                    return;
                }
                this.statistics[col.statistic] = {
                    type: col.statistic,
                    store: this.factory.create()
                };
                this.statistics[col.statistic].store.init(this.gridWidgetInput.queryArgs.module, {
                    key: col.statistic,
                    context: { ...this.gridWidgetInput.queryArgs.context },
                    params: { ...this.gridWidgetInput.queryArgs.params }
                }).pipe(take(1)).subscribe();
            });
        });
    }
    setupLoading$() {
        const loadings$ = [];
        Object.keys(this.statistics).forEach(type => loadings$.push(this.statistics[type].store.loading$));
        let statisticObs = of([]);
        if (loadings$.length < 1) {
            statisticObs = of([]);
        }
        else if (loadings$.length === 1) {
            statisticObs = loadings$[0].pipe(map(value => [value]));
        }
        else {
            let firsObs = null;
            let others;
            [firsObs, ...others] = loadings$;
            statisticObs = firsObs.pipe(combineLatestWith(others));
        }
        this.loading$ = statisticObs.pipe(map((loadings) => {
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
    }
    setupReload() {
        if (this.gridWidgetInput.widgetConfig.reload$) {
            this.subs.push(this.gridWidgetInput.widgetConfig.reload$.subscribe(() => {
                if (this.loading === false) {
                    this.loading = true;
                    Object.keys(this.statistics).forEach(statisticKey => {
                        const statistic = this.statistics[statisticKey];
                        if (!statistic.store) {
                            return;
                        }
                        statistic.store.load(false).pipe(take(1)).subscribe();
                    });
                }
            }));
        }
    }
    setupVM() {
        let allStatistics$ = of([]).pipe(shareReplay());
        const layout$ = of(this.getLayout()).pipe(shareReplay());
        if (this.statistics && Object.keys(this.statistics).length > 0) {
            const statistics$ = [];
            Object.keys(this.statistics).forEach(type => statistics$.push(this.statistics[type].store.state$));
            if (statistics$.length < 1) {
                allStatistics$ = of([]);
            }
            else if (statistics$.length === 1) {
                allStatistics$ = statistics$[0].pipe(map(value => [value]));
            }
            else {
                let firsObs = null;
                let others;
                [firsObs, ...others] = statistics$;
                allStatistics$ = firsObs.pipe(combineLatestWith(others));
            }
        }
        this.vm$ = allStatistics$.pipe(combineLatestWith(layout$), map(([statistics, layout]) => {
            const statsMap = {};
            const tooltipTitles = [];
            const descriptions = [];
            statistics.forEach(value => {
                statsMap[value.query.key] = value;
                const tooltip = this.getLabel(value.statistic.metadata, 'tooltip_title_key');
                if (tooltip) {
                    tooltipTitles.push(tooltip);
                }
                const description = this.getLabel(value.statistic.metadata, 'descriptionKey');
                if (description) {
                    descriptions.push(description);
                }
            });
            return {
                layout,
                statistics: statsMap,
                tooltipTitleText: tooltipTitles.join(' | '),
                description: descriptions.join(' | '),
            };
        }));
    }
    static { this.ɵfac = function GridWidgetComponent_Factory(t) { return new (t || GridWidgetComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.SingleValueStatisticsStoreFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GridWidgetComponent, selectors: [["scrm-grid-widget"]], inputs: { config: "config" }, decls: 3, vars: 4, consts: [["class", "p-3 widget-message", 4, "ngIf"], ["class", "grid-widget d-flex flex-column", "placement", "auto", "container", "body", 3, "ngbTooltip", 4, "ngIf"], [1, "p-3", "widget-message"], [3, "labelKey"], ["placement", "auto", "container", "body", 1, "grid-widget", "d-flex", "flex-column", 3, "ngbTooltip"], [4, "ngFor", "ngForOf"], [3, "class", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "widget-entry-icon"], [3, "image", "klass"], ["class", "widget-entry-value", 4, "ngIf"], ["class", "widget-entry-loading", 4, "ngIf"], [1, "widget-entry-value"], ["mode", "list", 3, "type", "field"], [1, "widget-entry-loading"], [1, "widget-entry-label", "text-truncate"], [3, "labelKey", "module"], [1, "text-truncate", "widget-entry-label"], ["class", "widget-entry-dynamic-label", 4, "ngIf"], [1, "widget-entry-dynamic-label"], [3, "context", "fields", "labelKey"]], template: function GridWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, GridWidgetComponent_div_0_Template, 2, 1, "div", 0);
            i0.ɵɵtemplate(1, GridWidgetComponent_div_1_Template, 2, 2, "div", 1);
            i0.ɵɵpipe(2, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.messageLabelKey);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.messageLabelKey && i0.ɵɵpipeBind1(2, 2, ctx.vm$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.FieldComponent, i5.InlineLoadingSpinnerComponent, i6.LabelComponent, i7.ImageComponent, i8.DynamicLabelComponent, i9.NgbTooltip, i3.AsyncPipe], encapsulation: 2 }); }
}
export { GridWidgetComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridWidgetComponent, [{
        type: Component,
        args: [{ selector: 'scrm-grid-widget', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div *ngIf=\"this.messageLabelKey\" class=\"p-3 widget-message\">\n    <scrm-label [labelKey]=\"this.messageLabelKey\"></scrm-label>\n</div>\n\n<div *ngIf=\"!this.messageLabelKey && (vm$| async) as vm\"\n     class=\"grid-widget d-flex flex-column\"\n     ngbTooltip=\"{{vm.tooltipTitleText}}\" placement=\"auto\" container=\"body\">\n\n    <ng-container *ngFor=\"let item of vm.layout\">\n\n        <div\n            class=\"d-flex {{getJustify(item.justify)}} {{getAlign(item.align)}} {{getRowClass()}} {{getLayoutRowClass(item)}}\">\n\n            <div class=\"{{getColClass()}} {{getClass(col)}}\" *ngFor=\"let col of item.cols\">\n\n                <ng-container *ngIf=\"col.display !== 'hidden'\">\n\n                    <!-- ICON -->\n                    <ng-container *ngIf=\"col.icon\">\n                        <div class=\"widget-entry-icon\">\n                            <scrm-image [image]=\"col.icon\" [klass]=\"col.iconClass\"></scrm-image>\n                        </div>\n                    </ng-container>\n\n                    <!-- VALUE -->\n                    <ng-container *ngIf=\"col.statistic && (vm.statistics[col.statistic]) as statistics\">\n\n                        <div *ngIf=\"statistics.field\" class=\"widget-entry-value\">\n\n                            <scrm-field [type]=\"statistics.field.type\"\n                                        [field]=\"statistics.field\"\n                                        mode=\"list\">\n                            </scrm-field>\n\n                        </div>\n                        <div *ngIf=\"statistics.loading && loading\" class=\"widget-entry-loading\">\n\n                            <scrm-inline-loading-spinner></scrm-inline-loading-spinner>\n\n                        </div>\n                    </ng-container>\n\n                    <!-- LABEL -->\n                    <ng-container *ngIf=\"col.labelKey\">\n\n                        <div class=\"widget-entry-label text-truncate\">\n\n                            <scrm-label [labelKey]=\"col.labelKey\" [module]=\"getContextModule()\"></scrm-label>\n\n                        </div>\n\n                    </ng-container>\n\n                    <!-- DESCRIPTION TEXT -->\n                    <ng-container *ngIf=\"col.descriptionKey\">\n\n                        <div class=\"text-truncate widget-entry-label\">\n\n                            <label>{{vm.description}}</label>\n\n                        </div>\n\n                    </ng-container>\n\n                    <!-- DYNAMIC LABEL -->\n                    <ng-container *ngIf=\"col.dynamicLabel\">\n\n                        <div *ngIf=\"!loading\" class=\"widget-entry-dynamic-label\">\n\n                            <scrm-dynamic-label [context]=\"getMessageContext()\"\n                                                [fields]=\"getMessageFields(vm.statistics)\"\n                                                [labelKey]=\"col.dynamicLabel\">\n                            </scrm-dynamic-label>\n\n                        </div>\n\n                        <div *ngIf=\"loading\" class=\"widget-entry-loading\">\n                            <scrm-inline-loading-spinner></scrm-inline-loading-spinner>\n                        </div>\n\n                    </ng-container>\n\n                    <!-- MISCONFIGURATION -->\n                    <ng-container\n                        *ngIf=\"col.statistic && !loading && (!vm.statistics[col.statistic].field || (vm.statistics[col.statistic].field && isEmptyFieldValue(vm.statistics[col.statistic].field.value)))\">\n                        <div class=\"widget-entry-value {{getSizeClass(col.size)}}\">\n                            -\n                        </div>\n                    </ng-container>\n\n                </ng-container>\n\n            </div>\n\n        </div>\n    </ng-container>\n</div>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.SingleValueStatisticsStoreFactory }]; }, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZ3JpZC13aWRnZXQvZ3JpZC13aWRnZXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZ3JpZC13aWRnZXQvZ3JpZC13aWRnZXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUVsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQWMsRUFBRSxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLDJFQUEyRSxDQUFDO0FBQzVILE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRSxPQUFPLEVBSUgsTUFBTSxHQWFULE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7SUN0QmhCLDhCQUE2RDtJQUN6RCxnQ0FBMkQ7SUFDL0QsaUJBQU07OztJQURVLGVBQWlDO0lBQWpDLGlEQUFpQzs7O0lBaUI3Qiw2QkFBK0I7SUFDM0IsOEJBQStCO0lBQzNCLGdDQUFvRTtJQUN4RSxpQkFBTTtJQUNWLDBCQUFlOzs7SUFGSyxlQUFrQjtJQUFsQixtQ0FBa0IsMkJBQUE7OztJQU9sQywrQkFBeUQ7SUFFckQsaUNBR2E7SUFFakIsaUJBQU07OztJQUxVLGVBQThCO0lBQTlCLGdEQUE4QiwrQkFBQTs7O0lBTTlDLCtCQUF3RTtJQUVwRSw4Q0FBMkQ7SUFFL0QsaUJBQU07OztJQWRW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b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHNoYXJlUmVwbGF5LCB0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1NpbmdsZVZhbHVlU3RhdGlzdGljc1N0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vc3RvcmUvc2luZ2xlLXZhbHVlLXN0YXRpc3RpY3Mvc2luZ2xlLXZhbHVlLXN0YXRpc3RpY3Muc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7XG4gICAgQ29udGVudEFsaWduLFxuICAgIENvbnRlbnRKdXN0aWZ5LFxuICAgIEZpZWxkTWFwLFxuICAgIGlzVHJ1ZSxcbiAgICBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSxcbiAgICBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZUludGVyZmFjZSxcbiAgICBTdGF0aXN0aWNNZXRhZGF0YSxcbiAgICBTdGF0aXN0aWNzUXVlcnksXG4gICAgU3RhdGlzdGljV2lkZ2V0TGF5b3V0Q29sLFxuICAgIFN0YXRpc3RpY1dpZGdldExheW91dFJvdyxcbiAgICBTdGF0aXN0aWNXaWRnZXRPcHRpb25zLFxuICAgIFN0cmluZ01hcCxcbiAgICBUZXh0Q29sb3IsXG4gICAgVGV4dFNpemVzLFxuICAgIFZpZXdDb250ZXh0LFxuICAgIFdpZGdldE1ldGFkYXRhLFxufSBmcm9tICdjb21tb24nO1xuXG5pbnRlcmZhY2UgU3RhdGlzdGljc0VudHJ5IHtcbiAgICBsYWJlbEtleT86IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgc3RvcmU6IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0b3JlSW50ZXJmYWNlO1xufVxuXG5pbnRlcmZhY2UgU3RhdGlzdGljc0VudHJ5TWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBTdGF0aXN0aWNzRW50cnk7XG59XG5cbmludGVyZmFjZSBTdGF0aXN0aWNzTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZTtcbn1cblxuaW50ZXJmYWNlIEdyaWRXaWRnZXRTdGF0ZSB7XG4gICAgbGF5b3V0OiBTdGF0aXN0aWNXaWRnZXRMYXlvdXRSb3dbXTtcbiAgICBzdGF0aXN0aWNzOiBTdGF0aXN0aWNzTWFwO1xuICAgIHRvb2x0aXBUaXRsZVRleHQ/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JpZFdpZGdldENvbmZpZyB7XG4gICAgcm93Q2xhc3M/OiBzdHJpbmc7XG4gICAgY29sdW1uQ2xhc3M/OiBzdHJpbmc7XG4gICAgbGF5b3V0OiBTdGF0aXN0aWNXaWRnZXRPcHRpb25zO1xuICAgIHdpZGdldENvbmZpZz86IFdpZGdldE1ldGFkYXRhO1xuICAgIHF1ZXJ5QXJncz86IFN0YXRpc3RpY3NRdWVyeUFyZ3M7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGlzdGljc1F1ZXJ5QXJncyB7XG4gICAgbW9kdWxlOiBzdHJpbmc7XG4gICAgY29udGV4dDogVmlld0NvbnRleHQ7XG4gICAgcGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tZ3JpZC13aWRnZXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ncmlkLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXVxufSlcblxuZXhwb3J0IGNsYXNzIEdyaWRXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgY29uZmlnOiBHcmlkV2lkZ2V0Q29uZmlnO1xuICAgIHZtJDogT2JzZXJ2YWJsZTxHcmlkV2lkZ2V0U3RhdGU+O1xuICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgIG1lc3NhZ2VMYWJlbEtleTogc3RyaW5nO1xuICAgIHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBwcml2YXRlIHN0YXRpc3RpY3M6IFN0YXRpc3RpY3NFbnRyeU1hcCA9IHt9O1xuICAgIHByaXZhdGUgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJpdmF0ZSBncmlkV2lkZ2V0SW5wdXQ6IEdyaWRXaWRnZXRDb25maWc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgZmFjdG9yeTogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmVGYWN0b3J5XG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IHRoaXMudmFsaWRhdGVDb25maWcoKTtcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmlkV2lkZ2V0SW5wdXQgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgdGhpcy5idWlsZFN0YXRpc3RpY3MoKTtcbiAgICAgICAgdGhpcy5zZXR1cExvYWRpbmckKCk7XG4gICAgICAgIHRoaXMuc2V0dXBWTSgpO1xuICAgICAgICB0aGlzLnNldHVwUmVsb2FkKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHZhbGlkYXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcgfHwgIXRoaXMuY29uZmlnLmxheW91dCkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlTGFiZWxLZXkgPSAnTEJMX0NPTkZJR19OT19DT05GSUcnO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5xdWVyeUFyZ3MuY29udGV4dCB8fCAhdGhpcy5jb25maWcucXVlcnlBcmdzLm1vZHVsZSkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlTGFiZWxLZXkgPSAnTEJMX0NPTkZJR19CQURfQ09OVEVYVCc7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLndpZGdldENvbmZpZykge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlTGFiZWxLZXkgPSAnTEJMX0NPTkZJR19OT19DT05GSUcnO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5sYXlvdXQgfHwgIXRoaXMuY29uZmlnLmxheW91dC5yb3dzKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VMYWJlbEtleSA9ICdMQkxfQ09ORklHX05PX1NUQVRJU1RJQ1NfS0VZJztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSb3dDbGFzcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkV2lkZ2V0SW5wdXQucm93Q2xhc3M7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbENsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRXaWRnZXRJbnB1dC5jb2x1bW5DbGFzcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29udGV4dE1vZHVsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkV2lkZ2V0SW5wdXQucXVlcnlBcmdzLmNvbnRleHQubW9kdWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRNZXNzYWdlQ29udGV4dCgpOiBTdHJpbmdNYXAge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmdldENvbnRleHRNb2R1bGUoKTtcblxuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZHVsZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRNZXNzYWdlRmllbGRzKHN0YXRpc3RpY3M6IFN0YXRpc3RpY3NNYXApOiBGaWVsZE1hcCB7XG5cbiAgICAgICAgaWYgKCFzdGF0aXN0aWNzIHx8ICFPYmplY3Qua2V5cyhzdGF0aXN0aWNzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IHt9O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHN0YXRpc3RpY3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpc3RpYyA9IHN0YXRpc3RpY3Nba2V5XTtcbiAgICAgICAgICAgIGZpZWxkc1trZXldID0gc3RhdGlzdGljLmZpZWxkO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmllbGRzO1xuICAgIH1cblxuICAgIGdldFNpemVDbGFzcyhzaXplOiBUZXh0U2l6ZXMpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgICAgICAgcmVndWxhcjogJ3RleHQtcmVndWxhcicsXG4gICAgICAgICAgICBtZWRpdW06ICd0ZXh0LW1lZGl1bScsXG4gICAgICAgICAgICBsYXJnZTogJ3RleHQtbGFyZ2UnLFxuICAgICAgICAgICAgJ3gtbGFyZ2UnOiAndGV4dC14LWxhcmdlJyxcbiAgICAgICAgICAgICd4eC1sYXJnZSc6ICd0ZXh0LXh4LWxhcmdlJyxcbiAgICAgICAgICAgIGh1Z2U6ICd0ZXh0LWh1Z2UnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHNpemVNYXBbc2l6ZV0gfHwgJ3RleHQtcmVndWxhcic7XG4gICAgfVxuXG4gICAgZ2V0Rm9udFdlaWdodChib2xkOiBzdHJpbmcgfCBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGZvbnRXZWlnaHQgPSAnZm9udC13ZWlnaHQtbm9ybWFsJztcblxuICAgICAgICBpZiAoYm9sZCAmJiBpc1RydWUoYm9sZCkpIHtcbiAgICAgICAgICAgIGZvbnRXZWlnaHQgPSAnZm9udC13ZWlnaHQtYm9sZGVyJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb250V2VpZ2h0O1xuICAgIH1cblxuICAgIGdldENvbG9yKGNvbG9yOiBUZXh0Q29sb3IpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBzaXplTWFwID0ge1xuICAgICAgICAgICAgeWVsbG93OiAndGV4dC15ZWxsb3cnLFxuICAgICAgICAgICAgYmx1ZTogJ3RleHQtYmx1ZScsXG4gICAgICAgICAgICBncmVlbjogJ3RleHQtZ3JlZW4nLFxuICAgICAgICAgICAgcmVkOiAndGV4dC1yZWQnLFxuICAgICAgICAgICAgcHVycGxlOiAndGV4dC1wdXJwbGUnLFxuICAgICAgICAgICAgZGFyazogJ3RleHQtZGFyaycsXG4gICAgICAgICAgICBncmV5OiAndGV4dC1ncmV5J1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBzaXplTWFwW2NvbG9yXSB8fCAnJztcbiAgICB9XG5cbiAgICBnZXRKdXN0aWZ5KGp1c3RpZnk6IENvbnRlbnRKdXN0aWZ5KTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QganVzdGlmeU1hcCA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiAnanVzdGlmeS1jb250ZW50LXN0YXJ0JyxcbiAgICAgICAgICAgIGVuZDogJ2p1c3RpZnktY29udGVudC1lbmQnLFxuICAgICAgICAgICAgY2VudGVyOiAnanVzdGlmeS1jb250ZW50LWNlbnRlcicsXG4gICAgICAgICAgICBiZXR3ZWVuOiAnanVzdGlmeS1jb250ZW50LWJldHdlZW4nLFxuICAgICAgICAgICAgYXJvdW5kOiAnanVzdGlmeS1jb250ZW50LWFyb3VuZCdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ganVzdGlmeU1hcFtqdXN0aWZ5XSB8fCAnanVzdGlmeS1jb250ZW50LWNlbnRlcic7XG4gICAgfVxuXG4gICAgZ2V0QWxpZ24oYWxpZ246IENvbnRlbnRBbGlnbik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGFsaWduTWFwID0ge1xuICAgICAgICAgICAgc3RhcnQ6ICdhbGlnbi1pdGVtcy1zdGFydCcsXG4gICAgICAgICAgICBlbmQ6ICdhbGlnbi1pdGVtcy1lbmQnLFxuICAgICAgICAgICAgY2VudGVyOiAnYWxpZ24taXRlbXMtY2VudGVyJyxcbiAgICAgICAgICAgIGJhc2VsaW5lOiAnYWxpZ24taXRlbXMtYmFzZWxpbmUnLFxuICAgICAgICAgICAgc3RyZXRjaDogJ2FsaWduLWl0ZW1zLXN0cmV0Y2gnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGFsaWduTWFwW2FsaWduXSB8fCAnYWxpZ24taXRlbXMtY2VudGVyJztcbiAgICB9XG5cbiAgICBnZXRMYXlvdXRSb3dDbGFzcyhyb3c6IFN0YXRpc3RpY1dpZGdldExheW91dFJvdyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSAnJztcbiAgICAgICAgaWYgKHJvdyAmJiByb3cuY2xhc3MpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHJvdy5jbGFzcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH1cblxuICAgIGdldENsYXNzKGxheW91dENvbDogU3RhdGlzdGljV2lkZ2V0TGF5b3V0Q29sKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICAgICAgICBpZiAobGF5b3V0Q29sKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBsYXlvdXRDb2wuY2xhc3M7XG4gICAgICAgIH1cblxuICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyAnICdcbiAgICAgICAgICAgICsgdGhpcy5nZXRTaXplQ2xhc3MobGF5b3V0Q29sLnNpemUpICsgJyAnXG4gICAgICAgICAgICArIHRoaXMuZ2V0Rm9udFdlaWdodChsYXlvdXRDb2wuYm9sZCkgKyAnICdcbiAgICAgICAgICAgICsgdGhpcy5nZXRDb2xvcihsYXlvdXRDb2wuY29sb3IpO1xuXG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfVxuXG4gICAgaXNFbXB0eUZpZWxkVmFsdWUoZmllbGRWYWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZXMsIHdoZW4gaW5wdXQgdmFsdWUgaXMgYW4gc3RyaW5nLCBhcnJheSwgb2JqZWN0cyBvciBhbnkgb3RoZXIgdHlwZVxuICAgICAgICBpZiAodHlwZW9mIGZpZWxkVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBmaWVsZFZhbHVlID0gZmllbGRWYWx1ZS50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmllbGRWYWx1ZSA9PSBudWxsXG4gICAgICAgICAgICB8fCB0eXBlb2YgZmllbGRWYWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgIHx8IGZpZWxkVmFsdWUgPT09ICcnXG4gICAgICAgICAgICB8fCBmaWVsZFZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cbiAgICBnZXRMYWJlbChzdGF0aXN0aWNNZXRhZGF0YTogU3RhdGlzdGljTWV0YWRhdGEsIGF0dHJpYnV0ZTogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgICBsZXQgbGFiZWwgPSAnJztcbiAgICAgICAgaWYgKHN0YXRpc3RpY01ldGFkYXRhICYmIHN0YXRpc3RpY01ldGFkYXRhW2F0dHJpYnV0ZV0pIHtcbiAgICAgICAgICAgIGxhYmVsID0gdGhpcy5sYW5ndWFnZS5nZXRGaWVsZExhYmVsKHN0YXRpc3RpY01ldGFkYXRhW2F0dHJpYnV0ZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cblxuICAgIGdldExheW91dCgpOiBTdGF0aXN0aWNXaWRnZXRMYXlvdXRSb3dbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRXaWRnZXRJbnB1dC5sYXlvdXQucm93cztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRTdGF0aXN0aWNzKCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuZ3JpZFdpZGdldElucHV0LmxheW91dC5yb3dzLmZvckVhY2gocm93ID0+IHtcblxuICAgICAgICAgICAgaWYgKCFyb3cuY29scyB8fCAhcm93LmNvbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3cuY29scy5mb3JFYWNoKGNvbCA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbC5zdGF0aXN0aWMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb2wuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0aXN0aWNzW2NvbC5zdGF0aXN0aWNdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogY29sLnN0YXRpc3RpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlOiBjb2wuc3RvcmVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljc1tjb2wuc3RhdGlzdGljXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogY29sLnN0YXRpc3RpYyxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmU6IHRoaXMuZmFjdG9yeS5jcmVhdGUoKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3NbY29sLnN0YXRpc3RpY10uc3RvcmUuaW5pdChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkV2lkZ2V0SW5wdXQucXVlcnlBcmdzLm1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBjb2wuc3RhdGlzdGljLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogey4uLnRoaXMuZ3JpZFdpZGdldElucHV0LnF1ZXJ5QXJncy5jb250ZXh0fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogey4uLnRoaXMuZ3JpZFdpZGdldElucHV0LnF1ZXJ5QXJncy5wYXJhbXN9XG4gICAgICAgICAgICAgICAgICAgIH0gYXMgU3RhdGlzdGljc1F1ZXJ5LFxuICAgICAgICAgICAgICAgICkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXR1cExvYWRpbmckKCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGxvYWRpbmdzJDogT2JzZXJ2YWJsZTxib29sZWFuPltdID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGlzdGljcykuZm9yRWFjaCh0eXBlID0+IGxvYWRpbmdzJC5wdXNoKHRoaXMuc3RhdGlzdGljc1t0eXBlXS5zdG9yZS5sb2FkaW5nJCkpO1xuXG4gICAgICAgIGxldCBzdGF0aXN0aWNPYnM6IE9ic2VydmFibGU8Ym9vbGVhbltdPiA9IG9mKFtdKTtcblxuICAgICAgICBpZihsb2FkaW5ncyQubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgc3RhdGlzdGljT2JzID0gb2YoW10pO1xuICAgICAgICB9IGVsc2UgaWYobG9hZGluZ3MkLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgICAgICBzdGF0aXN0aWNPYnMgPSBsb2FkaW5ncyRbMF0ucGlwZShcbiAgICAgICAgICAgICAgICBtYXAodmFsdWUgPT4gW3ZhbHVlXSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZmlyc09icyA9IG51bGw7XG4gICAgICAgICAgICBsZXQgb3RoZXJzO1xuICAgICAgICAgICAgW2ZpcnNPYnMsIC4uLm90aGVyc10gPSBsb2FkaW5ncyQ7XG4gICAgICAgICAgICBzdGF0aXN0aWNPYnMgPSBmaXJzT2JzLnBpcGUoXG4gICAgICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgob3RoZXJzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZGluZyQgPSBzdGF0aXN0aWNPYnMucGlwZShcbiAgICAgICAgICAgIG1hcCgobG9hZGluZ3MpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICghbG9hZGluZ3MgfHwgbG9hZGluZ3MubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBsb2FkaW5ncy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA9IGxvYWRpbmcgJiYgdmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gbG9hZGluZztcblxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkaW5nO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmxvYWRpbmckLnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0dXBSZWxvYWQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuZ3JpZFdpZGdldElucHV0LndpZGdldENvbmZpZy5yZWxvYWQkKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmdyaWRXaWRnZXRJbnB1dC53aWRnZXRDb25maWcucmVsb2FkJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRpbmcgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0aXN0aWNzKS5mb3JFYWNoKHN0YXRpc3RpY0tleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0aXN0aWMgPSB0aGlzLnN0YXRpc3RpY3Nbc3RhdGlzdGljS2V5XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGF0aXN0aWMuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpc3RpYy5zdG9yZS5sb2FkKGZhbHNlKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0dXBWTSgpOiB2b2lkIHtcblxuICAgICAgICBsZXQgYWxsU3RhdGlzdGljcyQ6IE9ic2VydmFibGU8U2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGVbXT4gPSBvZihbXSkucGlwZShzaGFyZVJlcGxheSgpKTtcbiAgICAgICAgY29uc3QgbGF5b3V0JCA9IG9mKHRoaXMuZ2V0TGF5b3V0KCkpLnBpcGUoc2hhcmVSZXBsYXkoKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGlzdGljcyAmJiBPYmplY3Qua2V5cyh0aGlzLnN0YXRpc3RpY3MpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpc3RpY3MkOiBPYnNlcnZhYmxlPFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlPltdID0gW107XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRpc3RpY3MpLmZvckVhY2godHlwZSA9PiBzdGF0aXN0aWNzJC5wdXNoKHRoaXMuc3RhdGlzdGljc1t0eXBlXS5zdG9yZS5zdGF0ZSQpKTtcblxuICAgICAgICAgICAgaWYoc3RhdGlzdGljcyQubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIGFsbFN0YXRpc3RpY3MkID0gb2YoW10pO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHN0YXRpc3RpY3MkLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgICAgICAgICAgYWxsU3RhdGlzdGljcyQgPSBzdGF0aXN0aWNzJFswXS5waXBlKFxuICAgICAgICAgICAgICAgICAgICBtYXAodmFsdWUgPT4gW3ZhbHVlXSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlyc09icyA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IG90aGVycztcbiAgICAgICAgICAgICAgICBbZmlyc09icywgLi4ub3RoZXJzXSA9IHN0YXRpc3RpY3MkO1xuICAgICAgICAgICAgICAgIGFsbFN0YXRpc3RpY3MkID0gZmlyc09icy5waXBlKFxuICAgICAgICAgICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChvdGhlcnMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudm0kID0gYWxsU3RhdGlzdGljcyQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKGxheW91dCQpLFxuICAgICAgICAgICAgbWFwKChbc3RhdGlzdGljcywgbGF5b3V0XTogW1NpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlW10sIFN0YXRpc3RpY1dpZGdldExheW91dFJvd1tdXSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHNNYXA6IHsgW2tleTogc3RyaW5nXTogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGUgfSA9IHt9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb2x0aXBUaXRsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbnMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHN0YXRpc3RpY3MuZm9yRWFjaCh2YWx1ZSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdHNNYXBbdmFsdWUucXVlcnkua2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLmdldExhYmVsKHZhbHVlLnN0YXRpc3RpYy5tZXRhZGF0YSwgJ3Rvb2x0aXBfdGl0bGVfa2V5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGl0bGVzLnB1c2godG9vbHRpcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMuZ2V0TGFiZWwodmFsdWUuc3RhdGlzdGljLm1ldGFkYXRhLCAnZGVzY3JpcHRpb25LZXknKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbnMucHVzaChkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpc3RpY3M6IHN0YXRzTWFwLFxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwVGl0bGVUZXh0OiB0b29sdGlwVGl0bGVzLmpvaW4oJyB8ICcpLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25zLmpvaW4oJyB8ICcpLFxuICAgICAgICAgICAgICAgIH0gYXMgR3JpZFdpZGdldFN0YXRlO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiAqbmdJZj1cInRoaXMubWVzc2FnZUxhYmVsS2V5XCIgY2xhc3M9XCJwLTMgd2lkZ2V0LW1lc3NhZ2VcIj5cbiAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwidGhpcy5tZXNzYWdlTGFiZWxLZXlcIj48L3Njcm0tbGFiZWw+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cIiF0aGlzLm1lc3NhZ2VMYWJlbEtleSAmJiAodm0kfCBhc3luYykgYXMgdm1cIlxuICAgICBjbGFzcz1cImdyaWQtd2lkZ2V0IGQtZmxleCBmbGV4LWNvbHVtblwiXG4gICAgIG5nYlRvb2x0aXA9XCJ7e3ZtLnRvb2x0aXBUaXRsZVRleHR9fVwiIHBsYWNlbWVudD1cImF1dG9cIiBjb250YWluZXI9XCJib2R5XCI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHZtLmxheW91dFwiPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IHt7Z2V0SnVzdGlmeShpdGVtLmp1c3RpZnkpfX0ge3tnZXRBbGlnbihpdGVtLmFsaWduKX19IHt7Z2V0Um93Q2xhc3MoKX19IHt7Z2V0TGF5b3V0Um93Q2xhc3MoaXRlbSl9fVwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3tnZXRDb2xDbGFzcygpfX0ge3tnZXRDbGFzcyhjb2wpfX1cIiAqbmdGb3I9XCJsZXQgY29sIG9mIGl0ZW0uY29sc1wiPlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbC5kaXNwbGF5ICE9PSAnaGlkZGVuJ1wiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gSUNPTiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbC5pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LWVudHJ5LWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBbaW1hZ2VdPVwiY29sLmljb25cIiBba2xhc3NdPVwiY29sLmljb25DbGFzc1wiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFZBTFVFIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sLnN0YXRpc3RpYyAmJiAodm0uc3RhdGlzdGljc1tjb2wuc3RhdGlzdGljXSkgYXMgc3RhdGlzdGljc1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic3RhdGlzdGljcy5maWVsZFwiIGNsYXNzPVwid2lkZ2V0LWVudHJ5LXZhbHVlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZCBbdHlwZV09XCJzdGF0aXN0aWNzLmZpZWxkLnR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZF09XCJzdGF0aXN0aWNzLmZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1maWVsZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic3RhdGlzdGljcy5sb2FkaW5nICYmIGxvYWRpbmdcIiBjbGFzcz1cIndpZGdldC1lbnRyeS1sb2FkaW5nXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbmxpbmUtbG9hZGluZy1zcGlubmVyPjwvc2NybS1pbmxpbmUtbG9hZGluZy1zcGlubmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBMQUJFTCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbC5sYWJlbEtleVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LWVudHJ5LWxhYmVsIHRleHQtdHJ1bmNhdGVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJjb2wubGFiZWxLZXlcIiBbbW9kdWxlXT1cImdldENvbnRleHRNb2R1bGUoKVwiPjwvc2NybS1sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBERVNDUklQVElPTiBURVhUIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sLmRlc2NyaXB0aW9uS2V5XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXRydW5jYXRlIHdpZGdldC1lbnRyeS1sYWJlbFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7dm0uZGVzY3JpcHRpb259fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRFlOQU1JQyBMQUJFTCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbC5keW5hbWljTGFiZWxcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFsb2FkaW5nXCIgY2xhc3M9XCJ3aWRnZXQtZW50cnktZHluYW1pYy1sYWJlbFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZHluYW1pYy1sYWJlbCBbY29udGV4dF09XCJnZXRNZXNzYWdlQ29udGV4dCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZHNdPVwiZ2V0TWVzc2FnZUZpZWxkcyh2bS5zdGF0aXN0aWNzKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxLZXldPVwiY29sLmR5bmFtaWNMYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1keW5hbWljLWxhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cIndpZGdldC1lbnRyeS1sb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW5saW5lLWxvYWRpbmctc3Bpbm5lcj48L3Njcm0taW5saW5lLWxvYWRpbmctc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTUlTQ09ORklHVVJBVElPTiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjb2wuc3RhdGlzdGljICYmICFsb2FkaW5nICYmICghdm0uc3RhdGlzdGljc1tjb2wuc3RhdGlzdGljXS5maWVsZCB8fCAodm0uc3RhdGlzdGljc1tjb2wuc3RhdGlzdGljXS5maWVsZCAmJiBpc0VtcHR5RmllbGRWYWx1ZSh2bS5zdGF0aXN0aWNzW2NvbC5zdGF0aXN0aWNdLmZpZWxkLnZhbHVlKSkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LWVudHJ5LXZhbHVlIHt7Z2V0U2l6ZUNsYXNzKGNvbC5zaXplKX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=