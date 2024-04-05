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

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {CreateViewStore} from '../../store/create-view/create-view.store';
import {RecordViewStore} from '../../../record/store/record-view/record-view.store';
import {RecordViewModel} from '../../../record/store/record-view/record-view.store.model';
import {AppStateStore} from '../../../../store/app-state/app-state.store';
import {ViewMode} from 'common';
import {RecordViewSidebarWidgetService} from "../../../record/services/record-view-sidebar-widget.service";

@Component({
    selector: 'scrm-create-record',
    templateUrl: './create-record.component.html',
    styleUrls: [],
    providers: [
        CreateViewStore,
        {
            provide: RecordViewStore,
            useExisting: CreateViewStore
        },
        RecordViewSidebarWidgetService
    ]
})
export class CreateRecordComponent implements OnInit, OnDestroy {
    recordSub: Subscription;
    vm$: Observable<RecordViewModel> = null;
    showStatusBar = false;

    constructor(protected appState: AppStateStore, protected recordStore: CreateViewStore, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        let mode = 'detail' as ViewMode;
        const data = (this.route.snapshot && this.route.snapshot.data) || {};

        if (data.mode) {
            mode = data.mode;
        }

        let params = (this.route.snapshot && this.route.snapshot.queryParams) || {} as Params;

        params = {...params};

        let recordId = this.route.snapshot.params.record;

        if (data.duplicate === true) {
            params.originalDuplicateId = recordId;
            params.isDuplicate = true;
            recordId = '';
        }
        this.recordSub = this.recordStore.init(this.appState.getModule(), recordId, mode, params).subscribe();
        this.vm$ = this.recordStore.vm$;
    }

    ngOnDestroy(): void {
        if (this.recordSub) {
            this.recordSub.unsubscribe();
        }

        this.recordStore.destroy();
    }
}
