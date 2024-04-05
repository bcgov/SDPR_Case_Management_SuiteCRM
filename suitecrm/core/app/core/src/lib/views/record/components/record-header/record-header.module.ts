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

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecordHeaderComponent} from './record-header.component';
import {ModuleTitleModule} from '../../../../components/module-title/module-title.module';
import {DynamicLabelModule} from '../../../../components/dynamic-label/dynamic-label.module';
import {ActionGroupMenuModule} from '../../../../components/action-group-menu/action-group-menu.module';
import {
    FavoriteToggleModule
} from '../../../../containers/favorite-toggle/components/favorite-toggle/favorite-toggle.module';

@NgModule({
    declarations: [RecordHeaderComponent],
    exports: [RecordHeaderComponent],
    imports: [
        CommonModule,
        ModuleTitleModule,
        DynamicLabelModule,
        ActionGroupMenuModule,
        FavoriteToggleModule
    ]
})
export class RecordHeaderModule {
}
