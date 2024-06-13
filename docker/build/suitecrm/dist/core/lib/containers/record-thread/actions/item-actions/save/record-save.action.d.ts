import { ViewMode } from 'common';
import { MessageService } from '../../../../../services/message/message.service';
import { ModuleNavigation } from '../../../../../services/navigation/module-navigation/module-navigation.service';
import { RecordThreadItemActionData, RecordThreadItemActionHandler } from '../record-thread-item.action';
import * as i0 from "@angular/core";
export declare class RecordThreadItemSaveAction extends RecordThreadItemActionHandler {
    protected message: MessageService;
    protected navigation: ModuleNavigation;
    key: string;
    modes: ViewMode[];
    constructor(message: MessageService, navigation: ModuleNavigation);
    run(data: RecordThreadItemActionData): void;
    shouldDisplay(data: RecordThreadItemActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordThreadItemSaveAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordThreadItemSaveAction>;
}
