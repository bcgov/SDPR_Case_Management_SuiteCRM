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
import { of } from 'rxjs';
import { debounceTime, shareReplay } from 'rxjs/operators';
import { RecordThreadItemActionsAdapterFactory } from '../../adapters/record-thread-item-actions.adapter.factory';
import * as i0 from "@angular/core";
import * as i1 from "../../adapters/record-thread-item-actions.adapter.factory";
import * as i2 from "@angular/common";
import * as i3 from "../../../../components/button/button.component";
import * as i4 from "../../../../components/record-flexbox/record-flexbox.component";
const _c0 = ["body"];
function RecordThreadItemComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-flexbox", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r1.buildConfig(ctx_r1.config.metadata.headerLayout));
} }
function RecordThreadItemComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-flexbox", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r3.buildConfig(ctx_r3.config.metadata.bodyLayout));
} }
function RecordThreadItemComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 7);
} }
function RecordThreadItemComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "scrm-button", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r5.getCollapseButton());
} }
function RecordThreadItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 1);
    i0.ɵɵtemplate(2, RecordThreadItemComponent_div_0_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", null, 3);
    i0.ɵɵtemplate(5, RecordThreadItemComponent_div_0_ng_container_5_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(6, RecordThreadItemComponent_div_0_div_6_Template, 1, 0, "div", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RecordThreadItemComponent_div_0_div_7_Template, 2, 1, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("d-flex flex-column record-thread-item ", ctx_r0.config && ctx_r0.config.klass || "", " ", ctx_r0.dynamicClass, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.config.metadata && ctx_r0.config.metadata.headerLayout);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("record-thread-item-body flex-grow-1 ", ctx_r0.getBodyClass(), "");
    i0.ɵɵclassProp("collapsed", ctx_r0.collapsible && ctx_r0.collapsed)("expanded", ctx_r0.collapsible && !ctx_r0.collapsed);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.config.metadata && ctx_r0.config.metadata.bodyLayout);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.collapsible && ctx_r0.collapsed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.collapsible);
} }
class RecordThreadItemComponent {
    constructor(actionAdapterFactory) {
        this.actionAdapterFactory = actionAdapterFactory;
        this.collapsed = false;
        this.collapsible = false;
        this.collapseLimit = 300;
        this.dynamicClass = '';
        this.subs = [];
        this.dynamicClassesMap = {};
        this.dynamicClassFieldSubs = [];
    }
    ngOnInit() {
        this.actionAdapter = this.actionAdapterFactory.create(this.config.store, this.config.threadStore, this.config);
        this.initDynamicClass();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.dynamicClassFieldSubs.forEach(sub => sub.unsubscribe());
    }
    ngAfterViewInit() {
        if (!this.config || !this.config.collapsible) {
            return;
        }
        setTimeout(() => {
            const collapseLimit = this.config.collapseLimit || this.collapseLimit;
            let height = this.bodyEl.nativeElement.offsetHeight || this.bodyEl.nativeElement.height;
            if (height > collapseLimit) {
                this.collapsible = true;
                this.collapsed = true;
            }
        }, 2000);
    }
    /**
     *
     * Build layout data source according to received configuration
     * @param {object} layout: FieldFlexboxRow[]
     * @returns {object} RecordFlexboxConfig
     */
    buildConfig(layout) {
        return {
            record$: this.config.store.stagingRecord$,
            mode$: this.config.store.mode$,
            layout$: of(layout).pipe(shareReplay(1)),
            inputClass: {
                ...(this.config.inputClass || {}),
                'form-control form-control-sm': true
            },
            buttonClass: this?.config?.buttonClass ?? '',
            buttonGroupClass: this?.config?.buttonGroupClass ?? '',
            labelClass: this?.config?.labelClass ?? {},
            rowClass: this?.config?.rowClass ?? {},
            colClass: this?.config?.colClass ?? {},
            actions: this?.actionAdapter,
            klass: this?.config?.containerClass,
            flexDirection: this?.config?.flexDirection || ''
        };
    }
    getCollapseButton() {
        return {
            klass: 'collapse-button btn btn-link btn-sm',
            labelKey: this.collapsed ? 'LBL_SHOW_MORE' : 'LBL_SHOW_LESS',
            onClick: () => {
                this.collapsed = !this.collapsed;
                if (this.collapsed) {
                    this.config && this.config.collapsed();
                }
                else {
                    this.config && this.config.expanded();
                }
            }
        };
    }
    initDynamicClass() {
        if (!this.config || !this.config.dynamicClass || !this.config.dynamicClass.length) {
            return;
        }
        this.subs.push(this.config.store.stagingRecord$.subscribe(record => {
            const klassesMap = {};
            this.dynamicClassFieldSubs.forEach(sub => sub.unsubscribe());
            if (!record || !record.fields || !Object.keys(record.fields).length) {
                return;
            }
            this.config.dynamicClass.forEach(fieldKey => {
                if (!fieldKey) {
                    return;
                }
                if (!record.fields[fieldKey] && !record.attributes[fieldKey]) {
                    return;
                }
                if (record.fields[fieldKey]) {
                    this.dynamicClassFieldSubs.push(record.fields[fieldKey].valueChanges$.pipe(debounceTime(100)).subscribe(() => {
                        const klass = this.getDynamicClasses(fieldKey, record) ?? '';
                        if (klass !== '') {
                            this.dynamicClassesMap[fieldKey] = klass;
                            this.calculateDynamicClasses();
                        }
                    }));
                }
                const klass = this.getDynamicClasses(fieldKey, record) ?? '';
                if (klass !== '') {
                    klassesMap[fieldKey] = klass;
                }
            });
            this.dynamicClassesMap = klassesMap;
            this.calculateDynamicClasses();
        }));
    }
    /**
     * Calculate dynamic classes
     */
    calculateDynamicClasses() {
        const klasses = [];
        Object.keys(this.dynamicClassesMap ?? {}).forEach(field => {
            const klass = this.dynamicClassesMap[field] ?? '';
            if (klass === '') {
                return;
            }
            klasses.push(klass);
        });
        this.dynamicClass = klasses.join(' ');
    }
    /**
     * Get Dynamic classes for record
     * @param fieldKey
     * @param record
     * @protected
     */
    getDynamicClasses(fieldKey, record) {
        const prefix = fieldKey + '-';
        let values = [];
        if (!record.fields[fieldKey]) {
            if (Array.isArray(record.attributes[fieldKey])) {
                values = values.concat(record.attributes[fieldKey]);
            }
            else if (typeof record.attributes[fieldKey] !== 'object') {
                values.push(record.attributes[fieldKey]);
            }
        }
        else {
            if (record.fields[fieldKey].value) {
                values.push(record.fields[fieldKey].value);
            }
            if (record.fields[fieldKey].valueList && record.fields[fieldKey].valueList.length) {
                values = values.concat(record.fields[fieldKey].valueList);
            }
        }
        if (!values || !values.length) {
            return '';
        }
        return prefix + values.join(' ' + prefix);
    }
    /**
     * Get body class
     */
    getBodyClass() {
        return this.config?.metadata?.bodyLayout?.class ?? '';
    }
    static { this.ɵfac = function RecordThreadItemComponent_Factory(t) { return new (t || RecordThreadItemComponent)(i0.ɵɵdirectiveInject(i1.RecordThreadItemActionsAdapterFactory)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordThreadItemComponent, selectors: [["scrm-record-thread-item"]], viewQuery: function RecordThreadItemComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bodyEl = _t.first);
        } }, inputs: { config: "config" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], [1, "record-thread-item-header", "flex-grow-1"], [4, "ngIf"], ["body", ""], ["class", "fadeout", 4, "ngIf"], ["class", "record-thread-item-collapse d-flex justify-content-center flex-grow-1", 4, "ngIf"], [3, "config"], [1, "fadeout"], [1, "record-thread-item-collapse", "d-flex", "justify-content-center", "flex-grow-1"]], template: function RecordThreadItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordThreadItemComponent_div_0_Template, 8, 15, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.config);
        } }, dependencies: [i2.NgIf, i3.ButtonComponent, i4.RecordFlexboxComponent], encapsulation: 2 }); }
}
export { RecordThreadItemComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadItemComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-thread-item', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div *ngIf=\"config\"\n     class=\"d-flex flex-column record-thread-item {{(config && config.klass) || ''}} {{dynamicClass}}\">\n    <div class=\"record-thread-item-header flex-grow-1\">\n\n        <ng-container *ngIf=\"config.metadata && config.metadata.headerLayout\">\n\n            <scrm-record-flexbox [config]=\"buildConfig(config.metadata.headerLayout)\"></scrm-record-flexbox>\n        </ng-container>\n\n    </div>\n    <div #body\n         [class.collapsed]=\"collapsible && collapsed\"\n         [class.expanded]=\"collapsible && !collapsed\"\n         class=\"record-thread-item-body flex-grow-1 {{getBodyClass()}}\">\n\n        <ng-container *ngIf=\"config.metadata && config.metadata.bodyLayout\">\n            <scrm-record-flexbox [config]=\"buildConfig(config.metadata.bodyLayout)\"></scrm-record-flexbox>\n        </ng-container>\n\n        <div *ngIf=\"collapsible && collapsed\" class=\"fadeout\"></div>\n\n    </div>\n\n    <div *ngIf=\"collapsible\" class=\"record-thread-item-collapse d-flex justify-content-center flex-grow-1\">\n        <scrm-button [config]=\"getCollapseButton()\"></scrm-button>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.RecordThreadItemActionsAdapterFactory }]; }, { config: [{
            type: Input
        }], bodyEl: [{
            type: ViewChild,
            args: ['body']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvY29tcG9uZW50cy9yZWNvcmQtdGhyZWFkLWl0ZW0vcmVjb3JkLXRocmVhZC1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvY29tcG9uZW50cy9yZWNvcmQtdGhyZWFkLWl0ZW0vcmVjb3JkLXRocmVhZC1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQWdCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFDLEVBQUUsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUV0QyxPQUFPLEVBQUMsWUFBWSxFQUFFLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR3pELE9BQU8sRUFBQyxxQ0FBcUMsRUFBQyxNQUFNLDJEQUEyRCxDQUFDOzs7Ozs7OztJQ0R4Ryw2QkFBc0U7SUFFbEUseUNBQWdHO0lBQ3BHLDBCQUFlOzs7SUFEVSxlQUFvRDtJQUFwRCxnRkFBb0Q7OztJQVM3RSw2QkFBb0U7SUFDaEUseUNBQThGO0lBQ2xHLDBCQUFlOzs7SUFEVSxlQUFrRDtJQUFsRCw4RUFBa0Q7OztJQUczRSx5QkFBNEQ7OztJQUloRSw4QkFBdUc7SUFDbkcsaUNBQTBEO0lBQzlELGlCQUFNOzs7SUFEVyxlQUE4QjtJQUE5QixtREFBOEI7OztJQXhCbkQsMkJBQ3VHLGFBQUE7SUFHL0Ysa0dBR2U7SUFFbkIsaUJBQU07SUFDTixvQ0FHb0U7SUFF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eUI7Y0FMckMsU0FBUzsyQkFDSSx5QkFBeUI7d0ZBTTFCLE1BQU07a0JBQWQsS0FBSztZQUNhLE1BQU07a0JBQXhCLFNBQVM7bUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbUNvbmZpZ30gZnJvbSAnLi9yZWNvcmQtdGhyZWFkLWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHtvZiwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7RmllbGRGbGV4Ym94LCBSZWNvcmRGbGV4Ym94Q29uZmlnfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3JlY29yZC1mbGV4Ym94L3JlY29yZC1mbGV4Ym94Lm1vZGVsJztcbmltcG9ydCB7ZGVib3VuY2VUaW1lLCBzaGFyZVJlcGxheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtCdXR0b25JbnRlcmZhY2UsIFJlY29yZCwgU3RyaW5nTWFwfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRJdGVtQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL3JlY29yZC10aHJlYWQtaXRlbS1hY3Rpb25zLmFkYXB0ZXInO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRJdGVtQWN0aW9uc0FkYXB0ZXJGYWN0b3J5fSBmcm9tICcuLi8uLi9hZGFwdGVycy9yZWNvcmQtdGhyZWFkLWl0ZW0tYWN0aW9ucy5hZGFwdGVyLmZhY3RvcnknO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tcmVjb3JkLXRocmVhZC1pdGVtJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVjb3JkLXRocmVhZC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRUaHJlYWRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KCkgY29uZmlnOiBSZWNvcmRUaHJlYWRJdGVtQ29uZmlnO1xuICAgIEBWaWV3Q2hpbGQoJ2JvZHknKSBib2R5RWw6IEVsZW1lbnRSZWY7XG4gICAgY29sbGFwc2VkID0gZmFsc2U7XG4gICAgY29sbGFwc2libGUgPSBmYWxzZTtcbiAgICBjb2xsYXBzZUxpbWl0ID0gMzAwO1xuICAgIGR5bmFtaWNDbGFzcyA9ICcnO1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBhY3Rpb25BZGFwdGVyOiBSZWNvcmRUaHJlYWRJdGVtQWN0aW9uc0FkYXB0ZXI7XG4gICAgcHJvdGVjdGVkIGR5bmFtaWNDbGFzc2VzTWFwOiBTdHJpbmdNYXAgPSB7fTtcbiAgICBwcm90ZWN0ZWQgZHluYW1pY0NsYXNzRmllbGRTdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25BZGFwdGVyRmFjdG9yeTogUmVjb3JkVGhyZWFkSXRlbUFjdGlvbnNBZGFwdGVyRmFjdG9yeVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFjdGlvbkFkYXB0ZXIgPSB0aGlzLmFjdGlvbkFkYXB0ZXJGYWN0b3J5LmNyZWF0ZSh0aGlzLmNvbmZpZy5zdG9yZSwgdGhpcy5jb25maWcudGhyZWFkU3RvcmUsIHRoaXMuY29uZmlnKTtcbiAgICAgICAgdGhpcy5pbml0RHluYW1pY0NsYXNzKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuZHluYW1pY0NsYXNzRmllbGRTdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcgfHwgIXRoaXMuY29uZmlnLmNvbGxhcHNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNlTGltaXQgPSB0aGlzLmNvbmZpZy5jb2xsYXBzZUxpbWl0IHx8IHRoaXMuY29sbGFwc2VMaW1pdDtcblxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuYm9keUVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IHRoaXMuYm9keUVsLm5hdGl2ZUVsZW1lbnQuaGVpZ2h0O1xuXG4gICAgICAgICAgICBpZiAoaGVpZ2h0ID4gY29sbGFwc2VMaW1pdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBCdWlsZCBsYXlvdXQgZGF0YSBzb3VyY2UgYWNjb3JkaW5nIHRvIHJlY2VpdmVkIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGF5b3V0OiBGaWVsZEZsZXhib3hSb3dbXVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IFJlY29yZEZsZXhib3hDb25maWdcbiAgICAgKi9cbiAgICBidWlsZENvbmZpZyhsYXlvdXQ6IEZpZWxkRmxleGJveCk6IFJlY29yZEZsZXhib3hDb25maWcge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVjb3JkJDogdGhpcy5jb25maWcuc3RvcmUuc3RhZ2luZ1JlY29yZCQsXG4gICAgICAgICAgICBtb2RlJDogdGhpcy5jb25maWcuc3RvcmUubW9kZSQsXG4gICAgICAgICAgICBsYXlvdXQkOiBvZihsYXlvdXQpLnBpcGUoc2hhcmVSZXBsYXkoMSkpLFxuICAgICAgICAgICAgaW5wdXRDbGFzczoge1xuICAgICAgICAgICAgICAgIC4uLih0aGlzLmNvbmZpZy5pbnB1dENsYXNzIHx8IHt9KSxcbiAgICAgICAgICAgICAgICAnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSc6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25DbGFzczogdGhpcz8uY29uZmlnPy5idXR0b25DbGFzcyA/PyAnJyxcbiAgICAgICAgICAgIGJ1dHRvbkdyb3VwQ2xhc3M6IHRoaXM/LmNvbmZpZz8uYnV0dG9uR3JvdXBDbGFzcyA/PyAnJyxcbiAgICAgICAgICAgIGxhYmVsQ2xhc3M6IHRoaXM/LmNvbmZpZz8ubGFiZWxDbGFzcyA/PyB7fSxcbiAgICAgICAgICAgIHJvd0NsYXNzOiB0aGlzPy5jb25maWc/LnJvd0NsYXNzID8/IHt9LFxuICAgICAgICAgICAgY29sQ2xhc3M6IHRoaXM/LmNvbmZpZz8uY29sQ2xhc3MgPz8ge30sXG4gICAgICAgICAgICBhY3Rpb25zOiB0aGlzPy5hY3Rpb25BZGFwdGVyLFxuICAgICAgICAgICAga2xhc3M6IHRoaXM/LmNvbmZpZz8uY29udGFpbmVyQ2xhc3MsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB0aGlzPy5jb25maWc/LmZsZXhEaXJlY3Rpb24gfHwgJydcbiAgICAgICAgfSBhcyBSZWNvcmRGbGV4Ym94Q29uZmlnO1xuICAgIH1cblxuICAgIGdldENvbGxhcHNlQnV0dG9uKCk6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrbGFzczogJ2NvbGxhcHNlLWJ1dHRvbiBidG4gYnRuLWxpbmsgYnRuLXNtJyxcbiAgICAgICAgICAgIGxhYmVsS2V5OiB0aGlzLmNvbGxhcHNlZCA/ICdMQkxfU0hPV19NT1JFJyA6ICdMQkxfU0hPV19MRVNTJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuY29sbGFwc2VkKClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5leHBhbmRlZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXREeW5hbWljQ2xhc3MoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcgfHwgIXRoaXMuY29uZmlnLmR5bmFtaWNDbGFzcyB8fCAhdGhpcy5jb25maWcuZHluYW1pY0NsYXNzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb25maWcuc3RvcmUuc3RhZ2luZ1JlY29yZCQuc3Vic2NyaWJlKHJlY29yZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBrbGFzc2VzTWFwOiBTdHJpbmdNYXAgPSB7fTtcblxuICAgICAgICAgICAgdGhpcy5keW5hbWljQ2xhc3NGaWVsZFN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuXG4gICAgICAgICAgICBpZiAoIXJlY29yZCB8fCAhcmVjb3JkLmZpZWxkcyB8fCAhT2JqZWN0LmtleXMocmVjb3JkLmZpZWxkcykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5keW5hbWljQ2xhc3MuZm9yRWFjaChmaWVsZEtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFmaWVsZEtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFyZWNvcmQuZmllbGRzW2ZpZWxkS2V5XSAmJiAhcmVjb3JkLmF0dHJpYnV0ZXNbZmllbGRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmZpZWxkc1tmaWVsZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5keW5hbWljQ2xhc3NGaWVsZFN1YnMucHVzaChyZWNvcmQuZmllbGRzW2ZpZWxkS2V5XS52YWx1ZUNoYW5nZXMkLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpLnN1YnNjcmliZSgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtsYXNzID0gdGhpcy5nZXREeW5hbWljQ2xhc3NlcyhmaWVsZEtleSwgcmVjb3JkKSA/PyAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrbGFzcyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmR5bmFtaWNDbGFzc2VzTWFwW2ZpZWxkS2V5XSA9IGtsYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlRHluYW1pY0NsYXNzZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGtsYXNzID0gdGhpcy5nZXREeW5hbWljQ2xhc3NlcyhmaWVsZEtleSwgcmVjb3JkKSA/PyAnJztcbiAgICAgICAgICAgICAgICBpZiAoa2xhc3MgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGtsYXNzZXNNYXBbZmllbGRLZXldID0ga2xhc3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZHluYW1pY0NsYXNzZXNNYXAgPSBrbGFzc2VzTWFwO1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVEeW5hbWljQ2xhc3NlcygpO1xuXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgZHluYW1pYyBjbGFzc2VzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNhbGN1bGF0ZUR5bmFtaWNDbGFzc2VzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBrbGFzc2VzID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZHluYW1pY0NsYXNzZXNNYXAgPz8ge30pLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2xhc3MgPSB0aGlzLmR5bmFtaWNDbGFzc2VzTWFwW2ZpZWxkXSA/PyAnJztcbiAgICAgICAgICAgIGlmIChrbGFzcyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrbGFzc2VzLnB1c2goa2xhc3MpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZHluYW1pY0NsYXNzID0ga2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IER5bmFtaWMgY2xhc3NlcyBmb3IgcmVjb3JkXG4gICAgICogQHBhcmFtIGZpZWxkS2V5XG4gICAgICogQHBhcmFtIHJlY29yZFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0RHluYW1pY0NsYXNzZXMoZmllbGRLZXk6IHN0cmluZywgcmVjb3JkOiBSZWNvcmQpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBwcmVmaXggPSBmaWVsZEtleSArICctJztcbiAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xuXG4gICAgICAgIGlmICghcmVjb3JkLmZpZWxkc1tmaWVsZEtleV0pIHtcblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVjb3JkLmF0dHJpYnV0ZXNbZmllbGRLZXldKSkge1xuXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChyZWNvcmQuYXR0cmlidXRlc1tmaWVsZEtleV0pO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZWNvcmQuYXR0cmlidXRlc1tmaWVsZEtleV0gIT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChyZWNvcmQuYXR0cmlidXRlc1tmaWVsZEtleV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChyZWNvcmQuZmllbGRzW2ZpZWxkS2V5XS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHJlY29yZC5maWVsZHNbZmllbGRLZXldLnZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlY29yZC5maWVsZHNbZmllbGRLZXldLnZhbHVlTGlzdCAmJiByZWNvcmQuZmllbGRzW2ZpZWxkS2V5XS52YWx1ZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChyZWNvcmQuZmllbGRzW2ZpZWxkS2V5XS52YWx1ZUxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF2YWx1ZXMgfHwgIXZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcmVmaXggKyB2YWx1ZXMuam9pbignICcgKyBwcmVmaXgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBib2R5IGNsYXNzXG4gICAgICovXG4gICAgZ2V0Qm9keUNsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZz8ubWV0YWRhdGE/LmJvZHlMYXlvdXQ/LmNsYXNzID8/ICcnXG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG5cbjxkaXYgKm5nSWY9XCJjb25maWdcIlxuICAgICBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiByZWNvcmQtdGhyZWFkLWl0ZW0ge3soY29uZmlnICYmIGNvbmZpZy5rbGFzcykgfHwgJyd9fSB7e2R5bmFtaWNDbGFzc319XCI+XG4gICAgPGRpdiBjbGFzcz1cInJlY29yZC10aHJlYWQtaXRlbS1oZWFkZXIgZmxleC1ncm93LTFcIj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLm1ldGFkYXRhICYmIGNvbmZpZy5tZXRhZGF0YS5oZWFkZXJMYXlvdXRcIj5cblxuICAgICAgICAgICAgPHNjcm0tcmVjb3JkLWZsZXhib3ggW2NvbmZpZ109XCJidWlsZENvbmZpZyhjb25maWcubWV0YWRhdGEuaGVhZGVyTGF5b3V0KVwiPjwvc2NybS1yZWNvcmQtZmxleGJveD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICNib2R5XG4gICAgICAgICBbY2xhc3MuY29sbGFwc2VkXT1cImNvbGxhcHNpYmxlICYmIGNvbGxhcHNlZFwiXG4gICAgICAgICBbY2xhc3MuZXhwYW5kZWRdPVwiY29sbGFwc2libGUgJiYgIWNvbGxhcHNlZFwiXG4gICAgICAgICBjbGFzcz1cInJlY29yZC10aHJlYWQtaXRlbS1ib2R5IGZsZXgtZ3Jvdy0xIHt7Z2V0Qm9keUNsYXNzKCl9fVwiPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcubWV0YWRhdGEgJiYgY29uZmlnLm1ldGFkYXRhLmJvZHlMYXlvdXRcIj5cbiAgICAgICAgICAgIDxzY3JtLXJlY29yZC1mbGV4Ym94IFtjb25maWddPVwiYnVpbGRDb25maWcoY29uZmlnLm1ldGFkYXRhLmJvZHlMYXlvdXQpXCI+PC9zY3JtLXJlY29yZC1mbGV4Ym94PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY29sbGFwc2libGUgJiYgY29sbGFwc2VkXCIgY2xhc3M9XCJmYWRlb3V0XCI+PC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJjb2xsYXBzaWJsZVwiIGNsYXNzPVwicmVjb3JkLXRocmVhZC1pdGVtLWNvbGxhcHNlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtZ3Jvdy0xXCI+XG4gICAgICAgIDxzY3JtLWJ1dHRvbiBbY29uZmlnXT1cImdldENvbGxhcHNlQnV0dG9uKClcIj48L3Njcm0tYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=