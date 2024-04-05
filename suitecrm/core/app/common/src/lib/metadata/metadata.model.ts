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

import {FieldDefinition, FieldMetadata, LineItemsMetadata} from '../record/field.model';
import {FieldLogicMap} from '../actions/field-logic-action.model';
import {BehaviorSubject, Observable} from 'rxjs';

export interface ViewFieldDefinition {
    name?: string;
    vardefBased?: boolean;
    label?: string;
    labelKey?: string;
    dynamicLabelKey?: string;
    link?: boolean;
    type?: string;
    readonly?: boolean;
    display?: string;
    fieldDefinition?: FieldDefinition;
    lineItems?: LineItemsMetadata;
    metadata?: FieldMetadata;
    logic?: FieldLogicMap;
    displayLogic?: FieldLogicMap;
}

export interface Panel {
    label?: string;
    key: string;
    rows: PanelRow[];
    subPanels?: Panel[];
    displayState: BehaviorSubject<boolean>;
    display$: Observable<boolean>;
    meta: TabDefinition;
    isCollapsed: boolean;
}

export interface PanelRow {
    cols: PanelCell[];
}

export interface PanelCell extends ViewFieldDefinition {
    name?: string;
}

export interface ViewFieldDefinitionMap {
    [key: string]: ViewFieldDefinition;
}

export interface TabDefinitions {
    [key: string]: TabDefinition;
}

export interface TabDefinition {
    newTab: boolean;
    panelDefault: 'expanded' | 'collapsed';
    display?: boolean;
    displayLogic?: LogicDefinitions;
}

export interface LogicDefinitions {
    [key: string]: LogicDefinition;
}

export interface LogicDefinition {
    key: string;
    modes: Array<string>;
    params: {
        activeOnFields?: {
            [key: string]: LogicRuleValues[];
        };
        displayState?: boolean;
        fieldDependencies: Array<string>;
        asyncProcessHandler?: string;
    };
}

export interface LogicRuleValues{
    operator?: string;
    values?: any;
    value?: any;
    field?: string;
    [key: string]: string;
}
