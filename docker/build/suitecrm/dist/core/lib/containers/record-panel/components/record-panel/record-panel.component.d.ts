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
import { OnDestroy, OnInit } from '@angular/core';
import { ButtonInterface } from 'common';
import { BehaviorSubject, Observable } from 'rxjs';
import { RecordGridConfig } from '../../../../components/record-grid/record-grid.model';
import { RecordPanelConfig } from './record-panel.model';
import * as i0 from "@angular/core";
export declare class RecordPanelComponent implements OnInit, OnDestroy {
    config: RecordPanelConfig;
    closeButton: ButtonInterface;
    panelMode: 'collapsible' | 'closable' | 'none';
    isCollapsed$: Observable<boolean>;
    vm$: Observable<any>;
    protected collapse: BehaviorSubject<boolean>;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    getGridConfig(): RecordGridConfig;
    /**
     * Init close button
     */
    protected initCloseButton(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecordPanelComponent, "scrm-record-panel", never, { "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
