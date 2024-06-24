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

import {Observable, of} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {EntityMutationGQL} from '../../../api/graphql-api/api.record.create';
import {FetchResult} from '@apollo/client/core';
import {ProcessService} from '../../process.service';
import {appStateStoreMock} from '../../../../store/app-state/app-state.store.spec.mock';
import {RecoverPasswordService} from './recover-password';

export const recoverPasswordMockData = {
    data: {
        createProcess: {
            process: {
                _id: 'recover-password',
                status: 'success',
                async: false,
                type: 'recover-password',
                messages: [
                    'LBL_RECOVER_PASSWORD_SUCCESS'
                ]
            },
            clientMutationId: null
        }
    }
};

class RecoverPasswordRecordMutationGQLSpy extends EntityMutationGQL {
    constructor() {
        super(null);
    }


    public create(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        graphqlModuleName: string,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        coreModuleName: string,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        input: { [key: string]: any },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        metadata: { fields: string[] }
    ): Observable<FetchResult<any>> {

        return of(recoverPasswordMockData).pipe(shareReplay());
    }
}

const processServiceMock = new ProcessService(new RecoverPasswordRecordMutationGQLSpy());

export const recoverPasswordMock = new RecoverPasswordService(processServiceMock, appStateStoreMock);
