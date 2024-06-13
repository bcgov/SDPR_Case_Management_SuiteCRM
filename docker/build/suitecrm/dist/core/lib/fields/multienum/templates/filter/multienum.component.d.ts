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
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { LanguageStore } from '../../../../store/language/language.store';
import { BaseMultiEnumComponent } from '../../../base/base-multienum.component';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import { ScreenSizeObserverService } from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import { SystemConfigStore } from "../../../../store/system-config/system-config.store";
import { PrimeNGConfig } from "primeng/api";
import { MultiSelect } from "primeng/multiselect";
import * as i0 from "@angular/core";
export declare class MultiEnumFilterFieldComponent extends BaseMultiEnumComponent implements OnInit, OnDestroy {
    protected languages: LanguageStore;
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    protected screenSize: ScreenSizeObserverService;
    protected systemConfigStore: SystemConfigStore;
    private primengConfig;
    multiSelect: MultiSelect;
    placeholderLabel: string;
    selectedItemsLabel: string;
    emptyFilterLabel: string;
    maxSelectedLabels: number;
    selectAll: boolean;
    constructor(languages: LanguageStore, typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager, screenSize: ScreenSizeObserverService, systemConfigStore: SystemConfigStore, primengConfig: PrimeNGConfig);
    ngOnInit(): void;
    onAdd(): void;
    onRemove(): void;
    onClear(): void;
    onPanelShow(): void;
    onFilter(): void;
    getPlaceholderLabel(): string;
    onSelectAll(event: any): void;
    getTranslatedLabels(): void;
    protected addEmptyStringOption(): boolean;
    protected calculateSelectAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiEnumFilterFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiEnumFilterFieldComponent, "scrm-multienum-filter", never, {}, {}, never, never, false, never>;
}
