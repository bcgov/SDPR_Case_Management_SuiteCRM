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

import { combineLatestWith, Observable } from 'rxjs';
import {
    map,
    take,
} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
    Action,
    ActionContext,
    ActionHandler,
    LogicDefinitions,
    ModeActions,
    Record,
    ViewMode,
    Panel
} from 'common';
import { MetadataStore, RecordViewMetadata } from '../../../store/metadata/metadata.store.service';
import { RecordViewStore } from '../store/record-view/record-view.store';
import { RecordActionManager } from '../actions/record-action-manager.service';
import {
    AsyncActionInput,
    AsyncActionService,
} from '../../../services/process/processes/async-action/async-action';
import { RecordActionData } from '../actions/record.action';
import { LanguageStore, LanguageStrings } from '../../../store/language/language.store';
import { MessageService } from '../../../services/message/message.service';
import { Process } from '../../../services/process/process.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { RecordActionDisplayTypeLogic } from '../action-logic/display-type/display-type.logic';

@Injectable()
export class RecordActionsAdapter extends BaseRecordActionsAdapter<RecordActionData> {

    defaultActions: ModeActions = {
        detail: [
            {
                key: 'toggle-widgets',
                labelKey: 'LBL_INSIGHTS',
                params: {
                    expanded: true
                },
                acl: []
            },
        ],
        edit: [
            {
                key: 'toggle-widgets',
                labelKey: 'LBL_INSIGHTS',
                params: {
                    expanded: true
                },
                acl: []
            }
        ],
    };

    constructor(
        protected store: RecordViewStore,
        protected metadata: MetadataStore,
        protected language: LanguageStore,
        protected actionManager: RecordActionManager,
        protected asyncActionService: AsyncActionService,
        protected message: MessageService,
        protected confirmation: ConfirmationModalService,
        protected selectModalService: SelectModalService,
        protected displayTypeLogic: RecordActionDisplayTypeLogic,
    ) {
        super(
            actionManager,
            asyncActionService,
            message,
            confirmation,
            language,
            selectModalService,
            metadata
        );
    }

    getActions(context?: ActionContext): Observable<Action[]> {
        return this.metadata.recordViewMetadata$.pipe(
            combineLatestWith(this.store.mode$, this.store.record$, this.store.language$, this.store.widgets$, this.store.panels$),
            map(([meta, mode]: [RecordViewMetadata, ViewMode, Record, LanguageStrings, boolean, Panel[]]) => {
                if (!mode || !meta) {
                    return [];
                }

                return this.parseModeActions(meta.actions, mode, this.store.getViewContext());
            })
        );
    }

    protected buildActionData(action: Action, context?: ActionContext): RecordActionData {
        return {
            store: this.store,
            action,
        } as RecordActionData;
    }

    /**
     * Build backend process input
     *
     * @param {Action} action Action
     * @param {string} actionName Action Name
     * @param {string} moduleName Module Name
     * @param {ActionContext|null} context Context
     * @returns {AsyncActionInput} Built backend process input
     */
    protected buildActionInput(action: Action, actionName: string, moduleName: string, context: ActionContext = null): AsyncActionInput {
        const baseRecord = this.store.getBaseRecord();

        this.message.removeMessages();

        return {
            action: actionName,
            module: baseRecord.module,
            id: baseRecord.id,
            params: (action && action.params) || []
        } as AsyncActionInput;
    }

    protected getMode(): ViewMode {
        return this.store.getMode();
    }

    protected getModuleName(context?: ActionContext): string {
        return this.store.getModuleName();
    }

    protected reload(action: Action, process: Process, context?: ActionContext): void {
        this.store.load(false).pipe(take(1)).subscribe();
    }

    protected shouldDisplay(actionHandler: ActionHandler<RecordActionData>, data: RecordActionData): boolean {

        const displayLogic: LogicDefinitions | null = data?.action?.displayLogic ?? null;
        let toDisplay = true;

        if (displayLogic && Object.keys(displayLogic).length) {
            toDisplay = this.displayTypeLogic.runAll(displayLogic, data);
        }

        if (!toDisplay) {
            return false;
        }

        return actionHandler && actionHandler.shouldDisplay(data);
    }
}
