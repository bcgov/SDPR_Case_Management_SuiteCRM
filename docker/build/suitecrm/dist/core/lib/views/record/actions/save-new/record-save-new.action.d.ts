import { ViewMode } from 'common';
import { RecordActionData, RecordActionHandler } from '../record.action';
import { MessageService } from '../../../../services/message/message.service';
import { ModuleNavigation } from '../../../../services/navigation/module-navigation/module-navigation.service';
import * as i0 from "@angular/core";
export declare class RecordSaveNewAction extends RecordActionHandler {
    protected message: MessageService;
    protected navigation: ModuleNavigation;
    key: string;
    modes: ViewMode[];
    constructor(message: MessageService, navigation: ModuleNavigation);
    run(data: RecordActionData): void;
    shouldDisplay(data: RecordActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordSaveNewAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordSaveNewAction>;
}
