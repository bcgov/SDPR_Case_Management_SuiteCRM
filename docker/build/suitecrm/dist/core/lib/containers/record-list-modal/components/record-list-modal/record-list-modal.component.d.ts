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
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ButtonInterface } from 'common';
import { Observable, Subscription } from 'rxjs';
import { ModalRecordFilterAdapter } from '../../adapters/filter.adapter';
import { RecordListModalTableAdapterInterface } from '../../adapters/adapter.model';
import { RecordListModalStore } from '../../store/record-list-modal/record-list-modal.store';
import { RecordListModalStoreFactory } from '../../store/record-list-modal/record-list-modal.store.factory';
import { TableConfig } from '../../../../components/table/table.model';
import { MaxColumnsCalculator } from '../../../../services/ui/max-columns-calculator/max-columns-calculator.service';
import { FilterConfig } from '../../../list-filter/components/list-filter/list-filter.model';
import { LanguageStore } from '../../../../store/language/language.store';
import { UserPreferenceStore } from "../../../../store/user-preference/user-preference.store";
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import * as i0 from "@angular/core";
export declare class RecordListModalComponent implements OnInit, OnDestroy {
    activeModal: NgbActiveModal;
    protected storeFactory: RecordListModalStoreFactory;
    protected languages: LanguageStore;
    protected maxColumnCalculator: MaxColumnsCalculator;
    protected preferences: UserPreferenceStore;
    protected systemConfigs: SystemConfigStore;
    titleKey: string;
    module: string;
    parentModule: string;
    multiSelect: boolean;
    multiSelectButtonLabel: string;
    adapter: RecordListModalTableAdapterInterface;
    filterAdapter: ModalRecordFilterAdapter;
    loading$: Observable<boolean>;
    closeButton: ButtonInterface;
    tableConfig: TableConfig;
    filterConfig: FilterConfig;
    store: RecordListModalStore;
    maxHeight: number;
    protected subs: Subscription[];
    constructor(activeModal: NgbActiveModal, storeFactory: RecordListModalStoreFactory, languages: LanguageStore, maxColumnCalculator: MaxColumnsCalculator, preferences: UserPreferenceStore, systemConfigs: SystemConfigStore);
    ngOnInit(): void;
    ngOnDestroy(): void;
    init(): void;
    getMaxColumns(): Observable<number>;
    linkSelectedRecords(): void;
    buildSelectButton(): ButtonInterface;
    protected initTableAdapter(): void;
    protected initFilterAdapters(): void;
    protected initStore(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordListModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecordListModalComponent, "scrm-record-list-modal", never, { "titleKey": { "alias": "titleKey"; "required": false; }; "module": { "alias": "module"; "required": false; }; "parentModule": { "alias": "parentModule"; "required": false; }; "multiSelect": { "alias": "multiSelect"; "required": false; }; "multiSelectButtonLabel": { "alias": "multiSelectButtonLabel"; "required": false; }; "adapter": { "alias": "adapter"; "required": false; }; "filterAdapter": { "alias": "filterAdapter"; "required": false; }; }, {}, never, never, false, never>;
}
