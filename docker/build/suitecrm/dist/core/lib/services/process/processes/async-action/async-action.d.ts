import { Observable } from 'rxjs';
import { Process, ProcessService } from '../../process.service';
import { AppStateStore } from '../../../../store/app-state/app-state.store';
import { MessageService } from '../../../message/message.service';
import { AsyncActionHandler } from './async-action.model';
import { Record, SearchCriteria, SortingSelection } from 'common';
import { RedirectAsyncAction } from './actions/redirect/redirect.async-action';
import { ExportAsyncAction } from './actions/export/export.async-action';
import { NoopAsyncAction } from './actions/noop/noop.async-action';
import { ChangelogAsyncAction } from './actions/changelog/changelog.async-action';
import * as i0 from "@angular/core";
export interface AsyncActionInput {
    action?: string;
    module?: string;
    criteria?: SearchCriteria;
    sort?: SortingSelection;
    ids?: string[];
    id?: string;
    payload?: {
        [key: string]: any;
    };
    modalRecord?: Record;
    record?: Record;
    [key: string]: any;
}
export declare class AsyncActionService {
    private processService;
    private appStateStore;
    protected message: MessageService;
    protected redirectAction: RedirectAsyncAction;
    protected exportAction: ExportAsyncAction;
    protected noopAction: NoopAsyncAction;
    protected changelogAction: ChangelogAsyncAction;
    actions: {
        [key: string]: AsyncActionHandler;
    };
    constructor(processService: ProcessService, appStateStore: AppStateStore, message: MessageService, redirectAction: RedirectAsyncAction, exportAction: ExportAsyncAction, noopAction: NoopAsyncAction, changelogAction: ChangelogAsyncAction);
    registerHandler(handler: AsyncActionHandler): void;
    /**
     * Send action request
     *
     * @param {string} actionName to submit
     * @param {string} data to send
     * @param {string} presetHandlerKey to use
     * @returns {object} Observable<Process>
     */
    run(actionName: string, data: AsyncActionInput, presetHandlerKey?: string): Observable<Process>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AsyncActionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AsyncActionService>;
}
