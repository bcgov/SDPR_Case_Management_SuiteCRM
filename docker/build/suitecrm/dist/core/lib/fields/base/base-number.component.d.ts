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
import { BaseFieldComponent } from './base-field.component';
import { SystemConfigMap, SystemConfigStore } from '../../store/system-config/system-config.store';
import { DataTypeFormatter } from '../../services/formatters/data-type.formatter.service';
import { UserPreferenceMap, UserPreferenceStore } from '../../store/user-preference/user-preference.store';
import { FieldLogicManager } from '../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class BaseNumberComponent extends BaseFieldComponent {
    protected userPreferences: UserPreferenceStore;
    protected systemConfig: SystemConfigStore;
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    preferences$: import("rxjs").Observable<UserPreferenceMap>;
    configs$: import("rxjs").Observable<SystemConfigMap>;
    vm$: import("rxjs").Observable<{
        configs: SystemConfigMap;
        preferences: UserPreferenceMap;
    }>;
    constructor(userPreferences: UserPreferenceStore, systemConfig: SystemConfigStore, typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    get format(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseNumberComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseNumberComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
