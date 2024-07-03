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

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {combineLatestWith, Observable, of, Subscription} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {
    ColumnDefinition,
    Field,
    Record,
    RecordSelection,
    SelectionStatus,
    SortDirection,
    SortingSelection
} from 'common';
import {FieldManager} from '../../../services/record/field/field.manager';
import {TableConfig} from '../table.model';
import {SortDirectionDataSource} from '../../sort-button/sort-button.model';
import {LoadingBufferFactory} from '../../../services/ui/loading-buffer/loading-buffer.factory';
import {LoadingBuffer} from '../../../services/ui/loading-buffer/loading-buffer.service';

interface TableViewModel {
    columns: ColumnDefinition[];
    selection: RecordSelection;
    selected: { [key: string]: string };
    selectionStatus: SelectionStatus;
    displayedColumns: string[];
    records: Record[] | readonly Record[];
    loading: boolean;
}

@Component({
    selector: 'scrm-table-body',
    templateUrl: 'table-body.component.html',
})
export class TableBodyComponent implements OnInit, OnDestroy {
    @Input() config: TableConfig;
    maxColumns = 4;
    popoverColumns: ColumnDefinition[];
    vm$: Observable<TableViewModel>;
    protected loadingBuffer: LoadingBuffer;
    protected subs: Subscription[] = [];

    constructor(
        protected fieldManager: FieldManager,
        protected loadingBufferFactory: LoadingBufferFactory
    ) {
        this.loadingBuffer = this.loadingBufferFactory.create('table_loading_display_delay');
    }

    ngOnInit(): void {
        const selection$ = this.config.selection$ || of(null).pipe(shareReplay(1));
        let loading$ = this.initLoading();

        this.vm$ = this.config.columns.pipe(
            combineLatestWith(
                selection$,
                this.config.maxColumns$,
                this.config.dataSource.connect(null),
                loading$
            ),
            map((
                [
                    columns,
                    selection,
                    maxColumns,
                    records,
                    loading
                ]
            ) => {
                const displayedColumns: string[] = [];

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
            })
        );
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }

    toggleSelection(id: string): void {
        this.config.toggleRecordSelection(id);
    }

    allSelected(status: SelectionStatus): boolean {
        return status === SelectionStatus.ALL;
    }

    buildDisplayColumns(metaFields: ColumnDefinition[]): string[] {
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

    buildHiddenColumns(metaFields: ColumnDefinition[], displayedColumns:string[]): ColumnDefinition[] {
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

        let hiddenColumns= fields.filter(obj => missingFields.includes(obj.name));

        return hiddenColumns;
    }

    getFieldSort(field: ColumnDefinition): SortDirectionDataSource {
        return {
            getSortDirection: (): Observable<SortDirection> => this.config.sort$.pipe(
                map((sort: SortingSelection) => {
                    let direction = SortDirection.NONE;

                    if (sort.orderBy === field.name) {
                        direction = sort.sortOrder;
                    }

                    return direction;
                })
            ),
            changeSortDirection: (direction: SortDirection): void => {
                this.config.updateSorting(field.name, direction);
            }
        } as SortDirectionDataSource;
    }

    getField(column: ColumnDefinition, record: Record): Field {

        if (!column || !record) {
            return null;
        }

        return this.fieldManager.addField(record, column);
    }

    protected initLoading(): Observable<boolean> {
        let loading$ = of(false).pipe(shareReplay(1));

        if (this.config.loading$) {
            this.subs.push(this.config.loading$.subscribe(loading => {
                this.loadingBuffer.updateLoading(loading);
            }));

            loading$ = this.loadingBuffer.loading$;
        }
        return loading$;
    }

    trackRecord(index: number, item: Record): any {
        return item?.id ?? '';
    }
}

