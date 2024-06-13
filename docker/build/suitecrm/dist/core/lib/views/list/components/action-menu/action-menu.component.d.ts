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
import { ButtonGroupInterface, ButtonInterface } from 'common';
import { BehaviorSubject } from 'rxjs';
import { ListViewStore } from '../../store/list-view/list-view.store';
import { SystemConfigStore } from '../../../../store/system-config/system-config.store';
import { ModuleAction } from '../../../../store/navigation/navigation.store';
import { ScreenSize, ScreenSizeObserverService } from '../../../../services/ui/screen-size-observer/screen-size-observer.service';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import { AsyncActionService } from '../../../../services/process/processes/async-action/async-action';
import * as i0 from "@angular/core";
export declare class ActionMenuComponent implements OnInit {
    protected listStore: ListViewStore;
    protected actionHandler: ModuleNavigation;
    protected screenSize: ScreenSizeObserverService;
    protected systemConfigs: SystemConfigStore;
    protected asyncActionService: AsyncActionService;
    configState: BehaviorSubject<ButtonGroupInterface>;
    config$: import("rxjs").Observable<ButtonGroupInterface>;
    vm$: import("rxjs").Observable<{
        screenSize: ScreenSize;
    }>;
    protected screen: ScreenSize;
    protected defaultBreakpoint: number;
    protected breakpoint: number;
    constructor(listStore: ListViewStore, actionHandler: ModuleNavigation, screenSize: ScreenSizeObserverService, systemConfigs: SystemConfigStore, asyncActionService: AsyncActionService);
    ngOnInit(): void;
    getButtonGroupConfig(): ButtonGroupInterface;
    getBreakpoint(): number;
    get actions(): ModuleAction[];
    getButtonConfig(action: ModuleAction): ButtonInterface;
    protected handleProcess(moduleName: string, process: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionMenuComponent, "scrm-action-menu", never, {}, {}, never, never, false, never>;
}
