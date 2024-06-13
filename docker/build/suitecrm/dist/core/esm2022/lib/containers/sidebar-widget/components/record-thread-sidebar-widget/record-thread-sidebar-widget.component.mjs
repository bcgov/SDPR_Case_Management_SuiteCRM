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
import { deepClone, isFalse, isTrue } from 'common';
import { of } from 'rxjs';
import { LanguageStore } from '../../../../store/language/language.store';
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { distinctUntilChanged, filter, map, shareReplay } from 'rxjs/operators';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../store/system-config/system-config.store";
import * as i3 from "@angular/common";
import * as i4 from "../../../../components/widget-panel/widget-panel.component";
import * as i5 from "../../../../components/label/label.component";
import * as i6 from "../../../record-thread/components/record-thread/record-thread.component";
function RecordThreadSidebarWidgetComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelement(2, "scrm-label", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function RecordThreadSidebarWidgetComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-thread", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r1.recordThreadConfig);
} }
class RecordThreadSidebarWidgetComponent extends BaseWidgetComponent {
    constructor(language, sytemConfig) {
        super();
        this.language = language;
        this.sytemConfig = sytemConfig;
        this.panelMode = 'none';
        this.subs = [];
    }
    ngOnInit() {
        const options = this.config.options || {};
        this.options = options.recordThread || null;
        if (!this.options) {
            return;
        }
        this.initPanelMode();
        this.initFilters$();
        this.initPresetFields$();
        if (this.context$ && this.context$.subscribe()) {
            this.subs.push(this.context$.subscribe((context) => {
                this.context = context;
            }));
        }
        this.recordThreadConfig = this.getConfig();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getHeaderLabel() {
        return this.getLabel(this.config.labelKey) || '';
    }
    getLabel(key) {
        const context = this.context || {};
        const module = context.module || '';
        return this.language.getFieldLabel(key, module);
    }
    getConfig() {
        const config = {
            filters$: this.filters$,
            presetFields$: this.presetFields$,
            module: this.options.module,
            klass: this.options.class || '',
            maxListHeight: this.options.maxListHeight ?? 350,
            direction: this.options.direction || 'asc',
            create: !!this.options.create,
            itemConfig: {
                collapsible: this.options.item.collapsible || false,
                collapseLimit: this.options.item.collapseLimit || null,
                klass: this.options.item.itemClass || '',
                dynamicClass: this.options.item.dynamicClass || [],
                metadata: {}
            },
            createConfig: {
                collapsible: false,
                metadata: {}
            },
        };
        this.setupItemMetadata(config.itemConfig.metadata, this.options.item.layout);
        this.setupItemMetadata(config.createConfig.metadata, this.options.create.layout);
        return config;
    }
    setupItemMetadata(metadata, config) {
        if (config && config.header) {
            metadata.headerLayout = deepClone(config.header);
        }
        if (config && config.body) {
            metadata.bodyLayout = deepClone(config.body);
        }
        if (config && config.actions) {
            metadata.actions = deepClone(config.actions);
        }
        if (config && config.fields) {
            metadata.fields = deepClone(config.fields);
        }
        if ((config?.collapseActions ?? null) !== null) {
            metadata.collapseActions = config?.collapseActions;
        }
    }
    initPanelMode() {
        const ui = this.sytemConfig.getConfigValue('ui');
        const systemDefault = ui?.widget?.allowCollapse ?? null;
        const allowCollapse = this?.config?.allowCollapse ?? null;
        let mode = 'none';
        if (systemDefault !== null) {
            if (isTrue(systemDefault)) {
                mode = 'collapsible';
            }
            else if (isFalse(systemDefault)) {
                mode = 'none';
            }
        }
        if (allowCollapse !== null) {
            if (isTrue(allowCollapse)) {
                mode = 'collapsible';
            }
            else if (isFalse(allowCollapse)) {
                mode = 'none';
            }
        }
        this.panelMode = mode;
    }
    initFilters$() {
        if (!this.options || !this.options.filters || !this.context$) {
            return;
        }
        const parentFilters = this.options.filters.parentFilters || {};
        let context$ = of({}).pipe(shareReplay());
        if (Object.keys(parentFilters).length > 0) {
            context$ = this.context$.pipe(filter(context => {
                const record = (context && context.record) || {};
                return !!(record.attributes && Object.keys(record.attributes).length);
            }));
        }
        this.filters$ = context$.pipe(map(context => {
            const filters = { filters: {} };
            this.initParentFilters(context, filters);
            const staticFilters = this.options.filters.static || {};
            filters.filters = {
                ...filters.filters,
                ...staticFilters
            };
            if (this.options.filters.orderBy) {
                filters.orderBy = this.options.filters.orderBy;
            }
            if (this.options.filters.sortOrder) {
                filters.sortOrder = this.options.filters.sortOrder;
            }
            return filters;
        }), distinctUntilChanged());
    }
    initPresetFields$() {
        if (!this.options || !this.options.create || !this.options.create.presetFields || !this.context$) {
            return;
        }
        this.presetFields$ = this.context$.pipe(map(context => {
            const parentValues = this.initParentValues(context);
            const staticValues = this.options.create.presetFields.static || {};
            return {
                ...parentValues,
                ...staticValues
            };
        }), distinctUntilChanged());
    }
    initParentFilters(context, filters) {
        const parentFilters = this.options.filters.parentFilters || {};
        if (!context || !context.record || !parentFilters) {
            return;
        }
        Object.keys(parentFilters).forEach(parentField => {
            const field = parentFilters[parentField];
            const value = context.record.attributes[parentField] || '';
            if (!value) {
                return;
            }
            filters.filters[field] = {
                field: parentFilters,
                operator: '=',
                values: [value],
            };
        });
    }
    initParentValues(context) {
        const parentValues = this.options.create.presetFields.parentValues || {};
        if (!context || !context.record || !parentValues) {
            return;
        }
        const attributes = {};
        Object.keys(parentValues).forEach(parentField => {
            const field = parentValues[parentField];
            const value = context.record.attributes[parentField] || '';
            if (!value) {
                return;
            }
            attributes[field] = value;
        });
        return attributes;
    }
    static { this.ɵfac = function RecordThreadSidebarWidgetComponent_Factory(t) { return new (t || RecordThreadSidebarWidgetComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.SystemConfigStore)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordThreadSidebarWidgetComponent, selectors: [["scrm-record-thread-sidebar-widget"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 4, consts: [[3, "mode", "title"], ["widget-body", "", 1, "record-thread-sidebar-widget"], [4, "ngIf"], [1, "p-3", "widget-message"], ["labelKey", "LBL_BAD_CONFIG"], [3, "config"]], template: function RecordThreadSidebarWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-widget-panel", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, RecordThreadSidebarWidgetComponent_ng_container_2_Template, 3, 0, "ng-container", 2);
            i0.ɵɵtemplate(3, RecordThreadSidebarWidgetComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("mode", ctx.panelMode)("title", ctx.getHeaderLabel());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.options);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.options);
        } }, dependencies: [i3.NgIf, i4.WidgetPanelComponent, i5.LabelComponent, i6.RecordThreadComponent], encapsulation: 2 }); }
}
export { RecordThreadSidebarWidgetComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadSidebarWidgetComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-thread-sidebar-widget', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-widget-panel [mode]=\"panelMode\" [title]=\"getHeaderLabel()\">\n    <div class=\"record-thread-sidebar-widget\" widget-body>\n\n        <ng-container *ngIf=\"!options\">\n            <div class=\"p-3 widget-message\">\n                <scrm-label labelKey=\"LBL_BAD_CONFIG\"></scrm-label>\n            </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"options\">\n            <scrm-record-thread [config]=\"recordThreadConfig\"></scrm-record-thread>\n        </ng-container>\n\n    </div>\n</scrm-widget-panel>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL3JlY29yZC10aHJlYWQtc2lkZWJhci13aWRnZXQvcmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL3JlY29yZC10aHJlYWQtc2lkZWJhci13aWRnZXQvcmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUVILFNBQVMsRUFFVCxPQUFPLEVBQ1AsTUFBTSxFQU1ULE1BQU0sUUFBUSxDQUFDO0FBQ2hCLE9BQU8sRUFBYSxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBTTlFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOzs7Ozs7Ozs7SUNsQjlFLDZCQUErQjtJQUMzQiw4QkFBZ0M7SUFDNUIsZ0NBQW1EO0lBQ3ZELGlCQUFNO0lBQ1YsMEJBQWU7OztJQUVmLDZCQUE4QjtJ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bkIsaUJBQU0sRUFBQTs7WUFiUyxvQ0FBa0IsK0JBQUE7WUFHZCxlQUFjO1lBQWQsbUNBQWM7WUFNZCxlQUFhO1lBQWIsa0NBQWE7OztTRG1CdkIsa0NBQWtDO3VGQUFsQyxrQ0FBa0M7Y0FMOUMsU0FBUzsyQkFDSSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIEF0dHJpYnV0ZU1hcCxcbiAgICBkZWVwQ2xvbmUsXG4gICAgRmllbGREZWZpbml0aW9uTWFwLFxuICAgIGlzRmFsc2UsXG4gICAgaXNUcnVlLFxuICAgIFJlY29yZCxcbiAgICBTZWFyY2hDcml0ZXJpYSxcbiAgICBTZWFyY2hDcml0ZXJpYUZpbHRlcixcbiAgICBTdHJpbmdNYXAsXG4gICAgVmlld0NvbnRleHRcbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7QmFzZVdpZGdldENvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vd2lkZ2V0cy9iYXNlLXdpZGdldC5tb2RlbCc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgc2hhcmVSZXBsYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gICAgUmVjb3JkVGhyZWFkQ29uZmlnLFxuICAgIFRocmVhZEl0ZW1NZXRhZGF0YUNvbmZpZ1xufSBmcm9tICcuLi8uLi8uLi9yZWNvcmQtdGhyZWFkL2NvbXBvbmVudHMvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbU1ldGFkYXRhfSBmcm9tICcuLi8uLi8uLi9yZWNvcmQtdGhyZWFkL3N0b3JlL3JlY29yZC10aHJlYWQvcmVjb3JkLXRocmVhZC1pdGVtLnN0b3JlLm1vZGVsJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWNvcmQtdGhyZWFkLXNpZGViYXItd2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRUaHJlYWRTaWRlYmFyV2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHBhbmVsTW9kZTogJ2NvbGxhcHNpYmxlJyB8ICdjbG9zYWJsZScgfCAnbm9uZScgPSAnbm9uZSc7XG4gICAgb3B0aW9uczoge1xuICAgICAgICBtb2R1bGU6IHN0cmluZztcbiAgICAgICAgY2xhc3M/OiBzdHJpbmc7XG4gICAgICAgIG1heExpc3RIZWlnaHQ/OiBudW1iZXI7XG4gICAgICAgIGRpcmVjdGlvbj86ICdhc2MnIHwgJ2Rlc2MnO1xuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICBkeW5hbWljQ2xhc3M/OiBzdHJpbmdbXTtcbiAgICAgICAgICAgIGl0ZW1DbGFzcz86IHN0cmluZztcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlPzogYm9vbGVhbjtcbiAgICAgICAgICAgIGNvbGxhcHNlTGltaXQ/OiBudW1iZXI7XG4gICAgICAgICAgICBsYXlvdXQ/OiBUaHJlYWRJdGVtTWV0YWRhdGFDb25maWc7XG4gICAgICAgICAgICBmaWVsZHM/OiBGaWVsZERlZmluaXRpb25NYXA7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgcHJlc2V0RmllbGRzPzoge1xuICAgICAgICAgICAgICAgIHBhcmVudFZhbHVlcz86IFN0cmluZ01hcDtcbiAgICAgICAgICAgICAgICBzdGF0aWM/OiBBdHRyaWJ1dGVNYXA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGF5b3V0PzogVGhyZWFkSXRlbU1ldGFkYXRhQ29uZmlnO1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJzPzoge1xuICAgICAgICAgICAgcGFyZW50RmlsdGVycz86IFN0cmluZ01hcDtcbiAgICAgICAgICAgIHN0YXRpYz86IFNlYXJjaENyaXRlcmlhRmlsdGVyO1xuICAgICAgICAgICAgb3JkZXJCeT86IHN0cmluZztcbiAgICAgICAgICAgIHNvcnRPcmRlcj86IHN0cmluZztcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJlY29yZFRocmVhZENvbmZpZzogUmVjb3JkVGhyZWFkQ29uZmlnO1xuXG4gICAgZmlsdGVycyQ6IE9ic2VydmFibGU8U2VhcmNoQ3JpdGVyaWE+O1xuICAgIHByZXNldEZpZWxkcyQ6IE9ic2VydmFibGU8QXR0cmlidXRlTWFwPjtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzeXRlbUNvbmZpZzogU3lzdGVtQ29uZmlnU3RvcmVcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jb25maWcub3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucy5yZWNvcmRUaHJlYWQgfHwgbnVsbDtcblxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0UGFuZWxNb2RlKCk7XG4gICAgICAgIHRoaXMuaW5pdEZpbHRlcnMkKCk7XG4gICAgICAgIHRoaXMuaW5pdFByZXNldEZpZWxkcyQoKTtcblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0JCAmJiB0aGlzLmNvbnRleHQkLnN1YnNjcmliZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmNvbnRleHQkLnN1YnNjcmliZSgoY29udGV4dDogVmlld0NvbnRleHQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWNvcmRUaHJlYWRDb25maWcgPSB0aGlzLmdldENvbmZpZygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIGdldEhlYWRlckxhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldExhYmVsKHRoaXMuY29uZmlnLmxhYmVsS2V5KSB8fCAnJztcbiAgICB9XG5cbiAgICBnZXRMYWJlbChrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQgfHwge30gYXMgVmlld0NvbnRleHQ7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGNvbnRleHQubW9kdWxlIHx8ICcnO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlLmdldEZpZWxkTGFiZWwoa2V5LCBtb2R1bGUpO1xuICAgIH1cblxuICAgIGdldENvbmZpZygpOiBSZWNvcmRUaHJlYWRDb25maWcge1xuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGZpbHRlcnMkOiB0aGlzLmZpbHRlcnMkLFxuICAgICAgICAgICAgcHJlc2V0RmllbGRzJDogdGhpcy5wcmVzZXRGaWVsZHMkLFxuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLm9wdGlvbnMubW9kdWxlLFxuICAgICAgICAgICAga2xhc3M6IHRoaXMub3B0aW9ucy5jbGFzcyB8fCAnJyxcbiAgICAgICAgICAgIG1heExpc3RIZWlnaHQ6IHRoaXMub3B0aW9ucy5tYXhMaXN0SGVpZ2h0ID8/IDM1MCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogdGhpcy5vcHRpb25zLmRpcmVjdGlvbiB8fCAnYXNjJyxcbiAgICAgICAgICAgIGNyZWF0ZTogISF0aGlzLm9wdGlvbnMuY3JlYXRlLFxuICAgICAgICAgICAgaXRlbUNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0aGlzLm9wdGlvbnMuaXRlbS5jb2xsYXBzaWJsZSB8fCBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb2xsYXBzZUxpbWl0OiB0aGlzLm9wdGlvbnMuaXRlbS5jb2xsYXBzZUxpbWl0IHx8IG51bGwsXG4gICAgICAgICAgICAgICAga2xhc3M6IHRoaXMub3B0aW9ucy5pdGVtLml0ZW1DbGFzcyB8fCAnJyxcbiAgICAgICAgICAgICAgICBkeW5hbWljQ2xhc3M6IHRoaXMub3B0aW9ucy5pdGVtLmR5bmFtaWNDbGFzcyB8fCBbXSxcbiAgICAgICAgICAgICAgICBtZXRhZGF0YToge30gYXMgUmVjb3JkVGhyZWFkSXRlbU1ldGFkYXRhXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB7fSBhcyBSZWNvcmRUaHJlYWRJdGVtTWV0YWRhdGFcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0gYXMgUmVjb3JkVGhyZWFkQ29uZmlnO1xuXG4gICAgICAgIHRoaXMuc2V0dXBJdGVtTWV0YWRhdGEoY29uZmlnLml0ZW1Db25maWcubWV0YWRhdGEsIHRoaXMub3B0aW9ucy5pdGVtLmxheW91dCk7XG4gICAgICAgIHRoaXMuc2V0dXBJdGVtTWV0YWRhdGEoY29uZmlnLmNyZWF0ZUNvbmZpZy5tZXRhZGF0YSwgdGhpcy5vcHRpb25zLmNyZWF0ZS5sYXlvdXQpO1xuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldHVwSXRlbU1ldGFkYXRhKG1ldGFkYXRhOiBSZWNvcmRUaHJlYWRJdGVtTWV0YWRhdGEsIGNvbmZpZzogVGhyZWFkSXRlbU1ldGFkYXRhQ29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmhlYWRlcikge1xuICAgICAgICAgICAgbWV0YWRhdGEuaGVhZGVyTGF5b3V0ID0gZGVlcENsb25lKGNvbmZpZy5oZWFkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcuYm9keSkge1xuICAgICAgICAgICAgbWV0YWRhdGEuYm9keUxheW91dCA9IGRlZXBDbG9uZShjb25maWcuYm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5hY3Rpb25zKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5hY3Rpb25zID0gZGVlcENsb25lKGNvbmZpZy5hY3Rpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmZpZWxkcykge1xuICAgICAgICAgICAgbWV0YWRhdGEuZmllbGRzID0gZGVlcENsb25lKGNvbmZpZy5maWVsZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChjb25maWc/LmNvbGxhcHNlQWN0aW9ucyA/PyBudWxsKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbWV0YWRhdGEuY29sbGFwc2VBY3Rpb25zID0gY29uZmlnPy5jb2xsYXBzZUFjdGlvbnM7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBpbml0UGFuZWxNb2RlKCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHVpID0gdGhpcy5zeXRlbUNvbmZpZy5nZXRDb25maWdWYWx1ZSgndWknKTtcbiAgICAgICAgY29uc3Qgc3lzdGVtRGVmYXVsdCA9IHVpPy53aWRnZXQ/LmFsbG93Q29sbGFwc2UgPz8gbnVsbDtcbiAgICAgICAgY29uc3QgYWxsb3dDb2xsYXBzZSA9IHRoaXM/LmNvbmZpZz8uYWxsb3dDb2xsYXBzZSA/PyBudWxsO1xuXG4gICAgICAgIGxldCBtb2RlOiAnY29sbGFwc2libGUnIHwgJ2Nsb3NhYmxlJyB8ICdub25lJyA9ICdub25lJztcblxuICAgICAgICBpZiAoc3lzdGVtRGVmYXVsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGlzVHJ1ZShzeXN0ZW1EZWZhdWx0KSkge1xuICAgICAgICAgICAgICAgIG1vZGUgPSAnY29sbGFwc2libGUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0ZhbHNlKHN5c3RlbURlZmF1bHQpKSB7XG4gICAgICAgICAgICAgICAgbW9kZSA9ICdub25lJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFsbG93Q29sbGFwc2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChpc1RydWUoYWxsb3dDb2xsYXBzZSkpIHtcbiAgICAgICAgICAgICAgICBtb2RlID0gJ2NvbGxhcHNpYmxlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGYWxzZShhbGxvd0NvbGxhcHNlKSkge1xuICAgICAgICAgICAgICAgIG1vZGUgPSAnbm9uZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGFuZWxNb2RlID0gbW9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdEZpbHRlcnMkKCkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucyB8fCAhdGhpcy5vcHRpb25zLmZpbHRlcnMgfHwgIXRoaXMuY29udGV4dCQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmVudEZpbHRlcnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVycy5wYXJlbnRGaWx0ZXJzIHx8IHt9IGFzIFN0cmluZ01hcDtcblxuICAgICAgICBsZXQgY29udGV4dCQgPSBvZih7fSkucGlwZShzaGFyZVJlcGxheSgpKTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMocGFyZW50RmlsdGVycykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29udGV4dCQgPSB0aGlzLmNvbnRleHQkLnBpcGUoXG4gICAgICAgICAgICAgICAgZmlsdGVyKGNvbnRleHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmQgPSAoY29udGV4dCAmJiBjb250ZXh0LnJlY29yZCkgfHwge30gYXMgUmVjb3JkO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISEocmVjb3JkLmF0dHJpYnV0ZXMgJiYgT2JqZWN0LmtleXMocmVjb3JkLmF0dHJpYnV0ZXMpLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpbHRlcnMkID0gY29udGV4dCQucGlwZShcbiAgICAgICAgICAgIG1hcChjb250ZXh0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJzID0ge2ZpbHRlcnM6IHt9IGFzIFNlYXJjaENyaXRlcmlhRmlsdGVyfSBhcyBTZWFyY2hDcml0ZXJpYTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFBhcmVudEZpbHRlcnMoY29udGV4dCwgZmlsdGVycyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0aWNGaWx0ZXJzID0gdGhpcy5vcHRpb25zLmZpbHRlcnMuc3RhdGljIHx8IHt9IGFzIFNlYXJjaENyaXRlcmlhRmlsdGVyO1xuXG4gICAgICAgICAgICAgICAgZmlsdGVycy5maWx0ZXJzID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5maWx0ZXJzLmZpbHRlcnMsXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRpY0ZpbHRlcnNcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maWx0ZXJzLm9yZGVyQnkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5vcmRlckJ5ID0gdGhpcy5vcHRpb25zLmZpbHRlcnMub3JkZXJCeTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZpbHRlcnMuc29ydE9yZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnMuc29ydE9yZGVyID0gdGhpcy5vcHRpb25zLmZpbHRlcnMuc29ydE9yZGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRQcmVzZXRGaWVsZHMkKCkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucyB8fCAhdGhpcy5vcHRpb25zLmNyZWF0ZSB8fCAhdGhpcy5vcHRpb25zLmNyZWF0ZS5wcmVzZXRGaWVsZHMgfHwgIXRoaXMuY29udGV4dCQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5wcmVzZXRGaWVsZHMkID0gdGhpcy5jb250ZXh0JC5waXBlKFxuICAgICAgICAgICAgbWFwKGNvbnRleHQgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50VmFsdWVzID0gdGhpcy5pbml0UGFyZW50VmFsdWVzKGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGljVmFsdWVzID0gdGhpcy5vcHRpb25zLmNyZWF0ZS5wcmVzZXRGaWVsZHMuc3RhdGljIHx8IHt9IGFzIEF0dHJpYnV0ZU1hcDtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5wYXJlbnRWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRpY1ZhbHVlc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdFBhcmVudEZpbHRlcnMoY29udGV4dCwgZmlsdGVycykge1xuXG4gICAgICAgIGNvbnN0IHBhcmVudEZpbHRlcnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVycy5wYXJlbnRGaWx0ZXJzIHx8IHt9IGFzIFN0cmluZ01hcDtcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFjb250ZXh0LnJlY29yZCB8fCAhcGFyZW50RmlsdGVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXMocGFyZW50RmlsdGVycykuZm9yRWFjaChwYXJlbnRGaWVsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IHBhcmVudEZpbHRlcnNbcGFyZW50RmllbGRdO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb250ZXh0LnJlY29yZC5hdHRyaWJ1dGVzW3BhcmVudEZpZWxkXSB8fCAnJztcblxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlsdGVycy5maWx0ZXJzW2ZpZWxkXSA9IHtcbiAgICAgICAgICAgICAgICBmaWVsZDogcGFyZW50RmlsdGVycyxcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgICAgIHZhbHVlczogW3ZhbHVlXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRQYXJlbnRWYWx1ZXMoY29udGV4dDogVmlld0NvbnRleHQpOiBBdHRyaWJ1dGVNYXAge1xuXG4gICAgICAgIGNvbnN0IHBhcmVudFZhbHVlcyA9IHRoaXMub3B0aW9ucy5jcmVhdGUucHJlc2V0RmllbGRzLnBhcmVudFZhbHVlcyB8fCB7fSBhcyBTdHJpbmdNYXA7XG4gICAgICAgIGlmICghY29udGV4dCB8fCAhY29udGV4dC5yZWNvcmQgfHwgIXBhcmVudFZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHt9IGFzIEF0dHJpYnV0ZU1hcDtcblxuICAgICAgICBPYmplY3Qua2V5cyhwYXJlbnRWYWx1ZXMpLmZvckVhY2gocGFyZW50RmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBwYXJlbnRWYWx1ZXNbcGFyZW50RmllbGRdO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb250ZXh0LnJlY29yZC5hdHRyaWJ1dGVzW3BhcmVudEZpZWxkXSB8fCAnJztcblxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXR0cmlidXRlc1tmaWVsZF0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48c2NybS13aWRnZXQtcGFuZWwgW21vZGVdPVwicGFuZWxNb2RlXCIgW3RpdGxlXT1cImdldEhlYWRlckxhYmVsKClcIj5cbiAgICA8ZGl2IGNsYXNzPVwicmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldFwiIHdpZGdldC1ib2R5PlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhb3B0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtMyB3aWRnZXQtbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX0JBRF9DT05GSUdcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgIDxzY3JtLXJlY29yZC10aHJlYWQgW2NvbmZpZ109XCJyZWNvcmRUaHJlYWRDb25maWdcIj48L3Njcm0tcmVjb3JkLXRocmVhZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8L2Rpdj5cbjwvc2NybS13aWRnZXQtcGFuZWw+XG4iXX0=