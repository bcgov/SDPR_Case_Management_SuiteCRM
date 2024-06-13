import { BaseActionManager } from '../../../services/actions/base-action-manager.service';
import { SubpanelLineActionData } from './line.action';
import { AsyncProcessSubpanelLineAction } from './async-process/async-process.action';
import * as i0 from "@angular/core";
export declare class SubpanelLineActionManager extends BaseActionManager<SubpanelLineActionData> {
    protected async: AsyncProcessSubpanelLineAction;
    constructor(async: AsyncProcessSubpanelLineAction);
    static ɵfac: i0.ɵɵFactoryDeclaration<SubpanelLineActionManager, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SubpanelLineActionManager>;
}
