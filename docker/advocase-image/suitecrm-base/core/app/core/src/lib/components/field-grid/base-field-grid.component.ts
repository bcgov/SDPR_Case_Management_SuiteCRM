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

import {Directive, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {FieldGridRow, LabelDisplay} from './field-grid.model';
import {ScreenSizeMap} from 'common';


@Directive()
export abstract class BaseFieldGridComponent implements OnInit, OnDestroy {
    @Input() special = false;
    @Input() actions = false;
    @Input() appendActions = false;

    @Input() labelDisplay: LabelDisplay = 'top';
    @Input() labelClass: { [klass: string]: any } = {};
    @Input() inputClass: { [klass: string]: any } = {};
    @Input() rowClass: { [klass: string]: any } = {};
    @Input() colClass: { [klass: string]: any } = {};
    @Input() colAlignItems: string = '';

    @Input() maxColumns: number;
    @Input() sizeMap: ScreenSizeMap = {
        handset: 1,
        tablet: 2,
        web: 3,
        wide: 4
    };

    fieldGrid: FieldGridRow[];

    baseColClass = {
        col: true,
        'form-group': true,
        'm-1': true
    } as { [key:string]: boolean };

    baseRowClass = {
        'form-row': true,
        'align-items-center': true
    } as { [key:string]: boolean };

    baseLabelClass = {
        'col-form-label-sm': true,
        'mb-0': true,
    };

    baseInputClass = {
        'form-control': true,
        'form-control-sm': true,
    };

    protected currentSize = 'web';

    protected subscriptions: Subscription[] = [];

    protected constructor(protected breakpointObserver: BreakpointObserver) {
    }

    ngOnInit(): void {
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

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    get colNumber(): number {
        const max = this.sizeMap[this.currentSize];

        if (this.maxColumns && max > this.maxColumns) {
            return this.maxColumns;
        }

        return max;
    }

    protected addSpecialSlots(grid: FieldGridRow[]): void {
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
                } as FieldGridRow;
                this.fillRow(newRow);
                grid.push(newRow);

                newRow.cols[0][type] = true;
            });

        } else if (this.appendActions === true) {

            const lastRow = grid[grid.length - 1];
            const place = this.colNumber - 1;
            neededSlots.forEach(type => {
                lastRow.cols[place][type] = true;
            });

        } else {
            const lastNeededCol = this.colNumber - neededSlots.length;
            let lastRow = grid[grid.length - 1];

            if (lastRow.cols[lastNeededCol].field) {
                lastRow = {
                    cols: []
                } as FieldGridRow;
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

    protected getNeededExtraSlots(): string[] {
        const neededSlots = [];

        if (this.actions) {
            neededSlots.push('actionSlot');
        }

        if (this.special) {
            neededSlots.push('specialSlot');
        }
        return neededSlots;
    }

    protected fillRow(row: FieldGridRow): void {
        const len = row.cols.length;
        for (let i = len; i < this.colNumber; i++) {
            row.cols.push({field: {type: '', display: 'none'}});
        }
    }

    protected initScreenSizeObserver(breakpointObserver: BreakpointObserver): void {
        this.subscriptions.push(breakpointObserver.observe([
            Breakpoints.HandsetPortrait,
        ]).subscribe((result: BreakpointState) => {
            if (result.matches) {
                this.currentSize = 'handset';
                this.buildGrid();
            }
        }));

        this.subscriptions.push(breakpointObserver.observe([
            Breakpoints.TabletPortrait,
        ]).subscribe((result: BreakpointState) => {
            if (result.matches) {
                this.currentSize = 'tablet';
                this.buildGrid();
            }
        }));

        this.subscriptions.push(breakpointObserver.observe([
            Breakpoints.TabletLandscape,
            Breakpoints.WebPortrait,
            Breakpoints.WebLandscape,
        ]).subscribe((result: BreakpointState) => {
            if (result.matches) {
                this.currentSize = 'web';
                this.buildGrid();
            }
        }));

        this.subscriptions.push(breakpointObserver.observe([
            Breakpoints.XLarge,
        ]).subscribe((result: BreakpointState) => {
            if (result.matches) {
                this.currentSize = 'wide';
                this.buildGrid();
            }
        }));
    }

    abstract buildGrid(): void;

}
