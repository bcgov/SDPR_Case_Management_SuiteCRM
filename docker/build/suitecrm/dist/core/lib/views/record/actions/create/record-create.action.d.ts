import { Router } from '@angular/router';
import { ViewMode } from 'common';
import { ModuleNameMapper } from '../../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { RecordActionData, RecordActionHandler } from '../record.action';
import * as i0 from "@angular/core";
export declare class RecordCreateAction extends RecordActionHandler {
    protected moduleNameMapper: ModuleNameMapper;
    protected router: Router;
    key: string;
    modes: ViewMode[];
    constructor(moduleNameMapper: ModuleNameMapper, router: Router);
    run(data: RecordActionData): void;
    shouldDisplay(data: RecordActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordCreateAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordCreateAction>;
}
