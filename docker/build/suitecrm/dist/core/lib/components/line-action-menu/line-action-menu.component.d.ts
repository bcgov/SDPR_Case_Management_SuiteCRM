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
import { Action, ActionDataSource, ButtonGroupInterface, ButtonInterface, Record } from 'common';
import { LanguageStore, LanguageStrings } from '../../store/language/language.store';
import { SubpanelActionManager } from "../../containers/subpanel/components/subpanel/action-manager.service";
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ScreenSize, ScreenSizeObserverService } from '../../services/ui/screen-size-observer/screen-size-observer.service';
import { SystemConfigStore } from '../../store/system-config/system-config.store';
import * as i0 from "@angular/core";
export interface LineActionMenuViewModel {
    actions: Action[];
    screenSize: ScreenSize;
    languages: LanguageStrings;
}
export declare class LineActionMenuComponent implements OnInit, OnDestroy {
    protected languageStore: LanguageStore;
    protected actionManager: SubpanelActionManager;
    protected languages: LanguageStore;
    protected screenSize: ScreenSizeObserverService;
    protected systemConfigStore: SystemConfigStore;
    klass: string;
    wrapperClass: string;
    record: Record;
    config: ActionDataSource;
    limitConfigKey: string;
    configState: BehaviorSubject<ButtonGroupInterface>;
    config$: Observable<ButtonGroupInterface>;
    actions: Action[];
    isButtonClicked: boolean;
    vm$: Observable<LineActionMenuViewModel>;
    protected buttonClass: string;
    protected buttonGroupClass: string;
    protected subs: Subscription[];
    protected screen: ScreenSize;
    protected defaultBreakpoint: number;
    protected breakpoint: number;
    constructor(languageStore: LanguageStore, actionManager: SubpanelActionManager, languages: LanguageStore, screenSize: ScreenSizeObserverService, systemConfigStore: SystemConfigStore);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getButtonGroupConfig(actions: Action[]): ButtonGroupInterface;
    getBreakpoint(): number;
    protected buildButton(action: Action): ButtonInterface;
    static ɵfac: i0.ɵɵFactoryDeclaration<LineActionMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LineActionMenuComponent, "scrm-line-action-menu", never, { "klass": { "alias": "klass"; "required": false; }; "wrapperClass": { "alias": "wrapperClass"; "required": false; }; "record": { "alias": "record"; "required": false; }; "config": { "alias": "config"; "required": false; }; "limitConfigKey": { "alias": "limitConfigKey"; "required": false; }; }, {}, never, never, false, never>;
}
