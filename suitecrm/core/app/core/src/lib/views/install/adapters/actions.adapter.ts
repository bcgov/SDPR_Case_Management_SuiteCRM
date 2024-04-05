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
import {Action, ActionContext, ModeActions, ViewMode} from 'common';
import {combineLatestWith, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MetadataStore} from '../../../store/metadata/metadata.store.service';
import {AsyncActionInput, AsyncActionService} from '../../../services/process/processes/async-action/async-action';
import {LanguageStore} from '../../../store/language/language.store';
import {MessageService} from '../../../services/message/message.service';
import {Process} from '../../../services/process/process.service';
import {ConfirmationModalService} from '../../../services/modals/confirmation-modal.service';
import {BaseRecordActionsAdapter} from '../../../services/actions/base-record-action.adapter';
import {InstallViewActionData} from '../actions/install-view.action';
import {InstallViewStore} from '../store/install-view/install-view.store';
import {InstallActionManager} from '../actions/install-action-manager.service';
import {SelectModalService} from '../../../services/modals/select-modal.service';

@Injectable()
export class InstallActionsAdapter extends BaseRecordActionsAdapter<InstallViewActionData> {

    defaultActions: ModeActions = {
        detail: [],
        edit: [
            {
                key: 'install',
                labelKey: 'LBL_PROCEED',
                params: {
                    expanded: true
                },
                acl: []
            },
        ],
        create: [],
    };
    collapseButtons = false;

    constructor(
        protected store: InstallViewStore,
        protected metadata: MetadataStore,
        protected language: LanguageStore,
        protected actionManager: InstallActionManager,
        protected asyncActionService: AsyncActionService,
        protected message: MessageService,
        protected confirmation: ConfirmationModalService,
        protected selectModalService: SelectModalService
    ) {
        super(
            actionManager,
            asyncActionService,
            message,
            confirmation,
            language,
            selectModalService,
            metadata
        )
    }

    getActions(context?: ActionContext): Observable<Action[]> {
        return this.store.getActions().pipe(
            combineLatestWith(this.store.mode$, this.store.stagingRecord$),
            map(([ actions, mode]: [Action[], ViewMode, Record<any, any>]) => {
                if (!mode) {
                    return [];
                }
                return this.parseModeActions(actions, mode, this.store.getViewContext());
            })
        );
    }

    protected buildActionData(action: Action, context?: ActionContext): InstallViewActionData {
        return {
            store: this.store
        } as InstallViewActionData;
    }

    /**
     * Build backend process input
     *
     * @param action
     * @param actionName
     * @param moduleName
     * @param context
     */
    protected buildActionInput(action: Action, actionName: string, moduleName: string, context: ActionContext = null): AsyncActionInput {
        const baseRecord = this.store.getBaseRecord();

        this.message.removeMessages();

        return {
            action: actionName,
            module: baseRecord.module,
            id: baseRecord.id,
            record: baseRecord
        } as AsyncActionInput;
    }

    protected getMode(): ViewMode {
        return this.store.getMode();
    }

    protected getModuleName(context?: ActionContext): string {
        return this.store.getModuleName();
    }

    protected reload(action: Action, process: Process, context?: ActionContext): void {
    }
}
