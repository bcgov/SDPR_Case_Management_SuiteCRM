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
import { Action, ActionContext, ActionData, ActionDataSource, ActionHandler, ActionManager, ModeActions, ViewMode } from 'common';
import { Observable } from 'rxjs';
import { AsyncActionInput, AsyncActionService } from '../process/processes/async-action/async-action';
import { MessageService } from '../message/message.service';
import { Process } from '../process/process.service';
import { ConfirmationModalService } from '../modals/confirmation-modal.service';
import { LanguageStore } from '../../store/language/language.store';
import { SelectModalService } from '../modals/select-modal.service';
import { MetadataStore } from '../../store/metadata/metadata.store.service';
import { AppMetadataStore } from "../../store/app-metadata/app-metadata.store.service";
export declare abstract class BaseActionsAdapter<D extends ActionData> implements ActionDataSource {
    protected actionManager: ActionManager<D>;
    protected asyncActionService: AsyncActionService;
    protected message: MessageService;
    protected confirmation: ConfirmationModalService;
    protected language: LanguageStore;
    protected selectModalService: SelectModalService;
    protected metadata: MetadataStore;
    protected appMetadataStore: AppMetadataStore;
    defaultActions: ModeActions;
    protected constructor(actionManager: ActionManager<D>, asyncActionService: AsyncActionService, message: MessageService, confirmation: ConfirmationModalService, language: LanguageStore, selectModalService: SelectModalService, metadata: MetadataStore, appMetadataStore: AppMetadataStore);
    abstract getActions(context?: ActionContext): Observable<Action[]>;
    protected abstract getModuleName(context?: ActionContext): string;
    protected abstract reload(action: Action, process: Process, context?: ActionContext): void;
    protected abstract getMode(): ViewMode;
    protected abstract buildActionData(action: Action, context?: ActionContext): D;
    /**
     * Run the action using given context
     * @param action
     * @param context
     */
    runAction(action: Action, context?: ActionContext): void;
    /**
     * Run async buk action
     *
     * @returns void
     * @param {string} selectModule: module for which records are listed in Select Modal/Popup
     * @param {string} asyncAction: bulk action name
     * @param {ActionContext} context
     */
    showSelectModal(selectModule: string, asyncAction: Action, context?: ActionContext): void;
    /**
     * Build async process input
     * @param action
     * @param actionName
     * @param moduleName
     * @param context
     */
    protected abstract buildActionInput(action: Action, actionName: string, moduleName: string, context?: ActionContext): AsyncActionInput;
    /**
     * Get action name
     * @param action
     */
    protected getActionName(action: Action): string;
    /**
     * Parse mode actions
     * @param declaredActions
     * @param mode
     * @param context
     */
    protected parseModeActions(declaredActions: Action[], mode: ViewMode, context?: ActionContext): any[];
    protected shouldDisplay(actionHandler: ActionHandler<D>, data: D): boolean;
    /**
     * Call actions
     * @param action
     * @param context
     */
    protected callAction(action: Action, context?: ActionContext): void;
    /**
     * Run async actions
     * @param action
     * @param context
     */
    protected runAsyncAction(action: Action, context?: ActionContext): void;
    /**
     * Run after async action handlers
     * @param actionName
     * @param moduleName
     * @param asyncData
     * @param process
     * @param action
     * @param context
     * @protected
     */
    protected afterAsyncAction(actionName: string, moduleName: string, asyncData: AsyncActionInput, process: Process, action: Action, context: ActionContext): void;
    /**
     * Reload the metadata for the module
     * @param moduleName
     * @param action
     * @param process
     * @param context
     * @protected
     */
    protected reloadMetadata(moduleName: string, action: Action, process: Process, context?: ActionContext): void;
    /**
     * Should reload page
     * @param process
     */
    protected shouldReloadGlobalRecentlyViewed(process: Process): boolean;
    /**
     * Should reload page
     * @param process
     */
    protected shouldReloadRecentlyViewed(process: Process): boolean;
    /**
     * Should reload page
     * @param process
     */
    protected shouldReloadFavorites(process: Process): boolean;
    /**
     * Should reload page
     * @param process
     */
    protected shouldReload(process: Process): boolean;
    /**
     * Run front end action
     * @param action
     * @param context
     */
    protected runFrontEndAction(action: Action, context?: ActionContext): void;
}
