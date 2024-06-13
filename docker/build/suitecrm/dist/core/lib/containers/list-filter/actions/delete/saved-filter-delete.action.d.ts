import { ViewMode } from 'common';
import { MessageService } from '../../../../services/message/message.service';
import { SavedFilterActionData, SavedFilterActionHandler } from '../saved-filter.action';
import { AsyncActionService } from '../../../../services/process/processes/async-action/async-action';
import * as i0 from "@angular/core";
export declare class SavedFilterDeleteAction extends SavedFilterActionHandler {
    protected message: MessageService;
    protected asyncActionService: AsyncActionService;
    key: string;
    modes: ViewMode[];
    constructor(message: MessageService, asyncActionService: AsyncActionService);
    run(data: SavedFilterActionData): void;
    shouldDisplay(data: SavedFilterActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SavedFilterDeleteAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SavedFilterDeleteAction>;
}
