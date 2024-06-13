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
import { Observable } from 'rxjs';
import { SubpanelContainerConfig } from './subpanel-container.model';
import { LanguageStore, LanguageStrings } from '../../../../store/language/language.store';
import { SubpanelStore, SubpanelStoreMap } from '../../store/subpanel/subpanel.store';
import { MaxColumnsCalculator } from '../../../../services/ui/max-columns-calculator/max-columns-calculator.service';
import { GridWidgetConfig } from '../../../../components/grid-widget/grid-widget.component';
import { LocalStorageService } from "../../../../services/local-storage/local-storage.service";
import { FilterConfig } from "../../../list-filter/components/list-filter/list-filter.model";
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import * as i0 from "@angular/core";
export declare class SubpanelContainerComponent implements OnInit {
    protected languageStore: LanguageStore;
    protected maxColumnCalculator: MaxColumnsCalculator;
    protected localStorage: LocalStorageService;
    protected preferences: UserPreferenceStore;
    config: SubpanelContainerConfig;
    isCollapsed: import("@angular/core").WritableSignal<boolean>;
    toggleIcon: import("@angular/core").WritableSignal<string>;
    maxColumns$: Observable<number>;
    languages$: Observable<LanguageStrings>;
    vm$: Observable<{
        subpanels: SubpanelStoreMap;
    }>;
    openSubpanels: string[];
    filterConfig: FilterConfig;
    constructor(languageStore: LanguageStore, maxColumnCalculator: MaxColumnsCalculator, localStorage: LocalStorageService, preferences: UserPreferenceStore);
    ngOnInit(): void;
    getMaxColumns(): Observable<number>;
    toggleSubPanels(): void;
    showSubpanel(key: string, item: SubpanelStore): void;
    getCloseCallBack(key: string, item: SubpanelStore): Function;
    getGridConfig(vm: SubpanelStore): GridWidgetConfig;
    protected setCollapsed(newCollapsedValue: boolean): void;
    protected setToggleIcon(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SubpanelContainerComponent, "scrm-subpanel-container", never, { "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
