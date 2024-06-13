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
import { Observable } from 'rxjs';
import { Action, ActionContext, ActionHandler, ModeActions, ViewMode } from 'common';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { RecordViewStore } from '../store/record-view/record-view.store';
import { RecordActionManager } from '../actions/record-action-manager.service';
import { AsyncActionInput, AsyncActionService } from '../../../services/process/processes/async-action/async-action';
import { RecordActionData } from '../actions/record.action';
import { LanguageStore } from '../../../store/language/language.store';
import { MessageService } from '../../../services/message/message.service';
import { Process } from '../../../services/process/process.service';
import { ConfirmationModalService } from '../../../services/modals/confirmation-modal.service';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import { SelectModalService } from '../../../services/modals/select-modal.service';
import { RecordActionDisplayTypeLogic } from '../action-logic/display-type/display-type.logic';
import { AppMetadataStore } from "../../../store/app-metadata/app-metadata.store.service";
import * as i0 from "@angular/core";
export declare class RecordActionsAdapter extends BaseRecordActionsAdapter<RecordActionData> {
    protected store: RecordViewStore;
    protected metadata: MetadataStore;
    protected language: LanguageStore;
    protected actionManager: RecordActionManager;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected selectModalService: SelectModalService;
    protected displayTypeLogic: RecordActionDisplayTypeLogic;
    protected appMetadataStore: AppMetadataStore;
    defaultActions: ModeActions;
    constructor(store: RecordViewStore, metadata: MetadataStore, language: LanguageStore, actionManager: RecordActionManager, asyncActionService: AsyncActionService, message: MessageService, confirmation: ConfirmationModalService, selectModalService: SelectModalService, displayTypeLogic: RecordActionDisplayTypeLogic, appMetadataStore: AppMetadataStore);
    getActions(context?: ActionContext): Observable<Action[]>;
    protected buildActionData(action: Action, context?: ActionContext): RecordActionData;
    /**
     * Build backend process input
     *
     * @param {Action} action Action
     * @param {string} actionName Action Name
     * @param {string} moduleName Module Name
     * @param {ActionContext|null} context Context
     * @returns {AsyncActionInput} Built backend process input
     */
    protected buildActionInput(action: Action, actionName: string, moduleName: string, context?: ActionContext): AsyncActionInput;
    protected getMode(): ViewMode;
    protected getModuleName(context?: ActionContext): string;
    protected reload(action: Action, process: Process, context?: ActionContext): void;
    protected shouldDisplay(actionHandler: ActionHandler<RecordActionData>, data: RecordActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordActionsAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordActionsAdapter>;
}
