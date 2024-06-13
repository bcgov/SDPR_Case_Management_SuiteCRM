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
import { OnInit } from '@angular/core';
import { ActionContext, ButtonGroupInterface, ButtonInterface } from 'common';
import { Observable } from 'rxjs';
import { TableConfig } from '../../../../components/table/table.model';
import { SubpanelTableAdapter } from '../../adapters/table.adapter';
import { LanguageStore } from '../../../../store/language/language.store';
import { SubpanelStore } from '../../store/subpanel/subpanel.store';
import { SubpanelActionManager } from './action-manager.service';
import { SubpanelTableAdapterFactory } from '../../adapters/table.adapter.factory';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { FilterConfig } from "../../../list-filter/components/list-filter/list-filter.model";
import { SubpanelFilterAdapterFactory } from "../../adapters/filter.adapter.factory";
import { SubpanelFilterAdapter } from "../../adapters/filter.adapter";
import { SubpanelActionAdapterFactory } from "../../adapters/actions.adapter.factory";
import { SubpanelActionsAdapter } from "../../adapters/actions.adapter";
import * as i0 from "@angular/core";
export declare class SubpanelComponent implements OnInit {
    protected actionManager: SubpanelActionManager;
    protected languages: LanguageStore;
    protected tableAdapterFactory: SubpanelTableAdapterFactory;
    protected preferences: UserPreferenceStore;
    protected systemConfigs: SystemConfigStore;
    protected filterAdapterFactory: SubpanelFilterAdapterFactory;
    protected actionAdapterFactory: SubpanelActionAdapterFactory;
    store: SubpanelStore;
    maxColumns$: Observable<number>;
    onClose: Function;
    filterConfig: FilterConfig;
    closeButton: ButtonInterface;
    adapter: SubpanelTableAdapter;
    config$: Observable<ButtonGroupInterface>;
    tableConfig: TableConfig;
    filterAdapter: SubpanelFilterAdapter;
    actionsAdapter: SubpanelActionsAdapter;
    constructor(actionManager: SubpanelActionManager, languages: LanguageStore, tableAdapterFactory: SubpanelTableAdapterFactory, preferences: UserPreferenceStore, systemConfigs: SystemConfigStore, filterAdapterFactory: SubpanelFilterAdapterFactory, actionAdapterFactory: SubpanelActionAdapterFactory);
    ngOnInit(): void;
    getActionContext(): ActionContext;
    buildAdapters(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SubpanelComponent, "scrm-subpanel", never, { "store": { "alias": "store"; "required": false; }; "maxColumns$": { "alias": "maxColumns$"; "required": false; }; "onClose": { "alias": "onClose"; "required": false; }; "filterConfig": { "alias": "filterConfig"; "required": false; }; }, {}, never, never, false, never>;
}
