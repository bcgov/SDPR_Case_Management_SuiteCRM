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
import { BaseFieldComponent } from '../../../base/base-field.component';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { UserPreferenceStore } from '../../../../store/user-preference/user-preference.store';
import { ModuleNavigation } from "../../../../services/navigation/module-navigation/module-navigation.service";
import { ModuleNameMapper } from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AppStateStore } from "../../../../store/app-state/app-state.store";
import { ActionNameMapper } from "../../../../services/navigation/action-name-mapper/action-name-mapper.service";
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class EmailListFieldsComponent extends BaseFieldComponent implements OnInit {
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    protected preferences: UserPreferenceStore;
    protected navigation: ModuleNavigation;
    protected moduleNameMapper: ModuleNameMapper;
    protected actionNameMapper: ActionNameMapper;
    protected appState: AppStateStore;
    protected modalService: NgbModal;
    protected router: Router;
    linkType: string;
    constructor(typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager, preferences: UserPreferenceStore, navigation: ModuleNavigation, moduleNameMapper: ModuleNameMapper, actionNameMapper: ActionNameMapper, appState: AppStateStore, modalService: NgbModal, router: Router);
    ngOnInit(): void;
    openEmail(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailListFieldsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmailListFieldsComponent, "scrm-email-list", never, {}, {}, never, never, false, never>;
}
