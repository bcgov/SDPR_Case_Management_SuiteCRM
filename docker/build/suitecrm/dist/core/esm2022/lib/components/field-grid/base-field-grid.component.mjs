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
import { Directive, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
class BaseFieldGridComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.special = false;
        this.actions = false;
        this.appendActions = false;
        this.labelDisplay = 'top';
        this.labelClass = {};
        this.inputClass = {};
        this.rowClass = {};
        this.colClass = {};
        this.colAlignItems = '';
        this.sizeMap = {
            handset: 1,
            tablet: 2,
            web: 3,
            wide: 4
        };
        this.baseColClass = {
            col: true,
            'form-group': true,
            'm-1': true
        };
        this.baseRowClass = {
            'form-row': true,
            'align-items-center': true
        };
        this.baseLabelClass = {
            'col-form-label-sm': true,
            'mb-0': true,
        };
        this.baseInputClass = {
            'form-control': true,
            'form-control-sm': true,
        };
        this.currentSize = 'web';
        this.subscriptions = [];
    }
    ngOnInit() {
        this.initScreenSizeObserver(this.breakpointObserver);
        this.buildGrid();
        this.colClass = {
            ...this.colClass,
            ...this.baseColClass
        };
        this.rowClass = {
            ...this.baseRowClass,
            ...this.rowClass
        };
        this.labelClass = {
            ...this.labelClass,
            ...this.baseLabelClass
        };
        this.inputClass = {
            ...this.inputClass,
            ...this.baseInputClass
        };
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    get colNumber() {
        const max = this.sizeMap[this.currentSize];
        if (this.maxColumns && max > this.maxColumns) {
            return this.maxColumns;
        }
        return max;
    }
    addSpecialSlots(grid) {
        if (!grid || grid.length === 0) {
            return;
        }
        const neededSlots = this.getNeededExtraSlots();
        if (neededSlots.length === 0) {
            return;
        }
        if (this.colNumber === 1) {
            neededSlots.reverse().forEach(type => {
                const newRow = {
                    cols: []
                };
                this.fillRow(newRow);
                grid.push(newRow);
                newRow.cols[0][type] = true;
            });
        }
        else if (this.appendActions === true) {
            const lastRow = grid[grid.length - 1];
            const place = this.colNumber - 1;
            neededSlots.forEach(type => {
                lastRow.cols[place][type] = true;
            });
        }
        else {
            const lastNeededCol = this.colNumber - neededSlots.length;
            let lastRow = grid[grid.length - 1];
            if (lastRow.cols[lastNeededCol].field) {
                lastRow = {
                    cols: []
                };
                this.fillRow(lastRow);
                grid.push(lastRow);
            }
            let place = this.colNumber - 1;
            neededSlots.forEach(type => {
                lastRow.cols[place][type] = true;
                place--;
            });
        }
    }
    getNeededExtraSlots() {
        const neededSlots = [];
        if (this.actions) {
            neededSlots.push('actionSlot');
        }
        if (this.special) {
            neededSlots.push('specialSlot');
        }
        return neededSlots;
    }
    fillRow(row) {
        const len = row.cols.length;
        for (let i = len; i < this.colNumber; i++) {
            row.cols.push({ field: { type: '', display: 'none' } });
        }
    }
    initScreenSizeObserver(breakpointObserver) {
        this.subscriptions.push(breakpointObserver.observe([
            Breakpoints.HandsetPortrait,
        ]).subscribe((result) => {
            if (result.matches) {
                this.currentSize = 'handset';
                this.buildGrid();
            }
        }));
        this.subscriptions.push(breakpointObserver.observe([
            Breakpoints.TabletPortrait,
        ]).subscribe((result) => {
            if (result.matches) {
                this.currentSize = 'tablet';
                this.buildGrid();
            }
        }));
        this.subscriptions.push(breakpointObserver.observe([
            Breakpoints.TabletLandscape,
            Breakpoints.WebPortrait,
            Breakpoints.WebLandscape,
        ]).subscribe((result) => {
            if (result.matches) {
                this.currentSize = 'web';
                this.buildGrid();
            }
        }));
        this.subscriptions.push(breakpointObserver.observe([
            Breakpoints.XLarge,
        ]).subscribe((result) => {
            if (result.matches) {
                this.currentSize = 'wide';
                this.buildGrid();
            }
        }));
    }
    static { this.ɵfac = function BaseFieldGridComponent_Factory(t) { return new (t || BaseFieldGridComponent)(i0.ɵɵdirectiveInject(i1.BreakpointObserver)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BaseFieldGridComponent, inputs: { special: "special", actions: "actions", appendActions: "appendActions", labelDisplay: "labelDisplay", labelClass: "labelClass", inputClass: "inputClass", rowClass: "rowClass", colClass: "colClass", colAlignItems: "colAlignItems", maxColumns: "maxColumns", sizeMap: "sizeMap" } }); }
}
export { BaseFieldGridComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseFieldGridComponent, [{
        type: Directive
    }], function () { return [{ type: i1.BreakpointObserver }]; }, { special: [{
            type: Input
        }], actions: [{
            type: Input
        }], appendActions: [{
            type: Input
        }], labelDisplay: [{
            type: Input
        }], labelClass: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], rowClass: [{
            type: Input
        }], colClass: [{
            type: Input
        }], colAlignItems: [{
            type: Input
        }], maxColumns: [{
            type: Input
        }], sizeMap: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maWVsZC1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2ZpZWxkLWdyaWQvYmFzZS1maWVsZC1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBRWxFLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQWtCLE1BQU0scUJBQXFCLENBQUM7OztBQUtyRixNQUNzQixzQkFBc0I7SUErQ3hDLFlBQWdDLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBOUM3RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsaUJBQVksR0FBaUIsS0FBSyxDQUFDO1FBQ25DLGVBQVUsR0FBNkIsRUFBRSxDQUFDO1FBQzFDLGVBQVUsR0FBNkIsRUFBRSxDQUFDO1FBQzFDLGFBQVEsR0FBNkIsRUFBRSxDQUFDO1FBQ3hDLGFBQVEsR0FBNkIsRUFBRSxDQUFDO1FBQ3hDLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBRzNCLFlBQU8sR0FBa0I7WUFDOUIsT0FBTyxFQUFFLENBQUM7WUFDVixNQUFNLEVBQUUsQ0FBQztZQUNULEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLENBQUM7U0FDVixDQUFDO1FBSUYsaUJBQVksR0FBRztZQUNYLEdBQUcsRUFBRSxJQUFJO1lBQ1QsWUFBWSxFQUFFLElBQUk7WUFDbEIsS0FBSyxFQUFFLElBQUk7U0FDZSxDQUFDO1FBRS9CLGlCQUFZLEdBQUc7WUFDWCxVQUFVLEVBQUUsSUFBSTtZQUNoQixvQkFBb0IsRUFB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Q0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDcEI7UUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO1lBQy9DLFdBQVcsQ0FBQyxNQUFNO1NBQ3JCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUF1QixFQUFFLEVBQUU7WUFDckMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3BCO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7dUZBdk1pQixzQkFBc0I7b0VBQXRCLHNCQUFzQjs7U0FBdEIsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FEM0MsU0FBUztxRUFFRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBRUcsWUFBWTtrQkFBcEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBRUcsVUFBVTtrQkFBbEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0JyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHMsIEJyZWFrcG9pbnRTdGF0ZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQge0ZpZWxkR3JpZFJvdywgTGFiZWxEaXNwbGF5fSBmcm9tICcuL2ZpZWxkLWdyaWQubW9kZWwnO1xuaW1wb3J0IHtTY3JlZW5TaXplTWFwfSBmcm9tICdjb21tb24nO1xuXG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VGaWVsZEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgc3BlY2lhbCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGFjdGlvbnMgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBhcHBlbmRBY3Rpb25zID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSBsYWJlbERpc3BsYXk6IExhYmVsRGlzcGxheSA9ICd0b3AnO1xuICAgIEBJbnB1dCgpIGxhYmVsQ2xhc3M6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIEBJbnB1dCgpIGlucHV0Q2xhc3M6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIEBJbnB1dCgpIHJvd0NsYXNzOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBASW5wdXQoKSBjb2xDbGFzczogeyBba2xhc3M6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgQElucHV0KCkgY29sQWxpZ25JdGVtczogc3RyaW5nID0gJyc7XG5cbiAgICBASW5wdXQoKSBtYXhDb2x1bW5zOiBudW1iZXI7XG4gICAgQElucHV0KCkgc2l6ZU1hcDogU2NyZWVuU2l6ZU1hcCA9IHtcbiAgICAgICAgaGFuZHNldDogMSxcbiAgICAgICAgdGFibGV0OiAyLFxuICAgICAgICB3ZWI6IDMsXG4gICAgICAgIHdpZGU6IDRcbiAgICB9O1xuXG4gICAgZmllbGRHcmlkOiBGaWVsZEdyaWRSb3dbXTtcblxuICAgIGJhc2VDb2xDbGFzcyA9IHtcbiAgICAgICAgY29sOiB0cnVlLFxuICAgICAgICAnZm9ybS1ncm91cCc6IHRydWUsXG4gICAgICAgICdtLTEnOiB0cnVlXG4gICAgfSBhcyB7IFtrZXk6c3RyaW5nXTogYm9vbGVhbiB9O1xuXG4gICAgYmFzZVJvd0NsYXNzID0ge1xuICAgICAgICAnZm9ybS1yb3cnOiB0cnVlLFxuICAgICAgICAnYWxpZ24taXRlbXMtY2VudGVyJzogdHJ1ZVxuICAgIH0gYXMgeyBba2V5OnN0cmluZ106IGJvb2xlYW4gfTtcblxuICAgIGJhc2VMYWJlbENsYXNzID0ge1xuICAgICAgICAnY29sLWZvcm0tbGFiZWwtc20nOiB0cnVlLFxuICAgICAgICAnbWItMCc6IHRydWUsXG4gICAgfTtcblxuICAgIGJhc2VJbnB1dENsYXNzID0ge1xuICAgICAgICAnZm9ybS1jb250cm9sJzogdHJ1ZSxcbiAgICAgICAgJ2Zvcm0tY29udHJvbC1zbSc6IHRydWUsXG4gICAgfTtcblxuICAgIHByb3RlY3RlZCBjdXJyZW50U2l6ZSA9ICd3ZWInO1xuXG4gICAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5pdFNjcmVlblNpemVPYnNlcnZlcih0aGlzLmJyZWFrcG9pbnRPYnNlcnZlcik7XG5cbiAgICAgICAgdGhpcy5idWlsZEdyaWQoKTtcblxuICAgICAgICB0aGlzLmNvbENsYXNzID0ge1xuICAgICAgICAgICAgLi4udGhpcy5jb2xDbGFzcyxcbiAgICAgICAgICAgIC4uLnRoaXMuYmFzZUNvbENsYXNzXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yb3dDbGFzcyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuYmFzZVJvd0NsYXNzLFxuICAgICAgICAgICAgLi4udGhpcy5yb3dDbGFzc1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubGFiZWxDbGFzcyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMubGFiZWxDbGFzcyxcbiAgICAgICAgICAgIC4uLnRoaXMuYmFzZUxhYmVsQ2xhc3NcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmlucHV0Q2xhc3MgPSB7XG4gICAgICAgICAgICAuLi50aGlzLmlucHV0Q2xhc3MsXG4gICAgICAgICAgICAuLi50aGlzLmJhc2VJbnB1dENsYXNzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbE51bWJlcigpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBtYXggPSB0aGlzLnNpemVNYXBbdGhpcy5jdXJyZW50U2l6ZV07XG5cbiAgICAgICAgaWYgKHRoaXMubWF4Q29sdW1ucyAmJiBtYXggPiB0aGlzLm1heENvbHVtbnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1heENvbHVtbnM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRTcGVjaWFsU2xvdHMoZ3JpZDogRmllbGRHcmlkUm93W10pOiB2b2lkIHtcbiAgICAgICAgaWYgKCFncmlkIHx8IGdyaWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmVlZGVkU2xvdHMgPSB0aGlzLmdldE5lZWRlZEV4dHJhU2xvdHMoKTtcblxuICAgICAgICBpZiAobmVlZGVkU2xvdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xOdW1iZXIgPT09IDEpIHtcblxuICAgICAgICAgICAgbmVlZGVkU2xvdHMucmV2ZXJzZSgpLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Um93ID0ge1xuICAgICAgICAgICAgICAgICAgICBjb2xzOiBbXVxuICAgICAgICAgICAgICAgIH0gYXMgRmllbGRHcmlkUm93O1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsbFJvdyhuZXdSb3cpO1xuICAgICAgICAgICAgICAgIGdyaWQucHVzaChuZXdSb3cpO1xuXG4gICAgICAgICAgICAgICAgbmV3Um93LmNvbHNbMF1bdHlwZV0gPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFwcGVuZEFjdGlvbnMgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgY29uc3QgbGFzdFJvdyA9IGdyaWRbZ3JpZC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlID0gdGhpcy5jb2xOdW1iZXIgLSAxO1xuICAgICAgICAgICAgbmVlZGVkU2xvdHMuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgICAgICAgICAgICBsYXN0Um93LmNvbHNbcGxhY2VdW3R5cGVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0TmVlZGVkQ29sID0gdGhpcy5jb2xOdW1iZXIgLSBuZWVkZWRTbG90cy5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgbGFzdFJvdyA9IGdyaWRbZ3JpZC5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgaWYgKGxhc3RSb3cuY29sc1tsYXN0TmVlZGVkQ29sXS5maWVsZCkge1xuICAgICAgICAgICAgICAgIGxhc3RSb3cgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHM6IFtdXG4gICAgICAgICAgICAgICAgfSBhcyBGaWVsZEdyaWRSb3c7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxsUm93KGxhc3RSb3cpO1xuICAgICAgICAgICAgICAgIGdyaWQucHVzaChsYXN0Um93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHBsYWNlID0gdGhpcy5jb2xOdW1iZXIgLSAxO1xuICAgICAgICAgICAgbmVlZGVkU2xvdHMuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgICAgICAgICAgICBsYXN0Um93LmNvbHNbcGxhY2VdW3R5cGVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwbGFjZS0tO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXROZWVkZWRFeHRyYVNsb3RzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgbmVlZGVkU2xvdHMgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5hY3Rpb25zKSB7XG4gICAgICAgICAgICBuZWVkZWRTbG90cy5wdXNoKCdhY3Rpb25TbG90Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zcGVjaWFsKSB7XG4gICAgICAgICAgICBuZWVkZWRTbG90cy5wdXNoKCdzcGVjaWFsU2xvdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZWVkZWRTbG90cztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZmlsbFJvdyhyb3c6IEZpZWxkR3JpZFJvdyk6IHZvaWQge1xuICAgICAgICBjb25zdCBsZW4gPSByb3cuY29scy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPCB0aGlzLmNvbE51bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICByb3cuY29scy5wdXNoKHtmaWVsZDoge3R5cGU6ICcnLCBkaXNwbGF5OiAnbm9uZSd9fSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdFNjcmVlblNpemVPYnNlcnZlcihicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChicmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShbXG4gICAgICAgICAgICBCcmVha3BvaW50cy5IYW5kc2V0UG9ydHJhaXQsXG4gICAgICAgIF0pLnN1YnNjcmliZSgocmVzdWx0OiBCcmVha3BvaW50U3RhdGUpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNpemUgPSAnaGFuZHNldCc7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZEdyaWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKGJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKFtcbiAgICAgICAgICAgIEJyZWFrcG9pbnRzLlRhYmxldFBvcnRyYWl0LFxuICAgICAgICBdKS5zdWJzY3JpYmUoKHJlc3VsdDogQnJlYWtwb2ludFN0YXRlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0Lm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaXplID0gJ3RhYmxldCc7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZEdyaWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKGJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKFtcbiAgICAgICAgICAgIEJyZWFrcG9pbnRzLlRhYmxldExhbmRzY2FwZSxcbiAgICAgICAgICAgIEJyZWFrcG9pbnRzLldlYlBvcnRyYWl0LFxuICAgICAgICAgICAgQnJlYWtwb2ludHMuV2ViTGFuZHNjYXBlLFxuICAgICAgICBdKS5zdWJzY3JpYmUoKHJlc3VsdDogQnJlYWtwb2ludFN0YXRlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0Lm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaXplID0gJ3dlYic7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZEdyaWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKGJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKFtcbiAgICAgICAgICAgIEJyZWFrcG9pbnRzLlhMYXJnZSxcbiAgICAgICAgXSkuc3Vic2NyaWJlKChyZXN1bHQ6IEJyZWFrcG9pbnRTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2l6ZSA9ICd3aWRlJztcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkR3JpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgYnVpbGRHcmlkKCk6IHZvaWQ7XG5cbn1cbiJdfQ==