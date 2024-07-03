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

import {Component, ViewChild} from '@angular/core';
import {DataTypeFormatter} from '../../../../services/formatters/data-type.formatter.service';
import {BaseMultiEnumComponent} from '../../../base/base-multienum.component';
import {LanguageStore} from '../../../../store/language/language.store';
import {FieldLogicManager} from '../../../field-logic/field-logic.manager';
import {FieldLogicDisplayManager} from '../../../field-logic-display/field-logic-display.manager';
import {ScreenSizeObserverService} from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import {take} from "rxjs/operators";
import {SystemConfigStore} from "../../../../store/system-config/system-config.store";
import {PrimeNGConfig} from "primeng/api";
import {ButtonInterface} from "common";
import {MultiSelect} from "primeng/multiselect";
import {Option} from "common";

@Component({
    selector: 'scrm-multienum-edit',
    templateUrl: './multienum.component.html',
    styleUrls: []
})
export class MultiEnumEditFieldComponent extends BaseMultiEnumComponent {
    @ViewChild('multiSelect') multiSelect: MultiSelect;

    placeholderLabel: string = '';
    selectedItemsLabel: string = '';
    emptyFilterLabel: string = '';
    maxSelectedLabels: number = 20;
    selectAll: boolean = false;
    filteredOptions: Option[] = [];
    filteredWord: string= '';
    clearButton: ButtonInterface;

    constructor(
        protected languages: LanguageStore,
        protected typeFormatter: DataTypeFormatter,
        protected logic: FieldLogicManager,
        protected logicDisplay: FieldLogicDisplayManager,
        protected screenSize: ScreenSizeObserverService,
        protected systemConfigStore: SystemConfigStore,
        private primengConfig: PrimeNGConfig
    ) {
        super(languages, typeFormatter, logic, logicDisplay);
    }

    ngOnInit(): void {
        this.checkAndInitAsDynamicEnum();
        this.getTranslatedLabels();
        super.ngOnInit();
        const maxSelectedLabelsForDisplay = this.systemConfigStore.getUi('multiselect_max_number');
        this.screenSize.screenSize$
            .pipe(take(1))
            .subscribe((screenSize: any) => {
                this.maxSelectedLabels = maxSelectedLabelsForDisplay[screenSize] || this.maxSelectedLabels;
            })
        this.primengConfig.ripple = true;

        this.clearButton = {
            klass: ['btn', 'btn-sm', 'btn-outline-secondary', 'm-0', 'border-0'],
            onClick: (event): void => {
                this.onRemove();
            },
            icon: 'cross'
        } as ButtonInterface;
    }

    public onAdd(): void {
        const value = this.selectedValues.map(option => option.value);
        this.field.valueList = value;
        this.field.formControl.setValue(value);
        this.field.formControl.markAsDirty();

        this.calculateSelectAll();
    }

    public onSelectAll(event): void {
        this.selectAll = event.checked;
        if (this.selectAll) {
            if (this.multiSelect.visibleOptions() && this.multiSelect.visibleOptions().length) {
                this.selectedValues = this.multiSelect.visibleOptions();
            } else {
                this.selectedValues = this.options;
            }
            this.onAdd();
        } else {
            this.selectedValues = [];
            this.onRemove();
        }
    }

    public onRemove(): void {

        const value = this.selectedValues.map(option => option.value);
        this.field.valueList = value;
        this.field.formControl.setValue(value);
        this.field.formControl.markAsDirty();

        this.calculateSelectAll();
    }

    public onClear(): void {
        this.selectedValues = [];
        this.multiSelect.filterValue = '';
        this.onRemove();
    }

    onPanelShow(): void {
        this.multiSelect.filterInputChild.nativeElement.focus();
        this.multiSelect.filterValue = '';
        this.calculateSelectAll();
    }

    onFilter(): void {
        this.calculateSelectAll();
    }

    public getTranslatedLabels(): void {
        this.placeholderLabel = this.languages.getAppString('LBL_SELECT_ITEM') || '';
        this.selectedItemsLabel = this.languages.getAppString('LBL_ITEMS_SELECTED') || '';
        this.emptyFilterLabel = this.languages.getAppString('ERR_SEARCH_NO_RESULTS') || '';
    }

    protected calculateSelectAll(): void {
        const visibleOptions = this?.multiSelect?.visibleOptions() ?? [];
        const selectedValuesKeys = (this?.selectedValues ?? []).map(item => item.value);

        if (!visibleOptions.length || !selectedValuesKeys.length) {
            this.selectAll = false;
            return;
        }

        if (visibleOptions.length > selectedValuesKeys.length) {
            this.selectAll = false;
            return;
        }

        this.selectAll = visibleOptions.every(item => selectedValuesKeys.includes(item.value));
    }

}
