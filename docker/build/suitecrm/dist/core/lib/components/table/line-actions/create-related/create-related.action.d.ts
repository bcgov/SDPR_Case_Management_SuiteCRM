import { Router } from '@angular/router';
import { Action, ViewMode } from 'common';
import { ModuleNameMapper } from '../../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { LineActionActionHandler, LineActionData } from '../line.action';
import * as i0 from "@angular/core";
export declare class CreateRelatedLineAction extends LineActionActionHandler {
    protected moduleNameMapper: ModuleNameMapper;
    protected router: Router;
    key: string;
    modes: ViewMode[];
    constructor(moduleNameMapper: ModuleNameMapper, router: Router);
    run(data: LineActionData, action?: Action): void;
    shouldDisplay(data: LineActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateRelatedLineAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreateRelatedLineAction>;
}
