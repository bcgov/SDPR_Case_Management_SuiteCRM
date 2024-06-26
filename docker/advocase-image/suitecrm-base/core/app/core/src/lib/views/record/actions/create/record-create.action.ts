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

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ViewMode} from 'common';
import {ModuleNameMapper} from '../../../../services/navigation/module-name-mapper/module-name-mapper.service';
import {RecordActionData, RecordActionHandler} from '../record.action';

@Injectable({
    providedIn: 'root'
})
export class RecordCreateAction extends RecordActionHandler {
    key = 'create';
    modes = ['detail' as ViewMode];

    constructor(protected moduleNameMapper: ModuleNameMapper, protected router: Router) {
        super();
    }

    run(data: RecordActionData): void {
        const store = data.store;
        const baseRecord = store.getBaseRecord();

        const route = '/' + store.vm.appData.module.name + '/edit';
        const module = this.moduleNameMapper.toLegacy(store.vm.appData.module.name);

        this.router.navigate([route], {
            queryParams: {
                // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
                return_module: module,
                // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
                return_action: 'DetailView',
                // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
                return_record: (baseRecord && baseRecord.id) || ''
            }
        }).then();
    }

    shouldDisplay(data: RecordActionData): boolean {
        return this.checkRecordAccess(data, ['edit']);
    }
}
