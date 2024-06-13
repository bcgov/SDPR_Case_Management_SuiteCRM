import { ViewMode } from 'common';
import { MessageService } from '../../../../services/message/message.service';
import { SavedFilterActionData, SavedFilterActionHandler } from '../saved-filter.action';
import * as i0 from "@angular/core";
export declare class SavedFilterSaveAction extends SavedFilterActionHandler {
    protected message: MessageService;
    key: string;
    modes: ViewMode[];
    constructor(message: MessageService);
    run(data: SavedFilterActionData): void;
    shouldDisplay(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SavedFilterSaveAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SavedFilterSaveAction>;
}
